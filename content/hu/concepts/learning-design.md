---
title: "Tanulástervezés"
created: "2026-10-27T16:45:31-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-28T00:58:16-04:00"
updated: "2026-10-27T16:45:31-04:00"
translation_note: "*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

> **Tanulástervezés** (más néven *oktatástervezés*) - a hatékony tanulási élmények létrehozásának rendszeres folyamata a tanulási igények elemzése, valamint az oktatási anyagok és tevékenységek tervezése, fejlesztése, megvalósítása és értékelése révén. A MI átalakítja a tanulástervezést: automatizálja a tartalomkészítést, lehetővé teszi az [[adaptive-learning|adaptív tanulási]] útvonalakat, támogatja az adatvezérelt iterációt, és kiegészíti - nem helyettesíti - az oktástervező szerepét.

## Megfontolandó kérdések

- Gondoljon egy kurzusra vagy órára, amelyet átélt vagy tervezett. Hol végződött a „mit tanítsunk” (tanterv), és hol kezdődött a „hogyan tanítsuk” (tanulástervezés) -, és hogyan hatott a kettő egymásra?
- Gyakori feltevés, hogy a jobb MI-gördülékenység automatikusan jobb oktatási tartalmat hoz létre. Az oldal ezzel szemben azt a bizonyítékot állítja, hogy a tanulási hatékonyságot a kifejezett pedagógiai struktúra - nem csupán a MI-gördülékenység - határozza meg. Hol látott már lenyűgöző kimenetet, amely nem tanított meg semmit?
- Ha egy MI-eszköz egy promptból teljes kurzust tud generálni, mely emberi döntések válnak fontosabbá, nem pedig kevésbé fontossá? Az oldal amellett érvel, hogy a MI kiegészíti, nem helyettesíti az oktástervező szerepét - hogyan nézne ki ez a kiegészített szerep?
- Egyes oktatástervezési modelleket, például az ADDIE-t merev, lineáris lépésekként használják. Az oldal azonban iteratív, rugalmas tervezési heurisztikaként kezeli őket. Mikor ássa alá a jó tervezést egy folyamat túl szó szerinti követése?
- Az oldal megmutatja, hogy a pedagógiailag megalapozott promptolás - például egy tanulási elméletre épülő ötlépéses keretrendszer - jelentősen javította a magasabb rendű kimeneteket. Ha Ön MI-tutort építene, mit kódolna egy kifejezett tervezési rétegbe, hogy a tanítási stratégiája nyomon követhető és reprodukálható maradjon?

## Bevezetés

A tanulástervezés hidat képez a MI képességei és a hatékony pedagógia között. Ahol a [[curriculum-design|tantervtervezés]] a *mit* tanítsunk kérdésével foglalkozik programszinten, a tanulástervezés a *hogyan* tanítsuk kérdésével kurzusszinten és óraszinten. E tudásbázis cikkei mindkettőt vizsgálják: a MI-t mint a tanulástervezők eszközét, és a tanulástervezési elveket mint hatékony [[intelligent-tutoring|MI-tutorálási]] rendszerek építésének alapját.

Az, hogy ez a tervezőmunka a gyakorlatban mit foglal magában, önmagában empirikus kérdés. [[tang-chatbots-learning-design-2026|Tang és mtsai. (2026)]] 1 378 tervező-chatbot fordulót kódoltak öt kezdő tanulástervezőtől, akik egy tervezőeszközbe ágyazott chatbotbal dolgoztak, és azt találták, hogy a párbeszéd a szándékolt tanulási eredmények és a pedagógiai megközelítés köré tömörült, nem a tartalomgenerálás köré. A tervezők újra meg újra visszatértek az eredményekhez illesztési ellenőrzésként, miközben a tantervi összetevőket konkrét feladatokká alakították, és az asszisztens szerepe fázisonként változott: a fogalmak tisztázásától a feladattervezés támogatásán át egy határidő előtti ellenőrzési kör lefuttatásáig. A tervezési támogatás e bizonyítékok szerint kevésbé a anyag előállításáról szól, mint inkább a tervezési szándék koherenciájának megőrzéséről.

