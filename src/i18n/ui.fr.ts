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

const fr: UiStrings = {
  more: 'Plus',
  toolsLink: 'Outils et ressources',
  journalLink: 'Journal',
  faqLink: 'FAQ',
  language: 'Langue',
  chooseLanguage: 'Choisir une langue',
  notTranslated: 'Anglais seulement',
  notTranslatedHint:
    'Cette page n\'est pas encore traduite, le lien ouvre donc la page d\'accueil de cette langue.',
  translationNoticeHtml:
    'Cette page est traduite en français, mais la base de connaissances elle-même, y compris ses pages d\'articles, de concepts et de FAQ, est rédigée en anglais.',
  originalPageLabel: 'Lire cette page en anglais',
  chrome: {
    siteName: 'Base de connaissances sur l\'IA en éducation',
    siteBrand: 'Base de connaissances AIEd',
    lastVerified: 'dernière vérification le',
    home: 'Accueil',
    concepts: 'Concepts',
    articles: 'Articles',
    frequentlyAskedQuestions: 'Questions fréquentes',
    faqs: 'FAQ',
    resources: 'Ressources',
    starred: 'Favoris',
    starredCount: '{count} favoris',
    starredNone: 'Aucun',
    rss: 'RSS',
    search: 'Recherche',
    searchPlaceholder: 'Rechercher des articles, des concepts et des FAQ...',
    chatWithAi: 'Discuter avec l\'IA',
    useWithAi: 'Utiliser avec l\'IA',
    themeToggle: 'Basculer le mode clair/sombre',
    toggleNavigation: 'Basculer la navigation',
    closeNavigation: 'Fermer la navigation',
    conceptNavigation: 'Navigation des concepts',
    collapseSidebar: 'Réduire la barre latérale',
    expandSidebar: 'Développer la barre latérale',
    sidebarSections: 'Sections de la barre latérale',
    knowledgeBaseTools: 'Outils de la base de connaissances',
    onThisPage: 'Sur cette page',
    recentActivity: 'Activité récente',
    previous: 'Précédent',
    next: 'Suivant',
    pageNavigation: 'Navigation entre les pages',
    starThisPage: 'Ajouter cette page aux favoris',
    metadata: 'Métadonnées',
    noFaqsYet: 'Aucune FAQ pour le moment.',
    source: 'Source',
    edit: 'Modifier',
    history: 'Historique',
    embed: 'Intégrer',
    embedThisPage: 'Intégrer cette page',
    embedCode: 'Code d\'intégration',
    copyCode: 'Copier le code',
    close: 'Fermer',
    chat: 'Discuter',
    install: 'Installer',
    installHint: 'Ajoutez ce site à votre écran d\'accueil pour un accès hors ligne.',
    dismissInstall: 'Ignorer l\'invite d\'installation',
    recentlyAddedPages: 'Pages ajoutées récemment',
    recentlyUpdatedConcepts: 'Concepts mis à jour récemment',
    viewAllPages: 'Voir toutes les pages →',
    statsArticles: 'articles',
    statsConcepts: 'concepts',
    statsFaqs: 'FAQ',
    statsResources: 'ressources',
    statsLastUpdated: 'dernière mise à jour le',
    statsAria: 'Contenu de la base de connaissances',
    countConcepts: '{count} concepts',
    countFaqs: '{count} FAQ',
    umbrellaConcept: 'L\'IA en éducation',
    disclaimer: 'Avertissement : la sortie générée par l\'IA peut contenir des inexactitudes ou des erreurs.',
    metadataLabels: {
      type: 'Type',
      page_kind: 'Type de page',
      research_method: 'Type d\'étude',
      discipline: 'Discipline',
      level: 'Niveau',
      audience: 'Public visé',
      confidence: 'Confiance',
      resource_type: 'Type de ressource',
      access: 'Accès',
      license: 'Licence',
      created: 'Création',
      updated: 'Mise à jour',
      sources: 'Sources',
      connected_faqs: 'FAQ liées',
      connected_resources: 'Ressources liées',
    },
    footerLicenseHtml:
      'Ce site web a été généré par un <strong>agent d\'IA</strong> et est dédié au domaine public sous une licence <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Aucun droit réservé.',
    footerIssuesHtml:
      'Un problème avec le contenu ?<br>\n          Veuillez <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">le signaler sur GitHub</a>, ou contacter le développeur du site, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default fr;
