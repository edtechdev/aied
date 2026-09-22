/**
 * Registry of translated page copy. One entry per locale; every locale exports the
 * same keys, so a page component renders any language without branching. Locales
 * with no module of their own fall back to the default locale (the
 * `fallbackLocale` behaviour), which is also what a missing page translation does.
 */
import { DEFAULT_LOCALE } from './config';
import homeEn, { type HomeStrings } from './pages/home.en';
import homeEs from './pages/home.es';
import homeFr from './pages/home.fr';
import homeZh from './pages/home.zh';
import aiEn, { type AiStrings } from './pages/ai.en';
import aiEs from './pages/ai.es';
import aiFr from './pages/ai.fr';
import aiZh from './pages/ai.zh';
import searchEn, { type SearchStrings } from './pages/search.en';
import searchEs from './pages/search.es';
import searchFr from './pages/search.fr';
import searchZh from './pages/search.zh';
import uiEn, { type UiStrings } from './ui.en';
import uiEs from './ui.es';
import uiFr from './ui.fr';
import uiZh from './ui.zh';

export interface PageStrings {
  home: HomeStrings;
  ai: AiStrings;
  search: SearchStrings;
  ui: UiStrings;
}

const REGISTRY: Record<string, PageStrings> = {
  en: { home: homeEn, ai: aiEn, search: searchEn, ui: uiEn },
  es: { home: homeEs, ai: aiEs, search: searchEs, ui: uiEs },
  fr: { home: homeFr, ai: aiFr, search: searchFr, ui: uiFr },
  zh: { home: homeZh, ai: aiZh, search: searchZh, ui: uiZh },
};

/** Copy for a locale, falling back to the default locale's copy. */
export function strings(locale: string): PageStrings {
  return REGISTRY[locale] || REGISTRY[DEFAULT_LOCALE];
}

export type { HomeStrings, AiStrings, SearchStrings, UiStrings };
