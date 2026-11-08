---
title: "Tantervtervezés"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/curriculum-design"
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

> **Tantervtervezés** — a tanítás tervezésének és strukturálásának folyamata kurzusokon, programokon és intézményeken át, beleértve a tanulási célokat, a tartalom sorrendjét, az értékelési stratégiákat és a készségek progresszióját. Az MI korszakában a tantervtervezésnek egyensúlyoznia kell az alapvető tudás és a kialakuló MI-kompetenciák között, meghatározva nemcsak azt, mit tanulnak a diákok, hanem azt is, hogyan tanulnak meg MI-eszközökkel dolgozni és azokat kritikusan értékelni.

## Megfontolandó kérdések

- A tantervtervezés azt kérdezi, mit kell a diákoknak program szinten megtanulniuk, míg a tanulástervezés azt, hogyan, kurzus szinten. Amikor az MI átformál egy tudományágat, Ön szerint melyik rétegnek kell előbb változnia?
- Ahogy a [[generative-ai|generatív MI]] automatizálja a megvalósítási szintű munkát, egyesek szerint a tanterveknek a rendszertervezés, az absztrakció és a [[critical-thinking|kritikus értékelés]] felé kell elmozdulniuk. Mit veszítenének Ön szerint a diákok, ha az alacsony szintű készségek háttérbe szorulnának?
- Az MI korszakában a tantervújratervezést gyakran az eszközfolyékonyság és az alapvető tudás közötti egyensúlyként keretezik. Hol látta, hogy ez az egyensúly túl messzire billent valamelyik irányba?
- A SAIL keretrendszer az MI-írástudást életkorokon át vázoltként kezeli, és arra tervezték, hogy a hozzáférésen túli mélyebb „digitális szakadékokat” is kezelje. Miben különbözik az MI-írástudás beágyazása egy teljes tantervbe egyetlen MI-kurzus hozzáadásától?
- Ha most minden tudományágnak be kell ágyaznia az MI-kompetenciákat, ki felelős a tantervi változásért — az oktatók, a programok vagy az intézmények —, és mire van szükségük az oktatóknak, hogy sikerrel járjanak?
- A tanterv készségek éveken át ívelő sorrendje, nem csupán témák listája. Hogyan változtatja meg ez a hosszabb nézet azt, hogy egy „MI-írástudás egység” valóban megragad-e?

## Bevezetés

A tantervtervezés az oktatás *mit* kérdésével foglalkozik program szinten, kiegészítve a [[learning-design|tanulástervezést]], amely a *hogyan* kérdésével foglalkozik kurzus szinten. A tudásbázis cikkei azt vizsgálják, hogyan formálja át az MI a tanterveket tudományágakon át — a szoftverfejlesztéstől az építészetig a zöld oktatásig —, és hogyan terveznek az oktatók olyan tanterveket, amelyek beágyazzák az MI-írástudást a tudományági alapok feláldozása nélkül.

### A kutatás kulcstémái

**A tantervek újratervezése az MI korszakára** a központi kihívás. **[[reshaping-cs-education-genai|Lee és mtsai]]** nemzetközi műhelyek eredményeit szintetizálták az egyetemi [[cs-education|számítástechnika-oktatás]] átalakításáról, amellett érvelve, hogy ahogy a GenAI automatizálja a megvalósítási szintű programozást, a tanterveknek a rendszertervezés, az absztrakció és a kritikus értékelés felé kell elmozdulniuk — miközben háttérbe szorítják az alacsony szintű megvalósítási részleteket. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** önálló tudományágként formalizálta az ügynöki szoftverfejlesztést egy 21 modulos tantervvel, amely a „szándék evolúciójára” és arra a gyakorlói fegyelemre összpontosít, amely az [[agentic-ai|MI-ágensek]] kezeléséhez kell. Mindkettő kapcsolódik az [[ai-literacy|MI-írástudáshoz]] és a [[scaffolding|vázoláshoz]].

