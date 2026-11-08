---
title: Takwimu za Kujifunza
created: "2026-10-13T05:20:00-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
translation_of: concepts/learning-analytics
source_updated: "2026-11-08T09:30:45-05:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

> **Takwimu za Kujifunza** — kupima, kukusanya, kuchanganua, na kuripoti data kuhusu wanafunzi na miktadha yao kwa lengo la kuelewa na kuboresha kujifunza. AI imebadilisha takwimu za kujifunza kutoka dashibodi za kuelezea hadi mifumo ya kutabiri na ya kuagiza.

## Maswali ya Kutafakari

- Wengi huchukulia kuwa kukusanya data zaidi za kujifunza huboresha elimu kiotomatiki. Ukurasa unadai takwimu za kujifunza zinapata maana tu zinapotoa taarifa zinazorudiwa katika muingiliaji — vinginevyo zinatazama au kuripoti tu bila kubadilisha kujifunza. Umewahi kuona data zilizokusanywa ambazo hazikusababisha kitendo chochote?
- Wazia dashibodi inakuambia mwanafunzi yuko 'katika hatari' — utabiri. Nini kinatofautisha hilo na mwongozo halisi wa kitendo ambayo mwalimu au taasisi inaweza kutekeleza? Ukurasa unapendekeza kuwa utabiri peke yake hautoshi.
- Ukurasa unabainisha kuwa AI imesogeza takwimu za kujifunza kutoka kuelezea kile kilichotokea hadi kutabiri kile kitatokea na kuagiza kile cha kufanya kijacho. Ni vizazi gani kati ya hivi vitatu umevipitia, na kilikuwa kinakosekana katika vingine?
- Katika utafiti mmoja, mifano mitatu tofauti ya AI ilizalisha mipango ya msaada iliyotofautiana kwa kiasi kikubwa kwa data zile zile za mwanafunzi, na viungo kati ya viashiria vya takwimu za kujifunza na msaada uliopendekezwa vilikuwa dhaifu kwa kiasi kikubwa. Hii inapendekeza nini kuhusu kuiamini ushauri wa AI kama unavyotolewa?
- Takwimu za kujifunza zinaelekea mkazo wa faragha: data kadiri zinavyokuwa za kina, zinakuwa za kufichua zaidi — na muingiliaji wenye nguvu zaidi. Ungeweka mstari wapi kuhusu kilichokusanywa kukuhusu wewe au wanafunzi wako, na nani anapaswa kuamua?

## Utangulizi

### Takwimu za kujifunza zilizoboreshwa na AI

- **Takwimu za kutabiri:** [[machine-learning|Kujifunza kwa mashine]] juu ya data ya mwingiliano wa mwanafunzi kinatabiri matokeo — kutoka [[at-risk-students-ml-prediction|utambuzi wa hatari]] hadi [[knowledge-tracing|kukadiria hali ya maarifa]].
- **Uhakiki ni muhimu kama utabiri.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, na Carvalho (2025)]] wanaonyesha kuwa mifano ya kukadiria hali ya maarifa ya kutabiri (BKT, BKT-with-Forgetting, AFM) inaonekana sahihi inapofungwa kurudi kwenye historia kamili ya kipindi, lakini chini ya **uhakiki wa msalaba unaotegemea wakati** — kutabiri kipindi kijacho kutoka zilizotangulia, jinsi takwimu za kujifunza zinavyotekelezwa kweli — inazidi kukadiria utendaji wa mwanafunzi, inapuuza mienendo ya nafasi/kusahuli, na inaweza kupanga vibaya masharti ya mazoezi. Onyo kwa takwimu za kujifunza: ufungaji wa kurudi unaweza kuficha uhalali mbaya wa kutabiri mbele kwenye data ya muda mrefu, hivyo viashiria na mifano ya dashibodi yanapaswa kuhakikiwa kwa mtindo wa kutembea-mbele (walk-forward).

- **Thibitisha ramani ya kipengele-sifa nyuma ya kadirio.** Q-matrix inayounganisha vipengele na sifa ni dhana, si data: maingizo yaliyokataliwa kwa vipengele 14 kati ya 918 vya mawazo ya kuchanganua, yaliporekebishwa, yalipunguza mchoro wa uwongo wa hali ya maarifa kutoka 14.2% hadi 3.8% — hivyo takwimu za kujifunza za umahiri zinapaswa kukagua Q-matrix zao, si ufungaji wao wa kutabiri tu ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **Takwimu za kutabiri zinazozungukwa na [[curriculum-design|mtaala]]:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] wanakadiria hali za maarifa ndani ya Elimu Inayotegemea Matokeo kwa kufuatilia matokeo ya kozi moja kwa moja kutoka data ya mwingiliano na mafanikio ya LMS, wakitumia ramani za uhusiano wa OBE (mahusiano ya matokeo ya kozi–mpango) kupanga viungo vya dhana na mtandao ulioimarishwa na kumbukumbu kuiga athari ya mvuke ya matokeo — kufikia AUC ya 89.81% na kushinda DKT, DKVMN, EKT, na SimpleKT kwenye data hai ya uhandisi wa chuo kikuu, huku yakibaki na ushindani tu (si bora) kwenye data ya ASSISTments ya matumizi ya jumla.
- **Utabiri wa maendeleo unaoweza kueleweka na dirisha la kitendo:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] wanatabiri maendeleo ya mwanafunzi katika ngazi ya moduli katika kozi kubwa za mtandaoni za [[cs-education|upangaji]] kutoka vipimo vya kumbukumbu za mwingiliano wa maudhui, wakitumia miti ya uamuzi ya kioo (glass-box) inayolingana na usahihi wa kisanduku-jeusi (85–91%) huku ikiripoti matokeo ya kuacha "Hakuna uwasilishaji" hadi siku 7–8 kabla ya tarehe za mwisho za moduli — dirisha la wazi, la wakati halisi kwa [[teacher-role|muingiliaji]] badala ya bendera tupu ya hatari, na taksonomia ya uchunguzi ya wasifu wa kujitoa-hatari, kujitoa-lakini-mafanikio, na wasifu wenye mahusiano ya utendaji wa juu.
- **Uundaji wa mfano wa hatari wa shirika la pamoja, unaoweza kueleweka (2026).** [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] wanapanua uundaji wa mfano wa hatari zaidi ya utabiri wa taasisi moja kwa kufundisha mfano wa kazi nyingi (utendaji + kuacha) katika taasisi zilizoigwa kupitia kujifunza kwa shirika la pamoja, hivyo data ghafi ya mwanafunzi haitoki taasisi yoyote. Chini ya utofauti unaodhibiriwa (upotovu wa lebo, ukosefu wa usawa wa darasa, mwelekeo wa wakati, upungufu wa muundo) mfano unahifadhi usahihi wa kupanga (OULAD AUC 0.918) na kupanga thabiti kwa umuhimu wa vipimo, lakini urekebishaji wa uwezekano unapotoka — kukata uhusiano kati ya utendaji wa kupanga na uaminifu wa uwezekano. Kwa mifumo ya onyo la mapema, huu ni onyo kwamba miingiliajo inayotegemea kizingiti inaweza kuhitaji urekebishaji kwa kila taasisi, na hoja kwa kutathmini takwimu za kujifunza kwa upambanuzi, urekebishaji, uthabiti, na uwezo wa kueleweka kwa pamoja.

