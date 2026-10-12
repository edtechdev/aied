---
title: 문항반응이론
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-05T08:24:47-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
translation_of: concepts/item-response-theory
source_updated: "2026-10-05T08:24:47-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **문항반응이론(Item response theory, IRT)** — 학습자의 능력과 각 문항을 맞힐 확률 사이의 관계를 모델링하여 문항 반응으로부터 잠재 능력을 추정하는 심리측정 모델의 족입니다. IRT는 문항 난이도와 변별도를 모델링하여 측정 정밀도와 적응형 검사를 가능하게 합니다. AI 시대에 IRT는 [[llm|LLM]]과 [[llm-item-difficulty-prediction|LLM 문항 난이도 예측]] 및 [[llm-psychometric-calibration-cdp|LLM 심리측정 보정]]에서 만납니다: AI가 문항 난이도를 예측하고 보정하여, 잠재적으로 측정 정밀도를 개선하고 [[adaptive-learning]]에 공급합니다.

## 생각해 볼 질문들

- 문항반응이론은 능력과 문항 난이도를 원점수로 취급하기보다 반응 패턴으로부터 공동 추정합니다. 같은 수를 맞힌 두 학생이 실제로 능력에서 어떻게 다를 수 있을까요?
- IRT는 학습자들을 공통 척도에서 비교하고 개인별 정밀도를 추정하게 합니다. 문항의 난이도와 변별도를 아는 것이 단순히 학생이 그것을 맞혔는지 아는 것보다 왜 더 중요할 수 있을까요?
- 한 연구는 IRT 적합도(person-fit) 통계를 사용해 객관식 검사에서 인간의 응답과 AI가 생성한 응답을 구분하며, AI 응답을 '일탈적(aberrant)'이라고 표시했습니다. 학습을 평가하는 것과 같은 측정 기계가 어떻게 학문적 진실성(academic integrity)을 단속하는 데에도 쓰일 수 있을까요?
- [[research-methods-aied|연구자]]들은 IRT를 사용해 AI가 생성한 시험 문항이 전문가가 작성한 문항과 난이도와 변별도에서 일치하는지를 검증합니다. AI가 '그럴듯해 보이는' 문항을 쓴다면, 왜 피팅된 IRT 모수에 대한 실증적 보정이 여전히 필요할까요?
- AI가 문항 난이도를 예측하고 보정함에 따라, 모델의 난이도 추정이 실제 학생 반응 데이터에 대해 검증되지 않는다면 무엇이 잘못될 수 있을까요?
- IRT는 적응형 검사와 지식 추적에 연결됩니다 — 당신의 응답을 사용해 다음에 무엇을 물을지 선택하는 것. 각 답에서 능력을 추정하는 것이 어떻게 검사를 더 길게가 아니라 더 짧고 정밀하게 만들 수 있을까요?

## 들어가며

IRT는 능력(θ)과 문항 모수(난이도, 변별도, 때로 추측)를 반응 패턴으로부터 공동 추정하며, 원점수를 측정으로 취급하지 않습니다. 이것은 학습자들을 공통 척도에서 비교하고, 문항을 적응적으로 선택하고, 정밀도를 전체가 아닌 개인별로 추정하는 것을 가능하게 합니다.

### IRT가 연구에 나타나는 방식

- **AI가 예측한 난이도:** [[llm-item-difficulty-prediction]]은 언어 모델을 사용해 문항 난이도를 추정하며, 이는 실증적으로 피팅된 IRT 모수에 대해 검증되어야 합니다.
- **심리측정 보정:** [[llm-psychometric-calibration-cdp]]은 AI 생성 응답이 측정 속성을 보존하도록 모델 기반 평가를 IRT 기반 측정에 맞춥니다.
- **지식 추적과 학생 모델링:** IRT는 [[knowledge-tracing]]와 [[student-modeling]] — 학습자 지식을 시간에 따라 추적하는 모델 — 과 밀접한 관련이 있으며, 관찰 가능한 반응으로부터 관찰 불가능한 학습자 상태를 추정한다는 목표를 공유합니다.

