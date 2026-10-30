---
title: 교육과정 설계
created: "2026-06-02T10:44:35-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks]
translation_of: concepts/curriculum-design
source_updated: "2026-10-26T10:25:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **교육과정 설계** — 과정, 프로그램, 기관 전반에서 무엇을 가르칠지 계획하고 구조화하는 과정으로, 학습 목표, 내용 배열, 평가 전략, 기술 습득의 단계를 포함합니다. AI 시대에 교육과정 설계는 기초 지식과 새롭게 부상하는 AI 역량 사이의 균형을 잡아야 하며, 학생이 배우는 내용뿐 아니라 AI 도구와 함께 일하고 비판적으로 평가하는 방법을 어떻게 배우는지를 결정합니다.

## 생각해 볼 질문들

- 교육과정 설계는 프로그램 수준에서 학생이 무엇을 배워야 하는지를 묻는 반면, 학습 설계는 과정 수준에서 어떻게 배우는지를 묻습니다. AI가 한 학문을 재편할 때 이 두 층위 중 어느 쪽이 먼저 바뀌어야 한다고 보시나요?
- [[generative-ai|생성형 AI]]가 구현 수준의 업무를 자동화하면서, 일부에서는 교육과정이 시스템 설계, 추상화, [[critical-thinking|비판적 평가]] 쪽으로 옮겨가야 한다고 주장합니다. 저수준 기술이 덜 강조된다면 학생들이 무엇을 잃게 될까요?
- AI 시대의 교육과정 재설계는 종종 도구 활용 능력과 기초 지식 사이의 균형으로 이야기됩니다. 그 균형이 한 방향으로 너무 기울어진 것을 어디서 보셨나요?
- SAIL 프레임워크는 AI 리터러시를 연령에 걸쳐 단계적으로 다루며 접근성을 넘어서는 더 깊은 '디지털 격차'를 다루도록 설계되었습니다. AI 리터러시를 교육과정 전체에 걸쳐 녹여 넣는 것이 AI 과목 하나를 추가하는 것과 어떻게 다른가요?
- 모든 학문에 AI 역량을 내장해야 한다면, 교육과정 변경의 책임은 누구에게 있나요 — 교수자, 프로그램, 아니면 기관에 있나요? 그리고 교육자들이 그것에 성공하기 위해 무엇이 필요한가요?
- 교육과정은 주제의 목록이 아니라 여러 해에 걸친 기술의 연속입니다. 그런 더 긴 시각이 'AI 리터러시 단원'이 실제로 자리 잡는지에 어떤 영향을 주나요?

## 들어가며

교육과정 설계는 과정 수준에서 '어떻게'를 다루는 [[learning-design]]과 짝을 이루며, 프로그램 수준에서 교육의 *무엇*을 다룹니다. 이 지식베이스의 글들은 AI가 여러 학문(소프트웨어 공학부터 건축, 녹색 교육에 이르기까지)의 교육과정을 어떻게 재편하는지, 그리고 교육자들이 학문적 기초를 희생하지 않으면서 AI 리터러시를 내장한 교육과정을 어떻게 설계하는지를 탐구합니다.

### 주요 연구 주제

**AI 시대를 위한 교육과정 재설계**가 핵심 과제입니다. **[[reshaping-cs-education-genai|Lee et al.]]**는 학부 [[cs-education|컴퓨터 과학 교육]]의 재편에 관한 국제 워크숍의 결과를 종합하며, 생성 AI가 구현 수준의 프로그래밍을 자동화함에 따라 교육과정이 시스템 설계, 추상화, 비판적 평가 쪽으로 옮겨가고 저수준 구현 세부사항은 덜 강조되어야 한다고 주장합니다. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]**는 에이전트형 소프트웨어 공학(Agentic Software Engineering)을, [[agentic-ai|AI 에이전트]]를 관리하는 데 필요한 "의도의 진화"와 실무자의 규율에 초점을 둔 21개 모듈 교육과정으로 독자적인 학문으로 체계화했습니다. 둘 다 [[ai-literacy]]와 [[scaffolding]]과 연결됩니다.

