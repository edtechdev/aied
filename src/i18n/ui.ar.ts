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

const ar: UiStrings = {
  more: 'المزيد',
  toolsLink: 'الأدوات والموارد',
  journalLink: 'السجل',
  faqLink: 'الأسئلة الشائعة',
  language: 'اللغة',
  chooseLanguage: 'اختر لغة',
  notTranslated: 'بالإنجليزية فقط',
  notTranslatedHint:
    'لم تُترجم هذه الصفحة بعد، لذا يفتح الرابط الصفحة الرئيسية لتلك اللغة.',
  translationNoticeHtml:
    'هذه الصفحة مترجمة إلى العربية، أما قاعدة المعارف نفسها، بما في ذلك صفحات المقالات والمفاهيم والأسئلة الشائعة، فهي مكتوبة بالإنجليزية.',
  originalPageLabel: 'اقرأ هذه الصفحة بالإنجليزية',
  chrome: {
    siteName: 'قاعدة المعارف للذكاء الاصطناعي في التعليم',
    siteBrand: 'قاعدة المعارف AIEd',
    lastVerified: 'آخر تحقق',
    home: 'الرئيسية',
    concepts: 'المفاهيم',
    articles: 'المقالات',
    frequentlyAskedQuestions: 'الأسئلة الشائعة',
    faqs: 'الأسئلة الشائعة',
    resources: 'الموارد',
    starred: 'المفضلة',
    starredCount: '{count} في المفضلة',
    starredNone: 'لا شيء',
    rss: 'RSS',
    search: 'بحث',
    searchPlaceholder: 'ابحث في المقالات والمفاهيم والأسئلة الشائعة...',
    chatWithAi: 'محادثة مع الذكاء الاصطناعي',
    useWithAi: 'استخدامه مع الذكاء الاصطناعي',
    themeToggle: 'تبديل الوضع الفاتح/الداكن',
    toggleNavigation: 'تبديل التنقّل',
    closeNavigation: 'إغلاق التنقّل',
    conceptNavigation: 'التنقّل بين المفاهيم',
    collapseSidebar: 'طيّ الشريط الجانبي',
    expandSidebar: 'توسيع الشريط الجانبي',
    sidebarSections: 'أقسام الشريط الجانبي',
    knowledgeBaseTools: 'أدوات قاعدة المعارف',
    onThisPage: 'في هذه الصفحة',
    recentActivity: 'النشاط الأخير',
    previous: 'السابق',
    next: 'التالي',
    pageNavigation: 'التنقّل بين الصفحات',
    starThisPage: 'أضف هذه الصفحة إلى المفضلة',
    metadata: 'البيانات الوصفية',
    noFaqsYet: 'لا توجد أسئلة شائعة بعد.',
    source: 'المصدر',
    edit: 'تحرير',
    history: 'السجل',
    embed: 'تضمين',
    embedThisPage: 'ضمّن هذه الصفحة',
    embedCode: 'شيفرة التضمين',
    copyCode: 'نسخ الشيفرة',
    close: 'إغلاق',
    chat: 'محادثة',
    install: 'تثبيت',
    installHint: 'أضف الموقع إلى شاشتك الرئيسية للوصول إليه دون اتصال.',
    dismissInstall: 'تجاهل مطالبة التثبيت',
    recentlyAddedPages: 'صفحات أُضيفت حديثًا',
    recentlyUpdatedConcepts: 'مفاهيم حُدِّثت حديثًا',
    viewAllPages: 'عرض كل الصفحات ←',
    statsArticles: 'مقالة',
    statsConcepts: 'مفهومًا',
    statsFaqs: 'سؤالًا شائعًا',
    statsResources: 'موردًا',
    statsLastUpdated: 'آخر تحديث',
    statsAria: 'ما تحتويه قاعدة المعارف',
    countConcepts: '{count} مفهومًا',
    countFaqs: '{count} سؤالًا شائعًا',
    umbrellaConcept: 'الذكاء الاصطناعي في التعليم',
    disclaimer:
      'إخلاء المسؤولية: قد يحتوي المحتوى المولَّد بالذكاء الاصطناعي على أخطاء أو معلومات غير دقيقة.',
    metadataLabels: {
      type: 'النوع',
      page_kind: 'نوع الصفحة',
      research_method: 'تصميم الدراسة',
      discipline: 'التخصص',
      level: 'المستوى',
      audience: 'الجمهور المستهدف',
      confidence: 'درجة الثقة',
      resource_type: 'نوع المورد',
      access: 'الوصول',
      license: 'الترخيص',
      created: 'تاريخ الإنشاء',
      updated: 'تاريخ التحديث',
      sources: 'المصادر',
      connected_faqs: 'الأسئلة الشائعة المرتبطة',
      connected_resources: 'الموارد المرتبطة',
    },
    footerLicenseHtml:
      'أنشأ هذا الموقع <strong>وكيل ذكاء اصطناعي</strong>، وهو مُهدى إلى الملكية العامة بموجب ترخيص <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. ولا حقوق محفوظة.',
    footerIssuesHtml:
      'هل وجدت مشكلة في المحتوى؟<br>\n          <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">أبلغ عنها على GitHub</a>، أو تواصل مع مطوّر الموقع، <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default ar;