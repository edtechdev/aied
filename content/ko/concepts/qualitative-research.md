---
title: 질적 연구
created: "2026-08-24T02:00:00-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
research_method: [interviews, case study]
confidence: high
methods: [qualitative-research, research-methods-aied]
translation_of: concepts/qualitative-research
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **질적 연구** — 사람들이 현상을 어떻게 *경험하고, 해석하고, 의미를 만드는지*를 연구하는 경험적 방법의 집합으로, 일반적으로 숫자가 아니라 말과 관찰, 산출물을 통해 이뤄집니다. [[ai-education|AI 교육]]에서 질적 방법은 학생과 교사가 [[generative-ai|AI 도구]]를 실제로 어떻게 경험하는지 — 표준화된 측정이 놓치는 의미, 긴장, 해악, 메커니즘 — 를 드러냅니다. 교육에서의 AI는 빠르게 움직이고 그 효과가 흔히 맥락, 인식, 그리고 [[trust]]나 [[agency]]처럼 논쟁적인 구성개념에 의해 매개되기 때문에, 질적 작업은 [[quantitative-research|정량적]] 설계와 나란히 필수적입니다([[research-methods-aied]] 참고).

## 생각해 볼 질문들

- 설문조사는 학생의 40%가 [[intelligent-tutoring|AI 튜터]]를 불신한다고 알려 주지만, 포커스 그룹은 그들이 그것을 불신하는 *이유*를 알려 줍니다. 어느 쪽이 더 실행 가능하게 느껴집니까? 그리고 백분율이 줄 수 없는 것을 '이유'는 무엇을 더해 줍니까?
- 질적 연구 결과는 일반적으로 통계적으로 일반화되지 않지만, 종종 '개념적으로 일반화'됩니다 — 다른 곳으로 이전되는 메커니즘과 역학입니다. 읽기 전에, 어떤 발견이 개념으로는 일반화되지만 통계로는 그렇지 않다는 것이 무슨 뜻입니까?
- 이 페이지는 인간–LLM 코딩 *일치*가 코딩 *질*과 같지 않다고 경계합니다. 인간의 합의가 정답 기준이 아닐 때 특히 그렇습니다. '두 검토자가 동의했다'는 것을 어떤 것이 옳다는 증거로 취급해 본 적이 있습니까? 언제 일치는 진실의 신호이고, 언제 그저 공유된 오류입니까?
- AI가 이제 질적 코딩을 규모 있게 보조할 수 있다면, 그것은 질적 연구를 가치 있게 만드는 해석적 깊이를 위협하는 것입니까, 아니면 단지 그 잡무를 자동화하는 것입니까? 특정 연구에서 어느 쪽이 일어나고 있는지를 어떻게 판단하겠습니까?
- 질적 작업은 큰 규모의 설문이 흔히 놓치는 — 소수 민족 학생, 회의적인 비사용자 — 대변되지 않은 목소리를 중심에 둡니다. 교육에서의 AI에 관해 들어 본 주장 하나를 떠올려 보십시오. 그것의 경험 중 누구의 경험이 아마도 대표 수치에 담기지 않았습니까?
- 여러 자신이 관심을 두는 논쟁적인 구성개념 하나 — 신뢰, 주체성, 또는 해악 — 를 고르십시오. 읽기 전에, 숫자가 아니라 말과 관찰로 그것을 어떻게 연구할지 개략적으로 그리고, 그렇게 함으로써 무엇을 잃을지 적어 보십시오.

## 들어가며

질적 연구는 하나의 방법이 아니라, *무엇을* 연구하고 증거를 *어떻게* 수집하고 분석하는지로 조직되는 방법의 집합입니다. 이것들을 하나로 묶는 것은 폭과 인과적 통제보다 의미 만들기, 맥락, 깊이에 대한 강조입니다. 질적 연구 결과는 일반적으로 통계적 의미에서는 **일반화되지 않지만**, 종종 *개념적으로는 일반화*됩니다 — 다른 상황으로 이전되는 메커니즘, 범주, 역학을 드러낸다는 뜻입니다. 지식베이스의 코퍼스에서 질적 작업은 AI 수용, 신뢰, 해악, [[teacher-role|교수]] 실천, 학습 과정을 연구하는 데 두드러집니다.

## 주요 질적 접근법

