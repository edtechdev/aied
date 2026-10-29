---
title: "Melyek a hatékony MI-tutor fejlesztésének bevált gyakorlatai?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A tutorának három hét múlva lesz a kísérleti bevezetése. A csevegés működik, a modell tisztán elmagyarázza a deriváltat, és a belső demó tapsot kapott. Aztán valaki a tanítási központból fölteszi a kérdést, amelyre a specifikációjában nincs mező: egy félév után ezzel a dologgal vajon meg tud-e oldani egy hallgató egy feladatot, ha az eszköz nincs a szobában? Ami van, az funkciólista. Ami nincs, az az az egyetlen mondat, amely megmondja, mit kell a tanulónak egyedül tudnia a végén.

A tutor egy [[conversational-ai|csevegőbot]] köré tekert szabályrendszer, és a tanulás attól függ, mit enged ez a szabályrendszer. Nevezze meg azt a kognitív munkát, amelyet a tanulónak el kell végeznie, alakítsa úgy a rendszert, hogy megkövetelje (kísérlet segítség előtt, elhalványuló súgylétra, olyan ellenőrzés, amelyet a modell nem tud megjátszani), és értékeljen úgy, hogy közben a tutor ki van kapcsolva. A modell minősége azt határozza meg, mennyire jólesik a beszélgetés. A szabályrendszer dönti el, mit tud a diák júniusban.

## A rövid változat

**1.** Írja meg a célkitűzést a támogatás nélküli teljesítményre vonatkozó állításként, majd vezessen le belőle minden funkciót. Ha egy funkció nem vezethető vissza erre a mondatra, akkor az demófunkció.

**2.** Építse a tanulómodellt naplózható bizonyítékokra, és minden diagnózist hipotézisként, biztonsági értékkel együtt tároljon, ne tényként.

**3.** A súgylétrát kódban rögzítse, nevesített fokokkal, és a felület kérjen valamilyen árat a tanulótól minden egyes lefelé lépésért.

**4.** A tartalmat a saját anyagaira alapozza, az aritmetikát, az algebrát és a kódellenőrzést pedig adja át determinisztikus eszközöknek, amelyek nem tudnak hallucinálni.

**5.** Egész beszélgetéseken tesztelje a tanítási hibákat: válaszszivárgás, hízelgés, tévhit-megerősítés, tanítási elsodródás.

**6.** Mérjen kivonási szakasszal és késleltetett teszttel, ne elégedettségi pontszámmal.

## A célkitűzés a támogatás nélküli teljesítményről szóló állítás legyen

Három lista, még azelőtt megírva, hogy bárki modellt választana:

- Mit kell a tanulóknak tudniuk, vagy mit kell utána el tudniuk végezni.
- Milyen kognitív munkát kell nekik maguknak elvégezniük.
- Mit tehet meg helyettük a tutor.

Az [[intelligent-tutoring|intelligens tutorálás]] szakirodalma rámutat, hogy a hatékonyság a [[pedagogy|pedagógiai]] tervezéstől függ, nem pusztán a modell képességeitől, és a hibát könnyű véletlenül beépíteni. Egy „a feladat befejezésére” optimalizált tutor aláássa azt a tutort, amelyet „a feladat megoldásának megtanulására” optimalizáltak, miközben minden funkcionális tesztet átmegy, amit csak ír, mert mindkettő helyes végeredményt ad. A különbség abban él, hogy a diák mit tett a kérdés és a válasz között.

A második lista az, ahol a fejlesztőcsapatok konkrétak tudnak lenni. Vegyen egy elsajátítási címkét, például „derivált-elsajátítás”, és tagadja meg, hogy ez a helyes derivált előállítását jelentse. Bontsa fel olyan külön elemekre, mint annak felismerése, mikor alkalmas egy derivált, értelmezése pillanatnyi változási sebességként, a szabály kiválasztása, az eljárás végrehajtása, annak elmagyarázása, miért volt helyes a választás, az ésszerűség ellenőrzése és az alkalmazás egy ismeretlen feladatra. Mindegyik külön naplózandó dolog, és mindegyik más választ feltételez, ha hiányzik. Ez a felbontás egyben a védelem a [[correct-answer-trap-misconceptions|helyes válasz csapdája]] ellen, amikor a tanuló hibás következtetéssel jut a helyes válaszra, és az analitikája sikert rögzít. A [[correct-answer-trap-ai-tutor|A helyes válasz csapdájának elkapása]] és a [[zhang-tutormoments-2026|Amikor a segítség nem segít]] egyaránt ennek a hibának a változatait írja le éles környezetben.

## A tanulómodellt a beszélgetés előtt építse fel

A tanulómodell kétféle állapotot tart: fogalmankénti becsléseket (határérték: fejlődő, hatványszabály: elsajátítva, szorzatszabály: fejlődő, láncszabály: nem mutatkozott meg) és tévhithipotéziseket a mögöttük álló bizonyítékkal és biztonsággal. Tartsa ezeket külön. A fogalombecslés az, ami a nehézség kiválasztását vezérli. A hipotézis az, ami a következő kérdést vezérli.

