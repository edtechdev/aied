---
title: "Az AIED-kutatás értelmezése és alkalmazása"
created: "2026-09-19T05:41:27-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/interpreting-and-applying-aied-research"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

> **Az AIED-kutatás értelmezése és alkalmazása** — hogyan döntsük el, hogy egy MI-oktatási eredmény érdemes-e cselekvésre, akár tanítunk, programot vezetünk, kurzust tervezünk vagy szoftvert építünk. Nem kell statisztikát tudnia ehhez az oldalhoz. Azzal a kérdéssel indul, amely a gyakorló szakembernek valóban felmerül — *megtegyem-e?* —, végigveszi azt a néhány dolgot, amely eldönti, és a technikai részleteket későbbi szakaszban tartja azoknak, akik akarják vagy szükségük van rá. A rövid változat: egy eredmény akkor érdemes cselekvésre, ha tudja, mit hasonlítottak össze, mit mértek, kit vizsgáltak, és hogy az eszköz még abban a formában létezik-e, amelyben vizsgálták. A legtöbb állítás, amely eljut az oktatókhoz, a vezetőkhöz és a fejlesztőkhöz, e négy közül valamelyiken elbukik.

## Megfontolandó kérdések

- Egy szállító, egy híradás vagy egy kolléga azt mondja, hogy egy MI-eszköz javította a tanulást. Mi az az egy dolog, amit látni szeretne, mielőtt a saját kurzusában kipróbálná — és tudná, hol keresse?
- A tudásbázis minden cikkoldalán most van egy **Mit jelent ez a gyakorlatban** szakasz, és a legtöbbön egy **Korlátok** szakasz is. A kettőt együtt olvasva mit mond el mindegyik, amit a másik nem?
- A diákok gyakorolnak egy MI-eszközzel, és jobban teljesítenek a gyakorló munkában, majd rosszabbul a [[summative-assessment|zártkönyves vizsgán]]. Melyik szám az a tanulási eredmény, amely a kurzusának fontos — és a jelenlegi értékelései észlelnék-e a különbséget?
- Egy tanulmány nagy javulást ígér, de 30 diákot követett egy kurzusban, egy intézményben, és a vizsgált eszköz verziója már nem az, amit bárki használ. A két tény közül melyik aggasztja jobban, és miért?
- Sok MI-eszköz növeli, mennyit használják a diákok, anélkül hogy növelné, mennyit tanulnak. Ha választania kellene egy elköteleződést növelő és egy támogatás nélküli teljesítményt növelő eszköz között, milyen bizonyíték döntené el?
- Arra kérik, hogy hagyjon jóvá vagy vásároljon meg egy eszközt a szállító saját hatékonysági számai alapján. Mit szeretne látni feltárva arról, hogyan készültek azok a számok?

## Bevezetés

Ez az oldal azoknak szól, akiknek dönteniük kell valamiről: egy oktatónak, aki azon gondolkodik, megváltoztasson-e egy feladatot; egy [[administrator|vezetőnek]], aki egy pilotot mérlegel; egy tanulástervezőnek, aki kurzust épít; egy szoftverfejlesztőnek, aki eldönti, mit tegyen egy funkció; vagy egy kutatónak, aki bármelyiküknek elmagyaráz egy eredményt.

Két szokás teszi a különbséget, és egyikhez sem kell kutatási képzés.

**Először az Önnek írt két szakaszt olvassa el.** A tudásbázis minden cikkoldalán most van egy **Mit jelent ez a gyakorlatban** szakasz — általában három-öt konkrét lépés, amelyet abból a tanulmányból vezettek le —, és a legtöbbön egy **Korlátok** szakasz, amely megmondja, mit nem támogathat a tanulmány. Ezeket a tanulmány eredményei előtt olvassa el, nem után. A gyakorlati szakasz megmondja, mire jó a tanulmány; a korlátok szakasz megmondja, hol ér véget. Ha a gyakorlati szakasz hiányzik vagy homályos, kezelje úgy az oldalt, mint befejezetlent, nem mint bizonyítékot.

