---
title: "AI 에이전트는 학생과 교수자를 어떻게 지원할 수 있는가?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-02T08:21:34-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**AI 에이전트는 단일 턴 질의응답을 넘어설 수 있습니다** — 계획하고, 도구를 사용하고, 관련 맥락을 기억하고, 하위 과제를 조율하고, 일련의 상호작용에 걸쳐 지원을 적응시킴으로써 말입니다. 학생의 경우, 가능한 역할로는 적응형 지도, 학습 계획, [[formative-assessment|형성적]] 피드백, 안내되는 [[problem-solving|문제 해결]], 연습 생성, 모의, 선수 과목 추천, 성찰적 또는 메타인지적 [[prompt-engineering|프롬프팅]]이 있습니다. 교수자의 경우, 에이전트는 자료 개발, [[automated-question-generation|문제 생성]] 및 검증, 피드백 분류, 강좌 [[learning-analytics|분석]], 교수 설계 워크플로, 자료 검색, 특화 에이전트의 오케스트레이션을 도울 수 있습니다.

## 반복되는 에이전틱 역량

[[agentic-workflows-education|Agentic Workflows in Education]] 기사는 네 가지 반복되는 에이전틱 역량을 기술합니다: **성찰, 계획, 도구 사용, 다중 에이전트 협업**. 각각은 가능성을 더하면서 동시에 [[explainable-ai|해석가능성]], 조율, 신뢰, 지연, 감독의 도전을 도입합니다.

## AI 에이전트가 잘하는 것(긍정적 함축)

- **지속되는 적응형 지원.** 단일 턴 [[conversational-ai|챗봇]]과 달리, 에이전트는 여러 턴에 걸쳐 학습 대화를 유지할 수 있습니다 — 학습자가 아는 것을 기억하고, 난이도를 적응시키며, 다단계 [[scaffolding]]를 순서화하면서 말입니다. 이는 대규모로 [[adaptive-learning|적응적]] 학습과 [[personalized-learning|개인화된]] 학습을 뒷받침합니다.
- **교수자의 부담 덜기.** 에이전트는 자료를 초안 작성하고, 문제를 생성하고 검증하며(예: 생성기 + 검증기 짝짓기), 피드백을 분류하고, 특화된 하위 에이전트를 오케스트레이션하여 교사를 더 가치 있는 상호작용을 위해 확보할 수 있습니다.
- **풍부한 상호작용과 [[desirable-difficulties|생산적 마찰]].** 다중 에이전트 교실과 모의 동료는 다양한 역학을 만들어냅니다 — 또래 같은 담화, 건설적 반론, 역할극 — 이는 [[collaborative-learning|협업 학습]]과 [[socratic-method|소크라테스식]] 탐문을 뒷받침합니다. 동의하기보다 도전하도록 설계된 에이전트는 학습자를 더 깊은 재고 쪽으로 밀 수 있습니다(연구에서 건설적 갈등 에이전트가 설계 결과물을 개선했습니다).
- **저위험 연습과 모의.** 에이전트 기반 [[simulation|모의]]([[simulating-students|모의 학생]], [[medical-education|임상]] 시나리오)는 학습자가 실제 적용에 앞서 안전하고 반복 가능한 환경에서 연습할 수 있게 합니다.

## 주요 위험과 주의점(부정적 함축)

- **과도한 자동화는 학습을 속빈 것으로 만들 수 있습니다.** 에이전트가 자동화할수록 학습자가 하는 인지 작업은 줄어듭니다. 능동적 에이전트는 학생을 수동적 소비자로 남겨, 내구성 있는 학습을 구축하는 노력의 과정들을 약화시키고 [[cognitive-offloading|과의존]] 위험을 높일 수 있습니다.
- **메타인지적 참여의 감소.** 에이전트가 계획과 점검을 처리하면, 학습자는 교육이 구축하고자 하는 [[metacognition]]과 [[self-regulated-learning|자기조절]]을 발전시키지 못할 수 있습니다. 에이전트는 이러한 과정을 대신하지 않고 이끌어내야 합니다.
- **잘못 배치된 신뢰와 검증 격차.** 자율 에이전트는 그럴듯하지만 검증되지 않은 출력을 만들어낼 수 있고, 학습자와 교사는 그것을 [[trust-calibration|과도하게 신뢰]]할 수 있습니다. 에이전트가 [[agency|자율성]]을 얻어감에 따라 강건한 검증과 [[ai-literacy]]가 더 중요해집니다.
- **불투명성과 책임.** 다중 에이전트 시스템은 [[human-in-the-loop-ai|인간 감독]]을 복잡하게 만듭니다 — 어떤 에이전트가 오류에 책임이 있는가, 그리고 인간은 어디에 개입하는가? 조율 실패와 페르소나 표류는 신뢰성과 [[pedagogical-safety]]을 훼손할 수 있습니다.
- **[[equity-in-ai-education|형평성]]과 편향.** 에이전트는 훈련 데이터의 편향을 대규모로 재현할 수 있고, 능력 있는 에이전틱 시스템에 대한 불균등한 접근은 불평등을 넓힐 수 있습니다.

