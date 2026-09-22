---
title: 교육에서의 인공지능
created: "2026-09-22T14:35:21-04:00"
updated: "2026-09-22T14:35:21-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty developers, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]
confidence: high
institutions: [educational-policy-ai]
translation_of: concepts/ai-education
source_updated: "2026-09-22T03:10:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

# 교육에서의 인공지능

> **교육에서의 인공지능(AIED)**: 인공지능을 교수와 학습에 적용하고 그 설계, 활용, 평가, 결과를 연구하는 광범위한 학제 간 분야입니다. 지식베이스의 상위 개념으로서 교육에서의 인공지능은 **교육을 위한 AI**(AI로 교수와 평가를 개선하는 것)와 **AI에 관한 교육**(AI 리터러시와 비판적 이해를 기르는 것)을 아우릅니다. 이 분야는 교수 공학, [[learning-sciences|학습과학]](학습자가 실제로 달라졌는지를 묻는 경험적 연구 분야로, 도구가 성과를 냈는지만 묻는 것과는 다릅니다), 컴퓨터 과학, [[educational-policy-ai|교육 정책]], [[ethics|윤리]], [[equity-in-ai-education|형평성]]이 교차하는 지점에 있습니다. 이 페이지는 이 분야에 대한 소개이자 지식베이스가 다루는 모든 개념으로 가는 지도입니다.

## 생각해 볼 질문들

- '교육에서의 인공지능'은 두 방향을 아우릅니다. 교육을 위한 AI(교수를 개선하기 위해 AI를 활용하는 것)와 AI에 관한 교육(리터러시와 비판적 이해를 기르는 것)입니다. 어느 쪽이 더 익숙하시며, 어느 쪽을 자주 놓치시나요?
- 이 분야의 역사는 통제와 학습자 주체성 사이의 되풀이되는 긴장으로 서술됩니다. AI 도구가 도입되는 모습을 지켜보면서, 같은 긴장이 오늘날 어디에서 나타난다고 보시나요?
- 교육에서의 인공지능은 기술, 학습과학, 정책, 윤리, 형평성이 만나는 지점에 있습니다. AI 도구를 평가하실 때 자연스럽게 적용하시는 관점은 어느 것이며, 잊기 쉬운 것은 어느 것인가요?
- 이 지식베이스는 이 분야를 교수법, 학습 이론, 기술, 전공 분야, 평가, 피드백, 이해관계자, 거버넌스라는 갈래로 구성합니다. 직접 AI를 활용하시는 방식을 정리해 본다면, 어느 갈래에 속하게 되나요?
- AIED는 학생들이 AI를 비판적으로 사용하도록 가르치는 것 자체를 목표로 삼습니다. 여러분의 맥락에서 AI는 가르쳐야 할 교과로 더 다루어지나요, 사용할 도구로 더 다루어지나요? 그리고 그 균형은 학습자가 실제로 필요로 하는 것을 반영하나요?
- 학생들은 AI에 대해 배우는 것만이 아니라 AI를 비판적으로 사용함으로써 AI 리터러시를 익힐 수 있습니다. 직접 해 보는 비판적 사용은 수동적인 강의가 줄 수 없는 이해를 어떻게 길러 줄 수 있을까요?

## 들어가며

교육에서의 인공지능은 다른 모든 개념 페이지가 함께 정의하는 상위 개념입니다. 이 지식베이스는 이 분야를 아래의 주요 갈래로 구성하며, 각 갈래는 해당 개념 페이지로 연결됩니다.

[[history-of-aied|역사적]] 관점을 제시한 중요한 연구인 **[[mishra-control-vs-agency-history-2025|Mishra 외]]**는 AIED를 사이버네틱스와 1956년 다트머스 회의에서 시작해 [[intelligent-tutoring|인지적 튜터]]와 Papert의 [[constructivist|구성주의]]를 거쳐 오늘에 이르기까지 추적하며, 오늘날의 [[generative-ai|생성형 AI]] 논쟁이 이 분야의 근본적인 통제 대 [[agency|주체성]] 긴장을 다시 연기한다고 주장합니다.

## 지식베이스의 구성: 상위 페이지들

이 지식베이스의 개념 커버리지는 관련 개념들을 탐색 가능한 갈래로 묶는 여러 **상위 페이지**를 축으로 삼습니다. 이 분야를 살펴보는 좋은 출발점이 됩니다.

