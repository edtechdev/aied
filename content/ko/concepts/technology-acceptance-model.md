---
title: 기술 수용 모형
created: "2026-08-18T14:55:00-04:00"
updated: "2026-11-08T10:12:52-05:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, technology-acceptance-model]
audience: [learners]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/technology-acceptance-model
source_updated: "2026-11-08T09:30:45-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**기술 수용 모형**은 개인과 기관이 새로운 [[ai-technologies|기술]]을 받아들이고, 도입하고, 계속 사용하는 이유를 설명하고 예측하는 데 쓰이는 이론적 틀입니다. [[ai-education|교육에서의 AI]] 연구에서는 학습자, 교사, 조직이 [[generative-ai|생성형 AI]] 도구를 도입하는 이유를 설명하는 틀입니다. 단일 모형이 아니라, 이것은 정보 시스템과 사회심리학 연구에 뿌리를 둔 이론의 계열이며, 그중 **기술 수용 모형(TAM)**이 가장 널리 적용됩니다. 이 지식베이스는 이 모형들을 함께 다룹니다. GenAI 도입 연구가 이들을 일상적으로 결합하고(TAM + UTAUT, TAM + TPB, UTAUT + ARCS), 또 그 핵심 구성개념 — 인지된 유용성, 인지된 사용 용이성, 사회적 영향 — 이 교육에서 AI 수용에 관한 거의 모든 연구에 되풀이해 등장하기 때문입니다.

## 생각해 볼 질문들

- 새로운 앱, 도구, AI 서비스를 도입했던 때와 그것을 포기했던 때를 떠올려 보십시오. 각 결정을 실제로 이끈 것은 무엇이었습니까? 얼마나 유용해 보였는지, 얼마나 쉬웠는지, 주변 사람들이 무엇을 하고 있었는지? 여러분은 어떤 요인이 가장 중요하다고 의심하며, 설문이 그것을 정말 포착할 수 있을까요?
- '도구가 명확히 유용하면 사람들은 그것을 쓸 것이다'는 흔한 믿음이 있습니다. 진정으로 유용한 기술이 좀처럼 자리를 잡지 못하거나, 명확히 제한적인 기술이 확산되는 상황을 보신 적이 있습니까? 객관적 유용성과 실제 도입 사이의 간극을 무엇이 설명할 수 있을까요?
- TAM 같은 도입 틀은 1980년대에 꽤 단순한 시스템을 위해 설계되었습니다. 생성형 AI를 써 보셨다면, 그것이 워드 프로세서나 [[edtech-platform|학습 관리 시스템]]과 어떤 점에서 다른지 — 그리고 '사용 용이성'과 '유용성'을 중심으로 세워진 모형이 말을 받아치는 존재에 대해 사람들이 맺는 관계를 포착하는 데 왜 어려움을 겪을 수 있는지?
- [[research-methods-aied|연구자]]들은 종종 인지된 위험과 신뢰가 AI 도입에 예상보다 덜 중요하다고 말합니다. 더 읽기에 앞서, 여러분의 예측은 어떻습니까? 학생들은 위험에도 불구하고 AI를 신뢰하기 때문에 도입합니까, 아니면 그런 우려는 편의성과 사회적 압력에 비하면 실제로 미미합니까?
- 이 페이지는 도입 틀이 도구 사용을 일회적 결정으로 다룬다고 주장하지만, 효과적 사용은 지속적 판단일 수 있습니다. 여러분이나 여러분 학생들의 실천에서 'AI를 쓰기로 선택하는 것'과 '그것을 잘 쓰는 법을 끊임없이 결정하는 것' 사이의 경계가 흐려 보이는 곳은 어디이며, 우리가 단순한 도입이 아니라 그것을 측정한다면 무엇이 달라질까요?
- 일부 연구자들은 하나의 모형이 모두에게 맞는다고 가정하는 대신 학습자를 서로 다른 '도입 페르소나'로 묶습니다. 단일 평균 도입 모형이 감출 수 있는 여러분 자신의 학습자, 동료, 학생 사이의 차이를 무엇이라 보시며, 그 차이들이 그들을 지원하는 방식을 어떻게 형성할 수 있을까요?

## 들어가며

