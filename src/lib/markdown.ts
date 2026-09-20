import { markdownToHtml, defineHastPlugin } from 'satteri';
import Slugger from 'github-slugger';
import katex from 'katex';
import { CONCEPT_REDIRECTS } from '../data/conceptRedirects';
import { CONNECTED_SECTION_KIND, pageTypeIcon, type PageKind } from './pageTypeIcons';

export interface Heading {
  text: string;
  slug: string;
  depth: number;
}

const KNOWN: Record<string, string> = {
  'ai': 'AI', 'llm': 'LLM', 'rag': 'RAG', 'nlp': 'NLP',
  'k-12': 'K-12', 'irt': 'IRT', 'its': 'ITS', 'rct': 'RCT',
  'stem': 'STEM', 'cs': 'CS', 'ide': 'IDE', 'api': 'API',
  'srl': 'SRL', 'lms': 'LMS', 'mooc': 'MOOC', 'vr': 'VR',
  'ar': 'AR', 'ui': 'UI', 'ux': 'UX', 'sdk': 'SDK',
  'tpack': 'TPACK', 'asag': 'ASAG', 'kt': 'KT',
  'rl': 'RL', 'ml': 'ML', 'xai': 'XAI',
  'genai': 'GenAI', 'aied': 'AIED', 'pjbl': 'PjBL',
  'hci': 'HCI', 'zpd': 'ZPD',
};

export function smartTitle(label: string): string {
  return label.replace(/\b\w+\b/g, w => KNOWN[w.toLowerCase()] || (w[0].toUpperCase() + w.slice(1)));
}

export interface RenderOptions {
  /** The page's display title — a leading `# {title}` heading is dropped (the header already shows it). */
  pageTitle: string;
  articleSlugs: Set<string>;
  conceptSlugs: Set<string>;
  faqSlugs: Set<string>;
  /** slug -> display title for every page, so a bare `[[slug]]` shows the page's
   *  own title ("Well-Being") instead of a de-slugified guess ("well being"). */
  titles?: Record<string, string>;
}

interface ElementLike {
  type: 'element';
  tagName: string;
  properties?: Record<string, any>;
  children: ElementLike[];
}

function isElement(c: any): c is ElementLike {
  return c && c.type === 'element';
}

function classNameOf(node: { properties?: Record<string, any> }): string[] {
  const c = node.properties?.className;
  return Array.isArray(c) ? c : [];
}

/**
 * Render a wiki page body with Sätteri (Astro 7's native markdown pipeline),
 * customized to:
 *  - expand `[[slug|Label]]` / `[[slug]]` wikilinks into routed markdown links
 *    (articles > faqs > concepts priority), with smart titles for bare links,
 *  - convert `doi:...` into a DOI link,
 *  - enable Sätteri's math feature and render `$...$` / `$$...$$` to KaTeX
 *    HTML server-side,
 *  - add github-slugger heading ids + heading-anchor links and return a TOC.
 */
