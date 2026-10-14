// =========================================================
// Per-route SEO configuration for Sovereign Kapitix.
// Single source of truth for <title>, meta description, meta
// keywords, canonical URLs, robots rules, Open Graph, Twitter
// cards, and JSON-LD structured data - consumed by <Seo/>.
// Nothing here invents facts: all claims come from content.js
// and pages.js, both of which are operator-supplied.
// =========================================================
import { faq, MIN_DEPOSIT, MARKETS } from './content.js'
import { faqGroups } from './pages.js'

// Single source of truth for the origin. Every absolute URL on the site -
// canonicals, og:url, JSON-LD @id, the sitemap and the build's head writer -
// derives from this. It was previously duplicated in three files and one copy
// had already drifted to a domain that was not ours, so import it rather than
// retyping it. www.sovereign-kapitix.net 301s here (see vercel.json).
export const SITE = 'https://sovereign-kapitix.net'
export const OG_IMAGE = `${SITE}/og-image.png`

// ---------- JSON-LD builders (real site content only) ----------

// Organization is deliberately thin. The operator's brief asks for
// "Organization (name, URL and logo only)" and says why: "Company registration
// details are intentionally left out for data security." No address, no
// founding date, no registration number - each would be an invented fact.
const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Sovereign Kapitix',
  url: SITE,
  logo: `${SITE}/favicon.svg`,
  inLanguage: 'en-AU',
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

// FAQPage is always generated from the same question list the page renders,
// never duplicated or invented. When an answer carries a trailing read-more
// link, the same sentence is appended here so the structured text matches the
// rendered answer exactly (anchor text only, no markup).
function buildFaqPage(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.link ? `${f.a} ${f.link.text}` : f.a,
      },
    })),
  }
}

// The /faq page renders its questions in seven groups; the schema wants one
// flat list, so flatten it here rather than maintaining a second copy.
const faqGroupItems = faqGroups.flatMap((g) => g.items)

