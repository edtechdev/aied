---
title: 학습자
created: "2026-09-18T03:20:00-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
translation_of: concepts/learners
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **종합:** 학습자는 [[ai-education|교육에서의 인공지능]]의 주된 독자입니다 — [[k-12]], [[higher-ed]], [[adult-learning]]의 학생으로서, AI가 이제 그들의 작업, 이해, 자기 감각을 형성하는 사람들입니다. 이 페이지는 지식베이스의 학습자 측 커버리지를 아우르는 상위 개념입니다: 학습자가 무엇을 경험하는지([[student-experience]]), 그들이 누가 되어 가는지([[learner-identity]]), 그들이 여전히 무엇을 선택하는지([[agency]]), 그들이 도구와 실제로 어떻게 상호작용하는지([[student-ai-interaction]]), 그들의 노력과 [[self-regulated-learning|자기조절]]이 그 아래에서 버티는지([[cognitive-offloading]]), 그리고 AI 시스템이 그들을 어떻게 모형화하는지([[student-modeling]])가 그것입니다. 그 연구 전반에 걸쳐 되풀이되는 발견은, 같은 도구가 서로 다른 학습자를 서로 다르게 돕기도 하고 해치기도 한다는 것입니다 — 이득은 [[prior-knowledge|선행 지식]], [[ai-literacy|AI 리터러시]], 검증 습관이 이미 있는 곳에 집중되고, 역전은 AI가 과제가 기르려던 사고를 대신하는 곳에 집중됩니다.

## 생각해 볼 질문들

- 여러분의 맥락에서 새로운 AI 도구가 먼저 닿을 학습자는 누구이며, 어떤 학습자를 뒤에 남길 것인지 — 그리고 그렇게 생각하는 이유는 무엇입니까?
- 연구에서는 학생들이 AI가 도움이 되었다고 *믿으면서* 보조가 없는 측정에서는 이득이 없거나 손실이 나타난다고 자주 보고합니다. 학습자 자신의 진술이 신뢰할 만한 증거가 아니라면, 학습이 일어났음을 받아들일 증거로 무엇을 받아들이겠습니까?
- 학습자는 여기서 AI를 사용하는 사람이자 AI가 모형화하는 대상([[student-modeling|학습자 모형]], [[knowledge-tracing|지식 추적]], [[simulating-students|시뮬레이션된 학생]])으로서 함께 기술됩니다. 학습자의 모형은 어디에서 교수에 정보를 주어야 하며, 어디에서 신뢰를 그만두어야 합니까?
- [[self-regulated-learning|자기조절]]과 [[prior-knowledge|선행 지식]]이 AI 지원이 학습이 되는지 대체가 되는지를 결정합니다. 그것은 교정해야 할 학습자의 결손입니까, 풀어야 할 설계 문제입니까, 고쳐야 할 평가 문제입니까?
- 학습자 집단이 AI 도구와 함께 부진하다면, 그것을 알게 되는 쪽은 대개 도구의 설계자들이 마지막입니다. 배치 전후로 학습자의 말을 듣는 일상적 루틴이 여러분 기관에서 실제로 어떤 모습이겠습니까?
- [[agency|학습자 주체성]]과 [[learner-identity|정체성]]이 성취와 나란히 걸려 있습니다. 그중 어떤 것을 측정 가능한 [[learning-gains|점수 향상]]과 바꾸기를 거부하시겠으며, 그 거부를 여러분의 평가 설계가 가시적으로 만들 것입니까?

## 들어가며

학습자는 이 지식베이스에서 아주 다른 두 가지 모습으로 나타나며, 둘을 흐리는 것이 이 분야의 혼란 대부분을 낳습니다. 첫 번째에서 학습자는 **AI를 사용하는 사람**입니다: 질문을 던지고, 답을 받아들이거나 거부하며, 발판을 잃거나 지키며, 지지와 죄책감과 불안과 의존의 경험을 보고합니다. 두 번째에서 학습자는 **AI 시스템이 모형화하는 대상**입니다: [[knowledge-tracing|지식 추적]]의 기술 추정치, [[cognitive-diagnosis|인지적 진단]]의 잠재 상태, 혹은 실제 사람을 대신 서는 [[simulating-students|시뮬레이션된 학생]]. 첫 번째에 관한 증거는 조사, 인터뷰, 로그 분석, 실험에서 옵니다; 두 번째에 관한 증거는 측정의 기계 장치 자체에서 옵니다 — 그리고 학습자의 모형은 학습자가 아니라 하나의 주장입니다.

