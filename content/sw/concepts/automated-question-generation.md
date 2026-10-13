---
connected_resources: [teacherserver]
title: Uundaji wa Maswali wa Kiotomatiki
created: "2026-10-13T06:10:00-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
reviewed_by: [editor]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

> **Uundaji wa Maswali wa Kiotomatiki (AQG)** — matumizi ya AI, hasa NLP na [[llm|miundo mikubwa ya lugha (LLM)]], kuzalisha vipengele vya [[assessment|tathmini ya elimu]] (maswali ya chaguo-nyingi, majibu mafupi, jaza-nafasi, upangaji kodi, na maswali ya utendaji) kiotomatiki kutoka vyanzo vya nyenzo au malengo ya kujifunza. AQG inawezesha tathmini kwa kiwango kikubwa — kuzalisha maswali ya [[formative-assessment|ya awali]], mazoezi yanayobadilika, na vipengele vya mazoezi — lakini ubora hutofautiana pakubwa kati ya aina za vipengele na unahitaji uthibitishaji ili kuepuka maswali yaliyoongozwa na mawazo yasiyo sahihi au yaliyowekwa vibaya. Ni sehemu kuu ya [[automated-assessment]] na kiwezeshaji muhimu cha [[adaptive-learning]] na [[personalized-learning]].

## Maswali ya Kutafakari

- Uundaji wa maswali wa kiotomatiki huzalisha vipengele vya tathmini kutoka nyenzo kwa kiwango kikubwa — lakini ukurasa huu unaonya kuwa ubora hutofautiana pakubwa kati ya aina za vipengele. Kabla ya kusoma, ni aina ipi unadhani AI inazalisha kwa uaminifu zaidi: chaguo-nyingi, majibu mafupi, au kodi — na kwa nini?
- Changamoto kuu ni udhibiti wa ubora: LLM zinaweza kuzalisha maswali yasiyo sahihi kwa ukweli. Mtiririko mmoja ulipunguza mawazo yasiyo sahihi kwa 62% kwa kuongeza mzunguko wa zalisha-kisha-thibitisha-boresha. Kwa nini unafikiri kuwa kuuliza AI ithibitishe maswali yake yenyewe kungeboresha kwa njia ya kweli badala ya kuidhinisha tu matokeo yake yenyewe?
- [[research-methods-aied|Utafiti]] unaonyesha kuwa maswali yaliyozalishwa yanaweza kuelekea kwenye kufikiri cha kiwango cha chini (kukumbuka) isipokuwa yameundwa wazi kwa matokeo ya kiwango cha juu. Kama ungetumia AI kujenga vipengele vya mazoezi, ungejua vipi kama vilikuwa vikifundisha ufahamu halisi au kukariri tu?
- Urekebishaji wa ugumu ni muhimu: makadirio ya ugumu ya AI yanahusiana kwa nguvu na utendaji wa mwanafunzi, lakini ukurasa unatoa onyo dhidi ya matumizi mabaya ya hatua kuu. Ni lini swali ambalo AI inahukumu kuwa la 'ugumu sahihi' bado likiwa swali lisilo sahihi kuulizwa kwa mwanafunzi fulani?
- Uundaji unaozingatia [[accessibility]] hujenga maswali yaliyorekebishwa kwa ajili ya wanafunzi Wasio na Uwezo wa Kusikia na Wenye Ulemavu wa Kusikia, na unakamilishwa kwa ushirikiano na jamii inayolengwa. Mfano huu unapendekeza nini kuhusu kwa nini uundaji wa maswali hauwezi kutendeka kama tatizo la kiufundi tu au la maudhui tu?

## Utangulizi

Uundaji wa maswali wa kiotomatiki ni muhimu kwa sababu vipengele vya tathmini ni ghali kuunda kwa mkono, na AI inaweza kuvizalisha haraka na kwa kiwango kikubwa. Hata hivyo, utafiti wa hifadhi ya maarifa unaonyesha kuwa vipengele vilivyozalishwa vinapaswa kuthibitishwa kwa usahihi, uhusiano, na ugumu, na kuwa aina tofauti za vipengele (MCQ, majibu mafupi, kodi) hutofautiana katika jinsi zinavyoweza kuzalishwa kwa uaminifu. AQG kwa hivyo ipo katika mkutano wa [[generative-ai|AI ya kizazi]], [[educational-nlp|NLP ya elimu]], na [[educational-measurement]].

