/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const ko: ConceptsStrings = {
  title: '개념',
  h1: '개념',
  introHtml:
    '사이트의 모든 개념 페이지를 왼쪽 사이드바와 같은 섹션으로 묶어 보여 줍니다. 각 페이지에서는 AI와 교육에서 어떤 개념이 무엇을 뜻하는지, 연구가 그 개념에 대해 무엇을 밝혔는지, 어떤 연구를 근거로 삼는지 설명합니다. <a href="/aied/concepts/ai-education/">교육에서의 인공지능</a>은 이들을 아우르는 상위 개념입니다.',
  browseHtml:
    '개념 페이지는 오프라인으로 읽을 수 있도록 <a href="/aied/aied.epub">EPUB</a>과 <a href="/aied/aied.pdf">PDF</a>로도 제공됩니다. 질문이나 논문, 도구, 검색, 또는 직접 쓰는 어시스턴트에서 시작하려면 <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">저널</a>, <a href="/aied/resources">리소스</a>, <a href="/aied/search">검색</a>, <a href="/aied/ai">AI 페이지</a>를 보십시오.',
  countTemplate: '{count}개 개념 페이지를 {strands}개 섹션으로 묶었습니다.',
  strandBlurbs: {
    'Foundations of AI in education':
      '이 분야 자체를 조망하는 틀로서, 교육에서의 인공지능이 무엇인지, 어떻게 발전해 왔는지, 그리고 다른 모든 영역을 형성하는 횡단적 주제(AI 리터러시, 인간과 AI의 협업, 주체성)를 다룹니다.',
    'Learning and instruction':
      'AI가 교육과 학습을 어떻게 지원하는지를, AI가 작동하는 교수법과 학습 이론, 학습자 대상 과정을 통해 설명합니다.',
    'Technologies and techniques':
      '기술의 층으로서, 교육 기술을 뒷받침하는 AI 모델과 방법, 그리고 그 위에 구축된 학습자 모형화와 튜터링 시스템을 다룹니다.',
    'AI in the disciplines':
      'AI가 학문 분야와 교육 수준 전반에 어떻게 적용되는지, 즉 이 분야의 주제 영역 범위를 보여 줍니다.',
    'Assessment and measurement':
      'AI가 학습자를 평가하는 동시에 AI 시스템과 그 영향력을 어떻게 평가할지를 바꾸는 양상을 보여 줍니다.',
    'Equity, ethics, and responsible use':
      '형평성, 접근성, 책임은 교육에서의 인공지능의 핵심입니다.',
  },
  empty: '아직 개념 페이지가 없습니다.',
};

export default ko;
