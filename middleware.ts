import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

// List of public routes that don't require authentication
const publicRoutes = [
  '/',
  '/about',
  '/contact',
  '/products',
  '/auth/signin',
  '/auth/signup',
  '/auth/forgot-password',
  '/auth/error',
  '/api/auth/[...nextauth]',
];

// List of admin routes that require admin role
const adminRoutes = [
  '/admin',
  '/api/admin',
];

// List of authenticated routes that require any authenticated user
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/settings',
  '/api/secure',
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const res = NextResponse.next();
  
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });
  
  // Get the session
  const { data: { session } } = await supabase.auth.getSession();
  
  // Check if the route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  // Allow access to public routes
  if (isPublicRoute) {
    return res;
  }

  // Check if the user is trying to access an admin route
  const isAdminRoute = adminRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isAdminRoute) {
    // If user is not authenticated, redirect to sign-in
    if (!session) {
      const url = new URL('/auth/signin', req.url);
      url.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(url);
    }

    // If user is not an admin, show 403
    if (session.user?.user_metadata?.role !== 'admin') {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isProtectedRoute && !session) {
    const url = new URL('/auth/signin', req.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public folder
    '/((?!api|_next/static|_next/image|favicon.ico|auth/.*).*)',
  ],
};
