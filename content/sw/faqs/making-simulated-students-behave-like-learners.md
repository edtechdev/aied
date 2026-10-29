---
title: "Tunawezaje Kufanya Mwanafunzi Aaniaye Aonyeshe Tabia Kama Mwanafunzi wa Kweli?"
created: "2026-10-13T06:20:00-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
contributors: [editor]
translation_of: faqs/making-simulated-students-behave-like-learners
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

Una onyesho siku ya Alhamisi. Mwanafunzi aliyeigwa ndani yake anakosa tatizo la sehemu, anapokea kidokezo kimoja, na kisha anatoa jibu sahihi pamoja na maelezo sahihi. Mtu chumbani anauliza kwa nini mwanafunzi anayejitahidi angefanya hivyo, na huna jibu.

Kabla ya onyesho linalofuata, unahitaji hili kwa uwazi: kumwamuru modeli kucheza mwanafunzi huzalisha sauti ya mwanafunzi. Kinachozalisha tabia ni kizuizi kwa kile kiiga kinachojua, muundo katika zamu, na uhakiki dhidi ya rekodi za wanafunzi halisi. Ni 3% tu ya masudio yanayoiga wanafunzi huhakiki kiiga chao baada ya matumizi, kwa hiyo hakuna atakayekuhakikia hili.

## Toleo fupi

**1.** Andika chini ni wanafunzi gani ambao huwaigi, na uweke sentensi hiyo pale watumiaji wako watakapoisoma.

**2.** Jaribu hali ya imani, si maneno. Uliza kiiga kinasema nini baada ya marekebisho.

**3.** Dhibiti maarifa kwa makusudi: taja hali ya maarifa, au ondoa maarifa hayo.

**4.** Andika mwingiliano zamu kwa zamu. Ilani bora ya nafsi haitengenezi kupotoka.

**5.** Pima uaminifu wa tabia na usikivu wa mwongozo kwa tofauti, dhidi ya rekodi za wanafunzi halisi.

## Amua ni swali gani kiiga kinajibu

Kazi tatu zinakusanywa pamoja chini ya "mwanafunzi aliyeigwa," na zinahitaji mashine tofauti. Kufanya mazoezi ya mwalimu au mkufunzi kunahitaji mwenza anayejifanya kwa njia ya kusadikika chini ya shinikizo. Kukagua jinsi AI inavyowatendea wasifu tofauti wa wanafunzi kunahitaji ufuniko wa wasifu unaojali. Kutabiri matokeo kwa kozi kunahitaji mgawanyo wa wanafunzi badala ya mtu mmoja anayesadikika. Kiiga kilichojengwa kwa kazi ya kwanza kitakukatisha tamaa kwenye ya tatu, na ushahidi hapa chini unaendelea kuzitenganisha.

## Taja wanafunzi ambao huwashughulikii

Ugunduzi wenye manufaa zaidi kwa yeyote anayekaribia kumwamini kiiga unahusu ufuniko. Walimu kumi na wawili waliokufunza wanafunzi wa LLM waliripoti lugha ngumu kupita kiasi, hisia zinazokosekana, usikivu usio wa kawaida, na miruko ya maarifa isiyoelezwa, na simulizi ziliwakilisha roboduara moja tu kati ya nne za tabia halisi za wanafunzi ([[llm-student-simulation-teacher-insights|Martynova na wenzake, 2026]]). Roboduara waliyoifunika ilikuwa rahisi zaidi kuiga.

Hilo ni muhimu kwa sababu karibu hakuna anayehakiki. Ni 3% tu ya masudio yanayoiga wanafunzi huhakiki kiiga chao baada ya matumizi. Ukijenga kimoja na kuruka uhakiki, uko katika walio wengi kupita kiasi, na pia wewe ndiye sababu takwimu hiyo inabaki ya kunukuliwa.

## Dhibiti kile kiiga kinachojua

Modeli yenye uwezo haiwezi kujifanya kwa urahisi kuwa mjuzi wa sehemu. Utafiti unaiita hii **kitendawili cha uwezo**: modeli zenye uwezo mpana zinapoombwa kuiga wanafunzi wenye maarifa ya sehemu huzalisha mifumo ya makosa na mienendo ya kujifunza isiyo halisi.

