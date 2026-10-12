---
title: 프롬프트 엔지니어링
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-02T08:08:45-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer]
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
translation_of: concepts/prompt-engineering
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **프롬프트 엔지니어링** — 원하는 출력을 얻기 위해 대형 언어 모델에 넣을 입력을 설계하고 다듬는 실천입니다. 교육에서 프롬프트 엔지니어링은 이중적 역할을 합니다. 학습자의 기술(학생들은 효과적으로 프롬프트를 작성하는 법을 배워야 합니다)이자, 시스템 설계 수단([[intelligent-tutoring|AI 튜터링]]의 행동 방식을 만드는 프롬프트를 개발자가 작성합니다)입니다.

## 생각해 볼 질문들

- 여러분은 최근에 AI 도구에 프롬프트를 입력해 본 적이 있을 것입니다. 이제 다음을 생각해 보십시오. 프롬프트를 어떻게 표현했는지는 중립적이지 않습니다 — 그것은 여러분이 어떻게 계획하고, 어떻게 생각하고, 노력을 어떻게 배분했는지를 드러낼 수 있습니다. 여러분 자신의 프롬프트 작성 습관은 문제에 접근하는 방식에 대해 무엇을 말해 줄 수 있을까요?
- 한 연구에서 요청을 능숙하게 표현하는 사용자들이 같은 의도를 덜 능숙하게 표현하는 사용자들보다 체계적으로 더 나은 출력을 얻는다는 사실이 밝혀졌습니다. '프롬프트 특권(prompt privilege)'이 실재한다고 받아들인다면, AI에 대한 공정한 접근은 모두에게 더 나은 프롬프트 작성을 가르치는 [[teacher-role|가르침]]으로 해결하는 것이 가장 나은 방법입니까, 아니면 그런 기술을 요구하지 않도록 시스템을 재설계하는 것이 나은 방법입니까 — 각각의 장단점은 무엇입니까?
- 프롬프트 작성은 암기해야 할 '요령'입니까, 아니면 진정한 지적 기술입니까? [[research-methods-aied|연구]]의 한 계열은 이를 한 분야 안의 전문적 판단(언론, 법, [[medical-education|의학]])으로 다루고, 다른 한 계열은 AI 리터러시의 핵심으로 다룹니다. 좋은 프롬프트와 나쁜 프롬프트를 실제로 가르는 것이 무엇인지에 대한 여러분의 경험과 일치하는 관점은 어느 쪽입니까?
- 잘 설계된 프롬프트는 학생의 사고를 비계처럼 떠받칠 수 있는 반면, 잘못 사용된 프롬프트는 인지적 부담 전가를 부추길 수 있습니다. AI가 여러분 대신 생각해 준 순간을 떠올려 보십시오. 그것을 가능하게 한 것은 프롬프트의 무엇이었고, 혹은 여러분의 의도의 무엇이었습니까? 그것은 반대로 작동하도록 설계될 수도 있었을까요?
- 프롬프트 작성은 학습자의 기술이면서 동시에 시스템 설계 수단입니다. 어떤 튜터는 이제 사용자를 대신해 프롬프트를 자동으로 배분하고 선택하기도 합니다. 프롬프트 작성이 사용자에게서 시스템으로 옮겨갈 때, 학생들은 무엇을 잃고 무엇을 얻게 됩니까?
- 읽기 전에 작은 목표를 하나 정하십시오. 프롬프트 엔지니어링에 대해 배운 뒤, 여러분 자신의 작업에서 프롬프트를 쓰는 방식을 어떻게 한 가지 바꿀지 결정하고, 그것이 효과가 있었는지 알기 위해 어떤 결과를 확인할지 정하십시오.

## 들어가며

