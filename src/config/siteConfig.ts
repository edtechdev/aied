/**
 * siteConfig.ts — typed access to site.config.json (the single source of
 * truth for site-wide metadata: title, short name, URLs, editor, license).
 * Astro/TS code imports this; the Python tooling (tooling/build-epub.py,
 * tooling/scripts/*.py) reads the same site.config.json directly via json.
 */
import raw from '../../site.config.json';

export interface SiteConfig {
  name: string;
  shortName: string;
  brandName: string;
  description: string;
  lang: string;
  url: string;
  basePath: string;
  repoUrl: string;
  issuesUrl: string;
  editor: {
    name: string;
    contactUrl: string;
  };
  // People accountable for the corpus and for individual pages. Page frontmatter
  // references these by id so names live in one place; AI systems are never listed
  // here (see AI-USE.md).
  contributors: Array<{
    id: string;
    kind: 'human' | 'ai';
    role: string;
    name: string;
    contactUrl?: string;
  }>;
  // Standing AI-use disclosure: which models are in use, and from which date each
  // took over. The policy text itself lives in AI-USE.md.
  aiDisclosure: {
    policy: string;
    harness: string;
    models: Array<{ id: string; since: string; note?: string }>;
  };
  // Internationalization. `defaultLocale` has no URL prefix (the
  // `hideDefaultLocalePrefix: true` convention): /aied/ is English, /aied/fr/ is
  // French. `fallbackLocale` is what a locale shows for a page it has not
  // translated yet. Adding a locale here is what makes it routable and puts it in
  // the language switcher — nothing else has to change.
  i18n: {
    defaultLocale: string;
    fallbackLocale?: string | null;
    hideDefaultLocalePrefix?: boolean;
    locales: Array<{ code: string; label: string }>;
  };
  license: {
    name: string;
    fullName: string;
    url: string;
    image: string;
    imageAlt: string;
  };
  theme: {
    background: string;
    primary: string;
  };
}

const siteConfig = raw as SiteConfig;
export default siteConfig;
