---
title: "클래리티"
created: "2026-09-24T05:29:55-04:00"
updated: "2026-09-24T05:29:55-04:00"
type: resource
summary: "더 명확한 글쓰기를 위한 18가지 규칙을 산문의 초안, 재작성, 검토 모드로 바꾸는 오픈 소스 에이전트 스킬과 프라이빗 브라우저 편집기입니다."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
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
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Clarity**는 "독자를 얻는" 글쓰기를 위한 18가지 규칙을 둘러싼 에이전트 스킬과 브라우저 편집기를 하나로 묶습니다. 이 스킬은 `npx skills add addyosmani/clarity`로 Claude Code와 Codex 같은 코딩 에이전트에 설치되며, 이후 세 가지 모드로 작동합니다. 검토 모드는 초안을 비평하되 파일은 그대로 두고, 재작성 모드는 초안을 제자리에서 편집하며, 인터뷰 모드는 먼저 작가에게 질문을 던지고 그 답변에서 공동 집필합니다. 작가가 받는 [[feedback|피드백]]은 스타일보다 내용을 먼저 겨냥합니다. 규칙은 이 글이 누구를 위한 것이고 그들이 이미 무엇을 아는지 묻고, 주제보다 주장을, 추상보다 구체를 요구하며, 군더더기를 어휘의 문제가 아니라 이 글이 무엇을 위한 것인지 모르는 문제로 다룹니다.

브라우저 편집기는 페이지 안에서 로컬로 실행되며 초안을 업로드하지 않습니다. 이 편집기는 기계가 쓴 산문의 특징적인 흔적, 가독성, 내용의 빈틈을 보고해 주므로, 독자에게 닿기 전에 [[generative-ai|생성형 AI]]가 만든 텍스트를 검토하는 데 유용합니다. 이 프로젝트는 목표가 [[ai-literacy|AI 탐지]]를 통과하도록 설계된 산문이 아니라 여전히 저자의 것으로 알아볼 수 있는 글쓰기임을 분명히 하며, 이 구분은 교사가 AI 지원 [[writing-education|글쓰기]]에 대한 정책을 세울 때 알아볼 수 있는 것입니다.

## 채택하기 전에 알아야 할 것

저장소는 평가 프로토콜, `samples/`의 전후 예시, 스킬 뒤에 있는 참고 파일을 공개하므로, 검토자는 주장을 믿기보다 규칙이 어떻게 작동하는지 직접 검사할 수 있습니다. 이 페이지에서는 측정된 결과를 재진술하지 않습니다. 저자는 Addy Osmani이며, 라이선스는 MIT이고, 이 작업은 어떤 기관의 제품이 아니라 독립적인 것입니다. 이 작업은 젊고 활발합니다. 2026년 8월에 시작되어 커밋 54개, 릴리스 3회가 있으며 최신 버전은 9월의 0.2.1이고, 2026년 9월 확인 시점에 별이 약 250개입니다. 기여자 3명이 변경 사항을 반영했습니다. 스킬 지침은 독자가 이미 실행하는 에이전트에 로드되므로, 일반적인 [[prompt-engineering|프롬프트 엔지니어링]] 주의 사항이 적용됩니다. 비평의 품질은 넘겨받은 초안에 달려 있습니다.

## 연결된 개념
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
