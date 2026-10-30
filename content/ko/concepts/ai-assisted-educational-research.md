---
title: AI 지원 교육 연구
created: "2026-10-05T10:45:00-04:00"
updated: "2026-10-30T04:56:45-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-10-26T11:15:00-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent


---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **종합:** AI 지원 교육 연구는 이 분야 자신의 학술 작업의 도구로서의 AI 사용입니다 — 문헌을 검색하고 검색하며, 검토를 위해 기록을 선별하고, 질적 데이터를 코딩하고, 데이터를 분석하고, 원고를 작성하고 편집하며, 그리고 그 도구들이 생산된 지식에 무엇을 하는지를 묻는 성찰. 이것은 교육에서의 AI에 *관한* 연구와 구별됩니다: AI가 학습자를 돕는지를 연구하는 데 쓰이는 설계는 [[research-methods-aied]]에 속하고, AI 시스템의 평가는 [[ai-ed-evaluation]]에 속하며, 단일 AIED 연구의 독해는 [[interpreting-and-applying-aied-research]]에 속합니다. 이 페이지는 연구자 자신의 워크플로와 실천자-연구자의 탐구 — 교수 학습의 학문과 교실 연구 — 그리고 자동화가 둘 중 어느 하나에 들어설 때의 인식론적 이해관계를 다룹니다. 그것의 증거는 얇고 최근입니다: 프레임워크 제안 하나, 한 검토 팀의 성찰적 설명, 작은 포커스 그룹 연구 하나, 서지계량 연구 두 개, 워크숍 보고서, 단일 조사자 사례 연구들. 이것은 확립된 실행이 아니라 나아갈 방향을 묘사하며, 실천자-연구 줄기는 그중에서도 가장 얇습니다.

## 생각해 볼 질문들

- 여기서 연구자는 누구입니까: 지원받는 학술인, 대학원생, 자신의 교실을 연구하는 강사? 증거가 실제로 묘사하는 것은 그중 어느 것입니까?
- AI 스크리너가 당신의 검토에서 한 연구를 제외했습니다. 그 결정에 대한 책임은 누구에게 있습니까 — 공급업체, 도구, 프로토콜, 아니면 당신에게?
- 모형이 당신이 읽지 않은 출처를 요약할 때, 학술 작업의 어떤 부분을 그만하는 것입니까?
- 시뮬레이션된 학습자가 많은 프로필에 걸쳐 튜터를 검사할 수 있습니다. 실제 학생들에 대한 그 판단을 믿기 전에 무엇을 확인하겠습니까?
- 실천자 탐구는 통상 지역적이고 작습니다. 그것의 증거가 지원받는 시험의 기준을 충족해야 합니까, 아니면 설정이 요점이기 때문에 다르게 가중되어야 합니까?
- AI가 한 논문의 작성을 도왔다면, 독자들에게 무엇이 말해져야 하며, 그 공개는 어디에 있어야 합니까?

## 들어가며

AI 지원 교육 연구는 이 분야가 AI 도구를 자신의 작업에 돌리는 것입니다. 연구 대상은 AI 튜터를 사용하는 학습자가 아니라 모형을 사용해 검색하고, 선별하고, 추출하고, 코딩하고, 분석하거나 쓰는 연구자입니다. 바뀌는 것은 연구자의 워크플로이며, 더 조용하게는 그것의 산출물이 증거로 여겨지는 기준입니다.

이 페이지는 의도적으로 교육에서의 AI에 관한 연구가 아닙니다. AI 튜터가 학습을 향상하는지에 관한 질문은 [[research-methods-aied]]가, AI 시스템의 평가는 [[ai-ed-evaluation]]이, 단일 연구의 신중한 독해는 [[interpreting-and-applying-aied-research]]와 [[limitations-in-aied-research]]가 다룹니다. 두 문헌은 흔히 혼동되며, 두 번째의 도구화 주장이 첫 번째를 뒷받침하는 데 자주 빌려집니다.

범위는 문헌 검색에서 선별, 코딩, 분석, 글쓰기를 거치며, 자동화가 한 분야가 생산하는 지식에 무엇을 하는지를 묻는 인식론적 성찰을 포함합니다. 이것은 또한 실천자 연구를 포함합니다: 한 교사가 자신의 실행을 연구하는 교수 학습의 학문과 교실 탐구. 그 줄기는 이 페이지에서 가장 약한 부분이며, 아래 절들은 그것을 매끄럽게 덮기보다 그렇다고 말합니다.

