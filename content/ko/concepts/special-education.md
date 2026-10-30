---
connected_resources: [teacherserver]
title: 특수 교육
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
translation_of: concepts/special-education
source_updated: "2026-10-26T08:20:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **특수 교육** — 인지적, 신체적, 감각적, 신경발달적 차이를 아우르는 장애 학습자를 위한 교수 설계와 제공을 말합니다. 이 지식베이스의 [[ai-education|교육에서의 인공지능]] [[research-methods-aied|연구]]는 AI 도구가 [[personalized-learning|개인화]], [[scaffolding|적응적 비계]], 접근 가능한 인터페이스를 통해 다양한 학습자의 필요를 어떻게 뒷받침할 수 있는지를 탐구하는 한편, 장애 학습자를 간과하거나 소외시키는 [[ai-technologies|AI 시스템]]의 위험도 함께 검토합니다.

> ⚠️ **특수 교육은 주로 [[k-12]] 용어입니다.** 그것은 미국의 장애인교육법(Individuals with Disabilities Education Act, IDEA)과 초등·중등 학교의 특수교육 서비스를 규율하는 개별화교육프로그램(IEP)의 권리 기반 제도에 뿌리를 두고 있습니다. [[higher-ed|고등 교육]] — 그리고 점점 더 K-12에서도 — 에서 더 흔한 틀은 **[[universal-design-for-learning|보편적 학습 설계]]**(모든 학습자에게 이익이 되는 사전 설계 틀)와 [[accessibility]], [[assistive-technology]]이며, "특수 교육"은 아닙니다. K-12 특수교육 글과 대학 보편적 학습 설계 글은 겹치지만 서로 다른 맥락에 관한 것이며, 연구 문헌이 양쪽 모두에 걸쳐 있기에 지식베이스는 둘 모두를 유지합니다. 출처가 고등 교육과 장애 학습자를 다룰 때는, 보통 특수교육보다는 [[universal-design-for-learning]], [[accessibility]], [[inclusive-learning]]에 연결하는 편이 낫습니다.

## 생각해 볼 질문들

- 이 페이지는 '특수 교육'이 주로 IDEA와 IEP에 뿌리를 둔 K-12의 권리 기반 용어인 반면, 고등 교육에서는 보편적 학습 설계와 접근성을 더 자주 말한다고 강조합니다. 이 맥락들이 왜 다르다고 생각하시며, 그 차이가 무엇을 드러낸다고 보십니까?
- 다양한 필요를 지닌 학습자에게 딱 들어맞는 것처럼 보이는 AI의 개인화 약속. 하지만 시스템이 '개별 인지 프로파일'에 적응할 수 있다면, 장애에 대한 모형이 너무 조잡하거나 아예 결여되어 있을 때 무엇이 잘못될 수 있을까요?
- 연구에는 특정 장애 프로파일(예: 난독증 학습자, 농인 및 난청 학습자)을 위해 설계된 AI 도구가 포함되어 있습니다. 좁은 프로파일을 염두에 두고 설계하는 것 대 처음부터 모든 학습자를 위해 보편적으로 설계하는 것에서 어떤 위험이 보십니까?
- '평균적' 학습자를 염두에 두고 구축된 AI 시스템이 어떻게 고의가 아니면서도 장애 학습자를 간과하거나 소외시킬 수 있으며, 그것을 막는 일은 누구의 책임입니까?
- AI 도구가 장애 학습자를 진정으로 포함하는 것이지 단지 수용하는 데 그치는 것이라면 어떤 의미가 되겠으며, 그 차이를 실제로 어떻게 알아차리겠습니까?

## 들어가며

특수 교육은 AI의 개인화와 적응 역량이 특별한 약속을 제공하는 영역입니다. 획일적 교수와 달리, [[intelligent-tutoring|AI 튜터]]는 이론적으로 개별 인지 프로파일, 의사소통 필요, 학습 속도에 적응할 수 있습니다. 이 지식베이스의 글들은 특정 장애 프로파일을 위한 AI, 신경다양 학습자의 경험, AI와 장애에 관한 비판적 관점에 걸쳐 있습니다.

