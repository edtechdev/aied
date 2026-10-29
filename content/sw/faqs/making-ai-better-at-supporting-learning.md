---
title: "Je, Tunawezaje Kuboresha Uwezo wa AI wa Kusaidia Kujifunza katika Somo Letu?"
created: "2026-10-13T05:35:00-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
contributors: [editor]
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
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

Tikiti linasema "rekebisha modeli mahususi kwa nyenzo za kozi yetu." Bajeti imeidhinishwa, GPU imewekewa nafasi mwezi ujao, na mwanafunzi wa uzamili ameombwa kukusanya seti ya data. Hakuna mtu kwenye simu aliyeuliza ilani ya kawaida inapata alama ngapi, au utafutaji wa maneno muhimu unapata alama ngapi, kwenye maswali yale yale.

Uliza maswali hayo mawili kwanza. Katika hifadhi hii ya maarifa, pengo kati ya modeli ya jumla na modeli inayojua kozi kwa kiasi kikubwa ni tatizo la msingi wa nyenzo na la ilani, na ushahidi wa mpangilio huo ni wa moja kwa moja isivyo kawaida: utafiti wa msaidizi wa kozi uligundua kwamba upatikanaji, si modeli, ulikuwa uamuzi wa daraja la kwanza, na modeli ya jumla isiyo na msingi ilipata alama *chini* ya msingi wa kawaida wa TF-IDF.

Mafunzo ni jambo la kweli na wakati mwingine ni lazima. Ni kitu cha tatu au cha nne cha kujaribu, na kazi iliyo chini imepangwa ili ugundue ni ngazi ipi unaihitaji kwa kweli kabla ya kutumia nguvu za kompyuta za robo mwaka.

## Toleo fupi

**1.** Rekodi ilani ya kawaida inapata alama ngapi, na mbinu rahisi ya kileksika inapata alama ngapi, kabla ya kubadilisha chochote. Namba hiyo ya pili ndiyo inayokuweka mwaminifu.

**2.** Weka upatikanaji juu ya nyenzo zako mwenyewe mbele ya modeli. Ni faida kubwa zaidi ya mara moja iliyoripotiwa hapa kwa gharama hiyo, na inaweza kurudishwa nyuma.

**3.** Andika ilani kwa kuzingatia rubriki yako na urudie hadi maboresho yakome. Kiwango tambarare ni ishara kwamba mafunzo yanaweza kuongeza kitu.

**4.** Rekebisha uzito kwa [[llm-training-and-fine-tuning|LoRA]] pale lengo lilipo imara na finyu: muundo, rubriki, kiwango cha usomaji, msamiati wa taaluma.

**5.** Fanya mafunzo ya baadae pale tatizo lilipo tabia badala ya maudhui, na andika zawadi dhidi ya benchmark unayotarajia itatumiwa kwa hila.

**6.** Jenga seti ya mafunzo katika ngazi ya hatua. Data ya majibu peke yake haifundishi dhana potofu.

## Pata msingi ambao kwa kweli unaweza kuushinda

Kabla ya kubadilisha chochote, rekodi ilani ya kawaida inarejesha nini. Kisha rekodi mbinu rahisi inarejesha nini.

Utafiti wa [[shen-sustainable-ai-knowledge-base-cs-education-2026|msaidizi wa hifadhi ya maarifa ya kozi]] unastahili kusomwa kwa ajili ya hili peke yake. LLM ya ndani isiyo na upatikanaji ilifika usahihi wa **52.3%**. Msingi wa TF-IDF, mbinu ya kileksika ya miongo kadhaa, ulifika **55.4%**. Modeli ilikuwa mbaya zaidi kuliko mbinu ya kawaida ya kitamaduni.

Ruka hatua hii na hautaweza kujua kama urekebishaji mahususi wako ulisaidia. Mbaya zaidi, unaweza kuwasilisha mfumo ambao utafutaji wa maneno muhimu unaushinda, na kujua hilo pale tu msaidizi wa ufundishaji anapolitaja. Namba mbili kwenye lahajedwali, zilizochukuliwa mchana mmoja, hulinda bajeti iliyobaki.

## Weka modeli kwenye msingi wa nyenzo zako mwenyewe

