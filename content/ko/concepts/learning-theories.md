---
title: 학습 이론
created: "2026-08-16T03:36:31-04:00"
updated: "2026-10-30T05:04:45-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories, metacognition, self-regulated-learning]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_faqs: [research-gaps-aied]
translation_of: concepts/learning-theories
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

> **학습 이론** — 학습이 어떻게 일어나는지를 설명하는 틀의 계열이며, 이 지식베이스의 이론 관련 아이디어를 아우르는 상위 개념입니다. [[ai-education|교육에서의 AI]]에서 학습 이론은 AI 시스템이 어떻게 설계되는지(그것이 구현하는 교수법)와 분야가 AI가 '작동하는지'를 어떻게 해석하는지를 모두 형성합니다. 동일한 도구도 [[constructivist]] 가정 아래에서는 비계로, [[behaviorism]] 아래에서는 강화 장치로, 인지 부하 이론 아래에서는 인지 부하 위험으로 보일 수 있습니다.

## 생각해 볼 질문들

- 여러분이 사용하거나 본 AI 튜터나 적응형 시스템을 떠올려 보십시오. 그것은 사람이 어떻게 학습하는지에 대해 어떤 가정을 했습니까 — 정답을 보상했습니까(행동주의), 이해를 구축했습니까(구성주의), 아니면 정신적 노력을 관리했습니까(인지 부하)? 제작자들이 그 가정을 밝힌 적이 있었습니까?
- 이 페이지는 되풀이되는 간극을 설명합니다. 담론은 구성주의를 표방하지만 AI 구현은 암기-피드백 메커니즘으로 기본값을 삼습니다. 깊은 학습을 지원한다고 주장하면서 실제로는 표면적 응답만 강화하는 도구를 어디서 보셨습니까?
- 동일한 AI 도구가 한 이론 아래에서는 성공으로, 다른 이론 아래에서는 실패로 보일 수 있습니다. 부풀려진 과제 점수는 행동주의에서는 학습으로 읽히지만 구성주의에서는 지속적 이해 구축의 실패로 읽힙니다. 학생이 실제로 배웠는지를 판단하는 데 어떤 렌즈가 더 공정합니까?
- 모든 AI 튜터는 설계자가 말하든 말하든 이론을 내장하기 때문에, '작동하는가?'가 잘못된 질문일 수 있습니다. 그것이 구현할 수 있는 이론들을 고려할 때, 교육용 AI에 대해 더 나은 질문은 무엇입니까?
- 생성형 AI가 교육자들로 하여금 새로운 이론을 고려하게 합니다. 인간과 AI 사이의 반복적 공동 구성으로서의 학습이라든가, 생애 전반에 걸친 인지적 동반자로서의 AI 같은 것입니다. AI의 부상이 진정으로 새로운 학습 이론을 요구합니까, 아니면 기존 이론으로도 여전히 충분합니까?
- 학습 향상 측정은 그 자체로 '이론 의존적'입니다. 한 이론 위에 세워진 도구는 다른 이론이 예측하는 향상을 포착하지 못할 수 있습니다. 이론적 입장이 다른 두 연구자가 동일한 데이터를 보고 AI 도구가 작동했는지에 대해 정반대의 결론에 이를 수 있는 방식은 무엇입니까?

## 들어가며

이 페이지는 이 지식베이스의 학습 이론 갈래를 위한 상위 개념입니다. 학습 이론은 교육에서의 AI의 중심에 있습니다. 모든 AI 튜터, 적응형 시스템, 피드백 도구가 사람이 어떻게 학습하는지에 대한 가정을 내장하기 때문입니다. 설계자가 그것을 밝히든 말하든 마찬가지입니다. 이 지식베이스는 이 이론들을 개별적으로 문서화하고, AI의 설계와 효과를 평가하는 개념적 렌즈로 다룹니다. 그 틀들을 시험하는 연구 분야는 별도의 페이지입니다. [[learning-sciences|학습 과학]]은 학습을 경험적으로 연구합니다. 실험, 교실 실험, 설계 기반 연구를 통해, 이론을 확인되거나 반증되어야 할 것으로 다룹니다. 반면 이 페이지는 틀 자체를 모읍니다. 이 지식베이스에서 두 표현은 구별되어 유지되며, 단수형 "learning science"는 이 이론 갈래를 가리킵니다.

