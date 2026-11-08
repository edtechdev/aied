---
title: "Računalno mišljenje"
created: "2026-08-09T10:44:35-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/computational-thinking"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

> **Računalno mišljenje** — pristup rješavanju problema koji uključuje razlaganje, prepoznavanje uzoraka, apstrakciju i algoritamsko oblikovanje. U [[ai-education|obrazovanju uz umjetnu inteligenciju]] računalno mišljenje je i preduvjet za razumijevanje UI sustava i vještina koju UI alati mogu pomoći razviti.

## Pitanja za razmatranje

- Kada problem rješavate tako da ga razložite na dijelove, uočite uzorke, izdvojite bitno i osmislite korake — već primjenjujete računalno mišljenje, čak i bez računala. Gdje ste to nedavno činili?
- Uobičajena je pretpostavka da je računalno mišljenje isto što i programiranje ili „računalna pismenost“. Kako bi se mogli razlikovati i zašto bi ta razlika mogla biti važna za način na koji to poučavate?
- Istraživanja upućuju na to da nedostatke u temeljnim konceptima — a ne sam UI alat — ograničavaju sposobnost učenika da procijene UI prijedloge. Što učenik mora već razumjeti prije nego što može kritički ocijeniti UI rezultat?
- Neki tvrde da bi računalno mišljenje trebalo pomaknuti učenike s pasivnog konzumiranja UI rezultata prema izgradnji, kritiziranju i oblikovanju s umjetnom inteligencijom. Kako bi doista izgledao razred koji učenike tretira kao proizvođače, a ne potrošače?
- Generativna umjetna inteligencija sada može ocjenjivati rast računalnog mišljenja učenika — no i ljudi i UI muče se s najtežim konstruktom, sistemskim mišljenjem. Gdje bi po vašem mišljenju automatizacija procjene trebala stati i zašto?
- Istraživanja robotike nalaze da se računalno mišljenje razvija samo kada su koncepti eksplicitni i preslikani na [[curriculum-design|kurikulum]], a ne kada se tretiraju kao izolirane tehničke vježbe. Koji je rizik poučavanja „tehnoloških vještina“ bez imenovanja mišljenja koje stoji ispod njih?

## Uvod

### Računalno mišljenje u razredu doba umjetne inteligencije

Povezani članci baze znanja konvergiraju prema središnjoj tvrdnji: računalno mišljenje (RM) konceptualna je podloga koja je učenicima potrebna za kritičko bavljenje umjetnom inteligencijom, a ujedno je i vještina koju dobro osmišljeno UI-potpomognuto učenje najizravnije produbljuje. U nastavku je dokaze razvrstano u četiri teme utemeljene na povezanim člancima.

- **RM kao temelj pismenosti o umjetnoj inteligenciji i kritičkog angažmana.** Nekoliko studija pokazuje da RM omogućuje učenicima da UI rezultate vrednuju, a ne samo konzumiraju. [[chat-debugging-human-ai-collaboration-circuits|Istraživanje otklanjanja pogrešaka u chatu]] pronašlo je da su pri otklanjanju pogrešaka na analognim sklopovima uz pomoć LLM-a upravo *nedostaci u temeljnim konceptima i kritičkom mišljenju* — a ne alat — bili ograničavajući čimbenik, jer učenicima nisu nedostajale ključne ideje potrebne za prosudbu UI prijedloga. [[llm-intervention-design-cs-review|Pregled dizajna LLM intervencija]] također zaključuje da ono što razlikuje učinkovite intervencije od „frustracije alatom“ jest [[cs-education|računalnoobrazovni]] zaokret prema računalnom mišljenju umjesto svladavanju sintakse. U [[early-childhood-elementary-ai-education|ranom djetinjstvu]] [[ai-play-framework-early-childhood-2026|okvir AI-Play]] gradi neumreženu, igrom zasnovanu [[ai-literacy|pismenost o umjetnoj inteligenciji]] poučavajući djecu da je „UI sustav sastavljen od dijelova“ i da „UI uči iz primjera“ — razvojno utemeljen prvi sloj RM-a. A [[academic-league-of-ai-2026|UI akademska liga]] povezuje RM sa stvarnim građanskim UI projektima kroz [[project-based-learning|učenje utemeljeno na projektima]], usađujući [[ai-literacy|pismenost o umjetnoj inteligenciji]] u praksu. Zajedno, to upućuje na to da je RM prenosiva kognitivna jezgra pismenosti o umjetnoj inteligenciji.

