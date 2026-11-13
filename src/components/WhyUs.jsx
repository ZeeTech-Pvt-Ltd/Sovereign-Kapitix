import { ArrowRight } from './icons.jsx'
import { whyUs } from '../data/home.js'

// Four reasons, each a title and one sentence, then the document's CTA.
export default function WhyUs() {
  return (
    <section className="section why-sec" id="why">
      <div className="container">
        <div className="section-head reveal">
          {whyUs.eyebrow && <span className="eyebrow">{whyUs.eyebrow}</span>}
          <h2 className="h2">
            {whyUs.title}
            {whyUs.titleMark && <mark>{whyUs.titleMark}</mark>}
          </h2>
        </div>

        <div className="icon-cards why-grid">
          {whyUs.items.map((w) => (
            <article className="why-card reveal" key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>

        <div className="section-action reveal">
          <a className="btn btn-primary" href="/register">
            {whyUs.cta} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
