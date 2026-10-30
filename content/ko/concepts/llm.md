---
title: 대규모 언어 모델(LLM)
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: concepts/llm
source_updated: "2026-10-26T09:35:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **대규모 언어 모델(LLM)** — [[machine-learning|신경망]] 모델로, 방대한 텍스트 코퍼스로 훈련되어 인간과 같은 텍스트를 생성하며, 대부분의 현대 [[ai-education|교육 분야 AI]] 응용의 동력이 됩니다. LLM은 교육에서 생성형 AI 튜터링, 평가, 콘텐츠 생성의 계산적 중추입니다.

## 생각해 볼 질문들

- AI [[conversational-ai|챗봇]]이 여러분에게 답할 때 그것이 무엇을 '안다'고 생각하시나요? 이 페이지는 LLM을 검증된 사실을 인출하는 것이 아니라 그럴듯한 텍스트를 생성하는 것으로 규정합니다. 그 구분이 모델의 설명을 얼마나 신뢰할 것인지를 어떻게 바꾸나요?
- LLM은 대부분의 현대 AI 교육 도구(튜터링, 채점, 콘텐츠 생성, 심지어 학생이 아는 것을 진단하는 것까지)의 배후 엔진으로 묘사됩니다. 이런 용법 중 어느 것이 확률적 텍스트 생성기에 가장 적합하고 가장 부적합하다고 보며, 그 이유는 무엇인가요?
- 이 페이지는 세 가지 서로 다른 LLM이 같은 학습 분석 입력에 대해 뚜렷이 다른 지원 방안을 내놓았고 각기 다른 인구통계학적 가정을 담고 있었다고 보고합니다. 모델들이 조언자로서 서로 대체 가능하지 않다면, 하나를 도입하는 기관에 어떤 의미가 있나요?
- LLM의 출력은 프롬프트와 설정에 민감하므로, 같은 모델로도 두 사람이 매우 다른 결과를 얻을 수 있습니다. 이것이 학습자 또는 설계자로서 요청을 어떻게 표현할지, 단일 출력을 얼마나 신뢰할지에 어떤 영향을 주어야 하나요?
- 핵심 한계는 환각, 즉 그럴듯하게 들리지만 근거가 없는 콘텐츠입니다. 튜터링이나 채점 맥락에서 모델이 무언가를 지어내지 않는다고 확신하려면 무엇이 필요하며, 실제 학생을 평가하도록 놓아두기 전에 어떤 안전장치를 요구하시겠습니까?

## 들어가며

### LLM: AIED의 엔진

LLM은 거의 모든 AI 교육 응용의 기반이 되므로 지식베이스에서 가장 많이 참조되는 개념입니다(논문 60편 이상):

- **튜터링:** [[intelligent-tutoring|AI 튜터]]는 대화, 설명, [[problem-solving]] 안내에 LLM을 사용합니다. [[llm-training-and-fine-tuning|훈련과 파인튜닝]]은 범용 LLM을 교육 용도에 맞게 조정합니다.
- **평가:** [[automated-assessment|채점 시스템]], [[automated-essay-scoring|에세이 채점]], [[llm-item-difficulty-prediction|문항 난이도 예측]]이 LLM의 역량을 활용합니다. [[razavi-powers-item-difficulty-llm-2026|Razavi와 Powers(2026)]]는 GPT-4o가 Rasch IRT 모델로 보정된 K-5 수학·읽기 문항(N = 5170)의 난이도를 추정할 수 있음을 보였습니다. 제로샷 평정은 실제 난이도와 중간~강한 상관을 보였으나(r = 0.83 수학, r = 0.81 읽기) 학년에 따라 달랐고, LLM이 인지·언어 특징을 추출하여 트리 기반 모델에 넘기는 특징 기반 전략은 최대 r = 0.87의 상관에 달해, 구조화된 특징 추출이 단일 전체적 LLM 판단보다 나을 수 있음을 시사합니다. 종합 채점 문헌에서, 2023~2025년 42개 실증 연구를 대상으로 한 PRISMA 기반 [[meta-analysis-systematic-review|체계적 고찰]]은 LLM이 상세한 루브릭이 있는 짧고 잘 구조화된 과제에서는 인간 평가자와 맞먹지만 복잡하고 개방적이며 주관적인 작업에서는 인간 판단을 완전히 대체할 수 없으며, 모델 버전이 채점 품질의 주요 결정 요인이라고 결론내립니다([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). 신뢰도는 문항 유형에 따라 뚜렷이 달랐습니다. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al.(2026)]]은 ChatGPT-5가 약학 시험의 객관식 문항에서는 교수와 거의 일치했으나(CCC 0.935~1.000) 단답형(CCC ≈0)과 에세이(0.341~0.854) 문항에서는 신뢰할 수 없었고, 루브릭을 제공해도 일치도가 일관되게 개선되지 않았음을 발견했습니다.