Kupotoka kuna mwelekeo, na kunaelekea wanafunzi wanaohitaji kuigwa zaidi. Dhidi ya mawazo ya wanafunzi yaliyotolewa kutoka masomo 49 ya sayansi yanayolingana na NGSS, modeli sita zilihifadhi mawazo mengi ndani ya wigo wa maarifa unaotarajiwa na takriban theluthi mbili katika kiwango cha kusoma kinacholengwa au chini yake, kisha zikapita kipimo hasa pale mwanafunzi alipokuwa mdogo zaidi. Mawazo ya msingi na ya shule ya kati mara nyingi yalipita wigo wa maarifa na kiwango cha kusoma cha darasa linalolengwa, na mkusanyiko ulielekea kwenye hoja pana, msamiati wa kiufundi zaidi, na viashiria vichache vya kutokuwa na uhakika ("labda", "inaonekana") kuliko mawazo halisi ya somo ([[llm-simulating-student-scientific-thinking-2026|Nguyen na Cao, 2026]]).

Mambo mawili kutoka utafiti huo. Uchaguzi wa modeli si wa kipimo kimoja, kwa kuwa mfumo unaolingana kwa karibu na mawazo ya somo unaweza bado kuyapa kiwango cha juu kuliko darasa. Na suluhisho mara nyingi ni la kufundisha: ilani ya wazi ya kiwango cha darasa iliwarudisha modeli nyingi ndani ya wigo.

## Taja hali, au ondoa maarifa

Ikiwa modeli inajua mengi mno, unaweza kutaja hali inayopaswa kuwa nayo au kuondoa maarifa ambayo haipaswi kuwa nayo.

**Weka sharti la hali ya maarifa.** Mfumo usiohitaji mafunzo hujenga mfano wa kiakili wa kila mwanafunzi kutoka [[knowledge-graph|grafu ya maarifa]] na hupima watahiniwa wa utafutaji wa miale dhidi yake, ukiripoti uboreshaji wa 100% katika usahihi wa uigaji ([[simulating-students-diverse-cognitive-levels-2025|Wu na wenzake, 2025]]). Ubora wake hupanda pamoja na kiwango cha kiakili cha mwanafunzi, kwa hiyo wanafunzi hafifu hubaki kesi ngumu zaidi, jambo lisilo la bahati ikizingatiwa kwamba kwa kawaida ndio lengo. Kuweka mienendo ya kiakili badala ya nafsi isiyobadilika kunakwenda mbali zaidi: masasisho ya hali ya CogEvolution yenye msingi wa ICAP yalifikia R²LC = 0.92 pale mawakala wasiobadilika wanafikia 0.45, na yalishuka hadi 0.58 bila moduli yake ya ICAP ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang na wenzake, 2026]]).

**Ondoa maarifa.** Kuzuia vipengele 16 vya maarifa vilivyolengwa katika Mistral-7B kulishusha usahihi kutoka takriban 0.75 kwa uwiano wa kusahau wa 10% hadi chini ya 0.5 kwa 40%, huku modeli ya msingi ikibaki karibu na 0.85. Maarifa yaliyozuiwa yalithibitika kuweza kurejeshwa kupitia kujifunza upya kusimamiwa na mazungumzo yaliyoongozwa na mkufunzi ([[simulating-novice-students-machine-unlearning-2026|Song, Guo na Lin, 2026]]). Hii ni kitu kilicho karibu zaidi na kutengeneza mwanzo kabisa, na uwezo wa kurejeshwa unakuwa sifa ikiwa unataka kiiga kijifunze wakati wa kikao.

## Andika mfuatano wa zamu, si nafsi

Utulivu wa nafsi unageuka kuwa tatizo la ubunifu wa mwingiliano badala ya uchaguzi wa modeli. Kuvuka LLM tano kwa miundo mitatu ya ilani na nafsi nne za ukali wa ADHD, mwingiliano ulioandikwa wenye kushikamana na kazi uliondoa kupotoka kwa tabia kulikopimwa na mwangalizi, kwa hadi 97% dhidi ya mazungumzo yasiyoandikwa. Bila maelekezo ya wazi ya nafsi, uwakilishi wa msingi wa mwanafunzi ulielekea kwenye dalili kubwa za ADHD ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase na Leins, 2026]]).

Ikiwa kiiga chako kinapotoka, angalia unachokiomba kifanye zamu kwa zamu kabla ya kubadilisha modeli au kuandika upya maelezo ya mwanafunzi.

## Pima mambo mawili, si moja