## AI가 연구 워크플로에 들어가는 방식

사용에 대한 설명들은 효과의 증거보다 더 일관됩니다. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai and Chan(2026)]]는 한 기관에서 일곱 포커스 그룹에 속한 대학원 연구 학생 28명을 면담하고, 28명 중 27명이 자신의 연구 어딘가에서 생성 AI를 사용함을 발견했습니다: 발상, 문헌 검토, 설명, 데이터 처리, 프로그래밍, 학술 글쓰기, 편집, 번역.

그들의 참가자들은 의심하기보다는 보정되어 있었습니다. 그들은 지각된 이해관계와 지적 요구에 따라 도구를 과제에 맞추었고, 이해관계가 낮은 절차적 작업에서 AI를 더 많이 사용했으며, 학술적 기여가 중심인 곳에서는 신중하게 남았습니다. 그들은 또한 전 과정에 인간 감독을 유지하며, 모형을 "오해를 줄" 수 있고 "완전히 틀릴" 수 있는 보조자로 다루었습니다.

정책에 관한 발견이 실용적인 것입니다. 기존의 기관 지침은 교수, 학습, 평가를 다루었고, 참가자들은 그것을 추상적이며 연구 실행과 불일치한다고 경험했습니다. 저자들은 규칙서가 아닌 발달적 비계로서 4차원 AI 리터러시 프레임워크 위에 세워진 연구자 지향 지침을 제안합니다.

이 연구는 단일 기관, 자원한 28명 집단, 자가 보고 설명을 포괄하며, 학생들은 무결성 이유로 사용을 과소 보고했을 수 있습니다. 이것은 능력 있는 집단이 이 도구들을 어떻게 사용하는지를 묘사할 뿐, 그 사용이 무엇을 생산하는지는 아닙니다.

## 문헌 검색과 검색

한 워크숍 보고서는 의제를 측정하는 것이 아니라 지도를 만듭니다. 생성 AI와 학술 검색에 관한 CHIIR 2026 워크숍은 인간 정보 상호작용과 검색의 연구자들을 모았고, 그 보고서는 문서 검색을 위해 세워진 시스템들이 이제 요약하고, 추천하고, 종합하고, 대화하고 있음을 서술하며 — 시스템이 출처를 찾는 동안 해석은 사용자에게 남는다는 가정을 불안하게 만듭니다.

한 번개 발표는 모형들이 학자들을 어떻게 재구성하는지를 검사했습니다. 10개 학문과 8개 세계 지역에 걸친 1,596명의 시드 저자에 대한 OpenAlex와 Google Scholar의 실측 자료에 대해, 많이 인용된 연구자들은 인용이 적은 동료들에 비해 약 두 배의 비율로 재구성되었으며, DeepSeek R1, Llama 4 Scout, Mixtral 8×7B를 검사했습니다.

한 사서가 "신뢰 간극"을 보고했습니다: 학생들은 흔히 생성 검색을 과신하는 반면 교수진은 그것을 불신했고, 단일 세션 워크숍은 지속 가능한 리터러시에 불충분하다고 판단되었습니다. 참가자들이 가장 자주 되돌아온 설계 실타리는 "마찰"이었습니다 — 학습이 나오는 비판적이고 때로 불편한 작업에 사용자를 계속 관여시키는 것.

이 보고서는 단일하고 자원한 행사를 포괄하며 주로 의견, 설계 원리, 연구 질문을 기록합니다. 그것의 수치들은 개별 발표들에 속하며 워크숍에 속하지 않으며, 그 안의 어떤 것도 AI 학술 검색이 학습을 향상하거나 해친다는 것을 보여 주지 않습니다.

## 선별과 체계적 검토 자동화

체계적 검토는 자동화가 가장 멀리 나아간 곳이며, 그 한계가 드러나는 곳입니다. [[scaffolding-systematic-reviews-2026|Wang 외(2026)]]는 한 학제 간 팀의 검토를 성찰하고, 자동화가 주로 초록 선별에서 절차적 부담을 줄였다고 보고합니다 — ASReview, SWIFT-Review, Covidence, AIScreenR, MetaMate 같은 도구들이 — 한편 데이터 추출, 조정, 종합은 인간 검토자들에게 남았습니다. 멘토링과 동료 토론은 예의가 아니라 방법론적 인프라로 기능했습니다.