- **Uthibitishaji wa data bandia ni sharti la takwimu za kujifunza zinazohifadhi faragha.** Ukaguzi wa muundo kwenye matoleo bandia ya makundi manne ya mwaka wa tabia za kujifunza (wanafunzi 117–120 kwa wiki kumi na nane) uligundua vielelezi vya mgawanyo vikikubaliana karibu katika makundi mawili kati ya manne, wakati tofauti ya juma hadi juma ilikuwa mara 2.6 hadi 4.9 ndogo bila ubaguzi (kigezo cha tofauti 0.086–0.152 dhidi ya 0.399–0.539 kwa makundi halisi), na matokeo 36% tu yaliyofikiwa kwenye data bandia ya majaribio yalithibitishwa kwenye data halisi katika maombi 25 ya uthibitishaji ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).
- **Takwimu za kujifunza za mahusiano:** [[student-engagement|Kupima mahusiano]] na [[engagement-intensity-learner-modeling|uundaji wa mfano wa nguvu]] hupima jinsi wanafunzi wanavyoshirikiana na mifumo ya AI.
- **Takwimu za kujifunza za maoni:** [[teaching-feedback-classification-benchmark|Ugawaji wa maoni]] na [[ai-feedback-quality|tathmini ya ubora]] huchanganua maoni wanayopokea wanafunzi.
- **Uchanganuzi wa mtandao:** [[misiejuk-cognitive-offloading-prompting-2026|Uchanganuzi wa Mtandao wa Kutokea Pamoja]] na [[epistemic-emotions-collaborative-problem-solving|uchanganuzi wa mtandao wa maarifa]] hufichua mifumo ya mwingiliano.
- **Mikazo ya faragha:** wasiwasi wa [[privacy]] unaongezeka takwimu za kujifunza zinapokuwa za kina zaidi na zinazoendeshwa na AI.
- **Mfumo wa mapitio ya utawala kwa data ya mwanafunzi.** LEAGUE inapendekeza nguzo sita — Uhalali, [[equity-in-ai-education|Usawa]], Wakala, Utawala, Umuhimu, na Maadili kwa Muundo — ikitendea kufuata FERPA na GDPR kama sakafu na ikipendekeza tathmini upya iliyopangwa mifumo inapopotoka ([[league-ethical-governance-student-data-2026|Varadaraju & Vijayakumar (2026)]]).

Takwimu za kihisi na za mtazamo ni familia ya pili ya vyombo inayolisha mifano ile ile ya mwanafunzi, ikitegemea ufuatiliaji wa jicho, EEG, shughuli ya kielektroniki ya ngozi na kiwango cha moyo kukadiria umakini, ushiriki na mzigo wa kiakili ([[sensor-and-gaze-analytics]]). Matatizo yake ya uhalali na idhini ni makali zaidi kuliko yale ya data ya alama, kwa sababu vipimo ni vya kibayometriki na hatua kutoka mwili hadi hali ya kiakili ni tafsiri.


**Weka pamoja utangamano wa kozi, si mlolongo tu.** TRACE inatoa kila kozi katika semesti msimbo sawa wa nafasi, na kutabiri kozi na alama pamoja kulipunguza hitilafu ya kutabiri alama hadi 0.1339 MAE — punguzo la 46.4% juu ya transformer ya alama tu — kwenye data ya miaka kumi ya kitaaluma ([[trace-course-grade-prediction-2026|Savala (2026)]]).

- **Idhini haitabiri muundo wa ushiriki.** Data ya athari kutoka zana ya takwimu inayomwelekea mwanafunzi katika kozi ya upangaji inayosaidiwa na GAI iligawanya wanafunzi 27 katika Wapelelezi wa Kina, Wanaojielekeza na Wanaoelekea Wenzao pamoja na wasifu wa hatua ya mwisho wa Wapelelezi Waliowekewa Mipaka, lakini mitazamo mizuri kuhusu msaidizi haikutofautiana kwa kiasi kikubwa kati ya wasifu hao ([[sun-gai-learning-analytics-behaviors-2026|Sun et al. (2026)]]).
- **Viwango vya ukamilishaji vinaweza kuficha anguko la ushiriki.** Katika jaribio la [[higher-ed|chuo kikuu]] lililogawanywa kwa vikundi kwa bahati nasibu, [[intelligent-tutoring|mwalimu wa AI]] aliyejumuishwa katika kozi aliacha uwasilishaji wa kazi za nyumbani bila mabadiliko huku ushiriki wa jukwaa ukishuka kwa kasi, mitazamo ya kurasa kwa 0.37 mkengeuko wa kawaida, siku amilifu kwa 0.51, hivyo ishara ya takwimu iliyokuwa na maana ilikuwa shughuli ambayo zana ilibadilisha nafasi yake, si kipimo cha ukamilishaji kilichobaki tuli ([[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]]).

