---
title: Binadamu Katika Mzunguko
created: "2026-10-13T06:20:00-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
reviewed_by: [editor]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-03T03:00:33-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

> **Binadamu katika mzunguko** — muundo wa ubuni ambao mifumo ya kiufundi ya [[ai-technologies|AI]] katika elimu huchanganya kwa makusudi uzalishaji wa kiotomatiki na hukumu ya mtaalam binadamu, na hivyo kuhifadhi ubora na usalama wa [[pedagogy|kiufundi]] wa kufundisha huku ikipanua uzalishaji. Badala ya kufanya tathmini, maoni, au mafunzo yawe ya kiotomatiki kikamilifu, HITL inaweka binadamu (mkufunzi, mtaalam wa somo, au mwanafunzi) katika mzunguko wa uamuzi pale hukumu yake ina thamani ya kiambatanisho ya juu zaidi — kwa kutathmini ubora, kusuluhisha matukio ya kingo, na kulinda [[agency|wakala wa mwanafunzi]] na usalama. Swali kuu la ubuni si *kama* kujumuisha binadamu, bali *wapi* katika mtiririko wa kazi usimamizi wao unao na thamani zaidi na mgumu zaidi wa kuchukua nafasi.

## Maswali ya Kutafakari

- Swali kuu la ubuni la HITL ni si kama kujumuisha binadamu, bali wapi katika mtiririko wa kazi hukumu yao ina thamani zaidi. Katika mfumo wa tathmini au maoni ya AI, ungeishizia binadamu abaki katika mzunguko katika hatua gani?
- Masudio ya [[automated-question-generation|uzalishaji wa maswali]] ya AI yaligundua kompyuta zinashughulikia uwazi na uhalali vizuri lakini binadamu bado wanahitajika kwa vigezo vya kupotosha vilivyo na maana na maoni mazuri. Kwa nini baadhi ya sehemu za hukumu ya kielimu zinaweza kupinga uotomatiki?
- Tathmini moja iligundua LLM tatu zilitoa mapendekezo yasiyo sawa na yasiyo na hisia ya msaada wa wanafunzi — na kuhitimisha kuwa hukumu ya binadamu bado inahitajika kabla ya AI kushauri kuhusu wanafunzi. Wakati AI 'inapendekeza' msaada kwa mwanafunzi anayesonga polepole, nini kinaweza kwenda makosa ikiwa hakuna binadamu anayekagua?
- Ukurasa huu unapendekeza kuwa binadamu na algoriti hukamata aina tofauti za matatizo — otomatisha kile kinachoweza kuthibitishwa kwa usahihi, hifadhi hukumu pale nuance haiwezi kuchukuliwa. Katika mazoezi yako mwenyewe, mpaka kati ya hivi viwili uko wapi?
- Kuweka binadamu katika mzunguko kunaonyeshwa kama kulinda wakala na usalama wa mwanafunzi, si ubora tu. Uotomatiki kamili unawezaje kubadilisha kwa namna ya siri hisia ya wanafunzi kuhusu nani anayewajibika kwa kujifunza kwao?
- Ikiwa AI inakuwa huru zaidi, usimamizi wa HITL unaelezewwa kama ulinzi msingi wa usalama. Katika kiwango gani cha uhuru wa AI ungehisi kutokuwa na raha — na hisia hiyo ya kutokuwa na raha inakuambia nini kuhusu mahali ambapo usimamizi unapaswa kuwa?

## Utangulizi

HITL ni jibu kwa mipaka na hatari za [[ai-education|AI huri kabisa katika elimu]]: mifumo ya kiotomatiki inaweza kutoa kwa kiwango kikubwa lakini haina hukumu ya muktadha, [[ethics|ya maadili]], na ya kiufundi wa kufundisha ambayo mkufunzi na wataalam huleta. Utekelezaji mbili wa hivi karibuni wanaonyesha miundo tofauti:

Msaada wa kuagiza ni kikoa ambapo usimamizi wa binadamu unadaiwa kwa kiwango kinachokua kuwa si wa hiari. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] walitathmini kama LLM tatu zinaweza kupendekeza mipango ya msaada wa wanafunzi kutoka kwa viashiria vya [[learning-analytics]] na waligundua hisia ndogo ya mahitaji na kutokubaliana makubwa kati ya miendo — na kuhitimisha kuwa hukumu ya binadamu katika mzunguko bado ni muhimu kabla ya [[llm]] kushauri kwa kuagiza kutumika kwa usalama na kwa maadili.

