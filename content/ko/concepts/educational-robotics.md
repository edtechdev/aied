---
title: 교육에서의 로봇
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/educational-robotics
source_updated: "2026-10-26T10:00:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **교육에서의 로봇(educational robotics)** — [[teacher-role|교수]]와 학습을 위한 도구로 물리적이거나 시뮬레이션된 로봇을 사용하는 것입니다. 교육 로보틱스는 넓은 스펙트럼에 걸쳐 있습니다: 계산적 사고와 프로그래밍을 가르치는 프로그래밍 가능 키트에서부터, 가르치고, 이야기를 들려주고, 수화를 모델링하거나 사회적 기술을 연습하는 사회적 보조 로봇과 휴머노이드 로봇에 이르기까지. 이것은 [[problem-solving|문제 해결]], [[critical-thinking|비판적 사고]], [[creativity]], STEAM 참여를 기르고, 구현된(embodied) 상호작용을 통해 추상적인 컴퓨팅 개념을 구체화하는 데 가치를 인정받습니다. 지식베이스의 로보틱스 코퍼스는 [[curriculum-design|교육과정]] 통합 프로그래밍, LLM 기반 대화형 튜터, 사회적 보조 [[storytelling-in-education|이야기하기]] 로봇, 사회·정서 학습을 위한 역할극을 아우릅니다. 이것은 이곳에 흡수된 밀접한 관련 분야 둘에 의해 뒷받침됩니다: **사회적 로봇(social robots)**(사회적 상호작용과 관계 형성을 위해 설계된 로봇)과 **인간-로봇 상호작용(HRI)**(사람이 로봇을 어떻게 인식하고, 신뢰하고, 함께 학습하는지를 연구하는 학문).

## 생각해 볼 질문들

- 교실의 로봇은 화면 속 챗봇이 줄 수 없는 구현된 [[community-of-inquiry|사회적 현존감(social presence)]]을 더합니다. 로봇의 물리적 몸체와 사회적 단서가 학생들이 학습하고, 신뢰하고, 참여하는 방식을 어떻게 바꾼다고 생각하시나요 — 그리고 무엇으로부터 주의를 분산시킬 수 있을까요?
- 사회적 로봇은 인간과 같은 말, 제스처, 성격을 사용해 가르치고, 이야기를 들려주거나 사회적 기술을 연습합니다. 인간처럼 보이고 행동하는 로봇이 본질적으로 학습에 더 좋은 것인가요, 아니면 그 사회적 현존감이 소프트웨어 전용 도구에는 없는 위험(오정보, 과잉 의존, 프라이버시)을 가져올 수 있을까요?
- LLM은 이제 사회적 로봇이 유창하게 대화할 수 있게 합니다. 로봇이 튜터처럼 말할 수 있다면, 여전히 물리적 구현에 의존하는 것은 무엇일까요 — 그리고 '몸체'를 더하는 것이 학습을 위해 진짜로 중요해지는 지점은 어디이며, 어디서는 그저 신기함에 불과한가요?
- 물체를 물리적으로 조작하거나 자신의 행동이 가시적 결과를 만들어내는 것을 보며 무언가를 배웠던 때를 떠올려 보세요. 물리적 로봇을 프로그래밍하는 것이 화면에 코드를 쓰는 것보다 프로그램 논리 같은 추상적 아이디어를 어떻게 더 효과적으로 땅에 붙일 수 있을까요?

## 도입

교육 로보틱스는 [[ai-education|교육에서의 AI]]의 구별되지만 밀접하게 관련된 응용 분야입니다. 소프트웨어 전용 [[intelligent-tutoring|지능형 튜터링]]이나 [[llm]] 챗봇과 달리, 로봇은 **구현된(embodied)** 그리고 흔히 **사회적** 현존감을 더합니다 — 학습자가 보고, 조작하고, (점점 더) 대화할 수 있는 물리적 에이전트. 이러한 구현은 그것들의 [[pedagogy|교육학적]] 가치의 핵심입니다: 추상적인 프로그램 논리를 관찰 가능한 행동에 붙이고, 비구현 시스템이 할 수 없는 관계 형성과 감정적 참여를 뒷받침할 수 있습니다.

