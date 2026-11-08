---
title: "Tanulói identitás"
created: "2026-08-27T08:10:00-04:00"
type: concept
foundations: [agency, learner-identity]
discipline: [stem education]
audience: [learners]
confidence: high
connected_faqs: [how-ai-impacts-students]
level: [adult learning]
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/learner-identity"
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

> **Tanulói identitás** — annak fejlődő érzése, hogy ki valaki (és kivé válik) tanulóként, beleértve a tudományági, szakmai, kreatív és akadémiai identitásokat. Az [[ai-education|MI az oktatásban]] terén a [[generative-ai|generatív AI]] egyszerre két irányból nehezedik a tanulói identitásra: *támogathatja* az identitás formálódását (a tudományági hovatartozás és a magabiztosság [[scaffolding|vázolása]]), miközben *fenyegetheti* is (aláásva az észlelt szerzőséget, a kompetenciát és a hiteles tanulást). A tanulói identitás megértése központi szerepet játszik olyan MI tervezésében, amely megerősíti, nem pedig erodálja a tanulók önképét.

## Megfontolandó kérdések

- Gondoljon vissza egy alkalomra, amikor úgy érezte, egy készség vagy egy munka valóban „az övé", szemben azzal, amikor csak rajta keresztül készült el. Mi tette a különbséget — a szerzőség, az elismerés, a kompetencia? Hogyan formálhatja újra ezt az érzést egy olyan eszköz, amely helyette elkészíti a munkát?
- Gyakori feltevés, hogy az identitás rögzített tulajdonság, amely vagy van a tanulónak, vagy nincs. Mi változna a tanulás tervezésében, ha a tanulói identitást inkább olyasvalamiként kezelné, ami a részvételen, az elismerésen és a szerzőségen keresztül folyamatosan épül?
- Az oldal egy „kompetenciaparadoxont" ír le művészeti és tervezőhallgatók körében: az MI-eszközök könnyűnek és hasznosnak tűnnek, használatuk mégis fenyegeti azt a kreatív identitást, amelyet a hallgatók a kézi munkából merítenek. Érezte már valaha, hogy egy könnyű eszköz megkérdőjelezi a saját kompetenciáját vagy identitását? Mi volt a feszültség?
- A diákok néha elrejtik az MI-használatukat, vagy szégyellik azt, ami töredezetté teszi az akadémiai identitásukat és a becsületes elköteleződésüket. Mikor kényszeríti az embereket az a nyomás, hogy egy bizonyosfajta tanulónak látsszanak, arra, hogy elrejtsék, hogyan tanulnak valójában — és mi tenné biztonságossá a feltárást?
- Az MI úgy vázolhatja az identitás formálódását, ahogy fenyegetheti is. Ha Ön MI-alapú [[pedagogical-agent|tanulási társat]] tervezne, milyen konkrét funkciók védenék a tanuló szerzőség- és tulajdonérzetét, miközben továbbra is támogatást nyújtanak?

## Bevezetés

A tanulói identitás azt érinti, hogy ki az, akinek a tanuló önmagát érti, és kivé válik egy tudományterületen belül — motivációs és fejlődési konstruktum, amely különbözik az olyan képesség-hiedelmektől, mint a [[self-efficacy|önhatékonyság]], amelyek a szűkebb *meg tudom-e ezt tenni?* kérdésre válaszolnak. Az identitás a részvételen, az elismerésen és a szerzőségen keresztül formálódik: azon, hogy az ember visszatükröződni látja magát egy területen, és ezt az önképet mások megerősítik. Az MI mindhárom feltételt átalakítja, mert megváltoztatja, ki végzi a munkát, mi számít saját hozzájárulásnak, és hogy a tanulót saját tanulása szerzőjeként ismerik-e el ([[agency]], [[metacognition]]).

## Miért számít az identitás az MI-oktatásban

Az identitás motivációs és fejlődési konstruktum, amely különbözik a kapcsolódó képességektől és hiedelmektől (bár kapcsolódik hozzájuk). Ahol a [[self-efficacy|önhatékonyság]] a *meg tudom-e ezt tenni?* kérdésre irányul, ott az identitás a *ki vagyok én — és kivé válok?* kérdésre. Részvételen, elismerésen és szerzőségen keresztül épül — azon, hogy az ember visszatükröződni látja magát egy területen, és ezt az önképet megerősítve kapja. Az MI átalakítja azokat a feltételeket, amelyek között az identitás formálódik, mert megváltoztatja, *ki végzi a munkát*, *mi számít saját hozzájárulásnak*, és *hogy a tanuló szerzőjeként érzi-e elismerve magát a tanulásának*. Ez az identitást elsőrendű tervezési kérdéssé teszi, nem pedig mellékes „puha" tényezővé.

