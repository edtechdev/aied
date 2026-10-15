---
title: 인간 개입
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-03T03:00:33-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **인간 개입** — 교육적 [[ai-technologies|AI 시스템]]이 자동 생성과 인간 전문가의 판단을 전략적으로 교차시켜, 생산의 규모를 확장하면서도 [[pedagogy|교수법적]] 질과 안전을 보존하는 설계 양식입니다. 평가, 피드백, 교수를 완전히 자동화하기보다, HITL은 인간(교수자, 학문 전문가, 또는 학습자)을 그 판단의 한계 효용이 가장 높은 — 품질 평가, 예외적 사례의 판정, 그리고 [[agency|학습자 주체성]]과 안전 보호 — 의사결정 고리에 남겨 둡니다. 핵심 설계 질문은 인간을 *넣을 것인가*가 아니라, 파이프라인의 *어디에* 그들의 감독이 가장 가치 있고 대체하기 가장 어려운가입니다.

## 생각해 볼 질문들

- 핵심 HITL 설계 질문은 인간을 넣을 것인지가 아니라 파이프라인의 어디에서 그들의 판단이 가장 가치 있는지입니다. AI 평가나 피드백 시스템에서 어느 지점에서 인간이 고리에 남아 있기를 고집하겠습니까?
- AI [[automated-question-generation|문항 생성]]에 관한 연구들은 컴퓨터가 명료성과 타당성은 잘 처리하지만 의미 있는 오답지와 좋은 피드백에는 인간이 여전히 필요하다는 것을 발견했습니다. 교육적 판단의 어떤 부분이 자동화에 저항할 수 있습니까?
- 한 평가는 세 LLM이 일관성 없고 둔감한 학생 지원 권고를 내놓았다는 것을 발견하고, AI가 학생에 관해 조언하기 전에 인간의 판단이 여전히 필요하다고 결론 내렸습니다. AI가 어려움을 겪는 학생에 대한 지원을 '권고'할 때, 인간이 그것을 검토하지 않으면 무엇이 잘못될 수 있습니까?
- 이 페이지는 인간과 알고리즘이 서로 다른 종류의 문제를 잡아낸다고 제안합니다 — 정확히 검증 가능한 것은 자동화하고, 뉘앙스가 대체 불가능한 곳에는 판단을 보존합니다. 여러분 자신의 실천에서 그 둘 사이의 경계는 어디입니까?
- 인간을 고리에 남겨 두는 것은 질만이 아니라 학습자의 주체성과 안전을 보호하는 것으로 틀짓입니다. 완전한 자동화가 학습자가 느끼는 "내 학습에 누가 책임이 있는가"를 어떻게 미묘하게 바꿀 수 있습니까?
- AI가 더 자율적이 된다면, HITL 감독은 핵심적인 안전 장치로 묘사됩니다. 어느 정도 수준의 AI 자율성에서 불편함을 느끼겠습니까? 그리고 그 불편함은 감독이 어디에 속해야 하는지에 관해 무엇을 말해 줍니까?

## 들어가며

HITL은 완전히 자율적인 [[ai-education|AI 교육]]의 한계와 위험에 대한 응답입니다. 자동화된 시스템은 규모 있게 생성할 수 있지만, 교수자와 전문가가 가져오는 맥락적이고 [[ethics|윤리]]적이며 교수법적인 판단이 부족합니다. 최근의 구현 두 가지가 서로 다른 구조를 보여 줍니다.

처방적 지원은 인간 감독이 점점 필수적이라고 주장되는 영역입니다. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 외(2026)]]는 세 LLM이 [[learning-analytics]] 지표로부터 학생 지원 계획을 권고할 수 있는지를 시험하여, 필요에 대한 둔감한 민감성과 날카로운 모델 간 비일관성을 발견하고, [[llm]] 처방적 조언이 안전하고 윤리적으로 배치되기 전에 인간 개입 판단이 여전히 필요하다고 결론 내렸습니다.

