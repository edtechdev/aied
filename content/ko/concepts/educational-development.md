---
connected_resources: [education-agent-skills, fpds-apps-and-resources]
title: 교육 개발
created: "2026-08-09T07:47:05-04:00"
updated: "2026-11-17T20:00:00-05:00"
connected_faqs: [ai-save-instructor-time, faculty-ai-competencies, faculty-development-ai]
type: concept
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role, teacher-ai-competency]
audience: [faculty developers, instructors]
level: [higher ed, k 12]
confidence: high
institutions: [educational-policy-ai]
translation_of: concepts/educational-development
source_updated: "2026-11-18T05:55:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-17"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

> **교육 개발**(*교수진 개발*이라고도 합니다) — 교육자가 AI를 가지고 효과적으로 가르치는 데 필요한 기술, 자신감, [[learner-identity|전문적 정체성]]을 기르도록 돕는 과정, 프로그램, 기관의 지원입니다. 교육 개발은 개별 교육, [[curriculum-design|교육과정]] 재설계, [[educational-policy-ai|기관 정책]] 변화, 그리고 GenAI가 학문적 직업에 무엇을 의미하는지를 이해하는 문화적 작업을 아우릅니다.

## 생각해 볼 질문들

- 같은 학과의 교수진이 AI를 한편으로는 인간을 닮은 '조력자'라고 말하면서 다른 한편으로는 단순한 '도구'이자 '검색 엔진'이라고 말한다면, 그 이면에 깔린 심적 모형이 드러나기도 전에 교육 프로그램이 진정으로 성공할 수 있을까요? 그 단계를 건너뛴다면 무슨 일이 벌어질 수 있을까요?
- 교육 개발은 흔히 기술 격차를 좁히는 일로 다루어집니다. 교수자에게 도구를 가르치면 도입이 이루어진다는 것입니다. 그러나 일부 [[research-methods-aied|연구]]는 GenAI 통합을 정체성 차원의 변화('GenAI 세상에서 가르친다는 것은 어떤 의미인가?')로 규정합니다. 어느 틀이 더 정확하다고 보시며, 각각은 어떤 다른 행동을 요구할까요?
- EPIQ-AI 같은 준비도 프레임워크는 교수진의 준비도를 인식론적, [[pedagogy|교수법적]], 기관적, 품질과 규정 준수의 영역으로 나눕니다. 준비도가 개별 기술의 격차가 아니라 사회기술적 정렬의 문제라면, 홀로 진행하는 'AI 워크숍'이 어디에서 부족하기 쉬울지 무엇을 말해 줄까요?
- 새로운 기술에 대한 자신의 가정이 지시가 아니라 토론, 은유, 공유된 언어를 통해 드러나고 바뀐 경험을 한 적이 있으신가요? 공유된 언어와 은유 분석이 교육자가 AI를 이해하도록 돕는 데 어떤 역할을 한다고 보시나요?
- 교수진, 직원, 학생이 AI가 스위스 아미 나이프인지, 조력자인지, 블랙박스인지, 경쟁자인지를 이야기하는 저기술의 '은유 워크숍'을 생각해 보십시오. AI가 교수의 역할을 대체할지 모른다는 공포까지 포함한 두려움을 표면화하는 것이 더 많은 기술 교육보다 도입에 더 도움이 될 수 있을까요?

## 들어가며

교육 개발은 교수자가 잘 설계하고, 가르치고, 평가하는 역량을 쌓게 하는 전문적이고 기관적인 작업이며, AI 시대에는 어떤 교수법적 변화도 효과를 내기 위한 전제가 되었습니다. 이 개념은 개인([[ai-literacy|AI 리터러시]], 자신감, [[teacher-ai-competency|역량]], 태도)과 기관(기준, 정책, 품질 보증, 그리고 명시된 AI 기대와 실제 평가 설계 사이의 정렬)을 모두 아우릅니다. 이 지식베이스에서 되풀이되는 발견은, 효과적인 실천에 대한 근거가 대부분의 기관이 실행한 것을 상당히 앞서고 있다는 것이며, 이로 인해 더 많은 일차 연구가 아니라 개발 작업이 제약 요인이 됩니다. [[learning-sciences|학습과학]]은 이 작업이 나르는 발견을 만들어 냅니다. 그 분야가 사람이 어떻게 배우며 어떤 설계가 결과를 바꾸는지를 경험적으로 확립하는 곳이라면, 교육 개발은 그러한 근거를 교수자가 실제로 가르치고 평가하는 방식으로 옮기는 기관적 실천입니다. 그러나 이 작업은 한 가지 기관적 경계에 의해 제한됩니다. 개발은 기관 안에 있는 인력의 역량을 쌓지만, 그 인력이 이후에 도입하도록 요구받는 도구는 대개 기관 바깥에서 [[educational-technology-developers|교육 소프트웨어 개발자]]가 만듭니다. 그들의 설계와 조달 결정, 즉 기본값, 설정 가능성, 자금이 끊긴 뒤에도 남는 것은 이 프로그램의 산출물이 아니라 그에 대한 제약으로 도착합니다.

## AI 시대의 교육 개발

- **준비도 프레임워크:** [[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI 프레임워크]]는 인식론적, 교수법적, 기관적, 품질과 규정 준수라는 네 가지 준비도 영역을 식별합니다. 교수진의 준비도는 개별 기술의 격차가 아니라 사회기술적 정렬의 문제입니다.
- **채택하기 전에 프레임워크의 수준이 무엇을 설명하는지 확인하십시오.** 기관이 승인한 16개의 AI 역량 프레임워크 전반에서 AI 사용, 산출물 평가, 영역 적용은 16개 모두에서 실질적이었지만, 문제 공식화(7), 데이터 역량(9), AI 창출(8)은 그렇지 않았습니다. 또한 숙련도 수준은 학습자 발달, 직업적 역할 또는 학년을 설명하므로 직접 비교할 수 없습니다([[ai-competence-framework-landscape-2026|Fitsilis (2026)]]).
- **기술 통합을 위한 기준:** [[crompton-faculty-technology-integration-standards-2026|Crompton 등]]은 [[design-based-research|설계 기반 연구]]를 사용하여 [[higher-ed|고등교육]] 기관에서 기술(AI 포함) 통합을 위한 교수진 기준을 개발합니다.
- **도입과 자신감:** [[teacher-ai-adoption-confidence|교수자의 AI 도입 연구]]는 우려, 지원, 자신감, 태도가 핵심 예측 요인임을 밝힙니다. 교수진 개발 프로그램은 이 네 가지를 모두 다루어야 합니다.
- **교육과정 통합:** [[institutional-change-framework-ai|기관 변화 프레임워크]]와 [[ai-assessment-scale-reform|평가 개혁]]은 교수자가 AI 도구를 덧붙이는 것을 넘어 강좌를 재설계할 것을 요구합니다.
- **교육 프로그램:** [[crewscaler-ai-upskilling-framework|AI 역량 강화 프레임워크]]와 [[ai-tpack-preservice-math-teachers|TPACK 기반 예비 교사 교육]]은 구조화된 교수진 [[ai-education|AI 교육]]의 모형을 제공합니다.

