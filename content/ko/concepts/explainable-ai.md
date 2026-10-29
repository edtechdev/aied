---
title: 설명 가능한 AI
created: "2026-09-07T10:15:00-04:00"
updated: "2026-10-29T04:21:31-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent


---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **설명 가능한 AI(XAI) 교육**은 AI 시스템의 결정을 그것의 교육적 이해관계자들에게 읽히게 만드는 것의 설계와 연구입니다. 그 이해관계자는 [[learners]], 교사, [[administrator|관리자]], [[parents-and-families|학부모]], 연구자, [[stakeholders|정책 입안자]]입니다. 이 분야가 고집하는 핵심적 구별은 이것입니다. **학습 주제**를 설명하는 것(왜 어떤 사실이 참인가)은 AI **시스템의 결정**을 설명하는 것(왜 이 학습자에게 이 활동이 배정되었는가, 왜 이 응답이 틀렸다고 채점되었는가, 어떤 증거가 위험 예측을 뒷받침하는가)과 같지 않습니다. 교육은 특유의 설명 가능성 수요를 가집니다. 노이즈가 섞인 학습 데이터, [[metacognition]]과 [[self-regulated-learning]]을 직접 지원할 수 있는 설명, 그리고 근본적으로 다른 유형의 설명을 요구하는 이해관계자가 그것입니다. 실천적인 설계 질문은 단순한 설명의 가용성이 아니라 **설명의 품질**입니다. 기술적으로 존재하지만 읽을 수 없거나, 오도하거나, 대상 청중과 어긋난 설명은 설명이 전혀 없는 것보다 더 큰 해를 끼칠 수 있습니다.

## 생각해 볼 질문들

- [[intelligent-tutoring|AI 튜터]]가 왜 어떤 힌트가 주어졌는지 말해 줄 때, 그것은 *학습 주제*를 설명하는 것입니까, 아니면 *시스템의 결정*을 설명하는 것입니까? 여러분의 교육 AI 사용에서 각각의 사례를 세 가지씩 들어낼 수 있습니까?
- 교육에서 누가 설명을 필요로 합니까 — 그리고 학습자, 교사, 정책 입안자가 *같은 종류*를 필요로 합니까? 각각은 설명을 무엇에 사용할까요?
- AI가 한 학생을 중도 탈락 위험으로 표식합니다. 그것에 대처하기 위해 [[teacher-role|교사]]가 알아야 할 것은 무엇이며, 학생이 알아야 할 것은 무엇입니까? 같은 설명이 양쪽에 모두 적절합니까?
- 이 페이지는 설명의 *가용성*보다 설명의 *품질*이 더 중요하다고 주장합니다. 기술적으로 존재하는 설명이 실패하는 것은 무엇 때문입니까 — 설명이 있었지만 쓸모없었거나, 더 나쁘게 오도적이었던 때를 떠올리실 수 있습니까?
- [[trust-calibration|신뢰]]와 설명은 연결되어 있지만 동일하지 않습니다. 왜 자신감 있고 유창한 설명이 결함 있는 시스템에 대해 *거짓* 자신감을 만들어낼 수 있습니까 — 그리고 그것이 일어나는 것을 어떻게 감지하겠습니까?

## 들어가며

설명 가능한 [[ai-education|AI 교육]]은 교실의 AI 시스템이 블랙박스가 아니어야 한다는 커지는 기대를 명명합니다. AI 교육이 결과적인 결정 — 성적, 위험 표식, [[recommender-systems-and-learning-paths|학습 경로]], 자원 추천 — 에 영향을 미치기 때문에, 이해관계자들은 점점 시스템이 *무엇을* 결론 내렸는지뿐 아니라 *왜* 그런지 알 것을 요구합니다. 교육은 이것을 두 개의 구별되는 질문으로 날카롭게 만듭니다. 배우고 있는 학습 주제를 설명하는 것과, AI 시스템 자신의 의사결정을 설명하는 것입니다. 둘을 혼동하는 것은 실용적 결과를 가진 범주 오류입니다. [[physics-education|물리]] 답안을 완벽히 설명하는 AI는, 왜 *시스템*이 그 학생을 위험으로 순위 매겼는지, 왜 특정 활동을 추천했는지, 왜 응답을 틀렸다고 채점했는지에 대해 학생과 교사에게 아무런 통찰도 주지 않습니다.

