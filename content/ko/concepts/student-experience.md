---
title: 학생 경험
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-01T20:35:10-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [well-being]
technology: [generative-ai, llm]
ethics: [equity-in-ai-education]
level: [higher ed, k 12]
connected_faqs: [does-ai-help-students-learn, how-ai-impacts-students, ai-anxiety-wellbeing]
confidence: high
translation_of: concepts/student-experience
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **학생 경험** — 학습자들이 교육 환경에서 AI 도구를 어떻게 인식하고, 상호작용하고, 영향을 받는가. 지식베이스에 85편이 넘는 글이 있기에, 학생 경험은 [[ai-education|교육에서의 AI]]가 가장 많이 연구된 차원 중 하나입니다. AI는 학생에게 긍정적 방향과 부정적 방향 모두로 영향을 미치며, 같은 도구도 그것이 어떻게 설계되고 사용되는가에 따라 돕기도 하고 해치기도 합니다.

## 생각해 볼 질문들

- 이 페이지는 AI가 학생에게 긍정적·부정적 방향으로, 흔히 동시에 영향을 미친다고 주장합니다 — 같은 도구도 설계와 사용에 따라 돕기도 하고 해치기도 합니다. AI가 동시에 돕고 다치게 한 여러분 자신의 경험에서 예를 들 수 있습니까?
- 이 페이지는 '수행-학습 격차'를 묘사합니다. 학생들은 AI와 함께할 때는 더 잘하지만, 이후 보조 없는 과제에서는 더 나빠집니다. 그 격차가 어떻게 생긴다고 생각하시며, 그것을 좁히려면 무엇이 필요할까요?
- AI에 대한 과도한 의존이 여러분이 실제로 연습해야 하는 추론을 위임하는 것을 뜻한다면, 정당한 도움과 학습을 갉아먹는 부하 전가 사이의 선을 어디에 긋겠습니까?
- [[research-methods-aied|연구]]는 AI를 사용할 수 있다는 것을 단순히 아는 것만으로도 학생의 노력이 달라지는지를 묻습니다. 여러분은 AI에 대한 인식이 학생들이 더 열심히, 덜 열심히, 아니면 다르게 일하게 만든다고 생각하십니까 — 그리고 그 믿음을 어떻게 검증하시겠습니까?
- AI에 대한 접근과 효과가 학생 집단에 따라 다르다는 점을 감안할 때, 한 과목이 AI 도구를 도입할 때 가장 중요하다고 생각하는 형평성 문제는 무엇이며, 그것을 다루는 책임은 누구에게 있습니까?

## 들어가며

### 학생 경험이 연구되는 방식

- **대규모 설문조사:** [[ai-in-the-wild-college|AI in the Wild]]는 수천 명의 대학생의 실제 상호작용을 분석하고, [[genai-availability-grades-satisfaction|가용성과 만족도 연구]]는 AI 접근을 학생 결과와 상관시킵니다. 이것들은 [[self-report-measures|자기보고 측정]]입니다. 인식과 의도를 잘 포착하고 행동은 대략적으로만 포착합니다.
- **미사용은 메워야 할 격차가 아니라 이성적 입장입니다.** 영국 전기관 횡단 설문조사(학생 7,087명)는 32%가 공부를 위해 생성형 AI를 전혀 사용하지 않았음을 발견했으며, 미사용자들은 스스로 하기를 원해서(86%), 부정확함(81%), 윤리적·환경적 우려를 이유로 들었습니다([[genai-student-experiences-uk-he-survey-2026|Gow et al., 2026)]]).
- **상호작용 양식:** [[tracing-genai-literacy-interaction-patterns|생성형 AI 리터러시 추적하기]]는 학생들이 과제에 걸쳐 AI와 어떻게 참여하는지를 조망합니다. [[misiejuk-cognitive-offloading-prompting-2026|프롬프트 분석]]은 프롬프트 구조를 통해 인지적 참여 수준을 드러냅니다.
- **동기와 주체성:** [[ai-availability-student-motivation|AI 가용성과 동기]]는 AI를 사용할 수 있다는 것을 아는 것이 학생의 노력을 바꾸는지를 살핍니다. [[aied-unfinished-mission-bypass|AIED의 미완성 사명]]은 [[agency]]와 [[motivation]]을 핵심 과제로 틀 짓습니다.
- **인식과 태도:** [[genai-usage-design-students-survey|생성형 AI 사용 설문조사]]와 [[student-mental-models-genai|정신 모형 연구]]는 학생들이 AI를 어떻게 이해하고 신뢰하는지를 조사합니다.
- **형평성 차원:** 학생 경험은 [[equity-in-ai-education]]과 교차합니다 — AI 접근과 효과는 학생 집단에 따라 다릅니다.

