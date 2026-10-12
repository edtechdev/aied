---
title: 벤치마크
created: "2026-08-09T16:52:03-04:00"
updated: "2026-10-09T09:50:00-04:00"
type: concept
technology: [generative-ai, llm]
assessment: [assessment]
connected_faqs: [reporting-interpreting-aied-research, checking-whether-educational-ai-works]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, benchmark]
translation_of: concepts/benchmark
source_updated: "2026-10-09T09:50:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **벤치마크** — 교육 과제에 대한 AI 모형의 수행을 측정하는 데 쓰이는 표준화된 시험 스위트와 평가 틀입니다. 벤치마크는 모형과 접근 사이의 재현 가능한 비교를 가능하게 하며, 교육에서의 AI 시스템의 신뢰성, 공정성, [[pedagogy|교수법적]] 품질을 평가하는 데 필수적입니다.

## 생각해 볼 질문들

- 벤치마크는 교육 과제에 대한 AI 모형의 수행을 측정하는 표준화된 시험 스위트입니다. 읽기 전에, 대부분의 AI 벤치마크가 실제로 무엇을 검사한다고 보십니까? 그리고 그것이 좋은 튜터가 필요한 것과 다른 것일 수 있는 이유는 무엇입니까?
- 이 페이지는 교수법적 지식 — [[teacher-role|교수]] 전략, 평가 방법, 특수 교육 교수법 — 을 검사하는 Pedagogy Benchmark를 조명합니다. 내용 지식이 아니라 하는 말입니다. 어떤 과목을 빛나게 아는 AI가 왜 그것을 가르치는 데는 실패할 수 있으며, 교수법을 무시하는 벤치마크는 왜 그것을 놓치겠습니까?
- 여기서 한 가지 교훈은 [[research-methods-aied|방법론적]]입니다. 벤치마크를 어떻게 검증하는가가 결과를 극적으로 바꾼다는 것이며, 순진한 검증은 엄밀한 시험 독립적 방법보다 훨씬 높은 수행을 보고한다는 것입니다. 모형 개발자나 판매자가 검증을 그럴듯하게 보이도록 설계하려는 유혹은 어떠할 것이며, 어떻게 간파하겠습니까?
- 벤치마크 수행이 흔히 실제 세계의 유용성으로 전이되지 않습니다. AI가 벤치마크를 '이기면서' 실제 교실에서는 실패하는 상황을 떠올릴 수 있습니까? 그리고 그 간극은 벤치마크 점수만을 의지하는 것에 대해 무엇을 말해 줍니까?
- 이 페이지는 벤치마크 설계 자체가 편향을 새기거나 증폭시킬 수 있음을 지적합니다. 어떤 벤치마크가 특정 과제, 특정 언어, 특정 인구로부터 만들어진다면, 그것은 누구의 학습을 측정하게 되며 누구의 학습을 무시하게 됩니까?

## 들어가며

벤치마크는 [[ai-education|교육에서의 AI 연구]]의 증거적 토대가 됩니다. 이 벤치마크는 연구자가 모형을 비교하고 진전을 추적하며 실패 양식을 규명할 수 있게 하는 표준화된 자료 집합, 과제, 지표를 제공합니다. 지식베이스의 연구에서 벤치마크는 여러 영역에 걸쳐 나타납니다.

- **[[cstutorbench-slm-tutors|CSTutorBench]]**는 CS 튜터링 과제에 대한 소규모 언어 모형을 평가합니다.
- **[[anvil-ai-educational-animations|ANVIL]]**은 AI가 생성한 교육 애니메이션을 인간이 만든 것에 맞춰 벤치마크로 삼습니다.
- **[[teaching-feedback-classification-benchmark|교수 피드백 벤치마크]]**는 [[ai-feedback-quality|피드백 품질]] 분류의 언어 간 전이를 평가합니다.
- **[[cdpk-pedagogy-benchmark-llms|Pedagogy Benchmark(CDPK + SEND)]]**는 내용 지식이 아니라 교수법적 지식 — 교수 전략, [[assessment|평가 방법]], [[special-education|특수 교육 교수법]] — 을 검사하며, 97개 모형에 걸친 비용 대비 정확도의 "가치 전선"을 보고합니다(대부분의 범용 벤치마크는 내용 지식을 검사하며, 교수법은 구분되면서 교육에 결정적인 차원입니다).
- **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]**는 [[llm]] 기반 [[learning-design|교수 설계]] 에이전트를 25,795개의 교수 설계 시나리오에 걸쳐 벤치마크로 삼으며, 고전 ISD 틀(ADDIE, Dick & Carey, Rapid Prototyping)에 근거를 둔 하이브리드 에이전트가 순수 이론이나 순수 기법을 능가함을 보여 줍니다. 이는 교육에서의 [[agentic-ai|에이전트형 AI]] 설계에 직접 함의를 주는 벤치마크 결과입니다.