### 학습 이론의 지형

이 지식베이스는 각각 고유한 개념을 지닌 학습 이론의 여러 계열을 문서화합니다.

- **고전 학습 이론.** [[behaviorism]](관찰 가능한 행동 변화로서의 학습, 강화와 암기 연습을 통해)와 [[constructivist|구성주의]](능동적 지식 구성으로서의 학습)는 AI 연구에서 가장 자 되풀이되는 두 극입니다. 이 분야는 "이름으로는 구성주의, 실천으로는 행동주의" 간극을 자주 보이는데, 담론은 구축을 표방하지만 AI 구현은 암기-피드백 메커니즘으로 기본값을 삼니다.([[ai-vocational-education-training-review]]) [[cognitive-psychology|인지주의]]는 세 번째 고전 극입니다. 내적 정신 표상의 변화로서의 학습이며, AIED의 특징적 기여([[knowledge-tracing]], [[cognitive-diagnosis]], [[student-modeling]], [[intelligent-tutoring]])에 가장 책임 있는 이론입니다.
- **사회문화적·발달 이론.** [[sociocultural-learning]]은 학습과 발달이 사회적 참여를 통해 일어나고 문화적 도구와 더 지식이 풍부한 타인에 의해 매개된다고 봅니다. [[sociocultural-learning|근접발달영역]], [[scaffolding]], 도제, 실천 공동체, [[distributed-cognition|분산 인지]]를 아우릅니다. AI 시대에 [[generative-ai|생성형 AI]]는 활동을 매개하면서 상호작용에 의존적 기여를 생성하는 *매개 행위자*로 점점 더 규정됩니다.([[generative-ai-mediational-agent-sociocultural-2026]])
- **인지와 인지 아키텍처.** [[cognitive-psychology|인지 심리학 / 인지주의]]는 이 계열의 상위 개념입니다. 인지 부하 이론(작업 기억의 한계가 교수를 어떻게 형성하는가), 이중 과정 이론(직관적이고 빠른 처리 대 숙고적이고 느린 처리), [[metacognition]](자기 학습의 점검과 조절)은 AI 도구가 관여하거나 우회하는 *내적* 메커니즘을 설명합니다.
- **동기와 자기 주도성.** [[self-determination-theory]](자율성, 유능성, 관계성), [[self-efficacy]](자기 능력에 대한 신념), [[self-regulated-learning]](목표 설정, 점검, 조정), [[motivation]]은 학습자가 AI와 상호작용하는 이유를 설명합니다.
- **학습 맥락과 활동.** [[experiential-learning]], [[active-learning]], [[project-based-learning]], [[collaborative-learning]], [[transfer-of-learning]], [[desirable-difficulties]], [[embodied-learning]]은 지속적 학습을 낳는 활동과 맥락의 유형을 기술합니다.

### 학습 이론과 학습 향상

학습 이론은 궁극적으로 그 결과로 평가되며, 이론이 증거를 만나는 지점이 이 지식베이스의 [[learning-gains]] 개념입니다. 각 이론은 무엇이 학습으로 *간주되는지*, 그것을 어떻게 측정하는지에 대해 다른 예측을 합니다. 행동주의는 암기-피드백 과업에서 관찰 가능한 수행 향상을 예측하고, 구성주의는 새로운 문제로 전이되는 더 깊은 이해를 예측하며, 사회문화 이론은 참여와 매개적 문제 해결의 향상을 예측하고, 인지 부하 이론은 교수가 작업 기억 한계를 존중할 때만 향상을 예측합니다. 이것이 [[learning-gains]] 측정이 이론 의존적인 이유입니다. 한 이론 위에 세워진 도구는 다른 이론이 예측하는 향상을 포착하지 못할 수 있습니다. AI 시대에 AI 보조 수행과 보조 없는 [[learning-gains|학습 향상]] 사이의 날카로운 괴리([[generative-ai-reduced-study-time-math]], [[stromberg-generative-ai-learning-penalty-secondary-2026]] 참조)는 이 렌즈를 통해 읽힐 수 있습니다. 행동주의적 읽기는 부풀려진 과제 점수를 성공으로 보는 반면, 지속적 이해에 초점을 맞춘 구성주의적 읽기는 동일한 증거를 학습의 실패로 봅니다. 따라서 이론을 [[ai-ed-evaluation|평가]]와 [[learning-gains|측정된 결과]]에 연결하는 것은, 주어진 AI 시스템이 실제로 어떤 이론적 렌즈를 충족하는지를 결정하는 데 필수적입니다.

