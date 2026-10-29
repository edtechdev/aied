---
title: "Milyen figyelemre méltó hiányosságok vannak a MI oktatási alkalmazásának kutatási szakirodalmában?"
created: "2026-08-24T14:10:00-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Egy pályázati határidő nyolc nap múlva jár le, és a háttérfejezetnek egyetlen mondatra van szüksége arról, mit nem tud még ez a terület. Vagy egy kolléga azt mondta egy bizottságnak, hogy a MI-tutorok javítják a teljesítményt, egy 18 középiskolát átfogó, két éves kísérletre hivatkozva, és Ön az, akinek meg kell mondania, mit tud ez a vizsgálat valójában hordozni. Vagy éppen disszertációtémát választ, és úgy tűnik, minden változatát már megírták.

A lényeges hiányosságok az erőre, a specificitásra és az alkalmazhatóságra vonatkoznak. A MI képes oktatási feladatokat ellátni; a nyitott kérdés az, hogy egy adott tervezés tartós előnyt termel-e, kinek, milyen mechanizmuson keresztül és milyen feltételek mellett. Ez a megkülönböztetés két dolgot dönt el az asztalán: mit kutasson legközelebb, és mit ne állítson addig. A [[limitations-in-aied-research|Korlátok az AIED-kutatásban]] az a katalógus, amely e lap mögött áll. Az [[intelligent-tutoring|intelligens tutori rendszerekről]], a prediktív [[learning-analytics|tanulási analitikáról]], a [[generative-ai|generatív MI-ről]] és az autonóm ügynökökről szóló bizonyíték szintén nem csereszabatos egymással, és a MI tanulástámogató használatáról szóló kutatás különbözik attól a kutatástól, amely az embereket magáról a MI-ről tanítja, ahogy a [[ai-education|MI az oktatásban]] áttekintés kifejti.

## A rövid változat

**1.** Hasonlítsa össze a MI-t egy erős, nem MI-alapú alternatívával, amely a tantervet, a gyakorlást és a támogatást állandó értéken tartja, és mondja meg, mit tett hozzá a MI.

**2.** Mérje a késleltetett, segítség nélküli teljesítményt, és mondja ki, hogy a támogatott teljesítmény nem tanulási nyereség.

**3.** Számoljon be arról, a csomag melyik eleme végezte a munkát, és milyen mechanizmust állít.

**4.** Validálja minden automatizált pontszámot és szimulált tanulót valódi tanulókkal szemben, beleértve a fejlesztési mintán kívüli tanulókat is.

**5.** Nevezze meg a populációs határt, mert az összevont átlag nem válaszol meg egy méltányossági kérdést.

**6.** Írja le az elrendezést elég részletesen ahhoz, hogy valaki más is újjáépíthesse.

## Válasszon olyan összehasonlítást, amely izolálja a MI-t

Léteznek szigorú osztálytermi kísérletek, ezért a „randomizált vizsgálatokra van szükség” már nem nevezi meg a hiányt. Az élesebb kérdés az, hogy a MI-komponens ad-e hozzá értéket a további gyakorláson, a jobb tananyagon, az időben érkező visszajelzésen vagy a több oktatási támogatáson felül.

A [[one-click-away-khanmigo-two-year-school-experiment-2026|Egy kattintásnyira]] szerény teljesítménynyereséget jelent 18 középiskolában, miközben a tutorral folytatott tartalmi beszélgetések korlátozottak voltak, és a szerzők megjegyzik, hogy a nyereség a MI nélküli strukturált gyakorlat eredményeihez hasonlított. Ez egy megvalósított csomagra vonatkozó bizonyíték, és nem tudja izolálni, mit tett hozzá a benne lévő MI.

A mögöttes probléma fogalmi és empirikus egyszerre. A „ChatGPT” egy eszközt nevez meg, nem egy módszert. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich és mtsai (2025)]] 19 ChatGPT-összehasonlítást auditáltak az oktatásban: csak 4 (21%) határozta meg mindhármat, a reprodukálható kezelést, az operacionalizált kontrollt és egy érvényes tanulási mérőszámot (74% jól definiált kezelés, 42% jól definiált kontroll, 53% tanulási eredmény). Amikor az új MI új tevékenységekkel, visszajelzéssel vagy felületi tervezéssel együtt érkezik, a médium és a módszer összekeveredik, és egyetlen hatás sem a MI-hez tartozik.

