---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-09-20T17:30:00-04:00"
type: resource
summary: "MAIC의 오픈소스 공개 버전: 주제나 문서를 슬라이드, 퀴즈, 인터랙티브 시뮬레이션, 프로젝트 기반 활동으로 바꾸어 AI 교사와 AI 급우가 전달하는 다중 에이전트 교실입니다."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**OpenMAIC**은 [[intelligent-tutoring|MAIC 연구]]에 기술된 MAIC 다중 에이전트 교실의 오픈소스 공개 버전입니다. 주제를 설명하거나 자신의 자료를 첨부하면 슬라이드, 퀴즈, 인터랙티브 HTML 시뮬레이션, 프로젝트 기반 활동으로 이루어진 완전한 수업을 생성하고, 이를 말하고 칠판에 그리며 토론에 참여하는 AI 교사와 AI 급우를 통해 전달합니다. 읽기만 할 수 있는 교실이 아니라 실제로 운영할 수 있는 교실의 코드입니다.

## 이 도구로 할 수 있는 것

원클릭 생성은 프롬프트나 업로드된 문서, 오디오, 비디오로부터 몇 분 만에 수업을 만들어냅니다. 다중 에이전트 계층은 학습자가 참여하거나 호출될 수 있는 교실 토론, 칠판 그림이 곁들여진 페르소나 간 원탁 토론, 교사가 슬라이드나 도표로 답하는 자유 형식 질의응답을 더합니다. 세션은 슬라이드 자료, 퀴즈, 인터랙티브 시뮬레이션, PBL을 지원하며, 편집 가능한 `.pptx` 또는 인터랙티브 `.html`로 내보낼 수 있습니다. 버전 1.0.0(2026년 8월)은 에이전트 워크벤치를 추가했습니다: 전체 강좌를 계획하고 수정하는 채팅 우선 워크스페이스, 취소·재개·조종할 수 있는 서버 기반 지속 세션, 슬라이드·퀴즈·인터랙티브·이미지·비디오·음성을 아우르는 내장 스킬 24개가 그것입니다. `SKILL.md` 패키지는 에이전트 하네스가 메시징 앱에서 교실을 구축할 수 있게 합니다.

## 누구를 위한 것인가

생성되었지만 여전히 편집할 수 있는 자료를 원하는 교수진과 강좌 팀, 다중 에이전트 활동을 프로토타이핑하는 교수설계자, 호스팅된 제품이 아니라 직접 호스팅할 수 있는 교실이 필요한 개발자를 위한 것입니다. 학교는 Vercel이나 Docker로 배포할 수 있으며, 프로젝트는 open.maic.chat에 호스팅된 데모를 제공합니다.

## 참고 사항

MIT 라이선스이며, 영어와 중국어 사용자 가이드와 Discord 및 Feishu의 활발한 커뮤니티가 있습니다. 모형 중립적입니다: 최소한 하나의 LLM 제공자 키를 공급해야 하며, 선택적 로컬 구성 요소(Lemonade는 로컬 모형용, FunASR은 음성 인식용)로 스택의 더 많은 부분을 오프라인에서 실행할 수 있습니다. 따라서 "무료"는 소프트웨어를 설명하는 것이지 추론 비용을 설명하는 것이 아닙니다. 뒤에 있는 논문은 *Journal of Computer Science and Technology*(2026, DOI 10.1007/s11390-025-6000-0)에 게재되었고, 저장소는 2026년 9월까지 스타 38,000개를 넘었습니다.

## 연결된 개념

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]
