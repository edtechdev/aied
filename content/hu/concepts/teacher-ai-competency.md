---
title: "A tanári MI-kompetencia"
created: "2026-10-27T16:45:08-04:00"
connected_faqs: [faculty-ai-competencies, addressing-common-misconceptions-ai-education, faculty-development-ai]
type: concept
foundations: [ai-literacy, educational-development, teacher-role]
pedagogy: [self-efficacy]
technology: [generative-ai, intelligent-tutoring, llm]
ethics: [equity-in-ai-education]
audience: [faculty developers, learners, instructors]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed, edugems, playlab, teacherserver]
translation_of: "concepts/teacher-ai-competency"
source_updated: "2026-10-26T12:05:00-04:00"
updated: "2026-10-27T16:45:08-04:00"
translation_note: "*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

> **Tanári MI-kompetencia** - az a tudás, készségek és diszpozíciók, amelyekre a tanároknak szükségük van ahhoz, hogy hatékonyan, etikusan és méltányosan integrálják az MI-t a tanításba és a tanulásba. Túlmutat a technikai eszközhasználaton: magában foglalja a [[pedagogy|pedagógiai]] integrációt, az [[assessment|értékelési írástudatosságot]], az etikai ítéletet és azt a magabiztosságot, hogy [[ai-literacy|jól használják az MI-t]]. A tanári MI-kompetencia az [[ai-literacy]] tanári oldali megfelelője, és [[educational-development|szakmai fejlődés]] révén épül. Központi szerepe van abban, hogyan alakul át [[teacher-role|a tanár szerepe]] az MI-vel kiegészített osztálytermekben.

## Megfontolandó kérdések

- Az oldal amellett érvel, hogy a tanár „a döntő tényező” abban, hogy az MI javítja-e a tanulást: az eszközök csak akkor segítenek, ha a tanárok tervezni tudnak velük, támogatni tudják a használatot és értékelni tudják a kimeneteket. Ez megfelel az Ön tapasztalatának, vagy úgy gondolja, hogy maga az eszköz fontosabb a tanárnál?
- A tanári MI-kompetencia átfogja a technikai jártasságot, a pedagógiai integrációt, az értékelési írástudatosságot és az etikai ítéletet. Melyik hiányzik leginkább a tanároknál, és melyiket a legnehezebb kiképezni?
- A [[research-methods-aied|kutatás]] szakadékot dokumentál a tanárok önértékelt és tényleges MI-készsége között. Miért becsülik túl az emberek a felkészültségüket, és mi kellene ahhoz, hogy ezt a rést őszintén bezárják?
- Egy intenzív szakmai fejlődési program nagy növekedést hozott az MI-pedagógiai készségben az idézett kutatásban, ami azt sugallja, hogy a technikai-pedagógiai készség tanítható. Ha ez igaz, miért tűnik mégis olyan sok tanár felkészületlennek: mi áll az útban?
- Ha egy tanár „jól tudja használni az MI-t”, mit jelent Önnek a „jól”, és honnan tudná, hogy egy tanár elérte ezt, nem csak átvette az eszközt?

## Bevezetés

A tanári MI-kompetencia azért fontos, mert a tanár a döntő tényező abban, hogy az MI javítja-e a tanulást. A kutatások következetesen azt mutatják, hogy az MI-eszközök csak akkor válnak jobb eredményekké, ha a tanárok tervezni tudnak velük, támogatni tudják a diákok használatát, értékelni tudják a kimeneteket, és koherens tanításba tudják integrálni őket. A tudásbázis szakirodalma a kompetencia *dimenzióit*, az önészlelés és a tényleges készség közötti *réseket*, valamint az azt felépítő *szakmai fejlődést* vizsgálja.

[[nunez-canal-stakeholder-engagement-ai-competency-2026|Nunez-Canal és mtsai (2026)]] az oktatói MI-kompetenciát közvetlenül a diákeredményekhez kapcsolják: humántőke- és érintettelméletekkel egy üzleti és közgazdasági karokon végzett felmérésre támaszkodva amellett érvelnek, hogy az egyetemek oktatói kompetenciába való befektetése nem diszkrecionális.
- **A promptolási képzés időt ad, nem jobb anyagokat.** Egy 204 tanárral végzett előre regisztrált RCT-ben Appel, Fervers és Piepenburg (2026) szerint a ChatGPT javította az óraelőkészítési anyagok minőségét és 34%-kal csökkentette az előkészítési időt, míg a korábbi MI-képzés további 21%-os időcsökkenést adott anélkül, hogy javította volna az értékelt minőséget ([[appel-genai-teacher-lesson-preparation-experiment-2026|Appel és mtsai, 2026]]). A képzett tanárok hosszabb promptokat írtak és kevesebbet iteráltak; mindkét út egyenlő minőséget ért el.

## A kompetencia alapdimenziói

A tudásbázis kutatása több összefüggő dimenzióban konvergál:

