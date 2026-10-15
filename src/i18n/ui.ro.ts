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

const ro: UiStrings = {
  more: 'Mai mult',
  toolsLink: 'Instrumente și resurse',
  journalLink: 'Jurnal',
  faqLink: 'FAQ',
  language: 'Limbă',
  chooseLanguage: 'Alege o limbă',
  notTranslated: 'Doar în engleză',
  notTranslatedHint:
    'Această pagină nu este încă tradusă, deci linkul deschide pagina principală în acea limbă.',
  translationNoticeHtml: '',
  originalPageLabel: 'Citește această pagină în engleză',
  chrome: {
    siteName: 'Baza de cunoștințe despre inteligența artificială în educație',
    siteBrand: 'Baza de cunoștințe AIEd',
    lastVerified: 'verificat ultima dată',
    home: 'Acasă',
    concepts: 'Concepte',
    articles: 'Articole',
    frequentlyAskedQuestions: 'Întrebări frecvente',
    faqs: 'FAQ',
    resources: 'Resurse',
    starred: 'Favorite',
    starredCount: '{count} favorite',
    starredNone: 'Niciunul',
    rss: 'RSS',
    search: 'Căutare',
    searchPlaceholder: 'Caută articole, concepte și FAQ...',
    chatWithAi: 'Discută cu AI',
    useWithAi: 'Folosește cu AI',
    themeToggle: 'Comută modul luminos/întunecat',
    toggleNavigation: 'Comută navigația',
    closeNavigation: 'Închide navigația',
    conceptNavigation: 'Navigare prin concepte',
    collapseSidebar: 'Restrânge bara laterală',
    expandSidebar: 'Extinde bara laterală',
    sidebarSections: 'Secțiunile barei laterale',
    knowledgeBaseTools: 'Instrumente ale bazei de cunoștințe',
    onThisPage: 'Pe această pagină',
    recentActivity: 'Activitate recentă',
    previous: 'Anterioară',
    next: 'Următoare',
    pageNavigation: 'Navigare între pagini',
    starThisPage: 'Marchează această pagină cu stea',
    metadata: 'Metadate',
    noFaqsYet: 'Niciun FAQ încă.',
    source: 'Sursă',
    edit: 'Editează',
    history: 'Istoric',
    embed: 'Încorporează',
    embedThisPage: 'Încorporează această pagină',
    embedDesc:
      'Copiază codul de mai jos pentru a încorpora această pagină într-un sistem de management al învățării sau pe alt site web. Versiunea încorporată arată doar conținutul paginii — ascunde antetul site-ului, navigația și subsolul.',
    embedCode: 'Cod de încorporare',
    copyCode: 'Copiază codul',
    close: 'Închide',
    chat: 'Chat',
    install: 'Instalează',
    installHint: 'Adaugă pe ecranul principal pentru acces offline.',
    dismissInstall: 'Închide invitația de instalare',
    recentlyAddedPages: 'Pagini adăugate recent',
    recentlyUpdatedConcepts: 'Concepte actualizate recent',
    viewAllPages: 'Vezi toate paginile →',
    statsArticles: 'articole',
    statsConcepts: 'concepte',
    statsFaqs: 'FAQ',
    statsResources: 'resurse',
    statsLastUpdated: 'actualizat ultima dată',
    statsAria: 'Ce conține baza de cunoștințe',
    countConcepts: '{count} concepte',
    countFaqs: '{count} FAQ',
    umbrellaConcept: 'Inteligența artificială în educație',
    disclaimer:
      'Avertisment: rezultatele generate de AI pot conține inexactități sau erori.',
    metadataLabels: {
      type: 'Tip',
      page_kind: 'Tipul paginii',
      research_method: 'Modelul studiului',
      discipline: 'Disciplină',
      level: 'Nivel',
      audience: 'Public țintă',
      confidence: 'Încredere',
      resource_type: 'Tip de resursă',
      access: 'Acces',
      license: 'Licență',
      created: 'Creat',
      updated: 'Actualizat',
      sources: 'Surse',
      connected_faqs: 'FAQ conexe',
      connected_resources: 'Resurse conexe',
    },
    resourceLabels: {
      open: 'Deschide {title}',
      madeBy: 'Realizat de',
      sourceCode: 'Cod sursă',
      sourceCodeAvailable: 'disponibil',
      type: 'Tip',
      license: 'Licență',
      linkChecked: 'Link verificat',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Domeniu public',
    footerLicenseHtml:
      'Acest site web a fost generat de un <strong>agent AI</strong> și este dedicat domeniului public sub licența <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Nicio drept nu este rezervat.',
    footerIssuesHtml:
      'Ai găsit o problemă în conținut?<br>\n          <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">Raporteaz-o pe GitHub</a> sau contactează dezvoltatorul site-ului, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default ro;
