---
title: AI 거버넌스
created: "2026-08-13T18:17:22-04:00"
updated: "2026-10-10T14:22:00-04:00"
type: concept
foundations: [ai-education]
ethics: [ethics, privacy]
connected_faqs: [ai-guidance-children-under-13, institutional-ai-policy]
level: [higher ed]
confidence: high
institutions: [change-management, educational-policy-ai, regulation]
connected_resources: [institutional-ai-readiness-pack, campus-ai-framework]
translation_of: concepts/governance
source_updated: "2026-10-10T14:22:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **AI 거버넌스** — [[ai-education|교육에서의 인공지능]]의 책임 있는 설계, 배치, 사용을 이끄는 체계, 정책, 기관 구조, 규범입니다. 거버넌스는 형식적 기관 메커니즘(AI 지휘 그룹, 학문적 정직성과 허용되는 사용에 관한 정책, 윤리 심의)과 비형식적 규범([[reducing-ai-misuse|책임 있는 AI 사용]]을 위한 교수진 지침, 전문성 개발, 문화)을 아우릅니다. AI 시대에 효과적인 거버넌스는 생성형 AI의 윤리적이고 [[equity-in-ai-education|공평한]] 지속가능한 도입의 전제 조건입니다 — AI가 투명하고 책임성 있게 통합되는지, 아니면 불평등을 심화하는 방식으로 사후 대응적으로 도입되는지를 결정합니다.

## 생각해 볼 질문들

- 여러분의 기관에 종이 위로는 AI 정책이 있지만 그것을 집행하고 갱신하고 의사소통할 분명한 절차가 없다면, 그것이 정말 거버넌스입니까? 존재하는 규칙과 실제로 통치되는 규칙을 구분하는 것은 무엇입니까?
- 한 연구에서 학생들은 자신의 대학에 분명한 AI 정책이 없으며 그것이 AI를 쓰는 방식에 영향을 주었다고 말했습니다. 정책의 모호함이 학생들이 '허용되는 사용'이라고 결정하는 것에 어떤 영향을 미칠 수 있으며 — 기관이 그 협상을 개인에게 맡겨도 괜찮다고 걱정해야 할까요?
- 이 페이지는 탐지 기반 거버넌스(AI 사용을 단속하는 것)와 설계 기반 거버넌스(AI 사용이 기대되고 선언되도록 평가를 재설계하는 것)를 구분합니다. 여러분 자신의 평가 실천은 어느 쪽에 기울어 있으며, 각각의 트레이드오프는 무엇입니까?
- 거버넌스는 국가, 기관, 교실 수준에서 작동하는 것으로 서술됩니다. 여러분의 맥락에서 AI 규칙 하나를 떠올려 보십시오. 누가 그것을 정했으며, 어떻게 의사소통되고 집행되며, 그 수준들은 얼마나 잘 정합됩니까?
- 한 체계는 AI 거버넌스를 공유된 전문성을 유지하는 집단적 행동 문제 — '인지적 공유지' — 로 재틀짓습니다. 한 직업의 집단적 지식 풀을 보호하는 것이 단순히 도구를 규제하는 것과 대비할 때 AI 거버넌스에 대한 여러분의 생각을 어떻게 바꿉니까?
- 이 페이지는 의무적 AI 사용 선언이 처벌적이거나 모호하게 느껴질 때 실패한다고 경고합니다. 사람들이 이해하거나 신뢰하지 않아서 역효과를 낸 준수 규칙을 본 적은 언제이며 — 그것이 거버넌스에 대해 무엇을 가르쳐 주었습니까?

## 들어가며

AI 교육에서의 거버넌스는 [[generative-ai|생성형 AI]]가 새로운 인식론적·윤리적·조직적 도전을 가져오기 때문에 점점 시급해집니다. 그것은 지식 생산, [[agency|학습자의 능동성]], [[assessment]] 타당성, 그리고 인식론적 권위로서의 [[teacher-role|교육자의 역할]]에 관한 가정을 불안정하게 만듭니다. 거버넌스는 [[academic-integrity|학문적 정직성]](허용되는 AI 사용이 무엇인지), [[privacy|데이터 프라이버시]]와 보안, [[bias-mitigation|알고리즘 편향]]과 공정성, [[explainable-ai|투명성]]과 책임성, 그리고 기관의 사명과 가치에의 AI 도입 정합에 관한 질문을 다룹니다. 지식베이스의 [[research-methods-aied|연구]] 전반에 걸쳐 반복되는 발견은 **기관 거버넌스가 종종 뒤처진다**는 것입니다 — 많은 기관이 분명하고 통일된 AI 정책을 결여하여, 학생과 교수진이 허용되는 사용을 스스로 협상하도록 내버려 둡니다.

