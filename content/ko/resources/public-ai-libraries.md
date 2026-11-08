---
title: "공공 AI 도서관"
created: "2026-11-05T02:58:35-05:00"
type: resource
summary: "米国の公共図書館に共有の Public AI ワークステーションを設置する2025〜2026年の全国パイロット事業です。チャット、画像・音楽・動画の生成、コード用IDE、教育ガイドを備え、利用者ごとにプライベートなアカウントが用意されます。"
url: https://libraries.publicai.co/
source_code: https://github.com/forpublicai/libraries-kiosk
author: "Public AI"
author_url: https://libraries.publicai.co/
resource_type: [software, collection of tools]
access: [freemium]
license: "GPL-3.0 (kiosk site); MIT (inference utility)"
last_verified: "2026-11-05"
foundations: [ai-literacy]
technology: [llm, generative-ai]
ethics: [digital-divide, equity-in-ai-education]
level: [adult learning]
audience: [librarians, administrators, learners]
confidence: high
updated: "2026-11-08T00:26:42-05:00"
translation_of: "resources/public-ai-libraries"
source_updated: "2026-11-05T07:06:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Public AI Libraries**는 키오스크라고 불리는 공유 AI 워크스테이션을 미국 전역의 [[libraries|공공 도서관]]에 두는 2025–2026년 국가 파일럿입니다. 미국 의회 도서관, Metagov, Public Knowledge의 파트너십이며 유타주와 뉴저지주 주립 도서관이 참여했고, 프로그램 페이지를 마지막으로 읽었을 때 5개 주의 도서관 8곳이 키오스크를 운영하고 있었습니다. 전제는 훈련이 아니라 제공입니다. [[digital-divide|도서관이 개별 이용자가 살 수 없는 접근을 공급]]하며, 누군가 도움을 줄 수 있는 직원 상주 공간에서 그렇게 합니다.

## 이것으로 무엇을 할 수 있는가

각 키오스크는 도서관이 이미 보유한 컴퓨터에서 실행되는 클라우드 호스팅 워크스테이션입니다. 연구, 학습, 일반 질문을 위한 채팅 보조 도구, 이미지·음악·영상 생성, 코딩과 소규모 앱 프로젝트를 위한 온라인 IDE, 그리고 대화형 학습 가이드와 도서관이 검증한 자료를 갖춘 교육 영역을 제공합니다. 이용자마다 별도 계정을 받으므로 공유 기기에서도 작업과 이력이 사적입니다. 프로그램은 자체 플랫폼에 이용자의 대화나 생성 콘텐츠를 저장하지 않는다고 밝힙니다.

## 누구를 위한 것인가

키오스크를 운영하려는 공공 도서관(프로그램은 파일럿 사이트 신청을 받습니다)과 그것을 사용하는 이용자를 지원하는 직원입니다. 공개된 활용 사례는 구직 신청, 사업 계획, 교과 과정, 창작 프로젝트입니다. 이 코드는 공익 AI 서비스를 만드는 사람 누구에게나 읽을 가치가 있습니다. 프로그램 사이트와 키오스크 프런트 엔드는 [libraries-kiosk](https://github.com/forpublicai/libraries-kiosk)에서 GPL-3.0이고, 채팅 서비스는 [chat.publicai.co](https://github.com/forpublicai/chat.publicai.co)에 있는 [[open-source|오픈 소스]] Public AI Inference Utility(MIT)이며, 누구나 무료 계정으로 사용할 수 있는 Open WebUI 배포판입니다.

## 참고 사항과 유의점

- 참여 도서관은 **키오스크 배포당 연 1,000달러**를 부담합니다. 파일럿 자체는 신청한 사이트로 제한됩니다.
- 프라이버시 성명은 프로그램의 주장이지 감사를 거친 발견이 아닙니다. 도서관은 자체 데이터 처리 계약에서 보존 기간과 아동 안전 조건을 확인해야 합니다.
- 로드맵의 두 번째와 세 번째 단계, 즉 도서관이 지역 아카이브를 수집하고 그 결과 시스템을 통치하게 하는 일은 출시된 것이 아니라 계획된 것입니다.

## 연결된 개념

- [[libraries]]
- [[digital-divide]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[open-source]]
- [[lifelong-learning]]
- [[llm]]