A változást rendszerszintűként, nem hozzáadásként vizsgálva [[rewriting-curriculum-genai-pedagogy-2026|Sabani és mtsai. (2026)]] egy [[meta-analysis-systematic-review|áttekintő tanulmányt]], 209 rekord bibliometriai feltérképezését, 36 cikket és tíz akadémiai vezetővel készült interjút háromszögelnek öt elmozdulásba — köztük a tudásátadás helyét átvevő képességfejlesztésbe és a helyi kísérletezés helyét átvevő intézményi irányításba.

**A tantervi feltérképezés és elemzés** MI-t használ a meglévő tantervek megértésére. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng és mtsai]]** 23 tantervi leírást elemeztek MI-támogatott szoftverfejlesztési kurzusokból, közös témákat azonosítva — [[prompt-engineering|prompt-engineering]], kódellenőrzés MI-vel, [[ethics|etikai megfontolások]] —, és olyan tervezési útmutatást vezettek le, amely az eszközfolyékonyság és az alapvető tudás egyensúlyát hangsúlyozza. **[[coursegraph-cs-course-comparison-2026|A CourseGraph]]** számítási módszereket alkalmaz a számítástechnikai kurzusok szerkezetének intézmények közötti összehasonlítására.

A súlyozás megváltoztatja, mit jelent egy tantervelemzés: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath és mtsai. (2026)]] a GPT-o3-mini-vel 100%-ot osztattak szét hét vállalati készség között 48 értékelés mindegyikénél, elérve a 0,81-es Krippendorff-alfát a szakértői súlyokhoz képest, de az egyetértés negatívvá vált azoknál a készségeknél, amelyeket a leírások soha nem neveznek meg expliciten (-0,19).

**A moduláris szerkezet túlél minden aktuális tartalmat.** Visszatérő minta, hogy a terület gyorsabban mozog, mint az átvizsgálási ciklus: stabil mag az [[ai-literacy|MI-írástudásból]], kritikai értékelésből, elfogultságfelismerésből és [[ethics|etikából]], a specialitás és a helyben elérhető eszköztartalom pedig modulokként kapcsolódik hozzá, és hat-tizenkét havonta újra előkerül ([[bursic-ai-residency-education-curriculum-2026|Bursic és mtsai. (2026)]]). A megnevezett eset a posztgraduális [[medical-education|orvosi képzés]], de az elv általánosítható: a program olyan kompetenciákra köteleződik el, amelyek túlélik az eszközváltást, és az eszközspecifikus réteget cserére ütemezi.

**Az MI-írástudás integrálása** MI-kompetenciákat ágyaz be tudományágakon át. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|A SAIL]]** vázolt MI-írástudás-keretrendszert ad, amely minden életkorban és oktatási szakaszban alkalmazható, és a második és harmadik szintű [[digital-divide|digitális szakadékokat]] kezeli. **[[tracing-genai-literacy-interaction-patterns]]** azt vizsgálja, hogyan fejlődik az MI-írástudás interakciós mintázatokon keresztül. **[[hingle-collaborative-ai-literacy-2025]]** az MI-írástudás-tanterv fejlesztésének kollaboratív megközelítéseit tárja fel, kapcsolódva a [[collaborative-learning|kollaboratív tanuláshoz]].

A LearnAI megmutatja, hogyan néz ki a beágyazott változat: egy széles kitettségű réteg rövid előadásokból 18 meglévő kurzusban, öt tudományágban (293 diák), képzett egyetemi diáktutorok által vezetett, önkéntes egyéni társkotrási foglalkozásokkal párosítva, hogy a vegyes képességű tanulók a saját szintjükön találkozzanak az MI-feladatokkal ([[learnai-just-in-time-ai-cocreation-university-2026|Qu és mtsai. (2026)]]).

A gyakorlati integráció lemarad a keretrendszerektől. [[critical-media-literacy-education-2026|Santos-Albardía és mtsai. (2025)]] szerint a megkérdezett oktatási és újságíró szakos hallgatók csupán 13,8%-a mondta, hogy a kurzusai foglalkoztak kritikus médiaelemzéssel, szemben a 97,8%-kal, akik fontosnak értékelték azt, és szakértői interjúik a szakadékot a [[teacher-education|tanárképzésre]] vezették vissza, amely a technikai és tanítási készségeket helyezi a médiaoktatás elé.