- **플랫폼화의 구조적 조건으로서의 제로샷 거버넌스.** [[perrotta-zero-shot-governance-2026|Perrotta(2026)]]는 **Redbox**라는 폐기된 영국 공무원 프로토타입을 코드 수준에서 분석하여 — 정책 결정에 개입하는 영역 불문의 [[generative-ai|생성형 AI]]인 — **제로샷 거버넌스** 개념을 발전시킵니다. 기성품 [[llm|LLM]] 위에 세워진 그것입니다. 그 구조(보이지 않는 시스템 프롬프트와 [[rag]] 검색→형식화→생성 파이프라인 위에 얇은 파이썬 래퍼, 그리고 제공자 불문의 클라우드 스택)를 읽으며, 이 글은 기반 모형의 일반 목적성이 완화할 수는 있지만 결코 배제할 수 없는 *구조적 특징*임을 주장합니다. 플랫폼화의 것입니다. [[agentic-ai|에이전트 AI]]는 플랫폼의 독점적이고 지대추구적인 논리를 방해하지 않으며, 참신함을 생성하는 바로 그 확률적 메커니즘이 [[hallucination-risk|환각]]도 함께 산출합니다. 거버넌스에 대한 함의는 일반 목적 AI에 대한 감독이 비정상적 출력을 고칠 수 있는 버그가 아니라 환원 불가능하고 완화만 가능한 위험으로 다루어야 한다는 것이며, 이는 [[educational-policy-ai|교육 정책]] 추론에도 똑같이 적용되는 주의입니다.
- **[[baroudi-anticipatory-governance-ai-higher-ed-2026|Baroudi]]** [[meta-analysis-systematic-review|범위 검토]]는 선제적 거버넌스와 리더십의 렌즈를 통해 고등교육에서 AI 거버넌스를 틀짓습니다.
- **정책의 학생 공동 설계:** [[guided-inquiry-genai-course-policy-2026|Hingle & Johri]]는 학생들이 생성형 AI 강좌 정책을 공동 설계한 안내된 탐구 활동이 어떻게 학생의 가치를 표면화하는지를 보여 줍니다 — 훈련, 표준화된 [[ai-use-disclosure|공개]] 절차, 더 강한 기관 지원, 그리고 의사결정에의 더 큰 참여를 우선시하는 것. 이것은 거버넌스에서 [[pedagogical-partnerships|학생을 파트너로]] 자리매김하여, 기관 수준의 정책을 상향식 학생의 목소리로 보완합니다.

- **기술 해결주의의 덫과 정책 결핍:** 65개의 AI × [[social-emotional-learning|사회정서적 학습]] 연구에 대한 체계적 고찰([[policy-deficit-ai-sel-2026|Tran, Liu & Nguyen 2026]])은 연구가 종종 책임 있는 이행을 위한 기관적 조건을 구체화하지 못한 채 기술적 잠재력을 부각시킨다는 것 — "기술 해결주의"의 덫 — 을 발견합니다. 저자들은 정책 [[student-engagement|참여]]를 출판 매체와 연결하고, 거버넌스 함의를 행위자 특정적으로 만들기 위한 "WH-질문" 체계를 제안하며, 기관 거버넌스가 AI 도입을 뒤따른다는 지식베이스의 더 넓은 발견을 반영합니다.

## 연구에서 AI 거버넌스가 나타나는 방식

