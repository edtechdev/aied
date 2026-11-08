---
title: "Elméletek és keretrendszerek"
created: "2026-09-19T05:40:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/theories-and-frameworks"
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

> **Elméletek és keretrendszerek** — e tudásbázis magyarázó és szervező struktúráinak ténylegesen használt leltára. Az elméletek megmagyarázzák, miért történik meg a tanulás ([[learning-theories]], [[self-determination-theory]], [[sociocultural-learning]], [[activity-theory-aied|tevékenységelmélet]]); a keretrendszerek a tervezési, tanítási és elfogadási döntéseket szervezik ([[tpack]], [[samr-model|SAMR]], [[technology-acceptance-model|technológiaelfogadási modellek]], [[icap-framework|ICAP]], [[universal-design-for-learning|univerzális tervezés a tanuláshoz]]); a modellek tesztelhetővé és számíthatóvá teszik a tanulási állításokat ([[item-response-theory|tételválasz-elmélet]], [[assessment-validity]], [[knowledge-tracing]]). Ezt az oldalt arra használhatja, hogy megtalálja, melyik lencsén nyugszik egy tanulmány, vagy hogy válasszon egyet a saját munkájához.

## Megfontolandó kérdések

- Az elmélet megjósolja, mi történik, ha valami megváltozik; a keretrendszer megmondja, mire figyeljünk. Amikor egy tanulmány egy keretrendszer zászlaja alatt eredményt jelent, de nem tesz olyan előrejelzést, amely meg is bukhatott volna, mi az, amit valójában megtudtunk?
- A [[tpack|TPACK]], a [[samr-model|SAMR]], az [[universal-design-for-learning|UDL]], az [[technology-acceptance-model|elfogadási modellek]] és az [[icap-framework|ICAP]] mind a [[llm|nagy nyelvi modellek]] előtt keletkeztek. Mely részeik állnak még mindig, amikor az eszköz magától ír, magyaráz és alkalmazkodik, és hogyan állapítaná meg ezt?
- Az alább katalogizált elméletek közül többet az elmúlt néhány évben alkottak az MI számára. Mi kellene ahhoz, hogy valamelyikük tévesnek bizonyuljon, és megpróbálta-e ezt valaki megmutatni?
- Az elfogadást gyakran szakaszokon át vezető mozgásként jelentik. Ha egy kollégája azt jelenti, hogy a kurzusa idén „a helyettesítésből az újradefiniálásba” lépett, milyen független bizonyítékot kérne, mielőtt elhinné?
- Ez a terület nagy részt kölcsönzött elméletet alkalmaz, nem teszteli azt. Válasszon egy eredményt, amelyre támaszkodik: átfogalmazható-e [[self-determination-theory|egy elmélet]] tesztjeként, és milyen mérésre lenne ehhez szükség?

## Bevezetés

Minden MI-tutor, visszajelző rendszer és irányítópult feltevéseket hordoz arról, hogyan tanulnak az emberek, akár kimondják ezeket a tervezők, akár nem. Ez az oldal összegyűjti azokat az elméleteket, keretrendszereket és modelleket, amelyekből ezek a feltevések származnak, lazán aszerint rendezve, hogy a jelenlegi kutatási irodalom mekkora része támaszkodik rájuk, és röviden megmondja, mire jó mindegyik. A három címke közötti különbségek valódiak, de kicsik, és inkább a végén összegződnek, semmint a téma tárgyát képeznék. Gyakorlatilag az számít, hogy egy állítás melyik lencsén nyugszik, és hogy az a lencse képes-e alátámasztani az állítást.

## A szakirodalom által alkalmazott tanuláselméletek

Ezek mechanizmusokat magyaráznak: megnevezik azokat a részeket, amelyek a munkát végzik, és megjósolják, mi következik, ha ezek a részek megváltoznak. Az MI-szakirodalomban nagyrészt a pszichológiából és a [[learning-sciences|tanulástudományokból]] kölcsönzik őket, és egy új eszköz körüli értelmező keretként használják.