**Data ya mwingiliano ni tatizo la uwakilishi kabla ya kuwa la uundaji wa mfano.** [[taufer-human-ai-interaction-haidl-2026|Taufer et al. (2026)]] wanachukulia kila mabadilishano kati ya binadamu na AI kama rekodi moja iliyoundwa inayobeba hesabu iliyochochea ombi, ombi lenyewe, jibu, maoni ya mtumiaji na utekelezaji uliofuata, badala ya kama ombi lililotengwa. Katika jozi 140 za kazi za wanafunzi katika usambazaji wa wanafunzi 35, idadi ya mwingiliano peke yake ilihusiana na seli zilizotekelezwa kwa mafanikio kwa r = 0.12, na wito ule ule unaweza kuwa urejeshaji wa hitilafu, hatua inayofuata, ukaguzi wa dhana au uthibitishaji kulingana na hali inayozunguka. Jozi thelathini na saba zilizokuwa na ufikiaji hazikuzalisha mwingiliano wowote, hivyo kutokuwepo kwa matumizi ya AI katika kumbukumbu hakuwezi kusomwa kama kutokuwepo kwa hitaji.

### Mzunguko wa takwimu za kujifunza

Takwimu za kujifunza kwa kawaida zinaelezewa kama mzunguko unaoanza na shughuli ya mwanafunzi inayozalisha data, ambayo inachakatwa kuwa vipimo na viashiria vinavyotafsiriwa kuwa **miingiliajo** — na muingiliajo hurudisha shughuli ya mwanafunzi ili kufunga mzunguko. Hatua ya muingiliajo ndiyo inayotofautisha takwimu za kujifunza na ufuatiliaji au utabiri tu: bila yake, takwimu za kujifunza zinaelezea na kuripoti lakini hazibadili kujifunza kamwe. Mzunguko huu ni fremu ya kupanga kwa kuelewa mahali zana za AI (dashibodi, vizalishaji vya maoni, wapendekezaji wa maagizo) zinakaa kwenye mstari wa mchakato na hatua gani wanazoendesha.

Dashibodi inayoelekezwa kwa mwanafunzi ni nzuri kama ufikikaji wake tu: katika utafiti wa uandishi wa Daraja la 9 huko Hong Kong, kigawanyaji cha ilani kilifika macro F1 ya 0.757, kama theluthi ya wanafunzi 46 ilifungua dashibodi tatu za matumizi ya GenAI na tofauti za kikundi katika kunakili na [[prompt-engineering|kuuliza kwa mwelekeo wa kujifunza]] hazikuwa na uaminifu ([[learning-analytics-genai-secondary-writing-2026|Fong et al. (2026)]]).

Usimbaji wa marudio wa data ya kina ([[qualitative-research|utafiti wa kina]]) ni mlango wa kuingia, si hukumu: katika utafiti wa washiriki kumi, waelimishaji wengine walisoma usimbaji wa marudio kama njia yenye tija ya kuingia huku wengine wakionya kuwa huficha majibu nadra lakini muhimu, hivyo ubunifu unahifadhi kila mwonekano wa jumla umeunganishwa kurudi kwenye maandishi ya mwanafunzi kama yalivyo ([[wordstream-glass-learning-analytics|Nguyen et al. (2026)]]).

### Kutoka kuelezea hadi muingiliajo
- **Msingi wa ushahidi bado si ushahidi wa muingiliaji.** [[learning-analytics-genai-learning-design|Rienties, Divjak na Law (2026)]] wanachanganua tafiti nne katika ngazi za mwanafunzi, taaluma, mwalimu na taasisi na kugundua kuwa uwanja umetawaliwa na miundo ya vipimo vya msalaba, [[self-report-measures|taarifa za kibinafsi]], uchanganuzi wa mazungumzo na hukumu za wataalamu, na wanatoa wito wa utafiti wa muingiliaji unaojaribu mifumo ya sababu na matokeo ya muda mrefu, ya usambazaji.

**Ubuni wa kuhimiza kwa nasibu hutoa nanga ya sababu.** Katika jaribio la kuhimiza kwa nasibu kwenye ASSISTments, [[lim-assignment-report-intelligent-tutoring-randomized-encouragement-2025|Lim, Heffernan na Sales (2025)]] waliwahimiza kwa nasibu walimu wapya kwenye jukwaa kutazama ripoti ya kazi baada ya kuunda kazi. Miongoni mwa sampuli ya uchanganuzi ya walimu 330 (156 udhibiti, 174 himizo; 281 kwa thamani iliyoongezwa), kutazama ripoti ya kazi ya kwanza kulipandisha kwa kiasi kikubwa ukamilishaji wa kazi iliyofuata (Anderson-Rubin F = 4.092, p = 0.044) - angalau pointi 2 za asilimia kwa jumla. Katika madarasa yenye wanafunzi chini ya 44 faida ilikuwa angalau pointi 24.5 za asilimia (AR F = 7.475, p = 0.007), wakati 54.0% pekee ya kazi 121,890 zilikuwa na ripoti zake zikitazamwa na matokeo ya kuanza na thamani iliyoongezwa hayakusogea. Data ile ile ya jukwaa inabeba kesi kubwa zaidi ya ukadiriaji wa mzunguko uliofungwa: [[johnson-student-ratings-automatically-generated-questions-2025|Johnson na wenzake (2025)]] walichanganua vikao 5,214,211 vya mwanafunzi-swali ambapo vidole-vya-chini (2.00 kwa 1,000) vilifuata sifa zinazodhibitiwa na kizalishaji na tofauti ya kiwango cha mwanafunzi ilitawala tofauti ya kiwango cha swali (BIC 101,572.9 dhidi ya 123,342.0).


Takwimu za kujifunza zimebadilika kupitia vizazi vitatu katika hifadhi ya maarifa: kuelezea (nini kilitokea?), kutabiri (nini kitatokea?), na kuagiza (tupaswe kufanya nini?). AI inawezesha safu ya kuagiza — takwimu za kujifunza zinazochochea moja kwa moja [[feedback|miingiliajo ya ufundishaji]]. Mpaka muhimu ni **pengo la uwezo wa kitendo**: [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel & Laforge 2026)]] inaonyesha kuwa utabiri peke yake haitoshi kwa usaidizi wa uamuzi, na kuwa njia ya kupata matokeo ya kinyume (counterfactual recourse) inakuwa na maana ya kiendeshwa tu wakati mapendekezo yanaweza kufuatwa kimantiki na kukaguliwa na mashine — yakiwa na vikwazo vya wakati, bajeti, kutobadilika, na upatikanaji kupitia uhakiki wa SHACL, badala ya kuwa halali kwa mfano tu. Hii inasogeza uwanja zaidi ya alama za hatari kuelekea mapendekezo ambayo taasisi zinaweza kutekeleza kweli, huku [[human-in-the-loop-ai|usimamizi wa binadamu]] ukihifadhiwa.

