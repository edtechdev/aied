/**
 * Page-type icons, in one place so the templates and the markdown pipeline draw
 * the same mark.
 *
 * These are inline Lucide SVGs (`stroke="currentColor"`), matching the icons the
 * sidebar's "Recently Added Pages" list and the journal page use. They replaced
 * emoji (❓, 🧰): emoji carry their own colour from the system emoji font — the
 * red question mark being the obvious offender — so they ignore the surrounding
 * text colour and can't follow the theme.
 */

export type PageKind = 'article' | 'concept' | 'faq' | 'resource';

const PATHS: Record<PageKind, string> = {
  // Lucide file-text
  article:
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>',
  // Lucide lightbulb
  concept:
    '<line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5z"></path>',
  // Lucide circle-help
  faq:
    '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
  // Lucide toolbox
  resource:
    '<path d="M2 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path><path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8"></path><line x1="7" y1="12.5" x2="7" y2="14.5"></line><line x1="12" y1="12.5" x2="12" y2="14.5"></line><line x1="17" y1="12.5" x2="17" y2="14.5"></line>',
};

export const PAGE_KIND_LABEL: Record<PageKind, string> = {
  article: 'Article',
  concept: 'Concept',
  faq: 'FAQ',
  resource: 'Resource',
};

/** The head-of-page badge label, e.g. "Research Article". */
export const PAGE_KIND_BADGE: Record<PageKind, string> = {
  article: 'Research Article',
  concept: 'Concept',
  faq: 'FAQ',
  resource: 'Resource',
};

/** The section heading this kind's connected list uses, lowercase, for matching. */
export const CONNECTED_SECTION_KIND: Record<string, PageKind> = {
  'connected concepts': 'concept',
  'connected articles': 'article',
  'connected faqs': 'faq',
  'connected resources': 'resource',
};

/**
 * Icon markup for one page kind. The class is styled globally (muted by default,
 * primary on link hover); the SVG takes its colour from `currentColor`.
 */
export function pageTypeIcon(kind: PageKind, size = 16): string {
  return (
    `<svg class="page-type-icon" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"` +
    ` viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"` +
    ` stroke-linejoin="round" aria-hidden="true" focusable="false">${PATHS[kind]}</svg>`
  );
}
