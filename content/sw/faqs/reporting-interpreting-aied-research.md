---
title: "Ni Mbinu Zipi Bora za Kuripoti na Kutafsiri Utafiti wa AI katika Elimu?"
created: "2026-10-13T05:30:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
reviewed_by: [editor]
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

# What Are Best Practices for Reporting and Interpreting AI in Education Research?

Unaandika utafiti wa AI katika elimu ambao madai yake yamekwenda mbele ya muundo wake, au unakagua utafiti kama huo na unahitimisha kama namba kuu ina maana yoyote. Kwa njia yoyote ile, upungufu sita ule ule unaamua: ni mfumo gani wa AI uliotumika kweli, uliboreshwa kufanya nini, liliwajibika nini kielimu, ni binadamu walibuni au kuyakagua matokeo yake, kipimo cha matokeo kilichukua nini kweli, na waandishi walifanya nini kuhusu upendeleo, gharama na vikomo. Mwandishi anayeyapuuza anawasilisha utafiti ambao hauwezi kutathminiwa; mkaguzi ambaye hawatizi hawa hawezi kutofautisha uingiliaji uliobuniwa na onyesho la zana lililozoea. "Usio na uwezo wa kutathminiwa" — si "unaoungwa mkono" na si "uliokanushwa" — ndio hukumu ya kweli yanapokuwepo.

Mambo haya si ya kudhania. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] alikagua meta-analyses 14 zilizokaguliwa na wataalam zinazodai AI inaboresha elimu na akagundua kuwa *hakuna hata moja* iliyotoa msingi halali wa madai iliyoyatangaza. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] walikusanya vipimo 1,840 vya athari kutoka meta-analyses 67 na wakagundua kuwa, mara upendeleo wa kuchapisha unapowekwa kwenye mfano, athari ya wastani hushuka kwa takribani **theluthi moja** ya wastani uliochapishwa (SMD = 0.196 dhidi ya 0.67). [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] walithibitisha **marejeo 30 yaliyotungwa katika karatasi 14 za elimu ya sayansi ya kompyuta**, yote yakiwa yamechapishwa mwaka 2025 au 2026 — dosari inayofika kwa wasomaji hasa kwa sababu wagaguzi hawawezi kuthibitisha kila kiingizo katika orodha ya marejeo. Nidhamu ya kuripoti inaamua kama msingi wa ushahidi wa uwanja unatumika kabisa. Kwa chaguo za kubuni zinazochukuliwa tazama [[research-methods-aied|Research Methods in AI in Education]]; kwa katalogi ya hali za kushindwa, [[limitations-in-aied-research|Limitations in AIEd Research]]. Kwa upande wa msomaji — kile mtaalamu wa vitendo anafanya na karatasi mara inapokuwepo — tazama [[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]].

## Muhtasari

Hatua sita zinaamua kama dai lako litazistahimili ukaguizi:

1. **Eleza mfumo wa AI kama uingiliaji, si kama muuzaji.** Mfano, toleo, usanidi, ilani, jukumu, na kama binadamu walibuni au kuyakagua matokeo.
2. **Tangaza mantiki ya kielimu na ulinganifu halisi.** Jina la bidhaa si mbinu; shughuli ya kawaida si kudhibiti sahihi.
3. **Fanya kipimo kifanane na dai.** Kile chombo kinachochukua, uthibitishaji wake kwa idadi hii ya watu, na kama matokeo yalichelewa na kuwa bila msaada.
4. **Thibitisha kila hukumu ya kiotomatiki.** Tambua kiwango cha dhahabu, lengo la urekebishaji na nani aliamua kutokubaliana.
5. **Ripoti kutokuwa na uhakika wa uchanganuzi, si ukadiriaji wake wa uhakika pekee** — athari zinazotegemeana, τ², vipindi vya utabiri, saizi za vikundi vidogo, tathmini ya upendeleo wa kuchapisha.
6. **Ripoti vyombo vya kulinganisha**: utaratibu wa maadili na utawala, gharama ya kompyuta na ya mazingira, matumizi yako ya AI, matokeo ya ubatili, na marejeo tu uliyoyathibitisha.

