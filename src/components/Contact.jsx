import { useState } from 'react'
import CtaBanner from './CtaBanner.jsx'
import PhoneNumberInput from './PhoneNumberInput.jsx'
import { ArrowRight, Icon } from './icons.jsx'
import { submitLead } from '../lib/submitLead.js'
import { navigateTo } from '../lib/navigate.js'
import { usePhoneField } from '../lib/usePhoneField.js'

// Layout follows the lyravestgrove contact reference; colors, fonts, and
// components are Sovereign Kapitix's own design system. Content is Sovereign Kapitix-branded.
const info = [
  { icon: 'mail', title: 'Email', value: 'support@sovereign-kapitix.net', hint: 'Replies within a few hours' },
  { icon: 'clock', title: 'Support Hours', value: '24/7, 365 days a year', hint: 'Round-the-clock assistance' },
  { icon: 'pin', title: 'Location', value: 'Melbourne, Victoria, Australia', hint: 'Serving traders across Australia' },
  { icon: 'zap', title: 'Response Time', value: 'Most questions answered within a few hours', hint: 'Fast, helpful support' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | err
  const [errMsg, setErrMsg] = useState('')
  // Same phone behaviour as the homepage form - IP-detected country, number
  // grouped for that country, E.164 on submit.
  const { country, phone, setPhone, onCountryChange, phoneE164 } = usePhoneField()

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const firstName = String(data.get('firstName') ?? '').trim()
    const lastName = String(data.get('lastName') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    if (!firstName || !lastName || !email || !phone) return
    setStatus('sending')
    setErrMsg('')
    try {
      const res = await submitLead({ firstName, lastName, email, phone: phoneE164() })
      // submitLead normalizes the endpoint's { status, message } envelope into
      // { ok, message }. Read only `ok` here - see the header comment in
      // src/lib/submitLead.js for the wire format.
      if (res?.ok) navigateTo('/thank-you')
      else {
        setStatus('err')
        setErrMsg(res?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('err')
      setErrMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="ct-hero">
        <div className="container ct-hero-inner reveal">
          <span className="eyebrow">Contact Us</span>
          <h1 className="h1">
            We&rsquo;d love to <mark>hear from you</mark>
          </h1>
          <p className="lead">
            Have a question about Sovereign Kapitix, your account, or automated trading? Our team is available around the
            clock - reach out and we&rsquo;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Get in touch */}
      <section className="section ct-main">
        <div className="container ct-grid">
          <div className="ct-info reveal">
            <span className="eyebrow">Get in touch</span>
            <h2 className="h2">How to reach us</h2>
            <p className="lead">
              Pick whichever channel works best for you - email, or the message form on this page.
            </p>

            <div className="ct-cards">
              {info.map((i) => (
                <div className="ct-card" key={i.title}>
                  <span className="ct-card-ico"><Icon name={i.icon} size={22} /></span>
                  <div>
                    <h3>{i.title}</h3>
                    <p>{i.value}</p>
                    <small>{i.hint}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ct-form-card reveal">
            <h3>Register your interest</h3>
            <p className="ct-form-sub">Fill in your details and our team will be in touch to get you started.</p>

            <form className="ct-form" onSubmit={onSubmit}>
                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-first">First Name *</label>
                    <input id="ct-first" name="firstName" type="text" placeholder="John" required autoComplete="given-name" />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-last">Last Name *</label>
                    <input id="ct-last" name="lastName" type="text" placeholder="Doe" required autoComplete="family-name" />
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-email">Email Address *</label>
                  <input id="ct-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-phone">Phone Number *</label>
                  <PhoneNumberInput
                    id="ct-phone"
                    name="phone"
                    country={country}
                    onCountryChange={onCountryChange}
                    value={phone}
                    onValueChange={setPhone}
                    autoComplete="tel"
                  />
                </div>

                {errMsg && <div className="form-message err">{errMsg}</div>}

                <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Register Now <ArrowRight size={16} /></>}
                </button>
              </form>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Explore trading opportunities"
        title="Register now and our team will be in touch"
        text="Open your Sovereign Kapitix account in minutes and put automated AI trading to work - with support available 24/7."
        cta="Register Now"
      />
    </>
  )
}
