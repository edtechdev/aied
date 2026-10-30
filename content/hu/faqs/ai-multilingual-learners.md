---
title: "Hogyan támogathatja a MI a többnyelvű tanulókat anélkül, hogy félreítélné a tudásukat vagy eltörölné a hangjukat?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-disabled-neurodivergent-learners, writing-instruction-ai-best-practices, redesign-assessment-ai-era, verify-ai-output]
weight: 72
foundations: [ai-literacy, theories-and-frameworks]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review, experiment]
audience: [instructors, instructional designers, assessment designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:30:00-04:00"
translation_of: faqs/ai-multilingual-learners
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Egy diák érti a fogalmat, és négy plusz percre van szüksége, hogy ezt angolul el is mondja. A MI lefordíthatja a promptot, definiálhatja a terminológiát, gyakorolhatja vele a magyarázatot, vagy megírhatja az egész választ. Ebből három tanítás. Egy a feladat megoldása.

Rövid válasz egy kollégának: döntse el, mit csinál a nyelv ebben a feladatban, mielőtt eldönti, mit tehet az eszköz. Ahol a nyelv mellékes, a MI eltávolíthat egy korlátot, amelynek semmi köze a konstruktumához. Ahol a nyelv maga a konstruktum, ugyanaz az eszköz megkerüli a tanulást. A kockázat egyszerre fut mindkét irányba: a [[multilingual-learning|nyelvi támogatás]] javíthatja a hozzáférést, és az automatizált pontozás továbbra is félreolvashatja a diákot. Egy fizikai vizsgálatban az alacsonyabb nyelvi minőségű magyarázatokat minden tesztelt MI-pontozási megközelítés rendszeresen a szakértői ítélet alá osztályozta, kilenc gépi tanulási és két nyelvimodell-rendszer, 116 középiskolás diák bevonásával ([[ai-scoring-language-bias-physics|Feser és Tschisgale, 2026]]). A folyékonyságot és a megértést egyetlen dologként pontozták.

## A rövid változat

**1.** Mondja meg, mi a nyelv szerepe a feladatban: mellékes, központi, vagy több kritérium egyike.

**2.** Írja bele az engedélyezett támogatást az utasításokba és a kritériumokba, és mondja meg, mit kell a diákoknak mégis maguknak megtenniük.

**3.** Célzott segítséget adjon teljes átírások előtt. Kérje meg az eszközt, hogy azonosítsa a homályos jelentést, és ajánljon lehetőségeket.

**4.** Követelje meg, hogy a diák hasonlítsa össze a javasolt megfogalmazást a saját jelentésével és a kurzushoz tartozó forrásokkal.

**5.** Pontozza külön a fogalmi érvelést és a nyelvet, amikor mindkettő szándékolt kimenet.

**6.** Soha ne tegyen egy tesztelés nélküli eszközt a támogatás egyetlen útjává.

## Döntse el, mit csinál a nyelv

Egy biológiai magyarázatban a nyelvtan többnyire mellékes az értékelt fogalomhoz képest. Egy nyelvkurzusban bizonyos szerkezetek létrehozása és átdolgozása maga a tanulás. A szakmai kommunikációban a szakmai pontosság, a közönség és a regiszter egyaránt számít. Ugyanaz a fordítóeszköz megfelelő az első esetben, kérdéses a másodikban és tárgyalható a harmadikban.

Írja le a döntést ott, ahol a diákok elolvashatják. Ha a diákok lefordíthatják az utasításokat, de a célnyelvi magyarázatot önállóan kell megalkotniuk, mondja ezt ki egyértelműen. Ha a terminológiai támogatás engedélyezett, adja meg, mit kell a diáknak mégis megmagyaráznia és ellenőriznie. Aztán ellenőrizze az elrendezést az akadálymentesítési követelmények és az intézményi szabályzat ellenében, ahelyett hogy minden nyelvi segítségformát azonosnak tekintene. Egy dokumentált akadálymentesítéssel élő diák és egy diák, aki a gyakorlást kerüli, ugyanazt kérheti, és csak a második az Ön tanítási problémája.

## Mit támaszt alá a kutatás, és mit nem

[[genai-chatbots-language-learning-affordances-review-2026|Lopez és Arabadzhy (2026)]] 24 empirikus vizsgálatot tekintett át a generatív chatbotokról a nyelvtanulásban. A hozzájárulásuk taxonómiai: minden, a generatív előtti chatbotoknál jegyzékbe vett al-lehetőség megmarad, és három új, köztük a **transzlingvisztika**, a szándékos mozgás a nyelvek között a tanulás részeként. Ez a jelentett használatok és tapasztalatok térképe, nem összevont becslés, és a korpusz földrajzilag koncentrált: Kína, Irán, Tajvan és Törökország adja a 24 vizsgálatból 19-et, és egy kivételével mind formális intézményen belül zajlott. A nyelvek közötti magyarázat tanulási lépésként való alkalmazásának támogatása nem azonos minden feladat lefordításának támogatásával.

Az értékelés az, ahol a bizonyíték élesebbé válik és a tét nő. [[ai-scoring-language-bias-physics|Feser és Tschisgale (2026)]] tizenegy automatizált pontozási megközelítést hasonlított össze emberi szakértői pontszámokkal 116 középiskolás diák fizikai magyarázatain, és minden egyes megközelítésben rendszeres alulbecslést találtak a fogalmi megértésben a nyelvileg gyengébb magyarázatoknál. A kísérleti elrendezés izolálja a mechanizmust: ugyanaz a fogalmi tartalom, gyengébb prózában kifejezve, alacsonyabb pontszámot kapott. Ez nem állítás egyetlen ország többnyelvű diákjairól sem, és pontosan ez a minta teszi az átfogó pontozási egyezést rossz diagnosztikává. Egy pontozó átlagosan egyetérthet az emberi javítókkal, miközben következetes irányban téved azoknál a diákoknál, akiknek a nyelve még fejlődik.

A [[multilingual-learning]] szintézis olyan írásvizsgálati kutatást ír le, amely a többnyelvűek prediktív torzítási mintáit mutatja, hasonlóan az emberi pontozási torzításokhoz. Olvassa a három megállapítást együtt, és az operatív tanulság szűk: sem az „a MI megszünteti az emberi torzítást", sem az „a MI nyelvi torzítást ad hozzá" nem használható szabály. Amire szüksége van, az a feladat, a populáció és a nyelv ellenőrzése ott, ahol a pontszám jegyzé válik.

## Adjon az eszköznek konkrét támogató szerepet

Kezdje az utasításokkal: fordíttassa le vagy fogalmaztassa újra az eszközzel egyszerű nyelven, ellenőrizze a kimenetet az eredetivel szemben, és hagyja a diákra, hogy kitalálja, mit követel a feladat, és kérdezzen a valódi kétértelműségekről.

A szakterületi szókincs másképp működik. Állítsa az eszközt arra, hogy hasonlítsa össze a jelentéseket a nyelvek között, és generáljon kontextuális példákat, majd a diák magyarázza el a fogalmat, és azonosítsa a félrevezető megfeleléseket.

A beszédgyakorlás korlátozott, ismétlésekkel járó próbát kíván, ahol a diák állítja elő a választ, és mutatja meg a célkészséget.

Írás átdolgozásakor kérjen néhány megnevezett problémát lehetséges javításokkal, és tartsa a döntést és annak indoklását a diáknál.

A kurzustartalom olvasása a legszélesebb eset. Egy jóváhagyott anyagokra épülő kétnyelvű magyarázat segít, feltéve, hogy a diák ellenőrzi a kulcsállításokat, és bemutatja a megértést.

Ezek pilotálandó használatok, nem érvényesített beavatkozások. Egy eszköz, amely egy nyelvben vagy egy műfajban jól teljesít, ezáltal nem megbízható egy másikban, és az áttekintés földrajzi koncentrációja miatt lehet, hogy az Ön nyelvpárja alig szerepel a bizonyítékokban.

## Védje a diák jelentését és hangját

Célzott segítséget kérjen, mielőtt átírást kér, mert a teljes átírás az, ahol a diák gondolkodása elhagyja az oldalt. Egy kérés, amelyet érdemes megtanítani: „Azonosíts két helyet, ahol a jelentésem homályos. Magyarázd el a problémát, és ajánlj lehetőségeket. Tartsd meg a példáimat, és ne adj hozzá állításokat." Aztán a diák választ.

Egy sorrend, amely a diáknál tartja a munkát:

1. Dolgozza ki a magyarázatot bármilyen nyelven vagy nyelvkeverékben, amely a diák érvelését segíti, ahol a feladat engedi.
2. Használjon jóváhagyott támogatást a terminológia vagy a kifejezés vizsgálatára.
3. Hasonlítsa össze a javasolt megfogalmazást a szándékolt jelentéssel és a kurzushoz tartozó forrásokkal.
4. Állítsa elő a megkövetelt magyarázatot, és jegyezze fel a következményes átdolgozásokat.

Egy szociológiai feladatban a diák kétnyelvűen végiggondolhat egy családi szerepkonfliktust, ellenőrizhet egy rövid kurzuskifejezés-listát, majd a beadott elemzést a megkövetelt nyelven írja meg, az oktató pedig a szociológiai érvelést és a külön megadott nyelvi kritériumokat értékeli. Egy nyelvtanulási feladatban ugyanez a sorrend odaadná az értékelést, és meg kellene őriznie az önálló célnyelvi produkciót.

Kerülje, hogy az „úgy hangzik, mint egy anyanyelvi beszélő" legyen a mérték, mert az a diák viszonyát méri egy dialektushoz, nem a tárgy megértését. Adjon meg inkább világosságot, pontosságot, műfajt vagy közönséget. Egy csiszolt átírás eltolhatja az álláspontot, kihagyhat egy kulturálisan jelentős kifejezést, vagy hozzáadhat egy állítást, amelyet a diák soha nem szándékolt, és a diák írja alá.

## Ellenőrizze az eszközt és az értékelést

A jelentést vizsgálja, ne a folyékonyságot. Mintavételezzen fordításokat és magyarázatokat szakszavak, kihagyások, kitalált részletek, kulturális feltevések és a diákjai által ténylegesen használt nyelvváltozatok szempontjából. Vonjon be képzett nyelvi kollégákat vagy támogató munkatársakat; ne a diákokat tegye egy általa megkövetelt eszköz egyetlen auditorává.

Válassza szét a kritériumokat. Amikor az érvelés és a nyelv egyaránt szándékolt kimenet, pontozza őket külön, és ellenőrizze, hogy egy MI-támogatott javító nem bünteti-e kétszer a nyelvet, vagy nem hagyja-e ki a szokatlanul kifejezett helyes érvelést. Ez a [[assessment-validity|érvényesség]] gyakorlati formája egy többnyelvű csoport számára, és az alcsoport-kérdés a [[differential-effects-across-learner-groups|differenciális hatások]] oldalán.

Tartson fenn utat a tisztázáshoz. Egy rövid beszélgetés, egy feliratozott ábra vagy egy kulcsdöntés elmagyarázása megmutathatja, mit ért egy diák, amikor a próza nem hordozza. Válassza a konstruktumhoz illő formátumot, ne a legkönnyebben osztályozhatót.

Adjon működő alternatívákat. A diákoknak tiszta út kell az emberi nyelvi támogatáshoz és az akadálymentes kurzusforrásokhoz. Egy tesztelés nélküli eszköz megkövetelése korlátot adhat hozzá, miközben a befogadást szándékolja, ami ugyanaz a kudarc, amelyet a [[ai-disabled-neurodivergent-learners|fogyatékossággal élő és neurodivergens tanulók támogatásának]] el kell kerülnie.

## Ami vissza fog jönni Önre

**„A fordítás azt jelenti, hogy a diák kerüli a munkát."** Attól függ, mi a munka. A fordítás lehetővé teheti a szakterületi tartalommal való foglalkozást, amelyhez semmi köze, és helyettesítheti a gyakorlást, amikor az önálló célnyelvi produkció a kimenet. Döntse el, melyiket értékeli, és mondja meg.

**„A MI rendbe tette a nyelvet anélkül, hogy bármi mást változtatott volna."** Ellenőrizze. Egy nyelvtant javító átírás gyakran megváltoztatja a hangsúlyt, tompít egy állítást, vagy alátámasztást talál ki. Kérje meg a diákot, hogy nevezzen meg egy érdemi változást, és mondja meg, megőrzi-e a szándékolt pontot, ami azt is megmutatja, elolvasta-e a javaslatot.

**„Az emberi javítók tisztességesebbek."** Az emberi pontozás a maga nyelvi torzítását hordozza, és a többnyelvű írásvizsgálati kutatás az automatizált rendszereket annak mintáit reprodukálva találja. A tisztesség itt kifejezett kritériumokból, mintavételezett alcsoport-bizonyítékból és egy valódi esélyből jön egy ítélet újragondolására, nem abból, ki vagy mi tartja a tollat.

**„A diákjaink jól vannak angolul, ezért ez nem vonatkozik rájuk."** A számító megállapítás nem hiányossági állítás egyetlen csoportról sem. Az, hogy a gyengébb prózában kifejezett fogalmi megértést rendszeresen alulpontozzák, minden tesztelt módszerben. Ez vonatkozik a siető írókra, a második nyelvű írókra és mindenkire, akinek a regisztere eltér a vizsgáztatóétól.

## Mit tegyen ezen a héten

**1.** Vegyen egy feladatot, és írjon egy mondatot arról, mit csinál benne a nyelv.

**2.** Írja át az utasításokat, hogy megmondják, milyen támogatás engedélyezett, és mit kell a diákoknak önállóan előállítaniuk.

**3.** Teszteljen egy fordítást és egy terminológiai magyarázatot azokon a nyelveken, amelyeket a diákjai ténylegesen használnak, és olvassa a kimenetet kitalált részletek és kiesett jelentés szempontjából.

**4.** Adjon hozzá egy ellenőrzést, amely rögzíti a diák saját jelentését vagy döntését, például egy kétsoros jegyzetet egy elfogadott vagy elutasított változásról.

**5.** Ha a rubrikája az írás minőségét pontozza, válassza szét azt a kritériumot a fogalmitól, és olvasson újra két-két beadást a szétválasztás tudatában.

## Hová tovább

A [[multilingual-learning]] a nyelv, a transzlingvisztika és az értékelés fogalmi oldala a MI-közvetített tanításban, az [[assessment-validity|értékelési érvényesség]] pedig az a mérték, hogy egy pontszám alátámasztja-e a levont következtetést. A [[differential-effects-across-learner-groups]] azt fedi, hogyan keressünk alcsoport-mintákat, nehogy feltételezzük őket.

Az írásoktatás esetére, ahol a nyelv a konstruktum, lásd [[writing-instruction-ai-best-practices|az írásoktatás bevált gyakorlatai]]. Arról, hogy az automatizált pontozás egyáltalán megbízható-e az Ön környezetében, lásd [[ai-grading-fairness-reliability|az MI-osztályozást]] és [[checking-whether-educational-ai-works|annak ellenőrzését, hogy egy oktatási MI működik-e]].