- **교육에서의 인공지능**: 이 페이지로, 분야의 개요이자 모든 내용으로 가는 지도입니다.
- **[[ai-literacy|AI 리터러시]]**: AI를 이해하고 사용하고 비판적으로 평가하기 위한 상위 개념으로, [[prompt-engineering|프롬프트 엔지니어링]], [[critical-thinking|비판적 사고]], [[ethics|AI 윤리]], [[reducing-ai-misuse|책임 있는 사용]]을 아우릅니다. 그와 나란히 [[human-ai-collaboration|인간-AI 협업]]과 [[agentic-ai|에이전트형 AI]]가 사람과 AI가 함께 일하는 방식을 규정합니다.
- **[[pedagogy|교수법과 교수 전략]]**: 교수가 이루어지는 방식에 대한 상위 개념으로, AI가 그 안에서 작동하는 교수 방법과 전략([[active-learning|능동적 학습]], [[collaborative-learning|협력 학습]], [[project-based-learning|프로젝트 기반 학습]], [[problem-based-learning|문제 기반 학습]], [[experiential-learning|경험 학습]], [[game-based-learning|게임 기반 학습]], [[socratic-method|소크라테스식 문답법]], [[scaffolding|스캐폴딩]] 등)을 다루며, [[online-teaching-and-learning|온라인 교수와 학습]]이라는 별도의 맥락도 포함합니다.
- **[[learning-theories|학습 이론]]**: 학습이 이루어지는 방식에 대한 상위 개념으로, AI의 설계와 평가를 형성하는 이론적 틀([[behaviorism|행동주의]], [[cognitive-psychology|인지주의]], [[constructivist|구성주의]], [[sociocultural-learning|사회문화적 접근]], 인지적 접근, [[motivation|동기적 접근]])을 다룹니다.
- **[[ai-technologies|기술]]**: 기술적 층위에 대한 상위 개념으로, AIED를 가능하게 하는 AI 시스템([[llm|LLM]], [[generative-ai|생성형 AI]], [[multimodal|멀티모달]], [[educational-robotics|로보틱스]])과 기법([[rag|RAG]], [[prompt-engineering|프롬프트 엔지니어링]], [[reinforcement-learning|강화 학습]], [[pedagogical-llm-training|모델 훈련]], [[agentic-ai|에이전트형 오케스트레이션]])을 다룹니다. 학습자 모델링 계열, 즉 [[knowledge-tracing|지식 추적]], [[cognitive-diagnosis|인지적 진단]], [[simulating-students|학생 시뮬레이션]]과 이를 활용하는 시스템([[intelligent-tutoring|지능형 튜터링]], [[adaptive-learning|적응형 학습]], [[personalized-learning|개인화 학습]])은 이 기술 갈래 안의 [[student-modeling|학습자 모델링과 적응형 교수]] 상위 개념 아래에 묶입니다.
- **[[discipline-specific-aied|전공 분야에서의 AI]]**: AI가 여러 교과 영역에 어떻게 적용되는지에 대한 상위 개념입니다([[math-education|수학]], [[physics-education|물리]], [[language-learning|언어 학습]], [[cs-education|컴퓨터 과학]], [[writing-education|글쓰기]], [[stem-education|STEM]], [[engineering-education|공학]], [[business-education|경영]], [[teacher-education|교사 교육]], [[medical-education|보건 전문직]] 등). 나아가 학문적 교과를 넘어 정답 여부가 아니라 실제 수행을 평가하는 전문·응용 갈래([[nursing-education|간호]], [[information-technology|정보 기술]], [[vocational-education|직업 교육과 훈련]], [[design-education|디자인 교육]])와 교육 수준([[k-12|K-12]], [[higher-ed|고등 교육]], [[adult-learning|성인 학습]])도 포함합니다.
- **[[assessment|평가]]**([[formative-assessment|형성평가]], [[summative-assessment|총괄평가]], [[authentic-assessment|실제적 평가]], [[automated-assessment|자동화 평가]] 갈래 포함): AI가 학습자를 평가하는 방식과 함께 평가의 타당성과 정직성을 재편하는 방식에 대한 상위 개념입니다.
- **[[feedback|피드백]]**: 피드백이 생성되고 전달되고 활용되는 방식에 대한 상위 개념으로, 피드백 루프, [[ai-feedback-quality|피드백 품질]], [[feedback-literacy|피드백 리터러시]]와 그 평가 맥락([[formative-assessment|형성평가]], [[peer-assessment|동료 평가]], [[automated-assessment|자동화 평가]])을 다룹니다.
- **[[stakeholders|AI 교육의 이해관계자]]**: 행위자가 누구인지에 대한 상위 개념으로, 학습자, [[teacher-role|교수자]], [[learning-design|학습 설계자]], [[administrator|관리자]], [[educational-policy-ai|정책 입안자]]를 다룹니다.
- **[[ai-ed-evaluation|교육 분야 AI 개입 평가]]**와 **[[research-methods-aied|AIED 연구 방법]]**: AI가 효과가 있는지 우리가 어떻게 아는지에 대한 상위 개념으로, 효과 연구, [[benchmark|벤치마크]], [[rct|무작위 대조 시험]], [[meta-analysis-systematic-review|메타분석]], 그리고 핵심 결과 지표인 [[learning-gains|학습 성과]]를 다룹니다. 독자께서는 [[limitations-in-aied-research|이 근거가 전반적으로 지닌 한계]]도 함께 저울질하시기 바랍니다.
- **[[governance|AI 거버넌스]]**, **[[educational-policy-ai|교육 AI 정책]]**, **[[equity-in-ai-education|형평성]]**: 제도, 규제, 공정성 층위에 대한 상위 개념입니다([[regulation|규제]]와 [[privacy|프라이버시]]도 참고하십시오).

