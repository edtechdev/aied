---
title: 적응 학습
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
translation_of: concepts/adaptive-learning
source_updated: "2026-10-28T19:24:33-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **적응 학습** — 개별 학습자 특성과 수행에 기초하여 내용, 속도, 수업 전략을 조정하는 AI 기반 교육 시스템입니다. 적응 학습은 많은 [[ai-education|AI 교육]] [[research-methods-aied|연구]]의 운영 목표입니다: [[student-modeling|학생 모델]]을 사용해 수업을 개별화하는 것.

## 생각해 볼 질문들

- '적응', '개인화', '개별화', '맞춤' 학습은 흔히 같은 뜻으로 쓰이지만, 연구는 이것들이 같지 않다고 말합니다. 각 단어가 무엇을 뜻한다고 가정하시며, 그 가정은 어디에서 틀릴 수 있습니까?
- 적응 시스템은 당신이 아는 것에 대한 모델에 기초해 내용과 난이도를 조정합니다. 그 모델이 당신의 학습에 관한 피상적이거나 신뢰할 수 없는 신호 위에 놓인다면 무엇이 잘못될 수 있습니까?
- 핵심 발견 하나는, 정답에서 숙달을 추론하는 시스템이 — 당신이 행동을 보류할 시점을 배우기 전에 — 연습을 너무 일찍 멈출 수 있다는 것입니다. 계속 '맞히는' 것이면서도 실제 상황에는 대비되지 못한 채 남겨 두었던 기술을 떠올려 보실 수 있습니까?
- 과잉 적응은 학생이 깊이 학습하는 데 필요한 생산적 투쟁을 없앨 수 있습니다. AI가 당신이 버거워하는 순간 계속해서 일을 쉽게 만든다면, 학습자는 정확히 무엇을 잃습니까?
- 메타 분석은 적응 메커니즘 — 구체적 도구 세대가 아니라 — 이 [[learning-gains|학습 향상]]을 이끈다고 제안합니다. '어떻게'가 '어떤 도구'보다 중요하다면, 적응 소프트웨어를 고를 때 무엇을 보아야 합니까?
- LLM 기반 튜터는 이제 난이도뿐 아니라 언어와 설명 방식을 적응시킬 수 있습니다. 무언가가 설명되는 방식을 개인화하는 것이 학습에 도움이 되는 때는 언제이며, 학습자 자신의 주체성을 조용히 약화시킬 수 있는 때는 언제입니까?

## 들어가며

### 핵심 메커니즘

- **측정-모형-적응 루프:** [[knowledge-tracing]]은 학생이 아는 것을 추정하고, [[student-modeling]]은 학습자를 표현하며, 시스템은 그에 따라 난이도, 내용, [[feedback]]을 적응시킵니다.
- **규모의 개인화:** [[personalized-learning]] 시스템은 적응 알고리즘을 사용해 각 학생에게 고유한 학습 경로를 제공합니다. [[deeptutor]]와 [[ai-powered-personalized-learning-elementary-fractions-2026|초등 분수 튜터]]는 적응적 개인화를 실제로 보여 줍니다.
- **내용 순서화:** [[adaptive-pretesting-retention|적응 예비 검사]]와 [[adapt-adaptive-lesson-plan-transformer|수업 계획 변환기]]는 제시되는 내용의 순서와 유형을 최적화합니다.
- **ITS 통합:** [[intelligent-tutoring|지능형 교습 시스템]]은 진단과 적응을 결합한, 전형적인 적응 학습 플랫폼입니다.
- **AutoML 기반 프로파일링과 진단:** 전통적인 교육 모델은 다원적이고 이질적인 학습 행동 데이터를 처리하는 데 어려움을 겪어, 학습자 프로파일링과 진단 모형 개발이 제한됩니다. 자동화된 [[machine-learning|기계 학습]]에 의해 구동되는 개인화된 신경 인지 구조 탐색 프레임워크는 [[multimodal|다중 양상]] 교육 데이터를 이질적 방법과 통합하여 이질적 학습자 프로파일에 맞춘 진단 모형을 생성하고, 학습 과정의 정적이 아닌 동적 분석을 뒷받침합니다.