### 주제 분석
주제 분석은 질적 자료 — 일반적으로 인터뷰나 포커스 그룹 전사, 개방형 설문 응답, 문서 — 전반에 걸친 패턴("주제")을 식별하고, 코딩하고, 해석합니다. 이것은 지식베이스의 질적 연구에서 가장 널리 쓰이는 접근법입니다. 인터뷰와 개방형 응답은 그 자체로 [[self-report-measures|자기보고 자료]]이므로, 행동에 관해 주장할 수 있는 것의 한계를 공유합니다 — 자기보고 증거가 강한 곳과 무너지는 곳은 그 페이지를 참고하십시오. [[fouad-bentley-trust-utility-gap-physics-2026|물리학의 신뢰–유용성 간극에 관한 한 연구]]는 학생 인터뷰 자료의 주제 분석을 써서 [[discipline-specific-aied|학문 영역 고유의]] 회의주의와 수용 선호를 표면화하고, [[genai-teacher-feedback-comparison|GenAI 피드백과 교사 피드백의 비교]]는 유용성과 신뢰성에 관한 학생의 인식을 분석하며, [[ai-adult-learning-guidelines-dis2026|성인 AI 학습을 위한 지침]]은 전문가와 학습자의 입력에 대한 주제 코딩에서 설계 원리를 도출합니다. [[ai-changing-teaching-workflows|AI가 교수 업무 흐름을 어떻게 바꾸는가]]는 교수자의 서술에 대한 주제 분석에 의존합니다.

코딩 신뢰도는 일회성 점검이 아니라 지속적인 절차가 될 수 있습니다. [[preservice-teachers-noticing-ai-simulations-2026|Galiç 외(2026)]]는 304개의 noticing 진술을 Krippendorff's α = .803으로 코딩하고, 다섯 개의 중첩 사례에 대한 합의를 모니터링하며(합동 κ = 0.937), 재개하기 전에 합의가 0.85의 재보정 기준 아래로 떨어진 때마다 논쟁된 진술을 재코딩하고, 코딩된 진술은 평면적인 주제 목록이 아니라 어떤 차원이 공기하는지를 모형화하는 인식론적 네트워크 분석으로 들어갑니다.

### 근거 이론
근거 이론은 사전에 주어진 틀을 검증하기보다 *자료로부터* 이론을 구축하며, 이론적 포화에 이를 때까지 반복적 코딩(개방 → 축 → 선택)을 씁니다. 이것은 교육에서의 AI의 새롭게 부상하는 현상에 관한 새로운 이론을 구성하는 데 이상적입니다. [[liu-tool-tutor-crutch-programming-2026|Liu 외]]는 *도구인가, 교사인가, 목발인가*에 관한 근거 이론을 발전시킵니다 — [[cs-education|프로그래밍 교육]]에서 학생들이 AI 위로 인지적으로 어떻게 [[scaffolding|비계를 놓거나]] 부담을 전가하는지에 대한 세 가지 유형의 분류 — 이는 [[cognitive-offloading]]을 직접 이론화합니다. [[favero-critical-ai-tutors-empower-enslave-2025|비판적 AI 튜터에 관한 근거 이론 연구]]는 그러한 튜터가 학습자를 역량을 갖추게 하는지 예속시키는지를 검토합니다. [[genai-feedback-design-multisite-experiment|인간 중심의 GenAI 피드백 설계]]는 다지점 연구에 걸쳐 근거 분석을 씁니다. 이러한 근거 이론이 어떻게 이 분야의 이론 구축에 공급되는지는 [[theory-development-aied]]를 참고하십시오.

### 현상학과 현상기록법
현상학적 접근법은 현상의 *살아진 경험* — AI와 배운다는 것이 어떤 것인지 — 을 연구하고, 현상기록법은 사람들이 한 현상을 경험하고 이해하는 *질적으로 다른 방식들*을 연구합니다("기술의 범주"를 산출합니다). [[absent-cognitive-baseline-2026|부재하는 인지적 기준선]]은 AI 아래에서 자기평가의 살아진 경험에 의지해 구조적 간극을 이론화하고, [[metacognitively-discordant-completion-genai-2026|한 현상학적 연구]]는 의식적으로 이해하지 못한 채로 AI와 함께 작업을 완수하는 경험을 포착하며, [[genai-runaway-object-math-higher-ed|한 사회문화적·해석적 연구]]는 GenAI가 [[math-education|수학]]의 학문적 실천에서 어떻게 "통제 불능의 대상"이 되는지를 분석합니다.

### 담론 분석
담론 분석은 사용되는 언어가 의미, 정체성, 권력을 어떻게 구성하는지를 검토합니다 — 수업 담론, 글로 쓴 텍스트, 상호작용의 연쇄를 분석합니다. [[nspa-neuro-symbolic-pedagogical-alignment-2026|NSPA]]는 장기간에 걸친 수업 *담론 분석*(여기서는 계산적으로 보조됨)을 수행하여 수업 상호작용 이해의 방언 편향을 완화하고, [[scaffolding-critical-engagement-genai-minority-students|소수 민족 예비 학생들에 관한 한 연구]]는 [[prompt-engineering]] 과제에서의 협동적 *담론*을 분석합니다. 담론 분석은 [[educational-nlp]]와 결합할 때 질적 해석과 계산적 방법을 잇습니다.