이 상위 페이지들은 아래 각 절에서 연결되며, 아래의 각 갈래는 그 상위 페이지와 그에 속한 개념을 모두 밝힙니다.

## 교육에서의 인공지능의 두 가지 방향

교육에서의 인공지능 연구는 서로 맞물린 두 방향을 아우릅니다.

- **교육을 위한 AI**: AI 시스템으로 교수, 학습, 평가, 행정을 개선하는 것입니다. [[intelligent-tutoring|AI 튜터링]], [[adaptive-learning|적응형 학습]], [[personalized-learning|개인화 학습]], [[automated-essay-scoring|자동 에세이 채점]], [[automated-question-generation|자동 문항 생성]], [[automated-assessment|자동화 평가]], [[formative-assessment|형성평가]], [[learning-analytics|학습 분석]], [[feedback|피드백 루프]]가 여기에 포함됩니다.
- **AI에 관한 교육**: 학습자와 교육자가 AI를 이해하고 사용하고 비판적으로 평가하도록 가르치는 것입니다. 핵심은 [[ai-literacy|AI 리터러시]]이며, [[prompt-engineering|프롬프트 엔지니어링]], [[critical-thinking|비판적 사고]], [[ethics|AI 윤리]], [[governance|거버넌스 교육]], 디지털 리터러시, [[reducing-ai-misuse|책임 있는 사용]]이 이를 뒷받침합니다.

이 두 방향은 서로 분리되어 있지 않습니다. [[ai-literacy|AI를 잘 사용하는 것]]은 AI를 이해하는 것을 전제로 하고, AI에 관한 교육은 AI를 사용해 볼 때 더 풍부해집니다. 이러한 [[human-ai-collaboration|인간-AI 협업]]이 중심 주제입니다.

## 교육에서의 인공지능의 기초

이 분야의 교차적이고 기초적인 개념들은 지식베이스 전체의 토대가 되며 사이드바에서 가장 먼저 나타납니다. 이들은 모든 독자가 먼저 시작해야 할 개념을 모은 **핵심** 묶음으로 시작합니다. 상위 개념 자체, [[misconceptions|AI에 관한 오해]], [[ai-literacy|AI 리터러시]], [[agentic-ai|에이전트형 AI]], [[cognitive-offloading|인지적 오프로딩]], [[framing-ai-use-for-students|학생에게 AI 사용의 기준을 제시하기]], [[reducing-ai-misuse|오용 줄이기]], [[academic-integrity|학문적 정직성]], [[teacher-role|교수]], [[learning-design|학습 설계]], [[educational-development|교육 개발]]입니다. 이어서 **분야** 갈래는 [[history-of-aied|이 분야의 역사]], [[limitations-in-aied-research|근거 기반이 전반적으로 지닌 한계]], [[philosophy-of-ai-in-education|이 분야의 철학]], [[theories-and-frameworks|이론과 프레임워크]] 지도, [[theory-development-aied|이론 개발]]을 다룹니다. 교차 주제인 [[human-ai-collaboration|인간-AI 협업]], [[agency|학습자 주체성]], [[learner-identity|학습자 정체성]], [[design-thinking|디자인 사고]], [[curriculum-design|교육과정 설계]], [[critical-thinking|비판적 사고]], [[computational-thinking|컴퓨팅 사고]]는 모든 갈래를 가로지릅니다. 사람들이 AI에 대해 품는 부정확한 심적 모형이 [[ai-misuse-learning-harm|오용]]과 충분히 보정되지 않은 [[trust-calibration|신뢰]]보다 앞서기 때문입니다.

## 학습과 교수

AI가 교수와 학습을 어떻게 지원하는가는 이 분야의 핵심입니다. 주요 개념은 다음과 같습니다.

