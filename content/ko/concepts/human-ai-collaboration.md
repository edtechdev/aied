---
title: 인간-AI 협업
created: "2026-05-29T10:44:35-04:00"
updated: "2026-10-04T17:30:54-04:00"
type: concept
confidence: medium
foundations: [human-ai-collaboration, ai-literacy]
technology: [generative-ai, llm]
pedagogy: [student-ai-interaction]
translation_of: concepts/human-ai-collaboration
source_updated: "2026-10-04T17:30:54-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **인간-AI 협업** — 사람과 모델 사이의 인지적 노동의 분배 — 은 지식베이스의 핵심 상호작용 주제입니다: [[human-ai-collaboration-trust-expectations]], [[humanlike-ai-collaborative-writing]], [[genai-mindtool-generative-learning]], 그리고 [[teacher-student-agency-orchestration]]은 신뢰, 행위자성, 상호보완적 역할([[human-in-the-loop-ai]], [[agentic-ai]])을 다룹니다. 핵심 질문은 이 파트너십이 학습자 자신의 인지 작업을 **보존하는지 아니면 대체하는지**입니다 — 동일한 협력 구조라도 책임이 어떻게 공유되는지에 따라 학습을 지원할 수도, 학습을 대신할 수도 있습니다.

## 생각해 볼 질문들

- 인간-AI 협업에서 핵심 질문은 그 파트너십이 여러분 자신의 인지 작업을 보존하는지 아니면 대체하는지입니다. AI에게 맡겼던 과제 하나를 떠올려 보세요: 여러분이 생성하고 결정했던 것인가요, 아니면 단순히 받아들였던 것인가요?
- 한 연구는 ChatGPT와 자유롭게 협업하는 것이 나중의 비지원 과제에서 무너지는 일시적 향상만을 산출한 반면, 'think first, ChatGPT later'(먼저 생각하고, ChatGPT는 나중에) 프로토콜은 지속적인 학습을 낳았음을 발견했습니다. 왜 아이디어를 누가 생성하는지가 실제로 학습하는지 여부를 예측할 수 있을까요?
- 동일한 도구라도 책임이 어떻게 공유되는지에 따라 학습을 지원할 수도, 학습을 대신할 수도 있습니다. 여러분을 인지적으로 생산적으로 유지했던 협력 구조와, 조용히 여러분의 사고를 떠넘긴 협력 구조를 각각 떠올릴 수 있나요?
- 한 가지 구조는 평소의 역할을 뒤집습니다: 모델이 답을 제공하는 대신, 학생이 내용을 설명하고 모델은 설명, 예시, 반론을 요구하는 무지한 당사자 역할을 맡습니다. AI가 질문하는 쪽이 된다면, 여러분 쪽에 남는 사고의 양은 어떻게 될까요?
- 신뢰는 가정할 것이 아니라 조정해야 하는 것으로 묘사됩니다 — 적절한 곳에서는 AI를 신뢰하고, 그렇지 않은 곳에서는 검증하는 것입니다. 현재 여러분은 AI 출력을 언제 신뢰하고 언제 검증할지를 어떻게 결정하나요?
- [[research-methods-aied|연구]]는 효율성과 여러분의 자기조절적 [[student-engagement|참여]]의 깊이 사이에서 trade-off하는 협업 양식들을 확인합니다. 더 많은 학습을 여러분의 손에 쥐어 두기 위해 덜 효율적인 것을 받아들이는 것이 언제 가치 있을까요?
- 협업이 기술적 선택만큼이나 [[pedagogy|교육학적]] 선택이라면, 여러분의 학습자들에게 AI가 사고를 보강하기보다 대체하지 않도록 하기 위해 어떤 설계 조치(프롬프트, 워크플로, 구조)를 마련하시겠습니까?

## 들어가며

인간-AI 협업은 학습자, 교사, [[ai-technologies|AI 시스템]]이 인지 작업을 어떻게 분배하는지 — 누가 무엇을 하고, 누가 결정하며, [[trust]]와 [[agency]]가 어떻게 유지되는지 — 를 설명합니다. 협업 연구는 AI를 대체물이나 수동적 도구로 [[framing-ai-use-for-students|규정하기보다]], 상호보완적 강점을 지닌 파트너로 다루며, 그 가치는 책임이 어떻게 공유되고 감독되는지에 달려 있습니다. 관찰 가능한 행동의 수준에서, [[student-ai-interaction]]은 학습자들이 이 관계를 실제로 어떻게 실행하는지 — AI와 순간순간 주고받는 질문, 프롬프트, 검증 행위 — 를 포착합니다.

노동 분배는 또한 상호작용을 설계하는 사람들을 통해서도 작동합니다. [[ai-integration-instructional-design-collaboratory-2026|12개의 교사교육 과정 구현]]에 걸쳐, 교수진은 AI를 사고 파트너, 비평 생성기, 또는 리허설 도구로 위치시켰고, 예비교사들은 결정을 평가하고, 적용하고, 정당화할 책임을 유지했습니다. 그러나 동일한 백서는 예비교사들이 AI의 저작이 공개되자 이미 유용하다고 판단했던 피드백의 가치를 떨어뜨렸다고 보고하며, 이를 'balloon popping effect'(풍선 터뜨리기 효과)라고 부릅니다. [[tang-chatbots-learning-design-2026|1,378개의 설계자-챗봇 대화 차례 분석]]은 생성과 관련해서는 반대 방향을 가리킵니다: 설계자들은 내장된 어시스턴트를 주로 학습 결과와 교육학적 접근에 대한 정합성 점검에 사용했지, 콘텐츠를 산출하는 데 쓰지 않았습니다. 두 경우 모두 학습을 담당하는 것은 인간의 [[evaluative-judgment|평가적 판단]]이며, 모델의 출력이 아닙니다.

### 이점, 위험, 설계 함의

