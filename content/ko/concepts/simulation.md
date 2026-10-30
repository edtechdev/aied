---
connected_resources: [openmaic]
title: 모의
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
translation_of: concepts/simulation
source_updated: "2026-10-28T15:48:01-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **모의** — 안전하고, 반복 가능하며, 종종 달리 접근 불가능한 맥락에서 연습과 피드백을 통해 학습을 떠받치기 위해 모델링된 환경, 에이전트, 또는 시나리오를 사용하는 것입니다. 모의는 학습자가 실제 비용 없이 행동하고, 오류를 범하며, 결과를 보게 하며, 점점 AI와 에이전트 기반 모델링에 의해 추동됩니다.

## 생각해 볼 질문들

- 실험실, 모의 훈련, 비행이나 게임 시뮬레이터 같은 안전하고 저위험의 환경에서 무언가를 함으로써 배운 적을 떠올려 보십시오. 무엇이 그 연습을 효과적으로 만들었으며, 모의가 너무 현실적이거나 충분히 현실적이지 않았다면 무엇이 잃혔을까요?
- 이 페이지는 모의가 학습자가 실제 비용 없이 오류를 범하고 결과를 보게 한다고 논합니다. 실수의 비용이 거의 영으로 떨어질 때, 얻어지는 것은 무엇이며, 잃히는 것은 무엇이라 생각합니까?
- AI가 연습을 위해 환자, 학생, 또는 대화 동반자를 모의할 수 있다면, 가치 있는 예행연습과 실제 인간 상호작용으로 전이되지 못하는 연습 사이의 선을 어디에 긋겠습니까?
- 왜 모의의 한계에 대한 학습자의 인식 — 그것의 [[trust|trustworthiness]] — 이 현실을 얼마나 충실하게 모델링하는지만큼이나 중요할 수 있을까요?
- 누군가가 배우는 데 도움이 되는 바로 그 모의 기술이 어떻게 그 사람을 오도할 수 있으며, 그 두 결과를 구별하기 위해 무엇을 알아야 할까요?

## 들어가며

모의는 [[experiential-learning|experiential]]과 [[active-learning]] [[pedagogy|pedagogies]]의 핵심에 자리합니다. 그것은 기술과 판단을 쌓는 의도적인 연습, [[productive-failure|productive failure]], 그리고 [[feedback|feedback loops]]를 제공합니다. AI는 모의를 두 가지 방식으로 변화시켰습니다. 더 현실적이고 적응적인 모의 환경을 추동하고, 연습을 규모 있게 만드는 [[simulating-students|simulated learners]], 환자, 또는 대화 상대를 생성합니다. 행동 증거에 따르면 학습자가 모의에 참여하는 *방식*은 균일하지 않고 체계적으로 달라집니다. VERA에서 생태 모델을 만드는 온라인 학습자를 추적한 [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]]는 [[student-engagement|engagement]]를 관찰(모델 구축은 거의 없이 잦은 실행과 매개변수 조정), 구성(모의는 거의 없이 직접적인 구축), 그리고 탐구(완전한 구성–매개변수화–모의 순환)으로 분류했으며, 탐구자가 가장 복잡하고 다양한 모델을 만들어내고 관찰이 무거운 학습자들은 대체로 기존의 것들을 복사했습니다 — 이것은 학습자들을 완전한 순환 활동으로 밀어내는 모의 환경을 설계해야 한다는 논증입니다.
- **명시적인 기제는 학습된 생성기와 달리 검사할 수 있습니다.** DagFlow-AI는 방향성 비순환 그래프와 변수별 분포 및 수식으로 합성 데이터를 만들기 때문에 데이터 생성 과정이 교수자가 읽고 고칠 수 있는 문서가 됩니다([[arthur-dagflow-agentic-synthetic-data-statistics-2026|Arthur et al., 2026]]). 이는 시드 데이터셋이 필요하고 불투명한 과정을 낳는 GAN 및 VAE 합성과 의도적으로 대조됩니다. 트레이드오프는 안정적인 모의에 도달하기까지 여러 차례의 반복이 필요했다는 점입니다.

### AI와 모의