Egy 39 STEAM-tanulmányt (2016–2025) áttekintő PRISMA-vizsgálat párhuzamos egyensúlytalanságot talált az MI-írástudás elemeiben: a megvalósítások technikai írástudásokat fejlesztettek — alapvető MI-fogalmakat, [[computational-thinking|komputációs gondolkodást]], [[statistics-and-data-science-education|adatműveltséget]] —, miközben alulfejlesztették az etikai tudatosságot, a kreatív képzelőerőt és az MI-vel való alkotást, kezelést és tervezést, így a gyakorlati válasz az, hogy minden egységet ezekhez mérünk ([[niri-steam-ai-literacy-review-2026|Niri és mtsai., 2026]]).

[[student-experience|A diákok hangja]] egy másik tervezési bemenet: 166 végzős üzleti hallgató 84%-a szerette volna, ha a GenAI-t a saját egységeiben tanítják, és 85% a foglalkoztathatóság szempontjából lényegesnek látta, míg csak 7% tanult róla az egyetemén ([[rook-plumb-genai-curricula-student-insights-2026|Rook és Plumb (2026)]]).

Egy 42 tanulmányt áttekintő, egyetem előtti [[ai-education|MI-oktatásról]] szóló vizsgálat szerint a tantervek a technikai tartalomtól a kompetenciaalapú modellek felé mozdulnak, amelyek olyan keretrendszerekre épülnek, mint az AI4K12 és a Five Big Ideas in AI, az [[ai-literacy|MI-írástudást]] tantárgyakon átívelő kompetenciaként kezelve, miközben az értékelésére szolgáló standardizált műszerek továbbra is hiányoznak ([[caruana-pre-university-ai-education-slr-2026|Caruana és mtsai. (2026)]]).

Az oktatók és a munkáltatók 26 MI-készség közül csak egynek a fontosságában értettek egyet — a reális várakozások megfogalmazásában az MI-vel támogatott munkára —, és a 26-ból csak hármat tanított az oktatók fele vagy több, ami a jelentés bizonyítéka a felsőoktatás és a munkáltatók közötti MI-készségszakadékra ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

A K-12-es gépi tanulási tevékenységek tervezése a felszínen marad: az ICE-T keretrendszer mögötti áttekintés szerint a láthatatlan használat, a gombinterakció és a modelltelepítés teszi ki a kódolt felügyelt tanulási tevékenységek csaknem 60%-át, a nyílt végű alkotás csak kétszer jelent meg, és a technikai és társadalmi nézőpont csak a tevékenységek mintegy 3%-ában jelent meg együtt ([[icet-ml-education-trust-2026|Haritz és mtsai., 2026]]).

**[[discipline-specific-aied|Tudományágspecifikus]] tantervi innováció** a tantervtervezést konkrét területekre alkalmazza. **[[genai-architecture-education]]** azt vizsgálja, hogyan formálja át a generatív MI az építészeti tervezés [[pedagogy|pedagógiáját]]. **[[talebzadeh-ai-green-education-2026]]** az MI integrációját vizsgálja a zöld oktatás tanterveiben. **[[connected-ai-lesson-planning-vietnam]]** és **[[llm-cultural-relevance-k12]]** a [[culturally-relevant-pedagogy|kulturálisan érzékeny tantervtervezést]] tárgyalja.

**Ágyazza az MI-t a tudományágba, ne mellé.** Egy háromszintű (bevezető, alkalmazási, haladó) MI-tanterv a [[machine-learning|gépi tanulást]] a meglévő hőtechnikai témákba hajtogatta egy 39,1 órás kurzuson belül, ahelyett hogy számítástechnikai választható tárgyakat adott volna hozzá, elkerülve a gépészmérnök-hallgatók többletterhelését, és nyíltan közzétéve a tantervi leírást, az adatokat és a kódot ([[mechanical-engineering-ai-curriculum-2026|Li és mtsai. (2026)]]).

Egy újságírói eset az értékek-először változatot mutatja: egy hármas érték–folyamat–kompetencia váz a diákokat a csak emberi riporttól az MI-integrált munkáig mozdította, mégis 9-ből 8-an (89%) számoltak be bizalomról az etikai döntésekben, miközben a szerzőségre és elfogultságra vonatkozó felmérési tételek csak felszínes megértésre utaltak ([[ying-genai-journalism-assessment-2026|Ngu és Weller (2026)]]).

