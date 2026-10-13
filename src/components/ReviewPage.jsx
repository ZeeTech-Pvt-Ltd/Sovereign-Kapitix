import CtaBanner from './CtaBanner.jsx'
import { Check } from './icons.jsx'
import { reviewPage, whatis } from '../data/content.js'

// The /review route - the page a reader lands on after searching "is Sovereign
// Kapitix a scam", which is the search this page is built to answer honestly.
//
// It is deliberately NOT a wall of testimonials. No attributable customer
// quotes have been supplied, and inventing them for a trading platform is both
// against the house rule on unverifiable claims and a regulatory problem. What
// it carries instead is the material a careful reader actually wants: the
// numbers, the things the platform does not do well, and the checks they can
// run themselves before sending anyone money.
//
// Layout is the existing .rv-* block in index.css: a single 820px editorial
// column. It was written for this route before the route was retired, and it
// suits a long read far better than a grid of cards would.
export default function ReviewPage() {
  const { glance, whatIs, features, prosCons, costs, legit, fakes, report, who, verdict, faqMini } = reviewPage

  return (
    <>
      <section className="rv-hero">
        <div className="container rv-hero-inner reveal">
          <span className="eyebrow">{reviewPage.eyebrow}</span>
          <h1 className="h1">
            {reviewPage.title}
            <mark>{reviewPage.titleMark}</mark>
          </h1>
          <p className="lead">{reviewPage.lead}</p>
        </div>
      </section>

      <section className="rv-body">
        <div className="container rv-wrap">
          {/* The risk panel sits near the top, before any of the selling. A
              review that only mentions risk in the last paragraph is an advert. */}
          <div className="rv-risk reveal">
            <b>Risk Warning</b>
            <p>
              Trading carries risk and you may lose some or all of the money you deposit. Nothing on this page is
              personal financial advice. Read our <a href="/disclosure">Risk Disclosure</a> before you decide.
            </p>
          </div>

          <div className="rv-sec">
            <h2>Sovereign Kapitix at a Glance</h2>
            <dl className="rv-glance">
              {glance.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Reuses whatis from content.js rather than restating it, so the
              definitional paragraph can only ever say one thing across the site. */}
          <div className="rv-sec">
            <h2>
              {whatIs.title}
              <mark>{whatIs.titleMark}</mark>
            </h2>
            {whatis.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p>
              Want the step by step version? <a href="/how-it-works">See how it works</a>.
            </p>
          </div>

          <div className="rv-sec">
            <h2>
              {features.title}
              <mark>{features.titleMark}</mark>
            </h2>
            {features.cards.map((c) => (
              <div key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          {/* Both columns carry equal weight on purpose: a page listing five
              benefits and one polite drawback is an advert, and readers can tell. */}
          <div className="rv-sec">
            <h2>
              {prosCons.title}
              <mark>{prosCons.titleMark}</mark>
            </h2>
            <p>{prosCons.lead}</p>
            <div className="rv-fit">
              <div className="rv-fit-card good">
                <h3>Pros</h3>
                <ul>
                  {prosCons.pros.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="rv-fit-card no">
                <h3>Cons</h3>
                <ul>
                  {prosCons.cons.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rv-sec">
            <h2>
              {costs.title}
              <mark>{costs.titleMark}</mark>
            </h2>
            <dl className="rv-glance">
              {costs.rows.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">
              {costs.note} <a href={costs.noteLink.href}>{costs.noteLink.text}</a> {costs.noteEnd}
            </p>
          </div>

          <div className="rv-sec">
            <h2>
              {legit.title}
              <mark>{legit.titleMark}</mark>
            </h2>
            <p>{legit.lead}</p>
            <ul className="rv-ticklist">
              {legit.items.map((i) => (
                <li key={i}>
                  <span className="tick"><Check size={13} /></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec">
            <h2>
              {fakes.title}
              <mark>{fakes.titleMark}</mark>
            </h2>
            <p>{fakes.lead}</p>
            <ul className="rv-ticklist">
              {fakes.signs.map((s) => (
                <li key={s}>
                  <span className="cross" aria-hidden="true">&#215;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-sec">
            <h2>{report.title}</h2>
            <ol className="rv-steps">
              {report.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
          </div>

          <div className="rv-sec">
            <h2>
              {who.title}
              <mark>{who.titleMark}</mark>
            </h2>
            <div className="rv-fit">
              <div className="rv-fit-card good">
                <h3>{who.suitedTitle}</h3>
                <ul>
                  {who.suited.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rv-fit-card no">
                <h3>{who.notSuitedTitle}</h3>
                <ul>
                  {who.notSuited.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rv-sec">
            <h2>
              {verdict.title}
              <mark>{verdict.titleMark}</mark>
            </h2>
            <p className="rv-verdict">{verdict.body}</p>
          </div>

          {/* Plain question and answer blocks, not an accordion and not FAQPage
              structured data: /faq already owns the site's FAQ schema, and a
              second FAQPage block on the same domain competes with it rather
              than adding to it. */}
          <div className="rv-sec">
            <h2>
              {faqMini.title}
              <mark>{faqMini.titleMark}</mark>
            </h2>
            <div className="rv-qa">
              {faqMini.items.map((f) => (
                <div className="rv-qa-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
            <p>
              <a href={faqMini.moreHref}>{faqMini.moreText}</a>
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Make your own call"
        title="Check It Yourself, Then Decide"
        text="Registration is free and takes about two minutes. Start with the minimum, test a withdrawal, and only add more once you are comfortable."
        cta="Create my free account"
        href="/register"
      />
    </>
  )
}
