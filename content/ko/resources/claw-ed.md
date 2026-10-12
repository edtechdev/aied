---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-09-23T21:05:00-04:00"
type: resource
summary: "교사가 선택한 모델을 사용해 자신의 커리큘럼을 편집 가능한 수업 초안, 학생 자료, 슬라이드로 바꾸는 로컬 우선 AI 교수 보조 도구입니다."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
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

**Claw-ED**는 자신의 커리큘럼 자료로부터 수업을 초안 작성하는 로컬 우선 교수 보조 도구입니다. 교사가 자신의 자료를 가져와 수업을 요청하면, 고정된 한 벤더가 아니라 교사가 선택한 모델로 생성된 편집 가능한 초안과 함께 학생용 자료 및 슬라이드를 받게 됩니다.

## 이 도구로 할 수 있는 것

워크플로는 가져오기에서 초안 작성, 검토, 내보내기까지 이어지며, 초안은 완성된 학습지가 아니라 교사가 편집하는 출발점으로 다루어집니다. 수업 작업은 큐에 들어가 복구가 가능하므로, 실패한 긴 생성 작업을 처음부터 다시 시작하는 대신 이어서 재개할 수 있고, 생성된 결과물은 다운로드할 수 있습니다. 또한 MCP 서버를 통해 [[agentic-ai|에이전트]]에게 자신의 도구를 노출하며 Google Drive에 연결할 수 있어, 학교가 기존 저장소와 일정 관리 체계에 연동할 수 있습니다.

이 프로젝트는 의도적으로 모델에 구애받지 않습니다. 로컬 Ollama 모델, 저렴한 OpenRouter 경로, 호스팅 옵션을 나란히 문서화하며, 모델 가이드에 날짜가 표시되어 있어 권장 사항이 품질에 대한 교사 평가가 아니라 카탈로그 기반의 출발점임을 분명히 합니다.

## 참고 사항과 주의점

이 소프트웨어는 무료이며 원본 코드는 MIT 라이선스 하의 [[open-source|오픈 소스]]이지만, 서드파티 구성 요소는 각자의 이용약관을 따르며, 호스팅 모델을 사용할 경우 직접 모델 추론 비용을 지불해야 합니다. 이 프로젝트는 스스로를 교사 검토 베타라고 부르며, README에서 CI 통과가 실제 모델 전반에 걸친 교수 품질을 입증하지 않는다고 솔직히 밝히고 있습니다. 이는 이 분야에서 녹색 테스트 스위트를 읽는 올바른 방식입니다. 즉 테스트가 검증하는 것은 소프트웨어이지 [[pedagogy]]이 아닙니다. 이 프로젝트는 MacxLabs가 유지·관리하며 교사가 검토한 샘플 수업을 기여물로 받습니다.

## 연결된 개념
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
