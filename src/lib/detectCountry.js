// =========================================================
// Best-effort guess at the visitor's country
// =========================================================
// Used for one thing only: pre-selecting the flag and dial code in the phone
// field, so a visitor does not have to hunt through 240 countries for their
// own. It never blocks the form, never validates anything, and every failure
// is swallowed - if nothing resolves, the caller keeps its own default.
//
// Order of preference:
//   1. IP geolocation   - where the visitor actually is.
//   2. navigator.language - the region subtag of "en-AU" is AU. No network.
//
// PRIVACY NOTE: step 1 makes one third-party request on page load. No form
// data is sent - the service sees only the IP address the request came from -
// but it is still a third-party call from a page whose forms are otherwise
// fully local. To drop it entirely, empty IP_ENDPOINTS below and detection
// falls back to the browser's own language setting, with no network at all.
//
// Must be called from an effect, never during render: the prerender runs
// renderToString in Node (no fetch, no navigator) and the baked HTML has to
// match the client's first render.
// =========================================================

const TIMEOUT_MS = 2500

// Tried in order, first hit wins. ipinfo.io is the one signup-form.html already
// uses (same token); the other two are keyless fallbacks so a rate-limited or
// rotated token degrades instead of silently dropping back to the default.
const IP_ENDPOINTS = [
  'https://ipinfo.io/json?token=5a8c00f1abba8d',
  'https://ipwho.is/',
  'https://ipapi.co/json/',
]

async function fromIp() {
  for (const url of IP_ENDPOINTS) {
    const ctl = new AbortController()
    const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(url, { signal: ctl.signal, headers: { Accept: 'application/json' } })
      if (!res.ok) continue
      const data = await res.json()
      // ipinfo.io answers with `country`, the other two with `country_code`.
      const code = data?.country_code ?? data?.country
      if (code) return String(code).toUpperCase()
    } catch {
      // Timeout, offline, blocked, CORS, rate limited - try the next endpoint.
    } finally {
      clearTimeout(timer)
    }
  }
  return null
}

function fromLanguage() {
  const tags = [...(navigator.languages ?? []), navigator.language].filter(Boolean)
  for (const tag of tags) {
    const region = String(tag).split('-')[1]
    if (region && /^[A-Za-z]{2}$/.test(region)) return region.toUpperCase()
  }
  return null
}

/**
 * @returns {Promise<string|null>} ISO 3166-1 alpha-2 code, or null if unknown.
 * The caller is responsible for checking the code against the picker's own
 * list - a code we do not carry is no more useful than no code at all.
 */
export async function detectCountry() {
  if (typeof window === 'undefined' || typeof fetch !== 'function') return null
  return (await fromIp()) ?? fromLanguage()
}
