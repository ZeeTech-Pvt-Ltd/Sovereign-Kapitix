import { whatIs } from '../data/home.js'

// Image on the left, heading and both paragraphs together on the right.
//
// The heading used to sit in its own centred .section-head block above the
// grid, which left it aligned with neither column and made the section read as
// two unrelated pieces. It belongs to the copy, so it sits with the copy.
export default function WhatIsKapitix() {
  return (
    <section className="section whatis" id="what">
      <div className="container">
        <div className="whatis-band">
          <div className="whatis-figure reveal">
            <img
              src="/what-is-trading.webp"
              alt="A Bitcoin and Australian dollar price chart on a desktop monitor, with an order book and a portfolio panel beside it"
              width="1152"
              height="928"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="whatis-copy reveal">
            <h2 className="h2">
              {whatIs.title}
              <mark>{whatIs.titleMark}</mark>
            </h2>
            {whatIs.body.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
