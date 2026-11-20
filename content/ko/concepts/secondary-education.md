---
title: 중등 교육
created: "2026-11-15T00:10:00-05:00"
updated: "2026-11-15T06:35:09-05:00"
type: concept
pedagogy: [help-seeking, student-engagement, self-regulated-learning, metacognition]
technology: [generative-ai, intelligent-tutoring, llm]
level: [secondary, middle school, k 12]
confidence: medium
translation_of: concepts/secondary-education
source_updated: "2026-11-15T06:35:09-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [k-12, primary-education, undergraduate-education, intelligent-tutoring, academic-integrity, ai-detection, automated-assessment, assessment-validity, ai-literacy, help-seeking]
connected_articles: [one-click-away-khanmigo-two-year-school-experiment-2026, ai-tutoring-micro-rct-gcse-science-2026, leite-its-k12-meta-analysis-2025, ai-supported-instruction-stem-meta-analysis-2026, genai-learning-motivation-meta-analysis-2026, kreijkes-llm-note-taking-reading-comprehension-2026, jansen-argumentative-writing-feedback-receptivity-2026, chang-shared-epistemic-agency-gai-scientific-writing-2026, clerc-ai-literacy-workshop-llm-regulation-2026, cuenca-rodriguez-genai-use-caution-trajectories-2026, schaller-ai-text-detection-authentic-writing-2026, chan-rethinking-aigiarism-secondary-integrity-2026, ai-marking-accuracy-gcse-physics-2026, porcaro-ai-grading-benchmark-2026, wu-genai-scientific-literacy-china-2026, student-motivation-need-satisfaction-genai-sdt-2026, perez-montesdeoca-genai-secondary-systematic-review-2026, wu-genai-secondary-innovation-digital-literacy-2026, zhang-ai-learning-tools-tpb-high-school-2026, schicchi-high-school-genai-attitudes-scale-2026, torres-peralta-perceived-learning-engagement-homework-2026, cho-chatgpt-high-school-gpa-2025]
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **종합:** 중등 교육은 [[generative-ai|생성형 AI]] 사용이 일상적이고 측정된 [[learning-gains|학습 성과]]가 그에 대한 주장보다 작은 구간입니다. 일반 중학교에서의 2년 시험은 연간 약 0.06–0.08 SD를 만들었고, K-12 [[intelligent-tutoring|지능형 튜터링]] [[meta-analysis-systematic-review|메타분석]]은 약 g = 0.27이었습니다. 모델 능력이 아니라 [[student-engagement|참여]]와 [[help-seeking|도움 요청]]이 효과를 제한하기 때문입니다. 학생들은 인지적 일을 더 많이 해 주는 도구를 선호하고, [[ai-detection|탐지기]]는 에세이 전체는 구분하지만 문장은 구분하지 못합니다. 증거는 시험 복습에서 [[writing-education|쓰기]]와 저작자성, 채점, 탐지, 그리고 사용이 회의심을 앞지르는 중학교 시절까지 이어집니다.

## 생각해 볼 질문들

- 튜터가 클릭 한 번 거리에 있지만, 중앙값 학생은 실수가 포함된 세션의 17%에서만 도움을 요청했습니다. 여러분의 교실에서 건너뛰기보다 물어보는 것을 더 저렴하게 만드는 것은 무엇입니까?
- 학생들은 노트 필기보다 [[conversational-ai|챗봇]]을 선호했지만 그것에서 더 적게 배웠습니다. 시험이 그 덫을 적발하기 전에 여러분은 어떻게 그것을 잡아내겠습니까?
- 탐지기는 에세이 전체에서 F1 0.96, 문장에서 0.88에 도달하지만, 한 번 다시 쓰면 재현율의 3분의 1을 잃습니다. 어떤 진실성 정책이 그것을 견디겠습니까?
- 거의 모든 중등 시험은 단원 평가로 4~12주간 진행됩니다. 무엇이 1년짜리 학과 단위 도입을 정당화하겠습니까?
- 보고된 사용은 12에서 17로 늘어나지만 산출물에 대한 [[trust]]는 제자리입니다. 6~9학년 어디에서 검증을 가르치겠습니까?

## 들어가며