- **[[learning-theories|Tanuláselméletek (ernyőfogalom)]]** — a család egésze, beleértve a [[behaviorism]] és a [[constructivist|konstruktivizmus]] klasszikus pólusait, valamint a „nevükben konstruktivizmus, gyakorlatban behaviorizmus” szakadékot, amely az MI-megvalósításokban visszatér. A konnektivizmus és a kognitív terhelés elmélete is itt szerepel.
- **[[constructivist|Konstruktivizmus]]** — a tanulás mint aktív tudásépítés. Ez támasztja alá a [[project-based-learning|projektalapú]] munkát, a dialógusalapú [[intelligent-tutoring|MI-tanácsolást]], valamint azt a kritikát, hogy a gyakoroltató-visszajelző rendszerek megsértik a saját maguk hirdette pedagógiát.
- **[[sociocultural-learning|Szociokulturális elmélet]]** — a tanulás eszközök és társas interakció által közvetített, ezért teoretizálják az MI-t közvetítő artefaktumként, nem puszta segédeszközként.
- **[[activity-theory-aied|Tevékenységelmélet]]** — a teljes tevékenységrendszert, az ellentmondásokat is beleértve, teszi elemzési egységgé. Gyakori a tanárokat célzó MI-tanulmányokban, ahol az érdekes eredmény általában az eszközök, a szabályok és a közösség közötti feszültség.
- **[[situated-learning|Helyhez kötött tanulás]]** és **[[embodied-learning|testesült tanulás]]** — a tanulás kontextushoz és testhez kötött, ez az ellensúly azzal szemben, hogy az MI-t tisztán nyelvi médiumként kezeljük.
- **[[distributed-cognition|Elosztott kogníció]]** — a gondolkodás emberek és artefaktumok között szóródik, ami az MI-támogatást a kognitív munka újraelosztásaként keretezi, nem pedig annak helyettesítéseként.
- **[[community-of-inquiry|Vizsgálódó közösség]]** — azok a társas, kognitív és tanítási jelenlétek, amelyek működőképessé teszik az online élményt; egyszerre az élmény elmélete és tervezési kerete.
- **[[self-determination-theory|Önmeghatározás-elmélet]]** — az autonómia, a kompetencia és a kapcsolódás mint motivációs előfeltételek. Gyakran ez a magyarázat, amikor az MI-használat növeli az elköteleződést, de nem növeli a tanulást.
- **[[cognitive-psychology|Kognitivizmus]]** — információfeldolgozás, munkamemória, valamint a tanulás érzése és a tényleges tanulás közötti eltérés.
- **Társas észlelés elmélete (melegség és kompetencia)** — a társas kognícióból és a szolgáltatórobot-kutatásból átvett keret, amely megmagyarázza, hogyan ítélik meg a felhasználók egy [[agentic-ai|MI-ügynök]] hitelességét: az észlelt kompetencia közvetlenül jósolta a ChatGPT-visszajelzés hitelességét, míg a melegség csak az emberszerű empátián keresztül hatott (SEM, 230 diák; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López és mtsai. (2026)]]).
- **Egy negyedik affordanciakategóriát javasoltak, de nem teszteltek.** 24 tanulmányt kódolva egy háromrészes affordanciasémához a bírálók azt találták, hogy az elköteleződés, a biztonság és az önhatékonyság nem illeszkedett a technológiai, [[pedagogy|pedagógiai]] vagy társas kategóriákba, és Bandura kölcsönös determinizmusára alapozva érzelmi affordanciákat javasoltak ([[genai-chatbots-language-learning-affordances-review-2026|Lopez és Arabadzhy (2026)]]).

## A tanuló és a tanulási folyamat modelljei

- **[[self-regulated-learning|Önszabályozó tanulás]]** — a saját tanulás tervezése, nyomon követése és értékelése. Az a munkaló értelemző, amellyel megkérdezhető, eléri-e az MI-támogatás a számító szakaszokat, vagy csak a végrehajtást.
- **[[metacognition|Metakogníció]]** — a saját gondolkodásra gondolás, és az az értelemző, amelyet leggyakrabban megneveznek, amikor az MI-t azzal vádolják, hogy a diákok helyett gondolkodik.
- **[[motivation|Motiváció]]** — miért köteleződnek el a tanulók, és az az értelemző, amely az MI-tanulmányokban elválasztja az elköteleződést a tanulástól.
- **[[self-efficacy|Önhatékonyság]]** — a saját képességbe vetett hit, a kompetenciától különböző, és gyakori mediátor az MI-használat és az eredmények között.
- **[[agency|Ügynökség]]** — ki irányítja a munkát: az az értelemző, amely a terület irányítás kontra autonómia feszültsége mögött áll, és a legújabb elmélet delegált ügynökségi mechanizmusa mögött is.
- **[[desirable-difficulties|Kívánatos nehézségek]]**, **[[retrieval-spacing-interleaving|előhívás, időközönkénti ismétlés és keverés]]**, valamint **[[refutation-text|visszautasító szöveg]]** — olyan eredmények, amelyek pedagógiailag értékessé teszik a súrlódást, és azokra a döntésekre alkalmazhatók, hogy mennyit végezzen el az MI.
- **[[transfer-of-learning|Tanulási transzfer]]** — fennmarad-e a képesség, ha a támogatást visszavonják; a közelmúlt elmélete ezt tekinti annak a kritériumnak, amely elválasztja a tanulást a segítségnyújtástól, nem pedig egy eredménynek a sok közül.

