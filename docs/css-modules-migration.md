# CSS Modules Migration Plan
_Created: 2026-06-02_

## Goal
Move all inline `<style>` blocks and static `style={{}}` props out of JSX components
into co-located `.module.css` files. Result: cleaner components, no duplicate CSS,
better caching, no PurgeCSS needed for component styles.

## Ground Rules
- **No batch fixes** — one component at a time, systematic
- **Build check after every component** — if it breaks, stop and fix before continuing
- **Keep dynamic inline styles** — values computed at render time stay as `style={{}}`
- **One `.module.css` per component** — co-located next to the JSX file
- **Shared patterns get shared modules** — modal styles extracted once, imported many

---

## What Stays as Inline Style (Do Not Move)
These are dynamic — computed at render time — CSS Modules cannot handle them:
- `animationDelay: \`${i * 0.05}s\`` — staggered animation delays
- `transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)"` — state-driven
- `--char-index`, `--word-index`, `--word-total` — CSS custom properties set in JS
- `opacity: animating ? 0 : 1` — state-driven
- `data-wow-delay` — these are attributes not styles, already fine

---

## Phase 1 — Shared Modules (Biggest ROI)
Extract CSS that is duplicated across 6+ service files into shared modules.
Import into each service component after extraction.

### 1A — AMWModal.module.css
**Why first:** ~150 lines × 6 service files = 900 lines of duplicate CSS eliminated.
**Files that import it after:** AMWConcreteService, AMWDemolitionService,
AMWDrivewayService, AMWPaverService, AMWRockService, AMWTurfService

Rules to extract:
- `.amw-modal-backdrop`
- `.amw-modal`
- `.amw-modal-close`
- `.amw-modal-nav-btn`
- `.amw-modal-dot`
- `.amw-modal-img`
- `.amw-modal-body`
- All associated media queries

### 1B — AMWServiceTab.module.css
**Why:** Tab/service navigation styles repeated across service files.
Rules to extract:
- `.csvc-tabs-mobile` / `.psvc-tabs-mobile` pattern
- Service tab active states
- Mobile dropdown styles

---

## Phase 2 — Component Modules (Largest Files First)

### 2A — HeaderAMW.module.css
**Source:** Inline `<style>` block in `components/headers/HeaderAMW.jsx` (~183 lines)
**Classes to extract:**
- `.amw-logo` and all `.amw-logo-*` variants
- All responsive breakpoint overrides (1400px, 1280px, 1100px, 767px, 576px)
- `.small-height` scroll state variants
- Nav link text-shadow overrides
- Mobile nav overflow rules
**Dynamic styles to keep inline:**
- Chevron `transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)"`

### 2B — AMWHero.module.css
**Source:** `components/homes/amw/AMWHero.jsx` (~104 lines)
**Classes to extract:**
- `.amw-hero-video-wrap`
- `.amw-hero-video`
- `.amw-hero-poster`
- `.amw-hero-overlay`
- `.amw-hero-content`
- All pill/badge/CTA button styles
- Mobile breakpoints

### 2C — AMWGallery.module.css
**Source:** `components/homes/amw/AMWGallery.jsx` (~56 lines)
**Classes to extract:**
- `.amw-gallery-thumb` and hover state
- `.amw-shuffle` keyframe animation
- `.amw-filter-desktop` / `.amw-filter-mobile`
- Mobile select styles
**Dynamic styles to keep inline:**
- `animationDelay: \`${i * 0.05}s\``
- `opacity: animating ? 0 : 1`
- `marginBottom: 40` → move to module

### 2D — AMWService.module.css
**Source:** `components/homes/amw/AMWService.jsx` (~448 lines — largest)
**Classes to extract:**
- All `.amw-svc-*` classes
- Tab panel styles
- Image column styles
- Mobile responsive overrides
**Note:** This is the most complex — do last in Phase 2

### 2E — AMWTestimonials.module.css
**Source:** `components/homes/amw/AMWTestimonials.jsx` (~121 lines)
**Classes to extract:**
- Testimonial card styles
- Star rating layout
- Grid responsive styles

