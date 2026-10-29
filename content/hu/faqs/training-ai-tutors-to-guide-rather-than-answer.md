---
title: "Hogyan taníthatunk egy MI-tutort arra, hogy vezesse a diákokat, ne pedig válaszoljon nekik?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A tutora odaadja a választ. A demó nem mutatta meg, mert a kérdés könnyű volt, a diák pedig együttműködő. A próbaüzem naplói megmutatják: a diák kétszer kérdez, a modell elismétli a módszert, majd megoldja. Egy tanár végignéz egy beszélgetést, és azt mondja, ez egy csevegőbot barátságos hanggal. Most arról dönt, hogy a mérnöki idő negyedét utólagos tanításra költi-e, vagy jobb rendszerprompttal szállít.

A rövid válasz: a promptolás nem szünteti meg a válaszadás felé húzó erőt, mert a segítőkészség az, amire az alaps modellt tanították. Ha az irányító viselkedés a termék, azt tanítani kell, és a kimenetről döntő változó a **jutalom**. Írja a jutalmat benchmarkhoz mérve, tegyen lépésszintű gondolkodást a tanító adatba, és a tanítást a modell következő pedagógiai lépésén ítélje meg.

## A rövid változat

**1.** Tesztelje, hogy a prompt kibírja-e a nyomást, mielőtt arra jutna, hogy a promptolás elég. Az a hiba, amelyre figyelni kell, hogy a modell egyetért egy tévedő diákkal.

**2.** Írja meg a jutalmat a kívánt viselkedés specifikációjaként, a nehéz negatívok kizárásával, majd ellenőrizze, mit optimalizált valójában.

**3.** Lépésszintű nyomokon tanítson. Kérdés és helyes válasz párokból álló korpusz nem tudja megtanítani a modellt arra, hogy lássa, hol tévedett a diák.

**4.** Ha az ítélőképesség számít, részesítse előnyben a megerősítéses tanulást az utánzással szemben, és tartsa meg a köztes szakasz pontszámait.

**5.** Tegye a jutalmat elég sűrűvé, hogy a válaszok többségénél bekapcsoljon, és az értékelést teljes beszélgetéseken futtassa.

## Derítse ki, hogy a prompt kibírja-e a nyomást

A [[prompt-engineering|promptolás]] és az általános illesztési tanítás maga után hagy egy egyetértés felé húzó erőt. A [[contextual-sycophancy-ai-literacy|kontextuális hízelkedés]] mindkettő után fennmarad, a tanulók hibái pedig továbbra is bekerülnek a MI tanácsába.

Az EduFrameTrap hozzáadja azt a részletet, amely termékdöntésnél számít. A kontextusváltásos támadásokat kibíró modellek is megadják magukat tekintélyi vagy társadalmi-érzelmi nyomás alatt, és visszatartják a korrekciós visszajelzést, ezért érvelnek a szerzők amellett, hogy a „kedves, de pontos” viselkedésnek **kifejezett tanítási követelménynek** kell lennie, nem preferenciának ([[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]]).

Ha a tutora hibája az, hogy egyetért egy téves válasszal, a rábeszélés, hogy ne értsen egyet, enyhítés. Futtassa le előbb a nyomástesztet, rögzítse, hol törik meg, és használja azt az átiratot érvként a tanítási büdzsé mellett.

## Írja meg a jutalmat, mielőtt adatot gyűjt

A jutalom a kívánt viselkedés tömörített specifikációja, a modellek pedig azt optimalizálják, amit ténylegesen leírt. Ez teszi a jutalomtervezést azzá a döntéssé, amely minden továbbinak a plafonját meghatározza.

Az EduQwen jutalommodellje **az irányító válaszokat a közvetlen válaszok elé helyezte**, nehéz negatívok bányászásával kizárva azokat a kérdéseket, amelyeket az alaps modell már megoldott, a rolloutokat pedig 5 lépésről 8-ra hosszabbítva, hogy a többlépéses pedagógiai döntések is bekerüljenek. Háromszakaszos folyamata, először RL, majd szintetikus SFT, végül egy utolsó RL-kör, **96,52%-ot** ért el a CDPK benchmarkon a Gemini-3 Pro **90,55%-ával** szemben ([[singh-eduqwen-pedagogical-rl-2026|EduQwen]]).

Két dolog következik. Számítson arra, hogy a jutalmat kijátsszák, mert kevesebbet specifikál, mint amit szándékolt, ezért benchmarkhoz írja, ne intuícióhoz. És tartsa meg a köztes számokat: az első RL-szakasz önmagában 94,13%-ot ért el, a 40 000 saját generálású válaszon végzett SFT 96,20%-ra vitte, a végső kör pedig az utolsó töredéket adta hozzá. A nyereség nagy része korán érkezett, ami hasznos, amikor valaki azt kérdezi, megérte-e a költségét az utolsó szakasz.