Óvakodjon attól, hogy a diagnózist magára az [[llm|LLM]]-re bízza. A [[benchmark|Benchmarkolás]] azt találta, hogy az LLM-tutorok felismerik a világosan helyes következtetést, miközben néha elutasítják az érvényes alternatívákat, vagy elfogadják a helytelen következtetést. Egy modell, amely felismeri a jó esetet és félreolvassa a kétértelműt, éppen azokat a diákokat buktatja meg, akiknek segítségre van szükségük. Következményes területeken az az architektúra marad életben, amely a **strukturált diagnózis és a rugalmas LLM-párbeszéd** kombinációja, ahogyan [[yasir-llm-tutoring-agents-2026|A helyes megerősítése, a többi elmulasztása]] leírja: a saját detektora megállapítja, mit tett valószínűleg a diák, és a modell e megállapítás köré írja a beszélgetést.

Adjon a diagnózisnak olyan kifejezett sorrendet, amelyet a modell nem tud kihagyni: észlelés, ellenőrzés, válasz. A modell felvethet egy [[misconceptions|tévhitet]] hipotézisként, majd a tutornak a válaszadás előtt ellenőriznie kell azt a diák tényleges munkáján vagy egy célzott kérdéssel. E lépés nélkül a rendszer bizonyítékot talál ki, majd olyan hibára tanítja a diákot, amelyet az el sem követett, ami egyszerre haszontalan és kissé sértő.

Naplózásra érdemes bizonyítékok, nagyjából hasznossági sorrendben: a legutóbbi próbálkozások köztes lépéseikkel, a fogalmak szerint kimutatott tudás, a segítségkérő viselkedés (ami önmagában is jelzés a magabiztosságról), és az önbevallott magabiztosság ott, ahol gyűjti. E nyilvántartás alapján igazítsa a nehézséget és a támogatást, és a tanuló legutóbbi promptját tekintse egyetlen bemenetnek. Egyetlen prompt rossz becslője annak, mit tud egy diák, és a tutor, amely erre reagál, ide-oda fog kapkodni.

## Rögzítse a súgylétrát, majd a felület kérjen érte árat

Írja le a fokokat, mielőtt promptot ír, mert a létra termékdöntés nevesített állapotokkal, és egy hangnembeli beállítás nem tudja kifejezni. Egy működőképes sorrend:

1. Önálló próbálkozás.
2. Metakognitív kérdés arról, mit próbált már ki a diák.
3. Fogalmi utalás.
4. A vonatkozó szabály azonosítása.
5. A feladat egy részének felállítása.
6. Kidolgozott köztes lépés.
7. Kidolgozott megoldás.
8. A diák elmagyarázza a megoldást.
9. A diák önállóan megold egy hasonló feladatot.

A támogatás a kompetencia növekedésével elhalványul, és ez a [[scaffolding|állványozás]] középpontjában álló mechanizmus. Egy kidolgozott megoldás látványa nem bizonyítja az elsajátítást, ezért minden olyan ülés, amely eléri a hetedik fokot, tartozik Önnek a kilencedikkel, mielőtt befejezettnek számít.

A létra megépítésének oksági bizonyítéka egy terepkísérletből származik, amelyben egy védtelen GPT-felület növelte a támogatással nyújtott matematikai teljesítményt, és csökkentette az azt követő, támogatás nélküli vizsgateljesítményt. Egy súgó tutor nagyrészt megszüntette ezt a tanulási veszteséget ([[generative-ai-guardrails-harm-learning|A korlátok nélküli generatív MI árthat a tanulásnak]]). A korlát építészeti jellegű. Ugyanaz a modell, eltérő segítségnyújtási viselkedéssel, ellentétes eredményeket adott azon a mérőszámon, amely számít.

Egy nagyobb, randomizált terepkísérlet több mint 6 000 középiskolai tanulóval egy elsajátításalapú gyakorlóplatformon megmutatja, hogyan néz ki a létra a naplókban. Az MI-támogatáshoz rendelt diákok lassabban haladtak és kevesebb kérdést próbáltak meg, viszont pontosabban válaszoltak. A legvilágosabb mechanizmus a hiba utáni következő próbálkozás helyessége volt: kevesebb próbálkozás kellett a helyes válaszhoz való visszatéréshez. Ez a minta produktív lassulás, és ez az a nyom, amelyet egy súgylétrának hagynia kell ([[making-ai-tutoring-productive-mastery-math-2026|Produktívvá tenni az MI-tutorálást]]).

Ugyanez a vizsgálat figyelmeztetést ad a saját irányítópultjaival kapcsolatban. A három egymás utáni helyes válasz megkövetelése élesen megemelte a platform által definiált elsajátítást, anélkül hogy kimutatható nyereséget hozna egy héttel későbbi késleltetett teszten. A legerősebb késleltetett tesztes bizonyíték csak ott jelent meg, ahol az MI az elsajátítási munkafolyamaton belül ült (együttható 0,085), nem ott, ahol önálló hozzáférésként volt elérhető. Ha a sikerességi mutatója egy sorozatszámláló, akkor olyan rendszert szállít, amely a sorozatot optimalizálja.

A felület súrlódása ugyanabba a tervezési menetbe tartozik. A látható gomb mögötti korlátlan súgók az egész létrát gyorsparanccsá teszik, és az idő előtti súgókérés felületes olvasással párosulva alacsonyabb [[learning-gains|tanulási nyereséggel]] jár együtt. Ha a `[Hint][Hint][Hint][Show Answer]` helyére a „mit próbált már ki?” és a „melyik rész akasztja meg?” kérdés kerül (szabály választása, egyenlet felállítása, algebra elvégzése, a fogalom megértése), egyetlen képernyőnyi felületet igényel, és a diákot ahhoz a fokhoz irányítja, amelyre valóban szüksége van. Emellett megadja azt a naplóadatot is, amely megmondja, melyik fokot szokta kihagyni.

