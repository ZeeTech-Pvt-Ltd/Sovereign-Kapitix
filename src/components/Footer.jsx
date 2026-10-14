import Logo from './Logo.jsx'
import { footer } from '../data/content.js'

// The X, Telegram and YouTube icons that used to sit under the blurb have been
// removed. Each pointed at a bare platform homepage (https://x.com,
// https://t.me, https://youtube.com) rather than an account, so a visitor
// clicking one landed on X's front page in a new tab. That is worse than an
// obvious placeholder, because it looks like it worked.
//
// When real accounts exist, add them back here as { label, href, path } and
// render a <div className="footer-social"> again - the .footer-social rules are
// still in index.css, and the three icon paths are in this file's git history.

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo onDark />
            <p>{footer.blurb}</p>
            <a className="footer-mail" href={`mailto:${footer.email}`}>{footer.email}</a>
          </div>

          <div>
            {/* h2, not h3 - on pages with no other h2 (the FAQ list, the 404)
                a heading here would be the first one after the h1. */}
            <h2>Company</h2>
            <ul>
              {footer.company.map((l) => (
                <li key={l.label}><a href={l.href} data-scroll={l.scroll || undefined}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Platform</h2>
            <ul>
              {footer.platform.map((l) => (
                <li key={l.label}><a href={l.href} data-scroll={l.scroll || undefined}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Legal</h2>
            <ul>
              {footer.legal.map((l) => (
                <li key={l.label}><a href={l.href} data-scroll={l.scroll || undefined}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <span id="terms"></span>
        <span id="privacy"></span>
        <div className="disclaimer" id="disclosure">
          <b>HIGH RISK WARNING</b>
          <p>{footer.disclaimer}</p>
        </div>

        <div className="footer-legal" style={{ borderTop: 'none', paddingTop: 0, justifyContent: 'center' }}>
          Copyright 2026 © Sovereign Kapitix, All Right Reserved
        </div>
      </div>
    </footer>
  )
}