Mi döntené el: olyan összehasonlítások valósághű, nem MI-alapú alternatívákkal szemben, ahol a tanterv, a gyakorlási lehetőségek és a támogatás a lehető legjobban állandó, valamint független replikációk intézmény, oktató, tantárgy és modell mentén. A módszerek itt különböző kérdésekre válaszolnak. A [[qualitative-research|kvalitatív]] és a [[design-based-research|tervezésalapú]] munka a megvalósítást magyarázza, míg a jól megtervezett kísérletek hordozzák a kauzális állításokat, ahogy azt a [[research-methods-aied|Hatásosságkutatási módszerek]] kifejti.

## Mérje a tanulást, miután az eszköz eltűnt

A MI használata közben javult munka nem bizonyítéka annak a tanulásnak, amely túléli a segítség megszűnését. A [[learning-gains|Tanulási nyereségek]] és a [[cognitive-offloading|Kognitív tehermentesítés]] szintézisei ugyanazt a határvonalat húzzák meg a támogatott teljesítmény, a megőrzött tudás, az önálló érvelés és a transzfer között.

A [[making-ai-tutoring-productive-mastery-math-2026|A MI-tutorozás produktívvá tétele]] a mérési problémát egy több mint 6 000 középiskolás diákot érintő randomizált kísérletben mutatja. A három helyes válasz egymás után szabálya növelte a platform által definiált sikert anélkül, hogy önmagában kimutatható tanulási nyereséget termelt volna egy hét múlva. A legerősebb késleltetett teszt bizonyíték akkor jelent meg, amikor a MI az elsajátítási munkafolyamaton belül ült, és a gyakorolt anyagra összpontosított.

A fennmaradó hiány a képesség pályájára vonatkozik, és egyetlen utóteszt nem zárja be. Senki nem állapította meg a hónapokon át tartó megőrzést, a feladatok közötti transzfert, a visszavonás utáni teljesítményt vagy a tanulók pontosságát abban, hogy megítéljék, mit tudnak, és a terület nem választotta szét a készség elsajátításának kudarcát egy már megalapozott készség romlásától. A tehermentesítési kutatásnak még meg kell mutatnia, mikor támogatja az átadás ezeket a pályákat, és mikor szorítja ki azt a gyakorlást, amely felépíti őket.

## Derítse ki, a csomag melyik része végezte a munkát

A „MI-támogatott tanulás” általában több változást csomagol egybe: új visszajelzést, hozzáadott reflexiót, társakkal folytatott beszélgetést, eltérő feladatsorrendet, megváltozott értékelési ösztönzőket. Egy sikeres csomag nem mondja meg, mely összetevők voltak szükségesek.

A [[genai-feedback-design-multisite-experiment|Emberközpontú generatív MI visszajelzés-tervezés]] valódi előrelépés ebben a kérdésben. 1 176 elsőéves egyetemi hallgató körében a reflektív és a hibrid tervezés felülmúlta a közvetlen [[ai-feedback-quality|MI-visszajelzést]] a késleltetett, MI nélküli transzferben. A hibrid feltétel az önértékelést, a [[peer-assessment|társak visszajelzését]] és a MI kritikáját kombinálta. Ez elválasztja azt, hogyan szerveződik és használódik a visszajelzés, attól, hogy a diákok egyáltalán hozzáférnek-e visszajelzéshez.

Továbbra is nyitott: az első önálló próbálkozások, az önmagyarázat, a társak hozzászólása, a korrekciós visszajelzés, a tippek és az elhalványuló támogatás hozzájárulása és időzítése, valamint az, hogy mindegyik hogyan lép kölcsönhatásba az [[prior-knowledge|előzetes tudással]] és a feladat nehézségével.

Az elméleti hiány ezzel párhuzamosan fut. Egy [[learning-theories|tanuláselmélet]] megnevezése nem azonos annak tesztelésével. Egy vizsgálatnak szüksége van egy adott rendszerviselkedéshez kötött elméleti előrejelzésre és egy mérhető tanulási folyamatra, és a statisztikai mediáció hozzájárul ehhez a magyarázathoz anélkül, hogy kauzális mechanizmust állapítana meg. A [[theory-development-aied|Elméletfejlesztés a MI oktatásában]] és az [[scaffolding|állványozás]] viszik tovább az érvelést.

## Érvényesítse a mérőszámot, mielőtt értelmezi

