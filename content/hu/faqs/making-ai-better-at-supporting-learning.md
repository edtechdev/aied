---
title: "Hogyan tehetjük jobbá a MI-t a tanulás támogatásában a saját tantárgyunkban?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:37:59-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A hibajegy azt mondja, hogy „finomhangoljuk a modellt a kurzusanyagainkra”. A költségvetés jóváhagyva, egy GPU le van foglalva a következő hónapra, és egy doktoranduszt megkértek, hogy állítson össze egy adatkészletet. A hívásban senki nem kérdezte meg, mit ér el egy egyszerű prompt, vagy mit ér el egy kulcsszókeresés ugyanazokon a kérdéseken.

Először ezt a két kérdést tegye fel. Ebben a tudásbázisban az általános modell és egy kurzuskompetens modell közötti szakadék nagyrészt alapozási és promptolási probléma, és ennek a sorrendnek a bizonyítéka szokatlanul közvetlen: egy tanfolyami asszisztensről szóló vizsgálat azt találta, hogy a visszakeresés, nem a modell volt az elsőrendű döntés, és egy alapozás nélküli általános modell *egy egyszerű TF-IDF kiindulópont alatt* teljesített.

A betanítás valóságos, és néha szükséges. Ez a harmadik vagy negyedik dolog, amit ki kell próbálni, és az alábbi munka úgy van rendezve, hogy kiderüljön, melyik lépcsőfokra van ténylegesen szüksége, mielőtt a negyedév számítási kapacitását elkölti.

## A rövid változat

**1.** Naplózza, mit ér el egy egyszerű prompt, és mit ér el egy triviális lexikai módszer, mielőtt bármit megváltoztat. A második szám az, ami becsületesen tartja.

**2.** Tegye a saját anyagain fölé épített visszakeresést a modell elé. Ez a legnagyobb egyetlen nyereség, amelyet itt a költséghez képest jelentettek, és visszafordítható.

**3.** A rubrikájához mérve mérnökölje a promptot, és iteráljon, amíg a javulás meg nem áll. A plató az a jel, hogy a betanítás hozzáadhat valamit.

**4.** A súlyokat [[llm-training-and-fine-tuning|LoRA]]-val igazítsa, amikor a cél stabil és szűk: egy formátum, egy rubrika, egy olvasási szint, egy szakterületi szókincs.

**5.** Utólagosan tanítson, amikor a probléma viselkedés, nem tartalom, és a jutalmat olyan benchmarkhoz mérve írja meg, amelyről feltételezi, hogy ki fogják játszani.

**6.** A tanítóhalmazt lépésszinten építse fel. A csak válaszokból álló adat nem tanít meg egy tévhitet.

## Szerezzen olyan kiindulópontot, amelyet tényleg meg tud verni

Mielőtt bármit megváltoztat, naplózza, mit ad vissza egy egyszerű prompt. Aztán naplózza, mit ad vissza egy triviális módszer.

A [[shen-sustainable-ai-knowledge-base-cs-education-2026|tanfolyami tudásbázis-asszisztens]] vizsgálata már ezért egyedül is érdemes az elolvasásra. Egy helyi LLM visszakeresés nélkül **52,3%** pontosságot ért el. Egy TF-IDF kiindulópont, egy évtizedes lexikai módszer **55,4%**-ot. A modell rosszabb volt a klasszikus módszernél.

Hagyja ki ezt a lépést, és nem tudja megmondani, hogy a finomhangolása segített-e. Rosszabb esetben olyan rendszert szállít, amelyet egy kulcsszókeresés megver, és ezt csak akkor tudja meg, amikor egy oktató asszisztens megemlíti. Két szám egy táblázatban, egy délután alatt felvéve, megvédi a költségvetés többi részét.

## Alapozza a modellt a saját anyagaiba

A [[rag|visszakeresés-alapú generálás]] hozzáadása a kurzusanyagok fölé, finomhangolás nélkül, ugyanezt a rendszert 52,3%-ról **66,6%**-ra emelte. Ez a nyereség egy indextől jött, és olyan tulajdonsággal jár, amilyenje egy betanítási futásnak nincs: amikor a dokumentumai megváltoznak, újraindexel.

