---
title: "Hogyan tanítsam meg a hallgatóknak a MI-kimenet ellenőrzését?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T14:38:00-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Egy héttel a jegyek leadása előtt két beadandó olyan forrásokra hivatkozik, amelyek nem léteznek. Mindkét hallgató azt mondja, hogy ellenőrizte. Az egyik megnyitotta a hivatkozást. A másik elolvasta a bekezdést, és úgy döntött, hogy jól hangzik. Ön már megmondta ennek az osztálynak, hogy ellenőrizze, mit ad neki a chatbot, és a megmondás nem hozta létre a viselkedést.

Az ellenőrzés olyan sorozat, amelyet be lehet építeni egy feladatba. Döntse el, mi számít helyesnek, mielőtt a feladat elkezdődik, késztesse a hallgatót arra, hogy írásban elkötelezze magát egy várakozás mellett, küldje el a nyilvántartáshoz a prózáról alkotott benyomása helyett, és osztályozza azt a nyilvántartást, amelyet előállít. Egy rubrikasor, amely azt mondja, hogy „ellenőrizte a forrásokat”, ebből semmit nem mér.

## A rövid változat

**1.** Először a megoldáskulcsot írja meg. Egy ellenőrzésnek kell valami, amihez viszonyítson, és a legtöbb ellenőrzési feladat soha nem határozza meg, mit jelent a helyes.

**2.** Követeljen meg egy előrejelzést, mielőtt a kimenet megjelenik, hogy a hallgató érvelése papíron létezzen, mielőtt az eszköz felülírhatja.

**3.** Nevezze meg minden ellenőrzés célpontját: a szerzőlistát, a megjelenési helyet, az évet, a konkrét számot, a konkrét lépést. A „győződjön meg róla, hogy helyes” nem ellenőrzés.

**4.** Válassza szét azt az ellenőrzést, amelyet egy gép le tud futtatni, attól az ítélettől, amelyet csak egy olvasó tud meghozni, és tanítsa meg a hallgatóknak, melyiket végzik éppen.

**5.** A nyilvántartást a kulcshoz mérve osztályozza, ne a ráfordítást, hogy az ellenőrzési színház semmit ne érjen.

**6.** Ütemezze be az ellenőrzést a feladaton belülre. Az időnyomás dokumentált oka annak, hogy a hallgatók kihagyják.

## Döntse el, mit jelent a helyes, mielőtt bárki bármit ellenőriz

[[verification-quality-reliance-calibration-genai-2026|Wei és Shang (2026)]] 493 deduplikált rekordot tekintett át, és 14 kiemelt empirikus vizsgálatot térképezett fel, és hét olyan dolgot választ szét, amelyet a „kritikus MI-használat” egyetlen dologgá omlaszt: episztemikus értékelés, az ellenőrzés megindítása, a folyamat minősége, az ellenőrzés sikere, támaszkodási döntések, azonnali feladatteljesítmény és önálló tanulás. Az Ön rubrikája azt mondja, hogy „ellenőrizte a forrásokat”, ami a második lépésnél áll, és semmit nem mond meg arról, hogy az ellenőrzés kompetens volt-e, vagy hogy megváltoztatta-e a hallgató válaszát. A megindítás nem azonos a sikerrel. Egy erős folyamat végződhet eredménytelenül, egy gyenge ráfuthat a helyes válaszra, és az a hallgató, aki lefuttatott egy keresést és zavarban maradt, ugyanannyit ér, mint aki megoldotta a kérdést.

Ugyanez az áttekintés egy második határvonalat is húz a [[trust|bizalom]] és a támaszkodás között. A [[trust-calibration|támaszkodás kalibrációja]] azt kérdezi, hogy egy támaszkodási döntés megfelelő volt-e a kimenet tényleges minőségének fényében, ami az ítéletet egy döntéshez és egy kimenethez köti. Egy auditált vizsgálat azt találta, hogy a hamis ChatGPT-információ elmozdította a résztvevők jelentett bizalmát, és soha nem rögzítette, hogy később elfogadtak vagy elutasítottak-e egy konkrét javaslatot. Egy másik 78 fordítóhallgató elfogadási és elutasítási döntéseit naplózta ChatGPT-[[feedback|visszajelzés]] esetén, de független szakértői értékelés nélkül egy elfogadás nem nevezhető megfelelőnek, egy elutasítás pedig nem nevezhető indokoltnak. A kimenet minőségére vonatkozó alapszintű igazság nélkül a támaszkodás egyáltalán nem osztályozható.

