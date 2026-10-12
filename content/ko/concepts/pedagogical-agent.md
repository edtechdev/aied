---
title: 교수 에이전트
created: "2026-08-08T11:47:01-04:00"
updated: "2026-10-03T02:57:43-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/pedagogical-agent
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **종합**: [[pedagogy|교수법적]] 에이전트는 학습 환경에 내장된 AI 기반 대화형 인터페이스로, 교수법적 전략(끌어내기, 말하기, 비계 달기)을 사용하여 [[student-engagement|학습자 참여]], 성찰, 메타인지를 지원합니다. 설계는 단순한 정보 제공자로부터 학습자 상태에 적응하는 상호작용적 대화 파트너에 이르기까지 다양합니다.

## 생각해 볼 질문들

- 챗봇이나 교사가 완벽한 답을 주었는데도 당신이 더 알게 되지 않았던 때를 떠올려 보십시오. AI가 단순히 '푸는' 것이 아니라 '가르치게' 만드는 것은 무엇이며, 벤치마크 점수가 왜 그 차이를 포착하지 못할 수 있습니까?
- 이 페이지는 교습 '풀기' 점수와 '교수법' 점수가 모형들 사이에서 약하게만 상관됨을 발견합니다. AI 교사를 질문에 답하는 능력으로 평가하는 것에 대해 그것이 무엇을 말해 주어야 합니까?
- 어떤 설계는 AI에게 뚜렷한 역할 — 교사, 급우, 멘토 — 을 주고, 심지어 부모를 중심에 두기도 합니다(ParaTutor처럼). 당신의 경험에서, 에이전트에게 명확한 역할을 부여하는 것이 [[learners]]가 그것과 상호작용하는 방식을 바꿉니까?
- 실제 학생은 에이전트의 목표가 학습자 자신의 목표와 충돌할 때 챗봇의 교수법적 틀을 종종 '건너뜁니다'. 학습자가 좋은 비계를 이성적으로 무시할 수 있는 이유는 무엇이며, 그것이 '만들면 참여할 것이다'라고 가정하는 것에 대해 무엇을 함의합니까?
- 당신은 당신에게 알려 주는 AI, 질문을 던지는 AI, 집단 토론을 중재하는 AI 중 어디서 배우겠습니까? 당신의 선호가 '교수 에이전트'가 무엇이어야 한다는 생각을 어떻게 형성합니까?
- 단순한 정보 제공자로부터 한 강좌 전체를 조율하는 전문화된 에이전트 무리까지 — 대화형 AI 교습의 가치(와 위험)가 실제로 어디에 놓여 있다고 생각하십니까?

## 들어가며

교수 에이전트는 대화, 질문, 또는 프롬프트를 통해 학습자와 교류하여 인지적 및 [[metacognition|메타인지적 과정]]을 지원하는 학습 시스템 안의 상호작용적 AI 구성요소입니다. 수동적인 [[visualization|대시보드]]나 정적 되먹임과 달리, 교수 에이전트는 증거에 기반한 교습 전략을 사용합니다 — 예컨대 [[feedback]]을 주기 전에 학습자의 자기 [[assessment|평가]]를 끌어내거나, 소크라테스식 대화를 통해 [[problem-solving]]에 [[scaffolding]]을 다는 것. 이 우산 개념은 이제 단일 대화형 [[intelligent-tutoring|지능형 교사]]로부터 수십 년간의 지능형 교습 시스템 [[research-methods-aied|연구]]에 뿌리를 둔, 강의하고 멘토링하고 협력을 촉진하며 심지어 강좌 생성을 조율하는 역할 전문화 [[agentic-ai|에이전트]] 무리에 이르기까지 모든 것을 포괄합니다.

## 지식베이스에서 교수 에이전트가 연구되는 방식