**[[meta-analysis-systematic-review|메타분석적]] 증거** [[teo-ai-adoption-tertiary-meta-analysis-2026|고등교육 학생의 AI 도입에 대한 메타분석]](상관계수 233개, 연구 32편, N = 16,977)은 개인 요인(r = 0.57), 맥락 요인(r = 0.53), 기술 요인(r = 0.50)에 대해 중간 정도의 양의 상관을 발견하며, 사용 의도가 가장 강한 예측변수(r = 0.64)이고 인지된 위험/신뢰는 예상보다 약합니다. 이 연구의 중심 비판은 이 분야가 현대의 지능형 시스템에 앞서 존재하는 전통적 TAM/UTAUT 틀에 **지나치게 의존**하며, 의인화와 윤리 같은 AI 특정 요인을 간과한다는 것입니다. 이론과 증거 기반 정책을 발전시키는 데 그 간극이 중요하다는 것이 그 주장입니다.
- **표본이 이미 도입한 뒤에는 사용 용이성이 예측력을 잃었다.** Wei, Zhang and Heo (2026)는 AIGC 사용 경험이 있는 디자인 학생 526명에게 TAM을 확장하여, 인지된 사용 용이성이 자기효능감과 유의하게 연관되지 않은 유일한 기술 지각이었고 지식, 신뢰, 신뢰성, 유용성, 지능, 불안은 각각 연관되었다는 것을 발견했습니다([[wei-perceived-technological-dependence-genai-2026|Wei et al., 2026]]). 사용 의도는 횡단면 자료에서 보고된 의존과 강하게 연관되었습니다.

## 모형의 계열

### 기술 수용 모형 (TAM)
Davis (1989)가 제안한 TAM은 두 핵심 신념 — **인지된 유용성(PU)**과 **인지된 사용 용이성(PEOU)** — 이 사용자의 **태도(ATT)**를, 이어 **행동 의도(BI)**를, 이어 실제 사용을 형성하는 것으로 도입을 설명합니다. 정보 시스템 이론(합리적 행위 이론에서 적응)에 근거한 TAM은 교육에서 [[generative-ai|GenAI]] 도입의 지배적 틀이 되었습니다. 교육용 GenAI 연구에서 TAM은 종종 [[ai-literacy]], [[trust]], 사회적 영향, [[self-determination-theory|자기 결정]], **비판적 사용**으로 확장되어 단순한 도입 너머의 수용 복잡성을 포착합니다.

### UTAUT / UTAUT2 / UTAUT3
**통합 기술 수용 및 사용 이론**은 TAM을 기존 여덟 모형과 통합하여 네 핵심 결정요인 — 성과 기대, 노력 기대, 사회적 영향, 촉진 조건 — 으로 압축합니다(UTAUT2는 쾌락적 동기, 가격 가치, 습관을 더하고; UTAUT3는 개인 혁신성을 더합니다). 이 지식베이스는 교사와 학생 집단에 UTAUT를 적용합니다. [[mathematics-teachers-chatbot-motivation-2026|오스트리아 중등 수학 교사]](448명 교사를 대상으로 한 UTAUT), [[pre-service-science-teachers-ai-perceptions-2026|가나의 예비 과학 교사]](UTAUT + TPB), [[tian-genai-learning-adoption-pathways-2026|레소토의 학생들]](UTAUT3 + ARCS, PLS-SEM과 fsQCA 사용). [[jacome-vasconez-chatgpt-adoption-xai-2026|Jácome-Vásconez et al.]]는 522명의 대학생을 대상으로 UTAUT2를 설명 가능한 AI(Random Forest, SHAP, NCA, IPMA, K-Means)로 확장하여, **습관**이 ChatGPT 사용 의도의 가장 강한 예측변수임을 발견하고 **노력 기대가 선형적 동인이 아니라 필요 조건**임을 보여 줍니다. 이 결과는 XAI가 회귀분석을 보완할 때에만 보입니다.


**이미 도입한 표본에서는 습관이 모형을 떠받치고 기대 요인들은 조용해집니다.** [[pinedo-genai-adoption-marketing-students-2026|Pinedo et al. (2026)]]는 라틴 아메리카 두 대학의 [[business-education|마케팅 학생]] 310명을 대상으로 UTAUT2를 검증했습니다. 습관은 의도를 β = 0.426, 사용을 β = 0.412로 예측했고, 의도는 사용을 0.324로 예측했습니다. 성과 기대(0.037), 노력 기대(0.054), 사회적 영향(0.048)은 유의하지 않았으며, 모형은 의도의 R² = 0.665와 사용의 0.707을 설명했습니다. 저자들은 이 무효 경로를 이미 도구를 도입한 집단에서의 변량 제한으로 읽습니다. 결과 변수는 기록된 행동이 아니라 [[self-report-measures|자기보고]] 사용입니다.

