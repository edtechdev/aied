---
title: Mafunzo ya LLM na Urekebishaji Mahususi (Fine-Tuning)
created: "2026-10-13T05:20:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/llm-training-and-fine-tuning
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

> **Mafunzo ya LLM na Urekebishaji Mahususi (Fine-Tuning)** — jinsi mifano ya AI ya kielimu hufanywa: mchakato kutoka mafunzo ya msingi (pretraining), kupitia mafunzo ya baadae (post-training), hadi marekebisho (adaptation), gharama ya kila hatua, na yale ushahidi unaosema yanapatikana. Tatizo linaloongoza ni **kutokulingana kwa motisha**: mifano ya matumizi ya jumla imeundwa kujibu, wakati ufundishaji unahitaji kuzuia kutoa jibu. Mafunzo ya baadae na urekebishaji mahususi ni vigeuzi viwili vinavyobadilisha tabia hiyo, na matokeo yaliyo wazi zaidi ya hifadhi hii ya maarifa ni kwamba ni chaguo la *tatu*, si la kwanza — upatikanaji na uundaji wa ilani (prompting) huja mapema katika uamuzi, na utafiti mmoja ulio hapa uligundua mafunzo ya usimamizi yakishindwa kwenye kazi ambayo uundaji wa ilani wa kawaida ulishinda ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Imeandikwa kwa watengenezaji wa programu za kielimu na wataalamu wa ufundishaji wanaosalia uamuzi wa kujenga kwa nini.

## Maswali ya Kuzingatia

- Ikiwa una kazi ya ualimu ambayo mfano wa jumla hujibu haraka mno, hatua yako ya kwanza ni ilani bora, upatikanaji (retrieval) kutoka vyanzo vyako mwenyewe, au mafunzo? Ungepima nini ili kubaini ni yapi yalisaidia?
- Urekebishaji mahususi unahitaji data. Mifano yako ya mafunzo ingetoka wapi, ni nani anayemiliki, na uhakiki gani wa faragha ungehitajika kabla ya kutumika?
- Utafiti mmoja ulio hapa uligundua kuwa kurekebisha mfano juu ya data ya tathmini kuboresha *muundo na ufanano* wakati urekebishaji mahususi tofauti ulishindwa kabisa katika kuzalisha maoni. Hilo linaonyesha nini kuhusu kulinganisha mbinu ya mafunzo na kazi?
- Mafunzo ya baadae kwa kujifunza kwa nguvu (reinforcement learning) yanaweza kufundisha mfano kuongoza badala ya kujibu. Ungeandika zawadi gani ili kukamata "anaongoza vizuri", na mfano ungeipije vipi?
- Hifadhi hii ya maarifa inaripoti kuwa chaguo la mfano na la ilani ni takriban **15%** tu ya pengo kati ya LLM na faida za mwanafunzi katika kujifunza. Ikiwa hiyo ni kweli, inapaswa kubadilishaje uamuzi wako wa kujenga dhidi ya kununua?
- Mfano uliorekebishwa kwa usahihi bado unaweza kuwa hatari katika mazungumzo marefu. Ungejaribu nini kabla ya kuruhusu mmoja azungumze na wanafunzi bila usimamizi?

## Utangulizi

Ukuzaji wa AI ya kielimu hukumbana na ukuta ule ule kutoka mwelekeo miwili. Mifano ya lugha ya matumizi ya jumla hufunzwa baadae juu ya upendeleo wa binadamu kwa kusaidia, ambalo kwa vitendo maana yake ni kujibu haraka na kamili; ualimu unahitaji kinyume chake, kwa sababu lengo la kipolojia ni kumsaidia mwanafunzi kufikia jibu badala ya kumpatia moja kwa moja. Wakati huohuo, mfano wa jumla haujui chochote kuhusu mtaala wako, rubriki yako, au sauti ya taasisi yako, na hakuna kiwango cha uhandisi wa ilani kinachoweza kuziweka kwa uhakika.

Ukurasa huu unashughulikia mbinu zinazobadilisha mfano badala ya maandishi unayomtumia. Zinatia **ngazi za kujitoa kwa mtandaoni**: uundaji wa ilani, kisha upatikanaji, kisha marekebisho yanayoboresha ufanisi wa vigezo (parameter-efficient), kisha urekebishaji mahususi kamili, kisha mafunzo ya baadae kwa ishara za upendeleo au zawadi. Kila ngazi inagharimu data zaidi, nguvu ya kompyuta zaidi, na nidhamu zaidi ya tathmini kuliko ile iliyopo chini yake, na kila moja ni chaguo baya la kwanza kuliko ngazi iliyo chini yake isipokuwa kipimo mahususi kihakikishe kupanda. Nyingi ya maandiko ya utafiti huripoti sehemu ya juu tu ya ngazi hiyo, na hilo inafanya iwe rahisi kwa mtengenezaji kufikia mafunzo wakati upatikanaji ungelitosha.

Ukurasa huu umeandaliwa kuzunguka maamuzi ambayo mjenzi wanakabiliwa nayo: ni kigeuzi kipi cha kuburuta (sehemu hii na ijayo), marekebisho yanapata nini na yanagharimu nini kwa vitendo, mafunzo ya baadae yanaweza kuunda nini ambayo marekebisho hayawezi, na mifano hii inashindaje. Istilahi zinatumika kwa maana yake ya kawaida: **mafunzo ya msingi (pretraining)** ni hatua ya kuanzia mwanzo kwenye korpus ya jumla, **mafunzo ya baadae (post-training)** ni kila kitu baada yake kinachounda tabia (mafunzo ya usimamizi, uboreshaji wa upendeleo, kujifunza kwa nguvu), na **urekebishaji mahususi (fine-tuning)** unashughulikia hatua za usimamizi za mafunzo ya baadae pamoja na kazi za marekebisho za baadaye za kikoa au maeneo, ikijumuisha mbinu zinazoboresha ufanisi wa vigezo.

## Mchakato wa mafunzo, hatua kwa hatua

Hatua tatu, zenye upatikanaji tofauti sana. Kujua ni hatua gani andiko linazungumza huzuia misomaji mingi ya maandishi haya.

