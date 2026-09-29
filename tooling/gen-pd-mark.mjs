// Rasterize the CC0 public-domain mark for the offline editions (EPUB/PDF).
//
// The mark itself is vector: src/assets/cc-zero.svg, the Creative Commons
// "zero" icon from the press kit, dedicated to the public domain under CC0 1.0
// (https://creativecommons.org/publicdomain/zero/1.0/). The site inlines that
// SVG (src/components/PublicDomainMark.astro); the books get a PNG because
// EPUB viewers and WeasyPrint both render a plain <img> more predictably than
// inline SVG, and because a raster needs no font to carry the mark.
//
// Output: public/public-domain-mark.png (256x256, transparent, dark mark for
// the books' white pages). Regenerate with:
//   node tooling/gen-pd-mark.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(root, 'src', 'assets', 'cc-zero.svg');
const OUT = path.join(root, 'public', 'public-domain-mark.png');

// The SVG draws in `currentColor` (it is inlined on the site); the books are
// printed on white, so rasterize in the ink colour the site uses for body text.
const INK = '#0b1220';
const SIZE = 256;

const svg = readFileSync(SRC, 'utf8')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/currentColor/g, INK);

await sharp(Buffer.from(svg), { density: 384 })
  .resize(SIZE, SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(OUT);

console.log(`Wrote ${OUT} (${SIZE}x${SIZE}, ${INK})`);