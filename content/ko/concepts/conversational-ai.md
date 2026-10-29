---
title: 대화형 AI
created: "2026-08-22T04:44:37-04:00"
updated: "2026-10-29T04:21:31-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm, pedagogical-agent]
confidence: medium
translation_of: concepts/conversational-ai
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

> **대화형 AI(CAI) 에이전트** — 규칙 기반 챗봇에서 NLP/ML 및 [[multimodal]] LLM 기반 조수에 이르기까지 대화를 모방하고 자동화하는 음성 또는 텍스트 기반 AI 에이전트 — 는 교육에서 가장 널리 쓰이는 AI 인터페이스 중 하나로, [[teacher-role|교수]], 심리적, 메타인지적 지원에 높이 평가되면서도 기술적, 인지적, [[ethics|윤리]]적 우려가 지속됩니다.

## 생각해 볼 질문들

- 챗봇이나 AI 조수를 사용해 보셨을 때, 그것을 교사로 생각하셨나요, 검색 엔진으로 생각하셨나요, 아니면 다른 것으로 생각하셨나요? 그런 틀이 실제로 얼마나 배웠는지를 어떻게 형성했나요?
- 대화형 AI는 에이전트가 어떻게 말하는지를 서술할 뿐, 무엇을 하도록 만들어졌는지를 서술하지 않습니다. 챗봇이 대화형이면서도 완전히 비교수법적일 수 있을까요 — 그리고 그 차이를 무엇이 알려 주나요?
- 한 연구는 일반적 기술 숙련이 아니라 AI 리터러시가 학생이 챗봇을 사용하려는 의사와 능력을 예측했음을 발견했습니다. AI가 어떻게 작동하는지 아는 것이 '컴퓨터를 잘 다루는 것'보다 왜 더 중요할 수 있나요?
- 원초적 범용 챗봇은 즉시 답하여 추론을 단축시키는 반면, 구조화된 튜터는 답을 보류하여 생산적 고군분투를 보존합니다. 어떤 설계 선택이 학생이 만나는 에이전트의 종류를 결정하나요?
- 법학 강좌 챗봇을 사용한 학생들은 상호작용의 3분의 1을 업무 시간 이후에 했습니다 — 이는 24/7 가용성이 진짜 이득이라는 증거입니다. 그러나 상시 접근은 설계로 막고 싶은 위험도 함께 지니나요?
- 한 연구에서 챗봇 도입의 가장 큰 장벽은 불신이나 학문적 정직성 우려가 아니라 잘못 설계된 팝업이었습니다. 이는 AI 교육 투자가 실제로 어디에서 실패하는지에 대해 무엇을 시사하나요?

## 들어가며

대화형 AI(CAI)는 음성 또는 문자 대화를 수행하는 AI 기반 에이전트를 아우르는 포괄적 용어로, 가장 흔히 챗봇으로, 그리고 더 최근에는 ChatGPT, Claude, 그리고 멀티모달 교육용 아바타 같은 [[generative-ai|생성]] [[llm]] 기반 조수로 실현됩니다. 현대 CAI 에이전트는 [[machine-learning]] 기반, NLP 기반, 하이브리드 범주로 나뉘며, 텍스트 기반 에이전트가 교육에서 가장 널리 퍼져 있습니다. 학습 도구로서 그것들은 [[intelligent-tutoring|지능형 튜터]], [[feedback]] 제공자, [[student-ai-interaction|상호작용 파트너]], 그리고 행정 조수로 기능하며, [[pedagogical-agent|교수 에이전트]]와 겹치면서도 더 넓은 응용 집합을 포괄합니다.

## 대화형 AI가 지식베이스에 나타나는 모습

