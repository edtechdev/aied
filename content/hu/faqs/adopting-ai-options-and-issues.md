---
title: "Milyen lehetőségeket és szempontokat kell mérlegelni az MI-eszközök bevezetésekor?"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-12T17:10:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Egy tanszékvezetőnek három ajánlata van egy [[intelligent-tutoring|MI-alapú tutoráló]] platformra, és pénteki határidővel. Egy [[teacher-role|tanár]] ingyenes eszközt akar használni, amelyet a kollégák fele már használ. Egy informatikai igazgatót arról kérdeznek, hogy az intézménynek saját modellt kellene-e üzemeltetnie, és nem tudja megmondani, mennyibe kerülne.

Ez ugyanaz a kérdés három magasságban. A lehetőségek kevesebben vannak, mint amit egy beszállítói lista sugall, és a problémák tovább tartanak, mint bármelyik termék.

A választásnak az előtted álló döntéshez kell illeszkednie. Egy személy eldönti, mit tesz be egy eszközbe. Egy intézmény eldönti, ki melyik modellt használhatja, milyen adatokon, milyen költséggel, és ki felel, ha valami rosszul sül el. A legtöbb rossz bevezetési döntés abból fakad, hogy az intézményi kérdésre egyéni eszközzel válaszolnak.

## A rövid változat

Öt szabály a legtöbbet lefedi. Először az adathatárt rendezd, mert minden más újratárgyalható, ez nem. Válaszd a legkisebb illeszkedő formát: ingyenes vagy kiszervezett eszközök kísérleti projekthez, hosztolt platform, ha adatkontroll kell GPU-k nélkül, átjáró (gateway), ha kvótákra és útválasztásra van szükség, és saját inferencia csak akkor, ha a másik három csődöt mond. Hasonlítsd össze a felhasználónkénti és a fogyasztásalapú árazást a saját számaiddal, mert a használat nagy része általában néhány intenzív felhasználótól származik. Tedd a jóváhagyott utat gyorsabbá a nem jóváhagyottnál, mert az EDUCAUSE szerint a munkatársak és oktatók 94%-a használ MI-t a munkájában, 54% ismeri a szabályzatot, és 56% olyan eszközöket használ, amelyeket az intézmény nem biztosít. Aztán előre döntsd el, milyen bizonyíték késztetne leállásra, mert a kilépési teszt nélküli bevezetés alapértelmezés szerint véglegessé válik.

## Egyéni szinten

Az oktató vagy a diák előbb adatdöntést hoz, aztán tanítási döntést. A diáknevek, az IEP-részletek, a fegyelmi feljegyzések és a nem publikált kutatás teremtik a felelősséget, ezért először anonimizálj, és ellenőrizd, hogy az eszköz így is elvégzi-e a feladatát. Aztán olvasd el a feltételeket: a megőrzés, a bevitt adatokon való betanítás és az alvállalkozók általában egy olyan dokumentumban vannak, amelyet senki nem nyit meg, és ha a válasz öt perc alatt nem található meg, kezeld ismeretlenként.

Tudd, miben jó az eszköz. A generált szöveg a legerősebb vázlatírásban, átszerkezetésben és összefoglalásban, a leggyengébb aritmetikában, hivatkozásokban és mindenben, ami friss tényeket igényel. Azt is tudd, mibe kerül. Az ingyenes csomag azért ingyenes, mert a használat a termék, vagy mert a csomag változni fog, és mindkettő ok arra, hogy tartsd szem előtt a kilépést.

Két kérdés marad. Ki mást érint, mert egy kurzust átformáló eszköz az abban részt vevő diákok döntése. És hogy engedélyezett-e: olvasd el egyszer a szabályzatot, ha van; ha nincs, a [[shadow-ai]] bizonyítékai arra utalnak, hogy már most is alapértelmezés szerint szabályzatot alkotsz.

A nyers heurisztika: használd a jóváhagyott eszközt, ha elérhető, ha pedig nem, írd le, mit tettél és miért. Ez a feljegyzés véd meg, ha a döntést később megkérdőjelezik.

## Intézményi szinten

Egy intézmény egyetlen vásárlással szolgáltatást, adatfolyamot, támogatási kötelezettséget és politikai elköteleződést vesz. A valódi választék hat formából áll, és a legtöbb intézmény ezek közül kettőben vagy háromban van anélkül, hogy tudná.

A legkönnyebb kezdet egy ingyenes, kiszervezett eszköz. A Contact North AI Tutor Proja nem igényel fiókot, a Playlab pedig lehetővé teszi, hogy az oktatók a saját [[curriculum-design|tantervükre]] épülő alkalmazásokat építsenek, miközben a beszállító hosztolja a modelleket. Mindkettő jó kísérleti projekthez és gyenge végleges megoldásként: nincs auditnyom, nincs kvótakontroll, és a feltételek változhatnak.