- **LLM 로짓에서 읽어내는 IRT 양.** [[huang-interpretable-knowledge-tracing-2026|Huang et al. (2026)]]는 다음 토큰 로짓으로부터 학생 능력 θ = z^GOOD − z^BAD와 튜터 턴 난이도 d = z^HARD − z^EASY를 추출하고, 이를 1PL Rasch 예측기로 결합하여 대화 기반 지식 추적을 해석 가능하게 만듭니다(QATD2k에서 64.29% 정확도, 65.25 AUC).
- **베이지안 계층적 현장 검증:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]]는 사전 검사 기준 문항(anchor items)을 사용해 1,686명의 학생을 공통 θ 척도에 배치하는 베이지안 계층적 2PL IRT 모델을 사용하여, AI가 생성한 문항이 전문가가 작성한 표준화 시험 문항과 난이도와 변별도에서 일치한다는 것을 보여줍니다 — 이는 [[automated-question-generation]]의 검증 중추로서 IRT의 대규모 입증입니다.
- **검사 정보가 정밀도를 국소화합니다.** 2PL 모델로 검증된 20문항 생성형 AI 리터러시 검사(RMSEA = 0.03, CFI = 0.97)는 정보 함수가 θ = −0.8에서 정점을 이루어, 척도 전체에 고르기보다 낮음에서 중간 수준의 리터러시 학습자들에게 가장 정밀했습니다 ([[jin-glat-genai-literacy-assessment|Jin et al. (2025)]]).
- **적합도 통계로 인간과 생성형 AI 응답 구분하기:** [[irt-human-genai-mcq-responses|Strugatski and Alexandron (2026)]]는 IRT 내의 적합도 통계(PFS)를 적용해 객관식 평가에서 인간의 응답과 [[generative-ai]]의 응답을 구분합니다. PFS는 두 개의 실제 맥락([[chemistry-education|화학]] 검사와 국가 시험)에서 생성형 AI 응답을 '일탈적' 응답자로 표시하고, 다른 [[conversational-ai|챗봇]]들이 뚜렷한 반응 패턴(이질적인 '지능'들의 집단)을 만들어낸다는 것을 보여주며, 새로운 생성형 AI 버전일수록 인간과 비슷해진다는 것을 드러냅니다 — 이는 IRT를 고위험 검사에서 [[academic-integrity|진실성]] 선별을 위한 강건한 프레임워크로 자리매김합니다.
- **같은 문항이 LLM에 대해 같은 잠재 구인을 측정하지 않을 수 있습니다.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld and Alexandron (2026)]]는 두 기기에 걸쳐 탐색적 요인 분석과 일치도 매칭으로 인간과 LLM의 요인 구조를 비교했으며, LLM-인간 유사성이 믿을 만하게 인간-인간 기준선 아래에 머물러, 인간에 피팅된 IRT 모수가 자동으로 전이되지 않는다는 것을 보여줍니다.
- **Rasch IRT 모수에 대한 LLM 난이도 추정:** [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]]는 GPT-4o가 Rasch IRT 모델로 보정된 K-5 수학 및 읽기 평가 문항의 난이도를 추정할 수 있는지(N = 5170)를 평가합니다. 영점 표본(shot) 직접 추정 접근은 실제 Rasch 난이도와 중간에서 강한 상관을 보였지만(r = 0.83 수학, r = 0.81 읽기), 학년에 걸쳐 고르지 않았고 K와 1학년에서는 종종 학년 평균 더미 회귀분석기보다 나을 것이 없었는데, 이는 하위 학년 문항 난이도의 범위 제한 때문으로 보입니다. 특성 기반 전략 — LLM이 추출한 인지적·언어적 특성을 트리 기반 모델에 투입하는 것 — 은 직접 추정을 능가했으며(상관 최대 r = 0.87), 학년 수준과 단어 수가 최고 예측 변수였습니다. 이 연구는 LLM 난이도 추정이 실증적으로 피팅된 IRT 모수에 대해 검증되어야 하며, 구조화된 특성 추출이 전체적 영점 판단이 부족한 곳에서 예측을 날카롭게 할 수 있음을 강조합니다.
- **난이도를 예측하는 대신 설명하기.** [[explaining-question-difficulty-natural-language-2026|Cui et al. (2026)]]는 GSM8K(1,319문항), BBH-structured(1,396), WinoGrande(1,267)에 대해 LLM 응답 기록에 1PL Rasch 모델을 피팅했으며, GSM8K와 WinoGrande에는 5,000개 모델, BBH-structured에는 3,811개 모델을 사용했습니다. 그런 다음 LLM에 한 문항이 다른 문항보다 왜 더 어려운지에 대한 자연어 가설을 제안하게 하고, 보류 문항에서 L1 정규화 회귀로 그것들을 선택합니다. 선택된 가설은 보이지 않는 문항에 단독으로 사용될 때 GSM8K에서 R² = 0.373, BBH-structured에서 0.580, WinoGrande에서 0.090에 도달하며, 이는 비교된 방법 중 GSM8K와 WinoGrande에서 최선이고 BBH-structured에서는 두 번째로, 거기서 파인튜닝된 RoBERTa-base가 0.646에 도달합니다. 추가 특성으로서 이것들은 GSM8K의 RoBERTa-base에 +0.11(0.362에서 0.468로), 두 개의 동결된 임베딩 모델에 +0.19와 +0.18을 더합니다. 인과 탐사(causal probe)는 가설을 향하거나 멀어지도록 데이터셋당 50개의 검사 문항을 편집합니다: 난이도 증가 편집은 GSM8K와 BBH-structured에서 평균 정확도를 각각 15.27과 23.88 퍼센트 포인트 낮추고, 난이도 감소 편집은 32.18과 28.52 높입니다. 여기서 난이도는 인간 검사 응시자가 아닌 모델 응답에서 추정되므로, 이것은 LLM 평가 및 심리측정의 결과입니다.
- **응답자를 시뮬레이션하는 것이 자극에 대한 회귀가 할 수 없는 것을 회복할 수 있습니다:** 능력 수준 전반에 걸쳐 학생들의 선택지 선택 확률을 재현하는 파인튜닝된 멀티모달 LLM은 보류 난이도를 r = 0.85로 근사하여, MathBERT(0.68)와 MetaMath(0.75) 회귀 기준선을 넘었고, 추측 모수 c를 0.48로 회복한 반면 변별도 a는 약하게(0.31) 머물렀습니다 ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026)]]).
- **IRT 모수에 대한 배포 전 선별로서의 문항 작성 결함:** [[item-writing-flaws-irt-difficulty-2026|Schmucker and Moore (2026)]]는 문항 작성 결함(IWF) 루브릭 — 학생 데이터가 필요 없는 영역 일반적인 텍스트 평가 — 이 실증적으로 추정된 IRT 난이도와 변별도를 예측하는지를 시험합니다. [[stem-education|STEM]](물리 과학, [[math-education|수학]], 생명/지구 과학)의 **7,126개 객관식 문항**에서 그들은 자동화되고 LLM이 보조한 코딩을 사용하여 IWF 루브릭이 실증적 IRT 모수에 대한 예측 타당성을 갖는다는 것을 보여주며, 자원 집약적인 파일럿 검사를 보완하거나 부분적으로 대체할 수 있는 확장 가능한 배포 전 선별을 제공합니다.
- **선택적 AI 채점을 위한 IRT 기반 위험 필터링:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]]는 AI가 채점한 손글씨 화학 데이터에 2모수 로지스틱 IRT 모델을 피팅하고, AI 판단을 수용하는 "위험"을 AI의 정규화된 점수와 IRT 예상 신용 획득 확률 사이의 절대 편차(Risk = |s−p|)로 정의합니다. 이 베이지안 기대의 선택된 허용 범위 안의 문항만 수락하는 것은 "놀라운" AI 점수를 [[human-in-the-loop-ai|인간 검토]]를 위해 표시하여, IRT를 순수한 점수 집계 도구에서 [[automated-assessment]]를 위한 운영적 수용/이관 메커니즘으로 전환합니다 — 이는 더 단순한 부분 신용 기준과 유사한 인간 채점 정렬을 달성하면서 인간 작업 부담은 더 낮췄으나, 그 논리는 비기술적 독자에게 덜 투명합니다.
- **진단 모델 내부의 보정 계층으로서의 IRT:** PLCD는 연습 수준 반응 위에 IRT에서 영감받은 추측-미끄러짐(guessing-and-slipping) 헤드를 더해, 정확도가 아니라 확률의 질을 개선합니다 — XES3G5M에서 기대 보정 오류가 0.071에서 0.037로 떨어졌습니다 — 이는 IRT를 채점 모델일 뿐 아니라 반응 잡음에 대한 내부 수정으로 만듭니다 ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

