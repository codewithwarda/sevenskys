// Every script, style, font and image this site loads is self-hosted (Google
// fonts are downloaded at build time via next/font, not fetched from Google at
// runtime) — nothing here should need to reach a third-party domain. If you
// add something that does (an embed, a tracking pixel, a maps widget), you'll
// need to add its domain to the matching directive below or it will be
// silently blocked by the browser.
const contentSecurityPolicy = [
  "default-src 'self'",
  // 'unsafe-inline' is required for Next.js's own hydration scripts and the
  // JSON-LD structured data blocks this site renders; tightening this further
  // means moving to a nonce-based CSP, which needs to be tested against every
  // page before going live.
  "script-src 'self' 'unsafe-inline'",
  // Framer Motion and several components apply inline style attributes at
  // runtime, so style-src needs 'unsafe-inline' too.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  // The Contact page embeds a Google Maps iframe for the office location.
  "frame-src 'self' https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