Licencek vásárlása egy kereskedelmi bérlőn – akár [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot vagy Google Gemini for Education – gyors beszerzést, SSO-t és adminisztrátori konzolt hoz, a modellválasztást és a megőrzést pedig a beszállítónál hagyja.

Az általad hosztolt platform közelebb tartja az adatokat. Az [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) a saját AWS-fiókodba települ, és a Vanderbilt kísérleti projektje körülbelül \$3/felhasználó/hónap költséget jelentett 1 300 felhasználónál, akiknek a fele \$1 alatt fogyasztott tokenből. Ez adatkontrollt ad GPU-k nélkül.

Egy átjáró több beszállító előtt egyetlen bejáratot teremt. Kvótákat, SSO-t, naplózást és regionális útválasztást hordoz; a Fontys 300 felhasználóra üzemeltetett egyet havi \$500-os plafon alatt, amelyet soha nem léptek túl, a [MindRouter](/aied/resources/mindrouter/) pedig szerepkör szerint súlyozott ütemezést és energiafogyasztás-mérést ad hozzá.

A saját inferencia a legdrágább és a legfüggetlenebb forma. A Purdue két szolgáltatása több mint 1000 felhasználót ért el 10+ [[open-source]] modellen, nagyjából \$100,000 hardverért, a személyzet előtt. Egy szabályozónak úgy felel, hogy nem kér engedélyt egy beszállítótól.

Az utolsó forma az MI a már futtatott eszközökben: egy Moodle-kérdéstípus, egy vitafórumplatform MI-partnere, egy esszé-visszajelző eszköz. Kis ráfordítás és kurzusonkénti változás, kevés tanulással a központban.

## A problémák, amelyek nem tűnnek el

[[privacy|Az adatvédelem]] az első. Az számít, milyen nyilvántartás létezik most, amely korábban nem, hol található, és ki tudja lekérni. Egy eszköz, amely osztálynévsort kap, intézményi nyilvántartást hozott létre, bármit mond a szerződés.

Az identitás és a hozzáférés következik. Mindennek, amit nagy léptékben használnak, SSO, szerepkör-alapú hozzáférés és offboarding kell, és egy eszköz, amely nem tud letiltani egy távozó munkatársat, egy állandó fiókot hagy hátra a te adataiddal.

A költségek attól függnek, hogyan számolják az árat. A felhasználónkénti árazás a létszámot jutalmazza, a fogyasztásalapú a használatot. Mivel a felhasználók kis része termeli a tokenek nagy részét, a felhasználónkénti ár olcsónak tűnik, amíg az intenzív felhasználók máshová nem mennek.

A mérés általában a hiányzó elem. Az EDUCAUSE szerint 92%-nak van munkához kötődő MI-stratégiája, és 13% méri a megtérülést. Ha nem tudod megmondani, mit váltott fel az eszköz, nem tudod megvédeni a megújítást.

[[equity-in-ai-education|A méltányosság]] és az akadálymentesség a beszerzésbe tartozik, nem egy későbbi javításba. Egy eszköz, amely gyors kapcsolatot, fizetős csomagot vagy angol nyelvtudást igényel, egyenetlenül osztja el a hasznát.

[[academic-integrity|A tanulmányi integritás]] megváltoztatja, mit mér az értékelés. Amikor egy eszköz el tudja készíteni a feladatot, a feladatot kell átdolgozni.

A személyzet és a beszállítótól való függés ugyanolyan fontos, mint az ár. A fenti formák mindegyike az ingyenes kivételével gazdát igényel, és a szokásos hiba a negyedik vagy ötödik forma megvásárlása és olyasvalakire bízása, aki már amúgy is elfoglalt volt. Kérdezd meg, mi történik a megújításkor, egy árváltozáskor és egy modell kivezetésekor; az átjáróformák azért léteznek, hogy a válasz útvonalváltás legyen, ne migráció.

## Milyen egy jó első év

Válassz két vagy három mérőszámot, mielőtt bármi elindul: ki használta, mire, mennyibe került aktív felhasználónként, és mi változott a munkában. Egy kísérleti projekt, amely nem tudja ezeket a számokat produkálni, egy költségvetéssel rendelkező bemutató.

Ugyanakkor ellenőrizd a határfeltételeket. Ha az eszköz diáknyilvántartásokat érintett, az adatfolyam megfelelt annak, amit az adatvédelmi irodának mondtál? Ha a használat mérés nélkül maradt, azért volt, mert az eszköz nem tudott jelenteni, vagy mert senki nem kérdezte?

Tartsd rövidnek a jóváhagyott utat. Az EDUCAUSE-számok arra utalnak, hogy az emberek azért kerülik meg az irányítást, mert a jóváhagyott útvonal tovább tart, mint a feladat. Egy modellkártyával és aznapi hozzáféréssel rendelkező átjáró ugyanannyira irányítási eszköz, mint IT-kényelem.

## Gyakori hibák

Platformot vásárolni a probléma megnevezése előtt használati statisztikákat és kevés mást eredményez. Az ingyenességet stratégiaként kezelni kísérleti projektnél működik, infrastruktúraként megbukik. Egy helyi modell megváltoztatja, kit lehet beidézni; nem dönti el, hogy megőrzik-e a promptokat. Az elégedettség mérése a hatás helyett „a tanároknak tetszett”-ből olyan megállapítást csinál, ami nem az. És egy működő út nélkül közzétett szabályzat preferenciákat ír le, nem szabályokat.