A tanuláselemzés és a generatív MI a tervezés különböző részeit támogatják: egy ausztrál egyetem 11 fókuszcsoportjában a tanuláselemzési diskurzus leginkább a kontextussal és a kurzusszintű problémamegoldással fordult elő együtt (0,32), míg a generatív MI diskurzusa az értékeléstervezésre (0,26) és a diákok önrendelkezésére való tervezésre (0,15) összpontosított ([[claassen-learning-analytics-genai-learning-design-2026|Claassen és mtsai. (2026)]]).

### Kulcsfontosságú kutatási témák

**A MI-támogatott tartalomkészítés** a legközvetlenebbül átalakító alkalmazás. A **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** hatfázisú architektúrát mutat be, amely a generatív MI-t LaTeX-szel és Pythonnal integrálja a [[stem-education|STEM]] anyagok készítésének automatizálására, 8 modulon és 28 projektkontextuson validálva, 8,5-9,9/10-es diákminőségi értékelésekkel. Az **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** többágenses keretrendszert használ az ADDIE modell köré szervezve, szerepalapú ágensekkel (oktató kar, oktástervező, kurzuskoordinátor), amelyek együtt teljes kurzusanyagokat generálnak. A **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** strukturált folyamatot ad az adaptív [[pedagogy|pedagógiai]] [[video-education|videógeneráláshoz]] kurzus-korpuszokra alapozva, bemutatva, hogy a kifejezett pedagógiai struktúra - nem csupán a MI-gördülékenység - elengedhetetlen az oktatási tartalom generálásához. A [[generative-ai|generatív MI]] platformok maguk is megtestesíthetik a tanulástervezési elveket az általuk előállított tartalomban: [[ai-modeling-problem-generation-platform-2026|egy MI-vezérelt platform matematikai modellezési feladatok generálására]] bevett tervezési elveket kombinált [[rag|retrieval-augmented generation]]-nel, ADDIE-megközelítéssel kifejlesztve, hogy pedagógiailag megalapozott feladatokat és ajánlásokat állítson elő, amelyek a hagyományos tartalomgenerátorokból hiányoznak. Az ilyen MI-támogatott tartalom- és óragenerálás hozadékát azonban a tanár saját szakértelme közvetíti: [[choi-teacher-ai-interaction-lesson-design-2026|Choi és mtsai. (2026)]] azt találták, hogy a tapasztalt tanárok kritikusan igazítják a MI által generált óraötleteket a diákokhoz és a kontextushoz (újrapromptolnak és kifejtik a kimenetet), míg a kezdők hajlamosak közvetlenül elfogadni a MI-javaslatokat -, tehát a MI-tartalomeszközök pedagógiai értéke a tanár tapasztalatától és MI-jártasságától függ, nem csupán az eszköztől. A [[wang-teacher-ai-co-design-review-2026|tanár-MI együttműködésben történő tanulásifeladat-tervezés]] szisztematikus áttekintése (Wang, Liu és Islam 2026) megerősíti a mintát nagy léptékben, 28 tanulmányon (2015-2025): a generatív MI-t elsősorban óravázlat-készítésre, promptgenerálásra és kreatív ötletelésre használják, és a domináns együttműködési mód a MI mint asszisztens és tartalomgenerátor, nem pedig mint teljesebb társtervező -, a hatékonyság, a reagálóképesség, a [[creativity|kreativitás]] és az [[equity-in-ai-education|esélyegyenlőség]] visszatérő lehetőségként jelenik meg. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] élesíti a tanári szakértelemre vonatkozó megállapítást a csoporttevékenységek tervezésére: a tapasztalt tanárok gazdagabb, szinergikusabb, a ZPD-hez jobban illeszkedő szereparchitektúrákat hoznak létre a MI által tervezett együttműködő tevékenységekben, mint a kezdők, függetlenül a MI-ismeretségüktől, és a „pedagógiai promptírástudást” nevezik meg annak a karnak, amely a MI-kimenetet hatékony [[collaborative-learning|differenciált csoporttanulássá]] alakítja.

Az Aila kísérlet számot ad erre a mintára a tervezési időben. Randomizált általános iskoláiban a tanárok heti 2,51 órát töltöttek órák előkészítésével az eszközzel, szemben a nélküle töltött 3,32 órával, mégis a medián tanár az órák csak 21-40%-át tervezte a nulláról, ami az az eset, amelyet a nulláról induló eszköz kezel ([[roy-aila-lesson-planning-teacher-choices-2026|Roy és mtsai., 2026]]).

