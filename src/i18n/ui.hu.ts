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

const hu: UiStrings = {
  more: 'Több',
  toolsLink: 'Eszközök és források',
  journalLink: 'Napló',
  faqLink: 'GYIK',
  language: 'Nyelv',
  chooseLanguage: 'Válasszon nyelvet',
  notTranslated: 'Csak angolul',
  notTranslatedHint:
    'Ezt az oldalt még nem fordították le, ezért a link a nyelv kezdőlapjára vezet.',
  translationNoticeHtml: '',
  originalPageLabel: 'Olvassa el ezt az oldalt angolul',
  chrome: {
    siteName: 'Tudásbázis a mesterséges intelligencia oktatási felhasználásáról',
    siteBrand: 'AIEd Tudásbázis',
    lastVerified: 'utoljára ellenőrizve',
    home: 'Kezdőlap',
    concepts: 'Fogalmak',
    articles: 'Cikkek',
    frequentlyAskedQuestions: 'Gyakran Ismételt Kérdések',
    faqs: 'GYIK',
    resources: 'Források',
    starred: 'Csillagozott',
    starredCount: '{count} csillagozott',
    starredNone: 'Nincs',
    rss: 'RSS',
    search: 'Keresés',
    searchPlaceholder: 'Cikkek, fogalmak és GYIK keresése…',
    chatWithAi: 'Csevegés az AI-val',
    useWithAi: 'Felhasználás AI-val',
    themeToggle: 'Világos/sötét mód váltása',
    toggleNavigation: 'Navigáció váltása',
    closeNavigation: 'Navigáció bezárása',
    conceptNavigation: 'Fogalomnavigáció',
    collapseSidebar: 'Oldalsáv összezárása',
    expandSidebar: 'Oldalsáv kibontása',
    sidebarSections: 'Oldalsáv szakaszai',
    knowledgeBaseTools: 'Tudásbázis-eszközök',
    onThisPage: 'Ezen az oldalon',
    recentActivity: 'Legutóbbi aktivitás',
    previous: 'Előző',
    next: 'Következő',
    pageNavigation: 'Oldalnavigáció',
    starThisPage: 'Oldal csillagozása',
    metadata: 'Metaadatok',
    noFaqsYet: 'Még nincs GYIK.',
    source: 'Forrás',
    edit: 'Szerkesztés',
    history: 'Előzmények',
    embed: 'Beágyazás',
    embedThisPage: 'Oldal beágyazása',
    embedDesc:
      'Másolja ki az alábbi kódot az oldal tanuláskezelő rendszerbe vagy más weboldalra történő beágyazásához. A beágyazott változat csak az oldal tartalmát mutatja — elrejti a weboldal fejlécét, a navigációt és a láblécet.',
    embedCode: 'Beágyazási kód',
    copyCode: 'Kód másolása',
    copied: 'Másolva!',
    copyFailed: 'A másolás nem sikerült',
    close: 'Bezárás',
    chat: 'Csevegés',
    install: 'Telepítés',
    installHint: 'Adja hozzá a kezdőképernyőjéhez az offline hozzáféréshez.',
    dismissInstall: 'A telepítési értesítés elvetése',
    recentlyAddedPages: 'Nemrég hozzáadott oldalak',
    recentlyUpdatedConcepts: 'Nemrég frissített fogalmak',
    viewAllPages: 'Összes oldal megtekintése →',
    statsArticles: 'cikk',
    statsConcepts: 'fogalom',
    statsFaqs: 'GYIK',
    statsResources: 'forrás',
    statsLastUpdated: 'utoljára frissítve',
    statsAria: 'Mit tartalmaz a tudásbázis',
    countConcepts: '{count} fogalom',
    countFaqs: '{count} GYIK',
    umbrellaConcept: 'AI az oktatásban',
    disclaimer:
      'Figyelmeztetés: az AI által generált tartalom pontatlanságokat vagy hibákat tartalmazhat.',
    metadataLabels: {
      type: 'Típus',
      page_kind: 'Oldal típusa',
      research_method: 'Tanulmány tervezése',
      discipline: 'Szakterület',
      level: 'Szint',
      audience: 'Célközönség',
      confidence: 'Megbízhatóság',
      resource_type: 'Forrás típusa',
      access: 'Hozzáférés',
      license: 'Licenc',
      created: 'Létrehozva',
      updated: 'Frissítve',
      sources: 'Források',
      connected_faqs: 'Kapcsolódó GYIK',
      connected_resources: 'Kapcsolódó források',
    },
    resourceLabels: {
      open: '{title} megnyitása',
      madeBy: 'Készítette',
      sourceCode: 'Forráskód',
      sourceCodeAvailable: 'elérhető',
      type: 'Típus',
      license: 'Licenc',
      linkChecked: 'Link ellenőrizve',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Közkincs',
    footerLicenseHtml:
      'Ezt a weboldalt egy <strong>AI-ügynök</strong> hozta létre, és közkinccsé nyilvánítottuk <a href=\"{licenseUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{licenseName}</a> licenc alapján. Nincsenek fenntartva jogok.',
    footerIssuesHtml:
      'Hibát talált a tartalomban?<br>\\n          Kérjük, <a href=\"{issuesUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">jelentse be a GitHubon</a>, vagy vegye fel a kapcsolatot a weboldal fejlesztőjével, <a href=\"{contactUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{editorName}</a>.',
  },
};

export default hu;
