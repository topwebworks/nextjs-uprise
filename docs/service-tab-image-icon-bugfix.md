# Service Tab Image and Icon Bug Fix

Use this note when applying the AMW/TWW Resonance bug fixes to sibling projects.

## Symptoms

- On service detail pages, the service tab image starts tall after refresh, then later shrinks to a shorter height.
- Some icon-font icons render as small square fallback glyphs or disappear.
- Some benefit cards may use icon class names that do not exist in the bundled icon font.

## Root Cause

The service image bug is caused by global CSS selector bleed between CSS modules.

Two different modules define the same global selector:

- Homepage service tabs use `.amw-service-img-wrap` at a shorter height, usually `520px`.
- Service detail tabs use `.amw-service-img-wrap` at a taller height, usually `680px`.

Because both selectors are global and have equal specificity, whichever CSS chunk loads later can override the other. On service detail pages this can make the image container shrink after route CSS is loaded or prefetched.

The icon bug is caused by `font-display: optional` on icon fonts. Browsers may keep fallback square glyphs instead of swapping the real icon font in.

## Files to Check

The exact folder prefix may be `amw` or `tww`.

- `components/homes/amw/AMWService.module.css`
- `components/homes/amw/AMWServiceTab.module.css`
- `components/homes/tww/TWWService.module.css`
- `components/homes/tww/TWWServiceTab.module.css`
- `components/homes/amw/AMWBenefits.jsx`
- `components/homes/tww/TWWBenefits.jsx`
- `public/assets/css/icons.css`
- `public/assets/css/icomoon.css`
- `public/assets/css/font-awesome-brands.css`

## Fix 1: Scope Homepage Service Image Height

Find the homepage service CSS module. It may have a broad rule like this:

```css
:global(.amw-service-img-wrap) {
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
  border-radius: 4px;
}

@media (max-width: 575px) {
  :global(.amw-service-img-wrap) {
    height: 220px;
  }
}
```

Change it to:

```css
:global(.amw-svc-img-col .amw-service-img-wrap) {
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
  border-radius: 4px;
}

@media (max-width: 575px) {
  :global(.amw-svc-img-col .amw-service-img-wrap) {
    height: 220px;
  }
}
```

## Fix 2: Scope Service Detail Image Height

Find the shared service detail tab CSS module. It may have a broad rule like this:

```css
:global(.amw-service-img-wrap) {
  position: relative;
  width: 100%;
  height: 680px;
  overflow: hidden;
  border-radius: 4px;
}

@media (max-width: 575px) {
  :global(.amw-service-img-wrap) {
    height: 280px;
  }
}
```

Change it to:

```css
:global(.psvc-img-col .amw-service-img-wrap),
:global(.csvc-img-col .amw-service-img-wrap),
:global(.dsvc-img-col .amw-service-img-wrap),
:global(.wvsvc-img-col .amw-service-img-wrap),
:global(.rsvc-img-col .amw-service-img-wrap),
:global(.tsvc-img-col .amw-service-img-wrap) {
  position: relative;
  width: 100%;
  height: 680px;
  overflow: hidden;
  border-radius: 4px;
}

@media (max-width: 575px) {
  :global(.psvc-img-col .amw-service-img-wrap),
  :global(.csvc-img-col .amw-service-img-wrap),
  :global(.dsvc-img-col .amw-service-img-wrap),
  :global(.wvsvc-img-col .amw-service-img-wrap),
  :global(.rsvc-img-col .amw-service-img-wrap),
  :global(.tsvc-img-col .amw-service-img-wrap) {
    height: 280px;
  }
}
```

If a project has more service detail image column classes, include them in this selector list.

## Fix 3: Restore Icon Font Loading

In these files, make sure `font-display` is `swap`, not `optional`:

- `public/assets/css/icons.css`
- `public/assets/css/icomoon.css`
- `public/assets/css/font-awesome-brands.css`

Correct value:

```css
font-display: swap;
```

## Fix 4: Replace Invalid Benefit Icon Names

In the benefits component, replace icon class names that do not exist in the bundled icon font:

```diff
- icon: "mi-price"
+ icon: "mi-tag"

- icon: "mi-diamond"
+ icon: "mi-layers"

- icon: "mi-time"
+ icon: "mi-clock"
```

## Verification

Run:

```bash
npm run lint
npm run build
```

Search for regressions:

```bash
rg -n "mi-price|mi-diamond|mi-time|font-display: optional|:global\(\.amw-service-img-wrap\)" components public
```

Expected result:

- No `mi-price`, `mi-diamond`, or `mi-time` references.
- No `font-display: optional`.
- No broad unscoped `:global(.amw-service-img-wrap)` height rule remains.
- `npm run lint` passes.
- `npm run build` passes.

