---
title: 보조 기술
created: "2026-08-23T12:00:00-04:00"
updated: "2026-09-30T08:05:25-04:00"
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education]
confidence: high
translation_of: concepts/assistive-technology
source_updated: "2026-10-13T11:05:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **보조 기술** — 장애가 있는 사람들이 학습과 일상생활에서 인지하고, 조작하고, 소통하고, 참여할 수 있도록 돕는 기기, 소프트웨어, 서비스. [[ai-education|교육 분야의 AI]]에서 보조 기술은 화면 낭독기, 음성-텍스트 및 텍스트-음성 변환, 자막 생성, 점자 및 촉각 출력, 수어 도구, 그리고 콘텐츠와 상호작용을 개인의 필요에 맞게 조정하는 AI 기반 지원 수단에까지 이릅니다.

## 생각해 볼 질문들

- 보조 기술은 접근성의 도구 계층입니다 — 개인이 접근 격차를 메우기 위해 사용하는 구체적인 기기와 소프트웨어. 읽기 전에, 접근성과 보조 기술을 같은 것으로 생각하셨나요? 이 둘을 구분하여 다루는 것이 학습 환경 설계 방식을 어떻게 바꿀 수 있을까요?
- [[research-methods-aied|연구]]에 따르면 AI 기반 개입은 장애 학생의 [[learning-gains|학습 결과]]에 중간 정도의 긍정적 효과를 보입니다(g = 0.588). 그러나 이 페이지는 접근 도구만으로는 포용적 교수나 학습자의 주도성이 보장되지 않는다고 경고합니다. 학생에게 접근을 제공하는 것과 진정으로 그를 포함하는 것의 차이는 무엇일까요?
- 이 페이지는 미국의 AI 정책 문서들이 특정 학습 장애 학생을 위한 보조 기술과 지원 조정(accommodations)을 대체로 다루지 못한다고 지적합니다. 왜 지원 조정은 AI 정책의 틈새로 이토록 쉽게 빠져나간다고 생각하세요 — 그리고 그럴 때 누가 손해를 보나요?
- [[generative-ai|생성형 AI]]는 자동 자막 생성, 텍스트 단순화, 촉각 대안 생성을 할 수 있어 적응(adaptation) 비용을 낮춥니다. 그러나 이 페이지는 AI로 생성된 대안의 품질을 [[pedagogy|교수학적]] 정확성 차원에서 평가할 것을 당부합니다. 콘텐츠를 접근 가능하게 만들기 위한 '단순화' 버전이나 '촉각' 버전이 그 내용을 잘못 전달한다면 무슨 일이 벌어질 수 있을까요?
- AI가 보조 도구를 음성 중심 학습 동반자에서 촉각 그래프, 수어 도구에까지 확장하고 있습니다. 교육자 또는 설계자로서, AI로 먼저 다루고 싶은 학습자의 구체적 장벽은 무엇인가요 — 그리고 도구를 선택하기 전에 그 학습자에 대해 무엇을 알아야 할까요?

## 들어가며

보조 기술은 [[accessibility]]의 구체적인 *도구 계층*입니다. 접근성이 환경의 설계 속성(모두가 접근할 수 있는가?)이라면, 보조 기술은 개인이 접근 격차를 메우기 위해 사용하는 구체적인 장비와 소프트웨어입니다. 이는 [[special-education]]과 [[inclusive-learning]]의 기반이며 — 특정 학습 장애, 시각 또는 청각 장애, 운동 장애가 있는 학생들은 [[curriculum-design|교육과정]]에 접근하기 위해 보조 도구에 의존합니다. 미국에서는 [[educational-policy-ai|Assistive Technology Act(2004)]]와 Individuals with Disabilities Education Improvement Act(IDEA, 2004)가 장애 학생들에게 이러한 도구를 제공할 법적 근거를 제공합니다.

### 주요 연구 주제

**AI가 보조 기술을 확장하고 있습니다.** 생성형 AI와 LLM이 보조 도구를 변화시키고 있습니다 — [[text-simplification-its|LLM 기반 텍스트 단순화]]는 [[intelligent-tutoring]]에서 독서 수준을 조정하고, [[kutti-ai-voice-first-learning-companion|음성 중심 AI]]는 시각 장애 및 저시력 학습자의 시각 의존을 제거하며, [[tactile-statistical-graphs-accessibility|AI로 생성된 촉각 그래프]]는 시각 자료를 만져서 알 수 있는 출력으로 변환합니다. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]**는 AI 기반 개입(로봇, 소프트웨어, 지능형 VR)이 장애 학생의 학습 결과에 중간 정도의 긍정적 효과를 보인다고 밝혔습니다(g = 0.588). **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]**는 팔레스타인의 21명 시각 장애 대학생에 대한 [[qualitative-research|질적]] 사례 연구를 추가하며, 생성형 AI가 속도·내용·전달 방식을 맞춤화하고, 복잡한 텍스트를 단순화하며, 콘텐츠를 여러 양태 간에 변환하는 보조 계층으로 기능하되 — 학습자들은 이를 꾸준히 교사를 대체하기보다 보완하는 것으로 본다고 보여 줍니다.

**정책과 제공.** **[[shin-ai-policies-sld-2026|Shin et al.]]**는 미국 AI 정책 문서들이 특정 학습 장애 학생을 위한 보조 기술과 지원 조정을 대체로 다루지 못한다고 문서화하며, Assistive Technology Act와 IDEA에 입각한 정책 지침을 요구합니다.

