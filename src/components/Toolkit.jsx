import { Icon } from './icons.jsx'
import { toolkit } from '../data/content.js'

// "Inside the toolkit" - six-card capability grid above the final CTA. Reuses
// the feat-grid / feat-card markup that Features and Precision already share,
// so it needs no new CSS.
export default function Toolkit() {
  return (
    <section className="section toolkit">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{toolkit.eyebrow}</span>
          <h2 className="h2">{toolkit.title}<mark>{toolkit.titleMark}</mark>{toolkit.titleEnd}</h2>
          <p className="lead">{toolkit.lead}</p>
        </div>

        <div className="feat-grid">
          {toolkit.cards.map((c) => (
            <article className="feat-card reveal" key={c.title}>
              <div className={`feat-ico ${c.green ? 'green' : ''}`}>
                <Icon name={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