- **핵심 교수법:** [[pedagogy|교수법과 교수 전략]]은 지식베이스의 교수 방법 커버리지를 총괄하는 상위 개념이며, [[active-learning|능동적 학습]], [[collaborative-learning|협력 학습]], [[group-work|모둠 활동]], [[project-based-learning|프로젝트 기반 학습]], [[problem-based-learning|문제 기반 학습]], [[productive-failure|생산적 실패]], [[inquiry-based-learning|탐구 기반 학습]], [[experiential-learning|경험 학습]], [[game-based-learning|게임 기반 학습]], [[learning-by-teaching|가르치며 배우기]], [[scaffolding|스캐폴딩]], [[socratic-method|소크라테스식 문답법]], [[critical-pedagogy|비판적 교수법]], [[pedagogical-partnerships|교수 파트너십]], [[storytelling-in-education|스토리텔링]], [[learning-design|학습 설계]], [[online-teaching-and-learning|온라인 교수와 학습]], [[video-education|교육에서의 영상]]이 함께합니다.
- **학습 이론과 과정:** [[learning-theories|학습 이론]] 상위 개념([[behaviorism|행동주의]], [[cognitive-psychology|인지주의]], [[constructivist|구성주의]], [[sociocultural-learning|사회문화적 접근]], [[distributed-cognition|분산 인지]], [[situated-learning|상황 학습]], [[embodied-learning|체화 학습]], [[community-of-inquiry|탐구 공동체]])이 [[self-regulated-learning|자기조절 학습]], [[self-determination-theory|자기결정이론]], [[motivation|동기]], [[self-efficacy|자기효능감]], [[self-directed-learning|자기주도 학습]], [[metacognition|메타인지]], [[desirable-difficulties|바람직한 어려움]], [[transfer-of-learning|학습 전이]], [[prior-knowledge|선행 지식]], [[icap-framework|ICAP 인지적 참여]], [[refutation-text|반박 텍스트]], [[retrieval-spacing-interleaving|인출, 간격, 교차 학습]], [[activity-theory-aied|활동 이론]]처럼 학습자에게 향하는 과정과 나란히 자리합니다.
- **학습자 참여와 경험:** [[student-engagement|학생 참여]], [[help-seeking|도움 요청]], [[social-emotional-learning|사회정서 학습]], [[well-being|웰빙]], [[creativity|창의성]], [[problem-solving|문제 해결]], [[mastery-learning|완전 학습]], [[student-ai-interaction|학생-AI 상호작용]]은 학습자가 실제로 AI를 어떻게 마주하고 영향을 받는지를 규정합니다.

## 기술과 기법

[[ai-technologies|기술]] 페이지는 기술적 층위를 총괄하는 상위 개념입니다.

- **모델과 기법:** [[generative-ai|생성형 AI]], [[llm|대규모 언어 모델]], [[rag|검색 증강 생성]], [[multimodal|멀티모달 모델]], [[educational-nlp|교육 분야 NLP]], [[reinforcement-learning|강화 학습]], [[knowledge-graph|지식 그래프]], [[educational-robotics|교육용 로봇]], [[conversational-ai|대화형 AI]], [[simulation|시뮬레이션]], [[pedagogical-llm-training|교수를 위한 LLM 훈련]]입니다. 그 바탕이 되는 방법도 중요합니다. [[machine-learning|머신러닝]]은 이런 시스템이 만들어지는 곳이고, [[speech-and-voice-technologies|음성 및 음성 기술]]은 구두 튜터링과 언어 연습을 가능하게 하며, [[visualization|시각화]]는 학습자와 교수자를 위한 대시보드와 시각적 분석을 다루고, [[virtual-and-augmented-reality|가상 및 증강 현실]]은 이제 모델이 시각적 층위를 생성할 수 있는 몰입형 실습을 담습니다. 더 새로운 상호작용 방식도 여기에 속합니다. 가장 두드러지는 것은 [[vibe-coding|바이브 코딩]]으로, 사용자가 LLM에 프롬프트를 주어 프로그램을 지정하고 소스를 읽거나 편집하는 대신 결과 동작을 판단하는 자연어 기반 작업 흐름입니다. 이는 [[cs-education|프로그래밍]]을 표현하고 검증하는 행위로 재규정하고 [[teacher-role|최종 사용자]]가 자신만의 도구를 만드는 문턱을 낮춥니다. [[samr-model|SAMR]]과 같은 통합 심도 프레임워크와 [[technology-acceptance-model|TAM]]과 같은 수용 이론은 AI가 얼마나 깊이 받아들여지고 과제를 얼마나 바꾸는지를 분류합니다.
- **학습자 모델링과 적응형 시스템:** 학습자를 표상하고 그에 적응하는 기술 시스템은 [[student-modeling|학습자 모델링과 적응형 교수]] 상위 개념 아래에 묶입니다. [[knowledge-tracing|지식 추적]], [[cognitive-diagnosis|인지적 진단]], [[simulating-students|학생 시뮬레이션]], [[intelligent-tutoring|지능형 튜터링]], [[adaptive-learning|적응형 학습]], [[personalized-learning|개인화 학습]], [[recommender-systems-and-learning-paths|추천 시스템과 학습 경로]], [[pedagogical-agent|교수 에이전트]], [[affective-tutoring|정서적 튜터링]], [[affective-computing|정서 컴퓨팅]], [[human-in-the-loop-ai|인간 참여형 AI]], [[learning-analytics|학습 분석]]입니다. 이들은 기술적 층위에 속하는데, 이들이 구현하는 교수법과는 구별되는 AI 시스템 자체이기 때문입니다.

