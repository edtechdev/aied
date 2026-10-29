---
title: "Mbinu Bora za Kukuza Mwalimu wa AI Mwenye Ufanisi ni Zipi?"
created: "2026-10-13T05:22:00-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

Mkufunzi wako ana wiki tatu kabla ya jaribio la awali. Mazungumzo yanafanya kazi, modeli inaeleza derivative kwa uwazi, na onyesho la ndani lilipata makofi. Kisha mtu kutoka kituo cha ufundishaji anauliza swali ambalo vipimo vyako havina sehemu yake: baada ya muhula mmoja na kifaa hiki, mwanafunzi atatatua tatizo wakati kifaa hiki hakipo chumbani? Unachonacho ni orodha ya vipengele. Usichonacho ni sentensi moja inayosema kile mwanafunzi anapaswa kuweza kufanya peke yake mwishoni.

Mkufunzi ni sera iliyofungwa kuzunguka [[conversational-ai|chatbot]], na sera hiyo ndiyo huamua kama kujifunza kunatokea. Taja kazi ya kiakili ambayo mwanafunzi anapaswa kuifanya, fanya mfumo uihitaji (jaribio kabla ya msaada, ngazi za dokezo zinazopungua, ukaguzi ambao modeli haiwezi kuughushi), na tathmini ukiwa umezima mkufunzi. Ubora wa modeli huamua jinsi mazungumzo yanavyohisiwa. Sera huamua kile mwanafunzi anaweza kufanya mwezi Juni.

## Toleo fupi

**1.** Andika lengo kama madai kuhusu utendaji bila msaada, kisha toa kila kipengele kutoka humo. Kipengele kisichoweza kufuatiliwa hadi sentensi hiyo ni kipengele cha onyesho.

**2.** Jenga modeli ya mwanafunzi kutokana na ushahidi unaoweza kurekodi, na hifadhi kila utambuzi kama dhana yenye thamani ya uhakika badala ya ukweli.

**3.** Weka ngazi za msaada katika msimbo, zenye majina ya kila ngazi, na fanya kiolesura kimtoze mwanafunzi kitu kwa kila hatua anayoshuka.

**4.** Weka maudhui kwenye nyenzo zako mwenyewe na ukabidhi ukaguzi wa hesabu, aljebra na msimbo kwa zana zinazoamuliwa ambazo haziwezi kudanganya.

**5.** Jaribu kushindwa kwa ufundishaji katika mazungumzo yote: uvujaji wa majibu, unafiki, uimarishaji wa dhana potofu, na kuteleza kwa maelekezo.

**6.** Pima kwa awamu ya kuondoa zana na mtihani uliocheleweshwa, si kwa alama ya kuridhika.

## Andika lengo kama madai kuhusu utendaji bila msaada

Orodha tatu, zilizoandikwa kabla ya mtu yeyote kuchagua modeli:

- Kile wanafunzi wanapaswa kujua au kuweza kufanya baadaye.
- Kazi gani ya kiakili wanapaswa kuifanya wenyewe.
- Kile mkufunzi anaruhusiwa kuwafanyia.

Maandiko ya [[intelligent-tutoring|ufundishaji wenye akili]] yanaeleza kwamba ufanisi unategemea ubunifu wa [[pedagogy|ufundishaji]] badala ya uwezo wa modeli pekee, na kushindwa ni rahisi kujenga kwa bahati mbaya. Mkufunzi aliyeboreshwa kwa "maliza tatizo" ataharibu mkufunzi aliyeboreshwa kwa "jifunze kutatua tatizo" huku akipita kila jaribio la kiutendaji unaloandika, kwa sababu wote wawili hutoa majibu sahihi ya mwisho. Tofauti iko katika kile mwanafunzi alichofanya kati ya swali na jibu.

Orodha ya pili ndipo timu za maendeleo zinapokuwa mahususi. Chukua lebo ya umahiri kama "umahiri wa derivative" na kataa iwe na maana ya kutoa derivative sahihi. Igawanye katika kutambua wakati derivative inafaa, kuifasiri kama kiwango cha mabadiliko ya papo hapo, kuchagua kanuni, kutekeleza utaratibu, kueleza kwa nini chaguo lilikuwa sahihi, kukagua uhalali wake, na kuitumia kwa tatizo usilolifahamu. Kila moja ya haya ni kitu tofauti cha kurekodi, na kila kimoja kinaelekeza jibu tofauti linapokosekana. Mgawanyo huu pia ni kinga dhidi ya [[correct-answer-trap-misconceptions|mtego wa jibu sahihi]], ambapo mwanafunzi hufikia jibu sahihi kwa hoja yenye kasoro na uchanganuzi wako unarekodi mafanikio. [[correct-answer-trap-ai-tutor|Kunasa Mtego wa Jibu Sahihi]] na [[zhang-tutormoments-2026|Wakati Msaada Hauna Msaada]] zote zinatoa mifano ya kushindwa huko katika mazoezi.

## Jenga modeli ya mwanafunzi kabla ya mazungumzo

Modeli ya mwanafunzi inashikilia aina mbili za hali: makadirio kwa kila dhana (kikomo: kinakua, kanuni ya nguvu: imejaa umahiri, kanuni ya bidhaa: kinakua, kanuni ya mnyororo: haijaonyeshwa) na dhana potofu zinazodhaniwa pamoja na ushahidi na uhakika ulio nyuma ya kila moja. Ziweke tofauti. Makadirio ya dhana ndiyo yanayoongoza uchaguzi wa ugumu. Dhana inayodhaniwa ndiyo inayoongoza swali linalofuata.

