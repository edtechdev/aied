---
title: "Mylné predstavy o AI"
created: "2026-11-12T04:04:17-05:00"
updated: "2026-11-12T04:04:17-05:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, teacher-role]
pedagogy: [metacognition]
technology: [generative-ai]
ethics: [trust-calibration]
audience: [learners, instructors]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/misconceptions
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

> **Mylné predstavy o AI** — nepresné presvedčenia, ktoré ľudia majú o tom, čím AI systémy sú, čo robia a čo pre učenie a prácu znamená ich používať. Mylné predstavy nie sú jediná nepravda, ale celá rodina chýb v kalibrácii, ktoré sa zhlukujú okolo dvoch základných omylov: chybného posúdenia toho, čo model je (autorita vs. nástroj, neutrálny vs. zaťažený predsudkami, chápanie vs. generovanie), a chybného posúdenia toho, čo učenie vyžaduje (výstup vs. proces). Nemajú ich len študenti, ale aj učitelia, vedenie škôl, tvorcovia politík a široká verejnosť — a ich náprava je jedným z hlavných cieľov vzdelávania v oblasti [[ai-literacy]] a [[trust-calibration]].

## Otázky na zamyslenie

- Mnoho ľudí verí, že odpoveď AI chatbota je overený fakt, pretože znie sebaisto a plynulo. Stránka tomu hovorí „blud autority". Keď čítate vysvetlenie vytvorené AI, ako sa rozhodujete, či ho prijať — a ako často ho skutočne overujete?
- Mylná predstava „učenie sa rovná výstupu" je presvedčenie, že vytvoriť prácu s AI je to isté ako sa to naučiť. Zažili ste niekedy, že ste sa niečo „naučili" tým, že ste nechali nástroj napísať koncept? Čo vám potom skutočne chýbalo?
- Ľudia často predpokladajú, že AI je objektívna a nezaujatá. Stránka tomu hovorí „ilúzia neutrality" — modely kódujú predsudky z trénovacích dát, čo v kontexte písania môže homogenizovať nápady v celej triede. Kde sa môže skrývať predsudok v nástroji, ktorý pôsobí neutrálne?
- Mylné predstavy o akademickej integrite sa zhlukujú na dvoch extrémoch: niektorí študenti považujú výstup AI za „neopísanie človeka", a teda prípustný, iní považujú akékoľvek použitie za podvod. Kde by podľa vás mala ležať hranica a kto by o nej mal rozhodovať?
- Časté presvedčenie je, že jeden dotaz stačí a že výstup AI je deterministický — rovnaká otázka vždy dáva rovnakú odpoveď. Stránka to opisuje ako chybu determinizmu. Ako by táto mylná predstava mohla niekoho viesť k nadmernej dôvere v jediný výstup?
- Mylné predstavy sú opísané ako stabilné, plausibilné a odolné voči korekcii — podobne ako mylné predstavy v akejkoľvek oblasti. Ak samotné povedanie pravdy len zriedka mení názor ľudí, ako by sa mala AI gramotnosť vlastne učiť?

## Úvod

Mylné predstavy o AI majú význam, pretože sú kognitívnym predstupňom škodlivého správania, ktoré znalostná báza dokumentuje pod [[cognitive-offloading|Nadmerným spoliehaním]] a obavami o [[academic-integrity]]. Ľudia sa málokedy vydajú [[ai-misuse-learning-harm|zneužívať]] AI úmyselne; robia to preto, že nepresné mentálne modely ich vedú k chybnému umiestneniu dôvery, vynechaniu overovania a zámene výstupu za porozumenie. Vo vzdelávaní tieto chyby formujú všetko od toho, ako sa študenti učia, po to, ako učitelia a inštitúcie navrhujú kurikulá, [[assessment]] a politiku.

### Čo sú mylné predstavy o AI

Mylná predstava tu nie je iba neznalosť toho, ako model funguje — je to aktívne zastávané, často sebautvrdzujúce presvedčenie, ktoré vytvára systematické chyby v tom, ako študenti s AI pracujú. Sú priamo analogické odborovým mylným predstavám študovaným v [[learning-sciences|vede o učení]]: stabilné, plausibilné a odolné voči korekcii, kým im človek nečelí priamo. Ich náprava je jedným z hlavných cieľov vzdelávania v oblasti [[ai-literacy]] a [[trust-calibration]].