지식베이스의 증거는 인간-AI 협업이 양날의 협력 구조이며, 그 결과는 AI 자체가 아니라 설계에 의해 결정된다는 것을 보여 줍니다.

- **협업은 인지적 참여를 보존할 때 학습을 향상시킬 수 있습니다.** [[genai-mindtool-generative-learning|마인드툴로서의 GenAI]]와 안내된 협업에 대한 연구들은 노동 분배가 학습자로 하여금 생성하고, 결정하고, 평가하게 유지할 때 AI가 사고를 보강하기보다 대체하지 않는다는 것 — 즉 지속적인 [[self-regulated-learning|자기조절 학습]]과 [[creativity]] 향상을 산출한다는 것 — 을 보여 줍니다. 학습자가 결정 역할을 유지하는 것은 쓰기로까지 확장됩니다: [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]]는 학생의 논증 에세이에 대한 LLM 비평이 한 학기에 걸쳐 쓰기를 향상시켰음을 보여 주며, 학습자들은 모델의 피드백을 수용할지 반박할지(주장의 87.8%를 반박)를 결정했습니다 — 이는 학습자의 평가 작업을 보존한 구조입니다 — 그리고 향상은 LLM 지원 없이 쓰인 에세이에서도 나타나, 이는 지속적인 기술이며 [[cognitive-offloading|도구 의존]]이 아님을 시사합니다.
- **협업은 너무 많이 떠넘길 때 학습을 대신할 수 있습니다.** 실패 양상은 [[cognitive-offloading|과잉 의존]]입니다: AI가 답을 산출할 때 학습자의 역할은 수동적 수용으로 붕괴하고, 즉각적인 과제 수행이 지속적 학습의 부재를 가립니다. [[genai-performance-vs-learning|수행 대 학습]] 연구와 대체에서 비계로의 해악 순환([[substitution-to-scaffolding-ai-harm-cycle-2026]])은 이를 체계적으로 기록합니다.
- **더 나은 점수는 그 자체로 협업이 무언가를 가르쳤다는 증거가 아닙니다.** 이 페이지의 다른 증거들은 지원받은 수행을 신중하게 읽으며, 지원 유형에 대한 무선화된 검정이 그 이유를 보여 줍니다. [[iqbal-human-genai-support-essay-revision-2026|Iqbal 외(2026)]]의 실험실 연구에서 87명의 EFL 학생이 도움 없이 에세이를 쓴 뒤, ChatGPT 4.0(n = 29), 인간 작문 강사(n = 28), 또는 지원 없음(n = 30)으로 수정했습니다. 학생이 사용한 네 가지 추적 기반 수정 전략 중 어떤 것이 사용되었는지는 그들이 받은 지원과 강하게 연관되었고(Cramér's V = 0.668), 이전의 쓰기 전략과는 다소 약하게 연관되었습니다(Cramér's V = 0.333); [[motivation]], 쓰기 기술, 메타인지 판단 정확도는 전반적인 연관을 보이지 않았고, 메타인지 연관은 지원 없음 조건에서만 나타났습니다(p = 0.0460). 결정적으로, 어떤 수정 전략도 점수 변화를 예측하지 못했지만(p = 0.273) 지원 유형은 예측했습니다: GenAI 집단은 인간 전문가 집단과 대조 집단보다 유의미하게 더 많이 향상되었고(H(2) = 16.591, p = 0.00025, η² = 0.174), 동일한 *점진적으로 감소하는 [[help-seeking]]* 전략 안에서도 GenAI 학생들은 평균 약 4점을 얻은 반면 인간 전문가 학생들은 0.5점을 잃었습니다. 저자들은 이 패턴을 학습자 자신의 [[metacognition|메타인지 판단]]을 우회하는 외부 지원으로 읽으며, 이러한 향상은 지속적 역량이라기보다 과제 특정적 최적화일 수 있다고 경고합니다. 이는 *누가 생성하고 결정하는가* 원칙을 뒤엎지는 않습니다(연구가 달리한 것은 지원을 누가 제공했는지이지, 사고를 누가 생성했는지가 아니기 때문입니다), 그러나 강사가 적용해야 할 검정을 더욱 날카롭게 합니다: 지원 하에 얻은 향상은 학습으로 간주되기 전에 지원 없는 과제에서도 살아남아야 하며, 방에 인간 전문가를 더하는 것이 자동으로 더 안전한 구조인 것은 아닙니다.
- **동료를 더하는 것도 자동으로 더 안전한 구조는 아닙니다.** [[bjet-many-hands-make-light-work-2026|Chu, Dai and Zhai (2026)]]는 87명의 학부생을 8주간 혼자 또는 짝을 지어 GenAI 다중에이전트 시스템과 함께 작업하게 했습니다. 짝을 이룬 집단이 복잡한 설계 프로젝트에서 가장 높은 점수를 받았고(M = 89.64, 시스템 없이 짝으로 작업한 학생들의 85.85, 혼자서 시스템과 함께 작업한 사람들의 86.45에 비해, p = 0.039), 그러나 비판적 사고 인식은 혼자 작업한 집단에서 가장 크게 상승했고(M = 0.41), 짝을 이룬 집단에서는 다소 하락했습니다(M = −0.04, p = 0.039).
- **설계 원칙 — 학습자의 생산적 작업을 보존하라.** 연구 전반에 걸쳐, 협업이 도움이 되는지 해가 되는지의 가장 날카로운 예측 변수는 *누가 생성하고 결정하는가*입니다. 인간을 인지적으로 생산적으로 유지하는 구조들(안내된 [[prompt-engineering|프롬프트 설계]], "think first, then consult AI," 검증 및 평가 단계)은 학습을 지원하는 반면, 전체 과제를 모델에 넘기는 구조들은 그렇지 않습니다. 상호보완적 조치는 모델에게 부여되는 *역할*을 바꾸는 것입니다. [[wang-genai-novice-learner-learning-by-teaching-2026|Wang 외(2026)]]의 준실험에서 68명의 [[teacher-education|예비교사]]는 ERNIE 3.5에 기반한 GAI *초보 학습자*(호기심 많고 감사하는 것으로 규정된 시스템으로, 설명, 예시, 검증 추론, 반대 관점을 요구하며, Bloom의 분류학 위로 단계가 배열된)에게 뒤집힌 교실(flipped classroom) 개념을 설명하거나, 동일한 모델에 기반한 GAI 교사에게 질문했습니다. AI를 가르친 학생들은 더 잘 설명했고(뒤집힌 교실의 정의 M = 4.18 대 3.29; 그 교수 활동 M = 4.91 대 3.06, 모두 p < 0.001), 더 많고 더 높은 품질의 질문을 생성했습니다(M = 3.67 대 2.14; M = 5.67 대 3.07, 모두 p < 0.001), 한편 객관적 회상은 통계적으로 구별되지 않았습니다(M = 23.18 대 21.57, p = 0.416). 따라서 그 이점은 사실 인출보다는 설명과 전이에 있었습니다. AI-교사 조건의 학생들은 그 trade-off에 대해 솔직했습니다: 일부는 그것이 "more accurate and detailed information"를 준다고 인정하면서도, "after using it, I didn't want to think independently"라고 보고했습니다. 모델에게 [[learning-by-teaching|가르침을 받을 학습자]] 역할을 부여하는 것은 학생을 아이디어의 유일한 원천으로 만들고, 가르칠 적절한 동료를 찾는 오랜 어려움을 제거합니다. 여기에는 두 가지 설계 한계가 따릅니다: 계획과 감독은 향상되지 않았고(M = 4.01 대 3.78, p = 0.062), 따라서 역할 역전은 그 자체로 [[metacognition|메타인지적]] 개입이 아니며, 저자들은 그 무효과를 학생들을 내용 정확성에 집중하게 유지한 과제 설계로 귀인합니다. 쓰기 교실에서 이 원칙은 구체적이고 가르칠 수 있는 형태를 취합니다. [[human-ai-collaboration-academic-writing-2026|Alshehri 외(2026)]]의 사우디 EFL 준실험에서 학생들은 5부분으로 된 루틴 — 문제를 틀 짓고 프롬프트를 설계하고, 반복적으로 초안을 작성하고, 수정하고, 모든 주장과 인용을 학술 데이터베이스에 대해 검증하고, 자신의 표기와 의존을 조절하는 것 — 을 실행했으며, 각 과제는 무엇을 받아들이고, 거부하고, 왜 그랬는지에 대한 [[academic-integrity|AI 사용 기록]]을 요구했습니다. 쓰기와 디지털 [[critical-thinking|비판적 사고]]는 함께 상승했고 거의 발맞춰 움직였으며, 학생들의 성찰은 검증 및 [[hallucination-risk|환각]] 복구 루틴을 비판적 사고 향상에 구체적으로 연결했습니다: 출력을 심문하는 동일한 습관이 그들의 구성 결정을 형성했습니다. 저자들 자신의 주의 사항은 이 원칙에 필수적인 보완재입니다 — 그 워크플로는 자족적이라기보다 상황 의존적이며, 박한 [[scaffolding]], 낮은 비판적 사고 또는 메타인지 준비도(학생이 나쁜 출력을 잡아낼 능력이 부족한 경우), 구성 결정의 점진적 위임, 또는 불분명한 제도적 [[educational-policy-ai|AI 사용 정책]] 하에서는 역효과로 돌아설 수 있습니다.
- **고위험 협업을 위한 설계 패턴으로서의 제한된 권한.** [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert 외(2026)]]의 교사들은 개방형 어시스턴트를 프로토타이핑하지 않고 자유도가 미리 고정된 시스템을 만들었습니다: 모든 설계는 챗봇을 특정 수업 내용으로 범위를 한정했고, 안전은 영역 경계(수업 특정 범위, 그리고 대화가 진행되기 전 최소한의 사실이나 문제 수를 요구하는 "information quota"), 표준화된 거절과 콘텐츠 필터링("Sorry, this is not part of my knowledge base") — 이 역시 교사에게도 알렸습니다 — , 그리고 모호한 경우를 위한 교사 오버라이드로 계층화되었습니다. 주어진 예시는 한 단원 안에서는 정당하지만 자동 거부되기보다는 사람에게 연결되어야 하는 인간 생식에 관한 질문이었습니다. 형식, 장르, 속도, 복잡성의 [[personalized-learning|개인화]]는 그 경계들 *안에서*는 환영받았고, 감독(완전한 대화 기록, 실시간 알림, 오버라이드)은 모델에 대한 불신이라기보다 전문적 책임으로 규정되었습니다. 그 함의는 고위험 환경에서 노동 분배가 매 차례 협상되기보다 제한되고, 감시되고, 취소 가능한 것으로 명시되어야 한다는 것입니다.
- **신뢰는 가정할 것이 아니라 조정되어야 합니다.** 생산적인 협업은 학습자가 AI 출력을 언제 신뢰하고 언제 검증할지를 정확히 조정하는 데 달려 있습니다 — 맹목적 수용이나 일률적 거부가 아니라 [[trust-calibration]] 및 [[human-in-the-loop-ai|인간 감독]]과 연결됩니다.

