---
title: "Használhatok MI-t a diákok munkájának tisztességes és megbízható osztályozására?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Van egy rubrikája, amelyben hisz, több beadás, mint ahány órája, és egy eszköz, amely egy esszé elolvasásához szükséges idő alatt visszaad egy pontszámot és több magabiztos bekezdést. Kipróbálja olyan munkán, amit már osztályozott. A pontszámok fele jónak tűnik. Az egyik furcsán nagyvonalú, a másik furcsán szigorú, és még nem tudja eldönteni, hogy ez az eszköz vagy az esszé.

Rövid válasz egy kollégának: az MI-osztályozás felügyelt asszisztensként vagy második olvasóként érdemel helyet, olyan feladatokon, ahol már ellenőrizte azt olyan munkán, amit maga is osztályozott. Az egyetértés nem vihető át értékeléstípusok között. Egy tizenhat diákos gyógyszerészi vizsgán [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat és mtsai (2026)]] csaknem tökéletes egyezést találtak az objektív itemtípusokon, és megbízhatatlan egyezést a nyílt végű válaszokon. Három angol egyetemen át [[opraise-automated-marking-ai-assessment-2026|az OpRaise projekt]] szerint az MI és az emberi értékelők 35% és 65% közötti arányban egyeztek meg a brit diplomaminősítési sávban, intézménytől függően, a jegyek pedig a közép felé tömörödtek. A folyékony indoklás nem bizonyíték arra, hogy a kritériumait alkalmazták. Az, hogy az eredmény [[assessment-validity|érvényes-e az Ön döntéséhez]], helyi kérdés, amelyet magának kell megválaszolnia, és [[human-in-the-loop-ai|egy ember marad felelős]] mindenért, ami rögzített jegyzé válik.

## A rövid változat

**1.** Nevezze meg a szerepet, mielőtt bármit futtat: visszajelzés-asszisztens, második olvasó vagy elsődleges pontozó. Mindegyik más mennyiségű bizonyítékot igényel.

**2.** Kezdje a legkisebb következményű szereppel, amely megoldja a valódi problémáját. Ha egy determinisztikus kulcs elvégezné a munkát, az LLM inkább kockázatot ad, mint értéket.

**3.** Kalibráljon olyan munkán, amit már osztályozott, beleértve az erős, a gyenge, a határeset és a szokatlanul szerkezetű beadásokat. A kényelmes példák semmit nem bizonyítanak.

**4.** Tartsa külön a kalibrációs halmazt és a teszthalmazt, különben azt méri, mennyire hangolta az eszközt ismerős esszékhez.

**5.** Pontos egyezést, pontszámkülönbségeket és a torzítás irányát jelentse, ne korrelációt. Ellenőrizze külön a megfelelt/nem felelt meg határokat.

**6.** Mondja meg a diákoknak, milyen szerepet játszik az eszköz, ki dönt a jegyzől, és hogyan kérhetnek felülvizsgálatot.

## Döntse el, mit tehet a MI

Három elrendezést neveznek „MI-osztályozásnak", és különböző kötelezettségekkel járnak.

A **visszajelzés-asszisztens** megjegyzéseket vázol, vagy lehetséges kihagyásokat jelez, hogy Ön elfogadja, átírja vagy elvesse. A kockázat a megjegyzések minőségére korlátozódik, és mindent elolvas, mielőtt egy diákhoz eljut. A **második olvasó** kritériumonkénti pontszámokat javasol, vagy nézeteltéréseket jelez, hogy strukturálja a saját javítását. A hibáinak hasznosaknak kell lenniük, nem csupán téveseknek: egy jelzés, amely visszaküld egy beadáshoz, amelyet különben gondatlanul javított volna, megéri. Az **elsődleges pontozó** olyan pontszámokat állít elő, amelyek rögzített jegyekké válnak. Ez az az elrendezés, amelyet az ebben a tudásbázisban szereplő bizonyítékok a szűk, helyben érvényesített eseteken túl nem támasztanak alá.

