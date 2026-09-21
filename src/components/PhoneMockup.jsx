// Device mockup used to illustrate the About page walkthrough - a phone
// showing the trading screen. Drawn entirely in CSS and inline SVG in
// Sovereign Kapitix's own colours; no bitmap, no third-party artwork.
//
// Each variant is one stage of the walkthrough (the chart paths are
// hand-drawn originals). Deliberately carries NO balance or percentage-gain
// figure: shown beside the steps, a rising number reads as a performance
// claim, and this build cannot evidence one. See the figures note at the top
// of data/content.js. The win-rate / pairs chips that remain are the same
// published product claims used across the rest of the site.
import { SIGNAL_ACCURACY, INSTRUMENTS } from '../data/content.js'

const VARIANTS = {
  1: {
    line: 'M0 128 C40 124 70 108 100 112 C130 116 160 98 190 92 C220 86 250 90 280 76 C300 66 310 60 320 52',
    end: [320, 52],
    label: 'Getting started',
    value: 'Account ready',
    chipTl: '2FA enabled',
    chipBr: 'Setup in minutes',
  },
  2: {
    line: 'M0 122 C30 120 60 98 90 90 C120 82 150 92 180 72 C200 60 220 44 250 38 C280 32 300 40 320 34',
    end: [320, 34],
    label: 'Funding',
    value: 'Min. AU$250',
    chipTl: 'Card · Bank · PayPal',
    chipBr: 'No hidden fees',
  },
  3: {
    line: 'M0 138 C50 134 100 118 150 106 C200 94 250 84 280 66 C300 52 312 44 320 38',
    end: [320, 38],
    label: 'Market scan',
    value: '24/7 analysis',
    chipTl: 'Markets never close',
    chipBr: 'AI scanning',
  },
  4: {
    line: 'M0 104 C40 108 70 84 100 88 C130 92 150 64 180 60 C210 56 240 42 270 38 C290 34 305 32 320 28',
    end: [320, 28],
    label: 'Execution',
    value: 'AI signals',
    chipTl: 'Auto or manual',
    chipBr: 'AI Signal · BUY',
  },
  5: {
    line: 'M0 146 C40 144 70 128 100 122 C130 116 160 100 190 92 C220 84 250 68 280 56 C300 48 312 42 320 36',
    end: [320, 36],
    label: 'Portfolio',
    value: 'One dashboard',
    chipTl: 'Withdraw anytime',
    chipBr: 'Live updates',
  },
}

// Signal rows filling the lower screen. Instrument names and a direction only -
// no entry price, no return, no size.
const SIGNALS = [
  { pair: 'BTC/USD', dir: 'BUY' },
  { pair: 'ETH/USD', dir: 'BUY' },
  { pair: 'SOL/USD', dir: 'SELL' },
]

export default function PhoneMockup({ variant = 1 }) {
  const v = VARIANTS[variant] ?? VARIANTS[1]
  const gid = `pmGrad${variant}`

  return (
    <div className="pm" aria-hidden="true">
      <div className="pm-glow"></div>
      <span className="pm-chip pm-chip-tl">
        <span className="pm-dot"></span> {v.chipTl}
      </span>
      <span className="pm-chip pm-chip-br">{v.chipBr}</span>

      <div className="pm-phone">
        <div className="pm-notch"></div>
        <div className="pm-screen">
          <div className="pm-status">
            <span>9:41</span>
            <span className="pm-bars">
              <i></i><i></i><i></i><i></i>
            </span>
          </div>

          <div className="pm-bal">
            <span>{v.label}</span>
            <b>{v.value}</b>
          </div>

          <svg className="pm-chart" viewBox="0 0 320 150" role="img" aria-label={`${v.label} trading chart`}>
            <defs>
              <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0F766E" stopOpacity="0.28" />
                <stop offset="1" stopColor="#0F766E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="rgba(15,118,110,.13)" strokeDasharray="2 5">
              <path d="M0 38 H320" />
              <path d="M0 76 H320" />
              <path d="M0 114 H320" />
            </g>
            <path d={`${v.line} L320 150 L0 150 Z`} fill={`url(#${gid})`} />
            <path d={v.line} className="pm-line" />
            <circle cx={v.end[0]} cy={v.end[1]} r="3.5" className="pm-end" />
          </svg>

          <div className="pm-signals">
            {SIGNALS.map((s) => (
              <div className="pm-sig" key={s.pair}>
                <span className="pm-sig-pair">{s.pair}</span>
                <span className={`pm-sig-tag ${s.dir === 'BUY' ? 'is-buy' : 'is-sell'}`}>{s.dir}</span>
              </div>
            ))}
          </div>

          <div className="pm-foot">
            <span>
              Win rate <b>{SIGNAL_ACCURACY}</b>
            </span>
            <span>
              Pairs <b>{INSTRUMENTS}</b>
            </span>
            <span>
              <b>24/7</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
