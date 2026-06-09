# Brand System Build Plan

## Status
| Phase | Description | Status |
|---|---|---|
| Phase 1 | Core color variables | ✅ Complete |
| Top Bar | Color sliver + announcement bar with fade/dismiss | ✅ Complete |
| Phase 2 | Nav / footer colors | ✅ Complete |
| Phase 3 | Hero overlay tint | ✅ Complete |
| Phase 4 | Typography / font swap | Pending |

## Goal
Make every cloned TWW site feel distinctly branded with minimal per-clone effort.
One file to edit (`data/brand.js`) and one CSS override file (`public/assets/css/brand.css`).

---

## How It Works

**`data/brand.js`** — single source of truth for brand values (hex colors, font names).
No code reads this at runtime. It exists as reference and is the source for the CSS below.

**`public/assets/css/brand.css`** — one `:root {}` block that overrides the theme's CSS variables.
Loaded last in `styles.css` so it wins over `style.css`, `bootstrap.min.css`, and `custom.css`.

The theme already defines everything via CSS variables in `style.css` lines 169–270.
Bootstrap defines its own variables in `bootstrap.min.css` lines 7+.
We override both in one place — no digging through vendor files.

---

## CSS Load Order (styles.css)

```
bootstrap.min.css   ← Bootstrap variables + components
style.css           ← Theme variables (:root line 169) + all components
owl.carousel.css
splitting.css
custom.css          ← TWW structural overrides
style-responsive.css
brand.css           ← CLIENT BRAND OVERRIDES (added last = wins)
```

---

## Phase 1 — Core Color Variables (build first)

The minimum set that makes two clones look like different brands.

### Theme variables to override (`style.css :root`)

| Variable | What it affects | Example |
|---|---|---|
| `--color-primary-1` | Buttons, links, icon accents, feature numbers | `#e05c1a` |
| `--color-primary-1-a` | Hover state of primary (darken by ~10%) | `#c44d14` |
| `--color-primary-light-1` | Light tint backgrounds, badge fills | `#fdeee4` |
| `--color-primary-light-1-a` | Slightly deeper light tint | `#f8cdb0` |
| `--font-global` | Body + UI font (matches Google Font import) | `"Nunito", sans-serif` |
| `--font-alt` | Alt font used in some headings/labels | `"Nunito", sans-serif` |

> Note: `--color-primary-2` through `--color-primary-4` and the gradient variables are used
> by the multi-color gradient effects in the demo. For SMB clients using a single brand color,
> these can all be set to the same primary to neutralize the rainbow gradient.

### Bootstrap variables to override (`bootstrap.min.css :root`)

| Variable | What it affects |
|---|---|
| `--bs-primary` | Bootstrap `.btn-primary`, `.text-primary`, `.bg-primary` utilities |
| `--bs-primary-rgb` | RGB version needed for Bootstrap's rgba() usage |
| `--bs-link-color` | Default link color |
| `--bs-link-hover-color` | Default link hover |
| `--bs-body-font-family` | Bootstrap body font (separate from theme `--font-global`) |

---

## Phase 2 — Header & Footer Colors (add after Phase 1 is working)

The nav and footer are dark by default. Some brands want a colored or light header.

| What | CSS target | Notes |
|---|---|---|
| Nav background | `.main-nav` background color | Default is dark/transparent |
| Nav link color | `.inner-nav > ul > li > a` color | Default white on dark |
| Footer background | `.footer-1` or `.dark-1` bg | Usually matches nav |
| Footer text/links | `.footer-1 a`, `.footer-1 p` | |

These are class-based overrides, not variables — section in `brand.css` below the `:root` block.

---

## Phase 3 — Hero Overlay Tint (add after Phase 2)

The dark hero overlay color is hardcoded in some places. Branding it to a color tint
makes the hero feel on-brand rather than generic dark.

| What | How |
|---|---|
| Main hero overlay | `.home-section:before` background — override with brand color + opacity |
| Service hero overlay | `.tww-service-hero:before` — currently hardcoded `#111` in `custom.css` |
| Section dark backgrounds | `.bg-dark-1`, `.bg-dark-2` — can override with brand dark |

---

## Phase 4 — Typography Scale (optional, high-impact)

Font choice is the fastest way to change personality.

- Google Font is loaded in `app/layout.js` via `next/font/google`
- Currently: `DM_Sans` + `Poppins` imported; `DM Sans` applied via `--font-global`
- To swap: add new font import in `layout.js`, update `--font-global` / `--font-alt` in `brand.css`
- No need to touch `style.css` or Bootstrap

Font personality shortcuts for SMB verticals:
| Feel | Heading | Body |
|---|---|---|
| Clean / modern | Inter | Inter |
| Warm / friendly | Nunito | Nunito |
| Professional / trust | Lato | Lato |
| Bold / contractor | Oswald | Open Sans |
| Upscale / luxury | Cormorant Garamond | Lato |

---

## Implementation Plan

### Step 1 — Create `public/assets/css/brand.css`

```css
/* ─── BRAND OVERRIDES ───────────────────────────────────────────────────────
   Edit this file per client. See data/brand.js for the source color values.
   Load order: this file is last in styles.css — overrides win automatically.
─────────────────────────────────────────────────────────────────────────── */

:root {
  /* Primary brand color */
  --color-primary-1:        #4567ed;   /* replace with client primary */
  --color-primary-1-a:      #375ae3;   /* darken primary ~10% for hover */
  --color-primary-light-1:  #e3effe;   /* lighten primary ~85% */
  --color-primary-light-1-a:#bcd1f1;   /* lighten primary ~70% */

  /* Neutralize multi-color gradients → use single brand color */
  --color-primary-2:        #4567ed;
  --color-primary-3:        #4567ed;
  --color-primary-4:        #4567ed;

  /* Fonts — must match next/font/google import in layout.js */
  --font-global: "DM Sans", sans-serif;
  --font-alt:    "DM Sans", sans-serif;

  /* Bootstrap overrides */
  --bs-primary:           #4567ed;
  --bs-primary-rgb:       69, 103, 237;
  --bs-link-color:        #4567ed;
  --bs-link-hover-color:  #375ae3;
}

/* Phase 2: nav/footer color overrides go here */

/* Phase 3: hero overlay overrides go here */
```

### Step 2 — Add `brand.js` to `data/`

```js
const brand = {
  primary:       "#4567ed",
  primaryHover:  "#375ae3",
  primaryLight:  "#e3effe",
  primaryLightB: "#bcd1f1",
  fontHeading:   "DM Sans",
  fontBody:      "DM Sans",
};

export default brand;
```

### Step 3 — Wire into `styles.css`

Add `@import "./brand.css";` as the last line in `styles.css`.

### Step 4 — Update `CLAUDE.md`

Add `data/brand.js` and `public/assets/css/brand.css` to the key config files table.

---

## Per-Clone Workflow (after this is built)

1. Copy folder → `nextjs-clientname`
2. Open `data/brand.js` → update color hex values + font names
3. Copy the hex values into `public/assets/css/brand.css` `:root` block
4. If changing fonts: add import in `app/layout.js`, update font names in `brand.css`
5. Done — the rest of the site inherits the brand automatically

---

## What This Does NOT Cover

- Logo (swap image files manually — no automation needed)
- Photography / hero images (swap per client as always)
- Section copy and content (per-client as always)
- Custom component styling beyond the variables above