**Mafunzo ya msingi (Pretraining)** hujenga mfano wa msingi kutoka kwenye korpus ya maandishi ya jumla. Ni hatua inayozalisha uwezo mpana wa mfano, na iko nje ya ufikiaji kwa karibu kila mradi wa kielimu: gharama hupimwa kwa mamilioni ya dola na data ni utafutaji wa kiwango cha mtandao. Hakuna kitu katika hifadhi hii ya maarifa kinachofanya hivyo. Umuhimu wake kwa wataalamu ni wa uchunguzi badala ya hatua ya kuchukua — data ya mafunzo ya msingi ni kigeuzi kinachoongoza jinsi mfano unavyotenda, na ni kigeuzi kimoja ambacho huwezi kukiburuta. Ukosefu huo wa uwiano ni sababu mbinu zote zilizosalia za uwanja hufanya kazi juu ya mfano uliyofunzwa tayari.

**Mafunzo ya baadae (Post-training)** huunda tabia juu ya mfano wa msingi. Mafunzo ya usimamizi (SFT) hufundisha mfano kuiga maonyesho; uboreshaji wa upendeleo na kujifunza kwa nguvu kisha yanasukuma kuelekea matokeo ambayo mfano wa zawadi au seti ya hukumu za binadamu huwapa kiwango cha juu. Hii ni hatua ambapo mfano unaweza kufundishwa kuongoza badala ya kujibu, na ni mahali palipo matokeo ya kielimu yanayoshangaza zaidi. Ni pia hatua nyeti zaidi kwa ubunifu wa zawadi, kwa sababu zawadi ni mpangilio uliokatizwa wa unachotaka, na mifano huboresha kwa kilicho andika kweli.

**Marekebisho (Adaptation)** hufaa mfano uliopo kwa kazi au kikoa chako, kwa kawaida kwa data na nguvu ya kompyuta pungufu zaidi. Urekebishaji mahususi unaoboresha ufanisi wa vigezo (PEFT), ambao LoRA ni aina ya kawaida, hufundza idadi ndogo ya vigezo vilivyoongezwa na kuyaacha uzito wa msingi bila kubadilishwa. Urekebishaji mahususi kamili hubadilisha kila kitu. Ufupishaji (distillation) na kusahau (unlearning) vipo kando yao. Sehemu zilizo chini zinazichukua moja baada ya nyingine. Kwa watengenezaji wengi wa kielimu hii ni hatua ya vitendo — ile ambapo mifano mia kadhaa hadi maelfu kadhaa na GPU moja inaweza kuzalisha mfano unaoweza kutumika.

## Ilani, pato (retrieval), au mafunzo? Uamuzi unaokuja kwanza

Matokeo bora zaidi ya kipekee katika hifadhi hii ya maarifa kwa swali hilo ni utafiti wa upatikanaji, si utafiti wa mafunzo. Wakati wa kujenga msaidizi wa hifadhi ya maarifa ya kozi, Shen na wenzake (2026) walitathmini mifano ya ndani katika mpangilio mitatu na kugundua kuwa **upatikanaji, si mfano, ni uamuzi wa kiwango cha kwanza cha muundo**: LLM yao ya ndani bila upatikanaji ilifikia **52.3%** tu ya usahihi, *chini* ya kiwango cha msingi cha TF-IDF ya **55.4%**, wakati kuongeza [[rag|uzalishaji ulioboreshwa kwa upatikanaji]] bila urekebishaji mahususi kabisa ilipanda hadi **66.6%** ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Mipangilio ya urekebishaji mahususi ambayo pia walijaribu inaripotiwa kando ya upunguzaji wa upatikanaji, upunguzaji wa namba (quantization) na nishati kwa kila hoja, na hilo hufanya kulinganisha kuwa wa uaminifu kiasi: mfano wa msingi bila msingi wa kuchimba unaweza kuwa mbaya kuliko mbinu ya maneno ya miaka mingi, na suluhisho la bei rahisi si mafunzo.

Kile uwanja hujenga kweli unaakisi mpangilio sawa. Mapitio yaliyoongozwa na PRISMA ya masomo 23 ya uzoefu (2020–2025) kuhusu kubinafsisha AI kwa [[writing-education|ufundishaji wa uandishi]] yaligundua **uhandisi wa ilani unaongoza (N = 13), mbele ya urekebishaji mahususi (N = 7) na miundo mseto (N = 3)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Gundwa lililo mkali zaidi la mapitio ni kutokulingana kwa muundo badala ya kupanga mbinu: malengo ya kipolojia yaliyoainishwa yameelekea kuelekea michakato ya uandishi, [[feedback-literacy|ujuzi wa kupokea maoni]] na ujuzi wa kitaaluma wa kiwango cha juu, wakati utekelezaji unaoongoza bado unafuatia malengo yanayozingatia bidhaa kupitia ubunifu wa ilani au urekebishaji mahususi.

Ambapo uundaji wa ilani na mafunzo vimefananishwa moja kwa moja, matokeo hutegemea kazi, na hiyo hasa ni sababu uamuzi unapaswa kupimwa badala ya kudhaniwa:

