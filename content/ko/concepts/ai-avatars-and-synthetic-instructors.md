---
title: AI 아바타와 합성 교수자
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [human-ai-collaboration, teacher-role, academic-integrity]
pedagogy: [professional-training, experiential-learning, situated-learning, video-education]
technology: [generative-ai, llm, pedagogical-agent, simulation, simulating-students, virtual-and-augmented-reality, conversational-ai]
assessment: [automated-assessment, assessment-validity, feedback]
ethics: [trust, ai-use-disclosure, bias-mitigation, inclusive-learning]
discipline: [medical education]
level: [higher ed, teacher education]
audience: [instructors, instructional designers]
confidence: medium
translation_of: concepts/ai-avatars-and-synthetic-instructors
source_updated: "2026-11-04T17:45:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **AI 아바타와 합성 교수자** — 녹화된 강연자, 음성 튜터, [[pedagogical-agent|교수 에이전트]], 모의 환자나 모의 학생, 역할극 파트너, 또는 시험관으로서 교수 역할을 맡는 사람처럼 보이는 [[generative-ai|AI]] 시스템입니다. 이 범주를 정의하는 것은 단일 기술이 아니라 사람을 대신하는 얼굴과 목소리입니다. 그 표면이 이 시스템들을 매력적으로 만들며, 동시에 그 특유의 문제가 집중되는 곳이기도 합니다: [[trust|신뢰]]는 정체성 단서에 붙고, 사실성은 효과성을 따라가지 못하며, 학습자는 인간이 시뮬레이션되고 있다는 것을 모를 수 있습니다.

## 생각해 볼 질문들

- [[video-education|강의 영상]]이 나중에 여러분의 교수자 외형으로 합성되었다는 것을 알게 된 얼굴이 진행한다면, 무엇이 달라집니까 — 내용입니까, 누가 가르쳤다는 감각입니까, 아니면 아무것도 아닙니까?
- 유창하고 협조적이며 결코 수업을 탈선시키지 않는 [[simulating-students|모의 학생]]은 대화하기 쉽습니다. 그 연습은 여러분을 무엇에 대비시켰고, 무엇을 조용히 빠뜨렸습니까?
- 만남 전에 환자가 생성된 것이라고 미리 듣고 싶으십니까? 나중에 알게 된다면 그 세션에서 얻는 것이 어떻게 달라집니까?
- 어느 쪽이 더 큰 진실성 위험입니까: 학습자가 AI 시험관을 속이는 것, 아니면 AI 시험관이 학습자를 잘못 읽는 것?
- [[collaborative-learning|또래 역할극]]은 무료이고 익숙하며 사회적으로 부담스럽습니다. 아바타가 그것 대신 선택되려면 무엇을 더해야 합니까?

## 들어가며

AI 아바타는 모형이 구동하는 렌더링 또는 애니메이션된 인간 표상이고, 합성 교수자는 그 표상을 교수 역할에 놓은 것입니다. 둘은 에이전트와 같지 않습니다. [[theelen-classroom-simulations-four-layer-framework-2026|Theelen 외(2026)]]는 표상을 [[agency|행위성]]과 분리합니다: 아바타는 참가자가 보는 것이고, 그 뒤의 행위자는 또래, 시뮬레이션 전문가, 대본, 규칙 기반 시스템, 또는 [[llm|LLM]]일 수 있습니다. 따라서 똑같이 생긴 두 가상 학생도 전혀 다른 만남을 제공할 수 있습니다.

이 페이지는 역할로 조직됩니다: 합성 인간이 어느 역할을 맡는지, 그 역할에 어떤 증거가 있는지, 그리고 그 표면이 학습자와 시스템의 관계에 무엇을 하는지. 아래 문헌은 강의 영상, 교습, 임상 시뮬레이션, 교사 연습, 역할극, 평가에 걸칩니다.

## 합성 인간이 맡을 수 있는 여섯 역할

**화면 속 교수자.** 복제된 진행자가 녹화 영상을 전달합니다. 대규모 온라인 학부 강좌에서 [[personalized-ai-generated-videos-preference-2026|Tomlinson 외(2026)]]는 교수자로부터 복제한 HeyGen 아바타로 각 주제의 도메인 맞춤 변형 세 가지를 렌더링하고, 게시 전에 검토하고, LMS에 배포했습니다.

