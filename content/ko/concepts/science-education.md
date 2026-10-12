---
title: 과학 교육
type: concept
pedagogy: [inquiry-based-learning]
technology: [generative-ai]
discipline: [science education, stem education]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-05T10:25:44-04:00"
translation_of: concepts/science-education
source_updated: "2026-10-05T10:25:44-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **[[stem-education|과학 교육]]** — 학생들이 과학을 어떻게 배우고 과학을 어떻게 가르칠 것인지에 대한 연구와 실천이며, 이제 [[physics-education|물리]], 화학, [[biology-education|생물]]에 걸쳐 생성형 AI(LLM, 시뮬레이션, 가상 실험실, AI 채점)에 의해 재형성되고 있습니다. 이 지식 베이스의 과학 교육 문서들은 한 분야가 핵심 긴장을 협상하고 있음을 보여줍니다: AI는 실증적으로 탐구, 오개념 교정, 대규모 평가를 지원하지만, 그 가치는 수업 설계에 의존하며, [[cognitive-offloading|과도한 의존]], 환각, 비인간화되고 이윤 중심적인 학습의 실제 위험을 안고 있습니다.

## 생각해 볼 질문들

- 이 페이지는 긴장으로 시작합니다: AI는 실증적으로 대규모 탐구와 오개념 교정을 지원하지만, 그 가치는 전적으로 수업 설계에 의존합니다. 읽기 전에, 과학 수업에서 사용한 도구가 강력해 보였으나 교육적으로 공허했던 때는 언제였으며, 무엇이 차이를 만들었나요?
- AI가 촉진한 물리 탐구가 아무도 측정한 적 없는 질량 값을 '지어냈습니다' — 학생들이 압력을 가했을 때 말이죠. 이 사건은 과학에서 AI 출력을 권위적으로 다루는 것에 대해 무엇을 보여주며, 학생들은 자신감 있는 듯한 답을 어떻게 다루도록 훈련받아야 할까요?
- 연구에 따르면 AI는 대화형 튜터보다 확장 가능한 콘텐츠 생성기로서 현재 더 큰 가치를 더할 수 있습니다. 한 연구에서 잘 만들어진 개념 변화 텍스트(전문가 제작 또는 AI 제작)가 프롬프트된 AI 대화를 이겼습니다. 이것이 놀랍나요? 그리고 과학에서 AI의 진정한 교육적 효과가 지금 어디에 있는지에 대해 무엇을 시사하나요?
- AI가 10,364건의 필기 물리 평가를 인간 채점자와 높은 일치로 채점했지만, 멀티모달 모델은 여전히 복잡한 추론과 도형 생성에서 격차를 보입니다. '진정하고, 표상이 많은' 과학 과제의 무엇이 자동 평가에 저항하게 만들 수 있을까요?
- 물리 학생들은 놀라운 신뢰–활용 격차(높은 사용, 낮은 신뢰)를 보이며, 실용주의적 사용자와 회의적인 비사용자로 나뉩니다. 학생들 자신이 도메인에 맞춰 보정된 회의주의자라면, 과학 수업에서 AI에 대한 획일적 정책에 어떤 함의가 있을까요?
- 한 비판적 목소리는 과학 교육의 'AI 식민화'를 경고합니다 — 동의 없는 추출, 알고리즘적 단일 재배, 비인간화된 개혁. 읽기 전에, 과학 교육에서 AI의 이점이 어디에서 지나치게 팔리고 있다고 생각하며, 인간 중심이고 정의 지향적인 대안은 어떤 모습일까요?

## 들어가며

과학 교육은 AI의 약속과 한계가 가장 뚜렷이 충돌하는 곳입니다. 왜냐하면 이 학문들은 엄밀한 [[multimodal]] 추론 — 물리의 시공간적 사고, 화학의 실험실 기술, 생물의 생물 개체 수준 시스템 — 을 LLM이 잘 처리하는 잘 구조화되고 검증 가능한 콘텐츠와 함께 요구하기 때문입니다. 여기서 종합한 열세 개의 문서는 [[k-12]] 중등 교실부터 [[higher-ed]] 대학 강좌, [[teacher-education|예비 교사]] 프로그램에 이르기까지 세 학문과 모든 수준을 아우릅니다. 이 전반에 걸쳐 일관된 그림이 드러납니다: AI는 답 생성기가 아니라 공동 탐구자이자 콘텐츠 생성기, 가상 실험실 조수로서 내장된 협력자로 가장 잘 기능하며, 그 기여는 [[learning-design|수업 설계]]와 이를 둘러싼 교육적 구조에 의해 결정됩니다.