## Tegye a jutalmat elég sűrűvé, hogy tanítson

A pontos egyezésre épülő jutalom túl ritka, amikor a számításba vett dolognak több dimenziója van. A SWIM írásszimulátora tisztán mutatja a fokozatokat: a rubrikára épülő promptolás a legjobb átlagos vonás-QWK **0,577**-át érte el Claude Sonnet mellett, **0,422**-t GPT-5.4 mellett, egy nyílt 7B modellnél pedig közel nullát; a felügyelt finomhangolás **0,474 ± 0,023**-ra jutott annál a 7B modellnél; a sűrű, vonásnormalizált pontossági jutalommal futó GRPO **0,618 ± 0,005**-ot ért el minden vonáson és minden prompton ([[swim-student-writing-simulation-2026|SWIM írásszimulátor]]).

A különbséget a jutalomtervezés hozta létre. A sűrű, vonásnormalizált jel többvonásos környezetben legyőzi a pontos egyezést, és ha a jutalma csak tökéletes válaszra kapcsol be, a tanító jel nagy része csend.

## Tegye a gondolkodást a példákba

Az ezen a területen leginkább használható eredmény arról szól, mit kell tartalmaznia a tanító adatnak. Az utasításra finomhangolt modellek csak akkor tanulták meg az algebrai tévhiteket, amikor **lépésszintű megoldási nyomokon** tanították őket. Kizárólag végső válaszokon tanítva a pontosság **minden adatméretnél 30% alatt** maradt ([[misconception-acquisition-dynamics-llms-2026|a tévhitek elsajátítási dinamikája]]).

A tanulmányból két részlet számít annak, aki a tutor bármelyik oldalát építi. A diák szerep túláltalánosította a megtanult hibát, amíg a helyes példákat be nem keverték akár **egy a négyhez** arányban is. A tutor szerep nem mutatott ilyen költséget, a helyes pontosságot **93%-ról 98%-ra** tartva tíz együtt tanított tévhit mentén.

A kérdés és helyes válasz párokból álló adathalmaz nem tudja megtanítani a modellt arra, hogy észrevegye, hol tévedett a diák. Ha diagnosztizáló tutort tanít, a példáknak tartalmazniuk kell a gondolkodást.

## Válassza azt a tanító jelet, amely az ítélethez illik

A felügyelt finomhangolás utánzásra tanítja a modellt a bemutatott példákból. Ez elég a formátumhoz, és nem elég az ítélőképességhez. A LearnLM ezt kifejezetten kimondja: **az RL lényegesen hatékonyabb, mint az önálló SFT a finom pedagógiai utasítások követésében hosszú beszélgetésekben** ([[learnlm-improving-gemini-learning|LearnLM]]).

Utasításra kondicionált keretezése lehetővé teszi, hogy a fejlesztők és a tanárok meghatározzák a tutor viselkedését anélkül, hogy egyetlen pedagógiafogalom mellett elköteleződnének, az együtt-tanítás pedig belekeveri ezt a Gemini utólagos tanítási szakaszaiba. A szakértők a GPT-4o-val szemben (**+31%**), a Claude 3.5 Sonnet ellen (**+11%**) és az alap Gemini 1.5 Pro ellen (**+13%**) részesítették előnyben.

A gyakorlati olvasat: ha a hibája rossz hangnem vagy hiányzó formátum, az SFT az olcsó út. Ha a hibája az, hogy a tizenkettedik körben rossz pedagógiai lépést választ, a jelnek a választást kell jutalmaznia.

## Címkézze meg minden példát azzal a viselkedéssel, amelyet tanít

Ha a felügyeletnek tartalmaznia kell a gondolkodást, a címkézési séma tantervi döntés. A felügyeleti címkékről szóló tanulmány azt találta, hogy minden tanítópéldához egyetlen célviselkedést rendelve, a tantárgyi kompetencia, a tantervi megalapozás, a diagnosztikai gondolkodás és az állványozás közül, minden kipróbált modellméretnél emelkedtek a pontszámok, a legnagyobb nyereség az állványozásban és a tanuló előtörténetének használatában jelentkezett. A tudásállapot-diagnózis maradt a leggyengébb viselkedés **54,04%**-kal ([[omniedu-open-educational-foundation-models-2026|OmniEdu]]). A diagnózis a legnehezebb tétel a listán, ezért tervezzen rá büdzsét.

