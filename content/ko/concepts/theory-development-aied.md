---
title: 교육에서의 인공지능의 이론 개발
created: "2026-08-22T07:08:19-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [learning-theories]
research_method: [literature review]
page_kind: [framework]
confidence: medium
methods: [research-methods-aied]
translation_of: concepts/theory-development-aied
source_updated: "2026-10-25T15:55:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **[[ai-education|교육에서의 인공지능]]의 이론 개발** — 학습자, 교사, AI 시스템이 어떻게 상호작용하는지를 설명하는 이론과 개념 틀을 만들고, 발전시키고, 비판적으로 검토하는 학문적 작업입니다. 생성형 AI가 교육을 재구성하면서, 이 분야는 AI와 함께하는 학습에 관한 *새로운* 이론을 제안하는 한편 확립된 [[learning-theories|학습 이론]]을 다시 다듬고 있으며, 동시에 이론 사용에 관한 문서화된 약점이 AIEd 연구의 관통하는 한계로 남아 있습니다.

## 생각해 볼 질문들

- 우리는 흔히 교육에서의 AI에 '이론을 적용하는' 것에 관해 이야기하지만, 이 페이지는 이 분야가 실제로 새로운 이론을 발명하고 있는지를 묻습니다. 읽기 전에 말씀드리자면, 익숙한 틀([[behaviorism]]이나 구성주의 같은)이 생성형 AI를 포괄하도록 늘어날 때, 그것이 옳게 얻을 수 있는 것은 무엇이며, 조용히 왜곡할 수 있는 것은 무엇입니까?
- AI를 사용했을 때 여러분의 이해가 자라는 것을 느꼈던 때(또는 그 반대였던 때)를 떠올려 보십시오. '도구로 학습하기'와 '기계와 공동으로 지식을 구성하기'의 차이는 무엇입니까? 그 선을 어디에 긋겠으며, 기계가 공동 행위자라고 말하는 것이 과연 의미가 있습니까?
- AI 교육 연구의 상당수는 이론을 빈약하게 또는 전혀 쓰지 않는다고 비판받습니다. 어떤 AI 도구가 '작동했다'고 보여 준 연구를 읽는다면, 그 발견을 단순한 효과크기가 아니라 이론적으로 의미 있는 것이라고 부르기에 앞서, 그것이 왜 그리고 어떻게 작동했는지에 관해 여러분에게 무엇을 말해 주어야 합니까?
- 한 제안된 이론은 AI 토착 학생들이 AI가 수행을 부풀리기 때문에 자신의 학습을 과대평가한다고 주장합니다. 여러분이나 다른 사람이 AI를 많이 쓰고 나서 실제로 AI 없이 보여 줄 수 있는 것보다 더 유능하다고 느꼈던 것을 알아차린 적이 있습니까? 이것이 한 연구의 인위물이 아니라 진짜 현상이라는 가장 강력한 증거는 무엇이겠습니까?
- 이 페이지는 이론(학습의 메커니즘을 설명하는 것)과 철학(학습과 마음이 근본적으로 무엇인지를 묻는 것)을 구별합니다. AI에 관한 여러분 자신의 사유 가운데 어디에서 이 둘 사이를 오가는 자신을 발견합니까? 예컨대 어떤 틀이 학습을 잘 설명하는지뿐 아니라, 그것이 학습이 진정로 무엇인지를 포착하는지를 묻는 식으로 말입니다.
- 새로운 이론들이 나타나고 있습니다. 생성주의, 인식론적 공동 자율성, 인지 공유지가 그것입니다. 독자로서, 이것들 가운데 하나가 낡은 생각의 유행적 재낱말이 아니라 진정한 진전임을 무엇이 설득하겠습니까? AI와 함께하는 학습에 관한 좋은 새로운 이론이 설명할 수 있어야 할 것에 관해 여러분 자신의 시험을 세우십시오.

## 들어가며

