---
title: 게임 기반 학습
created: "2026-08-13T18:49:42-04:00"
updated: "2026-09-30T12:53:22-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **게임 기반 학습(GBL)** — 게임의 메커니즘, 도전, 진행이 교육적 내용물을 담은 채, 게임 자체(디지털 또는 물리적)를 학습의 매체와 맥락으로 사용하는 것을 말합니다. 학습자는 *플레이를 통해* 배웁니다. 유관하게, **게임화**는 게임 설계 요소(점수, 배지, 등급, 순위표)를 그것들을 온전한 게임으로 만들지 않고 비게임 학습 활동에 적용합니다. AI와 [[educational-robotics|로봇공학]] 교육에서 두 접근 모두 기술적 내용물을 흥미롭고 동기 부여되게 만드는 데 사용됩니다.

## 생각해 볼 질문들

- 게임 기반 학습은 게임 자체를 학습의 매체로 사용합니다 — 여러분은 *플레이를 통해* 배웁니다. 게임화는 단지 점수, 배지, 등급을 비게임 활동 위에 겹칩니다. 실제 학습에 미치는 효과 대 단기적 참여에 미치는 효과에서 둘이 얼마나 다르다고 생각하십니까?
- 비교 검토는 게임 기반 학습이 비형식 환경에서 더 만연한 반면 게임화가 형식적 교실을 지배하고 프로젝트 기반 학습을 선호한다는 것을 발견했습니다. 각 접근이 서로 다른 거처를 찾은 이유는 무엇이며, 그것은 각각이 어디서 가장 잘 작동하는지에 관해 우리에게 무엇을 말해 줍니까?
- 게임화는 자기결정이론 — [[agency|자율성]], 유능감, 관계성 — 에 뿌리를 둡니다. 동기가 그런 필요의 충족에 관한 것이라면, 점수와 배지 체계가 지각된 노력과 주의를 어떻게 형성하는지에 따라 성공하거나 실패할 수 있는 이유는 무엇입니까?
- [[research-methods-aied|연구]]는 게임 같은·AI 지원 설계의 동기적 이득이 게임화만이 아니라 그것이 지각된 업무량과 주의를 어떻게 형성하는지에 달려 있음을 시사합니다. 게임이나 배지가 실제로 학습을 개선하지 않고 참여만 높인 것을 — 혹은 그 반대를 — 언제 보셨습니까?

## 들어가며

GBL은 [[motivation]], [[student-engagement]], [[active-learning]] 이론에 뿌리를 둡니다: 게임은 내재적 동기, 즉각적 피드백, 실제적 문제 맥락을 제공합니다. 그것은 [[simulation]], [[project-based-learning]], [[educational-robotics]]과 겹칩니다. GBL은 게임이 추상적 기술 개념을 구체적이고 재미있게 만들 수 있는 [[educational-robotics]], [[computational-thinking]], [[cs-education]]에 특히 적절합니다.

### 지식베이스의 연구에 GBL이 나타나는 방식

- **로봇공학 교육:** 로봇공학 교육에서의 게임 기반 학습과 게임화에 관한 [[game-based-gamified-robotics-education-review-2026|비교 체계적 검토]]는 GBL이 비형식 환경에서 더 만연한 반면, 게임화가 형식적 교실을 지배하고 [[project-based-learning|프로젝트 기반 학습]]을 선호한다는 것을 발견했습니다.
- **로봇 매개 게임:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]는 따돌림 방지 개입을 위한 로봇 매개 역할극 게임이고, [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]는 동기를 높이기 위해 상호작용적 [[storytelling-in-education|디지털 스토리텔링]]을 사용합니다.
- **모의 게임에서의 AI [[conversational-ai|대화 에이전트]]:** Wenzel, Geiger, and Liening (2026)은 디지털 게임 기반 학습에서의 AI 대화 에이전트를 위한 네 가지 설계 원칙과 열다섯 가지 설계 특성으로 이루어진 CAIS-GBL 틀을 인지적, 동기적, [[affective-computing|정서적]], [[sociocultural-learning|사회문화적]] 참여에 걸친 이론 기반 메타 요건으로부터 도출하며, [[equity-in-ai-education|형평성]]에 의한 설계 입장을 취합니다. 경영 모의 게임에서의 그들이 구현한 에이전트(Lara)는 인지적·[[community-of-inquiry|사회적 현존]]과 [[self-regulated-learning]] 지원에 대해 긍정적으로 받아들여졌으며, 모의 게임에서 흔한 간극인 제한된 [[formative-assessment|형성적]] 피드백과 구조화된 성찰의 부재를 다룹니다.


