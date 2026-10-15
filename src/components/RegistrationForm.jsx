'use client'

// Client component: it holds state and attaches DOM listeners. Its parent stays
// a server component and renders it as a client boundary.

import { useRef, useState } from 'react'
import { ArrowRight } from './icons.jsx'
import { Visa, Mastercard, PayPal, GooglePay, BankTransfer } from './PayLogos.jsx'
import PhoneNumberInput from './PhoneNumberInput.jsx'
import { submitLead } from '../lib/submitLead.js'
import { useRouter } from 'next/navigation'
import { usePhoneField } from '../lib/usePhoneField.js'
import { hasTrunkPrefix } from '../lib/phoneFormat.js'

// Validation rules - kept identical to the reference site
const nameRe = /^(?!.*(?:tg|telegram|traffic|bot))[^@\d]{2,20}$/i
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const fields = {
  first_name: { label: 'First Name', type: 'text', placeholder: 'Jorden', autocomplete: 'given-name', error: 'Please enter a valid first name.' },
  last_name: { label: 'Last Name', type: 'text', placeholder: 'Clarke', autocomplete: 'family-name', error: 'Please enter a valid last name.' },
  email: { label: 'Email', type: 'email', placeholder: 'jorden@gmail.com', autocomplete: 'email', error: 'Please enter a valid email address.' },
  phone: { label: 'Phone', type: 'tel', placeholder: 'Enter your Phone Number', autocomplete: 'tel', error: 'Please enter a valid phone number.' },
}

// The consent line the operator's brief requires, because the account manager
// calls every new sign-up: contact consent has to be explicit under the
// Australian Spam Act and Privacy Act. It is a separate, unticked control the
// visitor has to assert themselves.
const CONSENT =
  'I agree that Sovereign Kapitix may contact me by phone and email about my account. I can opt out at any time.'

const payMethods = [
  { name: 'VISA', Icon: Visa },
  { name: 'Mastercard', Icon: Mastercard },
  { name: 'PayPal', Icon: PayPal },
  { name: 'Google Pay', Icon: GooglePay },
  { name: 'Bank Transfer', Icon: BankTransfer },
]

