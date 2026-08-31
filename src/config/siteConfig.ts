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
  license: string;
  theme: {
    background: string;
    primary: string;
  };
}

const siteConfig = raw as SiteConfig;
export default siteConfig;