**대화형 에이전트의 설계와 아키텍처.** 되풀이되는 실마리는 에이전트가 어떤 모형으로 구동되는지뿐 아니라 어떻게 구조화되는가입니다. [[conversational-ai-tutors-framework|대화형 AI 교사 프레임워크]]는 검증된 ITS [[ai-technologies|기술]] — [[knowledge-tracing]], 정서 탐지, [[student-modeling|학생 모형화]] — 이 생성형 교사를 닻 내려, 진단적 골격을 유지하면서 [[generative-ai]]가 유연한 대화를 공급하게 해야 한다고 논합니다. 다중 에이전트 설계는 이를 더 밀고 나갑니다: [[mooc-to-maic|MAIC]]는 [[online-teaching-and-learning|MOOC]]의 "N명 학생에게 영상 하나"를 교사, 조교, 급우, 분석가 에이전트로 이루어진 [[llm]] 기반 교실로 대체하여 규모 있는 [[personalized-learning|개인화 학습]]을 제공하고, [[lecturaagents-multi-agent-teaching|LecturaAgents]]는 TASA 알고리즘이 가시적인 [[teacher-role|교수]] 행동(필기, 강조)을 학습자 프로파일에 정렬하는 [[embodied-learning|구현된]] ProfessorAgent를 더합니다. 심지어 부모–자녀 교습도 [[paratutor-parent-child-tutoring|ParaTutor]]에서는 두 에이전트 문제가 되어, 역할 분리된 비계가 범용 챗봇이 부모를 대체하게 두지 않고 부모를 중심에 둡니다. 같은 역할 기반 논리는 [[instructional-agents-multi-agent-course-gen|Instructional Agents]]에도 나타나, 교수진, 설계자, 조교, 학과장 에이전트가 ADDIE 전반에 걸쳐 협력하여 강좌 자료를 생성합니다.

역할 기반 에이전트의 상보적 용도는 학생 학습이 아니라 [[teacher-education|교사]] 실천을 표적으로 삼습니다: [[educasim-cs1-instructional-practice|Mohne 등(2026)]]은 교수법적 학생 페르소나, 실제 강좌 자료에 근거한 기억, LLM-as-judge 발화 오라클을 결합하여, 초보 교수가 소집단 분반을 예행연습하게 합니다 — 254회의 선택적 세션, 각각 평균 약 16분, 회당 약 \\$0.05–\\$0.10.

**가르치는 행동 대 푸는 행동.** 핵심 실증적 발견은 답 산출이 학습 지원이 아니라는 것입니다. [[measuring-llm-tutors-teach-vs-solve|LLM 교사가 가르치는지 푸는지 측정하기]]는 교습 벤치마크에서 풀기 점수와 교수법 점수가 약하게만 상관함을(여덟 모형에 걸쳐 r = 0.421) 보여 주며, 벤치마크가 안내 질문, 보정된 힌트, 비공개적 비계 같은 교수법 지향 기준을 별도로 보고해야 한다고 논합니다. 이것은 [[stanford-evidence-base-ai-k12-2026|교습 특정 AI 대 일반 AI]] 증거와 일치합니다: [[guardrails]]을 갖춘 교수법적으로 설계된 교사는 날것의 범용 챗봇이 내는 시험 점수 하락과 억제된 추론을 완화하여, [[desirable-difficulties|바람직한 어려움]]과 생산적 투쟁을 무력화하지 않고 보존합니다. 그러나 벤치마크는 비계가 달린 교사조차 실제 상황에서 얼마나 잘 작동하는지를 과대평가할 수 있습니다. [[rethinking-scaffolding-llm-tutors|LLM 교사에서 비계 재고하기]]는 실제 학생이 챗봇의 교수법적 틀을 자주 건너뜀을 발견합니다 — 에이전트의 목표와 학습자 자신의 목표 사이의 불일치에 대한 이성적 반응입니다 — 그러므로 수용도는 가정이 아니라 평가되어야 합니다.