- **Mafunzo yanashinda lengo ni muundo thabiti wa matokeo au mali iliyodhibitiwa.** Katika uzalishaji wa maswali ya kiotomatiki kwa tathmini ya kusikiliza ya lugha ya pili (L2), uboreshaji wa ilani wa kurudia ulipata ukingo, na kisha urekebishaji mahususi wa GPT-4.1 *juu ya ilani iliyoboreshwa* uliboresha uzalishaji zaidi ya uundaji wa ilani peke yake — ukitoa marekebisho ya mfano, badala ya ubunifu wa ilani, kama kiendeshaji cha faida iliyobaki ([[gpt-item-generation-l2-listening-2026]]).
- **Uundaji wa ilani unashinda lengo ni maandishi yaliyojaa hukumu.** Mfumo ule ule ambao ulifanikiwa kurekebishwa kwa *kuwapa alama* ulishindwa katika *maoni*: katika WrAFT, moduli ya GPT-4o iliyorekebishwa ilifikia QWK 0.84 na RMSE 0.44 kwenye insha 360 za TOEFL zilizowekwa kando, lakini mafunzo ya usimamizi kwa uzalishaji wa maoni yalizalisha matokeo yaliokatwa na yasiyoweza kuchanganuliwa, wakati kuilani Claude 3.7 moja kwa moja kulitengeneza maoni ambayo waalimu waliwapa kiwango cha juu ([[wraft-automated-writing-evaluation-argumentative-2026]]). Mafunzo yalimfundisha mfano kufikia alama; hayakumfundisha kuandika.
- **Uundaji wa ilani unaweza kuchukua nafasi ya mafunzo lengo ni persona au rubriki.** Uundaji wa ilani ulioongozwa na rubriki, ulioboreshwa kwa pamoja kwa kurudia, ulipandisha makubaliano kati ya LLM na binadamu juu ya kazi za muundo za mwanafunzi kutoka **54.75% hadi 81.25%** (Cronbach's Alpha 0.393 → 0.798) bila urekebishaji mahususi wowote ([[yasar-llms-iterative-pedagogical-design-2026]]), na ilani ya GPT maalum iliyotokana na maandishi ilizalisha dhana potofu za hisabati zilizokusudiwa kwa uwepo wa **0.98** dhidi ya **0.40** kwa ilani pana ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **Kuna kizingiti juu ya yote.** Hardy na Kim (2026) wanakadiria kuwa chaguo la mfano na la ilani pamoja ni takriban **15%** tu ya kutokulingana kati ya LLM na faida za mwanafunzi katika kujifunza, na mengine yamegawanywa kati ya mifano, na waligundua kuwa kupimia uzito na makundi ya kupiga kura kwa kauli moja yalifanya ulinganisho kuwa *mbaya zaidi* ([[educational-llm-alignment]]). Ikiwa data ya mafunzo ya msingi ni kigeuzi kinachoongoza na ni kimoja ambacho huwezi kukiburuta, basi matarajio ya kile mbinu hizi zote zinaweza kufikia yanapaswa kupimwa ipasavyo.

## Urekebishaji mahususi unaleta nini: udhibiti juu ya kiwango

Mfano wa jumla unaweza kushindwa kudumisha mali unayohitaji, urekebishaji mahususi juu ya seti ya data ya kiwango cha wastani mara nyingi unaweza — na matokeo yanayojirudia ni kwamba *kulenga hushinda ukubwa*. Mifano mitatu ya 8B iliyorekebishwa juu ya mtaala wa kusoma wa watoto uliotengenezwa na wataalamu ilishinda zero-shot GPT-4o na Llama 3.3 70B katika vipimo vinavyohusiana na ugumu, bila masuala ya usalama ya kudai. Waandishi wanaweka hii kama **udhibiti juu ya kiwango**, kwa kuwa mfano mdogo unaweza kurekebishwa kwa kiwango mahususi cha kusoma na mtindo wa makosa kwa namna ambayo mfano wa jumla haiwezi kuombwa ([[llm-children-reading-story-generation]]).

Mtindo huo unajirudia kwenye kazi tofauti sana:

- **Msingi wa mtaala.** Seti ya data ya maelekezo ya lugha nyingi yenye mifano 24,795 iliyotokana na Indian Knowledge Systems ilizalisha urekebishaji mahususi wa 7B wenye alama ya **6.39** kwa paneli ya nje ya mahakimu watano (wastani kwenye vitu 1,201 vilivyopangwa kwa tabaka). Hiyo ni ndani ya **0.15** ya mfano mkubwa wa kawaida wa rejea kwa sehemu ndogo ya gharama ya matumizi — wakati mfano huo huo wa msingi ulipata **karibu sifuri katika vipimo mahususi vya IKS** bila urekebishaji mahususi ([[iks-instruct-dataset-indian-knowledge]]). Pengo hilo kati ya "mstari kwa jumla" na "mstari hapa" ni hoja nzima ya marekebisho ya kikoa. Kumbuka pia undani usio wa kawaida ambao waandishi wanaripoti: ubora hauku**panda** kwa mpangilio thabiti na upangaji wa data.
- **Uaminifu wa tathmini, kwa urahisi.** Kifaa kimoja cha LoRA kilichofunzwa kwa takriban mifano 3,900 ya alama zilizokusanywa kiliwafikisha mifano madogo mitano ya wazi (4B–30B) kwenye usawa au bora kuliko mwanadamu anayewapa alama katika mitihani miwili ya sayansi ya kompyuta, na karibu kusawazisha unyeti wa persona (kushika ≤ 0.32 MAE) ([[llm-graders-computer-science-exams-2026]]). Kifaa kimoja, seti moja ya data, mifano kadhaa ya msingi — huu ni muundo wa matumizi ya vitendo.
- **Uotomatiki wa kuchagua.** Ujasiri ulikuwa kiashiria cha kuaminika cha kosa la kupima alama (β = −0.602, p < .001). Kuelekeza majibu yasiyo na ujasiri wa **20%** kwa uhakiki wa binadamu kulisogeza mfano wa GPT-3.5 uliorekebishwa kutoka r = 0.781 hadi **r = 0.822** (RMSE 0.5990 → 0.5544) huku ikipunguza kazi ya kupima kwa mkono kwa takriban **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]). Urekebishaji mahususi hapa hauchukui nafasi ya binadamu; inafanya uangalifu wa binadamu kuwa na gharama nafuu.
- **Kupima dhana ambazo vingine ungepima kwa mkono.** Transfoma za Kihungari zilizorekebishwa (hubert-base-cc, PULI-BERT-Large) zililinganishwa na vipimo vya TF-IDF na embeddings za Qwen3 kwa kupima alama uandishi wa tafakari katika [[teacher-education|mafunzo ya walimu]] ([[reflection-level-classification-hungarian-essays-2026]]), na mfano wa mtandaoni wenye njia nyingi uliorekebishwa (uliotokana na Qwen3.5) ulionyesha kuwa unaweza kujenga upya mikondo ya sifa za kitu kwa maswali ya chaguo nyingi, ukijifunza mitindo ya majibu yaliyoandikwa katika mikondo ya 3PL na MCM badala ya kuambiwa ([[multimodal-item-parameter-estimation-2026]]).

## Marekebisho yanayoboresha ufanisi wa vigezo kwa vitendo

LoRA na jamaa zake ni mahali watengenezaji wengi wa kielimu wanafanya kazi kweli, na maandishi yana mwongozo mahususi wa kushangaza kuhusu jinsi wanavyotenda.