**저자원 환경에서는 사회적 영향이 아니라 불안이 정서 경로를 떠받쳤습니다.** 가나의 인문학 학부생 350명을 대상으로 한 UTAUT 확장 연구는 성과 기대가 의도의 가장 강한 예측변수(β = 0.377), 노력 기대가 두 번째(β = 0.281)임을 발견했고, 사회적 영향은 무효(β = −0.038)였으며, 디지털 학습 불안은 β = −0.281이었습니다([[davor-digital-learning-anxiety-utaut-genai-ghana-2026|Davor et al., 2026]]). 노력 기대는 불안도 낮췄으므로(β = −0.126), 사용 용이성은 부분적으로 불안을 낮춤으로써 작동했습니다.


### 계획된 행위 이론 (TPB)
TPB는 태도, 주관적 규범, 인지된 행동 통제를 통해 의도를 설명합니다. AI 도입 연구에서 TAM/UTAUT와 자주 짝을 이룹니다. 예를 들어 [[genai-chatgpt-adoption-ethics-students-2026|Rizun et al.]]는 TAM, TPB, UTAUT, FATE([[bias-mitigation|공정성]], 책임성, 투명성, 윤리) 틀을 통합하여 학생의 ChatGPT 도입 행동 및 [[ethics|윤리]] 동인을 모형화합니다.

도입 연구는 대개 의도에서 멈춥니다. 한 TPB 확장 연구는 진정한 의도에도 불구하고 지연을 측정하여, 1,243명의 학부생에 걸쳐 인지된 행동 통제가 GenAI 보조 학습 미루기의 가장 강한 부적 예측변수(β = −0.331)임을 발견했으며, 의도-지연 연결은 학습 GenAI 불안이 중간 이상인 경우에만 유의했습니다([[genai-learning-procrastination-planned-behavior-2026|Li et al. (2026)]]).

### 확산 이론 (DOI)
Rogers의 DOI 이론은 도입을 혁신이 시간에 걸쳐 인구를 통해 확산되는 사회적 과정으로 설명하며, 혁신 속성(상대적 이점, 적합성, 복잡성, 시도 가능성, 관찰 가능성)과 수용자 범주를 강조합니다. 이는 이 지식베이스의 [[governance|제도]] 수준 분석에 등장합니다. 예를 들어 [[alrahmi-org-drivers-ai-adoption-he-2026|Al-Rahmi et al.]]는 기술-조직-환경(TOE) 틀을 DOI와 결합하여 사우디 대학의 조직적 AI 도입을 모형화합니다.

### 기술-조직-환경 (TOE)

TOE는 도입이 기술적, 조직적, 환경적 맥락에 의해 형성된다고 규정합니다. 개인 수준 TAM/UTAUT에 대한 보완으로, 제도적 도입을 연구하는 데 쓰입니다([[alrahmi-org-drivers-ai-adoption-he-2026]] 참조).

## 지식베이스에서의 응용

도입 모형은 학생과 [[teacher-role|교사]]의 AI 도구 수용을 모형화하기 위해 이 지식베이스 전반에 걸쳐 적용됩니다.

- **비판적 사용 확장:** [[tam-critical-use-genai-engineering-2026|Nguyen et al.]]는 공학/CS 학생을 위해 TAM을 *비판적 사용*으로 확장하여, 태도와 비판적 사용이 의도를 직접 예측하며 — 비판적 사용이 [[cognitive-offloading|과의존]]에 대비하는 안전장치 역할을 한다는 것을 발견했습니다.
- **통합 사회인지 모형:** [[socio-cognitive-genai-adoption-engineering-2026|Asag & Al Mamun]]은 방글라데시 공학 학생을 위해 TAM과 UTAUT를 통합했습니다(사용 분산의 64% 설명).
- **사람 중심 프로파일:** 변수 중심 모형이 아니라, [[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed]]는 GenAI 도입 페르소나를 군집화하고, [[chen-preservice-teachers-chatgpt-lpa-2026|Chen et al.]]는 [[latent-profile-analysis|잠재 프로파일 분석]]을 사용하여 예비 교사들 사이의 ChatGPT 수용 프로파일 네 개를 식별합니다. 이는 단일 모형과 선형적 설명을 넘어서려는 이 분야의 움직임을 보여 줍니다.
- **문화 간 검증:** [[motivation-shape-future-education-ai-switzerland-china|Martínez-Moreno et al.]]는 스위스와 중국에 걸쳐 도입 관련 동기 구성개념을 문화 간 검증합니다.

