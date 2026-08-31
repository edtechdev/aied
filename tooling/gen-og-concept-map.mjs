// Regenerate public/og-concept-map.png from the ConceptMap.astro layout.
// The live homepage component already uses "Modeling" (student-modeling), but
// the static og-concept-map.png raster was stale and still read "Tutoring".
// We render the component's exact geometry (radial SVG, 900x750 viewBox) at
// 1200x1000 to match the original OG image dimensions/ratio.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, 'public', 'og-concept-map.png');

// --- geometry (mirrors src/components/ConceptMap.astro) ---
const CX = 450, CY = 375;
const RECT_W = 138, RECT_H = 48;
const FONT = 16, FONT_SMALL = 13;

const inner = [
  { slug: 'student-modeling', label: 'Modeling' },
  { slug: 'learning-theories', label: 'Learning' },
  { slug: 'equity-in-ai-education', label: 'Equity' },
  { slug: 'feedback', label: 'Feedback' },
  { slug: 'ai-literacy', label: 'AI Literacy' },
  { slug: 'assessment', label: 'Assessment' },
];
const outer = [
  { slug: 'discipline-specific-aied', label: 'Disciplines' },
  { slug: 'pedagogy', label: 'Pedagogy' },
  { slug: 'ethics', label: 'Ethics' },
  { slug: 'ai-technologies', label: 'Technologies' },
  { slug: 'ai-ed-evaluation', label: 'Evaluation' },
  { slug: 'research-methods-aied', label: 'Research' },
];

function ring(nodes, radius, startDeg) {
  const n = nodes.length;
  return nodes.map((node, i) => {
    const angle = (startDeg + (360 / n) * i) * (Math.PI / 180);
    return { ...node, x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
  });
}
const innerPlaced = ring(inner, 168, 30);
const outerPlaced = ring(outer, 280, 0);
const allPlaced = [...innerPlaced, ...outerPlaced];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function labelFont(label) {
  return label.length >= 16 ? FONT_SMALL : FONT;
}

// --- build SVG ---
const spokes = allPlaced
  .map((p) => `<line x1="${CX}" y1="${CY}" x2="${p.x.toFixed(2)}" y2="${p.y.toFixed(2)}" stroke="#2c3a45" stroke-width="2"/>`)
  .join('');

const centerNode = `
<a href="/aied/concepts/ai-education/">
  <g>
    <rect x="${CX - 95}" y="${CY - 31}" width="190" height="62" rx="16" fill="#7dd3fc"/>
    <rect x="${CX - 95}" y="${CY - 31}" width="190" height="62" rx="16" fill="none" stroke="#0d1418" stroke-width="2"/>
    <text x="${CX}" y="${CY + 7}" text-anchor="middle" fill="#0b1220" font-size="20" font-weight="700" font-family="system-ui,-apple-system,sans-serif">AI in Education</text>
  </g>
</a>`;

const nodes = allPlaced
  .map((p) => `
<a href="/aied/concepts/${p.slug}/">
  <g>
    <rect x="${(p.x - RECT_W / 2).toFixed(2)}" y="${(p.y - RECT_H / 2).toFixed(2)}" width="${RECT_W}" height="${RECT_H}" rx="14" fill="#7dd3fc"/>
    <rect x="${(p.x - RECT_W / 2).toFixed(2)}" y="${(p.y - RECT_H / 2).toFixed(2)}" width="${RECT_W}" height="${RECT_H}" rx="14" fill="none" stroke="#0d1418" stroke-width="2"/>
    <text x="${p.x.toFixed(2)}" y="${(p.y + 6).toFixed(2)}" text-anchor="middle" fill="#0b1220" font-size="${labelFont(p.label)}" font-weight="700" font-family="system-ui,-apple-system,sans-serif">${esc(p.label)}</text>
  </g>
</a>`)
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="1000" viewBox="0 0 900 750">
  <rect x="0" y="0" width="900" height="750" rx="16" fill="#0d1418"/>
  ${spokes}
  ${centerNode}
  ${nodes}
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
