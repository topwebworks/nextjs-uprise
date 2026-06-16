/** @type {import('next').NextConfig} */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.youtube.com *.youtube-nocookie.com *.gohighlevel.com *.msgsndr.com",
  "frame-src *.youtube-nocookie.com *.youtube.com *.gohighlevel.com *.msgsndr.com",
  "img-src 'self' data: blob: *.youtube.com *.ytimg.com *.googleapis.com *.gstatic.com",
  "connect-src 'self' *.googletagmanager.com *.google-analytics.com *.gohighlevel.com *.msgsndr.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "media-src 'self' blob:",
].join("; ");

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: CSP,
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