### 학습 이론이 교육에서의 AI에 중요한 이유

학습 이론이 중요한 이유는 세 가지입니다.

- **AI의 효과를 예측하기 때문입니다.** AI 도구가 학습을 개선하는지 해치는지는 그것이 어떤 메커니즘을 활성화하는지에 달려 있습니다. 답을 내어 주는 튜터는 구성주의 렌즈에서는 학습을 해칩니다(구성을 우회하기 때문). 행동주의에서는 중립적입니다(강화하기 때문). 인지 부하 우려를 불러일으킵니다(구축하지 않고 전가하기 때문). 이 지식베이스의 [[cognitive-offloading]]와 [[cognitive-offloading|과의존]] 개념은 그 위험 측면을 포착합니다.
- **이론-실천 간극을 드러내기 때문입니다.** 경험적 연구는 AI 구현이 담론이 주장하는 것과 다른 이론을 구현한다는 것을 반복해서 발견합니다. 특히 구성주의 언어와 행동주의 암기 연습 메커니즘이 짝을 이룹니다.([[ai-vocational-education-training-review]]) 따라서 AI를 평가하려면 그것이 단순히 "작동하는지"가 아니라 시스템이 실제로 *어떤* 이론을 구현하는지를 묻는 것이 필요합니다.
- **적극적으로 재검토되고 있기 때문입니다.** 생성형 AI는 [[prompt-engineering|촉구하며]] 교육자들로 하여금 고전 이론이 충분한지를 재고하게 합니다. [[generativism-learning-theory|생성주의]]는 AI 시대의 학습이 인간 학습자와 AI 시스템 사이의 반복적 공동 구성으로 점점 더 일어난다고 제안하며, 고전적 네 이론(행동주의, 인지주의, 구성주의, 연결주의)을 대체하지 않고 확장합니다.([[generativism-learning-theory]])

### 최근 AIED 연구의 새로운 이론적 방향

최근의 이론 연구는 고전 갈래를 여러 방향으로 확장하며, 각각 AI를 중립적 도구로 다루지 않고 인간-AI 관계를 재중심화합니다.

- **인간-AI 공동 [[regulation]].** 발달 틀은 AI를 외부 도구가 아니라 생애 전반에 걸쳐 사고, 학습, 자기 통제를 공동 조절하는 **인지적 동반자**로 위치 짓습니다.([[ai-cognitive-partner-co-regulation-learning]]) 집행 기능, [[metacognition]], 분산 인지, 사회문화적 발달을 끌어들여, AI를 네 역할 — 비계, 메타인지적 지원, 외부 기억 / [[cognitive-offloading]] 시스템, 의사결정 동반자 — 로 규정하며, 이 틀은 아동기 중반 이후로부터 가장 적절합니다.
- **앙상블 인지.** [[philosophy-of-ai-in-education|철학적]] 틀은 사고가 개별 마음에만 존재하는 것이 아니라 인간과 인공 행위자 사이의 역동적 상호작용에서 드러나는 것으로 재개념화합니다.([[ensemble-cognition-philosophy-ai-education]]) "의식 패러다임"(자율성, 의식, 안정성 가정)에 도전하며, 분산된 행위성, 역동적 중심성, 인지적 조율, 다중 표상 통합, 맥락 민감적 전환이라는 다섯 특징을 밝히고, AI의 **기능적 행위성**을 도덕적 책임과 구별합니다.
- **[[self-directed-learning|자기 주도적]] 성장 / A2PL.** [[self-directed-learning|자기 주도 학습]]의 확장은 생성형 AI를 [[learning-analytics|학습 분석]]과 통합하여 **자기 주도적 성장**을 함양하며, 학습자를 위한 가능성 지향(A2PL) 모형을 통해 구현됩니다.([[self-directed-growth-generative-ai-learning-analytics]]) 학습자의 지향(인문주의적), 복잡한 사고(구성주의적), 자기 평가(실용주의적)를 단일 역량으로 재구성하며, GAI를 콘텐츠 제공자가 아니라 규정하지 않는 협력적 비계로 위치 짓습니다.