## Mbinu za uundaji wa maswali

Utafiti wa hifadhi ya maarifa unaonyesha mbinu kadhaa:

- **Mtiririko wa zalisha-kisha-thibitisha:** [[generate-then-validate-question-gen|Generate-Then-Validate]] inaleta mzunguko wa uzalishaji → uthibitishaji → uboreshaji unaopunguza mawazo yasiyo sahihi ya LLM kwa 62% ikilinganishwa na uzalishaji wa moja kwa moja, na kufikia usahihi wa 89% kwenye seti za data za [[stem-education|STEM]] na maboresho ya 23% katika uhusiano. Hatua ya uthibitishaji huchuja vipengele batili au vya ubora wa chini, na vipengele vilivyoshindwa husababisha uzalishaji upya kwa ilani za marekebisho.
- **Uundaji unaotegemea ufuatiliaji wa maarifa:** [[kt4eqg-personalized-question-generation|KT4EQG]] huzalisha maswali ya mazoezi ya kibinafsi yaliyoongozwa na [[knowledge-tracing|ufuatiliaji wa maarifa]], ikirekebisha vipengele kulingana na hali ya maarifa ya kila mwanafunzi badala ya kuzalisha maswali ya jumla.
- **Vitu vya kuchanganya vilivyofungwa na dhana potofu kama lebo za uchunguzi:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He na wenzake, 2026)]] hufunga kila kitu cha kuchanganya na dhana potofu moja iliyochimbwa na kuweka chaguo moja tu lililo sahihi, ili kipengele kizalishwe na malengo yake ya uchunguzi yamejengwa ndani na kisha kipimwe kwa hakika bila wito wa [[llm]] — karibu sekunde 7.6 na karibu \\$0.005 kwa kila mzunguko kwenye matumizi halisi ya waandishi, dhidi ya karibu sekunde 32 na \\$0.015 kwa mzunguko wa swali la jibu fupi lililopimwa na LLM. Ufungaji ni bora tu kama lebo za dhana potofu zinazoungana nacho, kwa kuwa dhana potofu zilizochimbwa [[misconceptions]] zililingana na dhana potofu za lengo kwa F1 ≈ 0.56, na chaguo zake za vipengele zilihudumia ujuzi dhaifu kwa kweli mara 0.72.
- **Uundaji unaozingatia kina cha kiutambuzi:** [[llm-educational-question-cognitive-depth|Kutathmini kina cha kiutambuzi cha maswali yaliyozalishwa na LLM]] inachunguza kama vipengele vilivyozalishwa vinagusa [[critical-thinking|kufikiri cha kiwango cha juu]] (kuumba, kutathmini) au kukariri tu, ikihusiana na uainishaji wa Bloom na [[educational-measurement]].
- **Matatizo ya kesi yaliyo na makosa yaliyowekwa kwa tathmini inayorudiwa:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi na wenzake (2026)]] walizalisha matatizo mapya ya mantiki ya uchunguzi ya kiwango cha daraja (HDR) — kesi fupi zinazobeba makosa yaliyowekwa kwa makusudi ambayo wanafunzi wanapaswa kuyatafuta na kueleza — na waligundua kuwa vipengele vilivyoandikwa na GPT-4o vililingana na vile vilivyoandikwa na binadamu katika uthabiti wa ndani (Cronbach's α = 0.78 kwa vyote viwili) na ugumu, na majaribio sahihi ya Fisher hawakupata tofauti kubwa ya mgawanyo wa alama kati ya washiriki 100. Muundo huu huchanganya mahitaji ya [[critical-thinking|kufikiri cha kiwango cha juu]] na jibu lililozuiwa, ili majibu yakusanyike na upimaji uwe wa kurudiwa. Motisha ya uzalishaji ni matumizi tena ya vipengele: kutumia tena kesi moja kualika kumbukumbu na matumizi tena ya majibu, wakati kesi zilizozalishwa zilizo sawa kwa muundo lakini tofauti kwa muktadha zinazuia upendeleo wa kipengele katika kupima upya.
- **Mtiririko wa [[pedagogy|kitaaluma]]:** [[slidesqaqa-pedagogical-question-generation|Uundaji wa maswali na majibu ya slaidi]] hutumia mtiririko wa awamu nyingi kwa uundaji wa maswali wenye msingi wa kitaaluma kutoka nyenzo za kozi.
- **Uundaji unaozingatia upatikanaji:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen na wenzake]] wanabuni mfumo wa uundaji wa maswali unaoendeshwa na LLM kwa [[inclusive-learning|wanafunzi Wasio na Uwezo wa Kusikia na Wenye Ulemavu wa Kusikia]], wakileta mikakati ya maswali ya Kuona na Hisia yanayolenga nyakati za ugumu wa kuona au hisia katika video, na kuboresha maswali kwa njia ya kurudiwa pamoja na jamii inayolengwa ili kuhakikisha upatikanaji wa lugha.
- **Mifumo ya RAG inayoshirikisha binadamu:** [[code-gen|CODE-GEN]] inachanganya [[rag|uzalishaji unaoongozwa na urejeshaji]] na ukaguzi wa [[human-in-the-loop-ai|binadamu katika mzunguko]] kwa kuzalisha [[automated-assessment|tathmini za chaguo-nyingi]].
- **[[benchmark|Vipimo vya viwango]] na tathmini:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] hutoa kiwango cha vitu vya kupiga kitendawili vya kisayansi/hisabati kwa kutathmini mifumo ya uundaji wa maswali na mantiki.

