---
title: "Mit jelent valójában a személyre szabott tanulás, és mikor segít?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [designing-ai-into-learning, checking-whether-educational-ai-works, reducing-over-reliance, does-ai-help-students-learn]
weight: 82
foundations: [agency, learner-identity]
pedagogy: [self-regulated-learning, metacognition, scaffolding, student-engagement]
technology: [generative-ai, adaptive-learning, intelligent-tutoring, learning-analytics]
assessment: [formative-assessment, assessment-validity]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, longitudinal study]
audience: [instructors, instructional designers, administrators, educational technology developers]
level: [higher ed, secondary]
source_updated: "2026-10-30T13:20:00-04:00"
translation_of: faqs/what-personalized-learning-means
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A platform személyre szabott élményt ígér minden diáknak. Átrendezheti a gyakorlókérdéseket, újraírhat egy magyarázatot egy diák futball iránti érdeklődése köré, emlékezhet a múlt heti beszélgetésre, vagy kiválaszthatja, mit tanul a diák következőként. Mind a négyet személyre szabásnak nevezik, és csak egyet teszteltek valami hasonló formában.

Rövid válasz egy kollégának: a személyre szabás a tanulási élmény valamely részének megváltoztatását nevezi meg, és az értéke három dologtól függ: mit adaptálnak, milyen bizonyíték hajtja az adaptációt, és hogy a változás javítja-e a szándékolt tanulást. Egy ismerős példa vagy egy reagáló beszélgetés személyesnek érződhet, miközben semmit nem tanít. Egy hatékony adaptáció láthatatlan lehet. E tudásbázis legvilágosabb kísérleti eredménye szűk: egy öt hónapos Python-tanúsítvány-kurzusban tíz tajpeji középiskolában az adaptív feladatsorrendhez randomizált diákok mintegy 0,150 szórással értek el magasabb pontszámot egy személyes, támogatás nélküli záróvizsgán, mint a rögzített sorrendű, azonos chatbot-hozzáféréssel rendelkező diákok ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung és mtsai, 2026]]). Ez a sorrendezést támasztja alá meghatározott feltételeken. Nem érvényesíti mindazt, amit személyre szabottként adnak el.

## A rövid változat

**1.** Nevezze meg, melyik részt adaptálják: megjelenítés, érdeklődési kontextus, nehézség és támogatás, sorrend és tempó, vagy célok és választás.

**2.** Kérdezze meg, milyen bizonyíték indítja az adaptációt, és hogyan korrigálják a téves tanulómodellt.

**3.** Ellenőrizze, hogy az adaptáció megőrzi-e a célt, vagy csendben lejjebb viszi.

**4.** Hasonlítson egy hihető alternatívához, ne a támogatás teljes hiányához.

**5.** Az önálló teljesítményt mérje, ne az élménnyel való elégedettséget.

**6.** Figyelje az önszabályozást. Az érzékelt személyre szabás gyengébb önszabályozással járt együtt, nem erősebbel.

## Öt dolgot neveznek személyre szabott tanulásnak

A megjelenítési változtatások a legkevésbé vitatottak: rövidebb szöveg, egyszerűbb szókincs, más formátum vagy modalitás. Amit ellenőriz, az az, hogy a hozzáférés és a megértés javult-e, miközben a jelentés megmaradt.

Az érdeklődés- és kontextusadaptációk a példákat, analógiákat vagy szakmai helyzeteket írják újra a diák köré. Az ismerősség önmagában nem sokat bizonyít, ezért kérdezze meg, hogy a kontextus pontos-e, és valóban hasznos-e a fogalomhoz.

A nehézség- és támogatásadaptációk a kihívást, a tippeket, a kidolgozott példákat vagy a visszajelzést változtatják. Akkor érdemlik ki a helyüket, ha a támogatás bizonyított szükségletet követ, és a megéri-erőfeszítést a helyén hagyja.