Két másik eredmény ugyanabba az irányba mutat. 23 empirikus vizsgálat PRISMA-áttekintése az MI [[writing-education|írásoktatáshoz]] való testreszabásáról azt találta, hogy **a promptmérnökség dominál (N = 13), megelőzve a finomhangolást (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Ahol egy tudásbázisnak naprakésznek kell maradnia, a visszakeresés az egyetlen kar, amely naprakész marad betanítási feladat újrafuttatása nélkül.

A visszakeresésnek pedagógiai formája is van. Egy modell alapozása a saját kidolgozott példáiba és rubrikáiba az, ahogy az Ön által tervezett [[scaffolding|állványon]] belül marad, az Ön által beállított szinten válaszol, ahelyett hogy általános tanácsokba sodródna. Ez az elsodródás a leggyakoribb panasz a kész tutorokkal szemben, és gyakrabban visszakeresési probléma, mint súlyprobléma.

## Írja a promptot a rubrikához, és figyelje a platót

A promptmunka nem előkészület, amelyet a GPU-ra várva végez. Két eredmény mutatja, mit ér el önmagában:

- **A rubrika vezette, iteratívan közösen finomított promptolás 54,75%-ról 81,25%-ra emelte az LLM és az ember közötti egyezést a hallgatói tervezési munkán** (Cronbach-alfa 0,393-ról 0,798-ra), finomhangolás nélkül ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Egy irodalomra alapozott egyedi prompt a célzott matematikai [[misconceptions|tévhiteket]] **0,98** jelenléttel hívta elő, szemben egy széles prompt **0,40**-ével ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

A gyakorlati jel a **plató**. A tételgenerálási vizsgálatban az iteratív promptfinomítás javulása megállt, és a GPT-4.1 finomhangolása *az optimalizált prompton* hozta hozzá a fennmaradó nyereséget ([[gpt-item-generation-l2-listening-2026]]). A valódi promptmunka utáni plató bizonyíték arra, hogy a betanításnak van tere hozzáadni valamit. A betanításért nyúlni, mielőtt elérné a platót, találgatás, és a találgatás egy hónapba kerül.

Figyelje meg, mit jelent a tételgenerálási eredmény a sorrendre nézve. A finomhangolás az optimalizált promptra épült, így a promptmunka nem veszett kárba, amikor a csapat végül tanított. Az olcsó lépcsőfok egyben a drága lépcsőfok specifikációja is.

## Igazítsa a súlyokat, amikor a cél stabil és szűk

Az adaptáció akkor térül meg, amikor a modellnek egy tulajdonságot megbízhatóan kell tartania: egy olvasási szintet, egy kimeneti formátumot, egy szakterületet, amely hiányzik belőle. A visszatérő eredmény az, hogy **a célzás legyőzi a méretet**.

- Három **8B**-s modell, amelyet szakértők által tervezett gyermekolvasási tananyagon finomhangoltak, felülmúlta a zero-shot GPT-4o-t és a Llama 3.3 70B-t a nehézséghez kapcsolódó mérőszámokon, elhanyagolható biztonsági problémák mellett. A szerzők ezt **szabályozhatóságként a méret helyett** keretezik ([[llm-children-reading-story-generation]]).
- Egy indiai tudásrendszerekre alapozott, **24 795 példás** utasítási adatkészlet egy **7B**-s finomhangolást eredményezett, amely **6,39**-et ért el egy öttagú külső zsűrin, egy erős általános referenciamodell **0,15**-ös közelségében, a telepítési költség töredékéért. Ugyanaz az alapmodell a finomhangolás nélkül **közel nullát ért el a szakterületspecifikus dimenziókon** ([[iks-instruct-dataset-indian-knowledge]]). Ez az általánosan kompetens és az itt kompetens közötti szakadék a szakterületi adaptáció teljes indoka.
- Egyetlen [[llm-training-and-fine-tuning|LoRA]] adapter, amelyet nagyjából **3 900** összevont, jegyzett példán tanítottak, öt kis nyílt modellt (4B-től 30B-ig) hozott egy emberi javító szintjére vagy fölé két számítástechnikai vizsgán ([[llm-graders-computer-science-exams-2026]]). Egy adapter, egy adatkészlet, több alapmodell: ez az a telepítési alakzat, amelyet egy kis csapat is futtathat.

A címben a *stabil* szó viseli a súlyt. A formátum, a rubrika, az olvasási szint és a szakterületi szókincs stabil célok. Az ítélethordozó prózának nincs ilyen célja, és ott bukik meg az adaptáció, amint a következő két szakasz mutatja.

## Változtassa meg a viselkedést, amikor a válaszok a probléma

Az adaptáció megtanítja a modellnek, *mit állítson elő*. Az utólagos betanítás megtanítja, *hogyan viselkedjen*. A tutorálásnál ez a megkülönböztetés maga a probléma: az általános modelleket emberi segítőkészségre vonatkozó preferenciákon tanították utólagosan, ami azt jelenti, hogy azonnal válaszolnak, a tanítás pedig a válasz visszatartását igényli.

A korpusz legerősebb oktatási eredményei itt vannak. Az EduQwen jutalommodellje kifejezetten **a vezető válaszokat a közvetlen válaszok elé** helyezte, és háromszakaszos folyamata **96,52%**-ot ért el a CDPK benchmarkon a Gemini-3 Pro **90,55%**-ával szemben ([[singh-eduqwen-pedagogical-rl-2026]]). A SWIM írásszimulátora a rubrikaalapú promptolástól (legjobb QWK **0,577**) a felügyelt finomhangoláson (**0,474 ± 0,023**) át a megerősítéses tanulásig (**0,618 ± 0,005**) mozdult minden tulajdonságban és promptban ([[swim-student-writing-simulation-2026]]).

A SWIM számokat figyelmesen olvassa, mert a középső lépés visszafelé ment. A bemutatásokon végzett felügyelt finomhangolás rosszabbá tette a szimulátort, mint a prompt, amelyből indult, és csak a jutalomjel állította helyre a veszteséget, majd múlta felül a kiindulópontot. Ha a terve a felügyelt finomhangolásnál megáll, a terv kerülőút lehet.

## Felügyeljen lépésszinten

Egy megállapítást itt könnyű elmulasztani és drága figyelmen kívül hagyni: **a felügyelet minősége legyőzi a felügyelet mennyiségét**. Az utasításra hangolt modellek csak akkor sajátítottak el algebrai tévhiteket, amikor **lépésszintű megoldásnyomokon** tanították őket. Kizárólag végső válaszokon tanítva a pontosság **minden adatméretnél 30% alatt maradt** ([[misconception-acquisition-dynamics-llms-2026]]).

Ha a tanítópéldái kérdés és helyes válasz párok, akkor a rossz dolgot tanítja, és a példák hozzáadása nem javítja meg. Amire szüksége van, az a köztes munka: a rossz kanyar, a lépés, ahol a hallgató eltévedt, a javítás. Ennek gyűjtése adatmérnökségi probléma pedagógiai kötöttséggel, és általában munkamenetek naplózását jelenti, nem megoldáskulcsok kinyerését.

## Ahol az adaptáció csendben megbukik

Ez az a rész, amelyet a lelkesedés kihagy.

**Ítélethordozó szöveg.** A WrAFT-ban ugyanaz a projekt, amely sikeresen finomhangolt esszék *pontozására* (QWK 0,84), csonkolt és értelmezhetetlen kimenetet állított elő, amikor *visszajelzésre* finomhangolt, miközben a Claude 3.7 közvetlen promptolása hozta azt a visszajelzést, amelyet a tanárok a legjobbnak értékeltek ([[wraft-automated-writing-evaluation-argumentative-2026]]). A finomhangolás megtanította a modellt pontszámot elérni, és a pontozás volt az egyetlen, amit megtanult.

**Átvitel a modellek között.** A méret nem megbízható előrejelzője az utólagos teljesítménynek LoRA-adaptáció mellett, és **azonos hiperparaméterek minőségileg eltérő viselkedést hoztak különböző architektúrákon** ([[aiawe-automated-writing-evaluation]]). Egy recept, amely az egyik modellen működött, nem recept.

**Az architektúra a paraméterszám előtt.** Három nyílt szöveg-kép modell finomhangolása 1 000 feliratozott nukleáris mérnöki képen jelentősen javította a Stable Diffusion XL-t, korlátozott nyereséget adott az SD-v3.5-Mediumnál, és **egyáltalán nem hozott mérhető javulást a Flux.1-nél** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**A probléma az érvényesítés volt.** Egy tanítatlan, élvonalbeli GPT-4 nagyjából **35%** túl általános, hibás vagy választ eláruló utalást adott, amikor tutorálási visszajelzést írt, és a saját automatizált minőségellenőrzései ellentmondtak az emberi ítéletnek ([[reddig-maclellan-personalized-feedback-llm-2026]]). Ez szűrési probléma, és egy LoRA nem oldja meg.

A minta mind a négy esetben ugyanaz: az adaptáció megbízhatóan mozgat egy modellt egy olyan cél felé, amelyet meg tud határozni és pontozni. Nem ad hozzá ítélőképességet, és az a folyamat, amelyből hiányzik az ellenőrzés, továbbra is rossz kimenetet szállít.

## Gazdálkodjon őszintén az adaptációval

Az adaptációs lépcsőfokon a mérce alacsonyabb, mint a legtöbb csapat feltételezi: **néhány száztól néhány ezer példáig, és egyetlen GPU**. A LoRA kevés hozzáadott paramétert tanít, és az alapul szolgáló súlyokat fagyasztva hagyja, így több modell szolgálható ki egy adapterből.

A rang kompromisszum, nem olyan állítógomb, amelyet maximalizálni kell. A millió adapterparaméterre jutó nyereség monoton módon csökkent a rang növekedésével, és a kurzusszintű illesztés méret- és rangdöntés volt, nem ingyenes fejlesztés ([[lora-finetuned-control-systems-course-qa-2026]]).

Az is valódi döntés, mely rétegeket adaptálja. Egy BERT-alapú diskurzuselemző **csak az utolsó négy Transformer-rétegének** frissítése felülmúlta mind a csak a legfelső réteg adaptálását, mind a teljes mélységű finomhangolást ([[bert-discourse-english-teaching-2026]]). Három konfiguráció, három különböző eredmény, és a legolcsóbb nyert.

A könnyen alulbecsült költség az értékelés, amely nagyobb, mint a számítási számla. Lásd: [[checking-whether-educational-ai-works|Honnan tudjuk, hogy egy oktatási MI helyesen működik, és nem csak jól pontoz?]]

## Kalibrálja, mire számít

A modell- és promptválasztás együtt a nagy nyelvi modellek és a hallgatói tanulási nyereségek közötti eltérésnek csak mintegy **15%**-át magyarázza, és abban a vizsgálatban a benchmark-súlyozás és az egyhangú szavazáson alapuló együttesek *rontottak* az illesztésen ([[educational-llm-alignment]]). Az előtanítási adat a domináns kar abban, hogyan viselkedik egy modell, és ez az az egyetlen kar, amelyet nem tud meghúzni.

Mindez nem a fenti munka ellen érvel. Az ellen érvel, hogy egy finomhangolástól várjuk egy tervezési probléma megoldását. Ha a gond az, hogy a tutora túl készségesen válaszol, a betanítás kezelheti. Ha a gond az, hogy a tanulói nem lépnek kapcsolatba vele, a betanítás nem fogja kezelni, és a 15%-os szám azt mondja, hogy a pénzt jobb máshol elkölteni.

## Mit rontanak el a csapatok

A finomhangolás az, ahogy megtanítja a modellnek a kurzusát. A saját anyagain végzett visszakeresés ugyanezt a rendszert 52,3%-ról 66,6%-ra vitte, mindenféle betanítás nélkül, és egy rubrikához finomított prompt 54,75%-ról 81,25%-ra mozdította az egyezést. A betanítás sokkal megbízhatóbban tanít viselkedést és formátumot, mint tartalmat.

Egy nagyobb alapmodell mindezt feleslegessé teszi. Egy 8B-s modell, amelyet gyermekolvasási tananyagon finomhangoltak, felülmúlta a zero-shot GPT-4o-t és a Llama 3.3 70B-t a nehézségi mérőszámokon, és egy 7B-s finomhangolás egy erős általános referencia 0,15-es közelségébe került a telepítési költség töredékéért. A méret és az illeszkedés külön tengelyek, és közülük csak az egyik vásárolható meg tokenenként.

A több adat helyrehozza a rosszul felépített tanítóhalmazt. A csak válaszokon alapuló felügyelet a tévhitekről szóló vizsgálatban minden adatméretnél 30% alatt hagyta a pontosságot. A méret nem javít meg egy olyan célt, amelyből hiányzik az az információ, amelyre a modellnek szüksége van.

Egy recept, amely az egyik modellen működött, a következőn is működni fog. Azonos hiperparaméterek minőségileg eltérő viselkedést hoztak különböző architektúrákon, és ugyanaz a finomhangolási módszer az egyik képmodellet jelentősen javította, a másiknál mérhetően semmit nem tett. Futtassa újra a receptet az alapmodelljén, vagy találgat.

A felügyelt finomhangolás a biztonságos középső lépés a megerősítéses tanulás előtt. A SWIM-ben a felügyelt szakasz 0,474-et ért el a prompt 0,577-ével szemben, amelyet helyettesített, és csak a jutalomjel állította helyre. A középső lépés egy hónapba és egy visszaesésbe kerülhet.

## Mi jön vissza Önre

**„A költségvetés finomhangolásra van jóváhagyva, tehát finomhangoljunk.”** Töltsön egy hetet a kiindulóponttal és az indexszel. Ha a visszakeresés elmozdítja a számot, a finomhangolás későbbi döntés lesz, jobb információval, és erősebb érve lesz mellette, vagy jó oka arra, hogy visszaadja a GPU-t.

**„Nálunk az a probléma, hogy a hallgatók nem használják.”** A betanítás megváltoztatja, mit állít elő a modell. A 15%-os szám azt írja le, mennyit magyaráz a modell- és promptválasztás a tanulási nyereségekkel való eltérésből, és az elköteleződés ezen kívül esik. Műszerezze fel, hol lépnek ki a hallgatók, mielőtt számítási kapacitást vásárol.

**„Nem küldhetjük a hallgatói munkákat egy szállítói API-nak.”** A legerősebb LoRA-eredmény itt nyílt modellekből jött a 4B-től 30B-ig terjedő sávban, és egyetlen adapter többet is kiszolgált közülük. Ez a telepítési alakzat elérhető egy olyan csapat számára, amelynek egy GPU-ja van és nincs adatfeldolgozási megállapodása.

**„A promptolás hack, az igazi munka a betanítás.”** A 23 írásoktatási vizsgálat áttekintése a promptolást találta domináns megközelítésnek, a finomhangolást pedig mögötte, és az ezen az oldalon jelentett legnagyobb nyereség egy indextől jött. Az áttekintés és a tanfolyami asszisztens vizsgálata is a mért nyereség szerint rendezte ezeket a lépcsőfokokat.

**„Kipróbáltuk a promptolást, és platóba futott, tehát betanításra van szükségünk.”** Ez a helyes olvasat, és ez az az egyetlen eset, amikor a mászás indokolt. Vigye be az optimalizált promptot a finomhangolásba, ahogy a tételgeneráló csapat tette, és számítson arra, hogy a nyereség kisebb lesz, mint a promptmunka volt.

**„A kurzusanyagaink következetlenek, így a visszakeresés szemetet ad vissza.”** Adni fog, és a visszakeresés a korpusz minőségét örökli. A korpusz tisztítása olcsóbb, mint egy modellt arra tanítani, hogy megkerülje, és az 52,3%-ról 66,6%-ra vezető nyereséget hétköznapi kurzusanyagokon mérték, nem válogatott halmazon.

## Mit tegyen ezen a héten

**1.** Futtasson csak promptos és kulcsszavas kiindulópontot 50 valódi kérdésen a kurzusából, és írja le mindkét számot.

**2.** Irányítsa a visszakeresést a már meglévő anyagaira, és futtassa újra ugyanazt az 50-et, hogy a nyereséget a saját kiindulópontjához mérjék.

**3.** Tegye a rubrikát a rendszerpromptba, és iteráljon egy hétig. Álljon meg, amikor két kör semmit nem ad hozzá.

**4.** Auditálja a tanítóhalmazát lépésszintű nyomok szempontjából. Ha kérdés-válasz párokból áll, az adatkészlet nem kész.

**5.** Írja meg azt az egyetlen tulajdonságot, amelyet megbízhatóan tartania kell, és döntse el, hogy viselkedés-e vagy tartalom. Ez a döntés választja ki a lépcsőfokot.

## Hová tovább

A [[training-ai-tutors-to-guide-rather-than-answer|Hogyan tanítsunk egy MI-tutort arra, hogy vezesse a hallgatókat, ne pedig válaszoljon nekik?]] oldal részletesen tárgyalja az utólagos betanítás felét. A [[checking-whether-educational-ai-works|Honnan tudjuk, hogy egy oktatási MI helyesen működik?]] oldal azt tárgyalja, hogyan lehet megállapítani, működött-e bármi is. A [[developing-ai-tutor|Melyek a hatékony MI-tutor fejlesztésének bevált gyakorlatai?]] ugyanannak a célnak az interakciótervezési oldala, a [[designing-educational-ai-software|Melyek az oktatási MI-szoftver tervezésének bevált gyakorlatai?]] pedig a környező rendszert tárgyalja. A teljes fogalmi oldal: [[llm-training-and-fine-tuning]].
