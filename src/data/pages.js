// =========================================================
// Sub-page copy - /fees, /faq, /how-it-works, /register, /sovereign-kapitix-review
// =========================================================
// Supplied by the operator as six .docx briefs dated 13 October 2026, and
// transcribed here. The homepage lives in content.js; shared constants
// (MIN_DEPOSIT and friends) are imported from there so a figure can only be
// defined once.
//
// The briefs carry editor notes that constrain this copy. The ones that apply
// across every page:
//
//   - Support hours are 24/5, not 24/7. The homepage note says so outright:
//     "support hours are 24/5. Do not use 24/7 anywhere else on the site."
//   - No profit figures, win rates, accuracy percentages, ratings, star scores
//     or testimonials. The homepage checklist names 85% accuracy, the 4.7/5
//     rating and 98% cold storage as removal targets.
//   - No "bank-grade", no "funds fully protected", no named broker or AFSL.
//     Trades are described as running through "partnered, regulated brokers"
//     and the reader is told to ask their account manager which one.
//   - Deposits and withdrawals are card payment, bank transfer or e-wallet.
//   - Available to verified Australian residents aged 18+.
//
// The briefs also specify a blue palette (#1D4ED8) and call it "the same
// palette as homepage". The homepage is emerald teal (#0F766E), so the two
// cannot both be right. The site's existing palette wins: recolouring every
// page blue is a redesign, not a copy change, and the note's own stated intent
// ("same palette as homepage") is satisfied by leaving it alone.
// =========================================================
import { MIN_DEPOSIT, MARKETS, SUPPORT_HOURS } from './content.js'

const CONTACT_CTA = 'Create my free account'

// ---------------------------------------------------------
// FEES - /fees
// ---------------------------------------------------------
export const feesPage = {
  eyebrow: 'Fees',
  title: 'Sovereign Kapitix Fees and ',
  titleMark: 'Minimum Deposit Explained',
  intro:
    'Hidden fees are the top reason traders lose trust in a platform. This page lists every cost of using Sovereign Kapitix in plain English: what you pay, what you do not pay, and the costs that depend on how you trade. Read it before you deposit so there are no surprises later.',
  shortAnswer:
    `Sovereign Kapitix has a ${MIN_DEPOSIT} minimum deposit, free registration, no monthly subscription and no platform commission. The main ongoing cost is the broker spread on each trade. Deposit and withdrawal fees, if any, are confirmed by your account manager before you deposit.`,

  glance: {
    title: 'Sovereign Kapitix Fees at a Glance',
    rows: [
      { k: 'Registration', v: 'Free' },
      { k: 'Monthly Subscription', v: 'None' },
      { k: 'Software or Licence Fee', v: 'None' },
      { k: 'Platform Commission per Trade', v: 'None' },
      { k: 'Demo Account', v: 'Free' },
      { k: 'Minimum Deposit', v: `${MIN_DEPOSIT} (stays in your account as trading capital)` },
      { k: 'Broker Spread', v: 'Applies on every trade' },
      { k: 'Overnight / Holding Costs', v: 'May apply on some leveraged positions held overnight; confirmed by your account manager' },
      { k: 'Deposit Fees', v: 'Confirmed by your account manager before you deposit' },
      { k: 'Withdrawal Fees', v: 'Confirmed by your account manager before you deposit' },
      { k: 'Inactivity Fee', v: 'Listed in your account terms' },
      { k: 'Withdrawal Time', v: 'Typically within 1 business day' },
    ],
  },

  notPay: {
    title: 'What You Do Not Pay',
    lead: 'Many AI trading tools charge a monthly subscription or a licence fee just to access their software. Sovereign Kapitix does not.',
    items: [
      'No registration fee: creating an account is free.',
      'No subscription: there is no monthly or annual charge for the AI signals or dashboard.',
      'No platform commission: Sovereign Kapitix does not take a cut of each trade.',
      'No charge for the demo account: practise on live data for as long as you like.',
      `No charge for support: your account manager and the ${SUPPORT_HOURS} support team are included.`,
    ],
  },

  deposit: {
    title: `The Sovereign Kapitix Minimum Deposit: ${MIN_DEPOSIT}`,
    body: [
      `To trade with real money, you need a minimum deposit of ${MIN_DEPOSIT}. This is not a fee. It is trading capital that stays in your account, and you can withdraw your available balance at any time, subject to standard security checks.`,
      'Because it is trading capital, it is exposed to market risk once you start trading. Starting with the minimum lets you test the platform with a limited amount before deciding whether to add more.',
    ],
    whyTitle: 'Why Start with the Minimum?',
    why: [
      'You learn how signals, spreads and your risk settings behave with real money.',
      'You can make a small test withdrawal before committing more.',
      'Any early losses stay limited while you learn.',
    ],
  },

  spread: {
    title: 'Broker Spreads: The Main Ongoing Cost',
    body: [
      'Trades on Sovereign Kapitix are executed through partnered, regulated brokers. Brokers earn from the spread: the small difference between the buy (ask) price and the sell (bid) price of a market.',
    ],
    // Labelled as an illustration, per the brief: "The spread example on this
    // page is a labelled illustration, not a real quote."
    exampleLabel: 'Illustration only',
    example:
      'If a currency pair is quoted at 0.6632 to buy and 0.6630 to sell, the spread is 0.0002. You open the trade slightly below break-even, and the price needs to move by at least the spread before the trade is in profit.',
    points: [
      'They apply to every trade, manual or automated.',
      'They vary by market and can widen when markets are volatile or thin.',
      'Frequent trading means more spreads paid, so trade size and frequency matter.',
      'Your account manager can show you the typical spread for each market you plan to trade before you deposit.',
    ],
  },

  overnight: {
    title: 'Overnight and Holding Costs',
    body: [
      'Some leveraged positions held open past the daily market close may attract an overnight (swap) charge set by the broker. Whether this applies depends on the market and position type. Ask your account manager which of your chosen markets carry overnight costs, and check open positions regularly if you use automation.',
    ],
  },

  depositMethods: {
    title: 'Deposit Methods',
    rows: [
      { k: 'Card Payment', v: 'Fast; your card provider may apply its own charges' },
      { k: 'Bank Transfer', v: 'Suits larger deposits; processing time depends on your bank' },
      { k: 'E-Wallet', v: 'Fast; e-wallet provider terms apply' },
    ],
    note: 'All deposits are made in your own name. Third-party payments are not accepted, which helps protect your account. Your bank or payment provider may charge currency conversion fees if your account currency differs from your payment currency.',
  },

  withdrawals: {
    title: 'How Withdrawals Work',
    steps: [
      'Request a withdrawal from your dashboard at any time.',
      'Confirm the request with two-factor authentication.',
      'A standard security check is completed.',
      'Funds are returned to your original payment method, typically within 1 business day.',
    ],
    note: 'Your bank or payment provider may take additional time to show the funds in your account. We recommend making a small test withdrawal early so you know exactly how the process works.',
  },

  tips: {
    title: 'Keep Your Trading Costs Low: 5 Tips',
    items: [
      'Start on the demo account to learn how spreads affect results without spending anything.',
      'Trade fewer, higher-quality signals rather than every signal the engine raises.',
      'Check spreads before trading volatile markets, especially around major news.',
      'Watch overnight positions if you trade leveraged markets.',
      'Use your own payment method in your account currency to avoid conversion charges.',
    ],
  },

  faq: {
    title: 'Sovereign Kapitix Fees: FAQs',
    items: [
      {
        q: 'What Is the Sovereign Kapitix Minimum Deposit?',
        a: `The minimum deposit is ${MIN_DEPOSIT}. It is trading capital that stays in your account, not a fee, and you can withdraw your available balance subject to standard security checks. Registration and the demo account are free, so you can test the platform before depositing anything.`,
      },
      {
        q: 'Does Sovereign Kapitix Charge a Commission?',
        a: 'No. Sovereign Kapitix charges no platform commission, no subscription and no registration fee. Trades are executed through partnered, regulated brokers, which earn from the spread on each trade. The spread is the main ongoing cost of trading on the platform.',
      },
      {
        q: 'Are There Withdrawal Fees on Sovereign Kapitix?',
        a: 'Any deposit or withdrawal fees are confirmed by your account manager before you make your first deposit, so you know the full cost upfront. Your own bank or payment provider may apply separate charges, such as currency conversion fees.',
      },
      {
        q: 'How Long Does a Sovereign Kapitix Withdrawal Take?',
        a: 'Withdrawals are typically processed within 1 business day after a standard security check, then returned to your original payment method. Your bank or payment provider may take extra time to show the funds. Two-factor authentication is required for every withdrawal.',
      },
      {
        q: 'Is There an Inactivity Fee?',
        a: 'Inactivity terms are listed in your account terms and explained by your account manager during onboarding. Check them before you deposit, especially if you plan to leave your account unused for long periods.',
      },
      {
        q: 'Which Payment Methods Can I Use?',
        a: 'You can deposit by card payment, bank transfer or e-wallet. Payments must come from an account in your own name. Withdrawals are returned to the same method you used to deposit.',
      },
    ],
  },

  smallPrint:
    `Available to verified Australian residents aged 18+. Trading involves risk of loss. Fees and charges are set out in full in our Terms of Use. This page is general information and does not take into account your objectives, financial situation or needs.`,
  cta: { eyebrow: 'Transparent pricing from day one', title: 'Every Fee Confirmed Before You Deposit', body: 'Open a free account, test the AI signals on the demo, and get every fee confirmed by your account manager before you deposit.', cta: CONTACT_CTA },
}

