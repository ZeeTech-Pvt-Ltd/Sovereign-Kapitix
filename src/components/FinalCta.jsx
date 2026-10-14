import CtaBanner from './CtaBanner.jsx'
import { finalCta } from '../data/content.js'

// Closing CTA. The "Available to verified Australian residents aged 18+.
// Trading involves risk of loss." line that sat under the banner has been
// removed at the operator's request. The same warning is still on the page in
// the risk section above and in the footer's HIGH RISK WARNING.
export default function FinalCta() {
  return (
    <CtaBanner
      eyebrow={finalCta.eyebrow}
      title={`${finalCta.title}${finalCta.titleMark}`}
      text={finalCta.body}
      cta={finalCta.cta}
      href="/register"
    />
  )
}
