// =========================================================
// Homepage copy
// =========================================================
// Transcribed from the operator's document (Google Docs, "homepage copy"),
// section for section and in its order. Nothing is added and nothing is left
// out, with three exceptions the operator agreed to:
//
//   1. [Brand] is "Sovereign Kapitix" throughout.
//   2. [Amount] in the minimum-deposit FAQ is AU$250, the figure already used
//      sitewide.
//   3. The withdrawal-time FAQ is dropped. The document left it as
//      "[Add your withdrawal time here.]" and no figure has ever been supplied,
//      so there is nothing honest to put there.
//
// The Testimonials section is not here either: the document says to keep it
// hidden until real reviews exist, which matches the site's existing rule.
//
// Copy housekeeping: the document writes "stop-loss", "take-profit",
// "AI-assisted", "2-minute", "first-time", "ready-made" and "two-factor" with
// hyphens. The site's standing copy rule is no hyphens anywhere, so those are
// written as two words. Not a word of meaning changes.
// =========================================================
import { MIN_DEPOSIT } from './content.js'

export const hero = {
  title: 'Trade With Clarity Using ',
  titleMark: 'Sovereign Kapitix',
  sub: 'Sovereign Kapitix scans the markets for you and delivers trade ideas with a set entry, a planned exit and a clear reason, so every move you make starts with a plan.',
  cta: 'Get Your Free Account',
  micro: 'Join in under 2 minutes · All fees shown upfront · Your data is protected',
}

export const whatIs = {
  title: 'What Is ',
  titleMark: 'Sovereign Kapitix?',
  body: [
    'Sovereign Kapitix is an AI assisted trading signals platform that studies the crypto, forex, stock and commodity markets and sends you specific buy or sell alerts, each with an entry price, a stop loss, a take profit target and a short explanation, while you decide whether to place the trade.',
    'Markets move fast, and reading them takes time most people don’t have. Sovereign Kapitix does the heavy research in the background and hands you the result as one simple alert. You get the speed of smart technology with explanations a beginner can follow.',
  ],
}

export const signals = {
  eyebrow: 'The Process',
  title: 'How Sovereign Kapitix ',
  titleMark: 'Signals Work',
  steps: [
    { title: 'Data Review', text: 'The platform tracks price movements, trend shifts and major economic news across each market it covers.' },
    { title: 'Setup Check', text: 'A trade idea moves forward only when it has a clear direction and a controlled level of risk.' },
    { title: 'Alert Sent', text: 'You receive the asset, buy or sell direction, entry, stop loss, take profit and the reason in one message.' },
    { title: 'You Choose', text: 'Act on the alert, adjust it to fit your strategy or pass on it entirely.' },
  ],
}

export const comparison = {
  title: 'Trading With vs Without ',
  titleMark: 'Sovereign Kapitix',
  leftTitle: 'Trading Alone',
  rightTitle: 'Trading With Sovereign Kapitix',
  rows: [
    ['Hours spent studying charts', 'Research summed up in one alert'],
    ['Guessing when to get in and out', 'Entry, stop loss and take profit set for you'],
    ['Acting on hunches', 'A written reason behind every idea'],
    ['Missing moves while busy', 'Alerts sent as setups appear'],
  ],
}

export const highlights = {
  title: 'Quick ',
  titleMark: 'Highlights',
  items: [
    'Crypto, forex, stocks and commodities under one login',
    'A simple explanation with every trade alert',
    'Smooth access on mobile, tablet and desktop',
    'Risk limits you set for yourself',
  ],
}

export const whyUs = {
  eyebrow: '',
  title: 'Why ',
  titleMark: 'Choose Us',
  items: [
    { title: 'Simple From Day One', text: 'Every alert is written in clear, everyday English.' },
    { title: 'Time Saved', text: 'No more long hours in front of charts. The analysis is already done.' },
    { title: 'Fast Delivery', text: 'Alerts reach you while the opportunity is still fresh.' },
    { title: 'Friendly Support', text: 'Real people are ready to help by live chat or email.' },
  ],
  cta: 'Try Sovereign Kapitix Today',
}