이 페이지는 둘 모두의 입구입니다. 이것은 지식베이스가 다루는 학습자 측 개념들을 모으고, 그것들이 어떻게 관계하는지를 설명하며, 그것들 뒤의 연구들을 연결합니다. [[stakeholders]]는 같은 분야의 다른 쪽 — [[teacher-role|교수자]], [[administrator|관리자]], 설계자, 정책 입안자 — 을 다루며, 두 페이지는 함께 읽히도록 되어 있습니다.

## 누가 학습자로 셈되는가

지식베이스는 정규 교육의 전 범위에 걸친 학습자를 다룹니다: [[k-12]] 학생, [[higher-ed|대학생]], [[vocational-education|직업]] 및 [[professional-training|전문]] 학습자, 그리고 [[special-education|장애가 있는 학습자]], [[neurodiversity|신경다양]] 학습자, [[multilingual-learning|다언어]] 학습자를 포함한 [[adult-learning|성인]] 및 [[lifelong-learning|평생]] 학습자. 두 가지 관습이 중요합니다. 첫째, "학습자"와 "학생"은 유용한 방식으로 교환 가능하지 않습니다: *학생*은 제도적 역할을 이름 붙이고, *학습자*는 활동을 이름 붙으며, 한 사람은 둘 중 하나일 수 있고 다른 하나는 아닐 수 있습니다([[professional-training|직장 훈련]]의 직원은 학습자이지만 학생은 아닙니다). 둘째, 학습자는 동질적 집단이 아니며, 그 이질성이 바로 연구가 계속 드러내는 것입니다 — [[prior-knowledge|선행 지식]], [[self-regulated-learning|자기조절]], 언어, 접근, 장애 상태가 모두 AI 도구가 도움이 되는지를 바꿉니다.

## 학습자가 경험하는 것

[[student-experience]]는 교육에서의 AI에 관해 가장 많이 연구된 차원 중 하나이며, 그 중심 교훈은 효과가 균일하지 않고 혼재되어 있다는 것입니다. [[student-perceptions-ai-study-productivity-2026|학습 생산성에 관한 조사 연구]]는 학습자가 진정한 효율성 이득을 보고함을 발견합니다 — 92.3%가 AI가 이해를 개선했다고 답함 — 과 헤드라인 수치가 숨기는 간극과 함께: 전체 학습 시간을 줄였다고 답한 사람은 38.5%뿐이었고, 절반은 때로 독립적으로 배우려는 대신 AI에 의존했다고 보고했습니다. [[uneven-impact-generative-ai-student-learning-2026|의존 양상에 관한 분석]]은 더 나아갑니다: 서로 다른 수준의 [[ai-literacy|AI 리터러시]]와 평가 기술을 지닌 학생들은 질적으로 다른 관계 속에 놓이므로, 같은 강좌 정책이 서로 다른 학습자에게 서로 다른 결과를 산출합니다 — 어떤 이에게는 지지가, 다른 이에게는 대체가 됩니다. [[genai-student-experiences-uk-he-survey-2026|학생들은 최소 노력의 당김을 자신의 말로 기술하며]], 그것은 [[academic-integrity]]와 [[misconceptions]] 페이지가 도덕적 문제가 아니라 설계와 정책의 문제로 다루는 것입니다.

인지 이야기와 나란히 정서도 달립니다: [[anxiety-and-stress]]와 [[well-being]]는 뒤처질까 하는 불안과 부정행위로 지목당할까 하는 불안, 그리고 추구하는 학위의 가치에 관한 불안을 기록합니다. 학습자의 AI에 대한 정신 모형 — 그것이 무엇이고 무엇을 위한 것이라고 생각하는지 — 은 그것을 잘 사용하는지의 상류에 있으므로, [[misconceptions]]과 [[framing-ai-use-for-students]]은 학습자 측 연구 전반에 나타납니다.

학습자 진술은 학습자 측 정책의 많은 부분을 틀짓는 정직성 이야기도 복잡하게 만듭니다. [[mulisa-students-genai-integrity-perspectives-2026|에티오피아 한 대학의 학부생 27명과의 인터뷰]]는 GenAI의 거의 보편적 사용과 진정으로 갈라진 [[ethics|윤리적]] 독해를 함께 발견합니다 — 대다수가 도구가 성취를 높였다고 치는 반면 소수는 강좌 과제에서의 사용을 부정행위로 부르며, 거의 모두가 AI 사용자가 부지런한 독립 학습자보다 높은 점수를 받는 고르지 않은 경기장을 보고하며, 한 명은 그 효과를 자신의 근면성에 대한 죽음이라고 묘사했습니다. 부정행위 절차의 학생 측은 사용의 학생 측보다 문헌에서 더 얇지만, [[munoz-misconduct-allegation-evidence-2026|GenAI 신고 1,162건의 사건 파일 분석]]은 제도적 대응이 도달했을 때 학습자가 무엇을 마주하는지를 보여 줍니다: 가장 자주 인용되는 증거는 가장 약하게 평가되는 종류이며, 사건이 진행될지에 관해 어떤 최소 증거 기준도 관장하지 않으며, 얇은 증거에 기댄 사건의 학생들은 항소 쪽으로 밀려납니다.

