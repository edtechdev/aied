import { getCollection } from 'astro:content';
import siteConfig from '../config/siteConfig';
import { CONCEPT_REDIRECTS } from '../data/conceptRedirects';
import { smartTitle } from '../lib/markdown';

/**
 * The knowledge base RSS feed.
 *
 * Written by hand rather than through @astrojs/rss for two reasons.
 *
 * 1. `pubDate`. The library calls `.toUTCString()`, which shifts an Eastern-evening
 *    timestamp to the NEXT calendar day, so the feed published dates a day later than
 *    the page it linked. The local offset is preserved here instead.
 *
 * 2. Descriptions must carry real links. The library serialises every string field as an
 *    XML text node, so HTML in `description` arrives escaped and a reader sees the
 *    characters `<a href=...>` instead of a link. Wrapping the value in CDATA does not
 *    help either: the underlying parser reads CDATA as text and re-escapes it on output
 *    (both behaviours verified against fast-xml-parser). Building the document here keeps
 *    each description inside a real CDATA section, which is what feed readers expect for
 *    HTML. A wikilink that stays unresolved is rendered as its own words rather than as a
 *    dead link.
 *
 * Descriptions come from the page's synthesis blockquote: it is the one paragraph written
 * to stand alone. A page without one falls back to its opening prose.
 */

const BASE = siteConfig.url.replace(/\/+$/, '');

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function toRfc822Local(iso: string): string {
  // e.g. 2026-08-16T20:02:54-04:00  ->  "Sun, 16 Aug 2026 20:02:54 -0400"
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}:?\d{2}|Z)?/.exec(iso);
  if (!m) return iso;
  const [, y, mo, d, hh, mi, ss, offset] = m;
  // RFC-822 timezone designator: keep the offset as-is, just drop the colon
  // (-04:00 -> -0400). Do NOT recompute to minutes.
  const tz = !offset || offset === 'Z' ? 'GMT' : offset.replace(':', '');
  const weekday = DAYS[new Date(+y, +mo - 1, +d).getDay()];
  return `${weekday}, ${String(d).padStart(2, '0')} ${MONTHS[+mo - 1]} ${y} ${hh}:${mi}:${ss} ${tz}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** CDATA cannot contain `]]>`, so split it across two sections rather than corrupting the XML. */
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

type LinkIndex = {
  articles: Set<string>;
  faqs: Set<string>;
  concepts: Set<string>;
  resources: Set<string>;
  titles: Record<string, string>;
};

type Token = { visible: string; html: string };

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Bold and italic markers become tags; escaped currency is unescaped for display. */
function textToHtml(value: string): string {
  return escapeHtml(value)
    .replace(/\\\$/g, '$')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>');
}

/**
 * Resolve one wikilink the way src/lib/markdown.ts does, as an absolute URL.
 *
 * Same precedence (articles > faqs > concepts > resources) and same concept-redirect
 * handling, so a link in the feed points wherever the page's own link would.
 */
function wikiLink(target: string, label: string | undefined, idx: LinkIndex): Token {
  const raw = target.replace(/\.md$/, '').trim();
  const page = CONCEPT_REDIRECTS[raw] || raw;
  const text = (label || idx.titles[page] || smartTitle(page.replace(/-/g, ' '))).trim();
  let section: string | null = null;
  if (idx.articles.has(page)) section = 'articles';
  else if (idx.faqs.has(page)) section = 'faqs';
  else if (idx.concepts.has(page)) section = 'concepts';
  else if (idx.resources.has(page)) section = 'resources';

  if (!section) return { visible: text, html: textToHtml(text) };
  return {
    visible: text,
    html: `<a href="${escapeXml(`${BASE}/${section}/${page}/`)}">${textToHtml(text)}</a>`,
  };
}

function tokenize(markdown: string, idx: LinkIndex): Token[] {
  const tokens: Token[] = [];
  const wikilink = /\[\[([^\]|\n]+)(?:\|([\s\S]+?))?\]\]/g;
  let pos = 0;
  let match: RegExpExecArray | null;
  while ((match = wikilink.exec(markdown)) !== null) {
    const before = markdown.slice(pos, match.index);
    if (before.trim()) tokens.push({ visible: before, html: textToHtml(before) });
    tokens.push(wikiLink(match[1], match[2], idx));
    pos = match.index + match[0].length;
  }
  const tail = markdown.slice(pos);
  if (tail.trim()) tokens.push({ visible: tail, html: textToHtml(tail) });
  return tokens;
}

/** Cut a text chunk back to its last word boundary so a description never ends mid-word. */
function clipToWord(value: string, room: number): string {
  const cut = value.slice(0, room);
  const space = cut.lastIndexOf(' ');
  return (space > room * 0.6 ? cut.slice(0, space) : cut).trimEnd();
}

function summarize(markdown: string, idx: LinkIndex, limit = 500): string {
  const tokens = tokenize(markdown, idx);
  const out: string[] = [];
  let used = 0;
  let truncated = false;
  for (const token of tokens) {
    const room = limit - used;
    if (token.visible.length <= room) {
      // Only whole tokens are ever emitted, so an anchor tag is never left unclosed.
      out.push(token.html);
      used += token.visible.length;
      continue;
    }
    const clipped = clipToWord(token.visible, room);
    if (clipped) out.push(textToHtml(clipped));
    truncated = true;
    break;
  }
  let html = out.join('').replace(/\s+/g, ' ').trim();
  if (truncated) html = `${html.replace(/[\s,;:.]+$/, '')}...`;
  return html;
}

/** The page's synthesis blockquote, with the markdown quote markers removed. */
function leadParagraph(body: string): string {
  const quoted = body
    .split('\n')
    .filter(line => line.startsWith('>'))
    .map(line => line.replace(/^>\s?/, ''))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (quoted) return quoted;
  // A page without a synthesis blockquote falls back to its opening prose.
  return body
    .split('\n')
    .filter(line => line.trim() && !line.startsWith('#') && !line.startsWith('-'))
    .slice(0, 4)
    .join(' ')
    .trim();
}

export async function GET() {
  const [articles, concepts, faqs, resources] = await Promise.all([
    getCollection('articles'),
    getCollection('concepts'),
    getCollection('faqs'),
    getCollection('resources'),
  ]);

  const idx: LinkIndex = {
    articles: new Set(articles.map(a => a.id.replace('.md', ''))),
    faqs: new Set(faqs.map(f => f.id.replace('.md', ''))),
    concepts: new Set(concepts.map(c => c.id.replace('.md', ''))),
    resources: new Set(resources.map(r => r.id.replace('.md', ''))),
    titles: Object.fromEntries(
      [...articles, ...concepts, ...faqs, ...resources].map(page => [
        page.id.replace('.md', ''),
        page.data.title,
      ]),
    ),
  };

  const pages = articles
    .sort((a, b) => b.data.created.localeCompare(a.data.created))
    .slice(0, 40);

  const items = pages
    .map(page => {
      const url = `${BASE}/articles/${page.id.replace('.md', '')}/`;
      const description = summarize(leadParagraph(page.body || ''), idx);
      return [
        '    <item>',
        `      <title>${escapeXml(page.data.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${toRfc822Local(page.data.created)}</pubDate>`,
        `      <description>${cdata(description)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    `    <title>${escapeXml(siteConfig.name)}</title>`,
    `    <link>${escapeXml(`${BASE}/`)}</link>`,
    `    <description>${escapeXml(`${siteConfig.name} - research article summaries and concept syntheses`)}</description>`,
    '    <language>en-us</language>',
    items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
