import { whoItsFor } from '../data/home.js'

// Three reader types, title and one line each.
export default function WhoItsFor() {
  return (
    <section className="section who-sec" id="who">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h2">
            {whoItsFor.title}
            <mark>{whoItsFor.titleMark}</mark>
          </h2>
        </div>

        <div className="icon-cards who-grid">
          {whoItsFor.items.map((w) => (
            <article className="why-card reveal" key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