- **교사–AI 협업은 학습뿐 아니라 참여에 대해서도 양날의 검입니다.** 468명의 대학 교사를 대상으로 한 3차 웨이브 설문에서, 협업은 심리적 가용성을 통해 업무 참여를 높였지만(간접 0.19) 업무 소외를 통해 낮췄습니다(간접 −0.03); [[teacher-ai-competency|디지털 역량]]은 둘 다를 조절하여, 소외 기울기를 0.38에서 0.17로 평탄하게 했습니다([[teacher-ai-collaboration-work-engagement-2026|Sun 외(2026)]]).
- **노동 분배는 능력이 아니라 신뢰성을 따릅니다.** 학습자들이 합의에 이르는 것은 원칙에 기반한 배분입니다: 즉각적이고 널리 적용되는 언어 피드백은 AI에게, 개별화되고 관계적인 안내는 강사에게 돌아가며, 이는 각 원천의 인지된 정확성이 아니라 인지된 신뢰성에 따라 배정됩니다. 왜냐하면 의존에 대한 구속적 제약은 인지된 역량이 아니라 인지된 배려였기 때문입니다([[bounded-reliance-ai-writing-feedback-2026|Serpil & Mor, 2026]]).
- **의존은 개인의 선택만이 아니라 집단의 과정입니다.** 에이전트 기반 모델에서, 검증되지 않은 사용에 대한 가시적 사회적 증거는 검증을 0.29에서 0.002로 붕괴시키고 과잉 의존을 0.30에서 0.52로 끌어올린 반면, 가시적 동료 검증은 거의 완전한 검증을 회복시켰습니다 — 학습자들이 타인이 하는 것을 보게 바꾸는 것이 점검 비용을 낮추는 것보다 낫습니다([[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]]).