### 효과성 증거

이 지식 기반은 혼합된 증거를 기록합니다: 적응 시스템은 적응이 신뢰할 만한 [[student-modeling|학생 모델]]에 근거할 때 성과를 개선하지만, 잘못 보정된 적응은 학습을 해칠 수 있습니다. [[personalized-learning|개인화 연구]]는 효과적인 적응을 피상적 맞춤과 구분합니다. [[khalifeh-redefining-personalized-learning-ai-2026|체계적 검토]]는 "적응", "개인화", "개별화", "맞춤" 학습이 일관되지 않게 사용됨을 발견합니다 — 따라서 효과 크기는 적응이 어떻게 조작화되는지에 크게 의존하며, 이 분야는 통일된 프레임워크를 요구합니다.

959건의 기록을 22개의 고등교육 개입으로 선별한 PRISMA 2020 검토는 적응 경로와 추천 시스템을 선도적 AI 응용의 하나로 세지만, 대부분의 연구는 기존 실행을 변화시킨 것이 아니라 개선했습니다([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh 외(2026)]]).

**적응을 이끄는 것은 기술적 능력이 아니라 교수법적 근거입니다.** 127개 지능형 교습 연구의 15년 검토는 대부분의 시스템이 명시된 교수법 원리보다 기술이 할 수 있는 것 주변에 구축되었음을 발견하고, 인간 교습의 최대 98%에 대비해 평균 ITS 향상을 약 20%로 잡습니다([[zerkouk-comprehensive-review-its-2025|Zerkouk 외(2025)]]).

2년간의 학구 RCT에서 구속적 제약은 적응 메커니즘이 아니라 이용률이었습니다. 수강을 단일 단계로 줄인 것만으로 첫 세션 이용률이 약 45%에서 83%로 올랐고(설계 변경만으로), 이용률이 오르면서 의도-처리 향상도 커졌습니다([[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos 외(2026)]]).

44개 연구에 대한 PRISMA 정합 검토는 참여 문헌이 행동적 참여로 치우쳐 있고 에이전트적 참여에서 가장 얇음을 발견하며, ALEKS와 W-Pal의 종단 연구에서 도구의 새로움이 사라지자 시간이 흐르며 참여가 감소하는 신기성 효과를 보고합니다([[simon-student-engagement-adaptive-learning-2026|Simon, Zeng와 Fryer(2026)]]).

### AI 시대: LLM 기반 적응과 그 위험

[[generative-ai|생성 AI]]는 적응 시스템이 할 수 있는 것을 확장했습니다 — 대화형 [[agentic-ai|에이전트]] 튜터, [[rag]] 기반 내용, [[llm]] 기반 [[intelligent-tutoring|교습]]은 문제 난이도뿐 아니라 언어와 설명 방식도 적응시킵니다(예: [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor]], [[chudziak-ai-math-tutoring-platform|다중 에이전트 적응 교습]]). 그러나 LLM 기반 적응은 새로운 위험을 도입합니다: 신뢰할 만한 [[student-modeling|학생 모델]]이 없으면 적응이 피상적 신호에 기반할 수 있으며, 과잉 적응은 학생이 필요로 하는 생산적 투쟁을 줄일 수 있습니다([[desirable-difficulties]], [[cognitive-offloading]] 참조); 그리고 개인화와 학습자 [[agency]] 보존 사이의 균형은 열린 설계 질문입니다([[agentic-ai|에이전트 AI]] 참조). 학습자가 요청한 적응의 변형은 [[student-modeling|학생 모델]] 없이 전혀 작동합니다: Sidorkin(2026)의 대학원 강의에서 읽을거리는 학생들이 재구성하거나, 심화하거나, 단순화하거나, 지역화하는 후속 질문을 할 때만 조정되었고, 이해 지향적 요청은 기준 텍스트보다 3.4배에서 8.7배 더 많은 정의 표지를 꾸준히 만들어 냈으며, 이것이 읽을거리당 최소 세 개의 후속 질문을 요구한 것이 자료를 상호작용으로 만든 이유입니다. 이것은 또한 적응의 부담을 학습자에게 재배치합니다: 여기서 적응은 학생이 무엇을 요청해야 할지 아는 경우에만 일어납니다.

