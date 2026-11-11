---
title: "Teacher Hive"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: resource
summary: "교사들이 AI로 생성한 교실용 웹 앱을 게시하고 링크나 QR 코드로 공유하며, 다른 교사들이 만든 수백 개의 앱을 둘러볼 수 있는 Tony Vincent의 무료 사용 호스팅 플랫폼입니다."
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
translation_of: resources/teacher-hive
source_updated: "2026-11-10T19:52:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Teacher Hive**는 Tony Vincent가 만든, 교사가 만든 교실용 앱을 위한 호스팅 및 공유 플랫폼입니다. 그 전제는 교실 AI의 어려운 부분이 더 이상 모델에게 작은 앱을 쓰게 하는 것이 아니라, 그것이 학교 네트워크에서 실행되고 학생들이 쉽게 열 수 있는 곳을 찾는 것이라는 점입니다. 교사는 ChatGPT, Claude, Gemini가 만든 단일 HTML 파일을 붙여 넣거나 업로드하고, Teacher Hive는 그것을 아이콘과 QR 코드가 붙은 짧은 공개 링크로 제공합니다. 둘러보기, 북마크, 팔로우, 게시는 무료이며, 유료 Pro 등급은 저장 공간과 앱 한도를 높여 줍니다.

## 이 도구로 할 수 있는 것

**둘러보기**로 게시된 앱을 컬렉션별로 볼 수 있습니다 — 브레인 브레이크, ELA, 수학, 과학, 사회, 교사 도구 — 그다음 HTML을 붙여 넣고 이름, 설명, 아이콘, AI 출처 표기를 추가해 앱을 **게시**합니다. 각 앱은 실행 버튼과 QR 표시가 있는 정보 페이지를 받고, 브랜딩이나 학생 로그인 없이 열립니다. 선택적 **Superpowers** 계층은 저장된 응답, AI 호출, 이메일, 파일 저장을 추가하며 요금제에 따라 사용량이 책정됩니다. 갤러리가 필요 없는 단일 앱이라면, 끌어다 놓기로 작동하는 두 가지 무료 대안이 있습니다. [Cloudflare Drop](https://www.cloudflare.com/drop/)은 계정 없이 폴더, zip, 단일 HTML 파일을 workers.dev URL로 게시하며, 배포를 60분 안에 인수해야 합니다. [Netlify Drop](https://app.netlify.com/drop)은 같은 입력을 무료 요금제의 공개 링크로 게시합니다.

## 누구를 위한 것인가

[[generative-ai|생성형 AI]]로 작은 도구를 만들어 신뢰할 만한 호스팅 장소가 필요한 K–12 교사가 주된 사용자입니다. 이 플랫폼은 개발자가 아니라 [[vibe-coding]]을 위해 설계되었습니다. 교수 설계자와 교사 교육자는 컬렉션을 예시로, 그리고 [[teacher-ai-competency|교사의 AI 역량]]을 기르는 부담 낮은 방법으로 활용할 수 있습니다.

## 참고 사항

Member와 Builder는 무료입니다(Builder: 앱 50개, 50MB). Pro는 월 \$10 또는 연 \$60에 앱 500개입니다. 접근 방식은 프리미엄(freemium)입니다.

프라이버시가 더 강한 주장이지만, 그것은 책임을 교사에게 옮깁니다. Teacher Hive는 학생 계정을 만들지 않고, 학생에게 개인 정보를 요구하지 않으며, 게시된 앱 안에서 분석이나 광고 스크립트를 실행하지 않습니다. 앱이 링크로 공개되기 때문에, 약관은 교사에게 자신의 앱이 이름, 이메일, 학생 ID, 위치를 수집하지 않도록 할 책임을 지웁니다. 접근성 범위(WCAG 2.2 AA)는 Teacher Hive 자체 페이지에 적용되며, 검증되지 않은 교사 제작 앱에는 적용되지 않습니다. 오픈소스 라이선스는 명시되어 있지 않고, 가동 시간과 데이터 보존은 보장되지 않습니다.

## 연결된 개념

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
