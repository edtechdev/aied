---
title: "Melyek a bevált gyakorlatok az MI-ről szóló oktatási kutatások jelentésében és értelmezésében?"
created: "2026-09-16T15:05:00-04:00"
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
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/reporting-interpreting-aied-research
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

A kéziratában főszám áll a kivonatban, és egy bíráló épp azt kérdezte meg, mit tett valójában a kontrollcsoport. Vagy Ön a bíráló, és a kezében van egy metaanalízis, amelynek összevont hatása 0,67, a módszertani része pedig másfél oldal. Vagy a tanszéke útmutatót ír arról, hogyan kell a munkatársaknak MI-vizsgálatokról beszámolniuk, és valami konkrétabbat szeretne, mint hogy „kövessék a szabványokat”.

Hat kihagyás dönti el ezeknek az eseteknek a nagy részét: melyik MI-rendszert használták, mire konfigurálták, milyen pedagógiai szerepet játszott, terveztek-e vagy bíráltak-e emberek a kimenetén, mit fogott meg valójában az eredménymutató, és mit tettek a szerzők a torzítással, a költséggel és a korlátokkal. Ha ezek hiányoznak, az őszinte ítélet az, hogy a vizsgálat nem megítélhető, és ez más ítélet, mint a megcáfolt.

## A rövid változat

**1.** Úgy írja le a MI-t, mint egy kezelést, ne mint egy beszállítót. Modell, verzió, konfiguráció, promptok, szerep, és hogy ki tervezte vagy bírálta a kimenetet.

**2.** Nevezze meg a pedagógiai indoklást és az aktív összehasonlítást. A terméknév nem módszer, és a szokásos tanítás nem tisztességes kontroll.

**3.** A mérőszám feleljen meg az állításnak, beleértve azt, hogy az eredmény késleltetett és segítség nélküli volt-e.

**4.** Számoljon be arról a bizonytalanságról, amellyel az elemzés valóban rendelkezik: függő hatások, vizsgálatok közötti variancia, előrejelzési intervallumok, alcsoportméretek, publikációs torzítás.

**5.** Érvényesítsen minden automatizált ítéletet, megnevezett aranystandarddal és megnevezett döntőbíróval.

**6.** Számoljon be az ellensúlyokról: irányítás, számítási költség, a saját MI-használata, nulleredmények, és csak azok a hivatkozások, amelyeket ellenőrzött.

## Úgy írja le a MI-t, mint egy kezelést, amelyet valaki újra tudna építeni

Ez az az ellenőrzés, amelyen a legtöbb beküldés elbukik. A RAISE-keretrendszer (*Reporting AI Studies in Education*, Allison 2026) egy 30 tételes ellenőrzőlista tíz tematikus területen, és diagnosztikai állítása konkrét: a beküldések rendszeresen kihagyják, melyik modellt használták, hogyan konfigurálták, milyen szerepet játszott, és hogy emberi szereplők tervezték-e vagy bírálták-e a kimeneteit. A bírálóknak így négy megválaszolhatatlan kérdésük marad. Mit tett pontosan a MI? Szükséges volt? Replikálható ez? Hihetők a tanulási állítások?

A RAISE az oktatási indoklástól az API-szintű specifikáción, a tanuló és a MI interakcióján, az akadálymentesítésen és a kulturális illeszkedésen, a résztvevőkön és a környezeten, az emberi részvételen, a tervezésen, az etikán, az átláthatóságon és a reprodukálhatóságon át a korlátokig tart. Társított Etikai és Kockázati Mátrixa a tanuló [[agency|önrendelkezését]], a [[equity-in-ai-education|méltányosságot]], az adat[[governance|irányítást]] és az algoritmikus átláthatóságot fenyegető kockázatokat fedi. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah és Gašević (2026)]] egy egyszerűsített alternatívát kínál. A TEP-AIED az átláthatóságot, az etikát és a pedagógiát egyetlen, egymástól függő szerkezetbe hajtja, egy hét szakaszra leképezett útmutatótáblázatot ad, és azt kéri a szerzőktől, hogy vegyenek fel egy „Transparency, Ethics, and Pedagogy Considerations” című módszertani alfejezetet. Az indoklásuk gyakorlati: a RAISE átfogó és túl aprólékos a rutin empirikus használathoz. A közzététel a [[ai-use-disclosure|MI-használat közzététele]] alá tartozik, és ez teszi ellenőrizhetővé a [[privacy|magánszféra]] és az [[ethics|etika]] állításait.