## Amua utasema nini kuhusu mfumo wa AI — na uiandike ili mtu aweze kuujenga upya

Huu ndio ukanguzi ambao wasilisho wengi hushindwa. Mfumo wa RAISE (*Reporting AI Studies in Education*, Allison 2026) ni orodha ya vipengele 30 katika vikoa kumi vya mada, na dai lake la uchunguzi ni mahususi badala ya kisarufi: wasilisho kwa kawaida hupuuza ni mfano gani uliotumika (GPT-4, Claude, au algoriti maalum), ulisanidiwaje (ilani, vigezo vya marekebisho madogo), liliwajibika nini (kizalishaji cha maoni, mwandishi mwenza, mwalimu, mtathmini), na kama wahusika binadamu walibuni au kuyakagua matokeo yake. Hili huwaachilia wagaguzi maswali manne bila majibu — "AI ilikuwa inafanya nini hasa?", "Ilikuwa ni lazima?", "Hii inaweza kurudiwa?", na "Madai ya kujifunza yanaaminika?"

Inaendelea kutoka mantiki ya kielimu hadi ubainishaji wa kiwango cha API, mwingiliano wa mwanafunzi–AI, upatikanaji na ufaafu wa kitamaduni, washiriki na miktadha, ushirikiano wa binadamu, kubuni, maadili, uwazi na urudufu, hadi vikomo. **Ethics and Risk Matrix** wake ya pamoja inashughulikia hatari kwa [[agency]], [[equity-in-ai-education|usawa]] wa mwanafunzi, [[governance]] ya data na uwazi wa algoriti. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah na Gašević (2026)]] wanatoa mbadala rahisi, TEP-AIED, ambao unaunganisha Transparency, Ethics na Pedagogy katika muundo mmoja unaotegemeana, hutoa jedwali la miongozo linalolingana na sehemu saba za karatasi, na unawaomba waandishi kuongeza sehemu ndogo ya Method inayoitwa "Transparency, Ethics, and Pedagogy Considerations" — kwa sababu, kwa mujibu wao, RAISE ni kamili lakini nyembamba kupita kiasi kwa matumizi ya kawaida ya kielimu. Ufichuzi huu unakaa chini ya [[ai-use-disclosure]] na ndicho kinachofanya madai ya [[privacy]] na [[ethics]] kuweza kukaguliwa.

## Amua kama uingiliaji wako ni mbinu au ni bidhaa

Mantiki ya kielimu ni kikoa cha kwanza cha RAISE kwa sababu AI si zana ya upande mmoja: thamani hutegemea upatanifu kati ya tatizo la kujifunza, mantiki ya kinadharia, na ramani kutoka malengo hadi vipimo vya matokeo. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] aligundua kuwa meta-analyses zote isipokuwa mbili zilizokaguliwa zilitangaza matibabu kama zana — ChatGPT, GenAI, "AI" — na kuwa jina la bidhaa si [[pedagogy]]; kuchukulia mwinuko wa ChatGPT kama uingiliaji mmoja wa kawaida kunaweza kulinganishwa na kufanya meta-analysis ya athari za "karatasi." [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] wanatoa hoja ileile kwa masudio ya msingi: kwa kukagua sehemu ya ulinganifu nyuma ya meta-analysis inayoonekana, waligundua **21% tu yalikuwa na matibabu yaliyobainishwa vizuri, kikundi cha kudhibiti, na kipimo halali cha kujifunza**, na ukadiriaji wa athari ulioripotiwa (g = 0.7) ulizidi ule wa [[intelligent-tutoring|mifumo ya ualimu mahiri]] iliyoundwa kwa madhumuni (0.66) — ishara ya onyo kwamba "matibabu" yalikuwa mchanganyiko wa siri wa aina mbalimbali badala ya mbinu iliyotajwa.

