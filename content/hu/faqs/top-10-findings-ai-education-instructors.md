---
title: "Mi az a 10 eredmény az MI oktatási kutatásából, amelyet az oktatóknak ismerniük kell?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
type: faq
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Ez a tíz vizsgálat közvetlenül érinti azokat a döntéseket, amelyeket az oktatók meghoznak: mit adjanak fel, hogyan értékeljék, milyen eszközöket vásároljanak, hogyan építsék meg őket, és hogyan állapítsák meg, hogy történt-e tanulás. Minden tétel megadja a vizsgálatot, annak eredményét és azt a gyakorlatot, amelyet megváltoztat.

## A tíz vizsgálat

**1. A sima chatbot-hozzáférés 17%-kal csökkentette a vizsgaeredményeket ([[generative-ai-guardrails-harm-learning|Bastani és mtsai, 2025]]).**

Csaknem 1 000 középiskolai diák Törökországban, mintegy 50 osztályban, három matematikai foglalkozáson dolgozott ugyanazon a tartalmon. Az egyik csoport gyakorlás közben sima GPT-4-es chatablakot kapott. A másik ugyanarra a modellre épített tutort kapott, tanárok által írt [[guardrails|korlátokkal]]: válaszok helyett utalásokkal, a helyes megoldással és a gyakori hibákkal a promptba ágyazva. A kontrollcsoport nem kapott MI-t. Minden foglalkozás [[summative-assessment|könyv nélküli vizsgával]] zárult hasonló feladatokból, az eszköz nélkül.

A sima chat csoport a gyakorlás során 48%-kal a kontroll felett teljesített, a vizsgán viszont 17%-kal alatta. Azok a diákok, akik soha nem nyúltak MI-hez, felülmúlták őket. A korlátozott csoport 127%-ot javult a gyakorlásban, és a vizsgán egy szinten végzett a kontrollal. A kár eltűnt, és helyette nem jelent meg tanulási előny. A chatnaplók magyarázzák a különbséget: a korlátok nélküli csoport válaszokat kért, majd abbahagyta, míg a korlátozott csoport megpróbálta megoldani a feladatokat, utalásokat kért, és már az első foglalkozáson belül javult.

Az oktatók számára az „MI engedélyezve” nem szabályzat. A felület dönti el, hogy az eszköz utaláscsatornává vagy válaszgéppé válik-e, az általános chatbot pedig alapértelmezés szerint az utóbbi. A gyakorlás közben nyitva hagyott chatablak azoknak a diákoknak árt a leginkább, akik a legjobban támaszkodnak rá.

Az adminisztrátorok ugyanezt az eredményt szegezhetik szembe a beszerzési állítással, miszerint egy erősebb modell megoldja a pedagógiát. A modell mindkét ágban azonos volt.

Kapcsolódó: [[training-ai-tutors-to-guide-rather-than-answer|Tutor képzése arra, hogy vezessen, ne válaszoljon]]

**2. A kurzus saját pedagógiájára épített tutor kevesebb idő alatt felülmúlta az aktív tanulásos kurzust ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin és mtsai, 2025]]).**

A Physical Sciences 2 a Harvard bevezető fizikakurzusa élettudományi szakos hallgatók számára. 2023 őszén 194 hallgató vett részt egy átfedéses kísérletben, két leckét kétszer dolgoztak fel, egyszer a kurzus [[active-learning|aktív tanulásos]] óráján, egyszer pedig a kurzusra épített tutorral, minden változat körül elő- és utóteszttel.

A hallgatók többet tanultak a tutorral. Az utóteszt mediánja 4,5 volt 3,5-tel szemben, a [[learning-gains|tanulási nyereség]] mediánja több mint kétszerese volt az órán elértnek, a hatás kvantilis becslései pedig 0,73 és 1,3 szórás között mozogtak. A tutorral töltött idő mediánja 49 perc volt, szemben az órán eltöltött mintegy 60 perccel, és 83% legalább olyan jónak vagy jobbnak értékelte a magyarázatait, mint az oktatóiét. Az elkötelezettség és a motiváció értékelése emelkedett. Az élvezet és a növekedésorientált szemlélet nem tért el.

