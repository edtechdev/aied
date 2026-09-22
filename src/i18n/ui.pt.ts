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
    /** Texto da marca no cabeçalho: o nome do site com a sigla AIEd, localizado. */
    siteBrand: string;
    /** Prefixo da data de verificação de uma página de recurso. */
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

const pt: UiStrings = {
  more: 'Mais',
  toolsLink: 'Ferramentas e recursos',
  journalLink: 'Diário',
  faqLink: 'FAQ',
  language: 'Idioma',
  chooseLanguage: 'Escolha um idioma',
  notTranslated: 'Só em inglês',
  notTranslatedHint:
    'Esta página ainda não foi traduzida, então o link abre a página inicial desse idioma.',
  translationNoticeHtml:
    'Esta página foi traduzida para o português, mas a base de conhecimento e suas páginas de artigo, de conceito e de perguntas frequentes estão escritas em inglês.',
  originalPageLabel: 'Ler esta página em inglês',
  chrome: {
    siteName: 'Base de Conhecimento de IA na Educação',
    siteBrand: 'Base de Conhecimento AIEd',
    lastVerified: 'última verificação',
    home: 'Início',
    concepts: 'Conceitos',
    articles: 'Artigos',
    frequentlyAskedQuestions: 'Perguntas frequentes',
    faqs: 'FAQs',
    resources: 'Recursos',
    starred: 'Favoritos',
    starredCount: '{count} favoritos',
    starredNone: 'Nenhum',
    rss: 'RSS',
    search: 'Buscar',
    searchPlaceholder: 'Buscar artigos, conceitos e perguntas frequentes...',
    chatWithAi: 'Conversar com a IA',
    useWithAi: 'Usar com IA',
    themeToggle: 'Alternar modo claro/escuro',
    toggleNavigation: 'Alternar navegação',
    closeNavigation: 'Fechar navegação',
    conceptNavigation: 'Navegação por conceitos',
    collapseSidebar: 'Recolher barra lateral',
    expandSidebar: 'Expandir barra lateral',
    sidebarSections: 'Seções da barra lateral',
    knowledgeBaseTools: 'Ferramentas da base de conhecimento',
    onThisPage: 'Nesta página',
    recentActivity: 'Atividade recente',
    previous: 'Anterior',
    next: 'Próximo',
    pageNavigation: 'Navegação da página',
    starThisPage: 'Marcar esta página como favorita',
    metadata: 'Metadados',
    noFaqsYet: 'Ainda não há perguntas frequentes.',
    source: 'Fonte',
    edit: 'Editar',
    history: 'Histórico',
    embed: 'Incorporar',
    embedThisPage: 'Incorporar esta página',
    embedCode: 'Código de incorporação',
    copyCode: 'Copiar código',
    close: 'Fechar',
    chat: 'Chat',
    install: 'Instalar',
    installHint: 'Adicione à tela inicial para ter acesso offline.',
    dismissInstall: 'Dispensar aviso de instalação',
    recentlyAddedPages: 'Páginas adicionadas recentemente',
    recentlyUpdatedConcepts: 'Conceitos atualizados recentemente',
    viewAllPages: 'Ver todas as páginas →',
    statsArticles: 'artigos',
    statsConcepts: 'conceitos',
    statsFaqs: 'FAQs',
    statsResources: 'recursos',
    statsLastUpdated: 'última atualização',
    statsAria: 'O que a base de conhecimento contém',
    countConcepts: '{count} conceitos',
    countFaqs: '{count} FAQs',
    umbrellaConcept: 'IA na educação',
    disclaimer: 'Aviso: o conteúdo gerado por IA pode conter imprecisões ou erros.',
    metadataLabels: {
      type: 'Tipo',
      page_kind: 'Tipo de página',
      research_method: 'Desenho do estudo',
      discipline: 'Disciplina',
      level: 'Nível',
      audience: 'Público-alvo',
      confidence: 'Confiança',
      resource_type: 'Tipo de recurso',
      access: 'Acesso',
      license: 'Licença',
      created: 'Criado',
      updated: 'Atualizado',
      sources: 'Fontes',
      connected_faqs: 'Perguntas frequentes relacionadas',
      connected_resources: 'Recursos relacionados',
    },
    footerLicenseHtml:
      'Este site foi gerado por um <strong>agente de IA</strong> e é dedicado ao domínio público sob a licença <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Nenhum direito reservado.',
    footerIssuesHtml:
      'Encontrou um problema no conteúdo?<br>\n          Por favor, <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">reporte o problema no GitHub</a>, ou entre em contato com o desenvolvedor do site, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default pt;