## 정체성, 주체성, 저자십

학습자 측 연구는 결과만에 관한 것이 아닙니다. [[learner-identity]]는 한 분야와 AI에 관계하여 학습자가 누구가 되어 가는지를 묻고, 증거는 양방향으로 달립니다: 잘 설계된 사용은 분야적 소속을 비계로 세울 수 있는 반면, 외주화는 작업이 자신의 것이라는 감각을 침식할 수 있습니다. [[agency]]는 학습자가 여전히 통제하는 것을 묻습니다. 지식베이스는 둘 모두를 성취에 대한 부드러운 덧붙임이 아니라 진정으로 걸린 것으로 다룹니다: AI와 함께 옳은 산출물을 만들어 내면서 그 뒤의 추론을 더는 알아보지 못하는 학습자는 성적이 기록하지 않는 무언가를 잃은 것입니다. 저자십 질문은 학습자 자신이 가장 분투하는 곳입니다: [[mulisa-students-genai-integrity-perspectives-2026|GenAI와 정직성에 관해 인터뷰한 학생들]]은 다른 저자가 존재하지 않았기에 독창성을 주장했습니다 — "내 독창적인 아이디어가 아니라면, 그럼 누구의 것인가?" — 한편 다른 이들은 그 작업이 자신을 표상하지 않는다고 결론 내렸고, 한 명은 AI가 사람이 아니므로 될 수 없는 공동 저자로서 도구를 인식하는 쪽으로 추론했습니다.

## AI와 상호작용하기: 학습자가 실제로 하는 것

[[student-ai-interaction]] 페이지는 학습자가 AI에게 무엇을 요청하는지, 그들의 프롬프트와 대화가 어떻게 진화하는지, 그리고 상호작용의 질이 왜 접근보다 [[learning-gains|학습 결과]]를 더 잘 예측하는지를 모읍니다. [[student-llm-interaction-taxonomy-review-2026|33개 연구에서 끌어낸 46개 분류에 관한 신속한 범위 검토]]는 그 증거 기반이 개념적으로 파편화되어 있음을 발견합니다 — 연구들이 자료 원천, 범주 체계, 분석 단위에서 다르므로, "질 높은 상호작용"은 아직 그것들 사이에서 비교 가능한 구인이 아니며, 그 검토의 요구는 하나가 존재한다는 주장이 아니라 학습 지향적 [[llm]] 사용의 수렴하는 분류입니다. [[student-ai-conversations-cognitive-engagement-2026|대화 내용에 관한 연구]]는 학생들이 특징적인 방식으로 자신을 절제함을 발견하며, 참여는 주장을 탐색하고 시험하는 데서부터 처음 그럴듯한 답을 받아들이는 데까지 이릅니다. [[help-seeking]]은 더 오래된 틀을 제공합니다: 도움을 요청하는 것은 하나의 기술이며, AI가 제거하지 않는 알려진 실패 양상이 잘못된 조력자에게 잘못된 방식으로 요청하는 것입니다.

## 노력, 자기조절, 그리고 수행–학습 격차

여기가 학습자 측 증거가 가장 중대한 곳인데, 그것이 학습자가 *AI와 함께 할 수 있는 것*을 그들이 *AI 없이 할 수 있는 것*에서 가르기 때문입니다.

