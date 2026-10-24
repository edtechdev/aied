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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
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
  strandBlurbs: {
    'Foundations of AI in education':
      'Yläkatsaus itse alaan: mitä tekoäly koulutuksessa on, miten se kehittyi ja mitkä läpileikkaavat teemat (tekoälyn lukutaito, ihmisen ja tekoälyn yhteistyö, toimijuus) muovaavat kaikkia muita osastoja.',
    'Learning and instruction':
      'Miten tekoäly tukee opetusta ja oppimista niiden pedagogiikkojen, oppimisteorioiden ja oppijaan kohdistuvien prosessien kautta, joiden puitteissa tekoäly toimii.',
    'Technologies and techniques':
      'Tekninen kerros: tekoälymallit ja menetelmät, joihin koulutusteknologia nojaa, sekä niiden päälle rakennetut oppijan mallintamisen ja tutoroinnin järjestelmät.',
    'AI in the disciplines':
      'Miten tekoälyä sovelletaan eri oppiaineissa ja koulutusasteilla: alan aihealueiden kattavuus.',
    'Assessment and measurement':
      'Miten tekoäly sekä arvioi oppijoita että muuttaa tapaa, jolla arvioimme tekoälyjärjestelmiä ja niiden vaikutuksia.',
    'Equity, ethics, and responsible use':
      'Tasa-arvo, saatavuus ja vastuullinen käyttö ovat keskeisiä tekoälyssä koulutuksessa.',
  },
  empty: 'Ei vielä käsitesivuja.',
};

export default fi;
