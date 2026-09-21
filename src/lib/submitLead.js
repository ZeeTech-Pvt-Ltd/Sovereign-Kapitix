// =========================================================
// Lead submission - POSTs to apexai-experts.com/homeMailAction.php
// =========================================================
// That script relays the lead on to the broker API and returns a normalized
// envelope:
//
//   { "status": "success" | "error", "message": "...", "_debug": { ... } }
//
// `message` carries the field-level reason on failure (e.g. "Enter first
// name."). `_debug` is the script's own diagnostic block - it is only
// meaningful server-side and is deliberately not surfaced to visitors.
//
// request/response contract
//   request   application/x-www-form-urlencoded (a PHP $_POST script will not
//             read a JSON body, and this content type is CORS-"simple", so it
//             avoids a preflight OPTIONS the script does not answer)
//   response  the envelope above
//
// The script fills in `password`, `ip` and `offerName` server-side, so this
// file must NOT send them. In particular do not add an offerName here: that
// identifier is what routes a lead into the shared multi-brand funnel, and it
// belongs on the server, not in client code where it ships to every visitor.
//
// CORS: the endpoint must return `Access-Control-Allow-Origin` for this
// origin or the browser discards the response and fetch() rejects. If
// submissions fail with a network error while the network tab shows a 200,
// that header is what is missing - it is a server-side fix.
//
// Obligations that come with switching this on, unchanged from before:
//   - the visitor's consent to be contacted,
//   - a privacy policy that says where their data goes, and
//   - whatever licence or registration your jurisdiction requires for the
//     activity you are actually conducting.
// =========================================================

const ENDPOINT = 'https://apexai-experts.com/homeMailAction.php'
const TIMEOUT_MS = 15000

// The two forms name their inputs differently - the registration form uses
// first_name/last_name, the contact form uses firstName/lastName - but the
// endpoint expects one shape, and it forwards camelCase to the broker API
// (see `payload_sent` in the script's own debug output). Normalize here rather
// than at the call sites: this is the single place to change if a live
// submission comes back saying a field is missing.
function normalize(p) {
  const out = {}
  for (const [k, v] of Object.entries(p)) {
    if (v === undefined || v === null) continue
    out[k === 'first_name' ? 'firstName' : k === 'last_name' ? 'lastName' : k] = v
  }
  return out
}

export async function submitLead(payload) {
  const ctl = new AbortController()
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS)

  let res
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(normalize(payload)).toString(),
      signal: ctl.signal,
    })
  } catch (e) {
    // AbortError means the request may well have landed - do not tell the
    // visitor it definitely failed and invite a duplicate submission.
    const timedOut = e?.name === 'AbortError'
    return {
      ok: false,
      message: timedOut
        ? 'This is taking longer than expected. Please try again in a moment.'
        : 'We could not reach the server. Please check your connection and try again.',
    }
  } finally {
    clearTimeout(timer)
  }

  // The script answers with JSON on both success and validation failure. A
  // non-JSON body means something upstream (a proxy, a 502 page) answered
  // instead, which is a real failure even if the status code was 2xx.
  let data = null
  try {
    data = await res.json()
  } catch {
    return { ok: false, message: 'The server returned an unexpected response. Please try again.' }
  }

  if (data?.status === 'success') return { ok: true }
  return {
    ok: false,
    message: typeof data?.message === 'string' && data.message ? data.message : 'Something went wrong. Please try again.',
  }
}
