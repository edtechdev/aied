---
title: 이론과 틀
created: "2026-09-19T05:40:00-04:00"
updated: "2026-09-30T12:53:22-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
translation_of: concepts/theories-and-frameworks
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **이론과 틀** — 이 지식베이스가 실제로 사용하는 설명적·조직적 구조의 실무 목록입니다. 이론은 학습이 왜 일어나는지를 설명하고([[learning-theories]], [[self-determination-theory]], [[sociocultural-learning]], [[activity-theory-aied|활동 이론]]), 틀은 설계·교수·도입의 결정을 조직하며([[tpack]], [[samr-model|SAMR]], [[technology-acceptance-model|기술 수용 모형]], [[icap-framework|ICAP]], [[universal-design-for-learning|보편적 학습 설계]]), 모형은 학습에 관한 주장을 검증 가능하고 계산 가능하게 만듭니다([[item-response-theory|문항 반응 이론]], [[assessment-validity]], [[knowledge-tracing]]). 이 페이지는 어떤 연구가 어떤 렌즈 위에 놓여 있는지를 찾거나, 자신의 작업을 위한 렌즈를 고르는 데 쓰십시오.

## 생각해 볼 질문들

- 이론은 무언가가 변할 때 무엇이 일어날지를 예측하고, 틀은 무엇에 주의를 기울여야 하는지를 알려 줍니다. 한 연구가 틀의 이름 아래에서 이득을 보고하면서도 실패할 수 있는 예측을 하나도 제시하지 않는다면, 실제로 무엇이 학습되었습니까?
- [[tpack|TPACK]], [[samr-model|SAMR]], [[universal-design-for-learning|UDL]], [[technology-acceptance-model|수용 모형]], [[icap-framework|ICAP]]는 모두 [[llm|대규모 언어 모형]]에 앞섭니다. 도구가 스스로 글을 쓰고, 설명하고, 적응할 수 있게 되었을 때 이것들의 어떤 부분이 여전히 성립하며, 어떻게 구별하겠습니까?
- 아래 목록화된 이론들 가운데 상당수는 지난 몇 년 사이 AI를 위해 만들어졌습니다. 그것들 가운데 하나가 틀리려면 무엇이 필요하며, 그것을 보이려 한 사람이 있습니까?
- 도입은 흔히 단계를 거치는 움직임으로 보고됩니다. 한 동료가 올해 자신의 강의가 "대체에서 재정의로" 옮겨갔다고 보고한다면, 그것을 믿기 전에 어떤 독립적 증거를 요구하겠습니까?
- 이 분야의 많은 부분은 이론을 빌려 쓰는 것이지 검정하는 것이 아닙니다. 여러분이 의존하는 한 발견을 골라 보십시오. 그것을 [[self-determination-theory|어떤 이론]]에 대한 시험으로 다시 틀지을 수 있으며, 그러려면 어떤 측정이 필요합니까?

## 들어가며

모든 AI 튜터, 피드백 시스템, 대시보드는 사람이 어떻게 학습하는지에 관한 가정을 내포하며, 설계자가 그것을 밝히든 그렇지 않든 마찬가지입니다. 이 페이지는 그 가정들이 비롯하는 이론·틀·모형을 수집하며, 대략 현재의 연구 문헌이 그것들에 얼마나 기대는지에 따라 배열하고, 각각이 무엇에 좋은지 간략히 말합니다. 이 세 낱말의 구별은 실재하지만 사소하며, 주제로 삼기보다는 마지막 부분에 요약됩니다. 실천적으로 중요한 것은 어떤 주장이 어떤 렌즈 위에 놓여 있는지, 그리고 그 렌즈가 그 주장을 떠받칠 수 있는지입니다.

## 문헌이 적용하는 학습 이론

이것들은 메커니즘을 설명합니다. 즉 일을 하는 부분들의 이름을 짓고, 그 부분들이 변할 때 무엇이 뒤따르는지를 예측합니다. AI 문헌에서 이것들은 대부분 심리학과 [[learning-sciences|학습과학]]에서 빌려 와서, 새로운 도구를 두르는 해석적 틀로 쓰입니다.

