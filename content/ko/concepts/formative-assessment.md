---
title: 형성평가
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-04T05:46:16-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl, ai-infused-assignment-playbook]
confidence: high
translation_of: concepts/formative-assessment
source_updated: "2026-10-04T05:46:16-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **형성평가** — 진행 중인 교수와 학습에 정보를 제공하기 위해 설계된 평가로, [[summative-assessment|총괄]] 평가와 대비됩니다. AI 교육에서 형성평가는 AI에 의해 변화되면서 동시에 AI에 필수적입니다. AI 시스템은 형성 문항과 피드백을 대규모로 생성하고, 검증하고, 적응시킬 수 있는 반면, 형성 피드백은 [[intelligent-tutoring|AI 튜터]]와 [[adaptive-learning|적응형 시스템]]이 학습을 지원하는 주요 메커니즘입니다. 이 지식베이스의 [[research-methods-aied|연구]]는 AI 생성 형성 문항, AI 생성 피드백, 그리고 이러한 시스템의 설계와 평가를 다룹니다.

## 생각해 볼 질문들

- 형성평가는 고리를 닫기 위한 것입니다. 학생이 모르는 것을 드러내고, *학습이 아직 진행 중인 동안* 행동할 수 있는 피드백을 주는 것. 그것이 총괄 평가와 근본적으로 어떻게 다른가요, 그리고 실천에서 둘이 언제 혼동될 수 있나요?
- AI는 검증 가능한 차원에서는 인상적인 정확도로 객관식 문항을 생성할 수 있지만, 교수적 판단 차원에서는 가장 약합니다. 기계가 정답을 잘 내놓지만 [[pedagogy|교수법]]적 판단이 더 약하다면, 그것을 무엇을 하는 데 신뢰해야 하며, 무엇을 인간이 계속해야 할까요?
- AI 생성 피드백은 학생이 그것을 실제로 *실행*할 때만 도움이 됩니다. 제안을 선택하고, 평가하고, 적용하는 '실행된 피드백' 조건이 단순히 피드백을 받는 경우보다 나은 성과를 냈습니다. 피드백 자체보다 실행이 더 중요하다면, 형성 피드백은 어떻게 설계되어야 할까요?
- 피드백은 정보 전달이 아니라 [[ethics|윤리]]적이고 관계적인 실천으로 묘사됩니다. 형성평가가 'AI 슬롭'으로 대량 생산될 때 무엇이 잃히며, 인간의 코멘트 뱅크와 관계적 배려가 무엇을 보존할 수 있나요?

## 들어가며

형성평가는 [[ai-education|교육에서의 AI]]의 중심에 있습니다. [[assessment]]와 [[feedback|학습 피드백]]의 접합점에 놓이기 때문입니다. 그 목적은 고리를 닫는 것입니다. 학생이 아는 것과 모르는 것을 드러내고, 개선하기 위해 행동할 수 있는 피드백을 제공하는 것. AI는 이것을 대규모로 가능하게 합니다. 문항을 생성하고, 응답을 채점하고, 개별화된 피드백을 전달하면서. 그러나 지식베이스의 연구는 품질이 문항 유형에 따라 극적으로 달라지며, 피드백은 학생이 실제로 실행할 때만 도움이 된다는 것을 보여 줍니다.

## AI 생성 형성 문항

AI 시스템은 여러 양식의 형성평가 문항을 생성하며, 유형에 따라 신뢰도가 달라집니다.

