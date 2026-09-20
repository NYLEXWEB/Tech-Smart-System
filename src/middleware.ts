import { NextResponse, type NextRequest } from "next/server";

/**
 * Edge Middleware for Canonical Domain, WWW Redirect & HTTPS Enforcement.
 * 
 * Canonical URL: https://techsmartsystems.co.in
 * Redirects:
 * - http://techsmartsystems.co.in -> 301 -> https://techsmartsystems.co.in
 * - http://www.techsmartsystems.co.in -> 301 -> https://techsmartsystems.co.in
 * - https://www.techsmartsystems.co.in -> 301 -> https://techsmartsystems.co.in
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const { pathname, search } = request.nextUrl;

  // Ignore localhost and preview environments during local development
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("::1");

  if (!isLocalhost) {
    const isWww = host.startsWith("www.");
    const isHttp = proto === "http";

    if (isWww || isHttp) {
      const canonicalHost = "techsmartsystems.co.in";
      const redirectUrl = `https://${canonicalHost}${pathname}${search}`;
      
      return NextResponse.redirect(redirectUrl, {
        status: 301,
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
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