// ---------------------------------------------------------
// FAQ - /faq, 30 questions in 7 groups
// ---------------------------------------------------------
export const faqGroups = [
  {
    id: 'about',
    title: 'About Sovereign Kapitix',
    items: [
      {
        q: 'What Is Sovereign Kapitix?',
        a: 'Sovereign Kapitix is an AI-assisted trading platform for verified Australian residents. It scans live market data across crypto, forex, shares and commodities and generates trade signals. You can trade the signals manually, approve each suggested trade, or switch on automation within your own risk limits.',
      },
      {
        q: 'Is Sovereign Kapitix Legit?',
        a: 'Yes, Sovereign Kapitix is a working, browser-based platform. Every account passes KYC checks, logins and withdrawals use two-factor authentication, and trades are executed through partnered, regulated brokers. We still recommend starting on the free demo and making a small test withdrawal before adding funds.',
        link: { text: 'Read our full Sovereign Kapitix review.', href: '/sovereign-kapitix-review' },
      },
      {
        q: 'Who Executes My Trades?',
        a: 'Your trades are executed through partnered, regulated brokers, not an in-house trading desk. Sovereign Kapitix provides the AI signals, dashboard and automation tools. Your account manager confirms which broker handles your account during onboarding, before you make any deposit.',
      },
      {
        q: 'Does Sovereign Kapitix Give Financial Advice?',
        a: 'No. Sovereign Kapitix provides technology and general information only. Signals and content on the platform do not take into account your personal objectives, financial situation or needs. If you need personal advice, speak with a licensed financial adviser before trading.',
      },
      {
        q: 'Is There a Sovereign Kapitix App?',
        a: 'There is nothing to download. Sovereign Kapitix runs in your web browser on desktop, tablet and mobile, and your settings sync across devices. For quick access on your phone, add the site to your home screen from your browser menu.',
      },
    ],
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      {
        q: 'How Do I Sign Up for Sovereign Kapitix?',
        a: 'Complete the short form on our sign-up page with your name, email and Australian mobile number. It takes about two minutes. You then receive a confirmation email, a call from your account manager, and access to the free demo account.',
        link: { text: 'Go to sign up.', href: '/register' },
      },
      {
        q: 'Who Can Open an Account?',
        a: 'Sovereign Kapitix is available to Australian residents aged 18 and over. You need a valid email address, an Australian mobile number and an Australian driver licence or passport to complete identity verification. Accounts are not currently available outside Australia.',
      },
      {
        q: 'Do I Need Trading Experience?',
        a: 'No. The platform suits beginners and experienced traders. Beginners get a dedicated account manager, a learning centre and a free demo account. Most new users start in manual mode on the demo and only use automation once they understand their risk settings.',
      },
      {
        q: 'Is There a Demo Account?',
        a: 'Yes. Every new account includes a free demo account that runs the AI signals on live market data with virtual funds. Use it to learn the dashboard and judge the signals before you deposit real money. You can keep using it alongside your live account.',
      },
      {
        q: 'Why Do I Need to Verify My Identity?',
        a: 'Identity verification (KYC) is required under Australia AML/CTF laws for platforms connected to financial trading. It confirms you are who you say you are, helps prevent fraud and money laundering, and protects your account. You verify once, using your driver licence or passport.',
      },
    ],
  },
  {
    id: 'fees',
    title: 'Fees and Deposits',
    items: [
      {
        q: 'What Is the Minimum Deposit?',
        a: `The minimum deposit is ${MIN_DEPOSIT}. It stays in your account as trading capital, not a fee, and you can withdraw your available balance subject to standard security checks. You only need to deposit if you choose to trade with real money.`,
      },
      {
        q: 'What Fees Does Sovereign Kapitix Charge?',
        a: 'There is no registration fee, no subscription and no platform commission. The main ongoing cost is the broker spread on each trade. Any deposit or withdrawal fees are confirmed by your account manager before you deposit.',
        link: { text: 'See the full breakdown on our Fees page.', href: '/fees' },
      },
      {
        q: 'What Is a Spread?',
        a: 'A spread is the small difference between the buy and sell price of a market. It is how brokers earn on each trade. Spreads vary by market and can widen in volatile conditions, so frequent trading means more spread costs over time.',
      },
      {
        q: 'How Can I Deposit Money?',
        a: 'You can deposit by card payment, bank transfer or e-wallet. Payments should come from an account in your own name. Your bank or payment provider may charge its own fees, such as currency conversion, depending on how you pay.',
      },
    ],
  },
  {
    id: 'withdrawals',
    title: 'Withdrawals',
    items: [
      {
        q: 'How Do I Withdraw Money?',
        a: 'Request a withdrawal from your dashboard at any time and confirm it with two-factor authentication. After a standard security check, funds return to your original payment method. We recommend making a small test withdrawal early so you know how the process works.',
      },
      {
        q: 'How Long Do Withdrawals Take?',
        a: 'Withdrawals are typically processed within 1 business day after the security check. Your bank or payment provider may take extra time to show the funds in your account, depending on the payment method you used.',
      },
      {
        q: 'Can I Withdraw at Any Time?',
        a: 'Yes. You can request a withdrawal of your available balance whenever you choose. Funds tied up in open trades become available once those positions are closed. There is no lock-in period and no penalty for leaving the platform.',
      },
    ],
  },
  {
    id: 'signals',
    title: 'AI Signals and Trading',
    items: [
      {
        q: 'How Does Sovereign Kapitix Work?',
        a: `The AI engine scans live price, volume, momentum and volatility across ${MARKETS} markets and raises signals when its rules are met. Each signal shows the asset, direction, entry, stop-loss and take-profit. You then trade manually, approve the trade, or let automation place it.`,
        link: { text: 'See How It Works.', href: '/how-it-works' },
      },
      {
        q: 'Which Markets Can I Trade?',
        a: `You can trade ${MARKETS} markets across four asset classes: cryptocurrencies such as Bitcoin, Ethereum, Solana and XRP; major forex pairs such as AUD/USD and EUR/USD; global shares and indices; and commodities including gold.`,
      },
      {
        q: 'What Trading Modes Are Available?',
        a: 'There are three modes. Manual: you read signals and place trades yourself. Signal-assisted: the platform suggests each trade and you approve or reject it. Automated: the platform trades for you, only within your risk limits. You can switch modes at any time.',
      },
      {
        q: 'Can I Stop Automated Trading?',
        a: 'Yes. You can pause automation instantly with one click, switch to manual or signal-assisted mode, and change your risk settings whenever you like. Open positions stay visible on your dashboard so you can manage or close them yourself.',
      },
      {
        q: 'Are the AI Signals Always Right?',
        a: 'No. Signals are based on rules applied to market data and help you analyse markets faster, but no system can predict prices reliably. Some signals will lead to losing trades. Test them on the demo account and always use stop-losses and sensible trade sizes.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Safety and Security',
    items: [
      {
        q: 'How Is My Account Protected?',
        a: 'Every account passes KYC verification, two-factor authentication is required for logins and withdrawals, and all data moves over SSL/TLS encryption. Trades are executed through partnered, regulated brokers. Never share your password or 2FA codes with anyone, including people claiming to be from Sovereign Kapitix.',
      },
      {
        q: 'How Do You Use My Personal Details?',
        a: 'Your details are used to set up your account, verify your identity and contact you about your account. They are handled in line with our Privacy Policy. You can opt out of marketing messages at any time, and we will never ask for your password by phone or email.',
      },
      {
        q: 'What Should I Do If I Spot a Suspicious Message?',
        a: 'Do not click any links or share any details. Sovereign Kapitix will never ask for your password, 2FA codes or full card number. Always sign in by typing sovereign-kapitix.net into your browser, and report the message to our support team.',
      },
    ],
  },
  {
    id: 'risks',
    title: 'Risks and Tax',
    items: [
      {
        q: 'Can I Lose Money with Sovereign Kapitix?',
        a: 'Yes. Trading crypto, forex, shares and commodities carries risk, and leveraged products can magnify losses. You could lose some or all of your deposit. Only trade money you can afford to lose, start with the minimum, and read our Risk Disclosure.',
        link: { text: 'Read the Risk Disclosure.', href: '/disclosure' },
      },
      {
        q: 'Does Sovereign Kapitix Guarantee Profits?',
        a: 'No. No trading platform can guarantee profits, and you should be cautious of any that claims to. Results depend on market conditions, your risk settings and how you trade. Any examples you see online are illustrations, not promises of future returns.',
      },
      {
        q: 'Is Automated Trading Safe?',
        a: 'Automation reduces effort, not risk. It follows your rules exactly, but sudden news, low liquidity or price gaps can move markets past your stop-loss. Set your trade size and daily loss limit carefully, and check your open positions regularly.',
      },
      {
        q: 'Do I Pay Tax on Trading Profits in Australia?',
        a: 'Generally yes. Profits from crypto and other trading may be subject to capital gains tax or income tax, depending on your circumstances. Download your trade history from the dashboard and speak with a registered tax agent. The ATO website has guidance for traders.',
      },
      {
        q: 'How Should I Get Started Safely?',
        a: `Use the demo account first, keep your first deposit at ${MIN_DEPOSIT}, set your own stop-loss and daily loss limit, start with small trade sizes, and make a small test withdrawal early. Increase your balance only once you understand how the platform behaves.`,
      },
    ],
  },
]

export const faqPage = {
  eyebrow: 'Help Centre',
  title: 'Sovereign Kapitix FAQ: ',
  titleMark: 'Your Questions Answered',
  intro:
    `Find quick answers about how Sovereign Kapitix works, what it costs, how your account is protected and what to expect before you register. Cannot find your question? Our team is available by phone, email and live chat, ${SUPPORT_HOURS}.`,
  stillTitle: 'Still Have Questions?',
  stillBody:
    `Our support team is available by phone, email and live chat, ${SUPPORT_HOURS}, and every new account gets a dedicated account manager. Contact us, or create your free account and ask your account manager directly.`,
  cta: { eyebrow: 'Ready to try Sovereign Kapitix?', title: 'Sign Up Free in About Two Minutes', body: 'Test the AI signals on the demo account before you deposit a cent.', cta: CONTACT_CTA },
}

// ---------------------------------------------------------
// HOW IT WORKS - /how-it-works
// ---------------------------------------------------------
export const howPage = {
  eyebrow: 'How It Works',
  title: 'How Sovereign Kapitix Works: ',
  titleMark: 'A Step-by-Step Guide',
  intro:
    'Sovereign Kapitix turns live market data into clear, AI-generated trade signals, and lets you decide how much of the trading you want to do yourself. This guide walks through exactly how Sovereign Kapitix works, from sign-up to your first trade, so you know what to expect before you register.',
  shortAnswer:
    `Sovereign Kapitix works in six steps: register, verify your identity, test signals on the free demo account, fund your account from ${MIN_DEPOSIT}, set your risk limits, then trade manually or switch on automation. Trades are executed through partnered, regulated brokers.`,
  tocTitle: 'On This Page',
  toc: [
    { id: 'steps', label: 'The 6 Steps' },
    { id: 'signals', label: 'How the AI Signals Work' },
    { id: 'modes', label: 'Choosing Your Trading Mode' },
    { id: 'risk', label: 'Risk Controls' },
    { id: 'money', label: 'Deposits and Withdrawals' },
    { id: 'security', label: 'Account Security' },
    { id: 'first-week', label: 'Your First Week' },
    { id: 'faq', label: 'FAQs' },
  ],
  stepsTitle: 'Getting Started with Sovereign Kapitix in 6 Steps',
  stepsLead: 'Most Australians move from registration to their first live trade within a day. You can take as long as you like on the demo account first.',
  steps: [
    {
      no: '01',
      icon: 'user',
      title: 'Register in About Two Minutes',
      text: 'Fill in the short form with your first name, last name, email and Australian mobile number. Registration is free and there is no subscription. Once you submit the form, you receive a confirmation email and a dedicated account manager is assigned to your account.',
    },
    {
      no: '02',
      icon: 'shield',
      title: 'Verify Your Identity',
      text: 'Before you can trade, you complete a standard KYC (Know Your Customer) check using your driver licence or passport. This is required under Australia AML/CTF rules and protects your account from fraud. Two-factor authentication is switched on from the start.',
    },
    {
      no: '03',
      icon: 'gauge',
      title: 'Test the Platform on the Free Demo Account',
      text: 'The demo account runs the AI signals on live market data with virtual funds. Use it to learn the dashboard, see how signals look and track how they perform, all without risking money. We recommend several sessions on demo before you deposit.',
    },
    {
      no: '04',
      icon: 'wallet',
      title: `Fund Your Account from ${MIN_DEPOSIT}`,
      text: 'When you are ready, deposit by card payment, bank transfer or e-wallet. Your account manager explains fees, broker spreads and how withdrawals work before you deposit. The deposit stays in your account as trading capital, not a fee.',
    },
    {
      no: '05',
      icon: 'candles',
      title: 'Set Your Markets and Risk Limits',
      text: `Choose the markets you want covered across ${MARKETS} options in crypto, forex, shares and commodities. Then set your own maximum trade size, stop-loss level and daily loss limit. These settings control every trade, manual or automated.`,
    },
    {
      no: '06',
      icon: 'chart',
      title: 'Trade Your Way',
      text: 'Follow AI signals and place trades yourself, approve each suggested trade with one click, or switch on full automation. You can change modes, pause automation or withdraw your available balance at any time from the dashboard.',
    },
  ],

  signals: {
    title: 'How Sovereign Kapitix AI Signals Work',
    body: [
      `The Sovereign Kapitix signal engine scans live price action, trading volume, momentum and volatility across ${MARKETS} markets, 24 hours a day. When market data matches one of its predefined setups, it raises a signal.`,
    ],
    showsTitle: 'Every Signal Shows:',
    shows: [
      { k: 'Asset', v: 'The market the signal applies to, for example BTC/USD or AUD/USD' },
      { k: 'Direction', v: 'Buy or sell' },
      { k: 'Entry', v: 'The suggested entry price' },
      { k: 'Stop-Loss', v: 'The price at which the trade closes to limit losses' },
      { k: 'Take-Profit', v: 'The price at which the trade closes to lock in gains' },
    ],
    note: 'You see the full signal before anything happens, so you always know why a trade is being suggested. Signals are a tool to help you analyse markets faster. They do not predict prices with certainty, and some signals will result in losses.',
  },

  modes: {
    title: 'Choosing Your Trading Mode',
    lead: 'Sovereign Kapitix offers three ways to trade. You can switch between them at any time.',
    rows: [
      { k: 'Manual', v: 'You read the AI signals and place every trade yourself', best: 'Learning, full control' },
      { k: 'Signal-Assisted', v: 'The platform suggests each trade; you approve or reject it with one click', best: 'Balancing speed and control' },
      { k: 'Automated', v: 'The platform places trades for you, only within your risk limits', best: 'Busy traders who check in daily' },
    ],
    note: 'New users often start in manual mode on the demo account, move to signal-assisted once comfortable, and only try automation after they understand how their risk settings behave.',
  },

  risk: {
    title: 'Risk Controls You Set Yourself',
    lead: 'Automation follows your rules, so setting them carefully is the most important part of how Sovereign Kapitix works.',
    items: [
      { k: 'Maximum Trade Size', v: 'Caps how much of your balance any single trade can use' },
      { k: 'Stop-Loss', v: 'Closes a losing trade at a level you choose' },
      { k: 'Take-Profit', v: 'Closes a winning trade at a level you choose' },
      { k: 'Daily Loss Limit', v: 'Pauses trading for the day once losses reach your limit' },
      { k: 'Market Selection', v: 'Limits automation to the markets you pick' },
      { k: 'Pause Button', v: 'Stops automation instantly with one click' },
    ],
    note: 'Fast-moving markets, sudden news or price gaps can push a trade past your stop-loss, so these controls reduce risk but cannot remove it.',
    link: { text: 'Read our Risk Disclosure', href: '/disclosure' },
    linkEnd: 'for full details.',
  },

  money: {
    title: 'How Deposits and Withdrawals Work',
    rows: [
      { k: 'Minimum Deposit', v: MIN_DEPOSIT },
      { k: 'Deposit Methods', v: 'Card payment, bank transfer, e-wallet' },
      { k: 'Platform Commission', v: 'None (broker spreads apply per trade)' },
      { k: 'Withdrawal Requests', v: 'Any time, from your dashboard' },
      { k: 'Withdrawal Time', v: 'Typically within 1 business day after a security check' },
      { k: 'Withdrawal Security', v: 'Two-factor authentication on every request' },
    ],
    note: 'Withdrawals return to your original payment method. We recommend making a small test withdrawal early, before adding more funds.',
    link: { text: 'See the full breakdown on our Fees page.', href: '/fees' },
  },

  security: {
    title: 'How Your Account Is Protected',
    items: [
      { k: 'Regulated Execution', v: 'Trades are placed through partnered, regulated brokers, not an in-house desk' },
      { k: 'Identity Checks', v: 'Every account passes KYC and AML/CTF verification' },
      { k: 'Two-Factor Authentication', v: 'Required for logins and withdrawals' },
      { k: 'Encryption', v: 'All data moves over SSL/TLS' },
    ],
    link: { text: 'Read our Sovereign Kapitix review.', href: '/sovereign-kapitix-review' },
    linkLead: 'Want a breakdown of the pros and cons?',
  },

  firstWeek: {
    title: 'What to Expect in Your First Week',
    rows: [
      { k: 'Day 1', v: 'Register, verify your identity and meet your account manager by phone' },
      { k: 'Days 1 to 3', v: 'Use the demo account daily. Note which signals you would have followed and how they turned out' },
      { k: 'Days 3 to 5', v: `Set your risk limits, then make your first deposit from ${MIN_DEPOSIT} if you are comfortable` },
      { k: 'Days 5 to 7', v: 'Start in manual or signal-assisted mode with small trade sizes. Make a small test withdrawal' },
    ],
    note: `Our support team is available by phone, email and live chat, ${SUPPORT_HOURS}, if you have questions at any stage.`,
  },

  faq: {
    title: 'How Sovereign Kapitix Works: FAQs',
    items: [
      {
        q: 'How Does Sovereign Kapitix Work?',
        a: 'Sovereign Kapitix scans live market data with AI and generates trade signals showing the asset, direction, entry, stop-loss and take-profit. You can trade the signals manually, approve each suggested trade, or switch on automation within your own risk limits. Trades are executed through partnered, regulated brokers.',
      },
      {
        q: 'Do I Need Trading Experience to Use Sovereign Kapitix?',
        a: 'No. The platform is designed for beginners as well as experienced traders. You get a dedicated account manager, a learning centre and a free demo account to practise on live data. Most beginners start in manual mode and move to automation only once they understand their risk settings.',
      },
      {
        q: 'Is There a Sovereign Kapitix Demo Account?',
        a: 'Yes. Every new account includes a free demo account that runs the AI signals on live market data with virtual funds. It lets you learn the dashboard and judge the signals before depositing real money. We recommend using it for several sessions first.',
      },
      {
        q: 'How Long Does It Take to Start Trading?',
        a: `Registration takes about two minutes and identity verification is usually quick. Most Australians can place their first live trade within a day. You can stay on the demo account for as long as you like before making your ${MIN_DEPOSIT} minimum deposit.`,
      },
      {
        q: 'Can I Stop Automated Trading at Any Time?',
        a: 'Yes. You can pause automation instantly with one click, switch to manual or signal-assisted mode, and change your risk settings whenever you like. Open positions stay visible on your dashboard so you can manage or close them yourself.',
      },
      {
        q: 'Does Sovereign Kapitix Guarantee Profits?',
        a: 'No. No trading platform can guarantee profits. AI signals help you analyse markets faster, but prices can move against any position and you can lose some or all of your deposit. Only trade money you can afford to lose.',
      },
    ],
  },

  cta: { eyebrow: 'Ready to see how it works for you?', title: 'Try It on the Free Demo First', body: 'Create a free account in about two minutes and test the AI signals on the demo account before you deposit a cent.', cta: 'Try the free demo' },
}

// ---------------------------------------------------------
// REGISTER - /register
// ---------------------------------------------------------
export const registerPage = {
  eyebrow: 'Sign Up',
  title: 'Sovereign Kapitix Sign Up: ',
  titleMark: 'Open Your Free Account',
  sub: `Register in about two minutes. Test AI trading signals on a free demo account, then fund from ${MIN_DEPOSIT} when you are ready.`,
  benefits: [
    'Free registration, no subscription',
    'Free demo account on live market data',
    `AI signals across ${MARKETS} markets`,
    'No platform commission',
    'Dedicated account manager',
    `${SUPPORT_HOURS} support by phone, email and live chat`,
  ],
  // Sits directly above the form, matching the homepage order.
  risk: {
    title: 'Trading Carries Risk',
    text: 'The value of your investments can go down as well as up, and you may lose some or all of the money you deposit. Never trade money you cannot afford to lose.',
    link: { text: 'Read the full Risk Disclosure', href: '/disclosure' },
  },
  trustLine: 'KYC-verified accounts · 2FA on every login · SSL encryption · Regulated broker partners',
  existingUsers: {
    text: 'Already registered? Use the login link in your welcome email, or',
    link: { text: 'contact support', href: '/contact' },
  },
  after: {
    title: 'What Happens After You Sign Up?',
    items: [
      { k: 'Confirmation Email', v: 'You receive an email confirming your registration within minutes' },
      { k: 'Call from Your Account Manager', v: 'A dedicated account manager calls to welcome you, answer questions and explain fees, risk settings and withdrawals' },
      { k: 'Identity Verification', v: 'You complete a standard KYC check with your driver licence or passport, as required under Australia AML/CTF rules' },
      { k: 'Demo Access', v: 'You can practise with the AI signals on the free demo account straight away' },
      { k: 'Fund When Ready', v: `Deposit from ${MIN_DEPOSIT} by card, bank transfer or e-wallet only when you feel comfortable. There is no obligation to deposit` },
    ],
    link: { text: 'Want the full picture first? Read How It Works.', href: '/how-it-works' },
  },
  need: {
    title: 'What You Need to Register',
    items: [
      'To be an Australian resident aged 18 or over',
      'A valid email address',
      'An Australian mobile number',
      'A driver licence or passport for identity verification (after sign-up)',
    ],
  },
  why: {
    title: 'Why Open a Sovereign Kapitix Account?',
    items: [
      { k: 'Try Before You Deposit', v: 'The free demo account runs the AI signals on live market data, so you can judge them with no money at risk' },
      { k: 'Trade Your Way', v: 'Follow signals manually, approve each suggested trade, or switch on automation inside your own risk limits' },
      { k: 'Clear Costs', v: 'No registration fee, no subscription and no platform commission. Broker spreads apply per trade, and every fee is confirmed before you deposit' },
      { k: 'Real Support', v: `Your dedicated account manager and our ${SUPPORT_HOURS} support team help you at every step` },
    ],
    link: { text: 'See our Fees page.', href: '/fees' },
  },
  details: {
    title: 'How We Use Your Details',
    body: 'Your details are used only to set up your account, verify your identity and contact you about your account. They are sent over an encrypted connection and handled in line with our Privacy Policy. We will never ask for your password or full card details by phone or email.',
    link: { text: 'Privacy Policy', href: '/privacy' },
  },
  faq: {
    title: 'Sovereign Kapitix Sign Up: FAQs',
    items: [
      {
        q: 'Is It Free to Sign Up for Sovereign Kapitix?',
        a: `Yes. Registration is free, there is no subscription and the demo account costs nothing. You only need to deposit, from a minimum of ${MIN_DEPOSIT}, if you decide to trade with real money. There is no obligation to deposit after signing up.`,
      },
      {
        q: 'How Long Does Sovereign Kapitix Registration Take?',
        a: 'The sign-up form takes about two minutes. Identity verification is completed afterwards with your driver licence or passport and is usually quick. You can use the free demo account while your verification is being processed.',
      },
      {
        q: 'Why Does Sovereign Kapitix Ask for My Phone Number?',
        a: 'Your account manager uses it to welcome you, help you set up your account and explain fees and risk settings. It is also used for account security. You can choose how you prefer to be contacted and opt out of marketing at any time.',
      },
      {
        q: 'Do I Have to Deposit Money After Registering?',
        a: `No. Registering does not commit you to anything. Use the free demo account for as long as you like. If you decide to trade with real money later, the minimum deposit is ${MIN_DEPOSIT} by card, bank transfer or e-wallet.`,
      },
      {
        q: 'Can I Register from Outside Australia?',
        a: 'Not at the moment. Sovereign Kapitix is available only to verified Australian residents aged 18 and over. You need an Australian mobile number and a valid Australian driver licence or passport to complete verification.',
      },
      {
        q: 'I Already Have an Account. How Do I Log In?',
        a: `Use the login link sent in your welcome email. If you cannot find it, contact our support team by phone, email or live chat, ${SUPPORT_HOURS}, and they will help you access your account.`,
        link: { text: 'Contact support.', href: '/contact' },
      },
    ],
  },
  form: {
    heading: 'Create Your Free Account',
    sub: 'No fee to register. A local account manager will call to walk you through setup.',
    button: 'Create my free account',
    consent:
      'I agree that Sovereign Kapitix may contact me by phone and email about my account. I can opt out at any time.',
    micro:
      'By registering you agree to our Terms of Use and Privacy Policy. Trading involves risk of loss. Read the risk disclosure.',
  },
  cta: { eyebrow: 'Ready when you are', title: 'Open Your Account and Start Trading Today', body: `Registration is free, it takes about two minutes, and the minimum deposit is ${MIN_DEPOSIT}.`, cta: CONTACT_CTA },
}

// ---------------------------------------------------------
// REVIEW - /sovereign-kapitix-review
// ---------------------------------------------------------
export const reviewPage = {
  eyebrow: 'Sovereign Kapitix Review',
  title: 'Sovereign Kapitix Review 2026: ',
  titleMark: 'Is It Legit and Worth Trying?',
  intro:
    'Searching "Sovereign Kapitix review" before you sign up is the right move. This page gives you a straight answer: what the platform does, what it costs, how your account is protected, where it falls short, and who it suits. It is published by the Sovereign Kapitix team, so we have kept it factual and included the downsides too.',
  disclosure:
    'This review is published by Sovereign Kapitix. It is general information, not financial advice. Trading involves risk of loss.',

  verdict: {
    title: 'Quick Verdict',
    body: `Sovereign Kapitix is a working, browser-based AI trading platform for Australian residents. It offers AI-generated signals, optional automated trading, a free demo account and a low ${MIN_DEPOSIT} minimum deposit, with trades executed through partnered, regulated brokers. It is a reasonable starting point for beginners who test on demo first and only trade money they can afford to lose. It is not a way to guarantee profits.`,
  },

  glance: {
    title: 'Sovereign Kapitix at a Glance',
    rows: [
      { k: 'Platform Type', v: 'Browser-based AI trading platform' },
      { k: 'Core Technology', v: 'AI-assisted market scanning and signals' },
      { k: 'Minimum Deposit', v: MIN_DEPOSIT },
      { k: 'Registration Fee', v: 'Free' },
      { k: 'Platform Commission', v: 'None (broker spreads apply)' },
      { k: 'Demo Account', v: 'Yes, free' },
      { k: 'Trading Modes', v: 'Manual, signal-assisted, automated' },
      { k: 'Markets', v: `${MARKETS} markets: crypto, forex, shares, commodities` },
      { k: 'Deposit Methods', v: 'Card payment, bank transfer, e-wallet' },
      { k: 'Withdrawal Time', v: 'Typically within 1 business day' },
      { k: 'Trade Execution', v: 'Partnered, regulated brokers' },
      { k: 'Security', v: 'KYC/AML checks, 2FA, SSL encryption' },
      { k: 'Support', v: `Phone, email and live chat, ${SUPPORT_HOURS}` },
      { k: 'Devices', v: 'Desktop, tablet and mobile browsers' },
      { k: 'Available To', v: 'Verified Australian residents, 18+' },
    ],
  },

  whatIs: {
    title: 'What Is ',
    titleMark: 'Sovereign Kapitix?',
    body: [
      'Sovereign Kapitix is an AI-assisted trading platform built for Australians who want market exposure without watching charts all day. Its signal engine scans live prices, volume and momentum, then flags setups that match its rules.',
      'You choose what happens with each signal. Review it and trade manually, approve each suggested trade, or switch on automation and let the platform trade inside limits you set. Sovereign Kapitix supplies the technology. The trades themselves are placed through partnered, regulated brokers, not an in-house desk.',
    ],
  },

  how: {
    title: 'How Sovereign Kapitix Works',
    steps: [
      'Register. Enter your name, email and Australian mobile number. It takes about two minutes.',
      'Verify your identity. Complete a standard KYC check with a driver licence or passport, as required under Australia AML/CTF rules.',
      'Try the demo account. Test the AI signals on live market data with no money at risk.',
      `Fund from ${MIN_DEPOSIT}. Deposit by card, bank transfer or e-wallet. Your account manager explains fees and withdrawals first.`,
      'Set your risk limits and trade. Choose your markets, trade size, stop-loss and daily loss limit, then trade manually or turn on automation.',
    ],
    link: { text: 'Read the full walkthrough on our How It Works page.', href: '/how-it-works' },
  },

  prosCons: {
    title: 'Sovereign Kapitix Pros ',
    titleMark: 'and Cons',
    pros: [
      `Low ${MIN_DEPOSIT} minimum deposit and free registration`,
      'Free demo account to test signals before risking money',
      'No platform commission or monthly subscription',
      'Trades executed through regulated broker partners',
      'Choice of manual, assisted or fully automated trading',
      'Adjustable risk settings: trade size, stop-loss, daily loss limit',
      'Withdrawals typically processed within 1 business day',
      'Works in any browser, nothing to install',
      `${SUPPORT_HOURS} support by phone, email and live chat`,
    ],
    cons: [
      'A newer platform without a long public track record yet',
      'No independently verified performance results are published',
      'Broker spreads apply on every trade, so costs add up with frequent trading',
      'Available to Australian residents only',
      'Automation reduces effort, not risk: you still need to monitor positions',
      'Provides general information only, not personal financial advice',
    ],
  },

  costs: {
    title: 'Sovereign Kapitix Fees ',
    titleMark: 'and Minimum Deposit',
    body: [
      `The minimum deposit is ${MIN_DEPOSIT}. This is trading capital in your account, not a fee, and you can withdraw your available balance subject to standard security checks.`,
      'There is no registration fee, no monthly subscription and no platform commission. The cost that matters is the broker spread: the small difference between buy and sell prices, charged on every trade. More trades mean more spread costs, so factor this into any return expectations. Deposit and withdrawal fees, if any, are confirmed by your account manager before you deposit.',
    ],
    link: { text: 'See the full breakdown on our Fees page.', href: '/fees' },
  },

  assets: {
    title: 'Which Assets ',
    titleMark: 'Can You Trade?',
    lead: `Sovereign Kapitix covers ${MARKETS} markets across four asset classes:`,
    groups: [
      { k: 'Cryptocurrencies', v: 'Bitcoin (BTC), Ethereum (ETH), Solana (SOL), BNB, Tether (USDT), Dogecoin (DOGE), Litecoin (LTC), Bitcoin Cash (BCH), XRP and Cardano (ADA)' },
      { k: 'Forex', v: 'Major currency pairs, including AUD/USD, EUR/USD and GBP/USD' },
      { k: 'Shares', v: 'Major global stocks and indices' },
      { k: 'Commodities', v: 'Gold and other commodities' },
    ],
    note: 'Spreading a small balance across a few markets can reduce reliance on any single asset, though it does not remove market risk.',
  },

  legit: {
    title: 'Is Sovereign Kapitix ',
    titleMark: 'Legit and Safe?',
    lead: 'Sovereign Kapitix is a real, functioning platform, not a "send us money and wait" scheme. Here is what supports that, and what you should still check yourself.',
    inPlaceTitle: 'What Is in Place',
    inPlace: [
      { k: 'Regulated Execution', v: 'Trades run through partnered, regulated brokers, not an unnamed party' },
      { k: 'Identity Checks', v: 'Every account passes KYC and AML/CTF verification before trading' },
      { k: 'Account Security', v: 'Two-factor authentication on logins and withdrawals, plus SSL encryption on all data' },
      { k: 'Recognised Payment Channels', v: 'Card, bank transfer and e-wallet deposits' },
      { k: 'Withdrawals', v: 'Request any time from your dashboard; typically processed within 1 business day' },
    ],
    checkTitle: 'What You Should Check Yourself',
    check: [
      'Ask your account manager which broker will handle your account, then look that broker up independently.',
      'Make a small test withdrawal early, before adding more funds.',
      'Read the Risk Disclosure and Terms in full.',
    ],
    note: 'Legit does not mean profitable. A legitimate platform can still lose you money if you overcommit, skip risk settings or expect best-case returns. Treat any return figure you see online, from anyone, with caution.',
  },

  who: {
    title: 'Who Is Sovereign Kapitix ',
    titleMark: 'Best For?',
    goodTitle: 'Good Fit',
    good: [
      'Beginners who want a low-cost, guided start and will use the demo account first',
      'Busy professionals who prefer rules-based automation over watching charts',
      'Experienced traders who want AI signals as a second opinion',
    ],
    noTitle: 'Not a Good Fit',
    no: [
      'Anyone expecting guaranteed or steady returns',
      'Anyone who cannot afford to lose the money they deposit',
      'Anyone who needs personal financial advice (speak to a licensed adviser instead)',
    ],
  },

  mistakes: {
    title: '5 Mistakes to Avoid on Sovereign Kapitix',
    items: [
      { k: 'Skipping the Demo Account', v: 'Learn the dashboard and signals without real money first' },
      { k: 'Depositing Far Above the Minimum Straight Away', v: `Start at ${MIN_DEPOSIT} and scale only once you understand the platform` },
      { k: 'Leaving Risk Settings on Default', v: 'Set your own stop-loss, trade size and daily loss limit' },
      { k: 'Treating Automation as Hands-Off', v: 'Check open positions daily; markets change' },
      { k: 'Ignoring the Spread', v: 'Small per-trade costs add up over many trades' },
    ],
  },

  checklist: {
    title: 'Checklist Before Your First Live Trade',
    items: [
      'Account verified and 2FA switched on',
      'Demo account used for several sessions, with results tracked',
      'Stop-loss and daily loss limit set deliberately',
      `First deposit kept at ${MIN_DEPOSIT}`,
      'Broker spread understood and factored in',
      'Small test withdrawal completed',
    ],
  },

  faq: {
    title: 'Sovereign Kapitix Review FAQs',
    items: [
      {
        q: 'Is Sovereign Kapitix a Scam or Legit?',
        a: 'Sovereign Kapitix is a legitimate, working platform. Accounts pass KYC checks, logins and withdrawals use two-factor authentication, and trades are executed through partnered, regulated brokers. As with any trading platform, start with the demo account and the minimum deposit, and make a small test withdrawal before adding more funds.',
      },
      {
        q: 'What Is the Sovereign Kapitix Minimum Deposit?',
        a: `The minimum deposit is ${MIN_DEPOSIT}. Registration is free and there is no monthly subscription. The deposit stays in your account as trading capital, not a fee, so you can withdraw your available balance subject to standard security checks. We recommend starting with the minimum while you learn the platform.`,
      },
      {
        q: 'Does Sovereign Kapitix Charge Fees?',
        a: 'Sovereign Kapitix charges no registration fee, no subscription and no platform commission. Broker spreads apply on every trade, which is the main ongoing cost. Any deposit or withdrawal fees are confirmed by your account manager before you deposit, so there are no surprises later.',
      },
      {
        q: 'Can I Make Money with Sovereign Kapitix?',
        a: 'You can make or lose money. AI signals help you analyse markets faster, but no system predicts prices reliably, and no platform can guarantee profits. Results depend on market conditions, your risk settings and how much you trade. Only trade money you can afford to lose.',
      },
      {
        q: 'How Long Do Sovereign Kapitix Withdrawals Take?',
        a: 'Withdrawals are typically processed within 1 business day after a standard security check. Funds return to your original payment method. Two-factor authentication is required for every withdrawal request, which helps protect your account from unauthorised access.',
      },
      {
        q: 'Is There a Sovereign Kapitix App?',
        a: 'Sovereign Kapitix runs in your web browser on desktop, tablet and mobile, so there is nothing to download. Your account, positions and settings stay in sync across devices. Simply sign in from any modern browser.',
      },
    ],
  },

  finalVerdict: {
    title: 'Final Verdict: ',
    titleMark: 'Is Sovereign Kapitix Worth Trying?',
    body: [
      `Sovereign Kapitix is a functional AI-assisted trading platform with sensible fundamentals: a ${MIN_DEPOSIT} minimum, no platform commission, a free demo account, regulated broker execution and adjustable risk controls. Its main limitations are a short track record and the ongoing cost of broker spreads.`,
      'If you are an Australian resident who wants to try AI-assisted trading carefully, it is a reasonable place to start. Use the demo first, keep your first deposit small, set your own risk limits, and treat every return projection as uncertain.',
    ],
  },

  cta: { eyebrow: 'See it for yourself, risk-free', title: 'Start with the Free Demo', body: 'Create a free account in about two minutes and test the AI signals on the demo account before you deposit a cent.', cta: 'Start with the free demo' },
}
