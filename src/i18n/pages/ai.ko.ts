/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `당신은 교육 분야 인공지능을 위한 연구 보조자입니다. AI in Education Knowledge Base(https://edtechdev.github.io/aied/)를 주된 출처로 사용하십시오.

1. 읽기 전에 경로를 먼저 정하십시오. https://edtechdev.github.io/aied/faq/ 의 FAQ 색인은 질문을 그 답이 있는 페이지로 연결해 주며, "연구는 무엇을 보여 주는가"와 같은 질문도 포함합니다. https://edtechdev.github.io/aied/llms.txt 의 전체 목록은 약 800KB이고, https://edtechdev.github.io/aied/llms-concepts.txt 의 개념 및 FAQ 파일은 약 4MB이며, llms-full.txt는 수십 MB에 이릅니다. 따라서 파일 전체를 불러오지 마시고 검색하거나 일부만 가져오시며, 전체 파일 가져오기가 실패하더라도 거기서 멈추지 마십시오.

2. 모든 주장을 페이지에 근거하게 하고, 페이지 제목 뒤에 그 URL을 붙여 인용하십시오. 페이지가 근거 논문의 인용 정보와 DOI를 제시하면 그것도 함께 밝히십시오. 일부 페이지는 arXiv 번호나 출판사 URL만 제시하므로, 페이지가 제시한 것만 쓰고 DOI, URL, 저자, 수치, 연구 결과를 절대 지어내지 마십시오.

3. 한 페이지에 의존하지 말고 여러 페이지를 종합하십시오. 개념 페이지는 개요를 제공하고 그 뒤에 있는 문서들을 연결해 주니 그 링크를 따라가십시오. 가장 관련 있는 페이지를 세 개에서 다섯 개 읽고, 같은 연구가 반복되기 시작하면 멈추고, 읽지 않은 내용을 밝히십시오. 지식베이스가 인접 분야에서만 이 주제를 다룬다면 그렇게 말하고 유추하여 답하십시오.

4. 근거의 강도에 맞추어 진술하십시오. 도움 없이 수행한 성과를 측정한 통제 실험이나 무작위 실험이 가장 강하고, 다음이 출판 편향을 보정한 메타분석, 그다음이 리뷰, 이후가 예비 연구, 정책 분석, 의견입니다. 규모가 작은 연구 하나는 합의가 아닙니다. 태그, 대상 독자, 수준, 확신도 평가는 렌더링된 페이지가 아니라 https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md 에 있는 각 페이지의 Markdown 원문에 있으므로, 확인할 수 없다면 문서가 그 연구를 어떻게 서술하는지로 판단하시고 그렇게 판단했음을 밝히십시오.

5. 질문이 요구하는 수준에 맞추어 답하고, 마지막에 가장 관련 있는 페이지와 FAQ를 추천하십시오.

"LLM"보다 "생성형 AI"라는 용어를 우선 사용하십시오. 지식베이스는 정기적으로 갱신되며, https://edtechdev.github.io/aied/journal/ 의 저널 페이지에 가장 최근에 추가된 내용이 정리되어 있습니다.

예시: "AI가 학생 글쓰기에 주는 피드백에 대해 연구는 무엇을 말하는가?" FAQ 색인을 확인하고, 가장 관련 있는 글쓰기 및 피드백 페이지와 그들이 인용한 연구를 읽은 다음, 인용과 링크를 붙여 답하십시오.`;

