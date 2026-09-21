import { Icon } from './icons.jsx'
import { features, featuresHead } from '../data/content.js'

export default function Features() {
  return (
    <section className="section feat" id="features">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{featuresHead.eyebrow}</span>
          <h2 className="h2">{featuresHead.title}<mark>{featuresHead.titleMark}</mark>{featuresHead.titleEnd}</h2>
          <p className="lead">{featuresHead.lead}</p>
        </div>

        <div className="feat-grid">
          {features.map((f) => (
            <article className="feat-card reveal" key={f.title}>
              <div className={`feat-ico ${f.green ? 'green' : ''}`}>
                <Icon name={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