**Kiwango (rank) ni biashara, si kigeuzi cha kuongeza.** Lu na wenzake (2026) walijenga mazungumzo 360 ya mfumo–mtumiaji–msaidizi kutoka kwenye kozi ya Mifumo ya Kudhibiti ya Linear, walipanga upya majibu katika muundo wa Suluhisho–Mbinu–Nukta za Kufundisha, na walitekeleza LoRA juu ya Qwen2.5-3B na 7B katika viwango 4, 8 na 16. Upatikanaji wa matokeo yaliyo na muundo ulisogea kutoka karibu sifuri katika msingi hadi takriban **1.00**, na mpangilio bora (7B, r = 16) ulifikia ROUGE-L **0.4093** na vipindi vya ujasiri vya bootstrap vya faida vilivyokuwa juu ya sifuri kabisa. Lakini **faida kwa kila vigezo milioni vya kifaa ilishuka kwa mpangilio thabiti viwango vilivyopanda**, kwa hivyo ulinganisho wa kiwango cha kozi na kiwango ni biashara ya kuongeza kuliko uboreshaji wa bure ([[lora-finetuned-control-systems-course-qa-2026]]). Vipimo vyao hupima ufanano na muundo, si usahihi wa kuhesabu, ambao ni onyo la kawaida la familia nzima ya tathmini hii.

**Kiwango hakitabiri mafanikio, na mipangilio sawa inatenda tofauti kati ya miundo ya kiteknolojia.** AiAWE, mfumo wa wazi wa tathmini ya uandishi ya kiotomatiki uliojengwa juu ya Gemma-3-27B-it iliyorekebishwa na LoRA, ilifikia RMSE 0.474, QWK 0.828, na makubaliano ndani ya ±0.5 ya alama ya binadamu kwenye **90.56%** ya insha 360 za tathmini, ikishinda LLaMA-3.3-70B na msingi wa GPT-3.5 uliorekebishwa — huku ikitumika kwenye seva ya kiwango cha matumizi ya walimu. Matokeo matatu mapana yana umuhimu zaidi kuliko alama: kiwango cha mfano kilikuwa **si** kiashiria cha kuaminika cha utendaji wa chini chini ya marekebisho ya LoRA, **vigezo sawa vya LoRA vilizalisha tabia tofauti za kuwako kati ya miundo ya kiteknolojia**, na mfano wa wazi wa kiwango cha wastani uliorekebishwa vizuri unaweza kushindana na mifumo ya wamiliki ([[aiawe-automated-writing-evaluation]]).

**Tabaka zipi za kurekebisha ni uamuzi halisi.** Katika mfumo wa uchanganuzi wa mazungumzo kwa ufundishaji wa Kiingereza, kurekebisha BERT iliyokatwa kwa kuboresha **tabaka nne za mwisho za Transformer** zilishinda mbadala zote mbili: kurekebisha tabaka la juu peke yake lilifikia kizingiti cha chini, na urekebishaji mahususi kamili wa tabaka 12 ulipata ufinyishaji na kusogea ([[bert-discourse-english-teaching-2026]]).

**Muundo wa msingi unaweza kuwa muhimu zaidi kuliko idadi ya vigezo.** Kurekebisha mifano mitatu ya wazi ya maandishi-hadi-picha juu ya picha 1,000 zenye maelezo ya uhandisi wa nyuklia kuliboresha sana Stable Diffusion XL, kulitoa faida ndogo kwa SD-v3.5-Medium, na kulitengeneza **hakuna kuboresha kupimika kwa mfano wa flow-matching Flux.1 kabisa** ([[nuclear-diffusion-text-to-image-learning-2026]]). Mapishi ya urekebishaji mahususi hayawezi kuhamishwa kati ya miundo ya kiteknolojia, ambao ni somo sawa AiAWE inaripoti kutoka mwelekeo mwingine.

Mbinu mbili za karibu zinakamilisha hatua ya marekebisho. **Ufupishaji (Distillation)** hufupasha mfumo mkubwa au wa sanduku jeusi kuwa mdogo unaoweza kutumika. Mchakato wa hatua mbili ulifupasha kipimo cha ML cha sanduku jeusi kilichofaa na tafsiri yake ya baada ya tukio katika LLM ndogo ya wazi, na "mwanafunzi" wa vigezo 2B akafikia upatikanaji wa karibu bila hasara ya uso wa athari ya oracle (r > .90). Matokeo hayo yanaripotiwa chini ya tathmini ya uaminifu-kwanza ambayo hukagua kila simulizi dhidi ya uchanganuzi unaodai kuelezea ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Kusahau (Unlearning)** huondoa maudhui yaliyolengwa baada ya mafunzo: kusahau kulitekelezwa kwa mifano mitatu ili kuondoa PII na maudhui ya madhara, kujaribiwa katika mpangilio mbili wa kuondoa (PII-kwanza na maudhui ya madhara-kwanza) ([[llm-unlearning-math-privacy]]) — chombo chenye umuhimu mfano inapokumbuka kitu ambayo haipaswi kubeba.

## Mafunzo ya baadae: kuunda tabia, si muundo tu

Marekebisho hufundisha mfano *nini cha kuzalisha*; mafunzo ya baadae hufundisha *jinsi ya kutenda*. Hapa ndipo matokeo ya kipolojia yanayoshangaza zaidi, na mahali ambapo ubunifu wa ishara ya zawadi au upendeleo huamua kila kitu.

**Matokeo ya mchakato.** Singh na wenzake (2026) walibadilisha Qwen3-32B kuwa EduQwen kupitia hatua tatu — RL ya kwanza, SFT ya sintetiki, RL ya mwisho — yakifikia **96.52%** kwenye kiwango cha CDPK na kupita alama ya Gemini-3 Pro ya **90.55%**. Matokeo ya kati ndiyo sehemu ya kufundisha: hatua ya kwanza ya RL peke yake ilifikia 94.13%, SFT juu ya majibu 40,000 yaliyozalishwa na mfano mwenyewe ilipanda hadi 96.20%, na raundi ya mwisho ya RL iliongeza sehemu ndogo iliyobaki. Mfano wa zawadi ulipa kipaumbele **majibu yanayoongoza kuliko majibu ya moja kwa moja**, uchimbaji madini wa hasi-kali ulizuia maswali ambayo mfano wa msingi tayari ulikuwa yameyafunga, na mizunguko ilipanuliwa kutoka hatua 5 hadi 8 ili kukamata maamuzi ya kipolojia ya hatua nyingi ([[singh-eduqwen-pedagogical-rl-2026]]). Dhidi ya hilo, Kiwango cha Pedagogy — kilichotolewa kutoka mitihani halisi ya maendeleo ya kitaalamu ya walimu kati ya **mifano 97** — kiligundua usahihi kutoka **28% hadi 89%**, ushahidi kwamba maarifa ya kipolojia hayapatikani kwa nasibu wakati wa mafunzo ya msingi ya jumla ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