## Az ellenőrizhető részeket adja át egy ellenőrzőnek

A generálást oktató által jóváhagyott anyagra alapozza: tankönyvi fejezetekre, kurzusjegyzetekre, kidolgozott példákra, terminológiára, jóváhagyott módszerekre, jelölésekre, feladatszabályokra, szabályzatokra és [[curriculum-design|tantervi]] erőforrásokra. Az erre a korpuszra épülő visszakereséses generálás csökkenti a [[hallucination-risk|hallucináció kockázatát]], de nem szünteti meg, ahogy a [[rag|RAG]] kifejti. Tegye láthatóvá a hivatkozásokat vagy a származást a felületen ott, ahol a diák ellenőrizhet egy állítást, mert a hivatkozás az, ami utólag auditálhatóvá teszi az alapozást.

Az alapozás olyan feladatot is ellát, amelyet a pontossági mutatók kihagynak. Egy kurzusnak jóváhagyott módszerei vannak, és egy tutor, amely olyan matematikailag érvényes technikát vezet be, amelyet a kurzus nem használ, olyasmire tanította a diákot, amiért pontlevonás jár. A kurzusrétegből való visszakeresés az, ahogyan a tutor a módszerkészleten belül marad.

Formálisan ellenőrizhető válaszokkal rendelkező területeken adjon hozzá determinisztikus eszközöket: számológépeket, szimbolikus matematikai rendszereket, kódfuttatást, tudásgráfokat, szabályalapú érvényesítőket és [[discipline-specific-aied|szakterület-specifikus]] megoldókat. A munkamegosztás a fontos rész. Az LLM kezeli a magyarázatot és a párbeszédet. A szimbolikus motor ellenőrzi az algebrai egyenértékűséget, a deriváltakat, az integrálokat, az egyenletmegoldásokat, a kritikus pontokat és a numerikus közelítéseket. Egy hibás köztes lépés, amelyet az ellenőrző elkap, tanítási pillanattá válik. Egy hibás köztes lépés, amelyet semmi sem kap el, tévhitté válik, amelyet a diák magával visz a vizsgára.

## Követelje meg, hogy a tanuló tegyen valamit a visszajelzéssel

A visszajelzés, amely annyit mond, hogy „Helyes”, „Helytelen” vagy „Szép munka”, pontozási esemény tanítási felületbe öltöztetve. A tudásbázis a [[feedback|visszajelzést]] nyújtás és átvétel hurkoként kezeli: a visszajelzés akkor támogatja a tanulást, ha a diákok megértik, és tesznek is vele valamit, és a rendszerek rendszerint éppen a második felét hagyják ki. Építse úgy a tutort, hogy megnevezze az érintett következtetési lépést, megmondja, min kell újragondolni, adjon egy konkrét következő lépést, és kérje meg a tanulót, hogy jósoljon vagy magyarázzon, mielőtt a visszajelzés megjelenik.

Az ezt hordozó sorrend: először a tanuló, másodszor az MI, ismét a tanuló. A diák generál, választ, indokol, értékel vagy reflektál; a tutor válaszol; a diák tesz valamit a válasszal. A fordulók szerkezetét úgy tervezze, hogy ez ne legyen opcionális. Egy rendszer, amelyben a modell három bekezdést tud adni egyetlen kérdésre, arra tanítja a diákot, hogy kérdezzen és olvasson.

A hosszú távú cél az interiorizáció. A tanulóknak végül maguknak kell futtatniuk a tutor kérdezéstechnikáját és a [[problem-solving|problémamegoldó]] stratégiákat, ez az [[agency|önállóság]] melletti érv, és ez az oka annak, hogy a létrának van egy felső foka, ahol a tutor hallgat.

## Tervezze meg, mi történik a negyvenedik fordulóban

A pedagógiai biztonság külön tesztcsomag a szokásos csevegőbot-biztonságnál, és a legtöbb csapat csak a másodikkal szállít. A toxicitás és a jailbreak-ellenállás semmit nem mond arról, hogy a tutor átadja-e a választ annak a diáknak, aki kétszer kérdez, egyetért-e egy hibás módszerrel, mert a diák magabiztosnak hangzott, kicsúszik-e a kurzus módszerkészletéből egy hosszú ülés során, vagy [[cognitive-offloading|kognitív tehermentesítésbe]] lök-e egy tanulót. A [[ai-sycophancy|hízelgés]] az, amelyik elsőként jut át, mert az egyetértés kedvességnek látszik, és a preferenciaadatai ezt jutalmazzák.

Tesztelje a válaszszivárgást, a tévhit-megerősítést, a túlzott egyetértést, a nem megfelelő nehézséget, a tehermentesítést, az elfogult bánásmódot, a tanulói önállóság elvesztését, a tanítási elsodródást és a helytelen magyarázatokba vetett túlzott magabiztosságot. A teszteket hosszabb beszélgetéseken futtassa, ne egyetlen fordulón, mert a pedagógiai hibák felhalmozódnak: az első tíz forduló példás lehet, és a tizenegyedik tönkreteheti az ülést. Egy tutornak egyszerre kell kedvesnek és helyesnek lennie, akkor is, amikor a tanuló ragaszkodik egy tévhithez. A [[pedagogical-safety|pedagógiai biztonság]] és a [[hazra-safetutors-pedagogical-safety-2026|MI-tutorok biztonsága és pedagógiai ártalmai]] fejtik ki a hibatipológiát.

