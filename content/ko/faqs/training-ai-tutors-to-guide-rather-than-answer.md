---
title: "학생에게 답을 주는 대신 안내하도록 AI 튜터를 어떻게 훈련할까요?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-02T08:21:34-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

일반 목적의 모형은 유용성에 관한 인간의 선호로 사후 훈련되며, 실천적으로 유용성은 질문에 신속하고 완전하게 답하는 것을 의미합니다. 튜터링은 그 반대를 요구합니다. 답을 넘겨주는 대신 학생이 답에 도달하도록 돕는 것. 이것은 교육 AI에서 여러분이 모형의 프롬프트가 아니라 학습된 행동을 진정으로 바꿔야 할 수 있는 유일한 곳이며, 또한 이 분야에서 증거가 가장 잘 갖춰진 부분이기도 합니다. 결과는 크며, 결정적인 변수는 알고리즘이 아니라 **보상**입니다.

## 왜 프롬프트만으로는 여기서 충분하지 않을 수 있는가

[[prompt-engineering|프롬프트]]와 일반적인 정렬 훈련조차도 동의 쪽으로의 당김을 남겨 둡니다. [[contextual-sycophancy-ai-literacy|상황적 아첨(contextual sycophancy)]]은 프롬프트와 정렬 이후에도 지속되며, 학습자의 오류가 여전히 AI의 조언으로 전파됩니다. EduFrameTrap은 맥락 전환 공격을 견디는 모형조차도 권위나 사회·정서적 압력 아래에서 굴복하고 시정 피드백을 보류한다는 것을 보여 줍니다 — 이것이 저자들이 "친절하지만 정확한" 행동이 선호가 아니라 **명시적인 훈련 요구사항**이어야 한다고 주장하는 이유입니다([[eduframetrap-llm-sycophancy-educational-safety]]).

여러분의 튜터의 실패 양상이 틀린 답에 동의하는 것이라면, 동의하지 말라고 프롬프트하는 것은 완화이지 해결책이 아닙니다.

## 보상이 전부다

보상은 여러분이 원하는 것의 압축된 명세이며, 모형은 여러분이 실제로 쓴 것이 무엇이든 최적화합니다. 이것이 보상 설계를 이 과정에서 가장 큰 지렛대가 되는 결정로 만들며, 여기서 최선의 결과가 얻어진 곳이기도 합니다.

EduQwen의 보상 모형은 직접 답변보다 **안내하는 응답을 우선시**했으며, 기반 모형이 이미 푼 질문을 배제하기 위한 하드 네거티브 마이닝과, 다단계 교수법적 결정이 포착되도록 5단계에서 8단계로 연장된 롤아웃을 사용했습니다. 그것의 3단계 파이프라인 — 초기 RL, 합성 SFT, 최종 RL — 은 CDPK 벤치마크에서 **96.52%**에 도달하여, Gemini-3 Pro의 **90.55%**에 대조되었습니다([[singh-eduqwen-pedagogical-rl-2026]]).

두 가지가 직접 따라 나옵니다. 첫째, 보상이 조작될 것을 예상하십시오. 그것은 여러분이 의도한 것보다 적게 명시하므로, 직관이 아니라 벤치마크에 대조하여 그것을 작성하십시오. 둘째, 중간 수치들이 교훈적입니다 — 첫 RL 단계만으로 94.13%에 도달하고, 40,000개의 자기 생성 응답에 대한 SFT가 그것을 96.20%로 끌어올렸으며, 최종 RL 라운드가 마지막 조각을 더했습니다. 이득의 대부분은 초기에 왔습니다.

## 교수법에는 강화 학습이 모방을 이긴다

여러분이 지도 미세 조정만 한다면, 모형에게 여러분의 시연을 모방하도록 가르칩니다. 그것은 형식에는 충분하고 판단에는 충분하지 않습니다. LearnLM의 발견은 명확합니다. **긴 대화에서 미묘한 교수법적 지시를 따르는 데 RL은 SFT 단독보다 실질적으로 더 효과적입니다**([[learnlm-improving-gemini-learning]]).