- **기만적 과잉 일반화.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, Stamper (2026)]]는 ACT-R / 지식-학습-교수 전통을 확장하여, 관찰된 정답이 언제 불완전한 조건부 이해를 가리는지를 이론화합니다. 학습자는 응용 제약을 생략한 과잉 일반화된 프로덕션을 컴파일하면서도 여전히 정확히 수행합니다. 적응형 숙달 시스템은 물론 전통적 교수조차, *언제 행동을 삼가야 하는지*를 시험하지 않으면 놓칠 수 있는 실패 양상입니다.
- **실행 가능한 KLI 이론.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]]는 지식-학습-교수 틀을 실행 가능한 계산 모형(ACT-R 방식 기억 메커니즘을 갖춘 Apprentice Learner 틀)에 근거 짓고, 인간 데이터의 교차 상호작용을 재현합니다. 순수 연습은 암기적 사실 기억을 돕고(망각을 지연시킴), 예제 통합 연습은 일반화 가능한 기술 습득을 돕습니다. KLI가 상수(사실) 지식을 기억 과정에, 변수(기술) 지식을 귀납에 묶기 때문에, 이 결과는 시험과 풀이 예시 권고 사이의 모순이 아니라 예측된 내용-처치 상호작용입니다. 그리고 기억 메커니즘이 있을 때에만 모형이 성공한다는 것은 연습과 예시가 서로 다른 보완적 역할을 한다는 것을 보여 줍니다.
- **AI 패러다임에 대한 존재론적 도전으로서의 구현.** [[videla-embodied-ai-education-choreography|Videla, Penny, Ross (2026)]]는 구현되고 실천하는 인지와 AI가 구현하는 표상적 언어 사이에 존재론적 간극이 있다고 주장하며, AI를 중립적 도구가 아니라 인식론적 중심에서 탈중심화해야 한다고 말합니다.

### 이 지식베이스가 이 갈래를 조직하는 방식

이 지식베이스는 학습 이론을 추상 철학으로 다루지 않고, 그것을 사용하는 교육에서의 AI 연구에 각각을 근거 짓습니다. [[constructivist]]와 [[behaviorism]] 페이지는 AI 설계가 각 이론을 어떻게 구현하는지(또는 배반하는지)를 문서화합니다. 인지 부하 이론, [[self-regulated-learning]], [[metacognition]], [[transfer-of-learning]]은 이론을 구체적 AI 메커니즘과 결과에 연결합니다. 이는 이 지식베이스가 [[feedback]]와 [[assessment]] 같은 다른 상위 영역을 다루는 방식과 같습니다. 고립된 페이지들이 아니라 상호작용하는 개념들의 정합적인 체계로 다룹니다.

### 학습 이론과 "AI에 관한 교육"

학습 이론은 [[ai-literacy|AI 리터러시]] 교육과정의 콘텐츠로도 등장합니다. 학습자들은 자신이 쓰는 도구 뒤의 [[pedagogy|교수법적]] 가정을 이해하기 위해 행동주의, 인지주의, 구성주의, 연결주의를 공부합니다.([[generativism-learning-theory]]) 이 갈래를 가르치는 것은 학생(과 교육자)에게 AI 제품이 왜 그런 방식으로 구축되는지를 비판하는 어휘를 — 그리고 그 메커니즘이 당면한 학습 목표를 섬기는지를 판단하는 어휘를 — 제공합니다.

