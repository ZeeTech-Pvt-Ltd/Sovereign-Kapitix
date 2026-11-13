import { ArrowRight } from './icons.jsx'
import { security } from '../data/home.js'

// Security and transparency, then the document's risk notice and CTA. The risk
// notice stays in this section rather than being moved to the footer: the
// document places it here, and the operator's brief asks for the downside to
// appear before the closing invitation.
export default function Security() {
  return (
    <section className="section security-sec" id="security">
      <div className="container">
        <div className="section-head reveal">
          {security.eyebrow && <span className="eyebrow">{security.eyebrow}</span>}
          <h2 className="h2">
            {security.title}
            {security.titleMark && <mark>{security.titleMark}</mark>}
          </h2>
        </div>

        <div className="icon-cards why-grid">
          {security.items.map((s) => (
            <article className="why-card reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <p className="risk-notice reveal">{security.riskNotice}</p>

        <div className="section-action reveal">
          <a className="btn btn-primary" href="/register">
            {security.cta} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
