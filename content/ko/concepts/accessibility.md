---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack, teacher-dev]
title: 접근성
created: "2026-08-23T12:00:00-04:00"
updated: "2026-10-30T04:56:45-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
translation_of: concepts/accessibility
source_updated: "2026-10-26T07:05:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **접근성** — 장애를 지닌 사람과 다양한 필요를 가진 사람이 교육 기술, 콘텐츠, 인터페이스를 지각하고, 조작하고, 이해할 수 있도록 설계하는 것입니다. [[ai-education|AI 교육]]에서 접근성은 학습의 *매체*에 놓인 구체적이고 실천적인 장벽을 다룹니다. 영상 자막, 대체 텍스트, 필사록, 스크린리더와 키보드 호환성, 색 대비, 텍스트 간소화, 촉각 출력, 수화 지원, 그리고 보조 [[ai-technologies|기술]]과의 호환성이 그것입니다.

## 생각해 볼 질문들

- 지난번 디지털 학습 도구를 설계하거나 선택하실 때, 자막, 대체 텍스트, 키보드 탐색, 색 대비가 작동하는지를 그 [[pedagogy]]를 살피기 전에 확인하셨나요? 왜 그 순서가 중요할 수 있을까요?
- 자막이 정확한 영상은 '접근 가능한' 것이고, 청각장애 학습자의 의사소통 필요를 중심으로 토론을 구조화한 강좌는 '그 학습자를 지원하는' 것입니다. 기술적 장벽을 제거하는 것과 학생을 의미 있게 섬기는 것 사이의 선을 어디에 그으시겠습니까?
- [[research-methods-aied|연구]]에 따르면 고정된 일시 정지를 둔 AI로 구간을 나눈 [[video-education|교수 영상]]이 [[neurodiversity|ADHD]] 학습자와 비ADHD [[learners]] 사이의 성과 격차를 없앴습니다. 여러분이 속했던 한 반에서 결국 모두에게 혜택을 준 '한 학습자를 위해 만든 수정'을 떠올리실 수 있나요?
- 접근성은 필요하지만 충분하지 않다고들 합니다. 접근 가능한 도구가 저절로 포용적이거나 장애에 정의로운 도구가 되는 것은 아닙니다. 도구를 쓸 수 있는 것과 그것에 의해 의미 있게 섬김받는 것의 차이는 무엇일까요?
- 많은 AI 도구가 대체로 영어와 서구 중심의 데이터로 훈련됩니다. 그것이 제1언어가 수화인 학습자나 주류와 다른 존재 방식을 지닌 학습자에게 얼마나 잘 봉사하는지를 어떻게 제한할 수 있을까요?
- AI는 접근성을 대규모로 자동화할 수 있습니다. 자막을 생성하고, 텍스트를 간소화하고, 촉각 출력물을 만들어 내는 것이 그것입니다. 자동화된 접근성을 믿기 전에 손으로 직접 무엇을 확인하고 싶으며, 왜 그럴까요?

## 들어가며

접근성은 이 지식베이스의 이웃 개념 셋과 구별되지만 밀접하게 관련됩니다. **[[inclusive-learning]]**은 모든 학습자 변이(신체적, 인지적, 감각적, 상황적)에 걸친 교육 설계를 위한 더 넓은 상위 개념입니다. **[[special-education]]**은 진단받은 장애를 지닌 학습자를 위한 교수 영역으로, 개별 수용 조치를 포함합니다. **[[universal-design-for-learning]]**는 능동적인 설계 틀로서([[student-engagement|참여]], 표상, 행동과 표현의 다양한 수단), 미리 설계 단계에서부터 장벽을 제거하는 틀입니다. **접근성**은 이 별자리 속에서 *기술적·절차적 층위*로 자리합니다. 즉, 교수법을 새로 설계하는 것이 아니라 형식을 지각하고 조작하는 것의 장벽을 제거하는 층위입니다. 이 둘은 하나의 스펙트럼 위에서 구별될 수 있습니다. 접근성은 "모두가 이 콘텐츠와 도구에 접근할 수 있는가?"를 묻고, 장애를 지닌 학생을 지원하는 것은 "수용 조치와 장애 특정 지원을 포함하여 교수가 각 학습자를 의미 있게 섬기는가?"를 묻습니다. 둘 다 중요하며, AI는 양쪽 모두에 걸칩니다.

### 이 구별이 중요한 이유

