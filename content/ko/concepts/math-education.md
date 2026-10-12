---
title: 수학 교육
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-05T11:00:00-04:00"
type: concept
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
discipline: [math education, stem education]
audience: [learners, instructors]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/math-education
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **수학 교육** — 학생이 수학을 어떻게 배우는지, 그리고 AI가 수학 교수를 어떻게 지원할 수 있는지에 관한 연구로, 정서적 튜터링, 손글씨 작업으로부터의 인지 진단, [[desirable-difficulties|생산적 곤란]] 평가, 도움 요청 행동, 시각 자료 생성을 위한 교사-AI 협력, 그리고 [[student-ai-interaction|학생-AI 상호작용]] 궤적을 아우릅니다. 수학 교육은 이 지식 기반에서 가장 활발한 [[discipline-specific-aied|영역 특화]] [[research-methods-aied|연구]] 영역으로, 초등 분수부터 고등교육까지 AI가 수학 학습을 어떻게 지원하고 때로는 어떻게 약화시키는지를 함께 탐구하는 32개의 문서를 보유하고 있습니다.

## 생각해 볼 질문들

- 수학 문제는 명확한 정답이 있으면서도 풍부한 추론을 요구하기 때문에, 수학은 AI 튜터링의 선호되는 시험 무대가 됩니다. 수학 문제에 막혔을 때 실제로 학습에 도움이 되는 도움은 어떤 것입니까 — 답, 힌트, 아니면 질문 — 그리고 AI는 어느 쪽을 기본값으로 택할 가능성이 높습니까?
- 연구는 AI 튜터가 흔히 과도한 도움을 기본값으로 삼아, 학생이 준비되어 있을 때도 엄밀함을 요구하지 않는다는 것을 발견했습니다. 튜터를 설계한다면, 이해를 쌓는 '생산적 곤란'을 보존하기 위해 도움을 아끼는 시점을 어떻게 결정하겠습니까?
- 이 페이지는 힌트를 너무 일찍 요청하거나 피상적으로 훑어보는 학생이 덜 배우는 경향이 있음을 보여 줍니다. 진정한 노력이 아니라 조바심 때문에 힌트를 찾아간 적이 있습니까? 그것은 AI 지원이 학습을 뒷받침하기보다 약화시킬 수 있는 방식에 대해 무엇을 말해 줍니까?
- AI 인지 진단 시스템은 때로 증거를 환각하고 실수를 지나치게 귀인하며, 심지어 강력한 모델도 학생의 실제 손글씨 작업을 읽는 데는 성능이 떨어집니다. 낙서한 풀이로 무엇을 틀렸는지 진단해 주는 튜터를 얼마나 신뢰하겠습니까?
- LLM은 수학적으로 동등한 문제 서술 사이에서 답을 뒤집습니다. 즉 같은 문제를 다르게 제시하면 결과가 바뀝니다. 이것은 AI로 수학 이해를 채점하거나 진단하는 것에 대해 무엇을 말해 줍니까?

## 들어가며

수학 문제는 명확한 정답이 있으면서도 풍부한 추론을 요구하기 때문에, 수학 교육은 [[ai-education|AI 교육]] 연구의 주요 영역이 되었습니다. 이런 특성은 튜터링의 효과, 평가의 타당도, AI 도구가 학생의 인지와 정서에 어떻게 작용하는지를 연구하는 데 이상적입니다. 이 지식 기반의 문서들은 AI 수학 튜터의 가능성과 지속되는 난제를 함께 드러냅니다. 생산적 곤란을 약화시키는 과잉 비계, 인지 진단에서의 환각, 그리고 AI 지원과 진정한 학습 사이의 균형을 잡는 어려움이 그것입니다.

### 주요 연구 주제

