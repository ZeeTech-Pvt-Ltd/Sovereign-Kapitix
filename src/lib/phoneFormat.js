// =========================================================
// National phone-number formatting, keyed by ISO 3166-1 alpha-2
// =========================================================
// Each entry is [mask, example]:
//   mask    - groups digits as they are typed. X is a digit slot, every other
//             character is a literal separator.
//   example - a realistic national number for that country. It doubles as the
//             input's placeholder, so the hint always matches the flag and
//             dial code currently shown.
//
// Masks are written for the number the way it is normally dialled locally,
// which means they INCLUDE the trunk prefix (the leading 0 in 0412 345 678).
// getPhoneFormat() below strips that prefix for display - see its comment.
//
// This is a display aid, not a validator. formatNational() never drops a digit
// and never blocks input, so a mask that does not match a country's real
// numbering plan can only ever produce odd spacing.
//
// Countries absent from this table fall back to DEFAULT_MASK.
// =========================================================

const DEFAULT_MASK = 'XXX XXX XXXX'
const DEFAULT_EXAMPLE = '123 456 7890'

const FORMATS = {
  // --- Oceania / the platform's home market ---
  AU: ['XXXX XXX XXX', '0412 345 678'],
  NZ: ['XXX XXX XXXX', '021 123 4567'],

  // --- North America ---
  US: ['(XXX) XXX-XXXX', '(555) 123-4567'],
  CA: ['(XXX) XXX-XXXX', '(416) 123-4567'],

  // --- UK & Ireland ---
  GB: ['XXXXX XXXXXX', '07911 123456'],
  IE: ['XXX XXX XXXX', '085 123 4567'],

  // --- South Asia ---
  IN: ['XXXXX XXXXX', '98765 43210'],
  PK: ['XXXX XXXXXXX', '0301 2345678'],
  BD: ['XXXXX XXXXXX', '01712 345678'],
  LK: ['XXX XXX XXXX', '071 234 5678'],
  NP: ['XXX XXX XXXX', '981 234 5678'],

  // --- Middle East ---
  AE: ['XXX XXX XXXX', '050 123 4567'],
  SA: ['XXX XXX XXXX', '051 234 5678'],
  QA: ['XXXX XXXX', '3312 3456'],
  KW: ['XXXX XXXX', '5123 4567'],
  IL: ['XXX XXX XXXX', '052 123 4567'],
  TR: ['XXXX XXX XXXX', '0532 123 4567'],

  // --- Europe ---
  DE: ['XXXX XXXXXXXX', '0151 23456789'],
  FR: ['XX XX XX XX XX', '06 12 34 56 78'],
  ES: ['XXX XXX XXX', '612 345 678'],
  IT: ['XXX XXX XXXX', '312 345 6789'],
  NL: ['XX XXXXXXXX', '06 12345678'],
  BE: ['XXXX XX XX XX', '0470 12 34 56'],
  CH: ['XXX XXX XX XX', '078 123 45 67'],
  AT: ['XXXX XXXXXXX', '0664 1234567'],
  PT: ['XXX XXX XXX', '912 345 678'],
  GR: ['XXX XXX XXXX', '691 234 5678'],
  SE: ['XXX XXX XX XX', '070 123 45 67'],
  NO: ['XXX XX XXX', '401 23 456'],
  DK: ['XX XX XX XX', '20 12 34 56'],
  FI: ['XXX XXX XXXX', '040 123 4567'],
  PL: ['XXX XXX XXX', '512 345 678'],
  CZ: ['XXX XXX XXX', '601 123 456'],
  HU: ['XX XXX XXXX', '20 123 4567'],
  RO: ['XXX XXX XXXX', '071 234 5678'],
  BG: ['XXX XXX XXXX', '087 123 4567'],
  RU: ['XXX XXX-XX-XX', '891 234-56-78'],
  UA: ['XXX XXX XXXX', '050 123 4567'],

  // --- Africa ---
  EG: ['XXX XXXX XXXX', '010 1234 5678'],
  MA: ['XXX XXX XXXX', '061 234 5678'],
  NG: ['XXXX XXX XXXX', '0803 123 4567'],
  KE: ['XXX XXXXXXX', '071 2345678'],
  GH: ['XXX XXX XXXX', '024 123 4567'],
  TZ: ['XXX XXX XXXX', '071 234 5678'],
  ZA: ['XXX XXX XXXX', '082 123 4567'],

  // --- Latin America ---
  BR: ['(XX) XXXXX-XXXX', '(11) 91234-5678'],
  MX: ['XX XXXX XXXX', '55 1234 5678'],
  AR: ['XX XXXX-XXXX', '11 1234-5678'],
  CL: ['X XXXX XXXX', '9 1234 5678'],
  CO: ['XXX XXX XXXX', '312 123 4567'],
  PE: ['XXX XXX XXX', '912 345 678'],

  // --- East & Southeast Asia ---
  CN: ['XXX XXXX XXXX', '138 1234 5678'],
  HK: ['XXXX XXXX', '5123 4567'],
  TW: ['XXXX XXX XXX', '0912 345 678'],
  JP: ['XXX-XXXX-XXXX', '090-1234-5678'],
  KR: ['XXX-XXXX-XXXX', '010-1234-5678'],
  SG: ['XXXX XXXX', '8123 4567'],
  MY: ['XXX-XXX XXXX', '012-345 6789'],
  TH: ['XXX XXX XXXX', '081 234 5678'],
  VN: ['XXX XXX XXXX', '091 234 5678'],
  ID: ['XXXX-XXXX-XXXX', '0812-3456-7890'],
  PH: ['XXXX XXX XXXX', '0917 123 4567'],
}

