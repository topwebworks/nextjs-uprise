/**
 * compress-images.mjs
 *
 * Pre-compress images before committing so Vercel deploys stay lean.
 * Next.js <Image> still does its own optimisation at request time —
 * this just gives it a smaller source to work from.
 *
 * Usage:
 *   node scripts/compress-images.mjs                          # dry run
 *   node scripts/compress-images.mjs --write                  # compress in place
 *   node scripts/compress-images.mjs --write --dir public/assets/tww-assets/client-images
 *
 * Rules:
 *   - JPEG/JPG  → JPEG, quality 82, max 1920px on longest edge
 *   - PNG       → PNG, compressionLevel 9
 *   - WebP      → WebP, quality 82
 *   - AVIF      → skipped (already optimal)
 *   - Files under SKIP_BELOW_KB are left untouched
 *   - Original is overwritten only when --write is passed
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";

const SKIP_BELOW_KB = 200;
const MAX_PX = 1920;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 82;

const args = process.argv.slice(2);
const DRY_RUN = !args.includes("--write");
const dirArg = args.find((a) => a.startsWith("--dir="))?.split("=")[1];
const TARGET_DIR = path.resolve(
  dirArg ?? "public/assets/tww-assets/amw-images"
);

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function humanKB(bytes) {
  return (bytes / 1024).toFixed(0) + " KB";
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED.has(ext)) return;

  const statBefore = fs.statSync(filePath);
  if (statBefore.size / 1024 < SKIP_BELOW_KB) {
    console.log(`  SKIP   ${path.basename(filePath)} (${humanKB(statBefore.size)} — already small)`);
    return;
  }

  const img = sharp(filePath);
  const meta = await img.metadata();

  const longestEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  const needsResize = longestEdge > MAX_PX;

  let pipeline = img;
  if (needsResize) {
    pipeline = pipeline.resize(
      meta.width > meta.height ? MAX_PX : null,
      meta.height >= meta.width ? MAX_PX : null,
      { withoutEnlargement: true }
    );
  }

  if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const savedBytes = statBefore.size - buffer.length;
  const savedPct = ((savedBytes / statBefore.size) * 100).toFixed(0);

  if (savedBytes <= 0) {
    console.log(`  OK     ${path.basename(filePath)} (${humanKB(statBefore.size)} — no gain, skipping)`);
    return;
  }

  const resizeNote = needsResize ? ` resized ${longestEdge}→${MAX_PX}px,` : "";
  console.log(
    `  ${DRY_RUN ? "DRY" : "WROTE"}  ${path.basename(filePath)}${resizeNote} ${humanKB(statBefore.size)} → ${humanKB(buffer.length)} (−${savedPct}%)`
  );

  if (!DRY_RUN) {
    const tmp = filePath + ".tmp";
    fs.writeFileSync(tmp, buffer);
    fs.renameSync(tmp, filePath);
  }
}

async function run() {
  console.log(`\ncompress-images — ${DRY_RUN ? "DRY RUN (pass --write to apply)" : "WRITING"}`);
  console.log(`Target: ${TARGET_DIR}\n`);

  const files = fs.readdirSync(TARGET_DIR).map((f) => path.join(TARGET_DIR, f));
  let totalBefore = 0;
  let totalAfter = 0;

  for (const f of files) {
    if (!fs.statSync(f).isFile()) continue;
    const ext = path.extname(f).toLowerCase();
    if (!SUPPORTED.has(ext)) continue;

    const before = fs.statSync(f).size;
    await processFile(f);
    const after = DRY_RUN ? before : fs.statSync(f).size;
    totalBefore += before;
    totalAfter += after;
  }

  const saved = totalBefore - totalAfter;
  console.log(`\nTotal: ${humanKB(totalBefore)} → ${humanKB(totalAfter)} (−${humanKB(saved)})`);
  if (DRY_RUN) console.log("Run with --write to apply changes.");
}

run().catch((e) => { console.error(e); process.exit(1); });