**AI 수학 튜터링과 비계**는 가장 큰 군집으로, AI 튜터가 수학 학습을 지원하거나 약화하는 방식을 검토하는 네 편의 문서로 이루어집니다. **[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]**는 정서적 인식 — 텍스트와 안면 표정에서 학생의 감정을 탐지하는 것 — 을 더하는 것이 수학 튜터링에서 +23포인트의 승률 우위를 낳았음을 보여 주며, [[affective-computing]]과 [[affective-tutoring]]에 연결됩니다. **[[zhang-tutormoments-2026|TutorMoments]]**는 2~7학년 수학 튜터링의 교사 주석 대화록 462개를 평가하여, 최전선 모델들이 학생이 준비되어 있을 때도 엄밀함을 요구하지 않고 과도한 도움을 기본값으로 삼는다는 것을 발견했으며, 이는 AI의 도움됨과 [[scaffolding]] 원리 사이의 정합성에 정면으로 도전합니다. **[[lak2026-hint-button-unproductive-use|An 등]]**은 *Decimal Point* ITS에서 세 학기에 걸쳐 학생 999명을 분석하여, 성급한 힌트 요청과 피상적인 힌트 읽기가 [[prior-knowledge|사전 지식]]을 통제한 뒤에도 [[learning-gains|학습 향상]]의 감소를 꾸준히 예측한다는 것을 발견했으며, 이는 [[help-seeking]]과 [[learning-analytics]]에 연결됩니다.

**사회정서적 지원은 성취보다 효율을 살 수 있습니다.** 7학년 대수 튜터에 LLM 마음챙김 계층을 더한 결과, 학습과 수학 불안은 두 조건 간에 변하지 않았는데(교란 이후 252명 중 42명 분석), 마음챙김 조건의 학생들은 더 적은 시간과 더 적게 요청된 힌트로 비슷한 수준의 학습에 도달했습니다([[mindful-llm-math-tutoring-2026|Rief 등, 2026]]).

**[[cognitive-diagnosis|인지 진단]]과 평가**는 AI가 수학적 사고를 평가하는 능력을 탐구합니다. [[razavi-powers-item-difficulty-llm-2026|Razavi와 Powers(2026)]]는 수학과 읽기를 모두 아우르는 대규모 문항 난이도 연구를 추가했습니다. Rasch IRT 모형으로 보정된 5,170개의 K-5 문항에 걸쳐, GPT-4o의 제로샷 난이도 평정은 실제 난이도와 중등도~강한 상관을 보였고(r = 0.83 수학, r = 0.81 읽기), 학년 간 편차는 있었으며, 특징 기반 접근(LLM이 추출한 특징을 트리 기반 모형에 투입)은 최대 r = 0.87의 상관에 도달했고, 학년 수준과 단어 수가 가장 강력한 예측 변수였습니다. 이 연구는 검사 전문가를 위한 실천적 7단계 워크플로를 제공하면서도, K-5 수학과 읽기를 넘어서는 일반화 가능성은 불분명하다고 경고합니다. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]**는 손글씨 수학 작업의 교사 주석 진단 판정 3,036개에 대해 18개 LLM을 벤치마킹하여, 모든 모형이 심각한 저성능(F1 < 0.5)을 보이며 체계적인 지나친 귀인과 증거의 환각을 보인다는 것을 발견했으며, 이는 [[knowledge-tracing]], [[hallucination-risk]], 그리고 [[multimodal]] 평가의 난제에 연결됩니다. **[[representation-robustness-llm-math-problem-solving|Nath 등]]**은 [[llm]]의 수학 [[problem-solving]]이 표면 서술에 극도로 민감하다는 것 — 모형이 동등한 문제 서술 사이에서 정답 여부를 뒤집는다는 것 — 을 보여 주어, AI 기반 수학 채점의 [[assessment-validity]] 우려를 제기했습니다.
**[[automated-scoring-economics-math-items-nigeria-2026|Olaoye, Owolabi, Olaoye(2026)]]**는 수학적 응답을 평가하는 또 다른 경로를 제시합니다. 그들의 Automated Extended Essay Grading Software는 WAEC 채점 기준에 대한 의미 유사도로 고등학교 경제학 시험의 서술형 수학 문항을 채점하며, 채점된 스크립트에 대한 훈련은 하지 않았고, 12명의 인간 채점자와 평균값 기준 집단 내 상관 0.863으로 일치했으며(평균 측정), 피어슨 계수는 0.604에서 0.864였습니다. 일치는 점수가 가장 낮은 구간에서 나타났는데, 소프트웨어는 채점자들의 5.97 대비 20점 중 5.94의 평균을 냈고, 각 채점자는 1,008개 스크립트 중 84개만 채점했으며, 저자들은 낮은 점수를 수험생의 컴퓨터 기반 답안 작성에 대한 익숙하지 못함에 돌립니다.