**[[governance|Intézményi]] keretrendszerek** a tantervi változást léptékben kezelik. **[[finkelstein-principled-ai-education-2025]]** és **[[finkelstein-principled-ai-education-2025]]** elveket adnak az MI oktatási programokba való integrálásához. **[[ai-adoption-training-public-sector]]** az MI-tantervek közszférabeli oktatásban való elfogadásának akadályait vizsgálja.

**Az MI szekvenálása a programon át.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli és mtsai]] egy „visszatartás, majd felerősítés” keretrendszert javasolnak, amely program szinten szekvenálja a generatív MI-t: tartsuk vissza a generatív eszközt, amíg egy képesség formálódik, majd állítsuk vissza, hogy felerősítse azt a képességet, amint a diák képes irányítani és megítélni annak hozadékát. A formálás kontra tehermentesítés kritériuma vezérli (hogy egy munkaszakasz képességet épít-e, vagy csupán átvezeti az eszközön), és a keretrendszer a tantervtervezést a [[cognitive-offloading|kognitív tehermentesítéshez]], az [[self-regulated-learning|önszabályozó tanuláshoz]] és az [[academic-integrity|akadémiai integritáshoz]] kapcsolja, nehezen hamisítható ellenőrzőpontokkal minden visszatartás–felerősítés csuklópontnál.

A legmagasabb szintek karja nem több kurzus: 89 szponzorált záróprojekt során a [[career-development-and-readiness|munkaerő-felkészültségi]] 6. szintről a 7. szintre való lépést az iparba ágyazott tapasztalat korlátozta — co-op programok és Manufacturing Extension Partnership projektek —, tehát a diplomáknak munkaintegrált tanulásra van szükségük, nem még egy technikai választható tárgyra ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith és mtsai. (2026)]]).

A modellképesség tantervi szintű következménye, hogy az MI-ellenálló tervezés lejár. Számítástechnikai oktatók arról számoltak be, hogy a feladatokat ahhoz kalibrálták, amit a modellek még nem tudtak megtenni, és figyelték, ahogy a kalibráció elévül — egy kiberbiztonsági oktató feladatai hét-nyolc hónappal korábban valódi [[problem-solving|problémamegoldást]] igényeltek, majd egyszerűen megoldódtak —, egy facilitátor pedig körülbelül egy szemeszterre becsülte a szavatossági időt. A műhely strukturális megállapítása, hogy szinte minden adaptációt egyéni oktató végzett egyetlen kurzuson belül, anélkül az intézményi koordináció nélkül, amelyet egy tartós tantervi válasz megkövetelne ([[computing-assessment-genai-workshop-report-2026|Akbar és mtsai., 2026]]).

**Teljes kurzusra kiterjedő összehangolás, amikor a generatív MI engedélyezett.** Egy 2026-os újratervezés egy bevezető atom- és részecskefizikai [[physics-education|fizika]] kurzuson ([[ai-particle-physics-education-redesign-2026|Mikhasenko és mtsai]]) három, eltérő szerepű tevékenységtípust integrált — előadások a fogalmakhoz és a jelöléshez, gyakorlatok a szokásos analitikus gyakorláshoz, és házi feladat mint feltáró, „kutatás alakú” komponens, szokatlanul nehéz, több módszeres problémákkal. A jelentett súrlódás (be nem jelentett programozási előfeltétel, elégtelen idő a megértésre, nem csupán válaszok megszerzésére, és az előadások, gyakorlatok, házi feladat és [[summative-assessment|vizsga]] közötti összehangolatlanság) szemlélteti, hogy a generatív MI engedélyezése az egész kurzusra kiterjedő összehangolási munkát kényszerít ki, nem egyetlen feladattípus megváltoztatását; javasolt szerkezetük az MI-engedélyezett feltáró munkát bónuszos haladó feladatként tartja meg, míg a jegyet a segítség nélküli írásbeli vizsga határozza meg.

