import CtaBanner from './CtaBanner.jsx'
import { Check, ArrowRight, Icon } from './icons.jsx'

// Platform capabilities, in place of the numeric stats strip that used to sit
// here. Those figures (registered users, countries, deposits, currencies) were
// invented for the template; a card describing what the platform actually does
// is worth more than an unverifiable number, and it can be checked by anyone
// reading the page.
const platformCards = [
  {
    icon: 'bot',
    title: 'Automated Execution',
    text: 'The engine watches the markets continuously and can place trades on your behalf - or hand you the signal to act on yourself.',
  },
  {
    icon: 'clock',
    title: 'Markets Around the Clock',
    text: 'Crypto never closes, so the platform keeps working through the night and across weekends.',
  },
  {
    icon: 'chart',
    title: 'Multi-Asset Coverage',
    text: 'Equities, forex, crypto, commodities, and indices sit behind a single dashboard and one login.',
  },
  {
    icon: 'user',
    title: 'Manual or Automated',
    text: 'Switch between hands-free automation and placing your own trades whenever you prefer.',
  },
  {
    icon: 'shield',
    title: 'Layered Account Security',
    text: 'Two-factor authentication, 256-bit SSL encryption, and confirmation steps before any withdrawal.',
  },
  {
    icon: 'lock',
    title: 'Browser-Based Access',
    text: 'Nothing to install and no app to download - the platform runs in your browser on desktop and mobile.',
  },
]

const pillars = [
  {
    icon: 'bot',
    title: 'AI-Powered Analysis',
    text: "Sovereign Kapitix's AI watches the markets continuously and turns what it spots into clear, actionable signals - so a promising move rarely goes unnoticed.",
  },
  {
    icon: 'shield',
    title: 'Layered Account Security',
    text: 'Funds and personal data are shielded by strong encryption and layered account protection - from the moment you sign up to your very first withdrawal.',
  },
  {
    icon: 'user',
    title: 'Support, Your Way',
    text: 'A real support team is available around the clock to guide you - from your first login through your hundredth trade.',
  },
]

const mission = [
  {
    title: 'Accessible',
    text: "Expertise shouldn't be a barrier to trading. Every screen on Sovereign Kapitix is built to feel clear and welcoming, so a first-time trader can start with confidence - whatever their background.",
  },
  {
    title: 'Transparent',
    text: 'What you see is what you get. Fees, trade details, and platform rules are shown plainly up front, so nothing is hidden until after you act.',
  },
  {
    title: 'Innovative',
    text: 'The platform is refined continuously with the latest AI and algorithmic trading technology, keeping Sovereign Kapitix genuinely current rather than standing still.',
  },
  {
    title: 'Responsible',
    text: 'Safety comes first. Trading risks are explained in plain language, and sensible, measured trading is encouraged at every turn.',
  },
]


// TODO: the original set claimed SSL certification, GDPR compliance, and
// availability in "98+ countries" - none of it evidenced. Add only
// certifications and coverage you can actually document; the three below
// are descriptions of how the platform is built, not third-party claims.
const badges = ['256-bit Encryption', 'Two-Factor Authentication', 'Browser-Based Access']

const security = [
  { icon: 'shield', title: 'Your Funds Stay Safe', text: 'Funds remain in your own account at all times. Sovereign Kapitix is authorised only to place trades on your behalf - nothing more.' },
  { icon: 'lock', title: 'Strong Encryption', text: 'All data is protected by 256-bit SSL encryption, and API keys are encrypted both at rest and in transit.' },
  { icon: 'zap', title: 'Two-Factor Authentication', text: 'Accounts can be secured with two-factor authentication, biometric login, and confirmation steps before any withdrawal.' },
  { icon: 'user', title: 'Data Privacy Standards', text: 'Strict data-privacy and account-security practices are applied in every market Sovereign Kapitix serves.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-copy reveal">
            <span className="eyebrow">About Sovereign Kapitix</span>
            <h1 className="h1">
              Automated trading, <mark>without the complexity</mark>
            </h1>
            <p className="lead">
              Sovereign Kapitix studies the market around the clock and turns what it finds into clear, actionable
              opportunities. Our goal is simple - give every trader across Australia the tools to invest with
              confidence and full transparency.
            </p>
            <div className="about-cta">
              <a className="btn btn-primary" href="/" data-scroll="#register">
                Register Now <ArrowRight />
              </a>
              <a className="btn btn-ghost" href="/" data-scroll="#how">How It Works</a>
            </div>
          </div>

          <div className="about-visual reveal">
            <img
              className="about-hero-img"
              src="/about-us-hero.webp"
              alt="The Sovereign Kapitix trading workspace, showing a Bitcoin price chart, a buy and sell panel and the account sidebar"
              width="2128"
              height="1606"
              decoding="async"
            />
            <span className="about-chip one">
              <span className="ico"><Icon name="chart" size={16} /></span>
              Continuous Automated Analysis
            </span>
            <span className="about-chip two">
              <span className="ico"><Icon name="user" size={16} /></span>
              Browser-Based Access
            </span>
          </div>
        </div>
      </section>

      {/* Platform capabilities - replaces the numeric stats strip.
          The grid sits directly under the hero with no visible heading by
          design, but the section still needs one: without it the cards' own
          h3s are the first headings after the page h1 and the outline jumps a
          level. Visually hidden rather than omitted. */}
      <section className="about-cards">
        <h2 className="sr-only">Platform capabilities</h2>
        <div className="container about-cards-grid">
          {platformCards.map((c) => (
            <article className="about-pillar reveal" key={c.title}>
              <span className="about-pillar-ico"><Icon name={c.icon} size={26} /></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* What sets us apart */}
      <section className="section about-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What Sets Us Apart</span>
            <h2 className="h2">Technology, safety, and personal guidance</h2>
            <p className="lead">
              Our platform pairs automated market analysis with human support - so you never have to make decisions alone.
            </p>
          </div>

          <div className="about-pillars">
            {pillars.map((p) => (
              <article className="about-pillar reveal" key={p.title}>
                <span className="about-pillar-ico"><Icon name={p.icon} size={26} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section about-section alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Mission</span>
            <h2 className="h2">What we believe and why we built Sovereign Kapitix</h2>
          </div>

          <div className="about-mission">
            {mission.map((m, i) => (
              <div className="about-mission-item reveal" key={m.title}>
                <span className="num">0{i + 1}</span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Security */}
      <section className="section about-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Security & Data Protection</span>
            <h2 className="h2">Built on a safer trading experience</h2>
            <p className="lead">We apply a range of security and data-protection measures designed to support safer trading.</p>
            <div className="about-badges">
              {badges.map((b) => (
                <span key={b}><Check size={12} /> {b}</span>
              ))}
            </div>
          </div>

          <div className="about-security">
            {security.map((s) => (
              <article className="about-sec-card reveal" key={s.title}>
                <span className="about-pillar-ico"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Ready to begin?"
        title="Put automated trading to work"
        text="Create your Sovereign Kapitix account in about two minutes and let AI-driven strategies trade around the clock - with support available 24/5."
        cta="Register Now"
      />
    </>
  )
}