Kuwa mwangalifu usiache [[llm|LLM]] ifanye utambuzi yenyewe. [[benchmark|Upimaji wa viwango]] uligundua kuwa wakufunzi wa LLM waliweza kutambua hoja iliyo sahihi kwa uwazi huku wakati mwingine wakikataa njia mbadala halali au wakikubali hoja isiyo sahihi. Modeli inayonasa hali nzuri na kukosea kusoma ile isiyoeleweka huwakosa hasa wanafunzi wanaohitaji msaada. Kwa nyanja zenye matokeo mazito, usanifu unaodumu ni **utambuzi uliopangwa pamoja na mazungumzo ya LLM yanayobadilika**, mpangilio ambao [[yasir-llm-tutoring-agents-2026|Kuthibitisha Kilicho Sahihi, Kukosa Kilichobaki]] unaueleza: kigunduzi chako mwenyewe huweka wazi kile mwanafunzi huenda alifanya, na modeli huandika mazungumzo kuzunguka ugunduzi huo.

Ipe utambuzi mfululizo wa wazi ambao modeli haiwezi kuruka: gundua, thibitisha, jibu. Modeli inaweza kupendekeza [[misconceptions|dhana potofu]] kama dhana inayodhaniwa, kisha lazima iithibitishe dhidi ya kazi halisi ya mwanafunzi au swali lililolengwa kabla mkufunzi kuijibu. Bila hatua hiyo, mfumo hubuni ushahidi kisha humfundisha mwanafunzi kwa kosa ambalo hakufanya, jambo ambalo ni bure na kwa kiasi fulani ni dharau.

Ushahidi unaostahili kurekodiwa, kwa mpangilio wa makadirio ya manufaa: majaribio ya hivi karibuni pamoja na hatua zake za kati, maarifa yaliyoonyeshwa kwa kila dhana, tabia ya kutafuta msaada (ambayo yenyewe ni ishara kuhusu kujiamini), na kujiamini kunakotangazwa pale unapokusanya. Rekebisha ugumu na msaada kutokana na rekodi hiyo, na chukua ombi la mwisho la mwanafunzi kama pembejeo moja ndani yake. Ombi moja ni kikadiriaji kibaya cha kile mwanafunzi anachojua, na mkufunzi anayeitikia ombi hilo atayumba.

## Weka ngazi za msaada, kisha fanya kiolesura kilipize

Andika ngazi hizo kabla ya kuandika ombi, kwa sababu ngazi ni uamuzi wa bidhaa wenye hali zilizotajwa, na mpangilio wa sauti hauwezi kuuzungumza. Mfululizo unaoweza kufanya kazi:

1. Jaribio huru.
2. Swali la kimetaji kuhusu kile mwanafunzi amejaribu.
3. Kidokezo cha dhana.
4. Tambua kanuni inayohusika.
5. Weka sehemu ya tatizo.
6. Hatua ya kati iliyofanyiwa kazi.
7. Suluhisho lililofanyiwa kazi.
8. Mwanafunzi anaeleza suluhisho.
9. Mwanafunzi anatatua tatizo linalofanana bila msaada.

Msaada hupungua kadri uwezo unavyoongezeka, na huo ndio utaratibu ulio katikati ya [[scaffolding|ngazi za msaada]]. Kuona suluhisho lililofanyiwa kazi hakuonyeshi umahiri, hivyo kipindi chochote kinachofikia ngazi ya saba kinadai ngazi ya tisa kutoka kwako kabla ya kuhesabiwa kuwa kikamilifu.

Ushahidi wa sababu wa kujenga ngazi hiyo kabisa unatoka kwenye jaribio la uwandani ambapo kiolesura cha GPT kisicholindwa kiliongeza utendaji wa hisabati uliosaidiwa na kupunguza utendaji wa mtihani bila msaada uliofuata. Mkufunzi anayetoa vidokezo aliondoa kwa kiasi kikubwa adhabu hiyo ya kujifunza ([[generative-ai-guardrails-harm-learning|AI ya kizazi bila ulinzi inaweza kuumiza kujifunza]]). Kikomo ni cha usanifu. Modeli hiyo hiyo, ikipewa tabia tofauti ya msaada, ilitoa matokeo kinyume kwenye kipimo kinachojalisha.

Jaribio kubwa zaidi la uwandani la bahati nasibu lenye wanafunzi zaidi ya 6,000 wa shule ya kati kwenye jukwaa la mazoezi linalotegemea umahiri linaonyesha jinsi ngazi inavyoonekana kwenye kumbukumbu. Wanafunzi waliopewa msaada wa AI walisonga mbele polepole zaidi na kujaribu maswali machache, nao walijibu kwa usahihi zaidi. Utaratibu ulio wazi zaidi ulikuwa usahihi wa jaribio lililofuata baada ya kosa: majaribio machache yalihitajika kurudi kwenye jibu sahihi. Mfumo huo ni upolepole wa manufaa, nao ndio alama ambayo ngazi ya vidokezo inapaswa kuacha ([[making-ai-tutoring-productive-mastery-math-2026|Kufanya Ufundishaji wa AI Uzalishaji]]).

Utafiti huo huo unatoa onyo kuhusu dashibodi zako mwenyewe. Kuhitaji majibu matatu sahihi mfululizo kuliinua kwa kasi umahiri uliofafanuliwa na jukwaa bila kutoa faida inayoweza kutambuliwa kwenye mtihani uliocheleweshwa wiki moja baadaye. Ushahidi wenye nguvu zaidi wa mtihani uliocheleweshwa ulionekana tu pale ambapo AI ilikaa ndani ya mtiririko wa kazi wa umahiri (mgawo 0.085), si pale ilipopatikana kama upatikanaji wa peke yake. Kama kipimo chako cha mafanikio ni kihesabu cha mfululizo, utatoa mfumo unaoboresha mfululizo huo.