- **기대 매개변수 옆의 지식 매개자:** [[isbulan-ai-self-efficacy-acceptance-literacy-2026]]는 튀르키예 학부생 622명에서 [[ai-literacy|AI 리터러시]]를 [[self-efficacy|AI 자기효능감]]과 수용 사이에 놓습니다. 간접 경로는 유의했고(B = 0.15, 95% CI [0.12, 0.19]) 직접 경로도 그대로 남았습니다(B = 0.43, R² = 0.29). 수용은 [[anxiety-and-stress|AI 불안]]과 약한 부적 연관도 보였습니다(B = -0.34, R² = 0.05). 아래의 [[trust-calibration|과신]] 연구가 확신을 성과 기대를 통해 연결하는 반면, 이 연구는 학생이 기술에 관해 아는 것을 통해 연결합니다.

- **심리적 연관 변수:** [[acceptance-ai-english-tools-2026|Wu et al.]]는 TAM에 기반하여 동기, [[self-efficacy]], 불안, 위험 인식을 AI 지원 영어 학습의 수용에 연결합니다.
- **[[regulation|규제]] 역량 비판:** [[ai-anxiety-strategic-regulation-writing-2026|Kim]]은 도입 중심 TAM 모형이 사용을 안정적 결정으로 다루지만, 효과적 AI 사용은 판단, 수정, 선택적 수용의 지속적 과정이라고 주장하며, [[ai-literacy]]를 수용이 아니라 규제 역량과 [[critical-thinking]]으로 재규정합니다.

