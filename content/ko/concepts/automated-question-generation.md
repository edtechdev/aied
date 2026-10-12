---
connected_resources: [teacherserver]
title: 자동 문항 생성
created: "2026-05-08T10:44:35-04:00"
updated: "2026-09-30T11:35:26-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **자동 문항 생성(Automated question generation, AQG)** — 원본 자료나 학습 목표에서 [[assessment|교육 평가]] 문항(객관식, 단답형, 빈칸 채우기, 코딩, 수행 문항)을 자동으로 생성하기 위해, 특히 NLP와 [[llm|대형 언어 모델(LLM)]]을 비롯한 AI를 사용하는 것입니다. AQG는 [[formative-assessment|형성]] 퀴즈, 적응형 연습문제, 연습 문항을 만들어 평가를 대규모로 가능하게 하지만, 품질은 문항 유형마다 크게 달라지며, 환각에 빠지거나 보정이 잘못된 문항을 피하려면 검증이 필요합니다. 이것은 [[automated-assessment]]의 핵심 구성 요소이자 [[adaptive-learning]]과 [[personalized-learning]]의 주요 가능 요인입니다.

## 생각해 볼 질문들

- 자동 문항 생성은 원본 자료에서 평가 문항을 대규모로 만들어냅니다 — 그러나 이 페이지는 품질이 문항 유형마다 크게 달라진다고 경고합니다. 읽기 전에, AI가 가장 신뢰성 있게 생성할 문항 유형을 하나 짐작해 보세요: 객관식, 단답형, 코드 — 그리고 이유는요?
- 핵심 과제는 품질 관리입니다: LLM은 사실과 다른 문항을 생성할 수 있습니다. 한 파이프라인은 생성-검증-정제 루프를 추가해 환각을 62% 줄였습니다. AI에게 자신의 문항을 검증하라고 하는 것이, 단순히 자체 출력에 도장만 찍는 것이 아니라 실제로 문항을 의미 있게 개선하는 이유는 무엇이라고 생각하나요?
- [[research-methods-aied|연구]]에 따르면 생성된 문항은 고차원 결과를 위해 명시적으로 설계되지 않으면 저차원 사고(기억 회상)로 치우칠 수 있습니다. AI로 연습 문항을 만든다면, 그것들이 진정한 이해를 훈련하는지 단순 암기만 훈련하는지 어떻게 알 수 있을까요?
- 난이도 보정이 중요합니다: AI 난이도 추정은 학생 성과와 강하게 상관하지만, 이 페이지는 고위험 오용을 경계합니다. AI가 '적절한 난이도'라고 판단한 문항이 어떤 경우에도 특정 학습자에게 던지기엔 잘못된 질문일 수 있을까요?
- [[accessibility]]을 고려한 생성은 청각장애인 및 난청(Deaf and Hard of Hearing) 학습자에 맞춘 문항을 만들고, 대상 공동체와의 협력 속에서 정제합니다. 이 사례는 문항 생성이 왜 순수한 기술적이거나 내용 중심의 문제로 다룰 수 없는지에 대해 무엇을 시사하나요?

## 도입

자동 문항 생성이 중요한 까닭은 평가 문항을 손으로 만드는 데 비용이 많이 들고, AI가 그것을 빠르게 대규모로 만들어낼 수 있기 때문입니다. 그러나 지식베이스의 연구는 생성된 문항이 정확성, 관련성, 난이도에 대해 검증되어야 하며, 문항 유형(객관식, 단답형, 코드)마다 신뢰성 있게 생성될 수 있는 정도가 다르다는 것을 보여줍니다. 따라서 AQG는 [[generative-ai|생성 AI]], [[educational-nlp|교육용 NLP]], [[educational-measurement]]의 교차점에 놓입니다.

## 문항 생성 접근법

지식베이스의 연구는 여러 접근법을 보여줍니다:

- **생성 후 검증(generate-then-validate) 파이프라인:** [[generate-then-validate-question-gen|Generate-Then-Validate]]는 직접 생성 대비 LLM 환각을 62% 줄이는 생성 → 검증 → 정제 루프를 도입하여, [[stem-education|STEM]] 데이터셋에서 89% 정확도와 관련성 23% 향상을 달성합니다. 검증 단계는 무효하거나 저품질 문항을 걸러내고, 실패한 문항은 수정 프롬프트로 재생성을 촉발합니다.
- **지식 추적 기반 생성:** [[kt4eqg-personalized-question-generation|KT4EQG]]는 [[knowledge-tracing|지식 추적]]의 안내를 받아 일반적인 문항이 아니라 각 학습자의 지식 상태에 맞춘 개인화된 연습 문항을 생성합니다.
- **진단 레이블로서의 오개념 기반 오답:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]]는 각 오답을 채굴된 단일 오개념에 연결하고 정확히 하나의 정답을 표시하여, 문항이 진단 대상이 내장된 상태로 생성되고 [[llm]] 호출 없이 결정적으로 채점될 수 있게 합니다 — 저자들의 실제 배포에서 라운드당 약 7.6초와 약 \\$0.005가 소요되어, LLM 채점 단답형 라운드의 약 32초와 \\$0.015와 대비됩니다. 이 결합은 그 뒤에 놓인 오개념 레이블의 품질만큼만 좋습니다. 채굴된 [[misconceptions]]이 대상 오개념과 F1 ≈ 0.56으로 일치했고, 그 문항 선택은 실제로 약한 기술을 0.72의 비율로 다루었습니다.
- **인지 깊이 인식 생성:** [[llm-educational-question-cognitive-depth|LLM 생성 문항의 인지 깊이 평가]]는 생성된 문항이 [[critical-thinking|고차원 사고]](창조, 평가)를 촉구하는지 아니면 암기만 요구하는지 검토하며, Bloom의 분류법과 [[educational-measurement]]에 연결됩니다.
- **반복 평가를 위한 오류 내장 사례 문제:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]]는 학생이 찾아 설명해야 하는 의도적으로 오류가 내장된 짧은 사례로 구성된 새로운 계층적 진단 추론(HDR) 문제를 생성했고, GPT-4o 저작 문항이 내적 일관성(Cronbach's α = 0.78, 둘 다)과 난이도에서 인간 저작 문항과 동등했으며, Fisher의 정확 검정에서 100명 참가자의 점수 분포에 유의한 차이가 없음을 발견했습니다. 이 형식은 [[critical-thinking|고차원 사고]] 요구와 제약된 응답을 짝지어 답이 수렴하고 채점이 재현 가능하게 만듭니다. 생성적 동기는 문항 재사용입니다: 하나의 사례를 재사용하면 기억과 답안 재사용을 유발하지만, 구조적으로 동등하되 맥락적으로 다른 생성 사례는 재측정에서 문항 편향을 억제합니다.
- **[[pedagogy|교육학적]] 파이프라인:** [[slidesqaqa-pedagogical-question-generation|슬라이드 덱 Q&A 생성]]은 강의 자료로부터 교육학적으로 타당한 문항 생성을 위한 다단계 파이프라인을 사용합니다.
- **접근성 고려 생성:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]는 [[inclusive-learning|청각장애인 및 난청 학습자]]를 위한 LLM 기반 문항 생성 시스템을 설계하여, 영상 속 시각적 또는 감정적 어려움 순간을 겨냥하는 시각적(Visual) 및 감정(Emotion) 질문 전략을 도입하고, 언어적 접근성을 보장하기 위해 대상 공동체와 반복적으로 문항을 정제합니다.
- **RAG 기반 인간 참여 시스템:** [[code-gen|CODE-GEN]]은 [[automated-assessment|객관식 평가]] 생성을 위해 [[rag|검색 증강 생성]]과 [[human-in-the-loop-ai|인간 참여(human-in-the-loop)]] 검토를 결합합니다.
- **[[benchmark|벤치마크]]와 평가:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]]는 문항 생성과 추론 시스템을 평가하기 위한 과학/수학 수수께끼 벤치마크를 제공합니다.

