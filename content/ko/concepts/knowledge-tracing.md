---
title: 지식 추적
created: "2026-06-23T10:44:35-04:00"
updated: "2026-10-09T09:50:00-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **지식 추적** — 연습 문제에서의 수행을 추적하고 미래 숙달을 예측함으로써 학습자가 아는 것을 시간에 걸쳐 모델링하는 것. 이것은 이 지식 기반에서 가장 풍부한 모델링 줄기로, 학생 지식이 진화함에 따라 그것을 추적하는 베이지안, 심층 학습, [[llm|LLM 강화]] 접근을 아우릅니다.

## 생각해 볼 질문들

- 지식 추적은 연습 문제에서의 당신의 수행으로부터 시간에 따른 당신이 아는 것을 모델링하여, 지식이 언제 획득되고 언제 소멸하는지 추적합니다. 당신이 무언가를 진정으로 '아는지' 대 이번에 단지 맞혔는지에 대해 당신의 답이 드러낼 수 있는 것은 무엇입니까?
- 이 페이지는 '숙달은 정확성이 아니다'라고 경고합니다 — 학습자는 숨겨진 조건이 위반될 때 숙달된 것처럼 보이면서도 기술을 체계적으로 오적용할 수 있습니다. 무언가를 이해한 것처럼 보였지만 실제로는 그렇지 않았던 사람(혹은 자신)을 언제 보셨습니까?
- 지식 추적이 다음에 무엇을 가르칠지 결정하는 적응 시스템에 공급된다면, 모형이 정답을 참된 숙달로 착각하여 학생을 너무 일찍 넘길 때 무엇이 잘못됩니까?
- 지식 추적은 많은 형태를 취합니다 — 베이지안, 신경망, 하이퍼그래프, 대화 기반, LLM 강화. 설명할 수 있는 투명한 모형과 강력하되 불투명한 모형 사이에 어떤 절충을 예상하십니까?
- 이 페이지는 지식 추적을 시뮬레이션된 학생과 연결합니다 — 추적이 실제 데이터로부터 일반적으로 추론하는 지식 상태를 생성하는 것. 학습자를 시뮬레이션하는 것이 튜터를 실제 학생을 만나기 전에 시험하는 데 어떻게 도움이 될 수 있습니까?
- 지식은 시간이 흐르며 소멸하므로, 적응 시스템은 학생이 잊어버린 뒤 과거의 '숙달'을 어떻게 해야 합니까? 지식이 지속된다고 가정하기보다 망각을 위해 어떻게 설계하시겠습니까?

## 들어가며

지식 추적은 날것의 연습 응답을 학생이 숙달한 것과 여전히 배워야 할 것의 추정으로 변환합니다. 단순한 정확성 추적과 달리, 지식 추적은 학습의 시간적 역동성을 모델링합니다 — 지식이 언제 획득되고, 언제 소멸하며, 개념들이 서로 어떻게 관련되는지.

### 이 지식 기반에 표현된 접근들

