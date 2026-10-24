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

const fi: ConceptsStrings = {
  title: 'Käsitteet',
  h1: 'Käsitteet',
  introHtml:
    'Kaikki sivuston käsitesivut, samoissa osastoissa kuin vasen sivupalkki. Jokainen kertoo, mitä tekoälyyn ja koulutukseen liittyvä idea tarkoittaa, mitä tutkimus siitä löysi ja mihin tutkimuksiin se nojaa. <a href="/aied/concepts/ai-education/">AI koulutuksessa</a> on kattokäsite, joka sitoo ne yhteen.',
  browseHtml:
    'Käsitesivut ilmestyvät myös <a href="/aied/aied.epub">EPUB</a>- tai <a href="/aied/aied.pdf">PDF</a>-muodossa offline-lukemista varten. Jos haluat sen sijaan aloittaa kysymyksestä, artikkelista, työkalusta, hausta tai omasta avustajastasi, katso <a href="/aied/faq">UKK</a>, <a href="/aied/journal">päiväkirja</a>, <a href="/aied/resources">resurssit</a>, <a href="/aied/search">haku</a> tai <a href="/aied/ai">AI-sivu</a>.',
  countTemplate: '{count} käsitesivua, jaettuna {strands} osastoon.',
  empty: 'Ei vielä käsitesivuja.',
};

export default fi;
