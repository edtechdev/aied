---
title: 설계 기반 연구
created: "2026-08-24T02:30:00-04:00"
updated: "2026-09-30T07:37:28-04:00"
type: concept
research_method: [literature review]
confidence: high
methods: [design-based-research, research-methods-aied]
translation_of: concepts/design-based-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **설계 기반 연구(design-based research, DBR)** — 실제 맥락에서 교육적 개입을 반복적으로 설계하고, 구현하고, 정제하는 방법론적 접근으로, 이론과 설계, 그리고 현실의 실천 사이를 순환하며 사용 가능한 산출물과 검증된 설계 원칙을 함께 산출합니다. [[ai-education|교육에서의 AI]]에서 DBR은 교실의 지저분한 현실 속에서 작동해야 하는 AI 학습 환경, [[pedagogy|교수법적]] 모형, 교사 훈련 프로그램을 개발하는 데 선택되는 방법입니다 — [[rct|실험]]의 인과적 통제를 생태적 진실성과 반복적 정제와 맞바꾸면서.

## 생각해 볼 질문들

- 설계 기반 연구는 실제 교실에서 개입을 반복적으로 설계하고, 구현하고, 정제하며, 이론과 실천 사이를 순환합니다. 이것이 통제된 실험과 근본적으로 다른 점은 무엇이며, 교실을 연구하는 연구자가 이것을 선호할 이유는 무엇입니까?
- DBR은 의도적으로 인과적 통제를 생태적 진실성과 맞바꿉니다. 만약 무엇이 학습 향상을 일으켰는지를 확실히 말할 수 없다면, 그 지식은 여전히 무엇을 할 만한 가치가 있습니까?
- DBR은 한 번에 두 가지를 산출합니다. 사용 가능한 산출물과 검증된 설계 원칙. 이 두 산출물 중 어느 쪽이 여러분에게 더 중요합니까 — 작동하는 도구입니까, 아니면 다른 곳에 적용할 수 있는 원칙입니까?
- DBR의 강점은 높은 실천적 관련성이고, 한계는 발견들이 맥락에 얽매어 일반화하기 어렵다는 것입니다. 언제 여러분은 DBR의 발견을 매우 다른 상황에 적용할 만큼 신뢰하겠습니까?
- 도움받지 않는 통제된 결과 측정이 없으면, DBR의 학습 향상은 그것이 연구하는 바로 그 'AI에 의한 부풀려진 수행' 문제를 반영할 수 있습니다. DBR 연구가 보고하는 향상이 실제로 학습을 의미하고 지원된 수행이 아니게 하려면 어떻게 설계하시겠습니까?

## 들어가며

DBR은 데이터가 아닌 *설계* 전통입니다. 그것은 [[quantitative-research|양적]]/[[qualitative-research|질적]]/실험적 대비에 깔끔하게 들어맞지 않습니다. 그것은 의도적으로 세 가지 모두의 요소를 결합합니다 — 반복적 주기에 걸쳐 결과 데이터와 과정 데이터를 모두 수집하여 — *"이 AI 학습 환경이 실제로 작동하도록 어떻게 설계하는가?"*라는 질문에 답하기 위함이며, *"X가 Y를 일으키는가?"*가 아닙니다. 이것은 (설계 과정을 명시하는) [[learning-design]]과 (정제에 영양을 주는) [[usability-research|사용성 평가]]에 밀접하게 관련되지만, 지속적이고 이론 주도적인 다중 주기의 성격, 그리고 실천을 개선하는 것 *동시에* 이론을 생성하는 이중의 목표에 의해 구별됩니다.

## DBR 주기

DBR은 단일 설계가 아니라 일반적으로 다음을 포함하는 반복적 순환입니다.

1. **요구 분석** — 실제 환경 속에서 문제, 맥락, 학습자를 이해하는 것.
2. **설계** — 개입과 그것의 기저에 놓인 이론적 근거를 명료하게 표현하는 것.
3. **구현** — 개입을 실제 교실이나 프로그램에 배치하는 것.
4. **정제** — 데이터를 분석하고, 설계를 수정하며, (종종 여러 주기에 걸쳐) 반복하는 것.
5. **이론과 산출물의 산출** — 사용 가능한 개입과 일반화 가능한 설계 원칙, 또는 검증된 모형을 함께 산출하는 것.

전범적인 AIEd 사례는 [[ai-assisted-collaborative-learning-model-dbr|AI-Assisted Collaborative Learning (AACL) Model 연구]]입니다. 이 연구는 4단계 DBR 주기 — 요구 분석, 모형 설계, 인도네시아 학부생을 대상으로 한 8주간의 교실 구현, 모형 정제 — 를 실행하며, 4단계 학습 주기(문제 파악 → AI가 지원하는 [[collaborative-learning|협력적]] 탐구 → 협력적 [[problem-solving]] → 성찰과 발표) 위에서 반복했습니다.

## DBR이 지식 베이스에 나타나는 방식