- **수요는 욕구 평가가 아닙니다.** 퀘벡 CEGEP 교사 345명은 기술적 이해에서 가장 낮은 점수(5점 만점에 2.706)를 받았지만, 이전 세션이 너무 일반적이었다고 말하며 전공 분야별 실천적 적용을 요청했습니다([[giachini-ai-literacy-postsecondary-teachers-quebec-2026|Giachini 등(2026)]]).
- **학술인은 자동화를 자처하며, 도구가 무엇을 할 수 있는지 물을 때만 교수법을 드러냅니다.** 20개 학문 분야와 24개국에 걸쳐, 다섯 개의 개방형 질문은 효율성과 자동화에 관한 의견 737개를 끌어낸 데 비해 기관 정책에 관한 의견은 305개였고, 맞춤화는 역량에 관한 답변 74개와 장벽 질문 각각 3개에 나타났습니다([[sheridan-teaching-academics-genai-plans-2026|Sheridan et al., 2026]]). 그들이 지목한 제약은 시간, 일관된 정책, 자금이 뒷받침되는 지원이었고, 전문성 개발과 출장 예산이 가장 먼저 삭감되는 항목으로 서술되었습니다. 소수는 변화를 노사 관계를 통해 읽으며, 기관이 그것을 이용해 교직원을 줄일 것이라고 예상했습니다.

- **AI를 매개로 한 전문적 성찰.** 반성적 삼각형 모형은 전문적 학습 공동체에서 [[reflection|자기 성찰]], 협력적 성찰, 공동체 성찰에 걸쳐 AI를 인지적 매개자로 위치 짓습니다. 교사 여섯 명을 대상으로 한 4주 타당성 사례 연구에서 검증되었으며, 이 모형이 긋는 경계는 개별적 통찰이 자동으로 공유된 전문적 지식이 되지는 않는다는 것입니다([[reflective-triangle-model-teacher-ai-2026|Nguyen (2026)]]).
- **[[governance|거버넌스]]와 정책:** [[genai-policies-higher-ed-computing|기관 AI 정책 분석]]은 기관의 야망과 교수진 지원 역량 사이의 격차를 기록합니다.
- **AI 리터러시는 기관적으로 보이지 않는다.** 언어 교사의 AI 리터러시에 대한 32개 연구의 [[meta-analysis-systematic-review|체계적 고찰]]은, 그것이 업무량 모형, 승진 정책, 자원 배분에 빠져 있으며 개발이 파편화되고 책임이 기관과 기구에 분산되어 있음을 발견했습니다. 따라서 리터러시 개발은 구조적 지원이 아니라 개별적 노력으로 기본값이 설정됩니다([[governing-unseen-ai-literacy-language-teachers-2026|Deng, Çelik & Duran, 2026)]]).

- **구성주의 워크숍에는 지도가 필요합니다.** 50분 세션 세 번이 교수진 20~25명을 놀이식 프롬프팅에서 재사용 가능한 교수 자료로 옮겼지만, AI가 낯선 참가자들은 샌드박스 전에 개념 브리핑을 요청했습니다([[fischer-learning-by-making-faculty-development-2026|Fischer (2026)]]).

국경을 넘는 개발에는 워크숍 너머의 분석 단위가 있습니다. [[tian-transnational-faculty-development-governance-2027|Tian, Sun과 Wang (2026)]]은 연결성이 기본적으로 일회적이라고 주장합니다. 웨비나는 의제를 정하지 않고 배포하고, 플랫폼은 사용에 관한 합의를 만들어내지 않고 개최하기 때문입니다. 사건을 축적된 인프라로 전환하는 것은 화려하지 않습니다. 리듬을 유지하는 사무국, 의제와 사례의 날짜가 붙은 아카이브, 그리고 네트워크가 주장할 수 있는 지위가 아니라 이동 방향으로 다루어지는 공유 거버넌스입니다.

### 교육 개발에서의 은유와 공유된 언어

교수진은 AI에 대해 이질적이고 종종 깊이 양가적인 심적 모형을 지니며, 효과적인 개발은 그것을 표면화하고 그와 함께 작업해야 합니다. [[engineering-faculty-metaphors-ai-understanding-2026|Gerhardt 등]]은 [[engineering-education|공학]] 강사가 이해를 구성하기도 하고 제약하기도 하는 은유를 통해 AI를 틀 짓는다는 것을 보여 줍니다(인간을 닮은 '조력자' 대 '도구' 또는 '검색 엔진'). 같은 학과 안의 강사들조차 근본적으로 다른 개념화를 지니는 경우가 많기 때문에, [[generative-ai|GAI]]에 관한 공유되고 정확한 언어는 효과적인 교수진 개발과 생산적인 학과 차원의 도입 논의를 위한 전제 조건입니다.

이러한 심적 모형을 표면화하는 실천적 방법이 **은유 분석 워크숍**입니다. [[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson & Casey (2025)]]는 교수진, 직원, 학생이 생성형 AI에 대한 자신의 은유를 이야기할 수 있도록 저기술의 협력적 워크숍을 설계하고 검증했습니다. 참가자의 은유는 네 범주로 모였습니다. *기능*(도구적: '스위스 아미 나이프'), *역할*(인간적: '조력자', '프레너미'), *성질*(알 수 없음: '블랙박스', '미끄러운 비탈'), *주체성*(위협적: '경쟁자', '불길한 로봇'). 이는 인간 대 기계 [[agency|주체성]]의 긴장과 알려진 것 대 알 수 없는 것의 긴장을 표면화했습니다. 워크숍은 참가자가 가정을 표면화하고, 역할을 가로질러 연결되며, '혼자가 아니다'라고 느끼고, GenAI의 [[ethics|윤리]]를 생각하도록 돕는 데 기여했으며, 기술적 전문성을 요구하지 않았습니다. 개발 도구로서 이 워크숍은 프로그램 설계자에게 [[assessment|평가]]를 재설계하거나 정책을 도입하기 *전에* 팀의 가정을 표면화할 낮은 문턱의 방법을 제공하며, AI가 [[teacher-role|교수의 역할]]을 대체할지 모른다는 공포까지 포함한 두려움에 정면으로 맞서게 합니다.([[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson & Casey (2025)]])

은유를 처음부터 어떻게 고를 것인가라는 더 넓은 설계 질문이 있습니다. [[metaphors-and-analogies|은유와 유추]]는 이 문제를 가로지르는 근거를 모으고, [[roe-perkins-furze-metaphors-critical-ai-literacy-2025|Roe, Perkins와 Furze (2025)]]는 네 가지 기준을 제시합니다. 접근성, 설명력, 비판적 AI 리터러시 잠재력, 교수법적 유용성입니다.

### 기술 습득이 아닌 정체성 작업으로서의 GenAI

