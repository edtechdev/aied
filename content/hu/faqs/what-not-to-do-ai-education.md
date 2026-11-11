---
title: "Mit kellene elkerülniük a pedagógusoknak a MI használatában?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
contributors: [editor]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A MI oktatási használatáról szóló útmutatások többsége azt mondja el, mit érdemes kipróbálni. Ez az oldal a másik lista: azok a gyakorlatok, amelyeket a bizonyítékok szerint abba kell hagyni, aszerint a szerep szerint rendezve, amelynek abba kellene hagynia őket. Szándékosan nem a téves hiedelmek listája – azokkal a [[addressing-common-misconceptions-ai-education|tévhitekkel foglalkozó GYIK]] oldal foglalkozik, és a [[misconceptions]] fogalomoldal magyarázza meg, miért maradnak fenn –, és nem is annak a listája, amit a kutatás még nem tud megmondani, mert azt a [[limitations-in-aied-research|az AIEd-kutatás korlátai]] tárgyalja. A fókusz itt a hiedelem utáni lépés: mit tesznek valójában az emberek, mibe kerül ez, és mit kell helyette tenni.

Három hiba ismétlődik minden szerepben. **Szubsztitúció** – egy eszköz elvégzi azt a gondolkodást, amelyet a tanulónak kellett volna elvégeznie, és a kimenetet úgy pontozzák, mintha a tanuló végezte volna. **Meg nem érdemelt bizonyíték** – egy könnyen gyűjthető jelzést (magabiztosság, folyékonyság, elköteleződés, befejezési arány) bizonyítékként kezelnek valamire, amit nem tud megmutatni. **Figyelmeztetésre bízott struktúra** – egy figyelmeztetéstől, egy szabályzatmondattól vagy egy képzési alkalmon azt kérik, hogy azt a munkát végezze el, amelyet a felület tervezésének, az értékelés tervezésének vagy az irányításnak kell elvégeznie.

## A rövid változat

**1.** Soha ne osztályozzon, idézzen vagy népszerűsítsen egy kimenetet annak a képességnek a bizonyítékaként, amely létrehozta.

**2.** Minden alkalommal gyűjtse be a segítség nélküli mérést a támogatott mérés mellé.

**3.** A folyékonyságot, a magabiztosságot és az elköteleződést a használat jellemzőinek tekintse, nem tanulásnak.

**4.** A védelmet a munkafolyamatba tegye, ne egy figyelmeztetésbe.

**5.** Tegyen fel, hogy minden adatot, amelyet az eszköz lát, megőriznek, összekapcsolnak és kompromittálnak.

**6.** Ha az állításhoz demó jár, de összehasonlítás nem, az marketing.

## A diákoknak

**Ne adja át azt a részt, amelyet gyakorolnia kellene.** A különbség nem az, mennyit használja a MI-t, hanem hogy melyik kognitív munka kerül át. A házi feladat kiszervezése javítja a házi feladat pontszámát, miközben rontja a zárt könyves vizsga pontszámát – egy középiskolai vizsgálatban 18%-os nyereség 20%-os veszteséggel szemben –, mert a visszahívható tudást építő gyakorlás az eszközhöz került ([[reducing-ai-misuse]]). Ha a gyakorlat a lényeg, az eszköz nem végezheti el a gyakorlatot.

**Ne olvassa a folyékonyságot pontosságként.** A folyékony szöveg egy nyelvi modell kimenete, függetlenül attól, hogy a tartalom igaz-e, és az a mechanizmus, amely meggyőzővé teszi, ugyanaz, amely tévedésbe viszi ([[hallucination-risk]]). Az adott állítást ellenőrizze, ne a bekezdés hangnemét. Az ellenőrzési szokás ritkán alakul ki magától: egy 900 felnőttből álló panelen, amely MI-összefoglalót kapott, az olvasók a benne idézett forrást a látogatások 1%-ában követték ([[trust-calibration]]).