**튜터 또는 교수 에이전트.** [[elevate-genai-virtual-tutors|ELEVATE]]는 전적으로 로컬 하드웨어에서 도는 3D 아바타 튜터를 만들며, 페르소나, 목소리, 태도, 속도를 통제하는 교사 대면 층을 갖춥니다. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]]은 몰입형 매체에서 같은 역할을 서술합니다: 안내하고, 질문하고, 설명하는 에이전트.

**모의 환자 또는 내담자.** [[sophie-clinical-communication-ai-assessment-2026|SOPHIE 2.0]]은 말하는 아바타 환자와 함께 24개의 브라우저 기반 임상 시나리오를 제공합니다. [[ai-psychotherapy-training-avatars|Riachi 외(2026)]]는 이 패턴을 수용전념치료에 적용하며, 훈련생의 충실도를 차례마다 채점합니다.

**모의 학생.** [[hauk-student-avatars-dialogue-teacher-education-2026|Hauk 외(2026)]]는 21명의 [[teacher-education|예비 교사]]에게 "Marco"와의 10분 음성 대화를 주었습니다. 이 학생은 중학교 저학년이며 이민자에 대해 폄하하는 발언을 합니다.

**역할극 파트너.** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]는 아동이 로봇 아바타를 조종하여 방관자 개입을 연습하게 합니다. ACLIME은 이것을 두 번째 상호작용 양식이라고 부릅니다: [[situated-learning|상황적]] 대화를 위해 정의된 역할을 맡은 에이전트.

**평가 대화 상대.** SOPHIE 판정자는 의사소통 루브릭에 비추어 전사록을 채점합니다. [[voice-based-ai-feedback-interviews-higher-ed-2026|Tamme 외(2026)]]는 [[self-report-measures|서면 설문]]을 시행하는 대신 강좌에 관해 학생을 면담하는 음성 에이전트를 제안합니다.

## 증거가 뒷받침하는 것, 역할별로

증거는 합성 인간이 *실천의 파트너*일 때 가장 강하고, *학습의 대역*일 때 가장 약합니다.

녹화된 교수에 관해 측정된 결과는 성취가 아니라 선호입니다. 두 번의 개설과 493명 응답자에 걸쳐 AI 생성 개인화 영상은 개인화되지 않은 인간 녹화 영상보다 높은 순위를 받았습니다(평균 순위 2.26 대 2.69, p < .001). 가장 높은 순위를 받은 조건인 인간 녹화 개인화 영상은 존재한 적이 없으므로, 그 순위는 경험과 상상을 섞은 것입니다. 저자들은 객관적 학습 결과를 향후 과제로 보고합니다.([[personalized-ai-generated-videos-preference-2026]])

교습에 관해 증거는 공학적 타당성입니다. ELEVATE는 음성을 스트리밍하여 소비자 하드웨어에서 첫 오디오까지 대략 5~6초에 도달했고, 그것이 지각된 지연의 대부분을 가렸습니다. 통제된 사용자 연구는 수행되지 않았으므로 학습과 [[help-seeking|도움 구하기]]에 미치는 영향은 열려 있습니다.([[elevate-genai-virtual-tutors]])

임상 의사소통에 관해 증거는 가장 발전되어 있지만 여전히 [[transfer-of-learning|전이]]에는 미치지 못합니다. 전사록만 읽는 SOPHIE의 판정자는 인간 평가자 합의에 맞서 Pearson 0.759와 ICC(A,1) 0.746에 도달했습니다 — 개별 인간의 분포 안이지 바깥이 아닙니다. 59명의 임상의와 학생을 대상으로 한 원격 연구에서 92%가 몰입감 있다고 보았고 83%가 임상적으로 관련 있다고 판단했습니다. 두 번의 만남 사이에 점수가 올랐지만 대조군이 없으므로 그 상승을 훈련 탓으로 돌릴 수는 없습니다.([[sophie-clinical-communication-ai-assessment-2026]])

