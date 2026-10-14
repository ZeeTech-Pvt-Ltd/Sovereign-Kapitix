import SignalCard from './SignalCard.jsx'
import { Icon, ArrowRight } from './icons.jsx'
import { whatis } from '../data/content.js'

// The definitional block.
//
// Structure follows the equivalent section on the operator's sibling site
// (haveningry.com, "What is Haveningry?"), which the operator asked us to
// mirror: a heading with a one-line answer, four short capability points beside
// a visual, a three-step flow, then a closing strip on a tinted card.
//
// The for / not-for pair that used to sit between the flow and the closing
// strip has been removed at the operator request. Its copy is still in
// content.js under whatis.for / whatis.notFor, so restoring it is a markup
// change only.
export default function WhatIsKapitix() {
  return (
    <section className="section whatis" id="what">
      <div className="container">
        <div className="whatis-head reveal">
          <h2 className="h2">
            {whatis.title}
            <mark>{whatis.titleMark}</mark>
          </h2>
          <p className="lead">{whatis.lead}</p>
        </div>

        <div className="whatis-band">
          <div className="whatis-figure reveal">
            <SignalCard />
          </div>

          {/* The four points and the signal flow sit in one column, the flow
              directly under the points it describes - it used to be a separate
              full-width row further down, which read as its own section. */}
          <div className="whatis-right">
            <div className="whatis-points reveal">
              {whatis.items.map((it) => (
                <article className="whatis-point" key={it.title}>
                  <span className="wp-ico"><Icon name={it.icon} size={20} /></span>
                  <div>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="whatis-flow reveal">
              <ol>
                {whatis.flow.map((s) => (
                  <li key={s.text}>
                    <span className="wf-ico"><Icon name={s.icon} size={17} /></span>
                    {s.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="whatis-cta reveal">
          <p>{whatis.cta.text}</p>
          <a className="btn btn-tint" href={whatis.cta.href}>
            {whatis.cta.button} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