**Az állítást ítélje meg, nem az állítás magabiztosságát.** Az [[ai-education|MI az oktatásban]] területéről szóló állítások általában pontosak valamiben, és félrevezetők abban, ami Önt érdekli, mert egy tanulmány és az Ön tanterme négy dologban különbözik: mihez hasonlították, mit mértek, ki vett részt, és az eszköz melyik verzióját használták. Az oldal további része köznyelven adja meg az ellenőrzéseket, majd mindegyikük mögötti bizonyítékot azoknak, akik akarják.

Az alábbiak nem helyettesítik a szomszédos oldalakat sem. A [[research-methods-aied|kutatásmódszertan az MI oktatásában]] azt tárgyalja, hogyan épülnek a tervezések, a [[limitations-in-aied-research|korlátok az AIED-kutatásban]] a szakirodalom visszatérő gyengeségeit katalogizálja, az [[ai-ed-evaluation|AIED-értékelés]] azt tárgyalja, hogyan értékelik a rendszereket és a kimeneteket, a [[differential-effects-across-learner-groups|differenciális hatások a tanulócsoportok között]] pedig azt, kit tartalmaz és kit nem tartalmaz egy eredmény.

## Négy kérdés, amely eldönti a legtöbb állítást

Tegye fel ezeket, mielőtt időt, pénzt vagy egy félévet költ valamire.

**1. Mihez hasonlították, és tisztességes volt-e az összehasonlítás?** Az „a diákok, akik használták az MI-t, jobban teljesítettek, mint akik nem" csak akkor mond valamit, ha a másik diákok valami valóságosat csináltak. Ha az összehasonlítás a szokásos menet volt — vagy semmi —, akkor az eredmény az eszközt együtt csomagolja a plusz idővel, a plusz figyelemmel és az újdonsággal. Mit keressen: egy **kontrollcsoportot**, amely hiteles alternatívát kapott, és a két feltételhez való véletlen hozzárendelést.

**2. Pontosan mit mértek?** Itt buknak el csendesen a legizgalmasabb állítások. A teszteredményeket, a házi feladat minőségét, a [[motivation|motivációt]], az attitűdöket és az [[student-engagement|elköteleződést]] egyetlen „teljesítmény" számmá vonják össze, vagy az eszköz jelenlétében mért teljesítményt jelentik tanulásként. Az az eszköztől függő tanulás nem ugyanaz, mint a tartós tanulás. Mit keressen: mit mért a műszer, validálták-e arra a populációra, és mértek-e eredményt **az MI nélkül**.

**3. Kit vizsgáltak, hányat, és mennyi ideig?** Harminc diák egy kurzusban jelzés, nem eredmény. Egy négyhetes beavatkozás nem mondhat semmit egy évről. És egy olyan diákokról szóló tanulmány, akik nem hasonlítanak az Önéihez, még mindig hasznos — hipotézis a saját környezetéről, nem előrejelzés. Mit keressen: mintanagyság, hogyan toborozták a résztvevőket, egyetlen helyszín, időtartam, és hogy bármely alcsoport elég nagy volt-e az elemzéshez.

**4. Az eszköz még az-e, amelyet vizsgáltak?** Az MI-képesség gyorsabban mozog, mint a publikálás. Egy 2025-ös eredmény a 2025-ös modellgenerációt írja le — néha egy konkrét verziót, néha egy konfigurációt, amelyet ma senki nem használ. Ez nem teszi hamissá az eredményt; dátumossá teszi, és azt jelenti, hogy az állítást újra kell ellenőrizni, nem örökölni. Mit keressen: modellverzió és az adatgyűjtési időablak.

## Mit mondanak a bizonyítékok az MI-állításokról általában

Ha egy dolgot megjegyez ebből az oldalból, jegyezze meg, hogy a fő szám általában felfújt, és az összehasonlítás általában gyenge. Ez nem marginális nézet — ezt jelentik a terület saját auditjai. Több jól megtervezett tanulmány valódi nyereséget mutat; a lényeg az, hogy a bizonyítási teher az állításnál van.

