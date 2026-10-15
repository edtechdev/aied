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

const sv: UiStrings = {
  more: 'Mer',
  toolsLink: 'Verktyg och resurser',
  journalLink: 'Journal',
  faqLink: 'Vanliga frågor',
  language: 'Språk',
  chooseLanguage: 'Välj språk',
  notTranslated: 'Endast engelska',
  notTranslatedHint:
    'Den här sidan är inte översatt ännu, så länken öppnar startsidan för det språket.',
  translationNoticeHtml: '',
  originalPageLabel: 'Läs den här sidan på engelska',
  chrome: {
    siteName: 'Kunskapsbas om AI i utbildningen',
    siteBrand: 'AIEd kunskapsbas',
    lastVerified: 'senast kontrollerad',
    home: 'Hem',
    concepts: 'Begrepp',
    articles: 'Artiklar',
    frequentlyAskedQuestions: 'Vanliga frågor',
    faqs: 'Vanliga frågor',
    resources: 'Resurser',
    starred: 'Stjärnmarkerade',
    starredCount: '{count} stjärnmarkerade',
    starredNone: 'Inga',
    rss: 'RSS',
    search: 'Sök',
    searchPlaceholder: 'Sök artiklar, begrepp och vanliga frågor...',
    chatWithAi: 'Chatta med AI',
    useWithAi: 'Använd med AI',
    themeToggle: 'Växla mellan ljust och mörkt läge',
    toggleNavigation: 'Växla navigering',
    closeNavigation: 'Stäng navigering',
    conceptNavigation: 'Begreppsnavigering',
    collapseSidebar: 'Fäll ihop sidofältet',
    expandSidebar: 'Expandera sidofältet',
    sidebarSections: 'Sidofältets avsnitt',
    knowledgeBaseTools: 'Kunskapsbasens verktyg',
    onThisPage: 'På den här sidan',
    recentActivity: 'Senaste aktivitet',
    previous: 'Föregående',
    next: 'Nästa',
    pageNavigation: 'Sidnavigering',
    starThisPage: 'Stjärnmarkera den här sidan',
    metadata: 'Metadata',
    noFaqsYet: 'Inga vanliga frågor ännu.',
    source: 'Källa',
    edit: 'Redigera',
    history: 'Historik',
    embed: 'Bädda in',
    embedThisPage: 'Bädda in den här sidan',
    embedDesc:
      'Kopiera koden nedan för att bädda in den här sidan i ett lärplattformssystem eller på en annan webbplats. Den inbäddade versionen visar bara sidans innehåll — den döljer webbplatsens sidhuvud, navigering och sidfot.',
    embedCode: 'Inbäddningskod',
    copyCode: 'Kopiera koden',
    close: 'Stäng',
    chat: 'Chatt',
    install: 'Installera',
    installHint: 'Lägg till på hemskärmen för åtkomst utan internet.',
    dismissInstall: 'Stäng installationsuppmaningen',
    recentlyAddedPages: 'Nyligen tillagda sidor',
    recentlyUpdatedConcepts: 'Nyligen uppdaterade begrepp',
    viewAllPages: 'Visa alla sidor →',
    statsArticles: 'artiklar',
    statsConcepts: 'begrepp',
    statsFaqs: 'vanliga frågor',
    statsResources: 'resurser',
    statsLastUpdated: 'senast uppdaterad',
    statsAria: 'Vad kunskapsbasen innehåller',
    countConcepts: '{count} begrepp',
    countFaqs: '{count} vanliga frågor',
    umbrellaConcept: 'AI i utbildningen',
    disclaimer:
      'Ansvarsfriskrivning: AI-genererat innehåll kan innehålla felaktigheter eller brister.',
    metadataLabels: {
      type: 'Typ',
      page_kind: 'Sidtyp',
      research_method: 'Studiedesign',
      discipline: 'Ämnesområde',
      level: 'Nivå',
      audience: 'Avsedd målgrupp',
      confidence: 'Tillförlitlighet',
      resource_type: 'Typ av resurs',
      access: 'Tillgång',
      license: 'Licens',
      created: 'Skapad',
      updated: 'Uppdaterad',
      sources: 'Källor',
      connected_faqs: 'Anslutna vanliga frågor',
      connected_resources: 'Anslutna resurser',
    },
    resourceLabels: {
      open: 'Öppna {title}',
      madeBy: 'Skapad av',
      sourceCode: 'Källkod',
      sourceCodeAvailable: 'tillgänglig',
      type: 'Typ',
      license: 'Licens',
      linkChecked: 'Länk kontrollerad',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Allmän egendom',
    footerLicenseHtml:
      'Den här webbplatsen har genererats av en <strong>AI-agent</strong> och är frigjord till allmän egendom under licensen <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Inga rättigheter reserverade.',
    footerIssuesHtml:
      'Hittat ett problem i innehållet?<br>\n          Vänligen <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">rapportera det på GitHub</a>, eller kontakta webbplatsens utvecklare, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default sv;