**장애 특정 AI 교습**은 AI를 특정 학습자의 필요에 맞춥니다. **[[special-r1-rl-special-education|Special-R1]]**은 다섯 가지 장애 프로파일에 걸쳐 인지적·의사소통적 다양성을 모형화하도록 [[reinforcement-learning|강화 학습]]을 확장하며, 페르소나 인식 프롬프트와 사고 보상(thinking rewards)을 써서 각 학습자에게 맞는 튜터 응답을 형성합니다. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]**는 난독증 학습자가 AI 도구를 어떻게 경험하는지를 분석하여, 문해력 지원에서의 AI 가치와 지속적인 접근성 장벽을 함께 드러냈습니다. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen 등]]**은 [[accessibility|농인 및 난청 학습자]]를 위해 [[llm]] 기반 문항 생성 시스템을 설계하여, 시각적 및 정서적 문항 전략을 도입하고 표면 기반 AI 프롬프트와 수화 기반 제1언어 사이의 불일치를 극복하기 위해 표적 공동체와 함께 문항을 반복적으로 다듬었습니다. **[[embodied-string-learning-blindness-low-vision-musicians]]**는 맹인 및 저시력 음악가들과 함께 비시각 학습 전략을 개발하며, 장애 주도의 [[embodied-learning|체화]] 설계를 중심에 두었습니다. 이것들은 [[inclusive-learning]]과 [[neurodiversity]]에 연결됩니다.

**신경다양 학습자의 경험**은 자폐성과 ADHD 학생을 중심에 둡니다. **[[neurodivergent-computing-students|Zastudil 등]]**은 신경다양 컴퓨팅 학생들에게 구조화된 과제, 작고 일관된 팀, 명시적 역할 정의가 필요하다는 것을 발견했습니다 — 이는 [[collaborative-learning]] 도구가 다루어야 할 설계 요건입니다. **[[adhd-video-segmentation-computing-education]]**은 AI로 분절한 영상이 ADHD 수행 격차를 없앴음을 보여 주었습니다. 둘 모두 [[learning-design]]과 [[universal-design-for-learning]]에 연결됩니다.

**비판적 관점**은 AI가 장애 학습자를 어떻게 소외시킬 수 있는지를 검토합니다. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]**는 AI 시스템이 서구 중심의 훈련 데이터 때문에 장애 중심 지식을 적극적으로 소외시킨다고 주장하며 — [[equity-in-ai-education]]의 인식론적 정의에 관한 우려에 연결됩니다.