- **Technikai jártasság:** hatékony [[prompt-engineering|promptok]] készítése oktatási célokra, [[ai-ed-evaluation|MI-eszközök értékelése]] pedagógiai illeszkedés és biztonság szempontjából, valamint a hibák valós idejű elhárítása. [[genai-pd-ai-pck-learning-gain-2026|Egy intenzív GenAI szakmai fejlődési program]] jelentős növekedést dokumentált mind az öt AI-PCK komponensben (teljes *d* = 2,36), megmutatva, hogy a technikai-pedagógiai készség tanítható.
- **Az ágens-munkafolyamatok specifikálása:** amikor a tanárok természetes nyelven konfigurálnak egy chatbotot, a domináns hiba nem a téves tény, hanem az elveszett szándék: a botok a végfelhasználói beszélgetések 53,8%-ában kihagyták az előírt munkafolyamat-lépéseket, és 33,4%-ban elhagyták az elvárások beállítását ([[eduwild-teacher-configured-chatbots-failures-2026|Liu és mtsai (2026)]]), így a rendezett, kifejezett lépések írása önállóan tanítható kompetenciadimenzió.
- **A pedagógiai tudás a döntő réteg.** Egy [[k-12|középiskolai]] [[ai-education|MI-oktatást]] vizsgáló, szintek közötti kutatás ([[pedagogy-first-technology-second-teacher-knowledge-2026|46 tanár, 2 832 diák]]) szerint a technikai MI-tudás önmagában elégtelen volt, és akár kissé csökkenthette is a diákok MI társadalmi jóra való alkalmasságáról alkotott észlelését, míg a pedagógiai MI-tudás vezérelte a diákok észlelését és az MI tanulására való szándékukat. A kompetenciakereteknek ezért a pedagógiai MI-tudást kell döntő dimenzióként súlyozniuk, nem puha kiegészítésként.
- **Pedagógiai integráció:** az MI-használat hozzárendelése a tanulási célokhoz, a diákok [[metacognition]] és [[regulation]] képességét támogató [[scaffolding]] tervezése, és az MI beépítése a [[learning-design|tanulástervezésbe]]. [[ai-tpack-teacher-multi-agent-workflow|Az AI-TPACK kutatás]] modellezi, hogyan kombinálják a tanárok a technológiai, pedagógiai és tartalmi tudást több[[agentic-ai|ágenses]] munkafolyamatokon keresztül, míg [[teacher-ai-teaming-five-levels|a tanár-MI együttműködés ötszintű keretrendszere]] (tranzakciós, majd szinergikus) azt ragadja meg, hogyan helyettesítheti, egészítheti ki vagy bővítheti a [[generative-ai|GenAI]] a tanári kompetenciát.
- **Értékelési írástudatosság:** az MI-generált tartalom és a diákok MI-kimeneteinek értékelése, valamint annak megértése, hogyan változik az [[assessment-validity|érvényesség]], amikor a diákok MI-t használnak. Ez az [[automated-assessment]], az [[ai-detection]] és a tágabb [[assessment]] újratervezési napirendhez kapcsolódik. Ajánlórendszerek esetében ez kiterjed annak megítélésére is, hogy egy MI magyarázatai valóban érthetők és pedagógiailag értelmesek-e: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor és mtsai (2025)]] szerint a tanárok jobban bíztak az MI csoportosítási ajánlásaiban, amikor a magyarázatok tantárgyi (tantervi) nyelven voltak megfogalmazva, mint amikor nyers modelljellemzőket tárnak fel: ez az [[explainable-ai|magyarázatminőség]] megkövetelésének és megítélésének készsége, nem az átláthatatlan kimenet elfogadásáé.
- **Modellválasztás és prompttervezés mint kimutatható készségek:** az instrumentális [[ai-literacy]] magában foglalja annak ismeretét, melyik modellt kell használni és hogyan kell megfogalmazni a feladatot. [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen és mtsai (2026)]] 153 tanárjelölt óratervezési céljait bíráltatták a ChatGPT-4-gyel, a Claude 3-mal és a Gemini Advanceddel négy szisztematikusan változtatott prompt mellett (N = 240 visszajelzés az 1. vizsgálatban, 345 a 2. vizsgálatban), a [[feedback]] kilenc minőségi kategórián értékelve. A modellválasztás önmagában a minőség varianciájának 26,9%-át magyarázta (18,4% a 2. vizsgálatban), és a prompttervezés szignifikáns további 15,9%-ot (5,7%) adott hozzá; az egyetlen döntő promptjellemző a területspecifikus szaknyelv volt, amelynek eltávolítása szignifikánsan csökkentette a minőséget (β = -0,412), míg a példák hozzáadása és a gondolatmenet-utasítás elhagyása nem hozott szignifikáns különbséget az 1. vizsgálatban. Olvasatuk szerint (hogy a tantárgyi terminológia egyszerre nyitja meg a releváns tanítóadat-tartalmat és keretezi a kérést szakmai módon, mint a szereppromptolás), valamint az a hüvelykujjszabály, hogy a legképességesebb jelenlegi frontier modellt használják, a modellválasztást didaktikai döntéssé teszi, nem technikaivá.
- **Etikus és kritikai használat:** az MI-kimenetekben rejlő [[bias-mitigation|elfogultság]] felismerése, a diákadatok védelme ([[privacy]]), és a méltányos eredmények biztosítása ([[equity-in-ai-education]]). [[llm-cultural-relevance-k12|A kulturálisan releváns MI-használat]] azt vizsgálja, hogyan használhatják a tanárok az LLM-eket az anyagok diverzifikálására a domináns normák megerősítése helyett.
- **Az etikai felelősség megosztott, nem egyéni.** Hét nemzeti esetben a tanárokat az MI-használat erkölcsi kapuőreiként pozícionálják, miközben hiányzik az intézményi és episztemikus támogatás, így az etikus MI-írástudatosságnak ki kell terjednie a kritikai és politikai cselekvőképességre is, nem csupán a technikai készségre ([[raffaghelli-situated-ai-ethics-2026|Raffaghelli és mtsai (2026)]]).
- **Magabiztosság és attitűdök:** a tanári [[self-efficacy|magabiztosság]] alakítja az átvételt. [[teacher-ai-adoption-confidence|Az átvételi kutatás]] szerint a magabiztosság, a támogatás és az érzékelt hasznosság dönti el, hogy a tanárok ténylegesen használják-e az MI-t, és az [[ai-pedagogical-orientation|oktatói orientációk]] alakítják az átvételt a kutatásban és a tanításban.

- Egy öt országot átfogó, 1 405 K-12 tanárt vizsgáló felmérésben az MI-felkészültség pozitív hiedelmeket jósolt a GenAI oktatási értékéről (B = 0,59, R² = 0,50), mégis *nagyobb* [[creativity]] aggodalmat jósolt (B = 0,18), és ugyanezek a prediktorok az aggodalomnak csak 7%, illetve 6%-át magyarázták: a felkészültség építése önmagában érintetlenül hagyja az aggodalmat ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu és mtsai (2026)]]).


A felkészültséget ennek megfelelően kell rendezni és mérni: a Képesség-Döntés modell a kimutatott MI-képességet az attitűd és a magabiztosság elé helyezi, és teljesítménymutatókat javasol az önbevallás helyett: óravázlattervezési feladatokat, hibákkal feltöltött promptértékelési feladatokat, tartalomérvényességi ítéleteket és osztálytermi artefaktumrubrikákat ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

