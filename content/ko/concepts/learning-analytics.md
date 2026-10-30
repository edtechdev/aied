---
title: 학습 분석
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
translation_of: concepts/learning-analytics
source_updated: "2026-10-28T19:24:33-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **학습 분석** — 학습과 그 맥락을 이해하고 최적화하기 위해 학습자와 그 맥락에 관한 데이터를 측정하고, 수집하고, 분석하고, 보고하는 것입니다. AI는 학습 분석을 서술적 대시보드에서 예측적·처방적 시스템으로 변화시켰습니다.

## 생각해 볼 질문들

- 대부분의 사람은 학습 데이터를 더 많이 모으면 교육이 자동으로 좋아진다고 가정합니다. 이 페이지는 분석이 어떤 개입으로 되먹임될 때에만 의미 있게 된다고 주장합니다. 그렇지 않으면 분석은 학습을 바꾸지 않고 단지 기술하거나 표시할 뿐입니다. 어떤 행동으로도 이어지지 않은 데이터 수집을 어디서 보셨나요?
- 대시보드가 어떤 학생이 '위험에 처했다'고 알려준다고 상상해 보십시오. 그것은 하나의 예측입니다. 교사나 기관이 실제로 수행할 수 있는 진정으로 실행 가능한 지침과 그것을 구분하는 것은 무엇인가요? 이 페이지는 예측만으로는 충분하지 않다고 말합니다.
- 이 페이지는 AI가 학습 분석을 무슨 일이 일어났는지 기술하는 것에서, 무슨 일이 일어날지 예측하는 것, 그리고 다음에 무엇을 할지 처방하는 것으로 옮겼다고 지적합니다. 이 세 세대 중 어느 것을 경험해 보셨으며, 다른 것들에서는 무엇이 부재했나요?
- 한 연구에서 세 개의 다른 AI 모델이 같은 학생 데이터에 대해 뚜렷이 다른 지원 계획을 만들어 냈고, 분석 지표와 권고된 도움 사이의 연결은 대체로 약했습니다. AI의 조언을 액면 그대로 신뢰하는 것에 대해 이것이 무엇을 시사하나요?
- 학습 분석은 프라이버시 긴장 위에 놓여 있습니다. 데이터가 세밀할수록 더 많이 드러나고 — 더 강력한 개입이 가능해집니다. 당신이나 당신의 학생에 관해 무엇이 수집되는지에 대해 어디에 선을 긋겠으며, 누가 그것을 결정해야 하나요?

## 들어가며

### AI 강화 분석

