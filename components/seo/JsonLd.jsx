// LocalBusiness JSON-LD schema — injected on every page via root layout.
// Covers all structured data signals Google uses for local pack ranking:
// areaServed, geo, openingHours, priceRange, hasMap, makesOffer, aggregateRating.
import site from "@/data/site";

const TARGET_CITIES = [
  "Client City, AZ",
  "Client City, AZ",
  "Mesa, AZ",
  "Gilbert, AZ",
  "Chandler, AZ",
  "Apache Junction, AZ",
  "Maricopa, AZ",
  "Florence, AZ",
  "Gold Canyon, AZ",
  "Higley, AZ",
  "Coolidge, AZ",
];

const SERVICES = [
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Paver Installation",
      description:
        "Travertine, concrete pavers, flagstone, and porcelain installation for driveways, patios, pool decks, and walkways.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Concrete Work",
      description:
        "Concrete driveways, patio slabs, RV pads, driveway extensions, repairs, and full replacement.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Artificial Turf & Natural Sod Installation",
      description:
        "Artificial turf and natural sod installation for backyards, front yards, pet runs, and play areas.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Decorative Rock Installation",
      description:
        "Decorative rock, decomposed granite, and accent boulder installation with proper site prep, barrier, and edging.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Demolition & Removal",
      description:
        "Concrete, paver, turf, and rock demolition and removal with full haul and disposal.",
    },
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Driveway Additions",
      description:
        "Driveway widening, parking pads, RV pads, and turnarounds for residential properties.",
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
    logo: `${site.url}/assets/images/og-default.jpg`,
    description:
      "Client Business Name is a licensed hardscape contractor serving Client City, Client City, Mesa, Gilbert, Chandler, Apache Junction, and the Service Area. Specializing in paver installation, concrete work, artificial turf, decorative rock, demolition & removal, and driveway additions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.1914,
      longitude: -111.5390,
    },
    hasMap: "https://www.google.com/maps/search/Client+Hardscape+Solutions+San+Tan+Valley+AZ",
    areaServed: TARGET_CITIES.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    makesOffer: SERVICES,
    sameAs: Object.values(site.social).filter(Boolean),
    slogan: "Licensed hardscape contractor for the Service Area.",
    knowsAbout: [
      "paver installation",
      "concrete work",
      "artificial turf installation",
      "decorative rock installation",
      "hardscape contractor",
      "driveway additions",
      "demolition and removal",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