Jaribio: je, msomaji mwenye uwezo angeweza kujenga upya uingiliaji wako kutoka sehemu ya method pekee na kupata kitu kile kile?

## Amua kile chombo chako kinachopima na dai linaloweza kusemwa kwa hivyo

Katika ukaguzi wa ushahidi wa O'Neill wa masudio 46 ya msingi yaliyochaguliwa nasibu, **28 (61%) yalionyesha wasiwasi wa uhalali**, na kutokufanana kwa kigezo tegemezi kilikuwa cha kawaida zaidi (n = 15), kikifuatiwa na kutokufanana kwa kigezo huru (n = 11), matatizo ya muundo wa majaribio (n = 7), matatizo ya uchimbaji wa data (n = 6), kutokuwepo kwa kikundi cha kudhibiti (n = 6) na ugawanyaji wa vikundi usio wa nasibu (n = 6). Matokeo ya vipimo vingi kwa kawaida yalikusanywa kana kwamba yanabadilishana — alama za mtihani, ubora wa kazi za nyumbani, [[motivation]], [[self-efficacy]], mitazamo na [[student-engagement|ushirikiano]] vilipooza kwa namba moja ya "mafanikio ya kitaaluma."

Tabia mbili za kuripoti huzuia hili. Tamba ni dhana gani chombo kinachopima na kuwa kilithibitishwa kwa idadi hiyo ya watu: tazama [[self-report-measures]] kwa mahali ambapo vipimo vinavyotegemea mtazamo hutofautiana na tabia, na [[assessment-validity]] kuhusu uhalali wa dhana. Kisha ripoti matokeo yasiyotegemea imani ya mwanafunzi kuhusu msaada, kwa sababu utendaji wa haraka wa kazi chini ya msaada si [[learning-gains|mafanikio ya kujifunza]]: [[verification-quality-reliance-calibration-genai-2026|mapitio madogo ya 2026 ya rekodi 493 na masudio 14 ya kipaumbele]] yaligundua hakuna yaliyopima mafanikio ya uhakiki na uamuzi unaofuata wa kutegemea pamoja dhidi ya kiwango cha ubora wa matokeo kilichohukumiwa kwa njia isiyoegemea upande mmoja, na machache yalichunguza zaidi ya utendaji wa haraka hadi ukumbusho uliochelewa au uhamisho. [[does-ai-help-students-learn|Ushahidi wa kujifunza kwa kudumu]] unabaki mchanganyiko, na [[cognitive-offloading|kupunguza mzigo wa kiakili]] ni mbinu inayoweza zaidi kutenganisha hizi mbili.

## Amua hukumu zako za kiotomatiki zilithibitishwaje

[[ai-ed-evaluation|Tathmini ya AIED]] kwa kiwango kikubwa inawapa mifano wajibu wa kupima alama, ambao hufanya utaratibu wa uthibitishaji kuwa sehemu ya matokeo badala ya kiambatisho. Maelezo ya Khan Academy ya [[intelligent-tutoring|vipimo vya mwalimu wake wa AI]] yanaripoti kuwa ushirikiano wa kiakili hupimwa na [[llm]] judge iliyorekebishwa dhidi ya wataalam wa kielimu wa binadamu kwa F1 0.83, na kuwa mikondo ya kipimo ilitoka majaribio zaidi ya 40 ya moja kwa moja katika miezi mitano badala ya tathmini ya nje ya mtandao ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] wanaonyesha kuwa kutokubaliana kati ya binadamu na mashine kuhusu ubora wa [[formative-assessment|swali la mtihani wa awali]] ni wa mpangilio badala ya nasibu, na kuwa uendeshaji wa rubriki una maana zaidi kuliko kutoa ilani kwa mantiki-ya-kwanza.

