/**
 * Interface strings (chrome) per locale: the header's more menu, the language
 * switcher and the notice shown on a translated page. Docs-site generators ship
 * translated UI packs for their own chrome; this is the equivalent for the pages
 * translated here.
 */
export interface UiStrings {
  /** Accessible name of the overflow ("more") button in the header. */
  more: string;
  /** Label of the tools and resources entry in the overflow menu. */
  toolsLink: string;
  /** Label of the journal entry in the overflow menu. */
  journalLink: string;
  /** Label of the FAQ entry in the overflow menu. */
  faqLink: string;
  /** Label and accessible name of the language switcher button. */
  language: string;
  /** Heading inside the switcher popover. */
  chooseLanguage: string;
  /** Suffix shown for a locale that has no translation of the current page. */
  notTranslated: string;
  /** Tooltip on the entry that is not translated. */
  notTranslatedHint: string;
  /** HTML notice shown at the top of a translated page. */
  translationNoticeHtml: string;
  /** Link text that points back at the English page a translation came from. */
  originalPageLabel: string;
  /**
   * Site chrome: everything around the page content — sidebar section names, header
   * labels, the table of contents heading, the statistics labels, the previous/next
   * navigation, the source buttons and the footer. English by default; a locale that
   * translates these strings renders a fully localized shell.
   */
  chrome: {
    siteName: string;
    /** Header brand text: the site name with the AIEd acronym, localized. */
    siteBrand: string;
    /** Prefix for a resource page's verification date. */
    lastVerified: string;
    home: string;
    concepts: string;
    articles: string;
    frequentlyAskedQuestions: string;
    faqs: string;
    resources: string;
    starred: string;
    starredCount: string;
    starredNone: string;
    rss: string;
    search: string;
    searchPlaceholder: string;
    chatWithAi: string;
    useWithAi: string;
    themeToggle: string;
    toggleNavigation: string;
    closeNavigation: string;
    conceptNavigation: string;
    collapseSidebar: string;
    expandSidebar: string;
    sidebarSections: string;
    knowledgeBaseTools: string;
    onThisPage: string;
    recentActivity: string;
    previous: string;
    next: string;
    pageNavigation: string;
    starThisPage: string;
    metadata: string;
    noFaqsYet: string;
    source: string;
    edit: string;
    history: string;
    embed: string;
    embedThisPage: string;
    embedDesc: string;
    embedCode: string;
    copyCode: string;
    /** Transient copy-button feedback, after a successful / failed clipboard write. */
    copied: string;
    copyFailed: string;
    close: string;
    chat: string;
    install: string;
    installHint: string;
    dismissInstall: string;
    recentlyAddedPages: string;
    recentlyUpdatedConcepts: string;
    viewAllPages: string;
    statsArticles: string;
    statsConcepts: string;
    statsFaqs: string;
    statsResources: string;
    statsLastUpdated: string;
    statsAria: string;
    countConcepts: string;
    countFaqs: string;
    umbrellaConcept: string;
    disclaimer: string;
    metadataLabels: Record<string, string>;
    /** Labels of the resource page's metadata block (Open / Made by / Type / ...). */
    resourceLabels: {
      /** Visit-link text; `{title}` is replaced with the resource title. */
      open: string;
      madeBy: string;
      sourceCode: string;
      /** Link text of the "source code available" link. */
      sourceCodeAvailable: string;
      type: string;
      license: string;
      linkChecked: string;
    };
    /**
     * Name of the public-domain dedication, shown beside the CC0 mark in the
     * footer (the mark is an inline SVG and carries no text of its own). The
     * visible label is the link's accessible name, so it replaces the fixed
     * English alt text the footer's raster badge used to carry.
     */
    publicDomainLabel: string;
    /** Footer sentences with links; {licenseUrl}, {licenseName}, {issuesUrl}, {contactUrl}, {editorName} are substituted at render. */
    footerLicenseHtml: string;
    footerIssuesHtml: string;
  };
}

