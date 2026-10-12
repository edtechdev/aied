---
title: 환경 교육
created: "2026-09-20T12:40:00-04:00"
updated: "2026-09-20T12:40:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, critical-pedagogy]
technology: [generative-ai, llm, open-source]
ethics: [sustainability, ethics, global-south]
institutions: [educational-policy-ai, governance]
discipline: [environmental education]
confidence: medium
translation_of: concepts/environmental-education
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

## 생각해 볼 질문들

- "AI와 환경 교육"은 두 개의 매우 다른 것을 뜻할 수 있습니다. 기후와 지속가능성에 관해 *가르치는* 데 AI를 사용하는 것, 그리고 교실에서 AI를 *사용하는* 환경 비용을 줄이는 것. 당신의 기관에서는 둘 중 어느 쪽이 들리며, 어느 쪽에 예산 항목이 붙어 있습니까?
- 한 대학이 모든 학생 노트북에서 에너지 집약적인 [[llm|대규모 언어 모형]]으로 기후 과학을 가르친다면, 그것은 환경 교육을 발전시킨 것입니까 아니면 그것을 훼손한 것입니까? 답이 "둘 다"가 되려면 무엇이 참이어야 합니까?
- [[ai-assisted-inquiry-ssi-climate|한 실험]]은 AI 지원 탐구가 탐구 단독보다 기후 의사결정을 향상시켰으며, 이득이 가장 약한 단계에 집중되었다는 것을 발견했습니다. 당신의 교실에서 AI 지원 기후 단원을 신뢰하겠으며, 무엇을 먼저 보고 싶습니까?
- 거의 어떤 [[ai-education|AIED]] 논문도 자신의 연산 또는 탄소 발자국을 보고하지 않습니다. 보고되지 않은 [[sustainability]] 영향은 연구 문제입니까, 조달 문제입니까, 교수 문제입니까, 아니면 이 가운데 아무것도 아닙니까?

## 들어가며

**환경 교육**은 생태계, 기후, 인간-환경 상호의존에 관한 학습자의 이해를, 그리고 그것에 따라 행동할 처지와 역량을 함께 발전시키며, 이는 제도적으로 흔히 지속가능발전교육(Education for Sustainable Development, ESD) 또는 "녹색 교육"으로 규정됩니다. 교육에서의 AI 맥락에서 이 용어는 이 말뭉치가 늘 이름 붙이지는 않으면서 마주치는 하나의 긴장을 담고 있습니다. **환경 교육을 위한 AI**(생성 도구로 기후와 지속가능성 내용을 가르치는 것)와 **AI 자체의 환경 발자국**(기관이 배치하는 모형의 탄소, 물, 에너지 비용)이 그것입니다. 이것들은 증거, 행위자, 처방이 서로 다른 별개의 질문입니다. 여러 논문과 대부분의 전략 문서가 그렇듯 이것들을 혼동하면, 누가 무엇에 책임이 있는지를 말하는 것이 불가능해집니다.([[daniel-ai-sustainability-scoping-review-2026]])([[aied-carbon-footprint-reporting]])

## "환경 교육 with AI"라 불리는 두 가지

- **환경 교육을 위한 AI** — 환경 내용을 가르치고, 지속가능성 의식을 함양하거나, 녹색 기술(green skills)을 지원하는 데 AI를 사용하는 것. 이 절반은 틀, [[teacher-role|교사]] 설문조사 연구, 그리고 하나의 교실 실험을 지닙니다.
- **교육에서 AI의 발자국** — 교과가 무엇이든 간에 교수에 쓰이는 모형과 인프라의 배출과 자원 사용. 이 절반은 보고 실천에 대한 검토 하나, 공학 [[benchmark]] 하나, 그리고 작은 인터페이스 연구 하나를 지니며, 환경 교육을 위해 사용된 AI의 발자국에 관해서는 아무것도 없습니다.