Jaribio la moja kwa moja la safu ya kuagiza linatokana na [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]], ambao waliuliza LLM tatu kupendekeza mipango ya msaada kwa mifano 4,500 ya [[simulating-students|wanafunzi bandia]].

Jaribio la kukamiliana, linaloelekea mwalimu, la jinsi takwimu za kujifunza zinavyofika darasa linatokana na [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]], ambao walibuni dashibodi ya takwimu za kujifunza (DashED) kuwasilisha wasifu wa [[self-regulated-learning]] yaliyotokana na ML kwa walimu katika miktadha miwili ya mchanganyiko. Utafiti wao wa walimu 100 unaonyesha kuwa *uwasilishaji* wa takwimu za kujifunza yenyewe ni kizuizi cha kitendo: walimu kwa uthabiti walipendelea michoro rahisi zaidi, ya kitamaduni (michoro ya pau, michoro ya duara) hata wakati miundo magumu zaidi (mfano, ramani za joto) ilitoa maarifa yenye utajiri zaidi, na ujuzi wa [[visualization|uchanganuzi wa maono]] wa juu ulitabiri tafsiri ya kina, ya kina zaidi (mfano, walimu wengi zaidi kutambua mienendo katika data ya mfululizo wa wakati). Kwa kulinganisha vikundi, walimu walipendelea uwekaji juu kando ya kuweka kandokando na michoro ya taarifa kamili kando ya usimbaji wazi wa tofauti. Hatua walizopendekeza walimu ziliundwa na maudhui yaliyoonyeshwa na kiwango chao cha [[teacher-role]] badala ya aina ya mchoro — walimu wa chuo kikuu walipendelea majaribio ya kila wiki na mabadiliko ya ngazi ya kozi, huku walimu wa kitaaluma wakipendekeza mafunzo ya moja kwa moja, ya kibinafsi — hivyo hatua ya kuagiza inategemea jinsi takwimu za kujifunza zinavyoonyeshwa kiasi kama mfano wa msingi. Matokeo yao ni ya onyo: mahusiano kati ya viashiria vya LA na msaada uliopendekezwa yalikuwa dhaifu kwa kiasi kikubwa, mapendekezo ya mifumo mingi yalitofautiana kwa kiasi kikubwa kwa mwanafunzi mmoja, na msaada mara nyingi uligawanywa bila kujali alihitaji zaidi. Waandishi wanahitimisha kuwa LLM za sasa **bado si za kuaminika kama mifano ya maagizi kwa msaada wa mwanafunzi kwa kiwango kikubwa**, ikithibitisha kuwa hatua ya kuagiza bado inahitaji uhakiki, [[llm-training-and-fine-tuning|kuboresha kwa kina]], na usimamizi wa binadamu badala ya uendeshaji otomatiki wa tayari.

Hatua baada ya alama — nani anapata msaada, na kama uligawanywa mahali ulipohitajika — ni ya [[student-support-and-success|msaada na mafanikio ya mwanafunzi]], ambayo inabeba ushahidi wa kuwasiliana, kurejea, na mgawanyo ambao safu ya maagizi ya ukurasa huu inalisha.

Matokeo ya uadilifu yanaingia safu sawa ya kutabiri. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]] anatabiri hatari ya udanganyifu unaosaidiwa na AI kutoka wiki nane za kwanza za alama za [[video-education|Moodle na kicheza-video]], akifika AUC ya 0.763 na usambazaji wa mantiki, na anahoji kuwa ishara inaweza kutumika hasa kwa sababu inafika kabla ya mtihani badala ya wakati wake.
Mstari wa kukamiliana unalenga *tafsiri* ya takwimu za kujifunza yenyewe. Mfumo wa FACTRIA wa [[factria-responsible-institutional-analytics-2026|Marques et al. (2026)]] unapanga mambo yanayosababisha upendeleo nyuma ya kiashiria — mstari wa mchakato, kitaaluma, kozi, na kidemografia — na chatbot ya kuuliza kwa tafakari ilipandisha viashiria vidogo 11 washiriki waliovipima kwa kila kesi kutoka 1.41 hadi 3.45 (d = 2.15), ikisogeza kutoka misomo ya moja kwa moja hadi ile ya masharti.

### Mbinu na uchanganuzi wa mtandao

Mbinu za mtandao ni msingi wa takwimu za kujifunza: [[network-analysis|uchanganuzi wa mtandao wa mpito (TNA)]] unaiga mifumo ya wakati ya hatua za mwanafunzi (mfano, mizunguko ya marekebisho na gumzo katika uandishi uliojengwa na [[conversational-ai|chatbot]]), na [[network-analysis|uchanganuzi wa mtandao wa maarifa (ENA)]] unapanga jinsi kodi/dhana zinavyotokea pamoja katika shughuli — pamoja zikifichua *mchakato* wa kujifunza na mwingiliano wa mwanafunzi-[[student-ai-interaction|AI]] badala ya bidhaa yake tu.([[penny-transition-network-analysis-efl-writing-2026]])([[tracing-genai-literacy-interaction-patterns]])

- **Kupanga mitiririko ya kubofya katika ujenzi wa mifano unaojiongoza.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] walichanganya [[pedagogical-patterns|uchanganuzi wa mlolongo wa shughuli]], kupanga makundi kwa daraja, na mifano ya mlolongo wa Markov kwenye mtiririko wa kubofya wa wanafunzi 315 wa mtandaoni ambao walijenga mifano 822 ya kiikolojia katika VERA, wakidondoa makundi tisa yenye kina, ya msingi wa mpito katika mifumo mitatu mikubwa (Uchunguzi, Ujenzi, Uchunguzi). Kazi yao inaonyesha kuwa kuchanganya uchanganuzi wa mlolongo na uundaji wa mfano wa mlolongo wa Markov kunaweza kufichua tabia yenye maana katika kazi zisizo na muundo, [[self-directed-learning|za kujiongoza]] hata katika kutokuwepo kamili kwa data ya kidemografia au muktadha.

