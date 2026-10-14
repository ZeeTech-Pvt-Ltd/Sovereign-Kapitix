import Seo from './components/Seo.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import WhatIsKapitix from './components/WhatIsKapitix.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Features from './components/Features.jsx'
import Legit from './components/Legit.jsx'
import Protected from './components/Protected.jsx'
import FeesTable from './components/FeesTable.jsx'
import Risks from './components/Risks.jsx'
import HomeFaq from './components/HomeFaq.jsx'
import FinalCta from './components/FinalCta.jsx'
import FaqPage from './components/FaqPage.jsx'
import HowItWorksPage from './components/HowItWorksPage.jsx'
import FeesPage from './components/FeesPage.jsx'
import ReviewPage from './components/ReviewPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
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
  if (route === 'how-it-works') return <Layout routeName="how-it-works"><HowItWorksPage /></Layout>
  if (route === 'fees') return <Layout routeName="fees"><FeesPage /></Layout>
  if (route === 'sovereign-kapitix-review') return <Layout routeName="sovereign-kapitix-review"><ReviewPage /></Layout>
  if (route === 'register') return <Layout routeName="register"><RegisterPage /></Layout>
  if (route === '404') return <Layout routeName="404"><NotFound /></Layout>

  // Homepage. Section order follows the operator's homepage brief: the form and
  // its trust strip first, then what the platform is and who it is not for, the
  // three-step summary, the features, the "is it legit" section, the fee table
  // and the risk section - and only then the closing CTA.
  //
  // The risk section sits above the final CTA on purpose. A reader should meet
  // the downside of trading before the last invitation to deposit, not after.
  return (
    <Layout routeName="home">
      <Hero />
      {/* Ticker sits immediately under the hero, then the trust panel. */}
      <Ticker />
      <div className="container"><TrustStrip /></div>
      <WhatIsKapitix />
      <HowItWorks />
      <Features />
      <Legit />
      <Protected />
      <FeesTable />
      <Risks />
      <HomeFaq />
      <FinalCta />
    </Layout>
  )
}
