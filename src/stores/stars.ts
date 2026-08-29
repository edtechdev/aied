// Starred pages store — persisted to the browser's localStorage.
//
// Each visit, the store reads a JSON array of page slugs (e.g. ["ai-education",
// "ai-literacy", "agentic-ai", "articles/my-article"]) from localStorage under
// the key "aied:starred". The default (pre-seeded) value is the three concept
// pages Doug asked to star for everyone; once a user toggles a star, that value
// is persisted and remembered across visits.
//
// Using @nanostores/persistent (persistentAtom) so the state survives page
// navigations on the static site and is shared across every page.

import { persistentAtom } from '@nanostores/persistent';

export type PageKind = 'concept' | 'article' | 'faq';

/** Default starred pages (pre-seeded for everyone). */
export const DEFAULT_STARRED = [
  'concept/ai-education',
  'concept/ai-literacy',
  'concept/agentic-ai',
  'faq/top-10-findings-ai-education-instructors',
];

/** Canonical key for a page: `<kind>/<slug>`. */
export function pageKey(kind: PageKind, slug: string): string {
  return `${kind}/${slug}`;
}

export const starredStore = persistentAtom<string[]>('aied:starred', DEFAULT_STARRED, {
  encode: (value) => JSON.stringify(value),
  decode: (raw) => {
    try {
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.map(String) : DEFAULT_STARRED;
    } catch {
      return DEFAULT_STARRED;
    }
  },
});

/** Toggle a page's starred state; returns true if now starred. */
export function toggleStar(key: string): boolean {
  const current = starredStore.get();
  const next = current.includes(key)
    ? current.filter((k) => k !== key)
    : [...current, key];
  starredStore.set(next);
  return next.includes(key);
}

/** Is a given page currently starred? */
export function isStarred(key: string): boolean {
  return starredStore.get().includes(key);
}
