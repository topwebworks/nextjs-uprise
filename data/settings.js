/**
 * TWW Client Settings — fill this in when cloning for a new client.
 * This is the single source of truth for all client-specific data.
 *
 * After filling in:
 *   1. Add client logo + photos to public/assets/tww-assets/client-images/ (currently empty — tww-images/ has AI placeholders)
 *   2. Update app/sitemap.js route list to match actual pages
 *   3. Update service page content in app/services/
 *   4. Run: node scripts/purge-css.mjs --write
 */

const settings = {

  // ─── Company Info ───────────────────────────────────────────────────────────
  company: {
    name:       "Client Business Name",
    legalName:  "Client Business Name LLC",
    phone:      "+1-000-000-0000",
    email:      "hello@example.com",
    url:        "https://www.example.com",

    address: {
      street:  "",
      city:    "City",
      state:   "ST",
      zip:     "00000",
      country: "US",
    },

    // License/registration numbers — shown in footer, legal pages, schema
    // Set to [] if not applicable
    licenseNumbers: [],

    // Schema.org business type — see https://schema.org/LocalBusiness subtypes
    // Common: "HomeAndConstructionBusiness", "ProfessionalService", "HealthAndBeautyBusiness"
    businessType: "LocalBusiness",
  },

  // ─── Industry ───────────────────────────────────────────────────────────────
  // Used for content defaults and meta copy hints — not used in code logic,
  // just a reference for when you're writing page copy.
  // Examples: "pools", "hvac", "landscaping", "roofing", "dental", "legal"
  industry: "general",

  // ─── Services ───────────────────────────────────────────────────────────────
  // Drives: header nav dropdown, footer services column, sitemap
  services: [
    { slug: "service-1", label: "Service 1", href: "/services/service-1" },
    { slug: "service-2", label: "Service 2", href: "/services/service-2" },
    { slug: "service-3", label: "Service 3", href: "/services/service-3" },
  ],

  // ─── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  "",
    instagram: "",
    yelp:      "",
    linkedin:  "",
    twitter:   "",
    youtube:   "",
  },

  // ─── SEO / OG ───────────────────────────────────────────────────────────────
  ogImage: "/assets/images/og-default.jpg",

  // ─── GHL (TWW CRM) ──────────────────────────────────────────────────────────
  // GHL is internal language — use "TWW CRM" in all client-facing copy.
  //
  // Where to find IDs in GHL:
  //   Location ID:    Settings > Business Info
  //   Chat widget:    Sites > Chat Widget > embed code (data-widget-id)
  //   Form UUID:      Sites > Forms > [form] > Integrate > snippet URL param
  //   Calendar UUID:  Calendars > [calendar] > Integration > embed code
  //   Reviews widget: Reputation > Widget > embed code
  ghl: {
    locationId: "LOCATION_ID_PLACEHOLDER",

    chat: {
      widgetId: "CHAT_WIDGET_ID_PLACEHOLDER",
    },

    // Every form capturing a phone number must include GHL's SMS consent field
    forms: {
      contact:  "FORM_UUID_CONTACT_PLACEHOLDER",
      estimate: "FORM_UUID_ESTIMATE_PLACEHOLDER",
    },

    calendars: {
      main: "CALENDAR_UUID_PLACEHOLDER",
    },

    reviews: {
      widgetId: "REVIEWS_WIDGET_ID_PLACEHOLDER",
    },
  },

  // ─── Analytics ──────────────────────────────────────────────────────────────
  // GTM fires only after user accepts analytics cookies.
  // Configure GA4 inside GTM — do not load it directly.
  analytics: {
    gtmId: "GTM-XXXXXXX",
  },

};

export default settings;