Az eredmény a tervezésen nyugszik. A tutor ugyanazokat a lépéseket követte, mint az óra: kidolgozott példák, fokozatos utalások, önmagyarázatra ösztönző kérdések, olyan sorrend, amely követi a fizika tanulásáról szóló kutatásokat. Az összehasonlítás aktív tanulással történt, nem előadással, így az a szokásos ellenvetés, hogy bármi felülmúlja az előadást, itt nem érvényes.

A felsőoktatási fejlesztő munkatársak számára itt a legerősebb elérhető érv áll rendelkezésre arra, hogy a tutor tervezése tantervi munka, nem beszerzés. A termékcsapatok számára a mérce konkrét: elérni egy aktív tanulásos tantermet, kevesebb idő alatt, ugyanazokkal a tanítási lépésekkel.

Kapcsolódó: [[developing-ai-tutor|Az MI-tutor fejlesztésének bevált gyakorlatai]]

**3. Az MI-tutorálás egy szintre került a szakértő emberi tutorokkal ([[studentbench-ai-human-tutoring-gre-2026|Northcutt és mtsai, 2026]]).**

A StudentBench 2 469 tutorálási alkalmat vont össze 2 383 GRE-re készülő felnőttel, 12 modellre épített 13 MI-tutorral, élő emberi tutorokkal és videós kontrollal. Az eredmény a kvantitatív és verbális tételek tanulási nyeresége volt.

Az összevont MI-tutorálás statisztikailag egyenértékű volt a szakértő emberi tutorálással, egy negyed szóráson belül, és mindkettő mintegy hat százalékponttal múlta felül a kontrollt: 6,86 a kvantitatív és 5,47 a verbális részen, ami körülbelül másfél-két további helyes válasz szakaszonként. Az MI-tutorokat gyengébbre értékelték az óravázlat készítésében és a gyakorlófeladatok létrehozásában, amelyekben az emberi tutorok jobbak voltak.

Az adminisztrátorok számára a személyzeti aritmetika megváltozik a jól meghatározott vizsgafelkészítés esetében. Amikor egy engedélyezett tutor negyed szórásnyira eléri az emberi tutort, a döntés a költségről és a lefedettségről szól, a hatékonyság pedig megszűnik kérdés lenni. A kutatók megjegyzik a határt: az egyenértékűség nem fölény, és a standardizált teszt a legkönnyebb eredmény, amelyet egy gép elérhet.

A felsőoktatási fejlesztők megnézhetik, hol őrizték meg előnyüket az emberi tutorok: annak diagnosztizálásában, mire van szüksége a tanulónak legközelebb, és az abból következő sorrend felépítésében.

Kapcsolódó: [[intelligent-tutoring|Intelligens tutorálás]]

**4. A jegyzetírás legyőzte a chatbotot, három nappal később ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes és mtsai, 2026]]).**

Kreijkes és munkatársai előre regisztrált kísérletet végeztek hét angliai középiskolában. 405 tizedikes diák a három feltétel közül kettőt teljesített egy történelmi szövegen: egy chatbot, amely kérdésekre válaszolt a szövegről, jegyzetírás, vagy mindkettő. Három nappal később könyv nélküli teszteket írtak a szó szerinti megőrzésből, a szövegértésből és a [[retrieval-spacing-interleaving|szabad felidézésből]].

A jegyzetek mindhárom mérőszámon legyőzték a chatbotot, a megőrzésben mintegy fél szórással, a szövegértésben közel négy tizeddel. A jegyzet plusz chatbot a háromból kettőn legyőzte az önmagában vett chatbotot, a szabad felidézésben semmit nem változtatott, és az önmagában vett jegyzet erősebb volt a kombinációnál. A kombinált feltételben a diákok mintegy negyede átmásolta a chatbot kimenetét a jegyzeteibe. A diákok továbbra is könnyebbnek, hasznosabbnak és élvezetesebbnek értékelték a chatbotot az írásnál.

