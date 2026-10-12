---
title: 법학 교육
created: "2026-09-18T05:10:00-04:00"
updated: "2026-09-30T09:59:35-04:00"
type: concept
foundations: [academic-integrity, critical-thinking, reducing-ai-misuse]
pedagogy: [career-development-and-readiness, experiential-learning, professional-training, socratic-method]
technology: [generative-ai, llm]
assessment: [assessment-validity, authentic-assessment]
institutions: [educational-policy-ai, governance]
ethics: [ai-use-disclosure, ethics]
discipline: [legal education]
level: [higher ed]
audience: [instructors, curriculum designers, administrators, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-education
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **법학 교육** — 변호사를 양성하는 전문 교육이며, 모든 교육 과정이 마주하는 질문이 가장 강한 형태로 제기되는 학문입니다. 로스쿨 과제에서의 AI 지원 수행이, 면허가 의존하는 분석 능력의 증거가 되는가 하는 질문입니다. 법학 교육의 구조는 이례적입니다. 미국에서 [[curriculum-design|교육 과정]]에 대한 [[governance]]는 교육부의 교과 과정이 아니라 ABA(미국변호사협회) 인증과 면허 [[summative-assessment|시험]]을 통해 운영됩니다. 교수는 판례 학습법(case method)과 [[socratic-method|소크라테스]]식 대화에 의존하는데, 이는 학생들이 예비 독서를 스스로 해 온 상태로 도착할 것을 전제로 합니다. 클리닉 수업과 법률 문서 작성 과정이 [[experiential-learning|경험 학습]]의 무게를 지며, 학생들이 평생 얽매이게 될 전문가 행위 규칙은 이미 그들이 배워서 쓰게 될 도구에 적용되고 있습니다. AI는 법률 조사 플랫폼, 문서 작성 지원, 가상 사례(가상의 사실관계) 생성, 그리고 변호사 시험 준비를 통해 들어옵니다. AI의 전형적 실패는 잘못된 성적이 아니라 날조된 인용입니다.

## 생각해 볼 질문들

- 학생이 AI 조수와 함께 판례를 요약하지만 혼자서는 그 추론을 재현하지 못한다면, [[socratic-method|소크라테스]]식 교실이 줄곧 평가해 온 것은 무엇이었습니까 — 예비 학습인가, 그것을 만들어 낸 도구입니까?
- 로스쿨은 그 양성 대상이 되는 직역이 합법적인 AI 지원 실무가 어떤 것인지 아직 정하지 못한 가운데 AI를 지배(거버넌스)할 것을 요구받고 있습니다. 법학 교육이 변호사 시험을 따라가야 합니까, 앞서 가야 합니까?
- 법학 교육에는 이 문제에 관한 실증 연구보다 정책 문서가 더 많습니다. 증거법(evidence law)을 가르치는 학문이 자기 자신의 AI 도입에 관해 더 나은 증거를 요구하기에 이토록 유리한 위치에 있는 것은 아닐까요?

## 들어가며

법학 교육은 고유한 행위 규칙, 고유한 인증 기관, 고유한 관문 시험(gatekeeping examination)을 가진 면허 직역을 위해 학생을 준비시키며, 이 때문에 지식 기반에서 [[educational-policy-ai|교육 정책]], 전문가 [[regulation]]과 평가 타당도가 가장 빈틈없이 교차하는 학문이 됩니다. 이 페이지는 [[medical-education|의학 및 보건 전문직 교육]]과 [[nursing-education|간호 교육]]과 나란히 놓이며, 학교 교과가 아니라 [[professional-training]] 학문으로 자리합니다. 그러나 법학 교육을 구별하게 하는 특징은 절차적입니다. 로스쿨이 결정해야 할 것의 대부분은 AI로 *어떻게* 가르칠까가 아니라, AI를 가지고 실무를 할 졸업생에게 *전문가 윤리 규칙이 무엇을 요구하는가*입니다.

현재 증거 기반은 빈약하고 정책 중심적입니다. 이 페이지를 떠받치는 한 편의 중핵 논문이 있습니다. [[gutowski-hurley-genai-policy-legal-education-2025|Gutowski와 Hurley(2025)]]는 ABA 인증 미국 로스쿨들의 기관별 생성 AI 정책을 조사·비교하고 거버넌스 틀을 제안했습니다. 이 불균형 자체가 하나의 발견이며, 이 페이지는 그것을 감추지 않고 분명히 지적합니다.

## 법학 교육에서 AI가 나타나는 양상

- **법률 조사.** Lexis+ AI나 Westlaw Precision with CoCounsel 같은 상업 플랫폼은 학생들이 이미 훈련된 도구에 [[generative-ai|생성형 기능]]을 내장하여, "AI 사용"을 일반적인 데이터베이스 검색과 구분하기 어렵게 만듭니다. Gutowski와 Hurley는 이것이 얼마나 익숙한 업무 흐름을 압축하는지, 즉 권위 있는 자료와 2차 자료를 몇 시간이 아니라 몇 분에 파악하게 되는지를 지적합니다.
- **문서 작성과 글쓰기 지원.** 초기 판례 요약, 개요, 법률 의견서, 1차 종합, 그리고 명료성과 문법에 대한 문장 수준의 피드백입니다. 저자들은 AI가 생성한 작업물을 법률 보조원이나 주니어 변호사의 작업과 같은 감독 관계에 놓습니다. 즉 변호사는 그 정확성과 법적 충분성에 계속 책임을 집니다.
- **학습과 변호사 시험 준비.** 연습 문제, 사실관계, 제한 시간 연습을 위한 "가상의 사례(hypotheticals)" 생성, 그리고 반복적으로 나타나는 약점에 대한 튜터링입니다. Gutowski와 Hurley는 생성 AI가 이제 변호사 시험(Bar Exam)과 다주 전문직 책임 시험(Multistate Professional Responsibility Examination)을 모두 통과한다는 관찰을 짝지어 제시하며, 이것이 모델보다는 최소 역량 기준(the minimal-competency bar)에 대해 더 많은 것을 말해 준다고 읽습니다.
- **리더보드가 아닌 과제별 프로파일.** 블라인드 프로토콜 하에서 인간 변호사 시험 수준에 도달한 동일한 범용 모델들(누적 점수 100점 중 26–79)은 모두 엄격한 형식 제약 하에서 목표 지향적 법률 계획을 요구하는 공증인 시험에는 실패했고, 시험에 의도적으로 심어 둔 함정에 속았습니다([[llm-turing-test-italian-legal-exams-2026|Bertoli et al. (2026)]]).
- **법학저널, 모의재판(moot court), 지도.** 투고 심사, 변론 준비, 그리고 과거 시험·모범 답안·강의 자료로 훈련된 커스텀 모델을 사용하는 학업 지원 프로그램.
- **평가와 진실성.** 되풀이되는 문제 사례들입니다. 공개되지 않은 문서 작성, 존재하지 않는 권위 있는 자료의 인용, 그리고 더 이상 독자적 분석을 측정하지 않는 시험.

## 정책 증거가 보여 주는 것

Gutowski와 Hurley는 0–5 루브릭으로 정책을 다섯 차원에서 평가합니다. **금지 성향(prohibitiveness)**, **허용 성향(permissiveness)**, **교육적 통합(educational integration)**, **투명성과 책무(transparency and accountability)**, 그리고 **깊이(depth)**입니다. 이들의 조사는 대부분의 로스쿨이 대체로 금지 중심의 입장을 취했다는 것을 발견했는데, 이는 종종 기술을 연구할 시간을 벌기 위한 것으로 설명되었으며, 거의 모든 정책이 개별 교수자의 재량권을 남겨 두었습니다. 예상대로 허용 성향과 금지 성향의 평가는 역상관했고, 저자들은 하나의 합의된 접근법이 없다고 보고합니다. 정책은 포괄적 거버넌스부터 명시된 정책이 전혀 없는 경우까지 걸쳐 있습니다.

이들은 또한 이 부문의 증거가 얼마나 빈약한지도 기록합니다. ABA의 2024년 AI 및 법학 교육 설문조사는 ABA 인증 로스쿨의 약 15%에 해당하는 29개 교만 응답했으므로 이를 대표적인 것으로 볼 수 없으며, 800명의 법학생을 대상으로 한 LexisNexis 설문조사는 현재 학습에 생성 AI를 사용하고 있다고 응답한 사람이 9%에 불과하고 도입을 계획하는 사람이 25%라고 찾았습니다. 저자들은 낮게 보고된 사용량을 불명확한 규칙에 대한 반응으로 부분적으로 읽는데, 명확성이 규칙을 어길지도 모른다는 두려움을 줄여 주기 때문입니다.

두 가지 추가 논점이 이들의 권고안을 형성합니다.

- **교수진 거버넌스는 로스쿨 특유의 복잡한 문제입니다.** 법학 교수진은 개인적으로 그리고 집합적으로 교육 과정과 강의 기준에 대해 이례적으로 직접적인 권한을 가지므로, 정책은 그들에게 일방적으로 통고되어서는 그들과 함께 구축되어야 합니다.
- **임상 교육(clinical education)은 기술적이 아니라 [[pedagogy|교수법적]] 이의를 제기합니다.** Karr과 Schultz를 인용하며, 이들은 인간의 반응을 모방하도록 설계된 AI 도구는 클리닉이 길러 내기 위해 존재하는 독창적 판단, 내담자 상호작용, [[ethics|윤리적]] 의사결정을 발전시키지 않으므로 임상 수업에서는 전혀 사용되어서는 안 된다는 입장을 보고합니다.

권고안은 절차적입니다. 기관의 입장이 어떻든 명확하고 포괄적인 지침, 작성 과정에 이해관계자 전원이 참여할 것, 학생과 교수진을 위한 선제적 훈련, 주기적으로 재검토되는 유연한 거버넌스, 그리고 ABA가 정책을 지시하기를 기다리기보다는 정보 공유를 통한 자기 규제입니다.

## 이 학문이 특별한 까닭

세 가지 사항이 법학 교육을 단순히 또 하나의 교과 영역 이상으로 만듭니다.

**평가 타당도는 전문 역량과 분리될 수 없습니다.** 법학 시기에의 [[cognitive-offloading|과도한 의존]]은 독자적 법률 분석과 변론을 요구하는 업무에 대비하지 못한 졸업생을 남길 것이라 우려되며, 유창한 산출물에 보상을 주는 채점은 학생의 이해와 모델의 이해를 구별할 수 없습니다. 따라서 [[assessment-validity|타당도]] 문제는 학문적 문제가 아닙니다.

**공개(disclosure) 규범은 불확정하고 중대합니다.** Gutowski와 Hurley는 AI의 어떤 사용이든 공개되어야 하는지에 대한 이견, 학생 공개 양식에 대한 제안, 그리고 인용 관행에 대한 합의 부재를 보고하며, Bluebook(미국 법률 인용 지침서)은 여전히 생성 AI 인용에 대해 침묵하고 있습니다. 이들은 또한 공개 요건이 결국 학생이 검색 엔진을 사용했다고 적는 것만큼 무의미해 보이게 될 것이라고 예측하는데, 이는 지금 작성되고 있는 규칙의 수명에 관한 예측입니다.

**전문가 윤리는 졸업생과 함께 이동합니다.** ABA의 기술 역량에 대한 의무와 비밀 유지, 감독, 법정에 대한 정직(candour)에 관한 지침은 이 도구들을 사용하는 실무 변호사에게 적용되며, 로스쿨은 그것을 가르치는 일을 물려받습니다. 이 때문에 이 학문은 지식 기반의 [[ai-use-disclosure|AI 사용 공개]] 작업과 기관이 AI를 잘못 지배할 때 발생하는 [[legal-issues-and-risks|법적 문제와 위험]] 작업에 직접 연결됩니다.

## 열린 질문들

- AI 지원 법률 문서 작성 수업은 여전히 면허가 전제하는 분석을 발전시키는가, 아니면 변호사 시험조차 탐지할 수 없는 유창함을 훈련하는가?
- 예비 독서가 일상적으로 위임된다면 소크라테스식 교수에는 무슨 일이 벌어지며, 교실이 그것에 대해 침묵하는 것은 측정의 문제인가 설계의 문제인가?
- 법학 교육은 [[ai-education|교육에서의 AI]]를 소송하고 규제할 사람들을 길러 냅니다. 이것이 지식 기반의 법적 위험 작업이 시험될 자연스러운 장소가 되는 것입니까, 아니면 주의가 정책이 가장 시끄러운 로스쿨들로 왜곡되는 것입니까?

## 연결된 개념

- [[academic-integrity]] — 지원된 작업에 적용되는 행위 틀
- [[assessment-validity]] — 지원된 수행이 의도된 역량을 측정하는지 여부
- [[authentic-assessment]] — 독자적 분석을 요구하는 설계
- [[ai-use-disclosure]] — 여전히 합의에 이르지 않은 귀속과 보고 규범
- [[governance]] — 로스쿨이 실천하는 교수진 거버넌스와 정책 수립
- [[educational-policy-ai]] — 연구의 대상이 되는 기관 AI 정책
- [[critical-thinking]] — 판례 학습법이 길러 내려는 추론
- [[socratic-method]] — 학생의 예비 학습에 의존하는 대화
- [[experiential-learning]] — 클리닉과 실습 기반 훈련
- [[professional-training]] — 면허 직역이라는 더 넓은 범주
- [[career-development-and-readiness]] — 실무 준비도라는 명시된 목적
- [[ai-literacy]] — 전문가의 의무로서의 기술 역량
- [[hallucination-risk]] — 이 분야의 전형적 실패인 날조된 인용
- [[legal-issues-and-risks]] — 거버넌스가 실패할 때 기관이 마주하는 것

## 연결된 문서

- [[gutowski-hurley-genai-policy-legal-education-2025]] — 로스쿨 생성 AI 정책의 다섯 요인 비교와 거버넌스 틀
- [[llm-turing-test-italian-legal-exams-2026]] — 이탈리아 변호사·판사·공증인 시험에 대한 블라인드 튜링 테스트, 전문가 채점과 비교