Válassza a legalacsonyabb fokot, amely a tényleges korlátjára válaszol. Ha a javítási terhe egy rögzített válaszkulcs ellenőrzéséből ered, a közönséges determinisztikus pontozás átláthatóbb és auditálhatóbb, mint egy nyelvi modell, és a gyógyszerészeti vizsgálat arra utal, hogy az LLM előnye az objektív itemeken részben annak a műterméke volt, hogy az osztályozás során megkapta a helyes válaszokat. Tartsa a modellt az értelmezést igénylő munkára, aztán ellenőrizze azt az értelmezést.

[[automated-assessment|Az automatizált értékelés]] a pontozás, a moderálás és a visszajelzés-generálás szélesebb gépezetét fedi. Ez az oldal az alatta lévő ítéletkérdés.

## Mit mutat valójában a bizonyíték

Az egyezés az itemtípus függvénye. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat és mtsai (2026)]] egy 16 diák által kitöltött, vegyes formátumú gyógyszerészi vizsgát osztályoztak, és 0,935 és 1,000 közötti egyezést jelentettek a kar által adott jegyekkel a feleletválasztós, a „jelölje meg mindet, ami érvényes" és a hiányos kiegészítéses itemeken. A szubjektív, nyílt végű válaszokon az egyezés megbízhatatlan volt. Két részlet fontosabb a címsornál. A helyes válaszokat az osztályozás során megadták, ami hízelgő az objektív itemek eredményeire, és egy rubrika hozzáadása nem javította következetesen az egyezést, ami aláássa azt a gyakori feltevést, hogy egy jó rubrika következetes javítóvá alakítja az LLM-et. Tizenhat diák nem támaszt alá állítást az Ön kurzusáról. Az egyetlen vizsgán belüli szórás az átvihető megállapítás: egy rendszer, amely kezeli a feleletválasztós szakaszát, semmit nem mond az esszéiről.

A sávszerinti egyezés mérsékelt és egyenetlen. [[opraise-automated-marking-ai-assessment-2026|Az OpRaise jelentés]] hiteles egyetemi pszichológiai esszéket vizsgált, és az MI és az emberi értékelők közötti egyezést a brit diplomaminősítési sávban 63%-nak találta Cambridge-ben, 53%-nak Nottinghamben és 35%-nak a Manchester Metropolitan egyetemen. A jegyek a közép felé tömörödtek, a széleket pedig a legkevésbé pontosan osztályozták: egy esszét, amelyet egy ember 75-re értékelt, minden MI-rendszer több ponttal alacsonyabbra pontozott, egy 50-re értékeltet pedig több ponttal magasabbra. Ez a tömörödés az, amire figyelni kell, mert éppen az eloszlás tetején és alján lévő diákoknak árt, miközben a közép rendben lévőnek látszik. Ez projektjelentés, nem lektorált kísérlet, és ez a leghasznosabb figyelmeztetés a bizonyítékbázisban.

A saját jegyei tökéletlen referencia. Az oktatók nem értenek egyet egymással, és az Ön korábbi pontszáma egy hasonló esszén ítélet, nem alapszabály. Az egyezés egyetlen javítóval azt bizonyítja, hogy azzal a javítóval konzisztens, ami nem ugyanaz, mint a tisztesség. Ahol a tét indokolja, használjon második képzett olvasót a nehéz esetek eldöntésére, és kezelje az MI és egy emberi javító közötti nézeteltérést úgy, mint okot a munka újraolvasására, nem pedig ítéletet arról, melyik oldalnak van igaza.

A konzisztencia és a megalapozott ítélet szétválik. Egy modell csaknem azonos pontszámokat adhat egy újrafuttatásnál, miközben rosszul alkalmazza a kritériumait, mert az ismételhetőség a stabilitást méri, nem az érvényességet. Az OpRaise szélei mutatják a mintát: a rendszer egyenletes volt és tévedett azoknál az esszéknél, amelyek a leginkább számítottak.

