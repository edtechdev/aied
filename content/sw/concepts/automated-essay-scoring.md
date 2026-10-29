---
title: Kupima Insha kwa Kiotomatiki (AES)
created: "2026-10-13T06:05:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment, automated-assessment]
discipline: [writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/automated-essay-scoring
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

> **Kupima Insha kwa Kiotomatiki (AES)** — matumizi ya AI kutathmini na kutoa alama kwa insha zilizoandikwa, ikihusisha mbinu za kawaida za takwimu, mifano ya lugha iliyorekebishwa kwa ustadi (fine-tuned), na mbinu zinazozidi kupatikana za kutoa ilani zinazotegemea [[llm]]. [[research-methods-aied|Utafiti]] wa AES katika hifadhi hii ya maarifa unahusisha usahihi wa kupima, usawa na upendeleo, uhalali wa kimetriki, na [[accessibility]] kwa waelimishaji.

## Maswali ya Kutafakari

- Kupima Insha kwa Kiotomatiki kimehamia kutoka mifano ya kawaida ya takwimu hadi kutoa ilani kulingana na LLM. Msisongo wa mawazo kuu katika ukurasa huu ni kati ya usahihi na upatikanaji — mifano iliyorekebishwa kwa ustadi hupima vizuri lakini haifai kwa matumizi kwa waelimishaji wengi. Ungetanguliza upi katika miktadha yako mwenyewe, na kwa nini?
- Gund kuu ni kwamba kujumuisha tu insha za mfano katika ilani hufanya makubaliano kati ya LLM na binadamu yakikaribia uaminifu wa binadamu–binadamu — na mfano wa bei nafuu unaweza kulingana na mfano wa gharama kubwa zaidi. Hii inapendekeza nini kuhusu kiasi gani cha ubora wa AES kinatokana na mfano dhidi ya jinsi ilani inavyotolewa?
- Ukurasa unatoa onyo kwamba upimaji wa AI unaweza kupunguza kwa mtindo wa kimfumo alama za wanafunzi wenye usanii wa lugha tofauti. Kabla ya kusoma, kama ungemwona AI akitoa alama ya chini kwa insha ya mzungumzaji asiyezaliwa, ungedhania ilikuwa "tatizo la upendeleo" au "alama" tu? Nini kingebadilisha jibu lako?
- Mbinu inayojirejelea yenyewe hutathmini waandishi wa L2 kwa kulinganisha uandishi wao na kazi zao za awali badala ya viwango vya wazaliwa. Uchaguzi wa msingi wa kulinganisha hubadilishaje maana ya alama — na ni wanafunzi wapi ambao inaweza kuwahudumia kwa usawa zaidi?
- AES inaingiliana na tathmini ya kuundwa (formative) inapotumika kwa maoni badala ya kutoa alama. Maoni ya mashine juu ya insha yangekuwa ya manufaa kweli kwa mwandishi anayekua lini, na yanawezaje kupunguza aina za [[qualitative-research|maoni ya kina]] ambayo mhariri wa binadamu angeitoa?

## Utangulizi

Kupima Insha kwa Kiotomatiki kuna historia ndefu katika teknolojia ya elimu, kuanzia mifano ya awali ya takwimu hadi mbinu za kisasa zinazotegemea LLM ambazo zinaweza kutathmini insha kwa mtazamo kamili bila seti kubwa za data zilizopimwa mapema. Msisongo wa mawazo kuu katika utafiti wa AES ni kati ya usahihi na upatikanaji — wakati mifano iliyorekebishwa kwa ustadi inafikia matokeo madhubuti, inatumia rasilimali nyingi na haifai kwa waelimishaji wengi.

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang et al.]]** RACES inatumia ulinganifu wa thawabu kufanya upimaji wa insha kwa LLM kuwa sahihi na thabiti, ikishughulikia wasiwasi kuu wa uhalali wa AES.

## Mada Kuu za Utafiti

