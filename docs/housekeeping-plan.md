# Housekeeping Plan
_Created: 2026-06-02 | Updated: 2026-06-05_

Template universalization complete. This plan tracks remaining cleanup and the per-client setup checklist.

---

## Priority 1 — Code (do now, no blockers)

### 1A — Delete dead Lorem Ipsum exports from `data/faqs.js`

**File:** `data/faqs.js`
**Problem:** `faqDataMain` and `faqs3` are Resonance template boilerplate with Lorem Ipsum answers. Neither is imported anywhere. Dead weight — a future dev could accidentally import the wrong export and ship placeholder text to production.
**Keep:** `faqs` (lines 1–26) — the real process steps used by `TWWProcess.jsx`.
**Delete:** `faqDataMain` and `faqs3`.

Steps:
1. Edit `data/faqs.js` — remove everything after the closing `];` of `faqs`
2. Build check
3. Commit: `"Remove dead Resonance template FAQ exports from data/faqs.js"`

---

### 1B — Clean up `app/robots.js` boilerplate disallow list

**File:** `app/robots.js`
**Problem:** Disallow list contains Resonance theme demo route prefixes (`/bold-`, `/brutalist-`, etc.) that don't exist in this build.
**Keep:** `/api/` and `/thank-you` disallows.
**Remove:** All theme-prefix disallow entries.

Steps:
1. Edit `app/robots.js` — remove the theme-prefix entries and surrounding comment
2. Build check
3. Commit: `"Clean up robots.js — remove non-existent Resonance theme route disallows"`

---

## Priority 2 — Per-client setup (run after cloning)

These steps are blocked until the client provides their account IDs.

### 2A — `data/ghl.js` — Fill in all GHL IDs

| Key | Where to find in GHL |
|---|---|
| `locationId` | Settings → Business Info |
| `chat.widgetId` | Sites → Chat Widget → embed code (`data-widget-id`) |
| `forms.contact` | Sites → Forms → [form] → Integrate → UUID in snippet URL |
| `forms.estimate` | Sites → Forms → [form] → Integrate → UUID in snippet URL |
| `calendars.main` | Calendars → [calendar] → Integration → embed code UUID |
| `reviews.widgetId` | Reputation → Widget → embed code |

Steps:
1. Edit `data/ghl.js` — replace each `_PLACEHOLDER` with the real ID
2. Verify chat widget appears on staging
3. Verify forms load and `/thank-you` redirect works
4. Commit: `"Configure GHL IDs for [client]"`

---

### 2B — `data/analytics.js` — Fill in GTM container ID

**Placeholder:** `gtmId: "GTM-XXXXXXX"`

Steps:
1. Edit `data/analytics.js` — replace `GTM-XXXXXXX` with the real container ID
2. Confirm GTM fires only after cookie consent is accepted
3. Commit: `"Configure GTM ID for [client] analytics"`

---

## Priority 3 — Pre-launch checklist

- [ ] `data/settings.js` — all business details confirmed (phone, email, address, social, services)
- [ ] `data/ghl.js` — all active IDs filled (see 2A)
- [ ] `data/analytics.js` — GTM ID filled (see 2B)
- [ ] GHL form redirect URLs set to `https://[siteurl]/thank-you`
- [ ] OG image at `public/assets/images/og-default.jpg` (1200×630)
- [ ] Client images in `public/assets/tww-assets/[clientname]-images/`
- [ ] At least one blog post in `content/blog/` OR leave as-is (renders "No posts yet" safely)
- [ ] Legal pages — verify dates and client-specific content are accurate
- [ ] Run `node scripts/purge-css.mjs --write` if new component classes were added
- [ ] Push to GitHub → confirm Vercel deploy succeeds
- [ ] Smoke-test: homepage, all service pages, gallery, contact form, /thank-you, /support, all 3 legal pages

---

## Definition of Done

- `data/faqs.js` contains only the `faqs` export (no Lorem Ipsum)
- `app/robots.js` disallows only `/api/` and `/thank-you`
- All `_PLACEHOLDER` values in `data/ghl.js` replaced with real IDs
- `GTM-XXXXXXX` in `data/analytics.js` replaced with real container ID
- Build passes clean throughout