[[cognitive-offloading]]는 과잉 의존 증거를 모으고, [[genai-performance-vs-learning]]는 보조된 수행과 보조 없는 역량을 별도로 측정해야 한다는 중심 방법론적 논점을 밝히며, [[layer-sensitive-cognitive-offloading-writing-2026|쓰기의 층에 민감한 연구]]는 표면, 구조, 아이디어, 추론의 오프로딩을 구분하여, 가장 적게 구속된 조건에서 가장 높게 뒷받침되는 수행과 8주 후의 가장 낮은 독립적 수행을 함께 발견하고, [[shaw-nave-cognitive-surrender-2026|Shaw와 Nave의 인지적 항복 설명]]은 위임이 전략적이기보다 일상적이게 만드는 경향에 이름을 붙입니다. [[metacognitively-discordant-completion-genai-2026|메타인지적 불일치]]는 불편한 중간 경우 — 이해하지 못한다는 것을 알아차리고도 제출하는 학습자 — 를 기록하며, [[verification-quality-reliance-calibration-genai-2026|검증 연구]]는 "확인"이 이분법적 습관이 아니라 그 자체로 등급을 매긴 하나의 기술임을 보여 줍니다. 설계 쪽에서 [[desirable-difficulties|생산적 어려움]]과 [[reducing-ai-misuse]]는 과제가 요구하려던 노력을 회복하는 개입을 모읍니다.

## 모형으로서의 학습자

가장 긴 기술적 계보를 지닌 학습자 측 개념들은 학습자를 시스템에 표상하는 것들입니다. [[student-modeling]]은 그 계열을 아우릅니다: [[knowledge-tracing]]은 시간에 걸친 기술 습득을 추정하고, [[cognitive-diagnosis]]는 구체적 오개념을 위치짓고, 그 추정치들을 소비하는 적응적·[[personalized-learning|개인화된]] 시스템들이 있습니다. [[simulating-students]]와 [[simulating-students-llm-review-2026|그것의 검토]]는 [[simulation]]을 실제 학습자를 쓸 수 없을 때 [[intelligent-tutoring|튜터]]를 시험하고 자료를 생성하는 한 방식으로 다루며 — 명시적으로 임시적인 대리물이며 대체물은 아닙니다. 두 가지 경계가 이 문헌을 관통합니다: 모형 추정치는 문항과 인터페이스가 어떻게 구축되는지에 민감한 행동으로부터의 추론이며, [[demographic-signals-llm-student-assessment-2026|인구통계학적 신호에 관한 연구]]는 평가 시스템이 구인의 일부이도록 의도된 적 없는 학습자 정체성의 대리 지표(언어, 배경)를 포착할 수 있음을 보여 줍니다. [[self-report-measures]]는 연구 쪽의 거울상 문제를 다룹니다: 학습자가 자신의 학습에 관해 말하는 것은 그들이 할 수 있는 것과 종종 갈라집니다.

## 학습자 전반에 걸친 형평성

이득이 선행 우위를 따르기에, 학습자 측 연구는 [[equity-in-ai-education]]와 분리될 수 없습니다. [[digital-divide]]와 유료 모형 등급에 대한 접근이 누가 가장 강한 도구를 얻는지를 형성하고, [[bias-mitigation|공정성]] 우려가 학습된 모형이 서로 다른 집단을 어떻게 대하는지를 관장하며, [[inclusive-learning]], [[accessibility]], [[special-education]], [[neurodiversity]]는 기본 설계가 필요를 간과하는 학습자를 다룹니다. 이 연구의 실천적 교훈은 "AI가 학생을 돕는다"는 것은 발견이 아니라는 것입니다 — 발견은 언제나 *어떤* 학생이, *어떤* 조건 아래, *어떤* 선행 지식과 접근을 지니고서냐입니다. 두 집단이 그 위험의 고유한 몫을 짊어집니다. [[wright-transcription-not-generation-2026|Wright (2026)]]는 "[[generative-ai|생성형 AI]]"가 아니라 기능을 중심으로 쓰여진 금지 조항이 학습자가 이미 저술한 작업의 형식을 변환하는 전사 도구를 잡아내므로, 그 결과 생기는 거짓 양성이 음성-텍스트 변환과 OCR에 의존하는 장애 학습자에게 가장 크게 떨어진다고 주장하며 — AI 기반 OCR이 단종된 보조 소프트웨어를 대체한 곳까지 포함합니다; [[harerimana-remote-proctoring-nursing-scoping-2026|원격 감독에 관한 범위 검토]]는 평가 조건에 관해 평행한 논점을 만들어, 연결, 데이터 비용, 기기 고장이 누가 평가받을 수 있는지를 전적으로 결정한다는 것을 발견합니다 — 기술적 발견이 아니라 형평성 발견이며, 저소득·중간소득 환경에 집중된 것입니다.

## 이 페이지의 위치

학습자를 둘러싼 사람들을 위해서는 [[stakeholders]]와, 교수자가 이 발견들로 무엇을 하는지를 위해서는 [[pedagogy]]와 [[learning-design]]와 함께 읽으십시오. [[assessment]]는 어떤 학습자 역량이 결코 가시화되는지를 결정하고, [[limitations-in-aied-research]]는 학습자 측 증거가 왜 그토록 단기적이고 자기보고적이며 편의 표본에서 수행되는지를 설명하며, [[misconceptions]]은 학습자 자신을 위한 통상적 입구입니다.

