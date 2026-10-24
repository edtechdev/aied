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

const bg: UiStrings = {
  more: 'Още',
  toolsLink: 'Инструменти и ресурси',
  journalLink: 'Дневник',
  newsletterLink: 'Newsletter',
  faqLink: 'ЧЗВ',
  language: 'Език',
  chooseLanguage: 'Изберете език',
  notTranslated: 'Само на английски',
  notTranslatedHint:
    'Тази страница още не е преведена, затова връзката отваря началната страница на съответния език.',
  translationNoticeHtml: '',
  originalPageLabel: 'Прочетете тази страница на английски',
  chrome: {
    siteName: 'База знания за AI в образованието',
    siteBrand: 'База знания AIEd',
    lastVerified: 'последна проверка',
    home: 'Начало',
    concepts: 'Понятия',
    articles: 'Статии',
    frequentlyAskedQuestions: 'Често задавани въпроси',
    faqs: 'ЧЗВ',
    resources: 'Ресурси',
    starred: 'Със звезда',
    starredCount: '{count} със звезда',
    starredNone: 'Няма',
    rss: 'RSS',
    search: 'Търсене',
    searchPlaceholder: 'Търсете статии, понятия и ЧЗВ...',
    chatWithAi: 'Чат с AI',
    useWithAi: 'Използвай с AI',
    themeToggle: 'Превключване на светъл/тъмен режим',
    toggleNavigation: 'Превключване на навигацията',
    closeNavigation: 'Затваряне на навигацията',
    conceptNavigation: 'Навигация по понятия',
    collapseSidebar: 'Свиване на страничната лента',
    expandSidebar: 'Разгъване на страничната лента',
    sidebarSections: 'Раздели в страничната лента',
    knowledgeBaseTools: 'Инструменти на базата знания',
    onThisPage: 'На тази страница',
    recentActivity: 'Последна активност',
    previous: 'Предишна',
    next: 'Следваща',
    pageNavigation: 'Навигация по страниците',
    starThisPage: 'Поставете звезда на тази страница',
    metadata: 'Метаданни',
    noFaqsYet: 'Все още няма ЧЗВ.',
    source: 'Източник',
    edit: 'Редактиране',
    history: 'История',
    embed: 'Вграждане',
    embedThisPage: 'Вграждане на тази страница',
    embedDesc: 'Копирайте кода по-долу, за да вградите тази страница в система за управление на обучението или друг уебсайт. Вгражданата версия показва само съдържанието на страницата — скрива заглавната част, навигацията и долния колонтитул на сайта.',
    embedCode: 'Код за вграждане',
    copyCode: 'Копиране на кода',
    copied: 'Копирано!',
    copyFailed: 'Копирането не успя',
    close: 'Затваряне',
    chat: 'Чат',
    install: 'Инсталиране',
    installHint: 'Добавете към началния екран за достъп офлайн.',
    dismissInstall: 'Затваряне на подканата за инсталиране',
    recentlyAddedPages: 'Наскоро добавени страници',
    recentlyUpdatedConcepts: 'Наскоро актуализирани понятия',
    viewAllPages: 'Вижте всички страници →',
    statsArticles: 'статии',
    statsConcepts: 'понятия',
    statsFaqs: 'ЧЗВ',
    statsResources: 'ресурса',
    statsLastUpdated: 'последна актуализация',
    statsAria: 'Какво съдържа базата знания',
    countConcepts: '{count} понятия',
    countFaqs: '{count} ЧЗВ',
    umbrellaConcept: 'AI в образованието',
    disclaimer: 'Отказ от отговорност: съдържанието, генерирано от AI, може да съдържа неточности или грешки.',
    metadataLabels: {
      type: 'Тип',
      page_kind: 'Вид страница',
      research_method: 'Дизайн на проучването',
      discipline: 'Дисциплина',
      level: 'Ниво',
      audience: 'Целева аудитория',
      confidence: 'Увереност',
      resource_type: 'Вид ресурс',
      access: 'Достъп',
      license: 'Лиценз',
      created: 'Създадена',
      updated: 'Актуализирана',
      sources: 'Източници',
      connected_faqs: 'Свързани ЧЗВ',
      connected_resources: 'Свързани ресурси',
    },
    resourceLabels: {
      open: 'Отворете {title}',
      madeBy: 'Създадено от',
      sourceCode: 'Изходен код',
      sourceCodeAvailable: 'на разположение',
      type: 'Тип',
      license: 'Лиценз',
      linkChecked: 'Връзката е проверена',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Публично достояние',
    footerLicenseHtml:
      'Този уебсайт е генериран от <strong>AI агент</strong> и е предоставен като публично достояние под лиценз <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Няма запазени права.',
    footerIssuesHtml:
      'Открихте проблем в съдържанието?<br>\n          Моля, <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">съобщете за него в GitHub</a>, или се свържете с разработчика на сайта, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default bg;
