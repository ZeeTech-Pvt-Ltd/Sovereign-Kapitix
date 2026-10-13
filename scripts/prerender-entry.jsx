// Build-time SSG entry - rendered by `vite build --ssr`, then executed by
// build.mjs in Node. For each route it renders the exact same React tree the
// client would produce (renderRoute from src/renderRoute.jsx) to static
// markup, so the baked HTML hydrates without mismatches. renderRoute
// deliberately bypasses <App/> (which reads location.pathname during render -
// impossible in Node).
import { renderToString } from 'react-dom/server'
import { renderRoute } from '../src/renderRoute.jsx'

// Every route that needs baked HTML. This list and the OUTPUT map in build.mjs
// both have to name a route for it to be written; a route in OUTPUT but not
// here renders as the string "undefined" inside #root, which build.mjs now
// refuses to write (see the guard there). Add new routes to both.
const ROUTES = [
  'home',
  'about',
  'contact',
  'terms',
  'privacy',
  'disclosure',
  'thank-you',
  'faq',
  'how-it-works',
  'sovereign-kapitix-review',
  'register',
  '404',
]

export default function prerender() {
  const pages = {}
  for (const route of ROUTES) {
    pages[route] = renderToString(renderRoute(route))
  }
  return pages
}