- **Az átlagos hatás nagyjából kétharmada eltűnik**, ha korrigál azzal a ténnyel, hogy a lenyűgöző eredményeket publikálják, a nem lenyűgözőeket nem. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš és mtsai. (2026)]] 67 áttekintés 1 840 effektméretét vonták össze, és a korrigált átlag a publikált medián nagyjából egyharmada volt — SMD 0,196 a 0,67-tel szemben.
- **Egy terméknév nem tanítási módszer.** Egy ismert meta-analízis mögötti összehasonlításokat auditálva [[weidlich-chatgpt-effect-search-cause-2025|Weidlich és mtsai. (2025)]] azt találták, hogy csak **21%-uknak** volt jól definiált kezelése, kontrollcsoportja és érvényes tanulási mérője — és a „ChatGPT használata" jelentett előnye nagyobb lett, mint a célra épített [[intelligent-tutoring|intelligens tutoriális rendszereké]] (g = 0,7 a 0,66-tal szemben), ami figyelmeztető jel, nem diadal.
- **Az eszközzel mért teljesítményt rendszeresen összekeverik a tanulással.** Egy [[k-12|K-12]] matematikai tanulmányban az általános célú [[conversational-ai|chatbot]] használatával gyakorló diákok jobb gyakorlati jegyeket szereztek, majd **nagyjából 17%-kal rosszabbul** teljesítettek, mint az MI-hozzáférés nélküli társaik a zártkönyves záróvizsgán ([[stanford-evidence-base-ai-k12-2026|a Stanford K-12-es MI-bizonyítékbázisa]]).
- **A terület saját áttekintései nem élik túl az auditot.** [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] auditja **14 lektorált meta-analízis** esetében, amelyek azt állítják, hogy az MI javítja az oktatást, azt találta, hogy **egyik** sem szolgált érvényes alapot az általa megfogalmazott állításokhoz, és 46 véletlenszerűen kiválasztott elsődleges tanulmány közül **61%** érvényességi aggályokat vetett fel. A probléma nem egy rossz cikk; hanem egy jelentési kultúra.
- **Egy áttekintés számszerűsítheti a jelentési torzítást a saját korpuszában.** 155 felsőoktatási tanulmány rendszertanulmányi áttekintése szerint 117 (75,5%) számolt be sikeres megvalósításról, 124 (80,0%) csak rövid távú hatást fedett le, és mindössze 23 (14,8%) számolt be [[ethics|etikai]], méltányossági vagy irányítási kudarcokról — az az egyensúlyhiány, amelyet a fenti ellenőrzések leírnak, az áttekintés saját bizonyítékbázisán mérve ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga (2026)]]).
- **Az önbevallások mindenkit hízelgetnek.** Az emberek saját [[ai-literacy|MI-készségeiket]] nagyjából **40%-kal** magasabbra értékelik, mint a teljesítménymérések mutatják, ezért az elégedettségi és magabiztossági felmérések a leggyengébb bizonyítékok, amelyekre cselekedni lehet ([[self-report-measures|Önbevallásos mérések]], [[educational-measurement|Oktatási mérés]]).
- **A tantermekben már lévő termékek többségének nincs semmilyen független bizonyítéka.** [[instruction-partners-ai-in-action-learning-tour-2026|Instruction Partners 2025–26-os tanulási körútja]] 20 diáknak szóló MI-terméket profilozott, és a 16 teljes profillal rendelkező közül csak hétnek volt olyan független áttekintése, amely a [[learning-gains|tanulói teljesítményt]] vizsgálta diákcsoportokon át az Egyesült Államokban; kettőt csak külföldön vizsgáltak, négynél folytak tanulmányok, három pedig kizárólag belső adatokra támaszkodott. A szerzők amellett érvelnek, hogy a kiemelt csoportokat lefedő független oksági tanulmányoknak minden diáknak szóló termék esetében elvárásnak kellene lenniük — még nem ez a norma azon eszközöknél, amelyeket az iskolák már használnak.

## Hogyan lesz egy eredményből döntés

A sorrend, amely a legtöbb elpazarolt erőfeszítést takarítja meg, sorrendben.