**[[student-engagement|학생 참여]]와 AI 리터러시**는 학생이 AI 수학 도구와 어떻게 상호작용하는지를 검토합니다. **[[epistemic-proactivity-math|Abdelghani 등]]**은 수학 학습에서 학생-AI 상호작용의 시간적 궤적을 추적하여, 피상적인 [[prompt-engineering|프롬프팅]]에서 개념 이해를 향한 능동적이고 [[self-directed-learning|자기 주도적]] 추구인 "인식론적 능동성"으로 이어지는 발달 경로를 식별했습니다. 이것은 [[ai-literacy]], [[metacognition]], [[self-regulated-learning]]에 연결됩니다. **[[ai-powered-personalized-learning-elementary-fractions-2026|Holman]]**은 AI 적응형 플랫폼이 수학 학습 어려움을 가진 학생의 분수 이해를 유의미하게 향상시켰음을 발견했으며, 이는 [[personalized-learning]]과 [[adaptive-learning]]에 연결됩니다.

**교사 지원**은 수학 교육자를 위한 AI 도구를 탐구합니다. **모의 학생 역할극** 역시 교사 실습에 쓰입니다. [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang과 Zhang(2025)]]은 흔한 비율 추론 [[misconceptions]]를 가진 중학생 역할을 하는 *Student GPT*라는 커스텀 ChatGPT [[conversational-ai|챗봇]]을 만들어, 예비 중등 수학 교사에게 위험 부담이 낮은 실습으로 학생의 사고를 진단하고 올바른 해법으로 이끄는 연습을 제공하여, 학생의 오개념에 관한 교수법적 내용 지식을 쌓는 데 있어 TeachLivE 같은 고비용 플랫폼을 보완하는 [[generative-ai|생성형 AI]] 기반 [[simulation]]을 보여 줍니다.

이 영역의 유일한 현장 수준 종합은 922건의 기록에서 선별된 42개 연구에 대한 2021–2025 PRISMA 검토이며(Cohen's kappa = 0.88), 이 검토는 이 페이지의 군집이 간직하지 못한 하나의 범주를 더합니다. 바로 교사 대상 자동화로, MATH41은 서로 다른 수준의 학습자를 위한 수학 과제의 신속한 생산을 지원하고, 하이브리드 모형 CognifyNet은 학생의 활동 패턴을 분석하여 교육자가 초기에 드러나는 어려움을 조기에 감지할 수 있게 합니다. 같은 검토는 이 분야의 맹점을 지목합니다. 연구 영역이 교육학 60%, 컴퓨터 과학 28%인 데 비해 심리학에 속한 연구는 한 편에 불과하여, 정서적 영향, 신뢰, 윤리가 상대적으로 미탐색으로 남아 있습니다. 그리고 기술적 역량이 실증된 교실 효과와 동일시되어서는 안 된다고 주장합니다.([[ai-mathematics-education-prisma-review-2026]])

**고등교육 수학**은 AI가 고급 수학 실천에 미치는 영향을 탐구합니다. **[[genai-runaway-object-math-higher-ed|Bui 등]]**은 대학교 수학에서의 [[generative-ai|생성형 AI]]에 [[sociocultural-learning|사회문화적]] 이론을 적용하여, [[governance|기관]]적·교수법적 규범의 속도를 앞지르는 방식으로 학문 실천을 변화시키는 "폭주하는 대상"으로서의 AI를 분석했습니다.

**LLM 튜터링과 [[learning-design|수업 설계]]**는 수학 교육 증거 기반을 날카롭게 하는 2026년 연구 두 편으로 이루어진 새롭게 떠오르는 군집입니다. [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu, Sun(2026)]]은 초등학교 수학 서술형 문제를 위한 규칙 기반 [[intelligent-tutoring|LLM 튜터링 시스템]]을 개발했으며, 그 3계층 구조(진단 → 의도 선택 → 제약 있는 응답 생성)는 40명의 5학년 교실 파일럿에서 상호작용의 일관성을 높이고 성급한 답 제시를 줄였습니다. 이는 절차적 수학 영역이 본질적으로 확률적인 LLM 비계에 [[guardrails|구조화된 규칙 방어책]]을 필요로 한다는 증거입니다. [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, Wang(2026)]]는 수학 교육학 석사 학생에게 스마트 교실 모형을 적용하여, 교육과정 기준·교과서·학생 조건 차원에 걸쳐 수업 목표 설계에서 통계적으로 유의미한 향상(p < .05)을 발견했습니다.

