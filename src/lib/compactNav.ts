/**
 * Small, pure helpers for the compact sidebar navigation and the full concept
 * index. Kept free of Astro/content imports so the selection rules can be read
 * and tested without booting a build.
 */

/** The ten registry strands in `conceptIndex`. */
export interface ConceptSectionLike {
  heading: string;
  groups: { label: string; items: string[] }[];
}

/**
 * Anchor id for a strand heading. The concepts index and the sidebar's compact
 * strand links must use the same value; deriving it in two places is how a
 * working-looking link silently scrolls nowhere.
 */
export function sectionAnchor(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * The current concept's registry group and up to `limit` concepts around it.
 *
 * The full taxonomy still lives on the concepts index; this only provides a
 * bounded local neighbourhood for the ordinary page sidebar. Registry order is
 * preserved, and the current concept is returned separately so a window that
 * excludes it cannot make the current page disappear.
 */
export function conceptContext(
  sections: ConceptSectionLike[],
  slug: string,
  limit = 8,
): { section: ConceptSectionLike; group: string; nearby: string[] } | null {
  if (!slug || limit <= 0) return null;
  for (const section of sections) {
    for (const group of section.groups) {
      const at = group.items.indexOf(slug);
      if (at === -1) continue;
      const candidates = group.items.filter((item) => item !== slug);
      if (candidates.length === 0) return { section, group: group.label, nearby: [] };
      // Centre the window on the current concept, clamped to the group ends.
      const wanted = Math.max(0, at - Math.floor(limit / 2));
      const start = Math.min(wanted, Math.max(0, candidates.length - limit));
      return {
        section,
        group: group.label,
        nearby: candidates.slice(start, start + limit),
      };
    }
  }
  return null;
}

/** Typed facet fields that carry concept slugs on articles, FAQs and resources. */
export const CONCEPT_FACET_KEYS = [
  'foundations',
  'pedagogy',
  'technology',
  'assessment',
  'methods',
  'institutions',
  'ethics',
] as const;

/**
 * Up to `limit` valid concept slugs named by a page's typed facets, in field
 * order and then authored order, with duplicates removed. Invalid or absent
 * values are dropped rather than rendered as dead links.
 */
export function facetConceptSlugs(
  data: unknown,
  isValid: (slug: string) => boolean,
  limit = 8,
): string[] {
  if (!data || typeof data !== 'object' || limit <= 0) return [];
  const record = data as Record<string, unknown>;
  const out: string[] = [];
  const seen = new Set<string>();
  for (const key of CONCEPT_FACET_KEYS) {
    const value = record[key];
    if (!Array.isArray(value)) continue;
    for (const raw of value) {
      const slug = String(raw);
      if (seen.has(slug) || !isValid(slug)) continue;
      seen.add(slug);
      out.push(slug);
      if (out.length >= limit) return out;
    }
  }
  return out;
}

/**
 * Five FAQs for the compact FAQ tab: the page's own connected FAQs first, then
 * the already-ranked list as fallback. The full list stays on the FAQ index.
 */
export function compactFaqs<T extends { slug: string }>(
  entries: T[],
  connected: unknown,
  limit = 5,
): T[] {
  if (limit <= 0) return [];
  const bySlug = new Map(entries.map((entry) => [entry.slug, entry]));
  const out: T[] = [];
  const seen = new Set<string>();
  if (Array.isArray(connected)) {
    for (const raw of connected) {
      const slug = String(raw);
      const entry = bySlug.get(slug);
      if (entry && !seen.has(slug)) {
        seen.add(slug);
        out.push(entry);
        if (out.length >= limit) return out;
      }
    }
  }
  for (const entry of entries) {
    if (seen.has(entry.slug)) continue;
    out.push(entry);
    if (out.length >= limit) break;
  }
  return out;
}
