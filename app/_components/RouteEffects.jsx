'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import useReveal from '../../src/hooks/useReveal.js'
import { getRoute, REMOVED_PAGES, LEGACY_PATHS } from '../../src/lib/routes.js'

// The client half of what src/App.jsx used to do: scroll-reveal, the "#/about"
// hash migration, and the global anchor handler.
//
// It renders nothing. Routing itself is the App Router's job now, so what is
// left is the behaviour Next has no opinion about - chiefly that section
// anchors must scroll in place and keep the URL bar clean (no "#" fragment),
// and that a target is reachable if it is on the page the visitor is already
// on OR on the homepage. That second rule is decided by whether the element
// exists, not by the route name: the jump menus on /faq and /how-it-works link
// to ids on their own page, and the older route-name test sent every anchor
// click home first, where those ids do not exist, so the links did nothing.
export default function RouteEffects() {
  const pathname = usePathname()
  const router = useRouter()
  const route = getRoute(pathname)

  useReveal(route)

  // Migrate old "#/about"-style links (shared before clean URLs) to clean paths.
  useEffect(() => {
    const h = window.location.hash
    if (h.startsWith('#/')) {
      const p = h.slice(2).split('?')[0]
      router.replace(p || '/')
    }
  }, [router])

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

      // Scroll links come in two shapes: a clean "/" href plus a data-scroll
      // target, and a plain "#id". Both resolve the same way.
      const scrollTo = a.getAttribute('data-scroll') || (href.startsWith('#') ? href : null)
      if (scrollTo) {
        e.preventDefault()
        const doScroll = () => {
          if (scrollTo === '#top') window.scrollTo(0, 0)
          else document.querySelector(scrollTo)?.scrollIntoView()
        }
        // On the page already, or the target exists here: scroll in place.
        if (route === 'home' || document.querySelector(scrollTo)) {
          doScroll()
        } else {
          // Only on the homepage. scroll:false keeps Next from scrolling to the
          // top and then fighting the anchor scroll below.
          router.push('/', { scroll: false })
          setTimeout(doScroll, 150)
        }
        return
      }

      if (/^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) return

      if (href.startsWith('/')) {
        // Stale links to removed pages (/why-invest, /app) go home; legacy
        // slugs go to the page that replaced them.
        const cleanHref = href.split('?')[0].replace(/\/+$/, '')
        const target = REMOVED_PAGES[cleanHref] || LEGACY_PATHS[cleanHref] || href
        const next = getRoute(target)

        e.preventDefault()
        if (next === route) {
          // Same page - just scroll to top, no navigation.
          window.scrollTo(0, 0)
          return
        }
        router.push(target)
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [route, router])

  return null
}
