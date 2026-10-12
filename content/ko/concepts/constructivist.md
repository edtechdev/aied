---
connected_resources: [vibes-diy]
title: 구성주의
created: "2026-07-28T10:44:35-04:00"
updated: "2026-09-30T10:54:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [active-learning, collaborative-learning, experiential-learning, learning-theories, scaffolding, self-regulated-learning]
technology: [generative-ai]
confidence: high
translation_of: concepts/constructivist
source_updated: "2026-09-30T10:54:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **구성주의** — 지식이 교수자나 시스템으로부터 수동적으로 전달되기보다 경험, 성찰, 상호작용을 통해 학습자에 의해 능동적으로 구축된다는 [[learning-theories|학습 이론]]입니다. [[ai-education|AI 교육]]에서 구성주의는 AI 도구가 학습자를 대신해 [[cognitive-offloading|인지적 작업]]을 수행하기보다, 학습자 자신의 지식 구성 — [[prompt-engineering|프롬프트 주기]], 질문하기, [[scaffolding]] — 을 뒷받침해야 한다는 설계 약속의 기반이 됩니다.([[ai-vocational-education-training-review]])([[genai-mindtool-generative-learning]])

## 생각해 볼 질문들

- 수업에서 '배웠다'고 생각했지만 나중에 실제로 설명하거나 사용할 수 없었던 적이 있으십니까? 무엇이 빠져 있었으며, 그것은 진정한 이해가 어떻게 형성되는지에 대해 무엇을 말해줍니까?
- 구성주의는 지식이 전달되는 것이 아니라 구축된다고 주장합니다. 그것이 사실이라면, AI 튜터가 정답을 그저 제공할 때 무슨 일이 일어날까요?
- '명목상으로는 구성주의, 실제로는 [[behaviorism]]'라는 표현은 [[active-learning|능동적 학습]]을 지원한다고 주장하면서 실제로는 훈련과 연습을 실행하는 AI 도구를 묘사합니다. 이런 격차를 보신 적이 있으십니까? 평가하고 있는 도구에서 그것을 어떻게 알아차리시겠습니까?
- 페퍼트의 구성주의는 우리가 공유 가능한 산출물을 만듦으로써 가장 강력하게 배운다고 말합니다. AI 시대에 한 틀은 이렇게 표현합니다. 'AI가 코드를 쓰지만, 학생이 모형을 쓴다.' AI가 mechanics를 처리할 때 학생이 실제로 구성하는 것은 무엇입니까?
- 어떤 AI 도구는 '생성 거부'를 실행합니다 — 답을 삼기고 대신 질문을 던지는 것입니다. 도움을 제공하는 것보다 의도적으로 삼기는 것이 언제 더 교수법적으로 가치 있을 수 있을까요?
- 지식이 구성되는 것이라면, AI 리터러시는 AI에 관한 강의를 듣는 것으로 배워지지 않습니다 — AI를 사용하고, 비판하고, 함께 만듦으로써 배워집니다. 이것이 여러분이나 여러분의 학생들에게 AI 리터러시를 어떻게 가르쳐야 하는지에 대해 어떤 함의를 줍니까?

## 들어가며

구성주의는 단일 교의가 아니라 하나의 이론 가족이지만, 그 핵심 주장은 공유됩니다. 학습자들은 의미를 흡수하지 않으며, 그것을 구성합니다. 이 관점에서 이해는 전달된 사실의 축적이 아니라 경험을 심성 모형으로 능동적으로 조직화하는 것입니다. 이것은 AI 교육이 어떻게 설계되고, 평가되고, 가르쳐져야 하는지에 직접적 함의를 주며, 교실에서 [[generative-ai|생성형 AI]]의 약속과 위험을 모두 설명하는 데 도움이 됩니다.

**[[mishra-control-vs-agency-history-2025|Mishra et al.]]**는 페퍼트의 구성주의(Logo, 마이크로월드, 디버깅으로서의 학습)를 AIED 역사 속 창조적 주체성 대 체계적 통제의 경쟁하는 두 비전으로서 앤더슨의 인지 튜터와 대비합니다.

## 핵심 아이디어