중등 교육은 대략 11~18세를 다룹니다. 중학교(middle school 또는 junior high) 다음에 고등학교가 오며, 이 환경의 세 가지 특징이 AI가 그곳에서 할 수 있는 일을 형성합니다. 출석은 의무이고, 교사는 일주일에 150명의 학생을 볼 수 있는 교과 전문가이며, 중요한 [[assessment|평가]]는 외부에 있습니다. GCSE, 국가 [[summative-assessment|시험]], 그리고 15세의 PISA입니다.

같은 학생들이 가장 빠르게 도입합니다. 스위스에서는 14~19세의 84%가 정기적인 생성형 AI 사용을 보고하며, 이는 어떤 성인 연령대보다 높은 비율입니다. 거의 보편적인 사용, 외부 시험, 여러 학급을 책임지는 한 명의 성인이, 문헌이 [[curriculum-design|교육과정]] 재설계보다 복습, 채점, 과제, 진실성에 집중하는 이유를 설명합니다.

## 연구가 측정하는 것

- **지능형 튜터링의 이득은 소박하고 거리가 멀어질수록 줄어듭니다.** 11개 시스템에 관한 미국 실험 18건은 g = 0.271로 통합되었고, 초등(0.266)과 중학교(0.256)에서 거의 동일했습니다. 농촌 학교가 포함되면 효과는 0.146으로 떨어졌고 6개월이 지나면 유의미하지 않은 0.110이 되었습니다. 연말 결과(0.155)는 즉각적 사후 검사(0.460)의 3분의 1이었습니다([[leite-its-k12-meta-analysis-2025|Leite 외, 2025]]).

- **STEM 검토는 더 약한 품질 통제 아래 더 큰 효과를 보고합니다.** 실험 및 준실험 연구 35건은 g = 0.670으로 통합되었고, 고등학교는 1.099, 중학교는 0.392였습니다. 저자들은 공식 평가 도구를 적용하지 않았고, 고정 효과 이질성은 I² = 82.98%에 달했습니다([[ai-supported-instruction-stem-meta-analysis-2026|Doğan 외, 2026]]).

- **[[motivation|동기]] 이득은 여기서 대학보다 작습니다.** 통제 연구 42건(효과 크기 56개, 학생 6,059명)에서 통합된 동기 효과는 g = 0.764였지만, 중등 연구는 평균 0.360으로 [[higher-ed|고등 교육]]의 0.886에 못 미쳤고, I² = 93.7%였습니다([[genai-learning-motivation-meta-analysis-2026|Fang 외, 2026]]).

- **전형적인 시험은 짧고 자체 제작 시험을 사용합니다.** 한 GCSE 과학 평가는 세 과목에 걸쳐 학생 929명을 무작위 배정하고, 사후 검사에서 644명을 유지했으며, 저자들이 잠정적이라 부르는 35점 만점 교육과정 정렬 시험에서 g = 0.33을 보고했습니다([[ai-tutoring-micro-rct-gcse-science-2026|Harrison 외, 2026]]).

## 튜터링, 복습, 그리고 참여의 문제

- **접근이 사용은 아닙니다.** 테네시 중학교 18곳에서 Khanmigo는 학생당 약 \$15로 수학 성취를 연간 0.06–0.08 SD 높였는데, 이는 AI 없는 같은 Khan Academy 연습의 이득과 비슷했습니다. 학생의 96%가 사용해 보았지만, 중앙값 학생은 실수가 포함된 세션의 17%에서만 메시지를 보냈습니다([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos와 Low, 2026]]).

- **교실에 있는 사람이 어려움의 경험을 바꿉니다.** 교육과정 수준 이상으로 학습하는 식스폼(sixth-form) 학생 149명에서, 스트레스는 개방 웹 검색자의 32.0%, 생성형 AI 튜터 사용자의 19.2%, 인간 튜터와 함께한 학생의 5.8%가 보고했습니다. 학습 결과는 측정되지 않았습니다([[ennion-human-tutoring-genai-tutoring-search-2026|Ennion과 McLellan, 2026]]).

- **정서 인식 지원은 겨냥한 [[anxiety-and-stress|불안]]을 높일 수 있습니다.** 같은 16주 실험실 순서를 운영하는 두 9학년 [[chemistry-education|화학]] 학급에서, 불안은 AI 정서 [[feedback]]과 함께 올랐고(F = 4.60, p = 0.035) 교사만 있을 때는 제자리였습니다. 학생들은 시스템의 진정 조언과 교사의 절차 중 어느 것이 지배하는지 알 수 없었습니다([[liu-chemistry-lab-emotional-feedback-2026|Liu, Li, Zhang, 2026]]).