**Az érzelmi és erkölcsi felkészültség külön dimenzió.** [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]] egy máltai [[higher-ed|egyetem]] akadémiai munkatársait kérdezte meg (109 válaszadó), és négy erkölcsi érzelem-tételből felépített egy MI-bűntudat indexet (α = 0,88), azt találva, hogy az *előzetes* bűntudat nagyobb volt, mint a használat után tapasztalt megbánás: a legerősebb egyetértés az az aggodalom volt, hogy az MI-használat aláássa az ember hitelességét (34,9% értett egyet), majd az, hogy [[academic-integrity|csalásnak]] érzi a használatot (25,7%), míg a használat utáni megbánás csak 9,2%-ot ért el. A kompetenciakeretek szempontjából fontos eredmények: a nem használók *nagyobb* bűntudatról számoltak be, mint a használók (M = 3,25 vs M = 2,32), és a bűntudat csökkent, ahogy a karrierbiztonság nőtt: a pályakezdő akadémikusok jelentették a legtöbbet (M = 2,71), a rangidős akadémikusok a legkevesebbet (M = 2,03). Az érzelmi felkészültséget ezért nem ragadják meg a készség- vagy magabiztosságmérők, és a tanulmány amellett érvel, hogy a kompetenciakereteknek a bűntudatot és az identitásaggodalmat normális átmeneti válasznak kell tekinteniük, nem korrigálandó hibának.

Az újrakeretezés erősebb változata szerint a GenAI küszöbfogalom, nem készséghiány: egy autoetnográfiai beszámoló amellett érvel, hogy az oktatói [[anxiety-and-stress|szorongás]] és ellenállás a küszöbátlépés konstitutív része, így a készségalapú képzés kudarcot vall, és az elvi nem-átvételt tisztelni kell, nem korrigálni ([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]]).

## A kompetenciarés

Egy kulcsfontosságú eredmény a **rés az [[self-report-measures|önbevalláson]] alapuló és a teljesítményalapú kompetencia között**. [[ai-literacy-assessment-misalignment|Az MI-írástudatosság értékeléséről szóló kutatás]] jelentős eltérést dokumentál (akár mintegy 40%-ot) a tanárok *hite* és ténylegesen *bemutatható* képessége között: a MI-készségeikben magabiztos tanároknál gyakran hiányoznak az alapvető promptolási és értékelési képességek. Ez a tanári kompetencia **[[assessment|teljesítményalapú értékelését]]** indokolja az önbevallásra támaszkodás helyett, és a [[self-assessment|kalibrált önértékelés]] fogalmához kapcsolódik. 2 586 nigériai középiskolai tanár országos felmérése külön eszközökkel mérte a két oldalt: mérsékelt MI-tudatosság (M = 3,13 a 8-ból) alacsonyabb MI-pedagógiai készséggel szemben (M = 2,47 az 5-ből), a pályakezdő és középkategóriás tanárok pedig nagyobb készséget jelentettek, mint a tapasztalt kollégáik ([[nigerian-teachers-ai-awareness-pedagogical-skills-2026|Olurinola és mtsai, 2026]]).

**A felkészültség a matematikaoktatási szakirodalom legtöbbet dokumentált akadálya.** 54 matematikaoktatási kutatás áttekintése a technológiai-pedagógiai integrációt és a tanári felkészültséget találta a leggyakrabban jelentett kihívásnak (54-ből 38), megelőzve az értékelés érvényességét és integritását (26) és a túlzott támaszkodást (24) ([[manto-ai-integration-mathematics-education-systematic-review-2026|Manto és mtsai (2026)]]).

A rés nemcsak az észlelt és a tényleges készség között van, hanem abban a *szélességben*, amit a tanárok tudnak: 2 018 ukrán középiskolai pedagógus országos felmérése szerint 84% jelentette, hogy használ MI-t szakmai gyakorlatában, de csak 11% tudott megnevezni egy ChatGPT-n túli speciális MI-szolgáltatást ([[ukraine-ai-literacy-secondary-framework-2026|Marienko, Markova és Semerikov (2026)]]). Egy második szűkösség abban mutatkozik meg, amit a tanárok önként felajánlanak, nem abban, amit meg tudnak nevezni: 53 gyakorló tanár, aki saját osztálytermi eseteit címkézte az OECD MI-írástudatossági keretrendszer szerint, 43 MI-írástudatos gyakorlatot és csak 10 kudarcot írt le ([[ailithub-ai-literacy-case-infrastructure-2026|Wang és mtsai, 2026]]). Kompetenciaválasztásaik a gyakorlati ítélet körül csoportosultak (MI-kimenetek értékelése, N = 38), és ritkán érték el a társadalmi elfogultságot (N = 5), az etikai illeszkedést (N = 6) vagy az MI energiafelhasználását (N = 9).

Egy indonéz, 132 tanárt vizsgáló felmérés szinte egyetemes elfogadást talált vékony mechanisztikus megértés mellett: 96,2% támogatta a tanárok MI-használatát, mégis csak 4,6% nevezte meg a tokenizálást vagy a dekódolást, és 21,5% hitte azt, hogy a ChatGPT adatbázisban vagy az interneten keres ([[ai-misconceptions-indonesian-k12-teachers-2026|Aji és mtsai (2026)]]). A kedvező attitűd nem bizonyítéka az eszköz működő mentális modelljének.

A rés az artefaktumban is látható, nem csak az önbevallásban. Egy [[ai-integration-instructional-design-collaboratory-2026|tanárképzési, intézményközi oktatói kollaboratóriumban]], ahol a tanárképzők saját módszertani kurzusaikba tervezték be az MI-t, a jelöltek kifogástalan MI-támogatott óravázlatokat tudtak készíteni, miközben nem tudták elmagyarázni, miért illik a terv a tanulókhoz és a standardokhoz, mivel a terv maga semmit nem mond a mögötte álló érvelésről. Az indoklás osztályozása a produktum helyett az egyik válasz. A [[bondurant-shaughnessy-ai-pedagogies-practice-2026|gyakorlat pedagógiáinak kerete]] egy másikat sugall, a próbát a gyakorlat közelítéseként kezelve: az MI-közvetített próba strukturált próba utáni visszajelzéssel növelte a jelöltek kutakodó és felfedező kérdéseinek használatát, mégis a jelöltek saját teljesítményítéletei eltértek attól, amit a megfigyelők rögzítettek.

