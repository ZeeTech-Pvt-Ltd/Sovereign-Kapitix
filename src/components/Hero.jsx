import RegistrationForm from './RegistrationForm.jsx'
import { Check, ArrowRight } from './icons.jsx'
import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="container hero-inner">
          <div className="hero-copy reveal">
            {/* Plain text, not the pill: the .eyebrow class carries a white
                background, border and full radius, none of which is wanted here. */}
            <span className="hero-eyebrow">{hero.eyebrow}</span>
            <h1 className="h1">
              {hero.title}
              <mark>{hero.titleMark}</mark>
            </h1>
            <p className="lead">{hero.lead}</p>

            <ul className="hero-checks">
              {hero.checks.map((c) => (
                <li key={c}>
                  <span className="tick"><Check /></span> {c}
                </li>
              ))}
            </ul>

            {/* Both buttons are page links rather than scroll anchors. They used
                to carry data-scroll="#register" while this section itself was
                id="register", so "Register Now" scrolled to where it already
                was and did nothing. #register now sits on the form card below,
                which is what the in-page CTAs elsewhere scroll to. */}
            <div className="hero-cta">
              <a className="btn btn-primary" href="/register">
                {hero.ctaPrimary} <ArrowRight />
              </a>
              <a className="btn btn-ghost" href="/how-it-works">{hero.ctaSecondary}</a>
            </div>
          </div>

          <div className="form-wrap reveal" id="register">
            <div className="form-ring"></div>

            <div className="reg-card">
              <h2>Open your account in 2 minutes</h2>
              <p className="sub">No fee to register. A local account manager will call to walk you through setup.</p>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