- **객관식 문항:** [[code-gen]]은 일곱 가지 교수법 차원에서 검증될 때 [[agentic-ai|에이전트형 AI]]가 코딩 이해를 위한 객관식 문항을 신뢰성 있게 생성할 수 있음을 보여 줍니다. 개념 정렬에서 **98.6%**, 피드백 품질에서 **79.9%**의 성공률에 이르러, AI가 검증 가능한 차원에서는 가장 강하고 교수적 판단 차원에서는 가장 약함을 시사합니다. 이는 더 넓은 [[automated-question-generation|자동 문항 생성]]과 연결됩니다.
- **쉽게 생성된 문항 은행은 형성 신호를 주지 않는다.** 10주 배포에서 AI 생성 연습 문항의 약 70%가 모든 학생에게 정답으로 풀렸고(p = 1.0), 15~20분마다 진행된 저부담 퀴즈는 잘 받아들여졌지만 교수를 적응시키는 데 거의 변별 정보를 담지 못했습니다([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **자동 에세이 채점:** 다중 에이전트 프레임워크(예: MASS)는 [[automated-essay-scoring|에세이 채점]]에서 독립형 [[llm|LLM]]보다 일관성을 개선하지만, 다중 에이전트 채점 결정의 [[explainable-ai|해석 가능성]]은 여전히 해결되지 않은 과제입니다.
- **형성 채점 파이프라인:** [[cotal-formative-assessment-scoring-2026|CoTAL]]은 사고의 연쇄(Chain-of-Thought) 프롬프팅을 [[active-learning|능동 학습]] 및 Evidence-Centered Design와 결합하여, 인간 참여형 [[prompt-engineering|프롬프트 엔지니어링]]으로 일반화 가능한 형성평가 채점을 만들어 냅니다.
- **고빈도 [[automated-assessment|자동 채점 평가]]:** [[automated-formative-assessments-a-level-sciences|A레벨 과학의 자동 형성평가]]는 고빈도 자동 채점 형성평가가 [[learning-gains|학습 성과]]에 미치는 영향을 검토합니다. [[science-education|과학]] 분야 단답형 자동 채점에 대한 범위 검토(2017–2024년 초)는 이 형성 단답형 활용 사례가 실제로 탄력을 받는 분야임을 확인합니다. BERT 계열 모델이 2021년까지 자동 채점을 지배했으며, ~2022년부터 더 큰 [[llm|LLM]]에 프롬프팅하는 방식이 등장했고, 도메인 보강·루브릭 인식·사고의 연쇄 모델이 가장 나은 성과를 냈습니다. 그러나 이 검토가 요구하는 포괄적 평가의 부재와 해결되지 않은 [[bias-mitigation|공정성]]·설명 가능성 격차는 이러한 시스템을 중재 없는 [[summative-assessment|총괄]]·고부담 용도로 확대하는 것을 경계하게 합니다([[auto-marking-short-answer-science-2026]]).

## AI 생성 피드백

지식베이스 연구의 상당 부분이 AI 생성 형성 피드백을 다룹니다.

- **실행의 문제:** [[ai-feedback-enactment-workflow-2026|Making AI-Generated Feedback Matter]](학생 13,037명; 자료 51,296건)는 피드백의 가치가 학생이 그것을 *실행*하느냐에 달려 있음을 보여 줍니다. AI 피드백 제안을 선택하고, 평가하고, 적용하는 **실행된 피드백** 조건이 단순히 지시된 피드백보다 나은 성과를 냈습니다.
- **루브릭이 기준을 담고 있으면 AI 피드백은 전문 교사의 것과 맞먹을 수 있다.** 출처를 모르게 하고 47개 대학 프로젝트 그룹에 걸쳐 무작위 배정한 결과, 공동 구성된 0–30 루브릭과 예시를 받은 LLM은 전문가 피드백과 비열등(non-inferior)하면서도 동등(equivalent)했습니다(+0.23, 90% CI [−0.46, 0.91]) — 보정한 것은 모델이 아니라 루브릭이었습니다([[ai-generated-feedback-higher-ed|Grion et al. (2026)]]).
- **피드백은 정보 전달이 아니다:** [[care-full-feedback-genai|The care-full craft of feedback]]는 피드백이 정보 전달이 아니라 윤리적이고 관계적인 실천이라고 주장합니다. 피드백은 학생이 그것을 해석하고 행동에 옮길 때에만 피드백이 되며, 대량 생산된 "AI 슬롭"과 인간 코멘트 뱅크 지름길을 대비시킵니다.
- **순차적 피드백은 역효과를 낼 수 있다:** [[sequenced-ai-feedback-learning|Sequenced AI feedback]](격려 → 힌트 → 정답, 자율성 증진을 위해 설계)는 무작위 실험(N=199)에서 [[student-engagement|참여]]와 긍정적 인식을 높였음에도 학습을 오히려 **해쳤습니다** — 피드백 설계에 관한 경계적 발견입니다.
- **학습자 중심 도구:** [[learner-centered-feedback-ai|PolyFeed]]는 머신러닝 제안 모델을 [[teacher-role|교사]] 실천과 결합하여, 교사가 AI 피드백 제안을 어떻게 받아들이고 적응시키는지를 보여 줍니다. [[ai-internal-feedback-evaluative-judgments|AI 지원 내적 피드백]]은 학부생이 [[evaluative-judgment|평가적 판단]]을 발달시키도록 돕습니다.
- **루브릭 유도 프롬프팅과 역할 인식 피드백:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]]는 루브릭의 반복적 공동 정제(성과 서술자를 명료화하고 암묵적 학습 지표를 명시적으로 수용하는 것)가 학생 설계 과업에 대한 LLM–인간 합의를 54.75%에서 81.25%로 끌어올렸음을(Cronbach's Alpha 0.393에서 0.798로 상승, 가장 큰 이득은 인지 부담이 큰 Iteration & Reflection 범주에서) 보여 주었습니다. 같은 모델에 교수자, 동료 검토자, 지원 검토자 역할로 프롬프팅하자 서로 다른 평가적 피드백이 생성되었고, 수정 후 LLM은 일부 인간 채점자보다 성과 기준을 더 일관되게 적용했습니다. 이는 루브릭 유도 LLM을 형성 피드백 환경에서의 보정과 공동 설계 파트너로 자리매김하게 하며, 인간 참여형 감독이 여전히 필수적임을 보여 줍니다.
- **합의 수치는 방향을 감춘다: 모델은 중간 범주로 기울 수 있다.** 대화 기반 평가의 대화 차례에 꼬리표를 붙인 LLM 평가자는 155개 사건 중 52.2%에서 인간 부호화와 일치했으나, 채점자(41.3%)보다 PARTIAL_CORRECT라는 모호한 꼬리표를 더 자주(53.5%) 사용했고, 채점자가 하나도 지목하지 않은 차례의 5.4%에 IRRELEVANT를 표시했습니다([[llm-multi-agent-conversation-assessment-2025|Hou et al., 2025]]).
- **AI 피드백은 참여를 유지하고 대규모로 성과 향상을 이끈다:** [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]]의 한 학기 현장 실험에서 개별 GPT-4 형성 피드백(Hattie & Timperley의 세 차원 — Feed-Back, Feed-Up, Feed-Forward — 전반에 걸쳐)이 여덟 개 개방형 과제에 걸쳐 가장 높은 참여를 유지하고, 학생 답변을 길게 만들며, 가장 강한 내용 학습 성과를 냈습니다. 이 효과는 신뢰할 수 있고 일관된 AI 제공에서 비롯되었는데, 양질의 서술형 또래 피드백이 실제로 전달되었을 때는 또래 결과가 AI의 것과 맞먹었기 때문입니다.
- **피드백의 미래:** [[feedback-futures-genai|Feedback Futures]]는 특별호를 종합하며, 문제는 [[generative-ai|생성 AI]]가 피드백을 낼 수 있느냐가 아니라 학습을 지원하는 피드백을 어떻게 설계하느냐라고 주장하고, 이 분야에 되풀이되는 긴장들을 정제합니다.