세 번째이자 더 약한 노선은 "지속가능한 학습"을 환경적이 아니라 [[pedagogy|교수법적]] 속성으로 다룹니다. 즉 [[cognitive-offloading]]에 의해 단축되지 않고 지속하고 전이되는 학습입니다. 이것은 지속가능성의 어휘를 공유하지만 환경적 주장은 아닙니다.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])

## AI로 환경과 기후 주제 가르치기

가장 강한 증거는 기후 변화를 사회과학적 쟁점(socio-scientific issue)으로 삼은 세 집단 준실험입니다. 구조화된 [[inquiry-based-learning|탐구]] 과제 안에서 AI 동반자와 함께 작업한 학생들은 의사결정 루브릭에서 탐구 전용 동료들(d = 0.69)과 전통적 교수(d = 1.88)를 앞질렀으며, 이득은 학생들이 가장 약하게 들어선 단계 — 점검과 적응적 관리, 그리고 대안의 생성 — 에서 가장 컸습니다. AI 조건은 탐구의 *대체*가 아니라 *부가*였으며, 자료 수집과 분석은 집단들을 전혀 구별하지 않아, 이것은 AI가 증거 수집보다는 절충에 관한 추론을 지원했음을 시사합니다.([[ai-assisted-inquiry-ssi-climate]])

[[curriculum-design|교육 과정]] 수준에서 AI-SEE 틀은 AI를 부가물 형태의 지속가능성 모듈이 아니라, 네 기둥(지능 주도형, 녹색 강화형, 책임 선도형, 실천 통합형)에 걸쳐 [[engineering-education|공학 교육 과정]] 전반에 통합하며, 144학생 규모의 파일럿은 개인적, 학문적, 전문적, 사회적 수준에 걸쳐 지속가능성 의식과 행동적 [[student-engagement|참여]]의 향상을 보고했습니다. 저자들은 이것이 중국의 한 교통공학 프로그램에서 나온 단일 기관, 자기보고, 단일 시점 면접 증거임을 주의합니다.([[liu-ai-sustainable-engineering-education-2026]])

두 개의 더 작은 연구가 설계 측면을 다룹니다. 지속가능발전 교수법(Sustainable Development Pedagogy) 제약 아래의 AI 지원 [[learning-design|수업 설계]]는 예비교사들의 수업 계획을 개선했으며 그 효과는 믿기 어려울 만큼 컸습니다(d = 2.80, 28팀, 대조군 없음). 별도로, 재직 교사 122명에 대한 구조방정식 연구는 과학과 녹색 에너지 과제에 대한 *실천적* AI 사용과 ESD에 부합하는 자료 개발에의 참여가 AI 통합 역량을 예측한 반면, 추상적 AI 지식과 태도는 그렇지 않다는 것을 발견했습니다. — 다만 이분법적 [[self-report-measures|설문지]]와 약한 지식 구성이 그것이 얼마나 멀리 전이되는지를 제한합니다.([[talebzadeh-ai-green-education-2026]])([[riandi-teacher-ai-green-energy-education-2026]])

## 교육에서 AI의 환경 발자국

이 절반이 말뭉치가 가장 빈약한 곳입니다. AIED 2025 학술대회 논문 전부 396편에 대한 한 검토는 "공개 없는 LLM 도입"을 발견했습니다. 대부분의 프로젝트가 [[llm|LLM]]을 사용하고, 85편이 어떤 연산 비용이든 보고했으며, 57편만이 환경 영향을 언급했습니다. 서로 양립하지 않는 지표들을 사용하여, 이 분야는 자신의 증거를 집계할 수 없습니다. 저자들은 환경 비용을 보고하지 않는 것이 그 자체로 [[ethics|윤리적]] 우려라고 주장하며, [[open-source]] 방법(상용 모형을 위한 두 개 매개변수의 FLOPs 추정에 CodeCarbon을 더한 것)을 제안합니다.([[aied-carbon-footprint-reporting]])

