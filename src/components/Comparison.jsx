import { Check } from './icons.jsx'
import { comparison } from '../data/home.js'

// The side by side the document puts between the signal process and the quick
// highlights. Two columns, four pairs, read across.
export default function Comparison() {
  return (
    <section className="section comparison-sec" id="comparison">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h2">
            {comparison.title}
            {comparison.titleMark && <mark>{comparison.titleMark}</mark>}
          </h2>
        </div>

        <div className="cmp reveal">
          <div className="cmp-head">
            <span>{comparison.leftTitle}</span>
            <span className="cmp-good">{comparison.rightTitle}</span>
          </div>
          {comparison.rows.map(([alone, withUs]) => (
            <div className="cmp-row" key={alone}>
              <span className="cmp-alone">{alone}</span>
              <span className="cmp-with">
                <span className="tick"><Check size={13} /></span>
                {withUs}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
