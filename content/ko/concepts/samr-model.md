---
title: SAMR 모형
created: "2026-09-10T09:50:00-04:00"
updated: "2026-10-06T18:35:00-04:00"
type: concept
foundations: [educational-development, learning-design, tpack, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/samr-model
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **SAMR 모형** — Ruben Puentedura가 개발한 기술 통합 프레임워크로, 기술이 학습을 변형하는 정도를 **대체(Substitution), 보강(Augmentation), 수정(Modification), 재정의(Redefinition)** 의 네 수준으로 분류합니다. 아래 두 수준(대체, 보강)은 기존 과제를 *향상*합니다 — 기술이 이전에 하던 일을 더 좋거나 더 편리하게 할 뿐입니다; 위의 두 수준(수정, 재정의)은 그것을 *변형*합니다 — 과제 자체가 이전에는 불가능했던 것으로 바뀝니다. [[ai-education|AI 교육]]에서 SAMR은 [[generative-ai|생성 AI]]가 기존 실행을 점진적으로 개선하는 데 쓰이는지 아니면 학습을 재개념화하는 데 쓰이는지를 묻는 표준 렌즈이며, 교수가 기술을 *받아들이는 이유*가 아니라 *통합하는 방식*을 서술하는 하나의 관점으로서 [[tpack|TPACK]]과 나란히 놓입니다.

## 생각해 볼 질문들

- AI가 한 강좌에 도입될 때, 그것은 대체([[conversational-ai|챗봇]]이 검색 창을 대체)입니까, 재정의(이전에는 불가능했던 과제가 가능해짐)입니까? 어떤 수준이 적절한지를 결정하는 것은 무엇이며 — 변형이 항상 목표입니까?
- SAMR과 [[technology-acceptance-model|기술 수용 모형]]은 서로 다른 질문에 답합니다: 수용 이론은 교수나 기관이 도구를 *왜* 받아들이는지를 묻고, SAMR은 도구가 학습을 *얼마나 깊이* 바꾸는지를 묻습니다. 주어진 AI 통합 연구는 실제로 어느 질문에 답하고 있습니까?
- [[higher-ed|고등교육]]에서의 AI 통합에 대한 [[meta-analysis-systematic-review|체계적 검토]]는 대부분의 활용이 대체 또는 보강 수준에 머물고 재정의에 근접한 연구는 단 하나뿐임을 발견했습니다. 그것이 전형적이라면, AI의 잠재력과 교실 현실 사이의 간극에 대해 무엇을 시사합니까?
- SAMR은 교육자가 기술 사용을 계획하도록 돕기 위해 [[teacher-education|교사]] [[educational-development|전문적 개발]]에서 흔히 호출됩니다. 한 수업의 SAMR 수준을 분류하는 것이 교수가 실제로 하는 일을 바꿉니까, 아니면 주로 서술적 꼬리표입니까?
- 비판론자들은 SAMR이 [[tpack|TPACK]]과 마찬가지로 인지를 기술에 의해 변하지 않는 것으로 다루는 휴머니스트 존재론에 기초하며, 권력·데이터 소유·형평성에 대해 아무것도 말하지 않는다고 주장합니다. 통합 수준 렌즈로 충분합니까, 아니면 AI 시대의 통합은 더 비판적인 틀이 필요합니까?

## 들어가며

SAMR은 학습 과제의 기술적 변형의 깊이를 서술합니다. 네 수준은 향상에서 변형으로 오르는 척도를 이룹니다: **대체** (도구가 기능적 변화 없이 다른 것을 대체함 — 검색 엔진 자리의 챗봇), **보강** (도구가 대체하고 개선함 — 타자기 위의 워드프로세서 맞춤법 검사), **수정** (과제가 크게 재설계됨 — 학생들이 AI 생성 초고의 공유 문서에서 실시간으로 협업함), **재정의** (이전에는 상상할 수 없었던 새로운 과제가 가능해짐 — 학습자가 생성 모형과 비 AI 유사물이 없는 방식으로 공동 창작함). 이 모형은 기술 통합을 계획하고 평가하는 어휘로서 [[ai-technologies|교육 기술]] [[research-methods-aied|연구]]와 [[educational-development|교사 전문적 개발]]에서 널리 쓰이며, [[tpack|TPACK]]과 [[technology-acceptance-model|기술 수용]] 프레임워크의 표준적 동반자입니다 — 물론 둘과는 다른 질문에 답합니다.

## 네 수준이 뜻하는 것

- **향상(아래 절반):** 대체와 보강은 과제의 본질을 바꾸지 않고 기존 과제를 개선합니다. 대부분의 일상적 AI 활용 — [[automated-question-generation|질문 생성]], 빠른 텍스트 생성, 요약 — 이 여기에 속합니다: 더 빠르고 편리하지만 학습자에게 요구되는 것을 바꾸지는 않습니다.
- **변형(위 절반):** 수정과 재정의는 과제 자체를 바꿉니다. [[vibe-coding|바이브 코딩]], 모형과의 실시간 공동 구성, 적응적 상호 대화는 생성 AI 이전에는 불가능했던 과제이며, 척도의 변형적 끝을 나타냅니다.

SAMR은 [[icap-framework|ICAP 프레임워크]]와 자주 짝지어지는데, 둘이 정합하기 때문입니다: [[thermomix-genai-education-analogy-2026|Rummel, Nachtigall & Panadero(2026)]]의 요리에서 학습으로의 네 시나리오는 ICAP [[student-engagement|참여]] 양태를 SAMR 수준에 — ICAP *수동적*을 SAMR *대체*에, *능동적*을 *보강*에, *구성적*을 *수정*에, *상호작용적*을 *재정의*에 — 대응시켜, 수동적 위임에서 상호작용적 공동 구성으로의 진행을 보여 줍니다.

## 지식 기반의 증거

- **고등교육에서의 AI 통합은 대체로 점진적이며 변혁적이지 않습니다.** 959건의 기록을 선별한 22개의 개입 연구에 대한 PRISMA 체계적 검토인 [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh 외(2026)]]는 AI 통합을 SAMR 모형으로 채점하여 대부분의 연구가 **대체 또는 보강** 수준에 모여 있고 수정은 더 적으며 재정의에 근접한 것은 단 하나뿐임을 발견했습니다. AI는 통상적으로 [[automated-assessment|평가 자동화]]와 [[personalized-learning|개인화 학습 지원]]이 지배하는 기존 실행을 개선하기 위해 도입되었으며, 교과나 [[learning-gains|학습 결과]]를 재개념화하기 위해서가 아니었습니다.
- **SAMR은 생성 AI 기반 [[curriculum-design|교과]] 변화의 흔한 분석 렌즈입니다.** [[rewriting-curriculum-genai-pedagogy-2026|Sabani 외(2026)]]는 다섯 가지 교과적 전환(정적에서 동적으로, 전달에서 역량으로, 지역에서 [[governance|기관]]으로)을 SAMR과 구성적 정합을 포함한 확립된 렌즈들에 대응시키며, 생성 AI가 교과를 재구성하는 [[pedagogy|교수법적]] 메커니즘을 명확히 하는 데 이 모형을 사용합니다.
- **SAMR과 TPACK은 교사–기술 통합 기준의 닻입니다.** [[crompton-faculty-technology-integration-standards-2026|Crompton 외(2026)]]는 여섯 가지 교수진 기술 기준을 기존 프레임워크 — [[tpack]], RAT, SAMR, SETI — 및 기준(ISTE, UNESCO, DigCompEdu)에 맞추어 배치하는데, 이것들은 대부분 [[k-12]] 교육자나 교수진 역할의 [[teacher-role|교수]] 부분만을 겨냥하여 고등교육 교수진 개발에 공백을 남깁니다.
- **SAMR은 포스트휴머니스트 비판의 대상입니다.** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed(2026)]]는 TPACK, SAMR, [[ai-literacy]] 모형들이 인지가 기술적 매개에 의해 근본적으로 변하지 않는 경계 지어진 학습자를 전제하는 휴머니스트 존재론을 공유한다고 비판하며, 이런 도구주의적 프레임워크들은 인지에 대한 AI의 구성적 역할을 다룰 수 없다고 주장합니다.
- **통합을 위한 프레임워크이지, 권력을 위한 프레임워크가 아닙니다.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal(2026)]]는 SAMR을 TPACK 및 다른 통합 프레임워크와 함께 평가하여 어느 것도 공평한 권력, 데이터 소유, 책무를 다루지 않음을 발견하고, 대안적 생태학적 공동 에이전시 프레임워크를 동기로 삼습니다.
- **학생 활용도 마찬가지로 SAMR에 대응되며, 피드백은 모든 수준에 걸칩니다.** [[physics-education|물리]] 단원에서 31–36명 학생의 생성 AI 선언을 코딩한 결과, 학습은 대체–보강에, 서식은 대체에, 과제 수행은 수정–재정의에 놓였으며, 한편 피드백 — 확인, 명료화, 검증 — 은 네 수준 모두에 나타났습니다([[genai-use-changing-institutional-policy-physics-2026|Quince and Faulconer(2026)]]).

