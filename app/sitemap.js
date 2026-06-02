import site from "@/data/site";
import { getAllPosts } from "@/lib/blog";

// Next.js generates /sitemap.xml from this file automatically.
//
// STATIC routes: main pages and service pages only.
// Legal pages, thank-you, 404, and error pages are intentionally excluded —
// they have no SEO value and add crawl budget waste.
//
// DYNAMIC routes: blog posts are fetched and appended when the blog is active.
// To enable: uncomment the blog section below and wire to your data source.

const staticRoutes = [
  { url: "/",                            priority: 1.0,  changeFrequency: "weekly"  },
  { url: "/about",                       priority: 0.8,  changeFrequency: "monthly" },
  { url: "/support",                     priority: 0.8,  changeFrequency: "monthly" },
  { url: "/services",                    priority: 0.9,  changeFrequency: "monthly" },
  { url: "/services/paver-installation", priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/concrete",      priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/artificial-turf",    priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/decorative-rock",    priority: 0.85, changeFrequency: "monthly" },
  { url: "/services/demolition",       priority: 0.8,  changeFrequency: "monthly" },
  { url: "/services/driveways", priority: 0.8,  changeFrequency: "monthly" },
];

export default async function sitemap() {
  const static_ = staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${site.url}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const posts = getAllPosts();
  const blogIndex = posts.length > 0
    ? [{ url: `${site.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 }]
    : [];
  const blogRoutes = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...static_, ...blogIndex, ...blogRoutes];
}