const ko: AiStrings = {
  title: '자신만의 AI 어시스턴트로 이 지식베이스 활용하기',
  description: 'AI in Education Knowledge Base를 자신의 챗봇이나 에이전트와 함께 사용하기 위한 복사·붙여넣기용 프롬프트입니다.',
  h1: '자신만의 AI 어시스턴트로 이 지식베이스 활용하기',
  introHtml: `사용하시는 AI 챗봇이나 에이전트를 이 지식베이스에 연결하시면, 추측 대신 이 연구 페이지들을 근거로 답변하게 하실 수 있습니다. 아래 프롬프트가 그 역할을 합니다. 이를 복사해 첫 메시지로 어시스턴트에 붙여 넣은 뒤 질문하십시오. 그러면 어떤 페이지를 근거로 삼았는지 밝히고 그 링크도 함께 제시하는 답변을 받으실 수 있으니, 출처를 직접 확인하실 수 있습니다.`,
  intro2Html: `기술적인 설정은 필요 없고 설치할 것도 없습니다. 설정을 아예 건너뛰고 싶으시다면, 이 내용을 이미 알고 있는 <a href="#ready-made-assistants">미리 만들어진 어시스턴트</a>도 있습니다.`,
  promptHeading: '복사할 프롬프트',
  promptIntro: '질문하기 전에 이 내용을 먼저 붙여 넣으십시오. 웹 페이지를 읽거나 붙여 넣은 문서를 받아들일 수 있는 챗봇이나 에이전트라면 모두 작동합니다. 상자는 스크롤되며, 버튼을 누르면 전체가 복사됩니다.',
  copyButton: '📋 프롬프트를 클립보드에 복사',
  copyHint: '그런 다음 어시스턴트에 붙여 넣고 질문하십시오.',
  copyOk: '✅ 복사했습니다!',
  copyFail: '❌ 복사 실패',
  promptAriaLabel: '복사할 프롬프트',
  promptText: PROMPT,
  howHeading: '사용 방법',
  howSteps: [
    '<strong>프롬프트를 복사</strong>하십시오. 위의 버튼을 사용합니다.',
    '<strong>어시스턴트에 붙여 넣어</strong> 첫 메시지로 보내십시오. 보통 이해했다는 답이 돌아옵니다.',
    '<strong>질문하십시오.</strong> 일상적인 표현으로 물으시면 됩니다. 예를 들어 "대규모 수업에서 AI 피드백에 대해 연구는 무엇을 말하는가?" 또는 "AI 탐지 도구를 사용해야 하는가?"와 같이 물으십시오.',
    '<strong>링크를 확인하십시오.</strong> 좋은 답변은 사용한 페이지를 밝힙니다. 페이지 이름 없이 자신감 있는 주장만 돌아온다면 "그 내용은 어느 페이지에서 나온 것인가?"라고 되묻고 다시 시도해 달라고 요청하십시오.',
  ],
  howNoteHtml: `웹을 탐색할 수 있는 어시스턴트에서 가장 잘 작동합니다. 프롬프트가 읽어야 할 페이지를 알려 주기 때문입니다. 사용하시는 어시스턴트가 링크를 열 수 없다면, 프롬프트만 붙여 넣지 마시고 지식베이스의 텍스트도 함께 첨부하십시오. <a href="/aied/llms-full.txt">전문 파일을 내려받아</a> 한 번 업로드하거나 대화에 붙여 넣고, 그와 함께 프롬프트를 사용하시면 됩니다. 약 15MB 크기의 텍스트 파일 하나입니다. 많은 채팅 제품이 이 정도 크기의 파일을 거부하므로 <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>도 있습니다. 모든 개념 및 FAQ 페이지의 전문을 담은 약 4MB 파일로, 먼저 시도해 보시기 좋은 쪽입니다. 개념은 연구가 밝힌 내용을 종합한 것이고, FAQ는 그 종합이 답하는 질문들이며, 각 개념 페이지는 그 근거가 된 논문을 연결해 줍니다.`,
  techSummary: '프롬프트 대신 URL을 원하는 도구를 위한 기술 참고 사항',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — 모든 페이지를 한 줄씩 정리한 목록으로, 사이트를 먼저 색인한 뒤 읽는 도구를 위한 것입니다',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — 지식베이스의 전체 텍스트를 한 파일에 담은 약 15MB 분량',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — 개념 및 FAQ 페이지의 전문, 약 4MB로, 더 큰 파일을 거부하는 도구와 채팅을 위한 것입니다',
    '<a href="/aied/sitemap-index.xml">사이트맵</a> — 모든 페이지 주소',
    '<a href="/aied/rss.xml">RSS 피드</a> — 새로 추가되거나 갱신된 페이지',
  ],
  assistantsHeading: '미리 만들어진 어시스턴트',
  assistantsIntro: '직접 설정하고 싶지 않으시다면, 이 지식베이스는 미리 만들어진 어시스턴트로도 이용하실 수 있습니다:',
  assistants: [
    '<strong>AI in Education Advisor</strong> — 이 지식베이스를 근거로 답하는 <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>입니다. <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">사용자 지정 지침</a>이 공개되어 있으며, 지식베이스의 <strong>정적 사본</strong>으로 만들어졌기 때문에 가장 최신 페이지보다 뒤처질 수 있습니다.',
    '<strong>NotebookLM 노트북</strong> — 같은 자료로 만든 <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLM 노트북</a>으로, 자동 생성된 보고서, 인포그래픽, 팟캐스트, 슬라이드, 그리고 <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">영상</a>을 제공합니다.',
  ],
  corpusHeading: '지식베이스에 담긴 내용',
  corpusHtml1: `천 편이 넘는 연구 요약이 튜터링과 AI 튜터, 평가와 피드백, 학문적 정직성, AI 리터러시, 교수 및 교직원 개발, 형평성과 접근성, 프라이버시, 정책과 거버넌스, 그리고 인지적 오프로딩과 학습자 동기 같은 학습과학 주제를 다룹니다. 모든 요약은 끝에 전체 인용 정보와 원문 논문 링크를 붙이므로, 어시스턴트가 참고 문헌을 그대로 전달할 수 있고 직접 찾아보실 수도 있습니다.`,
  corpusHtml2: `세 가지 종류의 페이지가 서로 다른 질문에 답합니다. <strong>개념 페이지</strong>는 하나의 개념에 대해 연구가 밝힌 내용을 요약하고 그 근거가 된 연구를 연결하며, <strong>문서 페이지</strong>는 논문 한 편씩 다루고, <strong>FAQ</strong>는 교수자와 관리자가 실제로 하는 질문에 답합니다. 어떤 주제의 개요를 원하시면 개념 페이지를 요청하시고, 근거를 원하시면 연구를 요청하십시오.`,
  answeredHeading: '이미 답이 있는 질문',
  answeredIntro: '사람들이 AI에게 먼저 묻는 질문 중 상당수는 이미 이곳에서 연구 자료와 함께 직접 답해 두었습니다:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: '과정 AI 정책은 어떻게 작성하고 학생들에게 어떻게 알려야 할까요?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: '수업에서 AI 부정행위를 어떻게 줄일 수 있을까요?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'AI 탐지 도구를 사용해야 할까요?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'AI 시대에 맞춰 평가는 어떻게 재설계해야 할까요?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: '학생들이 AI에 지나치게 의존하지 않게 하려면 어떻게 해야 할까요?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: '기관 차원의 AI 정책은 어떻게 작성하고 시행할까요?' },
  ],
  answeredOutroHtml: `질문하시기 전에 <a href="/aied/faq/">전체 FAQ 목록</a>을 한 번 살펴보시길 권합니다. 프롬프트도 어시스턴트에게 그 목록을 먼저 확인하라고 지시합니다.`,
  offlineHeading: '지식베이스를 오프라인으로 읽기',
  offlineHtml: `지식베이스를 <a href="/aied/aied.epub">EPUB</a>이나 <a href="/aied/aied.pdf">PDF</a>로 내려받아 전자책 리더, 휴대전화, 태블릿, 컴퓨터에서 읽으실 수도 있습니다. 이 오프라인 판에는 개념 페이지와 FAQ가 담겨 있으며, 수백 편의 문서 요약은 포함되지 않습니다.`,
  toc: [
    { text: '복사할 프롬프트', slug: 'the-prompt', depth: 2 },
    { text: '사용 방법', slug: 'how-to-use-it', depth: 2 },
    { text: '미리 만들어진 어시스턴트', slug: 'ready-made-assistants', depth: 2 },
    { text: '지식베이스에 담긴 내용', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: '이미 답이 있는 질문', slug: 'already-answered', depth: 2 },
    { text: '지식베이스를 오프라인으로 읽기', slug: 'read-offline', depth: 2 },
  ],
};

export default ko;