Msuguano wa kiolesura unapaswa kuwa katika kipindi hicho hicho cha ubunifu. Vidokezo visivyo na kikomo nyuma ya kitufe kinachoonekana hugeuza ngazi yote kuwa njia ya mkato, na maombi ya vidokezo kabla ya wakati pamoja na kusoma kwa juujuu yanahusishwa na [[learning-gains|faida ndogo za kujifunza]]. Kubadilisha `[Hint][Hint][Hint][Show Answer]` na maswali "umejaribu nini?" na "sehemu gani inakuzuia?" (kuchagua kanuni, kuweka mlinganyo, kufanya aljebra, kuelewa dhana) kunagharimu skrini moja na kumwelekeza mwanafunzi hadi ngazi anayohitaji kweli. Pia kunakupa data ya kumbukumbu inayokuambia ngazi gani anayoizoea kuruka.

## Kabidhi sehemu zinazoweza kukaguliwa kwa kikaguzi

Weka uzalishaji kwenye nyenzo zilizoidhinishwa na mkufunzi: sehemu za vitabu, madokezo ya kozi, mifano iliyofanyiwa kazi, istilahi, mbinu zilizoidhinishwa, maandishi ya alama, kanuni za kazi, sera, na rasilimali za [[curriculum-design|mtaala]]. Uzalishaji unaosaidiwa na urejeshaji dhidi ya hifadhi hiyo hupunguza [[hallucination-risk|hatari ya udanganyifu]] na hapuondoi, kama [[rag]] inavyoeleza. Onesha nukuu au asili kwenye kiolesura pale ambapo mwanafunzi anaweza kukagua dai, kwa sababu nukuu ndiyo inayofanya msingi ukaguliwe baada ya tukio.

Kuweka msingi pia hufanya kazi ambayo vipimo vya usahihi hukosa. Kozi ina mbinu zilizoidhinishwa, na mkufunzi anayeingiza mbinu halali kihisabati ambayo kozi haitumii amemfundisha mwanafunzi kitu ambacho atapunguziwa alama kwa ajili yake. Urejeshaji kutoka tabaka la kozi ndio njia ambayo mkufunzi hubaki ndani ya seti ya mbinu.

Kwa nyanja zenye majibu yanayoweza kukaguliwa kwa utaratibu, ongeza zana zinazoamuliwa: vikokotoo, mifumo ya hisabati ya ishara, utekelezaji wa msimbo, grafu za maarifa, vikaguzi vinavyotegemea kanuni, na vitatuzi vya [[discipline-specific-aied|kitaaluma]]. Mgawanyo wa kazi ndio sehemu muhimu. LLM inashughulikia maelezo na mazungumzo. Injini ya ishara huthibitisha usawa wa aljebra, derivatives, integrals, suluhisho za mlinganyo, pointi muhimu na makadirio ya nambari. Hatua ya kati isiyo sahihi ambayo kikaguzi kinasa inakuwa wakati wa ufundishaji. Hatua ya kati isiyo sahihi ambayo hakuna kinasa inakuwa dhana potofu ambayo mwanafunzi anabeba hadi mtihani.

## Mtake mwanafunzi afanye kitu kwa maoni

Maoni yanayosema "Sahihi," "Si sahihi," au "Kazi nzuri" ni tukio la kuweka alama lililovaa kiolesura cha ufundishaji. Hifadhi ya maarifa inaichukua [[feedback|maoni]] kama mzunguko wa kutoa na kupokea: maoni husaidia kujifunza wakati wanafunzi wanayaelewa na kufanya kitu kwayo, na nusu ya pili ndiyo nusu ambayo mifumo huiacha kawaida. Jenga mkufunzi ili ataje hatua ya hoja inayohusika, aseme kile kinachohitaji kufikiriwa upya, atoe hatua moja mahususi inayofuata, na amwombe mwanafunzi atabiri au aeleze kabla maoni hayajafunuliwa.

Mfululizo unaobeba hili ni mwanafunzi kwanza, AI pili, mwanafunzi tena. Mwanafunzi huzalisha, huchagua, hutoa hoja, hutathmini au hutafakari; mkufunzi hujibu; mwanafunzi hufanya kitu kwa jibu hilo. Buni muundo wa zamu ili hili lisiwe la hiari. Mfumo ambao modeli inaweza kutoa aya tatu kwa jibu la swali moja humfundisha mwanafunzi kuuliza na kusoma.

Lengo la muda mrefu ni kuingiza ndani. Wanafunzi wanapaswa kuishia wakiendesha maswali ya mkufunzi na mikakati ya [[problem-solving|utatuzi wa matatizo]] wenyewe, na hiyo ndiyo hoja ya [[agency|uwakala]] na sababu ngazi ina kilele ambapo mkufunzi hukaa kimya.

## Buni kwa ajili ya kile kinachotokea katika zamu ya arobaini

Usalama wa ufundishaji ni seti tofauti ya majaribio kutoka usalama wa kawaida wa chatbot, na timu nyingi hutoa zikiwa na seti ya pili pekee. Sumu na upinzani dhidi ya kuvunja mfumo hakukuambii kitu kuhusu kama mkufunzi atatoa jibu kwa mwanafunzi anayeuliza mara mbili, atakubaliana na mbinu isiyo sahihi kwa sababu mwanafunzi alionekana kujiamini, atateleza nje ya seti ya mbinu ya kozi katika kipindi kirefu, au atamsukuma mwanafunzi kwenye [[cognitive-offloading|uhamishaji wa kiakili]]. [[ai-sycophancy|Unafiki]] ndio unaopita kwanza, kwa sababu kukubaliana kunasomwa kama wema na data yako ya mapendeleo inaulipa.

