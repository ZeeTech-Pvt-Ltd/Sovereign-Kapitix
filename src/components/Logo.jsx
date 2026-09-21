export default function Logo({ onDark = false }) {
  return (
    <a className="logo" href="/" aria-label="Sovereign Kapitix home">
      <span className="logo-mark">S</span>
      <span className={`logo-text ${onDark ? 'on-dark' : ''}`}>
        Sovereign <span>Kapitix</span>
      </span>
    </a>
  )
}
