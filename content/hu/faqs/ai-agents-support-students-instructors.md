---
title: "Hogyan támogathatják a MI-ágensek a hallgatókat és az oktatókat?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/ai-agents-support-students-instructors
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

Egy szállítói bemutató negyven percig tart. Az ágens elolvassa a tantárgyi tematikát, megírja a jövő heti kvízt, megjelöl három hallgatót, akik nem nyitották meg az olvasmányt, és felajánlja, hogy ír nekik. A rektorhelyettese a hónap végére licencdöntést akar.

Egy [[agentic-ai|ágens]] tervez, eszközöket hív, kontextust tart, részfeladatokra bontja a munkát, és fordulók között alkalmazkodik, ami több, mint amit egy [[conversational-ai|csevegőbot]] tesz. A hallgatói és oktatói szerepek, amelyeket ez megnyit, valósak. A bizonyíték nem mutatja, hogy a nagyobb autonómia több tanulást eredményez: az itteni egyetlen közvetlen összehasonlításban az ágens és a csevegőbot döntetlent ért el. Tegye az autonómiát oda, ahol egy ember ellenőrzi a kimenetet, tartsa a tervezést a tanulónál, és a tanítás minőségét a saját rubrikájával pontozza.

## A rövid változat

**1.** Nevezze meg a feladatot a termék előtt.

**2.** Az oktatói oldalon kezdjen, ahol a tanár már úgyis átnézi a munkát.

**3.** A hozzáadott autonómiát kezelje költségként, amíg a bizonyíték mást nem mond.

**4.** A tervezés és az ítélkezés maradjon a tanulónál, mert ezeket hivatott a feladat kiépíteni.

**5.** Pontozza az ágenst a saját rubrikájával, és ütemezzen támogatás nélküli ellenőrzést a pilot vége előtt.

## Válassza ki a feladatot, mielőtt az ágenst választja

[[agentic-workflows-education|Ágens munkafolyamatok az oktatásban]] négy visszatérő képességet nevez meg: reflexió, tervezés, eszközhasználat és többágenses együttműködés. Mindegyik költséget ad a lehetőség mellé, az [[explainable-ai|értelmezhetőségben]], a koordinációban, a [[trust-calibration|bizalomban]], a késleltetésben és a felügyeletben.

A hallgatói oldali szerepek az [[adaptive-learning|adaptív]] tutorálástól és tanulástervezéstől a [[formative-assessment|formatív]] visszajelzésen, az irányított [[problem-solving|problémamegoldáson]] és gyakorlatgeneráláson át az előfeltétel-ajánlásokig és a reflektív [[metacognition|metakognitív]] [[prompt-engineering|promptolásig]] terjednek. Az oktatói oldali szerepek lefedik az anyagfejlesztést, a [[automated-question-generation|kérdésgenerálást]] és érvényesítést, a visszajelzés triázsát, a kurzus [[learning-analytics|analitikáját]], a tanítási tervezést, az erőforrás-visszakeresést és a specializált alágensek orchestrálását.

Ezek közül kettő korábban biztonságosabb, mert mindkettő olyan artefaktumot állít elő, amelyet egy ember olvas el a hallgatók előtt: egy érvényesítővel párosított kérdésgenerátor és egy vázlat, amelyet a tanár szerkeszt.

## Ott kezdje, ahol egy ember már ellenőrzi a munkát

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|A Tutor CoPilot]], egy ember-MI rendszer első [[rct|randomizált kontrollált vizsgálata]] élő tutorálásban, valós idejű útmutatást adott kezdő tutoroknak tapasztalt tutorok következtetéseiből merítve, 900 tutort és megközelítőleg 1 800 hallgatót átfogva. A hozzáféréssel rendelkező tutorok hallgatói 4 százalékponttal nagyobb valószínűséggel sajátítottak el témákat, ami a legrosszabb értékelésű tutoroknál 9 pontra emelkedett; az ő hallgatóik utolérték a kontrollcsoport jobban értékelt tutorainak hallgatóit. Ez tutoronként évente mintegy 20 dollárba került, és több mint 550 000 tutorálási üzenet elemzése azt mutatta, hogy a tutorok a válaszadásról a vezető kérdésekre váltottak. Ez az MI, amely a [[teacher-role|tanárt]] támogatja.