## AI가 학생에게 미치는 영향의 방식들

AI는 인지적, 동기적, [[affective-computing|정서적]], 정체성, 사회적, 형평성 차원에 걸쳐 학생에게 영향을 미칩니다. 연구는 **각 차원에 긍정적·부정적 영향이 함께** 있음을, 흔히 동시에 있음을 가리킵니다 — 방향은 설계와 사용에 달려 있습니다.

### 인지적 영향

- **긍정적:** AI는 [[scaffolding|비계]]를 대어 [[feedback]], 힌트, 설명으로 학습을 지원하고, 이해와 연습, [[help-seeking]]을 뒷받침할 수 있습니다. 학생들은 AI로 [[ai-literacy|AI를 잘 쓰는 법을 배울 수 있고]], 잘 설계된 도구는 인지적 작업을 학습자가 계속하도록 합니다([[does-ai-help-students-learn|AI가 학생의 학습을 돕는가?]] 참조).
- **부정적:** AI는 [[cognitive-offloading|과도한 의존과 인지 부하 전가]]를 유도할 수 있습니다. 학생들이 연습해야 하는 추론을 위임하는 것입니다. 이것이 바로 **수행–학습 격차**입니다. 학생들은 AI와 *함께할 때*는 더 잘하지만 이후 보조 없는 과제에서는 더 나빠집니다([[ai-misuse-learning-harm|AI 오용과 학습 피해]] 참조). 과도한 사용은 [[metacognition]]과 [[self-regulated-learning]]도 침식할 수 있습니다.

### 동기적 영향

- **긍정적:** AI는 개인화되고 즉각적이며 부담이 낮은 지원을 제공하여 [[motivation]]과 [[student-engagement|참여]]를 높이고, 학생들이 끈기 있고 유능하다고 느끼도록 도울 수 있습니다([[self-determination-theory|자기결정]] 관점 — 자율성, 유능감, 관계감 — 참조).
- **부정적:** AI를 사용할 수 있다는 것을 아는 것만으로도 학생의 노력과 생산적으로 씨름하려는 동기를 줄일 수 있습니다([[ai-availability-student-motivation|AI 가용성과 동기]], [[wang-safety-gap-productive-struggle-2026|안전의 격차]]). 과도한 의존은 [[agency]]와 스스로 일을 해내며 오는 성취감을 침식할 수 있습니다.

### 정서적·웰빙 영향

- **긍정적:** AI는 부담이 낮은 주문형 도움을 제공하고 질문을 하는 것에 대한 불안을 줄여, [[well-being]]과 자신감을 지원할 수 있습니다.
- **부정적:** AI 사용은 [[anxiety-and-stress|불안과 스트레스]]와 연관됩니다. 대체될지 모른다는 두려움, 불확실한 평가, 뒤처지지 않으려는 압박을 포함해서요. [[kim-ai-anxiety-comprehensive-analysis|AI 불안에 관한 종합 분석]]과 [[aivaluate-anxiety-assessment-2026|AIvaluate]] 같은 연구가 이 정서적 대가를 기록합니다. AI 사용을 둘러싼 [[shame-guilt-ai-regulation-computing-education|수치심과 죄의식]]은 숨기고 선택적으로 공개하게 만들어, 정직한 참여와 [[social-emotional-learning|사회정서적]] 웰빙을 해칠 수 있습니다. 이러한 압박은 적혀 있기보다 지역적이고 사회적입니다. [[social-norms-ai-use|AI 사용의 사회 규범]]을 보십시오. 평가 조건은 나름의 압박을 더합니다. [[harerimana-remote-proctoring-nursing-scoping-2026|간호 평가에서 원격 감독에 관한 범위 검토]]는 학생들이 연결성과 부정행위로 오해받을지 모른다는 점에 불안해하고, 감독 앱의 초보 사용자가 그것을 불안을 유발한다고 묘사하며 감시받는 동안 집중하기 어렵다고 보고하고, 준비 자료에도 불구하고 약 5분의 1이 브라우저 확장이나 연결 실패를 겪었음을 발견합니다.

### 정체성 영향

