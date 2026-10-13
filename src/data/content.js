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

// Register is not a nav entry: it is the header's Sign Up button, which points
// at /register. Adding it here as well would put the same destination in the
// bar twice.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about' },
  { label: 'Reviews', href: '/sovereign-kapitix-review' },
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

// ---------------------------------------------------------
// FAQ - the site's only FAQPage structured data source.
// ---------------------------------------------------------
// <FaqPage/> renders this list, and seo.js buildFaqPage() derives the JSON-LD
// from the same array, so an edit here moves the visible answer and the
// structured data together and they cannot drift.
//
// Order runs from the questions a first-time visitor arrives with (is this
// real, what does it cost, how do I start) through to the safety ones. `link`
// is optional and appends a read-more anchor; the same anchor text is appended
// to the structured answer so the two stay word for word.
//
// Copy rules: no dashes of any kind, Title Case on every question, and no
// figure that is not defined at the top of this file.
export const faq = [
  {
    q: 'Is Sovereign Kapitix Legit?',
    // TODO: this answer used to lean on an invented review score. Replace
    // with verifiable facts - your entity name, AFSL status if you hold one,
    // and how a reader can check it.
    a: 'Sovereign Kapitix is an automated trading platform. We publish our terms, our risk disclosure, and how the platform works, so you can judge it on the facts rather than on ratings. Always verify any platform independently before depositing money.',
    link: { text: 'Read our full review.', href: '/sovereign-kapitix-review' },
  },
  {
    q: 'How Much Do I Need to Start Trading on Sovereign Kapitix?',
    a: `A minimum deposit of ${MIN_DEPOSIT} activates your trading account. There are no subscription fees, no hidden charges, and no registration costs. Start small and grow at a pace that suits you.`,
  },
  {
    q: 'How Do I Open an Account?',
    a: 'Fill in the registration form with your name, email and phone number. It takes about two minutes, and registering costs nothing. A member of our team then gets in touch to help you complete verification and fund your account.',
    link: { text: 'See the full step by step guide.', href: '/how-it-works' },
  },
  {
    q: 'What Happens After I Sign Up?',
    a: 'A member of our team gets in touch to explain how the platform works, answer your questions and help you complete verification. Every account goes through KYC and AML checks. Once those are complete, your account is ready to fund.',
  },
  {
    q: 'What Is the Difference Between Automated and Manual Trading?',
    a: 'In automated mode the engine places trades on your behalf, which suits anyone who cannot watch the markets during the day. In manual mode the engine sends you the signal and you decide whether to act on it. You can switch between the two whenever you like.',
  },
  {
    q: 'Which Markets Can I Trade on Sovereign Kapitix?',
    a: 'Crypto, equities, forex, commodities and precious metals sit behind a single account and one login. The platform monitors them around the clock.',
  },
  {
    q: 'What Fees Does Sovereign Kapitix Charge?',
    a: 'There is no registration fee and no subscription. Costs apply to the positions you open, and we show our pricing up front rather than burying it in fine print. Always read the terms before you deposit.',
  },
  {
    q: 'Is There a Sovereign Kapitix App?',
    a: 'There is no Sovereign Kapitix mobile app. The platform runs in your browser on any device. Always type the address yourself rather than following a link from an ad or message, and treat any Sovereign Kapitix APK as unrelated to us.',
  },
  {
    q: 'How Secure Are My Money and Data on Sovereign Kapitix?',
    a: `Security runs through every layer of the platform. ${COLD_STORAGE} of assets are held in cold storage, and your personal data is shielded by 256 bit encryption and two factor authentication.`,
  },
  {
    q: 'What Payment Methods Can I Use to Withdraw, and How Long Does It Take?',
    a: 'Withdrawals follow the same channels as your deposit, including major credit cards, bank transfers and PayPal. Most requests are processed within 24 hours.',
  },
  {
    q: 'Does Sovereign Kapitix Guarantee Profits?',
    a: 'No, and no legitimate platform can. Trading carries risk and you may lose some or all of the money you deposit. Any platform promising fixed or guaranteed returns is a red flag.',
  },
  {
    q: 'Who Is Sovereign Kapitix For?',
    a: 'It suits people who are new to trading and want clear signals, and anyone too busy to watch the markets all day. It is not for anyone who cannot afford to lose the money they deposit, or who wants guaranteed returns.',
  },
  {
    q: 'Is Sovereign Kapitix Available Outside Australia?',
    a: 'No. Accounts are limited to verified residents of Australia, and deposits are in Australian dollars.',
  },
  {
    q: 'How Do I Spot a Fake Sovereign Kapitix Site?',
    a: 'Check the address bar. The only official domain is sovereign-kapitix.net. Be suspicious of anyone promising guaranteed or fixed daily profits, anyone rushing you to deposit, anyone asking for remote access to your computer, and anyone requesting payment in gift cards or crypto to a personal wallet. We do not have a mobile app, so any Sovereign Kapitix app on an app store is not ours.',
  },
  {
    q: 'What Should I Do If I Think I Have Been Contacted by a Scammer?',
    a: 'Stop all contact and do not send any money. Contact your bank straight away if you have already paid. Report it to Scamwatch at scamwatch.gov.au and ReportCyber at cyber.gov.au, then let us know at support@sovereign-kapitix.net so we can warn other users.',
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

// ---------------------------------------------------------
// DEDICATED PAGES - /how-it-works, /review, /register
// ---------------------------------------------------------
// Copy rules for everything below: no dashes of any kind, Title Case on every
// heading, contractions, and no figure that is not already defined at the top
// of this file or stated elsewhere on the site.
//
// Both /how-it-works and /review were once removed for being thin restatements
// of a homepage section. They are back as full pages, so each one has to earn
// its route: /how-it-works carries the five step journey, the two trading modes
// and the cost table; /review carries the pros and cons, the scam checks and
// the "who is this not for" section. Nothing here repeats a homepage block
// verbatim.
// ---------------------------------------------------------

export const howPage = {
  eyebrow: 'How It Works',
  title: 'From Sign Up to Your ',
  titleMark: 'First Trade',
  lead: 'Five clear steps, no jargon, and nothing you have to work out on your own. Here is exactly what happens when you join Sovereign Kapitix.',
  steps: [
    {
      no: '01',
      icon: 'user',
      title: 'Create Your Free Account',
      text: 'Fill in a short form with your name, email and phone number. It takes about two minutes, and registering costs nothing.',
    },
    {
      no: '02',
      icon: 'headset',
      title: 'Speak with Our Team',
      text: 'A member of our team gets in touch to explain how the platform works, answer your questions and help you complete verification.',
    },
    {
      no: '03',
      icon: 'wallet',
      title: 'Fund Your Account',
      text: `Deposit a minimum of ${MIN_DEPOSIT} by credit card, bank transfer or PayPal. Your funds are protected from the moment they arrive.`,
    },
    {
      no: '04',
      icon: 'gauge',
      title: 'Pick Your Mode',
      text: 'Choose automated trading, where the engine places trades on your behalf, or manual mode, where you decide on every trade yourself.',
    },
    {
      no: '05',
      icon: 'chart',
      title: 'Track and Adjust',
      text: 'Every trade appears on your dashboard as it happens. Pause automation, change your settings or request a withdrawal whenever you like.',
    },
  ],
  modes: {
    eyebrow: 'Two Ways to Trade',
    title: 'You Choose How Much ',
    titleMark: 'Control You Keep',
    lead: 'The platform can trade for you or alongside you. Switch between the two whenever you like.',
    cards: [
      {
        icon: 'bot',
        title: 'Automated Mode',
        text: 'The engine places trades on your behalf and keeps working while you are away from the screen. Best if you cannot watch the markets during the day.',
      },
      {
        icon: 'user',
        title: 'Manual Mode',
        text: 'The engine sends you the signal and you decide whether to act on it. Best if you want the final say on every trade you open.',
      },
    ],
  },
  control: {
    eyebrow: 'You Stay in Control',
    title: 'Built Around ',
    titleMark: 'Your Decisions',
    points: [
      'Withdraw your funds whenever you choose',
      'Switch between automated and manual trading at any time',
      'See every trade, signal and balance change in real time',
      'Reach a real person on support around the clock',
    ],
  },
  costs: {
    eyebrow: 'What It Costs',
    title: 'Clear Pricing, ',
    titleMark: 'No Surprises',
    rows: [
      { k: 'Registration', v: 'Free' },
      { k: 'Minimum Deposit', v: MIN_DEPOSIT },
      { k: 'Subscription Fees', v: 'None' },
      { k: 'Hidden Charges', v: 'None' },
    ],
    note: 'Trading carries risk, and costs apply to the positions you open. Read our',
    noteLink: { text: 'Risk Disclosure', href: '/disclosure' },
    noteEnd: 'before you deposit.',
  },
  ready: {
    eyebrow: 'Before You Start',
    title: 'What You Need to ',
    titleMark: 'Get Going',
    items: [
      'You live in Australia. Accounts are available to verified Australian residents.',
      'An email address and a phone number, so we can reach you about your account.',
      'Photo identification for verification. Every account goes through KYC and AML checks.',
      `At least ${MIN_DEPOSIT} to fund your account when you are ready.`,
    ],
  },
}

export const reviewPage = {
  eyebrow: 'Honest Review',
  title: 'Sovereign Kapitix: An ',
  titleMark: 'Honest Look',
  lead: 'Thinking about joining? This page answers what most Australians ask before they sign up: what the platform is, how it works, what it costs and how to check it is safe. It covers the downsides too, because trading always carries risk.',
  glance: [
    { k: 'Platform Type', v: 'Browser Based AI Trading Platform' },
    { k: 'Available In', v: 'Australia' },
    { k: 'Minimum Deposit', v: MIN_DEPOSIT },
    { k: 'Registration Fee', v: 'Free' },
    { k: 'Markets', v: 'Crypto, Equities, Forex and Commodities' },
    { k: 'Trading Modes', v: 'Automated and Manual' },
    { k: 'App Needed', v: 'No, It Runs in Any Web Browser' },
    { k: 'Support', v: 'Real People, 24/7' },
  ],
  whatIs: {
    eyebrow: 'The Basics',
    title: 'What Is ',
    titleMark: 'Sovereign Kapitix?',
  },
  features: {
    eyebrow: 'What You Get',
    title: 'Key Features at a ',
    titleMark: 'Glance',
    cards: [
      { icon: 'bot', title: 'Round the Clock Market Scanning', text: 'The engine keeps watching markets while you work or sleep, so you get signals on moves you might otherwise miss.' },
      { icon: 'user', title: 'Two Ways to Trade', text: 'Automated mode suits busy people. Manual mode suits anyone who wants to approve every trade before it opens.' },
      { icon: 'gauge', title: 'One Dashboard', text: 'Trades, signals, performance and your balance sit on a single screen, so you always know where you stand.' },
      { icon: 'lock', title: 'No App to Download', text: 'The platform runs in your browser on desktop, tablet and phone. Nothing to install and nothing to keep updated.' },
      { icon: 'headset', title: 'Real Human Support', text: 'A real support team is available around the clock to help with your account and funding questions.' },
      { icon: 'shield', title: 'Layered Security', text: 'Every session is protected by 256 bit encryption, with two factor authentication on logins and withdrawals.' },
    ],
  },
  prosCons: {
    eyebrow: 'Weighing It Up',
    title: 'The Honest Pros ',
    titleMark: 'and Cons',
    lead: 'No platform is right for everyone. Here is the fair summary, in both directions.',
    pros: [
      'Registration is free',
      `Low ${MIN_DEPOSIT} starting deposit`,
      'Automated and manual trading in one account',
      'A dashboard built for beginners',
      'Support from real people, around the clock',
    ],
    cons: [
      'Trading can lose money, even with AI involved',
      'Accounts are limited to Australian residents',
      'No native mobile app, it runs in your browser',
      'AI signals are not guaranteed to be right',
      'Costs apply to every position you open',
    ],
  },
  costs: {
    eyebrow: 'The Numbers',
    title: 'Fees and ',
    titleMark: 'Minimum Deposit',
    rows: [
      { k: 'Registration', v: 'Free' },
      { k: 'Minimum Deposit', v: MIN_DEPOSIT },
      { k: 'Subscription Fees', v: 'None' },
      { k: 'Hidden Charges', v: 'None' },
      { k: 'Withdrawal Requests', v: 'Most Processed Within 24 Hours' },
    ],
    note: 'Trading carries risk, and costs apply to the positions you open. Read our',
    noteLink: { text: 'Risk Disclosure', href: '/disclosure' },
    noteEnd: 'before you deposit.',
  },
  legit: {
    eyebrow: 'Safety Check',
    title: 'Is Sovereign Kapitix ',
    titleMark: 'a Scam?',
    lead: 'Plenty of people search that exact question before signing up, and it is a sensible thing to ask. Online trading attracts fake platforms, so checking before you deposit is smart. Rather than asking you to simply trust us, here is what you can check yourself.',
    items: [
      'Read our Terms of Use and Risk Disclosure. Both are published in full on this site, so you can judge the platform on the facts rather than on ratings.',
      'No one can guarantee profits. Any platform promising fixed or guaranteed returns is a red flag. We do not, and no legitimate platform can.',
      `Start small. You can begin with the ${MIN_DEPOSIT} minimum and test a withdrawal before adding more.`,
      'Your data is encrypted. Every session is protected with 256 bit SSL encryption, and two factor authentication guards your logins.',
      'We will never ask for your password, your bank PIN, or remote access to your computer. If anyone claiming to be us does, hang up and contact us.',
    ],
  },
  fakes: {
    eyebrow: 'Stay Safe',
    title: 'Warning Signs: ',
    titleMark: 'Fake Sites',
    lead: 'Popular brand names get copied. Scammers build clone websites, run fake ads and call people while pretending to be from Sovereign Kapitix. Watch for these red flags.',
    signs: [
      'A website address that is not sovereign-kapitix.net',
      'Anyone promising guaranteed or fixed daily profits',
      'Pressure to deposit more money quickly, or to act before an offer ends',
      'Requests for remote access to your computer',
      'Payment requests in gift cards or crypto to a personal wallet',
      'A Sovereign Kapitix app on the App Store or Google Play. We do not have one',
    ],
  },
  report: {
    title: 'What to Do If You Spot a Fake Site',
    items: [
      'Stop all contact and do not send any money.',
      'Contact your bank straight away if you have already paid.',
      'Report it to Scamwatch at scamwatch.gov.au and ReportCyber at cyber.gov.au.',
      'Let us know at support@sovereign-kapitix.net so we can warn other users.',
    ],
  },
  who: {
    eyebrow: 'Who It Suits',
    title: 'Is Sovereign Kapitix ',
    titleMark: 'Right for You?',
    suitedTitle: 'It may suit you if you:',
    suited: [
      'Are new to trading and want clear, guided signals',
      'Are busy and cannot watch the markets all day',
      `Want to start small with ${MIN_DEPOSIT}`,
    ],
    notSuitedTitle: 'It may not suit you if you:',
    notSuited: [
      'Cannot afford to lose the money you deposit',
      'Want guaranteed or fixed returns',
      'Live outside Australia',
    ],
  },
  verdict: {
    eyebrow: 'Final Verdict',
    title: 'Our ',
    titleMark: 'Conclusion',
    body: 'Sovereign Kapitix gives Australians a straightforward way to try AI assisted trading. The starting deposit is low, the platform runs in your browser, and you choose between automated and manual trading. The main thing to remember is that no AI removes risk. Start small, set your limits, and only ever trade money you can afford to lose.',
  },
  faqMini: {
    eyebrow: 'Common Questions',
    title: 'Before You ',
    titleMark: 'Decide',
    items: [
      {
        q: 'Is Sovereign Kapitix a Scam?',
        a: 'Sovereign Kapitix is an automated trading platform, not an investment scheme. We publish our Terms of Use, our Risk Disclosure and an explanation of how the platform works, so you can judge it on the facts rather than on ratings. Always check any platform independently before you deposit money.',
      },
      {
        q: 'How Much Do I Need to Start?',
        a: `A minimum deposit of ${MIN_DEPOSIT} activates your trading account. There are no subscription fees, hidden charges or registration costs.`,
      },
      {
        q: 'Can I Withdraw My Money?',
        a: 'Yes. Withdrawals follow the same channels as your deposit, including major credit cards, bank transfers and PayPal. Most requests are processed within 24 hours.',
      },
      {
        q: 'Does Sovereign Kapitix Guarantee Profits?',
        a: 'No, and no legitimate platform can. Trading carries risk, and you may lose some or all of the money you deposit.',
      },
      {
        q: 'Is It Available Outside Australia?',
        a: 'No. Accounts are limited to verified residents of Australia.',
      },
    ],
    moreText: 'Read the full FAQ',
    moreHref: '/faq',
  },
}

export const registerPage = {
  eyebrow: 'Get Started',
  title: 'Open Your Account in ',
  titleMark: 'About Two Minutes',
  lead: 'Registration is free. Fill in your details and our team will get in touch to get you started.',
  // Sits above the form on purpose: a reader should meet the downside before
  // being asked for a phone number, not after.
  risk: {
    title: 'Trading Carries Risk',
    text: 'The value of your investments can go down as well as up, and you may lose some or all of the money you deposit. Never trade money you cannot afford to lose.',
    link: { text: 'Read the full Risk Disclosure', href: '/disclosure' },
  },
  next: {
    eyebrow: 'What Happens Next',
    title: 'Three Steps from Here to ',
    titleMark: 'Your First Trade',
    steps: [
      {
        no: '01',
        icon: 'headset',
        title: 'We Call You Back',
        text: 'A member of our team gets in touch to explain the platform, answer your questions and help you complete verification.',
      },
      {
        no: '02',
        icon: 'shield',
        title: 'You Verify Your Identity',
        text: 'Every account goes through KYC and AML checks. It keeps the platform safe for everyone using it, and it only takes a few minutes.',
      },
      {
        no: '03',
        icon: 'wallet',
        title: 'You Fund and Start',
        text: `Deposit a minimum of ${MIN_DEPOSIT} and your account is ready. Choose automated or manual trading, and set the limits you are comfortable with.`,
      },
    ],
  },
}

export const footer = {
  blurb: 'Sovereign Kapitix is an AI-driven automated trading platform for users in Australia - automated strategies, live market insights, and dependable security in one place.',
  company: [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About Us', href: '/about' },
    { label: 'Reviews', href: '/sovereign-kapitix-review' },
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