증거는 작업량이 시사하는 것보다 빈약합니다: 교육에서의 AI와 로보틱스에 대한 한 검토는 대부분의 실증 연구가 네 주 이하로 13세 미만 학습자를 다루며, 초기 투자 국가 몇 개에 집중되어 있고, 가장 많이 연구된 결과는 [[learning-gains|학습 성과]]이며 윤리, 형평성, 정책이 도입에 뒤처진다는 것을 발견했습니다([[white-wu-robotics-ai-education-2026|White and Wu (2026)]]).

### 사회적 로봇과 인간-로봇 상호작용

두 흐름이 교육에서 로보틱스의 사회적 측면을 형성합니다.

**사회적 로봇**은 사회적 상호작용을 통해 사람을 참여시키도록 설계된 로봇으로, 의사소통하고, 가르치고, 돕거나 동행하기 위해 말, 제스처, 표정, 성격 같은 인간과 같은 단서를 사용합니다. 교육에서 사회적 로봇(iCub, Pepper, Reachy 같은 휴머노이드와 동반 로봇)은 튜터링, 이야기하기, 역할극, 언어 지원, 학습 동반자로 사용됩니다. 그들의 사회적 현존감은 소프트웨어 기반 [[agentic-ai|AI 에이전트]]와의 핵심 차별점이며, 관계 형성과 감정적 참여를 가능하게 합니다. [[llm|대형 언어 모델]]의 발전은 사회적 로봇이 말하고 할 수 있는 것을 극적으로 확장하여, 유창하고 적응적인 대화형 튜터링을 가능하게 했으며 — 동시에 오정보, [[cognitive-offloading|과잉 의존]], [[privacy]] 침해 같은 위험도 도입하여, 지식 기반 설계 접근법의 동기를 부여합니다.

**인간-로봇 상호작용(HRI)**은 사람과 로봇이 어떻게 상호작용하는지를 연구하는 학제 간 분야로, 인식, 의사소통, 협업, 그리고 그 상호작용의 사회적·인지적·[[ethics|윤리적]] 역학을 포괄합니다. 교육에서 HRI는 학습자가 로봇을 인식하고, 신뢰하고, 함께 학습하는 방식의 기반입니다 — 로봇을 프로그래밍하든, 튜터링 로봇과 대화하든, 사회적 시나리오를 연습하든. HRI [[research-methods-aied|연구]]는 로봇의 외형, 행동, 과제 맥락, 구현이 [[usability-research|사용자 경험]], 신뢰, 학습을 어떻게 형성하는지 검토합니다. 교육 HRI의 핵심 우려는 인간의 [[agency]] 보존하고, [[trust]]를 구축하고, [[self-efficacy]]을 뒷받침하며, 로봇과의 상호작용이 자율성과 사회적 학습을 저해하지 않고 뒷받침하도록 하는 것입니다. 이것은 로보틱스를 [[human-ai-collaboration]]과 [[social-emotional-learning]]에 연결합니다.

### 로봇이 교육에서 사용되는 방식

[[teaching-with-robots-five-types-perspective-2026|Christ et al. (2026)]]는 기술 목록 대신 역할 유형론을 더합니다: 그들의 워크숍에서 도출한 다섯 가지 교실 로봇 유형은 하드웨어가 아닌 *교육적 기능과 추상화 수준*으로 구별됩니다. 유형 a는 일반적 사회적 패턴의 비상호작용 시연(고조나 오해 같은 역학에 대한 토론이 뒤따르는 각본화된 감정 연극)을 실행하고, 유형 b는 참여적 물리 연극, [[embodied-learning|구현된 학습]], 경계 인식, 감정 조절을 뒷받침하는 촉각 반응형 상호작용 로봇이며, 유형 c는 공감을 보이고 한 명의 학생과의 상호작용을 기억하여 자기 고백을 위한 보호된 일대일 환경을 만드는 구두 언어 파트너이고, 유형 d는 자유도가 더 많은 인형처럼 숨은 전문가가 외부에서 조종하여 사회적 위계를 평평하게 만드는 것을 목표로 하며, 유형 e는 학교에서 최근 관찰된 행동을 재생하는 비상호작용 로봇으로 학생들이 상황 속 행동을 성찰할 수 있게 합니다 — 유형 a와의 대비가 바로 맥락 특정적이라는 점이 일반화된 추상이 아니라는 것입니다. 이 유형론은 하나의 국가 정신건강 프로그램에 기반한 검증되지 않은 설계 공간임을 명확히 하여, 로봇 역할을 설계하고 평가하기 위한 메뉴이지 그것들 중 어느 것이 작동한다는 증거는 아닙니다.

