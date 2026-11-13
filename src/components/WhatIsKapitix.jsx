import { whatIs } from '../data/home.js'

// The definitional block: the document's two paragraphs, with the product
// screenshot beside them. The four capability points and the three step flow
// that used to sit here are gone - the document does not carry them, and the
// signal process has its own section immediately after this one.
export default function WhatIsKapitix() {
  return (
    <section className="section whatis" id="what">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h2">
            {whatIs.title}
            <mark>{whatIs.titleMark}</mark>
          </h2>
        </div>

        <div className="whatis-band">
          <div className="whatis-figure reveal">
            <img
              className="about-hero-img"
              src="/what-is-trading.webp"
              alt="A Bitcoin and Australian dollar price chart on a desktop monitor, with an order book and a portfolio panel beside it"
              width="1152"
              height="928"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="whatis-copy reveal">
            {whatIs.body.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