그들의 결론은 인계가 아니라 분업입니다: 절차적 부담에 자동화를 배정하고, 모든 산출물을 검증하며, 해석적 결정은 인간에게 남겨 두라는 것. 이 설명은 비교 조건이 없는 한 팀의 성찰이므로, 그 전략들은 검사된 것이 아니라 묘사된 것입니다.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta and Lin(2026)]]는 14,726개의 주석 항목을 담은 검토 자동화 논문 888편에 걸친 보고 문제를 정량화합니다. 2023년 이래로, 소프트웨어 및 제품 논문의 38.0%는 평가를 전혀 보고하지 않았으며, LLM 논문에서는 9.3%였습니다. 그 간극은 층화를 살아남습니다: 선별과 선택에서, 소프트웨어 논문은 평균 3.2개의 실질적 평가 항목에 39.3%가 없음을 보고한 반면, LLM 논문은 평균 7.3개 항목에 3.8%의 무평가율을 보였습니다.

유리한 평가가 위임에의 적합성을 함의하지는 않았습니다. 긍정 전용 평가를 가진 LLM 논문 118편 중 52%는 워크플로가 그것의 역할에 요구되는 기준에 미치지 못한다는 적어도 하나의 우려를 여전히 보고했습니다. 모형 접근은 압도적으로 독점적이었습니다: LLM 사용의 84.1%가 독점적이거나 호스팅된 시스템에 의존했고, 11.0%는 혼합이었으며, 오직 4.9%만이 개방 가중치였습니다.

이런 양상들로부터 저자들은 PRISMA-LLM을 도출하는데, 이는 위험 계층이 아니라 공개 계층인 다섯 구현 수준의 3계층 프레임워크입니다. 이것은 검사를 위해 제공된 제안이며, PRISMA 이사회가 공인한 공식 확장이 아닙니다. 논문 수준의 침묵이 검증이 없다는 증거는 아니라고 그들은 경고합니다 — 그것은 제품 보고서, 프로토콜, 또는 저장소에 살아 있을 수 있습니다.

## 질적 코딩과 분석

질적 분석은 해석이 산출물인 단계이며, 이것은 위임을 정당화하기 더 어렵게 만듭니다. [[qualitative-research|질적 연구]] 페이지는 인간–모형 정합이 코딩 품질과 같지 않으며 오류가 시간적 분석을 통해 연쇄할 수 있다고 보여 주는 연구들을 포함해 AI 지원 코딩에 관한 코퍼스 증거를 모읍니다. 그 문헌은 모형을 인간 판단에 대해 검증을 요구하는 산출물을 내는 확장 보조 도구로 다룹니다.

[[ai-methodologies-science-education-research-2026|Martin 외(2026)]]는 역할 전환을 직접 묘사합니다. 자동 코딩 모형이 적용됨에 따라, 연구자는 학생 데이터를 코딩하는 것에서 모형의 산출물을 검증하는 것으로 이동합니다; 비지도 모형이 추론을 군집화할 때, 알고리즘이 초기 탐색 분석을 수행합니다. 연구자들은 그들이 주장하듯 질적, 양적, 이론적 전문 지식과 함께 데이터 과학 기술을 점점 더 필요로 합니다.

그들의 프레임워크는 또한 여기서 중요한 점검을 제공합니다: 설명 가능한 AI는 자동 코딩이 의미론적 이해를 따르는지 아니면 단어 키워드만을 따르는지를 드러낼 수 있습니다. 인간 꼬리표와 정합하는 코딩 파이프라인도 여전히 잘못된 것을 읽고 있을 수 있습니다.

## 데이터 분석과 인식론적 이해관계

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen and Graulich(2026)]]는 이 분야의 지식 생산 자체를 압박하며, 그들의 논문은 이 페이지의 척추입니다. 서로 위에 세워져 인식론적 목표를 향해 나아가는 연속적인 지식의 단계라는 Hasok Chang(2004)의 인식론적 반복 설명에 기초하여, 그들은 온도계의 대략 150년 발전과 평행을 이끌어 내고 이 분야가 이제 비슷한 반복 안에 있을 수 있다고 주장합니다.

