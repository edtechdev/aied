---
title: "Moodle AI 텍스트 문제 유형"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "대규모 언어 모델로 자유 서술 답안을 문제별 프롬프트와 선택적 채점 기준에 비추어 채점하는 오픈 소스 Moodle 문제 유형(GPL v3)입니다. OpenAI, Azure 또는 자체 호스팅 Ollama 모델을 사용하며 AI의 피드백을 사람 채점자에게 보여 줍니다."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
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

대부분의 AI 퀴즈 통합은 모든 답안을 고정된 채점 호출로 보냅니다. 이 Moodle 문제 유형은 반대로 합니다. 교수자가 루브릭을 씁니다. 각 문제에는 모델에게 응답을 어떻게 평가할지 알려 주는 **프롬프트**와, 점수가 어떻게 부여되는지 기술하는 선택적 **채점 기준**이 붙습니다. 그래서 "과거 시제로 문장 하나를 쓰시오" 문항은 오류가 없으면 10점, 문법이 무너지면 0점, 철자 오류마다 1점 감점을 지정할 수 있습니다. 모델은 점수와 [[feedback|피드백]]을 반환하고, 교수자는 손으로 채점할 때 그 피드백을 응답 옆에서 볼 수 있습니다.

## 이것으로 할 수 있는 것

Moodle 퀴즈에 AIText 문제를 추가하고 프롬프트와 채점 기준을 쓰고, 미리보기 시도를 반복하는 대신 편집 양식의 AJAX **프롬프트 테스터**로 프롬프트를 시험하십시오. 채점은 문제 유형과 함께 설치해야 하는 두 개의 동반 문제 동작(즉시 및 지연)을 통해 실행되므로 AI 채점이 Moodle 핵심 동작과 분리됩니다. 레거시 `interactivecountback` 동작을 사용한 기존 시도는 업그레이드 시 이전됩니다. 모델에 접속할 수 없으면 채점은 오류를 내는 대신 품질이 낮아지므로 시도를 잃지 않습니다. 문제가 네이티브 퀴즈 유형이므로 결과는 다른 항목처럼 성적부에 들어갑니다. 강좌 팀이 [[automated-assessment|자동 채점]]을 데모가 아니라 파일럿으로 다루려면 바로 이것이 필요합니다.

설계는 또한 [[ai-feedback-quality|피드백 품질]]이 결정되는 곳에 루브릭을 둡니다. 공급업체 기본값이 아니라 교수자가 쓴 프롬프트 안입니다. 그것이 이 도구의 정직한 사용입니다. 검토하고 수정할 수 있는 기준입니다. 다만 품질의 상한이 루브릭이라는 뜻이기도 하며, 모호한 프롬프트는 모호한 채점을 낳습니다. 기관은 [[formative-assessment|형성평가]]가 의존하는 저부담의 빈번한 점검에 이것을 끌어다 씁니다. 사람이라면 밤마다 짧은 답안 마흔 개를 읽어야 하는 자리입니다.

## 누구를 위한 것인가

이미 사이트를 운영하는 Moodle 관리자와 개발자, 별도 플랫폼이나 상용 라이선스 없이 AI 채점을 원하는 교수자, 연구할 수 있는 통제 가능한 채점 파이프라인이 필요한 연구자입니다. Moodle 4.5 이상과 모델 API 접근이 필요합니다. Moodle의 AI 하위 시스템을 통한 OpenAI 또는 Azure, 또는 Local AI Manager를 통한 자체 호스팅 Ollama 인스턴스이며, 후자는 학생 텍스트를 로컬 인프라에 둡니다. 플러그인은 Marcus Green이 유지 관리하고 Moodle 플러그인 마켓플레이스에 있으며, 이 페이지를 검증했을 때 별 33개와 포크 36개가 있었습니다.

## 참고사항과 유의점

GPL v3 이상의 오픈 소스이지만 무료라고 해서 운영이 무료인 것은 아닙니다. 누군가는 모델 API 비용을 지불하며, 채점 품질은 모델 선택과 프롬프트 설계에 달려 있습니다. 원격 공급자를 쓰면 자유 서술 답안이 Moodle 서버를 떠나므로, 무엇을 보낼 수 있는지는 기관의 데이터 계약이 결정합니다. 학생 작업을 외부로 보낼 수 없는 사이트를 위해 자체 호스팅 Ollama 경로가 있습니다. 저장소는 공개된 정확도나 일치도 연구를 제시하지 않으므로, LLM 채점이 인간 채점과 동등하다는 가정으로 이 플러그인을 도입해서는 안 됩니다. 어떤 성적이든 무게를 가지려면 [[assessment-validity|타당도]]가 인간 점수에 비추어 지역에서 확립되어야 합니다. 동반 동작은 하드 의존성입니다. 문제 유형만 설치하면 문제를 채점할 수 없습니다.

## 연결된 개념

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