Ahol a generált anyagok elmaradnak, az a tantervi illeszkedés: hét matematikatanár a MI által generált produktív kudarc feladatait az emberiekhez közelinek értékelte összminőségben (M = 17,19 vs. 17,43 a 25-ből), de alacsonyabbra a tantervi illeszkedésben (M = 2,57 vs. 3,29), így a generált feladatok továbbra is szerkesztést igényeltek hosszúság, olvashatósági szint és vizuális elemek szempontjából ([[rhaimi-productivemath-2025|Rhaimi és mtsai. (2025)]]).

**A pedagógiailag megalapozott MI-tutorálás** az oktatástervezési elveket alkalmazza a MI-rendszer tervezésére. **[[didactical-teacher-assistant-dimensional-modeling|Brisson és mtsai.]]** didaktikailag vezérelt [[llm]] tanárasszisztenst építettek, ahol a tutorálási stratégia egy kifejezett külső rétegben van kódolva - ami a tartalomválasztást és a didaktikai strukturálást nyomon követhetővé és reprodukálhatóvá teszi, közvetlenül kezelve az [[rethinking-scaffolding-llm-tutors]] átláthatatlansági aggályait. **[[instructional-guidance-genai-learning|Hou és mtsai.]]** bemutatták, hogy a generatív [[learning-theories|tanuláselméletre]] alapozott ötlépéses [[prompt-engineering|promptolási]] keretrendszer jelentősen javította a magasabb rendű kognitív kimeneteket, ami azt mutatja, hogy az oktatási útmutatás - nem csupán a MI-hozzáférés - határozza meg a tanulási hatékonyságot. Mindkettő az [[scaffolding|állványozáshoz]] és az [[intelligent-tutoring|intelligens tutoráláshoz]] kapcsolódik.

**A keretrendszerek és az értékelés** strukturált megközelítéseket adnak. A **[[bridging-instructional-design-framework-math]]** és a **[[cotal-formative-assessment-scoring-2026|CoTAL]]** [[human-in-the-loop-ai|ember a hurokban]] tervezési elveket mutatnak be. A **[[genai-mindtool-generative-learning]]** a MI-t „elmeeszközként” pozicionálja - kognitív partnerként, amely kiterjeszti, nem pedig helyettesíti a tanuló gondolkodását -, közvetlenül alkalmazva az oktatástervezési elméletet a MI-integrációra. A **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** az univerzális tanulástervezés elveit alkalmazza, hogy hozzáférhető MI-gondolkodótársat hozzon létre oktatók számára, összekapcsolva az oktatástervezést az [[inclusive-learning|inkluzív tanulással]]. Az **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) kognitívan aktivált MI-használatot strukturáló feladatkeretrendszer, amely korlátozza a MI hozzájárulását, hogy az előrejelzés, az értelmezés és az értékelés a tanulónál maradjon - a vizsgálódási ciklusok MI-specifikus adaptációja, amely a [[self-regulated-learning|önszabályozó tanuláson]], a kognitív terhelés elméletén és a [[human-ai-collaboration|ember-MI együttműködésen]] alapul. Ezeket a tervezési keretrendszereket kiegészítve a [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn és mtsai. (2026) taxonómiája]] *osztályozást* kínál tervezési módszer helyett: hat kategóriát (tanulási cél, tartalom, ábrázolási forma, episztemikus [[student-engagement|elköteleződés]], társas tervezés, termékek), amelyek lehetővé teszik a tervezők és a [[research-methods-aied|kutatók]] számára, hogy leírják, összehasonlítsák és elképzeljék a generatív MI tanulási tevékenységeket azzal, hogy kifejezetté teszik, miért, mit, hogyan, mivel és kivel köteleződnek el a tanulók a generatív MI mellett -, határobjektumként, posztdigitális párbeszéden keresztül felépítve. Az okosterem-keretrendszerek kiterjesztik ezt a [[teacher-education|tanárképzésre]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao és Wang (2026)]] háromdimenziós keretrendszert javasolnak az okos oktatásra - tanulási hatékonyság, információs és kommunikációs technológia (IKT) és tantermi szervezés -, és egy [[math-education|matematika]] M.Ed. kurzusban valósítják meg, amely [[automated-assessment|automatizált pontozást]], személyre szabott ajánlásokat és több-[[ai-feedback-quality|MI-visszajelzést]] integrál a kurzus előtti, alatti és utáni szakaszokban. Egy kvázi-kísérlet szignifikáns nyereséget mutatott a diákok pontos, szakmailag megalapozott oktatási célok megfogalmazásának képességében, és egy átvihető **D-T-E modellt** eredményezett (Disciplinary Demand-Technological Empowerment-Evaluation Loop), azaz [[discipline-specific-aied|szakterületspecifikus]] útmutatást a [[educational-development|tanárképzőknek]], hogy az okos oktatás fogalmait gyakorlati oktatástervezési gyakorlatba vigyék át.