프롬프트 설계 자체가 측정 가능한 수단입니다. MathDial 벤치마크에서 교수법적으로 정보를 담은 소크라테스식 "Tutor Prompt"는 GPT-4o와 GPT-4o-mini 모두에서 기본 프롬프트에 비해 Success@N을 높이고 Telling@N을 크게 줄였습니다([[chudziak-ai-math-tutoring-platform|Chudziak & Kostka(2025)]]).

**수학적 모형화 과제를 위한 [[generative-ai|생성형 AI]]**는 일상적 연습을 넘어 생성의 영역을 확장합니다. ADDIE 접근을 통해 개발된 AI 기반 플랫폼은 중등 수학에서 정비례를 사례 주제로 삼아, 고품질 모형화 과제를 설계할 시간과 자원이 부족한 교사의 문제를 다루고자 했습니다. 기존 도구는 전형적인 서술형 문제나 일상적 연습을 만들어내는 데 비해, 이 플랫폼은 확립된 설계 원리와 [[prompt-engineering|검색 증강 생성]]에 기반하여 수학적 모형화 역량을 기르는 자료를 생성하는 것을 목표로 했습니다.
- **시각적 사고 연쇄: 기하에서의 [[agency|자율성]] 격차.** GeoVAD-Bench는 600개의 보조선 작도 문제(쉬움 200, 보통 200, 어려움 200)에서 최종 답이 아닌 중간 시각 보조 수단을 진단하며, 일관된 양상을 발견합니다. 참고 보조 도형을 제공하는 것은 정확도를 완만하게 높이지만(세 모형에 걸쳐 +3.3, +3.0, +7.0포인트), 정답에 이르는 길에 스스로 보조선을 작도하도록 두면 격차가 10.0~13.5포인트로 벌어지며, 두 모형은 시각적 추론이 전혀 없을 때보다 오히려 더 나쁜 수행을 보였습니다. 네 가지 과정 오류 범주가 귀인된 실패의 93.1%와 89.7%를 차지했습니다. [[problem-solving]] 교수에 대한 함의는, 도식적 비계가 답의 정확도와 별도로 훈련되고 평가되어야 한다는 것입니다.([[geovad-bench-visual-chain-of-thought-geometry-2026]])
- **AI에 취약한 문제는 학습 시간과 유지를 잃습니다.** 320만 건의 ALEKS 상호작용에 관한 10년 패널은 ChatGPT 출시 이후, AI 프롬프트로 전사되기 가장 쉬운 텍스트 기반 서술형 문제에서의 학습 시간이 26.9% 감소한 반면, 감독하에 치러진 유지 문항에서는 정답 확률이 25% 하락했음을 발견했습니다([[generative-ai-reduced-study-time-math|Rismanchian 등, 2026]]).
- **학생은 즉각적 피드백을 높이 평가하지만, 선택적 실습 플랫폼은 쓰이지 않습니다.** 학생 157명 중 [[genai-practice-platform-maths-feedback-2026|Chen 등(2026)]]은 95명이 등록하고 34명만 문제를 시도했음을 확인했습니다. 사용자들은 참여를 가장 높게 평가했으며(79% 동의), 기존 문제 책자보다 이 플랫폼을 선호한 경우는 42%에 불과했습니다.
- **AI는 성취를 높이면서 성별 격차를 넓힐 수 있습니다.** 나이지리아 고등학생 115명을 대상으로 한 6주 준실험에서, ChatGPT 피드백은 기존 교수에 비해 이차방정식 성취를 높였으나(29.18 대 24.06), 자기효능감의 성별 차이는 없었는데도 남학생이 여학생보다 높은 수행을 보였습니다(30.95 대 25.16). 이는 AI 수학 지원의 형평성 관련 주의점입니다([[ai-generated-responses-achievement-self-efficacy-2026|Oladayo & Diri, 2026]]).

