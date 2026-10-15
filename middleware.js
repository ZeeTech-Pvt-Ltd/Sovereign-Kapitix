import { NextResponse } from 'next/server'

// The /How-It-Works casing redirect.
//
// It cannot live in next.config.mjs with the others. Next matches a redirect
// source case-insensitively, so `source: '/How-It-Works'` ALSO matched the real
// /how-it-works route and pointed it at itself - an infinite 308 loop that took
// the page down. Naming the path as a regex pattern did not help either; the
// pattern is matched case-insensitively too. Only an exact string comparison
// can tell the two apart, and middleware is the place that runs.
//
// The matcher keeps this off every other request.
export function middleware(request) {
  if (request.nextUrl.pathname === '/How-It-Works') {
    return NextResponse.redirect(new URL('/how-it-works', request.url), 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/How-It-Works',
}
