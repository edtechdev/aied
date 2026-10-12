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

const sw: UiStrings = {
  more: 'Zaidi',
  toolsLink: 'Zana na rasilimali',
  journalLink: 'Jarida',
  faqLink: 'FAQ',
  language: 'Lugha',
  chooseLanguage: 'Chagua lugha',
  notTranslated: 'Kiingereza tu',
  notTranslatedHint:
    'Ukurasa huu haujatafsiriwa bado, kwa hivyo kiungo hufungua ukurasa wa nyumbani wa lugha hiyo.',
  translationNoticeHtml: '',
  originalPageLabel: 'Soma ukurasa huu kwa Kiingereza',
  chrome: {
    siteName: 'Hifadhi ya Maarifa ya Akili Bandia katika Elimu',
    siteBrand: 'AIEd Hifadhi ya Maarifa',
    lastVerified: 'Ilithibitishwa mwisho',
    home: 'Nyumbani',
    concepts: 'Madhana',
    articles: 'Makala',
    frequentlyAskedQuestions: 'Maswali Yanayoulizwa Mara kwa Mara',
    faqs: 'FAQ',
    resources: 'Rasilimali',
    starred: 'Zilizowekewa nyota',
    starredCount: '{count} zilizowekewa nyota',
    starredNone: 'Hakuna',
    rss: 'RSS',
    search: 'Tafuta',
    searchPlaceholder: 'Tafuta makala, madhana, na FAQ...',
    chatWithAi: 'Ongea na Akili Bandia',
    useWithAi: 'Tumia na Akili Bandia',
    themeToggle: 'Badilisha hali ya mwanga/giza',
    toggleNavigation: 'Fungua/funga urambazaji',
    closeNavigation: 'Funga urambazaji',
    conceptNavigation: 'Urambazaji wa madhana',
    collapseSidebar: 'Kunja upau wa kando',
    expandSidebar: 'Panua upau wa kando',
    sidebarSections: 'Sehemu za upau wa kando',
    knowledgeBaseTools: 'Zana za hifadhi ya maarifa',
    onThisPage: 'Kwenye ukurasa huu',
    recentActivity: 'Shughuli za hivi karibuni',
    previous: 'Iliyotangulia',
    next: 'Inayofuata',
    pageNavigation: 'Urambazaji wa kurasa',
    starThisPage: 'Weka alama ya nyota kwenye ukurasa huu',
    metadata: 'Metadata',
    noFaqsYet: 'Hakuna FAQ bado.',
    source: 'Chanzo',
    edit: 'Hariri',
    history: 'Historia',
    embed: 'Pachika',
    embedThisPage: 'Pachika ukurasa huu',
    embedDesc: 'Nakili msimbo ulio hapa chini ili kupachika ukurasa huu katika mfumo wa usimamizi wa kujifunza au tovuti nyingine. Toleo lililopachikwa linaonyesha maudhui ya ukurasa tu — linaficha kichwa cha tovuti, urambazaji, na kijachini.',
    embedCode: 'Msimbo wa kupachika',
    copyCode: 'Nakili msimbo',
    close: 'Funga',
    chat: 'Gumzo',
    install: 'Sakinisha',
    installHint: 'Ongeza kwenye skrini yako ya kwanza ili kupata ufikiaji bila mtandao.',
    dismissInstall: 'Ondoa ujumbe wa kusakinisha',
    recentlyAddedPages: 'Makala Zilizoongezwa Hivi Karibuni',
    recentlyUpdatedConcepts: 'Madhana Yaliyosasishwa Hivi Karibuni',
    viewAllPages: 'Ona kurasa zote →',
    statsArticles: 'makala',
    statsConcepts: 'madhana',
    statsFaqs: 'FAQ',
    statsResources: 'rasilimali',
    statsLastUpdated: 'Ilisasishwa mwisho',
    statsAria: 'Yaliyomo katika hifadhi ya maarifa',
    countConcepts: 'Madhana {count}',
    countFaqs: 'FAQ {count}',
    umbrellaConcept: 'Akili Bandia katika Elimu',
    disclaimer: 'Kanusho: matokeo yaliyotolewa na Akili Bandia yanaweza kuwa na kasoro au makosa.',
    metadataLabels: {
      type: 'Aina',
      page_kind: 'Aina ya ukurasa',
      research_method: 'Muundo wa utafiti',
      discipline: 'Fani',
      level: 'Ngazi',
      audience: 'Hadhira inayokusudiwa',
      confidence: 'Uhakika',
      resource_type: 'Aina ya rasilimali',
      access: 'Ufikiaji',
      license: 'Leseni',
      created: 'Imeundwa',
      updated: 'Ilisasishwa',
      sources: 'Vyanzo',
      connected_faqs: 'FAQ Zilizounganishwa',
      connected_resources: 'Rasilimali Zilizounganishwa',
    },
    resourceLabels: {
      open: 'Fungua {title}',
      madeBy: 'Imetengenezwa na',
      sourceCode: 'Msimbo wa chanzo',
      sourceCodeAvailable: 'inapatikana',
      type: 'Aina',
      license: 'Leseni',
      linkChecked: 'Kiungo kilichothibitishwa',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Mali ya Umma',
    footerLicenseHtml:
      'Tovuti hii ilizalishwa na <strong>wakala wa Akili Bandia</strong> na imejitolea kwa mali ya umma chini ya leseni ya <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Hakuna haki zimehifadhiwa.',
    footerIssuesHtml:
      'Umepata tatizo katika maudhui?<br>\n          Tafadhali <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">ripoti kwenye GitHub</a>, au wasiliana na msanidi programu wa tovuti, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default sw;
