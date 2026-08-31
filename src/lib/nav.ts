/**
 * nav.ts — the site-wide linear reading order, matching the EPUB/PDF table of
 * contents:
 *
 *   1. Homepage (/aied/)
 *   2. Use This Knowledge Base with Your Own AI Assistant (/aied/ai)
 *   3. Every concept page, in sidebar (conceptIndex) order
 *   4. FAQs intro (/aied/faq)
 *   5. Every FAQ page, ascending by `created` (earliest first)
 *
 * Article pages are intentionally NOT part of this sequence, so pages like
 * /aied/articles/* produce no previous/next navigation.
 */
import { conceptIndex } from '../data/conceptIndex';

export interface NavItem {
  label: string;
  url: string;
}

/**
 * Build the ordered nav sequence.
 * @param conceptTitles slug -> title map (only existing concepts get links)
 * @param faqs FAQ entries as { slug, title }, already sorted ascending by
 *             `created` (earliest first), matching the FAQ index page.
 */
export function buildNavItems(
  conceptTitles: Record<string, string>,
  faqs: { slug: string; title: string }[],
): NavItem[] {
  const items: NavItem[] = [
    { label: 'AI in Education Knowledge Base', url: '/aied/' },
    { label: 'Use This Knowledge Base with Your Own AI Assistant', url: '/aied/ai' },
  ];

  for (const section of conceptIndex) {
    for (const group of section.groups) {
      for (const slug of group.items) {
        const title = conceptTitles[slug];
        if (title) items.push({ label: title, url: `/aied/concepts/${slug}/` });
      }
    }
  }

  items.push({ label: 'Frequently Asked Questions', url: '/aied/faq' });

  for (const f of faqs) {
    items.push({ label: f.title, url: `/aied/faqs/${f.slug}/` });
  }

  return items;
}

/** Normalize a path for equality: strip any trailing slash. */
export function normalizePath(p: string): string {
  const s = p || '';
  return s.length > 1 && s.endsWith('/') ? s.slice(0, -1) : s;
}