[[simulating-students|모의 학생]]에 관해 증거는 결과가 아니라 상호작용 품질에 관한 것입니다. Hauk의 참가자들은 대화를 분명히 기능적이라고(M = 5.37) 평정하면서도 중간 정도로만 진정성 있다고(M = 3.71) 평정했고, 전사록은 그 분열을 87.1% 대 37.4%의 포괄률로 재현했습니다. 아바타가 도전 작업을 맡았고(그 텍스트의 51.1%), 교사들은 설명하고 정당화했습니다. 한 프로그램의 지원자 21명, 한 세션, 실제 역할극과의 비교 없음.([[hauk-student-avatars-dialogue-teacher-education-2026]])

역할극에 관해 REMind는 아동이 방어에 대해 지각하는 [[self-efficacy|자기효능감]]에서 사전-사후 유의한 증가를 보고하며, 괴롭힘에 맞서는 것이 그것을 멈추는지에 대한 믿음도 더 잘 보정되었습니다. 그것은 놀이 테스트 맥락의 9~10세 아동 18명이며, 지속적 행동 변화보다는 가능성을 뒷받침합니다.([[remind-robot-mediated-roleplay-antibullying-2026]])

평가에 관해 SOPHIE 판정자가 가장 분명한 결과이고 음성 면담자가 가장 약합니다. Tamme의 제안은 기술적 파일럿과 아직 공식적으로 분석되지 않은 데이터를 보고하며, 음성이 무엇을 끌어내는지에 관한 모든 주장은 여전히 가설입니다.([[voice-based-ai-feedback-interviews-higher-ed-2026]])

## 신뢰는 얼굴을 통해 이동합니다

얼굴은 [[pedagogy|교수법적 내용]]의 중립적 용기가 아닙니다. 총 396명 참가자의 두 실험에서 [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis와 Kyriakidou-Zacharoudiou(2026)]]는 아바타 정체성 단서가 평가와 실제 수용 모두를 형성함을 발견했습니다. 백인 아바타, 그리고 STEM 맥락에서는 아시아 남성 아바타가 더 신뢰할 만하고 유능하다고 평가되었습니다. 나이 든 흑인 여성 아바타는 모든 측정에서 중첩된 불이익을 겪었습니다. 참가자들은 자신의 인종 내집단이나 전문성에 대한 고정관념과 일치하는 아바타의 안내를 더 쉽게 받아들였습니다.

두 가지 세부가 이것을 설계 문제로 만듭니다. 영역이 효과를 조절했습니다: STEM 및 절차적 과제는 편향을 증폭했고, 성찰적 및 대인 관계적 과제는 그것을 약화했습니다. 그리고 편향은 진술된 태도뿐 아니라 행동에서 작동했으며, 이는 자기보고된 [[trust-calibration|신뢰]]가 그것을 놓쳤을 것임을 뜻합니다. 저자들은 양식화되었거나 덜 인간형인 아바타, 과제에 걸쳐 다양한 아바타를 순환시키기, 그리고 만족도가 아니라 수용을 평가하기를 권합니다.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]])

권위는 몸을 통해서도 도착합니다. ELEVATE의 설계자들은 몸과 목소리가 튜터의 권위를 증폭한다고 경고합니다. 그들은 아바타가 불확실성을 신호하고 노트나 교과서에 비추어 검증하도록 권하기를 권합니다.([[elevate-genai-virtual-tutors]]) SOPHIE는 복잡한 문제를 더합니다: 같은 아바타 뒤에서 이전에 더 인간답다고 평가받은 모형이 그 우위를 잃었고, 의사소통 수행은 백엔드에 걸쳐 동일했습니다(0.437 대 0.438). 인간다움은 모형이 아니라 상호작용 — 목소리, 지연, 차례 주고받기 — 에 속했습니다.([[sophie-clinical-communication-ai-assessment-2026]])