StudentSim inahitaji sifa mbili zishikiliane: **uaminifu wa tabia**, yaani jinsi kiiga kinavyolingana na majibu ya mwanafunzi mwenyewe, na **usikivu wa mwongozo**, yaani jinsi kinavyosasisha kwa uhakika kuelekea pale mwongozo wa mkufunzi unaelekeza. Kipimo chake kinaweka mkusanyiko wa umma wa wanafunzi (chesi, uandishi wa Kiingereza kama lugha ya pili, hisabati) katika itifaki ya kila mwanafunzi ambayo kiiga chochote hupimwa na kupewa alama juu yake kwa rekodi zilizotengwa. Ufuatiliaji wa hali mahususi kwa kikoa ulijitokeza hafifu kwenye usikivu, na uigizaji wa nafasi wa LLM wa ilani pekee ulijitokeza hafifu kwenye uaminifu ([[studentsim-llm-student-simulators|Yang na wenzake, 2026]]). Kiiga kinaweza kupita jaribio moja na kushindwa lingine, kwa hiyo ripoti yote mawili.

Kama uthibitisho wa dhana, StudentSim iliyogandishwa iliyotumika kama thawabu katika mzunguko wa [[reinforcement-learning|kujifunza kwa kuimarisha]] wa mkufunzi wa chesi ilizalisha wakufunzi ambao wataalam waliwapa alama kuwa sahihi zaidi, walioongozwa vizuri zaidi, na waliobinafsishwa zaidi kuliko wale waliopewa mafunzo dhidi ya thawabu ya kiiga cha LLM cha mstari wa mbele au bila RL kabisa. Kiiga kizuri kinaweza kuwa ishara ya mafunzo na kipimo pia.

Uaminifu wa kiwango cha hatua una kikomo chake. Viiga vya wanafunzi huiga vitendo vinavyoonekana bila hoja fiche iliyo nyuma yake, na [[inside-llm-student-simulator-reasoning-2026|INSIDE]] hurekebisha modeli kuzalisha mazungumzo ya ndani kabla ya kila hatua, kikifikia upatanisho wa juu zaidi kati ya hoja zilizozalishwa na marekebisho halisi ya msimbo kwa 51.8% kwenye matatizo yanayojulikana na 57.9% kwenye yasiyojulikana, bila kupoteza uaminifu wa hatua (Niousha na wenzake, 2026). Ikiwa unajali kwa nini mwanafunzi wako aliyeigwa alifanya kitu, kulinganisha hatua hakutoshi.

## Hakiki dhidi ya wanafunzi halisi na uripoti msingi

Ulinganisho mawili unaonyesha uhakiki unagharimu nini.

Kupima mbinu tisa za uigaji dhidi ya vipimo saba vya msingi wa rejea kwenye mazungumzo 382 yaliyotengwa kutoka mkusanyiko mkubwa zaidi wa umma wa mazungumzo halisi ya hisabati kati ya wanafunzi na wakufunzi, ilani ilibaki nyuma ya urekebishaji kwenye vitendo vya mazungumzo (0.4998 dhidi ya 0.6840), ROUGE-L (0.1648 dhidi ya 0.3212), na ufanano wa kosini (0.5460 dhidi ya 0.7390). Mbinu bora iliyojaribiwa, uboreshaji wa mapendeleo kwenye modeli ya 8B, ilishinda urekebishaji uliosimamiwa kwa kiasi kidogo tu na ilikuwa mbaya zaidi kwenye makosa, na tathmini ya binadamu ya wakufunzi watatu ilirudia mpangilio huo ([[simulated-students-tutoring-dialogues-2026|Scarlatos na wenzake, 2026]]). Kilele cha ngazi hii kinakaa karibu na katikati, kwa hiyo msingi unaoripoti ndio unaamua jinsi namba yako mwenyewe inavyoonekana ya kuvutia.

SWIM ni ulinganisho ulio wazi zaidi wa ilani, urekebishaji na kujifunza kwa kuimarisha, kwa sababu hupima kila insha iliyozalishwa dhidi ya wasifu wa sifa unaolengwa badala ya kuihukumu kwa hisia. Ilani yenye msingi wa rubriki ilitoa udhibiti mdogo hata kwa modeli imara za kumilikiwa, ikiwa na wastani bora wa QWK ya sifa wa 0.577 (Claude Sonnet) na 0.422 (GPT-5.4), na karibu sifuri kwa modeli ya 7B iliyo wazi. Urekebishaji uliosimamiwa kwenye jozi halisi za alama na insha ulifikia 0.474 ± 0.023 kwa modeli hiyo ya 7B. GRPO yenye thawabu inayotokana na upimaji wa insha wa kiotomatiki ilifikia 0.618 ± 0.005, na faida zikidumu kwa wapimaji wawili wa kujitegemea ambao sera haikufunzwa dhidi yao ([[swim-student-writing-simulation-2026]]).