- **매개 행위자.** Warschauer, Tate, Ritchie (2026)는 생성형 AI가 사회문화적 구분인 매개 수단과 사회적 상호작용 사이를 허문다고 주장하며, 행동을 매개하면서도 책임을 물을 수 없는 의존적 기여를 생성하는 체계인 *매개 행위자*를 제안합니다. 이는 도구와 사회적 동반자 사이의 하이브리드 공간에 놓입니다. 이로써 인간 중심의 참여 습관 다섯 가지 — 인간 인지의 우선성, 목적적 [[student-engagement|참여]], 감독 행위성, 인식론적 경계심, 반성적 자기 조절 — 가 도출됩니다.([[generative-ai-mediational-agent-sociocultural-2026]])
### AI 시대를 위해 제안된 이론들

고전적 계열과 더불어, 이 지식베이스는 AI 시스템과의 학습을 위해 특별히 쓰인 이론들을 문서화하며, 이것들은 오래된 이론들이 열어 둔 설계 함의를 담고 있습니다. [[yan-agentivism-learning-theory-ai-2026|에이전티비즘(Yan and Gašević 2026)]]은 중범위 사례입니다. 학습을 성공적 과업 완수가 아니라 인간 능력의 지속적 성장으로 정의하고, 네 메커니즘(위임된 행위성, 인식론적 점검과 검증, 재구성적 내면화, 지원 감소하의 전이)을 명명하며, 여섯 개의 시험 가능한 명제를 진술합니다. 그중 하나는, 문제 구성과 기준 설정, 정당화에 대한 학습자의 책임을 보존하는 AI 지원이 답을 내어 주는 지원보다 더 강한 학습을 낳는다는 것입니다.

[[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]]의 **교수법적 공생**은 더 강한 존재론적 주장을 합니다. 학습자는 도구 보조가 아닌 혼성적 인지를 지닌 *포스트휴먼* 존재이며, 네 원칙 — 인지적 전가와 증강, 인식론적 공동 구성, 메타인지적 공생, 역동적 정체성 형성 — 에 의해 조직됩니다. 이는 공생 포트폴리오 루브릭과 "인지 안무가" 교사 역할로 구현되며, 명시적으로 시험되지 않았습니다.

## 흔한 오해

**"학습 이론 가운데 하나가 옳고, 그래서 이론 선택은 취향의 문제다."** 각 이론은 무엇이 증거인지에 대해 서로 다른 주장을 하므로 같은 자료가 반대 결론을 뒷받침할 수 있습니다. 가장 분명한 사례는 부풀려진 숙제 점수입니다. 행동주의에서는 **학습**으로, 구성주의에서는 **지속적 이해를 쌓지 못한 실패**로 읽힙니다. 따라서 이론 선택은 개입의 성패를 결정하며, 문체적 선호가 아니라 측정 결정입니다.

**"깊은 학습을 지원하는 도구는 어떤 틀에서 보아도 깊은 학습처럼 보일 것이다."** 그것은 한 틀에서는 성공으로, 다른 틀에서는 실패로 보입니다. 그래서 이 분야의 결과 측정은 중립적인 것처럼 빌려 오는 대신 명시된 이론에 비추어 정당화되어야 합니다.

**"이론이 많을수록 더 잘 이해된 분야다."** 판정 없는 축적은 진보의 반대입니다. AI 시대를 위해 제안된 이론은 검증되는 속도보다 빠르게 늘어나며, 성숙의 표지는 경쟁하는 예측이 해결되는 것입니다. 그것은 이론들을 구별할 수 있는 설계를 요구하지, 이론들을 수용하는 목록을 요구하지 않습니다.

**"이론적으로 말해 'AI에 관한 교육'은 '교육에서의 AI'와 같다."** 둘은 서로 다른 갈래를 끌어옵니다. 하나는 학습자가 AI를 교과로 이해하게 되는 방식을, 다른 하나는 AI가 학습이 일어나는 방식을 바꾸는지를 묻습니다. 둘을 혼동하면 서로 다른 두 증거 기반을 섞은 문헌 검토가 되어 어느 쪽도 일관되게 보고하지 못합니다.

