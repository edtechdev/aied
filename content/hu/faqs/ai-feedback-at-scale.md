---
title: "Hogyan segíthet a MI abban, hogy jobb visszajelzést adjak nagy léptékben?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Hatodik hét. Egy rakás vázlat, egy rubrika, amelyben hisz, és egy növekvő gyanú, hogy a megjegyzései egyharmadát átfutják és elfelejtik. Egy kolléga megemlíti, hogy egy eszköz most egy órán belül kommentál minden vázlatot. A tanszéki ülésen válasz kell: ez fejlesztés, vagy gyorsabb módja annak, hogy olyan szöveget állítsunk elő, amit senki nem olvas el?

Rövid válasz egy kollégának: a MI-visszajelzés a lefedettségben, az időszerűségben és a konzisztenciában érdemli ki a helyét, egy szűk sávon belül. A korrektúra szintű nyelvi munkát és a rubrika vezette első körös megjegyzéseket érdemes automatizálni. Az elérés az olcsó rész. Egy klaszter-randomizált kísérletben 1 176 elsőéves egyetemi hallgatóval a reflektív és a hibrid tervezés felülmúlta a közvetlen MI-kritikát a késleltetett, MI nélküli [[transfer-of-learning|transzferben]]. Egy 70 diákos randomizált esszékísérletben a jobbra értékelt MI-visszajelzés nem termelt jobb átdolgozást, mint egy tapasztalt tanáré. Az dönti el az eredményt, mit tesz a diák egy megjegyzéssel, és a [[feedback-literacy|visszajelzés-írástudás]] választja el a nyerő diákokat azoktól, akik másolnak.

## A rövid változat

**1.** Döntse el, mi számít sikernek, mielőtt bármit pilotol: az átdolgozás minősége és a késleltetett, segítség nélküli teljesítmény, nem a megjegyzések folyékonysága.

**2.** Osztályozza a saját megjegyzéseit nyelvi szintű javításokra és ítéletszintű döntésekre. Csak az első kategória automatizálási jelölt.

**3.** Szakaszolja a forrásokat. Először önértékelés, másodszor társ-visszajelzés, harmadszor MI-kritika. Két egymás mellé tett forrás passzív átvételt termel.

**4.** Adja oda a modellnek a rubrikáját, és készítse lépésenkénti érvelésre. Egy puszta utasítás általános kimenetet termel.

**5.** A végső üzenet, a hangnem és minden, ami rekorddá válik, maradjon embernél.

**6.** Tervezze be a törlésre és a kalibrálásra fordított órákat, és hasonlítsa össze a felszabadított órákkal.

## Döntse el, mi számít sikernek, mielőtt bármit pilotol

A csábító mutató az, mit ír a modell. Ez az a mutató is, amely félrevezet.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia és mtsai (2026)]] 70 perzsa nyelven érvelő esszét író diákot randomizáltak három csoportba. A gondolatmenet-promptolás szignifikánsan magasabbra értékelt visszajelzést termelt (M = 12,90), mint a nullalövéses promptolás (M = 11,25, p = 0,01) és mint egy tapasztalt emberi tanár (M = 11,20, p = 0,008). A gondolatmenet-csoport nem dolgozta át az esszéit szignifikánsan jobban, mint a tanári visszajelzés csoportja, amely hasonló nyereséget ért el. Jobb megjegyzések, ugyanazok az átdolgozások. Ha a siker kritériuma a megjegyzés minősége, az a vizsgálat nyereségnek olvasható. Ha az, mi változott az esszében, nem.

Két másik jelzés hízelgő egy rosszul menő pilotnak, ezért rögzítse őket előre. Az egyik a diákok elégedettsége. Az egyetemi szintű Deakin-pilotban, amelyről [[tubino-adachi-ai-automated-feedback-literacy|Tubino és Adachi (2022)]] beszámolt, a pozitív átlagos értékelések együtt jártak a diákok által jelzett hibákkal, tehát egy mosolygós felmérés nem pontossági bizonyíték. A másik a használat. A Deakin-eszköz opcionális volt, és a használat átlagosan az egyetemi hallgatók mintegy 13%-át és a mesterképzéses hallgatók 12%-át érte el, annak ellenére, hogy csaknem 4 000 diák fért hozzá. A proaktív, jól teljesítő diákok többen használták. Ennyit hoz egy eszköz elérhetővé tétele.