## Az adatarchitektúra ugyanabba a tervdokumentumba kerüljön

Csak pedagógiailag szükséges tanulói adatot gyűjtsön, és tudja megmondani, miért létezik minden egyes mező. Ahol tartós memóriát vagy [[student-modeling|tanulómodellt]] tart, tegye láthatóvá a célját a tanuló számára, adjon neki megfelelő ellenőrzést fölötte, védje az érzékeny információkat, határozza meg a megőrzési időt, és a következményes döntéseket irányítsa oktatóhoz vagy más [[human-in-the-loop-ai|emberi ellenőrzőponthoz]]. Egy tanulómodell, amely csendben gyűjt egy magabiztossági becslést, amelyet a diák soha nem lát, adatvédelmi és pedagógiai probléma egyszerre.

Auditálja a viselkedést nyelvi háttér, képességszint, kulturális kontextus, [[accessibility|akadálymentesítési]] igények, valamint az [[prior-knowledge|előzetes tudás]] és az MI-tapasztalat szintje szerint. Az azonos célkitűzésen mutatott eltérő teljesítmény hiba, amelyhez egy diák tartozik, és nem fog megjelenni az összesített pontossági számában.

Egy akadálymentesítési döntés külön sort érdemel: ne tegye a kifinomult [[prompt-engineering|promptolást]] a jó tanítás előfeltételévé. Ha a tutor csak akkor tanít jól, amikor a diák gondos promptot ír, olyan rendszert épített, amely előnyben részesíti azokat a diákokat, akik már tudnak beszélgetni a modellekkel. A tutornak segítenie kell a tanulóknak produktív kérdéseket megfogalmazni, ami egyben olyan [[metacognition|metakogníció]] készség, amelyet érdemes birtokolni.

## Műszerezze fel a kivonási időszakot

Az ülésmutatók nem fogják megmondani, hogy működik-e a dolog. A válaszpontosság, a beszélgetés hossza, a diák preferenciája, az elégedettség, a feladatbefejezés és az [[student-engagement|elköteleződés]] mind emelkedik azoknál a rendszereknél, amelyek semmit nem tanítanak, mert a diákok szeretik a segítséget, és a segítséget könnyű mérni. Értékelje a támogatás nélküli teljesítményt, a késleltetett megőrzést, az új feladatokra való átvitelt, a tévhitek korrekcióját, a tanulói függetlenséget, a visszajelzés átvételét és a [[differential-effects-across-learner-groups|tanulócsoportok közötti eltérő hatásokat]]. Az [[ai-ed-evaluation|MI-eszközök értékelése]] tartalmazza a módszereket, és a [[ai-tutor-behavioral-evaluation|hiányzó értékelési tengely]] amellett érvel, hogy a viselkedés maga a konstruktum.

Két vizsgálat élesíti az [[self-report-measures|önbevalláson]] és a rövid időtávon alapuló szabályt. Egy 38 kezdő programozó diákot érintő pilot erős összefüggést talált a [[generative-ai|generatív MI]] használata és az *észlelt* tanulás között (rs=0,802, p<0,001), miközben az oktatói támogatás nélküli önálló haladás mutatói érték el a legalacsonyabb pontszámot. A szerzők ezt a szakadékot a kompetencia illúziójának és episztemikus adósságnak nevezik, és pontosan ezt a szakadékot jutalmazza egy elégedettségi mutató ([[genai-cognitive-tutor-programming-2026|A generatív MI mint informális kognitív tutor]]).

Alapvetőbben: a legtöbb értékelés ott áll meg, ahol a segítség véget ér. A [[cognitive-washout-ai-skill-decay-2026|kognitív kimosódás dinamikája]] megnevezi a méretlen, kivonás utáni időszakot, és négy kimenetet formalizál: rugalmas visszapattanás, részleges plató, lappangó állvány és túlkompenzáció. Kimosódási görbéje hordoz egy helyreállási időállandót, egy helyreállási teljességi tagot és egy hiszterézis indexet, amely az újratanulási erőfeszítést az eredeti erőfeszítéshez hasonlítja. Mivel a visszafordíthatóság határozza meg a súlyosságot, a keretrendszer amellett érvel, hogy az ütemezett, támogatás nélküli gyakorlást a helyreállási görbéhez kell adagolni, nem pedig elvi kérdésként vitatni. Az értékelési tervének szüksége van kivonási szakaszra és azonnali utótesztre is, és az az ok, hogy ezt korán ütemezze, [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|az a randomizált bizonyíték, hogy a rövid segítség lefojtja a későbbi támogatás nélküli teljesítményt]].

## Adjon a tanároknak valamit, amit szerkeszthetnek

