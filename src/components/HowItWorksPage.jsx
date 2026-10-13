import CtaBanner from './CtaBanner.jsx'
import { Icon, Check } from './icons.jsx'
import { howPage, trustStrip, MIN_DEPOSIT } from '../data/content.js'

// The /how-it-works route. This page was removed once for being a thin
// restatement of the homepage's "3 Easy Steps" block, so it has to carry more
// than that block does: the full five step journey, the two trading modes side
// by side, the cost table, and what a reader needs before they start. If a
// section here starts to read like the homepage's, it belongs on the homepage
// and not on both.
export default function HowItWorksPage() {
  return (
    <>
      <section className="terms-hero">
        <div className="container terms-hero-inner reveal">
          <span className="eyebrow">{howPage.eyebrow}</span>
          <h1 className="h1">
            {howPage.title}
            <mark>{howPage.titleMark}</mark>
          </h1>
          <p className="lead">{howPage.lead}</p>
        </div>
      </section>

      {/* The five step journey. Numbered because the order matters: the
          account has to exist before it can be funded. */}
      <section className="section">
        <div className="container">
          <div className="flow-grid">
            {howPage.steps.map((s) => (
              <article className="flow-step reveal" key={s.no}>
                <span className="flow-no">{s.no}</span>
                <div className="step-ico">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Two modes, side by side, because the choice between them is the one
          decision a new user actually has to make. */}
      <section className="section how-modes">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{howPage.modes.eyebrow}</span>
            <h2 className="h2">
              {howPage.modes.title}
              <mark>{howPage.modes.titleMark}</mark>
            </h2>
            <p className="lead">{howPage.modes.lead}</p>
          </div>

          <div className="modes-grid">
            {howPage.modes.cards.map((c) => (
              <article className="mode-card reveal" key={c.title}>
                <div className="step-ico">
                  <Icon name={c.icon} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>

          <div className="how-strip reveal">
            {trustStrip.map((t) => (
              <p key={t}>
                <span className="tick"><Check size={16} /></span> {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Control and cost share a row on wide screens: both are short lists,
          and stacking them left a lot of empty space down the middle. */}
      <section className="section">
        <div className="container split-two">
          <div className="reveal">
            <span className="eyebrow">{howPage.control.eyebrow}</span>
            <h2 className="h2 h2-sm">
              {howPage.control.title}
              <mark>{howPage.control.titleMark}</mark>
            </h2>
            <ul className="tick-list">
              {howPage.control.points.map((p) => (
                <li key={p}>
                  <span className="tick"><Check size={15} /></span> {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <span className="eyebrow">{howPage.costs.eyebrow}</span>
            <h2 className="h2 h2-sm">
              {howPage.costs.title}
              <mark>{howPage.costs.titleMark}</mark>
            </h2>
            <div className="caps-grid">
              {howPage.costs.rows.map((r) => (
                <div className="cap-row" key={r.k}>
                  <span className="k">{r.k}</span>
                  <span className="v">{r.v}</span>
                </div>
              ))}
            </div>
            <p className="cost-note">
              {howPage.costs.note}{' '}
              <a href={howPage.costs.noteLink.href}>{howPage.costs.noteLink.text}</a> {howPage.costs.noteEnd}
            </p>
          </div>
        </div>
      </section>

      <section className="section how-ready">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{howPage.ready.eyebrow}</span>
            <h2 className="h2">
              {howPage.ready.title}
              <mark>{howPage.ready.titleMark}</mark>
            </h2>
          </div>
          <ul className="tick-list tick-list-center reveal">
            {howPage.ready.items.map((i) => (
              <li key={i}>
                <span className="tick"><Check size={15} /></span> {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        eyebrow="Ready when you are"
        title="Open Your Account and Start Trading Today"
        text={`Registration is free, it takes about two minutes, and the minimum deposit is ${MIN_DEPOSIT}. Our team is available around the clock if you get stuck.`}
        cta="Open your free account"
        href="/register"
      />
    </>
  )
}