1. **Először írja le az eredményét.** Ne „használjunk több MI-t", hanem „a diákok tudják megtenni X-et az eszköz nélkül". Ha az eredménye a támogatás nélküli teljesítmény, akkor egy támogatott teljesítményt mérő tanulmány szomszédos bizonyíték, nem közvetlen bizonyíték.
2. **Keresse meg az összehasonlítást és a mérést** — a tanulmányban vagy a cikkoldala gyakorlati szakaszában. Ha bármelyik hiányzik, kezelje az állítást demóként, nem eredményként.
3. **A korlátok szakaszát útmutatásként olvassa, nem felelősségkizáró nyilatkozatként.** Az „egyetlen kurzus, önbevallott eredmények, négy hét" pontosan megmondja, mely feltevéseit nem fedi le a tanulmány.
4. **Ellenőrizze a verziót és a dátumot.** Ha a tanulmány két évvel ezelőtti modellgenerációt használt, tervezzen újratesztelést, ne feltételezést.
5. **Nevezze meg a lehetővé tevő feltételeket.** Költség, licencek, személyzeti idő, adatszabályok, és hogy a diákoknak fizetniük kell-e azért a csomagért, amely valóban működik. A tanulmányok ritkán hordozzák ezeket, pedig eldöntik, túlél-e egy beavatkozás egy félévet. [[chick-faculty-development-ethical-ai-2026|Egy tíz résztvevős oktatásfejlesztési tanulmányban]] mindenki azt mondta, folytatni fogja az MI használatát, miközben ugyanezek az emberek személyes előfizetésekről számoltak be az eszközhozzáféréshez, és nem volt idejük a tervezett átalakításokra.
6. **Kísérletezzen kis léptékben, és mérje a támogatás nélküli feltételt.** Egy rövid előzetes-utáni mérés egyetlen, eszköz nélkül elvégzett értékeléssel jobb, mint egy elégedettségi felmérés. A kicsi és őszinte jobb a nagynál és retorikusnál. Lásd a [[learning-design|tanulástervezést]] arról, hová illeszkedik ez a kurzustervezésben.
7. **Tűzzön ki felülvizsgálati dátumot, és legyen hajlandó elvetni az állítást.** Amikor egy tanulmány előfeltevése olyan képesség, amely már nem létezik, a becsületes lépés az állítás visszavonása, nem határidő nélküli idézése — ugyanaz a fegyelem, amelyet ez a tudásbázis a saját oldalaira alkalmaz.

## Szavak, amelyekkel a kutatásban találkozni fog

Közérthető fordítások, hogy átfuthasson egy tanulmányt vagy egy szállítói oldalt módszertani háttér nélkül.

- **Effektméret** — mekkora volt a különbség, egy olyan skálán, ahol a 0 a semmi. A kis értékeket „lökésnek" tekintse, nem „átalakulásnak".
- **Statisztikailag szignifikáns** — valószínűtlen, hogy pusztán a véletlen műve *ebben a mintában*. Semmit nem mond arról, hogy nagy-e a hatás, vagy hogy az Ön osztályában bekövetkezik-e.
- **Konfidenciaintervallum** — azoknak az eredményeknek a tartománya, amelyeket az adatok nem tudnak kizárni. Ha a tartomány tartalmaz nullát, az eredmény lehet semmi, bármennyire érdekes a fő szám.
- **[[meta-analysis-systematic-review|Meta-analízis]]** — olyan tanulmány, amely sok tanulmányt von össze. Erőteljes, és csak annyira jó, mint amit összevont, ezért auditálják az áttekintéseket.
- **Publikációs torzítás** — az érdekes eredmények megjelennek, az unalmasak nem, így a szakirodalom átlaga rózsásabbnak látszik a valóságnál.
- **Önbevallás** — emberek, akik magukat írják le. Hasznos az attitűdökhöz, gyenge a kompetenciához vagy a viselkedéshez.
- **Kontrollcsoport** — az összehasonlítási feltétel. A legfontosabb dolog, amit keresni kell.
- **Előzetes-utáni** — összehasonlító csoport nélkül, előtte és utána mérve. Sugallatos, soha nem meggyőző.
- **Alcsoport-elemzés** — a minta egy szeletére vonatkozó eredmények. Általában alulerősített, ezért hipotézisként kezelje.
- **Replikáció** — valaki más ugyanazt az eredményt kapta. Ritka, és a legjobban rendelkezésre álló bizonyíték.
- **[[benchmark|Benchmark]]** — rögzített feladathalmaz rendszerek pontozásához. A pontszámok mozdulnak, amikor a cél mozdul, ezért ellenőrizze a dátumot.

## Amikor mégis lassítani kell

