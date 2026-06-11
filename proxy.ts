import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const b1Session = request.cookies.get('B1SESSION')
  const { pathname } = request.nextUrl

  // Allow access to login page and the login API
  if (pathname === '/login' || pathname === '/api/sap/Login') {
    if (b1Session && pathname === '/login') {
      // If already logged in, redirect to dashboard
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }

  // Protect all other routes
  if (!b1Session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
