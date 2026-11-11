---
title: "SAMR-modell"
created: "2026-09-10T09:50:00-04:00"
type: concept
foundations: [educational-development, learning-design, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/samr-model"
source_updated: "2026-11-02T09:55:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
pedagogy: [tpack]
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

> **A SAMR-modell** — Ruben Puentedura által kidolgozott technológiaintegrációs keretrendszer, amely négy szinten osztályozza, milyen mértékben alakítja át egy technológia a tanulást: **Substitution (helyettesítés), Augmentation (kiegészítés), Modification (módosítás) és Redefinition (újradefiniálás)**. Az alsó két szint (Substitution, Augmentation) *fokoz* egy meglévő feladatot — a technológia azt teszi, amit korábban is tettek, csak jobban vagy kényelmesebben; a felső kettő (Modification, Redefinition) *átalakítja* — maga a feladat változik valamivé, ami korábban nem volt lehetséges. Az [[ai-education|MI-oktatásban]] a SAMR az a standard lencse, amellyel azt kérdezzük meg, vajon a [[generative-ai|generatív MI]] a meglévő gyakorlat fokozatos javítására szolgál-e, vagy a tanulás újragondolására, és a [[tpack|TPACK]] mellett áll, mint annak leírása, hogyan integrálják a tanárok a technológiát, nem pedig hogy miért fogadják el azt.

## Megfontolandó kérdések

- Amikor egy kurzusba MI kerül, a Substitution (egy [[conversational-ai|chatbot]] lecserél egy keresőmezőt) vagy Redefinition (olyan feladat válik lehetővé, ami korábban nem)? Mi határozza meg, melyik szint a megfelelő — és mindig az átalakítás-e a cél?
- A SAMR és a [[technology-acceptance-model|technológiaelfogadási modellek]] más kérdésre válaszolnak: az elfogadáselmélet azt kérdezi, *miért* fogad el egy tanár vagy intézmény egy eszközt; a SAMR azt, hogy *milyen mélyen* változtatja meg az eszköz a tanulást. Melyik kérdésre válaszol valójában egy adott MI-integrációs tanulmány?
- Egy [[meta-analysis-systematic-review|szisztematikus áttekintés]] az MI [[higher-ed|felsőoktatási]] integrációjáról azt találta, hogy a legtöbb felhasználás a Substitution vagy az Augmentation szinten állt, és csak egyetlen tanulmány közelítette a Redefinitiont. Ha ez jellemző, mit sugall az MI lehetőségei és osztálytermi valósága közötti szakadékról?
- A SAMR-t gyakran emlegetik a [[teacher-education|tanárképzés]] [[educational-development|szakmai fejlesztésében]], hogy segítsen a nevelőknek megtervezni a technológiahasználatot. Megváltoztatja-e egy óra SAMR-szintjének besorolása azt, amit a tanár ténylegesen tesz, vagy ez főként leíró címke?
- A kritikusok szerint a SAMR — akárcsak a [[tpack|TPACK]] — olyan humanista ontológián nyugszik, amely a kogníciót a technológia által változatlannak tekinti, és semmit nem mond a hatalomról, az adattulajdonról vagy az esélyegyenlőségről. Elégséges-e az integráció szintjére vonatkozó lencse, vagy az MI korszakának integrációja kritikusabb keretet igényel?

## Bevezetés

A SAMR a tanulási feladatok technológiai átalakulásának mélységét írja le. Négy szintje a fokozástól az átalakításig tartó emelkedő skálát alkot: **Substitution** (az eszköz egy másikat helyettesít funkcionális változás nélkül — chatbot egy keresőmotor helyett), **Augmentation** (az eszköz helyettesít és javít — a szövegszerkesztő helyesírás-ellenőrzője az írógéphez képest), **Modification** (a feladat jelentősen újraterveződik — a diákok valós időben dolgoznak együtt egy közös, MI által generált piszkozaton), és **Redefinition** (korábban elképzelhetetlen új feladatok válnak lehetővé — a tanulók olyan módon alkotnak együtt egy generatív modellel, aminek nincs MI nélküli megfelelője). A modellt széles körben használják az [[ai-technologies|oktatástechnológiai]] [[research-methods-aied|kutatásban]] és a [[educational-development|tanári szakmai fejlesztésben]] a technológiaintegráció tervezésének és értékelésének szókészleteként, és a [[tpack|TPACK]] mellett a [[technology-acceptance-model|technológiaelfogadási]] keretrendszerek szokásos társa — jóllehet más kérdésre válaszol, mint bármelyikük.

## Mit jelentenek a négy szint

- **Fokozás (alsó fele):** a Substitution és az Augmentation javít egy meglévő feladatot anélkül, hogy megváltoztatná a természetét. A rutinszerű MI-használat nagy része — [[automated-question-generation|kérdésgenerálás]], gyors szövegalkotás, összefoglalás — itt helyezkedik el: gyorsabb és kényelmesebb, de nem változtatja meg azt, amit a tanulótól kérnek.
- **Átalakítás (felső fele):** a Modification és a Redefinition magát a feladatot változtatja meg. A [[vibe-coding|vibe coding]], a valós idejű közös konstrukció egy modellel és az adaptív interaktív párbeszéd olyan feladatok, amelyek a generatív MI előtt nem voltak lehetségesek, és a skála átalakító végpontját képviselik.

A SAMR-t gyakran párosítják az [[icap-framework|ICAP-keretrendszerrel]], mert a kettő illeszkedik: a [[thermomix-genai-education-analogy-2026|Rummel, Nachtigall és Panadero (2026)]] négy, a főzéstől a tanulásig vezető forgatókönyve az ICAP [[student-engagement|elköteleződési]] módjait képezi le a SAMR szintjeire — az ICAP *Passive* a SAMR *Substitution* szintjére, az *Active* az *Augmentation* szintjére, a *Constructive* a *Modification* szintjére, az *Interactive* pedig a *Redefinition* szintjére —, ezzel a passzív delegálástól az interaktív közös konstrukcióig vezető fejlődést szemléltetve.

## Bizonyítékok a tudásbázisból

- **Az MI felsőoktatási integrációja nagyrészt fokozatos, nem átalakító.** [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh és mtsai. (2026)]] egy PRISMA szisztematikus áttekintésben — amely 959 rekordból szűrt 22 intervenciós tanulmányt vizsgált — a SAMR-modellel osztályozta az MI-integrációt, és azt találta, hogy a tanulmányok többsége a **Substitution vagy az Augmentation** szintre esett, kevesebb a Modification szintre, és csak egyetlen közelítette a Redefinitiont. Az MI-t jellemzően a meglévő gyakorlat javítására vezették be — elsősorban [[automated-assessment|értékelésautomatizálásra]] és [[personalized-learning|személyre szabott tanulási támogatásra]] —, nem pedig a tantervek vagy a [[learning-gains|tanulási eredmények]] újragondolására.
- **A SAMR gyakori elemzési lencse a GenAI vezérelte [[curriculum-design|tantervi]] változáshoz.** [[rewriting-curriculum-genai-pedagogy-2026|Sabani és mtsai. (2026)]] öt tantervi elmozdulást (statikusból dinamikusba, átadásból képességbe, helyiből [[governance|intézményibe]]) rendel meglévő lencsékhez, köztük a SAMR-hoz és a konstruktív illesztéshez, a modellt arra használva, hogy tisztázza azokat a [[pedagogy|pedagógiai]] mechanizmusokat, amelyekkel a GenAI átformálja a tantervet.
- **A SAMR és a TPACK horgonyozzák a tanárok technológiaintegrációs standardjait.** [[crompton-faculty-technology-integration-standards-2026|Crompton és mtsai. (2026)]] hat oktatói technológiastandardjukat meglévő keretrendszerekhez — [[tpack]], RAT, SAMR, SETI — és standardokhoz (ISTE, UNESCO, DigCompEdu) viszonyítják, amelyek többsége a [[k-12]] nevelőket célozza, vagy csak az oktatói szerepek [[teacher-role|tanítási]] részét, hézagot hagyva a felsőoktatási oktatói fejlesztésben.
- **A SAMR a poszthumanista kritika célpontja.** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]] bírálja a TPACK-, a SAMR- és az [[ai-literacy]] modelleket azért, mert közös humanista ontológián osztoznak, amely határolt tanulót feltételez, akinek kognícióját a technológiai közvetítés alapvetően nem változtatja meg, és amellett érvel, hogy ezek az instrumentalista keretrendszerek nem tudják kezelni az MI konstitutív szerepét a kognícióban.
- **Keretrendszer az integrációra, nem keretrendszer a hatalomra.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]] a SAMR-t a TPACK és más integrációs keretrendszerek mellett értékeli, és azt találja, hogy egyik sem foglalkozik az igazságos hatalommal, az adattulajdonnal vagy az elszámoltathatósággal, ami egy alternatív ökológiai együgynökségi keretrendszer kidolgozását indokolja.
- **A diákok használata is leképeződik a SAMR-ra, és a visszajelzés minden szintet átfog.** 31–36 diák GenAI-nyilatkozatainak kódolása egy [[physics-education|fizika]] kurzusban a tanulást Substitution–Augmentation, a formázást Substitution, a feladatvégzést Modification–Redefinition szintre helyezte, míg a visszajelzés — ellenőrzés, tisztázás, igazolás — mind a négy szinten megjelent ([[genai-use-changing-institutional-policy-physics-2026|Quince és Faulconer (2026)]]).
- **A mélység és a befogadás külön tengelyek.** [[jita-ai-mathematics-classrooms-inclusion-2026|Jita, Jita és Omoniyi (2026)]] a SAMR-t a [[universal-design-for-learning|UDL-lel]] párosítja 38 forrás alapján, és amellett érvel, hogy a Redefinition szintű feladatok még mindig kizárhatják azokat a diákokat, akiknek a nyelve, eszköze vagy hálózati kapcsolata nem illeszkedik a tervezéshez.

