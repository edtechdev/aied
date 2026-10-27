---
title: 학습 설계
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks]
translation_of: concepts/learning-design
source_updated: "2026-10-27T08:20:32-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: revision
    date: "2026-09-22"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **학습 설계**(*수업 설계*라고도 합니다) — 학습 요구의 분석과 교수 자료 및 활동의 설계, 개발, 실행, 평가를 통해 효과적인 학습 경험을 만들어 가는 체계적인 과정입니다. AI는 콘텐츠 제작을 자동화하고, [[adaptive-learning|적응형 학습]] 경로를 가능하게 하며, 데이터에 기반한 반복을 지원하고, 수업 설계자의 역할을 대체하기보다 보강함으로써 학습 설계를 변화시키고 있습니다.

## 생각해 볼 질문들

- 경험했거나 직접 설계한 강좌나 수업 하나를 떠올려 보십시오. '무엇을 가르칠 것인가'(교육과정)가 끝나고 '어떻게 가르칠 것인가'(학습 설계)가 시작되는 지점은 어디였으며, 둘은 어떻게 상호작용했습니까?
- AI를 더 잘 쓸 줄 알면 자동으로 더 나은 교육 콘텐츠가 만들어진다는 것은 흔한 가정입니다. 이 페이지는 학습 효과를 결정하는 것이 AI 활용 능력이 아니라 명시적인 교수법적 구조라는 근거로 이에 반박합니다. 인상적이지만 가르치지 못하는 산출물을 본 적이 있으신가요?
- AI 도구가 하나의 프롬프트로 완결된 강좌를 만들어 낼 수 있다면, 덜 중요한 것이 아니라 더 중요해지는 인간의 결정은 무엇일까요? 이 페이지는 AI가 수업 설계자의 역할을 대체하기보다 보강한다고 주장합니다. 그런 보강된 역할은 어떤 모습일까요?
- ADDIE 같은 일부 수업 설계 모형은 경직된 선형적 단계로 사용되기도 합니다. 그러나 이 페이지는 이들을 반복적이고 유연한 계획의 휴리스틱으로 다룹니다. 어떤 과정을 너무 문자 그대로 따르는 것이 좋은 설계를 해칠 수 있을까요?
- 이 페이지는 교수법에 기반한 프롬프트 설계(예: 학습 이론에 근거한 5단계 프레임워크)가 상위 수준의 성과를 유의미하게 개선했음을 보여 줍니다. AI 튜터를 만든다면, 그 교수 전략이 추적 가능하고 재현 가능하게 남도록 명시적인 설계 층위에 무엇을 담겠습니까?

## 들어가며

학습 설계는 AI의 역량과 효과적인 교수법 사이의 가교입니다. [[curriculum-design]]가 프로그램 차원에서 *무엇을* 가르칠지를 다룬다면, 학습 설계는 강좌와 수업 차원에서 *어떻게* 가르칠지를 다룹니다. 이 지식베이스의 글들은 학습 설계자를 위한 도구로서의 AI와, 효과적인 [[intelligent-tutoring|AI 튜터링]] 시스템을 만드는 학습 설계 원칙이라는 두 가지를 함께 탐구합니다.

설계 작업이 실제로 무엇을 수반하는지는 그 자체로 경험적 질문입니다. 설계 도구에 내장된 챗봇과 함께 작업한 신진 학습 설계자 5명의 설계자-챗봇 대화 1,378회를 분석한 [[tang-chatbots-learning-design-2026|Tang 등(2026)]]은 대화가 의도한 학습 결과와 교수법적 접근에 집중되고 콘텐츠 생성에 집중되지 않음을 발견했습니다. 설계자들은 교육과정 구성 요소를 구체적인 과제로 바꾸는 동안 정렬을 확인하는 차원에서 학습 결과에 반복해서 되돌아갔고, 조력자의 역할은 용어를 분명히 하는 것에서 과제 설계를 지원하는 것으로, 그리고 마감 전 검증 점검을 수행하는 것으로 단계에 따라 옮겨갔습니다. 이러한 근거에 따르면 설계 지원은 자료를 만들어 내는 것보다 설계 의도의 일관성을 유지하는 데 더 가깝습니다.