## 전공 분야에서의 AI

AI는 다양한 전공 분야와 교육 수준에 걸쳐 적용됩니다. 지식베이스의 [[discipline-specific-aied|전공 분야에서의 AIED 개요]]는 교과 영역 커버리지를 정리합니다. 여기에는 가르치는 교과는 아니지만 학습 자체를 연구하고 교과 내용을 여러 변수 중 하나로 취급하는 교차적 연구 분야인 [[learning-sciences|학습과학]]도 함께합니다.

- **교과 영역:** [[math-education|수학]], [[physics-education|물리]], [[chemistry-education|화학]], [[biology-education|생물]], [[cs-education|컴퓨터 과학]], [[engineering-education|공학]], [[stem-education|STEM]], [[writing-education|글쓰기]], [[language-learning|언어 학습]], [[english-education|영어 교육(EAP/EFL/ESL)]], [[science-education|과학교육]], [[business-education|경영, 경제, 관리]], [[humanities-education|인문학과 사회과학]], [[arts-design-and-media-education|예술, 디자인, 미디어 교육]], [[medical-education|의학 및 보건 전문직]], [[legal-education|법학 교육]], 그리고 전문·응용 갈래인 [[nursing-education|간호]], [[information-technology|정보 기술]], [[vocational-education|직업 교육과 훈련]], [[design-education|디자인 교육]]입니다.

## 수준과 맥락

같은 AI 도구가 아주 다른 환경을 만납니다. 그래서 지식베이스는 교육 수준과 교수법을 분리합니다. 연구 결과가 어느 한쪽에서 다른 쪽으로 조용히 전이되지 않도록 하기 위해서입니다. [[k-12|K-12 학교]], [[early-childhood-elementary-ai-education|유아 및 초등 교육]], [[higher-ed|고등 교육]], [[adult-learning|성인 학습]], [[vocational-education|직업 교육과 훈련]], [[special-education|특수 교육]], [[teacher-education|교사 교육]]입니다. 수준을 가로지르는 인접 개념으로는 [[universal-design-for-learning|보편적 학습 설계]], [[neurodiversity|신경다양성]], [[multilingual-learning|다언어 학습]], [[social-emotional-learning|사회정서 학습]]이 있습니다.

## 평가와 측정

AI는 학습자를 평가하는 방식과 AI 시스템 자체를 평가하는 방식을 모두 바꿉니다.

- **평가와 피드백:** [[assessment|평가]], [[formative-assessment|형성평가]], [[summative-assessment|총괄평가]], [[authentic-assessment|실제적 평가]], [[eportfolio|전자 포트폴리오]], [[feedback|피드백]]과 [[feedback-literacy|피드백 리터러시]], [[ai-feedback-quality|AI 피드백 품질]], [[peer-assessment|동료 평가]], [[automated-assessment|자동화 평가]], [[automated-essay-scoring|자동 에세이 채점]], [[automated-question-generation|자동 문항 생성]]입니다. 모델이 이제 요구만 하면 그럴듯한 완성본을 만들어 낼 수 있기 때문에, 지식베이스는 학습자 자신에게 남는 역량을 앞세웁니다. 바로 [[evaluative-judgment|평가적 판단]], 즉 자신의 작업과 동료의 작업, AI 산출물의 품질을 근거 있는 기준에 비추어 헤아리는 능력입니다. 이는 여러 피드백 및 실제적 평가 연구가 수렴하는 구성 개념입니다. 다기관 실험에서 혼합 피드백 조건이 AI의 직접 피드백보다 더 나은 성과를 냈다는 결과, AI 형성 피드백의 지속가능성 격차, 그리고 산출물만이 아니라 학생이 내리는 결정을 평가하는 실천적 전환이 모두 이 지점을 가리킵니다. 또한 AI 시대의 재설계가 [[ai-detection|탐지]]에서 검증을 견뎌 내는 과제로 옮겨 가는 핵심 이유이기도 합니다. [[group-work|모둠 활동]] 역시 과정과 산출물 양쪽으로 평가되는데, 이때 팀은 누구의, 어떤 종류의 AI 활용이 용인되는지를 협상해야 합니다.
- **측정과 타당성:** [[assessment-validity|평가 타당성]], [[psychometrically-aware-ai|심리측정을 고려한 AI]], [[educational-measurement|교육 측정]], [[item-response-theory|문항반응이론]], [[self-report-measures|자기보고 측정]](이 근거의 상당 부분을 떠받치는 도구이자 되풀이되는 한계), [[ai-detection|AI 탐지]], [[remote-proctoring|원격 감독]], [[academic-integrity|학문적 정직성]]입니다.