임계 개념에 기반한 관점은 GenAI 통합을 기술의 격차가 아니라 교수진에게 닥친 **존재론적 전환**으로 다시 틀 짓습니다. 임계 개념 이론(Meyer & Land)을 적용한 Laidlaw는 GenAI가 다섯 가지 임계 특성을 모두 보인다고 주장합니다. *전환적*(평가, 교수법, 전문적 역할에 대한 가정을 재구성한다), *불편한*(독창성, 인간 주체성, 노력과 성취에 대한 믿음을 위배한다), *되돌릴 수 없는*, *통합적*(기술, 교수법, 인식론, 정체성을 연결한다), *경계가 있는*(GenAI 활용 능력이 전문적 통용력의 새로운 표지가 된다) 특성입니다.([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw(2026)]])

이러한 설명에 따르면, 'GenAI 세상에서 가르친다는 것은 어떤 의미인가?'라고 묻는 교수진은 역량이 부족한 것이 아니라 [[anxiety-and-stress|불안]], 저항, 혼란이 전환의 필수적인 부분인 **경계에 선 임계 횡단의 단계**에 있습니다. 교수진이 하지 않는 질문에 대한 역능의 답을 주는 기술 기반 교육은 실제 전환에 비추어 주변으로 물러날 수 있으며, 선의로 마련된 거버넌스는 변화를 지원하기보다 규칙을 전달하는 '집행의 환상'으로 흐를 수 있습니다.([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw(2026)]])

**설계 함의:** 역량 구축을 대체하지 말고 **정체성을 지탱하는 실천**으로 보완하십시오. 기술 시연이 아니라 정체성에 관한 질문으로 세션을 열고, 교수진이 GenAI가 자신 분야의 목적에 무엇을 의미하는지를 탐구하는 [[discipline-specific-aied|전공 분야별]] 지속적 공동체를 운영하고, 서로 다른 전환의 속도를 존중하는 동료 멘토링 구조를 만들고, 두려움에 기인한 주저(지원이 도움이 된다)와 정당한 학문적 가치에 뿌리내린 원칙에 따른 비도입(존중받을 자격이 있다)을 구분하십시오.([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw(2026)]]) 위의 은유 워크숍 모형은 이것의 한 구체적 구현입니다. 기술 [[lifelong-learning|역량 강화]]에서 출발하기보다, GenAI가 참가자에게 무엇을 의미하는지라는 해석적이고 정체성을 담은 질문으로 열립니다.

**정체성 작업 틀에 대한 경험적 뒷받침.** [[farazouli-navigating-uncertainty-teachers-genai-2026|Farazouli 등(2026)]]은 이 설명에 대한 직접적인 [[qualitative-research|질적]] 근거를 제공합니다. 스웨덴 대학 교사 24명은 GAI의 등장을 놀랍고 벅차다고 표현하며, '취약의 상태'(낮은 자신감, 불안, '학생보다 앞서 있지 못할 것'에 대한 두려움)를 보고하고 유토피아적 담론과 디스토피아적 담론 사이에 '갇혀 있다'고 느꼈습니다. 제한된 지식과 경험, 그리고 취약감은 교사가 GAI를 살피고, 평가하고, 도입할 준비가 되어 있지 않음을 드러내며, 저자들은 기관이 교사가 GAI를 실험하고 아이디어를 교환하며 기관, 학과, 강좌 수준에서 실천과 지침을 협력적으로 개발할 **지정된 공간과 시간**을 마련해야 한다고 주장합니다. 이는 정체성 작업과 지원 중심 접근을 이론에서만이 아니라 교사 자신이 보고한 경험에 닻을 댑니다.

**정체성의 질문을 직접적으로 다룬 프로그램.** [[chick-faculty-development-ethical-ai-2026|Chick, Morello & Staffey (2026)]]은 교육학, 보건 과학, 경영 등 여러 프로그램의 교수진 10명을 낮은 AI 활용 수준(6점 척도에서 자기 평균 1.89)에서 [[student-ai-interaction|학생의 AI 사용]]을 안내하는 데 높은 자신감을 보고한 60%, 긍정적 인식 90%로 이끈 6주 하계 집중 프로그램을 보고합니다. 이들은 이 변화를 도구 교육보다, 기술 시연이 아니라 전문적 가치의 실존적 질문으로 열린 구조화되고 안전한 실험에 돌립니다. 그들이 기대는 표지는 어휘의 변화입니다. AI를 '부정행위 기계'이자 '인간성을 잃게 하는 힘'으로 부르던 초기의 틀은 '호기심 많은 조력자'로 옮겨갔으며, 두려움에서 호기심으로의 이동, 정책의 공백이 채워 주지 않은 윤리적 명확성에 대한 바람, [[inclusive-learning|포용적 설계]]가 [[equity-in-ai-education|형평성]]을 증폭하는 장치가 되는 것, 그리고 교수진이 문지기에서 안내자로 옮겨가는 것이라는 네 가지 주제는 교수 정체성의 부분적이고 의도적인 재정향을 기술합니다. 열 개의 캡스톤 재설계가 더 어려운 근거이며, 그중 여덟 개가 AI를 사고를 대체하기보다 지탱하는 스캐폴드로 위치 짓습니다. 그리고 저자들의 **공생 교수법**은 참가자들이 만든 것을 공식화합니다. 상호 보완적 설계, 투명한 과정, 비판적 통합, 내장된 윤리적 추론, 반복적 다듬기입니다. 다만 문제는 구조적이지 개별적이지 않습니다. 같은 참가자들이 모순되는 정책 신호, 개인용 도구 구독, 재설계를 위한 시간 확보의 부재를 지목했기에, 저자들은 저항이 문제가 아니었으며 정책과 인프라를 건드리지 않는 파편적 대응은 열성적인 집단마저 실패하게 할 것이라고 결론짓습니다.

**매개자로서의 개발, 그리고 개발자가 가장 먼저 던지는 질문.** [[beyond-the-algorithm-academic-developers-digital-mediators-2026|Sithole (2026)]]은 남아프리카공화국의 Historically Disadvantaged Institutions 두 곳에서 학술 개발, 즉 이 분야의 옛 이름이자 이 논문을 게재한 *International Journal for Academic Development*가 쓰는 용어를 연구하며, 개발자를 기술적 실행자가 아니라 세 개의 층위에서 일하는 **디지털 매개자**로 다시 규정합니다. 교수법적 층위(AI 담론을 실행 가능한 교수, 학습, [[assessment|평가]] 실천으로 번역한다), 윤리적 층위([[academic-integrity|학문적 진실성]]에 비추어 자동화를, 배려에 비추어 혁신을 저울질한다), 기관적 층위(경영진의 요구와 학문적 우려 사이의 경계 공간에서 일한다)입니다. 프로그램 설계에 중요한 발견이 두 가지 있습니다. 첫째, 거르는 질문은 기술적이기 전에 맥락적입니다. '여기서, 가난한 학교에서 온 우리 학생들에게 이는 무슨 의미인가?'라는 질문이며, 도입의 속도를 늦추는 것도 그것에 대한 저항이 아니라 작업의 일부로 셈됩니다. 둘째, 정서적 비용은 개인이 아니라 구조적입니다. 개발자들은 자신도 여전히 그 함의를 짚어가는 도구에 전문성을 보여 줄 것이 기대되었습니다('나는 사기꾼 같은 기분이에요. AI를 진행하며 배우고 있는데, 기관은 전문성을 기대합니다'). 이에 대한 그들의 대응은 기술이 아니라 판단을 겨냥한 동료 [[professional-training|전문적 학습]]이었으며, 여기에는 도구를 의도적으로 고장 내 보는 일도 포함되었습니다. 이 논문의 분석적 기여는 [[digital-divide|디지털 불평등]](분배의 문제)과 **알고리즘적 식민성**(완전한 접근을 거쳐도 살아남는 인식론의 문제)을 구분하고, 둘 다를 [[global-south|글로벌 사우스]]의 [[higher-ed|고등교육]] 안에 놓는다는 것입니다. 그곳에서 개발 작업은 중립적 지원 서비스가 아니라 전환적인 것으로 기대됩니다.

