---
title: 컴퓨팅 사고
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
translation_of: concepts/computational-thinking
source_updated: "2026-10-26T06:45:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **컴퓨팅 사고** — 문제를 부분으로 나누고, 패턴을 인식하고, 본질을 추상화하고, 절차를 설계하는 문제 해결 접근 방식입니다. AI 교육에서 컴퓨팅 사고는 AI 시스템을 이해하기 위한 전제 조건이면서 동시에 AI 도구가 기르는 것을 도울 수 있는 기술이기도 합니다.

## 생각해 볼 질문들

- 문제를 부분으로 나누고, 패턴을 찾고, 핵심을 추상화하고, 단계를 설계해서 풀 때 — 당신은 컴퓨터 없이도 이미 컴퓨팅 사고를 하고 있습니다. 최근에 이것을 어디에서 해 보셨습니까?
- 흔한 가정은 컴퓨팅 사고가 코딩이나 '컴퓨터 활용 능력'과 같은 것이라는 것입니다. 둘이 어떻게 다를 수 있으며, 그 차이가 그것을 가르치는 방식에 왜 중요할 수 있습니까?
- 연구는 학생들의 기초 개념 결여 — AI 도구 자체가 아니라 — 이 AI 제안을 판단하는 능력을 제한한다고 제안합니다. 학습자가 AI의 산출물을 비판적으로 평가하려면 그에 앞서 무엇을 이미 이해하고 있어야 합니까?
- 컴퓨팅 사고가 학습자를 AI 산출물의 수동적 소비자로부터 AI와 함께 *만들고*, *비평하고*, *설계하는* 쪽으로 옮겨야 한다는 주장도 있습니다. 학생을 소비자가 아니라 생산자로 대하는 교실은 실제로 어떤 모습이겠습니까?
- 생성 AI는 이제 학생의 컴퓨팅 사고 성장을 채점할 수 있습니다 — 그런데 사람과 AI 모두 가장 어려운 구성개념인 시스템 사고에서 고전합니다. 평가의 자동화는 어디서 멈춰야 한다고 생각하시며, 왜 그렇습니까?
- 로보틱스 연구는 개념이 명시적으로 드러나고 교육과정에 연결될 때에만 컴퓨팅 사고가 발달하며, 고립된 기술 연습으로 다루어질 때는 그렇지 않음을 발견합니다. 밑에 깔린 사고에 이름 붙이지 않은 채 '기술 기능'만 가르치는 것의 위험은 무엇입니까?

## 들어가며

### AI 시대 교실에서의 컴퓨팅 사고

지식베이스의 연결된 문서들은 한 가지 핵심 주장으로 수렴합니다: 컴퓨팅 사고(CT)는 학생이 AI와 비판적으로 맞서는 데 필요한 개념적 기반이며, 동시에 잘 설계된 AI 지원 학습에 의해 가장 직접적으로 깊어지는 기술이기도 합니다. 아래에서 증거는 연결된 문서들에 근거한 네 가지 주제로 묶입니다.

