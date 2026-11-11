---
title: "도서관"
created: "2026-11-05T03:45:00-05:00"
type: concept
foundations: [information-and-media-literacy, ai-literacy]
technology: [generative-ai, llm, recommender-systems-and-learning-paths, knowledge-graph]
institutions: [governance, educational-policy-ai]
ethics: [digital-divide, equity-in-ai-education]
discipline: [library and information science]
audience: [librarians, administrators, institutions]
level: [higher ed, adult learning]
page_kind: [synthesis]
confidence: medium
connected_resources: [public-ai-libraries]
updated: "2026-11-11T07:40:00-05:00"
translation_of: "concepts/libraries"
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **도서관** — 학술적·공공적 기록에 대한 접근과 그 접근을 뒷받침하는 운영 체계, 즉 목록과 탐색 계층, 참고 및 연구 서비스, 장서, 그리고 그 위에 놓인 교육 프로그램을 제공하는 기관입니다. [[ai-education|AI 교육]]에서 도서관은 두 번 중요합니다. [[generative-ai|생성형 AI]]가 실제 서비스에 배치되는 현장이라는 점에서, 그리고 자신의 탐색 계층이 아래에서 재구축되는 동안 [[information-and-media-literacy|정보 리터러시]] 교육을 떠맡는 기관이라는 점에서입니다.

## 생각해 볼 질문들

- 참고 데스크는 한때 사실 확인 질문에 답했습니다. [[conversational-ai|챗봇]]이 몇 초 만에 답할 때 그 서비스는 무엇을 위한 것이며, 그것을 운영하던 직원은 대신 무엇을 해야 합니까?
- 체계적 고찰들은 AI 도입이 참고 서비스와 목록 작성에 집중된 반면 자금이 가장 많이 언급된 장애물임을 발견합니다. 결정적 제약은 돈입니까, 직원 역량입니까, 아니면 도서관이 무엇을 위한 곳인지에 대한 결정의 부재입니까?
- 도서관 시스템은 교과목 수준의 도구가 결코 보지 못하는 전체 인구, 즉 대출자, 비대출자, 지역 주민을 봅니다. 그것이 도서관을 공공 AI 접근을 제공할 올바른 장소로 만듭니까, 아니면 감시를 집중시킬 잘못된 장소로 만듭니까?
- [[ai-literacy|AI 리터러시]]와 정보 리터러시는 모두 사서가 가르치고 둘 다 확립된 평가를 갖추지 못했습니다. 도서관은 둘을 하나의 프로그램으로 통합해야 합니까, 아니면 프레임워크를 구분해 두어야 합니까?

## 들어가며

도서관은 교육 체계에서 언제나 정보 접근 사업을 해 온 부분이며, 그래서 AI는 그곳에 새로움이 아니라 공급망의 변화로 도착합니다. 이 페이지에서 두 문헌이 만납니다. 하나는 도서관을 도입자로 연구합니다. 도서관이 AI로 무엇을 하고 있는지, 무엇이 그것을 막는지, 그리고 그 작업이 기술 서비스, 참고, 장서, 대출, 교육, 직원 개발에 어떻게 분포하는지입니다. 다른 하나는 도서관을 기반 시설로 연구합니다. 학생과 대중이 검색 자체를 만나는 장소이며, 따라서 검색에서 종합으로의 전환이 가장 먼저 감지되는 곳입니다.

이 페이지는 사람과 그들의 전문적 역할을 다루는 [[librarians]]와, 그들이 가르치는 구성개념을 다루는 [[information-and-media-literacy]]에서 의도적으로 구분됩니다. 이 페이지는 기관에 관한 것입니다. 그 서비스, 그 시스템, 그 인력 모델, 그리고 그 공적 의무입니다.

## AI는 도서관 운영에 어떻게 들어오는가