**Kufundisha uamuzi badala ya kauli.** TACT ilifundisha baadae mwalimu juu ya taxonomy ya mikakati 13 pamoja na taxonomy ya hatua mbili za mwanafunzi, na ilipata **pointi 20.30** juu ya uti wa mgongo wa Qwen3.5-4B, pamoja na kiwango cha uchunguzi ambacho huzuia lebo za hali ya mwanafunzi zilizopatikana wakati wa mafunzo ili mfano upaswe kuhitimisha hali kutoka kwenye mazungumzo ([[tact-pedagogically-adaptive-esl-tutoring]]). Mantiki sawa inaonekana katika Special-R1 kwa ulinganisho wa [[special-education|elimu mahususi]] ([[special-r1-rl-special-education]]) na katika kazi ya RL ya heuristic inayolinganisha mifano kama viongozi wa Socratic badala ya wanaojibu ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Mafunzo ya baadae hayana haja ya kuunda tu kile mfano unasema: jukwaa moja huunganisha chatbot ya ualimu inayolindwa na wakala wa kujifunza kwa nguvu anayechagua swali la mazoezi linalofuata, kwa hivyo sera iliyofunzwa huamua kile mwanafunzi anafanya ifuatayo ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Mifano ya mantiki iliyofupishwa.** Njia ya bei rahisi ya tabia ya kipolojia ni kufundisha mfano mdogo kuiga mkubwa: Pedagogy-R1 (1.5B na 7B) ilirekebishwa kwa maelekezo juu ya matokeo yaliyochujwa kwa kipolojia yaliyofupashwa kutoka kwa mwalimu wa QwQ-32B, ikiunganishwa na uundaji wa ilani wa Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Mafunzo ya baadae yaliyo na hali ya maelekezo dhidi ya data halisi.** LearnLM inaweka mafunzo ya mfano wa elimu kama *kufuata maelekezo ya kipolojia*, ikibeba maelekezo ya kiwango cha mfumo yanayoruhusu watengenezaji na waalimu kubainisha tabia ya mwalimu bila kujitoa kwa ufafanuzi mmoja wa kipolojia. Inachanganywa katika hatua za mafunzo ya baadae za Gemini kwa kufundza pamoja, na wataalamu walipendelea dhidi ya GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) na Gemini 1.5 Pro wa msingi (**+13%**). Matokeo muhimu ni kwamba **RL ni bora zaidi kwa kiasi kikubwa kuliko SFT peke yake** katika kufuata maelekezo ya kipolojia yenye mabadiliko ndogo katika mazungumzo marefu ([[learnlm-improving-gemini-learning]]). TeachLM inachukua mkeka tofauti: kwamba [[prompt-engineering|uhandisi wa ilani]] ni suluhisho la muda na kipengele kinachopungua ni data *halisi* ya mwingiliano kati ya mwanafunzi na mwalimu. Ilifunzwa kwa **masaa 100,000** ya vipindi vya moja kwa moja chini ya uanifishaji mkali, inazidisha mara mbili muda wa kuzungumza wa mwanafunzi, kuboresha mtindo wa maswali, na kuongeza mizunguko ya mazungumzo kwa **50%** ([[teachlm-post-training-llms-education]]). Pamoja zinafafanua nafasi ya muundo: mafunzo ya baadae yaliyo na hali ya maelekezo data yako inapopungua, urekebishaji mahususi juu ya mwingiliano halisi wa ualimu unapokuwa nayo.

**Ubora wa usimamizi hushinda wingi wa usimamizi.** Mwendelezo wa SWIM kwa kigeuzi cha kuandika ni onyesho laini zaidi. Uundaji wa ilani uliotokana na rubriki ulitoa udhibiti mdogo wa ujuzi (wastani bora wa trait QWK 0.577 kwa Claude Sonnet, 0.422 kwa GPT-5.4, karibu sifuri kwa mfano wa wazi wa 7B); mafunzo ya usimamizi yalipandisha mfano huo wa 7B hadi **0.474 ± 0.023**. GRPO dhidi ya zawadi iliyotolewa na alama-za-insha-za-kiotomatiki ilipanda zaidi hadi **0.618 ± 0.005** katika kila trait na ilani, zawadi iliundwa kama usahihi wa trait uliosawazishwa kwa utendaji kwa sababu zawadi za kulinganisha kamili ni adimu sana katika mpangilio wa trait nyingi ([[swim-student-writing-simulation-2026]]). Utafiti wa kuunda dhana potofu unafikia hitimisho kali zaidi kuhusu *nini* usimamizi lazima uwe nao: mifano iliyorekebishwa kwa maelekezo ilijifunza dhana potofu za aljebra tu ikiwa ilifunzwa kwa **nyenzo za suluhisho za kiwango cha hatua**, na usahihi ukibaki **chini ya 30% katika kila ukubwa wa data** ikiwa ilifunzwa kwa majibu ya mwisho peke yake. Jukumu lake la mwanafunzi liliweka kosa la kujifunza kwa ujumla hadi mifano sahihi ilivyochanganywa wazi kwa uwiano wa chini kama **moja kati ya nne**, wakati jukumu la mwalimu halikuonyesha gharama kama hiyo, likidumisha usahihi sahihi kutoka **93% hadi 98%** katika dhana potofu kumi zilizofunzwa pamoja ([[misconception-acquisition-dynamics-llms-2026]]).

Data ya mafunzo yenyewe ni kitu mifano inaweza kupanga: Edu-QuRating inarekebisha ufupishaji wa upendeleo kwa upangaji wa data ya kielimu, ikichukua nafasi ya alama moja ya "je, hii ni ya kielimu?" na vipimo 20 vya rubriki vinavyohusu usahihi wa ukweli, muundo wa kipolojia na ufaa wa kiwango ([[garrod-edu-qurating-educational-data-curation-2026]]).