## Uthibitishaji na ubora

Changamoto kuu katika AQG ni **udhibiti wa ubora**:

- **Pima mchakato wa kutatua, si mstari wa msingi:** [[proiqa-math-item-quality-assessment-2026|ProIQA]] inadai kuwa ukaguzi wa ubora wa kipengele unapaswa kufuata kile mtaalamu hufanya — kuiga suluhisho — na inajenga mti wa mantiki uliozalishwa na LLM kwa kila kipengele, uliothibitishwa kwa usahihi wa kihisabati kwa 90.38–97.80%, kisha inaweka muundo wake wa utegemezi na mtandao wa neva wa [[machine-learning|mfano wa mti]] pamoja na mtazamo wa mstari wa msingi pekee. Inaripoti mazao ya wastani juu ya mbinu ya pili bora ya 7.5% katika tathmini ya dhana, 6.3% katika makadirio ya ugumu na 19.5% katika tathmini ya uwezo, na uchanganuzi wake wa makosa unataja hali ya kushindwa inayostahili kuzingatiwa: mti wa mantiki wenye mantiki sahihi lakini mdogo kwa muundo unaifanya kipengele ngumu kuonekana rahisi.
- **Hatari ya mawazo yasiyo sahihi:** LLM zinaweza kuzalisha maswali yasiyo sahihi kwa ukweli. [[generate-then-validate-question-gen|Generate-Then-Validate]] inaonyesha kuwa awamu maalum ya uthibitishaji inapunguza hii kwa kasi, na [[hallucination-risk|hatari ya mawazo yasiyo sahihi]] ni wasiwasi unaotambulika kila mahali.
- **Urekebishaji wa ugumu:** maswali yaliyozalishwa yanapaswa kurekebishwa kwa ugumu unaofaa. [[llm-difficulty-calibration-programming-exams-2026|Utafiti wa urekebishaji wa ugumu]] unaonyesha kuwa makadirio ya ugumu ya AI yanahusiana kwa nguvu na utendaji wa mwanafunzi (kwa mfano, rho ≈ −0.87), na kuwezesha uteuzi bora wa vipengele — huku ukionya dhidi ya [[ai-misuse-learning-harm|matumizi mabaya]] ya hatua kuu. [[razavi-powers-item-difficulty-llm-2026|Razavi na Powers (2026)]] wanapanua hii kwa vipengele vya hisabati na kusoma vya K-5 (N = 5170) vilivyorekebishwa chini ya mfano wa IRT wa Rasch: ukadiriaji wa ugumu wa hatua-moja wa GPT-4o ulihusiana kwa kiwango cha wastani-hadi-kuu na ugumu halisi (r = 0.83 hisabati, r = 0.81 kusoma) lakini ulitofautiana kwa darasa, wakati mbinu inayotegemea vipengele — vipengele vya kiutambuzi na lugha vilivyotolewa na LLM na kuliwa katika mifano ya mti — ilifikia uhusiano hadi r = 0.87. Utoaji wa vipengele vilivyo na muundo wa utafiti (kwa mfano, ugumu wa sintaksia, [[cognitive-offloading|mzigo wa kiutambuzi]], ugumu wa vitu vya kuchanganya) na mtiririko wake wa vitendo wa hatua saba unatoa kigezo kwa ajili ya kurekebisha vipengele vilivyozalishwa, wakati ugunduzi wake wa kizuizi cha kiwango cha madarasa ya chini na maelezo ya uwezo wa kueneza yanaonya dhidi ya matumizi ya hatua kuu.
- **Lebo za ugumu zilizozalishwa zinaweza kuwa kushindwa kwa uhalali wa muundo, si kosa la urekebishaji.** Katika vipengele 378 vilivyozalishwa, lebo za Rahisi/Wastani/Ngumu za mfumo zilifuata kiwango cha Bloom kilichozalishwa pamoja nazo (ρ=0.90) na muundo wa nje - urefu wa wastani wa mstari wa msingi ukizidi kutoka 15.9 hadi 22.1 hadi 30.2 maneno - lakini zilihussiana na ugumu wa kipengele wa uchunguzi kwa ρ=0.06 tu juu ya majibu 7,888 kutoka kwa wanafunzi 54, hali ya kurekebisha metadata iliyozalishwa dhidi ya data ya majibu badala ya kuamini lebo zilizozalishwa pamoja ([[student-llm-use-ai-question-difficulty-data-science-2026|An na Wang (2026)]]).
- **Uthibitishaji wa kisaikolojia wa shamba kwa kiwango kikubwa:** [[assessing-quality-ai-generated-exams-field-2025|Kutathmini Mitihani Iliyozalishwa na AI]] inathibitisha mtiririko wa AQG wa uboreshaji unaorudiwa (zalisha→amua→rekebisha, mtindo wa Self-Refine) katika madarasa 91 halisi ya chuo kikuu (~wanafunzi 1,686). Uchanganuzi wa [[item-response-theory|IRT]] wa 2PL wa daraja la Bayesian unaonyesha kuwa maswali yaliyozalishwa na AI yanafanya kazi sawa na vipengele vya mitihani iliyoandikwa na wataalam — rahisi zaidi kwa kiasi (β̄ = −0.45 dhidi ya 0.35) lakini kinatofautisha zaidi kidogo (ᾱ = 1.3 dhidi ya 1.2), na taarifa za juu zaidi za mlima wa mtihani (uaminifu 0.79 dhidi ya 0.72) — ikionyesha kuwa AQG inaweza kuzalisha tathmini zinazofaa kwa kozi na zenye msingi wa kisaikolojia kwa kiwango kikubwa.
- Uwiano wa wastani wa kisaikolojia unaweza kuficha upungufu wa kiwango cha kipengele: ukaguzi wa upeo wa ripoti 153 za elimu ya tiba uligundua kuwa uzalishaji wa vipengele na AI nyakati fulani ulilingana na ugumu na utofautishaji wa binadamu, lakini katika ulinganishi mmoja wa fiziolojia ni vipengele 9 tu katika 40 vilivyozalishwa na ChatGPT vilivyotimiza vigezo vyote bora dhidi ya vipengele 19 katika 40 vya wanafunzi wa tiba ([[genai-medical-education-transformation-review-2026|Zhao na wenzake (2026)]]).
- **Kutambulika katika mtihani wa moja kwa moja, na kile ukaguzi unaondoa hasa:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt na wenzake (2026)]] waliweka maswali 30 ya MCQ yaliyozalishwa na AI na 30 ya Mtihani wa Kitaifa wa Leseni katika mtihani wa kibao uliopimwa unaochukuliwa na wanafunzi 119 wa mwaka wa tano wa [[medical-education|elimu ya tiba]], na vipengele vya AI vilizaliwa kutoka nyenzo za kozi yenyewe na ChatGPT-4o na Gemini 1.5 Pro kupitia jopo la wataalamu lililikubali 82% yake na kuondoa 18.2% kama visivyoweza kutumika. Ugawaji wa vyanzo kwa wanafunzi haukutofautiana kati ya aina mbili za kipengele, na ugumu wa kipengele, mgawanyo wa vitu vya kuchanganya na ulinganifu unaoonekana wa mtaala vilikuwa visivyo na tofauti ya kihisabati — matokeo ya *kutambulika* badala ya matokeo ya ubora, na sababu ni kwamba waandishi wanaelezea faida ya mtiririko kama kusogeza juhudi za mwalimu kutoka kuandaa kwenda kukagua badala ya kuiondoa. Tofauti moja ya uchunguzi ilidumu: vipengele vya Gemini vilikuwa vigumu kuliko vipengele vya mtihani wa leseni (p = 0.028), wakati vipengele vya ChatGPT havikuwa (p = 0.984).
- **Kutegemea kazi:** uaminifu wa uzalishaji unatofautiana na aina ya kipengele. [[cong-confidence-asag-2026|Upimaji wa majibu mafupi]] na [[self-referential-l2-writing-llm-assessment|tathmini ya uandishi wa kielelezo]] zinaonyesha kuwa vipengele vya jibu-wazi na uandishi ni vigumu kuzalisha na kupima kwa uaminifu kuliko vipengele vilivyo na muundo.
- **Ubora wa kiutambuzi:** [[llm-educational-question-cognitive-depth|tathmini ya kina cha kiutambuzi]] inaonyesha kuwa vipengele vilivyozalishwa vinaweza kuelekea kwenye kufikiri cha kiwango cha chini isipokuwa yameundwa wazi kwa matokeo ya kiwango cha juu.
- **Kuweka lebo kiotomatiki kwa kiwango cha kiutambuzi hahamishi hadi vipengele vilivyozalishwa.** Kigezo cha uainishaji wa uainishaji wa Bloom kilichofunzwa kwenye benki ya vipengele iliyochaguliwa kilishindwa kwenye maswali yaliyozalishwa na AI — macro F1 kutoka 0.88 katika usambazaji hadi 0.48 na 0.20 nje yake — kwa sababu vipengele vilivyozalishwa vina maneno mengi zaidi kwa wastani (18.2 dhidi ya 9.3) na vinashiriki median 10.5% tu ya vitenzi vyao vya kichochezi vya Bloom na mkusanyiko uliochaguliwa, dhidi ya 35.1% kwa seti iliyo karibu zaidi; kufunza upya kwa data iliyowekewa lebo ya nje ya usambazaji ilikuwa faida moja kubwa zaidi, kwa kizingiti cha karibu N > 1,000 sampuli zilizowekewa lebo ([[bloom-classifier-ai-assisted-questions-2026|Castanares na wenzake, 2026]]).

