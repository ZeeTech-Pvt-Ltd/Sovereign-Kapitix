import { signals } from '../data/home.js'

// The four stages a signal goes through, in the document's order.
export default function Signals() {
  return (
    <section className="section signals-sec" id="signals">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{signals.eyebrow}</span>
          <h2 className="h2">
            {signals.title}
            <mark>{signals.titleMark}</mark>
          </h2>
        </div>

        <div className="flow-grid flow-grid-4">
          {signals.steps.map((s, i) => (
            <article className="flow-step reveal" key={s.title}>
              <span className="flow-no">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
