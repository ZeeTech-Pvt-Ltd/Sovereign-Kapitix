// =========================================================
// Central content file - edit all copy in one place
// =========================================================
//
// ---------------------------------------------------------
// FIGURES - WHERE EACH ONE COMES FROM
// ---------------------------------------------------------
// Product claims - minimum deposit, cold storage, signal accuracy and
// instrument count - are carried over from the reference site this brand's
// copy follows. They are defined once here and referenced everywhere.
//
// Everything else that renders as a number - the dashboard balances, the
// per-asset values and the win-rate / pairs chips inside the mock UIs - is
// illustrative sample data for the mockups, not a performance claim.
//
// Testimonials stay empty on purpose; see the note above that export.
// ---------------------------------------------------------
export const MIN_DEPOSIT = 'AU$250'
export const COLD_STORAGE = '98%'
export const SIGNAL_ACCURACY = '85%'
export const INSTRUMENTS = '300+'

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  eyebrow: '🇦🇺 AI-powered trading, built for Australia',
  title: 'Sovereign Kapitix',
  titleMark: 'Automated Trading Platform',
  lead: 'Buy, trade and manage Bitcoin, Ethereum and a broad range of digital assets on one secure platform - AI-assisted signals, strong encryption and round-the-clock professional support.',
  checks: [
    'Bitcoin, Ethereum and a broad range of digital assets',
    'AI-assisted signals, monitored around the clock',
    'Strong encryption and 24/7 professional support',
  ],
}

// "What is Sovereign Kapitix?" - the definitional block between the stats strip
// and the markets section, answering the question a first-time visitor arrives
// with. Both paragraphs are plain descriptive copy: no performance figures.
export const whatis = {
  title: 'What is Sovereign Kapitix?',
  body: [
    `Sovereign Kapitix is an AI-powered automated trading platform available to verified residents of Australia. The system monitors live market data 24/7 across crypto, forex, equities, and commodities, then either places trades automatically on your behalf or hands you the signals to trade manually. Accounts open with a minimum deposit of ${MIN_DEPOSIT}, with no subscription fee.`,
    'The platform is built for traders who want market exposure without reading charts all day. You keep full control of your account and can withdraw at any time. Sovereign Kapitix provides technology and information tools only - it does not give personal financial advice.',
  ],
}

export const metrics = [
  { value: SIGNAL_ACCURACY, label: 'AI signal accuracy', solid: false },
  { value: COLD_STORAGE, label: 'Assets held in cold storage', solid: false },
  { value: '4.7/5', label: 'Rated by traders', solid: true },
  { value: '24/7', label: 'Professional assistance', solid: false },
]

export const steps = [
  {
    no: 'STEP 1',
    icon: 'user',
    title: 'Create Your Account',
    text: 'Sign up in under two minutes with your name, email and phone number. No trading experience needed - the platform and our team guide you from day one, with two-factor authentication active from the moment your account is created.',
    cta: 'Start now',
  },
  {
    no: 'STEP 2',
    icon: 'wallet',
    title: 'Deposit Funds',
    text: `Begin with as little as ${MIN_DEPOSIT}. Deposit securely by credit card, bank transfer or PayPal - your funds are protected from the moment they arrive, and there are no hidden charges.`,
    cta: 'Deposit now',
    green: true,
  },
  {
    no: 'STEP 3',
    icon: 'chart',
    title: 'Start Trading',
    text: 'Follow AI-generated market signals, build your own portfolio, or let automation run - on desktop or mobile, whenever you like. The platform watches the markets 24/7 and keeps your balance up to date in real time.',
    cta: 'Get started',
  },
]

export const trustStrip = [
  'Zero hidden fees',
  'Withdraw whenever you like',
  'No monthly subscriptions',
  'Leave when you want',
]

