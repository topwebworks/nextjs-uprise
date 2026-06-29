// LocalBusiness JSON-LD schema — injected on every page via root layout.
// Covers all structured data signals Google uses for local pack ranking:
// areaServed, geo, openingHours, priceRange, hasMap, makesOffer, aggregateRating.
import site from "@/data/site";

const TARGET_CITIES = [
  "Gilbert, AZ",
  "Mesa, AZ",
  "Tempe, AZ",
  "Chandler, AZ",
  "Ahwatukee, AZ",
  "Paradise Valley, AZ",
  "Scottsdale, AZ",
];

const SERVICES = [
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Pool Repair & Maintenance",
      description:
        "Leak detection, plaster and structural crack repair, bond beam repair, and plumbing repair for residential pools.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Pool Resurfacing & Renovation",
      description:
        "Pebble, plaster, and aggregate resurfacing, plus waterline tile, coping, and feature additions during renovation.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Deck Repair & Resurfacing",
      description:
        "Pool deck crack repair, travertine and paver deck replacement, and pool-rated resurfacing overlays.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Equipment Install & Repair",
      description:
        "Pump, filter, and heater diagnosis, repair, and replacement, plus equipment pad rebuilds and replumbing.",
    },
  },
];

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    image: `${site.url}${site.ogImage}`,
    logo: `${site.url}${site.logoLight}`,
    description:
      "Uprise Pools is a licensed pool repair and resurfacing contractor serving Gilbert, Mesa, Tempe, Chandler, Ahwatukee, Paradise Valley, Scottsdale, and Queen Creek, AZ. Specializing in pool repair, resurfacing & renovation, deck repair & resurfacing, and equipment install & repair.",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.3528,
      longitude: -111.7890,
    },
    hasMap: "https://www.google.com/maps/search/Uprise+Pools+Gilbert+AZ",
    areaServed: TARGET_CITIES.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    makesOffer: SERVICES,
    sameAs: Object.values(site.social).filter(Boolean),
    slogan: site.tagline,
    knowsAbout: [
      "pool repair",
      "pool resurfacing",
      "pool renovation",
      "pool deck repair",
      "pool equipment repair",
      "pool leak detection",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
