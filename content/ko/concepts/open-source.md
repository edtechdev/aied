---
title: 오픈 소스
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
translation_of: concepts/open-source
source_updated: "2026-10-28T19:13:23-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **오픈 소스** — [[ai-education|AI 교육]]에서 공개적으로 라이선스된 *모델, 코드, 데이터, 콘텐츠*를 사용하는 것입니다. 공개성은 이 지식베이스가 벤더 종속(vendor lock-in)과 [[privacy|데이터 노출]]에 맞서는 주요 균형추입니다. 공개 가중치 모델은 캠퍼스 하드웨어에서 실행되어 FERPA, GDPR, EU AI Act 의무를 충족할 수 있고, 공개 라이선스 코퍼스는 출판사의 허가 없이 인덱싱하고 미세 조정할 수 있으며, 공개 벤치마크와 데이터셋의 공개는 [[research-methods-aied|연구]]를 재현 가능하게 만듭니다. 그 부담도 그만큼 실재합니다. 인프라와 [[pedagogical-safety|안전]] 보증, 보조금이 끝난 뒤에도 이어져야 하는 유지 보수, 그리고 공개성 그 자체가 보장하지 않는 품질이 그것입니다.

## 생각해 볼 질문들

- "오픈 소스"는 흔히 "공짜이고 쉽다"는 뜻으로 들립니다. 아래 네 층위 — 모델, 코드, 데이터, 콘텐츠 — 가운데 실제로 여러분의 기관에 도입 비용이 가장 많이 드는 것은 무엇이며, 왜 그렇습니까?
- 공개 가중치는 로컬 배포를 가능하게 하지만, 누군가는 여전히 그 시스템을 호스팅하고, 패치하고, 평가해야 합니다. 초기 프로젝트가 끝난 뒤 그 작업을 누가 맡아야 하며, 비용은 누가 부담해야 합니까?
- 이곳의 한 연구는 32B 공개 모델이 훨씬 더 큰 독점 시스템을 교수학 지식에서 앞선 것을 발견한 반면, 다른 연구는 테스트된 모든 공개 모델이 과학 시각화 리터러시에서 인간 기준선 아래에 있음을 발견했습니다. 여러분의 결정에 어떤 벤치마크가 옳은 것인지는 어떻게 판단하겠습니까?
- 학교가 자체 강좌 자료로 온프레미스 도우미를 실행할 수 있게 해 주는 것은 단 하나의 공개 라이선스 코퍼스입니다. 거기에 따르는 의무는 무엇입니까 — 원저자에 대한, 데이터가 인덱싱되는 학생들에 대한, 그리고 라이선스 자체에 대한 의무는?
- [[generative-ai|생성 AI]]가 한 시간도 안 되어 몇 달러로 강좌를 만들어 낼 수 있다면, 공개 교육 자원에 남는 정당성은 무엇입니까 — 비용, 라이선스 자유, 품질 보증, 아니면 다른 무언가입니까?
- 기관은 오픈 소스 도입을 조달의 결정, 인프라의 결정, 아니면 교수법의 결정으로 다루어야 합니까? 그것을 그중 하나로만 다룰 때 무엇이 무너집니까?

## 들어가며

느슨하게 말해, AI 교육에서 "공개"란 네 종류의 산출물이 검사, 재사용, 수정이 가능한 상태로 제공된다는 뜻입니다. 그것은 **모델 가중치**, **소스 코드**, **데이터와 평가 도구**, **교육 콘텐츠**입니다. 이 지식베이스의 글들은 이 층위들에 고르지 않게 흩어져 있고, 그 결과로 얻어지는 그림은 슬로건보다 더 유용합니다. 공개성은 특정한 것들을 사들입니다 — 로컬 통제, 감사 가능성, 재현 가능성, 법적 명확성 — 그리고 특정한 것들을 치릅니다 — 인프라, 전문성, 유지 보수, 그리고 벤더로부터 기관으로 이동하는 품질 보증의 부담입니다.

### 공개 모델과 공개 가중치

