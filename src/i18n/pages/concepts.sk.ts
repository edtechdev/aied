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

const sk: ConceptsStrings = {
  title: 'Pojmy',
  h1: 'Pojmy',
  introHtml:
    'Všetky stránky pojmov na webe, v tých istých sekciách ako v ľavom bočnom paneli. Každá hovorí, čo znamená jedna myšlienka v AI a vzdelávaní, čo o nej zistil výskum a z ktorých štúdií vychádza. <a href="/aied/concepts/ai-education/">AI v edukácii</a> je zastrešujúci pojem, ktorý ich spája.',
  browseHtml:
    'Stránky pojmov vychádzajú aj ako <a href="/aied/aied.epub">EPUB</a> alebo <a href="/aied/aied.pdf">PDF</a> na čítanie offline. Ak chcete začať od otázky, práce, nástroja, hľadania alebo vlastného asistenta, pozrite si <a href="/aied/faq">časté otázky</a>, <a href="/aied/journal">zoznam noviniek</a>, <a href="/aied/resources">zdroje</a>, <a href="/aied/search">hľadanie</a> alebo <a href="/aied/ai">stránku AI</a>.',
  countTemplate: '{count} stránok pojmov, zoskupených do {strands} sekcií.',
  empty: 'Zatiaľ žiadne stránky pojmov.',
};

export default sk;