Ilani pia ilizalisha idadi iliyoboreshwa badala ya halisi: wastani wa alama jumla iliyosanifiwa wa 0.74 dhidi ya 0.58 kwa wanafunzi halisi, na urefu wa wastani wa maneno 304 dhidi ya 167. Modeli zilizopewa mafunzo zilirejesha mgawanyo wa alama na urefu wa binadamu bila usimamizi wowote wa urefu. Jambo moja lilibaki gumu: umbo halisi la uwezo mdogo. Modeli zilizopewa mafunzo zilirejesha sarufi lakini ziliandika makosa machache mno ya tahajia na sarufi, huku ilani ikiiga udhaifu kwa uharibifu wa juu juu, tahajia mbaya zikinyunyizwa kwenye maneno yenye uwezo mwingine.

Uhalisia wa juu juu ni jaribio hafifu kwa pande zote mbili. Katika utafiti wa upofu, wataalam wa kuweka alama waliainisha vibaya mawasilisho 164 kati ya 196 (83.7%) ya Java yaliyozalishwa na LLM kama yaliyoandikwa na binadamu, kwa sababu makosa yalikuwa hayatofautiani kiutendaji na halisi, na upatanisho na makosa halisi kisha ukashuka kadri ugumu wa tatizo ulipopanda ([[simulating-students-java-programming-errors-llms|Keramati na wenzake, 2026]]). Katika modeli saba kutoka vigezo 4B hadi 120B, viiga vilibadilisha kwenda jibu sahihi kwa viwango vinavyokaribia sawa bila kujali maoni yaliyopokea, kwa hiyo ufanano wa matokeo hausemi chochote kuhusu hali ya imani iliyo nyuma yake. Mafunzo dhidi ya **Selective Flip Score** yaliinua uaminifu kwa hadi +0.56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar na Sachan, 2026]]).

## Hakiki kama maelezo yangetosha

Kabla ya kujenga kikundi, hakiki chaguo la bei ndogo zaidi. Kwa kutathmini uzoefu wa kujifunza mtandaoni kabla wanafunzi hawajaanza, kutabiri kuacha masomo na kukamilisha na kutoa maoni ya ubunifu, wakala mmoja wa wavuti wa "kueleza" anayepitia somo na kuzalisha maelezo mazuri ya uzoefu alishinda kuiga idadi ya wanafunzi moja kwa moja.

Wanafunzi walioigwa katika ulinganisho huo walionyesha wigo mdogo zaidi wa tabia kuliko wanafunzi halisi: kwa mawakala 100 kwenye masomo matano ya majaribio walirudia takriban 4% tu ya njia ambazo wanafunzi halisi walichukua, huku wakigharimu kompyuta nyingi zaidi. Mfululizo wa kueleza-kisha-kutabiri ulifikia utabiri bora wa mgawanyo wa kuacha masomo kwenye kozi kubwa ya CS1 ya kimataifa, ukiwa na wastani wa JSD wa 0.060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell na Piech, 2025]]).

Mpaka inaochora ni wa kivitendo. Kuiga mgawanyo wa wanafunzi kunaweza kuwa hakuhitajiki, au kunaweza kuwa kinyume cha manufaa, pale lengo ni kutabiri matokeo au kukosoa ubunifu. Uigaji unapata gharama yake pale ufuniko wa tofauti halisi za wanafunzi unapojali, kama vile kukagua jinsi AI inavyotenda wasifu mbalimbali au kumpa mwalimu kitu cha kufanyia mazoezi.

## Wajenzi wanakosea nini kuhusu hili

Uhalisia wa juu juu ndio lengo. Kiwango cha 83.7% cha uainishaji mbaya kwa msimbo ulioandikwa na mashine na kubadilisha majibu kwa karibu usawa katika modeli saba vyote vinasema hakimu wa binadamu anayesoma matokeo hawezi kuona sifa unayoidai. Jaribu jibu kwa marekebisho badala yake.

Ilani bora ya nafsi hutengeneza kupotoka. Zamu zilizoandikwa zenye kushikamana na kazi zilipunguza kupotoka kulikopimwa na mwangalizi kwa hadi 97% katika modeli tano na miundo mitatu ya ilani. Ubunifu wa zamu ndio uliofanya kazi.