### Bežné mylné predstavy v akademickom kontexte

- **Blud autority** — považovať výstup [[llm]] za overený fakt namiesto pravdepodobnostného dokončenia. Vedie k nekritickému prijímaniu a k vzorcu hľadania odpovede namiesto porozumenia, ktorý dokumentuje výskum [[intelligent-tutoring|AI doučovania]], kde študenti prijímajú odpoveď modelu bez toho, aby ju overili voči [[hallucination-risk]].
- **Ilúzia nezávislej kontroly** — považovať [[ai-feedback-quality|spätnú väzbu AI]] za vonkajšiu korekciu, keď model zrkadlí vaše vlastné uvažovanie. Východisková presnosť používateľov bola dominantným prediktorom konečného výkonu a promptovanie špecifické pre [[ai-sycophancy|sykofantiu]] znížilo pozičné napodobňovanie (OR = 0,26), ale šírenie chýb nechalo nedotknuté, takže školenie študentov nie je zárukou ([[contextual-sycophancy-ai-literacy|Koyuturk et al. (2026)]]).
- **Učenie sa rovná výstupu** — veriť, že vytvorenie práce *s* AI je to isté ako sa ju naučiť. To je presne tá chyba, ktorá stojí za [[cognitive-offloading|Nadmerným spoliehaním]]: procesy písania konceptu, vybavovania a revízie, ktoré budujú trvalé vedomosti, sa outsourcujú.
- **Ilúzia neutrality** — predpokladať, že AI je objektívna a nezaujatá. Študenti často prehliadajú, že modely kódujú predsudky trénovacích dát a že v kontexte [[writing-education]] to vedie k homogenizácii nápadov v rámci kohorty.
- **Šedá zóna integrity** — chybne posúdiť, či je [[academic-integrity|použitie AI prijateľné]]. Niektorí študenti vidia výstup AI ako „neopísanie človeka", a teda prípustný; iní prestrelia a myslia si, že *akékoľvek* použitie je podvod. Nekonzistentnosť [[governance|inštitúcií]] živí obe chyby.
- **Antropomorfizmus** — veriť, že model má zámer, pamäť a porozumenie *ich* kontextu. Táto nadmerná dôvera je akademicky obzvlášť riskantná, pretože študenti sa môžu spoliehať na plausibilne znejúce vysvetlenia, ktoré model v skutočnosti nedokáže podložiť.
- **Chyba determinizmu** — očakávať, že jeden dotaz stačí, a neuvedomovať si, že výstup je nedeterministický a citlivý na prompt. Podcenenie toho vedie k „medzere v [[prompt-engineering|promptovaní]]", kde študenti považujú plytké výsledky za strop nástroja.
- **Chybná kalibrácia [[ai-detection|detekcie]]** — podceňovať tak inštitucionálnu detekciu, ako aj predovšetkým vlastnú ujmu z odovzdania práce, ktorú neskôr nedokážu vysvetliť alebo obhájiť.
- **Ilúzia efektívnosti** — považovať ušetrený čas za čistý zisk a prehliadať, že neprocvičované základné zručnosti chátrajú a že nováčikovia zatiaľ nedokážu rozoznať dobrý výstup od zlého.
- **Ilúzia priateľskosti a bezpečia (deti)** — veriť, že priateľsky pôsobiaca AI je inherentne bezpečná a menej pravdepodobne špehuje. [[children-ai-safety-misconceptions-2026|Leisten et al. (2026)]] sa pýtali 71 detí vo veku 10–16 rokov (*M*vek = 12,90) a viedli šesť ohniskových skupín (n = 36) okolo sociálneho robota Blossom s [[open-source|otvoreným zdrojom]], pričom zistili, že základné vedomosti o AI spoľahlivo rástli s vekom (*M* = 4,41 zo 6; β = 0,17), zatiaľ čo bezpečnostné postoje zostávali ambivalentné (dôležitosť *M* = 2,51, súčasná bezpečnosť *M* = 2,77 na škále 1–4), čo zachytilo presvedčenie dieťaťa vo veku 12–13 rokov, že „možno ak sú dobrí priatelia, tak veľa nešpehuje" — popri presvedčení, že vedomosti AI možno vymazať stlačením tlačidla, že hacking vedie k únosu a že „wifi vyžaruje do mozgu".

