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
source_updated: "2026-10-03T02:57:43-04:00"
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

Ubora sio tena bei ya moja kwa moja ya ufunguzi. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] inatumia [[reinforcement-learning|kujifunza kwa kuimarisha]] (DAPO) na kurekebisha kwa ustadi chini ya usimamizi kwa familia ya mifano ya wazi, ikichimba hasi ngumu 440, ikizalisha majibu 40,000 bandia yaliyopunguzwa hadi mifano 1,050 iliyopangwa kwa ugumu, na ikifikia **96.52%** kwenye kiwango cha ufundishaji — juu ya 90.55% ya Gemini-3 Pro — katika vigezo 32B vinavyokaa kamili. [[aiawe-automated-writing-evaluation|AiAWE]] inafikia hitimisho zinazofanana kwa [[automated-assessment|tathmini ya uandishi otomatiki]]: Gemma-3-27B-it wa uzito wazi uliorekebishwa na LoRA unazidi LLaMA-3.3-70B na msingi wa GPT-3.5 uliorekebishwa kwa ustadi juu ya insha 480 za TOEFL na unakimbia kwenye seva ya daraja la watumiaji, pamoja na ugunduzi wa kushangaza wa kando kwamba idadi ya vigezo *si* mtabiri mwaminifu wa utendaji wa mbele chini ya marekebisho ya LoRA. Ushahidi wa kupinga unastahili nafasi ile ile: [[mllm-scientific-visualization-literacy|kipimo cha MLLM sita]] (tatu zilizofungwa, tatu wazi) kiligundua kila mfano wa chanzo huria chini ya msingi wa binadamu kwa ujuzi wa [[visualization]] ya kisayansi wakati Gemini ilizidi wastani wa binadamu katika sehemu kadhaa. Ufunguzi huinua dari ya udhibiti, si ya uwezo.

OmniEdu inatoa mtiririko mzima badala ya uzito tu: usimamizi unaosawa wa uwezo juu ya mchanganyiko wa mifano 69,999 uliinua kila kiwango cha familia ya K–12 ya 4B/9B/27B wazi — mfano wa 4B uliorekebishwa ulipata pointi 55 za kiwango cha ushindi wa MathTutorBench juu ya msingi wake — wakati uchunguzi wa hali ya maarifa ukibaki uwezo wake mdogo zaidi katika 54.04% ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### Zana huria, walimu, na miundombinu ya utafiti

Kesi iliyo wazi zaidi ya msimbo wazi ni kurudiwa. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — mfumo wa kwanza wa ufundishaji unaobadilika ulio wazi kabisa uliojengwa juu ya kanuni za ITS — unaunganisha **msimbo wa chanzo wa leseni ya MIT** na **maktaba ya maudhui ya Creative Commons (CC BY)** kutoka kwa vitabu vya algebra vya OpenStax, pamoja na [[knowledge-tracing|ufuatiliaji wa maarifa]], majaribio ya A/B, na msaada wa LTI; lengo lake la wazi la ubuni ni kwamba mtafiti anaweza kufanya jaribio na kisha kuchapisha mfumo mzima wa mwanzo-hadi-mwisho, maudhui, na jukwaa kama kiungo cha hazina. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] inatoa hoja ile ile katika tabaka la mbinu, ikibadilisha makadirio ya sehemu ya expectation-maximization na uchanganuzi kamili wa Bayesian (HMC, uchanganuzi wa variational, Pathfinder, optimization) katika kifurushi cha wazi cha Python kinachofichua kutokuwa na uhakika ambao kulinganisha kwa A/B kwa uingiliaji unaobadilika kunategemea. [[deeptutor]] inatoa mfumo kamili wa ufundishaji wa [[agentic-ai|wakala]] wenye kumbukumbu ya kijifunza ya msitu wa nyayo — Apache 2.0, na hadi mwisho wa 2026 nafasi kamili ya kujifunza badala ya mtiririko tu ambao karatasi yake inakipima — na kizalishaji cha darasa cha [[mooc-to-maic|MAIC]] OpenMAIC inatolewa chini ya MIT pamoja na utafiti unauthibitisha, hivyo kozi inaweza kuzalishwa, kujiweka na kuchunguzwa badala ya kusomwa tu; [[vismatic-secure-sandbox-cs-education|VISMATIC]] inachapisha sanduku yake ya kontena kwa ufuatiliaji unaoelekezwa kwa mchakato, hivyo taasisi zingine zinaweza kukubali mfano wa uadilifu badala ya toleo la muuzaji. Msimbo wazi pia unabeba mzigo wa uwazi: hati za [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] za ilani za ufundishaji zinazojua hisia zimechapishwa kwa ukaguzi na kazi zaidi za [[llm-training-and-fine-tuning|mafunzo ya kielimu]]. Miundombinu huria inaweka kizingiti cha kile mawakala wa elimu wanapaswa kufanya: [[agentic-ai-education-scoping-review|mapitio ya masudio 474 ya wakala-AI]] ya hifadhi ya maarifa yanatumia mradi wa wakala wa chanzo huria unaokua kwa kasi kama kiwango chake cha \"wakala wa mpaka wa mbele\" na yanagundua mifumo ya elimu bado inakosa usimamizi wa zana unaotawaliwa, kumbukumbu inayoendelea, upangaji wa muda mrefu, na kitendo kinachoweza kukaguliwa.