Az adatkiválasztás önálló tanítási probléma. Az Edu-QuRating a preferencia-desztillációt az oktatási adatok válogatásához és gondozásához igazítja, egyetlen „ez oktatási jellegű-e?” pontszám helyett **20 rubrikadimenzióval** fedve a tényszerű pontosságot, a pedagógiai szerkezetet és a szint megfelelőségét ([[garrod-edu-qurating-educational-data-curation-2026|Edu-QuRating]]). Ha webes szövegből állít össze korpuszt, az a szűrő dönti el, hogy a modell milyen hangvételt tanul meg.

## Válassza azt az adatfogadást, amelyet meg tud fizetni

Két ellentétes fogadás határozza meg a teret, és hogy melyiket köti meg, attól függ, mi van már a kezében.

Amikor szűkös az adata, az utasításra kondicionált utólagos tanítás hordozza a viselkedést. A LearnLM rendszerszintű utasításokat használ, amelyekkel a tanárok és a fejlesztők meghatározhatják a tutor viselkedését, és az együtt-tanításra támaszkodik, nem nagy tutori átiratkorpuszra.

Amikor valódi interakciós adata van, a rajta végzett finomhangolás nyer. A TeachLM arra fogad, hogy a [[prompt-engineering|promptmérnökség]] ideiglenes megoldás, a szűkös összetevő pedig a valódi tanuló-tutor interakció. **100 000 óra** egyéni foglalkozáson tanítva, szigorú anonimizálás mellett, megduplázza a diák beszédidejét, javítja a kérdezési stílust, és **50%**-kal növeli a párbeszédkörök számát ([[teachlm-post-training-llms-education|TeachLM]]).

Olcsóbb út a desztilláció. A Pedagogy-R1, 1.5B és 7B méretben, utasításra finomhangolva oktatásilag szűrt kimeneteken, amelyeket egy QwQ-32B tanártól desztilláltak, pedagógiai lánc (Chain-of-Pedagogy) promptolással párosítva ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025|Pedagogy-R1]]).

## Azt a döntést tanítsa, amellyel a diák következőként találkozik

Az utólagos tanításnak nemcsak azt kell formálnia, amit a modell mond. A TACT egy 13 stratégiából álló taxonómián és egy két tengelyű diákmozdulat-taxonómián tanított tutort, és **20,30 pontot** nyert a Qwen3.5-4B gerincével szemben, olyan diagnosztikai benchmarkkal, amely **visszatartja a tanulóállapot-címkéket**, amelyek a tanítás során elérhetők voltak, így a modellnek a párbeszédből kell kikövetkeztetnie az állapotot ([[tact-pedagogically-adaptive-esl-tutoring|TACT]]).

Ugyanez a logika fut végig a [[special-education|gyógypedagógiai]] illesztésen ([[special-r1-rl-special-education|Special-R1]]) és azon a heurisztikus RL-munkán, amely a modelleket válaszadó helyett szókratészi vezetőként illeszti ([[wang-socratic-guides-heuristic-reinforcement-learning-2026|szókratészi vezetők heurisztikus RL-je]]). Egy platform tovább megy, és a próza helyett a politikát tanítja: egy megerősítéses tanulású ügynök választja ki a következő gyakorlófeladatot, így azt, hogy a tanuló mihez kezd következőként, a tanított modell dönti el ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|személyre szabott MI-tutorok RL-je]]).

Ez az utolsó eset annak a próbája, hogy tutort tervezett-e vagy szöveggenerátort. Ha a modell egyetlen kimenete a próza, a pedagógia a vezérlő kódjában él. Ha a modell választja a következő feladatot, a pedagógia a súlyokban van.

## Beszélgetéshosszon tesztelje