### 개인화 학습 및 지능형 교습과의 관계

적응 학습은 흔히 [[personalized-learning|개인화 학습]]과 혼동되지만, 둘은 다릅니다. **적응 학습**은 *메커니즘* — 학습자 모델에 기초한 내용, 속도, 난이도의 실시간 조정 — 입니다. **개인화 학습**은 전체 학습 경험을 개인에게 맞추는 *더 넓은 목표*이며, 실시간 적응은 그 한 구현입니다. 적응 시스템은 개인화를 향한 전형적인 *수단*입니다. [[intelligent-tutoring|지능형 교습]]은 전형적 *플랫폼*입니다: ITS는 진단(학생 모델링, 지식 추적)과 적응을 결합하고, LLM 기반 튜터는 대화적으로 적응합니다. [[personalized-learning|개인화 학습]]과 함께 적응 학습은 [[student-modeling|학습자 모델링과 적응형 수업]] 계열의 적용 측 구성원입니다 — [[student-modeling|학생 모델링]], [[knowledge-tracing]], [[cognitive-diagnosis]]가 만들어 내는 학습자 표현을 소비합니다.

### 연구 증거

- **적응 + AI 도구에 대한 [[meta-analysis-systematic-review|메타 분석]] 증거.** 14개 [[rct|RCT]]를 대상으로 한 [[burneo-can-edtech-close-learning-gaps-2026|세계은행 메타 분석]]은 적응 컴퓨터 보조 학습, 지능형 교습, 생성 AI를 공통 척도로 묶어 평균 학습 향상을 ~0.125 sd로 추정하며, 두 기술 세대 간에 유의한 차이가 없음을 밝혔습니다 — 이는 적응 메커니즘이 구체적 도구 세대가 아니라 향상을 이끈다는 증거입니다.
- **해석 가능한 평정과 시간 예산 기반 라우팅.** [[mars-momentum-aware-adaptive-rating-assessment-2026|Sahu 등(2026)]]은 몇 개의 명시적 학습자 스칼라(평정 민감도, 응답 품질, 모멘텀)를 유지하고 시간 예산 아래에서 문제를 배치하여, 고정 Elo 대비 평정 갱신 변동성을 대략 절반으로 줄였으나 예측에서는 신경 지식 추적에 뒤처집니다(AUC 0.7532 대 GKT의 0.8658).
- **동적 영역에서 비교된 적응 알고리즘.** [[graph-its-adaptive-algorithms-2026|그래프 기반 ITS 연구]]는 동적 커리큘럼을 위한 그래프 기반 지식 표현 프레임워크에서 여러 적응 학습 알고리즘(베이지안 지식 전파와 직관주의적 퍼지 논리 포함)을 비교합니다.