공개 가중치는 학생 데이터가 캠퍼스를 벗어날 수 없는 곳에서 가장 중요합니다. [[lata-ferpa-compliant-local-llm-autograder|LaTA]]는 교수자가 작성한 루브릭과 참고 풀이를 바탕으로, 제출물당 한계 비용이 제로인 고학년 [[stem-education|STEM]] 강좌용 FERPA 준수 로컬 [[llm]] 자동 채점 도구입니다. [[programming-its|SCRIPT]]는 빌레펠트 대학의 파이썬 [[intelligent-tutoring|튜터링 시스템]]으로, 의도적으로 **상용 LLM API를 피하고** 공개 가중치 Llama-70B 모델을 자체 호스팅하여 GDPR과 EU AI Act(AI의 일부 교육 활용을 고위험으로 분류함)를 충족합니다. 또한 튜터링 시스템과 IP 로그를 분리하고, 가명 사용자 이름을 사용하며, 명시적 동의가 있을 때만 키스트로크를 기록합니다. 저자들은 이 선택이 환경 영향 감소와 재현성 향상에도 기여했다고 평가합니다.

품질은 더 이상 공개성이 치러야 하는 자동적인 대가가 아닙니다. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]]은 공개 모델 패밀리에 [[reinforcement-learning|강화 학습]](DAPO)과 지도 미세 조정을 적용하여, 440개의 어려운 부정 예시를 채굴하고, 40,000개의 합성 응답을 생성해 난이도 순으로 정렬된 1,050개의 예시로 축소 선별하고, 교수학 벤치마크에서 **96.52%**에 도달했습니다. 이는 Gemini-3 Pro의 90.55%를 웃도는 수치이며 32B 밀집 파라미터에서 달성한 것입니다. [[aiawe-automated-writing-evaluation|AiAWE]]는 [[automated-essay-scoring|자동 서술 평가]]에서도 유사한 결론에 이릅니다. LoRA로 적응된 공개 가중치 Gemma-3-27B-it이 480개의 TOEFL 에세이에서 LLaMA-3.3-70B와 미세 조정된 GPT-3.5 기준선을 능가하고, 소비자용 서버에서 실행되며, LoRA 적응 하에서 파라미터 수가 하위 성능의 신뢰할 만한 예측 변수가 *아니라*는 놀라운 부수적 발견을 함께 보여줍니다. 반증에도 동등한 지면을 할애할 만합니다. [[mllm-scientific-visualization-literacy|여섯 개 MLLM에 대한 벤치마크]](폐쇄형 셋, 공개형 셋)는 모든 공개 소스 모델이 과학 [[visualization]] 리터러시에서 인간 기준선 아래에 있는 반면 Gemini는 여러 부분 집합에서 인간 평균을 웃돌았음을 발견했습니다. 공개성이 천장을 높이는 것은 통제력이지 능력이 아닙니다.