- **예측 분석:** 학습자 상호작용 데이터에 대한 [[machine-learning|머신러닝]]은 결과를 예측합니다 — [[at-risk-students-ml-prediction|위험 식별]]에서 [[knowledge-tracing|지식 상태 추정]]까지.
- **검증은 예측만큼 중요하다.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, and Carvalho (2025)]]는 예측적 지식 상태 모델(BKT, BKT-with-Forgetting, AFM)이 전체 세션 이력에 소급 적합될 때는 정확해 보이지만, 분석이 실제로 배치되는 방식인 **시간 기반 교차 검증** — 이전 세션으로 다음 세션을 예측하는 것 — 하에서는 학습자 성과를 과대추정하고, 간격/망각 역학을 놓치며, 연습 조건의 순서를 뒤바꿀 수 있음을 보여 줍니다. 분석에 대한 경계는 이렇습니다. 소급 적합이 종단 데이터에서의 낮은 전방 예측 타당성을 가릴 수 있으므로, 지표와 대시보드 모형은 워크포워드(walk-forward)로 검증되어야 합니다.
- **추정 뒤에 있는 문항–속성 매핑을 검증하라.** 문항을 속성에 연결하는 Q-행렬은 데이터가 아니라 가정입니다. 분석적 사고 문항 918개 중 14개의 항목이 기각되었고, 수정 후 허구의 지식 상태 패턴이 14.2%에서 3.8%로 줄었습니다 — 따라서 숙달 분석은 예측 적합뿐 아니라 Q-행렬도 감사해야 합니다([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **[[curriculum-design|교육과정]] 고정 예측 분석:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]]는 성과 기반 교육(Outcome-Based Education) 안에서 지식 상태를 추정하며, LMS 상호작용과 성취 데이터에서 강좌 성과를 직접 추적하고, OBE 유사도 매핑(강좌–프로그램 성과 관계)으로 개념 연결을 구조화하며, 기억 보강 네트워크로 성과 간 영향력을 모형화합니다 — 89.81% AUC에 도달해 실시간 대학 공학 데이터에서 DKT, DKVMN, EKT, SimpleKT를 앞섰으나, 범용 ASSISTments 데이터에서는 경쟁력만 있고 우월하지는 않았습니다.
- **행동 가능한 시창을 갖춘 해석 가능한 진전 예측:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]]는 대규모 온라인 [[cs-education|프로그래밍]] 강좌에서 내용-상호작용 로그 특성으로 모듈 수준 학생 진전을 예측하며, 블랙박스 정확도(85–91%)에 맞서는 유리창(glass-box) 의사결정 나무를 사용하여 모듈 마감 7~8일 전까지 "미제출" 이탈 결과를 표시합니다 — 노골적인 위험 표시가 아니라 [[teacher-role|개입]]을 위한 명시적이고 실시간인 시창이며, 동시에 관여-위험, 관여하지만-성공적, 관여하는 고성과자 프로파일의 탐색적 유형론을 제시합니다.
- **기관을 넘는 연합·설명 가능한 위험 모형화(2026).** [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]]는 연합 학습으로 여러 기관을 가상하여 다중 과제(성과 + 이탈) 모형을 훈련함으로써 위험 모형화를 단일 기관 예측 너머로 확장하여, 원시 학생 데이터가 각 기관을 떠나지 않게 합니다. 통제된 이질성(꼬리표 왜곡, 계급 불균형, 시간적 표류, 구조적 결측) 아래에서도 이 모형은 순위 정확도(OULAD AUC 0.918)와 구조적으로 안정한 특성 중요도 순위를 보존하지만, 확률적 보정은 표류합니다 — 순위 성과와 확률 신뢰도의 분리가 일어납니다. 조기 경보 시스템에게 이것은 임계값 기반 개입에 기관별 보정이 필요할 수 있다는 경고이자, 분석을 변별력, 보정, 강건성, 설명 가능성으로 동시에 평가해야 한다는 논증입니다.
- **합성 데이터 검증은 프라이버시 보존 분석의 전제 조건이다.** 네 개의 연간 학습 습관 코호트(18주에 걸쳐 학습자 117–120명)의 합성 버전에 대한 구조적 점검은 네 코호트 중 두 곳에서 분할 기술자가 가깝게 일치했으나, 주 간 변동은 예외 없이 2.6~4.9배 낮았고(실제 코호트의 0.399–0.539 대비 변동 계수 0.086–0.152), 25건의 검증 요청 가운데 합성 파일럿 데이터에서 도달한 발견의 36%만이 실제 데이터에서 확인되었습니다([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).
- **완료율은 참여의 붕괴를 감출 수 있습니다.** 집단 무작위 배정된 [[higher-ed|대학]] 시험에서 강좌에 통합된 [[intelligent-tutoring|AI 튜터]]는 과제 제출을 그대로 두었지만 플랫폼 참여는 급격히 떨어졌습니다. 페이지 조회는 0.37 표준편차, 활동일은 0.51만큼 줄었습니다. 따라서 중요했던 분석 신호는 평평하게 유지된 완료 지표가 아니라 도구가 밀어낸 활동이었습니다([[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]]).
- **참여 분석:** [[student-engagement|참여 측정]]과 [[engagement-intensity-learner-modeling|강도 모형화]]는 학생이 AI 시스템과 어떻게 상호작용하는지를 정량화합니다.
- **피드백 분석:** [[teaching-feedback-classification-benchmark|피드백 분류]]와 [[ai-feedback-quality|품질 평가]]는 학생이 받는 피드백을 분석합니다.
- **네트워크 분석:** [[misiejuk-cognitive-offloading-prompting-2026|동시출현 네트워크 분석]]과 [[epistemic-emotions-collaborative-problem-solving|인식론적 네트워크 분석]]은 상호작용 양상을 드러냅니다.
- **프라이버시 긴장:** 분석이 더 세밀해지고 AI 기반이 될수록 [[privacy]] 우려도 커집니다.
- **학생 데이터를 위한 거버넌스 검토 프레임워크.** LEAGUE는 여섯 기둥 — Lawfulness, Equity, Agency, Governance, Utility, Ethics by Design — 을 제안하며, FERPA와 GDPR 준수를 바닥으로 삼고 모형이 표류함에 따라 정기적 재평가를 권고합니다([[league-ethical-governance-student-data-2026|Varadaraju & Vijayakumar (2026)]]).

**강좌의 동시성을 모형화하라, 배열만이 아니라.** TRACE는 한 학기의 모든 강좌에 같은 위치 부여(positional encoding)를 주어, 강좌와 성적을 함께 예측하면 성적 예측 오차가 0.1339 MAE로 줄어듭니다 — 성적 전용 트랜스포머 대비 46.4% 감소 — 10년의 기관 데이터에서입니다([[trace-course-grade-prediction-2026|Savala (2026)]]).

### 학습 분석 주기

학습 분석은 전형적으로, 학습자 활동이 데이터를 만들어내고 그것이 측정치와 지표로 처리되며, 다시 **개입**으로 번역되고, 그 개입이 학습자 활동으로 되먹임되어 고리를 닫는 주기로 규정됩니다. 개입 단계야말로 분석을 단순한 감시나 예측과 구분하는 것입니다. 그것이 없으면 분석은 기술하고 표시할 뿐 학습을 결코 바꾸지 않습니다. 이 주기는 AI 도구(대시보드, 피드백 생성기, 처방적 추천기)가 파이프라인의 어디에 놓이고 어느 단계를 자동화하는지를 이해하는 구성 틀입니다.

학습자용 대시보드는 그 도달력만큼만 좋습니다. 홍콩 9학년 쓰기 연구에서 프롬프트 분류기는 macro F1 0.757에 도달했고, 46명의 학생 중 약 3분의 1이 생성 AI 활용 대시보드 세 개를 열었으며, 베끼기와 학습 지향적 [[prompt-engineering|프롬프팅]]에서 집단 차이는 신뢰할 만하지 않았습니다([[learning-analytics-genai-secondary-writing-2026|Fong et al. (2026)]]).

[[qualitative-research|질적]] 데이터의 빈도 부호화는 진입점이지 판결이 아닙니다. 10명 참가자 연구에서 일부 교수는 빈도 부호화를 생산적인 진입 방법으로 읽은 반면, 다른 이들은 드물지만 결정적인 응답을 가린다고 경고했으므로, 설계는 모든 집계 보기를 학생의 원문 텍스트에 다시 연결해 둡니다([[wordstream-glass-learning-analytics|Nguyen et al. (2026)]]).

### 기술에서 개입으로
- **증거 기반은 아직 개입 증거가 아닙니다.** 학생, 학문 분야, 교육자, 기관 수준에 걸친 네 연구를 종합하여 [[learning-analytics-genai-learning-design|Rienties, Divjak, Law (2026)]]은 이 분야가 횡단면, [[self-report-measures|자기보고]], 담화 기반, 전문가 판단 설계에 지배되어 있음을 발견하고, 인과 기제와 더 장기적이고 분포적인 결과를 검증하는 개입 연구를 촉구합니다.

학습 분석은 지식베이스에서 세 세대를 거쳐 진화했습니다. 서술적(무슨 일이 일어났나?), 예측적(무슨 일이 일어날까?), 처방적(우리가 무엇을 해야 하나?). AI는 처방적 층위, 즉 [[feedback|교수적 개입]]을 직접 촉발하는 분석을 가능하게 합니다. 핵심 전선은 **실행 가능성 격차**입니다. [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel & Laforge 2026)]]는 예측만으로는 의사결정 지원에 불충분하며, 반사실적 회피(counterfactual recourse)가 권고가 의미적으로 실현 가능하고 기계가 검증 가능할 때에만 운영상 의미 있게 된다고 보여 줍니다 — 단순히 모형 타당한 것이 아니라 시간, 예산, 불변성, 가용성에 의해 제약되고 SHACL 검증을 거친다는 것입니다. 이는 이 분야를 위험 점수 너머로, 기관이 실제로 집행할 수 있는 권고로 옮기며, [[human-in-the-loop-ai|인간 감독]]을 보존합니다.

