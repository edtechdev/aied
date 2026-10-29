---
title: Tathmini ya Mchakato
created: "2026-10-13T06:20:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl, ai-infused-assignment-playbook]
confidence: high
translation_of: concepts/formative-assessment
source_updated: "2026-10-15T08:25:00-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

> **Tathmini ya Mchakato** — tathmini iliyobuniwa kwa lengo la kuongoza mafunzo na kujifunza kwa wakati wake, tofauti na tathmini ya [[summative-assessment|mwisho]]. Katika elimu ya AI, tathmini ya mchakato imebadilishwa na AI na pia ni muhimu kwake: mifumo ya AI inaweza kuzalisha, kuthibitisha, na kubadilisha vipengele na maoni ya tathmini ya mchakato kwa kiwango kikubwa, wakati maoni ya mchakato ni mbinu kuu ambayo kwayo [[intelligent-tutoring|walimu wa AI]] na [[adaptive-learning|mifumo inayobadilika]] hufanya kazi ya kujifunza. [[research-methods-aied|Utafiti]] wa hifadhi hii ya maarifa huchunguza vipengele vya tathmini ya mchakato vilivyozalishwa na AI, maoni yaliyozalishwa na AI, na ubuni na tathmini ya mifumo hii.

## Maswali ya Kutafakari

- Tathmini ya mchakato inakusudiwa kufunga dundu — kufichua wanafunzi wasiojua na kuwapa maoni wanayoweza kuyatekeleza *wakati kujifunza bado kinaendelea*. Hii inatofautianaje kwa msingi na tathmini ya mwisho, na lini zote mbili zinaweza kuchanganyika katika mazoezi?
- AI inaweza kuzalisha maswali ya chaguo-nyingi kwa usahihi wa kushangaza kwa vipimo vinavyoweza kuthibitishwa, lakini ni dhaifu zaidi kwa vipimo vya uamuzi wa kielimu. Ikiwa mashine ni nzuri kwa majibu sahihi lakini dhaifu zaidi kwa uamuzi wa [[pedagogy|kieledu]], inapaswa kuaminika kufanya nini — na binadamu wanapaswa kuendelea kufanya nini?
- Maoni yaliyozalishwa na AI yanafaa tu wanafunzi wanapoyatekeleza kweli — hali ya "maoni yaliyotekelezwa", ambapo wanafunzi huteua, huthibitisha, na kutumia mapendekezo, ilishinda zaidi ya kupewa tu maoni. Ikiwa utekelezaji ni muhimu zaidi ya maoni yenyewe, hiyo inamaanisha nini kwa jinsi maoni ya mchakato yanavyopaswa kubuniwa?
- Maoni yanaelezewa sio kama uhamishaji wa habari bali kama mazoezi ya [[ethics|maadili]] na ya mahusiano. Ni nini kinapotea tathmini ya mchakato inapozalishwa kwa wingi kama "takataka za AI" — na ni nini benki za maoni za binadamu na utunzaji wa mahusiano zinaweza kuhifadhi?

## Utangulizi

Tathmini ya mchakato ni kituo cha [[ai-education|AI katika elimu]] kwa sababu inapatikana katika muunganiko wa [[assessment]] na [[feedback|maoni ya kujifunza]]. Kusudi lake ni kufunga dundu: kufichua wanafunzi wanavyojua na wasiojua, na kutoa maoni wanayoweza kuyatekeleza ili kuboresha. AI hufanya hii kuwa ya kwenda-enda kwa kiwango kikubwa — kuzalisha vipengele, kuainisha majibu, na kutoa maoni binafsi — lakini utafiti wa hifadhi hii ya maarifa unaonyesha kuwa ubora unatofautiana kwa kiasi kikubwa kati ya aina za vipengele, na kuwa maoni yanafaa tu wanafunzi wanapoyatekeleza kweli.

## Vipengele vya tathmini ya mchakato vilivyozalishwa na AI

Mifumo ya AI huzalisha vipengele vya tathmini ya mchakato katika hali mbalimbali, uaminifu ukitofautiana kulingana na aina:

- **Maswali ya chaguo-nyingi:** [[code-gen]] unaonyesha [[agentic-ai|AI ya wakala]] inaweza kuzalisha maswali ya chaguo-nyingi (MCQ) kwa uaminifu kwa ufahamu wa uandishi wa kodi yanapothibitishwa katika vipimo saba vya kieledu — viwango vya mafanikio vinifikia **98.6%** kwa ulinganifu wa dhana na **79.9%** kwa ubora wa maoni — ikionyesha kuwa AI ni imara zaidi kwa vipimo vinavyoweza kuthibitishwa na dhaifu zaidi kwa vipimo vya uamuzi wa kieledu. Hii inaungana na [[automated-question-generation|uzalishaji wa maswali wa kiotomatiki]] kwa ujumla.
- **Benki rahisi ya vipengele vilivyozalishwa haitoi ishara yoyote ya mchakato.** Katika utangazaji wa wiki 10, takribani 70% ya vipengele vya mazoezi vilivyozalishwa na AI viliitwa kwa usahihi na kila mwanafunzi (p = 1.0), hivyo mitihani ya hatua ndogo iliyoendeshwa kila dakika 15 hadi 20 ilipokelewa vizuri lakini ilibeba habari chache sana za kutofautisha kwa kubadilisha mafunzo ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Kuainisha insha kiotomatiki:** mifumo ya mawakala-wengi (mfano, MASS) huboresha uthabiti juu ya [[llm|LLM]] peke yake kwa [[automated-essay-scoring|kuainisha insha]], ingawa [[explainable-ai|uwezekano wa kuelezea]] maamuzi ya kuainisha ya mawakala-wengi unabaki changamoto wazi.
- **Mistari ya kuainisha ya mchakato:** [[cotal-formative-assessment-scoring-2026|CoTAL]] huunganisha ilani za Chain-of-Thought na [[active-learning|kujifunza kwa shughuli]] na Ubuni unaozingatia Ushahidi ili kuzalisha kuainisha kwa tathmini ya mchakato kinachoweza kugeuzwa, chenye [[prompt-engineering|uhandisi wa ilani]] wa binadamu katika dundu.
- **Tathmini za mara kwa mara zilizoainishwa [[automated-assessment|kiotomatiki]]:** [[automated-formative-assessments-a-level-sciences|tathmini za mchakato za kiotomatiki katika sayansi za A-level]] huchunguza athari ya tathmini ya mchakato yenye marekebisho ya kiotomatiki ya mara kwa mara kwa [[learning-gains|matokeo ya kujifunza]]. Mapitio ya upeo wa kuainisha kiotomatiki majibu mafupi katika [[science-education|sayansi]] (2017–mwanzo wa 2024) yanathibitisha kuwa matumizi haya ya jibu fupi ya mchakato ni uwanja wenye mvuto halisi: mifano ya familia ya BERT ilitawala kuainisha kiotomatiki hadi 2021 kabla ya kuhamia kwa ilani kwa [[llm|LLM]] kubwa zaidi kuanzia ~2022, na mifano iliyoimarishwa na taaluma, yenye ufahamu wa rubriki, na ya chain-of-thought ilifanya vizuri zaidi — hata hivyo, miito ya mapitio ya tathmini kamili na pengo lisilosuluhishwa la [[bias-mitigation|haki]] na uwezekano wa kuelezea linaonya dhidi ya kupanua mifumo kama hiyo kwa matumizi ya [[summative-assessment|mwisho]] bila upatanishi au yenye hatari kubwa ([[auto-marking-short-answer-science-2026]]).

## Maoni yaliyozalishwa na AI

Mwili mkubwa wa utafiti wa hifadhi ya maarifa huchunguza maoni ya mchakato yaliyozalishwa na AI:

