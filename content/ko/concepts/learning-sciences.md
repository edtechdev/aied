---
title: 학습 과학
created: "2026-09-17T14:12:00-04:00"
updated: "2026-09-17T14:48:59-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/learning-sciences
source_updated: "2026-09-17T14:48:59-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **학습 과학** — 사람들이 어떻게 학습하는지, 그리고 학습이 일어나는 환경을 어떻게 설계할 것인지를 연구하는 학제간 연구 분야로, [[cognitive-psychology|인지 심리학]], [[learning-theories|학습 이론]], 컴퓨터 과학, 언어학에 의존하며, 이론만이 아닌 실증적 증거로 자신의 설계를 판단합니다. 이 지식 베이스에서 이것은 학교 교과목 중 하나가 아니라 [[ai-education|교육에서의 AI]]를 둘러싼 연구 분야입니다: 이것은 AI 시스템이 운영화하는 메커니즘(지식 요소, [[mastery-learning|숙달 기준]], [[transfer-of-learning|전이]]), 그것들이 내장되는 설계 대상([[learning-design|계획된 강좌 순서]], [[intelligent-tutoring|튜터]], [[feedback]] 체제), 그리고 그것들이 판단되는 기준([[learning-gains]], [[assessment-validity]], [[equity-in-ai-education|형평성]])을 제공합니다. 이것의 조직화 질문은 도구가 잘 수행되는지가 아니라 학습자가 변화했는지입니다.

## 생각해 볼 질문들

- 한 학습자가 모든 연습 문항을 통과하여 숙달 기준이 세트를 종료합니다 — 그러고 나서 행동을 억제해야 할 곳에서 규칙을 잘못 적용합니다. 그 오류는 누구의 것일까요? 학습자의, 모델의, 아니면 정지 규칙의 것일까요?
- 순서 채굴(sequence mining)은 교실을 관찰하지 않고도 554개 강좌를 패턴으로 기술할 수 있습니다. 이 분야는 실행된 활동 대신 설계된 의도를 연구함으로써 무엇을 얻고, 무엇을 잃을까요?
- LLM 피드백에서의 인구통계학적 민감성은 학습자가 진술한 교육 수준을 추적할 때는 적응처럼 보이고, 정서를 변화시킬 때는 편향처럼 보입니다. 둘을 구분할 수 없는 분야가 개방형 모델을 계속 사용하여 평가해야 할까요?
- 학습 과학이 인과 설계 — 무작위 배정, 반사실 감사, 학습자의 실행 가능한 모델 — 에 대한 욕구가 교육에서의 AI에서 무엇이 증거로 간주되는지를 좁히고 있을까요?

## 들어가며

학습 과학은 학습과 학습 환경의 설계를 연구하며, 주제만큼이나 방법으로 정의됩니다: 실험, 교실 시험, 학생 데이터에 대한 [[quantitative-research|정량적]] 모델링, 설계와 맥락에 대한 [[qualitative-research|질적]] 분석, 그리고 중재를 구축하고 사용 중에 수정하는 설계 기반 연구입니다. 이러한 폭은 이 페이지를 틀, 실천, 도구를 제공하는 이웃 페이지들과 구분합니다. 아래 절은 각 경계와 그 경계 너머에서 이 분야가 확립한 것을 설명합니다.

이 페이지는 그러한 방법들이 산출한 실질적 지식 — 학습자가 생성형 모델로 무엇을 하는지, 어떤 배치가 결과를 변화시키는지, 그리고 이 분야 자체의 도구가 어디서 실패하는지 — 을 다룹니다. [[discipline-specific-aied]]는 반대로, 교과 내용이 지원이 해야 할 일을 변화시킨다고 보는 반대의 절단을 취합니다. 학습 과학은 횡단적 관점을 취하며, 그것들이 검증하는 메커니즘은 [[cognitive-psychology]] 아래에 모입니다.

### 학습 과학에서 AI가 드러나는 방식

