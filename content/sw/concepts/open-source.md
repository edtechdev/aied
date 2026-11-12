---
title: Chanzo Huria
created: "2026-10-13T07:38:00-04:00"
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
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

> **Chanzo Huria** — matumizi ya *mifano, msimbo, data, na maudhui* yaliyo na leseni huria katika [[ai-education|AI katika elimu]]. Ufunguzi ni kizuizi kikuu cha hifadhi ya maarifa dhidi ya kufungwa kwa muuzaji na [[privacy|mfichiko wa data]]: mifano ya uzito wazi inaweza kukimbia kwenye vifaa vya chuo ili kutimiza wajibu wa FERPA, GDPR, na Sheria ya AI ya EU, maktaba zilizo na leseni huria zinaweza fahirishwa na kurekebishwa kwa ustadi bila ruhusa ya mchapishaji, na matoleo ya wiana na seti za data huria yanafanya [[research-methods-aied|utafiti]] uweze kurudiwa. Mizigo ni ya kweli kiasi kile: miundombinu na uhakikisho wa [[pedagogical-safety|usalama]], matengenezo yanayoishi zaidi ya ruzuku, na ubora ambao ufunguzi hauhakikishi yenyewe.

## Maswali ya Kutafakari

- \"Chanzo huria\" mara nyingi husikiwa kama \"bila malipo na rahisi.\" Ni tabaka gani kati ya yale manne hapa — mifano, msimbo, data, au maudhui — ambalo linagharimu taasisi yako zaidi kukubali, na kwa nini?
- Uzito wazi unafanya uwekaji wa ndani uwezekane, lakini mtu bado anapaswa kukaribisha, kuboresha, na kutathmini mfumo. Nani anapaswa kumiliki kazi hiyo baada ya mradi wa awali kumalizika, na nani analipia?
- Utafiti mmoja hapa uligundua mfano wazi wa 32B ukishinda mfumo wa biashara mkubwa zaidi kwa maarifa ya ufundishaji, wakati mwingine uligundua kila mfano wazi uliojaribiwa chini ya msingi wa binadamu kwa ujuzi wa uonyeshaji wa kisayansi. Unaamua vipi ni wiana lipi sahihi kwa uamuzi wako?
- Maktaba moja iliyo na leseni huria ni kile kinachoruhusu shule kuendesha msaidizi wa ndani ya eneo juu ya nyenzo zake za kozi. Ni wajibu upi unaokuja na hilo — kwa waandishi wa awali, kwa wanafunzi ambao data yao imefahirishwa, na kwa leseni yenyewe?
- Kama [[generative-ai|AI inayozalisha]] inaweza kuzalisha kozi katika muda usiozidi nusu saa kwa dola kadhaa, ni mantiki gani iliyosalia kwa rasilimali za elimu huria — gharama, uhuru wa leseni, uhakikisho wa ubora, au kitu kingine?
- Je, taasisi zinapaswa kutendea kukubali chanzo huria kama uamuzi wa manunuzi, uamuzi wa miundombinu, au uamuzi wa kielimu? Nini kinavunjika kama kinatendewa kama moja tu kati yao?

## Utangulizi

Kwa kupungua, \"fungua\" katika elimu ya AI inamaanisha kuwa aina nne za kifaa zinapatikana kwa ukaguzi, matumizi upya, na marekebisho: **zito za mfano**, **msimbo wa chanzo**, **data na vyombo vya tathmini**, na **maudhui ya kielimu**. Makala za hifadhi ya maarifa zinajikusanya bila usawa katika tabaka hizi, na picha inayotokana ni yenye manufaa zaidi kuliko kauli mbiu: ufunguzi hununua vitu mahususi — udhibiti wa ndani, uwezo wa ukaguzi, uwezo wa kurudiwa, na uwazi wa kisheria — na unabeba gharama mahususi — miundombinu, utaalam, matengenezo, na mzigo wa uhakikisho wa ubora unaoenda kutoka kwa muuzaji kwenda kwa taasisi.

### Mifano ya wazi na uzito wazi