## 학습 주제의 설명 대 시스템 결정의 설명

이 분야의 기초적 기여 — [[xai-education-framework|XAI-ED 프레임워크]](Khosravi et al., 2022) — 는 교육이 범용 XAI를 넘어서는 *특유의* 설명 가능성 수요를 가진다고 주장합니다. 그 가운데 으뜸은 두 개의 설명 대상 사이의 구분입니다.

- **학습 주제 설명**은 *콘텐츠*를 분명히 합니다. 왜 어떤 힌트가 [[misconceptions|오개념]]을 다루는가, 왜 답이 틀렸는가, 물리 결과가 원리들로부터 어떻게 따라 나오는가. 이것은 [[scaffolding]], [[feedback]], [[metacognition]]을 지원하는 [[pedagogy|교수학적]] 설명입니다.
- **시스템 결정 설명**은 *모델*을 분명히 합니다. 왜 이 학습자에게 이 활동이 배정되었는가, 왜 시스템이 이 학생을 위험하다고 예측하는가, 지식 추적이나 [[learning-analytics]] 예측을 어떤 증거가 뒷받침하는가. 이것은 [[trust-calibration]], [[bias-mitigation]], 책임을 지원하는 투명성 설명입니다.

이 구별은 그것들이 다른 이해관계자와 다른 목적에 봉사하기 때문에 중요합니다. "왜 이것이 틀렸다고 채점되었나?"라고 답하는 학습자는 대개 *학습 주제* 설명이 필요하고, 위험 표식에 대처할지 결정하는 교사나 편향을 감사하는 정책 입안자는 *시스템 결정* 설명이 필요합니다. 둘을 모두 섬기는 단일한 설명을 설계하는 것은 거의 불가능합니다. 이것이 다중 이해관계자 설계가 XAI-ED의 핵심 주제인 이유입니다.

## 누가 설명을 필요로 하는가: 다중 이해관계자 설계

- **학습자**는 자신의 학습과 자기조절을 지원하는 설명이 필요합니다. 왜 힌트가 주어졌는가, 왜 답이 틀렸다고 채점되었는가, 왜 이 자원이 추천되는가([[self-regulated-learning]] 지원). [[student-perspectives-ai-writing-grading-2026|학생 관점 증거]]는 학습자들이 AI *피드백*의 수용(수정에 유용)과 *채점 권위*의 양도(인간 교수자에게 유보됨) 사이에 선명한 선을 긋는다고 보여줍니다. 이는 AI 관여에 대한 투명성이 활성화시키는, 보정되고 기능에 맞춰진 태도입니다. [[ko-hughes-vsd-student-centered-its-2026|지역 대학 학생들을 대상으로 한 가치 민감 설계 연구]]는 그 지점을 날카롭게 합니다. 학생들은 원시 모델 신뢰도나 기술적 투명성보다 *협력적이고 인간화된* 설명(예: "AI가 여기서 불확실할 수 있으니 이것을 함께 확인해 봅시다")을 선호했습니다. 그것은 투명성만으로는 자신의 학습을 직접 지원하지 않는 한 가치가 거의 없기 때문입니다. 이 연구는 설명 설계를 특징 중요도 출력이 아니라 학습자 대면 의미론으로 밀어붙이는 투명성 대 해석 가능성의 긴장을 드러냈습니다.
- **교사**는 개입에 정보를 주는 설명이 필요합니다. 어떤 학생들이 위험하며 *왜* 그런가, 어떤 증거에 근거하는가. [[xai-teachers-trust-edtech-recommendations-2026|교사를 대상으로 한 설명 가능성 연구]]는 [[discipline-specific-aied|학문 영역]] 특정의, [[curriculum-design|교육과정]] 언어로 된 설명이 일반적인 특징 중요도 설명보다 수용과 보정된 신뢰를 더 효과적으로 구축한다고 보여줍니다. 그러나 교사들은 여전히 완전한 의존 전에 실제 교실 경험을 원합니다. 설명만으로는 [[trust-calibration|보정]]이 주어지지 않습니다.
- **개발자와 연구자**는 모델 행동을 디버깅하고 [[bias-mitigation|편향]]을 탐지하기 위한 설명이 필요합니다. 어떤 특징이 예측을 이끄는지를 드러내는 것이 그것입니다.
- **관리자와 정책 입안자**는 책임, [[privacy]], [[regulation]] 준수(예: 설명을 받을 권리)를 위한 설명과, AI 기반 결정이 공정하고 [[equity-in-ai-education|형평성]] 있는지 감사하기 위한 설명이 필요합니다.