**AES inayotegemea kutoa ilani** imeibuka kama mbinu inayopatikana zaidi. **[[choi-anchor-aes-prompting-2025|Utafiti wa nakala ya lango wa Choi et al.]]** unaonyesha kuwa kujumuisha insha za mfano katika ilani hufanya makubaliano kati ya LLM na binadamu yakikaribia uaminifu wa binadamu–binadamu, huku GPT-4o mini ikifikia matokeo yanayolingana na GPT-4o kwa bei ya chini. Hii inaungana na [[prompt-engineering]] upana zaidi na inafanya AES iwezekane kwa matumizi ya [[teacher-role|mwalimu]].

**Upimaji wa kimetriki na wa kiwango cha sifa** unaenda zaidi ya alama za mtazamo kamili. **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]** hutoa mfumo unaotambua kimetriki kwa upimaji unaobadilika kwa sifa na maoni yanayotegemea [[sociocultural-learning|ZPD]]. **[[icle-plus-plus-essay-scoring|ICLE++]]** inaunda mifano ya sifa za undani mwembamba kwa upimaji wa insha wa mtazamo kamili, ikisonga usahihi wa tathmini ya kiotomatiki.

- **Upimaji wa sifa katika kiwango cha kipengele umezimwa na data iliyo nyuma ya kila kipengele.** [[automated-essay-scoring-critical-thinking-physics-2026|Firdausi et al. (2026)]] walifunza kigawanyaji kimoja kwa kila kipengele cha mfumo wa ufikiri mahususi wa FRISCO wa Ennis juu ya insha 106 za fizikia za kidato cha kumi na moja za Kiindonesia (83 kwa mafunzo, 23 kwa majaribio, na wapima watatu wa walimu wakikubaliana kwa kappa 0.78–0.84 katika kila kipengele). Makubaliano yalikusanyika katika udhihirisho badala ya mantiki: quadratic weighted kappa ilifika 0.763 kwa Clarity na 0.728 kwa Situation lakini 0.374 tu kwa Focus, 0.332 kwa Reason na 0.227 kwa Inference. Ishara ya mpangilio ilitengenezwa badala ya kuchukuliwa — insha za kiwango cha 1 za kisintetiki (uzalishaji wa kiolezo, kupunguza hadi 20–40% ya urefu wa asili, kuondoa maneno muhimu) pamoja na uandikaji upya wa LLM zilipandisha Focus kwa kappa +0.346 kutoka msingi wa 0.028 — na usanidi mmoja ulifika usahihi 0.652 na kappa karibu sufuri au hasi, hivyo usahihi si kigezo halali cha uteuzi katika AES ya mpangilio.

**Upendeleo na usawa** ni wasiwasi muhimu. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** waligundua kuwa upimaji wa AI hupunguza kwa mtindo wa kimfumo alama za wanafunzi wenye usanii wa lugha tofauti, ikionyesha haja ya [[bias-mitigation]] na mambo ya [[equity-in-ai-education]] katika utekelezaji wa AES.

**Ukosefu wa makubaliano na wapima wa binadamu ni wa kimfumo, si wa nasibu.** Mifano ya GPT na Llama iliyotolewa bila marekebisho ilikubaliana kidogo tu na alama za binadamu (QWK ≈ 0.17–0.28 dhidi ya 0.72 kati ya wapima wawili wa binadamu) na ilikuwa na upendeleo kwa mwelekeo unaotegemea ubora — juu kwa insha fupi, zisizostawi na chini kwa zile ndefu, zenye nguvu ambazo zina makosa madogo ya uso ([[llms-do-not-grade-essays-like-humans-2026|Mathew et al. (2026)]]).

**Tathmini ya L2 na inayojirejelea** inachunguza miktadha ya uandishi wa wasiozaliwa. **[[self-referential-l2-writing-llm-assessment|Tathmini ya L2 inayotegemea wasifu]]** inatumia mbinu inayojirejezea ambayo inalinganisha uandishi wa mwanafunzi na kazi zao za awali badala ya viwango vya wazaliwa.

