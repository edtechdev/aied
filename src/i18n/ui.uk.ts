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

const uk: UiStrings = {
  more: 'Більше',
  toolsLink: 'Інструменти та ресурси',
  journalLink: 'Журнал',
  faqLink: 'Поширені питання',
  language: 'Мова',
  chooseLanguage: 'Виберіть мову',
  notTranslated: 'Лише англійською',
  notTranslatedHint:
    'Ця сторінка ще не перекладена, тому посилання відкриє домашню сторінку цієї мови.',
  translationNoticeHtml: 'Ця сторінка перекладена українською. Сторінки статей досі написані англійською.',
  originalPageLabel: 'Читати цю сторінку англійською',
  chrome: {
    siteName: 'База знань про ШІ в освіті',
    siteBrand: 'База знань AIEd',
    lastVerified: 'перевірено',
    home: 'Головна',
    concepts: 'Концепції',
    articles: 'Статті',
    frequentlyAskedQuestions: 'Поширені питання',
    faqs: 'Поширені питання',
    resources: 'Ресурси',
    starred: 'Із зірочкою',
    starredCount: '{count} із зірочкою',
    starredNone: 'Немає',
    rss: 'RSS',
    search: 'Пошук',
    searchPlaceholder: 'Пошук статей, концепцій і поширених питань...',
    chatWithAi: 'Чат із ШІ',
    useWithAi: 'Використовувати зі ШІ',
    themeToggle: 'Перемкнути світлий/темний режим',
    toggleNavigation: 'Перемкнути навігацію',
    closeNavigation: 'Закрити навігацію',
    conceptNavigation: 'Навігація концепцій',
    collapseSidebar: 'Згорнути бічну панель',
    expandSidebar: 'Розгорнути бічну панель',
    sidebarSections: 'Розділи бічної панелі',
    knowledgeBaseTools: 'Інструменти бази знань',
    onThisPage: 'На цій сторінці',
    recentActivity: 'Остання активність',
    previous: 'Попередня',
    next: 'Наступна',
    pageNavigation: 'Навігація сторінок',
    starThisPage: 'Позначити сторінку зірочкою',
    metadata: 'Метадані',
    noFaqsYet: 'Ще немає поширених питань.',
    source: 'Джерело',
    edit: 'Редагувати',
    history: 'Історія',
    embed: 'Вставити',
    embedThisPage: 'Вставити цю сторінку',
    embedDesc: 'Скопіюйте наведений нижче код, щоб вставити цю сторінку в систему управління навчанням або на інший вебсайт. Вбудована версія показує лише вміст сторінки — вона приховує заголовок сайту, навігацію та колонтитул.',
    embedCode: 'Код для вставлення',
    copyCode: 'Скопіювати код',
    close: 'Закрити',
    chat: 'Чат',
    install: 'Встановити',
    installHint: 'Додайте на головний екран для доступу без мережі.',
    dismissInstall: 'Відхилити запит на встановлення',
    recentlyAddedPages: 'Нещодавно додані сторінки',
    recentlyUpdatedConcepts: 'Нещодавно оновлені концепції',
    viewAllPages: 'Переглянути всі сторінки →',
    statsArticles: 'статей',
    statsConcepts: 'концепцій',
    statsFaqs: 'поширених питань',
    statsResources: 'ресурсів',
    statsLastUpdated: 'останнє оновлення',
    statsAria: 'Що містить база знань',
    countConcepts: '{count} концепцій',
    countFaqs: '{count} поширених питань',
    umbrellaConcept: 'ШІ в освіті',
    disclaimer: 'Застереження: згенерований ШІ результат може містити неточності чи помилки.',
    metadataLabels: {
      type: 'Тип',
      page_kind: 'Вид сторінки',
      research_method: 'Дизайн дослідження',
      discipline: 'Дисципліна',
      level: 'Рівень',
      audience: 'Цільова аудиторія',
      confidence: 'Впевненість',
      resource_type: 'Тип ресурсу',
      access: 'Доступ',
      license: 'Ліцензія',
      created: 'Створено',
      updated: 'Оновлено',
      sources: 'Джерела',
      connected_faqs: 'Пов’язані поширені питання',
      connected_resources: 'Пов’язані ресурси',
    },
    resourceLabels: {
      open: 'Відкрити {title}',
      madeBy: 'Автор',
      sourceCode: 'Вихідний код',
      sourceCodeAvailable: 'доступний',
      type: 'Тип',
      license: 'Ліцензія',
      linkChecked: 'Посилання перевірено',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Суспільне надбання',
    footerLicenseHtml:
      'Цей вебсайт згенеровано <strong>ШІ-агентом</strong> і передано у суспільне надбання за ліцензією <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Жодних прав не захищено.',
    footerIssuesHtml:
      'Знайшли проблему у вмісті?<br>\n          <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">Повідомте про це на GitHub</a>, або зв\'яжіться з розробником сайту — <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default uk;
