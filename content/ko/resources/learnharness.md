---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "AI 에이전트가 학습자가 이미 이해한 것을 측정하고, 목표까지의 의존성 지도를 계획하고, 한 번에 하나의 추론 단계로 가르치고, 연습을 적응시키는 무료 오픈소스(AGPL-3.0) 데스크톱 앱으로, 명제와 추론 사슬의 지속적인 지식 그래프를 갖추어 이후 세션이 처음부터 다시 시작하지 않고 그것을 읽습니다."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**LearnHarness**는 [[agentic-ai|에이전트 지원]] 학습을 위한 데스크톱 애플리케이션으로, 수업을 주제 목록이 아니라 [[prior-knowledge|학습자가 이미 이해한 것]]을 중심으로 조직합니다. 이 프로젝트는 네 가지 동작을 설명합니다. **측정** — 목표가 의존하는 개념들을 탐침하여 이해가 끝나는 지점을 찾습니다. **계획** — 목표까지의 의존성 지도를 도출하고 그것을 수업 지도로 보여 줍니다. **가르침** — 예측–설명–확인 리듬을 따라 한 번에 하나의 추론 단계씩 진행하여, 혼동을 그 위에 무엇이든 쌓기 전에 고칩니다. **연습** — 학습자 자신의 어려움을 겨냥한 문제의 흐름입니다.

## 이것으로 할 수 있는 것

가장 특징적인 입력은 사고 필드입니다. 학습자는 답만 하는 것이 아니라 자기 추론과 불확실성을 쓰거나 말하며, 프로젝트는 이것을 정오 기록이 아니라 에이전트가 추론을 그려 보는 방식으로 다룹니다. 또한 백그라운드에서 질문을 조사하고, 시각적 설명을 생성하며, 상호작용형 시연을 만들 수 있습니다.

축적되는 것은 명제와 추론 사슬의 [[knowledge-graph|지식 그래프]]로, 출처 세션에 연결되고 이후의 교수 및 연습 에이전트가 맥락으로 읽습니다. 노트를 가져올 수도 있습니다. 프로젝트는 그래프가 능력에 대한 평가가 아니라 아이디어와 연결을 저장한다고 말합니다.

## 누구를 위한 것인가

어려운 자료를 다루는 독립 학습자, 그리고 에이전트 네이티브 [[intelligent-tutoring|AI 튜터]]의 프롬프트와 상태를 들여다볼 수 있을 때 그것이 어떤 모습인지 보고 싶은 교수자나 개발자입니다. TypeScript로 작성되어 소스에서 실행되며, 테스트는 모델 호출 없이 결정적이라고 문서화되어 있습니다.

## 참고사항과 유의점

무료는 소프트웨어를 뜻할 뿐 추론을 뜻하지 않습니다. 학습자는 제공자 키, 구독, 로컬 Claude Code CLI 또는 OpenAI 호환 엔드포인트를 가져오고, 마크업 없이 제공자에게 비용을 지불합니다. 실시간 미터는 알려진 API 비용만 추정합니다. 기록과 대화, 키는 일반 파일로 기기에 남지만, 프로젝트는 로컬 저장이 곧 오프라인 처리를 뜻하지는 않는다고 경고합니다. 모델 요청과 선택적 받아쓰기, 웹 조사가 모두 외부 서비스에 닿기 때문입니다. Windows x64 설치 파일은 서명되어 있지 않아 Windows가 경고를 표시합니다. 효과 연구는 보고되지 않았으므로 근거는 측정된 결과가 아니라 제시된 논리에 기대고 있으며, 저장소는 2026년 11월 2일 확인 시 약 4,800개의 별을 받았습니다.

## 연결된 개념

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