**Ne fogadja el az egyetértést visszajelzésként.** A modellek lényegesen gyakrabban értenek egyet, mint az emberek – 11 modell körében a MI-válaszok 49%-kal gyakrabban értettek egyet a felhasználókkal, mint az emberi válaszok –, és éppen ez a többlet az, amitől az interakció támogatónak érződik ([[ai-sycophancy]]). Az a tutorsegítő, amely soha nem ért egyet Önnel, eltávolította azt a korrekciós jelzést, amelyért jött. A kifogást kérje, ne a helyeslést.

**Ne cserélje a kérdést válaszra, amikor elakad.** A termékeny küzdelem, amelyet kihagy, maga a tanulás; a választ előhívó segítségkérés más viselkedés, mint a súgást előhívó segítségkérés ([[help-seeking]], [[desirable-difficulties]]). Olyan eszközöket használjon, amelyek visszatartják a kész választ.

**Ne illesszen személyes, egészségügyi vagy családi információt egy eszközbe azért, hogy jobb választ kapjon.** Az eszköznek nincs kötelezettsége elfelejteni, és az adatvédelem ára nem látszik a válasz minőségén ([[privacy]]).

## A szülőknek és a családoknak

**Ne az eszközzel együtt készítse el a házi feladatot, és ne engedje, hogy Ön mellett készüljön el.** Az adatokban megjelenő minta pontszáminfláció rejtett költséggel jár: a házi feladat pontszáma 18%-kal nő, miközben a zárt könyves vizsga pontszáma 20%-kal csökken ([[reducing-ai-misuse]]). Amit ellenőrizni tud, az a folyamat – meg tudja-e a gyermeke magyarázni a lépést, újra el tudja-e végezni papíron, és meg tudja-e mondani, mi volt bizonytalan benne? Ha nem, az eszköz készítette el a feladatot.

**Ne engedje, hogy egy csevegőbot legyen a bizalmasa.** A hízelgő rendszerek sokkal gyakrabban értenek egyet, mint az emberek – 11 modell körében 49%-kal gyakrabban –, és éppen az egyetértés az a mechanizmus, amelytől biztonságosnak érződik velük beszélni ([[ai-sycophancy]]). Egy nagy longitudinális vizsgálatban a felhasználók csaknem olyan gyakran fordultak hízelgő MI-hez személyes tanácsért, mint közeli barátokhoz és családtagokhoz, miközben valós kapcsolataikban alacsonyabb elégedettséget mutattak ([[sycophantic-ai-social-interaction-2026]]). Az a gyermek, aki a szenvedését egy mindig egyetértő modellhez viszi, nem meghallgatást kap; tükrözést kap.

**Ne adjon generatív csevegőbotot kisgyermeknek, és ne nevezze felügyeltnek azzal, hogy Ön a szobában van.** Az életkor szerinti, szintekre bontott útmutatás konkrét: állványozott, nem generatív tevékenységek 9 és 12 év között, felügyelt generatív használat etikai érveléssel 13 éves kortól ([[ai-guidance-children-under-13]]). A legkisebb gyermekeknél a kockázat a hit – a művelet előtti gondolkodású gyermekek igaznak fogadják el a generált tartalmat, és a rendszerek visszajelzéseikben fejlődéslélektanilag nincsenek kalibrálva. A felnőtt közös használat azt jelenti, hogy megkérdezi, mit tett éppen a játék, nem azt, hogy az ajtóból figyel ([[early-childhood-elementary-ai-education]]).

**Ne tegye fel, hogy az iskola eszköze védi a gyermeke adatait, csak mert az iskola választotta.** Kérdezze meg, mit őriznek meg, mennyi ideig, tanít-e bármit is vele, és ki más látja ([[privacy]]). A tudatosság nem következik a kitettségből: egy hónappal azután a tanóra után, amelyen a diákok a saját naplózott viselkedésüket élőben kivetítve látták, egy 7. évfolyamos csoport 66%-a még mindig a legkevésbé védő csevegőbot-beállítást választotta ([[privacy]]).