Kuongeza [[rag|uzalishaji ulioboreshwa na upatikanaji]] juu ya nyenzo za kozi, bila urekebishaji mahususi wowote, kuliinua mfumo ule ule kutoka 52.3% hadi **66.6%**. Faida hiyo ilitokana na faharasa, na inakuja na sifa ambayo mzunguko wa mafunzo hauna: nyaraka zako zinapobadilika, unafanya faharasa upya.

Matokeo mawili zaidi yanaelekeza upande huo huo. Mapitio ya PRISMA ya tafiti 23 za majaribio kuhusu kubinafsisha AI kwa ajili ya [[writing-education|mafunzo ya uandishi]] yaligundua **uundaji wa ilani ukiongoza (N = 13), mbele ya urekebishaji mahususi (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Pale hifadhi ya maarifa inapaswa kubaki ya sasa, upatikanaji ni kianzio pekee kinachobaki cha sasa bila kuendesha kazi ya mafunzo upya.

Upatikanaji pia una muundo wa kielimu. Kuweka modeli kwenye msingi wa mifano yako mwenyewe iliyofanyiwa kazi na rubriki zako ndiyo njia ya kuibakiza ndani ya [[scaffolding|ngazi za msaada]] uliouunda, ikijibu kwa kiwango ulichoweka badala ya kuteleza kwenye ushauri wa jumla. Utelezi huo ni malalamiko ya kawaida zaidi kuhusu wakufunzi wa tayari, na mara nyingi ni tatizo la upatikanaji kuliko tatizo la uzito wa modeli.

## Andika ilani dhidi ya rubriki yako, na uangalie kiwango tambarare

Kazi ya ilani si utangulizi unaofanywa wakati unasubiri GPU. Matokeo mawili yanaonyesha inafikia nini peke yake:

- **Uundaji wa ilani unaoongozwa na rubriki, ulioboreshwa kwa kurudia kwa pamoja, uliinua makubaliano ya LLM na binadamu kuhusu kazi za ubunifu za wanafunzi kutoka 54.75% hadi 81.25%** (Cronbach's Alpha 0.393 hadi 0.798), bila urekebishaji mahususi wowote ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Ilani maalum iliyojengwa juu ya maandiko ilizalisha [[misconceptions|dhana potofu]] za hisabati zilizolengwa kwa uwepo wa **0.98**, dhidi ya **0.40** kwa ilani pana ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Ishara ya kivitendo ni **kiwango tambarare**. Katika utafiti wa kuzalisha vipengele, uboreshaji wa ilani kwa kurudia ulikoma kuboresha, na urekebishaji mahususi wa GPT-4.1 *juu ya ilani iliyoboreshwa* kisha ukaongeza faida iliyobaki ([[gpt-item-generation-l2-listening-2026]]). Kiwango tambarare baada ya kazi halisi ya ilani ni ushahidi kwamba mafunzo yana nafasi ya kuongeza kitu. Kufikia mafunzo kabla ya kufikia kiwango hicho ni kubahatisha, na kubahatisha hugharimu mwezi.

Angalia kile matokeo ya kuzalisha vipengele yanavyosema kuhusu mfuatano. Urekebishaji mahususi ulijengwa juu ya ilani iliyoboreshwa, hivyo kazi ya ilani haikupotea pale timu ilipoamua kufanya mafunzo hatimaye. Ngazi ya bei nafuu pia ni vipimo vya ngazi ya gharama kubwa.

## Rekebisha uzito pale lengo lilipo imara na finyu

Urekebishaji hulipa pale unahitaji modeli kubeba sifa kwa kuaminika: kiwango cha usomaji, muundo wa matokeo, taaluma ambayo haina. Matokeo yanayojirudia ni kwamba **kulenga kunashinda ukubwa**.

- Modeli tatu za **8B** zilizorekebishwa mahususi kwenye mtaala wa usomaji wa watoto ulioundwa na mtaalamu zilishinda GPT-4o ya zero-shot na Llama 3.3 70B katika vipimo vinavyohusiana na ugumu, na masuala ya usalama yasiyo na maana. Waandishi wanafasiri hili kama **udhibiti juu ya ukubwa** ([[llm-children-reading-story-generation]]).
- Seti ya data ya maelekezo yenye **mifano 24,795** iliyojengwa juu ya Mifumo ya Maarifa ya India ilizalisha urekebishaji mahususi wa **7B** uliopata **6.39** kwenye jopo la nje la mahakimu watano, ndani ya **0.15** ya modeli rejea ya jumla yenye nguvu kwa sehemu ndogo ya gharama ya usambazaji. Modeli hiyo hiyo ya msingi ilipata **takriban sifuri katika vipimo maalum vya taaluma** bila urekebishaji huo ([[iks-instruct-dataset-indian-knowledge]]). Pengo hilo kati ya kuwa na uwezo kwa ujumla na kuwa na uwezo hapa ndilo hoja yote ya urekebishaji wa taaluma.
- Adapta moja ya [[llm-training-and-fine-tuning|LoRA]] iliyofunzwa kwa takriban **mifano 3,900** ya pamoja yenye alama ilileta modeli tano ndogo zilizo wazi (4B hadi 30B) kwenye usawa au bora zaidi kuliko mpimaji wa binadamu katika mitihani miwili ya sayansi ya kompyuta ([[llm-graders-computer-science-exams-2026]]). Adapta moja, seti moja ya data, modeli kadhaa za msingi: huo ndio umbo la usambazaji ambalo timu ndogo inaweza kuendesha.

Neno *imara* katika kichwa hubeba uzito. Muundo, rubriki, kiwango cha usomaji na msamiati wa taaluma ni malengo imara. Maandishi yaliyojaa hukumu hayana lengo kama hilo, na hapo ndipo urekebishaji unashindwa, kama sehemu mbili zinazofuata zinavyoonyesha.

## Badilisha tabia pale majibu yalipo tatizo

Urekebishaji hufundisha modeli *nini cha kuzalisha*. Mafunzo ya baadae hufundisha *jinsi ya kuishi*. Kwa ufundishaji wa mtu mmoja mmoja tofauti hiyo ndilo tatizo zima: modeli za jumla hupata mafunzo ya baadae juu ya upendeleo wa binadamu kwa kusaidia, ambayo maana yake ni kujibu haraka, na ufundishaji unahitaji kuzuia jibu.

Matokeo yenye nguvu zaidi ya kielimu katika hifadhi hii ya maarifa yapo hapa. Modeli ya zawadi ya EduQwen ilitanguliza kwa uwazi **majibu ya kuongoza mbele ya majibu ya moja kwa moja**, na mfumo wake wa hatua tatu ulifika **96.52%** kwenye benchmark ya CDPK dhidi ya **90.55%** ya Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Kiigaji cha uandishi cha SWIM kilihamia kutoka uundaji wa ilani unaotegemea rubriki (QWK bora **0.577**) hadi urekebishaji mahususi wa usimamizi (**0.474 ± 0.023**) hadi kujifunza kwa nguvu (**0.618 ± 0.005**) katika kila sifa na kila ilani ([[swim-student-writing-simulation-2026]]).

Soma namba za SWIM kwa uangalifu, kwa sababu hatua ya kati ilirudi nyuma. Urekebishaji mahususi wa usimamizi juu ya maonyesho ulifanya kiigaji kiwe kibaya zaidi kuliko ilani iliyoanzia, na ishara ya zawadi peke yake ndiyo iliyorejesha hasara na kisha kushinda msingi. Ikiwa mpango wako unaishia kwenye urekebishaji mahususi wa usimamizi, mpango unaweza kuwa mchepuko.

## Simamia katika ngazi ya hatua

Ugunduzi mmoja hapa ni rahisi kuukosa na ghali kuupuuzia: **ubora wa usimamizi unashinda wingi wa usimamizi**. Modeli zilizofunzwa kwa maelekezo zilijifunza dhana potofu za aljebra pale tu zilipofunzwa kwa **rekodi za hatua za suluhisho**. Zikifunzwa kwa majibu ya mwisho peke yake, usahihi ulibaki **chini ya 30% katika kila ukubwa wa data** ([[misconception-acquisition-dynamics-llms-2026]]).

Ikiwa mifano yako ya mafunzo ni jozi za swali na jibu sahihi, unafundisha kitu kisichofaa, na kuongeza mifano hakutarekebisha hilo. Unachohitaji ni kazi ya kati: zamu isiyofaa, hatua ambapo mwanafunzi alipotoka, marekebisho. Kukusanya hilo ni tatizo la uhandisi wa data lenye sharti la kielimu, na kwa kawaida inamaanisha kurekodi vipindi badala ya kunakili funguo za majibu.

## Mahali urekebishaji unashindwa kwa utulivu

Hii ni sehemu ambayo shauku huiruka.

**Maandishi yaliyojaa hukumu.** Katika WrAFT, mradi ule ule uliorekebisha mahususi kwa mafanikio kwa ajili ya *kupa alama* insha (QWK 0.84) ulizalisha matokeo yaliyokatwa na yasiyochanganulika uliporekebisha mahususi kwa ajili ya *maoni*, wakati kutoa ilani moja kwa moja kwa Claude 3.7 kulizalisha maoni ambayo walimu waliyapa alama bora zaidi ([[wraft-automated-writing-evaluation-argumentative-2026]]). Urekebishaji mahususi ulifundisha modeli kufikia alama, na alama ndiyo kitu pekee ilichojifunza.

**Uhamishaji kati ya modeli.** Ukubwa si kitabiri cha kuaminika cha utendaji unaofuata chini ya urekebishaji wa LoRA, na **vigezo vya mipangilio vinavyofanana vilizalisha tabia tofauti kimaumbile katika usanifu tofauti** ([[aiawe-automated-writing-evaluation]]). Mapishi yaliyofanya kazi kwenye modeli moja si mapishi.

**Usanifu juu ya idadi ya vigezo.** Urekebishaji mahususi wa modeli tatu za wazi za maandishi-hadi-picha kwenye picha 1,000 za uhandisi wa nyuklia zenye maelezo uliboresha kwa kiasi kikubwa Stable Diffusion XL, ukaleta faida ndogo kwa SD-v3.5-Medium, na **haukuleta maboresho yanayopimika kabisa kwa Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Tatizo lilikuwa uthibitishaji.** GPT-4 ya mbele isiyofunzwa ilizalisha takriban **35%** ya vidokezo vilivyo pana mno, visivyo sahihi au vinavyofichua jibu wakati wa kuandika maoni ya ufundishaji, na ukaguzi wake wa ubora wa kiotomatiki haukukubaliana na hukumu ya binadamu ([[reddig-maclellan-personalized-feedback-llm-2026]]). Hilo ni tatizo la kuchuja, na LoRA haitalitatua.

Mtindo katika yote manne: urekebishaji huhamisha modeli kwa kuaminika kuelekea lengo unaloweza kulieleza na kulipa alama. Hauongezi hukumu, na mfumo usio na ukaguzi bado utawasilisha matokeo mabaya.

## Panga bajeti ya urekebishaji kwa uaminifu

Kwa ngazi ya urekebishaji kizingiti ni cha chini kuliko timu nyingi zinavyodhani: **mifano mia kadhaa hadi elfu kadhaa na GPU moja**. LoRA hufunza idadi ndogo ya vigezo vilivyoongezwa na huacha uzito msingi umeganda, hivyo modeli kadhaa zinaweza kuhudumiwa kutoka kwa adapta moja.

Rank ni maamuzi ya kubadilishana badala ya kipimo cha kukuzia. Faida kwa milioni ya vigezo vya adapta ilishuka kwa mfululizo pale rank ilipopanda, na upatanisho wa ngazi ya kozi ulikuwa uamuzi wa ukubwa-na-rank badala ya uboreshaji wa bure ([[lora-finetuned-control-systems-course-qa-2026]]).

Tabaka unazorekebisha pia ni uchaguzi halisi. Kusasisha **tabaka nne za mwisho za Transformer peke yake** za kichanganuzi cha mazungumzo cha msingi wa BERT kulishinda kurekebisha tabaka la juu peke yake na urekebishaji mahususi wa kina kikamilifu ([[bert-discourse-english-teaching-2026]]). Mipangilio mitatu, matokeo matatu tofauti, na ile ya bei nafuu zaidi ilishinda.

Gharama ambayo ni rahisi kuipuuza ni tathmini, ambayo ni kubwa kuliko bili ya nguvu za kompyuta. Ona [[checking-whether-educational-ai-works|Tunajuaje Kuwa AI ya Kielimu Inafanya Kazi kwa Usahihi, Si Kupata Alama Nzuri Tu?]]

## Rekebisha kile unachotarajia

Uchaguzi wa modeli na wa ilani kwa pamoja huchangia karibu **15%** tu ya kutokulingana kati ya LLM na faida za kujifunza za wanafunzi, na katika utafiti huo upangaji wa uzito wa benchmark na majopo ya kupiga kura kwa kauli moja ulifanya upatanisho kuwa *mbaya zaidi* ([[educational-llm-alignment]]). Data ya mafunzo ya awali ndio kianzio kikuu cha jinsi modeli inavyofanya kazi, na ndicho kianzio kimoja ambacho hauwezi kukivuta.

Hakuna kati ya hayo kunapinga kazi iliyo juu. Kunapinga kutarajia urekebishaji mahususi kutatua tatizo la kubuni. Ikiwa suala ni kwamba mwalimu wako wa AI anajibu kwa urahisi mno, mafunzo yanaweza kushughulikia hilo. Ikiwa suala ni kwamba wanafunzi wako hawajishughulishi nayo, mafunzo hayatashughulikia, na takwimu ya 15% inasema pesa zina matumizi bora mahali pengine.

## Timu zinakosea nini

Urekebishaji mahususi ndiyo njia ya kufundisha modeli kozi yako. Upatikanaji juu ya nyenzo zako mwenyewe uliinua mfumo ule ule kutoka 52.3% hadi 66.6% bila mafunzo yoyote, na ilani iliyoboreshwa dhidi ya rubriki ilihamisha makubaliano kutoka 54.75% hadi 81.25%. Mafunzo hufundisha tabia na muundo kwa kuaminika zaidi kuliko yanavyofundisha maudhui.

Modeli kubwa zaidi ya msingi huondoa hitaji la haya yote. Modeli ya 8B iliyorekebishwa mahususi kwenye mtaala wa usomaji wa watoto ilishinda GPT-4o ya zero-shot na Llama 3.3 70B katika vipimo vya ugumu, na urekebishaji mahususi wa 7B ulifikia ndani ya 0.15 ya modeli rejea ya jumla yenye nguvu kwa sehemu ndogo ya gharama ya usambazaji. Ukubwa na upatanisho ni mihimili tofauti, na mmoja tu kati yao unauzwa kwa tokeni.

Data zaidi itarekebisha seti ya mafunzo iliyojengwa vibaya. Usimamizi wa majibu peke yake uliacha usahihi chini ya 30% katika kila ukubwa wa data katika utafiti wa dhana potofu. Ukubwa haurekebishi lengo ambalo linakosa taarifa ambayo modeli inaihitaji.

Mapishi yaliyofanya kazi kwenye modeli moja yatafanya kazi kwenye inayofuata. Vigezo vya mipangilio vinavyofanana vilizalisha tabia tofauti kwa kiwango cha ubora katika usanifu tofauti, na mbinu ile ile ya urekebishaji mahususi iliboresha modeli moja ya picha kwa kiasi kikubwa na haikufanya kitu kinachopimika kwa nyingine. Endesha mapishi upya kwenye modeli yako ya msingi au unubahatisha.

Urekebishaji mahususi wa usimamizi ndio hatua salama ya kati kabla ya kujifunza kwa nguvu. Katika SWIM hatua ya usimamizi ilipata 0.474 dhidi ya 0.577 kutoka ilani iliyoibadilisha, na ishara ya zawadi peke yake ndiyo iliyoirejesha. Hatua ya kati inaweza kukugharimu mwezi na kurudi nyuma.

## Yatakayokujia

**"Bajeti imeidhinishwa kwa urekebishaji mahususi, kwa hiyo tufanye urekebishaji mahususi."** Tumia wiki moja kwenye msingi na faharasa kwanza. Ikiwa upatikanaji unahamisha namba, urekebishaji mahususi ni uamuzi wa baadaye unaofanywa kwa taarifa bora, na utakuwa na hoja yenye nguvu zaidi kwa ajili yake au sababu nzuri ya kurudisha GPU.

**"Tatizo letu ni kwamba wanafunzi hawaitumii."** Mafunzo hubadilisha kile modeli inachozalisha. Takwimu ya 15% inaeleza kiasi ambacho uchaguzi wa modeli na ilani huchangia katika kutokulingana na faida za kujifunza, na ushiriki uko nje yake. Pima mahali wanafunzi wanakoma kabla ya kununua nguvu za kompyuta.

**"Hatuwezi kutuma kazi za wanafunzi kwa API ya muuzaji."** Matokeo yenye nguvu zaidi ya LoRA hapa yalitoka kwa modeli wazi katika masafa ya 4B hadi 30B, na adapta moja ilihudumia kadhaa kati yao. Umbo hilo la usambazaji linapatikana kwa timu iliyo na GPU moja na bila makubaliano ya usindikaji wa data.

**"Kutoa ilani ni hila; kazi halisi maana yake ni mafunzo."** Mapitio ya tafiti 23 za mafunzo ya uandishi yaligundua kutoa ilani ndiyo mbinu inayoongoza na urekebishaji mahususi ukifuata nyuma yake, na faida kubwa zaidi iliyoripotiwa kwenye ukurasa huu ilitoka kwenye faharasa. Mapitio hayo na utafiti wa msaidizi wa kozi zote zilipanga ngazi hizo kwa faida iliyopimwa.

**"Tulijaribu kutoa ilani na ikafikia kiwango tambarare, hivyo tunahitaji mafunzo."** Hilo ni usomaji sahihi, na ndiyo kesi moja ambapo kupanda kunahalalishwa. Chukua ilani iliyoboreshwa kwenye urekebishaji mahususi kama timu ya kuzalisha vipengele ilivyofanya, na tarajia faida iwe ndogo kuliko kazi ya ilani ilivyokuwa.

**"Nyenzo zetu za kozi hazilingani, hivyo upatikanaji utarejesha takataka."** Utarejesha, na upatikanaji hurithi ubora wa korpus. Kusafisha korpus ni bei nafuu kuliko kufunza modeli kuizunguka, na faida kutoka 52.3% hadi 66.6% ilipimwa juu ya nyenzo za kawaida za kozi badala ya seti iliyochujwa.

## Fanya hivi wiki hii

**1.** Endesha msingi wa ilani peke yake na msingi wa maneno muhimu kwenye maswali 50 halisi kutoka kozi yako, na uandike namba zote mbili chini.

**2.** Elekeza upatikanaji kwenye nyenzo unazo tayari na uendeshe maswali yale yale 50 upya, ili faida ipimwe dhidi ya msingi wako mwenyewe.

**3.** Weka rubriki kwenye ilani ya mfumo na urudie kwa wiki moja. Acha pale mizunguko miwili haiongezi kitu.

**4.** Kagua seti yako ya mafunzo kwa rekodi za ngazi ya hatua. Ikiwa ni jozi za swali na jibu, seti ya data haiko tayari.

**5.** Andika sifa moja unayohitaji ibaki kwa kuaminika, na amua kama ni tabia au maudhui. Uamuzi huo huchagua ngazi.

## Wapi kwenda baadaye

[[training-ai-tutors-to-guide-rather-than-answer|Tunawezaje Kufunza Kocha wa AI Aongoze Wanafunzi Badala ya Kuwajibu?]] inashughulikia nusu ya mafunzo ya baadae kwa kina. [[checking-whether-educational-ai-works|Tunajuaje Kuwa AI ya Kielimu Inafanya Kazi kwa Usahihi?]] inashughulikia jinsi ya kujua kama chochote kati ya hayo kilifanya kazi. [[developing-ai-tutor|Mbinu Bora za Kukuza Mwalimu wa AI Mwenye Ufanisi ni Zipi?]] ni upande wa kubuni mwingiliano wa lengo lile lile, na [[designing-educational-ai-software|Ni Mbinu Bora na Vidokezo Gani vya Kubuni Programu Bora ya AI katika Elimu?]] inashughulikia mfumo unaozunguka. Ukurasa kamili wa dhana ni [[llm-training-and-fine-tuning]].
