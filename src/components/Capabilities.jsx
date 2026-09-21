import { capabilities, capabilitiesHead } from '../data/content.js'

export default function Capabilities() {
  return (
    <section className="section caps">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{capabilitiesHead.eyebrow}</span>
          <h2 className="h2">{capabilitiesHead.title}<mark>{capabilitiesHead.titleMark}</mark>{capabilitiesHead.titleEnd}</h2>
          <p className="lead">{capabilitiesHead.lead}</p>
        </div>

        <div className="caps-grid">
          {capabilities.map((c) => (
            <div className="cap-row reveal" key={c.k}>
              <span className="k">{c.k}</span>
              <span className="v">{c.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