Šedá zóna integrity má štruktúru, nie len dva extrémy. Rozhovory s 20 študentmi spolu s ich chatovými záznamami a dokumentmi kurzu našli päť samostatných miest, kde žije politika AI, od zámeru fakulty cez formálnu politiku a vlastnú politiku študenta až po skutočnú prax, plus 23 odlišných racionalizácií v šiestich triedach ([[student-rationalization-ai-writing|Kim et al., 2026]]). Racionalizácie boli ad hoc a post hoc, zostavené tak, aby vysvetlili použitie, ktoré už prebehlo, skôr než aby ho viedli. Striktný zákaz používania skôr nezabránil použitiu, než zosilnil morálny konflikt u študentov, ktorí chceli vyhovieť, čo stavia cieľ korekcie do miesta politiky, nie do formulácie pravidla.

### Inštitucionálne a verejné mýty o AI

Mylné predstavy nie sú obmedzené na študentov — prestupujú inštitucionálnym a verejným diskurzom o AI, ktorý študenti dedia. [[rudolph-ai-myths-critical-higher-ed|Rudolph et al. (2025)]] demontujú osem zakorenených „mýtov", ktoré formujú politiku a výučbu vysokých škôl: že AI je skutočne „umelá" (skôr než postavená na vykorisťovanej ľudskej práci), že je skutočne „inteligentná" a [[agentic-ai|agentná]], že bez problémov „urobí svet lepším miestom", že je „objektívna a nezaujatá", že Spojené štáty majú monopol jedinej superveľmoci, že nenaruší trh práce, že „revolucionizuje [[higher-ed|vyššie vzdelávanie]]" a že učitelia dokážu spoľahlivo rozpoznať prácu vytvorenú AI. Tieto inštitucionálne mýty sú východiskovým zdrojom mnohých študentských mylných predstáv opísaných vyššie — najpriamejšie [[trust|ilúzie neutrality]] („AI je objektívna") a [[trust-calibration|bludu autority]] („AI je inteligentná") a chybnej kalibrácie detekcie, ktorá vedie študentov k predpokladu, že neodhaliteľné, neoveriteľné použitie je bezpečné. Tam, kde študenti prijímajú a konajú podľa inštitucionálne opakovaných mýtov, vyžaduje ich náprava čeliť nielen presvedčeniu študenta, ale aj diskurzu, ktorý ho živí.

### Prečo sú mylné predstavy dôležité pre učenie

Mylné predstavy sa priamo prekladajú do správania, ktoré spôsobuje ujmu v učení. Presvedčenie, že „AI má vždy pravdu", potláča overovanie; presvedčenie, že „používať AI je učenie", potláča namáhavé spracovanie; presvedčenie, že „to nie je podvod", obchádza metakognitívnu revíziu, ktorá upevňuje porozumenie. V tomto zmysle sú mylné predstavy vyššie než [[ai-misuse-learning-harm]] dokumentované naprieč dôkazovou základňou znalostnej bázy.

Presvedčenie, že používať AI je učenie, nie je len zastávané pred použitím; nástroj ho môže vyrábať. [[llm-fallacy-misattribution|Kim et al.]] opisujú omyl LLM, pri ktorom je nepriehľadný, plynulý a okamžitý výstup chybne čítaný ako dôkaz vlastnej kompetencie používateľa, takže vnímaná a skutočná schopnosť sa rozchádzajú o rozdiel, ktorý nazývajú ΔC. Pretože mechanizmom je plynulosť a nejednoznačnosť atribúcie, nie chyba, omyl pretrváva, či je model presný alebo halucinuje, čo znamená, že správna odpoveď s podporou AI nie je dôkazom, že presvedčenie bolo opravené.