Ez a tervezési következmény, és ez az első dolog, amit rendbe kell tenni. Mielőtt ellenőrzési feladatot állít be, írjon két rövid leírást: hogyan néz ki egy helyes kimenet ehhez a feladathoz, és hogyan néz ki egy hihető, de rossz kimenet. Egy-egy elegendő. A hallgatóknak ekkor van mércéjük, amihez ellenőrizniük kell, Önnek pedig van valami, amihez az ellenőrzést mérni tudja azon kívül, hogy a hallgató óvatosnak hangzik-e.

## Késztesse őket elköteleződésre, mielőtt az eszköz válaszol

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] egy mérési programot épít az *előrejelezni, mielőtt futtat* elvre: a tanuló megmondja, minek kellene történnie, majd a produktum viselkedését ehhez az előrejelzéshez mérik szakterületi alapon, nem pedig ahhoz, hogy fut-e. Az érvelés a kimenet előtt létezik, és ez teszi osztályozhatóvá.

24 vizsgálat auditja során ugyanaz az eszköz ellentétes eredményeket hozott különböző feladatszerkezetek mellett. Egy hagyományos ChatGPT-beállítás szignifikánsan alacsonyabb teljesítményben, [[self-efficacy|önhatékonyságban]] és flow-élményben végződött, míg egy olyan feltétel, amely ellenőrzési követelményeket és hibareflexiós modulokat adott hozzá, erősebb [[critical-thinking|magasabb rendű gondolkodást]] mutatott. Az eszköz állandó volt ezekben a feltételekben. Az változott, hogy a feladat megkérte-e a hallgatót, hogy tartson egy álláspontot, amelynek az eszköz ellentmondhat.

A gyakorlatban ez egy sor a feladatkiíráson: mielőtt megnyitja az eszközt, írja le, mit vár el tőle, és miért. Aztán hasonlítson össze. Két hallgató ugyanazt a bekezdést állíthatja elő, és csak az egyikük tudja elmagyarázni, hol tér el a bekezdés attól, amit előrejelzett.

## Küldje őket a nyilvántartáshoz

[[citation-errors-hallucinations-computing-education-2026|Denny és mtsai (2026)]] 113 588 hivatkozást követett végig 5 225, 2021 óta megjelent számítástechnikai oktatási cikkből, és kézzel ellenőrzött 828 gyanús rekordot. Harminc olyat találtak, amely ellenőrizhetően hamisított bibliográfiai információt tartalmazott 14 cikkben, mind 2025-ből és 2026-ból. Tizenhárom teljesen kitalált volt. A másik 17 valódi címet kombinált hamisított vagy hibás szerzőséggel, megjelenési hellyel vagy évvel. A SIGCSE Technical Symposiumon a szám a 2025-ös kötet 3-áról 17-re nőtt 2026-ban, ami az adott évi kötet cikkeinek 2,3%-a.

A szerzői mezők gyakrabban hibáznak, mint egy generált hivatkozás bármely más része. Ez az egyetlen megállapítás megmondja, mit kérjen. A „nyissa meg a forrást és olvassa el a szerzőlistát” azt a mezőt célozza, amely a legvalószínűbben hibás, és olyan tényt állít elő, amely a hallgatónak vagy megvan, vagy nincs. A „győződjön meg róla, hogy a források valódiak” biztosítékot állít elő. Kérje meg a hallgatókat, hogy a szerzőket, a megjelenési helyet és az évet magával a nyilvántartással vessék össze. A cikk azt kéri, hogy minden idézett művet ellenőrizzenek, és hogy bármilyen automatizált ellenőrző [[human-in-the-loop-ai|emberi felügyelet mellett]] maradjon, ami pontosan az a szokás, amelyet egy hivatkozási követelmény begyakoroltat.

