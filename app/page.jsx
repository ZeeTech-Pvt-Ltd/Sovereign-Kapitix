import Hero from '../src/components/Hero.jsx'
import WhatIsKapitix from '../src/components/WhatIsKapitix.jsx'
import Signals from '../src/components/Signals.jsx'
import Comparison from '../src/components/Comparison.jsx'
import Highlights from '../src/components/Highlights.jsx'
import WhyUs from '../src/components/WhyUs.jsx'
import GetStarted from '../src/components/GetStarted.jsx'
import Markets from '../src/components/Markets.jsx'
import Features from '../src/components/Features.jsx'
import WhoItsFor from '../src/components/WhoItsFor.jsx'
import Security from '../src/components/Security.jsx'
import HomeFaq from '../src/components/HomeFaq.jsx'
import FinalCta from '../src/components/FinalCta.jsx'
import JsonLd from './_components/JsonLd.jsx'
import { buildMetadata } from '../src/data/metadata.js'

export const metadata = buildMetadata('home')

// Section order is the operator's document, top to bottom. Section 12 of that
// document is Testimonials, which it explicitly says to keep hidden until real
// reviews exist - so it is not rendered here.
export default function Page() {
  return (
    <>
      <JsonLd route="home" />
      <Hero />
      <WhatIsKapitix />
      <Signals />
      <Comparison />
      <Highlights />
      <WhyUs />
      <GetStarted />
      <Markets />
      <Features />
      <WhoItsFor />
      <Security />
      <HomeFaq />
      <FinalCta />
    </>
  )
}