**Nadharia inaweza kuwa ngazi ya msaada ya mafunzo.** Kwa mawakala wanaootomatisha [[learning-design|muundo wa mifumo ya mafunzo]], mseto wa mifumo ya kitamaduni ya ADDIE na Dick & Carey pamoja na mantiki ya mtindo wa ReAct ulishinda nadharia safi (iliyo na muundo lakini haisuguamizi) na mawakala wa mbinu tu (yanasuguamizi lakini hayana msingi), katika hali **25,795** kutoka kwenye matriki ya muktadha ya vigezo 51 yenye itifaki ya mahakimu wengi kupunguza upendeleo wa LLM-kama-mhakimu ([[jeon-isd-agent-bench-2026]]). Na utafiti wa *lebo* za usimamizi uligundua kuwa kupa kila mfano wa mafunzo tabia moja lengwa — ujuzi wa somo, msingi wa mtaala, mantiki ya uchunguzi, au ngazi za msaada — lilipandisha kila kiwango cha mfano kilichojaribiwa, na faida kubwa zaidi katika ngazi za msaada na katika kutumia historia ya mwanafunzi, wakati uchunguzi wa hali ya maarifa ulibaki dhaifu zaidi kwa **54.04%** ([[omniedu-open-educational-foundation-models-2026]]).

## Kufundisha upande wa mwanafunzi, si mwalimu tu

Mifumo hiyo hiyo inaelekezwa zaidi kwa kuiga wanafunzi, ambayo hubadilisha uchumi wa kutathmini mwalimu: badala ya kuajiri wenye kujifunza, unawazalisha.

Onyo ni kwamba wanafunzi walioigwa lazima wahakikiwe kama chombo kingine chochote. Kupima kiwango cha mifano iliyorekebishwa na iliyoilaniwa kwa **mazungumzo 382 yaliyowekwa kando** kutoka kwenye korpus kubwa zaidi ya umma ya mazungumzo halisi ya hisabati kati ya mwanafunzi na mwalimu — katika vipimo saba vinavyoenea katika mambo ya lugha, tabia na ujuzi wa kiakili — kulizalisha jaribio la moja kwa moja zaidi la uwanja juu ya kama wanafunzi walioigwa hutenda kama wanafunzi ([[simulated-students-tutoring-dialogues-2026]]). Njia mbili zaidi zinasukuma juu ya uaminifu: INSIDE hurekebisha LLM ili *kutenda* na *kufikiri* kama wanafunzi, ikizalisha mazungumzo ya ndani yaliyotokana na Taxonomy ya Bloom katika vipimo vya kiakili, hisia na hatua, na ikifunzwa kwa nyenzo za fikra na hatua zilizojumuishwa ([[inside-llm-student-simulator-reasoning-2026]]), na profaili zinazojua historia huweka uigizaji kwenye njia ya awali ya mwanafunzi badala ya persona tuli ([[history-aware-student-simulation]]). Kwa mtengenezaji, somo la vitendo ni kwamba kigeuzi ni chombo cha kupima na kurithi kila swali la uhalali ambalo hilo linaimaanisha.

## Kile kinakwenda vibaya

**Kujifanya mzuri (sycophancy) ni lengo la mafunzo, si mpangilio wa utumiaji.** Ualimu unahitaji mgogoro wa kurekebisha, na mifano hupinga. EduFrameTrap inaonyesha kuwa mifano inayostahimili mashambulizi ya kubadilisha muktadha bado yanasalia chini ya shinikizo la mamlaka au la kihisia-kijamii na huzuia maoni ya kurekebisha, na hii ndiyo sababu waandishi wake wanadai kwamba tabia ya "mzuri-lakini-sahihi" inapaswa kuwa sharti wazi la mafunzo badala ya upendeleo ([[eduframetrap-llm-sycophancy-educational-safety]]). Mafunzo yanayozawadi kuongoza kuliko kujibu — kama mfano wa zawadi wa DAPO wa EduQwen unavyofanya — ni kigeuzi kimoja cha muundo dhidi yake, lakini [[contextual-sycophancy-ai-literacy|ujifanyi mzuri wa muktadha]] unadumu baada ya uundaji wa ilani na ulinganisho, na makosa ya wenye kujifunza bado yanaingia kwenye ushauri wa AI ([[contextual-sycophancy-ai-literacy]]).

**Mafunzo hayafanyi mfano kuwa salama katika mazungumzo marefu.** SafeTutors inaonyesha kuwa hata mifano mahususi ya kipolojia hupungua katika mazungumzo ya kudumu na yanaweza kufanya madhara ya kufichua jibu kupita kiasi ([[hazra-safetutors-pedagogical-safety-2026]]), kwa hivyo [[pedagogical-safety|usalama wa kipolojia]] lazima ujaribiwe kwa urefu wa mazungumzo badala ya kwa mzunguko mmoja.

**Uhakiki unaweza kuchukua nafasi ya mafunzo — au unahitajika badala yake.** GPT-4 isiyofunzwa ya mipaka ilizalisha takriban **35%** ya vidokezo vilivyo pana mno, visivyo sahihi au vinavyofichua jibu wakati wa kuandika maoni kwa mfumo wa ualimu wa akili, na ukaguzi wake wa ubora wa kiotomatiki haukulingana na hukumu ya binadamu; waandishi wanahitimisha kuwa LLM hazina mfano wa ndani wa mafunzo na kuwa uhakiki thabiti au mafunzo ya kikoa mahususi yanahitajika kabla ya matumizi ya mwanafunzi bila usimamizi ([[reddig-maclellan-personalized-feedback-llm-2026]]). Athari ya vitendo inakatia njia zote mbili: wakati mwingine jibu sahihi ni safu ya uhakiki badala ya mzunguko wa mafunzo, na wakati mwingine uhakiki ndiyo unaokuambia mzunguko wa mafunzo umeshindwa.

**Tathmini yako inaweza kupima kitu kisichofaa.** Hii ni mtego wa kawaida zaidi katika maandishi ya urekebishaji mahususi yaliyo hapa. ROUGE-L na QWK hupima ufanano na kupanga, si usahihi wa kuhesabu ([[lora-finetuned-control-systems-course-qa-2026]]); urekebishaji mahususi unaweza kufikia QWK bora wakati maoni ya mfumo huo huo hayachanganuliwi ([[wraft-automated-writing-evaluation-argumentative-2026]]); na mfano unaweza kupanga wanafunzi vizuri huku ukikuwa na makosa juu ya uwezekano wa kila mmoja kuhitaji msaada. Ambapo lengo ni dhana, urekebishaji mahususi unapaswa kuunganishwa na chombo kinachopima dhana hiyo — matokeo ya kuelekeza kwa ujasiri ni kigezo kizuri, kwa kuwa hubadilisha namba ya usahihi kuwa sera ya uendeshaji inayoweza kudumisha binadamu ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## Mfuatano wa vitendo kwa watengenezaji wa kielimu