AIEd에서의 이론 개발은 이 분야가 의존하는 응용 [[learning-theories|학습 이론]]과 AI 시대가 생산하는 새로운 구성 개념들 사이의 경계에 놓여 있습니다. [[learning-theories]]가 AI에 적용되는 확립된 이론들(행동주의, 구성주의, 인지 부하, 자기결정 등)을 목록화한다면, 이 개념은 *이론화 그 자체의 과정과 산출물*을 추적합니다. 즉 어떤 새로운 이론과 틀이 태어나고 있는지, 확립된 이론들이 어떻게 발전되고 있는지, 그리고 AIEd 연구가 이론화를 잘하는가의 방법론적 질문을 다룹니다.
- **자신의 비교 조건을 명시하는 틀.** Nakamura (2026)는 인지 노동의 분할을 설명 단위로 다루고, 조작들을 주변적-구성적 연속선 위에 등급화하여 놓으며, 증강과 침식이 정의되는 비교 조건을 명명하고, 조건화된 일곱 가지 검증 가능 명제를 도출합니다([[nakamura-augmentation-erosion-cognitive-offloading-stem-2026|Nakamura, 2026]]). 명제들이 구성들 사이의 차이를 예측하기 때문에, 평균 효과만 보고하는 연구는 그것들을 확인할 수도 반박할 수도 없습니다.

## AI와 함께하는 학습에 관한 새로운 이론들

기존의 틀을 적용하기보다 AI 시대를 위해 명시적으로 새로운 이론을 만드는 논문들의 증가하는 무리가 있습니다.

- **생성주의.** [[generativism-learning-theory|생성주의]]는 새로운 학습 이론으로 제안되며, 행동주의·인지주의·[[constructivist|구성주의]]·연결주의가 각각 생성형 AI가 깨뜨리는 하나의 가정 위에 놓여 있다고 주장합니다. 즉 관찰 가능한 산출물이 학습을 증명한다는 것(행동주의), 인지적 조작이 학습자 안에서 일어난다는 것(인지주의), 의미가 공급되는 것이 아니라 구성된다는 것(구성주의), 어려운 부분이 기존 지식으로 항해하는 것이 아니라 그것을 생성하는 것이라는 것(연결주의)입니다. 이것은 네 구성 개념 — 인식론적 동반자 관계, 분산된 자율성, 생성적 리터러시, 적응적 메타인지 — 에 이름을 붙이고 각각에 대한 평가 지표를 도출하며, AI가 매개하는 학습을 위한 뚜렷한 이론 패러다임에 이름을 붙이려는 직접적인 시도입니다. 그것이 하지 않는 것은 실패할 수 있는 명제를 제시하는 것입니다. 즉 기존 증거를 종합하는 입장 논문이므로, 아래의 에이전티비즘과 달리 어휘와 측정 의제를 제공할 뿐 반증 가능한 이론은 제공하지 않습니다.


- **AI 연결성.** [[ai-connectedness-adolescent-mental-health-2026|Fu and Zhao (2026)]]는 돌봄의 윤리와 신생태 이론을 통해 AI 시대를 위한 연결성을 재구성하며, 심리적으로 실재하면서도 윤리적으로 비대칭인 유대인 "인공지능 연결성"을 세 차원과 검증을 기다리는 여섯 명제로 정의합니다.

종합적 입장은 명제를 제시하는 경쟁적 시도를 하나 더합니다. 그것은 *합성 촉진*과 *저자됨의 유예* — 밀도 높게 목소리를 내면서도 저자 지어지지 않은 자아 — 에 이름을 붙이고, 한 인생 결정 서사의 평정된 저자됨과 일관성이 반대 방향으로 움직이는 교차 상호작용을 예측합니다([[synthetic-position-self-authorship-2026|Du et al. (2026)]]).
- **에이전티비즘.** [[yan-agentivism-learning-theory-ai-2026|Yan and Gašević (2026)]]는 에이전티비즘을 인간-AI 상호작용을 위한 중범위 학습 이론으로 제안하며, 학습을 AI와 함께하는 과제 완수의 성공이 아니라 인간 능력의 지속적 성장으로 정의하고, 네 메커니즘을 명시합니다. 즉 위임된 자율성, 인식론적 점검과 검증, 재구성적 내면화, 축소된 지원하에서의 전이입니다. 이 페이지의 다른 시도들과 그것을 갈라놓는 것은 반증 가능성입니다. 이것은 여섯 명제를 제시하는데, AI가 문제 틀짓기, 기준 설정, 정당화에 관한 학습자의 책임을 보존할 때 그것이 답을 공급할 때보다 학습이 더 강하며, 검증을 요구하는 것이 지연된 수행을 향상시키는 반면 재구성 없는 되풀이되는 저마찰 위임은 학습자의 자신의 유능감에 관한 보정을 약화시켜야 한다는 것이 포함됩니다.


