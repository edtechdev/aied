---
title: 교육의 수준
created: "2026-09-20T13:08:39-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education, teacher education]
confidence: medium
translation_of: concepts/education-levels
source_updated: "2026-10-25T20:50:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **교육의 수준** — 이 지식 기반의 `level` 메타데이터를 구성하는 구간(band)들입니다. **preschool**, **primary education**, **middle school**, **secondary**, **K-12**, **higher ed**, **undergraduate**, **graduate**, **adult learning**, **special education**, 그리고 **[[teacher-role|teacher]] education**. 이 페이지는 그 영역의 우산 역할을 하며, 단일 구간 페이지의 중복이 아닙니다. 이 페이지는 구간을 넘나들 때 무엇이 변하는지, 학교/대학의 분기선이 가르치는 교과보다 왜 더 중대한지, 그리고 AI 증거가 어디에 밀집하고 어디가 빈약한지를 설명합니다.

## 생각해 볼 질문들

- 대학원 세미나와 2학년(second grade) 수학 수업은 둘 다 "교육"이지만, 하나에 도움이 되는 도구가 다른 하나를 해칠 수 있습니다. 수준이 아닌 구간 자체의 어떤 점이 좋은 AI 사용의 모습을 바꿉니까?
- 2학년생 132명을 대상으로 한 한 시험은 적응형 수학 튜터가 고정된 순서보다 나을 것이 없다는 것을 발견했습니다. 대학 학생에게서도 같은 귀무 결과를 기대하겠으며, 적응은 어떤 학습자 역량을 조용히 전제합니까?
- 'K-12'와 'higher education'는 각각 여러 구별되는 상황을 하나의 라벨로 압축합니다. 그 라벨들은 어떤 비교들을 감춥니까?
- 어떤 구간의 증거 기반이 빈약하다면, 정직한 대응은 아무 말도 하지 않는 것입니까, 인접 구간에서 빌려 오는 것입니까, 아니면 연구를 설계하는 것입니까?

## 들어가며

`level` 메타데이터 항목은 어떤 자료가 어떤 교육의 구간에 관한 것인지를 이름짓습니다 — 구간이지 나이가 아닙니다. **preschool**, **primary education**, **middle school**, **secondary**, **K-12**, **higher ed**, **undergraduate**, **graduate**, **adult learning**, **special education**, **teacher education**. 그중 일부는 학력의 한 단계를, 둘은 대학 교육의 매우 다른 두 절반을, 둘은 단계가 아니라 [[learners|학습자 집단]]을, 그리고 하나는 가르치는 사람들을 이름짓습니다. 하나의 자료는 여러 구간을 동시에 가질 수 있습니다.

이 페이지는 그 영역의 우산 역할을 합니다. 구간 페이지들이 심층 작업을 하며 이 페이지와 함께 읽어야 합니다. [[k-12]], [[early-childhood-elementary-ai-education]], [[higher-ed]], [[adult-learning]], [[special-education]], [[teacher-education]], 그리고 [[vocational-education]]이 그것입니다.

## 어떤 구간을 다른 구간과 구별하는 것

구간들은 여러 축 위에서 한꺼번에 다르며, AI 연구는 보통 그중 하나만을 달리합니다.

