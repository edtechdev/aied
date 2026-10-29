---
title: "Melyek a hatékony oktatási MI-szoftverek tervezésének bevált gyakorlatai és tippjei?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Csapata működő prototípus-tutorral rendelkezik, és három hét múlva iskolakerületi bemutató következik. Vagy egy partnersikola kérte, hogy tegyen chatfelületet a kurzusolvasójára, és valaki azt mondja, ez két hét munkája. Vagy egy közbeszerzési ellenőr visszaküldte a biztonsági fejezetet egyetlen mondattal: mit is teszteltek pontosan?

A válasz szűkebb annál, mint amit a legtöbb termékspecifikáció feltételez. Az oktatási MI korlátozott szakértőként működik emberi felügyelet mellett: képességei egy meghatározott tartományra korlátozódnak, a modell memóriája helyett oktató által jóváhagyott tartalomra támaszkodik, együtt tervezik meg azokkal a tanárokkal és tanulókkal, akik használják, és tartós, többfordulós interakcióban értékelik. Az utolsó kitétel az, amelyet a legtöbb csapat kihagy. A pedagógiai ártalom az alábbi benchmarkban tesztelt minden modellben megjelent, a hibaarány pedig 17,7%-ról 77,8%-ra emelkedett az egyfordulós interakcióktól a többfordulós beszélgetésekig.

## A rövid változat

**1.** Írja le, mit dönt el a rendszer, és mit dönt el a tanár. Ez a határvonal lesz az architektúra.

**2.** Többfordulós, szakterület-tudatos interakciót értékeljen valódi tananyagon, ne egyetlen promptot egy általános biztonsági rubrika ellen.

**3.** A válaszokat jóváhagyott tartalomra alapozza, és az ellenőrző komponenst tartsa külön a beszélgetéstől.

**4.** Tekintsen minden hallgatói beadást nem megbízható bemenetnek, akkor is, amikor a rendszer éppen értékeli.

**5.** A kísérleti kaput, az eszkalációs útvonalat és a tanári felülbírálatot a pilot előtt építse meg.

**6.** Az akadálymentességet és a csoportok szerinti bontású méltányossági tesztelést a specifikációba tegye, ne a backlogba.

## Döntse el, mi lehet a rendszer

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert és munkatársai részvételi tervezési tanulmánya]] hat középiskolai tanárral korrigálja azt a feltevést, hogy az oktatási MI-nek autonóm ügynökként kell működnie. Amikor arra kérték őket, hogy papíron prototipizáljanak osztálytermi [[conversational-ai|chatbotokat]], minden tanár egy korlátozott szakértőt írt le, két dimenzió mentén. A hatásköri határok a tanároknál tartották az irányítást, mert a tanulók tanulásáért és biztonságáért való felelősség nem delegálható. A szakértelem határai azt tükrözték, hogy a MI-nek nincs kontextuális tudása az egyes tanulókról, az osztálytermi dinamikáról és az intézményi normákról.

A felvázolt architektúrának négy komponense volt (tartalomkorlátozás, tartalombemutatás, tanulóhoz való alkalmazkodás, [[teacher-role|tanári]] felügyelet), három védőrétegen: a hatókört szűkítő tartományhatárok, a biztonságos [[personalized-learning|személyre szabást]] lehetővé tevő tartalomszűrés, valamint a tanári felülbírálat a kétértelmű esetekben. A delegálás szelektív volt. Gagné kilenc tanítási eseményére leképezve a tanárok szívesen fogadták a MI-t a tartalom bemutatásában, gyakorlófeladatok adásában és [[formative-assessment|formatív]] [[feedback|visszajelzést]] nyújtásban, és elutasították a célok meghatározásában vagy a [[summative-assessment|szummatív]] [[assessment|értékelés]] lebonyolításában.

Két alapbeállítás ugyanabba a specifikációba tartozik: igazítsa a rendszert kifejezett tanulási célokhoz, és hangolja kedves, de helyes válaszokra, ne arra, hogy egyetértsen azzal, aki éppen ír. Az a tutor, amely hízeleg egy hibás válasznak, megtanította a tanulónak, hogy a válasz helyes volt.