교사 측 이론화는 이제 같은 검증 가능성 약속을 합니다. 역량–결정 모형은 [[tpack|AI-TPACK]] 역량을 태도와 지각된 행동 통제의 상류에 놓고 네 반증 조건 — 매개의 실패, 판별 붕괴, 조절 무효, 맥락 중복 — 에 이름을 붙이지만, 모형은 검정되지 않은 채 남아 있습니다([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

- **인식론적 공동 자율성.** [[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Learning with Machines]]는 학습자와 GenAI 시스템이 어떻게 공동으로 지식과 이해를 생산하는지에 관한 이론에 기초한 모형인 "인식론적 공동 자율성의 이론을 향하여"를 세웁니다.
- **인지적 동반자 관계 순환.** [[page-cognitive-partnership-cycle-human-ai-2026|Page (2026)]]는 여섯 단계의 재귀적 모형인 인지적 동반자 관계 순환(인간의 질문, AI의 확장, 인간의 성찰, 통합, 수정, 새로운 질문)을 제안하며, 학습을 프롬프트의 정교함이 아니라 학습자의 인지적 위치의 변화에 위치시키고, 같은 재귀가 사고를 대체하거나 왜곡하는 네 가지 실패 양식을 명명합니다.
- **결여된 인지 기저선(ACB).** [[absent-cognitive-baseline-2026|The Absent Cognitive Baseline]]은 AI 토착 학생들의 학업 자기평가에 있는 구조적 간극을 이론화합니다. 즉 AI가 수행을 부풀릴 때 학생들이 자신의 학습을 과대평가하는 이유를 설명하는 세 차원 틀입니다.
- **인지 공유지.** [[cognitive-commons-ai-expertise-regeneration|Cognitive commons and expertise regeneration]]은 공유자원 이론과 [[distributed-cognition|분산 인지]]에 의지하여, 합리적인 AI 도입 결정이 직업들이 갱신에 요구하는 공유 전문성의 웅덩이를 고갈시킬 수 있는 방식을 설명합니다.
- **수행 대 학습.** [[genai-performance-vs-learning|Performance-vs-learning]]은 AI에 의해 부풀려진 과제 수행과 지속적인 학습 사이의 날카로운 괴리를 이론화하며, 이 구별은 지식베이스의 [[learning-gains]] 증거에 걸쳐 되풀이됩니다.
- **인식론적 [[ai-literacy|AI 리터러시]](EAIL).** [[constructing-epistemic-ai-literacy-student-ai-co-programming|Epistemic AI Literacy]]는 AI 리터러시를 학생들이 생성형 AI와 공동으로 프로그래밍할 때 지식이 어떻게 구성되고 정당화되는가를 중심에 둔 과정 지향적 인식론적 역량으로 다시 틀짓습니다.

- **삼중 시스템 이론.** [[shaw-nave-cognitive-surrender-2026|Shaw and Nave (2026)]]는 이중 과정 설명을 **시스템 3** — 시스템 1과 시스템 2를 보충하고, 대체하고, 억제할 수 있는 AI로부터의 외적·자동화된·자료 기반 추론 — 으로 확장하며, 그 특징적 실패로서 AI 산출물의 비판적이지 않은 수용인 **인지 항복**에 이름을 붙입니다.
- **인지 관리.** [[credential-cognitive-stewardship-ai-assessment|Credential and cognitive stewardship]]는 AI가 만연한 평가 맥락에서 지식과 학습을 보호할 [[governance|제도적]] 책임을 이론화합니다.
- **공동 [[regulation]]과 인식론적 선제성.** [[ai-cognitive-partner-co-regulation-learning|공동 조절에서의 인지적 동반자로서의 AI]]는 집행 기능, [[metacognition]], 분산 인지, [[sociocultural-learning|사회문화]]적 발달을 발달 모형으로 통합하며, [[epistemic-proactivity-math|인식론적 선제성]]은 [[math-education|수학]]에서 AI에 대한 학생들의 행위자적 태도를 이론화합니다.
- **인간-GAI [[student-engagement|참여]] 패러다임.** [[strydom-human-gai-paradigms-2026|Strydom (2026)]]는 개인적 인식론적 신념의 다차원 모형에 토대를 둔 일곱 실행되는 인간-GAI 참여 패러다입(경계하는, 가능성 중심의, 증강된, 개척하는, 공생하는, 가치 기반의, [[equity-in-ai-education|형평성]])을 제시하여 이 분야의 "이론 결핍"을 다룹니다. 이것은 개인들이 AI에 관해 스스로를 다르게 위치시키는 방식에 관한 도구 중심이 아니라 인식론적 이론입니다.
- **생태학적 공동 자율성 틀.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]]는 [[generative-ai|생성형 AI]]가 인식론적 권위를 교사에게서 학생에게로, 다시 기계로 재배정한다고 주장하며, 관계적·규제적([[self-regulated-learning|SRL 순환]]에 대응)·[[pedagogy|교수법적]](교사 도입 연속선)의 세 상호 의존적 차원으로 공동 자율성을 정의하는 틀을 도입하며, 모두가 인간 인식론적 책무성(이의 제기 가능성, 출처, 도덕적·지적 공로의 위임 불가)이라는 양보할 수 없는 조건에 의해 제약됩니다. 이것은 [[agency]]를 [[usability-research|사용성]] 관심사가 아니라 *인식론적* 설계 문제로 위치시키며, 기관에 GenAI 통합을 다스리는 데 "균형"보다 더 정밀한 언어를 제공합니다.
- **관계적 인식론적 자율성과 인식론적 의존.** [[du-yuan-epistemic-dependence-2026|Du & Yuan (2026)]]는 AI가 매개하는 의존이 판단을 보존하는 때와 그것을 대체하는 때에 관한 비판적-통합적 설명을 제공합니다. 그들은 생산적 의존/해로운 의존 경계를 여섯 진단 기준(이의 제기 가능성, 회복 가능성, 전이, 추적 가능성, 분산된 책임, 인식론적 다원성)을 통해 운용화하고, 네 사회기술적 경로(유창한 권위, 마찰 없는 위임, 불투명한 종합, 제도화된 의존)를 추적합니다. 그들의 규범적 제안인 **관계적 인식론적 자율성**은 명시적 비대칭 — AI는 상호적 책임이나 정당한 권위 없이 추론을 형성할 수 있다 — 을 유지하면서 관계적 자율성과 인식론적 공동 자율성 노선을 확장하며, 제도적 수준에서 책임과 인식론적 정의를 통합합니다. AI와 함께하는 학습에 관한 이론으로서, 이것은 이 분야의 질문을 AI가 돕는지 해치는지에서 어떤 인식론적 행위가 보존되고, 변형되고, 대체되는지로 옮기며, 단순한 사용이 아니라 *의존의 설계*를 교수법적·제도적 개입의 대상으로 만듭니다.