- **AI 리터러시와 비판적 참여의 기반으로서의 CT.** 여러 연구는 학습자가 AI 산출물을 단순히 소비하는 데 그치지 않고 평가할 수 있게 하는 것이 바로 CT라고 보여 줍니다. [[chat-debugging-human-ai-collaboration-circuits|채팅 디버깅 연구]]는 학부생이 LLM의 도움으로 아날로그 회로를 디버깅할 때 *기초 개념과 비판적 사고의 결여* — 도구가 아니라 — 가 제약 요인이었음을 발견했습니다. 학생에게 AI 제안을 판단할 핵심 아이디어가 없었기 때문입니다. [[llm-intervention-design-cs-review|LLM 개입 설계에 대한 검토]] 역시 [[cs-education]]이 구문 숙달보다 컴퓨팅 사고를 밀어붙이는 것이 효과적인 개입과 "도구 좌절"을 가르는 것이라고 결론짓습니다. 초기 아동기에서는 [[ai-play-framework-early-childhood-2026|AI-Play 프레임워크]]가 "AI는 부분들로 만들어진 시스템이다"와 "AI는 예시에서 배운다"를 가르침으로써, 플러그를 뽑은 놀이 중심의 [[ai-literacy]]를 쌓습니다 — 발달 단계에 근거한 CT의 첫 번째 층위입니다. 그리고 [[academic-league-of-ai-2026|AI 학술 리그]]는 [[project-based-learning]]을 통해 CT를 실제 시민 AI 프로젝트에 연결하여, [[ai-literacy]]를 실천 속에 새깁니다. 이것들을 함께 보면 CT가 AI 리터러시의 전이 가능한 인지적 핵심임을 제안합니다.
- **CT의 담체로서의 교육 로보틱스.** 로보틱스는 [[k-12]]와 [[stem-education]] 전반에 걸쳐 CT를 기르는 가장 많이 연구된 맥락입니다. [[computational-thinking-educational-robotics-secondary-2026|중등 연구]]는 CT 개념이 명시적으로 드러나고 고립된 기술 연습이 아니라 [[stem-education|STEAM]] 교육과정에 매핑될 때에만 교육 로보틱스가 문제 해결과 비판적 사고를 높인다고 주장합니다. [[game-based-gamified-robotics-education-review-2026|95개 연구에 대한 체계적 검토]]는 로보틱스가 CT, 창의성, 문제 해결을 기르며, [[game-based-learning]]이 비형식적 환경에 적합하고 게임화가 형식적 교실을 지배하며 프로젝트 기반 학습을 뒷받침함을 확인합니다. [[microbit-robotics-machine-learning-teacher-training-2026|교사 훈련 증거]]는 Micro:bit + 로봇 + 기계 학습을 결합한 개입이 초등 교사 교육에서 유의미한 CT 지식 향상(d = 0.638)을 낳았음을 보여 주며, 미래 교사가 CT를 가르칠 수 있도록 로보틱스를 내장해야 한다고 논합니다. LLM은 장벽을 더 낮출 수 있습니다: [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]]은 LLM과 로봇 시뮬레이션을 결합하여 초보자가 자연어로 로봇을 제어하게 함으로써, 저수준 코딩 없이도 CT가 내장된 로보틱스에 접근할 수 있게 합니다.
- **"더 유능한 동료"가 될 수 있는 AI는 자원이 부족한 로보틱스 수업에서 CT를 나를 수 있습니다.** 나이지리아 1학년 학부생 103명을 대상으로 한 14주 준실험은 근접 발달 영역 안에서의 AI 지원 문제 기반 학습(ChatGPT와 Teachable Machine 사용)이 사후 컴퓨팅 사고와 로보틱스 프로그래밍 성취에서 전통적 교수를 능가했으며, 성별의 조절 효과는 없음을 발견했습니다([[ai-pbl-computational-thinking-2026|AI-PBL 로보틱스 연구(2026)]]).
- **CT 평가와 발달을 위한 도구로서의 LLM.** [[generative-ai|생성 AI]]는 CT를 측정하고 비계를 대는 규모 있는 방법을 제공합니다. [[llm-computational-thinking-physics-2026|물리 CT 평가 연구]]는 LLM이 대규모 수강의 [[physics-education]] 수업에서 데이터 수행과 계산적 문제 해결 수행에서의 성장을 채점하는 데 인간 평가자와 거의 같은 수준이 될 수 있음을 보여 주었습니다 — 더 복잡한 시스템 사고 구성개념에서는 인간과 LLM 모두 고전하여, 자동화의 분명한 경계를 남겼습니다. [[visual-query-tracer-declarative-logic-learning|시각 질의 추적]]은 시각화가 추상적 계산에 어떻게 비계를 댈 수 있는지, CT 발달을 뒷받침하는 직관을 어떻게 만드는지를 보여 줍니다. [[student-misconceptions-conditionals-loops-taxonomy|조건문과 반복문 오해에 대한 분류]]는 [[scaffolding]]과 자동화된 오해 탐지를 위한 세밀한 표적을 제공하여 [[misconceptions]]에 연결됩니다. 그러나 이런 도구들은 교수법적 설계가 앞장설 때 가장 잘 작동합니다: [[llm-intervention-design-cs-review|CS 검토]]는 비계가 있는 피드백을 갖춘 학기 단위 "가상 교사" 설계가 CT를 지속적으로 향상시킨 반면, 구조화되지 않은 도구 접근은 좌절을 높였음을 발견했습니다.

구현이 자동화되면 내구적 역량은 달라집니다: 한 워크숍 보고서는 추상화, 컴퓨팅 사고, 그리고 "검증 스펙트럼"을 가르쳐야 할 기술로 지목하며, 제한 없는 GPT-4 접근이 연습 성과를 48% 높였으나 AI가 회수되자 시험 점수를 17% 낮춘 거의 1,000명 학생의 시행을 인용합니다([[reshaping-cs-education-genai|Lee 외(2026)]]).