- **Obrazovna robotika kao nositelj RM-a.** Robotika je najproučavaniji kontekst za razvoj RM-a u [[k-12|osnovnom i srednjem obrazovanju]] i [[stem-education|STEM obrazovanju]]. [[computational-thinking-educational-robotics-secondary-2026|Srednjoškolsko istraživanje]] tvrdi da obrazovna robotika poboljšava [[problem-solving|rješavanje problema]] i kritičko mišljenje samo kada su koncepti RM-a eksplicitni i preslikani na [[stem-education|STEAM]] kurikulum, a ne kada se tretiraju kao izolirane tehničke vježbe. [[game-based-gamified-robotics-education-review-2026|Sustavni pregled 95 studija]] potvrđuje da robotika potiče RM, [[creativity|kreativnost]] i rješavanje problema te da [[game-based-learning|učenje temeljeno na igri]] odgovara neformalnim okruženjima, dok u formalnim razredima prevladava gamifikacija koja podupire učenje utemeljeno na projektima. [[microbit-robotics-machine-learning-teacher-training-2026|Dokazi iz obrazovanja nastavnika]] pokazuju da je integrirana intervencija Micro:bit + robot + [[machine-learning|strojno učenje]] proizvela značajan rast znanja o RM-u (d = 0,638) u početnom obrazovanju nastavnika, uz argument da robotiku treba ugraditi kako bi budući nastavnici mogli poučavati RM. LLM-ovi mogu dodatno sniziti prag: [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] spaja LLM sa simulacijom robota pa početnici upravljaju robotima prirodnim jezikom, čineći robotiku s ugrađenim RM-om dostupnom bez programiranja na niskoj razini.
- **UI kao „sposobniji vršnjak“ može nositi RM u slabo opremljenim kolegijima robotike.** Kvazieksperiment od 14 tjedana sa 103 studenta prve godine u Nigeriji pokazao je da je UI-potpomognuto [[problem-based-learning|učenje utemeljeno na problemima]] (ChatGPT i Teachable Machine unutar [[sociocultural-learning|zone proksimalnog razvoja]]) nadmašilo konvencionalno poučavanje na posttestu računalnog mišljenja i programiranja robota, bez moderacije spola ([[ai-pbl-computational-thinking-2026|istraživanje AI-PBL robotike (2026.)]]).

- **LLM-ovi kao alati za procjenu i razvoj RM-a.** [[generative-ai|Generativna umjetna inteligencija]] nudi skalabilne načine mjerenja i postupne potpore RM-u. [[llm-computational-thinking-physics-2026|Istraživanje procjene RM-a u fizici]] pokazalo je da LLM-ovi mogu oponašati ljudske ocjenjivače u bodovanju rasta u praksama podataka i praksama računalnog rješavanja problema na velikim kolegijima [[physics-education|fizike]] — dok su se i ljudi i LLM mučili sa složenijim konstruktom sistemskog mišljenja, što označava jasnu granicu automatizacije. [[visual-query-tracer-declarative-logic-learning|Vizualno praćenje upita]] pokazuje kako [[visualization|vizualizacija]] može poduprijeti apstraktno računanje, gradeći intuiciju koja podupire razvoj RM-a. [[student-misconceptions-conditionals-loops-taxonomy|Taksonomija zabluda o uvjetima i petljama]] daje finozrnate ciljeve za [[scaffolding|postupnu potporu]] i automatizirano otkrivanje zabluda, povezujući se s [[misconceptions|zabludama]]. Ti alati ipak djeluju najbolje kada [[pedagogy|pedagoški]] dizajn vodi: [[llm-intervention-design-cs-review|pregled u računalnim znanostima]] pronašao je da su semestralni dizajni „virtualnog tutora“ s postupnom povratnom informacijom dosljedno poboljšavali RM, dok je nestrukturiran pristup alatima povećavao frustraciju.

Trajne kompetencije mijenjaju se kada se implementacija automatizira: izvješće s radionice imenuje apstrakciju, računalno mišljenje i „spektar verifikacije“ vještinama koje treba poučavati, pozivajući se na pokus s gotovo 1.000 studenata u kojem je neograničen pristup GPT-4 povećao izvedbu na vježbama za 48 %, ali snizio rezultate ispita za 17 % nakon što je umjetna inteligencija uskraćena ([[reshaping-cs-education-genai|Lee i sur. (2026.)]]).