## 확립된 이론의 발전

다른 작업들은 새로운 패러다임을 세우기보다 기존 이론을 AI 맥락으로 확장합니다. [[critical-thinking-paradox-genai-learning-2026|critical-thinking-paradox]] 작업은 [[cognitive-offloading|인지 부하 이론]]과 부하 감소 교수를 세 수준 틀로 통합하며, [[dollinger-equitable-assessment-ai-2026|equitable assessment]]는 GenAI의 붕괴 아래에서 [[assessment]]를 다시 이론화합니다. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim & Anderson (2026)]]는 [[community-of-inquiry|탐구 공동체]] 틀 자체를 재개념화합니다. 즉 GenAI를 도구, 대화적 동반자, 또는 추측적인 "네 번째 존재"로 틀짓기보다, 그것이 인지적·사회적·[[teacher-role|교수적]] 존재가 어떻게 실행되고, 증명되고, 다스려지는지를 재구성하는 *인식론적 조건*으로 재위치시켜, CoI 존재들을 인간–GenAI 집합체의 사회기술적 성취로 다시 만들어 내고, GenAI의 관여와 탐구의 질질이 인간 책무성을 통해 조건적으로 관련되는 구성 기반 휴리스틱을 제안합니다. 이것의 상당수는 실천을 위해 이론을 운용화하는 개념 틀 작업입니다([[drummond-genai-business-schools-framework-2026|비즈니스 스쿨 틀]], [[valid-student-simulation-llm-2026|valid simulation]]).

