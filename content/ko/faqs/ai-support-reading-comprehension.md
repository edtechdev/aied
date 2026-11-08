---
title: "AI는 학생의 읽기와 독해를 어떻게 도울 수 있을까요?"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-08T00:26:41-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

어떤 과목이든 가르친다면, 읽기 자료를 고르고, 텍스트를 각색하고, 어떤 자료가 학생에게 너무 어려운지 판단합니다. AI는 그 각각의 과제를 도울 수 있지만, AI가 주는 난이도 수치는 난이도의 측정값이 아닙니다. 평균적인 텍스트와 평균적인 독자에 관한 추정이며, 여러분이 실제로 가르치는 독자는 평균에서 멀리 떨어져 있을 수 있습니다. 이 FAQ는 도구가 진짜로 도움이 되는 곳, 실패하는 곳, 그리고 그에 대해 무엇을 해야 하는지를 알려 줍니다.

## AI가 실제로 잘할 수 있는 것

**텍스트를 대규모로 찾고 각색합니다.** AI는 출처를 찾고, 어휘를 단순화하고, 용어집을 생성하고, 한 구절을 [[study-with-ai|학습 가이드나 요약]]으로 바꾸는 데 강합니다. 읽기 준비의 기계적 부분 — 훑어보기, 수준 맞추기, 핵심 용어 뽑기 — 에 사용하고, 중요한 것에는 사람의 점검을 남겨 두십시오.

**텍스트가 아니라 독자를 모델링합니다.** 독자 변수가 텍스트가 얼마나 어렵게 느껴지는지의 신호의 상당 부분을 담기 때문에, 독자를 프로파일링하는 도구는 어떤 공식보다 지각된 난이도를 더 잘 예측합니다. 지식 베이스의 가장 큰 연구에서 독일 고등학생 193명이 문장 3,954개를 평정했고, 프로파일 기반 모형(최적 앙상블 RMSE 0.822 대 평균 기준선 1.070)이 텍스트의 Flesch 점수를 앞섰습니다. Flesch 점수는 같은 자료를 학생들이 경험한 것보다 훨씬 어렵게 평정했으며, 주석의 72.8%가 쉽거나 매우 쉬웠습니다([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck and Conrad, 2025]]). 실천적으로 말하면 이렇습니다. 학생 몇 명의 구절 평정이 어떤 공식의 라벨보다 낫습니다.

## AI가 부족한 지점

**난이도 라벨은 측정값이 아닙니다.** "중급"이나 Flesch 점수 같은 라벨은 텍스트의 표면을 기술할 뿐, 학생의 경험을 기술하지는 않습니다. 위 연구에서 독자 특성 — 가정에서 쓰는 언어, 자기평정 기술, 심지어 성별 — 이 텍스트 통계보다 더 많은 신호를 담았고, 지각된 난이도가 독자마다 다르기 때문에 평가자 간 일치도는 낮았습니다(Krippendorff's alpha = 0.23). 공식과 라벨을 가설로 다루고, 텍스트를 읽어야 하는 학생들에게 비추어 보정하십시오.

**AI에게 학생을 대신하게 하는 것도 통하지 않습니다.** 같은 연구에서 역할극 프롬프트를 받은 ChatGPT와 Claude는 라벨이 붙은 예시가 있어도 학생의 난이도 지각을 재현하지 못했습니다. LLM은 여러분을 위해 텍스트를 판단할 만큼 [[simulating-students|독자를 시뮬레이션]]할 수 없습니다([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck and Conrad, 2025]]).

**AI가 쓴 텍스트는 인간 산문과 다르게 읽힙니다.** 14개 모형에 걸쳐, AI 언어는 장르를 맞춘 인간 글쓰기와 비교해 희귀한 저빈도 단어와 명사 중첩을 과다 사용하고, 생략 가능한 단어를 떨어뜨리며, 더 긴 의존 관계를 이어 갑니다. 효과는 단일 턴 에세이보다 다중 턴 채팅에서 더 강하며, 저자들은 이를 반복적 대화의 압력과 연결합니다([[clark-ai-generated-language-readability-2026|Clark, Martin and Mahowald, 2026]]). 생성된 설명과 생성된 읽기 자료 모두 이 프로파일을 지니므로, AI가 초안을 쓴 텍스트는 측정된 읽기 수준이 시사하는 것보다 처리하기 어려울 수 있습니다.

**AI 요약이 읽기를 대체할 수 있습니다.** 기사를 요약으로 바꾸는 도구는 선별에는 유용하지만, 요약이 텍스트를 대체하면 학생은 과제가 세우려던 독해 연습을 잃습니다. 다른 곳의 [[reducing-over-reliance|과잉 의존]]과 같은 함정입니다.

## 어떻게 대응할 것인가

**텍스트를 과제로 내기 전에,** 도구 너머의 두 번째 의견을 구하십시오. 직접 훑어보고, 생성된 것이라면 위의 AI 산문 프로파일을 살피고, 가장 강한 증거로 학생 한두 명에게 시도하게 하십시오. 실제 독자와의 5분 파일럿이 어떤 난이도 알고리즘보다 높은 점수를 냅니다.

**AI로 텍스트를 각색할 때는,** 각색을 가시적이고 검토 가능하게 유지하십시오. 원본과 단순화 판본을 나란히 두면 학생과 여러분이 무엇이 바뀌었는지 볼 수 있고, 다국어 학습자에게 원본을 숨기지 않는 비계를 줍니다([[ai-multilingual-learners|AI가 다국어 학습자를 대하는 방식]]은 언어 적절성 위험을 다룹니다).

**읽기 도구나 인터페이스를 평가할 때는,** 개별 독자를 모델링하는지 하나의 획일적 라벨을 찍는지 물으십시오. 제2언어 독자에게 그 차이는 종종 전부입니다. 연구자에게 열린 문제는 측정입니다. [[reading-education|읽기 교육]] 페이지는 네 가지 연구 계열(읽는 동안의 지원, 읽기 평가, 적응형 텍스트, 그리고 그 셋 아래의 측정 문제)을 지도화하고([[educational-measurement|측정]]이 사슬의 약한 고리입니다), 증거를 유망하지만 고르지 않다고 보고하므로, 도구의 읽기 이득에 관한 강한 주장은 어떤 [[checking-whether-educational-ai-works|AI 학습 주장]]과 같은 회의를 받을 자격이 있습니다.
