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
}

const ko: FaqStrings = {
  title: 'FAQ',
  h1: '자주 묻는 질문',
  introHtml:
    '<strong>교육 분야 AI</strong>에 관한 흔한 질문에 답하는 섹션입니다. AI가 교수와 학습에 어떤 영향을 주는지에 대해 연구가 밝힌 내용과, 교육자, 교수자, 교수 설계자가 그 근거를 실제로 적용하는 방법을 다룹니다. 각 답변은 이 지식베이스 전반에서 요약된 연구 결과를 압축해 정리하고, 더 깊이 읽으실 수 있도록 질문을 관련 개념과 문서에 연결해 줍니다.',
  assistantHtml:
    '여기에서 답을 찾지 못한 질문이 있으신가요? <a href="/aied/ai">자신만의 AI 어시스턴트로 이 지식베이스 활용하기</a> 페이지를 참고해 직접 AI 어시스턴트에게 물어보십시오. 이 페이지는 에이전트를 전체 목록에 연결해 근거가 있고 인용이 포함된 답변을 얻는 방법을 보여 줍니다.',
  empty: '아직 FAQ가 없습니다.',
};

export default ko;