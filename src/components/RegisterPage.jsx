import RegistrationForm from './RegistrationForm.jsx'
import { Check, Icon } from './icons.jsx'
import { registerPage, trustStrip } from '../data/content.js'

// The standalone /register route. It renders the same <RegistrationForm/> the
// homepage section and /contact do - never a copy, so the three can only ever
// drift if this file stops importing it.
//
// The risk band sits directly above the form, matching the homepage order: a
// reader should meet the downside before being asked for a phone number.
export default function RegisterPage() {
  return (
    <>
      <section className="terms-hero">
        <div className="container terms-hero-inner reveal">
          <span className="eyebrow">{registerPage.eyebrow}</span>
          <h1 className="h1">
            {registerPage.title}
            <mark>{registerPage.titleMark}</mark>
          </h1>
          <p className="lead">{registerPage.lead}</p>
        </div>
      </section>

      <section className="section reg-main">
        <div className="container reg-grid">
          <div className="reg-side reveal">
            <div className="risk-band">
              <h2>{registerPage.risk.title}</h2>
              <p>{registerPage.risk.text}</p>
              <a href={registerPage.risk.link.href}>{registerPage.risk.link.text}</a>
            </div>

            <ul className="tick-list">
              {trustStrip.map((t) => (
                <li key={t}>
                  <span className="tick"><Check size={15} /></span> {t}
                </li>
              ))}
              <li>
                <span className="tick"><Check size={15} /></span> Registration is free and takes about two minutes
              </li>
            </ul>
          </div>

          <div className="reg-form-card reveal">
            <h2 className="h2 h2-sm">Create Your Account</h2>
            <p className="reg-form-sub">Fill in your details and our team will be in touch to get you started.</p>
            <RegistrationForm />
          </div>
        </div>
      </section>

      <section className="section how-ready">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{registerPage.next.eyebrow}</span>
            <h2 className="h2">
              {registerPage.next.title}
              <mark>{registerPage.next.titleMark}</mark>
            </h2>
          </div>

          <div className="flow-grid flow-grid-3">
            {registerPage.next.steps.map((s) => (
              <article className="flow-step reveal" key={s.no}>
                <span className="flow-no">{s.no}</span>
                <div className="step-ico">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