A RAISE-ben az oktatási indoklás áll az első helyen, mert a MI nem semleges eszköz. Az érték a tanulási probléma, az elméleti indoklás és a célkitűzések eredménymutatókra való leképezése közötti összhangon múlik. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] azt találta, hogy a 14 átvizsgált metaanalízisből kettő kivételével mindegyik eszközként határozta meg a kezelést: ChatGPT-ként, generatív MI-ként vagy általában MI-ként. A terméknév nem [[pedagogy|pedagógia]]. A ChatGPT-nek való kitettséget egyetlen közös beavatkozásként kezelni ahhoz hasonlítható, mintha a papír hatásait meta-analizálnánk.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich és munkatársai (2025)]] ugyanezt az érvet hozzák az elsődleges vizsgálatokra. Egy kiemelt metaanalízis mögötti összehasonlítások egy részét átvizsgálva azt találták, hogy csak 21%-uknak volt jól meghatározott kezelése, kontrollcsoportja és érvényes tanulási mérőszáma. A jelentett hatásméret (g = 0,7) a célra épített [[intelligent-tutoring|intelligens oktatórendszerek]] hatását is meghaladta (0,66), és ez a rés figyelmeztető jel: egy kezelés, amely felülmúlja a célra épített tutorálást, valószínűleg több különböző dolog együttese egyetlen címke alatt.

A próba egyetlen kérdés: egy hozzáértő olvasó újra tudná-e építeni a beavatkozását pusztán a módszertani részből, és ugyanazt kapná-e?

## Döntse el, mit enged meg állítani a mérőszáma

O'Neill bizonyítékauditjában, amely 46 véletlenszerűen kiválasztott elsődleges vizsgálatot vizsgált, 28 esetben (61%) merültek fel érvényességi aggályok. A leggyakoribb a függő változó illeszkedési hibája volt (n = 15), ezt a független változó illeszkedési hibája követte (n = 11), majd a kísérleti tervezés problémái (n = 7), az adatkinyerés problémái (n = 6), a kontrollcsoport hiánya (n = 6) és a nem véletlenszerű csoportbeosztás (n = 6). A többdimenziós eredményeket rendszeresen úgy vonták össze, mintha felcserélhetők lennének: teszteredményeket, házi feladat minőségét, [[motivation|motivációt]], [[self-efficacy|énhatékonyságot]], attitűdöket és [[student-engagement|elköteleződést]] egyetlen tanulmányi teljesítmény számmá lapítottak.

Két jelentéstételi szokás akadályozza meg ezt. Mondja meg, milyen konstruktumot mér az eszköz, és hogy azt erre a populációra érvényesítették; a [[self-report-measures|önbevallásos mérőszámok]] megmutatják, hol tér el az észlelésalapú mérés a viselkedéstől, az [[assessment-validity|értékelés érvényessége]] pedig a konstruktumérvényességet tárgyalja. Aztán olyan eredményről számoljon be, amely nem függ a tanuló segédeszközről alkotott hitétől. A segítség melletti azonnali feladatteljesítmény nem [[learning-gains|tanulási nyereség]], és a [[cognitive-offloading|kognitív tehermentesítés]] az a mechanizmus, amely a legvalószínűbben elválasztja a kettőt. A [[verification-quality-reliance-calibration-genai-2026|2026-os mini áttekintés 493 rekord és 14 kiemelt vizsgálat alapján]] azt találta, hogy egyik vizsgálat sem mérte együtt az ellenőrzés sikerét és az azt követő támaszkodási döntést egy függetlenül megállapított kimenetminőségi standardhoz képest, és kevés nézett az azonnali teljesítményen túl a késleltetett megőrzésre vagy [[transfer-of-learning|átvitelre]].

Mondja ki a plafont nyíltan a megbeszélésben. Egy vizsgálat, amely a nyitott eszközzel kitöltött kvízt mérte, alátámaszthat állítást a támogatott teljesítményről. Nem támaszthat alá állítást arról, mit tanultak a diákok, és ez a mondat egy sort igényel.

