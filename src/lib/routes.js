// =========================================================
// URL -> route resolution
// =========================================================
// Lifted out of src/App.jsx unchanged when routing moved to the Next.js App
// Router. The tables stay here rather than inside the client component so the
// file exporting components exports only components.
//
// Under Next the section below about vercel.json no longer applies: those 301s
// now live in next.config.mjs, and because they are answered before the app
// runs, a stale URL never reaches getRoute at all. The map is kept anyway -
// it costs nothing and it still resolves a legacy path if one is ever pushed
// from the client.
// =========================================================

export const KNOWN_ROUTES = ['about', 'contact', 'terms', 'privacy', 'disclosure', 'thank-you', 'faq', 'how-it-works', 'fees', 'sovereign-kapitix-review', 'register']

// Pages that were removed. Any stale link - a bookmark, an old search result,
// or an older URL - now resolves to the homepage.
//   /why-invest - superseded by the how-it-works page
//   /app        - retired content
//
// /how-it-works and the review page used to live here too, removed for being thin
// restatements of a homepage section. Both are real pages again, so they must
// stay OUT of this map: anything listed here is rewritten to "/" before the
// router ever sees it, and the page would be unreachable no matter what else
// is wired up. next.config.mjs carries the matching 301s, which have to be
// deleted for the same reason.
export const REMOVED_PAGES = { '/why-invest': '/', '/app': '/' }

// Older paths that resolve to the page that replaced them.
//   /How-It-Works - the old casing; the page exists again under the lowercase
//                   slug rather than redirecting home.
//   /review       - the route shipped briefly under this short slug. The live
//                   slug is the brand-qualified one, so a link saved in that
//                   window still lands on the page instead of the 404.
//   /login        - replaced by /register, per the operator's register brief:
//                   "Replaces /login. Set a 301 redirect from /login to
//                   /register." A sign-in page is not being built.
export const LEGACY_PATHS = {
  '/How-It-Works': '/how-it-works',
  '/review': '/sovereign-kapitix-review',
  '/login': '/register',
}

/**
 * @param {string} path a pathname, e.g. '/about'
 * @returns {string} a route key, e.g. 'about', or 'home' / '404'
 */
export function getRoute(path = '/') {
  const clean = String(path).split('?')[0].replace(/\/+$/, '')
  if (!clean || clean === '/') return 'home'
  if (REMOVED_PAGES[clean]) return 'home'
  const first = LEGACY_PATHS[clean] ? LEGACY_PATHS[clean].slice(1) : clean.slice(1)
  return KNOWN_ROUTES.includes(first) ? first : '404'
}