**엄브렐라 리뷰 종합.** [[conversational-ai-agents-umbrella-review-2026|CAI 에이전트의 엄브렐라 리뷰]](리뷰 논문 34편)는 CAI 활용이 교수·학습 지원(리뷰의 97.1%), 심리적·동기적 지원(91.2%), [[metacognition|메타인지]] 및 자기 개발(88.2%)에 집중되어 있는 반면, 행정 지원, [[research-methods-aied|연구]] 관리, 보건 교육은 뒤처짐을 보여 줍니다. 이 검토는 인간–AI 관계에 관한 우려가 모든 CAI 세대에 걸쳐 지속됨을 기록하며, [[academic-integrity]]와 데이터 [[privacy]]가 새로운 윤리 문제로 부상하고, HCI 기반의 증거에 기반한 설계와 더 강한 [[ai-literacy]] 지원을 촉구합니다.

**챗봇에서 튜터링 에이전트로.** 지식베이스는 CAI의 진화를 규칙 기반 FAQ 챗봇에서 [[intelligent-tutoring|튜터링 중심]] [[pedagogical-agent|에이전트]]로 추적합니다. [[conversational-ai-tutors-framework|대화형 AI 튜터 프레임워크]]는 검증된 ITS [[ai-technologies|기술]]([[knowledge-tracing]], 정서 탐지, [[student-modeling|학생 모형화]])가 생성형 튜터를 닻 삼아야 하며, [[generative-ai]]가 유연한 대화를 제공해야 한다고 주장합니다. [[measuring-llm-tutors-teach-vs-solve|LLM 튜터가 가르치는지 풀어 주는지]]와 [[stanford-evidence-base-ai-k12-2026|튜터링 특정 대 범용 AI]]에 관한 연구는 교수법적으로 설계된 [[guardrails]]가 중요함을 보여 줍니다. 원초적 범용 챗봇은 추론을 단축시킬 수 있는 반면, 구조화된 튜터는 [[desirable-difficulties|생산적 고군분투]]를 보존합니다.

벤치마크는 스캐폴딩이 얼마나 받아들여지는지를 과장할 수 있습니다. 9개 데이터셋의 대화 9,490건에서 실제 배포의 학생들은 챗봇의 교수법적 틀을 별다른 대인적 비용 없이 우회하여 상호작용을 자신의 목표로 이끌었습니다 — 이는 무관심이 아니라 도구적 [[help-seeking]] 움직임입니다([[rethinking-scaffolding-llm-tutors|Neagu et al. (2026)]]).

**상호작용과 협력.** 대화 에이전트는 점점 답 주는 자가 아니라 상호작용 파트너로 규정됩니다. [[student-ai-interaction]]는 학습자가 실제로 CAI와 어떻게 프롬프트하고, 질문하고, 검증하는지를 담습니다. [[collaborative-learning]]에서 에이전트는 참여와 공유된 [[regulation]]를 매개하며, [[language-learning]]에서 실시간 회화 연습을 제공합니다. [[human-ai-collaboration]] 논줄기는 이 협력이 학습자의 인지적 작업을 보존할 때와 대체할 때를 검토합니다. 비판 파트너로서의 LLM은 보존하는 쪽을 구체적으로 보여 줍니다. [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]]는 한 학기에 걸쳐 ChatGPT, Gemini, 또는 Claude가 학생의 논증 에세이를 비평하게 하여, 학습자는 쓰기, [[prompt-engineering|프롬프트 엔지니어링]], 피드백에 대한 대응에서 향상되면서 교환을 유용하고, 끌리고, 즐겁다고 평가했으며, 모형 주장에 대한 능동적 반박(87.8%)은 대화 상대를 수동적으로가 아니라 비판적으로 대했음을 보여 줍니다.

대화 에이전트는 채점에도 쓰이며, 그 평가적 행동은 인간의 것과 다릅니다. ChatGPT는 같은 학부 프로젝트 52건의 세 평가자 중 가장 관대했고(M = 91.46, 교수의 83.13 대비) 동료들과 채점 논리를 공유하지 않았으며(r = 0.05), 그런데도 학생들은 그 대화형 상호작용성을 높이 평가했습니다([[usher-faraon-who-grades-best-2026|Usher & Faraon (2026)]]).