- **자기 조절의 역량.** 같은 2학년 수학 튜터의 두 버전 — 동일한 내용, 인터페이스, 피드백, 말하기 힌트로, 과제 선택이 [[knowledge-tracing|베이지안 지식 추적(Bayesian Knowledge Tracing)]] 숙달 추정을 따랐는지에만 차이가 있는 — 은 7세 아동 132명 사이에서 사후 검사 차이를 만들어 내지 않았습니다(F(1, 124) = 0.32, p = .574). 저자들의 첫 번째 설명은 발달적입니다. [[adaptive-learning|적응형 시스템]]은 피드백에 참여하고, 노력을 조절하고, 집중을 유지할 수 있는 학습자를 전제로 하며, 어린 아이들은 [[self-regulated-learning|자기 조절]]이 제한되어 있습니다([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **누가 상호작용을 매개하는가.** 학교 구간에서는 어른이 학습자와 도구 사이에 섭니다. 유아 교사 270명을 대상으로 한 설문조사는 도입 의도가 [[technology-acceptance-model|인지된 유용성]], 사용 용이성, AI [[self-efficacy]], [[anxiety-and-stress|AI 불안]]에 의해 움직인다는 것을 발견했습니다. 그리고 이 연구는 아동을 대상으로 하는 AI를 의도적으로 배제했습니다([[preschool-teachers-ai-behavioral-intention-2026]]).
- **평가가 무엇을 위한 것인가.** 중등 평가는 외부적 이해관계에 연결되고, 대학 평가는 강의 이수와 학위에 관한 것이며, 대학원 평가는 한 명의 연구자를 만들어 내는 일입니다.
- **[[prior-knowledge|선행 지식]].** 선행 지식은 그 시험의 사후 검사 수행을 지배했으므로(F(1, 124) = 206.99, p < .001, η²p = .63), 구간 라벨은 지식 수준과 상관하지만 그것과 같지는 않습니다.

## 학교 시절과 대학 시절

가장 중대한 분기는 학교와 대학 사이이며, 가장 흔한 두 라벨은 각각 그것을 감추거나 가로지릅니다.

학교 시절 안에서 측정된 결과는 구간에 따라 급격히 변합니다. 초등(primary)에서는 그것은 교과 학습입니다. [[conversational-ai|GenAI 챗봇]]을 [[science-education|과학 탐구]]에 사용한 중국 3학년생 97명이 검색 엔진 대조군보다 더 나은 문제를 제기했습니다(t = 2.47, p = 0.015)([[dai-chatbots-problem-posing-primary-2026]]). 중등에서는 그것이 종종 성취가 아니라 태도가 됩니다. 타이완 초등 고학년(junior high) 학생 508명을 대상으로 한 설문조사는 경험적 매력(experiential appeal)이 즐거움을 통해 가사 학습(lyric learning)을 위한 [[generative-ai|ChatGPT]] 사용 의도를 형성하는 방식으로 작동한다는 것을 발견했습니다(XM → PEOU β = 0.630, PE → ATU β = 0.369). 81.5%가 무료 등급에 있었는데, 이것은 기술 수용 연구로 위장한 접근-[[equity-in-ai-education|형평성]] 사실입니다([[chatgpt-music-education-junior-high-2026]]). 중등에는 또한 이 말뭉치의 가장 큰 학습 경고가 놓여 있습니다. 7–12학년 중국 학생 26,811명에 걸쳐, 숙제 점수는 18% 올라가고 완료 시간은 30% 줄어든 반면 [[summative-assessment|폐북 시험]] 점수는 6개월 안에 약 20% 떨어졌으며, 이것은 행동이 숙제 아웃소싱을 나타낸 약 81%에게 집중되었습니다([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

대학 시절은 다시 갈라집니다. 학부(undergraduate) 과정은 외부의 판단 아래서의 강의 이수입니다. 소수 민족 서비스 대학(minority-serving R1 university)의 학부 작문가들 사이에서 [[ai-literacy]]는 학생이 [[llm]]을 얼마나 사용했는가가 아니라 어떤 *유형*의 의존에 놓였는지를 예측했습니다([[llm-reliance-types-undergrad]]). 대학원 과정은 연구 훈련이며, 그곳에서 결과는 수행에서 형성으로 이동합니다. 천체학 박사 과정 및 박사후 연구자 420명 사이에서 AI 의존은 연구 [[agency|자율성]](r = −.355)과 [[self-efficacy]](r = −.321)과 부적으로 연관되었으며, 혁신적 행동으로 가는 간접 경로는 주로 자율성(−.115)을 통해 자기효능감(−.069)을 통해 가는 것보다 강했으며, 지도교수의 지원은 자율성에 대한 부적 연결을 약화시켰습니다(B = .077, p = .020)([[ai-mediated-research-agency-formation-2026]]). 박사 과정 학생은 AI 의존이 침식하는 것으로 보이는 바로 그 판단에 의해 평가되며, 학부생은 그렇지 않습니다. 둘을 'higher education' 아래 묶는 것은 그것을 감춥니다.

## 증거가 집중된 곳과 빈약한 곳

이 말뭉치는 고르게 채워져 있지 않으며, level 항목이 그 불균형을 보이게 합니다.

**밀집.** 고등교육은 가장 많이 다루어진 구간입니다. 여기서 참고한 페이지에는 공학 학생 60명의 8주 플랫폼 시험([[ai-assisted-seminar-learning-information-literacy-2026]]), 교육 관리자 395명의 설문조사([[ai-adoption-readiness-ukraine-education-managers-2026]]), 아프리카 고등교육 연구 18편의 메타종합([[data-privacy-ai-african-higher-education-2026]]), 그리고 박사 훈련의 420명 연구([[ai-mediated-research-agency-formation-2026]])가 포함됩니다. 초등과 중등 또한 결과 증거를 지닙니다.

**빈약하며 곳에 따라서는 부재.** 여기서 참고한 페이지들은 유아(preschool) 구간에서 아동 결과 연구를 전혀 보고하지 않으며, 가장 가까운 증거는 아동 대상 도구를 배제한 교사 의도에 대한 설문조사입니다([[preschool-teachers-ai-behavioral-intention-2026]]). 중학교(middle school)는 주로 *제안된* 설계와 종단 연구로, 보고된 결과가 아니라 제안으로 나타납니다([[ai-lms-middle-school-longitudinal]]). 직업 교육 구간의 가장 강한 증거는 한 강의에서 나온 [[self-report-measures|자기보고]] 응답 63건이며, 저자들은 이를 복제가 필요하다고 말합니다([[ai-ive-pbl-vocational-design-creativity-2026]]). 대학원 증거는 횡단적이며, 역경로 모형이 발달 모형보다 약간 더 잘 맞아, 의존에서 자율성 감소로 가는 방향은 추론되었을 뿐 확인되지 않았습니다([[ai-mediated-research-agency-formation-2026]]). 여기서 참고한 것 중 **adult learning**이나 **special education**을 구간으로 한 AI 결과 증거를 보고하는 것은 없습니다. 그것들은 [[adult-learning]]과 [[special-education]]에 자신들의 고유한 다룸이 있으며, 이 페이지는 공백을 메우기 위해 학령기 발견에서 일반화하지 않습니다.

설문조사된 모든 수준에서 하나의 패턴이 성립합니다. 인간의 층이 가장 어려운 경우를 흡수합니다. 알고리즘적 권고가 F1 = 0.64에 이르렀을 때도 인간 전문가는 공학 학생들의 신빙성 결정 지점에 남아 있었습니다([[ai-assisted-seminar-learning-information-literacy-2026]]). 지도교수의 지원은 박사 훈련에서 AI 의존의 부적 연결을 약화시킨 유일한 조건이었습니다([[ai-mediated-research-agency-formation-2026]]). 그리고 유아 구간의 도입자는 아동이 아니라 유아 교사입니다([[preschool-teachers-ai-behavioral-intention-2026]]).

## 수준에 맞는 설계가 실제로 바꾸는 것

- **자율성과 지원.** 어린 학습자에게는 과제 난이도가 아니라 *지원의 수준* — 더 많은 [[scaffolding]], 안내, 힌트 — 를 조정하세요. 난이도 적응은 초등 저학년에서 아무것도 사지 못했으며, 숙달 기반 게이팅(mastery gating)은 오히려 적응형 학생들을 붙잡아 두었을 수 있습니다([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **읽기 수준.** 연령에 맞춘 챗봇은 7–9세, 9–11세, 12–14세에 대한 프롬프트 변수를 사용했으며, 1학년부터 8학년까지의 아동 63명이 그것을 신빙성 있는 정보 출처로 대했습니다([[vahedian-children-attitudes-ai-chatbot-2026]]).
- **매개.** 학교 시절에는 [[parents-and-families|학부모]]와 교사가, 대학 시절에는 [[librarians]]와 지도자가 매개합니다. 그리고 대학의 대응물은 보호가 아니라 전문성입니다. 그 공학 플랫폼은 알고리즘이 가장 자신 없는 곳에 인간을 남겨 두었습니다([[ai-assisted-seminar-learning-information-literacy-2026]]).
- **평가의 이해관계.** 중학교 LMS 설계는 활동별로 AI에 게이트를 두어, 연습 모드에서는 제한된 힌트를 유지하고 채점 항목에서는 AI를 끕니다([[ai-lms-middle-school-longitudinal]]) — 중등 학습 패널티 증거가 구체적으로 만드는 하나의 예방 조치입니다([[stromberg-generative-ai-learning-penalty-secondary-2026]]).
- **미성년자에 대한 데이터 보호 의무.** 의무는 연령에 따라 규모가 달라집니다. 미성년자에 대해 이 말뭉치의 제안들은 구조적입니다. 데이터 최소화, 연령에 맞는 응답 제약, 역할 기반 접근 통제, 감사 가능한 로그([[ai-lms-middle-school-longitudinal]]). 그리고 아동의 디지털 안전 인식은 전제될 수 없는데, 일부는 챗봇에게 비밀을 털어놓을 의향이 있었습니다([[vahedian-children-attitudes-ai-chatbot-2026]]). 성인에 대해서는 의무가 동의, 통제, 국경 간 데이터 흐름 쪽으로 이동합니다([[data-privacy-ai-african-higher-education-2026]]).
- **구간에 맞는 거버넌스.** 준비도는 층별로 다릅니다. 우크라이나 관리자 395명은 개인적 준비도를 시스템 준비도보다 0.68점 높게 평가했으며(d = 0.73), 규제의 부재를 가장 자주 지적했고(58.5%), 모든 응용 중에서 [[personalized-learning|개인화]] — 공급업체들이 가장 많이 약속하는 혜택 — 를 가장 낮게 평가했습니다(29.4%)([[ai-adoption-readiness-ukraine-education-managers-2026]]).

## 교육에서의 AI에 대한 시사점

- **주제 항목보다 수준 항목을 먼저 읽어라.** 한 구간에서 나온 발견은 다른 구간에 대한 가설이지 전이 가능한 결과가 아닙니다.
- **가장 어린 구간들을 위해서는 과제 난이도가 아니라 지원을 적응시켜라**([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **누가 인식론적 권위(epistemic authority)를 쥐는지를 재규정하지 않고 학교/대학 분기선을 가로질러 도구를 옮기지 마라.** 박사 훈련에서 자율성을 낮추는 의존은 연구 형성의 위험입니다([[ai-mediated-research-agency-formation-2026]]).
- **AI에 활동별로 게이트를 두고, 사생활 보호 의무를 연령에 따라 규모를 늘려라**([[ai-lms-middle-school-longitudinal]], [[data-privacy-ai-african-higher-education-2026]]).
- **그 구간의 매개 어른 — 학부모, 교사, 사서, 또는 지도자 — 을 위해 설계하고, 그들의 준비도를 기관의 준비도와 별도로 측정하라**([[ai-adoption-readiness-ukraine-education-managers-2026]], [[ai-assisted-seminar-learning-information-literacy-2026]]).
- **어떤 구간에 증거가 없을 때는 분명히 말하고, 의도를 성취로 착각하지 마라.** 여러 수준별 연구는 학습이 아니라 태도나 [[self-report-measures|자기보고]] 결과를 보고합니다.

## 흔한 오해

**"구간 라벨은 학습자가 무엇을 할 수 있는지 알려 준다."** 구간과 지식 수준은 상관하지만 같지 않습니다. 2학년 튜터링 시험에서 [[prior-knowledge|사전 지식]]이 사후 검사 수행을 지배했으며(**F(1, 124) = 206.99, p < .001, η²p = .63**), 학년 라벨을 학습자의 실제 사전 지식 옆에서 약한 예측 변수로 만드는 큰 효과였습니다. 구간에 맞추어 설계하면서 구간 내 분포를 무시하는 것은 넓은 분포의 평균에 맞추어 설계하는 것입니다.

**"가르치는 교과가 교육 수준보다 중요하다."** 학교와 대학의 경계가 더 중요합니다. 그 경계를 넘어 달라지는 것은 내용이 아니라 자기 조절의 역량, 평가 계약의 성격, 학습에 대한 책임 소재이며, 그래서 대학원 세미나에 도움이 되는 도구가 비슷한 내용의 2학년 수업에는 해가 될 수 있습니다.

**"적응적 튜터는 모든 수준에 똑같이 도움이 된다."** 변수를 분리하는 비교는 시사하는 바가 큽니다. 같은 2학년 수학 튜터의 두 버전, 즉 내용, 인터페이스, 피드백, 음성 힌트가 동일하고 **과제 선택이 베이지안 [[knowledge-tracing]] 모형을 따랐는지만 다른** 두 버전이 있었습니다. 적응적 과제 선택은 수준에 민감한 개입이며, 그 이득은 그 수준의 학습자가 적응에 따라 행동할 수 있는지에 달려 있습니다.

**"고등 교육에 집중된 증거는 아래로 일반화된다."** 그렇지 않으며, 문헌의 분포는 편의가 아니라 경고입니다. 증거가 밀집한 곳과 빈약한 곳은 연구 경제의 속성이지 AI가 가장 많이 쓰이는 곳의 속성이 아니므로, 대학 표본에서 끌어낸 K-12에 관한 주장은 가장 중요한 경계를 넘는 외삽입니다.

## 연결된 개념

- [[k-12]]
- [[early-childhood-elementary-ai-education]]
- [[higher-ed]]
- [[adult-learning]]
- [[special-education]]
- [[teacher-education]]
- [[vocational-education]]
- [[learners]]
- [[parents-and-families]]
- [[differential-effects-across-learner-groups]]

## 연결된 문서

- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — 2학년 수학에서의 적응형 대 비적응형 튜터링(Sibley et al. 2026)
- [[dai-chatbots-problem-posing-primary-2026]] — 초등 과학에서 3학년생과 함께하는 GenAI 챗봇과 문제 제기
- [[chatgpt-music-education-junior-high-2026]] — 가사 학습을 위한 ChatGPT에 대한 초등 고학년 학생들의 태도(Weng & Chiang 2026)
- [[ai-lms-middle-school-longitudinal]] — 중학교를 위해 설계된 AI 통합 LMS, 제안된 종단 연구 포함
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — 중국 중등 교육에서의 생성 AI 학습 패널티(Strömberg et al. 2026)
- [[llm-reliance-types-undergrad]] — 학부 작문가들의 네 가지 LLM 의존 유형(Hossain 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — 공학 학생들을 위한 내장 사서 지원이 있는 AI 지원 세미나 플랫폼
- [[ai-mediated-research-agency-formation-2026]] — 박사 및 박사후 훈련에서의 AI 의존, 자율성, 혁신(Han & Liu 2026)
- [[data-privacy-ai-african-higher-education-2026]] — 아프리카 고등교육에서의 데이터 사생활 보호에 관한 이해관계자 견해(Duncan 2026)
- [[ai-adoption-readiness-ukraine-education-managers-2026]] — 우크라이나 전역에 걸친 교육 관리자들의 AI 도입 준비도(Kremen et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — 직업 디자인 학생들을 위한 AI 지원 몰입형 PBL(Jin et al. 2027)
- [[preschool-teachers-ai-behavioral-intention-2026]] — 유아 교육 환경에서 AI 사용 의도에 관한 유아 교사들의 의향
- [[vahedian-children-attitudes-ai-chatbot-2026]] — 연령에 맞춘 AI 챗봇에 대한 아동들의 태도