## Válassza szét a gép által futtatható ellenőrzést attól az ítélettől, amelyet csak egy olvasó hozhat meg

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] védhető mércét állít annak, ami gépi úton ellenőrizhető: dokumentált kritériumok, összevetés bevett tudással értelmezői ítélet nélkül, és egyetlen helyes válasz vagy előre meghatározott elfogadható alternatívák. A dátumok, a képletek, a hivatkozások és a számítások átmennek ezen a mércén. Minden értelmezői jellegű dolog megbukik rajta, és ott a hallgató saját olvasata az ellenőrzés eszköze.

Gousopoulos ugyanezt a felosztást jeldetektálási problémaként formalizálja, két független paraméterrel. Az érzékenység az a képesség, hogy a tanuló megkülönböztesse a helyes kimenetet a hibástól; a kritérium az, ahová a tanuló az elutasítás küszöbét állítja. A túlzott támaszkodás ezen a vonalon oszlik meg. A figyelmeztetések, az ellenőrzőlisták és a hallucinációra vonatkozó promptok elmozdítják a kritériumot, megváltoztatva, mikor utasít el a hallgató. A szakterületi oktatás, a kidolgozott összehasonlítások és a beoltott hibákkal való gyakorlás emelik az érzékenységet, mert a tanuló ekkor meg tudja mondani a különbséget. Az a hallgató, aki elfogad hibás kimenetet, kritériumproblémával vagy érzékenységproblémával küzdhet, és a kettő más tanítást igényel.

Az előfeltétel kényelmetlen. Az ellenőrzési oktatás csak ott nevelő, ahol az érzékenység meghaladhatja a nullát, ami elég szakterületi tudást igényel a helyes és a helytelen kimenet megkülönböztetéséhez. Ugyanebben az auditban a kezdők, akiket arra kértek, hogy magyarázzanak el [[llm|LLM]]-generált kódot, a feladatok nagyjából egyharmadán sikerültek, így a MI-visszajelzés vagy a kód megítélése a saját érvelésünkhöz mérve csak ott valódi ellenőrzés, ahol annak az érvelésnek van tartalma. Ha a hallgatói még segítség nélkül sem tudják elvégezni a szakterületi gondolkodást, a több figyelmeztetés semmit nem vásárol. Tanítsa a tartalmat, és az ellenőrzést ahhoz kapcsolja.

Még egy figyelmeztetés tartozik a tervbe: azokat a beavatkozásokat, amelyek csökkentik a nem megfelelő elfogadást, ellenőrizni kell a helyes segítség nem szándékolt elutasítása szempontjából is. Hagyjon helyet annak, hogy egy hallgató megadott indokkal elfogadhasson jó kimenetet.

## Osztályozza az ellenőrzést, anélkül hogy megfigyeléssé változtatná

Gousopoulos közvetlenül levonja a következtetést. Ha a MI elő tudja állítani a produktumot, a produktum nem lehet az értékelés, így az értékelés a specifikációhoz, az érvényesítési érveléshez és az értelmezéshez helyeződik át. Modellszerzőségi konstruktumának négy oldala van, a specifikáció, a fogalmi modell, az ellenőrzés és az értelmezés, négy rendezett szinten, a delegálttól a szerzőiig. A szerzői szint megkövetel egy ellenőrizhető specifikációt az első prompt előtt, a kimenet szakterületi alapon, megadott indokkal történő elutasítását, és olyan értelmezést, amely túlmegy a produktum önmagáról adott jelentésén.

A rubrika olyan anyagokra támaszkodik, amelyeket egy konstrukciós feladat már úgyis előállít, így ugyanaz az eszköz egyszerre [[formative-assessment|formatív értékelés]] és kutatási mérőszám. Ez válaszol a fölösleges munka miatti aggodalomra: egy már kitűzött feladat melléktermékét pontozza. Két korlát tartozik mellé. Wei és Shang 14 kiemelt esetéből egyetlen vizsgálat sem mérte együtt az ellenőrzés sikerét és a rákövetkező támaszkodási döntést, és kevés követte az azonnali teljesítményt késleltetett megtartással vagy [[transfer-of-learning|transzferrel]], így a rubrika analitikus térképen nyugszik, nem érvényesített oksági sorrenden.

