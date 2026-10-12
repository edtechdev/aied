---
title: 인지 심리학
created: "2026-08-27T10:52:12-04:00"
updated: "2026-09-26T01:51:49-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
translation_of: concepts/cognitive-psychology
source_updated: "2026-09-26T01:51:49-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---
*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **인지 심리학/인지주의** — 학습을 관찰 가능한 행동만이 아니라 내면의 정신 과정 — 주의, 지각, 기억, 추론, 메타인지 — 을 통해 설명하는 이론의 계열입니다. [[ai-education|AI in education]]에서 인지주의적 가정은 이 분야의 가장 특징적인 기여들을 떠받칩니다. 학습자의 지식을 모형화하는 [[intelligent-tutoring]] 체계, 학습자가 아는 것을 추적하는 [[knowledge-tracing]]과 [[cognitive-diagnosis]], 오류 진단에 뿌리를 둔 [[feedback]] 설계, 그리고 [[student-modeling|learner modeling and adaptive instruction]] 계열 전체가 그것입니다. 인지주의는 [[behaviorism]](학습을 행동의 변화로 봄)와 [[constructivist|constructivism]](학습을 능동적인 의미 구축으로 봄) 사이의 중간 지대이며, 초기 AIED를 움직인 마음의 컴퓨터 은유와 가장 밀접하게 묶인 이론적 렌즈입니다.

## 생각해 볼 질문들

- '학습'을 생각할 때, 여러분은 누군가가 하는 것의 변화를 떠올립니까, 아니면 그가 아는 것과 인출할 수 있는 것의 변화를 떠올립니까? 그 구분이 AI 조력 도구가 실제로 작동하는지를 판단하는 방식을 어떻게 바꿀 수 있겠습니까?
- AI 조력은 '컴퓨터 은유' 위에 세워집니다. 기억의 한계를 지닌 정보 처리 체계로서 마음을 다루는 것입니다. 그 은유가 강력하다고 느껴지는 곳은 어디이며, 인간이 학습하는 방식의 중요한 무언가를 놓칠 수 있는 곳은 어디입니까?
- 어떤 AI 도구가 과제를 노력 없게 만듭니다. 다음 단계를 설명하고, 마찰을 줄이며, 학습자는 그것을 쓰는 동안 훌륭하게 수행합니다. 그것이 성공적인 [[teacher-role|teaching]]로 쳐 줍니까? 학습자가 이제 도구 없이 그것을 할 수 있는지를 어떻게 알 수 있겠습니까?
- 인지 부하 이론은 내재 부하, 외재 부하, 본래적 부하를 구분합니다. AI 조력을 설계한다면 어떤 유형의 부하를 의도적으로 줄이려 하겠으며, 어떤 부하를 제거하지 않도록 조심하겠습니까?
- 학습자가 기억과 추론을 AI에 외주화할 수 있다는 것을 안다면, 그것이 현명한 전략인 때는 언제이며 학습을 조용히 막는 지름길인 때는 언제입니까? 무엇이 그 차이를 결정합니까?
- 인지주의는 지식이 구성 요소로 쪼개져 시간에 따라 추적될 수 있다고 가정합니다. 학습자의 이해를 추적 가능한 지식 구성 요소들의 집합으로 환원할 때 무엇이 손실될 수 있겠습니까?

## 들어가며

인지 심리학은 학습을 내면의 정신적 표상 — 기억에 담긴 개념, 도식, 절차 — 의 변화로 다루는 학습 이론 전통이며, 관찰 가능한 행동의 변화로 다루지 않습니다. 그것의 정보 처리 어휘(주의, 부호화, 인출, 제한된 작업 기억)는 학습 곤란의 진단 언어와 [[intelligent-tutoring]]과 [[knowledge-tracing]]의 토대가 되는 구조를 모두 제공했습니다. 학습자의 내면 상태를 추론하고 그에 적응하는 체계들입니다. 이것은 이 지식 기반 전반에 걸친 [[metacognition]], [[desirable-difficulties]], [[self-regulated-learning]]의 참조 틀로 남아 있습니다.

## 핵심 관념들