- **Takwimu za kujifunza na GenAI zinaumba ubunifu wa kujifunza kwa njia tofauti (2026).** [[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]] walitumia ENA kwenye vikundi 11 vya mazungumzo vya waelimishaji kulinganisha jinsi takwimu za kujifunza ikilinganishwa na [[generative-ai]] zinavyoelekeza maamuzi ya [[learning-design]]. Majadiliano ya LA yalijikita katika taarifa za muktadha, ubunifu wa ngazi ya kozi, na [[problem-solving]] ya kibunifu (LA kwa utambuzi wa mahusiano na kulenga msaada), huku majadiliano ya GenAI yakijikita katika ubunifu wa [[assessment|tathmini]] na kubuni kwa [[self-determination-theory|kujitambua]] kwa mwanafunzi (GenAI kwa ubunifu na maendeleo ya tathmini). Muktadha na [[creativity]] zilikuwa za kati katika zote mbili — ukumbusho kuwa takwimu za kujifunza zinaeza ubunifu tu ndani ya muktadha wa [[pedagogy|kielimu]] na uhuru wa mwalimu.
- **Mazungumzo hushinda muunganisho wakati dhana ni ya kijamii, na chanzo bora ni kwa kila dhana.** Badala ya kuongeza njia nyingi, ulinganisho wa LAK26 wa usanidi tano wa vipengele kwenye sehemu za uundaji wa mfano wa ushirikiano uligundua kuwa uwekaji wa maandishi peke yake ulikuwa na nguvu zaidi kwa ujumla (wastani wa ROC AUC 0.650, 95% CI 0.615 hadi 0.685) dhidi ya maandishi pamoja na kumbukumbu (0.613) na maandishi pamoja na kumbukumbu zenye dirisha la muktadha (0.623). Kumbukumbu zilipima 0.526 peke yake, karibu na bahati nasibu kwa dhana ya kijamii, lakini zilikuwa chanzo pekee kilichoboresha utambuzi wa tafakuri (0.5862), huku upangaji ukitegemea mazungumzo yanayozunguka badala ya athari za mazingira. Uchaguzi wa vipengele ni dai kuhusu dhana, si uamuzi wa bajeti ([[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang et al., 2026]]).

- **Alama za tabia si vipimo vya hali ya kiakili — hasa kwa wanafunzi wenye mahitaji maalum.** [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026|Vasileiou et al. (2026)]] wanaonya kuwa alama za mwingiliano (muda kwenye kazi, makosa yanayorudiwa, [[help-seeking|kutafuta msaada]], maendeleo yasiyo ya kawaida) zinaweza kusaidia walimu kutambua mahali mwanafunzi anahitaji msaada, lakini si vipimo wazi vya hali za ndani: kujibu taratibu kunaweza kuonyesha mawazo ya uangalifu, usindikaji wa lugha, usumbufu, muundo usiofikiika, au ugumu wa kiufundi. \" algoriti hazipaswi kuhitimisha upungufu wa utendaji au hali ya utambuzi kutoka data ya tabia pekee\" — uchanganuzi unahalalishwa kama chanzo kimoja cha taarifa ndani ya tathmini ya kitaalamu na mazungumzo na mwanafunzi.
- **Takwimu za kujifunza za ubunifu: kuchimba milolongo ya shughuli iliyopangwa badala ya alama (2026).** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec na Horvat (2026)]] walitumia milolongo ya Markov na uchimbaji wa mifumo ya mlolongo kwenye mlolongo *uliopangwa* wa shughuli 29,064 za kufundisha na kujifunza katika kozi 554 zilizopangwa katika zana wazi ya ubunifu wa kujifunza. Matriki ya mpito ilipanda kwa Tathmini hadi Majadiliano (0.332), mpito wa ndani zilitawala Mazoezi (0.317) na Upataji (0.292), na kanuni thabiti zaidi ya mlolongo ilikuwa Upataji hadi Tathmini hadi Mazoezi hadi Mazoezi (kujiamini 0.743, kuinua 1.449), huku njia ya hatua nne ya marudio zaidi ikikuwa Upataji, Mazoezi, Mazoezi, Tathmini (matukio 120). Majadiliano na Tathmini zilikuwa aina zinazofikiwa zaidi na Uzalishaji zilikuwa za mbali zaidi na za kipekee. Utafiti ni ukumbusho kuwa takwimu za kujifunza hazihitaji kuanza na alama za LMS: data ya wakati wa ubunifu inaweza kufichua sarufi ya kielimu ya kozi kabla ya mwanafunzi yoyote kufika, ingawa waandishi wanasisitiza kuwa kufanana na miundo ya flipped, inayotegemea uchunguzi au [[project-based-learning|msingi wa mradi]] si ushahidi wa nia.

- **LLM zilizobobea zinazojieleza (2026):** Mstari wa hatua mbili unabobea kikadirioji cha takwimu za kujifunza cha kisanduku-jeusi na tafsiri yake ya baada ya tukio kuwa [[llm]] ndogo, ya wazi, ambayo inarudisha kadirio la ngazi ya mtu binafsi na maelezo ya lugha asilia. Ukaguzi wa kwanza-uaaminifu unatathmini kama maelezo yanalingana na sifa zinazoelezewa; [[simulation]] inaonyesha urejeshaji wa karibu-bila-upotevu (r > .90) na kiongozi wa oracle, ikitoa njia ya uwazi zaidi, inayoweza kupelekwa kwa takwimu za kujifunza ([[distilling-self-explaining-lm-learning-analytics-2026]]).