- **RM kroz K-12, obrazovanje nastavnika i redizajn procjene.** RM se proteže cijelim spektrom od [[k-12|K-12]] do [[higher-ed|visokog obrazovanja]] i preoblikuje procjenu. Na kraju ranog djetinjstva AI-Play proširuje RM i pismenost o umjetnoj inteligenciji na učenike od predškole do drugog razreda i na netehničke obitelji; na sveučilišnom kraju [[genai-oop-programming-assessments-2026|istraživanje procjene OOP-a]] pronašlo je da GenAI sustavi iz 2026. nadmašuju prosječnog studenta na autentičnim programerskim ispitima, ali još uvijek padaju na sučeljima, apstraktnim klasama i nasljeđivanju — ponavljajuće konceptualne praznine koje označavaju upravo mjesto gdje je RM teško automatizirati. [[solving-vs-evaluating-genai-solutions|Randomizirano A/B crossover istraživanje]] pokazalo je da zadaci procjenjivanja i kritike daju ishode usporedive s generiranjem, što upućuje na to da se RM može uvježbavati prosudbom o pogrešnim UI rješenjima, iako dobici zahtijevaju namjernu postupnu potporu. Uz sve to stoji nastavnik: istraživanje s microbitom izravno povezuje poučavanje RM-a s [[teacher-education|obrazovanjem nastavnika]], a [[hashmi-socratic-physics-chatbot-2025|istraživanje sokratovskog chatbota]] veže precizno formuliranje problema koje RM zahtijeva uz mjerljivu uspješnost na kolegiju.

- **Validirani instrument pokazuje gdje je RM najteži.** Test računalnog mišljenja od 34 čestice izrađen uz dizajn usmjeren na dokaze i validiran teorijom odgovora na česticu na 461 studentu UI programiranja koncentrirao je težinu na prikaz podataka, slijed logičkih operatora i strukture petlji, a ne ravnomjerno po nastavnom planu ([[zhang-ct-ai-training-test-2026|Zhang i Zhang (2026.)]]).

### Računalno mišljenje i pomak s UI potrošača na proizvođače, stvaratelje i dizajnere

Središnji cilj RM-a u doba umjetne inteligencije je pomaknuti učenike i nastavnike s *pasivne konzumacije* UI rezultata prema *stvaranju, izgradnji i oblikovanju* s umjetnom inteligencijom i za nju — program koji RM usklađuje s konstrukcionističkim učenjem (učenjem stvaranjem). Povezani članci baze znanja sve izričitije iskazuju taj zaokret prema proizvođaču, stvaratelju i dizajneru. [[ai-writes-code-student-writes-model-2026|Istraživanje autorstva modela]] preokviruje učenje izgradnjom s genAI-om kao mjerljiv proces „autorstva modela“ — studenti stvaraju, otklanjaju pogreške i iteriraju na UI modelima, umjesto da samo konzumiraju UI-generirani kod ili odgovore. [[code-to-learn-genai-artifact-construction-2026|Okvir CtL-GenAI]] to operacionalizira kao [[constructivist|konstrukcionizam]] za doba genAI-a, tretirajući artefakte koje studenti grade s umjetnom inteligencijom kao motor razvoja RM-a. [[computational-thinking-ai-agent-creation|RM kroz stvaranje UI agenata]] pokazuje da oblikovanje, a ne samo upotreba UI agenata, izravno uvježbava razlaganje, apstrakciju i algoritamsko rasuđivanje.

Novi metaanalitički dokazi izoštravaju tu sliku. [[astor-computational-thinking-meta-review-2026|Metapregled 128 sustavnih pregleda RM-a]] nalazi da se područje usklađuje oko jedinstvene definicije RM-a kao rasuđivanja apstraktnim modelima koji rabe računalne korake i algoritme za rješavanje problema — upravo one vrste mišljenja koje gradi modele (a ne konzumira odgovore) kakvo zahtijeva proizvodno usmjereno učenje. [[tsingidou-ct-robotics-kindergarten-2026|Istraživanje RM-a i robotike u vrtiću]] pokazuje da čak i učenici rane dobi postaju proizvođači kroz igrom zasnovanu izgradnju s robotima, koristeći učenje utemeljeno na problemima, [[storytelling-in-education|pripovijedanje]] i postupnu potporu — razvojni prvi korak prema viđenju tehnologije kao nečega što se gradi, a ne samo upravlja. A [[solving-vs-evaluating-genai-solutions|istraživanje procjenjivanja i kritike]] pokazuje da se RM može uvježbavati prosudbom i otklanjanjem pogrešaka u pogrešnim UI rješenjima — proizvođački stav prema UI rezultatu koji se odupire zamci pasivne konzumacije.