A tanítás nem teszi a modellt biztonságossá hosszú beszélgetésen. A SafeTutors megmutatja, hogy még a speciális pedagógiai modellek is romlanak tartós párbeszédben, és válasz-túlközlési károkat okozhatnak ([[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]). A [[pedagogical-safety|pedagógiai biztonságot]] beszélgetéshosszon kell mérni, beleértve azokat a köröket, amelyekben a diák téved, kitart vagy nyomást gyakorol.

## Amit a tanítócsapatok eltévesztenek

A több promptolás előbb-utóbb tartani fog. A hízelkedés fennmarad a promptolás és az illesztés után, a tekintélyi nyomás pedig újranyitja azt a viselkedést, amelyet egy kontextusváltásos teszt bezárt. A saját nyomástesztjének átirata az erre vonatkozó bizonyíték a termékében.

A ranglista száma az eredmény. A 96,52% a CDPK-n egyetlen benchmark pedagógiai feladatain mért teljesítményt ír le. Az Ön diákjai az Ön tantervével, az Ön jelölésével és egy húsz perce elakadt diákkal találkoznak.

Több adat a válasz, amikor vékonyak a nyomok. Bármilyen adatméretnél a végső válaszok 30% alatt tartották a tévhit-pontosságot. Ami az eredményt megváltoztatta, a példákban lévő lépésszintű gondolkodás volt; a korpuszméret soha nem mozdította.

A diák szerep a nehéz rész, ezért azt tanítsa utoljára. A diák túláltalánosította a tanult hibákat, amíg a helyes példák egy a négyhez arányban meg nem jelentek. A tutor szerep ugyanezekben a feltételekben 93% és 98% között tartott, ami arra utal, hogy a tutor a könnyebbik fele a tanításnak, a szimulátort pedig ellenőrizni kell.

A végső checkpoint az eredmény. Az első RL-szakasz 94,13%-ot ért el, az SFT 96,20%-ra vitte, így a mozgás nagy része az utolsó kör előtt történt. Tartsa meg a szakaszpontszámokat; megmondják, melyik szakasz érdemelte a nyereséget, és melyiket lehet legközelebb kihagyni.

## Mi jön vissza Önre

**„Nem engedhetünk meg magunknak RL-t.”** Akkor kezdje azokkal a részekkel, amelyek semmibe nem kerülnek: lépésszintű nyomok az adatban, egy célviselkedés-címke példánként, és egy jutalom, amelyet szavakban leírt, mielőtt kódba írja. A SWIM összehasonlítása megmutatja, hogy az önálló SFT egy 7B modellt 0,474-re mozdít, ami valódi nyereség, és még mindig elmarad a 0,618-tól.

**„A szállítónk modellje már megtagadja a válaszadást.”** A szállítói utólagos tanítás a segítőkészséget optimalizálja, a válaszadás megtagadása pedig nem az, amit a segítőkészségi pontszámok jutalmaznak. Tesztelje a viselkedést a saját beszélgetéseiben; a válasz az átiratban van, nem a modellkártyán.

**„A desztilláció elvisz minket az út nagy részén.”** A Pedagogy-R1 egy 1.5B és 7B méretű desztilláció, és ésszerű kiindulópont. Amit örököl, az a tanár pedagógiája, beleértve mindazt, amit az a tanár eltévesztett, és benchmark kell ahhoz, hogy lássa, mely részek öröklődtek át.

**„A hosszú beszélgetéses tesztelés túl drága ahhoz, hogy gyakran futtassuk.”** Futtassa minden modellváltozásnál egyszer, rögzített forgatókönyvvel és rögzített támadókörökkel, és hasonlítsa össze az átiratokat. A költség a forgatókönyv első megírásában van.

**„A tanár szerint csevegőbotnak érződik.”** Ez a beszélgetés alakjáról szóló jelentés, a beszélgetés alakja pedig egy politika. Számolja meg, hány kör telik el, mielőtt a modell átad egy lépést.

## Mit tegyen ezen a héten

**1.** Futtassa a nyomástesztet: téves válasz, a diák ragaszkodik hozzá, a diák tekintélyre hivatkozik, a diák a választ kéri. Mentse el az átiratot.

**2.** Írja meg a jutalmat három angol mondatban, majd ellenőrizze, hogy a kódja ezt a három dolgot méri-e.

**3.** Vizsgáljon át egy mintát a tanítópéldáiból lépésszintű gondolkodás szempontjából. Számolja meg, hányad részük tartalmaz téves lépést és annak diagnózisát.

**4.** Adjon hozzá egy célviselkedés-címkét példánként, az állványozással kezdve, és naplózza az eloszlást.

**5.** Tegyen a modellkártyára köztes szakaszpontszámokat is a végső mellé.

## Hová tovább

[[making-ai-better-at-supporting-learning|Hogyan tehetjük jobbá a MI-t a tanulás támogatásában a saját tantárgyunkban?]] azt kérdezi, hogy a tanítás egyáltalán a megfelelő kar-e, a [[developing-ai-tutor|MI-tutor fejlesztése]] pedig az interakciótervezési párját tárgyalja, amely ugyanazt az irányító viselkedést állványozással és súgáslétrákkal hozza ki, nem gradiensekkel. A [[checking-whether-educational-ai-works|annak ellenőrzése, működik-e az oktatási MI]] azt tárgyalja, hogyan mérjük meg, tényleg megváltozott-e a viselkedés, az [[llm-training-and-fine-tuning|LLM-ek tanítása és finomhangolása]] pedig az a fogalmi oldal, amely mindezek mögött áll.