A sorrend- és tempóadaptációk a következő feladatot választják, és azt, mennyi ideig folytatódik a gyakorlás. Ez az egyetlen forma, amelynek kísérleti támogatása van az alábbi bizonyítékokban, és ez is attól függ, hogy a tanulómodell elég jó-e a választás igazolásához.

A cél- és választásadaptációk hagyják, hogy a diákok projektet, útvonalat vagy alkalmazást válasszanak. Akkor segítenek, ha a választások érdemes célt szolgálnak, és továbbra is engedik a továbbhaladást.

Az [[adaptive-learning|adaptív tanulás]] az egyik mechanizmus a harmadikhoz és a negyedikhez: a rendszer a tanulóról szóló információra válaszul változtatja a tanítást. A személyre szabás oktatói ítéleten, statikus opciókon és tanulói választáson keresztül is megtörténik. A [[personalized-learning|két fogalom]] külontartása számít, mert az adaptív sorrendezés bizonyítéka nem vihető át az olvasmány érdeklődés-alapú újraírásaira.

## Mit mutat a bizonyíték

**Egy konkrét adaptáció javította a támogatás nélküli teljesítményt.** Chung és mtsai olyan platformot építettek, amely egy őrzött Python-chatbotot kapcsol össze egy megerősítéses tanulási algoritmussal, amely a következő gyakorlófeladatot választja, és tíz középiskolában telepítették egy öt hónapos tanúsítványkurzusban. A diákokat az adaptív sorrendezés és a rögzített sorrend között randomizálták, mindkét csoport azonos chatbot-hozzáféréssel, ez az az elrendezés, amely lehetővé teszi, hogy a sorrendezés magáénak tudja a különbséget. A 0,150 szórásnyi előny egy személyes, támogatás nélküli záróvizsgán jelent meg. Két dolgot érdemes megtartani: az összehasonlítás elválasztja a sorrendezést a hozzáféréstől, és a kimenet a támogatás nélküli teljesítmény, nem az elköteleződés. Amit a vizsgálat nem mutat meg, hogy a személyre szabott magyarázatok, az újraírt anyagok vagy a megjegyzett preferenciák segítenek. Ezek nem voltak a beavatkozás.

**Az érzékelt személyre szabás gyengébb önszabályozással járhat együtt.** [[personalization-paradox-adaptive-learning-emotions-2026|Li, Lin és Qiu (2026)]] 486 kínai egyetemi hallgatót követett három felmérési hullámon át, és azt találták, hogy azok a diákok, akik adaptív környezetüket személyre szabottabbnak érzékelték, gyengébb [[self-regulated-learning|önszabályozott tanulásról]] számoltak be. Az asszociáció nagy részét a tanulmányi érzelmek hordozták: a csökkent élvezet a megnövekedett szorongással és unalommal együtt a teljes hatás több mint felét adta. Az elrendezés megfigyeléses és önbeszámolós, ezért nem tudja megállapítani, hogy a személyre szabás okozta a csökkenést. Azt viszont azonosítja, milyen kimenetet kell egy pilotnak figyelnie, mert egy rendszer, amely minden bizonytalanságra gyorsan válaszol, eltávolíthatja a tervezést és az ítéletet, amelyet a kurzus építeni hivatott.

**Az érdeklődés és a megértés külön ellenőrzés.** A [[personalized-learning]] szintézis Bernstein és Sibia *Flawed but Memorable* című, érdeklődésre személyre szabott informatikai analógiákról szóló kis kvalitatív preprintjét tárgyalja. A diákok reakciói változóak voltak, és az analógia forrásterületének ismerőssége segített nekik észrevenni, hol vall kudarcot az analógia. A gyakorlati olvasat: kérdezze meg, mit tudnak már a tanulók, valamint azt is, mit élveznek, és a jelentett emlékezetességet élménymérőként kezelje, nem tanulási eredményként.

## Ellenőrizze a diagnózist, mielőtt megbízik az adaptációban