## SAMR, TPACK, 그리고 기술 수용: 어떻게 다른가

세 프레임워크는 흔히 혼동되지만 서로 다른 질문에 답합니다:

- **[[technology-acceptance-model|기술 수용 모형]]** (TAM, UTAUT)은 개인이나 기관이 기술을 *왜* 받아들이고 계속 사용하는지를 설명합니다 — 지각된 유용성, 사용의 용이성, 사회적 영향.
- **[[tpack|TPACK]]**은 교수가 기술을 효과적으로 통합하는 데 필요한 *지식*을 서술합니다 — 기술, 교수법, 내용 지식의 상호작용으로, AI 시대에는 AI-TPACK/GenAI-TPACK으로 확장됩니다.
- **SAMR**은 기술이 학습 과제를 *얼마나 깊이* 변형하는지를 분류하며, 향상에서 재정의에 이릅니다.

SAMR은 계획과 평가에 쓰이는 통합 깊이 렌즈로 이해하는 것이 가장 좋으며, (수용을 설명하는) 수용 이론과 (교수 역량을 설명하는) TPACK을 보완합니다. AI 시대에 그것은 생성 AI가 기존 과제를 향상하는 데 적용되는지, 아니면 진정으로 새로운 과제를 가능하게 하는 데 적용되는지를 묻는 데 가장 생산적으로 쓰이며 — 이 구분은 이 지식 기반의 평가 및 교과 연구 전반에 걸쳐 나타납니다.

