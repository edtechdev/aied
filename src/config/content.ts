/**
 * content.ts - where the markdown content lives, for the Astro build.
 *
 * The TypeScript half of the `content` block in site.config.json; the Python
 * tooling reads the same two values through tooling/scripts/content_paths.py, so
 * the build and the scripts cannot drift apart.
 *
 * Every page is one file, addressed as:
 *
 *     <content root>/<locale>/<collection>/<slug>.md
 *
 * The default locale gets its own folder like every other locale, so the whole
 * knowledge base is a single tree (openable in Obsidian, readable by any other
 * tool) and the repository can be re-pointed at another topic by changing
 * `content.root` / `content.defaultDir` in site.config.json.
 */
import raw from '../../site.config.json';

const content = (raw as { content?: { root?: string; defaultDir?: string } }).content ?? {};
const i18n = (raw as { i18n?: { defaultLocale?: string; locales?: { code: string }[] } }).i18n ?? {};

/** Folder under the repo root holding every locale's markdown. */
export const CONTENT_ROOT: string = content.root ?? 'content';

/** Folder holding the default (source-language) content, e.g. `en`. */
export const DEFAULT_LOCALE_DIR: string =
  content.defaultDir ?? i18n.defaultLocale ?? 'en';

/** Every locale code, in site order (the default locale first). */
export const LOCALE_CODES: string[] = (i18n.locales ?? []).map((l) => l.code);

/** Locales that carry translations: every locale except the default one. */
export const TRANSLATED_LOCALES: string[] = LOCALE_CODES.filter(
  (code) => code !== DEFAULT_LOCALE_DIR,
);

/** The four content collections, in nav order. */
export const COLLECTIONS = ['articles', 'concepts', 'faqs', 'resources'] as const;
export type Collection = (typeof COLLECTIONS)[number];

/** A collection folder: `<content>/<locale>/<name>`. */
export function collectionDir(name: Collection | string, locale: string = DEFAULT_LOCALE_DIR): string {
  return `${CONTENT_ROOT}/${locale}/${name}`;
}

/** The repo-relative path of one page, for source/history/edit links. */
export function contentFilePath(
  name: Collection | string,
  id: string,
  locale: string = DEFAULT_LOCALE_DIR,
): string {
  return `${collectionDir(name, locale)}/${id}.md`;
}

/**
 * A repo-relative path under the content root, for links that already carry
 * their own locale and collection, e.g. contentRepoPath('fr', 'faqs/x.md').
 */
export function contentRepoPath(...parts: string[]): string {
  return [CONTENT_ROOT, ...parts].join('/');
}