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

const zh: UiStrings = {
  more: '更多',
  toolsLink: '工具与资源',
  journalLink: '日志',
  faqLink: '常见问题',
  language: '语言',
  chooseLanguage: '选择语言',
  notTranslated: '仅英文',
  notTranslatedHint: '此页面尚未翻译，因此该链接会打开对应语言的主页。',
  translationNoticeHtml: '本页面已译为中文，但知识库本身（包括其中的文章页面、概念页面和常见问题页面）均以英文撰写。',
  originalPageLabel: '阅读本页的英文版本',
  chrome: {
    siteName: '教育中的人工智能知识库',
    siteBrand: 'AIEd 知识库',
    lastVerified: '最后核验',
    home: '首页',
    concepts: '概念',
    articles: '文章',
    frequentlyAskedQuestions: '常见问题',
    faqs: '问答',
    resources: '资源',
    starred: '收藏',
    starredCount: '{count} 项收藏',
    starredNone: '无',
    rss: 'RSS',
    search: '搜索',
    searchPlaceholder: '搜索文章、概念和常见问题……',
    chatWithAi: '与 AI 对话',
    useWithAi: '配合 AI 使用',
    themeToggle: '切换浅色/深色模式',
    toggleNavigation: '切换导航',
    closeNavigation: '关闭导航',
    conceptNavigation: '概念导航',
    collapseSidebar: '收起侧边栏',
    expandSidebar: '展开侧边栏',
    sidebarSections: '侧边栏栏目',
    knowledgeBaseTools: '知识库工具',
    onThisPage: '本页内容',
    recentActivity: '最近动态',
    previous: '上一篇',
    next: '下一篇',
    pageNavigation: '页面导航',
    starThisPage: '收藏此页',
    metadata: '元数据',
    noFaqsYet: '暂无常见问题。',
    source: '来源',
    edit: '编辑',
    history: '历史',
    embed: '嵌入',
    embedThisPage: '嵌入此页',
    embedCode: '嵌入代码',
    copyCode: '复制代码',
    close: '关闭',
    chat: '对话',
    install: '安装',
    installHint: '添加到主屏幕，以便离线访问。',
    dismissInstall: '关闭安装提示',
    recentlyAddedPages: '最近新增页面',
    recentlyUpdatedConcepts: '最近更新的概念',
    viewAllPages: '查看全部页面 →',
    statsArticles: '篇文章',
    statsConcepts: '个概念',
    statsFaqs: '个常见问题',
    statsResources: '项资源',
    statsLastUpdated: '最后更新',
    statsAria: '知识库包含的内容',
    countConcepts: '{count} 个概念',
    countFaqs: '{count} 个常见问题',
    umbrellaConcept: '教育中的人工智能',
    disclaimer: '免责声明：AI 生成的内容可能包含不准确或错误之处。',
    metadataLabels: {
      type: '类型',
      page_kind: '页面类型',
      research_method: '研究设计',
      discipline: '学科',
      level: '层次',
      audience: '目标读者',
      confidence: '可信度',
      resource_type: '资源类型',
      access: '获取方式',
      license: '许可',
      created: '创建',
      updated: '更新',
      sources: '来源',
      connected_faqs: '相关常见问题',
      connected_resources: '相关资源',
    },
    footerLicenseHtml:
      '本网站由 <strong>AI 智能体</strong>生成，并以 <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a> 许可协议发布至公有领域。不保留任何权利。',
    footerIssuesHtml:
      '发现内容有问题？<br>\n          请在 <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub 上报告</a>，或联系网站开发者 <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>。',
  },
};

export default zh;
