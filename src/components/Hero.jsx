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
            <span className="eyebrow">{hero.eyebrow}</span>
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

            <div className="chip chip-1">
              <span className="ico" style={{ background: 'var(--grad)' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M11 3.5a3.5 3.5 0 0 1 3 5.25L17.5 15h-15L6 8.75A3.5 3.5 0 0 1 11 3.5Z" fill="#fff" /></svg>
              </span>
              <div><b>Free demo</b><span>No money at risk</span></div>
            </div>

            <div className="chip chip-2">
              <span className="ico" style={{ background: 'linear-gradient(114deg,#0F766E,#14B8A6)' }}>
                <Check />
              </span>
              <div><b>Browser-based</b><span>Nothing to install</span></div>
            </div>

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
