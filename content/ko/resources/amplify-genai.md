---
title: "Amplify GenAI"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Vanderbilt의 MIT 라이선스 엔터프라이즈 생성형 AI 플랫폼으로, 기관 자체 AWS 계정에 배포됩니다: 로컬 문서에 기반한 맞춤 어시스턴트, 검색 증강 답변, 조직 전체 공유, 개별 메시지까지 내려가는 비용 회계를 제공합니다."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
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

Amplify GenAI는 상용 어시스턴트의 캠퍼스 전체 라이선스와 반대되는 베팅입니다. 기관이 자체 Amazon Web Services 계정 안에서 플랫폼을 직접 운영하고 사용한 만큼 지불합니다. Vanderbilt는 자사 커뮤니티를 위해 그것을 만들었고, 세 개 저장소에 걸쳐 MIT로 공개했으며, 이제 좌석당 엔터프라이즈 계약의 대안으로 다른 조직에 제공합니다. 비싼 부분은 좌석 수가 아니라 모델이어야 한다는 논변입니다.

## 이것으로 할 수 있는 것

사용자는 문서를 업로드하거나 데이터 원본을 연결해 맞춤 어시스턴트를 만들고, 어시스턴트는 일반 훈련에만 의존하지 않고 그 자료에 대한 [[rag|검색 증강 생성]]으로 답합니다. 어시스턴트는 조직 전체에 공유되고, 하나의 대화로 연결되며, 프롬프트 템플릿을 받을 수 있습니다. 플랫폼은 또한 PowerPoint와 Word 파일, 다이어그램, 시각화를 만들어 냅니다. 관리자는 공유 서비스에 필요한 것을 얻습니다. 메시지 수준까지의 비용 회계, 사용자별 한도, 폴더와 워크스페이스, SSO, 그리고 이 모든 것이 기관이 통제하는 배포 안에 있습니다.

[[higher-ed|대학]]에 가장 중요한 설계 결정은 회계 모형입니다. Vanderbilt는 파일럿 사용자 1,300명에서 AWS를 포함해 사용자당 월 약 \$3이었고, 그 사용자의 절반은 월 토큰 비용이 \$1 미만이었다고 보고합니다. 이는 대학이 사례 연구로 제시하는 수치이며 감사된 벤치마크가 아닙니다. 사용량 기반 청구는 소수 사용자가 대부분의 일을 하는 캠퍼스, 즉 AI 도입의 정상적 형태에 보상을 주며, 재무 부서의 질문("학생당 비용은 얼마입니까?")을 계약서가 아니라 로그에서 답할 수 있게 합니다.

## 누구를 위한 것인가

이미 AWS에서 워크로드를 운영하며 상용 엔터프라이즈 어시스턴트에 대한 커뮤니티 지원 대안을 원하는 중앙 IT와 CIO 사무소, 강의 자료를 공급업체의 소비자 제품에 보내지 않고 그 자료에 근거한 어시스턴트가 필요한 교수진, 사람들이 모델로 무엇을 하는지 한곳에서 보고 싶은 기관입니다. 기관 자체 계정에 배포되므로 데이터 상주 문제는 공급업체의 약속이 아니라 배포로 답해집니다.

## 참고사항과 유의점

라이선스는 무료지만 운영은 무료가 아닙니다. 기관이 AWS와 모델 공급자에게 지불합니다. 모델 선택은 Amazon Bedrock(Anthropic, Mistral) 또는 OpenAI와 Microsoft Azure를 거치며, 자체 로컬 모델 운영은 구현되어 있지 않습니다. 프로젝트는 개별 배포를 지원할 수 없다고 분명히 밝히고 조직을 상용 파트너에게 안내하므로, 현실적 비용에는 직원이나 계약업체가 포함됩니다. 세 개 저장소(프런트엔드, 백엔드, 인프라)로 된 배포이며 별이 수천 개가 아니라 수십 개이고, 위의 비용 비교는 통제된 연구가 아니라 Vanderbilt 자신의 경험입니다. 추론을 자기가 소유한 하드웨어에 두고 싶은 기관은 [MindRouter](/aied/resources/mindrouter/)를 살펴보고 두 글을 함께 읽어야 합니다. Amplify는 공급업체 모델 위의 애플리케이션 계층이고, MindRouter는 자체 GPU 위의 게이트웨이입니다.

## 연결된 개념

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
