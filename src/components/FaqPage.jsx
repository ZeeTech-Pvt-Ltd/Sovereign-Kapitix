import CtaBanner from './CtaBanner.jsx'
import FaqAccordion from './FaqAccordion.jsx'
import { faqGroups, faqPage } from '../data/pages.js'

// The /faq route: 30 questions in seven groups, with a jump menu.
//
// Grouped rather than flat because the brief asks for it, and because a single
// 30-item accordion is a wall. Each group renders its own <FaqAccordion/>, so
// opening a question in one group cannot leave another group's answer stuck
// open - the state is per group by construction.
//
// The same data feeds the page's FAQPage structured data via src/data/seo.js,
// so the two cannot drift.
export default function FaqPage() {
  return (
    <>
      <section className="terms-hero">
        <div className="container terms-hero-inner reveal">
          <span className="eyebrow">{faqPage.eyebrow}</span>
          <h1 className="h1">
            {faqPage.title}
            <mark>{faqPage.titleMark}</mark>
          </h1>
          <p className="lead">{faqPage.intro}</p>
        </div>
      </section>

      <section className="section faq-page">
        <div className="container">
          <nav className="jump-menu reveal" aria-label="Jump to a question group">
            {faqGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`}>{g.title}</a>
            ))}
          </nav>

          {faqGroups.map((g) => (
            <div className="faq-group" id={g.id} key={g.id}>
              <h2 className="h2 h2-sm">{g.title}</h2>
              <FaqAccordion items={g.items} idPrefix={`faq-${g.id}`} />
            </div>
          ))}

          <div className="still-questions reveal">
            <h2 className="h2 h2-sm">{faqPage.stillTitle}</h2>
            <p>{faqPage.stillBody}</p>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow={faqPage.cta.eyebrow}
        title={faqPage.cta.title}
        text={faqPage.cta.body}
        cta={faqPage.cta.cta}
        href="/register"
      />
    </>
  )
}
