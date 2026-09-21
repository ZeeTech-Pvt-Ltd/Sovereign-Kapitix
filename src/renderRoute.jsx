import Seo from './components/Seo.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import WhatIsKapitix from './components/WhatIsKapitix.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Experience from './components/Experience.jsx'
import Priorities from './components/Priorities.jsx'
import Features from './components/Features.jsx'
import Precision from './components/Precision.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Testimonials from './components/Testimonials.jsx'
import Portfolio from './components/Portfolio.jsx'
import Capabilities from './components/Capabilities.jsx'
import Toolkit from './components/Toolkit.jsx'
import FinalCta from './components/FinalCta.jsx'
import FaqPage from './components/FaqPage.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Terms from './components/Terms.jsx'
import Privacy from './components/Privacy.jsx'
import RiskDisclosure from './components/RiskDisclosure.jsx'
import NotFound from './components/NotFound.jsx'
import ThankYou from './components/ThankYou.jsx'

// Shared page shell - SEO head metadata, header, main, footer.
const Layout = ({ routeName, children }) => (
  <>
    <Seo route={routeName} />
    <Header route={routeName} />
    <main>{children}</main>
    <Footer />
  </>
)

// The page tree for a given route, as plain React elements. Used both by the
// client (App picks the route, renders this) and by the static prerender at
// build time (renderToString over this). Keeping them the same guarantees the
// baked HTML hydrates without mismatches.
export function renderRoute(route) {
  if (route === 'about') return <Layout routeName="about"><About /></Layout>
  if (route === 'contact') return <Layout routeName="contact"><Contact /></Layout>
  if (route === 'terms') return <Layout routeName="terms"><Terms /></Layout>
  if (route === 'privacy') return <Layout routeName="privacy"><Privacy /></Layout>
  if (route === 'disclosure') return <Layout routeName="disclosure"><RiskDisclosure /></Layout>
  if (route === 'thank-you') return <Layout routeName="thank-you"><ThankYou /></Layout>
  if (route === 'faq') return <Layout routeName="faq"><FaqPage /></Layout>
  if (route === '404') return <Layout routeName="404"><NotFound /></Layout>

  return (
    <Layout routeName="home">
      <Hero />
      <Metrics />
      <WhatIsKapitix />
      <HowItWorks />
      <Experience />
      <Priorities />
      <Features />
      <Precision />

      <CtaBanner
        eyebrow="Start today"
        title="Open Your Account and Start Trading Today"
        text="Opening an account takes less than two minutes. Explore the market with AI-assisted insights and see why traders across Australia are choosing Sovereign Kapitix."
        cta="Open your free account"
      />

      <Testimonials />
      <Portfolio />
      {/* Spec table flows into the toolkit grid, then the final sign-up CTA. */}
      <Capabilities />
      <Toolkit />
      <FinalCta />
    </Layout>
  )
}