- **A szerzőség és a kompetencia fenyegetettsége.** Amikor az MI szöveget, képeket vagy kódot állít elő, a tanulók megkérdőjelezhetik, hogy az eredmény valóban „az övék-e" — ez az identitás szerzőségi dimenziójának kihívása. **[[t2i-competence-paradox-2026|Liu és mtsai. (2026)]]** egy *kompetenciaparadoxont* dokumentálnak szövegképgeneráló GenAI-t használó művészeti és tervezőhallgatók körében: az eszközök könnyűnek és hasznosnak tűnnek, használatuk mégis egyszerre fenyegeti a **kreatív identitást**, amelyet a hallgatók a kézi munkából és a szerzőségből merítenek, valódi feszültséget teremtve a könnyűség és az önérték között.

Nem csupán a szerzőség fenyegetése, hanem külön szerzőségi feltétel: amikor az önformáló párbeszédet rendszeresen egy beszélgetőmodellre bízzák, a szerzők szerint a szerzői integráló munka *delegálódik*, nem pedig fejletlen marad vagy hiányzik — egy sűrűn megszólaló, mégis szerző nélküli én, amelyre a meglévő konstruktumoknak nincs helyük ([[synthetic-position-self-authorship-2026|Du és mtsai. (2026)]]).
- **Szégyen és rejtett használat.** **[[shame-guilt-ai-regulation-computing-education|Lin és mtsai.]]** kimutatják, hogy a számítástechnikai hallgatók szégyent és bűntudatot élnek át az MI-használat körül, amelyek társas szabályozóként működnek, és *rejtőzködést*, illetve szelektív feltárást hajtanak végre — olyan viselkedéseket, amelyek töredezetté tehetik az akadémiai identitást és alááshatják a tanulással való becsületes elköteleződést.
- **Az identitás, mint amit az MI vázolhat.** Az MI-nek nem kell csupán fenyegetnie az identitást. **[[ai-pedagogical-accompaniment-amico|Benedetti (2026)]]** amellett érvel, hogy az elszámoltatható, kapcsolatorientált [[pedagogy|pedagógiai]] kísérés támogathatja a tanulók **STEM-identitásának** fejlődését azáltal, hogy átlátható, korlátozott támogatást nyújt, amely teret hagy a tanulónak a saját pályája birtoklására.

## Az identitás a tudásbázis kutatásaiban