- **[[learning-theories|학습 이론(총괄)]]** — 전체 계열로, [[behaviorism|행동주의]]와 [[constructivist|구성주의]]라는 고전적 두 극과 AI 구현에서 되풀이되는 "이름으로는 구성주의, 실천으로는 행동주의" 간극을 포함합니다. 연결주의와 인지 부하 이론도 여기서 다룹니다.
- **[[constructivist|구성주의]]** — 능동적 지식 구성을 학습으로 봅니다. 이것은 프로젝트 기반 작업, 대화 기반 AI 튜터링, 그리고 연습-피드백 시스템이 자신이 표명한 교수법을 위반한다는 비판을 떠받칩니다.
- **[[sociocultural-learning|사회문화 이론]]** — 학습을 도구와 사회적 상호작용에 의해 매개되는 것으로 보며, 이것이 AI가 단순한 보조물이 아니라 매개의 산출물로 이론화되는 이유입니다.
- **[[activity-theory-aied|활동 이론]]** — 모순을 포함한 활동 시스템 전체를 분석 단위로 삼습니다. 교사 대상 AI 연구에서 흔하며, 거기서 흥미로운 발견은 대개 도구·규칙·공동체 사이의 긴장입니다.
- **[[situated-learning|상황 학습]]**과 **[[embodied-learning|구현화 학습]]** — 학습을 맥락과 몸에 묶인 것으로 보며, AI를 순전히 언어적 매체로 대하는 것에 대한 균형추입니다.
- **[[distributed-cognition|분산 인지]]** — 사람과 산출물에 걸쳐 퍼진 사유로, AI 지원을 그것의 대체물이 아니라 인지적 노동의 재분배로 틀짓습니다.
- **[[community-of-inquiry|탐구 공동체]]** — 온라인 경험이 작동하게 만드는 사회적·인지적·교수적 존재이며, 경험의 이론이자 동시에 설계 틀입니다.
- **[[self-determination-theory|자기결정 이론]]** — 동기의 선행 조건으로서의 자율성, 유능감, 관계성. AI 사용이 학습을 높이지 않으면서 참여를 높일 때 흔히 제시되는 설명입니다.
- **[[cognitive-psychology|인지주의]]** — 정보처리, 작업 기억, 그리고 학습의 느낌과 실제 학습 사이의 괴리.

## 학습자와 학습 과정의 모형

- **[[self-regulated-learning|자기조절 학습]]** — 자신의 학습을 계획하고, 점검하고, 평가하기. AI 지원이 문제가 되는 국면에 도달하는지 아니면 실행에만 머무는지를 묻는 데 쓰이는 작업마적 구성 개념입니다.
- **[[metacognition|메타인지]]** — 자신의 사유에 관한 사유이며, AI가 학생을 대신해 사유하고 있다고 비난받을 때 가장 자주 이름 불리는 구성 개념입니다.
- **[[motivation|동기]]** — 학습자가 왜 참여하는가이며, AI 연구에서 참여를 학습과 갈라놓는 구성 개념입니다.
- **[[self-efficacy|자기효능감]]** — 자신의 능력에 대한 믿음으로, 유능감과 구별되며 AI 사용과 결과 사이에서 흔한 매개 변수입니다.
- **[[agency|자율성]]** — 누가 그 일을 지휘하는가이며, 이 분야의 통제 대 자율 긴장 뒤에 놓인 구성 개념이자 최신 이론에서 위임된 자율성 메커니즘 뒤에 놓인 것입니다.
- **[[desirable-difficulties|바람직한 어려움]]**, **[[retrieval-spacing-interleaving|인출, 간격 배치, 교차 연습]]**, and **[[refutation-text|반박 텍스트]]** — 마찰을 교수법적으로 가치 있게 만드는 발견들로, AI가 얼마나 많은 일을 해야 하는지에 관한 결정에 적용됩니다.
- **[[transfer-of-learning|학습의 전이]]** — 지원이 철회된 뒤에도 능력이 지속되는지이며, 최근 이론이 그것을 여러 결과 가운데 하나가 아니라 학습을 지원과 갈라놓는 기준으로 다룹니다.

## 교수, 통합, 도입의 틀

- **[[tpack|TPACK]]** — 기술, 교수법, 내용을 혼합하는 교사 지식이며, 교사 대상 AI 연구의 기본 틀입니다.
- **[[technology-acceptance-model|수용 모형]]** — 지각된 유용성과 사용 용이성의 함수로서의 의도. 이 분야가 행동이 아니라 의도에 의존하는 것이 오래된 비판이 될 만큼 널리 쓰입니다.
- **[[icap-framework|ICAP]]** — 참여를 수동적·능동적·구성적·상호작용적으로 위계화하며, 한 AI 상호작용이 실제로 어떤 방식을 제공하는지를 묻는 데 유용합니다.
- **[[samr-model|SAMR]]** — 대체에서 재정의에 이르는 것. 성숙 서사로서는 인기 있지만, 측정 기구로서는 약합니다.
- **[[universal-design-for-learning|보편적 학습 설계]]**, **[[inclusive-learning|포용적 학습]]**, and **[[accessibility|접근성]]** — 누구에게 서비스가 닿는지를 위한 설계 틀이며, 장애와 형평성 작업에서 가장 자주 불러 쓰이는 것들입니다.
- **[[learning-design|학습 설계]]**, **[[curriculum-design|교육과정 설계]]**, **[[design-thinking|디자인 사고]]** — 어떤 도구를 고르기에 앞서 과제, 순서, 프로그램이 어떻게 구조화되는가입니다.
- **[[change-management|변화 관리]]** — 한 시스템이 전혀 채택되는가이며, 이것은 대개 교수법적 질문이라기보다 제도적 질문입니다.