- **베이지안 접근:** [[stanbkt-bayesian-knowledge-tracing]]은 BKT 구현을 표준화하고, [[mbp-kt-meta-behavioral-knowledge-tracing]]은 메타 행동 신호를 통합합니다
- **LLM 관찰 함수를 갖춘 소프트 증거 BKT:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn(He 외, 2026)]]은 BKT 구조는 유지하되 이진 정답/오답 관찰 — 표준 BKT의 입력 — 을 연속적인 것으로 대체합니다: [[llm]] 채점기가 등급 매겨진 숙달 증거와 신뢰 가중치를 내보내어, 신뢰 수축된 사후확률에 혼합되고 명확히 틀린 답이 추정치를 올리지 못하도록 게이트됩니다. 이는 갱신을 표준 BKT의 엄격한 축소가 아니라 그것을 일반화하는 변형으로 만듭니다. 그 관찰 함수가 신뢰할 만한지는 학습자에 따라 다릅니다: 평균 증거는 능력 계층을 깨끗이 구분했지만(0.25 약함 / 0.67 혼합 / 0.77 강함) 계층 내 참된 숙달과의 상관은 r ≈ 0.15 / 0.48 / 0.41에 그쳐, 추적된 상태를 학습자에 관한 에이전트의 믿음이지 보정된 측정으로 남겨 두었습니다.
- **신경망 및 하이브리드 모형:** [[neural-symbolic-knowledge-tracing]]은 상징 추론과 [[machine-learning|신경망]]을 결합하고, [[explainable-probabilistic-kt]]는 해석 가능한 확률론적 모형을 발전시킵니다
- **하이퍼그래프 메모리 네트워크:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]]은 메모리 기반 추적(DKVMN)에 시간적 하이퍼그래프 추론을 더하여, 다중 기능 문제 내에서 공동 출현하는 개념들 사이의 동적 고차 상호작용을 모델링합니다
- **대화 기반 KT:** [[huang-interpretable-knowledge-tracing-2026]]은 지식 추적을 대화형 교습에 적응시킵니다
- **LLM 강화:** [[xie-hillm-cd-2026|HiLLM-CD]]는 자동 개념 트리 구성과 계층적 숙련도 추론에 LLM을 사용합니다
- **의미적, 추천 지향 KT:** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec(Ozyurt, Almaci, Feuerriegel과 Sachan, 2025)]]는 구조가 아니라 *입력*을 근거 짓습니다: LLM이 각 질문에 Common Core State Standards for Mathematics에 정렬된 풀이 단계와 지식 개념으로 주석을 달고, 대조 학습이 질문, 풀이 단계, 개념 임베딩을 정렬하며(사전 군집화로 "막대 그래프 해석하기"와 "막대 그래프에서 정보 읽기" 같은 개념 변형을 제거하여 거짓 음성을 없앰), KC 보정 손실이 추적기가 그 개념의 모든 질문에 모형을 실행하여 추론하는 대신 개념 수준 지식 상태를 직접 예측하게 합니다. 보정된 추적기는 이어서 연습 추천을 위한 강화학습 환경으로 기능하며, 모형 기반 가치 추정이 비평가를 추적기 자체로 초기화합니다. 2,048명의 검사 학생에 걸쳐 평균된 XES3G5M의 네 과제에서 비 RL 기준선은 미미하거나 부정적인 지식 향상을 주었고, 가치 기반 연속 방법은 정책 기반 방법을 능가했으며, 모형 기반 가치 추정은 그것들을 꾸준히 개선했습니다 — 가장 약한 개념 과제에서 가장 날카롭게, 그곳에서는 표적이 매 단계 변합니다. 보고된 향상은 최대 지식 향상률이며 학습 성과가 아니며, 이 파이프라인은 생성된 풀이 단계에 의존하여 그 품질을 추적기가 물려받습니다.
- **성과 기반 지식 추적(OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh 외(2026)]]는 **강의 성과를 지식 개념 그 자체로** 다루어 성과 기반 교육 체계 안에서 학생 지식을 추적하고, 어텐션이나 그래프 유래 개념 관계 대신 강의 성과와 프로그램 성과 사이의 전문가 검증된 OBE "친화 매핑"을 대체합니다. Memory Augmented Neural Network(MANN)은 각 성과의 달성이 다른 것에 미치는 영향을 모델링하고, 영역 적응 BERT 미세 조정이 성과 임베딩을 풍부하게 합니다(GRU 백본이 LSTM을 능가). 실제 [[engineering-education|공학]] 프로그램 LMS 데이터(2,416명 학생, 966개 성과)에서 OKT는 89.81% AUC에 도달하여 DKT, DKVMN, EKT, SimpleKT를 능가했고 — ASSISTments에서는 경쟁적인 결과만 주어, 이 장점이 OBE 고유의 [[curriculum-design|커리큘럼]] 구조에 묶여 있음을 확인합니다.
- **단일의 최근성 척도가 시퀀스 모형이 사는 것의 대부분을 포착한다.** 핀란드 학생 8,996명의 수학 응답 1,927,265건에서, 문항 식별만으로 AUC .8362에 도달했고, 문항 난이도에 대한 하나의 최근성 측정을 더하자 .8669로 올라 쿼리 조건부 변환기의 .8690 이득의 93.5%를 회복한 반면, 이력의 128차원 요약은 .8687에 그쳤습니다([[knowledge-tracing-compression-math-2026|Lahtinen & McMullen (2026)]]).

- **스냅샷 전용 추적.** [[skill-acquisition-without-temporal-info|Nagai 외(2026)]]는 학습자 기능 집합 사이의 포함 관계로부터 의사 시간적 순서를 유도하여, 확장하는 기능 집합을 학습 진행으로 다루어 단일 시점 스냅샷도 추적 가능하게 합니다 — 그러나 이 정식화는 기능이 결코 잃히지 않는다고 가정하므로, 퇴행하는 학습자를 위한 배치는 먼저 명시적 망각 메커니즘이 필요합니다.

