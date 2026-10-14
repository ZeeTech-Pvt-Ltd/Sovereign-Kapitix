import CtaBanner from './CtaBanner.jsx'
import RegistrationForm from './RegistrationForm.jsx'
import FaqAccordion from './FaqAccordion.jsx'
import { Check } from './icons.jsx'
import { registerPage } from '../data/pages.js'

// The /register route. It renders the same <RegistrationForm/> the homepage
// section and /contact do - never a copy, so the three can only drift if this
// file stops importing it.
//
// Layout follows the brief: two columns on desktop with the benefit list on the
// left and the form on the right, and on mobile the heading first, then the
// form, then the benefits. CSS order does that without moving the markup.
//
// The risk line sits directly above the form, matching the homepage rule that a
// reader meets the downside before being asked for a phone number.
export default function RegisterPage() {
  const p = registerPage

  return (
    <>
      <section className="terms-hero">
        <div className="container terms-hero-inner reveal">
          <span className="eyebrow">{p.eyebrow}</span>
          <h1 className="h1">
            {p.title}
            <mark>{p.titleMark}</mark>
          </h1>
          <p className="lead">{p.sub}</p>
        </div>
      </section>

      <section className="section reg-main">
        <div className="container reg-grid">
          <div className="reg-side reveal">
            <ul className="tick-list">
              {p.benefits.map((b) => (
                <li key={b}>
                  <span className="tick"><Check size={15} /></span> {b}
                </li>
              ))}
            </ul>

            <div className="risk-band">
              <h2>{p.risk.title}</h2>
              <p>{p.risk.text}</p>
              <a href={p.risk.link.href}>{p.risk.link.text}</a>
            </div>
          </div>

          <div className="reg-form-card reveal">
            <h2 className="h2 h2-sm">{p.form.heading}</h2>
            <p className="reg-form-sub">{p.form.sub}</p>
            <RegistrationForm />
            <p className="trust-line">{p.trustLine}</p>
            <p className="existing-users">
              {p.existingUsers.text}{' '}
              <a href={p.existingUsers.link.href}>{p.existingUsers.link.text}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="rv-sec">
            <h2>{p.after.title}</h2>
            <dl className="rv-glance">
              {p.after.items.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">
              <a href={p.after.link.href}>{p.after.link.text}</a>
            </p>
          </div>

          <div className="rv-sec">
            <h2>{p.need.title}</h2>
            <ul className="rv-ticklist">
              {p.need.items.map((i) => (
                <li key={i}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec">
            <h2>{p.why.title}</h2>
            <dl className="rv-glance">
              {p.why.items.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">
              <a href={p.why.link.href}>{p.why.link.text}</a>
            </p>
          </div>

          <div className="rv-sec">
            <h2>{p.details.title}</h2>
            <p>
              {p.details.body} <a href={p.details.link.href}>{p.details.link.text}</a>
            </p>
          </div>

          <div className="rv-sec" id="faq">
            <h2>{p.faq.title}</h2>
            <FaqAccordion items={p.faq.items} idPrefix="reg-faq" />
          </div>

          <p className="small-print">Available to verified Australian residents aged 18+. Trading involves risk of loss.</p>
        </div>
      </section>

      <CtaBanner eyebrow={p.cta.eyebrow} title={p.cta.title} text={p.cta.body} cta={p.cta.cta} href="/" />
    </>
  )
}
