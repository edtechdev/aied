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

const en: UiStrings = {
  more: 'More',
  toolsLink: 'Tools and resources',
  journalLink: 'Journal',
  faqLink: 'FAQ',
  language: 'Language',
  chooseLanguage: 'Choose a language',
  notTranslated: 'English only',
  notTranslatedHint:
    'This page is not translated yet, so the link opens that language home page.',
  translationNoticeHtml: '',
  originalPageLabel: 'Read this page in English',
  chrome: {
    siteName: 'AI in Education Knowledge Base',
    siteBrand: 'AIEd Knowledge Base',
    lastVerified: 'last verified',
    home: 'Home',
    concepts: 'Concepts',
    articles: 'Articles',
    frequentlyAskedQuestions: 'Frequently Asked Questions',
    faqs: 'FAQs',
    resources: 'Resources',
    starred: 'Starred',
    starredCount: '{count} starred',
    starredNone: 'None',
    rss: 'RSS',
    search: 'Search',
    searchPlaceholder: 'Search articles, concepts, and FAQs...',
    chatWithAi: 'Chat with AI',
    useWithAi: 'Use with AI',
    themeToggle: 'Toggle light/dark mode',
    toggleNavigation: 'Toggle navigation',
    closeNavigation: 'Close navigation',
    conceptNavigation: 'Concept navigation',
    collapseSidebar: 'Collapse sidebar',
    expandSidebar: 'Expand sidebar',
    sidebarSections: 'Sidebar sections',
    knowledgeBaseTools: 'Knowledge base tools',
    onThisPage: 'On this page',
    recentActivity: 'Recent activity',
    previous: 'Previous',
    next: 'Next',
    pageNavigation: 'Page navigation',
    starThisPage: 'Star this page',
    metadata: 'Metadata',
    noFaqsYet: 'No FAQs yet.',
    source: 'Source',
    edit: 'Edit',
    history: 'History',
    embed: 'Embed',
    embedThisPage: 'Embed this page',
    embedCode: 'Embed code',
    copyCode: 'Copy code',
    close: 'Close',
    chat: 'Chat',
    install: 'Install',
    installHint: 'Add to your home screen for offline access.',
    dismissInstall: 'Dismiss install prompt',
    recentlyAddedPages: 'Recently Added Pages',
    recentlyUpdatedConcepts: 'Recently Updated Concepts',
    viewAllPages: 'View all pages →',
    statsArticles: 'articles',
    statsConcepts: 'concepts',
    statsFaqs: 'FAQs',
    statsResources: 'resources',
    statsLastUpdated: 'last updated',
    statsAria: 'What the knowledge base contains',
    countConcepts: '{count} concepts',
    countFaqs: '{count} FAQs',
    umbrellaConcept: 'AI in Education',
    disclaimer: 'Disclaimer: AI-generated output may contain inaccuracies or errors.',
    metadataLabels: {
      type: 'Type',
      page_kind: 'Page kind',
      research_method: 'Study design',
      discipline: 'Discipline',
      level: 'Level',
      audience: 'Intended audience',
      confidence: 'Confidence',
      resource_type: 'Type of resource',
      access: 'Access',
      license: 'License',
      created: 'Created',
      updated: 'Updated',
      sources: 'Sources',
      connected_faqs: 'Connected FAQs',
      connected_resources: 'Connected resources',
    },
    footerLicenseHtml:
      'This website was generated by an <strong>AI agent</strong> and is dedicated to the public domain under a <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a> license. No rights reserved.',
    footerIssuesHtml:
      'Found an issue with the content?<br>\n          Please <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">report it on GitHub</a>, or contact the site developer, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default en;
