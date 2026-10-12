---
title: 기술
created: "2026-08-19T18:10:00-04:00"
updated: "2026-10-02T07:32:07-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
translation_of: concepts/ai-technologies
source_updated: "2026-10-02T07:32:07-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **기술** — 교육용 AI 시스템을 움직이는 모델, 아키텍처, 기법이며, 지식베이스의 기술적 층위 커버리지를 아우르는 상위 개념입니다. [[pedagogy]]와 [[learning-theories]]가 *교수와 학습이 어떻게 이루어지는가*를 다루고 [[ai-ed-evaluation]]가 *AI가 작동하는가*를 다룬다면, 이 페이지는 *기술*이라는 갈래를 붙잡습니다. 즉 AI 시스템([[llm|대규모 언어 모형]], [[generative-ai|생성형 AI]], [[multimodal|멀티모달 모형]], [[educational-robotics|로봇]])과 이를 만들고 통제하고 배포하는 데 쓰이는 기법([[prompt-engineering]], [[rag|검색 증강 생성]], [[reinforcement-learning]], [[educational-nlp]], [[knowledge-graph|지식 그래프]], [[agentic-ai|에이전트형 오케스트레이션]])이 그것입니다.

## 생각해 볼 질문들

- 직접 LLM을 만들지 못하더라도 훌륭한 교수자가 될 수 있습니다. 그러나 이 페이지는 여러분의 기술적 선택이 AI가 교실에서 할 수 있는 일과 할 수 없는 일을 여전히 규정한다고 주장합니다. 코드를 결코 보지 않는다 하더라도, AI 도구의 기저 기술이 학생들이 배우는 방식을 조용히 바꿀 수 있는 한 가지 방식은 무엇인가요?
- 흔한 가정은 모델이 전부라는 것이지만, 검색 증강 생성(RAG)이나 프롬프트 엔지니어링과 같은 기법은 LLM 출력을 통제하고 근거에 붙잡기 위해 존재합니다. 계속 읽기 전에, AI에게 '더 정확하게' 또는 '이 출처를 사용해'라고 요청할 때 실제로 어떤 일이 벌어지고 있다고 생각하시나요?
- RAG는 환각을 줄이고 안전성을 높이는 핵심 기법으로 설명됩니다. AI의 답을 근거로 '붙잡는' 일이 가벼운 대화보다 교육에서 더 중요한 이유는 무엇이며, 그 근거가 무너질 때 어떤 문제가 생길 수 있을까요?
- 이 페이지는 기술적 선택이 교수법적 가정을 구현한다고 주장합니다. 소크라테스식 프롬프트로 만든 튜터는 학습자와 함께 추론하지만, 답을 생성하는 모형은 해법을 그냥 건네줄 수 있습니다. 특정 교수 철학을 '가정하는' 듯했던 AI 도구를 떠올려 보실 수 있나요? 그리고 그것이 실제로 가르치거나 배우고자 했던 방식과 일치했나요?
- 원시적인 정확성 너머로, 이 페이지는 AI 시스템을 신뢰성, 교수법, 형평성으로 평가해야 한다고 제안합니다. 사람들(교수자 상당수 포함)이 AI 도구가 '작동하는지' 판단할 때 기본적으로 쓰는 지표가 무엇이라고 보시며, 그 지표가 드러내는 것보다 숨기는 것이 더 많은 이유는 무엇인가요?
- 에이전트형 AI는 AI를 '프롬프트에 응답하는 도구에서 능동적인 협력자로' 옮겨 간다고 설명됩니다. 여러 단계 작업 흐름을 스스로 개시하고 조율하는 시스템이, 교수자 또는 학습자로서 여러분이 책임지는 바를 어떻게 바꿀 수 있으며, 누가 그것에 책임을 지게 됩니까?

## 들어가며