프롬프트 엔지니어링은 교육에서 [[generative-ai]]를 효과적으로 사용하는 데 핵심적입니다. 전통적인 프로그래밍 인터페이스와 달리 LLM은 자연어에 반응하지만 — 그 응답의 질, 정확성, [[pedagogy|교육적]] 가치는 프롬프트 설계에 크게 좌우됩니다. 이 지식 기반의 연구는 프롬프트 작성이 중립적 행위가 아니라는 점을 보여 줍니다. 그것은 학생이 어떻게 생각하고, 계획하고, 인지적 노력을 배분하는지를 반영합니다. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran, Arar (2026)]]는 이 용어가 포괄하는 범위를 더 분명히 하면서, 성능을 위한 입력의 기술적 최적화인 프롬프트 엔지니어링과, 목적을 분명히 하고 출력을 비판적으로 읽으며 이유를 밝혀 수정하는 수사적·윤리적·성찰적 작업인 프롬프트 리터러시(prompt literacy)를 구분합니다. 이들의 프롬프트 리터러시 순환(목적 분명히 하기, 프롬프트 작성하기, 출력과 상호작용하기, 프롬프트 다듬기, 성찰하기)과 과정 평가 기준 사례는 그 구분을 가르칠 수 있는 것으로 만들며, 출력만 최적화하는 수업은 LLM 사용의 윤리적·인식론적 차원을 건드리지 않은 채 남겨 둔다고 주장합니다.

### 프롬프트 엔지니어링이 연구에 나타나는 방식

