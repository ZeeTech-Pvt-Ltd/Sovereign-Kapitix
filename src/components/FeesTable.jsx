import { ArrowRight } from './icons.jsx'
import { feesTable, stats } from '../data/content.js'

// The homepage fee table. The brief calls a full fee table a strong trust signal
// and a common featured-snippet source, and says leaving fees vague is the top
// reason qualified leads drop off at the sales call.
//
// The three figures that matter lead in their own row; the rest follow as a
// table. No value here is invented - each row is a supplied figure or a
// statement naming who confirms it.
export default function FeesTable() {
  // Two facts per table row, so each row fills all four columns.
  const pairs = []
  for (let i = 0; i < feesTable.rows.length; i += 2) {
    pairs.push([feesTable.rows[i], feesTable.rows[i + 1]])
  }

  return (
    <section className="section fees-sec" id="fees">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{feesTable.eyebrow}</span>
          <h2 className="h2">
            {feesTable.title}
            <mark>{feesTable.titleMark}</mark>
          </h2>
          <p className="lead">{feesTable.lead}</p>
        </div>

        {/* Carries the same four figures as the stat strip that used to sit at
            the foot of the page, which has been removed rather than repeated
            here. Softer treatment than the deep gradient it had: a tinted card
            with blue figures reads as part of the page rather than a slab. */}
        <div className="fee-hero reveal">
          {stats.map((s) => (
            <div key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        {/* A real table, four columns wide: one row carries two label/value
            pairs. As a grid of loose cells it read as a wall of boxes rather
            than a fee schedule, and as a single-column list of fourteen rows it
            was a long scroll for facts a reader wants to compare at a glance. */}
        <div className="fee-table reveal">
          <div className="fee-head">
            <span>Item</span><span>Detail</span><span>Item</span><span>Detail</span>
          </div>
          {pairs.map(([a, b]) => (
            <div className="fee-line" key={a.k}>
              <dt>{a.k}</dt>
              <dd>{a.v}</dd>
              {b
                ? (<><dt>{b.k}</dt><dd>{b.v}</dd></>)
                : (<><dt /><dd /></>)}
            </div>
          ))}
        </div>

        <div className="fees-actions reveal">
          <a className="btn-link" href={feesTable.link.href}>{feesTable.link.text}</a>
          <a className="btn btn-primary" href="/" data-scroll="#register">
            {feesTable.cta} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