Uzito wazi unamaanisha zaidi pale data ya wanafunzi haiwezi kuondoka kwenye chuo. [[lata-ferpa-compliant-local-llm-autograder|LaTA]] ni kipanga alama cha ndani cha [[llm]] chenye kuzingatia FERPA, cha kuingia kwa haraka, kwa kozi za [[stem-education|STEM]] za darasa la juu, lililojengwa juu ya rubriki zilizoandikwa na wakufunzi na suluhisho za kumbukumbu, bila gharama ya ziada kwa kila mwasilisho. [[programming-its|SCRIPT]], mfumo wa [[intelligent-tutoring|ufundishaji]] wa Python katika Chuo Kikuu cha Bielefeld, kwa makusudi **huepuka API za LLM za kibiashara** na hujiweka mfano wa Llama-70B wa uzito wazi ili kutimiza GDPR na Sheria ya AI ya EU (ambayo inaainisha matumizi kadhaa ya AI katika elimu kama yenye hatari kubwa), kwa kutenga kumbukumbu za IP kutoka kwa mfumo wa ufundishaji, kwa kutumia majina ya watumiaji ya uwongo, na kwa kurekodi mibonyezo ya kibodi tu kwa idhini iliyo wazi — uchaguzi ambao waandishi pia wanawajibikia athari ndogo za mazingira na uwezo bora wa kurudiwa.

Ubora sio tena bei ya moja kwa moja ya ufunguzi. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] inatumia [[reinforcement-learning|kujifunza kwa kuimarisha]] (DAPO) na kurekebisha kwa ustadi chini ya usimamizi kwa familia ya mifano ya wazi, ikichimba hasi ngumu 440, ikizalisha majibu 40,000 bandia yaliyopunguzwa hadi mifano 1,050 iliyopangwa kwa ugumu, na ikifikia **96.52%** kwenye kiwango cha ufundishaji — juu ya 90.55% ya Gemini-3 Pro — katika vigezo 32B vinavyokaa kamili. [[aiawe-automated-writing-evaluation|AiAWE]] inafikia hitimisho zinazofanana kwa [[automated-essay-scoring|tathmini ya uandishi otomatiki]]: Gemma-3-27B-it wa uzito wazi uliorekebishwa na LoRA unazidi LLaMA-3.3-70B na msingi wa GPT-3.5 uliorekebishwa kwa ustadi juu ya insha 480 za TOEFL na unakimbia kwenye seva ya daraja la watumiaji, pamoja na ugunduzi wa kushangaza wa kando kwamba idadi ya vigezo *si* mtabiri mwaminifu wa utendaji wa mbele chini ya marekebisho ya LoRA. Ushahidi wa kupinga unastahili nafasi ile ile: [[mllm-scientific-visualization-literacy|kipimo cha MLLM sita]] (tatu zilizofungwa, tatu wazi) kiligundua kila mfano wa chanzo huria chini ya msingi wa binadamu kwa ujuzi wa [[visualization]] ya kisayansi wakati Gemini ilizidi wastani wa binadamu katika sehemu kadhaa. Ufunguzi huinua dari ya udhibiti, si ya uwezo.

OmniEdu inatoa mtiririko mzima badala ya uzito tu: usimamizi unaosawa wa uwezo juu ya mchanganyiko wa mifano 69,999 uliinua kila kiwango cha familia ya K–12 ya 4B/9B/27B wazi — mfano wa 4B uliorekebishwa ulipata pointi 55 za kiwango cha ushindi wa MathTutorBench juu ya msingi wake — wakati uchunguzi wa hali ya maarifa ukibaki uwezo wake mdogo zaidi katika 54.04% ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### Zana huria, walimu, na miundombinu ya utafiti