- **학습 모형의 개발.** [[ai-assisted-collaborative-learning-model-dbr|The AACL Model 연구]]는 [[higher-ed|고등교육]]에서 [[critical-thinking|비판적 사고]]와 문제 해결을 겨냥한 AI 지원 협력적 학습 모형을 개발하고 평가하는 데 DBR을 사용합니다.
- **AI 리터러시 교사 훈련의 구축.** [[genai-literacy-training-teacher-education-dbr-2026|Le et al.]]은 [[teacher-education]] 학생들을 위한 DBR [[generative-ai|GenAI]] 리터러시 훈련 개입을 개발하고 평가합니다. [[human-centered-ai-teacher-educators-2026|Baran et al.]]은 2023–2025년에 걸쳐 Human-Centered AI 원칙에 기반한 비판적 [[ai-literacy|AI 리터러시]]를 위한 전문적 학습을 설계하는 데 DBR을 사용합니다.
- **[[governance|제도적]] 기준의 설계.** [[crompton-faculty-technology-integration-standards-2026|Crompton et al.]]은 두 차례의 반복적 거시 주기와 114명의 참가자를 통해 여섯 가지 교수 기술 통합 기준을 개발하는 데 DBR을 사용합니다.
- **반복적 시스템 구현.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties et al.]]은 Open University의 AIDA AI 조교를 내장형 시스템 접근으로 구현한 여섯 건의 반복적 DBR 연구(18개월, 498명의 참가자)를 서술합니다.
- **[[scaffolding]]과 개입 설계.** [[critical-thinking-genai-scaffolding|GenAI 비판적 사고 비계 설정]]과 다른 개입 개발 연구들은 AI 기반 비계를 설계하고 정제하는 데 DBR을 사용합니다.
- **청소년과 전문가가 안내한 [[curriculum-design|교육과정 설계]].** [[science-integrated-ai-literacy-curriculum-dbr-2026|Moore et al. (2026)]]은 청소년과 AI 전문가 자문 위원회와 함께 고등학교를 위한 과학 통합 [[ai-literacy|AI 리터러시]] / ML 교육과정을 설계하는 데 2년에 걸친 DBR 과정을 사용하며, 집단에 걸쳐 설계를 정제하고 ML 지식 향상을 측정합니다 — 이것은 청소년의 목소리를 설계 주기에 통합하는 DBR을 참여적 공동 설계로 다루는 사례입니다.
- **DBR로서의 반복적 루브릭 공동 정제.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]]은 평가 도구 자체에 적용된 DBR의 반복적 정제 성격을 예시합니다. 이들은 루브릭을 수정 가능한 설계 산출물로 다루고 [[llm|LLM]]과의 공동 정제를 거쳤습니다 — 수행 기술자를 명료화하고 학습의 암묵적 지표들을 명시적으로 수용하면서 — 이로써 80명의 학생 설계 포스터에 대한 LLM–인간 일치도를 54.75%에서 81.25%로 높였습니다(Cronbach's Alpha 0.393 → 0.798). 이 연구는 루브릭을 인간의 교수법적 의도와 기계의 추론 사이의 매개적 인터페이스로 자리매김하며, 그 역할 인식적 [[prompt-engineering|프롬프팅]](교수자, 동료 검토자, 지원금 검토자)이 설계 선택이 평가 산출물을 어떻게 형성하는지를 보여줍니다 — 평가 도구가 개입만이 아닌 설계 대상이라는 DBR식 입증입니다.
- **초기 아동기 AI 리터러시의 공동 설계.** [[play-ai-pre-k-kindergarten-ai-literacy-2026|Lee (2026)]]는 두 명의 pre-K 교사와 두 명의 유치원 교사와의 반복적 주기에 걸쳐 Play With AI (PL-AI) 교육과정을 공동 설계하고, 파일럿하고, 정제하는 데 DBR을 사용하며, 교사 설문, 32시간의 교실 영상, 현장 기록, 설계 회의 전사록에 의지합니다. 이 연구는 DBR이 발달 단계에 적합한 AI 리터러시 활동의 반복적 정제를 어떻게 뒷받침하고 전이 가능한 설계 원칙([[embodied-learning|구현된]] 놀이, 만질 수 있는 코딩, 안내된 대화, 교사 공동 설계)을 산출하는지를 기록합니다.
- **정제의 증거로서의 전문가 검토 — 그리고 정직한 범위 진술.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong et al. (2026)]]은 초기의 4트랙 로보틱스 교육과정을 여덟 가지 차원에서 평정하는 다섯 명의 전문가에게 제출한 뒤 응답에 따라 수정합니다. 네 명의 다섯 전문가가 인지적 부하를 지목한 뒤, 독립적 PPO 구현은 확장 과제로 옮겨가고 Python 선수 과목이 추가됩니다. 평균만큼이나 분산이 그 수정들을 이끕니다 — 동기 부여 맥락은 SD = 1.73으로 평균 4.00, 그리고 홀로 1/5 평정이 나타났습니다 — 그리고 저자들은 수정된 프레임워크가 학생 데이터를 기다리는 동안 미평가 상태로 남는다고 평이하게 진술합니다.
- **삼각 측정, 그리고 그것이 넘을 수 없는 한계.** [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al. (2026)]]은 역할 순환 모형을 다섯 단계의 DBR 단계 — 문제 분석, 교수법적 설계, 구현, 평가, 정제 — 를 통해 62명의 참가자와 8주에 걸쳐 실행하며, 성찰 저널, 면담, 관찰 기록, 학생 생성 산출물을 구성원 확인과 함께 삼각 측정합니다. 설계의 교훈은 저자들이 그것에 대해 주장하는 것에 있습니다. 사전-사후 역량 측정과 비교 집단이 없는 상태에서, 그들은 증거를 입증된 역량 향상이 아닌 개입 중의 참여로 제시하는데, 이것은 다중 출처 DBR 설계가 넘을 수 있고 넘을 수 없는 바로 그 경계입니다.