[[metacognitive-ownership-human-ai-regulation-2026|Lin and Chang (2026)]]는 [[self-regulated-learning]]과 인간–AI 조절을, 학습자가 지배하는 것이 무엇인지 — 기준, 평가적 판단, 통제의 위임 — 를 AI가 하는 것이 무엇인지만이 아니라 이름 붙여 확장합니다.

마찰의 역설은 확립된 이론의 또 다른 확장을 제공합니다. [[friction-paradox-generative-ai-education-abroad-2026|Gupta (2026)]]는 Bjork와 Bjork의 [[desirable-difficulties|바람직한 어려움]]과 Kapur의 [[productive-failure|생산적 실패]]를 해외 교육의 관계적 만남에 적용하여, 중요한 것은 생성형 조수가 얼마나 자주 쓰이는가가 아니라 학생이 그것에 얼마나 많은 해석적 자율성을 [[transfer-of-learning|전이]]하는가라고 논합니다. 이 틀은 개념적이며 다섯 명제를 경쟁 가설로 제시합니다.

[[ranieri-biagini-ai-higher-education-taxonomy-review-2026|Ranieri & Biagini (2026)]]는 Zawacki-Richter 등(2019)의 이 분야 기능 유형론을 발전시킵니다. 분류 가능한 응용 기능을 지닌 154편의 출판물 가운데 90편(58.4%)이 그 네 범주를 벗어났으며, 그들의 틀은 기능을 위임된 통제, 인식론적 위치, 내장된 교수법과 교차시킵니다.

[[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, and Stamper (2026)]]는 *기만적 과잉 일반화* — 지식 편집이 중요한 응용 제약을 생략하면서 올바른 행동을 만들어 내는 과잉 일반화된 생성을 낳는 실패 양식 — 을 이론화하여 ACT-R과 지식-학습-교수 틀을 발전시키며, 적응 ITS들과 [[k-12]] 소수 학습 자료 집합에 걸쳐 탐지/교정 절차를 경험적으로 검증합니다.

**현상학과 기술적 매개.** [[farazouli-navigating-uncertainty-teachers-genai-2026|Farazouli et al. (2026)]]는 기술적 매개의 확립된 후현상학적 틀(Ihde 1990; Verbeek 2006, 2011; Rosenberger & Verbeek 2015)을 교육에서의 AI 맥락으로 발전시킵니다. 새로운 이론을 제안하기보다, 그들은 그것을 적용하여 GAI [[conversational-ai|챗봇]]을 *다안정적 기술적 산출물*로 재개념화합니다. 즉 그 "스크립트"(빠른 반응성, 통과 점수를 얻을 수 있는 자연스러운 소리의 텍스트)가 교사들의 인식을 매개하고 그들의 실천을 재구성하여, 교사의 자신감을 불안정하게 만들고, 유능함이 뜻하는 것을 다시 만들며, 용인되는 사용에 관한 기악적 질문을 넘어 자신의 역할과 교수의 의미를 재평가하도록 밀어냅니다. 이것은 이론-*발전* 공헌입니다. 즉 인간–기술 관계에 관한 철학적 설명이 GAI가 확립된 교육 실천에 들어설 때 교사들이 경험하는 감정적·전문적 붕괴를 어떻게 설명하는지를 보여 줍니다.

