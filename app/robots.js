import site from "@/data/site";

// Next.js generates /robots.txt from this file automatically.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/thank-you",
      ],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