- **AI 추동 환경:** 적응형 모의는 학습자의 상태에 난이도와 시나리오를 조정하며, [[adaptive-learning]]과 [[reinforcement-learning]] 기반 코칭과 연결됩니다.
- **가상 환경과 AI 계층의 이득은 분리될 수 있습니다.** 3주간의 9학년 옴의 법칙 단원에서 조정된 성취도는 AI 지원 가상 실험실이 30점 만점에 23.45, AI 없는 같은 실험실이 20.51, 물리 실험실이 16.57이었습니다([[li-ahmad-ai-virtual-lab-flipped-physics-2026|Li and Ahmad (2026)]]). 학급 단위로 각기 다른 교사가 배정되었으므로, 이는 세 가지 교실 배치를 서술하는 것이지 에이전트 단독의 효과가 아닙니다.
- **프롬프트 생성 모의가 손안에 맞춤형 실험실을 넣습니다.** 교수자는 재사용 가능한 프롬프트 틀에서 강좌가 필요로 하는 주제의 브라우저 실행 모델(슬라이더, 애니메이션, 시간 의존적 그래프)을 생성할 수 있으며, 가장 가까운 출판된 모의를 받아들이는 대신 각각을 두 번 검증합니다 — 기술적으로, 그런 다음 알려진 해석해적 해법에 대해([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025)]]).
- **인간 상대방의 자동화.** [[astra-atco-training-simulator|Chew et al. (2026)]]는 항공 교통 관제 모의에 배치되는 전문가 인간 역할극 배우들을 자율적인 [[llm|LLM]] sim-pilot으로 대체하여, 훈련 역량의 병목을 제거합니다. 그들의 미세조정된 음성 파이프라인은 싱가포르 억양의 항공 음성에 대한 단어 오류율을 107.80%에서 23.45%로 낮췄으나, 모든 평가는 구성 요소 수준이었고 훈련생 집단 실행은 없었습니다.
- **훈련 동반자로서의 적대적 모의 장치.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]]는 57K 사례 시나리오 파이프라인에 걸쳐 적대적으로 행동하도록 만들어진 LLM 환자 모의 장치와 정책 에이전트를 짝짓습니다. 그것들을 상대로 훈련하는 것이 놓친 위험 신호 비율을 약 3분의 1 줄였고, 맹검한 임상의들은 나란히 비교의 87.6%에서 훈련된 에이전트를 선호했습니다.
- **빠진 사례 상태를 명시적으로 인코딩하십시오.** 다중 에이전트 표준화 환자 시스템은 의도 인식, 사례 기반 응답 생성, 그리고 세션 후 평가를 분리하여, 네 종류의 빠진 정보를 구별합니다 — 임상적으로 음성인 것, 환자에게 알려지지 않은 것, 아직 평가되지 않은 것, 그리고 사례에 없는 것 — 왜냐하면 그것들을 "정상"으로 붕괴시키면 뒷받침되지 않는 임상적 사실을 주입하기 때문입니다([[medeasy-ai-standardized-patients|Gao et al. (2026)]]).
- **모의 에이전트:** AI는 환자(의학 훈련을 위해), 학생([[teacher-role|teacher]] 연습을 위해), 또는 대화 동반자를 모의할 수 있어, 고위험의 대인 관계 연습을 접근 가능하고 반복 가능하게 만듭니다. [[teacher-education|teacher education]]에서, [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]]는 흔한 비례 추론 [[misconceptions]]를 지닌 [[k-12|middle school]] 학생의 역할을 맡은 맞춤형 ChatGPT [[conversational-ai|chatbot]]인 *Student GPT*를 만들어, 예비 [[math-education|mathematics]] 교사들에게 학생 사고를 진단하는 데 있어 값싸고 내용 특정적인 연습을 제공했습니다 — 그리고 모의 학생의 역할극 강점(명료성, 관련성, 오류 일관성)과 진정성 약점(교사 같은 어조, 역할 혼동)을 체계적으로 평가하는 데 [[affective-computing|Affective]], Communicative, Technical (ACT) 코딩 프레임워크를 사용했습니다.
- **반사실적 역사를 일류 기능으로 만드십시오.** SupplyNet의 맥락적 다중 에이전트 [[llm|LLM]] 에이전트들은 스크립트된 것이 아니라 학습자의 결정들에서 창발하는 공급망 역학을 생성하며, 그것의 분기하는 타임라인은 학습자들이 불이익 없이 이전의 선택들을 다시 방문하게 합니다 — 결정과 성과의 연결에 대해 14명의 참가자 가운데 13명이 기준선 대비 3명에 비해 높게 평가했습니다([[supplynet-visual-exploratory-learning|Li et al. (2026)]]).
- **기반을 둔 역학이지, 프롬프트된 인격이 아닙니다.** [[adaptive-virtual-patient-psychotherapy-training|Chen et al. (2026)]]는 거의 2,000시간의 실제 심리치료 전사록으로부터 가상 환자의 자기 개방 역학을 매개변수화한 뒤, 매 차회 그 수준을 갱신했습니다. 20명의 임상의와 함께한 1,033 차회에 걸쳐 그것의 자기 개방은 치료사의 공감과 탐구와 함께 상승한 반면, 같은 LLM 위의 프롬프트 전용 기준선은 평평하게 머물렀습니다.
- **역할극이 학습자를 그 배역에 넣습니다.** 모의 에이전트가 상대방을 제공하는 곳에서, 역할극은 그 배역을 대신 학습자에게 줍니다. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari and colleagues (2026)]]는 9–10세 아동 18명이 사회적 로봇에 의해 연기된 괴롭힘 장면을 보고, 각 인물의 입장에 대해 추론한 뒤, 로봇 아바타를 인형 놀이하듯 조종하여 방어하는 예행연습을 하게 했으며, 방어에 대한 지각된 [[self-efficacy]]의 향상과 괴롭힘에 맞서는 것이 실제로 그것을 멈추는지에 관한 더 잘 보정된 신념을 보고했습니다. 그들의 틀 짓기인 로봇 매개 응용 드라마는 Forum Theatre 역할에 인간 촉진자를 유지하고 자동화를 서사 통제에 한정하며, 이것은 역할극의 요구되는 부분이 기계가 아니라 성찰이라는 유용한 상기입니다. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga and Johnson (2025)]]는 역할극을 AI 지원 온라인 학습이 의존하는 전략들 사이에 모의와 나란히 놓습니다.
- **모의 학습자:** 학생 행동의 모델들은 [[research-methods-aied|researchers]]과 설계자가 실시간 배치 이전에 튜터링 시스템과 [[curriculum-design|curriculum]]을 시험하게 하며, [[student-modeling]]과 [[knowledge-tracing]]에 기반을 둡니다.
- **신뢰와 충실도:** 모의의 가치는 실제 맥락을 얼마나 충실하게 모델링하는지 — 그리고 그것의 한계에 대한 학습자의 인식 — 에 달려 있으며, [[trust-calibration]]과 연결됩니다.
- **인간다움은 모델이 아니라 상호작용의 속성입니다.** 두 백엔드가 같은 아바타 뒤에 렌더링되자, 텍스트 기반 인간다움 이점은 사라졌습니다. 참가자들은 상업 모델을 자연스럽다고 불렀으나(54% 대 22%) 의사소통 수행은 동일했습니다. 음성, 지연, 그리고 차례 교대가 같은 대화의 질이 지각되는 방식을 재형성했습니다([[sophie-clinical-communication-ai-assessment-2026|Hasan et al. (2026)]]).
- **모의 기반 학습에서의 [[generative-ai|GenAI]].** [[genai-scenario-based-healthcare-education-2026|Neto and colleagues (2026)]]는 의학 교육에서 시나리오, 사례, 문제, 그리고 모의 기반 학습에 걸친 GenAI를 [[meta-analysis-systematic-review|systematically review]]하여, 고차원 인지 기술에 대해서는 긍정적 결과를 발견했으나 다른 곳에서는 일관되지 않은 결과를 발견하며, 하이브리드 [[human-ai-collaboration|human-AI collaboration]]이 완전 자동화된 접근을 능가함을 보였습니다. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger, and Liening (2026)]]는 사업 모의 게임에서의 적응적 지원을 위한 AI 대화 에이전트를 개발하며, 모의 기반 학습에서 제한된 [[formative-assessment|formative]] 피드백과 구조화된 성찰의 흔한 공백을 다룹니다.
- **"진정성 간극"이 AI 모의가 대체할 수 있는 것에 경계를 긋습니다.** [[medical-education|clinical]] 모의에서, [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]]의 AI 추동 간호 모의에 관한 [[mixed-methods-research|mixed-methods]] 체계적 고찰(19개 연구, N=1,253)은 AI가 인지적 지식과 정서적 결과에는 효과적이나 복잡한 정신운동 기술에는 일관되지 않음을 발견합니다. 그들의 **진정성 간극** 개념 — 정서적 공명, 비언어적 단서 인식, 그리고 촉각적/신체적 검진 차원에서 학습자가 지각하는 부족 — 은 *왜* AI 모의가 고도로 구조화된 목표(기초 의사소통, 병력 청취)에 가장 적합한지를 설명하며, 고급 정신운동과 정서적으로 복잡한 시나리오를 인간 표준화 환자와 임상 배치에 넘기는 **단계적 모의 연속체** 안에 놓여야 한다고 말합니다. 기술적 불안정(예컨대 음성 인식 지연)은 외재적 [[cognitive-offloading|cognitive load]]와 불안을 더할 수도 있으므로, 충실도와 안정성이 그 자체로 설계 지렛대입니다. 이것은 [[genai-scenario-based-healthcare-education-2026|Neto et al.'s]]의 발견인 하이브리드 인간–AI 접근이 완전 자동화된 것을 능가한다는 것과 평행합니다.
- **교사–AI 공동 설계 모의.** 개념적 학습과 역량 발달을 모두 떠받치는 상호작용적 모의는 실습 영역에서 드물며, GenAI 산출물은 종종 교수법적 타당성을 결여합니다. [[stem-education|drone-based STEM education]]에서, 달리 동일한 실습 교육 과정 안에 내장된 교사–AI 공동 설계 모의는 30명의 중등 학생에 걸친 준실험적 사전–사후 설계로 평가되어, 모의 지원 교수가 우수한 [[learning-gains|learning outcomes]]을 산출하는지를 검사했습니다([[simulation-assisted-drone-learning-stem-2026]]). 별도로, ASTRA 같은 [[agentic-ai|multi-agent]] 튜터링 [[benchmark|benchmarks]]는 [[cs-education|introductory programming]]에서 참여가 균형 잡힌 협력을 연구하기 위해 모의된 사회적으로 지능적인 에이전트를 사용합니다([[astra-multi-agent-tutoring-benchmark-2026]]).
- **모의 속의 학습자 통제는 부여되는 것이 아니라 실천됩니다.** 무리짓기 모의에서의 2 × 2 실험([[learner-agency-ai-simulation-2026|Su, Nair and Nagashima 2026]])은 일부 학생들에게 매개변수 슬라이더를, 일부에게는 선택적 대화 에이전트를, 일부에게는 둘 다를 주었습니다. 모든 조건이 향상되었으나, 선행 지식이 통제되자 어느 편의 장치도 신뢰할 만한 차이를 만들어내지 못했습니다(p = .849와 p = .108). [[learning-gains|gains]]를 예측한 것은 학습자들이 매개변수를 어디에서, 얼마나 오래 조작했는가였습니다. 개념적으로 가장 복잡한 수업에서의 지속적인 슬라이더 사용은 향상과 양적으로 연관되었고, 더 쉬운 수업에서의 같은 행동은 음적으로 연관되었습니다. 모의 구축자들에게 함의는 통제를 제공하는 것이 개입이 아니라는 것입니다 — 학습자들이 무엇을 바꿀지 결정하도록 돕고, 무엇이 바뀌었는지를 등록하게 하는 것이 개입입니다.
- **디지털 트윈은 하드웨어 청구서가 붙은 모의이며, 그 청구서가 누가 참여할 수 있는지를 규정합니다.** [[engineering-education|engineering]]과 STEM 고등 교육에서 디지털 트윈에 관한 11개 연구의 [[meta-analysis-systematic-review|systematic review]]는 모든 구현이 실시간 동기화와 함께 작동하는 프로토타입을 제공했으나, 단 세 개만이 통계적으로 유의미한 [[learning-gains|learning gains]]를 보고했음을 발견했습니다. 물리적 장비는 다섯 연구에서 접근을 동시 학생 1–3명으로 제한했으며, 감소된 사회적 상호작용이 여섯 연구에서 가장 많이 언급된 교수법적 도전이었습니다([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González et al. (2026)]]).
- **에이전트 기반 모의는 메타인지 이론을 검증 가능한 체계로 모형화할 수 있습니다.** 5수준 AMERT 모델과 NetLogo 모의를 결합한 에이전트 기반 디지털 트윈 발상의 틀은 연구자가 학습자 원형과 과제 조건을 바꾸며 메타인지 궤적을 관찰할 수 있게 했습니다. 다만 저자들은 그 산출물이 가설 생성일 뿐 실제 학습자에 관한 증거가 아니라고 강조합니다([[agent-based-digital-twin-metacognition-2026|Guo, 2026]]). 모의는 달리 관찰하기 어려운 이론을 위한 가상 실험실이 됩니다.

### 연결

모의는 [[active-learning]], [[adaptive-learning]], 그리고 [[pedagogical-agent]]와 연결됩니다. 그것은 경험적이고 [[constructivist]] 학습을 위한 기제이며, 적응적이고 현실적인 연습 환경을 생성하는 AI의 능력에 의해 증폭됩니다.

## 흔한 오해

- **"모의는 더 저렴하므로 차선책이다."** 자율 [[llm|LLM]] 모의 조종사는 **항공 교통 관제 모의를 담당하는 전문 인간 역할 수행자를 대체하여 훈련 용량의 병목을 없앱니다**. 제약은 충실도가 아니라 인력이었습니다. 인간 역할 수행자를 구하기 어려운 곳에서 LLM 모의는 대체물이 아니라 유일하게 가능한 선택입니다.
- **"모의 장치는 평균적인 사례처럼 행동해야 한다."** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]]은 정책 에이전트를 **적대적으로 행동하도록 설계된 LLM 환자 모의 장치**와 짝지웁니다. 협력적으로 설계된 모의 장치는 학습자의 연습을 실제 진료보다 쉽게 만들며, 이는 훈련이 필요로 하는 것과 정반대입니다.
- **"대본이 있는 시나리오는 불확실성 속의 의사결정을 가르친다."** SupplyNet의 맥락적 다중 에이전트는 대본이 아니라 **학습자의 결정에서 창발하는 역학**을 생성합니다. 대본 시나리오는 알려진 경로를 예행연습하고, 창발적 시나리오는 결정을 예행연습합니다.