**학생 측 대화의 비계 잡기.** [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et al. (2026)]]는 채팅 인터페이스에 질문 특이성 모니터와 수정 템플릿을 더하고 모호한 질문에만 개입합니다. 웹 프로그래밍을 배우는 대학생 40명의 피험자 간 연구에서 HelpCoach 사용자는 유의하게 더 특정한 첫 질문을 썼고(57.3% 대 40.5%) 1주일 후 더 많은 지식을 유지했습니다(6점 만평 1.9 대 0.3의 평균 이득, d = 1.100). 유지 이득은 더 표적화된 챗봇 응답을 통해 이루어지지 않았는데, 그것은 조건에 따라 달라지지 않았습니다 — 메커니즘은 입증된 경로가 아니라 열린 가설로 남습니다.

**에이전트가 맡는 역할이 상호작용을 형성한다.** CAI 설계는 페르소나에 대해 중립적이지 않습니다. [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]]는 초등 도서 토론에서 고정된 "학생 또래" 동반자가 더 긴 상호작용을 유지했으나 대화를 지배하고(학생 어절/문장 비중이 낮음) "정서적 상한"에 부딪혔음을 발견했습니다. 사실 회상에서는 인간 교사와 맞먹었으나 정서적·미래 지향적 성찰에서는 미치지 못했고, CAI가 단일한 채로 있지 않고 역할(또래, 교사 조수, 학부모 조언자)을 적응시켜야 한다고 주장합니다. [[xu-genai-collaborative-space-2026|Xu et al.]]는 이를 소집단으로 확장하여, 생성 AI가 동기·비동기 협력 역학에서 *에이전트*이자 *협력적 공간*으로 작동하며, 상호작용 설계가 집단 인지를 비계 잡을지 대체할지를 결정함을 보여 줍니다. 어조는 대화만이 아니라 외부 분류기에 의해 설정될 수도 있습니다. [[culturally-aware-student-stress-chatbot-2026|Sukoon (Bashir & Afzal, 2026)]]는 20개의 설문 특성에 Random Forest를 훈련시켜 낮음·중간·높음의 스트레스 수준을 할당하고, 그 출력이 Stepped Care Model에서 영감을 받은 세 응답 층위 중 하나를 선택합니다 — 낮은 스트레스에서는 따뜻하고 격려하는, 높은 스트레스에서는 근거에 닿게 하고 비판단적으로 — 이후 [[open-source]] LLM(GLM-4.5-Air via OpenRouter)이 전체 대화 이력과 매 차례 재전송되는 문화 적응 시스템 프롬프트를 가지고 대화를 이어받습니다. 저자들은 지역 대학에서의 배치 실현 가능성을 유지하기 위해 의도적으로 무료 접근 [[multilingual-learning|다언어]] 모형을 선택했으며, Urdu가 진정한 이중언어 파이프라인이 아니라 프롬프트 엔지니어링을 통해 나타난다고 지적합니다 — 이는 문화적 적합성이 평가된 결과가 아니라 시스템 속성으로 주장될 때마다 중요해지는 한계입니다.

**대화적 행동은 조정이 아니라 제공자를 따라간다.** 학습과학에서 가져온 여섯 가지 고정 규칙으로 채점된 AI 전사 1,971건과 인간 전사 135건에서, 같은 제공자의 모형들이 계열 범위 간 중첩 없이 함께 뭉쳤는데, 저자들은 이를 교수 행동이 개별 모형 조정보다 제공자 전반의 훈련 실천을 따른다고 읽습니다([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]).