**발달적 신호로서의 죄의식과 도덕적 불편함.** [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]]은 몰타의 한 대학 교직원을 대상으로 한 설문(응답 109건, 3.5% 응답률은 그 논문이 윤리 논쟁의 상태에 관해 스스로 알린다고 읽는 수치)에서 정체성 설명에 대한 정서적 짝을 제공합니다. 죄의식은 공개가 아니라 은폐를 따라갔습니다. 불편함으로 AI 사용을 제한하는 것은 AI 죄의식 지수와 r = .62로 상관되었고, 동료에게 공개하지 않으려는 것은 r = .50로 상관되었으며, 학문 산출물에서의 공식적 [[ai-use-disclosure|공개]]는 관계가 없었습니다(r = .08). 31.2%만이 명확한 기관 지침을 인식했으며, 그 명확성과 낮은 죄의식 사이의 상관은 약했습니다(r = −.25, p = .010). 이 논문은 이를 상명하달식 명령으로는 부분적으로 정서적이고 정체성에 기반한 문제를 풀 수 없다는 근거로 읽습니다. 그 권고는 직접적으로 발달적입니다. 죄의식과 정체성에 대한 우려를 바로잡아야 할 결함이 아니라 정상적인 전환기 반응으로 다루고, 구조화된 저위험 실험을 통해 예기적 불안을 지나가게 하며, 죄의식이 초기 경력 교직원에서 가장 높고(M = 2.71) 선임 교직원에서 가장 낮았으므로(M = 2.03) 선배 학자들의 멘토십에 기대십시오.

### 프로그램 설계자를 위한 실천적 지침

교수진 개발자, 학술 리더, AI 전문적 개발을 계획하는 [[stakeholders|수업 설계자]]에게 이 지식베이스의 근거가 시사하는 바는 다음과 같습니다.

**지식만이 아니라 네 가지 도입 동인을 다룹니다.** 자신감, 태도, 지원, 우려가 교수진이 실제로 AI를 도입하는지를 예측합니다. 이를 무시하는 지식 전용 워크숍이 실천을 바꾸기는 어렵습니다. 직접 사용을 통해 자신감을 쌓고, 일회성 교육이 아니라 지속적인 지원을 제공하며, 교수진의 우려를 적극적으로 표면화하고 대응하도록 개발을 설계하십시오.([[teacher-ai-adoption-confidence|도입 연구]])

자신감과 리터러시는 서로 바꿔 쓸 수 있는 목표가 아닙니다. 대학 교수진 502명을 대상으로 한 구조방정식 모형에서 AI 리터러시는 AI [[well-being|웰빙]]의 지배적 예측 요인이었고(β = 0.713), [[self-efficacy|기술적 자기효능감]]은 거의 기여하지 않았으며(β = 0.082), 지원은 간접적으로만 웰빙에 이르렀습니다([[faculty-ai-well-being-social-supports-2026|Liu 등(2026)]]).

**지침에 대한 요구와 지침의 충분성을 서로 다른 문제로 다룹니다.** 한 대학의 교수진은 비윤리적 AI 사용에 대한 기관적 조치를 강하게 지지하면서(M = 4.59) 기존 지침은 가장 낮게 평가했으며(M = 2.99), [[privacy|데이터 프라이버시]]와 문화적 포용성을 자신의 가장 취약한 지식으로 꼽았습니다. 이는 전문적 개발을 위한 구체적인 목표입니다([[bilgic-sever-ethical-dimensions-ai-higher-ed-2026|Bilgic & Sever, 2026]]).

**준비도를 사회기술적 정렬의 문제로 다룹니다.** [[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI 프레임워크]]는 교수진의 준비도가 인식론적, 교수법적, 기관적, 품질과 규정 준수의 영역에 걸친다는 것을 보여 줍니다. 개인만 훈련하는 프로그램은 변화를 가능하게도 막기도 하는 기관의 지렛대(정책, 업무량, 인센티브, 품질 기준)를 놓칩니다. 교육과 함께 그것들을 정렬하십시오.([[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI 프레임워크]])

**인프라 투자를 전환과 동일시하지 마십시오.** 125개 연구에 걸쳐, GenAI 인프라와 교육 개발에 대한 기관 투자는 실제 교수법적 변화와 약하게만 상관되었고(r = 0.12), 60~70%의 강사는 GenAI를 통합할 준비가 되어 있지 않다고 느꼈습니다. 이로 인해 조달이 아니라 개발이 제약 요인이 됩니다.([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]])
**효과 크기만이 아니라 실패 양식을 명명하십시오.** [[fajardo-ramos-teacher-education-ai-agenda-2026|Fajardo-Ramos, Chiappe and Martínez-Pérez (2026)]]은 그것을 시뮬레이션된 혁신이라고 부릅니다. 도구의 존재가 진보를 신호하고, 교수와 평가 형식은 그대로 남으며, 도입률과 [[visualization|대시보드]]가 학습을 대신하고, 기술 출시 주기가 방향을 정합니다. 그들의 진단은 개발 프로그램이 도입 전에 각 도구를 명명된 학습 문제에 비추어 정당화할 것을 요구합니다.

판단은 역량 항목보다 조건으로 다루는 편이 낫습니다. [[ji-judgement-space-dialogic-inquiry-2027|Ji와 Mercer (2026)]]는 판단 공간을 전문적 판단이 표현되고 검토되는 관계적·규범적·조건적 상호작용으로 서술하며, AI 지원 환경에서는 생성된 평가가 그 공간에 들어오기 때문에 이 공간이 삼자적이 된다고 봅니다. 그들의 세 열 감사는 교사가 무엇을 하는지, 학생이 무엇을 하는지, AI가 어떻게 위치 지어지는지를 묻는 동료적 도구로, 판단이 조용히 도구로 옮겨간 지점을 찾아냅니다.

**도구 도입이 아니라 교육과정 재설계를 향해 쌓습니다.** 목표는 AI 도구를 덧붙이는 것이 아니라 교수진이 강좌와 평가를 재설계하는 것입니다. 전문적 개발을 강좌 차원의 재설계 작업과 평가 개혁에 닻을 댑니다([[institutional-change-framework-ai|기관 변화 프레임워크]]).([[institutional-change-framework-ai|기관 변화 체계]])([[ai-assessment-scale-reform|평가 척도]])([[ai-assessment-scale-reform|평가 척도]])