- **긍정적:** AI는 학문적 소속, 자신감, 전문적 포부에 비계를 대어 [[learner-identity|정체성 형성]]을 지원할 수 있습니다. 예컨대 학생들이 자신을 유능한 실무자로 보도록 돕는 것입니다.
- **부정적:** AI는 저자로서의 상실과 유능성에 대한 의심을 통해 [[learner-identity|학습자 정체성]]을 위협할 수 있습니다 — AI가 작업을 만들어낼 때, 학생들은 그것이 더 이상 "자신의 것"이 아니라고 느끼기 시작할 수 있습니다. 창조적 분야에서의 [[t2i-competence-paradox-2026|유능성의 역설]]은 사용의 용이성이 학생들이 저자됨에서 얻는 장인 기반 정체성을 무너뜨리는 양상을 보여줍니다.

### 학문적 진실성과 공정성 영향

- **부정적:** AI는 [[academic-integrity|학문적 부정행위]]의 새로운 형태(AI가 쓴 에세이, 허가받지 않은 과제 완수)를 가능하게 하여, [[reduce-ai-cheating|탐지와 억제]]에 관한 논쟁을 부추깁니다. 이것은 [[equity-in-ai-education|형평성]]과 상호작용합니다. AI 도구에 대한 불평등한 접근과 이해는 학생 사이 격차를 넓힐 수 있습니다.
- **긍정적/건설적:** AI는 [[authentic-assessment|진정한]], [[process-oriented-assessment|과정 지향적]] 평가와 성찰적 실천을 지원할 수 있습니다([[pedlow-genai-selfassessment-2026|안내된 자기평가]] 등). 이것은 진실성 문제를 [[ai-literacy]]와 책임의 기회로 돌립니다.

학생들이 진실성에 대해 하는 이야기는 부정행위 틀이 시사하는 것보다 덜 확정적입니다. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa and Mezgebu (2026)]]는 에티오피아의 한 대학에서 학부생 27명을 인터뷰하여 학생 집단이 스스로에게 갈라져 있음을 발견했습니다. 거의 모두가 생성형 AI를 사용하거나 동료가 사용하는 것을 보았고 대다수가 그것이 성취를 높였다고 평가했으며, 소수는 과제에서의 사용을 명백한 비행이라고 불렀고, 가장 날카롭고 널리 공유된 불만은 공정성이었습니다 — 정직하게 일한 학생들 위로 AI 사용자가 점수를 따내는 것, 일부는 그것이 자신들의 성실감을 죽인다고 표현하고, 한 참가자는 "우리가 AI 사용으로 이득을 보고 있는지 고통받고 있는지" 확신하지 못했습니다. 절차 쪽도 중요합니다. [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]]는 생성형 AI 비행 사건 1,162건을 코딩하여 가장 흔히 인용되는 증거 — 탐지기 출력, 유사도 보고서, AI 전형적 내용 양식 — 이 가장 약한 입증 가치를 지닌다는 사실과, 파이프라인에 최소 증거 임계값이 없어 사건이 빈약한 학생들이 항소 쪽으로 밀려났음을 발견했습니다. 지나치게 포괄적인 정의는 그 노출을 넓힙니다. [[wright-transcription-not-generation-2026|Wright (2026)]]는 "[[generative-ai|생성형 AI]]"를 겨냥한 금지가 학생이 이미 저술한 작업의 형식만 변환하는 도구까지 잡아챌 수 있음을 보여주는데, 이 지나친 포괄성은 장애를 지닌 학생과 [[equity-in-ai-education|형평성]]에 노출된 학생에게 가장 무겁게 떨어집니다. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]]는 건설적인 출구를 가리킵니다. 진실성을 [[evaluative-judgment|판단]]을 통해 실현되는 [[pedagogy|교수법적]] 실천으로 다루는 것입니다 — 주석이 달린 결정의 흔적, 검증, 구두 방어, 버전 이력 — 감시를 통해 확보되는 순응이 아니라 말입니다.

검증은 학생들이 그 질문을 경험하는 방식을 바꿀 수 있습니다. 자신의 작업을 먼저 설명해 달라는 요청은 처음에는 고발로 읽혔지만, 일단 교육과정이 그것을 감시가 아니라 교수법으로 미리 틀 지어 준 뒤에는 학생들이 AI 사용을 더 공개적으로 밝히고 과제를 학습 과제로 다루었습니다. 5–10분의 대화에서였습니다([[best-response-student-ai-dialog-2026|Mandernach, 2026]]).

### 사회적·관계적 영향