- **적응 메커니즘으로서 실증적으로 조망된 RL.** [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper와 Lugrin(2025)]]은 89개의 RL-in-education 연구를 종합하여, 적응이 내용 관련(수업 순서화/내용 일정화, n = 53)과 안내 관련(힌트, [[feedback]], 활동 선택, n = 36) 메커니즘으로 갈림을 발견합니다 — RL은 내용 일정화보다 안내 관련 적응에서 기준선보다 통계적으로 유의하게 우수한 경우가 더 많았습니다. 그들은 적응 학습에 모델 프리 RL을 권하고 검토된 연구에서 고전적 RL이 심층 RL보다 우수했음을 경고합니다.
- **정확성 기반 적응은 연습을 너무 일찝 멈출 수 있다.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, Stamper(2026)]]는 정확성에서 숙달을 추론하는 적응 시스템이 학습자가 학습된 행동을 보류해야 하는 상황을 만나기 전에 연습을 종료할 위험이 있음을 발견했습니다 — 기만적 과잉 일반화가 탐지되지 않은 채로. 그들은 숙달 정지 규칙이 작동하기 전에 "행동하지 않기" 탐지 과제를 포함할 것을 권하여, 적응이 정확성만이 아니라 조건부 이해(행동을 보류할 시점 알기)를 시험하게 합니다.
- **숙달 연속 기록은 지속적 학습이 아니다.** 6,000명 학생 중학교 현장 실험에서 AI 지원 연속 세 개 정답 숙달 규칙은 플랫폼 정의 달성도를 약 28.7퍼센트 포인트 올렸으나 일주일 후의 지연 검사는 개선하지 못했으므로, 숙달 지표는 지연 학습을 대신하는 것이 아니라 지연 학습에 대해 검증되어야 합니다([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos 외(2026)]]).
- **난이도뿐 아니라 *인지적 참여의 유형*을 적응시킨다.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi 외(2026)]]는 안내된(능동적) 혹은 버기가 있는(구성적) 예시를 배정하는 BKT와 심층 RL 정책이 모두 113명 학생 논리 튜터에서 무작위 배정을 능가함을 발견했습니다(사후 검사 72.3과 72.5 대 65.7), BKT는 선행 지식이 낮은 학생에게 가장 잘 작용하고 DRL은 높은 학생에게 그랬습니다.
- **더 많은 되먹임이 더 나은 되먹임은 아니다.** 8주간의 적응 확률론 강의(194명 학생)에서 지시적, 정보적, 전환적 되먹임은 다르게 수용되었고, 전환적 되먹임은 더 나은 조절보다 인지적 과부하와 연관되었습니다 — 적응은 되먹임 밀도를 극대화하는 것이 아니라 학습자의 단계와 필요에 맞아야 합니다([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh와 Fromm(2026)]]).
- **적응 표적으로서의 참여 프로파일.** [[an-goel-self-directed-modeling-2026|An, Hammock와 Goel(2025)]]은 VERA에서 822개 모델을 만든 315명의 온라인 학습자를 추적하여 참여를 관찰, 구성, 탐구 프로파일로 분류하고, 학습자가 구성 중심 행동에서 더 완전하고 가설 기반인 탐구로 진행하는 경향이 있으며 관찰은 단계를 걸쳐 지속됨을 발견했습니다. 그들은 적응적이고 개인화된 설계가 이 프로파일들을 인식하고 되먹임을 표적으로 삼아(예: 유사한 모델을 추천하거나 더 깊은 개념적 이해를 뒷받침하여) 피상적 관찰자를 더 통합적이고 완전한 주기 모델링으로 움직이게 해야 한다고 주장합니다.
- **읽히되 쓰이지 않는 메모리는 적응이 아니다.** CoLearn의 동결된 메모리 통제는 학습자 프로파일을 여전히 읽으면서 고정된 문항을 제공했고, 진정으로 약한 기능을 겨냥한 문항 비율이 0.72에서 0.57로 떨어졌으며, 최종 숙달 오차는 적응 조건보다 올랐습니다([[colearn-agentic-tutor-co-learning-loop-2026|He 외(2026)]]).
- **향상은 더 영리한 튜터가 아니라 순서화에서 왔다.** [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung 외(2026)]]는 LLM 안내 강화학습으로 개인화된 튜터를 훈련하여 타이베이의 [[k-12|고등학교]] 10곳에 걸친 5개월 Python 강의에 배치하고, 770명 학생을 적응 순서와 고정된 쉬움-어려움 문제 순서 사이에서 무작위 배정했습니다. 적응 순서화는 대면 비보조 [[summative-assessment|기말고사]] 점수를 0.156 SD(통제 시 0.150 SD) 올렸으며 — 중재 분석은 이 효과를 거의 전적으로 참여(과제 시간을 통해 0.185 SD, 시도를 통해 0.149 SD)에 귀속시켰고, 더 쉽거나 어려운 자료가 아니라 — 향상은 초보자와 하위 학교에서 가장 컸습니다. 적응의 지렛대는 연습의 순서였지, 대화의 질이 아니었습니다.
- **숙달 결정은 규칙 기반으로 유지하고 기계 학습은 감시에 국한한다.** 30명 6학년을 위한 8주 적응 STEM 프로그램은 규칙 기반 숙달로 경로를 관장하고 기계 학습으로 수행을 추적하여 적응을 감사 가능하게 유지했지만, 예비 검사가 없고 조건당 교실이 하나여서, 그 향상은 지역적으로 검증할 파일럿 템플릿입니다([[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet 외, 2026)]]).
- **병목 속성을 적응시키고, 약한 평균이 아니다.** 지식 상태의 전이 모델링은 분석적 사고를 획득하기 가장 어렵고 잃기 가장 쉬운 것으로 순위 매겼습니다 — 최저 전진 전이 확률 0.31, 최고 후진 0.22-0.23 — 따라서 표시된 속성의 재연습이 전체 숙달보다 더 예리한 적응 표적입니다([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng와 Huang, 2026)]]).
- **집합 점수가 아니라 과정 서열로부터의 적응.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela와 Cukurova(2026)]]는 삼인조에서 65명 학생의 대화 발화 *순서*를 채굴하여 비계 규칙을 도출하여, 적응 학습을 집합된 행동이나 수행 척도에서 개별 과정 서열로 옮겼습니다; 최대 비계는 과제 수행 행동을 높였지만 대본화도 높였고, 이 설계는 시험되지 않았습니다.

