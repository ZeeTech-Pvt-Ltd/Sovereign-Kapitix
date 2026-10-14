import { Icon, ArrowRight } from './icons.jsx'
import { featuresHead, features } from '../data/content.js'

// The feature grid, split so the section carries a visual.
//
// Four cards lead across the top; the remaining three sit beside the trading
// visual underneath. Seven cards in one flat grid left the last row three
// quarters empty, and the brief's rule is that a section of plain text between
// two data panels reads as filler - the visual is what stops this one reading
// that way.
export default function Features() {
  const lead = features.slice(0, 4)
  const rest = features.slice(4)

  return (
    <section className="section features-sec" id="features">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{featuresHead.eyebrow}</span>
          <h2 className="h2">
            {featuresHead.title}
            <mark>{featuresHead.titleMark}</mark>
          </h2>
          <p className="lead">{featuresHead.lead}</p>
        </div>

        <div className="feat-grid-4">
          {lead.map((f) => (
            <article className="feat-card reveal" key={f.title}>
              <div className={`step-ico ${f.green ? 'green' : ''}`}>
                <Icon name={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>

        <div className="feat-split">
          <div className="feat-visual reveal">
            <img
              className="feat-img"
              src="/live_trading_dashboard.webp"
              alt="The Sovereign Kapitix dashboard, showing an illustrative portfolio chart, an AI buy signal and covered markets"
              width="1280"
              height="1104"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="feat-rest">
            {rest.map((f) => (
              <article className="feat-row reveal" key={f.title}>
                <div className={`ico ${f.green ? 'green' : ''}`}>
                  <Icon name={f.icon} size={21} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}

            {/* Sits under the feature rows rather than centred below the whole
                section, so it closes the list it belongs to. A filled button,
                matching the other primary actions, pointing at /register. */}
            <a className="btn btn-primary feat-cta reveal" href="/register">
              Try the free demo account <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