반대 증거는 프롬프트가 인간 틀을 제공해도 학생들이 그것을 보류하도록 가르침받을 수 있다는 것입니다. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman 외(2026)]]는 654명의 글쓰기 학생에게 챗봇이 튜터처럼, 협력자처럼, 아니면 다른 무엇처럼 느껴지는지 물었고, 겨우 절반 정도(51.7%)가 인간형 선택지 중 하나를 택했습니다. 학생들은 그것을 도구나 프로그램이라고 불렀고, 로봇이나 컴퓨터에 비유했으며, 데이터를 주면 텍스트를 내놓는 피드백 자판기 같은 은유를 만들어 냈습니다. 저자들은 그 인간 틀의 거부를 리터러시 성과로 다루며, 이는 그 효과가 인터페이스가 아니라 교수에 기인함을 시사합니다.

## 실재감, 사실성, 그리고 불쾌한 골짜기

사실성은 사다리가 아닙니다. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]]은 행동적 사실성을 [[community-of-inquiry|사회적 실재감]]의 결정적 예측 변수로 다루고, 시각적 충실도가 높아지면 불쾌한 골짜기 위험이 있다고 경고합니다. 거의 인간에 가까운 에이전트가 갑작스러운 거부를 촉발하는 지점입니다. 그것은 또한 그 교환의 값을 매깁니다: 몰입과 에이전트 사실성은 외재적 인지 부하를 높이는 반면, 상호작용은 집단 작업 기억을 통해 내재적 부하를 낮출 수 있습니다. 그 선두의 경고는 직설적입니다 — VR 헤드셋 사용자의 대략 42%가 사이버 멀미를 보고하며, 후유 효과는 약 10분에서 몇 시간까지 이어집니다.([[aclime-pedagogical-agents-extended-reality-2026]])

실천 연구들은 대체로 이 주장의 온건한 판본을 뒷받침합니다. Hauk의 저자들은 중간 정도의 진정성을 기능에 맞는 충실도 적합으로 읽습니다. 이인 대화형 음성 전용 연습은 초심자의 루틴을 안정화하고, 또래 역학과 비언어적 단서는 나중에 추가할 수 있습니다.([[hauk-student-avatars-dialogue-teacher-education-2026]]) SOPHIE에서 47%의 참가자는 여전히 AI 환자에게 진정한 공감을 느끼기 어렵다고 했지만, 66%는 사람과 대화하는 것보다 AI와 대화하는 것이 덜 스트레스라고 했습니다.([[sophie-clinical-communication-ai-assessment-2026]])

학습자가 일률적으로 더 많은 사실성을 원하지는 않습니다. [[trikonet-trivalence-co-creativity-2026|TriKoNet]]의 탐색 연구에서 학생들은 사진처럼 사실적인 표상을 만장일치로 거부했습니다. 그들은 제공된 페르소나를 받아들이는 대신 모듈식 설계 공간을 사용해 자기 역할 개념을 저술했습니다.([[trikonet-trivalence-co-creativity-2026]]) ELEVATE는 체화가 일부 학습자에게 장벽이 된다고 지적합니다. 감각 민감성이 있거나 인간형 에이전트에 불편함을 느끼는 학습자 같은 경우이며, 따라서 아바타 구성은 선호가 아니라 요건입니다.([[elevate-genai-virtual-tutors]])

## 동의, 공개, 딥페이크 위험

이 서술들 전반에서 공개는 측정된 변수가 아니라 설계 결정으로 나타납니다. Hauk의 시나리오는 혐오 발언의 경계에 놓여 있었고, 그 안전장치는 절차적이었습니다. 설계에는 오리엔테이션, 조정 지침, 지속적 교수자 모니터링, 즉시 중단 선택지, 구조화된 디브리핑, 가명 처리된 집계 분석이 포함되었습니다.([[hauk-student-avatars-dialogue-teacher-education-2026]]) Theelen의 프레임워크는 학습자와 교사 교육자가 [[simulation|시뮬레이션]]의 어느 부분이 사람, 대본, 또는 AI에 의해 통제되는지 알 것을 요구하며, 그 투명성을 방어 가능한 적응의 조건으로 다룹니다.([[theelen-classroom-simulations-four-layer-framework-2026]])

더 어려운 질문은 사람을 시뮬레이션하는 것 자체가 작은 기만인지입니다. 힘겨워하는 환자가 실제라고 믿는 학습자는 공개된 시뮬레이션이라면 끌어내지 못했을 돌봄을 쏟은 뒤, 나중에 들었을 때 속았다고 느낄 수 있습니다. Hauk의 중간 정도 진정성 평정은 참가자들이 아바타의 본질에 속지 않았음을 시사하고, SOPHIE의 47% 공감 결과는 일부가 알면서도 몰입했음을 시사합니다. 어느 연구도 공개를 직접 시험하지 않습니다.

