/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
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

const pl: ConceptsStrings = {
  title: 'Pojęcia',
  h1: 'Pojęcia',
  introHtml:
    'Wszystkie strony pojęć w serwisie, w tych samych sekcjach co lewy panel boczny. Każda mówi, co oznacza dana idea w AI i edukacji, co pokazały badania i na jakich badaniach się opiera. <a href="/aied/concepts/ai-education/">AI w edukacji</a> to pojęcie nadrzędne, które je łączy.',
  browseHtml:
    'Strony pojęć są też dostępne jako <a href="/aied/aied.epub">EPUB</a> lub <a href="/aied/aied.pdf">PDF</a> do czytania offline. Aby zacząć od pytania, artykułu, narzędzia, wyszukiwania lub własnego asystenta, zobacz <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">dziennik</a>, <a href="/aied/resources">zasoby</a>, <a href="/aied/search">wyszukiwanie</a> lub <a href="/aied/ai">stronę AI</a>.',
  countTemplate: '{count} stron pojęć, pogrupowanych w {strands} działach.',
  empty: 'Brak jeszcze stron pojęć.',
};

export default pl;