### 관련 개념과의 연결

수학 교육은 [[intelligent-tutoring]]과 [[intelligent-tutoring|AI 튜터링]]에 이르는 강한 인지 튜터 및 ITS 연구 전통을 통해, 생산적 곤란과 힌트 사용 연구를 통해 [[scaffolding]]에, 수학 불안과 감정 인지 튜터링을 통해 [[affective-computing]]에, 인지 진단과 평가 연구를 통해 [[knowledge-tracing]]와 [[assessment-validity]]에, 그리고 수학 교수에서의 교사-AI 협력을 통해 [[teacher-role]]에 이르는 독특한 연결고리를 지닌 채, 더 넓은 [[stem-education]] 영역 안에 자리합니다. [[k-12]] 연결은 특히 강한데, 수학 문서의 상당수가 K-12 맥락을 다룹니다. 한편 [[higher-ed]] 연결은 교사 준비와 고급 수학 실천에서 나타납니다.

## 수학 교수자를 위한 시사점

- **AI 튜터링을 역량의 해결책이 아니라 도움 요청의 수단으로 다루십시오.** [[lak2026-hint-button-unproductive-use|힌트 사용 연구]]는 성급한 힌트 요청과 피상적인 힌트 읽기가 더 낮은 향상을 예측한다고 보여 주므로, 튜터의 원초적 역량보다 *학생이 언제, 어떻게* AI 도움을 요청하도록 설계하는지가 더 중요합니다. 학생이 요청하기 전에 먼저 시도하도록 격려하고, 요청 시가 아니라 필요의 순간에 도움을 드러내십시오.
- **생산적 곤란을 보호하십시오.** [[zhang-tutormoments-2026|TutorMoments]]는 모형이 과도한 도움을 기본값으로 삼아 엄밀함을 거의 요구하지 않는다는 것을 발견했습니다. AI 지원이 풀어 주기보다 비계가 되도록 구성하고, 추론을 잠식하는 답 대체를 감시하십시오.
- **AI 진단 산출물을 확실한 진실로 다루지 마십시오.** [[llm-cognitive-diagnosis-handwritten-math|MathCog]]는 LLM이 지나친 귀인과 환각된 증거를 동반하여 수학적 사고를 진단하는 데 저성능(F1 < 0.5)을 보인다는 것을 보여 줍니다. AI 진단은 학생의 실제 작업에 맞춰 검증해야 할 제안으로 사용하십시오.
- **AI 채점의 표면 형식 취약성을 경계하십시오.** [[representation-robustness-llm-math-problem-solving|서술 민감성]]은 동등한 문제가 AI의 답을 뒤집을 수 있음을 의미하며, 이는 AI 기반 수학 평가의 타당도 위험입니다. 고위험 채점에는 [[human-in-the-loop-ai|인간 검토]]를 우선하십시오.
- **AI를 활용하여 개인화 실습의 장벽을 낮추십시오.** [[ai-powered-personalized-learning-elementary-fractions-2026|적응형 플랫폼]]은 수학 학습 어려움을 가진 학생의 분수 이해를 향상시켰습니다. 차별화된 지원이 필요한 학습자를 위해 AI 적응형 도구를 선별적으로 배치하십시오.
- **AI가 생성한 교수 자료에 대한 통제를 교사가 유지하도록 하십시오.** [[teacher-control-ai-generation-math-visuals|AI 시각 자료에 대한 교사의 통제]]는 AI의 효율성과 교수법적 정확성의 균형을 잡는 프레임워크를 뒷받침합니다.