**[[explainable-ai|Ufafanuzi]] na uzito wa sifa** hufungua sanduku jeusi la jinsi LLM zinavyopima kweli. **[[llm-essay-scoring-feature-weighting-2026|Wang et al. (2026)]]** walilinganisha LLM tatu (Qwen, GPT, Gemini) na wapima wa binadamu juu ya insha za Kiingereza za wasiozaliwa katika sifa kumi na sita za maandishi, wakigundua ulinganifu mkubwa wa jumla lakini uzito tofauti: LLM zilitia mkazo usahihi wa kisarufi, ustadi wa msamiati, na ugumu wa muundo wa sentensi, wakati wapima wa binadamu waliipa kipaumele ukamilifu wa maudhui na uwasilishaji wa kuona. Kwa uzito zaidi, LLM zilibadilisha uzito wao kulingana na kiwango cha ustadi — zikiweka uzito zaidi juu ya makosa ya lugha kwa wanafunzi wenye ustadi mdogo na kuwazidi kuwathawabisha wale wenye ustadi mkubwa kwa ustadi wa lugha — wakati wapima wa binadamu walidumu na mfumo thabiti zaidi. **[[llm-essay-assessment-framework-reliability-2026|Liu, Ye, na Yan (2026)]]** wanapanua hili na mfumo wa tathmini wa mifano mitano (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) juu ya insha 60 ndefu, wakitumia ugunduzi wa sababu kufichua heuristi za tathmini tofauti: mifano mingi iliipa kipaumele usahihi wa msamiati na ufasaha, wakati nyingine zilitia mkazo ugumu wa muundo wa sentensi au ujumuishaji wa nyanja mbalimbali, na zingine zilionyesha kutokuwa thabiti, kufinyanga alama, au kupunguza kwa mtindo. Pamoja, masudio haya yanaweka msingi kwamba uhalali wa AES hutegemea si tu makubaliano ya jumla bali *jinsi* mifano inavyoweka uzito kwa sifa na iwapo uzito huo ni thabiti katika vikundi vidogo vya wanafunzi — ikitia moja kwa moja kwa ukaguzi wa [[assessment-validity]] na [[bias-mitigation]].

**Mipaka ya aina ya kipengele na mipaka ya kupima insha.** Katika mtihani wa chuo kikuu wa muundo mchanganyiko, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] waligundua kuwa makubaliano ya ChatGPT-5 na wataalam yalikuwa makubwa hadi karibu kamili katika vipengele vya lengo (CCC 0.935–1.000) lakini vilipungua ghafla katika majibu ya wazi — karibu sufuri hadi hasi kwa majibu mafupi na 0.341–0.854 tu kwa maswali ya insha — na rubriki iliyopangwa haikuboresha makubaliano ya insha kwa uthabiti. Hii huzuia uhalali wa AES: ufasaha wa mfano husaidia katika vipengele vilivyoelezewa vizuri lakini haihamishi hadi upimaji wa insha wa mtazamo kamili, ambapo tafsiri ya muktadha ya majibu ya alama ya sehemu bado inafaa kwa [[human-in-the-loop-ai|hukumu ya binadamu]].

**Mipaka ya aina ya suala katika makubaliano ya uchunguzi.** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao na Fan (2026)]] walitumia DeepSeek-R1 kulebo masuala mahususi ya uandishi kabla ya marekebisho na kulinganisha lebo zake na uchunguzi wa mwalimu katika mizunguko mitatu (wastani ya F1 = 0.768, SD = 0.037). Makubaliano yalikuwa juu zaidi katika masuala yanayoonyeshwa mahali pa ndani kama uchaguzi wa neno la msamiati (F1 = 0.824) na ya chini zaidi ambapo suala linategemea uhusiano wa dai–ushahidi (matumizi ya vyanzo na ushahidi, 0.579), hivyo makubaliano katika jukumo la uchunguzi hutegemea aina ya suala, si tu mfano au ilani.