Három döntés akadályozza meg, hogy ebből megfigyelés legyen. Az ellenőrzést elbírált minőséghez mérve osztályozza, ne a ráfordításhoz, különben ösztönzőt épít az ellenőrzés előadására. Mondja meg a származást, ahogy Venetsanos megköveteli: a hallgatóknak tudniuk kell, a kapott visszajelzés mely részeit ellenőrizte gép, melyeket ítélt meg ember, és hogy az emberi ítélet elsőbbséget élvez, mert nem tudnak olyan visszajelzést mérlegelni, amelyet nem tudnak elhelyezni. A kikényszerítést pedig tartsa távol a detektáló eszközöktől. [[bassett-ai-detectors-education-2026|Bassett és mtsai (2026)]] amellett érvelnek, hogy az [[ai-detection|MI-detektálást]] egyáltalán nem kellene használni az oktatásban: becslései valószínűségiek, és nem ellenőrizhetők függetlenül, mert a valós szövegek eredete ismeretlen, pontszámai nem érik el a valószínűségek mérlegelésének azt a mércéjét, amelyet egy integritási vizsgálat megkövetel, az ember kontra MI dichotómia pedig értelmetlen a MI-vel, nem pedig MI által készített munkánál. Következtetésük szerint a detektálás „nem védi az akadémiai integritást; aláássa azt.” A megfigyelési rendszerek gyanút táplálnak, és aláássák a hallgatók [[trust|bizalmát]]. Tartsa külön a detektálás két értelmét. A MI által generált szöveg felismerésének itt nincs védhető bizonyítéki szerepe; a hallgatók megtanítása arra, hogy hibákat ismerjenek fel a MI kimenetében, maga a teljes gyakorlat.

A szétválasztás építészeti jellegű, és érdemes beszélni róla a hallgatóknak. [[vetting-dual-llm-safety-education|Li, Zhang és Botelho (2026)]] egy második modellel ellenőrzi a kimenetet, ahelyett hogy az ellenőrzést a generátorba ágyazná. Aki látja, miért, az látja, miért nem érv az ellenőrzés mellett, hogy „az eszköz azt mondta, hogy helyes”.

## Ha Ön a kurzust tervezi, nem tanítja

A fenti három megállapítás a kurzus felépítésébe tartozik, ahová egy egyedül dolgozó oktató nem jut el.

Az első egy diagnosztika. Futtasson beoltott hibás feladatot: húsz tétel, nyolc szakterületi szintű hibával. Megmondja, hogy a hallgatók egyáltalán meg tudnak-e különbséget tenni, mielőtt egy félévet arra költ, hogy olyan kritériumot tanítson, amelyet nem tudnak használni. Egy osztálynak, amely elvéti a beoltott hibákat, tartalomismétlésre van szüksége, bármit mond is a tanmenet a kritikus használatról.

A második a figyelmeztetés elhelyezése. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings és Park (2026)]] egy általános előzetes figyelmeztető üzenetet mutatott közvetlenül két feladat előtt 100 hallgatónak, akik az Egyesült Államokban tanultak, 40 belföldinek és 60 nemzetközi EFL-hallgatónak. A beoltott hallgatók szignifikánsan nagyobb valószínűséggel ellenőrizték az akadémiai forrásösszefoglaló feladatot (M = 0,34, szemben a 0,18-cal), miközben az önbevallásos ellenőrzési szándékok nem mozdultak. A hatás feladatfüggő is volt: megjelent a forrásösszefoglaló feladatnál, de nem egyformán egy hatványozásról és nagy számok szorzásáról szóló matematikai kvíznél. A figyelmeztetést a használat pontjára tegye, feladattípusonként, ne egyszer a tanmenetbe vagy az orientációs modulba.

A harmadik az ütemezés. Az a tanmenet, amely az ellenőrzést ütemezetlenül hagyja, azt mondja, hogy választható, az időnyomás pedig dokumentált oka annak, hogy a hallgatók kihagyják az ellenőrzéseket. Az ellenőrzés, amely a feladaton belül él, és jegyzett produktum kapcsolódik hozzá, megtörténik. Az, amely egy szabályzati bekezdésben él, nem.

## Ha Ön a hallgató, aki ezt olvassa

Négy lépés lefedi a kutatás kéréseinek nagy részét.

Írja meg a várakozását, mielőtt promptol. Egy mondat arról, minek kellene lennie a válasznak, aztán hasonlítsa össze a kimenetet vele.