const fi: UiStrings = {
  more: 'Lisää',
  toolsLink: 'Työkalut ja resurssit',
  journalLink: 'Päiväkirja',
  faqLink: 'UKK',
  language: 'Kieli',
  chooseLanguage: 'Valitse kieli',
  notTranslated: 'Vain englanniksi',
  notTranslatedHint:
    'Tätä sivua ei ole vielä käännetty, joten linkki avaa kyseisen kielen kotisivun.',
  translationNoticeHtml: '',
  originalPageLabel: 'Lue tämä sivu englanniksi',
  chrome: {
    siteName: 'Tekoäly koulutuksessa -tietopankki',
    siteBrand: 'AIEd-tietopankki',
    lastVerified: 'viimeksi tarkistettu',
    home: 'Etusivu',
    concepts: 'Käsitteet',
    articles: 'Artikkelit',
    frequentlyAskedQuestions: 'Usein kysytyt kysymykset',
    faqs: 'UKK',
    resources: 'Resurssit',
    starred: 'Tähdellä merkityt',
    starredCount: '{count} tähdellä merkittyä',
    starredNone: 'Ei yhtään',
    rss: 'RSS',
    search: 'Haku',
    searchPlaceholder: 'Hae artikkeleita, käsitteitä ja UKK:ita...',
    chatWithAi: 'Keskustele tekoälyn kanssa',
    useWithAi: 'Käytä tekoälyn kanssa',
    themeToggle: 'Vaihda vaalea ja tumma tila',
    toggleNavigation: 'Näytä tai piilota navigointi',
    closeNavigation: 'Sulje navigointi',
    conceptNavigation: 'Käsitteiden selaus',
    collapseSidebar: 'Kutista sivupalkki',
    expandSidebar: 'Laajenna sivupalkki',
    sidebarSections: 'Sivupalkin osiot',
    knowledgeBaseTools: 'Tietopankin työkalut',
    onThisPage: 'Tällä sivulla',
    recentActivity: 'Viimeaikainen toiminta',
    previous: 'Edellinen',
    next: 'Seuraava',
    pageNavigation: 'Sivujen selaus',
    starThisPage: 'Merkitse tämä sivu tähdellä',
    metadata: 'Metatiedot',
    noFaqsYet: 'UKK:ita ei ole vielä.',
    source: 'Lähde',
    edit: 'Muokkaa',
    history: 'Historia',
    embed: 'Upota',
    embedThisPage: 'Upota tämä sivu',
    embedDesc:
      'Kopioi alla oleva koodi upottaaksesi tämän sivun oppimisympäristöön tai muulle verkkosivustolle. Upotettu versio näyttää vain sivun sisällön — sivuston otsikko, navigointi ja alatunniste jäävät siitä pois.',
    embedCode: 'Upotuskoodi',
    copyCode: 'Kopioi koodi',
    copied: 'Kopioitu!',
    copyFailed: 'Kopiointi epäonnistui',
    close: 'Sulje',
    chat: 'Keskustelu',
    install: 'Asenna',
    installHint: 'Lisää sovellus aloitusnäytöllesi, jotta voit lukea sivun ilman verkkoyhteyttä.',
    dismissInstall: 'Hylkää asennusehdotus',
    recentlyAddedPages: 'Viimeksi lisätyt sivut',
    recentlyUpdatedConcepts: 'Viimeksi päivitetyt käsitteet',
    viewAllPages: 'Näytä kaikki sivut →',
    statsArticles: 'artikkelia',
    statsConcepts: 'käsitettä',
    statsFaqs: 'UKK:ita',
    statsResources: 'resurssia',
    statsLastUpdated: 'viimeksi päivitetty',
    statsAria: 'Mitä tietopankki sisältää',
    countConcepts: '{count} käsitettä',
    countFaqs: '{count} UKK:ita',
    umbrellaConcept: 'AI koulutuksessa',
    disclaimer:
      'Vastuuvapauslauseke: tekoälyn tuottama sisältö voi sisältää epätarkkuuksia tai virheitä.',
    metadataLabels: {
      type: 'Tyyppi',
      page_kind: 'Sivun laji',
      research_method: 'Tutkimuksen suunnittelu',
      discipline: 'Tieteenala',
      level: 'Taso',
      audience: 'Kohderyhmä',
      confidence: 'Luotettavuus',
      resource_type: 'Resurssin tyyppi',
      access: 'Saatavuus',
      license: 'Lisenssi',
      created: 'Luotu',
      updated: 'Päivitetty',
      sources: 'Lähteet',
      connected_faqs: 'Liittyvät UKK:t',
      connected_resources: 'Liittyvät resurssit',
    },
    resourceLabels: {
      open: 'Avaa: {title}',
      madeBy: 'Tekijä',
      sourceCode: 'Lähdekoodi',
      sourceCodeAvailable: 'saatavana',
      type: 'Tyyppi',
      license: 'Lisenssi',
      linkChecked: 'Linkki tarkistettu',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Public domain',
    footerLicenseHtml:
      'Tämä sivusto on luotu <strong>tekoälyagentin</strong> toimesta, ja se on omistettu yleisön käyttöön <a href=\"{licenseUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{licenseName}</a> -lisenssillä. Oikeuksia ei ole varattu.',
    footerIssuesHtml:
      'Löysitkö sisällöstä virheen?<br>\n          <a href=\"{issuesUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">Ilmoita siitä GitHubissa</a> tai ota yhteyttä sivuston kehittäjään, <a href=\"{contactUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{editorName}</a>.',
  },
};

export default fi;
