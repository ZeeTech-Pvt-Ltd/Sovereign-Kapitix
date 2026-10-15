import './globals.css'
import Script from 'next/script'
import Header from '../src/components/Header.jsx'
import Footer from '../src/components/Footer.jsx'
import RouteEffects from './_components/RouteEffects.jsx'
import { SITE } from '../src/data/seo.js'

// Root layout: the shell every route renders inside.
//
// This file replaces three things at once - index.html (the document), the
// `staticHead` block scripts/build.mjs copied into every page, and the `Layout`
// wrapper in src/renderRoute.jsx. The comments below mark the pieces that had a
// reason recorded somewhere in the old build; they still apply.

export const metadata = {
  metadataBase: new URL(SITE),
  // A default only. Each page.jsx sets its own title outright, and there is no
  // title template on purpose - a template would append the site name to the
  // per-route titles, which are transcribed from the operator's briefs and are
  // already the full string.
  title: 'Sovereign Kapitix',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Inline "SK" hexagon favicon - the browser-tab icon. Kept as a data URI so it
// costs no request. Mirrors public/favicon.svg and .logo-hex in globals.css;
// all three must stay in step. `#` is written as %23 inside a data URI.
const FAVICON =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%231D4ED8'/><stop offset='0.55' stop-color='%231E40AF'/><stop offset='1' stop-color='%231E3A8A'/></linearGradient></defs><polygon points='50,1 92.4,25.5 92.4,74.5 50,99 7.6,74.5 7.6,25.5' fill='url(%23g)'/><text x='50' y='64' font-family='Arial' font-weight='800' font-size='40' letter-spacing='-1.5' fill='white' text-anchor='middle'>SK</text></svg>"

// GA4 property G-2K32GJQKWT. gtag.js sets its own cookies and sends page views,
// so the Privacy Policy describes it (section 09) and has to keep doing so.
const GA_ID = 'G-2K32GJQKWT'

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning is required here, not decorative. The
    // beforeInteractive script below adds `js` to this element before React
    // hydrates, so the client's <html> carries a class the server's did not and
    // React logs a hydration mismatch on every page. This is the documented fix
    // for exactly this case: it suppresses attribute mismatches on this one
    // element only, and does nothing to any descendant.
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <link rel="icon" href={FAVICON} />

        {/* Marks the document as JS-enabled so .reveal content hides only when
            a script will actually reveal it; without JS everything stays
            visible. This MUST run before first paint: globals.css has
            `html.js .reveal { opacity: 0 }`, so if the class arrives after
            hydration every page flashes visible, then hidden, then visible
            again. beforeInteractive is the only strategy that guarantees it. */}
        <Script id="js-class" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>

        {/* Third-party connection warm-up - the country flags in the phone field. */}
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />

        {/* Search Console ownership verification. */}
        <meta name="google-site-verification" content="Cx0lmBQmPq_TuNTl0fhsHbfNI9Nom-HGNk82dbMySRw" />

        {/* Plain async tags, matching what index.html shipped. next/script's
            afterInteractive would defer both until after hydration, which
            changes when the tag fires. React hoists an async script to <head>. */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_ID}');`,
          }}
        />
      </head>

      <body>
        <RouteEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