추가의 틀 공헌은 [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi의 AI×Ed 유형론]]이며, 이것은 Kahn(1977)의 원래 "세 가지 상호작용"을 두 축 — AI의 역할(응용 도구 대 인간 지능에의 비유)과 최종 사용자(연구자에서 학습자까지) — 을 따라 확장하여 어떤 AIED 프로젝트든 위치시킵니다. 이 분야를 범주화하는 것을 넘어, 이것은 이론과 연구의 "인간 지능에의 비유로서의 AI" 노선을 되살릴 것을 주장하며, 학습의 계산적·에이전트 기반 모형(예컨대 그들 자신의 [[icap-framework|ICAP 틀]]의 계산적 모형)을 사용하여 현대 [[learning-theories|학습 이론]]과 계산적 모형화를 연결합니다. 이것은 이 분야가 응용적·자료 기반 작업으로 방향을 틀 때 대부분 버린 방법론적 방향입니다.

**이론적 다원주의로 가는 길로서의 비교 철학.** Xie(2026)는 이론 개발에 이르는 다른 길을 모형화합니다. 즉 하나의 전통 안에서 교육에서의 AI를 이론화하는 대신, 각 전통이 "다른 전통이 가리는 것을 보이게 하는" 비교적 대화를 꾸며내며, 그것들을 단일 틀로 종합하는 것을 명시적으로 거부합니다. 이 접근은 이론적 다원주의를 해결되지 않은 불일치가 아니라 방법론적 입장으로 다룹니다. 그는 비서구 전통이 논쟁을 다양화하는 것 이상을 할 수 있다고 주장합니다. 즉 그들은 AIEd 이론의 개념적 토대를 재형성할 수 있으며, 도가적 "道性"(도성), "修道"(수도), "真人"(진인)을 AI가 매개하는 조건에서 [[agency]], 교육의 인식론적 목표, [[ethics|윤리]]적 행동을 다시 생각하는 자원으로 재구성합니다. 그는 또한 그 한계를 명료하게 말합니다. 즉 그 공헌은 단일 저자의 비경험적이며, 그러한 번역에는 낭만화와 오리엔탈리즘을 피하기 위한 맥락화가 필요하다고 경고합니다.([[daoism-ai-education-philosophy-2026]])

## AIEd의 이론 사용 문제

이 분야의 이론화는 고르지 못합니다. [[limitations-in-aied-research|AIEd 연구의 한계]]는 AIEd 연구가 이론을 흔히 빈약하거나 비판적이지 않게 사용함을 문서화합니다. 이것은 재현 가능성과 측정의 공백과 나란히 반복되는 방법론적 약점입니다. 고찰들은 많은 AIEd 논문이 이론을 피상적으로 또는 전혀 적용함을 발견합니다(예컨대 소수의 연구만이 개입을 학습 이론에 기반을 둔다고 지적하는 [[llm-critical-thinking-teamwork-review|문헌 고찰]]). 이것은 이론 *개발* — 그리고 이론 *사용* — 을 학문적 산출물만큼이나 질적 관심사로 만들며, [[research-methods-aied|연구 방법]]과 [[ai-ed-evaluation]]에 연결됩니다.

## 교육에서의 AI의 철학과의 관계

이론 개발과 [[philosophy-of-ai-in-education|교육에서의 AI의 철학]]은 이 지식베이스의 기초적 작업의 상호 보완적이면서도 구별되는 갈래입니다. **이론 개발**은 AI와 함께하는 학습의 *메커니즘*을 만들어 내고 경험적으로 검정합니다. 즉 학습자와 AI가 어떻게 상호작용하는지를 설명하고 예측하는 생성주의, 인식론적 공동 자율성, 결여된 인지 기저선 같은 이름 붙여진 이론과 틀이 그것입니다. **철학**은 그 메커니즘이 놓이는 *전제*를 따져 묻습니다. 즉 무엇이 지식으로 셈되는지, 누가 아는 자로 셈되는지, 학습자가 근본적으로 무엇인지입니다. [[learning-with-machines-toward-a-theory-of-epistemic-co-agency|인식론적 공동 자율성]] 같은 이론은 메커니즘을 제안하면서 분산 인지와 [[agency]]에 관한 철학적 약속을 암묵적으로 채택합니다. 철학은 그 약속들을 명시적이고 논쟁 가능하게 만듭니다. 이론 개발이 어떤 틀이 학습을 잘 설명하는지를 묻는 곳에서, 철학은 그것이 학습과 마음이 진정로 무엇인지를 포착하는지를 묻습니다. 이 두 갈래는 이 분야의 가장 기초적인 논문들에서 만나며, 그것들은 흔히 둘을 동시에 합니다.