- **명시적 벤치마크 기준으로서의 학습자 적응.** Teaching Monster Challenge는 지정된 학습자 인격에 대한 적응에 점수를 매기지만, 그 자동화된 LLM 심사자는 약한 꼬리만 분리했습니다. 상위 시스템은 그 심사자의 천장 근처에서 점수를 받았고, 그 순위는 군중 선호와 어긋났습니다(Spearman ρ = −0.17)([[teaching-monster-pck-benchmark-2026|Lin 외(2026)]]).

### 왜 벤치마크가 AIED에서 중요한가

벤치마크는 [[ai-ed-evaluation]]와 [[assessment-validity]]에 연결됩니다. 엄밀한 벤치마크가 없다면 [[intelligent-tutoring|AI 튜터링]] 효과에 관한 주장은 검증될 수 없습니다. 벤치마크는 또한 [[bias-mitigation]]과 교차합니다. 벤치마크 설계가 편향을 새기거나 증폭시킬 수 있기 때문입니다. 벤치마크 수행과 실제 세계의 유용성 사이의 긴장은 여러 논문에 걸쳐 다루어지며, [[generative-ai]] 응용에서의 [[transfer-of-learning]] 문제에 연결됩니다.

- **시스템이 아니라 지표가 실패할 때:** [[algorag-rag-theoretical-cs-education-2026|AlgoRAG]]는 179개의 이론적 [[cs-education|컴퓨터 과학]] 시험 문항 모두에서 BLEU-4 = 0.0000을 기록한 반면, 여섯 기준의 교수법 루브릭은 0.7620을 주었습니다. 논리적으로 동등한 증명이 표기법, 변수 이름, 증명 전략에서 일상적으로 다르기 때문입니다. 0점은 답의 품질보다 n-gram 중복에 관해 더 많은 것을 말해 주며, 이는 형식적 영역 AIED 시스템의 대표 수치로 표면 지표를 다루는 것에 대한 일반적 반론입니다.
- **구인 수준의 반사실 벤치마크.** CFES-P24는 멀티미디어 학습 원리를 결정적이고 가역적인 슬라이드 변환으로 표현하여, MLLM이 그럴듯한 총체적 평정을 만드는 대신 특정 교수 설계 구인에 반응하는지를 감사합니다. 동결된 파일럿은 구인 인식(연산, 원리, 수리, 증거 국재화)을 8/8로 보였으나 비교 판단(방향 6/8)과 심각도 보정(0/8)은 실패하여, 종합 점수보다 층위화된 점수표를 주장합니다.([[cfes-p24-multimodal-slide-auditing-2026]])