계획된 행위 이론 같은 신념 틀에 [[tpack|TPACK]] 계열 역량을 병렬 예측변수로 덧붙이는 것은 구성개념 중첩을 초래하고 역량, 태도, 통제의 인과적 순서를 미결로 남깁니다. 역량-결정 모형은 대신 AI-TPACK 역량을 태도와 인지된 행동 통제의 상류에 놓습니다([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

- **ChatGPT 도입의 ML 결정요인:** 탐색적 ML 접근은 학생의 인식과 인구통계가 의도된 학문적 ChatGPT 사용과 어떻게 관련되는지를 SHAP 분석으로 검토하여, 핵심 학습 관련 구성개념을 식별했습니다. 알고리즘 성능 극대화보다 교육적 의미를 우선시한 것입니다([[determinants-chatgpt-use-higher-education-2026]]).
- **교사를 위한 수용 지렛대로서의 [[explainable-ai|설명 가능성]]과 도메인 관련성:** 자동화 신뢰 이론을 AI 권고에 대한 교사 수용에 적응시켜, [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]]는 설명 가능한 AI에 의해 높아지는 이해 가능성이 AI 집단화 도구에 대한 신뢰와 수용 모두에 양으로 상관했고, 데이터 기반 특성 중요도 설명보다 [[curriculum-design|교육과정]] 언어를 쓴 도메인 주도 설명이 세 측면 모두에서 더 나았다는 것을 발견했습니다. 수용은 또한 [[pedagogy|교수법적]] 정렬과 업무 경감 잠재력에 의해 추동되었습니다. 표준 TAM/UTAUT 구성개념이 좀처럼 포착하지 못하는 상황적 요인들로, 도입 모형을 맥락과 설명 가능성으로 확장할 근거를 강화합니다.
- **교수 자료 수준에서 측정된 수용 (2026).** [[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang and Wu (2026)]]는 연령 계층형 AI 리터러시 안내서 두 권을 사용한 794명의 [[k-12]] 학생과 37명의 교사를 대상으로 성과 기대, 노력 기대, 인지된 재미, 행동 의도를 조작화하여, 표본 분할 EFA와 CFA로 네 요인 구조를 검증하고 9-12세 및 13-18세 판본에 걸친 측정 불변성을 지지했습니다. 어린 학습자는 네 구성개념 모두에서 더 높은 수준을 보고했으며, 재미는 두 코호트 모두에서 의도와 가장 강한 상관을 보였습니다. 어린 집단에서 표준화된 재미-의도 계수가 1.00을 넘었고 두 구성개념 사이의 HTMT가 .950였습니다. 저자들은 그것을 구성개념 중첩과 가능한 억제 현상으로 읽으며, 거대한 효과가 아니라고 봅니다. 자료에 적용된 수용 도구가 구조적 해석을 복잡하게 하는 경험적으로 뒤얽힌 요인을 만들어 낼 수 있다는 유용한 교훈입니다.

교수진 22명을 대상으로 한 두 차례 인터뷰 연구에서 AI를 더 많이 알게 된 것이 수용을 높이기보다 일부를 더 신중하게 만들었으며, 이는 경험에서 사용 용이성으로 향한다는 모형의 가정된 방향을 뒤집습니다([[stalboerger-faculty-perceptions-2026|Stalboerger 등, 2026]]).

## 한계와 확장

TAM의 인지적 초점은 또한 AI 사용의 정서적·관계적 차원을 충분히 포착하지 못합니다. 간호학 학생과 교수를 대상으로 한 [[akbaba-nursing-ai-experiences-tam-2026|질적 연구]]는 네 고전 TAM 구성개인과 더불어, 참가자들 — 주로 학생들 — 이 AI를 심리사회적 지원의 원천으로 기술했다는 것을 발견했습니다. 스트레스 중의 정서적 위안과 반성을 위한 비밀스러운 공간입니다. 이는 인지된 유용성을 수행 향상 너머 [[well-being]]까지, 고강도 [[professional-training|전문 훈련]]의 차원에서 확장하며, 도입 모형이 도구적 효용만이 아니라 정서적·심리사회적 요인에도 주목해야 한다고 제안합니다.

**[[agency|자율성]] 인식과 위험 회피를 도구 특정 확장으로.** 27개 국가와 지역의 GenAI 경험이 있는 교사 287명을 대상으로 한 [[mixed-methods-research|혼합 방법]] 설문([[dai-genai-frenemy-teaching-autonomy-2026|Dai et al. (2026)]]))은 TAM을 모형 계열이 거의 손대지 않은 방향으로 확장합니다. 도구 자체의 인지된 *자율성*입니다. 인지된 인공 자율성(교사들이 GenAI가 부여된 교수 과업을 얼마나 독자적으로 수행할 수 있다고 믿는 정도)과 위험 회피를 고전 구성개념에 더하여, 이들이 다듬은 구조 모형은 행동 의도 분산의 79.8%를 설명했습니다(χ²(97) = 202.597, CFI =.963, TLI =.954, RMSEA =.062, SRMR =.041). 인지된 유용성은 다시 지배적이었고(PU → BI β =.832, p <.001), 사용 용이성은 유용성에 기여했습니다(PEU → PU β =.479). 교훈적인 것은 우회로들입니다. 인공 자율성은 의도에 직접 작용하지 않았지만(β =.026, ns), 유용성을 통해 작용했습니다(AA → PU β =.188, p <.001; 간접 AA → PU → BI =.156, 95% CI [.082,.240]). GenAI를 더 유능하다고 본 교사들은 그것을 더 즉각적으로 받아들일 만하다고 본 것이 아니라 더 유용하다고 본 것입니다. 위험 회피는 인지된 유용성을 낮추지 않고(RA → PU ns) 의도를 낮췄습니다(RA → BI β = −.163, p <.001). 교사들의 우려가 자신의 사용이 아니라 *학생들의* 사용 — 부정행위와 [[academic-integrity|학문적 정직성]], 약화된 기초 지식과 고차원적 사고, [[hallucination-risk|환각]], 줄어든 인간 상호작용, 윤리적·법적·[[equity-in-ai-education|형평성]] 위험 — 에 집중되었기 때문입니다. 사용 용이성은 전체적으로는 비유의적이었으나(PEU → BI β =.068), 실제로 교수에서 AI를 사용한 경험이 있는 225명의 교사들 사이에서는 유의했습니다(β =.138, p <.05). 노력은 실제 만남 이후에야 기록되는 익숙한 양상입니다. 태도는 의도와의 상관(r =.929)이 판별 타당성을 침범할 때 제외되어야 했습니다. 교사들은 GenAI를 준자율 수준에 놓았습니다(130명이 수준 2 "교사 보조", 94명이 수준 3 "부분... [truncated]

**위험 인식을 차원 특정 확장으로.** 중국 대학생 814명을 대상으로 한 설문([[risk-perception-genai-perceived-benefits-2026|Du, Ning, Shi & Chen (2026)]]))은 인지 평가 이론과 보호 동기 이론을 TAM/UTAUT2에 접목하여, 학생들이 [[generative-ai|생성형 AI]]를 도입하는지가 아니라 그것에서 무엇을 얻는지를 묻습니다. 위험이 도입을 균일하게 억제한다는 모형 계열의 가정은 살아남지 못합니다. 위험 인식은 정보, 보안, 기술, [[ethics|윤리]], 법적 차원으로 갈라지고, 이들은 혜택을 서로 반대 방향으로 움직입니다. 학생들이 [[privacy|프라이버시 관행]]을 통해 관리할 수 있다고 믿는 위협인 보안 위험은 인지된 학업 지원과 기술 발달에 *양으로* 연관되었는데, 문제 중심 대처와 일치합니다. 반면 학습자가 쉽게 검증할 수 없는 정보 위험은 회피를 통해 심리적·정서적 지원, 일상생활, 여가 혜택을 침식했습니다. 한계점 분석은 또한 차원 특정 절단점을 넘어 부호가 바뀌는 효과들을 보여 주었고, 사용 경험은 독립적으로 중요했습니다. 1년 이상 GenAI를 사용한 학생들은 네 영역 전반에 걸쳐 더 높은 혜택을 보고했습니다. 수용 연구에 대한 실천적 함의는 "인지된 위험"이 모형화하기에 너무 거친 구성개념이라는 것입니다. 학생들이 참여하는지 물러서는지를 결정하는 것은 위험의 단순한 존재가 아니라 통제 가능성입니다.

