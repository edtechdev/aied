// Shared helpers for generating schema.org JSON-LD for the wiki.
// Extracts structured metadata from frontmatter + body so JSON-LD is a
// serialization of the content model, not hand-maintained SEO.
import siteConfig from '../config/siteConfig';

export const SITE = siteConfig.url;
export const WEBSITE_ID = `${SITE}/#website`;
export const ORG_ID = `${SITE}/#organization`;

// A `sources` value like "raw/papers/10.1007_s10648-026-10118-7.md" encodes a DOI.
// Underscores and the filename extension are DOI-safe replacements for "/" and "." separators.
export function doiFromSources(sources: string[]): string | null {
  for (const s of sources || []) {
    // Match a DOI in a raw/papers filename like "10.1007_s10648-026-10118-7.md".
    // Convert '_' back to '/' and strip a trailing .md (or file extension).
    const m = s.match(/(10\.\d{4,}[A-Za-z0-9._()\-]+)/);
    if (m) {
      let doi = m[1];
      doi = doi.replace(/\.md$/i, '').replace(/_/g, '/').replace(/\.+$/, '');
      return doi;
    }
  }
  return null;
}

// Pull the first http(s) URL out of a body region (e.g. the Citation section).
export function urlFromText(text: string): string | null {
  const m = text.match(/https?:\/\/[^\s)\]]+/);
  return m ? m[0].replace(/[.,;:]+$/, '') : null;
}

// Extract the body between frontmatter and the first ## heading (the intro/summary).
export function firstParagraph(body: string): string {
  const text = body.replace(/^#\s+.*$/m, '').trim();
  const para = text.split(/\n\s*\n/)[0] || '';
  return para
    .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 500);
}

// Make a stable graph node reference from a concept slug.
export function conceptId(slug: string): string {
  return `${SITE}/concepts/${slug}/#concept`;
}
export function faqId(slug: string): string {
  return `${SITE}/faqs/${slug}/#faq`;
}
export function articleId(slug: string): string {
  return `${SITE}/articles/${slug}/#summary`;
}
