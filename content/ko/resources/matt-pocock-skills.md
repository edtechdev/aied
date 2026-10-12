---
title: "실무 엔지니어를 위한 스킬"
created: "2026-09-24T05:57:40-04:00"
updated: "2026-09-27T03:31:33-04:00"
type: resource
summary: "여러 세션에 걸쳐 동작하는 학습 스킬, 끈질긴 질문을 던지는 스킬, 그리고 에이전트가 따라갈 수 있는 문서 작성 지침을 포함하여, Matt Pocock이 공개한 작고 조립 가능한 에이전트 스킬 모음입니다."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**실무 엔지니어를 위한 스킬(Skills for Real Engineers)**은 Matt Pocock이 공개한 에이전트 스킬 디렉터리입니다. Claude Code, Codex 또는 다른 에이전트에 설치되는 작고 조립 가능한 지시 파일의 모음으로, 통째로 도입하기보다는 수정해서 쓰도록 만들어졌습니다. 이 모음의 대부분은 소프트웨어 작업을 위한 것이지만, 그 가운데 몇 가지는 코드가 아니라 가르치고 질문하기 위해 만들어진 교육용 도구입니다.

가장 분명한 예는 `teach`입니다. 이 스킬은 여러 세션에 걸쳐 동작하며 작업 디렉터리를 상태를 지닌 교육 작업 공간으로 다루기 때문에, 학습자의 진도와 풀리지 않은 질문이 매번 새로 시작되지 않고 대화 사이에 유지됩니다. `grill-me`과 그 기반이 되는 `grilling` 기본 요소는 계획의 모든 분기가 해결될 때까지 사용자에게 끈질기게 질문을 던지는데, 이는 대화의 분위기가 아니라 재사용 가능한 절차로 자리 잡은 [[socratic-method|소크라테스식 질문]]입니다. `wait-what`은 메시지가 전달되지 않는 순간 즉시 반응하여 빠진 맥락을 더해 평이한 언어로 다시 설명합니다. 설명이 처음에 빗나가는 모습을 지켜본 적이 있다면 어떤 교수자도 알아보는 움직임입니다. `writing-for-agents`는 [[prompt-engineering|에이전트]]가 따라갈 수 있는 문서를 작성하는 방법을 다루며, 이는 이제 [[pedagogical-agent|AI]] 수업 자료에 대한 지시문을 쓰는 실질적인 형태가 되었습니다. `to-questionnaire`는 하나의 결정을 그것에 답할 수 있는 사람을 위한 질문지로 바꾸고, `handoff`는 대화를 다른 에이전트가 이어갈 수 있는 문서로 압축하며, `wizard`는 사람만이 수행할 수 있는 단계에 대한 대화형 둘러보기를 생성합니다.

## 채택하기 전에 알아야 할 것

모든 것이 [[open-source|오픈 소스]]이며 MIT 라이선스 하에 제공되므로, 지역 차원의 [[ai-literacy|AI 리터러시]]나 [[self-directed-learning|자율 학습]]의 출발점으로 자유롭게 가져다 쓸 수 있습니다. 도입 규모는 크고 빠르게 움직입니다. 2026년 9월 확인 시점에 별은 약 270,000개, 포크는 23,000개였으며, 가장 최근 커밋은 2026년 9월 18일이었습니다. 다만 한계는 범위입니다. 이 스킬들은 [[human-ai-collaboration|엔지니어]]의 작업 맥락을 전제로 하고, 엔지니어링·생산성·지원 중단(deprecated)·진행 중 버킷으로 나뉘어 있어 일부 항목은 명시적으로 미완성이거나 폐기된 것입니다. 또 README는 뉴스레터 가입 화면을 겸합니다. 가르치고 질문하는 스킬들을 이전 가능한 부분으로 보고, 학생에게 내놓기 전에 그 어느 것이든 다시 써야 할 것이라고 예상하십시오.

## 연결된 개념
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