Az olyan konstruktumokat, mint az elköteleződés, a [[critical-thinking|kritikai gondolkodás]], az MI-írástudás és a [[personalized-learning|személyre szabás]], következetlenül mérik ebben a szakirodalomban. Az önbeszámolók észleléseket írnak le; nem helyettesíthetik a bizonyított kompetenciát. A technikai pontosság, a szakértők által értékelt kimeneti minőség és a diákok tanulása három különböző értékelési cél. Az [[educational-measurement|Oktatási mérés]] és az [[ai-ed-evaluation|AIED-értékelés]] megalapozóként kezeli ezeket a megkülönböztetéseket.

Egy hiány a mérési problémán belül ül: más MI-rendszerek értékelésére használt [[ai-technologies|MI-rendszerek]]. A [[llm-student-simulation-misconception-faithfulness|Diákok szimulálása vagy hízelgő problémamegoldás?]] című munkában a [[simulating-students|szimulált diákok]] gyakran feladták a kiosztott [[misconceptions|tévképzeteiket]] korrekciós visszajelzés után, függetlenül attól, hogy a visszajelzés foglalkozott-e a tévképzettel, így válaszaik eredménytelen oktatást is sikeresnek mutathattak. A célzott betanítás javította a vizsgálat hűségmérőszámát, és az adott mérőszámon elért javulás nem validálás emberi tanulással szemben.

Ami hiányzik, az a teljes értékelési lánc validálása, a modell viselkedésétől a [[pedagogy|pedagógiai]] ítéleten át a tanulói válaszig és az oktatási eredményig, olyan tanulókon és környezetekben, amelyeket nem használtak a fejlesztés során. Az emberi ítélet ugyanilyen vizsgálatot igényel, hiszen az értékelők közötti egyetértés nem bizonyítéka annak, hogy a megfelelő konstruktumot mérték.

## Döntse el, mit tanúsíthat még egy értékelés

A MI két összekapcsolt értékelési problémát teremt: segít előállítani az értékelt munkát, és befolyásolhatja, hogyan pontozzák azt.

A tudásbázis [[ai-agents-complete-lms-assessment-validity-2026|tanulmánya az értékelt LMS-feladatokat teljesítő MI-ügynökökről]] olyan ügynököket dokumentál, amelyek egy élő egyetemi kurzuson navigáltak és befejezték az értékelt tevékenységeket. Ez olyan képességet mutat, amely megkérdőjelezi a diákok által előállított bizonyítékra vonatkozó feltevéseket. Nem állapítja meg, mennyire gyakori az ilyen használat, és nem teszi érvénytelenné az aszinkron értékelést mint kategóriát.

A kutatási kérdés az, mely tervezések támogatják továbbra is a tanulóról alkotott védhető következtetéseket. A [[eportfolio|portfóliók]], a reflexiók, a szakaszos beadások és a tevékenységnaplók validálást igényelnek bizonyítékként ahelyett, hogy feltételeznénk róluk, hogy megállapítják a szerzőséget vagy a megértést. A vizsgálatoknak a bizonyítékok kombinációit kell tesztelniük függetlenül megfigyelt kompetenciával szemben, miközben számolnak az akadálymentességgel, a munkaterheléssel, a magánélettel és a diákok szorongásával. Az [[assessment-validity|Értékelési érvényesség]] tartalmazza a részleteket.

Az [[automated-assessment|automatizált pontozás]] esetében a [[llms-do-not-grade-essays-like-humans-2026|Az LLM-ek nem úgy osztályozzák az esszéket, mint az emberek]] rendszeres egyet nem értést jelent a kész modellek és az emberi értékelők között. Az eredmények konfigurációfüggők, és megmutatják, miért nem hordozhat érvényességi állítást a belső konzisztencia.

A [[human-capability-test-learning-outcomes-ai-2026|Emberi képességteszt a tanulási eredményekre a MI korszakában]] azt javasolja, hogy külön értékeljük, mit kell a tanulóknak önállóan megtenniük, mit érhetnek el MI-vel, és mit kell ellenőrizniük és megvédeniük. Ez egy empirikus validálásra váró keretrendszer.

