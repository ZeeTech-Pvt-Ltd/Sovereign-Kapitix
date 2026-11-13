import { Check } from './icons.jsx'
import { highlights } from '../data/home.js'

// The four one line highlights, as a strip rather than a card grid - they are
// short statements, not features that need explaining.
export default function Highlights() {
  return (
    <section className="section highlights-sec" id="highlights">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h2">
            {highlights.title}
            <mark>{highlights.titleMark}</mark>
          </h2>
        </div>

        <ul className="highlight-grid reveal">
          {highlights.items.map((h) => (
            <li key={h}>
              <span className="tick"><Check size={14} /></span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