**A képzés utáni csökkenő önértékelés a tanulás, nem a veszteség jele lehet.** Egy hat hónapos [[tpack|Intelligens-TPACK]] [[educational-development|szakmai fejlődési]] programban 64 hongkongi egyetemi tanárral 61 kontroll mellett az összesített MI-kompetencia mintegy fél szórással nőtt (Cohen d = -0,521), mégis néhány tanár mindkét csoportban alacsonyabb pontszámot ért el a záró mérésen, mint a belépőn ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng és Ling, 2025]]). Az interjúk a csökkenést a tudattalan inkompetenciából a tudatos inkompetenciába való elmozdulással magyarázták (a Dunning-Kruger hatás által előre jelzett újrakalibrálódás), nem elveszett készséggel. A szerzők arra következtetnek, hogy a bemeneti-kimeneti önbevallás alábecsüli a beavatkozást, mert a nyereség egy része magában az eszközben való lefelé korrekcióként érkezik.

**A rés a nem-részvételben is megjelenik.** [[watson-rainie-ai-challenge-faculty-survey-2026|Watson és Rainie (2026)]] 1 057 amerikai főiskolai oktatót kérdeztek meg 2025 végén, és 26% egyáltalán nem használt [[generative-ai|generatív MI]] eszközöket, egyharmaduk választotta, hogy nem használja őket tanításhoz, a nem-használat pedig a művészetekre és a [[humanities-education|humántudományokra]] összpontosult (40%). A rés intézményi oldala nagyobb volt az egyéni oldalnál: 68% mondta, hogy iskolája nem készítette fel az oktatókat a generatív MI tanításban és mentorálásban való használatára, és az oktatók a kollégák ellenállását (82%) és járatlanságát (83%) nevezték meg a tanszéki átvétel vezető akadályaként: olyan kép, amelyben a kapacitásépítésnek, a társnormáknak és a szabályzatnak együtt kell mozdulnia.

**A tanárképzés nagyrészt megkerüli a kompetencia etikai dimenzióját.** A MI tanárképzésben való alkalmazásáról szóló [[meta-analysis-systematic-review|szisztematikus áttekintés]] a leendő általános iskolai matematikatanárok alapképzésében ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto és mtsai 2026]], 341 rekordból 11 kiválasztott kutatás) azt találta, hogy a beavatkozások a rövid távú technikai és pedagógiai nyereségre összpontosítottak (tizenegyből kilenc rövid, egy-hat alkalmas beavatkozás volt), és arról számolt be, hogy az etikával csak a tizenegy kutatás közül háromban foglalkoztak. A kompetenciakeretek az etikai ítéletet dimenzióként nevezik meg; az alapképzési szakirodalom, amelynek fel kellene építenie, ritkán tanítja vagy méri.

- **Hét kompetenciaklaszter, az etika a leggyengébb láncszem.** 78 kutatás tematikus szintézise klasztereket ad a prompttervezésre, az MI-kimenetek kritikai értékelésére, az etikai tudatosságra és elfogultságfelismerésre, a pedagógiai-tartalmi illeszkedésre, a fogalmi MI-írástudatosságra, az emberi felügyeletre és a reflexióra. A prompttervezés volt a legkövetkezetesebben dokumentált, és **fejlődési spektrumként** viselkedik, nem egyetlen készségként, ami miatt a bírálók amellett érvelnek, hogy legjobban új médiumon keresztül folytatott pedagógiai érvelésként érthető meg: a prompt mint externalizált tervezési döntés. Az etikai tudatosság volt a **leggyengébben dokumentált kompetencia** az alapképzési kutatásokban ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou és Kameas, 2026]]).
- **A tanárok túlbecsülik saját értékelési készségüket.** Azon túl, hogy csak **az MI-generált tanulási célok 38,3%-a felelt meg minden minőségi kritériumnak átdolgozás nélkül**, a tanárjelöltek **szisztematikusan túlbecsülik a chatbot-kimenet értékelésére való képességüket**, amit a bírálók lehetséges perceptuális, nem deklaratív hiányként olvasnak. Ezért érvelnek amellett, hogy a kompetenciát teljesítményartefaktumokon (óravázlatok, döntési naplók, mikrotanítás) keresztül kell értékelni az önbevallás helyett: az önértékelés megbízhatatlanságát éppen az a szakirodalom bizonyítja, amelyet a képzésnek kezelnie kellene.

## Működő szakmai fejlődés

A tudásbázis szakmai fejlődési szakirodalma hatékony megközelítéseket azonosít:

- **Intenzív, elméletileg megalapozott programok:** [[genai-pd-ai-pck-learning-gain-2026|Egy intenzív GenAI szakmai fejlődési program]] 163 tanárral és tanárjelölttel szignifikáns növekedést hozott minden AI-PCK komponensben, a tanárjelöltek profitáltak a legjobban. Az [[teacher-education-ai-literacy-sdt-2026|önrendelkezés-elméleten alapuló szakmai fejlődés]] megmutatja, hogy a szükséglet-támogató képzés javítja a tanárok MI-írástudatosságát, attitűdjeit és [[student-engagement|elköteleződését]], miközben csökkenti a szorongást.
- **[[design-based-research|Tervezésalapú]] és integrált megközelítések:** a [[genai-literacy-training-teacher-education-dbr-2026|DBR-alapú GenAI-írástudatossági képzés]] kezeli a technikai tudás és a GenAI előtti eszközök túlhangsúlyozását; az [[rail-ed-genai-literacy-teacher-education|integratív, fejlődési keretrendszerek]] és a [[sec-ai-literacy-narrative-review-2026|szocio-emocionális kompetenciaintegráció]] a tiszta technikán túlra szélesítik az írástudatosságot.
- **Vizsgálódás és autentikus gyakorlat:** az [[quest-ai-inquiry-preservice-teachers|MI-támogatott vizsgálódási modellek]] MI-írástudatosságot és autentikus teljesítményt építenek a tanárjelöltekben.
- **Kontextusspecifikus felkészültség:** a [[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI felkészültségi keretrendszer]] hangsúlyozza, hogy az oktatói felkészültség szociotechnikai kérdés, amely az oktatói kapacitás, a [[governance]] és a minőségbiztosítás összehangolását igényli.
- **A támogatást tapasztalat és MI-jártasság szerint kell differenciálni.** [[choi-teacher-ai-interaction-lesson-design-2026|Choi és mtsai (2026)]] szerint az, hogyan interaktálnak a tanárok ténylegesen az MI-vel az óravázlattervezésben, a tanítási tapasztalat és az MI-jártasság *kölcsönhatásától* függ, nem bármelyiktől önmagában. A magas MI-jártasságú tapasztalt tanárok kritikusan adaptálják az MI-kimenetet a kontextushoz (újrapromptolás, részletezés), míg a novíciusok (még a technikailag folyékonyak is) hajlamosak közvetlenül elfogadni az MI-válaszokat, és ritkán veszik figyelembe a diákokat és a kontextust. Ez profilalapú szakmai fejlődést indokol: válaszértékelési ellenőrzőlistákat és promptmintákat a novíciusoknak, gyakorlatias készségépítést az alacsonyabb MI-jártasságú tapasztalt tanároknak.
- **Az időnyereség maga a tapasztalatot és a magabiztosságot követi, nem csak a támogatás tervezését.** [[roy-aila-lesson-planning-teacher-choices-2026|Roy és mtsai (2026)]] MI-óraasszisztens kísérletében a munkaterhelés-csökkenés nagyobb volt azoknál a tanároknál, akiknek alacsonyabb volt a tantárgyi tudásukba vetett magabiztosságuk, alacsonyabb a pedagógiai tudásuk, kevesebb időt töltöttek a szakmában, vagy magasabb a technológiába vetett magabiztosságuk. A jártasság és a magabiztosság ezért a beavatkozás hatásának részét képezik, nem csak az átvételének.