## 쓰기, 읽기, 그리고 저작자성

- **학생들은 일을 대신 해 주는 활동을 선호합니다.** 영국 학교 7곳에서 10학년(Year 10) 학생 405명이 역사 지문 두 개를 읽고 3일 뒤 닫힌 책으로 시험을 봤습니다. 노트 필기는 유지에서 약 0.5 SD, 이해에서 0.4만큼 챗봇 사용을 이겼지만, 학생들은 챗봇을 더 쉽고 더 즐겁다고 평했습니다([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes 외, 2026]]).

- **피드백은 그것에 따라 행동할 성향이 있는 학생에게만 쓰기를 바꿉니다.** 중등 학생 1,507명 각각이 표준화된 메시지 하나와 수정 시간 10분을 받았습니다. 행동적 참여와 도구적 태도는 수행을 46백분위에서 54백분위로 옮겼지만, [[technology-acceptance-model|지각된 유용성]]은 아무것도 매개하지 않았습니다([[jansen-argumentative-writing-feedback-receptivity-2026|Jansen 외, 2026]]).

- **제약된 어시스턴트는 학생이 계속 사고하게 할 수 있습니다.** 이중언어 광합성 단원에서, 7학년 122명이 답을 주지 않도록 프롬프트된 어시스턴트와 6,788턴을 만들었습니다. 59%가 공유된 인식적 주도성에 도달했고, 감사된 1,049턴 중 어느 것에서도 직접 답을 주지 않았습니다. 상호작용의 약 20%는 텍스트 복사나 답 낚시와 관련되었습니다([[chang-shared-epistemic-agency-gai-scientific-writing-2026|Chang 외, 2026]]).

## 평가, 진실성, 그리고 시험 압박

- **채점 일치도는 높으면서도 편향될 수 있습니다.** 상용 [[llm]] 채점기는 71개 쟁점 문항에서 AQA GCSE [[physics-education|물리]] 점수와 이차 가중 κ = 0.885로 일치했지만, 평균 0.30점, 한 문항에서는 6점을 후하게 줬습니다([[ai-marking-accuracy-gcse-physics-2026|Bozdag와 Qiu, 2026]]).

- **카파 값은 채점자를 속일 수 있는지 보여 주지 않습니다.** 프롬프트된 22개 모델 중 14개는 답안에 메모가 실리면 척도의 5% 넘게 등급을 올렸고, 하나는 83.2% 올렸으며, 학생을 우수하다고 서술하면 66개 모델-과제 쌍 중 28개에서 점수가 올랐습니다([[porcaro-ai-grading-benchmark-2026|Porcaro, 2026]]).

- **탐지는 에세이를 찾을 뿐 문장은 찾지 못합니다.** 독일 15세 2,429명의 키스트로크와 클립보드 로그로, 분류기는 AI 텍스트와 인간 텍스트를 매크로 F1 0.96으로 구분했지만, 문장 수준 F1은 0.88로 떨어졌고 학생 문체로 한 번 다시 쓰자 AI 재현율은 0.92에서 0.60으로 하락했습니다([[schaller-ai-text-detection-authentic-writing-2026|Schaller 외, 2026]]).

- **학생들은 진실성을 조건부로 추론합니다.** 14~16세 홍콩 학생 133명에서, 수용 가능성은 AI 사용 자체가 아니라 사용 목적(62.4%), 학습에 미치는 영향(54.1%), 의도(51.9%)에 달려 있었습니다([[chan-rethinking-aigiarism-secondary-integrity-2026|Chan, 2026]]).

## 도입–증거 불일치와 평가 재설계

이 구간에서 사용은 거의 보편적입니다. 증거는 대부분 그것에 대한 서술입니다. [[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca 외(2026)]]는 33건을 종합했습니다. 26건은 기술이 어떻게 사용되었는지 서술한 반면 학생 변화를 검토한 것은 7건이었고, 원래의 교실 데이터를 수집한 것은 21건뿐이었습니다. 거의 모두 교사 주도이고 고립되어 진행되었는데, 이것이 84% 도입 수치가 감추는 패턴입니다. 학과가 재설계하는 것이 아니라 개별 교사가 실험하는 것입니다.

