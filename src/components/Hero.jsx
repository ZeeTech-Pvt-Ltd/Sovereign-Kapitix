import RegistrationForm from './RegistrationForm.jsx'
import Ticker from './Ticker.jsx'
import { Check, ArrowRight } from './icons.jsx'
import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="register">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="h1">
            {hero.title} <mark>{hero.titleMark}</mark>
          </h1>
          <p className="lead">{hero.lead}</p>

          <ul className="hero-checks">
            {hero.checks.map((c) => (
              <li key={c}>
                <span className="tick"><Check /></span> {c}
              </li>
            ))}
          </ul>

          <div className="hero-cta">
            <a className="btn btn-primary" href="/" data-scroll="#register">
              Register Now <ArrowRight />
            </a>
            <a className="btn btn-ghost" href="/" data-scroll="#how">How It Works</a>
          </div>
        </div>

        {/* Registration form - kept identical in flow to sovereign-kapitix.net */}
        <div className="form-wrap reveal">
          <div className="form-ring"></div>

          <div className="chip chip-1">
            <span className="ico" style={{ background: 'var(--grad)' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M11 3.5a3.5 3.5 0 0 1 3 5.25L17.5 15h-15L6 8.75A3.5 3.5 0 0 1 11 3.5Z" fill="#fff" /></svg>
            </span>
            {/* Was a review score + review count carried over from the
                template. Swap in a figure you can evidence, or leave a plain
                product fact like this one. */}
            <div><b>24/7</b><span>Platform access</span></div>
          </div>

          <div className="chip chip-2">
            <span className="ico" style={{ background: 'linear-gradient(114deg,#0F766E,#14B8A6)' }}>
              <Check />
            </span>
            {/* Was "AU Verified / Protected registration" - a claim this build
                cannot support. */}
            <div><b>Browser-based</b><span>Nothing to install</span></div>
          </div>

          <div className="reg-card">
            <h2>Register Now</h2>
            <p className="sub">It only takes about two minutes to get started</p>
            <RegistrationForm />
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  )
}