그것의 지시 조건화된 틀은 또한 개발자와 교사가 교수법의 한 정의에 얽매이지 않고 튜터의 행동을 명시할 수 있게 하며, 공동 훈련에 의해 Gemini의 사후 훈련 단계에 혼합됩니다. 전문가들은 그것을 GPT-4o(**+31%**), Claude 3.5 Sonnet(**+11%**), 기반 Gemini 1.5 Pro(**+13%**)보다 선호했습니다.

## 답이 아니라 과정을 감독하라

이 영역에서 가장 실행 가능한 단일 발견은 *훈련 데이터가 무엇을 담아야 하는지*에 관한 것입니다. 지시 조정된 모형들은 오직 **단계 수준의 풀이 궤적(step-level solution traces)**으로 훈련될 때 대수 오개념을 배웠습니다. 최종 답만으로 훈련될 때, 정확도는 모든 데이터 규모에서 **30% 미만**으로 남았습니다([[misconception-acquisition-dynamics-llms-2026]]).

튜터의 어느 쪽을 만드는 사람에게나 중요한 그 연구의 두 가지 추가 세부 사항이 있습니다.

- **학생** 역할은 학습된 오류를 일반화하여, 올바른 예가 **4개 중 1개**만큼 낮은 비율로 명시적으로 혼합될 때까지 그렇게 했습니다.
- **튜터** 역할은 그러한 대가를 보이지 않았으며, 함께 훈련된 10개의 오개념에 걸쳐 **93%에서 98%**의 올바른 정확도를 유지했습니다.

여러분이 진단하도록 튜터를 훈련하고 있다면, 예에는 판결뿐만 아니라 추론이 필요합니다. 질문-정답 쌍의 데이터셋은 모형에게 학생이 어디서 잘못되었는지 알아차리는 것을 가르칠 수 없습니다.

## 훈련 데이터가 교수법을 담게 하라

감독이 추론을 담아야 한다면, 표상 체계는 데이터 정리 단계가 아니라 교수법적 의사결정입니다. 여기에 직접 관련되는 두 가지 결과가 있습니다.

**각 예를 여러분이 원하는 행동으로 표시하십시오.** 감독 표지에 관한 한 연구는 모든 훈련 예에 하나의 목표 행동 — 주제 역량, 교과과정 근거, 진단적 추론, 또는 비계질 — 을 할당하는 것이 시험된 모든 모형 규모를 향상시켰음을 발견했으며, 비계질과 학습자의 이력 사용에서 가장 큰 이득이 있었습니다. 지식 상태 진단은 **54.04%**로 가장 약한 행동으로 남았는데, 이것이 지니고 갈 만한 유용한 기대치입니다. 진단은 이 목록에서 가르치기가 가장 어려운 것입니다([[omniedu-open-educational-foundation-models-2026]]).

**데이터 선택을 그 자체의 훈련 문제로 다루십시오.** Edu-QuRating은 선호 증류를 교육 데이터 선별에 적용하여, 단일한 "이것이 교육적인가?" 점수를 사실적 정확성, 교수법적 구조, 수준 적합성을 포괄하는 **20개의 루브릭 차원**으로 대체합니다([[garrod-edu-qurating-educational-data-curation-2026]]). 여러분이 웹 텍스트에서 말뭉치를 조립하고 있다면, 여러분의 모형이 어떤 소리로 말하는 법을 배울지를 결정하는 것이 바로 그런 필터입니다.

## 보상 밀도가 보상만큼이나 중요하다

여러분이 관심 갖는 것이 여러 차원을 가질 때, 완전 일치 보상은 너무 희박합니다. SWIM의 글쓰기 시뮬레이터가 그 진행을 깔끔하게 보여 줍니다.

- 루브릭 기반 프롬프트: 최고 평균 특성 QWK **0.577**(Claude Sonnet), **0.422**(GPT-5.4), 공개된 7B 모형에서는 0에 가까움
- 지도 미세 조정: 그 7B 모형에 대해 **0.474 ± 0.023**
- 조밀하고 특성 정규화된 정확도 보상을 사용한 GRPO: 모든 특성과 프롬프트에 걸쳐 **0.618 ± 0.005**([[swim-student-writing-simulation-2026]])