학습 분석과 생성형 AI는 설계의 서로 다른 부분을 뒷받침합니다. 한 호주 대학의 포커스 그룹 11개를 대상으로 한 조사에서 분석에 관한 담론은 맥락과 강좌 차원의 문제 해결과 가장 많이 함께 나타났고(0.32), GenAI에 관한 담론은 평가 설계(0.26)와 학습자 자기결정을 위한 설계(0.15)에 집중되었습니다([[claassen-learning-analytics-genai-learning-design-2026|Claassen 등(2026)]]).

### 주요 연구 주제

**AI 지원 콘텐츠 제작**은 가장 직접적으로 전환적인 적용입니다. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]**는 생성형 AI를 LaTeX와 Python과 결합하여 [[stem-education|STEM]] 자료 제작을 자동화하는 6단계 구조를 제시하며, 8개 모듈과 28개의 프로젝트 맥락에 걸쳐 검증되었고 학습자의 품질 평점은 10점 만점에 8.5~9.9점이었습니다. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]**는 ADDIE 모형을 축으로 구성된 다중 에이전트 프레임워크를 사용하여, 역할 기반 에이전트(담당 교수, 수업 설계자, 강좌 코디네이터)가 협력하여 완결된 강좌 자료를 생성합니다. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]**는 강좌 말뭉치에 기반한 적응형 [[pedagogy|교수법적]] [[video-education|영상 생성]]을 위한 구조화된 파이프라인을 제공하며, 교육 콘텐츠 생성에 AI 활용 능력이 아니라 명시적인 교수법적 구조가 필수적임을 보여 줍니다. [[generative-ai|생성형 AI]] 플랫폼은 자신이 만들어 내는 콘텐츠에 학습 설계 원칙을 구현할 수도 있습니다. [[ai-modeling-problem-generation-platform-2026|수학적 모델링 문제를 생성하는 AI 기반 플랫폼]]은 확립된 설계 원칙과 [[prompt-engineering|검색 증강 생성]]을 결합하고, ADDIE 접근을 거쳐 기존의 콘텐츠 생성기가 만들어 내지 못하는 교수법에 기반한 과제와 권고를 산출했습니다. 그러나 이러한 AI 지원 콘텐츠와 수업 생성의 효과는 교수자 자신의 전문성에 따라 좌우됩니다. [[choi-teacher-ai-interaction-lesson-design-2026|Choi 등(2026)]]은 경험이 많은 교수자가 AI가 생성한 수업 아이디어를 학생과 맥락에 맞추어 비판적으로 변용하는 반면(재프롬프트와 산출물 보완), 신규 교수자는 AI의 제안을 그대로 받아들이는 경향이 있음을 발견했습니다. 즉 AI 콘텐츠 도구의 교수법적 가치는 도구가 아니라 교수자의 경험과 AI 활용 능력에 달려 있습니다. 학습 과제의 교수-AI 공동 설계에 대한 [[wang-teacher-ai-co-design-review-2026|체계적 고찰]](Wang, Liu & Islam 2026)은 28개 연구(2015–2025)에 걸쳐 이 양상을 큰 규모에서 확인합니다. GenAI는 주로 수업 계획, 프롬프트 생성, 창조적 아이디어 산출에 쓰이며, 지배적인 협업 양상은 더 완전한 공동 설계자가 아니라 조력자이자 콘텐츠 생성자로서의 AI입니다. 효율성, 응답성, [[creativity]], [[equity-in-ai-education|형평성]]이 되풀이되는 이점으로 나타납니다. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]]는 모둠 활동 설계에 대한 교수자 전문성의 발견을 더 분명히 합니다. 경험이 많은 교수자는 AI에 익숙한 정도와 무관하게 신규 교수자보다 더 풍부하고 더 시너지적이며 ZPD에 더 잘 맞춘 역할 구성을 AI가 설계한 협력 활동에서 만들어 내며, AI 산출물을 효과적인 [[collaborative-learning|차별화된 모둠 학습]]으로 바꾸는 지렛대가 '교수법적 프롬프트 리터러시'임을 드러냅니다.