## 접근법과 형식

XAI-ED 프레임워크는 주요 설명 양상들을 목록화합니다. **시각적** 양상(히트맵, 의사결정 트리), **텍스트** 양상(자연어 정당화), **사례 기반** 양상(대안적 상정, 최근접 이웃), **특징 중요도** 순위, **규칙 추출**, **모델 단순화**입니다. 또한 접근법을 모델 범주에 매핑합니다.

- **화이트박스** 모델(의사결정 트리, 선형 모델, 규칙 기반)은 본질적으로 해석 가능합니다.
- **블랙박스** 모델([[machine-learning|신경망]], 앙상블)은 사후 설명 방법을 요구합니다.
- **글래스박스** 접근법은 정확도와 투명성의 균형을 꾀합니다.

구체적인 AIED 증거 기반은 이 모든 것에 걸칩니다. **해석 가능한 [[knowledge-tracing|지식 추적]]**은 학습자 지식 모델을 직접 검사 가능하게 만듭니다([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). **자기 설명 대리 모델**은 블랙박스 모델을 [[learning-analytics]]를 위해 작고 해석 가능한 [[llm|언어 모델]]로 증류합니다([[distilling-self-explaining-lm-learning-analytics-2026]]). **대안적 상정 설명** — "다른 결과를 위해 무엇이 바뀌어야 하는가" — 은 교육적 의사결정 지원과 구제를 뒷받침합니다([[sc2r-counterfactual-recourse-educational-2026]]). **연합 + 설명 가능 학습 분석**은 순위 안정성이 유지될 때도 설명의 품질이 흔들릴(보정이 저하될) 수 있음을 보여주며, 설명이 고정된 속성이 아니라 측정해야 할 시스템 출력임을 강조합니다([[villegas-ch-federated-explainable-learning-analytics-2026]]). 그리고 **해석 가능한 [[affective-computing|정서]] ITS**는 [[affective-tutoring|감정 인지]] 튜터링에서의 설명을 보여줍니다([[multimodal-affective-its-presentation]]).

## 설명의 품질이지 가용성이 아니다

증거에 걸친 되풀이되는 교훈이 있습니다. **설명을 갖추는 것만으로는 충분하지 않습니다.** 설명은 그것의 청중에 맞고, 정확하며, 이해관계의 크기에 보정되어야 합니다. XAI-ED 프레임워크는 그 함정들을 명시적으로 이름 붙입니다.

- **설명 과부하** — 너무 많은 정보가 사용자를 압도하여 이익을 무효화합니다.
- **오도적 설명** — 사후 설명은 모델의 실제 추론을 반영하지 않아 거짓 자신감을 줄 수 있습니다.
- **확증 편향** — 사용자는 기존 신념을 확인하는 설명에 선택적으로 주의를 기울입니다.
- **과잉 신뢰** — 유창한 설명은 결함 있는 시스템에 거짓 자신감을 만들어 [[cognitive-offloading|과의존]]을 먹입니다([[trust-calibration]]의 반대편).
- **시스템 게임화** — 학생들이 실제 학습을 우회하기 위해 설명을 이용할 수 있습니다.

설명의 품질에는 형평성 차원도 있습니다. 기술적으로 존재하지만 어떤 이해관계자에게는 읽을 수 없거나 — 아니면 예측 속의 [[bias-mitigation|편향]]을 가리는 설명은 그 목적을 달성하지 못합니다. 이것이 설계 질문이 *품질과 적합성*인 이유이며, 인간 중심의 이해관계자 특정 설명 설계가 설명의 기술적 생성과 분리될 수 없는 이유입니다. 효과적인 XAI는 단순히 기술적 산출물이 아니라, 수신자의 인지적 필요를 위해 설계된 의사소통 행위입니다.

설명이 언제나 평등하게 만들지는 않습니다. 250명의 7학년 학생을 대상으로 한 2 × 2 시나리오 실험에서, 수학 점수에 대한 서면 근거 제시는 두 조건 모두에서 수용과 지각된 공정성을 높였지만, [[teacher-role|교사]]가 낸 결정과 AI가 낸 결정 사이의 간격을 좁히기는커녕 넓혔습니다([[decision-making-agent-student-decision-acceptance-2026|Zhang et al. (2026)]]).

두 가지 주의가 이것을 더 날카롭게 합니다. 이 둘 모두 이 주제에 관한 위키의 최신 기여가 중심에 두는 것입니다. 첫째, 설명 기계 그 자체가 중립적이지 않습니다. LIME과 SHAP 같은 사후 방법은 모델의 실제 행동에 충실하지 않을 수 있으므로, 기술적으로 존재하는 설명이 정보를 주기는커녕 오도할 수 있습니다([[lund-socially-accountable-data-science-xai-2026|Lund et al. 2026]], Chuan et al. 2024에 기대어). 둘째, **설명은 책임이 아니다**. 어떤 특징이 예측을 이끌었는지에 대한 설명은, 그 특징들을 사용하는 것이 적절했는지, 훈련 데이터가 대표적이었는지, 시스템의 설계가 건전한 판단을 반영했는지를 밝히지 않습니다. 설명은 결정을 만들어 낸 구조적 조건은 손대지 않은 채 투명성의 외양을 만들어낼 수 있습니다(Mittelstadt et al. 2019). 교육을 위해 이것은 물어야 할 질문이 설명이 산출되었는지가 아니라, 그것을 받는 사람 — 학생, 교사, 상담가 — 이 그것을 이해하고, 그것에 기반해 행동하고, 그것의 배후 결정에 이의를 제기할 수 있었는지라는 뜻입니다. 같은 가독성의 실패는 [[automated-assessment|자동 평가]]의 보안 쪽에도 나타납니다. [[humble-prompt-injection-ai-grading-red-team-2026|Humble's (2026)의 AI 채점 도구 레드팀 평가]]는 그것이 프롬프트 인젝션을 차단한 뒤 대화를 조용히 비활성화하면서도 — 임베디드 지시를 결코 따르지 않겠다고 공지한 뒤 — 같은 파일에 대한 여섯 번의 추가 실행에서 그것들을 따랐음을 발견했습니다. 사용자에게는 의존의 근거로 삼을 신뢰할 만한 신호가 남지 않았습니다.

**설명 가능성을 설계에 내장하는 것**은 사후 충실성 문제에 대한 하나의 답입니다. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang and Fang (2025)]]는 설명 디코더를 [[assessment]]를 결정하는 것과 같은 융합 표현과 예측 점수로 매개변수화하여, [[formative-assessment|형성적]] 질문에 대한 낮은 점수가 불충분한 탐색 질문을 지명하는 근거 제시를 산출하게 하고, 여기에 교육과정 기준과 학문 특정 루브릭 조치에 대한 이중 렌즈 주의를 짝지었습니다. 루브릭에 대한 주의 정렬은 GPT-4 제로샷의 41.7%, BERT의 32.1% 대비 78.0%에 도달하며, 충실성은 루브릭 핵심 구간의 대안적 삭제와 루브릭 고정 체크리스트에 대한 인간 평정을 함께 사용해 검증되어 0.78의 설명 신빙성 점수를 줍니다. 이는 BERT-base 대비 0.31의 증가입니다. 감사는 또한 그 구조적 주장이 얇아지는 지점을 보여줍니다. 정서 단서에서 모델은 주의 가중치의 28.4%를 배정하는 반면 전문가는 15.2%를 배분하며(정렬 0.53), 한 실패 사례는 "frustrated" 토큰에 28%를 할당했는데, 저자들은 이것을 교수학이 아니라 정서에 대한 과적합으로 읽고 개선이 필요한 영역으로 지명합니다. 설명을 결정 경로에 내장하면 그것들을 사후적 정당화보다 더 충실하게 만듭니다. 그것이 옳게 만들지는 못합니다.

## 설명 가능성을 책임의 실천으로 가르치기

설명의 품질이 XAI가 유용한지를 결정한다면, 설명을 만들어내는 것은 능력을 시연하는 것이 아니라 전문적 습관으로 가르쳐져야 합니다. [[lund-socially-accountable-data-science-xai-2026|Lund and colleagues (2026)]]는 네 기둥에 걸쳐 이것을 제안합니다. **답변 책임**(영향받는 이들에게 이유를 줄 의무), **책임**(사후 방어가 아니라 생애주기 전반에 걸쳐 예상되는 해악), **집행**(강좌 내부의 결과), **반성**(자기 가정에 대한 기록된 검토)입니다. 각각 고유한 과제와 고유한 교실 비용을 가집니다.

설명 가능성을 위해 특별히 중요한 과제는 설명을 노트북 밖으로 끌어내는 것들입니다. 정확도 지표와 나란히 가중치를 부여받는 채점된 모델 카드, 그리고 학생들이 자신의 모델에 해석 가능성 도구를 적용한 뒤 공유된 기술적 배경이 없는 청중에게 결과를 발표하는 구조화된 설명 감사가 그것입니다. 집행은 윤리 인접 강좌에서 가장 흔히 빠지는 기둥이자, 나머지를 상징적인 것을 넘어서게 만드는 기둥입니다. 책임 있는 문서화에 보상을 주는 루브릭, [[ethics|윤리적]] 근거로 반려되어 수정될 수 있는 프로젝트, 그리고 기술적 기준만이 아니라 책임 기준에 맞춰 진행되는 [[peer-assessment|동료 검토]]가 그것입니다. 이 논문은 도구들이 비용에서 뚜렷이 다르다고 솔직히 인정합니다. 모델 카드와 입장 진술서는 새로운 소프트웨어가 필요 없고 피상적 준수의 위험만 있는 반면, 동료 패널과 이해관계자 참여는 조율과 기관의 지지를 요구합니다. 이것이 전부 아니면 전무의 약속이 아니라 단계적 도입을 권하는 이유입니다. 이것들이 프로그램 안에서 어디에 자리하는지는 [[curriculum-design]]을 보십시오.

## 인용

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.

## 연결된 개념

- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]

