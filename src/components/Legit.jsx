import { legit } from '../data/content.js'

// The "is Sovereign Kapitix legit?" section, which the brief calls the biggest
// conversion lever on the page.
//
// This carries the setup half only. The five protection guarantees were an h3
// in here and are now their own section (Protected.jsx) with an h2, because
// they are what a visitor searching "is it safe" is actually looking for and
// they were buried three quarters of the way down a long panel.
export default function Legit() {
  return (
    <section className="section legit" id="legit">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{legit.eyebrow}</span>
          <h2 className="h2">
            {legit.title}
            <mark>{legit.titleMark}</mark>
          </h2>
          <p className="lead">{legit.lead}</p>
        </div>

        <div className="panel reveal">
          <h3>{legit.setupTitle}</h3>
          <div className="setup-rows">
            {legit.setup.map((r) => (
              <div className="setup-row" key={r.k}>
                <span className="k">{r.k}</span>
                <span className="v">{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="section-note reveal">{legit.note}</p>
      </div>
    </section>
  )
}
