import Hero from '../src/components/Hero.jsx'
import TrustStrip from '../src/components/TrustStrip.jsx'
import WhatIsKapitix from '../src/components/WhatIsKapitix.jsx'
import HowItWorks from '../src/components/HowItWorks.jsx'
import Features from '../src/components/Features.jsx'
import Legit from '../src/components/Legit.jsx'
import Protected from '../src/components/Protected.jsx'
import FeesTable from '../src/components/FeesTable.jsx'
import Risks from '../src/components/Risks.jsx'
import HomeFaq from '../src/components/HomeFaq.jsx'
import FinalCta from '../src/components/FinalCta.jsx'
import JsonLd from './_components/JsonLd.jsx'
import { buildMetadata } from '../src/data/metadata.js'

export const metadata = buildMetadata('home')

// Section order follows the operator's homepage brief: the form and its trust
// strip first, then what the platform is, the three-step summary, the features,
// the "is it legit" section, the fee table and the risk section - and only then
// the closing CTA.
//
// The risk section sits above the final CTA on purpose. A reader should meet
// the downside of trading before the last invitation to deposit, not after.
export default function Page() {
  return (
    <>
      <JsonLd route="home" />
      <Hero />
      <TrustStrip />
      <WhatIsKapitix />
      <HowItWorks />
      <Features />
      <Legit />
      <Protected />
      <FeesTable />
      <Risks />
      <HomeFaq />
      <FinalCta />
    </>
  )
}