- **환각과 에너지를 평가 안에 넣어라, 정확도만이 아니라.** [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen 외(2026)]]는 환각을 검색된 오픈 라이선스 청크에 대한 함의(entailment)로 채점하여(전문가 판단과 κ = 0.76), 질의당 1.8 mWh를 기록했습니다. 그리고 그들의 제거 실험은 검색을 첫손에 두었습니다. 검색이 없는 지역 LLM은 52.3%로, 55.4%인 TF-IDF 기준선 아래였습니다.
- **생성된 내용에서 판단보다 검증이 나을 수 있다.** [[diagramir-educational-math-diagram-evaluation|Kumar 외(2025)]]는 생성된 수학 도형을 도식 제약 중간 표상으로 역번역하고 결정적 규칙 점검을 운용하여, 인간 평정자와의 합의를 LLM 심사자(0.39–0.47)보다 높은 수준(Cohen's κ 0.48–0.56)에 이르게 하고, 작은 모형이 10분의 1의 비용으로 최고의 심사자와 맞먹게 했습니다.
- **생리학적 벤치마크에서의 시험 독립적 평가.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara & Halloluwa(2026)]]는 EEG 기반 친숙도 예측을 위해 15개의 ML/DL 모형을 벤치마크로 삼으며, 검증 방식의 선택이 대표 결과를 극적으로 바꿈을 보여 줍니다. 표준 층화 교차 검증은 시간적 누출을 허용하여 최대 0.9853 F1을 보고하는 반면, 시험 독립적 Group K-Fold 검증은 최고점을 0.6038 F1로 떨어뜨립니다. 시간·누출을 의식한 평가가 신뢰할 만한 교육 벤치마크에 필수적이라는 이 교훈은 EEG를 넘어 순차적·시간 구조 자료를 쓰는 모든 벤치마크로 미칩니다.
- **분포 이동은 누출 너머의 두 번째 벤치마크 축이다.** 분류기의 분포 내 점수와 전이 점수를 함께 보고하는 벤치마크는 서로 다른 두 양을 보고하는 것입니다. Bloom 수준 분류기는 선별된 은행에서 macro F1 0.88을 유지하다가 AI가 생성한 두 문항 집합에서는 0.48과 0.20으로 떨어졌고, 라벨 붙은 분포 밖 자료로 재훈련하는 것이 최대 0.82까지 회복했으므로, 단일 분포 내 순위표 수치는 배치된 기구가 할 일을 과장합니다([[bloom-classifier-ai-assisted-questions-2026|Castanares 외, 2026)]]).
- **교차 말뭉치 전이를 검사하기 위해 세워진 말뭉치.** ICLE++는 총체적 점수와 열 가지 특성 수준 점수로 설득 에세이에 주석을 달아, [[automated-essay-scoring|AES]] 연구가 ASAP에 기대는 바탕을 드러냅니다. ASAP의 제한된 시간, 원어민 전용 에세이는 길이를 품질과 뒤섞기 때문입니다. 특성 주석으로 훈련된 모형은 총체적 점수만으로 훈련된 모형보다 말뭉치 간에 더 잘 전이했습니다([[icle-plus-plus-essay-scoring|Li & Ng, 2026]]).

- **인간 규준을 둔 벤치마크가 LLM에게 같은 구인을 측정하지 않을 수 있다.** [[assessment-latent-structure-human-llm-2026|Strugatski 외(2026)]]는 화학 진단과 양적 추론 시험에서 인간과 멀티모달 LLM의 응답 구조를 비교했습니다. LLM과 인간 사이의 요인 합치도는 인간-인간 기준선 아래에 머물렀고 평행 분석은 서로 다른 요인 수를 유지했습니다.

- **멀티양식성이 증거 보정을 개선하지는 않았다.** MathCog에서, 639개의 손으로 쓴 수학 응답에 대한 교사 주석 판정 3,036건에 걸쳐, 18개 LLM 가운데 macro F1 0.5에 이른 것은 하나도 없었습니다. 최선인 GPT-4o-img는 0.448을 기록했고, 증거가 모호할 때 멀티모달 모형은 텍스트 전용 모형보다 더 나빠져 증거를 과다 귀속하고 인용을 날조했습니다([[llm-cognitive-diagnosis-handwritten-math|Kim 외(2025)]]).
- **AI 튜터링을 위한 합성 벤치마크.** AI 튜터링을 평가하는 개방적이고 재현 가능한 자료 집합은 여전히 희소합니다. ASTRA(Adaptive Socially-intelligent Team Reasoning Agents)는 사회적으로 구분된 에이전트와의 협력적 프로그래밍을 연구하기 위한 다중 에이전트 튜터링 시제품이자 벤치마크 틀로, 혼자-튜터, 둘-튜터, 둘-다중에이전트 구성(N=540, 세션 360개, 에피소드 1,440개)을 지원하며 상호작용, 참여 균형, 검증의 재현 가능한 분석을 위한 추적 준비된 도식을 갖춥니다.

