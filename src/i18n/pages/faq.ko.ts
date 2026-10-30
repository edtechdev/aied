/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const ko: FaqStrings = {
  title: 'FAQ',
  h1: '자주 묻는 질문',
  introHtml:
    '<strong>교육 분야 AI</strong>에 관한 흔한 질문에 답하는 섹션입니다. AI가 교수와 학습에 어떤 영향을 주는지에 대해 연구가 밝힌 내용과, 교육자, 교수자, 교수 설계자가 그 근거를 실제로 적용하는 방법을 다룹니다. 각 답변은 이 지식베이스 전반에서 요약된 연구 결과를 압축해 정리하고, 더 깊이 읽으실 수 있도록 질문을 관련 개념과 문서에 연결해 줍니다.',
  assistantHtml:
    '여기에서 답을 찾지 못한 질문이 있으신가요? <a href="/aied/ai">자신만의 AI 어시스턴트로 이 지식베이스 활용하기</a> 페이지를 참고해 직접 AI 어시스턴트에게 물어보십시오. 이 페이지는 에이전트를 전체 목록에 연결해 근거가 있고 인용이 포함된 답변을 얻는 방법을 보여 줍니다.',
  empty: '아직 FAQ가 없습니다.',
  sectionHeadings: {
    "Start here": "여기서 시작하기",
    "Course and institutional policy": "강좌와 기관 정책",
    "Designing courses and activities": "강좌와 활동 설계",
    "Assessment, feedback and integrity": "평가, 피드백, 학문적 정직성",
    "How students learn and use AI": "학생은 AI를 어떻게 배우고 쓰는가",
    "Particular learners, access and wellbeing": "다양한 학습자, 접근성, 웰빙",
    "Careers and AI literacy": "진로와 AI 리터러시",
    "Building and evaluating educational AI": "교육 AI의 구축과 평가",
    "Research practice": "연구 실천",
  },
  sectionBlurbs: {
    "Start here": "어떤 역할에 있든, 구체적인 질문보다 먼저 읽어 볼 만한 두 가지 큰 질문입니다.",
    "Course and institutional policy": "학생이 읽게 될 규칙을 쓰는 교수자와, 프로그램 차원에서 그 규칙을 정하는 관리자와 교수 개발 담당자를 위한 것입니다.",
    "Designing courses and activities": "과제, 한 학기, 온라인 강좌 가운데 어디에 AI가 들어갈지 정하는 모든 사람과, AI가 돌려줄 줄 알았던 시간을 되찾으려는 교수자를 위한 것입니다.",
    "Assessment, feedback and integrity": "증거가 가장 분명하고 그 결과가 학생의 성적 기록에 직접 미치기 때문에 가장 큰 묶음입니다.",
    "How students learn and use AI": "학생이 실제로 무엇을 얻고 무엇을 잃을 위험이 있는지, 학습을 어떻게 학생 곁에 남길지에 관한 질문입니다.",
    "Particular learners, access and wellbeing": "교실에 실제로 있는 학습자에 맞춰 설계를 조정하는 교수자와 지원 인력, 그리고 그 자리에 없는 학습자를 고민하는 관리자를 위한 것입니다.",
    "Careers and AI literacy": "이 모든 것이 무엇을 위한 것인지 묻는 학생에게 답해야 하는 커리큘럼 설계자와 프로그램 책임자를 위한 것입니다.",
    "Building and evaluating educational AI": "튜터, 시뮬레이션, 플랫폼을 실제 강좌에 투입하는 개발자, 교수 설계자, 연구자를 위한 것입니다.",
    "Research practice": "이 분야에서 연구를 보고하고 심사하고 계획하는 연구자를 위한 것입니다.",
  },
};

export default ko;