Kukubaliana na wawekao kodi wa binadamu si ubora, na kuripoti kana kwamba ni ubora ni lengo la mkaguizi. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] walimwandikisha jaji huru mtaalam seti 855 za kodi za jozi bila ya kujua chanzo, wakipata kukubaliana kati ya binadamu na LLM (wastani wa Jaccard 0.30) chini sana ya kukubaliana kati ya binadamu na binadamu (0.52) huku mthibitishaji asiyejua akipendelea uwekaji wa kodi wa binadamu na wa mashine kwa viwango visivyotofautishika (51.5% dhidi ya 48.5%, p = 0.537). Ripoti lengo la urekebishaji, kiwango cha dhahabu, na nani aliihukumu.

## Amua kama ulinganifu ni sahihi na dai linasafiri mbali kiasi gani

Usawa na wigo hushindwa kwa njia ileile: athari kubwa inamaanisha kidogo kuliko inavyoonekana. Meta-analyses 11 ya 14 zilizokaguliwa hazikuweka kikomo cha watu, hivyo "wanafunzi" yalijumuisha watoto hadi wanafunzi wa madaktari; kozi moja, taasisi, taaluma au nchi moja haitoi ruhusa ya dai la jumla, na matokeo ya zana moja mara chache ya hamia kwa nyingine. Athari za uvumbuzi, muda wa ziada kwenye kazi, na hali ya kulinganisha ambayo ilipata mafunzo ya kawaida badala ya kudhibiti halisi ni maelezo ya kawaida ya athari kubwa — hivyo ripoti kile kudhibiti kilifanya kweli, muda gani kila mkono ulitumia, na zana ilikuwa mpya kiasi gani. Tamba kikomo cha watu pia, kwa sababu athari hutofautiana kati ya vikundi vya wanafunzi na kikomo kisichotangazwa ndicho kinachoruhusu namba moja iliyokusanywa kusimamia kwa yote (tazama [[differential-effects-across-learner-groups|Athari Tofauti Katika Vikundi vya Wanafunzi]]). Chukua zana kama lengo linalohamia pia: mifumo ya wamiliki hubadilika bila taarifa, hivyo matokeo yamefungwa kwa toleo la mfano, na [[benchmark]] iliyoshangaza katika toleo moja inaweza kushindwa kudumu katika inayofuata.

## Amua kile uchanganuzi wako unaweza kusaidia — na ripoti kutokuwa na uhakika wake, si kichwa chake pekee

Kwa miundo ya pamoja, ripoti usimamizi wa athari zinazotegemeana, tofauti kati ya masudio, vipindi vya utabiri na tathmini ya upendeleo wa kuchapisha, si I² pekee. O'Neill aligundua kuwa kutokuwa na upatanifu kuli ripotiwa kulikuwa kikubwa kilipotolewa (I² kutoka 77.2% hadi 94.4% katika meta-analyses 13, 12 zao zikiwa juu ya 80%) na halikutatuliwa kamwe (hakuna uchanganuzi wa mwendeshaji uliofika kiwango cha chini cha vikundi vya masudio kumi), kuwa meta-analyses 12 zilichukua saizi za athari zinazotegemeana kutoka utafiti mmoja kama huru — ikiongeza ushahidi unaoonekana — na kuwa nne tu ziliripoti tofauti kati ya masudio (τ²) na mbili tu kipindi cha utabiri, zote mbili zikiwa zimejumuishwa sifuri. Upendeleo wa kuchapisha haukutathminiwa kwa uhalali popote.

Kwa sababu I² hutegemea usahihi, takwimu ya kutokuwa na upatanifu lazima isafiri na mfano wake: [[limitations-in-aied-research|Limitations in AIEd Research]] inaandika muundo mmoja ambao kutokuwa na upatanifu ni I² = 82.98% chini ya mfano wa athari-thabiti na 15.75% chini ya athari za nasibu, hivyo msomaji anayepewa namba ya kwanza pekee hawezi kuambia mkusanyiko haupatanifu kiasi gani. Ripoti τ² na kipindi cha utabiri pamoja nayo; tazama [[meta-analysis-systematic-review|meta-analysis na mapitio ya kimfumo]] kwa kanuni za upande wa mapitio, na upunguze kichwa cha matokeo ipasavyo — wastani wa Bartoš et al. uliorekebishwa kwa upendeleo ulikuwa SMD = 0.196 na kipindi cha utabiri kutoka −1.521 hadi +1.908, kikiunganisha uharibifu mkubwa na faida kubwa kwa utafiti mpya wa kinadharia.