Kesi iliyo wazi zaidi ya msimbo wazi ni kurudiwa. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — mfumo wa kwanza wa ufundishaji unaobadilika ulio wazi kabisa uliojengwa juu ya kanuni za ITS — unaunganisha **msimbo wa chanzo wa leseni ya MIT** na **maktaba ya maudhui ya Creative Commons (CC BY)** kutoka kwa vitabu vya algebra vya OpenStax, pamoja na [[knowledge-tracing|ufuatiliaji wa maarifa]], majaribio ya A/B, na msaada wa LTI; lengo lake la wazi la ubuni ni kwamba mtafiti anaweza kufanya jaribio na kisha kuchapisha mfumo mzima wa mwanzo-hadi-mwisho, maudhui, na jukwaa kama kiungo cha hazina. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] inatoa hoja ile ile katika tabaka la mbinu, ikibadilisha makadirio ya sehemu ya expectation-maximization na uchanganuzi kamili wa Bayesian (HMC, uchanganuzi wa variational, Pathfinder, optimization) katika kifurushi cha wazi cha Python kinachofichua kutokuwa na uhakika ambao kulinganisha kwa A/B kwa uingiliaji unaobadilika kunategemea. [[deeptutor]] inatoa mfumo kamili wa ufundishaji wa [[agentic-ai|wakala]] wenye kumbukumbu ya kijifunza ya msitu wa nyayo — Apache 2.0, na hadi mwisho wa 2026 nafasi kamili ya kujifunza badala ya mtiririko tu ambao karatasi yake inakipima — na kizalishaji cha darasa cha [[mooc-to-maic|MAIC]] OpenMAIC inatolewa chini ya MIT pamoja na utafiti unauthibitisha, hivyo kozi inaweza kuzalishwa, kujiweka na kuchunguzwa badala ya kusomwa tu; [[vismatic-secure-sandbox-cs-education|VISMATIC]] inachapisha sanduku yake ya kontena kwa ufuatiliaji unaoelekezwa kwa mchakato, hivyo taasisi zingine zinaweza kukubali mfano wa uadilifu badala ya toleo la muuzaji. Msimbo wazi pia unabeba mzigo wa uwazi: hati za [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] za ilani za ufundishaji zinazojua hisia zimechapishwa kwa ukaguzi na kazi zaidi za [[llm-training-and-fine-tuning|mafunzo ya kielimu]]. Miundombinu huria inaweka kizingiti cha kile mawakala wa elimu wanapaswa kufanya: [[agentic-ai-education-scoping-review|mapitio ya masudio 474 ya wakala-AI]] ya hifadhi ya maarifa yanatumia mradi wa wakala wa chanzo huria unaokua kwa kasi kama kiwango chake cha \"wakala wa mpaka wa mbele\" na yanagundua mifumo ya elimu bado inakosa usimamizi wa zana unaotawaliwa, kumbukumbu inayoendelea, upangaji wa muda mrefu, na kitendo kinachoweza kukaguliwa.

### Wiana huria, seti za data, na uwazi wa mbinu

Michango kadhaa hapa ni *miundombinu huria ya tathmini* badala ya mifumo. [[cdpk-pedagogy-benchmark-llms|Wiana la Ufundishaji]] (CDPK + SEND, lililojengwa kutoka vipengele halisi vya mtihani wa [[teacher-role|walimu]] wa Chile) linahusisha mifano 97: DeepSeek R1 wa uzito wazi ilifikia 86.65% dhidi ya kumi bora ya mifano ya kufikiri ya kufungwa kwa kiasi kikubwa, na mpaka wa gharama–usahihi ulihama kutoka ~50% hadi ~82% katika \$0.10/M tokeni za kuingiza kati ya Aprili 2024 na Juni 2025. Qwen-3 8B wa wazi katika 3.5¢ ilikaribia mfano bora wa kufungwa wa Aprili 2024 katika gharama ya chini zaidi ya mara 400×. Utendaji unashuka kwa ukali chini ya vigezo takribani 8B, ambayo ni kizuizi cha vitendo cha kupanga kwa uwekaji wa chuo. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] inatoa seti ya data, mpangilio, na mfano wa kwanza kwa tathmini inayotegemea nyayo ya ufundishaji wa wakala wengi wenye ujuzi wa kijamii (washiriki 540, vipindi 360, matukio ya kazi 1,440). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] inaonyesha kesi ya kitamaduni ya data huria: jozi 24,795 za maagizo–majibu katika lugha saba na mbinu 41 za kielimu zilizotolewa kutoka vyanzo vya Vedic na vya kitamaduni, zilizolinganishwa na [[curriculum-design|mtaala]] wa CBSE, ambazo ziliruhusu mfano mdogo wa 7B kukaribia mfano wa kumbukumbu wa matumizi ya jumla mkubwa zaidi (alama ya kawaida ya hakimu 6.39 dhidi ya 6.54) katika sehemu ndogo ya gharama ya uwekaji. [[benchmark|Wiana]] lililoandikwa na wanafunzi ni njia nyingine ya ufunguzi: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] inakusanya kazi 80 za muda mrefu za kitaaluma kutoka wagombea 230 waliowasilishwa na wanafunzi (zinahusisha nyanja 25+ za kitaalamu, 16 zinazohitaji GPU za CUDA, zikitekelezwa katika sanduku za Docker zilizotengwa) na inapanua mfumo wa wazi wa wakala kuingia katika tathmini ya ngazi ya kitaaluma. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] wanadai kwamba ufunguzi ni wajibu wa [[sustainability|mazingira]] pia: wakipitia karatasi zote za AIED 2025, waligundua mtindo wa \"kukubaliwa kwa LLM bila ufichuzi\" na walijibu na mbinu ya kupima ya chanzo huria — zana za programu pamoja na formula inayokadiria gharama ya kikokotozi hata wakati idadi za vigezo hazijulikani.