- **규모 있는 기관 도입:** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|개방대학의 AIDA 연구]]는 한 기관이 생성형 AI 어시스턴트를 어떻게 설계하고 이행하고 평가했는지를 보여 주며, 책임 있는 시스템 수준의 배치에는 거버넌스 구조(AI 지휘 그룹), 고위 리더십의 후원, 기관 전략과의 정합이 요구된다는 것을 확인합니다 — 기술적 역량만이 아니라.
- **리더십과 체계적 변화:** [[leveraging-complex-systems-leading-for-transformative-change|SPARK]]는 거버넌스를 복잡계 리더십 이론 속에 틀짓으며, 리더가 행정적 안정과 창발적 혁신을 저울질해야 하고, 적응적 공간의 혁신이 유지되고 확장될 수 있도록 거버넌스 메커니즘(정책, 평가 체제, 책임 체계)을 내장해야 한다고 주장합니다.
- **정책의 모호함과 학생 경험:** [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|생성형 AI에 대한 학생의 참여]]는 학생 23명 중 12명이 명시적 기관 AI 정책의 부재를 지적했다는 것("대학에 아직 분명하고 통일된 정책이 없다")을 발견하며, 거버넌스의 모호함이 학생의 실천·규범·[[self-regulated-learning|자기규제]]를 형성한다고 주장하여 투명한 기관 지침으로의 전환을 뒷받침합니다.
- **거버넌스 역량으로서의 AI 리터러시("제18의 지속가능발전목표"):** [[ai-literacy-sdg-governance-framework-2026|Islam, Morshed, and Islam(2026)]]은 AI 리터러시를 교실 기술이 아니라 체계적 거버넌스 메커니즘으로 재개념화하며, 블룸의 위계를 윤리적 종합과 전략적 선견으로 확장하는 여섯 단계의 AIRE 분류 체계(인식 → 이해 → 적용 → 분석 → 통합 → 거버넌스)와 리터러시 역량을 열일곱 개의 [[sustainability|지속가능발전목표]] 모두에 매핑하는 AI–SDG 연계를 제안합니다. AI 리터러시를 "제18의 SDG" 휴리스틱 — 학습을 거버넌스와 지속가능한 발전으로 이끄는 횡단적 역량 — 으로 틀짓으며, 이 연구의 전문가 300명에 대한 조사는 거버넌스 리터러시가 AI–SDG 연계 인식의 가장 강력한 예측 변수임을 발견했으며(β = 0.64, 연계 인식과의 r = 0.67), 윤리적 추론과 성찰적 사고를 신뢰할 수 있는 AI 사용의 가장 강력한 예측 변수로 확인했습니다. 이것은 기관 거버넌스를 공적 [[ai-literacy]]의 함양에 연결하며, 책임 있는 AI 정합에는 단순히 준수 중심의 기술적 통제가 아니라 알고리즘 체계를 비판적으로 해석할 수 있는 [[stakeholders|정책 입안자]]와 시민이 필요하다는 지식베이스의 발견을 반향합니다.
- **학문적 정직성과 평가:** 거버넌스는 기관이 AI 관련 [[academic-integrity]] 우려를 다루고 [[assessment]]를 재설계하는 방식에서 중추적입니다 — 금지·단속에서 지침, AI 리터러시, 과정 중심의 설계로 옮겨가며, [[student-rationalization-ai-writing|학생의 합리화]]와 [[beyond-detection-authentic-assessment-ai-2025|실제적 평가 재설계]]에 관한 연구에서 보듯입니다.
- **재설계는 세 차원에서 동시에 돌아갑니다.** [[assessment-redesign-critical-practice-2026|Laidlaw(2026)]]는 문화·담론적(언어와 가정), 물질·경제적(자원), 사회·정치적(거버넌스와 권력) 차원을 통해 AI 시대의 평가 재설계를 틀짓며, 자원-권력의 교차점을 가장 큰 지렛점이자 가장 큰 위험으로 지명합니다. 기존 권력 구조를 통해 흐르는 자원은 불평등을 증폭시킵니다.

