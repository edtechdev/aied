// Validates the mermaid diagram(s) in src/pages/index.astro parse as valid
// mermaid syntax. Catches syntax errors BEFORE they reach the live site (mermaid
// parses/renders client-side, so a bad diagram only shows up in the browser).
//
// Usage: node tooling/verify-mermaid.mjs
// Exit 0 = diagram is valid. Exit 1 = diagram has a syntax error.
import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';

// --- Provide a minimal DOM environment mermaid needs at import time ---
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', { url: 'http://localhost' });
globalThis.window = dom.window;
globalThis.document = dom.window.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.SVGElement = dom.window.SVGElement;
globalThis.Element = dom.window.Element;
globalThis.getComputedStyle = dom.window.getComputedStyle;
globalThis.DOMPurify = (await import('dompurify')).default(dom.window);

const mermaid = (await import('mermaid')).default;
mermaid.initialize({ startOnLoad: false, securityLevel: 'strict' });

// --- Extract every mermaid block from src/pages/index.astro ---
const src = readFileSync('src/pages/index.astro', 'utf8');
const blocks = [...src.matchAll(/<pre class="mermaid">\s*([\s\S]*?)\s*<\/pre>/g)];
if (!blocks.length) {
  console.error('NO <pre class="mermaid"> BLOCK FOUND in src/pages/index.astro');
  process.exit(1);
}

let failed = 0;
for (const [i, m] of blocks.entries()) {
  const diagram = m[1];
  try {
    await mermaid.parse(diagram);
    console.log(`Diagram ${i + 1}: OK (${diagram.length} chars, valid mermaid syntax)`);
  } catch (e) {
    failed++;
    console.error(`Diagram ${i + 1}: PARSE FAILED -> ${e.message}`);
  }
}
process.exit(failed ? 1 : 0);