Az oktatók itt közvetlen bizonyítékot kapnak arra, hogy egy olvasási asszisztens helyettesítheti az olvasást. Ha a feladat célja egy szöveg megértése, [[writing-education|az írás maga a megértés]], és az az eszköz, amely a szövegről válaszol a kérdésekre, eltávolítja a gyakorlást. Tartsa meg a jegyzeteket. Ha engedélyezi a chatbotot, kérjen olyat, amit az nem tud nyújtani: összehasonlítást, a szöveg megkérdőjelezését vagy az eszköz bezárása után írt összefoglalót.

Kapcsolódó: [[ai-support-reading-comprehension|MI-támogatás a szövegértéshez]]

**5. A tanulási idő 27%-kal csökkent, és vele együtt a megőrzés is ([[generative-ai-reduced-study-time-math|Rismanchian és mtsai, 2026]]).**

Az ALEKS platform tízéves panelje, amely 3,2 millió tanulási interakciót és 12,2 millió elhelyezési értékelésre adott válaszidőt fed le, megmutatja, mit tettek a diákok a ChatGPT megjelenése után. A vizsgálat az ugyanabba a tantervbe tartozó, chatbotba beilleszthető feladattípusokat (szöveges feladatokat) hasonlítja össze azokkal a típusokkal, amelyek a platformon belül grafikon kezelését igénylik.

Az MI-re érzékeny feladatokra fordított idő negyedévente 2,8%-kal csökkent az egyetemi hallgatók körében, tizenegy negyedév alatt 26,9%-kal. A középiskolások körében 31,3%-os, az általános iskolában 9,0%-os volt a csökkenés, az ötödikeseknél nem volt kimutatható változás. A csökkenés teljesen eltűnt [[remote-proctoring|távfelügyelet]] mellett, és ez a döntő próba: amikor az eszköz nem volt elérhető, a diákok a régi mennyiségű időt töltötték. A felügyelet mellett mért megőrzési tételeknél a helyes válasz esélye 25%-os kumulatív csökkenést mutatott.

Az életkori gradiens tervezési jelzés a termékcsapatoknak. A gyakorlási idő az a változó, amely mozdul, és ott mozdul a legjobban, ahol a feladatot a legkönnyebb átadni. Az oktatók számára a feladatra fordított idő olcsó korai figyelmeztetés: az a csoport, amely ugyanazokat a feladatokat sokkal gyorsabban végzi, valószínűleg nem ugyanazt tanulja.

Kapcsolódó: [[reducing-over-reliance|Az MI-től való túlzott függés csökkentése]]

**6. A házi feladat pontszámai 18%-kal emelkedtek, míg a könyv nélküli vizsgák 20%-kal csökkentek ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg és mtsai, 2026]]).**

Kínában 26 811 diákot követtek 30 hónapon át a 7. és 12. osztály között, miközben a generatív MI-t különböző időpontokban vezették be az egyes csoportokban. A házi feladat pontszámai 18%-kal emelkedtek, a befejezési idő 30%-kal csökkent, 64 percről 45 percre. A havi könyv nélküli vizsgák hat hónapon belül a kiindulási átlag 20%-ával csökkentek, a nagy tétű felvételi vizsgák pedig mintegy két év után 18-24%-kal.

Az időzítés mutatja a mechanizmust. Az MI-használók mintegy 81%-a gyorsabban fejezte be a házi feladatot, mint a leggyorsabb MI nélküli diák, majd gyengén teljesített a vizsgákon. Az a kisebbség, amely a házi feladatra fordított időt az MI-t nem használókéhoz hasonlóan tartotta, ugyanolyan jól tanult, mint bárki más. A veszteségek a társadalomtudományokban voltak a legnagyobbak, majd a STEM-területeken, majd a nyelvekben, és nagyobbak a magas teljesítményű diákoknál.