[[ai-education|교육에서의 인공지능]]은 특정한 기술 스택 위에서 돌아가며, [[teacher-role|교수자]]와 연구자가 스스로 시스템을 만들지 않더라도 그것을 이해하는 일이 중요합니다. 기술적 선택이 AI가 교실에서 할 수 있는 일과 할 수 없는 일, 그것이 지니는 위험, 그리고 그것을 평가하는 방법을 규정하기 때문입니다. 이 페이지는 지식베이스의 기술 개념 커버리지를 정리합니다. AI 시스템, 그것을 적응시키고 통제하는 기법, 그리고 기술적 층위가 교수법·평가·검증과 연결되는 방식입니다.

## 교육에서의 AI 시스템

- **대규모 언어 모형(LLM).** 현대 [[ai-education|AIED]]의 계산적 중추입니다. [[llm|LLM]]은 튜터링, 평가, 콘텐츠 생성을 위해 사람과 같은 텍스트를 생성하며, 지식베이스에서 가장 많이 참조되는 기술입니다. [[llm-training-and-fine-tuning|훈련과 미세 조정]]은 범용 LLM을 교육 용도에 맞춥니다.
- **생성형 AI.** 텍스트, 코드, 이미지, 그 밖의 콘텐츠를 산출하는 시스템의 더 넓은 범주입니다. [[generative-ai|생성형 AI]](주로 LLM에 의해 구동됨)는 현재의 [[ai-education|AIED]] 연구 물결 뒤에 있는 기술입니다. [[multimodal|멀티모달 모형]](텍스트, 이미지, 오디오)과 [[simulation]]도 함께 보십시오.
- **로봇과 구현된 시스템.** [[educational-robotics|교육에서의 로봇]]은 구현되어 있고 때로 사회적인 존재감을 더합니다. 계산적 사고를 위한 프로그래밍 키트, 그리고 튜터링과 스토리텔링, 역할 놀이를 위한 휴머노이드·사회적 로봇이 그것입니다. 로보틱스는 [[agentic-ai|에이전트형 AI]]와 [[human-in-the-loop-ai|인간 참여형]] 설계와 겹치는 별도의 기술 갈래입니다.
- **지식 기반 시스템.** [[knowledge-graph|지식 그래프]]와 [[educational-nlp|교육 분야 NLP]]는 영역 지식을 표상하고 처리하며, 근거에 붙잡히고 설명 가능한 튜터링을 위해 LLM과 점점 더 결합됩니다.

## 기법과 방법

- **프롬프트 엔지니어링.** [[prompt-engineering|프롬프트 엔지니어링]]은 교수자와 개발자가 LLM 출력을 다듬는 방식이며, LLM 상호작용에서 오프로딩과 통제가 실행되는 주된 메커니즘입니다.
- **검색 증강 생성(RAG).** [[rag|RAG]]는 LLM 출력을 검색된 지식에 근거에 붙잡아 환각을 줄이고 정확성을 높입니다. [[pedagogical-safety|안전한]] 교육 배포를 위한 핵심 기법입니다.
- **강화 학습.** [[reinforcement-learning|강화 학습]]은 행위자가 시간에 걸쳐 행동을 최적화하도록 훈련하며, [[adaptive-learning|적응형 시스템]]과 [[game-based-learning|게임 기반 학습]]에 쓰입니다.
- **에이전트형 오케스트레이션.** [[agentic-ai|에이전트형 AI]] 시스템은 여러 단계의 작업 흐름을 계획하고 실행합니다. 흔히 여러 전문화된 에이전트를 조율하며([[agentic-ai|다중 에이전트 시스템]] 참고), AI를 프롬프트에 응답하는 도구에서 능동적인 협력자로 재편하고 있습니다.
- **교육 에이전트 스택은 최전선에 뒤처져 있습니다.** [[agentic-ai-education-scoping-review|Wang 외(2026)]]는 474편의 연구를 지도화하여 GPT 계열 모델과 LangChain이 지배적이면서 거버넌스를 갖춘 도구 오케스트레이션, 지속적 메모리, 장기적 계획 수립은 거의 부재함을 밝혔고, 474편 중 138편(29%)만이 교육 이론에 의존했습니다.
- **모형 훈련과 적응.** [[llm-training-and-fine-tuning|LLM 훈련과 미세 조정]], [[educational-llm-alignment|교육을 위한 정렬]], [[cstutorbench-slm-tutors|소규모 언어 모형 적응]]은 범용 모형을 교육에 특화시킵니다. 다만 지식베이스의 근거는 결정 순서에서 훈련보다 [[rag|검색]]과 [[prompt-engineering|프롬프트]]를 앞세우는데, 잘 근거에 붙잡힌 프롬프트가 적응된 모형보다 값이 싸기 때문입니다.