자막이 정확하고 필사록이 제대로 태그된 영상은 *접근 가능한* 것입니다. 청각장애 학습자의 의사소통 선호를 담아 토론을 구조화한 강좌는 *그 학습자를 지원하는* 것입니다. 이 둘은 겹칩니다. 접근 가능한 매체가 포용적 교수의 전제조건입니다. 그러나 이들은 서로 다른 설계 움직임을 요구하고 서로 다른 증거에 기댑니다. 접근성은 기준과 법률에 뿌리를 둡니다(WCAG, 미국의 [[assistive-technology|Assistive Technology Act]]와 IDEA). 반면 접근 가능한 학습과 특수 교육은 교수법과 [[student-experience|학습자 경험]]에 뿌리를 둡니다.

### 주요 연구 주제

**형식 접근성: 자막, 필사록, 텍스트.** 고정된 일시 정지를 둔 **[[adhd-video-segmentation-computing-education|AI로 구간을 나눈 교수 영상]]**이 ADHD 학습자와 비ADHD 학습자 사이의 성과 격차를 없앴습니다. 모두에게 혜택을 주는 촉매로서의 접근성입니다. **[[text-simplification-its|MuTSE]]**는 [[llm]] 기반 [[intelligent-tutoring|텍스트 간소화]]를 평가하여 각 학습자의 읽기 수준에 콘텐츠 복잡성을 맞춥니다. 이는 [[human-in-the-loop-ai|인간 참여형]] 접근성 층위입니다. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]**는 청각장애인(Hard of Hearing) 학습자를 위한 LLM [[automated-question-generation|문항 생성]]을 만들며, 텍스트 기반 AI 프롬프트와 수화 기반 제1언어 사이의 불일치에 정면으로 맞섭니다.

**감각적 접근: 비시각 및 촉각 출력.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]**는 시각 장애 아동에게 말하는 대화를 주된 양식으로 삼아 시각 의존을 제거합니다. **[[tactile-statistical-graphs-accessibility|촉각 3D 프린팅 그래프]]**는 시각적 통계 데이터를 시각장애·저시력 학생을 위해 만질 수 있는 출력으로 바꿉니다. **[[pepper-robot-sign-language-lis-2025|수화 로봇]]**은 [[educational-robotics]]을 청각장애 학습자를 위한 의사소통 접근성으로 확장합니다.

**영화용으로 작성된 오디오 해설은 강의 녹화에 그대로 적용되지 않는다.** 슬라이드 기반 강의는 도표, 수식, 그리고 가리키는 제스처를 참조하고, 그 사이의 멈춤은 중앙값 0.5초에 불과합니다. 그래서 [[ad4edu-lecture-audio-description-2026|Psychias & Gao (2026)]]는 강의에 특화된 벤치마크와 규칙으로 진단 가능한 메트릭을 구축했으며, 기계 판단자(machine-judge)가 정렬한 쌍에 대한 사후 훈련은 준수율을 고르게 개선하지 못했습니다.


**시각 장애 학습자를 위한 [[generative-ai|생성형 AI]].** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]**는 팔레스타인의 세 대학에 걸친 저시력 [[higher-ed|학부생]] 21명을 대상으로 한 [[qualitative-research|질적]] 사례 연구입니다. 생성형 AI가 개인의 학습 프로필에 맞춰 속도, 콘텐츠, 전달 방식을 조정하고, 복잡한 학술 텍스트를 간소화하면서 콘텐츠를 여러 양식(텍스트, 음성, 시각)으로 변환하여 이전에는 쓸 수 없던 자료를 쓸 수 있게 만든다는 것을 발견했습니다. 학습자들은 즉시성을 접근성의 기본 요건이자 편의가 아니라 기반으로 규정했습니다. 그리고 상호 의존적인 여섯 기술적 속성, 즉 상호작용성, 사용자 친화성, 경제적 부담 가능성, 멀티모달성, 통합, 확장성이 [[global-south|저자원 맥락]]에서 생성형 AI가 진정으로 접근 가능한지를 결정했습니다. 이때 [[usability-research|사용성]], 경제적 부담 가능성, 접근성은 서로 분리된 설계 고려사항이 아니라 상호 강화하는 관계였습니다.