## 측정과 계산 모형

- **[[item-response-theory|문항 반응 이론]]** — 문항과 능력 추정이며, 한 시험의 숫자를 해석 가능하게 만드는 모형입니다.
- **[[educational-measurement|교육 측정]]** — 기구의 지형으로, AI 리터러시를 위해 특별히 만들어진 측정 도구들을 포함합니다.
- **[[assessment-validity|타당성]]** — 한 기구가 자신이 주장하는 구성 개념을 측정하는지의 여부이며, 보고된 결과가 그것에 붙은 이론적 주장을 떠받치는지를 결정합니다.
- **[[self-report-measures|자기보고 측정]]** — 이 문헌에서 지배적이면서도 가장 연약한 증거 원천이며, 위의 여러 구성 개념은 자기보고와 수행 사이에서 크게 달라지는 것으로 알려져 있습니다.
- **[[knowledge-tracing|지식 추적]]**과 **[[student-modeling|학생 모형화]]** — 상호작용 자료로부터 시간에 따른 학습자의 상태를 추정하기.
- **[[cognitive-diagnosis|인지 진단]]** — 수행을 특정한 기술 구성 요소에 귀속시키며, 진단적 교수의 모형화 대응물입니다.
- **[[benchmark|벤치마크]]**, **[[ai-ed-evaluation|AI 교육 평가]]**, **[[psychometrically-aware-ai|AI 설계에서의 심리측정학적 인식]]** — 시스템과 개입이 어떻게 채점되고, 비교되고, 감사되는가입니다.
- **[[design-based-research|설계 기반 연구]]** — 이론을 사전에 검정하기보다 설계된 개입으로부터 이론을 만들어 내는 방법입니다.

## AI 시대를 위해 만들어진 이론들

지식베이스의 네 가지 제안은 이론을 빌리지 않고 세웁니다. 이것들은 각각이 단 하나의 논증이므로 개념 노드가 아니라 논문 페이지입니다.

- **[[generativism-learning-theory|생성주의]]** — 고전적 네 이론이 생성형 AI의 확산에 따라 상당한 개념적 한계를 보인다고 주장하는 새로운 학습 이론.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|인식론적 공동 자율성]]** — 학습자와 AI 시스템이 어떻게 공동으로 지식과 이해를 생산하는지에 관한 모형.
- **[[absent-cognitive-baseline-2026|결여된 인지 기저선]]** — AI가 수행을 부풀릴 때 AI 토착 학생들이 자신의 학습을 과대평가하는 이유를 이론화합니다.
- **[[yan-agentivism-learning-theory-ai-2026|에이전티비즘]]** — 네 메커니즘(위임된 자율성, 인식론적 점검과 검증, 재구성적 내면화, 축소된 지원하에서의 전이)에 이름을 붙이고 여섯 검증 가능 명제를 제시하는 중범위 이론.

## 세 낱말을 구별하기

이 낱말들은 문헌에서 느슨하게 쓰이며, 그 차이는 한 페이지 전체가 아니라 한 문단의 가치가 있습니다.

- **이론은 한 메커니즘을 설명하고** 그것의 부분들이 변할 때 무엇이 일어날지를 예측합니다. 그것은 실패할 수 있으며, 이것이 이론을 검정하는 연구가 효과크기를 보고할 수 있는 이유입니다.
- **틀은 조직하거나 처방합니다.** 그것은 주의를 기울일 구성 요소들의 이름을 짓지만, 대개 크기를 예측하지는 않으며, 반증될 수 없습니다.
- **모형은 형식적 표현이며**, 대개 측정의 또는 학습자 상태의 것입니다. 그것은 적합되고 비교되고 틀이 할 수 없는 방식으로 틀렸음이 보일 수 있습니다.
- **낱말들은 겹칩니다.** [[community-of-inquiry|탐구 공동체]]는 이론이자 동시에 설계 틀이며, [[activity-theory-aied|활동 이론]]은 설명적이면서 분석적입니다. 그 낱말을 한 원천이 무엇을 주장하는지에 대한 실마리로, 서류 분류 범주로 다루십시오.

## 관련 층위

두 이웃 페이지는 의도적으로 다른 무언가에 관한 것입니다. [[philosophy-of-ai-in-education|교육에서의 AI의 철학]]은 규범적·개념적 질문, 즉 교육이 *무엇을 위한* 것인지, 기계가 가르칠 수 있는지를 묻으며, 효과크기를 예측하지 않습니다. 한 연구는 철학적으로 순진하면서도 이론적으로 건전할 수 있고, 그 반대도 가능합니다. [[theory-development-aied|이론 개발]]은 이론을 세우고, 빌리고, 개정하는 메타 활동으로, AIED 작업의 상당수가 기존 이론을 검정하기보다 적용한다는 오래된 비판을 포함합니다. 이 페이지는 목록이고, 이론 개발은 그 목록을 생산하고 개정하는 일에 관한 것입니다.