처방적 층위의 직접적 실증 검증은 [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]에서 나옵니다. 이들은 세 개의 LLM에게 4,500개의 [[simulating-students|합성 학생]] 시나리오에 대해 지원 계획을 권고하게 했습니다.

분석이 교실에 도달하는 방식에 대한 상호적이고 교사 중심의 검증은 [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]]에서 나옵니다. 이들은 두 개의 혼합형 맥락에서 ML 도출 [[self-regulated-learning]] 프로파일을 교사에게 전달하는 학습 분석 대시보드(DashED)를 설계했습니다. 이들의 100명 교사 연구는 분석의 *표현* 자체가 행동의 장애물임을 보여 줍니다. 교사들은 더 복잡한 설계(예: 히트맵)가 더 풍부한 통찰을 줄 때에도 더 단순하고 전통적인 차트(막대그래프, 원그래프)를 체계적으로 선호했으며, 더 높은 [[visualization|시각화 리터러시]]는 더 깊고 상세한 해석(예: 시계열 데이터에서 추세를 더 많이 지목하는 교사)을 예측했습니다. 집단 비교에서 교사는 병치보다 중첩을, 명시적 차이 부호화보다 전체 정보 플롯을 선호했습니다. 교사가 제안한 행동은 표현된 내용과 플롯 유형보다는 그들의 [[teacher-role]] 수준에 의해 형성되었습니다 — 대학 교사는 주간 시험과 강좌 수준 적응을, 직업 훈련 교사는 직접적이고 개별화된 코칭을 제안했습니다 — 이는 처방 단계가 기저 모형만큼이나 분석이 어떻게 시각화되고 맥락화되는지에 의존함을 보여 줍니다. 이들의 발견은 경고적입니다. LA 지표와 권고된 지원 사이의 상관은 대체로 약했고, 같은 학생에 대해 모형 간 권고가 뚜렷히 갈렸으며, 지원은 가장 필요한 사람과 무관하게 자주 배분되었습니다. 저자들은 현재의 LLM이 **대규모 학생 지원을 위한 처방적 모형으로서 아직 신뢰할 수 없다**고 결론짓고, 처방 단계가 여전히 기성품 자동화가 아니라 검증, [[llm-training-and-fine-tuning|미세 조정]], 인간 감독을 요구한다고 뒷받침합니다.

