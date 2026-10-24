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
  newsletterLink: string;
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

const no: UiStrings = {
  more: 'Mer',
  toolsLink: 'Verktøy og ressurser',
  journalLink: 'Journal',
  newsletterLink: 'Newsletter',
  faqLink: 'FAQ',
  language: 'Språk',
  chooseLanguage: 'Velg et språk',
  notTranslated: 'Bare på engelsk',
  notTranslatedHint:
    'Denne siden er ikke oversatt ennå, så lenken åpner startsiden for det språket.',
  translationNoticeHtml: '',
  originalPageLabel: 'Les denne siden på engelsk',
  chrome: {
    siteName: 'Kunnskapsbase om AI i utdanning',
    siteBrand: 'AIEd-kunnskapsbase',
    lastVerified: 'sist kontrollert',
    home: 'Hjem',
    concepts: 'Begreper',
    articles: 'Artikler',
    frequentlyAskedQuestions: 'Ofte stilte spørsmål',
    faqs: 'FAQ',
    resources: 'Ressurser',
    starred: 'Stjernemerkede',
    starredCount: '{count} stjernemerkede',
    starredNone: 'Ingen',
    rss: 'RSS',
    search: 'Søk',
    searchPlaceholder: 'Søk i artikler, begreper og FAQ …',
    chatWithAi: 'Chat med AI',
    useWithAi: 'Bruk med AI',
    themeToggle: 'Bytt mellom lys og mørk modus',
    toggleNavigation: 'Slå av/på navigasjon',
    closeNavigation: 'Lukk navigasjon',
    conceptNavigation: 'Begrepsnavigasjon',
    collapseSidebar: 'Skjul sidepanelet',
    expandSidebar: 'Utvid sidepanelet',
    sidebarSections: 'Seksjoner i sidepanelet',
    knowledgeBaseTools: 'Verktøy for kunnskapsbasen',
    onThisPage: 'På denne siden',
    recentActivity: 'Nylig aktivitet',
    previous: 'Forrige',
    next: 'Neste',
    pageNavigation: 'Sidenavigasjon',
    starThisPage: 'Stjernemerk denne siden',
    metadata: 'Metadata',
    noFaqsYet: 'Ingen FAQ ennå.',
    source: 'Kilde',
    edit: 'Rediger',
    history: 'Historikk',
    embed: 'Bygg inn',
    embedThisPage: 'Bygg inn denne siden',
    embedDesc:
      'Kopier koden nedenfor for å bygge inn denne siden i et læringsstøttesystem eller et annet nettsted. Den innbygde versjonen viser bare sideinnholdet — den skjuler nettstedets topptekst, navigasjon og bunntekst.',
    embedCode: 'Innbyggingskode',
    copyCode: 'Kopier kode',
    copied: 'Kopiert!',
    copyFailed: 'Kopiering mislyktes',
    close: 'Lukk',
    chat: 'Chat',
    install: 'Installer',
    installHint: 'Legg til på startskjermen for tilgang uten nett.',
    dismissInstall: 'Avvis installasjonsvarselet',
    recentlyAddedPages: 'Nylig tillagte sider',
    recentlyUpdatedConcepts: 'Nylig oppdaterte begreper',
    viewAllPages: 'Se alle sider →',
    statsArticles: 'artikler',
    statsConcepts: 'begreper',
    statsFaqs: 'FAQ',
    statsResources: 'ressurser',
    statsLastUpdated: 'sist oppdatert',
    statsAria: 'Hva kunnskapsbasen inneholder',
    countConcepts: '{count} begreper',
    countFaqs: '{count} FAQ',
    umbrellaConcept: 'AI i utdanning',
    disclaimer:
      'Ansvarsfraskrivelse: AI-generert innhold kan inneholde unøyaktigheter eller feil.',
    metadataLabels: {
      type: 'Type',
      page_kind: 'Sidetype',
      research_method: 'Studiedesign',
      discipline: 'Fagområde',
      level: 'Nivå',
      audience: 'Tiltenkt målgruppe',
      confidence: 'Sikkerhet',
      resource_type: 'Ressurstype',
      access: 'Tilgang',
      license: 'Lisens',
      created: 'Opprettet',
      updated: 'Oppdatert',
      sources: 'Kilder',
      connected_faqs: 'Tilknyttede FAQ',
      connected_resources: 'Tilknyttede ressurser',
    },
    resourceLabels: {
      open: 'Åpne {title}',
      madeBy: 'Laget av',
      sourceCode: 'Kildekode',
      sourceCodeAvailable: 'tilgjengelig',
      type: 'Type',
      license: 'Lisens',
      linkChecked: 'Link kontrollert',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Offentlig eiendom',
    footerLicenseHtml:
      'Dette nettstedet ble generert av en <strong>AI-agent</strong> og er frigitt til det offentlige domene under lisensen <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Ingen rettigheter forbeholdt.',
    footerIssuesHtml:
      'Har du funnet en feil i innholdet?<br>\n          <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">Rapporter den på GitHub</a>, eller kontakt utvikleren av nettstedet, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default no;