이 검토가 확립하는 것은 조건부입니다. 피드백이 가장 강한 응용이었고, 포함된 한 연구에서는 맞춤 어휘 피드백이 점수를 거의 두 배로 올린 반면, 완전 위임은 학습을 좁혔고 산출물을 비교하거나 거부하는 것은 학습을 깊게 했습니다. 정확도는 과목보다 과제 난이도를 추적했습니다. BingChat과 Bard는 기초 생물학 문항에서 92.11%에 도달했지만, 모든 도구가 고차 문항에서는 20% 미만이었고, 자동 채점은 인간 평가자와 50.8% 일치에 도달했습니다. 설문 연구는 사용량보다 깊이를 가리킵니다. [[wu-genai-secondary-innovation-digital-literacy-2026|Wu와 Zhang(2025)]]은 횡단면 설계에서 사용 깊이가 자기 평정 혁신 역량을 추적한 반면 빈도는 그렇지 않음을 발견했으며, 그 경로들은 상관을 다시 진술합니다.

도입은 의향을 따릅니다. 불안은 이후에 작용합니다. [[zhang-ai-learning-tools-tpb-high-school-2026|Zhang과 An(2026)]]은 [[anxiety-and-stress|AI 불안]]이 의향과 무관하지만(β = 0.056, p = 0.123) 세 행동 모두에는 부적이며, 산출물 적용에서 가장 강하다는 것을 발견했습니다(β = −0.247). 유용성이 선행하고 성인 기대가 역량보다 상위인 모형에서였습니다. 측정도 파일럿 수준입니다. [[schicchi-high-school-genai-attitudes-scale-2026|Schicchi와 Taibi(2026)]]는 학생 93명의 19문항 태도 척도에서 세 요인을 유지했으며, 확인적 모형은 없었습니다.

그래서 평가 질문은 완성된 산출물이 여전히 무엇을 보증하는가가 됩니다. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta 외(2026)]]는 지각된 학습이 산출물을 읽고, 수정하고, 덧붙이는 참여 지수와 거의 무관함을 발견했고(통합 상관 0.052), [[cho-chatgpt-high-school-gpa-2025|Cho(2025)]]는 쓰기 0.31, 수학 0.18의 GPA 연관을 검토했는데 대부분 사용자 대 비사용자 비교입니다. 프롬프트, 초안 응답, 수정을 수집하고, 페이지가 아니라 과정을 채점하십시오.

## 중학교와 초기 청소년기

- **사용은 회의심보다 먼저 굳어집니다.** 12~25세 학생 1,598명에서, 평균 사용은 12세에서 17세 사이 0~4 척도에서 1.24에서 1.77로 올랐고, 많이 사용하는 활동 수는 1.76에서 3.48로 늘었지만, 지각된 신뢰성은 변하지 않았습니다([[cuenca-rodriguez-genai-use-caution-trajectories-2026|Cuenca-Rodríguez 외, 2026]]).

- **2시간 워크숍은 자기보고가 놓치는 행동을 바꿉니다.** 8~9학년 프랑스 학생 116명에서, 참석한 학생은 불충분하게 명시된 프롬프트를 덜 수용했고(51.5% 대 66.7%), 약한 답 뒤에 후속 질문을 59.2%의 경우 했습니다(27.9% 대조). 그들의 AI 리터러시 자기보고는 어느 것도 예측하지 못했습니다([[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc 외, 2026]]).

- **사용 목적은 빈도보다 더 많은 것을 운반합니다.** 중국 네 지역 15세 12,191명에서, 빈도를 고정했을 때 학습 지향 사용으로의 이동은 PISA 5.8점 가치가 있었고, 요약과 초안 작성으로의 이동은 6.6점 비용이었습니다([[wu-genai-scientific-literacy-china-2026|Wu 외, 2026]]).

- **초기 청소년기의 동기 이득은 관계적 비용을 수반합니다.** 7~8학년 독일 학생 2,464명에서, 역량 기반 학습 안의 ChatGPT는 더 많은 자율성과 유능감 충족과 연관되었지만 관계성은 더 약했습니다([[student-motivation-need-satisfaction-genai-sdt-2026|Schweder 외, 2026]]).

## 연결