A hiedelemkonfiguráció egy második profiltengely: a TALIS 2024-ben részt vevő 40 680 tanár között ugyanaz a nem-használati státusz ellentétes akadályokat takart: a Közömbös profil 83,3%-a pedagógiai fenntartásokat említett, míg a Mértéktartó támogatás 66,2%-a elégtelen tudást és készségeket ([[teachers-ai-belief-profiles-talis-2024-2026|Fang és Jin (2026)]]). Az MI-vel kapcsolatos szakmai tanulás következetesebben követte a profiltagságot, mint az életkor vagy a végzettség.

- **A tanároknak nincs egyetlen MI-fogalmuk.** 16 dán felsőoktatási tanár fenomenográfiai vizsgálata három tanítási-MI és három tanulási-MI felfogást talált, így egyetlen műhelymodell bármely oktatói csoportnak csak egy részét éri el ([[stenalt-good-education-teacher-ai-conceptions-2026|Stenalt (2026)]]).
- **A közös tervezés és a pedagógiai promptírástudatosság kompetenciák, nem kiegészítések.** A tanár-MI közös feladattervezés [[meta-analysis-systematic-review|szisztematikus áttekintése]] ([[wang-teacher-ai-co-design-review-2026|Wang, Liu és Islam 2026]], 28 kutatás) szerint a domináns együttműködési mód az MI mint asszisztens és tartalomgenerátor, és hiányt talál a tanárok teljesebb közös tervezési és dialogikus partnerségi kapacitásaiban. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] megmutatja, hogy az a szakmai fejlődés, amely a technikai MI-képzést pedagógiai érveléssel párosítja (felépítve a „pedagógiai promptírástudatosságot”, a [[tpack|PCK]] promptokba kódolását), az, ami lehetővé teszi a tanároknak, hogy az MI-kimenetet hatékony, [[collaborative-learning|differenciált csoporttevékenységekké]] alakítsák.
- **Kompetenciát építő struktúrák, nem annak listái.** [[physics-faculty-learning-community-ai-2026|Perl-Nussbaum és Finkelstein (2026)]] egy hat alkalmas, kéthetenkénti oktatói tanulóközösséget vezetett egy nagy állami R1 fizika tanszéken (tizenkilenc oktató a sorozat alatt, alkalmanként mintegy tíz), ahol minden alkalom helyi adatokkal nyitott, kis csoportos MI-tesztelésbe ment át valódi, anonimizált diákházi feladatokon, és kollektív megbeszéléssel zárult, és öt bejegyzésű közös tárhelyet hozott létre, nem képzési csomagot. Az értékelési írástudatosság ugyanígy építhető tervezőeszközzel: [[authentic-assessments-generative-ai-pilot-2026|Paula és mtsai (2026)]] kísérletében nyolc tapasztalt STEM- és egészségügyi kurzuskoordinátor növelte értékelési írástudatosságát azzal, hogy egy egyedi GPT értékelési vázlatait tantárgyi standardokhoz mérten kritizálták, noha a kimenetek ismételten elvétették a tantárgyi kontextust, figyelmen kívül hagyták a témasorrendet, és egy esetben ismételt promptolás mellett is kitalált hivatkozásokat hordoztak. Mind a nyolcan maguknál tartották az [[evaluative-judgment|akadémiai ítéletet]], és elutasították a végponttól végpontig tartó automatizálást, ami a generált vázlatok strukturált kritikáját teszi a fejlődés mechanizmusává, nem az eszközképzést.
- **A rövid alkalmak mozgathatják az elfogadást anélkül, hogy mozgatnák az átvételt.** [[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller és Böhme (2026)]] egy háromórás INSIGHT alkalmat értékeltek 100 német tanárral, és azt találták, hogy az érzékelt hasznosság és a [[technology-acceptance-model|észlelt használhatóság]] egyaránt szignifikánsan nőtt (hasznosság t(99) = -3,24, p = 0,002, d = 0,32; használhatóság d = 0,25), míg a MI-alapú technológiák differenciálásra való használatának viselkedési szándéka nem változott. A szerzők megjegyzik, hogy kiindulási értékeik már kedvezőek voltak, így plafonhatás valószínű. A szakmai fejlődés tervezésére vonatkozó olvasat szűk, de hasznos: egy rövid alkalom megváltoztathatja, hogyan ítélik meg a tanárok az MI-eszközöket, anélkül hogy megváltoztatná, tervezik-e használni őket, ami olyan változás, amelynek utánkövetést igényel, nem egyszeri eseményt.