Egy adaptív rendszer csak akkor tud értelmes következő feladatot választani, ha a tanulóról alkotott becslése valamennyire jó, és a becslés egyenlőtlen megbízhatóságú jelekre támaszkodik. Egy helyes választ kitalálhattak, lemásolhattak vagy segítséggel értek el. Egy lassú válasz megszakítást vagy akadálymentesítési igényt jelenthet, nem nehézséget. A megadott érdeklődések semmit nem mondanak az előfeltétel-tudásról, és az önértékelések egyenlőtlenül kalibráltak, ami az a [[metacognition|metakognitív]] probléma, amelyet ugyanez a bizonyítékbázis újra meg újra megtalál.

Kezeljen minden jelet esendő bizonyítékként, és tartson fenn módot egy pontatlan profil korrigálására. Adjon a diákoknak utat, hogy lássák, miért választottak egy feladatot, és hogy megmondhassák, a diagnózis téves. Egy láthatatlan tanulómodell, amelyet a diák nem tud megkérdőjelezni, tervezési hiba, függetlenül attól, milyen jól jelez előre.

Azoknak, akik ilyen rendszereket építenek, két külön értékelést kell futtatniuk: a tanulóbecslés a releváns képességet tükrözi-e, és a rá való cselekvés javítja-e a kimeneteket? Egy modell, amely pontosan jelzi előre a következő választ, átment az első teszten, és sem ki nem érdemelte, sem meg nem válaszolta a másodikat.

## Őrizze meg a kihívást, a választást és a visszautat

**Adaptálja a támogatást anélkül, hogy lejjebb vinné a célt.** Az utasítások tisztázása vagy egy kidolgozott példa beillesztése segít a diáknak elérni egy igényes kimenetet. Egy küszködő diák végleges elterelése könnyebb anyagra megakadályozza azt a kimenetet. Tegye láthatóvá a visszautat, és ellenőrizze, hány diák van rajta, mert a felzárkóztatás az, ahol az adaptív rendszerek csendben elveszítik az embereket.

**Hagyja, hogy a tanulók megvizsgálják és befolyásolják az ajánlást.** Magyarázza el, miért javasolnak egy feladatot, engedje a profil korrekcióját, és tartson fenn ésszerű utat az általános szakterületi magyarázathoz annak a diáknak, aki azt akarja.

Építsen önálló ellenőrzéseket a továbbhaladásba. Egy sikersorozat egy platformon belül továbbhaladási szabály, nem a tartós tanulás bizonyítéka. Használjon késleltetett vagy változatos feladatot annak megállapítására, hogy a képesség túléli-e a támogatás eltávolítását, ami ugyanaz a megkülönböztetés, amelyen a [[reducing-over-reliance|túlzott ráhagyatkozás]] fordul.

Gyűjtsön arányos információt. Egy érdeklődés-alapú példa ritkán igényel részletes személyes előtörténetet. Az elsajátítási döntésekhez gyűjtsön bizonyítékot a készségről, és határozza meg a megtartást és a hozzáférést. Több személyes adat nem termel automatikusan jobb tanítást, viszont kötelezettséget teremt.

## Hogyan néz ez ki egy kurzusban

Egy bevezető matematikai kurzusban egy rövid diagnosztika elválaszthatja az előfeltétel-tévképzetet egy számítási hibától. A tévképzettel rendelkező diák célzott magyarázatot és egy kidolgozott példát kap. A másik továbblép az alkalmazáshoz. Mindketten elvégeznek egy hasonló önálló feladatot, köztük egy alkalmazást megváltozott kontextusban.

A diákok választhatnak ismerős alkalmazási kontextusok közül, miközben a matematikai cél rögzített és látható marad. Az oktató ellenőrzi, hogy bármelyik útvonal javította-e a megértést, hogy a diákok el tudják-e magyarázni az érvelésüket, és hogy valaki beragadt-e a felzárkóztatásba. Kezelje ezt pilotálandó tervként; semmilyen platformot nem érvényesítettek ebben a konfigurációban.