**장애를 지닌 학생들을 위한 정책과 수용 조치.** **[[shin-ai-policies-sld-2026|Shin et al.]]**는 미국 AI 정책 문서를 분석하여 특정 학습장애(SLD)를 지닌 학생들에 대한 지침의 공백을 드러내고, [[assistive-technology|Assistive Technology]] Act와 IDEA에 기댄 수용 조치와 [[educational-policy-ai|정책]] 권고를 제안합니다. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]**는 장애를 지닌 학생들을 위한 AI 기반 개입에 관한 연구 29편을 메타분석하여, [[learning-gains|학습 성과]]에 대한 중간 크기의 긍정적 효과(g = 0.588)를 발견했습니다. 그리고 AI는 접근성을 보장하는 데 그쳐서는 안 되며, [[agency|주체적]] 참여를 가능하게 해야 한다고 주장합니다.

**과도하게 포괄적인 AI 금지와 보조적 전사.** **[[wright-transcription-not-generation-2026|Wright (2026)]]**는 "AI 사용"에 대한 일률적 금지가 과도하게 포괄적이라고 주장합니다. 이는 음성-텍스트 전사와 OCR을 생성적 초안 작성과 구별하지 못하기 때문입니다. 인식 기술은 학생이 이미 직접 작성한 콘텐츠의 형식을 변환하는 것이지 새로운 콘텐츠를 만들어 내는 것이 아닙니다. 그런데도 플랫폼 정체성을 중심으로 쓰인 정책은 이 둘을 똑같이 포착합니다. 정교한 운동 조절, 필적의 가독성, 타자 정확성에 영향을 미치는 상태(자폐 스펙트럼 상태, 실행기능장애, 뇌성마비, 반복성 긴장 장애를 포함함)를 지닌 학생들은 독립형 음성-텍스트 변환과 OCR에 의존해 왔으며, 보고에 따르면 여러 독립형 음성-텍스트 변환 제품이 단종되거나 성능이 저하되어, AI 기반 전사가 기능적 공백을 메우게 되었습니다. 이러한 대체를 부정행위로 다루는 것은 영국 평등법 2010의 합리적 조정 의무, 예방적 공공부문 평등 의무, 미국 장애인법, 호주 장애차별금지법 1992에 따른 공정성 우려를 낳습니다. 다만 이 논문은 이러한 성격 규정이 법정에서 시험된 바 있다고 주장하지는 않습니다. 이 논문은 장애, 보조 기술, AI 부정행위 정책의 교차점이 충분히 탐구되지 않았으며, 이러한 대체의 규모가 측정된 바 없고, 또 같은 부정확성이 차별적 오탐 위험을 낳는다고 지적합니다. 탐지기가 비원어민 영어 작가의 낮은 복잡도(perplexity) 텍스트를 기계가 쓴 것으로 읽어 내기 때문입니다. 이 과도한 포괄성이 만들어 내는 법적 노출은 [[legal-issues-and-risks]]에 정리되어 있습니다.

**기계 저항은 가독성 대가를 수반한다.** 줄무늬 오버레이는 추출을 가장 크게 저하시켰고(문자 오류 +35.9%, 단어 오류 +38.3%), 그러나 타이포그래피와 디자인 전문가 네 명은 수직 줄무늬는 읽을 수 있다고 판단한 반면, 대각선 줄무늬는 글자 형태를 파괴하고 읽을 수 없다고 판단했으며, 극단적인 불투명도 변화는 인간의 가독성도 해치는 강도에서만 도움이 되었습니다([[airri-machine-resistant-reading-interface-2026|Salaun et al. (2026)]]).