Aila 시험은 그 양상에 계획 시간 수치를 붙입니다. 무작위 배정된 초등학교의 교사들은 이 도구로 주당 2.51시간을 수업 준비에 썼고 도구 없이는 3.32시간을 썼지만, 중앙값 교사는 수업의 21%에서 40%만을 처음부터 계획했으며, 이는 처음부터 설계하는 도구가 다루는 사례입니다([[roy-aila-lesson-planning-teacher-choices-2026|Roy et al., 2026]]).

생성된 자료가 부족한 지점은 교육과정과의 적합성입니다. 수학 교사 일곱 명은 AI가 생성한 생산적 실패 문제를 전반적 품질에서는 인간이 만든 문제에 근접하게 평가했으나(25점 만점에 M = 17.19 대 17.43), 교육과정 정렬에서는 더 낮게 평가했습니다(M = 2.57 대 3.29). 따라서 생성된 문제는 길이, 읽기 난이도, 시각 자료에 대한 수정이 여전히 필요했습니다([[rhaimi-productivemath-2025|Rhaimi 등(2025)]]).

**교수법에 기반한 AI 튜터링**은 수업 설계 원칙을 AI 시스템 설계에 적용합니다. **[[didactical-teacher-assistant-dimensional-modeling|Brisson 등]]**은 교수 전략이 명시적인 외부 층위에 부호화된 교수법 중심의 [[llm]] 교수 조력자를 만들었습니다. 이로써 콘텐츠 선택과 교수법적 구조화가 추적 가능하고 재현 가능해져, [[rethinking-scaffolding-llm-tutors]]의 불투명성 우려를 직접적으로 다룹니다. **[[instructional-guidance-genai-learning|Hou 등]]**은 생성형 [[learning-theories|학습 이론]]에 기반한 5단계 [[prompt-engineering|프롬프트 설계]] 프레임워크가 상위 수준의 인지적 성과를 유의미하게 개선했음을 보여 주며, 학습 효과를 결정하는 것이 AI에의 접근이 아니라 교수적 안내임을 드러냈습니다. 이 둘은 [[scaffolding]]와 [[intelligent-tutoring]]과 연결됩니다.

**프레임워크와 평가**는 구조화된 접근을 제공합니다. **[[bridging-instructional-design-framework-math]]**와 **[[cotal-formative-assessment-scoring-2026|CoTAL]]**는 [[human-in-the-loop-ai|인간 참여형]] 설계 원칙을 보여 줍니다. **[[genai-mindtool-generative-learning]]**은 AI를 '마음도구'로, 즉 학습자의 사고를 대체하기보다 확장하는 인지적 동반자로 위치 짓고, 수업 설계 이론을 AI 통합에 직접 적용합니다. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]**는 보편적 학습 설계 원칙을 적용하여 교육자를 위한 접근 가능한 AI 사고 동반자를 만들고, 수업 설계를 [[inclusive-learning]]에 연결합니다. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]**(Activate–Inquire–Reflect)는 인지적으로 활성화된 AI 활용을 위한 과제 구조화 프레임워크로, 예측, 해석, 평가가 학습자의 몫으로 남도록 AI의 기여를 제한합니다. 이는 [[self-regulated-learning]], 인지 부하 이론, [[human-ai-collaboration]]에 기반한 탐구 순환의 AI 특정 변형입니다. 이러한 설계 프레임워크를 보완하여, [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn 등(2026)의 분류]]는 설계 방법이 아니라 *분류*를 제공합니다. 여섯 개의 범주(학습 목표, 콘텐츠, 표상 형식, 인식론적 [[student-engagement|참여]], 사회적 설계, 산출물)로 설계자와 [[research-methods-aied|연구자]]가 학습자가 GenAI에 왜, 무엇을, 어떻게, 무엇으로, 누구와 함께 참여하는지를 명시적으로 드러냄으로써 GenAI 학습 활동을 기술하고 비교하고 상상할 수 있게 합니다. 포스트디지털 대화를 통해 경계 대상으로 만들어졌습니다. 스마트 교실 프레임워크는 이를 [[teacher-education|교사 교육]]으로 확장합니다. [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, Wang(2026)]]는 학습 효과, 정보통신기술(ICT), 교실 조직이라는 스마트 교육을 위한 3차원 프레임워크를 제안하고, 이를 [[math-education|수학]] 교육학 석사 강좌에 구현합니다. 이 강좌는 [[automated-assessment|자동 채점]], 개인화된 권고, 다중 [[ai-feedback-quality|AI 피드백]]을 수업 전·중·후 단계에 걸쳐 통합합니다. 준실험에서 학생들이 전문적으로 근거 있는 수업 목표를 정밀하게 수립하는 능력에서 유의미한 향상이 나타나, 이식 가능한 **D-T-E 모형**(Disciplinary Demand–Technological Empowerment–Evaluation Loop)을 산출했습니다. 이는 스마트 교육 개념을 실제 수업 설계 실천으로 옮기려는 [[educational-development|교사 교육자]]를 위한 [[discipline-specific-aied|전공 분야별]] 지침입니다.