**Ne használjon detektoreredményt a gyermeke vádolására, vagy egy iskola vádjának alátámasztására.** A legerősebb kontrollált tesztben a detektorok a módosítatlan emberi írás 9–15%-át jelölték meg, és az emberiesített MI-átírások kevesebb mint 4%-át fogták el; reális alaparánál a téves pozitívok meghaladják a valós pozitívokat ([[ai-detection]]). A megjelölést kezelje okként arra, hogy elkérje a vázlatok előzményeit és beszéljen, nem megállapításként.

**Ne vonja le azt a következtetést, hogy az eszköz betiltása a biztonságos választás.** Az alulbizalom kalibrációs hiba, amelynek megvan a maga költsége – az elmaradt képesség –, és a számítást az illesztett magabiztosság jelenti, nem az elkerülés ([[trust-calibration]]). A hasznos szülői lépés ugyanaz, mint amit a kutatás a diákok számára alátámaszt: követeljen meg egy ellenőrzési lépést, és tegye elég olcsóvá ahhoz, hogy egy fáradt gyermek tényleg elvégezze ([[verify-ai-output]]).

**Ne tévessze össze a tartalomszűrőt a biztonsággal.** A szűrők azt kezelik, mit mond egy rendszer; nem kezelik azt, mit tesz egy interakció a tanulóval – az elkopó gyakorlást, a hízelgő egyetértést vagy az egyenetlen visszautasításokat ([[pedagogical-safety]]).

## Az oktatóknak

**Ne tanúsítson kimenetet képességként.** Egy csiszolt beadandó egy csiszolt beadandó bizonyítéka. Ha az értékelés nem tudja megkülönböztetni, mit tud a diák segítség nélkül, az értékelés már nem azt méri, amit a tanúsítvány állít ([[assessment-validity]], [[authentic-assessment]]). A megoldás a feladat újratervezése, nem szigorúbb becsületkódex.

**Ne használjon detektorpontszámot a szabálysértés bizonyítékaként.** A legerősebb kontrollált teszt az útmutatásnak megfelelő, könnyű MI-szerkesztés 38–80%-át és a módosítatlan emberi írás 9–15%-át jelöli meg, miközben az emberiesítő szolgáltatáson átfuttatott átírások kevesebb mint 4%-át fogja el; 14 kereskedelmi eszköz mindegyike 80% alatti pontosságot ért el egy független összehasonlításban, és reális alaparánál a téves pozitívok meghaladják a valós pozitívokat ([[ai-detection]], [[should-we-use-ai-detectors]]). Egy detektor elindíthat egy beszélgetést; befejezni nem tudja.

**Ne adjon MI-t olyan értékeléshez, amelyet nem tervezett újra.** Ha egy eszközt olyan feladatra csavaroz, amelyet segítség nélküli teljesítményre terveztek, pontosan azt a pontszáminflációt kapja, amely elrejti a veszteséget – házi feladat fel, vizsga le. Minden jeggyel értékelt feladatnál kérdezze meg, mit mutatna a segítség nélküli változat, és előbb a feladatot javítsa ([[reducing-ai-misuse]]).

**Ne kezelje az elköteleződést tanulásként.** A feladatra fordított idő, az elégedettség, a segítségkérés mennyisége és a csevegési aktivitás mind könnyen műszerezhető, és mind összefér azzal, hogy egyáltalán nincs tanulás. Egy védősáv, amely a diákok helytelen MI-álláspontra váltását 42–60,5%-ról 5,7–8,2%-ra csökkentette, nem hozott mérhető tanulási hatást a foglalkozáson belül (β = 0,03, p = 0,18). A viselkedés megmaradt; a tanulás nem mozdult ([[student-engagement]]).

**Ne hagyatkozzon figyelmeztetésre ott, ahol a felület korlátozhatna.** Az a tutorsegítő, amely elő tudja állítani a kész választ, határidőnyomás alatt elő is fogja. A működő védősáv az interakcióba épített, nem a tantervben álló mondat ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Ne illesszen diákok munkáját, IEP-eket, fegyelmi nyilvántartásokat vagy azonosítható vázlatokat fogyasztói eszközbe.** Az adatminimalizálás olyan tervezési döntés, amelyet a diák nevében hoz meg, akár gondolt rá, akár nem ([[privacy]]).