## 실행을 위한 함의

- **SAMR을 깊이 질문을 하는 데 쓰고, 변형을 처방하는 데 쓰지 마십시오.** 향상이 본질적으로 열등한 것은 아닙니다. 많은 일상적 AI 활용은 정당한 대체입니다. 이 모형은 진단적이며, 주어진 활용이 실제로 무엇을 바꾸는지를 명확히 합니다.
- **ICAP과 짝지으십시오.** SAMR은 *과제*가 무엇이 되는지를, ICAP은 학습자가 *어떻게* 참여하는지를 서술합니다. 함께 쓰면 표면적 대체와 깊은 상호작용적 공동 구성을 구별합니다.
- **수용 및 형평성 렌즈로 보완하십시오.** SAMR은 도구가 왜 수용되는지, 누가 혜택을 받는지에 대해 아무것도 말하지 않습니다. 깊이 꼬리표가 [[critical-thinking|비판적 평가]]를 대신하는 것을 피하려면 [[technology-acceptance-model|수용 모형]]과 [[equity-in-ai-education|형평성]] 분석을 함께 쓰십시오.
- **점진적 통합의 증거를 실패가 아니라 발견으로 다루십시오.** 대부분의 AI 통합이 대체/보강에 모인다면, 설계 과제는 재정의를 강제하는 것이 아니라 변혁적 활용이 더 나은 도구가 아니라 다른 과제 설계를 요구함을 인식하는 것입니다.

## 연결된 개념

- [[ai-education]] — AI 교육(포괄)
- [[tpack]] — 기술적 교수 내용 지식
- [[technology-acceptance-model]] — 기술 수용 모형
- [[icap-framework]] — 인지 참여의 ICAP 프레임워크
- [[ai-technologies]] — AI 기술과 기법
- [[teacher-ai-competency]] — 교수의 AI 역량
- [[educational-development]] — 교육 개발
- [[learning-design]] — 학습 설계
- [[k-12]] — K-12 교육
- [[higher-ed]] — 고등교육
- [[generative-ai]] — 생성 AI

## 연결된 문서

- [[alsheikh-mapping-ai-integration-higher-education-2026]] — SAMR로 채점한 고등교육의 AI 통합: 대부분 대체/보강
- [[thermomix-genai-education-analogy-2026]] — 네 가지 요리–학습 시나리오에 대응하는 ICAP과 SAMR
- [[rewriting-curriculum-genai-pedagogy-2026]] — 생성 AI 기반 교과 변화의 렌즈들 중 SAMR
- [[crompton-faculty-technology-integration-standards-2026]] — 교수진 기술 기준에 정보를 주는 프레임워크들 중 SAMR
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — SAMR의 휴머니스트 존재론에 대한 포스트휴머니스트 비판
- [[reclaiming-epistemic-agency-co-agency-2026]] — 권력, 데이터 소유, 책무에 대한 SAMR의 침묵
- [[genai-use-changing-institutional-policy-physics-2026]] — 변화하는 기관 정책 아래 학생의 생성 AI 활용: SAMR 수준에 대응된 활용 기능(Quince & Faulconer 2026)