## Számoljon be arról a bizonytalanságról, amellyel az elemzése valóban rendelkezik

Szintéziseknél számoljon be a függő hatások kezeléséről, a vizsgálatok közötti varianciáról, az előrejelzési intervallumokról és a publikációs torzítás vizsgálatáról. Az I² önmagában nem végzi el a munkát. O'Neill szerint a jelentett heterogenitás mindenhol súlyos volt, ahol megadták: 13 metaanalízisben 77,2% és 94,4% között, és 12 esetben 80% felett, és soha nem oldódott fel, mert egyetlen moderátorelemzés sem érte el a tíz vizsgálatból álló minimális alcsoportméretet. Tizenkét metaanalízis ugyanabból a vizsgálatból származó függő hatásméreteket kezelt függetlenként, ami felnagyítja a látszólagos bizonyítékot. Csak négy jelentett vizsgálatok közötti varianciát (τ²), és csak kettő előrejelzési intervallumot, és mindkét intervallum tartalmazta a nullát. Publikációs torzítást a halmazban sehol nem vizsgáltak érvényesen.

A heterogenitási számok mellé oda kell tenni a modellt, mert az I² függ a pontosságtól. A [[limitations-in-aied-research|korlátok az MI-oktatási kutatásban]] egy olyan szintézist dokumentál, amelynél I² = 82,98% fix hatású modell mellett és 15,75% véletlen hatások mellett. Egy olvasó, aki csak az első számot kapja, nem tudja megállapítani, mennyire következetlen a korpusz. Számoljon be τ²-ről és egy előrejelzési intervallumról is mellette, ami egyben az a konvenció, amelyet [[meta-analysis-systematic-review|az áttekintési szakirodalom]] kér.

Aztán diszkontálja a saját főszámát. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš és munkatársai (2026)]] 1 840 hatásméretet vontak össze 67 metaanalízisből, és azt találták, hogy a publikációs torzítás modellezése után az átlagos hatás a közzétett medián nagyjából egyharmadára esik (SMD = 0,196 szemben 0,67-tel), -1,521 és +1,908 közötti előrejelzési intervallummal. Ez az intervallum egy feltételezett új vizsgálat esetében jelentős kártól jelentős haszonig terjed. Ez a cikk legfontosabb száma, és egyben az, amelyik a legvalószínűbben kimarad a kivonatból.

## Mondja meg, meddig ér az állítás

A méltányosság és a hatókör ugyanúgy hibázik: nagy hatás, amely kevesebbet jelent, mint amilyennek látszik. A 14 átvizsgált metaanalízisből tizenegy nem állított fel népességi határt, így a diákok a gyerekektől az orvostanhallgatókig terjedtek. Egyetlen kurzus, intézmény, szakterület vagy ország nem jogosít általános állításra, és egy eszköz eredményei ritkán vihetők át egy másikra.

Három magyarázat ad számot a nagy hatások többségéről, és mindegyik jelenthető. Az egyik az újdonság. A másik a feladatra fordított többletidő. A harmadik egy olyan összehasonlítási feltétel, amely szokásos tanítást kapott, nem aktív kontrollt. Számoljon be arról, mit tett valójában a kontroll, mennyi időt töltött az egyes kar, és mennyire volt új az eszköz. A népességi határt is mondja meg, mert a hatások tanulócsoportonként eltérnek, és a ki nem mondott határ az, ami lehetővé teszi, hogy egyetlen összevont szám álljon mindegyik helyett; a [[differential-effects-across-learner-groups|eltérő hatások a tanulócsoportok között]] fejti ki a szórást.

Kezelje az eszközt mozgó célpontként. A zárt rendszerek figyelmeztetés nélkül változnak, tehát egy eredmény egy modellverzióhoz kötődik, és a [[benchmark|benchmarkteszt]], amely egy kiadásban lenyűgözött, a következőben már nem biztos, hogy áll. A verzió és a hozzáférés dátuma ezért kerül a módszertani részbe, és nem csak a replikálhatóság miatt.

## Érvényesítse az automatizált ítéleteket

