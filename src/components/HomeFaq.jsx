import FaqAccordion from './FaqAccordion.jsx'
import { faq } from '../data/home.js'

// The document's FAQ list. Eight questions: the withdrawal-time entry was left
// out because the document carried no answer for it.
export default function HomeFaq() {
  return (
    <section className="section faq-sec" id="faq">
      <div className="container narrow">
        <div className="section-head reveal">
          <h2 className="h2">
            Sovereign Kapitix <mark>FAQs</mark>
          </h2>
        </div>

        <FaqAccordion items={faq} idPrefix="home-faq" />
      </div>
    </section>
  )
}