**도달 범위를 염두에 둔 설계.** Halani의 7개 지렛대 프레임워크는 각 강좌 환경에서 학생이 AI와 단둘인 상황에서도 여전히 작동하는 것은 어느 것인지를 묻습니다. 성적이 증명하는 것을 바꾸거나, 사유 없이는 완수할 수 없는 과제를 두는 것과 같은 구조적 조치는 과정이 중요하다고 말하는 것보다 더 멀리 도달합니다([[halani-designing-for-reach-2026|Halani, 2026]]).

**사고를 보호하도록 도구를 제약하기.** 9주에 걸친 논증적 글쓰기 설계는 질문을 던지고 학생의 산문 작성을 거부하는 교수자가 경계를 정한 챗봇을 순차적으로 배치했습니다. 고등학생 네 명이 AI의 수동적 소비자에서 산출물에 이의를 제기하는 평가자로 옮겨갔으며, 향상을 이끈 것은 무제한적 생성성이 아니라 전략적 제약이었습니다([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**설계 지렛대로서의 루브릭 기반 프롬프트 설계.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar 등(2026)]]은 루브릭이 인간의 교수법적 의도와 기계의 추론 사이의 매개 인터페이스로 기능함을 보여 주었습니다. 평가 기준을 고정된 도구가 아니라 수정 가능한 설계 산출물로 다루고 LLM과 반복적으로 함께 다듬었을 때, 학생 설계 과제에 대한 LLM-인간 일치도가 54.75%에서 81.25%로 높아졌습니다. LLM용으로 설계된 루브릭은 정밀성과 유연성 사이의 균형을 잡아야 합니다. 너무 모호하면 자유로운 해석을 부르고, 너무 경직되면 모델을 패턴 매칭으로 전락시킵니다. 역할을 인식하는 프롬프트 설계(강사, 동료 검토자, 연구비 검토자)는 서로 다른 평가적 피드백을 산출했습니다. 이는 루브릭 엔지니어링이 AI 평가 행위를 규정하는 구체적인 학습 설계 실천임을 뜻하며, 인간 참여형 감독은 필수적으로 남습니다.

**수업 설계를 위한 AI 에이전트**는 이 분야를 [[agentic-ai|에이전트형 AI]]로 확장합니다. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]**는 LLM 기반 수업 설계 에이전트를 평가하기 위한 최초의 표준화되고 이론에 기반한 벤치마크입니다. 그 25,795개 시나리오로 이루어진 Context Matrix(51개 맥락 변수 × ADDIE의 33개 ISD 하위 단계)는 고전적 ISD 프레임워크(ADDIE, Dick & Carey, Rapid Prototyping ISD)에 기반한 에이전트가 이론에 기반하지 않은 에이전트를 능가함을 보여 주며, 수업 설계가 일반적인 프롬프트 과제가 아니라 구조화된 학문 분야임을 경험적으로 검증합니다. 에이전트는 설계의 *제작자*일 뿐 아니라 *비평가*이기도 합니다. [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]]는 학생처럼 다단계 온라인 수업을 탐색하는 단일 자율 웹 에이전트를 사용하여 실제 학습자가 참여하기 *전에* 학습 설계를 평가합니다. 이 에이전트가 기술한 학습자 경험은 초보자가 이탈할 지점을 예측하고 실행 가능한 설계 피드백을 드러내며, 모든 기준선은 물론 시뮬레이션된 학습자 집단보다도 뛰어난 성과를 냈습니다. 이는 출시 전 에이전트 평가를 인간의 설계 반복에 대한 저비용 보완으로 자리매김합니다. **[[wang-multi-agent-systems-learning-designers-2025]]**와 **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]**는 수업 설계 모형을 중심으로 역할 기반 에이전트를 조율하는 다중 에이전트 프레임워크를 탐구하고, **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]**는 교수자와 에이전트가 기술적·교수법적·내용 지식을 어떻게 함께 적용하는지를 살핍니다. 이 작업은 수업 설계를 [[benchmark|벤치마킹]], [[ai-ed-evaluation]], 그리고 대규모의 [[curriculum-design|교육과정]] 설계에 연결합니다.