**Az összehangolás mélysége, nem a használat gyakorisága választja el az integrációs mintázatokat.** 17 üzleti modul-eset közül hat ágyazta be a GenAI-t rendszeresen a tanításba, a tanulásba és az értékelésbe (konstruktív), kilenc következetlenül (vegyes), kettő pedig szórványosan (eseti); a konstruktív esetek jelentették a legerősebb elköteleződési, képesség- és tantervi relevanciaeredményeket ([[zhou-constructive-alignment-genai-business-2026|Zhou és mtsai. (2026)]]).

**A konstruktív összehangolás tanácsa kritikus vizsgálat alatt.** Ahol a fenti források a gyakorlatban való összehangolásról számolnak be, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes és mtsai. (2026)]] magát az útmutatást olvassák diskurzusként. [[qualitative-research|Kritikus diskurzuselemzésük]] 14 szürke irodalmi darabot vizsgált, amelyeket 2022 novembere és 2025 áprilisa között publikáltak — többnyire intézményi oldalakat és központilag pozicionált [[educational-development|tanulási és tanítási egységek]] fejezeteit —, és a konstruktív összehangolást hatékonysági problémaként bemutatva találták: a generatív MI „hatékony és eredményes módja a rubrikák megfogalmazásának” volt, amely „áramvonalasíthatja a folyamatot”, antropomorfizálva „oktatási szakértőként és asszisztensként”, „edzőpartnerként” vagy „intelligens asszisztensként a tanítási tervezésben”, miközben az akadémiai munkatársak csak „tantárgyi szakértelmet” adtak, és az eszköz vállalta „a tanulási célok kidolgozásának, a kurzustartalom szervezésének ... és a kurzuselemek összehangolásának nehéz munkáját”. A másolható prompt-receptek és számozott sablonok a konstruktív összehangolást standardizálható termékként keretezték, három kudarcmódot eredményezve: performativitás (összehangolás, amely csak összehangoltnak látszik), a helyhez kötött és kritikai kontextus törlése, valamint sekély összehangolás, amely összemossa az összehangolást a konstruktív dimenzióval. Orvosságuk újraszekvenálja a tantervtervezési munkafolyamatot — az oktatóknak elég jól kell érteniük a konstruktív összehangolást ahhoz, hogy irányítsák, értékeljék és elutasítsák az MI-kimenetet, mielőtt annak bármely részét delegálnák —, és bármely eszközt egy intézményi, helyi szabályzatra, rubrikákra és végzetti attribútumokra alapozott [[rag|visszakeresés-augmentált]] ágensre korlátoznak, „liminális tutori” szerepkörrel, amely kiterjeszti, nem helyettesíti a [[educational-development|fejlesztői]] kapcsolatot.

**Tantervhez illeszkedő modellezési feladatok generálása.** Az MI-vezérelt platformok kezelhetik a tanárok idő- és erőforráshiányát a jó minőségű [[math-education|matematikai modellezési]] feladatok tervezésében azzal, hogy tantervhez illeszkedő problémákat és pedagógiai ajánlásokat generálnak tervezési elvekre és [[rag|visszakeresés-augmentált]] generálásra alapozva — egy megközelítés, amelyet a középiskolai matematika direkt variációjával szemléltetnek ([[ai-modeling-problem-generation-platform-2026]]). A kurzusolvasmányok maguk is generálási célponttá váltak: Sidorkin (2026) egy kereskedelmi tankönyvet heti MI-generált olvasmányokkal helyettesített egy végzős oktatásvezetési kurzuson, és bár a diákok hasznosnak értékelték őket, és 75 százalékuk egyetértett abban, hogy többet tanult, mint egy hasonló kurzuson, a 4 487 oldal napló mindössze az oldalak mintegy 0,80 százalékán hordozott APA-stílusú szövegközi hivatkozásokat, és az oldalak nagyjából 1,03 százalékán párosított egy megnevezett egyetemi kampuszt vagy rendszert állító szakpolitikai állításokkal ellenőrizhető forrás nélkül. A tantervi anyagok tanulsága, hogy a generált olvasmányokat az oktatói felülvizsgálat alatti piszkozattermelésként kezeljük, tervezzünk az oktatói munka prompttervezésre és ellenőrzésre fordított költségére, és válogatott, ellenőrzött forrásokat építsünk az asszisztensbe, ahelyett hogy a források minőségét a diákokra hagynánk kontextusból kikövetkeztetni.