Bevezetés előtt teszteltesse oktatókkal a valósághű tanulói profilokat, a gyakori tévhiteket, a szélsőséges eseteket, az ellenséges promptokat, a kétértelmű válaszokat és a hosszú tutorálási beszélgetéseket. Naplózza a pedagógiai hibákat, és táplálja vissza őket a rendszerpromptokba, a tutorálási szabályokba, a tudásforrásokba, a [[guardrails|korlátokba]], a tanulómodell szabályaiba és a modellválasztásba. Egy folyékony válasz még lehet pedagógiailag helytelen, és a tanár az egyetlen bíráló, aki ezt látja.

[[teacher-intervention-k12-ai-based-instruction-2026|Lee 29 K-12 tanulmányt áttekintő szisztematikus áttekintése]] leírja, miből áll ez a felügyelet, és hol törik meg. A [[teacher-role|tanár]] beavatkozása egy ismétlődő, négyfázisú ciklus: megfigyelés, ítélet, beavatkozás és orchestrálás. Az MI-riasztások, a [[visualization|irányítópultok]] és az automatikus pontszámok „nem vezetnek automatikusan pedagógiai cselekvéshez”. Az áttekintés által talált legerősebb tanári stratégia a pedagógiai fordítás: a csevegőbot visszajelzésének kiválasztása, átdolgozása, kiegészítése, összegzése vagy törlése ahelyett, hogy továbbadná.

Két tervezési figyelmeztetés következik, és mindkettő ellentmond a szokásos ütemtervnek. A több MI-információ nem jobb: a folyamatosan diagnosztikát kibocsátó rendszerek túlterhelték a tanárokat, és elvonták a figyelmet a saját megfigyelésükről. Rangsorolja, mi érdemes cselekvésre, tegye értelmezhetővé, és olyan formában adjon ajánlásokat, amelyet a tanár el tud fogadni, módosíthat, elhalaszthat vagy elutasíthat. A több tanári támogatás sem jobb: a beavatkozás késleltetése, hogy a diákok önállóan dolgozhassanak, maga is szakértelem. A strukturális feltételek, vagyis az adatok áttekintésére szánt idő, az osztálylétszám és az a képesség, hogy fizikailag elérjék a segítségre szoruló csoportokat, a beavatkozás részét képezik, nem pedig háttérlogisztika. Egy olyan tanárnak épített irányítópultot, akinek nincs szabad órája, nem fognak megnyitni.

## Első eset: kalkulus tutor, ahol az ellenőrzés olcsó

Egy első féléves egyetemi kalkulus tutor célja az legyen, hogy növelje, mit tudnak a diákok önállóan megoldani és elmagyarázni azután, hogy az eszközt eltávolították, nem pedig a helyesen befejezett feladatok maximalizálása. A matematikai tutorálás különösen érzékeny a túlzott állványozásra, az idő előtti súghasználatra és a tanulói következtetés hibás diagnózisára, és mindhárom látható a naplóiban, ha megnézi ([[math-education|matematikaoktatás]]).

**Alapozás és ellenőrzés.** Hatrétegű felépítés: kurzusanyagok és oktatói szabályzatok, majd egy visszakeresési réteg, majd egy feladatmotor és tanulómodell egy szimbolikus ellenőrzővel és diagnosztikai motorral együtt, majd egy pedagógiai szabályréteg, majd a beszélgetésgenerálás, majd a diák, majd vissza a tanulómodellbe. Az ellenőrző az oka annak, hogy ez a terv kezelhető. Eldönti, hogy egy kifejezés egyenértékű-e, egy derivált helyes-e, egy integrál kiszámított-e, egy kritikus pont megtalált-e, és ezt anélkül teszi, hogy a modell véleményét kérdezné.

**Egy interakció.** A $f(x)=(x^2+1)\sin x$ differenciálásánál egy hagyományos csevegőbot felfedi a választ. Egy tanulásorientált tutor belsőleg végigvezeti, hogy a diák mindkét összetevőt deriválta, de az eredményeket összeszorozta, ami egy lehetséges szorzatszabály-mint-$f'g'$ [[misconceptions|tévhit]], és először diagnosztikai kérdést tesz fel: melyik szabály érvényes, ha két függvényt szorzunk? Aztán a diák szimbolikusan felírja a szorzatszabályt, felállítja $u$ és $v$ értékét, és csak ezután ellenőrzi a tutor a végső kifejezést. Figyelje meg, mennyi történt a tutorálásból, mielőtt bármilyen modellszöveg elérte a diákot.

**Több reprezentáció.** Kapcsolja össze a szimbolikus eljárásokat a formulával, a grafikonnal, a táblázattal, egy verbális értelmezéssel és egy fizikai változási sebesség kontextussal. Az eljárási folyékonyság és a fogalmi megértés azonosnak látszik egy helyes válaszlapról, és eltér az átviteli feladatban.

**Az irányítópult.** Átláthatatlan ítéletek helyett tegyen közzé összesített bizonyítékot: „szorzatszabály, 62% kimutatott elsajátítás; gyakori minták, 18% kihagy egy tagot, 11% a deriváltakat szorozza össze”. Az egyedi diagnózisok hipotézisként mennek ki a hozzájuk tartozó bizonyítékkal, és ez az, ami áttekinthetővé teszi őket a tanár számára (itt a [[explainable-ai|magyarázhatóság]] a tanárnak fontosabb, mint a diáknak).

