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

const hr: UiStrings = {
  more: 'Više',
  toolsLink: 'Alati i resursi',
  journalLink: 'Časopis',
  newsletterLink: 'Newsletter',
  faqLink: 'FAQ',
  language: 'Jezik',
  chooseLanguage: 'Odaberite jezik',
  notTranslated: 'Samo engleski',
  notTranslatedHint:
    'Ova stranica još nije prevedena, pa poveznica otvara početnu stranicu tog jezika.',
  translationNoticeHtml: '',
  originalPageLabel: 'Pročitajte ovu stranicu na engleskom',
  chrome: {
    siteName: 'Baza znanja o umjetnoj inteligenciji u edukaciji',
    siteBrand: 'Baza znanja AIEd',
    lastVerified: 'zadnje provjereno',
    home: 'Početna',
    concepts: 'Pojmovi',
    articles: 'Članci',
    frequentlyAskedQuestions: 'Često postavljana pitanja',
    faqs: 'FAQ-ovi',
    resources: 'Resursi',
    starred: 'Označeno zvjezdicom',
    starredCount: '{count} označeno zvjezdicom',
    starredNone: 'Ništa',
    rss: 'RSS',
    search: 'Pretraga',
    searchPlaceholder: 'Pretraži članke, pojmove i FAQ-ove...',
    chatWithAi: 'Razgovaraj s AI-jem',
    useWithAi: 'Upotrijebi s AI-jem',
    themeToggle: 'Prebaci svijetli/tamni način',
    toggleNavigation: 'Prebaci navigaciju',
    closeNavigation: 'Zatvori navigaciju',
    conceptNavigation: 'Navigacija pojmovima',
    collapseSidebar: 'Skupi bočnu traku',
    expandSidebar: 'Proširi bočnu traku',
    sidebarSections: 'Odjeljci bočne trake',
    knowledgeBaseTools: 'Alati baze znanja',
    onThisPage: 'Na ovoj stranici',
    recentActivity: 'Nedavna aktivnost',
    previous: 'Prethodno',
    next: 'Sljedeće',
    pageNavigation: 'Navigacija stranicama',
    starThisPage: 'Označi ovu stranicu zvjezdicom',
    metadata: 'Metapodaci',
    noFaqsYet: 'Još nema FAQ-a.',
    source: 'Izvor',
    edit: 'Uredi',
    history: 'Povijest',
    embed: 'Ugradi',
    embedThisPage: 'Ugradi ovu stranicu',
    embedDesc: 'Kopirajte kôd u nastavku kako biste ugradili ovu stranicu u sustav za upravljanje učenjem ili drugu web stranicu. Ugrađena verzija prikazuje samo sadržaj stranice — skriva zaglavlje stranice, navigaciju i podnožje.',
    embedCode: 'Kôd za ugradnju',
    copyCode: 'Kopiraj kôd',
    copied: 'Kopirano!',
    copyFailed: 'Kopiranje nije uspjelo',
    close: 'Zatvori',
    chat: 'Razgovor',
    install: 'Instaliraj',
    installHint: 'Dodajte na početni zaslon za pristup bez interneta.',
    dismissInstall: 'Odbaci poziv za instalaciju',
    recentlyAddedPages: 'Nedavno dodane stranice',
    recentlyUpdatedConcepts: 'Nedavno ažurirani pojmovi',
    viewAllPages: 'Pogledaj sve stranice →',
    statsArticles: 'članaka',
    statsConcepts: 'pojmova',
    statsFaqs: 'FAQ-ova',
    statsResources: 'resursa',
    statsLastUpdated: 'zadnje ažurirano',
    statsAria: 'Što baza znanja sadrži',
    countConcepts: '{count} pojmova',
    countFaqs: '{count} FAQ-ova',
    umbrellaConcept: 'Umjetna inteligencija u edukaciji',
    disclaimer: 'Napomena: izlaz koji generira AI može sadržavati netočnosti ili pogreške.',
    metadataLabels: {
      type: 'Tip',
      page_kind: 'Vrsta stranice',
      research_method: 'Dizajn studije',
      discipline: 'Disciplina',
      level: 'Razina',
      audience: 'Predviđena publika',
      confidence: 'Pouzdanost',
      resource_type: 'Vrsta resursa',
      access: 'Pristup',
      license: 'Licenca',
      created: 'Stvoreno',
      updated: 'Ažurirano',
      sources: 'Izvori',
      connected_faqs: 'Povezani FAQ-ovi',
      connected_resources: 'Povezani resursi',
    },
    resourceLabels: {
      open: 'Otvori {title}',
      madeBy: 'Izradio',
      sourceCode: 'Izvorni kôd',
      sourceCodeAvailable: 'dostupan',
      type: 'Tip',
      license: 'Licenca',
      linkChecked: 'Poveznica provjerena',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Javna domena',
    footerLicenseHtml:
      'Ovu web stranicu generirao je <strong>AI agent</strong> i posvećena je javnoj domeni pod licencom <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Nisu zadržana nikakva prava.',
    footerIssuesHtml:
      'Pronašli ste problem u sadržaju?<br>\n          Molimo <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">prijavite ga na GitHubu</a>, ili kontaktirajte razvojnog programera stranice, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default hr;