- **인지적 흔적으로서의 프롬프트 작성:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]]는 프롬프트 패턴이 [[cognitive-offloading|인지적 부담 전가]]를 드러낸다는 것을 보여 줍니다 — 양질의 작업은 맥락이 풍부하고 정중하며 지도적인 프롬프트를 쓰고, 저품질의 작업은 영역에 근거하지 않은 반응적 불일치를 보입니다.
- **깊이는 산출물은 높이지만 기억은 높이지 않는다.** 대학원생 22명에서 설명을 구하는("why/how/explain") 프롬프트의 비중이 기초 지식과 프롬프트 양을 넘어 독립적으로 채점된 과제의 질을 예측했지만(β = 6.27), 즉시 회상과는 유의미한 연관이 없었습니다([[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]).
- **프롬프트 인지는 학생이 아니라 학문을 따른다.** [[student-ai-conversations-cognitive-engagement-2026|Chang and Li (2026)]]는 116개 강의에서 나온 60,087개의 프롬프트를 분류하여 Bloom 수준 프로파일이 학문에 따라 달랐음을 발견했습니다 — STEM은 Apply 우세(20.8%), 사회과학은 Create 우세(33.8%) — 강의 수준의 분산이 학생 수준의 분산을 넘었습니다.
- **리터러시로서의 프롬프트 작성:** [[tracing-genai-literacy-interaction-patterns|GenAI 리터러시 추적]]과 [[aaai2026-prompting-literacy-k12|K-12 프롬프트 리터러시]] 연구는 프롬프트 작성이 핵심 [[ai-literacy]] 구성요소라고 봅니다.
- **초보자는 시행착오로 가고, 모델을 탓한다.** 텍스트 언어학 세미나에서 genAI 초보자 10명은 시행착오로 프롬프트를 다듬었고, 문맥 속 예시를 거의 활용하지 않았으며, 좋지 않은 출력을 자신의 프롬프트 구성이 아니라 LLM 탓으로 돌렸습니다([[llms-text-linguistics-teaching-2026|Brocca & Garassino (2026)]]).
- **강사가 프롬프트를 보여 주면 학생들은 그대로 베낀다.** 중학교 STEAM 집단 12개에서 기록된 310개의 프롬프트 가운데, 강사의 지시를 그대로 복사한 것이 47.1%로 자발적 탐구(28.7%)보다 가장 빈번한 학생의 입장이었습니다([[middle-school-genai-steam-interactions-2026|Zhao & Li (2026)]]).
- **규제적 순환이 프롬프트 공식을 이긴다.** 학부생 42명을 대상으로 한 준실험 예비 연구에서 IDEA 순환(의도, 해체, 표현, 적응)을 배운 학생들은 Role–Task–Context–Format 프롬프트 작성법을 배운 또래보다 모든 다섯 과제 범주에서 더 높은 품질의 프롬프트와 출력을 만들었습니다(조정된 프롬프트 향상 폭 +11.77 ~ +29.19점)([[idea-framework-metacognitive-genai-2026|Wang et al., 2026]]).
- **시스템 설계로서의 프롬프트 작성:** [[cotal-formative-assessment-scoring-2026|CoTAL]]은 [[formative-assessment|형성평가]] 채점에 [[human-in-the-loop-ai|인간이 순환하는]] 프롬프트 엔지니어링을 사용하고, [[choi-anchor-aes-prompting-2025|앵커 기반 프롬프트 작성]]은 [[automated-essay-scoring|자동 에세이 채점]]을 개선합니다.
- **프롬프트 작성은 진입 기술이지 학문이 아니다.** Gorsky(2026)는 소프트웨어 전문가를 위한 [[ai-literacy]]를 [[agentic-ai|에이전트]]에게 프롬프트를 작성하는 것이 아니라 에이전트를 관리하는 능력으로 규정하고, 프레이밍, 명세, 맥락 엔지니어링, 검증, 다중 에이전트 오케스트레이션, 감사 가능성을 교과과정이 평가해야 할 기술로 지목합니다([[ase-26-agentic-software-engineering-curriculum|Gorsky (2026)]]).
- **적응적 프롬프트 라우팅:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]]는 프롬프트 선택을 튜터링 시스템 자체의 일부로 다룹니다 — 14개의 교육적 특성에 대한 주제 인식 프롬프트 라우팅으로, 확률적 라우터가 대화마다 최적의 프롬프트를 선택합니다. 이것은 프롬프트 작성이 학습자의 기술에서 적응적 시스템 설계 수단으로 옮겨가게 하여 [[student-engagement|참여]]와 효율을 높입니다(실제 A/B 테스트에서 연습 전환율 28.1% 대 19.6%).
- **프롬프트 양식:** [[voice-text-prompt-problems-computing-education|음성 대 텍스트 입력 연구]]는 프롬프트 양식이 [[learning-gains|학습 결과]]에 영향을 주는지 검토합니다.
- **텍스트를 넘어서는 프롬프트 작성 — 과학 일러스트레이션.** 프롬프트는 분자 및 물리화학 도형을 빠르게 생성할 수 있지만, 국지적으로 설득력 있는 표현이 여전히 틀릴 수도 있고 표상적 편향을 담을 수도 있으므로, 학생들은 AI가 생성한 시각화를 화학 원리에 비추어 검증해야 하며 믿어서는 안 됩니다([[unesco-ai-guidelines-chemical-education-2026|Li et al. (2026)]]).
- **비계화된 프롬프트 작성:** [[guided-llm-scaffolding-independent-learning|안내된 LLM 비계 제공]]과 [[scaffolding-critical-engagement-genai-minority-students|비판적 참여 비계 제공]]은 구조화된 프롬프트 작성을 학습 중재로 가르칩니다.
- **지원이 서서히 줄어드는 코치 프롬프트:** ARPG+에서 실시간 코치는 여섯 차원에 걸쳐 프롬프트의 질을 진단하고 능력이 자라남에 따라 지원을 점차 줄여, 최종 프롬프트 질을 고정 템플릿의 5.95와 지원 없는 상태의 4.52에 견줘 7.82로 끌어올렸습니다([[ye-arpg-real-time-coaching-llm-prompting-2026|Ye et al. (2026)]]).
- **과제 분해에는 최적점이 있다.** 튜터 훈련 강의를 세 부분으로 나누어 생성했을 때 가장 높은 평가를 받은 강의가 나왔고(평균 14.67), 한 번에 생성한 경우는 가장 낮았으며(10.67), 다섯 부분으로 나누면 세 부분보다 다시 떨어졌습니다 — 중간 정도의 분해가 양극단을 모두 이깁니다([[lin-llm-interactive-lesson-generation|Lin et al. (2025)]]).
- **프롬프트 특권과 형평성:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]]는 프롬프트 전문성이 고르지 않게 분포한다는 것을 보여 줍니다 — 요청을 능숙하게 표현하는 사용자들이 같은 의도를 덜 능숙하게 표현하는 사람들보다 체계적으로 더 나은 출력을 얻습니다. 이들의 Prompt Equity Transformer는 프롬프트 최적화를 사용자에게서 AI 시스템으로 옮겨, 공정한 출력이 초보자에게 요구될 것이 아니라 모델에 설계로 내장되어야 한다고 주장합니다([[equity-in-ai-education|공정한]]).
- **프롬프트 다듬기는 정체되고, 그다음에는 미세 조정이 이어받는다.** L2 듣기 [[assessment]]에서 반복적 프롬프트 설계는 문항 질의 향상 폭이 줄어들었지만, 최적화된 프롬프트를 그대로 유지한 채 GPT-4.1을 미세 조정하자 맥락에 더 충실하고 균형 잡힌 문항이 나왔습니다. 프롬프트 기법이 아니라 모델 적응이 다음 수단임을 분리해 보여 줍니다([[gpt-item-generation-l2-listening-2026|Aryadoust & Wong, 2026]]).
- **[[situated-learning|상황화된]] 전문적 판단으로서의 프롬프트 작성.** 리터러시와 시스템 설계를 넘어, 프롬프트 작성은 하나의 *학문적 실천*으로 규정될 수 있습니다. 언론을 위한 [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Dierickx et al.의 분류 체계]]는 과제 정의와 프롬프트 작성을 한 영역의 인식론적·윤리적 규범 안에서 행해지는 전문적 판단으로 다룹니다 — 언론 업무를 명시적 과제로 옮기는 것(자료 수집 → 의미 구성 → 편집 → 출판/배포)은 가정과 우선순위와 [[ethics|윤리적 고려 사항]]을 드러내게 하고, 프롬프트 작성을 비판적 AI 리터러시를 위한 교육 도구로 만듭니다. 그 논리는 다른 지식 집약적 직업(법, 의학, 공공 정책)으로도 이전됩니다.
- **교육 명세로서의 프롬프트 설계.** Neto와 동료들(2026)은 의료 교육에서 GenAI에 관한 [[meta-analysis-systematic-review|체계적 검토]]에서 프롬프트 설계가 교육 명세의 한 형태로 기능하며, 전문가 저술에 암묵적으로 들어 있는 인지적 목표와 질 기준을 부호화한다는 것을 발견했습니다. 그러나 연구의 34.8%만이 생성된 내용을 교육 틀과 정렬했고, 34.8%만이 재현할 만큼 충분한 상세함으로 프롬프트 작성을 보고했습니다. Looi, Liu, Sun(2026)은 또한 절차적 영역에서 프롬프트 구조가 어떻게 교육 규칙(정확성 관문, 스포일러 방지 경계, 작별 관문)을 내장하여 [[llm]] 튜터링 행동을 제약할 수 있는지를 보여 줍니다.
- **평가 기준 기반 및 역할 인식 프롬프트 작성.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]]은 평가 기준을 인간의 교육적 의도와 기계 추론 사이의 의미론적 인터페이스로 다루는 평가 기준 기반 프롬프트 작성이 학생 설계 과제에 대한 LLM–인간 합의를 54.75%에서 81.25%로 끌어올렸음을 보여 주었습니다(Cronbach's Alpha 0.393 → 0.798). LLM을 위해 설계된 평가 기준은 정밀성과 유연성의 균형을 맞춰야 합니다. 너무 모호하면 자유로운 해석을 부르고, 너무 경직되면 모델을 패턴 매칭으로 전락시킵니다. 역할 인식 프롬프트 작성 — 같은 산출물을 강사, 동료 검토자, 연구비 검토자의 프롬프트 아래에서 평가하는 것 — 은 질적으로 구별되고 인식론적으로 다른 피드백을 만들어 내어, 프롬프트 설계가 출력의 정확성뿐 아니라 평가적 입장까지 형성함을 보여 줍니다.
- **프롬프트 비계 제공은 모델을 강사에게서 더 멀어지게 할 수 있다.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]]은 일곱 모델이 세 가지 프롬프트 전략 아래 문단 수준의 글쓰기 피드백을 생성하게 했을 때, 범주 이름이나 작업 사례를 더하는 것이 대부분의 모델에서 강사 분포와의 괴리를 오히려 키웠음을 발견했습니다. Mistral-7B만이 개선되었습니다(0.2695 → 0.2398). 제로샷 기준선이 가장 가까웠으므로, 초점 유형 지시는 가정이 아니라 시험해 볼 대상입니다.
- **평가를 위한 맥락 인식 프롬프트 작성.** 사전 훈련된 언어 모델의 맥락 인식 프롬프트 작성은 과정 데이터로부터 [[collaborative-learning|협력적 문제 해결]] 기술의 코딩을 자동화합니다. 이는 행동 코드 사이의 의존성을 모형화하고 인지적·사회적 능력을 융합하여, 수동 코딩 체계의 노동 집약성을 넘어 대규모·실시간의 구조화된 CPS 분석을 가능하게 합니다.
- **교수 계획을 위한 역할 기반 템플릿과 품질 평가 기준.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo and Tahir (2025)]]는 Role(R) – Instructions(I) – End Goal(E) 템플릿(RISEN에서 각색)과 "네 포인트와 한 줄" 최적화 평가 기준을 짝지은 프롬프트 틀을 아동 STEAM 예술 [[curriculum-design|수업 계획]]을 위해 실증적으로 개발했습니다. 이 기준은 표준화되고 실용적이며 참여를 끌며 완결된 것이고, 확장 차원을 더합니다. 이 기준을 프롬프트를 비판하고 다듬는 데 적용하자 생성된 계획이 현직 미술 교사가 수용할 만한 수준을 유지했고(평균 4/5 이상), 한 번에 생성하는 프롬프트가 방치한 채 남겨 둔 되풀이되는 빈틈([[personalized-learning|개별화]], [[pedagogical-safety|아동 안전]] 제약, 문화 편향)이 드러났습니다. 이는 프롬프트 템플릿과 명시적 평가 기준이 함께 교실 내 생성을 위한 품질 관리 비계로 기능함을 보여 줍니다.
- **역할과 제약 설계가 독립 변수일 때.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]]는 같은 모델과 플랫폼, temperature 0.3 위에 세워진 두 에이전트를 비교하면서, 유일한 차이가 프롬프트가 역할·기능·제약을 어떻게 명세하는지입니다. 하나는 한정된 교과서 지식 원천에서 답하는 전문 교사 에이전트이고, 다른 하나는 [[misconceptions]]을 진단하고 이해를 점검하도록 짜인 공감적 학생 중심 에이전트입니다. 역할 차이만으로도 학습 성취, 인지 부하, 몰입 경험, 지각된 공감이 달라져, 역할 명세가 양식상의 장식이 아니라 측정 가능한 효과를 지닌 교육 설계 결정임을 보여 줍니다([[pedagogical-agent]]).
### 더 넓은 개념들과의 연결

