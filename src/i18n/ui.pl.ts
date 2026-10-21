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

const pl: UiStrings = {
  more: 'Więcej',
  toolsLink: 'Narzędzia i zasoby',
  journalLink: 'Dziennik',
  faqLink: 'FAQ',
  language: 'Język',
  chooseLanguage: 'Wybierz język',
  notTranslated: 'Tylko po angielsku',
  notTranslatedHint:
    'Ta strona nie jest jeszcze przetłumaczona, więc link otwiera stronę główną w tym języku.',
  translationNoticeHtml: '',
  originalPageLabel: 'Przeczytaj tę stronę po angielsku',
  chrome: {
    siteName: 'Baza wiedzy o sztucznej inteligencji w edukacji',
    siteBrand: 'Baza wiedzy AIEd',
    lastVerified: 'ostatnio sprawdzono',
    home: 'Strona główna',
    concepts: 'Pojęcia',
    articles: 'Artykuły',
    frequentlyAskedQuestions: 'Często zadawane pytania',
    faqs: 'FAQ',
    resources: 'Zasoby',
    starred: 'Ulubione',
    starredCount: 'Ulubione: {count}',
    starredNone: 'Brak',
    rss: 'RSS',
    search: 'Szukaj',
    searchPlaceholder: 'Szukaj artykułów, pojęć i FAQ…',
    chatWithAi: 'Rozmawiaj z AI',
    useWithAi: 'Użyj z AI',
    themeToggle: 'Przełącz tryb jasny/ciemny',
    toggleNavigation: 'Przełącz nawigację',
    closeNavigation: 'Zamknij nawigację',
    conceptNavigation: 'Nawigacja po pojęciach',
    collapseSidebar: 'Zwiń panel boczny',
    expandSidebar: 'Rozwiń panel boczny',
    sidebarSections: 'Sekcje panelu bocznego',
    knowledgeBaseTools: 'Narzędzia bazy wiedzy',
    onThisPage: 'Na tej stronie',
    recentActivity: 'Ostatnia aktywność',
    previous: 'Poprzednia',
    next: 'Następna',
    pageNavigation: 'Nawigacja po stronach',
    starThisPage: 'Dodaj tę stronę do ulubionych',
    metadata: 'Metadane',
    noFaqsYet: 'Brak jeszcze FAQ.',
    source: 'Źródło',
    edit: 'Edytuj',
    history: 'Historia',
    embed: 'Osadź',
    embedThisPage: 'Osadź tę stronę',
    embedDesc:
      'Skopiuj poniższy kod, aby osadzić tę stronę w systemie zarządzania nauczaniem lub na innej witrynie. Wersja osadzona pokazuje tylko treść strony — ukrywa nagłówek witryny, nawigację i stopkę.',
    embedCode: 'Kod do osadzenia',
    copyCode: 'Kopiuj kod',
    copied: 'Skopiowano!',
    copyFailed: 'Kopiowanie nie powiodło się',
    close: 'Zamknij',
    chat: 'Czat',
    install: 'Zainstaluj',
    installHint: 'Dodaj do ekranu głównego, aby korzystać offline.',
    dismissInstall: 'Odrzuć monit instalacji',
    recentlyAddedPages: 'Ostatnio dodane strony',
    recentlyUpdatedConcepts: 'Ostatnio zaktualizowane pojęcia',
    viewAllPages: 'Zobacz wszystkie strony →',
    statsArticles: 'artykułów',
    statsConcepts: 'pojęć',
    statsFaqs: 'FAQ',
    statsResources: 'zasobów',
    statsLastUpdated: 'ostatnio zaktualizowano',
    statsAria: 'Co zawiera baza wiedzy',
    countConcepts: 'Pojęcia: {count}',
    countFaqs: 'FAQ: {count}',
    umbrellaConcept: 'AI w edukacji',
    disclaimer:
      'Zastrzeżenie: treści generowane przez AI mogą zawierać nieścisłości lub błędy.',
    metadataLabels: {
      type: 'Typ',
      page_kind: 'Rodzaj strony',
      research_method: 'Typ badania',
      discipline: 'Dziedzina',
      level: 'Poziom',
      audience: 'Docelowi odbiorcy',
      confidence: 'Pewność',
      resource_type: 'Typ zasobu',
      access: 'Dostęp',
      license: 'Licencja',
      created: 'Utworzono',
      updated: 'Zaktualizowano',
      sources: 'Źródła',
      connected_faqs: 'Powiązane FAQ',
      connected_resources: 'Powiązane zasoby',
    },
    resourceLabels: {
      open: 'Otwórz: {title}',
      madeBy: 'Autor',
      sourceCode: 'Kod źródłowy',
      sourceCodeAvailable: 'dostępny',
      type: 'Typ',
      license: 'Licencja',
      linkChecked: 'Link sprawdzono',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Domena publiczna',
    footerLicenseHtml:
      'Ta witryna została wygenerowana przez <strong>agenta AI</strong> i jest przekazana do domeny publicznej na licencji <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Żadnych praw nie zastrzeżono.',
    footerIssuesHtml:
      'Znalazłeś problem w treści?<br>\n          <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">Zgłoś go na GitHubie</a> lub skontaktuj się z twórcą witryny, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default pl;