**Az értékelési terv.** Teljesítmény a tutorral, teljesítmény hasonló feladatokon nélküle, késleltetett megőrzés, átvitel ismeretlen feladatokra, a fogalmi magyarázat minősége, tévhitek korrekciója, megfelelő, szemben az idő előtti [[help-seeking|segítségkéréssel]], válaszszivárgás, a diagnózis téves pozitív és téves negatív aránya, valamint eltérő kimenetek. A projektet eldöntő összehasonlítás a támogatással elért és a későbbi, támogatás nélküli teljesítmény. Az a diák, aki 60%-ról 95%-ra jut a tutorral, és 60%-on marad egyedül, nem kapott tutorálást.

## Második eset: írási coach, ahol a szakasz dönt az engedélyről

Az írásnak nincs egyetlen helyes válasza, ezért az ellenőrzés ítélet, és a tervezési munka a szakaszolásra tolódik. A tudásbázis az írást kognitív, társas és retorikai folyamatként keretezi, ami azt jelenti, hogy egy MI-írásrendszer támogathatja a tanulást, és meg is szüntetheti pontosan azt a gondolkodást, amelynek kifejlesztéséért a feladat létezett ([[writing-education|írásoktatás]], [[coach-not-crutch-ai-writing|coach, nem mankó]]).

**Képességmodell.** Tartsa nyilván az érvelést (tézis konkrétsága, állítás és bizonyíték összhangja, ellenérv), a szervezést (bekezdésfókusz, logikai haladás, átmenetek), a bizonyítékot (forrás relevanciája, integrálása, értelmezése), az átdolgozást (globális és mondatszintű átdolgozás, a visszajelzés értékelése) és a stílust (világosság, nyelvtan, hang). Mindegyik külön jelzéssé válik a tanulómodellben, és ez az, ami egyáltalán lehetővé teszi a célzott visszajelzést.

**Alapozza a coachot a feladatra.** Keresse vissza az utasításokat, az oktató rubrikáját, a kurzus olvasmányait, a hivatkozási követelményeket, a műfaji konvenciókat, az oktatói példákat és az MI-használati szabályzatot, hogy a visszajelzés azt mondhassa: „az oktatója rubrikája megköveteli, hogy minden fő állítást legalább két kurzusolvasmányból származó bizonyítékhoz kapcsoljon”, ahelyett hogy általános elvárásokat találna ki. Az általános tanács az alapozatlan íráseszköz alapértelmezett hibája, és a diákok két ülés alatt észreveszik.

**Szakaszonként állítsa be az engedélyeket.** Az MI bevonása a különböző szakaszokban eltérően hat az észlelt tulajdonlásra. A tervezési támogatás kevésbé csökkenti a tulajdonlást, mint a vázlatírási támogatás, és az MI által generált vázlat okozza a legnagyobb csökkenést ([[ai-writing-support-stage-ownership-2026|A tervezéstől az átdolgozásig]]). Ez az eredmény közvetlenül engedélytáblázattá alakítható. Tervezéskor a coach kérdéseket tesz fel, álláspontokat hasonlít össze, megkérdőjelezi a feltevéseket és bírálja a vázlatokat, de nem generálja az érvelést. Vázlatíráskor a tanuló állítja elő először a szöveget, és a coach fejleszti, nem veszi át. Átdolgozáskor a coach diagnosztizál, és ott megáll: nem világos állítások, hiányzó bizonyíték, az állítást nem támogató bizonyíték, szervezési problémák, a vázlat a rubrika fényében. Szerkesztéskor, az átdolgozás után a nyelvtannal, az írásjelekkel, a tömörséggel és a hivatkozási formázással foglalkozik.

**Egy kidolgozott interakció.** Az [[online-teaching-and-learning|online kurzusok]] kötelezővé tételéről szóló esszénél egy általános rendszer átírja a diák bekezdését csiszolt szöveggé, és elvégzi a szellemi munkát. Egy coach megmondja, mi működik, megnevezi a fő problémát (a bekezdés okokat ad, de soha nem magyarázza meg, miért indokolnak egyetemi szintű kötelezettséget), átdolgozási kérdést tesz fel, és megkéri a diákot, hogy fejezzen be egy mondatot a saját szavaival. Az érvelés ott marad, ahol lennie kell.

**Rangsorolt visszajelzés.** Egy erősség, amelyet meg kell őrizni, egy nagy hatású probléma, egy kérdés, amely az író ítéletét igényli, egy konkrét átdolgozási cél. Nem negyven megjegyzés. Az a diák, aki negyven megjegyzést kap, hosszuk szerint rangsorolja őket, és ennek a rangsorolásnak semmi köze ahhoz, mi számít.

**A diák ítélje meg a visszajelzést.** A [[feedback-literacy|visszajelzési írástudás]] önmagában is tanulási cél. Kérdezze meg rendszeresen, egyetért-e a tanuló egy javaslattal és miért, és engedje meg, hogy elutasítsa. A kimenet az [[evaluative-judgment|értékelő ítélet]], nem az engedelmesség, és ez az egyetlen védelem egy magabiztosan tévedő coach ellen.

**Őrizze meg a hangot.** Különböztesse meg a hibákat, a világossági problémákat, a retorikai választásokat és a stíluspreferenciákat, és az utóbbi kettőt hagyja érintetlenül. Az a coach, amely „kijavítja” a retorikai választásokat, az írást ahhoz a stílushoz homogenizálja, amelyet a modell előnyben részesít, és ez okozza a legtöbb kárt a [[multilingual-learning|többnyelvű]] íróknál és a nem szabványos retorikai hagyományokban (a [[ai-feedback-quality|MI-visszajelzés minősége]] a probléma általános változata).