export function renderMarkdown(text: string, opts: RenderOptions): { html: string; headings: Heading[] } {
  const { pageTitle, articleSlugs, conceptSlugs, faqSlugs, titles } = opts;

  // --- Preprocessing (before Sätteri) -------------------------------------
  // Drop a leading H1 that duplicates the page title.
  let md = text.replace(new RegExp(`^#\\s+${escapeRegExp(pageTitle)}\\s*$`, 'm'), '');

  // Expand wikilinks into routed markdown links. Sätteri's own wikilinks
  // feature emits plain `<a href="slug">` nodes indistinguishable from normal
  // links, so we resolve routing + smart labels here instead.
  // The label may itself contain brackets (paper titles such as "Young Scholar[s]"),
  // so match non-greedily up to the closing ]] rather than stopping at the first ].
  md = md.replace(/\[\[([^\]|]+)(?:\|([\s\S]+?))?\]\]/g, (_m, p, label) => {
    // Resolve merged/redirect concept slugs to their canonical destination so
    // internal links point straight at the real page (avoids the bare
    // meta-refresh redirect page, which causes a white flash on click).
    const raw = p.replace(/\.md$/, '').trim();
    const page = CONCEPT_REDIRECTS[raw] || raw;
    const text2 = label || titles?.[page] || smartTitle(page.replace(/-/g, ' '));
    let base = '/aied/concepts';
    if (articleSlugs.has(page)) base = '/aied/articles';
    else if (faqSlugs.has(page)) base = '/aied/faqs';
    return `[${text2}](${base}/${page}/)`;
  });

  // DOI: convert `doi:xxx` to a link (matches the old inline renderer).
  md = md.replace(/doi:(\S+)/g, (m, id) => `[doi:${id}](https://doi.org/${id})`);

  // --- Sätteri render ------------------------------------------------------
  const headings: Heading[] = [];
  const slugger = new Slugger();

  // Heading ids + anchor links + TOC collection.
  const headingPlugin = defineHastPlugin({
    name: 'wiki-headings',
    element: {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      visit(node, ctx) {
        const depth = Number(node.tagName[1]);
        const text = ctx.textContent(node);
        const slug = slugger.slug(text);
        headings.push({ text, slug, depth });
        ctx.setProperty(node, 'id', slug);
        const anchor: any = {
          type: 'element',
          tagName: 'a',
          properties: { className: ['heading-anchor'], href: `#${slug}`, ariaHidden: 'true' },
          children: [],
        };
        ctx.setProperty(node, 'children', [anchor, ...(node.children as any[])]);
      },
    },
  });

  // Match the old renderer's `<blockquote class="blockquote">`.
  const blockquotePlugin = defineHastPlugin({
    name: 'wiki-blockquote',
    element: {
      filter: ['blockquote'],
      visit(node, ctx) {
        ctx.setProperty(node, 'className', ['blockquote']);
      },
    },
  });

  // Connected lists: `## Connected Concepts` / `## Connected Articles` render as
  // plain bullet lists, and a bullet says nothing about what a link points at.
  // Mark the list `.connected-list` and prepend the same Lucide page-type icon
  // the sidebar and journal use, so concepts and articles are distinguishable at
  // a glance. State is per-render (this plugin is built inside the render call)
  // and tracks the most recent h2, since the sections are `h2` followed by the
  // list.
  let connectedKind: PageKind | null = null;
  const connectedListPlugin = defineHastPlugin({
    name: 'wiki-connected-lists',
    element: [
      {
        filter: ['h2'],
        visit(node, ctx) {
          connectedKind = CONNECTED_SECTION_KIND[ctx.textContent(node).trim().toLowerCase()] ?? null;
        },
      },
      {
        filter: ['ul'],
        visit(node, ctx) {
          const kind = connectedKind;
          if (!kind) return;
          connectedKind = null;
          ctx.setProperty(node, 'className', ['connected-list']);
          for (const child of node.children as any[]) {
            if (!isElement(child) || child.tagName !== 'li') continue;
            // Put the icon inside the item's own link where there is one (every
            // connected entry is a wikilink), matching ConnectedList.astro — so
            // it also picks up the link's hover colour.
            const link = (child.children as any[]).find(
              (c) => isElement(c) && c.tagName === 'a',
            );
            ctx.prependChild((link ?? child) as any, {
              type: 'raw',
              value: pageTypeIcon(kind),
            });
          }
        },
      },
    ],
  });

  // Render Sätteri math (`<code class="language-math ...">`) to KaTeX HTML.
  const mathPlugin = defineHastPlugin({
    name: 'wiki-math',
    element: [
      {
        // Display math: Sätteri emits `<pre><code class="language-math math-display">…`.
        filter: ['pre'],
        visit(node, ctx) {
          const codeChild = (node.children as any[]).find(isElement);
          if (!codeChild || codeChild.tagName !== 'code') return;
          const cls = classNameOf(codeChild);
          if (!cls.includes('language-math') || !cls.includes('math-display')) return;
          const tex = ctx.textContent(codeChild as any);
          return { type: 'raw', value: katex.renderToString(tex, { displayMode: true, throwOnError: false }) };
        },
      },
      {
        // Inline math: `<code class="language-math math-inline">…`.
        filter: ['code'],
        visit(node, ctx) {
          const cls = classNameOf(node);
          if (!cls.includes('language-math')) return;
          if (cls.includes('math-display')) return; // handled by the <pre> visitor
          const tex = ctx.textContent(node);
          return { type: 'raw', value: katex.renderToString(tex, { displayMode: false, throwOnError: false }) };
        },
      },
    ],
  });

  const { html } = markdownToHtml(md, {
    features: { gfm: true, math: true, frontmatter: true },
    hastPlugins: [blockquotePlugin, connectedListPlugin, mathPlugin, headingPlugin],
  });

  return { html, headings };
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