**MI-támogatott tanóra-tervezés a tantervből az osztályterembe lépés szintjén.** Ahol a tanterv tanított óránná válik, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo és Tahir (2025)]] kísérletileg hasonlították össze a tanár által készített és a ChatGPT-támogatott terveket gyermekek [[stem-education|STEAM]] [[arts-design-and-media-education|művészeti nevelésében]], és azt találták, hogy az MI-támogatott terveket hat szakértő professzor szignifikánsan magasabbra értékelte (medián 20,5 vs. 17,6, p = .002, nagy hatás). Megmutatják, hogy a haszon attól függ, hogyan delegál a tanár: a javasolt módszer egy önállóan felvázolt óra tartalmi hiányait tölti ki (megőrizve a tanár tervezési [[agency|önállóságát]]), nem a teljes tervet delegálja. Egy Szerep–Utasítások–Végcél prompt-sablont is adnak a reprodukálható, minőség-ellenőrzött generáláshoz — bizonyíték arra, hogy az MI-tanóra-tervezés akkor a legerősebb, ha a tanár tantervi döntésein belül van beágyazva, nem azokat helyettesíti. A természettudományos oktatásban a szakértői validáció párhuzamos ítéletre jut a platformtervezésről: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli és Yildirim (2026)]] tizenegy [[science-education|természettudományos oktatási]] szakértővel értékeltette a ChatGPT-4-et és egy oktatásfókuszú eszközt (Teacher's Buddy) Törökország átdolgozott tantervéhez és az Engineering [[design-based-research|Design-Based]] Learning modellhez igazított hatodik osztályos terveken. Az oktatásfókuszú platform mind a nyolc minőségi kritériumon magasabban pontozott — beleértve a visszajelzésigényes szakaszokat és a tantervi illeszkedést —, ami bizonyíték arra, hogy a pedagógiai szerkezet MI-be ágyazása jobban illeszkedő kimenetet ad. Mégis néhány szakértő továbbra is az általános célú tervet részesítette előnyben erősebb társas-érzelmi hangsúlya miatt, és 11-ből 7 „javítással alkalmazhatónak” ítélte a terveket, nem közvetlenül használhatónak. A platformválasztás és a prompt-keretezés, nem csupán maga az MI alakítja, mennyire illeszkednek a generált tervek a tantervi standardokhoz és folyamatmodellekhez.

A szerkezet, nem a prompt megfogalmazása az, ami megbízhatóvá teszi az MI-piszkozatkészítést a termelésben: [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] Curriculum-as-Code csővezetéke agresszíven ritkította a kontextust, és szakaszonként generálta az anyagokat 28 projektkontextusban, ami az oktatói felkészülési időt utasításonként nagyjából nyolc óráról két órára csökkentette, és nem hagyott fogalmi vagy matematikai [[hallucination-risk|hallucinációt]], amelyet a [[human-in-the-loop-ai|emberi felülvizsgálatnak]] el kellett volna kapnia.

### Kapcsolódás a rokon fogalmakhoz

A tantervtervezés közvetlenül kapcsolódik a [[learning-design|tanulástervezéshez]] — a tanterv meghatározza a mit, az oktatás a hogyant. Kapcsolódik az [[ai-literacy|MI-írástudáshoz]], mert az MI-kompetenciák beágyazása elsődleges tantervi kihívás, a [[teacher-role|tanításhoz]] és az [[educational-development|oktatásfejlesztéshez]], mert a tantervi változás oktatói felkészülést igényel, és a [[scaffolding|vázoláshoz]], mert a jól tervezett tantervek a készségfejlődést kurzusokon és éveken át vázolják. A [[higher-ed|felsőoktatási]] és [[k-12|K-12]] kapcsolatok a tantervtervezés oktatási szinteken átnyúló relevanciáját tükrözik.

**Egy MI-írástudás-keretrendszer választása olyan szókincs választása, amelyet senki nem vetett össze.** 50 K-12 keretrendszert áttekintő vizsgálatban [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach és mtsai. (2026)]] a kompetenciadefiníciókat a kognitív, affektív, viselkedési, etikai és társadalmi dimenziók felé konvergálva találták, miközben a címkék és értelemzők nem igazodtak egymáshoz. Csak az ABCE keretrendszer közelített egy közös mérési hagyományhoz, Hongkongban, Sanghajban és Tajvanon validálva, és az évfolyamok közötti haladást többször javasolták, de sehol nem tesztelték.