- **대부분의 형성 피드백은 순간적이지 지속가능하지 않다.** 실제적 평가 연구 37편의 범위 검토에서 23편은 즉각적 개선을 위한 형성 피드백을 사용했으나, 학생이 미래 맥락으로 전이하는 지속가능한 피드백을 사용한 것은 4편뿐이었습니다. 이는 현재 AI 피드백 도구가 재현하는 반응적 패턴입니다([[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan, Boud & Du (2025)]]).
- **개방형 양적 문제를 위한 진단 우선 피드백:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]]는 Engineering Economics Calculated Formula Questions에 대해 실시간 개인화 형성 피드백을 제공합니다. 이 영역에서는 이전까지 손으로 쓴 비구조적 해법이 AI 지원을 막았습니다. 문항별 [[machine-learning|XGBoost]] 기반이 학생이 제출한 수치 답변에서 루브릭 꼬리표가 붙은 오류를 진단하고(평균 정밀도 0.81, 재현율 0.79), 대화 기반 방식은 예측 신뢰가 낮을 때만 중간 답변을 요청하여, 문항 은행 웹 인터페이스 안에서 피드백 정확도와 수집 효율의 균형을 잡습니다.
- **LLM 형성 피드백의 규모와 한계(체계적 증거):** 42개 실증 연구(2023–2025)의 PRISMA 지침 [[meta-analysis-systematic-review|체계적 검토]]는 LLM이 교사 업무를 줄이고 빠른 개인화 피드백을 대규모로 제공할 수 있음을 — 특히 대규모이거나 [[higher-ed|고등 교육]] 집단에서 — 발견하지만, 피드백이 지나치게 일반적이거나 부여된 성적과 어긋날 때가 있고, 길거나 [[multilingual-learning|다언어]]적이거나 미묘한 과제에서 신뢰도가 떨어져, 형성 AI 피드백은 교육자 감독 아래 배치되는 것이 최선임을 뒷받침합니다([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **적응성은 분리 가능한 성분이지 장식이 아니다:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod & Breitwieser (2026)]]는 대부분의 LLM 피드백 연구가 가정으로 넘기는 직접 인과 검증을 제공합니다. 구조, 어조, 길이, [[motivation|동기 부여]]적 표현을 맞춘(5차원 품질 루브릭, κ = .76–1.00으로 검증) 전문가 작성 일반 지침과 GPT-4의 응답 종속 피드백을 맞붙였습니다. 사전 등록된 피험자 내 실험에서 독일 5·6학년 155명(평균 12.08세)은 여섯 개의 if-then 계획을 수정했습니다. 적응 피드백 아래 계획 품질은 중앙값 **2 → 5**로, 일반 지침 아래 **2 → 3**에 비해 올랐습니다(피험자 내 V = 10,440, p < .001, r = .86; 조건 × 시간 상호작용 추정치 = 1.68, SE = 0.14, p < .001, 사전 차이 없음). 아동은 적응 피드백을 더 도움이 된다(r = .67)고 더 동기 부여가 된다(r = .74)고 평가했고, 시도 단위 인식이 수정 이득의 크기를 예측했습니다. 이는 [[technology-acceptance-model|지각된 유용성]]이 정서적 부산물이 아니라 경로의 일부가 되게 합니다. 대조군 자체가 잘 설계되었기에, 이 연구는 피드백과 무피드백의 차이가 아니라 잘 설계된 비종속 지침을 넘어서는 부가가치를 보여 줍니다. 일반 지침은 진짜이지만 제한된 대체재이며 자신의 중앙값에서 고원에 이릅니다. 계획은 명시적 품질 기준을 지닌 핵심 [[self-regulated-learning|자기조절 학습]] 전략으로서 시험 사례가 되었는데, 이는 종속성 — 즉 [[scaffolding]]과 정적 지원을 구분하는 속성 — 을 한 문장 응답에서 직접 측정할 수 있게 합니다. 저자들은 적응성을 응답 종속 적응, 즉 학습자의 구체적 응답에 피드백 내용을 적응시키는 것으로 좁게 정의하여, 대화형 상호작용, 어조, 그리고 안정적 특성의 [[adaptive-learning|적응 학습]]과 구분합니다.
- **지각된 유용성은 실행 가능성을 따라간다:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]]는 프로그래밍 학생 144명이 LLM 생성 피드백 사례 893건을 5차원으로, 통합 보고서 237건을 6차원으로 평가하게 하며, 교육 수준만 달리하고 도메인, 과제, 도구는 고정했습니다. 평가는 전반적으로 호의적이어서, 개별 답변의 학생 수준 평균은 4.24~4.43, 보고서는 4.11~4.38이었으나, 실행 가능성과 유용성은 가장 낮은 평가를 받았고 동시에 지각된 유용성의 분산 76%를 설명하는 모형에서 실행 가능성과 지각된 정확도가 가장 큰 상대 가중치(32.6%와 29.0%)를 차지했으며, 동기 부여와 개인화가 사용 의도의 보고서 수준 모형(53% 설명)을 이끌었습니다. 실행 가능성이 [[feedback]] 연구가 제공하기 가장 어렵게 다루는 차원이므로, 이 패턴은 피드백에 적용된 [[technology-acceptance-model|기술 수용]]으로 읽힙니다. 유용성은 피드백이 얼마나 다듬어졌는지가 아니라 학습자가 행동할 수 있는지를 따라갑니다.