## Tanítási, integrációs és elfogadási keretrendszerek

- **[[tpack|TPACK]]** — a tanári tudás, amely a technológiát, a pedagógiát és a tartalmat ötvözi; a tanárokat célzó MI-tanulmányok alapértelmezett keretrendszere.
- **[[technology-acceptance-model|Elfogadási modellek]]** — a szándék az észlelt hasznosság és a használat könnyűségének függvényében. Olyan széles körben használják, hogy a területnek a szándékra, nem pedig a viselkedésre támaszkodása állandó kritika tárgya.
- **[[icap-framework|ICAP]]** — az elköteleződést passzív, aktív, konstruktív és interaktív szintekbe rendezi; hasznos annak megkérdezésére, milyen módot tesz lehetővé valójában egy [[student-ai-interaction|MI-interakció]].
- **[[samr-model|SAMR]]** — a helyettesítéstől az újradefiniálásig. Népszerű érettségtörténetként, gyenge mérőműszerként.
- **[[universal-design-for-learning|Univerzális tervezés a tanuláshoz]]**, **[[inclusive-learning|befogadó tanulás]]** és **[[accessibility|hozzáférhetőség]]** — tervezési keretek arra, hogy kit szolgálnak ki, és a leggyakrabban hivatkozott keretek a fogyatékosság és az [[equity-in-ai-education|esélyegyenlőség]] terén.
- **[[learning-design|Tanulástervezés]]**, **[[curriculum-design|tantervtervezés]]** és **[[design-thinking|tervezői gondolkodás]]** — hogyan strukturálódnak a feladatok, sorozatok és programok, mielőtt bármilyen eszközt választanánk.
- **[[change-management|Változásmenedzsment]]** — egyáltalán átveszik-e a rendszert, ami rendszerint intézményi, nem pedagógiai kérdés.

## Mérési és számítási modellek

- **[[item-response-theory|Tételválasz-elmélet]]** — tétel- és képességbecslés, és az a modell, amely értelmezhetővé teszi egy teszt számait.
- **[[educational-measurement|Oktatási mérés]]** — a műszerképzet, beleértve a kifejezetten [[ai-literacy|MI-írástudásra]] épített mérőeszközöket.
- **[[assessment-validity|Érvényesség]]** — hogy egy műszer azt az értelemzőt méri-e, amelyet állít, ami eldönti, hogy egy jelentett eredmény alátámasztja-e a hozzá kapcsolt elméleti állítást.
- **[[self-report-measures|Önjelentéses mérőeszközök]]** — e szakirodalom domináns és legtörékenyebb bizonyítékforrása; több fenti értelemzőről tudott, hogy élesen eltér önjelentés és teljesítmény között.
- **[[knowledge-tracing|Tudáskövetés]]** és **[[student-modeling|Tanulómodellezés]]** — a tanuló állapotának becslése időben, interakciós adatokból.
- **[[cognitive-diagnosis|Kognitív diagnózis]]** — a teljesítmény visszavezetése konkrét készségkomponensekre, a diagnosztikus tanítás modellező megfelelője.
- **[[benchmark|Mérföldkövek]]**, **[[ai-ed-evaluation|MI-oktatási értékelés]]** és **[[psychometrically-aware-ai|pszichometriai tudatosság az MI-tervezésben]]** — hogyan pontozzák, hasonlítják össze és auditálják a rendszereket és beavatkozásokat.
- **[[design-based-research|Tervezésalapú kutatás]]** — az a módszer, amely tervezett beavatkozásokból állít elő elméletet, ahelyett hogy előre tesztelné azt.

## Az MI korszakára alkotott elméletek

A tudásbázisban négy javaslat épít elméletet, nem kölcsönzi azt. Ezek cikkoldalak, nem fogalomcsomópontok, mert mindegyik egyetlen érvelés:

- **[[generativism-learning-theory|Generativizmus]]** — új tanuláselmélet, amely amellett érvel, hogy a klasszikus négy jelentős fogalmi korlátokkal rendelkezik, ahogy a [[generative-ai|generatív MI]] terjed.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Episztemikus együgynökség]]** — annak modellje, hogyan állítanak elő közösen tudást és megértést a tanulók és az MI-rendszerek.
- **[[absent-cognitive-baseline-2026|A hiányzó kognitív alapvonal]]** — azt teoretizálja, miért becsülik túl saját tanulásukat az MI-natív diákok, amikor az MI felfújja a teljesítményt.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivizmus]]** — középszintű elmélet, amely négy mechanizmust nevez meg (delegált ügynökség, episztemikus monitorozás és ellenőrzés, rekonstruktív internalizáció, valamint transzfer csökkentett támogatás mellett), és hat tesztelhető állítást fogalmaz meg.