### Mylné predstavy mimo študentov: učitelia, inštitúcie a verejnosť

Mylné predstavy o AI nie sú obmedzené na študujúcich — sú všadeprítomné medzi dospelými, ktorí formujú vzdelávanie:

- **Učitelia a akademickí pracovníci** môžu preceňovať schopnosť AI spoľahlivo známkovať alebo odhaľovať zneužitie, alebo podceňovať jej predsudky, čo vedie buď k nekritickému zavádzaniu, alebo k reflexívnemu zákazu. Tento predpoklad spoľahlivosti je čiastočne testovateľný a čiastočne nepravdivý: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] vykonal red-team test bežného pracovného postupu [[automated-assessment|AI známkovania]] a zistil, že inštrukcie skryté v odovzdanom súbore zvýšili známku neúspešnej eseje bez akéhokoľvek viditeľného varovania, v 9 z 9 iterácií pri jednej stratégii a 17 z 18 pri inej. Keď učitelia majú [[trust|blud autority]] o výstupoch AI, predvádzajú ten istý nekritický postoj, ktorý by mali u študentov naprávať. Vybaviť [[teacher-role|vzdelávateľov]] presnými mentálnymi modelmi AI je predpokladom [[teacher-ai-competency|zodpovednej integrácie AI]] a [[pedagogical-safety|bezpečnej pedagogiky]].
- **Vedenie škôl a tvorcovia politík** dedia a šíria inštitucionálne mýty — že AI je „objektívna", že „revolucionizuje" vzdelávanie alebo že detekčné nástroje sú dôveryhodné — ktoré potom formujú [[educational-policy-ai|politiku]], nákupy a pravidlá hodnotenia. [[trust-calibration|Dôvera]], ktorú si študenti vytvárajú, je čiastočne produktom inštitucionálneho rámca, ktorý dedia.
- **Široká verejnosť** vstrebáva mediálne a predajné naratívy o schopnostiach a rizikách AI. Pretože sa študenti učia v tomto diskurze, verejné mýty sa stávajú substrátom, z ktorého vyrastajú študentské mylné predstavy. Náprava mylných predstáv o AI je preto úlohou [[ai-literacy]] zameranou na celý vzdelávací ekosystém, nie len na študujúcich.

Táto šírka je dôvodom, prečo znalostná báza považuje mylné predstavy za prierezovú základnú tému, a nie za čisto študentskú: rovnaké chyby kalibrácie sa opakujú u študujúcich, učiteľov, inštitúcií i verejnosti a ich náprava vyžaduje čeliť tak individuálnym presvedčeniam, ako aj diskurzu, ktorý ich živí.

Pedagogické mylné predstavy učiteľov sú zrkadlovým obrazom tohto: nejde o neporozumenie AI, ale o dôkazne nepodložené presvedčenia o výučbe, ktoré pretrvávajú bez ohľadu na AI. [[etq-ai-conversational-teacher-training-2026|Miranda a Calvani (2026)]] to instrumentujú dotazníkom Effective Teaching Questionnaire, kde 50 binárnych položiek mapuje na [[meta-analysis-systematic-review|meta-analytické]] veľkosti účinku (d ≥ 0,40), takže odpoveď učiteľa možno porovnať s dôkazne ukotveným benchmarkom — a ich zistením je, že mylné predstavy sú hlboké a špecifické. Pilotná štúdia so 123 vzdelávateľmi v Taliansku našla najostrejší nesúhlas pri tvrdení o štýloch učenia (78 % učiteľov hájilo párovanie vizuálne/sluchové), potom pri inklúzii a [[group-work|skupinovej práci]] (68 %) a preťažení EdTech (54 %); priemerné zladenie sa pohybovalo okolo 50 % naprieč dimenziami plánovania, kognitívnej, evaluatívnej a manažérskej. Pre dizajn korekcie sú dôležité dva detaily. Po prvé, mylné predstavy prežívajú univerzitné vzdelávanie aj učiteľskú prax — autori opisujú „internalizovaný zdravý rozum", ktorý „predchádza vstupu do školy" a pretrváva — takže to nie sú vedomostné medzery, ktoré prednáška uzavrie. Po druhé, keď konverzačná AI znovu zaviedla tie isté položky až po validácii učiteľovho vlastného kontextu, 41 % námietok citovalo skutočné kontextové obmedzenia — veľkosti tried, študentov so [[special-education|špeciálnymi vzdelávacími potrebami]], pokrytie [[curriculum-design|kurikula]] — skôr než samotné dôkazy. Ďalších 5,9 % označilo systém za „algoritmický dogma-stroj": hraničnú podmienku, keď normatívne rámovanie plodí obrannosť namiesto reflexie. Pre rozvoj [[teacher-ai-competency]] to znamená, že diagnostika plus dialóg môže odhaliť, ktoré presvedčenia sú dôkazne podložený nesúhlas a ktoré mylná predstava, čo je rozdiel, ktorý samotné skóre urobiť nedokáže.

