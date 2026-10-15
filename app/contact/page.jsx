import Contact from '../../src/components/Contact.jsx'
import JsonLd from '../_components/JsonLd.jsx'
import { buildMetadata } from '../../src/data/metadata.js'

// The route config in src/data/seo.js is the single source for the head tags,
// exactly as it was for scripts/build.mjs and Seo.jsx before it.
export const metadata = buildMetadata('contact')

export default function Page() {
  return (
    <>
      <JsonLd route="contact" />
      <Contact />
    </>
  )
}