Az ágens nem a hallgatót tanította. Egy embert látott el a beszélgetés közben, és az ember döntötte el, mit mond. A ciklusban lévő ember és a munkához közeli kimenet az, ami átvihetővé teszi az eredményt egy másik kurzusra.

## Ne feltételezze, hogy a nagyobb autonómia több tanulást vásárol

[[ilieva-agentic-genai-higher-education-2026|Egy 130 hallgatót érintő vizsgálat egy e-kereskedelmi kurzuson]] azt találta, hogy a [[generative-ai|generatív MI]] csevegőbotokat és az ágenseket egyaránt a hagyományos [[online-teaching-and-learning|e-tanulás]] fölé értékelték a tanulás és a [[personalized-learning|személyre szabás]] tekintetében, anélkül hogy szignifikáns különbség lett volna a csevegőbot és az ágens között. Hozzáadott autonómia, hozzáadott érték nélkül azokon a mérőszámokon.

A vizsgálat keretrendszere az ágenseket korlátozott, emberi felügyelet melletti tanulási partnerekként kezeli, a célokat, ellenőrzőpontokat és végső döntéseket emberekre hagyva. [[beyond-agent-label-agentic-ai-governance-2026|Az ágenscímkén túl]] ezt [[governance|irányítási]] szabállyá teszi: az autonómia nem haladhatja meg a bizonyíték érettségét vagy az elszámoltatható emberi kontroll erejét, és a bizonyíték a legerősebb az artefaktumszintű kimeneteknél, a leggyengébb a tartós [[learning-gains|tanulásnál]] és az [[equity-in-ai-education|esélyegyenlőségnél]].

A tanulói oldali kockázat ugyanabba az irányba fut. Egy ágens, amely a hallgató helyett tervez és figyel, eltávolítja azt a gyakorlást, amely az [[self-regulated-learning|önszabályozást]] kiépíti, és [[cognitive-offloading|tehermentesítésre]] csábít. [[agentic-ai-pedagogical-best-practice-2026|A bevált gyakorlatokra vonatkozó útmutatás]] szándékos súrlódást, elhalványuló [[scaffolding|állványozást]] és [[human-in-the-loop-ai|emberi felügyeletet]] kér. A [[desirable-difficulties|produktív súrlódásnak]] vannak működő példái. A konstruktív konfliktust kereső ágensek, amelyek vitatkoznak egy gyenge tervezéssel, javították a tervezési kimeneteket az áttekintett kutatásban. A [[simulating-students|szimulált társak]] támogatják a [[collaborative-learning|együttműködő tanulást]] és a [[socratic-method|szókratészi]] kérdezést, a [[medical-education|klinikai]] [[simulation|szimulációk]] pedig lehetővé teszik a tanulóknak a gyakorlást ott, ahol a hiba olcsó.

A teszt bármelyikükre: az ülés után mit tud a hallgató megtenni, amit korábban az ágens tett? Az ítélkezés átadása megfosztja a hallgatót az [[agency|önállóság]] gyakorlásától.

## Ellenőrizze az ágenst a saját ítéletével szemben

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Nyolc MI-tanítási ágenst telepítettek egy orvosi tantervben]], és a platform által generált pontszámok és egy független szakértői rubrika eltérően rangsorolták őket. A platform által harmadiknak rangsorolt ágens a tanítási minőségben az utolsó lett. A platformpontszámok a hallgatói teljesítményt indexelik, amely olyan okok miatt mozdul, amelyeknek semmi közük a tanításhoz.

Kérdezze meg, mit számol egy irányítópult-szám, ki írta a mögötte álló rubrikát, és hogyan nézne ki egy alacsony pontszám a hallgatói munkában. A [[pedagogical-safety|pedagógiai biztonság]] ugyanabba az áttekintésbe tartozik, mert a [[pedagogical-agent|ágensek]] lánca megnehezíti annak megmondását, melyik komponens elszámoltatható, amikor egy válasz helytelen.

