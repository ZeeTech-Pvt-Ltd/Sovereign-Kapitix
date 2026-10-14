import CtaBanner from './CtaBanner.jsx'
import FaqAccordion from './FaqAccordion.jsx'
import { Check } from './icons.jsx'
import { reviewPage } from '../data/pages.js'

// The /sovereign-kapitix-review route - the page a reader lands on after
// searching "is Sovereign Kapitix a scam", which is the search this page is
// built to answer honestly.
//
// The brief is explicit about what this page must NOT contain: "no star ratings,
// scores, fake reviewer names or testimonials", and no Review or
// AggregateRating structured data, because Google ignores a business reviewing
// itself and treating it as review markup risks a manual action. There is no
// customer quote anywhere below, and there cannot be one until real,
// consented quotes exist.
//
// The disclosure line stays near the top: the page is published by Sovereign
// Kapitix itself, and the brief asks it to say so openly.
export default function ReviewPage() {
  const p = reviewPage

  return (
    <>
      <section className="rv-hero">
        <div className="container rv-hero-inner reveal">
          <span className="eyebrow">{p.eyebrow}</span>
          <h1 className="h1">
            {p.title}
            <mark>{p.titleMark}</mark>
          </h1>
          <p className="lead">{p.intro}</p>
          <p className="review-disclosure">{p.disclosure}</p>
        </div>
      </section>

      <section className="rv-body">
        <div className="container rv-wrap">
          <div className="verdict-box reveal">
            <h2>{p.verdict.title}</h2>
            <p>{p.verdict.body}</p>
          </div>

          <div className="rv-sec">
            <h2>{p.glance.title}</h2>
            <dl className="rv-glance">
              {p.glance.rows.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rv-sec">
            <h2>
              {p.whatIs.title}
              <mark>{p.whatIs.titleMark}</mark>
            </h2>
            {p.whatIs.body.map((t) => (
              <p key={t.slice(0, 30)}>{t}</p>
            ))}
          </div>

          <div className="rv-sec">
            <h2>{p.how.title}</h2>
            <ol className="rv-steps">
              {p.how.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p>
              <a href={p.how.link.href}>{p.how.link.text}</a>
            </p>
          </div>

          {/* Equal weight in both columns on purpose: a page listing nine
              benefits and one polite drawback is an advert, and readers can
              tell. The cons here are the ones the brief supplies. */}
          <div className="rv-sec">
            <h2>
              {p.prosCons.title}
              <mark>{p.prosCons.titleMark}</mark>
            </h2>
            <div className="rv-fit">
              <div className="rv-fit-card good">
                <h3>Pros</h3>
                <ul>
                  {p.prosCons.pros.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="rv-fit-card no">
                <h3>Cons</h3>
                <ul>
                  {p.prosCons.cons.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rv-sec">
            <h2>
              {p.costs.title}
              <mark>{p.costs.titleMark}</mark>
            </h2>
            {p.costs.body.map((t) => (
              <p key={t.slice(0, 30)}>{t}</p>
            ))}
            <p>
              <a href={p.costs.link.href}>{p.costs.link.text}</a>
            </p>
          </div>

          <div className="rv-sec">
            <h2>
              {p.assets.title}
              <mark>{p.assets.titleMark}</mark>
            </h2>
            <p>{p.assets.lead}</p>
            <dl className="rv-glance">
              {p.assets.groups.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">{p.assets.note}</p>
          </div>

          <div className="rv-sec">
            <h2>
              {p.legit.title}
              <mark>{p.legit.titleMark}</mark>
            </h2>
            <p>{p.legit.lead}</p>
            <h3>{p.legit.inPlaceTitle}</h3>
            <dl className="rv-glance">
              {p.legit.inPlace.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <h3>{p.legit.checkTitle}</h3>
            <ul className="rv-ticklist">
              {p.legit.check.map((x) => (
                <li key={x}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p className="rv-note">{p.legit.note}</p>
          </div>

          <div className="rv-sec">
            <h2>
              {p.who.title}
              <mark>{p.who.titleMark}</mark>
            </h2>
            <div className="rv-fit">
              <div className="rv-fit-card good">
                <h3>{p.who.goodTitle}</h3>
                <ul>
                  {p.who.good.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="rv-fit-card no">
                <h3>{p.who.noTitle}</h3>
                <ul>
                  {p.who.no.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rv-sec">
            <h2>{p.mistakes.title}</h2>
            <dl className="rv-glance">
              {p.mistakes.items.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rv-sec">
            <h2>{p.checklist.title}</h2>
            <ul className="rv-ticklist">
              {p.checklist.items.map((x) => (
                <li key={x}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec" id="faq">
            <h2>{p.faq.title}</h2>
            <FaqAccordion items={p.faq.items} idPrefix="review-faq" />
          </div>

          <div className="rv-sec">
            <h2>
              {p.finalVerdict.title}
              <mark>{p.finalVerdict.titleMark}</mark>
            </h2>
            {p.finalVerdict.body.map((t) => (
              <p key={t.slice(0, 30)}>{t}</p>
            ))}
          </div>

          <p className="small-print">Available to verified Australian residents aged 18+. Trading involves risk of loss. This page is general information and does not take into account your objectives, financial situation or needs.</p>
        </div>
      </section>

      <CtaBanner eyebrow={p.cta.eyebrow} title={p.cta.title} text={p.cta.body} cta={p.cta.cta} href="/register" />
    </>
  )
}