export const getStarted = {
  eyebrow: 'How To Get Started',
  title: 'Your First Signal In ',
  titleMark: '4 Simple Steps',
  steps: [
    { title: 'Register', text: 'Add your name, email and phone number.' },
    { title: 'Verify Your Identity', text: 'Upload a valid ID to secure your account.' },
    { title: 'Fund Your Account', text: 'Make a deposit using a payment option you trust.' },
    { title: 'Start With A Plan', text: 'Choose your markets, set your limits and open your first alert.' },
  ],
  cta: 'Create My Free Account',
}

export const markets = {
  eyebrow: '',
  title: 'Markets',
  titleMark: '',
  items: [
    { title: 'Crypto', text: 'Alerts on well known coins including Bitcoin and Ethereum.' },
    { title: 'Forex', text: 'Signals on the world’s most popular currency pairs, such as EUR/USD and GBP/USD.' },
    { title: 'Stocks', text: 'Trade ideas on shares of leading global companies.' },
    { title: 'Commodities', text: 'Opportunities in gold, silver and oil.' },
  ],
}

export const features = {
  eyebrow: '',
  title: 'Features',
  titleMark: '',
  items: [
    { title: 'Explained Signals', text: 'See what to trade and exactly why.' },
    { title: 'Ready Made Exit Points', text: 'Stop loss and take profit levels arrive with every alert.' },
    { title: 'Custom Price Alerts', text: 'Choose your price and get notified when the market gets there.' },
    { title: 'Simple Dashboard', text: 'View your balance, open trades and history on one screen.' },
    { title: 'Browser Access', text: 'Nothing to download. Log in on any device and get started.' },
  ],
}

export const whoItsFor = {
  title: 'Who It’s ',
  titleMark: 'For',
  items: [
    { title: 'First Time Traders', text: 'Learn the basics through alerts that explain every step.' },
    { title: 'Working Professionals', text: 'Stay on top of the markets in a few minutes a day.' },
    { title: 'Experienced Traders', text: 'Double check your own setups and find ideas in new markets.' },
  ],
}

export const security = {
  eyebrow: '',
  title: 'Security & ',
  titleMark: 'Transparency',
  items: [
    { title: 'Encryption', text: 'Your personal and payment details stay private and protected.' },
    { title: 'Two Factor Sign In', text: 'An extra verification step keeps your account secure.' },
    { title: 'Upfront Fees', text: 'Every cost is clear before you commit.' },
    { title: 'Your Decision, Every Time', text: 'No trade is placed without your approval.' },
  ],
  riskNotice:
    'Trading carries a high level of risk, and you may lose some or all of your money. Signals from Sovereign Kapitix are for guidance only and do not guarantee profits. Past results do not promise future returns.',
  cta: 'Open A Secure Account',
}

export const faq = [
  {
    q: 'What Is Sovereign Kapitix?',
    a: 'It is a trading signals platform that analyzes the markets and sends you clear alerts with entry, stop loss and take profit levels, plus the reason behind each one.',
  },
  {
    q: 'How Does Sovereign Kapitix Create Its Signals?',
    a: 'It reviews price data, trends and market news, and sends an alert only when a setup meets its entry and risk rules.',
  },
  {
    q: 'Can I Use It With No Trading Experience?',
    a: 'Yes. The alerts are written in plain language, so beginners can understand and learn from each one.',
  },
  {
    q: 'Will The Platform Trade For Me?',
    a: 'No. You review every alert and make the final call yourself.',
  },
  {
    q: 'Which Markets Can I Access?',
    a: 'Crypto, forex, stocks and commodities, all from a single account.',
  },
  {
    q: 'Is There An App To Install?',
    a: 'No. It works directly in your web browser on any device.',
  },
  {
    q: 'What Is The Minimum Deposit?',
    a: `You can start with ${MIN_DEPOSIT}.`,
  },
  {
    q: 'Is There A Risk Of Losing Money?',
    a: 'Yes. Every trade carries risk, so only invest what you can afford to lose.',
  },
]

export const finalCta = {
  title: 'Make Your Next Trade a ',
  titleMark: 'Smarter One',
  body: 'Join Sovereign Kapitix and start receiving clear, explained trade ideas, with full control over every decision you make.',
  cta: 'Start Free Now',
  micro: 'Quick 2 minute sign up · Free to join',
}