응답 일관성은 프롬프팅 문제가 아니라 기반 시설 문제입니다. 모형 내 응답 유사도는 0.715–0.795였던 반면, 모형 간에는 0.443–0.604이었고, 대화 이력을 더하면 같은 초점 메시지에 대해서도 응답 내용이 달라졌습니다([[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]]).
**학생의 관점.** 실제 활용은 기술적 역량보다 [[ai-literacy]]와 [[usability-research|사용자 경험]]에 더 의존합니다. 호주 법학 강좌의 GPT-4o 기반 [[pedagogy|교수법]] 에이전트인 "Jordan Chatbot"에 대한 인간 중심 [[mixed-methods-research|혼합 방법]] 연구는 학생이 긍정적 태도를 지니고 지식의 이득을 인식하면서 [[academic-integrity]] 요구를 강하게 지지함을 발견했으며, 상호작용의 3분의 1 이상이 업무 시간 이후에 일어나 24/7 가용성의 가치를 확인했습니다([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]). 특히, 일반적 기술 숙련이 아니라 AI 리터러시가 챗봇 사용 의향과 자신감을 예측했고, 사용성(침입적인 팝업 설계)이 신뢰, 교직원 선호, 학문적 정직성 우려보다 앞서 비사용자 사이 가장 큰 장벽이었습니다.([[colbran-student-perspectives-genai-chatbots-2026]]) 이 연구는 인간 중심 설계, 명시적 AI 정책과 평가 라벨, 교직원과 학생 연수, 지속적 오류 모니터링을 권고합니다 — 이는 효과적인 CAI 배치가 기술적 문제만큼이나 설계와 리터러시 문제임을 보여 주는 증거입니다. 연령대의 다른 끝에서, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]]는 AMA(주제가 제한되고 연령에 맞춰진 챗봇: 천문학, 운동화와 신발, 공룡)와 상호작용하는 6–14세 아동을 연구하여, 정보 출처로서의 AI에 대한 폭넓은 개방성과 높은 신뢰를 발견했습니다 — 아동은 답을 아는 질문으로 심지어 그 신빙성을 시험했습니다 — 비판적 참여와 디지털 안전 인식의 격차와 나란히, 이는 연령에 민감하고 신뢰를 인식하는 대화형 AI 설계와 명시적인 [[privacy]] 지도를 주장합니다.

에이전트를 누가 쓰는지도 다릅니다. 대학원 통계 학생 97명 가운데 4분의 1 이상이 StatBot 챗봇을 한 번도 쓰지 않았고, 여학생이 유의하게 더 자주 사용했습니다(W = 679.5, p = .015). 저자들은 이를 대화형 AI가 질문하기의 지각된 사회적 위험을 낮춘다고 읽습니다([[lee-wu-gender-motivation-genai-achievement-2026|Lee and Wu (2026)]]).

도입이 균질하지 않습니다. 학생과 교육자의 응답 192건을 군집화하면 — Cautious Achievers, Skeptical Utilitarians, Disengaged Doubters, Engaged Enthusiasts — 네 페르소나가 나오며, 평균 효과 수용 모형이 가리는 것들로, 학생은 즉각적인 [[feedback]]를, 교육자는 내용 정확성과 [[academic-integrity]]를 우선합니다([[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed (2026)]]).
**한 기관 배치에서 내구성이 관찰되었다.** California State University, Northridge의 비생성형 지식 기반 챗봇에 대한 4년 무작위 평가(N = 8,708)는 학생들이 여덟 학기에 걸쳐 수용적이었음을 — 연간 옵트아웃 비율이 4%를 넘지 않음 — 발견했으며, 효과는 조기 수강 신청처럼 시급한 행정 과제에 집중되었고(마감 전 등록 가능성이 34퍼센트 포인트 높음), GPA, 학점, 지속에서는 통계적으로 유의한 효과가 나타나지 않았습니다([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page 2026]], 작업 논문). 그 측정 교훈은 CAI 참여가 어떻게 집계되는지에 관한 것입니다. 옵트아웃이 거의 0에 가까운 동시에 상호작용 캠페인의 능동 참여는 약 5%였으므로, 지속적 참여에 관한 결론은 한 연구가 직접 응답만 집계하는지, 아니면 학생이 문자로 답하지 않고 정보에 따라 행동하는 수동적 참여도 함께 세는지에 달려 있습니다.