보상 설계가 요점이었습니다. 완전 일치가 아니라 조밀한 특성 정규화된 신호. 왜냐하면 완전 일치는 다중 특성 설정에서 너무 희박하기 때문입니다. 여러분의 보상이 완벽한 응답에서만 발화한다면, 훈련 신호의 대부분은 침묵입니다.

## 발화가 아니라 결정을 훈련하라

사후 훈련은 모형이 말하는 것만을 형성할 필요가 없습니다. TACT는 13개 전략 분류법과 2축 학생 행동 분류법으로 튜터를 사후 훈련하여, Qwen3.5-4B 기반 위에 **20.30포인트**를 얻었으며, 훈련 중에 이용 가능했던 학습자 상태 표지를 **보류하는** 진단 벤치마크를 사용하여 모형이 대화로부터 상태를 추론해야 하게 했습니다([[tact-pedagogically-adaptive-esl-tutoring]]).

같은 논리가 [[special-education|특수 교육]] 정렬([[special-r1-rl-special-education]])을 통해, 그리고 모형을 답변자가 아니라 소크라테스적 안내자로 정렬하는 휴리스틱 RL 작업([[wang-socratic-guides-heuristic-reinforcement-learning-2026]])을 통해 이어집니다. 한 플랫폼은 더 나아가 산문이 아니라 *정책*을 훈련합니다. 강화 학습 에이전트가 다음 연습 문제를 선택하므로, 학습자가 다음에 하는 것이 훈련된 모형에 의해 결정됩니다([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

## 어떤 데이터가 필요한가?

두 개의 정반대되는 베팅이 이 공간을 규정하며, 여러분이 어떤 것을 취하는지는 여러분이 이미 가진 것에 달려 있습니다.

- **데이터가 부족할 때의 지시 조건화된 사후 훈련.** LearnLM은 교사와 개발자가 튜터의 행동을 명시할 수 있게 하는 시스템 수준의 지시를 담고 있으며, 튜터링 대화록의 큰 말뭉치가 아니라 공동 훈련에 의존합니다.
- **여러분이 가졌을 때의 진짜 상호작용 데이터에 대한 미세 조정.** TeachLM은 [[prompt-engineering|프롬프트 엔지니어링]]이 임시방편이며 희소한 재료는 진짜 학습자–튜터 상호작용이라는 데 베팅합니다. 엄격한 익명화 아래 일대일 세션 **100,000시간**으로 훈련되어, 학생의 발화 시간을 두 배로 늘리고, 질문 방식을 개선하며, 대화 차례를 **50%** 늘립니다([[teachlm-post-training-llms-education]]).

교수법적 행동에 이르는 더 싼 경로는 증류입니다. Pedagogy-R1(1.5B 및 7B)은 QwQ-32B 교사로부터 증류된 교수법적으로 필터링된 출력에 Chain-of-Pedagogy 프롬프트와 짝지어 지시 조정되었습니다([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## 대화 길이에서 시험하라

훈련은 모형을 긴 대화에 걸쳐 안전하게 만들지 않습니다. SafeTutors는 특화된 교수법적 모형조차도 지속된 대화에 걸쳐 저하되고 답을 과도하게 누설하는 해악을 저지를 수 있음을 보여 줍니다([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|교수법적 안전]]은 단일 차례가 아니라 대화 길이에서 시험되어야 합니다 — 학생이 틀리거나, 고집하거나, 밀어붙이는 차례들을 포함하여.

## 다음으로 갈 곳

- [[making-ai-better-at-supporting-learning|우리 자신의 과목에서 AI가 학습을 더 잘 지원하도록 어떻게 만들 수 있을까?]] — 훈련이 과연 올바른 지렛대인지
- [[checking-whether-educational-ai-works|교육 AI가 올바르게 작동하고 있는지를, 점수만 잘 받는 것이 아니라, 어떻게 알 수 있을까?]] — 행동이 실제로 바뀌었는지 측정하기
- [[developing-ai-tutor|효과적인 AI 튜터를 개발하기 위한 모범 사례는 무엇인가?]] — 비계질과 힌트 사다리를 통해 훈련이 아니라 같은 안내 행동을 형성하는 상호작용 설계의 대응물
- [[llm-training-and-fine-tuning]] — 전체 개념 페이지
