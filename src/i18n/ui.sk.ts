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

const sk: UiStrings = {
  more: 'Viac',
  toolsLink: 'Nástroje a zdroje',
  journalLink: 'Zoznam noviniek',
  faqLink: 'Často kladené otázky',
  language: 'Jazyk',
  chooseLanguage: 'Vyberte jazyk',
  notTranslated: 'Len po anglicky',
  notTranslatedHint:
    'Táto stránka ešte nie je preložená, takže odkaz otvorí domovskú stránku v danom jazyku.',
  translationNoticeHtml: '',
  originalPageLabel: 'Prečítajte si túto stránku po anglicky',
  chrome: {
    siteName: 'Vedecká databáza o AI v edukácii',
    siteBrand: 'Vedecká databáza AIEd',
    lastVerified: 'naposledy overené',
    home: 'Domov',
    concepts: 'Pojmy',
    articles: 'Články',
    frequentlyAskedQuestions: 'Často kladené otázky',
    faqs: 'Časté otázky',
    resources: 'Zdroje',
    starred: 'S hviezdičkou',
    starredCount: '{count} s hviezdičkou',
    starredNone: 'Žiadne',
    rss: 'RSS',
    search: 'Hľadať',
    searchPlaceholder: 'Hľadajte články, pojmy a často kladené otázky...',
    chatWithAi: 'Chatovať s AI',
    useWithAi: 'Použiť s AI',
    themeToggle: 'Prepnúť svetlý/tmavý režim',
    toggleNavigation: 'Prepnúť navigáciu',
    closeNavigation: 'Zavrieť navigáciu',
    conceptNavigation: 'Navigácia pojmov',
    collapseSidebar: 'Zbaliť bočný panel',
    expandSidebar: 'Rozbaliť bočný panel',
    sidebarSections: 'Sekcie bočného panelu',
    knowledgeBaseTools: 'Nástroje vedeckej databázy',
    onThisPage: 'Na tejto stránke',
    recentActivity: 'Nedávna aktivita',
    previous: 'Predchádzajúce',
    next: 'Ďalšie',
    pageNavigation: 'Navigácia na stránke',
    starThisPage: 'Pridať túto stránku medzi obľúbené',
    metadata: 'Metadáta',
    noFaqsYet: 'Zatiaľ žiadne často kladené otázky.',
    source: 'Zdroj',
    edit: 'Upraviť',
    history: 'História',
    embed: 'Vložiť',
    embedThisPage: 'Vložiť túto stránku',
    embedDesc: 'Skopírujte kód nižšie a vložte túto stránku do systému správy výučby alebo iného webu. Vložená verzia zobrazuje len obsah stránky — skrýva hlavičku webu, navigáciu a pätu.',
    embedCode: 'Kód na vloženie',
    copyCode: 'Kopírovať kód',
    copied: 'Skopírované!',
    copyFailed: 'Kopírovanie zlyhalo',
    close: 'Zavrieť',
    chat: 'Chat',
    install: 'Inštalovať',
    installHint: 'Pridajte si ho na plochu pre prístup offline.',
    dismissInstall: 'Odmietnuť výzvu na inštaláciu',
    recentlyAddedPages: 'Nedávno pridané stránky',
    recentlyUpdatedConcepts: 'Nedávno aktualizované pojmy',
    viewAllPages: 'Zobraziť všetky stránky →',
    statsArticles: 'články',
    statsConcepts: 'pojmy',
    statsFaqs: 'časté otázky',
    statsResources: 'zdroje',
    statsLastUpdated: 'naposledy aktualizované',
    statsAria: 'Čo vedecká databáza obsahuje',
    countConcepts: '{count} pojmov',
    countFaqs: '{count} často kladených otázok',
    umbrellaConcept: 'AI v edukácii',
    disclaimer: 'Upozornenie: Výstup generovaný AI môže obsahovať nepresnosti alebo chyby.',
    metadataLabels: {
      type: 'Typ',
      page_kind: 'Druh stránky',
      research_method: 'Návrh štúdie',
      discipline: 'Disciplína',
      level: 'Úroveň',
      audience: 'Zamýšľaný okruh čitateľov',
      confidence: 'Dôveryhodnosť',
      resource_type: 'Typ zdroja',
      access: 'Prístup',
      license: 'Licencia',
      created: 'Vytvorené',
      updated: 'Aktualizované',
      sources: 'Zdroje',
      connected_faqs: 'Prepojené často kladené otázky',
      connected_resources: 'Prepojené zdroje',
    },
    resourceLabels: {
      open: 'Otvoriť {title}',
      madeBy: 'Autor',
      sourceCode: 'Zdrojový kód',
      sourceCodeAvailable: 'k dispozícii',
      type: 'Typ',
      license: 'Licencia',
      linkChecked: 'Odkaz overený',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Verejná doména',
    footerLicenseHtml:
      'Tento web vytvoril <strong>agent AI</strong> a je venovaný verejnej doméne pod licenciou <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Žiadne práva vyhradené.',
    footerIssuesHtml:
      'Našli ste problém s obsahom?<br>\n          Nahláste ho, prosím, <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">na GitHube</a>, alebo kontaktujte vývojára webu, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default sk;