A házi feladat befejezése gyenge helyettesítő mutatója a teljesítménynek, és a rés hat hónapon belül megjelenik, jóval azelőtt, hogy a felvételi eredmények mozdulnának. Az oktatók korábban cselekedhetnek: tartsák a jegyet adó bizonyítékokat könyv nélkül, és kezeljék az otthoni munkát olyan gyakorlásként, amelynek befejezési ideje látható.

Kapcsolódó: [[checking-whether-educational-ai-works|Annak ellenőrzése, hogy működik-e az oktatási MI]]

**7. Minden tesztelt tutor megbukott a pedagógián, és egy beszélgetés során még rosszabbul ([[hazra-safetutors-pedagogical-safety-2026|Hazra és mtsai, 2026]]).**

A SafeTutors 11 tutort tesztelt, 3,8B és 72B közötti nyílt súlyú modellektől a GPT-5-miniig, matematikából, fizikából és kémiából, egy 11 dimenzióból és 48 alrizikóból álló taxonómia mentén, amelyet a [[learning-theories|tanulástudomány]] alapján állítottak össze. A hibakategóriák pedagógiai jellegűek: a válasz túlzott felfedése, a tévhit megerősítése és a [[scaffolding|fokozatos hozzáférés]] feladása. Mindegyik pillanatnyilag hasznosnak látszik, mert a diák gyorsan helyes választ kap.

Minden modell széles körű pedagógiai kárt mutatott. A nagyobb modellek nem voltak megbízhatóan biztonságosabbak, és az általános hasznosság csak gyengén korrelált a pedagógiai biztonsággal. A kár aránya 17,7%-ról 77,8%-ra emelkedett az egyfordulós eszmecserékből az öt-nyolc fordulós beszélgetésekbe.

Az egyfordulós értékelések nem bizonyítják a biztonságos tutort, és a termékcsapatoknak e köré kell építeniük a tesztelést. Egy modell, amely átmegy egy egyszeri hasznossági és biztonsági ellenőrzésen, egy valós beszélgetés nagy részében megbukhat. Az adminisztrátoroknak, akik tutort vásárolnak, három válaszra van szükségük: visszatartja-e a megoldásokat, rákérdez-e a tévhitekre, és kitart-e egy foglalkozás alatt. Egyetlen eszmecsere bemutatója egyiket sem adja meg.

Kapcsolódó: [[pedagogical-safety|Pedagógiai biztonság]]

**8. A kötelességszegési esetek gyengébb bizonyítékokon nyugszanak, mint amit a vádak sugallnak ([[munoz-misconduct-allegation-evidence-2026|Munoz és mtsai, 2026]]).**

Munoz és munkatársai egy ausztrál egyetemen három év alatt minden generatív MI-hez kapcsolódó kötelességszegési esetet kódoltak: 1 162 esetet 1 855 bizonyítékelemmel, amelyek mindegyikét relevancia, hitelesség és következtetési erő szerint értékelték.

A generatív MI-vel kapcsolatos vádak aránya 2023-ban a kötelességszegési esetek 11,9%-a volt, 2025-ben 36,9%, miközben az esetek összvolumene nem változott. 58 eset, a generatív MI-s összes eset 5%-a kizárólag állításra épült, egyetlen bizonyítékelem nélkül. A detektorok kimenete ritka és gyenge volt: a Turnitin- vagy hasonlósági jelentések 73 elemben nem hordoztak következtetési erőt, az önálló GPTZero-kimenet pedig 69 elemben alacsony hitelességű volt. A legerősebb bizonyítékok a vizsgálatból, nem a vádból származtak, a szóbeli interjún tett beismerésekkel 410 elemben, amelyek 97,2%-a erős volt. A [[hallucination-risk|kitalált hivatkozások]] jelentették a legnagyobb szerkezeti elmozdulást, az elemek 22,3%-át, 10,4%-ról 2023-ban 30,0%-ra 2025-ben.