**Usambazaji wa rubriki uliojinuliwa unaweza kufanya vipimo vya jumla vya kupima visisikilize.** Tathmini ya kiotomatiki ya kipengele cha rubriki inaweza kuwa kazi ya uainishaji yenye usambazaji wa lebo uliojinuliwa badala ya alama endelevu: kwa alama ya kiwango cha tafakari 0-3 katika insha 1,954 za wanafunzi wa Kihungari, 68% ya insha zilikuwa katika kiwango cha 3 na 1.8% katika kiwango cha 0, na usanidi bora wa kina kwa sehemu (SMOTEBoost na embeddings za Qwen3) ulifika alama ya jumla ya 0.7176 iliyowasilishwa juu ya usahihi, F1 na ROC-AUC dhidi ya 0.6872 kwa transformer bora iliyorekebishwa kwa ustadi — lakini usanidi mmoja wa RidgeClassifier ulipata 0.7131 ROC-AUC kwa usahihi 0.5162 tu, na kusawazisha madarasa kulipunguza kila kipimo (usahihi ukishuka kutoka 0.6672 bila huo hadi 0.6408 nayo), hivyo waandishi wanasoma uchaguzi wa mfano kama swali la kipimo kipi kinachomuhimu, huku transformers zikijipa nafasi zao kupitia unyeti wa madarasa ya ndogo badala ya makubaliano ya jumla ([[reflection-level-classification-hungarian-essays-2026|Csibi et al., 2026]]).

**Ushahidi wa utekelezaji wa masuala makubwa.** Ushahidi wa uwanja kutoka utekelezaji halisi wa masuala makubwa ([[human-in-the-loop-ai-scoring-national-assessment-2026|*Acredita EB* ya Uruguay, 2024–2025; Curi et al.]]) unaonyesha GPT-5 iliyoundwa kwa ilani ikifikia makubaliano ya 60–80% na wapima waliiofunzwa wa binadamu katika rubriki ya Kihispania ya kichanganuzi ya vipengele 15, takribani pointi tano za asilimia chini ya makubaliano kati ya wapima wa binadamu kwa vipengele vingi na isipungue zaidi ya pointi 15, huku uthabiti wa kurudia ukiwa juu ya 90% kwa karibu vipengele vyote. Msamiati, muundo wa sentensi na uandishi wa herufi vilikuwa vipengele dhaifu zaidi, na kipengele cha uandishi wa herufi kilibidi kipelekwa kwa kikaguzi cha sarufi cha kudhibitiwa (LanguageTool, usahihi 68%, uthabiti 100%) kwa sababu orthography ya kiwango cha tokeni ni mahali ambapo mfano ni thabiti kidogo zaidi. Ilani zilizojengwa kwa toleo moja la mtihani zilihamishwa hadi linalofuata kwa marekebisho madogo yanayohusisha mada tu, na AI ilikuwa mkali zaidi kimfumo kuliko binadamu — ikitoa alama ya chini badala ya ya juu. Kwa ubunifu wa AES, somo ni kwamba upimaji unaotegemea ilani unaweza kukaribia makubaliano ya binadamu hata katika mtihani wa kitaifa, wakati udhaifu wake uliosalia uko katika kiwango cha kanuni za lugha za kiwango cha chini badala ya ubora wa jumla wa [[writing-education|uandishi]].

Uaminifu wa kiwango cha tokeni, upimaji unaozwa na uwezekano, na kuunganisha mifano kila moja yaliboresha makubaliano katika upimaji wa fikra tofauti — mbinu zilizopangwa zilifika r = 0.846 (RMSE = 0.4848), na kuelekeza majibu 20% tu yenye uaminifu mdogo zaidi kwa mapitio ya binadamu yalipunguza juhudi za mikono kwa takribani 80% ([[know-when-to-trust-ai-scoring-reliability-2026|Organisciak & Acar (2026)]]).