Muundo wa tatu unaweka hukumu ya binadamu *mkondoni* wa mfano badala ya katika matokeo yake. Katika [[lee-learner-question-types-ai-education-2026|utafiti wa Lee, Atif & Kang (2026)]] wa uainishaji wa maswali ya wanafunzi, wataalam watatu wa kiwango cha udaktari walitawala mtiririko mzima wa kazi: waliboresha ufafanuzi wa kiendeshaji kwa kila jukumu la [[constructivist]], walitia lebo kwa uhuru hadi kappa ya Fleiss ilipanda kutoka 0.60 hadi 0.83 baada ya kusuluhisha tofauti, na walithibitisha vipengele vilivyotafsiriwa nyuma na vilivyopitiwa maneno yaliyotumika kusawazisha seti ya mafunzo.

## CODE-GEN: Uzalishaji wa MCQ wa Binadamu Katika Mzunguko

Duan et al. (2026) walijenga mfumo wa [[agentic-ai|wakala]] unaotegemea [[rag]] wenye mawakala wawili:
- **Wakala wa Kuzalisha** — Hutoa maswali ya kuchanganua ya chaguo nyingi yanayolingana na malengo ya kujifunza ya kozi
- **Wakala wa Kuthibitisha** — Hutathmini ubora katika vipimo saba vya kiufundi wa kufundisha

**Tathmini:** SME 6 walihukumu maswali 288 yaliyotolewa na AI. Viwango vya mafanikio vilivyothibitishwa na binadamu: **79.9%–98.6%** katika vipimo.

**Vipimo Vyenye Nguvu ya AI (mzigo mdogo wa binadamu):**
- Uwazi wa swali, uhalali wa kodi, ulingano wa dhana, uhalali wa jibu sahihi

**Vipimo Vinavyohitaji Binadamu (mzigo mkubwa wa binadamu):**
- Ubuni wa kigezo cha kupotosha chenye maana ya kiufundi wa kufundisha
- [[feedback]] ya maelezo ya ubora wa juu

Ufahamu wa mkakati: Juhudi za binadamu zinapaswa kuzingika pale hukumu ya kufundisha haiwezi kuchukuliwa; uthibitishaji wa kikokotozi unaweza kufanywa kiotomatiki kikamilifu.

## MAIC: Uzalishaji wa Hati za Binadamu Katika Mzunguko

Yu et al. (2024) walipeleka darasa la mawakala wengi (Wakala wa [[teacher-role|Mwalimu]], Wakala wa TA, aina za wanafunzi wenzake) katika Chuo Kikuu cha Tsinghua na wanafunzi zaidi ya 500 na rekodi za kujifunza zaidi ya 100,000. Mkufunzi binadamu hushiriki katika uzalishaji wa hati na usimamizi, na kuhakikisha kuwa kuongezeka kwa wingi wa AI hakuchukui nafasi ya utaalam wa kiufundi wa kufundisha.

## PedaCo: Ulindezi wa Pande Mbili kwa Uzalishaji wa Video ya AI