- **오프라인 합의는 실제 성과를 과장한다:** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]]의 GPT-4o 피드백 파이프라인은 제출물 362건 중 83%에서 교수의 점수를 0.5점 이내로 재현했으나, 기회 보정 합의는 중간 수준(ICC(2,1) = 0.49)에 그쳤고, 기존 스크립트에서 r = 0.92에서 교사 감독 실사용에서 0.57로 떨어졌습니다.
- **수정으로 가는 길에서 이해는 실행 가능성을 앞선다:** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao and Fan (2026)]]는 문제 수준 진단과 제안을 분리하고, 학생이 독립적 수정에 앞서 서면 해석 시트(재진술, 효과 설명, 불확실성 지목, 수정 계획)를 받게 했으며, 구조화된 교사 검토, 재평가, 성찰을 거치게 했습니다. 두 개의 온전한 학급(학생 96명; 288건의 학기 단위 관찰)에 걸친 세 번의 쓰기 주기에서 피드백 이해가 수정 품질과 가장 강한 연관을 보였고(r = 0.501, 실행 가능성 0.480과 진단 정확도 0.445보다 앞섬), 진단 집단은 쓰기 점수 3.58 대비 5.92의 이득을 얻어(Hedges' g = 1.12), 그 지렛대를 실행 가능성 단독이 아니라 학생의 진단 이해에 위치시켰습니다.

## 교육과정 기반 및 교육자 참여형 설계

[[ai-learning-tools-engineering-education-needs|LearnLens]]는 AI 형성평가의 세 가지 지속적 문제를 다룹니다. **오류 인식 평가**(표면적 실수가 아닌 미묘한 추론 오류를 포착하는 것), **주제 연계 기억 사슬**(잡음 많은 유사도 기반 [[rag]]을 구조화된 [[curriculum-design|교육과정]] 기반 검색으로 대체하는 것), 그리고 **교육자 참여형** 설계(완전 자동화가 아닌 교사 맞춤화와 감독)입니다. 이는 [[human-in-the-loop-ai]]의 더 넓은 긴장, 즉 전문가 검증을 동반한 확장 가능한 자동화와 연결됩니다.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl & Leuders (2026)]]는 도구가 원시 관찰이 아닌 자신의 주장을 산출할 때 교육자 참여형이 무엇을 뜻하는지를 날카롭게 합니다. 이들의 개념적 분석은 AI 생성 진단 추론이 질적으로 다른 증거라고 주장합니다. 그것이 이미 알고리즘적 해석의 산물이기 때문이며, 교사는 저자들이 **메타 진단**이라 부르는 추가 층위가 필요합니다. 추론을 의도적으로 수용하고, 거부하고, 수정하며 자신의 맥락 지식과 통합하는 것입니다. 이를 위한 DiaCoM 프레임워크를 명시하며, AI 생성 추론을 상황 특성으로, 수용·거부·수정 결정을 진단 행동으로 다루는 한편, 교사에게 필요한 사람 특성에 AI 시스템이 실제로 작동하는 방식에 관한 지식을 포함하도록 확장합니다. 현재 시스템이 대개 과업 정답도와 완료 시간 같은 성과 데이터에 기대므로, 동기 상태와 교실 역학은 대체로 부재하며, 이 논문은 책임 있는 반성적 행위자로 교사를 대시보드가 아닌 교사로 유지하고 알고리즘적 주장을 판단하는 것을 전문성 개발의 대상으로 규정합니다.

