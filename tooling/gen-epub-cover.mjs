// Generate a book-cover image for the EPUB: title, concept map (white
// background), and CC0 badge.
// Output: public/epub-cover.png (portrait, 1200x1800).
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(root, 'public', 'epub-cover.png');

function b64(p){ return readFileSync(p).toString('base64'); }
const cc0B64 = b64(path.join(root, 'public', 'cc0.png'));

// --- White-background concept map (same radial geometry as ConceptMap.astro) ---
const CX=450, CY=375, RECT_W=138, RECT_H=48, FONT=16, FONT_SMALL=13;
const inner=[
  {slug:'student-modeling',label:'Modeling'},{slug:'learning-theories',label:'Learning'},
  {slug:'equity-in-ai-education',label:'Equity'},{slug:'feedback',label:'Feedback'},
  {slug:'ai-literacy',label:'AI Literacy'},{slug:'assessment',label:'Assessment'},
];
const outer=[
  {slug:'discipline-specific-aied',label:'Disciplines'},{slug:'pedagogy',label:'Pedagogy'},
  {slug:'ethics',label:'Ethics'},{slug:'ai-technologies',label:'Technologies'},
  {slug:'ai-ed-evaluation',label:'Evaluation'},{slug:'research-methods-aied',label:'Research'},
];
function ring(nodes,radius,startDeg){const n=nodes.length;return nodes.map((node,i)=>{const a=(startDeg+(360/n)*i)*Math.PI/180;return{...node,x:CX+radius*Math.cos(a),y:CY+radius*Math.sin(a)};});}
const innerPlaced=ring(inner,168,30), outerPlaced=ring(outer,280,0), all=[...innerPlaced,...outerPlaced];
function lf(l){return l.length>=16?FONT_SMALL:FONT;}
const spokes=all.map(p=>`<line x1="${CX}" y1="${CY}" x2="${p.x.toFixed(2)}" y2="${p.y.toFixed(2)}" stroke="#2c3a45" stroke-width="2"/>`).join('');
const node=(p)=>`<g><rect x="${(p.x-RECT_W/2).toFixed(2)}" y="${(p.y-RECT_H/2).toFixed(2)}" width="${RECT_W}" height="${RECT_H}" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/><text x="${p.x.toFixed(2)}" y="${(p.y+6).toFixed(2)}" text-anchor="middle" fill="#0b1220" font-size="${lf(p.label)}" font-weight="700" font-family="system-ui,sans-serif">${p.label}</text></g>`;
const centerNode=`<g><rect x="${CX-95}" y="${CY-31}" width="190" height="62" rx="16" fill="#3b82f6"/><text x="${CX}" y="${CY+7}" text-anchor="middle" fill="#fff" font-size="20" font-weight="700" font-family="system-ui,sans-serif">AI in Education</text></g>`;
const conceptMapSVG=`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="750" viewBox="0 0 900 750">
<rect width="900" height="750" fill="#ffffff"/>
${spokes}
${centerNode}
${all.map(node).join('')}
</svg>`;

// Rasterize the white concept map first (librsvg handles this reliably),
// then embed that PNG into the cover.
const cmapPng = await sharp(Buffer.from(conceptMapSVG)).png().toBuffer();
const cmapB64 = cmapPng.toString('base64');

// --- Full cover composition (1200x1800 portrait) ---
const COVER_W=1200, COVER_H=1800;
const cmapW=900, cmapH=Math.round(cmapW*750/900); // 900x750

const svg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${COVER_W}" height="${COVER_H}" viewBox="0 0 ${COVER_W} ${COVER_H}">
<rect width="${COVER_W}" height="${COVER_H}" fill="#ffffff"/>
<rect x="0" y="0" width="${COVER_W}" height="18" fill="#3b82f6"/>
<rect x="0" y="${COVER_H-18}" width="${COVER_W}" height="18" fill="#3b82f6"/>

<text x="600" y="170" text-anchor="middle" fill="#0b1220" font-size="64" font-weight="800" font-family="Georgia,serif">AI in Education</text>
<text x="600" y="248" text-anchor="middle" fill="#0b1220" font-size="64" font-weight="800" font-family="Georgia,serif">Knowledge Base</text>

<image x="${(COVER_W-cmapW)/2}" y="330" width="${cmapW}" height="${cmapH}" xlink:href="data:image/png;base64,${cmapB64}"/>

<image x="${(COVER_W-140)/2}" y="1260" width="140" height="49" xlink:href="data:image/png;base64,${cc0B64}"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(OUT);
console.log('Wrote', OUT);
