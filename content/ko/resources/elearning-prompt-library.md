---
title: "eLearning 프롬프트 라이브러리"
created: "2026-11-23T09:12:00-05:00"
updated: "2026-11-23T15:30:00-05:00"
type: resource
summary: "Sunil Iyer의 MIT 라이선스 GitHub 모음집으로, 교수 설계자와 eLearning 개발자를 위한 복사-붙여넣기용 AI 프롬프트 22개를 각각 적용하는 학습 이론 태그와 함께 담고 있습니다."
url: https://github.com/linuxsunil/elearning-prompt-library
source_code: https://github.com/linuxsunil/elearning-prompt-library
author: "Sunil Iyer"
author_url: https://github.com/linuxsunil
resource_type: [prompt or gem library]
access: [free]
license: "MIT"
last_verified: "2026-11-23"
foundations: [ai-literacy, learning-design]
pedagogy: [learning-theories]
technology: [generative-ai, prompt-engineering]
audience: [instructional designers, educational technology developers, curriculum designers]
connected_resources: []
translation_of: resources/elearning-prompt-library
source_updated: "2026-11-23T09:12:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [prompt-engineering, learning-design, learning-theories, generative-ai]
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**eLearning 프롬프트 라이브러리**는 Sunil Iyer의 GitHub 저장소로, 교수 설계자, eLearning 개발자, L&D 프로젝트 관리자를 위해 작성된 [[prompt-engineering|AI 프롬프트]]를 모아 두었습니다. 프롬프트 파일 22개가 일곱 개의 범주 폴더에 나뉘어 있습니다. 교수 설계, 콘텐츠 개발, Articulate Storyline과 Rise, 평가, 프로젝트 관리, QA 및 검토, AI 미디어입니다. 각 파일은 대괄호로 표시한 자리표시자가 있는 복사-붙여넣기 블록이며, 각각 적용하는 학습 이론을 밝히고 있습니다. 딸린 참고 문서에는 여섯 계열의 이론 60개가 정리되어 있습니다. 저자의 입장은 일반적인 프롬프트는 가르침처럼 보이면서도 사람들이 어떻게 배우는지에 기반을 두지 않은 콘텐츠를 만들어 낸다는 것이며, 각 프롬프트에 이름 붙은 이론을 태그하는 것이 이 묶음을 쓸모 있게 만든다는 것입니다.

## 이 도구로 할 수 있는 것

라이브러리는 도구가 아니라 제작 과업별로 정리되어 있습니다. 교수 설계 프롬프트는 [[bloom-taxonomy|Bloom 택소노미]]에 따른 격차 분석, 인지 부하 감사, SME 메모를 수업 계획으로 전환, 이론 선택, Gagné의 9개 사태 모듈 설계, 행동 매핑, UDL 접근성 감사를 다룹니다. 콘텐츠 프롬프트는 스토리보드 뼈대, 내레이션 대본, ARCS 동기 검토를 만듭니다. Storyline과 Rise 프롬프트는 트리거 논리, Rise 블록 순서, HTML5 상호작용 사양을 다루고, 평가 프롬프트는 분기 시나리오, 문항 은행, Kirkpatrick 평가 계획을 다룹니다. 프로젝트 관리 프롬프트 두 개와 QA 프롬프트 두 개가 묶음을 마무리합니다.

프롬프트는 도구에 종속되지 않으며, README는 Claude, ChatGPT 또는 Gemini에서 실행된다고 적고 있습니다. 기여 안내에서는 각 저자에게 반복 관련 팁을 담은 짧은 "Notes" 3~5개를 요청합니다.

## 누구를 위한 것인가

빈 프롬프트 상자 대신 이론이 태그된 출발점을 원하는 교수 설계자와 교육 기술 개발자, Articulate Rise나 Storyline 강좌를 만드는 L&D 팀을 위한 것입니다. 어떤 이론이 프로젝트에 맞는지 이미 아는 사람이 프롬프트 골격을 원할 때 적합합니다. 성인과 직장 학습을 겨냥한 전문 제작용 라이브러리이며, 학생용 교실 도구가 아닙니다.

## 참고 사항 및 주의점

- **개수가 서로 다릅니다.** README 배지와 범주 표 모두 23개라고 적혀 있지만, 저장소에는 마크다운 프롬프트 파일이 22개 있고 자체 색인 표도 22에서 멈춥니다.
- **이론 태그는 저자 스스로의 대응입니다.** 프롬프트가 명시한 이론을 실제로 적용한다고 검증해 주는 것은 아무것도 없습니다. "증거 기반"과 "제작 준비 완료"는 저자의 주장이며, 각 출력은 강좌에 넣기 전에 여전히 주제 내용 확인이 필요합니다.
- **매우 새롭고 검토되지 않았습니다.** 기여자 1명, 스타 2개, 2026년 11월 기준 공개 릴리스 없음, 저장소 생성일은 2026년 11월 15일 — 며칠 된 것일 뿐 유지 관리되는 모음집이 아닙니다. 채택 수는 2026년 11월 23일 현재 읽은 값입니다.
- **MIT 라이선스.** 출처 표기를 조건으로 상업적 용도를 포함해 자유롭게 복제하고 각색할 수 있습니다.

## 연결된 개념

[[prompt-engineering]], [[learning-design]], [[learning-theories]]