## 흔한 오해

- **"적응형은 개인화이고 개별화다."** [[khalifeh-redefining-personalized-learning-ai-2026|체계적 검토]]는 이 네 용어가 **문헌 전반에서 일관성 없이** 사용된다는 것을 발견하며, 이는 보고된 효과 크기가 적응 자체보다 적응이 어떻게 조작적으로 정의되었는지에 크게 달려 있음을 뜻합니다. 같은 단어를 서로 다르게 쓴 연구들을 모은 메타분석은 서로 다른 처치를 모은 것이며, 그 평균은 그중 어느 것도 설명하지 못합니다.
- **"시스템에서 도달한 숙달은 학습된 숙달이다."** **6,000명 규모의 중학교 현장 실험**에서 AI 지원 연속 세 번 정답 숙달 규칙은 **플랫폼이 정의한 성취도를 약 28.7퍼센트포인트 끌어올렸지만** 전이 측정치는 개선하지 못했습니다. 그 규칙은 플랫폼 자체의 준거를 최적화했습니다. 이것은 숙달 신호가 학습의 모형이지 학습 자체가 아님을 보여 주는 가장 명확한 사례입니다.
- **"정확성 기반 적응은 언제 멈출지 안다."** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, and Stamper (2026)]]는 정확성에서 숙달을 추론하는 시스템이 **연습을 너무 일찍 종료할** 위험이 있다고 밝혔습니다. 시스템은 정답 연속을 이해로 읽고 학습자에게 여전히 필요했던 연습을 거둬들입니다. 성공에서 멈추는 적응은 유지에 필요한 바로 그 시행들을 빼앗을 수 있습니다.
- **"병목은 적응의 품질이다."** **2년 지역구 RCT**에서 구속 조건은 **참여**였습니다. 등록을 한 단계로 축약한 것만으로 첫 세션 참여율이 약 **45%에서 83%**로 올랐고 의도-처치 이득도 그에 따라 커졌습니다. 아무리 정교한 적응도 거기에 도달하지 못하는 사람에게는 아무것도 아닙니다.
- **"참여는 일단 형성되면 지속된다."** **44개 연구**를 검토한 PRISMA 정렬 검토는 참여 문헌이 행동적 참여에 치우치고 주체적 참여에서 가장 얇다고 보고하며, **참신성 효과**를 보고합니다. ALEKS 같은 시스템의 종단 연구에서 도구의 참신함이 사라지면 참여가 감소했습니다. 초기 참여는 설계의 안정적 속성이 아닙니다.

## 이것이 실천에 의미하는 바

**교수자와 설계자를 위하여**