- **Wezeshaji wa miingiliajo ya kielimu yanayotegemea LA (2026).** [[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić (2026)]] wanatambua na kupanga wezeshaji saba wa miingiliajo ya kielimu ya kuaminika yanayotegemea LA kupitia Delphi + AHP + SNAP: mwelekeo wa kimkakati wa [[governance|kitaaluma]], msingi wa kielimu na wa [[research-methods-aied|utafiti]], rasilimali zinazopatikana, msaada wa kielimu, maadili na utawala wa data, ushirikiano wa wenye maslahi, na uhakiki wa ubora. Mwelekeo wa kimkakati wa kitaaluma ulipanga juu zaidi (na wenye ushawishi zaidi kwa wezeshaji wengine), rasilimali zinazopatikana zikifuata. [[trust|Uaminifu]] (kufuata maadili, algoriti za wazi/zisizo na upendeleo, uhalali wa kielimu) unawekwa kama sharti lisilo na ambao bila huo miingiliajo yanayotegemea LA hayana maana.
- **Kina cha mwingiliano wa LLM kinatabiri ubora wa kazi lakini si kukumbuka (2026).** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] unaunganisha telemetry ya mazungumzo ya LLM katika ngazi ya zamu (Kina/Kiasi/Mwendo) na [[learning-gains|matokeo ya kujifunza]]: "kina" cha kutafuta maelezo kilitabiri kujitegemea ubora wa kazi uliyopimwa kujitegemea (β = 6.27) lakini si kukumbuka papo hapo — kukata uhusiano kati ya ufahamu unaoendeshwa na ufafanuzi na uthibitisho unaoendeshwa na urejeshaji ambao una athari kwa jinsi mwingiliano wa [[llm]] unavyopimwa na kutathminiwa katika LA.

- **Kipimo cha pamoja cha mwingiliano kinakosekana.** Katika migawanyo 46 kutoka masudio 33 hakuna sifa ya pamoja ya meta — lebo zinazofanana zinataja matukio tofauti — hivyo mapitio yanapendekeza *kipindi cha mwingiliano*, ubadilishanaji wenye mpaka unaoelekezwa na lengo, kama kipimo cha kuhusisha mazungumzo na upataji wa ujuzi ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).
- **Kuiga mazungumzo ya ushirikiano kwa takwimu za kujifunza.** [[llm-agents-collaborative-problem-solving-simulation-2026|Fang (2026)]] anatumia mawakala wa LLM walioboreshwa mahususi kwa washiriki ili kuzalisha upya mazungumzo ya utatuzi wa matatizo ya ushirikiano, yaliyothibitishwa na Uchanganuzi wa Mtandao wa Maarifa (umbali wa ENA 0.17, mpito p = 0.65). Mbinu inawapa watafiti wa takwimu za kujifunza njia inayoweza kupanuka ya kuzalisha mazungumzo ya ushirikiano ya kweli kwa kuchunguza mienendo ya mwingiliano, zamu za kubadilishana, na mwelekeo wa kodi za mandhari bila kukusanya data mpya ya binadamu.
- **Data wazi, inayoweza kurudiwa na takwimu za kujifunza tayari za alama.** [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] inatoa [[benchmark]] bandia yenye mpangilio tayari wa alama (N=540; vipindi 360; vipindi vya kujifunza 1,440) kwa uchanganuzi wa mwingiliano na usawa wa ushiriki katika upangaji wa ushirikiano. Data ya kumbukumbu na alama ni uzito wa kupinga wa asili kwa [[self-report-measures|kujitangaza]] katika fasihi hii: dhana moja mara nyingi hupimwa mara mbili, moja kwa kuuliza na moja kwa kuchunguza, na mbili hazikubaliani daima. Kando na hilo, mfumo wa ML wa uchunguzi na uchanganuzi wa SHAP ulitambua dhana zinazohusiana na kujifunza zilizohusishwa zaidi na matumizi yaliyokusudiwa ya ChatGPT ya kitaaluma kwa wanafunzi wa chuo kikuu, ikipa kipaumbele [[explainable-ai|uwezo wa kueleweka]] ([[determinants-chatgpt-use-higher-education-2026]]).
- **Miundombu ya takwimu za kujifunza inayoweza kutumika tena, iliyothibitishwa ndani tu (2026).** [[a4l-analytics-pipeline|Bai et al. (2026)]] walizalisha upya matokeo yaliyochapishwa kutoka wasaidizi watatu wa AI wa Georgia Tech kwa kubadilisha maadili ya usanidi badala ya kodi, ingawa dai linalotegemea uchanganuzi upya wa data zilizopo za taasisi moja na upanuzi mmoja wa uwezo ulifanywa na watu wa ndani.

### Viungo

Takwimu za kujifunza zinaungana na [[knowledge-tracing]] (kichanganuzi cha msingi), [[formative-assessment]] (tathmini inayoendeshwa na takwimu za kujifunza), [[student-modeling]] (uwakilishi wa mwanafunzi unaojazwa na takwimu za kujifunza), [[privacy]] (kizuizi cha [[ethics|maadili]]), na [[edtech-platform]] (mahali takwimu za kujifunza zinapopelekwa). Kwa sababu takwimu za kujifunza za maagizi zinazotathminiwa kwa kiwango kinachozidi kwa [[simulating-students|wanafunzi walioigwa]] — ambapo makundi bandia ya wanafunzi yanachukua nafasi ya makundi halisi katika majaribio yaliyodhibitiwa — takwimu za kujifunza pia zinaungana na uigaji wa mwanafunzi.

- **Kile dashibodi zinavyoonyesha huamua walimu wanachotenda.** [[ai-supported-lecturer-decision-making-2026|Köroğlu et al. (2026)]] walipitia masudio 27 ya kiuwezo (2016–2025) na walijenga taksonomia ya kijamii-ufundi ya maamuzi ya mhadhiri yanayosaidiwa na AI katika aina nane za maamuzi: ufundishaji, mtaala, tathmini, maoni, mazingira ya kujifunza, kihisia, utawala, na maadili. Dashibodi za Takwimu za Kujifunza zilikuwa mfumo unaoripotiwa zaidi, na uwekaji wa kodi unaonyesha msaada umekita katika maamuzi ya ufundishaji, maoni na tathmini ambayo data ya maandishi na kumbukumbu ya tabia yanaweza kuelekeza, huku maamuzi ya kihisia, maadili, mtaala na mazingira ya kujifunza yakisaidiwa mara chache. Waandishi wanasoma hii kama athari ya umakini badala ya kikomo cha uwezo: kwa sababu mifumo ilifanya data ya tabia ya mwanafunzi ionekane na ifanyike, wasiwasi wa motisha, [[metacognition]], hisia na mazingira yalitoka nje ya kile data ilivyowaalika wakufunzi kufikiria.
- **Kugeuza uchanganuzi wa AI kuwa mazungumzo ya darasa ni ujuzi wa mwalimu wenyewe.** Katika masomo manne ya hisabati ya sekondari, uandaaji 47 wa darasa zima wa mwalimu mmoja ulibadilisha matokeo ya dashibodi kuwa hoja za pamoja kwa kuchagua na kupanga hoja za wanafunzi, na utafiti unataja aina nne zinazorudiwa ([[ai-integrated-math-argumentation-teacher-noticing-2026|Lee, Park na Lee (2026)]]).