**난독증 전반에 걸친 탐지, 지원, 개인화 학습을 위한 AI.** 2026년의 학제 간 [[meta-analysis-systematic-review|체계적 검토]](Dabaghi, D'Urso & Sciarrone, PRISMA 지침, 2018–2024년, n=72)는 AI가 교육에서 난독증 학생을 탐지, 보조 지원, 개인화 학습에 어떻게 뒷받침하는지를 조망하며, 이런 흐름들이 통합되기보다 병렬로 진화하고 있으며, 통합된 교육 이론보다는 기술적 기회에 의해 더 추동된다는 것을 발견합니다. 머신러닝 기반 지원 교육 도구는 다섯 영역(구체적 응용, 참여, 개인화, 추천, 일반적 지원)으로 떨어지지만 기술적 수행과 분류 정확성을 강조하면서 생태학적 타당도와 실제 교실 배치는 간과합니다. 탐지 연구(EEG, 시선 추적, 머신러닝 모형)는 조기 개입을 우선시하고 진단 가능성을 보여 주지만, 종종 특수 장비와 통제된 환경을 요구하여 전형적 학교 환경에서의 확장성과 접근성을 제한합니다. 열린 도전 과제로는 제한된 실험적 검증, 확장성, 민감한 학생 데이터에 관한 [[ethics]]/프라이버시 우려, 제한된 교사 지원과 연수, 언어·문화적 장벽(대부분의 연구가 영어 사용 인구를 대상으로 함)이 있습니다.

**학습장애 학생(SWLDs)을 위한 인지적 오프로딩.** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]] — LD 학생을 위한 AI에 관한 *Learning Disability Quarterly* 특별 시리즈에 실린 개념적 검토 — 는 [[cognitive-offloading]] 렌즈를 통해 SWLDs의 [[generative-ai|GenAI]] 사용을 재틀짓습니다. 이들은 GenAI가 오프로딩 결정이 SWLDs의 인지적·[[motivation|동기적]] 프로파일(집행기능과 작업기억의 어려움, 높아진 인지 부하, 노력 회피적 수행 목표, 낮은 학업적 자기효능감, GenAI에 대한 과장된 기대)과 교수 설계와 어떻게 상호작용하는지에 따라 **보완적 보조수단 또는 지름길**이 될 수 있다고 주장합니다. 읽기와 쓰기에 관해서, GenAI는 접근을 비계로 세울 수 있으나(텍스트 수준 조정, 요약, [[multimodal]] 산출물, 계획, 초안 작성, 수정 피드백) 더 높은 차원의 [[student-engagement|참여]]를 보존하면서도, 과도한 오프로딩은 이 학습자들에게 이미 취약한 이해, 계획, 감시의 과정을 우회할 위험이 있어 "[[metacognition|메타인지적]] 게으름"을 기르고 여러 영역에 걸쳐 문해력의 어려움을 심화시킬 수 있습니다. 이 논문은 **교수적 [[guardrails]]**를 핵심 조절 요인으로 자리매김하며, 전략적 오프로딩을 가르치는 [[teacher-role|교수]], 도구 신뢰를 보정하기 위한 [[ai-literacy]] 구축, [[self-efficacy]]를 쌓기 위한 숙달 경험의 순차적 배열, 대체보다 기술 발달을 우선시하는 IEP 목표와 과제 및 평가를 정렬하는 일을 권고합니다. 이것은 오프로딩의 형평성 차원으로 지식베이스의 특수교육 커버리지를 확장합니다. 접근의 장벽을 낮추는 바로 그 도구가 방호되지 않으면 SWLDs가 가장 필요로 하는 연습을 대신할 수 있습니다.
**AI 생성 개입 내용물은 검토뿐 아니라 생성 이전의 통제를 필요로 합니다.** [[adapted-stories-social-story-intervention-2026|Enkhjargal 등(2026)]]은 실천가들이 공동 설계한 Social Story 도구를 높은 사용성(SUS 86.8)으로 평가하면서도, 생성된 이미지가 일반적으로 서구적이며 행동 추적기가 목표 연계 임상 판단과 어긋난다고 지적했음을 발견했습니다 — 그들이 생성 이전에 설정했을 제약들입니다.

[[vlm-task-planning-humanoid-robot-autism-education-2026|Kudláčková (2026)]]는 대화가 아니라 자료에서 출발합니다. 시각-언어 모형이 Shoebox Tasks 사진을 읽고(목표가 사물에 드러나도록 설계된 과제), 그것을 Nao 휴머노이드가 수행하거나 시연할 계획으로 바꾸며, 여섯 과제에 걸친 계획 정확도를 보고하고 학습자 데이터는 쓰지 않습니다.
- **도전적 행동은 튜터 벤치마크가 멈추는 지점입니다.** 특수교육 및 교육심리 문헌에서 뽑은 923개 사례 근거 대화에서 11개 모형 중 최선의 모형이 개방형 사례의 55.8%, 장기 계획의 43.3%에서 문서화된 개입을 충족했습니다([[tutor-case-bench-challenging-behaviors-2026|Park et al. (2026)]]).

## 특수교육 교수자를 위한 함의

