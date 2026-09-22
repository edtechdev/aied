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

const ja: UiStrings = {
  more: 'その他',
  toolsLink: 'ツールとリソース',
  journalLink: 'ジャーナル',
  faqLink: 'FAQ',
  language: '言語',
  chooseLanguage: '言語を選択',
  notTranslated: '英語のみ',
  notTranslatedHint:
    'このページはまだ翻訳されていないため、リンクはその言語のホームページを開きます。',
  translationNoticeHtml: '',
  originalPageLabel: 'このページを英語で読む',
  chrome: {
    siteName: '教育におけるAIナレッジベース',
    siteBrand: 'AIEdナレッジベース',
    lastVerified: '最終確認日',
    home: 'ホーム',
    concepts: '概念',
    articles: '記事',
    frequentlyAskedQuestions: 'よくある質問',
    faqs: 'FAQ',
    resources: 'リソース',
    starred: 'お気に入り',
    starredCount: '{count}件のお気に入り',
    starredNone: 'なし',
    rss: 'RSS',
    search: '検索',
    searchPlaceholder: '記事、概念、FAQを検索...',
    chatWithAi: 'AIとチャット',
    useWithAi: 'AIと一緒に使う',
    themeToggle: 'ライト/ダークモードを切り替え',
    toggleNavigation: 'ナビゲーションを開閉',
    closeNavigation: 'ナビゲーションを閉じる',
    conceptNavigation: '概念のナビゲーション',
    collapseSidebar: 'サイドバーを折りたたむ',
    expandSidebar: 'サイドバーを展開する',
    sidebarSections: 'サイドバーのセクション',
    knowledgeBaseTools: 'ナレッジベースのツール',
    onThisPage: 'このページの内容',
    recentActivity: '最近の活動',
    previous: '前へ',
    next: '次へ',
    pageNavigation: 'ページのナビゲーション',
    starThisPage: 'このページをお気に入りに追加',
    metadata: 'メタデータ',
    noFaqsYet: 'FAQはまだありません。',
    source: 'ソース',
    edit: '編集',
    history: '履歴',
    embed: '埋め込み',
    embedThisPage: 'このページを埋め込む',
    embedCode: '埋め込みコード',
    copyCode: 'コードをコピー',
    close: '閉じる',
    chat: 'チャット',
    install: 'インストール',
    installHint: 'ホーム画面に追加すると、オフラインで閲覧できます。',
    dismissInstall: 'インストールの案内を閉じる',
    recentlyAddedPages: '最近追加されたページ',
    recentlyUpdatedConcepts: '最近更新された概念',
    viewAllPages: 'すべてのページを見る →',
    statsArticles: '記事',
    statsConcepts: '概念',
    statsFaqs: 'FAQ',
    statsResources: 'リソース',
    statsLastUpdated: '最終更新',
    statsAria: 'ナレッジベースに含まれるもの',
    countConcepts: '{count}件の概念',
    countFaqs: '{count}件のFAQ',
    umbrellaConcept: '教育におけるAI',
    disclaimer: '免責事項：AIが生成した内容には、不正確な記述や誤りが含まれることがあります。',
    metadataLabels: {
      type: '種類',
      page_kind: 'ページ種別',
      research_method: '研究デザイン',
      discipline: '分野',
      level: 'レベル',
      audience: '対象読者',
      confidence: '信頼度',
      resource_type: 'リソースの種類',
      access: 'アクセス',
      license: 'ライセンス',
      created: '作成日',
      updated: '更新日',
      sources: '出典',
      connected_faqs: '関連するFAQ',
      connected_resources: '関連するリソース',
    },
    footerLicenseHtml:
      'このウェブサイトは<strong>AIエージェント</strong>が生成したもので、パブリックドメインとして<a href=\"{licenseUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{licenseName}</a>ライセンスのもとで公開されています。権利は留保していません。',
    footerIssuesHtml:
      '内容に問題を見つけましたか。<br>\n          <a href=\"{issuesUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">GitHubで報告する</a>か、サイト開発者<a href=\"{contactUrl}\" class=\"footer-link\" target=\"_blank\" rel=\"noopener noreferrer\">{editorName}</a>までご連絡ください。',
  },
};

export default ja;
