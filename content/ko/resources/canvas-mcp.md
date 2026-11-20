---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Claude, Cursor, Codex 및 다른 에이전트가 Canvas LMS 안에서 읽고 행동할 수 있게 하는 오픈 소스 MCP 서버입니다. 학생, 교육자, 학습 설계자용 도구를 제공하며 쓰기 작업에는 게이트가 걸려 있고 학생 데이터 익명화는 선택 사항입니다."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Canvas MCP**는 Vishal Sachdev가 만든 오픈 소스 Model Context Protocol 서버로, AI 클라이언트를 Canvas LMS 인스턴스에 연결합니다. 에이전트는 학생의 예정된 과제를 나열하고, 강좌의 과제와 제출물을 읽고, 학급에 메시지를 보내고, 강좌의 접근성을 감사할 수 있으며, 이 모든 것은 임기응변식 화면 스크래핑이 아니라 서버가 노출하는 도구를 통해 이루어집니다.

## 이것으로 할 수 있는 것

서버는 세 갈래의 도구 묶음을 제공합니다. 학생 도구는 "이번 주에 무엇이 마감인가", "내가 모든 것을 제출했는가", "남은 퀴즈 응시 횟수는 몇 번인가"에 Canvas 자체의 `self` 엔드포인트로 답합니다. 교육자 도구는 과제를 나열하고 만들고, 제출물을 읽고, 일괄 채점하고, 대화를 보내고, 과제 분석을 끌어옵니다. 학습 설계자 도구는 강좌 품질 점검과 WCAG 접근성 스캔을 다룹니다. 모두 128개까지 도구를 쓸 수 있지만, 기본 프로필은 그보다 적게 등록하며 기능 게이트가 걸린 도구가 수를 늘립니다. 도구 위에 여덟 개의 에이전트 스킬이 여러 단계로 된 레시피를 묶어 제공합니다. 주간 계획, 아침 강좌 상태 점검, 일괄 채점 결정 트리, 동료 검토 파이프라인, 학기 전 강좌 감사 같은 것이며, `skills.sh`를 통해 40개 이상의 에이전트에 설치할 수 있습니다.

## 누구를 위한 것인가

강좌를 둘러싼 일상적 읽기와 메시지 전달을 에이전트에게 맡기려는 교수자, 그리고 LMS에 연결된 에이전트가 실제로 무엇에 닿을 수 있는지 평가하는 [[institutional-ai-infrastructure|기관 팀]]입니다. 학습 설계자에게는 여기서 자동화된 강좌 검토에 가장 가까운 것을 얻습니다. 이 프로젝트는 일반적인 챗봇이 아니라 한 기관의 LMS 수준에서 [[agentic-ai|에이전트 도구]]가 어떻게 작동하는지 보여 주는 실제 사례입니다.

## 참고사항과 유의점

설정은 로컬에서 이루어집니다. Python 3.11 이상, Canvas API 토큰과 URL, MCP 클라이언트가 필요하며, Claude Desktop용으로는 두 번 클릭해 설치하는 확장이 있습니다. 공개 호스팅 서버는 종료되었으므로, 공유 배포는 기관 자체 인증 뒤에서 자체 호스팅하는 것을 뜻합니다. 쓰기 도구에는 게이트가 걸려 있습니다. HTTP 서버는 쓰기 도구를 명시적으로 허용하지 않는 한 읽기 전용이고, 삭제에는 확인 토큰이 필요하며, 코드 실행은 실패하면 닫히는 샌드박스에서 실행됩니다. 프라이버시 통제는 선택 사항입니다. 응답 익명화, 이메일 마스킹, PII 필터링을 켜야 하며, README는 이것들이 FERPA 의무를 지원할 수는 있어도 준수를 성립시키지는 않는다고 신중히 밝히고, 준수는 배포와 AI 공급자에 달려 있다고 말합니다. 서버에는 텔레메트리가 없지만 Canvas와 선택한 클라이언트는 각자의 로그를 남깁니다. 이 프로젝트는 MIT 라이선스이고 활발히 개발되고 있으며, 현재의 도구 이름과 구성에 대해서는 프로젝트 자체 안내서가 기준입니다.