- **기록된 거버넌스의 도구 구성:** [[institutional-ai-policy-health-informatics-2026|Eldredge 외(2026)]]는 미국의 CAHIIM 공인 건강정보학 및 건강정보관리 석사 프로그램 48곳 전체의 AI 관련 문서를 감사했습니다. 48곳 중 40곳(83%)이 공개적으로 이용 가능한 문서가 하나 이상 있었으며, 분석된 40개 문서에 걸쳐 거버넌스는 대체로 구속력 있는 규칙이 아니라 지침으로 실현되었습니다. 지침서 21건(53%), 정보 문서 9건(23%), 형식적 정책은 단 7건(18%). 대부분의 문서가 교수진과 학생을 함께 다루었으며(20건, 51%) 학생만을 다룬 경우(6건, 15%)보다 많았고, 정책 유형도 독자도 전달 방식에 따라 달라지지 않았습니다(Fisher's exact P = .85와 P = .71). 이는 그 도구 구성이 온라인·캠퍼스·하이브리드 프로그램의 요구가 아니라 기관의 습관을 따른다는 것을 시사합니다. 내용은 학문적 정직성, 책임 있는 AI 사용, 학생 행동에 모여 있었으며, 응용 학습·연구·시뮬레이션 환경에서의 AI 사용을 다루는 지침은 거의 없었습니다. 바로 교육과정적·데이터 거버넌스 우려가 교차하는 지점입니다. 저자들은 또한 지역 인증 기관이 대부분의 자료를 제공했다고 보고하며(Higher Learning Commission n = 14, SACSCOC n = 13, 합쳐 약 60%, WASC 지역에서는 없음), 인증이 프로그램 간 편차를 줄이는 데 가장 잘 위치한 외부 지렛대라고 주장합니다.
- **분산된 지원 생태계로서의 거버넌스:** [[qian-governing-genai-higher-ed-policy-2026|Qian(2026)]]은 가장 혁신적인 미국 대학 50곳의 AI 지침을 코딩하여, 거버넌스가 규칙보다 해석과 지원으로 실현된다는 것을 발견했습니다. 50곳 중 6곳만이 주요 페이지를 "정책"으로 규정했으며, 50곳 중 33곳이 교수를 기관적 기대를 강좌 규칙으로 옮기는 주요 번역자로 자리매김했으며, 그렇게 하기 위한 지원은 네 개의 상호 맞물리는 단위에 걸쳐 모여 있었습니다. 강의계획서 문구와 강좌 정책 메뉴를 제공하는 교수학습 센터, 인용과 출처 기준을 정하는 도서관, 데이터 분류 규칙과 검토된 도구 스택을 운영하는 IT와 기업 거버넌스 사무국, 그리고 정당 절차와 교육 우선의 시정 조치를 담당하는 학문적 정직성 사무국. Qian은 모호함을 줄이는 것은 [[scaffolding]]이지 입장이 아니라고 주장하며, 그것이 고르지 않게 분배되어 있음을 보고합니다. 50개 기관 중 33곳이 강의계획서 또는 강좌 정책 자료를 공표한 반면 학생 대상 지침을 전면에 내세운 곳은 4곳뿐이었습니다. 이것은 위의 도구 구성 발견이 조직적 형태로 나타난 것입니다 — 문서가 아니라 단위에 자리한 거버넌스 역량.
- **윤리, 프라이버시, 편향:** 거버넌스 메커니즘은 종종 인식되지만 집행되지 않는 윤리 원칙([[ethics]], [[privacy]], [[bias-mitigation]])을 작동하게 하며, 교육에서 책임 있는 AI와 [[regulation|규제]] 논쟁에 연결됩니다.
- **거버넌스를 위한 가치·규범 행렬.** [[agarwal-ethical-values-norms-aied-2026|Agarwal 외(2026)]]는 25개 논문에 대한 [[meta-analysis-systematic-review|체계적 고찰]]로서, AIED 윤리를 여섯 가지 주요 윤리 가치(차별금지, 데이터 관리, [[human-in-the-loop-ai|인간 감독]], 선의, 설명가능성, 교육적 적합성)로 통합하고, 문헌에서 추출한 윤리 규범을 이해관계자×가치 행렬에 매핑합니다. 그 매핑은 규범을 특정 가치를 실현하기 위한 실행 가능한 규칙으로 만들고, AIED를 위한 상세한 윤리 체계와 규제를 구축하기 위한 기초를 제공하여 — 교육 기관, 개발자, 규제자에게 이행할 구체적인 규범을 줍니다. 인간 감독을 위한 규범은 교육 기관과 최종 사용자에 모여 있고, 교육적 적합성은 교육 기관과 규제자에 모여 있으며, 규제자를 겨냥한 선의 규범은 다른 어떤 집합보다 훨씬 많습니다(아홉 개). 이는 규제자가 정책과 입법을 통해 AIED가 학습자에게 이익이 되도록 보장하는 역할을 알립니다.

### 거버넌스 교육

AI 거버넌스는 지식베이스가 함께 다루는 두 수준에서 작동합니다. AI 사용을 규율하는 *기관 규칙*(정책, 허용되는 사용 체계, [[assessment]]과 선언 요건)과 *그 규칙에 관한 교육*(그것들을 항해할 사람들을 준비하는 것)입니다. 교육 없는 거버넌스는 집행되지 않거나 불투명할 위험이 있으며, 거버넌스 없는 교육은 실효성을 결여합니다. 이 흐름의 연구에는 [[genai-policies-higher-ed-computing|기관 생성형 AI 정책 분석]], [[genai-declaration-frameworks-higher-education|AI 선언 체계]], [[genai-assessment-governance|평가 거버넌스]], [[ai-uk-higher-education-policy-2026|영국의 AI 고등교육 정책]], 그리고 더 넓은 정책 환경 속에 거버넌스를 자리매김하는 [[raza-farooq-aied-review-2020-2025|종합적 AIED 고찰]]이 포함됩니다.

### 평가 거버넌스

AI 거버넌스의 중추적 영역은 **기관이 어떻게 평가를 통치하는가**입니다 — 허용되는 AI 사용이 무엇인지, AI 지원 작업이 어떻게 선언되는지, 그리고 총괄적 측정이 어떻게 보호되는지를 결정하는 규칙입니다. 여기에는 [[ai-use-disclosure|AI 사용 및 공개 진술]]의 설계와 집행이 포함됩니다. 연구는 의무적 선언이 처벌적이거나 모호하게 느껴질 때 실패한다는 것([[gonsalves-student-non-compliance-ai-declarations-2025|Gonsalves 2025]], [[vetter-hidden-cost-disclosure-genai-2026|Vetter 외 2026]])과, 공개를 실제로 조성하는 것은 명확하고 일관되며 신뢰에 기반한 정책이라는 것을 보여 줍니다. 지식베이스의 연구는 *탐지 기반* 거버넌스([[ai-detection]]을 통한 AI 사용 단속)와 *설계 기반* 거버넌스(AI 사용이 기대되고 선언되고 검토되도록 [[summative-assessment|총괄]] 및 [[authentic-assessment|실제적]] 평가를 재설계하는 것)를 구분합니다. [[genai-assessment-governance|평가에서 생성형 AI의 증거 중심 거버넌스]]와 [[beyond-detection-authentic-assessment-ai-2025|탐지를 넘어서]]는 거버넌스가 어떤 탐지와도 평가 재설계를 짝지어야 한다고 주장하는 반면, AI 저항형 총괄 형식(구두 시험, 감독·폐쇄책 측정, 코드 검토 면접 — [[summative-assessment]] 참조)의 선택은 그 자체로 거버넌스의 결정입니다. 대규모 증거 [[stromberg-generative-ai-learning-penalty-secondary-2026|(Strömberg, Lei, & Wu 2026)]]는 총괄적 측정을 통치하는 것의 중요성을 강조합니다. 통치되지 않는 숙제는 AI에 의해 부풀려질 수 있는 반면 실제 학습은 하락하기 때문입니다. 금지의 범위는 그 자체로 거버넌스의 결정입니다. [[wright-transcription-not-generation-2026|Wright(2026)]]는 생성과 형식 변환의 구분 없이 "생성형 AI"를 금지하는 규칙이 보조적 전사 도구를 포착하고 정책의 잘못 적용을 부정행위 주장으로 바꾸어, 장애를 지닌 학생과 [[equity-in-ai-education|형평성]]에 노출된 학생에게 부담을 지운다는 것을 보여 줍니다 — 이는 [[legal-issues-and-risks|법적 문제와 위험]]이 정직성의 문제만큼이나 평등의 문제로 다루는 거버넌스의 실패입니다.

[[ai-refusal-higher-education-diagnostic-non-use-2026|Zagami(2026)]]가 고위험 영역에서 수집한 증거는 단순한 거부가 아니라 고르지 않은 거버넌스를 가리킵니다. 평가, 입학, 징계 절차에서의 부분적 도입과 불완전한 정책이며, 기관의 지연은 실패가 아니라 하나의 거버넌스 입장으로 작동합니다. 기관의 과제는 거버넌스를 개선할 만큼 거부를 잘 해석하는 것입니다. 어떤 결정이 인간의 검토를 요구하는지, 어떤 체계가 감사를 요구하는지, 어떤 사용이 공개를 요구하는지, 그리고 어떤 조달 선택이 공적 정당화를 요구하는지를 묻는 것입니다. [[weidlich-inference-at-risk-assessment-validity-2026|Weidlich(2026)]]는 평가 특정의 추론을 더합니다. 탐지기 점수는 그 자체로 부정행위를 확립할 수 없는 조건부 확률적 신호이므로, 탐지 중심의 거버넌스는 평가 주장을 방어하기에 불충분한 기반입니다.

### 수준에 걸친 거버넌스

AI 거버넌스는 여러 수준에서 작동합니다 — **국가·규제적**(정부 정책, OECD 체계, 주 AI 지침)부터 **기관적**(대학 정책, AI 지휘 그룹, 윤리 심의 위원회)을 거쳐 **교실**(교원 지침, 강의계획서 진술, 과제 설계)에 이르기까지. 효과적인 거버넌스는 이 수준들을 정합시킵니다. 국가 체계는 기대를 설정하고, 기관은 그것을 정책과 지원 구조로 옮기며, 교육자는 학생의 AI 리터러시와 능동성을 기르는 방식으로 그것을 이행합니다. 지식베이스의 연구는 거버넌스가 단순히 제한에 관한 것이 아니라 책임 있고 공평하며 학습을 지원하는 AI 통합의 조건을 만드는 것이라고 강조합니다 — [[educational-development|교수진 개발]], 투명한 지침, 그리고 지속적인 평가를 포함하여.

**동일한 행동, 다른 판결.** [[genai-governance-australian-higher-ed-2026|Poudyal(2026)]]은 표준화된 학생 사용 비녜 15개를 호주 대학 20곳의 공공 정책 환경에 적용하여 분류 300건을 산출했습니다. 40.0%가 분명히 금지됨, 32.3%가 잠재적 정책 위반, 9.0%가 조건부 허용, 18.7%가 미결정이며 — 분명히 허용되는 문턱을 충족한 것은 없었습니다. 구속력 있는 수단은 100개의 조합에서 생성형 AI에 대해 침묵한 반면 지침은 88건을 해결했으며, 공개된 언어 다시 쓰기와 AI 초안 문단이 대학 간 이격이 가장 컸고 명시적 평가 금지에 대해서는 만장일치였습니다. 위에서 서술된 수준들이 정합한다고 가정되는 곳에서, 이 연구는 그것들이 얼마나 벌어지는지를 측정하며, 운영적 경계를 구속력 있는 정책이 아니라 지침에 위치시킵니다.

**교수진 거버넌스와 숙고된 검토의 필요성.** 위의 수준들이 정책을 통해 정합되는 곳에서는, 어떤 분야는 공동 거버넌스를 통해 그것에 도달합니다. [[gutowski-hurley-genai-policy-legal-education-2025|Gutowski와 Hurley(2025)]]는 바로 그 이유로 [[legal-education|법학전문대학원]]을 어려운 사례로 서술합니다. 미국 법학 교수진은 강좌 기준에 대한 이례적인 개인적 권위를 지니므로, 정책은 그들에게 발표되는 것이 아니라 그들과 함께 세워져야 하며, 금지적 규칙을 쓰는 대부분의 학교는 개별 교원에게 재량권을 유보하고 기술이 움직임에 따라 개정할 것을 약속했습니다. 그들의 권고 — 설계에 의한 유연성, 주기적 검토, 사전적 훈련, 인증 기관이 정책을 지시하기를 기다리기보다 정보 공유를 통한 자기규제 — 는 거버넌스를 문서가 아니라 지속되는 과정으로 서술하며, 이는 [[crompton-governing-genai-higher-ed-delphi-2026|델파이 합의]]가 예정된 검토 주기와 상설 다학제 위원회를 권하면서 하는 것과 같은 지점입니다.

기관 전반에 걸쳐, **AIGEM 체계**([[tan-aigem-ai-educational-management-2026|Tan 외 2026]])는 책임 있는 AI를 교육 관리를 위한 전략적 조직 역량으로 자리매김하며, AI 전략적 리더십, 책임 있는 거버넌스, 의사결정 지능, 인간-AI 협업 지능, 역량 개발, 지속가능한 가치 창출을 통합하고 책임 있는 이행을 SDG에 연결합니다. 이는 거버넌스가 교수 위의 단순한 준수 층위가 아니라 교육 기관의 경영진 기능이라는 것을 강조합니다.

### 관련 개념들과의 연결

AI 거버넌스는 [[ethics]](그것이 작동하게 하는 원칙), [[higher-ed]](기관적 맥락), [[privacy]]와 [[bias-mitigation]](특정한 거버넌스 우려), 그리고 [[academic-integrity]](주요한 거버넌스 영역)와 연결됩니다. 이것은 [[change-management|기관 변화]]와 책임 있는 AI에서 중추적이며, [[ai-literacy]](거버넌스는 비판적이고 정보에 근거한 사용의 발전을 뒷받침합니다)와 교차합니다. 또한 [[learning-analytics]](데이터 거버넌스)와 [[student-experience]](거버넌스는 학생이 허용되는 사용을 항해하는 방식을 형성합니다)와도 연결됩니다.

**인지적 공유지의 통치.** 인지적 공유지 체계([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]])는 전문성의 재생성을 직업 수준의 집단적 행동 문제로 틀짓하며, 오스트롬식 거버넌스(경계 정의, 모니터링, 단계적 제재, 집단적 선택)를 요구합니다. 따라서 AI 거버넌스는 도구 규제에 관한 것일 뿐만 아니라 직업들이 필요로 하는 공유된 전문성 풀을 유지하는 것에 관한 것입니다 — 조직, 전문직 협회, 정책 수준에서.