**Tanuljon az átdolgozásokból.** Az átdolgozási előzményeket tárolja, ne csak a végleges esszéket. Az ismétlődő „bizonyítékot bevezet, de nem értelmez” minta, amely három esszén át javul, a legtöbb hasznos jelzés, amellyel egy írásrendszer rendelkezhet, és ingyen van.

**Értékelés.** Az MI-vel támogatott és a későbbi, támogatás nélküli írás minősége, a képesség, hogy gyengeségeket találjon ismeretlen szövegben, az átdolgozás minősége, a visszajelzés átvétele, az átdolgozások elmagyarázásának képessége, a tulajdonlás, az MI-szövegtől való függés, a hang megőrzése, a nyelvjárások és a többnyelvű írók közötti elfogultság, az oktatói ítélettel való összhang és a késleltetett átvitel. A kérdésre válaszoló tervnek három ága van: önálló írás, az MI generálja a szöveget, és egy coach. Mindhárom csoport ezután új esszét ír MI nélkül. Ha az MI által generált csoport gyakorlatban nyer és nélküle veszít, a rendszer a teljesítményt javította, nem a tanulást. Az irányítópult osztályszintű mintái (41% támogatásra szorul az állítás és bizonyíték összekapcsolásában) [[formative-assessment|formatív értékelési]] jelzést adnak az oktatónak.

## A két felépítés összehasonlítása

| Tervezési kérdés | Kalkulus tutor | Írási coach |
|---|---|---|
| Elsődleges tanulási tárgy | Matematikai fogalmak és problémamegoldás | Érvelés és írásfolyamat |
| Ellenőrzés | Gyakran objektíven ellenőrizhető | Rendszerint kontextuális ítéletet igényel |
| Determinisztikus eszközök | Szimbolikus matematikai motor, számológép | Nyelvtan, hivatkozás, rubrikaellenőrzés |
| Az MI fő szerepe | A következtetés diagnosztizálása és állványozása | Az átdolgozás diagnosztizálása és állványozása |
| Fő kockázat | A megoldás elárulása | A szöveg megírása a tanuló helyett |
| A lényeges tanulói cselekvés | Megoldás és magyarázat | Vázlatírás, értékelés és átdolgozás |
| Tanulómodell | Fogalmak, eljárások, tévhitek | Érvelés, bizonyíték, szervezés, átdolgozás |
| Kulcsfontosságú korlát | Kísérlet a megoldás előtt | Diákszöveg az MI átírása előtt |
| Átviteli teszt | Új, MI nélküli kalkulusfeladatok | Új, MI nélküli írásfeladat |
| Sikerességi kritérium | Önálló matematikai következtetés | Önálló írás és értékelő ítélet |

Mindkét rendszer ugyanazt a [[ai-technologies|MI-technológia]]-készletet használja, és különböző pedagógiai szabályokat testesít meg, mert a tudományterületek különböző fajtájú gondolkodást igényelnek. Az általánosítható szabály: azonosítsa azt a kognitív tevékenységet, amely a tanulást létrehozza, és úgy tervezze az MI-t, hogy támogassa ezt a tevékenységet anélkül, hogy elvégezné. Ez a szabály minden konkrét modellt, promptot, ágenskeretrendszert vagy felületet felülír.

## Amit a fejlesztőcsapatok elrontanak

A pedagógia a rendszerpromptban él, tehát egy gondos prompt pedagógiai terv. A prompt egyetlen rétege egy szabályrendszernek, amely magában foglalja azt is, milyen bizonyítékot gyűjt, melyik fokot kínálja a felület, mit ellenőriz az ellenőrző, és mit mutat az irányítópult. Egy jól megírt prompt egy olyan tanulómodell tetején, amely semmit nem tárol, folyékony tutort ad, amely semmire nem emlékszik a diákról, és a létra minden ülésben újraindul.

Egy jobb modell megoldja a diagnózist. A fenti benchmarkeredmény szerint az LLM-tutorok felismerik a helyes következtetést, miközben elutasítják az érvényes alternatívákat és elfogadják a helyteleneket, és ezt a hibamintát a méret láthatóan nem javítja. A strukturált diagnózis azért létezik, mert a modell ítélete az a rész, amelyet nem tud auditálni.

Az elégedettség és a befejezés bizonyítja, hogy a terv működik. Azt bizonyítják, hogy a diákok segítséget kaptak. A 38 programozó diákot érintő pilot az észlelt tanulást erősen összefüggőnek találta a használattal, miközben az önálló haladás érte el a legalacsonyabb pontszámot, az elsajátítási vizsgálat pedig azt találta, hogy egy sorozatkövetelmény emeli a platformelsajátítást késleltetett teszten mutatott nyereség nélkül. Építse be a kivonási mérőszámot a pilotba, különben hatékonyan a rossz tanulságot fogja megtanulni.

A visszakeresés megbízhatóvá teszi a válaszokat. Csökkenti a [[hallucination-risk|hallucináció kockázatát]], és érintetlenül hagyja a hibaforrás többi részét: egy visszakeresett részletet félre lehet olvasni, egy érvényes technika lehet hibás a kurzus számára, és a modell továbbra is magabiztosan tévedhet egy általa levezetett lépésben. A visszakeresés egy alsó korlát.

