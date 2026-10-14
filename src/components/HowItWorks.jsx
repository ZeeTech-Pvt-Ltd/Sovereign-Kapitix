import { Icon, ArrowRight } from './icons.jsx'
import { steps, stepsHead } from '../data/content.js'

// The homepage's three-step summary. The full six-step walkthrough lives on
// /how-it-works - this section exists to give the shape of the process and hand
// the reader off to it, not to duplicate it.
export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{stepsHead.eyebrow}</span>
          <h2 className="h2">
            {stepsHead.title}
            <mark>{stepsHead.titleMark}</mark>
          </h2>
          <p className="lead">{stepsHead.lead}</p>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <article className="step reveal" key={step.title}>
              <span className="step-no">{step.no}</span>
              <div className={`step-ico ${step.green ? 'green' : ''}`}>
                <Icon name={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <a className="btn-link" href="/" data-scroll="#register">
                {step.cta} <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="how-actions reveal">
          <a className="btn btn-primary" href="/how-it-works">
            See the full six-step guide <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