**난독증을 위한 AI: 탐지, 지원, 그리고 [[personalized-learning|개인화 학습]].** 2026년의 학제간 [[meta-analysis-systematic-review|체계적 문헌고찰]](Dabaghi, D'Urso & Sciarrone, PRISMA 기반, 2018-2024, n=72)은 AI가 난독증을 지닌 학생을 탐지, 보조 지원, 개인화 학습에 걸쳐 지원하고 있다는 것을 발견합니다. 그러나 이 갈래들은 통합되지 않고 나란히 진화하고 있으며, 통합된 교육 이론보다는 기술적 기회에 더 많이 이끌리고 있습니다. ML 기반 학습 지원 도구는 다섯 영역(특정 응용, 참여, 개인화, 추천, 일반적 지원)에 걸치지만, 기술적 성과와 분류 정확도를 강조하면서 생태학적 타당성과 실제 교실에서의 배치를 간과합니다. 탐지 연구(EEG, 시선 추적, ML 모델)는 조기 개입을 위한 진단적 가능성을 보여 주지만, 흔히 특수 장비와 통제된 환경을 요구하여 일반적인 학교 환경에서의 확장성과 접근성을 제한합니다. 열린 과제로는 실험적 검증의 제한, 확장성, 민감한 학생 데이터와 관련된 [[ethics]]/[[privacy]] 우려, [[teacher-role|교사]] 지원과 훈련의 제한, 그리고 언어·문화적 장벽(대부분의 연구가 영어권 인구를 대상으로 함)이 있어, 접근성은 기술적으로 입증되는 데 그치지 않고 검증되고 확장 가능하며 윤리적으로 뿌리내려야 함을 분명히 합니다.

**접근성만으로는 한계가 있습니다.** **[[genai-minoritized-knowledges-disability|비판적 연구]]**는 영어권이고 서구 중심인 데이터로 훈련된 AI가 장애 중심의 존재 방식들을 소외할 수 있다고 경고합니다. 접근 가능한 형식이 포용적이거나 정의로운 교수를 보장하지는 않습니다. 이는 접근성이 필요하지만 충분하지 않으며, [[equity-in-ai-education]]에 연결되어야 함을 뒷받침합니다.

**수용 조치 중심이고 진단을 관문으로 세우는 도구들이 지배적입니다.** 신경다양 학생을 위한 디지털 보조 기술에 관한 연구 40편에 대한 범위 고찰은, 28편이 공식 진단을 참여 조건으로 삼았고, 학생이 아니라 신경전형 또래를 다룬 연구는 단 3편뿐이었으며, 반전 효과(인지적 과부하, 피로, 주의 분산, 생성형 AI에 대한 과잉 의존)가 보고되어 있다는 것을 발견했습니다([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]]).

## 실천을 위한 함의

- **형식 장벽을 먼저 우선시하라.** 자막, 필사록, 대체 텍스트, 명암 대비, 키보드 조작 가능성은 관문의 층위입니다. 이것들이 없으면 그것을 필요로 하는 학습자에게는 다른 어떤 것도 의미가 없습니다.
- **AI를 써서 접근성을 대규모로 자동화하라.** AI는 자막을 생성하고, 텍스트를 간소화하고, 촉각/음성 대안을 만들어 내고, 제시 방식을 적응시킬 수 있습니다. 그러나 산출 품질은 인간 참여형 점검으로 평가하십시오.
- **접근성을 필요하지만 충분하지 않은 것으로 다루어라.** 접근 가능한 도구가 저절로 포용적이거나 장애에 정의로운 도구가 되는 것은 아닙니다. 접근성을 [[inclusive-learning]] 설계와 [[special-education]] 지원과 짝지으십시오.
- **수용 조치를 법과 정책에 뿌리내리게 하라.** AI 도구를 설계하거나 조달할 때 기준(WCAG)과 법규(Assistive Technology Act, IDEA)를 참조하십시오.
- **AI 도입은 제도 수준에서 AI 접근성 정책을 앞질러 가고 있다.** [[chan-ai-institutionalization-index-global-universities-2026|Chan (2026)]]는 Times Higher Education 2026 순위에 든 100개 대학 전체를 코딩하여, AI 기반 캠퍼스 서비스(등록, 주거, IT를 위한 챗봇)를 93%가 도입하면서도 독립적인 AI 접근성 정책을 공표한 대학은 0%임을 발견했습니다. 저자의 관대한 해석은 접근성 의무가 일반적인 장애 서비스 정책 안에 포함되어 있다는 것이지만, 측정된 바로는 AI 도구에 대한 요구 사항이 공적 제도 기록 어디에도 나타나지 않습니다. 교수와 행정의 AI 도구가 장애를 지닌 학생에게 접근 가능해야 한다는 짧은 제도 성명 하나가 측정된 전체 분야보다 앞서 있을 것입니다.

- **[[physics-education|물리]] 영상의 수학 접근 가능 필사(2026):** Gemini(음성 + 초당 1프레임 영상 샘플링)와 LuaLaTeX를 쓰는 AI 작업 흐름은 교수용 물리 영상을 PDF/UA-2와 ISO 32005을 만족하는 수학 접근 가능 PDF로 컴파일하여, 접근성 검증을 일상적으로 통과하게 합니다. 이는 수식이 많은 영상 콘텐츠를 시각장애·저시력 학생에게 스크린리더로 읽히게 만드는 실천적이고 무료인 길입니다([[gemini-lualatex-physics-video-transcription-2026]]).

## 흔한 오해

