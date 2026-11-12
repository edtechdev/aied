---
title: "MindRouter"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "아이다호 대학의 Apache-2.0 추론 게이트웨이로, vLLM과 Ollama GPU 노드로 된 캠퍼스 클러스터를 하나의 OpenAI 호환 API 뒤에 두고 공정 분배 스케줄링, 사용자별 토큰 할당량, SSO, 감사 로깅, 실시간 GPU 및 에너지 모니터링을 더합니다."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

캠퍼스 AI 논의는 대부분 어떤 모델을 살지로 시작해서 더 어려운 질문 앞에서 멈춥니다. 그것이 어디서 실행되는지, 누가 계량하는지, 누가 로그를 볼 수 있는지입니다. MindRouter는 그 두 번째 질문에 대한 답입니다. 기관이 소유한 GPU 위의 vLLM과 Ollama 노드로 이루어진 이기종 [[llm|LLM]] 서버 클러스터 앞에 서서, OpenAI, Anthropic, Ollama 방언을 구사하는 하나의 API를 노출하고 그들 사이를 번역해 기존 클라이언트 코드가 계속 작동하게 하는 자체 호스팅 게이트웨이입니다.

## 이것으로 할 수 있는 것

도구를 공급업체 엔드포인트가 아니라 게이트웨이를 향하게 하십시오. 그 뒤에서 MindRouter는 공유 배포에 필요한 부분을 처리합니다. 가중 디피싯 라운드 로빈(weighted deficit round robin)을 사용하는 공정 분배 스케줄링, 사용자별 토큰 및 요청 할당량, Azure AD/Entra, Google, 모든 OIDC 공급자 또는 SAML 2.0을 통한 선택적 SSO가 있는 역할 기반 접근, 프롬프트와 응답과 아티팩트의 전체 감사 로깅입니다. GPU 사이드카 에이전트는 노드별 활용률, 메모리, 온도, 전력을 보고하므로 관리자는 요청당 에너지 비용을 보고 유지보수 일정이 잡히면 백엔드를 우아하게 비울 수 있습니다. 채팅을 넘어 임베딩, 비전, 이미지 및 비디오 생성, 음성 합성과 음성 인식, 문서 OCR을 다루며, 코딩 어시스턴트를 위한 MCP 서버와 에이전트 스킬을 제공합니다.

대학이 이것에 주목할 이유는 프로젝트가 명명한 바로 그것입니다. [[institutional-ai-infrastructure|기관 AI 주권]]입니다. 프롬프트와 문서가 제3자 클라우드를 거치지 않고 기관이 운영하는 인프라에 남으므로, 교수회의나 [[privacy|프라이버시]] 사무소에 공급업체와의 데이터 처리 계약보다 변호하기 쉽습니다. 그 논변이 성립하는지는 기관이 GPU와 전력과 인력을 갖추었는지에 달려 있습니다. 게이트웨이는 로컬 호스팅을 관리 가능하게 만들 뿐, 싸게 만들지는 않습니다.

## 누구를 위한 것인가

이미 GPU 용량을 갖춘 연구 전산 및 중앙 IT 조직, 교수진과 학생의 사용을 한곳에서 계량하고 싶은 교수학습 센터, 호스팅 엔터프라이즈 플랫폼과 자체 추론 운영을 저울질하는 행정가입니다. 문서화된 SSO 구성과 맞춤 브랜딩이 있는 Docker Compose 배포이며, 저자가 PEARC '26에서 발표한 아이다호 대학에서 유지 관리됩니다. 2026년 11월 기준 프로젝트에는 별 22개와 포크 3개가 있습니다.

## 참고사항과 유의점

Apache-2.0으로 무료이며 오픈 소스이지만, 비용은 사라지는 것이 아니라 옮겨 갑니다. 하드웨어, 전기, 클러스터를 운영할 인력 시간입니다. 인프라 기준으로 이 소프트웨어는 젊습니다. 기여자 세 명, 단일 출발 기관, 수백 개의 태그로 번호가 매겨진 릴리스입니다. 그러므로 대학은 모델로 가는 유일한 경로가 아니라 기존 서비스 옆의 파일럿으로 운영해야 합니다. 실제 캠퍼스 부하에서 스케줄링과 할당량 동작에 대한 공개된 평가는 저장소에 없습니다. 저자 자신의 설명을 찾으려면 PEARC 논문을 보아야 합니다.

## 연결된 개념

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
