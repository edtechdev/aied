---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Wharton의 Generative AI Labs가 만든 오픈 소스 저작 시스템으로, 교육자와의 구조화된 인터뷰를 자체 멘토·연습·피드백 에이전트를 갖춘 실행 가능한 적응형 학습 시뮬레이션으로 바꿉니다."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

Primer는 수업을 프로그래밍하는 대신 AI에게 설명함으로써 교육용 [[simulation|시뮬레이션]]을 만드는 [[open-source|오픈 소스 시스템]]입니다. 시뮬레이션이 무엇을 가르칠지는 교육자의 판단이 정합니다. 인터뷰가 교수자가 수업과 학생에 대해 아는 것을 끌어내고, 설계 문서가 그 지식을 검토 가능한 형태로 만들며, 교육자가 승인하기 전에는 아무것도 만들어지지 않습니다.

## 이것으로 할 수 있는 것

인터뷰는 한 번에 한 질문씩 진행됩니다. 수업, 학생의 수준과 사전 지식, 흔한 오개념, 교수자의 접근 방식, 그리고 성공을 어떻게 평가할지입니다. 교육자는 말하거나 입력할 수 있고, 강의계획서, 수업 계획서, 루브릭을 업로드할 수 있습니다. 돌아오는 것은 목표, 시나리오 흐름, 등장인물, 이해관계, 적응 논리를 다루는 설계 문서이며, 교육자는 수업 계획서를 다루듯 그것을 수정하고 승인합니다. 그다음 다섯 에이전트가 구축합니다. Intake, Design, Casting Director, Image Generation, Experience Builder이며, Experience Builder가 학생 한 명 또는 학급 전체를 위해 결과물을 조립합니다.

실행 시에는 세 에이전트가 학생을 마주합니다. 멘토는 사전 지식을 활성화하고 오개념을 드러냅니다. 연습 에이전트는 롤플레이 상대역이나 가르치기(teachback) 학생 역할을 맡는데, 학생이 개념을 설명하고 질문을 받으면 설명을 수정합니다. 피드백 에이전트는 대화 기록을 바탕으로 구체적인 장면과 학습이 시나리오 밖으로 어떻게 이어지는지를 논합니다. 각 에이전트에는 시뮬레이션 세계 속 캐릭터와 목표를 추적하고 증거를 모으는 교수 설계 층이 있으며, 교육자는 개별 보고서와 집계 보고서를 받습니다.

## 누구를 위한 것인가

교수자, 교수설계자, 교수 개발 담당자는 코드를 작성하지 않고도 수업을 상세히 설명할 수 있습니다. 교육자를 루프 안에 두는 저작이나 [[agentic-ai|다중 에이전트 워크플로]]를 연구하는 연구자는 살펴볼 수 있는 작동하는 시스템을 얻고, 개발자는 이를 확장할 수 있습니다. 프롬프트, 템플릿, 체크리스트, 오케스트레이션 패턴, TypeScript 코드가 모두 오픈 소스이기 때문입니다.

## 참고사항과 유의점

저자들은 Primer를 검증된 교실용 제품이 아니라 실험적 프로토타입이라고 부릅니다. 교실에서 학습 개입으로 평가된 적이 없고, FERPA, COPPA, 주 학생 개인정보 보호법, 학군 정책에 대해 검토한 사람도 없으므로, 학생과 함께 사용하는 기관이 그 검토의 책임을 집니다. 소프트웨어는 MIT 라이선스이며 무료이지만, 시뮬레이션을 실행하려면 모델 접근이 필요하고 비용이 듭니다. 모델에 종속되지 않고 로컬 또는 오픈 웨이트 모델에서 실행되므로 개인정보 규칙이 더 엄격한 곳에도 배포할 수 있습니다. 아키텍처와 프롬프트에 관한 백서가 프로젝트 페이지에서 링크되어 있습니다. 2026년 11월 확인 시점에 저장소에는 스타 98개와 포크 16개가 있었습니다.

## 연결된 개념

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