- **"보기에 더 나빠진 접근성 기능은 더 나쁜 기능입니다."** 줄무늬 오버레이는 추출을 가장 크게 저하시켰지만(문자 오류 +35.9%, 단어 오류 +38.3%), 타이포그래피와 디자인 전문가 네 명은 수직 줄무늬를 읽을 수 있다고 판단한 반면 대각선 무늬는 실패했습니다. 기계 가독성과 인간 가독성은 별개의 측정이며, 하나를 최적화하면 다른 하나가 나빠질 수 있습니다. 접근성 주장은 어느 독자를 위한 것인지 밝혀야 합니다.
- **"접근성이란 수용 조치를 뜻합니다."** 신경다양 학생을 위한 디지털 보조 기술에 관한 40편의 연구를 다룬 범위 고찰은 28편이 공식 진단을 참여 조건으로 삼았다는 것을 발견했습니다. 그것은 진단을 관문으로 세우는 모델이며, 필요는 있지만 진단명이 없는 모든 학습자를 배제합니다. 이는 보편적 설계와 정반대입니다.
- **"중간 크기 효과로 문제가 해결됩니다."** [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]는 29편의 연구를 메타분석하여 중간 크기의 긍정적 효과를 발견했습니다. 그 효과는 실재하지만, 어떤 도구가 어떤 필요에 맞는지는 말해 주지 않습니다. 이질적인 개입들을 평균한 값은 권고가 아닙니다.
- **"속도와 즉시성은 편의에 불과합니다."** 팔레스타인의 세 대학에 걸친 시각 장애 학부생 21명을 대상으로 한 질적 사례 연구에서, 학습자들은 즉시성을 편의가 아니라 접근성의 기본 요건으로 규정했습니다. 밖에서 보면 사치처럼 보이는 것이 참여의 전제조건입니다.

## 연결된 개념
- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — 학습자 변이에 걸친 교육 설계를 위한 더 넓은 상위 개념
- [[special-education]] — 진단받은 장애를 지닌 학습자를 위한 교수 영역
- [[universal-design-for-learning]] — 능동적인 설계 틀
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — 헤드셋, 멀미, 기기 접근이 누가 쓸 수 있는지를 결정한다
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — 과도하게 넓은 규칙, 결함 있는 증거, 합리적 조정을 아우르는 상위 페이지
- [[arts-design-and-media-education]]

## 연결된 문서
- [[chan-ai-institutionalization-index-global-universities-2026]] — Chan (2026): 100개 최상위 대학 중 0%가 AI 접근성 정책을 공표하는 반면 93%는 AI 캠퍼스 서비스를 도입
- [[shin-ai-policies-sld-2026]] — 특정 학습장애를 지닌 학생들을 위한 AI 정책과 수용 조치
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 장애를 지닌 학생들을 위한 AI 개입의 메타분석
- [[adhd-video-segmentation-computing-education]] — 고정된 일시 정지를 둔 AI로 구간을 나눈 영상
- [[text-simplification-its]] — 지능형 튜터링을 위한 LLM 기반 텍스트 간소화
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 청각장애인/난청 학습자를 위한 LLM 문항 생성
- [[kutti-ai-voice-first-learning-companion]] — 시각 장애 아동을 위한 음성 우선 동반자
- [[tactile-statistical-graphs-accessibility]] — 촉각 3D 프린팅 통계 그래프
- [[pepper-robot-sign-language-lis-2025]] — 수화를 지원하는 Pepper 로봇
- [[genai-minoritized-knowledges-disability]] — AI와 장애 중심 지식에 대한 비판적 관점
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX로 만드는 수학 접근 가능 물리 영상 필사
- [[khlaif-assistive-genai-visually-impaired-2026]] — 시각 장애 학습자를 위한 보조적 생성형 AI
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 생성형 AI, 가상 현실, 그리고 그 너머: 고등 교육의 신경다양 학생을 위한 디지털 보조 기술에 관한 범위 검토
- [[wright-transcription-not-generation-2026]] — Transcription is not generation: 과도하게 포괄적인 AI 금지와 그것이 포착하는 보조 도구들
- [[ad4edu-lecture-audio-description-2026]] — AD4EDU: 접근성 기준, 메트릭, 학습자 선호에 걸친 대학 강의 오디오 해설의 벤치마킹
- [[airri-machine-resistant-reading-interface-2026]] — AIRRI: 인간이 읽을 수 있고 기계에 저항하는 읽기 인터페이스를 향하여