OmniEdu는 가중치만이 아니라 전체 파이프라인을 공개합니다. 69,999개 예시의 혼합물에 대한 능력 균형 감독은 공개 4B/9B/27B K–12 패밀리의 모든 규모를 끌어올렸습니다. 조정된 4B 모델은 기본 모델 대비 MathTutorBench 스캐폴드 승률에서 55포인트를 얻었으며, 지식 상태 진단은 54.04%로 가장 약한 능력으로 남았습니다([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### 공개 도구, 튜터, 연구 인프라

공개 코드에 대한 가장 분명한 논거는 재현입니다. [[oatutor-open-source-adaptive-tutor-2023|OATutor]]는 ITS 원리에 기반해 구축된 최초의 완전 공개 적응형 튜터링 시스템으로, **MIT 라이선스 코드베이스**와 OpenStax 대수 교과서에서 나온 **크리에이티브 커먼즈(CC BY) 콘텐츠 라이브러리**를 짝지으며, 여기에 [[knowledge-tracing|지식 추적]], A/B 테스트, LTI 지원을 더합니다. 이 시스템의 명시적 설계 목표는 연구자가 실험을 실행한 뒤 전체 엔드투엔드 프레임워크, 콘텐츠, 플랫폼을 저장소 링크 하나로 공개할 수 있게 하는 것입니다. [[stanbkt-bayesian-knowledge-tracing|StanBKT]]는 방법론 층위에서 같은 논증을 합니다. 기댓값 최대화 점추정을 완전한 베이즈 추론(HMC, 변분 추론, Pathfinder, 최적화)으로 대체하여, 적응형 개입의 A/B 비교가 의존하는 불확실성을 노출하는 공개 파이썬 패키지를 제공합니다. [[deeptutor]]는 트레이스 포레스트 학습자 기억을 지닌 완전한 [[agentic-ai|에이전트]] 튜터링 프레임워크를 공개합니다. Apache 2.0이며, 2026년 말에는 논문이 벤치마킹한 파이프라인만이 아니라 완전한 학습 작업 공간이 되었습니다. 그리고 [[mooc-to-maic|MAIC]]의 교실 생성기 OpenMAIC은 그것을 평가하는 연구와 함께 MIT로 제공되어, 강좌를 읽기만 하는 것이 아니라 생성하고 자체 호스팅하며 검사할 수 있게 합니다. [[vismatic-secure-sandbox-cs-education|VISMATIC]]는 과정 중심 모니터링을 위한 컨테이너 샌드박스를 공개하여, 다른 기관이 벤더의 버전이 아니라 그 무결성 모델을 도입할 수 있게 합니다. 공개 코드는 투명성의 부담도 함께 짊어집니다. [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]의 정서 인지 튜터링 프롬프트를 위한 스크립트는 검사와 추가 [[llm-training-and-fine-tuning|교수학적 훈련]] 작업을 위해 공개되어 있습니다. 공개 인프라는 교육 에이전트가 무엇을 해야 하는지의 기준점을 제시합니다. 이 지식베이스의 [[agentic-ai-education-scoping-review|474개 에이전트 AI 연구에 관한 스코핑 리뷰]]는 빠르게 성장하는 공개 소스 에이전트 프로젝트를 "최전선 에이전트 패러다임" 벤치마크로 삼고, 교육 시스템이 여전히 거버넌스가 갖춰진 도구 오케스트레이션, 지속적 기억, 장기 지평 계획, 감사 가능한 행동을 갖추지 못했음을 발견합니다.

### 공개 벤치마크, 데이터셋, 방법론 투명성

이곳의 여러 기여는 시스템이 아니라 공개 *평가 인프라*입니다. [[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark]](CDPK + SEND, 실제 칠레 교사 시험 문항으로 구축)는 97개 모델에 걸칩니다. 공개 가중치 DeepSeek R1은 대부분 폐쇄형 추론 모델로 구성된 상위 10개를 상대로 86.65%에 도달했고, 비용–정확도 프런티어는 2024년 4월에서 2025년 6월 사이에 입력 토큰 100만 개당 \\$0.10에서 약 50%에서 약 82%로 이동했습니다. 공개 Qwen-3 8B는 3.5센트로 2024년 4월 최고 폐쇄형 모델과 거의 맞먹으면서 비용은 400배 이상 낮았습니다. 성능은 대략 8B 파라미터 아래로 급격히 떨어지는데, 이는 캠퍼스 배포에 실용적인 규모 제약입니다. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]]는 사회적으로 지능적인 다중 에이전트 튜터링의 트레이스 기반 평가를 위한 데이터셋, 스키마, 프로토타입을 공개합니다(참가자 540명, 세션 360회, 과제 에피소드 1,440건). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]]는 공개 데이터의 문화적 논거를 보여줍니다. 7개 언어, 41개의 교수학 기법에 걸친 24,795개의 지시–응답 쌍을 베다 및 고전 자료에서 끌어와 CBSE [[curriculum-design|교육과정]]에 정렬했고, 이것이 작은 7B 모델이 훨씬 더 큰 범용 참조 모델(판정자 점수 중앙값 6.39 대 6.54)에 배포 비용의 일부만으로 접근할 수 있게 했습니다. 학생이 저술한 [[benchmark|벤치마크]]도 공개성으로 가는 또 다른 길입니다. [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]]는 학생이 제출한 230개 후보에서 80개의 장기 지평 학술 과제를 선별합니다(25개 이상의 전문 영역에 걸치고, 16개는 CUDA GPU를 요구하며, 격리된 Docker 샌드박스에서 실행됩니다). 그리고 공개 에이전트 생태계를 학술 수준의 평가로 확장합니다. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]]는 공개성이 [[sustainability|환경]]적 의무이기도 하다고 주장합니다. AIED 2025의 모든 논문을 검토한 그들은 "공개 없는 LLM 도입" 패턴을 발견하고, 파라미터 수를 모를 때도 계산 비용을 추정하는 공식과 소프트웨어 도구로 이루어진 공개 소스 측정 방법론으로 대응했습니다.

