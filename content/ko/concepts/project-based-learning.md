---
title: 프로젝트 기반 학습
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
pedagogy: [active-learning, collaborative-learning, project-based-learning]
technology: [educational-robotics]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/project-based-learning
source_updated: "2026-10-13T11:05:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **프로젝트 기반 학습(PBL)** — 학생이 탐구, 문제 해결, 지식을 유형적 결과물을 생산하는 데 적용하기를 요구하는 장기적이고 실제 세계적인 프로젝트에 참여함으로써 배우는 능동적이고 학습자 중심적인 [[pedagogy]]입니다. PBL은 학생 [[agency|자율성]], 협업, [[authentic-assessment|실과제 과제]]를 강조하며, 학습자에게 실습적이고 의미 있는 프로젝트를 제공하기 위해 [[educational-robotics|교육용 로봇공학]]과 AI를 포함한 기술과 함께 널리 사용됩니다. 이것은 순수하게 이론적이거나 강의 중심의 수업과 대조됩니다.

## 생각해 볼 질문들

- 진정으로 '하면서 배운' 마지막 순간 — 실제로 무언가를 만들고, 설계하고, 창작한 순간 — 을 떠올려 보십시오. 같은 주에 앉아서 들었던 강의와 비교해 무엇이 그 경험을 기억에 남게 만들었습니까? 그 차이가 학생들이 AI나 로봇공학을 배우는 방식에 어떻게 전이될 수 있을까요?
- PBL과 문제 기반 학습(PBL)은 자주 혼동되지만, 둘은 다릅니다: 하나는 유형적 프로젝트를 생산하는 것을 중심에 두고, 다른 하나는 비구조적 문제를 해결하는 것을 중심에 둡니다. 읽기 전에, 둘을 어떻게 구분하시겠습니까 — 그리고 그 답이 코스를 어떻게 설계해야 하는지에 중요한가요?
- 한 로봇공학 연구가 민첩한(agile) 한 학기에 걸친 프로젝트로 '이론-실천 격차'를 다뤘습니다. 자신의 분야에 대해 생각해 보십시오. 학생들이 가르침을 받는 것과 실제로 할 수 있는 것 사이의 격차는 어디에서 열리기 쉬우며, 그것을 닫기 위해 프로젝트 기반 접근은 무엇을 필요로 할까요?
- PBL은 학생 자율성, 협업, 실과제 과제를 강조합니다. 그러나 학습자들은 자기 자신을 이끌 준비성에서 다릅니다. 자기 주도에 대한 지원 없이 장기 프로젝트를 교실에 던져 넣는다면 무엇이 잘못될 수 있으며, 누가 가장 큰 피해를 입을까요?
- PBL은 연구에서 게임화와 교육용 로봇공학과 널리 결합됩니다. 당신의 경험에서, 재미와 [[student-engagement|참여]]는 언제나 깊은 학습의 신뢰할 만한 대리 지표인가요, 아니면 잘 채점된 '게임'이 얕은 이해를 가릴 수 있나요?
- 계속 읽기 전에 스스로에게 물어보십시오: 프로젝트 기반 학습이 특정 학습 결과에 대해 강의 중심 수업을 실제로 능가한다는 것을 당신에게 확신시킬 구체적 증거는 무엇이며, 실제 코스에서 그 증거를 모으는 것은 얼마나 어렵습니까?

## 들어가며

PBL은 [[active-learning]], [[experiential-learning]], [[collaborative-learning]], [[constructivist]] 교수법과 밀접한 관련이 있습니다. 그것은 특히 AI와 로봇공학 교육에서 가치 있는데, 이 분야들은 본질적으로 응용적이기 때문입니다: 학습자는 로봇, 알고리즘, 시스템을 프로젝트 맥락에서 만들고 시험함으로써 가장 잘 이해합니다. PBL은 또한 [[computational-thinking]], 문제 해결, [[self-regulated-learning|자기 주도]]를 기릅니다.

프로젝트 기반 학습은 [[problem-based-learning|문제 기반 학습]]과 밀접한 관련이 있지만 구분됩니다: 둘 다 학습자 중심이고 맥락 주도적이지만, 문제 기반 학습은 해결이 탐구와 지식 구성을 요구하는 비구조적 *문제*를 중심에 두는 반면, 프로젝트 기반 학습은 유형적 *프로젝트*나 산출물을 생산하는 것을 중심에 둡니다. 둘은 자주 혼동되며, 많은 AI 교육 프레임워크가 둘 모두에 의존합니다(AI 시대의 다루음은 [[problem-based-learning|문제 기반 학습]] 페이지를 참고하십시오).

### PBL이 지식 베이스의 연구에 나타나는 방식