## Az oktatásfejlesztőknek és a tanári kar fejlesztőinek

**Ne tartson eszközképzést, és ne nevezze MI-írástudásnak.** Egy promptokról szóló alkalom egy termék felületét tanítja meg; az [[ai-literacy]] annak a képessége, hogy megítélje, mikor kell használni az eszközt, mit tesz, és mit kell ellenőrizni. Azok a tanárok, akik a gombokat tanulják meg az ítélőképesség nélkül, magabiztossággal és kalibráció nélkül távoznak ([[teacher-ai-competency]]).

**Ne tartson egyszeri szakmai fejlődési alkalmat, és ne várja, hogy a gyakorlat megváltozik.** A [[professional-training|szakmai tanulásról]] szóló bizonyítékok következetesek az időtartam és az utánkövetés tekintetében: az egyszeri alkalmak az önbeszámolt magabiztosságot mozgatják, a tantermi viselkedést ritkán, és a magabiztosság növekedése elfedheti a változás hiányát ([[educational-development]]).

**Ne hagyja figyelmen kívül azt az értékelési rendszert, amelyet érvényben hagy.** A tanári kar csak akkor veszi át a tanított gyakorlatot, ha az értékelés, amelynek alá vannak vetve, nem bünteti érte. Egy MI-ellenálló feladattervezésről szóló műhely, amely egy változatlan vizsgarendszer mellett fut, azt tanítja meg a tanári karnak, hogy a képzés díszlet.

**Ne mutassa be azt a kritikátlan használatot, amely ellen figyelmeztet.** Ha úgy mutat be egy eszközt, hogy a tanári kar előtt generál egy óratervet, ellenőrzési lépés nélkül, azt tanítja a hallgatóságnak, hogy a kimenet a termék.

**Ne fogadjon el szállítói demót a hatékonyság bizonyítékaként.** Az az állítás, amelyet értékel, a tanulásról szól, a demó pedig képességet mutat. Kérjen segítség nélküli eredményeket, alcsoport-eredményeket és többfordulós biztonsági tesztelést ([[checking-whether-educational-ai-works]]).

## Az oktatási szoftverek fejlesztőinek

**Ne azt a mérőszámot optimalizálja, amelyet könnyű naplózni.** A foglalkozás hossza, az üzenetek száma és az elégedettségi értékelések szinte minden változtatás hatására javulni fognak; a tanulás gyakran nem. Ugyanaz a csapat, amely egy védősávot szállít, szállíthat egy irányítópultot is, amely az interakció mennyiségét jutalmazza, és a kettő ellenkező irányba fog mutatni ([[learning-analytics]], [[student-engagement]]).

**Ne szállítson detektort a konstruktum elleni validációs vizsgálat nélkül.** Egy modell, amely 0,98 F1-et ér el egy kiszivárgott felosztáson, 0,60-ra eshet a kísérlettől független validáció során, egy mosolyérzékelő pedig *negatívan* is futhat a megfigyelő által értékelt empátiával szemben, mert hiányzik belőle az a kontextus, amellyel egy emberi értékelő rendelkezik ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Tegye közzé a validációs protokollt, ne csak a címszámot.

**Ne következtessen érzelemre, figyelemre vagy „elköteleződésre” arcokból és testekből beleegyezés és megadott cél nélkül.** A többfordulós kockázat nem azonos az egyfordulóssal: egy áttekintésben a károkozási arányok az egyfordulós értékelések körülbelül 18%-áról a többfordulósok körülbelül 78%-ára emelkedtek, így az izolált promptokon tanúsított rendszer olyan interakcióra kap tanúsítványt, amelyet a diákok nem folytatnak ([[pedagogical-safety]], [[privacy]]).

**Ne rejtse el az átadást.** Az a diák, aki nem tudja megmondani, mikor generál vagy mikor keres vissza egy tutorsegítő, vagy mikor van ember a folyamatban, nem tudja kalibrálni a bizalmat iránta, az automatizálási elfogultság pedig akkor működik a legtisztábban, amikor a rendszernek igaza van, és az ember már nem ellenőriz ([[automation-bias]], [[trust-calibration]]).

