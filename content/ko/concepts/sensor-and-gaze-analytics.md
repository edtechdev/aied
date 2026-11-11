---
title: 센서 및 시선 분석
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-11T07:40:00-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **센서 및 시선 분석** — 시선 추적, 뇌전도, 피부 전도 활동, 심박 변이도, 카메라에서 도출한 자세를 사용하여 주의, 참여, 인지 부하, 정서 같은 학습자 상태를 추론하는 것입니다. [[ai-education|교육에서의 AI]]에서 이 신호들은 퀴즈와 자기보고가 제공할 수 없는 연속적이고 비언어적인 학습 조망을 약속합니다. 동시에 그것들은 이 분야의 가장 어려운 추론 문제 한가운데 있습니다: 센서는 마음이 아니라 몸을 기록하며, 학습자가 무엇을 생각하거나 느끼는지에 관한 모든 주장은 그 기록 위에 겹쳐진 해석입니다([[kim-ai-embodied-learning-review-2026|Kim and Han, 2026]]).

## 생각해 볼 질문들

- 웹캠은 한 강의 내내 여러분의 눈이 동영상 플레이어 안에 머물렀음을 보여 줄 수 있습니다. 그것이 여러분이 주의를 기울이고 있었다는 뜻입니까?
- 튜터가 여러분의 인지 부하를 실시간으로 추정할 수 있다면, 그것은 여러분에게 먼저 묻지 않고 그 추정에 따라 행동해야 합니까?
- 학생의 시선은 틱, 시각 장애, 또는 문화적 규범 때문에 화면을 벗어날 수 있습니다. "낮은 주의" 표시는 그 학생에게 무엇을 뜻합니까?
- 대학이 강좌 개선을 위해 뇌와 심장 데이터를 수집하도록 허용해야 합니까, 그리고 진정한 동의에는 무엇이 필요할까요?
- "참여 정확도 75%"라는 수치는 정밀하게 들립니다. 센서가 실제로 도달한 참여의 층위는 어디였고, 놓친 층위는 어디였습니까?
- 감독 시스템은 이제 자세와 머리 움직임을 읽습니다. 부정행위를 탐지하는 것과 몸을 판정하는 것 사이의 경계는 어디입니까?

## 들어가며

센서 및 시선 분석은 학습자에 대한 물리적 측정을 교육적 추론으로 바꾸는 방법군을 가리킵니다. 측정에는 눈이 어디에 얼마나 오래 머무는지, 두피의 전기 활동, 땀샘 반응, 심박의 박동 간 변이, 머리와 몸통의 위치와 움직임이 포함됩니다. 추론에는 주의, 참여, 인지 부하, 혼란, 스트레스, 그리고 평가 상황에서는 의혹이 포함됩니다.

매력은 단순합니다. [[self-report-measures|자기보고]]는 회고적이고 거칠며, 퀴즈는 몇몇 순간에서 학습을 표집합니다. 센서는 연속적으로 작동하고 학습자에게 거의 의식적 노력을 요구하지 않습니다. 그 조합이 감지를 [[learning-analytics|학습 분석]]과 [[student-modeling|학생 모델링]]의 중심으로 만들었고, 감지는 기술적으로 인상적이지만 해석은 얇은 방대한 문헌을 낳았습니다.

AI와 [[embodied-learning|체화 학습]]을 짝지은 23편의 연구에 대한 [[meta-analysis-systematic-review|체계적 문헌고찰]]은 그 불균형을 구체적으로 보여 줍니다. 분석과 평가가 코딩된 AI 역할의 40.0%를, 인식과 탐지가 22.5%를 차지한 반면, 피드백과 코칭은 15.0%였습니다. 감지 역할은 역할 태그의 62.5%를 차지한 반면 참여적 역할은 35.0%였습니다([[kim-ai-embodied-learning-review-2026|Kim and Han, 2026]]). 이 분야는 다음에 무슨 일이 일어날지를 바꾸는 일보다 학습자를 지켜보는 일을 더 잘합니다.

## 각 신호가 실제로 측정하는 것