- 숙달을 플랫폼이 볼 수 있는 것이 아니라 여러분에게 참이어야 하는 것으로 정의하십시오. 전이 개선 없이 28.7포인트 성취도만 오른 사례가 바로 설계로 피해야 할 실패 양상입니다. 준거가 연속 세 번이라면 얻는 것도 연속 세 번입니다.
- 유지가 필요한 것이라면 정확성 신호를 넘겨서까지 연습을 계속하십시오. 학습자가 끝났는지 스스로 판단하도록 적응 시스템을 신뢰하기보다 [[desirable-difficulties|분산·교차]] 복습을 사용하십시오.
- 알고리즘을 조정하기 전에 등록 마찰을 제거하십시오. 한 단계를 축약해 45% → 83%의 참여를 얻은 것이 이 문헌의 대부분 교수법 개선을 능가했습니다.
- 참여 감소를 계획에 넣으십시오. 종단 연구는 감소를 기록합니다. 지속적 자발적 사용에 기대는 설계라면 계속 쓰일 이유가 있어야 합니다.
- 시스템이 어떤 구성개념에 적응한다고 주장하는지 확인하십시오. 행동적 참여는 가장 많이 연구되었고 학습에 관해 가장 정보가 적습니다. 주체적 참여는 증거 기반에서 가장 얇습니다.

**개발자를 위하여**

- 인용하는 모든 효과 크기 옆에 "적응"의 조작적 정의를 보고하십시오. 문헌의 정의가 갈라지므로 통합 수치는 그 모호함을 물려받습니다.
- 자체 검증에서 숙달 준거와 학습 결과를 구분하십시오. 검증 측정치가 적응을 이끄는 신호와 같다면 그것은 독립적 증거가 아닙니다.

## 연결된 개념

- [[online-teaching-and-learning]] — 온라인 교수와 학습
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — 포괄 개념: AI 기술과 기법(모형, LLM 훈련, 로보틱스, RAG, 에이전트)
- [[recommender-systems-and-learning-paths]]

## 연결된 문서

- [[mars-momentum-aware-adaptive-rating-assessment-2026]] — MARS: 개인화 평가를 위한 모멘텀 인식 적응형 평정 시스템
- [[deceptive-overgeneralization-adaptive-learning-2026]] — 기만적 과잉 일반화: 적응형 숙달은 학습자가 행동을 보류할 시점을 알기 전에 연습을 멈출 수 있다(An, McLaren & Stamper 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI 교습은 하나가 아니다: 우리가 실제로 아는 것(Stanford SCALE/NSSA 브리프)
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — 적응 학습 플랫폼의 학생 참여에 대한 체계적 검토
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — CAL을 통한 가상 교습: 이용률과 학습에 관한 실험
- [[making-ai-tutoring-productive-mastery-math-2026]] — AI 교습을 생산적으로: 숙달 기반 수학 연습
- [[chudziak-ai-math-tutoring-platform]] — 적응/개인화 다중 에이전트 수학 교습(Chudziak와 Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — 개인화 학습의 재정의: 체계적 검토
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — 학습자 준비도에 보정된 교습 특정 AI 대 일반 챗봇
- [[context-based-ai-secondary-chemistry-2026]] — 중등 화학의 맥락 기반 7E + AI 수업
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — 심층 학습을 위한 적응 AI 기반 STEM 프로그램
- [[graph-its-adaptive-algorithms-2026]] — 동적 영역을 위한 그래프 기반 지능형 교습(2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 개인화된 학습 경로를 위한 베이지안 인지 진단
- [[adaptive-scaffolding-cognitive-engagement-its]] — ITS에서의 적응 ICAP 비계(BKT 대 DRL)
- [[burneo-can-edtech-close-learning-gaps-2026]] — 14개 RCT에 걸쳐 적응 + AI 지원 도구를 묶은 메타 분석
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — 체계적 검토: 적응 경로와 추천 시스템이 고등교육 AI 통합의 선도적 활용 사례
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — 적응 문제 순서화가 고정 순서화를 이기다: 비보조 시험에서 +0.156 SD, 난이도가 아니라 참여에 의해 중재(Chung 외 2026)
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: 인간-AI 공학습 루프에서 학습자를 배우는 에이전트형 튜터