### 공개 콘텐츠와 공개 코드가 만나는 곳

공개 교육 자원에는 [[open-education]]이라는 자체 페이지가 있습니다. 그곳의 논증이 인프라적이라기보다 교수법적이고 라이선스에 이끌리기 때문입니다. 이 페이지에 속하는 것은 두 공개성이 만나는 이음매이며, 그것은 보이는 것보다 좁습니다.

그 이음매는 라이선스 호환성 제약입니다. [[oatutor-open-source-adaptive-tutor-2023|OATutor]]는 MIT 라이선스 코드베이스를 OpenStax 대수 교과서의 CC BY 콘텐츠 라이브러리와 짝짓습니다. 따라서 코드의 조건과 콘텐츠의 조건은 설계 단계에서부터 호환되게 유지되어야 하며, 한쪽의 허용적 라이선스가 다른 쪽을 제공하지는 않습니다. 이 이음매는 공개 라이선스 코퍼스가 온프레미스 시스템을 합법적으로 운영하게 만드는 경우에도 나타납니다. [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen 등(2026)]]은 82개의 OER 문서를 12GB 소비자용 GPU에서 지식베이스 도우미로 인덱싱하며, 그 전체 이야기는 교과서에 관한 논증이 아니라 양자화, 환각, 출처에 관한 오픈 소스 이야기입니다.

이 페이지가 하지 않는 일은 그 자원을 옹호하는 것입니다. 기계가 쓴 교과서가 기본적으로 공개인지, 라이선스가 생성된 리믹스를 견디는지, 공개 교수법이 측정 가능한 무엇인가를 가르치는지는 [[open-education]]의 질문이며, 이 분야의 현행 문헌이 실제로 다루는 질문입니다.

### 이익과 부담

