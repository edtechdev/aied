---
title: "MyEssayFeedback"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "대학 에세이를 위한 교수자 통제형 AI 피드백 플랫폼입니다. 200가지가 넘는 유형의 OER 라이브러리에서 가져온 피드백 프롬프트, AI 제안마다의 구조화된 학생 성찰, AI 학급 요약이 있는 교수자 대시보드, Canvas·Blackboard·Moodle과의 LTI 통합을 제공합니다."
url: https://myessayfeedback.ai/
author: "Eric Kean"
resource_type: [software, prompt or gem library]
access: [freemium]
last_verified: "2026-11-12"
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [metacognition, self-regulated-learning]
assessment: [ai-feedback-quality, feedback-literacy, formative-assessment]
ethics: [ai-use-disclosure]
audience: [instructors, learners, faculty developers]
level: [higher ed]
translation_of: resources/my-essay-feedback
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

MyEssayFeedback은 학생과 모델 사이에 교수자를 둡니다. 학생에게 일반 챗봇을 건네는 대신, 교수자가 과제를 정하고, AI가 어떤 종류의 피드백을 줄 수 있는지 고르고, 초안과 AI가 한 말에 대한 학생의 서면 성찰을 함께 읽습니다. 이 설계는 [[feedback|AI 피드백]]의 가치가 만들어 내는 논평의 양이 아니라 그것이 시작하는 수정 대화에 있다고 봅니다.

## 이것으로 할 수 있는 것

과제를 만들고 플랫폼의 [200가지가 넘는 공유 프롬프트로 된 OER 라이브러리](https://myessayfeedback.ai/oer/types-of-feedback-library)에서 피드백 유형을 고르십시오. 논지 발전, 논증 구조, 근거, 문법, 문체 등입니다. 직접 쓸 수도 있습니다. 학생은 LMS나 액세스 코드로 초안을 제출하고, 선택한 측면에 대한 피드백을 받은 뒤 구조화된 [[reflection|성찰]]을 완성합니다. 무엇을 받아들이고, 무엇을 의심하며, 무엇을 바꿀 것인지입니다. 교수자 대시보드는 각 에세이를 피드백 및 성찰과 나란히 보여 주고, AI가 생성한 학급 요약은 집단의 반복되는 강점과 약점을 보고해 다음 수업이 그것을 겨냥하게 합니다. [[peer-review|동료 검토]]가 AI 순환 옆에 자리하며, 통합은 LTI를 통해 Canvas, Blackboard, Moodle로 이어집니다.

성찰 단계가 연구할 만한 부분입니다. [[ai-feedback-quality|AI 피드백]]을 정답지가 아니라 판단의 대상으로 만드는 명시적 시도이며, 논평이 초안을 바꾸는지를 결정하는 기술에 관한 [[feedback-literacy|피드백 리터러시]] 연구의 설명과 가장 가깝습니다. 순환이 성적이 아니라 수정을 중심으로 만들어져 있으므로 [[formative-assessment|형성평가]] 인프라로도 기능합니다. 다만 플랫폼 자체는 채점하지 않습니다.

## 누구를 위한 것인가

AI 피드백을 원하되 그것이 하는 말에 대한 통제를 넘기지 않으려는 1학년 작문 교수자와 영어과, 인간 튜터링을 보완하는 라이팅 센터, 강좌 없이 초안에 구조화된 피드백을 원하는 개별 학생, 홈스쿨링 학부모입니다. 창립자 Eric Kean은 Western Washington University에서 20년 동안 가르쳤고 오픈 교육 기술을 개발합니다. AI 글쓰기 연구로 널리 인용되는 작문 교수자 Anna Mills가 프로젝트를 자문하고 성찰 템플릿을 썼습니다.

## 참고사항과 유의점

사이트는 학생 12,000명 이상, 강좌 700개 이상, 검토된 에세이 41,000편 이상을 보고합니다. 공급업체가 보고한 수치이며 독립적 감사가 아닙니다. FERPA 준수, GDPR 준비, 접근성도 마찬가지로 공급업체 자신의 주장입니다. 에세이는 Azure OpenAI를 거치며, 사이트는 모델 훈련에 사용되지 않는다고 밝히지만, 교육구는 마케팅 페이지에서 받아들이지 말고 데이터 처리 계약에서 확인해야 합니다. 가격은 프리미엄이며 독자층에 따라 달라집니다. 신규 교수자에게는 무료 첫 학기(요청 시, 학교당 3명으로 제한)가 있고, 그 뒤에는 학생당 학기 약 \$12–15이며, 개별 학생에게는 첫 검토가 무료인 유료 검토 단위 요금제가 있습니다. ChatGPT Plus, Packback, Grammarly와의 비교표는 공급업체 자신의 것입니다. PAIRR 프로젝트의 UC Davis 파트너십은 연구 협력이며, 플랫폼이 글쓰기를 개선한다는 공개된 증거는 아닙니다.

## 연결된 개념

- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[ai-literacy]]