A detektálás a legvilágosabb zsákutca ezen a területen. [[karr-ai-detection-humanization-2026|Karr és mtsai (2026)]] két kereskedelmi detektort futtattak τ = 0,50 értékkel 642 publikált angol absztrakton. Az irányelveknek megfelelő könnyű MI-szerkesztést 38-80% között jelezték. A módosítatlan 2023-25-ös eredetieket 9-15% között jelezték, a nem [[stem-education|STEM]] munkák jóval a STEM felett, p < 0,001 mellett. Emberiesítés után az eszközök az MI-vel jelölt átiratok kevesebb mint 4%-át fogták meg, ami 96% feletti hamis negatív arány. Egy pontszám, amely az őszinte segítséget bünteti és a kijátszást elvéti, nem alapozhat meg egy tanulóra vonatkozó következtetést.

## Ne olvassa az írástudás-pontszámokat viselkedési bizonyítékként

A MI-írástudás beavatkozási kutatás elég jelentős a szintézishez. A [[liu-ai-literacy-interventions-meta-analysis-2026|MI-írástudás-beavatkozások az oktatásban]] 59 vizsgálatot és 7 211 résztvevőt ölel fel, pozitív átlagos hatást jelent, és jelentős szórást is, széles előrejelzési intervallummal, amely átfogja a nullát. A tudásfókuszú eredmények erősebbnek bizonyultak, mint a készségek, az attitűdök vagy az etika.

Az élesebb hiány az, hogy az írástudás-oktatás megváltoztatja-e, mit tesznek az emberek, amikor MI-t használnak, és egy újabb kompetenciakeretrendszer nem zárná be ezt. Felismerik-e a tanulók a nem alátámasztott állításokat, ellenőrzik-e a forrásokat, elutasítják-e a félrevezető javaslatokat, észreveszik-e a nem megfelelő egyetértést, és eldöntik-e, mikor ne delegáljanak? Fennmarad-e bármi ebből időnyomás alatt, és átvihető-e ismeretlen rendszerekre és tudományterületekre?

Ennek eldöntéséhez teljesítményalapú értékelés kell, a tényleges döntések megfigyelésével és késleltetett utánkövetéssel, a fogalmi tudást, az operatív jártasságot és a kritikai ítéletet külön tartva, nem összevonva. Az [[ai-literacy|MI-írástudás]] és a [[trust-calibration|Bizalom kalibrálása]] adják a megkülönböztetéseket.

## Számoljon be arról, kit hagy ki az eredmény

Egy kurzus, intézmény, nyelv vagy tanulói populáció eredményei ritkán jogosítanak döntésekre máshol, amit a [[limitations-in-aied-research|Korlátok az AIED-kutatásban]] szintézis visszatérő problémaként kezel. Hogy a hatások hogyan változnak fejlődési szakasz, tudományterület, előzetes tudás, fogyatékosság, nyelv és erőforrás-feltételek mentén, nagyrészt méretlen marad.

A méltányossági kutatásnak szét kell választania a hozzáférést, a készségeket és az eredményeket. A [[digital-divide|Digitális szakadék]] szintézis egyértelmű abban, hogy az eszközök és az eszközhozzáférés nem állapít meg egyenlő haszonképességet. A [[school-ai-education-readiness-gaps-agency-2026|Az iskolai MI-oktatás szűkíti a felkészültségi szakadékokat?]] 752 hongkongi alsó középiskolás diákot követett: a pszichológiai felkészültségi szakadékok szűkültek, míg az objektív MI-írástudás-teszten mutatott különbségek fennmaradtak. Minden csoport javult, és az egyenlőtlenség nem zárult be. Az előzetes tanulási profilokat nem randomizáltan osztották ki, így kauzális szerepük ismeretlen marad.

A lefedettség bizonyos helyeken vékony. A [[differential-effects-across-learner-groups|Különböző hatások a tanulói csoportok között]] populáció szerint számolja a szakirodalmat: a második nyelvi és többnyelvű tanulók, valamint a fogyatékossággal élő diákok a legmélyebb szálak, ezután a nem és a neurodiverzitás következik, az első generációs és nemzetközi diákoknak egy-egy vizsgálatuk van ebben a korpuszban, a tehetséges és kiemelkedően teljesítő diákok gyakorlatilag kutatatlanok, a menekült, bevándorló és kitelepített tanulók pedig egyikben sem jelennek meg. Egy ilyen alakú bizonyítékbázis nem tud méltányossági kérdést megválaszolni összesítéssel.

