import { useEffect, useRef, useState } from 'react'
import { countries } from '../data/countries.js'
import { detectCountry } from './detectCountry.js'
import { toE164 } from './phoneFormat.js'

// =========================================================
// The phone half of a lead form
// =========================================================
// Selected country + the number as typed + the E.164 value to submit. Shared
// by the homepage registration form and the contact form so the two behave
// identically - previously each kept its own copy of this state and its own
// copy of the trunk-prefix handling, which is exactly how they drift apart.
// =========================================================

/**
 * @param {string} defaultCountry ISO 3166-1 alpha-2, used until the IP lookup
 *   resolves (or forever, if it fails). This value is what the static
 *   prerender bakes in, so it must stay the argument-less default at build
 *   time - see the effect below.
 * @returns {{
 *   country: string,
 *   phone: string,
 *   setPhone: (v: string) => void,
 *   dial: number,
 *   onCountryChange: (code: string) => void,
 *   phoneE164: () => string,
 * }}
 */
export function usePhoneField(defaultCountry = 'AU') {
  const [country, setCountry] = useState(defaultCountry)
  const [phone, setPhone] = useState('')

  // Once the visitor picks a country themselves, the IP guess must not
  // overwrite it - it resolves a moment after mount and would otherwise yank
  // the flag back out from under them.
  const pickedCountry = useRef(false)

  // Pre-select the country from the visitor's IP. Runs only in the browser,
  // after hydration, so the prerendered HTML (always the default) still
  // matches the client's first render. Any failure leaves the default alone,
  // and a code the picker does not carry is discarded.
  useEffect(() => {
    let cancelled = false
    detectCountry().then((code) => {
      if (cancelled || !code || pickedCountry.current) return
      if (countries.some((c) => c[0] === code)) setCountry(code)
    })
    return () => { cancelled = true }
  }, [])

  const entry = countries.find((c) => c[0] === country)
  const dial = entry?.[2] ?? 61

  const onCountryChange = (code) => {
    pickedCountry.current = true
    setCountry(code)
  }

  return {
    country,
    phone,
    setPhone,
    dial,
    onCountryChange,
    // A function, not a value: the caller reads it once at submit time rather
    // than rebuilding the string on every keystroke.
    phoneE164: () => toE164(phone, dial),
  }
}
