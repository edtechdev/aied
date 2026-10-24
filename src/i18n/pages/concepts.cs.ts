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

const cs: ConceptsStrings = {
  title: 'Pojmy',
  h1: 'Pojmy',
  introHtml:
    'Všechny stránky pojmů na webu, ve stejných sekcích jako levý postranní panel. Každá říká, co znamená jeden pojem v AI a vzdělávání, co o něm zjistil výzkum a z kterých studií vychází. <a href="/aied/concepts/ai-education/">AI ve vzdělávání</a> je zastřešující pojem, který je spojuje.',
  browseHtml:
    'Stránky pojmů vycházejí také jako <a href="/aied/aied.epub">EPUB</a> nebo <a href="/aied/aied.pdf">PDF</a> pro čtení offline. Chcete-li místo toho začít od otázky, studie, nástroje, hledání nebo vlastního asistenta, podívejte se na <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">deník</a>, <a href="/aied/resources">zdroje</a>, <a href="/aied/search">hledání</a> nebo <a href="/aied/ai">stránku o AI</a>.',
  countTemplate: '{count} stránek pojmů, rozdělených do {strands} témat.',
  empty: 'Zatím žádné stránky pojmů.',
};

export default cs;