## Amua utafichua nini kuhusu maadili, gharama, utawala — na matumizi yako ya AI

Mapitio ya karatasi zote za mkutano wa AIED 2025 yaligundua mtindo wa "kuingia kwa LLM bila ufichuzi": miradi mingi ilitumia LLM, lakini chache kuliko kikundi kidogo ziliripoti matumizi ya rasilimali au alama ya kaboni. Karatasi hiyo hutoa mbinu ya chanzo-wazi yenye zana za kupima kwa vifaa vya ndani na vya wingu pamoja na fomula ya kukadiria gharama ya kompyuta ya mifano ya mstari wa mbele ambao idadi ya vigezo haijulikani, na inahoji kuwa kutokuwa na ripoti ya gharama hizi yenyewe ni wasiwasi wa maadili. Ongeza utawala wa data, ridhaa, na upatikanaji/ufaafu wa kitamaduni (vipengele vya RAISE; [[universal-design-for-learning]], [[accessibility]]) — tazama [[equity-ethics-pedagogical-safety-research]] kwa matibabu kamili ya wajibu huu.

Matumizi yako ya AI katika mchakato wa utafiti yanahitaji ufichuzi ule ule. [[prisma-llm-ai-assisted-systematic-reviews-2026|Uchanganuzi wa PRISMA-LLM wa Zabaleta na Lin]] wa karatasi 888 za uendeshaji otomatiki wa mapitio unaonyesha jinsi ripoti hii haipatanifu: kuanzia 2023, **38.0% ya karatasi za programu/bidhaa hazikuripoti tathmini yoyote** (dhidi ya 9.3% ya karatasi za LLM), utajiri wa wastani wa ripoti ulikuwa 6.3 kwa karatasi za LLM dhidi ya 3.3 za karatasi za programu/bidhaa, na 84.1% ya matumizi ya LLM yalitegemea mifumo ya wamiliki au ya mwenyeji na 4.9% tu ya uzito-wazi. Mfumo wao hutenganisha ufichuzi wa utekelezaji kutoka tathmini inayojali matokeo katika viwango vitano vya ufichuzi — kiolezo kinachoweza kutumika kwa kuelezea kile zana ilifanya katika mapitio. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai na Chan (2026)]] wanaongeza picha ya upande wa mwandishi: watafiti 27 kati ya 28 wa ngazi ya juu walitumia GenAI katika kubuni, mapitio ya fasihi, maelezo, usindikaji wa data, programu, [[writing-education|uandishi wa kitaaluma]], uhariri na tafsiri, wakirekebisha matumizi kulingana na hatari na kanuni za taaluma, huku wakibainisha kuwa sera za taasisi zinashughulikia ufundishaji na tathmini badala ya mazoezi ya utafiti.

## Amua nini kufanya na matokeo ya ubatili na marejeo

Denny et al. walithibitisha marejeo 30 yaliyotungwa katika karatasi 14, na idadi iliyothibitishwa katika semina moja ya kiufundi ilipanda kutoka 3 mwaka 2025 hadi 17 mwaka 2026 (2.3% ya karatasi za mchakato wa mwaka huo) — na kuandaa kwa msaada wa LLM hufanya marejeo ya uvumi yanayoweza kuaminika kuwa rahisi kuzalisha. Vyombo vya kulinganisha vyao vina maana unaponukuu ukaguzi huo: marejeo mengi yaliyotiwa alama yalikuwa hatari kidogo — 229 yalikuwa kutokufanana kwa metadata ya ACM ambapo PDF ilikuwa sahihi na 188 yalikuwa matoleo sahihi ya kimaandishi — hivyo idadi ya yaliyotungwa ni kikomo cha chini cha kimakusudi na wengi wasio na madhara si makosa ya kupunguza decimali. Thibitisha kila kiingizo ambacho huwezi kukagua kibinafsi.