최근의 한 확장은 방향을 뒤집어, [[discipline-specific-aied|교과 특정]] 동기 신념을 TAM 지각 옆이 아니라 그 상류에 놓습니다. [[high-school-genai-acceptance-tam-physics-2026|Xue, Xu, Qi & Lu (2026)]]는 효용 가치가 인지된 유용성을 β = 0.43으로, 성공 기대가 사용 용이성을 β = 0.39로 예측하는 반면, 핵심 TAM 경로는 약화되지만 유의하게 남는다고 보고합니다.


**병렬 경로로서의 과업–기술 적합성, 그리고 별개의 질문으로서의 필요성.** 위의 확장 대부분은 신념 모형 *안에* 구성개념을 더합니다. TAM 연구가 좀처럼 다루지 않는 형제 틀이 과업–기술 적합성(Task–Technology Fit)이며, 이는 도구의 역량이 특정 과업의 요구와 맞는지를 묻습니다. [[chu-design-students-ai-agent-tam-ttf-2026|Chu and Liu (2026)]]는 중국 대학의 디자인 대학원생 405명에게 두 틀을 결합했고, 적합성은 유용성의 결정요인이 아니라 태도로 들어가는 두 번째 경로로 작동했습니다.

과업 특성은 적합성을 β = 0.322로, 기술 특성은 β = 0.266으로 예측했습니다. 적합성은 다시 인지된 유용성(0.376), 인지된 사용 용이성(0.185)과 나란히 태도를 β = 0.224로 예측했고, 태도는 의도를 β = 0.388로 예측했습니다. 자기효능감은 상류에서 가장 큰 계수를 보였습니다. 유용성에 0.458, 사용 용이성에 0.394입니다. 인지된 즐거움은 사용 용이성을 높이고(0.220) 유용성은 건드리지 않았으며(−0.033, p = 0.483), 이는 고전 모형이 그리지 않는 도구적/정서적 분할입니다.

방법론적 추가가 더 이전 가능한 부분입니다. 다층 퍼셉트론 신경망은 네 모형 모두에서 PLS-SEM의 중요도 순위를 재현했습니다. 이어서 필요 조건 분석은 두 개의 하한만을 찾았습니다. 유용성에 대한 자기효능감(d = 0.125, p = 0.015)과 의도에 대한 태도(d = 0.132, p < 0.001)입니다. 태도는 그 척도의 22.1%, 34.3%, 46.4% 수준이 각각 의도 80%, 90%, 100%에 요구되었으므로, 태도는 가중치가 아니라 관문처럼 작동하며, 이는 경로 계수 0.388과는 다른 주장입니다. 주의점은 결과 변수에 있습니다. 의도의 R² = 0.150과 Q² = 0.011은 가설화된 열 개 경로가 분산의 대부분을 다른 곳에 남긴다고 말합니다.