- **계산적 사고와 프로그래밍:** 프로그래밍 가능 로봇(예: LEGO, 블록 기반 플랫폼)은 학습자가 코드를 실제 결과에 연결하도록 돕습니다. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]]는 계산적 사고를 중등 STEAM 교육과정에 연결하고, [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]]는 블록 프로그래밍을 [[conversational-ai|대화형 AI]] 에이전트와 구현된 로봇 피드백과 결합합니다. [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]]은 초보자가 자연어로 시뮬레이션된 로봇을 제어할 수 있게 합니다.

- **튜터링과 지식 전달:** [[knowledge-based-design-generative-social-robots-2026|지식 기반 설계 연구]]와 [[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]]는 고등교육 학생을 튜터링하는 LLM 기반 생성형 사회적 로봇을 개발하며, 오정보와 [[cognitive-offloading|과잉 의존]] 같은 위험을 다룹니다. [[task-context-trust-educational-hri-2026|신뢰에 관한 연구]]는 로봇이 하는 것(과제 맥락)이 외형보다 학습자의 신뢰를 더 형성하며, 수업 과업 중에 신뢰가 가장 높다는 것을 보여줍니다.

- **이야기하기와 참여:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]와 [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]는 동기와 참여를 높이기 위해 상호작용적이고 LLM 기반인 사회적 로봇을 이야기하기에 사용하며, [[icub-humanoid-storytelling-llm-hri-2025|iCub 서사 HRI 연구]]는 인간과 휴머노이드 간의 공동 창조적 이야기하기를 탐구합니다.

- **사회·정서 학습과 [[inclusive-learning|포용]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]는 따돌림 방지를 위한 방관자 개입을 연습하기 위해 로봇 매개 역할극을 사용하고, [[pepper-robot-sign-language-lis-2025|Pepper 로봇과의 작업]]은 청각장애 학습자를 지원하는 로봇 수화 의사소통을 탐구합니다. [[pepper-social-robot-formal-education-scoping-review-2026|한 범위 검토]]는 정규 교육에서의 Pepper 사용을 조망합니다.

- **자율성과 주도성:** [[human-autonomy-agency-hri-review-2025|한 체계적 검토]]는 HRI가 인간의 자율성과 주도성 감각에 어떻게 영향을 미치는지를 종합하며, 설계 프레임워크와 [[regulation|규제]] 요구(EU AI Act, IEEE Ethically Aligned Design)를 연결합니다. [[social-robot-study-companions|학습 동반자로서의 사회적 로봇]]과 [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|창의적 글쓰기에서의 로봇–LLM 통합]]이 로봇 역할을 더 탐구합니다.

- **프로젝트 기반 및 게임 기반 접근법:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]]는 프로젝트 기반 로보틱스 강좌를 제시하고, [[game-based-gamified-robotics-education-review-2026|한 체계적 검토]]는 로보틱스 교육에서 게임 기반 학습과 게이미피케이션을 비교합니다.

- **완전한 로보틱스 워크플로 속 강화학습과 시뮬레이션-현실(sim-to-real).** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao and Wang (2026)]]는 조립, 전기 점검, 시뮬레이션 기반 정책 훈련, 물리적 배포로 이루어진 종단 간 연구 로보틱스 워크플로를 하나의 개방형 휴머노이드(부품비 6,000 USD 미만으로 보고된 ToddlerBot) 위에 3시간짜리 여덟 개 세션으로 구성된 [[k-12|고등학교]] 강좌로 변환했습니다. 한 쌍이 하나의 로봇을 공유하며 하드웨어에 배포하기 전에 [[simulation]]에서 [[reinforcement-learning|보행 정책]]을 훈련하고, 안전 장치(보행 전 통과해야 하는 서기 테스트)가 의존 순서를 가시적으로 만듭니다. 공유된 산출물이 개인이 아닌 팀에 보상하므로, 이 프레임워크는 로봇 성능과 개인의 이해를 분리합니다: 학생들은 역할을 교대하고, 모든 검사 지점에서 별도의 예측과 설명을 제출하며, 지원받은 단계 밟기는 개념 숙달의 증거로 명시적으로 다루어지지 않습니다 — 저자들의 경고는 로봇 이정표를 통과하는 것이 그것을 이해하는 것은 아니라는 것입니다.

