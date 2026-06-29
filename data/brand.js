/**
 * TWW Brand Config — fill this in when cloning for a new client.
 *
 * These values are the source of truth for the brand palette.
 * After editing, copy the hex values into public/assets/css/brand.css.
 *
 * Color derivation tips:
 *   primaryHover  — use a color picker and darken primary ~10%
 *   primaryLight  — lighten primary to ~85% (near white with a hue tint)
 *   primaryLightB — lighten primary to ~70% (slightly deeper tint)
 *   primaryRgb    — RGB triplet of primary, used for Bootstrap rgba() calls
 *                   e.g. "#4567ed" → "69, 103, 237"
 *
 * Font notes:
 *   Must match the next/font/google import in app/layout.js.
 *   If changing fonts, update layout.js AND brand.css together.
 *
 * Font personality shortcuts for SMB verticals:
 *   Clean / modern      → "Inter"
 *   Warm / friendly     → "Nunito"
 *   Professional / trust→ "Lato"
 *   Bold / contractor   → heading: "Oswald", body: "Open Sans"
 *   Upscale / luxury    → heading: "Cormorant Garamond", body: "Lato"
 */

const brand = {

  // ─── Colors ─────────────────────────────────────────────────────────────
  primary:       "#f18553",   // → --color-primary-1, --bs-primary, --bs-link-color
  primaryHover:  "#d4622c",   // → --color-primary-1-a, --bs-link-hover-color (darken ~15%)
  primaryLight:  "#fdeee5",   // → --color-primary-light-1  (lighten ~85%)
  primaryLightB: "#fbdacb",   // → --color-primary-light-1-a (lighten ~70%)
  primaryRgb:    "241, 133, 83", // → --bs-primary-rgb (keep in sync with primary)
  primaryDark:       "#c05020",   // → --brand-dark      (saturated deep orange)
  primaryVeryDark:   "#7c2d00",   // → --brand-very-dark (near-black orange)

  // Overlay base: near-black version of primary hue.
  // Update hex AND overlayBaseRgb together — both are used in brand.css.
  overlayBase:       "#1a0800",        // → --brand-overlay-base, hex
  overlayBaseRgb:    "26, 8, 0",       // → --overlay-dark-rgb (RGB triplet of overlayBase)

  // ─── Overlays ────────────────────────────────────────────────────────────
  // All dark overlays derive from overlayBaseRgb — change that one value to retint all.
  overlayLight:      "rgba(253, 238, 229, 0.55)",  // → --overlay-light
  overlayLightSoft:  "rgba(253, 238, 229, 0.30)",  // → --overlay-light-soft
  // overlayDark and overlayDarkSoft are generated from --overlay-dark-rgb in brand.css
  // Only update overlayBase/overlayBaseRgb above — no need to touch these manually.

  // ─── Top Bar ─────────────────────────────────────────────────────────────
  // Leave empty [] for a 4px color sliver only.
  // Add 1–3 strings for a full announcement bar.
  // 1 item = static. 2–3 items = fade-cycles automatically.
  // Each item can be a plain string or an object { text, href } for a linked message.
  topBar: [
    "Free estimates — no obligation",
    { text: "Serving Gilbert, Mesa, Tempe, Chandler, Ahwatukee, Paradise Valley & Scottsdale", href: "/#contact-form" },
    "5-Star Rated on Yelp & Google",
  ],

  // Top bar colors — defaults to brand primary bg with white text.
  // Override if primary color has poor white contrast (e.g. yellow brands).
  topBarBg:   "",   // leave "" to use --color-primary-1
  topBarText: "",   // leave "" to use #fff

  // ─── Shape ──────────────────────────────────────────────────────────────
  // Controls cards, inputs, and most component corners sitewide.
  // 0px = sharp/industrial | 4px = slight (default) | 8px = modern rounded
  // 30px = pill (also update --border-radius-large for pill buttons)
  borderRadius:      "50px",  // → --border-radius-default
  borderRadiusLarge: "30px",  // → --border-radius-large (pill buttons, tags)

  // ─── Fonts ───────────────────────────────────────────────────────────────
  fontHeading: "Poppins",     // → --font-alt (headings / labels)
  fontBody:    "Poppins",     // → --font-global, --bs-body-font-family

};

export default brand;
