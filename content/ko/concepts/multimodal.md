---
connected_resources: [drawsplat]
title: 멀티모달 AI
created: "2026-08-09T07:47:05-04:00"
updated: "2026-09-30T09:59:35-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
translation_of: concepts/multimodal
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **멀티모달 AI** — 텍스트, 이미지, 오디오, 비디오, 구조화된 데이터를 아우르는 여러 양식의 내용을 처리하고, 이해하고, 생성하는 [[ai-technologies|AI 시스템]], 그리고 이 시스템들이 제기하는 교육적 질문들. [[ai-education|교육에서의 AI]]에서 멀티모달 AI는 서로 구별되는 세 가지 역할로 나타납니다. 학습자가 만들고 참여하는 *학습 내용*으로([[multimodal-learning-genai|멀티모달 학습]]), 도표와 그래프를 해석해야 하는 튜터링 시스템의 *능력 경계*로([[syal-multimodal-dialogue-stem-2026|멀티모달 튜터링]]), 그리고 이해를 평가하는 데 쓰이는 *평가 신호*로([[multimodal-item-parameter-estimation-2026|멀티모달 측정]]).

## 생각해 볼 질문들

- 여러분이 말로 설명하는 데 애먹었던 그래프, 힘의 도표, 개요도를 떠올려 보십시오. 그 경험은 이미지가 풍부한 문제를 다루는 텍스트 전용 [[intelligent-tutoring|AI 튜터]]의 한계에 대해 무엇을 시사합니까?
- 한 [[physics-education|물리]] 튜터는 텍스트 기반 문제를 ~96%의 정확도로 답하지만 도표에 의미가 담긴 문제에서는 ~74%로 떨어집니다. 읽기 전에, 이 '멀티모달 간섭'의 원인이 무엇이라고 생각하시며 — 모델을 재학습하지 않는 해법을 떠올릴 수 있습니까?
- 여러분은 아마 AI 도구로 텍스트와 이미지를 모두 생성해 보셨을 것입니다. '[[prompt-engineering|프롬프트로]] 그림을 부탁하는 것'이 텍스트에 프롬프트를 내는 것과 다르다는 것을 발견하셨습니까? 추상적 아이디어를 정밀한 시각 프롬프트로 옮기기 위해 학생들에게 어떤 기술이 필요할까요?
- 멀티모달 AI는 에세이를 채점하고, 오디오 나레이션으로 피드백을 생성하며, 심지어 이미지-텍스트 문항에서 시험 문항 통계를 재구성할 수 있습니다. 텍스트 전용에서 멀티모달 평가 신호로의 전환은 [[bias-mitigation|공정성]]과 타당성에 대해 무엇을 시사(또는 위협)합니까?
- AI 지원이 깊은 [[stem-education|STEM]] 이해를 쌓게 하는 바로 그 도표가 풍부한 문제에서 더 불안정하다는 사실이 학습자 사이에 [[equity-in-ai-education|형평성]] 격차를 만들 수 있다면, 누가 가장 큰 영향을 받을까요?
- 멀티모달 시스템은 포용적 학습을 지원하기 위해 텍스트를 오디오나 시각물로 옮길 수 있지만, 동시에 세밀한 교실 감시를 가능하게 합니다. 도움이 되는 멀티모달 접근과 감시 사이의 선은 어디입니까?

## 들어가며

AI에서 멀티모달성이란 텍스트만이 아니라 서로 다른 표상 양식에 걸쳐 일하는 능력을 뜻합니다. 현대의 [[generative-ai]]와 [[llm]] 시스템은 점점 더 텍스트에 더해 이미지, 오디오, 비디오를 받아들이고 생산하며, 교육을 위한 새로운 가능성과 새로운 위험을 열어갑니다. 의미가 말이 아니라 양식들에 걸쳐 만들어진다고 보는 사회적 기호 이론에 기대어, 멀티모달 AI는 [[teacher-role|교수]], 학습, 평가가 설계되고 검증되는 방식을 바꿉니다.([[multimodal-learning-genai]])

## 교육에서 멀티모달 AI의 세 가지 얼굴

