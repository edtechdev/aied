---
title: "Hogyan ellenőrizzem, hogy az MI-vel generált kvíz- és vizsgakérdések valóban jók-e?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Húsz kérdést kér az előadásjegyzeteiből. Válaszkulcsokkal, magyarázatokkal, nehézségi címkékkel és Bloom-taxonómiai kategóriákkal jönnek vissza, egy formázott dokumentumban, amely késznek látszik. A neve mindjárt rákerül.

Rövid válasz egy kollégának: a generált kérdések jelöltek, nem értékelés. Oldjon meg mindegyiket maga, ellenőrizze, mit követel meg az item a diáktól ténylegesen, és tudja meg, hogyan válaszolnak rá a diákok, mielőtt számít. E tudásbázis két legnagyobb vizsgálatában az érdekes jel nem az, hogy a generálás működik, hanem hogy hol vall kudarcot. A kurzusspecifikus munkafolyamaton belüli iteratív generálás használható feleletválasztós vizsgákat termelt 71 egyetemi osztályban ([[assessing-quality-ai-generated-exams-field-2025|Isley és mtsai, 2025]]). Egy adattudományi auditban 311 telepített kérdés esetében a modell nehézségi címkéi csaknem tökéletesen követték az általa mellé generált Bloom-szinteket (Spearman ρ = 0,90), miközben a diákok tényleges pontszámait ρ = 0,06 szinten követték ([[student-llm-use-ai-question-difficulty-data-science-2026|An és Wang, 2026]]). A címke a prompt leírása volt, nem az item mérése.

## A rövid változat

**1.** Írja le a kimenetet és azt a bizonyítékot, amelyet egy kielégítő válasz szolgáltatna, mielőtt bármit generál.

**2.** Építsen tervrajzot, hogy lássa, mely kimeneteket mintázza a készlet, és milyen gyakran.

**3.** Oldjon meg minden itemet maga, mielőtt megbízik a kulcsban, és olvassa a magyarázatot ellenőrizendő állításként.

**4.** Kérdezze meg, mit kell tennie egy diáknak a megválaszolásához. Egy kérdés, amely azt mondja, „elemezzen", és felidézést kér, felidéző kérdés.

**5.** Kezelje a nehézségi címkéket prompt-metaadatoként, nem pszichometriaként.

**6.** Pilotálja az itemeket, és vizsgálja meg, hogyan működnek, majd javítsa a gyengéket.

## Kezdje azzal a tanulással, amelyről bizonyítékot akar

A generálás elég olcsó ahhoz, hogy a kimeneti formátum csendben a specifikációvá váljon. Ha a jegyzetei rendes feleletválasztós itemeket adnak, végül azt fogja mérni, hogy a diákok tudnak-e választani valószínű állítások közül, bármit is állít a tanterv a kimenetről.

Először a kimenetet adja meg, aztán a bizonyítékot, amelyet egy kielégítő válasz szolgáltatna, aztán azt a tudást, amelyet a diákoktól elvár. Foglalja bele a kurzusanyagokat, a várt tévképzeteket, az engedélyezett eszközöket és a válaszformátumot. Ha azt akarja, hogy a diákok bizonyítékot értelmezzenek, az itemnek értelmezést kell megkövetelnie, és a szó hozzáadása egy definíciós kérdéshez nem teszi ezt. Egy hosszú forgatókönyv továbbra is megválaszolható egyetlen ismerős fordulaton át, amely odaadja a megoldást.

Az értékelési tervrajz a kimenetek és az itemek táblázata, és az értéke az, hogy feltárja a réseket, mielőtt a diákok tennék. Láthatóvá teszi a kompromisszumot is: minden item, amelyet a legkönnyebb anyagból generál, egy item, amelyet nem arra a kimenetre költött, amely a legfontosabb.

## Hat szempont szerint vizsgálja meg az egyes itemeket

Kezdje a kulccsal. Védhető-e a hiteles kurzustartalom ellenében, és megáll-e a magyarázat, amikor önállóan ellenőrzi? A kulcs és a magyarázat gyakran ugyanabból a hibás lépésből származik, ezért az egyik ellenőrzése nem ellenőrzi a másikat.

Aztán kérdezze meg, mit követel meg az item megválaszolása ténylegesen a diáktól az olvasás és a választás között. Itt vallanak kudarcot leggyakrabban a generált itemek, és itt a legmegbízhatatlanabb a címke.

Ezután az illeszkedést ellenőrizze: a válaszolás bizonyítékot szolgáltat-e a szándékolt kimenetre, vagy valami szomszédosra, amelyet könnyebb értékelni?

Olvassa a megfogalmazást úgy, ahogy egy diák olvasná. Jelen van-e a szükséges információ, és eltávolították-e a konstruktumához nem kapcsolódó kétértelműséget?

Nézze az opciókat és a pontozási szabályokat együtt. Valószínűek-e és különböznek-e egymástól és a kulcstól a zavaró opciók, és elismeri-e a kulcs azokat a jogos alternatív válaszokat, amelyeket a rubrikája pontozna?

