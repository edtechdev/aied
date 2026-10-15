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

const da: UiStrings = {
  more: 'Mere',
  toolsLink: 'Værktøjer og ressourcer',
  journalLink: 'Journal',
  faqLink: 'FAQ',
  language: 'Sprog',
  chooseLanguage: 'Vælg et sprog',
  notTranslated: 'Kun på engelsk',
  notTranslatedHint:
    'Denne side er ikke oversat endnu, så linket åbner startsiden på det pågældende sprog.',
  translationNoticeHtml: '',
  originalPageLabel: 'Læs denne side på engelsk',
  chrome: {
    siteName: 'Vidensbase om kunstig intelligens i uddannelse',
    siteBrand: 'AIEd-vidensbase',
    lastVerified: 'sidst kontrolleret',
    home: 'Forside',
    concepts: 'Begreber',
    articles: 'Artikler',
    frequentlyAskedQuestions: 'Ofte stillede spørgsmål',
    faqs: 'FAQ\'er',
    resources: 'Ressourcer',
    starred: 'Stjernemærkede',
    starredCount: '{count} stjernemærket',
    starredNone: 'Ingen',
    rss: 'RSS',
    search: 'Søg',
    searchPlaceholder: 'Søg i artikler, begreber og FAQ\'er...',
    chatWithAi: 'Chat med AI',
    useWithAi: 'Brug med AI',
    themeToggle: 'Skift mellem lyst og mørkt tema',
    toggleNavigation: 'Vis eller skjul navigation',
    closeNavigation: 'Luk navigation',
    conceptNavigation: 'Navigation mellem begreber',
    collapseSidebar: 'Skjul sidepanelet',
    expandSidebar: 'Udvid sidepanelet',
    sidebarSections: 'Sektioner i sidepanelet',
    knowledgeBaseTools: 'Værktøjer til vidensbasen',
    onThisPage: 'På denne side',
    recentActivity: 'Seneste aktivitet',
    previous: 'Forrige',
    next: 'Næste',
    pageNavigation: 'Sidenavigation',
    starThisPage: 'Stjernemarkér denne side',
    metadata: 'Metadata',
    noFaqsYet: 'Ingen FAQ\'er endnu.',
    source: 'Kilde',
    edit: 'Rediger',
    history: 'Historik',
    embed: 'Indlejr',
    embedThisPage: 'Indlejr denne side',
    embedDesc:
      'Kopiér koden nedenfor for at indlejre denne side i et læringsstyringssystem eller på en anden hjemmeside. Den indlejrede version viser kun sidens indhold — den skjuler sidens header, navigation og footer.',
    embedCode: 'Indlejringskode',
    copyCode: 'Kopiér kode',
    close: 'Luk',
    chat: 'Chat',
    install: 'Installér',
    installHint: 'Føj til startskærmen for at få adgang uden net.',
    dismissInstall: 'Afvis installationsprompten',
    recentlyAddedPages: 'Senest tilføjede sider',
    recentlyUpdatedConcepts: 'Senest opdaterede begreber',
    viewAllPages: 'Se alle sider →',
    statsArticles: 'artikler',
    statsConcepts: 'begreber',
    statsFaqs: 'FAQ\'er',
    statsResources: 'ressourcer',
    statsLastUpdated: 'sidst opdateret',
    statsAria: 'Hvad vidensbasen indeholder',
    countConcepts: '{count} begreber',
    countFaqs: '{count} FAQ\'er',
    umbrellaConcept: 'AI i uddannelse',
    disclaimer:
      'Ansvarsfraskrivelse: AI-genereret indhold kan indeholde unøjagtigheder eller fejl.',
    metadataLabels: {
      type: 'Type',
      page_kind: 'Sidetype',
      research_method: 'Studietype',
      discipline: 'Fagområde',
      level: 'Niveau',
      audience: 'Tiltænkt målgruppe',
      confidence: 'Troværdighed',
      resource_type: 'Ressourcetype',
      access: 'Adgang',
      license: 'Licens',
      created: 'Oprettet',
      updated: 'Opdateret',
      sources: 'Kilder',
      connected_faqs: 'Relaterede FAQ\'er',
      connected_resources: 'Relaterede ressourcer',
    },
    resourceLabels: {
      open: 'Åbn {title}',
      madeBy: 'Lavet af',
      sourceCode: 'Kildekode',
      sourceCodeAvailable: 'tilgængelig',
      type: 'Type',
      license: 'Licens',
      linkChecked: 'Link kontrolleret',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Offentligt domæne',
    footerLicenseHtml:
      'Denne hjemmeside er genereret af en <strong>AI-agent</strong> og er frigivet til det offentlige domæne under en <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>-licens. Ingen rettigheder forbeholdes.',
    footerIssuesHtml:
      'Har du fundet en fejl i indholdet?<br>\n          Så <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">rapportér den på GitHub</a>, eller kontakt udvikleren bag hjemmesiden, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default da;
