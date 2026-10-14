// =========================================================
// Homepage copy, shared constants, navigation and footer
// =========================================================
// Sub-page copy lives in pages.js - /fees, /faq, /how-it-works, /register and
// /sovereign-kapitix-review each have their own brief.
//
// Rewritten 13 October 2026 from the operator's homepage brief. What changed
// and why:
//
//   - The numeric claims are gone. The brief's launch checklist names them
//     directly: "Remove 85% accuracy, 4.7/5 rating, 98% cold storage and
//     sample portfolio balances unless provable." They are not provable, so
//     SIGNAL_ACCURACY, COLD_STORAGE and the metrics strip are all removed
//     rather than hidden.
//   - Support hours are 24/5, not 24/7. The brief is explicit: "support hours
//     are 24/5. Do not use 24/7 anywhere else on the site."
//   - 300+ markets IS operator-supplied, so MARKETS is a real claim now and is
//     used as written.
//   - No broker is named and no AFSL number appears. Trades are described as
//     running through "partnered, regulated brokers", with the reader told to
//     ask their account manager which one.
//   - Funding is card payment, bank transfer or e-wallet.
// =========================================================

export const MIN_DEPOSIT = 'AU$250'
export const MARKETS = '300+'
export const SUPPORT_HOURS = '24/5'

// Register is not a nav entry: it is the header's Sign Up button.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Fees', href: '/fees' },
  { label: 'About Us', href: '/about' },
  { label: 'Reviews', href: '/sovereign-kapitix-review' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  eyebrow: 'AI-assisted trading for Australian residents',
  title: 'Sovereign Kapitix ',
  titleMark: 'AI Trading Platform for Australia',
  lead: `Sovereign Kapitix brings AI-generated market signals and optional automated trading for crypto, forex, shares and commodities into one browser-based account. Start from ${MIN_DEPOSIT}, keep full control of your settings, and withdraw when you choose.`,
  checks: [
    `AI signals across ${MARKETS} markets, monitored around the clock`,
    'Trade manually, semi-automated or fully automated',
    'KYC-verified accounts and two-factor authentication on every login',
  ],
  ctaPrimary: 'Create my free account',
  ctaSecondary: 'See how it works',
}

// The assurance bar under the hero. Every line restates a fact already on the
// page, so nothing new is claimed here.
//
// Layout follows the trust bar on the operator's sibling site: four equal
// columns, each an icon beside its line, on a full-width banded row.
export const trustBadges = [
  { icon: 'shield', text: 'Trades executed via regulated broker partners · No platform commission' },
  { icon: 'lock', text: 'KYC-verified accounts · 2FA on every login · SSL encryption' },
  { icon: 'headset', text: `Free demo account · ${SUPPORT_HOURS} live support` },
  { icon: 'wallet', text: 'Card payment · Bank transfer · E-wallet · Withdrawals typically within 1 business day' },
]

// The four figures the operator supplied, given their own strip directly under
// the hero. The previous build had a metrics strip here too - it carried an 85%
// accuracy claim, a 4.7/5 rating and a 98% cold-storage figure, all of which the
// brief's launch checklist names as removal targets. These four are the
// replacement: every one of them is a figure from the briefs, and three are
// process statements rather than performance claims.
export const stats = [
  { value: MIN_DEPOSIT, label: 'Minimum deposit' },
  { value: MARKETS, label: 'Markets covered' },
  { value: SUPPORT_HOURS, label: 'Live support' },
  { value: '1 business day', label: 'Typical withdrawal time' },
]