### Náprava mylných predstáv

Náprava nie je jednorazové oznámenie, ale priebežný proces [[ai-literacy]], ktorý rozvíja [[metacognition]] a [[self-regulated-learning]]: pomáha študentom (a dospelým okolo nich) sledovať svoje spoliehanie, kalibrovať, kedy modelu veriť a kedy ho spochybniť, a vidieť cenu obchádzania vlastnej [[cognitive-offloading|kognitívnej práce]]. Pretože sú mylné predstavy odolné, najlepšie sa riešia priamym konfrontovaním s dôkazmi — vrátane zistenia, že študenti často *nevnímajú* ujmu na učení spôsobenú zneužitím AI.

**Refutačný text je kľúčovou technikou korekcie.** Pretože mylné predstavy sú aktívne zastávané a odolné, najpriamejšou dôkazne podloženou stratégiou je [[refutation-text|refutačný text]] — výučbový text, ktorý uvedie mylnú predstavu, výslovne ju vyvráti a predstaví správne poňatie. Ide o rovnakú rodinu techník, aká sa používa na korekciu odborových mylných predstáv študovaných v [[learning-theories|vede o učení]], tu aplikovanú na presvedčenia študentov o AI samotnej. Koncepčná stránka [[refutation-text]] znalostnej bázy syntetizuje, ako sa to odohráva v [[ai-education|AI vo vzdelávaní]], tromi komplementárnymi spôsobmi:

- **AI ako korektor.** Tútori [[conversational-ai|konverzačnej AI]] môžu poskytovať *personalizovanú* refutáciu a prispôsobovať ju konkrétnej mylnej predstave študenta za chodu. [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen (2026)]] zistili, že personalizovaný dialóg s AI priniesol väčšie a rýchlejšie zníženie presvedčenia než statická refutácia v učebnicovom štýle, s vyššou [[student-engagement|angažovanosťou]] a dôverou — hoci výhoda do dvoch mesiacov bez posilňovania vyprchala.
- **AI ako generátor refutačného obsahu.** [[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan (2025)]] zistil, že AI generovaný text pre koncepčnú zmenu/refutáciu dosiahol kvalitu textu napísaného expertom (a oba v tom vedeckom kontexte prekonali promptovaný interaktívny dialóg), čo ukazuje, že AI dokáže produkovať účinné korekčné materiály vo veľkom.
- **AI generované mylné predstavy ako učebný zdroj.** Namiesto toho, aby sa AI generované mylné predstavy považovali iba za škodlivé, [[llms-misconception-collaborative-learning-healthcare-2026|Cheah et al. (2026)]] navrhujú generovať mylné predstavy a riešiť ich štruktúrovanou diskusiou medzi rovesníkmi — [[collaborative-learning|kolaboratívnu]] formu refutácie, ktorá podporuje koncepčnú zmenu a [[critical-thinking|kritické myslenie]].