점수 다음 단계 — 누가 지원을 받으며, 그것이 필요한 곳에 배분되었는지 여부 — 는 [[student-support-and-success|학생 지원과 성공]]에 속하며, 이 페이지의 처방적 층위가 공급하는 외연, 의뢰, 배분 증거를 담습니다.

정직성 결과가 같은 예측 층위에 들어옵니다. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]]는 처음 8주의 [[video-education|Moodle 및 비디오 플레이어]] 추적으로부터 AI 보조 부정행위 위험을 예측하여 로지스틱 회귀로 AUC 0.763에 도달하고, 이 신호가 시험 중이 아니라 그 전에 도착하기 때문에 사용 가능하다고 주장합니다.
분석 자체의 *해석*을 겨냥하는 상호적 연구도 있습니다. [[factria-responsible-institutional-analytics-2026|Marques et al. (2026)]]의 FACTRIA 프레임워크는 지표 뒤에 놓인 편향 요인을 파이프라인, 기관, 강좌, 인구학적으로 정리하며, 성찰 촉진 챗봇은 사례당 11명의 이해관계자가 저울질한 하위 요인을 1.41에서 3.45로 높여(d = 2.15), 직접적 읽기에서 조건부적 읽기로 옮겼습니다.

### 방법과 네트워크 분석

네트워크 방법은 학습 분석의 핵심입니다. [[network-analysis|전이 네트워크 분석(TNA)]]은 학습자 행동의 시간적 연쇄를 모형화하고(예: [[conversational-ai|챗봇]]이 뒷받침하는 쓰기에서의 수정과 대화 고리), [[network-analysis|인식론적 네트워크 분석(ENA)]]은 활동 전반에 걸쳐 부호/구성 개념이 어떻게 동시출현하는지를 지도화합니다 — 둘은 학습의 *과정*과 학습자-[[student-ai-interaction|AI 상호작용]]을 산출물만이 아니라 그 과정으로 드러냅니다.([[penny-transition-network-analysis-efl-writing-2026]])([[tracing-genai-literacy-interaction-patterns]])