## SAMR, TPACK és a technológiaelfogadás: miben különböznek

Három keretrendszert gyakran összekevernek, pedig különböző kérdésekre válaszolnak:

- **[[technology-acceptance-model|Technológiaelfogadási modellek]]** (TAM, UTAUT) azt magyarázzák, *miért* fogad el és használ tovább egy egyén vagy intézmény egy technológiát — az észlelt hasznosság, a használat könnyűsége és a társas hatás alapján.
- **[[tpack|TPACK]]** azt a *tudást* írja le, amelyre a tanárnak szüksége van a technológia hatékony integrálásához — a technológiai, pedagógiai és tartalmi tudás kölcsönhatását, amelyet az MI korszakában AI-TPACK/GenAI-TPACK irányba terjesztettek ki.
- **A SAMR** azt osztályozza, *milyen mélyen* alakítja át egy technológia a tanulási feladatot, a fokozástól az újradefiniálásig.

A SAMR-t legjobban integrációsmélység-lencseként érthetjük meg, amelyet tervezésre és értékelésre használnak, kiegészítve az elfogadáselméletet (amely a felvételt magyarázza) és a TPACK-et (amely a tanári képességet magyarázza). Az MI korszakában a legtermékenyebben arra használható, hogy megkérdezzük: a generatív MI a meglévő feladatok fokozására szolgál-e, vagy valóban újakat tesz lehetővé — ez a megkülönböztetés végigvonul a tudásbázis értékelési és tantervi kutatásain.

