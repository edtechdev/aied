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

const ru: UiStrings = {
  more: 'Ещё',
  toolsLink: 'Инструменты и ресурсы',
  journalLink: 'Журнал',
  faqLink: 'FAQ',
  language: 'Язык',
  chooseLanguage: 'Выберите язык',
  notTranslated: 'Только на английском',
  notTranslatedHint:
    'Эта страница ещё не переведена, поэтому ссылка открывает главную страницу этого языка.',
  translationNoticeHtml: '',
  originalPageLabel: 'Читать эту страницу на английском',
  chrome: {
    siteName: 'База знаний об ИИ в образовании',
    siteBrand: 'AIEd база знаний',
    lastVerified: 'проверено',
    home: 'Главная',
    concepts: 'Концепции',
    articles: 'Статьи',
    frequentlyAskedQuestions: 'Часто задаваемые вопросы',
    faqs: 'FAQ',
    resources: 'Ресурсы',
    starred: 'Избранное',
    starredCount: '{count} в избранном',
    starredNone: 'Нет',
    rss: 'RSS',
    search: 'Поиск',
    searchPlaceholder: 'Поиск по статьям, концепциям и FAQ...',
    chatWithAi: 'Чат с ИИ',
    useWithAi: 'Использовать с ИИ',
    themeToggle: 'Переключить светлый/тёмный режим',
    toggleNavigation: 'Переключить навигацию',
    closeNavigation: 'Закрыть навигацию',
    conceptNavigation: 'Навигация по концепциям',
    collapseSidebar: 'Свернуть боковую панель',
    expandSidebar: 'Развернуть боковую панель',
    sidebarSections: 'Разделы боковой панели',
    knowledgeBaseTools: 'Инструменты базы знаний',
    onThisPage: 'На этой странице',
    recentActivity: 'Недавние изменения',
    previous: 'Назад',
    next: 'Далее',
    pageNavigation: 'Навигация по странице',
    starThisPage: 'Добавить страницу в избранное',
    metadata: 'Метаданные',
    noFaqsYet: 'Пока нет ни одного вопроса FAQ.',
    source: 'Источник',
    edit: 'Редактировать',
    history: 'История',
    embed: 'Встроить',
    embedThisPage: 'Встроить эту страницу',
    embedDesc:
      'Скопируйте код ниже, чтобы встроить эту страницу в систему управления обучением или на другой сайт. Во встроенной версии отображается только содержимое страницы — заголовок сайта, навигация и нижний колонтитул скрыты.',
    embedCode: 'Код для встраивания',
    copyCode: 'Скопировать код',
    close: 'Закрыть',
    chat: 'Чат',
    install: 'Установить',
    installHint: 'Добавьте на главный экран, чтобы получить доступ без подключения к сети.',
    dismissInstall: 'Закрыть предложение об установке',
    recentlyAddedPages: 'Недавно добавленные страницы',
    recentlyUpdatedConcepts: 'Недавно обновлённые концепции',
    viewAllPages: 'Все страницы →',
    statsArticles: 'статей',
    statsConcepts: 'концепций',
    statsFaqs: 'FAQ',
    statsResources: 'ресурсов',
    statsLastUpdated: 'последнее обновление',
    statsAria: 'Что содержит база знаний',
    countConcepts: '{count} концепций',
    countFaqs: '{count} FAQ',
    umbrellaConcept: 'ИИ в образовании',
    disclaimer: 'Отказ от ответственности: результаты, сгенерированные ИИ, могут содержать неточности или ошибки.',
    metadataLabels: {
      type: 'Тип',
      page_kind: 'Вид страницы',
      research_method: 'Дизайн исследования',
      discipline: 'Дисциплина',
      level: 'Уровень',
      audience: 'Целевая аудитория',
      confidence: 'Уверенность',
      resource_type: 'Тип ресурса',
      access: 'Доступ',
      license: 'Лицензия',
      created: 'Создано',
      updated: 'Обновлено',
      sources: 'Источники',
      connected_faqs: 'Связанные FAQ',
      connected_resources: 'Связанные ресурсы',
    },
    resourceLabels: {
      open: 'Открыть {title}',
      madeBy: 'Автор',
      sourceCode: 'Исходный код',
      sourceCodeAvailable: 'доступен',
      type: 'Тип',
      license: 'Лицензия',
      linkChecked: 'Ссылка проверена',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Общественное достояние',
    footerLicenseHtml:
      'Этот веб-сайт создан <strong>ИИ-агентом</strong> и передан в общественное достояние под лицензией <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Права не защищены.',
    footerIssuesHtml:
      'Обнаружили ошибку в содержимом?<br>\n          Пожалуйста, <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">сообщите о ней на GitHub</a> или свяжитесь с разработчиком сайта, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default ru;