Az [[ai-ed-evaluation|MI-oktatási értékelés]] egyre gyakrabban bízza a pontozást modellekre, ami az érvényesítési eljárást az eredmény részévé teszi, nem függelékké. A Khan Academy beszámolója az [[intelligent-tutoring|MI-tutor]] mérőszámairól azt állítja, hogy a kognitív elköteleződést egy [[llm|nagy nyelvi modell]] ítéli meg, amelyet emberi pedagógiai szakértőkhöz kalibráltak F1 0,83 mellett, és hogy a mérőszámok mozgása több mint 40 élő kísérletből származott öt hónap alatt, nem offline értékelésből ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi és munkatársai 2026]]). [[machines-misread-pedagogical-quality|Tseng és munkatársai (2026)]] megmutatják, hogy az ember és gép közötti egyet nem értés a [[formative-assessment|előteszt-kérdések]] minőségéről rendszeres, nem véletlenszerű, és hogy a rubrika operacionalizálása fontosabb, mint az indoklást előre helyező promptolás.

Az emberi kódolókkal való egyetértés más dolog, mint a minőség, és ha úgy jelentik, mintha minőség lenne, az bírálói célpont. [[agreement-not-quality-llm-coding-verification|Liu és munkatársai (2026)]] egy független szakértővel 855 páros kódkészletet bíráltattak a forrás ismerete nélkül. Az ember és a nyelvi modell közötti egyetértés átlagos Jaccard-értéke 0,30 volt, szemben az ember és ember közötti 0,52-vel, miközben a vak bíráló megkülönböztethetetlen arányban részesítette előnyben az emberi és a gépi kódolást (51,5% szemben 48,5%-kal, p = 0,537). Mondja meg a kalibrációs célpontot, az aranystandardot és azt, ki döntött az egyet nem értésben. Ez a három tétel az, amely alapján az olvasó eldöntheti, mekkora súlyt hordozhat az automatizált pontszám.

## Tegye közzé a költségeket és a saját használatát

Az összes AIED 2025-ös konferenciacikk áttekintése a nyelvi modellek közzététel nélküli átvételének mintáját találta: a legtöbb projekt használt nyelvi modellt, és kevesebb mint egy maroknyi számolt be erőforrás-fogyasztásról vagy szénlábnyomról. Az a cikk egy nyílt forráskódú módszert ad helyi és felhős hardver mérőeszközeivel, valamint egy képletet azoknak az élvonalbeli modelleknek a számítási költségének becsléséhez, amelyek paraméterszáma nem nyilvános. Az érve az, hogy ezeknek a költségeknek az elhallgatása maga is etikai aggály. Az adatirányítás, a beleegyezés, az akadálymentesítés és a kulturális illeszkedés ugyanabba a bekezdésbe tartozik (RAISE-tételek; [[universal-design-for-learning|a tanulás egyetemes tervezése]], [[accessibility|akadálymentesség]]). Az [[equity-ethics-pedagogical-safety-research|méltányosság, etika és pedagógiai biztonság]] tartalmazza a teljesebb tárgyalást.

A saját MI-használatának a kutatási folyamatban ugyanilyen közzétételre van szüksége. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta és Lin PRISMA-LLM elemzése]] 888 áttekintés-automatizálási cikkről megmutatja, mennyire egyenetlen ez a jelentéstétel. 2023 óta a szoftver- és termékcikkek 38,0%-a egyáltalán nem számolt be értékelésről, szemben a nyelvi modellről szóló cikkek 9,3%-ával. Az átlagos jelentéstételi gazdagság a nyelvi modellről szóló cikkeknél 6,3 volt, a szoftver- és termékcikkeknél 3,3. A nyelvi modell használatának 84,1%-a zárt vagy hosztolt rendszerekre támaszkodott, csak 4,9% volt nyílt súlyú. Keretrendszerük az implementáció közzétételét választja el a következményérzékeny értékeléstől öt közzétételi szinten át, ami használható sablon annak leírására, mit tett egy eszköz egy áttekintésen belül.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai és Chan (2026)]] a szerzői oldalt egészítik ki. 28 posztgraduális kutató közül 27 használt generatív MI-t ötletelésre, szakirodalmi áttekintésre, magyarázatra, adatfeldolgozásra, programozásra, [[writing-education|tudományos írásra]], szerkesztésre és fordításra. Használatukat a tétnek és a szakterületi normáknak megfelelően kalibrálták. Intézményeik szabályzatai a tanításra és az értékelésre vonatkoztak, nem a kutatási gyakorlatra, ami a jelentéstételi döntést a szerzőre hagyja.

