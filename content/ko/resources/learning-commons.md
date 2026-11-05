---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Mark Zuckerberg와 Priscilla Chan의 교육 이니셔티브가 만든 개방형 AI 인프라로, 표준·교육과정·학습과학 데이터의 지식 그래프, LLM 출력을 평가하는 Evaluators, 교사의 워크플로를 위한 모델 비종속적 agent skills를 제공합니다."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**Learning Commons**는 Mark Zuckerberg와 Priscilla Chan의 교육 이니셔티브로, Chan Zuckerberg Initiative의 학습과학 작업을 에드테크 제품이 실제로 구축되는 기반으로 옮기기 위해 2025년에 출범했습니다. 그 논지는 교육학적이라기보다 인프라적입니다. 연구도 있고 학술 표준도 있고 고품질 교육과정도 있지만 그것들이 서로 다른 시스템에 놓여 있어, 개발자는 가장 손쉽게 닿는 것 위에 구축하게 됩니다. 이 단체는 GitHub에 세 가지 오픈 도구 — Knowledge Graph, Evaluators 모음, [[agentic-ai|Agent Skills]] — 를 공개하고, 교육과정을 [[edtech-platform|학습관리시스템]]에 불러오는 Curriculum Sync를 더한 플랫폼을 운영합니다.

## 이것으로 할 수 있는 것

**Knowledge Graph**는 학술 표준, 교육과정, 학습과학 연구를 하나의 공유 스키마 아래 엔티티와 관계로 모델링하므로, 도구가 자체 데이터 파이프라인을 구축하지 않고도 생성된 콘텐츠를 표준에 정렬할 수 있습니다. **Evaluators**는 [[llm|LLM 출력]]의 속성을 학습과학의 관점에서 측정합니다 — 텍스트 복잡도, [[feedback]], 학술 표준 정렬, 지속 가능한 역량 — 그리고 npm과 PyPI에 공개된 Python 및 TypeScript SDK와 함께 제공되어 생성 콘텐츠를 채점하거나 후보 모델을 비교하는 데 쓰입니다. **Agent Skills**는 흔한 교사 워크플로를 위한 지침, 참조 자료, 가드레일을 개방적이고 모델 비종속적인 형식으로 묶습니다. 이해도 점검, 수준별 수업 차별화, 표준에 정렬된 수업 계획, 수업 준비입니다. 실제로 나머지 둘을 신뢰할 수 있게 만드는 것은 이 그래프입니다. 콘텐츠 정렬이 주장이고, 그래프는 그 주장을 대조하는 기준이기 때문입니다.

## 누구를 위한 것인가

[[curriculum-design|교육과정]]과 평가 제품에 AI 기능을 구축하는 개발자, 그리고 그러한 제품이 정렬하는 대상 데이터를 공급하는 교육과정 또는 표준 팀. 교수자는 agent skills를 스스로 사용할 수 있지만, 저장소 자체의 위치 설정은 도구를 출시하는 사람들을 위한 인프라입니다.

## 유의 사항과 한계

[[open-source|소스]]가 개방적이라고 해서 데이터가 개방적인 것은 아닙니다. Knowledge Graph 코드는 MIT이지만 각 데이터셋은 자체 접근 라벨 — Open, Open + Gated, Gated — 을 가지며, Gated 콘텐츠는 저장소가 제시하는 개방형 라이선스의 적용을 명시적으로 받지 않으므로 재사용 권리를 전제하기 전에 데이터셋 목록을 확인해야 합니다. Evaluators 코드는 MIT이고 프롬프트 내용은 CC BY 4.0이지만, 그것이 사용하는 주석이 달린 CLEAR 및 PERSUADE 2.0 코퍼스는 CC BY-NC-SA 4.0입니다. 플랫폼과 그 배후의 데이터셋에는 계정이 필요합니다. 2026-11-04에 확인한 저장소 활동: Knowledge Graph 167개 스타, Evaluators 88개, Agent Skills 41개. 이 이니셔티브는 CZI가 자금을 대며, 문제를 규정하는 방식은 자금 제공자 자신의 것입니다.

## 연결된 개념

- [[curriculum-design]] — 생성 콘텐츠를 표준과 교육과정에 정렬하기 위해 존재하는 그래프
- [[open-source]] — MIT와 Apache-2.0 코드, 데이터는 데이터셋별 라이선스
- [[educational-nlp]] — 평가기는 LLM 출력 위의 텍스트 측정 계층
- [[agentic-ai]] — 모델이 수행할 워크플로를 묶은 스킬
- [[edtech-platform]] — Curriculum Sync가 교육과정을 학습관리시스템에 불러옴
- [[llm]] — 평가의 대상이자 스킬의 소비자