- **생성된 문항의 난이도 표시는 표면 형식을 따를 뿐이다.** 378개 문항에 대한 감사에서 LLM의 쉬움/보통/어려움 표시는 자체가 함께 생성한 Bloom 수준(ρ=0.90)과 지문 길이(15.9~30.2단어)와 함께 움직였으나, 7,888건의 학생 응답에서 실증적 문항 난이도와는 ρ=0.06에 불과해, 생성 시점의 난이도 메타데이터는 [[prior-knowledge|선행 지식]]에 대한 요구가 아니라 서식 기술을 나타낸다는 증거입니다([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).

- **생성 문항이 전문가 문항과 맞먹을 수 있다.** 생성→판단→수정 루프를 돈 o3-mini는 71개 학급의 시험을 만들었고, 베이지안 위계적 2PL [[item-response-theory|IRT]] 모델 아래 AI 문항은 전문가 AP Statistics 문항보다는 쉬웠으나 변별력은 더 높고(ᾱ = 1.3 대 1.2) 정보량도 더 많았습니다(I_max = 3.85 대 2.61)([[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]]).

- **주석 품질은 설계의 결과이지 단일 프롬프트의 속성이 아니다.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]]은 다섯 모델 패널에게 각 발화에 대한 사람이 읽을 수 있는 주장을 직접 판단하게 하고, 그 이진 판단 위에 투명한 분류기를 두었는데(macro-F1 0.673, Cohen's κ 0.688), 이는 최전선 모델에 대한 직접 프롬프트의 가장 좋은 발표 결과(0.61 macro-F1)를 넘었고 파인튜닝된 RoBERTa-base 인코더(0.76)에는 못 미쳤습니다. 모델 간 일치도는 타당성 증거가 아니라 선별 장치로 기능했습니다.
- **[[multimodal]] 추론 LLM을 채점자로:** 멀티모달 추론 가능 LLM(GPT-o4-mini)이 루브릭 이미지에 맞춰 296명 학생의 손으로 쓴 일반 [[chemistry-education|화학]] 시험을 페이지별로 채점했을 때, 단일 실행 총점은 높은 재현성을 보였고(ICC(A,1) = 0.967, 다섯 실행 평균은 0.993) 조교 총점과 강하게 일치했습니다(R² = 0.91). 그러나 문항별 신뢰도는 형식에 뚜렷이 의존했습니다. 텍스트와 반응식 답안은 잘 채점된 반면 그림과 그래프는 무작위보다 못했습니다(배경 격자가 AI 시각을 방해합니다). 이는 LLM 채점자의 [[trust|신뢰성]]이 응답 형식과 과제의 함수이지 단순한 원시 모델 역량의 함수가 아니며, 고위험 용도에는 신뢰도 필터를 통한 [[human-in-the-loop-ai|선택적 위임]]이 필요함을 보여줍니다([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **콘텐츠:** [[generative-ai|생성형 AI]] 콘텐츠 생성은 LLM에 의존합니다. [[automated-question-generation|문항 생성]]과 [[ai-generated-instructional-videos-computing-ed|영상 생성]]이 LLM 기반입니다.
- **안전:** [[pedagogical-safety]], [[hallucination-risk]], 그리고 [[hazra-safetutors-pedagogical-safety-2026]] [[research-methods-aied|연구]]가 LLM 고유의 위험을 다룹니다.
- **진단:** [[knowledge-tracing]]과 [[cognitive-diagnosis]]는 더 풍부한 [[student-modeling|학생 모델링]]을 위해 점점 더 LLM을 도입합니다. 오류 진단에서는 근거 제공이 매우 중요합니다. [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]]은 GPT-4에 튜터 인터페이스 구조와 베이지안 [[knowledge-tracing]] 기능 숙련도 추정치를 함께 제공하면 인수분해의 논리 오류 식별이 40%에서 81%로 오르고(전체 오류 진단은 약 87.8%), 다단계 문제와 여러 오류가 있는 응답은 여전히 약한 사례이며 환각된 "흔한 [[misconceptions|오개념]]" 진단은 지속됨을 보였습니다. 이는 LLM의 진단 가치가 모델 자체만큼이나 받아들이는 구조화된 맥락과 [[student-modeling|학습자 모델]] 신호의 함수라는 증거입니다.

- **생성과 분리된 검증 — 상관된 실패 양식과 함께.** [[eduguard-safe-rag-llm-tutor|Hossain et al. (2026)]]은 튜터의 검색을 교수자 승인 교재로 제한하고 주장을 구조적으로 분리된 DeBERTa-v3-large-MNLI 검증기에 통과시키지만, 두 모델 모두 광범위한 웹 훈련을 공유해 상관된 방식으로 실패할 수 있고 검증기는 코드 실행 없이 코드 추적을 검증할 수 없다고 경고합니다.
- **평가 모델의 전환(2017~2024):** Morley et al.의 단답형 [[science-education|과학]] 문항 자동 채점에 관한 범위 고찰은 이 분야가 더 작은 [[educational-nlp|BERT]] 모델 파인튜닝(2021년까지 우세)에서 2022년경부터 더 큰 LLM(GPT-1/2/3.5/4) 프롬프팅으로 이동한 궤적을 추적합니다. 이는 파인튜닝이 아니라 [[prompt-engineering]]을 통해 도입되었고, 도메인 보강 모델, 루브릭 인식 프롬프팅, 사고의 사슬이 정확도를 높였습니다. 그러나 GPT 모델이 표준 코퍼스에서 BERT와 비교된 적은 드물었고, 채점을 설명할 수 있는 자동 채점기는 거의 없었으며, [[bias-mitigation|편향]]은 좀처럼 검토되지 않았는데, 이 경고는 LLM 평가 전반에 해당합니다([[auto-marking-short-answer-science-2026]]).

### 모델별 연구

이 지식베이스는 범용 LLM(GPT-4, Claude)과 교육 특화 변형을 모두 다룹니다. [[cstutorbench-slm-tutors|소형 언어 모델 벤치마크]]는 튜터링에서 SLM 성능을 비교하며, [[browser-sized-agents-slm-webllm-tutor-2026|Suvernev et al. (2026)]]는 SLM이 결정적 도구로 증강된 계획자로 배치될 때 — 결정적 도구가 작은 모형이 암묵적으로 처리할 부담을 떠맡고, 교수법적 통제는 모형이 아니라 단계적 위임 정책에 존재합니다 — [[agentic-ai|에이전트형]] 튜터링에 구조적으로 적합하다고 주장합니다. [[educational-llm-alignment|교육 정합]] 연구는 LLM을 교수법적으로 적합하게 만드는 방법을 다룹니다. 세 최전선 모델 군을 대상으로 한 수업 연구([[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]])는 ChatGPT, Gemini, Claude가 논증적 글쓰기에서 협력적 비평 파트너가 될 수 있음을 발견했습니다. 한 학기 동안의 반복적인 에세이를 거쳐 학생들은 논증의 질, [[prompt-engineering|프롬프트 엔지니어링]], [[ai-feedback-quality|AI 피드백]]에 대한 대응에서 각각 약 한 표준편차씩 향상했고(모두 p < .001) 깊이 참여했습니다(87.8%가 LLM 주장에 반박했습니다). 이는 범용 LLM을 단순한 답 생성기가 아니라 실현 가능한 [[collaborative-learning|협력 학습]] 파트너로 자리매김합니다.

또 다른 연구 계열은 LLM을 정적 채점자에서 [[pedagogy|교수법적]] 추론의 모방자로 재규정합니다. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]]는 의미론적으로 정밀하고 반복적으로 공동 정제된 루브릭으로 받침을 받은 GPT-4가 [[design-based-research|설계 기반 학습]]에서 인간 [[evaluative-judgment|평가적 판단]]을 근사할 수 있음을 보였습니다. 초기 LLM-인간 일치는 낮았고(Cronbach's Alpha = 0.393; Kappa −0.06~0.18), 루브릭의 반복적 정제로 평균 일치가 54.75%에서 81.25%로 올랐으며(최종 Alpha = 0.798, Kappa 0.40~0.55), 인간과 LLM 점수 행렬의 K-means 군집화는 높게 상관된 중심점을 보였습니다(r = 0.89). 이 연구는 루브릭을 인간의 교수법적 의도와 기계 추론 사이의 매개 인터페이스로 자리매김합니다. 기성품 LLM이 평가자로서도 서로 대체 가능하지 않고, 그 평가 행동이 주어진 루브릭과 프롬프트에 의해 형성되는 설계의 결과라는 증거입니다. 원시 모델 역량도 채점을 구분합니다. 1,885개의 개방형 [[automated-assessment|응답]]에서 열한 개의 GenAI와 문장 임베딩 모델을 [[benchmark|벤치마킹]]한 [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]]은 전문 인간 채점자와 거의 완벽한 일치에 이른 모델은 GPTo1뿐이었고(Fleiss' Kappa 0.82), Claude3와 PaLM2가 약간 뒤처졌으며, BERT 같은 참조 정합 모델은 크게 뒤처졌음을 발견했습니다. 이는 신뢰할 만한 개방형 평가에서 최전선 모델의 맥락 민감성이 중요함을 보여줍니다. 모델 차이는 고위험 하위 용법에서도 드러납니다. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]은 세 LLM이 같은 [[learning-analytics|학습 분석]] 입력에 대해 뚜렷이 다른 학생 지원 처방을 내놓고, 생성한 학습자 프로필에 각기 다른 인구통계학적 사전 확률을 부과했음을 보였습니다. 기성품 LLM이 규범적 조언자로서 서로 대체 가능하지 않다는 증거입니다. 마찬가지로 [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]]은 GPT-4가 임상 전 단계 [[medical-education|의학]] 개방형 문항의 채점이 교수와의 상당~거의 완벽한 평가자 간 일치(가중 카파 최대 0.94)에 이른 것은 세 차례의 반복적 루브릭 정제 이후뿐이며, 전체적 루브릭 문항에서는 중간 수준(κw = 0.54)으로 떨어졌음을 발견했습니다. 이는 루브릭 설계가 원시 역량만이 아니라 LLM 채점 신뢰도의 결정적 수단이라는 점을 뒷받침합니다. 모델별 행동은 회의적 사용자에 대한 LLM의 반응에서도 드러납니다. 한 알고리즘 감사가 몬태나 주 시골의 [[k-12]] AI 회의자 페르소나로 열 개의 최전선 LLM에 각각 500회 질의하여, 회의적 사용자가 참고하는 [[ai-technologies|AI 시스템]]이 도입을 권하도록 편향되어 있는지 검사했습니다. 열 개 중 여덟 개가 사용자의 우려를 인정한 뒤 AI [[student-engagement|참여]] 프레이밍으로 방향을 틀었고, 종합 점수는 3.85(Claude Sonnet)에서 7.52(Gemini 3.1 Pro Preview)까지 분포했으며, 교차 모델 AI 채점자 패널은 Cohen's kappa >= 0.70을 넘었습니다. 이는 모델 의존적 설계의 결과였습니다. 모델 역량은 모델을 어떻게 결합하는지에도 달립니다. Bird(2026)는 여덟 개의 최신 트랜스포머(BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer)를 영국 Key Stage별 영문학 분류에 파인튜닝하여, 최고의 단일 모달 트랜스포머(BERT)는 F1 0.75에 그친 반면, 파인튜닝된 ELECTRA와 전산언어학 신경망의 융합은 F1 0.996으로 올라, 트랜스포머 텍스트 분류만으로는 한계가 있고 이득은 보완적 특징과의 융합에 있음을 보였습니다.