### 다른 개념들과의 관계

지식 추적은 [[student-modeling]]과 밀접하게 관련되어 있습니다 — 지식 추적은 구체적으로 인지적 지식을 시간에 걸쳐 모델링하는 반면, 학생 모델링은 학습자의 모든 측면([[affective-computing|정의적]] 상태, [[student-engagement|참여]], 선호)을 표현하는 더 넓은 관행입니다. 지식 추적은 다음에 무엇을 가르칠지 알아야 하는 [[adaptive-learning]]과 [[personalized-learning]] 시스템으로, 그리고 숙달 추정을 사용해 적절한 문제를 선택하는 [[intelligent-tutoring]] 플랫폼으로 흘러듭니다. 이것은 대시보드와 개입 설계를 위해 [[learning-analytics]]에, 세밀한 기능 [[assessment]]를 위해 [[cognitive-diagnosis]]에 연결됩니다. 지식 추적의 구인은 또한 [[simulating-students|시뮬레이션된 학생]]에 정보를 줍니다 — 시뮬레이션된 학습자의 인지 상태는 지식 추적이 모델링하는 동일한 숙달/소멸 역동성으로 흔히 형식화되므로, [[simulation]]은 추적 방법이 실제 응답 데이터로부터 일반적으로 *추론하는* 지식 상태를 *생성하는* 한 방식입니다.

**범위상 주의: 추적은 영역 숙달을 추정하며 고차 인지가 아닙니다.** 127개 지능형 교습 연구의 15년 검토는 베이지안과 심층 학습 추적이 기간에 걸쳐 향상되었으나 고차 인지 과정, 메타인지, 혹은 동기를 여전히 모델링하지 못함을 발견합니다 — 이는 적응 시스템이 가장 표적으로 삼아야 할 상태들입니다([[zerkouk-comprehensive-review-its-2025|Zerkouk 외(2025)]]).

**주의: 숙달은 정확성이 아니다.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, Stamper(2026)]]는 BKT의 2상태(학습됨/학습되지 않음) 가정이 *기만적 과잉 일반화*에 의해 위반될 수 있음을 보여 줍니다 — 학습자는 숨겨진 적용 제약이 위반될 때 숙달된 것처럼 보이면서도 기술을 체계적으로 오적용할 수 있습니다. 이것은 숙달 추정이 [[adaptive-learning|적응]] 정지 규칙을 구동할 때 행동 정확성만이 아니라 조건부 이해(행동을 *보류할 시점* 알기)를 추적해야 한다고 주장합니다.

**관련된 주의는 추적 모형이 배치에 대비해 *어떻게* 검증되는지에 관한 것입니다.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, Carvalho(2025)]]는 BKT, BKT-with-Forgetting, Additive Factors Model을 다중 세션 연속 재학습 데이터에 적합하고, 모든 세션에 사후적으로 적합될 때(수용 가능한 AUC ≈ 0.74–0.79) 학습 추세를 재현함을 발견했습니다; 그러나 **시간 기반 교차 검증** — 한 세션으로 훈련하여 다음을 예측하는, 현실적인 적용 설정 — 하에서는 세 모형 모두 미래 성능을 약 47–58% 과대추정하고, [[desirable-difficulties|간격 효과]]를 포착하지 못하며, 연습 조건 전반에 걸쳐 잘못된 서수 순서까지 예측할 수 있습니다. 말해 주듯, 명시적 망각 메커니즘이 *없는* 모형이 세션이 누적됨에 따라 망각 증강 버전만큼이나 잘 수행하여, 망각이 다른 매개변수(예: AFM의 학생별 절편)에 부분적으로 흡수되었을 뿐 진정으로 모델링되지 않았음을 시사합니다. 저자들은 이것을 학습 대 수행 구분에 묶습니다: 널리 쓰이는 모형은 높은 순간 성과를 높은 장기 유지 가능성과 혼동합니다. 실무적 함의는 사후 적합에서 좋아 보이는 추적기가 그 숙달 추정을 소비하는 적응 시스템을 오도할 수 있으므로, 워크포워드 평가와 유지 간격, 간격, 세션 간 망각을 다루는 모형을 주장한다는 것입니다.