## 연구 방법과 검증

AI가 효과가 있는지 우리가 어떻게 아는가는 그 자체로 하나의 갈래이며, 지식베이스도 그렇게 다룹니다.

- **연구 방법:** 상위 개념은 [[research-methods-aied|AIED 연구 방법]]이며, [[qualitative-research|질적]], [[quantitative-research|양적]], [[mixed-methods-research|혼합 방법]], [[design-based-research|설계 기반]], [[usability-research|사용성]] 접근과 함께 [[rct|무작위 대조 시험]], [[meta-analysis-systematic-review|메타분석과 체계적 문헌고찰]], [[network-analysis|네트워크 분석]]이 있습니다.
- **AI 시스템의 검증:** 시스템의 역량을 판단하기 위한 [[ai-ed-evaluation|교육 분야 AI 개입 평가]]와 [[benchmark|벤치마크]]가 있으며, 중요한 결과는 [[learning-gains|학습 성과]]입니다. 이 근거의 [[limitations-in-aied-research|교차적 한계]]와 [[interpreting-and-applying-aied-research|단일 연구를 읽는 방법]]이 경계의 역할을 합니다.

## 사람

교육에서의 인공지능은 모든 이해관계자의 역할을 바꿉니다. 지식베이스의 [[stakeholders|AI 교육의 이해관계자]] 페이지가 이 모두를 총괄하는 상위 개념입니다.

- **학습자:** [[student-experience|학생 경험]], [[career-development-and-readiness|진로 개발과 준비]], [[anxiety-and-stress|AI 불안과 스트레스]]가 학생이 AI를 마주하는 방식을 규정합니다.
- **가족과 지역사회:** [[parents-and-families|학부모와 가족]]은 학교가 AI에 관해 가장 자주 이야기를 건네는 대상이면서, 그 지침을 뒷받침하는 연구가 가장 적은 대상입니다. 그래서 이들의 우려는 이해관계자 구도 바깥이 아니라 그 안에 속합니다.
- **교수자와 교수 프레임워크:** [[teacher-ai-competency|교수자의 AI 역량]], [[tpack|기술적 교수 내용 지식(TPACK)]], [[samr-model|SAMR]], [[educational-development|교육 개발]]이 교육자의 준비와 지원을 다룹니다.
- **개발자:** [[educational-technology-developers|교육 기술 개발자]]는 모델의 역량을 기관이 조달할 수 있는 무언가로 바꾸는 제품 설계자, 소프트웨어 개발자, 학습 엔지니어, 분석 설계자입니다. 이들은 위의 실무자나 관리자와는 다른 독자층이며, 자신의 도구를 도입하는 기관 바깥에 있습니다. 그래서 기본값 설정, 공동 설계, 자금 지원 종료 후의 유지보수가 이 지식베이스에서 상업적 문제가 아니라 교수법적 문제로 등장합니다.

## 기관과 정책

제도적 층위는 AI 관련 결정이 실제로 내려지고 정당화되는 곳입니다. [[administrator|관리자]]와 기관 리더, [[educational-policy-ai|교육 AI 정책]], [[governance|AI 거버넌스]], 도입을 정착시키는 작업인 [[change-management|변화 관리]], [[regulation|AI 규제]], 그리고 [[technology-acceptance-model|기술 수용]], [[open-source|오픈 소스]], [[edtech-platform|에드테크 플랫폼]]에서 이어지는 조달과 플랫폼 문제가 여기에 속하며, [[lifelong-learning|전문 및 평생 학습]]과 [[professional-training|전문 훈련]]도 함께합니다.

## 형평성, 윤리, 책임 있는 사용

공정성, 접근성, 책임은 교육에서의 인공지능의 핵심입니다.