Nyissa meg a forrást. Olvassa el a szerzőlistát, a megjelenési helyet és az évet a nyilvántartás alapján, mert a szerzői mező az, ahol a generált hivatkozások a leggyakrabban megbuknak.

Minden értelmezői jellegű esetben írja le az indokot a saját szavaival. A kitalált indok ugyanolyan látható, mint a kitalált hivatkozás.

Ne higgyen annak az érzésnek, hogy a próza jól olvasható. A kezdők, akiket arra kértek, hogy magyarázzanak el LLM-generált kódot, a feladatok nagyjából egyharmadán sikerültek, egy, a hallgatók és a ChatGPT kvízbeszélgetéseit vizsgáló terepvizsgálat pedig azt találta, hogy a helyes útmutatás követése is rossz választ hozott. Amit ellenőrizni tud, szűkebb annál, amit olvasni tud.

## Amit az oktatók ebben elrontanak

**„Már megmondtam nekik, hogy ellenőrizzék a forrásaikat.”** Egy figyelmeztetés beállítódást kér. A gondos hallgatóknak van ilyenje, a sietőknek nincs, és a mondatban semmi nincs, amivel egy hallgató este tizenegykor kezdeni tudna, amikor egy teljesen jól olvasható kimenet van a képernyőn.

**„A források ellenőrzéséről szóló rubrikasor lefedi.”** Az a sor a megindításnál áll, és semmit nem mond a folyamat minőségéről vagy a sikeréről. Az a hallgató, aki lefuttatott egy keresést és feladta, ugyanannyit ér, mint aki megoldotta a kérdést, így a rubrika a gesztust jutalmazza.

**„Ha figyelmesen olvasnak, elkapják a hibákat.”** A folyékonyság viszi az ítéletet. Az auditált irodalom a kezdőket nagyjából egyharmados sikeraránnyal mutatja generált kód magyarázatában, a terepvizsgálat pedig rossz választ rögzített, amely helyes útmutatáson keresztül érkezett.

**„A hallgatók, akik azt mondják, hogy ellenőrizni fognak, ellenőriznek is.”** Vu, Cummings és Park vizsgálatában az önbevallásos szándékok nem mozdultak, a megvalósult viselkedés igen (M = 0,34, szemben a 0,18-cal). A viselkedést osztályozza, mert az mozdult.

**„Azok a hallgatók hagyják ki az ellenőrzést, akiket nem érdekel.”** [[trust-calibration-chatbots-design-problem-2026|Jaidka és Cai (2026)]] az ellenőrzés képességét keresztezi az ellenőrzés motivációjával, és a profilok különböző orvoslást igényelnek. A nagy képességű, alacsony motivációjú hallgató hajlamos a kényelmes túlbizalomra. Az alacsony képességű, alacsony motivációjú hallgató a leginkább kitett. Két hallgató, aki ugyanazon az ellenőrzésen bukik meg, ellentétes tanítást igényelhet, és az [[prior-knowledge|előzetes tudás]] dönti el, melyikkel áll szemben.

**„A több figyelmeztetés helyrehozza azokat, akik nem tudnak különbséget tenni.”** A figyelmeztetések a kritériumot mozdítják. Az érzékenységet nem emelik, pedig az érzékenység választja el azt a hallgatót, aki észreveszi a hibát, attól, aki nem.

**„Egy detektor alátámasztja a szabályzatot.”** A fenti bizonyítékok szerint egy detektor pontszáma megbukik azon a mércén, amelyet egy integritási ügy megkövetel, az ember kontra MI felosztás nem áll meg a MI-vel készült munkánál, és a rendszer elveszi Öntől azt a [[trust|bizalmat]], amelyre szükség van ahhoz, hogy a hallgatók egyáltalán bármit bevalljanak.

## Mi jön vissza Önre