- **Az állítás a szállítótól, a szállító mérőszámain származik.** Ez még lehet informatív — az egyik [[intelligent-tutoring|MI-tutorálási]] szolgáltató az emberi szakértőkhöz kalibrált elköteleződési mérőszámról számol be F1 0,83-nál, a javulások pedig több mint 40, öt hónap alatt végzett kísérletből származnak ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi és mtsai., 2026]]) —, de a konstruktum, az értékelők és a mérőszám a szállító választásai. Kérje az összehasonlító csoportot és a támogatás nélküli eredményt.
- **Az automatizált pontozást megoldottnak tekintik.** Az emberi értékelőkkel való magas egyezés megbízhatóság, nem minőség. Egy pontozási tanulmányban az emberi értékelők nagyjából r = 0,88 szinten egyeztek a többszereplős konszenzussal, így az r = 0,85 körüli automatizált pontszámok már a feladat saját mérési plafonján voltak ([[know-when-to-trust-ai-scoring-reliability-2026|Mikor bízzunk az MI-pontozásban]]).
- **A hivatkozásjegyzék nehéz terhet cipel.** Harminc, ellenőrizhetően hamisított bibliográfiai információt tartalmazó hivatkozási tételt igazoltak 14 [[cs-education|számítástechnika-oktatási]] cikkben, mind 2025-ből és 2026-ból ([[citation-errors-hallucinations-computing-education-2026|Denny és mtsai., 2026]]). Ha egy állítás hivatkozáson nyugszik, ellenőrizze a hivatkozást.
- **Senki nem mérte azt a viselkedést, amelytől a szabályzata függ.** 493 deduplikált rekord és 14 kiemelt tanulmány áttekintésében egyetlen tanulmány sem mérte, hogy az ellenőrzés sikerült-e *és* mit tett utána a tanuló vele, egy független kimenetminőségi standardhoz mérve ([[verification-quality-reliance-calibration-genai-2026|ellenőrzés és támaszkodás-kalibráció]]). A kurzus-szabályzatok pontosan ettől a viselkedéstől függnek.

## Ha eszközt épít vagy vásárol

Ugyanezek az ellenőrzések fordítva tervezési követelményekké válnak, a részleteket pedig a tudásbázis értékelési oldalai hordozzák ([[ai-ed-evaluation|AIED-értékelés]], [[automated-assessment|Automatizált értékelés]]).

- **Tegye az összehasonlítást a funkció specifikációjának részévé.** Döntse el, mit tenne a tanuló egyébként, és tudja megmondani, miért jobb az Ön eszköze annál — nem azt, miért jobb a semminél.
- **Mérje a támogatás nélküli feltételt.** Ha az eredménye a tanulás, vegyen bele egy eszköz nélkül elvégzett feladatot; a támogatott teljesítmény önmagában éppúgy félrevezeti Önt, ahogy a vásárlóit is.
- **Jelentse, hogyan validálták az automatizált ítéleteit** — az aranystandardot, a kalibrációs célt, ki döntötte el a nézeteltéréseket —, és megbízhatóságként jelentse, nem minőségként.
- **Nevezze meg a verziót és a dátumot** minden hatékonysági állításban, mert a következő kiadása érvényteleníti.
- **Mutassa meg az ellensúlyokat:** az egy diákra jutó költséget, a [[accessibility|hozzáférhetőséget]], az adatkezelést, és hogy mi történik a díjmentes csomagon lévő tanulókkal. Lásd az [[ai-use-disclosure|MI-használat feltárását]], a [[privacy|magánéletet]] és az [[governance|irányítást]].

## Azoknak, akik látni akarják a bizonyítékokat

A fenti ellenőrzések nem népi bölcsesség; dokumentált kudarcokból származnak ebben a szakirodalomban. Ez a szakasz azoknak tartja meg a részleteket, akik átnéznek egy cikket, megvédenek egy döntést, vagy amellett érvelnek, hogy egy eszközt rendesen kellene értékelni.

**Az érvényességi kudarcoknak eloszlásuk van, nem csupán jelenlétük.** [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] 46 auditált tanulmányában a függő változó hibás illesztése volt a leggyakoribb probléma (n = 15) — a mérés nem ragadta meg azt, amit az állítás állított —, ezt követte a független változó hibás illesztése (n = 11), a kísérleti tervezés problémái (n = 7), az adatkinyerés problémái (n = 6), a kontrollcsoport hiánya (n = 6) és a nem véletlen csoporthozzárendelés (n = 6). A 14 meta-analízisből tizenkettő ugyanazon elsődleges tanulmányból származó több effektméretet kezelt függetlenként, ami felfújja a látszólagos bizonyítékbázist.