## 연결된 개념

- [[stem-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[k-12]]
- [[higher-ed]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[help-seeking]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[assessment-validity]]
- [[multimodal]]
- [[hallucination-risk]]
- [[cognitive-offloading]]
- [[teacher-role]]
- [[educational-development]]
- [[generative-ai]]
- [[discipline-specific-aied]]
- [[teacher-education]]

## 연결된 문서
- [[ai-mathematics-education-prisma-review-2026]] — 수학 교육에서의 인공지능: PRISMA 기반 체계적 문헌 검토 (2021-2025)
- [[automated-scoring-economics-math-items-nigeria-2026]] — 맥락 유사도 모형을 이용한 고등학교 졸업장 시험 경제학 수학 문항의 자동 소프트웨어 채점
- [[mindful-llm-math-tutoring-2026]] — 문제 해결을 넘어서: 수학 학습에서의 정서적·성찰적 지원을 위한 대규모 언어 모형
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — CAL을 활용한 가상 튜터링: 도입과 학습에 관한 실험
- [[making-ai-tutoring-productive-mastery-math-2026]] — AI 튜터링을 생산적으로 만들기: 숙달 기반 수학 실습
- [[chudziak-ai-math-tutoring-platform]] — AI 기반 수학 튜터링 플랫폼 (Chudziak & Kostka 2025)
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[zhang-tutormoments-2026]]
- [[lak2026-hint-button-unproductive-use]]
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[representation-robustness-llm-math-problem-solving]]
- [[epistemic-proactivity-math]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[teacher-control-ai-generation-math-visuals]]
- [[ai-tpack-preservice-math-teachers]]
- [[genai-runaway-object-math-higher-ed]]
- [[generative-ai-reduced-study-time-math]] — ALEKS 숙달 플랫폼: 텍스트 기반 문제가 AI에 가장 취약함
- [[mujib-ai-ibl-creative-math-2026]] — AI 지원 IBL과 창의적 수학 수행
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — 생산적 실패를 위한 LLM의 교수법적 조향
- [[rhaimi-productivemath-2025]] — ProductiveMath: 생산적 실패 문제 설계를 지원하는 AI
- [[preferred-scaffolding-ai-mathematical-modeling]] — AI 지원 수학적 모형화에서 선호되는 비계
- [[instructional-design-proficiency-masters-math-2026]] — 수학 교육학 석사의 수업 설계 능력을 향상하는 스마트 교실 모형과 D-T-E 순환 (Zhu 등 2026)
- [[rule-integrated-llm-tutoring-primary-math-2026]] — 초등 수학을 위한 LLM 튜터링 시스템에서 규칙 기반 대 임의적 비계 (Looi 등 2026)
- [[ai-modeling-problem-generation-platform-2026]] — 수학적 모형화 문제를 생성하는 AI 기반 플랫폼 (ADDIE, RAG)
- [[razavi-powers-item-difficulty-llm-2026]] — LLM과 트리 기반 머신러닝을 이용한 문항 난이도 추정
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[gpt4-handwritten-math-exam-grading-2026]] — 반개방형 손글씨 대학교 수학 답안의 GPT-4 채점
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — K-12 수학 코퍼스에서의 의미 기반 지식 개념 주석과 강화학습 기반 문제 배열
- [[misconception-acquisition-dynamics-llms-2026]] — 언어 모형의 대수 오류 규칙 훈련 역학
- [[genai-practice-platform-maths-feedback-2026]] — 학생 157명의 수학 수업에서의 선택적 생성형 AI 실습 플랫폼: 즉각적 피드백이 높이 평가되나 활용은 34명의 능동 사용자에 국한됨
- [[ai-generated-responses-achievement-self-efficacy-2026]] — AI 생성 응답이 학업 성취에 미치는 영향에 대한 평가: 윤리적 관점과 자기효능감