- **키트 문제가 아닌 생태계 문제로서의 경쟁 로보틱스.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]]는 K–12 로보틱스의 구속 조건이 교육과정이나 하드웨어보다 지속적인 지역 기술 멘토십에 있으며, 그것이 지리적으로 분산되어 있다는 것을 보여줍니다: 인디애나에서 FIRST LEGO League 참여는 2020년 원격 시즌에 붕괴했고, 도시 참여는 점차 회복되었으나 농촌 참여는 그렇지 않아 2025–2026년까지 2020년 이후 수준 근처에 머물렀습니다. 그들의 ARC 프레임워크는 멘토십을 공학의 대상으로 만듭니다 — 대학이 학점이 인정되는 강좌를 운영하여 학부생들을 인근 팀의 워크숍 멘토로 준비시키고, 성숙한 학교 프로그램이 2차 허브가 되어 그 경험 많은 학생들이 더 많은 학교의 또래 멘토가 되어, 어떤 대학의 관할권을 넘어서는 자기 강화 루프를 통해 도달 범위가 전파됩니다. 단일 대학 시범은 세 개의 농촌 FLL 팀을 만들고 학부생의 공동체 연결감을 5점 척도에서 1.86에서 4.00으로 움직였습니다(측정된 변화 중 가장 큰 것으로, 기술 개념을 가르치는 자신감 +1.29보다 큼), 한편 인디애나 공립학교 1,925개에 대한 공간적으로 명시적인 마르코프 시뮬레이션은 중도적 가정 하에 40년 후 992개의 학교 프로그램, ARC가 없으면 161개를 예측했습니다. 증거는 실현 가능성 수준입니다 — 일곱 명의 멘토와 네 명의 학부모, 회고적 자기보고, 통제 집단 없음 — 그러나 그 틀은 어떤 로보틱스 프로그램에도 이전 가능합니다: 확장되거나 확장에 실패하는 것은 멘토십 역량과 허브 지리이지 로봇이 아닙니다([[arc-hubs-k12-ai-robotics-rural-2026]]).

- **아동 발달과 어린 학습자:** [[ai-toys-child-development-2026|AI 기반 장난감과 아동 발달]]은 렌즈를 유아기의 상업용 AI 장난감으로 옮기며, AI가 탑재된 장난감이 아동 발달과 놀이에 어떤 영향을 미치는지 검토합니다. 이것은 교육 로보틱스를 교실 로봇을 넘어 아이들이 집에서 만나는 소비자용 장난감으로 확장하며, 놀이 속 [[pedagogical-agent|에이전트]], [[trust-calibration|신뢰 보정]], [[agency]], 가장 어린 학습자들을 위한 [[well-being]]에 대한 질문을 제기합니다 — 학교 연령 로보틱스 교육과정보다 설계 지침이 빈약한 영역입니다.
- **유아 [[ai-literacy|AI 리터러시]]에서의 유형 코딩과 사회적 로봇.** Lee (2026)는 언플러그 놀이, 유형 코딩(Bee-Bot, Ozobot), 사회적 AI 로봇과의 안내된 대화를 유아와 유치원을 위한 Play With AI (PL-AI) 교육과정에 통합합니다. [[design-based-research|설계 기반 연구]]는 이러한 구현되고 유형화된 로보틱스 활동이 아이들의 AI 개념에 대한 새로운 추론을 어떻게 뒷받침하는지 기록하며, 네 가지 설계 원칙 — 구현된 놀이, 유형 코딩, 안내된 대화, 교사 공동 설계 — 은 [[early-childhood-elementary-ai-education|유아기]] 로보틱스와 AI 교육을 위한 발달적으로 적절한 모델을 제공합니다.