**교습과 협력에서의 역할.** 에이전트는 점점 더 답 제공자가 아니라 촉진자와 중재자로 자리 잡습니다. [[niari-ai-pedagogical-mediator-collaborative-learning|Niari의 교수법적 중재자 프레임워크]]는 [[collaborative-learning|협력 학습]]에서의 AI를 상호작용적, 인식론적, 규제적 중재자로 재고합니다 — 교사나 [[agency|학습자 주체성]]을 대체하지 않고 참여와 공유된 [[regulation]]에 비계를 답니다. 구체적으로, [[golrang-propact-pair-programming-2026|협력 AI 교습(ProPACT)]]는 협력 자체를 교수의 대상으로 다루며, 이중체 붕괴를 최대 30초 앞서 예측하고 [[metacognition]]를 보존하는 최소 개입적 비계를 제공합니다. [[embodied-inquiry-ai-facilitator-physics-2026|촉진자로서의 AI와 구현된 탐구]]는 AI가 직접 만드는 모형 제작을 보완하여 구성된 모형의 적용을 촉진할 수 있음을 보여 줍니다. 한편 [[robot-assisted-language-learning-meta-analysis-2026|로봇 보조 언어 학습 메타 분석]]은 결과가 로봇 에이전트의 기술적 정교함보다 교수에서의 위치(집단 기반 상호작용)를 더 좇음을 발견합니다. 에이전트가 하는 *역할*만으로 충분한지, 아니면 *행동도 적응*해야 하는지는 [[liao-role-adaptive-ai-companion-book-talk-2026|Liao(2026)]]가 의문시합니다: [[k-12|초등학교]] "북 토크" 연구는 고정된 "학생 동료" 동반자가 더 긴 상호작용을 유지했으나 학생 주체성을 억제하고 "[[affective-computing|정서]] 천장"(약한 정서적/미래 지향 성찰)에 부딪혔음을 발견하여, 역할 *명명*이 단일 역할 설계가 아니라 역할-*적응*적 상호작용 논리와 짝지어야 한다고 논합니다.

[[ethics-training-agents-group-ethics-discussion-2026|Ethics Training Agents(Seo 등, 2026)]]은 교수 에이전트가 가르치지 않고 중재할 때 무슨 일이 일어나는지를 보여 줍니다: 발언권 관리를(15초 손 들기 창구로 누적) 하고, 시간 관리를(9분 후 마무리 단계로 자동 전진) 하며, 점진적 배치 요약을 수행한 LLM 촉진자는 참가자의 인지 부담을 줄이고 토론이 "순조롭다"는 느낌을 주었습니다 — 한 참가자는 그것을 ChatGPT와 유리하게 대비하며, ChatGPT는 "종종 산만하게 느껴지거나 아이디어의 진행을 보기 어렵다"고 했습니다. 같은 연구는 페르소나 기반 에이전트의 천장도 드러냅니다: 세 개의 뚜렷한 [[ethics|윤리]] 지향 에이전트는 기여, 다양성, 영향력 면에서 인간 동료보다 유의미하게 낮게 평가되었고(Kruskal-Wallis p < .001), 참가자는 결론 지향적이 아니라 과정 지향적("에이전트가 어떻게 추론하는지") 산출물을 요구했습니다.

**대화형 에이전트가 (그리고 있지 않은 곳이) 어디에 쓰이는가 — 우막 검토 그림.** [[conversational-ai-agents-umbrella-review-2026|대화형 AI 에이전트에 대한 우막 검토]](Ganguly 등 2025, 검토 34편)는 CAI 활용을 정량화합니다: 교수와 학습 지원(검토의 97.1%), 심리적·[[motivation|동기]]적 지원(91.2%), 메타인지적·개인 발달(88.2%)이 앞서고, 행정 지원(50%), 연구 및 정보 관리(52.9%), 의료 지원(41.2%)이 뒤집니다. 이 검토는 또한 [[conversational-ai|CAI]] 연구가 종단적 설계 지침, CAI 특정적 [[usability-research|사용성]] 방법, 교사 역할의 구체적 교실 조율 전략이 결여되어 있음을 지적합니다 — 교수 에이전트 설계가 HCI에 기반하고, 증거에 기반하며, [[ai-literacy]]에 유의해야 함을 강화합니다([[conversational-ai-agents-umbrella-review-2026]]).

