// =========================================================
// seo.js -> Next.js Metadata API
// =========================================================
// seo.js was written for two hand-rolled consumers that both emitted raw <meta>
// tags: scripts/build.mjs baked them into each prerendered page, and
// src/components/Seo.jsx rewrote them in document.head after hydration. Next
// replaces both, but it wants structured objects rather than the strings this
// site stores. This is the conversion, and it is deliberately literal - the
// tags that ship must be the tags that shipped before.
//
// The mappings that are easy to get wrong, and what each one costs:
//
//   robots        Kept as the raw string. Next accepts a string and emits it
//                 verbatim, which is exactly what build.mjs did. Converting it
//                 to the object form would split the tag into a `robots` and a
//                 `googlebot` pair and move max-image-preview / max-snippet off
//                 the general tag.
//   canonical     null on /thank-you and the 404. A null string is not
//                 expressible, so the key is omitted - otherwise Next emits
//                 <link rel="canonical" href="null">. The 404 matters most:
//                 not-found inherits the root layout's metadata, so it has to
//                 override this explicitly.
//   keywords      '' on the same two routes means no tag at all, not an empty
//                 one.
//   og:url        Falls back to `${SITE}/` when there is no canonical. That
//                 fallback lived in build.mjs and in Seo.jsx; Next has none.
//   twitter       No twitter:image:alt. The old head never emitted one and
//                 adding it would be a change, not a port.
// =========================================================
import { seo, SITE, OG_IMAGE } from './seo.js'

// Next spells openGraph.type the same way, but it also drives whether Next adds
// article:* sub-tags. Only the review route differs from the default.
const OG_TYPE = { website: 'website', article: 'article' }

/**
 * Build a Next Metadata object for one of the site's routes.
 *
 * @param {string} route key into the `seo` map, e.g. 'about'
 * @returns {import('next').Metadata}
 */
export function buildMetadata(route) {
  const conf = seo[route] || seo['404']

  const metadata = {
    title: conf.title,
    description: conf.description,
    robots: conf.robots,
    openGraph: {
      siteName: 'Sovereign Kapitix',
      title: conf.title,
      description: conf.description,
      url: conf.canonical || `${SITE}/`,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: conf.ogImageAlt,
        },
      ],
      type: OG_TYPE[conf.type] || 'website',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title: conf.title,
      description: conf.description,
      images: [OG_IMAGE],
    },
  }

  // Only when there is something to say - see the header note on both.
  if (conf.keywords) metadata.keywords = conf.keywords
  if (conf.canonical) metadata.alternates = { canonical: conf.canonical }

  return metadata
}

/** The JSON-LD blocks for a route, for <JsonLd/> to render. */
export function schemaFor(route) {
  const conf = seo[route] || seo['404']
  return conf.schema || []
}
