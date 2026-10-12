---
title: 사서
created: "2026-09-20T12:40:00-04:00"
updated: "2026-09-20T12:40:00-04:00"
type: concept
foundations: [ai-literacy, critical-thinking, academic-integrity, human-ai-collaboration]
pedagogy: [scaffolding, inquiry-based-learning, collaborative-learning, metacognition]
technology: [generative-ai, llm, knowledge-graph, recommender-systems-and-learning-paths, human-in-the-loop-ai, educational-nlp]
ethics: [trust, trust-calibration, ethics]
institutions: [governance, educational-policy-ai]
audience: [librarians, learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/librarians
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **사서** — 정보 리터러시를 가르치고, 연구 상담을 담당하며, 장서와 검색·발견 시스템을 구축하고, 점점 더 AI 검색 및 추천 도구에 대응하는 인간의 짝으로 자리하는 도서관 및 정보 전문가들입니다. 지식 기반의 연구에서 그들은 모형이 해결할 수 없는 신빙성 문제 — 특허, 기술 표준, 또는 산업 보고서가 의존할 만한 가치가 있는지 — 를 다루는 사람들로, 그리고 강의와 정책 공동 설계의 동반자로 나타납니다. 따라서 그들의 [[ai-education|교육에서의 AI]] 속에서의 자리는 이중적입니다. 출처 평가와 검색 전략을 가르치는 교육자로서, 그리고 AI 검색을 중심으로 구축된 시스템 안의 [[human-in-the-loop-ai|인간의 층]]으로서입니다.

## 생각해 볼 질문들

- AI는 이제 사서가 예전에 응답하던 사실적 참고 질문을 몇 초 만에 답할 수 있습니다. 그 작업의 어떤 부분이 본래 *그 답*이었으며, 어떤 부분이 어떤 출처가 믿을 만한지에 대한 판단이었습니까?
- 내장 사서(embedded-librarian) 연구에서 출처 평가 질문이 AI가 가장 자신 없는 바로 그 사례들의 상담을 지배했습니다(38.5%). 이것은 고쳐야 할 설계 실패입니까, 아니면 신빙성 판단이 자동화에 저항한다는 증거입니까?
- [[genai-academic-search-workshop|CHIIR 2026 워크숍]]은 하나의 신뢰 격차를 보고했습니다. 학생들은 GenAI를 [[trust-calibration|과잉 신뢰]]하는 반면 교수진은 그것을 불신합니다. 그런 격차를 좁히는 사람은 누구입니까 — 사서, 교수자, 아니면 자신의 출처와 자신감을 보여 주는 인터페이스입니까?
- [[ithaka-sr-ai-skills-college-graduates-2026|Ithaka S+R]]는 기관들이 AI 기술이 무엇인지에 대한 합의도 그것을 평가할 틀도 모두 부족하다는 것을 발견했습니다. 정보 리터러시 수업이 그 작업의 자연스러운 안식처입니까 — 그리고 그렇게 말하는 것이 도서관에 인력이 따라가지 못하는 부담을 지우라는 것입니까?

## 들어가며

사서는 학습자의 질문과 학술 기록 사이에 자리하는 전문가들입니다. 참고 및 교수연락(reference and liaison) 사서, 주제 전문 사서, 정보 리터러시 수업을 제공하는 교수 사서, 그리고 장서와 저장소를 관리하는 직원이 그것입니다. [[ai-education|교육에서의 AI]]에서 그들은 [[teacher-role|교사]]나 [[administrator|관리자]]보다 훨씬 덜 자주 이름 불립니다. 그럼에도 이 말뭉치는 그들에게 구체적이고 시험 가능한 역할을 부여합니다. 그들은 [[generative-ai]]가 만들어 내는 신빙성 문제에 대한 인간의 답이며, 단순히 출처를 공급하는 것이 아니라 [[evaluative-judgment]]과 검색 전략을 가르치는 교수자이며, 그리고 — 지식 기반에서 가장 강한 사례에서 — 서비스 옆에 있는 사람이 아니라 AI 시스템의 설계된 구성 요소입니다.

이 페이지는 그 역할을 이웃들과 구별하여 다룹니다. [[educational-technology-developers]]는 검색 및 추천 시스템을 만듭니다. 사서는 그 시스템들이 무엇을 결론 내어서는 안 되는지를 결정합니다. [[academic-integrity]]는 AI 사용을 저작권과 공개의 문제로 규정합니다. 사서의 규정 — 귀속, 출처(provenance), 접근 — 은 인접하지만 더 구체적입니다.

## 보조뿐 아니라 수업으로서의 정보 리터러시

이 역할에 관한 지식 기반에서 가장 상세한 증거는 [[ai-assisted-seminar-learning-information-literacy-2026|Huang의 내장 사서 세미나 플랫폼]]에서 나옵니다. 이 플랫폼은 세 프로그램의 학생 60명을 대상으로 8주에 걸친 준실험(quasi-experiment)에서 공학 연구팀을 위해 구축되었습니다(30명은 통합 플랫폼, 30명은 전통적 도서관 수업). 통합 집단은 ACRL 기반 정보 리터러시 검사의 5점 척도에서 0.78점을 얻은 반면 대조군은 0.25를 얻었으며, 집단 내 이득은 검색 기술(+0.87)과 출처 평가(+0.83)에서 가장 컸고, 그다음이 정보 종합(+0.73)과 윤리적 사용 인식(+0.70)이었습니다. 주목할 점은, 수행 기반 문항만으로도 여전히 큰 효과가 나타났으므로 이 이득은 순전히 자신감이 아니라는 것입니다. 가르쳐진 내용은 도서관 업무에 대응합니다. 검색 전략 수립, 출처 평가, 인용, 저장소 탐색 — 뒤이어 상담 로그를 지배한 바로 그 네 범주입니다.

더 넓은 말뭉치는 하나의 인력과 전달 문제를 더합니다. [[genai-academic-search-workshop|CHIIR 2026 워크숍 보고서]]는 학생 2,076명과 사서 101명에 대한 설문조사에 기반한 한 사서의 15주 디지털 리터러시 [[curriculum-design|교육 과정]]을 기술하며, 발표자들의 판단, 즉 단회성 워크숍은 학생들에게 오해된 기초를 남긴다는 것을 기록합니다. 같은 보고서는 한 사서의 수업 도달 범위를 1학년 학생 약 1,700명으로 셉니다.

## AI가 가장 약했던 곳에서 사서가 부담을 짊어지다

세미나 플랫폼은 노동을 의도적으로 나누었습니다. 알고리즘은 규모 있는 검색을, 인간은 불확실성 아래에서의 평가를 처리했습니다. 그리고 로그는 그 분할이 작동하고 있음을 보여 줍니다. 상담 312건에 걸쳐(참가자당 10.4건), 출처 평가와 질(quality)이 38.5%, 검색 전략 수립이 29.2%, 인용 관리가 18.6%, 저장소 탐색이 13.7%였으며, 73.4%가 6시간 안에 응답되었습니다. 저자들은 이것을 모형 성능과 직접 연결합니다. [[recommender-systems-and-learning-paths|추천 엔진]]은 정밀도 0.68과 재현율 0.61에 이르렀는데, 불리언 키워드 기준선(0.52와 0.48)에서 향상된 것이지만 특허와 표준에 대한 신빙성 판단에는 여전히 불충분했으며, 자연어 질의 처리는 공학 특정 질의의 72.8%를 올바르게 응답했습니다. 만족도는 같은 순서를 따랐습니다. 사서 지원이 5.0점 중 4.3으로 가장 높았고, 그다음이 추천(4.1), 질의(3.9), 세미나(3.8), 학습 경로(3.6), [[knowledge-graph|지식 그래프]](3.4)였습니다. 그리고 인터뷰는 학생 30명 중 21명이 사서의 존재에 대한 신뢰를 인용한 것을 기록했습니다. 사용은 이질적이었습니다. 30명 중 11명은 AI에, 8명은 사서에 의존했고, 11명은 둘 다 사용했습니다.

긴장은 양방향으로 작동합니다. AI가 가장 못 처리한 사례는 신빙성 질문이었고, 플랫폼의 저자들 자신이 신빙성 결정 지점에 인간 전문가를 두는 것이 실천적 교훈이라고 결론 내립니다. 그러나 이 연구는 단일 기관이며 무작위화되지 않았고, 세 구성 요소는 결코 분리되지 않았으며, 저자들은 결과를 "단지 예비적인 것"이라고 부르면서 사서 지원이 철회된 후의 지속성은 결코 시험되지 않았다고 지적합니다. 인간의 층이 이득의 원인이었는지, 아니면 0.68 정밀도 추천기를 둘러싼 안전망이었는지는 열린 채로 남아 있습니다.

## 공동 설계, 파트너십, 그리고 검증 비용을 누가 부담하는가

사서는 또한 서비스 제공자가 아니라 공동 설계자로 나타납니다. [[maybee-disruptive-partnerships-sap-2025|Maybee, LeGrand, Fundator]]는 퍼듀대학교(Purdue)의 알고리즘 리터러시를 위한 파트너십(Partners for Algorithmic Literacy)을 기록합니다. 이는 학술 사서들이 촉진한 6주 학생-교수진 학습 공동체로, 학부생과 교수진이 AI 강의 [[educational-policy-ai|정책]]과 AI 통합 [[group-work|그룹 프로젝트]]를 공동 생산합니다. 저자들은 이것을 학생의 [[ai-misuse-learning-harm|AI 오용]]에 관한 결핍 기반 서사에 대한 대안으로 규정하며, SPIRaL 프로그램의 학생 성찰은 정보 리터러시가 다시 배워지고 있음을 보여 줍니다. 참여자들은 처음에 그것을 출처 평가와 동일시하다가, [[agency]]과 연결된 층위를 이룬 학술 실천으로 읽는 쪽으로 이동했습니다. 즉 출처를 점검하는 것에서 지식 생산을 판단하는 것으로 가는 그 전환이 바로 사서가 자리하여 만들어 낼 수 있는 것입니다.

두 개의 추가 노선이 그 역할의 한계를 설정합니다. [[pearls-epistemic-verification-2026|PEARLS 틀]]은 여섯 가지 검증 차원 가운데 접근(Access), 정당성(Legitimacy), 출처(Source)를 이름 짓고, 검증이 데이터베이스 접근, 학문 영역의 언어, 때로는 유료 도구를 소모한다고 지적합니다. 따라서 자원이 적은 학습자들은 책임 있는 사용을 증명하는 데 더 큰 부담을 지며, 사서들은 공동 설계가 요구하는 당사자들 가운데로 이름 불립니다. [[aarc-ai-research-competency-2026|AARC 틀]]은 교수 목표를 명시적으로 만듭니다. 검증하고, 인용하고, 성찰하는 것을 되풀이되는 헌신으로 삼으며, 이를 산출물이 아니라 연구 과정을 통해 평가한다. 날조와 편향의 탐지를 포함하여. [[hingle-collaborative-ai-literacy-2025|Hingle과 Johri]]의 검토는 도서관이 이미 쓰는 같은 설계들이 전이된다는 것을 보여 줍니다. 그룹 작업이 정보 리터러시에 주는 이득은 [[ai-literacy]] 학습으로 일반화되며, [[agentic-ai|AI 에이전트]]를 동반자로 삼은 경우도 포함됩니다.

## 교육에서의 AI에 대한 시사점

- **신빙성 결정 지점에 인간을 남겨 두어라.** 0.68 정도의 정밀도는 노출된 자료의 대략 3분의 1을 매칭되지 않은 채로 남겼고, 출처 평가는 가장 많이 요청된 상담 유형이었습니다. 이것은 어떤 AI 검색 또는 추천 층에도 적용되는 설계 신호입니다.
- **정보 리터러시를 수업으로 대하라.** 수행 기반 문항에서 견뎌 낸 이득은 검색 전략과 출처 평가였는데, 이것은 교수 사서들이 이미 가르치는 것이며 AI 출력물의 귀속과 검증이 요구하는 것이기도 합니다([[academic-integrity]], [[critical-thinking]]).
- **이질적인 경로를 위해 설계하라.** AI, 사서, 또는 둘 다를 선호하는 집단이 대략 동등할 때, 주제와 업무량에 따라 상담을 경로 설정하면 312건을 참가자당 10.4건으로 흡수했습니다. 단일의 의무화된 경로는 일부 학습자에게 서비스를 덜 줄 것입니다.
- **자신감과 출처를 보이게 하라.** 워크숍의 학습으로서의 검색(search-as-learning) 논의는 어떤 인지 과정이 부담 전가되어서는 안 되는지를 묻고 결정 지점을 보존하는 인터페이스를 요구합니다. 이것은 사서가 자신의 일상적인 업무 기준, 즉 출처 가시성으로부터 명시할 수 있는 [[scaffolding|비계(스캐폴드)]]입니다.
- **모형뿐 아니라 인간의 층에 예산을 배정하라.** 상담들은 직원들이 의도적으로 경로 설정되었기 때문에 대규모로도 몇 시간 안에 응답되었습니다. 학습자들이 신빙성 판단을 혼자 처리할 것이라고 가정하는 것은 그 비용을 그것을 치를 여력이 가장 적은 사람들에게 전가하는 것입니다.

## 연결된 개념

- [[ai-literacy]]
- [[evaluative-judgment]]
- [[critical-thinking]]
- [[academic-integrity]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[recommender-systems-and-learning-paths]]
- [[knowledge-graph]]
- [[scaffolding]]
- [[inquiry-based-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[learners]]

## 연결된 문서

- [[ai-assisted-seminar-learning-information-literacy-2026]] — 내장 사서 세미나 플랫폼, 출처 평가가 이끈 상담 312건
- [[genai-academic-search-workshop]] — GenAI와 학술 검색에 관한 CHIIR 2026 워크숍, 사서 신뢰 격차
- [[maybee-disruptive-partnerships-sap-2025]] — 학생을 동반자로 삼아 AI 리터러시를 공동 설계하는 학술 사서들
- [[aarc-ai-research-competency-2026]] — 가르칠 수 있는 연구 헌신으로서의 검증, 인용, 성찰
- [[pearls-epistemic-verification-2026]] — 여섯 차원 검증 프로토콜, 관문으로서의 접근과 정당성
- [[hingle-collaborative-ai-literacy-2025]] — AI 리터러시를 위한 협동 학습, 정보 리터러시 이득의 전이
- [[ithaka-sr-ai-skills-college-graduates-2026]] — 교수자는 귀속과 책임 있는 사용을 가장 높이 평가하지만 26가지 기술 중 몇 가지만 가르친다
- [[bird-multimodal-educational-literature-2026]] — 영어 교사와 사서 같은 비기술 사용자를 위해 만들어진 텍스트 복잡도 도구
- [[cognitive-offloading-llm-synthesis-writing]] — AI가 출처를 종합해 줄 때 학습자들이 무엇을 부담 전가하는가
- [[citation-errors-hallucinations-computing-education-2026]] — 검증의 문제로서의 날조되고 잘못된 인용