Modeli ya msingi yenye nguvu zaidi hufunga pengo la uwezo. Modeli imara ya kumilikiwa ilipata 0.422 kwenye QWK ya sifa chini ya ilani huku 7B iliyorekebishwa ikifikia 0.474, na ulinganisho huo wa modeli sita ulipita kipimo vibaya zaidi katika viwango vya chini vya darasa. Uchaguzi wa modeli hubadilisha mhimili mmoja wa uaminifu kwa mwingine.

Uhakiki unamaanisha mwenzako alisoma nakala na kudhani inasikika sawa. Tokeo la Java linaonyesha hukumu hiyo inafika mbali kiasi gani. Uhakiki unamaanisha rekodi zilizotengwa kutoka wanafunzi halisi na msingi unaoweza kuutaja.

Kuiga idadi ndio chaguo la kina. Kwa mawakala 100 uigaji ulifunika takriban 4% ya njia ambazo wanafunzi halisi walichukua, kwa kompyuta nyingi zaidi kuliko wakala wa kueleza.

## Yatakayokurudia

**"Walimu hawakuweza kutofautisha kiiga chetu na mwanafunzi."** Katika utafiti wa upofu wa Java, wataalam wa kuweka alama waliainisha vibaya 83.7% ya mawasilisho ya mashine kama ya binadamu. Hilo hupima watoa alama, na linaacha hali ya imani bila kuchunguzwa.

**"Urekebishaji uko nje ya wigo wa timu yetu."** Basi weka dai ndani ya kile ilani inaunga mkono, na sema hivyo. Ilani iliweka kikomo cha 0.577 kwa modeli imara zaidi iliyojaribiwa na karibu sifuri kwa 7B iliyo wazi, na ilizalisha mgawanyo wa alama ulioboreshwa.

**"Hatuna ufikiaji wa data za wanafunzi halisi."** Itifaki ya StudentSim imejengwa kutoka mkusanyiko wa umma wa wanafunzi katika chesi, uandishi wa lugha ya pili, na hisabati. Data ya umma hupunguza unachoweza kudai kuhusu idadi yako mwenyewe, na inakupa msingi, ambayo ni kitu ambacho ripoti nyingi huacha.

**"GRPO ilishinda urekebishaji uliosimamiwa, kwa hiyo tunapaswa kufundisha kwa RL."** Ilikwenda hivyo, kwa 0.618 dhidi ya 0.474. Umbo la uwezo mdogo lilibaki gumu katika visa vyote viwili, likiwa na makosa machache mno ya tahajia na sarufi, na katika kipimo kingine uboreshaji wa mapendeleo ulishinda urekebishaji kwa kiasi kidogo tu na ukashindwa kwenye makosa. Hakiki ni sifa ipi matumizi yako yanategemea.

**"Wanafunzi hafifu ni sehemu ndogo ya watumiaji wetu."** Wao ni kesi ngumu zaidi kwa kila mbinu katika ukurasa huu, na ugunduzi wa ufuniko unasema uigaji unakusanyika katika roboduara rahisi zaidi. Ikiwa kiiga chako kitatumika kufikia hitimisho kuhusu wanafunzi wanaojitahidi, pengo hilo linapaswa kuwa katika ripoti.

## Cha kufanya wiki hii

**1.** Andika sentensi ya ufuniko: ni wanafunzi gani ambao kiiga hiki hakiwakilishi. Iweke katika README na maelezo ya onyesho.

**2.** Ongeza kipimo kimoja kwenye seti yako ya majaribio kinachorekebisha kiiga na kuhakiki kama kinabaki kikikosea.

**3.** Badilisha mazungumzo ya nafsi yasiyo na muundo katika mtiririko mmoja na zamu zenye kushikamana na kazi, na linganisha kupotoka.

**4.** Pima kiiga kimoja kilichopo dhidi ya rekodi halisi zilizotengwa kwenye uaminifu na usikivu, na ripoti namba hizo mbili kwa tofauti.

**5.** Endesha hakiki ya wakala wa kueleza kwenye swali unalohitaji jibu lake kweli kabla ya kufadhili kikundi.

## Wapi kwenda baadaye

[[simulating-students]] ni ukurasa kamili wa dhana. [[checking-whether-educational-ai-works]] unashughulikia kutathmini mifumo unayojaribu dhidi ya kiiga, na [[making-ai-better-at-supporting-learning]] unashughulikia mbinu za mafunzo zilizo nyuma ya matokeo ya urekebishaji hapa. [[addressing-common-misconceptions-ai-education]] unachukua swali la kama wanafunzi walioigwa wanaweza kusimama badala ya wanafunzi halisi katika utafiti.