- **먼저 메커니즘, 그다음 모델.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren and Stamper (2026)]]는 Riichi Mahjong을 위한 [[intelligent-tutoring]] 시스템으로 11개 실험(N = 192)을 실행하여, 과잉일반화된 산출물(적용 제약이 없는 행동)을 편집한 학습자들이 첫 번째 "행동하지 말라" 문항에서 12%의 예상 오차율([[knowledge-tracing|베이즈 지식 추적]] 하)에 비해 61.5%–100%로 잘못 적용함을 보였습니다. 95% 숙달 기준으로 시스템은 학습자들이 행동을 억제해야 하는 경우를 만나기 전에 연습을 중단했으므로, 그 결함은 발견되지 않았습니다. 누락된 제약을 명명하는 [[feedback]]와 함께 짧은 "행동하지 말라" 연습은 잘못 적용을 0.0%–23.1%로 줄였으며(Cohen's h 1.70–2.44), 13개의 K-12 *Decimal Point* 데이터셋에 대한 이차 분석은 정수 편향에서 동일한 구조(비교 오차의 84%–88%)를 발견했습니다.
- **최적점은 내용에 따라 다르다.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger and Carvalho (2025)]]는 예시–문제 비율을 내용–처치 상호작용으로 다룹니다: 기하-면적 자료로 95명 참가자의 2×2 실험에서, 연습 중심 훈련은 언어 그대로의 사실에 대해 더 큰 [[learning-gains|학습 향상]]을 낳은 반면, 예시 통합 훈련은 일반화 가능한 기술에 대해 더 큰 향상을 낳았습니다(β = 0.41, p = .038, d = 0.38). ACT-R 스타일 [[cognitive-psychology|기억-망각 메커니즘]]이 주어진 모의 학습자(Apprentice Learner)만이 교차점을 재현했습니다. 더 많은 연습이 균일하게 더 좋은 것은 아닙니다: 기억 지향적 내용은 인출을, 귀납 지향적 기술은 통합된 예시를 요구합니다.
- **설계를 분석 가능한 대상으로.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec and Horvat (2026)]]은 [[learning-analytics]]를 [[learning-design]] 자체에 돌려, 자유 강좌 설계 도구로 계획된 554개 강좌의 29,064개 활동을 코딩했습니다. 습득(Acquisition)이 가장 흔한 학습 유형이자 가장 흔한 진입점이었으며, 가장 강한 마르코프 전이는 평가 → 토론(0.332)이었고 최고 신뢰도의 규칙은 습득 → 평가 → 연습 → 연습(0.743, lift 1.45)이었습니다. 학습 유형은 의도된 결과 수준을 추적하여, 습득은 Bloom 1수준에서 활동의 약 50%에서 6수준에서 약 20%로 떨어졌습니다. 저자들은 이것들이 실행 전 설계임을 강조합니다: 뒤집힌 강좌, [[inquiry-based-learning|탐구 기반]] 또는 [[project-based-learning|프로젝트 기반]] 순서와의 유사성은 의도의 증거가 아닙니다.
- **평가하는 모델을 감사하기.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto and Hovy (2026)]]은 [[llm|LLM]] 6개를 [[automated-essay-scoring|에세이 채점]], [[formative-assessment|형성적 피드백]], 질의응답에 걸쳐 감사하며, 과제 입력을 고정하고 인구통계 맥락만 변화시켰습니다(192,480회 호출). 명시적 페르소나 하에서 점수는 안정적이었으나, Llama-70B는 암묵적 대화 이력 하에서 자신의 점수를 1.57점 부풀렸고(p < 0.001), 고등교육은 덜 읽기 쉽고 더 긍정적인 반응을 끌어냈습니다 — 대략 표준편차 4개의 정서 격차. 가독성 효과는 줄어들고 길이 효과는 커졌으며, 일부 계수는 조건 간에 부호가 바뀌었습니다. 저자들은 이것을 배포 판결이 아닌 감사 도구로서 제공하며, 인구통계 신호와 주제 신호의 얽힘을 [[assessment-validity|타당도]]와 [[equity-in-ai-education|형평성]]에 대한 위협으로 읽습니다.
- **역량을 측정하기, 그리고 그 한계.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]]는 유능한 [[generative-ai]] 사용을 위한 도구를 지식과 사용, 인식론적 감독, 의존도 보정, 도구 사용 에이전트의 통제라는 네 영역으로 조직하며, 그것들을 하나의 숙련 연속체로 합치는 것을 거부합니다. 자기 평가와 실증된 [[ai-literacy|AI 리터러시]] 간의 세 개 동일 표본 상관이 r = .055(95% CI [-.047, .156], 보고 N = 2,765)로 모였으며, 저자는 이것을 [[self-report-measures|자기 평가]]를 수행 점수와 교환 가능하게 다루는 것을 기각하기에 충분하지만, 절단점을 설정하기에는 충분하지 않다고 읽습니다. 검증된 도구는 도구 사용 에이전트가 만들어내는 결정의 전체 집합을 다루지 못했습니다. 제안된 계층형 배터리는 설계 가설입니다.
- **학습자 자신의 업무 이관에 관한 자기 보고.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]]은 [[cognitive-offloading]] 문헌을 PAUSE로 옮기며, 이는 4개 영역의 브라우저 전용 자가 점검으로, LLM 시대의 모든 문항이 출처에 고정되어 있고, 종합 점수도, 저장도, 운영 중인 모델도 없습니다. 그 구간은 규준화되지 않은 서술적이며, 읽음은 평가, 입학, 채용 결정을 정당화해서는 안 됩니다. 그 명시된 한계가 중요합니다: 이관의 자기 보고는 그것이 다루는 능력에 취약하며, AI를 [[scaffolding|비계]]로 의도적으로 사용하는 응답자는 여러 문항에서 이관으로 읽히며, AI 관련 이관이 일반적 기술 의존과 구별되는지는 열린 문제로 남습니다.
- **인간 전문성이 놓이는 곳.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]]는 가장 분명한 노동 분담을 보고합니다: 약 900명의 초보 K-12 튜터와 약 1,800명의 학생을 대상으로 한 2개월 [[rct|무작위 대조 시험]]에서, 경험 많은 튜터의 추론에서 끌어온 실시간 제안은 주제 숙달을 4퍼센트 포인트(62%에서 66%로, p < 0.01) 높였고, 낮은 평가를 받은 튜터에게서는 9포인트 높였으며, 튜터당 연간 약 \\$20의 비용으로, 튜터링을 안내 질문 쪽으로 이동시켰습니다. 향상은 근접한 것이었습니다 — 학년 말 시험은 움직이지 않았습니다. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]]는 교사들이 설계로 동일한 지점에 도달함을 발견합니다: 챗봇을 프로토타이핑한 6명의 중등 교사는 경계가 분명한 전문가를 지정하고, 권위 경계(학습과 안전에 대한 책임은 위임 불가능)와 전문성 경계(모델은 개별 학생에 대한 그들의 지식이 없다)를 유지하며, 콘텐츠 제시, 연습, 교정 [[feedback]]는 위임하면서 목표 설정과 [[summative-assessment|총괄 평가]]는 유보했습니다.
- **분야 수준의 역량.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury and Liu (2026)]]은 생성형 AI용으로 조정된 [[tpack|TPACK]] 도구로 127명의 교수를 조사했습니다: 현저히 낮은 기술 통합 지식 옆에 강한 내용 지식과 교육내용지식(M = 4.70–5.15)을 보였으며, 전체적 TPACK은 2.55로 가장 낮았고, 내용 지식은 어떤 기술 통합 영역과도 무관했으며, 세 개의 통합 영역은 매우 높게 상관하여(r = .81–.91) 하나의 요인으로 기능할 수 있습니다. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]]는 코드베이스가 시스템 프롬프트와 상용 모델에 대한 검색 파이프라인이었던 중단된 영국 공무원 프로토타입을 통해 거버넌스 계층을 읽으며, 기초 모델의 일반성이 [[educational-policy-ai|정책]] 도구로의 빠른 재목적화를 가능하게 함과 동시에 비정상 출력을 영구적으로 완화만 가능한 위험으로 만든다고 주장합니다. 루프 안에 앉아 있는 것이 아니라 루프 너머로 내려다보는 감독 말입니다.