AI의 역할을 성취 수준에 맞추는 것은 관련된 설계적 조치입니다. 예비 과학교사는 ChatGPT를 저성취자에게는 Patient Tutor(인내하는 튜터)로, 중성취자에게는 Personal Coach(개인 코치)로, 고성취자에게는 Intellectual Sparring Partner(지적 스파링 파트너)로 묘사한 반면, 교수자는 어려운 내용의 최종 설명을 맡았습니다([[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom et al., 2026]]).

## 설계상 절충

| 차원 | AI 적합성 | 인간 요구 |
|------|----------|-----------|
| 사실적 정확성 | 높음 | 낮음 |
| 개념 정렬 | 높음 | 중간 |
| 오답 매력도 | 낮음 | 높음 |
| 피드백 깊이 | 낮음 | 높음 |
| 루브릭 일관성 | 중간 | 중간 |

## 평가, 피드백, 그리고 학습

AI 교육에서의 형성평가는 학습 과정 자체와 연결됩니다.

- **피드백 루프:** [[feedback|피드백 루프]]는 형성평가가 학습에 정보를 제공하는 메커니즘입니다. AI 튜터와 적응형 시스템이 이 고리를 대규모로 닫습니다.
- **자기조절 학습:** 학생이 진전을 점검하고 조정할 때 형성 피드백은 [[self-regulated-learning|자기조절 학습]]을 지원합니다. AI 피드백은 [[ai-internal-feedback-evaluative-judgments|평가적 판단]]을 대체하지 않고 길러야 합니다.
- **자동 채점은 주기의 일부 단계에 도달할 뿐 전부가 아니다:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen & Liu (2026)]]는 14주 준실험을 진행하여, 통역 학생 46명이 자동 채점 시스템에 매주 연기를 제출하고 즉각적 점수와 전사, 오류 표시, 참조 연기를 받았으며, 대조군은 학급 전체 교사 피드백만 받았습니다. 자동 집단이 전반적으로 더 많이 향상되었으나(d = 1.03), 그 이득은 결함이 분해 가능하고 신호가 신뢰할 수 있으며 척도가 민감한 곳에 머물렀습니다. 언어적 정확성과 논리적 일관성은 올랐으나 정보 충실성(인간 채점자와의 합의 r = 0.12)과 전달 유창성은 움직이지 않았습니다. [[self-regulated-learning|자기조절 학습]]도 이에 맞춰 고르지 않았는데, 실행과 점검이 점수 이득과 상관되고(r = 0.42) 계획과 정서적 동기는 척도 중간에 머물렀으며, 일부 학생은 낮은 점수 후 원인을 분석하는 대신 참여를 미뤘습니다. 이 시스템은 주기의 수행 단계에 도달했을 뿐 그에 앞서는 계획에는 도달하지 못했습니다.
- **자동 진단에서 생성된 연습으로:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo & Li (2026)]]는 음성-점수 정렬, 오류 정량화, Proximal Policy Optimization 층위를 음악 교육을 위한 하나의 폐회로로 결합하여, 리듬 오류 신호(재현율 91.2%, 특이도 98.4%)를 생성된 연습 트랙을 조종하는 보상으로 전환하고, 120명의 학부 음악 전공자를 대상으로 한 12주 준실험에서 시스템 집단에 유리한 유의한 Group x Time 상호작용(beta = 0.52)을 보고했습니다. 저자들은 이를 기술적 실현 가능성으로 규정하며, 실천적 읽기는 평가보다 선별입니다. 정밀도 89.7%는 지목된 리듬 오류 10개 중 약 1개가 오경보임을 뜻하고, 이 연구의 전문 검토자들은 음악적 표현 지원을 가장 약한 영역으로 평가했으므로, 자동 루프는 기술 훈련에 적합하고 표현적 판단은 교사에게 남습니다.
- **스캐폴딩:** [[scaffolding]]과 형성평가는 함께 작동합니다. AI는 적시의 힌트와 프롬프트를 제공할 수 있으나, 순차적 피드백 연구는 과도한 구조화를 경계합니다.

