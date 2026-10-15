/** @type {import('next').NextConfig} */
const nextConfig = {
  // The redirects below are the six that lived in vercel.json, moved here so
  // they sit next to the routes they describe and are exercised by `next dev`
  // and `next start` rather than only on Vercel.
  //
  // Five of them mirror src/lib/routes.js. Anything in REMOVED_PAGES is
  // rewritten to "/" before a route can render, so a page listed there is
  // unreachable no matter what else is wired up - keep the two in step.
  async redirects() {
    return [
      // www to apex. The canonical URL in src/data/seo.js is the apex, so this
      // is what stops the two hosts competing in search.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sovereign-kapitix.net' }],
        destination: 'https://sovereign-kapitix.net/:path*',
        permanent: true,
      },
      // Was /How-It-Works - the old casing. NOT here: Next matches a redirect
      // source case-insensitively, so a rule naming the capitalised path also
      // caught the real /how-it-works route and looped it to itself. It lives
      // in middleware.js, which can compare the path exactly.

      // The review page shipped briefly under the short slug. The live slug is
      // the brand-qualified one, so a link saved in that window still lands.
      { source: '/review', destination: '/sovereign-kapitix-review', permanent: true },
      // Replaced by /register, per the operator's register brief: "Replaces
      // /login. Set a 301 redirect from /login to /register."
      { source: '/login', destination: '/register', permanent: true },
      // Retired pages. /why-invest was superseded by /how-it-works; /app was
      // retired content. Both resolve to the homepage.
      { source: '/why-invest', destination: '/', permanent: true },
      { source: '/app', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
