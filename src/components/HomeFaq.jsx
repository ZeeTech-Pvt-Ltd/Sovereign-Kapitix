import { ArrowRight } from './icons.jsx'
import FaqAccordion from './FaqAccordion.jsx'
import { faq } from '../data/content.js'

// The homepage FAQ. The brief asks for FAQPage schema on this section, and for
// each answer to sit between 40 and 60 words so it can win a featured snippet.
export default function HomeFaq() {
  return (
    <section className="section faq-sec" id="faq">
      <div className="container narrow">
        <div className="section-head reveal">
          <span className="eyebrow">Questions</span>
          <h2 className="h2">
            Sovereign Kapitix <mark>FAQs</mark>
          </h2>
        </div>

        <FaqAccordion items={faq} idPrefix="home-faq" />

        <div className="faq-actions reveal">
          <a className="btn-link" href="/faq">Read all 30 questions</a>
          <a className="btn btn-primary" href="/" data-scroll="#register">
            Create my free account <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