- **학습은 내면의 정신적 표상의 변화이다.** 인지주의는 학습이 기억 속 지식의 습득, 저장, 재구성 — 개념, 도식, 절차 — 을 수반하며, 관찰 가능한 반응의 변화만이 아니라고 주장합니다. 학습자가 *무엇을 아는가와 인출할 수 있는가*가 중요한 것이지, 그가 단지 무엇을 하는가만이 아닙니다.
- **정보 처리(컴퓨터) 은유.** 마음은 역량과 병목을 지닌 정보 처리 체계로 다루어집니다. 잠재 능력의 [[item-response-theory|measurement]], 작업 기억의 한계, 부호화와 인출이 그것이며, 이것이야말로 AI 조력(학습자의 인지를 모형화하고 적응하는 컴퓨터 프로그램)을 자연스러운 결합으로 만든 바로 그 모형입니다.
- **주의와 기억은 제한되어 있다.** 작업 기억은 제한된 역량을 지니며, 지속적인 학습은 복습, 정교화, [[retrieval-spacing-interleaving|retrieval practice]]을 통한 장기 기억으로의 부호화를 요구합니다. 이것은 인지주의를 [[cognitive-offloading]](기억/처리를 외부 도구에 위임하는 것)에 관한 [[research-methods-aied|research]]와 AI가 인출과 연습을 우회할 때의 "수행–학습 격차"에 연결합니다.
- **메타인지는 인지를 규제한다.** [[metacognition]] — 자신의 사고를 감시하고 통제하는 것 — 은 특징적으로 인지주의적인 구성물이며, 언제 AI에 의존할지에 대한 학습자의 보정이 학습에 왜 중요한지를 설명합니다([[cognitive-offloading]]과 [[self-regulated-learning]] 참조).
- **지식은 분해 가능하고 추적 가능하다.** 인지주의적 AIED는 학습자의 지식이 구성 요소들로 표상되고 시간에 따라 추적될 수 있다고 가정합니다. 이것이 [[knowledge-tracing]], [[cognitive-diagnosis]], [[item-response-theory]]의 기반입니다.

## AI 교육에서의 인지주의

### AIED의 인지주의적 계보

인지주의는 AI 교육이 존재하는 것 자체에 가장 책임이 있는 이론일 것입니다. 초기의 인지적 조력 도구들(예: Anderson의 ACT-R 기반 조력 도구들)은 학습이 생산 규칙으로 모형화될 수 있고 어떤 체계가 학습자가 숙달한 규칙을 추적할 수 있다는 가정을 [[embodied-learning|embodied]]했습니다. 이것은 여전히 이 분야를 규정하는 표준적 구조를 낳았습니다. 영역 모형, 학습자의 지식 상태를 추적하는 [[student-modeling|student model]], 수업을 적응시키는 [[pedagogy|pedagogical]] 모형이며, 모두 인지주의적 기원을 지닙니다. 현대의 [[knowledge-tracing]](베이즈적, 심층 학습, IRT 기반)과 [[cognitive-diagnosis]]은 이 전통을 이어갑니다. 같은 가정이 [[intelligent-tutoring]], [[adaptive-learning]], [[personalized-learning]]을 떠받치며, 이들은 지식 기반에서 [[student-modeling|Learner Modeling and Adaptive Instruction]]이라는 우산 아래 묶입니다.

### 인지 부하와 수업 설계

인지 부하 이론(CLT)은 [[learning-design|instructional design]]에서 가장 널리 적용되는 인지주의적 틀입니다. 내재 부하(과제 복잡성), 외재 부하(제시 마찰), 본래적 부하(도식 구축 노력)를 구분합니다. 잘 설계된 AI는 외재 부하를 줄이면서 본래적 처리를 보존해야 하며, 불충분하게 통합된 AI는 셋 모두를 줄여 완성된 과제와 빈 학습을 남깁니다. CLT의 작업 기억 틀짓기는 [[cognitive-offloading]]에 관한 논쟁에서도 중심적입니다. AI가 해로운 외재 부하를 줄이는지, 아니면 학습을 낳는 본래적 처리를 단락시키는지가 그것입니다.

Mayer의 멀티미디어 학습 인지 이론(CTML)은 같은 작업 기억 가정을 재료 자체에 적용하며, 그 처방은 이례적으로 구체적입니다. 학습자는 말과 그림을 함께 볼 때 말만 볼 때보다 더 잘하고, 외재적 재료가 제외될 때, 수업이 하나의 연속된 단위로 제시되기보다 분절되고 학습자가 속도를 정할 때, 대응하는 말과 그림이 가까이 동시에 나타날 때, 해설이 형식적이거나 기계 생성된 것이 아니라 대화체의 친근한 인간 음성일 때 더 잘합니다.

### 인지주의 대 행동주의와 구성주의

