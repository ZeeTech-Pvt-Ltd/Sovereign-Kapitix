import { useEffect, useState } from 'react'
import useReveal from './hooks/useReveal.js'
import { renderRoute } from './renderRoute.jsx'

// Clean-path routing: "/" -> home, "/about" -> About, anything unknown -> 404.
// Fragment anchors like "#register" keep working as in-page scroll links.
const KNOWN_ROUTES = ['about', 'contact', 'terms', 'privacy', 'disclosure', 'thank-you', 'faq', 'how-it-works', 'sovereign-kapitix-review', 'register']

// Pages that were removed. Any stale link - a bookmark, an old search result,
// or an older URL - now resolves to the homepage.
//   /why-invest - superseded by the how-it-works page
//   /app        - retired content
//
// /how-it-works and the review page used to live here too, removed for being thin
// restatements of a homepage section. Both are real pages again, so they must
// stay OUT of this map: anything listed here is rewritten to "/" before the
// router ever sees it, and the page would be unreachable no matter what else
// is wired up. vercel.json carries the matching 301s, which have to be deleted
// for the same reason.
const REMOVED_PAGES = { '/why-invest': '/', '/app': '/' }

// Older paths that resolve to the page that replaced them.
//   /How-It-Works - the old casing; the page exists again under the lowercase
//                   slug rather than redirecting home.
//   /review       - the route shipped briefly under this short slug. The live
//                   slug is the brand-qualified one, so a link saved in that
//                   window still lands on the page instead of the 404.
const LEGACY_PATHS = { '/How-It-Works': '/how-it-works', '/review': '/sovereign-kapitix-review' }

const getRoute = (path = location.pathname) => {
  const clean = path.split('?')[0].replace(/\/+$/, '')
  if (!clean || clean === '/') return 'home'
  if (REMOVED_PAGES[clean]) return 'home'
  const first = LEGACY_PATHS[clean] ? LEGACY_PATHS[clean].slice(1) : clean.slice(1)
  return KNOWN_ROUTES.includes(first) ? first : '404'
}

export default function App() {
  const [route, setRoute] = useState(getRoute)
  useReveal(route)

  // Migrate old "#/about"-style links (shared before clean URLs) to clean paths.
  useEffect(() => {
    const h = location.hash
    if (h.startsWith('#/')) {
      const p = h.slice(2).split('?')[0]
      history.replaceState(null, '', p || '/')
      setRoute(getRoute())
    }
  }, [])

  // Legacy case-variants and removed pages rewrite the URL bar on load (and on
  // direct visits), so a stale /how-it-works or /How-It-Works link ends on "/".
  useEffect(() => {
    const clean = location.pathname.replace(/\/+$/, '')
    const target = LEGACY_PATHS[clean] || REMOVED_PAGES[clean]
    if (target) {
      history.replaceState(null, '', target)
      setRoute(getRoute())
    }
  }, [])

  // Back/forward navigation between clean paths (pushState entries).
  useEffect(() => {
    const onPop = () => {
      const next = getRoute()
      setRoute(next)
      if (next !== 'home') window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // SPA link handling: "/about"-style links navigate without a page reload;
  // section anchors (#register, #how…) scroll on the current page but keep the
  // URL clean - no "#" fragment appears. On route pages they go home first,
  // since those sections only exist on home.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return

      // A bare "#" is a deliberate no-op: keep the URL clean instead of letting
      // the browser jump to the top. Nothing on the site uses one right now -
      // the footer socials that did have been removed - but the guard stays so
      // a future placeholder does not yank the page to the top on click.
      if (href === '#') {
        e.preventDefault()
        return
      }

      // In-page scroll links carry a clean "/" href (so the URL bar and the
      // hover preview stay hash-free) plus a data-scroll target. On route
      // pages they go home first, since those sections only exist on home.
      const scrollTo = a.getAttribute('data-scroll')
      if (scrollTo) {
        e.preventDefault()
        const doScroll = () => {
          if (scrollTo === '#top') window.scrollTo(0, 0)
          else document.querySelector(scrollTo)?.scrollIntoView()
        }
        if (route === 'home') doScroll()
        else {
          history.pushState(null, '', '/')
          setRoute('home')
          setTimeout(doScroll, 100)
        }
        return
      }

      if (href.startsWith('#')) {
        e.preventDefault()
        const doScroll = () => {
          if (href === '#top') window.scrollTo(0, 0)
          else document.querySelector(href)?.scrollIntoView()
        }
        if (route === 'home') doScroll()
        else {
          history.pushState(null, '', '/')
          setRoute('home')
          setTimeout(doScroll, 100)
        }
        return
      }

      if (/^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) return

      if (href.startsWith('/')) {
        // Stale links to removed pages (/how-it-works, /why-invest) go home.
        const cleanHref = href.split('?')[0].replace(/\/+$/, '')
        const target = REMOVED_PAGES[cleanHref] || href
        const next = getRoute(target)
        if (next === route) {
          // Same page - just scroll to top, no reload.
          e.preventDefault()
          window.scrollTo(0, 0)
          return
        }
        e.preventDefault()
        history.pushState(null, '', target)
        setRoute(next)
        window.scrollTo(0, 0)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [route])

  return renderRoute(route)
}