- **Tatizo la utekelezaji:** [[ai-feedback-enactment-workflow-2026|Kufanya Maoni Yaliyozalishwa na AI Kuwa Muhimu]] (wanafunzi 13,037; rasilimali 51,296) unaonyesha thamani ya maoni inategemea iwapo wanafunzi *wanayatekeleza* — hali ya **Maoni Yaliyotekelezwa**, ambapo wanafunzi huteua, huthibitisha, na kutumia mapendekezo ya maoni ya AI, ilishinda zaidi maoni rahisi yaliyoongozwa.
- **Maoni ya AI yanaweza kulingana na walimu wataalam rubriki inapobeba vigezo.** Bila ufahamu wa chanzo na yakibadilishwa nasibu kati ya vikundi 47 vya miradi ya chuo kikuu, LLM iliyopewa rubriki ya 0–30 iliyojengwa pamoja na mfano ilikuwa si dhaifu zaidi *na* iliyolingana na maoni ya wataalam (+0.23, 90% CI [−0.46, 0.91]) — rubriki, sio mfano, ilisawazisha ([[ai-generated-feedback-higher-ed|Grion et al. (2026)]]).
- **Maoni sio uhamishaji wa habari:** [[care-full-feedback-genai|Sanaa ya maoni yenye utunzaji]] inadai maoni ni mazoezi ya maadili na ya mahusiano, sio uhamishaji wa habari — maoni yanakuwa maoni tu wanafunzi wanapoyafanya maana na kuyatekeleza, na inalinganisha "takataka za AI" zilizozalishwa kwa wingi na njia za mkato za benki ya maoni ya binadamu.
- **Maoni yaliyopangwa kwa mpangilio yanaweza kudhuru:** [[sequenced-ai-feedback-learning|Maoni ya AI yaliyopangwa kwa mpangilio]] (hamasa → vidokezo → jibu sahihi, yaliyobuniwa kukuza uhuru) kwa kweli **yalidhuru kujifunza** katika jaribio la nasibu (N=199) licha ya kuongeza [[student-engagement|ushiriki]] na hisia chanya — utambuzi wa tahadhari kuhusu ubuni wa maoni.
- **Zana zinazozingatia mwanafunzi:** [[learner-centered-feedback-ai|PolyFeed]] huunganisha mifano ya mapendekezo ya ML na mazoezi ya [[teacher-role|mwalimu]], ikionyesha jinsi walimu wanavyopokea na kubadilisha mapendekezo ya maoni ya AI; [[ai-internal-feedback-evaluative-judgments|maoni ya ndani yanayosaidiwa na AI]] yanawasaidia wanafunzi wa chuo kikuu kukuza [[evaluative-judgment|uhakiki wa kutathmini]].
- **Ilani zinazoongozwa na rubriki na maoni yanayojua jukumu:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] walionesha kuwa uboreshaji wa kurudia wa rubriki pamoja — kufafafanua vivifia vya utendaji na kukubali kwa uwazi viashiria vya kujifunza vilivyoelezewa — vilisogeza makubaliano ya LLM–binadamu juu ya kazi ya ubuni ya wanafunzi kutoka 54.75% hadi 81.25% (Alfa ya Cronbach ikipanda kutoka 0.393 hadi 0.798), na faida kubwa zaidi zilikuwa katika kategoria inayodai ufahamu wa kiakili ya Iteration & Reflection. Kuhamasisha mfano ule ule chini ya majukumu ya mkufunzi, mkaguzi-mwenzio, na mkaguzi-wa-mruhusa kulizalisha maoni tofauti ya kutathmini, na LLM baada ya marekebisho zilikuwa thabiti zaidi kuliko baadhi ya waainishaji binadamu katika kutumia vizingiti vya utendaji — ikiiweka LLM zinazoongozwa na rubriki kama washirika wa usawazishaji na ubuni-pamoja katika mazingira ya maoni ya mchakato, usimamizi wa binadamu katika dundu ukibaki muhimu.
- **Namba za makubaliano huficha mwelekeo: mfano unaweza kuepukia kuelekea kategoria ya kati.** Mthamiaji wa LLM anayeweka lebo kwa mizunguko ya mazungumzo ndani ya tathmini inayotegemea mazungumzo ulilingana na uwekaji kodi wa binadamu kwa 52.2% ya matukio 155, lakini ilitumia lebo iliyoepea ya PARTIAL_CORRECT mara nyingi zaidi kuliko waainishaji (53.5% dhidi ya 41.3%) na iliwasha 5.4% ya mizunguko IRRELEVANT ambapo waainishaji hawakuwasisha yoyote ([[llm-multi-agent-conversation-assessment-2025|Hou et al., 2025]]).
- **Maoni ya AI yanadumisha ushiriki na kusogeza faida kwa kiwango kikubwa:** [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]]'s jaribio la muda mrefu la muhula katika mafunzo ya chuo kikuu yaligundua kuwa maoni ya mchakato ya GPT-4 binafsi (yakijumuisha vipimo vyote vitatu vya Hattie & Timperley — Feed-Back, Feed-Up, Feed-Forward) vilidumisha ushiriki wa juu zaidi katika kazi nane za wazi, vilinyoosha majibu ya wanafunzi, na vilizalisha faida kubwa zaidi za kujifunza maudhui — athari inayosukumwa na utoaji wa AI wenye uaminifu na uthabiti, kwa kuwa pale maoni ya kiwango cha wenzio ya maandishi yenye ubora yalipokelewa kweli, matokeo ya wenzio yalilingana na ya AI.
- **Mustakabali wa maoni:** [[feedback-futures-genai|Feedback Futures]] huunganisha toleo maalum na inadai swali sio *iwapo* [[generative-ai|GenAI]] inaweza kuzalisha maoni bali jinsi ya kubuni maoni yanayounga mkono kujifunza, ikichambua mivutano inayojirudia katika uwanja.
- **Maoni mengi ya mchakato ni ya muda, si ya kudumu.** Katika mapitio ya upeo ya masudio 37 ya tathmini halisi, 23 yalitumia maoni ya mchakato kwa maboresho ya papo hapo lakini manne tu yalitumia maoni ya kudumu ambayo wanafunzi wanahamisha kwa miktadha ya baadaye — muundo wa kupingana unaorudiwa na zana za sasa za maoni ya AI ([[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan, Boud & Du (2025)]]).
- **Maoni ya utambuzi-kwanza kwa matatizo ya kiasi yaliyo wazi:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]] hutoa maoni ya mchakato ya wakati halisi, binafsi juu ya Maswali ya Fomula ya Hesabu ya Uchumi wa Uhandisi, uwanja ambapo ufumbuzi wa mikono, usio na muundo, uliwahi kuzuia msaada wa AI. Mgongo wa [[machine-learning|XGBoost]] kwa kila swali hutambua makosa yanayowezekana yaliyolekwa kwa lebo za rubriki kutoka majibu ya namba yaliyowasilishwa na wanafunzi (wastani wa usahihi 0.81, ukumbusho 0.79), na mpango unaotegemea mazungumzo unaomba majibu ya kati tu uaminifu wa utabiri unapokuwa mdogo — ukisawazisha usahihi wa maoni dhidi ya ufanisi wa ukusanyaji katika kiolesura cha wavuti cha benki ya maswali.
- **Kiwango na mipaka ya maoni ya mchakato ya LLM (ushahidi wa kimfumo):** mapitio ya [[meta-analysis-systematic-review|kimfumo]] yanayoongozwa na PRISMA ya masudio 42 ya kihalisia (2023–2025) yanagundua LLM zinaweza kupunguza mzigo wa kazi wa mwalimu na kutoa maoni haraka, binafsi kwa kiwango kikubwa — hasa katika makundi makubwa ya [[higher-ed|elimu ya juu]] — lakini maoni wakati mwingine ni ya jumla mno au hayalingani na alama iliyopangwa na uaminifu unapungua kwa kazi ndefu, [[multilingual-learning|nyingi-lugha]], au zenye nuance, ikirudia kuwa maoni ya mchakato ya AI yanafaa zaidi kutumika chini ya usimamizi wa mwalimu ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **Ubadilishaji ni kipengele kinachoweza kutenganishwa, sio mapambo:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod & Breitwieser (2026)]] wanatoa jaribio la moja kwa moja la sababu ambalo masudio mengi ya maoni ya LLM yanadhaniwa kuwa yameondolewa, yakilinganisha maoni ya GPT-4 yanayotegemea majibu dhidi ya mwongozo wa jumla ulioandikwa na wataalam uliolingana kwa muundo, sauti, urefu, na maneno ya [[motivation|motisha]] (yaliyothibitishwa na rubriki ya ubora ya vipimo vitano, κ = .76–1.00). Katika jaribio la kabla-ya-wakati la ndani-ya-mtu, wanafunzi 155 wa Kijerumani wa darasa la tano na sita (M = 12.08 miaka) waliboresha mipango sita ya iki-basi: ubora wa mpango ulipanda kutoka wastani wa **2 → 5** chini ya maoni yanayobadilika dhidi ya **2 → 3** chini ya mwongozo wa jumla (ndani-ya-mtu V = 10,440, p < .001, r = .86; kadirio la mwingiliano wa hali × muda = 1.68, SE = 0.14, p < .001, bila tofauti ya awali ya msaada). Watoto walikadiri maoni yanayobadilika kuwa ya msaada zaidi (r = .67) na yenye motisha zaidi (r = .74), na hisia za kiwango cha jaribio zilitabiri ukubwa wa faida za marekebisho — ikifanya [[technology-acceptance-model|maana ya kuwa na manufaa]] sehemu ya njia badala ya bidhaa ya kihisia. Kwa sababu kikundi cha kudhibiti pia kilikuwa kilichobuniwa vizuri, masomo yanaonyesha thamani iliyoongezwa *zaidi ya* mwongozo mzuri usio tegemezi badala ya tofauti kati ya maoni na kitu chochote: mwongozo wa jumla ni mbadala halisi lakini mdogo unaokwama kwenye wastani wake. Upangaji ulitumika kama kesi ya jaribio kama mkakati wa msingi wa [[self-regulated-learning|kujifunza kwa kujidhibiti]] wenye vigezo wazi wa ubora, ambayo hufanya uegemezi — sifa inayotofautisha [[scaffolding]] na msaada tuli — kipimike moja kwa moja kwenye jibu la sentensi moja. Waandishi wanafafanua ubadilishaji kwa ufupi kama kubadilika kwa uegemezi wa majibu kwa maudhui ya maoni kwa jibu halisi la mwanafunzi, wakitofautisha na mwingiliano wa mazungumzo, sauti, na [[adaptive-learning|kujifunza kwa kubadilika]] wa sifa thabiti.
- **Maana ya kuwa na manufaa hufuatilia uwezo wa kutenda:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] walimwomba mwanafunzi 144 wa programu kadirio la mifano 893 ya maoni yaliyozalishwa na LLM katika vipimo vitano na ripoti 37 zilizounganishwa kwa sita, wakidumisha taaluma, kazi, na kifaa kuwa sawa wakati kiwango cha kieledu kilitofautiana. Viwango vilikuwa vinavyopendelea katika yote, na wastani wa kiwango cha mwanafunzi wa 4.24 hadi 4.43 kwa majibu binafsi na 4.11 hadi 4.38 kwa ripoti, hata hivyo uwezo wa kutenda na maana ya kuwa na manufaa vilipata viwango vya chini zaidi hata uwezo wa kutenda na usahihi unaohisiwa vilibeba uzito mkubwa zaidi wa jamaa (32.6% na 29.0%) katika mfano unaoelezea 76% ya tofauti ya maana ya kuwa na manufaa, na motisha na ubinafsi viliongoza mfano wa kiwango cha ripoti wa nia ya kutumia ikielezea 53%. Kwa kuwa uwezo wa kutenda ni kipimo ambacho utafiti wa [[feedback]] unachukulia kuwa kigumu zaidi kutoa, muundo unasomwa kama [[technology-acceptance-model|kukubalika kwa teknolojia]] kutumiwa kwa maoni: maana ya kuwa na manufaa hufuatilia iwapo mwanafunzi anaweza kutenda, sio jinsi maoni yanavyosikika vizuri.
- **Makubaliano ya nje ya mtandao yanadai kupita utendaji wa moja kwa moja:** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]]'s mlolongo wa maoni ya GPT-4o ulirudia alama ya mkufunzi katika pointi 0.5 katika 83% ya mawasilisho 362, lakini makubaliano yaliyosahihishwa na nasibu yalikuwa ya wastani tu (ICC(2,1) = 0.49) na yalipungua kutoka r = 0.92 kwenye hati za kihistoria hadi 0.57 katika matumizi ya moja kwa moja yanayosimamiwa na mkufunzi.
- **Ufahamu unapita uwezo wa kutenda kwenye njia ya marekebisho:** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao na Fan (2026)]] walitenganisha utambuzi wa kiwango cha suala na mapendekezo na waliwapa wanafunzi karatasi ya tafsiri iliyoandikwa (marejeshwa, maelezo ya athari, utambuzi wa kutokuwa na uhakika, mpango wa marekebisho) kabla ya marekebisho huru, mapitio ya mwalimu yaliyo pangwa, tathmini upya na tafakari. Katika mizunguko mitatu ya uandishi katika madarasa mawili yaliyobaki (wanafunzi 96; uchunguzi 288 wa kiwango cha mzunguko), ufahamu wa maoni ulibeba uhusiano mkubwa zaidi na ubora wa marekebisho (r = 0.501, mbele ya uwezo wa kutenda 0.480 na usahihi wa utambuzi 0.445), na kikundi cha utambuzi kilipata pointi 5.92 za uandishi dhidi ya 3.58 (Hedges' g = 1.12), ikiiweka faida katika ufahamu wa wanafunzi wa utambuzi badala ya uwezo wake wa kutenda peke yake.

## Ubuni unaozingatia mitaala na mwalimu katika dundu

[[ai-learning-tools-engineering-education-needs|LearnLens]] inashughulikia matatizo matatu yanayoendelea katika tathmini ya mchakato ya AI: **tathmini yenye ufahamu wa makosa** (kukamata makosa ya ufahamu yenye nuance badala ya makosa ya uso), **minyororo ya kumbukumbu iliyounganishwa na mada** (kubadilisha [[rag]] yenye kelele inayotegemea ufanano na urejeshaji ulio na muundo unaozingatia [[curriculum-design|mtaala]]), na ubuni wa **mwalimu katika dundu** (maboresho na usimamizi wa mwalimu, sio uotomatiki kamili). Hii inaungana na mvutano mpana katika [[human-in-the-loop-ai]]: uotomatiki unaoweza kupanuka na uthibitisho wa wataalam.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl & Leuders (2026)]] wanaboresha maana ya mwalimu-katika-dundu wakati zana inazalisha madai yake wenyewe badala ya uchunguzi ghafi. Uchanganuzi wao wa dhana unadai makusudi ya utambuzi yaliyozalishwa na AI ni ushahidi wa ubora tofauti, kwa sababu tayari ni bidhaa ya tafsiri ya algoriti, hivyo walimu wanahitaji tabaka la ziada linaloitwa **meta-diagnosis**: kukubali, kukataa, au kubadilisha kwa makusudi makusudi na kuunganisha na maarifa yao wenyewe ya muktadha. Kufafanua mfumo wa DiaCoM kwa hili unachukulia makusudi yaliyozalishwa na AI kama sifa ya hali na uamuzi wa kukubali, kukataa, au kubadilisha kama tabia ya utambuzi, huku ikipanua sifa za mtu ambazo walimu wanahitaji kujumuisha maarifa ya jinsi mifumo ya AI inavyofanya kazi kweli. Kwa sababu mifumo ya sasa inategemea hasa data ya utendaji kama usahihi wa kazi na muda wa kukamilisha, hali za motisha na mienendo ya darasa zinabaki hazipo kwa kiasi kikubwa, hivyo karatasi inaweka walimu, sio dashibodi, kama mawakala wenye uwajibikisho wa kutafakari na inaweka kuhukumu madai ya algoriti kama lengo la maendeleo ya kitaaluma.