- **표적 학습자와 공동체와 함께 AI를 공동 설계하십시오.** [[llm-question-generation-deaf-hard-of-hearing-2026|농인/난청 학습자를 위한 문항 생성]]은 표면 기반 프롬프트와 수화 기반 제1언어 사이의 간극을 메우기 위해 공동체와 함께 AI를 반복적으로 다듬는 가치를 보여 줍니다 — AI가 학습자에게 맞는다고 가정하지 말고 학습자와 그 공동체를 설계에 참여시키십시오.
- **AI를 일반적 접근성이 아니라 특정 장애 프로파일에 맞추십시오.** [[special-r1-rl-special-education|Special-R1]]은 장애 프로파일에 걸쳐 인지적·의사소통적 다양성을 모형화하고, [[dyslexlens-dyslexic-learners-ai|DysLexLens]]는 난독증 학습자가 마주하는 문해력 가치와 지속적인 접근성 장벽을 모두 기록합니다 — 각 학습자의 프로파일에 정렬된 도구를 선택하고 충족되지 않은 장벽에 경계를 늦추지 마십시오.
- **신경다양 학습자를 위한 협력을 구조화하십시오.** [[neurodivergent-computing-students|신경다양 컴퓨팅 학생]]은 구조화된 과제, 작고 일관된 팀, 명시적 역할을 필요로 합니다 — 이 설계 요건을 AI 매개 협력 활동에 모두 적용하십시오.
- **AI를 격차를 좁히는 데(넓히는 데가 아니라) 사용하십시오.** [[adhd-video-segmentation-computing-education|AI로 분절한 영상]]은 ADHD 수행 격차를 없앴습니다 — 증거가 결과를 평준화한다고 보여 주는 곳에 적응적 AI를 배치하고, 단지 자동화만 하는 곳에는 배치하지 마십시오.
- **장애 주도의 체화 설계를 중심에 두십시오.** [[embodied-string-learning-blindness-low-vision-musicians|맹인/저시력 음악가]] 연구는 비시각적이고 장애 주도인 전략이 기본 시각 인터페이스를 능가함을 보여 줍니다 — 장애 학습자의 전문성으로 AI를 함께 구축하고 적응시키십시오.
- **인식론적 소외를 경계하십시오.** [[genai-minoritized-knowledges-disability|비판적 관점]]은 서구 중심 훈련 데이터가 장애 중심 지식을 소외시킬 수 있음을 경고합니다 — [[equity-in-ai-education]]와 나란히 AI 내용물과 도구를 인식론적 정의를 위해 감사하십시오.

## 흔한 오해

- **"사용성 평정은 보조 도구를 검증합니다."** 실천가들은 공동 설계한 Social Story 도구를 **매우 사용성이 높다고(SUS 86.8)** 평정하면서도 그 **이미지가 일반적으로 서구적**이며 **행동 추적기가 목표 연계 임상 판단과 어긋난다**고 말했습니다. 높은 사용성은 실질적 결함과 공존했으므로, SUS 점수는 적합성에 대한 보증이 아닙니다.
- **"일반적 벤치마크는 튜터가 특수교육 사례를 어떻게 다루는지 알려 줍니다."** 특수교육 및 교육심리 문헌에서 뽑은 **923개 사례 근거 대화**에서 **11개 모형 중 최선의 모형**이 문서화된 기준을 충족했으며, **도전적 행동은 튜터 벤치마크가 멈추는 지점**입니다. 표준 평가는 실천가들이 가장 도움이 필요한 사례에 도달하지 못합니다.
- **"신경다양 학습자에게는 설계 요건이 아니라 수용 조치가 필요합니다."** [[neurodivergent-computing-students|Zastudil 등]]은 신경다양 컴퓨팅 학생들에게 **구조화된 과제, 작고 일관된 팀, 명시적 역할 정의**가 필요함을 발견했습니다. 진단 후에 부여되는 개별 조정이 아니라 모두에게 이익이 되는 일반적 설계 요건입니다.

## 연결된 개념

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## 연결된 문서
- [[seung-basham-cognitive-offloading-swld-2026]] — 학습장애 학생을 위한 GenAI 인지적 오프로딩
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 농인 및 난청 학습자를 위한 LLM 기반 문항 생성
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 생성형 AI, 가상 현실, 그리고 그 너머: 고등 교육의 신경다양 학생을 위한 디지털 보조 기술에 관한 범위 검토
- [[adapted-stories-social-story-intervention-2026]] — 특수 교육을 위한 AI 보조 Social Story 개입: AdaptED Stories의 설계
- [[vlm-task-planning-humanoid-robot-autism-education-2026]] — 시각-언어 모형이 Nao 로봇을 위해 Shoebox Tasks를 계획합니다(Kudláčková 2026)
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench: 도전적 행동을 보이는 학생에 대한 LLM 튜터 평가(Park 외 2026)