**역할 지향은 양식적 선택이 아니라 설계 변수입니다.** [[wang-teacher-student-centered-agents-physics-2026|물리 에이전트 비교]](Wang 등 2026, 학습자 59명)는 모형, 플랫폼, 온도를 고정한 채 프롬프트로 규정된 역할만을 분리합니다: 한쪽은 제한된 교과서 근거에 기반해 교수의 관점에서 답하는 교사 중심 에이전트, 다른 쪽은 학생의 이해에 대한 지식을 갖추고 오해를 진단하고, 개념을 명명하고, 유사 사례로 [[transfer-of-learning|전이]]하도록 구성된 학생 중심 에이전트입니다. 학생 중심 역할은 측정된 모든 결과에서 이겼습니다 — 사후 검사 성과, 더 낮은 외재적 및 더 높은 본유적 인지 부하, 몰입 경험, 지각된 공감 — 정확성과 교과서 충실성에 최적화된 것은 교사 중심 에이전트였음에도. 이것은 *역할과 상호작용 양식*을 [[prompt-engineering|프롬프트]]와 모형 선택에 나란히 일급 설계 매개변수로 만들고, 공감이 다르게 훈련된 모형이 아니라 대화 구조로부터 공학될 수 있음을 보여 줍니다([[affective-computing]]).

**저작 의도가 실현된 교수법을 보장하지는 않습니다.** 27명의 중학교 교사가 교사 대면 챗봇 저작 도구를 구성했을 때, 108건의 봇 단위 기준 평가에서 생성된 응답은 반응성(88.9%)과 페르소나(81.5%)에는 훨씬 잘 정렬되었으나 규칙(70.4%)이나 명시된 목적(59.3%)에는 덜했으며, 저자들은 이것을 Norman의 실행의 만과 평가의 만에 대한 교수법적 형태로 틀었습니다 — 구성 가능한 통제만으로는 교수의 교수 의도가 봇의 행동에 가시화되지 않았습니다([[teachers-configure-educational-chatbots-2026|Riahi 등(2026)]]).

**몰입형 및 확장 현실 환경의 에이전트.** [[aclime-pedagogical-agents-extended-reality-2026|Ross와 Kaspar(2026)]]는 ACLIME 개념 프레임워크로 이 개념을 [[virtual-and-augmented-reality|확장 현실]](AR, 증강 가상, VR)로 확장합니다 — CAMIL, CATLM-VR, TICOL과 달리 에이전트를 모형 안에 둡니다. 이 프레임워크는 문헌에서 끌어온 두 가지 상호작용 양식에 이름을 붙입니다: 안내, 격려, 성찰 질문, 설명을 제공하는 교사, 그리고 기후 변화 현장 학습의 지역 주민이나 기업 훈련의 협상 상대방처럼 시나리오 안에 정의된 역할을 차지하는 역할극 파트너. 에이전트의 몸(머리만부터 전신까지)과 행동은 설계 표면으로 다루어집니다: 시각적 대 행동적 실재감, 유연한 AI 통제 대 고정된 규칙 기반 스크립팅, 합성 대 사전 녹음 음성, 시선, 제스처, 근접성을 포함한 비언어 채널. 몰입과 몸 기반 상호작용은 [[community-of-inquiry|사회적 현존]] 뒤의 사회적 단서를 곱한다고 논합니다 — 행동적 실재감이 시각적 실재감이 아니라 결정적 예측변수로 제안됩니다 — 학습자 자신의 가상 몸은 [[embodied-learning|구현]] 차원(몸 소유, 가상 자기 몸 주체성, 자기 위치)과 프로테우스 효과를 더합니다. 이 프레임워크의 명시적 상충 관계는 인지적입니다: 몰입과 에이전트의 단순한 현존이 인지 부하를 높일 수 있으나, 에이전트와의 사회적 상호작용은 집합 작업 기억 효과를 통해 그것을 낮춥니다. 시간 층위(친숙화, 성숙하는 인간-에이전트 관계, 새로움 감소, 발달하는 사이버멀미)도 통상의 설계 변수에 더해집니다. 그 지위는 의도적으로 잠정적입니다: 몰입 매체에서 교수 에이전트를 시험하는 실증 연구가 거의 없고, 장기적 [[learning-gains|학습 결과]]와 학습자 특성은 모형 밖에 있습니다.