세 번째 구조는 인간의 판단을 모형의 산출이 아니라 그 *상류*에 둡니다. [[lee-learner-question-types-ai-education-2026|Lee, Atif & Kang(2026)]]의 학습자 질문 분류 연구에서, 박사급 전문가 세 명이 전체 파이프라인을 관장했습니다. 그들은 각 [[constructivist]] 역할에 대한 조작적 정의를 정제하고, 불일치 해소 후 Fleiss' kappa가 0.60에서 0.83으로 오를 때까지 독립적으로 라벨을 붙였으며, 훈련 집합의 균형을 맞추는 데 쓰인 역번역되고 의역된 항목들을 검증했습니다.

## CODE-GEN: 인간 개입 MCQ 생성

Duan 외(2026)는 두 에이전트로 된 [[rag]] 기반 [[agentic-ai|에이전트]] 시스템을 구축했습니다.
- **생성 에이전트** — 강의 학습 목표에 정렬된 객관식 코딩 문항을 여러 개 생산합니다.
- **검증 에이전트** — 일곱 가지 교수법적 차원에 걸쳐 질을 평가합니다.

**평가:** SME 6명이 AI 생성 문항 288개를 판단했습니다. 인간이 검증한 성공률: 차원에 걸쳐 **79.9%–98.6%**.

**AI가 강한 차원(인간 부담이 낮음):**
- 문항 명료성, 코드 타당성, 개념 정렬, 정답 타당성

**인간이 필요한 차원(인간 부담이 높음):**
- 교수법적으로 의미 있는 오답지 설계
- 고품질의 설명적 [[feedback]]

전략적 통찰: 인간의 노력은 교수적 판단이 대체 불가능한 곳에 집중되어야 하며, 계산적 검증은 완전히 자동화될 수 있습니다.

## MAIC: 인간 개입 스크립트 생성

Yu 외(2024)는 칭화대학에 다중 에이전트 수업([[teacher-role|교사]] 에이전트, 조교 에이전트, 동료 유형)을 학생 500명 이상과 학습 기록 100,000건 이상으로 배치했습니다. 인간 교수자가 스크립트 생성과 감독에 참여하여, 대규모의 AI 증강이 교수법적 전문성을 밀어내지 않도록 보장합니다.

## PedaCo: AI 영상 생성을 위한 이중 검문

Kim, Baek, Kwak(2026)는 HITL을 Mayer의 멀티미디어 학습 인지 이론(CTML)에 뿌리를 둔 *원칙에 기반한 저항*을 구현하는 두 개의 상호보완적인 검문 층으로 된 파이프라인인 **PedaCo**(Pedagogical Co-creation)를 통해 [[video-education|AI 생성 수업 영상]]으로 확장합니다. **첫 번째 층**은 인간을 스크립트 단계에 둡니다. LLM이 스크립트를 초안하면, AI 검토자가 잠재적 CTML 위반을 표시하고(예: "장면 3이 사전 설명 없이 기술 용어를 도입합니다"), 교수자가 수용·수정·재생성 중에서 결정합니다. **두 번째 층**은 합성 후 응집성, 중복, 시간적 연접성, 양상, 영상 질에 대한 자동화된 지표를 실행하고, 교수자가 그것을 검토합니다. 피험자 내 연구(교수자 23명)에서 검토 기반 접근은 모든 CTML 원리를 개선했고(평균 평점 3.07→3.86, p<.01), 교수자는 생산 효율을 4.26/5로 평가했습니다 — 마찰이 부담이 아니라 생산적인 것으로 인식되었습니다. 설계 원리는 지식베이스의 HITL 종합을 되울려 줍니다. 인간과 알고리즘이 *서로 다른* 종류의 문제를 잡아내므로, 가장 효과적인 시스템은 계산적 검증이 정확한 곳(시간 동기화)은 자동화하고 교수법적 뉘앙스가 대체 불가능한 곳(어조, 청중 적합성)에는 인간의 판단을 보존합니다.

배치가 존재보다 더 중요할 수 있습니다. 실천자들은 Social Story 저작 도구의 사용성이 높다고 평가하면서도(SUS 86.8) 검토가 너무 늦게 온다고 보고했습니다. 생성 전에 설정되는 문화적·임상적 제약 — 서양식 거리 의상 대신 아바야 — 은 산출을 나중에 편집해서는 회복하기 어렵기 때문입니다([[adapted-stories-social-story-intervention-2026|Enkhjargal 외(2026)]]).

## AI 시대에 HITL이 중요한 이유

