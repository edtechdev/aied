---
title: "AI를 학습 경험에 어떻게 설계해야 합니까?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-02T08:21:34-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---
*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**학습 목표와 학습 과정에서 시작하십시오 — AI 기능이 아니라.** 지식베이스의 [[pedagogy|교수법과 교수 전략]] 개념은, 동일한 AI가 교수 설계에 따라 비계, [[socratic-method|소크라테스식]] 대화자, 피드백 동반자, [[simulation]], 또는 답 생성기로 기능할 수 있음을 강조합니다. 중요한 것은 구성이 의도된 학습을 산출하는 활동을 보존하는지 여부입니다.

## 강력한 기본 패턴

강력한 기본 패턴은 다음과 같습니다: **학습자 시도 → AI 지원 → 학습자 평가 또는 수정 → 학습자가 이해를 입증.** 더 구체적으로:

- 학습에 기여하는 곳에 [[productive-failure|생산적 실패]]를 보존하십시오.
- AI 지원을 표시하기 전에 초기 예측이나 해법을 요구하십시오.
- 즉각적 완성보다 질문, 힌트, 사례, 반론, 피드백을 선호하십시오.
- 결과가 중요한 주장의 검증을 요구하십시오.
- 설명과 [[learning-by-teaching|되돌려 가르치기]]의 기회를 통합하십시오.
- 역량이 성장함에 따라 지원을 점진적으로 줄이십시오.
- 학습자가 스스로 할 수 있는 것을 보정할 AI 없는 기회를 일부 유지하십시오.

[[reducing-ai-misuse|AI 오용 줄이기]] 종합은 특히 먼저 생각하고/AI는 나중에/되돌아보는 순서와 의도적인 평가 체크포인트를 권장합니다.

## AI 역할을 인지적 참여 수준에 맞추기

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall, Panadero의 주방 기계 비유]]는 설계 질문을 학습자가 [[generative-ai|생성형 AI]]를 사용하는지 *여부*에서 그 사용이 학습자가 되는 바를 어떻게 형성하는지로 재구성합니다. 스마트 주방 기기의 네 가지 용도를 [[icap-framework|ICAP]]와 [[samr-model|SAMR]] 프레임워크를 통해 학습 사례에 대응시키면 설계의 사다리가 됩니다: 수정이나 [[critical-thinking|비판적 참여]] 없이 과제를 전적으로 외주하는 것은 수동적 대체이며 [[cognitive-offloading|기술 상실과 지나친 의존]]을 초래합니다; [[prompt-engineering|프롬프트를 다듬고]] 출력을 교차 검증하는 것은 [[prior-knowledge|사전 지식]]과 [[self-regulated-learning|자기조절]]을 요구합니다(능동/증강); AI를 브레인스토밍, 개요 작성, 독창적 작업의 평가에 사용하는 것은 구성적/수정이며; 공동 구성과 적응형 [[feedback]]을 위한 진정한 대화 동반자로서의 AI는 상호작용적/재정의입니다. 설계 함의는 직접적입니다: 동일한 도구가 한 단에서는 우회이고 다음 단에서는 비계이므로, 무제한 접근을 허용하기보다 의도된 모드를 명시하십시오.

## 설계를 순서대로 구성하고, 도구를 단순히 허용하지 마십시오

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec, Horvat]]는 554개 강좌에 걸친 교수·학습 활동 29,064개의 계획된 순서를 분석하여 가시적인 설계 문법을 발견했습니다: 습득형 활동이 가장 일반적인 진입점이자 가장 큰 단일 유형이며(20% 이상), 학습 유형은 의도된 Bloom 수준을 추종합니다(1수준의 ~50%에서 6수준의 ~20%로 습득이 감소하고, 생산은 5–6수준에서 20% 이상으로 상승), 가장 강한 전이는 평가 → 토론(0.332)입니다. AI 설계에 대한 두 가지 교훈: AI는 순서가 특정 활동 유형을 의도하는 곳에 속하며 끝에 덧붙이는 것이 아닙니다; 그리고 피드백이 [[collaborative-learning|협력 학습]], [[group-work|집단 작업]], [[teacher-role|교사]]의 존재와 밀집해 있었으므로, 동료 및 동시적 구조가 AI 지원이 대체가 아니라 접목해야 할 [[feedback]] 순간을 만들어냅니다.

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli와 동료들의 "자제했다가 증폭하라" 프레임워크]]는 이를 프로그램 수준으로 밀어냅니다: 역량이 형성되는 동안 생성형 도구를 보류하고, 학생이 그것을 지휘하고, 반환된 것을 판단하고, 그것에 책임질 수 있게 된 뒤에 복원하며, 각 분기점에 위조하기 어려운 체크포인트를 둡니다. 기기는 형성 대비 [[cognitive-offloading|오프로딩]] 기준으로 관리됩니다 — 참여한 작업을 지원하는 곳에서는 허용되고 주의를 빨아들이는 곳에서는 배제됩니다. 이것은 오프로딩 결정을 강좌 수준 설계에 앞서는 [[curriculum-design|교과 과정]] 및 [[governance]] 질문으로 바꿉니다.

## 구성적 정합이 먼저다

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes와 동료들의 담론 분석]]은 고등교육 지침 14건을 분석하여, 효율성 중심 조언 — 생성형 AI로 성취 기준, 채점 기준, 강좌 개요를 작성하는 것 — 은 "구성적" 절반을 소홀히 한 채 정렬된 *것처럼 보이는* 정렬을 산출한다고 경고합니다: 성취 기준, 활동, [[assessment]]가 상호의존적인 것이 아니라 개별 항목으로 생성됩니다. 그들의 처방은 금지가 아니라 재순서화입니다: 교육자는 어떤 부분을 위임하기 전에 AI 출력을 지휘하고, 반문하고, 거부할 만큼 구성적 정합을 충분히 이해해야 합니다 — 그럴듯함에 기반한 표면적 수용 습관은 교수자가 학생에게 경고하는 바로 그 평가 실패이기 때문입니다. AI를 사용하는 곳에서는, 그들은 인터넷 학습 기본값이 아니라 지역 정책과 품질 표준을 중심으로 구성된 제도적으로 제한된 [[rag|검색 증강]] 시스템을 주장합니다.

## 더 넓은 원리

[[finkelstein-principled-ai-education-2025|원칙 기반 AI 교육 프레임워크]]의 더 넓은 원리는, 기술이 교육이 의도하는 인간의 역량을 대체가 아닌 증강해야 한다는 것입니다. [[learning-design|교수 설계]], [[active-learning|능동적 학습]], [[scaffolding]]도 참조하십시오.

설계된 상호작용이 학습을 보존하는지를 결정하는 교수법적 기본값은 [[reduce-ai-cheating]] 및 [[redesign-assessment-ai-era]]를, 동일한 원칙이 소프트웨어 자체를 어떻게 제약하는지는 [[designing-educational-ai-software]], 그것이 튜터 아키텍처로 어떻게 번역되는지는 [[developing-ai-tutor]]를 참조하십시오.
