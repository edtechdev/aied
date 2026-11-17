---
title: "Agentic Builds"
created: "2026-11-13T09:14:20-05:00"
type: resource
summary: "코딩 에이전트에게 프롬프트해 만든 교실용 앱을 공개해 둔 선반으로, 여섯 개의 교수 경로로 정리되어 있고 그 뒤에 35개 빌드를 담은 더 완전한 갤러리가 있습니다. 각 앱은 하나의 교수 문제에서 출발하며 자체 AI 고지문을 함께 제공합니다."
url: https://marcwatkins.org/builds/
source_code: https://github.com/mwatkins03-netizen?tab=repositories
author: "Marc Watkins"
author_url: https://marcwatkins.org/about/
resource_type: [collection of tools]
access: [free]
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [desirable-difficulties]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed]
connected_resources: [vibe-coding-center]
translation_of: resources/agentic-builds
source_updated: "2026-11-13T12:40:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Agentic Builds**는 Marc Watkins가 코딩 에이전트와 대화하며 만든 교실용 앱을 공개해 둔 선반으로, 서른다섯 개가 Grove Lab 갤러리에 모여 있습니다. 각 앱은 하나의 교수 문제에서 출발하며 자체 AI 고지문을 함께 제공합니다.

## 이것으로 할 수 있는 것

여섯 개의 경로가 모음을 조직합니다. 독립형 학습 앱은 학생이 열어 끝까지 해 보고 내보내는 집중 활동 하나입니다. *Pause Before You Prompt*는 AI를 쓰기 전에 중요한 출처와 중요한 질문을 요구하고, *Sentence Sound Lab*은 문장 길이를 들리게 만듭니다. 게임화 앱과 시뮬레이션은 실시간 데이터로 AI 노출과 노동을 다루는 의사결정 게임 *Career Futures*에서부터, 고등교육의 즉흥적이고 모순된 AI 대응을 축제처럼 펼쳐 놓은 *The AI Midway*까지 이어집니다. 연구 및 외부 데이터 빌드는 API와 아카이브에서 자료를 끌어옵니다. *The Complaint Atlas*는 CFPB의 학자금 대출 민원 서사를 TypeSafe AI의 Jev 모델로 읽고, *Body of Evidence*는 아홉 개 신체 계통에 걸쳐 "그걸 어떻게 아십니까?"라고 묻습니다. [[desirable-difficulties|바람직한 어려움]]은 의도적으로 학생을 느리게 만드는 빌드를 모읍니다. *Omelas: The Classroom Walk*, *The Focus Classroom*, 헤밍웨이의 *Big Two-Hearted River*를 현장판으로 옮긴 것입니다. 교수진 및 강좌 설계 도구로는 Blackboard에 바로 넣을 수 있는 HTML을 출력하는 과제 지침 빌더가 있습니다. [갤러리](https://mwatkins03-netizen.github.io/The-Grove-Lab/gallery.html)는 검색, "내 아이디어에 가까움" 태그, 빌드 요청 양식을 더하므로, 이 모음은 설계 접수처 역할까지 겸합니다.

## 누구를 위한 것인가

하나의 교수 문제에 묶인 작은 앱의 실제 사례를 원하는 교수자와 [[learning-design|교수 설계자]], 동료에게 건넬 모델을 찾는 교수진 개발자입니다. 각 빌드는 플랫폼이 아니라 [[vibe-coding|바이브 코딩으로 만든]] 정적 사이트입니다. 독자는 브라우저에서 바로 열 수 있고, 학과는 모든 프로젝트가 끝낼 수 있을 만큼 작을 때 선반이 어떤 모습인지 볼 수 있습니다.

## 참고사항과 유의점

빌드는 공개적으로 공유된다고 설명되지만, 빌드나 갤러리 페이지에 라이선스가 명시되어 있지 않으므로 재사용에는 허여된 것으로 가정할 수 있는 권리가 아니라 저자의 허락이 필요합니다. 다만 소스는 공개되어 있습니다. 계정의 저장소에 빌드 뒤의 HTML과 JavaScript, 그리고 교육에서 코딩 에이전트를 다루는 튜토리얼이 있어서, 독자는 앱을 실행만 하는 것이 아니라 들여다볼 수 있습니다. 여러 링크가 프로젝트 사이트가 아니라 Netlify 배포 미리보기 주소를 가리킵니다. 그것들은 검토용으로 만들어져 만료될 수 있으며, GitHub Pages 빌드가 안정적인 쪽입니다. 일부 빌드는 TypeSafe AI의 Jev 모델에 의존하며 그 확률을 보여 주므로, 기반 동작은 고정된 규칙이 아니라 모델의 판단입니다. 바람직한 어려움 경로는 하나의 논증, 즉 마찰을 기능으로 본다는 관점이며, 이 페이지는 학생이 더 배우는지에 대한 평가를 보고하지 않은 채 그 논증을 제시합니다.

## 연결된 개념

[[vibe-coding]], [[learning-design]], [[desirable-difficulties]], [[agentic-ai]], [[generative-ai]], [[simulation]]
