---
title: "conText"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "노트 사진, PDF 또는 텍스트를 읽고 학생과 소크라테스식으로 대화하며, 학생이 말하는 동안 연결한 아이디어를 실시간 그래프로 그려 주는 무료 브라우저 튜터입니다. 영어와 스페인어로 작동합니다."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
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

conText는 [[intelligent-tutoring|AI 튜터링]]이 대부분 이야기하면서도 좀처럼 구현하지 않는 방향을 가장 깔끔하게 보여 주는 작은 사례입니다. 모델은 학생의 질문에 답하지 않고 다음 질문을 던지며, 학생의 아이디어는 말하는 동안 그래프로 그려집니다. 노트 페이지 사진, PDF 또는 텍스트를 업로드하면 도구가 먼저 자신이 이해한 것을 말하고, 그다음 음성 [[socratic-method|소크라테스식]] 대화를 시작합니다. 학생이 언급하는 모든 아이디어는 실시간 [[knowledge-graph|지식 그래프]]의 노드로 나타나고, 대화가 그것들을 연결할 때 간선이 생기며, 패널은 연결되지 않은 아이디어가 몇 개 남았는지 보고합니다.

## 이것으로 할 수 있는 것

순환은 일부러 짧습니다. 자료가 들어가고(최대 10MB, PDF 8페이지 또는 텍스트 15,000자), 튜터가 그것을 다시 읽어 주며, 대화는 음성으로 이루어집니다. 사이트는 튜터가 채점하지 않고 학생 대신 쓰지도 않는다고 말합니다. 그래프는 세션을 나중에 가치 있게 만드는 산출물입니다. 학생이 실제로 관계에 넣은 아이디어와 느슨하게 남은 아이디어를 보여 주며, 이는 채팅 기록보다 훨씬 구체적으로 검토할 수 있는 대상입니다. 세션은 그래프 XML 파일로 내보내 다른 날 다시 업로드해 이어 갈 수 있고, 삭제 버튼은 즉시 지우며, 그렇지 않으면 서버가 한 시간 뒤에 버립니다.

그 조합, 즉 답을 보류하는 튜터와 추론의 시각적 기록은 [[scaffolding|스캐폴딩]]과 [[metacognition|메타인지]]적 성찰이 이루려는 것의 한가운데에 있으며, 교사에게 완성된 에세이나 정답 숫자가 아니라 구체적으로 물어볼 거리를 줍니다. 사이트 자신의 틀 짓기는, 생성형 AI가 그것을 만들어 낼 수 있게 된 지금 올바른 결과는 더 이상 이해를 증명하지 못하므로 과정이 보여야 한다는 것입니다.

## 누구를 위한 것인가

읽기나 문제 세트를 풀면서 답을 대신 받기보다 질문을 받고 싶은 학생, 학생이 아이디어를 연결할 수 있는지 저부담으로 점검하고 싶은 교사, 과정 증거의 구체적 사례를 찾는 교수진 개발자입니다. 교사용으로는 영어, 스페인어, 포르투갈어, 프랑스어의 교육과정 정렬 안내서가 있고, 도구 자체는 영어와 스페인어로 작동하며, 둘러보기 영상은 스페인어입니다.

## 참고사항과 유의점

학생용 도구에는 가격이나 계정이 공개되어 있지 않으며, 기관 배포(클라우드, 온프레미스 또는 하이브리드)는 맞춤 제안과 회의를 통해 제공됩니다. "무료"는 2026년 11월 현재 공개 데모의 상태로 취급하고 보장으로 보지 마십시오. 텍스트와 이미지는 Claude로 구동되는 호스팅 서비스로 가며, 사이트 자체가 업로드 전에 이름, 금액, 주소, 회사명을 제거하라고 사용자에게 말합니다. 이는 비식별화 부담을 플랫폼이 아니라 업로드하는 사람에게 옮깁니다. 세션은 내보내지 않으면 한 시간 뒤 스스로 삭제됩니다. 기반 회사는 기관에 더 넓은 추론 그래프 평가 플랫폼도 판매하며, 연역적·귀납적·귀추적·유추적 그래프를 구분한다는 주장은 네 개의 참고 문헌에서 나옵니다. 사이트는 그것을 시연이라고 부르며, 규모에서의 검증은 아직 남아 있습니다.

## 연결된 개념

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