## A három címke megkülönböztetése

A szavakat lazán használja a szakirodalom, és a különbség egy bekezdést érdemel, nem egy egész oldalt:

- **Az elmélet egy mechanizmust magyaráz**, és megjósolja, mi történik, ha a részei megváltoznak. Megbukhat, ezért tudnak hatásnagyságot jelenteni azok a tanulmányok, amelyek tesztelik.
- **A keretrendszer szervez vagy előír.** Megnevezi a figyelembe veendő komponenseket, általában nagyságrendek előrejelzése nélkül, és nem cáfolható.
- **A modell formális reprezentáció**, leggyakrabban a mérésről vagy a tanuló állapotáról. Illeszthető, összehasonlítható, és kimutatható róla, hogy téves — olyan módon, ahogy egy keretrendszerről nem.
- **A címkék átfednek.** A [[community-of-inquiry|vizsgálódó közösség]] egyszerre elmélet és tervezési keret; a [[activity-theory-aied|tevékenységelmélet]] magyarázó és elemző. A címkét tekintse nyomnak arról, mit állít egy forrás, ne irattárolási kategóriának.

## Kapcsolódó rétegek

Két szomszédos oldal szándékosan valami másról szól. A [[philosophy-of-ai-in-education|MI-oktatás filozófiája]] normatív és fogalmi kérdéseket tesz fel — hogy *miért* van az oktatás, taníthat-e egy gép —, és nem jósol hatásnagyságot; egy tanulmány lehet filozófiailag naiv és elméletileg megalapozott, vagy fordítva. A [[theory-development-aied|elméletfejlesztés]] az elmélet építésének, kölcsönzésének és felülvizsgálatának meta-tevékenysége, beleértve azt az állandó kritikát, hogy sok [[ai-education|AIED]]-munka meglévő elméletet alkalmaz, ahelyett hogy tesztelné azt. Ez az oldal a leltár; az elméletfejlesztés a leltár előállításáról és felülvizsgálatáról szól.

## Lencseválasztás, amikor a kérdés gyakorlati

- **Az oktatók** egy problémából kiindulva visszafelé dolgozhatnak: ha a tanulók nem köteleződnek el, az [[icap-framework|ICAP]] és az [[self-determination-theory|SDT]] különböző okokat nevez meg, és különböző megoldásokat sugall; ha az a kérdés, hogy egyáltalán átvegyenek-e egy eszközt, az [[technology-acceptance-model|elfogadási modellek]] és a [[samr-model|SAMR]] különböző dolgokat kérdeznek róla.
- **A tanulástervezők** a legtöbbet a tervezési keretekből kapják — [[universal-design-for-learning|UDL]], [[learning-design]] és [[scaffolding|vázolás]] —, olyan elmélettel párosítva, amely megjósolja, mi történik, amikor a vázolást eltávolítják.
- **A kutatóknak** meg kell mondaniuk, melyik csomópontot állítja egy tanulmány, és hogy a tervezés valóban tesztelheti-e azt; a mérési modellek ([[item-response-theory|IRT]], [[assessment-validity]], [[self-report-measures]]) döntik el, hogy egy jelentett eredmény alátámasztja-e azt az állítást.
- **Az adminisztrátorok** ezekkel a keretrendszerekkel mint elfogadási és változási kérdésekkel találkoznak, ahol a szakaszmodellt gyakran érettségtörténetként, nem műszerként használják.

## Amit a keretrendszerek nem tudnak

A keretrendszerek nem bizonyítékok. Rendszerint LLM előtti kontextusokból kölcsönzik őket, és az lokalizálja, aki alkalmazza; márkaként is működhetnek, a szakaszmodellek pedig kipipálható elfogadást hívnak elő, amely szinteken át vezető mozgást jelent, nem tanulást. A keretrendszerre támaszkodó állításokat a [[limitations-in-aied-research|terület átfogó korlátai]] mellett kell olvasni, valamint annak [[assessment-validity|érvényessége]] mellett, ami az eredményt mérte, és a [[self-report-measures|önjelentés]] ismert korlátai mellett.

