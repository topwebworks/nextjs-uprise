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
        // All unused base Bootstrap theme routes
        "/bold-",
        "/brutalist-",
        "/corporate-",
        "/elegant-",
        "/fancy-",
        "/gradient-",
        "/main-",
        "/modern-",
        "/slick-",
        "/strong-",
      ],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