Kulingana jukumu la AI na kiwango cha mafanikio ni hatua ya kubuni inayohusiana: walimu wa sayansi wa awali walimtaja ChatGPT kama Kocha Mwenye Subira kwa wanafunzi wenye mafanikio ya chini, Kocha Binafsi kwa wenye mafanikio ya wastani, na Mshindani wa Kiakili kwa wenye mafanikio ya juu, wakati mkufunzi alidumisha maelezo ya mwisho ya maudhui magumu ([[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom et al., 2026]]).

## Mabadiliko ya ubuni

| Kipimo | Ufaafu wa AI | Mahitaji ya Binadamu |
|-----------|----------------|-------------------|
| Usahihi wa ukweli | Juu | Chini |
| Ulinganifu wa dhana | Juu | Wastani |
| Ubora wa mvurugisho | Chini | Juu |
| Kina cha maoni | Chini | Juu |
| Uthabiti wa rubriki | Wastani | Wastani |

## Tathmini, maoni, na kujifunza

Tathmini ya mchakato katika elimu ya AI inaungana na mchakato wa kujifunza wenyewe:

- **Dundu za maoni:** [[feedback|mizunguko ya maoni]] ni mbinu ambayo tathmini ya mchakato inaangazia kujifunza; walimu wa AI na mifumo inayobadilika hufunga mizunguko hii kwa kiwango kikubwa.
- **Kujifunza kwa kujidhibiti:** maoni ya mchakato yanasaidia [[self-regulated-learning|kujifunza kwa kujidhibiti]] wanafunzi wanapofuatilia maendeleo na kubadilika; maoni ya AI yanapaswa kukuza [[ai-internal-feedback-evaluative-judgments|uhakiki wa kutathmini]], sio kuchukua nafasi yake.
- **Kuainisha kiotomatiki kufikia baadhi ya awamu za mzunguko, sio zote:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen & Liu (2026)]] walifanya majaribio ya kijaribio-kwa-majaribio ya wiki 14 ambapo wanafunzi 46 wa tafsiri waliwasilisha maelezo ya kila wiki kwa mfumo wa kuainisha kiotomatiki ambao ulirudisha alama ya papo hapo, nakala iliyorekebishwa, makosa yaliyorekebishwa, na marejeleo ya maelezo, wakati kikundi cha kudhibiti kilipokea maoni ya mwalimu wa darasa zote tu. Kikundi kilicho otomatiki kiliboresha zaidi kwa ujumla (d = 1.03), lakini faida ilibaki pale upungufu ulikuwa unaoweza kugawanywa, ishara kuwa ya kuaminika, na kiwango cha kuwa na hisia: usahihi wa lugha na ulinganifu wa mantiki vilipanda wakati uaminifu wa habari (makubaliano na waainishaji binadamu r = 0.12) na ufasaha wa utoaji havikusonga. [[self-regulated-learning|Kujifunza kwa kujidhibiti]] kulikuwa kutolingana kwa njia inayolingana, na utekelezaji na ufuatiliaji ukiwa na uhusiano na faida za alama (r = 0.42) wakati upangaji na motisha ya kihisia zilikaa karibu na katikati ya kiwango, na wanafunzi kadhaa wakiahirisha ushiriki baada ya alama za chini badala ya kuchanganua visababu. Mfumo ulifikia awamu ya utendaji ya mzunguko, sio upangaji unaotangulia.
- **Kutoka utambuzi wa kiotomatiki hadi mazoezi yaliyozalishwa:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo & Li (2026)]] huunganisha ulinganifu wa alama-ya-sauti, upimaji wa makosa, na tabaka la Proximal Policy Optimization katika dundu moja iliyofungwa kwa elimu ya muziki, ikibadilisha ishara za makosa ya mpigo (ukumbusho 91.2%, ufaafu 98.4%) kuwa zawadi zinazoongoza nyimbo za mazoezi zilizozalishwa, na yanaripoti mwingiliano mkubwa wa Kikundi × Muda unaofaa kikundi cha mfumo (beta = 0.52) katika majaribio ya kijaribio-kwa-majaribio ya wiki 12 na wanafunzi 120 wa muziki wa chuo kikuu. Waandishi wanaweka hili kama uwezekano wa kiufundi, na usomaji wa vitendo ni uchanganuzi badala ya tathmini: usahihi wa 89.7% una maanisha takribani kila makosa ya mpigo moja kati ya kumi iliyoashiriwa ni tahadhari potofu, na wakaguzi wataalam wa masomo walikadiri msaada kwa maelezo ya kimusiki kuwa eneo dhaifu zaidi, hivyo dundu za kiotomatiki zinatoshea mazoezi ya kiufundi wakati uamuzi wa maelezo unabaki na walimu.
- **Ngazi za msaada:** [[scaffolding]] na tathmini ya mchakato hufanya kazi pamoja — AI inaweza kutoa vidokezo na ilani za wakati unaofaa, ingawa utafiti wa maoni yaliyopangwa kwa mpangilio unaonya dhidi ya kuunda kupita kiasi.
- **Ubora wa rubriki unasogeza makubaliano ya kuainisha kiotomatiki zaidi ya chaguo la mfano.** Katika majibu 1,200 ya mtihani wa Linux/bash, [[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo et al. (2026)]] waligundua kuwa kuongeza rubriki kamili pamoja na jibu la marejeleo kulipandisha kila mfano (bora: Gemini 3.0 Pro, ICC(3,1) = 0.888 dhidi ya kizingiti cha binadamu 0.949), wakati makubaliano yalipungua kwa mpangilio kiwango cha kiakili cha swali kilipopanda.
- **Rubriki zilizozalishwa na AI zililingana na kuainisha kwa binadamu tu katika ukingo.** Rubriki nne za AI zilifikia ulinganifu wa pamoja na msingi wa binadamu katika ±pointi 5 katika majibu 308 ya programu (mahusiano 0.948–0.973), lakini seli tano za rubriki–kazi zilizidi kizingiti, na GPT-4.1/4o zilikuwa kali zaidi kwa kimfumo katika rubriki zilizo na muundo (−4.46 dhidi ya −0.66 kwa zisizo na muundo) ([[harmogen-ai-assessment-rubric-generation|Mendonça et al., 2026]]).
- **Uhalali na ubora:** [[ai-feedback-quality|ubora]] na [[assessment-validity|uhalali]] wa vipengele vya tathmini ya mchakato vilivyozalishwa na AI na maoni lazima vitathminiwe; [[ai-ed-evaluation]] inatoa mbinu.
- **Kuainisha kwa AI kinaongeza tishio la uhalali.** Kwa sababu mfano wa kuainisha wa AI unaweza kuthawabisha sifa zisizohusiana na dhana kama ufasaha wa lugha badala ya ufahamu wa kisayansi, karatasi nyeupe ya Stanford/ETS iliyochambuliwa kutoka kwenye mkutano wa viongozi ~100 inadai tathmini inapaswa kukusanya ushahidi endelevu, wenye muktadha badala ya kuthibitisha matokeo ya wakati mmoja ([[responsible-assessment-ai-era-stanford-2026|McGee et al. (2026)]]).
- **Weka kazi yenye udhaifu na ongeza pacha.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] wanadai insha za nyumbani na ripoti za utafiti zinabeba thamani kubwa ya mchakato na zinapaswa kuhifadhiwa kwa kujifunza, zikishirikishwa na kazi ya pili inayotathmini matokeo yale yale na inayotoa ushahidi thabiti wa mwisho.

