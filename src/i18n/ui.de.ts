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
    /** Footer sentences with links; {licenseUrl}, {licenseName}, {issuesUrl}, {contactUrl}, {editorName} are substituted at render. */
    footerLicenseHtml: string;
    footerIssuesHtml: string;
  };
}

const de: UiStrings = {
  more: 'Mehr',
  toolsLink: 'Werkzeuge und Ressourcen',
  journalLink: 'Journal',
  faqLink: 'FAQ',
  language: 'Sprache',
  chooseLanguage: 'Sprache wählen',
  notTranslated: 'Nur auf Englisch',
  notTranslatedHint:
    'Diese Seite ist noch nicht übersetzt, der Link öffnet daher die Startseite dieser Sprache.',
  translationNoticeHtml:
    'Diese Seite wurde maschinell ins Deutsche übersetzt; die Wissensbasis selbst und ihre Artikel-, Konzept- und FAQ-Seiten sind auf Englisch verfasst.',
  originalPageLabel: 'Diese Seite auf Englisch lesen',
  chrome: {
    siteName: 'Wissensbasis zu KI in der Bildung',
    siteBrand: 'AIEd-Wissensbasis',
    lastVerified: 'zuletzt geprüft',
    home: 'Startseite',
    concepts: 'Konzepte',
    articles: 'Artikel',
    frequentlyAskedQuestions: 'Häufig gestellte Fragen',
    faqs: 'FAQs',
    resources: 'Ressourcen',
    starred: 'Favoriten',
    starredCount: '{count} Favoriten',
    starredNone: 'Keine',
    rss: 'RSS',
    search: 'Suche',
    searchPlaceholder: 'Artikel, Konzepte und FAQs durchsuchen...',
    chatWithAi: 'Mit KI chatten',
    useWithAi: 'Mit KI nutzen',
    themeToggle: 'Zwischen hellem und dunklem Modus wechseln',
    toggleNavigation: 'Navigation ein- oder ausblenden',
    closeNavigation: 'Navigation schließen',
    conceptNavigation: 'Konzeptnavigation',
    collapseSidebar: 'Seitenleiste einklappen',
    expandSidebar: 'Seitenleiste ausklappen',
    sidebarSections: 'Bereiche der Seitenleiste',
    knowledgeBaseTools: 'Werkzeuge der Wissensbasis',
    onThisPage: 'Auf dieser Seite',
    recentActivity: 'Neueste Aktivität',
    previous: 'Zurück',
    next: 'Weiter',
    pageNavigation: 'Seitennavigation',
    starThisPage: 'Diese Seite zu den Favoriten hinzufügen',
    metadata: 'Metadaten',
    noFaqsYet: 'Noch keine FAQs.',
    source: 'Quelle',
    edit: 'Bearbeiten',
    history: 'Verlauf',
    embed: 'Einbetten',
    embedThisPage: 'Diese Seite einbetten',
    embedCode: 'Einbettungscode',
    copyCode: 'Code kopieren',
    close: 'Schließen',
    chat: 'Chat',
    install: 'Installieren',
    installHint: 'Zum Offline-Lesen zum Startbildschirm hinzufügen.',
    dismissInstall: 'Installationshinweis ausblenden',
    recentlyAddedPages: 'Zuletzt hinzugefügte Seiten',
    recentlyUpdatedConcepts: 'Zuletzt aktualisierte Konzepte',
    viewAllPages: 'Alle Seiten anzeigen →',
    statsArticles: 'Artikel',
    statsConcepts: 'Konzepte',
    statsFaqs: 'FAQs',
    statsResources: 'Ressourcen',
    statsLastUpdated: 'zuletzt aktualisiert',
    statsAria: 'Inhalt der Wissensbasis',
    countConcepts: '{count} Konzepte',
    countFaqs: '{count} FAQs',
    umbrellaConcept: 'KI in der Bildung',
    disclaimer: 'Hinweis: KI-generierte Inhalte können Ungenauigkeiten oder Fehler enthalten.',
    metadataLabels: {
      type: 'Typ',
      page_kind: 'Seitenart',
      research_method: 'Studiendesign',
      discipline: 'Fachgebiet',
      level: 'Niveau',
      audience: 'Zielgruppe',
      confidence: 'Konfidenz',
      resource_type: 'Art der Ressource',
      access: 'Zugang',
      license: 'Lizenz',
      created: 'Erstellt',
      updated: 'Aktualisiert',
      sources: 'Quellen',
      connected_faqs: 'Verknüpfte FAQs',
      connected_resources: 'Verknüpfte Ressourcen',
    },
    footerLicenseHtml:
      'Diese Website wurde von einem <strong>KI-Agenten</strong> erzeugt und steht als gemeinfrei unter einer <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>-Lizenz. Keine Rechte vorbehalten.',
    footerIssuesHtml:
      'Ein Problem mit dem Inhalt gefunden?<br>\n          Bitte <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">melden Sie es auf GitHub</a> oder wenden Sie sich an den Entwickler der Website, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default de;