**Tervezés az elérésért.** Halani hétkarú keretrendszere minden kurzusbeállításnál azt kérdezi, mely karok működnek még akkor is, amikor a diák egyedül van a MI-vel; az olyan strukturális lépések, mint annak megváltoztatása, mit tanúsít az érdemjegy, vagy olyan feladatok, amelyeket a gondolkodás nélkül nem lehet befejezni, tovább érnek, mint annak elmondása a diákoknak, hogy a folyamat számít ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Korlátozza az eszközt a gondolkodás védelmében.** Egy kilenc hetes érvelőíró-terv tanár által határolt chatbotokat sorakoztatott fel, amelyek kérdéseket tesznek fel és megtagadják a diákpróza generálását, és négy középiskolás diák a passzív MI-fogyasztóból olyan értékelővé vált, aki visszaszólt a kimeneteknek - a nyereséget a stratégiai korlátozás követte, nem a korlátlan generativitás ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote és Taub (2026)]]).

**A rubrikavezérelt promptolás mint tervezési kar.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar és mtsai. (2026)]] bemutatták, hogy a rubrika közvetítő felületként működik az emberi pedagógiai szándék és a gépi következtetés között: az értékelési kritériumokat felülvizsgálható tervezési termékként - nem rögzített eszközként - kezelve és iteratívan, az LLM-mel közösen finomítva az LLM és az ember egyetértése a diáktervezési munkán 54,75%-ról 81,25%-ra nőtt. Az LLM-ekhez tervezett rubrikáknak egyensúlyozniuk kell a pontosságot és a rugalmasságot - a túl homályos szabad értelmezésre csábít, a túl merev mintázatillesztésre redukálja a modellt -, és a szereptudatos promptolás (oktató, társbíráló, pályázatbíráló) eltérő értékelő visszajelzést hozott. Ez a rubrikatervezést konkrét tanulástervezési gyakorlatként pozicionálja a MI értékelési viselkedésének alakítására, miközben az ember a hurokban felügyelet elengedhetetlen marad.

**MI-ágensek az oktatástervezéshez** kiterjesztik a területet az [[agentic-ai|ágens MI]] felé. A **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** az első szabványosított, elméletileg megalapozott benchmark az LLM-alapú oktatástervezési ágensek értékelésére - 25 795 forgatókönyves kontextusmátrixa (51 kontextuális változó × 33 ISD-részlépés az ADDIE-ból) megmutatja, hogy a klasszikus ISD-keretrendszerekben (ADDIE, Dick & Carey, Rapid Prototyping ISD) megalapozott ágensek felülmúlják az elmélet nélküli ágenseket, empirikusan igazolva, hogy az oktatástervezés strukturált szakterület, nem pedig általános promptolási feladat. Az ágensek nemcsak *építői* a terveknek, hanem *kritikusai* is: [[ai-web-agents-lesson-design-2025|Wang, Mitchell és Piech (2025)]] egyetlen autonóm webágenssel navigálnak végig egy többlépéses online órán diák módjára, hogy *még a valódi tanulók bevonása előtt* értékeljék a tanulási tervet - a diákélmény leírása előre jelzi, hol fognak a kezdők lemorzsolódni, és cselekvésre alkalmas tervezési visszajelzést hoz felszínre, felülmúlva minden alapvonalat, sőt egy szimulált diákkohorszot is egy globális CS1 kurzuson. Ez az indulás előtti, ágensalapú értékelést költséghatékony kiegészítőjeként keretezi az emberi tervezési iterációnak. A **[[wang-multi-agent-systems-learning-designers-2025]]** és az **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** többágenses keretrendszereket vizsgálnak, amelyek szerepalapú ágenseket szerveznek oktatástervezési modellek köré, míg az **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** azt vizsgálja, hogyan alkalmazzák a tanárok és az ágensek közösen a technológiai-pedagógiai-tartalmi tudást. Ez a munka az oktatástervezést a [[benchmark|benchmarkoláshoz]], az [[ai-ed-evaluation|MI-oktatási értékeléshez]] és a [[curriculum-design|tanterv]] nagy léptékű tervezéséhez kapcsolja.