**시선과 응시.** 시선 추적기는 눈이 어디를 향하는지, 얼마나 오래 머무는지, 언제 단속 운동을 하는지, 얼마나 넓게 분산되는지를 보고합니다. WebGazer 같은 화면 기반 시스템은 웹캠으로 시선을 추정하고, 안경형 장치는 눈을 직접 추적합니다. TutorLoop는 시선을 두 양으로 바꿉니다: 콘텐츠 영역 안의 시선 점수 비율로서의 주의, 그리고 시선 엔트로피로서의 작업 부하이며, 분산된 시선이 인지 부하를 추적한다는 추론에 기댑니다([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). 아동용 시선 기반 어시스턴트인 Ollie는 대신 그림 속 관심 영역을 정의하고 아동이 그중 하나를 볼 때 내레이션을 촉발합니다([[gaze-informed-ai-children|Wu et al., 2026]]).

**뇌전도.** EEG는 높은 시간 해상도로 두피 전압 변동을 기록합니다. 이 계열에서 피질 활동에 직접 도달하는 유일한 신호이며, 그래서 평가 연구를 끌어들입니다. 실용적 교육 시스템은 건식 전극과 적은 채널을 사용합니다: E3Sense는 125 Hz로 네 개의 건식 EEG 채널을 받고 그중 두 개의 전두엽 채널을 분석했습니다([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). 연구급 장비는 반대 접근을 취합니다: Kosmyna 등(2025)은 32채널 EEG로 [[llm|LLM]], 검색 엔진, 또는 도구 없이 글을 쓰는 학생들을 비교했고, LLM 집단에서 가장 약한 신경 연결성을 발견했습니다([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna et al., 2025]]). 그 연구는 단일 채널 증거에 관한 가장 분명한 경고이기도 합니다. 핵심 주장이 54명 참가자 중 18명만 참석한 선택적 교차 세션에 기대고 있기 때문입니다.

**피부 전도 활동.** EDA는 교감 신경 각성을 가리키는 지표인 땀샘 전도도를 측정합니다. 그것은 스트레스, 노력, 정서적 강도에 반응하며, 그 셋을 구분하지는 못합니다. 같은 구성개념이 손목 밴드와 시선 추적기 프레임으로 몇 센티미터 간격을 두고 고정된 이마 전극에 나타납니다([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

**심박과 심박 변이도.** 심박은 각성을 추적하고, 박동 간 변이는 자율신경 회복을 지표화합니다. Oura 링을 착용한 458명 학생에 대한 1년 연구에서 정서적 소진 언어는 더 낮은 수면 효율과 더 낮은 심박 변이도를 추적했습니다([[affective-text-wearable-student-health|Affective Text and Wearable Sensing, 2026]]). 어느 측정도 원인을 규명하지는 못합니다.

**카메라 기반 자세와 움직임.** 감독 시스템은 프레임마다 열일곱 개의 신체 랜드마크를 추출하여 자세 편차, 머리 움직임 추세, 상체 움직임을 도출할 수 있습니다([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). 이것은 움직임을 측정합니다. 그것을 의심스러운 행동이라고 부르는 것은 별개의, 뒷받침되지 않은 단계입니다.

이 신호들은 표집률, 잡음, 장비 부담에서 다릅니다. E3Sense는 열두 개의 EEG, 여섯 개의 눈, 세 개의 EDA 창을 166차원의 공유된 120초 표상으로 정렬했습니다([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage는 일곱 가지 장치 유형을 동시에 돌리고, 경량 조합이 사용 가능한 신호의 대부분을 담고 있다고 결론지었습니다([[engagement-assessment-video|Leng et al., 2026]]).

## 신호가 쓰이는 곳

**[[video-education|영상 학습]]에서의 참여 탐지.** E3Sense는 30명의 대학생에게 영상마다 다섯 구간을 평정하게 하여 450개의 평정을 얻었습니다. 융합 모형은 홀드아웃 참가자에서 63.0%의 최빈값 기준선에 맞서 75.0%의 균형화된 1수준 이내 정확도에 도달했습니다([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage는 16명 참가자와 715개 프로브 창에 걸쳐 MAE 0.81과 83.75%의 1수준 이내 정확도를 보고했습니다([[engagement-assessment-video|Leng et al., 2026]]). 둘 다 그 추정을 근사치로 다룹니다.

**교실에서의 주의 추정.** [[multimodal|멀티모달 트랜스포머]]가 57명 피험자의 자연주의 데이터셋인 DIPSER에서 얼굴 이미지를 웨어러블 신호와 융합하여 MAE 0.283에 도달했습니다. 시각 전용 기준선에 대한 우위는 완만했고, 저자들은 얼굴 특징이 일차적 정보원이었다고 결론짓습니다([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]).

**인지 부하와 피드백 시점.** TutorLoop는 시선에서 도출한 주의와 작업 부하를 사용해 [[reinforcement-learning|강화학습]] 에이전트로 네 가지 [[feedback|피드백 유형]] 중에서 선택했습니다. 187명 참가자에 걸쳐 전체 시스템은 기준선보다 덜 자주 개입하면서도 주의를 개선하고 작업 부하를 낮췄습니다([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**감독과 진실성.** 자세 기반 감독은 자체 라벨링한 시나리오 집합에서 천장에 가까운 성능을 보고합니다: 99.56% 정확도와 0.9957의 AUC([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). 웨어러블 AI는 같은 문제를 다른 쪽에서 바꿉니다. 스마트 안경은 감독이 의지하는 시선 낙하와 자세 변화를 없애며, Corbin과 동료들은 이 조건을 이중 투명성이라고 부릅니다([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**정서와 [[well-being|웰빙]].** 시험 중 수집된 생리 신호가 성적 범주를 예측했으며, 랜덤 포레스트는 30회 반복에 걸쳐 평균 0.96에 도달했습니다([[physiological-signals-exam-outcomes-ml|Yamazaki and Rimal, 2026]]). 최상위 예측 변수는 피부 전도 활동, 가속도계 움직임, 피부 온도였습니다. 그것은 각성과 움직임이지 이해가 아닙니다.

**평가 연구.** EEG는 친숙도와 심적 표상의 직접 측정으로 시험되었습니다. 두 노선 모두 유망하고 둘 다 탐색적이며, 다음 절이 그것을 다룹니다.

## 추론의 격차

위의 모든 용도는 하나의 연쇄에 의존합니다: 생리적 또는 행동적 사건, 그것에서 계산된 특징, 라벨로 훈련된 모형, 그리고 심적 상태에 관한 주장. 각 고리가 샙니다.

라벨이 흔히 가장 약한 고리입니다. E3Sense는 학습자 자신의 구간 평정을 예측했고, 그 평정의 63%가 두 개의 참여 수준에 몰려 있었습니다. 모형은 상태가 아니라 분포를 학습함으로써 좋은 점수를 얻을 수 있습니다. 연구자들이 참여에 대한 학습자 자신의 정의를 추가했을 때 정확도는 64.6%에서 71.5%로 올랐으며, 이는 라벨과 신호가 부분적으로 다른 것을 측정하고 있었음을 시사합니다([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

[[assessment-validity|타당화]]는 모형을 부풀릴 수 있습니다. EEG 기반 친숙도 예측을 위한 열다섯 모형의 벤치마크는 층화 교차 검증에서 0.9853 F1에 도달했습니다. 시간적 구조를 존중하는 시행 독립적 Group K-Fold는 최고치를 25%의 우연 수준에 맞서 0.6038 F1로 떨어뜨렸습니다([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). 첫 번째 숫자는 누출을 설명하고, 두 번째 숫자는 학습을 설명합니다.

신경 상관물은 점수가 아닙니다. EEG에서 재구성한 이미지는 55개의 참가자-영상 관측에 걸쳐 시험 수행과 R² = 0.79로 상관했습니다. 정답 문항은 오답보다 더 높은 의미 유사성도 보였습니다. 그러나 한 참가자는 고품질 재구성을 산출하고도 틀리게 답했으므로, 재구성 품질을 정답성으로 읽을 수는 없습니다([[seeing-cognitive-representations-eeg-reconstruction|Su et al., 2026]]).

주의는 학습이 아닙니다. TutorLoop에서 주의는 학습과 r = 0.017로 상관했고, 작업 부하는 r = -0.168로 부정적으로 상관했습니다([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). 주의 신호를 최대화한 시스템은 잡음에 가까운 무언가를 최적화했을 것입니다.


센서는 연구가 상호작용이라고 주장하는 곳에서 공존을 기록할 수 있습니다: [[hur-computational-analysis-teacher-group-interactions-2026|Hur et al. (2026)]]는 자세 기반 검출기가 재현율 55%에 그쳐, [[teacher-role|교사]]–학생 집단 상호작용에서 인간 코더가 확인한 20개 사건 가운데 11개만 잡아냈음을 발견했습니다. 코딩된 구간의 49.2%에서 교사가 집단 경계 안에 있었으나 학생들이 교사를 바라본 경우는 25.4%에 그쳤고, 어느 비교에서도 오디오 특징은 변하지 않았으므로, 이 파이프라인은 지속적 상호작용이 아니라 공간적 공존을 등록했습니다.

생리적 프로파일은 진단이 아닙니다. 시험 스트레스 모형은 각성과 움직임으로 성적 범주를 예측하며, 저자들은 그 산출물이 고부담 결정이 아니라 개인적 상황과 정신 건강 맥락 곁에 놓여야 한다고 강조합니다([[physiological-signals-exam-outcomes-ml|Yamazaki and Rimal, 2026]]).

마지막으로, 수집은 통합이 아닙니다. Kim과 Han은 대부분의 멀티모달 연구가 스트림을 병렬로 모았고, 하나만 얼굴 정서, 시선, 얼굴 탐지를 사후에 정렬했으며, 학습자가 시스템을 사용하는 동안 입력을 실시간으로 융합한 연구는 없었음을 발견했습니다([[kim-ai-embodied-learning-review-2026|Kim and Han, 2026]]). 동기화된 채널 페이지는 단지 기록일 뿐인데도 학습자의 모형처럼 보일 수 있습니다.

## 학습자를 감지하는 일의 윤리

**동의는 기관 권력에 의해 약화됩니다.** 수업에 참석하거나 시험을 치러야 하는 학생은 카메라나 웨어러블을 자유롭게 거부할 수 없습니다. 인구통계적 속성은 자발적으로 제공되지 않을 수도 있습니다: DIPSER의 성별, 연령, 민족 라벨은 참가자가 제공한 것이 아니라 컴퓨터 비전 모형이 이미지로부터 추론한 것이었습니다([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). 모형이 누군가를 공정하게 대우하는지 시험하기 위해 그가 누구인지 추론하는 것 자체가 프로파일링 행위입니다.

**생체 데이터는 평범한 분석 데이터가 아닙니다.** EEG, EDA, 심박 변이도는 건강에 인접하며, 많은 관할권에서 특별 범주 데이터입니다. 그것들은 어떤 강좌가 필요로 하는 것 이상으로 수면, 스트레스, 의학적 상태를 드러낼 수 있습니다. 아동용 시선 기반 시스템은 작은 파일럿에서조차 한 학부모로부터 [[privacy|프라이버시]] 이의를 불러일으켰습니다([[gaze-informed-ai-children|Wu et al., 2026]]).

**기능 확장이 정상 경로입니다.** 웰빙 모니터링은 위험 표시가 되고, 위험 표시는 채점 증거가 됩니다. Corbin과 동료들은 이 표류의 평가 판본을 보여 줍니다: 물리적 배제가 실패하면 검사는 산출물에서 몸으로 옮겨가고, 학생은 자기 안경이 교정용이고 기기가 치료용임을 입증해야 합니다([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**공정성 실패는 다른 몸에 몰립니다.** 얼굴 기반 주의 추정은 피부색, 안경 착용, 조명에 의존합니다. 시선 기반 주의는 눈 맞춤을 피하는 학습자, 그중 일부 자폐 및 [[neurodiversity|신경다양성]] 학생에게 불리합니다. 자세 기반 감독은 틱, 자기자극 행동(stimming), 문화적 움직임 규범을 표시합니다. 그 감독 연구는 표시된 자세가 부정행위에 해당하는지, 또는 탐지기가 [[inclusive-learning|장애 학생]]이나 시선의 문화적 차이를 공정하게 대우하는지 시험하지 않습니다([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). 여기서 규제는 해결책이 아니라 오류를 규칙으로 세탁하는 방식입니다.

**공정성 주장에는 피험자 수준의 증거가 필요합니다.** 성별 대상 정규화기는 검증 MAE 격차를 0.02에서 0.005로 줄였지만, 홀드아웃 피험자에서는 격차와 최악 집단 오류를 모두 키웠습니다([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). 단일 분할을 공정성의 증거로 보고하는 것은 [[equity-in-ai-education|형평성]] 비용을 치르는 설계 실패입니다.

**프라이버시는 설계에 넣을 수 있습니다.** TutorLoop는 WebGazer를 클라이언트 측에서 돌려 원시 시선이 브라우저를 벗어나지 않게 했습니다([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). 그 선택은 비용의 일부가 내재적이 아니라 구조적임을 보여 줍니다. 더 어려운 질문은 그 추론이 애초에 존재해야 하는가입니다.

## 흔한 오해

**"시선 추적은 주의가 어디에 있는지 알려 준다."** 그것은 눈이 어디를 향하는지 알려 줍니다. 시선은 학습자가 다른 생각을 하는 동안 슬라이드에 머물 수 있고, 주의와 무관한 이유로 화면을 벗어날 수 있습니다. TutorLoop의 주의 측정은 학습과 r = 0.017로 상관했으며, 이는 관계가 거의 없음에 가깝습니다([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**"생리 신호는 심적 상태의 직접 판독값이다."** EDA는 교감 신경 각성을, 심박 변이도는 자율신경 회복을 지표화합니다. 어느 것도 스트레스와 노력과 흥분을 구분하지 못합니다. EDA, 움직임, 피부 온도로 시험 성적을 예측한 모형은 학생의 이해가 아니라 신체의 각성 서명을 학습한 것입니다([[physiological-signals-exam-outcomes-ml|Yamazaki and Rimal, 2026]]).

**"분류 정확도가 높으면 시스템이 그 상태를 탐지한다."** 정확도는 라벨, 분할, 기저율에 달려 있습니다. EEG 친숙도 예측은 타당화가 시행 경계를 존중했을 때 0.9853에서 0.6038 F1로 떨어졌습니다([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). 감독의 99.56%는 실제 시험이 아니라 맞춤 제작된 라벨링 시나리오 집합을 서술합니다([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]).

**"참여는 하나이므로 하나의 점수가 그것을 대표할 수 있다."** 그 구성개념에는 세 갈래가 있고, 센서는 대개 첫 번째에만 도달합니다. E3Sense는 학습자들이 참여를 인지적, 행동적, 정서적 지표로 서로 다른 비율로 정의했고, 그 정의가 예측을 바꾸었음을 발견했습니다([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). 단일 숫자는 어느 층위가 측정되었는지를 감춥니다.

**"검증 분할에서 공정하면 교실에서도 공정하다."** 성별 집단 사이의 검증 오류를 균등하게 만든 정규화기는 홀드아웃 격차를 더 나쁘게 만들었습니다([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). 공정성은 체크포인트가 아니라 배포의 속성입니다.

## 연결된 개념
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## 연결된 문서
- [[gaze-informed-ai-children]] — 시선으로 촉발된 LLM 내레이션이 아동을 내레이션 영역에 6.48초 대 1.67초 머물게 했지만, 이 연구는 이해가 아니라 주의를 측정했다(Wu et al., 2026)
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — 머리 착용 EEG, 시선 추적, 이마 EDA가 63.0% 기준선에 맞서 75.0%의 1수준 이내 정확도로 자기평정 참여를 예측했다(Anupkrishnan et al., 2026)
- [[engagement-assessment-video]] — EduGage는 일곱 개의 웨어러블 및 카메라 스트림을 구간 수준 참여 추정으로 융합하고(MAE 0.81) 더 가벼운 장비를 주장했다(Leng et al., 2026)
- [[student-attention-estimation-fairness-2026]] — 멀티모달 주의 모형이 MAE 0.283에 도달했고, 검증에서의 공정성 개선은 홀드아웃 피험자에서 뒤집혔다(Fragkiadakis et al., 2026)
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — 웨어러블 AI는 이중으로 투명하므로 물리적 배제가 실패하고 집행이 학생의 몸을 판정하는 쪽으로 표류한다(Corbin et al., 2026)
- [[eeg-familiarity-automated-assessment-2026]] — EEG 친숙도 예측을 위한 열다섯 모형이 시행 독립적 타당화에서 0.9853에서 0.6038 F1로 떨어졌다(Nanayakkara and Halloluwa, 2026)
- [[seeing-cognitive-representations-eeg-reconstruction]] — EEG로 재구성한 이미지가 시험 수행을 R² = 0.79로 추적했으며, 재구성이 뛰어난 한 참가자는 틀리게 답했다(Su et al., 2026)
- [[physiological-signals-exam-outcomes-ml]] — 랜덤 포레스트가 EDA, 움직임, 피부 온도로 시험 성적 범주를 예측했으며, 이 신호들은 이해가 아니라 각성을 지표화한다(Yamazaki and Rimal, 2026)
- [[affective-text-wearable-student-health]] — Oura를 착용한 458명 학생에서 관심 주제가 아니라 정서적 어조가 수면과 심박 변이도를 추적했다(2026)
- [[tutorloop-sensor-cognitive-feedback-2026]] — 웹캠 시선이 187명 학습자를 위한 강화학습 피드백을 이끌었고, 주의는 학습과 r = 0.017로 상관했으며 작업 부하는 부정적으로 상관했다(2026)
- [[arif-automated-online-proctoring-yolov11-2026]] — YOLOv11 자세 특징이 맞춤 제작된 라벨 집합에서 99.56%로 의심스러운 행동을 표시했으며, 부정행위나 공정성은 시험하지 않았다(Arif et al., 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — 외부 글쓰기 지원에 따라 EEG 연결성이 54명 참가자에 걸쳐 낮아졌으며, 의존을 누적된 인지 부채로 틀 짓는다(Kosmyna et al., 2025)
- [[kim-ai-embodied-learning-review-2026]] — 23편의 연구에 걸쳐 감지 역할이 태그의 62.5%로 우세했고, 검토된 어떤 시스템도 멀티모달 스트림을 실시간으로 융합하지 않았다(Kim and Han, 2026)
