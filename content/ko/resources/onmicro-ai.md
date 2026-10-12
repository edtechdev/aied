---
title: "OnMicro.AI"
created: "2026-09-23T17:45:00-04:00"
updated: "2026-09-23T17:45:00-04:00"
type: resource
summary: "교육자가 목적이 분명한 AI 앱을 만들고 링크로 배포하며 LTI를 통해 LMS에 삽입하고 학생들이 어떻게 사용하는지 확인할 수 있는 노코드 빌더입니다."
url: https://onmicro.ai/
source_code: https://github.com/onmicroai/micro_ai
author: "The OnMicro.AI project"
resource_type: [software, collection of tools]
access: [freemium]
license: "AGPL-3.0"
last_verified: "2026-09-23"
foundations: [ai-literacy, ai-education]
pedagogy: [scaffolding, active-learning]
technology: [open-source, edtech-platform]
audience: [instructors, instructional designers, administrators]
level: [higher ed]
confidence: high
connected_resources: [vibes-diy]
translation_of: resources/onmicro-ai
source_updated: "2026-09-23T17:45:00-04:00"
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

**OnMicro.AI**는 열린 대화가 아니라 좁고 목적에 맞게 만들어진 AI 앱을 생성하는 교육용 노코드 빌더입니다. 교사가 구조화된 워크플로를 설계하고 앱이 받고 반환하는 것을 통제하며, 학생이 계정이나 라이선스 없이 열 수 있는 링크로 배포한 뒤, 앱 자체의 집계 사용량, 비용, 만족도, 정확도를 확인합니다.

## 이 도구로 할 수 있는 것

앱은 Canvas, Moodle, Blackboard 또는 다른 [[edtech-platform|LTI 호환 플랫폼]]에 삽입할 수 있고, 그곳에서 성적과 접근 권한이 동기화될 수 있습니다. 공개된 예시로는 환자 소통 [[simulation]], 학생이 넘어가기 전에 이해도를 점수화하는 사례 연구 피드백 앱, 짧은 언어 연습 챌린지가 있습니다. 사용 분석은 이 프로젝트가 앱을 커스텀 [[conversational-ai|챗봇]]보다 선호하는 이유입니다. 설계된 흐름은 관찰하고 수정할 수 있지만 열린 챗은 그럴 수 없기 때문입니다. 주요 제공업체의 모델을 선택할 수 있으며, 플랫폼은 각 앱의 실행 비용을 추적합니다.

## 누구를 위한 것인가

경계가 정해진 반복 가능한 상호작용을 원하는 교사와 학습 설계자, 그리고 지원되는 배포 경로가 필요한 관리자에게 적합합니다. 이 저장소가 문서화하는 것은 호스팅 상용 서비스입니다. 소스는 공개되어 있고, 플랫폼은 구독으로도 판매됩니다.

## 참고 사항과 주의점

무료 등급은 AI 크레딧 10,000개와 앱 3개로 제한되며, 무제한 앱과 고급 모델은 Pro 등급부터 시작하고 LTI 연동, 싱글 사인온, 고급 분석은 Enterprise 등급에 포함되어 있어, 기관이 가장 필요로 하는 기능에 가격이 붙어 있습니다. 저장소는 `LICENSE` 파일에 따라 **AGPL-3.0**으로 라이선스되어 있으며, 이 변경 이전의 README에는 여전히 LGPL이라고 적혀 있으므로 자체 호스팅이나 수정을 고려하는 사람은 README가 아니라 라이선스 파일을 읽어야 합니다. 또한 기관은 학생 작업물을 호스팅된 서드파티 서비스로 라우팅하기 전에 자체 데이터 처리 약관을 확인해야 합니다.

## 연결된 개념
[[teacher-ai-competency]], [[learning-design]], [[open-source]], [[intelligent-tutoring]], [[scaffolding]]