Jaribu uvujaji wa majibu, uimarishaji wa dhana potofu, kukubaliana kupita kiasi, ugumu usiofaa, uhamishaji, matibabu ya upendeleo, upotevu wa uwakala wa mwanafunzi, kuteleza kwa maelekezo, na kujiamini kupita kiasi katika maelezo yasiyo sahihi. Endesha majaribio kwenye mazungumzo yaliyorefushwa, si zamu moja, kwa sababu kushindwa kwa ufundishaji hujilimbikiza: zamu kumi za kwanza zinaweza kuwa za mfano na ya kumi na moja inaweza kuharibu kipindi. Mkufunzi anapaswa kuwa mwema na sahihi kwa wakati mmoja, ikiwa ni pamoja na wakati mwanafunzi anasisitiza dhana potofu. [[pedagogical-safety|Usalama wa ufundishaji]] na [[hazra-safetutors-pedagogical-safety-2026|Usalama wa Mkufunzi wa AI na Madhara ya Ufundishaji]] zinaweka wazi uainishaji wa kushindwa.

## Weka usanifu wa data katika hati hiyo hiyo ya ubunifu

Kusanya data ya mwanafunzi ambayo ni ya lazima kwa ufundishaji pekee, na uweze kusema kwa nini kila sehemu ipo. Pale unapoweka kumbukumbu ya kudumu au [[student-modeling|modeli ya mwanafunzi]], fanya madhumuni yake yaonekane kwa mwanafunzi, mpe udhibiti unaofaa juu yake, linda taarifa nyeti, fafanua muda wa kuhifadhi, na elekeza maamuzi mazito kwa mkufunzi au kituo kingine cha ukaguzi wa [[human-in-the-loop-ai|binadamu ndani ya mzunguko]]. Modeli ya mwanafunzi inayokusanya kwa utulivu makadirio ya kujiamini ambayo mwanafunzi haioni kamwe ni tatizo la ulinzi wa data na pia ni tatizo la ufundishaji.

Kagua tabia kwa mishipa ya lugha, viwango vya uwezo, miktadha ya kitamaduni, mahitaji ya [[accessibility|ufikivu]], na viwango vya [[prior-knowledge|maarifa ya awali]] na uzoefu wa AI. Utendaji tofauti kwa lengo lile lile ni hitilafu yenye mwanafunzi aliyeambatanishwa nayo, na haitaonekana kwenye nambari yako ya usahihi iliyojumlishwa.

Uamuzi mmoja wa ufikivu unastahili mstari wake: usifanye [[prompt-engineering|uandishi wa maagizo]] wa hali ya juu kuwa sharti la ufundishaji mzuri. Kama mkufunzi anafundisha vizuri tu wakati mwanafunzi anaandika ombi kwa uangalifu, umejenga mfumo unaowapa faida wanafunzi wanaojua tayari jinsi ya kuzungumza na modeli. Mkufunzi anapaswa kuwasaidia wanafunzi kuunda maswali yenye manufaa, ambayo pia ni ujuzi wa [[metacognition|kimetaji]] unaostahili kuwa nao.

## Pima kipindi cha kuondoa zana

Vipimo vya kipindi havikuambii kama kifaa kinafanya kazi. Usahihi wa majibu, urefu wa mazungumzo, mapendeleo ya mwanafunzi, kuridhika, kukamilisha kazi na [[student-engagement|ushirikiano]] vyote huongezeka kwa mifumo isiyofundisha chochote, kwa sababu wanafunzi wanapenda msaada na msaada ni rahisi kupima. Tathmini utendaji bila msaada, uhifadhi uliocheleweshwa, uhamishaji kwa matatizo mapya, marekebisho ya dhana potofu, uhuru wa mwanafunzi, upokeaji wa maoni, na [[differential-effects-across-learner-groups|athari tofauti kati ya makundi ya wanafunzi]]. [[ai-ed-evaluation|Tathmini ya AI katika elimu]] ina mbinu, na [[ai-tutor-behavioral-evaluation|Mhimili wa Tathmini Unaokosekana]] unatoa hoja kwamba tabia ndiyo dhana.

Tafiti mbili zinachanua kanuni dhidi ya [[self-report-measures|vipimo vya kujitangaza]] na muda mfupi. Jaribio la awali na wanafunzi 38 wapya wa programu lilibaini uhusiano mkubwa kati ya matumizi ya [[generative-ai|AI ya kizazi]] na kujifunza *kunakohisiwa* (rs=0.802, p<0.001), huku viashiria vya maendeleo huru bila msaada wa mkufunzi vikipata alama za chini kabisa. Waandishi wanaita pengo hilo udanganyifu wa uwezo na deni la kielimu, na ndilo hasa pengo ambalo kipimo cha kuridhika hulipa ([[genai-cognitive-tutor-programming-2026|AI ya Kizazi kama Mkufunzi wa Kifikra Asiye Rasmi]]).

Kwa msingi zaidi, tathmini nyingi huishia pale msaada unapokwisha. [[cognitive-washout-ai-skill-decay-2026|Mienendo ya kuondolewa kwa ujuzi wa kiakili]] inataja kipindi kisichopimwa cha baada ya kuondoa zana na inarasimisha matokeo manne: kurudi nyuma kwa kubadilika, msimamo wa kiasi, kiunzi fichu, na uponyaji kupita kiasi. Mzunguko wake wa kuondolewa unabeba kigezo cha muda wa uponyaji, kipengele cha ukamilifu wa uponyaji, na kielekezi cha histeresis kinacholinganisha juhudi za kujifunza upya na juhudi za awali. Kwa kuwa urejeshaji huamua ukali, mfumo huo unatoa hoja kwamba mazoezi yaliyopangwa bila msaada yanapaswa kupimwa kwa mzunguko wa uponyaji badala ya kujadiliwa kama suala la kanuni. Mpango wako wa tathmini unahitaji awamu ya kuondoa zana pamoja na mtihani wa papo hapo baada ya kipindi, na [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|ushahidi wa bahati nasibu kwamba msaada mfupi hupunguza utendaji wa baadaye bila msaada]] ndiyo sababu ya kuupanga mapema.

## Wape walimu kitu cha kuhariri