**위험과 윤리.** CAI 에이전트는 [[cognitive-offloading|과의존]]와 [[cognitive-offloading|인지적 오프로딩]]의 지속적 위험(엄브렐라 리뷰에서 가장 큰 윤리 우려), 그리고 기술적 한계, [[hallucination-risk|환각]], 편향, [[ai-detection|표절]], [[equity-in-ai-education|형평성]] 장벽을 지닙니다. 이 우려들은 [[ai-literacy]]와 [[reducing-ai-misuse]]를 움직이며, [[educational-policy-ai|정책]]과 윤리-[[governance]] 대응을 요구합니다. 교직원이 점점 더 받는 도입 조언을 둘러싸서 또 하나의 신뢰 우려가 생깁니다. 교직원은 AI를 도입할지 대화형 AI에 상담하도록 권유받지만, 그런 시스템은 도입에 상업적 이해를 가진 조직에 의해 만들어집니다. 10개의 최전선 LLM에 대한 감사는 대부분이 회의적 사용자의 우려를 인정한 뒤 참여 프레이밍으로 재방향함을 발견하여, AI 도입 조언의 중립성에 의문을 제기합니다.

**게임 기반 대화 에이전트.** 튜터링 너머에서, 대화 에이전트는 디지털 게임 기반 학습에 내장되고 있습니다. Wenzel, Geiger, and Liening (2026)은 행동 설계 연구(action design research)를 사용해 디지털 게임 기반 학습에서의 AI 대화 에이전트를 위한 네 가지 설계 원칙과 열다섯 가지 설계 특성으로 이루어진 **CAIS-GBL** 프레임워크를 도출합니다. 인지적, 동기적, [[affective-computing|정서적]], [[sociocultural-learning|사회문화적]] [[student-engagement|참여]]와 설계에 의한 형평성 입장에 걸친 이론 기반 메타 요건에 기반합니다. 이들이 구현한 에이전트(Lara)는 경영 [[simulation]] 게임에서 인지적·[[community-of-inquiry|사회적 현존]]과 [[self-regulated-learning|자기조절 학습]] 지원에 대해 긍정적으로 받아들여졌으며, 예비 교사와 현장 연구에서 평가되었습니다 — [[game-based-learning|시리어스 게임에서의 대화 에이전트]]를 통한 [[adaptive-learning|적응형 교수 지원]]의 실천적 청사진입니다.

## 교수 에이전트·지능형 튜터링과의 관계

대화형 AI는 지식베이스의 두 더 확립된 구성 개념, 즉 [[pedagogical-agent|교수 에이전트]]와 [[intelligent-tutoring|지능형 튜터링 시스템(ITS)]]과 겹치지만 일치하지는 않는 **상호작용 양식**으로 이해하는 것이 가장 좋습니다.

**교수법이 아니라 매체로서의 대화형 AI.** CAI는 에이전트가 *어떻게* 의사소통하는지(자연어 대화, 음성 또는 텍스트)를 이름 붙입니다. 그것은 에이전트가 *무엇을* 하도록 만들어졌는지에 대해서는 그 자체로 거의 말하지 않습니다. 교수 에이전트는 이와 대조적으로 그 **교수 역할**로 정의됩니다. [[metacognition|메타인지 과정]], [[feedback]], [[scaffolding]]를 지원하기 위해 대화, 질문, 또는 프롬프트로 학습자를 끌어들이는 AI 구성 요소. [[intelligent-tutoring|지능형 튜터링 시스템]]은 그 **구조와 모형화**로 정의됩니다. 학습자가 아는 것을 추적하고 교수를 적응시키는 [[knowledge-tracing]], [[student-modeling|학생 모형화]], 교수법적 의사결정 논리의 진단적 중추. 단일 에이전트가 동시에 셋 모두일 수 있습니다. 예를 들어 [[conversational-ai-tutors-framework|대화형 AI 튜터]]는 CAI 에이전트(대화 인터페이스)이면서 교수 에이전트(튜터링 전략)로 기능하며 ITS 토대(학생 모형화) 위에 세워집니다. 이 구분이 중요한 것은 CAI 에이전트가 전혀 교수법에 기반할 필요가 없기 때문입니다. 평범한 FAQ 챗봇은 교수 에이전트나 튜터가 아닌 대화형 AI입니다.