**신념의 상류에 있는 설계 특징, 그리고 필요성이 아닌 중요도.** [[zhang-ai-enhanced-systems-adoption-ann-nca-2026|Zhang, Xin and Qing (2026)]]는 자극–유기체–반응 틀을 빌려, 중국 대학생 301명을 대상으로 여섯 가지 시스템 특징을 두 TAM 신념 앞에 놓았습니다. 개인화와 상호작용성은 인지된 유용성만을 움직였고, 지능과 콘텐츠 완전성은 사용 용이성만을 움직였습니다. 반응성은 둘 다를 움직였고, 의인화는 어느 쪽도 움직이지 않았습니다. 모형은 의도의 R² = 0.244를 설명했으며(SRMR = 0.033), 의도에 대한 영향에서 사용 용이성이 유용성보다 앞섰습니다(β = 0.340 대 0.265). 열 겹 교차 검증 신경망 중요도도 같은 결론이었습니다. 사용 용이성이 100%, 유용성이 84.70%였습니다.

이어서 필요 조건 분석이 영향력과 요구를 분리했습니다. 최상위 예측변수인 사용 용이성은 완전히 실패했습니다(d = 0, p = 0.592). 유용성은 필요했지만 작았습니다(d = 0.027, p = 0.011). 저자들은 이 분리를 경로 계수를 하한으로 다루지 말라는 경고로 읽습니다. 강한 계수는 사용 용이성 한 단위가 평균적으로 의도를 산다는 것을 말하지만, 다른 신념이 없을 수 있는지를 말하는 것은 필요성뿐입니다.


위험과 사용의 연결은 체계에 따라서도 다릅니다. 해당 문항을 시행한 TALIS 2024 체계 49개에 걸쳐, 인지된 AI 유용성은 49개 모두에서 AI 사용에 양으로 연관되었으나, 인지된 위험은 40개에서는 음으로, 9개에서는 양으로 연관되었습니다([[teachers-ai-belief-profiles-talis-2024-2026|Fang & Jin (2026)]]).


**성과 기대는 수용 연구가 사용 의도로 읽는 관계를 대신 실어 나를 수 있습니다.** [[kim-overtrust-ai-literacy-2026|Kim, Kim and Zhang (2026)]]에서 성과 기대는 AI 과신을 B = 0.6107로 예측했으며, 자기효능감, 내적 동기, [[motivation|외적 동기]]가 과신에 이르는 첫 번째 매개변수였습니다. 기대만을 통한 간접 경로는 세 예측변수 모두에서 양이었고, 자기효능감의 경우 0.1355(95% CI [0.0542, 0.2330])였으므로, 기대는 학생들이 도구를 쓸지 여부만을 예측한 것이 아닙니다.


## 흔한 오해

- **"TAM의 구성개념이 도입을 설명한다."** [[socio-cognitive-genai-adoption-engineering-2026|Asag and Al Mamun]]은 방글라데시 공학 학생을 위해 TAM을 UTAUT와 통합하여 분산의 **64%**를 설명했습니다. 충분하면서 동시에 불완전합니다. 도입을 추동하는 것의 약 3분의 1은 고전적 수용 구성개념 밖에 있습니다.
- **"수용 모형은 도메인 수정이 필요 없다."** **인지된 인공 자율성**(교사들이 GenAI가 부여된 교수 과업을 얼마나 독자적으로 수행할 수 있다고 믿는지)과 **위험 회피**를 고전 구성개념에 더하자 모형이 실질적으로 달라졌습니다. 원래 구성개념은 행위성이 없는 도구를 위해 만들어졌지만, GenAI는 지각된 행위성을 지닙니다.
- **"메타분석적 도입 추정치는 어떤 모집단을 설명한다."** [[teo-ai-adoption-tertiary-meta-analysis-2026|고등교육 학생의 메타분석]]은 모집단 수준 추정치이고, 64%를 설명한 공학 결과는 특정 모집단입니다. 하나를 다른 하나에 이식하는 것은 증거가 확립하지 않은 안정성을 가정합니다.

## 연결된 개념

- [[business-education]]
- [[generative-ai]]
- [[ai-literacy]]
- [[student-experience]]
- [[higher-ed]]
- [[critical-thinking]]
- [[ethics]]
- [[trust]]
- [[cognitive-offloading]]
- [[self-determination-theory]]
- [[research-methods-aied]]
- [[student-modeling]]
- [[framing-ai-use-for-students]]

## 연결된 문서