Az a kimeneti mérőszám, amely megállja a helyét, az átdolgozás minősége és a késleltetett, MI nélküli teljesítmény. A többszöri, ugyanaznapi újrabeadás használható nyoma annak, hogy egy diák egyáltalán elköteleződött-e. Nem bizonyítéka annak, hogy bármit megtanult.

## Osztályozza a megjegyzéseit, mielőtt automatizálja őket

Vegye a legutóbbi megjegyzéskészletét, és ossza ketté: mondatjavításokra és a gondolkodásról szóló döntésekre. A felosztás megmondja, mit automatizáljon, és szűkebb, mint amit a szállítók sugallnak.

A Deakin-pilot 2021-ben futott a FeedbackFruits MI-alapú automatizált visszajelzés eszközével, 29 tanegységben és csaknem 4 000 diák bevonásával. Mikroszintű szövegjellemzőkön működik: mondathossz, központozás, nyelvtan, szövegszerkezet. Ez a korrektúra szakaszát támogatja, ahol az oktató állítja be a paramétereket, a diák önállóan használja az eszközt, és a visszajelzés időben érkezik ahhoz, hogy cselekvőképes legyen. A munkamegosztás az, ami skálázódik, nem a modell.

Az ítéletszintű megjegyzések azok, ahol a hibaüzemmódok élnek. [[learner-centered-feedback-ai|Aldino és mtsai (2026)]] oktatói oldali problémákat gyűjtöttek 21 felsőoktatási tanártól: következetlen hangnem (n = 7), lehetséges tévinformáció (n = 5) és bizalmi problémák (n = 5). Az átdolgozási erőfeszítésük a túlzott dicséret és az általános javaslatok törlésére ment, nem tartalom hozzáadására. Az a lista a bírálói munkája, és oda mennek az órák.

## Szakaszolja a forrásokat, ne halmozza őket

A legerősebb tervezési bizonyíték egy többhelyszínes, klaszter-randomizált, longitudinális terepkísérletből származik: 1 176 elsőéves egyetemi hallgató 48 szekcióban, 4 egyetemen és 3 [[stem-education|természettudományi]] területen, szekció szinten randomizálva csak-társ, közvetlen generatív MI, reflektív generatív MI és hibrid feltételekbe ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

A reflektív feltétel önértékelést követelt a MI-kritika előtt. A hibrid önértékelést, majd társ-visszajelzést, majd generatív MI-kritikát futtatott. A hibrid termelte a legmagasabb érvelésminőség-nyereséget és a legvilágosabb előnyt a fogalmi tanulásban. A reflektív és a hibrid egyaránt erősebb visszajelzés-átvételt és több [[self-regulated-learning|önirányított tanulást]] termelt, mint a közvetlen generatív MI, és mindkettő felülmúlta azt a késleltetett, MI nélküli transzferben. A közvetlen generatív MI emelte az azonnali érvelésminőséget a társ-visszajelzés fölé, ez az előnye, és ezt gyengébb transzferrel tette.

A mechanizmus megmagyarázza, miért fontosabb a sorrend, mint az eszköz. A közvetlen kritika passzív átvételre hív: a diák elolvas egy ítéletet és alkalmazza. A reflektív és a hibrid tervezés arra kényszeríti a diákot, hogy értelmezze a megjegyzést, összevesse a kritériumokkal, megítélje a relevanciáját, majd átdolgozzon. Az oktatási érték kevésbé a MI-hozzáféréstől függ, mint attól, hogy a visszajelzési környezet megőrzi-e a [[agency|tanulói ügynökséget]] és az [[evaluative-judgment|értékelő ítéletet]] az átdolgozás során.

A társ-visszajelzés megérdemli a maga helyét a sorrendben. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen és Yan (2026)]] két párhuzamos angol osztályt (N = 118 elsőéves egyetemi hallgató Kínában; generatív MI n = 56, társak n = 62) futtatott három önértékelési cikluson keresztül egy félév alatt. A generatív MI állványozása kissé, de szignifikánsan javította a visszajelzés-írástudást az emberi társértékeléshez képest (ANCOVA p = 0,049, ηp² = 0,03). A generatív MI-s diákok iteratívan finomították a promptokat, és ellenőrizték vagy megkérdőjelezték a pontatlan kimenetet. A társas csoport diákjai társas kényelem szerint választottak forrásokat, és értékelő ítéletüket a barátsági torzítás elferdítette. A társértékelés megőrzött egy külön értéket a közönségtudatosságban, ezért javasolják a szerzők a több szakaszos, névtelen társ-visszajelzéses tervezéseket a helyettesítés helyett.