## Hatari: Tathmini kama ufuatiliaji

Mifumo ya tathmini ya mchakato inaweza kubadilika kutoka zana za msaada wa kujifunza hadi miundombinu ya ufuatiliaji wa tabia. Mtiririko ule ule wa data unaoruhusu mafunzo yanayobadilika unaweza kuruhusu ufuatiliaji wa adhabu ikiwa [[governance]] ni dhaifu. Hii inaungana na [[privacy]] na [[well-being|afya ya mwanafunzi]], na inatia mkazo mifumo ya mchakato inayounga mkono kujifunza badala ya kufuatilia.

## Athari kwa AI katika elimu

- **Linganisha aina ya kipengele na uaminifu wa AI:** tumia AI kwa vipimo vinavyoweza kuthibitishwa (ulinganifu wa dhana, usahihi) na uhifadhi uamuzi wa binadamu kwa vipimo vya kieledu (ubora wa mvurugisho, kina cha maoni).
- **Buni kwa utekelezaji, sio utoaji tu:** maoni ya AI yanafaa tu wanafunzi wanapoyateua, yanapoyathibitisha, na kuyatumia — unda mtiririko unaounga mkono utekelezaji.
- **Ubuni wa maoni ni muhimu zaidi ya kiasi:** maoni yaliyopangwa kwa mpangilio au yaliyo na muundo kupita kiasi yanaweza kudhuru; tia mkazo maoni yanayounga mkono ufahamu na uhuru wa mwanafunzi.
- **Weka waelimishaji katika dundu:** mifumo inayozingatia mitaala, yenye mwalimu katika dundu, huboresha uhusiano na kupunguza kelele.
- **Tathmini ubora na uhalali:** tathmini vipengele na maoni vilivyozalishwa na AI kwa ubora, uhalali, na [[equity-in-ai-education|usawa]], sio kasi ya uzalishaji tu.
- **Chukua tathmini ya mchakato kama falsafa, sio zana.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] huunganisha fasihi pana ya elimu ya juu katika falsafa ya "tathmini kwa kujifunza" inayoiweka [[feedback]] ya mchakato, endelevu, na binafsi kama falsafa kuu badala ya zana tu — ikisawazisha malengo ya mchakato na ya [[summative-assessment|mwisho]] na ikitia mkazo [[agency|wakala wa mwanafunzi]], kujidhibiti, na ujuzi wa [[metacognition|metaji]]. Wanatambua mazoezi matano yanayoimarisha kwa pande zote ([[authentic-assessment|tathmini halisi]], tathmini binafsi na [[peer-assessment]], tathmini upya, [[mastery-learning|kuainisha kulingana na viwango]], kuacha alama) ambayo kwayo falsafa hii inaweza kutekelezwa, wakibainisha kuwa kupokelewa kwake kunabaki kutolingana sana katika uwanja wa elimu ya juu.
- **Tathmini endelevu inaweka upya rekodi ya mchakato yenyewe.** Mfumo wa rejeleo wa AIM-CAI (karatasi ya nafasi, sio utekelezaji) unapendekeza kubadilisha tathmini ya awamu kama msingi wa ushahidi kuu na miundombinu ya tabaka sita: uzalishaji wa ushahidi katika mifumo, mfululijo unaohifadhi muktadha wa chanzo, tafsiri ya maana inayoongozwa na AI, tafsiri ya kimetriki, profaili za uwezo za muda mrefu, na utawala wa muungano. Jedwali lake la mabadiliko linaeleza mabadiliko: maoni ya kila-kazi yanakuwa maoni ya muda mrefu yanayounga mkono ushauri na tafakari; alama zilizo kuwa profaili za uwezo zinazobadilika; vyeti vilivyo kuwa rekodi za maendeleo wazi. Tabaka la utawala ni msukumo wa karatasi — mivutano saba iliyotajwa (utangamano dhidi ya uhuru wa kienyeji, faragha dhidi ya manufaa, wakala wa mwanafunzi dhidi ya uotomatiki wa utabiri, ufuatiliaji dhidi ya msaada, n.k.) kila moja imeingizwa na hatari na majibu, na onyo kwamba makusudi endelevu bila utawala yanafaa tabia za kitamaduni zinazotawala. Dai la ubunifu ni wa kuunganisha: vipengele vipo; mchango ni mifumo na ramani ya utawala. ([[mcnamara-aim-cai-continuous-assessment-2026]])