- **지식은 구성되는 것이지 전달되는 것이 아니다.** 학습자들은 세계에 작용하고, 새로운 정보를 [[prior-knowledge|선행 지식]]과 조율하고, 결과를 성찰함으로써 이해를 구축합니다. 정답을 그저 제공하는 AI 튜터는 지속적인 이해를 만들어내는 구성 활동을 우회합니다.([[generative-refusal-ai-tools-for-thought]])
- **선행 지식이 새로운 학습을 형성한다.** 새로운 생각은 학습자의 기존 심성 모형을 통해 해석되므로, 교수는 학습자가 이미 아는 것을 표면화하고 거기에 기반을 두어야 합니다 — 이것은 [[misconceptions]]과 학습자에게 적응하는 AI 튜터에 직접 관련되는 원리입니다.
- **사회적 상호작용이 구성을 뒷받침한다.** 주요 한 갈래 — 사회적 구성주의 — 는 의미가 대화, 협력, 문화적으로 [[situated-learning|상황화된]] 활동을 통해 공동 구성된다고 봅니다. 이것은 구성주의를 [[collaborative-learning]]과, AI가 지시하기보다 촉진하는 [[socratic-method]] 접근에 연결합니다.([[ai-agents-constructive-conflict-design-education-2026]])
- **구성은 활동에서 가시적이다.** 학습자들은 생성하고, 설명하고, 산출함으로써 자신의 이해를 드러내고(그리고 공고히) 합니다 — 이것이 [[icap-framework|ICAP 틀]]이 '구성적'이고 '상호작용적'인 [[student-engagement|참여]]를 '능동적'이고 '수동적' 양식보다 높게 두는 이유입니다.([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])
이 이론의 한 경계는 구성주의가 인간 중심의 인식론적 주체성을 전제하므로, 추론을 모의하고 의미를 공동 구성하는 AI를 설명하기에는 부족하다는 것입니다. 제안된 보충은 인식론적 공동 주체성인데, 여기서 학습자들은 AI 출력을 논쟁 가능한 것으로 다루고 무엇이 지식으로 셈되는지에 대한 인식론적 주권을 유지합니다([[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Samuel(2026)]]).

## 구성주의(Constructionism)

**구성주의(Constructionism)**는 지식이 학습자가 *외부적이고 공유 가능한 산출물* — 자신이 설계하고, 만들고, 디버깅하는 물리적 또는 디지털 대상 — 을 구성할 때 가장 강력하게 이루어진다는 구체적 주장을 더하는 구성주의의 분파입니다. 피아제적 구성주의가 지식의 내적 심성 구성에 초점을 맞추는 데 비해, 구성주의는 이 구성이 유형의 무언가를 만듦을 통해 가장 잘 뒷받침되고 가시화된다고 봅니다(Harel & Papert, 1991). [[history-of-aied|AIED 역사]]에서 구성주의는 이 분야의 중심적 통제 대 주체성 긴장 속 '주체성'의 극으로 서며, 앤더슨의 구조화된 인지 튜터와 대비됩니다.

- **Logo와 마이크로월드.** 페퍼트는 상징적인 '거북이'와 함께 Logo(1967)를 공동 개발했습니다 — 아이들이 보이는 에이전트에게 명령하고 디버깅함으로써 기하와 다른 강력한 생각들을 탐구하는 프로그래밍 마이크로월드입니다. 디버깅은 실패가 아니라 학습의 자연스럽고 가치 있는 부분으로 재규정됩니다.([[mishra-control-vs-agency-history-2025]])
- **구성이 교수보다 우선.** 구성주의는 [[teacher-role|가르치는 것]]이 지식의 효율적 전달이라는 가정인 '교수주의'를 비판하고, 대신 학습자들을 프로젝트와 실험을 통해 이해를 구성하는 [[agentic-ai|자율적 행위자]]로 자리매김합니다(Papert, 1980, *Mindstorms*).
- **현대 [[edtech-platform|edtech]]로의 계보.** Logo의 창조적이고 직접적인 구성에 대한 강조는 [[game-based-learning]], [[project-based-learning]], [[educational-robotics|로보틱스]](LEGO Mindstorms, [[cs-education|Scratch]], 프로그래밍 가능한 브릭), 그리고 더 넓은 메이커 운동의 기반이 됩니다.
- **AI에서의 구성주의 유산.** 구성주의는 AI 도구가 답을 제공하는 교수자보다 학습자가 지시하는 **만들기 위한 재료** — 사고 도구이자 창조적 공동 구성자 — 로 기능해야 함을 함의합니다. 이것은 이 문서고의 생성형 AI에 대한 [[genai-mindtool-generative-learning|mindtool]] 틀과 학습 과정에 대한 [[agency|학습자 주체성]]을 보존하는 설계 약속의 직접적 조상입니다.([[educational-robotics-pathways-2026]])