### Wiana huria, seti za data, na uwazi wa mbinu

Michango kadhaa hapa ni *miundombinu huria ya tathmini* badala ya mifumo. [[cdpk-pedagogy-benchmark-llms|Wiana la Ufundishaji]] (CDPK + SEND, lililojengwa kutoka vipengele halisi vya mtihani wa walimu wa Chile) linahusisha mifano 97: DeepSeek R1 wa uzito wazi ilifikia 86.65% dhidi ya kumi bora ya mifano ya kufikiri ya kufungwa kwa kiasi kikubwa, na mpaka wa gharama–usahihi ulihama kutoka ~50% hadi ~82% katika \\$0.10/M tokeni za kuingiza kati ya Aprili 2024 na Juni 2025 — na Qwen-3 8B wa wazi katika 3.5¢ ikikaribia mfano bora wa kufungwa wa Aprili 2024 katika gharama ya chini zaidi ya mara 400×. Utendaji unashuka kwa ukali chini ya vigezo takribani 8B, ambayo ni kizuizi cha vitendo cha kupanga kwa uwekaji wa chuo. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] inatoa seti ya data, mpangilio, na mfano wa kwanza kwa tathmini inayotegemea nyayo ya ufundishaji wa wakala wengi wenye ujuzi wa kijamii (washiriki 540, vipindi 360, matukio ya kazi 1,440). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] inaonyesha kesi ya kitamaduni ya data huria: jozi 24,795 za maagizo–majibu katika lugha saba na mbinu 41 za kielimu zilizotolewa kutoka vyanzo vya Vedic na vya kitamaduni, zilizolinganishwa na [[curriculum-design|mtaala]] wa CBSE, ambazo ziliruhusu mfano mdogo wa 7B kukaribia mfano wa kumbukumbu wa matumizi ya jumla mkubwa zaidi (alama ya kawaida ya hakimu 6.39 dhidi ya 6.54) katika sehemu ndogo ya gharama ya uwekaji. [[benchmark|Wiana]] lililoandikwa na wanafunzi ni njia nyingine ya ufunguzi: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] inakusanya kazi 80 za muda mrefu za kitaaluma kutoka wagombea 230 waliowasilishwa na wanafunzi (zinahusisha nyanja 25+ za kitaalamu, 16 zinazohitaji GPU za CUDA, zikitekelezwa katika sanduku za Docker zilizotengwa) na inapanua mfumo wa wazi wa wakala kuingia katika tathmini ya ngazi ya kitaaluma. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] wanadai kwamba ufunguzi ni wajibu wa [[sustainability|mazingira]] pia: wakipitia karatasi zote za AIED 2025, waligundua mtindo wa \"kukubaliwa kwa LLM bila ufichuzi\" na walijibu na mbinu ya kupima ya chanzo huria — zana za programu pamoja na formula inayokadiria gharama ya kikokotozi hata wakati idadi za vigezo hazijulikani.