- [[dai-genai-frenemy-teaching-autonomy-2026]] — "적이자 친구"로서의 GenAI: 인공 자율성과 위험 회피가 교사를 위한 TAM을 확장하다 (Dai et al. 2026)
- [[akbaba-nursing-ai-experiences-tam-2026]] — 간호학의 AI 경험; TAM의 심리사회적 확장
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — 군집화를 통한 GenAI 도입 페르소나
- [[tian-genai-learning-adoption-pathways-2026]] — GenAI 도입의 대칭적·비대칭적 경로 (UTAUT3 + ARCS)
- [[lee-wu-gender-motivation-genai-achievement-2026]] — 성별과 동기에 따른 차별적 GenAI 관여
- [[alrahmi-org-drivers-ai-adoption-he-2026]] — 고등교육에서 조직적 AI 도입의 TOE + DOI 모형
- [[tam-critical-use-genai-engineering-2026]] — 공학/CS 학생을 위한 비판적 사용으로 확장한 TAM
- [[socio-cognitive-genai-adoption-engineering-2026]] — 공학 교육을 위한 통합 사회인지 모형 (TAM + UTAUT)
- [[ai-anxiety-strategic-regulation-writing-2026]] — AI 불안에서 전략적 규제로
- [[genai-reliance-types-scale]] — GenAI 의존 유형 척도
- [[llm-reliance-types-undergrad]] — 학부생의 LLM 의존 유형
- [[acceptance-ai-english-tools-2026]] — AI 영어 도구의 수용
- [[genai-chatgpt-adoption-ethics-students-2026]] — 학생 ChatGPT 도입의 행동 및 윤리 동인
- [[mathematics-teachers-chatbot-motivation-2026]] — UTAUT와 교사 챗봇 동기
- [[pre-service-science-teachers-ai-perceptions-2026]] — 가나 예비 과학 교사를 위한 UTAUT + TPB
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — 예비 교사 ChatGPT 수용 프로파일 (LPA)
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — AI 도입 요인의 메타분석; TAM/UTAUT를 비판한다
- [[determinants-chatgpt-use-higher-education-2026]] — 고등교육에서 미래 ChatGPT 사용의 ML/SHAP 결정요인
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — XAI 강화 UTAUT2: 가장 강한 예측변수로서의 습관, 도입 프로파일 네 개 (Jácome-Vásconez et al. 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — 연령 계층형 AI 리터러시 안내서의 자료 수준 PE/EE/재미/의도 모형으로, 재미-의도 구성개념 중첩이 문서화됨
- [[risk-perception-genai-perceived-benefits-2026]] — TAM/UTAUT2에 접목된 CAT + PMT: 인지된 GenAI 혜택에 대한 차원 특정적이고 비단조적인 위험 효과 (Du, Ning, Shi & Chen 2026)

- [[capability-decision-model-teacher-readiness-2026]] — 계획된 행위 도입 모형에 TPACK 역량을 덧대는 것에 대한 질서 있는 대안
- [[teachers-ai-belief-profiles-talis-2024-2026]] — 49개 체계에 걸친 인지된 AI 유용성과 위험의 사람 중심 TALIS 2024 프로파일
- [[genai-learning-procrastination-planned-behavior-2026]] — GenAI 보조 학습 미루기와 의도-지연 연결에 대한 불안의 조절 효과를 측정한 TPB 확장
- [[high-school-genai-acceptance-tam-physics-2026]] — 교과 특정 신념을 TAM 지각의 상류에 놓기

- [[kim-overtrust-ai-literacy-2026]] — 성과 기대가 동기와 자기효능감에서 AI 과신으로 가는 경로를 매개했다
- [[isbulan-ai-self-efficacy-acceptance-literacy-2026]] — 자기효능감과 수용 사이의 매개자로서의 AI 리터러시, 그리고 보정되지 않은 불안 연관 (İşbulan et al. 2026)
- [[chu-design-students-ai-agent-tam-ttf-2026]] — 과업–기술 적합성과 결합한 TAM, 신경망 중요도 순위와 필요 조건 임계값 (Chu & Liu 2026)
- [[zhang-ai-enhanced-systems-adoption-ann-nca-2026]] — TAM 신념의 상류에 있는 설계 특징, 그리고 필요성이 아닌 중요도
- [[pinedo-genai-adoption-marketing-students-2026]] — 이미 도입한 집단에서 습관이 UTAUT2를 떠받친다

- [[stalboerger-faculty-perceptions-2026]] — 교수진 22명, 후속 12명: 익숙해짐이 일부에게는 윤리적 검토를 강화해 사용 용이성의 방향을 뒤집었다(Stalboerger 등 2026)