export const experience = {
  eyebrow: 'The platform',
  titleA: 'Experience Smarter Trading with ',
  titleMark: 'AI-Driven Precision',
  lead: 'Clear, secure, and open to traders of every level. Sovereign Kapitix pairs intelligent automation with live market analysis to deliver a fast and streamlined trading experience across Australia.',
  rows: [
    {
      title: 'Advanced AI Technologies',
      text: 'At the heart of the platform is intelligent automation. Sovereign Kapitix studies live markets and acts on opportunities across multiple asset classes, so the work happens for you while you stay in control of your account.',
      points: [
        '24/7 automated analysis of live markets',
        'Signals across multiple asset classes in one place',
        'Hands-free trading while you stay in control',
        'Clear visibility into every automated action',
      ],
      // Dashboard mockup: the chart bars are decorative, but the figures are
      // placeholders until real (or clearly-labelled sample) data is supplied.
      label: 'Portfolio value', sub: '92.4%', balance: '$248,521.90', bars: [34, 48, 40, 62, 55, 74, 66, 88], badge: 'AI Active 24/7', pos: 'b1',
    },
    {
      title: 'AI-Powered Trading Engine',
      text: 'Our adaptive engine responds the moment market conditions shift. Cryptocurrency trading carries risk by nature, but a transparent approach and proactive technology give you access to tools built for speed and clarity.',
      points: [
        'Adapts instantly when market conditions shift',
        'Real-time signals with no hidden steps',
        'Built for speed and clarity in every market',
        'Active around the clock on your behalf',
      ],
      label: 'AI status', sub: 'Active 24/7', balance: 'Executing…', balanceNote: 'LIVE', bars: [52, 38, 70, 58, 82, 64, 92], badge: 'Real-time signals', pos: 'b2', solid: true,
    },
    {
      title: 'Simple and Clear Investing',
      text: 'Whether you are brand new to trading or a seasoned investor, Sovereign Kapitix keeps things simple. Complex concepts are broken down into clear steps, so diversifying your portfolio stays easy and understandable.',
      points: [
        'Clean, jargon-free guidance for every level',
        'Complex concepts broken into clear steps',
        'Diversify your portfolio in just a few clicks',
        'Designed for beginners and seasoned traders alike',
      ],
      label: '3-click trading', sub: 'Beginner friendly', balance: 'Simple.', balanceNote: 'No jargon', bars: [30, 42, 38, 56, 50, 64, 60, 76], badge: 'For every level', pos: 'b3',
    },
    {
      title: 'Convenient and Reliable Management',
      text: 'Your dashboard puts everything in one place - trades, performance, and signals - so you always know exactly where you stand. That clarity is part of what makes Sovereign Kapitix a platform you can rely on.',
      points: [
        'Trades, performance, and signals in one dashboard',
        'Withdraw your funds whenever you choose',
        'Your full activity history at a glance',
        'Reliable account access around the clock',
      ],
      label: 'Balance', sub: 'Withdraw anytime', balance: '$118,240.55', bars: [44, 58, 50, 72, 64, 80, 74, 96], badge: 'Transparent dashboard', pos: 'b1',
    },
  ],
}

export const priorities = {
  eyebrow: 'Security first',
  title: 'Bank-Grade Protection for ',
  titleMark: 'Your Funds',
  lead: 'Your assets and your data deserve protection at every step, every day.',
  cards: [
    {
      big: COLD_STORAGE, cap: 'cold storage',
      title: 'Security', sub: 'Steps we take to help keep your funds safe',
      items: [`${COLD_STORAGE} of funds held in cold storage`, '256-bit encryption on every connection and transaction', 'Two-factor authentication on every login and withdrawal'],
      tags: ['SSL', '2FA'],
    },
    {
      big: '3', bigNote: 'clicks', cap: 'to start', alt: true,
      title: 'Compliance & custody', sub: 'How client funds are held and verified',
      items: ['KYC & AML compliance on every account', 'Client funds held in segregated accounts', 'Held separately from company operating funds'],
      tags: ['KYC', 'AML'],
    },
    {
      big: '0', cap: 'hidden fees',
      title: 'Transparency', sub: 'No surprises, ever',
      items: ['Clear pricing from day one', 'No hidden fees', 'Honest risk disclosure, with no fine-print surprises'],
      tags: ['Upfront'],
    },
  ],
}

// "Why traders choose us" - the first half of the six-card grid. Features.jsx
// renders the section heading above these three; Precision.jsx renders the
// remaining three under the same heading, reusing the feat-grid markup.
export const featuresHead = {
  eyebrow: 'Why traders choose us',
  title: 'What Makes Sovereign Kapitix the ',
  titleMark: 'Smart Choice',
  titleEnd: '?',
  lead: 'From AI-assisted precision to beginner-friendly tools, the platform is built to give every trader an edge.',
}