- **수평선(hizon)은 세부 사항이 아니라 벤치마크 축이다.** [[educlaw-bench-pedagogical-llm-agents-2026|Lee 외(2026)]]는 튜터 에이전트를 시뮬레이션된 학습자와의 연속된 30일 관계에 놓고, 모든 어댑터가 5–10일째에 고원에 이르렀으며, 어느 어댑터도 하나를 넘는 기반 모형 단계에서 학습 성과를 이끌지 못했고, 다섯 가지 채점 축이 대체로 독립적이었음을 발견했습니다.
- **인간 튜터가 아니라 순위표에 맞춰 채점된 튜터링 벤치마크.** StudentBench는 새로 작성된 GRE 문항에 대해 AI 튜터링, 생생한 전문가 인간 튜터링, 영상 대조군에 2,383명의 성인을 무작위 배정하며, 종합된 AI 튜터링이 인간 튜터링과 통계적으로 동등함을(p=.015), 대조군보다 5.5–6.9퍼센트 포인트 높음을 발견했습니다. 2,028건의 전문가 쌍 비교에서 세워진 그 교수 품질 순위표는, 학생이 얼마나 배웠는지가 아니라 수업 계획과 대화 행동에 순위를 매깁니다([[studentbench-ai-human-tutoring-gre-2026|Northcutt 외, 2026)]]).
- **벤치마크 감사가 그 자체로 하나의 연구 기여가 되었다.** 2026년의 세 산출물이 벤치마크 작업을 순위표 집합 너머로 밀어냅니다. EduFair-Bench는 시뮬레이션된 학생을 고정하고 인구 통계적 속성을 달리하여, 차례 수준의 교수법 지표로 튜터링 벤치마크를 공정성 감사로 바꿉니다([[edufair-bench-pedagogical-fairness-llm-tutors-2026]]). GeoVAD-Bench는 600개의 [[math-education|기하]] 문제에서 최종 정답이 아니라 중간 시각 구성 — 지각, 보조의 질, 활용 — 을 진단합니다([[geovad-bench-visual-chain-of-thought-geometry-2026]]). 널리 쓰이는 [[physics-education|물리]] 벤치마크 여섯 개에 대한 전문가 재채점은 그런 점수가 지니는 오차를 양화했습니다. 감사된 기각의 57.20%가 문항 결함, 38.00%가 채점자 오류, 4.80%만이 진짜 모형 실패였습니다([[frontier-models-physics-benchmark-audit-2026]]). 이들은 함께 벤치마크 점수가 항상 자신의 감사된 오차 예산과 함께 읽혀야 한다고 주장하며, 이는 [[assessment-validity]]가 교실 기구에 요구하는 것과 같은 규율입니다.
- **구조 패러다임으로서의 분리된 주석과 문항 생성.** 대부분의 벤치마크는 문항이나 이미지마다 과제 특정적인 질문-답변 쌍을 세우는데, 이는 새로운 과제로의 확장을 비싸게 만들고, 자료를 과제 간에 재사용하기 어렵게 하며, 질문의 형태와 복잡성에 대한 통제를 제한합니다. MUSE는 순서를 뒤집습니다. 각 예술 작품을 시각적·의미적 내용의 재사용 가능한 구조적 표상으로 한 번 주석을 단 뒤, 미리 정의된 생성 규칙에서 12개 과제를 인스턴스화합니다. 따라서 한 이미지가 난이도와 형식을 부산물이 아니라 명시적 설계 변수로 다루는 다중 관점 평가 인스턴스를 냅니다([[muse-vlm-artistic-image-benchmark-2026]]). 그 상관 증거는 이 설계를 위한 두 번째 논증입니다. 12개 과제는 관련되면서도 비중복적인 역량을 측정합니다(Jigsaw Puzzle은 대부분의 다른 과제와 ρ = 0.25에서 −0.10까지 약하게 상관하며), 여섯 외부 벤치마크에서 범용 멀티모달 점수는 예술적 교육 이미지로 고르게 전이되지 않습니다(BLINK Jigsaw 대 MUSE Jigsaw ρ = −0.20). 이는 교육적으로 관련된 역량의 대용물로 어떤 단일 종합 점수를 읽는 것에 대한 구인 커버리지 반론입니다([[muse-vlm-artistic-image-benchmark-2026]]).
- **멀티모달 출력 생성은 대부분의 벤치마크가 생략하는 축이다.** [[omniphys-multimodal-physics-benchmark-2026|Chen 외(2026)]]는 중학교에서 대학에 이르는 물리 문항 15,246개와 이미지 19,850개에 점수를 매기며, 도형 편집 하위 집합을 포함합니다. 구조화된 물리 도형을 합성하거나 편집하는 것이 답하는 것보다 더 어려웠고, 선도 모형들은 70%의 엄격한 숙달 아래에 머물렀습니다.
- **K-12 과학 커버리지와 포화 문제.** 중·고등학교 과학을 위한 NGSS 정렬 벤치마크(1,078 + 1,150개의 합성 문항, 삼심사자 검증)는 공개 가중치 모형 아홉 개가 90% 이상의 원샷 정확도를 기록함을 발견한 반면, 고전 문항 통계는 높은 난이도 값과 낮은 변별도를 보였습니다. 모형 크기는 수행을 예측하지 않았고, 저자들은 시험이 너무 쉬운 것은 아닌지 묻습니다([[llm-benchmark-secondary-science-topics-2026]]). 이는 벤치마크의 고유 문항 통계를 순위표와 나란히 읽어야 한다는 영역 특정적 사례입니다.
- **대표 정확도를 점검하는 사소한 기준선과 IRT 정답.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden 외(2026)]]는 문항 텍스트와 실제 학생 응답을 보존한 ASSISTments 상호작용 1,722,169건으로 FoundationalASSIST를 세우고, 지식 추적 과제를 51.3퍼센트 언제나-정답 기준선에 맞춰 채점하며, 같은 자료에 적합된 이모수 IRT 추정에 맞춰 모형 역량을 읽습니다. 네 개의 전선 모형은 사소한 기준선을 약 다섯 점 넘어섭니다(최선 56.2퍼센트), 문항 변별도를 판단하는 일에서는 기회 이하로 떨어지며, 이 목적으로 세워진 벤치마크가 볼 수 있는 그 실패, 즉 옳은 답에서는 85.4퍼센트, 틀린 답에서는 12.6퍼센트만 정답을 예측하여 그 겉보기 실력이 낙관 편향임을 보입니다.
- **채점자의 구성 자체가 하나의 변수다.** [[llm-graders-computer-science-exams-2026|Habibullah 외(2026)]]는 이중 채점된 570명의 학생 시험에 걸쳐 채점 구성 171개를 훑고, 짧은 "엄격한 채점자" 전문 서문이 공개 가중치 모형 17개 중 14개를 채점 밴드 밖으로 밀어냄을 발견한 뒤, 독립적인 1,038명의 학생 시험에 162개 구성으로 반복하여 그 결과가 취약성은 재현하되 그 방향은 재현하지 않음을 확인했습니다. 최선의 구성(MAE 1.64/35로, 인간 채점자들이 서로에 대해 얻는 2.61/35 아래)이 LLM 채점이 작동한다는 증거는 아닙니다. 다만 종합된 인간 라벨로 훈련된 하나의 LoRA 어댑터는 다섯 개의 작은 모형을 인간과 대등한 수준으로 끌어올리면서 인격(persona) 민감성을 거의 지웁니다.
- **역량 주장을 귀속 가능하게 하기 위해 말뭉치를 제약하기.** [[li-littlelearner-pedagogically-controlled-knowledge-exposure-2026|Li 외(2026)]]는 FineWeb-Edu를 미국 K–5 자료 88B 토큰으로 걸러 내고 5B 모형을 처음부터 훈련한 뒤, 점수가 아니라 행동 탐사로 그 이음매를 점검합니다. Beyond-K–5 구절에서는 유지가 0에 가깝고, Beyond-K–5 Jeopardy 문항에서는 붕괴하며, pass@1024에서조차 Grade 8 MathCAMPS 문제의 절반도 채 풀지 못합니다. 선행 노출이 알려져 있으므로, 규모 확장, 사후 훈련, 문맥 내 예시 뒤에 나타나는 역량은 그 개입에 돌릴 수 있습니다. 저자들은 또한 경계가 인간의 형태가 아님을 보고합니다. 모형이 하위 기술을 실패하면서도 때로 하류 기술을 이기기 때문입니다.
- **채점 규칙은 기구의 일부다.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava(2026)]]는 동일한 ASSISTments 2012–13 사건 순서에 대해 힌트가 보조된 행을 어떻게 채점하는가만 다른 네 가지 지식 추적 갱신 규칙을 운용하며, 등록 파일이 존재할 때까지 확증 반쪽의 학생을 보류하는 울타리 뒤에 그 비교를 사전 등록합니다. 어떤 완료든 인정하는 규칙은 기술 난이도 상수를 겨우 능가할 뿐이고(985,813건의 채점된 사건에 걸쳐 통합 AUC 0.604 대 0.595), 엄격한 규칙 아래 72.8%에 비해 93.9퍼센트의 학생–기술 쌍을 숙달로 선언합니다. 이 일반적 교훈은 숙달 라벨이 로그가 아니라 증거 규칙에 의해 정의된다는 것입니다.
- **모형 역량을 정확도가 아니라 보정된 수준으로 보고하라.** [[standardized-assessment-llm-english-proficiency-2026|Min 외(2026)]]는 전문가 주석이 달린 624개 문항을 2,050개의 학습자 응답을 사용하여 이름 붙은 숙련도 수준으로 대응시키고, 전선 모형들이 보정된 천장을 넘어섬을 발견합니다. 퍼센트가 숨기는 한계입니다.

