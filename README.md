# Sovereign Kapitix

Marketing site for Sovereign Kapitix, an AI-assisted trading platform for
Australian residents. Next.js (App Router), plain CSS, no UI library.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, prerenders every route
npm start        # serve the production build
npm run lint     # oxlint
```

Every route is static. `next build` prerenders all thirteen and the 404; there
is no server-side data fetching anywhere.

## Layout

```
app/
  layout.jsx              document shell - head tags, gtag, Header/Footer
  globals.css             the whole stylesheet
  page.jsx                homepage, composes the section components
  <route>/page.jsx        one file per route, each a server component
  not-found.jsx           the 404, with its own metadata
  _components/
    RouteEffects.jsx      'use client' - anchor handling + scroll reveal
    JsonLd.jsx            per-route structured data
src/
  components/             the section and page components
  data/content.js         homepage copy, nav, footer, shared constants
  data/pages.js           sub-page copy
  data/seo.js             per-route title/description/canonical/schema
  data/metadata.js        seo.js -> Next Metadata API
  lib/                    phone formatting, country detection, route table
  hooks/                  scroll reveal, scroll spy
middleware.js             the /How-It-Works casing redirect (see its comment)
next.config.mjs           the other five redirects
public/                   robots.txt, sitemap.xml, og image, favicon, imagery
```

## Things that will bite you

Four behaviours here are load-bearing and none of them are obvious from reading
the component they live in.

**Only four components are client components.** `Header`, `RegistrationForm`,
`Contact`, `PhoneNumberInput` and `FaqAccordion` carry `'use client'`; the other
twenty-odd are server components and ship no JavaScript. That holds as long as
you do not add a hook to a server component - doing so is an error, not a silent
fallback, so it fails loudly.

**`html.js` must be set before first paint.** `app/layout.jsx` adds it with
`next/script` at `beforeInteractive`, and `globals.css` has
`html.js .reveal { opacity: 0 }`. If that class arrives after hydration, every
page flashes visible, then hidden, then visible again. `src/hooks/useReveal.js`
sets `data-revealed` (an attribute, not a class) so React re-renders cannot
clobber it - that was a real bug once, and the comment explains it.

**Country detection never runs during render.** `src/lib/detectCountry.js` calls
a third-party IP lookup, and `usePhoneField` calls it from an effect with `'AU'`
as the default. The server renders `'AU'`; the effect corrects it after
hydration. Reading the country during render - or passing a server-derived one
down - reintroduces a hydration mismatch.

**Legacy redirects cannot all live in `next.config.mjs`.** Next matches a
redirect source case-insensitively, so a rule for `/How-It-Works` also caught the
real `/how-it-works` route and looped it to itself. That one is in
`middleware.js`, which can compare the path exactly.

## Verification

`.arttmp/` holds the audit harnesses: metadata parity, hydration, colour
palette, responsive overflow, FAQ/structured-data parity, the form wire format,
the Google tag, and a link-and-button sweep. They proxy to a running Next server,
so start one first:

```bash
npm run build && npm start &
node .arttmp/verify-metadata.mjs http://localhost:3000
node .arttmp/verify-hydration.mjs http://localhost:3000
```

`.arttmp/` is gitignored - it is scratch tooling, not part of the site.
