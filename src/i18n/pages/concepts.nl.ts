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

const nl: ConceptsStrings = {
  title: 'Concepten',
  h1: 'Concepten',
  introHtml:
    'Alle conceptpagina\'s van de site, in dezelfde secties als de linkerzijbalk. Elke pagina zegt wat een idee in AI en onderwijs betekent, wat het onderzoek erover vond en op welke studies ze steunt. <a href="/aied/concepts/ai-education/">AI in het onderwijs</a> is het overkoepelende concept dat ze verbindt.',
  browseHtml:
    'De conceptpagina\'s zijn er ook als <a href="/aied/aied.epub">EPUB</a> of <a href="/aied/aied.pdf">PDF</a> om offline te lezen. Wil je liever beginnen bij een vraag, een artikel, een tool, een zoekopdracht of je eigen assistent, kijk dan bij de <a href="/aied/faq">FAQ</a>, het <a href="/aied/journal">journaal</a>, de <a href="/aied/resources">bronnen</a>, <a href="/aied/search">zoeken</a> of de <a href="/aied/ai">AI-pagina</a>.',
  countTemplate: '{count} conceptpagina\'s, gegroepeerd in {strands} secties.',
  strandBlurbs: {
    'Foundations of AI in education':
      'De brede blik op het vakgebied zelf: wat AI in het onderwijs is, hoe het zich ontwikkelde, en de overkoepelende thema\'s (AI-geletterdheid, samenwerking tussen mens en AI, agency) die elke andere sectie vormgeven.',
    'Learning and instruction':
      'Hoe AI leren en onderwijzen ondersteunt, via de didactiek, de leertheorieën en de processen gericht op de lerende waarbinnen AI opereert.',
    'Technologies and techniques':
      'De technische laag: de AI-modellen en -methoden die onderwijstechnologie aandrijven, en de leermodellering en tutorsystemen die daarop zijn gebouwd.',
    'AI in the disciplines':
      'Hoe AI wordt toegepast in de vakgebieden en op de verschillende onderwijsniveaus: de breedte van de onderwerpen die het veld bestrijkt.',
    'Assessment and measurement':
      'Hoe AI zowel leerlingen beoordeelt als verandert hoe we AI-systemen en hun impact evalueren.',
    'Equity, ethics, and responsible use':
      'Gelijkheid, toegang en verantwoordelijkheid staan centraal in AI in het onderwijs.',
  },
  empty: 'Nog geen conceptpagina\'s.',
};

export default nl;