GCSE 과학에서 AI 수정 플랫폼의 4주 무작위 평가가 이 그림에 인과적 추정치를 더합니다 — Hedges' g = 0.33, 과목이나 불이익에 따른 효과 차이는 증거가 없음 — 이는 이미 기술이 풍부한 대안에 비한 것이므로, 이 수치는 AI 대 무가 아니라 부가 가치입니다([[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]]).

이러한 교실 수준의 발견들은 더 큰 방법론적 질문 안에 놓여 있습니다. [[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen and Graulich (2026)]]는 과학 교육 연구가 현재 인식론적 반복(epistemic iteration)의 한복판에 있을 수 있다고 주장하며, 특정 인식론적 목표를 향해 반복적으로 구축되는 지식의 연속적 단계에 대한 Hasok Chang(2004)의 설명을 끌어옵니다. 그들의 읽기에서 AI 방법론은 이 분야가 학생 학습을 분석하는 방식뿐 아니라 어떤 인식론적 목표, 기준, 실천을 우선시하는지도 변화시킬 수 있습니다. 그들은 7단계 반성 프레임워크(문제 구성, 계측과 측정, 실험과 증거 기반 추론, 비교와 재현, 규범과 합의 구축, 실행과 그 결과, 지속적 정교화)를 제안하며, 이를 온도계계량법의 대략 150년 발전으로 설명하고, 검증된 방법이나 실증적 발견이 아닌 반성 도구로서 제시합니다.

### 가상 실험실과 시뮬레이션

AI는 맞춤형이고 구체화된(embodied) 과학 기기의 제작 장벽을 극적으로 낮추고 있습니다. [[genai-ar-physics-simulation-prompt-2026|Levy et al.]]는 네 요소 자연어 프롬프트만으로 손으로 제어하는 증강 현실 물리 시뮬레이션(가상 램프의 파장을 조절하는 집기-펼치기 제스처)을 생성할 수 있음을 보이며, 파일럿 학생의 86%가 더 큰 [[student-engagement|몰입]]을 보고했습니다. 마찬가지로 [[ai-generated-smartphone-circular-motion-lab-2026|Suñer et al.]]는 전적으로 프롬프팅만으로 브라우저 기반 회전 실험실을 생성하여, 영상 분석에 대해 1% 미만의 오차로 검증했습니다. 이 연구들은 [[generative-ai|생성형 AI]]를 교사가 고정된 앱에 활동을 맞추기보다 [[pedagogy|교육적 의도]]에 맞춰 소프트웨어를 설계할 수 있게 하는 [[prompt-engineering|프로그래밍]] 도구로 재규정하며, [[embodied-learning|구체화된]] 학습과 [[simulation]] 기반 학습을 발전시킵니다. [[chemistry-education]]에서 [[context-based-ai-secondary-chemistry-2026|Abdikayumova & Madybekova]]는 맥락 기반 7E 탐구 주기 안에 PhET 시뮬레이션과 ChatGPT 튜터링을 내장하여 10학년 학생들에게 구성 요소 각각 단독보다 유의하게 높은 성취와 몰입을 달성했습니다. 이는 맥락화, 구조화된 탐구, 적응형 AI가 시너지적으로 작동한다는 증거입니다. 학습자들이 그러한 모델링 환경 안에서 어떻게 작업하는지에 대한 행동 분석은 이 설계 교훈을 강화합니다: VERA에서 생태 모델을 만드는 315명의 온라인 학습자를 추적한 [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]]는 전체 주기의 가설 주도 탐구에 참여하는 학습자가 가장 복잡하고 다양한 모델을 구축하는 반면, 관찰 중심 학습자는 대체로 기존 모델을 복사한다는 것을 발견했습니다. 이는 과학 모델링 도구가 학습자를 수동적이고 관찰 지배적인 모드에 두기보다 전체 주기 탐구 행동을 적극적으로 촉진해야 함을 시사합니다.

### AI 튜터와 탐구 기반 학습

