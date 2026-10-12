---
title: "교육 에이전트 스킬"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-09-23T21:05:00-04:00"
type: resource
summary: "교수법, 학습 과학, 커리큘럼, 평가를 아우르는 165개의 근거 기반 에이전트 스킬 라이브러리로, Claude, Codex, Hermes용으로 패키징되어 있습니다."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Education Agent Skills**는 교사, 학교 리더, 교육 도구를 만드는 사람들을 위한 165개의 에이전트 스킬 라이브러리입니다. 스킬은 교수법, 학습 과학, [[curriculum-design|커리큘럼]], 평가, 재설계를 아우르는 20개 영역으로 묶여 있으며, 각각 문서로 읽히는 것이 아니라 [[agentic-ai|에이전트]]가 로드하도록 작성되어 있습니다.

## 이 도구로 할 수 있는 것

스킬은 Claude Code, Codex, Hermes에 플러그인으로 설치하거나 폴더를 복사하는 방식으로 설치할 수 있어, 같은 라이브러리가 여러 에이전트 환경에서 작동합니다. 호스팅 MCP 서버는 이 컬렉션을 로컬에서 스킬을 설치할 수 없는 에이전트를 위한 도구로 제공하며, 저장소에는 레지스트리와 사전 빌드된 번들을 모두 포함하고 있어 서버가 배포 시점에 개별 파일을 읽지 않고도 컬렉션을 제공할 수 있습니다.

이 프로젝트의 차별화된 주장은 근거입니다. 스킬은 자신이 의존하는 증거를 인용하며, 저장소의 이력은 이 원칙이 주장이 아니라 실제로 강제되고 있음을 보여줍니다. 지원되지 않는 귀속을 제거하고 인용된 연구에서 검증된 안전장치의 설명을 수정한 병합된 수정 사례가 그 예입니다.

## 참고 사항과 주의점

교육 스킬, 문서, 커리큘럼 자료는 CC BY-SA 4.0으로 라이선스되어 있어 재사용과 개작이 열려 있으나 파생물은 같은 라이선스를 따라야 합니다. 배포할 때 두 가지 운영상 세부 사항이 중요합니다. 호스팅 MCP 엔드포인트는 누구에게나 열려 있지 않고 토큰을 요구하며, 서버가 SKILL.md 파일이 아니라 커밋된 스냅샷을 제공하므로 번들을 재빌드하고 커밋하지 않고 추가한 스킬은 재배포한 뒤에도 라이브 서버에 나타나지 않습니다. 이 라이브러리는 교육자이자 커리큘럼 설계자인 Gareth Manning이 만들었으며, 라이선스 조건은 교육 콘텐츠에 특별히 적용됩니다.

## 연결된 개념
[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]]
