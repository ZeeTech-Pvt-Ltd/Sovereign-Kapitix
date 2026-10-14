import { Check } from './icons.jsx'
import { trustBadges } from '../data/content.js'

// Sits directly under the registration form. Every badge restates something
// already stated elsewhere on the page, so the strip adds no new claim - it
// just puts the facts where the visitor is about to click.
export default function TrustStrip() {
  return (
    <ul className="trust-strip reveal">
      {trustBadges.map((b) => (
        <li key={b}>
          <span className="tick"><Check size={13} /></span>
          {b}
        </li>
      ))}
    </ul>
  )
}