A biztonsági csomag átengedése azt jelenti, hogy biztonságos a diákok számára. A szokásos biztonsági tesztelés a toxicitást és a jailbreakeket fedi le. Az itt számító pedagógiai hibák, a válaszszivárgás, a hízelgés és az elsodródás, ezek számára láthatatlanok, és beszélgetés során halmozódnak fel, nem egyetlen fordulóban jelennek meg.

Az elköteleződés a cél. A beszélgetés hossza és az ülések száma a legolcsóbban műszerezhető mutató, ezért emelik őket céllá. A [[scaffolding|állványozás]] melletti érv szerint az ideális ülés rövidül, ahogy a diák fejlődik, tehát az elköteleződés növekedése ugyanolyan valószínűen tünet, mint eredmény.

## Mi jön vissza Önre

**„Hat hét múlva szállítunk, és ez egy negyedévnyi munka.”** Az architektúra nagy része olcsó. Egy próbálkozási kapu, egy beállított létra, visszakeresés a már meglévő jegyzetei fölött és egy naplóséma kivonási mezővel: napok munkája. A drága tételek (tanulómodell, ellenőrző, irányítópult) egy kurzus számára funkciózászló mögött indulhatnak, és a pilot többet mond, ha az olcsó részek készen vannak.

**„A diákok imádják, és a befejezés emelkedett.”** Mindkét tény összeegyeztethető egy olyan rendszerrel, amely jól válaszol a kérdésekre és semmit nem tanít. A 6 000 diákot érintő vizsgálat lassabb haladást és kevesebb megkísérelt kérdést talált jobb pontosság mellett, tehát a befejezés csökkenése sem feltétlenül rossz hír. Tegye a támogatás nélküli teljesítményt az elköteleződési számok mellé, és hagyja, hogy a kettő nyilvánosan ellentmondjon egymásnak.

**„Nem tudunk randomizált kísérletet futtatni.”** Futtathat diákok közötti összehasonlítást anélkül: ugyanaz a célkitűzés, támogatással az egység alatt, támogatás nélkül tesztelve két héttel később, a támogatott pontszám mellett bemutatva. Ez a terv megválaszolja a termékkérdést, és nem igényel kontrollcsoportot. Amit nem tud megmondani, az a kontrafaktuális azokra a diákokra, akik soha nem használták a tutort.

**„A modell szállítói API, tehát a segítségnyújtási viselkedés nincs a kezünkben.”** A fokok az Ön orchestrációs rétegében élnek, és a korlátozási kísérlet eredménye abból jött, hogy megváltoztatták, mit mondhat a tutor, nem abból, hogy modellt cseréltek. Számítson arra, hogy a szállító utólagos tanítása a gyors válaszadás felé húz, mert a segítőkészségre hangolták, és a visszafogást a saját kódjába tegye.

**„A tanárok nem fognak még egy irányítópultot használni.”** Olyat nem fognak használni, amely folyamatos diagnosztikát bocsát ki, mert a K-12 áttekintés szerint ez elvonja a figyelmet a saját megfigyelésükről. Adjon nekik kevés, de értelmezhető jelzést, módot arra, hogy minden ajánlást elfogadjanak vagy elutasítsanak, és időt a héten, hogy megnézzék őket.

**„Nincs szakterületi szakértőnk.”** Akkor a tutor általános módszert fog tanítani, és a kurzus jelölése egy félév alatt elsodródik. Egy tárgyszakértő két napra tervezési időben, aki megírja a tévhitlistát és a jóváhagyott módszerek listáját, a projekt legolcsóbb sora, és az, amelyet a csapatok elsőként vágnak ki.

## Mit tegyen ezen a héten

**1.** Írja meg a támogatás nélküli teljesítményről szóló mondatot a pilot számára, és tegye a specifikációba, a funkciólista fölé.

**2.** Adjon hozzá próbálkozási kaput, és naplózza. Rögzítse, hogy a diák próbálkozott-e az első súgó előtt, és melyik fokig jutott.

**3.** Cserélje a súgógombot a blokkolópont-kérdésre, és a választ kategóriaként naplózza.

**4.** Ütemezzen be egy támogatás nélküli ellenőrzést két héttel az egység után, és tegye a naptárba felelőssel.

**5.** Foglaljon két napot egy szaktanárral a tévhitlista és a jóváhagyott módszerek listájának megírására.

## Hová tovább

[[designing-educational-ai-software|Az oktatási MI-szoftver tervezése]] a szoftverszintű szabályokat tárgyalja, amelyeket egy tutornak teljesítenie kell, a [[designing-ai-into-learning|MI beépítése a tanulásba]] pedig azt, hol helyezkedik el a tutor egy kurzussorozatban. Az [[evaluating-ai-interventions-methods|MI-beavatkozások értékelésének módszerei]] és a [[checking-whether-educational-ai-works|annak ellenőrzése, hogy az oktatási MI működik-e]] azt kezeli, hogy működik-e a dolog. Ha a problémája az, hogy a modell túl készségesen válaszol, a [[making-ai-better-at-supporting-learning|MI jobbá tétele a tanulás támogatásában]] és a [[training-ai-tutors-to-guide-rather-than-answer|tutorok tanítása arra, hogy vezessenek, ne válaszoljanak]] ugyanannak a kérdésnek a tanítási oldalát dolgozza ki.