Kim, Baek, na Kwak (2026) wanapanua HITL hadi [[video-education|video ya mafunzo iliyotolewa na AI]] kupitia **PedaCo** (Uundaji wa Pamoja wa Kiufundi wa Kufundisha), mtiririko wa kazi wenye tabaka mbili za ulindezi zinazojazana na zilizojengwa juu ya *upinzani wa kanuni* unaotokana na Nadharia ya Kiakili ya Kujifunza Mitandaoni ya Mayer (CTML). **Tabaka la kwanza** linaweka binadamu katika hatua ya hati: LLM inaandaa hati, mkaguzi wa AI huwataja ukinifu unaowezekana wa CTML (mfano, "Mandhari 3 inaleta istilahi za kiufundi bila maelezo ya awali"), na mwalimu anamua kukubali, kurekebisha, au kuzalisha upya. **Tabaka la pili** linaendesha metriki za kiotomatiki baada ya usanisi kwenye mwendelezo, kurudia, mwendelezo wa muda, modality, na ubora wa picha, ambazo mwalimu huzagua. Katika utafiti wa within-subject (waelimishaji 23), mbinu ya kagua iliboresha kila kanuni ya CTML (kiwango cha wastani 3.07→3.86, p<.01), na waelimishaji walitia alama ufanisi wa uzalishaji kwa 4.26/5 — kikwazo kilichohisika kama cha kuzalisha, si cha kulemaza. Kanuni ya ubuni inaendana na muunganisho wa HITL wa hifadhi ya maarifa: binadamu na algoriti hukamata aina *tofauti* za matatizo, hivyo mifumo yenye ufanisi zaidi inaotomatisha pale uthibitishaji wa kikokotozi ni sahihi (usawazishaji wa muda) na kuhifadhi hukumu ya binadamu pale nuance ya kiufundi wa kufundisha haiwezi kuchukuliwa (sauti, kufaa kwa hadhira).

Kuweka mahali kunaweza kuwa muhimu zaidi kuliko uwepo: wataalamu walitia alama chombo cha uandishi cha Hadithi za Kijamii kuwa cha kutumika vizuri (SUS 86.8) lakini waliripoti kuwa ukaguzi ulikuja kuchelewa mno, kwa sababu vikomo vya kitamaduni na vya kliniki vilivyowekwa kabla ya uzalishaji — abaya badala ya mavazi ya magharibi ya mitaani — ni vigumu zaidi kurejesha kwa kuhariri matokeo baadaye ([[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]]).

## Kwa nini HITL ni muhimu katika zama za AI

Ubini wa binadamu katika mzunguko umekuwa wa kati katika majadiliano ya hifadhi ya maarifa ya [[agentic-ai|AI ya wakala]] na [[reducing-ai-misuse|matumizi ya AI yenye uwajibikasho]] kwa sababu kadhaa zinazokusanyika:
- **Usalama wa kiufundi wa kufundisha.** [[pedagogical-safety]] inahitaji kuwa AI yenye mamlaka halisi ya kufundisha inahifadhi usimamizi wa binadamu, hivyo makosa, upendeleo, au matokeo yenye madhara yanakamatwa kabla ya kuwafikia wanafunzi. Hii ni muhimu hasa kwa mawakala huru ambao [[agentic-ai|hufuatilia malengo kwa makusudi]].
- **Usimamizi ni nadra katika mazoezi, si tu katika nadharia.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] waligundua utawala thabiti uliowekwa ndani na usimamizi wa binadamu katika mzunguko vilioneshwa mara chache katika mifumo 474 ya kielimu ya AI ya wakala, hata ukingo wa uhuru wa kazi moja na ushirikiano wa mawakala wengi ulipokuwa ukikua — pengo kati ya kanuni ya ubini na mazoezi yaliyotumika.
- **Uhalali na udhibiti wa ubora.** HITL ni lango la ubora kwa [[automated-assessment|tathmini ya kiotomatiki]] na uzalishaji — binadamu husuluhisha pale alama za kiotomatiki hazina uaminifu (angalia [[llms-do-not-grade-essays-like-humans-2026|utathmini wa insha kwa LLM]] [[research-methods-aied|utafiti]]) na kuthibitisha vipengele vilivyotolewa. [[meta-analysis-systematic-review|Mapitio ya kimfumo]] ya PRISMA ya masudio 42 ya kuweka alama na maoni (2023–2025) yinafikia hitimisho lile lile kwa uwazi: LLM zinalingana na waamuzi binadamu katika kazi fupi, zenye muundo mzuri lakini haziwezi kuchukua nafasi kamili ya hukumu ya binadamu katika kazi ngumu, za wazi, au za kibinafsi, na ufanisi mkubwa zaidi wa kuweka alama unapatikana katika mifumo ya pamoja ambayo inaunganisha kuweka alama kunakoendeshwa na AI na usimamizi na uthibitishaji wa mwalimu ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] wanaonyesha kwa uwazi mahali ambapo mpaka huo uko: ChatGPT-5 ililingana na wanachuo katika vipengele vya lengo vya mtihani wa dawa (CCC 0.935–1.000) lakini haikuwa na uaminifu katika vipengele vya jibu fupi na vya insha hata ikipatiwa rubriki, na kuwafanya waandishi kupendekeza kuweka alama kwa pamoja na ukaguzi wa binadamu kwa tathmini ngumu, ya kibinafsi, au yenye matokeo makubwa.
 Kurudia si mbadala wa usimamizi huo: kwa kuweka alama upya majibu yanayofanana kwa siku tano tofauti, mfano ule ule ulirudia matokeo yake mwenyewe tu kwa alpha ya Krippendorff 0.625, na mabadiliko yalikusanyika katika madarasa ya kati na A na F hayakuwepo katika hesabu za vipindi vitano ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **Wakala wa mwanafunzi.** Kuweka binadamu katika mzunguko huhifadhi [[agency]] na kuunga mkono [[self-regulated-learning]], na kupinga [[cognitive-offloading|kutegemea kupita kiasi]] ambacho msaada kamili wa uhuru unaweza kusababisha.

