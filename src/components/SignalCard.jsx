// A sample AI signal, showing the five fields the operator's How It Works brief
// says every signal carries: asset, direction, entry, stop-loss and take-profit.
//
// The figures are illustrative sample data, not a live quote, and the card says
// so on its face. That label is the point: the house rule is that generated
// data must be labelled wherever a reader could take it for market data, and a
// signal panel is exactly where that mistake is easiest to make.
const SAMPLE = {
  asset: 'BTC/USD',
  direction: 'BUY',
  entry: '61,240.00',
  stop: '60,100.00',
  target: '63,500.00',
  note: 'Signal engine matched a momentum setup',
}

export default function SignalCard() {
  return (
    <figure className="signal-card reveal">
      <figcaption className="signal-head">
        <span className="signal-live">
          <i aria-hidden="true"></i> AI signal
        </span>
        <span className="signal-sample">Illustrative example</span>
      </figcaption>

      <div className="signal-asset">
        <b>{SAMPLE.asset}</b>
        <span className={`signal-dir ${SAMPLE.direction === 'BUY' ? 'buy' : 'sell'}`}>{SAMPLE.direction}</span>
      </div>

      <dl className="signal-fields">
        <div>
          <dt>Entry</dt>
          <dd>{SAMPLE.entry}</dd>
        </div>
        <div>
          <dt>Stop-loss</dt>
          <dd className="neg">{SAMPLE.stop}</dd>
        </div>
        <div>
          <dt>Take-profit</dt>
          <dd className="pos">{SAMPLE.target}</dd>
        </div>
      </dl>

      <p className="signal-note">{SAMPLE.note}</p>
    </figure>
  )
}