그들의 중심 우려는 기술적이 아니라 인식론적입니다. Chang의 노믹-측정 문제는 어떤 양을 측정하는 것이 그것을 관찰 가능한 것에 관계짓는 법칙을 요구하면서도, 그 법칙이 이미 그 양을 알지 않고서는 경험적으로 검사될 수 없다고 합니다. 연구자가 아닌 훈련 데이터와 최적화로부터 나타나는 AI 유래 측정 함수는, 정밀하고 예측적으로 보이면서도 불투명하게 남을 수 있기 때문에 이것을 해결하기보다 강화할 수 있습니다.

이 프레임워크는 7개의 단계를 가집니다: 문제 틀 짓기; 기기화와 측정; 실험과 증거 기반 추론; 비교와 복제; 규범과 합의 형성; 실행과 그것의 결과; 그리고 지속적 정련. 저자들은 이것들이 반복하고, 겹치고, 또는 결여될 수 있는 분석적 차원으로 제시하며, 검증된 순서로 제시하지 않습니다.

비교 가능성은 가장 날카로운 형평성 모서리를 가진 단계입니다. Regnault의 원리는 기기가 같은 조건 아래 같은 판독을 주어야 하고, 한 유형의 기기들이 서로 합치해야 한다고 요구합니다 — 그러나 비교 가능성은 학생 집단 전반으로 확장되어야 하며, 기계 학습은 학생들이 더 약한 것을 표현하는 다양한 방식보다 정전형 아이디어를 더 잘 코딩하는 경향이 있습니다.

그들은 또한 책임 문제를 이름 붙입니다. 연구자들은 훈련 데이터, 미세 조정, 목표를 알지 못할 수 있는 사전 훈련된 모형들을 사용하여, 인식론적 의존의 계층을 더합니다; 이런 체계들이 사회기술 네트워크로부터 나타나기 때문에, 책임은 할당하기 어려워집니다 — "많은 손의 문제".

필요한 정직은 이 논문이 데이터를 보고하지 않고 학습 효과를 확립하지 않는다는 것입니다. 그것은 AI 방법론이 연구를 향상하거나 더 타당한 결론을 낳는다는 것을 보여 주지 않습니다; 그 비교는 미래 작업으로 제기되며, 저자들은 자신들의 가설이 "틀릴 수도 있음"을 인정합니다.

## 연구 글쓰기, 인용, 무결성

글쓰기는 AI 지원이 가장 가시적인 곳이며 그것의 실패가 가장 중대한 곳인데, 참고문헌은 책임의 주장이기 때문입니다. [[citation-errors-hallucinations-computing-education-2026|Denny 외(2026)]]는 ACM Digital Library 전체 — 출판물 723,930건과 참고문헌 15,872,533건 — 를 감사하고, 2021년 이후 출판된 컴퓨팅 교육 논문 5,225편으로부터 참고문헌 113,588건을 추적했습니다.

그들은 의심스러운 기록 828건을 수동으로 검증하고, 14개 논문에서 30개의 검증 가능하게 날조된 서지 정보를 담은 참고문헌을 발견했으며, 모두 2025년과 2026년의 것입니다. SIGCSE Technical Symposium에서 그 수는 2025년 회의록의 3건에서 2026년의 17건으로 늘었고, 2026년 회의록 논문의 2.3%에 나타났습니다. 30개 중 17개가 실제 제목과 날조되거나 잘못된 저자들을 짝짓는 혼합이었습니다.

그들의 수는 의도적인 하한이며, 그들은 이 문제를 소프트웨어에 의해 해결되기보다 공유된 것으로 제시합니다. 저자들은 인용된 모든 작업을 검증해야 하며, 특히 생성 AI가 글쓰기에 사용되었을 때 그래야 합니다; 검토자는 모든 참고문헌을 감사할 수 없으므로, 학술지들은 표적 점검을 채택합니다; 출판사들은 메타데이터를 개선해야 합니다. 자동 탐지는 실측 자료로 다루는 메타데이터의 결함을 물려받습니다.