// ---------- per-route configuration ----------
//
// Every title and description below is the one supplied in the operator's
// page briefs, transcribed rather than rewritten, so the SERP snippet matches
// what was signed off. Titles target under 60 characters and descriptions
// under 155, which the briefs were themselves written to.
export const seo = {
  home: {
    title: 'Sovereign Kapitix: AI Trading Platform for Australians',
    description:
      `Sovereign Kapitix is an AI-assisted trading platform for Australian residents. See how it works, fees, risks and how to open an account from ${MIN_DEPOSIT}.`,
    keywords:
      'Sovereign Kapitix, AI trading platform Australia, automated trading platform Australia, AI crypto trading Australia, Sovereign Kapitix review, is Sovereign Kapitix legit',
    canonical: `${SITE}/`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix AI trading platform for Australia',
    schema: [
      organization,
      website,
      webPage('Sovereign Kapitix AI Trading Platform for Australia', `${SITE}/`, `Sovereign Kapitix is an AI-assisted trading platform for Australian residents, with a ${MIN_DEPOSIT} minimum deposit.`),
      buildFaqPage(faq),
    ],
  },

  about: {
    title: 'About Sovereign Kapitix - Trading Without the Complexity',
    description:
      'Learn about Sovereign Kapitix, an AI-assisted trading platform offering automated analysis, strong encryption, and support for Australian traders.',
    keywords: 'about Sovereign Kapitix, Sovereign Kapitix trading platform, automated trading platform australia, AI trading company',
    canonical: `${SITE}/about`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'About Sovereign Kapitix - automated trading without the complexity',
    schema: [
      webPage('About Sovereign Kapitix', `${SITE}/about`, 'About the Sovereign Kapitix AI-assisted trading platform - automated market analysis, encryption, and support for Australian traders.'),
      breadcrumb('About Us', '/about'),
    ],
  },

  contact: {
    title: 'Contact Sovereign Kapitix | Australian Support Team',
    description:
      'Have a question about Sovereign Kapitix or AI trading? Contact our support team by phone, email or live chat, or use the registration form.',
    keywords: 'contact Sovereign Kapitix, Sovereign Kapitix support, AI trading help, Sovereign Kapitix Australia support',
    canonical: `${SITE}/contact`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Contact Sovereign Kapitix support',
    schema: [
      webPage('Contact Sovereign Kapitix', `${SITE}/contact`, 'Contact the Sovereign Kapitix support team - email and registration form.'),
      breadcrumb('Contact Us', '/contact'),
    ],
  },

  faq: {
    title: 'Sovereign Kapitix FAQ: Fees, Safety, Signals & More',
    description:
      `Answers to common Sovereign Kapitix questions: how it works, ${MIN_DEPOSIT} minimum deposit, fees, withdrawals, AI signals, safety and who can register.`,
    keywords:
      'Sovereign Kapitix FAQ, is Sovereign Kapitix legit, Sovereign Kapitix minimum deposit, Sovereign Kapitix withdrawal, how does Sovereign Kapitix work, is AI trading safe',
    canonical: `${SITE}/faq`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix FAQ - fees, safety, signals and more',
    schema: [
      webPage('Sovereign Kapitix FAQ', `${SITE}/faq`, 'Answers to common questions about Sovereign Kapitix: how it works, fees, withdrawals, AI signals, account safety and who can register.'),
      breadcrumb('FAQ', '/faq'),
      buildFaqPage(faqGroupItems),
    ],
  },

  'how-it-works': {
    title: 'How Sovereign Kapitix Works: AI Trading Step by Step',
    description:
      `See how Sovereign Kapitix works: sign up, verify, test the free demo, fund from ${MIN_DEPOSIT}, set risk limits and trade with AI signals manually or automatically.`,
    keywords:
      'how does Sovereign Kapitix work, Sovereign Kapitix sign up, Sovereign Kapitix demo account, how AI trading works, how to start AI trading in Australia, AI trading signals explained',
    canonical: `${SITE}/how-it-works`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'How Sovereign Kapitix works, step by step',
    schema: [
      webPage('How Sovereign Kapitix Works', `${SITE}/how-it-works`, 'The six-step guide from signing up to your first trade on Sovereign Kapitix, plus how the AI signals work and the risk controls you set.'),
      breadcrumb('How It Works', '/how-it-works'),
    ],
  },

  fees: {
    title: 'Sovereign Kapitix Fees & Minimum Deposit (AU$250) Guide',
    description:
      `Sovereign Kapitix fees explained: ${MIN_DEPOSIT} minimum deposit, no platform commission, no subscription, broker spreads, deposit methods and withdrawal times.`,
    keywords:
      'Sovereign Kapitix fees, Sovereign Kapitix minimum deposit, Sovereign Kapitix withdrawal, Sovereign Kapitix withdrawal time, Sovereign Kapitix deposit methods, trading platform with no platform commission, low minimum deposit trading platform Australia',
    canonical: `${SITE}/fees`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sovereign Kapitix fees and minimum deposit explained',
    schema: [
      webPage('Sovereign Kapitix Fees and Minimum Deposit', `${SITE}/fees`, `Every cost of using Sovereign Kapitix: free registration, no subscription, no platform commission, a ${MIN_DEPOSIT} minimum deposit and how withdrawals work.`),
      breadcrumb('Fees', '/fees'),
    ],
  },

  // The page that answers "is Sovereign Kapitix a scam". Article + FAQPage, and
  // deliberately NOT Review or AggregateRating markup: the operator's brief says
  // Google treats a business reviewing itself as self-serving, so stars would
  // not show and the markup would only add risk.
  'sovereign-kapitix-review': {
    title: 'Sovereign Kapitix Review 2026: Is It Legit? Fees & Risks',
    description:
      `Honest Sovereign Kapitix review for Australians: how it works, ${MIN_DEPOSIT} minimum deposit, fees, supported assets, safety checks, pros and cons, and who it suits.`,
    keywords:
      'Sovereign Kapitix review, is Sovereign Kapitix legit, Sovereign Kapitix scam or legit, is Sovereign Kapitix safe, Sovereign Kapitix minimum deposit, Sovereign Kapitix fees, Sovereign Kapitix Australia',
    canonical: `${SITE}/sovereign-kapitix-review`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'article',
    ogImageAlt: 'Sovereign Kapitix review 2026',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${SITE}/sovereign-kapitix-review#article`,
        headline: 'Sovereign Kapitix Review 2026: Is It Legit and Worth Trying?',
        description: `An honest review of the Sovereign Kapitix AI-assisted trading platform: fees, the ${MIN_DEPOSIT} minimum deposit, pros and cons, and how to check it yourself.`,
        author: { '@id': `${SITE}/#organization` },
        publisher: { '@id': `${SITE}/#organization` },
        isPartOf: { '@id': `${SITE}/#website` },
        inLanguage: 'en-AU',
      },
      breadcrumb('Review', '/sovereign-kapitix-review'),
    ],
  },

  register: {
    title: 'Sovereign Kapitix Sign Up: Open Your Free Account',
    description:
      `Register with Sovereign Kapitix in about two minutes. Free sign-up, free demo account, AI trading signals across ${MARKETS} markets and funding from just ${MIN_DEPOSIT}.`,
    keywords:
      'Sovereign Kapitix sign up, Sovereign Kapitix register, Sovereign Kapitix registration, Sovereign Kapitix account, open AI trading account Australia, AI trading platform free demo account',
    canonical: `${SITE}/register`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    type: 'website',
    ogImageAlt: 'Sign up for a Sovereign Kapitix account',
    schema: [
      webPage('Sovereign Kapitix Sign Up', `${SITE}/register`, `Register for a Sovereign Kapitix account. Free sign-up, a free demo account, and funding from ${MIN_DEPOSIT} when you are ready.`),
      breadcrumb('Sign Up', '/register'),
    ],
  },

  terms: {
    title: 'Terms of Use - Sovereign Kapitix Trading Platform',
    description:
      'Read the Sovereign Kapitix Terms of Use - the rules that govern use of the AI-assisted automated trading platform for users in Australia.',
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