### Kapcsolatok a rokon fogalmakhoz

A tanulástervezés az [[ai-education|MI az oktatásban]] híd-szakmája - összekapcsolja a [[curriculum-design|tantervtervezést]] (mit tanítsunk) az [[scaffolding|állványozással]] (hogyan támogassuk a tanulókat), az [[educational-development|oktatásfejlesztéssel]] (hogyan készítsük fel az oktatókat) és a [[generative-ai|generatív MI]]-vel (magukkal az eszközökkel). Szorosan összekapcsolódik a [[teacher-role|tanári szereppel]], mert a MI-eszközök átformálják, mit tesznek a tanulástervezők és a tanárok, és az [[ai-literacy|MI-írástudatossággal]], mert a hatékony MI-integráció megköveteli, hogy az oktatók értsék a MI képességeit és korlátait. A tervezőmunka végül egy *tevékenységi rendre* oldódik fel: a [[pedagogical-patterns|pedagógiai minták]] a kipróbált lépéssorrendeket katalogizálják, így a tervező eldöntheti, hová tartozik a MI egy órán belül, nem csupán azt, hogy mit tartalmazzon. A [[learning-sciences|tanulástudományok]] az ezen elvek mögötti kutatási terület: ahol ez az oldal a tanulási élmények létrehozásának szakmai gyakorlatát tárgyalja, ott a tanulástudomány empirikusan vizsgálja ezt a gyakorlatot és annak terveit, és megtermeli azokat a kognitív, motivációs és társas elveket, amelyeket a tanulástervezés aztán operacionalizál.

### Hogyan határozza meg a tanulástervezés a tanulási nyereséget

A tanulástervezés az a kar, amely eldönti, hogy a MI [[learning-gains|tanulási nyereséget]] hoz-e, vagy csupán MI-vel felfújt teljesítményt. A tudásbázis bizonyítékai ebben következetesek: **ugyanaz a MI-eszköz nagy nyereséget vagy nettó kárt hoz attól függően, hogyan tervezik köré a tanulási élményt.** [[instructional-guidance-genai-learning|Hou és mtsai.]] megmutatták, hogy a tanuláselméletre alapozott ötlépéses promptolási keretrendszer szignifikánsan javította a magasabb rendű kognitív kimeneteket, míg a puszta MI-hozzáférés nem; a [[genai-mindtool-generative-learning|elmeeszköz]] és az [[airis-cognitively-activated-ai-physics-2026|AIRIS]] keretrendszerek megőrzik a tanuló kognitív munkáját, hogy tartós nyereség (és ne feladathatékonyság) származzon belőle. A [[learning-gains|tanulási nyereséget]] védő tervezési döntések - olyan állványozás, amely megköveteli a diák próbálkozását, [[formative-assessment|formatív értékelés]] segítség nélküli kimenetmérőkkel, és olyan pedagógiai struktúra, amely a tanulót tartja cselekvőként - a terület azon megállapítását tükrözik (lásd [[learning-gains]]), hogy a MI erős nyereség, amikor tanít, és kár, amikor válaszol. Fordítva, a rosszul tervezett, MI-vel integrált órák a [[cognitive-offloading|teljesítmény és tanulás közötti szakadék]] áldozataivá válnak, ahol a látszólagos siker tanulás nélkül takar.

### Gyakorlati útmutatás tervezőknek és fejlesztőknek