Végül kérdezze meg, kit zár ki az item. Az olvasási terhelés, a kulturális kontextus, a vizuális elemek és a formázás a kimenethez nem kapcsolódó követelményeket róhat. Egy többnyelvű vagy fogyatékossággal élő diák esetében egy item, amely a gyors olvasást jutalmazza, valami olyasmit mér, amit nem szándékolt, és a [[differential-effects-across-learner-groups|alcsoportok teljesítménye]] az, ahol ez megmutatkozik.

Egy második modell segíthet észrevenni a problémákat, és két modell egyetértése nem a helyesség független ellenőrzése. Ugyanazt a tanítóadatot és ugyanazokat a hibaüzemmódokat osztják. Oldja meg az itemet, majd nézesse meg a számító itemeket egy képzett személlyel.

## Ne engedje, hogy a nehézségi címke döntsön

A [[automated-question-generation|kérdésgenerálás]] irodalma hasznosabb a címkék kudarcáról, mint a generálás sikeréről. [[student-llm-use-ai-question-difficulty-data-science-2026|An és Wang (2026)]] 378 szerzői kérdést vizsgált adattudományi kurzusokban, amelyek közül 311-et telepítettek 54 diáknak, 7 888 válaszon. A modell könnyű, közepes és nehéz címkéi ρ = 0,90-nél korreláltak a saját, együtt generált Bloom-szintjeivel, és ρ = 0,06-nál az empirikus itemnehézséggel. A telepített itemek nagyjából 70%-át minden diák helyesen válaszolta meg, ami csaknem semmi szórást nem hagyott egy nehézségi címkének, még elvileg sem.

Két tanulság következik. Először, a nehézség egy item és egy populáció interakciójának tulajdonsága, ezért semmilyen címke, amelyet az item kiosztása előtt állítanak elő, nem kezelhető mért értékként. Másodszor, az olyan itembank, amelyet mindenki helyesen válaszol meg, nem könnyű értékelés, hanem hasznavehetetlen: csaknem semmi információt nem hordoz arról, ki mit tud.

A pozitív eset szűkebb, mint a szállítói állítások, és érdemes pontosan ismerni. [[assessing-quality-ai-generated-exams-field-2025|Isley és mtsai (2025)]] tízitemes feleletválasztós vizsgákat generáltak 71 egyetemi osztály számára, nagyjából 1 200 diák bevonásával, egy olyan hurokkal, amely minden itemet generál, megítél és átdolgoz az adott kurzus oktatója által adott anyagokra kondicionálva, majd az itemeket ember által írt vizsgákhoz benchmarkolták. Ez egy munkafolyamat, benne egy átvizsgálóval, kurzuronként futtatva, nem egyetlen prompt általános tartalmon. A támogatás a munkafolyamatnak szól azokon a feltételeken, és nem terjed ki arra, amit ugyanaz a modell szerkesztetlen jegyzetek beillesztéséből előállít.

## Futtasson generálás, átvizsgálás, pilot, átdolgozás ciklust

Generáljon tervrajz ellenében, és kérje a szándékolt kimenetet, a kulcsot, egy tömör megoldást és azt a tévképzetet, amelyet az egyes zavaró opciók el akarnak kapni. Az annotációk vizsgálhatóvá teszik a tervet. Nem bizonyítékai annak, hogy a terv megalapozott.

Javítson, mielőtt felhalmoz. Törölje az alá nem támasztott állításokat, az ismétlődő itemeket, a tőben lévő véletlen nyomokat, a több védhető kulcsot és a konstruktumhoz nem kapcsolódó bonyolultságot, és jegyezze fel, mit változtatott, mert a javítások mintája megmondja, a prompt melyik részét kell rendbe tenni.

Pilotáljon ott, ahol a pilot arányos. Az alacsony tétű gyakorlás, vagy egy kezelt pilot az értékelésen belül válaszadatokat ad. Mondja meg a diákoknak, hogyan jelentsenek egy kétértelmű vagy téves kérdést, és olvassa el ezeket a jelentéseket, mert ezek a leghasznosabb hibajelzések.

Aztán vizsgálja meg, hogyan működnek az itemek: a helyesen válaszolók arányát, mely zavaró opciók vonzzák a válaszokat, és hogy az itemen elért siker együtt jár-e a teljesítménnyel az értékelés többi részén. Az olyan item, ahol az erős diákok elbuknak és a gyengék sikerülnek, hiba, nem nehéz kérdés. Egy kis osztályban ezek a statisztikák instabilak, ezért kombinálja őket tartalmi átvizsgálással és a diákok magyarázataival, ahelyett hogy egy százalékot ítéletként kezelne.

Dolgozzon át, és tartsa a nyilvántartást: a jóváhagyott verziót, az általa szolgált kimenetet, a kulcsot, az indoklást, az átvizsgálási jegyzeteket és a kiosztás történetét. Nagy vagy magas tétű bankoknál ide tartoznak az értékelési szakemberek és a megfelelő pszichometriai módszerek, és a [[educational-measurement|mérés]] szakértelmét egy gondos olvasás nem helyettesítheti.