## Következmények a gyakorlatra

- **A SAMR-t a mélység kérdésének feltevésére használja, ne az átalakítás előírására.** A fokozás nem eleve alacsonyabb rendű; a rutinszerű MI-használat sok esetben jogos Substitution. A modell diagnosztikus: tisztázza, mit változtat meg ténylegesen egy adott használat.
- **Párosítsa az ICAP-pal.** A SAMR azt írja le, mivé válik a *feladat*; az ICAP azt, hogyan *köteleződik el* a tanuló. Együtt használva megkülönböztetik a felszíni helyettesítést a mély interaktív közös konstrukciótól.
- **Egészítse ki elfogadási és esélyegyenlőségi lencsékkel.** A SAMR semmit nem mond arról, miért fogadnak el egy eszközt, vagy ki profitál belőle. Párosítsa [[technology-acceptance-model|elfogadási modellekkel]] és [[equity-in-ai-education|esélyegyenlőségi]] elemzéssel, hogy elkerülje, hogy egy mélységcímke egy [[critical-thinking|kritikai értékelés]] helyébe lépjen.
- **A fokozatos integráció bizonyítékát eredményként kezelje, ne kudarcként.** Ha az MI-integráció nagy része a Substitution/Augmentation szinten csoportosul, a tervezési feladat nem az, hogy erőltessük a Redefinitiont, hanem annak felismerése, hogy az átalakító használat más feladatterveket igényel, nem csupán jobb eszközöket.