Az oktástervezők, kurzusfejlesztők és a MI-támogatott tanulási élményeket építő mérnökök számára a tudásbázis megállapításai cselekvésre alkalmas gyakorlattá fordulnak. Egy határvonalat érdemes megjelölni maguk előtt a gyakorlatok előtt: a tanulástervezés, ahogy ez az oldal leírja, egy kurzus tervezése egy ismert kohorsz számára, míg ugyanezeknek az elveknek a beépítése egy olyan termékbe, amelyet sok kurzus - olyan emberek által tanítva, akikkel a tervező soha nem találkozik - fog használni, az [[educational-technology-developers|oktatástechnológia-fejlesztők]] munkája, ahol az alapértelmezéseknek, a konfigurálhatóságnak és a dokumentációnak pedagógiai súlya van:

**Alapozza a MI-generálást strukturált oktatási modellbe.** A MI-tartalom csak annyira jó, mint a mögötte álló pedagógiai struktúra - a minőséget a kifejezett struktúra határozza meg, nem a MI-gördülékenység. Egy elismert modell köré tervezzen (ADDIE, Dick & Carey, rapid prototyping), és kódolja kifejezetten a pedagógiai döntéseket, ahelyett hogy a modellre bízná azok kikövetkeztetését.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Vegyen át elviszintű keretrendszert is, nem csak oktatási modellt.** Egy kurzusszintű modell egy tervet strukturál; egy publikált keretrendszer azokat a kritériumokat rögzíti, amelyeket sok tervnek teljesítenie kell. Érdemes teljes egészében elolvasni a Digital Promise *Powerful Learning with Emerging Technology* anyagát, amely három elv alá rendezi útmutatását - bizonyítékalapú, tanulóközpontú, készségépítő -, mindegyiket gyakorlatokra és stratégiákra bontva, és az [[privacy|adatvédelmet]], az [[explainable-ai|magyarázhatóságot]] és a méltányosságot egyes gyakorlatokhoz biztonsági kötelezettségként rendeli, nem választható kiegészítésként.([[powerful-learning-with-emerging-technology-2025]])
**A MI konfigurációját a feladathoz igazítsa, ne a kifinomultsághoz.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] négy réteget különböztet meg - prompt, kontextus, keretrendszer (harness) és ellenőrzött hurok -, és a minimálisan elégséges réteg elvét alkalmazza: a legkevésbé összetett, ellenőrizhető eredményre képes konfigurációt használja, mivel a hozzáadott összehangolás koordinációs, ellenőrzési, adatvédelmi és megértési költségeket hoz.

**Használjon szerepalapú, többágenses munkafolyamatokat a tartalom-előállításhoz.** Egyetlen általános prompt helyett szervezzen különálló ágenseket és szerepeket (oktató kar, oktástervező, kurzuskoordinátor), amelyek egy meghatározott folyamaton keresztül működnek együtt - ez tükrözi, hogyan dolgoznak a valódi kurzuscsapatok, és teljesebb anyagokat ad, mint egyetlen prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Oktatási útmutatást adjon, ne csak MI-hozzáférést.** Akár közvetlenül lépnek a tanulók kapcsolatba a MI-vel, akár MI által generált anyagokkal, a tanuláselméletre épülő útmutatás (például a generatív tanulás elvein alapuló lépcsőzetes promptolási [[scaffolding|állvány]]) hajtja a magasabb rendű kimeneteket; a puszta hozzáférés nem. A tanulási tevékenységet az elme tanulásának módja köré tervezze, és a MI-t kognitív „elmeeszközként” kezelje, amely kiterjeszti, nem pedig helyettesíti a gondolkodást.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modellezze a felejtést, és ott ütemezze az ismétlést, ahol a leépülés a legrosszabb.** A G4L az Ebbinghaus-féle felejtési görbével ábrázolja a tudás leépülését, amelyet az eltelt idő és az ismétlések hajtanak, és a leépülésre legérzékenyebb egységeket részesíti előnyben, ahelyett hogy azt szolgálná újra, amit legutóbb pontoztak ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes és Kovács, 2026]]).

Fowlin és mtsai. (2026) egy működési lépést adnak annak eldöntésére, hová lépjen be a MI: bontson fel egy tevékenységet a önállóan legjobban elvégezhető és a MI-vel legjobban összekapcsolható összetevőkre, miközben az oktató ítélete a felosztás középpontjában marad ([[fowlin-operationalizing-learning-principles-ai|Fowlin és mtsai. (2026)]]).