**또 하나의 주의는 갱신에 공급되는 증거 규칙에 관한 것입니다.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava(2026)]]은 동일한 ASSISTments 2012–13 사건 서열 위에서 도움을 받아 완료된 행을 어떻게 채점하는지만 다른 네 가지 갱신 규칙을 실행했으며, 12,716명 학생과 985,813개의 채점된 사건으로 된 확인 절반에서. 힌트를 받거나 재시도한 행을 실패한 첫 시도로 읽는 것이 이후 비보조 수행을 가장 잘 예측했고(통합 AUC 0.658), 완료를 모두 인정하는 것은 가장 못 예측했습니다(0.604), 기능 난이도만 아는 상수(0.595)를 간신히 웃도는 수준입니다. 동일한 선택이 숙달 개수를 관장합니다: 완료를 인정하는 것은 113,428개의 학생–기능 쌍 중 93.9%를 숙달로 선언한 대비 엄격한 규칙 하에서는 72.8%였고, 관대한 규칙이 엄격한 규칙보다 먼저 선언한 쌍은 이후 70.9%의 비보조 정확도로 간 대비 둘이 합의한 곳에서는 85.7%, 기준률 0.744에 못 미쳤습니다. 따라서 추적된 상태는 부분적으로 학습자만이 아니라 채점 관행의 함수이며, [[adaptive-learning|적응]] 게이트가 소비하는 숙달 추정은 그것을 만들어 낸 규칙을 함께 실어야 합니다.

**능력 주의: 일반 언어 모형은 지식을 사소한 기준선을 간신히 웃도는 수준으로 추적합니다.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden 외(2026)]]는 FoundationalASSIST를 공개하여 이전 추적 데이터셋이 버렸던 전체 질문 텍스트, 학생이 실제로 준 응답, 그들의 오답 선택지를 복원하고, 네 개의 프론티어 [[llm|LLM]]을 제로샷 추적기로 시험했습니다. 최선인 GPT-OSS-120B는 항상 정답을 예측하는 규칙이 이미 얻는 51.3% 대비 56.2%에 도달했고(AUC-ROC 0.559), 더 긴 이력에서 향상은 없었으며, Llama-3.3-70B는 학생이 맞혔을 때 85.4%만 옳았으나 틀렸을 때는 12.6%만 옳았습니다 — 이는 즉석 모형이 이해가 아니라 낙관을 추적한다는 증거이므로, 추적기의 겉보기 기량은 그 과제가 허용하는 사소한 기준선에 대비해 읽어야 합니다.
- **단일 경로 LLM은 어떤 학습자도 기록되기 전에 지식을 추적할 수 있다.** 목표 플랫폼 데이터 없이 하나의 타이핑된 질문으로 조회되었을 때, Jev는 평균 AUC .706에 도달하여, 8명 학습자에 대해 훈련된 28개의 심층 추적 모형 중 최선(.689)보다 높았고, 감독 추적이 따라잡는 64-128명 학습자까지 앞섰습니다([[system-one-llm-knowledge-tracing-2026|Lee와 Park, 2026)]]).

## 연결된 개념

- [[learners]] — 학습자: 학습자 측 개념의 포괄 개념
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — 지원 결정에 공급되는 세밀한 숙달 추정

## 연결된 문서

- [[deceptive-overgeneralization-adaptive-learning-2026]] — 기만적 과잉 일반화: 적응형 숙달은 학습자가 행동을 보류할 시점을 알기 전에 연습을 멈출 수 있다(An, McLaren & Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — 동적 영역을 위한 그래프 기반 지능형 교습(2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 친화 매핑을 활용한 성과 기반 지식 추적
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — 의미적으로 근거 지어진 추적으로, KC 보정된 상태를 추천을 위한 RL 환경으로 사용
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: 인간-AI 공학습 루프에서 학습자를 배우는 에이전트형 튜터
- [[crediting-assisted-work-inflates-mastery-2026]] — 어떤 증거 규칙이 숙달 주장을 결정하는가(Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — 단일 경로 LLM은 8명 학습자에 대해 훈련된 심층 모형보다 높게 지식을 추적하며, 비용은 그 일부이다(Lee와 Park 2026)
- [[knowledge-tracing-compression-math-2026]] — 수학 지식 추적에서 학생 이력의 압축
