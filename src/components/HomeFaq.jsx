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

        {/* A filled button rather than an inline link, and on its own: the
            secondary "Create my free account" beside it has been removed. */}
        <div className="faq-actions reveal">
          <a className="btn btn-primary" href="/faq">
            Read all 30 questions <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
