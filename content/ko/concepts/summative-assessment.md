---
title: 총괄평가
created: "2026-08-19T17:30:00-04:00"
updated: "2026-09-30T11:35:26-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **총괄평가** — 한 단원, 강좌, 프로그램의 끝에서 학습자가 배운 것을 평가하고 인증하는 데 사용되는 평가로, 교수 도중 학습을 뒷받침하는 [[formative-assessment|형성평가]]와 대비됩니다. 총괄평가는 전형적으로 성적을 부여하고 진급을 관문처럼 제어하며 능력을 인증하는 고부담 시험 — 서면, 구술, 감독 하에 치러지거나, 폐쇄북으로 치러지는 — 의 형태를 취합니다. AI 시대에 총괄평가는 [[academic-integrity]]와 타당도를 둘러싼 핵심 쟁점이 되었습니다. [[generative-ai|생성형 AI]]는 감독이 없거나 과제형 과제에서의 수행을 부풀릴 수 있으므로, 총괄평가 형식의 선택 — 그리고 그것이 AI 대체에 어떻게 저항하는지 — 은 중대한 설계 결정이 되었습니다.

## 생각해 볼 질문들

- 총괄평가는 강좌가 끝날 때 학생이 배운 것을 인증하고, 형성평가는 그 도중 학습을 뒷받침합니다. 이 둘 사이의 경계가 흐려지는 것을 어디서 보셨으며, 이 둘이 서로 다른 기능을 수행한다는 것이 왜 중요할 수 있을까요?
- 이 페이지는 생성형 AI가 총괄평가를 동시에 두 방향으로 재편한다고 봅니다. AI가 시험을 채점하고, 학생들은 AI를 사용해 시험 기반 측정을 회피한다는 것입니다. 이 두 압력 중 어느 쪽이 타당도에 더 큰 위협이라고 생각하며, 왜 그런가요?
- AI가 답을 만들어낼 수 있어 감독이 없거나 과제형 과제가 타당도를 잃는다면, 평가가 어떻게 설계되어야 한다는 함의가 나오며, 그 과정에서 무엇이 희생될 수 있을까요?
- 이 페이지에 인용된 [[research-methods-aied|연구]]는 LLM이 인간과 같은 방식으로 에세이를 채점하지 않는다는 것을 발견했습니다. 자동 채점이 빠르고 일관적이지만 다르게 채점한다면, 그것은 [[bias-mitigation|공정성]] 문제인가요, 기회인가요, 둘 다인가요?
- 그 뒤의 작업이 AI에 의해 만들어질 수 있었다면, 고부담 결과(성적, 자격증, 입학)는 무엇을 의미할까요? 실제로 신뢰할 수 있는 평가를 어떻게 설계하시겠습니까?

## 들어가며

총괄평가는 형성평가와 근본적으로 다른 기능을 수행합니다. 다음 단계를 안내하는 것이 아니라 성취를 측정하고 인증하는 것입니다. 여기에는 단원 말 시험, 기말고사, 표준화 및 고부담 시험(입학 시험 등), 구술 논술, 누적적 수행 평가가 포함됩니다. 총괄평가 결과가 실질적 결과(성적, 진급, 자격증, 대학 입학)를 수반하기 때문에, AI 시대에 특히 큰 압력을 받습니다 — 자동 채점의 *대상*이면서, 동시에 학생들이 생성형 AI를 사용해 속이려 할 수 있는 *취약한* 측정으로서 말입니다.

## AI 시대의 쟁점: 타당도와 진실성

이 문서고의 연구는 생성형 AI가 총괄평가의 지형을 두 방향으로 근본적으로 재편했음을 보여줍니다. AI는 대규모로 시험을 **채점**하는 데 쓰이고, AI는 학생들에 의해 자신의 학습에 대한 시험 기반 측정을 **회피**하는 데 쓰일 수 있습니다.