- **루브릭 품질이 모델 선택보다 자동 채점 합의를 더 움직인다.** Linux/bash 시험 응답 1,200건에서, [[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo et al. (2026)]]는 전체 루브릭과 참조 답안을 추가하는 것이 모든 모델의 성과를 끌어올렸음을(최선: Gemini 3.0 Pro, ICC(3,1) = 0.888, 인간 상한 0.949 대비) 발견했으며, 문항의 인지 수준이 높아질수록 합의가 단조롭게 떨어졌습니다.
- **AI 생성 루브릭은 오차 범위 안에서만 인간 채점과 일치했다.** 네 개의 AI 루브릭이 프로그래밍 응답 308건에서 인간 기준과 ±5점 이내의 통합 동등성을 만족했으나(상관 0.948–0.973), 다섯 개의 루브릭–과제 칸은 이를 넘었고, GPT-4.1/4o는 구조화된 루브릭에서 자유 형식 대비(−0.66 대비 −4.46) 체계적으로 엄격했습니다([[harmogen-ai-assessment-rubric-generation|Mendonça et al., 2026]]).
- **타당성과 품질:** AI 생성 형성 문항과 피드백의 [[ai-feedback-quality|품질]]과 [[assessment-validity|타당성]]은 반드시 평가되어야 하며, [[ai-ed-evaluation]]이 그 방법을 제공합니다.
- **AI 채점은 타당성 위협을 더한다.** AI 채점자가 과학적 추론 대신 언어 유창성 같은 구성 무관 특성을 보상할 수 있으므로, Stanford/ETS 백서는 약 100명의 리더 소집에서 정제되어 평가가 일회적 산출물을 인증하기보다 연속적이고 맥락 풍부한 증거를 축적해야 한다고 주장합니다([[responsible-assessment-ai-era-stanford-2026|McGee et al. (2026)]]).
- **취약한 과제는 유지하고 쌍둥이를 더하라.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]]는 과제형 에세이와 연구 보고서가 상당한 형성 가치를 지니므로 학습을 위해 유지되어야 하며, 같은 결과를 평가하면서 신뢰할 수 있는 총괄 증거를 제공하는 두 번째 과제와 짝지어져야 한다고 주장합니다.
## 위험: 감시로서의 평가