프롬프트 엔지니어링은 [[scaffolding]]과 연결됩니다 — 잘 설계된 프롬프트는 학생의 사고를 우회하는 것이 아니라 떠받칠 수 있습니다. 이는 효과적인 프롬프트 작성이 AI의 능력과 자신의 학습 목표 양쪽에 대한 이해를 요구한다는 점에서 [[metacognition]] 및 [[ai-literacy]]와 교차합니다. [[cognitive-offloading]] 연구는 AI 사용이 학습을 뒷받침하는지 약화하는지에 프롬프트의 질이 직접 연결된다는 것을 보여 줍니다.

- **글쓰기 능력이 프롬프트 작성을 이끌고, 둘이 함께 [[vibe-coding]] 성공을 예측한다.** 사전 등록된 CHI 2026 연구(N=100)에서 [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann & Su]]는 서면 의사소통 능숙도가 GUI 지향 바이브 코딩 성과를 예측함을 발견했습니다(r = .29). 인간이 채점한 프롬프트 질이 그 연결을 *매개*했습니다 — 이는 명확하고 구조화된 산문이 더 나은 자연어 프로그래밍 프롬프트로 옮아간다는 반응 과정 증거입니다. 글쓰기 능력과 [[cs-education|CS 성취도]]가 모두 독립적 예측 변수였고, CS 성취도(r = .39)가 고유 분산을 약 두 배 더 설명했으므로, 프롬프트 작성만 개선하는 것으로는 LLM 기반 개발에서 프로그래밍 기초를 온전히 대신하기 어렵습니다.
- **프롬프트 전략이 성과를 예측한다.** [[isaza-chatgpt-engineering-prompting-2026|공학 전공 학생 128명을 대상으로 한 실증 연구]]에서 AI 질의 효율(명확하고 잘 구조화된 프롬프트)과 AI 기반 [[problem-solving]](AI 출력을 추론에 전략적으로 통합하는 것)이 학업 성공의 가장 강한 예측 변수였습니다 — GPA를 통제한 뒤에도 마찬가지였습니다. 이는 프롬프트 작성이 학생이 AI와 함께 배우는 효과를 좌우하는 가르칠 수 있는 기술임을 보여 줍니다.
- **프롬프트 질뿐 아니라 프롬프트 양식이 결과를 따른다.** 튜터링 세션 1,540건에서 도출된 특성들은 개념적 질문을 시험 성과와 연결한 반면 과제 위임 행동은 부적 상관을 보였습니다 — 그러나 같은 특성들은 다음 학기에 재현되지 못해, 이것들은 안정된 기술이라기보다 행동 패턴임을 보여 줍니다([[principal-trait-analysis-human-ai-skills-2026|McNichols, Du, Lan (2026)]]).
- **쓸 수 있는 분류 체계, 그리고 실제로 효과가 있는 프롬프트 범주.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]]는 기술적 전략들을 3K 모델(*Kontext, Kernauftrag, Klarheit* — 맥락, 핵심 과제, 명확성)로 옮겨, 실천 지향적인 열한 개 범주를 만들고 각각에 좋음/보통/미흡 평가 기준을 붙였으며, 각각을 예비 교사들의 학습 목표에 대해 생성된 피드백의 실험적 변형으로 시험했습니다. 영역 특정 기술 용어가 결정적 범주였습니다 — 학문 용어를 일상적 의역으로 바꾸면 세 모델 모두에서 피드백 질이 유의미하게 떨어졌습니다(β = −0.412). 반면 구체적 사례를 더하고 사고의 사슬 지시를 제거하는 것은 첫 연구에서 기준선과 유의미한 차이가 없었고, 사례는 최고 성과 모델–프롬프트 조합으로 분석을 다시 돌렸을 때 도움이 되었습니다(β = 0.52). 프롬프트 질과 모델 선택이 함께 평가된 피드백 질 분산의 42.8%를 설명했는데, 이는 프롬프트 엔지니어링이 양식상 취향이 아니라 측정 가능하고 가르칠 수 있는 역량이라는 이 논문의 논거이며, 그 범주들의 효과 크기가 서로 바꿔 쓸 수 있는 것이 아님을 보여 줍니다.