이것은 인간-AI 협업을 기술적 구성물만큼이나 *교육학적* 구성물로 만듭니다: 그 파트너십의 가치는 교사가 상호작용을 어떻게 설계하는지, 학습자가 그것을 어떻게 조절하는지, 그리고 시스템이 생산적인 참여를 어떻게 초대하거나 억제하는지에 의해 형성됩니다.

### 인간-AI 협업이 연구에서 어떻게 나타나는가

- **신뢰와 기대:** [[human-ai-collaboration-trust-expectations|신뢰 기대]]는 학습자의 AI에 대한 기대가 협업을 생산적으로 만드는지, 아니면 [[cognitive-offloading|과잉 의존]]으로 이어지게 하는지를 어떻게 형성하는지 검토합니다.
- **쓰기와 사고에서의 상호보완적 역할:** [[humanlike-ai-collaborative-writing|인간다운 AI 협업 쓰기]]와 [[genai-mindtool-generative-learning|마인드툴로서의 GenAI]]는 노동 분배가 학습자의 인지적 참여를 보존할 때 AI가 학습자의 사고를 대체하기보다 보강할 수 있는 방법을 보여 줍니다.
- **오케스트레이션과 행위자성:** [[teacher-student-agency-orchestration|교사–학생 행위자성 오케스트레이션]]과 [[student-mental-models-genai|학생 멘탈 모델]]은 인간과 AI 사이에서 행위자성이 어떻게 협상되는지를 다루며, [[human-in-the-loop-ai]] 및 [[agentic-ai]]와 연결됩니다.
- **메타인지 및 팀 차원:** [[haiml-human-centered-ai-metacognitive-model-2026|인간 중심 AI 메타인지 모델]]과 [[spritz-ai-disciplinary-mediation-student-teams-2026|학생 팀에서의 학문적 매개]]는 협업을 메타인지와 팀 학습으로 확장합니다.
- **협업 역량은 체크리스트가 아니라 구성입니다 — 메타인지가 [[tpack]]의 통합적 역할을 맡습니다.** [[dang-human-ai-collaboration-competency-2026|Dang, Hong, Doyle and Nguyen (2026)]]는 인간-AI 협업 역량(HACC)을 영역, [[ai-literacy|AI 역량]], [[metacognition|메타인지 역량]], 그리고 그들의 교집합들(AI와 함께 일하기, AI와 함께하는 행위자 학습, 행위자적 개인 및 [[educational-development|전문성 개발]], 그리고 HACC 자체)의 *동적 구성*으로 정의하며, 기존 [[curriculum-design|교육과정]]에 덧붙여진 AI 기술의 추가적 목록을 명시적으로 거부합니다. 그들의 핵심적 조치는 교육학이 TPACK에서 수행하는 통합 작업을 재배정하는 것입니다: AI는 과제가 전개됨에 따라 기여가 달라지는 적응적 참여자이므로, 조정의 부담은 학습자 자신의 메타인지에 떨어집니다 — 언제 AI와 상의할지, 상호작용을 어떻게 틀 지을지, 언제 그것을 무시할지를 결정하는 것 — 따라서 협업을 생산적으로 유지하는 메커니즘을 쥐고 있는 것은 교사가 아니라 학습자입니다. [[agency|학습자 행위자성]]은 독립 노드로서 의도적으로 제외되었습니다; 그것은 대신 학습자들이 세 가지 역량을 조율할 때 표현하는 창발적 질이며, 이는 행위자성을 고립되어 훈련될 기술이 아니라 구성의 속성으로 만듭니다. 뉴질랜드 교육자 24명을 대상으로 한 이 프레임워크의 인터뷰 연구는 차원들을 서술적으로 뒷받침했고, 역할 수준은 수용보다 강조를 달리했습니다: 교장 교육자의 네트워크는 HACC와 전문성 개발로의 연결을 갖춘 AI를 중심으로 했으며, 고경력 교육자(U = 10.00, p = .04)와 초기 경력 교육자(U = 7.00, p = .01)와 유의미하게 달랐습니다.
- **구별되는 협업 양식들:** 경험적 연구는 세 가지 인간–AI 협업적 [[problem-solving]] 양식 — *Delegated Reasoning*(위임된 추론), *Concerted Interpretation*(협력적 해석), *Delegated Elaboration*(위임된 정교화) — 을 확인하며, 분배된 인간–AI 시스템의 효율성과 학습자의 자기조절적 참여의 깊이 사이의 trade-off를 드러냅니다(위임된 추론이 가장 잘 수행되지만 자기 [[regulation]]은 더 낮습니다).([[hao-human-ai-collaborative-problem-solving-cognition]])
- **인간과 AI 진행자는 구조화된 토론에서 지각적으로 상호 교환 가능할 수 있지만, 재사용은 다른 이유들로 작동합니다.** [[kuhail-great-debaters-ai-facilitators-2026|Kuhail 외(2026)]]는 32명의 STEM 학생들이 진행한 32회의 토론 세션에 걸쳐 인간 진행자를 GPT-4 진행자로(그리고 다시 인간으로) 교체했고, 효과성, 즐거움, 만족도, 유용성, 사용 의도에서 통계적으로 유의미한 차이를 발견하지 못했습니다(t는 0.23에서 1.30, p는 0.198에서 0.818의 범위). 달랐던 것은 학생들이 왜 돌아오려 하는지였습니다: AI 진행 하에서는 인지된 유용성이 사용 의도를 이끌었고(0.806, p = 0.004), 반면 만족도는 인간 진행 하에서만 그것을 이끌었습니다(0.556, p = 0.002). 저자들은 이 평평한 비교를 동등성의 증거라기보다 규칙에 얽매인 과제에서의 정상화로 읽으며, 윤리적·관계적 이유로 인간 감독을 유지하면서 즐거움에 기대기보다 AI 진행 활동의 유용성을 읽을 수 있게 할 것을 권고합니다. 이 연구는 인식만을 측정했기 때문에, 학생들이 실제로 더 잘 논쟁했는지에 대해서는 아무것도 말하지 않습니다.
- **위임하기 전에 과제를 배정하라.** [[scan-framework-task-assignment-generative-ai-2025|Tsim and Gutoreva (2025)]]는 학습자의 발달 영역에 네 번째 영역 — 모델이 이미 아는 것 — 을 추가하여, 대체(Substitute), 보완(Complement), 지원(Aid), 협상 불가(Non-negotiable) 배정을 산출하며, 자동화–보강–협업 양식들이 도구의 정교함이 아니라 통제의 위치와 인식론적 책임에 따라 달라진다고 주장합니다.
- **수업연구를 통해 구축되는 교육학적 사고로서의 프롬프트 엔지니어링.** [[robinson-lesson-study-dialogic-engagement-ai-2026|Robinson 외(2026)]]는 UAE의 한 기관에 있는 다섯 명의 교사교육자를 두 차례의 수업연구 주기를 통해 추적했으며, 이는 중등 및 초등 수학의 예비교사 36명에게 도달했고, ChatGPT(GPT-4o)로 AI 지원 수업을 설계했습니다. 효과를 낸 조치는 AI를 학문적 프레임워크와 짝짓는 것이었습니다: 예비교사(PST)는 과제를 생성하고, 수정된 수학 과제 분석 프레임워크에 대해 그 인지적 요구를 판단한 뒤, 개념적 깊이를 높이기 위해 프롬프트를 다시 썼습니다. 따라서 수정은 도구의 특징이 아니라 수학에 고정되었습니다. 분석 가능한 26개의 프롬프트 중 16개가 개념적 과제 특징을 담고 있었고, 교육자들은 프롬프트 엔지니어링이 "not a technical skill; it's a cognitive one"이라고 결론 내렸습니다. 보고된 학습은 수정된 수업에서 상승했고(첫 주기에서 7명 중 5명, 두 번째 주기에서 14명 중 10명이 절차적 과제와 개념적 과제를 구별하는 법을 배웠다고 보고), AI에게 더 개념적인 과제를 요청하는 것이 때로는 단지 더 복잡한 과제만을 산출했다는 주의 사항이 따릅니다. [[teacher-ai-competency|교수 개발]]을 위해서는, 독립적인 도구 워크숍이 아니라 실제 수업에 대한 지속적인 [[collaborative-learning|협업적 탐구]]를 위한 주장이 제기됩니다.
- **안내가 수행 대 학습을 결정합니다:** Wong and Qiu (2026)는 창의적 과제에서 자유로운 인간–AI 협업과 안내된 협업을 대조했습니다. ChatGPT와 자유롭게 협업하는 것은 나중의 비지원 과제에서 붕괴하는 일시적 수행만을 산출한 반면, 안내된 "think first, ChatGPT later" 프로토콜 — 자신의 아이디어를 생성한 뒤, ChatGPT를 써서 그것을 개선하고, 발전시키고, 평가하는 것 — 은 *독립적인* [[creativity]]에서 지속적인 향상을 낳았습니다. 그 이점은 자신의 *고유한* 아이디어를 개선하는 것을 목표로 한 협업적 프롬프트에 의해 매개되었으며, 이는 *누가 생성하는가*(노동 분배)가 협업이 [[self-regulated-learning|학습]]을 산출하는지 [[cognitive-offloading|대체]]를 산출하는지를 예측한다는 것을 보여 줍니다.([[think-first-chatgpt-later-2026]])
- **단순한 파트너가 아닌 매개자로서의 AI:** [[niari-ai-pedagogical-mediator-collaborative-learning|Niari]]는 AI를 상호작용, 인식론적 의미 구성, 조절 과정을 조율하고, 행위자성, 권위, 책임을 인간 및 비인간 행위자에게 걸쳐 재분배하는 *교육학적 매개자*로 재개념화하며, AI를 튜터, 동료, 또는 도구로 다루지 않습니다.
- **교사의 AI와의 협업 또한 패턴화되어 있으며, 이진적이지 않습니다.** 교사들이 생성 AI로 [[learning-design|수업 설계]]를 할 때, 그들의 상호작용은 경험적으로 구별 가능한 형태를 취합니다. [[choi-teacher-ai-interaction-lesson-design-2026|Choi 외(2026)]]는 일곱 가지 교사–AI 상호작용 패턴 — AI 출력의 *직접 수용(direct adoption)*과 *정교화된 수용(elaborated adoption)*에서부터 *초기 거부(initial rejection)*, *수정된 수용(revised adoption)*, *후속 안내 사용(follow-up guided use)*, *복합적 상호작용(complex interactions)*, 그리고 *AI 우회(bypassing AI)*까지 — 을 확인했으며, 교수의 경험과 AI 숙련도가 함께 그들이 AI를 비판적으로 재프롬프트하여 학생과 맥락에 맞게 적응시키는지(상호보완적이고 [[distributed-cognition]]적인 노동 분배) 아니면 제안을 수동적으로 수용하는지(AI 우위적 분배)를 형성합니다.
- **매개적 행위자로서의 혼합적 참여 형태.** 도구와 협력자의 중간 지점이라기보다, [[generative-ai|생성 AI]]는 행동을 매개하면서 우연적이고 책임 없는 기여를 생성하는 매개적 행위자로 개념화됩니다 — 이는 설계를 기술적 능력에서 참여의 습관(감독적 행위자성, 인식론적 경계)으로 방향을 바꾸는 별개의 범주입니다.([[generative-ai-mediational-agent-sociocultural-2026]])
- **공동체와 인식론적 권위:** [[ojeda-ramirez-community-based-ai-learning|공동체 기반 AI 학습]]은 협업이 또한 *누가 권위자인가*의 문제이며, AI 참여를 학습자들의 생활 인식론에 기반에 두고 있음을 보여 줍니다.
- **데이터 기반 특성 발견:** [[principal-trait-analysis-human-ai-skills-2026|주요 특성 분석(Principal Trait Analysis, PTA)]]은 대규모 [[llm]] 대화 코퍼스에서 상호작용 "특성"의 도출을 자동화합니다 — 이는 PCA에 영감을 받은 4단계 파이프라인으로, 행동 관찰을 추출하고, 그것을 후보 특성으로 군집화하며, 각 협력자를 점수 매기고, 가장 구별되는 특성을 선택합니다. 학생–AI-튜터 코퍼스와 개발자–코딩 에이전트 코퍼스에서 평가된 PTA는 결과를 설명하고 예측하는 특성을 발견하며(예: 교육 환경에서 깊은 개념적 참여는 긍정적으로, 과제 위임은 부정적으로), 그리고 — 그것들이 아직 학기/환경 전반에 걸쳐 일반화되지 않거나 학습 곡선 궤적을 보이지 않기 때문에 — 저자들은 이 특성들이 아직 "기술"로 해석될 수 없다고 주장합니다. 이것은 [[ai-literacy]] 프레임워크와 [[self-report-measures|자기 보고 측정]]에 대한 확장 가능하고 객관적인 보완재를 제공하며, 교육자들이 "AI 사용 기술"을 어떻게 가르치는지를 직접적으로 알려 줍니다.
- **CAI 세대 전반에 걸친 가장 지속적인 우려로서의 인간–AI 관계.** [[conversational-ai|대화형 AI 에이전트]]의 엄브렐라 리뷰(Ganguly et al. 2025, 리뷰 34편)는 인간–AI 관계에 관한 우려 — 과잁 의존, 사회적 고립, 비인격화, 정서적 의존, [[explainable-ai|투명성]], 책임 — 이 GenAI보다 앞서 모든 CAI 세대에 걸쳐 가장 빈번히 논의되는 [[ethics|윤리]]적 쟁점임을 발견합니다. 이것은 "보존 대 대체" 질문을 CAI 윤리의 중심에 위치시키며, 협업의 가치가 설계에 의해 결정된다는 것(누가 생성하고, 누가 결정하며, 책임이 어떻게 공유되는가)을 강화합니다.([[conversational-ai-agents-umbrella-review-2026]])
- **초보자에게 실시간 *전문성*을 확장하는 AI — 첫 라이브 튜터링 RCT.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang 외(2024)]]의 [[rct|무작위 대조 시험]](900명의 튜터, 소외된 공동체의 [[k-12]] 학생 약 1,800명)은 AI를 학생 쪽이 아니라 *튜터* 쪽에 배치했습니다: Tutor CoPilot은 경험 많은 튜터의 생각 말하기 추론에서 구축된, 전문가와 유사한 실시간 제안을 생성했고, 초보 튜터는 그것을 수정하거나 거부할 수 있었습니다. 처리된 튜터의 학생들은 주제를 숙달할 가능성이 4 p.p. 더 높았고(p < 0.01), 가장 낮게 평가된 튜터의 학생들 사이에서는 9 p.p.의 향상이 나타났으며 — 이들은 더 높게 평가된 튜터의 대조 결과와 맞먹는 수준으로 상승했습니다 — 연간 튜터당 약 \$20의 비용으로. 이 발견은 [[teacher-role|교사/튜터 보강]]을 [[equity-in-ai-education|공정한]] 인간-AI 협업 양식으로 삼는 강한 경험적 근거입니다: 인간은 교육학적 판단과 자율성을 유지하는 반면, AI는 확장 가능한 전문성을 공급합니다.
- **제한된 전문가: 교사들이 AI와 권한을 어떻게 분할하는가.** [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert, Briceno, Tabarsi & Barnes (2026)]]는 여섯 명의 중등 교사가 자신의 교실을 위해 LLM 챗봇을 프로토타이핑하고 교사와 시스템 사이에 권한이 어떻게 분배되어야 하는지를 분석한 참여적 설계 연구를 수행했습니다. 교사들은 일관되게 AI를 *제한된 전문가* - 엄격히 정의된 영역에 국한되고 인간 감독 하에 작동하는 전문적 능력 - 로 규정했으며, 그 제한성을 두 가지 차원으로 나누었습니다: *권한 경계*(학생 학습과 안전에 대한 전문적·법적 책임이 위임될 수 없는 곳)와 *전문성 경계*(시스템이 개별 학생, 교실 역학, 제도적 규범에 대한 교사의 맥락적 지식을 결여하는 곳)입니다. 프로토타입을 Gagné의 교수 9사건에 매핑한 결과, 위임은 전부 아니면 전무가 아니라 선택적임이 드러났습니다: 교사들은 콘텐츠 제시, 연습 문제 제공, [[scaffolding]], 형성적 [[feedback]]에 대해서는 AI를 환영했지만, 학습 목표를 학생에게 알리거나 [[summative-assessment|총괄적]] [[assessment]]를 넘기는 것은 거부했습니다. 설계적 읽기는 협업 인터페이스가 모델이 능력이 있는 곳뿐 아니라 인간이 결정 역할을 유지하는 곳을 가시적으로 만들어야 한다는 것입니다.
- **역할은 명명될 뿐 아니라 적응해야 합니다.** [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]]는 고정된 "peer" AI 동반자가 더 긴 북토크 상호작용을 유지했지만 대화를 지배했고(더 낮은 학생 어절/문장 비율) [[affective-computing|정서]]적 천장에 부딪혔음을 보여 주며, 협업은 단일한 정적 페르소나보다 동료, 조수, 조언자 사이를 전환하는 역할-*적응적* 논리를 요구한다고 주장합니다.
- **교사 측 공동 설계와 역할 구조 또한 협업입니다.** 학생을 향한 파트너를 넘어, 교사들은 GenAI와 협업하여 교수를 설계합니다. [[wang-teacher-ai-co-design-review-2026|Wang 외(2026)]]는 학습 과제의 교사–AI 공동 설계를 [[meta-analysis-systematic-review|체계적으로 검토]]하며, 교사와 AI가 공동으로 설계를 산출할 때 발생하는 협업 양식과 긴장(행위자성, 인식론적 권위, 통제)을 도표화합니다; [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]]는 AI 설계된 차별화된 집단 활동의 질(역할 풍부성, 시너지, 수준 정렬)을 결정하는 것은 AI 유창성이 아니라 교사의 교육학적 전문성임을 발견하며, 교사를 "[[multilingual-learning|이중언어적]] 학습 설계자"로 위치시킵니다.
- **집단에서 행위자이자 협업 공간인 GenAI.** [[xu-genai-collaborative-space-2026|Xu 외(2026)]]는 작은 [[higher-ed]] 팀을 관찰하고, GenAI의 역할이 협상되고 구성 가능함 — 종속적 조수부터 경쟁하는 동료까지 — 을 보여 주며, 동기적 공유 사용은 공통 토대를 유지하는 반면 비동기적 사적 사용은 투명성을 파편화하고, GenAI를 행위자이자 상호작용적 협업 공간으로 다루는 GenAI-Supported Cooperative Work 렌즈를 제안합니다.
- **교실 협업의 상호보완적 두 절반.** 두 편의 2026년 연구가 교실에서 인간-AI 협업의 상호보완적 두 절반을 도표화합니다. MeduAI-SP([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]])는 [[medical-education|임상]] 교육에서 "기능적 상호보완성"을 주장합니다: AI 에이전트는 반복적인 역할 연기, 일관된 환자 [[simulation]], 체크리스트 감시, [[socratic-method|소크라테스적]] 프롬프트, 예비적 [[formative-assessment|형성적]] 피드백을 처리하는 반면, 교수진과 인간 표준 환자는 맥락적 해석, 미묘한 정서적 반응, 개별화된 교정, 전문성 평가, 준비 판단을 제공합니다 — 대체는 오류 결과, 과제 불확실성, 관계적 민감성, 이용 가능한 인간 검토에 의해 제한되며, AI 시스템은 임상 역량을 자율적으로 판단하는 것으로부터 명시적으로 금지됩니다. 반대 방향에서, 45명의 학생으로 구성된 3인간/3에이전트 혼합 윤리 토론([[ethics-training-agents-group-ethics-discussion-2026|Seo et al., 2026]])은 양날의 패턴을 기록합니다: 에이전트가 사회적 장벽을 낮췄지만(참여자들은 에이전트가 감정이 없어 더 직접적으로 말했고, 침묵을 채울 의무를 느끼지 않았습니다), 그러나 그와 동일한 편안함이 상호작용을 인간으로부터 멀어지게 했습니다 — 질문의 79.7%가 에이전트에게 갔으며, 이는 그들의 가용성이 예측하는 60%에 비해 높습니다(p = .017). 주목할 만하게, 다른 인간들의 존재는 참여자들로 하여금 AI를 더 존중하여 대하게 했으며, 이는 인간의 공동 현전이 AI 참여를 조정하는 것 자체의 어포던스임을 시사합니다.