**Tegye a tartalmat nyomon követhetővé és áttekinthetővé.** Engedje, hogy egy emberi tervező átnézze és javítsa a MI-kimenetet, mielőtt az a tanulókhoz ér, és strukturálja a MI-generálást úgy, hogy a pedagógiai indoklás (miért ezt a tartalmat, ebben a sorrendben) vizsgálható legyen - ez egyszerre kezeli a minőséget és azokat az átláthatatlansági aggályokat, amelyek aláássák a [[trust|bizalomra]] épített oktatást.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **A MI által generált médiát a forgatókönyv szakaszában tekintse át, ne a szintézis után.** A PedaCo az oktatói áttekintést a forgatókönyvre teszi - ahol a pedagógiai hibák javítása olcsó -, mielőtt bármit renderelnének; az értékelt oktatási érvényesség 3,07-ről 3,86-ra nőtt, míg az automatizált, szintézis utáni réteg csak két dimenziót javított az ötből ([[ai-video-dual-gatekeeping-2026|Kim, Baek és Kwak (2026)]]).

**Tervezze meg az [[accessibility|akadálymentességet]] a kezdetektől.** Alkalmazza a [[universal-design-for-learning|UDL]] elveit MI-eszközök és MI által generált anyagok építésekor, hogy azok sokféle tanulót szolgáljanak ki, ahelyett hogy utólag szerelné fel az akadálymentességet.([[ludia-udl-ai-thought-partner-2026]])

**Tervezze meg a szállítási médiumot.** Az [[online-teaching-and-learning|online tanításra és tanulásra]] való oktatástervezés nem a személyes tervezés semleges fordítása - a médium megváltoztatja, milyen állványozás, értékelés és interakció életképes, és a MI megsokszorozza mind a lehetőségeket (skálázható [[personalized-learning|személyre szabás]], folyamatos támogatás), mind a kockázatokat ([[academic-integrity|integritás]], [[cognitive-offloading|kognitív tehermentesítés]]), amelyekre a tervezőknek fel kell készülniük. A MI pedagógiai beágyazását éppoly szándékosan tervezze online, mint személyes kontextusban.

**Benchmarkhoz mérjen, ne érzésekhez.** Ha oktatástervezési ágenst épít, mérje standardizált, elméletileg megalapozott benchmarkhoz (például [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), hogy meg tudja mérni, javítja-e valóban a kimenetet egy valódi ISD-keretrendszerbe való megalapozás egy általános LLM-hez képest.([[jeon-isd-agent-bench-2026]])

- **A MI átformálja az oktatástervezési gyakorlatot.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar és Ilgaz (2026)]] [[meta-analysis-systematic-review|szisztematikusan áttekintenek]] 28 tanulmányt (2020-2025), és azt találják, hogy a MI segíti a tervezőket a tartalomgenerálásban, a sablonokban és a személyre szabásban, és munkatársként, együttműködőként vagy partnerként fogalmazzák meg, nem csupán eszközként -, bár a pedagógiai illeszkedés és a gyakorló szakemberek felkészültsége kihívás marad.

- **A dokumentált tevékenység a ciklus egyetlen fázisára összpontosul.** A MI-támogatott oktatástervezés 78 tanulmányának áttekintésében a tervezési fázis tevékenysége **78 tanulmányból 74-ben (95%)** jelenik meg, a fejlesztés 44-ben (56%), míg az elemzés csak 11-ben (14%), az értékelés 10-ben (13%) és a megvalósítás 7-ben (9%) -, és **egyetlen tanulmány sem vizsgálta a MI-támogatást a teljes ADDIE-cikluson át**. A ciklus olyan törekvés, amelyet a bizonyítékbázis nem fed le, és ez mindenkinek számít, akinek „MI-vezérelt kurzusfejlesztést” adnak el végponttól végpontig terjedő képességként ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou és Kameas, 2026]]).
- **Három MI-szerep, hierarchikusan elosztva.** A *generatív* használat - amikor a MI az oktató irányításával tervezési tartalmat állít elő - uralkodik, **a tanulmányok 96%-ában**; az *állványozó* használat, amikor a MI a tervező saját érvelését strukturálja, 35%-ban jelenik meg; az *értékelő* használat, amikor a MI a termék minőségét értékeli, 21%-ban. A terület túlnyomórészt dolgok készítésére használja a MI-t, nem pedig saját tervezési döntéseinek megkérdőjelezésére, ami épp az ellenkezője a kritikus barát konfigurációnak, amelyet az áttekintés pedagógiailag ígéretesként kiemel.