**감지, 지원, [[personalized-learning|개인화 학습]] 전반에 걸친 난독증을 위한 AI.** 2026년 학제간 [[meta-analysis-systematic-review|체계적 문헌고찰]](Dabaghi, D'Urso & Sciarrone, PRISMA 기반, 2018–2024, n=72)은 난독증 학생을 위한 AI 지원을 조망하여, AI가 감지, 보조 지원, 개인화 학습에 사용되고 있음을 보여 줍니다 — 다만 이 세 흐름은 통합되기보다 병렬로 발전하며, 통합된 교육 이론보다 기술적 기회에 더 많이 이끌리고 있습니다. ML 기반 지원 교육 도구는 다섯 영역(구체적 응용, [[student-engagement|참여(engagement)]], 개인화, 추천, 일반적 지원)으로 나뉘지만 기술적 성능과 분류 정확도를 강조하면서 생태학적 타당성과 실제 교실 배치는 간과합니다. 감지 연구(EEG, 시선 추적, ML 모델)는 조기 개입의 진단 가능성을 보여 주지만, 전문화된 장비와 통제된 환경을 필요로 하는 경우가 많아 일반적인 학교 환경에서의 확장성과 접근성을 제한합니다. 열린 도전 과제로는 실험적 검증의 제한, 확장성, 민감한 학생 데이터의 [[ethics]]/프라이버시 문제, [[teacher-role|교사]] 지원과 교육의 부족, 언어·문화적 장벽(대부분의 연구가 영어 사용 인구를 대상으로 함) 등이 있습니다 — 이는 보조 도구가 접근 격차를 진정으로 메우려면 검증되고, 확장 가능하며, 윤리적으로 뒷받침되어야 함을 일깨워 줍니다.

**보조 도구의 한계.** 보조 기술은 접근을 가능하게 하지만, 그 자체만으로 포용적 교수나 학습자의 [[agency]]를 보장하지는 않습니다. **[[genai-minoritized-knowledges-disability|비판적 연구]]**와 장애 학생들을 위한 [[agency|능동적(agentic)]] 역할을 향한 움직임은 접근이 의미 있는 참여와 짝을 이루어야 함을 일깨워 줍니다.

[[higher-ed|고등교육]]의 [[neurodiversity|신경다양성(neurodivergent)]] 학생을 위한 디지털 보조 [[ai-technologies|기술]]에 대한 2026년 범위 검토(scoping review)는 지난 10년의 성과를 조망합니다. 5개 데이터베이스에서 766건의 기록을 선별하여 40개 연구를 포함했으며, 그중 15개가 AI 기반 도구, 11개가 [[virtual-and-augmented-reality|가상 현실]]을 다룹니다. 그 핵심 발견은 도구가 노리는 것과 장벽이 실제로 있는 곳 사이의 불일치입니다 — 27개 연구가 학습을 직접 지원하고, 13개가 읽기와 쓰기를, 12개가 학습 관리를 다룬 반면, 주의력(n = 4)과 사회적 의사소통(n = 5)은 비교적 소외되었고, 여러 장벽을 함께 다룬 연구는 6개뿐이었습니다([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]).

## 실천을 위한 시사점

- **도구를 학습자와 과제에 맞추세요.** 화면 낭독기, 자막, 음성, 촉각 출력은 각각 다른 장벽을 다룹니다 — 개인의 필요와 콘텐츠 형식에 따라 선택하세요.
- **AI를 활용해 보조 적응의 비용을 낮추세요.** AI는 자동 자막 생성, 텍스트 단순화, 대안 생성을 할 수 있지만, 출력 품질을 교수학적 정확성 차원에서 평가하세요.
- **제공을 정책에 기반을 두게 하세요.** AI 도구를 도입하거나 구축할 때 Assistive Technology Act, IDEA, WCAG를 참고하세요.
- **지원이 어떤 기능을 수행하는지를 밝히고, 그 기능에 대해 평가하라.** [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026|Vasileiou et al. (2026)]]는 보상(접근과 참여로 평가됨)과 비계(지원을 받은 의사결정)와 발달(소거나 전이 이후의 전략 사용)을 구분합니다. 그들은 이 페이지의 주의를 겨냥한 규칙을 더합니다. 접근성 지원은 교정 수단이 아닙니다 — 어떤 도구가 수용 조치인지, 전략 지시인지, 아니면 임시적 연습 지원인지는 "학습 계획에 명시되어야 합니다."

## 연결된 개념

- [[accessibility]] — 보조 기술이 구현하는 설계 속성
- [[inclusive-learning]]
- [[special-education]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[learning-design]]
- [[speech-and-voice-technologies]]

## 연결된 문서

- [[shin-ai-policies-sld-2026]] — 특정 학습 장애 학생을 위한 AI 정책과 지원 조정
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 장애 학생을 위한 AI 개입의 메타분석
- [[kutti-ai-voice-first-learning-companion]] — 시각 장애 아동을 위한 음성 중심 AI
- [[tactile-statistical-graphs-accessibility]] — AI로 생성된 촉각 통계 그래프
- [[text-simplification-its]] — 지능형 튜터링을 위한 LLM 기반 텍스트 단순화
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 청각 장애 학습자를 위한 LLM 문제 생성
- [[gemini-lualatex-physics-video-transcription-2026]] — 수학 접근 가능한 물리 영상 전사를 위한 Gemini+LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — 시각 장애 학습자를 위한 보조 생성형 AI
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 생성형 AI, 가상 현실, 그리고 그 너머: 고등교육 신경다양성 학생을 위한 디지털 보조 기술의 범위 검토