## Tegye közzé a nulleredményt, és ellenőrizze minden hivatkozását

[[citation-errors-hallucinations-computing-education-2026|Denny és munkatársai (2026)]] 30 gyártott hivatkozást ellenőriztek 14 cikkben, és az egyik szakmai szimpóziumon a szám 2025-ben 3-ról 2026-ban 17-re nőtt, ami az adott évi közlemények 2,3%-a. A nyelvi modell segítségével végzett fogalmazás olcsóvá teszi egy hihetően kitalált hivatkozás előállítását, ezért az ellenőrzésnek beküldés előtt kell megtörténnie, nem elfogadás után.

Az abban az auditban szereplő ellensúlyok számítanak, amikor hivatkozik rá. A megjelölt hivatkozások többsége jóindulatú volt: 229 esetben ACM-metaadat-eltérés volt, ahol a PDF helyes volt, és 188 esetben érvényes bibliográfiai változat. A gyártottak száma szándékos alsó korlát, és a jóindulatú többség nem kerekítési hiba. Ellenőrizze minden tételt, amelyet személyesen nem tud megtekinteni.

A null- és negatív eredmények közzététele az őszinte bizonyítékbázis másik fele. Bartoš és munkatársai erős bizonyítékot találtak elnyomott nulleredményekre (minden Egger-teszt p < 0,0001) és szélsőséges heterogenitásra (τ = 0,869), miközben semmilyen kimenet, terület, szint vagy MI-szerep szerinti alcsoport nem mutatott következetes nyereséget. Azt is találták, hogy nincs különbség a 2023 januárja előtt és után publikált vizsgálatok között, ami aláássa azt az állítást, hogy kifejezetten a modern generatív eszközök hoznak nyereséget.

## Miben tévednek a kutatók ebben

**„A hatásméret a modalitás tulajdonsága.”** Nincs jelenthető MI-hatás az oktatásban. Az átvizsgált metaanalízisek közül kettő kivételével mindegyik eszköznévként határozta meg a kezelést, az átvizsgált összehasonlításoknak csak 21%-a rendelkezett meghatározott kezeléssel, kontrollal és érvényes mérőszámmal, és az összevont g = 0,7 a célra épített intelligens tutorálás 0,66-os értéke fölött helyezkedett el. Egy hatásméret egy tervezéshez, egy populációhoz és egy mérési alkalomhoz tartozik.

**„Az összevont átlag az, ami a diákjaimmal történni fog.”** Az átlag a vizsgálatok halmazát írja le, és semmi benne nem rögzít egyetlen tantermet sem. A torzításra kiigazított átlag SMD = 0,196, előrejelzési intervalluma -1,521 és +1,908 között fut. A jelentett heterogenitás 13 metaanalízisből 12-ben 80% felett van, és a nagyobb halmazban egyetlen alcsoport sem mutatott következetes nyereséget. Diákszintű változás egyik számból sem azonosítható.

**„A nulleredmény azt jelenti, hogy az eszköz nem működik.”** A nulla egy adott pontosságú tervezésről szóló állítás, és egy vizsgálatban kimutatható hatás hiánya arról a vizsgálatról szóló tény. A torzításra kiigazított SMD = 0,196 olyan szakirodalomból származik, amelyben minden Egger-teszt szignifikáns volt, tehát a korpusz védhető olvasata egy kicsi és bizonytalan átlag. A nagyobb halmazban semmilyen kimenet, terület, szint vagy MI-szerep szerinti alcsoport nem mutatott következetes nyereséget sem. A dokumentált probléma ebben a szakirodalomban az elnyomás.

**„Egy vizsgálat eldönti.”** Az alaparányok másról beszélnek. Az átvizsgált elsődleges vizsgálatok 61%-ánál merültek fel érvényességi aggályok, egy kurzus vagy intézmény nem jogosít általános állításra, és egy zárt rendszer modellverzióhoz kötött mozgó célpont. Egyetlen vizsgálat egy adatpont, amelyhez tervezés tartozik.