- **얽힘 유형은 학생에게 요구하는 바가 다르며, 이것이 일부가 드문 이유입니다.** [[sun-student-genai-entanglement-literacy-demands-2026|Sun, Dohn and Rehm (2026)]]는 인식론적 작업이 학생과 시스템 사이에 어떻게 공유되는지에 따라 102편의 고등교육 연구를 분류하고(어시스턴트(Assistant), 가능화자(Enabler), 통합자(Synthesizer), 생성자(Generator), 재상상가(Reimaginator)), 역량을 개별 학생에게 귀속되게 유지하는 두 형태가 각각 코퍼스의 42.16%를 차지함을 발견한 반면, 저작권을 분배하는 형태들은 여전히 주변에 머뭅니다. 그들의 설명은 기술적이라기보다 제도적입니다: 드문 유형들은 학생들이 자신이 산출하지 않은 산출물에 대해 인식론적 책임을 지면서도 여전히 개별 저자로서 평가되도록 요구하며, 노동 분배 자체가 아니라 그 모순이 그것들을 실천 밖에 머물게 합니다. 설계적 대응은 인식론적 작업의 분배를 명시적으로 만들고, 활동을 그 스펙트럼에 걸쳐 순차적으로 배치하며, 책임이 어떻게 공유되었는지에 대한 성찰을 구축하는 것입니다.

