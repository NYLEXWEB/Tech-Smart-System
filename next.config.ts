import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce consistent non-trailing-slash canonical URLs
  trailingSlash: false,
  
  // Power header disabled for security
  poweredByHeader: false,

  // Image optimization settings
  images: {
    unoptimized: true,
  },

  // Security headers to enforce HTTPS, HSTS, and protection
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

};

export default nextConfig;