[[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal (2026)]]는 담론 코딩이 헤아릴 수 있는 규칙으로 표현될 때 어떻게 감사 가능해지는지를 보여 줍니다. 366개의 초록과 91,405개의 토큰에 걸쳐, 한 행위자가 여섯 개의 개입 단어 안에서 서술어 앞에 설 때만 연관이 성립하며, 명사적 근접성은 배제되어 "AI 거버넌스"가 AI가 관장한다는 증거로 결코 세어지지 않습니다 — 이는 의존 구문 분석이 아니라 규칙 기반의 근사이며, 그 한계를 설계 자체가 밝힙니다.

### 관찰과 민족지
관찰 연구는 맥락 속에서 행동을 지켜보고, 민족지는 이를 한 장면에 대한 지속적이고 몰입적인 연구로 확장하며, 흔히 연구자가 참여 관찰자가 됩니다. [[trio-ethnography-llm-programming-education|세 명의 민족지]]는 LLM이 뒷받침하는 프로그래밍 교육에서 학생들의 해석이 어떻게 진화하는지를 추적하고, [[zha-ai-literacy-biology-case-study|한 수업 사례 연구]]는 [[biology-education|생물학]]에서의 [[ai-literacy]] 통합을 관찰합니다. 관찰 방법은 보고된 행동이 아니라 *실제* 행동(학습자가 AI로 무엇을 하는지)을 포착하며, 태도에 대한 [[educational-measurement|정량적 측정]]을 지배하는 자기보고 설문을 보완합니다.

### 사례 연구
사례 연구는 여러 자료 원천을 써서 경계가 정해진 사례(한 강의, 한 기관, 한 명의 학습자)를 심층적으로 조사하는 것입니다. [[drummond-genai-business-schools-framework-2026|한 경영대학 사례 연구]]는 GenAI를 위한 학생이 참여한 교수·학습 틀을 생성하고, [[zha-ai-literacy-biology-case-study|한 생물학 사례 연구]]는 AI 리터러시 통합을 문서화합니다. 사례 연구는 폭을 깊이와 맞바꾸며, 일반화보다 이론 생성과 이전 가능한 통찰에 강합니다. [[khlaif-assistive-genai-visually-impaired-2026|Khlaif 외(2026)]]는 세 곳의 팔레스타인 대학에 다니는 시각장애 학부생 21명의 질적 사례 연구를 제공하며, 반구조화 인터뷰의 주제 분석을 써서 GenAI가 [[inclusive-learning|포용적 학습]]을 위한 [[assistive-technology|보조 기술]]로 어떻게 기능하는지를 보여 줍니다 — 이는 정량적 측정이 놓리는 메커니즘(개인화된 적응, 교사의 증강, 교육적 동등성)을 표면화하는 사례 연구의 한 예입니다.

[[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan (2026)]]는 한 교사와 여덟 학생을 대상으로 영상, 경보 시스템 자체의 로그, 자극 회상 인터뷰를 삼각검증하여, 정서적 신호가 교사의 반응을 통해서만 의미를 획득했다는 것을 보여 줍니다. 독립적 코딩이나 검증된 정서 탐지 없이 단일 저자에 의한 2단계 에피소드 코딩은, 한 명의 코더가 수행하는 사례 분석이 담보할 수 있는 것의 한계를 표시합니다.

### 인터뷰와 포커스 그룹
반구조화된 **인터뷰**와 **포커스 그룹**은 위의 모든 접근법에 걸쳐 일차적인 자료 수집 도구입니다. 이것들은 풍부하고 맥락적인 진술을 이끌어냅니다. 지식베이스의 질적 코퍼스는 인터뷰(예: [[genai-expertise-pathways-sysadmin|전문성의 경로]])와 포커스 그룹(예: [[t2i-competence-paradox-2026|텍스트-이미지 역량 역설]], [[ai-adult-learning-guidelines-dis2026]]) 위에 상당 부분 세워집니다. 질은 신중한 질문 설계, 변화를 위한 표집, 그리고 엄밀한 분석에 달려 있습니다.

## 질적 연구가 지식베이스에 나타나는 방식