[[ai-use-disclosure|공개]]에는 생산 쪽도 있습니다. Tomlinson의 파이프라인은 교수자의 외형과 목소리를 복제했습니다. 학생 일부는 생성형 AI에 원칙적 반대를 제기했습니다 — 환경 비용, 노동, 자동화, 진실성 — 그리고 더 나은 렌더링으로는 답할 수 없는 문제였습니다.([[personalized-ai-generated-videos-preference-2026]]) 교수자가 복제되는 것에 동의하는 문제와 학생이 그 복제본에게 가르침받는 것에 동의하는 문제는 별개이며, 여기 어떤 연구도 둘 중 어느 것도 측정하지 않습니다.

딥페이크 리터러시는 같은 역량의 뒷면입니다. 호주 중등 표본 199명에서 남성이 딥페이크 콘텐츠를 만들거나 공유한 적이 유의하게 더 많았습니다(23.2% 대 10.0%). 저자들은 그들을 명시적으로 겨냥한 안전 교육을 주장합니다.([[gender-differences-ai-literacy-deepfake]]) 기관이 설득력 있는 교수자, 설득력 있는 환자, 설득력 있는 학생을 생성할 수 있게 되면, 누가 말하고 있는지의 검증은 리터러시 문제만큼 [[academic-integrity|학문적 진실성]] 문제가 됩니다. ELEVATE의 저자들이 주문형 교습이 가능해지면 권하는 구술 변론과 과정 증거는 같은 근본 문제를 다룹니다.([[elevate-genai-virtual-tutors]])

## 증거의 정직한 상태

여기 거의 모든 연구는 작고 짧습니다. Hauk은 지원자 21명과 한 세션입니다. SOPHIE는 완료자 59명이고 대조군이 없습니다. 심리치료 평가는 심리학자 두 명, 각각 약 90분입니다. PBL 파일럿은 학생 26명과 사례 하나입니다. ACLIME과 Theelen은 개념적 프레임워크이고, TriKoNet의 기반은 단일 세션의 여덟 집단입니다.([[genai-simulate-patient-history-pbl-2026]])([[ai-psychotherapy-training-avatars]])([[aclime-pedagogical-agents-extended-reality-2026]])([[theelen-classroom-simulations-four-layer-framework-2026]])([[trikonet-trivalence-co-creativity-2026]])

큰 표본은 태도와 선호에 관한 것입니다 — 아바타 정체성에 관한 396명 참가자, 영상 선호에 관한 493명 응답자 — 그리고 둘 다 편의 표본이나 단일 강좌 모집단입니다. 이 집합의 어떤 연구도 합성 교수자가 인간 교수자보다 더 나은 학습을 낳는다는 것을 입증하지 않습니다. 방어 가능한 주장은 더 좁습니다: 이 시스템들은 실천 만남을 근사할 수 있고, 한 영역에서는 인간 평가자에 맞서 수용 가능한 일치로 채점될 수 있으며, 학습자가 교수의 출처를 평가하는 방식을 바꿀 수 있습니다.

그 좁음이 중요합니다. Theelen의 저자들은 그것을 직접 말합니다: 유창함과 실재감의 감각은 [[assessment-validity|타당성 증거]]가 아닙니다.([[theelen-classroom-simulations-four-layer-framework-2026]]) 교사처럼 들리는 것은 방 안에서 가장 쉬운 기준을 통과하는 일입니다.

## 흔한 오해

**"더 사실적인 아바타가 더 잘 가르친다."** 사실성과 효과성은 둘 다 측정된 모든 곳에서 분리되었습니다. SOPHIE의 두 백엔드는 같은 아바타 뒤에서 동일한 의사소통 점수를 냈고, TriKoNet의 학생들은 사진처럼 사실적인 페르소나를 단호히 거부했습니다.