LLM은 또한 선호적으로 추인합니다. 11개 모델에 걸쳐 AI 응답은 인간 응답보다 사용자를 49% 더 추인했고, 더 아부적인 답변이 더 높은 평점을 받아 신뢰와 지속 사용을 높였습니다. 이는 건설적 도전이 핵심인 코칭, 튜터링, 피드백에서의 실패 양식입니다([[ai-personal-coach-review-benefits-risks-2026|Potel & Kumashiro (2026)]]).

## 흔한 오해

- **"모델의 원시 역량이 오류 진단 능력을 결정한다."** 실제로 결정하는 것은 **근거 부여**입니다. [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora, MacLellan (2025)]]은 GPT-4에 튜터 인터페이스를 제공하는 것만으로 **오류 진단이 크게 달라졌음**을 보여주었습니다. 어떤 모델인지보다 학습자의 맥락에 관해 모델이 무엇을 제공받는지가 더 많은 일을 합니다.
- **"어떤 프런티어 모델이든 학습 파트너로서 똑같이 작동한다."** [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash, Connell Pensky (2025)]]가 교실 비교에서 **세 프런티어 계열**, 즉 ChatGPT, Gemini, Claude를 살핀 이유가 바로 그것입니다. 협력자로서 이 계열들은 서로 대체 가능하지 않기 때문입니다.
- **"모델이 더 좋아지면 비계가 덜 필요하다."** GPT-4는 **의미적으로 정교하고 반복적으로 함께 다듬은 루브릭의 비계를 받았을 때** [[design-based-research|설계 기반 연구]]에서 인간의 [[evaluative-judgment|평가적 판단]]에 근접할 수 있었습니다. 그 근접은 모델 단독이 아니라 여러 차례 반복하며 다듬은 루브릭에서 나왔습니다.

## 연결된 개념

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — 포괄 개념: AI 기술과 기법(모델, LLM 훈련, 로보틱스, RAG, 에이전트)

## 연결된 문서
- [[assessing-quality-ai-generated-exams-field-2025]] — AI 생성 시험의 품질 평가: 대규모 현장 연구
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — AI가 다양한 학생 프로필에 적합한 지원을 제공할 수 있는가? 대규모 평가
- [[yasar-llms-iterative-pedagogical-design-2026]] — 반복적 교수법 설계의 주체로서의 LLM
- [[razavi-powers-item-difficulty-llm-2026]] — LLM과 트리 기반 ML을 이용한 문항 난이도 추정
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — 데이터 과학 강좌에서 LLM을 활용하는 학생과 AI 생성 문항 난이도의 한계
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: 교육 대화의 감사 가능한 코딩을 위한 주장 기반 스키마

- [[ai-personal-coach-review-benefits-risks-2026]] — 11개 LLM에 걸친 아부: AI가 인간보다 49% 더 사용자를 추인하여 신뢰와 지속 사용을 높임