## Jukumu katika kujifunza kwa kubadilika na kibinafsi

AQG ni kiwezeshaji muhimu cha kujifunza [[adaptive-learning|kwa kubadilika]] na [[personalized-learning|kibinafsi]]: inazalisha benki kubwa za vipengele ambazo walezi wanaobadilika huchukua kutoka humo, na — ikiwa imechanganywa na [[knowledge-tracing|ufuatiliaji wa maarifa]] au [[student-modeling|ubunifu wa mwanafunzi]] — inaweza kuzalisha vipengele vilivyorekebishwa kulingana na hali za maarifa za wanafunzi binafsi ([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|Ubinafsishaji unaotegemea masilahi]] unaonyesha kuwa AQG inaweza pia kurekebisha maswali kulingana na masilahi ya mwanafunzi, si ugumu tu.

## Athari kwa AI katika elimu

- **Zalisha kisha thibitisha:** changanya kila wakati uzalishaji na awamu ya uthibitishaji/uboresho ili kudhibiti mawazo yasiyo sahihi na kuhakikisha uhusiano.
- **Linganisha aina ya kipengele na uaminifu:** tumia AQG kwa aina za vipengele vilivyo na muundo (MCQ, jaza-nafasi, kodi) ambapo inaaminika zaidi, na tumia uthibitishaji wa makini kwa vipengele vya jibu-wazi na uandishi.
- **Buni kwa kina cha kiutambuzi:** ilani na mitiririko vinapaswa kulenga kufikiri cha kiwango cha juu, si kukariri tu, ili kusaidia kujifunza halisi.
- **Rekebisha ugumu:** tumia makadirio ya ugumu ya AI kuteua vipengele vyenye changamoto inayofaa, na uthibitishaji mkubwa kabla ya matumizi ya hatua kuu.
- **Binafsisha kupitia mifano ya mwanafunzi:** changanya AQG na ufuatiliaji wa maarifa na mifano ya masilahi ili kuzalisha vipengele vinavyobadilika na vya kibinafsi.