**개인이 아니라 공동체를 불러모읍니다.** 학술인 12명과 학생 17명을 인터뷰한 결과에 따르면, GenAI 시대의 평가 재설계는 단일 학술인의 역량을 넘어섰습니다. 경직된 과정, 긴 준비 기간, 업무량 부담이 지목되었기에, 저자들은 평가 설계, GenAI, 교과 내용, 프로그램, 산업 전문성을 하나로 묶는 프로그램 차원의 팀을 제안합니다([[nicola-richmond-programwide-assessment-genai-2025|Nicola-Richmond 등, 2025]]).

개발의 단위는 학과보다 작고 개인보다 클 수 있습니다. [[chen-future-faculty-development-ai-2027|Chen 등(2026)]]은 일곱 가지 교사 역할을 제시하지만 그것이 한 학술인 안에 있을 필요는 없다고 주장합니다. 인간 중심 교육자와 학문 전문가는 보편적 기초이고, 학습 아키텍처, 평가 재설계, 기술 역량, 윤리적 수탁, 규율 있는 실험은 교수팀에 분배될 수 있습니다. 그들의 조건은 모두가 기본적인 기술적·윤리적 역량을 유지하는 것이며, 그래서 공유된 전문성이 공유된 무지가 되지 않습니다.

**외부의 모범 사례가 아니라 그 방의 데이터로 시리즈를 운영합니다.** [[physics-faculty-learning-community-ai-2026|Perl-Nussbaum과 Finkelstein (2026)]]은 규모가 큰 공립 R1 물리학과의 실행 모형을 기록합니다. 60~75분의 격주 세션 여섯 번에 시리즈 전체로 교수진 19명이, 각 모임에는 약 10명이 참여했으며, 모든 세션이 지역 데이터나 학과에서 가져온 자료로 열리고 실제 익명화된 학생 과제에 대한 AI의 소집단 테스트로 옮겨가고, 집단적 토론으로 마무리되었습니다. 교수진이 테스트를 통해 발견한 것은 진행자가 가져올 수 있었던 어떤 패키지보다 유용했습니다. AI는 그들이 시도한 모든 문제를 풀었지만, 실제 학생 과제에 대한 피드백은 명확한 목표와 루브릭이 주어지지 않으면 고르지 못하고 프롬프트에 의존적이며 피상적이었고, 학생들은 생산적 사용이 시연되지 않으면 피상적으로 프롬프트를 주고 산출물을 겉으로만 고쳤습니다. 최초의 구체적 산출물은 다섯 항목으로 된 살아 있는 저장소였습니다. 강의계획서 정책 문장, 교실 토론 자료, 학생 설문, AI가 통합된 과제, 평가 구조가 그것이며, 저자들이 세션 구조 자체를 이 논쟁으로 다루는 까닭입니다.

**역량 프레임워크에 닻을 댑니다.** 개발은 **교수법적 [[prompt-engineering|프롬프트 리터러시]]**, 즉 교수법적 의도를 프롬프트에 부호화하는 역량도 함께 쌓아야 합니다. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]]은 교수자의 AI 지원 설계 작업의 품질을 결정하는 것이 AI 활용 능력이 아니라 교수법적 전문성임을 발견하기 때문입니다.([[crewscaler-ai-upskilling-framework|AI 역량 강화 프레임워크]])([[ai-tpack-preservice-math-teachers|TPACK 기반 예비 교사 교육]])([[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]])

**자동화에 앞서 이해를 순서에 둡니다.** 구성적 정렬을 위해 생성형 AI를 다루는 실천자 조언을 담은 2022년 11월부터 2025년 4월 사이에 발표된 회색 문헌 14편에 대한 [[qualitative-research|비판적 담론 분석]]은 역량이 도구에의 접근에 앞서야 함을 보여 줍니다. [[constructivist|구성주의]] 틀에서 참여의 질질이 이해의 질질에 앞서므로, 위험은 익숙함에 반비례하며, 초보자는 그럴듯해 보이나 교수법적으로 빈약한 산출물의 그럴듯함에 기인한 수용에 가장 많이 노출됩니다. [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes 등(2026)]]은 더 나아가 개발 부서가 [[learning-design|강좌 설계]]의 '무거운 짐을 지는' 도구에 '유창함을 습득'하도록 돕는 기술주의적 과제를 거부해야 한다고 주장합니다. 그런 틀은 개발자를 폐쇄된 교육자-GenAI 고리 밖으로 밀어내고, 가치에 기반한 관계적 개발을 소프트웨어 도입을 위한 매개 메커니즘으로 다시 규정하기 때문입니다. 방어 가능한 대안은 교육 개발자가 기관의 경계 안에 있는 [[rag|검색 증강]] 정렬 조력자의 큐레이터이자 규칙 설정자로 남는 것입니다. 이 조력자는 질문을 던지고, 과소·과대 평가를 표시하고, 대안을 만들어 내지만 완성된 산출물은 만들지 않으며, 인증과 프로그램 간 문제에 대한 [[human-in-the-loop-ai|인간의 판단]]으로의 에스컬레이션은 예외가 아니라 기능으로 다루어집니다.

개발은 또한 불변의 핵심과 움직이는 가장자리를 중심으로 조직될 수 있습니다. [[ho-invariant-core-faculty-development-2027|Ho (2026)]]는 학습의 신경심리학적 기제를 어떤 기술보다 앞에 두고, GenAI가 산출물과 사고 사이의 거리를 붕괴시킨다고 주장하며, 교수진이 증거·성찰·동료 검토 아래 자신의 교수를 탐구하는 학술적 교수 경로를 도출합니다. 그의 우선순위는 다음과 같습니다. 학습이 작동하는 방식을 깊이 하고, 그다음 교사가 작은 도구를 직접 만들게 하며, 기술의 가장자리는 움직일 것으로 예상되는 부분으로 다룹니다.

**두려움과 심적 모형을 표면화하고 다룹니다.** 교수를 재설계하기 전에 은유 분석 워크숍([[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson & Casey 2025]])을 사용하여 팀의 GenAI에 대한 가정과 불안, 교수의 역할을 대신할 것이라는 공포까지 표면화하고, 이를 무시하기보다 대응하는 개발을 설계하십시오.([[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson & Casey (2025)]])

**AI 리터러시를 몸소 보여 주고 실제 향상을 측정합니다.** 교수진 개발은 가르치는 실천 자체를 구현해야 합니다. AI를 교수법적으로 사용하고 산출물을 비판적으로 평가하는 것이 그것이며, 자기보고된 자신감이 아니라 실증된 역량을 평가해야 합니다. 자기 인식은 AI 기술을 믿을 만하게 과대평가하기 때문입니다([[self-report-measures|자기보고된]] 자신감).([[ai-literacy-assessment-misalignment|AI 리터러시 평가: 자기보고 대 수행 불일치]])([[genai-pd-ai-pck-learning-gain-2026|집중적인 GenAI 전문적 개발 프로그램]])

