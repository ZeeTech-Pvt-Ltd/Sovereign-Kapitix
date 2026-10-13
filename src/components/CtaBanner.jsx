import { ArrowRight } from './icons.jsx'

// `href` defaults to the homepage form anchor, which is what every existing
// caller wants: on the home page the register section is a scroll away. A page
// with no such section (the standalone /register and /how-it-works routes)
// passes href="/register" instead, so its button does not bounce the visitor
// back to the home page and leave them to scroll.
export default function CtaBanner({ eyebrow, title, text, cta, href = '/' }) {
  const scrolls = href === '/'
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner reveal">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <a className="btn btn-light" href={href} data-scroll={scrolls ? '#register' : undefined}>
            {cta} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
