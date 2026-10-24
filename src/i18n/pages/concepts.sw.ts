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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
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
  strandBlurbs: {
    'Foundations of AI in education':
      'Mtazamo mwavuli wa uwanja wenyewe: Akili Bandia katika elimu ni nini, ilibadilikaje, na mada zinazovuka makundi (ujuzi wa Akili Bandia, ushirikiano kati ya binadamu na Akili Bandia, uwezo wa mtu kujiamulia) zinazounda kila tawi lingine.',
    'Learning and instruction':
      'Jinsi Akili Bandia inavyosaidia kujifunza na ufundishaji: kupitia mbinu za ufundishaji, nadharia za kujifunza na michakato inayomlenga mwanafunzi ambamo inafanya kazi.',
    'Technologies and techniques':
      'Tabaka la kiufundi: mifano na mbinu za Akili Bandia zinazoendesha teknolojia ya elimu, na mifumo ya kuunda mifano ya mwanafunzi na ya kumfundisha mmoja mmoja iliyojengwa juu yao.',
    'AI in the disciplines':
      'Jinsi Akili Bandia inavyotumika katika masomo ya kitaaluma na viwango vya elimu: wigo wa maeneo ya masomo ya uwanja huu.',
    'Assessment and measurement':
      'Jinsi Akili Bandia inavyowatathmini wanafunzi na kubadilisha jinsi tunavyotathmini mifumo yake na athari zake.',
    'Equity, ethics, and responsible use':
      'Usawa, ufikiaji na uwajibikaji ni msingi wa Akili Bandia katika elimu.',
  },
  empty: 'Bado hakuna kurasa za dhana.',
};

export default sw;