Gu és mtsai előnye kicsi volt, és valósnak, de önmagában nem átalakítónak olvassák. A tanári állványozás, a prompt-irányelvek és a munkalapok végezték a támogató munkát.

## Adjon a modellnek rubrikát, aztán mutassa meg a lépéseit

A rubrikára hivatkozó generálás az automatizálható rész.

Farrokhnia és mtsai minőségi nyeresége egy gondolatmenet-promptból jött, amely végigvezette a modellt egy lépésenkénti értékelésen egy érvelési rubrika ellenében, nem egy puszta visszajelzési utasításból. Gu és mtsai a generatív MI csoportjuknak ChatGPT-4o-t adtak előre betanított rubrikákkal és prompt-irányelvekkel, ez tette a kimenetet a megadott kritériumok ellenében ellenőrizhetővé. Mindkét esetben a prompt az, ahol a kritériumai bekerülnek a rendszerbe, és az érvelési nyom az, ami láttatja, hogy a modell alkalmazta-e őket.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson és Yan (2025)]] a prompt minőségét teszi az egész folyamat sarkává. A homályos promptok általános, használhatatlan kimenetet adnak, és a generált megjegyzések lehetnek hallucináltak, elfogultak vagy átfedők, ami az értékelő ítéletet visszatolja az olvasóra. A kalibrálás még élesebb. Farrokhnia és mtsai esetében a generatív MI visszajelzés-minősége szignifikánsan összefüggött a diák kezdeti vázlatának erősségével, a tanári visszajelzés minősége nem. A tanár következetesebben kalibrált. A mennyiség skálázódik. A kalibrálás nem.

## Tartsa embernél az utolsó szót és a rekordot

[[becerra-aicofe-feedback-2026|Becerra, Palma és Cobos (2026)]] az AICoFE-ot írják le, amely három függetlenül finomhangolt modellt (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) futtat rubrikapontszámokon és kvalitatív megfigyeléseken, hogy független vázlatmegjegyzéseket állítson elő. Az oktató ezután a végső üzenetet mondatok vagy bekezdések kiválasztásával állítja össze, egy jelmagyarázat mutatja, melyik modell mit adott hozzá. A modell vázol. Az oktató kézbesít, és a kézbesített anyagot egy személy írja alá, aki elolvasta a vázlatot.

Aldino és mtsai ugyanezt a segíts, aztán ellenőrizz mintát találják a mindennapi gyakorlatban. A gépi tanulási komponens leggyakrabban a „Megfelel a tanulási célnak” hiányát jelezte (21 tanárból 20 kihagyta; 16 elfogadta a jelzést) és a „Diák-tanár kapcsolat” hiányát (14 kihagyta; 12 elfogadta). A tanárok szakmai ítélettel döntöttek minden javaslatról, ez a lényege annak, hogy bevonjuk őket a folyamatba.

Aldino és mtsai 21 tanára közül tizenketten tettek további mondatszintű módosításokat, és a domináns minta a hangnem kalibrálása volt: a dicséret lefelé szerkesztése (f = 11), javaslatok eltávolítása (f = 9), bátorítás eltávolítása (f = 8). Az átdolgozások a kapcsolati dimenzióban csoportosultak, különösen a diák-tanár kapcsolatban (f = 24). Az eredetiséget és a szakmai hangot védték, és az a munka nem automatizálódik.

## Tanítsa meg a diákokat elolvasni a megjegyzést

A visszajelzés-írástudás előfeltétel, és egyenetlenül oszlik el.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths és Lodge (2026)]] 32 pszichológia szakos diákkal egy képernyőn rögzített 25 perces esszéfeladatot végeztetett korlátlan ChatGPT-hozzáféréssel, majd a felvételt visszanézték egy videóval stimulált interjúban. A visszajelzés-írástudás volt az egyetlen szignifikáns pozitív előrejelzője az esszéjegynek (β = 0,46, p = 0,017). A generatív MI használatának gyakorisága, a [[trust|forrás megbízhatósága]] és az [[prior-knowledge|előzetes tudás]] nem jelezte előre a teljesítményt, amit [[feedback-futures-genai|Zhan, Wood, Carless és Yan (2026)]] a tematikus lapszám szerkesztői jegyzetében szintén megállapítanak. A diákok kevesebb mint egyharmada hasonlította össze a MI kimenetét egy másik internetes forrással. A felük szándékos MI-kerülést fogalmazott meg a [[academic-integrity|tudományos integritás]] miatt, vagy mert saját szavaival akarta az esszét. A legtöbben feladatszintű visszajelzést kértek, ami gyengén vihető át más feladatokra.