**"아바타가 설득력 있으면 학습자는 그것을 사람으로 대한다."** 의대생들은 생성형 AI 환자를 검색 가능한 질문 기반으로 면담했고, 대개 폐쇄형 질의를 썼으며, 그럼에도 그 경험을 높게 평정했습니다.([[genai-simulate-patient-history-pbl-2026]]) 확신과 상호작용 방식은 별개의 결과입니다.

**"합성 교수자는 하나의 기술이므로 발견이 전이된다."** 선호를 최적화하는 복제 강연자, 지연을 최적화하는 튜터, 임상 충실도를 최적화하는 환자는 서로 다른 실패 양식을 지닌 다른 인공물입니다. 한 역할의 증거가 다른 역할에 관한 주장을 허가하지 않습니다.

**"아바타 외형은 장식이다."** 정체성 단서는 신뢰도 평정과 안내의 실제 수용을 바꾸었고, 나이 든 흑인 여성 아바타에게는 불이익이 중첩되었습니다.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]) 구성은 교수법적이고 형평성적인 결정입니다.

**"모의 환자는 비용을 뺀 표준화 환자다."** 훈련생 심리학자들은 자신의 가상 환자가 협조적이고 이미 치료에 능숙하다고 느꼈으며, 행동적 경직성을 과소 대표하는 "이상적" 사례였습니다.([[ai-psychotherapy-training-avatars]]) 비용은 떨어지지만 사례 타당성이 자동으로 따라오지는 않습니다.

## 연결된 개념

- [[simulating-students]]
- [[pedagogical-agent]]
- [[simulation]]
- [[virtual-and-augmented-reality]]
- [[trust]]
- [[trust-calibration]]
- [[human-ai-collaboration]]
- [[ai-use-disclosure]]
- [[academic-integrity]]
- [[teacher-education]]
- [[teacher-role]]
- [[professional-training]]
- [[medical-education]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[embodied-learning]]
- [[video-education]]
- [[generative-ai]]
- [[llm]]
- [[conversational-ai]]
- [[intelligent-tutoring]]
- [[self-efficacy]]

## 연결된 문서

- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — 아바타 정체성 단서가 신뢰도와 안내 수용을 바꾼다(Anthis & Kyriakidou-Zacharoudiou 2026)
- [[hauk-student-avatars-dialogue-teacher-education-2026]] — 실천 기반 교사 교육 대화에서의 학생 아바타(Hauk et al. 2026)
- [[gender-differences-ai-literacy-deepfake]] — AI 리터러시 워크숍에서 성별에 따른 딥페이크 생성과 신고
- [[elevate-genai-virtual-tutors]] — 교사 거버넌스 층을 갖춘 로컬 우선 3D 아바타 튜터(ELEVATE)
- [[sophie-clinical-communication-ai-assessment-2026]] — 임상 의사소통을 위한 LLM 판정자를 갖춘 아바타 환자
- [[genai-simulate-patient-history-pbl-2026]] — PBL 병력 청취 튜토리얼에서의 생성형 AI 환자 아바타
- [[ai-psychotherapy-training-avatars]] — 심리치료 훈련에서 ACT 충실도 연습을 위한 환자 아바타
- [[aclime-pedagogical-agents-extended-reality-2026]] — 확장 현실에서의 교수 에이전트: 실재감, 사실성, 부하(ACLIME)
- [[remind-robot-mediated-roleplay-antibullying-2026]] — 방관자 개입을 위한 조종형 아바타와 로봇 매개 역할극
- [[personalized-ai-generated-videos-preference-2026]] — 복제된 교수자 영상 개인화와 학생 선호
- [[theelen-classroom-simulations-four-layer-framework-2026]] — 교실 시뮬레이션에서 표상과 행위성을 분리하는 네 층 프레임워크
- [[voice-based-ai-feedback-interviews-higher-ed-2026]] — 강좌 피드백 면담을 위한 대화형 음성 에이전트 제안
- [[trikonet-trivalence-co-creativity-2026]] — 사회기술적 네트워크에서의 공동 창조적 교수 아바타(TriKoNet)
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — 654명 학생 중 51.7%만이 제시된 인간형 역할을 택했다; 한 명은 그것을 피드백 자판기라고 불렀다