**교수 에이전트 렌즈.** 교수 에이전트는 대화 매체를 사용해 교수 전략을 수행합니다. 자기 평가 이끌어내기, [[socratic-method|소크라테스식 질문]], [[agentic-ai|다중 에이전트]] 설계의 역할 특화 촉진(Teacher, Assistant, Classmate, Analyzer)이 그것입니다. 모든 CAI 에이전트가 교수 에이전트는 아니지만 둘은 크게 겹칩니다. CAI 에이전트의 엄브렐라 리뷰는 교수·학습 지원(97.1%)과 메타인지 발달(88.2%)이 CAI 응용을 지배함을 발견하여, 대부분의 교육 중심 CAI 에이전트가 교수법적으로 기능함을 뜻합니다. [[conversational-agents-novice-programmers-scoping-2025|초심 프로그래머 범위 검토]]는 이를 날카롭게 합니다. 대화 에이전트 23개 중 단 4개만이 설계를 [[learning-theories|학습 이론]]에 명시적으로 기반했습니다 — 대부분은 의도에서는 교수법적이었으나 토대에서는 그렇지 않았습니다.

**ITS 렌즈.** 지능형 튜터링은 원초적 대화 모형이 결여한 *[[cognitive-diagnosis|인지 진단]] 기계*를 제공합니다. [[conversational-ai-tutors-framework|대화형 AI 튜터 프레임워크]]는 검증된 ITS 기술이 생성형 튜터를 닻 삼아야 한다고 주장합니다. 지식 추적, 정서 탐지, 학생 모형화가 구조를 제공하고, [[generative-ai]]와 [[llm|LLM]]이 유연한 대화를 제공합니다. 이것이 핵심 설계 긴장입니다 — 대화형 AI는 자연스럽고 확장 가능한 상호작용을 제공하지만, ITS식 구조가 없으면 [[cognitive-offloading|과잉 비계]], 환각, 또는 학습자의 생산적 고군분투를 우회할 위험이 있습니다. [[measuring-llm-tutors-teach-vs-solve]]와 [[stanford-evidence-base-ai-k12-2026]] 같은 연구는 교수법 중심 기준(유도 질문, 보정된 힌트)이 명시적으로 설계되어야 함을 보여 줍니다.

**요컨대:** 대화형 AI는 **인터페이스/매체**이고, 교수 에이전트는 **역할**이며, 지능형 튜터링은 **기저의 모형화와 교수 논리**입니다. 교육적으로 가치 있는 CAI 에이전트는 셋 모두의 교차점에 놓입니다 — 인터페이스에서는 대화형이고, 의도에서는 교수법적이며, 학습자의 모형화에서 튜터와 같습니다.

## 실천적 지침

교수, [[motivation]], [[metacognition]]를 지원하기 위해 — 단순히 질문에 답하기 위해서가 아니라 — 대화 에이전트를 선택하고, HCI 기반의 참여적이고 사용자 중심의 상호작용을 위해 설계하라. CAI를 [[ai-literacy]] 지도와 학습자의 인지적 생산성을 유지하는 [[feedback]]와 짝지어 [[cognitive-offloading|과의존]]을 경계하라. AI 리터러시와 사용성을 명시적으로 다루라 — 이것들이 — 일반적 디지털 기술이 아니라 — 도입과 비사용을 이끕니다([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]) — 그리고 배치를 명확한 AI 활용 정책, 평가 라벨, 연수와 짝지어라. CAI를 교수법적 결과 — 과제 완수만이 아니라 — 에서 평가하고, 형평성과 [[accessibility]]를 처음부터 사후 대책이 아니라 계획에 포함하라.