Kabla ya kutumwa, waache waelimishaji wajaribu wasifu halisi wa wanafunzi, dhana potofu za kawaida, hali za pembezoni, maombi ya kushambulia, majibu yasiyoeleweka, na mazungumzo marefu ya ufundishaji. Rekodi kushindwa kwa ufundishaji na urudishe kwenye maagizo ya mfumo, sera za ufundishaji, vyanzo vya maarifa, [[guardrails|ulinzi]], kanuni za modeli ya mwanafunzi na uteuzi wa modeli. Jibu la ufasaha linaweza bado kuwa si sahihi kwa ufundishaji, na mwalimu ndiye mkaguzi pekee anayeweza kuona hilo.

[[teacher-intervention-k12-ai-based-instruction-2026|Mapitio ya kimfumo ya Lee ya tafiti 29 za K-12]] inaeleza kile usimamizi huo unajumuisha na wapi unavunjika. Uingiliaji wa [[teacher-role|mwalimu]] ni mzunguko wa awamu nne unaorudia: ufuatiliaji, hukumu, uingiliaji na uandaaji. Tahadhari za AI, [[visualization|dashibodi]] na alama zinazojiendesha "haziongoi moja kwa moja hadi hatua ya ufundishaji." Mkakati wa mwalimu ulio na nguvu zaidi ambao mapitio yanapata ni tafsiri ya ufundishaji: kuchagua, kurekebisha, kuongeza, kufupisha au kufuta maoni ya chatbot badala ya kuyapitisha tu.

Maonyo mawili ya ubunifu yanafuata, na yote mawili yanapingana na ramani ya kawaida. Taarifa zaidi za AI si bora zaidi: mifumo inayotoa uchunguzi mfululizo iliwashinda walimu na kuvuta umakini mbali na uchunguzi wao wenyewe. Panga kile kinachostahili kuchukuliwa hatua, kifanye kieleweke, na toa mapendekezo kwa namna ambayo mwalimu anaweza kuyakubali, kuyabadilisha, kuyachelewesha au kuyakataa. Msaada zaidi kwa mwalimu pia si bora zaidi: kuchelewesha uingiliaji ili wanafunzi waweze kufanya kazi kwa uhuru ni ustadi wenyewe. Hali za kimuundo, yaani muda wa kupitia data, ukubwa wa darasa, na uwezo wa kufikia kifizikia makundi yanayohitaji msaada, ni sehemu ya uingiliaji badala ya masuala ya nyuma ya jukwaa. Dashibodi iliyojengwa kwa mwalimu asiye na kipindi cha mapumziko haifunguliwi.

## Mfano wa kwanza: mkufunzi wa calculus, ambapo uthibitishaji ni wa bei nafuu

Mkufunzi wa calculus wa muhula wa kwanza chuoni anapaswa kuinua kile wanafunzi wanaweza kutatua na kueleza kwa uhuru baada ya yeye kuondolewa, si kuongeza matatizo yaliyokamilishwa kwa usahihi. Ufundishaji wa hisabati uko hatarini hasa kwa ngazi za msaada kupita kiasi, matumizi ya vidokezo kabla ya wakati, na utambuzi usio sahihi wa hoja za mwanafunzi, na yote matatu yanaonekana kwenye kumbukumbu zako kama ukichunguza ([[math-education|elimu ya hisabati]]).

**Msingi na uthibitishaji.** Ujenzi wa tabaka sita: nyenzo za kozi na sera za mkufunzi, kisha tabaka la urejeshaji, kisha injini ya matatizo na modeli ya mwanafunzi kando ya kikaguzi cha ishara na injini ya utambuzi, kisha tabaka la sera za ufundishaji, kisha uzalishaji wa mazungumzo, kisha mwanafunzi, kisha kurudi kwenye modeli ya mwanafunzi. Kikaguzi ndiyo sababu usanifu huu unaweza kutekelezeka. Kinaamua kama usemi ni sawa, derivative ni sahihi, integral imetathminiwa, pointi muhimu imepatikana, na kinafanya hivyo bila kuuliza maoni ya modeli.

**Mwingiliano mmoja.** Kwa kutofautisha $f(x)=(x^2+1)\sin x$, chatbot ya kawaida hufunua jibu. Mkufunzi anayeelekea kujifunza hufikiri kwa ndani kwamba mwanafunzi alitofautisha vipengele vyote viwili lakini akazidisha matokeo, yaani [[misconceptions|dhana potofu]] inayowezekana ya kanuni ya bidhaa kama $f'g'$, na anauliza swali la utambuzi kwanza: kanuni gani inatumika wakati vitendakazi viwili vinazidishwa? Kisha mwanafunzi anaandika kanuni ya bidhaa kwa ishara, anaweka $u$ na $v$, na ni baada ya hapo tu mkufunzi anathibitisha usemi wa mwisho. Angalia ni kiasi gani cha ufundishaji kilifanyika kabla ya nathari yoyote ya modeli kumfikia mwanafunzi.

**Viwakilisho vingi.** Unganisha taratibu za ishara na fomula, grafu, jedwali, tafsiri ya maneno, na muktadha wa kifizikia wa kiwango cha mabadiliko. Ufasaha wa utaratibu na uelewa wa dhana huonekana sawa kwenye karatasi ya majibu sahihi na hutofautiana kwenye tatizo la uhamishaji.

**Dashibodi.** Onyesha ushahidi uliojumlishwa badala ya hukumu zisizoeleweka: "kanuni ya bidhaa, 62% umahiri ulioonyeshwa; mifumo ya kawaida, 18% huacha neno moja, 11% huzidisha derivatives." Utambuzi wa mtu mmoja mmoja hutoka kama dhana zinazodhaniwa pamoja na ushahidi unaozitegemeza, na hilo pia ndilo linalozifanya zikaguliwe na mwalimu ([[explainable-ai|uwezo wa kuelezeka]] unamjali mwalimu zaidi kuliko mwanafunzi hapa).

