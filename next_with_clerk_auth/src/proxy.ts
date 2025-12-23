
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/contact',
    '/api/webhook/clerk',
    '/api/webhooks(.*)',
  '/sign-in(.*)', 
  '/sign-up(.*)'
])
const isProfileRoute = createRouteMatcher([
  '/profile(.*)'
])
const isAdminRoute = createRouteMatcher([
  '/dashboard(.*)'
])
export default clerkMiddleware(async (auth, req) => {
  // Public routes → no auth needed
  if (isPublicRoute(req)) return

   // 🔐 Require authentication for everything else

 const { sessionClaims } = await auth.protect()
  const userRole = sessionClaims?.userRole as string | undefined

  console.log('ROLE:', userRole)

  // Dashboard: Only admin role
  if (isAdminRoute(req) && userRole !== 'admin') {
    return Response.redirect(new URL('/unauthorized', req.url))
  }
    if (isProfileRoute(req)) return
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};