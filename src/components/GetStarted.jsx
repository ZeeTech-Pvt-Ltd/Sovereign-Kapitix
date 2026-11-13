import { ArrowRight } from './icons.jsx'
import { getStarted } from '../data/home.js'

// The onboarding walkthrough, four numbered steps and the document's CTA.
export default function GetStarted() {
  return (
    <section className="section get-started-sec" id="get-started">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{getStarted.eyebrow}</span>
          <h2 className="h2">
            {getStarted.title}
            <mark>{getStarted.titleMark}</mark>
          </h2>
        </div>

        <div className="flow-grid flow-grid-4">
          {getStarted.steps.map((s, i) => (
            <article className="flow-step reveal" key={s.title}>
              <span className="flow-no">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="section-action reveal">
          <a className="btn btn-primary" href="/register">
            {getStarted.cta} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