## 흔한 오해

**"도구가 작동했다는 발견은 이론적 공헌이다."** 그것은 아니다. 틀이 명제를 통해 *구성들 사이의 차이*를 예측하는 곳에서, 평균 효과만 보고하는 연구는 **그것들을 확인할 수도 반박할 수도 없습니다**. 설계가 이론이 말하는 구별을 볼 수 없기 때문입니다. 평균 향상을 보여 주는 시험은 무언가 일어났다는 것을 말해 줄 뿐 어떤 메커니즘이 그것을 일으켰는지는 말해 주지 않으므로, 이론은 이전과 정확히 같은 정도로만 뒷받침된 채 남습니다.

**"확립된 이론을 AI에 적용하는 것이 이론 개발이다."** 이 페이지 자체의 이론 사용 문제는 그렇지 않다고 말합니다. 적용은 발전이 아니며, 이 분야의 되풀이되는 양상은 검증 가능한 예측이 아니라 어휘로 쓰인 차용된 구성 개념입니다. 반증 가능한 차이를 만들어 내지 못하는 차용된 틀은 이론이 아니라 장식이기 때문에 이 구별이 중요합니다.

**"AI의 교수법적 기능에 관한 기존 유형론이 이 시스템들이 하는 일을 이미 포괄한다."** 그것들은 그 상당 부분을 포괄하지 못합니다. 분류 가능한 응용 기능을 지닌 154편의 출판물 가운데 **90편(58.4%)이 선행 틀의 네 범주를 벗어났으며**, 새로운 작업이 기능을 위임된 통제, 인식론적 위치, 내장된 교수법과 교차시키는 이유가 여기에 있습니다. 다섯 건 중 거의 세 건을 오분류하는 유형론은 이 분야의 공통 어휘가 될 수 없으며, 그 간극은 논문의 결함이 아니라 현상에 관한 발견입니다.

## 실천을 위한 함의

**교수자와 교수 설계자에게**

- 연구가 평균 효과를 보고할 때, 그것을 *여러분의* 구성에 관한 지침으로 다루지 마십시오. 이론 수준의 주장은 구성들 사이의 차이에 관한 것이며, 평균은 여러분이 어느 구성을 운영 중인지 알려 줄 수 없습니다.
- 채택하는 모든 틀에 대해 그것이 여러분 자신의 환경에서 거짓으로 드러날 수 있는 무엇인가를 예측하는지 물으십시오. 그럴 수 없다면 어떤 결정에도 도움이 되지 않을 것입니다.
- 기존 범주가 여러분의 사례를 놓칠 것을 예상하십시오. 분류된 출판물의 절반 이상이 표준적 네 갈래 구분에 들어맞지 않았습니다.

**개발자에게**

- 단일한 대표 효과가 아니라 구성을 보고하십시오. 여러분의 설계가 특정한 위임된 통제와 인식론적 태도의 조합을 구현한다면 그렇게 말하십시오. 그것이 이론이 말하는 단위이며 다른 팀이 재현해야 하는 단위입니다.
- 평균 결과의 힘으로 메커니즘 주장을 내세우지 마십시오. 메커니즘에 요구되는 증거 유형은 평균이 아니라 대비입니다.

**연구자에게**

- 이론적 공헌을 의도한다면 구성 대비를 위해 설계하십시오. 이론 개발로 출판된 평균 효과 시험은 이 분야에서 가장 흔하고 가장 덜 유용한 산출물입니다.
- 도입하는 모든 틀에 명시적이고 반증 가능한 명제를 붙이고, 어떤 구성 차이가 그것들을 반박했을지를 보고하십시오.