- **계속 진화하는 은행을 위한 분할 정복 보정:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]]는 IRT 재보정을 피팅 문제가 아니라 척도(scaling) 문제로 다룹니다. AI 기반 문항 생성과 특성 기반 모수 예측이 은행을 더 크고, 희박하고, 지속적으로 갱신되게 할 때, 갱신마다 전체 반응 이력을 다시 피팅하는 것은 비용이 점점 커집니다; 그들의 *합의 보정(consensus calibration)*은 대신 각 시기를 한 번 보정하고 새로운 시기를 이미 계산된 이전 사후분포들과 결합합니다. 두 가지 특성이 그것을 기존 IRT 분할 정복 작업과 구분합니다: 시기들이 잠재 척도를 공유하지 않으므로 각 시기는 Haebara 기준에 의해(연결 오류를 연결된 사후분포에 담아) *모든 사후분포 추출치에 대해 별도로* 해결하여 기준 척도에 연결되며, 각 시기는 추정된 사전분포를 기여하는 자체적인 계층적 피팅이므로, 사후분포의 단순 곱에서는 그 사전분포를 나누어내고 합의 사전분포를 재설치해야 합니다 — 사전분포가 고정될 때 베이지안 위원회 기계 규칙으로 환원됩니다. Duolingo 영어 시험의 네 분기 시기에 대한 종합 기준에 대해, 사후분포 평균은 r = .998(난이도)과 .991(로그 변별도)에서 일치했고 사후분포 표준편차는 r = .970과 .920에서, 시기별 노출 최하위 3분위에서 가장 큰 약한 과소산포(SD 비율 0.91–0.98)를 남겼습니다. 이것은 AI가 생성한 문항 은행이 만들어내는 제공 조건을 위해 재설계된 IRT 보정입니다.
- **IRT가 도구 검증에 얼마나 드물게 기반을 대는지:** 교사 AI 리터러시 도구에 대한 평가는 IRT의 사용이 아니라 그것의 부재를 정량화합니다. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat (2026)]]는 COSMIN과 Terwee et al. (2007)에서 개작된 의사결정 행렬에 대해 33개의 도구를 채점했습니다; 구조 타당성은 강했으며, CFA, PLS-SEM 또는 IRT 모델링을 통해 24개(72.7%)가 A 등급이었으나, 어느 것도 IRT나 Rasch를 주된 증거로 사용하지 않았고, 측정 불변성이나 문항 기능 차이(DIF) 증거를 보고한 도구는 5개(15.2%)뿐이었습니다. 저자들은 검증된 역량을 보고된 자신감과 분리하기 위해 자기평가와 나란히 IRT와 수행 과제를 주장합니다.
- **연합적 IRT의 인과적 대안.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]]는 IRT와 베이지안 네트워크 학습자 모델이 개입이나 반사실을 표현할 수 없다고 주장하고, 대신 전문가로부터 구조 방정식을 이끌어냅니다; 109명 학생의 적응형 검사 배터리에서 이끌어낸 모델은 예측력이 약간 낮았으나(−277에 대해 −287 시험 로그 우도) 도움에 관한 반사실 질의를 지원했습니다.