### 관련 개념과의 연결

학습 설계는 [[ai-education|교육에서의 인공지능]]의 가교 역할을 하는 분야입니다. 이는 [[curriculum-design]](무엇을 가르칠지)와 [[scaffolding]](학습자를 어떻게 지원할지), [[educational-development]](교육자를 어떻게 준비시킬지), [[generative-ai]](도구 그 자체)를 연결합니다. AI 도구가 학습 설계자와 교수자가 하는 일을 다시 규정하므로 [[teacher-role]]과 밀접하게 결합되고, 효과적인 AI 통합에 교육자가 AI의 역량과 한계를 이해해야 하므로 [[ai-literacy]]과도 결합됩니다. 설계 작업은 결국 *활동의 질서*로 귀결됩니다. [[pedagogical-patterns|교수법적 패턴]]은 검증된 움직임의 순서들을 목록화하여, 설계자가 무엇을 포함할지뿐 아니라 수업의 어디에 AI가 자리할지를 결정할 수 있게 합니다. [[learning-sciences|학습과학]]은 이 원칙들 뒤에 놓인 연구 분야입니다. 이 페이지가 학습 경험을 만드는 전문적 실천을 다룬다면, 학습과학은 그 실천과 그 설계를 경험적으로 연구하고, 학습 설계가 이후에 실행에 옮기는 인지적·동기적·사회적 원칙을 만들어 냅니다.

### 학습 설계가 학습 향상을 결정하는 방식

학습 설계는 AI가 [[learning-gains|학습 향상]]을 만들어 내는지 아니면 단지 AI가 부풀린 수행만을 만들어 내는지를 가르는 지렛대입니다. 이 지식베이스의 근거는 이 점에서 일관됩니다. **같은 AI 도구라도 그것을 둘러싼 학습 경험이 어떻게 설계되는가에 따라 큰 향상을 내기도 하고 순손해를 내기도 합니다.** [[instructional-guidance-genai-learning|Hou 등]]은 학습 이론에 기반한 5단계 프롬프트 설계 프레임워크가 상위 수준의 인지적 성과를 유의미하게 개선한 반면 AI에의 접근만으로는 그렇지 않았음을 보여 주었고, [[genai-mindtool-generative-learning|마음도구]]와 [[airis-cognitively-activated-ai-physics-2026|AIRIS]] 프레임워크는 학습자의 인지적 작업을 보존하여 과제 효율이 아니라 지속적인 향상이 만들어지게 합니다. [[learning-gains]]를 보호하는 설계 선택, 즉 학생의 시도를 요구하는 스캐폴딩, 도움을 받지 않은 결과 측정이 동반되는 [[formative-assessment]], 학습자를 행위자로 남겨 두는 교수법적 구조는 이 분야의 발견을 그대로 반영합니다(참고: [[learning-gains]]). AI는 코칭할 때는 강한 향상을, 답을 줄 때는 해가 됩니다. 반대로 잘못 설계된 AI 통합 수업은 겉보기 성공이 학습의 부재를 가리는 [[cognitive-offloading|수행-학습 격차]]에 빠집니다.

### 설계자와 개발자를 위한 실천적 지침