A szélsőségek láthatók abban az IELTS-írópárban, amelyet Zhan és mtsai leírnak. Egy alacsony írástudású diák homályos promptot írt, általános visszajelzést kapott, megbízott benne vagy túlmásolta, és felszínesen köteleződött el. Egy magas írástudású diák kritériumokra hivatkozó promptot írt, utánanézett, keresztezett forrásokat és figyelte az átdolgozásokat. A különbség az oktatás és a szokás volt, nem az eszközhozzáférés.

Mondja meg a diákoknak egyenesen, hogy a modellmegjegyzések lehetnek hallucináltak, elfogultak vagy átfedők, és az átdolgozás a diáké. Keretezze a kimenetet megítélendő véleménytervezetként, nem másolandó válaszként. Aztán kérje az összehasonlítást, mert a diákok kevesebb mint egyharmada teszi meg magától.

## Amit az oktatók ebben elrontanak

Több megjegyzés több visszajelzést jelent. A megjegyzéseket olcsó előállítani és drága befogadni, és a szűk keresztmetszet a hurok diák oldalán van. Farrokhnia és mtsai magasabbra értékelt MI-megjegyzései nem termeltek több átdolgozást, mint a tanári megjegyzések.

Egy jobb modell megoldja az általános kimenetet. A Deakin-eszköz hibái hatóköri hibák voltak: mondatszintű jellemzők, egy szűk korrektúrasáv. Zhan és mtsai a megoldást a promptban, a rubrikában vagy az emberben helyezik el, nem egy nagyobb modellben. Az IELTS-írópár a demonstráció: ugyanaz az eszköz, más szokások, más eredmények.

Az eszköz elérhetővé tétele a beavatkozás. A használat az egyetemi hallgatók mintegy 13%-ánál és a mesterképzéses hallgatók 12%-ánál futott, amikor az eszköz opcionális volt. A tervezési kérdés többi része az, mi történik a másik 87%-nál.

Az időmegtakarítás automatikus. Arra a kérdésre, mit adott nekik a MI-visszajelző eszköz, a 21 tanár csak ritkán nevezte meg az időmegtakarítást (n = 2). Sokkal gyakrabban nevezték meg a reflexiót (n = 14), a javult nyelvet és szerkezetet (n = 11) és a hiányzó összetevők azonosítását (n = 10). A szerkesztés (f = 32) és az eltávolítás (f = 27) uralta az átdolgozási munkájukat, a hozzáadás ritka volt (f = 8). Ami megjelenik, az egy vázlat és egy diagnosztikai prompt. Ami szintén megjelenik, az a bírálat, a kalibrálás és az ellenőrzés munkája. [[ai-save-instructor-time|A munkaterhelés kérdése]] az, amit a leggyakrabban ígérnek el, és a generatív MI újraelosztja, nem megszünteti a tanári munkát.

Az elégedettségi értékelések megmondják, hogy a megjegyzések pontosak. A Deakin-pilotban a pozitív átlagos értékelések együtt jártak a diákok által jelzett hibákkal. Mintavételezze a kimenetet a saját olvasatához ugyanazokon a vázlatokon, és naplózza, hol volt a modell általános, téves vagy hízelgő.

## Mi jön vissza Önre

**„A MI-visszajelzés nem személyes.”** Gyakran igaz, és ez az ok, amiért embernél kell tartani az utolsó szót. Az AICoFE azért létezik, mert az általános modellszöveg nem az, amit egy diáknak kapnia kell: az oktató választ, szerkeszt és ír alá. Aldino és mtsai 21 tanára ugyanezért írta át a hangnemet. A személyre szabás ebben a tervezésben az Ön munkája, a modell az előkészítő munkát végzi.