**Az alcsoport-állítások általában eldönthetetlenek azokban a tanulmányokban, amelyek megfogalmazzák őket.** A [[ai-tutoring-micro-rct-gcse-science-2026|GCSE-természettudományos mikro-RCT]] **0,57 pontos (95%-os CI -2,25–3,39)** kezelés × státusz interakcióról számol be, **g = 0,28 (95%-os CI -0,04–0,59)** és **g = 0,35 (95%-os CI 0,18–0,52)** rétegzett becslésekkel a két csoportra. A nullát átlépő intervallum nem [[equity-in-ai-education|méltányossági]] eredmény; kérdés egy helyi pilot számára.

**Egy szintézis teljesítheti saját protokollját, és mégis súlyozatlan minőséget vonhat össze.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan és mtsai. (2026)]] nyíltan kimondják, hogy nem használtak formális minőségértékelési eszközt, a bevonási kritériumaikat tekintették a szigorúsági küszöbnek, így egy kvázi-kísérleti és egy randomizált tanulmány egyenlő mértékben járult hozzá — heterogenitásuk pedig **I² = 82,98% fix hatású modell mellett, de 15,75% véletlen hatású modell mellett**, ezért a modellje nélkül idézett heterogenitási szám nem mondhatja meg, mennyire következetlen a korpusz.

**Az automatizált ítélet [[assessment-validity|érvényesítése]] az eredmény része.** Az emberi kódolókkal való egyezés megbízhatósági állítás, és a fenti plafon megmutatja, miért nem ugyanaz, mint a minőség ([[machines-misread-pedagogical-quality|a gépek félreolvassák a pedagógiai minőséget]]).

**Az eszköz kora elsőrendű korlát.** Az MI-támogatott értékelésről szóló áttekintés megjegyzi, hogy saját eredményei konkrét modellverziókat tükröznek konkrét időpontokban, és hogy a terület mozgása bármely, a modellek képességeiről szóló beszámolót hónapokon belül elavulttá tehet ([[ai-assisted-assessment-instruction-higher-ed-2026|AI-támogatott értékelés és oktatás a felsőoktatásban]]). Az állításokat a generációjukhoz kell határolni: „a [[generative-ai|generatív AI]] javította X-et" nem hordozható, míg „a GPT-4 korszakának eszközei, ebben a feladatban, ezzel a [[scaffolding|vázolással]]" igen.

**A benchmarkcélok mozdulnak**, így egy eredmény, amelyet egy rendszer ma telít vagy elbukik, a következő kiadással megfordulhat; a telítettségi és szennyeződési ellenőrzések minden benchmark-alapú állítás mellé tartoznak.

**Ezt a szakirodalmat a saját kritikusaival együtt olvasni itt normális gyakorlat.** A szerzőknek és bírálóknak szóló jelentési ellenőrzőlisták a [[reporting-interpreting-aied-research|AI-kutatás jelentéséről és értelmezéséről szóló GYIK-ben]] vannak, az oldal értékelési szokásai pedig a [[theory-development-aied|elméletfejlesztéssel az MI oktatásában]] párosulnak, amikor egy állítás elméleti, nem empirikus.

## Rövid ellenőrzőlista

1. Mondja ki az eredményét egy mondatban, beleértve azt is, hogy az eszköz jelen van-e benne.
2. Keresse meg az összehasonlítást. Nincs hiteles összehasonlítás, nincs döntés.
3. Illessze a mérést az állításához, és részesítse előnyben a támogatás nélküli eredményt.
4. Fújja le a számot: a torzítással korrigált effektet olvassa, nem a fő számot.
5. Ellenőrizze a modellverziót és a tanulmány dátumait.
6. A korlátok szakaszát útmutatásként olvassa arról, mit még nem tud.
7. Számolja ki a költséget: licencek, csomagok, személyzeti idő, adatszabályok.
8. Kísérletezzen kis léptékben, támogatás nélküli méréssel, majd döntsön.
9. Tűzzön ki egy évre előre felülvizsgálati dátumot, és legyen kész elvetni az állítást.

