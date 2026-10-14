import SignalCard from './SignalCard.jsx'
import { Check } from './icons.jsx'
import { whatis } from '../data/content.js'

// The definitional block. Two columns: the explanation on the left, a sample
// signal on the right, then the "who it is for / not for" pair underneath.
//
// The brief says the not-for column "builds trust and pre-qualifies leads -
// lower raw sign-ups, higher-quality leads and fewer chargebacks", so it gets
// the same visual weight as the for column rather than being a footnote.
export default function WhatIsKapitix() {
  return (
    <section className="section whatis" id="what">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h2">
            {whatis.title}
            <mark>{whatis.titleMark}</mark>
          </h2>
        </div>

        <div className="whatis-split">
          <div className="reveal">
            {whatis.body.map((p) => (
              <p className="prose" key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
          <SignalCard />
        </div>

        <div className="fit-grid whatis-visual">
          <div className="fit-card yes reveal">
            <h3>{whatis.forTitle}</h3>
            <ul>
              {whatis.for.map((i) => (
                <li key={i}>
                  <span className="tick"><Check size={14} /></span> {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="fit-card no reveal">
            <h3>{whatis.notForTitle}</h3>
            <ul>
              {whatis.notFor.map((i) => (
                <li key={i}>
                  <span className="cross" aria-hidden="true">&#215;</span> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