### 2F — AMWFacts.module.css
**Source:** `components/homes/amw/AMWFacts.jsx` (~69 lines)

### 2G — NextImageLightbox.module.css
**Source:** `components/common/NextImageLightbox.jsx` (~135 lines)
- All lightbox overlay/nav/image styles

### 2H — ContactForm.module.css
**Source:** `components/ghl/ContactForm.jsx` (~66 lines)

---

## Phase 3 — App Page Style Blocks

### 3A — support/page.jsx
Two `<style>` blocks — extract to a co-located `support.module.css` or move rules
to `custom.css` since pages don't naturally co-locate modules.

### 3B — Legal pages
- `cookie-policy/page.jsx`
- `privacy-policy/page.jsx`
- `terms-of-service/page.jsx`
- `thank-you/page.jsx`
Small style blocks — consolidate into a shared `legal.module.css` or `custom.css`.

---

## Phase 4 — Static Inline Style Cleanup
After all `<style>` blocks are migrated, sweep for static `style={{}}` props:

| Pattern | Replacement |
|---|---|
| `style={{ objectFit: "cover", objectPosition: "center" }}` | `.imgCover` class |
| `style={{ fontSize: 22, fontWeight: 900 }}` | named class |
| `style={{ color: "#fff", fontSize: 18 }}` | named class |
| `style={{ marginBottom: 40 }}` | Bootstrap `mb-40` or module class |
| `style={{ scrollMarginTop: 80 }}` | `.scrollTarget` utility class |

---

## Migration Steps Per Component (repeat for each)

1. Read the component JSX file
2. Copy the `<style>` block content
3. Create `ComponentName.module.css` next to the JSX file
4. Paste CSS, convert any camelCase to kebab-case if needed
5. Add `import styles from "./ComponentName.module.css"` to the JSX file
6. Replace `className="amw-foo"` with `className={styles.amwFoo}` for module classes
7. Remove the `<style>` block from JSX
8. Run `npx next build` — verify clean
9. Commit: `"Move ComponentName styles to CSS module"`

---

## Files Affected (22 total)

### Components (17)
- `components/headers/HeaderAMW.jsx`
- `components/homes/amw/AMWHero.jsx`
- `components/homes/amw/AMWGallery.jsx`
- `components/homes/amw/AMWService.jsx`
- `components/homes/amw/AMWConcreteService.jsx`
- `components/homes/amw/AMWDemolitionService.jsx`
- `components/homes/amw/AMWDrivewayService.jsx`
- `components/homes/amw/AMWPaverService.jsx`
- `components/homes/amw/AMWRockService.jsx`
- `components/homes/amw/AMWTurfService.jsx`
- `components/homes/amw/AMWAbout.jsx`
- `components/homes/amw/AMWContact.jsx`
- `components/homes/amw/AMWFacts.jsx`
- `components/homes/amw/AMWHome.jsx`
- `components/homes/amw/AMWTestimonials.jsx`
- `components/common/NextImageLightbox.jsx`
- `components/ghl/ContactForm.jsx`

### App Pages (5)
- `app/support/page.jsx`
- `app/thank-you/page.jsx`
- `app/(legal)/cookie-policy/page.jsx`
- `app/(legal)/privacy-policy/page.jsx`
- `app/(legal)/terms-of-service/page.jsx`

---

## Estimated Effort
| Phase | Files | Estimated Time |
|---|---|---|
| Phase 1 — Shared modules | 2 new files | 1-2h |
| Phase 2 — Component modules | 8 components | 3-4h |
| Phase 3 — App page blocks | 5 pages | 1h |
| Phase 4 — Static inline cleanup | sweep | 1h |
| **Total** | **22 files** | **6-8h** |

---

## Definition of Done
- Zero `<style>` blocks remaining in any JSX file
- Zero static `style={{}}` props (dynamic values are acceptable)
- All styles in `.module.css` files co-located with components, or `custom.css` for globals
- Build passes clean after every component migration
- No visual regressions on any page