### 1. 멀티모달 학습과 내용 창작

멀티모달 AI는 학습자가 텍스트, 이미지, 오디오, 비디오에 걸친 내용을 생산하고 참여할 수 있게 합니다. 생성형 AI와 함께하는 멀티모달 학습에 관한 교육자 가이드는 이 도구들을 "사이버-사회적" 파트너로 위치 짓습니다. 그것들은 인간의 의미 구성을 보완하지만 — 대체할 수는 없습니다.([[multimodal-learning-genai]])

- **멀티모달 맥락에서의 [[ai-literacy|AI 리터러시]]**는 층을 이룹니다. 멀티모달 플랫폼에 대한 기초적 인식, 출력물의 중급적 공동 창작과 [[critical-thinking|비판적 평가]], 멀티모달 활동과 평가의 고급적 설계입니다.([[multimodal-learning-genai]])
- **멀티모달 프롬프트**는 그 자체로 요구가 큰 인식론적 실천입니다. 이미지뿐 아니라 텍스트에 프롬프트를 내는 학생들은 "텍스트에 내는 프롬프트 리터러시는 그림에 내는 것과 다르다"는 것을 발견합니다. 추상적 의미를 기계가 읽을 수 있는 멀티모달 프롬프트로 옮기는 것은 정밀한 시각 어휘를 요구하고, 시스템의 한계와 편향을 드러냅니다.([[multimodal-prompting-ai-literacy]])
- **멀티모달 평가**는 에세이에서 텍스트, 이미지, 오디오, 비디오를 결합한 결과물로 옮아가며, 교육자들은 학습자 자신의 생산을 대체하기보다 창작과 피드백에 AI로 [[scaffolding|비계]]를 댑니다.([[multimodal-learning-genai]])
- **학습자의 멀티모달 작성을 비판적 사고의 비계로 삼는 것은 상충 관계를 안습니다.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]]는 고학년 초등 학생들에게 서면 이야기를 AI가 생성한 이미지와 짧은 영상으로 바꾸게 한 것이 해석, 분석, 평가, 설명에서 지속적인 향상을 지원했지만 추론에서는 그렇지 않았음을 보여줍니다. 시각물이 이야기의 의미를 명시적으로 만들었기 때문에, 학생들은 텍스트만으로 암묵적 의미를 추론할 필요가 줄었다고 보고했습니다. 추론의 기회를 되살린 것은 멀티모달 도구가 아니라 또래 협력이었습니다. 멀티모달 AI가 의미 구성 파트너로서 지니는 가치는 따라서 차원에 특수하며, 외현화가 우회할 수 있는 추론적·[[self-regulated-learning|자기조절적]] 작업을 의도적으로 되돌려놓는 [[learning-design|교수 설계]]에 달려 있습니다.
- **학습자의 멀티모달 [[writing-education|작성]]을 비판적 AI 리터러시로.** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss et al. (2026)]]는 학생 22명(11학년)이 스스로 고른 AI [[ethics]] 문제에 대해 만든 90초에서 3분 길이의 영상 공익 광고를 분석합니다. 학교가 규제하는 노트북과 전자 "화장실 출입증"을 통한 감시, [[privacy|충분한 정보에 기반한 동의]], 그리고 처벌적 알고리즘적 고발입니다. 움직이는 이미지, 소리, 텍스트, 그리고 학생들 자신의 몸에 걸친 작성을 통해 실현된 [[ai-literacy|비판적 AI 리터러시]]로서 말입니다. 일곱 편의 영상 모두에서 해악은 도구 단독이 아니라 인간-기계의 얽힘에서 비롯되는 것으로 그려졌습니다(의인화된 "AI 스토커"는 일곱 편 중 세 편에서 인간 배우가 연기했습니다). 그리고 18개의 단원 종료 응답 중 15개가 작성을 통해 AI 윤리에 대한 이해가 바뀌었다고 답했습니다. 저자들은 멀티모달 결과물이 비판적 역량을 *보여줄* 뿐 아니라 *전달*한다고 주장합니다. 생산적인 결과물, 성찰, 시민적 담론은 텍스트 전용 리터러시가 구조적으로 놓치는 [[assessment]] 증거로 쓰일 수 있습니다.