## 연결된 개념

- [[learning-theories]]
- [[philosophy-of-ai-in-education]]
- [[limitations-in-aied-research]]
- [[research-methods-aied]]
- [[generative-ai]]
- [[constructivist]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[community-of-inquiry]]
- [[cognitive-surrender]]

## 연결된 문서
- [[yan-agentivism-learning-theory-ai-2026]] — 네 메커니즘과 여섯 검증 가능 명제를 지닌 인간-AI 상호작용을 위한 중범위 학습 이론(Yan and Gašević 2026)

- [[deceptive-overgeneralization-adaptive-learning-2026]] — 기만적 과잉 일반화: 적응적 숙달이 학습자가 언제 행동을 보류할지를 알기 전에 연습을 멈출 수 있다(An, McLaren & Stamper 2026)
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[generativism-learning-theory]] — 새로운 학습 이론으로서의 생성주의
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — 인식론적 공동 자율성의 이론을 향하여
- [[du-yuan-epistemic-dependence-2026]] — 관계적 인식론적 자율성과 생산적 의존/해로운 의존 경계(Du & Yuan 2026)
- [[absent-cognitive-baseline-2026]] — 결여된 인지 기저선(ACB)
- [[cognitive-commons-ai-expertise-regeneration]] — 인지 공유지와 전문성의 갱신
- [[genai-performance-vs-learning]] — 수행 대 학습
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — 인식론적 AI 리터러시(EAIL)
- [[credential-cognitive-stewardship-ai-assessment]] — 자격과 인지 관리
- [[ai-cognitive-partner-co-regulation-learning]] — 공동 조절에서의 인지적 동반자로서의 AI
- [[epistemic-proactivity-math]] — 수학에서의 인식론적 선제성
- [[ranieri-biagini-ai-higher-education-taxonomy-review-2026]] — 기능 유형론의 확장: 분류 가능한 154편 가운데 90편(58.4%)이 원래의 네 범주 밖에 있다(Ranieri & Biagini 2026)
- [[page-cognitive-partnership-cycle-human-ai-2026]] — 인지적 동반자 관계 순환
- [[friction-paradox-generative-ai-education-abroad-2026]] — 해외 교육에서 해석적 자율성에 적용된 바람직한 어려움과 생산적 실패
- [[strydom-human-gai-paradigms-2026]] — 인식론적 신념에 토대를 둔 일곱 인간-GAI 참여 패러다임
- [[critical-thinking-paradox-genai-learning-2026]] — 비판적 사고 역설
- [[dollinger-equitable-assessment-ai-2026]] — GenAI 아래에서의 공정한 평가
- [[shaw-nave-cognitive-surrender-2026]] — 삼중 시스템 이론과 인지 항복: AI가 인간 추론을 어떻게 재구성하는가(Shaw & Nave 2026)
- [[reconceptualizing-community-inquiry-generative-ai]] — 생성형 AI 시대에 탐구 공동체를 재개념화하기
- [[farazouli-navigating-uncertainty-teachers-genai-2026]] — 대학 교사들의 GAI 경험과 인식: 취약성, 평가 재고, 위험에 처한 학생 학습(Farazouli et al. 2026)
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[daoism-ai-education-philosophy-2026]] — 대안적 AI 철학: 교육에서의 AI를 위한 방법으로서의 도가
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: 교육 대화의 감사 가능한 코딩을 위한 서술 기반 스키마
- [[metacognitive-ownership-human-ai-regulation-2026]] — 메타인지적 소유: 구성 개념 정의, 경계, 연구 의제

- [[synthetic-position-self-authorship-2026]] — 합성적 입장: 합성 촉진과 저자됨의 유예에 이름을 붙이는 교차 예측을 지닌 대화적 자아의 시도
- [[capability-decision-model-teacher-readiness-2026]] — 네 반증 조건을 지닌 반증 가능한 역량 우선 교사 준비 모형
- [[ai-connectedness-adolescent-mental-health-2026]] — 인공지능 연결성: 후일 검정을 위한 여섯 반증 가능 명제를 지닌 세 차원 구성 개념