- **K-12, 교사 교육, 평가 재설계 전반에 걸친 CT.** CT는 [[k-12]]에서 [[higher-ed]]까지 전체 스펙트럼에 걸쳐 있으며 평가를 재편하고 있습니다. 초기 아동기 쪽 끝에서는 AI-Play가 CT와 AI 리터러시를 유아(K)–2학년 학습자와 비기술 가족에게 확장합니다; 대학 쪽 끝에서는 [[genai-oop-programming-assessments-2026|OOP 평가 연구]]가 2026년 GenAI 시스템이 실제 프로그래밍 시험에서 평균 학생을 능가하면서도 인터페이스, 추상 클래스, 상속에서는 여전히 실패함을 발견했습니다 — CT가 자동화하기에 여전히 어려운 바로 그 지점을 표시하는 반복되는 개념적 공백입니다. [[solving-vs-evaluating-genai-solutions|무작위 A/B 교차 연구]]는 평가와 비평 과제가 생성 과제와 비슷한 결과를 낳아, CT가 결함 있는 AI 해법을 판단함으로써 행해질 수 있음을 보여 주었습니다 — 비록 그 이득에는 의도적인 비계가 필요합니다. 이 모든 것의 밑에는 교사가 있습니다: microbit 연구는 CT 교수를 [[teacher-education]]에 직접 연결하고, [[hashmi-socratic-physics-chatbot-2025|소크라테스식 챗봇 연구]]는 CT가 요구하는 정밀한 문제 형식화를 측정 가능한 강좌 성과에 묶습니다.

- **검증된 도구가 CT가 가장 어려운 곳을 짚어 냅니다.** 증거 중심 설계로 제작되고 461명의 AI 프로그래밍 학생에 대한 문항 반응 이론으로 검증된 34문항 컴퓨팅 사고 검사는 난이도를 교안 전체에 고르게 퍼뜨리지 않고 데이터 표현, 논리 연산자 배열, 반복 구조에 집중시켰습니다([[zhang-ct-ai-training-test-2026|Zhang & Zhang(2026)]]).

### AI 소비자로부터 생산자, 창작자, 설계자로의 전환과 CT

AI 시대 CT의 중심 목표는 학생과 교수를 AI 산출물의 *수동적 소비* 너머로, AI와 함께 그리고 AI를 위해 *만들고, 구축하고, 설계하는* 쪽으로 옮기는 것입니다 — CT를 구성주의 학습(만들면서 배우기)과 일치시키는 의제입니다. 지식베이스의 연결된 문서들은 이 생산자/창작자/설계자 전환을 점점 더 명시적으로 만듭니다. [[ai-writes-code-student-writes-model-2026|모형 저자 연구]]는 GenAI와의 구성을 통한 학습을 측정 가능한 "모형 저자됨" 과정으로 다시 틉니다 — 학생이 AI가 생성한 코드나 답을 소비하는 데 그치지 않고 AI 모형을 저작하고, 디버깅하고, 반복합니다. [[code-to-learn-genai-artifact-construction-2026|CtL-GenAI 프레임워크]]는 이것을 GenAI 시대의 구성주의로 구현하여, 학생이 AI로 만드는 산출물을 CT 발달의 엔진으로 다룹니다. [[computational-thinking-ai-agent-creation|AI 에이전트 창작을 통한 CT]]는 AI 에이전트를 설계하는 것 — 단순히 쓰는 것이 아니라 — 이 분해, 추상화, 알고리즘적 추론을 직접 행하게 함을 보여 줍니다.

새로운 메타 분석적 증거는 이 그림을 날카롭게 합니다. [[astor-computational-thinking-meta-review-2026|128개의 CT 체계적 검토에 대한 메타 검토]]는 계산적 단계와 알고리즘을 써서 문제를 푸는 추상 모형에 의한 추론이라는 CT의 통일된 정의로 분야가 수렴하고 있음을 발견합니다 — 생산 지향 학습이 요구하는 바로 그 종류의 모형 만들기(답 소비가 아니라) 사고입니다. [[tsingidou-ct-robotics-kindergarten-2026|CT-유치원 로보틱스 연구]]는 초기 아동기 학습자조차도 로봇과의 놀이 중심 구축을 통해 문제 기반 학습, 이야기 만들기, 비계를 써서 생산자가 됨을 보여 줍니다 — 기술을 단지 조작하는 것이 아니라 자신이 구성하는 것으로 보게 되는 발달 단계의 첫걸음입니다. 그리고 [[solving-vs-evaluating-genai-solutions|평가와 비평 연구]]는 CT가 결함 있는 AI 해법을 판단하고 디버깅함으로써 행해질 수 있음을 입증합니다 — 수동적 소비의 덫에 저항하는 AI 산출물에 대한 생산자적 태도입니다.