- **Takwimu zinazopunguza mzigo wa mwalimu si takwimu zinazopunguza mzigo wa mwanafunzi.** Katika mapitio ya masudio 23 ya AI katika [[embodied-learning|kujifunza kwa mwili]], 62.5% ya lebo 40 za jukumu zilikuwa majukumu ya kuhisi yanayotathmini harakati, mwelekeo au zao — kazi ambayo vinginevyo ingemwangukia mwalimu — na waandishi wanaonya kuwa kupungua kwa mzigo wa kazi wa mwalimu hakupaswi kusomwa kama kupungua kwa mzigo wa mwanafunzi. Sababu yao ni kikomo cha kile uwekaji kodi wa aina hii unaweza kuonyesha kabisa: kurekodi kazi ambayo mfumo hufanya hakusemi chochote kuhusu athari yake kwa mwanafunzi, hivyo marudio ya majukumu hayawezi kuamua kama mfumo ulipunguza utambuzi au uliimarisha ([[kim-ai-embodied-learning-review-2026|Kim na Han (2026)]]).


Uwekaji wa vifaa vya ngazi ya mchakato ni hatua ijayo ya safu ya kuelezea. [[pulla-parsons-problem-tool-2026|Prol et al. (2026)]] walipanua jukwaa la [[open-source]] la matatizo ya Parsons ili kurekodi kila kuweka, kuondoa na kuwasilisha kizuizi kama alama ya wakati, kuunganisha kila uwasilishaji na rangi ya usahihi kwa kizuizi na historia ya jaribio, na kwa hiari kupitisha alama kupitia mstari wa [[llm]] unaoweka lebo mifumo ya matatizo ya kurudia kwa ukaguzi wa mwalimu. Katika wanafunzi 68 katika kozi ya juu ya ubunifu wa programu ya Java na 36 katika kozi ya utangulizi ya Python, uchanganuzi ulifichua matatizo matatu yale yale — kuchagua aina tupu isiyo sahihi, kubadilisha `return` kwa `throw`, na mpangilio mbaya wa mtiririko wa udhibiti — ambayo idadi ya usahihi na majaribio haiwezi kufichua, kwa sababu zinajibu *kama* mpangilio ulikuwa sahihi badala ya *mchakato ulikuwa nini*. AI inatenda kama mfasiri kwa [[teacher-role|mwalimu]] badala ya mpimaji wa mwanafunzi, na matokeo yake yanawekwa kama dhana inayoweza kukaguliwa kuhusu matatizo ya darasa badala ya alama.

- **Ukuta wa mfumo wa kujifunza: data ya kumbukumbu haisambazi kati ya majukwaa.** MATHia, i-Ready, na IXL kila moja inafafanua hata dhana za msingi — "jaribio," "kidokezo" — kwa njia tofauti, hivyo mifano haiwezi kuhamishwa kati yao. Majibu ya kazi inayoendelea yanashambulia tatizo kutoka upande wa video: mstari wa Gemini unabobea rekodi za skrini za mafunzo kuwa hati moja ya maandishi iliyounganishwa na kumbukumbu za asili za MATHia kama ukweli wa msingi. Kile video inarejesha ambayo hakuna mtiririko mmoja unafanya: [[scaffolding|ngazi za msaada]] za ubao, kazi tuli ya kikokotoo katika zana za nje, na muktadha wa nje ya skrini ambao kumbukumbu za asili hupunguza kuwa "utandavu." Changamoto za wazi zinabaki katika kuanzisha wakati, kuteleza kwa saa, na kutenganisha matukio ya jukwaa na michakato mingine ya kujifunza. ([[thomas-breaking-learning-system-wall-2026]])
- **Kumbukumbu za mwingiliano zinaweza kushindwa na kitabiri kisichobadilika.** Vipengele vya ngazi ya semesti kutoka mabadilishano 16,851 ya mwalimu wa AI yalizidi kitabiri cha wastani cha alama za kazi kwa pointi 0.114, kipindi kinachovuka sifuri, huku 62.1% ya hitilafu ikiwa katika robo ya chini ([[llm-tutoring-interaction-predictive-value-2026|Dong et al. (2026)]]).

Dashibodi na mifumo ya tahadhari ya mapema hukusanya hatari ya [[automation-bias]]: bendera hudai hukumu ambayo mtu anaweza kuikubali kwa sababu ipo badala ya kwa sababu ilikaguliwa.

Kushikilia viashiria vya njia nyingi bila kubadilika na kuongeza maelezo ya hadithi pekee kulipandisha tafsiri ya walimu wanaojiandaa (η² = 0.166) na kujenga maana (η² = 0.220), wakati mabadiliko ya vitendo hayakusogea — tabaka la tafsiri, si data, lilikuwa kizuizi ([[liu-teaching-analytics-dashboard-2026|Liu na wenzake, 2026]]).


## Dhana Potofu za Kawaida

- **"Kadirio la hali ya maarifa hurithi uhalali wake kutoka kwa data."** **Q-matrix inayounganisha vipengele na sifa ni dhana, si data**: maingizo yaliyokataliwa kwa **vipengele 14 kati ya 918 vya mawazo yaliyochanganuliwa** yanamaanisha kuwa ramani yenyewe ilihitaji uamuzi. Kuthibitisha ramani ni hatua, si utaratibu wa kawaida.

- **LLM zinazosoma mitiririko ya kubofya dhidi ya mikakati ya kujifunza iliyotajwa.** [[radmehr-clicksight-clickstream-learning-strategies-2026|Radmehr na wenzake (2026)]] wanaandaa mstari wa [[llm|LLM]] unaopata ushahidi wa mkakati katika alama ya mwanafunzi, huhukumu uzingatiaji, na hutaja vitendo vinavyohusu hukumu, ukifikia ubora wa jumla wa 0.735 katika uigaji mgumu dhidi ya 0.704 kwa msingi tambarare.

