import { Icon } from './icons.jsx'
import { trustBadges } from '../data/content.js'

// The assurance bar under the hero.
//
// Layout mirrors the trust bar on the operator's sibling site: a full-width
// banded row, four equal columns, each item a card with an icon beside its
// line. The earlier version was a plain white panel of ticked sentences, which
// read as a footnote rather than as four separate assurances.
//
// Every line restates something stated elsewhere on the page, so the bar adds
// visual weight without asserting anything new.
export default function TrustStrip() {
  return (
    <section className="trust-bar" aria-label="Platform assurances">
      <div className="container">
        <div className="trust-bar-row reveal">
          {trustBadges.map((b) => (
            <span className="trust-bar-item" key={b.text}>
              <span className="tb-ico"><Icon name={b.icon} size={18} /></span>
              {b.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