## Gyakori tévhitek

**„Minél magasabb a SAMR-skálán, annál jobb a tanítás.”** A SAMR egy lencse annak megkérdezésére, hogy az MI *újragondolja*-e a tanulást, vagy a meglévő gyakorlatot *javítja*; nem minőségi rangsor, és a Redefinition nem minden feladat helyes válasza. Egy helyettesítés, amely eltávolít egy improduktív lépést, a tanulás alapján ítélve siker, nem pedig az alapján, milyen szinten áll.

**„Az MI-elfogadás felfelé halad a létrán.”** Az eloszlás az alján koncentrálódik. Az MI [[higher-ed|felsőoktatási]] integrációjáról szóló szisztematikus áttekintés szerint **a legtöbb felhasználás a Substitution vagy az Augmentation szinten állt, és csak egyetlen tanulmány közelítette a Redefinitiont**. A SAMR gyakorlati használata ebben az irodalomban ezért nagyrészt diagnosztikus — megnevezi, hol áll valójában a terület.

**„A SAMR és a TPACK versengő keretrendszerek.”** Különböző dolgokat írnak le: a SAMR egy feladat *átalakulásának mértékét*, míg a [[tpack|TPACK]] azt a *tudást*, amelyre a tanárnak a technológia jó integrálásához szüksége van. Egy tanár lehet kiválóan TPACK-képes, és mégis a Substitution szinten működhet, ezért használják a kettőt együtt, nem pedig választanak közülük.

**„Egy eszköz, amely az egyik szinten átalakító, minden szinten az.”** Ugyanaz a generatív eszköz az egyik kurzusban Substitutiont, a másikban Redefinitiont támogathat, mert a szint a feladatterv tulajdonsága, nem a technológiáé. Ha a szintet az eszköznek tulajdonítjuk, tervezési döntések helyett elfogadási döntéseket kapunk.

## Összefüggő fogalmak

- [[ai-education]] — MI az oktatásban (ernyőfogalom)
- [[tpack]] — Technológiai pedagógiai tartalmi tudás
- [[technology-acceptance-model]] — Technológiaelfogadási modellek
- [[icap-framework]] — A kognitív elköteleződés ICAP-keretrendszere
- [[ai-technologies]] — MI-technológiák és -technikák
- [[teacher-ai-competency]] — Tanári MI-kompetencia
- [[educational-development]] — Oktatásfejlesztés
- [[learning-design]] — Tanulástervezés
- [[k-12]] — K–12 oktatás
- [[higher-ed]] — Felsőoktatás
- [[generative-ai]] — Generatív MI

## Összefüggő cikkek

- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Az MI felsőoktatási integrációja SAMR-rel osztályozva: többnyire Substitution/Augmentation
- [[thermomix-genai-education-analogy-2026]] — Az ICAP és a SAMR a négy, főzéstől tanulásig vezető forgatókönyv leképezése
- [[rewriting-curriculum-genai-pedagogy-2026]] — A SAMR a GenAI vezérelte tantervi változás lencséi között
- [[crompton-faculty-technology-integration-standards-2026]] — A SAMR az oktatói technológiastandardokat alakító keretrendszerek között
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — A SAMR humanista ontológiájának poszthumanista kritikája
- [[reclaiming-epistemic-agency-co-agency-2026]] — A SAMR hallgatása a hatalomról, az adattulajdonról és az elszámoltathatóságról
- [[genai-use-changing-institutional-policy-physics-2026]] — Diákok GenAI-használata változó intézményi szabályok mellett: SAMR-szintekhez rendelt használati funkciók (Quince és Faulconer 2026)
- [[jita-ai-mathematics-classrooms-inclusion-2026]] — MI a matematikaórákon: szinergikus stratégia a sokszínűségért és a befogadásért