Az adminisztrátorok számára a tanulság eljárási jellegű. Egy detektorponteredményre épített eset nem éli túl a fellebbezést, és az a vizsgálat, amely az eszközzel kezdődik az interjú helyett, gyenge aktaanyagot termel. Az oktatók a rendszeresen felbukkanó termék ellen léphetnek fel: a kitalált hivatkozások gyakoriak, és a hivatkozások ellenőrzése olcsó.

Kapcsolódó: [[should-we-use-ai-detectors|MI-detektorok használata]]

**9. A tanárok MI-írástudásba vetett önbizalma alig követi a mért készségüket ([[ai-literacy-assessment-misalignment|Zhang és mtsai, 2026]]).**

288 általános és középiskolai tanár töltött ki önbeszámolós MI-írástudás-felmérést és egy ugyanarra a keretrendszerre épített objektív teljesítménymérést: fogalom, használat, értékelés és etika. A kettő közötti korrelációk 0,07 és 0,24 között mozogtak.

A látens profilanalízis hat csoportot talált. 43 tanár következetesen magasra értékelte magát, miközben az objektív mérésen alacsonyabb pontszámot ért el. 59 esetében fordított volt a helyzet. A többiek az átlag körül csoportosultak, vagy a korábbi MI-tapasztalat szerint oszlottak meg.

A felsőoktatási fejlesztők számára a [[self-assessment|önértékelés]] nem szükségletelemzés. Az a felmérés, amely azt kérdezi a tanároktól, mennyire biztosak magukban, túlfinanszírozza a magabiztosokat és alulszolgálja a csendeseket, és ezek a csoportok nem azonosak a kompetensekkel és a küszködőkkel. Rövid teljesítményfeladatok választják szét őket. A kutatóknak mérési figyelmeztetésként kell kezelniük az alacsony korrelációkat: minden [[ai-literacy|MI-írástudásról]] szóló vizsgálat, amely [[self-report-measures|önbeszámolóra]] épül, az önbizalmat méri.

Kapcsolódó: [[faculty-development-ai|A gyakorlatot megváltoztató oktatói fejlesztés]]

**10. Az MI-alapú pontozás bünteti a gyengébben író diákokat ([[ai-scoring-language-bias-physics|Feser és Tschisgale, 2026]]).**

116 középiskolás diák fizikai magyarázatait 9 gépi tanulási megközelítés és 2 nagy nyelvi modell alapú megközelítés pontozta, majd összehasonlították a szakértői emberi pontszámokkal. Az egyezés a szakértőkkel 67,2% és 78,4% között mozgott, ami elfogadhatónak hangzik, amíg a hibákat fel nem bontjuk.

Minden megközelítés alábecsülte a fogalmi megértést az alacsonyabb nyelvi minőségű magyarázatok esetében. A torzítás egy irányba mutatott: az erősebb írást nem értékelték felül. A minta megfelel annak, amit maguknál a fizikatanároknál is jelentettek, ami arra utal, hogy a nehézség a szövegből való megértés következtetésében rejlik, az embereknél éppúgy, mint a modelleknél.

Az értékelési munkatársaknak és a termékcsapatoknak a nyelvi minőség szerinti alábecslési arányokat kell jelenteniük, nem csak a szakértőkkel való összesített egyezést, mert az átlag elrejti azt a csoportot, amelyik kárt szenved. Aki [[multilingual-learning|többnyelvű tanulókat]] pontoz, az alacsony nyelvi minőségű válaszokat irányítsa [[human-in-the-loop-ai|emberi felülvizsgálatra]], vagy olyan feladatokat tervezzen, amelyek nem a szövegre épülnek.

Kapcsolódó: [[ai-grading-fairness-reliability|Tisztességes és megbízható MI-osztályozás]]