A kapacitás egyetlen nemzeti rendszeren belül is változik. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye és mtsai (2026)]] 45 nigériai egyetemen pontozták a MI-integrációt, és mérsékelt összesített bevezetést találtak (M = 4,79, tartomány 1,83-7,83 egy 10 pontos skálán), az intézménytípus pedig nem jelezte előre az integrációt, ha az életkort és a földrajzi elhelyezkedést kontrollálták (életkor β = 0,43; délnyugati elhelyezkedés β = 0,31). A belső képességek r = 0,79-0,80 között korreláltak egymással, a nemzetközi együttműködések pedig az ipari partnerségekkel r = 0,74 mellett, így az összekapcsolt intézmények halmozódó előnyöket gyűjtenek. Hogy mely kapacitásépítési tervezések változtatnak az eredményeken az újabb, kevésbé összekapcsolt intézményekben, tesztelés nélkül marad.

A kutatási prioritás azoknak a tervezéseknek az azonosítása, amelyek csökkentik a bizonyított képességben, a részvételben és az [[agency|ügynökségben]] mutatkozó különbségeket, az alcsoport-eredményeket és terheket az átlagos nyereség mellett bemutatva. Az akadálymentességnek megvan a maga megoldatlan kérdése: a tervezés eltávolít-e egy részvételi akadályt, vagy helyettesít-e egy képességet, amelyet a tanulónak fejlesztenie kellene. Lásd a [[equity-in-ai-education|Méltányosság a MI-oktatásban]] és az [[accessibility|akadálymentesség]] oldalakat.

## Mondja meg, ki tartja a kontrollt, és mikor változik

Ahogy a rendszerek terveznek, cselekvéseket indítanak, memóriát tartanak és eszközöket hangolnak össze, az oktatási kérdés az lesz, ki irányítsa a tanulási folyamat mely részeit, és mikor kell ennek az irányításnak elmozdulnia.

Az [[agentic-ai-education-scoping-review|Ügynöki MI az oktatásban: áttekintő tanulmány]] 474 vizsgálatot térképez fel, és korlátozott longitudinális validálást, a [[higher-ed|felsőoktatásra]] és a STEM-re való összpontosítást, valamint gyenge oktatáselméleti integrációt talál: az áttekintett vizsgálatok csak 29%-a épített kifejezetten oktatáselméletre, ami erről a korpuszról szóló megállapítás, nem az összes AIED-munkáról.

A nyitott kérdések következnek. A tanuló által kezdeményezett segítség más eredményeket termel-e, mint az ügynök által kezdeményezett? Visszavonható-e a támogatás a kompetencia fejlődésével veszteség nélkül? Megtartják-e a tanulók a rendszer megkérdőjelezésének képességét? Az [[agentic-ai|Ügynöki MI]] és a [[human-ai-collaboration|Ember és MI együttműködése]] szintézisek hozzáadják a [[teacher-role|tanári]] beavatkozást és elszámoltathatóságot a többügynökös környezetekben, ahol senki nem állapította meg, ki felel egy ügynök döntéséért. A nagyobb autonómia pedagógiai tervezési döntés, amelynek bizonyítékbázisa még felépítésre vár.

## Tesztelje a biztonsági hibákat valódi tanulókon

Az oktatási biztonság túlmutat a tényszerű pontosságon és a tiltott kéréseken. Egy tutor adhat helyes választ, miközben eltávolítja a tanuló érvelési lehetőségét, megerősít egy tévképzetet vagy függőséget épít. A [[pedagogical-safety|Pedagógiai biztonság]] fedi le a konstruktumot.

A [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] olyan hibákat azonosít, mint a túlzott válaszfeltárás és az állványozás feladása, lényegesen több hibával többfordulós tesztelés mellett. Ezek [[benchmark|benchmark]] eredmények meghatározott feltételek mellett, nem becslések arról, milyen gyakran történik kár a tantermekben.

Hogy mi történik, amikor ezek a hibák tartós használat során valódi tanulókkal találkoznak, ismeretlen. Melyik okoz átmeneti zavart, melyik tartós tévképzetet, melyik csökkenti a motivációt, és melyik gyengíti az önálló képességet, nem mérték. Azt sem állapította meg senki, mely védőkorlátok csökkentik ezeket a kockázatokat anélkül, hogy túlzott visszautasítást vagy frusztrációt keltenének. A hosszabb távú munkának eredményként kell kezelnie a bizalmat, a hajlandóságot emberi segítség kérésére, a [[agency|tanulói ügynökséget]] és a társakkal és tanárokkal való kapcsolatokat. Gyermekek esetében ez fejlődésileg megfelelő vizsgálatokat igényel, amelyek a rendszerviselkedést oktatási és kapcsolati eredményekhez kapcsolják.

