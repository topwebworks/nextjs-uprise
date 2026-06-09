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
  primary:       "#c277ff",   // → --color-primary-1, --bs-primary, --bs-link-color
  primaryHover:  "#a855f7",   // → --color-primary-1-a, --bs-link-hover-color (darken ~15%)
  primaryLight:  "#f5e8ff",   // → --color-primary-light-1  (lighten ~85%)
  primaryLightB: "#e9d0fe",   // → --color-primary-light-1-a (lighten ~70%)
  primaryRgb:    "194, 119, 255", // → --bs-primary-rgb (keep in sync with primary)
  primaryDark:       "#7c3aed",   // → --brand-dark      (saturated deep purple)
  primaryVeryDark:   "#4c1d95",   // → --brand-very-dark (near-black purple)

  // Overlay base: take primary hue, crush lightness to ~5–8%.
  // This ensures dark overlays are always dark regardless of how light the primary is.
  // e.g. yellow #ffcc00 → overlayBase "#1a1400"
  //      orange #ff6600 → overlayBase "#1a0800"
  //      purple #c277ff → overlayBase "#0e0518"
  //      blue   #4567ed → overlayBase "#04071a"
  // Overlay base: near-black version of primary hue.
  // Update hex AND overlayBaseRgb together — both are used in brand.css.
  overlayBase:       "#0e0518",        // → --brand-overlay-base, hex
  overlayBaseRgb:    "14, 5, 24",      // → --overlay-dark-rgb (RGB triplet of overlayBase)

  // ─── Overlays ────────────────────────────────────────────────────────────
  // All dark overlays derive from overlayBaseRgb — change that one value to retint all.
  overlayLight:      "rgba(245, 232, 255, 0.55)",  // → --overlay-light
  overlayLightSoft:  "rgba(245, 232, 255, 0.30)",  // → --overlay-light-soft
  // overlayDark and overlayDarkSoft are generated from --overlay-dark-rgb in brand.css
  // Only update overlayBase/overlayBaseRgb above — no need to touch these manually.

  // ─── Top Bar ─────────────────────────────────────────────────────────────
  // Leave empty [] for a 4px color sliver only.
  // Add 1–3 strings for a full announcement bar.
  // 1 item = static. 2–3 items = fade-cycles automatically.
  // Each item can be a plain string or an object { text, href } for a linked message.
  topBar: [],
  // topBar: [
  //   "Free estimates — no obligation",
  //   { text: "Serving Phoenix & surrounding areas", href: "/service-areas" },
  //   "Call us today: (000) 000-0000",
  // ],

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
  fontHeading: "DM Sans",     // → --font-alt (headings / labels)
  fontBody:    "DM Sans",     // → --font-global, --bs-body-font-family

};

export default brand;