## Gyakori tévhitek

- **„Egy [[llm|LLM]] nagy megbízhatósággal validálva egyszer feltérképezhet egy tantervet.”** A GPT-o3-mini **100%-ot osztott szét hét vállalati készség között 48 értékelés mindegyikénél**, elérve a **0,81-es Krippendorff-alfát** a szakértői súlyokhoz képest — és az **egyetértés** bizonyos készségeknél megbomlott. A magas összesített megbízhatóság egyenetlen egyetértéssel az a mintázat, amelyet a feltérképezés megbízása előtt ellenőrizni kell.
- **„Az MI-írástudás beágyazása egy kurzus hozzáadását jelenti.”** A LearnAI a beágyazott formát mutatja: **széles kitettségű réteg rövid előadásokból 18 meglévő kurzusban, öt tudományágban (293 diák)**. A kitettség a tanterven oszlott el, nem egy egységbe gyűlt.
- **„A diákok már képesek kritikusan értékelni a médiát.”** A megkérdezett oktatási és újságíró szakos hallgatók csupán **13,8%-a** mondta, hogy a kurzusai foglalkoztak kritikus médiaelemzéssel, szemben a **97,8%-kal, akik fontosnak értékelték**. A készség értékelése és megtanítása közötti szakadék a tantervi nyílás.

## Kapcsolódó fogalmak
- [[pedagogical-partnerships]] — Pedagógiai partnerségek
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Ernyő: pedagógiák és tanítási stratégiák az MI-oktatásban
- [[recommender-systems-and-learning-paths]]

## Kapcsolódó cikkek
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Súlyozott, szakértőkkel validált készségfeltérképezés akkreditációhoz
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — A GenAI konstruktív összehangolásra vonatkozó útmutatásának kritikus diskurzuselemzése (McInnes és mtsai. 2026)
- [[icet-ml-education-trust-2026]] — A bizalom kezelése az MI-rendszerekben az oktatáson keresztül: didaktikai nézőpont
- [[refrain-amplify-genai-curriculum-2026]] — Visszatartás–majd–felerősítés tantervi keretrendszer a GenAI szekvenálásához (Torres-Sahli és mtsai. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Projektalapú MI-oktatási tanterv a hőtechnikában
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Munkaerő-felkészültségi szint keretrendszer az intelligens gyártáshoz az MI korszakában
- [[rewriting-curriculum-genai-pedagogy-2026]] — A tanterv újraírása: GenAI-vezérelt pedagógiai változás
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — MI-készségkeretrendszer: 26 értékelhető készség a tantervi feltérképezéshez
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: just-in-time MI-társkotrás tudományágakon át
- [[ai-video-dual-gatekeeping-2026]] — Amikor a nem mondása jobb videókat ad: kettős kapuőrzés a pedagógiailag megalapozott MI-tartalomkészítéshez
- [[niri-steam-ai-literacy-review-2026]] — STEAM-oktatás az MI-írástudásért: szisztematikus áttekintés
- [[caruana-pre-university-ai-education-slr-2026]] — A tanulók és tanárok felkészítése egy MI-vezérelt jövőre: az egyetem előtti MI-oktatás szisztematikus áttekintése (Caruana és mtsai. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — MI-vezérelt platform matematikai modellezési feladatok generálásához (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — MI a részecskefizika-oktatásban: kutatási problémák és alapkészségek
- [[computing-assessment-genai-workshop-report-2026]] — Az MI meg tudja csinálni a házi feladatodat. És most? Beszámoló egy online műhelyről a számítástechnikai értékelésről a generatív MI korában
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - a kompetenciakeretrendszerek öt dimenzióra konvergálnak közös szókincs és összevetés nélkül
- [[bursic-ai-residency-education-curriculum-2026]] — Az MI rezidensképzési tantervekbe való integrálásának akadályai: kvalitatív interjúk tizenkét orvosvezetővel
