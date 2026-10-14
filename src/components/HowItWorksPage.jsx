import CtaBanner from './CtaBanner.jsx'
import FaqAccordion from './FaqAccordion.jsx'
import { Icon } from './icons.jsx'
import { howPage } from '../data/pages.js'

// The /how-it-works route: the six-step walkthrough.
//
// The homepage carries a three-step summary; this is the full version, and the
// brief asks for a jump menu under the intro with an id on every H2 so the
// steps can surface as sitelinks. Each H2 below carries the id its entry in
// `howPage.toc` points at - if a section is renamed, rename its toc entry too,
// or the jump link scrolls nowhere.
export default function HowItWorksPage() {
  const p = howPage

  return (
    <>
      <section className="terms-hero">
        <div className="container terms-hero-inner reveal">
          <span className="eyebrow">{p.eyebrow}</span>
          <h1 className="h1">
            {p.title}
            <mark>{p.titleMark}</mark>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="rv-intro">{p.intro}</p>
          <div className="short-answer reveal">
            <b>Short answer</b>
            <p>{p.shortAnswer}</p>
          </div>

          <nav className="jump-menu reveal" aria-label="On this page">
            <span className="jump-label">{p.tocTitle}</span>
            {p.toc.map((t) => (
              <a key={t.id} href={`#${t.id}`}>{t.label}</a>
            ))}
          </nav>

          <div className="rv-sec" id="steps">
            <h2>{p.stepsTitle}</h2>
            <p>{p.stepsLead}</p>
            <div className="flow-grid flow-grid-3">
              {p.steps.map((s) => (
                <article className="flow-step reveal" key={s.no}>
                  <span className="flow-no">{s.no}</span>
                  <div className="step-ico"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rv-sec" id="signals">
            <h2>{p.signals.title}</h2>
            {p.signals.body.map((t) => (
              <p key={t.slice(0, 30)}>{t}</p>
            ))}
            <h3>{p.signals.showsTitle}</h3>
            <dl className="rv-glance">
              {p.signals.shows.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">{p.signals.note}</p>
          </div>

          <div className="rv-sec" id="modes">
            <h2>{p.modes.title}</h2>
            <p>{p.modes.lead}</p>
            <div className="mode-table">
              {p.modes.rows.map((r) => (
                <div className="mode-row" key={r.k}>
                  <div className="mode-name">{r.k}</div>
                  <div className="mode-how">{r.v}</div>
                  <div className="mode-best"><span>Best for</span>{r.best}</div>
                </div>
              ))}
            </div>
            <p className="rv-note">{p.modes.note}</p>
          </div>

          <div className="rv-sec" id="risk">
            <h2>{p.risk.title}</h2>
            <p>{p.risk.lead}</p>
            <dl className="rv-glance">
              {p.risk.items.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">
              {p.risk.note} <a href={p.risk.link.href}>{p.risk.link.text}</a> {p.risk.linkEnd}
            </p>
          </div>

          <div className="rv-sec" id="money">
            <h2>{p.money.title}</h2>
            <dl className="rv-glance">
              {p.money.rows.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">
              {p.money.note} <a href={p.money.link.href}>{p.money.link.text}</a>
            </p>
          </div>

          <div className="rv-sec" id="security">
            <h2>{p.security.title}</h2>
            <dl className="rv-glance">
              {p.security.items.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">
              {p.security.linkLead} <a href={p.security.link.href}>{p.security.link.text}</a>
            </p>
          </div>

          <div className="rv-sec" id="first-week">
            <h2>{p.firstWeek.title}</h2>
            <dl className="rv-glance">
              {p.firstWeek.rows.map((r) => (
                <div className="rv-glance-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p className="rv-note">{p.firstWeek.note}</p>
          </div>

          <div className="rv-sec" id="faq">
            <h2>{p.faq.title}</h2>
            <FaqAccordion items={p.faq.items} idPrefix="hiw-faq" />
          </div>
        </div>
      </section>

      <CtaBanner eyebrow={p.cta.eyebrow} title={p.cta.title} text={p.cta.body} cta={p.cta.cta} href="/register" />
    </>
  )
}