**[[benchmark]] ya binadamu, na inachoruhusu nini na inachoshindwa kuruhusu.** [[opraise-automated-marking-ai-assessment-2026|Utafiti wa OpRaise]] ni jaribio kali zaidi katika hifadhi hii ya maarifa juu ya iwapo alama za LLM ziko tayari kwa matumizi ya kawaida, na jibu lake linategemea benchmark badala ya mfano. Ililinganisha mifumo mitatu ya mstari wa mbele (Claude Opus 4.6, GPT-5.4, Gemini 3 Flash), kila moja chini ya usanidi 27 wa ilani unaovuka ubainishaji wa rubriki, ukalibri na mkakati wa kupima, dhidi ya alama zilizokaguliwa za insha 761 halisi za Saikolojia kutoka wanafunzi 125 katika vyuo vitatu vya Uingereza ([[higher-ed|vyuo vikuu]]). Alama za binadamu zilichukuliwa kama ukweli wa msingi kwa sababu hukumu ya kitaaluma ni kiwango kinachokubalika kijamii, na waandishi wanabainisha kuwa wapima wa binadamu wanakubaliana kwa kiasi cha wastani tu wao kwa wao — jambo ambalo linazuia kiwango ambacho makubaliano ya AI–binadamu yanaweza kudaiwa kuwa na. Dhidi ya kiwango hicho, makubaliano juu ya kiwango cha digrii ya UK yalitofautiana kati ya **asilimia 35 hadi 65 kwa taasisi** (63 asilimia Cambridge, 53 Nottingham, 35 Manchester Metropolitan) na hayakuhamishwa kati yao, hivyo mapendekezo kuu ya ripoti ni uhakiki wa mahali pa ndani kwa nyenzo za [[assessment]] za taasisi yenyewe. Matokeo mawili yanapanuka zaidi ya korpusi hii. Kwanza, uaminifu na makubaliano yanatengana: kila mfano ulipima upya karibu kwa njia moja (ICC 1.00, 1.00, 0.97) na mifano ilikubaliana kwa karibu zaidi kati yake kuliko na binadamu (ICC ya mifano mitatu 0.91), lakini zote tatu zilikubaliana juu ya kiwango cha digrii kwa **56 percent** ya majibu — uthabiti wa ndani si uhalali. Pili, alama za AI zilifinyangwa kuelekea katikati ya skela (alama ya kufinyanga ya 0.47–0.82, huku sehemu ya kupishana ambayo AI na binadamu wanakubaliana kwa wastani ikiwa katika miaka ya juu ya 50 hadi mwanzo wa 60), na hivyo AI ni sahihi kidogo zaidi hasa katika mipaka ya alama inayotenganisha Firsts na Upper Seconds na kupita na kushindwa. Upeo wa msamiati, viunganishi, ugumu wa sentensi na urefu wa maandishi vilitabiri alama za AI na athari ndogo lakini zenye umuhimu, wakati uhusiano wao na alama za binadamu ulikuwa dhaifu kwa upana — onyesho la moja kwa moja la wasiwasi wa [[ai-scoring-language-bias-physics|upendeleo wa lugha]], na jambo ambalo hakuna mkakati wa ilani uliopimwa uliondoa.

**AES kama ishara ya mafunzo badala ya hakimu.** Mifano ya kupima kwa kawaida hujifunzwa kama wathibitishaji, lakini SWIM inatumia moja kama kazi ya thawabu: [[swim-student-writing-simulation-2026|Do, Kontak na Sachan (2026)]] huganda kithibitishaji cha AES cha sifa nyingi na hukipima dhidi ya insha za wanafunzi zilizozalishwa, ikibadilisha wasifu wa sifa uliotabiriwa kuwa zawadi nyororo kwa kila insha (waswani wa wastani uliosawazishwa kwa sifa kutoka wasifu lengwa) kwa GRPO, si kipimo cha Quadratic Weighted Kappa chenyewe kwa makusudi, kwa sababu QWK inafafanuliwa juu ya kundi la jozi za lengwa–utabiri na si ishara kwa sampuli moja, wakati zawadi za kulingana kamwe ni haba mno katika mipangilio ya sifa nyingi. Maboresho yalikaguliwa upya dhidi ya kipima cha DeBERTa na kithibitishaji cha tathmini tu ambao sera haikufunzwa nayo (0.598 dhidi ya 0.479 kwa SFT, na 0.647 dhidi ya 0.501), ambacho ni ukaguzi unaotenganisha udhibiti halisi wa ustadi na kubadilika kwa mfano wa zawadi. Kwa utafiti wa AES hii ni hitaji la pili la uhalali: kipima kinachotumika kama lengo la mafunzo kinaboreshwa dhidi yake, hivyo uzito wake wa sifa na upendeleo wa lugha huenea katika kila kitu ambacho kizalishaji hujifunza - usio wa uzito wa sifa ule ule (usahihi wa kisarufi, ustadi wa msamiati na ugumu wa muundo wa sentensi zikiwa na uzito mkubwa zaidi kwa mifano kuliko kwa wapima wa binadamu) uliorekodiwa mahali pengine katika ukurasa huu, sasa ukiunda mafunzo badala ya alama tu.

