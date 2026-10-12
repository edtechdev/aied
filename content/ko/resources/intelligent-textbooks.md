---
title: "인텔리전트 교과서 만들기"
created: "2026-10-10T11:10:00-04:00"
updated: "2026-10-10T11:10:00-04:00"
type: resource
summary: "MkDocs Material과 생성형 AI를 활용하여 검색, 내비게이션, 용어집, 퀴즈, 개념 그래프, 삽입형 시뮬레이션을 갖춘 온라인 교과서인 인텔리전트 교과서를 만드는 방법을 다루는, Dan McCreary의 오픈 소스 안내서로, AI가 생성한 대화형 MicroSims 라이브러리가 함께 제공됩니다."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Intelligent Textbooks** 사이트는 *인텔리전트 교과서*를 만드는 Dan McCreary의 단계별 안내서입니다.
인텔리전트 교과서란 정적인 PDF를 넘어 검색, 사이트 내비게이션, 용어 모음집,
목차, 퀴즈 관리, 렌더링된 수식, 소셜 미디어 미리보기, 링크 검사를 더하고,
한 강좌의 모든 개념과 그 의존 관계를 보여 주는 시각화하기 쉬운 **개념 그래프**를 갖춘
온라인 교과서입니다. 이 안내서는 오늘날 많은 강좌가 이러한 기능을 갖춘 고품질
온라인 교과서의 혜택을 볼 수 있다고 논하며, Material 테마와 짝지은
[MkDocs](http://mkdocs.com/) 빌드 시스템과 생성형 AI를 활용해 콘텐츠를 만들고
유지하는 방법을 보여 줍니다.

결정적인 움직임은 교과서가 *마크다운으로 집필되고 AI가 생성*한다는 것입니다.
이것은 [[curriculum-design|강좌 콘텐츠]]에 적용된 [[vibe-coding|AI 지원 집필]] 방식의
구체적인 사례로, 큰 사이트를 손으로 관리하는 대신 강좌를 설명하면 생성형 AI가
페이지를 생성하고 유지하며, 내비게이션·검색·개념 그래프는 도구 체인이 맡습니다.
함께 제공되는 [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) 라이브러리는
강좌 설명으로부터 레벨 2 교과서를 만드는 데 필요한 작업의 90% 이상을 자동화한다고
주장합니다.

## 부수 자원: MicroSims

이 안내서의 자연스러운 짝은 <https://dmccreary.github.io/microsims/>(소스 코드:
[github.com/dmccreary/microsims](https://github.com/dmccreary/microsims))에 있는
McCreary의 **MicroSims** 라이브러리로, 인텔리전트 교과서가 삽입하는
대화형 시뮬레이션을 제공합니다. *MicroSim*(마이크로 시뮬레이션)은 교수가 개념을
설명하도록 돕기 위해 AI로 생성한 간단한 대화형 시뮬레이션이며, 인텔리전트 교과서나
`iframe`을 받아들이는 어떤 사이트에도 삽입할 수 있습니다. MicroSims가 특별한 이유는
세 가지입니다. **AI 지원 생성**(표준화된 설계 패턴이 시뮬레이션의 자연어 설명을
공유 가능한 자산으로 바꿉니다), **보편적 삽입**(하나의 HTML `iframe` 요소만으로
어떤 페이지에도 넣을 수 있습니다), 그리고 **투명하고 수정 가능한 코드**(블랙박스가
없어서 한 번의 클릭으로 시뮬레이션을 웹 편집기에서 열 수 있고, Creative Commons
라이선스 덕분에 대부분의 교수는 라이선스 비용 없이 사용할 수 있습니다). 이 용어는
Valerie Lockhart가 2023년, 교사와 학생이 훈련 없이 또는 거의 없이
p5.js 자바스크립트 라이브러리로 시뮬레이션을 만들 수 있다는 사실을 발견한 뒤
만든 말입니다.

이 프로젝트는 AI 도구가 검색 가능한 서술자를 생성할 수 있도록 MicroSim 메타데이터를
위한 JSON Schema도 발행하며, 면목화된(faceted) MicroSim 레지스트리는 로드맵에
있습니다. 이 틀을 설명하는 연구 논문 — *MicroSims: A Framework for AI-Generated,
Scalable Educational Simulations with Universal Embedding and Adaptive Learning
Support* — 은 arXiv에 있습니다([2511.19864](https://arxiv.org/abs/2511.19864)).
예시 시뮬레이션으로는 Bouncing Ball, Projectile Motion, String Harmonics,
Conway's Game of Life, Euler's Formula, 그리고 주식 수익률 차트가 있으며,
각각 사이트에서 실시간으로 실행됩니다.

## 누구를 위한 것인가

강좌 교과서를 만들거나 유지하고자 하는 교수자와 교수 설계자, 특히 고등교육과
전문 교육에서, 그리고 생성형 AI로 교육 콘텐츠를 집필하는 사람들입니다.
마크다운과 Git 작업 흐름에 익숙하거나(익히려는 의지가 있는) 교육자가
검색·내비게이션·개념 그래프 같은 사이트 인프라를 AI에 맡기고
교육학에 집중하고자 할 때 이 안내서가 맞습니다.

## 참고사항과 유의점

이것은 실무자의 안내서이자 도구 체인이지, 동료 검토 연구가 아닙니다. 학습 성과의
증거가 아니라 작업 흐름과 그 자체의 교육학적 근거(\"인텔리전트 교과서는 학생이
지식을 찾아가는 여정에서 개념을 통해 안내합니다\")를 제시합니다. MicroSim 연구
논문이 가장 경험적 뒷받침에 가깝지만, 그것도 arXiv 자가 출판입니다. 두 프로젝트 모두
오픈 소스이고(intelligent-textbooks 저장소는 MIT 라이선스와 별 38개를 보고하며,
MicroSims는 Creative Commons 라이선스와 별 13개를 보고합니다) 활발히 유지되고
있습니다. 개념 그래프와 용어집 우선 구조는 발견 가능성에 진정으로 유용하지만,
이 안내서는 상당히 기술적인 집필 작업 흐름(MkDocs, Git, 생성형 AI 도구)을
전제로 하여 일부 교수자에게는 장벽이 될 수 있습니다. 수집 시점에 MicroSims
레지스트리는 여전히 로드맵 단계에만 있어서, 특정 기존 시뮬레이션을 찾는 일은
사이트 자체의 검색과 내비게이션에 의존합니다.

## 연결된 개념

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