- **자기주도 행동의 연쇄 + 마르코프 사슬 분석.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]]는 VERA에서 822개의 생태 모형을 만든 온라인 학습자 315명의 클릭스트림에 활동 연쇄 분석, 위계적 군집화, 마르코프 사슬 모형을 결합하여, 아홉 개의 세밀하고 전이 기반 행동 군집을 세 가지 더 넓은 패턴(관찰, 구성, 탐색)으로 정제했습니다. 이들의 작업은 연쇄 분석을 마르코프 사슬 모형화와 결합하는 것이 인구학적·맥락적 데이터가 완전히 부재하는 상황에서도 비구조적이고 [[self-directed-learning|자기주도]]적인 과제에서 의미 있는 행동을 발견할 수 있음을 보여 줍니다.
- **LA와 생성 AI는 학습 설계를 다르게 형성한다(2026).** [[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]는 11개의 교수자 포커스 그룹에 ENA를 사용해 학습 분석과 [[generative-ai]]가 [[learning-design]] 의사결정에 어떻게 정보를 제공하는지를 비교했습니다. LA 논의는 맥락 정보, 강좌 수준 설계, 창의적 [[problem-solving]]에 집중했고(참여 진단과 지원 표적화를 위한 LA), 생성 AI 논의는 [[assessment|평가 설계]]와 학생 [[self-determination-theory|자기결정]]을 위한 설계에 집중했습니다(아이디어 발상과 평가 개발을 위한 생성 AI). 맥락과 [[creativity]]는 양쪽 모두에서 중심이었습니다 — 분석이 오직 [[pedagogy|교수법]]적 맥락과 교수자 자율성 안에서만 설계에 정보를 제공한다는 상기입니다.
- **사회적 구인에서는 융합보다 대화가 낫고, 최선의 원천은 구인마다 다릅니다.** 양식을 최대화하기보다, 협력적 모델링 구간에서 다섯 가지 피처 구성을 비교한 LAK26 연구는 텍스트만 사용한 임베딩이 전체적으로 가장 강했고(평균 ROC AUC 0.650, 95% CI 0.615~0.685), 텍스트+로그(0.613)와 맥락 창을 더한 텍스트+로그(0.623)보다 앞섰습니다. 로그는 단독으로 0.526으로 사회적 구인에서는 우연 수준에 가까웠지만, 성찰 탐지(0.5862)를 개선한 유일한 원천이었고, 계획은 환경 흔적이 아니라 주변의 대화에 의존했습니다. 피처 선택은 예산 결정이 아니라 구인에 관한 주장입니다([[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang et al., 2026]]).
- **행동 흔적은 인지 상태의 측정이 아니다 — 특수한 필요를 지닌 학습자의 경우 더욱.** [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026|Vasileiou et al. (2026)]]는 상호작용 흔적(과제 소요 시간, 반복적 오류, [[help-seeking|도움 요청]], 불규칙한 진전)이 교사가 학습자가 지원이 필요한 지점을 찾는 데는 도움이 되지만, 내적 상태의 투명한 측정은 아니라고 경고합니다. 느린 응답은 숙고하는 사고, 언어 처리, 주의 분산, 접근 불가능한 설계, 또는 기술적 어려움을 반영할 수 있습니다. "알고리즘은 행동 자료만으로 집행 기능의 결손이나 진단적 상태를 추론해서는 안 됩니다" — 분석은 전문적 평가와 학습자와의 대화 안의 하나의 정보 출처로서 방어 가능합니다.
- **설계 분석: 추적이 아니라 계획된 활동 연쇄를 채굴한다(2026).** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec and Horvat (2026)]]는 개방 학습 설계 도구에 계획된 554개 강좌에 걸친 교수·학습 활동 29,064개의 *설계된* 연쇄에 마르코프 사슬과 연쇄 패턴 채굴을 적용했습니다. 전이 행렬은 평가에서 토론으로의 전이(0.332)에서 최고점을 찍었고, 자기 전이가 연습(0.317)과 습득(0.292)을 지배했으며, 가장 강한 연속 규칙은 습득에서 평가로, 평가에서 연습으로, 연습에서 연습으로였습니다(신뢰도 0.743, 향상도 1.449). 가장 빈번한 4단 경로는 습득, 연습, 연습, 평가(120회 출현)였습니다. 토론과 평가는 가장 도달 가능한 유형이었고 생산은 가장 멀고 산발적이었습니다. 이 연구는 학습 분석이 LMS 추적으로 시작할 필요가 없음을 상기시킵니다. 설계 시점 데이터는 학생이 도착하기 전에 강좌의 교수법적 문법을 드러낼 수 있습니다. 다만 저자들은 이것이 뒤집힌 학습, 탐구 기반, [[project-based-learning|프로젝트 기반]] 설계와 닮았다는 것이 의도의 증거는 아니라고 강조합니다.
- **자기 설명하는 증류 LLM(2026):** 2단계 파이프라인이 블랙박스 학습 분석 추정기와 그 사후 해석을 개별 수준 추정과 자연어 설명을 함께 내놓는 작은 개방 가중치 [[llm]]으로 증류합니다. 충실도 우선 감사는 서술이 그것이 설명하는 속성과 일치하는지를 평가하며, [[simulation]]은 신탁 멘토와 함께 사실상 무손실 회복(r > .90)을 보여 주어, 분석을 위한 더 투명하고 배치 가능한 경로를 제공합니다([[distilling-self-explaining-lm-learning-analytics-2026]]).
- **LA 기반 교육 개입의 가능 요인(2026).** [[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić (2026)]]는 Delphi + AHP + SNAP으로 신뢰할 만한 LA 기반 교육 개입의 일곱 가지 가능 요인을 밝히고 우선순위를 매깁니다. [[governance|기관]] 전략적 방향, 교수법적 및 기타 [[research-methods-aied|연구]] 기반, 이용 가능한 자원, 교수법 지원, 윤리와 데이터 거버넌스, 이해관계자 참여, 품질 보증이 그것입니다. 기관 전략적 방향이 가장 높은 순위를(그리고 다른 요인에 대한 가장 큰 영향력을) 차지했고, 이용 가능한 자원이 두 번째였습니다. [[trust|신뢰성]](윤리 준수, 투명·편향 없는 알고리즘, 교수법적 타당성)은 LA 기반 개입이 의미 있기 위한 전제 조건으로 규정됩니다.
- **LLM 상호작용 깊이는 과제 품질은 예측하지만 회상은 예측하지 않는다(2026).** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]는 차례 수준 LLM 대화 계측(깊이/양/속도)을 [[learning-gains|학습 성과]]에 연결합니다. 설명 추구의 "깊이"는 독립적으로 채점된 과제 품질을 예측했으나(β = 6.27) 즉각 회상은 예측하지 않았습니다 — 정교화 주도 이해와 인출 주도 공고화 사이의 분리로, LA에서 [[llm]] 상호작용이 어떻게 측정되고 평가되는지에 시사하는 바가 있습니다.