### 교육 정책과의 관계

거버넌스는 [[educational-policy-ai|교육 AI 정책]]과 구별되지만 그것과 분리될 수 없습니다. **정책은 내용**입니다. 형식적 규칙과 진술(어떤 AI 사용이 허용되는지, 무엇이 공개되어야 하는지, 어떤 평가가 허용되는지). **거버넌스는 기계**입니다. 그것을 생산하고 이행하고 집행하고 개정하는 것. 누가 그것을 정하는지, 어떻게 자원을 받고 의사소통되는지, 준수와 이의 제기가 어떻게 처리되는지, AI가 진화함에 따라 어떻게 적응하는지. [[educational-policy-ai|정책]] 페이지가 *규칙 자체*와 그것들의 성숙도 격차를 목록화하는 곳에서, 이 페이지는 규칙을 실재로 만드는 *구조와 실천* — 지휘 그룹, 윤리 심의, 평가 거버넌스, 그리고 수준에 걸친 책임성 — 에 초점을 맞춥니다. 종이 위의 규칙은 정책이며, 소유되고 모니터링되고 집행되는 규칙은 거버넌스입니다. 둘은 상호 의존적입니다. 거버넌스 없는 정책은 집행되지 않으며, 정책 없는 거버넌스는 방향을 잃습니다.