실천적 귀결은 CT 교수가 학습자가 AI로 *무언가를 만들도록* 설계되어야 한다는 것입니다 — 모형을 저작하고, 에이전트를 만들고, 산출물을 구성하고, AI 산출물을 비평하도록 — 완성된 해법을 받는 대신에. 이것은 CT를 깊게 하면서 [[ai-literacy]]를 단지 개념적인 것이 아니라 참여적이고 창조적인 것으로 쌓게 합니다. 교사는 그에 따라 AI 도구를 쓰는 데서 AI 강화 학습 활동을 설계하는 쪽으로 움직이는 지원이 필요합니다([[teacher-role]]과 [[professional-training]] 참조).

타인의 모형을 재사용하는 것은 생산자 태도에 속합니다. 출판된 AI 모형을 구현하는 것 — 선택하고, 설치하고, 실행하고, 검증하는 것 — 은 예상되는 각 실패에 대한 대안 경로와 함께 배울 수 있는 구조화된 기술로 가르쳐질 수 있으며, 프로그래밍 배경이 없는 세 명의 화학 BSc 학생이 4개월 안에 효소-기질 예측 모형을 재현하고 확장했습니다([[praise-non-programmer-ai-model-implementation-2026|Achterweust et al. (2026)]]).


### 실천적 지침

교육자에게 일관된 메시지는 CT가 수동적 AI 사용이 아니라 *명시적이고, 비계가 놓인, 관찰 가능한* 참여를 통해 발달한다는 것입니다. 로보틱스는 교육과정에 대한 명시적 CT 개념 매핑과 짝지으십시오; LLM은 [[simulation]], 자연어 제어, CT 성장의 규모 있는 평가에 쓰되 시스템 사고 같은 구성개념에 대한 인간의 판단은 남겨 두십시오; 그리고 평가를 재설계하여 날것의 생성보다 AI 산출물의 평가와 진단을 강조하십시오. 환경이 무엇이든 — 초기 아동기의 플러그를 뽑은 놀이, 중등 [[stem-education]]의 로봇, [[higher-ed]]의 가상 교사 — 활동을 구조화하여 학생이 분해, 패턴, 추상화, 알고리즘에 대해 추론해야 하게 하고 완성된 해법을 받지 않게 하십시오.

### 다른 개념들과의 연결

컴퓨팅 사고는 [[ai-literacy]]와 [[critical-thinking]] 아래에 놓인 공유된 인지적 기반이며, [[cs-education]]과 [[k-12]] 컴퓨팅의 교육과정 핵심이며, [[educational-robotics]], [[game-based-learning]], [[project-based-learning]]이 가장 잘 봉사하도록 설계되어야 하는 개념적 표적입니다. 그것은 [[llm|대형 언어 모형]]과 [[generative-ai]]가 비계 도구로 쓰일 때 깊어지며, 학생 오해 분류와 CT 인식 평가가 측정하고자 하는 기술입니다. 교사는 [[teacher-education]]과 [[professional-training]]을 통해 그것을 기르며, 그것은 [[physics-education]]와 [[stem-education|STEM]] 전반을 포함한 여러 영역에 걸쳐 전이됩니다.

- **컴퓨팅 사고는 AI 보조 학습을 예측합니다.** [[computational-thinking-aica-2026|8학년 학생]] 가운데 컴퓨팅 사고가 높은 학생은 AI 코딩 보조 강좌에서 낮은 CT 동료를 유의미하게 능가했으며, 보조 도구를 답 검색이 아니라 이해를 위해 사용했습니다.

## 흔한 오해