- **Wanafunzi wenyewe wanaweka binadamu upande wa matokeo makubwa.** Miongoni mwa wanafunzi 93 wa digrii ya kwanza, 81.7% walipendelea alama za binadamu kwa karatasi ya mwisho yenye thamani ya 40% ya daraja, 75 kati ya 93 walitaka AI isaidie badala ya kuchukua nafasi ya wawekao alama, na 69 walitaka alama za AI kaguliwe na binadamu daima ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Uaminifu na urekebishaji.** Usimamizi mahususi wa binadamu unaunga mkono [[trust-calibration]] — wanafunzi na mkufunzi wanajua binadamu aliye na sifa anasimama nyuma ya mfumo.
- **Vigezo vinavyoonekana kabla ya ukaguzi huongeza makubaliano.** [[calibrating-trustworthiness-llm-education-2026|Coscia et al. (2026)]] waligundua kuwa kuonyesha metriki za uaminifu kwa waokoaji wakati wanapoliganisha majibu ya LLM kulipandisha makubaliano kati ya wawekao alama kutoka alpha ya Krippendorff 0.3987 hadi 0.4931, huku kuongeza vipimo zaidi kukiongeza mzigo wa kiakili bila faida.
- **Wakala unao na mipaka kama muundo, si kama kanusho.** Mfumo wa AGAI-HE wa [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] kwa msaada wa kujifunza wa [[agentic-ai|wakala]] unaweka usimamizi ndani ya mfano yenyewe, kama tabaka la tatu pamoja na tabaka za mtiririko wa kiufundi wa kufundisha na za msaada wa wakala: inafafanua matumizi ya AI yanayokubalika, mipaka ya kiufundi wa kufundisha, kanuni za [[privacy]], [[ai-use-disclosure|mahitaji ya kufichua]], uthibitishaji wa vyanzo, vituo vya ukaguzi vya mkufunzi, mifumo ya [[academic-integrity|uadilifu]], na uwajibikisho wa mwisho wa binadamu, na inahitaji kila kazi ya wakala ifuatilie mahitaji ya kujifunza, kusudi la tathmini, au udhibiti wa utawala. Ni utekelezaji halisi wa kanuni kwamba HITL ni sifa ya ubini wa mfumo badala ya taarifa ya sera — na utafiti wa wanafunzi 130 wa maono ya waandishi ni ukumbusho kuwa kuongeza usimamizi wa wakala chini ya usimamizi huo haikujisajili yenyewe kama msaada bora wa kujifunza kuliko chatbot.
- **Mara ngapi binadamu anaangalia yenyewe ni uamuzi wa ubini.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] anatenganisha *mzunguko* wa usimamizi kutoka mahali pake: HITL ya mzunguko wa juu, inayokagua kila matokeo ya AI kabla ya kuwafikia wanafunzi, hupata udhibiti wa ubora, kugundua makosa kwa haraka, uwajibikasho na urekebishaji unaoendelea lakini inaweza kufuta ufanisi uliochochea uotomatiki na kuzuia vipindi vya kilele vya kuweka alama; HITL ya mzunguko wa chini, inayochunguza sampuli na kukagua tu matukio yaliyotajwa, inapanuka na inapunguza muda wa kurejesha lakini inahatarisha makosa kusambaa bila kugundulika katika majibu, kudhoofisha uwajibikasho, na kuunda tatizo la [[equity-in-ai-education|usawa]] ikiwa wanafunzi wengine watapata ukaguzi wa binadamu wa kina zaidi kuliko wengine. Badala ya kuagiza jibu la jumla, mfumo unahitaji biashara hii ifanywe kwa uwazi dhidi ya vizingo vya makosa vya taaluma, kama tathmini ni [[formative-assessment|ya mchakato]] au [[summative-assessment|ya mwisho]], ukubwa wa kikundi na rasilimali za taasisi — na kuweka chaguo la msingi kuelekea kinyume cha hoja ya kawaida ya ufanisi: anzia na usimamizi wa mzunguko wa juu na upunguze tu pale ushahidi mkubwa unaonyesha uaminifu, usalama na hali zinazokubalika, hivyo mzigo wa uthibitishaji uko kwenye kuonyesha kuwa usimamizi *mdogo* ni salama. Karatasi pia inaonya kuwa kanuni zinazojengwa na usimamizi kama huo zinaweza kubadilisha juhudi za wafanyakazi badala ya kuzipunguza, na kufanya faida halisi ya ufanisi ziwe swali la wazi la kipimo.
- Usimamizi wa binadamu uliotumika unaweza kumaanisha upangaji wa kuidhinisha badala ya hukumu ya ubora: katika mfumo wa pamoja wa maswali, uwanja wa kukubalika uliweka kodi tu iwapo msuluhishaji alitofautiana na muulizaji, na hakuna kipimo kilichotathmini ubora wa jibu ([[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]]).