Pre mylné predstavy o AI to znamená, že korekcia by mala kombinovať **priamu konfrontáciu** (materiály v duchu refutácie, ktoré pomenujú a vyvrátia konkrétne mýty) s **podporovanou praxou** — pomocou výučby [[ai-literacy]] a [[metacognition]] pomáhať ľuďom vidieť tak falošné presvedčenie, ako aj správny model. Dôkazy varujú, že záleží na *formáte*: personalizovaná, interaktívna korekcia je pútavejšia a spočiatku účinnejšia, ale na pretrvanie potrebuje posilňovanie; a meraný výsledok (vedomosti vs. postoje vs. zručnosti) určuje, aký veľký korekčný efekt sa javí. Pretože mylné predstavy zahŕňajú študujúcich aj dospelých, ktorí formujú učenie, musí účinná korekcia zasiahnuť [[teacher-role|učiteľov]], [[administrator|vedenie škôl]] a [[educational-policy-ai|tvorcov politík]] rovnako ako študentov.

Bernstein a Sibia (2026) ukazujú, že analógie generované [[generative-ai|GenAI]] vnášajú štrukturálne mylné predstavy, ktoré dokáže zachytiť len znalosť zdrojovej domény ([[student-reception-genai-analogies-computing-2026]]): analógia kruhovej trasy pre spájaný zoznam implikuje slučku späť na začiatok a analógia badmintonovej výmeny pre rekurziu nenesie žiadny garantovaný zmenšujúci sa vstup. Študenti, ktorí poznali zdrojovú doménu, tieto chyby identifikovali a navrhli opravy, zatiaľ čo účastníci poznamenali, že chybná analógia môže byť stále zapamätateľná — čo naznačuje, že známy zdroj analógie môže študentom pomôcť AI vytvorenú mylnú predstavu skôr odhaliť než vstrebať, a že rámovanie chýb ako zámerných artefaktov na kritiku mení riziko na príležitosť na hodnotenie.

**Mylné predstavy generované modelom sú merateľná schopnosť, nie náhoda.** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] postavili SocraticTrap-CS, ktorý promptoval sedem modelov s otvorenými váhami, aby napísali „[[socratic-method|sokratovskú]] pascu" pre 35 základných konceptov informatiky — vysvetlenie, ktoré je plynulé a autoritatívne, ale spočíva na jemnej, odborovo špecifickej chybe. Z 241 promptovaných segmentov bolo 221 (91,7 %) potvrdených ako strategické mylné predstavy väčšinovým hlasom expertov (Fleissov κ = 0,9487), bez významných rozdielov medzi oblasťami informatiky; 66,5 % potvrdených chýb bolo koncepčných, nie faktických, a žiadna nebola čisto logická. Plynulosť je mechanizmus, nie obrana: presvedčivosť dosahovala v priemere 3,71 na päťbodovej škále a bola silne závislá od modelu, a frekvencia a závažnosť sa oddelili, pričom dva modely, ktoré produkovali pasce najčastejšie, boli tiež hodnotené ako najpresvedčivejšie. Pretože zle formulovaná otázka študenta môže sama pôsobiť ako adversariálny prompt, autori považujú mieru za schopnosť pri adversariálnom promptovaní, nie za základnú mieru pre bežné študijné sedenia — a tvrdia, že úloha [[ai-literacy]] sa posúva od faktickej kontroly jednotlivých tvrdení ku koncepčnému overovaniu a validácii mentálnych modelov. To je temnejšia tvár generatívneho využitia vyššie: tá istá schopnosť, ktorá môže zasiať produktívnu diskusiu medzi rovesníkmi, môže tiež upevniť chybu, ktorú si študent už vytváral.

### Refutačné korekcie bežných mylných predstáv o AI

Pretože mylné predstavy sú aktívne zastávané a odolné, najpriamejší spôsob, ako ich riešiť — aj na tejto stránke — je štruktúra [[refutation-text]]: **pomenujte mylnú predstavu, výslovne ju vyvráťte a uveďte správne poňatie.** Nasledujúce položky aplikujú túto štruktúru na najzávažnejšie mylné predstavy o AI a o učení, výučbe a vzdelávaní:

