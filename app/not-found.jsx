import NotFound from '../src/components/NotFound.jsx'
import { buildMetadata } from '../src/data/metadata.js'

// The 404. It exports its own metadata because not-found inherits the root
// layout's, and the layout has neither the noindex robots rule nor the omitted
// canonical that this page needs - a canonical tag and a noindex tag on the
// same page are contradictory signals. buildMetadata('404') drops the canonical
// key entirely rather than emitting an empty one.
//
// Next serves this with a real 404 status, which is what the old dist/404.html
// did on Vercel.
export const metadata = buildMetadata('404')

export default function NotFoundPage() {
  return <NotFound />
}