AI 지원 학습 경험을 만드는 수업 설계자, 강좌 개발자, 엔지니어에게 이 지식베이스의 발견은 실행 가능한 실천으로 옮겨집니다. 실천 자체에 앞서 하나의 경계를 표시할 가치가 있습니다. 이 페이지가 말하는 학습 설계는 알려진 학습자 집단을 위한 강좌의 설계이며, 설계자가 만나 보지 못할 사람들이 가르치는 많은 강좌가 사용할 제품에 같은 원칙을 새기는 일은 [[educational-technology-developers]]의 작업입니다. 거기서는 기본값, 설정 가능성, 문서화가 교수법적 무게를 지닙니다.

**AI 생성을 구조화된 수업 설계 모형에 닻을 댑니다.** AI 콘텐츠는 그 뒤에 놓인 교수법적 구조만큼 좋을 뿐이며, 품질을 결정하는 것은 AI 활용 능력이 아니라 명시적인 구조입니다. 인정된 모형(ADDIE, Dick & Carey, 신속 프로토타이핑)을 중심으로 설계하고, 모형이 교수법적 결정을 스스로 추론하기보다 그것을 명시적으로 부호화하십시오.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**수업 설계 모형 외에 원칙 수준의 프레임워크도 도입합니다.** 강좌 차원의 모형은 하나의 설계를 구조화하지만, 공개된 프레임워크는 많은 설계가 충족해야 할 기준을 설정합니다. 전문을 읽어 볼 만한 예로 Digital Promise의 *Powerful Learning with Emerging Technology*는 근거 기반, 학습자 중심, 역량 구축이라는 세 가지 원칙 아래 지침을 조직하고, 각 원칙을 실천과 전략으로 확장하며, [[privacy]], [[explainable-ai|설명 가능성]], 공정성을 선택적 부가물이 아니라 특정 실천에 부수되는 안전 의무로 붙입니다.([[powerful-learning-with-emerging-technology-2025]])

**AI 설정을 과제에 맞추고 정교함에 맞추지 않습니다.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]]는 프롬프트, 맥락, 하네스, 검증된 순환이라는 네 개의 층위를 구분하고, 검증 가능한 결과를 낼 수 있는 가장 덜 복잡한 설정을 쓰는 최소 충분 층위 원칙을 적용합니다. 오케스트레이션을 더할수록 조율, 검증, 프라이버시, 이해의 비용이 따르기 때문입니다.

**콘텐츠 제작에는 역할 기반 다중 에이전트 작업 흐름을 사용합니다.** 하나의 일반적인 프롬프트 대신, 정의된 파이프라인을 통해 협력하는 서로 다른 에이전트와 역할(담당 교수, 수업 설계자, 강좌 코디네이터)을 조율하십시오. 이는 실제 강좌 팀이 일하는 방식을 그대로 반영하며 단일 프롬프트보다 더 완결된 자료를 산출합니다.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**AI에의 접근만이 아니라 교수적 안내를 제공합니다.** 학습자가 AI와 직접 상호작용하든 AI가 생성한 자료와 상호작용하든, 학습 이론에 기반한 안내(예: 생성적 학습 원칙에 근거한 단계적 [[scaffolding|스캐폴딩]] 프롬프트)는 상위 수준의 성과를 이끌어 냅니다. 접근만으로는 그렇지 못합니다. 마음이 학습하는 방식에 맞추어 학습 활동을 설계하고, AI를 사고를 대체하기보다 확장하는 인지적 '마음도구'로 다루십시오.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**망각을 모형화하고, 감쇠가 가장 큰 곳에 복습을 배치합니다.** G4L은 경과 시간과 반복 횟수로 구동되는 Ebbinghaus 망각 곡선으로 지식의 감쇠를 표상하며, 가장 최근에 채점된 것을 다시 제공하기보다 감쇠에 가장 취약한 단원을 우선시합니다([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]])).

Fowlin 등(2026)은 AI가 어디에 들어갈지를 결정하는 실행적 방법을 더합니다. 활동을 독립적으로 하는 편이 나은 부분과 AI와 결합하는 편이 나은 부분으로 풀어 헤치고, 그 분할에서 교육자의 판단을 중심에 남겨 두는 것입니다([[fowlin-operationalizing-learning-principles-ai|Fowlin 등(2026)]]).

