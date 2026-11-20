---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "AI 코딩 어시스턴트로 정적 교육 웹사이트를 만드는 교육자를 위한 현장 안내서입니다. 설계, 보안, 학생 프라이버시를 위한 세 개의 Markdown 지시 파일과 읽기 쉬운 안내서, 내려받을 수 있는 묶음을 제공합니다."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**The Vibe-Coding Center**는 Miguel Guhlin이 만든 무료 현장 안내서로, 교사가 AI 코딩 어시스턴트와 함께 작은 정적 교육 사이트(출구 티켓, 퀴즈, 학급 포트폴리오)를 [[vibe-coding|바이브 코딩]]하되 노출된 API 키나 학생 데이터를 함께 내보내지 않도록 안내합니다.

## 이것으로 할 수 있는 것

세 개의 지시 파일이 안내를 담습니다: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md`, `securevcc.md`. 이것들을 프로젝트 루트에 내려받고 프로젝트 브리프 템플릿을 채운 다음, 어시스턴트에게 세 파일을 모두 읽고 적용하라고 요청하십시오. 안내서는 파일이 있다는 것과 활성화되는 것이 다르다고 분명히 밝히므로, 요청에서 파일 이름을 지목해야 합니다. 읽기 쉬운 안내서가 각 파일을 설명하며, "공유하기 전 세 가지 필수 점검" 둘러보기도 포함합니다: 학생 데이터를 덜 수집하고, 노출된 API 키를 점검하고, 도구의 설계를 학습 과제에 맞추는 것입니다. 전체 묶음은 사이트 자체, 프롬프트 팩, 출시 검토와 재빌드 스크립트를 더하며, 내려받기용 SHA-256 매니페스트가 있습니다.

동반 [EduSynth Hub 예시](https://mguhlin.github.io/funquiz/examples.html) 페이지는 결과를 스크린샷이 아니라 작동하는 정적 도구로 보여 줍니다. 선택한 SOLO Taxonomy 수준에서 질문을 쓰는 출구 티켓 생성기, GitHub Pages 위의 단일 HTML 파일인 학생 포트폴리오, 검색 가능한 전문성 개발 자료 라이브러리이며, 모두 LMS 로그인 없이 클라이언트 측에서 실행됩니다.

## 누구를 위한 것인가

원하는 도구를 말로 설명할 수 있고 어시스턴트가 만들어 낸 것을 확인할 의향이 있는 K-12 및 고등교육의 교사와 [[learning-design|교수 설계자]]입니다. 누구든 학생용 도구를 공개하기 전에 하나의 공유 점검표를 두고 싶은 학과, 그리고 비판이 아니라 만들기를 통해 [[ai-literacy|AI 리터러시]]를 가르치는 교수자에게도 맞습니다.

## 참고사항과 유의점

이 센터는 안내이지 준수 제품이 아닙니다. 사이트는 자체 WCAG 2.2 AA 목표에 대해 적합성 주장을 하지 않고, "이 파일들을 쓰면 내 사이트가 준수합니까?"라는 질문에 아니라고 답하며, 엔지니어링 검토가 학교 승인이나 법률 검토를 대체하지 않는다고 말합니다. 보안 선반은 axe-core, Gitleaks, ZAP, Playwright를 가리킵니다. 그것들은 함께 제공되는 소프트웨어가 아니라 참조이며, 침습적인 것들은 일회용이거나 명시적으로 승인된 대상에 쓰도록 되어 있습니다. 읽는 데는 계정이 필요 없습니다. HTML 페이지를 다시 빌드하려면 Python과 `markdown-it-py`가 필요하며, 이는 방문자 의존성이 아니라 빌드 의존성입니다. 저장소는 MIT 라이선스이고, 제3자 아트워크와 링크된 프로젝트는 `CREDITS.md`에 문서화된 자체 조건을 유지합니다.