Umetolewa kutoka ushahidi uliopo juu, katika mpangilio unaozuia kupoteza nguvu ya kompyuta:

1. **Weka kiwango cha msingi unaoweza kushinda, ikijumuisha cha udogo.** Mfano wa msaidizi wa kozi bila upatikanaji ulipata alama chini ya TF-IDF. Weka usahihi wako wa ilani-peke yake kabla ya kuzingatia mafunzo.
2. **Ongeza upatikanaji kabla ya vigezo.** Kuweka mfano kwenye vyanzo vyako mwenyewe ni faida kubwa ya bei rahisi zaidi iliyoripotiwa hapa (52.3% → 66.6%), na inaweza kurudishwa.
3. **Boresha ilani, na uiboreshe kwa kurudia.** Uboreshaji ulioongozwa na rubriki ulisogeza makubaliano kutoka 54.75% hadi 81.25% bila mafunzo yoyote, na uzalishaji wa maswali uliboreka tu baada ya uboreshaji wa ilani kupata ukingo — ukingo huo ni ishara yako kuwa mafunzo yanaweza kuongeza kitu.
4. **Rekebisha mahususi lengo ni muundo thabiti, mali iliyodhibitiwa, au kikoa ambacho mfano wa msingi halina.** LoRA juu ya mifano maelfu kadhaa inaweza kuweka mifano madogo ya wazi kwenye usawa na mwanadamu anayewapa alama, na seti ya data ya maelekezo inaweza kusogeza mfano wa 7B kutoka karibu sifuri hadi ndani ya 0.15 ya rejea kubwa zaidi katika vipimo mahususi vya kikoa.
5. **Chagua kiwango na tabaka kwa makusudi, na tarajia tabia maalum ya muundo.** Faida kwa kila kigezo cha kifaa ilishuka viwango vilivyopanda, marekebisho ya tabaka nne yalishinda yale ya kina kidogo na ya kina kamili, na familia moja ya mifano iliboreka sana wakati nyingine haikusogea kabisa.
6. **Tumia mafunzo ya baadae unapohitaji kubadilisha *jinsi* mfano anavyofundisha.** Zawadi kuongoza kuliko kujibu, na tarajia zawadi kipigwa — iandike dhidi ya kiwango, si dhidi ya hisia.
7. **Simamia kwa kiwango cha hatua.** Mafunzo ya majibu ya mwisho peke yake yalizalisha usahihi wa dhana potofu chini ya 30% katika kila ukubwa wa data.
8. **Weka binadamu kwenye mzunguko ujasiri unapokuwa mdogo.** Kuelekeza sehemu ya tano isiyo na ujasiri ya majibu kuliondoa takriban 80% ya kazi ya mkono huku ukiboresha makubaliano.
9. **Jaribu usalama katika mazungumzo kamili.** Mazungumzo marefu ndiyo mahali mifano mahususi yanapopungua.
10. **Pima matarajio.** Chaguo la mfano na la ilani ni takriban 15% tu ya kutokulingana na faida za kujifunza; sehemu ya unachotaka kutoka mafunzo haipatikani kutoka mafunzo.

## Maswali ya Wazi

1. Je, mafunzo ya baadae ya kipolojia yanajumuisha kati ya masomo, au urekebishaji mahususi wa somo mahususi daima unahitajika?
2. Je, mchakato wa RL–SFT–RL unaweza kuunganishwa na kumbukumbu ya muda mrefu kwa ubinafsishaji kati ya miradi?
3. Ni seti ndogo ya kiwango gani ya usimamizi ambayo bado inafundisha mantiki ya kipolojia ya kiwango cha hatua, na inaweza kushirikiwa kati ya taasisi bila kushiriki data ya mwanafunzi?
4. Tathmini ya mifano ya kielimu iliyorekebishwa inapaswa kuwa na kanuni ipi, ikizingatiwa kuwa vipimo vya ufanano vinaweza kuwa bora wakati mfano hautumiki?

## Miunganisho na dhana zinazohusiana

Ukurasa huu ni mwenzake wa *jinsi mfano unavyofanywa* ya [[llm]], ambayo inashughulikia mifano mikubwa ya lugha ni nini na jinsi inavyotenda. Inatia chini ya [[ai-technologies]] kama nodi ya mafunzo-na-marekebisho, kando ya [[rag]] (mbadala wa upatikanaji ambao kwa kawaida huja kwanza), [[prompt-engineering]] (kigeuzi cha bei rahisi zaidi), na [[reinforcement-learning]] (nusu ya RL ya mafunzo ya baadae). Matokeo yake hulisha [[intelligent-tutoring]] na [[adaptive-learning]]; matumizi yake ya kielimu ya kawaida zaidi ni [[automated-assessment]], [[automated-essay-scoring]] na [[ai-feedback-quality]]; na jamaa zake wa dhana walioko karibu zaidi ni [[educational-nlp]], [[simulating-students]], [[open-source]] na [[student-modeling]]. Hatari inazozalisa zinaoshikiliwa na [[pedagogical-safety]], [[ai-sycophancy]], [[hallucination-risk]] na [[privacy]].

## Dhana Zilizounganishwa

- [[llm]] — mifano hii ni nini; ukurasa huu ni jinsi yanavyofanywa
- [[ai-technologies]] — kioo: teknolojia na mbinu za AI
- [[rag]] — upatikanaji, hatua kabla ya mafunzo
- [[prompt-engineering]] — kigeuzi cha bei rahisi zaidi, na kiwango cha msingi cha kushinda
- [[reinforcement-learning]] — hatua ya RL ya mafunzo ya baadae
- [[intelligent-tutoring]] — kikoa kuu cha matumizi
- [[adaptive-learning]] — kurekebisha kwa wenye kujifunza, tofauti na kurekebisha mifano
- [[automated-assessment]] — mahali mifano ya kupima alama yaliyorekebishwa yanapofika
- [[automated-essay-scoring]] — kazi ambayo ushahidi mwingi wa kupima alama unatokana nayo
- [[ai-feedback-quality]] — kile urekebishaji mahususi hufanya na kile hafanyi
- [[educational-nlp]] — familia ya mbinu za karibu
- [[simulating-students]] — matumizi ya upande wa mwanafunzi ya mifumo hiyo hiyo
- [[student-modeling]] — safu ya kuunda chini ya uigizaji
- [[open-source]] — uzito wa wazi ni kile kinachofanya urekebishaji mahususi wa ndani uwezekanavyo
- [[benchmark]] — jinsi mifumo hii hupimwa, na mipaka yake
- [[assessment-validity]] — kwa nini kipimo kizuri bado kinaweza kuashiria chombo kibovu
- [[pedagogical-safety]] — kile mafunzo hayahakikishi
- [[ai-sycophancy]] — tabia ambayo mafunzo ya baadae yanaweza kulenga
- [[hallucination-risk]] — mtindo wa kushindwa ambao urekebishaji mahususi hauwezi kuponya
- [[privacy]] — kizuizi juu ya data ya mafunzo na juu ya kusahau
- [[human-in-the-loop-ai]] — mbadala ambao hufanya uotomatiki kuwa na gharama nafuu
- [[metacognition]] — lengo la kipolojia kwa mafunzo ya baadae
- [[scaffolding]] — tabia ambayo kazi za zawadi zinajitahidi kuweka kanuni
- [[ai-education]] — uwanja ambao kazi hii inahudumia