## Érvényesítse az eljárást, mielőtt jegyet érint

Ezt korábban értékelt, megfelelően védett beadásokon dolgozza végig, amelyek lefedik a ténylegesen kapott válaszokat: erős, gyenge, határeset, hiányos, szokatlanul szerkezetű, és helyes válaszok szokatlan megfogalmazásban.

**1. Adja meg a kritériumokat, és követeljen bizonyítékot.** Adja meg a feladatot, a rubrikát, a pontozási szabályokat és a példákat arra, hogyan szereznek pontot a jogos alternatív válaszok. Kérjen tömör, kritérium szintű indoklásokat azonosítható szöveghelyekhez kötve. Aztán maga ellenőrizze azokat az indoklásokat a beadás ellenében.

**2. Válassza szét a kalibrációt az értékeléstől.** Hangoljon az egyik halmazon, teszteljen a másikon. E szétválasztás nélkül nem tudja megkülönböztetni az érvényesített eljárást a jól illesztettől.

**3. Mérje a számító döntéseket.** Rögzítse a pontos egyezést, a pontszámkülönbségek nagyságát és irányát, és azt, hogy a modell rendszeresen magasabb vagy alacsonyabb jegyeket ad-e. Vizsgálja külön a megfelelt/nem felelt meg és más következményes határokat. Egy magas korreláció rendszeres eltolódás fölött is ülhet.

**4. Tesztelje az ismételhetőséget és az alcsoportok viselkedését.** Futtassa újra egy részhalmazt azonos beállításokkal. Keressen kritérium szintű hibákat, és azt, hogy a nyelvet, a formázást vagy a jogos stílust gyengébb megértésnek nézik-e. A kis alcsoportlétszámok az óvatosságot támasztják alá, nem a tisztességi állítást.

**5. Írja meg az eszkalációs szabályt.** Döntse el, mely esetek kapnak mindig emberi javítást, és hogyan oldódnak fel a nézeteltérések. Ne engedje, hogy a modell által megadott magabiztosság döntsön; a magabiztosságot a megfigyelt hibák ellenében kell érvényesíteni, mielőtt súlya lehet.

**6. Védje a munkafolyamatot.** Használjon jóváhagyott környezetet, minimalizálja az azonosító információkat, és tartsa külön a rubrikát és az utasításokat a beadott tartalomtól. Ez a szétválasztás nehezebbé teszi a manipuláció elrejtését. Nem teszi lehetetlenné.

**7. Rögzítse, mi tenné érvénytelenné az ellenőrzést.** Őrizze meg a modellt és a verziót, a promptot, a rubrikát és a beállításokat. Egy modellfrissítés vagy egy rubrikaátdolgozás ok arra, hogy megismételje a reprezentatív ellenőrzéseket, ne pedig folytonosságot feltételezzen.

## Tegye láthatóvá az elrendezést a diákok számára

A diákok jogosultak tudni, milyen szerepet játszik az eszköz, ki dönt, és hogyan lehet vitatni egy eredményt. A homályos közzététel gyanút kelt; a konkrétumok működő kapcsolatot. Valami ilyesmi: „Egy jóváhagyott MI-eszköz rubrikaszempontú megjegyzéseket vázolhat a fogalmazványára. Minden megjegyzést átnézek, és én határozom meg a jegyét. Keressen, ha egy megjegyzés félre mutatja a munkáját." Aztán tegye igazzá.

Két hiba irányára külön kell figyelni. A túlzott levonások azok, amelyeket a diákok jelentenek, és ezek uralják a fellebbezéseket. A ki nem érdemelt pont az, amely szóba sem kerül, és csendben megrontja a nyilvántartást. Mindkettőre mintavételezzen, és a verifikációs óráit is számítsa bele, amikor megítéli, megtakarított-e bármit a munkafolyamat.