AI 글쓰기의 규모 효과는 두 번째 서지계량 연구에 나타납니다. [[ai-assisted-writing-research-teams|Wang 외(2026)]]는 2020년 이래 PLoS와 Nature 포트폴리오 저널의 출판물 147,074건을 분석하고 AI 지원 글쓰기를 더 작고 주니어에 기운 팀과 연관시켰습니다. AI 지원 없음에서 완전 지원으로의 극단적 전환에서, 팀 규모는 PLoS에서 22.1%, Nature에서 45.5% 더 작았습니다(Poisson β = −0.250과 −0.607, 둘 다 p < 0.01).

영향은 분명히 손상되지 않았습니다. AI 지원 PLoS 논문의 약 7.34%와 Nature 논문의 7.40%가 FWCI 상위 5%에 도달했으며, 이는 인간이 쓴 두 비교 집단보다 높았고, 짝지은 비교들은 상위 5% FWCI의 확률이 3.0%와 2.7% 더 높음을 보였습니다(둘 다 p < 0.01). 데이터는 관찰적이므로, 저자들은 강한 인과 주장을 거부합니다.

## 연구 환경에서의 지속적 에이전트

단일 프롬프트를 넘어, 지속적 에이전트들이 연구 작업 공간 자체에 내장되고 있습니다. [[persistent-ai-agents-academic-research|Alzahrani(2026)]]는 지속적 기억, 로컬 파일, 외부 도구, 예약된 루틴, 위임된 역할을 가진 에이전트의 115일 단일 조사자 사례 연구를 보고하며, 한 의사-과학자의 작업 공간에서 실행됩니다.

서술적 결과들은 큽니다. 복구 가능한 주 에이전트 원격 측정은 96개의 활성 일에 걸쳐 75,671개의 중복 제거된 기록을 담았고, 활성 일 비율은 0.835였습니다; 작업 공간은 기억 관련 파일 502개, 구성된 에이전트 디렉터리 17개, 기술 파일 57개를 담았습니다. 엄격한 5월 25일 하위 집합은 모형이 완료한 사건 627건과 기록된 토큰 73,950,305개를 담았고, 그중 82.9%는 캐시 읽기였으며, 관찰된 시스템 지출은 약 US\\$1,961이었습니다.

이 연구의 주요 기여는 측정 틀 — PARE-M — 입니다, 지속적 에이전트가 뒷받침하도록 의도된 결과들, 예컨대 거버넌스와 산출물당 비용이, 에피소드적 벤치마크에는 보이지 않기 때문에 세워진 것입니다. 그것의 중심 부정적 발견은 총 상호작용 양이 인간 입력의 감소를 입증하지 않았다는 것입니다: 기억과 절차가 쌓임에 따라 위임된 작업의 범위가 확장되어, 가장 강한 양상은 입증된 노동 대체가 아니라 역량 확장입니다.

한계는 단일 자기 관찰 사례가 초래하는 것들입니다. 한 연구자가 사용자이자 설계자, 자료 출처, 분석가, 수혜자였으며, 대조 집단도, 기준 기간도, 거버넌스 사건에 대한 독립적 코더도 없었습니다.

## 연구 및 평가 도구로서의 시뮬레이션된 학습자

[[simulating-students|학생 시뮬레이션]]은 기법과 현상에 관한 지식 기반의 페이지입니다: 지식 상태와 오류가 사람을 대신할 만큼 충실한 합성 학습자를 어떻게 만드는지. 이 페이지는 같은 장치를 연구와 평가의 도구로 다룹니다 — 어떤 개입, 기기, 벤치마크, 또는 튜터가 실제 학습자가 제공할 수 없는 규모나 조건에서 검사되어야 할 때, 합성 학습자가 *무엇을 위한* 것인지.

가장 명료한 사용은 시간에 걸친 튜터 평가입니다. [[educlaw-bench-pedagogical-llm-agents-2026|Lee 외(2026)]]는 실제 학생 데이터로 훈련된 지식 추적 모형에서 나온 숙달이 그 답을 이끄는 시뮬레이션된 학습자와의 30일 관계에 에이전트 튜터를 놓습니다. 에이전트 어댑터 10개를 평가하여, 모든 어댑터가 이상 학습 참조보다 훨씬 아래에서 5–10일 안에 정점에 달했는데, 이는 단일 세션 평가가 도달할 수 없는 결과입니다. 관찰된 탐사 정확도에 대한 보정 점검은 대각선을 껴안습니다(시도 119만(1.19 million) 건에 걸쳐 ECE 0.049, Brier 0.033).