- **Az oktatók a folyékonyságot részesítik előnyben, de a tanulást a támogatásnak tulajdonítják.** 41 oktató között egy GPT-4o alapvonalat összességében előnyben részesítettek (21 vs 13), mégis a finomhangolt háromlépéses modellnek (azonosítás, felfedezés, fejlesztés) tulajdonították gyakrabban a tanulást (18 vs 13), és a két ítélet csak az esetek 39%-ában egyezett ([[teachingcoach-chatbot-instructor-guidance|Molnar és mtsai (2026)]]).
- **Intézményi támogatás:** a [[educational-development|szakmai fejlődést]] intézményi infrastruktúrával kell párosítani ([[educational-policy-ai|szabályzat]], [[institutional-change-framework-ai|intézményi változás]]) a fenntartható átvételhez.
- **A szerzőeszközök nem garantálják a pedagógiai hűséget.** [[teachers-configure-educational-chatbots-2026|Riahi és mtsai (2026)]] 27 középiskolai tanárt vizsgáltak, akik oktatási [[conversational-ai|chatbotokat]] konfiguráltak szakmai fejlődési műhelyeken, fókuszcsoportokat elemezve a konfigurációs és interakciós naplók mellett. A tanárok a chatbotot tanár által meghatározott szabályokkal korlátozott oktatási támogatásként kezelték, mégis a szándék és a viselkedés közötti naplóalapú illeszkedés erősebb volt a reagálékonyságnál (88,9%) és a személyiségnél (81,5%), mint a szabályoknál (70,4%) és a célnál (59,3%). A konfigurálható vezérlők önmagukban nem viszik át a pedagógiai szándékot a viselkedésbe, így egy chatbot pedagógiájának kifejezése, tesztelése és finomítása maga is kompetencia, amelyet a szerzőeszközöknek támogatniuk kell.


Egy tervezésalapú ellenpélda a kompetenciát helyzetfüggőnek tekinti, nem egy létra fokának. [[adaptive-ai-model-teacher-educators-2025|Eyal 2025-es tervezésalapú kutatása 22 felsőoktatási tanárképzővel]] arra kérte a résztvevőket, hogy vizsgáljanak meg öt publikált értékelési keretrendszert, és tervezzenek közösen egy alternatívát három összefüggő tengely köré szervezve: kontextusilleszkedés (infrastruktúra, szocio-kulturális tényezők, helyi szükségletek, fejlődési szakasz), szakmai szükségletek (tudományterület, pedagógia, vezetés, támogatás) és dinamikus fejlődés. A modell elutasítja a rögzített kompetenciaszinteket, és nemlineáris előrehaladást enged, és egy 20 tételes reflektív önértékelési kérdőívvel jár, 1-től 5-ig értékelve. Érvényesítése csak [[qualitative-research|kvalitatív]], [[quantitative-research|kvantitatív]] megbízhatósági tesztelés nélkül, így tervezési hozzájárulásként áll, nem validált eszközként.
- **Metaanalitikus becslés.** [[teacher-ai-literacy-professional-development-meta-2026|Guo és mtsai (2026)]] 34 kutatás 212 hatásméretét összegezték, és a tanári MI-írástudatossági szakmai fejlődést g = 0,76-ra becsülik (95% CI [0,50, 1,02]), legerősebben a készségeknél (g = 0,91), leggyengébben az attitűdöknél és értékeknél (g = 0,61); a látszólagos publikációs szelekció korrigálása a becslést mintegy g = 0,49-re csökkenti.

- **A részvétel előre jelzi a nyereséget ott, ahol a részvétel érzése nem.** Ugyanabban a hat hónapos programban a részvételi arány előre jelezte a kompetencianyereséget (β = 0,407, p = 0,001), míg az önészlelt részvétel nem (β = 0,049, p = 0,692), és a tudományterület, a tanítási tapasztalat és a szakmai cím keveset magyarázott; a szerzők a részvételt viselkedési befektetésként, az észlelt részvételt felszíni elköteleződésként olvassák ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng és Ling, 2025]]).

- **Az értékek egy területspecifikus programban is lemaradnak a készségektől.** Egy egyéves hongkongi programban 30 angoltanárral a [[multimodal]] értékelési stratégiák ismerete 3,13-ról 4,15-re nőtt az 5-ből (részleges η² = 0,571), a diákok támogatásában való kompetencia 3,05-ről 3,98-ra (0,482), mindkettő szignifikáns, míg minden érték-alterület statisztikailag lapos maradt a Bonferroni-korrigált 0,006-os alfa mellett. A tanárok a nyereséget az iskolán belüli közös tervezésnek és az iskolák közötti klasztertalálkozóknak tulajdonították, nem csupán a műhelyeknek ([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang és mtsai, 2026]]).

- **A mikro-tanulás fejlesztheti az egyetemi tanárok MI-kompetenciáját.** [[microlearning-ai-modules-vocational-teacher-education-2026|Cechovsky (2026)]] két [[vocational-education]] modult finomított két online csoportos megbeszélésen át öt tervezési elvvé (világos szerkezet és orientáció, útmutatás és navigációs támogatás, szegmentálás és modularizálás, multimodális bemutatás, tanulói aktiválás), és a platformnavigációt és a modulok megtalálását találta a fő gyakorlati akadályoknak.

## Tanári MI-kompetencia és az átalakuló tanárszerep

Ahogy az MI átveszi a rutin oktatási és értékelési feladatokat, a tanár megkülönböztető hozzájárulása az orkesztráció, az ítélet és a kapcsolat felé tolódik: eldönteni, mikor és hogyan használják az MI-t, támogatni a [[agency|diákok cselekvőképességét]] és kritikai használatát, biztosítani az esélyegyenlőséget, és nyújtani azt a társas és érzelmi támogatást, amelyet az MI nem tud. Ez a tanári kompetenciát a [[human-in-the-loop-ai|ember a hurokban]] felügyelet, az [[ethics|etikai ítélet]] és a [[self-regulated-learning|önszabályozó tanulás támogatása]] körül keretezi újra, összekapcsolva a [[teacher-role]] és a [[cognitive-offloading|túlzott támaszkodás elleni védelem]] fogalmaival.

## Az MI-oktatás következményei

- **Teljesítményt értékeljenek, ne csak önbevallást:** a tanári kompetenciát bemutatáson keresztül kell értékelni, a dokumentált önbevallási rés miatt.
- **A teljes kompetenciát képezzék, ne csak az eszközöket:** a szakmai fejlődésnek a technikai, pedagógiai, értékelési és etikai dimenziókat együtt kell építenie, [[learning-theories|tanuláselméleti]] megalapozással.
- **A készség mellett magabiztosságot is építsenek:** az attitűdök és az [[self-efficacy]] alakítják az átvételt, így a szakmai fejlődésnek csökkentenie kell a szorongást és magabiztosságot kell építenie autentikus, támogatott gyakorlaton keresztül.
- **Támogassák az intézményi réteget:** a fenntartható tanári kompetencia összehangolt szabályzatot, irányítást és kapacitást igényel, nem elszigetelt képzést.