Egy olvasásigényes kurzusban egy szószedet vagy opcionális magyarázat javíthatja a hozzáférést. Ha a szakterületi olvasás maga a cél, a diákoknak továbbra is támogatott gyakorlásra van szükségük az eredeti szövegekkel, és a tantervnek meg kell mondania, a feladat melyik részét segíti az adaptáció.

## Értékelje, mit ad hozzá a személyre szabás

Hasonlítsa a személyre szabott változatot valami hihetőhöz: egy jól megtervezett közös sorrendhez, az adaptív sorrendezés nélküli azonos tutorhoz, vagy egy válogatott példamenühez. Ha a személyre szabott karja több gyakorlást, több visszajelzést és több időt is ad, az összehasonlítás nem képes izolálni a személyre szabást, és az őszinte jelentés ezt fogja mondani.

Mérje a támogatás nélküli teljesítményt, a megtartást vagy a transzfert, ahol tudja, az időt és az erőfeszítést, a tanulói ügynökséget és azt, ki profitál. Tartsa az elégedettséget és az érzékelt illeszkedést további kimenetekként, ne címsorként. Döntse el előre, milyen javulás igazolná a fejlesztési, monitorozási és adatkezelési költségeket, mert ezeket a költségeket akkor is kifizetik, ha a hatás nem jelenik meg.

## Ami vissza fog jönni Önre

**„A diákok előnyben részesítik, tehát működik."** A preferencia az élményről szóló bizonyíték. A Chung-vizsgálat az alternatíva mintája: azonos eszköz, azonos hozzáférés, egy különbség a sorrendezésben, és a platform jelenléte nélkül mért kimenet.

**„Emlékszik a diákra, tehát személyre szabott."** Az emlékezet egy funkció. A kérdések: pontos-e, releváns-e, felülvizsgálható-e a megjegyzett információ, és oktatásilag jobb döntés meghozatalára használják-e.

**„Minden diáknak teljesen más kurzusra van szüksége."** A hasznos variáció általában szűkebb: egy magyarázat, egy sorrend, egy tipp vagy egy kontextus, közös célokon belül. Tesztelje a legkisebb adaptációt, amely a megnevezett szükségletre válaszol.

**„A személyre szabás paradoxona csak a már küszködő diákok."** Lehet, mert az elrendezés nem tudja szétválasztani a kettőt. Ezért kell a pilotnak közvetlenül mérnie az önszabályozást, több időpontban, nem feltételezve, hogy az asszociáció abba az irányba fut, amelyet a marketing állít.

## Mit tegyen ezen a héten

**1.** Válasszon egy tanulási nehézséget, és nevezze meg az adaptációt, amelyről azt várja, hogy kezeli.

**2.** Írja le a bizonyítékot, amely az adaptációt indítja, és hogy mi történik, amikor a bizonyíték téves.

**3.** Adjon meg egy hihető összehasonlítást és egy támogatás nélküli tanulási ellenőrzést.

**4.** Kérdezzen meg két diákot, hogy hasznos volt-e az ajánlás, és tudták-e, hogyan irányítsák át.

**5.** Jegyezzen fel egy dolgot, amelyet az adaptáció esetleg eltávolít, például a termékeny nehézséget vagy egy döntést, amelyet a diáknak kellene meghoznia.

## Hová tovább

A [[personalized-learning]] a definíciók, a marketinges szókincs és a bizonyítékbázis fogalmi oldala, az [[adaptive-learning]] pedig a mechanizmust és annak mérését fedi. Az [[intelligent-tutoring]] az, ahol a tanulómodell találkozik a tutor tervezésével.

Egy olyan tevékenység tervezéséhez, amelyben a személyre szabás egy döntés a több között, lásd [[designing-ai-into-learning|a MI beépítése a tanulási élménybe]]. Arról, hogyan állapítsa meg, működik-e a rendszer, mielőtt felskálázza, lásd [[checking-whether-educational-ai-works|annak ellenőrzése, hogy egy oktatási MI működik-e]].