중등은 [[primary-education]]과 [[undergraduate-education]] 사이에 있으며, [[teacher-role|교사 역량]]과 [[equity-in-ai-education|형평성]]에 관한 [[k-12]]의 우려를 공유합니다. 구별되는 점은 외부 시험과 교과 전문가 교수의 결합으로, 이것이 AI를 복습, 채점, 과제 지원 쪽으로 밀어냅니다. 그래서 [[assessment-validity|타당도]]와 [[automated-assessment|자동 채점]]이, [[developmental-psychology|발달적합성]]이 지배하는 초등 시기보다 여기서 더 중심적입니다. 또 다른 구별되는 실마리는 [[self-regulated-learning]]입니다. 청소년은 그것을 사용할 판단을 갖추기 전에 도구를 갖게 되므로, [[metacognition]]과 [[cognitive-offloading|외주화]]가 이득이 나타나는지를 결정합니다.

## 실천을 위한 함의

**교사를 위한 지침**

- 튜터를 실수가 일어나는 곳에 두십시오. 17% 수치는 학생의 결손이 아니라 설계 문제입니다. 다음 문제 전에 질문이나 설명 하나를 요구하고, 로그인이 아니라 그 교환을 확인하십시오.
- 쓰기 도구를 동시에 제시하지 말고 순서대로 배치하십시오. 질문하고, 챗봇을 닫고, 그다음 쓰십시오. 둘이 동시에 열려 있을 때 학생의 4분의 1이 복사했습니다.
- 정서 인식 시스템이 여러분의 절차와 충돌할 때 누구의 조언이 지배하는지 수업 전에 결정하고, 학생에게 알리십시오.

**학교 지도자를 위한 지침**

- 실현된 사용으로부터 예산을 세우십시오. \$15 라이선스는 프로그램이 아닙니다. 효과는 일정 편성, 교사 [[prompt-engineering|프롬프트 작성]], 진행 모니터링에 달려 있습니다.
- 일반 교실 튜터링에는 연간 0.06–0.08 SD, 지능형 튜터링에는 약 0.27의 기대를 설정하십시오. 어느 쪽으로도 격차 해소를 약속하지 마십시오.
- 탐지기 산출물을 비행 판정에서 배제하십시오. 초안, 버전 기록, 또는 [[oral-assessment|구두 방어]]를 요구하십시오. 전체 텍스트 점수는 한 번의 다시 쓰기에도 움직이기 때문입니다.

**연구자를 위한 지침**

- 텍스트 수준뿐 아니라 문장 수준에서도 탐지를 보고하고, 일치도 통계 옆에 프로브 결과를 보고하십시오.
- 학생들이 도구를 무엇에 사용했는지 측정하십시오. 빈도만이 아닙니다. 목적은 같은 빈도에서 PISA 12점 격차를 갈랐습니다.
- 4주를 넘는 지속성을 연말 또는 외부 결과로 시험하십시오. 즉각적 사후 검사는 튜터링 효과를 대략 3배 과장합니다.

## 흔한 오해

- **"AI 튜터는 학생이 접근할 수 있으면 언제든지 가르친다."** 학생의 96%가 Khanmigo를 사용해 보았지만, 중앙값 학생은 실수가 발생한 세션의 17%에서만 도움을 요청했습니다. 가용성과 사용량은 다른 변수입니다.

- **"시험관과의 높은 일치는 채점자가 신뢰할 수 있음을 의미한다."** 22개 모델 중 14개가 답안의 메모로 척도의 5% 넘게 움직일 수 있었고, 학생에 관한 라벨은 66개 모델-과제 쌍 중 28개에서 점수를 올렸습니다.

- **"탐지는 AI가 어떤 문장을 썼는지 알려 줄 수 있다."** 문장 수준 F1은 0.88로 떨어졌고, 학생 문체로 한 번 다시 쓰자 재현율은 0.60으로 하락했으며, 복사한 재료 없이 챗봇 사용 뒤에 쓴 텍스트는 94.6%의 경우 인간이 쓴 것으로 읽혔습니다.

- **"비판적 [[ai-literacy|AI 리터러시]]는 대학까지 기다릴 수 있다."** 사용은 12세에서 17세까지 매년 늘지만 지각된 신뢰성은 제자리이며, 8~9학년의 2시간 워크숍은 이틀 뒤 프롬프트 작성과 후속 질문 행동을 바꿨습니다.