**책임의 언어는 책임 있는 행위자를 지명하지 않은 채 남길 수 있습니다.** [[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal(2026)]]은 생성형 AI 고등교육 초록 366편에서 의무 또는 답변 가능성 표현 166개를 추출하여, 어느 것도 체계에 책임을 돌리지 않은 반면 33개는 부담자를 미특정으로 남겼음을 발견했습니다. "거버넌스가 필요하다"는 것은 소집하거나 결정하거나 집행하는 사람을 아무도 지명하지 않습니다. 기관과 정책 행위자는 의무 37건, 기관·교육자 환유 30건, 교육자 20건, 연구자 18건, 그리고 학생은 단 6건을 지녔습니다.

[[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić(2026)]]는 **윤리 및 데이터 거버넌스**를 신뢰할 수 있는 LA 기반 교육 개입의 일곱 가지 가능 요인 중 하나로 확인합니다 — LA와 AI의 윤리적 사용, 데이터 프라이버시, 보안, 책임성에 관한 정책 — 그리고 [[trust|신뢰성]](이행을 뒷받침하는 리더십과 거버넌스를 포함하여)을 의미 있는 데이터 기반 개입의 전제 조건으로 자리매김합니다.

- **거버넌스는 도구 안에 설계될 수 있습니다.** 교수법적 기반, 교수적 권위, 인간의 책임성과 통제, 학습자의 능동성과 인지적 참여, 맥락 특정성, 평가의 가시성을 아우르는 여섯 차원의 거버넌스 프로필은 거버넌스를 교수 도구의 상호작용 모형, 프롬프트, 루브릭, 승인 관문, 대시보드에 위치시키며, 도구가 얼마나 엄격하거나 허용적인지가 아니라 메커니즘이 교수적 기능에 맞는지를 묻습니다([[instructional-governance-design-computing-education-2026|Dickey, 2026)]]).