형성평가 시스템은 학습 지원 도구에서 행동 감시 기반 시설로 옮겨갈 수 있습니다. 적응형 튜터링을 가능하게 하는 바로 그 데이터 흐름이 [[governance]]이 약할 때 처벌적 추적을 가능하게 할 수 있습니다. 이는 [[privacy]] 및 [[well-being|학생 웰빙]]과 연결되며, 학습을 감시하기보다 지원하는 형성 시스템을 주장합니다.

## AI 교육에 대한 시사점

- **문항 유형을 AI 신뢰도에 맞추라:** 검증 가능한 차원(개념 정렬, 정확성)에는 AI를 쓰고, 교수적 차원(오답 매력도, 피드백 깊이)에는 인간 판단을 유지하라.
- **제공이 아닌 실행을 위해 설계하라:** AI 피드백은 학생이 그것을 선택하고, 평가하고, 적용할 때만 도움이 됩니다 — 실행을 뒷받침하는 작업 흐름을 구조화하라.
- **피드백 설계가 양보다 중요하다:** 순차적이거나 과도하게 구조화된 피드백은 역효과를 낼 수 있습니다. 학생의 의미 구성과 자율성을 지원하는 피드백을 우선하라.
- **교육자를 루프 안에 유지하라:** 교육과정 기반의 교육자 참여형 시스템은 관련성을 높이고 잡음을 줄입니다.
- **품질과 타당성을 평가하라:** AI 생성 문항과 피드백을 생성 속도뿐 아니라 품질, 타당성, [[equity-in-ai-education|형평성]] 측면에서 평가하라.
- **형성평가를 도구 모음이 아니라 철학으로 다루라.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]]는 더 넓은 고등 교육 문헌을 "학습을 위한 평가" 패러다임으로 종합하며, 형성적이고 지속적이며 개별화된 [[feedback]]을 단순한 도구 모음이 아니라 지고한 철학으로 규정합니다. 이는 형성과 [[summative-assessment|총괄]] 목적의 균형을 잡고, [[agency|학생 주체성]], 자기조절, [[metacognition|메타인지]] 기술을 전면에 내세웁니다. 이들은 이 철학이 실현될 수 있는 다섯 가지 상호 강화하는 실천([[authentic-assessment|실제적 평가]], 자기 평가와 [[peer-assessment]], 재평가, [[mastery-learning|기준 기반 채점]], 비채점(ungrading))을 밝히면서도, 그 수용이 고등 교육 분야 전반에서 매우 고르지 않다고 지적합니다.

