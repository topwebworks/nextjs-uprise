// buildMetadata — generates a full Next.js metadata object for any page.
// Usage in a page file:
//   export const metadata = buildMetadata({
//     title: "Services",
//     description: "We offer ...",
//     path: "/services",
//   });

import site from "@/data/site";

export function buildMetadata({ title, description, path = "", image }) {
  const url = `${site.url}${path}`;
  const ogImage = image
    ? `${site.url}${image}`
    : `${site.url}${site.ogImage}`;

  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage],
    },
  };
}