학습자 측면에서, 실시간 LLM 사용 중 지연(latency)과 탄소의 절충을 드러내는 에코 피드백 인터페이스가 컴퓨팅 윤리 강의의 컴퓨터 과학 학부생 89명을 대상으로 연구되었습니다. 학생들은 지연이 낮은 상호작용의 약 45%에서 저탄소 모드를 선택했으나 지연이 높을 때는 5% 미만에서 선택했으며, 지속가능성 인식은 그 선택을 유의미하게 높였습니다. 표본은 작고 이례적으로 기술에 정통하지만, 이것은 발자국 정보가 학습자들을 움직인다는 이 말뭉치에서 유일한 직접 증거입니다. 그리고 그것이 구속 조건은 가치가 아니라 인내심임을 시사합니다.([[llm-environmental-impact-student-usage-2026]])

완화(mitigation) 증거는 단일 소비자용 GPU(VRAM 12 GB)에 공개 라이선스 콘텐츠를 갖춘 사내([[cs-education|CS]]) 지식 기반 조수에서 나옵니다. 최상의 경우 질의당 1.8 mWh — 10개 질의씩을 내는 학생 30명의 한 수업에 약 0.54 Wh — 이며, 양자화 인식 미세 조정(quantization-aware fine-tuning)이 정확도 손실과 [[hallucination-risk|환각]] 상승을 모두 압축 단독이 야기한 수준 안에 억제했습니다. 이것은 공학 벤치마크이지 학습 연구가 아니지만, 발자국 문제가 사용 절제의 도구뿐 아니라 설계 도구(접지(grounding), 양자화, 배치 위치)를 지닌다는 것을 보여 줍니다.([[shen-sustainable-ai-knowledge-base-cs-education-2026]])

## 녹색 기술, 지속가능성 의식, 그리고 교사 역량

이 연구들은 함께 고르지 않게 전달되는 녹색 기술 의제를 기술합니다. 교육 과정의 산출물로서의 지속가능성 의식, 교사 역량의 메커니즘으로서의 ESD 부합 자료 개발, 그리고 측정 가능한 추론 기술로서의 기후 의사결정이 그것입니다. 가치비판 노선은 하나의 단서를 제공합니다. 한 개념 분석은 AI의 지속가능한 교육에 대한 기여가 **조건적이고 거버넌스 매개적**이라고 주장합니다. 즉 AI가 도입이 명시적인 교육적 가치와 인간 중심의 목적에 종속될 때에만 지속가능성을 뒷받침한다는 것입니다. 이것은 [[governance]]와 [[critical-pedagogy|비판적 교수법]]을 환경 교육의 옆이 아니라 안에 놓습니다.([[alsuhaymi-sustainable-education-ai-digitalization-2026]])

이 문헌을 조직하는 [[meta-analysis-systematic-review|범위 검토]]는 규모에 관한 이 분야 자신의 판정을 제공합니다. 응용은 에너지 관리, 기후 점검, 녹색 캠퍼스 프로그램 주변에 군집하지만 규모가 제한되어 있고 윤리 또는 환경 지침이 없는 경우가 많으며, 연구의 상당 부분이 개념적이거나 소규모 파일럿으로 남아 있습니다. 커버리지는 북아메리카와 유럽에 치우쳐 있으며, [[global-south|글로벌 사우스]]로부터는 소수의 남아프리카 공화국 연구들을 넘어서는 것이 거의 없습니다.([[daniel-ai-sustainability-scoping-review-2026]])

## 증거가 아직 확립하지 않는 것

