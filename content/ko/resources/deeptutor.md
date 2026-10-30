---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-09-20T17:30:00-04:00"
type: resource
summary: "에이전트형 튜터링 프레임워크 DeepTutor의 오픈소스 공개 버전: 검사 가능한 학습자 메모리를 갖추고, 튜터링·문제 생성·숙달 연습·연구·시각화를 하나의 워크스페이스에서 다룹니다."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**DeepTutor**는 [[intelligent-tutoring|DeepTutor 연구]]에서 평가된 튜터링 프레임워크의 오픈소스 구현이며, 그 논문의 범위를 훨씬 넘어 일반적인 에이전트 네이티브 학습 워크스페이스로 성장했습니다. 튜터링, 문제 풀이, 퀴즈 생성, 숙달 연습, 연구, 시각화가 하나의 기능 런타임과 하나의 세션 컨텍스트를 공유하므로, 문제를 풀면서 구축된 학습자 프로필이 뒤따르는 설명과 연습 문항에 영향을 줍니다.

## 이 도구로 할 수 있는 것

Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading, Immersive Watching의 열 가지 모드가 같은 런타임 위에서 동작하며, 재사용 가능한 지식 베이스, 도서, 초안, 노트북, 문제 은행, 페르소나를 끌어다 씁니다. 검색은 의도적으로 다중 엔진으로 구성되어 있습니다: LlamaIndex, PageIndex, GraphRAG, LightRAG 위의 버전 관리되는 RAG 라이브러리 또는 원격 LightRAG 서버, 자체 호스팅하는 WeKnora 베이스, Tencent IMA 또는 MarginNote 라이브러리, 연결된 Obsidian 볼트가 그것입니다. 메모리는 불투명하지 않고 검사할 수 있습니다. L1 추적, L2 표면 요약, L3 종합이 보이고 편집 가능하며, Memory Graph가 각 요약을 그 뒤에 있는 증거와 연결합니다. `deeptutor` 바이너리는 터미널 REPL을 제공하고 도구로 이를 구동하려는 어떤 에이전트에게든 NDJSON을 스트리밍하며, EduHub 커뮤니티는 설치 가능한 스킬을 배포합니다.

## 누구를 위한 것인가

논문이 다루는 프레임워크를 실제로 배포할 수 있는 버전을 원하는 고등교육 교수진과 연구자, 플러그인 가능한 런타임 위에 구축하는 개발자, 자신의 인스턴스를 직접 운영할 의향이 있는 자기주도 학습자를 위한 것입니다. 문서는 deeptutor.info에 있습니다.

## 참고 사항

Apache 2.0 라이선스이며, 2026년 9월 기준 버전 1.6.9에 GitHub 스타 약 40,000개입니다. 뒤에 있는 공개된 평가 — TutorBench 벤치마크에서 개인화 지표 기준 강력한 베이스라인 대비 평균 10.8% 향상, 다섯 개 백본 모형에 걸쳐 일반 에이전트 추론 29.4% 향상 — 은 [[zhao-deeptutor-agentic-personalized-tutoring-2026|문서 페이지]]에 요약되어 있으며, 거기에 적힌 한계는 여기에도 그대로 적용됩니다. 다른 오픈소스 AI 스택과 마찬가지로 모형 제공자의 키는 사용자가 직접 공급하며, 데스크톱 또는 서버 배포에는 Python 3.11과 Node가 필요합니다.

## 연결된 개념

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