- **A tanári digitális kompetencia a GenAI [[curriculum-design|tantervtervezésében]].** [[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez (2026)]] validálnak egy TAM-alapú diagnosztikai eszközt 434 gyakorló tanárral; a viselkedési szándék volt a digitális kompetencia fő prediktora a GenAI tantervtervezésben való használatához, az önhatékonyság gyökérhajtóerővel.
### Pszichometriai eszköz a tanári MI-kompetencia mérésére

- Egy pszichometriai tanulmány kifejlesztette a Teachers' AI Literacy Scale (TAILS) eszközt, hogy kifejezetten a [[teacher-education|nyelvtanárképzésben]] mérje az MI-írástudatosságot, operacionalizálva az ED-AI keretrendszer hat dimenzióját. Az eszköz kidolgozása pótol egy hiányt azokban az értékelésekben, amelyek diákokat vagy általános felhasználókat céloznak, támogatva a tanári MI-kompetencia mérését.

Az eszközök világát azóta áttekintették. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore és Maat 2026-os szisztematikus áttekintése a tanári MI-írástudatosság mérőeszközeiről]] 33, 2019 és 2025 között publikált eszközt értékelt, és módszertanilag monotonnak találta a területet: 31 (93,9%) önbevallási skála az észlelt magabiztosságról, csak kettő (6,1%) teszteli objektíven a tudást, és egyik sem használ teljesítményalapú feladatokat. A belső konzisztencia volt a legerősebb minőségi terület (33-ból 28 A osztályú), és a méltányosság a leggyengébb, öt eszköz (15,2%) jelentett mérési invarianciát vagy differenciális tételműködési bizonyítékot. A tartalom is lemarad a technológiától, mivel 29 eszköz (87,9%) általános MI-fogalmakat céloz, és csak négy (12,1%), mind 2025-ből, foglalkozik a generatív MI-vel.

## Gyakori tévhitek

- **„A promptolási képzés jobb anyagokat ad a tanároknak.”** **A promptolási képzés időt ad, nem jobb anyagokat:** egy **204 tanárral végzett előre regisztrált RCT-ben** Appel, Fervers és Piepenburg (2026) szerint a ChatGPT javította az **eltöltött időt**, míg az anyag minősége nem követte. A hatékonysági nyereség valós, és nem a minőségi nyereség.
- **„Amikor a tanárok chatbotot konfigurálnak, a hiba ténybeli tévedés.”** **Amikor a tanárok természetes nyelven konfigurálnak chatbotot, a domináns hiba az elveszett szándék, nem a téves tény:** a botok **kihagyják** a lépést, amelyet a tanár szánt. Az utasításkövetés szerkezetileg, nem ténybelileg vall kudarcot.
- **„A technikai készség a döntő réteg.”** **A pedagógiai tudás a döntő réteg:** egy középiskolai [[ai-education|MI-oktatást]] vizsgáló, szintek közötti kutatás [[pedagogy-first-technology-second-teacher-knowledge-2026|Shen és mtsai, 2026]]. A kimenetet meghatározó kompetencia az, amelybe a legtöbb képzési program a legkevesebbet fektet.
## Kapcsolódó fogalmak

- [[ai-literacy]]
- [[educational-development]]
- [[teacher-role]]
- [[prompt-engineering]]
- [[learning-design]]
- [[scaffolding]]
- [[metacognition]]
- [[assessment-validity]]
- [[equity-in-ai-education]]
- [[ethics]]
- [[self-efficacy]]
- [[human-in-the-loop-ai]]
- [[agency]]
- [[cognitive-offloading]]
- [[educational-policy-ai]]
- [[ai-education]]
- [[tpack]]
- [[teacher-education]]
- [[pedagogy]] - Esernyő: pedagógiák és tanítási stratégiák az MI-oktatásban

## Kapcsolódó cikkek

- [[roy-aila-lesson-planning-teacher-choices-2026]] - Mely tanárok nyertek tervezési időt: alacsonyabb tantárgyi tudás-magabiztosság, alacsonyabb pedagógiai tudás, újabb a szakmában vagy magas technológiai magabiztosság
- [[ai-misconceptions-indonesian-k12-teachers-2026]] - A tanárok elfogadják az MI-t, miközben félreértik a működését (Aji és mtsai 2026)
- [[manto-ai-integration-mathematics-education-systematic-review-2026]] - A tanári felkészültség és a technológiai-pedagógiai integráció mint a leggyakrabban jelentett kihívás 54 matematikaoktatási kutatásban (Manto és mtsai 2026)
- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] - Multimodális értékelési írástudatosság: egy egyéves program, ahol a tudás és a kompetencia mozdult, az értékek nem
- [[teacher-ai-literacy-professional-development-meta-2026]]
- [[intelligent-tpack-pd-intervention-hongkong-2025]] - Intelligens-TPACK szakmai fejlődés: fél szórásnyi nyereség, és negatív nyereségek, amelyek újrakalibrálódásként olvashatók. A szakmai fejlődési programok hatása a K-12 tanárok MI-írástudatosságára: szisztematikus áttekintés és metaanalízis

