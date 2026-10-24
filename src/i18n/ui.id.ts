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

const id: UiStrings = {
  more: 'Lainnya',
  toolsLink: 'Alat dan sumber daya',
  journalLink: 'Jurnal',
  newsletterLink: 'Newsletter',
  faqLink: 'FAQ',
  language: 'Bahasa',
  chooseLanguage: 'Pilih bahasa',
  notTranslated: 'Hanya bahasa Inggris',
  notTranslatedHint:
    'Halaman ini belum diterjemahkan, jadi tautannya membuka beranda dalam bahasa tersebut.',
  translationNoticeHtml: '',
  originalPageLabel: 'Baca halaman ini dalam bahasa Inggris',
  chrome: {
    siteName: 'Basis Pengetahuan AI dalam Pendidikan',
    siteBrand: 'Basis Pengetahuan AIEd',
    lastVerified: 'terakhir diverifikasi',
    home: 'Beranda',
    concepts: 'Konsep',
    articles: 'Artikel',
    frequentlyAskedQuestions: 'Pertanyaan yang Sering Diajukan',
    faqs: 'FAQ',
    resources: 'Sumber Daya',
    starred: 'Dibintangi',
    starredCount: '{count} dibintangi',
    starredNone: 'Tidak ada',
    rss: 'RSS',
    search: 'Cari',
    searchPlaceholder: 'Cari artikel, konsep, dan FAQ...',
    chatWithAi: 'Mengobrol dengan AI',
    useWithAi: 'Gunakan dengan AI',
    themeToggle: 'Ubah mode terang/gelap',
    toggleNavigation: 'Alihkan navigasi',
    closeNavigation: 'Tutup navigasi',
    conceptNavigation: 'Navigasi konsep',
    collapseSidebar: 'Ciutkan bilah sisi',
    expandSidebar: 'Lebarkan bilah sisi',
    sidebarSections: 'Bagian bilah sisi',
    knowledgeBaseTools: 'Alat basis pengetahuan',
    onThisPage: 'Di halaman ini',
    recentActivity: 'Aktivitas terbaru',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
    pageNavigation: 'Navigasi halaman',
    starThisPage: 'Bintangi halaman ini',
    metadata: 'Metadata',
    noFaqsYet: 'Belum ada FAQ.',
    source: 'Sumber',
    edit: 'Sunting',
    history: 'Riwayat',
    embed: 'Sematkan',
    embedThisPage: 'Sematkan halaman ini',
    embedDesc: 'Salin kode di bawah untuk menyematkan halaman ini di sistem manajemen pembelajaran atau situs web lain. Versi yang disematkan hanya menampilkan konten halaman — header, navigasi, dan footer situs disembunyikan.',
    embedCode: 'Kode sematan',
    copyCode: 'Salin kode',
    copied: 'Disalin!',
    copyFailed: 'Gagal menyalin',
    close: 'Tutup',
    chat: 'Obrolan',
    install: 'Pasang',
    installHint: 'Tambahkan ke beranda Anda untuk akses offline.',
    dismissInstall: 'Tutup prompt pemasangan',
    recentlyAddedPages: 'Halaman yang Baru Ditambahkan',
    recentlyUpdatedConcepts: 'Konsep yang Baru Diperbarui',
    viewAllPages: 'Lihat semua halaman →',
    statsArticles: 'artikel',
    statsConcepts: 'konsep',
    statsFaqs: 'FAQ',
    statsResources: 'sumber daya',
    statsLastUpdated: 'terakhir diperbarui',
    statsAria: 'Apa saja yang terdapat dalam basis pengetahuan',
    countConcepts: '{count} konsep',
    countFaqs: '{count} FAQ',
    umbrellaConcept: 'AI dalam Pendidikan',
    disclaimer: 'Penafian: keluaran yang dihasilkan AI dapat mengandung ketidakakuratan atau kesalahan.',
    metadataLabels: {
      type: 'Jenis',
      page_kind: 'Jenis halaman',
      research_method: 'Desain studi',
      discipline: 'Disiplin',
      level: 'Tingkat',
      audience: 'Audiensi sasaran',
      confidence: 'Tingkat keyakinan',
      resource_type: 'Jenis sumber daya',
      access: 'Akses',
      license: 'Lisensi',
      created: 'Dibuat',
      updated: 'Diperbarui',
      sources: 'Sumber',
      connected_faqs: 'FAQ terkait',
      connected_resources: 'Sumber daya terkait',
    },
    resourceLabels: {
      open: 'Buka {title}',
      madeBy: 'Dibuat oleh',
      sourceCode: 'Kode sumber',
      sourceCodeAvailable: 'tersedia',
      type: 'Jenis',
      license: 'Lisensi',
      linkChecked: 'Tautan diperiksa',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Domain Publik',
    footerLicenseHtml:
      'Situs web ini dihasilkan oleh <strong>agen AI</strong> dan didedikasikan untuk domain publik di bawah lisensi <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Tidak ada hak yang dilindungi.',
    footerIssuesHtml:
      'Menemukan masalah pada konten?<br>\n          Silakan <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">laporkan di GitHub</a>, atau hubungi pengembang situs, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default id;
