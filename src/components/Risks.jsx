import { Icon } from './icons.jsx'
import { risks } from '../data/content.js'

// The mid-page risk section. The brief asks for it here rather than only in the
// footer: a plain-English risk block mid-page reads as honest, and it puts the
// downside in front of the visitor before the closing CTA rather than after it.
//
// Styled with the warning accent rather than the primary one, so it reads as a
// different kind of information from the fee and feature sections above it.
const ICONS = {
  'You Can Lose Money': 'shield',
  'Past Performance Is Not a Guide': 'chart',
  'Automation Follows Rules, Not Judgement': 'bot',
  'Start Small': 'gauge',
}

export default function Risks() {
  return (
    <section className="section risks-sec" id="risks">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{risks.eyebrow}</span>
          <h2 className="h2">
            {risks.title}
            <mark>{risks.titleMark}</mark>
          </h2>
          <p className="lead">{risks.lead}</p>
        </div>

        <div className="icon-cards reveal">
          {risks.items.map((r) => (
            <article className="icon-card warn" key={r.k}>
              <div className="ico"><Icon name={ICONS[r.k] ?? 'shield'} size={22} /></div>
              <h3>{r.k}</h3>
              <p>{r.v}</p>
            </article>
          ))}
        </div>

        <p className="section-note reveal">
          <a href={risks.link.href}>{risks.link.text}</a> {risks.linkEnd}
        </p>
      </div>
    </section>
  )
}