**콘텐츠를 추적 가능하고 검토 가능하게 만듭니다.** AI의 산출물이 학습자에게 닿기 전에 인간 설계자가 검토하고 바로잡을 수 있게 하고, 왜 이 콘텐츠를 이 순서에 두는지라는 교수법적 근거를 살펴볼 수 있도록 AI 생성을 구조화하십시오. 이는 품질과 [[trust]]를 잠식하는 생성식 교수의 불투명성 우려를 함께 다룹니다.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])

- **AI가 생성한 미디어는 합성 후가 아니라 대본 단계에서 검토합니다.** PedaCo는 렌더링 이전에 교수법적 오류를 고치기 쉬운 대본에 교육자의 검토를 놓습니다. 수업적 타당성 평점은 3.07에서 3.86으로 높아졌고, 자동화된 합성 후 층위는 다섯 가지 차원 중 두 가지만 개선했습니다([[ai-video-dual-gatekeeping-2026|Kim, Baek & Kwak (2026)]]).

**처음부터 [[accessibility]]를 염두에 두고 설계합니다.** 다양한 학습자를 섬기도록 AI 도구와 AI가 생성한 자료를 만들 때 [[universal-design-for-learning|UDL]] 원칙을 적용하고, 접근성을 사후에 덧붙이지 마십시오.([[ludia-udl-ai-thought-partner-2026]])

**전달 매체를 계획합니다.** [[online-teaching-and-learning|온라인 교수와 학습]]을 위한 수업 설계는 대면 설계의 중립적 번역이 아닙니다. 매체는 어떤 스캐폴딩, 평가, 상호작용이 가능한지를 바꾸며, AI는 설계자가 계획해야 할 기회(확장 가능한 [[personalized-learning|개인화]], 상시 지원)와 위험([[academic-integrity|정직성]], [[cognitive-offloading|인지적 오프로딩]])을 모두 늘립니다. AI의 교수법적 외피를 대면 맥락에서만큼이나 온라인에서도 의도적으로 설계하십시오.

**느낌이 아니라 벤치마크에 맞추어 평가합니다.** 수업 설계 에이전트를 만든다면, 표준화되고 이론에 기반한 벤치마크(예: [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]])에 맞추어 평가하십시오. 그래야 실제 ISD 프레임워크에 기반한 것이 일반적인 LLM에 비해 산출물을 개선하는지를 측정할 수 있습니다.([[jeon-isd-agent-bench-2026]])

- **AI가 수업 설계 실천을 다시 규정하고 있습니다.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]]는 [[meta-analysis-systematic-review|체계적으로 검토한]] 28개 연구(2020–2025)에서 AI가 설계자의 콘텐츠 생성, 템플릿, 개인화를 돕고, 단순한 도구가 아니라 동료이자 협력자, 파트너로 개념화되지만, 교수법적 정렬과 실천자의 준비 상태는 여전히 과제로 남는다고 밝힙니다.

