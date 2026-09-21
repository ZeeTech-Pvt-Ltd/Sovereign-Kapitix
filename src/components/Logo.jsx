// Wordmark + "SK" hexagon monogram.
//
// The hexagon is a CSS-clipped layer (.logo-hex in index.css) rather than an
// inline SVG, so the gradient comes from the --grad custom property and no
// per-instance <linearGradient> id is needed - the header and the footer can
// both render this without colliding.
//
// The same mark is duplicated in two places outside this component:
//   - public/favicon.svg        (schema.org logo, served at /favicon.svg)
//   - the inline data-URI icon in index.html (what the browser tab shows)
// All three have to be changed together.
export default function Logo({ onDark = false }) {
  return (
    <a className="logo" href="/" aria-label="Sovereign Kapitix home">
      <span className={`logo-mark ${onDark ? 'on-dark' : ''}`}>
        <span className="logo-hex" aria-hidden="true"></span>
        <span className="logo-initials">SK</span>
      </span>
      <span className={`logo-text ${onDark ? 'on-dark' : ''}`}>
        Sovereign <span>Kapitix</span>
      </span>
    </a>
  )
}