인간 개입 설계는 여러 가지가 수렴하는 이유로 지식베이스의 [[agentic-ai|에이전트 AI]]와 [[reducing-ai-misuse|책임 있는 AI 사용]] 논의의 중심이 되었습니다.
- **교수법적 안전.** [[pedagogical-safety]]은 실제 교수적 권위를 지닌 AI가 오류, 편향, 유해한 산출이 학습자에게 닿기 전에 잡히도록 인간 감독을 유지할 것을 요구합니다. 이것은 목표를 [[agentic-ai|능동적으로 추구하는]] 자율 에이전트에 특히 중요합니다.
- **감독은 이론만이 아니라 실제에서 드물다.** [[agentic-ai-education-scoping-review|Wang 외(2026)]]는 474개의 교육용 에이전트 AI 시스템에 걸쳐 견고하게 내장된 거버넌스와 인간 개입 감독이 드물게 나타난다는 것을 발견했습니다 — 단일 과제 자율성과 다중 에이전트 협동은 커지는 가운데서도 말입니다. 이것은 설계 원리와 실제 배치 사이의 간극입니다.
- **핵심 질문은 인간이 얼마나 참여하는가가 아니라 고리를 어떻게 실행 가능하게 만드는가이다.** 학습과학의 관점은 학습을 데이터 포착, 전산적 해석, 그리고 개연적 응답을 중심으로 조직하는 것이 교수적 행동을 시스템이 탐지하고 행동할 수 있는 것에 의존하게 만들고, 알림과 참여 분류가 어떤 교사나 학생도 행동하기 전에 학습자를 해석한다고 주장합니다([[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]]).
- **타당성과 품질 관리.** HITL은 [[automated-assessment|자동화된 평가]]와 생성의 품질 검문입니다 — 자동 채점이 신뢰할 수 없는 곳에서 인간이 판정하고([[llms-do-not-grade-essays-like-humans-2026|LLM 에세이 채점]] [[research-methods-aied|연구]] 참고) 생성된 문항을 검증합니다. 채점과 피드백 연구 42건(2023–2025)에 대한 PRISMA 지침 [[meta-analysis-systematic-review|체계적 문헌고찰]]은 같은 결론을 명시적으로 이릅니다. LLM은 짧고 잘 구조화된 과제에서는 인간 평가자와 맞먹지만, 복잡하고 개방적이며 주관적인 작업에서 인간의 판단을 완전히 대체할 수 없으며, 가장 높은 채점 효과는 AI 주도 채점을 교사의 감독과 검증과 결합한 하이브리드 시스템에서 달성됩니다([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat 외(2026)]]는 그 경계가 어디에 놓이는지를 구체적으로 보여 줍니다. ChatGPT-5는 객관적 약학 시험 문항에서는 교수진과 일치했으나(CCC 0.935–1.000), 루브릭이 주어져도 서술형과 에세이 문항에서는 신뢰할 수 없어, 저자들은 복잡하고 주관적이며 고위험 평가에 대해 인간 검토를 포함한 하이브리드 채점을 권고합니다.
 반복은 그 감독의 대용물이 아닙니다. 동일한 제출물을 다섯 다른 날에 재채점한 결과, 같은 모형은 자신의 결과를 Krippendorff's alpha 0.625로만 재현했으며, 변동은 중간 성적에 집중되고 다섯 회차의 계수에서 A와 F는 나타나지 않았습니다([[llm-grading-assistants-public-health-2026|Brevik 외(2026)]]).
- **학습자 주체성.** 인간을 고리에 남겨 두는 것은 [[agency]]를 보존하고 [[self-regulated-learning]]을 뒷받침하여, 완전히 자율적인 지원이 유발할 수 있는 [[cognitive-offloading|과의존]]에 맞섭니다.

