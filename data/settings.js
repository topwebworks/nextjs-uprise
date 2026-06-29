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
    name:       "Uprise Pools",
    legalName:  "Uprise Pools LLC",
    phone:      "+1-480-579-9301",
    email:      "uprisepools@gmail.com",
    url:        "https://www.uprisepools.com",

    address: {
      street:  "250 W Juniper Ave #95",
      city:    "Gilbert",
      state:   "AZ",
      zip:     "85233",
      country: "US",
    },

    licenseNumbers: ["ROC 340539", "ROC 347588"],

    businessType: "HomeAndConstructionBusiness",
  },

  tagline: "Better Than Before.",

  industry: "pools",

  // ─── Services ───────────────────────────────────────────────────────────────
  // Drives: header nav dropdown, footer services column, sitemap
  // ponytail: placeholder services — update with actual Uprise Pools offerings
  services: [
    { slug: "pool-repair-maintenance",    navLabel: "Pool Repair",   label: "Pool Repair & Maintenance",    href: "/services/pool-repair-maintenance"    },
    { slug: "pool-resurfacing-renovation",navLabel: "Resurfacing",   label: "Pool Resurfacing & Renovation",href: "/services/pool-resurfacing-renovation"},
    { slug: "deck-repair-resurfacing",    navLabel: "Deck Repair",   label: "Deck Repair & Resurfacing",    href: "/services/deck-repair-resurfacing"    },
    { slug: "equipment-install-repair",   navLabel: "Equipment",     label: "Equipment Install & Repair",   href: "/services/equipment-install-repair"   },
  ],

  // ─── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  "",
    instagram: "https://www.instagram.com/uprisepoolsaz",
    yelp:      "https://www.yelp.com/biz/uprise-pools-gilbert",
    linkedin:  "",
    twitter:   "",
    youtube:   "",
  },

  // ─── Logos ──────────────────────────────────────────────────────────────────
  // logoDark:  shown on transparent/dark nav (hero state) — use reversed/white version
  // logoLight: shown on scrolled/white nav (sticky state) — use standard/dark version
  // Both should be SVG at roughly 3:1 aspect ratio (e.g. 219×73)
  logos: {
    dark:  "/assets/tww-assets/client-images/MainLogo+-+Uprise-1920w.webp",
    light: "/assets/tww-assets/client-images/MainLogo+-+Uprise-1920w.webp",
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