- **메커니즘과 과정.** 질적 작업은 AI가 돕거나 해롭게 되는 *이유*를 드러냅니다. [[same-ai-different-pathways]]는 질적 층위를 써서 맥락에 걸친 AI-[[sociocultural-learning|매개 학습]]의 메커니즘을 풀어냅니다.
- **신뢰, 주체성, 정체성.** 논쟁적이고 주관적인 구성개념은 흔히 질적으로 연구하는 것이 가장 좋습니다. [[t2i-competence-paradox-2026]]는 예술·디자인 학생들이 용이성, 위험, 창조적 정체성을 어떻게 타협하는지를 표면화하고, [[genai-runaway-object-math-higher-ed]]는 AI가 학문적 정체성과 실천을 다시 빚는 역할을 포착합니다.
- **형평성과 대변되지 않은 목소리.** 질적 작업은 큰 규모의 설문에서 흔히 배제되는 관점 — [[scaffolding-critical-engagement-genai-minority-students|소수 민족 학생]], [[becker-chatgpt-typology-physics-2026|회의적인 비사용자]] — 을 중심에 둡니다. 이것은 [[equity-in-ai-education]]와 연결됩니다.
- **유형과 분류 체계의 구축.** [[becker-chatgpt-typology-physics-2026|ChatGPT 수용에 관한 질적 유형론]]은 실용적 사용자와 회의적인 비사용자를 구별합니다 — 이후 설문 도구 설계에 정보를 주는 범주들입니다.
- **문서 전반에 걸친 비교 가능한 코딩.** [[genai-governance-australian-higher-ed-2026|Poudyal (2026)]]는 15개의 고정된 시나리오를 20개 대학의 공개 정책에 적용하여 300개의 비교 가능한 분류를 얻고, 독립적인 두 번째 코더가 그 중 57.3%만 일치했다고 보고합니다(κ = 0.395) — 코딩 체계의 취약성을 합의를 밝히지 않은 채로 두는 대신 가시적으로 만듭니다.

## AI와 질적 분석

최근의 두드러진 발전 하나는 질적 코딩을 보조하는 데 [[llm|LLM]]을 쓰는 것입니다. 지식베이스의 증거는 경계심을 담고 있습니다. [[human-vs-llm-ordered-coding]]는 LLM 코딩과 인간 코딩이 갈라지며 오류가 시간적 분석을 통해 누적된다는 것을 보여 주고, [[agreement-not-quality-llm-coding-verification|일치는 질이 아니다]]는 인간의 합의가 정답 기준이 아닐 때 인간–LLM 코딩 *일치*가 코딩 *질*과 같지 않다는 것을 보여 줍니다. LLM 보조 코딩은 질적 분석을 확장하고 가속할 수 있지만, 그 산출은 [[human-in-the-loop-ai|인간의 판단]]에 대해 검증되어야 합니다 — 이것은 질적 연구와 [[educational-nlp]] 및 [[ai-ed-evaluation]]의 중요한 교차점입니다.

**유창한 산출의 문제와 담보가능성(warrantability).** [[chain-behind-claim-warrantability-2026|Holster (2026)]]는 AI 보조 질적 작업에 정확성과 공개가 불충분한 기준인 이유를 날카롭게 합니다. LLM은 코퍼스를 몇 분 만에 유창한 주제, 인용, 보급 주장으로 재조직할 수 있고, 그렇게 하여 그것을 산출한 분석 경로를 감출 수 있으며 — 사람들은 처리하기 쉬운 유창한 산출을 더 참되게 평가하는 경향이 있습니다. Holster는 정확성과 공개에 더해 **담보가능성(warrantability)**을 제안합니다. AI 보조 해석은 자료에서 주장으로 가는 경로가 *조사 가능하고, 이의 제기 가능하고, 수정 가능한* 상태로 남아 있을 때 담보가능합니다. 그것의 구성적 장치는 **의미 렌즈**(추상화의 여러 수준에 걸친 코퍼스의 문서화된 재조직)와 **담보 산출물**(자료에 연결된 주제 표, 렌즈 스택, 증거의 흐름)의 주장 상대적 보고입니다 — 유창한 분석이 역추적 가능한 경로 기록도 산출하도록 도구에 설계되어야 합니다. 이것은 이 분야의 감사 추적 전통을 생성형 시대로 확장하고, 최종 해석 외에 검토자가 이의를 제기할 만한 구체적인 것을 제공합니다.