**Kupima na maoni yanahitaji mbinu tofauti, hivyo mfumo unapaswa kuzitenga.** [[wraft-automated-writing-evaluation-argumentative-2026|Labib et al. (2026)]] walijenga mfumo mmoja wa insha za mabishano za TOEFL kama moduli tatu — kupima, maoni ya kiwango cha uso juu ya sarufi na mitindo, na maoni ya kiwango cha kina juu ya mpangilio, ulinganifu na hoja — badala ya mfano mmoja akifanya kazi zote tatu, na waligundua kuwa kinachoshinda katika moduli moja hupoteza katika nyingine: kurekebisha kwa ustadi kwa usimamizi wa GPT-4o juu ya 120 za seti ya milki ya insha 480 zilizopimwa kwa benchmark, zilizojaribiwa kwa 360 zilizobaki, kilifika quadratic weighted kappa ya 0.84 na RMSE ya 0.44 katika skela ya 0-5, mbele ya msingi wa Wang na Gayed (2024) (QWK 0.78, RMSE 0.57), lakini kurekebisha huko huko kulizalisha matokeo yasiyotumika kwa moduli za maoni, ambapo kutoa ilani moja kwa moja kwa Claude 3.7 ni kilichozalisha maoni yaliyokubaliwa na walimu.

### Miunganisho na dhana zinazohusiana

AES iko katika makutano ya [[automated-assessment]], [[writing-education]], na [[generative-ai]]. Inaungana na [[formative-assessment]] inapotumika kwa maoni badala ya kutoa alama, na [[feedback|Feedback Loop]] inapounganishwa katika michakato ya uandishi wa kurudia, na [[ai-literacy]] wakati waelimishaji wanaelewa na kurekebisha zana za AES. Dhana za [[assessment-validity]] na [[educational-measurement]] ni muhimu kwa kuhakikisha alama za AES zina maana na ni za usawa.

- **Makubaliano, hitilafu na kile ambacho kipima cha mseto kinaongeza.** Katika korpusi ndogo ya uandishi wa masoko wa wazi, LLM ilizidi na kanuni za kudhibitiwa na mseto wa uzito sawa kwa makubaliano kabisi na wapima wa binadamu (ICC(2,1) .435 dhidi ya .266 na .091), huku mseto ukiwa dhaifu kwa kiasi kinachoweza kuthibitishwa kuliko LLM peke yake, wakati usambazaji wa alama na jibu moja lililo karibu tupu likionyesha jinsi kadiri kama hizi zinavyotegemea muundo wa korpusi ([[automated-scoring-marketing-posts-agreement-2026]]).

Mifumo ya wazi ni sehemu ya picha hii pia: AiAWE hupima insha za mabishano kwa Gemma-3-27B-it iliyobadilishwa kwa LoRA, ikifikia QWK 0.828 na makubaliano ndani ya ±0.5 ya alama ya binadamu katika 90.56% ya insha 360 za tathmini — na inaripoti kwamba kiwango cha mfano hakitabiri utendaji wa chini kwa uaminifu chini ya mabadiliko ya LoRA ([[aiawe-automated-writing-evaluation]]).

## Dhana Zilizounganishwa

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]

## Makala Zilizounganishwa

- [[reflection-level-classification-hungarian-essays-2026]] — Automatic Reflection Level Classification in Hungarian Student Essays
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: a Modularized Automated Writing Evaluation System for Argumentative Essays
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Educational Innovation through Automated Essay Scoring: A Multidimensional Framework for Evaluating Critical Thinking in High School Physics Essays
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise report: AI marking of 761 university essays across three UK universities
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: reward-aligned consistent essay scoring with LLMs
- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing
- [[llm-essay-scoring-feature-weighting-2026]] — Feature weighting patterns in LLM-based essay scoring (Wang et al. 2026)
- [[llm-essay-assessment-framework-reliability-2026]] — Framework for evaluating LLMs in essay assessment (Liu, Ye & Yan 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: self-confidence, weighted probabilistic scoring and ensembling improve LLM scoring agreement
- [[swim-student-writing-simulation-2026]] — a frozen AES verifier used as a dense training reward for a writing generator