- **어린 학습자를 위한 두 패러다임: 코딩 로봇과 생성형 사회적 로봇.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li and Lee (2025)]]는 유아기 로보틱스를 각각 뚜렷한 이론적 기반을 가진 두 가지 [[pedagogy|교육학적]] 패러다임의 짝으로 구성합니다. **코딩 로봇**(Bee-Bot, KIBO, Matatalab)은 Papert의 LOGO에서 유래하며 [[constructivist|구성주의(constructionism)]]를 구현합니다 — 아이들은 만들면서 배우고 유형 프로그래밍을 통해 [[computational-thinking|계산적 사고]]를 쌓습니다. [[generative-ai|생성 AI]]로 구동되는 **생성형 사회적 로봇**은 [[sociocultural-learning|사회적 구성주의]]에 뿌리를 두고, 아이의 최근접 발달 영역 안에서 학습을 [[scaffolding|스캐폴딩]]하는 대화형 또래나 튜터로 행동하며 사회·정서 발달을 뒷받침합니다. 두 로봇 유형을 모두 Project Approach에 통합하기 위한 그들의 5단계 **창의적 프로젝트 접근법(Creative Project Approach)**은 교사가 아이–로봇 상호작용을 안내하고, 자동화와 [[creativity]]의 균형을 맞추며, 아이의 [[agency]]를 보존하는 촉진자로 남게 합니다.

- **유치원 CT 로보틱스가 실제로 하는 것.** 53개 연구에 대한 체계적 검토는 문제 기반 학습, 이야기하기, 스캐폴딩이 가장 빈번히 사용된 전략임을 발견했으며, 대부분의 연구가 CT 프레임워크를 명명하지 않고 TechCheck-K 같은 검증된 도구 대신 임시 평가 도구를 사용했습니다([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou & Sapounidis (2026)]]).
- **대화가 아니라 LLM 계획.** [[vlm-task-planning-humanoid-robot-autism-education-2026|Kudláčková(2026)]]는 시각-언어 모형을 사용해 자폐 스펙트럼 학습자와 함께 쓰는 시각적으로 구조화된 활동인 Shoebox Tasks의 사진을 PDDL 문제로 변환하고, Nao 휴머노이드가 그것을 실행하거나 시연합니다. 계획의 정확성은 학습자 결과가 아니라 여섯 과제에 걸쳐 채점됩니다.

### 구현과 교육학