### 연결

IRT는 [[educational-measurement]]와 [[assessment-validity]]의 기반이며, [[adaptive-learning]](적응형 문항 선택)과 [[student-modeling]]을 떠받치며, [[psychometrically-aware-ai]](측정 이론에 맞춘 AI 평가)와 [[knowledge-tracing]]에 연결됩니다. 이것은 프로그래밍 평가를 위한 [[llm-difficulty-calibration-programming-exams-2026|LLM 난이도 보정]]에 등장합니다.

## 연결된 개념

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## 연결된 문서

- [[explaining-question-difficulty-natural-language-2026]] — IRT와 인과적 편집을 통한 자연어로의 LLM 문항 난이도 설명 (Cui et al. 2026)
- [[item-writing-flaws-irt-difficulty-2026]] — 문항 작성 결함이 IRT 난이도와 변별도에 미치는 영향 (Schmucker & Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — 학생 역량 평가를 위한 지원 개입의 인과 모델링
- [[assessment-latent-structure-human-llm-2026]] — 평가 도구는 인간과 LLM에 대해 같은 것을 측정하는가? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — AI가 생성한 시험의 대규모 IRT 현장 검증
- [[jin-glat-genai-literacy-assessment]] — GLAT는 IRT/2PL 검증을 사용한다 (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — LLM의 문항 난이도 예측
- [[llm-psychometric-calibration-cdp]] — 심리측정 보정에 LLM 평가를 맞추기
- [[llm-difficulty-calibration-programming-exams-2026]] — 프로그래밍 시험에서의 LLM 난이도 보정
- [[multimodal-item-parameter-estimation-2026]] — 멀티모달 문항 모수 추정
- [[huang-interpretable-knowledge-tracing-2026]] — 해석 가능한 지식 추적
- [[irt-human-genai-mcq-responses]] — 인간과 생성형 AI 객관식 응답을 구분하기 위한 IRT 사용
- [[razavi-powers-item-difficulty-llm-2026]] — LLM과 트리 기반 머신러닝을 사용한 문항 난이도 추정
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — ID 임베딩을 넘어: 인지 진단을 위한 과정 기반 언어 모델링
- [[bayesian-consensus-irt-item-banks-2026]] — 계속 진화하는 IRT 문항 은행의 베이지안 합의 보정 (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — 교사 AI 리터러시 도구에서 IRT/Rasch가 주된 검증 증거로 드물게 사용됨을 보여주는 현장 감사
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI와 인간 튜터링이 동등한 GRE 학습 향상을 낳는다