### Mahali maudhui huria yanapokutana na msimbo huria

Rasilimali za elimu huria zina ukurasa wake, [[open-education]], kwa sababu hoja huko ni ya kielimu na inayoongozwa na leseni badala ya miundombinu. Kinachostahili kuwa kwenye ukurasa huu ni mshono ambapo ufunguzi huo wawili hukutana, na ni mwembamba kuliko unavyoonekana.

Mshono huo ni kizuizi cha upatanifu wa leseni. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] inaoanisha msingi wa msimbo wenye leseni ya MIT na maktaba ya maudhui ya CC BY ya vitabu vya algebra vya OpenStax, ambayo inamaanisha masharti ya msimbo na masharti ya maudhui yanapaswa kuwekwa yanayopatana kwa ubuni, na leseni inayoruhusu upande mmoja haitoi upande mwingine. Mshono huo pia huonekana pale maktaba yenye leseni huria ndiyo inayofanya mfumo wa ndani uwe halali kuendeshwa: [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] wanafahirisha nyaraka 82 za OER katika msaidizi wa hifadhi ya maarifa kwenye GPU ya watumiaji ya 12 GB, na simulizi lote ni simulizi la chanzo huria kuhusu quantization, [[hallucination-risk|kutunga vitu visivyokuwepo]] na asili badala ya hoja kuhusu vitabu vya masomo.

Ukurasa huu haufanyi jambo moja: hautetei rasilimali. Ikiwa kitabu cha masomo kilichoandikwa na mashine ni huria kwa msingi, ikiwa leseni inaendelea kutumika katika mchanganyiko uliozalishwa, na ikiwa ufundishaji huria hufundisha kitu kinachoweza kupimwa ni maswali ya [[open-education]], na ndiyo maswali ambayo fasihi ya sasa ya uwanja inashughulikia kwa hakika.

### Faida na mizigo

- **Faida.** Uhuru wa data na kuzingatia udhibiti ([[privacy]], [[regulation]]) kupitia ukaribishaji wa ndani; udhibiti wa gharama, kwa kuwa uchanganuzi wa ndani hana ada ya kila hoja na mifano ya wazi inakaribia ubora wa biashara katika sehemu ndogo ya bei ([[singh-eduqwen-pedagogical-rl-2026]]); uwezo wa kurudiwa, kwa sababu mfumo, ilani, maudhui, na data zinaweza kusafirishwa na karatasi ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); uwezo wa ukaguzi na mapitio ya usalama chini ya [[governance|utawala wa taasisi]]; na uwezo wa kurekebisha kwa ustadi kwa [[pedagogy]] mahususi au hifadhi ya maarifa ya jamii mahususi ([[iks-instruct-dataset-indian-knowledge]]).
- **Mizigo.** Ukaribishaji wa ndani unahitaji vifaa na utaalam ambao taasisi nyingi hawana; ubora na [[pedagogical-safety|usalama]] hauhakikishiwi kwa njia ya moja kwa moja — mifano ya wazi inaweza kubaki nyuma ya misingi ya binadamu kwa ujuzi mahususi ([[mllm-scientific-visualization-literacy]]) na quantization inapandisha viwango vya kutunga vitu visivyokuwepo isipokupunguzwa ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]); mtu fulani anapaswa kutengeneza mfumo baada ya kuchapishwa ([[programming-its]] inaandikisha timu ndogo ya wanafunzi wa PhD, mfichiko wa usalama wa kazi inayoendelea, na mzigo mkubwa wa kuzingatia); na leseni huria ni ruhusa, si bidhaa inayofanya kazi — matengenezo yanayoweka mfumo uliotolewa yanayotumika yanaenda kwa [[educational-technology-developers]] wowote walioujenga, na ufadhili na motisha yao yanaamua kama hazina inayoweza kugawanyika, bidhaa inayotunzwa, au hakuna ni kile taasisi inayorithi ruzuku inapomalizika.

