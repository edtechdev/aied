/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const ko: HomeStrings = {
  title: '홈',
  h1: '교육에서의 인공지능 지식베이스',
  introHtml: `교육에서의 인공지능 지식베이스에 오신 것을 환영합니다. 이곳은 <a href="/aied/concepts/ai-education/">교육에서의 인공지능</a>에 관한 무료 공공 자료로, 이를 가르치거나 공부하거나 설계하거나 운영하는 분들을 위한 곳입니다. 최근의 오픈 액세스 교육 연구를 요약하고 종합합니다. 페이지는 AI 에이전트가 사이트 개발자의 편집 지침을 받아 작성하고 갱신합니다.`,
  navHeading: '사이트 둘러보기',
  navHtml: `왼쪽 사이드바에 주제별로 정리된 색인을 살펴보시거나, 주제를 <a href="/aied/search">검색</a>하십시오. 문서 페이지는 논문 한 편을 연구 목적, 방법, 결과로 압축해 정리하고, 개념 페이지는 하나의 개념에 대해 연구가 밝힌 내용을 모아 그 근거가 된 연구들을 연결해 드립니다. 질문에서 출발하시려면 <a href="/aied/faq">FAQ</a>에 과정별 AI 정책이나 AI 탐지 도구를 사용해야 하는지처럼 방문자들이 가장 먼저 묻는 질문이 모여 있습니다. 도구에서 출발하시려면 <a href="/aied/resources">리소스 페이지</a>에 무료 도구와 모음집이 정리되어 있으며, 각 항목마다 만든 사람과 비용이 표시되어 있습니다. 위의 지도는 이 분야를 열두 개의 주제로 묶고 있으며, <a href="/aied/concepts/ai-education/">교육에서의 인공지능</a>이 중심 노드입니다.`,
  chatHeading: '지식베이스와 대화하기',
  chatHtml: `지식베이스 전체는 기계가 읽을 수 있는 파일로도 공개되어 있으므로, AI 챗봇이나 에이전트를 이 지식베이스에 연결하시면 페이지를 출처로 밝히는 답변을 얻으실 수 있습니다. <a href="/aied/ai">프롬프트는 여기</a>에 있습니다. 새 페이지는 <a href="/aied/journal">저널</a>에 올라가며, <a href="/aied/rss.xml">RSS 피드</a>도 있습니다. 오프라인으로 읽으시려면 <a href="/aied/aied.epub">EPUB</a>이나 <a href="/aied/aied.pdf">PDF</a>를 내려받으십시오.`,
  startingHeading: '독자별 추천 시작점',
  startingIntro: '자신의 역할에 맞는 그룹부터 시작하십시오.',
  groups: [
    {
      id: 'essential-concepts',
      heading: '핵심 개념',
      html: `<a href="/aied/concepts/ai-literacy/">AI 리터러시</a>, <a href="/aied/concepts/misconceptions/">AI에 관한 오해</a>, <a href="/aied/concepts/agentic-ai/">에이전트형 AI</a>, <a href="/aied/concepts/cognitive-offloading/">인지적 오프로딩</a>, 그리고 <a href="/aied/concepts/interpreting-and-applying-aied-research/">이 연구를 해석하고 적용하는 방법</a>. 단일 연구만으로는 한 가지 질문을 결론짓기 어려운 이유도 포함합니다.`,
    },
    {
      id: 'instructors',
      heading: '교수자',
      html: `<a href="/aied/concepts/teacher-role/">변화하는 교수자의 역할</a>, <a href="/aied/concepts/learning-design/">학습 설계</a>, <a href="/aied/concepts/assessment/">평가</a>, <a href="/aied/concepts/feedback/">피드백</a>, <a href="/aied/concepts/academic-integrity/">학문적 정직성</a>, <a href="/aied/concepts/framing-ai-use-for-students/">학생에게 AI 사용의 기준을 제시하기</a>, <a href="/aied/concepts/reducing-ai-misuse/">오용 줄이기</a>. 자신의 전공 분야에 특화된 도구와 사례는 <a href="/aied/concepts/discipline-specific-aied/">자신의 전공 분야에서의 AI</a>를 참고하십시오.`,
    },
    {
      id: 'developers',
      heading: '개발자',
      html: `<a href="/aied/concepts/educational-technology-developers/">교육을 위한 개발</a>, <a href="/aied/concepts/ai-technologies/">기반이 되는 기술</a>, <a href="/aied/concepts/intelligent-tutoring/">지능형 튜터링</a>, <a href="/aied/concepts/multimodal/">멀티모달 AI</a>, <a href="/aied/concepts/student-modeling/">학습자 모델링</a>, 그리고 <a href="/aied/concepts/llm-training-and-fine-tuning/">교수를 위한 모델 훈련과 조정</a>.`,
    },
    {
      id: 'administrators',
      heading: '관리자',
      html: `<a href="/aied/concepts/administrator/">관리자의 역할</a>, <a href="/aied/concepts/governance/">AI 거버넌스</a>, <a href="/aied/concepts/educational-policy-ai/">기관 정책</a>, <a href="/aied/concepts/legal-issues-and-risks/">법적 문제와 위험</a>, 그리고 <a href="/aied/concepts/change-management/">변화 관리</a>.`,
    },
    {
      id: 'researchers',
      heading: '연구자',
      html: `<a href="/aied/concepts/research-methods-aied/">AIED 연구 방법</a>, <a href="/aied/concepts/theories-and-frameworks/">이론과 프레임워크</a>, <a href="/aied/concepts/ai-ed-evaluation/">교육 분야 AI 개입 평가하기</a>, <a href="/aied/concepts/educational-measurement/">교육 측정</a>, <a href="/aied/concepts/learning-gains/">학습 성과 측정</a>, 그리고 <a href="/aied/concepts/limitations-in-aied-research/">이 근거 기반이 전반적으로 지닌 한계</a>.`,
    },
  ],
  statsHeading: '지식베이스에 담긴 내용',
  statsIntro:
    '모든 페이지에는 날짜가 붙어 있으며, 아래 수치는 지금 공개된 내용을 반영합니다. 목록 끝에 있는 "최신 업데이트" 날짜가 가장 최근의 수정일입니다.',
  conceptMap: {
    title: '교육에서의 인공지능 개념 지도',
    desc:
      '교육에서의 인공지능을 중심으로 열두 개의 최상위 개념이 연결된 방사형 지도입니다: ' +
      '모델링, 학습, 형평성, 피드백, AI 리터러시, 평가, 전공 분야, 교수법, ' +
      '윤리, 기술, 검증, 연구.',
    navLabel: '교육에서의 인공지능 개념',
    center: '교육에서의 인공지능',
    nodes: {
      'student-modeling': '모델링',
      'learning-theories': '학습',
      'equity-in-ai-education': '형평성',
      feedback: '피드백',
      'ai-literacy': 'AI 리터러시',
      assessment: '평가',
      'discipline-specific-aied': '전공 분야',
      pedagogy: '교수법',
      ethics: '윤리',
      'ai-technologies': '기술',
      'ai-ed-evaluation': '검증',
      'research-methods-aied': '연구',
    },
  },
  toc: [
    { text: '사이트 둘러보기', slug: 'navigating-the-site', depth: 2 },
    { text: '지식베이스와 대화하기', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: '독자별 추천 시작점', slug: 'starting-points', depth: 2 },
    { text: '핵심 개념', slug: 'essential-concepts', depth: 3 },
    { text: '교수자', slug: 'instructors', depth: 3 },
    { text: '개발자', slug: 'developers', depth: 3 },
    { text: '관리자', slug: 'administrators', depth: 3 },
    { text: '연구자', slug: 'researchers', depth: 3 },
    { text: '지식베이스에 담긴 내용', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default ko;