Egy részlet most olcsó, később drága: ezek a tanárok viselkedési átláthatóságot, látható korlátokat és a bizonytalanságra utaló jelzéseket kértek, nem a modell következtetésének magyarázatát. Mind a hatan teljes beszélgetésnaplózást, valós idejű riasztásokat és felülbírálati lehetőséget kértek, szakmai felelősségként megfogalmazva, nem bizalmatlanságként. Erre már az első sprintben tervezzen, mert a naplózást utólag beépíteni egy láthatatlannak tervezett tutorba teljes újraírás.

## Beszélgetésben tesztelje, ne egyetlen fordulóban

A [[pedagogical-safety|pedagógiai biztonság]] szintézise amellett érvel, hogy a hagyományos biztonsági tesztelés nem elegendő az oktatásban. Egy rendszer elkerülheti a mérgező tartalmat, és mégis ártalmat okozhat azzal, hogy túl sokat elárul a válaszokból, megerősíti a [[misconceptions|tévhiteket]], elnyomja a reflexiót, függőséget alakít ki, vagy eltávolodik a tanítási céloktól.

A [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[benchmark|mérőteszt]] számokat is ad ehhez. A tesztelt összes modellben, a 3,8 milliárd paraméterű nyílt súlyú modellektől a GPT-5-miniig, a [[pedagogy|pedagógiai]] ártalom általános volt, a méret nem javította megbízhatóan a biztonságot, és a hibaarányok 17,7%-ról 77,8%-ra nőttek az egyfordulós interakcióktól a többfordulós beszélgetésekig. A szabálysértési minták tantárgyanként változtak. A 11 dimenziós, 48 al-kockázatot tartalmazó taxonómia lefedi a kognitív, episztemikus, [[metacognition|metakognitív]], [[motivation|motivációs]]-affektív, fejlődési és méltányossági, valamint tanítási illeszkedési kategóriákat, és tervezési ellenőrzőlistaként éppúgy használható, mint tesztcsomagként.

Az eszkalációs arányt a teszttervéről szóló állításként olvassa. Egy tutor, amely ezer egyfordulós próbán átmegy, öt beszélgetésből négyet elbukhat, amint a hallgató ellenkezik vagy harmadszor is kérdez. A többfordulós tesztkeretet a bemutató előtt építse meg.

## Alapozza a tartalmat, és válassza külön az ellenőrzőt

Az alapozás architekturális döntés. [[eduguard-safe-rag-llm-tutor|EduGuard]], egy biztonságos, [[rag|visszakereséssel kiegészített]] tutor a [[cs-education|bevezető programozás]] oktatásához, az oktató által jóváhagyott kurzustartalom visszakeresését párosítja egy architekturálisan elkülönített állításellenőrzővel, kifejezett [[cognitive-offloading|túlzott támaszkodás]]-kontrollal, valamint egy 600 lekérdezésből álló, oktatók által írt mérőteszttel, amely kiterjed a tévhitekre, a hibakeresésre, a kevert nyelvű lekérdezésekre és az ellenséges, közvetlen választ kicsikaró promptokra. Felülmúlta a GPT-4o-mini és a Llama [[socratic-method|szókratészi]] tutor alapvonalakat.

Az átvihető rész az elkülönítés: az ellenőrző komponensek nem beszélgetnek, és a mérőteszt olyan promptokat is tartalmaz, amelyeket válaszok kicsikarására írtak, nem udvariasság ellenőrzésére. A [[hallucination-risk|hallucináció kockázata]] azt a hibamódot tárgyalja, amelyet a jóváhagyott visszakeresés hivatott korlátozni.

## Tekintse a hallgatói munkát nem megbízható bemenetnek

A fenyegetésmodell, amelyet a legtöbb tervezési tanács kihagy, magában az értékelt termékben van. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026) ellenséges, vörös csapatos értékelése]] azt vizsgálta, hogy a hallgatók képesek-e prompt-injektálással manipulálni egy LLM-alapú értékelőt a beadásaikban, és a manipuláció működött: az értékelőnek utasítást adó, azt újrakeretező vagy szerepjátékba vonó injekciók megváltoztatták a pontszámot anélkül, hogy a munka változott volna.

Tartsa a rubrikát és az utasításokat a hallgató által ellenőrzött kontextusablakon kívül, távolítsa el vagy jelölje meg az utasításszerű tartalmat, soha ne engedje, hogy egy beadás saját maga határozza meg a kritériumokat, és minden következményekkel járó osztályzatnál maradjon emberi döntés. Az az értékelő, amely az általa megítélt szövegből olvassa ki az utasításait, a jelöltnek adta át a rubrikát.

## Állványozza a munkát, ne végezze el helyette