### Kuweka ufunguzi katika mazoezi

- **Kwa wakufunzi na taasisi:** kagua leseni ya *maudhui* na ya msimbo pia kabla ya kukubali mfumo — msimbo wa MIT juu ya vitabu vya CC BY unatumika tena, lakini leseni inayoruhusu haihakikishi kwamba njia za ufundishaji, benki za vipengele, au tafsiri zipo. Pendelea mifano ya wazi pale data ya wanafunzi kisheria haiwezi kuondoka kwenye chuo ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), lakini pima mfano kwenye kazi *yako* badala ya kuiamini vichwa vya jumla ([[cdpk-pedagogy-benchmark-llms]]). Weka bajeti kwa mtu wa kuendesha na kutathmini mfumo baada ya jaribio.
- **Kwa watengenezaji na watafiti:** toa kitu kamili — utoaji wa OATutor wa mwanzo-hadi-mwisho (msimbo, maudhui, zana ya majaribio) ni kiwango cha kurudiwa ambacho fasihi hii inazidi kuthawabu. Toa ilani na mpangilio za uchimbaji pamoja na uzito ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Ripoti kikokotozi na kaboni ([[aied-carbon-footprint-reporting]]). Weka wasaidizi juu ya maktaba zilizo na leseni huria ili asili iwe inayoweza kukaguliwa na marekebisho yawe halali ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Tumia marekebisho ya ustadi yenye ufahamu wa quantization badala ya quantization ya kawaida kama usahihi na nishati vyote vinamaanisha, na uweke leseni za msimbo na maudhui zanalingana.

## Dhana Potofu za Kawaida

**"Uzito wazi, chanzo huria, maudhui huria na ufundishaji huria ni ufunguzi mmoja."** Ni vitu vinne tofauti na hushindwa kwa kujitegemea. Hoja za rasilimali na mazoezi zipo kwenye [[open-education]]; ukurasa huu unashughulikia vifaa ambavyo mbunifu hutoa na kutoa leseni. Uzito *wazi* huruhusu uwekaji wa ndani; *chanzo* huria huruhusu marekebisho; *maudhui* huria huruhusu matumizi upya na uboreshaji; *ufundishaji* huria unahusu nani anaamua kinachofundishwa. Mfano wenye uzito wazi na mtiririko wa mafunzo wa kibiashara, uliowekwa katika zana yenye kiolesura kilichofungwa na maktaba ya maudhui yenye haki zote zilizohifadhiwa, ni "wazi" katika mojawapo ya maana nne na umefungwa katika tatu.

Neno lenyewe linabishaniwa katika ngazi ya vyanzo. [[deimann-rethinking-openness-ai-2026|Deimann na Lukács (2026)]] wanaona kwamba mjadala wa ufunguzi ulifikia AI kupitia jumuiya ya chanzo huria, huku Fasili ya kwanza ya AI ya Chanzo Huria ilichapishwa mwaka 2024, na wanahoji kwamba ufunguzi hufanya kazi hapo kama fikra badala ya sifa: matarajio ambayo taasisi huyakubali katika lugha wakati utawala unaozunguka unabaki kama ulivyo. Hilo ni ukaguzi muhimu kwa ukurasa huu, kwa sababu leseni ni sifa na harakati siyo.

**"Uwazi unamaanisha nafuu."** Uzito wazi hufanya uwekaji wa ndani uwezekane, lakini **mtu fulani bado anapaswa kuweka, kurekebisha na kutathmini mfumo**, na mtu huyo anahitaji kuishi zaidi ya ruzuku iliyofadhili kazi. Mizigo inayotajwa katika fasihi hii ni halisi: miundombinu, uhakikisho wa [[pedagogical-safety|usalama]], na matengenezo. Gharama jumla inaweza kuzidi ada ya leseni, na taasisi zinazotendea uwazi kama akiba mara nyingi hugundua wajibu wa matengenezo baada ya wafanyakazi wa mradi kutawanyika.