- **공유되는 상호작용 단위가 부재하다.** 33개 연구의 46개 분류 전반에 공유되는 메타 특성이 없어, 유사한 꼬리표가 다른 현상을 가리키므로, 이 검토는 *상호작용 에피소드*(목표 지향적이고 경계 지어진 교환)를 대화와 기술 습득의 상관을 측정하는 단위로 제안합니다([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).
- **학습 분석을 위한 협력적 담화의 시뮬레이션.** [[llm-agents-collaborative-problem-solving-simulation-2026|Fang (2026)]]는 미세 조정된 참가자 특정 LLM 에이전트를 사용해 협력적 문제 해결 대화를 재현하며, 인식론적 네트워크 분석(ENA 거리 0.17, 순열 p = 0.65)으로 검증했습니다. 이 접근은 학습 분석 연구자에게 새로운 인간 데이터를 수집하지 않고 상호작용 역학, 차례 교환, 주제적 부호 궤적을 연구할 수 있는 확장 가능한 방법을 제공합니다.
- **개방적이고 재현 가능한 데이터, 그리고 추적 대비 준비된 분석.** [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]]는 협력적 프로그래밍에서 상호작용과 참여 균형을 분석하기 위한 추적 대비 준비된 스키마를 갖춘 합성 [[benchmark]]를 공개합니다(N=540; 세션 360건; 에피소드 1,440건). 로그와 추적 데이터는 이 문헌에서 [[self-report-measures|자기보고]]의 자연스러운 균형추입니다. 같은 구성 개념이 종종 두 번 측정되는데, 한 번은 물어보고 한 번은 관찰하며, 둘이 항상 일치하지는 않습니다. 별도로, SHAP 분석을 갖춘 탐색적 ML 프레임워크는 대학생 사이에서 의도된 학문적 ChatGPT 사용과 가장 연관된 학습 관련 구성 개념을 밝히며 [[explainable-ai|해석 가능성]]을 우선했습니다([[determinants-chatgpt-use-higher-education-2026]]).
- **재사용 가능한 분석 기반 시설, 기관 내에서만 검증됨(2026).** [[a4l-analytics-pipeline|Bai et al. (2026)]]는 코드가 아니라 구성 값을 바꾸어 Georgia Tech의 AI 조수 세 편에 관한 발표된 발견을 재현했으나, 이 주장은 기존 단일 기관 데이터셋의 재분석에 기대고 있으며, 유일한 역량 확장은 내부자에 의해 수행되었습니다.

### 연결

학습 분석은 [[knowledge-tracing]](핵심 분석), [[formative-assessment]](분석 기반 평가), [[student-modeling]](분석이 채우는 학습자 표상), [[privacy]]([[ethics|윤리]]적 제약), 그리고 [[edtech-platform]](분석이 배치되는 곳)과 연결됩니다. 처방적 분석이 점점 더 [[simulating-students|시뮬레이션된 학습자]] — 통제된 시험에서 실제 코호트를 대신하는 합성 학생 집단 — 에서 평가되므로, 학습 분석은 학생 시뮬레이션과도 연결됩니다.