## Ami vissza fog jönni Önre

**„Az emberek is elfogultak."** Azok, ezért van szükség az összehasonlításban kifejezett kritériumokra, nem egyetlen javító pontszámára mércéként. Az OpRaise intézményi szórása itt az érv: ha három egyetem emberi javítói ilyen különböző sávszerinti egyezést értek el ugyanazokkal a rendszerekkel, az emberi referencia maga is meghatározandó, nem rögzített mérőrúd.

**„A rubrika objektívvá teszi."** A rubrika kifejezetté teszi az elvárásokat. Az alkalmazása továbbra is értelmezés, és a gyógyszerészeti vizsgálat azt találta, hogy a rubrika megadása nem javította következetesen az egyezést. Amit a rubrika megvásárol, az ellenőrizhető mérték az indoklásokhoz, nem a pontszámok garanciája.

**„Minden ellenőriznem kellene, ami értelmetlenné teszi az egészet."** Bizonyos feladatoknál ez a helyes következtetés, és a válasz a munka szűkítése. A megjegyzések vázolása a saját pontozási jegyzeteiből Önnél hagyja az ítéletet, és kiveszi a gépelést. A második olvasó jelzései a határeset-beadásokon oda összpontosítják a figyelmét, ahol az megváltoztat egy eredményt.

**„A kollégám kipróbálta, és jól működött."** Kérdezze meg, mit mért. A pozitív értékelések ebben az irodalomban rutinszerűen együtt járnak hibákkal, és egy kolléga, aki elolvasott néhány értelmes kimenetet, demonstrációt futtatott, nem érvényesítést. A kérdés az, mit tenne az eljárásuk azokkal az esszékkel, amelyeket Ön utolsóként venne észre.

## Mit tegyen ezen a héten

**1.** Válasszon egy értékelést, és írja le az egyetlen szerepet, amelyet a MI játszana. Írja le, milyen bizonyíték engedné egy fokkal feljebb lépni.

**2.** Futtassa öt olyan beadáson, amelyet már osztályozott, úgy válogatva, hogy legyen köztük erős, gyenge, határeset és egy szokatlan, de jogos szerkezetű.

**3.** Naplózza minden nézeteltérést a munkával és a kritériummal együtt, és nevezze meg a hibákat, amelyeket elfogadhatatlannak tartana, nem csupán tévesnek.

**4.** Tesztelje, hogy a pontszámkülönbségek következetes irányba futnak-e, és külön ellenőrizze a megfelelt/nem felelt meg határt.

**5.** Vázolja a diákoknak szóló közzétételi bekezdést és a felülvizsgálat útját, és hasonlítsa össze a verifikációs idejét a megspórolt javítási idővel.

## Hová tovább

[[assessment-validity|Az értékelési érvényesség]] az a fogalom, amely ezeket a kérdéseket eldönti: hogy a bizonyíték alátámasztja-e a levonni kívánt következtetést. Az [[automated-assessment]] a technológiát és annak mért teljesítményét fedi formátumokon át, az [[ai-feedback-at-scale]] pedig a szomszédos problémát kezeli: a generált megjegyzéseket és azt, hogy a diákok cselekszenek-e rájuk.

Arról, hogy mit kellene képviselnie egy jegynek, amikor a diákok már használnak MI-t, beleértve a konstruktumhelyettesítést és a hitelesített folyamatbizonyítékot, lásd [[redesign-assessment-ai-era|az értékelés újratervezése a MI korszakában]]. Arról, hogy a detektálás helyettesítheti-e a védhető feladattervezést, lásd [[should-we-use-ai-detectors|használjunk-e MI-detektorokat]]. Az egész alatt lévő értékelési kérdésről lásd [[checking-whether-educational-ai-works|annak ellenőrzése, hogy egy oktatási MI működik-e]].