### 2. 멀티모달 튜터링과 능력 경계

LLM 기반 튜터가 의미가 그래프, 힘의 도표, 개요도, 또는 표에 담긴 문제를 풀어야 할 때, 그 정확도는 급격히 저하됩니다. 이것이 바로 **멀티모달 간섭 효과**입니다.([[syal-multimodal-dialogue-stem-2026]])

- OpenStax 물리 문제에서 텍스트 전용 정확도 ~96%가 이미지가 풍부한 문제에서는 **~74%**로 떨어지며, 이는 모델 계열 전반에 걸쳐 일관됩니다.([[syal-multimodal-dialogue-stem-2026]])
- **시각 처리 오류** — 그래프나 도표에서 정보를 추출하는 데 실패하는 것 — 가 오류 분류법을 지배하고, 가장 교정 가능한 실패 양식입니다.
- 간단한 구조화된 대화 개입(모델에게 보이는 것을 묘사하게 하고, 물리학을 누설하지 않은 채 오직 *관찰 가능한* 오독만 바로잡게 한 뒤 다시 프롬프트를 내는 것)이 재학습 없이 정확도를 **~95%**로 회복시킵니다.([[syal-multimodal-dialogue-stem-2026]])
- 이것은 **형평성의 문제**입니다. 이미지가 풍부한 문제 — 바로 STEM에서 깊은 개념적 이해를 쌓게 하는 문제들 — 에서 작업하는 학생들은 현재 텍스트 전용 연습을 하는 학생들보다 덜 신뢰할 수 있는 AI 지원을 받고 있습니다.
- **시각 보조물을 읽는 것보다 만드는 것이 더 어렵습니다.** GeoVAD-Bench에서 전문가가 만든 보조 도표를 제공하는 것은 정확도를 높였지만(+3.3에서 +7.0 포인트), 모델이 자신의 보조선을 직접 구성하게 하는 것은 격차를 10.0에서 13.5 포인트 넓혔고, 두 모델은 시각 추론을 전혀 하지 않을 때보다 더 나쁜 점수를 받았습니다([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]).
- **이 경계는 하나의 수준이 아니라 하나의 프로필입니다 — 그리고 예술적 이미지는 모델이 잘 다루는 영역의 바깥에 있습니다.** [[muse-vlm-artistic-image-benchmark-2026|MUSE(Zhu et al., 2026)]]는 1,174점의 의뢰 작품에 걸친 12개 과제로 오픈 및 사유 VLM 30개를 평가하며, 차원 전반에 걸친 능력 폭이 어떤 종합 점수보다 넓다는 것을 보여줍니다. 장면 분류는 거의 성숙하여(30개 모델 중 23개가 75.0 이상, 중앙값 81.0), 감정 탐지는 39.5를 넘지 못하고, 모델이 자신의 증거를 *서술*해야 하는 개방형 과제는 의미 유사도에서 50.90(시각 단서 식별)과 49.18(감정 원인 추론)을 기록합니다. 구성적이고 시점 의존적인 추론이 가장 힘겨워합니다. 정답이 명확한 측면적·수직적 관계를 규정하지 않는 곳에서 모델의 90.0%와 73.3%가 그런 관계가 있다고 단정하고, 43.3%만이 소녀를 깊이 차원에서 올바르게 배치하며, 어떤 모델도 하나의 문항이 지닌 세 차원을 모두 해결하지 못합니다. 실패는 연쇄합니다. 잘못 접지된 인물이 주변의 시각적 의미(나비, 새)에서 만들어진 유창한 정당화로 뒷받침되는데, 이것은 설명이 유능해 보이기에 튜터링에서 가장 위험한 결과입니다. 이미지 기반 [[language-learning|언어 학습]]을 위해 이것은 일반적인 멀티모달 점수를 수입하는 것이 아니라, 한 과목이 실제로 사용하는 이미지에 대해 차원 수준의 검증을 요구하며, 아래에 서술된 접지 점검 지점을 [[situated-learning|상황적]] 예술 내용으로까지 확장할 것을 주장합니다. 그 점검 지점은 추론에 앞서 보이는 것과 그것이 어디 있는지를 묘사하는 것입니다([[muse-vlm-artistic-image-benchmark-2026]]).