**„A diákjaim úgysem olvassák el a visszajelzést.”** Kevesebbet olvasnak, mint reméljük, és a bizonyíték szerint a megoldás a tervezés, nem a mennyiség. Az átvétel a Deakin-pilotban mintegy 13% és 12% volt. Farrokhnia és mtsai magasabbra értékelt megjegyzései nem termeltek több átdolgozást. Amit a mutatót elmozdította, az az elköteleződést kikényszerítő sorrend volt, önértékelés, majd társ-visszajelzés, majd MI-kritika, valamint három átdolgozási ciklus egy félév alatt, amely mérhető visszajelzés-írástudás-különbségeket termelt.

**„Ez nem az, amiért a diákok fizetnek.”** Akkor tartsa távol a MI-t attól, hogy az egyetlen hang legyen, amit Öntől hallanak. A védhető változat több visszajelzési pillanatot ad a diákoknak, miközben Ön az ítéletigényes részekre fordítja az óráit: az utolsó szóra, a kalibrálásra, a tekintélyét hordozó megjegyzésekre. Amit a diákok a gondatlan bevezetés mellett elveszítenek, az a kritériumok, a megjegyzések és az eredmény közötti koherencia. Adja meg a komplementaritást sorrenddel, összehasonlítással, szerkesztéssel és kormányzással, és a kifogás elveszíti az erejét. Hagyjon két forrást egymás mellett, és nem.

**„Nincs időm mindent átnézni, amit a modell ír.”** Akkor ne nézzen át mindent. Automatizálja azt a sávot, ahol a hibákat olcsó elkapni, a mondatszintű nyelvi munkát, és mintavételezze az ítéletszintű kimenetet olyan vázlatok ellenében, amelyeket már osztályozott. Az Aldino-számok megmondják, mit keressen: hangnem, tévinformáció, túlzott dicséret, átfedés.

## Mit tegyen ezen a héten

**1.** Ossza fel a saját legutóbbi megjegyzéskészletét nyelvi szintű javításokra és ítéletszintű döntésekre, és számolja meg mindkét kupacot.

**2.** Írja meg a rubrikára hivatkozó, lépésenkénti promptot, amelyet egy modellnek adna, és tesztelje három olyan vázlaton, amelyet már osztályozott.

**3.** Mintavételezze a kimenetet a saját megjegyzései ellenében, és naplózza, hol volt a modell általános, téves vagy hízelgő.

**4.** Szakaszoljon egy feladatot önértékelésre, majd társ-visszajelzésre, majd MI-kritikára, és mondja meg a diákoknak, hogy a MI véleménytervezet, amelyet el kell várni, hogy megkérdőjelezzenek.

**5.** Kérjen egy összehasonlítást egy második forrással vagy a kritériumokkal, mert a diákok kevesebb mint egyharmada teszi ezt magától.

**6.** Naplózza, a végső visszajelzés mekkora része jött a modelltől és mennyit változtatott. Az AICoFE kurátorkövetése a minta ehhez a rekordhoz.

**7.** Figyelje a szakértő és kezdő közötti szétválást. Az öt évnél több tapasztalattal rendelkező oktatók több problémát jelentettek az eszköz kimenetével, mint a kevésbé tapasztalt kollégák, akik értékelték az állványozást. Ha tapasztalt kollégái több hibát látnak, mint Ön, az az Ön kalibrálásáról szóló információ.

## Hová tovább

[[feedback|A visszajelzés]] az egész rendszer gyűjtőfogalma: nyújtás, hurok, átvétel és értékelési kontextus. Az [[ai-feedback-quality|MI-visszajelzés minősége]] fedi, mitől pontos, hasznos, időszerű és pedagógiailag megalapozott egy generált megjegyzés, és ez az oldal a gyakorlati közép, arról, mely kombinációk termelnek jobb visszajelzést nagy léptékben.

Azok a kérdések, hogy mit jelenthet egy jegy, ha a MI érintett, beleértve a konstruktumhelyettesítést, a hitelesített folyamatbizonyítékot és az integritási szabályokat, a [[redesign-assessment-ai-era|az értékelés újratervezése a MI korszakában]] és az [[assessment-validity|értékelési érvényesség]] oldalakhoz tartoznak, nem ide. Az írásoktatás speciális esetéhez lásd a [[writing-instruction-ai-best-practices|az írásoktatás bevált gyakorlatai a MI kontextusában]] oldalt.
