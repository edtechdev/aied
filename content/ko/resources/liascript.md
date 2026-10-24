---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
updated: "2026-10-24T08:38:48-04:00"
type: resource
summary: "평범한 텍스트 파일을 브라우저에서 퀴즈와 실행 가능한 코드를 갖춘 인터랙티브 강좌로 바꾸는 오픈 Markdown 방언이며, 강좌를 함께 만드는 다중 에이전트 도우미를 더합니다."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
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

**LiaScript**은 확장된 Markdown 방언과 그것을 위한 인터프리터입니다. 평범한 텍스트 파일 하나가 인터랙티브 강좌가 됩니다. 같은 문서를 서술로 읽을 수도, 슬라이드로 재생할 수도, 강좌로 진행할 수도 있으며, 모두 브라우저 안에서 이루어집니다. 작성하거나 읽는 데 아무것도 설치할 필요가 없습니다.

## 이 도구로 할 수 있는 것

퀴즈는 교사가 기대하는 형태로 제공됩니다. 선다형, 매트릭스 문항, 텍스트 입력, 드롭다운, 빈칸 채우기가 Markdown에 바로 작성됩니다. 코드 블록은 [[cs-education|프로그래밍]] 튜토리얼용으로 편집 가능하고 실행 가능하게 만들 수 있으며, 매크로 시스템은 JavaScript 라이브러리를 재사용 가능한 블록으로 감싸므로 인터랙티브 다이어그램을 위해 각 저자가 코드를 짤 필요가 없습니다. 강좌는 저자가 이미 텍스트를 보관하는 어디에나 호스팅할 수 있어 갇힐 서비스가 없으며, 모든 것이 클라이언트 측에서 실행되므로 한 번 불러온 강좌는 오프라인에서도 동작합니다. LiaScript Exporter는 강좌 하나를 SCORM으로 패키징하여 Moodle, ILIAS, 다른 [[edtech-platform|학습 관리 시스템]]에 제공합니다.

## 강좌 제작을 위한 티칭 에이전트

프로젝트는 LiaScript 강좌를 저작하기 위한 **[티칭 에이전트](https://github.com/LiaScript/teaching-agent)**도 공개하며, Boost Software License 1.0으로 라이선스됩니다. 교수, 시각 설계, 학습자 검토, 배포를 위한 네 에이전트가 강좌 상태를 담은 단일 프로젝트 파일을 중심으로 동작하며, 정의 우선 워크플로를 따릅니다. 학습목표, 대상, 교수법이 어떤 자료가 쓰이기 전에 확정되고, 그 뒤에 검증 단계가 따릅니다. 초안은 명명된 학습자 페르소나의 관점에서 검토하여 [[cognitive-offloading|인지 부하]]와 가정된 선수 지식을 점검할 수 있습니다. 이 에이전트는 편집기에 구애받지 않아 하나의 명세로부터 Claude Code, Copilot, Codex, Cursor, 웹 채팅용 구성을 생성하며, 저장소는 EU NIS2 지침에 관한 여섯 단원 강좌와 그것이 어떻게 만들어졌는지를 설명하는 문서를 담아 그 자체로 작업 사례로 기능합니다.

## 참고 사항과 주의점

LiaScript은 무료이며 유료 등급도 계정 요구사항도 없고, BSD-3-Clause 하에 공개적으로 개발되므로 기관이 직접 호스팅하고 수정할 수 있습니다. Live Classroom 기능은 실시간 동기화가 순수한 로컬 렌더링이 아니라 공유 서비스를 사용하므로, 규모 있게 의존하기 전에 살펴볼 만합니다. 티칭 에이전트는 이르고 도입 사례가 적으므로, 지원되는 제품이기보다는 작동하는 프로토타입으로 다루십시오.

## 연결된 개념

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]

