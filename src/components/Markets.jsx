import { Icon } from './icons.jsx'
import { markets } from '../data/home.js'

// The four asset classes, as a card grid.
const ICONS = { Crypto: 'chart', Forex: 'gauge', Stocks: 'candles', Commodities: 'layers' }

export default function Markets() {
  return (
    <section className="section markets-sec" id="markets">
      <div className="container">
        <div className="section-head reveal">
          {markets.eyebrow && <span className="eyebrow">{markets.eyebrow}</span>}
          <h2 className="h2">
            {markets.title}
            {markets.titleMark && <mark>{markets.titleMark}</mark>}
          </h2>
        </div>

        <div className="icon-cards markets-grid">
          {markets.items.map((c) => (
            <article className="icon-card reveal" key={c.title}>
              <div className="ico"><Icon name={ICONS[c.title] ?? 'chart'} size={22} /></div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