## HITL inavyoonekana wapi katika utafiti wa hifadhi ya maarifa

- **Tathmini ya kiotomatiki na kuweka alama:** mifumo ya HITL inaunganisha uzalishaji/alama za AI na uthibitishaji wa binadamu katika kuweka alama kwa majibu fupi ([[cong-confidence-asag-2026]]), tathmini ya kueleza mwenyewe ([[llm-automated-assessment-student-self-explanations]]), na [[automated-essay-scoring|kuweka alama ya insha]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] wanatekeleza hili katika kuweka alama kwa mikono ya jumla ya [[chemistry-education|kemia]] yenye matokeo makubwa: kwa sababu uaminifu wa LLM ya [[multimodal]] unabadilika kulingana na muundo wa jibu (majibu ya maandishi na ya mmenyuko wa kemia ni ya kuaminika huku kuchora na kuchora grafu kupata alama mbaya kuliko nasibu) na makosa ya chanya hayagunduliwi na wanafunzi, wanabadilisha alama ghafi za AI kuwa sera ya kuchagua/kuhitimisha kwa vigezo vya uaminifu — vizingo vya alama za sehemu, kizingo cha hatari kinachotegemea [[item-response-theory|IRT]], na kutenga kwa aina ya tatizo — na kuhitimisha vipengele visivyo na uhakika na vya grafu kwa binadamu, mbinu ambayo waandishi wanaunganisha na [[regulation|miundo ya kisheria]] inayoweka AI katika [[assessment|tathmini ya kielimu]] kama yenye hatari kubwa na inahitaji usimamizi wa binadamu ulioandikwa.
- **Mifumo ya maoni:** inahitaji usimamizi wa binadamu ulioandikwa.
- **Uendeshaji wa alama za HITL katika tathmini ya kitaifa (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] wanatekeleza HITL katika kiwango cha taasisi katika mtihani wa Acredita EB wa Uruguay. Kwa sababu makosa ya mwekao alama wa LLM ni ya kihifadhi kwa mfumo (kupunguza alama), mtiririko wa kazi unatumia mantiki ya sehemu ya uamuzi inayoelekeza ukaguzi wa binadamu kwa wagombea hasa wale wanaotegemea matokeo yao ya kupita/kushindwa katika sehemu ya Uandishi — majibu yaliyopitishwa na alama ya AI yanakubaliwa kwa uaminifu, huku majibu yaliyoshindwa na alama ya AI (15.3–16.5% ya matukio) yakithibitishwa na waamuzi wataalam, na kupunguza mzigo wa kuweka alama kamili kwa ≥50% na hatari ya kubaki ya kupita kwa makosa ya AI ya 0.2–0.6% tu. Hii ni HITL kama mkakati wa kugawa rasilimali: binadamu husuluhisha hasa pale upendeleo wa kihifadhi wa AI ungebadilisha matokeo yenye matokeo makubwa.