## 질문이 실천적일 때 렌즈를 고르기

- **강사**들은 문제에서 출발해 거꾸로 작업할 수 있습니다. 학습자가 참여하지 않는다면, [[icap-framework|ICAP]]와 [[self-determination-theory|SDT]]는 다른 원인에 이름을 붙이고 다른 해결책을 제시합니다. 질문이 도구를 전혀 도입할 것인지라면, [[technology-acceptance-model|수용 모형]]과 [[samr-model|SAMR]]은 그것에 관해 다른 것을 묻습니다.
- **학습 설계자**들은 설계 틀 — [[universal-design-for-learning|UDL]], [[learning-design]], [[scaffolding]] — 을 스캐폴딩이 제거될 때 무엇이 일어날지를 예측하는 이론과 짝지어 얻는 것이 가장 많습니다.
- **연구자**들은 한 연구가 어떤 노드를 주장하는지, 그리고 그 설계가 실제로 그것을 검정할 수 있는지를 밝혀야 하며, 측정 모형([[item-response-theory|IRT]], [[assessment-validity]], [[self-report-measures]])이 보고된 결과가 그 주장을 떠받치는지를 결정합니다.
- **행정가**들은 이 틀들을 도입과 변화의 질문으로 만나며, 거기서 단계 모형은 흔히 기구가 아니라 성숙 서사로 쓰입니다.

## 틀이 할 수 없는 것

틀은 증거가 아닙니다. 그것들은 대개 LLM 이전의 맥락에서 빌려 와서 적용하는 사람에 따라 현지화되고, 브랜딩으로 기능할 수 있으며, 단계 모형은 학습이 아니라 단계 사이의 이동을 보고하는 체크박스 채택을 부추깁니다. 틀에 기대는 주장은 [[limitations-in-aied-research|이 분야의 관통하는 한계]], 결과를 측정한 것의 [[assessment-validity|타당성]], 그리고 [[self-report-measures|자기보고]]의 알려진 한계와 나란히 읽혀야 합니다.


메커니즘-이론 정렬은 그럼에도 결정적일 수 있습니다. 즉 AI 지원 게임 기반 학습 연구 55편에 대한 주제적 종합은 효과가 알고리즘의 정교함이 아니라 AI 메커니즘이 그것이 섬기기로 된 교수법을 실행했는지에 달려 있음을 발견했습니다([[ai-game-based-learning-systematic-review-2026|Kaşarcı and Yurt (2026)]]).

## 연결된 개념

- [[theory-development-aied]] — 이 분야에서 이론을 세우고 개정하기
- [[philosophy-of-ai-in-education]] — 규범적·개념적 층위
- [[learning-theories]] — 학습 이론을 위한 총괄
- [[learning-sciences]] — 대부분의 이론이 빌려 오는 이웃 분야
- [[limitations-in-aied-research]] — 증거 기반이 떠받칠 수 있는 것과 없는 것
- [[tpack]] — 교사 지식 틀
- [[technology-acceptance-model]] — 도입 틀
- [[item-response-theory]] — 한 측정 모형
- [[universal-design-for-learning]] — 한 설계 틀
- [[research-methods-aied]] — 이론이 어떻게 검정되는가

## 연결된 문서
- [[ai-game-based-learning-systematic-review-2026]] — 알고리즘의 정교함이 아니라 메커니즘-이론 정렬이 AI 게임 기반 학습 연구 55편에서 효과를 이끌었다
- [[rismanchian-ai-education-four-decades-aixed-2026]] — AI×Ed 틀을 통해 본 AIED의 사십 년
- [[educating-minds-generative-ai-2026]] — 생성형 AI와 학습의 이론 풍부한 종합
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — 교사 전문성 개발에 적용된 활동 이론
- [[activity-theory-teachers-adoption-ai-sem-2026]] — 활동 이론과 교사의 도입
- [[generativism-learning-theory]] — 생성형 AI 시대를 위해 제안된 학습 이론
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — 인식론적 공동 자율성의 이론을 향하여
- [[absent-cognitive-baseline-2026]] — AI 토착 학생들의 자기평가에 있는 구조적 간극 이론화
- [[yan-agentivism-learning-theory-ai-2026]] — 인간-AI 상호작용을 위한 중범위 학습 이론
- [[ai-literacy-instrument-development-systematic-review-2026]] — 젊은 구성 개념에 걸친 기구 개발
- [[mishra-control-vs-agency-history-2025]] — 이 분야의 기초적 통제 대 자율 긴장