- **문서화된 활동은 주기의 한 단계에 집중되어 있습니다.** AI 지원 수업 설계에 관한 78편의 연구를 검토한 결과, 설계 단계 활동은 **78편 중 74편(95%)**에 나타나고 개발은 44편(56%)이지만, 분석은 11편(14%), 평가는 10편(13%), 실행은 7편(9%)에 그쳤으며, **어떤 연구도 전체 ADDIE 주기에 걸친 AI 지원을 검토하지 않았습니다.** 이 주기는 근거 기반이 다루지 못하는 열망이며, "AI 기반 강좌 개발"을 처음부터 끝까지의 역량으로 팔리는 사람에게 중요합니다([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **세 가지 AI 역할, 위계적으로 분포.** *생성적* 사용, 즉 교육자의 지시대로 AI가 설계 콘텐츠를 산출하는 것이 **연구의 96%**로 지배적이며, 설계자 자신의 추론을 AI가 구조화하는 *스캐폴딩* 사용은 35%, 산출물의 질을 AI가 평가하는 *평가적* 사용은 21%에 나타납니다. 이 분야는 압도적으로 무언가를 만들기 위해 AI를 쓰고 있으며, 자기 설계 결정을 심문하는 데는 쓰지 않습니다. 이는 검토가 교육적으로 유망하다고 지목한 비판적 친구 구성과 정반대입니다.

## 흔한 오해

- **"AI 수업 계획은 교사에게 시간을 돌려준다."** 무작위 배정된 초등학교의 교사들은 **도구로 주당 2.51시간을 수업 준비에 썼고 도구 없이는 3.32시간을 썼지만**, **중앙값 교사는 수업의 21%에서 40%만을 처음부터 계획했습니다**. 시간은 절약되었지만 계획이 실질적으로 더 철저해지지는 않았습니다. 절약은 재투자되지 않고 쌓였습니다.
- **"AI와의 공동 설계는 근거가 잘 갖춰져 있다."** [[wang-teacher-ai-co-design-review-2026|학습 과제의 교사-AI 공동 설계]]에 대한 체계적 검토는 **28편의 연구에 걸쳐 그 양상을 규모 있게 확인**하며, 이는 우월한 결과를 입증한 것이 아니라 일관된 실천을 기술한 것입니다.
- **"루브릭은 고정된 입력이다."** 루브릭은 **인간의 교수법적 의도와 기계의 추론 사이의 매개 인터페이스**로 기능합니다. 평가 기준을 **수정 가능한** 것으로 다루는 것이 그 도구가 교육자의 의도를 실어 나르게 합니다. 고정된 루브릭은 기계의 기본 틀 짓기를 평가로 전이합니다.

## 연결된 개념

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education
- [[stakeholders]] — Umbrella: people and audiences in AI education (learners, teachers, designers, administrators, policymakers)

## 연결된 문서

- [[roy-aila-lesson-planning-teacher-choices-2026]] - 측정된 계획 시간 절약과 함께, 교사들이 수업의 21%에서 40%만을 처음부터 계획한다는 발견
- [[powerful-learning-with-emerging-technology-2025]] — 신기술을 활용한 강력한 학습
- [[claassen-learning-analytics-genai-learning-design-2026]] — 학습 설계 의사결정에서의 학습 분석과 생성형 AI
- [[tang-chatbots-learning-design-2026]] — 학습 설계에서의 챗봇 활용: 설계자들은 콘텐츠 생성보다 결과와 교수법에 집중함 (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — 경험과 AI 숙련도에 따른 수업 설계에서의 교사-AI 상호작용 양상 (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — 고등교육에서의 AI: 참여와 교수법의 매개 역할
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — 생성형 AI 학습 활동을 분류하기 위한 분류 체계(경계 대상)
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — AI 웹 에이전트: 자율 웹 에이전트가 수업 설계를 평가하고 학생이 참여하기 전에 중도 이탈을 예측함 (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — 물리학에서 인지적으로 활성화된 AI 증강을 위한 프레임워크 AIRIS
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — 도달 범위 설계: 일곱 가지 지렛대와 AI와 홀로 남은 학생
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — '아니오'라고 말하는 것이 더 나은 영상을 만드는 때: 교육적으로 근거 있는 AI 콘텐츠 제작을 위한 이중 관문
- [[rhaimi-productivemath-2025]] — 생산적 실패 문제 설계를 지원하는 AI ProductiveMath
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI와 수업 설계 실천에 관한 체계적 문헌 고찰 (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — 동적 영역을 위한 그래프 기반 지능형 튜터링 (2026)
- [[making-ai-annoying-constrained-writing-2026]] — 의도적으로 AI를 성가시게 만들기: AI 지원 글쓰기에서의 제약 (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — 수학에서 교육학 석사(M.Ed.)의 수업 설계 역량을 향상시키는 스마트 교실 모형과 D-T-E 루프 (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — 수학적 모형화 문제를 생성하는 AI 기반 플랫폼(ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — 학습 과제의 교사-AI 공동 설계: 경향과 관점 (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — AI가 설계한 차등화 집단 활동에서의 역할 구조 (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — 반복적 교수법 설계의 주체로서의 LLM