- **학생들 자신이 인간을 고위험 쪽에 둡니다.** 학부생 93명 가운데, 81.7%는 총점의 40%를 차지하는 기말 논문에 인간 채점을 선호했고, 93명 중 75명은 AI가 채점자를 대체하지 않고 보조하기를 원했으며, 69명은 AI 채점이 항상 인간의 검토를 받기를 원했습니다([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli 외(2026)]]).
- **신뢰와 보정.** 투명한 인간 감독은 [[trust-calibration]]을 뒷받침합니다 — 학습자와 교수자가 자격 있는 인간이 시스템 뒤에 서 있다는 것을 알기 때문입니다.
- **검토 전에 기준을 보이면 합의가 높아진다.** [[calibrating-trustworthiness-llm-education-2026|Coscia 외(2026)]]는 검토자가 LLM 응답을 비교할 때 신뢰성 지표를 표면화하면 평가자 간 합의가 Krippendorff's alpha 0.3987에서 0.4931로 상승한다는 것을 발견하고, 더 많은 지표를 더하는 것은 대가 없이 인지적 부담만 더했습니다.
- **제한된 주체성은 면책 조항이 아니라 구조입니다.** [[ilieva-agentic-genai-higher-education-2026|Ilieva 외(2026)]]의 [[agentic-ai|에이전트]] 학습 지원을 위한 AGAI-HE 틀은 교수법적 워크플로 층과 에이전트 지원 층에 더해 세 번째 층으로 모형 자체에 감독을 내장합니다. 그것은 허용되는 AI 사용, 교수법적 경계, [[privacy]] 규칙, [[ai-use-disclosure|공개 요구]], 자료 검증, 교수자 점검 지점, [[academic-integrity|정직성]] 메커니즘, 그리고 최종적인 인간의 책임을 정의하고, 모든 에이전트 기능이 하나의 학습 요건, 평가 목적, 또는 거버넌스 통제에 추적되도록 요구합니다. 이것은 HITL이 정책 진술이 아니라 시스템 설계 속성이라는 원리의 구체적인 실현입니다 — 그리고 저자들의 130명 학생 인식 연구는, 그 감독 아래 에이전트 조율을 더하는 것만으로는 챗봇보다 더 나은 학습 지원으로 인식되지 않았다는 것을 상기시킵니다.
- **인간이 얼마나 자주 보는가 자체가 설계 결정이다.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]]는 감독의 *배치*와 그 *빈도*를 구분합니다. 고빈도 HITL은 모든 AI 산출이 학습자에게 닿기 전에 검토하여 품질 관리, 빠른 오류 탐지, 책임성, 지속적인 보정을 얻지만, 자동화를 동기 부여한 효율을 상쇄할 수 있고 채점이 집중되는 시기에 병목을 만들 수 있습니다. 저빈도 HITL은 표본을 점검하고 표시된 사례만 검토하여 규모를 확장하고 처리 기간을 줄이지만, 오류가 탐지되지 않고 제출물 전반에 퍼질 위험이 있고 책임성을 약화시키며, 어떤 학생이 다른 학생보다 더 철저한 인간 검토를 받는 경우 [[equity-in-ai-education|형평성]] 문제를 만듭니다. 보편적 답을 처방하는 대신, 이 틀은 그 절충이 학문 영역의 오차 허용 범위, 평가가 [[formative-assessment|형성적]]인지 [[summative-assessment|총괄적]]인지, 학급 규모와 기관의 자원에 대해 명시적으로 이루어져야 한다고 요구합니다 — 그리고 보통의 효율 논쟁과 반대 방향으로 기본값을 설정합니다. 상당한 증거가 허용 가능한 신뢰성, 보안, 공정성을 입증할 때만 고빈도 감독을 축소하기 시작하고, 그리하여 *더 적은* 감독이 안전하다는 것을 보일 부담이 증명의 책임으로 남게 합니다. 이 논문은 또한 그러한 감독 뒤의 원칙들이 직원의 노력을 줄이기보다 옮길 수 있어, 순 효율 이득이 열린 경험적 질문으로 남는다고 경고합니다.
- 배치된 인간 감독은 품질 판단이 아니라 승인 경로 배정을 뜻할 수 있습니다. 하이브리드 질의 시스템에서 수락 필드는 질의한 사람과 해결한 사람이 달랐는지만을 기록했고, 응답의 질을 평가하는 측정은 없었습니다([[student-query-demand-hybrid-ai-support-2026|Gupta 외(2026)]]).