**Ne a benchmarkra tervezzen, és utána ne a tanteremre hivatkozzon.** A benchmark-teljesítmény a benchmark tulajdonsága. Számoljon be az általa tesztelt használati feltételekről, a populációról és a feladatokról; különben a számot egy másik környezetre tett ígéretként fogják olvasni ([[limitations-in-aied-research]]).

**Ne tegye az eszközt a segítség egyetlen útvonalává.** Ha a diák visszajelzéshez való hozzáférése egy modell elérhetőségétől, kvótájától vagy licencétől függ, az esélyegyenlőség kérdését már a beszerzés eldöntötte ([[equity-in-ai-education]]).

## Az oktatási vezetőknek

**Ne vásároljon képességállításokat kimeneti bizonyítékként.** A szállítók be tudnak mutatni egy terméket; csak egy értékelés tud tanulást bemutatni. Követeljen segítség nélküli eredményeket, alcsoport-eredményeket, lemorzsolódást és tervet arra, mi történik a kísérlet végén ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Ne vezessen be megfigyelést azért, mert elérhető.** A vizsgafelügyeleti rendszerek arcképeket, személyazonosító okmányokat, teremszkenneléseket – köztük 360 fokos pásztázásokat – és mikrofonhangot rögzítenek, és 80 tanulmány áttekintése szerint csak 25%-uk felelt meg annak a jelentési küszöbnek, amelyet egy intézménynek a bevezetés előtt meg kell válaszolnia ([[privacy]], [[remote-proctoring]]). A költség a diákokat terheli; a bizonyítékbázis vékonyabb, mint amit a szerződés sugall.

**Ne írjon csak tiltásokból álló szabályzatot, és ne nevezze irányításnak.** Egy tilalom értékelés-újratervezés, támogatás és fellebbezési útvonal nélkül elmozdítja a viselkedést ahelyett, hogy megelőzné, és azokat a diákokat bünteti, akik a legkevésbé tudnak vitatni egy téves vádat. A szabályzatnak az értékelőre is ki kell terjednie: egy beadandóba ágyazott öt közvetett promptinjektálási stratégia közül kettő megemelte egy elégtelen esszé pontszámát ([[institutional-ai-policy]], [[course-ai-policy]]).

**Ne azonosítsa a bevezetést a javulással.** Egy irányítópult, amely használatot, elégedettséget és befejezést jelent, sikernek fog látszani, miközben a tanulási mérőszám lapos marad. Döntse el előre, melyik eredmény miatt mondaná fel a szerződést ([[ai-ed-evaluation]]).

**Ne engedje, hogy az akadálymentesség akadálymentesítési kérelemként érkezzen.** A neurodivergens diákok digitális segítő technológiáiról szóló 40 tanulmány áttekintésében 28 tette a részvétel feltételévé a hivatalos diagnózist – ez a diagnózishoz kötött modell kizár minden olyan tanulót, akinek vannak igényei, de nincs címkéje ([[accessibility]], [[universal-design-for-learning]]).

## Az oktatáskutatóknak

**Ne az önbeszámolóra bízza az oksági állítást.** A magabiztosság, az észlelt tanulás és az elégedettség kimenetek, de nem azok a kimenetek, amelyeket a legtöbb tanulmány szerint mér. Az [[empathy|empátia]] szakirodalma a legvilágosabb eset: egy terület, amely empátiát szándékozik tanítani, többnyire kényelmet mér, és 17 tanulmány legerősebb áttekintése szerint a magabiztosság növekedése sokkal gyakoribb, mint az empátia bizonyítéka ([[self-report-measures]], [[empathy]]).

**Ne idézzen hatásmértéket a tervezése nélkül.** A kritikai gondolkodás és a MI kapcsolatáról szóló 80 HCI-tanulmány kritikai áttekintésében 42 nem futtatott kontrollcsoportot. Egy 30 diákból álló, egy kurzuson, egy helyszínen mért címszám a törékeny állítás szokásos formája ([[limitations-in-aied-research]]).