## Válassza szét a bevezetést a megvalósítástól

A technikai képesség nem állapítja meg, hogy egy eszközt jól használnak, és a szakmai fejlesztés nem ér el automatikusan a diákokhoz. A hiányzó láncszem általában a tanárfelkészítéstől a megváltozott osztálytermi gyakorlaton át a tanulói eredményekig fut.

A [[pedagogy-first-technology-second-teacher-knowledge-2026|Előbb a pedagógia, aztán a technológia]] 46 tanár és 2 832 diák több szintű vizsgálata. A pedagógiai MI-tudás összefüggött a diákok észleléseivel és szándékaival, és a mért tanártudás egyik komponense sem kapcsolódott közvetlenül a diákok MI-tudásának nyereségéhez. Az ilyen összefüggések nem állapítják meg, hogy egy képzési beavatkozás jobb tanulást okozna.

A nyitott kérdés az, mely kombinációi a coacholásnak, a [[curriculum-design|tantervi illesztésnek]], az áttekintési rutinoknak, az ütemezésnek és az intézményi támogatásnak termelnek tartós javulást, és a vizsgálatoknak a megvalósult tanítást kell megfigyelniük, nem a tanár magabiztosságát vagy bevezetési szándékát. A [[teacher-ai-competency|Tanári MI-kompetencia]] és az [[educational-development|Oktatásfejlesztés]] fedik le a terepet.

A komparatív költséghatékonyság egy második hiány. Az értékeléseknek számolniuk kell az ellenőrzés, a javítás, a képzés, a felügyelet, a karbantartás és a megvalósítási idő költségeivel az előfizetési és modellhasználati költségek mellett, és össze kell hasonlítaniuk a MI-támogatott ellátást valósághű alternatívákkal. A megválaszolásra érdemes kérdés az, milyen oktatási hasznot hoz a teljes elrendezés azért az erőforrásért, amit igénybe vesz.

## Kezelje a kormányzati dokumentumokat szándékként

Az [[ethics|etikai]] elvek és kormányzati keretrendszerek szükségesek, és létezésük nem állapítja meg, hogy megváltoztatják a gyakorlatot vagy védik a tanulókat.

[[agarwal-ethical-values-norms-aied-2026|Agarwal és mtsai]] 25 cikket tekintettek át, és azt találták, hogy a végfelhasználók nagyrészt passzívak az etikai szakirodalomban, a diákok hangja gyakorlatilag hiányzik, miközben az értékek közötti feszültségek és az érintettek közötti hatalmi aszimmetriák is megjelennek. Ez az áttekintett szakirodalmat írja le. Nem állítás arról, hogy a diákok soha nem vesznek részt az AIED tervezésében.

Ami hiányzik, az a bizonyíték arról, mely kormányzati elrendezések idéznek elő mérhető különbséget. Megváltoztatja-e a diákok és tanárok részvétele a beszerzést, az eszköztervezést, az értékelési szabályokat vagy a hiba utáni jogorvoslatokat? Elkapják-e az emberi felülvizsgálati eljárások a következményes hibákat? Valóban elérhetők-e a MI használatának alternatívái azoknak, akiknek azt mondják, használják? A magánélet-kutatásnak párhuzamos hiánya van: a további adatgyűjtés oktatási értékét általában feltételezik, és az adatminimalizáló tervezéseket ritkán hasonlították össze beavatkozóbb változatokkal mind a tanulás, mind a tanulói autonómia szempontjából. Lásd a [[governance|MI-kormányzás]] és a [[privacy|magánélet]] oldalakat.

## Tegye újjáépíthetővé a vizsgálatot

Az AIED szokatlanul nehéz reprodukálhatósági problémával küzd. A vizsgálatok kihagyják a promptokat, a modellváltozatokat, a beállításokat, a kódot és az oktatási részleteket, és a zárt rendszerek megváltozhatnak egy beavatkozás közben vagy után. A [[limitations-in-aied-research|Korlátok az AIED-kutatásban]] dokumentálja a mintázatot.

Egy vizsgálat újjáépítése azt jelenti, hogy az oktatási elrendezést és a modellt is leírjuk: a tanulási feladatokat, a tartalomforrásokat, a megengedett műveleteket, a felületet, a tanári támogatást, az értékelési feltételeket és mindent, ami a bevezetés során megváltozott. Egy konfiguráció reprodukálása és annak tesztelése, hogy pedagógiai elve átvihető-e egy másikra, két külön teljesítmény, és a [[research-methods-aied|Hatásosságkutatási módszerek]] jelentési útmutatása mindkettővel foglalkozik.

