import RegistrationForm from './RegistrationForm.jsx'
import { ArrowRight } from './icons.jsx'
import { hero } from '../data/home.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <h1 className="h1">
            {hero.title}
            <mark>{hero.titleMark}</mark>
          </h1>
          <p className="lead">{hero.sub}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="/register">
              {hero.cta} <ArrowRight />
            </a>
          </div>
          <p className="hero-micro">{hero.micro}</p>
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
  )
}