- **긍정적:** AI는 [[collaborative-learning|협력]]과 [[student-ai-interaction|인간-AI 상호작용]]을 매개하여, 팀워크, 또래 상호작용, 다양한 관점에 대한 접근을 지원할 수 있습니다.
- **부정적:** AI는 진정한 또래 및 교수와의 상호작용을 줄이고, [[ai-sycophancy|아첨적]] 역학을 만들며, 공개되지 않은 동료로 작동할 때 학습자가 보거나 이의를 제기할 수 없는 방식으로 집단 담론과 [[agency]]를 재형성할 수 있습니다([[jin-emergent-learner-agency-implicit-hai-2026|암묵적 HAI에서 드러나는 학습자 주체성]] 참조).

### 장기적/역량 영향

- **긍정적:** AI는 학생이 AI가 통합된 직장을 위해 전이 가능한 기술을 쌓도록 도울 수 있습니다 — [[lodge-adaptive-capabilities-genai-future-2026|적응 역량]]인 [[ai-literacy]], [[distributed-cognition]], [[metacognition]] — 그리고 AI 기술 준비도에 대한 기대를 높일 수 있습니다([[ithaka-sr-ai-skills-college-graduates-2026|졸업생에 대한 AI 기술 기대]]).
- **부정적:** 과도하게 의존하거나 성찰하지 않는 AI 경험은 학생을 AI 없이 수행하는 데 더 서툴게, 독립적 추론을 덜 연습하게, 자신의 역량을 불확실하게 만들 수 있습니다([[ai-misuse-learning-harm|AI 오용과 학습 피해]] 참조).

**종합:** 같은 AI 도구도 설계와 사용에 따라 학생을 뒷받침하거나 잠식할 수 있습니다. 이를 관통하는 안전장치는 AI를 지원에 쓰는 동안([[scaffolding|비계를 대되 대신하지 말 것]]) 인지적으로 중요한 작업을 학습자가 계속하게 하는 것이며, 수행만이 아니라 영향의 전 범위에 주의를 기울이는 것입니다. 하나의 구성은 경험이 시작되는 지점을 옮깁니다. AI가 숙제를 돕는 것이 아니라 교육과정 독서 자체를 생성할 때, 학생들은 자신의 [[curriculum-design|교육과정]]의 감사자가 됩니다. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]]의 대학원 수업에서 학생들은 생성된 텍스트의 맥락 특수성과 조정 가능성을 가치 있게 여겼고, 75퍼센트가 AI 동반 없이 비교되는 수업보다 더 많이 배웠다고 동의했지만, Wikipedia 링크와 동료 검토 인용이 라벨 없이 같은 목록에 나타났기에 맥락으로부터 출처의 질을 추론해야 했고, 24명의 설문 응답자 중 4명이 의존의 언어를 사용했으며, 그중 한 명은 자신을 "안심과 구조를 위해 AI에 다소 공동의존적"이라고 묘사했습니다.

학생이 경험하는 가장 긴 호흡의 결과 — 다음 학기에 돌아오는지, 학점을 쌓는지, 졸업하는지 — 는 교수적이라기보다 제도적이며, [[student-support-and-success]]는 AI 지원이 그것에 어떤 영향을 미치는지를 추적합니다. 과제 완수는 손쉽게 움직이고, 지속과 졸업은 훨씬 덜 움직입니다.

## 연결

학생 경험은 [[cognitive-offloading|과도한 의존]](지나친 AI 의존), [[ai-literacy]](효과적 사용을 위한 기술), [[cognitive-offloading]](AI가 인지적 작업을 어떻게 바꾸는가), 그리고 [[student-engagement|참여]](AI 시스템이 학생의 행동을 어떻게 측정하고 반응하는가)에 연결됩니다. 이것은 [[stakeholders]] 상위 개념의 학습자 대면 구성원이며, AI가 학생에게 미치는 모든 영향의 방식들을 요약하는 곳입니다.

## 연결된 개념