## 연결된 문서

- [[lund-socially-accountable-data-science-xai-2026]] — XAI를 책임의 실천으로 가르치기 위한 네 기둥 프레임워크(답변 책임, 책임, 집행, 반성) (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — 학생 중심 ITS의 가치 민감 설계(협력적 설명 대 원시 설명)
- [[xai-education-framework]] — XAI-ED: 교육에서 설명 가능한 AI의 기초적 프레임워크 (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — 교사의 신뢰와 수용을 구축하는 학문 영역 특정 설명 (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — 투명한 AI 보조 평가에 대한 학생 관점 (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — 해석 가능한 지식 추적
- [[explainable-probabilistic-kt]] — 확률론적 임베딩을 통한 설명 가능한 지식 추적
- [[neural-symbolic-knowledge-tracing]] — 신경-기호 지식 추적
- [[distilling-self-explaining-lm-learning-analytics-2026]] — 학습 분석을 위해 블랙박스 모델을 자기 설명 LM으로 증류하기
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — 프라이버시 보존 위험 모델링을 위한 연합·설명 가능 학습 분석
- [[sc2r-counterfactual-recourse-educational-2026]] — 교육적 의사결정 지원을 위한 의미 제약 대안적 상정
- [[fair-explainable-edu-recommendations]] — 공정하고 설명 가능한 교육 추천
- [[multimodal-affective-its-presentation]] — 다중 모달 정서 피드백을 위한 해석 가능한 폐쇄 루프 ITS
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — 고등교육에서 ChatGPT 도입의 설명
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — 설명 가능성을 설계에 내장한 LLM 프레임워크: 자동 교수 평가를 위한 이중 렌즈 주의와 점수 매개변수화 설명 (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — 탐지가 사용자에게 결코 보고되지 않은 AI 매개 채점에서의 프롬프트 인젝션 (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — 새로운 AI 보조 교육 질문의 교수학적 평가를 위한 사전 훈련 모델의 평가
- [[decision-making-agent-student-decision-acceptance-2026]] — 교사 대 AI가 낸 채점 결정: 서면 근거 제시가 공정성 간극을 넓힘
