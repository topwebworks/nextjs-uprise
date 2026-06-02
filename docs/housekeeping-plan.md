# Housekeeping Plan
_Created: 2026-06-02_

Found during post-CSS-modules verification pass. Three categories: code deletions,
config placeholders (blocked on client), and docs/robots cleanup.

---

## Priority 1 — Code (do now, no blockers)

### 1A — Delete dead Lorem Ipsum exports from `data/faqs.js`

**File:** `data/faqs.js`
**Problem:** `faqDataMain` and `faqs3` are Resonance template boilerplate with Lorem
Ipsum answers. Neither is imported anywhere in the AMW codebase. They're dead weight
and a hazard — a future developer could accidentally import the wrong export and
ship placeholder text to production.
**Keep:** `faqs` (lines 1–26) — this is real AMW process data, used by `AMWProcess.jsx`.
**Delete:** `faqDataMain` (lines 28–53) and `faqs3` (lines 54–77).

Steps:
1. Edit `data/faqs.js` — remove everything after the closing `];` of `faqs`
2. Build check
3. Commit: `"Remove dead Resonance template FAQ exports from data/faqs.js"`

---

### 1B — Clean up `app/robots.js` boilerplate disallow list

**File:** `app/robots.js`
**Problem:** The disallow list contains 10 Resonance theme demo route prefixes
(`/bold-`, `/brutalist-`, `/corporate-`, etc.) that don't exist in this build.
They were copied from the base template. Harmless but misleading — they imply
routes exist that don't.
**Keep:** `/api/` and `/thank-you` disallows — both correct for this site.
**Remove:** All 10 theme-prefix disallow entries and the comment above them.

Steps:
1. Edit `app/robots.js` — remove the 10 `/bold-` … `/strong-` entries and the
   `// All unused base Bootstrap theme routes` comment
2. Build check (robots.txt output will be leaner)
3. Commit: `"Clean up robots.js — remove non-existent Resonance theme route disallows"`

---

### 1C — Commit `docs/` to git

**File:** `docs/` directory (currently untracked)
**Problem:** `docs/css-modules-migration.md` and `docs/housekeeping-plan.md` are
untracked. The migration plan is a useful historical record; this plan is the
current work queue. Both should be in version control.

Steps:
1. `git add docs/`
2. Commit: `"Add docs/ — CSS modules migration plan and housekeeping plan"`

---

## Priority 2 — Config placeholders (blocked on client data)

These cannot be completed until AMW provides their GHL and GTM account IDs.
Document the steps here so nothing is missed when the data arrives.

### 2A — `data/ghl.js` — Fill in all GHL IDs

**File:** `data/ghl.js`
**Placeholders to replace (13 total — 2 active, 11 commented out):**

| Key | Where to find in GHL |
|---|---|
| `locationId` | Settings → Business Info |
| `chat.widgetId` | Sites → Chat Widget → embed code (`data-widget-id`) |
| `forms.contact` | Sites → Forms → [contact form] → Integrate → UUID in snippet URL |
| `forms.estimate` | Sites → Forms → [estimate form] → Integrate → UUID in snippet URL |
| `calendars.main` | Calendars → [main calendar] → Integration → embed code UUID |
| `reviews.widgetId` | Reputation → Widget → embed code |

The commented-out entries (`quote`, `consultation`, `intake`, `campaign_a`,
`campaign_b`, `discovery`) stay commented out unless those forms/calendars are
actually built in GHL.

Steps (when client provides IDs):
1. Edit `data/ghl.js` — replace each `_PLACEHOLDER` value with the real ID
2. Verify chat widget appears on staging
3. Verify contact and estimate forms load (should replace placeholder UI)
4. Verify `/thank-you` redirect from GHL form submission works
5. Commit: `"Configure GHL IDs for AMW — locationId, chat, forms, calendar, reviews"`

---

### 2B — `data/analytics.js` — Fill in GTM container ID

**File:** `data/analytics.js`
**Placeholder:** `gtmId: "GTM-XXXXXXX"`

Steps (when client provides GTM ID):
1. Edit `data/analytics.js` — replace `GTM-XXXXXXX` with the real container ID
   (format: `GTM-XXXXXXX` where X is alphanumeric, e.g. `GTM-K2F9X3`)
2. Confirm GTM fires only after cookie consent is accepted (existing behavior,
   no code change needed — just verify in browser)
3. Commit: `"Configure GTM ID for AMW analytics"`

---

## Priority 3 — Pre-launch checklist (when client content is ready)

These aren't code gaps but are required before the site goes live.

- [ ] `data/site.js` — confirm all business details (phone, email, address, social URLs,
      OG image path, site URL)
- [ ] `data/ghl.js` — all active IDs filled (see 2A above)
- [ ] `data/analytics.js` — GTM ID filled (see 2B above)
- [ ] GHL form redirect URLs set to `https://[siteurl]/thank-you`
- [ ] OG image at `public/assets/images/og-default.jpg` (1200×630)
- [ ] At least one blog post in `content/blog/` OR leave `/blog` as-is (renders
      "No posts yet" safely — no action required)
- [ ] Legal pages — verify dates and any client-specific content are accurate
- [ ] Run `node scripts/purge-css.mjs --write` if new component classes were added
      since last purge
- [ ] Push to GitHub → confirm Vercel deploy succeeds
- [ ] Smoke-test: homepage, all 6 service pages, gallery, contact form, /thank-you,
      /support, all 3 legal pages

---

## Definition of Done

- `data/faqs.js` contains only the `faqs` export (no Lorem Ipsum)
- `app/robots.js` disallows only `/api/` and `/thank-you`
- `docs/` is committed to git
- All `_PLACEHOLDER` values in `data/ghl.js` replaced with real IDs
- `GTM-XXXXXXX` in `data/analytics.js` replaced with real container ID
- Build passes clean throughout