**„Csak megcsinálják a jegyért.”** Részben igaz, ezért olyan anyagokat osztályozzon, amelyeket a MI nem tud a hallgató helyett előállítani. Az első prompt előtt megírt specifikáció, a produktum futtatása előtt rögzített előrejelzés, a nyilvántartás alapján ellenőrzött forráslista, az elutasítás megadott szakterületi indoka: mindegyik megköveteli, hogy a hallgató olyan álláspontot tartson, amelyet a generátor nem tud szolgáltatni. A kitalált indok ugyanolyan látható, mint a kitalált hivatkozás. Ahol a hallgatónak nincs szakterületi tudása, amihez mérjen, ott az ellenőrzés színház, és egyetlen rubrika sem menti meg, ami érv amellett, hogy előbb a tartalmat kell tanítani.

**„Nincs rá idő a tanmenetben.”** Az előzetes figyelmeztetés egyetlen üzenet a feladat előtt. A beoltott hibás feladat újrahasznál egy kvízt, amelyet már úgyis kiad. A rubrika a feladat által már előállított anyagokon lovagol, így javítási időbe kerül olyan bizonyítékért, amely különben hiányozna. Az alternatíva többe kerül: ellenőrizetlen beadandók, hamisított hivatkozások és az ezt követő integritási beszélgetések.

**„Az eszköz általában helyes.”** Akkor az ellenőrzés olcsó, és pont a kivételek a lényeg. A szerzői mezők gyakrabban hibáznak, mint egy generált hivatkozás bármely más része, a 30 hamisított tételből 17 valódi címet párosított hibás szerzőséggel, megjelenési hellyel vagy évvel, és 17 egyetlen év szimpóziumi kötetében bukkant fel. A pontosság azokban a részekben, amelyeket véletlenül észrevesz, semmit nem mond azokról, amelyeket nem.

**„A hallgatóim nem tudnak eleget ahhoz, hogy megítéljék a kimenetet.”** Ez az érzékenységi küszöb, és valóságos. Gousopoulos szerint az ellenőrzési oktatás egy szakterületi tudásszint alatt megbukik, és megjegyzi, hogy bizonyos szakterületek külső kritériumot adnak, többek között a fizika, a kémia, az ökológia és a járványtan, míg a történelem, az irodalom és az [[ethics|etika]] nagyrészt nem. Tanítsa a szakterületet, és ahhoz kapcsolja az ellenőrzést, vagy számítson arra, hogy az ellenőrzés rituálévá válik.

**„Ez megfigyelés.”** Az, ha a ráfordítást osztályozza, vagy figyeli, hogyan dolgoznak a hallgatók. A produktumot a kulcshoz mérve osztályozza, mondja meg, melyik visszajelzést ellenőrizte gép és melyiket ítélte meg ember, és hagyja ki belőle a detektorokat.

## Mit tegyen ezen a héten

**1.** Írja meg a két leírást a következő feladatához: egy helyes kimenetet és egy hihető, de rosszat. Ez az a kulcs, amelyhez az ellenőrzés viszonyít.

**2.** Adja hozzá az előrejelzési sort. Egy mondat, az eszköz megnyitása előtt megírva, utána szakterületi alapon összevetve.

**3.** Cserélje le az „ellenőrizze a forrásait” mondatot arra, hogy „nyissa meg a nyilvántartást, és erősítse meg a szerzőket, a megjelenési helyet és az évet.”

**4.** Tegyen nyolc beoltott hibát egy kvízbe, amelyet már úgyis kiad, és nézze meg, mely hallgatók találják meg őket.

**5.** Mérjen meg egy ellenőrzési produktumot a kulcshoz, és mondja meg a hallgatónak, az ellenőrzés melyik része bukott meg: a mérce, a folyamat vagy a döntés.

## Hová tovább

Az [[incorporating-ai-literacy]] azt tárgyalja, hogyan építsük fel azt a megértést, amelyet ez az oldal munkába állít, az [[ai-literacy-evidence]] pedig azt, mit ér ez az írástudási munka. A [[reducing-over-reliance]] azoknak a hallgatóknak a tervezési oldalát kezeli, akik az eszközre támaszkodnak, a [[study-with-ai]] a hallgatók felé szóló társoldal, az [[asynchronous-online-courses-ai]] pedig a probléma azon változatát tárgyalja, ahol nincs órai alkalom, amelybe ellenőrzést lehet ütemezni. Arról a visszajelzésről, amelyet a hallgatók ellenőriznek, lásd az [[ai-feedback-quality]] és a [[hallucination-risk]] oldalt.