- **Kutolewa kwa kizingo cha kuhitimisha kutoka kwa azimio la rubriki yenyewe (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] waliweka ukingo wa AI–mkufunzi kwa pointi 0.5 — tofauti kubwa zaidi ambayo haiwezi kusogeza uwasilishaji kupita bendi ya nanga — na walipandisha outliers kwa pointi 0.8, na kutuma majibu 11 kati ya 362 (3.0%) kwa ukaguzi wa binadamu kabla ya maoni kutolewa.
- **Makubaliano kati ya watiaji lebo si ukweli wa ardhi wa binadamu.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] wanasogeza lebo za mfano katika tabaka la ukaguzi bila kuwahi kuzithibitisha dhidi ya lebo za dhahabu za binadamu, na kuacha makubaliano kati ya miendo (wastani 0.401) kuwa mbadala wa ubora wa madai ambao makosa ya pamoja ya mfano yanaweza kudumu. Ubini wao unaweka usimamizi kuwa wa uchanganuzi badala ya upambo: kwa sababu hukumu za kati ni za wazi, mwokoaji anaweza kuona tabia zipi ziliwaka na kutenganisha tabia iliyosomewa vibaya na kanuni inayoweka dhana vibaya.
- **Mifumo ya maoni:** ubini wa maoni ya binadamu katika mzunguko unaonekana katika [[becerra-aicofe-feedback-2026|mifumo ya maoni ya ushirikiano]] na [[cong-confidence-asag-2026|kuweka alama kwa majibu fupi yenye ufahamu wa uaminifu]].
- **Msaada wa ushirikiano wa darasa.** [[breideband-community-builder-cobi-2026|CoBi]] inaweka mwalimu kama binadamu anayekagua katika mfumo wa AI unaogundua mazungumzo ya vikundi vidogo yenye kuvutia: walimu walipendelea kwa uwazi ukaguzi wa kabla/baada ya tendo badala ya onyesho la wakati halisi ambalo lingewaweka "kwenye sehemu ya wasiwasi," na maoni ya kiwango cha darasa (badala ya binafsi) yaliyounganishwa ni hasa yale yanayomruhusu kupitia msongo wa [[privacy]], ufuatiliaji, na [[agency]] wa mwanafunzi.
- **Uzalishaji wa maswali na maudhui:** zaidi ya CODE-GEN, HITL inaelekeza uzalishaji wa maswali kwa tathmini na [[scaffolding]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Mifumo ya wakala na ya mawakala wengi:** kadiri AI inavyokuwa huru zaidi, usimamizi wa HITL ni [[agentic-ai|ulinzi msingi wa ubini]] ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Upangaji kwa matokeo ya uamuzi, si kwa kutokuwa na uhakika wa mfano (2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|Utafiti wa 2026 wa uendeshaji]] wa mtihani wa kitaifa wa Acredita EB wa Uruguay (matoleo mawili, takribani wagombea 5,000-6,000 kila moja) unaonyesha jinsi ubini wa binadamu katika mzunguko unavyoonekana wakati unaendeshwa na matokeo ya uamuzi badala ya kwa kutokuwa na uhakika wa mfano. Mwekao alama wa GPT-5 alikubaliana na waamuzi wataalam kwenye 60-80% ya vipengele 15 vya rubriki lakini alikuwa wa kihifadhi kwa mfumo, akitoa tofauti za binadamu-anapita/AI-anashindwa katika 15.3% (2024) na 16.5% (2025) ya ulinganisho wa kupita/kushindwa na karibu kamwe kinyume. Mfumo kwa hivyo unakubali matokeo ya AI-kuipita kama yalivyo na unaelekeza kila matokeo ya AI-kushindwa ambayo yanaweza kubadilisha matokeo ya mgombea kwa ukaguzi wa mtaalam — baada ya kwanza kuruka wagombea wale wanaotegemea kupita/kushindwa kwao kwenye sehemu ya uandishi — na kupunguza majibu yanayohitaji kuwekwa alama kamili na binadamu kwa angalau 50%. Ubini wa pili wa 2026 unavuta mpaka kutoka upande mwingine: katika jukwaa la wagonjwa walioidhinishwa la wakala wengi ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]), usimamizi wa binadamu unahifadhiwa kwa kile AI inahukumiwa haifai kuamua, na wanachuo na wagonjwa walioidhinishwa binadamu wakitoa tafsiri ya muktadha, marekebisho, na hukumu za utayari, na mfumo hairuhusiwi kwa uwazi kudhamiria uwezo wa [[medical-education|kliniki]] kwa uhuru.

