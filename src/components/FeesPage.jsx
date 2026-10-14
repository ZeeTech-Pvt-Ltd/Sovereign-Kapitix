import CtaBanner from './CtaBanner.jsx'
import FaqAccordion from './FaqAccordion.jsx'
import { Check } from './icons.jsx'
import { feesPage } from '../data/pages.js'

// The /fees route.
//
// Every row is either a supplied figure or a statement naming who confirms it.
// The one worked example - the spread on a currency pair - is labelled as an
// illustration on the page itself, because the brief is explicit that it is not
// a quote ("do not publish specific spread figures... unless confirmed by the
// broker partner").
export default function FeesPage() {
  const f = feesPage

  return (
    <>
      <section className="terms-hero">
        <div className="container terms-hero-inner reveal">
          <span className="eyebrow">{f.eyebrow}</span>
          <h1 className="h1">
            {f.title}
            <mark>{f.titleMark}</mark>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="rv-intro">{f.intro}</p>
          <div className="short-answer reveal">
            <b>Short answer</b>
            <p>{f.shortAnswer}</p>
          </div>

          <div className="rv-sec">
            <h2>{f.glance.title}</h2>
            <dl className="rv-glance">
              {f.glance.rows.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rv-sec">
            <h2>{f.notPay.title}</h2>
            <p>{f.notPay.lead}</p>
            <ul className="rv-ticklist">
              {f.notPay.items.map((i) => (
                <li key={i}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec">
            <h2>{f.deposit.title}</h2>
            {f.deposit.body.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
            <h3>{f.deposit.whyTitle}</h3>
            <ul className="rv-ticklist">
              {f.deposit.why.map((i) => (
                <li key={i}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec">
            <h2>{f.spread.title}</h2>
            {f.spread.body.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
            <div className="illustration reveal">
              <b>{f.spread.exampleLabel}</b>
              <p>{f.spread.example}</p>
            </div>
            <ul className="rv-ticklist">
              {f.spread.points.map((i) => (
                <li key={i}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec">
            <h2>{f.overnight.title}</h2>
            {f.overnight.body.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>

          <div className="rv-sec">
            <h2>{f.depositMethods.title}</h2>
            <dl className="rv-glance">
              {f.depositMethods.rows.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">{f.depositMethods.note}</p>
          </div>

          <div className="rv-sec">
            <h2>{f.withdrawals.title}</h2>
            <ol className="rv-steps">
              {f.withdrawals.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="rv-note">{f.withdrawals.note}</p>
          </div>

          <div className="rv-sec">
            <h2>{f.tips.title}</h2>
            <ul className="rv-ticklist">
              {f.tips.items.map((i) => (
                <li key={i}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec" id="faq">
            <h2>{f.faq.title}</h2>
            <FaqAccordion items={f.faq.items} idPrefix="fees-faq" />
          </div>

          <p className="small-print">{f.smallPrint}</p>
        </div>
      </section>

      <CtaBanner eyebrow={f.cta.eyebrow} title={f.cta.title} text={f.cta.body} cta={f.cta.cta} href="/register" />
    </>
  )
}