실천적인 설계 함의는 멀티모달 튜터링에서의 **시각 접지 점검 지점**입니다. 시스템이 해답을 시도하기 전에 자신이 보는 것을 묘사하는 의도적인 단계로, 학생이나 인간 감독자가 지각 오류를 교정할 기회를 줍니다.([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu et al. (2026)]]는 하나의 사전 제약을 더합니다. 방정식, 그래프, 단위가 보고서에 나타났음에도 처리된 문서에서는 전혀 검색되지 않을 수 있기에, 교수와의 의견 불일치는 추론의 실패가 아니라 추출의 실패일 수 있습니다. 이것이 제출 형식을 평가 설계의 일부로 만듭니다.

### 3. 멀티모달 평가와 측정

멀티모달 AI는 평가의 *내용*과 채점에 쓰이는 *신호*를 모두 넓힙니다.

- **멀티모달 피드백 시스템**은 구조화된 텍스트, 슬라이드 참조, 스트리밍 오디오 나레이션을 통합합니다. 한 연구에서 [[ai-feedback-quality|AI 멀티모달 피드백]]은 학습 면에서는 교육자의 피드백과 맞먹었고, 학생 인식 면에서는 이를 *상당히 능가*했습니다.([[multimodal-ai-feedback-learning]])
- **멀티모달 문항 반응 추정**은 미세조정된 멀티모달 LLM을 사용해 이미지-텍스트 문항에서 예측된 선택지 확률로부터 문항 특성 곡선(IRT / 3PL)을 직접 재구성하며, 멀티모달 AI를 [[educational-measurement]]와 [[item-response-theory]]에 연결합니다.([[multimodal-item-parameter-estimation-2026]])
- **교육용 시각-언어 모델 평가**와 [[mllm-scientific-visualization-literacy|멀티모달 LLM 리터러시]]는 이 분야의 평가 도구를 멀티모달 추론과 [[visualization]]으로 확장합니다.([[drawedumath-vlm-struggling-students-2026]])([[mllm-scientific-visualization-literacy]])
- **손으로 쓴 [[chemistry-education|화학]]에 대한 멀티모달 채점은 형식 의존적 능력 경계를 드러냅니다:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]]는 296명의 손으로 쓴 일반 화학 기말 한 페이지를 루브릭 이미지에 맞춰 멀티모달 추론 LLM으로 페이지별 채점했고, 텍스트 답안과 화학 반응 방정식은 신뢰롭게 채점했으며(정규화된 F1 최고), 도형과 그래프는 *무작위보다 못하게* 채점했습니다 — 배경 격자가 시각적으로 AI의 시각을 산만하게 하고, 과학 도표와 화학 구조는 여전히 해석하기 어렵습니다 — 이는 멀티모달 AI의 시각이 표상이 풍부한 작업에 견고하지 않으며, 도형 문항에 대한 [[human-in-the-loop-ai|인간에게의 위임]]과 함께 배치하는 것이 최선임을 강화합니다([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **구성 인식과 비교 판단은 분리 가능한 기술입니다.** [[cfes-p24-multimodal-slide-auditing-2026|Ma et al. (2026)]]는 멀티미디어 학습 원리 여섯 개를 가역적인 슬라이드 수정과 시각적 등가성 대조군으로 표현하고, 두 모델이 모든 연산, 원리, 수리를 복원했으나(8/8) 심각도 보정은 완전히 실패했다는 사실을 발견합니다(0/8) — 종합 점수는 어느 층이 실패하는지를 감춥니다.
- **공정성 향상은 검증을 통해 존재하게 될 수 있습니다.** 멀티모달 주의 추정기는 시각 전용 기준선을 겨우 근소하게 이겼고, 그것의 성별 표적 MAE-격차 정규화 장치는 검증 격차를 0.02에서 0.005로 줄였으나 보류된 피험자에서는 격차와 최악 집단 오류를 늘렸습니다 — 따라서 배치 전에 하위집단 인식적이고 반복되는 피험자 수준의 검증이 요구됩니다([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).
- **멀티모달 채점은 문항 수준 채점이 뒤처지는 곳에서도 선발 결과를 재현할 수 있습니다.** 손으로 쓴 올림피아드와 대학 페이지 10,364장을 채점하며, 한 LLM은 심사위원 총점과 r = 0.93–0.96으로 일치했고 같은 다섯 학생을 올림피아드 팀에 배치했으나, 부분 일치는 70%에 이르렀습니다. 기록된 채점자가 아니라 제2 독자의 증거입니다([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **도표 생성은 능력의 최전선이지 해결된 것이 아닙니다.** 멀티모달 출력을 채점하는 15,246문항 물리 벤치마크에서 구조화된 물리 도표를 합성하거나 수정하는 것이 답변하는 것보다 더 어웠고, 주요 모델들은 엄격한 숙달의 70% 아래에 머물렀습니다 — 이는 시각적 *생산*이 시각적 *이해*에 뒤처진다는 증거입니다([[omniphys-multimodal-physics-benchmark-2026|Chen et al., 2026]]).

## 언어와 접근 가능한 학습을 위한 멀티모달 AI

멀티모달 시스템은 접근과 [[personalized-learning|개인화]]도 넓힙니다. AI가 안내하는 오디오-[[video-education|비디오 학습]] 도구는 재생 속도를 적응시키고, 멀티모달 영상 요약을 생산하며, 발음 연습을 지원합니다.([[ai-guided-learning-audiovideo-2026]]) 멀티모달 지식 그래프는 교육 과제를 위해 이미지와 텍스트에 걸쳐 추론하고,([[multimodal-knowledge-graph-educational-reasoning]]) 멀티모달 표상은 양식 간에 정보를 옮김으로써(예: 텍스트를 오디오나 시각물로) [[inclusive-learning]]을 개선합니다. 영역 응용에는 손으로 쓴 수학 채점과 진단,([[llm-cognitive-diagnosis-handwritten-math]]) 멀티모달 신호를 쓰는 [[affective-tutoring|정서적 튜터링]],([[multimodal-affective-its-presentation]])([[kar-mathbuddy-affective-math-tutoring-2025]]) 전문 분야에서의 텍스트-이미지 학습,([[nuclear-diffusion-text-to-image-learning-2026]]) 그리고 프라이버시를 의식하는 멀티모달 교실 감시가 포함됩니다.([[privacy-aware-classroom-incident-recognition-2026]]) Bird (2026)는 텍스트 내적인 형태의 멀티모달성을 입증합니다. 미세조정된 ELECTRA 트랜스포머를 전산언어학적 특징 분석과 융합하여 영국 Key Stage에 따라 영어 문학을 분류하는 것입니다. 융합된 모델(F1 0.996)은 모든 단일 양식 기준선을 크게 능가했습니다 — 이는 표상 양식들을 결합하는 것만으로도, 텍스트 안에서라도, 단일 모델 접근을 능가할 수 있다는 증거입니다.

## 도전과 설계 함의

1. **멀티모달 격차를 좁히기.** 멀티모달 튜터링 시스템은 시각 능력이 견고하다고 가정하기보다 시각 접지와 구조화된 대화 비계를 포함해야 합니다.([[syal-multimodal-dialogue-stem-2026]])
2. **멀티모달 프롬프트를 가르칠 수 있는 기술로 대하기.** AI 리터러시 교육과정은 양식 특수적 프롬프트, 양식 간 일관성, 멀티모달 출력의 비판적 평가를 다루어야 합니다.([[multimodal-prompting-ai-literacy]])
3. **인간의 의미 구성을 보존하기.** 멀티모달 AI는 학습자 자신이 양식에 걸쳐 의미를 구성하고 평가하는 것을 증강해야지 대체해서는 안 됩니다.([[multimodal-learning-genai]])
4. **평가를 멀티모달 타당성으로 확장하기.** AI가 멀티모달 결과물을 채점하거나 생성할 때 [[assessment-validity|평가 타당성]], 편향, 신뢰성을 검토해야 합니다.([[multimodal-item-parameter-estimation-2026]])([[ai-ed-evaluation]])
5. **형평성과 프라이버시를 지켜보기.** 이미지가 풍부한 문제에서의 불안정한 지원과 멀티모달 감시의 데이터 요구는 모두 형평성과 프라이버시 함의를 안습니다.([[syal-multimodal-dialogue-stem-2026]])([[privacy-aware-classroom-incident-recognition-2026]])
6. **파이프라인을 내용에 맞추기.** 한 사이버보안 실험 도우미의 멀티모달 LLM은 밀도 높은 시각 슬라이드를 더 잘 다루었고, OCR+LLM 파이프라인은 텍스트 중심 슬라이드에서 현저히 낮은 계산 비용으로 비교 가능한 교수적 가치를 제공했습니다.([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel et al. (2025)]])

## 연결된 개념

- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — 상위 개념: AI 기술과 기법(모델, LLM 훈련, 로봇공학, RAG, 에이전트형)
- [[virtual-and-augmented-reality]] — 학습 채널로서의 제스처, 음성, 공간 입력
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]

## 연결된 문서

- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — AI 윤리에 관한 영상 공익 광고 작성을 비판적 AI 리터러시 교수법으로(Burriss et al. 2026)
- [[student-attention-estimation-fairness-2026]] — 실시간 학생 주의 추정을 위한 공정성을 의식하는 멀티모달 트랜스포머 모델링
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — 손으로 쓴 학생 수학 작업에 대한 VLM 수행(DrawEduMath, Lucy et al. 2026)
- [[multimodal-learning-genai]] — 생성형 AI와 함께하는 멀티모달 학습에 관한 교육자 가이드(MMLD-AI 모델)
- [[syal-multimodal-dialogue-stem-2026]] — 멀티모달 간섭 효과와 STEM에서의 구조화된 대화 회복
- [[multimodal-ai-feedback-learning]] — 멀티모달 AI 피드백이 학습 면에서는 교육자와 맞먹고 인식 면에서는 능가한다
- [[multimodal-prompting-ai-literacy]] — AI 리터러시에서 인식론적 작업으로서의 학생의 멀티모달 프롬프트
- [[multimodal-item-parameter-estimation-2026]] — 멀티모달 LLM으로 IRT 문항 모수 추정하기
- [[ai-guided-learning-audiovideo-2026]] — AI가 안내하는 오디오-비디오 학습 지원
- [[multimodal-knowledge-graph-educational-reasoning]] — 교육 추론을 위한 멀티모달 지식 그래프
- [[mllm-scientific-visualization-literacy]] — 과학 시각화를 위한 멀티모달 LLM 리터러시
- [[multimodal-affective-its-presentation]] — 정서적 지능형 튜터링에서의 멀티모달 신호
- [[kar-mathbuddy-affective-math-tutoring-2025]] — 정서적 멀티모달 수학 튜터링
- [[llm-cognitive-diagnosis-handwritten-math]] — 손으로 쓴 수학의 LLM 인지 진단
- [[nuclear-diffusion-text-to-image-learning-2026]] — 핵공학 교육에서의 텍스트-이미지 학습
- [[privacy-aware-classroom-incident-recognition-2026]] — 프라이버시를 의식하는 멀티모달 교실 감시
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — 사이버보안 교육에서의 멀티모달 OCR 교수
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: 슬라이드 감사를 위한 멀티모달 LLM 벤치마킹
- [[ai-grading-handwritten-physics-2026]] — 손으로 쓴 물리 평가에 대한 AI 채점(올림피아드)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — 초등 저술에서의 멀티모달 AI 작성과 비판적 사고(Lu et al. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — 생성과 정확도를 넘어: 기하 문제 해결을 위한 시각적 연쇄 사고의 진단과 향상
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 1,174점의 작품에 걸친 12개 과제가 보여주는 차원 특수적 프로필으로서의 VLM 능력, 정서적 해석과 시점 의존적 공간 추론에서 가장 약함(Zhu et al. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — 실험 물리 실험 보고서에 대한 AI 지원 평가: 잠재력, 한계, 교수 실천을 위한 지원