**„AI má vždy pravdu."** *To je mylná predstava.* Výstup AI je pravdepodobnostné dokončenie, nie overený fakt. *Korekcia:* LLM generujú plausibilne znejúci text na základe štatistických vzorcov; môžu [[hallucination-risk|halucinovať]], byť zaťažené predsudkami a sebaisto sa mýliť. Považujte výstup za koncept na kontrolu voči zdrojom, nie za autoritu na prijatie. To je jadro [[trust-calibration]] a dôvod, prečo „vždy overuj" víťazí nad „vždy ver".

**„Používať AI je učenie."** *To je mylná predstava.* Vytvoriť prácu *s* AI nie je to isté ako získať vedomosť alebo zručnosť, ktorú má práca preukázať. *Korekcia:* trvalé učenie vzniká namáhavými procesmi písania konceptu, vybavovania, revízie a metakognitívnej revízie — presne tými procesmi, ktoré [[cognitive-offloading|presun na AI]] skracuje. Používajte AI ako nástroj popri tomto úsilí, nie ako jeho náhradu.

**„AI je neutrálna a objektívna."** *To je mylná predstava.* Modely dedia predsudky, medzery a perspektívy svojich trénovacích dát. *Korekcia:* AI môže reprodukovať a zosilňovať [[bias-mitigation|predsudky]]; zaobchádzajte s jej výstupmi s rovnakou zdrojovo kritickou obozretnosťou, akú by ste uplatnili pri akomkoľvek inom texte. Uvedomenie si toho je súčasťou [[ai-literacy]] a pomáha čeliť ujmám na [[equity-in-ai-education|spravodlivosti]] z nekritického zavádzania.

**„AI nahradí učiteľov."** *To je mylná predstava.* AI rozširuje, ale nevytláča [[pedagogy|pedagogickú]] prácu [[teacher-role|učiteľov]] — úsudok, kontextualizáciu a relačné a [[ethics|etické]] dimenzie výučby. *Korekcia:* AI zvyšuje potrebu pedagogického sprostredkovania a kritického úsudku; učitelia, ktorí AI rozumejú, sa stávajú účinnejšími, nie zastaranými. Toto prerámovanie je dôležité, pretože určuje, či inštitúcie investujú do [[teacher-ai-competency|kompetencie učiteľov v AI]], alebo reflexívne vzdorujú či nadmerne adoptujú.

**„AI rozumie ako človek."** *To je mylná predstava.* Modely nemajú zámer, pamäť o vás ani skutočné porozumenie vášmu kontextu. *Korekcia:* antropomorfizácia AI vedie k nadmernej dôvere a spoliehaniu sa na vysvetlenia, ktoré model v skutočnosti nedokáže podložiť. Udržujte hranicu jasnú: AI je mocný nástroj, nie mysľ.

**„AI automaticky premení vzdelávanie."** *To je mylná predstava.* Technológia sama o sebe učenie nemení; mení ho pedagogika okolo nej. *Korekcia:* prínosy AI závisia od zámerného [[learning-design|inštrukčného dizajnu]], prípravy učiteľov a inštitucionálnej podpory — nie od samotného nasadenia nástroja. Preto záleží na [[ai-ed-evaluation|dôkazoch]] a [[research-methods-aied|rigoróznom hodnotení]] a preto znalostná báza rámuje zodpovedné používanie AI ako otázku [[governance]] a [[educational-policy-ai|politiky]], nie čisto technickú.

**„Jeden prompt by mi mal dať odpoveď."** *To je mylná predstava.* Výstup je nedeterministický a citlivý na prompt. *Korekcia:* očakávajte iteráciu, spresňovanie a krížovú kontrolu; „medzera v promptovaní" — zámena plytkých prvých výsledkov za strop nástroja — je problém zručnosti, nie limit nástroja. Rozvíjať to je súčasťou [[prompt-engineering]].

**„Nie je to podvod, keď to nenapísal človek."** *To je mylná predstava.* Akademická integrita je o poctivej, priraditeľnej produkcii práce, nie len o neopísaní človeka. *Korekcia:* nezverejnené odovzdanie vytvorené AI môže porušiť [[academic-integrity]], aj keď nebol opísaný žiadny človek; otázkou je, či je práca skutočne študentova. V prípade pochybností zverejnite a skontrolujte politiku svojej inštitúcie.