**교과 내용 전문성이 GenAI로 이어진다고 가정하지 마십시오.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury & Liu (2026)]]은 미국 연구중심대학의 교수진 127명을 [[tpack|TPACK-21]] 도구로 조사하여, 내용 지식(CK)이 기술 지식이나 기술이 통합된 어떤 영역과도 유의미한 상관이 없음을(r = .11–.15, ns) 발견했습니다. 학문적 전문성은 GenAI 통합 지식을 예측하지 않았습니다. 기술이 통합된 영역(TPK, TCK, TPACK)은 서로 매우 강하게 상관되어(r = .81–.91) 단일한 GenAI 통합 요인으로 기능할 수 있습니다. 실천적으로는 GenAI의 가능성을 각 교수진의 교과 내용에 연결하는 **전공 분야별** 활동을 통해 GenAI 통합을 쌓고, 기술이 통합된 영역을 별도의 기술로 훈련하기보다 하나의 공유된 GenAI 리터러시 기반으로 다루십시오.([[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury & Liu (2026)]])

**전공 분야별 스마트 교실 모형.** [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, Wang(2026)]]은 [[math-education|수학]] 교육학 석사 강좌를 지능형 교육 [[ai-technologies|기술]]([[automated-assessment|자동 채점]], 개인화된 권고, 다중 [[ai-feedback-quality|AI 피드백]])로 어떻게 향상할 수 있는지를 보여 줍니다. 이 기술들은 3차원 스마트 교실 프레임워크 안에서 수업 전·중·후 단계에 걸쳐 통합되었습니다. 그들의 준실험은 수업 목표 설계 역량에서 통계적으로 유의미한 향상을 발견했으며, 스마트 교육 프레임워크를 거시적 개념에서 전공 분야별 실천으로 옮기려는 [[teacher-education|교사 교육자]]와 교육 개발자를 위한 이식 가능한 **D-T-E 모형**(Disciplinary Demand–Technological Empowerment–Evaluation Loop)을 제공합니다.

**참여한 느낌이 아니라 출석을 측정합니다.** 대학 교사 64명을 대상으로 한 6개월 Intelligent-TPACK 프로그램에서 출석률이 AI 역량의 향상을 예측했고(β = .407, p = .001), 스스로 인식한 참여는 그렇지 않았습니다(β = .049, p = .692). 저자들은 이를 피상적 참여에 대비되는 구체적인 행동적 투자로 읽으며, 의미 있는 인센티브와 함께 출석을 인사고과에 연계할 것을 권고합니다([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng & Ling, 2025]]).

참여와 실질은 반대 방향으로 움직일 수 있고, 그 이유는 동기적이 아니라 구조적입니다. [[jiang-faculty-development-japan-2027|Jiang, Wang과 Taguchi (2026)]]는 일본의 참여율이 2023년 대학의 32.7%로 오르는 동안 액티브 러닝 워크숍, 동료 수업 참관, 동료 검토는 정체되거나 줄었음을 추적하고, 그 제약을 학술 개발에 지속적 전문 역할이 없다는 데서 찾습니다. 순환 보직, 겸직, 기간제 계약이 동료적 형식이 의존하는 연속성을 끊으므로, 보고해야 할 지표는 인원수와 함께 형식의 구성입니다.

**교수진 스스로의 보고에 맞추어 기준을 삼습니다.** [[watson-rainie-ai-challenge-faculty-survey-2026|Watson & Rainie (2026)]]의 미국 교수진 1,057명 설문은 프로그램 설계자가 직접 측정할 수 있는 방식으로 기관 층위가 얇다는 것을 보여 줍니다. 59%가 자신의 학교가 미래를 준비하는 학생을 위해 생성형 AI를 효과적으로 사용할 준비가 되어 있지 않다고 판단했고, 68%가 교수와 멘토링을 위해 사용하도록 교수진을 준비시키지 않았다고 말했습니다. 구조적 대응은 기관의 55%가 태스크포스를 두는 데 그친 반면, AI 리터러시를 교양 교육 성과로 둔 곳은 13%에 불과했습니다. 교수진은 정책을 기다리지 않았습니다. 기관의 것을 지목할 수 있었던 48%에 대해 87%가 직접 과제 차원의 규칙을 작성했으며, 학과 차원의 도입을 가로막는 장애로 명령이 아니라 동료의 저항(82%)과 낯섦(83%)을 꼽았습니다. 개발 프로그램에 이것은 동료 규범, 과제 차원의 공유된 정책 언어, 기관 준비도의 명시적 측정을 정책 문서에 맡겨 두지 말고 개입의 일부로 다루어야 함을 뜻합니다.

**강사의 반응은 태도가 아니라 권력의 중심을 반영합니다.** 글쓰기 강사 33명을 대상으로 한 도구적 사례 연구에서, 글로벌 GenAI 추세, 대학과 학과, 동료, 학생이라는 네 개의 다심 권력 중심이 실천을 규정했으며, 담화 권력이 제한된 시간강사는 탐지에서 용인되는 사용을 가르치는 쪽으로 이동했습니다([[zuo-instructor-power-genai-writing-2026|Zuo 등(2026)]]).

