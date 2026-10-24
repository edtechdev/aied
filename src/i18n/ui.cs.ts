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

const cs: UiStrings = {
  more: 'Více',
  toolsLink: 'Nástroje a zdroje',
  journalLink: 'Deník',
  newsletterLink: 'Newsletter',
  faqLink: 'FAQ',
  language: 'Jazyk',
  chooseLanguage: 'Vyberte jazyk',
  notTranslated: 'Pouze anglicky',
  notTranslatedHint:
    'Tato stránka ještě není přeložena, proto odkaz otevře domovskou stránku v tomto jazyce.',
  translationNoticeHtml: '',
  originalPageLabel: 'Přečtěte si tuto stránku v angličtině',
  chrome: {
    siteName: 'Znalostní báze AI ve vzdělávání',
    siteBrand: 'Znalostní báze AIEd',
    lastVerified: 'naposledy ověřeno',
    home: 'Domů',
    concepts: 'Pojmy',
    articles: 'Články',
    frequentlyAskedQuestions: 'Často kladené otázky',
    faqs: 'FAQ',
    resources: 'Zdroje',
    starred: 'Oblíbené',
    starredCount: '{count} oblíbených',
    starredNone: 'Žádné',
    rss: 'RSS',
    search: 'Hledat',
    searchPlaceholder: 'Hledat články, pojmy a FAQ...',
    chatWithAi: 'Chat s AI',
    useWithAi: 'Použití s AI',
    themeToggle: 'Přepnout světlý/tmavý režim',
    toggleNavigation: 'Přepnout navigaci',
    closeNavigation: 'Zavřít navigaci',
    conceptNavigation: 'Navigace po pojmech',
    collapseSidebar: 'Sbalit postranní panel',
    expandSidebar: 'Rozbalit postranní panel',
    sidebarSections: 'Sekce postranního panelu',
    knowledgeBaseTools: 'Nástroje znalostní báze',
    onThisPage: 'Na této stránce',
    recentActivity: 'Nedávná aktivita',
    previous: 'Předchozí',
    next: 'Další',
    pageNavigation: 'Navigace po stránkách',
    starThisPage: 'Přidat tuto stránku k oblíbeným',
    metadata: 'Metadata',
    noFaqsYet: 'Zatím žádná FAQ.',
    source: 'Zdroj',
    edit: 'Upravit',
    history: 'Historie',
    embed: 'Vložit',
    embedThisPage: 'Vložit tuto stránku',
    embedDesc: 'Zkopírujte níže uvedený kód a vložte tuto stránku do systému pro správu výuky nebo jiného webu. Vložená verze zobrazuje pouze obsah stránky — skrývá záhlaví, navigaci a zápatí webu.',
    embedCode: 'Kód pro vložení',
    copyCode: 'Kopírovat kód',
    copied: 'Zkopírováno!',
    copyFailed: 'Kopírování se nezdařilo',
    close: 'Zavřít',
    chat: 'Chat',
    install: 'Nainstalovat',
    installHint: 'Přidejte si web na plochu pro přístup offline.',
    dismissInstall: 'Zrušit výzvu k instalaci',
    recentlyAddedPages: 'Nedávno přidané stránky',
    recentlyUpdatedConcepts: 'Nedávno aktualizované pojmy',
    viewAllPages: 'Zobrazit všechny stránky →',
    statsArticles: 'články',
    statsConcepts: 'pojmy',
    statsFaqs: 'FAQ',
    statsResources: 'zdroje',
    statsLastUpdated: 'naposledy aktualizováno',
    statsAria: 'Co znalostní báze obsahuje',
    countConcepts: '{count} pojmů',
    countFaqs: '{count} FAQ',
    umbrellaConcept: 'AI ve vzdělávání',
    disclaimer: 'Upozornění: výstup generovaný AI může obsahovat nepřesnosti nebo chyby.',
    metadataLabels: {
      type: 'Typ',
      page_kind: 'Druh stránky',
      research_method: 'Typ studie',
      discipline: 'Obor',
      level: 'Úroveň',
      audience: 'Cílová skupina',
      confidence: 'Spolehlivost',
      resource_type: 'Typ zdroje',
      access: 'Přístup',
      license: 'Licence',
      created: 'Vytvořeno',
      updated: 'Aktualizováno',
      sources: 'Zdroje',
      connected_faqs: 'Související FAQ',
      connected_resources: 'Související zdroje',
    },
    resourceLabels: {
      open: 'Otevřít {title}',
      madeBy: 'Vytvořil',
      sourceCode: 'Zdrojový kód',
      sourceCodeAvailable: 'k dispozici',
      type: 'Typ',
      license: 'Licence',
      linkChecked: 'Odkaz zkontrolován',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Volné dílo',
    footerLicenseHtml:
      'Tyto webové stránky byly vytvořeny <strong>agentem AI</strong> a jsou věnovány veřejné sféře pod licencí <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Žádná práva nejsou vyhrazena.',
    footerIssuesHtml:
      'Našli jste problém s obsahem?<br>\n          Prosíme, <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">nahlaste ho na GitHubu</a>, nebo kontaktujte tvůrce webu, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default cs;
