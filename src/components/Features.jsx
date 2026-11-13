import { Icon } from './icons.jsx'
import { features } from '../data/home.js'

// The five features from the document, each a title and one sentence.
const ICONS = {
  'Explained Signals': 'zap',
  'Ready Made Exit Points': 'gauge',
  'Custom Price Alerts': 'clock',
  'Simple Dashboard': 'chart',
  'Browser Access': 'layers',
}

export default function Features() {
  return (
    <section className="section features-sec" id="features">
      <div className="container">
        <div className="section-head reveal">
          {features.eyebrow && <span className="eyebrow">{features.eyebrow}</span>}
          <h2 className="h2">
            {features.title}
            {features.titleMark && <mark>{features.titleMark}</mark>}
          </h2>
        </div>

        <div className="icon-cards feat-grid-5">
          {features.items.map((f) => (
            <article className="icon-card reveal" key={f.title}>
              <div className="ico"><Icon name={ICONS[f.title] ?? 'chart'} size={22} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
