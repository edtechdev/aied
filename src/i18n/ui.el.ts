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

const el: UiStrings = {
  more: 'Περισσότερα',
  toolsLink: 'Εργαλεία και πόροι',
  journalLink: 'Ημερολόγιο',
  faqLink: 'Συχνές ερωτήσεις',
  language: 'Γλώσσα',
  chooseLanguage: 'Επιλέξτε γλώσσα',
  notTranslated: 'Μόνο στα αγγλικά',
  notTranslatedHint:
    'Αυτή η σελίδα δεν έχει μεταφραστεί ακόμη, επομένως ο σύνδεσμος ανοίγει την αρχική σελίδα της συγκεκριμένης γλώσσας.',
  translationNoticeHtml: '',
  originalPageLabel: 'Διαβάστε αυτή τη σελίδα στα αγγλικά',
  chrome: {
    siteName: 'Βάση γνώσεων για την τεχνητή νοημοσύνη στην εκπαίδευση',
    siteBrand: 'Βάση γνώσεων AIEd',
    lastVerified: 'τελευταία επαλήθευση',
    home: 'Αρχική',
    concepts: 'Έννοιες',
    articles: 'Άρθρα',
    frequentlyAskedQuestions: 'Συχνές ερωτήσεις',
    faqs: 'Συχνές ερωτήσεις',
    resources: 'Πόροι',
    starred: 'Αγαπημένες',
    starredCount: '{count} αγαπημένες',
    starredNone: 'Καμία',
    rss: 'RSS',
    search: 'Αναζήτηση',
    searchPlaceholder: 'Αναζήτηση άρθρων, εννοιών και συχνών ερωτήσεων…',
    chatWithAi: 'Συζήτηση με AI',
    useWithAi: 'Χρήση με AI',
    themeToggle: 'Εναλλαγή φωτεινής/σκοτεινής λειτουργίας',
    toggleNavigation: 'Εναλλαγή πλοήγησης',
    closeNavigation: 'Κλείσιμο πλοήγησης',
    conceptNavigation: 'Πλοήγηση στις έννοιες',
    collapseSidebar: 'Σύμπτυξη πλαϊνής γραμμής',
    expandSidebar: 'Ανάπτυξη πλαϊνής γραμμής',
    sidebarSections: 'Ενότητες πλαϊνής γραμμής',
    knowledgeBaseTools: 'Εργαλεία βάσης γνώσεων',
    onThisPage: 'Σε αυτή τη σελίδα',
    recentActivity: 'Πρόσφατη δραστηριότητα',
    previous: 'Προηγούμενη',
    next: 'Επόμενη',
    pageNavigation: 'Πλοήγηση στη σελίδα',
    starThisPage: 'Προσθέστε αυτή τη σελίδα στις αγαπημένες',
    metadata: 'Μεταδεδομένα',
    noFaqsYet: 'Δεν υπάρχουν ακόμη συχνές ερωτήσεις.',
    source: 'Πηγή',
    edit: 'Επεξεργασία',
    history: 'Ιστορικό',
    embed: 'Ενσωμάτωση',
    embedThisPage: 'Ενσωμάτωση αυτής της σελίδας',
    embedDesc:
      'Αντιγράψτε τον παρακάτω κώδικα για να ενσωματώσετε αυτή τη σελίδα σε σύστημα διαχείρισης μάθησης ή σε άλλον ιστότοπο. Η ενσωματωμένη έκδοση εμφανίζει μόνο το περιεχόμενο της σελίδας — αποκρύπτει την κεφαλίδα του ιστότοπου, την πλοήγηση και το υποσέλιδο.',
    embedCode: 'Κώδικας ενσωμάτωσης',
    copyCode: 'Αντιγραφή κώδικα',
    close: 'Κλείσιμο',
    chat: 'Συζήτηση',
    install: 'Εγκατάσταση',
    installHint: 'Προσθέστε την στην αρχική οθόνη για πρόσβαση εκτός σύνδεσης.',
    dismissInstall: 'Απόρριψη προτροπής εγκατάστασης',
    recentlyAddedPages: 'Πρόσφατα προστιθέμενες σελίδες',
    recentlyUpdatedConcepts: 'Πρόσφατα ενημερωμένες έννοιες',
    viewAllPages: 'Προβολή όλων των σελίδων →',
    statsArticles: 'άρθρα',
    statsConcepts: 'έννοιες',
    statsFaqs: 'συχνές ερωτήσεις',
    statsResources: 'πόροι',
    statsLastUpdated: 'τελευταία ενημέρωση',
    statsAria: 'Τι περιέχει η βάση γνώσεων',
    countConcepts: '{count} έννοιες',
    countFaqs: '{count} συχνές ερωτήσεις',
    umbrellaConcept: 'AI στην εκπαίδευση',
    disclaimer:
      'Αποποίηση ευθυνών: το περιεχόμενο που παράγεται από AI ενδέχεται να περιέχει ανακρίβειες ή σφάλματα.',
    metadataLabels: {
      type: 'Τύπος',
      page_kind: 'Είδος σελίδας',
      research_method: 'Σχεδιασμός μελέτης',
      discipline: 'Γνωστικό πεδίο',
      level: 'Επίπεδο',
      audience: 'Προβλεπόμενο κοινό',
      confidence: 'Εμπιστοσύνη',
      resource_type: 'Είδος πόρου',
      access: 'Πρόσβαση',
      license: 'Άδεια',
      created: 'Δημιουργήθηκε',
      updated: 'Ενημερώθηκε',
      sources: 'Πηγές',
      connected_faqs: 'Συνδεδεμένες συχνές ερωτήσεις',
      connected_resources: 'Συνδεδεμένοι πόροι',
    },
    resourceLabels: {
      open: 'Άνοιγμα: {title}',
      madeBy: 'Δημιουργός',
      sourceCode: 'Πηγαίος κώδικας',
      sourceCodeAvailable: 'διαθέσιμος',
      type: 'Τύπος',
      license: 'Άδεια',
      linkChecked: 'Ο σύνδεσμος ελέγχθηκε',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Δημόσιος Τομέας',
    footerLicenseHtml:
      'Αυτός ο ιστότοπος δημιουργήθηκε από έναν <strong>πράκτορα AI</strong> και παραχωρείται στο δημόσιο τομέα με άδεια <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Κανένα δικαίωμα δεν διατηρείται.',
    footerIssuesHtml:
      'Εντοπίσατε κάποιο πρόβλημα στο περιεχόμενο;<br>\n          <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">αναφέρετέ το στο GitHub</a> ή επικοινωνήστε με τον δημιουργό του ιστότοπου, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default el;