- **AI-GBL 효과:** AI 지원 게임 기반 학습에 관한 55개 연구의 체계적 검토는 지식, 내재적 동기, 정서적 참여에 긍정적 효과를 발견하지만, 단 4개 연구(7%)만이 High-quality 기준을 충족했고 단 4개(7%)만이 [[rct|RCT]]였습니다([[ai-game-based-learning-systematic-review-2026|Kaşarcı & Yurt, 2026]]). 효과는 AI 메커니즘을 명시된 [[learning-theories|학습 이론]]과 정렬하는 데 달렸습니다.

### 게임화

**게임화**는 사용자를 동기 부여하고 참여시키기 위해 게임 설계 요소(점수, 배지, 등급, 순위표, 도전, 진행 막대)를 비게임 맥락에 적용하는 것입니다. 게임 기반 학습 — 학습이 *게임을 통해* 일어나는 곳 — 과 달리, 게임화는 그것을 온전한 게임으로 만들지 않고 게임 메커니즘을 기존 학습 활동 위에 겹칩니다. 그것은 교육에서 동기, [[student-engagement]], 지속성을 높이는 데 쓰이며, 형식적 교실 환경에 널리 적용됩니다.

게임화는 동기 이론, 특히 [[self-determination-theory]](자율성, 유능감, 관계성을 뒷받침하는 것)과 행동 변화 틀에 뿌리를 둡니다. 그것은 로봇공학 같은 응용 분야에서 [[project-based-learning]]과 특별한 시너지를 보여 왔습니다. 지식베이스의 연구에서:
- **로봇공학 교육:** 비교 검토는 게임화가 로봇공학 교육에서 형식적 교실을 지배했다는 것(p < .001)과 [[project-based-learning|프로젝트 기반 학습]]을 강하게 선호했다는 것(p = .009)을 발견한 반면, 게임 기반 학습은 비형식 환경에서 더 흔했습니다.
- **참여와 동기:** 게임화는 AI, [[cs-education|프로그래밍]], [[stem-education|STEM]] 학습 맥락에서 학습자 참여와 동기를 높이기 위해 지식베이스 전반에 쓰입니다. [[genai-motivation-engagement-2026|생성형 AI, 동기, 참여]] 연구는 게임 같은 요소가 AI와 결합하여 학습자의 흥미를 어떻게 유지하는지를 검토합니다. 두 개의 2026년 연구는 게임화되고 AI 지원되는 조건을 전통적 교수와 비교하여 이를 확장합니다: [[nasa-tlx-workload-gamified-ai-2026|NASA-TLX 연구]]는 전통적, 게임화된, AI 지원 학습 조건에 걸쳐 지각된 업무량을 측정했고, [[arcs-motivational-ergonomics-gamified-ai-2026|ARCS 연구]]는 [[professional-training|직장 훈련]]에 함의를 지닌 게임화되고 AI 지원되는 학습에서 동기적 "인체공학"을 검토했습니다. 둘은 함께 게임 같은·AI 지원 설계의 동기적 이득이 게임화만이 아니라 그것이 [[motivation|지각된 노력]], 업무량, 주의(예: ARCS 주의/적합성 차원)를 어떻게 형성하는지에 달려 있음을 분명히 합니다.

GBL과 게임화는 함께 [[educational-robotics]], [[student-engagement]], [[motivation]], [[self-determination-theory]], [[active-learning]], [[simulation]], [[project-based-learning]], [[computational-thinking]]에 연결됩니다.

## 연결된 개념
- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — 상위 개념: AI 교육의 교수법과 교수 전략
- [[virtual-and-augmented-reality]] — 몰입적이고 게임화된 연습은 설계와 증거에서 겹친다

## 연결된 문서
- [[ai-game-based-learning-systematic-review-2026]] — AI 지원 게임 기반 학습 연구 55건의 체계적 검토: 긍정적 결과, 얇은 증거 기반

- [[game-based-gamified-robotics-education-review-2026]] — 게임 기반·게임화 로봇공학 교육
- [[remind-robot-mediated-roleplay-antibullying-2026]] — 목격자 개입을 위한 로봇 매개 역할극 게임 (응용 드라마)
- [[motibo-digital-storytelling-robots-motivation-2026]] — 동기를 위한 로봇 매개 디지털 스토리텔링(MotiBo)
- [[bots-blocks-project-based-robotics-education-2026]] — 프로젝트 기반 로봇공학 교육을 위한 봇과 블록
- [[white-wu-robotics-ai-education-2026]] — 교육에서의 로봇공학과 AI
- [[genai-motivation-engagement-2026]] — 생성형 AI, 동기, 참여
- [[nasa-tlx-workload-gamified-ai-2026]] — 게임화/AI 조건에 걸친 NASA-TLX 업무량
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS 동기와 AI 지원 게임화
