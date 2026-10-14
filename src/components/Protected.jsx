import { Icon } from './icons.jsx'
import { legit } from '../data/content.js'

// "How your account is protected", promoted to its own section.
//
// It used to be an h3 inside the "is it legit" block, which buried the five
// guarantees a visitor is actually looking for when they search whether a
// platform is safe. As its own section it gets an h2 and a full-width grid.
//
// The grid is a six-column track so five cards fill evenly: three in the first
// row, and the last two spanning three tracks each in the second, rather than
// leaving a quarter of the row empty.
const ICONS = {
  'Identity Checks': 'user',
  'Two-Factor Authentication': 'lock',
  Encryption: 'shield',
  'Regulated Execution': 'gauge',
  'Fast, Checked Withdrawals': 'wallet',
}

export default function Protected() {
  return (
    <section className="section protect-sec" id="protection">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Account security</span>
          <h2 className="h2">
            How Your Account Is <mark>Protected</mark>
          </h2>
          <p className="lead">Every account passes the same checks before it can trade, and the same protections stay on afterwards.</p>
        </div>

        <div className="protect-grid">
          {legit.protect.map((r) => (
            <article className="icon-card reveal" key={r.k}>
              <div className="ico"><Icon name={ICONS[r.k] ?? 'shield'} size={22} /></div>
              <h3>{r.k}</h3>
              <p>{r.v}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