- [[learners]] — 학습자: 학습자 측 개념을 위한 상위 개념
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[learner-identity]] — 진화하는 학문적, 전문적, 창조적, 학문적 학습자 정체성
- [[agency]]
- [[well-being]]
- [[anxiety-and-stress]]
- [[social-emotional-learning]]
- [[remote-proctoring]]
- [[generative-ai]]
- [[llm]]
- [[higher-ed]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]
- [[k-12]]
- [[scaffolding]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[framing-ai-use-for-students]]
- [[academic-integrity]]
- [[stakeholders]] — 상위 개념: AI 교육에서의 사람과 수용자(학습자, 교사, 설계자, 행정가, 정책 입안자)
- [[self-report-measures]]
- [[student-engagement]] — AI 시스템이 학생의 행동을 어떻게 측정하고 반응하는가
- [[social-norms-ai-use]] — AI 사용이 동료에게 어떻게 가시가 되는가
- [[student-support-and-success]] — 지원의 제도적 측면: 수업에서 일어나는 일이 아니라 대학이 학생에게 하는 일

## 연결된 문서

- [[shame-guilt-ai-regulation-computing-education]] — AI 사용의 사회적 조절자로서의 수치심과 죄의식
- [[t2i-competence-paradox-2026]] — 유능성의 역설: 텍스트-이미지 생성형 AI 사용에서의 창조적 정체성
- [[best-response-student-ai-dialog-2026]]
- [[chatgpt-perception-online-learning-engagement-2026]]
- [[ai-tools-academic-work-cheating-2026]]
- [[genai-student-experiences-uk-he-survey-2026]]
- [[metacognitively-discordant-completion-genai-2026]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[ai-in-the-wild-college]]
- [[genai-availability-grades-satisfaction]]
- [[student-rationalization-ai-writing]] — 학술 저술에서 AI 사용에 관한 학생의 합리화(Kim et al. 2026)
- [[tracing-genai-literacy-interaction-patterns]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[ai-availability-student-motivation]]
- [[aied-unfinished-mission-bypass]]
- [[student-mental-models-genai]]
- [[genai-usage-design-students-survey]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — 대학 졸업생에 대한 AI 기술 기대 대 제도적 준비도
- [[student-ai-inquiry-types-cs2-2026]] — 학생-AI 상호작용에서의 질의 유형 분석
- [[lnenicka-secondary-students-genai-stem-2026]] — STEM 전반에 걸쳐 중등 학생들이 생성형 AI 도구로 무엇을 하는가
- [[dai-chatbots-problem-posing-primary-2026]] — 초등 과학에서의 생성형 AI 챗봇과 문제 제기
- [[bassett-ai-detectors-education-2026]] — 앞면이 이기든 뒷면이 지든: 교육에서의 AI 탐지기(Bassett et al. 2026)
- [[wang-safety-gap-productive-struggle-2026]] — 안전의 격차: 생산적 투쟁의 회복
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: 학생 불안의 LLM 증강 평가(2026)
- [[kim-ai-anxiety-comprehensive-analysis]] — AI 불안에 관한 종합 분석
- [[student-perceptions-ai-study-productivity-2026]] — 학습 생산성과 학습을 위한 인공지능 도구에 관한 학생의 인식: 탐구적 설문조사 연구
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — 고등교육 이후 수용 관점
- [[pedlow-genai-selfassessment-2026]] — 학생 자기평가를 통해 생성형 AI 사용의 윤리적 인식 높이기
- [[dollinger-equitable-assessment-ai-2026]] — AI 시대의 공정한 평가
- [[longitudinal-ai-usage-ethics-policy-teacher-education-2026]] — 교사 교육에서의 생성형 AI 사용, 윤리, 정책의 종단 연구(Parker et al. 2026)
- [[genai-use-usefulness-student-experience-australia-2026]] — 호주 고등교육에서의 생성형 AI 유용성에 관한 학생 경험(Chung et al. 2026)
- [[genai-decision-capability-cognitive-load-2026]] — 생성형 AI와 학생이 인식하는 의사결정 역량(인지 부하 설명)
- [[genai-professionalization-metaphors-2026]] — 생성형 AI 개념화와 학생의 직업화
- [[sidorkin-ai-generated-course-readings-2026]] — 자신의 AI 생성 교육과정의 감사자가 된 학생들(Sidorkin 2026)
- [[mulisa-students-genai-integrity-perspectives-2026]] — 생성형 AI가 부정행위 도구인가 학습 파트너인가에 관한 학생들의 시각
- [[munoz-misconduct-allegation-evidence-2026]] — 비행 고발 파일이 실제로 증거로 담고 있는 것
- [[wright-transcription-not-generation-2026]] — 지나치게 포괄적인 AI 규칙과 그것이 잡아채는 학생들
- [[sharma-judgment-visible-genai-assessment-2026]] — 순응이 아니라 평가적 판단으로서의 진실성
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 원격 감독이 학생에게 끼치는 정서적·형평성 대가