- **로봇공학 프로젝트:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]]는 응용 [[cs-education|컴퓨터 과학]] 프로그램에서 로봇공학을 가르치는 민첩하고 한 학기에 걸친 프로젝트 기반 접근을 제시하며, 이론-실천 격차를 다룹니다.
- **AI 에이전트와 함께하는 유아기의 프로젝트 접근법:** [[creative-project-approach-ai-early-childhood-2025|Yang, Li and Lee (2025)]]는 PBL의 기초 형태 — 실제 세계 주제에 대한 장기적 협업 탐구인 프로젝트 접근법(Katz & Chard) — 을 [[early-childhood-elementary-ai-education|유아기]]로 확장하여, 영유아의 [[creativity|창의적 학습]]을 기르기 위해 프로젝트에 [[agentic-ai|AI 에이전트]]와 [[educational-robotics|로봇]](코딩 로봇과 생성형 소셜 로봇)을 통합하는 5단계 **창의적 프로젝트 접근법**을 제안합니다. 다섯 단계 — 학습 필요 파악, [[teacher-role|교사]] 주도 아동-로봇 상호작용 촉진, AI를 맥락에 위치시키기, 자동화/창의성 균형 보정, 결과 평가 — 는 탐구를 이끄는 촉진자로서 교사를 유지하며, PBL을 가장 어린 학습자들과 함께 발달에 적절한 AI 사용을 위한 자연스러운 수단으로 자리매김합니다.
- **게임화 결합:** [[game-based-gamified-robotics-education-review-2026|체계적 검토]]는 로봇공학 교육의 [[game-based-learning|게임화]]가 프로젝트 기반 학습을 강하게 선호한다는 것을 발견했습니다(p = .009).

이 결합에 대한 유일한 3수준 메타분석은 22건의 대조 연구(66개 효과크기, 2023년 1월부터 2026년 4월까지)를 종합하여 생성형 AI가 지원하는 PBL/PjBL의 큰 효과를 추정하며, g = 0.819, 95% CI [0.655, 0.983]이지만, 저자들의 PET-PEESE 민감도 분석이 그 추정치를 g = 0.378로 낮추므로, 주목할 만한 수치는 잠재적으로 부풀려진 것으로 읽어야 합니다 ([[chen-pbl-pjbl-genai-meta-analysis-2026|Chen et al. 2026)]]). 도구 유형이 효과를 유의하게 조절했습니다(QM = 14.301, p < .001): 직접 사용된 일반 챗봇은 코스 플랫폼, 가상 환자, 에이전트로 맞춤화된 시스템(g = 0.455)보다 더 높게 종합되었으며(g = 0.970), 이는 어떤 모델을 선택하는지보다 도구가 어떻게 내장되느냐가 더 중요함을 시사합니다.
- **AI 리터러시와 공동 설계:** PBL은 학습자들이 AI 도구나 자료를 공동 창작하는 많은 [[ai-literacy|AI 리터러시]]와 [[teacher-education]] 개입의 기반이 됩니다.
- **AI 에이전트가 지원하는 소프트웨어 PBL:** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka et al. (2026)]]는 팀 기반 학부 소프트웨어 PBL 수업에 사양 주도 개발(Spec-Driven Development)을 [[agentic-ai|AI 에이전트]]와 함께 내장하여, 프로젝트를 조사, 계획, 구현, 검토 단계로 구조화하고 교수자가 운영하는 이해도 점검과 짝지었습니다.
- **내장 교수 에이전트를 갖춘 몰입형 VR 스튜디오:** [[ai-ive-pbl-vocational-design-creativity-2026|Jin et al. (2026)]]는 직업 디자인 교육을 위해 **AI-IVE-PBL** 모델을 규정하며, PBL을 AI가 활성화한 몰입형 가상 환경([[virtual-and-augmented-reality|VR]] 헤드셋과 [[llm]] 기반 교수 조교)과 짝지었습니다. 직업 학습자들을 위한 PBL의 관례적 제약 — 제한된 장비, 재현하기 어려운 시나리오, 지연된 교사 [[scaffolding]] — 은 몰입과 세션 내 에이전트에 의해 흡수되며, 이 모델은 단계별로 명명된 행위자와 산출물을 갖춘 5단계 순환(발견, 구상, 모델링, 소통, 정제)으로 기술되며, 지속적인 아이디어 발전 담화에 의해 추동됩니다. 12주 준실험(n = 63)에서 해당 조건은 디자인 능력과 창의적 능력을 높이고 인지적, 행동적 [[student-engagement|참여]]를 향상시켰으나, 관념적 새로움(혁신적 사고)과 정의적 참여는 변하지 않았습니다 — 이는 프로젝트 가치의 디자인 특정 부분과 관념적 부분이 함께 움직이지 않는다는 상기입니다.
- **규모 있는 에이전트 설계자로서의 학생:** [[zangari-student-created-ai-agents-codesigned-instruction-2026|Zangari et al. (2026)]]는 700명 규모의 소프트웨어 설계 강좌에서 345명의 학부생이 각자 대화형 에이전트를 만들어 동료에게 세 가지 디자인 패턴을 설명하게 했습니다 — A부분은 비계가 놓인 Dialogflow CX 실습, B부분은 개방형 설계 과제. 개방성은 가장 긍정적인 주제(22.3%)였고 불분명한 지시가 부정 주제 1위(23.7%)를 차지했으며, 지각된 학습은 퀴즈 점수와 다소 낮게만 상관되었습니다(r = 0.161–0.315). PBL에 대한 설계 교훈은, 학생이 만든 산출물이 자기 주도 교실의 소유권 이점을 AI 도구 맥락으로 옮길 수 있지만, 탐색적이고 대조군이 없는 증거는 인과적 우위가 아니라 참여 주장만을 뒷받침한다는 것입니다.