- **GenAI 시대의 구성주의: 코드가 아니라 모형을 씀으로써 배우기.** 코드를 생성하는 AI의 도래는 구성주의를 약화시키기보다 설계 대응으로서 *되살렸습니다*. Gousopoulos의 **Code-to-Learn with Generative AI(CtL-GenAI)** 틀은 구성주의, 인지 부하 이론, [[self-regulated-learning]], [[icap-framework|ICAP]] 참여 모형, [[productive-failure|생산적 실패]], 그리고 AI로 소프트웨어를 만드는 고등학생을 위한 [[sociocultural-learning|사회문화적]] 비계를 종합합니다. 그것의 조직적 주장 — **"AI가 코드를 쓰지만, 학생이 모형을 쓴다"** — 은 구성 대상을 재규정합니다. GenAI가 코드를 쓰는 구문 작업을 할 때, 학습자의 구성은 코드가 표현하는 *개념적 모형*을 만들고 디버깅하는 것으로 이동합니다. CtL-GenAI는 모형 저작을 네 측면과 관찰 가능한 지표를 담은 순서가 있는 수준들을 가진 구성으로 정의하고, 그러한 학습이 실제로 일어나는지를 시험하기 위해 부분 학점의 반증 가능한 측정 모형을 공식화합니다.([[code-to-learn-genai-artifact-construction-2026]])([[ai-writes-code-student-writes-model-2026]]) 이것은 구성주의의 고전적인 '공유 가능한 무언가를 만들고 디버깅하라'가 학생이 만들고 성찰하는 산출물이 단순한 소스 코드가 아니라 가시화된 심성 모형이 되도록 갱신된 것이며 — 그리고 그 주장이 경험적으로 시험 가능해지도록 이론을 명시적 측정 프로그램과 결합합니다.

구성주의는 따라서 학습 이론이자 동시에 비판입니다. 교육의 목적이 기존 지식 구조를 재현하는 것이 아니라 학습자들이 그것을 구성하고 변형할 수 있도록 권한을 부여하는 것이라고 주장합니다 — 이 입장은 AI 교육이 확립된 위계를 강화하는지 도전하는지에 대해 명확한 함의를 줍니다.

## AI 교육과 구성주의

### 구성주의적 학습을 위한 AI

잘 설계된 AI는 대규모로 구성을 가능하게 할 수 있습니다. [[intelligent-tutoring]]과 [[intelligent-tutoring|AI Tutoring]] 시스템은 답을 넘겨주기보다 문제를 제기하고 [[help-seeking]]을 안내할 수 있고; [[simulation]]과 [[game-based-learning]] 환경은 학습자가 심성 모형을 만들고 시험하도록 하며; AI가 뒷받침하는 [[project-based-learning]]과 [[experiential-learning]] 활동은 학습자에게 진정한 구성 과제를 제공합니다. 중심적 설계 패턴은 완성이 아니라 **[[scaffolding]]** — 역량이 성장함에 따라 걷히는 보정된 지원 — 입니다.([[conversational-ai-tutors-framework]])([[embodied-inquiry-ai-facilitator-physics-2026]])

*학습자들이 묻는 질문*을 분류하는 것은 구성이 일어나는 것을 보는 한 방식이며, 거기에 행동하는 것입니다. [[lee-learner-question-types-ai-education-2026|Lee, Atif & Kang(2026)]]은 12개 강좌의 IT 학생 11명이 한 434개의 진짜 학습자 질문을 지식 전달자, 촉진자, 공동 학습자라는 세 구성주의적 교수 역할로 분류하고, 그것을 인식하도록 네 개의 transformer를 훈련시켰습니다. DeBERTa는 사실적 지식 전달자 질문을 96.67%의 정밀도로 분류했으나 촉진자 질문은 78.79%에 그쳤고, 모든 모형이 두 상위 질서 역할을 가장 자주 혼동했습니다. 대화적이고 탐구적인 질의를 탐지하는 것이 정보 추구를 탐지하는 것보다 훨씬 어렵습니다. 그 유형론이 질문을 단순한 입력이 아니라 인식론적 참여의 진단적 증거로 다루기 때문에, 이는 독특하게 구성주의적인 설계 움직임을 뒷받침합니다 — 학습자가 반복적으로 사실적 질문만 할 때, 시스템은 학습자의 질문이 내포하는 어떤 깊이에서건 답하기보다 [[metacognition]]과 비판적 질의를 발달시키는 성찰적이고 탐구적인 질문을 촉구할 수 있습니다.

