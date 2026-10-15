import { schemaFor } from '../../src/data/metadata.js'

// The route's structured data, one <script> per schema entry.
//
// JSON-LD has no Metadata API equivalent, so it has to be rendered. It uses
// dangerouslySetInnerHTML because React escapes `<` inside a normal <script>'s
// children, which would corrupt the JSON; the escape below is the same
// `<` substitution scripts/build.mjs used, kept so the bytes match what
// the old build wrote.
//
// This is a server component - the output is static per route, and shipping no
// JavaScript for it is the point.
export default function JsonLd({ route }) {
  return schemaFor(route).map((data, i) => (
    <script
      key={i}
      type="application/ld+json"
      data-seo-jsonld="true"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  ))
}
