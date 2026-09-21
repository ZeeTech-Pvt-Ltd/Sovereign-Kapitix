import TradingVisual from './TradingVisual.jsx'
import { whatis } from '../data/content.js'

// What is Sovereign Kapitix? - the definitional block under the stats strip,
// with the live trading dashboard visual on the left. Rendered eagerly on the
// homepage (no lazy mount) and without a .reveal class so the text is visible
// on first paint - nothing hides it.
export default function WhatIsKapitix() {
  return (
    <section className="section whatis">
      <div className="container">
        <div className="whatis-inner">
          <div className="whatis-visual">
            <TradingVisual />
          </div>
          <div className="whatis-copy">
            <h2 className="h2">{whatis.title}</h2>
            {whatis.body.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