## HITL이 지식베이스의 연구에 나타나는 곳
- **자동화된 평가와 채점:** HITL 시스템은 단답형 채점([[cong-confidence-asag-2026]]), 자기 설명 평가([[llm-automated-assessment-student-self-explanations]]), [[automated-essay-scoring|에세이 채점]]([[psyscore-essay-scoring-zpd-feedback]])에 걸쳐 AI 생성·채점을 인간 검증과 결합합니다. [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]]는 이를 고위험의 필기 일반 [[chemistry-education|화학]] 채점에서 구현합니다. [[multimodal]] LLM의 신뢰도가 응답 형식에 따라 달라지고(텍스트와 화학 반응 답안은 신뢰할 수 있으나 그리기와 그래프는 무작위보다 못한 점수를 받고), 위양성은 학생들이 탐지하지 못하기 때문에, 그들은 신뢰도 필터 — 부분 점수 기준, [[item-response-theory|IRT]] 기반 위험 기준, 문항 유형 배제 — 를 써서 원시 AI 점수를 선택적 수용·유예 정책으로 전환하고, 불확실한 문항과 도형 문항을 인간에게 유예합니다. 이 접근을 저자들은 [[regulation|규제]] 틀과 연결하며, 그 틀은 [[assessment|교육 평가]]에서의 AI를 고위험으로 지정하고 문서화된 인간 감독을 의무화합니다.
- **피드백 시스템:** 문서화된 인간 감독을 의무화합니다.
- **국가 평가에서의 운영 HITL 채점(2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi 외(2026)]]는 우루과이의 Acredita EB 시험에서 기관 차원의 규모로 HITL을 구현합니다. LLM 채점기의 오류가 체계적으로 보수적(저채점)이므로, 워크플로는 합격/불합격 결과가 Writing 영역에 의존하는 후보자에게만 정확히 인간 검토를 배정하는 의사결정 지점 논리를 씁니다 — AI가 합격으로 표시한 응답은 확신을 갖고 수용하고, AI가 불합격으로 표시한 것(사례의 15.3–16.5%)은 전문 평가자가 검증하여, 전체 채점 업무량을 ≥50% 줄이면서 AI 오류로 인한 합격 위험을 0.2–0.6%만 남깁니다. 이것은 자원 배분 전략으로서의 HITL입니다. 인간은 AI의 보수적 편향이 고위험 결과를 바꿀 바로 그 지점을 판정합니다.

- **루브릭 자체의 분해능에서 유예 기준 도출(2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz 외(2026)]]는 AI–교수자 허용 오차를 0.5점 — 한 제출물을 정점 구간 너머로 옮길 수 없는 가장 큰 불일치 — 으로 설정하고, 0.8점에서 이상치를 상향 처리하여 피드백이 공개되기 전에 362개 제출물 중 11개(3.0%)를 인간 검토로 보냅니다.