### 연결

인간-AI 협업은 [[human-in-the-loop-ai]](감독), [[agentic-ai]](자율성), [[teacher-role]](교사의 변화하는 업무), [[scaffolding]] 및 [[metacognition]](협업이 학습을 지원하는 방식), 그리고 [[cognitive-offloading|과잁 의존]](협업이 대체가 될 때의 실패 양상)과 연결됩니다. 이것은 [[ai-literacy]], [[self-regulated-learning]], [[student-experience]]에 걸친 핵심 주제입니다.

## 연결된 개념
- [[pedagogical-partnerships]] — 교육학적 파트너십
- [[community-of-inquiry]] — 탐구 공동체(인간-GenAI 사회기술적 성취로서의 존재)
- [[student-ai-interaction]]
- [[generative-ai]]
- [[ai-literacy]]
- [[llm]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[creativity]]
- [[chemistry-education]] — 화학 교육과 AI: 실험실, 형성적 평가, LLM의 한계, 실험의 철학
- [[biology-education]] — 생물 교육과 AI: 실험실 조교, 생물학에서의 AI 리터러시, 비판적 사고, 전문 도구
- [[human-in-the-loop-ai]] — 감독
- [[agentic-ai]] — 자율성
- [[productive-failure]]
## 연결된 문서
- [[bjet-many-hands-make-light-work-2026]] — GenAI 다중에이전트 시스템과의 짝 작업이 설계 프로젝트에서 이겼으나, 비판적 사고 인식은 혼자 작업한 사람들에게서만 상승했다(Chu 외 2026)
- [[dang-human-ai-collaboration-competency-2026]] — HACC: 영역, AI, 메타인지 역량의 동적 구성으로서의 협업 역량, 학습자 행위자성은 창발적(Dang 외 2026)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — 중등 교사들이 인간 감독 하에 제한된 전문가로서 교실 챗봇을 설계하다
- [[ai-integration-instructional-design-collaboratory-2026]] — 12개의 교사교육 과정 구현이 AI 통합을 교수 설계 문제로 다루다
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: 초보 튜터에게 인간-AI 전문성 확장의 첫 RCT
- [[think-first-chatgpt-later-2026]] — Think First, ChatGPT Later: 독립적 인간 창의성
- [[principal-trait-analysis-human-ai-skills-2026]] — 인간–AI 협업의 데이터 기반 "특성"
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[choi-teacher-ai-interaction-lesson-design-2026]] — 경험과 AI 숙련도에 따른 수업 설계에서의 교사-AI 상호작용 패턴(Choi 외 2026)
- [[tang-chatbots-learning-design-2026]] — 설계자들이 내장 챗봇을 콘텐츠 생성이 아닌 결과와 교육학에 대한 정합성 점검에 사용하다
- [[student-mental-models-genai]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[ojeda-ramirez-community-based-ai-learning]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[substitution-to-scaffolding-ai-harm-cycle-2026]] — 대체에서 비계로: 자기강화 해악 순환의 타파
- [[generative-ai-mediational-agent-sociocultural-2026]] — 매개적 행위자로서의 생성 AI
- [[conversational-ai-agents-umbrella-review-2026]] — 교육에서의 대화형 AI 에이전트에 대한 엄브렐라 리뷰
- [[ai-overreliance-complex-adaptive-system-2026]] — 복잡 적응 시스템으로 모델링된 AI 과잁 의존
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — 초등 북토크를 위한 역할 적응형 AI 동반자; 고정 역할 에이전트의 정서적 천장(Liao 2026)
- [[wang-teacher-ai-co-design-review-2026]] — 학습 과제의 교사–AI 공동 설계: 경향과 관점(Wang 외 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — AI 설계된 차별화 집단 활동에서의 역할 구조(Talebzadeh 2026)
- [[xu-genai-collaborative-space-2026]] — 소집단 역학에서 행위자이자 협업 공간인 GenAI(Xu 외 2026)
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — 임상 면담 훈련을 위한 비계 지향 다중에이전트 대규모 언어 모델 시스템의 평가
- [[ethics-training-agents-group-ethics-discussion-2026]] — 윤리적 성찰과 탐구를 위한 역할 놀이와 토론으로 집단 기반 윤리 교육을 촉진하는 윤리 훈련 에이전트
- [[scan-framework-task-assignment-generative-ai-2025]] — SCAN: 과제 배정의 연속체로서의 자동화, 보강, 협업
- [[bounded-reliance-ai-writing-feedback-2026]] — 제한된 의존: AI 생성 쓰기 피드백에 대한 EFL 학생 참여의 원천 신뢰성 관점
- [[human-ai-collaboration-academic-writing-2026]] — 5부분으로 구성된 구조화된 EFL 쓰기 워크플로; 검증과 책임 있는 사용 루틴이 짝 쓰기와 디지털 비판적 사고 향상을 이끌었다
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — 역할 역전: 학생들이 GAI 초보 학습자를 가르치며 GAI 교사에게 질문하는 동료들을 능가하다
- [[iqbal-human-genai-support-essay-revision-2026]] — 지원 유형이 수정 전략과 점수를 형성했으나, 어떤 전략도 향상을 예측하지 못했다; GenAI 향상은 과제 특정적일 수 있다
- [[kuhail-great-debaters-ai-facilitators-2026]] — 인간 대 AI 토론 진행자가 동등하게 평가되었다; 유용성 대 만족도가 재사용을 다르게 이끈다
- [[robinson-lesson-study-dialogic-engagement-ai-2026]] — 수업연구가 교사교육자의 대화적 AI 참여 설계 역량을 구축하다; 교육학적 사고로서의 프롬프트 엔지니어링
- [[sun-student-genai-entanglement-literacy-demands-2026]] — 다섯 가지 학생–GenAI 얽힘 유형, 그리고 저작권을 분배하는 유형이 주변에 머무는 이유(Sun, Dohn & Rehm 2026)

- [[teacher-ai-collaboration-work-engagement-2026]] — 심리적 가용성과 업무 소외를 통한 교사–AI 협업의 상반된 업무 참여 경로, 디지털 역량에 의해 제한됨