변화를 가산적이지 않은 체계적 변화로 검토하며, [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]]는 범위 검토, 209개 기록의 서지학적 매핑, 36개 논문, 10명의 학술 리더 인터뷰를 삼각검증하여 다섯 가지 전환을 도출합니다. 지식 전달이 역량 개발에 자리를 내주는 것과, 국지적 실험이 기관 거버넌스로 옮겨가는 것이 그중 하나입니다.

**교육과정 매핑과 분석**은 AI를 활용해 기존 교육과정을 이해합니다. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]**는 AI 지원 소프트웨어 공학 과정의 강의계획서 23개를 분석해 공통 주제 — [[prompt-engineering|프롬프트 엔지니어링]], AI를 활용한 코드 리뷰, [[ethics|윤리적 고려사항]] — 를 찾아내고, 도구 활용 능력과 기초 지식의 균형을 강조하는 설계 지침을 도출했습니다. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]**는 계산적 방법을 적용해 여러 기관의 컴퓨터 과학 강좌 구조를 비교합니다.

가중치는 교육과정 분석이 보고하는 것을 바꿉니다. [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath et al. (2026)]]은 GPT-o3-mini가 48개 평가 각각에 대해 일곱 가지 기업 역량 전반에 100%를 배분하도록 하여 전문가 가중치에 대해 Krippendorff's alpha 0.81에 이르렀으나, 기술 설명이 명시적으로 언급하지 않는 역량에서는 일치도가 음수(-0.19)로 돌아섰습니다.

**AI 리터러시 통합**은 여러 학문에 걸쳐 AI 역량을 내장합니다. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]**은 모든 연령과 교육 단계에 적용 가능한 단계적 AI 리터러시 프레임워크를 제공하며 2·3차 [[digital-divide|디지털 격차]]를 다룹니다. **[[tracing-genai-literacy-interaction-patterns]]**는 AI 리터러시가 상호작용 양식을 통해 어떻게 발달하는지를 검토합니다. **[[hingle-collaborative-ai-literacy-2025]]**는 AI 리터러시 교육과정 개발의 협력적 접근을 탐구하며 [[collaborative-learning]]과 연결됩니다.

LearnAI는 내장형이 어떤 모습인지를 보여 줍니다. 5개 학문의 기존 강좌 18개 안에 짧은 발표로 이루어진 폭넓은 노출 층위(학생 293명)를 두고, 훈련된 학부생 또래 튜터가 진행하는 자발적 참여 1:1 공동 창작 세션을 짝지어, 다양한 수준의 학습자가 자신의 수준에서 AI 과제를 만나도록 합니다([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

실천에서의 통합은 프레임워크를 뒤따르지 못합니다. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]]는 응답한 교육·저널리즘 학생 중 13.8%만이 수강 과목에서 비판적 미디어 분석을 다루었다고 답한 반면, 97.8%가 그것이 중요하다고 평가했음을 발견했으며, 전문가 인터뷰는 이 격차를 미디어 교육보다 기술적·교수적 기술을 우선시하는 교사 연수로 추적했습니다.

