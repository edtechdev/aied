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

const vi: UiStrings = {
  more: 'Thêm',
  toolsLink: 'Công cụ và tài nguyên',
  journalLink: 'Nhật ký',
  faqLink: 'FAQ',
  language: 'Ngôn ngữ',
  chooseLanguage: 'Chọn ngôn ngữ',
  notTranslated: 'Chỉ bằng tiếng Anh',
  notTranslatedHint:
    'Trang này chưa được dịch, nên liên kết sẽ mở trang chủ của ngôn ngữ đó.',
  translationNoticeHtml: '',
  originalPageLabel: 'Đọc trang này bằng tiếng Anh',
  chrome: {
    siteName: 'Cơ sở tri thức về AI trong giáo dục',
    siteBrand: 'Cơ sở tri thức AIEd',
    lastVerified: 'kiểm tra lần cuối',
    home: 'Trang chủ',
    concepts: 'Khái niệm',
    articles: 'Bài viết',
    frequentlyAskedQuestions: 'Câu hỏi thường gặp',
    faqs: 'FAQ',
    resources: 'Tài nguyên',
    starred: 'Đã đánh dấu',
    starredCount: 'Đã đánh dấu: {count}',
    starredNone: 'Không có',
    rss: 'RSS',
    search: 'Tìm kiếm',
    searchPlaceholder: 'Tìm bài viết, khái niệm và FAQ...',
    chatWithAi: 'Trò chuyện với AI',
    useWithAi: 'Dùng với AI',
    themeToggle: 'Chuyển chế độ sáng/tối',
    toggleNavigation: 'Bật/tắt điều hướng',
    closeNavigation: 'Đóng điều hướng',
    conceptNavigation: 'Điều hướng khái niệm',
    collapseSidebar: 'Thu gọn thanh bên',
    expandSidebar: 'Mở rộng thanh bên',
    sidebarSections: 'Các mục thanh bên',
    knowledgeBaseTools: 'Công cụ của cơ sở tri thức',
    onThisPage: 'Trên trang này',
    recentActivity: 'Hoạt động gần đây',
    previous: 'Trước',
    next: 'Tiếp',
    pageNavigation: 'Điều hướng trang',
    starThisPage: 'Đánh dấu trang này',
    metadata: 'Siêu dữ liệu',
    noFaqsYet: 'Chưa có FAQ.',
    source: 'Nguồn',
    edit: 'Sửa',
    history: 'Lịch sử',
    embed: 'Nhúng',
    embedThisPage: 'Nhúng trang này',
    embedDesc:
      'Sao chép mã bên dưới để nhúng trang này vào hệ thống quản lý học tập hoặc trang web khác. Bản nhúng chỉ hiển thị nội dung trang — nó ẩn phần đầu trang, điều hướng và chân trang của website.',
    embedCode: 'Mã nhúng',
    copyCode: 'Sao chép mã',
    close: 'Đóng',
    chat: 'Trò chuyện',
    install: 'Cài đặt',
    installHint: 'Thêm vào màn hình chính để truy cập ngoại tuyến.',
    dismissInstall: 'Bỏ qua lời nhắc cài đặt',
    recentlyAddedPages: 'Trang vừa được thêm',
    recentlyUpdatedConcepts: 'Khái niệm vừa cập nhật',
    viewAllPages: 'Xem tất cả các trang →',
    statsArticles: 'bài viết',
    statsConcepts: 'khái niệm',
    statsFaqs: 'FAQ',
    statsResources: 'tài nguyên',
    statsLastUpdated: 'cập nhật lần cuối',
    statsAria: 'Cơ sở tri thức chứa những gì',
    countConcepts: 'Khái niệm: {count}',
    countFaqs: 'FAQ: {count}',
    umbrellaConcept: 'AI trong giáo dục',
    disclaimer:
      'Tuyên bố miễn trừ trách nhiệm: nội dung do AI tạo ra có thể chứa thông tin không chính xác hoặc lỗi.',
    metadataLabels: {
      type: 'Loại',
      page_kind: 'Loại trang',
      research_method: 'Thiết kế nghiên cứu',
      discipline: 'Lĩnh vực',
      level: 'Cấp độ',
      audience: 'Đối tượng dự kiến',
      confidence: 'Độ tin cậy',
      resource_type: 'Loại tài nguyên',
      access: 'Quyền truy cập',
      license: 'Giấy phép',
      created: 'Ngày tạo',
      updated: 'Ngày cập nhật',
      sources: 'Nguồn',
      connected_faqs: 'FAQ liên quan',
      connected_resources: 'Tài nguyên liên quan',
    },
    resourceLabels: {
      open: 'Mở: {title}',
      madeBy: 'Tạo bởi',
      sourceCode: 'Mã nguồn',
      sourceCodeAvailable: 'có sẵn',
      type: 'Loại',
      license: 'Giấy phép',
      linkChecked: 'Đã kiểm tra liên kết',
    },
    /** Localized name of the public-domain dedication, shown beside the CC0 mark. */
    publicDomainLabel: 'Phạm vi công cộng',
    footerLicenseHtml:
      'Website này được tạo bởi một <strong>tác nhân AI</strong> và được dành cho phạm vi công cộng theo giấy phép <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a>. Không bảo lưu quyền lợi nào.',
    footerIssuesHtml:
      'Phát hiện lỗi trong nội dung?<br>\n          Hãy <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">báo cáo trên GitHub</a>, hoặc liên hệ với người phát triển website, <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>.',
  },
};

export default vi;
