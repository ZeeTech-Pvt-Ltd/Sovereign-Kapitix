import HowItWorksPage from '../../src/components/HowItWorksPage.jsx'
import JsonLd from '../_components/JsonLd.jsx'
import { buildMetadata } from '../../src/data/metadata.js'

// The route config in src/data/seo.js is the single source for the head tags,
// exactly as it was for scripts/build.mjs and Seo.jsx before it.
export const metadata = buildMetadata('how-it-works')

export default function Page() {
  return (
    <>
      <JsonLd route="how-it-works" />
      <HowItWorksPage />
    </>
  )
}