- **여섯 가지 전문적 개발 계열, 세 가지가 근거를 갖추고, 분명한 승자가 있다.** AI 지원 수업 설계에 관한 78편의 연구 검토는 문서화된 전문적 개발을 압축 내장 모듈(2주에서 4주), 학기 단위 마이크로러닝, 과제 기반 설계 주기, 협력적 대화 기반 질문 사슬, 비판적 공동 발견, [[self-directed-learning|자기주도]] 실천자 학습으로 분류합니다. 결과 근거는 **압축 내장 모듈**에서 가장 강합니다. 3주 모듈이 여섯 개 Intelligent-TPACK 영역 모두에서 중간에서 큰 효과 크기로 통계적으로 유의한 향상을 냈고, **예비 교사 436명과 통제 조건**을 둔 4주 프로그램은 코퍼스에서 가장 강한 통제된 평가입니다([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **세 가지 설계 특징이 가장 근거가 좋은 개입을 구분합니다.** 윤리를 독립 세션이 아니라 **모든 과제에 점검 지점을 둔 [[retrieval-spacing-interleaving|분산 실천]]**으로 내장하는 것, 자기보고의 불신뢰성에서 직접 동기를 얻은 **수행 기반 역량 평가**(수업 계획, 결정 로그, 마이크로티칭 활용), 그리고 프롬프트 엔지니어링을 성찰적이고 교수법에 기반한 실천으로 발전시키는 것입니다. 채택은 성과와 같은 지렛대가 아닙니다. 북수마트라의 교사 200명을 대상으로 AI 사용은 교사 성과에 직접 효과가 없었고(β = 0.112, p = .087) 조직 시민 행동이 그것을 간접적으로 매개했으므로, 협력적이고 역할 외적인 사용을 겨냥한 교수진 개발 작업이 근거가 지지하는 버전입니다([[ai-use-teacher-performance-north-sumatra-2026|Sherly 등(2027)]]). 짝을 이루는 2주 연구는 지식과 자신감의 빠른 향상을 발견하면서 편향 탐지를 가장 약한 신생 역량으로 지목했으며, 이 격차는 더 긴 모듈에서도 지속되어 윤리적 지각 능력이 기술적 친숙도보다 느리게 발달한다는 것과 일치합니다.

**규모는 문서화되었지만 교실의 변화는 아닙니다.** [[ussenbay-chemistry-teachers-ai-professional-development-2026|Ussenbay와 동료들]]은 화학 교사 105명을 6주 프로그램에 걸쳐 추적했고, [[ma-ai-corpus-language-teaching-coi-2026|Ma와 동료들]]은 28개국 언어 교사 150명 이상과 20주 온라인 프로그램을 운영했습니다. [[white-scandinavian-teachers-genai-attitudes-2026|White와 동료들]]은 GenAI 전문적 개발을 받은 스칸디나비아 교사 2,159명에서 지각된 혜택이 0.20 SD 향상했음을 측정했습니다. 각 연구는 개발이 교육자가 보고하는 것을 움직인다는 것을 보여 주지만, 어느 것도 교실로 따라 들어가 학생들이 다르게 무엇을 했는지를 측정하지 않습니다.

**교육자가 요청하는 것은 훈련보다 도제에 가깝습니다.** 그 학구 연구에서 교사 22명은 교실의 제약을 이해하는 전직 교사가 진행하는 개발, 도구가 언제 도움이 되는지에 관한 한 장짜리 안내, 그리고 둘 중 하나를 쓸 기획 시간을 요청했습니다([[dangol-relief-or-displacement-teachers-generative-ai-2026|Dangol 등]]). 한편 기관은 역량을 사는 대신 만드는 쪽을 택하고 있습니다. 전략에 인력 기술이 포함된 기관 가운데 69%가 기존 교직원과 교수진의 역량을 높이고 있습니다([[robert-educause-impact-ai-work-higher-education-2026|EDUCAUSE, 2026]]).

**개발의 부재는 눈에 보이는 결과를 낳는 정책 선택입니다.** [[rameskumar-shadow-ai-legitimized-higher-education-2027|Rameskumar와 동료들]]은 아무 지침도 도착하지 않아 스스로 규칙을 만든 교육자 20명을 인터뷰했고, [[bodek-prompted-to-explore-microlearning-2026|Bodek]]은 교수진이 실제로 가진 시간에 맞추어 만든 마이크로러닝 모형을 서술합니다. 개발을 일회성 행사가 아니라 기관 지원의 반복되는 한 층으로 다루는 프로그램들이 그 차이를 보고합니다([[aalhe-capacity-disposition-genai-assessment-2026|AALHE]]).

**환경은 개발의 형태를 바꾸지, 그 필요를 바꾸지 않습니다.** 의학 교육에서 AI 레지던시는 교수진 개발과 공동 학습을 부가물이 아니라 메커니즘으로 다룹니다([[bursic-ai-residency-education-curriculum-2026|Bursic 등]]). 유아기 자료 86건에 대한 검토는 교육자 개발을 네 가지 주제 가운데 하나로 꼽습니다([[early-childhood-ai-holistic-competencies-review-2026|그 검토]]). CTE 갱신은 교육과정 변화가 역량 격차를 드러내면서 교수진 개발로 손을 뻗습니다([[wang-legacy-curriculum-ai-cte-renewal-2026|Wang]]). 그리고 교사 146명 가운데 전문적 개발 참여가 동기와 GenAI 사용 의도 사이의 연결을 매개했습니다([[yuan-teacher-need-satisfaction-genai-2026|Yuan 등]]).

코호트 모형의 실행 사례가 대학 도서관에서 나옵니다. [[jordan-faculty-ai-oer-creation-2025|Jordan 등(2025)]]은 8주 프로그램에 교수진 7명에게 스티펜드를 지급했고, 그 프로그램은 4주 교육, 독립 프로젝트 개발, 동료 피드백을 결합했으며 Knowles의 성인 학습 원리와 CLEAR 프롬프트 프레임워크에 기반했습니다. 이득은 AI 친숙도에서 완만했고 OER 친숙도에서 더 컸으며, 저자들은 스티펜드와 시간강사가 급여를 받을 수 있게 한 노조 협약을 행정이 아니라 개입의 일부로 다룹니다.

## 흔한 오해

**"기술 워크숍이 교육 개발에 필요한 개입이다."** 준비도는 개별 결함이 아니라 사회기술적 정렬 문제이며, 그래서 독립적인 "AI 워크숍"은 그것이 다루어야 할 필요에 미치지 못합니다. 그 질문을 직접 다룬 프로그램은 교육, 보건 과학, 경영 등 여러 프로그램의 교수진 10명을 정체성 수준의 작업으로 이끈 **6주 여름 집중 프로그램**이었습니다. 기간과 집단 구성은 그 설계에서 부수적인 것이 아니라, 그것을 기능 투어와 구별하는 것입니다.

**"더 명확한 기관 지침이 교수진의 불편함을 해소할 것이다."** 지침은 도움이 되지만 문제에 닿지는 않습니다. 몰타의 한 대학에서 명확한 기관 지침을 인식한 교직원은 **31.2%**뿐이었고, 지침 명확성과 낮은 죄의식 사이의 상관은 **약했습니다(r = −.25, p = .010)**. 그 규모에서 약한 관계라는 것은 상명하달식 명령이 이 논문이 부분적으로 정서적이고 정체성에 기반한 문제로 읽는 것을 해결할 수 없다는 뜻입니다. 그들이 설명하는 분산의 5분의 1은 중요한 5분의 1이 아닙니다.

**"AI 사용에 대한 죄의식은 규칙 위반을 뜻한다."** 그것은 공개가 아니라 은폐를 따라갑니다. 불편함 때문에 AI 사용을 제한하는 것은 금지된 행동이 아니라 그것을 숨기는 것과 상관되었습니다. 따라서 죄의식을 부정행위의 증거로 읽는 것은 그 출처를 잘못 짚는 것이며, 준수 신호로 다루면 행동을 더 시야 밖으로 밀어냅니다.

**"설문 응답률이 낮다는 것은 교수진이 강한 느낌을 갖지 않는다는 뜻이다."** 이 논문은 **응답 109건(3.5% 비율)**을 윤리 논쟁의 상태에 관해 그 자체로 정보를 준다고 읽습니다. 불편함에 관한 질문에 대한 낮은 응답은 그 불편함의 부재가 아니라 그 불편함에 관한 발견입니다. 그리고 순전히 기술 향상으로 틀 지어진 GenAI 통합은 일부 교수진이 실제로 던지고 있는 정체성 질문, 즉 GenAI 세상에서 가르침의 목적이 무엇인가를 놓칩니다.

## 연결된 개념

- [[teacher-ai-competency]]
- [[teacher-role]]
- [[ai-literacy]]
- [[educational-policy-ai]]
- [[higher-ed]]
- [[k-12]]
- [[learning-design]]
- [[curriculum-design]]
- [[professional-training]]
- [[teacher-education]]
- [[learning-sciences]]
- [[educational-technology-developers]]
- [[stakeholders]] — Umbrella: people and audiences in AI education (learners, teachers, designers, administrators, policymakers)
- [[metaphors-and-analogies]] — 교수진 개발에서의 은유 이끌어내기와 유추 설계

## 연결된 문서

- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — 생성형 AI 정렬 조언에 관한 비판적 담론 분석: 개발자가 기술 트레이너로 재규정됨- [[jordan-faculty-ai-oer-creation-2025]] — 프롬프트에서 실천으로: AI 지원 OER 제작을 탐구하는 교수자 중심 이니셔티브 (Jordan 등, 2025)
- [[crompton-faculty-technology-integration-standards-2026]] — 기술 통합을 위한 교수 표준(DBR)
- [[bilgic-sever-ethical-dimensions-ai-higher-ed-2026]] — AI의 윤리적 차원: 교수와 학생의 견해
- [[nicola-richmond-programwide-assessment-genai-2025]]
- [[engineering-faculty-metaphors-ai-understanding-2026]] — 공학계 교수의 은유가 AI 이해를 어떻게 구성하고 제약하는가
- [[fear-awe-genai-metaphor-workshops-2025]] — Fear and Awe: 은유를 통해 생성형 AI 이해하기(교수·직원·학생 은유 워크숍)
- [[governing-unseen-ai-literacy-language-teachers-2026]] — 보이지 않는 것의 통치: 언어 교사들의 AI 리터러시
- [[sangwa-epiq-ai-faculty-readiness-2026]]
- [[teacher-ai-adoption-confidence]]
- [[institutional-change-framework-ai]]
- [[genai-policies-higher-ed-computing]]
- [[ai-tpack-preservice-math-teachers]]
- [[crewscaler-ai-upskilling-framework]]
- [[ai-assessment-scale-reform]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[genai-pd-ai-pck-learning-gain-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[laidlaw-genai-identity-crisis-faculty-2026]] — 기술 격차가 아닌 정체성 위기로서의 생성형 AI
- [[zuo-instructor-power-genai-writing-2026]] — 생성형 AI로 글쓰기를 다루는 대학 교수들이 인식한 권력 관계 (Zuo, Xu & Dunning 2026)
- [[reflective-triangle-model-teacher-ai-2026]] — 인지적 매개자로서의 AI: 성찰 삼각형 모형
- [[sutedjo-faculty-genai-tpack-21-2026]] — 생성형 AI를 위한 교수 자기인식 TPACK-21 지식 (Sutedjo, Chowdhury & Liu 2026)
- [[intelligent-tpack-pd-intervention-hongkong-2025]] — Intelligent-TPACK 교수개발: 출석은 향상을 예측하지만 자기 인식 참여는 예측하지 못함
- [[instructional-design-proficiency-masters-math-2026]] — 수학에서 교육학 석사(M.Ed.)의 수업 설계 역량을 향상시키는 스마트 교실 모형과 D-T-E 루프 (Zhu et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — AI가 설계한 차등화 집단 활동에서의 역할 구조 (Talebzadeh 2026)
- [[farazouli-navigating-uncertainty-teachers-genai-2026]] — GAI에 관한 대학 교수들의 경험과 인식: 취약성, 평가에 대한 재고, 위험에 처한 학생 학습 (Farazouli et al. 2026)
- [[chick-faculty-development-ethical-ai-2026]] — 두려움에서 혁신으로: 6주 교수 연수, 공생 교수법, 그리고 제공하지 못한 제도적 조건
- [[vassallo-ai-guilt-complex-faculty-2026]] — The AI Guilt Complex: 학술 직원의 예상 죄의식, 은폐, 경력 단계별 차이 (Vassallo 2026)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 미국 교수 1,057명에 대한 AAC&U/Elon 설문: 제도적 미준비, 취약한 거버넌스, 87%/48% 정책 격차 (Watson & Rainie 2026)
- [[beyond-the-algorithm-academic-developers-digital-mediators-2026]] — 글로벌 사우스 고등교육에서 디지털 매개자로서의 학술 개발자: 사회기술적 실천으로서의 개발
- [[physics-faculty-learning-community-ai-2026]] — 불확실한 시대에 AI를 효과적으로 활용하기 위한 워크숍 시리즈: 물리학 교수 학습 공동체 구축

- [[faculty-ai-well-being-social-supports-2026]] — 교수의 AI 웰빙은 기술적 자기효능감이 아닌 AI 리터러시를 따름
- [[ai-competence-framework-landscape-2026]] — 채택하기 전에 프레임워크의 수준이 무엇을 설명하는지 확인하기

- [[fajardo-ramos-teacher-education-ai-agenda-2026]] — 교육이 AI 의제를 정할 수 있는가? 교사 교육에서의 시뮬레이션된 혁신과 교수법적 방향 설정
- [[roe-perkins-furze-metaphors-critical-ai-literacy-2025]] — 비판적 AI 리터러시를 가르치기 위한 네 가지 기준과 네 가지 은유
- [[tian-transnational-faculty-development-governance-2027]] — 초국적 교수진 개발: 연결성은 일회적이고, 조정이 과제다
- [[chen-future-faculty-development-ai-2027]] — 일곱 교사 역할, 두 가지 보편적 기초, 개발 단위로서의 교수팀
- [[ji-judgement-space-dialogic-inquiry-2027]] — 판단 공간, 대화적 탐구, 그리고 판단이 도구로 옮겨간 지점에 대한 세 열 감사
- [[ho-invariant-core-faculty-development-2027]] — 불변의 핵심, 변하는 가장자리: 기술보다 앞서는 학습 기제
- [[jiang-faculty-development-japan-2027]] — 일본의 이중 트랙 FD: 참여는 늘었지만 동료적 형식은 그렇지 않았다
- [[ussenbay-chemistry-teachers-ai-professional-development-2026]] — 6주 프로그램의 화학 교사 105명
- [[ma-ai-corpus-language-teaching-coi-2026]] — 28개국 언어 교사 150명 이상과 20주
- [[white-scandinavian-teachers-genai-attitudes-2026]] — 스칸디나비아 교사 2,159명, 지각된 혜택 0.20 SD 향상
- [[dangol-relief-or-displacement-teachers-generative-ai-2026]] — 전직 교사가 이끄는 개발을 요청한 교사 22명
- [[robert-educause-impact-ai-work-higher-education-2026]] — 기존 교직원과 교수진의 역량 강화 69%
- [[rameskumar-shadow-ai-legitimized-higher-education-2027]] — 지침이 없던 곳에서 섀도 AI를 정당화한 교육자 20명
- [[bodek-prompted-to-explore-microlearning-2026]] — 생성형 AI를 위한 마이크로러닝 교수진 개발 모형
- [[aalhe-capacity-disposition-genai-assessment-2026]] — 다섯 지원 층 가운데 하나로서의 반복적 개발
- [[bursic-ai-residency-education-curriculum-2026]] — 의학 교육에서의 AI 레지던시
- [[early-childhood-ai-holistic-competencies-review-2026]] — 자료 86건, 네 주제 가운데 하나인 교육자 개발
- [[wang-legacy-curriculum-ai-cte-renewal-2026]] — 역량 격차가 교수진 개발과 채용 결정을 이끈다
- [[yuan-teacher-need-satisfaction-genai-2026]] — GenAI 학습 프로그램 후 교사 146명, 욕구가 참여를 매개한다
- [[sheridan-teaching-academics-genai-plans-2026]] — 20개 학문 분야, 24개국: 학술인은 자동화를 먼저 계획하고 시간과 정책을 제약으로 지목 (Sheridan et al. 2026)