- **주석자 간의 합의는 인간의 정답 기준이 아니다.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado 외(2026)]]는 모형 주석을 인간 황금 라벨에 대해 검증하지 않은 채 감사 층으로 밀어 넣어, 교차 모형 합의(중앙값 0.401)를 공유된 모형 오류가 살아남을 수 있는 단정 질의 대용물로 남겨 둡니다. 그들의 설계는 감독을 장식이 아니라 진단적으로 유지합니다. 중간 판단이 명시적이므로, 검토자가 어떤 행동이 발화했는지를 보고 잘못 읽은 행동과 구성개념을 나쁘게 부호화한 규칙을 구별할 수 있기 때문입니다.
- **피드백 시스템:** 인간 개입 피드백 설계는 [[becerra-aicofe-feedback-2026|협동적 피드백 시스템]]과 [[cong-confidence-asag-2026|확신을 아는 단답형 채점]]에 나타납니다.
- **수업 협동 지원.** [[breideband-community-builder-cobi-2026|CoBi]]는 고무하는 소집단 담론을 탐지하는 AI 시스템에서 교사를 검토하는 인간으로 남겨 둡니다. 교사들은 자신을 "당장 발언하게 할" 실시간 표시보다 행동 전/후 검토를 명시적으로 선호했고, 시스템의 수업 단위(개인이 아닌) 집합 피드백은 바로 그것이 [[privacy]], 감시, 학생 [[agency]] 사이의 긴장을 항해할 수 있게 하는 것입니다.
- **문항과 내용 생성:** CODE-GEN 너머에서, HITL은 평가와 [[scaffolding]]을 위한 문항 생성을 안내합니다([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **에이전트와 다중 에이전트 시스템:** AI가 더 자율적이 됨에 따라, HITL 감독은 핵심 [[agentic-ai|설계 장치]]입니다([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **모형 불확실성이 아니라 의사결정 결과로 배정하기(2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|2026년 운영 연구]]는 모형 불확실성이 아니라 의사결정 결과에 의해 움직일 때 인간 개입 설계가 어떤 모습인지를 보여 줍니다. 우루과이의 Acredita EB 국가 인증 시험(두 회차, 각각 후보자 약 5,000–6,000명)에서 GPT-5 채점기는 15개 루브릭 문항에 대해 전문 평가자와 60–80% 일치했지만 체계적으로 보수적이어서, 합격/불합격 비교의 15.3%(2024년)와 16.5%(2025년)에서 인간 합격/AI 불합격의 불일치를 산출하고 그 반대는 거의 없었습니다. 따라서 그 틀은 AI 합격 결과를 얼굴 값 그대로 수용하고, 후보자의 결과를 바꿀 수 있는 모든 AI 불합격 결과를 전문가 검토로 배정합니다 — 먼저 합격/불합격이 Writing 영역에 의존할 수 없는 후보자를 건너뛰어 전체 인간 채점이 필요한 응답을 50% 이상 줄입니다. 두 번째 2026년 설계는 다른 쪽에서 경계를 끌어냅니다. 다중 에이전트 AI 표준화 환자 플랫폼([[ai-standardized-patient-scaffolding-medical-2026|Yang 외]])에서, 인간 감독은 AI가 판단하기에 부적합하다고 여겨지는 것에만 배치되고, 교수와 인간 표준화 환자가 맥락적 해석, 교정, 준비 판단을 제공하며, 시스템은 [[medical-education|임상]] 역량을 자율적으로 결정하는 것이 명시적으로 허용되지 않습니다.

## 종합

인간 개입 설계는 단순한 안전 조치가 아니라 **자원 배분 전략**입니다. 개척적인 질문은 인간을 *넣을 것인가*가 아니라, 파이프라인의 어디에서 그들의 판단이 한계 효용이 가장 높은가입니다. 가장 효과적인 HITL 시스템은 희소한 인간 전문성을 자동화된 시스템이 가장 약한 곳(오답지 설계, 설명적 피드백, 예외적 사례의 판정, 윤리적 판단)에 집중하고 나머지는 자동화하여 — 품질, 안전, 신뢰를 보존하면서 생산의 규모를 확장합니다.
- **AI 보조 작업에 인간 감독이 지속된다.** [[scaffolding-systematic-reviews-2026|체계적 문헌고찰 연구]]는 AI 자동화 도구가 절차적 부담(예: 선별)을 줄였으나 해석적 결정은 여전히 상당한 인간 감독을 요구한다는 것을 발견했습니다. [[kim-ai-andragogy-2026|안드라고지 연구]]는 인간 개입(공유된 정신 모형, 공동 창작)을 핵심 AI 설계 원리로 만듭니다.
- **기관 차원의 인간 개입.** Qin(2026)은 링난 대학이 윤리적 추론, 비판적 판단, 사회적 책임을 전면에 내세우면서 [[generative-ai|GenAI]] 접근을 민주화한 인간 개입 교육 모형을 어떻게 발전시켰는지를 기술합니다. 이 모형은 AI가 [[curriculum-design|교육과정]] 전반에 내장되는 가운데서도 인간을 판단과 가치의 자리로 위치시키며, 이것은 [[higher-ed|고등교육]]에서 인간 개입 원리의 구체적인 [[governance|기관적]] 실현입니다.
- **자신의 튜터링에서 인간 개입인 학습자.** [[ko-hughes-vsd-student-centered-its-2026|가치 민감 설계]]를 지역 대학 학생들과 수행한 결과, ITS를 위한 학습자 대면 HITL 기능의 온전한 집합(재평가와 검토에 대한 통제, 개인화된 목표·속도, 검토를 위한 북마크, 숙달에 대한 확신 확인, 그리고 AI 지원 참여 수준 통제)이 산출되어, 학생을 적응적 결정의 수동적 소비자가 아니라 튜터링 고리의 능동적 통제자로 위치시킵니다. 이 연구는 또한 그러한 학습자 통제가 시스템이 안내하는 학습 경로의 온전성을 훼손할 수 있는지에 대해 교수자들이 의견이 갈렸다는 것을 발견했습니다 — 이것은 인간(학습자 대 교사)의 판단이 어디서 가장 가치를 더하는지에 관한 더 넓은 자원 배분 질문의 한 사례입니다.
- **AI에서 전문가로의 상향 처리는 인간 개입의 움직임이다.** SCAN 틀은 학습자의 거리에 따라 과제를 생성형 AI의 네 모드에 배정하고, 올바르게 배정된 AI 과제 안에서의 수동적 [[student-engagement|참여]]를 학습자를 AI에서 전문가 지원으로 옮기는 잘못된 기술화 신호로 읽으며, 인간을 인식론적 감사자로 둡니다([[ai-teammate-task-distribution-medical-training-2026|Tsim 외(2026)]]).
- **AI 도입 조언에 대한 감독.** 회의적인 사용자가 상담하는 [[conversational-ai|대화형 AI]] 시스템은 도입을 권장하도록 기울어져 있을 수 있으므로, 인간 감독과 독립적 평가가 필수적입니다. 대부분의 최전선 모형이 회의적인 [[k-12]] 직원을 [[student-engagement|참여]] 쪽으로 돌린다는 것을 보여 주는 감사는, 비판적 의존이 아니라 투명하고 감사 가능한 AI 조언의 필요성을 강조합니다.

## 연결된 개념
- [[pedagogical-patterns]] — Where human review sits in tested sequences, and what has never been tested in isolation
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — human judgment inside an automated support flow

## 연결된 문서
- [[lee-learner-question-types-ai-education-2026]] — 전문가가 표지한 질문 분류: 인간이 표지, 보강, 오류 분석을 담당함 (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — 에이전트형 GAI 강좌 설계의 세 번째 층으로서의 인간 감독과 거버넌스 (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — 학생 중심 지능형 튜터링 시스템의 가치 민감형 설계 (튜터링 순환 속 학습자)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — 대규모 전국 쓰기 평가에서의 인간 참여형(HITL) AI 지원 채점 (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — 의료 훈련에서 AI 과업 배분을 다시 생각하는 SCAN 틀 (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM은 인간처럼 에세이를 채점하지 않는다 (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — 안드라고지를 지원하는 AI의 적용 (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — 멘토링과 AI로 체계적 문헌 고찰에 비계 제공하기 (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — 교수자가 감독하는 AI 지원 채점 및 피드백
- [[lopez-pernas-llm-appropriate-student-support-2026]] — AI가 다양한 학생 유형에 적절한 지원을 제공할 수 있는가? 대규모 평가
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — 임상 면접 훈련을 위한 비계 지향 다중 에이전트 대형 언어 모형 시스템의 평가
- [[tripartite-feedback-framework-ai-assessment-2026]] — 삼분 틀: 피드백을 인식론적 지위에 따라 분류하고 AI 개입을 위한 다섯 가지 경계 원칙 제시 (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — 특수 교육에서의 AI 지원 사회 이야기 개입: AdaptED Stories의 설계
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: 교육 대화의 검증 가능한 코딩을 위한 단정 기반 스키마
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — 감정 분류에서 실행 가능하고 책임 있는 피드백으로: 교수 평가에서 NLP의 범위 검토 및 증거 지도, 2015–2026

- [[llm-grading-assistants-public-health-2026]] — 동일한 LLM 채점 보조 도구를 다른 날 재실행하면 Krippendorff의 알파 0.625 수준으로만 재현됨
- [[when-students-prefer-ai-scoring-feedback-2026]] — 학부생은 중요한 과업에서는 인간 채점을 선호하고, AI는 대체재가 아니라 보조 수단으로 여김
- [[student-query-demand-hybrid-ai-support-2026]] — 학생이 실제로 묻는 것: 하이브리드 지원 체계에서의 질의 수요 구조와 자동화 가능성
- [[in-the-loop-educational-ai-learning-sciences-2026]] — 교육 AI에서 "인간 개입" 접근의 재구상: 학습과학적 관점
