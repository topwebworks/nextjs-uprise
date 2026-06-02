/**
 * purge-css.mjs
 *
 * Removes unused CSS from static theme files (style.css, bootstrap.min.css).
 * Run once before deploying or when adding new components.
 *
 * Usage:
 *   node scripts/purge-css.mjs              # dry run — prints size savings only
 *   node scripts/purge-css.mjs --write      # writes purged files in place
 *   node scripts/purge-css.mjs --write --no-bootstrap  # skip Bootstrap (safer)
 */

import { PurgeCSS } from "purgecss";
import fs from "fs";
import path from "path";

const WRITE = process.argv.includes("--write");
const SKIP_BOOTSTRAP = process.argv.includes("--no-bootstrap");

const ROOT = process.cwd();
const CSS_DIR = path.join(ROOT, "public/assets/css");

// Files to purge — order matters, process individually
const targets = [
  { file: "style.css", desc: "Resonance theme" },
  ...(!SKIP_BOOTSTRAP ? [{ file: "bootstrap.min.css", desc: "Bootstrap" }] : []),
  { file: "style-responsive.css", desc: "Responsive overrides" },
];

// All source files PurgeCSS will scan for used class names
const content = [
  "./app/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./public/assets/css/custom.css",
];

// Classes added dynamically at runtime — never purge these
const safelist = {
  standard: [
    "show", "hide", "fade", "in", "out", "active", "disabled",
    "focus", "open", "collapsed", "collapsing", "sticky",
    "d-block", "d-none", "d-flex", "d-inline-flex",
    "visually-hidden", "visually-hidden-focusable",
    "modal-open", "was-validated", "is-valid", "is-invalid",
    "no-mobile", "no-touch", "appear-animate", "appear-animate-visible",
    "body",
  ],
  deep: [
    /^wow/, /^animated/, /^animate__/,
    /^collapse/, /^modal/, /^dropdown/, /^navbar/,
    /^offcanvas/, /^tooltip/, /^popover/, /^carousel/,
    /^tab-/, /^nav-/, /^btn/,
    /^js-/, /^is-/, /^small-height/,
    /^splitting/, /^char/, /^word/, /^line/, /^whitespace/,
    /^rellax/, /^swiper/, /^owl/, /^pswp/,
    /^amw-/, /^amw/,
    /^page-section/, /^page-/, /^hs-/,
    /^section-/, /^section/,
    /^blog-/, /^team-/, /^portfolio-/, /^work-/,
    /^call-action/, /^features-list/, /^works-filter/,
    /^split-/, /^fw-/, /^widget/,
    /^link-to-top/, /^link-hover/, /^local-scroll/,
    /^mn-/, /^main-nav/, /^inner-nav/, /^mobile-nav/,
    /^decoration-/, /^bg-shape/, /^svg-shape/,
    /^light-content/, /^dark-content/, /^bg-dark/, /^bg-gray/,
    /^parallax/, /^fixed-bg/, /^amw-fixed-bg/,
    /^font-/, /^text-/, /^clearlist/, /^clearlinks/,
  ],
};

function humanKB(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

async function run() {
  console.log(`\npurge-css — ${WRITE ? "WRITING" : "DRY RUN (pass --write to apply)"}`);
  console.log(`Scanning: ${content.join(", ")}\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const { file, desc } of targets) {
    const filePath = path.join(CSS_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.log(`  SKIP   ${file} (not found)`);
      continue;
    }

    const before = fs.statSync(filePath).size;

    const cssRelative = path.relative(process.cwd(), filePath).replace(/\\/g, "/");
    const result = await new PurgeCSS().purge({
      content,
      css: [cssRelative],
      safelist,
      rejected: false,
      rejectedCss: false,
    });

    const purged = result[0]?.css ?? "";
    const after = Buffer.byteLength(purged, "utf8");
    const saved = before - after;
    const pct = ((saved / before) * 100).toFixed(0);

    console.log(`  ${WRITE ? "WROTE" : "DRY"}   ${file} (${desc})`);
    console.log(`          ${humanKB(before)} → ${humanKB(after)} (−${humanKB(saved)}, ${pct}% reduction)\n`);

    totalBefore += before;
    totalAfter += after;

    if (WRITE) {
      const tmp = filePath + ".tmp";
      fs.writeFileSync(tmp, purged, "utf8");
      fs.renameSync(tmp, filePath);
    }
  }

  const totalSaved = totalBefore - totalAfter;
  console.log(`Total: ${humanKB(totalBefore)} → ${humanKB(totalAfter)} (−${humanKB(totalSaved)})`);
  if (!WRITE) console.log("\nRun with --write to apply.");
}

run().catch((e) => { console.error(e); process.exit(1); });