### Rasilimali za elimu huria na maudhui huria

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] ni makala pekee ya hifadhi ya maarifa ambayo **rasilimali za elimu huria ni kitu kikuu** badala ya rejeleo la kupita. Wanajenga msaidizi wa hifadhi ya maarifa ya AI ya ndani ya eneo kwa [[cs-education|elimu ya sayansi ya kompyuta]] kutoka nyaraka 82 za OER kwenye vifaa vya daraja la watumiaji (RTX 3060 yenye VRAM ya 12 GB), wakiunganisha uchimbaji uliowekwa kwa muundo, [[rag|uzalishaji unaosaidiwa na urejeshaji]], na marekebisho ya ustadi yenye ufahamu wa NF4 4-bit. Marekebisho ya ustadi yaliongeza thamani halisi zaidi ya urejeshaji (Qwen-7B 69.8%, +3.2 pp, p = 0.031; DeepSeek-MoE 78.6%, +12.0 pp, p < 0.001, ikijumuisha 82.3% kwenye ufikiri wa hatua nyingi); marekebisho yenye ufahamu wa quantization yalishikilia pengo la usahihi la 4-bit hadi 1.7 na 1.2 pp huku yakipunguza VRAM kwa ~38% na nishati hadi 1.8 mWh kwa kila hoja (43.8% chini ya msingi); na [[hallucination-risk|kutunga vitu visivyokuwepo]] kulikopandishwa na quantization kulirudishwa kwa sehemu na marekebisho ya ustadi (DeepSeek-MoE 10.4% → 8.1%), kupimwa na utaratibu wa NLI wa hatua mbili dhidi ya vipande vya OER vilivyorejeshwa. Hoja ya kuchanganua inaweza kueneza: maktaba iliyo na leseni huria inaweza fahirishwa, kurekebishwa, na kutumika bila ruhusa za mchapishaji, na kuweka msaidizi juu ya OER iliyorejeshwa hutoa njia ya asili inayoweza kukaguliwa — ambayo ni hasa kile ambacho maktaba ya kitabu cha biashara haiwezi kutoa.

Ufunguzi wa maudhui na ufunguzi wa mifano ni nyongeza mahali pengine pia. OATutor inakusanya vitabu vya OpenStax vya CC BY katika mfumo ambao msimbo wake ni wa leseni ya MIT, hivyo masharti ya leseni ya msimbo na maudhui yanapaswa kufanywa yanalingana kwa ubuni. [[egai-power-systems-education|Maktaba ya moduli inayoweza kutekelezwa ya wazi kwa AI ya mifumo ya nguvu]] inapunguza kizingiti cha kuingia na daftari za Jupyter zinazokimbia ndani ya eneo au katika Colab, zilizotolewa kupitia kozi ya mtandao ya IEEE. Na mtaala wa [[engineering-education|uhandisi wa mitambo]] unaoelekezwa kwa mradi unachapisha mtaala wake, data, na msimbo katika hazina za ufikiaji huria ili taasisi zingine ziweze kuukubali ([[mechanical-engineering-ai-curriculum-2026]]). Karibu na OER, utoaji huria wa *kozi* ni mahali ambapo uchumi unabadilika kwa kasi zaidi: MAIC inaripoti uzalishaji wa MOOC unaoanguka kutoka takribani \\$25,000 na saa 60 kwa kozi hadi chini ya \\$2 na dakika 30 na uzalishaji wa wakala wengi unaoendeshwa na LLM. Kama uzalishaji wa maudhui unakuwa karibu bila malipo, hoja ya OER inaenda mbali na gharama ya uzalishaji na kuelekea uhuru wa leseni, uwezo wa kuthibitisha, na uhakikisho wa ubora — ambayo ni pendekezo tofauti na lile ambalo utetezi wa OER ulijengwa juu yake.

### Faida na mizigo