## Dhana Zinazohusiana

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Makala Zinazohusiana

- [[genai-medical-education-transformation-review-2026]] — Ukaguzi wa upeo wa ripoti 153 za elimu ya tiba juu ya uzalishaji wa vipengele na AI ikilinganishwa na ubora wa vipengele vya wanafunzi wa tiba

- [[assessing-quality-ai-generated-exams-field-2025]] — Uthibitishaji wa shamba kwa kiwango kikubwa wa ubora wa mtihani uliozalishwa na AI kupitia IRT
- [[generate-then-validate-question-gen]] — Uundaji wa maswali wa Generate-Then-Validate
- [[kt4eqg-personalized-question-generation]] — Uundaji wa maswali ya kibinafsi kupitia ufuatiliaji wa maarifa
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Uundaji wa maswali unaoendeshwa na LLM kwa wanafunzi Wasio na Uwezo wa Kusikia na Wenye Ulemavu wa Kusikia
- [[llm-educational-question-cognitive-depth]] — Kina cha kiutambuzi cha maswali yaliyozalishwa na LLM
- [[slidesqaqa-pedagogical-question-generation]] — Uundaji wa maswali na majibu ya slaidi ya kitaaluma
- [[code-gen]] — CODE-GEN: uundaji wa maswali unaotegemea RAG na binadamu katika mzunguko
- [[nsmq-riddles-science-math-benchmark]] — Vipimo vya viwango vya NSMQ Riddles
- [[taklif-ai-interest-based-personalized-assignments]] — Kazi za kibinafsi zinazotegemea masilahi
- [[llm-difficulty-calibration-programming-exams-2026]] — Urekebishaji wa ugumu unaotegemea LLM
- [[self-referential-l2-writing-llm-assessment]] — Tathmini ya uandishi wa kielelezo wa kurejea mwenyewe
- [[cross-dataset-bloom-question-classification]] — Uainishaji wa maswali wa Bloom kupitia seti nyingi za data
- [[llm-chatbots-cs-multiple-choice]] — Chatbot za LLM na vipengele vya chaguo-nyingi vya CS
- [[socratic-tests-conversational-assessment]] — Majaribio ya Socratic: tathmini ya mazungumzo
- [[llm-turing-test-italian-legal-exams-2026]] — Jaribio la Turing la LLM katika mitihani ya kisheria ya Kiitaliano
- [[razavi-powers-item-difficulty-llm-2026]] — Makadirio ya ugumu wa kipengele kwa kutumia LLM na mifano ya mti
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Tathmini ya Ubora wa Kipengele cha Hisabati Inayotegemea Mchakato
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: Mlezi Mwakala Anayejifunza Mwanafunzi wake katika Mzunguko wa Kujifunza Pamoja wa Binadamu–AI
- [[automated-constructive-assessment-hdr-llm-2026]] — Kiotomatiki kwa Tathmini ya Ujenzi na Miundo Mikubwa ya Lugha: Kuelekea Tathmini Inayoweza Kupanuliwa na Kurudiwa ya Uwezo wa Vitendo
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Matumizi ya LLM na Mipaka ya Ugumu wa Swali Ulioundwa na AI katika Kozi za Sayansi ya Data
- [[bloom-classifier-ai-assisted-questions-2026]] — Tathmini ya mifano iliyofunzwa awali kwa tathmini ya kitaaluma ya maswali mapya ya elimu yanayosaidiwa na AI
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Wanafunzi hawakuweza kutofautisha maswali ya MCQ yaliyozalishwa na AI na vipengele vya mtihani wa leseni katika mtihani uliopimwa, na 18.2% ya vipengele vilivyozalishwa viliondolewa katika ukaguzi (Vogt na wenzake 2026)