/**
 * The display format for a country, with the local trunk prefix removed.
 *
 * The table above is written the way each country dials itself, so entries for
 * trunk-prefix countries start with a 0. That 0 is redundant here: the country
 * code is already shown in the selector next to the field, and keeping it would
 * mean the visitor types 0 + their number while the +92 sits right beside it.
 * So the placeholder drops the 0 (0301 2345678 becomes 301 2345678) and the mask
 * loses the slot it occupied, which keeps what is typed looking exactly like the
 * hint. Countries with no trunk prefix are returned untouched.
 *
 * The dropped slot is always the FIRST 'X', because the trunk prefix is the
 * first digit. Not the first space-separated group - several masks (JP, KR, ID,
 * MY) group with '-' instead, so the first group can be the whole mask.
 *
 * @param {string} iso ISO 3166-1 alpha-2 code, e.g. 'AU'
 * @returns {{ mask: string, example: string }}
 */
export function getPhoneFormat(iso) {
  const [mask, example] = FORMATS[iso] ?? [DEFAULT_MASK, DEFAULT_EXAMPLE]
  if (!example.startsWith('0')) return { mask, example }
  return { mask: mask.replace('X', ''), example: example.slice(1) }
}

/**
 * Whether a national number still carries its country's trunk prefix.
 *
 * The field rejects these rather than silently dropping the 0, so the visitor
 * can see why their number was not accepted. See hasTrunkPrefix's callers.
 *
 * @param {string} national whatever is in the input
 * @returns {boolean}
 */
export function hasTrunkPrefix(national) {
  return String(national).replace(/\D/g, '').startsWith('0')
}

/**
 * Regroup a phone number against a mask, as the user types.
 *
 * Anything that is not a digit is discarded first, so this is safe to call on
 * its own output. Placement stops after the last digit the user actually
 * typed - that way a backspace at the end of a group never leaves a dangling
 * separator the user has to delete twice.
 *
 * @param {string} raw  whatever is currently in the input
 * @param {string} mask e.g. 'XXXX XXX XXX'
 * @returns {string}
 */
export function formatNational(raw, mask) {
  const digits = String(raw).replace(/\D/g, '')
  if (!mask) return digits

  let out = ''
  let i = 0
  for (const ch of mask) {
    if (i >= digits.length) break
    out += ch === 'X' ? digits[i++] : ch
  }

  // More digits than the mask has slots (a paste, or a longer numbering plan
  // than the mask assumes): keep them rather than silently truncating input.
  if (i < digits.length) out += `${out ? ' ' : ''}${digits.slice(i)}`

  return out
}

/**
 * Build the E.164 value a form submits: '+' then the dial code followed by the
 * national number with its trunk prefix removed.
 *
 * The leading '+' is deliberate. E.164 numbers are written with it, and it is
 * what marks a number as already-international to whatever reads it downstream -
 * the template this form submits to sends its numbers that way, and the endpoint
 * was verified accepting '+61412345678' back. Digits alone also parse, but a bare
 * '61412345678' is indistinguishable from a national number with a stray prefix.
 *
 * @param {string} national whatever is in the input - formatted or not
 * @param {number|string} dial the selected country's calling code, e.g. 61
 * @returns {string} e.g. '+61412345678'
 */
export function toE164(national, dial) {
  const code = String(dial ?? '').replace(/\D/g, '')
  let digits = String(national).replace(/\D/g, '')

  // The local trunk prefix - the 0 in 0412 345 678 or 07911 123456 - is not
  // part of the international number. Without this, 61 + 0412345678 is invalid.
  if (digits.startsWith('0')) digits = digits.slice(1)

  // Already carries the dial code (a pasted "+61 412 345 678"), so do not
  // prepend it a second time.
  if (code && digits.startsWith(code)) return `+${digits}`
  return `+${code}${digits}`
}
