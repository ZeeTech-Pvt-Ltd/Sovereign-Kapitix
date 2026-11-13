import { ArrowRight } from './icons.jsx'
import { finalCta } from '../data/home.js'

// The document's closing block: heading, body, one button, and the microcopy
// underneath it.
export default function FinalCta() {
  return (
    <section className="section final-sec">
      <div className="container">
        <div className="final-block reveal">
          <h2>
            {finalCta.title}
            <mark>{finalCta.titleMark}</mark>
          </h2>
          <p>{finalCta.body}</p>
          <a className="btn btn-light" href="/register">
            {finalCta.cta} <ArrowRight />
          </a>
          <span className="final-micro">{finalCta.micro}</span>
        </div>
      </div>
    </section>
  )
}
