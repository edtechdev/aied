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

const nl: UiStrings = {
  more: 'Meer',
  toolsLink: 'Tools en bronnen',
  journalLink: 'Journaal',
  faqLink: 'FAQ',
  language: 'Taal',
  chooseLanguage: 'Kies een taal',
  notTranslated: 'Alleen Engels',
  notTranslatedHint:
    'Deze pagina is nog niet vertaald, daarom opent de link de startpagina in die taal.',
  translationNoticeHtml: '',
  originalPageLabel: 'Lees deze pagina in het Engels',
  chrome: {
    siteName: 'Kennisbank over AI in het onderwijs',
    siteBrand: 'AIEd-kennisbank',
    lastVerified: 'laatst gecontroleerd',
    home: 'Startpagina',
    concepts: 'Concepten',
    articles: 'Artikelen',
    frequentlyAskedQuestions: 'Veelgestelde vragen',
    faqs: 'FAQ\'s',
    resources: 'Bronnen',
    starred: 'Favorieten',
    starredCount: '{count} favorieten',
    starredNone: 'Geen',
    rss: 'RSS',
    search: 'Zoeken',
    searchPlaceholder: 'Zoek artikelen, concepten en FAQ\'s...',
    chatWithAi: 'Chat met AI',
    useWithAi: 'Gebruik met AI',
    themeToggle: 'Schakel tussen licht- en donkere modus',
    toggleNavigation: 'Navigatie in-/uitschakelen',
    closeNavigation: 'Navigatie sluiten',
    conceptNavigation: 'Conceptnavigatie',
    collapseSidebar: 'Zijbalk inklappen',
    expandSidebar: 'Zijbalk uitklappen',
    sidebarSections: 'Zijbalksecties',
    knowledgeBaseTools: 'Hulpmiddelen van de kennisbank',
    onThisPage: 'Op deze pagina',
    recentActivity: 'Recente activiteit',
    previous: 'Vorige',
    next: 'Volgende',
    pageNavigation: 'Paginanavigatie',
    starThisPage: 'Voeg deze pagina toe aan favorieten',
    metadata: 'Metadata',
    noFaqsYet: 'Nog geen FAQ\'s.',
    source: 'Bron',
    edit: 'Bewerken',
    history: 'Geschiedenis',
    embed: 'Insluiten',
    embedThisPage: 'Deze pagina insluiten',
    embedDesc:
      'Kopieer de onderstaande code om deze pagina in een leeromgeving of op een andere website in te sluiten. De ingesloten versie toont alleen de inhoud van de pagina — de sitekop, navigatie en voettekst zijn verborgen.',
    embedCode: 'Insluitcode',
    copyCode: 'Code kopiëren',
    copied: 'Gekopieerd!',
    copyFailed: 'Kopiëren mislukt',
    close: 'Sluiten',
    chat: 'Chat',
    install: 'Installeren',
    installHint: 'Voeg toe aan je startscherm voor offline toegang.',
    dismissInstall: 'Installatiemelding sluiten',
    recentlyAddedPages: 'Recent toegevoegde pagina\'s',
    recentlyUpdatedConcepts: 'Recent bijgewerkte concepten',
    viewAllPages: 'Bekijk alle pagina\'s →',
    statsArticles: 'artikelen',
    statsConcepts: 'concepten',
    statsFaqs: 'FAQ\'s',
    statsResources: 'bronnen',
    statsLastUpdated: 'laatst bijgewerkt',
    statsAria: 'Wat de kennisbank bevat',
    countConcepts: '{count} concepten',
    countFaqs: '{count} FAQ\'s',
    umbrellaConcept: 'AI in het onderwijs',
    disclaimer:
      'Disclaimer: door AI gegenereerde uitvoer kan onnauwkeurigheden of fouten bevatten.',
    metadataLabels: {
      type: 'Type',
      page_kind: 'Soort pagina',
      research_method: 'Onderzoeksopzet',
      discipline: 'Vakgebied',
      level: 'Niveau',
      audience: 'Beoogde doelgroep',
      confidence: 'Betrouwbaarheid',
      resource_type: 'Soort bron',
      access: 'Toegang',
      license: 'Licentie',
      created: 'Aangemaakt',
      updated: 'Bijgewerkt',
      sources: 'Bronnen',
      connected_faqs: 'Gerelateerde FAQ\'s',
      connected_resources: 'Gerelateerde bronnen',
    },
    resourceLabels: {
      open: 'Open {title}',
      madeBy: 'Gemaakt door',
      sourceCode: 'Broncode',
      sourceCodeAvailable: 'beschikbaar',
      type: 'Type',
      license: 'Licentie',
      linkChecked: 'Link gecontroleerd',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Publiek domein',
    footerLicenseHtml:
      'Deze website is gegenereerd door een <strong>AI-agent</strong> en vrijgegeven in het publieke domein onder een <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>-licentie. Geen rechten voorbehouden.',
    footerIssuesHtml:
      'Iets gevonden in de inhoud?<br>\n          Meld het via <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>, of neem contact op met de ontwikkelaar van de site, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default nl;