## 연결된 개념
- [[pedagogical-patterns]] — 구조화된 사용 순서들 안의 비계 제공 층위
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — 포괄 개념: AI 기술과 기법(모델, LLM 훈련, 로보틱스, RAG, 에이전트)

## 연결된 문서
- [[wang-teacher-student-centered-agents-physics-2026]] — 물리 학습에서 설계 변수로서의 에이전트 역할과 제약 프롬프트 (Wang et al. 2026)
- [[gpt-item-generation-l2-listening-2026]] — GPT 기반 L2 듣기 문항 생성에서 프롬프트 작성 대 미세 조정 (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — 학생이 무엇을 묻는지가 중요하다: LLM 상호작용의 깊이, 과제 질, 즉시 회상 (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: 교육용 LLM 프롬프트 작성을 위한 실시간 코칭
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — 언론에서 비판적 AI 리터러시를 위한 LLM 과제의 과제 기반 분류 체계
- [[prompt-privilege-equitable-ai-access-2026]] — 프롬프트 특권: LLM 접근의 불평등을 측정하고 완화하기
- [[principal-trait-analysis-human-ai-skills-2026]] — 주요 특성 분석: 인간–AI 협력의 데이터 기반 특성
- [[llms-text-linguistics-teaching-2026]] — 텍스트 언어학 교육에서의 LLM
- [[idea-framework-metacognitive-genai-2026]] — 메타인지적으로 규제된 GenAI 사용을 위한 IDEA 틀
- [[lin-llm-interactive-lesson-generation]] — 상호작용형 튜터 훈련 강의의 LLM 생성 (Lin et al. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — 화학 교육으로 옮겨진 UNESCO AI 지침; 인식론적 표류
- [[isaza-chatgpt-engineering-prompting-2026]] — 프롬프트 작성 행동이 공학 전공 학생의 성과를 예측한다
- [[student-ai-conversations-cognitive-engagement-2026]] — 학생–AI 대화에서 학문과 연결된 Bloom 수준의 인지적 참여 (Chang & Li 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — 반복적 교육 설계의 도구로서의 LLM
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — 프롬프트 엔지니어링 대 프롬프트 리터러시: 다섯 단계 프롬프트 리터러시 순환을 갖춘 인간 중심 GenAI 참여 틀 (Miles, Haber-Curran & Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — AI 피드백 질의 예측 변수로서의 프롬프트 엔지니어링과 모델 선택 (Jacobsen et al. 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — 학생 글쓰기에서 LLM이 생성한 피드백의 초점과 교육적 적응성 평가
- [[middle-school-genai-steam-interactions-2026]] — 중학교 STEAM 집단이 47.1%의 프롬프트에서 강사의 지시를 그대로 복사했다