Praktični zaključak je da poučavanje RM-a treba osmisliti tako da učenici *stvaraju stvari s umjetnom inteligencijom* — autorski oblikuju modele, grade agente, konstruiraju artefakte i kritiziraju UI rezultate — umjesto da primaju gotova rješenja. To i produbljuje RM i gradi [[ai-literacy|pismenost o umjetnoj inteligenciji]] kao participativnu i kreativnu, a ne tek konceptualnu. Nastavnici zauzvrat trebaju podršku da prijeđu s upotrebe UI alata na osmišljavanje UI-obogaćenih aktivnosti učenja (vidi [[teacher-role|ulogu nastavnika]] i [[professional-training|profesionalno usavršavanje]]).

Ponovna upotreba tuđih modela pripada proizvođačkom stavu: implementacija objavljenog UI modela — odabir, instalacija, pokretanje i validacija — može se poučavati kao naučiva, strukturirana vještina s rezervnim putem za svaki predviđeni neuspjeh, a tri studenta prijediplomskog studija [[chemistry-education|kemije]] bez programerskog iskustva reproducirala su i proširila model predviđanja enzim–supstrat u roku od četiri mjeseca ([[praise-non-programmer-ai-model-implementation-2026|Achterweust i sur. (2026.)]]).

### Praktične smjernice

Za edukatore je dosljedna poruka da se RM razvija kroz *eksplicitno, potpomognuto i vidljivo* bavljenje, a ne pasivnom UI upotrebom. Spojite robotiku s eksplicitnim preslikavanjem koncepata RM-a na kurikulum; koristite LLM-ove za [[simulation|simulaciju]], upravljanje prirodnim jezikom i skalabilnu procjenu rasta RM-a, dok ljudsku prosudbu čuvate za konstrukte poput sistemskog mišljenja; i redizajnirajte procjene tako da naglašavaju vrednovanje i dijagnostiku UI rezultata umjesto puke generacije. Kakav god bio kontekst — neumrežena igra u ranom djetinjstvu, roboti u srednjoškolskom [[stem-education|STEM obrazovanju]] ili virtualni tutori u [[higher-ed|visokom obrazovanju]] — strukturirajte aktivnost tako da učenici moraju rasuđivati o razlaganju, uzorku, apstrakciji i algoritmu, umjesto da primaju gotova rješenja.

### Veze s povezanim konceptima

Računalno mišljenje zajednički je kognitivni temelj ispod [[ai-literacy|pismenosti o umjetnoj inteligenciji]] i [[critical-thinking|kritičkog mišljenja]], kurikularna jezgra [[cs-education|računalnog obrazovanja]] i [[k-12|K-12]] informatike, i konceptualni cilj kojemu [[educational-robotics|obrazovna robotika]], [[game-based-learning|učenje temeljeno na igri]] i [[project-based-learning|učenje utemeljeno na projektima]] najbolje služe kada su tako osmišljeni. Produbljuju ga [[llm|veliki jezični modeli]] i [[generative-ai|generativna umjetna inteligencija]] kada se koriste kao alati postupne potpore, a to je vještina koju taksonomije učeničkih zabluda i procjene osjetljive na RM nastoje mjeriti. Nastavnici ga razvijaju kroz [[teacher-education|obrazovanje nastavnika]] i [[professional-training|profesionalno usavršavanje]], a prenosi se na područja uključujući [[physics-education|fiziku]] i [[stem-education|STEM]] općenito.

- **Računalno mišljenje predviđa učenje uz UI asistenta.** [[computational-thinking-aica-2026|Učenici osmog razreda]] s visokim računalnim mišljenjem značajno su nadmašili vršnjake s niskim RM-om u kolegiju programiranja uz UI asistenta, koristeći asistenta za razumijevanje, a ne za dohvaćanje odgovora.

## Uobičajene zablude