탐구 기반 학습은 핵심 주제입니다. [[jiang-chatgpt-inquiry-steam-review-2026|Jiang et al.]]의 24개 연구에 대한 [[meta-analysis-systematic-review|체계적 검토]]는 ChatGPT를 주로 [[inquiry-based-learning|STEAM 탐구]]의 개념화, 조사, 토론 단계에서 사용되는 "AI 기반 공동 탐구자"로 자리매김하며, 성과, [[critical-thinking|비판적 사고]], 몰입을 향상시키지만, 출력이 권위적으로 다루어질 때 과도한 의존, 환각, 피상적 결론의 위험이 있다고 봅니다. [[ai-supported-inquiry-photosynthesis-respiration-2026|Aydın]]은 8주의 AI 지원 안내 탐구가 예비 교사들의 광합성과 호흡에 대한 개념 이해에서 큰 향상을 낳은 반면, [[ai-literacy|AI 리터러시]]와 [[computational-thinking|컴퓨팅 사고]]는 유의한 변화가 없음을 발견했습니다. 이는 더 넓은 역량이 더 길거나 더 명시적인 수업이 필요할 때도 학문적 학습은 향상될 수 있음을 시사합니다. [[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani]]는 AI가 언어 채널에 머무르면서 ISLE 탐구의 인식론적 핵심을 비계화할 수 있지만, 촉진이 취약함을 발견했습니다: 학생의 압력 하에 AI가 아무도 측정한 적 없는 질량 값을 "지어냈" 것으로, 이는 [[hallucination-risk]]와 AI의 충실성을 가정하기보다 검증해야 할 필요를 강조합니다. [[airis-cognitively-activated-ai-physics-2026|Kuhn et al.]]는 예측, 해석, 평가를 위임 불가능한 인간 과업으로 유지하는 AIRIS 프레임워크(Activate–Inquire–Reflect)를 제안하고, AI를 제거했을 때 학습이 살아남는지 검증하는 "withdrawal condition" 실험을 촉구합니다. 이는 침식되는 인식론적 실천의 "끓는 물 속 개구리 문제"에 대한 직접적 대응입니다. AI 생성 수업 계획에 대한 전문가 판단은 이 설계 교훈을 [[curriculum-design|교육과정]]에 정렬된 과학으로 확장합니다: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli and Yildirim (2026)]]은 11명의 터키 과학교육 전문가로 하여금 ChatGPT-4와 교육 중심 도구(Teacher's Buddy)를 Engineering [[design-based-research|Design-Based]] Learning (EDBL) 모델에 정렬된 "Sustainable Living and Biodiversity" 단원의 6학년 계획에 대해 점수를 매기게 했습니다. 두 플랫폼 모두 "Presenting the solution"에서 가장 높은 점수를 받았으나 Engineering Skills에서는 가장 낮은 점수를 받았습니다(범용 x̄ = 37.45; 교육 중심 x̄ = 41.45) — 이는 설계 기반 학습을 정의하는 반복적이고 과정 중심인 단계(프로토타이핑, 실패 분석, 수정, 반성적 재시험)를 모방하는 데 공통된 약점입니다 — 그리고 11명의 전문가 중 3명만이 두 계획을 직접 "Applicable"하다고 판단했으며, 7명은 "Can be applied by correction"으로 평가했습니다.

한 개념적 검토가 물질적 채널을 이론적으로 근거지웁니다: 과학은 주장을 물리적 증거에 대해 수정하는 개방 시스템인 반면, 언어 모델은 추론 시점에 증거에 대해 운영상 닫혀 있습니다([[nature-of-science-generative-ai-2026|Muminova & Mamatkulov, 2026]]).

### 오개념과 개념 변화

개념 변화에 대해 증거는 미묘하고 부분적으로 직관에 반합니다. [[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan]]은 413명 학생의 Solomon Four-Group 설계에서 전문가가 쓴 개념 변화 텍스트와 AI 생성 [[refutation-text|개념 변화 텍스트]]가 모두 열과 온도에 대한 [[misconceptions]] 줄이는 데 상호작용형 AI 대화보다 동등하고 유의하게 더 효과적이었으며, 상호작용형 AI 대화는 통제 조건 대비 이점이 없음을 발견했습니다. 이는 AI의 현재 교육적 가치를 대화형 튜터보다 확장 가능한 [[generative-ai|콘텐츠 생성기]]로 자리매우며, 향상이 고성취 학생에게 집중되었습니다([[equity-in-ai-education|형평성]] 우려). 이것은 프롬프트 구체성이 물리 풀이의 질을 형성하며, MAPS 안내 비평이 독립적인 [[problem-solving|문제 해결]]보다 학생들이 AI 출력을 평가하도록 더 잘 준비시킨다는 것을 보이는 [[probing-ai-generated-physics-solutions-2026|Borse et al.]]에 의해 강화되며, AI의 오류 가능성을 [[critical-thinking]] 학습 자원으로 다룹니다.

### AI 채점과 평가

AI 채점은 고부담 과제에서 빠르게 발전하고 있습니다. [[ai-grading-handwritten-physics-2026|Pathak et al.]]는 필기 물리 평가의 스캔 페이지 10,364개(국제 과학 올림피아드와 팀 선발 캠프 포함)를 채점하여 높은 점수 상관(0.91–0.97)을 달성하고 인간 채점과 동일한 5명 팀을 복원했으며, 상세하고 물리 특유의 루브릭이 주어질 때 AI가 채점자 통제 하에서 타당한 [[assessment-validity|제2의 검토자]]이자 감사 도구로 기능한다고 주장합니다. 단답형 자동 채점은 더 길고 더 기초적인 트랜스포머 계보를 가집니다: [[auto-marking-short-answer-science-2026|Morley et al.'s scoping review]](21개 연구, 2017–2024년 초)는 BERT 계열 모델이 2021년까지 단답형 과학 문항 자동 채점을 지배했으며, 이후 약 2022년부터 프롬프팅을 통해 GPT 기반 접근법이 채택되었음을 발견했습니다. 도메인 데이터(교과서, 루브릭, 추가 사전 훈련)로 강화된 모델은 일관되게 기준선을 능가했으며, [[educational-measurement|신뢰도]], [[explainable-ai|설명 가능성]], [[bias-mitigation|공정성]]에 대한 미해결 위협은 그러한 자동 채점기를 [[teacher-role|인간 채점자]]의 대체가 아닌 보조 수단으로 주장합니다. 그러나 [[omniphys-multimodal-physics-benchmark-2026|Chen et al.]]의 OmniPhys [[benchmark]]는 멀티모달 LLM이 여전히 복잡한 추론과 도형 *생성*에서 유의한 격차를 보임을 드러내며, 깊은 학문적 역량을 정의하는 진정하고 표상이 많은 과제에서 [[automated-assessment|자동]] 물리 평가를 과도하게 신뢰하는 것에 경고합니다. 화학의 대응 사례가 형식 의존성을 선명하게 합니다: [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]]는 멀티모달 [[llm]]로 296명 학생의 필기 일반화학 기말고사를 채점하여, 텍스트와 화학 반응 답안에서는 조교와 높은 일치를 보였으나 그리기와 그래프 작성에서는 *무작위보다 나쁜* 성능을 보였습니다(배경 격자가 AI 시각을 방해함). 이는 과학에서 신뢰할 수 있는 AI 채점이 응답 형식에 따라 선택적이며, 그래픽 문항에 대해서는 획일적인 "모두 채점" 방식이 아니라 [[human-in-the-loop-ai|인간 채점자]]에게 신뢰도 기반 이관을 요구한다는 증거입니다.

### 교사 인식과 비판적 관점

교사의 준비도가 결정적입니다. [[pre-service-science-teachers-ai-perceptions-2026|Amponsah et al.]]는 가나의 예비 과학교육 교사들이 AI에 대해 긍정적 태도와 강한 의도를 가지지만 실제 교실 사용은 중간 정도임을 발견했습니다. 이는 [[teacher-ai-competency]]와 [[governance|제도적]] 지원이 진짜 지렛대임을 보여주는 의도–사용 격차입니다. [[becker-chatgpt-typology-physics-2026|Becker et al.]]와 [[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]]는 물리 학생들이 비판적이지 않은 수용자가 아니라 도메인에 맞춰 보정된 회의주의자임을 기록합니다: 50포인트 신뢰–활용 격차(91% 사용, 41% 신뢰)와 획일적 정책에 도전하는 두 개의 뚜렷한 사용자 프로필(Pragmatic Users 대 Skeptical Non-Users)이 그것입니다. 기술 낙관론과 균형을 이루어, [[avraamidou-ai-colonization-science-education|Avraamidou]]는 과학 교육의 "AI 식민화" — 동의 없는 추출, 알고리즘적 단일 재배, 비인간화되고 이윤 중심의 개혁 — 을 경고하며, 이윤보다 정의를 우선하는 페미니스트적이고 인간 중심의 AI를 촉구합니다. 한편 [[ai-science-chemistry-education-systematic-review-2025|Erümit & Özdemir Sarıalioğlu]]의 18개 연구 체계적 검토는 [[ethics|윤리적]] 위험(편향, 환각, [[academic-integrity|표절]], 독립적 사고의 침식)과 [[teacher-education|교사 훈련]] 및 의식적 사용의 필요성을 강조합니다. 열세 개 문서 전체에 걸친 총체적 교훈은 과학 교육의 AI가 건전한 탐구, [[scaffolding]], [[assessment]] 설계 안에 내장될 때 향상을 제공하고, 학생들이 스스로 해야 하는 인식론적 작업을 대체할 때 학습을 저해한다는 것입니다.

[[llm-benchmark-secondary-science-topics-2026|Schroeder et al. (2026)]]는 범용 모델이 과학 콘텐츠 자체를 얼마나 잘 다루는지 묻습니다: 중학교(1,078 문항)와 고등학교(1,150 문항)의 NGSS 정렬 문항 세트에서, 9개의 오픈 웨이트 모델은 대부분 90%를 넘었고, 모델 크기는 정확도와 무관했으며, 한 과학교사가 표집한 240개 중 236개 문항(98.3%)이 정렬되어 있다고 판단하면서도 도형, 자료 해석, 수학적 표상의 부재를 지적했습니다. 텍스트 전용 문항은 모든 NGSS 성과 기대를 행사할 수 없습니다. 높은 문항 난이도와 낮은 변별도는 문항이 개선되어야 하는지, 아니면 이 부류의 모델에게 중등 과학이 다루기 쉬워진 것인지를 열어 둡니다. 그리고 저자들은 다중 회차의 증거 기반 피드백이 결여된 표준이라고 촉구합니다.

## 연결된 개념

- [[stem-education]]
- [[physics-education]]
- [[chemistry-education]]
- [[biology-education]]
- [[inquiry-based-learning]]
- [[misconceptions]]
- [[simulation]]
- [[generative-ai]]

## 연결된 문서
- [[ai-methodologies-science-education-research-2026]] — AI 방법론이 과학교육 연구를 어떻게 변화시킬 수 있는지 성찰하기 위한 7단계 인식론적 반복 프레임워크 (Martin et al., 2026)
- [[ai-science-chemistry-education-systematic-review-2025]] — 과학 및 화학 교육에서의 AI에 관한 체계적 문헌 고찰
- [[jiang-chatgpt-inquiry-steam-review-2026]] — STEAM 탐구 기반 학습을 위한 ChatGPT
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — 광합성과 호흡에서 AI 지원 안내 탐구
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — 열과 온도에 관한 개념 변화 텍스트와 AI 대화 비교
- [[ai-grading-handwritten-physics-2026]] — 손글씨 물리학 평가의 대규모 AI 채점
- [[avraamidou-ai-colonization-science-education]] — 과학교육의 AI 식민화에 관한 비평
- [[pre-service-science-teachers-ai-perceptions-2026]] — 예비 과학교사의 AI 인식과 수용
- [[ai-assisted-inquiry-ssi-climate]] — 기후 변화의 사회과학적 쟁점에 관한 AI 지원 탐구
- [[auto-marking-short-answer-science-2026]]
- [[an-goel-self-directed-modeling-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-tutoring-micro-rct-gcse-science-2026]] — 혁신의 속도로 AI 튜터링 평가하기: GCSE 과학에서 AI 튜터링 플랫폼의 실천자 주도 마이크로 무작위 시험
- [[llm-benchmark-secondary-science-topics-2026]] — 중·고등학교 과학 주제에 대한 LLM 이해력 벤치마크
- [[nature-of-science-generative-ai-2026]] — 생성형 인공지능 시대의 과학의 본성: 인식론적 권위, 물질성, 시너지적 대응
