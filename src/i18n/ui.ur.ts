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

const ur: UiStrings = {
  more: 'مزید',
  toolsLink: 'اوزار اور وسائل',
  journalLink: 'جریدہ',
  faqLink: 'عمومی سوالات',
  language: 'زبان',
  chooseLanguage: 'زبان منتخب کریں',
  notTranslated: 'صرف انگریزی',
  notTranslatedHint:
    'یہ صفحہ ابھی ترجمہ نہیں ہوا، اس لیے لنک اُسی زبان کے ہوم صفحے پر کھولتا ہے۔',
  translationNoticeHtml: '',
  originalPageLabel: 'یہ صفحہ انگریزی میں پڑھیں',
  chrome: {
    siteName: 'تعلیم میں AI کا علمی ذخیرہ',
    siteBrand: 'AIEd علمی ذخیرہ',
    lastVerified: 'آخری بار تصدیق شدہ',
    home: 'ابتدائی صفحہ',
    concepts: 'تصورات',
    articles: 'مضامین',
    frequentlyAskedQuestions: 'اکثر پوچھے گئے سوالات',
    faqs: 'عمومی سوالات',
    resources: 'وسائل',
    starred: 'ستارے لگے ہوئے',
    starredCount: '{count} ستارے',
    starredNone: 'کوئی نہیں',
    rss: 'RSS',
    search: 'تلاش',
    searchPlaceholder: 'مضامین، تصورات اور عمومی سوالات میں تلاش کریں…',
    chatWithAi: 'AI سے بات کریں',
    useWithAi: 'AI کے ساتھ استعمال کریں',
    themeToggle: 'روشن/تاریک موڈ تبدیل کریں',
    toggleNavigation: 'نیویگیشن کھولیں یا بند کریں',
    closeNavigation: 'نیویگیشن بند کریں',
    conceptNavigation: 'تصورات کی نیویگیشن',
    collapseSidebar: 'بغلی پٹی سمیٹیں',
    expandSidebar: 'بغلی پٹی پھیلائیں',
    sidebarSections: 'بغلی پٹی کے حصے',
    knowledgeBaseTools: 'علمی ذخیرے کے اوزار',
    onThisPage: 'اس صفحے پر',
    recentActivity: 'حالیہ سرگرمی',
    previous: 'پچھلا',
    next: 'اگلا',
    pageNavigation: 'صفحات کی نیویگیشن',
    starThisPage: 'اس صفحے پر ستارہ لگائیں',
    metadata: 'میٹا ڈیٹا',
    noFaqsYet: 'ابھی کوئی عمومی سوال موجود نہیں۔',
    source: 'ذریعہ',
    edit: 'ترمیم کریں',
    history: 'تاریخچہ',
    embed: 'ایمبیڈ کریں',
    embedThisPage: 'اس صفحے کو ایمبیڈ کریں',
    embedDesc:
      'نیچے دیا گیا کوڈ نقل کریں تاکہ اس صفحے کو کسی سیکھنے کے انتظامی نظام یا دوسری ویب سائٹ پر ایمبیڈ کری سکیں۔ ایمبیڈ شدہ نسخہ صرف صفحے کا مواد دکھاتا ہے — یہ سائٹ کا ہیڈر، نیویگیشن اور فوٹر چھپا دیتا ہے۔',
    embedCode: 'ایمبیڈ کوڈ',
    copyCode: 'کوڈ نقل کریں',
    copied: 'کاپی ہو گیا!',
    copyFailed: 'کاپی ناکام رہی',
    close: 'بند کریں',
    chat: 'گفتگو',
    install: 'انسٹال کریں',
    installHint: 'آف لائن رسائی کے لیے اپنے ہوم اسکرین پر شامل کریں۔',
    dismissInstall: 'انسٹال کا اشارہ رد کریں',
    recentlyAddedPages: 'حال ہی میں شامل شدہ صفحات',
    recentlyUpdatedConcepts: 'حال ہی میں اپ ڈیٹ شدہ تصورات',
    viewAllPages: 'تمام صفحات دیکھیں →',
    statsArticles: 'مضامین',
    statsConcepts: 'تصورات',
    statsFaqs: 'عمومی سوالات',
    statsResources: 'وسائل',
    statsLastUpdated: 'آخری بار اپ ڈیٹ',
    statsAria: 'علمی ذخیرے میں کیا شامل ہے',
    countConcepts: '{count} تصورات',
    countFaqs: '{count} عمومی سوالات',
    umbrellaConcept: 'تعلیم میں AI',
    disclaimer:
      'اعلانِ لاتعلقی: AI سے تیار شدہ مواد میں نقائص یا غلطیاں ہو سکتی ہیں۔',
    metadataLabels: {
      type: 'قسم',
      page_kind: 'صفحے کی قسم',
      research_method: 'تحقیقی ڈیزائن',
      discipline: 'شعبہ',
      level: 'درجہ',
      audience: 'مطلوبہ سامعین',
      confidence: 'اعتماد',
      resource_type: 'وسیلے کی قسم',
      access: 'رسائی',
      license: 'لائسنس',
      created: 'تخلیق شدہ',
      updated: 'اپ ڈیٹ شدہ',
      sources: 'ذرائع',
      connected_faqs: 'متعلقہ عمومی سوالات',
      connected_resources: 'متعلقہ وسائل',
    },
    resourceLabels: {
      open: '{title} کھولیں',
      madeBy: 'بنانے والا',
      sourceCode: 'سورس کوڈ',
      sourceCodeAvailable: 'دستیاب',
      type: 'قسم',
      license: 'لائسنس',
      linkChecked: 'لنک کی تصدیق',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'عوامی ملکیت',
    footerLicenseHtml:
      'یہ ویب سائٹ <strong>AI ایجنٹ</strong> کے ذریعے تیار کی گئی ہے اور <a href=\"{licenseUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{licenseName}</a> لائسنس کے تحت عوامی ملکیت کے لیے وقف ہے۔ کوئی حق محفوظ نہیں۔',
    footerIssuesHtml:
      'مواد میں کوئی مسئلہ ملا؟<br>\n          براہِ کرم <a href=\"{issuesUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub پر رپورٹ کریں</a>، یا سائٹ کے بنانے والے <a href=\"{contactUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{editorName}</a> سے رابطہ کریں۔',
  },
};

export default ur;
