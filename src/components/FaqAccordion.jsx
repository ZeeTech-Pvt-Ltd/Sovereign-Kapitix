import { useRef, useState } from 'react'
import { ChevronDown } from './icons.jsx'

// The accordion itself, shared by the homepage FAQ section and the seven groups
// on /faq. Extracted so the open/close mechanics exist once - two copies of
// this were how the FAQ items once ended up unable to close.
//
// The answer text is always in the DOM; only its max-height animates. The
// operator's brief asks for that explicitly ("keep the answer text in the HTML
// on page load, not loaded on click, so Google can read it").
//
// `idPrefix` namespaces the aria-controls ids so several accordions can sit on
// one page - the homepage has one and /faq has seven.
export default function FaqAccordion({ items, idPrefix = 'faq' }) {
  const [open, setOpen] = useState(null)
  const refs = useRef([])

  const toggle = (i) => {
    const el = refs.current[i]
    if (!el) return
    if (open !== null && open !== i) refs.current[open].style.maxHeight = null
    if (open === i) {
      el.style.maxHeight = null
      setOpen(null)
    } else {
      el.style.maxHeight = el.scrollHeight + 'px'
      setOpen(i)
    }
  }

  return (
    <div className="faq">
      {items.map((item, i) => (
        <div className={`faq-item ${open === i ? 'open' : ''} reveal`} key={item.q}>
          <h3 className="faq-h">
            <button
              type="button"
              className="faq-q"
              onClick={() => toggle(i)}
              aria-expanded={open === i}
              aria-controls={`${idPrefix}-answer-${i}`}
              id={`${idPrefix}-question-${i}`}
            >
              {item.q}
              <span className="chev"><ChevronDown /></span>
            </button>
          </h3>
          <div
            className="faq-a"
            id={`${idPrefix}-answer-${i}`}
            role="region"
            aria-labelledby={`${idPrefix}-question-${i}`}
            ref={(el) => (refs.current[i] = el)}
          >
            <p>
              {item.a}
              {item.link && (
                <>
                  {' '}
                  <a className="faq-more" href={item.link.href}>{item.link.text}</a>
                </>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