## Makala Zilizounganishwa

- [[singh-eduqwen-pedagogical-rl-2026]] — mchakato wa RL–SFT–RL: 96.52% kwenye CDPK, kupita Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — kufuata maelekezo ya kipolojia ndani ya mafunzo ya baadae ya Gemini
- [[teachlm-post-training-llms-education]] — mafunzo ya baadae kwa masaa 100,000 ya data halisi ya ualumu
- [[tact-pedagogically-adaptive-esl-tutoring]] — mafunzo ya baadae yanayolingana na taxonomy yanayolenga uamuzi wa kipolojia
- [[swim-student-writing-simulation-2026]] — SFT na GRPO dhidi ya uundaji wa ilani wa rubriki, pamoja na undani wa ubunifu wa zawadi
- [[misconception-acquisition-dynamics-llms-2026]] — nyenzo za kiwango cha hatua kama sharti linalofunga la mafunzo ya dhana potofu
- [[jeon-isd-agent-bench-2026]] — mawakala wa muundo wa mafunzo waliotokana na nadharia katika hali 25,795
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — RL ya heuristic ya kulinganisha mifano kama viongozi wa Socratic
- [[special-r1-rl-special-education]] — kujifunza kwa nguvu kwa ulinganisho wa elimu mahususi
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — kujifunza kwa nguvu kwa uongozu wa LLM kwa ubinafsishaji
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — mfano mkubwa wa mantiki ya kipolojia
- [[omniedu-open-educational-foundation-models-2026]] — tabia moja lengwa kwa kila mfano, katika viwango vya mifano
- [[garrod-edu-qurating-educational-data-curation-2026]] — kupanga data ya kielimu kwa mafunzo
- [[lora-finetuned-control-systems-course-qa-2026]] — athari za kiwango cha LoRA na faida kwa kila kigezo cha kifaa
- [[aiawe-automated-writing-evaluation]] — AWE iliyorekebishwa na LoRA ambapo kiwango hakikutabiri mafanikio
- [[llm-graders-computer-science-exams-2026]] — kifaa kimoja kwenye mifano ~3,900 yakifikia usawa na mwanadamu anayewapa alama
- [[iks-instruct-dataset-indian-knowledge]] — seti ya data ya maelekezo yenye mifano 24,795 na kiwango cha msingi cha karibu sifuri
- [[llm-children-reading-story-generation]] — udhibiti juu ya kiwango kwa udhibiti wa kiwango cha kusoma
- [[bert-discourse-english-teaching-2026]] — tabaka zipi za kurekebisha mahususi, na kwa nini nne zilishinda kumi na mbili
- [[nuclear-diffusion-text-to-image-learning-2026]] — muundo, si idadi ya vigezo, huamua kama urekebishaji mahususi unafanya kazi
- [[distilling-self-explaining-lm-learning-analytics-2026]] — ufupishaji katika mfano wa 2B na ukaguzi wa uaminifu
- [[llm-unlearning-math-privacy]] — kusahau kulitekelezwa kwa gradient kwa PII na maudhui ya madhara
- [[reflection-level-classification-hungarian-essays-2026]] — transfoma zilizorekebishwa dhidi ya vipimo vya kitamaduni na vya embedding
- [[multimodal-item-parameter-estimation-2026]] — kujifunza mikondo ya IRT kutoka vitu vya njia nyingi
- [[know-when-to-trust-ai-scoring-reliability-2026]] — kuelekeza kwa ujasiri kama sera ya binadamu-katika-mzunguko
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — upatikanaji kama uamuzi wa kiwango cha kwanza, na nishati na VRAM zilizoripotiwa
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — masomo 23: uundaji wa ilani 13, urekebishaji mahususi 7, mseto 3
- [[gpt-item-generation-l2-listening-2026]] — uundaji wa ilani unapata ukingo, kisha urekebishaji mahususi unaongeza mengine
- [[wraft-automated-writing-evaluation-argumentative-2026]] — urekebishaji mahususi ulishinda katika kupima alama na ukashindwa katika maoni
- [[educational-llm-alignment]] — kizingiti cha ~15% juu ya chaguo la mfano na la ilani
- [[yasar-llms-iterative-pedagogical-design-2026]] — uundaji wa ilani ulioongozwa na rubriki kama mbadala bila mafunzo
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — udhibiti wa persona wa kiwango cha ilani kwa uigizaji wa dhana potofu
- [[eduframetrap-llm-sycophancy-educational-safety]] — ujifanyi mzuri kama sharti wazi la mafunzo
- [[contextual-sycophancy-ai-literacy]] — ujifanyi mzuri unaodumu baada ya uundaji wa ilani na ulinganisho
- [[hazra-safetutors-pedagogical-safety-2026]] — usalama unapopungua katika mazungumzo ya kudumu
- [[reddig-maclellan-personalized-feedback-llm-2026]] — vidokezo ~35% visivyotumika kutoka mfano wa mipaka usiofunzwa
- [[simulated-students-tutoring-dialogues-2026]] — kama wanafunzi walioigwa hutenda kama wanafunzi
- [[inside-llm-student-simulator-reasoning-2026]] — kurekebisha mfano kutenda na kufikiri kama mwanafunzi
- [[history-aware-student-simulation]] — uigizaji uliowekwa kwenye njia ya mwanafunzi