## 실천을 위한 함의

**교수자를 위해**

- 이론을 필요한 용도로 고르십시오. 학습이 어떻게 일어나는지 설명하는지, 학습자의 상태를 기술하는지, 어떤 실천이 왜 확산되는지 설명하는지입니다. 잘못된 층위를 적용하면 옳은 변수를 잘못된 예측에 견주어 측정하게 됩니다.
- 결과 측정의 이론적 약속을 명시하십시오. 동일한 자료에서 부풀려진 숙제 점수는 행동주의에서는 성공으로, 구성주의에서는 실패로 읽힙니다.
- 어떤 틀이 구성 간 차이를 예측하지 못한다면 그 틀은 여러분의 환경에서 시험될 수 없고 결정을 돕지도 못합니다.

**개발자를 위해**

- 여러분의 시스템이 구현하는 이론과 그것을 반증할 예측을 공개하십시오. 반증 가능한 차이가 없는 "구성주의에 근거함"은 내용 없는 주장입니다.

**연구자를 위해**

- 틀의 축적이 아니라 이론 간 판정을 위해 설계하십시오. 성숙은 어휘의 성장이 아니라 경쟁하는 예측이 해결되는 것으로 드러납니다.

## 연결된 개념

- [[behaviorism]]
- [[cognitive-psychology]]
- [[constructivist]]
- [[metacognition]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[self-determination-theory]]
- [[self-efficacy]]
- [[motivation]]
- [[sociocultural-learning]]
- [[scaffolding]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[desirable-difficulties]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[embodied-learning]]
- [[cognitive-offloading]]
- [[learning-design]]
- [[learning-sciences]]
- [[philosophy-of-ai-in-education]]
- [[ai-education]]
- [[pedagogy]] — 포괄 개념: 교육에서의 AI에 관한 교수법과 교수 전략

## 연결된 문서

- [[yan-agentivism-learning-theory-ai-2026]] — 인간-AI 상호작용을 위한 중범위 학습 이론으로, 네 메커니즘과 여섯 개의 시험 가능한 명제를 갖춤 (Yan and Gašević 2026)

- [[deceptive-overgeneralization-adaptive-learning-2026]] — 기만적 과잉 일반화: 적응형 숙달은 학습자가 언제 행동을 삼가야 하는지 알기 전에 연습을 멈출 수 있다 (An, McLaren & Stamper 2026)
- [[airis-hybrid-human-ai-cognition-2026]] — 하이브리드 체계에서의 AI 증강 탐구와 조절 (AIRIS)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[ai-cognitive-partner-co-regulation-learning]] — 인간-AI 공동 조절에서 AI를 인지적 동반자로 위치 짓는다; 생애 전반에 걸친 발달 틀
- [[ensemble-cognition-philosophy-ai-education]] — 앙상블 인지: 사고를 인간-AI 상호작용으로 재개념화하는 철학적 틀
- [[self-directed-growth-generative-ai-learning-analytics]] — 자기 주도 학습을 GenAI로 확장한 자기 주도적 성장과 A2PL 모형
- [[generativism-learning-theory]] — 생성형 AI 시대를 위한 새로운 학습 이론을 제안하며, 고전적 네 이론을 재고한다
- [[ai-vocational-education-training-review]] — VET 분야 AI의 구성주의/행동주의 이론-실천 간극을 문서화했다
- [[genai-educational-outcomes-meta-analysis]]
- [[elsayed-pedagogical-symbiosis-posthuman-learner]]
- [[videla-embodied-ai-education-choreography]]
- [[generative-ai-mediational-agent-sociocultural-2026]] — 매개 행위자로서의 생성형 AI
- [[kim-ai-productive-failure-adult-2026]] — 생산적 실패 기반 학습을 지원하는 AI 시스템 설계
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — 생산적 실패를 위한 LLM의 교수법적 조향
- [[lukesova-clue-before-correction-2026]] — 정정 전 단서: 자율 언어 학습을 위한 ChatGPT
- [[rachatasumrit-example-problem-ratio-2026]]