Egy rendszer, amely válaszol, véget vet a gondolkodásnak, amelynek támogatására megvásárolták. Két elem tartozik a jegybe: egy kísérleti kapu, hogy semmilyen kimenet ne jelenjen meg, mielőtt a hallgató valamit elköteleződve le nem ír, és egy [[human-in-the-loop-ai|emberi eszkalációs útvonal]] megnevezett céllal, ami egy osztálytermi terméknél a tanárt jelenti, olyan formában, amelyre a tanár cselekedni tud. Az [[scaffolding|állványozás]] és a [[socratic-method|szókratészi]] minta a termékszintű változata annak, amit egy óraterv kézzel végez; a [[developing-ai-tutor|tutorfejlesztés]] a diagnózist, a célzáslétrát és a visszajelzést részletesen tárgyalja.

## Tegye az akadálymentességet és a méltányosságot a specifikációba

Az akadálymentességi követelmények elég konkrétak egy sprinthez: billentyűzetes kezelhetőség, képernyőolvasó-kompatibilitás, feliratok és átiratok, megfelelő kontraszt, használható szöveges alternatívák, valamint a segítő [[ai-technologies|technológiákkal]] való kompatibilitás. A MI által generált akadálymentességi funkciókat még minőségellenőrizni kell. Lásd: [[accessibility|akadálymentesség]].

A méltányossági tesztelésnek a teljes folyamatot vizsgálnia kell, és a viselkedést nyelv, fogyatékosság, kultúra és más releváns tanulói jellemzők szerint bontva kell kimutatnia, nem pedig az összesített pontosságra hagyatkoznia. Az a rendszer, amely átlagban jól teljesít és egy csoportnál gyengén, annak a csoportnak szállította ki a hibát. Lásd: [[bias-mitigation|torzításmérséklés]] és [[equity-in-ai-education|méltányosság]].

## Azokkal tervezzen, akik használni fogják

[[ko-hughes-vsd-student-centered-its-2026|Ko és Hughes]] értékérzékeny tervezést alkalmazott egy [[intelligent-tutoring|intelligens tutorrendszerre]] közösségi főiskolai hallgatókkal és oktatókkal, egy olyan csoporttal, amelyet történelmileg kihagytak a tanulási platformok tervezéséből. Kezelendő, nem megoldandó értékfeszültségeket találtak: átláthatóság az értelmezhetőséggel szemben, [[privacy|adatvédelem]] a tanítási betekintéssel szemben, és [[agency|hallgatói cselekvőképesség]] a rendszer vezérelte [[scaffolding|állványozással]] szemben. A hallgatók a nyers modell-átláthatóságnál jobban kedvelték az együttműködő, emberies magyarázatokat, a prototípus pedig 16 értékhez igazodó funkciót kódolt a [[explainable-ai|magyarázható MI]], az ember a folyamatban elv és az adatvédelmi kontrollok terén.

[[wang-teacher-ai-co-design-review-2026|Wang, Liu és Islam áttekintése]] 28 empirikus tanulmányról szókincset ad az eszközválasztáshoz. A [[generative-ai|generatív MI]] főként óravázlat-készítésre, promptgenerálásra és kreatív ötletelésre használatos, a MI sokkal gyakrabban asszisztens vagy tartalomgeneráló, mint társtervező, és négy lehetőség, a hatékonyság, a reagálókészség, a [[creativity|kreativitás]] és a [[equity-in-ai-education|méltányosság]] segíthet a tanároknak eldönteni, melyik eszköz melyik tervezési problémához illik.

Mindkét tanulmány a tervezést [[human-in-the-loop-ai|ember a folyamatban]] elvű [[human-ai-collaboration|együttműködésnek]] és [[usability-research|használhatósági kutatásnak]] tekinti, nem kapcsolatépítésnek. Mindkettő azt találta, hogy az érintettek olyan követelményeket hoztak felszínre, amelyeket egyetlen pontossági mérőteszt sem rögzítene, és ez a gyakorlati érv amellett, hogy fizessenek ezekért a foglalkozásokért: ezek azok a követelmények, amelyekkel egyébként a pilotban szembesülne.

## Amiben a tervezőcsapatok tévednek

A biztonság tartalommoderációt jelent. Az ártalom egy oktatási termékben gyakran segítőkész válaszként érkezik a rossz pillanatban. A SafeTutors a tesztelt minden modellben talált pedagógiai ártalmat, és a hibaarány egy beszélgetés során 77,8%-ra emelkedett, ami nem olyan kategória, amelyre a tartalomszűrők készültek.