## 기술적 층위가 이 분야와 연결되는 방식

기술 갈래는 지식베이스의 다른 주제들과 떼어낼 수 없습니다.

- **교수법:** 기술적 선택은 교수법적 가정을 구현합니다. [[intelligent-tutoring|튜터]]를 [[socratic-method|소크라테스식 프롬프트]]로 만들면 학습자와 함께 추론하는 반면, 답을 생성하는 모형은 직접 제시로 기본값을 택할 수 있습니다([[pedagogy|교수법과 교수 전략]] 참고).
- **평가와 검증:** [[ai-ed-evaluation]]과 [[benchmark|벤치마크]]는 AI 시스템이 실제로 작동하는지를 판단하며, [[assessment]]과 [[automated-assessment]]는 채점과 문항 생성을 위해 기술 스택을 씁니다.
- **책임 있는 사용:** 기술적 기법은 [[reducing-ai-misuse|AI 오용 줄이기]]의 핵심입니다. [[rag]] 근거 확보, 가드레일, [[prompt-engineering]] [[scaffolding]], 그리고 [[human-in-the-loop-ai|인간 감독]]이 AI가 학습을 뒷받침하는지 아니면 해치는지를 규정합니다([[cognitive-offloading]], [[hallucination-risk]]).

## 교육에서의 인공지능에 대한 시사점

- **기술 리터러시는 비판적 사용을 뒷받침합니다:** 기저 모형과 기법을 이해하는 것은 교수자와 학습자가 AI를 잘 쓰고 비판적으로 평가하는 데 도움이 됩니다([[ai-literacy]] 참고).
- **교수법적 의도로 기술을 선택하십시오:** AI 시스템과 기법은 [[pedagogy|교수 전략]]을 따라야 하며, 그 반대가 되어서는 안 됩니다.
- **기술적 층위를 평가하십시오:** [[ai-ed-evaluation]]과 [[benchmark]] 연구는 AI 시스템을 신뢰성, 교수법, [[equity-in-ai-education|형평성]]으로 평가하며, 두드러진 정확성만으로 평가하지 않습니다.
- **로봇과 에이전트도 스택의 일부입니다:** [[educational-robotics|구현된]] 및 [[agentic-ai|에이전트형]] 시스템은 텍스트 너머로 기술적 레퍼토리를 확장하며, 고유한 설계와 안전 고려사항을 가져옵니다.

## 연결된 개념

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## 연결된 문서

- [[agentic-ai-education-scoping-review]] — 교육에서의 에이전트형 AI에 대한 범위 검토
- [[genai-meta-analysis-programming-learning]] — 프로그래밍 학습에서 GenAI의 생산성과 학습 효과에 대한 메타분석
- [[cstutorbench-slm-tutors]] — 소규모 언어 모형 튜터링 벤치마크
- [[educational-llm-alignment]] — 교육을 위한 LLM 정렬
- [[eduguard-safe-rag-llm-tutor]] — RAG 기반 LLM 튜터에 가드레일 적용
- [[hazra-safetutors-pedagogical-safety-2026]] — AI 튜터의 안전성과 위해
- [[elbench-education-llm-benchmark-2026]] — 교육 LLM 벤치마크
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini 생성형 사회적 로봇
- [[benzion-ai-physics-simulations-virtual-lab]] — 교실을 위한 LLM 생성 물리 시뮬레이션
