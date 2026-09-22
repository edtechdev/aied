/**
 * Internationalization helpers, adapted to this site's Astro routing.
 *
 * The layout rules this site follows:
 *
 *   - the default locale (`en`) lives at the site root, with no URL prefix:
 *     /aied/ , /aied/ai , /aied/search
 *   - every other locale is a folder named by its code: /aied/es/ , /aied/fr/ ,
 *     /aied/zh/ , and translated pages mirror the default structure beneath it
 *     (/aied/fr/ai/)
 *   - a page with no translation for a locale falls back to the default locale's
 *     copy but keeps the localized URL, so no link dead-ends
 *   - links inside translated prose are authored the same way as in English; a
 *     root-relative link is moved into the active locale only when that route
 *     actually has a translation there, otherwise it keeps its authored target
 *
 * The locale list itself lives in site.config.json (`i18n`), so adding a language
 * is one config edit plus its content — no code change.
 */
import siteConfig from '../config/siteConfig';

export const I18N = siteConfig.i18n;
export const DEFAULT_LOCALE = I18N.defaultLocale;
export const LOCALES = I18N.locales;
export const LOCALE_CODES = LOCALES.map((l) => l.code);
export const NON_DEFAULT_LOCALES = LOCALE_CODES.filter((c) => c !== DEFAULT_LOCALE);

/** Routes that exist as real page-level translations today, one route per page. */
export const TRANSLATED_ROUTES = ['/', '/ai', '/search', '/resources', '/journal', '/faq'] as const;

export type Locale = string;

export function isLocale(code: string | undefined): code is Locale {
  return !!code && LOCALE_CODES.includes(code);
}

export function localeLabel(code: Locale): string {
  return LOCALES.find((l) => l.code === code)?.label || code;
}

/**
 * Text direction for a locale. `dir` comes from the locale entry in
 * site.config.json and defaults to `ltr`, the same rule the reference docs site
 * uses. The direction is set on <html>; content that falls back to another
 * language keeps ITS direction, so English shown under Arabic still reads
 * left-to-right.
 */
export function localeDir(code: Locale): 'ltr' | 'rtl' {
  return LOCALES.find((l) => l.code === code)?.dir === 'rtl' ? 'rtl' : 'ltr';
}

export function isRtl(code: Locale): boolean {
  return localeDir(code) === 'rtl';
}

/**
 * Locale -> routes that exist as translated content pages, built at build time
 * from the `translations` collection (`fr/faqs/x.md` -> 'fr' -> '/faqs/x').
 * Anything not in here and not in TRANSLATED_ROUTES is English-only, which is what
 * the language switcher and the internal-link localizer consult.
 */
export type TranslationMap = Record<string, string[]>;

export function translationMapFrom(
  entries: Array<{ id: string; data: { translation_of?: string } }>,
): TranslationMap {
  const map: TranslationMap = {};
  for (const e of entries) {
    // id is `<locale>/<type>/<slug>.md`; translation_of is `<type>/<slug>`
    const locale = e.id.split('/')[0];
    const route = '/' + (e.data.translation_of || e.id.split('/').slice(1).join('/').replace(/\.md$/, ''));
    (map[locale] ||= []).push(route);
  }
  return map;
}

/** True when `route` (site-relative, e.g. '/ai') has a translation for `locale`. */
export function hasTranslation(route: string, locale: Locale, map?: TranslationMap): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  if ((TRANSLATED_ROUTES as readonly string[]).includes(route)) return true;
  return !!map?.[locale]?.includes(route.replace(/\/+$/, '') || '/');
}

/** True when `route` is inherently translated (the three page-level routes). */
export function isPageRoute(route: string): boolean {
  return (TRANSLATED_ROUTES as readonly string[]).includes(route);
}

/** Site-relative route for a locale, e.g. localeHref('/ai', 'fr') -> '/aied/fr/ai'. */
export function localeHref(route: string, locale: Locale): string {
  const clean = route === '/' ? '' : route.replace(/\/+$/, '');
  const prefix = locale === DEFAULT_LOCALE && I18N.hideDefaultLocalePrefix !== false
    ? ''
    : `/${locale}`;
  return `${siteConfig.basePath}${prefix}${clean}/`;
}

/**
 * Localize an authored href. Root-relative links (`/aied/...`) are moved into
 * `locale` only when that route has a translation; external links, anchors, and
 * routes with no translation are returned unchanged — the same rule applied
 * so a link never points at a page that does not exist.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return href;
  if (!href.startsWith(`${siteConfig.basePath}/`) && href !== siteConfig.basePath) return href;
  const route = href.slice(siteConfig.basePath.length).replace(/\/+$/, '') || '/';
  if (!hasTranslation(route, locale)) return href;
  return localeHref(route, locale);
}

/** Rewrite every root-relative href in a block of authored HTML for the locale. */
export function localizeHtml(html: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return html;
  return html.replace(/href="([^"]+)"/g, (_m, href: string) => `href="${localizeHref(href, locale)}"`);
}

/** One entry per locale for the language switcher, marking untranslated pages. */
export function switcherEntries(route: string, currentLocale: Locale, map?: TranslationMap) {
  return LOCALES.map((l) => {
    const translated = hasTranslation(route, l.code, map);
    return {
      code: l.code,
      label: l.label,
      href: translated ? localeHref(route, l.code) : localeHref('/', l.code),
      translated,
      current: l.code === currentLocale,
    };
  });
}