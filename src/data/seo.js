// =========================================================
// Per-route SEO configuration for Sovereign Kapitix.
// Single source of truth for <title>, meta description, meta
// keywords, canonical URLs, robots rules, Open Graph, Twitter
// cards, and JSON-LD structured data - consumed by <Seo/>.
// Nothing here invents facts: all claims come from content.js.
// =========================================================
import { faq, MIN_DEPOSIT } from './content.js'

// Single source of truth for the origin. Every absolute URL on the site -
// canonicals, og:url, JSON-LD @id, the sitemap and the build's head writer -
// derives from this. It was previously duplicated in three files and one copy
// had already drifted to a domain that was not ours, so import it rather than
// retyping it. www.sovereign-kapitix.net 301s here (see vercel.json).
export const SITE = 'https://sovereign-kapitix.net'
export const OG_IMAGE = `${SITE}/og-image.png`

// ---------- JSON-LD builders (real site content only) ----------

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Sovereign Kapitix',
  url: SITE,
  logo: `${SITE}/favicon.svg`,
  description:
    'Sovereign Kapitix is an AI-powered automated trading platform for users in Australia - automated strategies, live market signals, and dependable security in one place.',
  email: 'support@sovereign-kapitix.net',
  inLanguage: 'en-AU',
  areaServed: 'Australia',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'Victoria',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@sovereign-kapitix.net',
    availableLanguage: 'en',
    hoursAvailable: 'Mo-Su 00:00-24:00',
  },
}

// The platform described as a schema.org Service, geo-scoped to Australia -
// all fields reflect claims already on the site (Melbourne base, 24/7
// support), nothing invented.
function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/#service`,
    name: 'Sovereign Kapitix Automated Trading Platform',
    serviceType: 'Automated trading platform',
    description:
      'AI-powered automated trading platform for users in Australia - automated strategies, live market signals, and dependable security in one place.',
    provider: { '@id': `${SITE}/#organization` },
    areaServed: 'Australia',
    audience: { '@type': 'Audience', audienceType: 'Traders in Australia' },
    // The minimum deposit is now a set figure (see MIN_DEPOSIT in content.js),
    // so the machine-readable offer can carry it. Keep the two in step if the
    // figure ever changes - structured data is surfaced directly in search.
    offers: {
      '@type': 'Offer',
      name: 'Sovereign Kapitix Trading Account',
      price: '250',
      priceCurrency: 'AUD',
      description:
        'Minimum deposit to open a Sovereign Kapitix trading account. No subscription or registration fees.',
    },
  }
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: 'Sovereign Kapitix',
  url: SITE,
  publisher: { '@id': `${SITE}/#organization` },
  inLanguage: 'en-AU',
}

function webPage(name, url, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': `${SITE}/#organization` },
    inLanguage: 'en-AU',
  }
}