- **채점 규칙은 그것이 훈련하는 모형에 의해 속을 수 있다.** 최선의 결정 하나를 반복하여 극대화되는 적응성 지표는, 벤치마크 설계가 argmax를 공개하고, 적응성을 차이로 채점하며, 무작위를 넘는 기준선을 보고해야 함을 보여 줍니다([[llm-tutor-pedagogical-metric-degradation-2026|Domínguez Figaredo & Fernández De la Cruz, 2026]]).

## 연결된 개념

- [[ai-ed-evaluation]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[automated-essay-scoring]]

## 연결된 문서
- [[standardized-assessment-llm-english-proficiency-2026]] — 모형 역량을 보정된 수준으로 보고하는 624문항 영어 숙련도 벤치마크(Min 외 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[assessment-latent-structure-human-llm-2026]] — 평가 기구는 인간과 LLM에게 같은 것을 측정하는가?(Strugatski 외 2026)
- [[cdpk-pedagogy-benchmark-llms]] — Pedagogy Benchmark: LLM의 교수법적 지식(CDPK + SEND)
- [[jeon-isd-agent-bench-2026]] — ISD-Agent-Bench: LLM 기반 교수 설계 에이전트의 벤치마킹
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — 온프레미스 OER AI 지식베이스 보조자: 다차원 벤치마크
- [[authentic-products-authenticated-processes-2026]] — 실제적 산출물에서 입증된 과정으로: AI가 풍부한 고등 교육의 실제적 평가
- [[llm-cognitive-diagnosis-handwritten-math]] — 손으로 쓴 수학 작업에서 학생의 인지 기술 진단을 위한 대규모 언어 모형 벤치마킹
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: 시뮬레이션된 학습자를 둔 교수법적 LLM 에이전트를 위한 장기 수평선 벤치마크
- [[responsible-assessment-ai-era-stanford-2026]] — AI 시대의 책임 있는 평가: 미래 중심 학회의 핵심 통찰
- [[anvil-ai-educational-animations]] — ANVIL: 강의자를 위한 비유와 영상
- [[icle-plus-plus-essay-scoring]] — ICLE++: 총체적 에세이 채점을 위한 세밀한 특성의 모형화
- [[teaching-monster-pck-benchmark-2026]]
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: 슬라이드 감사를 위한 멀티모달 LLM 벤치마킹
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: 생성된 수학 도형 평가를 위한 벤치마크
- [[eeg-familiarity-automated-assessment-2026]] — 학습자 평가의 자동화: EEG 기반 친숙도 예측
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: 이론적 컴퓨터 과학 교육을 위한 검색 증강 생성 — 알고리즘 분석과 복잡도 이론을 위한 종합적 평가 틀
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 주석 우선, 과제 생성적 벤치마크 구성, 그리고 12개 예술 이미지 과제에 걸친 차원 수준의 비중복성(Zhu 외 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI와 인간 튜터링이 동등한 GRE 학습 성과를 낸다
- [[bloom-classifier-ai-assisted-questions-2026]] — 새로운 AI 지원 교육 문항의 교수법적 평가를 위한 사전 훈련 모형 평가
- [[llm-benchmark-secondary-science-topics-2026]] — LLM의 중학교 및 고등학교 과학 주제 이해를 위한 벤치마크
- [[llm-tutor-pedagogical-metric-degradation-2026]] — 반복으로 최적화된 지표에서 도출된 AI 튜터 벤치마크를 위한 여덟 가지 설계 원리(Domínguez Figaredo & Fernández De la Cruz 2026)