### '명목상으로는 구성주의, 실제로는 행동주의'의 위험

경험적 연구는 표방된 구성주의적 목표와 실제 AI 구현 사이의 격차를 반복적으로 발견합니다. 예를 들어 AI 직업 교육에 대한 한 [[meta-analysis-systematic-review|체계적 고찰]]은 구성주의 이론이 VET 담론에서 표방되는 반면 **행동주의적 훈련과 연습 설계가 실제로 지배함**을 발견하고, AI를 인간 교수를 증강하기보다 모방하는 데 쓰는 교육적 '튜링 트랩'을 경고했습니다.([[ai-vocational-education-training-review]])

이 양식은 이 분야 전반에 걸쳐 일반화됩니다.

- 생성형 AI가 학생을 위해 글쓰기, 추론, 코드를 완성할 때, 학습자는 그 과제가 기르도록 설계된 구성적 사고 과정을 잃습니다 — 이것은 [[cognitive-offloading]]과 [[cognitive-offloading|과잉 의존]]의 중심적 우려입니다.([[generative-refusal-ai-tools-for-thought]])
- 적응적 피드백과 효율을 강조하는 AI 구현은 구성주의가 함의하는 학습자 주체성, 비판적 성찰, 자율적 결정의 목표를 자주 충족시키지 못합니다.([[ai-vocational-education-training-review]])

### 이름의 덫: 생성형 AI의 출력은 생성적 학습이 아니다

이 분야의 반복되는 혼동은 이름의 충돌에 기인합니다. **생성형 AI**는 기술의 한 종류 — 텍스트, 이미지, 코드를 생성하는 모형 — 을 이름 짓습니다. **생성적 학습**(Wittrock의 생성적 학습 이론)은 학습자 활동 — 요약, 개념 지도 작성, 그리기, 자기 시험, 자기 설명과 같은 전략을 통해 새로운 정보와 선행 지식 사이의 연결을 구성함으로써 능동적으로 의미를 만드는 학습자 — 을 이름 짓습니다. 둘은 같은 것이 아니며, 그것들을 혼동하는 것은 실질적 [[pedagogy|교수법적]] 결과를 낳습니다. 학생을 위해 요약이나 개념 지도를 *생산하는* AI는 학생이 생성적 학습 행위를 *수행하는* 것의 반대입니다. [[genai-mindtool-generative-learning|Dabbagh & Fake(2026)]]는 이 구분 위에 직접 기반하여, GenAI 마인드툴은 *학습자*가 구성 활동을 이끌 때에만 생성적 학습을 뒷받침한다고 주장합니다 — AI의 도움으로 마인드 맵을 생성하는 것은 생성적 학습입니다; AI가 맵을 도매로 생성하게 하는 것은 얼마나 유창하고 정확한 출력이든 그렇지 않습니다.

결정하는 질문은 **누가 의미 만들기를 수행하는가**입니다:
- 학생이 설명을 구성하는가, 아니면 단순히 그것을 받는가?
- AI가 학습자에게 생각을 연결하도록 촉구하는가, 아니면 연결을 그들을 위해 공급하는가?
- 산출물(요약, 지도, 코드, 모형)은 학습자의 구성의 *산물*인가, 아니면 그것의 대체물인가?

이것은 [[icap-framework|ICAP]] 위계 — 구성적이고 상호작용적인 참여가 능동적이고 수동적인 것보다 우위 — 를 반영하지만 더 날카롭게 만듭니다. 도구는 가시적으로 '구성적으로 보이는' 출력을 생산하면서 학습자가 *수동적*이거나 *능동적* 양식에 머물게 할 수 있습니다. 따라서 생성적 학습을 위한 GenAI 도구를 평가하는 것은 생성적 출력이 존재하는지가 아니라 구성적 노력이 실제로 어디에서 일어나는지를 살피는 것을 의미합니다. 이것은 생성이라는 구체적 경우에 적용된, 동일한 명목상 구성주의/실제 행동주의 덫입니다. [[ai-writes-code-student-writes-model-2026|모형 저작]](AI가 코드를 쓰고, 학생이 모형을 쓴다)은 하나의 구체적 해결입니다 — 학습자는 AI가 표면 산출물을 공급할 때에도 *개념적 모형*을 구성합니다.