## 연결된 개념

- [[pedagogical-partnerships]] — 교수법적 파트너십
- [[ai-use-disclosure]] — AI 사용 및 공개 진술
- [[remote-proctoring]]
- [[ethics]]
- [[higher-ed]]
- [[privacy]]
- [[bias-mitigation]]
- [[academic-integrity]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[student-experience]]
- [[educational-policy-ai]]
- [[regulation]]
- [[summative-assessment]]
- [[ai-misuse-learning-harm]]
- [[trust-calibration]]
- [[generative-ai]]
- [[stakeholders]] — 우산 개념: AI 교육에서의 사람과 독자(학습자, 교사, 설계자, 행정가, 정책 입안자)
- [[student-support-and-success]] — 기관 AI 지원 체계를 위한 감독

## 연결된 문서

- [[ai-literacy-sdg-governance-framework-2026]] — 지속가능한 발전을 위한 거버넌스 역량으로서의 AI 리터러시: AIRE 분류 체계와 AI–SDG 연계(Islam, Morshed & Islam 2026)
- [[tan-aigem-ai-educational-management-2026]] — 교육 관리에서 AI 거버넌스를 위한 AIGEM 체계
- [[institutional-ai-policy-health-informatics-2026]] — CAHIIM 공인 건강정보학 프로그램 48곳에 걸친 AI 정책과 지침 문서: 비구속적이고 정직성 중심적인 지침으로서의 거버넌스(Eldredge 외 2026)
- [[guided-inquiry-genai-course-policy-2026]] — 안내된 탐구를 통해 생성형 AI 강좌 정책을 공동 설계하는 학생들(Hingle & Johri 2026)
- [[learning-analytics-to-educational-interventions-2026]] — 학습 분석에서 교육 개입으로: 신뢰할 수 있는 LA 기반 개입의 가능 요인들(Svetec, Divjak & Kadoić 2026)
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — AI 사용 선언에 대한 학생의 미준수
- [[vetter-hidden-cost-disclosure-genai-2026]] — 공개의 숨겨진 대가
- [[chang-should-i-tell-my-teacher-ai-disclosure-2026]] — 학생의 AI 공개, 낙인, 그리고 자기규제 학습
- [[weidlich-inference-at-risk-assessment-validity-2026]] — 어떤 추론이 위험한가: 평가 타당성 추론과 생성형 AI(Weidlich 2026)
- [[crompton-governing-genai-higher-ed-delphi-2026]] — 생성형 AI 거버넌스와 정책에 대한 글로벌 델파이
- [[qian-governing-genai-higher-ed-policy-2026]] — 지침에 의한 거버넌스: 혁신적인 미국 대학 50곳에 걸친 교원 설정 강의계획서 규칙과 네 단위 지원 생태계(Qian 2026)
- [[gutowski-hurley-genai-policy-legal-education-2025]] — 법학전문대학원 생성형 AI 정책에서의 교수진 거버넌스, 교원 재량권, 주기적 검토(Gutowski & Hurley 2025)
- [[wright-transcription-not-generation-2026]] — 지나치게 포괄적인 "AI" 금지, 형식 변환, 그리고 합리적 조정 문제(Wright 2026)
- [[ai-refusal-higher-education-diagnostic-non-use-2026]] — 증거로서의 거부: 고르지 않은 거버넌스, 이해의 의무, 그리고 비사용의 진단적 가치(Zagami 2026)
- [[baroudi-anticipatory-governance-ai-higher-ed-2026]] — AI를 위한 선제적 거버넌스와 리더십
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — 개방대학에서의 AIDA 이행
- [[leveraging-complex-systems-leading-for-transformative-change]] — SPARK: 변혁적 변화를 위한 리더십
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]] — 생성형 AI에 대한 학생의 참여(SDT)
- [[beyond-detection-authentic-assessment-ai-2025]] — 탐지를 넘어서: 실제적 평가 재설계
- [[genai-policies-higher-ed-computing]] — 컴퓨팅에서의 기관 생성형 AI 정책
- [[genai-declaration-frameworks-higher-education]] — AI 선언 체계
- [[genai-assessment-governance]] — 생성형 AI 시대의 평가 거버넌스
- [[ai-uk-higher-education-policy-2026]] — 영국 고등교육 정책에서의 AI
- [[raza-farooq-aied-review-2020-2025]] — AIED 연구에 대한 종합적 고찰
- [[cognitive-commons-ai-expertise-regeneration]] — 인지적 공유지의 비극: AI와 전문성의 재생성
- [[policy-deficit-ai-sel-2026]] — AI × SEL 연구에서의 정책 결핍
- [[agarwal-ethical-values-norms-aied-2026]] — 교육에서 AI를 위한 윤리 가치와 규범
- [[perrotta-zero-shot-governance-2026]] — 제로샷 거버넌스: 정책에서의 일반 목적 AI(Perrotta 2026)
- [[genai-higher-ed-agency-responsibility-discourse-2026]] — 누가 행동하고, 누가 알며, 누가 답하는가? 생성형 AI 고등교육 연구에서의 행위자, 인식론적 책임, 책임성에 대한 말뭉치 보조 담론 분석
- [[instructional-governance-design-computing-education-2026]] — 설계에 의한 교수 거버넌스: 컴퓨팅 교육에서 AI를 위한 체계
- [[genai-governance-australian-higher-ed-2026]] — 권위 있는 경계의 지도 작성: 호주 고등교육에서 생성형 AI 거버넌스에 대한 비교 정책-비녜 연구