- **„UI uklanja potrebu za računalnim mišljenjem.“** [[chat-debugging-human-ai-collaboration-circuits|Istraživanje otklanjanja pogrešaka u chatu]] pronašlo je da su pri otklanjanju pogrešaka na sklopovima uz pomoć LLM-a **nedostaci u temeljnim konceptima i kritičkom mišljenju — a ne alat — bili ograničavajući čimbenik**. RM je ono što učeniku omogućuje da rezultat ocijeni, a ne prihvati, i upravo ta sposobnost čini UI pomoć uopće upotrebljivom.
- **„UI pomoć izjednačava uvjete u slabo opremljenim sredinama.“** Može, pod određenim uvjetima. **Kvazieksperiment od 14 tjedana sa 103 studenta prve godine u Nigeriji** pokazao je da je UI-potpomognuto učenje utemeljeno na problemima (ChatGPT i Teachable Machine) dalo dobitke, a UI kao „sposobniji vršnjak“ nosi RM tamo gdje druge usluge izostaju. No to je nalaz o strukturiranoj intervenciji, a ne svojstvo davanja [[conversational-ai|chatbota]] studentima.
- **„LLM-ovi ne mogu pouzdano procijeniti RM.“** [[llm-computational-thinking-physics-2026|Istraživanje procjene RM-a u fizici]] pronašlo je da LLM-ovi mogu **oponašati ljudske ocjenjivače** u bodovanju rasta u praksama podataka i praksama računalnog rješavanja problema na velikim kolegijima. Prepreka skaliranju procjene RM-a bila je kapacitet ocjenjivača, a to ograničenje slabi — što dizajnerski problem pomiče na pitanje mjeri li instrument RM ili poslušnost.
- **„RM je programerska vještina koju robotika slučajno poučava.“** **[[meta-analysis-systematic-review|Sustavni pregled]] 95 studija** potvrđuje da robotika potiče RM, kreativnost i rješavanje problema, ali i da **kontekst moderira ishod**: [[game-based-learning|igrom zasnovana]] provedba odgovara neformalnim okruženjima, dok se gamifikacija u formalnim razlikuje. RM je skup praksi koje se prenose neujednačeno, pa tvrdnja o prijenosu treba dizajn zadatka koji je doista korišten.

## Povezani koncepti

- [[cs-education]]
- [[stem-education]]
- [[ai-literacy]]
- [[k-12]]
- [[prompt-engineering]]
- [[adaptive-learning]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[project-based-learning]]
- [[physics-education]]
- [[scaffolding]]
- [[critical-thinking]]
- [[teacher-education]]
- [[simulation]]
- [[socratic-method]]
- [[misconceptions]]
- [[agentic-ai]]

## Povezani članci

- [[ai-pbl-computational-thinking-2026]]
- [[computational-thinking-ai-agent-creation]]
- [[reshaping-cs-education-genai]]
- [[prompt-problems-nl-programming-mistakes]]
- [[llm-computational-thinking-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[visual-query-tracer-declarative-logic-learning]]
- [[llm-intervention-design-cs-review]]
- [[academic-league-of-ai-2026]]
- [[ai-play-framework-early-childhood-2026]]
- [[edusim-llm-robotic-simulation-education-2026]]
- [[computational-thinking-educational-robotics-secondary-2026]]
- [[microbit-robotics-machine-learning-teacher-training-2026]]
- [[chat-debugging-human-ai-collaboration-circuits]]
- [[student-misconceptions-conditionals-loops-taxonomy]]
- [[genai-oop-programming-assessments-2026]]
- [[game-based-gamified-robotics-education-review-2026]]
- [[solving-vs-evaluating-genai-solutions]]
- [[zhang-ct-ai-training-test-2026]] — Test računalnog mišljenja u UI obuci (CTAT)
- [[computational-thinking-aica-2026]] — Razine računalnog mišljenja i UI asistenti za programiranje (2026.)
- [[ai-writes-code-student-writes-model-2026]] — Autorstvo modela: teorija i mjerenje učenja izgradnjom s genAI-om
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: konstrukcionistički okvir za izgradnju artefakata
- [[astor-computational-thinking-meta-review-2026]] — Metapregled RM-a iz 128 sustavnih pregleda
- [[tsingidou-ct-robotics-kindergarten-2026]] — Sustavni pregled RM-a kroz robotiku u vrtiću
- [[praise-non-programmer-ai-model-implementation-2026]] — PRAISE: reproducibilni tijek rada za neprogramere znanstvenike pri implementaciji objavljenih UI modela
