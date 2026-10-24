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

const da: ConceptsStrings = {
  title: 'Begreber',
  h1: 'Begreber',
  introHtml:
    'Alle begrebssider på sitet, i de samme afsnit som sidepanelet til venstre. Hver side siger, hvad en idé inden for AI og uddannelse betyder, hvad forskningen fandt om den, og hvilke undersøgelser den bygger på. <a href="/aied/concepts/ai-education/">AI i uddannelse</a> er det overordnede begreb, der binder dem sammen.',
  browseHtml:
    "Begrebssiderne findes også som <a href=\"/aied/aied.epub\">EPUB</a> eller <a href=\"/aied/aied.pdf\">PDF</a> til offline læsning. Vil du i stedet starte med et spørgsmål, en artikel, et værktøj, en søgning eller din egen assistent, så se <a href=\"/aied/faq\">FAQ'er</a>, <a href=\"/aied/journal\">journalen</a>, <a href=\"/aied/resources\">ressourcerne</a>, <a href=\"/aied/search\">søgning</a> eller <a href=\"/aied/ai\">AI-siden</a>.",
  countTemplate: '{count} begrebssider, grupperet i {strands} sektioner.',
  empty: 'Ingen begrebssider endnu.',
};

export default da;
