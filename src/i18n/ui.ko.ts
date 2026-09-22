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

const ko: UiStrings = {
  more: '더 보기',
  toolsLink: '도구와 리소스',
  journalLink: '저널',
  faqLink: 'FAQ',
  language: '언어',
  chooseLanguage: '언어 선택',
  notTranslated: '영어만 제공',
  notTranslatedHint:
    '이 페이지는 아직 번역되지 않았으므로, 해당 링크는 그 언어의 홈 페이지를 엽니다.',
  translationNoticeHtml: '이 페이지는 한국어로 번역되었지만, 지식베이스 자체(문서 페이지, 개념 페이지, FAQ 페이지 포함)는 영어로 작성되었습니다.',
  originalPageLabel: '이 페이지를 영어로 읽기',
  chrome: {
    siteName: '교육에서의 인공지능 지식베이스',
    siteBrand: 'AIEd 지식베이스',
    lastVerified: '최종 검증일',
    home: '홈',
    concepts: '개념',
    articles: '문서',
    frequentlyAskedQuestions: '자주 묻는 질문',
    faqs: 'FAQ',
    resources: '리소스',
    starred: '즐겨찾기',
    starredCount: '즐겨찾기 {count}개',
    starredNone: '없음',
    rss: 'RSS',
    search: '검색',
    searchPlaceholder: '문서, 개념, FAQ 검색...',
    chatWithAi: 'AI와 대화',
    useWithAi: 'AI와 함께 사용',
    themeToggle: '밝은/어두운 모드 전환',
    toggleNavigation: '내비게이션 열기/닫기',
    closeNavigation: '내비게이션 닫기',
    conceptNavigation: '개념 내비게이션',
    collapseSidebar: '사이드바 접기',
    expandSidebar: '사이드바 펼치기',
    sidebarSections: '사이드바 섹션',
    knowledgeBaseTools: '지식베이스 도구',
    onThisPage: '이 페이지의 목차',
    recentActivity: '최근 활동',
    previous: '이전',
    next: '다음',
    pageNavigation: '페이지 내비게이션',
    starThisPage: '이 페이지 즐겨찾기',
    metadata: '메타데이터',
    noFaqsYet: '아직 FAQ가 없습니다.',
    source: '출처',
    edit: '편집',
    history: '기록',
    embed: '삽입',
    embedThisPage: '이 페이지 삽입',
    embedCode: '삽입 코드',
    copyCode: '코드 복사',
    close: '닫기',
    chat: '대화',
    install: '설치',
    installHint: '오프라인에서 이용하시려면 홈 화면에 추가하십시오.',
    dismissInstall: '설치 안내 닫기',
    recentlyAddedPages: '최근 추가된 문서',
    recentlyUpdatedConcepts: '최근 갱신된 개념',
    viewAllPages: '모든 문서 보기 →',
    statsArticles: '문서',
    statsConcepts: '개념',
    statsFaqs: 'FAQ',
    statsResources: '리소스',
    statsLastUpdated: '최근 갱신일',
    statsAria: '지식베이스에 담긴 내용',
    countConcepts: '{count}개 개념',
    countFaqs: '{count}개 FAQ',
    umbrellaConcept: '교육에서의 인공지능',
    disclaimer: '면책 고지: AI가 생성한 결과에는 부정확한 내용이나 오류가 있을 수 있습니다.',
    metadataLabels: {
      type: '유형',
      page_kind: '페이지 종류',
      research_method: '연구 설계',
      discipline: '분야',
      level: '수준',
      audience: '대상 독자',
      confidence: '신뢰도',
      resource_type: '리소스 유형',
      access: '이용 조건',
      license: '라이선스',
      created: '생성일',
      updated: '갱신일',
      sources: '출처',
      connected_faqs: '연결된 FAQ',
      connected_resources: '연결된 리소스',
    },
    footerLicenseHtml:
      '이 웹사이트는 <strong>AI 에이전트</strong>가 생성했으며, <a href="{licenseUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{licenseName}</a> 라이선스에 따라 퍼블릭 도메인에 헌정됩니다. 권리를 유보하지 않습니다.',
    footerIssuesHtml:
      '콘텐츠에 문제를 발견하셨나요?<br>\n          <a href="{issuesUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub에 알려 주시거나</a> 사이트 개발자 <a href="{contactUrl}" class="footer-link" target="_blank" rel="noopener noreferrer">{editorName}</a>에게 문의해 주십시오.',
  },
};

export default ko;
