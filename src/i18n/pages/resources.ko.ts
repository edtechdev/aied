/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const ko: ResourcesStrings = {
  title: '리소스',
  h1: '무료 도구와 리소스',
  introHtml: [
    '교육 분야 AI를 위한 <strong>무료 도구, 모음집, 측정 도구와 형식</strong>을 골라 정리한 것입니다. 먼저 읽어야 하는 연구가 아니라 오늘 바로 가서 사용하실 수 있는 것들입니다. 대부분 교육자, 교수 설계자, 사서, 연구자가 만들었으며, 상당수는 전문 개발자가 아닌 사람들이 AI의 도움을 받아 만들었습니다.',
    '이곳의 모든 항목이 상호작용형은 아닙니다. 브라우저 도구와 AI 튜터 외에도 바로 쓸 수 있는 프롬프트와 "gem" 모음, 수업 활동 모음집, 브리핑 및 정책 문서, 평가 도구, 개방형 파일 형식이 있습니다. 각 항목은 누가 만들었는지, 어떤 종류인지, 소스 코드를 이용할 수 있는지, 사용 비용이 얼마인지, 링크를 마지막으로 확인한 시점이 언제인지를 설명하는 페이지로 연결되는 짧은 요약입니다.',
    '모든 항목은 이 지식베이스가 통제하지 않는 외부 사이트로 연결되며, 링크는 주기적으로 다시 확인합니다. 각 페이지에는 링크를 마지막으로 확인한 날짜가 표시됩니다. 도구가 이전했거나, 더 이상 공개되지 않았거나, 여기에 있어야 할 만한데 빠져 있다면 저장소에 이슈를 여는 것이 가장 빠른 방법입니다.',
  ],
  empty: '아직 리소스가 없습니다.',
  groupLabels: {
    software: '소프트웨어',
    'ai tutor': 'AI 튜터',
    'agent skill': '에이전트 스킬',
    'prompt or gem library': '프롬프트 및 Gem 라이브러리',
    'collection of tools': '도구 모음',
    'collection of activities': '활동 모음',
    'assessment instrument': '평가 도구',
    'open format or specification': '개방형 형식 및 사양',
    'ebook or guide': '전자책 및 안내서',
    'case study collection': '사례 연구 모음',
    'dataset or benchmark': '데이터셋 및 벤치마크',
  },
};

export default ko;