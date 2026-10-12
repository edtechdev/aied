---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-09-20T13:49:11-04:00"
type: resource
summary: "블록 기반 e러닝 수업을 위한 개방형 일반 텍스트 형식과, 그 형식으로 수업·평가·전체 코스 묶음을 작성하는 에이전트 스킬을 제공합니다."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**LESSON.md**는 블록 기반 eLearning 콘텐츠를 위한 개방형 형식입니다. 텍스트, 이미지, 지식 확인을 위한 `:::` 지시어가 있는 YAML 프론트매터의 Markdown 파일로, 사람이 읽을 수 있고 어떤 도구로도 파싱할 수 있습니다. 이 형식이 존재하는 이유는 강좌 콘텐츠가 대개 하나의 저작 도구 안에 갇혀 있고, [[llm|대규모 언어 모델]]은 실제로 읽을 수 있는 수업에만 도움을 줄 수 있기 때문입니다.

## 이 도구로 할 수 있는 것

어떤 텍스트 편집기에서든 수업을 작성하고 복사·붙여넣기와 재서식 없이 이 형식을 지원하는 어떤 도구로든 가져올 수 있습니다. 대화형 요소 — 시도 횟수 제한과 답안별 피드백이 있는 선다형 지식 확인 — 은 GUI가 아니라 간단한 속성으로 표현됩니다. 번들 루트에 있는 companion `ASSESSMENT.md`가 강좌의 채점되는 [[assessment]]가 됩니다. 이 프로젝트는 Claude, Codex 또는 다른 [[agentic-ai|에이전트]]에게 형식을 가르치는 `lesson-md` 스킬도 제공하므로, 강좌를 일상 언어로 설명하면 수업, 평가, 그리고 전체 번들이 반환됩니다.

## 누구를 위한 것인가

콘텐츠가 도구 교체 이후에도 살아남기를 원하는 교수설계자와 강좌 제작자, 사용자가 이미 이해하는 가져오기·내보내기 형식을 원하는 eLearning 벤더, 그리고 읽을 수 있는 형식 위에 AI 지원 저작을 구축하려는 모든 사람을 위한 것입니다. 기여자로는 LXD Integral의 Dan Bashaw가 있으며, 이 형식에는 v1.8까지의 공개 변경 로그가 있습니다.

## 연결된 개념

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