export const features = [
  {
    icon: 'bot', title: 'AI-Assisted Market Engine',
    text: 'The engine scans global markets around the clock, surfacing signals and emerging trends on your behalf - so opportunities do not pass you by while you are away from the screen.',
  },
  {
    icon: 'gauge', title: 'Portfolio Analytics', green: true,
    text: 'Track performance, risk and allocation in one dashboard. Automation is only half the story - the numbers behind it keep you informed at every turn.',
  },
  {
    icon: 'book', title: 'Educational Resources',
    text: 'From beginner guides to advanced strategy, learn at your own pace. Complex concepts are broken into clear steps that suit every experience level.',
  },
]

export const precision = [
  {
    icon: 'layers', title: 'Multi-Device Access',
    text: 'Start on desktop, finish on mobile. The platform runs in your browser and your account stays in sync wherever you sign in - nothing to install.',
  },
  {
    icon: 'headset', title: '24/7 Human Support', green: true,
    text: 'Real people, real answers. Our support team is available around the clock, every day of the year, to help with your account and funding questions.',
  },
  {
    icon: 'chart', title: 'Broad Market Coverage',
    text: 'Crypto, equities, forex, commodities and precious metals - follow the markets you care about from a single Sovereign Kapitix account.',
  },
]

// ---------------------------------------------------------
// TESTIMONIALS - intentionally empty.
// The template carried three invented people behind a shared review score.
// Republishing those under a new brand would repeat the same problem. Add
// real, attributable quotes only - with the person's written consent - and
// set `summary` to a score you can evidence. <Testimonials/> hides the
// whole section while `items` is empty.
// ---------------------------------------------------------
export const testimonials = {
  eyebrow: 'Community',
  title: 'Reviews From ',
  titleMark: 'Our Community',
  lead: 'Real experiences, straight from verified users.',
  items: [],
  summary: [],
}

export const portfolio = {
  eyebrow: 'Portfolio management',
  title: 'Manage Your ',
  titleMark: 'Portfolio with Data-Driven',
  titleEnd: ' Trading',
  lead: 'Through the official Sovereign Kapitix platform, traders in Australia get a clean, data-first trading experience - real-time performance tracking and tools that are simple to understand and use.',
  checks: [
    'Live performance analytics',
    'Straightforward guidance at every step',
    'Withdraw your funds whenever you need to',
  ],
  visual: { label: 'Managed portfolio', sub: 'Live', balance: '$42,815.60', note: 'this quarter', bars: [28, 40, 36, 54, 48, 66, 62, 78, 72], badge: 'Data-driven' },
}

export const faq = [
  {
    q: 'Is Sovereign Kapitix Legit?',
    // TODO: this answer used to lean on an invented review score. Replace
    // with verifiable facts - your entity name, AFSL status if you hold one,
    // and how a reader can check it.
    a: 'Sovereign Kapitix is an automated trading platform. We publish our terms, our risk disclosure, and how the platform works, so you can judge it on the facts rather than on ratings. Always verify any platform independently before depositing money.',
  },
  {
    q: 'How Much Do I Need to Start Trading on Sovereign Kapitix?',
    a: `A minimum deposit of ${MIN_DEPOSIT} activates your trading account - with no subscription fees, hidden charges, or registration costs. Start small and grow at a pace that suits you.`,
  },
  {
    q: 'Is There a Sovereign Kapitix App?',
    a: 'There is no Sovereign Kapitix mobile app. The platform runs in your browser on any device. Always type the address yourself rather than following a link from an ad or message, and treat any Sovereign Kapitix APK as unrelated to us.',
  },
  {
    q: 'How Secure Are My Money and Data on Sovereign Kapitix?',
    a: `Security runs through every layer of the platform. ${COLD_STORAGE} of assets are held in cold storage, and your personal data is shielded by 256-bit encryption and two-factor authentication.`,
  },
  {
    q: 'What Payment Methods Can I Use to Withdraw?',
    a: 'Withdrawals follow the same channels as your deposit - including major credit cards, bank transfers, and PayPal. Most requests are processed within 24 hours.',
  },
  {
    q: 'How Does Sovereign Kapitix Maintain Transparency?',
    a: 'Openness is built into how Sovereign Kapitix works. Every trade, signal, and balance change appears in your account in real time, supported by upfront pricing.',
  },
  {
    q: 'Why Are There So Many Copycat Versions of Your Platform Online?',
    a: 'Our platform has drawn lookalike (scam) sites that aim to mislead visitors. Always double-check that you are on the official domain - sovereign-kapitix.net.',
  },
]