A mechanizmus és az elmélet összehangolása mégis döntő lehet: 55 MI-támogatott [[game-based-learning|játékalapú tanulási]] tanulmány tematikus szintézise azt találta, hogy a hatékonyság azon múlott, hogy az MI-mechanizmus megvalósította-e a pedagógiát, amelyet szolgálnia kellett, nem pedig az algoritmikus kifinomultságon ([[ai-game-based-learning-systematic-review-2026|Kaşarcı és Yurt (2026)]]).

## Gyakori tévhitek

**„Ha egy kölcsönzött elméletet MI-eszközre alkalmazunk, az elmélethasználat.”** Ez a terület nagy részt kölcsönzött elméletet alkalmaz, nem teszteli azt, és a különbség az, hogy a keretrendszer tett-e olyan előrejelzést, amely megbukhatott volna. Amikor egy tanulmány egy keretrendszer zászlaja alatt eredményt jelent, miközben nem vállal cáfolható előrejelzést, semmit nem tudtunk meg a keretrendszerről — a katalógus minden elméletével összeegyeztethető eredmény egyikük mellett sem bizonyíték.

**„Egy keretrendszer értéke az, hogy milyen jól ír le egy már megépített rendszert.”** Ez utólagos címkézés. Egy taxonómiának, amely bármilyen tervet befogad, nincs megkülönböztető ereje, ezért a leíró keretrendszereket azon kell megítélni, amit kizárnak. Az értékelési kérdés nem az, hogy „illeszkedik-e a rendszerem ehhez?”, hanem hogy „milyen rendszerről mondaná ez a keretrendszer, hogy rossz?”.

**„A tanuláselméletek, a tanuló modelljei és az elfogadási keretrendszerek felcserélhető lencsék.”** Különböző kérdésekre válaszolnak — hogyan történik a tanulás, mi a tanuló állapota, és miért terjed el egy gyakorlat —, és bizonyítéktípusaik ennek megfelelően különböznek. A rossz réteg választása olyan tanulmányt eredményez, amely a megfelelő változót a rossz előrejelzéssel szemben méri, és ez nulleredményként olvasódik, holott kategóriahiba.

**„Minél több keretrendszer, annál érettebb a terület.”** Az MI korszakára alkotott keretrendszerek gyorsabban halmozódnak, mint ahogy tesztelik őket, és a cáfolat nélküli halmozódás inkább tünet, mint haladás. Az érettség abban mutatkozik meg, hogy versengő előrejelzések oldódnak fel, nem a szókészlet növekedésében.

## Összefüggő fogalmak

- [[theory-development-aied]] — az elmélet építése és felülvizsgálata a területen
- [[philosophy-of-ai-in-education]] — a normatív és fogalmi réteg
- [[learning-theories]] — a tanuláselmélet ernyőfogalma
- [[learning-sciences]] — a szomszédos terület, ahonnan a legtöbb elméletet kölcsönzik
- [[limitations-in-aied-research]] — mit támogathat és mit nem a bizonyítékbázis
- [[tpack]] — tanári tudáskeretrendszer
- [[technology-acceptance-model]] — elfogadási keretrendszerek
- [[item-response-theory]] — egy mérési modell
- [[universal-design-for-learning]] — egy tervezési keretrendszer
- [[research-methods-aied]] — hogyan tesztelik az elméletet

## Összefüggő cikkek

- [[genai-chatbots-language-learning-affordances-review-2026]] — Érzelmi affordanciák mint negyedik kategória egy affordanciataxonómiában
- [[ai-game-based-learning-systematic-review-2026]] — A mechanizmus és az elmélet összehangolása, nem az algoritmikus kifinomultság hajtotta a hatékonyságot 55 MI-alapú játékos tanulási tanulmányban

- [[rismanchian-ai-education-four-decades-aixed-2026]] — az AIED négy évtizede az AI×Ed keretrendszeren keresztül
- [[educating-minds-generative-ai-2026]] — elméletigényes szintézis a generatív MI-ről és a tanulásról
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — tevékenységelmélet a tanárok szakmai fejlesztésére alkalmazva
- [[activity-theory-teachers-adoption-ai-sem-2026]] — tevékenységelmélet és tanári elfogadás
- [[generativism-learning-theory]] — a generatív MI korszakára javasolt tanuláselmélet
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — egy episztemikus együgynökségi elmélet felé
- [[absent-cognitive-baseline-2026]] — strukturális hiány teoretizálása az MI-natív diákok önértékelésében
- [[yan-agentivism-learning-theory-ai-2026]] — középszintű tanuláselmélet az ember–MI interakcióhoz
- [[ai-literacy-instrument-development-systematic-review-2026]] — műszerfejlesztés egy fiatal értelemző mentén
- [[mishra-control-vs-agency-history-2025]] — a terület alapvető irányítás kontra ügynökség feszültsége
