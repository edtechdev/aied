---
title: "NowComment"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "무료 계정 기반 주석 플랫폼으로, 스레드 토론이 특정 문장, 이미지 영역, 비디오 타임스탬프에 붙습니다. OpenAI 기반 'AI 사고 파트너'가 선택한 구절에 대한 답변 초안을 써 주면 학생이 편집한 뒤 게시할 수 있습니다."
url: https://nowcomment.com/
author: "Paul Allison"
author_url: https://youtube.com/@paulallison
resource_type: [software, collection of activities]
access: [free with account]
last_verified: "2026-11-12"
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [collaborative-learning, student-ai-interaction]
assessment: [peer-assessment, ai-feedback-quality, formative-assessment]
audience: [instructors, learners, faculty developers]
level: [k 12, higher ed]
translation_of: resources/nowcomment
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

NowComment는 텍스트, 이미지 또는 비디오를 토론의 표면으로 바꿉니다. 댓글이 그것이 응답하는 정확한 문장, 문단, 이미지 영역 또는 타임스탬프에 스레드로 붙으므로, 학급 대화가 댓글 피드로 표류하지 않고 증거에 고정됩니다. 단순한 주석 도구와 구별되는 것은 유지관리자가 같은 표면에 구축한 AI 계층입니다. [OpenAI 기반](https://nowcomment.com/) "AI 사고 파트너"에게 독자가 선택한 구절에 대해 물을 수 있고, 결과는 답장이 아니라 편집 가능한 초안으로 도착합니다.

## 이것으로 할 수 있는 것

문서를 업로드하고 독자를 초대하면, 선택한 구절마다 여러 대화가 붙을 수 있고 측면 칼럼이나 인라인으로 표시됩니다. 그 위에서 AI 기능이 지금 이 도구를 볼 이유입니다. 두 번 클릭한 문장이나 문단에서 **Ask AI**를 누르면 파트너 선택기가 열립니다. 독자는 *GPT 사고 파트너*를 고르고, 질문을 쓰고, 독자에 관한 선택적 메모를 더하고, 출력이 쓸 만해질 때까지 **Resubmit**을 반복할 수 있습니다. 그다음 답장은 게시 전에 그 자리에서 편집되므로, 학생은 AI 텍스트의 전달자가 아니라 공동 저자가 됩니다. 검증된 파트너 디렉터리가 사용자가 만든 파트너와 나란히 있고, 사이트의 도움말 자료에는 어시스턴트가 수정본을 만들어 내는 대신 독자에게 수정 계획을 세우라고 요구하게 하는 [[prompt-engineering|프롬프트]] 안내가 있습니다. 동반 *GPT 대화 노트북* 패턴은 주간 서면 기록과 그것이 연결하는 읽기 자료, 이미지, 비디오를 모으고 문서별로 [[privacy|프라이버시]]를 설정하므로, AI 대화가 세션마다 초기화되지 않고 한 학기 동안 축적됩니다. 내장 분석은 문서별 댓글과 방문을 세고 CSV로 내보냅니다.

주석 순환 자체는 더 오래된 의미의 [[collaborative-learning|협력 학습]] 설계입니다. 독자들이 같은 증거에 응답하고, 스레드는 누가 어느 문장에 관해 무엇을 말했는지 기록합니다. 답장이 동료나 AI일 수 있으므로 저부담 [[peer-assessment|동료 평가]] 표면으로도 작동하며, 파트너 프롬프트는 정답이 아니라 [[ai-feedback-quality|유용한 AI 피드백]]의 성질을 겨냥할 수 있습니다.

## 누구를 위한 것인가

K-12나 고등교육에서 정독, 문서 연구, 미디어 분석을 운영하는 교사, 그리고 학생이 비공개 채팅 창이 아니라 공개된 자리에서 어시스턴트와 텍스트를 협상하기를 원하는 교수진 개발자입니다. 유지관리자 Paul Allison은 [자신의 YouTube 채널](https://youtube.com/@paulallison)에 정기적인 둘러보기와 교실 사례를 올리며, 작문 교실의 AI 사고 파트너에 관한 시리즈도 있습니다. 학급을 본격적으로 맡기기 전에 파트너 워크플로를 보는 실용적 방법입니다.

## 참고사항과 유의점

계정은 무료이며, 문서는 공개하거나 초대한 그룹과 공유할 수 있습니다. AI 파트너는 OpenAI 대규모 언어 모델로 실행되므로, 선택한 구절과 질문이 플랫폼 자체 호스팅을 떠나 해당 공급자의 약관을 따릅니다. 교육구는 미성년자와 함께 쓰기 전에 데이터 처리 약정을 읽어야 합니다. 출력은 사이트가 아직 확장 중이라고 말하는 토큰 한도로 제한되며, 파트너 디렉터리는 로그인 뒤에 있고, AI 표면은 제품에서 빠르게 움직이는 부분입니다. 여기 기술된 어떤 기능이든 2026년 11월 사이트의 상태로 취급하고 확정된 기능 집합으로 보지 마십시오.

## 연결된 개념

- [[collaborative-learning]]
- [[peer-assessment]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[human-ai-collaboration]]
- [[student-ai-interaction]]
