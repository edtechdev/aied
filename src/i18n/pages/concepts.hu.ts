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

const hu: ConceptsStrings = {
  title: 'Fogalmak',
  h1: 'Fogalmak',
  introHtml:
    'A webhely összes fogalomoldala, ugyanazokban a fejezetekben, mint a bal oldali oldalsáv. Mindegyik elmondja, mit jelent egy gondolat az AI és az oktatás területén, mit talált róla a kutatás, és mely vizsgálatokra támaszkodik. Az <a href="/aied/concepts/ai-education/">AI az oktatásban</a> oldal az a gyűjtőpont, amely összeköti őket.',
  browseHtml:
    'A fogalomoldalak <a href="/aied/aied.epub">EPUB</a> vagy <a href="/aied/aied.pdf">PDF</a> formában is elérhetők az offline olvasáshoz. Ha kérdésből, tanulmányból, eszközből, keresésből vagy saját asszisztenséből szeretne kiindulni, nézze meg a <a href="/aied/faq">GYIK</a> oldalt, a <a href="/aied/journal">naplót</a>, a <a href="/aied/resources">forrásokat</a>, a <a href="/aied/search">keresést</a> vagy az <a href="/aied/ai">AI-oldalt</a>.',
  countTemplate: '{count} fogalomoldal, {strands} fejezetbe csoportosítva.',
  empty: 'Még nincsenek fogalomoldalak.',
};

export default hu;