- **"Takwimu za kujifunza zinahitaji athari za mibofyo."** Hali za maarifa zinaweza kukadiriwa ndani ya Elimu Inayotegemea Matokeo kwa **kufuatilia matokeo ya kozi moja kwa moja kutoka data ya mwingiliano na mafanikio ya LMS**, kwa kutumia ramani za uhusiano wa OBE: kumbukumbu ya taasisi hutoa ishara.
- **"Utabiri bila dirisha la kitendo ni wa manufaa."** Utabiri wa maendeleo ni wa matumizi zaidi unapokuwa **unaoweza kueleweka na ukiambatana na dirisha la kitendo**: [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries na Koprinska (2025)]] wanatabiri matokeo ya ngazi ya moduli, ambayo ni umbo ambalo mshauri anaweza kuchukua hatua juu yake, tofauti na alama ghafi.

## Dhana Zilizounganishwa

- [[automation-bias]] — Kwa nini bendera iliyopo hutekelezwa bila kukaguliwa


- [[explainable-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — upande wa msaada ambao utabiri unalisha: kurejea, mgawanyo, na matokeo wanayosogeza au hawana

- [[sensor-and-gaze-analytics]]


## Makala Zilizounganishwa

- [[radmehr-clicksight-clickstream-learning-strategies-2026]] — ClickSight: kufasiri mitiririko ya kubofya kupitia mikakati ya kujifunza iliyoelezwa na fasihi (Radmehr na wenzake 2026)

- [[factria-responsible-institutional-analytics-2026]] — Takwimu za Kitaaluma za Kujifunza zinazowajibika: Kutafsiri Upendeleo na Msaada wa AI

- [[ai-supported-lecturer-decision-making-2026]] — Maamuzi ya Mhadhiri Yanayosaidiwa na AI katika Elimu ya Juu
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Takwimu za kujifunza za shirika la pamoja na zinazoweza kueleweka kwa uundaji wa mfano wa hatari wa kitaaluma unaohifadhi faragha (Villegas-Ch et al. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — Kile wanafunzi wanachouliza ni muhimu: kina cha mwingiliano wa LLM, ubora wa kazi, na kukumbuka papo hapo (Tsiligkiris 2026)
- [[learning-analytics-to-educational-interventions-2026]] — Kutoka takwimu za kujifunza hadi miingiliajo ya kielimu: wezeshaji wa miingiliajo ya kuaminika yanayotegemea LA (Svetec, Divjak & Kadoić 2026)
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA na GenAI katika maamuzi ya ubunifu wa kujifunza
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — Kutoka Utabiri wa Hatari ya Mwanafunzi hadi SC2R: Njia ya Kupata Matokeo ya Kinyume
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Utambuzi wa kiakili wa Bayesian kwa njia za kujifunza za kibinafsi
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Kubobea LM inayojieleza kwa takwimu za kujifunza
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Je, AI inaweza kutoa msaada unaofaa kwa wasifu tofauti za wanafunzi? Tathmini ya kiwango kikubwa
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Mawakala wa LLM mahususi kwa washiriki walioboreshwa wakizalisha upya mazungumzo ya utatuzi wa matatizo ya ushirikiano (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Vigezo bandia vya ASTRA kwa mafunzo ya mawakala wengi na ushirikiano wenye usawa wa ushiriki
- [[determinants-chatgpt-use-higher-education-2026]] — Vigezo vya ML/SHAP vya matumizi ya ChatGPT ya baadaye katika elimu ya juu
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Kufanya matokeo ya ML yapatikane kwa walimu katika madarasa ya mchanganyiko
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Ufuatiliaji wa maarifa unaotegemea matokeo na ramani ya uhusiano
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — Mlolongo wa Markov na uchimbaji wa mifumo ya shughuli 29,064 zilizopangwa katika kozi 554, yakifichua sarufi ya ubunifu inayoongozwa na Upataji na kuimarisha Mazoezi
- [[pulla-parsons-problem-tool-2026]] — Pulla: ufuatiliaji wa tabia ya ngazi ya mchakato na uchanganuzi wa matatizo unaoelekea mwalimu katika matatizo ya Parsons (Prol et al. 2026)
- [[a4l-analytics-pipeline]]
- [[league-ethical-governance-student-data-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — Kutumia Takwimu za Kujifunza Kusaidia Uandishi wa Wanafunzi wa Shule ya Sekondari kwa AI ya Kizalishaji
- [[edtech-privacy-deferral-2026]] — "Tutarekebisha Baadaye": Elimu, AI, na Kuahirisha Faragha ya Mwanafunzi katika EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — Kile Vipimo vya Uaminifu Vinapuuza: Ukaguzi wa Muundo kwa Data ya Kielimu Bandia
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — Kutabiri hatari ya udanganyifu unaosaidiwa na AI kutoka alama za mapema za LMS za semesti (AUC 0.763)
- [[thomas-breaking-learning-system-wall-2026]] — Kuelekea kuvunja ukuta wa mfumo wa kujifunza kwa kutumia hati za mafunzo za multimodal (Thomas et al. 2026)
- [[taufer-human-ai-interaction-haidl-2026]] — Mabadilishano ya binadamu na AI kama rekodi zilizoundwa: idadi ya maombi haibebi karibu ishara yoyote kuhusu maendeleo
- [[ai-integrated-math-argumentation-teacher-noticing-2026]] — Kutambua na kuandaa uchanganuzi wa AI kuwa hoja za pamoja (Lee, Park na Lee 2026)
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Viwango vya ukamilishaji vinaweza kuficha anguko la ushiriki

- [[kim-ai-embodied-learning-review-2026]] — AI katika kujifunza kwa mwili huangalia zaidi: majukumu ya kuhisi ni 62.5% ya lebo za jukumu, na hakuna mfumo uliopitiwa uliounganisha mitiririko ya njia nyingi wakati wanafunzi wakiitumia (Kim & Han 2026)
- [[liu-teaching-analytics-dashboard-2026]] — Utafiti wa udhibiti hai wa ufundishaji unaotenganisha tabaka la maelezo: tafsiri ilisogea, kitendo hakikusogea (Liu na wenzake 2026)