- **"AI는 컴퓨팅 사고의 필요성을 없앤다."** [[chat-debugging-human-ai-collaboration-circuits|채팅 디버깅 연구]]는 학부생이 LLM의 도움으로 회로를 디버깅할 때 **도구가 아니라 기초 개념과 비판적 사고의 결여가 제약 요인**이었음을 발견했습니다. CT는 학습자가 산출물을 받아들이기보다 평가하게 하는 것이며, 바로 그 역량이 AI 지원을 사용 가능하게 만듭니다.
- **"AI 지원은 자원이 부족한 환경의 격차를 해소한다."** 조건이 갖춰지면 그럴 수 있습니다. **나이지리아 1학년 학부생 103명을 대상으로 한 14주 준실험**은 AI 지원 문제 기반 학습(ChatGPT와 Teachable Machine)이 성과를 냈음을 발견했고, "더 유능한 동료"로서의 AI는 다른 지원이 없는 곳에서 CT를 나릅니다. 그러나 그것은 구조화된 개입에 관한 발견이지, 학생에게 챗봇을 주는 것의 속성이 아닙니다.
- **"LLM은 CT를 신뢰성 있게 평가할 수 없다."** [[llm-computational-thinking-physics-2026|물리 CT 평가 연구]]는 LLM이 대규모 수강 과목에서 데이터 수행과 계산적 문제 해결 수행의 성장을 채점할 때 **인간 평가자를 그대로 비출 수 있음**을 발견했습니다. CT 평가 확장의 장애물은 평가자 역량이었고 그 제약은 완화되고 있습니다. 이는 설계 문제를, 도구가 준수 여부가 아니라 CT를 측정하는지의 문제로 옮깁니다.
- **"CT는 로보틱스가 우연히 가르치는 코딩 기술이다."** **95개 연구의 체계적 검토**는 로보틱스가 CT, 창의성, 문제 해결을 기르지만 **환경이 결과를 조절한다**는 점도 확인합니다. [[game-based-learning|게임 기반]] 전달은 비형식적 환경에 맞고 게임화는 형식적 환경에서 다릅니다. CT는 고르지 않게 전이되는 실천의 집합이므로, 전이 주장에는 실제로 사용한 과제 설계가 함께 제시되어야 합니다.

## 연결된 개념

- [[cs-education]]
- [[stem-education]]
- [[ai-literacy]]
- [[k-12]]
- [[prompt-engineering]]
- [[adaptive-learning]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[project-based-learning]]
- [[physics-education]]
- [[scaffolding]]
- [[critical-thinking]]
- [[teacher-education]]
- [[simulation]]
- [[socratic-method]]
- [[misconceptions]]
- [[agentic-ai]]

## 연결된 문서

- [[ai-pbl-computational-thinking-2026]]
- [[computational-thinking-ai-agent-creation]]
- [[reshaping-cs-education-genai]]
- [[prompt-problems-nl-programming-mistakes]]
- [[llm-computational-thinking-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[visual-query-tracer-declarative-logic-learning]]
- [[llm-intervention-design-cs-review]]
- [[academic-league-of-ai-2026]]
- [[ai-play-framework-early-childhood-2026]]
- [[edusim-llm-robotic-simulation-education-2026]]
- [[computational-thinking-educational-robotics-secondary-2026]]
- [[microbit-robotics-machine-learning-teacher-training-2026]]
- [[chat-debugging-human-ai-collaboration-circuits]]
- [[student-misconceptions-conditionals-loops-taxonomy]]
- [[genai-oop-programming-assessments-2026]]
- [[game-based-gamified-robotics-education-review-2026]]
- [[solving-vs-evaluating-genai-solutions]]
- [[zhang-ct-ai-training-test-2026]] — 컴퓨팅 사고(AI 훈련 검사, CTAT)
- [[computational-thinking-aica-2026]] — 컴퓨팅 사고 수준과 AI 코딩 보조 도구(2026)
- [[ai-writes-code-student-writes-model-2026]] — 모형 저자됨: GenAI와의 구성을 통한 학습에 대한 이론과 측정
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: 산출물 구성을 위한 구성주의 프레임워크
- [[astor-computational-thinking-meta-review-2026]] — 128개의 체계적 검토에 대한 CT 메타 검토
- [[tsingidou-ct-robotics-kindergarten-2026]] — 유치원에서 로보틱스를 통한 CT에 대한 체계적 검토
- [[praise-non-programmer-ai-model-implementation-2026]] — PRAISE: 비프로그래머 과학자가 출판된 AI 모형을 구현하기 위한 재현 가능한 워크플로