- **[[behaviorism]]와 비교:** 행동주의는 학습을 강화와 반복 훈련을 통한 관찰 가능한 행동 변화로 설명하며, 인지주의는 내면의 표상과 정신 상태의 추적을 주장합니다. AI 실천은 종종 "이름은 구성주의, 실천은 행동주의"의 격차를 보이지만, 인지주의적 설계(학습자 모형화, 지식 추적)는 반응을 단순히 강화하기보다 학습자의 추론된 지식을 *표상하고 그에 적응하기* 때문에 순수한 행동주의적 반복 훈련과 피드백과는 구분됩니다.
- **[[constructivist|constructivism]]와 비교:** 구성주의는 [[learners]]가 경험을 통해 능동적으로 의미를 구성한다고 보며, 인지주의는 (종종 사전 구조화된) 지식과 기술의 정확한 부호화를 강조합니다. AIED의 인지주의적 계보(구조화된 영역, 명시적 지식 구성 요소)는 구성주의자들에게 때로 지나치게 행동주의적이거나 지나치게 전달 지향적으로 비판받으며, 인지주의는 지식을 표상하고 추적하는 것이야말로 진정으로 적응적인 수업을 가능하게 하는 것이라고 반론합니다.
- **[[learning-sciences|learning sciences]]과 비교:** 인지주의는 그 분야가 설계에 사용하는 기제들 — 작업 기억, 부호화, 인출, 분해 가능한 지식 구성 요소 — 을 제공하지만, 그 자체로 설계 지향적이지는 않습니다. 인지주의는 학습이 어떻게 일어나는지를 설명하고, 학습 과학은 그것이 일어나는 환경을 어떻게 만들지를 묻고 그 설계들을 경험적 검증에 처합니다.

### AI 시대의 긴장: 인지주의의 경계가 압박받고 있다

[[generative-ai|Generative AI]]는 인지주의를 연장하기도 하고 도전하기도 합니다. 지식 표상을 더 강력하게 만들어([[knowledge-tracing]]으로 추적되고 [[student-modeling]]로 적응될 수 있는 지식 엔진으로서의 LLM) 연장합니다. 인지가 "어디 있는가"를 복잡하게 만들어 도전합니다. AI가 추론, 기억, 심지어 메타인지와 유사한 기능까지 수행할 때, 학습이 개인의 마음에서 일어나는 내면의 처리라는 인지주의적 가정은 동요합니다. [[distributed-cognition]], [[ai-cognitive-partner-co-regulation-learning|co-regulation]], 탈인간적 구상들은 인지가 인간과 인공 체계에 걸쳐 분산될 수 있다고 논증하기 때문입니다. 그럼에도 인지주의적 질문은 이 분야의 중심 질문으로 남습니다. *학습자가 지식을 내면화하는가, 아니면 도구가 그것을 담고 있는가?* 이것이 가장 순수한 형태의 인지 부하 외주화와 수행–학습 격차의 질문입니다.

## 설계와 연구를 위한 함의

1. **수행이 아니라 내면화를 위해 설계하십시오.** 인지주의적 AIED는 학습자가 도구 *없이* 지식을 인출하고 적용할 수 있는지로 평가되어야 하며, 보조된 수행으로 평가되어서는 안 됩니다. 이것이 [[ai-misuse-learning-harm|performance–learning gap]]이며 보조 없는 [[transfer-of-learning|transfer]]를 측정해야 할 근거입니다.
2. **학습자를 표상하되 단순히 반응하지는 마십시오.** 구조화된 [[student-modeling]]와 [[knowledge-tracing]]을 AI 대화에 부착하여, 체계가 유창하지만 맹목적으로 반응하기보다 추론된 지식에 적응하게 하십시오.([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **작업 기억의 한계를 존중하십시오.** AI UX에 인지 부하 이론을 적용하십시오. 외재 부하(마찰, 과부하된 인터페이스)를 줄이는 한편 모든 인지적 요구를 최소화하기보다 본래적 처리([[desirable-difficulties|productive struggle]], 인출 연습)를 보존하십시오.
4. **메타인지를 보정하십시오.** 학습자가 언제 외주화할지를 [[metacognition]]가 지배하기 때문에, 보정을 가르치는 것(자신이 보조 없이 실제로 할 수 있는 것을 아는 것)은 과잉 의존에 대한 인지주의적 답입니다([[cognitive-offloading]] 참조).

## 연결된 개념

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — 이 실천 계열이 기대는 유지에 관한 발견들

## 연결된 문서

- [[cognitive-shift-ai-education]] — AI 교육의 인지적 전환
- [[cogtax-cognitive-taxonomy]] — AI 사용을 위한 인지 분류
- [[educlaw-bench-pedagogical-llm-agents-2026]] — 지식 추적에 뿌리를 둔 교수법적 LLM 에이전트
- [[nie-personavlm-long-term-personalization-2026]] — LLM 학습자 모형화와 기억
- [[ai-cognitive-partner-co-regulation-learning]] — 공동 규제된 학습에서의 인지적 동반자로서의 AI
- [[ensemble-cognition-philosophy-ai-education]] — 앙상블 인지: 인간–AI 상호작용으로서의 사고
