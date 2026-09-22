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

const es: UiStrings = {
  more: 'Más',
  toolsLink: 'Herramientas y recursos',
  journalLink: 'Diario',
  faqLink: 'Preguntas frecuentes',
  language: 'Idioma',
  chooseLanguage: 'Elige un idioma',
  notTranslated: 'Solo en inglés',
  notTranslatedHint:
    'Esta página aún no está traducida, así que el enlace abre la página de inicio de ese idioma.',
  translationNoticeHtml:
    'Esta página está traducida al español, pero la base de conocimiento y sus páginas de artículo, de concepto y de preguntas frecuentes están escritas en inglés.',
  originalPageLabel: 'Leer esta página en inglés',
  chrome: {
    siteName: 'Base de conocimiento sobre IA en la educación',
    siteBrand: 'Base de conocimiento AIEd',
    lastVerified: 'última verificación',
    home: 'Inicio',
    concepts: 'Conceptos',
    articles: 'Artículos',
    frequentlyAskedQuestions: 'Preguntas frecuentes',
    faqs: 'Preguntas frecuentes',
    resources: 'Recursos',
    starred: 'Favoritos',
    starredCount: '{count} favoritos',
    starredNone: 'Ninguno',
    rss: 'RSS',
    search: 'Buscar',
    searchPlaceholder: 'Busca artículos, conceptos y preguntas frecuentes...',
    chatWithAi: 'Chatea con la IA',
    useWithAi: 'Usar con IA',
    themeToggle: 'Cambiar entre modo claro y oscuro',
    toggleNavigation: 'Alternar la navegación',
    closeNavigation: 'Cerrar la navegación',
    conceptNavigation: 'Navegación por conceptos',
    collapseSidebar: 'Contraer la barra lateral',
    expandSidebar: 'Expandir la barra lateral',
    sidebarSections: 'Secciones de la barra lateral',
    knowledgeBaseTools: 'Herramientas de la base de conocimiento',
    onThisPage: 'En esta página',
    recentActivity: 'Actividad reciente',
    previous: 'Anterior',
    next: 'Siguiente',
    pageNavigation: 'Navegación de la página',
    starThisPage: 'Añadir esta página a favoritos',
    metadata: 'Metadatos',
    noFaqsYet: 'Todavía no hay preguntas frecuentes.',
    source: 'Fuente',
    edit: 'Editar',
    history: 'Historial',
    embed: 'Incrustar',
    embedThisPage: 'Incrustar esta página',
    embedCode: 'Código de incrustación',
    copyCode: 'Copiar el código',
    close: 'Cerrar',
    chat: 'Chat',
    install: 'Instalar',
    installHint: 'Añádelo a tu pantalla de inicio para acceder sin conexión.',
    dismissInstall: 'Cerrar el aviso de instalación',
    recentlyAddedPages: 'Páginas añadidas recientemente',
    recentlyUpdatedConcepts: 'Conceptos actualizados recientemente',
    viewAllPages: 'Ver todas las páginas →',
    statsArticles: 'artículos',
    statsConcepts: 'conceptos',
    statsFaqs: 'preguntas frecuentes',
    statsResources: 'recursos',
    statsLastUpdated: 'última actualización',
    statsAria: 'Qué contiene la base de conocimiento',
    countConcepts: '{count} conceptos',
    countFaqs: '{count} preguntas frecuentes',
    umbrellaConcept: 'IA en la educación',
    disclaimer: 'Aviso: los resultados generados por IA pueden contener imprecisiones o errores.',
    metadataLabels: {
      type: 'Tipo',
      page_kind: 'Tipo de página',
      research_method: 'Diseño del estudio',
      discipline: 'Disciplina',
      level: 'Nivel',
      audience: 'Público destinatario',
      confidence: 'Confianza',
      resource_type: 'Tipo de recurso',
      access: 'Acceso',
      license: 'Licencia',
      created: 'Creada',
      updated: 'Actualizada',
      sources: 'Fuentes',
      connected_faqs: 'Preguntas frecuentes relacionadas',
      connected_resources: 'Recursos relacionados',
    },
    footerLicenseHtml:
      'Este sitio web fue generado por un <strong>agente de IA</strong> y está dedicado al dominio público bajo la licencia <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. No se reservan derechos.',
    footerIssuesHtml:
      '¿Has encontrado un problema en el contenido?<br>\n          Por favor, <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">infórmalo en GitHub</a>, o ponte en contacto con el desarrollador del sitio, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default es;