- **형평성과 접근:** [[equity-in-ai-education|형평성]], [[differential-effects-across-learner-groups|학습자 집단 간 차별적 효과]](연구 결과가 누구에게 성립하는가라는 질문), [[digital-divide|디지털 격차]], [[bias-mitigation|편향 완화]], [[culturally-relevant-pedagogy|문화적으로 적합한 교수법]], [[multilingual-learning|다언어 학습]], [[inclusive-learning|포용적 학습]], [[accessibility|접근성]], [[assistive-technology|보조 기술]], [[neurodiversity|신경다양성]], [[universal-design-for-learning|보편적 학습 설계]], [[global-south|글로벌 사우스]] 연구입니다.
- **윤리와 책임:** [[ethics|AI 윤리]], [[ai-misuse-learning-harm|AI 오용과 학습 피해]], [[legal-issues-and-risks|법적 문제와 위험]], [[ai-use-disclosure|AI 사용 공개]], [[guardrails|가드레일]], [[privacy|프라이버시]], [[hallucination-risk|환각 위험]], [[ai-sycophancy|AI 아부]], [[trust|신뢰]], [[trust-calibration|신뢰 보정]], [[reducing-ai-misuse|오용 줄이기]], [[framing-ai-use-for-students|학생에게 AI 사용의 기준을 제시하기]], [[pedagogical-safety|교수법적 안전]], [[sustainability|지속가능성]], [[cognitive-offloading|인지적 오프로딩]]입니다.

이 분야의 윤리 문헌을 다룬 [[meta-analysis-systematic-review|체계적 고찰]]([[agarwal-ethical-values-norms-aied-2026|Agarwal 외 2026]], 논문 25편)은 AIED 윤리를 여섯 가지 주요 윤리적 가치로 정리합니다. 차별 금지, 데이터 관리, 인간 감독, 선의, 설명 가능성, 교육적 적합성입니다. 그리고 윤리적 규범을 이해관계자별·가치별 행렬로 대응시킵니다. 이 고찰은 윤리 문헌에서 최종 사용자가 대체로 수동적이며 학생의 목소리는 사실상 부재하다고 지적하고, 윤리를 AIED 설계에 통합할 것과 AIED 윤리의 교육적(교수법적) 차원에 더 집중할 것을 촉구합니다.

## 새롭게 부상하는 주제와 교차 주제

여러 주제가 이 분야를 가로지릅니다.

- **신뢰와 비판적 사용:** [[trust|신뢰]], [[trust-calibration|신뢰 보정]], [[ai-sycophancy|AI 아부]], [[critical-thinking|비판적 사고]], [[cognitive-offloading|인지적 오프로딩]], [[critical-pedagogy|비판적 교수법]], [[reducing-ai-misuse|AI 오용 줄이기]]입니다([[framing-ai-use-for-students|학생에게 AI 사용의 기준을 제시하기]]도 참고하십시오). 학습자와 교사가 AI를 어떻게 받아들이고 의존할지 결정하는 방식은 [[technology-acceptance-model|기술 수용]] 연구가 모형화하며, [[global-south|글로벌 사우스]] 연구는 수용에서 형평성과 문화적 맥락을 앞세웁니다. 경험적으로는 AI가 자신을 설명하는 방식이 이 신뢰를 형성합니다. [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor 외(2025)]]는 [[explainable-ai|설명 가능한 AI]]가 이해 가능성을 통해 교사의 AI 추천 신뢰를 높인다는 것을 보여 주었으며, 도메인 기반(교육과정 언어) 설명이 데이터 기반 특성 중요도 출력보다 더 신뢰받고 수용되었습니다.
- **분야의 진화:** 지식베이스는 교육에서의 인공지능을 초기의 [[intelligent-tutoring|지능형 튜터링 시스템]]과 [[knowledge-tracing|지식 추적]]에서 LLM 기반 [[intelligent-tutoring|튜터링]], [[pedagogical-agent|에이전트]], [[agentic-ai|에이전트형 AI]]로 이어지는 흐름으로 추적합니다. 도구 중심 연구에서 사회기술적 프레임워크([[design-thinking|디자인 사고]], [[curriculum-design|교육과정 설계]], [[institutional-change-framework-ai|기관 변화]])로, 그리고 직접 작성한 시스템에서 학습자나 [[teacher-role|비프로그래머]]가 자연어로 동작을 지정하는 사용자 주도 작업 흐름([[vibe-coding|바이브 코딩]])으로의 빠른 전환입니다. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian과 Doroudi]]는 AI×Ed 프레임워크로 이 궤적을 형식화하며, 40년에 걸친 학회 논문집의 논문들을 추적해 이 분야가 다양한 구성(AI를 인간 지능과 학습에 대한 유추로 다루는 상당한 연구 포함)에서 응용적이고 데이터 기반이며 연구자 대상인 활용으로 거의 전적으로 옮겨 갔음을 보여 줍니다. 이 전환은 이제 [[llm|LLM]]의 부상으로 일부 되돌려지는 것으로 보입니다(AIED 2024의 "AI-as-analogy" 논문 네 편 중 세 편이 LLM 기반이었습니다).
- **정서, 불안, 진로의 미래:** AI는 정서적 반응을 유발하고 형성합니다. 감독 감시, 정직성에 대한 두려움, 진로 상실을 아우르는 [[anxiety-and-stress|AI 불안과 스트레스]]가 그렇고, [[career-development-and-readiness|진로 개발과 준비]]는 AI로 뒤흔들린 노동 시장을 위해 교육이 학습자를 어떻게 준비시키는지를 다룹니다([[well-being|웰빙]]도 참고하십시오).