충실성이 전제 조건이며, 그것은 측정 가능합니다. [[beagle-grounded-learner-emulation-2026|Wang 외(2026)]]는 실제 학생 궤적으로부터의 행동 분기가 DKL = 0.31인 반면 최선 기준은 0.53임을 보고하고, 71명 평가자의 튜링 검사에서 그 궤적들이 실제 학생 데이터와 통계적으로 구별되지 않았습니다(52.8% 정확도, d′ = 0.15). 피해야 할 실패는 역량 편향입니다: 프롬프트된 모형들은 초심자를 대신할 만큼 너무 잘 과제를 풉니다.

믿음 상태는 속이기 쉬운 부분입니다. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar and Sachan(2026)]]은 4B에서 120B 파라미터에 이르는 일곱 모형에 걸쳐, 표적·불일치·일반 피드백 아래에서 시뮬레이터들이 할당된 오개념을 버리고 내부 지식으로부터 거의 균일한 비율로 다시 풀었음을 보여 주었습니다. 그들은 이것을 선택적 전환 점수로 정량화하고, 훈련을 통해 충실성을 최대 +0.56까지 높이는데, 이것이 요점입니다: 페르소나에 프롬프트하는 것은 학습자를 만들지 않습니다.

시뮬레이션된 학습자들은 또한 평가 도구 자체를 위한 통제된 시험대로 기능합니다. [[llm-judged-helpfulness-pedagogy-signal|Fan 외(2026)]]은 세 튜터 기반 각각을 사전 등록된 프로토콜 아래 하나의 고정된 약한 시뮬레이션된 학습자와 짝지어, 범용적 유용성 루브릭이 거의 교수법적 신호를 담고 있지 않음을 발견했으며, 일곱 정책이 판단된 유용성의 0.25점 대역 안에서 판단된 교수법의 2.3점에 걸쳐 있었습니다. 답을 드러내는 전환 뒤에는 모든 기반에서 학생의 독립적 작업이 줄었습니다.

이 경고는 페이지 위에 놓여야 합니다. 시뮬레이터의 판단은 시뮬레이터만큼만 좋으며, 그것의 커버리지는 가장 쉬운 학습자 쪽으로 기우는 경향이 있습니다.

## 실천자 연구: SoTL과 교실 탐구

이것은 코퍼스가 가장 적게 문서화하는 줄기입니다. 교수 학습의 학문과 교실 연구는 실천자 탐구입니다 — 한 교사가 자신의 강좌를, 흔히 작은 규모로, 흔히 자기 연구로서 연구하는 것 — 이고 여기 모인 페이지들은 그 양식에서의 AI 사용에 대해 연구된 설명을 제공하지 않습니다.

가장 가까운 증거는 논점에 있는 것이 아니라 인접합니다. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai and Chan(2026)]]의 대학원생들은 연구자가 되는 것을 배우고 있었지 자신의 교수를 연구하고 있지 않았습니다. [[scaffolding-systematic-reviews-2026|Wang 외(2026)]]의 팀은 지역 프로젝트가 아니라 공식적 학제 간 검토를 수행했습니다. 서지계량 연구들은 교실이 아니라 학문과 출판사를 묘사합니다.

따라서 정직한 진술은 발견이 아니라 간극입니다. AI 지원 실천자 탐구는 그럴듯하게 널리 퍼져 있고 이 코퍼스에 거의 문서화되어 있지 않습니다; 검토 자동화와 서지계량 증거를 마치 그것이 한 강사가 자신의 교수를 연구하기 위해 AI를 사용하는 방식을 해결하는 것처럼 제시하는 페이지는 지나친 주장일 것입니다.

건너갈 수 있는 것은 결과가 아니라 태도입니다: 방법에서 AI의 역할을 명명하고, 해석적 결정은 인간에게 유지하며, 무엇이 검증되었고 무엇이 그렇지 않았는지를 보고하라는 것.

## 증거가 아직 확립하지 않는 것