- **AI 분석을 교실 담화로 바꾸는 것 자체가 교사의 기술입니다.** 네 개의 중등 수학 수업에서 한 교사의 47회 전학급 조율은 학생들의 정당화를 선택하고 배열하여 대시보드 산출물을 집단적 논증으로 전환했고, 연구는 네 가지 반복 유형을 명명합니다([[ai-integrated-math-argumentation-teacher-noticing-2026|Lee, Park, Lee (2026)]]).

- **대시보드가 가시화하는 것이 교사가 행동하는 것을 결정한다.** [[ai-supported-lecturer-decision-making-2026|Köroğlu et al. (2026)]]는 27개의 실증 연구(2016–2025)를 검토하고 AI 지원 강사 의사결정의 사회기술적 분류를 여덟 가지 결정 유형에 걸쳐 구축했습니다. 교수, 교육과정, 평가, 피드백, 학습 환경, 정서, 행정, 윤리입니다. 학습 분석 대시보드가 가장 빈번히 보고된 시스템이었고, 부호화는 행동 텍스트와 로그 데이터가 정보를 줄 수 있는 교수, 피드백, 평가 결정에 지원이 집중되어 있음을 보여 주며, 정서, 윤리, 교육과정, 학습 환경 결정은 거의 지원되지 않았습니다. 저자들은 이것을 능력 한계가 아니라 주의 효과로 읽습니다. 시스템이 행동적 학생 데이터를 가시화하고 행동 가능하게 만들었기 때문에, 동기, [[metacognition]], 정서, 환경에 관한 우려가 데이터가 강사를 고려하도록 초대하는 것의 바깥에 놓였기 때문입니다.

과정 수준 계측은 서술적 층위의 한 단계 아래입니다. [[pulla-parsons-problem-tool-2026|Prol et al. (2026)]]은 [[open-source]] 파슨스 문제 플랫폼을 확장하여 모든 블록 배치, 제거, 제출을 시간순 추적으로 기록하고, 각 제출을 블록별 정답 채색과 시도 이력과 짝지으며, 선택적으로 추로를 반복되는 어려움 패턴에 꼬리표를 붙이는 [[llm]] 파이프라인에 통과시켜 교수자의 검토용으로 냅니다. 고학년 Java 소프트웨어 설계 강좌의 학생 68명과 입문 Python 강좌의 36명에 걸친 분석은 같은 세 가지 어려움을 표면화했습니다. 잘못된 예외 유형 선택, `return`을 `throw`로 대체, 잘못된 제어 흐름 배열. 이들은 정답도와 시도 수로는 드러낼 수 없는 것들로, 그것들은 배열이 옳았는지가 아니라 *과정이 어떠했는지*에 답하기 때문입니다. AI는 학생의 채점자가 아니라 [[teacher-role|교수자]]를 위한 해석자로 작동하며, 그 산출물은 성적이 아니라 학급의 어려움에 관한 검토 가능한 가설로 규정됩니다.

- **학습 시스템의 벽: 로그 데이터는 플랫폼을 가로질러 일반화되지 않는다.** MATHia, i-Ready, IXL은 "시도"나 "힌트" 같은 기본 구성 개념조차 제각각 정의하므로, 모형은 이들 사이에서 전이할 수 없습니다. 진행 중인 한 대응은 비디오 쪽에서 이 문제를 공략합니다. Gemini 파이프라인이 튜터링 화면 녹화를 원본 MATHia 로그와 정렬된 단일 각본 전사로 증류합니다. 비디오가 어떤 단일 스트림도 하지 못하는 방식으로 회복하는 것: 화이트보드 [[scaffolding|비계]], 외부 도구에서의 조용한 계산기 작업, 그리고 원본 로그가 "무활동"으로 축소하는 화면 밖 맥락입니다. 시간 고정, 시계 표류, 플랫폼 사건과 다른 학습 과정의 분리에는 미해결 과제가 남아 있습니다.([[thomas-breaking-learning-system-wall-2026]])
- **상호작용 로그는 상수 기준선에 질 수 있습니다.** 16,851건의 LLM 튜터 교환에서 뽑은 학기 수준 피처는 과제 점수의 중앙값 예측기를 0.114점 앞섰고, 그 구간은 영을 가로질렀으며, 오차의 62.1%가 최저 사분위에 있었습니다([[llm-tutoring-interaction-predictive-value-2026|Dong et al. (2026)]]).

## 흔한 오해

