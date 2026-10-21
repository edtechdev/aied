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

const bn: UiStrings = {
  more: 'আরও',
  toolsLink: 'টুল ও রিসোর্সসমূহ',
  journalLink: 'জার্নাল',
  faqLink: 'প্রশ্নোত্তর',
  language: 'ভাষা',
  chooseLanguage: 'একটি ভাষা নির্বাচন করুন',
  notTranslated: 'কেবল ইংরেজিতে',
  notTranslatedHint:
    'এই পৃষ্ঠাটি এখনও অনূদিত হয়নি, তাই লিঙ্কটি সেই ভাষার হোম পেজে খুলবে।',
  translationNoticeHtml: '',
  originalPageLabel: 'এই পৃষ্ঠাটি ইংরেজিতে পড়ুন',
  chrome: {
    siteName: 'শিক্ষায় কৃত্রিম বুদ্ধিমত্তা নলেজ বেস',
    siteBrand: 'AIEd নলেজ বেস',
    lastVerified: 'সর্বশেষ যাচাই',
    home: 'হোম',
    concepts: 'ধারণা',
    articles: 'নিবন্ধ',
    frequentlyAskedQuestions: 'সাধারণত জিজ্ঞাসিত প্রশ্নাবলি',
    faqs: 'প্রশ্নোত্তর',
    resources: 'রিসোর্স',
    starred: 'তারকাচিহ্নিত',
    starredCount: '{count}টি তারকাচিহ্নিত',
    starredNone: 'কিছু নয়',
    rss: 'RSS',
    search: 'খোঁজ',
    searchPlaceholder: 'নিবন্ধ, ধারণা ও প্রশ্নোত্তর খুঁজুন...',
    chatWithAi: 'AI-এর সঙ্গে চ্যাট করুন',
    useWithAi: 'AI-এর সঙ্গে ব্যবহার করুন',
    themeToggle: 'লাইট/ডার্ক মোড বদলান',
    toggleNavigation: 'নেভিগেশন বদলান',
    closeNavigation: 'নেভিগেশন বন্ধ করুন',
    conceptNavigation: 'ধারণা নেভিগেশন',
    collapseSidebar: 'সাইডবার সংকুচিত করুন',
    expandSidebar: 'সাইডবার প্রসারিত করুন',
    sidebarSections: 'সাইডবারের সেকশন',
    knowledgeBaseTools: 'নলেজ বেসের টুল',
    onThisPage: 'এই পৃষ্ঠায়',
    recentActivity: 'সাম্প্রতিক কার্যক্রম',
    previous: 'পূর্ববর্তী',
    next: 'পরবর্তী',
    pageNavigation: 'পৃষ্ঠা নেভিগেশন',
    starThisPage: 'এই পৃষ্ঠাটি তারকাচিহ্নিত করুন',
    metadata: 'মেটাডেটা',
    noFaqsYet: 'এখনও কোনো প্রশ্নোত্তর নেই।',
    source: 'সূত্র',
    edit: 'সম্পাদনা',
    history: 'ইতিহাস',
    embed: 'এমবেড',
    embedThisPage: 'এই পৃষ্ঠাটি এমবেড করুন',
    embedDesc:
      'এই পৃষ্ঠাটি যেকোনো লার্নিং ম্যানেজমেন্ট সিস্টেম বা ওয়েবসাইটে এমবেড করতে নিচের কোডটি কপি করুন। এমবেড করা সংস্করণে কেবল পৃষ্ঠার কনটেন্ট দেখানো হয় — সাইটের হেডার, নেভিগেশন ও ফুটার লুকানো থাকে।',
    embedCode: 'এমবেড কোড',
    copyCode: 'কোড কপি করুন',
    copied: 'কপি হয়েছে!',
    copyFailed: 'কপি করা যায়নি',
    close: 'বন্ধ',
    chat: 'চ্যাট',
    install: 'ইনস্টল',
    installHint: 'অফলাইন ব্যবহারের জন্য আপনার হোম স্ক্রিনে যোগ করুন।',
    dismissInstall: 'ইনস্টল প্রম্পট বন্ধ করুন',
    recentlyAddedPages: 'সাম্প্রতিক যোগ হওয়া পৃষ্ঠা',
    recentlyUpdatedConcepts: 'সাম্প্রতিক হালনাগাদ হওয়া ধারণা',
    viewAllPages: 'সব পৃষ্ঠা দেখুন →',
    statsArticles: 'নিবন্ধ',
    statsConcepts: 'ধারণা',
    statsFaqs: 'প্রশ্নোত্তর',
    statsResources: 'রিসোর্স',
    statsLastUpdated: 'সর্বশেষ হালনাগাদ',
    statsAria: 'নলেজ বেসে কী আছে',
    countConcepts: '{count}টি ধারণা',
    countFaqs: '{count}টি প্রশ্নোত্তর',
    umbrellaConcept: 'শিক্ষায় AI',
    disclaimer: 'দায়প্রত্যায়ন: AI-নির্মিত ফলাফলে ভুল বা ত্রুটি থাকতে পারে।',
    metadataLabels: {
      type: 'ধরন',
      page_kind: 'পৃষ্ঠার ধরন',
      research_method: 'গবেষণার নকশা',
      discipline: 'বিষয়',
      level: 'স্তর',
      audience: 'উদ্দিষ্ট পাঠক',
      confidence: 'নির্ভরযোগ্যতা',
      resource_type: 'রিসোর্সের ধরন',
      access: 'প্রবেশাধিকার',
      license: 'লাইসেন্স',
      created: 'তৈরি হয়েছে',
      updated: 'হালনাগাদ হয়েছে',
      sources: 'সূত্র',
      connected_faqs: 'সংযুক্ত প্রশ্নোত্তর',
      connected_resources: 'সংযুক্ত রিসোর্স',
    },
    resourceLabels: {
      open: '{title} খুলুন',
      madeBy: 'নির্মাতা',
      sourceCode: 'সোর্স কোড',
      sourceCodeAvailable: 'উপলব্ধ',
      type: 'ধরন',
      license: 'লাইসেন্স',
      linkChecked: 'লিঙ্ক যাচাই করা হয়েছে',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'পাবলিক ডোমেইন',
    footerLicenseHtml:
      'এই ওয়েবসাইটটি একটি <strong>AI এজেন্ট</strong> দ্বারা তৈরি এবং <a href=\"{licenseUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{licenseName}</a> লাইসেন্সের অধীনে পাবলিক ডোমেইনে উৎসর্গ করা হয়েছে। কোনো অধিকার সংরক্ষিত নয়।',
    footerIssuesHtml:
      'কনটেন্টে কোনো সমস্যা পেয়েছেন?<br>\\n          অনুগ্রহ করে <a href=\"{issuesUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub-এ জানান</a>, অথবা সাইটের ডেভেলপারের সঙ্গে যোগাযোগ করুন: <a href=\"{contactUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{editorName}</a>।',
  },
};

export default bn;