## 분야의 성숙

지식베이스는 빠르게 진화하는 분야를 반영합니다. 초기 지능형 튜터링 시스템에서 LLM 기반 튜터링과 에이전트형 AI로, 탐지 중심의 학문적 정직성 도구에서 평가 재설계로, 도구 중심 연구에서 사회기술적이고 형평성에 초점을 둔 프레임워크로 이동하는 중입니다. 근거 기반은 점점 더 엄정한 [[research-methods-aied|연구 방법]], [[ai-ed-evaluation|검증]], [[rct|실험 설계]], 장기적 결과를 강조합니다.

## 연결

교육에서의 인공지능은 지식베이스의 모든 개념과 연결됩니다. 다른 모든 개념 페이지가 함께 정의하는 분야이기 때문입니다. 이 페이지를 지식베이스 전체를 탐색하는 출발점으로 삼으십시오.

## 연결된 개념

- [[ai-literacy]]: AI를 이해하고, 사용하고, 평가하기 위한 상위 개념
- [[human-ai-collaboration]]: 사람과 AI가 함께 일하는 방식에 대한 상위 개념
- [[pedagogy]]: 교수 방법과 전략에 대한 상위 개념
- [[learning-theories]]: 학습이 이루어지는 방식에 대한 상위 개념
- [[ai-technologies]]: 모델, 기법, 시스템에 대한 상위 개념
- [[discipline-specific-aied]]: 여러 교과 영역과 수준을 아우르는 AI에 대한 상위 개념
- [[assessment]]: AI가 학습자를 평가하고 타당성을 재편하는 방식에 대한 상위 개념
- [[feedback]]: 피드백이 생성되고 전달되고 활용되는 방식에 대한 상위 개념
- [[stakeholders]]: 행위자가 누구인지에 대한 상위 개념
- [[learners]]: 학습자 측 개념(경험, 정체성, 주체성, 상호작용, 학습자 모델)에 대한 상위 개념
- [[ai-ed-evaluation]]: AI가 효과가 있는지 우리가 어떻게 아는지에 대한 상위 개념
- [[research-methods-aied]]: 효과 연구 방법에 대한 상위 개념
- [[governance]]: 제도와 규제 층위에 대한 상위 개념
- [[educational-policy-ai]]: 정책, 지침, 실행에 대한 상위 개념
- [[equity-in-ai-education]]: 공정성, 접근성, 포용에 대한 상위 개념
- [[learning-sciences]]: AIED의 바탕이 되는 경험적 분야
- [[ethics]]: 교육에서의 인공지능의 윤리적 차원
- [[misconceptions]]: 사람들이 AI에 대해 품는 심적 모형
- [[interpreting-and-applying-aied-research]]: 연구 한 편을 읽고 그 결과를 실천으로 옮기기
- [[limitations-in-aied-research]]: 근거 기반의 교차적 한계
- [[meta-analysis-systematic-review]]: 리뷰와 메타분석이 확립하는 것
- [[history-of-aied]]: 이 분야가 진화해 온 방식
- [[philosophy-of-ai-in-education]]: 철학적 토대
- [[theories-and-frameworks]]: 이론과 프레임워크 노드의 지도
- [[theory-development-aied]]: 이론을 세우고 수정하기

## 연결된 문서

교육에서의 인공지능을 분야 전체 차원에서 검토한 연구들입니다. 하나의 주제가 아니라 분야 전체나 하나의 교육 수준을 훑는 연구입니다.

- [[typology-generative-ai-tools-education-2026]]: Typology of Generative AI Tools for Education
- [[raza-farooq-aied-review-2020-2025]]: Review of Artificial Intelligence in Education from 2020 to 2025
- [[rismanchian-ai-education-four-decades-aixed-2026]]: The evolution of AI-and-education research across four decades (AIxEd framework)
- [[mishra-control-vs-agency-history-2025]]: Control vs. agency: a history of AI in education
- [[liang-genai-systematic-review-human-ai-2026]]: Generative AI in education: systematic review of 56 empirical studies
- [[genai-higher-education-systematic-review-2026]]: Generative AI in higher education: systematic review of 125 studies
- [[stanford-evidence-base-ai-k12-2026]]: The evidence base on AI in K-12: a review of 818 papers
- [[caruana-pre-university-ai-education-slr-2026]]: Pre-university AI education: systematic literature review of 42 studies
- [[genai-educational-outcomes-meta-analysis]]: Generative AI and educational outcomes: comprehensive meta-analysis
- [[caeai-ai-companions-learning-over-performance-2026]]: a research agenda for AI companions built around learning rather than performance