**Mpango wa tathmini.** Utendaji ukiwa na mkufunzi, utendaji kwenye matatizo yanayofanana bila yeye, uhifadhi uliocheleweshwa, uhamishaji kwa matatizo yasiyofahamika, ubora wa maelezo ya dhana, marekebisho ya dhana potofu, [[help-seeking|kutafuta msaada]] kunakofaa dhidi ya kabla ya wakati, uvujaji wa majibu, viwango vya uongo na vya kukosa vya utambuzi, na matokeo tofauti. Ulinganisho unaoamua mradi ni ule wa utendaji uliosaidiwa dhidi ya ule wa baadaye bila msaada. Mwanafunzi anayetoka 60% hadi 95% akiwa na mkufunzi na kubaki 60% peke yake hajafundishwa.

## Mfano wa pili: kocha wa uandishi, ambapo hatua huamua ruhusa

Uandishi hauna jibu moja sahihi, hivyo uthibitishaji ni hukumu na kazi ya ubunifu inahamia kwenye uwekaji wa hatua. Hifadhi ya maarifa inaichukua uandishi kama mchakato wa kiakili, wa kijamii na wa kuhutubu, ambayo ina maana mfumo wa uandishi wa AI unaweza kusaidia kujifunza na pia unaweza kuondoa hasa fikra ambazo kazi ilikuwepo kuziendeleza ([[writing-education|elimu ya uandishi]], [[coach-not-crutch-ai-writing|Kocha si Kitegaucho]]).

**Modeli ya uwezo.** Fuatilia hoja (ubainifu wa tasnifu, upatanisho wa dai na ushahidi, hoja pinzani), mpangilio (umakinifu wa aya, mwendelezo wa kimantiki, viunganishi), ushahidi (umuhimu wa chanzo, ujumuishaji, tafsiri), marekebisho (marekebisho ya jumla na ya ngazi ya sentensi, tathmini ya maoni) na mtindo (uwazi, sarufi, sauti). Kila kimoja kinakuwa ishara tofauti kwenye modeli ya mwanafunzi, na hilo ndilo linalowezesha maoni yaliyolengwa kabisa.

**Weka msingi wa kocha kwenye kazi.** Rejesha maagizo, rubriki ya mkufunzi, masomo ya kozi, mahitaji ya nukuu, taratibu za aina ya maandishi, mifano ya mkufunzi, na sera ya matumizi ya AI, ili maoni yaweze kusema "rubriki ya mkufunzi wako inakudai kuunganisha kila dai kubwa na ushahidi kutoka angalau masomo mawili ya kozi" badala ya kubuni matarajio ya jumla. Ushauri wa jumla ndio kushindwa kwa kawaida kwa zana ya uandishi isiyo na msingi, na wanafunzi wanaweza kuona hilo ndani ya vipindi viwili.

**Weka ruhusa kwa kila hatua.** Ushiriki wa AI katika hatua tofauti huathiri umiliki unaohisiwa kwa namna tofauti. Msaada wa upangaji hupunguza umiliki kidogo kuliko msaada wa kuandika rasimu, na uandishi wa rasimu uliozalishwa na AI huleta upungufu mkubwa zaidi ([[ai-writing-support-stage-ownership-2026|Kutoka Upangaji hadi Marekebisho]]). Ugunduzi huo unabadilika moja kwa moja kuwa jedwali la ruhusa. Katika upangaji, kocha huuliza maswali, hulinganisha misimamo, hupinga dhana na huchambua ramani za mawazo, na haizalishi hoja. Katika kuandika rasimu, mwanafunzi huzalisha nathari kwanza na kocha huendeleza badala ya kuchukua nafasi. Katika marekebisho, kocha hutambua na kuishia hapo: madai yasiyoeleweka, ushahidi unaokosekana, ushahidi usiounga mkono dai, matatizo ya mpangilio, rasimu dhidi ya rubriki. Katika uhariri, baada ya marekebisho, anashughulikia sarufi, alama za uakifishaji, ufupi na uumbizaji wa nukuu.

**Mwingiliano uliofanyiwa kazi.** Kwa insha kuhusu kuhitaji [[online-teaching-and-learning|kozi za mtandaoni]], mfumo wa jumla huandika upya aya ya mwanafunzi kuwa nathari iliyong'arishwa na hufanya kazi ya kiakili. Kocha husema kinachofanya kazi, hutaja suala kuu (aya inatoa sababu lakini haielezi kamwe kwa nini zinahalalisha agizo la chuo kizima), huuliza swali la marekebisho, na humwomba mwanafunzi amalize sentensi kwa maneno yake mwenyewe. Hoja inabaki mahali inapostahili.

**Maoni yaliyopangwa kwa kipaumbele.** Nguvu moja ya kuhifadhi, suala moja lenye athari kubwa, swali moja linalohitaji hukumu ya mwandishi, lengo moja mahususi la marekebisho. Si maoni arobaini. Mwanafunzi anayepokea maoni arobaini huyapanga kwa urefu, na upangaji huo hauna uhusiano na kile kinachojalisha.

**Mfanye mwanafunzi ahukumu maoni.** [[feedback-literacy|Ufahamu wa maoni]] ni lengo la kujifunza lenyewe. Uliza mara kwa mara kama mwanafunzi anakubaliana na pendekezo na kwa nini, na mruhusu alikatae. Matokeo ni [[evaluative-judgment|hukumu ya tathmini]] badala ya utiifu, na pia ni kinga pekee dhidi ya kocha anayekosea kwa kujiamini.