## 연결된 개념

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — 학습자가 AI를 어떻게 인식하고, 상호작용하고, 영향을 받는지
- [[learner-identity]] — 한 분야와 AI에 관계하여 학습자가 누가 되어 가는지
- [[agency]] — 학습자가 여전히 통제하고 선택하는 것
- [[student-ai-interaction]] — 학습자가 AI에게 실제로 무엇을 요청하고 대화가 어떻게 진화하는지
- [[cognitive-offloading]] — 과잉 의존과 사고에 대한 AI의 대체
- [[self-regulated-learning]] — 자신의 학습을 계획하고, 감시하고, 조정하기
- [[help-seeking]] — 도움을 잘 요청하기, 그리고 학습자가 그렇게 하지 않을 때의 실패 양상
- [[metacognition]] — 자신이 이해하는 것과 이해하지 못하는 것을 알기
- [[motivation]] — 학습자가 지속하거나 멈추는 이유
- [[self-efficacy]] — 자신의 역능에 대한 학습자의 자신감
- [[student-engagement]] — 행동적, 정서적, 인지적 참여
- [[prior-knowledge]] — 지원이 학습이 되는지를 결정하는 배경 지식
- [[student-modeling]] — 시스템 안에서의 학습자 표상
- [[knowledge-tracing]] — 시간에 걸친 기술 습득의 추정
- [[simulating-students]] — 임시적 대리물로서의 LLM 시뮬레이션 학습자
- [[ai-literacy]] — 학습자가 AI를 잘 사용하는지를 결정하는 역량
- [[equity-in-ai-education]] — 누가 이익을 얻고 누가 소외되는가
- [[well-being]] — 불안, 스트레스, AI 매개 학습의 정서적 비용
- [[misconceptions]] — 학습자가 AI에 대해 가져오는 정신 모형
- [[stakeholders]] — 같은 분야의 다른 쪽: 교수자, 리더, 설계자
- [[assessment]] — 어떤 학습자 역량이 결코 가시화되는가

## 연결된 문서

- [[uneven-impact-generative-ai-student-learning-2026]] — 의존 양상과 평가 리터러시가 학생 결과를 가른다
- [[student-perceptions-ai-study-productivity-2026]] — 학습자는 의존 우려와 나란히 효율성 이득을 보고한다
- [[student-llm-interaction-taxonomy-review-2026]] — 학습 지향적 학생-LLM 상호작용의 분류
- [[student-ai-conversations-cognitive-engagement-2026]] — 학생-AI 대화에서의 분야 특정 양상
- [[layer-sensitive-cognitive-offloading-writing-2026]] — 독립적 역량 없이 보조된 수행 향상
- [[genai-performance-vs-learning]] — 보조된 수행과 보조 없는 학습을 왜 따로 측정해야 하는가
- [[shaw-nave-cognitive-surrender-2026]] — 우연이 아니라 경향으로서의 인지적 항복
- [[metacognitively-discordant-completion-genai-2026]] — 이해하지 못한다는 것을 알아차리고도 제출하는 학습자
- [[verification-quality-reliance-calibration-genai-2026]] — 검증 품질과 의존 보정
- [[simulating-students-llm-review-2026]] — 시뮬레이션된 학생: 구조, 메커니즘, 한계
- [[stanbkt-bayesian-knowledge-tracing]] — 베이즈 지식 추적에서의 모수 추정
- [[demographic-signals-llm-student-assessment-2026]] — LLM 기반 평가에서의 암묵적·명시적 인구통계학적 신호
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI 리터러시, 참여, 심리적 자본
- [[genai-student-experiences-uk-he-survey-2026]] — 학생들은 최소 노력의 당김을 기술한다
- [[mulisa-students-genai-integrity-perspectives-2026]] — GenAI가 부정행위 도구인지 학습 동반인지에 관한 학생들의 견해
- [[munoz-misconduct-allegation-evidence-2026]] — 부정행위 신고 파일이 실제로 증거로 담고 있는 것
- [[wright-transcription-not-generation-2026]] — 지나치게 포괄적인 AI 규칙과 그것이 잡아내는 학생들
- [[sharma-judgment-visible-genai-assessment-2026]] — 준수가 아니라 평가적 판단으로서의 정직성
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 원격 감독이 학생에게 미치는 정서적·형평성 비용
