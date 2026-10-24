/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const sw: ConceptsStrings = {
  title: 'Madhana',
  h1: 'Madhana',
  introHtml:
    'Kurasa zote za dhana kwenye tovuti, katika sehemu zile zile za upau wa kando wa kushoto. Kila moja inaeleza maana ya wazo katika AI na elimu, kile utafiti uligundua kuihusu, na masomo ambayo inayategemea. <a href="/aied/concepts/ai-education/">Akili Bandia katika Elimu</a> ni mwavuli unaoziunganisha.',
  browseHtml:
    'Kurasa za dhana zinapatikana pia kama <a href="/aied/aied.epub">EPUB</a> au <a href="/aied/aied.pdf">PDF</a> kwa kusoma nje ya mtandao. Kuanzia swali, makala, zana, utafutaji au msaidizi wako mwenyewe, tazama <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">jarida</a>, <a href="/aied/resources">rasilimali</a>, <a href="/aied/search">utafutaji</a> au <a href="/aied/ai">ukurasa wa AI</a>.',
  countTemplate: 'Kurasa {count} za dhana, zilizopangwa katika sehemu {strands}.',
  empty: 'Bado hakuna kurasa za dhana.',
};

export default sw;