Kuripoti matokeo ya ubatili na hasi ni upande mwingine wa sarafu ileile. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] waligundua ushahidi mkubwa wa matokeo ya ubatili yaliyofichwa (kila jaribio la Egger p < .0001) na kutokuwa na upatanifu mkubwa (τ = 0.869), bila kikundi cha matokeo, uwanja, ngazi au jukumu la AI kinachoonyesha mafanikio yanayodumu. Pia waligundua hakuna tofauti kati ya masudio yaliyochapishwa kabla na baada ya Januari 2023, ambayo inadhoofisha dai kwamba zana za kisasa za kizalishaji hasa huzalisha mafanikio.

## Pointi dhaifu za uwanja zilizorekodiwa, katika namba zake wenyewe

Viwango vya msingi ambavyo dai linapaswa kupimwa dhidi yake:

- **Uhalali:** masudio 28 kati ya 46 ya msingi yaliyokaguliwa (61%) yalikuwa na wasiwasi wa uhalali; 21% tu ya ulinganifu yaliyokaguliwa yalikuwa na matibabu yaliyobainishwa vizuri, kikundi cha kudhibiti na kipimo halali.
- **Kutokuwa na upatanifu bila kutatuliwa:** I² kutoka 77.2% hadi 94.4% katika meta-analyses 13, 12 zikiwa juu ya 80%, hakuna uchanganuzi wa mwendeshaji uliofika kiwango cha chini cha masudio kumi, athari zinazotegemeana zilichukuliwa kama huru katika 12, na miundo 4 tu ikitoa τ² dhidi ya miundo 2 tu ikitoa kipindi cha utabiri.
- **Upendeleo wa kuchapisha:** haukutathminiwa katika meta-analyses 14 zilizokaguliwa; kila jaribio la Egger katika mkusanyiko mkubwa lilikuwa na umuhimu (p < .0001), na τ = 0.869.
- **Marejeo:** vitu 30 vilivyotungwa katika karatasi 14, 17 katika semina moja ya 2026 — 2.3% ya mchakato wa mwaka huo.

## Upinzani utakaousikia

**"Wagaguzi wanataka uvumbuzi, si maelezo ya mbinu."** Magazeti yanaelekea kinyume: RAISE na TEP-AIED huwapa wahariri muundo wa kudai, na sehemu ndogo ya Method ya TEP-AIED ni sehemu ya kuingia yenye ukingo mdogo. Maelezo ya mbinu ndicho kinachobadilisha karatasi isiyoweza kutathminiwa kuwa ya kukubalika.

**"Hatuna nafasi."** Viwango vitano vya ufichuzi ni viwango vya ripoti badala ya viwango vya hatari, hivyo kina cha tathmini ya mtiririko kinaweza kuwa sentensi moja au mbili. Toleo, ilani na jukumu zinafaa kwenye aya fupi; gharama na utawala zinafaa katika sentensi ya vikomo.

**"Kila mtu anaripoti hivi."** Hilo ni matokeo, si utetezi — 61% ya masudio ya msingi yaliyokaguliwa yenye wasiwasi wa uhalali, 12 ya meta-analyses 13 juu ya 80% kutokuwa na upatanifu, 38.0% ya karatasi za programu/bidhaa bila tathmini. Kanuni ndio dosari.

**"Zana yetu ni ya wamiliki, hivyo hatuwezi kuripoti mfano."** Ripoti toleo, tarehe ya kupata, usanidi, ilani ulizotoa, jukumu na vizuizi. Kama muuzaji hatasema, kizuizi hicho ni cha vikomo kama kikomo kwa dai.