2020년에서 2024년 사이에 발표된 연구 29편에 대한 [[meta-analysis-systematic-review|체계적 고찰]]은 AI 도입을 여섯 차원 — 기술 서비스, 참고 및 정보 서비스, 행정 서비스와 대출, 장서 개발, 정보 리터러시와 이용자 교육, [[educational-development|전문성 개발]]과 협업 — 으로 조직하고, 무게 중심이 참고에 있음을 발견합니다. 방향 안내와 즉답형 참고 질문에 답하기 위한 AI가 검토된 연구의 34.48%에서 나타나고, 목록 작성과 채팅으로 전사된 참고 서비스가 각각 27.58%로 그 뒤를 잇습니다([[ayinde-ai-academic-libraries-systematic-review-2026|Ayinde, Ebiefung과 Oladokun, 2026]]). 같은 고찰은 도입 문헌이 대개 완화하는 내용도 기록합니다. 자금이 연구의 48.28%에서 중대한 장애물로 명명되고, 기술 역량 격차와 빈약한 데이터 품질이 58.62%, 일자리 상실에 대한 두려움이 13.79%입니다.

그 분포가 중요한 이유는, 도서관이 이미 거래적이었던 업무 — 방향 안내 질문, 목록 레코드, 채팅 전사 — 를 자동화하면서 판단이 무거운 업무는 인간에게 남겨 두는 모습을 서술하기 때문입니다. 이는 지식베이스의 다른 곳에 있는 교수 증거와 일치합니다. 추천 시스템이 가장 확신하지 못할 때 호출된, 수업에 배치된 사서는 조회 질문이 아니라 주로 출처 평가 질문을 처리했습니다([[ai-assisted-seminar-learning-information-literacy-2026|Huang, 2026]]).

## 검색 계층이 움직인다

도서관의 탐색 시스템은 더 이상 기록으로 가는 유일한 경로가 아닙니다. 미국 대학생 236명 설문에서 검색 엔진은 학술 정보 검색에서 여전히 지배적이었지만, 생성형 AI가 중요한 정보원이 되었고, 젊은 학생과 국제 학생이 그것을 더 많이 사용했고, 많이 쓰는 학생일수록 답변에 더 만족했습니다([[lund-ai-information-seeking-chatbots-libraries-2026|Lund 외, 2026]]). 행동 데이터는 [[self-report-measures|자기보고]]를 복잡하게 만듭니다. 한 중국 대학에서 320만 건의 거래를 포괄하는 9년치 대출 기록은 2023년 1월 생성형 AI 변곡점에서 수준이나 추세의 변화를 보이지 않았습니다. 반면 학생 368명에 대한 병행 설문은 대체적 AI 사용이 인쇄물을 계속 이용하려는 의도 감소와 약하게 연관됨을 발견했습니다([[huang-genai-academic-information-resources-2026|Huang 외, 2026]]). 정직한 해석은 대체가 진술된 선호에서는 실재하지만 행동에서는 고르지 않다는 것이며, 이는 바로 도서관이 측정할 수 있고 교과목은 그럴 수 없는 종류의 격차입니다.

## 교육, 인력, 연구 기반

도서관은 AI 교육을 위한 [[curriculum-design|교육과정]]을 갖기 전에 AI 교육을 떠맡습니다. 연구 32편에 대한 체계적 고찰은 통합이 LibGuides, 튜토리얼, 워크숍, 개정된 모듈을 통해 이루어지고 있으며, 32편 가운데 30편이 2024년이나 2025년에 발표되었고 11편이 미국에서 나왔음을 발견했습니다([[mirza-arif-ai-literacy-information-literacy-review-2026|Mirza와 Arif, 2026]]). 같은 시기 출판물 1,669편에 대한 과학계량학적 지도는 이 분야의 무게 중심이 소수의 도서관 학술지에 있음을 보여 주며, *Journal of Academic Librarianship*이 가장 생산적인 출처이자 학술지 동시인용 네트워크의 중심 노드입니다([[jabeen-lux-ai-information-literacy-scientometric-2026|Jabeen과 Lux, 2026]]). 어느 지도도 실천이 바뀌는 것을 보여 주지 않습니다. 둘 다 문헌이 효과의 증거보다 빠르게 성장함을 보여 줍니다.