### 구성주의에 기반한 설계 대응

- **생성 거부** — 생성된 텍스트를 전략적으로 삼기고 대신 질문을 던지는 AI 도구로, 사용자에게 [[desirable-difficulties|인지적 마찰]]을 돌려주어 표현의 노동 자체가 이해를 쌓게 합니다.([[generative-refusal-ai-tools-for-thought]])
- **답 기계가 아니라 사고 도구** — 도구가 학습자를 대체하기보다 학습자가 도구를 이끄는 [[genai-mindtool-generative-learning]]로서 GenAI를 사용하기.([[genai-mindtool-generative-learning]])
- **건설적 갈등** — 소크라테스식 튜터링의 전통 안에서 학습자의 설계나 추론에 이의를 제기하여 재고와 대안의 더 깊은 구성을 촉구하는 대립적 AI 에이전트.([[ai-agents-constructive-conflict-design-education-2026]])


- **모의된 반대는 반대가 아니다.** 요구에 따라 말해질 수 있으나 결코 저항하지 않는 반대 입장은 대화의 안무를 연습하면서 그것을 강하게 만드는 것을 삼킵니다. 그것은 구현, 이해관계, 결과에 대한 노출이 없으므로, 인간의 타자와 달리 수선으로 가는 어떤 길도 제공하지 않습니다([[synthetic-position-self-authorship-2026|Du et al. (2026)]]).
- **비교를 통한 내적 피드백** — 학습자가 자신의 작업을 AI가 생성한 모범 답안과 비교하게 하여, 비교 행위 자체가 학습을 생성하게 하기.([[ai-internal-feedback-evaluative-judgments]])
- **질문 유형 인식 프롬프트** — 학습자의 질문을 구성주의적 역할로 분류하여, 시스템이 의도적으로 학생을 정보 추구에서 탐구적이고 대화적인 질의로 격상시킬 수 있게 하여, 질문이 내포하는 인지적 깊이와 무관하게 그것을 반영하기보다 말입니다. 촉진자와 공동 학습자 의도가 자동 분류기에게는 여전히 혼동되기 때문에, 이 설계는 분류가 [[feedback]]이나 [[scaffolding]]을 이끌기 전에 인간이 검증하게 유지합니다.([[lee-learner-question-types-ai-education-2026]])
- **평가 기준으로서의 공동체** — 학습자가 AI를 설계 자원으로 삼아 자신의 공동체를 위한 진짜 무언가를 설계하고, 공동체의 지식과 실천자들이 결과를 심판하는 기준으로 기능하여, 비판적 참여가 요구하는 곳에 한계, 거부, 전략적 비사용의 여지를 남기기.([[ojeda-ramirez-community-based-ai-learning|Ojeda-Ramirez, Gyles & Peppler(2026)]])

## 구성주의와 'AI에 관한 교육'

구성주의는 AI 리터러시 자체가 어떻게 가르쳐지는지도 형성합니다. 지식이 구성되는 것이라면, AI 리터러시는 모형에 관해 강의함으로써 획득되지 않습니다 — AI를 능동적으로 사용하고, 비판하고, 함께 만듦으로써 획득됩니다. 산출물을 생성하고, 출력을 심문하고, 상호작용을 성찰하는 것입니다.([[hingle-collaborative-ai-literacy-2025]]) 이것은 [[ai-literacy]]를 수동적 지식의 덩어리보다 능동적이고 참여적인 역량으로 자리매김하며, 구성주의를 [[critical-thinking]]과 AI와의 만남에서 학습자의 [[agency]]에 연결합니다.

## 설계와 연구에 대한 함의