A szintézisnek ugyanilyen gondosság kell. A [[meta-analysis-systematic-review|Metaanalízis és szisztematikus áttekintés]] a gyenge elsődleges vizsgálatokat, a publikációs torzítást, a heterogén beavatkozásokat és az összeegyeztethetetlen eredményeket sorolja fel az összevont következtetések korlátjaként, és egyetlen átlagos „MI-hatás” elrejti azokat a megkülönböztetéseket, amelyekre az oktatóknak szükségük van. Az áttekintéseknek szét kell választaniuk a támogatott teljesítményt az önálló tanulástól, meg kell különböztetniük a beavatkozástípusokat és az összehasonlítási feltételeket, és auditálhatóvá kell tenniük a kódolási döntéseket.

A szintézis-szakirodalom maga is hiány. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026) törvényszéki auditja]] 14 nagy hatású [[meta-analysis-systematic-review|metaanalízist]] vizsgált, és azt találta, hogy egyik sem szolgált érvényes alapot a saját állításaihoz. Nincs koherens konstruktum: egy eszközt egyetlen beavatkozásként kezeltek, többdimenziós eredményeket vontak össze. A publikációs torzítást mind a 14 esetben érvénytelenül értékelték. A jelentett I² 77,2% és 94,4% között futott minden olyan elemzésben, amely jelentette, és a 13-ból 12 meghaladta a 80%-ot. A véletlenszerűen ellenőrzött elsődleges vizsgálatok 61%-a hordozott érvényességi aggályokat. Az a 14 elemzés körülbelül 16 hónap alatt több mint 2 000 hivatkozást gyűjtött, és egy visszavont metaanalízisre a visszavonás utáni hivatkozó cikkek 60%-a még mindig mérvadóként hivatkozott, ezt nem jelezve. Abból a 14 cikkből, amely egy másik auditált metaanalízisre hivatkozott, amelynek absztraktja nagy hatást hirdetett a „MI-oktatás” terén, ami valójában a diákok MI-ről való tanítását mérte, csak 2 hivatkozott rá megfelelően, 8 úgy olvasta, mint bizonyítékot arra, hogy a MI integrálása javítja a tanulást, 4 pedig más módon tévedett. Az audit azt kéri a folyóiratoktól, hogy követeljenek teljes adatátláthatóságot a metaanalízisekhez (keresési protokollok, kódolt vizsgálati jellemzők, kinyert statisztikák, elemzési kód), a szerkesztőktől, hogy ne kezeljék a publikációs előéletet a bírálói kompetencia bizonyítékaként, és hogy a visszavonások legyenek láthatók mindenhol, ahol egy cikket felfedeznek, exportálnak vagy hivatkoznak rá. A reprodukálhatóság a szintézisláncra is kiterjed, nem csak az egyedi vizsgálatra.

Az oktatók, akik a tantermi szintű változatot keresik, kövessék az [[evaluating-ai-interventions-methods|MI-beavatkozások értékelése]] oldalt.

## Amit a kutatók és az oktatók ebben eltévesztenek

**A területnek vizsgálatok hiányoznak.** A meghatározott vizsgálatok hiányoznak. Vannak többhelyszínes kísérletek, több ezer diákot érintő randomizált vizsgálatok és 14 nagy hatású metaanalízis. Az auditált összehasonlítások csak 21%-a definiálta a kezelést, a kontrollt és az eredményt elég jól ahhoz, hogy egy hatást tulajdonítson.

**Egy elmélet megnevezése teszteli azt.** Egy tanuláselméletre való hivatkozás keretezési döntés. Egy teszthez előrejelzés kell, egy rendszerviselkedés, amely megvalósítja, és egy folyamatmérőszám, amely ellenkezőleg is kijöhetett volna.

**Egy validált automatizált pontszám validált eredmény.** Az emberi kódolókkal való egyetértés az azokkal való konzisztenciát állapítja meg. A szimulált diákok javultak egy hűségmérőszámon anélkül, hogy emberi tanulással szemben validálták volna őket, és a modellviselkedéstől az eredményig vezető lánc építetlen marad.