직원 역량은 설문 연구에서 되풀이되는 제약입니다. 나이지리아 38개 기관의 학술 사서 412명을 대상으로 정보 리터러시와 AI 교육에서의 [[student-engagement|학생 참여]] 전략을 연구했고, 직원 개발은 도서관이 요구하는 개입으로 여러 고찰에 걸쳐 되풀이됩니다([[dada-librarians-information-literacy-ai-nigeria-2026|Dada, 2026]]). 운영상의 질문은 직원을 훈련할지 여부가 아니라 그 훈련이 도서관이 운영하기로 결정한 서비스와 연결되어 있는지입니다.

## 공공 접근이라는 AI 질문

도서관의 가장 오래된 기능 — 개인이 살 수 없는 접근을 제공하는 일 — 은 새로운 대상을 얻었습니다. [[public-ai-libraries|Public AI Libraries]] 파일럿은 공공 도서관에 공유 AI 워크스테이션을 두고, 이용자마다 별도 계정을 주며, 참여 도서관에 키오스크당 연 1,000달러를 부과합니다. 그 모델이 확산되든 아니든, 그것은 [[equity-in-ai-education|형평성]] 논거를 정확히 명명합니다. 이제 AI 역량을 가로질러 달리는 [[digital-divide|디지털 격차]]에서, 도서관은 사람마다 구독을 파는 대신 공유되고 직원이 상주하는 접근을 공급할 수 있는 기관입니다.

## 이것이 실천에 의미하는 바

- **도구를 사기 전에 도서관이 운영할 서비스를 결정하십시오.** 도입 문헌은 주인이 없는 파일럿으로 가득합니다. 고찰들이 가장 많이 인용한 장애물은 자금이지만, 두 번째는 서비스에 맞춘 직원 역량의 부재입니다.
- **어떤 AI 서비스에도 인간 에스컬레이션 경로를 두십시오.** 증거는 조회와 초안 작성에는 AI를, 출처에 관한 판단에는 인간 직원을 지지합니다. 첫 번째를 확장하려고 두 번째를 지우는 설계는 이용자가 다른 곳에서 얻을 수 없는 부분을 제거합니다.
- **검색의 전환을 설문하지 말고 계측하십시오.** 대출 기록과 탐색 로그는 이미 존재합니다. 그것을 교육 데이터와 짝지은 도서관은 일회성 학생 설문이 보여 줄 수 있는 것보다 AI의 효과를 더 많이 알게 됩니다.
- **AI 리터러시를 정보 리터러시로 내세우지 마십시오.** 둘은 직원과 프레임워크를 공유하지만 평가하는 대상이 다릅니다. 둘을 혼동하면 어느 쪽도 측정하지 못하는 프로그램이 됩니다.

## 연결된 개념

- [[information-and-media-literacy]]
- [[librarians]]
- [[ai-literacy]]
- [[digital-divide]]
- [[governance]]
- [[generative-ai]]
- [[higher-ed]]

## 연결된 문서

- [[ayinde-ai-academic-libraries-systematic-review-2026]] — Adoption of artificial intelligence in academic libraries: A systematic review of current practices, challenges, and research opportunities
- [[mirza-arif-ai-literacy-information-literacy-review-2026]] — Mapping the Integration of AI Literacy Into Information Literacy Instruction in Academic Libraries
- [[jabeen-lux-ai-information-literacy-scientometric-2026]] — How artificial intelligence is reshaping information literacy in academic libraries
- [[lund-ai-information-seeking-chatbots-libraries-2026]] — Artificial intelligence (AI) and information seeking: A comparative exploration of AI chatbots, search engines, and library resources as information sources among university students
- [[huang-genai-academic-information-resources-2026]] — Generative artificial intelligence reshapes university students' sustainable use of academic information resources
- [[dada-librarians-information-literacy-ai-nigeria-2026]] — Academic Librarians' Student Engagement for Promoting Information Literacy and AI Instruction in Nigerian Tertiary Institutions