## 학습 과학이 이웃과 관계하는 방식

[[design-based-research|설계 기반 연구]]는 이 분야가 빌리지 않고 개발한 방법입니다: 중재가 작동하는 교실 안에서 구축되고 이론적 근거와 함께 수정되므로, 한 연구가 산출물과 설계 원칙을 모두 산출합니다. 이것이 맥락을 고정하여 원인을 분리하는 실험실 실험과 구분되며, 이 분야의 발견이 효과 크기가 아닌 설계 지식으로 도달하는 이유입니다. [[research-methods-aied]]는 반대의 절단을 취합니다: 그 페이지는 실험, 조사, 질적 작업, 벤치마크, 검토, 합의 방법의 전체 레퍼토리를 도구들 사이의 선택으로서, 각각이 뒷받침할 수 있는 주장의 타당도에 비추어 조망합니다. 이 페이지는 동일한 코퍼스를 실질적 측면에서 읽으며, 레퍼토리가 학습에 대해 무엇을 확립했는지 묻고, 방법을 그 설계 주장이 학습자와의 접촉에서 살아남는지로 판단합니다.

[[learning-theories]]는 행동주의, 인지주의, 구성주의, 사회문화적 설명, 동기와 자기 조절을 AI를 읽는 렌즈로서 후보 틀들을 모읍니다. 학습 과학은 그 어휘는 공유하지만 그 입장은 아닙니다: 여기서 이론은 설계가 구현하거나 반박해야 하는 메커니즘에 대한 주장이며, 이 분야의 위상은 틀의 일관성이 아닌 실증적·설계 작업 위에 놓입니다. 틀 페이지는 틀이 무엇을 주장하는지 알 때 열 것이고, 이 페이지는 틀이 축적한 증거를 알 때 열 것입니다.