39개의 STEAM 연구(2016–2025)를 대상으로 한 PRISMA 검토는 AI 리터러시 요소에서 유사한 불균형을 발견했습니다. 실행 사례들은 기술적 리터러시(AI의 기초 개념, 컴퓨팅 사고, 데이터 리터러시)는 발달시켰으나 윤리 인식, 창의적 상상력, 그리고 AI로의 창작·관리·설계는 충분히 발달시키지 않아, 각 단원을 이에 비추어 점검하는 것이 실천적 대응입니다([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).

학생의 목소리는 또 하나의 설계 투입물입니다. 경영학 4학년 학생 166명 중 84%가 과목에서 생성 AI를 가르치길 원했고 85%가 취업을 위해 필수적이라고 보았으나, 단 7%만이 대학에서 이에 관해 배웠다고 답했습니다([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

대학 입학 전 AI 교육에 대한 42개 연구의 검토는 교육과정이 AI4K12와 AI의 다섯 가지 큰 아이디어 같은 프레임워크에 기반한 역량 중심 모델로 옮겨가고 있음을 발견하며, [[ai-literacy]]는 학제를 가로지르는 역량으로 다뤄지지만 이를 평가할 표준화된 도구는 여전히 부재합니다([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

교수자와 고용주는 26가지 AI 기술 중 단 하나 — AI로 보조된 업무에 대해 현실적인 기대를 설정하는 것 — 의 중요성에만 동의했으며, 26가지 중 3가지만이 절반 이상의 교수자에 의해 가르쳐졌습니다. 이 보고서의 증거는 고등 교육과 고용주 사이의 AI 기술 격차를 보여 줍니다([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

K-12 머신러닝 활동 설계는 표면에 머물러 있습니다. ICE-T 프레임워크를 뒷받침하는 검토에서 보이지 않는 사용, 버튼 상호작용, 모델 배포가 부호화된 지도 학습 활동의 거의 60%를 차지했고, 개방적 창작은 단 두 번만 나타났으며, 기술적·사회적 관점이 함께 나타난 활동은 약 3%에 불과했습니다([[icet-ml-education-trust-2026|Haritz et al., 2026]]).

**[[discipline-specific-aied|전공 분야별]] 교육과정 혁신**은 교육과정 설계를 특정 분야에 적용합니다. **[[genai-architecture-education]]**는 생성 AI가 건축 설계 [[pedagogy]]를 어떻게 재편하는지를 탐구합니다. **[[talebzadeh-ai-green-education-2026]]**는 녹색 교육 교육과정에서의 AI 통합을 검토합니다. **[[connected-ai-lesson-planning-vietnam]]**과 **[[llm-cultural-relevance-k12]]**는 [[culturally-relevant-pedagogy|문화적으로 반응적인 교육과정 설계]]를 다룹니다.

**AI를 학문 옆이 아니라 안에 내장하라.** 세 층위(입문, 적용, 심화) AI 교육과정이 기계공학 학생의 추가 부담을 피하고자 컴퓨터 과학 선택과목을 추가하는 대신 39.1시간 과정 전반에 걸쳐 기존 열공학 주제에 머신러닝을 접목시켰고, 강의계획서와 데이터, 코드를 공개했습니다([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

저널리즘 사례는 가치 우선 변형을 보여 줍니다. 가치–과정–역량의 삼중 비계는 학생을 인간 단독 보도에서 AI 통합 업무로 이동시켰으나, 9명 중 8명(89%)이 윤리적 결정에 자신감을 보인 반면 저자와 편향에 관한 설문 문항은 피상적 이해만을 시사했습니다([[ying-genai-journalism-assessment-2026|Ngu and Weller (2026)]]).

**[[governance|기관]] 차원의 프레임워크**는 교육과정 변경을 조직 규모에서 다룹니다. **[[finkelstein-principled-ai-education-2025]]**와 **[[finkelstein-principled-ai-education-2025]]**는 여러 교육 프로그램에 AI를 통합하기 위한 원칙을 제공합니다. **[[ai-adoption-training-public-sector]]**는 공공 부문 교육에서 AI 교육과정 도입의 장애를 검토합니다.

**프로그램 전반에 AI를 배열하기.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]]는 "물렀다가 증폭하라(refrain, then amplify)" 프레임워크를 제안하며 생성 AI를 프로그램 수준에서 배열합니다. 어떤 역량이 형성되는 동안에는 생성 도구를 보류하고, 학생이 그것을 지휘하고 그 산출을 판단할 수 있게 된 뒤에야 그 역량을 증폭하기 위해 되돌려 줍니다. 형성-대-대리의 기준(어떤 작업 구간이 역량을 쌓는지, 아니면 도구를 통해 그냥 통과시키는지)에 따라 작동하며, 이 프레임워크는 교육과정 설계를 [[cognitive-offloading]], [[self-regulated-learning]], [[academic-integrity]]와 연결하고, 각 물림-증폭 전환점에 위조하기 어려운 검증 지점을 둡니다.

가장 높은 단계로 가는 지렛대는 더 많은 수업이 아닙니다. 후원된 캡스톤 프로젝트 89개에서, Workforce Readiness Level 6에서 7로의 상승은 산업에 내장된 경험(인턴십과 Manufacturing Extension Partnership 프로젝트)에 의해 관문 지어졌으므로, 학위에는 또 하나의 기술 선택과목이 아니라 일과 통합된 학습이 필요합니다([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

모델 역량의 교육과정 수준 결과는 AI 저항형 설계가 유통기한을 갖는다는 것입니다. 컴퓨팅 교육자들은 모델이 아직 할 수 없는 것에 맞춰 과제를 조정하다가 그 조정이 무너지는 것을 목격했습니다. 한 사이버보안 교수의 문제는 7~8개월 전에는 진정한 [[problem-solving|문제 해결]]을 요구했는데 그 후에는 간단히 풀렸습니다. 한 진행자는 유통기한을 약 한 학기로 추정했습니다. 워크숍의 구조적 발견은 거의 모든 적응이 기관의 조정 없이 한 강좌 안에서 개별 교수자에 의해 이루어졌다는 것으로, 지속 가능한 교육과정적 대응이 요구하는 조정이 부재했음을 보여 줍니다([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026)]]).

**생성 AI가 허용될 때의 전체 강좌 정렬.** 입문용 핵·입자 [[physics-education|물리]] 강좌의 2026년 재설계([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]])는 서로 다른 역할을 하는 세 가지 활동 유형을 통합했습니다. 개념과 기호를 위한 강의, 표준 분석 연습을 위한 튜토리얼, 그리고 비정상적으로 어렵고 다방법적인 문제로 이루어진 탐색적 "연구 형태" 과제로서의 숙제입니다. 보고된 마찰(선언되지 않은 프로그래밍 선수과목, 답을 얻는 것이 아니라 이해하기에 충분하지 않은 시간, 강의·튜토리얼·숙제·[[summative-assessment|시험]] 간의 정렬 불일치)은 생성 AI를 허용하는 것이 한 가지 과제 유형의 변경이 아니라 전체 강좌에 걸친 교육과정 정렬 작업을 요구한다는 것을 보여 줍니다. 이들이 권하는 구조는 AI 허용 탐색 과제는 가산점이 붙는 심화 과제로 유지하고, 보조 없이 치르는 서술형 시험이 성적을 결정하는 것입니다.

**통합 양식을 가르는 것은 사용 빈도가 아니라 정렬의 깊이입니다.** 경영 모듈 사례 17건에서 여섯 개는 생성 AI를 교수·학습·평가 전반에 체계적으로 내장했고(구성적), 아홉 개는 일관성 없이, 두 개는 산발적으로 그렇게 했습니다. 구성적 사례들이 가장 강한 참여, 역량, 교육과정 관련성 결과를 보고했습니다([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**비판적 검토 아래 놓인 구성적 정렬 조언.** 위의 출처들이 실천에서의 정렬을 보고하는 곳에서, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]]는 지침 자체를 하나의 담론으로 읽습니다. 2022년 11월부터 2025년 4월까지 발표된 회색 문헌 14편 — 대부분 기관 페이지와 중앙에 자리한 [[educational-development|학습·교수 부서]]의 장들 — 에 대한 [[qualitative-research|비판적 담론 분석]]은 구성적 정렬이 효율성 문제로 제시되는 것을 발견했습니다. 생성 AI는 루브릭을 작성하는 "효과적이고 효율한 방법", 과정을 "간소화하는" 것으로 의인화되어 "교육 전문가이자 조수", "스파링 파트너", "교수 설계에서의 지능형 조수"로 묘사되는 한편, 교직원은 "교과 내용 전문성"만 제공하고 도구가 "학습 목표 개발, 강좌 내용 구성 ... 및 강좌 구성요소 정렬의 중노동"을 떠맡았습니다. 복사·붙여넣기 프롬프트 요령과 번호가 매겨진 템플릿은 구성적 정렬을 표준화 가능한 산물로 규정하며 세 가지 실패 양식을 낳았습니다. 수행성(정렬된 것처럼만 보이는 정렬), 상황적·비판적 맥락의 지움, 그리고 정렬과 구성적 차원을 혼동하는 피상적 구성적 정렬입니다. 이들의 처방은 교육과정 설계 작업 흐름을 재배열합니다 — 교육자는 구성적 정렬의 어떤 부분도 위임하기 전에 그것을 지휘하고, 평가하고, 거부할 만큼 잘 이해해야 하며 — 도구는 지역 정책, 루브릭, 졸업 역량에 기반한 기관 [[rag|검색 증강]] 에이전트로 한정하고, [[educational-development|개발자]] 관계를 대체하지 않고 확장하는 "경계적 튜터" 역할을 둡니다.

**교육과정에 정렬된 모델링 과제 생성.** AI 기반 플랫폼은 설계 원칙과 [[rag|검색 증강]] 생성에 기반한 교육과정 정렬 문제와 교수법적 권고를 생성함으로써, 양질의 [[math-education|수학적 모델링]] 과제 설계에 필요한 교사의 시간과 자원 부족을 해결할 수 있습니다. 이 접근은 중등 학교 수학의 정비례 사례로 제시되었습니다([[ai-modeling-problem-generation-platform-2026]]). 강의 읽을거리 자체도 이제 생성 대상입니다. Sidorkin (2026)은 대학원 교육 리더십 강좌에서 상업 교과서를 매주 AI 생성 읽을거리로 대체했고, 학생들은 유용하다고 평가했으며 75%가 비교 가능한 다른 강좌보다 더 많이 배웠다고 동의했으나, 4,487쪽의 기록에서 APA 형식의 인용이 실린 쪽은 약 0.80%에 불과했고, 확인 가능한 출처 없이 단정적인 정책 주장을 캠퍼스나 시스템 이름과 짝지은 쪽은 약 1.03%였습니다. 교육과정 자료에 대한 교훈은 생성된 읽을거리를 교수 검토 아래의 초안 생산물로 다루고, 프롬프트 설계와 검증의 교수 노동을 예산에 반영하며, 출처 품질을 학생이 맥락에서 추론하도록 두지 않고 검증된 출처를 조수에게 큐레이팅하는 것입니다.

**교육과정에서 교실로의 층위에서 AI 지원 수업 계획.** 교육과정이 가르쳐지는 수업이 되는 지점에서, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo and Tahir (2025)]]는 아동 [[stem-education|STEAM]] 예술 교육에서 교사 생성 계획과 ChatGPT 보조 계획을 실험적으로 비교하여, AI 보조 계획이 여섯 명의 전문 교수에 의해 유의하게 높게 평가받음을(중앙값 20.5 대 17.6, p = .002, 큰 효과) 발견했습니다. 그 성과는 교사가 어떻게 위임하느냐에 달려 있습니다. 권장 방법은 전체 계획을 위임하는 대신 스스로 개요를 잡은 수업의 내용 공백을 채우는 것(교수 설계 [[agency|자율성]]을 보존)이며, 이들은 재현 가능하고 품질 관리된 생성을 위한 역할–지시–최종 목표 프롬프트 템플릿을 제시합니다. 이는 AI 수업 계획이 교사의 교육과정 결정을 대체하지 않고 그 안에 내장될 때 가장 강력하다는 증거입니다. 과학교육에서 전문가 검증은 플랫폼 설계에 대해 평행한 결론에 이릅니다. [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli and Yildirim (2026)]]은 11명의 [[science-education]] 전문가에게 터키 개정 교육과정과 공학 [[design-based-research|설계 기반]] 학습 모델에 정렬된 6학년 계획에 대해 ChatGPT-4와 교육 특화 도구(Teacher's Buddy)를 평가하게 했습니다. 교육 특화 플랫폼은 피드백 집약적 단계와 교육과정 정렬을 포함한 여덟 가지 품질 기준 전반에서 더 높은 점수를 받았는데, 이는 교수법적 구조를 AI에 내장하는 것이 더 잘 정렬된 산출물을 낳는다는 증거입니다. 그러나 일부 전문가는 사회정서적 강조가 더 강한 범용 계획을 여전히 선호했고, 11명 중 7명은 계획을 직접 사용 가능하다기보다 "수정하여 적용 가능하다"고 판단했습니다. 생성된 계획이 교육과정 기준과 과정 모델에 얼마나 잘 정렬되는지는 AI 자체뿐 아니라 플랫폼의 선택과 프롬프트 틀에 의해 좌우됩니다.

구조가 — 프롬프트 문구가 아니라 — AI 초안 작성을 실제 운영에서 신뢰할 만하게 만드는 것입니다. [[curriculum-as-code-instructional-design-2026|Paiva (2026)]]의 Curriculum-as-Code 파이프라인은 맥락을 적극적으로 가지치기하고 28개 프로젝트 맥락에서 자료를 절차별로 생성하여, 교수의 준비 시간을 지시당 약 8시간에서 2시간으로 줄였고 사람이 검토해 잡아낼 개념적·수학적 환각을 남기지 않았습니다.

### 관련 개념과의 연결

교육과정 설계는 [[learning-design]]과 직접 연결됩니다. 교육과정은 무엇을, 수업은 어떻게를 규정하기 때문입니다. AI 역량의 내장이 교육과정의 주요 과제이므로 [[ai-literacy]], 교육과정 변경이 교육자 준비를 요구하므로 [[teacher-role]]과 [[educational-development]], 잘 설계된 교육과정이 강좌와 여러 해에 걸쳐 기술 발달을 뒷받침하므로 [[scaffolding]]과 연결됩니다. [[higher-ed]]와 [[k-12]] 연결은 교육과정 설계가 여러 교육 수준에 걸쳐 관련됨을 반영합니다.

## 흔한 오해

- **"LLM은 높은 신뢰도로 타당화되면 교육과정을 매핑할 수 있다."** GPT-o3-mini는 **48개 평가 각각에 대해 일곱 기업 역량 전반에 100%를 배분**하여 전문가 가중치에 대해 **Krippendorff's alpha 0.81**에 이르렀고, **일치도**는 특정 역량에서 무너졌습니다. 전체 신뢰도가 높으면서 일치도가 고르지 않은 것이 매핑을 신뢰하기 전에 점검해야 할 양상입니다.
- **"AI 리터러시를 내장한다는 것은 강좌를 추가한다는 뜻이다."** LearnAI는 내장형을 보여 줍니다. **다섯 학문의 기존 강좌 18개 안에 짧은 발표로 이루어진 폭넓은 노출 층위(학생 293명)** 입니다. 노출은 한 단원에 모인 것이 아니라 교육과정 전반에 분산되었습니다.
- **"학생들은 이미 미디어를 비판적으로 평가할 수 있는 상태로 온다."** 응답한 교육·저널리즘 학생 중 **13.8%만이** 수강 과목에서 비판적 미디어 분석을 다루었다고 답한 반면, **97.8%가 그것을 중요하다고 평가**했습니다. 기술을 가치 있게 여기는 것과 그것을 배우는 것 사이의 격차가 교육과정의 기회입니다.

## 연결된 개념
- [[pedagogical-partnerships]] — 교수 파트너십
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — 상위 개념: AI 교육의 교수법과 교수 전략
- [[recommender-systems-and-learning-paths]]
## 연결된 문서
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — GenAI 기반 구성적 정렬 지침의 비판적 담론 분석(McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — 교육을 통한 AI 시스템의 신뢰 다루기: 교수법적 관점
- [[refrain-amplify-genai-curriculum-2026]] — 생성 AI를 배열하는 물림-후-증폭 교육과정 프레임워크(Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — 열공학에서의 프로젝트 기반 AI 교육 교육과정
- [[ying-genai-journalism-assessment-2026]] — 교실 설계에서 뉴스룸 실천으로: 생성형 AI를 다루는 평가 개입 설계
- [[rook-plumb-genai-curricula-student-insights-2026]] — 대학 교육과정에 생성형 AI 통합하기: 학생의 시선
- [[zhou-constructive-alignment-genai-business-2026]] — 실험에서 통합으로: 구성적 정렬의 렌즈를 통한 경영 고등교육에서의 생성형 AI 내재화
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — AI 시대 스마트 제조를 위한 Workforce Readiness Level 프레임워크
- [[rewriting-curriculum-genai-pedagogy-2026]] — 교육과정 다시 쓰기: 생성형 AI가 이끄는 교수법적 변화
- [[critical-media-literacy-education-2026]] — 기술, 교육, 비판적 미디어 리터러시: 가능성, 도전, 기회
- [[reshaping-cs-education-genai]] — 생성형 AI 시대의 학부 컴퓨터 과학 교육 재구성
- [[ase-26-agentic-software-engineering-curriculum]] — 하나의 학문으로서의 에이전트형 소프트웨어 공학을 위한 ASE-26 교육과정
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — 강의계획서 분석을 통한 AI 지원 소프트웨어 공학의 새 교육과정 지형 그리기
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — 교육에서 형평성 있는 AI 리터러시 틀 설계를 위한 델파이 연구 결과로서의 비계적 AI 리터러시(SAIL) 틀
- [[curriculum-as-code-instructional-design-2026]] — 코드로서의 교육과정: STEM 교육을 위한 AI 지원 수업 설계 구조
- [[tracing-genai-literacy-interaction-patterns]] — 생성형 AI 리터러시 추적하기: 학문적 글쓰기에서의 학생-AI 상호작용 양상
- [[finkelstein-principled-ai-education-2025]] — 교육에서의 AI에 대해 생각하는 원칙 있는 방식: 목표와 모형에 근거한 교육자와 정책 입안자를 위한 지침
- [[hingle-collaborative-ai-literacy-2025]] — AI 리터러시 촉진을 위한 협력 학습 활동에 관한 체계적 고찰
- [[ithaka-sr-ai-skills-college-graduates-2026]] — 교육과정 매핑을 위한 26가지 평가 가능 AI 기술 프레임워크
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: 학제를 넘는 적시의 AI 공동 창작
- [[ai-video-dual-gatekeeping-2026]] — "아니오"라고 말하는 것이 더 나은 영상을 만든다: 교수법에 뿌리내린 AI 영상 제작을 위한 이중 관문
- [[niri-steam-ai-literacy-review-2026]] — AI 리터러시를 위한 STEAM 교육: 체계적 문헌고찰
- [[caruana-pre-university-ai-education-slr-2026]] — AI로 이끄는 미래를 위한 학습자와 교사 준비하기: 대학 전 AI 교육에 관한 체계적 문헌고찰(Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — 수학적 모델링 문제를 생성하는 AI 기반 플랫폼(ADDIE, RAG)
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — 인증을 위한 가중치 기반의 전문가 검증 역량 매핑
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]] — 아동 STEAM 미술 교육을 위한 ChatGPT 지원 수업 계획: 이점, 도전, 방법, 그리고 프롬프트 틀에 관한 실험 연구
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]] — 과학 교육 전문가의 관점에서 본 AI 지원 수업 계획의 적합성
- [[ai-particle-physics-education-redesign-2026]] — 입자 물리 교육에서의 AI: 연구 문제와 기초 역량
- [[computing-assessment-genai-workshop-report-2026]] — AI가 여러분의 숙제를 해 줄 수 있습니다. 이제 무엇을 할까요? 생성형 AI 시대의 컴퓨팅 평가에 관한 온라인 워크숍 보고서