- **Faida.** Uhuru wa data na kuzingatia udhibiti ([[privacy]], [[regulation]]) kupitia ukaribishaji wa ndani; udhibiti wa gharama, kwa kuwa uchanganuzi wa ndani hana ada ya kila hoja na mifano ya wazi inakaribia ubora wa biashara katika sehemu ndogo ya bei ([[singh-eduqwen-pedagogical-rl-2026]]); uwezo wa kurudiwa, kwa sababu mfumo, ilani, maudhui, na data zinaweza kusafirishwa na karatasi ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); uwezo wa ukaguzi na mapitio ya usalama chini ya [[governance|utawala wa taasisi]]; na uwezo wa kurekebisha kwa ustadi kwa [[pedagogy]] mahususi au hifadhi ya maarifa ya jamii mahususi ([[iks-instruct-dataset-indian-knowledge]]).
- **Mizigo.** Ukaribishaji wa ndani unahitaji vifaa na utaalam ambao taasisi nyingi hawana; ubora na [[pedagogical-safety|usalama]] hauhakikishiwi kwa njia ya moja kwa moja — mifano ya wazi inaweza kubaki nyuma ya misingi ya binadamu kwa ujuzi mahususi ([[mllm-scientific-visualization-literacy]]) na quantization inapandisha viwango vya kutunga vitu visivyokuwepo isipokupunguzwa ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]); mtu fulani anapaswa kutengeneza mfumo baada ya kuchapishwa ([[programming-its]] inaandikisha timu ndogo ya wanafunzi wa PhD, mfichiko wa usalama wa kazi inayoendelea, na mzigo mkubwa wa kuzingatia); na leseni huria ni ruhusa, si bidhaa inayofanya kazi — matengenezo yanayoweka mfumo uliotolewa yanayotumika yanaenda kwa [[educational-technology-developers]] wowote walioujenga, na ufadhili na motisha yao yanaamua kama hazina inayoweza kugawanyika, bidhaa inayotunzwa, au hakuna ni kile taasisi inayorithi ruzuku inapomalizika.

## Kuweka ufunguzi katika mazoezi

- **Kwa wakufunzi na taasisi:** kagua leseni ya *maudhui* na ya msimbo pia kabla ya kukubali mfumo — msimbo wa MIT juu ya vitabu vya CC BY unatumika tena, lakini leseni inayoruhusu haihakikishi kwamba njia za ufundishaji, benki za vipengele, au tafsiri zipo. Pendelea mifano ya wazi pale data ya wanafunzi kisheria haiwezi kuondoka kwenye chuo ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), lakini pima mfano kwenye kazi *yako* badala ya kuiamini vichwa vya jumla ([[cdpk-pedagogy-benchmark-llms]]). Weka bajeti kwa mtu wa kuendesha na kutathmini mfumo baada ya jaribio.
- **Kwa watengenezaji na watafiti:** toa kitu kamili — utoaji wa OATutor wa mwanzo-hadi-mwisho (msimbo, maudhui, zana ya majaribio) ni kiwango cha kurudiwa ambacho fasihi hii inazidi kuthawabu. Toa ilani na mpangilio za uchimbaji pamoja na uzito ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Ripoti kikokotozi na kaboni ([[aied-carbon-footprint-reporting]]). Weka wasaidizi juu ya maktaba zilizo na leseni huria ili asili iwe inayoweza kukaguliwa na marekebisho yawe halali ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Tumia marekebisho ya ustadi yenye ufahamu wa quantization badala ya quantization ya kawaida kama usahihi na nishati vyote vinamaanisha, na uweke leseni za msimbo na maudhui zanalingana.

## Dhana Zilizounganishwa

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
- [[deeptutor]] — Mfumo kamili wa ufundishaji wa wakala wa chanzo huria wenye kumbukumbu ya kijifunza
- [[vismatic-secure-sandbox-cs-education]] — Sanduku ya kontena ya wazi kwa tathmini inayoelekezwa kwa mchakato
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Mwalimu wa hisabati anayejua hisia mwenye msimbo wa chanzo huria
- [[cdpk-pedagogy-benchmark-llms]] — Wiana la wazi la ufundishaji katika mifano 97 na mpaka wa gharama–usahihi
- [[astra-multi-agent-tutoring-benchmark-2026]] — Seti ya data ya wazi na mfano wa kwanza kwa tathmini ya ufundishaji wa wakala wengi inayotegemea nyayo
- [[mllm-scientific-visualization-literacy]] — Mifano ya wazi chini ya msingi wa binadamu kwa ujuzi wa uonyeshaji
- [[iks-instruct-dataset-indian-knowledge]] — Seti ya data huria ya lugha nyingi kwa maagizo yanayotokana na kitamaduni
- [[aied-carbon-footprint-reporting]] — Mbinu ya chanzo huria ya kuripoti gharama ya mazingira ya LLM
- [[egai-power-systems-education]] — Maktaba ya moduli inayoweza kutekelezwa ya wazi kwa AI ya uhandisi
- [[mechanical-engineering-ai-curriculum-2026]] — Mtaala, data, na msimbo vinavyopatikana hadharani
- [[mooc-to-maic]] — Uzalishaji wa kozi unaoendeshwa na LLM na mabadiliko ya uchumi wa uzalishaji wa kozi
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Mifano ya Msingi ya Wazi kwa Kujifunza na Kufundisha