export const capabilitiesHead = {
  eyebrow: 'Platform overview',
  title: 'The Platform at a ',
  titleMark: 'Glance',
  titleEnd: '',
  lead: 'Everything you need to know about Sovereign Kapitix at a glance.',
}

export const capabilities = [
  { k: 'Platform Technology', v: 'AI-Powered Trading Engine' },
  { k: 'Signal Accuracy', v: SIGNAL_ACCURACY },
  { k: 'Security', v: `256-bit SSL Encryption · ${COLD_STORAGE} Cold Storage` },
  { k: 'Funding Methods', v: 'Credit Cards, Bank Transfers, PayPal' },
  { k: 'Trading Instruments', v: `${INSTRUMENTS} Markets · Crypto, Equities, Forex & More` },
  { k: 'Platform Access', v: 'Desktop, Tablet and Mobile' },
  { k: 'Account Setup', v: 'Fast, Guided Onboarding' },
  { k: 'Customer Support', v: '24/7 Support From Real People' },
  { k: 'Account Verification', v: 'KYC & AML Compliant' },
  { k: 'Minimum Deposit', v: `${MIN_DEPOSIT} · No Hidden Costs` },
]

// "Inside the toolkit" - the six-card capability grid above the final CTA.
// Rendered by Toolkit.jsx using the same feat-grid / feat-card markup as the
// features grid.
export const toolkit = {
  eyebrow: 'Inside the toolkit',
  title: 'Inside the ',
  titleMark: 'Sovereign Kapitix',
  titleEnd: ' Toolkit',
  lead: 'A full toolkit, engineered for performance.',
  cards: [
    {
      icon: 'candles', title: 'Advanced Charting',
      text: 'A professional charting suite with live data, drawing tools and a wide indicator library to help you time your entries.',
    },
    {
      icon: 'zap', title: 'Real-time AI Signals', green: true,
      text: 'Entry and exit signals delivered the moment opportunities appear, with no hidden steps between the analysis and your account.',
    },
    {
      icon: 'layers', title: 'Multi-Device Sync',
      text: 'Start on desktop, finish on mobile - your positions, watchlists and settings stay perfectly in sync.',
    },
    {
      icon: 'gauge', title: 'Portfolio Analytics', green: true,
      text: 'Track performance, risk and allocation in one dashboard, so you always know where your money stands.',
    },
    {
      icon: 'chart', title: 'Broad Market Coverage',
      text: 'Crypto, equities, forex, commodities and precious metals in one place - no more juggling multiple apps.',
    },
    {
      icon: 'lock', title: 'Secure Custody',
      text: 'Every session is protected by strong encryption, with two-factor authentication on logins and withdrawals.',
    },
  ],
}

export const footer = {
  blurb: 'Sovereign Kapitix is an AI-driven automated trading platform for users in Australia - automated strategies, live market insights, and dependable security in one place.',
  company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Term Of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Risk Disclosure', href: '/disclosure' },
    { label: 'Sign Up', href: '/', scroll: '#register' },
  ],
  disclaimer:
    'HIGH RISK WARNING: Dealing or trading FX, CFDs, cryptocurrencies and other financial instruments is highly speculative, carries a non-negligible level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. All profit examples shown on this website are illustrative and do not guarantee similar results. Sovereign Kapitix operates as a technology services company, does not provide financial, investment or legal advice, and does not accept any liability for loss or damage as a result of reliance on the information contained within this website. Laws regarding financial activities vary throughout the world, and it is your sole responsibility to ensure that your use of this website complies with applicable laws and regulations in your jurisdiction of residence.',
}