## Mi közös a tízben

Három vizsgálat egyszerre két dolgot mér: mit állítanak elő a diákok az eszközzel, és mit tudnak nélküle. Bastani, Rismanchian és Strömberg mind azt találja, hogy a kettő szétválik, és csak a segítség nélküli mérőszám viselkedik úgy, mint a tanulás. Négy a modell helyett tervezési döntésen fordul meg: a korlátok Bastaninál, a Kestin-tutorba épített pedagógia, az írás, amelyet Kreijkes a feladatban tartott, és a többfordulós beállítás, amelyet a SafeTutors tesztelt. Három az eszköz körüli rendszert vizsgálja, vagyis a kötelességszegési esetekben használt bizonyítékokat, a tanári kompetencia mérésének módját és az [[automated-assessment|automatizált pontozás]] nyelvi feltevéseit. A StudentBench a paritást egy standardizált teszten állapítja meg, az egyetlen eredményen, ahol egy gép a legkönnyebben elérhet egy embert. Bastani két csoportban szerepel, mert egyszerre adja a rést és a tervezési megoldást.

Marad három kérdés, amelyet érdemes magával vinni minden kurzus- vagy termékdöntésbe. Mit kell tudnia a diáknak megtenni, amikor az eszköz nincs ott? Mire kéri a tevékenység, hogy tegyen, miközben az eszköz nyitva van? Milyen bizonyíték mutatná meg a különbséget egy hónappal később?

## Ahol ez a bizonyíték vékony

Ezek a vizsgálatok osztoznak az [[limitations-in-aied-research|MI az oktatásban kutatás egészének korlátaiban]]. Kettő a legnagyobbak közül Törökországban és Kínában zajlott, három az Egyesült Államokban, egy Angliában, egy Ausztráliában, a pontozási vizsgálat pedig Németországban. Egy kereskedelmi modellek benchmarkja, nem terepvizsgálat. A középiskolai matematika dominál, utána a fizika és az informatika következik. Nagyon kevés vizsgálat nézi a [[humanities-education|bölcsészettudományi írást]] nagy léptékben, a szakképzést vagy a fogyatékossággal élő diákokat.

Csak a kínai panel és az ALEKS-panel figyeli a diákokat több mint két évig a bevezetés után, és a kínai szerzők amellett érvelnek, hogy a rövidebb vizsgálatok szisztematikusan alábecsülik a hosszú távú büntetést. Hat eredmény preprint vagy munkadokumentum, amely még nem fejezte be a szakmai bírálatot: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang és Feser. A Bastani, Kestin, Kreijkes és Munoz vizsgálatait lektorált folyóiratokban publikálták.

A null- és negatív eredmények ritkák ebben az irodalomban, ezért a publikált rekord valószínűleg túlbecsüli, milyen gyakran segít az MI. Ezek a vizsgálatok a legjobb jelenlegi útmutatás tíz döntéshez, és egyikük sem zár le egy kérdést.

## Hova tovább

[[does-ai-help-students-learn|Segít-e az MI a diákoknak tanulni?]] az a szélesebb bizonyítékáttekintés, amely ezek mögött az állítások mögött áll. [[redesign-assessment-ai-era|Hogyan kell újratervezni az értékelést az MI korszakára?]] az értékelési részt viszi tovább. Az integritási esetekhez [[reduce-ai-cheating|Hogyan csökkentsem az MI-vel való csalást?]] foglalkozik az eljárási bizonyítékokkal és a szabályzattal. A szakmai fejlődésre vonatkozó eredményekhez [[faculty-ai-competencies|Milyen MI-kompetenciákra van szükségük az oktatóknak?]] a társoldal, és [[addressing-common-misconceptions-ai-education|Hogyan kezeljük az MI-vel kapcsolatos gyakori tévhiteket az oktatásban?]] foglalkozik azokkal az ellenvetésekkel, amelyeket valószínűleg hallani fog kollégáitól.
