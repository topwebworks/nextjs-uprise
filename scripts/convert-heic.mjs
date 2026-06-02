/**
 * convert-heic.mjs
 *
 * Converts HEIC files to compressed JPEG and copies existing JPG/JPEG
 * through sharp for consistent compression.
 *
 * Usage:
 *   node scripts/convert-heic.mjs --src="C:/path/to/raw" --out="C:/path/to/out"
 *
 * Defaults:
 *   --src  C:/Users/topwe/Desktop/AMW Raw Images
 *   --out  C:/Users/topwe/Desktop/AMW Raw Images/converted
 */

import heicConvert from "heic-convert";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const MAX_PX = 2400;
const JPEG_QUALITY = 82;

const args = process.argv.slice(2);
const srcArg = args.find((a) => a.startsWith("--src="))?.split("=").slice(1).join("=");
const outArg = args.find((a) => a.startsWith("--out="))?.split("=").slice(1).join("=");

const SRC_DIR = srcArg ?? "C:/Users/topwe/Desktop/AMW Raw Images";
const OUT_DIR = outArg ?? path.join(SRC_DIR, "converted");

function humanKB(bytes) {
  return (bytes / 1024).toFixed(0) + " KB";
}

async function convertHeic(filePath, outPath) {
  const input = fs.readFileSync(filePath);
  const jpegBuf = await heicConvert({ buffer: input, format: "JPEG", quality: 1 });

  // Pass through sharp to resize + mozjpeg compress
  const img = sharp(jpegBuf);
  const meta = await img.metadata();
  const longestEdge = Math.max(meta.width ?? 0, meta.height ?? 0);

  let pipeline = img;
  if (longestEdge > MAX_PX) {
    pipeline = pipeline.resize(
      meta.width > meta.height ? MAX_PX : null,
      meta.height >= meta.width ? MAX_PX : null,
      { withoutEnlargement: true }
    );
  }

  const finalBuf = await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(outPath, finalBuf);
  return { srcSize: input.length, outSize: finalBuf.length };
}

async function convertJpeg(filePath, outPath) {
  const img = sharp(filePath);
  const meta = await img.metadata();
  const longestEdge = Math.max(meta.width ?? 0, meta.height ?? 0);

  let pipeline = img;
  if (longestEdge > MAX_PX) {
    pipeline = pipeline.resize(
      meta.width > meta.height ? MAX_PX : null,
      meta.height >= meta.width ? MAX_PX : null,
      { withoutEnlargement: true }
    );
  }

  const buf = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  const srcSize = fs.statSync(filePath).size;
  const tmp = outPath + ".tmp";
  fs.writeFileSync(tmp, buf);
  fs.renameSync(tmp, outPath);
  return { srcSize, outSize: buf.length };
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = fs.readdirSync(SRC_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return [".heic", ".jpg", ".jpeg"].includes(ext) && fs.statSync(path.join(SRC_DIR, f)).isFile();
  });

  console.log(`\nconvert-heic — ${files.length} files`);
  console.log(`  src: ${SRC_DIR}`);
  console.log(`  out: ${OUT_DIR}\n`);

  let totalSrc = 0;
  let totalOut = 0;
  let converted = 0;
  let failed = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    // Strip all extensions (handles .HEIC, .heic, .JPG, .jpeg, etc.)
    const basename = file.replace(/(\.[^.]+)+$/, "");
    const srcPath = path.join(SRC_DIR, file);
    const outPath = path.join(OUT_DIR, basename + ".jpg");

    try {
      const { srcSize, outSize } = ext === ".heic"
        ? await convertHeic(srcPath, outPath)
        : await convertJpeg(srcPath, outPath);

      const pct = (((srcSize - outSize) / srcSize) * 100).toFixed(0);
      console.log(`  OK  ${file} → ${basename}.jpg  ${humanKB(srcSize)} → ${humanKB(outSize)} (−${pct}%)`);
      totalSrc += srcSize;
      totalOut += outSize;
      converted++;
    } catch (e) {
      console.error(`  ERR ${file}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n${converted} converted, ${failed} failed`);
  console.log(`Total: ${humanKB(totalSrc)} → ${humanKB(totalOut)} (−${humanKB(totalSrc - totalOut)})`);
  console.log(`\nOutput folder: ${OUT_DIR}`);
}

run().catch((e) => { console.error(e); process.exit(1); });