// Rewritten after the equivalent block on the operator's sibling site
// (haveningry.com, "What is Haveningry?"), which the operator asked to follow.
// Its shape: a one-line answer under the heading, four short capability points
// beside a visual, a three-step flow, and a closing strip.
//
// The two long paragraphs that used to sit here are gone - the operator said
// the existing copy could be cut. The substance they carried is not lost: the
// broker-execution sentence is in the lead and again in the Legit section, and
// "general information only, not personal advice" is in the footer, the risk
// disclosure and the FAQ.
export const whatis = {
  title: 'What Is ',
  titleMark: 'Sovereign Kapitix?',
  lead: 'An AI-assisted trading platform for verified Australian residents, built to make following the markets as straightforward as online banking. It suits a new trader and an experienced one alike.',
  // One short clause each, matching the brevity of the reference block rather
  // than the full sentences the first pass used.
  items: [
    { icon: 'bot', title: 'AI-Powered Analysis', text: 'Scans price, volume and momentum, so you do not watch charts all day.' },
    { icon: 'user', title: 'Manual or Automated', text: 'Trade each signal yourself, or let automation run inside your limits.' },
    { icon: 'gauge', title: 'One Clear Dashboard', text: 'Positions, closed trades and your balance at a glance.' },
    { icon: 'wallet', title: 'Low Barrier to Entry', text: `Start from ${MIN_DEPOSIT}. No registration fee and no platform commission.` },
  ],
  // Three plain phrases, as on the reference block, with no heading and no
  // numbering above them. Each carries its own icon.
  flow: [
    { icon: 'bot', text: 'AI analyzes markets' },
    { icon: 'zap', text: 'Finds signals' },
    { icon: 'gauge', text: 'Executes trades' },
  ],
  cta: { text: 'Want the whole process before you register?', button: 'See how it works', href: '/how-it-works' },
  forTitle: 'Who Sovereign Kapitix Is For',
  for: [
    `Beginners who want guided onboarding, plain-English signals and a low ${MIN_DEPOSIT} starting balance.`,
    'Busy professionals who cannot watch charts all day and prefer rules-based automation.',
    'Experienced traders who want AI signals as a second opinion alongside their own analysis.',
  ],
  notForTitle: 'Who It Is Not For',
  // The brief supplies this as one sentence. Split into the three conditions it
  // actually enumerates so the card balances the one beside it - as a single
  // paragraph it left two thirds of the card empty next to a full list.
  notFor: [
    'You need guaranteed returns, or you want a platform that promises them.',
    'You cannot afford to lose the money you deposit.',
    'You need personal financial advice. Speak to a licensed financial adviser first.',
  ],
}

export const stepsHead = {
  eyebrow: 'How It Works',
  title: 'How Sovereign Kapitix Works ',
  titleMark: 'in 3 Steps',
  lead: 'Most Australians go from registration to their first trade in under a day.',
}

export const steps = [
  {
    no: 'STEP 1',
    icon: 'user',
    title: 'Register and Verify Your Identity',
    text: 'Fill in the short form with your name, email and Australian mobile number. You will then complete a standard KYC check with your driver licence or passport. This is a legal requirement under Australia AML/CTF rules and protects your account.',
    cta: 'Start now',
  },
  {
    no: 'STEP 2',
    icon: 'wallet',
    title: `Fund Your Account from ${MIN_DEPOSIT}`,
    text: 'Deposit by card payment, bank transfer or e-wallet. Your account manager will explain fees, risk settings and how withdrawals work before you place any trade.',
    cta: 'Deposit now',
    green: true,
  },
  {
    no: 'STEP 3',
    icon: 'chart',
    title: 'Choose How You Trade',
    text: 'Follow AI signals manually, approve each suggested trade, or turn on full automation with your own stop-loss and position-size limits. You can pause automation or withdraw your available balance at any time.',
    cta: 'Get started',
  },
]

export const featuresHead = {
  eyebrow: 'Features',
  title: 'Features of the Sovereign Kapitix ',
  titleMark: 'AI Trading Platform',
  lead: 'Every feature is built around one goal: helping you make clearer trading decisions with less screen time.',
}

export const features = [
  {
    icon: 'zap',
    title: 'AI Market Signals',
    text: `The signal engine scans price action, volume and volatility across ${MARKETS} markets around the clock. Each signal shows the asset, direction, suggested entry, stop-loss and take-profit, so you can see the reasoning before you act.`,
  },
  {
    icon: 'bot',
    title: 'Optional Automated Trading',
    green: true,
    text: 'Set your maximum trade size, daily loss limit and the markets you want covered. Automation only trades inside those rules, and you can switch it off with one click.',
  },
  {
    icon: 'layers',
    title: 'One Account, Multiple Markets',
    text: 'Trade crypto (Bitcoin, Ethereum and more), major forex pairs, global shares, gold and other commodities from a single dashboard. No juggling separate apps or logins.',
  },
  {
    icon: 'gauge',
    title: 'Clear Portfolio Dashboard',
    green: true,
    text: 'See open positions, closed trades, fees paid and your profit or loss in one place. Download your full trade history at any time for record keeping and tax time.',
  },
  {
    icon: 'chart',
    title: 'Works on Any Device',
    text: 'Sovereign Kapitix runs in your browser on desktop, tablet and mobile. Nothing to install, and your settings sync across devices.',
  },
  {
    icon: 'book',
    title: 'Learning Centre',
    green: true,
    text: 'Short guides cover trading basics, risk management, and how to read and test AI signals. A free demo account lets you test signals on live data before you fund your account.',
  },
  {
    icon: 'headset',
    title: 'Australian-Based Support',
    text: `Reach the support team by phone, email or live chat, ${SUPPORT_HOURS}. A dedicated account manager is assigned to every new account.`,
  },
]