## 연결된 개념

- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — 화학 교육과 AI: 실험실, 형성 평가, LLM의 한계, 실험의 철학
- [[biology-education]] — 생물학 교육과 AI: 실험실 교수 조력자, 생물학 속의 AI 리터러시, 비판적 사고, 전문화된 도구
- [[ai-technologies]] — 우산 항목: AI 기술과 기법 (모델, LLM 훈련, 로봇공학, RAG, 에이전틱)
- [[virtual-and-augmented-reality]] — 모델이지, 양식이 아니다 — 몰입 환경은 대개 모의를 렌더링한다

## 연결된 문서

- [[learner-agency-ai-simulation-2026]] — 복잡계 모의에서의 매개변수 통제와 선택적 AI 에이전트: 향상이 접근이 아니라 실천을 추적했다
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — 심리치료 훈련을 위한 적응형 가상 환자
- [[ai-enabled-serious-games]] — AI 활용 진지한 게임
- [[anvil-ai-educational-animations]] — ANVIL: 강의자를 위한 비유와 영상
- [[astra-atco-training-simulator]] — ASTRA: ATCO 훈련 시뮬레이터
- [[supplynet-visual-exploratory-learning]] — SupplyNet: 시각적 탐구 학습
- [[medeasy-ai-standardized-patients]] — MedEASY: AI 표준화 환자
- [[remind-robot-mediated-roleplay-antibullying-2026]] — 목격자 개입을 위한 로봇 매개 역할극 게임 (응용 드라마)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — 시나리오 기반 의학 교육에서의 GenAI 체계적 고찰 (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — 사업 모의 게임을 위한 AI 대화 에이전트의 CAIS-GBL 프레임워크 (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — 협력적 문제 해결 대화를 재현하는 미세조정된 참가자 특정 LLM 에이전트 (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — 다중 에이전트 튜터링과 참여 균형 잡힌 협력을 위한 ASTRA 합성 벤치마크
- [[simulation-assisted-drone-learning-stem-2026]] — 교사–AI 공동 설계 스캐폴드를 활용한 모의 지원 드론 학습
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — 간호학에서의 AI 추동 모의: 혼합 방법 체계적 고찰 (진정성 간극, 단계적 연속체)
- [[sophie-clinical-communication-ai-assessment-2026]] — 규모 있는 AI 기반 임상 의사소통 훈련과 자동화 평가
- [[caee-digital-twins-stem-education-systematic-review-2026]] — STEM 교육에서의 디지털 트윈: 프로토타입은 모두 작동했고, 학습 향상은 대부분 그렇지 못했다
- [[li-ahmad-ai-virtual-lab-flipped-physics-2026]] — 뒤집힌 물리 학습을 위한 AI 지원 가상 실험실: 중학생의 성취도, 동기, 인지 부하에 미치는 효과