1. **구성 활동을 보존하라.** AI는 학습자 자신의 사고를 비계로 세워야 합니다 — 촉구하고, 질문하고, 뒷받침하는 것이지 그것을 수행하는 것이 아니라. 설계자는 도구가 학습자의 구성적 노력을 증가시키는지 대체하는지를 물어야 합니다.([[generative-refusal-ai-tools-for-thought]])
2. **[[icap-framework|ICAP]] 렌즈를 사용하라.** ICAP는 참여를 구성적, 상호작용적, 능동적, 수동적 양식으로 분류합니다 — AI 상호작용이 실제로 구성적이고 상호작용적 양식을 이끌어내는지 아니면 수동적 소비인지를 평가하는 데 사용하십시오. 설계자는 학습 목표가 요구하는 곳에서 더 깊은(구성적이고 상호작용적) 양식을 선호해야 합니다.([[hingle-collaborative-ai-literacy-2025]])
3. **이론과 구현을 정렬하라.** 연구자는 AI가 '작동하는지'를 넘어 그것이 학습 이론을 *어떻게* 구현하는지를 살피며, 명목상 구성주의, 실제 행동주의 격차를 확인해야 합니다.([[ai-vocational-education-training-review]])
4. **학습자 주체성과 전이를 연구하라.** 구성주의적 약속은 즉각적 시험 향상뿐 아니라 학습자들이 구성한 이해를 전이하고 독립적으로 적용할 수 있는지를 평가함을 함의합니다.([[research-methods-aied]])

## 연결된 개념
- [[community-of-inquiry]] — Community of Inquiry(구성주의적/듀이적 실용주의에 기반)
- [[cognitive-psychology]] — 인지주의, 학습 이론의 세 번째 고전적 극
- [[active-learning]]
- [[learning-by-teaching]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[collaborative-learning]]
- [[experiential-learning]]
- [[project-based-learning]]
- [[embodied-learning]]
- [[learning-design]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[agency]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[misconceptions]]
- [[learning-theories]]
- [[behaviorism]]
- [[chemistry-education]] — 화학 교육과 AI: 실험실, 형성평가, LLM의 한계, 실험의 철학
- [[theory-development-aied]] — AI 교육에서의 이론 발전
- [[productive-failure]]
## 연결된 문서
- [[lee-learner-question-types-ai-education-2026]] — 세 구성주의적 역할로 분류된 학습자 질문: 전달자, 촉진자, 공동 학습자(Lee, Atif & Kang 2026)
- [[mishra-control-vs-agency-history-2025]] — AIED 역사에서 구성주의(페퍼트)를 인지 튜터와 대비
- [[code-to-learn-genai-artifact-construction-2026]] — GenAI로 Code-to-Learn: 산출물 구성을 위한 구성주의 틀
- [[ai-writes-code-student-writes-model-2026]] — 모형 저작: GenAI로 구성에 의한 학습의 이론과 측정 프로그램
- [[ai-vocational-education-training-review]] — 구성주의는 표방되나 VET에서 행동주의적 AI가 지배한다; '튜링 트랩'
- [[generative-refusal-ai-tools-for-thought]] — 구성적 사고를 보호하기 위해 생성을 삼기는 AI 도구
- [[genai-mindtool-generative-learning]] — 학습자 구성을 뒷받침하는 사고 도구로서의 GenAI
- [[ai-agents-constructive-conflict-design-education-2026]] — 건설적 재고를 촉구하는 대립적 AI 에이전트
- [[hingle-collaborative-ai-literacy-2025]] — 협력적 AI 리터러시와 ICAP 참여 틀
- [[ai-internal-feedback-evaluative-judgments]] — 평가적 판단을 생성하는 AI 지원 비교
- [[icap-cognitive-engagement-llm-agents]] — LLM 에이전트와의 ICAP와 인지적 참여
- [[conversational-ai-tutors-framework]] — AI 튜터에서의 비계 대화
- [[embodied-inquiry-ai-facilitator-physics-2026]] — AI 촉진자와의 구현된 탐구
- [[beyond-detection-authentic-assessment-ai-2025]] — 진정 평가와 지식 구성
- [[teacher-ai-teaming-five-levels]] — 설계에서의 교사–AI 협력 수준
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — 학습자와 기계 사이의 인식론적 공동 주체성
- [[ojeda-ramirez-community-based-ai-learning]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[educational-robotics-pathways-2026]] — AI 기반 교육용 로봇공학 학습으로 가는 경로(2026)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution: 학생의 인지 진화를 모의하는 생성 에이전트

- [[synthetic-position-self-authorship-2026]] — 모의된 AI 반대 입장은 대화의 형식을 연습하지만 수정을 강요하는 저항을 삼긴다