**Hifadhi sauti.** Tofautisha makosa, matatizo ya uwazi, chaguo za kuhutubu na mapendeleo ya mtindo, na acha mawili ya mwisho yakiwa kama yalivyo. Kocha anayefanya "marekebisho" ya chaguo za kuhutubu hufanya uandishi ufanane kuelekea mtindo wowote ambao modeli inaupendelea, na hufanya madhara makubwa zaidi kwa waandishi [[multilingual-learning|wa lugha nyingi]] na taratibu zisizo za kawaida za kuhutubu ([[ai-feedback-quality|ubora wa maoni ya AI]] ni toleo la jumla la tatizo hili).

**Jifunze kutoka kwa marekebisho.** Hifadhi historia ya marekebisho badala ya insha za mwisho pekee. Mfumo unaorudia wa "ushahidi uliowekwa lakini haukufasiriwa" unaoboreka katika insha tatu ni ishara yenye manufaa zaidi ambayo mfumo wa uandishi unaweza kuwa nayo, na ni bure.

**Tathmini.** Ubora wa uandishi uliosaidiwa na AI na ule wa baadaye bila msaada, uwezo wa kupata udhaifu katika maandishi yasiyofahamika, ubora wa marekebisho, upokeaji wa maoni, uwezo wa kueleza marekebisho, umiliki, utegemezi wa nathari ya AI, uhifadhi wa sauti, upendeleo kati ya lahaja na waandishi wa lugha nyingi, upatanisho na hukumu ya mkufunzi, na uhamishaji uliocheleweshwa. Ubunifu unaojibu hilo una mikono mitatu: kuandika kwa uhuru, AI ikizalisha maandishi, na kocha. Makundi yote matatu kisha huandika insha mpya bila AI. Kama kikundi kilichozalishiwa na AI kinashinda kimatendo na kinashindwa bila AI, mfumo uliboresha utendaji badala ya kujifunza. Mifumo ya ngazi ya darasa kutoka dashibodi (41% wanahitaji msaada katika kuunganisha dai na ushahidi) ni ishara ya [[formative-assessment|tathmini endelevu]] kwa mkufunzi.

## Kulinganisha miundo miwili

| Swali la ubunifu | Mkufunzi wa calculus | Kocha wa uandishi |
|---|---|---|
| Kitu kikuu cha kujifunza | Dhana za hisabati na utatuzi wa matatizo | Utoaji wa hoja na mchakato wa uandishi |
| Uthibitishaji | Mara nyingi unaweza kukaguliwa kwa usawa | Kwa kawaida unahitaji hukumu ya muktadha |
| Zana zinazoamuliwa | Injini ya hisabati ya ishara, kikokotoo | Ukaguzi wa sarufi, nukuu, rubriki |
| Jukumu kuu la AI | Tambua na ujenge hoja kwa hatua | Tambua na ujenge marekebisho kwa hatua |
| Hatari kuu | Kutoa suluhisho | Kuandika maandishi kwa niaba ya mwanafunzi |
| Kitendo cha mwanafunzi kinachojalisha | Tatua na eleza | Andika rasimu, tathmini, rekebisha |
| Modeli ya mwanafunzi | Dhana, taratibu, dhana potofu | Hoja, ushahidi, mpangilio, marekebisho |
| Ulinzi mkuu | Jaribio kabla ya suluhisho | Maandishi ya mwanafunzi kabla ya AI kuandika upya |
| Jaribio la uhamishaji | Matatizo mapya ya calculus bila AI | Kazi mpya ya uandishi bila AI |
| Kigezo cha mafanikio | Hoja huru ya kihisabati | Uandishi huru na hukumu ya tathmini |

Mifumo yote miwili inatumia seti hiyo hiyo ya [[ai-technologies|teknolojia za AI]] na inaonyesha sera tofauti za ufundishaji, kwa sababu taaluma zinahitaji aina tofauti za kufikiri. Kanuni inayojumlishwa ni kutambua shughuli ya kiakili inayozalisha kujifunza na kubuni AI kusaidia shughuli hiyo bila kuifanya yenyewe. Kanuni hiyo inapita modeli yoyote, ombi lolote, mfumo wowote wa wakala au kiolesura chochote.

## Kile timu za maendeleo hukosea

Ufundishaji upo kwenye ombi la mfumo, hivyo ombi la uangalifu ni ubunifu wa ufundishaji. Ombi ni tabaka moja la sera ambayo pia inajumuisha ushahidi gani unakusanya, ngazi gani kiolesura kinatoa, kikaguzi kinakagua nini, na dashibodi inaonyesha nini. Ombi lililoandikwa vizuri juu ya modeli ya mwanafunzi isiyohifadhi chochote litazalisha mkufunzi mfasaha asiye na kumbukumbu ya mwanafunzi, na ngazi itaanza upya kila kipindi.

Modeli bora itarekebisha utambuzi. Matokeo ya upimaji wa viwango hapo juu yaligundua wakufunzi wa LLM wakitambua hoja sahihi huku wakikataa njia mbadala halali na kukubali zisizo sahihi, na huo ni mfumo wa makosa ambao ukubwa haurekebishi kwa uwazi. Utambuzi uliopangwa upo kwa sababu hukumu ya modeli ndiyo sehemu ambayo huwezi kuikagua.

Kuridhika na kukamilisha huthibitisha kwamba ubunifu unafanya kazi. Huthibitisha kwamba wanafunzi walipata msaada. Jaribio la awali na wanafunzi 38 wa programu lilibaini kujifunza kunakohisiwa kuhusishwa kwa nguvu na matumizi huku maendeleo huru yakipata alama za chini kabisa, na utafiti wa umahiri uligundua sharti la mfululizo likiinua umahiri wa jukwaa bila faida ya mtihani uliocheleweshwa. Jenga kipimo cha kuondoa zana ndani ya jaribio la awali au utajifunza somo lisilo sahihi kwa ufanisi.

