import { NextResponse, type NextRequest } from "next/server";

/**
 * Edge Middleware for Canonical Domain, WWW Redirect & HTTPS Enforcement.
 * 
 * Canonical URL: https://www.techsmartsystems.co.in
 * Redirects:
 * - http://techsmartsystems.co.in -> 301 -> https://www.techsmartsystems.co.in
 * - https://techsmartsystems.co.in -> 301 -> https://www.techsmartsystems.co.in
 * - http://www.techsmartsystems.co.in -> 301 -> https://www.techsmartsystems.co.in
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const { pathname, search } = request.nextUrl;

  // Ignore localhost and preview environments during local development
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("::1");

  if (!isLocalhost) {
    const isApex = host === "techsmartsystems.co.in";
    const isHttp = proto === "http";

    if (isApex || isHttp) {
      const canonicalHost = "www.techsmartsystems.co.in";
      const redirectUrl = `https://${canonicalHost}${pathname}${search}`;
      
      return NextResponse.redirect(redirectUrl, {
        status: 301,
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (static image assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