export default function RegistrationForm() {
  const router = useRouter()
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState({ kind: '', text: '' })
  const [processing, setProcessing] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const { country, phone, setPhone, onCountryChange, phoneE164 } = usePhoneField()
  const formRef = useRef(null)

  // Returns '' when the value is acceptable, otherwise the message to show. The
  // phone field needs its own wording for one case, so this cannot be a plain
  // boolean - see the trunk-prefix branch below.
  const validate = (field, value) => {
    const v = value.trim()
    if (!v) return field.error
    if (field.type === 'email') return emailRe.test(v) ? '' : field.error
    if (field.type === 'tel') {
      // The country code is already selected in the field beside this input, so
      // a local trunk prefix is redundant - and left in, it would build an
      // invalid international number (61 + 0412...). Reject it with a reason
      // rather than quietly swallowing the digit.
      if (hasTrunkPrefix(v)) {
        return 'Enter the number without the leading 0 — the country code is already selected.'
      }
      return v.replace(/[^0-9+]/g, '').length >= 8 ? '' : field.error
    }
    return nameRe.test(v) ? '' : field.error
  }

  const clearError = (name) => {
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleBlur = (e) => {
    const field = fields[e.target.name]
    if (!field || !e.target.value.trim()) return
    const error = validate(field, e.target.value)
    if (error) setErrors((prev) => ({ ...prev, [e.target.name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const nextErrors = {}
    for (const [name, field] of Object.entries(fields)) {
      const error = validate(field, data.get(name) ?? '')
      if (error) nextErrors[name] = error
    }
    setErrors(nextErrors)
    setMessage({ kind: '', text: '' })
    if (Object.keys(nextErrors).length) return
    // Contact consent is required, not assumed. The account manager calls every
    // new sign-up, so this is the assertion that makes that lawful; the form
    // will not submit without it, and it is never pre-ticked.
    if (!agreed) {
      setMessage({ kind: 'err', text: 'Please tick the consent box so we can contact you about your account.' })
      return
    }
    setProcessing(true)
    try {
      // Four keys, named explicitly. This used to forward every field the form
      // declared, including five hidden inputs (id, country, phone_code, subid,
      // language) - but the endpoint takes exactly six keys and derives the rest
      // itself, so those five were never read. Naming the four the server
      // actually wants keeps the form's markup free to change without silently
      // altering what gets submitted. The phone input holds a national-format
      // number, so it goes out as E.164.
      const res = await submitLead({
        firstName: String(data.get('first_name') ?? ''),
        lastName: String(data.get('last_name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: phoneE164(),
      })
      // submitLead normalizes the endpoint's { status, message } envelope into
      // { ok, message }. Read only `ok` here - see the header comment in
      // src/lib/submitLead.js for the wire format.
      if (res?.ok) {
        router.push('/thank-you')
      } else {
        setMessage({ kind: 'err', text: res?.message || 'Something went wrong. Please try again.' })
      }
    } catch {
      setMessage({ kind: 'err', text: 'Something went wrong. Please try again.' })
    } finally {
      setProcessing(false)
    }
  }

  const renderField = (name) => {
    const f = fields[name]
    return (
      <div key={name} className={`field ${errors[name] ? 'error' : ''}`}>
        <label htmlFor={name}>{f.label}</label>
        <input
          className={`input ${errors[name] ? 'invalid' : ''}`}
          type={f.type}
          id={name}
          name={name}
          placeholder={f.placeholder}
          autoComplete={f.autocomplete}
          onInput={(e) => clearError(e.target.name)}
          onBlur={handleBlur}
          required
        />
        <p className="error-msg">{typeof errors[name] === 'string' ? errors[name] : f.error}</p>
      </div>
    )
  }

  return (
    <form id="regForm" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        {renderField('first_name')}
        {renderField('last_name')}
      </div>

      {/* Email and phone share a row, matching the name row above. The phone
          field is composite (a country picker button plus the input), so it is
          written out rather than going through renderField. */}
      <div className="field-row">
        {renderField('email')}

        <div className={`field ${errors.phone ? 'error' : ''}`}>
          <label htmlFor="phone">Phone</label>
          <PhoneNumberInput
            country={country}
            onCountryChange={onCountryChange}
            value={phone}
            onValueChange={(v) => {
              setPhone(v)
              clearError('phone')
            }}
            onBlur={handleBlur}
            invalid={errors.phone}
            id="phone"
            name="phone"
            autoComplete="tel"
          />
          <p className="error-msg">
            {typeof errors.phone === 'string' ? errors.phone : fields.phone.error}
          </p>
        </div>
      </div>

      <label className="consent">
        <input
          type="checkbox"
          name="agree"
          checked={agreed}
          onChange={(e) => {
            setAgreed(e.target.checked)
            if (e.target.checked) setMessage({ kind: '', text: '' })
          }}
        />
        <span>{CONSENT}</span>
      </label>

      <button className="btn btn-primary btn-block" type="submit" disabled={processing}>
        {processing ? 'Processing…' : 'Create my free account'}
        {!processing && <ArrowRight />}
      </button>
      {message.kind && <div className={`form-message ${message.kind}`}>{message.text}</div>}

      {/* Relative, not absolute. These pointed at
          https://sovereign-kapitix.net/privacy and /terms, which is wrong in
          both directions: on the dev server or any staging host the links leave
          the site entirely, and in production they force a full page load
          instead of the SPA navigation every other link on the site uses. */}
      <p className="legal">
        By registering you agree to our <a href="/terms">Terms of Use</a> and{' '}
        <a href="/privacy">Privacy Policy</a>. Trading involves risk of loss. Read the{' '}
        <a href="/disclosure">risk disclosure</a>.
      </p>

      <div className="pay-row" aria-label="Accepted payment methods">
        {payMethods.map(({ name, Icon }) => (
          <span className="pay" key={name} title={name}>
            <Icon />
          </span>
        ))}
      </div>
    </form>
  )
}
