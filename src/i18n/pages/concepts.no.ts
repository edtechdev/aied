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

const no: ConceptsStrings = {
  title: 'Begreper',
  h1: 'Begreper',
  introHtml:
    'Alle begrepssidene på nettstedet, i de samme seksjonene som sidepanelet til venstre. Hver side sier hva en idé innen AI og utdanning betyr, hva forskningen fant om den, og hvilke studier den bygger på. <a href="/aied/concepts/ai-education/">AI i utdanning</a> er paraplyen som binder dem sammen.',
  browseHtml:
    'Begrepssidene finnes også som <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a> for lesing offline. Vil du heller starte fra et spørsmål, en artikkel, et verktøy, et søk eller din egen assistent, se <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">journalen</a>, <a href="/aied/resources">ressursene</a>, <a href="/aied/search">søk</a> eller <a href="/aied/ai">AI-siden</a>.',
  countTemplate: '{count} begrepssider, gruppert i {strands} seksjoner.',
  empty: 'Ingen begrepssider ennå.',
};

export default no;