- **"지식 상태 추정은 데이터에서 타당성을 물려받는다."** **문항을 속성에 연결하는 Q-행렬은 데이터가 아니라 가정입니다.** **분석한 918개 문항 가운데 14개**에서 항목이 기각되었다는 것은 매핑 자체에 판정이 필요했음을 뜻합니다. 매핑을 검증하는 일은 형식이 아니라 하나의 단계입니다.
- **"분석에는 클릭스트림 추적이 필요하다."** 성과 기반 교육 안에서 지식 상태는 **LMS 상호작용과 성취 데이터에서 교과 성과를 직접 추적하여** 추정할 수 있으며, OBE 친화도 매핑이 신호를 공급합니다. 즉 기관의 기록이 신호원이 됩니다.
- **"행동 창이 없는 예측은 유용하다."** 진전 예측은 **해석 가능하고 행동 창과 짝지어질 때** 가장 쓸모 있습니다. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries, Koprinska (2025)]]는 모듈 수준의 결과를 예측하며, 이는 날것의 점수와 달리 조언자가 행동할 수 있는 형태입니다.

## 연결된 개념
- [[explainable-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — 예측이 공급하는 지원 측면: 의뢰, 배분, 그리고 그것이 움직이거나 움직이지 않는 결과

## 연결된 문서
- [[factria-responsible-institutional-analytics-2026]] — 책임 있는 기관 분석: AI의 지원으로 편향 해석하기

- [[ai-supported-lecturer-decision-making-2026]] — 고등교육에서 AI가 지원하는 강의자 의사결정
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — 프라이버시를 보존하는 학업 위험 모형화를 위한 연합형 설명 가능 학습 분석 (Villegas-Ch et al. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — 학생이 무엇을 묻는지가 중요함: LLM 상호작용 깊이, 과업의 질, 즉각적 회상 (Tsiligkiris 2026)
- [[learning-analytics-to-educational-interventions-2026]] — 학습 분석에서 교육 개입으로: 신뢰할 수 있는 LA 기반 개입의 가능 조건 (Svetec, Divjak & Kadoić 2026)
- [[claassen-learning-analytics-genai-learning-design-2026]] — 학습 설계 의사결정에서의 학습 분석과 생성형 AI
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — 학생 위험 예측에서 SC2R로: 반사실적 구제 수단
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 맞춤형 학습 경로를 위한 베이지안 인지 진단
- [[distilling-self-explaining-lm-learning-analytics-2026]] — 학습 분석을 위한 자기 설명 언어 모형 증류
- [[lopez-pernas-llm-appropriate-student-support-2026]] — AI가 다양한 학생 유형에 적절한 지원을 제공할 수 있는가? 대규모 평가
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — 협력적 문제 해결 대화를 재현하는 참여자별 미세 조정 LLM 에이전트 (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — 다중 에이전트 튜터링과 참여 균형 협업을 위한 ASTRA 합성 벤치마크
- [[determinants-chatgpt-use-higher-education-2026]] — 고등교육에서 미래 ChatGPT 사용의 기계학습/SHAP 결정 요인
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — 혼합 수업에서 교사가 이해할 수 있게 만든 기계학습 결과
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 친화도 매핑을 활용한 결과 기반 지식 추적
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — 554개 강좌의 계획된 활동 29,064건에 대한 마르코프 사슬과 패턴 채굴 — 습득이 이끌고 연습을 공고화하는 설계 문법 드러냄
- [[pulla-parsons-problem-tool-2026]] — Pulla: 파슨스 문제에서의 과정 수준 행동 추적과 교수자용 난이도 분석 (Prol et al. 2026)
- [[a4l-analytics-pipeline]]
- [[league-ethical-governance-student-data-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — 생성형 AI와 함께하는 중학생 쓰기를 지원하는 학습 분석 활용
- [[edtech-privacy-deferral-2026]] — "나중에 고치겠습니다": 에듀테크에서의 교육, AI, 그리고 학생 프라이버시 연기의 문제
- [[synthetic-educational-data-structural-fidelity-2026]] — 충실도 지표가 놓치는 것: 합성 교육 데이터에 관한 구조적 점검
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — 학기 초 LMS 기록으로부터 AI 보조 부정행위 위험 예측 (AUC 0.763)
- [[thomas-breaking-learning-system-wall-2026]] — 다중 양상 튜터링 전사를 활용한 학습 시스템 간 장벽 허물기 (Thomas et al. 2026)
- [[ai-integrated-math-argumentation-teacher-noticing-2026]] — AI 분석을 집단적 논증으로 알아차리고 조율하기(Lee, Park & Lee 2026)
- [[liu-course-integrated-ai-tutoring-rct-2026]] — 완료율은 참여의 붕괴를 감출 수 있습니다