- **환경 교육에 특정한 발자국 증거가 없음.** 탄소와 에너지 수치는 일반 LLM 연구와 CS 맥락의 벤치마크에서 나옵니다. AI 지원 기후 또는 ESD 교육 과정의 환경 비용을 측정하는 것은 아무것도 없습니다.
- **발자국 개입에 대한 학습 성취 증거가 없음.** 에코 피드백은 실험실 같은 연구에서 선택을 바꾸었습니다. 그것이 습관, 평가 결과, 또는 조달을 바꾼다는 것을 보여 주는 것은 없습니다.
- **교육 과정 틀에 대한 인과 증거가 없음.** AI-SEE는 단일 기관 자기보고 사례이고 E3-HOT는 구현된 연구가 없는 설계 청사진이며, SDP 수업 설계 결과는 대조군이 없습니다.
- **대규모 또는 맥락 간 증거가 없음.** 여기의 모든 실증 결과는 단일 기관이며, 교사 연구들은 약한 도구를 지닌 작은 목적 표본에 기대고 있습니다.
- **두 절반이 함께 연구되는 경우가 드물다** — 둘 다 같은 교실에 걸쳐 있음에도 불구하고.

## 교육에서의 AI에 대한 시사점

1. **어떤 질문에 답하고 있는지 이름 붙여라.** "지속가능성"을 AI-기후-교수와 AI 자신의 발자국 양쪽에 쓰는 전략들은 [[daniel-ai-sustainability-scoping-review-2026|Daniel et al. (2026)]]이 지적한 책무 공백을 감춥니다. 의제를 분리하여 각각의 책임자를 두세요.
2. **발자국 공개를 분야 인프라로 대하라.** 정확도와 나란히 연산과 탄소를 보고하는 것 — 측정이 불완전할 때도 지속가능성 진술을 덧붙이는 것 — 이 양립하지 않는 지표 문제에서 나가는 유일한 길입니다.
3. **참을성 없는 학습자를 위해 설계하라.** 저탄소 옵션이 인지된 지연을 요구한다면, 대부분의 학생은 그것을 택하지 않을 것입니다. 지연을 낮게 유지하고, 통제 수단을 드러내며, 영향을 추상적 탄소 단위가 아니라 구체적 결과 용어로 기술하세요.
4. **교수법이 허락하는 곳에서는 더 가벼운 배치를 선호하라.** 모형을 라이선스된 지역 말뭉치에 접지하고 미세 조정과 함께 양자화하면, 에너지의 일부로도 쓸 만한 정확도를 얻었습니다. 클라우드 추론을 확대하기에 앞서 그 패턴을 재사용하세요.
5. **인식 캠페인이 아니라 자료 개발을 통해 교사 역량을 쌓고**, 북미와 유럽 맥락에서 증거를 수입하기보다는 [[global-south|글로벌 사우스]]의 공백을 메우라.**

## 연결된 개념

- [[sustainability]]
- [[global-south]]
- [[critical-pedagogy]]
- [[inquiry-based-learning]]
- [[science-education]]
- [[engineering-education]]
- [[teacher-education]]
- [[curriculum-design]]
- [[ethics]]
- [[governance]]

## 연결된 문서

- [[daniel-ai-sustainability-scoping-review-2026]] — 지속가능성을 위한 AI와 지속가능한 AI를 구분, 글로벌 사우스 공백
- [[ai-assisted-inquiry-ssi-climate]] — AI 지원 기후 탐구, 탐구 단독 대비 d = 0.69
- [[aied-carbon-footprint-reporting]] — AIED 2025 공개 검토와 오픈 소스 발자국 방법
- [[llm-environmental-impact-student-usage-2026]] — CS 학생 89명과 함께하는 지연-탄소 절충에 대한 에코 피드백
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — 질의당 1.8 mWh의 사내 양자화 조수
- [[liu-ai-sustainable-engineering-education-2026]] — AI-SEE: 공학 교육에서의 지속가능성 의식
- [[riandi-teacher-ai-green-energy-education-2026]] — 통합을 예측하는 실천적 AI 사용과 ESD 자료 개발
- [[talebzadeh-ai-green-education-2026]] — 지속가능발전 교수법 제약 아래의 AI 지원 설계
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — 거버넌스 매개적인 것으로서의 AI의 지속가능한 교육 기여
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — 환경적 주장이 아닌 지속적인 인지 행위자성으로서의 "지속가능한 학습"