## 강점과 한계

- **강점:** 높은 생태적 타당성과 실천적 관련성; 사용 가능한 산출물과 이론을 함께 산출; 실제 교실과 진화하는 AI 도구의 복잡성에 대응; 진정한 구현 증거에 기초하여 모형을 개발하고 정제하는 데 적합; 개입이 실제로 어떻게 작동하는지(또는 실패하는지)를 포착.
- **한계:** 약한 내적 타당성(통제 집단이 적거나 없음); 발견들이 맥락에 얽매어 일반화하기 어려움; 긴 일정; 어떤 설계 요소가 결과를 일으켰는지 고립시키기 어려움 — DBR은 실현 가능성과 개선을 입증하지만 학습 향상을 특정 메커니즘에 귀속시킬 수는 없습니다.

DBR은 [[rct|실험]]의 인과적 통제를 생태적 진실성과 반복적 정제와 맞바꿉니다. 그 증거는 인과적 효능이라기보다 개념 증명과 설계 지침으로서 가장 강합니다. DBR 학습 향상을 읽는 것은 [[learning-gains|학습 향상]] 아래 기록된 같은 AI에 의한 부풀려진 수행 혼재 변수를 포함하여 다른 설계들과 마찬가지로 같은 [[limitations-in-aied-research|주의]]를 요구합니다 — 도움받지 않는 통제된 결과 측정 없이는, 향상이 그 혼재 변수를 반영할 수 있습니다.

## 다른 방법들과의 관계

DBR은 [[learning-sciences|학습 과학]]의 대표적 방법입니다 — 학습과 학습 환경의 설계를 연구하고, 개입을 구축하는 것과 그것을 연구하는 것을 두 개가 아닌 하나의 활동으로 다루는 학제 간 분야입니다. 이것은 다른 연구 방법들의 경쟁자가 아닌 보완재입니다([[research-methods-aied]]에서 전체 지형을 보십시오). [[rct|실험]]이 인과성을 확립하고 [[quantitative-research|설문]]이 폭을 확립하는 곳에서, DBR은 *실현 가능성과 설계 지식*을 확립합니다 — 개입이 진정한 실천 속에서 작동하도록 구축될 수 있는지, 그리고 어떤 설계 원칙이 그것을 뒷받침하는지. 이것은 흔히 (인터페이스를 정제하기 위한) [[usability-research|사용성 평가]]와 (학습자가 개입을 어떻게 경험하는지를 이해하기 위한) [[qualitative-research|질적 방법]]들과 짝을 이룹니다. 성숙한 DBR 프로그램은 일반적으로 개발된 개입의 인과적 효과를 규모 있게 검사하는 [[rct|효능 시험]] 또는 [[educational-measurement|측정]] 연구로 마무리됩니다.

## 연결된 개념

- [[research-methods-aied]]
- [[rct]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[usability-research]]
- [[learning-design]]
- [[educational-measurement]]
- [[learning-gains]]
- [[limitations-in-aied-research]]
- [[theory-development-aied]]
- [[learning-sciences]]

## 연결된 문서

- [[ai-assisted-collaborative-learning-model-dbr]] — AI 지원 협력적 학습 모형을 위한 DBR
- [[genai-literacy-training-teacher-education-dbr-2026]] — 교사 교육에서 AI 리터러시 훈련을 위한 DBR
- [[crompton-faculty-technology-integration-standards-2026]] — 교수 기술 통합 기준을 위한 DBR
- [[human-centered-ai-teacher-educators-2026]] — 교사 교육자를 위한 인간 중심 AI (DBR)
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Open University에서 AIDA를 구현한 여섯 건의 DBR 연구
- [[critical-thinking-genai-scaffolding]] — GenAI 비판적 사고 비계 설정을 위한 DBR
- [[science-integrated-ai-literacy-curriculum-dbr-2026]] — 과학 통합 AI 리터러시 교육과정을 위한 DBR (Moore et al. 2026)
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play With AI (PL-AI): pre-K와 유치원을 위한 놀이 중심의 AI 리터러시 교육과정 (Lee 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — 반복적 교수법적 설계의 에이전트로서의 LLM