## Gyakori tévhitek

- **„A MI-alapú óravázlattervezés időt ad vissza a tanároknak.”** A tervezési idő valóban csökkent, heti 3,32 óráról 2,51-re az eszközzel, de **a medián tanár az órák csak 21-40%-át tervezte a nulláról**. Időt takarítottak meg, és a tervezés nem lett lényegesen alaposabb - a megtakarítás felhalmozódott, ahelyett hogy újrabefektették volna.
- **„A MI-vel való társtervezés jól alátámasztott.”** A [[wang-teacher-ai-co-design-review-2026|tanár-MI együttműködésben történő tanulásifeladat-tervezés]] szisztematikus áttekintése **megerősíti a mintát nagy léptékben, 28 tanulmányon**, ami egy következetes gyakorlatot ír le, nem pedig felülmúló kimeneteket mutat be.
- **„A rubrika rögzített bemenet.”** A rubrika **közvetítő felületként működik az emberi pedagógiai szándék és a gépi következtetés között**: az értékelési kritériumok **felülvizsgálhatóként** kezelése az, ami lehetővé teszi, hogy az eszköz hordozza az oktató szándékát. Egy rögzített rubrika a gép alapértelmezett keretezését viszi át az értékelésbe.

## Kapcsolódó fogalmak

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagógiai partnerségek
- [[online-teaching-and-learning]] - Online tanítás és tanulás
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - Gyűjtőfogalom: pedagógiák és tanítási stratégiák a MI-oktatásban
- [[stakeholders]] - Gyűjtőfogalom: emberek és közönségek a MI-oktatásban (tanulók, tanárok, tervezők, adminisztrátorok, döntéshozók)

## Kapcsolódó cikkek

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Mért tervezési időmegtakarítás, együtt azzal a megállapítással, hogy a tanárok az órák csak 21-40%-át tervezik a nulláról
- [[powerful-learning-with-emerging-technology-2025]] — Hatékony tanulás feltörekvő technológiával
- [[claassen-learning-analytics-genai-learning-design-2026]] — Tanuláselemzés és generatív MI a tanulástervezési döntéshozatalban
- [[tang-chatbots-learning-design-2026]] — Chatbotok használata a tanulástervezésben: a tervezők az eredményeknél és a pedagógiánál időznek, nem a tartalomgenerálásnál (Tang és mtsai. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Tanár-MI interakciós minták az óravázlattervezésben tapasztalat és MI-jártasság szerint (Choi és mtsai. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — MI a felsőoktatásban: elköteleződés és a tanítási módszerek közvetítő szerepe
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taxonómia (határobjektum) a generatív MI tanulási tevékenységek osztályozására
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — MI-webágensek: autonóm webágens értékeli az óravázlatokat és előre jelzi a diáklemorzsolódást, mielőtt a diákok részt vennének (Wang, Mitchell és Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: keretrendszer a kognitívan aktivált MI-támogatáshoz a fizikában
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Tervezés elérésre: hét kar és a diák egyedül a MI-vel
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Amikor a nemet mondás jobb videókat hoz: kettős kapuőrzés a pedagógiailag megalapozott MI-tartalomkészítésben
- [[rhaimi-productivemath-2025]] — ProductiveMath: MI a produktív kudarc feladattervezésének támogatására
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — MI és oktatástervezési gyakorlat: szisztematikus áttekintés (Kibar és Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Grafikonlapú intelligens tutorálás dinamikus tartományokra (2026)
- [[making-ai-annoying-constrained-writing-2026]] — A MI szándékos idegesítővé tétele: korlátozás a MI-támogatott írásban (Konradt, Boote és Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Okosterem-modell és D-T-E hurok a matematika M.Ed. oktatástervezési jártasságának javítására (Zhu és mtsai. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — MI-vezérelt platform matematikai modellezési feladatok generálására (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Tanár-MI együttműködés a tanulási feladatok tervezésében: irányzatok és perspektívák (Wang és mtsai. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — A szerepek architektúrája a MI által tervezett differenciált csoporttevékenységekben (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — Az LLM-ek mint az iteratív pedagógiai tervezés ágensei