핵심 주제는 로봇이 진정한 학습 목표를 뒷받침할 때 효과적이라는 것입니다 — 고립된 기술 연습이 아니라. 도움이 있을 때 노트북 ChatGPT와 연결된 책상 거치형 로봇 프로젝터는 점수가 같았으나(6.7 대 7.3/10, p = .41), 철회 후에도 점수를 유지했습니다(7.0 대 4.4/10, p = .003), 단기 전이 점수가 60% 더 높았습니다 — 이는 저자들이 일반적 대체가 아닌 공간적 동일 배치(spatial co-location)에 귀속시키는 과제 의존적 이득입니다([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). 로봇의 가치는 교육학적 맥락에 달려 있습니다: 계산적 사고 가르치기([[computational-thinking]]), [[stem-education|STEAM]] 뒷받침, [[cs-education|프로그래밍]] 기술 쌓기, 학습자 동기 부여([[motivation]], [[student-engagement|참여]]), 또는 [[social-emotional-learning]]과 [[equity-in-ai-education|포함]] 지원. 로보틱스는 또한 [[project-based-learning]], [[game-based-learning]], [[experiential-learning]]과 연결됩니다. 핵심 설계 고려사항은 학습자의 [[agency]] 보존, [[trust]] 구축, [[self-efficacy]] 지원, [[embodied-learning|구현된 상호작용]]에 학습을 근거짓는 것입니다. [[language-learning]]에서 [[robot-assisted-language-learning-meta-analysis-2026|메타분석적 증거]]는 구현된 로봇 보조 언어 학습의 효과를 가리킵니다.

- **AI 기반 로보틱스 학습으로의 경로.** 로보틱스+AI 교육과정을 수강하는 고등학생에 대한 [[educational-robotics-pathways-2026|한 질적 연구]]는 현실 세계 실천, 설계, 장난기 넘치는 창의적 표현을 통한 학습을 발견했습니다(구성주의적, 인식론적 다원주의적 렌즈).

## 흔한 오해

- **"로봇이기 때문에 계산적 사고를 가르친다."** **53개 연구**에 대한 체계적 검토는 **문제 기반 학습, 이야기하기, 스캐폴딩**이 가장 자주 쓰인 전략임을 발견했습니다. 결과를 나른 것은 교수법이었고, 그것이 연구들이 실제로 한 일입니다.
- **"물리적 로봇은 화면 기반 대안을 전반적으로 앞선다."** 향상은 **과제 의존적**이었습니다. [[aifred-desk-robotic-ai-guidance-2026|Orlando 외, 2026]]에서 단기 전이 점수가 **60% 더 높았고**(4.4/10, p = .003), 저자들은 이를 **일반적 대체가 아니라 공간적 동일 위치**에 돌립니다. 이 주장은 특정 과제에서의 동일 위치에 관한 것이지 물리성 일반에 관한 것이 아닙니다.
- **"유치원의 계산적 사고는 의미 있기에는 너무 이르다."** 검토된 증거는 유치원 로보틱스를 직접 다룹니다. 즉 이 연령대는 부적합하다고 가정된 것이 아니라 연구되어 왔습니다.

## 연결된 개념
- [[early-childhood-elementary-ai-education]]
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — 포괄 개념: AI 기술과 기법(모델, LLM 훈련, 로보틱스, RAG, 에이전트)

## 연결된 문서

- [[pepper-social-robot-formal-education-scoping-review-2026]] — 정규 교육에서의 Pepper 로봇에 관한 범위 검토
- [[robot-assisted-language-learning-meta-analysis-2026]] — AI가 강화된 구현형 로봇 보조 언어 학습의 메타분석
- [[white-wu-robotics-ai-education-2026]] — 교육에서의 로보틱스와 AI
- [[computational-thinking-educational-robotics-secondary-2026]] — 계산적 사고와 교육 로보틱스
- [[roboblockly-conversational-block-robotics-ct-2026]] — 대화형 블록 기반 로보틱스 환경 RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — LLM 기반 로봇 시뮬레이션 환경 EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — 생성형 사회적 로봇을 위한 지식 기반 설계
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — 고등교육용 생성형 사회적 로봇 Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — 디지털 스토리텔링 로봇 MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — 교실용 LLM 사회적 로봇 RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — 로봇 매개 역할극을 통한 따돌림 예방 REMind
- [[task-context-trust-educational-hri-2026]] — 교육 HRI에서의 과제 맥락과 신뢰
- [[human-autonomy-agency-hri-review-2025]] — HRI에서의 인간 자율성과 주도성
- [[icub-humanoid-storytelling-llm-hri-2025]] — iCub 서사 HRI
- [[pepper-robot-sign-language-lis-2025]] — Pepper와 수화
- [[social-robot-study-companions]] — 학습 동반자로서의 사회적 로봇
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — 창의적 글쓰기에서의 로봇-LLM 통합
- [[game-based-gamified-robotics-education-review-2026]] — 게임 기반 및 게이미피케이션된 로보틱스 교육
- [[bots-blocks-project-based-robotics-education-2026]] — 프로젝트 기반 로보틱스 교육 Bots and Blocks
- [[educational-robotics-pathways-2026]] — AI 기반 교육 로보틱스 학습으로의 경로 (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — 유치원에서의 로봇 매개 CT
- [[ai-toys-child-development-2026]] — AI 기반 장난감과 아동 발달
- [[creative-project-approach-ai-early-childhood-2025]] — 창의적 프로젝트 접근법: 코딩 및 생성형 사회적 로봇을 유아기 프로젝트에 통합하기 (Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — 각본화된 시연부터 일대일 공감 대화까지 기능적으로 구별되는 다섯 가지 교실 로봇 유형 (Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: 농촌 K–12 로보틱스 프로그램의 제약을 하드웨어가 아닌 기술 멘토십 역량과 허브 지리로 다루는 허브 기반 프레임워크 (Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — 고등학생에게 강화학습과 휴머노이드 로보틱스 가르치기: 저비용 개방형 플랫폼에서의 전문가 검증 교육과정 설계
- [[aifred-desk-robotic-ai-guidance-2026]] — 책상 거치형 로봇 프로젝터: 노트북 ChatGPT가 잃어버린 곳에서 동일 배치 안내가 전이를 보존했다
- [[vlm-task-planning-humanoid-robot-autism-education-2026]] — 시각-언어 모형이 Nao 로봇을 위해 Shoebox Tasks를 계획한다(Kudláčková 2026)