PBL은 [[active-learning]], [[experiential-learning]], [[collaborative-learning]], [[educational-robotics]], [[game-based-learning]], [[computational-thinking]], 그리고 [[higher-ed]]/[[k-12]] 교수법과 연결됩니다.

- **PBL은 AI 기반 로봇공학 학습을 뒷받침합니다.** [[educational-robotics-pathways-2026|경로 연구]]는 프로젝트 기반 로봇공학+AI 커리큘럼이 고등학생들이 실제 세계 실천, 설계, 그리고 놀이 같은 창의적 표현에 참여함으로써 배우게 한다는 것을 보여줍니다.

## AI 리터러시 수업에서의 PBL

- **AI 리터러시 수업에서 PBL 측정하기.** Zhu and Kong (2026)은 홍콩 중등 및 대학생들의 경험에 기반하여 AI 프로젝트 기반 학습 척도(AI-PBLS)를 개발하고 검증하여, 인식된 PBL이 AI [[problem-solving]]과 AI [[ethics|윤리]]적 인식에서의 역량 부여(empowerment)라는 매개 메커니즘을 통해 AI 리터러시 수업 만족도를 높인다는 것을 보여주었습니다. 이 척도는 [[research-methods-aied|연구자]]들에게 검증된 도구를 제공하며, 매개 발견은 PBL이 [[ai-education|AI 교육]]에서 내용뿐 아니라 자신감과 윤리적 추론을 쌓는 수단이라는 논거를 강화합니다.

### AI 시대의 디지털 스토리텔링과 함께하는 PBL

- [[storytelling-in-education|디지털 스토리텔링]]과 결합된 프로젝트 기반 학습은 미술과 디자인 교육에서 [[generative-ai|생성형 AI]]에 대한 교수법적 응답을 제공합니다. 426명의 학부생을 대상으로 한 15주 내재적 사례 연구는 PBL-DS 프레임워크를 구현했는데, 디지털 스토리텔링이 학생들이 지역 문화유산을 정서적으로 울림 있는 [[multimodal]] 서사로 번역하는 주된 방법론으로 기능하며, AI가 결여한 창의적 역량을 기르는 것이었습니다.

## 연결된 개념

- [[problem-based-learning]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[computational-thinking]]
- [[higher-ed]]
- [[pedagogy]] — 포괄 개념: AI 교육의 교수법과 교수 전략
- [[arts-design-and-media-education]]

## 연결된 문서

- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — 생성형 AI가 지원하는 교육의 유망한 프레임워크로서의 문제 기반 및 프로젝트 기반 학습: 체계적 검토와 3수준 메타분석의 새로운 증거
- [[pbl-structural-conditions-ai-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[bots-blocks-project-based-robotics-education-2026]] — 프로젝트 기반 로봇공학 교육을 위한 봇과 블록
- [[game-based-gamified-robotics-education-review-2026]] — 게임 기반 및 게임화된 로봇공학 교육
- [[genai-literacy-training-teacher-education-dbr-2026]] — 교사를 위한 AI 리터러시 훈련
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly 신체화된 블록 프로그래밍
- [[white-wu-robotics-ai-education-2026]] — 교육의 로봇공학과 AI
- [[educational-robotics-pathways-2026]] — AI 기반 교육용 로봇공학 학습으로 가는 경로(2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — PBL은 지배적인 CT 학습 전략이다
- [[creative-project-approach-ai-early-childhood-2025]] — 창의적 프로젝트 접근법: 유아기 프로젝트 접근법 속의 AI 에이전트와 로봇공학(Yang, Li & Lee 2025)
- [[spec-driven-development-ai-agents-sdpbl-2026]] - 팀 소프트웨어 PBL에서 AI 에이전트와 함께하는 SDD
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: 내장 교수 에이전트가 있는 몰입형 VR 디자인 스튜디오, 전통적 PBL과 비교 평가됨(Jin et al. 2026)