## 지금까지의 증거가 보여주는 것

구체적인 결과 — 그리고 주의점 — 이 축적되고 있습니다. [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]] — 실시간 지도에서 인간-AI 시스템에 대한 최초의 [[rct|무작위 대조 시험]] — 은 경험 많은 지도자들의 추론에서 끌어온 실시간 전문가 같은 안내를 신임 지도자들에게 제공했습니다: **지도자 900명과 약 1,800명의 학생**에 걸쳐, 접근 권한이 있는 지도자의 학생들은 주제 숙달 가능성이 **4퍼센트 포인트 더 높았고**, 가장 낮은 평가를 받은 지도자들 사이에서는 **9 p.p.**까지 올라갔으며, 그들의 학생들은 대조군의 더 높은 평가를 받은 지도자들의 학생들을 따라잡았습니다. 비용은 지도자당 연간 약 **\\$20**이었고, **550,000개 이상의 지도 메시지** 분석은 지도자들이 답을 넘겨주기보다 안내하는 질문을 하는 쪽으로 이동했음을 보여주었습니다 — 이는 AI가 [[teacher-role|교사]]를 대체하는 것이 아니라 증강하는 사례입니다.

그러나 "에이전틱"하다고 자동으로 더 좋은 것은 아닙니다. [[ilieva-agentic-genai-higher-education-2026|전자상거래 강좌에서 학생 130명을 대상으로 한 연구]]는 [[generative-ai]] 챗봇과 GAI 에이전트 모두가 전통적인 [[online-teaching-and-learning|e-러닝]]보다 학습 향상과 [[personalized-learning|개인화]]에서 더 높게 평가되었지만 — 챗봇 조건과 에이전트 조건 사이에는 **통계적으로 유의미한 차이가 없어서**, 추가된 자율성이 추가된 학습 가치로 번역되지 않았음을 발견했습니다. 제안된 Agentic GAI-Supported Learning Framework는 따라서 에이전트를 **제한된, 인간이 감독하는 학습 파트너**로 다루며, 목표와 점검 지점, 최종 결정은 인간에게 남겨 둡니다.

두 가지 추가 주의점이 중요합니다. 첫째, **철수(withdrawal)**: 무작위 시험들은 짧은 AI 지원조차도 이후의 보조 없는 수행을 억제할 수 있음을 보여주며, 철수 후 간격 — [[cognitive-washout-ai-skill-decay-2026|cognitive washout]]으로 명명된 — 은 거의 전혀 측정되지 않아서, 에이전트 지원 [[learning-gains|학습 성과]]의 내구성이 알려져 있지 않습니다. 둘째, **평가**: [[zhang-platform-scores-miss-ai-teaching-agents-2026|의학 교육과정에 걸쳐 여덟 개의 AI 교수 에이전트를 배치한]] 결과, 플랫폼이 생성한 점수는 독립적인 전문가 루브릭과 다르게 에이전트를 순위 매겼습니다(플랫폼의 3위 에이전트가 교수 품질에서는 꼴등이었습니다). 플랫폼 점수가 학생의 수행을 지표로 삼지 [[pedagogical-agent|에이전트]]의 교수 품질을 지표로 삼기 때문입니다. [[governance]] 검토 [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]]는 비례 규칙 — **자율성은 증거의 성숙도나 책임 있는 인간 통제의 강도를 넘어서는 안 된다** — 을 더하며, 증거는 산출물 수준 결과에서 가장 강하고 내구성 있는 학습과 형평성에서 가장 약하다고 지적합니다. 하나를 만드는 방법은 [[developing-ai-tutor]]를, 그것이 작동하는지 평가하는 방법은 [[evaluating-ai-interventions-methods]]를 보십시오.

## 증거의 상태

증거 기반은 여전히 형성 중입니다. 지식베이스의 [[agentic-ai|Agentic AI in Education]] 종합은 474개 연구의 [[meta-analysis-systematic-review|범위 검토]]에 의존하지만, [[higher-ed|고등교육]], [[stem-education|STEM]], 단기 설계, 텍스트 기반 지도에 상당한 집중이 있음을 지적하며, 검토된 작업의 소수만이 자신의 시스템을 교육 이론에 명시적으로 기반했고, 엄격한 장기 교실 검증은 여전히 제한적입니다.

따라서 핵심 설계 경고는 더 큰 자율성을 더 나은 학습과 동일시하지 말라는 것입니다. [[agentic-ai-pedagogical-best-practice-2026|Agentic AI and Pedagogical Best Practice]]는 에이전트의 주도가 학습자 자신의 계획, 점검, 판단, 노력을 제거하지 않도록 의도적 마찰, 동적 비계, 인간 감독을 권고합니다. [[intelligent-tutoring|Intelligent Tutoring]]과 [[human-in-the-loop-ai|Human-in-the-Loop AI]] 역시 보십시오.