## Muunganisho

Ubini wa binadamu katika mzunguko si hatua ya usalama tu — ni **mkakati wa kugawa rasilimali**. Swali la mipaka si *kama* kujumuisha binadamu, bali *wapi* katika mtiririko wa kazi hukumu yao ina thamani ya kiambatanisho ya juu zaidi. Mifumo yenye ufanisi zaidi ya HITL inazingika utaalam nadifu wa binadamu pale mifumo ya kiotomatiki ni dhaifu zaidi (ubini wa kigezo cha kupotosha, maoni ya maelezo, kusuluhisha matukio ya kingo, hukumu ya maadili) na kuotomatisha mengine — na kuhifadhi ubora, usalama, na uaminifu huku ikipanua uzalishaji.
- **Usimamizi wa binadamu unabaki katika kazi inayosaidiwa na AI.** [[scaffolding-systematic-reviews-2026|Utafiti wa mapitio ya kimfumo]] uligundua kuwa zana za uotomatiki za AI zilipunguza mizigo ya taratibu (mfano uchunguzi wa awali) lakini maamuzi ya tafsiri bado yalihitaji usimamizi mkubwa wa binadamu; [[kim-ai-andragogy-2026|utafiti wa andragogy]] unafanya binadamu katika mzunguko (mifano ya akili ya pamoja, uundaji wa pamoja) kanuni msingi ya ubini wa AI.
- **Binadamu katika mzunguko katika kiwango cha taasisi.** Qin (2026) anaeleza jinsi Chuo Kikuu cha Lingnan kilivyoendeleza mfano wa kielimu wa binadamu katika mzunguko ambao unatanguliza hoja ya maadili, hukumu mahususi, na uwajibikisho wa kijamii huku ukijenga upatikanaji wa [[generative-ai|GenAI]] kwa uwanja mpana. Mfano unaweka binadamu kama mahali pa hukumu na maadili hata AI ikijengwa katika [[curriculum-design|mtaala]] — utekelezaji wa [[governance|taasisi]] halisi wa kanuni za binadamu katika mzunguko katika [[higher-ed|elimu ya juu]].
- **Wanafunzi kama binadamu katika mzunguko wa mafunzo yao wenyewe.** [[ko-hughes-vsd-student-centered-its-2026|Ubini Unaoelekea Maadili]] na wanafunzi wa chuo cha jumuiya ulitoa familia kamili ya vipengele vya HITL vinavyolenga mwanafunzi kwa ITS (udhibiti juu ya tathmini upya na ukaguzi, malengo/mwendo binafsi, kuweka alama kwa ukaguzi, kuthibitisha uaminifu juu ya umiliki, na udhibiti wa kiwango cha kushiriki kwa msaada wa AI), na kuweka mwanafunzi kama mdhibiti anayetenda kazi ya mzunguko wa mafunzo badala ya mtumiaji anayepokea tu maamuzi yanayobadilika. Utafiti pia uligundua mkufunzi waligawanyika kama udhibiti kama huo wa mwanafunzi unaweza kudhoofisha uadilifu wa njia ya kujifunza inayoongozwa na mfumo — mfano wa swali pana la kugawa rasilimali la mahali ambapo hukumu ya binadamu (mwanafunzi dhidi ya mwalimu) inaongeza thamani zaidi.
- **Kupandisha kutoka AI hadi mtaalam ni hatua ya binadamu katika mzunguko.** Mfumo wa SCAN hutoa kazi kwa miendo minne ya AI ya kizalishaji kulingana na umbali wa mwanafunzi, na husoma [[student-engagement|ushiriki]] anayepita katika kazi ya AI iliyopangwa vizuri kama ishara ya kushindwa kujifunza ili kusogeza mwanafunzi kutoka AI hadi msaada wa mtaalam, na binadamu kama mkaguzi wa epistemological ([[ai-teammate-task-distribution-medical-training-2026|Tsim et al. (2026)]]).
- **Usimamizi wa ushauri wa kupokea AI.** Kwa sababu mifumo ya [[conversational-ai|mazungumzo ya AI]] inayoshauriwa na watumiaji wenye shaka inaweza kuwa na uwezo wa kuhimiza kupokea, usimamizi wa binadamu na tathmini huria ni muhimu. Ukaguzi unaoonyesha kuwa mifano mengi ya mbele yanawaelekeza wafanyakazi wa [[k-12]] wa vijijini wanao shuku kuelekea [[student-engagement|ushiriki]] unasisitiza haja ya ushauri wa AI unao wazi na unaoweza kukaguliwa badala ya kutegemea bila kukagua.