- **지속적 평가는 형성 기록 자체를 재규정한다.** AIM-CAI 참조 구조(구현이 아닌 입장 논문)는 일회적 평가를 주요 증거 기반으로 삼는 것을 여섯 층위의 기반 시설로 대체할 것을 제안합니다. 플랫폼 전반에 걸친 증거 생성, 출처 맥락을 보존하는 직렬화, AI 매개 의미 번역, 심리측정 해석, 종단적 역량 프로파일, 연합 거버넌스가 그것입니다. 그 변화 표는 변화를 명시합니다. 과제별 피드백은 지도와 성찰을 뒷받침하는 종단적 피드백이 되고, 성적은 진화하는 역량 프로파일이 되며, 자격 증명은 투명한 발전 기록이 됩니다. 거버넌스 층위는 이 논문이 고집하는 바입니다 — 상호운용성 대 지역 자율성, 프라이버시 대 효용, 학습자 주체성 대 예측 자동화, 감시 대 지원 등 일곱 가지 명명된 긴장이 각각 위험과 대응에 매핑되며, 거버넌스 없는 지속적 추론이 지배적 문화 규범에 특권을 부여한다는 경고가 따릅니다. 새로움 주장은 통합적입니다. 구성요소들은 존재합니다. 기여는 그 구조와 거버넌스 지도입니다.([[mcnamara-aim-cai-continuous-assessment-2026]])

## 연결된 개념
- [[pedagogical-patterns]] — AI가 피드백의 일부를 제공할 때 형성평가가 취하는 순차적 형태
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — 총괄평가: AI 저항형 양식(구두, 감독 하 시험, 폐쇄 서적 시험)
## 연결된 문서
- [[llm-multi-agent-conversation-assessment-2025]] — 중간 범주로 기우는 평가자를 둔 대화 기반 평가를 위한 4에이전트 구조(Hou et al. 2025)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[nicola-richmond-programwide-assessment-genai-2025]] — Program-wide approaches to redesigning assessment in the GenAI era
- [[ai-feedback-enactment-workflow-2026]] — Making AI-generated feedback matter: from provision to enactment
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of GenAI
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[sequenced-ai-feedback-learning]] — Impact and pathways of sequenced AI feedback
- [[learner-centered-feedback-ai]] — Enhancing learner-centered feedback with AI
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing
- [[ai-internal-feedback-evaluative-judgments]] — Developing evaluative judgments through AI-supported internal feedback
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: formative assessment scoring with human-in-the-loop prompting
- [[automated-formative-assessments-a-level-sciences]] — High-frequency automated formative assessment
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: curriculum-grounded AI feedback
- [[genai-teacher-feedback-comparison]] — GenAI vs. teacher feedback comparison
- [[chatgpt-feedback-engagement-genai]] — ChatGPT feedback and engagement
- [[code-gen]] — CODE-GEN: validated MCQ generation
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Designing for authentic assessment
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated grading of Linux/bash exams
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — Adaptivity makes feedback effective: evidence from AI-generated feedback on children's plans
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Automated scoring, interpreting performance, and self-regulated learning (Chen & Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Teachers' diagnostic skills in AI-supported formative assessment: from diagnosis to meta-diagnosis
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Perceived usefulness and intention to use LLM-generated feedback in programming across three educational levels
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Adaptive teaching assistance combining generative AI and big data analytics in music education
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[mcnamara-aim-cai-continuous-assessment-2026]] — AI-Mediated Continuous Assessment Infrastructure (AIM-CAI): Connecting Learning Evidence Across Contexts and Time (McNamara & Hasnine 2026)