- [[ailithub-ai-literacy-case-infrastructure-2026]] - A tanárok saját osztálytermi MI-eseteiket címkézték, és könnyen elérték a gyakorlati kompetenciákat, a társadalmiakat és etikaiakat viszont ritkán (Wang és mtsai 2026)
- [[typology-generative-ai-tools-education-2026]] - Az eszközválasztás mint az oktatói cselekvőképesség gyakorlása
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] - A generatív MI szisztematikus áttekintése a K-12 tanításban és tanulásban (Marzano 2026)
- [[pedagogy-first-technology-second-teacher-knowledge-2026]] - A tanári szaktudás a K-12 MI-oktatásban: TAIK kontra TPAIK és a diákok tanulása (Shen és mtsai 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] - Tanár-MI interakciós minták az óravázlattervezésben tapasztalat és MI-jártasság szerint (Choi és mtsai 2026)
- [[preservice-teachers-responsible-genai-2026]] - A tanárjelöltek felelős GenAI-használata: tantervi következmények (Kohnke és mtsai 2026)
- [[melo-llm-classroom-observation-teach-2026]] - LLM-alapú osztálytermi megfigyelés a tanárok szakmai fejlődéséhez (Melo és mtsai 2026)
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]] - Generatív MI reprezentációkon, dekompozíciókon és közelítéseken át: próba, strukturált visszajelzés és a pontossági figyelmeztetések
- [[genai-pd-ai-pck-learning-gain-2026]] - Egy intenzív GenAI szakmai fejlődési program hatékonysága
- [[ai-tpack-teacher-multi-agent-workflow]] - Az AI-TPACK modellezése tanári többágenses munkafolyamatokon keresztül
- [[teacher-ai-teaming-five-levels]] - A szinergikus tanár-MI interakciók felé
- [[teacher-education-ai-literacy-sdt-2026]] - Tanárképzés az MI-írástudatosságért az önrendelkezés elméletén keresztül
- [[genai-literacy-training-teacher-education-dbr-2026]] - Tervezésalapú kutatású GenAI-írástudatossági képzés
- [[rail-ed-genai-literacy-teacher-education]] - A GenAI-írástudatosság újragondolása a tanárképzésben
- [[sec-ai-literacy-narrative-review-2026]] - A szocio-emocionális kompetenciák integrálása az MI-írástudatossággal
- [[teacher-ai-adoption-confidence]] - MI-átvétel a tanárok körében: magabiztosság és támogatás
- [[ai-pedagogical-orientation]] - Az oktatói orientációk alakítják az MI-átvételt
- [[ai-literacy-assessment-misalignment]] - Az önbevalláson alapuló és a teljesítményalapú MI-kompetencia közötti eltérés
- [[quest-ai-inquiry-preservice-teachers]] - MI-támogatott vizsgálódás tanárjelölteknek
- [[sangwa-epiq-ai-faculty-readiness-2026]] - EPIQ-AI oktatói felkészültségi keretrendszer
- [[llm-cultural-relevance-k12]] - LLM-ek kulturálisan releváns K-12 pedagógiához
- [[institutional-change-framework-ai]] - Intézményi változási keretrendszer az MI-hez
- [[teachingcoach-chatbot-instructor-guidance]] - TeachingCoach chatbot oktatói útmutatáshoz
- [[laidlaw-genai-identity-crisis-faculty-2026]] - A GenAI mint identitásválság, nem készséghiány
- [[raffaghelli-situated-ai-ethics-2026]]
- [[guillen-curriculum-genai-teacher-competence-2026]] - A tanári digitális kompetencia értékelése a GenAI tantervtervezéshez (Guillén-Gámez 2026)
- [[stenalt-good-education-teacher-ai-conceptions-2026]] - fenomenográfiai vizsgálat az egyetemi tanárok MI-felfogásairól
- [[ukraine-ai-literacy-secondary-framework-2026]] - Ötszintű MI-írástudatossági keretrendszer és szakmai fejlődés ukrán középiskolai pedagógusoknak (Marienko és mtsai 2026)
- [[wang-teacher-ai-co-design-review-2026]] - A tanár-MI közös tervezése a tanulási feladatoknak: irányzatok és perspektívák (Wang és mtsai 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] - A szerepek architektúrája az MI által tervezett differenciált csoporttevékenységekben (Talebzadeh 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] - A prompttervezés és a modellválasztás mint az MI-visszajelzés minőségének prediktorai (Jacobsen és mtsai 2026)
- [[vassallo-ai-guilt-complex-faculty-2026]] - Az MI-bűntudat komplexum: előzetes bűntudat és négy erkölcsi válaszprofil az akadémiai munkatársak körében (Vassallo 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] - Egy háromórás tanári szakmai fejlődési alkalom növelte az észlelt hasznosságot és használhatóságot, de nem a kimondott átvételi szándékot (Mesenhöller és Böhme 2026)
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] - A MI szisztematikus áttekintése a leendő általános iskolai matematikatanárok képzésében: az etikával csak tizenegyből három kutatásban foglalkoztak (Pinto és mtsai 2026)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] - AAC&U/Elon felmérés 1 057 amerikai oktatóval: felkészültség, nem-használat és az egyéni kontra intézményi szabályzati rés (Watson és Rainie 2026)
- [[ai-integration-instructional-design-collaboratory-2026]] - Intézményközi oktatói kollaboratórium: az MI-integráció mint tanulástervezés a tanárképzésben
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] - 33 eszköz szisztematikus áttekintése a tanári MI-írástudatosság mérésére: 31 önbevallás, két objektív tudásteszt, teljesítményfeladat nélkül (Zainal, Mohd Matore és Maat 2026)
- [[adaptive-ai-model-teacher-educators-2025]] - Tervezésalapú adaptív MI-írástudatossági modell és 20 tételes reflektív kérdőív 22 tanárképzővel közösen tervezve (Eyal 2025)
- [[physics-faculty-learning-community-ai-2026]] - Műhelysorozat az MI hatékony használatáért bizonytalan időkben: fizikai oktatói tanulóközösség építése
- [[authentic-assessments-generative-ai-pilot-2026]] - Autentikus értékelések tervezése generatív MI-vel: az Assessment Authentifire kísérleti vizsgálata a felsőoktatásban
- [[teachers-configure-educational-chatbots-2026]] - Úgy fog tanítani, ahogy szánták? Hogyan konfigurálják a tanárok az oktatási MI-chatbotokat
- [[capability-decision-model-teacher-readiness-2026]] - Rendezett, képességközpontú tanári felkészültségi modell teljesítményalapú képességmutatókkal
- [[k12-teachers-genai-beliefs-five-countries-2026]] - Öt országot átfogó felmérés 1 405 K-12 tanárral: a felkészültség pozitív hiedelmeket jelez, de nem az aggodalmat
- [[teachers-ai-belief-profiles-talis-2024-2026]] - Négy TALIS 2024-es tanári hiedelemprofil összekapcsolja a szakmai tanulást és a profilspecifikus MI-használati akadályokat
- [[microlearning-ai-modules-vocational-teacher-education-2026]] - MI-mikrotanulási modulok tervezése egyetemi tanároknak a szakképzési tanárképzésben: tervezésalapú kutatás
- [[eduwild-teacher-configured-chatbots-failures-2026]] - EduWild: hogyan vallanak kudarcot a tanárok által konfigurált chatbotok a valós használatban, és hogyan lehet javítani őket