## Dhana Zilizounganishwa
- [[pedagogical-patterns]] — Mahali ambapo ukaguzi wa binadamu unakaa katika mlolongo uliopimwa, na kile ambacho hakujapimwa kamwe peke yake
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — hukumu ya binadamu ndani ya mtiririko wa msaada wa kiotomatiki

## Makala Zilizounganishwa
- [[lee-learner-question-types-ai-education-2026]] — Uainishaji wa maswali wenye lebo za mtaalam: binadamu hutawala kuweka lebo, kuongeza, na uchanganuzi wa makosa (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — Usimamizi na utawala wa binadamu kama tabaka la tatu la ubini wa kozi ya GAI ya wakala (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Ubini unaoelekea maadili wa ITS unaozingatia mwanafunzi (wanafunzi katika mzunguko wa mafunzo)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Kuweka alama kwa msaada wa AI ya HITL katika tathmini ya kitaifa ya uandishi ya kiwango kikubwa (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — Mfumo wa SCAN: kufikiri upya ugawaji wa kazi za AI katika mafunzo ya matibabu (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM haziweki alama za insha kama binadamu (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — Matumizi ya AI katika Kuunga Mkono Andragogy (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Ngazi za Msaada za Mapitio ya Kimfumo kwa Ushauri na AI (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — Kuweka alama na maoni yanayosimamiwa na mkufunzi yanayosaidiwa na AI
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Je, AI inaweza kutoa msaada unaofaa kwa wasifu mbalimbali wa wanafunzi? Tathmini ya kiwango kikubwa
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Kutathmini Mfumo wa LLM wa Mawakala Wengi Unaoelekea Ngazi za Msaada kwa Mafunzo ya Mahojiano ya Kliniki
- [[tripartite-feedback-framework-ai-assessment-2026]] — Mfumo wa pande tatu: kupanga maoni kulingana na hali ya epistemological na kanuni tano za mpaka kwa kushiriki kwa AI (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — Uingiliaji wa Hadithi za Kijamii Zinazosaidiwa na AI kwa Elimu Maalum: Ubini wa AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Miundo ya Dawa inayotegemea Madai kwa Uwekaji wa Kodi Unaoweza Kukaguliwa wa Mazungumzo ya Kielimu
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — Kutoka Uainishaji wa Hisia hadi Maoni Yanayoweza Kutenda na Yenye Uwajibikasho: Mapitio na Ramani ya Ushahidi ya NLP katika Tathmini ya Wanafunzi ya Ufundishaji, 2015–2026
- [[llm-grading-assistants-public-health-2026]] — Kurudia kwa kuweka alama kwa LLM zinazofanana kwa siku tofauti hujirudia tu kwa alpha ya Krippendorff 0.625
- [[when-students-prefer-ai-scoring-feedback-2026]] — Wanafunzi wa digrii ya kwanza wanapendelea alama za binadamu kwa kazi zenye matokeo makubwa na AI kama msaidizi, si mbadala
- [[student-query-demand-hybrid-ai-support-2026]] — Wanafunzi Huuliza Nini Kweli: Muundo wa Mahitaji na Uwezekano wa Uotomatiki katika Mfumo wa Msaada wa Pamoja