- **채점자로서의 AI.** 총괄평가는 시험, 에세이, 단답형의 [[automated-assessment|자동 채점]]에 점점 더 의존합니다. [[llms-do-not-grade-essays-like-humans-2026|LLM 에세이 채점에 관한 연구]]는 [[llm|LLM]]이 인간과 같은 방식으로 에세이를 채점하지 않는다는 것을 발견하여, 고부담 자동 채점에 대한 타당도와 공정성 문제를 제기합니다. [[llm-automated-assessment-student-self-explanations|학생 자기 설명을 평가하는 LLM]]와 [[cong-confidence-asag-2026|자동 단답형 채점]]은 총괄 맥락에서 LLM 채점의 신뢰성을 탐구하고, [[psyscore-essay-scoring-zpd-feedback|심리측정학적으로 인식하는 틀]]은 자동 채점을 신뢰할 수 있고 적응적으로 유지하고자 합니다. 296명의 학생이 손으로 푼 일반화학 시험이 왜 선택적 감독이 필요한지를 보여줍니다. 멀티모달 LLM의 총점은 조교 채점과 높은 일치를 보였으나(R² = 0.91) 문항 수준 신뢰성은 형식에 따라 크게 달랐고, 거짓 양성(실제로 틀린 답에 점수를 주는 것)은 학생들이 거의 이의를 제기하지 않아 드러나지 않는 경향이 있습니다. 따라서 '모든 것을 채점하는' 균일한 AI 채점자는 신뢰도에 기반한 인간 이관 없이는 고부담 사용에 정당화될 수 없습니다([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **부정확한 문항 채점 속에서도 결과 합의는 살아남을 수 있다.** 공식 성적에 대해 멀티모달 LLM이 10,364쪽의 손으로 푼 물리 올림피아드 및 대학 시험을 채점했을 때 r = 0.93–0.96으로 상관되었고 동일한 다섯 명의 국제 대표팀을 복원했으나, 정확한 문항 부분 합의는 70%에 그쳤습니다 — 채점자는 그것이 알리는 결정에 의해 판단됩니다([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **회피 수단으로서의 AI.** 생성형 AI가 서면 질문에 답을 만들어낼 수 있으므로, 감독이 없고 과제형인 총괄평가 과제는 타당도를 잃습니다. [[generative-ai-reduced-study-time-math|감독 하의 무보조 측정이 필수적]]인데, 비감독 수행은 AI에 의해 부풀려지며, [[generative-ai-guardrails-harm-learning|가드레일이 있는(정답이 아닌 힌트를 주는) 도구]]는 방치된 AI가 일으키는 시험 페널티를 없앨 수 있습니다. [[chirikov-ai-grade-inflation-2026|Chirikov(2026)]]의 500,000개 이상의 성적에 대한 준실험은 그 메커니즘을 구체적으로 보여줍니다. ChatGPT 출시 이후 AI 노출 과제가 더 많은 강좌에서 A 학점의 비중이 13퍼센트 포인트 상승했고, 효과는 **과제 중심 강좌**에 집중되었습니다(삼중차분 추정에서 추가 16 pp) — 이는 감독 없는 과제가 진정한 [[learning-gains|학습 성과]]가 아니라 AI가 총괄 결과를 부풀리는 곳이라는 직접적 증거입니다.
- **AI가 생성한 시험.** [[assessing-quality-ai-generated-exams-field-2025|대규모 현장 연구]]와 [[ai-vs-human-assessment-efl-tpck-2026|EFL 평가 연구]]는 AI가 고품질 시험과 평가 과제를 *생성*할 수 있는지를 살핍니다 — 이것은 AI의 새로운 총괄 설계 용도입니다.

## AI에 저항하는 총괄평가 형식

이 문서고의 핵심 주제는 **총괄평가 형식이 AI 저항성을 결정한다**는 것입니다 — 과제가 살아 있고, 대면이며, 개별적으로 추궁되는 수행을 요구할수록, 학생들이 자신의 학습을 AI로 대체하기가 더 어려워집니다.

- **구술 시험과 평가.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton(2025)]]는 구술 시험이 저기술적이고 본질적으로 AI에 저항하는 총괄 형식이라고 주장합니다. 실시간의 상호작용적 대화는 암기가 아니라 이해, [[critical-thinking|비판적 사고]], 추론을 시험하고, 학생이 AI로 답을 생성하여 외우는 것을 막으며, 전문가의 실제 수행을 반영합니다. [[socratic-tests-conversational-assessment|소크라테스식 시험]]과 [[code-review-genai-cs1|코드 리뷰 면접]]은 이를 동적이고 대화적이며 면접 기반의 총괄평가로 확장합니다.
- **폐쇄북, 감독 하의, 무보조 측정.** [[generative-ai-reduced-study-time-math|증거]]와 [[stromberg-generative-ai-learning-penalty-secondary-2026|대규모 현장 데이터]]는 학생들이 AI를 사용할 때 부풀려진 과제나 재택 과제가 아니라 감독 하의 폐쇄북 시험이 실제 학습의 신뢰할 만한 신호임을 보여줍니다. [[responsible-assessment-ai-era-stanford-2026|책임 있는 평가]] 틀은 이러한 무보조 측정을 타당도 기반 재설계 안에 내장합니다. 시험이 온라인으로 남는 곳에서는 [[remote-proctoring|원격 감독]]이 그 역할을 떠맡으며, 이 문서고의 자동 감독에 관한 두 편의 고찰은 탐지 성과와 더불어 프라이버시와 [[bias-mitigation|공정성]] 우려를 발견합니다([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).

- **취약한 과제를 확인하는 쌍둥이와 짝짓기.** [[roe-assessment-twins-2026|Roe, Perkins & Giray(2026)]]는 학습적 가치를 위해 GenAI에 취약한 과제를 유지하되, 같은 성취를 평가하는 두 번째 과제와 짝지어 확인 임계값이나 가중치를 통해 성적을 상호의존적으로 만들어 쌍둥이가 결과를 인증하게 합니다.
## 고부담 및 표준화된 총괄평가

고부담 총괄평가 — 입학 시험, 표준화 시험, 자격 인증 — 는 지나치게 큰 결과를 수반하며 AI 시대 우려의 초점입니다. [[stromberg-generative-ai-learning-penalty-secondary-2026|생성형 AI 학습 페널티 연구]]는 고등학교(중카오)와 대학(가오카오) 입학 시험의 성과를 측정하여, 장기간 AI 사용 후 입학 시험 점수가 18–24% 하락했음을 발견했습니다. [[brcic-effortless-trap-productive-struggle-2026|The Effortless Trap]]과 [[genai-performance-vs-learning|수행 대 학습 연구]]는 AI 지원 과제에서의 이득이 무보조 고부담 측정으로 전이되지 않는다고 경고합니다.

## AI 시대의 총괄 대 형성

이 문서고의 평가 문헌은 [[assessment]]가 [[formative-assessment|형성적]] 기능과 총괄적 기능을 결합할 때 가장 효과적이라고 일관되게 강조하지만, AI 시대가 그 구분을 더 날카롭게 만듭니다. AI가 저부담, 비감독, 과정이 숨겨진 과제에서의 수행을 부풀리기 때문에, 학습이 실제로 일어났는지를 확인하는 결정적 점검은 **총괄(특히 감독하/폐쇄북/대면) 측정**이 됩니다. 이는 진짜이고 AI에 저항하는 총괄 과제(구술 시험, 코드 리뷰 면접, 감독 시험, 과정 기반 [[eportfolio|포트폴리오]])를 [[academic-integrity|진실성]]의 닻으로 삼으면서, 그 과정에서 형성평가가 학습을 뒷받침하도록 하는 평가 재설계를 동기 부여합니다. 건설적인 설계 대응은 [[authentic-assessment]]를 참조하십시오.

## AI 교육에 대한 함의

- **총괄 형식은 타당도와 진실성의 지렛대다:** AI에 저항하는 총괄 형식(구술, 감독, 폐쇄북, 대면)은 평가된 수행과 실제 학습 사이의 연결을 보존합니다.
- **감독하/무보조 측정이 신뢰할 만한 신호다:** 학생들이 AI를 사용할 때, 과제가 아니라 무보조 총괄 시험이 진정한 학습을 드러냅니다.
- **자동 채점은 심리측정학적 검토가 필요하다:** 고부담 시험에 LLM을 채점에 쓰는 것은 정확도뿐 아니라 신뢰성, 공정성, 타당도의 평가를 요구합니다.
 채점 오류는 또한 학점에 따라 다릅니다. 32건의 공중보건 시험 응답에서 LLM은 척도의 양 끝을 피했습니다(빠른 모드에서는 E나 F가 나타나지 않음), 최고 모델은 인간 학점과 50.0%에서 정확히 일치하고 90.6%에서 ±1 학점 이내였습니다([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **AI는 시험을 생성할 수도 있다:** AI 지원 시험 및 과제 생성은 그 자체로 품질 평가가 필요한 새로운 총괄 설계 응용입니다.
- **형식뿐 아니라 채점의 목적을 재고하라.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy(2026)]]는 피상적이고 파편화된 학습을 부추기고, 학생에게 통제나 투명성을 거의 주지 않으며, 내재적 [[motivation]]을 해치고, 스트레스와 [[well-being|불안]]을 부추르며, 실제 응용보다 회상을 주로 평가하면서 불평등을 영속화하는 전통적 총괄·규준참조 채점을 비판합니다. 이들은 재평가, [[mastery-learning|기준 기반 채점]], ungrading을 총괄 중심 관행을 누그러뜨릴 수 있는 채점 중심 혁신으로 자리매김하되, 이것들이 규범적 장벽 — 성적 곡선 그레이딩, 외적 신호(순위, 인턴십, 인증), 학생들의 도구적 태도 — 때문에 경영 교육에서는 여전히 주변에 머물러 있음을 인정하며, 제도적 지원 아래 점진적 실험을 권고합니다.

## 연결된 개념

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## 연결된 문서
- [[llm-grading-assistants-public-health-2026]] — LLM 채점 도우미는 고부담 에세이 평가에서 학점 척도를 압축하고 극단을 피한다

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — 진정하고 AI에 저항하는 총괄평가로서의 구술 시험 재고
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — 생성형 AI 학습 페널티: 감독하/폐쇄북 시험 증거
- [[chirikov-ai-grade-inflation-2026]] — 성적 인플레이션의 메커니즘으로서의 AI 과제 대체; 과제 중심 강좌(Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — 더 빠른 완료, 더 적은 학습: 감독하 측정이 필수적
- [[generative-ai-guardrails-harm-learning]] — 가드레일 없는 생성형 AI는 학습을 해친다
- [[assessing-quality-ai-generated-exams-field-2025]] — AI가 생성한 시험의 품질 평가
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM은 인간처럼 에세이를 채점하지 않는다
- [[llm-automated-assessment-student-self-explanations]] — 학생 자기 설명의 자동 평가를 위한 LLM
- [[cong-confidence-asag-2026]] — 자동 단답형 채점
- [[psyscore-essay-scoring-zpd-feedback]] — 심리측정학적으로 인식하는 특성 적응 에세이 채점
- [[socratic-tests-conversational-assessment]] — 소크라테스식 시험: 동적이고 대화적이며 멀티모달인 평가
- [[code-review-genai-cs1]] — CS1의 코드 리뷰 면접
- [[responsible-assessment-ai-era-stanford-2026]] — AI 시대의 책임 있는 평가
- [[test-driven-ai-assisted-learning]] — 테스트 주도 AI 지원 학습
- [[genai-oop-programming-assessments-2026]] — 객체지향 프로그래밍 평가에 대한 GenAI의 수행
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: 생산적 투쟁과 학습의 환상
- [[ai-vs-human-assessment-efl-tpck-2026]] — EFL에서 AI가 생성한 대 인간이 개발한 평가 과제
- [[roe-assessment-twins-2026]] — GenAI 시대에 평가 타당도를 강화하는 평가 쌍둥이(Roe, Perkins & Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — 손으로 쓴 물리 평가의 AI 채점(올림피아드)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