// The trust section. The brief calls this "the biggest conversion lever on the
// page" and asks for checkable facts only - so it describes how the platform is
// set up, not what it promises.
export const legit = {
  eyebrow: 'Is Sovereign Kapitix legit?',
  title: 'Security, Regulation ',
  titleMark: 'and How It Works',
  lead: 'This section answers the question Australians search before they register. Every point below is something you can check yourself.',
  setupTitle: 'How Sovereign Kapitix Is Set Up',
  setup: [
    { k: 'Technology Provider', v: 'Sovereign Kapitix builds and runs the AI signal engine, dashboard and automation tools' },
    { k: 'Trade Execution', v: 'Every trade is placed through partnered, regulated brokers, not an in-house trading desk' },
    { k: 'Onboarding', v: 'Your account manager explains which broker handles your account, the fees and how withdrawals work before you deposit' },
    { k: 'Contact', v: `Reach the team by phone, email or live chat, ${SUPPORT_HOURS}` },
  ],
  protectTitle: 'How Your Account Is Protected',
  protect: [
    { k: 'Identity Checks', v: 'Every account passes KYC and AML/CTF verification before trading' },
    { k: 'Two-Factor Authentication', v: 'On logins and withdrawals' },
    { k: 'Encryption', v: 'All data moves over SSL/TLS (HTTPS)' },
    { k: 'Regulated Execution', v: 'Trades run through regulated broker partners, which apply their own risk controls' },
    { k: 'Fast, Checked Withdrawals', v: 'Requests are typically processed within 1 business day after a standard security check' },
  ],
  note: 'Company registration details are withheld for data security. The fee table and the risk section below carry the trust load instead, so both are worth reading before you deposit.',
  cta: 'Open your verified account',
}

// The fees table. Every figure here either comes from the brief or is a process
// statement ("confirmed by your account manager"), never an invented number.
export const feesTable = {
  eyebrow: 'Fees',
  title: 'Sovereign Kapitix Fees ',
  titleMark: 'and Platform at a Glance',
  lead: `Registration is free, the minimum deposit is ${MIN_DEPOSIT}, and every fee is listed below before you trade.`,
  rows: [
    { k: 'Minimum Deposit', v: MIN_DEPOSIT },
    { k: 'Registration Fee', v: 'Free' },
    { k: 'Monthly Subscription', v: 'None' },
    { k: 'Trading Fees / Spreads', v: 'No platform commission; broker spreads apply per trade' },
    { k: 'Deposit Fees', v: 'Confirmed by your account manager before you deposit' },
    { k: 'Withdrawal Fees', v: 'Confirmed by your account manager before you deposit' },
    { k: 'Withdrawal Time', v: 'Typically within 1 business day' },
    { k: 'Inactivity Fee', v: 'Listed in your account terms' },
    { k: 'Markets', v: `${MARKETS} markets: crypto, forex, shares, commodities` },
    { k: 'Trading Modes', v: 'Manual, signal-assisted, automated' },
    { k: 'Funding Methods', v: 'Card payment, bank transfer, e-wallet' },
    { k: 'Devices', v: 'Browser on desktop, tablet, mobile' },
    { k: 'Verification', v: 'KYC and AML/CTF checks' },
    { k: 'Available To', v: 'Verified Australian residents, 18+' },
  ],
  link: { text: 'See the full fee breakdown.', href: '/fees' },
  cta: `Start from ${MIN_DEPOSIT}, no platform commission`,
}

// The mid-page risk section. The brief asks for it here rather than only in the
// footer: "a plain-English risk section mid-page (not only in the footer) reads
// as honest, lifts trust and matches ASIC expectations."
export const risks = {
  eyebrow: 'The honest risks',
  title: 'What to Expect from ',
  titleMark: 'AI Trading',
  lead: 'AI signals can help you act faster and more consistently, but they cannot predict markets and they do not remove risk.',
  items: [
    { k: 'You Can Lose Money', v: 'Crypto, forex and CFDs are volatile and leveraged products can magnify losses. Only trade money you can afford to lose.' },
    { k: 'Past Performance Is Not a Guide', v: 'Any results shown on this site are examples, not a promise of future returns.' },
    { k: 'Automation Follows Rules, Not Judgement', v: 'Sudden news, low liquidity or price gaps can move markets past your stop-loss.' },
    { k: 'Start Small', v: 'Begin with the minimum deposit and test signals before increasing your trade size.' },
  ],
  link: { text: 'Read the full Risk Disclosure', href: '/disclosure' },
  linkEnd: 'before you deposit.',
}