- **학생이 대화 에이전트와 실제로 이야기하는 방식 — 6범주 무관여 체계:** [[rho-disengaged-conversational-behaviors-2026|Rho et al. (2026)]]는 지식 그래프에 RAG로 근거를 두고(고군분투하는 중학생으로 자리매김) 학생의 설명을 비평하는 멘토 에이전트와 짝지어진 GPT-4-Turbo 가르칠 수 있는 에이전트를 Math Nation의 Algebra와 Geometry 수업에 내장하고, 246명 학생의 발화 5,522건을 부호화했습니다. 참여(발화의 75.7%) 너머에서 이들은 False Answering(12.8%), Withholding(8.9%), Random/Noisy(2.1%), Mirroring(0.6%), Mocking(0.3%), Ghosting(0.2%)을 밝혀냈으며 — Mirroring(에이전트의 텍스트를 베끼는 것)은 데이터에서 귀납적으로 드러났습니다. 분류는 인간 참여형이었습니다. 두 채점자가 발화 1,682건에 주석을 달아(범주별 κ = 0.704–0.905) 미세 조정된 LLaMA 3 분류기를 훈련시켜(보류 스레드에서 가중 F1 = 0.910) 남은 발화 3,840건에 꼬리표를 붙였습니다. 이어 과정 수준의 경쟁 위험(competing-risks) 분석은 대부분의 무관여가 몇 차례 안에 해소되나 Withholding은 지속됨을 보여 주었습니다 — 이는 에이전트 응답을 설계할 만한 신호입니다.
## 인용

Ganguly, A., Mehjabin, N., Malik, A., & Johri, A. (2025). [*Conversational AI agents in education: an umbrella review*](https://doi.org/10.1007/s43681-025-00916-0). *AI and Ethics*, 6, 72.

## 연결된 개념
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[generative-ai]]
- [[llm]]
- [[student-ai-interaction]]
- [[ai-literacy]]
- [[human-ai-collaboration]]
- [[cognitive-offloading]]
- [[feedback]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[language-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[equity-in-ai-education]]
- [[reducing-ai-misuse]]
- [[speech-and-voice-technologies]]
- [[parents-and-families]]
## 연결된 문서

- [[rho-disengaged-conversational-behaviors-2026]] — 학생-AI 대화에서 나타나는 비참여적 대화 행동 (Rho et al. 2026)

- [[mata-sustaining-ai-enabled-student-support-2026]] — AI 기반 학생 지원의 지속: 기관 챗봇의 4년 도입 및 영향 연구 (Mata, Russell & Page 2026)
- [[usher-faraon-who-grades-best-2026]] — 프로젝트 질 수준에 따른 ChatGPT, 동료, 교수의 채점 비교 (Usher & Faraon 2026)
- [[llm-agents-5e-esl-grammar-2026]] — ESL 문법 습득을 위한 5E 틀 기반 LLM 에이전트 (Yang et al. 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[colbran-student-perspectives-genai-chatbots-2026]] — 생성형 AI 챗봇에 대한 학생의 관점 (혼합 방법)
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — AI 챗봇 도입 페르소나
- [[conversational-ai-agents-umbrella-review-2026]] — 교육에서 대화형 AI 에이전트에 관한 엄브렐라 고찰
- [[conversational-ai-tutors-framework]] — 대화형 AI 튜터 틀
- [[measuring-llm-tutors-teach-vs-solve]] — LLM 튜터가 가르치는지 풀이하는지 측정하기
- [[stanford-evidence-base-ai-k12-2026]] — 튜터링 특유의 AI 대 일반적 AI
- [[rethinking-scaffolding-llm-tutors]] — LLM 튜터에서 비계 다시 생각하기
- [[conversational-agents-novice-programmers-scoping-2025]] — 프로그래밍 초보자를 위한 대화형 에이전트에 관한 범위 검토
- [[ba-ai-agents-cscl-review-2026]] — 컴퓨터 지원 협력 학습에서의 AI 에이전트에 관한 고찰
- [[lee-wu-gender-motivation-genai-achievement-2026]] — 생성형 AI 성취도에서의 성별과 동기
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — 초등 독서 토론을 위한 역할 적응형 AI 동반자: 고정 역할 에이전트의 정서적 한계 (Liao 2026)
- [[xu-genai-collaborative-space-2026]] — 소집단 역학에서 에이전트이자 협력적 공간인 생성형 AI (Xu et al. 2026)
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[culturally-aware-student-stress-chatbot-2026]] — NLP와 기계학습을 활용한 파키스탄 대학생의 스트레스 감지와 웰빙 지원을 위한 문화를 인식하는 AI 챗봇
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI 튜터링과 인간 튜터링이 동등한 GRE 학습 이득을 산출함

- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: 문제 해결 중 표적화된 AI 도움 요청을 위한 비계
