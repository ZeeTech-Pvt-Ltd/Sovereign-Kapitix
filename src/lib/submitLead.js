// =========================================================
// Lead submission - POSTs to apexai-experts.com/homeMailAction.php
// =========================================================
// That script relays the lead to the broker API (affilix) and returns a
// normalized envelope:
//
//   { "status": "success" | "error", "message": "...", "_debug": { ... } }
//
// `message` carries the field-level reason on failure (e.g. "Enter first
// name. (#8plo9)"). `_debug` is the script's own diagnostic block - it is only
// meaningful server-side and is deliberately not surfaced to visitors.
//
// WIRE FORMAT - application/json. This is not a preference, it is the only
// thing the script reads. Verified against the live endpoint on 2026-09-22:
//
//   POST with Content-Type: application/x-www-form-urlencoded and a body of
//   firstName=Ayesha&lastName=Khan came back with
//     _debug.payload_sent: { "firstName": "", "lastName": "", ... }
//   - every field empty. The script never parsed the form body, forwarded
//   blanks to affilix, and affilix answered "Enter first name." That is the
//   error visitors were seeing no matter what they typed into the form.
//
//   The same request sent as JSON came back with payload_sent carrying the
//   real values, so the script does read a JSON body.
//
// SIX KEYS GO OUT; the script adds `ip` itself (its payload_sent contained an
// ip the client never sent). `password` and `offerName` are sent from here on
// purpose:
//
//   password  a template constant, not a secret - the same string is in the
//             public JS bundle of every site built on this template. The script
//             has its own copy and fills it in when the client omits it.
//   offerName what routes the lead to this brand. The script falls back to a
//             shared default ("ClientCentral-Site") when the client sends
//             nothing, and uses the client's value when it is present -
//             verified: sending "SovereignKapitix-Site" made affilix receive
//             exactly that. Omitting it would send leads to the shared funnel.
//
// CORS is already answered correctly by the endpoint (Allow-Origin, Allow-
// Headers: Content-Type, Allow-Methods: POST, OPTIONS), so the JSON preflight
// succeeds. Note the script also rate-limits: three attempts per five minutes
// per IP, answered as { status: "error" } with its own wording.
//
// Obligations that come with switching this on, unchanged from before:
//   - the visitor's consent to be contacted,
//   - a privacy policy that says where their data goes, and
//   - whatever licence or registration your jurisdiction requires for the
//     activity you are actually conducting.
// =========================================================

const ENDPOINT = 'https://apexai-experts.com/homeMailAction.php'
const OFFER_NAME = 'SovereignKapitix-Site'
const PASSWORD = 'Lh23s3'
const TIMEOUT_MS = 15000

// The endpoint appends a support code to its messages, e.g. "Enter first name.
// (#8plo9)" or "Invalid email address. (#4rfvn)". It is noise to a visitor.
function stripCode(message) {
  return String(message).replace(/\s*\(#[A-Za-z0-9]+\)\s*$/, '').trim()
}

/**
 * @param {{firstName: string, lastName: string, email: string, phone: string}} lead
 *   `phone` must already be E.164 (see toE164 in phoneFormat.js).
 * @returns {Promise<{ok: true} | {ok: false, message: string}>}
 */
export async function submitLead({ firstName, lastName, email, phone }) {
  // Built explicitly rather than spread from the caller, so the wire format is
  // readable in one place and a stray form field cannot widen it.
  const body = {
    email: String(email ?? '').trim(),
    firstName: String(firstName ?? '').trim(),
    lastName: String(lastName ?? '').trim(),
    password: PASSWORD,
    phone: String(phone ?? '').trim(),
    offerName: OFFER_NAME,
  }

  const ctl = new AbortController()
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS)

  let res
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: ctl.signal,
    })
  } catch {
    // A timeout, a CORS rejection and a dropped connection are indistinguishable
    // here - fetch() rejects the same way for all three. One honest message
    // rather than a guess that might tell the visitor the lead definitely
    // failed and invite a duplicate submission.
    return { ok: false, message: 'We couldn’t reach the registration service just now. Please try again in a moment.' }
  } finally {
    clearTimeout(timer)
  }

  let data = null
  try {
    data = await res.json()
  } catch {
    data = null
  }

  // Check the HTTP status as well as the envelope: a 500 carrying a well-formed
  // success body is still a failure, and reading only `data.status` would report
  // it as a success and navigate the visitor to /thank-you for a lead that was
  // never sent.
  //
  // The two failure branches carry different advice on purpose. A non-2xx is the
  // service's problem, so it must not tell the visitor to check details that were
  // fine; a 2xx with status "error" is the server rejecting what was typed, and
  // there the details are exactly what to check.
  const serverMessage = typeof data?.message === 'string' ? stripCode(data.message) : ''

  if (!res.ok) {
    return { ok: false, message: serverMessage || 'We couldn’t reach the registration service just now. Please try again in a moment.' }
  }

  if (!data || data.status !== 'success') {
    return { ok: false, message: serverMessage || 'Something went wrong. Please check your details and try again.' }
  }

  return { ok: true }
}
