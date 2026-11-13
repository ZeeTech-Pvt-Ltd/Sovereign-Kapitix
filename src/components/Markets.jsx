import { Icon } from './icons.jsx'
import { markets } from '../data/content.js'

// The four asset classes, as a card grid. Reuses the icon-card language from
// the risk and protection sections rather than introducing another card shape.
export default function Markets() {
  return (
    <section className="section markets-sec" id="markets">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{markets.eyebrow}</span>
          <h2 className="h2">
            {markets.title}
            <mark>{markets.titleMark}</mark>
          </h2>
          <p className="lead">{markets.lead}</p>
        </div>

        <div className="icon-cards markets-grid">
          {markets.cards.map((c) => (
            <article className="icon-card reveal" key={c.title}>
              <div className="ico"><Icon name={c.icon} size={22} /></div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