// Homepage FAQ. The brief sizes each answer at 40 to 60 words so it can win a
// featured snippet, and asks for FAQPage schema on this section.
export const faq = [
  {
    q: 'Is Sovereign Kapitix Legit?',
    a: 'Sovereign Kapitix is a working, browser-based AI trading platform, with trades executed through partnered, regulated brokers. Every account passes KYC checks before trading. Try the free demo account and make a small test withdrawal before adding more funds.',
    link: { text: 'Read our full review.', href: '/sovereign-kapitix-review' },
  },
  {
    q: 'How Much Do I Need to Start?',
    a: `The minimum deposit is ${MIN_DEPOSIT}. Registration is free and there is no monthly subscription. We recommend starting with the minimum, testing the AI signals for a few weeks, and only increasing your balance once you understand how the platform and the markets behave.`,
  },
  {
    q: 'Can Sovereign Kapitix Guarantee Profits?',
    a: 'No. No trading platform can guarantee profits, and any that does should be avoided. AI signals help you analyse markets faster, but prices can move against any position. You could lose some or all of your deposit, so only trade money you can afford to lose.',
  },
  {
    q: 'Do I Need Trading Experience?',
    a: 'No. Beginners get guided onboarding, a dedicated account manager and a learning centre covering the basics. You can start by following signals manually and switch on automation later, once you understand how stop-losses, position sizes and daily limits work.',
  },
  {
    q: 'How Do Withdrawals Work?',
    a: 'Request a withdrawal from your dashboard at any time. Funds return to your original payment method, usually within 1 business day after a security check. Withdrawal fees, if any, are listed in the fee table above. Two-factor authentication is required for every withdrawal request.',
  },
  {
    q: 'Is Sovereign Kapitix Available Outside Australia?',
    a: 'Not at the moment. The platform is available only to verified Australian residents aged 18 and over. You will need an Australian mobile number and a valid Australian driver licence or passport to complete identity verification.',
  },
  {
    q: 'Do I Pay Tax on Trading Profits in Australia?',
    a: 'Generally yes. Profits from crypto and other trading may be subject to capital gains tax or income tax, depending on your situation. Download your trade history from the dashboard and speak with a registered tax agent.',
  },
]

export const finalCta = {
  eyebrow: 'Get started',
  title: 'Ready to Try ',
  titleMark: 'AI-Assisted Trading?',
  body: 'Open a free Sovereign Kapitix account in about two minutes. Your account manager will walk you through fees, risk settings and your first signal before you deposit a cent.',
  cta: 'Create my free account',
  smallPrint: 'Available to verified Australian residents aged 18+. Trading involves risk of loss.',
}

export const footer = {
  blurb: 'Sovereign Kapitix is an AI-assisted trading platform for Australian residents. Trades are executed through partnered, regulated brokers.',
  // The link list is split across two columns rather than one tall stack, so
  // the footer reads as four even columns instead of a dense list with two
  // sparse ones beside it.
  email: 'support@sovereign-kapitix.net',
  company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Reviews', href: '/sovereign-kapitix-review' },
  ],
  platform: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Fees', href: '/fees' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Term Of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Risk Disclosure', href: '/disclosure' },
    { label: 'Sign Up', href: '/register' },
  ],
  disclaimer:
    'HIGH RISK WARNING: Dealing or trading FX, CFDs, cryptocurrencies and other financial instruments is highly speculative, carries a non-negligible level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. All profit examples shown on this website are illustrative and do not guarantee similar results. Sovereign Kapitix operates as a technology services company, does not provide financial, investment or legal advice, and does not accept any liability for loss or damage as a result of reliance on the information contained within this website. Laws regarding financial activities vary throughout the world, and it is your sole responsibility to ensure that your use of this website complies with applicable laws and regulations in your jurisdiction of residence.',
  generalAdvice:
    'General advice warning: information on this website is general in nature and does not take into account your objectives, financial situation or needs.',
}