function breadcrumb(name, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` },
    ],
  }
}

// FAQ schema is always generated from the same FAQ content that is rendered
// on the page it describes - never duplicated or invented.
function buildFaqPage(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      // When an answer carries a trailing read-more link (item.link), the same
      // sentence is appended here so the structured text matches the rendered
      // answer exactly (anchor text only, no markup).
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.link ? `${f.a} ${f.link.text}` : f.a,
      },
    })),
  }
}

// FAQ schema - mirrors the FAQ accordion on the /faq route.
function faqPageSchema() {
  return buildFaqPage(faq)
}

// Titles below are kept under ~60 characters where possible - Google truncates
// the SERP snippet past roughly that width, and a cut-off title loses the tail
// keyword. Descriptions target 70-160 for the same reason.
//
// The home pair is hoisted because the JSON-LD block below repeats them; two
// copies of the same string is how they drift apart.
const homeTitle = 'Sovereign Kapitix | AI Trading Platform for Australia'
const homeDescription =
  'Sovereign Kapitix - AI-powered automated trading platform for Australia. 24/7 automated strategies, live signals, bank-grade security.'

export const seo = {
  home: {
    title: homeTitle,
    description: homeDescription,
    keywords:
      'automated trading platform australia, AI trading platform, automated crypto trading, Sovereign Kapitix, AI trading Australia',
    canonical: `${SITE}/`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix - AI-powered automated trading platform for Australia',
    schema: [organization, website, webPage(homeTitle, `${SITE}/`, homeDescription), serviceSchema()],
  },

  about: {
    title: 'About Sovereign Kapitix - Trading Without the Complexity',
    description:
      'Learn about Sovereign Kapitix, an AI-assisted trading platform offering automated analysis, bank-grade security, and 24/7 support for Australian traders.',
    keywords: 'about Sovereign Kapitix, Sovereign Kapitix trading platform, automated trading platform australia, AI trading company',
    canonical: `${SITE}/about`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'About Sovereign Kapitix - automated trading without the complexity',
    schema: [
      webPage('About Sovereign Kapitix', `${SITE}/about`, 'About the Sovereign Kapitix AI-driven automated trading platform - automated market analysis, bank-grade security, and 24/7 support.'),
      breadcrumb('About Us', '/about'),
    ],
  },

  contact: {
    title: 'Contact Sovereign Kapitix | 24/7 Australian Support',
    description:
      'Have a question about Sovereign Kapitix or automated trading? Contact our 24/7 support team by email or the registration form - we reply within hours.',
    keywords: 'contact Sovereign Kapitix, Sovereign Kapitix support, automated trading help, Sovereign Kapitix Australia support',
    canonical: `${SITE}/contact`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Contact Sovereign Kapitix support - 24/7 assistance for Australian traders',
    schema: [
      webPage('Contact Sovereign Kapitix', `${SITE}/contact`, 'Contact the Sovereign Kapitix support team - email and registration form, available around the clock.'),
      breadcrumb('Contact Us', '/contact'),
    ],
  },

  faq: {
    title: 'FAQ - Sovereign Kapitix Automated Trading Platform',
    description:
      'Answers to the questions people ask most about Sovereign Kapitix: what it costs, how to open an account, and how to spot a fake site. Read the FAQ.',
    keywords:
      'Sovereign Kapitix FAQ, Sovereign Kapitix help, automated trading questions, is Sovereign Kapitix legit, Sovereign Kapitix minimum deposit, Sovereign Kapitix withdrawal, how to open a trading account australia',
    canonical: `${SITE}/faq`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix FAQ - frequently asked questions about the automated trading platform',
    schema: [
      webPage('FAQ', `${SITE}/faq`, 'Answers to the most common questions about the Sovereign Kapitix automated trading platform - deposits, security, withdrawals, and account safety.'),
      breadcrumb('FAQ', '/faq'),
      faqPageSchema(),
    ],
  },

  'how-it-works': {
    title: 'How Sovereign Kapitix Works | AI Trading in Australia',
    description:
      'See how Sovereign Kapitix works, from your first sign up to your first trade. Five clear steps, no jargon. Open your account today.',
    keywords:
      'how Sovereign Kapitix works, how automated trading works, AI trading platform australia, Sovereign Kapitix sign up',
    canonical: `${SITE}/how-it-works`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'How Sovereign Kapitix works, from sign up to your first trade',
    schema: [
      webPage('How Sovereign Kapitix Works', `${SITE}/how-it-works`, 'The five step journey from signing up to placing your first trade on Sovereign Kapitix, plus the two trading modes and what the platform costs.'),
      breadcrumb('How It Works', '/how-it-works'),
    ],
  },

  // The page that answers "is Sovereign Kapitix a scam". The title and
  // description deliberately do not repeat that phrasing back as a claim about
  // the platform; they describe what the page contains, which is an honest
  // review carrying the downsides as well as the benefits.
  //
  // The slug is brand-qualified rather than a bare /review. Every brand built
  // on this template does the same, and the longer slug is what makes it
  // unambiguous when the page is shared or cited without its domain. The short
  // /review path is redirected here, never the other way around.
  'sovereign-kapitix-review': {
    title: 'Sovereign Kapitix Review | An Honest Look at the Platform',
    description:
      'An honest look at Sovereign Kapitix: how it works, what it costs, and the risks you should know before you deposit. Open your free account today.',
    keywords:
      'Sovereign Kapitix review, is Sovereign Kapitix a scam, Sovereign Kapitix legit, Sovereign Kapitix pros and cons, Sovereign Kapitix minimum deposit',
    canonical: `${SITE}/sovereign-kapitix-review`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'An honest review of the Sovereign Kapitix trading platform',
    schema: [
      webPage('Sovereign Kapitix Review', `${SITE}/sovereign-kapitix-review`, 'A full review of the Sovereign Kapitix automated trading platform: the costs, the pros and cons, and how to check the site you are on is the real one.'),
      breadcrumb('Reviews', '/sovereign-kapitix-review'),
    ],
  },

  register: {
    title: 'Open Your Sovereign Kapitix Account | Free Registration',
    description: `Open your Sovereign Kapitix account in about two minutes. Registration is free and the minimum deposit is ${MIN_DEPOSIT}. Start today.`,
    keywords:
      'Sovereign Kapitix register, open trading account australia, free trading account, Sovereign Kapitix sign up',
    canonical: `${SITE}/register`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Open your Sovereign Kapitix trading account',
    schema: [
      webPage('Open Your Sovereign Kapitix Account', `${SITE}/register`, `Register for a Sovereign Kapitix account. Registration is free and takes about two minutes, with a minimum deposit of ${MIN_DEPOSIT}.`),
      breadcrumb('Register', '/register'),
    ],
  },

  terms: {
    title: 'Terms of Use - Sovereign Kapitix Trading Platform',
    description:
      'Read the Sovereign Kapitix Terms of Use - the rules that govern use of the AI-powered automated trading platform for users in Australia.',
    keywords: 'Sovereign Kapitix terms of use, automated trading terms, platform terms',
    canonical: `${SITE}/terms`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix terms of use',
    schema: [
      webPage('Terms of Use', `${SITE}/terms`, 'The Sovereign Kapitix Terms of Use - the rules governing use of the platform.'),
      breadcrumb('Terms of Use', '/terms'),
    ],
  },

  privacy: {
    title: 'Privacy Policy - Sovereign Kapitix Trading Platform',
    description:
      'Read the Sovereign Kapitix Privacy Policy - how Sovereign Kapitix collects, uses, and protects your personal information on the automated trading platform.',
    keywords: 'Sovereign Kapitix privacy policy, data protection, trading platform privacy',
    canonical: `${SITE}/privacy`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix privacy policy',
    schema: [
      webPage('Privacy Policy', `${SITE}/privacy`, 'The Sovereign Kapitix Privacy Policy - how personal information is collected and protected.'),
      breadcrumb('Privacy Policy', '/privacy'),
    ],
  },

  disclosure: {
    title: 'Risk Disclosure - Sovereign Kapitix Trading Platform',
    description:
      'Read the Sovereign Kapitix Risk Disclosure - important information about the risks of trading FX, CFDs, and cryptocurrencies on the platform.',
    keywords: 'Sovereign Kapitix risk disclosure, trading risk warning, CFD crypto risk',
    canonical: `${SITE}/disclosure`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix risk disclosure',
    schema: [
      webPage('Risk Disclosure', `${SITE}/disclosure`, 'The Sovereign Kapitix Risk Disclosure - information about the risks of trading FX, CFDs, and cryptocurrencies.'),
      breadcrumb('Risk Disclosure', '/disclosure'),
    ],
  },

  'thank-you': {
    title: 'Thank You - Sovereign Kapitix Registration',
    description:
      'Your Sovereign Kapitix registration has been received. Our team will review your details and contact you shortly to activate your account.',
    keywords: '',
    // No canonical: a noindex page and a canonical tag are contradictory
    // signals, and this page should never be indexed or appear in the sitemap.
    canonical: null,
    robots: 'noindex, nofollow',
    type: 'website',
    ogImageAlt: 'Thank you - Sovereign Kapitix registration',
    schema: [],
  },

  404: {
    title: 'Page Not Found - Sovereign Kapitix',
    description: "The page you're looking for doesn't exist or has been moved. Return to the Sovereign Kapitix homepage or contact support.",
    keywords: '',
    canonical: null, // 404 page carries no canonical - it is noindexed
    robots: 'noindex, nofollow',
    type: 'website',
    ogImageAlt: 'Page not found - Sovereign Kapitix',
    schema: [],
  },
}