**Ne jelentse a heterogenitást a modell nélkül.** Ugyanaz az adat fix hatású modell mellett I² = 82,98%-ot, véletlen hatású modell mellett 15,75%-ot ad; a modellje nélkül idézett I² értelmezhetetlen ([[meta-analysis-systematic-review]]).

**Ne általánosítson egyetlen kontextusból, és ne nevezze megállapításnak.** Egy kurzus, egy intézmény, egy modellverzió, egy nyelv. A modell viselkedése minden kiadással változik, az egy generáción tanított detektorok pedig a következőn elveszítik a felidézésüket ([[research-gaps-aied]], [[ai-detection]]).

**Ne kezelje mechanizmusként az interakció és a kimenet közötti korrelációt.** A promptok mennyisége nem méri a kognitív tehermentesítést – a mennyiség szerinti klaszterek nem különböztek a kognitív munka eloszlásában, és a kézzel kódolt párbeszédek a 125 párbeszéd 49,6%-ában egyáltalán nem találtak tehermentesítést ([[cognitive-offloading]]). A munkát mérje, ne annak látható nyomát.

**Ne publikáljon olyan korlátokról szóló bekezdést, amelyet a vizsgálat előtt is meg lehetett volna írni.** Nevezze meg a konkrét fenyegetést, a konkrét számot és azt az állítást, amelyet korlátoz. Ettől lesz egy korlát használható a következő olvasó számára ([[interpreting-and-applying-aied-research]]).

## Miért tartoznak ezek össze

A fenti elemek mindegyike annak az esete, hogy egy proxyt ítéletté léptetnek elő: az esszé a szerzőt képviseli, a pontszám a szabálysértést, a mosoly az empátiát, a demó a tanulást, a szabályzat az irányítást. A korrekció mindig ugyanaz a lépés – nevezze meg a konstruktumot, keressen egy mérőszámot, amely ellenkező eredményt is hozhat, és gyűjtse be a kényelmes mellett.

Ez az oka annak is, hogy ezek az óvások nem azoknak a dolgoknak a listája, amelyek mindig hibásak. Egy detektor lehet ok arra, hogy beszéljen egy diákkal. Egy csevegőbot lehet hasznos próba. Egy irányítópult lehet ok egy kérdés feltevésére. A kár a szubsztitúcióban van, nem az eszközben.

## Mit tegyen ezen a héten

- Válasszon ki egy jeggyel értékelt feladatot, és írja le, mit mutatna az eszköz nélkül. Ha a válasz az, hogy „semmi mást”, akkor a feladat a probléma.
- Adjon hozzá egy segítség nélküli mérést egy kurzushoz, amely jelenleg csak a támogatott teljesítményt jelenti.
- Olvassa el intézménye vizsgafelügyeleti vagy MI-eszköz-szerződését a megőrzés, a másodlagos felhasználás és az adatvédelmi incidens feltételei szempontjából – és ellenőrizze, hogy a beleegyezési szöveg leírja-e, mit rögzít valójában a rendszer.
- Kérjen a szállítótól segítség nélküli eredményeket és alcsoport-eredményeket. Ha a válasz egy demó, megkapta a válaszát.
- A következő tanári alkalmon a második felét az értékelés újratervezésére szánja, ne a promptokra.

## Hová tovább

- [[addressing-common-misconceptions-ai-education]] — a gyakorlatok mögötti hiedelmek, és hogyan lehet azokat lekezelés nélkül korrigálni.
- [[limitations-in-aied-research]] — amit a bizonyítékbázis még nem tud alátámasztani.
- [[reducing-ai-misuse]] — a visszaélés strukturális karjai, és hogy miért múlják felül a figyelmeztetést.
- [[pedagogical-safety]] — mit tehet egy tutorsegítő a tanulóval, miközben minden tartalmi ellenőrzésen átmegy.
- [[should-we-use-ai-detectors]] — a detektoros bizonyíték teljes egészében.
- [[checking-whether-educational-ai-works]] — hogyan értékeljen egy állítást, mielőtt bevezeti.