**A hozzáférés méltányosság.** A hongkongi vizsgálatban a pszichológiai felkészültségi szakadékok szűkültek, míg az objektív tesztkülönbségek fennmaradtak, és minden csoport javult anélkül, hogy az egyenlőtlenség bezárult volna. Az eszközök és licencek megváltoztatják, ki érheti el az eszközt.

**A több autonómia haladás.** A nagyobb ügynöki függetlenség tervezési döntés. Mivel a 474 ügynöki vizsgálat 29%-a épített oktatáselméletre, és a longitudinális validálás korlátozott, senki nem mutatta meg, hogy az irányítás rendszerre való átadása javítja a tanulást.

## A kifogások, amelyeket hallani fog

**„A hiány csak az, hogy több randomizált vizsgálat kell.”** Most már bőven vannak, és a probléma a tervezési címkék feljebb esik: egy olyan csomag vizsgálata, amely új visszajelzést, új feladatokat és új felületet csomagol egybe, semmit sem tulajdoníthat a MI-nek. Az összehasonlítási feltétel az, ahol a munka van.

**„Nem tudok többéves utánkövetést futtatni.”** Akkor mérjen egy késleltetett, segítség nélküli alkalmat, és mondja meg, milyen intervallumot fed le. Egy hét valódi eredmény, és az elsajátítási szabály vizsgálata egy hétnél érte el az eredményét azzal, hogy a MI-t a munkafolyamatba ágyazta és a gyakorolt anyagra összpontosított.

**„A randomizálás lehetetlen a kurzusomon.”** A tervezésalapú és a kvalitatív munka olyan megvalósítási kérdésekre válaszol, amelyekre a vizsgálatok nem tudnak, és a területnek mindkettőre szüksége van. Ahol a véletlen hozzárendelés lehetséges, ott továbbra is az hordozza a kauzális állítást.

**„Az összevont hatásméret már megmondja, mi működik.”** A 14 auditált metaanalízis eszközként definiálta a kezelést, összeegyeztethetetlen eredményeket vont össze, és 80% feletti I²-t jelentett a 13 elemzésből 12-ben, amely megadta. Az összevont szám olyan vizsgálatok halmazát írja le, amelyeknek konstruktumproblémája van.

**„A szimulált diákok olcsóbbak, így a validálásuk várhat.”** A hízelgési vizsgálatban a szimulált diákok feladták a tévképzeteiket, függetlenül attól, hogy a visszajelzés foglalkozott-e velük, ami az a hibaüzemmód, amely eredménytelen tutort eredményesnek mutat.

## Mit tegyen ezen a héten

**1.** Írja le egy mondatban a tervezett vizsgálat összehasonlítási feltételét. Ha ez a szokásos menet, módosítsa, mielőtt bármi mást módosítana.

**2.** Adjon hozzá egy késleltetett, segítség nélküli mérőszámot a tervezéshez, és nevezze meg az intervallumot a módszertani részben.

**3.** Írja be a populációs határt a tervezési leírásba, majd az absztraktba, hogy az állítás ne utazhasson tovább a mintánál.

**4.** Vegye a jelenlegi szövegének legerősebb állítását, és törölje azt a változatot, amelyet a mérőszáma nem tud hordozni. Tartsa meg a plafonról szóló mondatot.

**5.** A vizsgálat minden automatizált pontszámához vagy szimulált tanulójához nevezze meg az emberi mércét és a döntőbírát az adatgyűjtés megkezdése előtt.

## Hová tovább

[[reporting-interpreting-aied-research|A jelentéstétel]] a párja ennek az oldalnak, és a [[research-methods-aied|Kutatási módszerek a MI oktatási alkalmazásában]] fedi az egyes hiányok mögötti tervezési döntéseket. Az [[evaluating-ai-interventions-methods|MI-beavatkozások értékelése]] a mérőszámokkal és az összehasonlítási tervezésekkel foglalkozik, a [[checking-whether-educational-ai-works|Annak ellenőrzése, hogy az oktatási MI működik-e]] a hatásossági kérdés rövidebb változata, és a [[does-ai-help-students-learn|Segít-e a MI a diákoknak tanulni]] gyűjti össze, mit tudunk a tartós tanulásról. A [[theory-development-aied|Elméletfejlesztés a MI oktatásában]] és az [[equity-ethics-pedagogical-safety-research|Méltányosság, etika és pedagógiai biztonság kutatása]] viszik tovább az elméleti és méltányossági szálakat.