## Tervezze meg a kikapcsolást

Randomizált vizsgálatok azt mutatják, hogy a rövid MI-segítség lefojthatja a későbbi támogatás nélküli teljesítményt, és a kivonás utáni időszak, a [[cognitive-washout-ai-skill-decay-2026|kognitív kimosódás]], szinte teljesen méretlen. Az oldal mögötti szintézis egy 474 vizsgálatot átfogó [[meta-analysis-systematic-review|áttekintő tanulmányra]] támaszkodik, és azt találja, hogy a munka a [[higher-ed|felsőoktatásra]], a [[stem-education|STEM-re]], rövid távú tervekre és szövegalapú tutorálásra összpontosul, és csak kisebbségük alapul kifejezetten oktatáselméleten. Egy pilot, amely akkor ér véget, amikor a licenc lejár, rossz ablakot mért.

## Amit az adminisztrátorok elrontanak ebben

Az ágens egy továbbfejlesztett csevegőbot, tehát a többletnek meg kell látszania a kimenetekben. A 130 hallgatót érintő összehasonlításban mindkét MI-feltétel legyőzte az e-tanulást, és egyik sem győzte le a másikat.

Az irányítópult a tanítás minőségét rangsorolja. A hallgatói teljesítményt rangsorolja, és nyolc ágens olyan rangsort adott, amely a harmadik és az utolsó helyet megfordította egy szakértői rubrikához képest.

Az autonómia a megvásárolandó funkció. Az arányossági szabály az ellenkező irányba fut, és a bizonyíték ott a legvékonyabb, ahol az autonómia a legnagyobb.

A hozzáférés bezárja az esélyegyenlőségi szakadékot. A képességes ágensrendszerekhez való egyenlőtlen hozzáférés szélesítheti azt, és egy ágens nagy léptékben reprodukálja a tanítóadatainak elfogultságát.

## Mi jön vissza Önre

**„A hallgatók egyszerűen hagyni fogják, hogy elvégezze a munkát.”** Néhányan igen, és az architektúra dönti el, milyen könnyen. Az ágensek, amelyek a hallgató helyett terveznek és vázlatot írnak, erre csábítanak. Azok, amelyek próbálkozást követelnek, majd kérdést tesznek fel, nem.

**„A szállító értékelése szerint működik.”** Kérdezze meg, mit számol a szám. Ha a platform által mért hallgatói teljesítmény, akkor a hallgatókat méri legalább annyira, mint az ágenst.

**„Senki nem tudja megmondani, melyik ágens elszámoltatható egy láncban.”** Ez igaz a legtöbb jelenlegi telepítésre. Nevezzen meg egy felelőst a láncra, naplózza, melyik komponens melyik kimenetet állította elő, és tartson emberi ellenőrzőpontot, mielőtt bármi eljut egy hallgatói nyilvántartásba.

## Mit tegyen ezen a héten

**1.** Írja le a feladatot és a kimenetet, amely alapján megítéli, egy-egy mondatban, a következő szállítói hívás előtt.

**2.** Pontozza egy ágens kimenetét a rubrikájával tíz valós hallgatói munkán, és tartsa meg a pontszámokat.

**3.** Adjon hozzá egy dátumozott, felelőssel ellátott támogatás nélküli feladatot a pilot tervéhez.

## Hová tovább

[[developing-ai-tutor|A hatékony MI-tutor fejlesztése]] a hallgatói oldali felépítést tárgyalja a célkitűzéstől a súgylétráig, az [[evaluating-ai-interventions-methods|MI-beavatkozások értékelésének módszerei]] pedig azt, hogy működött-e a dolog. Az [[intelligent-tutoring|intelligens tutorálás]] és a [[ai-literacy|MI-írástudás]] adja azt a tervezési szótárt, amelyet ez az oldal feltételez.