Tieto refutácie sú zámerne napísané vo forme [[refutation-text]], aby mohli samy byť použité (alebo upravené do interaktívneho [[conversational-ai|dialógu s AI]]) na konfrontáciu a nápravu mylných predstáv o AI — a širšie o učení, výučbe a vzdelávaní.

## Bežné mylné predstavy

- **„Mylné predstavy učiteľov možno napraviť predložením dôkazov."** V pilotnej štúdii so **123 talianskymi vzdelávateľmi** sa nesúhlas najostrejšie zhlukoval pri **kognitívnych štýloch učenia (78 % učiteľov hájilo párovanie vizuálne/sluchové)**, inklúzii a skupinovej práci (68 %) a preťažení EdTech (54 %). Najsilnejšie nesúhlasy boli tie najodolnejšie voči dôkazom, a preto [[refutation-text|refutácia]] víťazí nad tvrdením.
- **„Námietky učiteľov proti dôkazom sú všetky odpor."** Keď boli tie isté položky predložené prostredníctvom konverzačnej AI, ktorá **najprv validovala učiteľov kontext a až potom znovu zaviedla dôkazy**, **41 % námietok sa týkalo skutočných kontextových obmedzení** — veľkostí tried, špeciálnych potrieb, požiadaviek kurikula. Podstatná časť zdanlivej mylnej predstavy bola presná námietka.
- **„Mylné predstavy možno spoľahlivo detegovať z dialógu."** **Z 241 promptovaných segmentov bolo 221 (91,7 %) potvrdených ako strategické mylné predstavy väčšinovým hlasom expertov (Fleissov κ = 0,9487)**, bez **významných rozdielov** medzi skupinami. Vysokú spoľahlivosť možno dosiahnuť pri expertnom rozhodovaní, a na tejto podmienke tvrdenie závisí.

## Prepojené pojmy

- [[pedagogical-patterns]] — Sekvencie koncepčnej zmeny, ktoré čelia konkrétnemu zastávanému presvedčeniu
- [[learners]] — Študujúci: zastrešujúci pojem pre koncepty na strane študujúcich
- [[ai-literacy]]
- [[trust-calibration]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[generative-ai]]
- [[student-experience]]
- [[framing-ai-use-for-students]]
- [[refutation-text]]
- [[teacher-role]]
- [[educational-policy-ai]]
- [[trust]]

## Prepojené články
- [[rudolph-ai-myths-critical-higher-ed]] — Neverte hype: osem mýtov o AI a potreba kritického prístupu vo vysokom školstve
- [[student-rationalization-ai-writing]] — Racionalizácia písania s AI študentmi
- [[genai-skill-bypass-literacy]] — Obchádzanie zručností pomocou GenAI a gramotnosť
- [[trust-reliance-ai-education-2026]] — Dôvera a spoliehanie vo vzdelávaní s AI
- [[contextual-sycophancy-ai-literacy]] — Kontextuálna sykofantia a AI gramotnosť
- [[sycophantic-ai-social-interaction-2026]] — Sykofantná AI v sociálnej interakcii
- [[llm-fallacy-misattribution]] — Chybná atribúcia omylu LLM (Kim et al.)
- [[student-reception-genai-analogies-computing-2026]] — Chybné, ale zapamätateľné: kritické prijatie záujmovo personalizovaných analógií GenAI študentmi v informatickom vzdelávaní
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: plynulé, autoritatívne vysvetlenia, ktoré sú chybné koncepčne, nie fakticky (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Skryté inštrukcie v odovzdanom súbore môžu zvýšiť známku udelenú AI bez viditeľného varovania (Humble 2026)
- [[children-ai-safety-misconceptions-2026]] — Mylné predstavy detí o bezpečnosti AI: priateľstvo s robotom mylne považované za záruku súkromia (Leisten et al. 2026)
- [[etq-ai-conversational-teacher-training-2026]] — Diagnostika učiteľských mylných predstáv konverzačnou AI s dialógom ukotveným v dôkazoch (Miranda & Calvani 2026)