- **정면 비교가 없습니다.** Martin 외는 AI 지원 방법과 전통적 방법 사이의 비교를 미래 작업으로 제기합니다. 어떤 닻 문서도 AI 방법론이 더 타당한 결론을 낳는다는 것을 보여 주지 않습니다.
- **전반에 걸친 엷은 설계들.** 닻들은 프레임워크 제안, 한 팀의 성찰적 설명, 워크숍 보고서, 포커스 그룹 연구, 관찰적 서지계량입니다. 어느 것도 AI 지원 방법의 통제된 시험이 아닙니다.
- **실행의 감사가 아니라 보고 간극.** PRISMA-LLM은 논문 수준의 침묵을 읽습니다; 논문에 평가가 없는 워크플로도 다른 곳에서는 검증되어 있을 수 있습니다.
- **실천자 연구는 과소 대표됩니다.** 여기서는 소수의 페이지만 SoTL이나 교실 연구를 언급하므로, 코퍼스는 자신의 실행을 연구하는 교사들에 대한 주장을 뒷받침할 수 없습니다.
- **움직이는 표적.** 도구들은 출판보다 빠르게 향상하므로, 2025년 워크플로에 관한 발견은 그 형태로는 더 이상 존재하지 않을 수 있는 한 세대의 체계를 묘사합니다.

## 흔한 오해

- **"LLM 논문과 소프트웨어 논문은 똑같이 잘 평가된다."** 2023년 이후 **소프트웨어 및 제품 논문의 38.0%가 아무런 평가도 보고하지 않았으며, LLM 논문은 9.3%였습니다**. 격차는 크고, 더 새로운 도구가 덜 엄격하게 시험된다는 가정에 반합니다.
- **"과제별로 층화하면 격차가 해소된다."** **그 격차는 층화를 견딥니다**. 선별과 선택에서 소프트웨어 논문은 **실질적 평가 항목이 평균 3.2개이고 39.3%가 아무것도 보고하지 않았으며**, LLM 논문은 평균이 더 많았습니다. 그 차이는 과제의 속성이 아니라 논문 부류의 체계적 속성입니다.
- **"긍정적 평가는 그 워크플로가 의도된 기준을 충족했다는 뜻이다."** **긍정적 평가만 담은 LLM 논문 118편 가운데 52%가 그 워크플로가 맡은 역할에 요구되는 기준에 미치지 못했다는 우려를 적어도 하나는 보고했습니다**. 긍정적 평가의 절반이 자기 반박을 품고 있었던 것입니다.

## 인용

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.

## 연결된 개념

- [[research-methods-aied]] — 교육에서의 AI를 연구하는 데 쓰이는 설계의 포괄
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## 연결된 문서

- [[ai-methodologies-science-education-research-2026]] — AI 방법론이 과학 교육 연구의 본질을 어떻게 변형할 수 있는지에 대한 7단계 성찰 프레임워크(Martin 외, 2026)
- [[scaffolding-systematic-reviews-2026]] — 멘토링과 선택적 AI 통합에 관한 한 학제 간 검토 팀의 설명(Wang 외, 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — 28명의 대학원생이 연구 워크플로 전반에 걸쳐 생성 AI를 사용한 방식, 그리고 그들이 제안하는 지침(Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — 컴퓨팅 교육 문헌에서 날조된 참고문헌에 대한 분야 규모 감사(Denny 외, 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — AI 지원 체계적 검토를 위한 보고 프레임워크, 그리고 그것이 문서화하는 책임 간극(Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — 생성 AI와 학술 검색에 관한 CHIIR 2026 워크숍 보고서(Liu, Arguello, Hoeber 외, 2026)
- [[persistent-ai-agents-academic-research]] — 연구 작업 공간에서의 지속적 에이전트에 대한 단일 조사자 사례 연구(Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — AI 지원 글쓰기가 더 작고 젊은 연구 팀과 동반한다는 서지계량 증거(Wang 외, 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — 시뮬레이션된 학습자에 대해 튜터 에이전트를 평가하는 30일 벤치마크(Lee 외, 2026)
- [[beagle-grounded-learner-emulation-2026]] — 진정한 초심자의 고투를 재현하는 신경-상징 시뮬레이터(Wang 외, 2026)
- [[llm-student-simulation-misconception-faithfulness]] — 왜 시뮬레이터들이 어떤 피드백 아래서도 오개념을 버리는지, 그리고 훈련이 그것을 고치는 방식(Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — 유용성이 교수법을 측정하는지를 검사하기 위해 고정된 시뮬레이션된 학습자를 사용하는 사전 등록 감사(Fan 외, 2026)