- **이익.** 로컬 호스팅을 통한 데이터 주권과 규제 준수([[privacy]], [[regulation]]). 로컬 추론은 쿼리당 비용이 없고 공개 모델이 가격의 일부로 독점 품질에 접근하기 때문에 가능한 비용 통제([[singh-eduqwen-pedagogical-rl-2026]]). 프레임워크, 프롬프트, 콘텐츠, 데이터가 논문과 함께 배포될 수 있기 때문에 가능한 재현성([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]). [[governance|기관 거버넌스]] 아래의 감사 가능성과 안전 검토. 그리고 특정 [[pedagogy]]나 특정 공동체의 지식베이스를 위한 미세 조정 능력([[iks-instruct-dataset-indian-knowledge]]).
- **부담.** 로컬 호스팅은 많은 기관이 갖추지 못한 하드웨어와 전문성을 요구합니다. 품질과 [[pedagogical-safety|안전]]은 기본적으로 보장되지 않습니다. 공개 모델은 특정 리터러시에서 인간 기준선에 뒤처질 수 있고([[mllm-scientific-visualization-literacy]]), 양자화는 완화되지 않으면 환각률을 높입니다([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). 누군가는 공개 이후에도 시스템을 유지해야 합니다([[programming-its]]는 소규모 박사과정 학생 팀, 진행 중인 보안 노출, 상당한 규제 준수 부담을 기록합니다). 그리고 공개 라이선스는 작동하는 제품이 아니라 허가입니다. 공개된 시스템을 사용 가능한 상태로 유지하는 유지 보수는 그것을 만든 [[educational-technology-developers]] 중 누구에게로 떨어지며, 그들의 자금과 동기가 보조금이 끝날 때 기관이 물려받는 것이 포크 가능한 저장소인지, 유지되는 제품인지, 둘 다 아닌지를 결정합니다.

### 공개성을 실천에 옮기기

- **교수자와 기관을 위해:** 시스템을 도입하기 전에 코드뿐 아니라 *콘텐츠*의 라이선스도 확인하십시오. CC BY 교과서 위의 MIT 코드는 재사용 가능하지만, 허용적 라이선스가 튜터링 경로, 문항 은행, 번역이 존재한다고 보장하지는 않습니다. 학생 데이터가 법적으로 캠퍼스를 벗어날 수 없을 때는 공개 모델을 우선하되([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), 일반 리더보드를 믿지 말고 *여러분의* 과제에 모델을 벤치마킹하십시오([[cdpk-pedagogy-benchmark-llms]]). 파일럿 이후 시스템을 운영하고 평가할 사람의 예산을 확보하십시오.
- **개발자와 연구자를 위해:** 전체를 공개하십시오. OATutor의 엔드투엔드 공개(코드, 콘텐츠, 실험 장치)는 이 문헌이 계속 보상하는 재현성의 기준입니다. 가중치와 함께 프롬프트와 추출 스키마도 공개하십시오([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). 계산량과 탄소를 보고하십시오([[aied-carbon-footprint-reporting]]). 도우미를 공개 라이선스 코퍼스에 접지하여 출처를 검증 가능하고 적응을 합법적으로 만드십시오([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). 정확도와 에너지가 모두 중요하다면 단순 양자화 대신 양자화 인지 미세 조정을 사용하고, 코드와 콘텐츠의 라이선스를 호환되게 유지하십시오.

## 흔한 오해

**"공개 가중치, 오픈 소스, 공개 콘텐츠, 공개 교수법은 같은 공개성이다."** 그것들은 네 가지 다른 것이며 각각 독립적으로 실패합니다. 자원과 실천에 관한 논증은 [[open-education]]에 있고, 이 페이지는 구축자가 공개하고 라이선스하는 산출물을 다룹니다. 공개 *가중치*는 로컬 배포를 허용하고, 공개 *소스*는 수정을 허용하며, 공개 *콘텐츠*는 재사용과 적응을 허용하고, 공개 *교수법*은 무엇을 가르칠지 누가 결정하는가에 관한 것입니다. 공개 가중치와 독점 훈련 파이프라인을 지니고, 폐쇄형 인터페이스와 모든 권리 유보 콘텐츠 라이브러리를 지닌 도구로 포장된 모형은 네 감각 중 하나에서 "공개"이고 셋에서 폐쇄입니다.

그 단어 자체는 상류에서 논쟁 중입니다. [[deimann-rethinking-openness-ai-2026|Deimann과 Lukács(2026)]]는 공개성 논쟁이 오픈 소스 공동체를 통해 AI에 도달했으며 최초의 Open Source AI Definition이 2024년에 발표되었다고 관찰하고, 그곳에서 공개성이 속성이라기보다 상상계로 기능한다고 논합니다. 제도가 언어로 채택하지만 주변 체제는 그대로인 열망이라는 것입니다. 라이선스는 속성이고 운동은 아니기 때문에 이것은 이 페이지에 유용한 점검입니다.

**"공개는 더 싸다는 뜻이다."** 공개 가중치는 로컬 배포를 가능하게 하지만 **누군가는 여전히 시스템을 호스팅하고 패치하고 평가해야 하며**, 그 누군가는 그 일에 자금을 댄 보조금보다 오래 살아남아야 합니다. 이 문헌이 지목하는 부담은 구체적입니다. 인프라, [[pedagogical-safety|안전]] 보증, 유지 보수입니다. 총비용은 라이선스 비용을 넘을 수 있고, 공개성을 절약으로 다루는 기관은 프로젝트 인력이 흩어진 뒤에 유지 보수 의무를 자주 발견합니다.

**"폐쇄형 최전선 모형이 그냥 더 좋으므로 공개 대안은 대체재다."** 그 격차는 그 가정이 시사하는 것보다 좁습니다. 97개 모델에 걸친 [[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark]](CDPK + SEND, 실제 칠레 교사 시험 문항으로 구축)에서 공개 가중치 **DeepSeek R1은 86.65%에 도달**했고, 상위 10개는 대부분 폐쇄형 추론 모델이었습니다. 비용-정확도 비교는 공개의 방향으로 더 나아갑니다. 따라서 공개성에 남은 논거는 능력의 희생이 아니라 통제와 감사 가능성에 관한 것입니다.

**"가중치를 공개하는 것이 작업을 공개하는 것이다."** 더 강한 공개 기여는 파이프라인을 공개합니다. OmniEdu는 최종 가중치만이 아니라 69,999개 예시 혼합물에 대한 능력 균형 감독을 공개하여 공개 4B/9B/27B K–12 패밀리의 모든 규모를 끌어올렸고, 조정된 4B 모델은 MathTutorBench 스캐폴딩 성능에서 **55포인트**를 얻었습니다. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]]도 440개의 채굴된 어려운 부정 예시와 40,000개의 생성된 응답을 포함한 RL 및 미세 조정 절차를 문서화합니다. 레시피 없는 가중치는 방법을 재현하지 않고 결과만 재현합니다.

## 연결된 개념

- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]
- [[open-education]]

## 연결된 문서

- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — 소비자용 하드웨어에서의 온프레미스 OER AI 지식베이스 도우미 (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — CC BY OpenStax 콘텐츠 라이브러리를 지닌 MIT 라이선스 적응형 튜터 (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — 훨씬 더 큰 독점 시스템을 능가하는 공개 32B 교수학 모델 (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — 즉시 도입 가능한 FERPA 준수 로컬 LLM 자동 채점 도구
- [[programming-its]] — 파이썬 ITS에서 GDPR/EU AI Act 준수를 위한 자체 호스팅 공개 가중치 LLM
- [[aiawe-automated-writing-evaluation]] — 자동 서술 평가를 위한 LoRA 적응 공개 가중치 모델
- [[stanbkt-bayesian-knowledge-tracing]] — 완전한 베이즈 지식 추적을 위한 공개 파이썬 패키지
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — 학습자 기억을 지닌 완전 공개 소스 에이전트 튜터링 프레임워크
- [[vismatic-secure-sandbox-cs-education]] — 과정 중심 평가를 위한 공개 컨테이너 샌드박스
- [[kar-mathbuddy-affective-math-tutoring-2025]] — 공개 코드베이스를 지닌 정서 수학 튜터
- [[cdpk-pedagogy-benchmark-llms]] — 97개 모델에 걸친 공개 교수학 벤치마크와 비용–정확도 프런티어
- [[astra-multi-agent-tutoring-benchmark-2026]] — 트레이스 기반 다중 에이전트 튜터링 평가를 위한 공개 데이터셋과 프로토타입
- [[mllm-scientific-visualization-literacy]] — 시각화 리터러시에서 인간 기준선 아래인 공개 모델
- [[iks-instruct-dataset-indian-knowledge]] — 문화적으로 접지된 지시를 위한 공개 다국어 데이터셋
- [[aied-carbon-footprint-reporting]] — LLM 환경 비용 보고를 위한 공개 소스 방법
- [[egai-power-systems-education]] — 공학 AI를 위한 공개 실행형 모듈 라이브러리
- [[mooc-to-maic]] — LLM 기반 강좌 생성과 강좌 생산 경제의 변화
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: 학습과 교수를 위한 공개 파운데이션 모델