## Hogyan néz ez ki egy kurzusban

Egy bevezető szociológiai kurzusban a kimenet lehet a strukturális magyarázat megkülönböztetése az egyéni magyarázattól. Egy gyenge item a „strukturális" definiálását kéri, ami szókincs-felismerést mér. Egy erősebb jelölt egy rövid forgatókönyvet ad egy családról és egy foglalkoztatási döntésről, majd azt kérdezi, melyik magyarázat azonosítja legjobban a strukturális korlátot, a zavaró opciók pedig valószínű, de eltérő értelmezéseket képviselnek.

Az oktató ellenőrzi, hogy a forgatókönyv valóban alátámasztja-e a kulcsot, hogy két opció nem fejezi-e ki ugyanazt az ötletet, és hogy a válaszolás nem függ-e olyan terminológiától, amelyet a kurzus soha nem vezetett be. Egy egysoros utánkérdezés, „melyik részlet támasztja alá a választását?", felszínre hozza azt az érvelést, amelyet a kiválasztott opció elrejt. Az adaptáció itemformátumként tesztelés nélküli, és az értéke szűkebb: a fenti átvizsgálási kérdések megválaszolhatók, mielőtt az itemet kiosztják, és egy rossz kulcs rendbe hozható, mielőtt a diákok látják.

Azoknak a diákoknak, akik saját gyakorlókérdéseket generálnak, ugyanaz a szabály érvényes a saját szintjükön: kíséreljék meg az itemet, ellenőrizzék a magyarázatot a kurzushoz tartozó forrásokon, és vigyék a feloldhatatlan eseteket valakihez, aki ismeri a tárgyat. Az a [[study-with-ai|tanulási gyakorlat]], amely a generált kulcsok kritikátlan elfogadására tanít, a rossz szokást gyakoroltatja.

## Ami vissza fog jönni Önre

**„Adott egy választ és egy magyarázatot."** Mindkettő megismételhet egy hibát, és a magyarázat pontosan azért kelt bizalmat, mert folyékony. A saját anyagain ellenőrizze az érvelést, ne a saját újraállításán.

**„Ezek csak gyakorlókérdések."** A gyakorlás tévképzeteket tanít, amikor a rossz kulcsok javítatlanok maradnak, és a diákok éppoly készséggel gyakorolják a hibát, mint a helyes választ. Az alacsonyabb tét megváltoztatja, mennyi átvizsgálás arányos. Nem változtatja meg, hogy a pontosság számít-e.

**„A diákoknak tetszett a kvíz."** Az élvezet a tapasztalatról szóló bizonyíték. Egy könnyű kvíz, amelyet mindenki kényelmesen befejez, jól esik és keveset mér, és az adattudományi audit azt találta, hogy az itemek népszerűségét semmilyen használható nehézségi jel nem kísérte.

**„A rubrika vagy a Bloom-címkék mutatják, hogy eltalálja a kimeneteket."** Az ugyanaz a generálási lépés által adott Bloom-címkék a legkevésbé független bizonyítékok. A ρ = 0,90 a címkék ellen és a ρ = 0,06 a diákok teljesítménye ellen pontosan az, ahogy ez kinéz, amikor mérik.

## Mit tegyen ezen a héten

**1.** Válasszon egy kimenetet, és írja le a bizonyítékot, amelyet egy kielégítő válasz szolgáltatna. Aztán generáljon öt itemet ellene, kérve a kulcsot, a megoldást és az egyes zavaró opciók mögötti szándékolt tévképzetet.

**2.** Oldja meg mind az ötöt a kulcsok megnézése nélkül, és naplózza azokat, ahol Ön és a modell nem értenek egyet.

**3.** Kérjen meg egy kollégát, hogy vizsgálja meg a két legerősebb jelöltet illeszkedés és kétértelműség szempontjából, és töröljön mindent, amit egyikük sem tud megvédeni.

**4.** Pilotálja a túlélőket egy rövid utánkérdezéssel, amely megkérdezi a diákokat, melyik részlet támasztja alá a választásukat.

**5.** Rögzítse, mit változtatott és miért, hogy a következő adag jobb promptból induljon, ne ugyanabból.

## Hová tovább

Az [[automated-question-generation]] a generálási módszerek és mért minőségük fogalmi oldala, az [[educational-measurement]] pedig az itemanalízist, a megbízhatóságot és azt a pszichometriát fedi, amelyre egy pilot csak utal. Mindkettő az [[assessment-validity|értékelési érvényesség]] alatt ül, amely az a mérték, amelyet az egész ciklus szolgál.

Ugyanennek a problémának az ítéleti oldala az [[ai-grading-fairness-reliability|MI-osztályozás]] oldalához tartozik, mert egy jó item rosszul osztályozva nem jobb, mint egy rossz item jól osztályozva. Arról a szélesebb kérdésről, hogy mit kellene képviselnie egy jegynek, amikor a diákok használhatnak MI-t, lásd [[redesign-assessment-ai-era|az értékelés újratervezése a MI korszakában]].