**„Az emberi kódolókkal való magas egyetértés azt jelenti, hogy a modell a helyes dolgot pontozza.”** Az ember és a nyelvi modell közötti egyetértés 0,30 volt, szemben az ember és ember közötti 0,52-vel, és a vak bíráló 51,5% szemben 48,5% mellett sem tudta megkülönböztetni a két kódkészletet. Az egyetértés a kódolóval való következetességet méri, a minőség külön kérdés, amelyhez aranystandard és döntőbíró kell.

## A kifogások, amelyeket hallani fog

**„A bírálók újdonságot akarnak, nem módszertani részleteket.”** A folyóiratok az ellenkező irányba mozdulnak. A RAISE és a TEP-AIED szerkezetet ad a szerkesztőknek, amit megkövetelhetnek, a TEP-AIED módszertani alfejezete pedig alacsony súrlódású belépési pont. A módszertani részlet az, ami egy nem megítélhető cikket idézhetővé tesz.

**„Nincs helyünk rá.”** Az öt közzétételi szint jelentéstételi szint, nem kockázati szint, tehát az értékelés mélysége egy-két mondat is lehet. A verzió, a promptok és a szerep egy rövid bekezdésbe fér. A költség és az irányítás egy korlátokat leíró mondatba fér.

**„Mindenki így számol be róla.”** A számok szerint épp a norma a probléma: az átvizsgált elsődleges vizsgálatok 61%-a érvényességi aggályokkal, 13 metaanalízisből 12 80% feletti heterogenitással, a szoftver- és termékcikkek 38,0%-a értékelés nélkül.

**„A mi eszközünk zárt, tehát nem jelenthetjük a modellt.”** Jelentse a verziót, a hozzáférés dátumát, a konfigurációt, az Ön által adott promptokat, a szerepet és a védőkorlátokat. Ha a szállító nem mondja meg, ez a korlát a korlátok közé tartozik, az állítás határaként.

**„A nulleredmények közzététele ártani fog nekünk.”** Az elnyomott nulleredmények azok a dokumentált mechanizmusok, amelyek az SMD = 0,196 torzításra kiigazított átlag mögött állnak. Közzétételük az, ami az Ön pozitív eredményét olvashatóvá teszi.

## Mit tegyen ezen a héten

**1.** Olvassa össze a kivonatát a módszertani részével, és töröljön minden állítást, amelyet a módszer nem tud alátámasztani. Egy mondat a mérőszám plafonjáról általában elég.

**2.** Tegye hozzá a specifikációs bekezdést: modell, verzió, hozzáférés dátuma, konfiguráció, promptok, szerep, és hogy ki tervezte vagy bírálta a kimenetet.

**3.** Húzza ki a τ²-t, az előrejelzési intervallumot és a publikációs torzítás vizsgálatát a függelékből az eredmények közé, vagy mondja ki nyíltan, hogy nem számította ki őket.

**4.** Írja bele a tervezési leírásba a népességi határt és a kontrollfeltételt, beleértve azt, mennyi időt töltött az egyes kar.

**5.** Ellenőrizze minden hivatkozást, amelyet személyesen nem olvasott el, és először a szerzői mezőt nézze meg.

## Hová tovább

A [[research-methods-aied|kutatásmódszertan az MI oktatásában]] fedi azokat a tervezési döntéseket, amelyek e jelentéstételi döntések alatt vannak, és a [[limitations-in-aied-research|korlátok az MI-oktatási kutatásban]] a hibamódok katalógusa, a számokkal együtt. Az [[interpreting-and-applying-aied-research|MI-oktatási kutatás értelmezése és alkalmazása]] ugyanennek a problémának az olvasói oldala, a [[does-ai-help-students-learn|tartós tanulásra vonatkozó bizonyítékok]] az, amit ezek a mérőszámok leginkább el akarnak érni, az [[evaluating-ai-interventions-methods|értékelési módszerek]] pedig a mérőszámokat és az összehasonlítási tervezéseket fedik, a [[checking-whether-educational-ai-works|működik-e az oktatási MI]] pedig a kérdés rövidebb változata. Azokhoz a hiányokhoz, amelyeket ez a szakirodalom nem töltött ki, lásd: [[research-gaps-aied|kutatási hiányok az MI-oktatásban]].