**평가와 벤치마크.** 교수 에이전트를 측정하려면 내용이 아니라 교수법을 시험해야 합니다. [[teaching-monster-pck-benchmark-2026|Teaching Monster Challenge]]는 에이전트에게 지정된 학습자 페르소나에 맞춰 강의를 적응시키도록 요구하여 교수법적 내용 지식을 벤치마킹하며, 시스템은 내용에는 강하지만 적응에는 약함을 발견하고 — LLM 심판이 강한 시스템을 잘못 순위 매김을 드러냈습니다. [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]]는 전문적 교수법적 판단, [[situated-learning|상황화된]] 다중 턴 교습, 캔버스 양식 워크플로 완수를 가로질러 에이전트를 평가하여, 모형이 전문 교수 기준에 미치지 못함을 보여 줍니다. [[ai-generated-interactive-fiction-education-2026|AI 생성 상호작용 소설]]은 설계-평가 각도를 더합니다: 생성 능력이 아니라 일관성과 퀴즈 통합이 [[student-experience|학생 경험]]에 대한 유용성을 제한합니다.

**페르소나 강건성을 여러 턴에 걸쳐 시험하라.** [[adversarial-stress-testing-role-playing-agents|Shouqi 등(2026)]]은 자동 Judge로 역할극 에이전트에 여섯 단계의 에스컬레이션 공격을 수행하여, 다중 전략 시험이 단일 전략 기준보다 강건성을 0.17–0.20 낮췄고, 치명적 실패가 5–6턴 이후에 집중됨을 발견했습니다 — 그러므로 짧거나 단일 턴 평가는 페르소나 안정성과 윤리 준수를 과대평가합니다.

## 실천적 지침

학습자의 주체성을 위해 설계하고, 모형의 편의를 위해 설계하지 마십시오. 풀기와 가르치기가 갈라지므로, 날것의 답 생성보다 교습 특정 가드레일 — [[scaffolding]], 힌트, [[socratic-method|소크라테스식 질문]], [[misconceptions|오해]] 표적화 — 을 우선하십시오. 단일 범용 인터페이스를 통하지 않고 사용자 역할(부모 대 자녀, 또래 대 또래)에 따라 지원을 분배하고, 협력을 비계의 유효한 표적으로 다루십시오. 학생이 비계를 수용할 것이라고 가정하지 마십시오; 실제 맥락에서 수용도를 평가하십시오. [[human-in-the-loop-ai|인간 감시]]를 저작에 내장하십시오 — [[ai-tutor-authoring-promptdecipher|PromptDecipher]]가 봇 응답에 대한 교사 QA를 일급 활동으로 만드는 것처럼 — 그리고 품질이 유지되는 곳에서는 더 값싼 백엔드를 선택하십시오. 가르치는 점수와 푸는 점수를 별도로 보고하고, 생성이 유용성과 같다고 가정하지 말고 사용자와 함께 생성된 내용을 검증하십시오.

학습자 선호는 비계 질질의 가난한 대용물입니다: AI 지원 수학적 모형화에서 학생은 Peer와 Teaching Assistant 역할에서 가장 잘 수행하면서도 더 지시적인 Tutor와 Excellent Student 역할을 유용성과 자기효능감에서 가장 높게 평가했습니다([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang와 Yang(2026)]]).

컴퓨터 지원 협력 학습에서의 AI 에이전트에 대한 46개 연구의 검토는 인지적 비계, 사회적 촉진, 교수적 조율을 구분하고, 인지적 이득은 일관적이나 행동적, 사회적, 정서적 결과는 맥락 의존적임을 발견합니다 — 그러므로 에이전트의 기능은 그것이 산출하도록 의도된 결과에 따라 선택되어야 합니다([[ba-ai-agents-cscl-review-2026|Ba 등(2026)]]).

## 다른 개념들과의 연결