- **신뢰도는 [[agentic-ai|다중 에이전트]] LLM 코딩에서 정확성이 아니다.** 문헌에 기반한 파이프라인에서 두 AI 코더가 독립적으로 코딩하고 논쟁하며 불일치를 조정한 결과, 모든 자료와 라벨에서 코더 간 합의는 Cohen's kappa 0.85를 넘었으나 기준 F1은 0.31에서 0.89(평균 0.68, SD 0.16)에 걸쳤습니다 — 둘 다 틀린 에이전트 사이의 높은 합의입니다. 더 긴 코드북(t = -11.702)과 더 유사한 발췌(t = -9.249)는 초기 정확성을 낮추었고, 논의의 차례는 정확성과 양의 상관이 있었으며(t = 7.997), 올바르게 해결된 갈등과 협동 모드는 음의 상관을 보였으므로(t = -9.720과 -8.420), 수렴은 정확성의 약한 대용물입니다. 실천적 함의는 AI 보조 코딩이 에이전트 간 합의가 아니라 인간 준거 자료에 대한 점검표 수준의 판정을 질의 신호로 필요로 한다는 것입니다.([[llm-qualitative-coding-consensus-2026]])

## 강점과 한계

- **강점:** 깊은 생태학적·개념적 통찰; 예상 밖의 현상, 위험, 메커니즘을 표면화; 이론 구축에 필수적([[theory-development-aied]] 참고); 의미, 맥락, 논쟁적인 구성개념을 포착; 대변되지 않은 관점을 중심에 둠; 표준화된 측정이 뒤처지는 빠르게 움직이는 현상을 연구하는 데 강함.
- **한계:** 제한된 통계적 일반화; 해석적이며 연구자 의존적(신뢰도 우려); 작은 표본; 인과 주장에 대한 더 약한 뒷받침; 연구 전반에 걸친 종합이 어려울 수 있음; 시간과 노동 집약적.

질적 방법과 정량적 방법은 경쟁자가 아니라 보완재입니다 — 이들이 어떻게 대비하고 삼각검증되는지는 [[research-methods-aied]]를, 이들을 결합하는 설계는 [[mixed-methods-research|혼합 방법]]을 참고하십시오.

## 연결된 개념
- [[research-methods-aied]]
- [[mixed-methods-research]]
- [[quantitative-research]]
- [[theory-development-aied]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[educational-measurement]]
- [[educational-nlp]]
- [[ai-ed-evaluation]]
- [[equity-in-ai-education]]
- [[trust]]
- [[agency]]
- [[cognitive-offloading]]
- [[self-report-measures]]

## 연결된 문서
- [[chain-behind-claim-warrantability-2026]] — AI 지원 질적 분석을 위한 정당화 가능성 기준
- [[liu-tool-tutor-crutch-programming-2026]] — 도구인가, 튜터인가, 목발인가: AI 지원 프로그래밍에 관한 근거 이론
- [[trio-ethnography-llm-programming-education]] — LLM이 지원하는 프로그래밍에서 해석의 변화에 관한 3인 민족지
- [[absent-cognitive-baseline-2026]] — AI 네이티브 학생의 자기 평가에 나타난 구조적 격차에 관한 이론화
- [[t2i-competence-paradox-2026]] — 텍스트-이미지 생성형 AI 사용에서의 역량 역설
- [[fouad-bentley-trust-utility-gap-physics-2026]] — 물리 교육에서의 신뢰-유용성 격차
- [[genai-teacher-feedback-comparison]] — 생성형 AI와 교사 피드백의 비교: 학생의 인식
- [[hazra-safetutors-pedagogical-safety-2026]] — AI 튜터의 안전과 교수학적 해악
- [[zha-ai-literacy-biology-case-study]] — 생물학 수업에 AI 리터러시를 통합한 사례 연구
- [[becker-chatgpt-typology-physics-2026]] — 물리학에서 ChatGPT 도입에 관한 질적 유형론
- [[scaffolding-critical-engagement-genai-minority-students]] — 소수 민족 학생들의 프롬프트 엔지니어링에서 나타난 협력적 담론
- [[human-vs-llm-ordered-coding]] — 질적 데이터에 대한 인간과 LLM의 순서 코딩 비교
- [[agreement-not-quality-llm-coding-verification]] — 일치는 질이 아니다: LLM 질적 코딩 검증에서
- [[same-ai-different-pathways]] — 맥락에 따른 AI 매개 학습 메커니즘 풀어내기
- [[drummond-genai-business-schools-framework-2026]] — 사례 연구를 통해 학생의 시각에서 구성한 생성형 AI 틀
- [[favero-critical-ai-tutors-empower-enslave-2025]] — 비판적 AI 튜터: 해방하는가, 예속하는가
- [[genai-runaway-object-math-higher-ed]] — 고등교육 수학에서 통제를 벗어난 대상으로서의 생성형 AI
- [[khlaif-assistive-genai-visually-impaired-2026]] — 시각장애 학습자를 위한 보조 생성형 AI
