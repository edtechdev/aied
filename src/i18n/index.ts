/**
 * Registry of translated page copy.
 *
 * Every locale exports the same keys, so a page component renders any language
 * without branching; a locale with no module of its own falls back to the default
 * locale's copy (the `fallbackLocale` behaviour), which is also what a missing page
 * translation does.
 *
 * The modules are discovered by filename — `pages/home.es.ts` is the Spanish home
 * page copy, `ui.ar.ts` the Arabic chrome — so adding a language means dropping
 * files in, with no edit here.
 */
import { DEFAULT_LOCALE } from './config';
import type { HomeStrings } from './pages/home.en';
import type { AiStrings } from './pages/ai.en';
import type { SearchStrings } from './pages/search.en';
import type { ResourcesStrings } from './pages/resources.en';
import type { JournalStrings } from './pages/journal.en';
import type { FaqStrings } from './pages/faq.en';
import type { NotFoundStrings } from './pages/notFound.en';
import type { UiStrings } from './ui.en';

export interface PageStrings {
  home: HomeStrings;
  ai: AiStrings;
  search: SearchStrings;
  resources: ResourcesStrings;
  journal: JournalStrings;
  faq: FaqStrings;
  notFound: NotFoundStrings;
  ui: UiStrings;
}

export type PageKey = Exclude<keyof PageStrings, 'ui'>;

const PAGE_KEYS: PageKey[] = ['home', 'ai', 'search', 'resources', 'journal', 'faq', 'notFound'];

/** `./pages/home.es.ts` -> kind 'home', locale 'es'. Kinds may be camelCase
 *  (`notFound.en.ts`), which is why the class includes uppercase: the kind has to
 *  match the `PageStrings` key, and a file the pattern rejects is skipped in
 *  silence, leaving that page with `undefined` copy at render time. */
const PAGE_FILE = /^\.\/pages\/([A-Za-z-]+)\.([a-z]{2}(?:-[A-Za-z]{2,4})?)\.ts$/;
/** `./ui.es.ts` -> 'es' */
const UI_FILE = /^\.\/ui\.([a-z]{2}(?:-[A-Za-z]{2,4})?)\.ts$/;

const pageModules = import.meta.glob<unknown>('./pages/*.ts', { eager: true, import: 'default' });
const uiModules = import.meta.glob<unknown>('./ui.*.ts', { eager: true, import: 'default' });

const pagesByLocale: Record<string, Partial<Record<PageKey, unknown>>> = {};
const uiByLocale: Record<string, unknown> = {};

for (const [path, mod] of Object.entries(pageModules)) {
  const m = PAGE_FILE.exec(path);
  if (!m) continue;
  const kind = m[1];
  const locale = m[2];
  if (!(PAGE_KEYS as string[]).includes(kind)) continue;
  (pagesByLocale[locale] ||= {})[kind as PageKey] = mod;
}
for (const [path, mod] of Object.entries(uiModules)) {
  const m = UI_FILE.exec(path);
  if (m) uiByLocale[m[1]] = mod;
}

const cache: Record<string, PageStrings> = {};

/**
 * True when `locale` has its own copy for `kind` (rather than falling back to the
 * default locale). Used for page direction: a page showing fallback copy has to keep
 * the direction of the language it is actually written in.
 */
export function hasPageCopy(kind: PageKey, locale: string): boolean {
  return !!(pagesByLocale[locale] || {})[kind];
}

/** Copy for a locale, falling back to the default locale's copy per page. */
export function strings(locale: string): PageStrings {
  if (cache[locale]) return cache[locale];
  const own = pagesByLocale[locale] || {};
  const fallback = pagesByLocale[DEFAULT_LOCALE] || {};
  const value = {
    ...Object.fromEntries(PAGE_KEYS.map((k) => [k, own[k] ?? fallback[k]])),
    ui: uiByLocale[locale] ?? uiByLocale[DEFAULT_LOCALE],
  } as PageStrings;
  cache[locale] = value;
  return value;
}

export type { HomeStrings, AiStrings, SearchStrings, ResourcesStrings, JournalStrings, FaqStrings, NotFoundStrings, UiStrings };