## 검증과 품질

AQG의 핵심 과제는 **품질 관리**입니다:
- **풀이 과정을 평가하고, 문제 줄기를 평가하지 말라:** [[proiqa-math-item-quality-assessment-2026|ProIQA]]는 문항 품질 검토가 전문가가 하는 일 — 풀이를 시뮬레이션하는 것 — 을 따라야 한다고 주장하며, 문항당 LLM 생성 추론 트리를 구축하고 수학적 정확성을 90.38–97.80%로 검증한 뒤, 줄기 전용 시각과 함께 그 의존 구조를 그래프 [[machine-learning|신경망]]으로 부호화합니다. 이 방법은 두 번째로 좋은 방법 대비 개념 평가 7.5%, 난이도 추정 6.3%, 역량 평가 19.5%의 평균 향상을 보고하며, 오류 분석은 주목할 만한 실패 양상을 지목합니다: 논리적으로 옳지만 구조적으로 얕은 추론 트리가 어려운 문항을 쉬워 보이게 남겨둔다는 것입니다.
- **환각 위험:** LLM은 사실과 다른 문항을 생성할 수 있습니다. [[generate-then-validate-question-gen|Generate-Then-Validate]]는 전용 검증 단계가 이를 크게 줄인다는 것을 보여주며, [[hallucination-risk|환각 위험]]은 전반에 걸쳐 인정된 우려입니다.
- **난이도 보정:** 생성된 문항은 적절한 난이도로 보정되어야 합니다. [[llm-difficulty-calibration-programming-exams-2026|난이도 보정 연구]]는 AI 난이도 추정이 학생 성과와 강하게 상관한다는 것(예: rho ≈ −0.87)을 보여 더 나은 문항 선별을 가능하게 하면서도, 고위험 [[ai-misuse-learning-harm|오용]]을 경계합니다. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]]는 이것을 K-5 수학 및 읽기 문항(N = 5170)으로 확장하여 Rasch IRT 모델 하에서 보정했습니다: GPT-4o의 제로샷 난이도 평정은 실제 난이도와 중등도-강하게 상관했고(r = 0.83 수학, r = 0.81 읽기) 학년에 따라 달랐으며, 특징 기반 접근법 — LLM 추출 인지·언어적 특징을 트리 기반 모델에 투입 — 은 최대 r = 0.87의 상관에 도달했습니다. 이 연구의 구조화된 특징 추출(예: 통제문법 복잡성, [[cognitive-offloading|인지 부하]], 오답의 교활함)과 실용적인 7단계 워크플로는 생성 문항을 보정하기 위한 템플릿을 제공하며, 저학년 범위 제한 발견과 일반화 주의사항은 고위험 사용을 경계합니다.
- **생성된 난이도 레이블은 보정 오류가 아닌 구성 타당성 실패가 될 수 있다.** 378개의 생성 문항에 걸쳐 모델의 쉬움/보통/어려움 레이블은 함께 생성된 Bloom 수준(ρ=0.90)과 표면 형식 — 평균 문제 줄기 길이가 15.9에서 22.1, 30.2 단어로 증가 — 을 추적했지만, 54명 학생의 7,888개 응답에서 실증적 문항 난이도와는 ρ=0.06으로만 상관했습니다. 이는 함께 생성된 태그를 신뢰하기보다 생성된 메타데이터를 응답 데이터에 맞춰 보정해야 한다는 근거입니다([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **대규모 심리측정 현장 검증:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]]는 반복 정제 AQG 파이프라인(생성→판정→수정, Self-Refine 방식)을 91개의 실제 대학 강의(약 1,686명 학생)에서 검증합니다. 베이지안 계층적 2PL [[item-response-theory|IRT]] 분석은 AI 생성 문항이 전문가가 작성한 표준화 시험 문항과 동등한 성과를 낸다는 것을 보여줍니다 — 다소 쉽지만(β̄ = −0.45 대 0.35), 변별력은 약간 더 높고(ᾱ = 1.3 대 1.2), 최고 검사 정보량이 더 높으며(신뢰도 0.79 대 0.72) — AQG가 강의 맞춤형이고 심리측정학적으로 타당한 평가를 대규모로 만들어낼 수 있음을 입증합니다.
- 평균 심리측정 동등성은 문항 수준의 부족을 가릴 수 있습니다: 의학교육 보고서 153건에 대한 범위 검토에서 AI 문항 생성이 때로 인간 난이도와 변별력에 부합했으나, 한 생리학 비교에서는 40개의 ChatGPT 문항 중 9개만이 모든 이상 기준을 충족한 반면 교수 문항은 40개 중 19개가 충족했습니다([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **실제 시험에서의 식별 가능성, 그리고 검토가 실제로 제거하는 것:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]]는 AI 생성 객관식 30개와 국가 면허 시험 객관식 30개를 119명의 5학년 [[medical-education|의대생]]이 치르는 채점된 태블릿 기반 시험에 넣었으며, AI 문항은 ChatGPT-4o와 Gemini 1.5 Pro가 강의 자체 자료로 작성하고 전문가 패널이 82%를 수락하고 18.2%를 사용 불가로 제거했습니다. 학생들의 출처 추정은 두 종류의 문항 간에 차이가 없었고, 문항 난이도, 오답 분포, 인식된 교육과정 정렬성은 통계적으로 구별되지 않았습니다 — 이것은 품질 결과가 아닌 *식별(recognition)* 결과이며, 저자들이 이 워크플로의 이점을 문항 작성을 없애는 것이 아니라 초안 작성에서 검토로 교수자의 노력을 옮기는 것이라고 설명하는 이유입니다. 하나의 탐색적 차이만 살아남았습니다: Gemini 문항은 면허 시험 문항보다 어려웠고(p = 0.028), ChatGPT 문항은 그렇지 않았습니다(p = 0.984).
- **과제 의존성:** 생성 신뢰성은 문항 유형에 따라 다릅니다. [[cong-confidence-asag-2026|단답형 채점]]과 [[self-referential-l2-writing-llm-assessment|분석적 글쓰기 평가]]는 개방형 응답과 글쓰기 문항이 구조화된 문항보다 생성하고 채점하기가 더 어렵다는 것을 보여줍니다.
- **인지 품질:** [[llm-educational-question-cognitive-depth|인지 깊이 평가]]는 생성 문항이 고차원 결과를 위해 명시적으로 설계되지 않으면 저차원 사고로 치우칠 수 있다는 것을 보여줍니다.
- **자동 인지 수준 레이블링이 생성 문항에는 전이되지 않는다.** 큐레이션된 문항 은행에서 훈련된 Bloom 분류법 분류기는 AI 생성 문항에서 무너졌습니다 — 분포 내 macro F1 0.88에서 분포 외 0.48과 0.20으로 — 이는 생성 문항이 평균적으로 훨씬 더 많은 단어(18.2 대 9.3)를 쓰고 큐레이션 코퍼스와 Bloom 트리거 동사의 중앙값 10.5%만 공유하기 때문입니다(더 가까운 세트는 35.1%). 레이블 붙은 분포 외 데이터로 재훈련하는 것이 N > 1,000개 정도의 레이블 표본 임계값에서 가장 큰 단일 향상이었습니다([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

## 적응형 및 개인화 학습에서의 역할

AQG는 [[adaptive-learning|적응형]] 및 [[personalized-learning|개인화된]] 학습의 핵심 가능 요인입니다: 적응형 튜터가 끌어다 쓰는 대규모 문항 은행을 만들어내며, [[knowledge-tracing|지식 추적]]이나 [[student-modeling|학생 모델링]]과 결합하면 개별 학습자의 지식 상태에 맞춘 문항을 생성할 수 있습니다([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|흥미 기반 개인화]]는 AQG가 난이도뿐 아니라 학생의 흥미에도 문항을 맞출 수 있음을 보여줍니다.

## AI 교육을 위한 시사점

- **생성 후 검증:** 생성에는 항상 환각을 통제하고 관련성을 확보하기 위한 검증/정제 단계를 짝지으세요.
- **문항 유형을 신뢰성에 맞추기:** AQG는 가장 신뢰성 있는 구조화된 문항 유형(객관식, 빈칸 채우기, 코드)에 사용하고, 개방형 응답과 글쓰기 문항에는 신중한 검증을 적용하세요.
- **인지 깊이를 위해 설계:** 프롬프트와 파이프라인은 단순 회상이 아닌 고차원 사고를 겨냥하여 진정한 학습을 뒷받침해야 합니다.
- **난이도 보정:** 적절히 도전적인 문항을 선별하기 위해 AI 난이도 추정을 사용하되, 고위험 사용 전에는 강한 검증을 거치세요.
- **학습자 모델을 통한 개인화:** AQG를 지식 추적과 흥미 모델에 결합하여 적응형이고 개별화된 문항을 생성하세요.

## 연결된 개념

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## 연결된 문서
- [[genai-medical-education-transformation-review-2026]] — AI 문항 생성 대비 교수 문항 품질에 관한 의학교육 보고서 153건의 범위 검토
- [[assessing-quality-ai-generated-exams-field-2025]] — IRT를 통한 AI 생성 시험 품질의 대규모 현장 검증
- [[generate-then-validate-question-gen]] — Generate-Then-Validate 문항 생성
- [[kt4eqg-personalized-question-generation]] — 지식 추적을 통한 개인화된 문항 생성
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 청각장애인 및 난청 학습자를 위한 LLM 기반 문항 생성
- [[llm-educational-question-cognitive-depth]] — LLM 생성 문항의 인지 깊이
- [[slidesqaqa-pedagogical-question-generation]] — 슬라이드 덱 Q&A 교육학적 문항 생성
- [[code-gen]] — CODE-GEN: RAG 기반 인간 참여 문항 생성
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles 벤치마크
- [[taklif-ai-interest-based-personalized-assignments]] — 흥미 기반 개인화 과제
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM 기반 난이도 보정
- [[self-referential-l2-writing-llm-assessment]] — 자기 참조적 분석적 글쓰기 평가
- [[cross-dataset-bloom-question-classification]] — 교차 데이터셋 Bloom 질문 분류
- [[llm-chatbots-cs-multiple-choice]] — LLM 챗봇과 CS 객관식 문항
- [[socratic-tests-conversational-assessment]] — 소크라테스식 시험: 대화형 평가
- [[llm-turing-test-italian-legal-exams-2026]] — 법학 시험에서의 LLM 튜링 테스트
- [[razavi-powers-item-difficulty-llm-2026]] — LLM과 트리 기반 ML을 사용한 문항 난이도 추정
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: 과정 기반 수학 문항 품질 평가
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: 인간-AI 공동 학습 루프에서 학습자를 배우는 에이전트 튜터
- [[automated-constructive-assessment-hdr-llm-2026]] — 대형 언어 모델로 구성적 평가 자동화하기: 실천 역량의 확장 가능하고 반복적인 평가를 향하여
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — 데이터 과학 강의에서 학생의 LLM 사용과 AI 생성 문항 난이도의 한계
- [[bloom-classifier-ai-assisted-questions-2026]] — 새로운 AI 보조 교육 문항의 교육학적 평가를 위한 사전훈련 모델 평가
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — 학생들은 채점된 시험에서 AI 생성 객관식을 면허 시험 문항과 구별하지 못했고, 생성 문항의 18.2%가 검토에서 제거되었다 (Vogt et al. 2026)
