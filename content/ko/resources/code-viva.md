---
title: "Code Viva"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "프로그래밍 수업의 모든 학생에게 구두 코드 방어의 서면·시간제 버전을 돌려 주고, 교수자가 승인할 점수안을 인용 근거와 함께 제시하는 무료 브라우저 도구입니다."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

Code Viva는 프로그래밍 수업의 모든 학생에게 [[oral-assessment|구두 시험(viva)]]의 서면·시간제 버전을 학생당 약 15~20분씩, 교수자가 방에 없어도 돌려 줍니다. 학생이 제출한 코드와 커밋 이력을 읽고, 그 학생 자신의 함수·이름·커밋에 관한 질문 네에서 여섯 개를 만든 뒤, 각 학생에게 답변용 개인 링크를 줍니다.

## 이것으로 할 수 있는 것

제출물은 Gradescope 내보내기, Canvas 다운로드 zip, 학생별 폴더 zip, 또는 읽기 토큰이 있는 GitHub Classroom에서 옵니다. 교수자는 세션 길이, 질문 수, 마감을 정하고, 연장 시간을 1.25배에서 3배로 표시하며, 링크를 보내기 전에 생성된 질문을 읽고 고치거나 바꿀 수 있습니다. 질문은 재귀의 기저 사례, 경계 가드, 자료구조 선택, 불투명한 변수 이름, 규모와 추적, 과제 명세서의 문장, 그리고 한꺼번에 몰아넣은 커밋이나 심야 커밋 같은 커밋 패턴을 다룹니다. 답변은 응답 코드로 돌아오고, 검토 화면은 각 대화 기록 옆에 그것이 근거로 삼은 문장과 함께 0에서 3 사이의 점수안을 보여 주며, 대화가 얼마나 필요한지에 따라 정렬된 확인 대기열도 제공합니다. 결과는 CSV로 내보낼 수 있고, 열한 개의 데모 강좌에서 독자가 지어낸 데이터로 이 전체 흐름을 시험해 볼 수 있습니다.

## 누구를 위한 것인가

학생이 자기 코드를 설명할 수 있다는 증거를 원하면서도 모든 학생이 아니라 짧은 명단의 학생과 이야기하고 싶은 프로그래밍 수업 교수자입니다. 커밋에 관한 질문 덕분에 이 도구는 [[process-oriented-assessment]]의 한 형태가 됩니다.

## 참고사항과 유의점

모든 것이 브라우저에서 돌아갑니다. 강좌는 JSON 내보내기가 가능한 로컬 저장소에 있고, 질문은 브라우저가 서버로 보내지 않는 링크 부분에 실려 이동하며, 답변은 학생이 보내기로 선택한 코드로만 돌아오므로 어떤 학생 데이터도 제3자에게 도달하지 않습니다. 질문 생성기는 모델 기반이 아니라 규칙 기반입니다. 도구 자체의 설명에 따르면 코드 판독기는 휴리스틱이어서 특이한 서식이나 매크로가 함수를 가릴 수 있고, 점수는 코드를 이해한 것이 아니라 어휘를 아는 것을 보상할 수 있습니다. 그래서 점수는 교수자가 승인하는 제안이며, 위험(stakes)을 낮게 유지하라고 권합니다. 라이선스와 소스 저장소는 공개되어 있지 않고, 링크가 질문을 실어 나르기 때문에 링크는 몇 킬로바이트에 이르러 학습관리시스템 메시지 상자에서 줄바꿈될 만큼 깁니다.

## 연결된 개념

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