교수 에이전트는 [[intelligent-tutoring]]([[knowledge-tracing]]과 학생 모형화라는 그들의 진단적 골격)과 [[generative-ai]]/[[llm]](그들의 전달 엔진)의 교차점에 놓입니다. 이들은 [[scaffolding]]과 [[feedback]]을 구현하고, [[metacognition]]과 [[self-regulated-learning]]을 겨냥하며, 점점 더 [[collaborative-learning]]을 표적으로 삼습니다. 안전 우려는 [[pedagogical-safety]], 저작 품질, 그리고 에이전트가 학습을 지원하기보다 [[cognitive-offloading|오프로드]]할 위험 전반에 되풀이됩니다. 이 모든 것은 [[ai-ed-evaluation]]과 가르치는 것이지 푸는 것만이 아니라 측정해야 하는 [[benchmark|벤치마크]]를 통해 평가됩니다.

결정적으로, 교수 에이전트는 얼마나 유창하게 응답하는지가 아니라 [[learning-gains]]으로 판단됩니다. 지식베이스의 증거는 가드레일을 갖춘 교습 특정 코치로 설계될 때 에이전트가 내구적 이득을 낳는다는 것입니다 — [[stanford-evidence-base-ai-k12-2026|교습 특정 AI가 범용 챗봇을 일관되게 능가함]] — 그리고 학습자의 노력을 대신할 때 학습을 해칠 수 있습니다([[generative-ai-guardrails-harm-learning|가드레일 RCT]], [[jost-llm-programming-education-learning-outcomes|LLM 의존과 성적]]). 그러므로 에이전트의 [[learning-gains|학습 향상]]을 측정하려면 도구 내 수행이 아니라 비보조적이고 전이 가능한 결과 측정이 요구됩니다.

더 나은 되먹임이 더 나은 학습과 같은 것은 아닙니다: 지식베이스와 워크플로로 에이전트를 맞춤화하는 것이 되먹임 정확성과 구체성을 높였으나 자기규제 행동, 학습 경험, 결과는 변하지 않았고, 그 이득 우위는 지시적 되먹임 아래에서만 나타났습니다([[agent-type-feedback-style-self-directed-learning-2026|Han 등(2026)]]).

## 연결된 개념

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## 연결된 문서

- [[wang-teacher-student-centered-agents-physics-2026]] — 학생 중심 에이전트 역할이 수행, 부하, 몰입, 공감 전반에서 교사 중심 역할을 능가(Wang 등 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME: AR/VR에서의 교수 에이전트를 위한 개념 프레임워크 — 교사 대 역할극 파트너, 실재감, 현존, 인지 부하(Ross & Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim: 교수 실천을 위한 생성 학생 에이전트
- [[conversational-ai-agents-umbrella-review-2026]] — 교육에서의 대화형 AI 에이전트에 대한 우막 검토
- [[conversational-agents-novice-programmers-scoping-2025]] — 초보 프로그래머를 위한 대화형 에이전트에 대한 범위 검토
- [[ba-ai-agents-cscl-review-2026]] — 컴퓨터 지원 협력 학습에서의 AI 에이전트에 대한 검토
- [[kim-ai-productive-failure-adult-2026]] — 생산적 실패 기반 학습을 지원하는 AI 시스템 설계
- [[preferred-scaffolding-ai-mathematical-modeling]] — AI 지원 수학적 모형화에서 선호되는 비계
- [[llm-adaptive-programming-error-explanations-2026]] — 프로그래밍 오류에 대한 LLM 적응적 설명
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — 초등 북 토크를 위한 역할 적응 AI 동반자; 고정 역할 에이전트의 정서 천장(Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents: 윤리적 성찰과 탐구를 위한 역할극과 토론으로 집단 기반 윤리 교육 촉진하기

- [[teachers-configure-educational-chatbots-2026]] — 의도한 대로 가르칠 것인가? 교사가 교육용 AI 챗봇을 구성하는 방식

- [[agent-type-feedback-style-self-directed-learning-2026]] — 맞춤화된 에이전트가 되먹임 질질은 높였으나 자기규제나 결과는 높이지 않음; 이득 우위는 지시적 되먹임 아래에서만