- **Kreatív identitás:** **[[t2i-competence-paradox-2026|a T2I kompetenciaparadoxon]]** azt ragadja meg, hogyan áshatja alá a használat könnyűsége a művészeti és tervezőhallgatók kézműves identitását.
- **Az észlelt szerzőség elválhat a tényleges eredetiségtől.** Az MI-vel weboldalakat építő tervezőhallgatók magasra értékelték szerzőségüket (67/100, elégedettség 6,4/7, észlelt minőség 6,1/7), ezek az értékelések azonban semmilyen mérhető dologgal nem jártak együtt: terveik homogénebbek voltak, mint MI nélkül, és az észlelt szerzőség r ≤ +0,13 szinten korrelált a mért eredetiséggel ([[vibe-coding-design-diversity-2026|Boussioux és mtsai., 2026]]).
- **Szakmai identitás:** több tanulmány kezeli az MI **szakmai identitásra** gyakorolt hatását — például **[[lodge-adaptive-capabilities-genai-future-2026|Lodge és mtsai. (2026)]]** amellett érvelnek, hogy a végzetteknek *adaptív képességekre* ([[ai-literacy]], [[distributed-cognition]], [[metacognition]]) van szükségük éppen ahhoz, hogy életképes szakmai identitást tudjanak fenntartani egy MI-vel integrált jövőben, ahelyett hogy eszközeik határoznák meg — vagy írnák ki — őket. A GenAI-ról alkotott ítéletek időbeli kontextus szerint is megoszlanak, nem csak szerzőség szerint: az interjúalanyok az MI használatát a tanuláshoz nem megfelelőnek, a jövőbeli szakmai munkában viszont jogosnak vagy elvártnak ítélték — „Diákként tanulnom kell, szakemberként termelnem kell" ([[sun-governing-genai-policy-cross-national-2026|Sun és mtsai. (2026)]]).
- **Poszthumán és hibrid identitás:** **[[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]]** a **poszthumán tanulót** elméletiesíti, akinek a kogníciója valóban hibrid, és [[biology-education|biológiai]] és mesterséges rendszerek között oszlik el — ez magának az identitásformálódásnak az újrakeretezése a kognitív MI korában.
- **Diák- és akadémiai identitás:** az **[[zhan-boud-du-authentic-assessment-scoping-review-2025|autentikus értékelés]]** [[research-methods-aied|kutatása]] azért kapcsolódik az identitáshoz, mert az autentikus, személyes teljesítményt kérő [[assessment|értékelési]] feladatok segítenek a diákoknak képességes gyakorlókként látni magukat; a **[[paternalistic-filter-llm-history-education|történelemoktatási kutatás]]** pedig megmutatja, hogyan formálhatja a paternalista MI-használat, ahogyan a diákok tudományági vizsgálódóként konstruálják identitásukat.
- **Ahogy a diákok keretezik az eszközt, az alakítja szakmai válásukat.** Azok a diákok, akik a GenAI-t kizárólag társas-érzelmi partnerként értelmezték, kevésbé differenciált reflexiókat adtak szakmai tanulásukról, mint azok, akik technikaként, tanulási anyagként vagy struktúraként is keretezték ([[genai-professionalization-metaphors-2026|Bohmer és mtsai., 2026]]).
- **Óvatos elfogadás: a szelektív MI-használat mint identitásvédelem.** [[guarded-adoption-genai-higher-education-2026|Zagami (2026)]] egy ausztrál egyetem 484 hallgatóját mérte fel, és azt találta, hogy a jobb eredményű hallgatók *alacsonyabb* aktív [[generative-ai|generatív AI]]-elköteleződésről, alacsonyabb MI iránti pozitív affektusról, alacsonyabb [[self-report-measures|észlelt tanulási]] hatásról és alacsonyabb MI-vel kapcsolatos eltávolodásról számoltak be, a legerősebb összefüggésekkel rho = -0,395 (észlelt tanulási hatás) és rho = -0,359 (pozitív affektus) értéknél. Nyitott válaszaik szelektív (tisztázás, összefoglalás, munkafolyamat-támogatás), ellenőrzött és saját ítéletük alá rendelt használatot írtak le, a tételszintű eredmények pedig nagyobb egyetértést mutattak abban, hogy az MI-re támaszkodás hátráltatja a [[critical-thinking|kritikus gondolkodást]] és az önálló [[problem-solving|problémamegoldást]]. A szerzők ezt identitásként olvassák: azoknál a diákoknál, akiknek a sikeres tanulóként való önképe saját erőfeszítésükön és ítéletükön nyugszik, az MI-használat behatárolása védi az [[agency|episztemikai ügynökséget]], amelytől az identitás függ — ami azt is jelenti, hogy a minta sem nem technofóbia, sem nem alacsony elköteleződés.
- **A megfogalmazott cél nem feltétlenül irányít egy MI-döntést.** [[ting-ai-learning-ownership-purpose-2026|Ting és mtsai. (2026)]] 14 egyetemistát interjúvoltak meg, és minden interjút kódoltak a diák [[self-determination-theory|célja]] — a személyesen értelmes, önmagon túlmutató hozzájárulási szándék — és az MI-választásaik kapcsolatára. Csak néhányan teremtettek kapcsolatot: egyikük azért utasította el az MI-t, mert annak környezeti és emberi költségei ellentmondtak a céljának, hárman pedig hagyták, hogy a jövőbeli szakmai identitás alakítsa a választásaikat („hozzájárul ahhoz a pszichológushoz, aki egy nap a világban leszek"). Más, hasonlóan világos célérzettel rendelkezők nem hoztak ilyen kapcsolatot, a célt és az MI-t „valamennyire különállónak" írták le, tehát az, hogy valakinek van mit védenie, nem azonos azzal, hogy merít is belőle. A tanulmány azt is szétválasztja, milyen okokat adnak a diákok arra, hogy megtartsák maguknak a munkát — készségfejlesztés, [[evaluative-judgment|birtoklás és büszkeség]], erkölcsi ellenvetés —, amelyek különböző mechanizmusokon keresztül érkeznek, és nem szabad egyetlen motívummá összevonni őket.

## Kapcsolat a tanulói ügynökséggel

A tanulói ügynökség és a tanulói identitás szorosan kapcsolódó, de különböző konstruktumok, amelyeket könnyű összekeverni — és mindkettő központi abban, ahogyan az MI befolyásolja a tanulást.

- **Az ügynökség a *cselekvésről* szól; az identitás a *lét*ről.** A [[agency|tanulói ügynökség]] a szándékos cselekvés, a választás és a saját tanulás feletti kontroll *pillanatnyi* gyakorlásának képessége — helyzetfüggő, interakciós és változó képesség. A tanulói identitás azt érinti, hogy ki *van* és kivé *válik* a tanuló — tartósabb, narratív és fejlődési önérzet. Az ügynökség azt kérdezi: „képes vagyok-e irányítani ezt?", az identitás pedig azt: „ez vagyok-e én / ez akarok-e lenni?"
- **Okságilag összefonódnak.** Az ügynökség egyszerre *forrása* és *eredménye* az identitásnak. Az ügynökség gyakorlása — választani, alkotni, kitartani — az, ahogyan a tanuló ügynöki személyként kezdi látni magát (az identitás részben internalizált ügynökség). Fordítva, egy stabil tudományági vagy szakmai identitás adja azt a motivációt és önértéket, amely nehézség esetén fenntartja az ügynökséget. Az identitás az ismételt ügynöki cselekvések felhalmozott terméke; az ügynökség az a folyamatos gyakorlás, amely felépíti az identitást.
- **Az MI különböző mechanizmusokon keresztül fenyegeti őket.** Az MI úgy áshatja alá az **ügynökséget**, hogy [[cognitive-offloading|túlzott támaszkodásra]] és passzív elfogadásra csábít — a tanulók abbahagyják saját érvelésük irányítását. Az MI úgy áshatja alá az **identitást**, hogy aláássa a szerzőséget és a kompetenciát — amikor az MI állítja elő a munkát, a tanulók abbahagyhatják annak érzését, hogy a kimenet „az övék", vagy hogy helyük van a területen. A [[t2i-competence-paradox-2026|kompetenciaparadoxon]] identitásfenyegetés; a [[jin-emergent-learner-agency-implicit-hai-2026|episztemikai munka implicit MI-újraelosztása]] elsősorban ügynökségfenyegetés, bár idővel identitássá sűrűsödik.
- **Mindkettő védelme a tervezési cél.** Az ügynökség támogatása a tanulók kontrolljának és választásának megőrzését jelenti (például korlátozott [[desirable-difficulties|súrlódás]], [[human-in-the-loop-ai|emberi felügyelet a folyamatban]]). Az identitás támogatása a szerzőség és az elismerés védelmét jelenti (például [[authentic-assessment|autentikus értékelés]], az MI és az emberi hozzájárulás átlátható tulajdonítása). Egy olyan terv, amely védi az ügynökséget, de nem a szerzőséget, a kontrollt védi az önérzet védelme nélkül — és fordítva.

Röviden: **támogassa az ügynökséget, hogy a tanulók cselekedhessenek; tartsa fenn az identitást, hogy tudják, kik ők, miközben cselekszenek.** Az egészséges, MI által támogatott tanulás mindkettőre figyel.

## Kapcsolat a tanári identitással

A tanulói identitás a **diák felé forduló** párja a tanári identitásnak. A tanári identitás — a nevelők fejlődő szakmai önértelmezése — a [[teacher-role]] oldalon van dokumentálva, ahol [[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]] a GenAI-t *identitásválságként* keretezi a tanárok számára, nem csupán készséghiányként, a [[teaching-the-teachers-genai-tpk-review-2026|TPK-alapú tanárképzés]] pedig az identitást a szakmai felkészülés részének tekinti. A kettő kölcsönös: a tanárok, akik identitászavart élnek át, kevésbé képesek támogatni diákjaik identitásfejlődését, tehát az egészséges, MI-vel integrált rendszernek mindkettőre figyelnie kell.

## Kapcsolatok

A tanulói identitás kapcsolódik az [[agency|ügynökséghez]] (az identitás ügynöki szerzőségen keresztül valósul meg), a [[self-efficacy|önhatékonysághoz]] (az identitást fenntartó kompetenciahiedelmek), a [[motivation|motivációhoz]] és a [[self-determination-theory|önmeghatározás-elmélethez]] (az identitásformálódás kielégíti az autonómia és a kompetencia iránti igényeket), a [[student-experience|diákélményhez]] és a [[student-engagement|diákelköteleződéshez]], valamint a [[stem-education|STEM-oktatáshoz]] (ahol a tudományági identitás kulcsfontosságú eredmény és a kitartás előrejelzője). Alakítja a [[situated-learning|helyhez kötött tanulás]] és a [[critical-pedagogy|kritikai pedagógia]] is (az identitás mint részvétel és mint hatalommal telített tárgyalás), és kapcsolódik az [[authentic-assessment|autentikus értékeléshez]] (olyan feladatok, amelyekben a tanulók teljesíthetnek, és ezáltal identitást követelhetnek). A [[higher-ed|felsőoktatásban]] és a [[k-12|K-12-ben]] egyaránt releváns, az iskoláztatástól a szakmai felkészülésig.

## Gyakori tévhitek

**„A tanulói identitás stabil tulajdonság, amelyhez egy kurzus alkalmazkodhat."** Jobb úgy kezelni, mint amit **a részvételen, az elismerésen és a szerzőségen keresztül folyamatosan építenek**. Ez az elmozdulás a tervezési kérdést a meglévő identitáshoz való illesztésből annak formálásába fordítja, amelyet a kurzus elérhetővé tesz — és az a MI, amely elkészíti a munkát, eltávolítja a három összetevő egyikét, mivel a szerzőség az, ahonnan az identitásigény ered.

**„Az identitáskérdések az alulreprezentált csoportok diákjaihoz tartoznak."** Az identitás minden tanulóban aszerint formálódik, hogy elismerik-e a részvételét, ami általános tervezési feltétellé teszi, nem különleges kedvezménnyé. Ha célzott ügyként keretezik, éppen az okozza az elhalasztását.

**„Az MI-támogatás csökkenti a korlátokat, és ezért szélesíti a részvételt."** Csökkentheti a munkatermelés korlátját, miközben szűkítheti a szerzőség igénylésének korlátját. Az a diák, aki egy folyékony artefaktumot ad be, amelyet nem ő szerzett, hozzáférést kapott az eredményhez, és megvonták tőle azt az elismerést, amely az identitást felépíti.

**„A tanuló identitásának elismerése a tartalomban való reprezentáció kérdése."** A reprezentáció számít, de az elismerés a gyakorlatban valósul meg: kinek a kérdéseit veszik fel, kinek a hozzájárulását írják jóvá, és kit kezelnek képességesként. Egy [[curriculum-design|tanterv]] lehet reprezentatív, és mégis megvonhatja az identitásformálódáshoz szükséges elismerést.

## Kapcsolódó fogalmak

- [[learners]] — Tanulók: a tanuló-oldali fogalmak ernyője
- [[agency]]
- [[self-efficacy]]
- [[motivation]]
- [[self-determination-theory]]
- [[student-experience]]
- [[student-engagement]]
- [[stem-education]]
- [[situated-learning]]
- [[critical-pedagogy]]
- [[authentic-assessment]]
- [[teacher-role]]
- [[generative-ai]]
- [[higher-ed]]
- [[k-12]]

## Kapcsolódó cikkek
- [[ting-ai-learning-ownership-purpose-2026]] — 14 egyetemista arról, mit tartanak meg maguknak, és miért ritkán dönt erről a cél
- [[guarded-adoption-genai-higher-education-2026]] — Guarded Adoption of Generative AI in Higher Education
- [[t2i-competence-paradox-2026]] — A kompetenciaparadoxon: kreatív identitás a szövegképgeneráló GenAI használatában
- [[shame-guilt-ai-regulation-computing-education]] — A szégyen és a bűntudat mint az MI-használat társas szabályozói
- [[lodge-adaptive-capabilities-genai-future-2026]] — Adaptív képességek az életképes szakmai identitáshoz egy GenAI-jövőben
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — Pedagógiai szimbiózis és a poszthumán tanuló
- [[ai-pedagogical-accompaniment-amico]] — MI-alapú pedagógiai kísérés a STEM-identitás támogatásában
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Az autentikus értékelés tervezése
- [[paternalistic-filter-llm-history-education]] — Paternalista MI-használat és diákidentitás a történelemoktatásban
- [[laidlaw-genai-identity-crisis-faculty-2026]] — A GenAI mint identitásválság a tanárok számára (tanári identitás)
- [[teaching-the-teachers-genai-tpk-review-2026]] — TPK-alapú tanárképzés és szakmai identitás
- [[genai-professionalization-metaphors-2026]] — GenAI-koncepciók és a diákok szakmai identitása

- [[synthetic-position-self-authorship-2026]] — Szerzői felfüggesztés: a delegált szerzőség mint sűrűn megszólaló, mégis szerző nélküli én (fogalmi elemzés)
- [[vibe-coding-design-diversity-2026]] — Egy eszköz, egy ízlés? Hogyan cseréli fel a vibe coding a kollektív sokszínűséget egyéni kreativitásra