**"Kuripoti ubatili kutatuumiza."** Ubatili uliofichwa ni mbinu iliyorekodiwa nyuma ya wastani wa SMD = 0.196 uliorekebishwa kwa upendeleo; kuzichapisha ndicho kinachofanya matokeo yako chanya yasomwe.

## Orodha ya kabla ya kuwasilisha

- **Ripoti:** mfano, toleo, usanidi na ilani, na jukumu la AI katika kubuni. **Kagua:** je, unaweza kujenga upya uingiliaji kutoka sehemu ya method pekee?
- **Ripoti:** mantiki ya kielimu na hali ya kulinganisha halisi. **Kagua:** je, matibabu ni mbinu iliyotajwa badala ya jina la bidhaa?
- **Ripoti:** kile kila kipimo kinachochukua, uthibitishaji wake kwa idadi hii ya watu, na matokeo yaliyochelewa au bila msaada. **Kagua:** je, dai la kichwa linafanana na kigezo tegemezi?
- **Ripoti:** nani aliihukumu hukumu za kiotomatiki, dhidi ya kiwango gani cha dhahabu, na kwa kukubaliana kwa kiasi gani. **Kagua:** je, usahihi au kukubaliana kinatumika kana kwamba ni ubora?
- **Ripoti:** usimamizi wa athari zinazotegemeana, τ², vipindi vya utabiri, saizi za vikundi vidogo vya mwendeshaji na tathmini ya upendeleo wa kuchapisha. **Kagua:** je, kutokuwa na upatanifu kinanukuliwa na mfano wake na usahihi wake?
- **Ripoti:** ushirikiano wa binadamu, utawala wa data, ridhaa, upatikanaji na ufaafu wa kitamaduni, pamoja na gharama ya kompyuta na ya mazingira. **Kagua:** je, madai ya maadili yanaungwa mkono na utaratibu ulioelezewa badala ya kanuni zilizotamkwa?
- **Ripoti:** matumizi ya AI ndani ya mchakato wa utafiti, katika tabaka zote tano za ufichuzi. **Kagua:** je, mtiririko wa ukaguizi au uchanganuzi ulitathminiwa kabisa?
- **Ripoti:** matokeo ya ubatili, hasi na yanayopinga pamoja na chanya. **Kagua:** je, saizi ya athari imepunguzwa kwa upendeleo unaowezekana wa kuchapisha?

## Nini kingeiboresha kiwango kweli

Mapema ya fasihi hii ni ya kitaaluma badala ya binafsi. O'Neill anapendekeza uwazi wa data wa lazima kwa meta-analyses — jedwali kamili za saizi za athari, miundo ya utegemezi, τ² na vipindi vya utabiri — pamoja na ukingo mkubwa wa wagaguzi na wahariri na mazoezi ya kufanya kazi ya kurudisha, kwa hoja kwamba kushindwa huu ni mazao ya ukingo ulioshindwa badala ya makosa ya pekee. PRISMA-LLM inapendekeza viwango vitano vya ufichuzi kama viwango vya ripoti badala ya viwango vya hatari, ili kina cha tathmini ya mtiririko wa mapitio litangazwe kwa uwazi; RAISE na TEP-AIED huwapa magazeti muundo wa kudai katika wasilisho. Kwa mazingira yanayohusiana tazama [[research-gaps-aied|pengo linalojulikana katika fasihi ya utafiti]], [[limitations-in-aied-research|Limitations in AIEd Research]], na [[evaluating-ai-interventions-methods|vipimo na mbinu za kutathmini uingiliaji unaohusiana na AI]]. Mapema moja ya gharama ndogo yako kwa waandishi: kila ukurasa wa makala katika hifadhi hii ya maarifa sasa huunganisha utafiti na sehemu ya **What this means for practice** na kwa kawaida sehemu ya **Limitations**, hivyo kuandika karatasi ili zote mbili ziweze kujazwa kwa uwazi — hatua ambayo mtaalamu wa vitendo anaweza kuchukua, na kizuizi juu yake — ni tabia ya kuripoti kiasi kile kama ya kuandika (tazama [[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]]).