Urejeshaji hufanya majibu yaaminike. Unapunguza [[hallucination-risk|hatari ya udanganyifu]] na huacha sehemu iliyobaki ya uso wa kushindwa ikiwa kama ilivyo: kifungu kilichorejeshwa kinaweza kusomwa vibaya, mbinu halali inaweza kuwa isiyofaa kwa kozi, na modeli inaweza bado kukosea kwa kujiamini kuhusu hatua ambayo ilijitoa yenyewe. Urejeshaji ni sakafu.

Kupita seti ya usalama kunamaanisha ni salama kwa wanafunzi. Upimaji wa kawaida wa usalama hushughulikia sumu na kuvunja mfumo. Kushindwa kwa ufundishaji kunakojalisha hapa, uvujaji wa majibu na unafiki na kuteleza, hakuonekani kwa upimaji huo, na hujilimbikiza katika mazungumzo badala ya kuonekana katika zamu moja.

Ushirikiano ndio lengo. Urefu wa mazungumzo na idadi ya vipindi ni vipimo vya bei nafuu zaidi kuwekea vifaa, ndiyo sababu vinapandishwa cheo kuwa malengo. Hoja ya [[scaffolding|ngazi za msaada]] inasema kipindi bora hupungua urefu kadri mwanafunzi anavyoboreka, hivyo ongezeko la ushirikiano lina uwezekano sawa wa kuwa dalili.

## Kile kitakachokurudia

**"Tunatoa bidhaa baada ya wiki sita na hii ni robo ya kazi."** Sehemu kubwa ya usanifu ni ya bei nafuu. Lango la jaribio, ngazi iliyosanidiwa, urejeshaji juu ya madokezo uliyo nayo tayari, na mpango wa kumbukumbu wenye sehemu ya kuondoa zana ni siku za kazi. Vitu vya gharama (modeli ya mwanafunzi, kikaguzi, dashibodi) vinaweza kuanza nyuma ya bendera ya kipengele kwa kozi moja, na jaribio la awali lina taarifa zaidi likiwa na sehemu za bei nafuu zimekamilika.

**"Wanafunzi wanapenda na kukamilisha kumeongezeka."** Ukweli wote wawili unapatana na mfumo unaojibu maswali vizuri na usiofundisha chochote. Utafiti wa wanafunzi 6,000 uligundua maendeleo ya polepole na maswali machache yaliyojaribiwa pamoja na usahihi bora, hivyo kushuka kwa kukamilisha si habari mbaya kiotomatiki pia. Ripoti utendaji bila msaada kando ya nambari za ushirikiano na uache vyote viwili vipingane hadharani.

**"Hatuwezi kufanya jaribio la bahati nasibu."** Unaweza kufanya ulinganisho ndani ya mwanafunzi bila hilo: lengo lile lile, likisaidiwa wakati wa kitengo, likijaribiwa bila msaada wiki mbili baadaye, na alama iliyosaidiwa ikiripotiwa kando yake. Ubunifu huo hujibu swali la bidhaa na hauhitaji mkono wa udhibiti. Kisichoweza kukuambia ni hali mbadala kwa wanafunzi ambao hawakutumia mkufunzi kamwe.

**"Modeli ni API ya muuzaji, hivyo tabia ya msaada iko nje ya mikono yetu."** Ngazi zinaishi kwenye tabaka lako la uandaaji, na matokeo ya jaribio la ulinzi yalitokana na kubadilisha kile mkufunzi aliruhusiwa kusema, si kwa kubadilisha modeli. Tarajia mafunzo ya baadaye ya muuzaji kuvuta kuelekea kujibu haraka, kwa sababu manufaa ndiyo yaliyopangwa, na weka kujizuia kwenye msimbo wako mwenyewe.

**"Walimu hawatatumia dashibodi nyingine."** Hawatatumia ile inayotoa uchunguzi mfululizo, ambao mapitio ya K-12 yaligundua ukivuta umakini mbali na uchunguzi wao wenyewe. Wape ishara chache zinazoeleweka, njia ya kukubali au kukataa kila pendekezo, na muda ndani ya wiki wa kuziangalia.

**"Hatuna wataalamu wa taaluma kwenye timu."** Basi mkufunzi atafundisha mbinu ya jumla na maandishi ya alama ya kozi yatateleza ndani ya muhula mmoja. Mtaalamu wa somo kwa siku mbili wakati wa ubunifu, akiandika orodha ya dhana potofu na orodha ya mbinu zilizoidhinishwa, ni kitu cha bei nafuu zaidi kwenye mradi na ndicho timu hukata kwanza.

## Kile cha kufanya wiki hii

**1.** Andika sentensi ya utendaji bila msaada kwa ajili ya jaribio la awali na uiweke kwenye vipimo, juu ya orodha ya vipengele.

**2.** Ongeza lango la jaribio na urekodi. Rekodi kama mwanafunzi alijaribu kabla ya dokezo la kwanza, na ngazi gani alifika.

**3.** Badilisha kitufe cha dokezo na swali la kizuizi, na urekodi jibu kama kundi.

**4.** Panga ukaguzi mmoja bila msaada wiki mbili baada ya kitengo na uuweke kwenye kalenda ukiwa na mhusika.

**5.** Weka miadi ya siku mbili na mwalimu wa somo ili kuandika orodha ya dhana potofu na orodha ya mbinu zilizoidhinishwa.

## Wapi kwenda baadaye

[[designing-educational-ai-software]] inashughulikia kanuni za ngazi ya programu ambazo mkufunzi anapaswa kuzitimiza, na [[designing-ai-into-learning]] inashughulikia mahali ambapo mkufunzi anakaa katika mfululizo wa kozi. [[evaluating-ai-interventions-methods]] na [[checking-whether-educational-ai-works]] zinashughulikia kama kifaa kinafanya kazi. Kama tatizo lako ni kwamba modeli hujibu kwa upesi kupita kiasi, [[making-ai-better-at-supporting-learning]] na [[training-ai-tutors-to-guide-rather-than-answer]] zinafanya kazi upande wa mafunzo wa swali lilo hilo.