## Dhana Zilizounganishwa

- [[pedagogical-patterns]] — Miundo iliyopangwa inayochukuliwa na tathmini ya mchakato AI inapotoa sehemu ya maoni
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Tathmini ya mwisho: miundo inayopinga AI (mdomo, inayosimamiwa, mtihani wa kitabu kimoja)

## Makala Zilizounganishwa

- [[llm-multi-agent-conversation-assessment-2025]] — Mfumo wa mawakala wanne kwa tathmini inayotegemea mazungumzo ambaye mthamiaji wake anaepukia kuelekea kategoria ya kati (Hou et al. 2025)
- [[causal-modeling-competency-assessment-2026]] — Uundaji wa mfano wa sababu wa uingiliaji wa msaada kwa tathmini ya uwezo wa mwanafunzi
- [[nicola-richmond-programwide-assessment-genai-2025]] — Mbinu za kiwango cha mpango za kubuni upya tathmini katika enzi ya GenAI
- [[ai-feedback-enactment-workflow-2026]] — Kufanya maoni yaliyozalishwa na AI kuwa muhimu: kutoka utoaji hadi utekelezaji
- [[care-full-feedback-genai]] — Sanaa ya maoni yenye utunzaji katika enzi ya GenAI
- [[feedback-futures-genai]] — Mustakabali wa maoni: zaidi ya mipaka ya uwezo wa binadamu na GenAI
- [[sequenced-ai-feedback-learning]] — Athari na njia za maoni ya AI yaliyopangwa kwa mpangilio
- [[learner-centered-feedback-ai]] — Kuboresha maoni yanayozingatia mwanafunzi na AI
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — Kutoka kuainisha kiotomatiki hadi utambuzi wa kujifunza: somo la mbinu la tathmini ya mchakato inayosaidiwa na AI katika uandishi wa Kiingereza
- [[ai-internal-feedback-evaluative-judgments]] — Kukuza uhakiki wa kutathmini kupitia maoni ya ndani yanayosaidiwa na AI
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: kuainisha tathmini ya mchakato na uhandisi wa ilani wa binadamu katika dundu
- [[automated-formative-assessments-a-level-sciences]] — Tathmini ya mchakato ya kiotomatiki ya mara kwa mara
- [[ai-generated-feedback-higher-ed]] — Maoni yaliyozalishwa na AI katika elimu ya juu
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: maoni ya AI yanayozingatia mitaala
- [[genai-teacher-feedback-comparison]] — Kulinganisha maoni ya GenAI na ya mwalimu
- [[chatgpt-feedback-engagement-genai]] — Maoni ya ChatGPT na ushiriki
- [[code-gen]] — CODE-GEN: uzalishaji wa MCQ uliothibitishwa
- [[responsible-assessment-ai-era-stanford-2026]] — Tathmini yenye uwajibikisho katika enzi ya AI
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Kubuni kwa tathmini halisi
- [[automated-grading-linux-bash-examinations-large-language-models]] — Kuainisha kiotomatiki mitihani ya Linux/bash
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Majukumu ya mkufunzi na ya AI katika tathmini ya mchakato iliyoimarishwa na ChatGPT
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Kufikiria upya mitihani ya mdomo kama tathmini halisi, inayopinga AI
- [[roe-assessment-twins-2026]] — Pacha za tathmini za kuimarisha uhalali wa tathmini katika enzi ya GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: uzalishaji wa rubriki ya tathmini ya AI
- [[ai-assisted-instructor-supervised-grading-feedback]] — Kuainisha na maoni yanayosaidiwa na AI yanayosimamiwa na mkufunzi
- [[adaptive-scaffolding-cognitive-engagement-its]] — Ngazi za msaada za ICAP zinazobadilika katika ITS (BKT dhidi ya DRL)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM kama mawakala wa ubuni wa kieledu wa kurudia
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — Ubadilishaji hufanya maoni kuwa na ufanisi: ushahidi kutoka maoni yaliyozalishwa na AI kwa mipango ya watoto
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Kuainisha kiotomatiki, ufafanuzi wa utendaji, na kujifunza kwa kujidhibiti (Chen & Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Ujuzi wa utambuzi wa walimu katika tathmini ya mchakato inayosaidiwa na AI: kutoka utambuzi hadi meta-diagnosis
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Maana ya kuwa na manufaa na nia ya kutumia maoni yaliyozalishwa na LLM katika programu katika viwango vitatu vya kieledu
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Msaada wa kufundisha unaobadilika unaounganisha AI ya kizalishaji na uchanganuzi wa data kubwa katika elimu ya muziki
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Matumizi ya LLM ya wanafunzi na Mipaka ya Ugumu wa Maswali Yaliyozalishwa na AI katika Kozi za Sayansi ya Data
- [[mcnamara-aim-cai-continuous-assessment-2026]] — Miundombinu ya Tathmini Endelevu Inayoongozwa na AI (AIM-CAI): Kuunganisha Ushahidi wa Kujifunza Katika Miktadha na Muda (McNamara & Hasnine 2026)
- [[etq-ai-conversational-teacher-training-2026]] — Kitambulisho cha mazungumzo cha AI kwa dhana za ufundishaji zisizo sahihi, chenye mazungumzo yanayotegemea ushahidi (Miranda & Calvani 2026)