이 분야는 또한 빌린 틀을 검증만 하지 않고 이론을 구축하기도 합니다: [[theory-development-aied]]는 학습자, 교사, AI 시스템이 상호작용하는 방식을 설명하는 개념 작업을 다루며, 그것이 측정되기 전에 이 분야 고유의 구성개념이 논쟁되는 곳입니다. 그 설계가 대개 산출하도록 요구되는 것은 [[transfer-of-learning|전이]] — 즉 튜터, 교과, 배운 과업 너머로 살아남는 지식과 기술 — 이며, 이것이 도구 안에서 측정된 향상이 도구 없이 측정된 것보다 약한 주장으로 간주되는 이유입니다. 그리고 설계된 환경은 복합 중재이기 때문에, 결과를 하나의 구성 요소에 귀속시키는 것은 이 분야의 오랜 측정 문제입니다: [[educational-measurement]]는 그 귀속을 애초에 논증 가능하게 만드는 심리측정 기구를 제공하며, 이것이 측정 질문이 사후가 아닌 여기서 일찍 도래하는 이유입니다.

[[cognitive-psychology]]는 이 분야가 가장 많이 의존하는 메커니즘 수준의 학문으로, 제한된 작업 기억, 부호화와 인출, 분해 가능한 지식 요소, 그리고 학습자 모델링의 진단 언어를 제공합니다. 학습 과학은 이 메커니즘들을 그것들로 환원하지 않고 사용합니다: 그 분석 단위는 실험실의 기억 설명이 갖지 않는 사회적, 동기적, 맥락적 변수를 담고 있는 설계된 환경이며, 그 검증은 고립된 인지 효과가 아닌 전체 중재에 대해 실행됩니다.

[[pedagogy]]와 [[learning-design]]는 실천을 다룹니다 — 어떤 교수 전략을 쓸 것인지, 목표·활동·평가를 강좌로 어떻게 배열할 것인지. 둘 다 학습 과학이 외부에서 기술과 평가의 대상으로 연구하는 것입니다. 이 분야는 교사에게 다음에 어떤 전술을 손에 쥘지 말하지 않고, 그 전술들이 무엇을 하는 것으로 나타났는지를 보고합니다. 학습 설계가 더 가까운 친척인데, 둘 다 구현되고 검증될 수 있는 무언가를 산출하기 때문이지만, 설계자의 산출물은 가르칠 수 있는 강좌이고 이 분야의 산출물은 일반적으로 설계에 관한 지식입니다.

발견들은 교수에 도달해야만 의미가 있으며, 그 여정은 세 페이지를 통해 이루어집니다. [[educational-development]]는 그것들을 운반하는 제도적 실천입니다. 교수 개발, 표준, 정책, 정체성 작업이 검증된 설계가 교실에 도달하는지를 결정하며, 이것이 이 분야의 증거가 제도가 실행한 것을 일상적으로 앞서는 이유입니다. [[teacher-education]]는 교사가 교실에 들어서기 전에 지식이 착륙해야 할 곳이며, [[teacher-role]]는 그 이후에 착륙하는 곳입니다. 즉 언제 개입할지, 어떤 도구를 쓸지, 학습자를 언제 놓아둘지에 대한 순간순간의 판단 말입니다. 세 곳 중 어디도 학습 과학 발견을 산출하지 않습니다. 세 곳 모두 그 발견들이 실천을 변화시키는지를 결정합니다.

## 연결된 개념

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## 연결된 문서
- [[competent-generative-ai-use-measures-review-2026]] — 유능한 생성형 AI 사용을 측정하는 도구에 관한 고찰과 탐색적 메타분석 (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — 불완전한 규칙을 가리는 정답성: 적응 학습에서의 숙달 중단 규칙 (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — LLM 학생 평가에서 인구학적 신호의 반사실적 감사 (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — 554개 강의의 29,064개 활동에 대한 마르코프 연쇄와 패턴 마이닝 (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — AI 연관 인지 외주화를 위한 개인정보 보존적 비진단 자기 점검 (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — 제로샷 거버넌스: Redbox 코드베이스를 통해 읽는 정책에서의 범용 AI (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — 최선의 예시-문제 비율이 왜 내용에 따라 달라지는가 (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — 교사들이 설계하는 전문가 범위가 제한된 챗봇, 교수에 대한 선택적 위임 포함 (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — 교수의 생성형 AI TPACK: 강한 내용 지식, 약한 기술 통합 지식 (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: 대규모 인간-AI 실시간 튜터링의 무작위 시험 (Wang et al. 2024)