## Gyakori tévhitek

**„Egy megjelent meta-analízis eldöntött bizonyíték az MI oktatásbeli hatásáról."** A terület szintézisei nem élték túl az auditot. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] auditja **14 lektorált meta-analízis** esetében, amelyek azt állítják, hogy az MI javítja az oktatást, azt találta, hogy **egyik** sem szolgált érvényes alapot ehhez a következtetéshez. Egy összevont effektméret csak annyira jó, mint az összevont tanulmányok, és ebben a szakirodalomban az összevonás rendszeresen olyan tervezéseket is tartalmazott, amelyek nem tudták az eredményt az MI-hez rendelni. Mielőtt egy meta-analitikus számot idéz, kérdezze meg, mit összesített.

**„A nagyobb effektméret a jobb beavatkozásé."** Gyakran az ellenkezője. A jelen oldalon dokumentált áttekintési kontextusban a tanulmányoknak csak **21%-ában** volt jól definiált kezelés, kontrollcsoport és érvényes tanulási mérő — és a „ChatGPT használata" jelentett előnye *nagyobbnak* adódott, mint a célra épített [[intelligent-tutoring|intelligens tutoriális rendszereké]]. A gyengén specifikált kezelések hajlamosak felfújt hatásokat termelni, mert az összehasonlítás homályosabb, az eredménymérő pedig lazább. A nagyobb szám ok arra, hogy a tervezést nézze meg, nem pedig arra, hogy a beavatkozást előnyben részesítse.

**„A magasabb jegyek az eszköz használata közben azt jelzik, hogy az eszköz többet tanított."** Egy [[k-12|K-12]] matematikai tanulmányban az általános célú [[conversational-ai|chatbot]] használatával gyakorló diákok jobb gyakorlati jegyeket szereztek, majd **nagyjából 17%-kal rosszabbul** teljesítettek a támogatás nélküli értékelésen. Az eszköz jelenlétében mért gyakorlati teljesítmény a felfújt mérő; a támogatás nélküli az eredmény, és csak az egyikük emelkedett.

**„Ha a hatás valódi, a megvalósítás részletei nem számítanak sokat."** Ezek a hatás. Egy tanulmány, amely 30 diákot követett egy kurzusban, egy intézményben, az eszköz olyan verzióján, amelyet ma senki nem használ, egy olyan konfigurációról termelt eredményt, amely már nem létezik. A kezelés specifikációja, a verzió és a környezet az állítás részei, nem körülötte lévő kontextus.

## Kapcsolódó fogalmak

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Kapcsolódó cikkek

- [[oneill-presumed-effective-meta-analysis-2026]] — Feltételezett hatás: 14 AIED-meta-analízis forenzikus auditja
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Publikációs torzítással korrigált MI-hatások a jelentett méret nagyjából egyharmada
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT az oktatásban: okot kereső effekt
- [[ai-supported-instruction-stem-meta-analysis-2026]] — A bevonási kritériumok mint szigorúsági küszöb, és a modellel változó heterogenitás
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Amikor az automatizált pontozás megbízhatósága eléri a feladat mérési plafonját
- [[verification-quality-reliance-calibration-genai-2026]] — Amit az ellenőrzési és támaszkodási szakirodalom nem mér
- [[citation-errors-hallucinations-computing-education-2026]] — Hamisított hivatkozások, amelyek 2025–2026-ban nyomdába jutottak
- [[stanford-evidence-base-ai-k12-2026]] — Gyakorlati nyereségek, vizsgaveszteségek: a támogatás eltávolításának problémája a K-12 matematikában
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Alcsoport-hatások, amelyeknek a konfidenciaintervalluma átlépi a nullát
- [[chick-faculty-development-ethical-ai-2026]] — Lehetővé tevő feltételek: szabályozási jelzések, személyes előfizetések, nincs idő
- [[ai-tutoring-quality-k12-methodologies-2026]] — Szállítói mérőszámok, feltárt kalibrációval és kísérletszámmal
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Modellverziókhoz kötött eredmények, és a terület mozgása
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Független bizonyítékok száma 16, már használatban lévő, diáknak szóló MI-termékre
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — Egy áttekintés számszerűsítheti a jelentési torzítást a saját korpuszában