A nagyobb modell majd megoldja a pedagógiát. A méret nem javította megbízhatóan a biztonságot a 3,8 milliárd paraméteres nyílt súlyú modellektől a GPT-5-miniig terjedő tartományban.

Egy jó visszakeresési index azt jelenti, hogy a tartalom rendben van. Az EduGuard a visszakeresést külön ellenőrzővel párosítja, és ellenséges, közvetlen választ kicsikaró promptokat is tesztel, mert az alapozott visszakeresés még mindig hagy utat a túlzott felfedés felé.

A tanár a tartalék megoldás. A tervezési tanulmány mind a hat tanára naplózást, riasztásokat és felülbírálatot kért a szakmai felelősség feltételeként. Egy támogatási jegy nem felülbírálat.

Az akadálymentesség egy későbbi jegy. Vagy benne van a specifikációban, vagy teljes újraírás lesz belőle, a generált helyettesítő szövegek és feliratok pedig továbbra is emberi ellenőrzést igényelnek.

## Mi jön vissza Önre

**„Nem tudunk értékelési keretrendszert építeni a bevezetés előtt.”** Építsen egy kicsit. Az első állítás, amire szüksége van, az, ami öt fordulón keresztül történik. Vegyen 40 valódi tananyagkérdést, futtassa mindegyiket ötfordulós beszélgetésként egy olyan hallgatóval, aki ellenáll a célzásnak, és pontozza a 11 dimenzió ellen. Ez védhető biztonsági fejezet, és belefér egy sprintbe.

**„A tanárok promptokat akarnak szerkeszteni, és nem tudjuk garantálni, mit írnak.”** Akkor szűkítse a felületet, amit szerkesztenek. A rendszerprompt az Öné marad; a célok, a jóváhagyott tartalom, a célzáslétra és az eszkalációs kapcsolattartó az övék. A korlátozott szakértő architektúra azért létezik, hogy a konfiguráció olyan hatókörön belül maradjon, amelyet tesztelni tud.

**„A mérőteszt-pontszámaink magasak.”** Az egyfordulós válaszok pontossága nem jósolja meg a beszélgetés során mutatott viselkedést, és az a mérőteszt, amely az utóbbit méri, a tesztelt minden modellnél 77,8%-os hibát talált többfordulós helyzetekben. Mindkét számot közölje, különben az elsőt a másodikként fogják olvasni.

**„A teljes naplózás adatvédelmi probléma.”** Az is, ami célhoz kötöttséget kíván, nem a naplózás elhagyását. Naplózza azt, amire a tanárnak a cselekvéshez szüksége van, minimalizálja a többit, korlátozza a hozzáférést, és mondja meg a termékben, mit és mennyi ideig tartanak meg.

## Mit tegyen ezen a héten

**1.** Írja le a hatásköri határt egy oldalon: mit dönt el a rendszer, mit dönt el a tanár, és melyiket védené meg egy közbeszerzési ellenőrzésen.

**2.** Fordítsa a 11 dimenziós taxonómiát teszttervvé, és futtassa többfordulósan 40 valódi kérdésen egyetlen kurzusból.

**3.** A tervezési dokumentumban válassza külön az ellenőrzőt a generátortól, akkor is, ha az első build egyetlen folyamatban futtatja őket.

**4.** Tegye a sorba a kísérleti kaput, az eszkaláció célpontját és a tanári felülbírálatot, nevekkel együtt.

**5.** Tegye az akadálymentességi listát és egy csoportok szerinti bontási követelményt a mostani kiadás elfogadási kritériumai közé.

## Hová tovább

A [[developing-ai-tutor|tutorfejlesztés]] a megépítést tárgyalja, a [[designing-ai-into-learning|MI beépítése a tanulásba]] pedig a körülötte lévő pedagógiai alapbeállításokat. Hogy működik-e a dolog bevezetés után, arról lásd: [[checking-whether-educational-ai-works|annak ellenőrzése, hogy az oktatási MI működik-e]]; a tesztterv mögötti biztonsági fogalmakról: [[pedagogical-safety|pedagógiai biztonság]] és [[hallucination-risk|hallucináció kockázata]]; a közbeszerzési kontextusról: [[legal-issues-and-risks|jogi kérdések és kockázatok]].
