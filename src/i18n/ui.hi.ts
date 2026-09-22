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

const hi: UiStrings = {
  more: 'अधिक',
  toolsLink: 'उपकरण और संसाधन',
  journalLink: 'जर्नल',
  faqLink: 'सामान्य प्रश्न',
  language: 'भाषा',
  chooseLanguage: 'भाषा चुनें',
  notTranslated: 'केवल अंग्रेज़ी में',
  notTranslatedHint:
    'यह पृष्ठ अभी अनूदित नहीं है, इसलिए लिंक उस भाषा के मुखपृष्ठ को खोलेगा।',
  translationNoticeHtml: '',
  originalPageLabel: 'यह पृष्ठ अंग्रेज़ी में पढ़ें',
  chrome: {
    siteName: 'शिक्षा में AI का ज्ञानकोश',
    siteBrand: 'AIEd ज्ञानकोश',
    lastVerified: 'अंतिम सत्यापन',
    home: 'मुखपृष्ठ',
    concepts: 'अवधारणाएँ',
    articles: 'लेख',
    frequentlyAskedQuestions: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: 'सामान्य प्रश्न',
    resources: 'संसाधन',
    starred: 'सितारांकित',
    starredCount: '{count} सितारांकित',
    starredNone: 'कोई नहीं',
    rss: 'RSS',
    search: 'खोजें',
    searchPlaceholder: 'लेख, अवधारणाएँ और सामान्य प्रश्न खोजें...',
    chatWithAi: 'AI के साथ चैट करें',
    useWithAi: 'AI के साथ उपयोग करें',
    themeToggle: 'हल्का या गहरा मोड बदलें',
    toggleNavigation: 'नेविगेशन दिखाएँ या छिपाएँ',
    closeNavigation: 'नेविगेशन बंद करें',
    conceptNavigation: 'अवधारणा नेविगेशन',
    collapseSidebar: 'साइडबार संकुचित करें',
    expandSidebar: 'साइडबार विस्तृत करें',
    sidebarSections: 'साइडबार अनुभाग',
    knowledgeBaseTools: 'ज्ञानकोश उपकरण',
    onThisPage: 'इस पृष्ठ पर',
    recentActivity: 'हाल की गतिविधि',
    previous: 'पिछला',
    next: 'अगला',
    pageNavigation: 'पृष्ठ नेविगेशन',
    starThisPage: 'इस पृष्ठ को सितारांकित करें',
    metadata: 'मेटाडेटा',
    noFaqsYet: 'अभी कोई सामान्य प्रश्न नहीं।',
    source: 'स्रोत',
    edit: 'संपादित करें',
    history: 'इतिहास',
    embed: 'एम्बेड',
    embedThisPage: 'इस पृष्ठ को एम्बेड करें',
    embedCode: 'एम्बेड कोड',
    copyCode: 'कोड कॉपी करें',
    close: 'बंद करें',
    chat: 'चैट',
    install: 'इंस्टॉल करें',
    installHint: 'ऑफ़लाइन उपयोग के लिए इसे अपनी होम स्क्रीन पर जोड़ें।',
    dismissInstall: 'इंस्टॉल संकेत बंद करें',
    recentlyAddedPages: 'हाल ही में जोड़े गए पृष्ठ',
    recentlyUpdatedConcepts: 'हाल ही में अद्यतन अवधारणाएँ',
    viewAllPages: 'सभी पृष्ठ देखें →',
    statsArticles: 'लेख',
    statsConcepts: 'अवधारणाएँ',
    statsFaqs: 'सामान्य प्रश्न',
    statsResources: 'संसाधन',
    statsLastUpdated: 'अंतिम अद्यतन',
    statsAria: 'ज्ञानकोश में क्या शामिल है',
    countConcepts: '{count} अवधारणाएँ',
    countFaqs: '{count} सामान्य प्रश्न',
    umbrellaConcept: 'शिक्षा में AI',
    disclaimer: 'अस्वीकरण: AI द्वारा उत्पन्न सामग्री में अशुद्धियाँ या त्रुटियाँ हो सकती हैं।',
    metadataLabels: {
      type: 'प्रकार',
      page_kind: 'पृष्ठ का प्रकार',
      research_method: 'अध्ययन डिज़ाइन',
      discipline: 'विषय क्षेत्र',
      level: 'स्तर',
      audience: 'इच्छित पाठक',
      confidence: 'विश्वास स्तर',
      resource_type: 'संसाधन का प्रकार',
      access: 'पहुँच',
      license: 'लाइसेंस',
      created: 'निर्मित',
      updated: 'अद्यतन',
      sources: 'स्रोत',
      connected_faqs: 'संबंधित सामान्य प्रश्न',
      connected_resources: 'संबंधित संसाधन',
    },
    footerLicenseHtml:
      'यह वेबसाइट एक <strong>AI एजेंट</strong> द्वारा उत्पन्न की गई है और <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a> लाइसेंस के अंतर्गत सार्वजनिक डोमेन को समर्पित है। कोई अधिकार सुरक्षित नहीं।',
    footerIssuesHtml:
      'सामग्री में कोई समस्या मिली?<br>\n          कृपया <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub पर इसकी रिपोर्ट करें</a>, या साइट डेवलपर <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a> से संपर्क करें।',
  },
};

export default hi;