**"Mifano ya mipaka iliyofungwa ni bora zaidi, kwa hivyo mifano huria ni mbadala wa akiba."** Pengo ni dogo kuliko dhana hiyo inavyodokeza. Katika [[cdpk-pedagogy-benchmark-llms|Kiwango cha Ufundishaji]] (CDPK + SEND, kilichojengwa kutoka vipengele halisi vya mtihani wa walimu wa Chile) kinachohusisha mifano 97, **DeepSeek R1** wa uzito wazi ilifikia **86.65%**, dhidi ya kumi bora inayoundwa zaidi na mifano ya kufikiri iliyofungwa, na ulinganisho wa gharama na usahihi unaenda mbali zaidi upande wa wazi. Hoja iliyosalia kwa ufunguzi kwa hivyo inahusu udhibiti na uwezo wa ukaguzi, si kujitoa uwezo.

**"Kutoa uzito ni kutoa kazi."** Michango huria yenye nguvu hutoa mtiririko wote. OmniEdu inachapisha usimamizi uliosawazishwa wa uwezo juu ya mchanganyiko wa mifano 69,999 badala ya uzito wa mwisho peke yake, ikipandisha kila kiwango cha familia huria ya 4B/9B/27B ya K-12, huku mfano wa 4B uliorekebishwa ukipata **pointi 55** za utendaji wa [[scaffolding|scaffolding]] wa MathTutorBench; [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] vivyo hivyo inaeleza utaratibu wake wa RL na marekebisho ya ustadi, ikiwemo hasi ngumu 440 zilizochimbwa na majibu 40,000 yaliyozalishwa. Uzito bila mapishi huzalisha tokeo bila kuzalisha mbinu.

## Dhana Zilizounganishwa

- [[open-education]]
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

## Makala Zilizounganishwa
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Msaidizi wa hifadhi ya maarifa ya AI ya OER ya ndani ya eneo kwenye vifaa vya watumiaji (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — Mwalimu unaobadilika wa leseni ya MIT na maktaba ya maudhui ya OpenStax ya CC BY (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Mfano wazi wa 32B wa kielimu unazidi mifumo mikubwa zaidi ya biashara (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Kipanga alama cha ndani cha LLM chenye kuzingatia FERPA cha kuingia kwa haraka
- [[programming-its]] — LLM wa uzito wazi uliojiweka kwa kuzingatia GDPR/Sheria ya AI ya EU katika ITS ya Python
- [[aiawe-automated-writing-evaluation]] — Mfano wa uzito wazi uliorekebishwa na LoRA kwa tathmini ya uandishi otomatiki
- [[stanbkt-bayesian-knowledge-tracing]] — Kifurushi cha wazi cha Python kwa ufuatiliaji wa maarifa kamili wa Bayesian
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — Mfumo kamili wa ufundishaji wa wakala wa chanzo huria wenye kumbukumbu ya kijifunza
- [[vismatic-secure-sandbox-cs-education]] — Sanduku ya kontena ya wazi kwa tathmini inayoelekezwa kwa mchakato
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Mwalimu wa hisabati anayejua hisia mwenye msimbo wa chanzo huria
- [[cdpk-pedagogy-benchmark-llms]] — Wiana la wazi la ufundishaji katika mifano 97 na mpaka wa gharama–usahihi
- [[astra-multi-agent-tutoring-benchmark-2026]] — Seti ya data ya wazi na mfano wa kwanza kwa tathmini ya ufundishaji wa wakala wengi inayotegemea nyayo
- [[mllm-scientific-visualization-literacy]] — Mifano ya wazi chini ya msingi wa binadamu kwa ujuzi wa uonyeshaji
- [[iks-instruct-dataset-indian-knowledge]] — Seti ya data huria ya lugha nyingi kwa maagizo yanayotokana na kitamaduni
- [[aied-carbon-footprint-reporting]] — Mbinu ya chanzo huria ya kuripoti gharama ya mazingira ya LLM
- [[egai-power-systems-education]] — Maktaba ya moduli inayoweza kutekelezwa ya wazi kwa AI ya uhandisi
- [[mooc-to-maic]] — Uzalishaji wa kozi unaoendeshwa na LLM na mabadiliko ya uchumi wa uzalishaji wa kozi
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Mifano ya Msingi ya Wazi kwa Kujifunza na Kufundisha
