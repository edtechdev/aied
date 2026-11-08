---
title: "Omezení ve výzkumu AIEd"
created: "2026-08-15T09:18:04-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
updated: "2026-11-08T06:44:50-05:00"
translation_of: "concepts/limitations-in-aied-research"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

> **Omezení ve výzkumu AIEd** — opakující se slabiny a omezení, která ovlivňují, jakou důvěru můžeme vkládat do zjištění o AI ve vzdělávání a jak je mají čtenáři interpretovat. Prostupují jednotlivými studiemi: metodologická omezení (zobecnitelnost, velikost vzorku, validita, sebeposudek), problém rychlosti (AI a zjištění rychle stárnou, zatímco publikace zaostává), omezení výzkumné praxe (reprodukovatelnost, postupy FAIR, proprietární nástroje) a slabé využití teorie. Metodologická omezení jsou měřitelná, nikoli dojmová: v kritickém přehledu 80 studií HCI o [[critical-thinking|kritickém myšlení]] s AI nemělo 42 (52 %) žádnou kontrolní skupinu a většina ostatních se opírala o sebeposudek, takže pozitivní zjištění oboru stojí na designech, které nedokážou oddělit efekt AI od běžné reflexe ([[critical-review-critical-thinking-hci-research-ai-2026]]). Kódování výsledků je stejně nerovnoměrné: systematický přehled 103 studií vysokoškolského vzdělávání roztřídil svůj korpus do čtyřúrovňové typologie výsledků a 56 % z něj zařadil do jediného podmíněného vzorce, kde sebedůvěra a motivace rostly bez odpovídajícího zisku v trvalé kompetenci ([[generative-ai-higher-education-systematic-review-2026]]). Uznání těchto omezení je zásadní pro kritické čtení literatury i pro navrhování silnějších studií.

## Otázky k zamyšlení

- Jak moc byste věřili titulku „AI doučování zvyšuje učení o 30 %“, kdybyste zjistili, že pochází od 30 studujících v jednom kurzu na jedné instituci? Stránka označuje zobecnitelnost a malé vzorky za opakující se omezení — co byste chtěli vědět, než na jakékoli jednotlivé zjištění jednáte?
- Nápadným omezením je „problém rychlosti“: AI se vyvíjí rychleji, než se zjištění publikují, takže studie jedné generace modelů může už popisovat zastaralý systém. Jak by to mělo změnit důvěru, kterou vkládáte do výzkumu vzdělávání s AI?
- Mnoho studií se opírá o [[self-report-measures|sebeposuzované]] postoje a používání, které jsou zkreslené — lidé přeceňují svou kompetenci a nedostatečně hlásí zneužití. Odpověděli jste někdy na průzkum o vlastních dovednostech nebo chování způsobem, který neodpovídal realitě? Proč se měřítka založená na vnímání tak často rozcházejí s objektivním výkonem?
- Stránka poznamenává, že známé rámce, jako je Bloomova taxonomie, se často chybně čtou jako striktní žebříky, a že i široce používané teorie, jako je teorie [[cognitive-offloading|kognitivní zátěže]], byly zpochybněny. Kdy jste viděli teorii citovanou jako uzavřenou pravdu v kontextu, kde byly její vlastní důkazy ve skutečnosti sporné?
- Většina výzkumu AI závisí na proprietárních, neprůhledných modelech, jejichž data a aktualizace nemůžete prozkoumat. Pokud nemůžete ověřit, který model přesně výsledek vytvořil, jak moc můžete věřit tvrzením na něm postaveným — a co by učinilo zjištění reprodukovatelnějšími?
- Pokud jste vyučující nebo návrhář bez času číst primární výzkum, jak rozhodujete, která tvrzení o AI jsou dost důvěryhodná, aby změnila vaši praxi — vzhledem k tomu, že literatura je roztříštěná, prozatímní a psaná pro výzkumníky?

## Úvod

AI ve vzdělávání je rychle se vyvíjející, heterogenní obor a jeho důkazní základna nese specifickou sadu omezení, která by výzkumníci, praktici i tvůrci politik měli zvažovat při použití jakéhokoli zjištění. Některá jsou společná s širší literaturou [[learning-sciences|věd o učení]] a psychologie; jiná jsou umocněna nebo jedinečná povahou samotné AI. Tato stránka je organizuje do čtyř průřezových oblastí.

## Metodologická omezení

Stránka [[research-methods-aied|výzkumných metod]] znalostní báze podrobně popisuje silné a slabé stránky každého designu. Několik omezení se opakuje napříč designy a zaslouží si zvláštní pozornost:

- **Zobecnitelnost.** Zjištění z jednoho kurzu, instituce, oboru nebo národního kontextu se nemusí přenášet. Malé vzorky, vzorky příležitostného výběru nebo vzorky z jedné instituce omezují externí validitu; výsledky jednoho nástroje AI se zřídka rozšiřují na jiný nástroj nebo kontext.

- **Mezinárodní srovnání přesvědčení nesou riziko měření.** Pětizemní průzkum 1 405 učitelů [[k-12]] použil automatický strojový překlad bez zpětného překladu nebo testování měřicí invariance a měřil obavy z [[academic-integrity|plagiátorství]] a [[creativity|kreativity]] jednou položkou, takže jeho kontrasty mezi zeměmi nelze číst jako ekvivalentní konstrukty ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).
- **Rigoróznost na úrovni syntézy je samostatná osa od rigoróznosti primárních studií.** Metaanalýza může splnit vlastní kritéria zařazení a přesto sloučit studie, které se liší designem, věrností implementace a měřítkem výsledku, aniž by cokoli z toho vážila: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan a kolegové (2026)]] výslovně uvádějí, že nepoužili žádný formální nástroj hodnocení kvality a za práh rigoróznosti považovali kritéria zařazení, takže kvaziexperimentální a randomizovaná studie přispěly do sloučeného odhadu pro [[stem-education|STEM]] stejně. Tentýž přehled ukazuje související riziko reportování: jeho heterogenita je uváděna jako I² = 82,98 % u modelu s fixními efekty a I² = 15,75 % u modelu s náhodnými efekty, což znamená, že čtenáři, kteří vytrhnou jediný údaj o heterogenitě bez jeho modelu, nemohou zjistit, jak nekonzistentní korpus skutečně je. Syntézu posuzujte podle toho, jak nakládala se závislými veličinami efektu, kvalitou a heterogenitou, ne jen podle toho, zda dodržela vyhledávací protokol.

- **Design vyhledávání určuje titulní čísla syntézy.** Ve scopingovém přehledu 195 studií [[teacher-education|vzdělávání učitelů]] byly digitální kompetence a [[tpack|TPACK]] explicitními deskriptory vyhledávání, zatímco návrh výuky a hodnocení ekvivalent neměly, takže uváděných 46,5 % a 1,9 % charakterizuje korpus, který vyhledávání vrátilo, nikoli obor ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández et al. (2026)]]).
- **Malé velikosti vzorků.** Mnoho studií AIED má nízkou statistickou sílu — příliš málo účastníků na spolehlivé zachycení smysluplných efektů nebo na podporu silných tvrzení, která se z nich někdy vyvozují.
- **Rozšíření dat může vyrobit titulní metriku.** U automatického hodnotitele esejů, jehož trénovací část obsahovala práce 83 studujících, vygenerované odpovědi úrovně 1 — šablony, zkrácení, odstranění klíčových slov — zvedly shodu pro Focus o +0,346 kvadraticky vážené kappy z výchozí hodnoty 0,028, takže nejsilnější ordinální signál stál na textu, který žádný studující nenapsal ([[automated-essay-scoring-critical-thinking-physics-2026|Firdausi et al. (2026)]]).
- **Skóre na koncovém bodě může skrývat to, co se studuje.** V přehledu PRISMA 103 studií [[higher-ed|vysokoškolského vzdělávání]] uvádělo 56 % zisků, které byly podmíněné scaffoldingem nebo ověřováním, a nulové rozdíly ve známkách často doprovázely skutečné změny v procesu — více ladění, více kontrolních cyklů — takže známky samy nemohou říct, zda [[generative-ai|GenAI]] praxi posílila, nebo vyprázdnila ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi a Samaha (2026)]]).

- **Design validace může vyrobit titulní číslo.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara a Halloluwa (2026)]] otestovali patnáct modelů na rozpoznávání známosti z EEG a ukazují, že standardní stratifikovaná křížová validace umožňuje časový únik a uvádí až 0,9853 F1, zatímco validace Group K-Fold nezávislá na pokusech snižuje vrchol na 0,6038 F1 — stále nad náhodou, ale daleko od uváděného výsledku.
- **Benchmarky mohou dodávat selhání, která hlásí.** Odborné přehodnocení 250 zamítnutých fyzikálních úloh připsalo 238 (95,20 %) chybám benchmarku nebo hodnotitele a jen 12 (4,80 %) skutečným chybám modelu, takže měřená chybovost modelu nemůže klesnout pod chybovost nástroje ([[frontier-models-physics-benchmark-audit-2026|Ansari et al. (2026)]]).
- **Validita a měření.** [[assessment-validity|Konstruktová validita]] je často slabá: zástupné ukazatele „učení“, „[[student-engagement|angažovanosti]]“ nebo „gramotnosti“ se široce liší a nástroje nejsou vždy validovány pro populaci nebo konstrukt, který se studuje. Přesnost [[benchmark|benchmarku]] se nerovná vzdělávací účinnosti.
- **Sebeposudky a průzkumová data.** Velká část korpusu se opírá o sebeposuzované postoje, motivaci a používání. Sebeposudek podléhá zkreslení — respondenti přeceňují kompetenci, nedostatečně hlásí [[ai-misuse-learning-harm|zneužití]] a špatně odhadují své vlastní chování — takže měřítka založená na vnímání se často rozcházejí s objektivním výkonem (viz [[ai-literacy-assessment-misalignment]] a [[educational-measurement|Vzdělávací měření]]).
- **Kontext a reportování validace lze kvantifikovat napříč literaturou.** Přehled PRISMA-ScR 421 studií NLP o komentářích k hodnocení výuky zjistil zemi neurčenou u 221 studií, rozsah jedné instituce u 232 z 284 určených případů (81,7 %), externí validaci u 33 (7,8 %) a shodu mezi anotátory u 54 (12,8 %) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher & da Silva (2026)]]).
- **Bohatost reportování je měřitelná a typ metody ji předpovídá.** V 888 článcích o automatizaci přehledů uvádělo 38,0 % článků o softwaru nebo produktu od roku 2023 žádné hodnocení, proti 9,3 % článků o LLM, a 52 % ze 118 článků o LLM zaměřených jen na pozitivní výsledky stále signalizovalo nesplněnou laťku reliability — vzorec, který stojí za pěti úrovněmi zveřejňování PRISMA-LLM ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta & Lin (2026)]]).
- **Standardizace v rámci každého datasetu může skrýt nesprávné vyjádření rozptylu.** Když byly syntetické vzdělávací kohorty standardizovány podle vlastního rozptylu, skutečnost, že jejich týdenní struktura kolísala 2,6 až 4,9krát méně než u reálných kohort, se pro uváděné statistiky stala neviditelnou — rutinní předzpracování, slovy autorů nikoli hypotetická obava ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake, 2026]]).

- **Štítky generované modelem nejsou zlatý standard.** Když štítky, které trénují nebo hodnotí systém, samy produkují jazykové modely, shoda mezi anotátory nemůže stanovit validitu: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] nikdy nevalidovali své anotace tvrzení proti lidským zlatým štítkům a 49 klasifikátorů založených na enkodéru, které uvolňují, tuto provenienci dědí a nemusí být validní tam, kde se aplikace liší v podstatných dimenzích. Jejich schéma také striktně zaostávalo za doladěným klasifikátorem trénovaným na odborně anotovaných datech (makro-F1 0,673 proti 0,76), takže korpusy označené odborníky mají smysl, když je vyžadována vysoká jistota.
- **Důkazní základna je sama nerovnoměrně rozložena.** Scopingový přehled 407 studií [[formative-assessment|formativního hodnocení]] podporovaného technologiemi čerpal jen z Web of Science a Scopus. Vyloučil také 61 záznamů podle jazykových kritérií, takže geografická nerovnováha, kterou obor hlásí, může částečně odrážet to, které zdroje jsou indexovány ([[bulut-technology-supported-formative-assessment-2026|Bulut, 2026]]).

## Problém rychlosti: AI se vyvíjí rychleji než zjištění

AI se nepřetržitě mění a závěry vyvozené z jakéhokoli daného modelu nebo systému mohou rychle **zastarat**. Studie jedné generace [[llm|LLM]] nemusí popisovat tu příští; skóre benchmarků, kvalita doučování a dokonce praktická užitečnost zjištění se posouvají, jak se modely zlepšují. K tomu se přidává, že **proces publikace je pomalý** — od návrhu studie po recenzovanou publikaci může uplynout rok i více — takže publikovaný výsledek už může popisovat zastaralý systém. Recenzenti a čtenáři by proto měli zjištění AIED považovat za prozatímní, na datum citlivá tvrzení, nikoli za stabilní pravdy, a upřednostňovat práci nedávnou, orientovanou na replikaci a explicitně uvádějící verze.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni a Fryer (2026)]] činí důsledek konkrétní pro jednu literaturu: protože systémy založené na [[rag|RAG]] se veřejně dostupnými staly až v listopadu 2023, argumentují, že zjištění o [[intelligent-tutoring|inteligentním doučování]] před rokem 2023 — opírající se o pravidlové, na klíčová slova orientované nebo heuristické NLP systémy, které mají s dnešními velkými jazykovými modely jen málo funkční podoby — by měla být považována za historický kontext, nikoli za přímo srovnatelné důkazy, a uvádějí, že jejich přehled nenašel žádné publikované [[rct|RCT]], které by zkoumalo [[conversational-ai|chatbota]] AI založeného na RAG ve vysokoškolském vzdělávání po celý akademický semestr. Z toho plyne, že základní otázky o tom, jak genAI ovlivňuje učení, může být nutné znovu klást u každé nové generace modelů, místo aby se uzavíraly slučováním starších výsledků.

## Omezení výzkumné praxe

Několik omezení se týká provádění a infrastruktury samotného výzkumu:

- **Nedostatek reprodukovatelnosti.** Studie často neuvádějí dost podrobností (prompty, verze modelů, hyperparametry, data, analytický kód), aby je jiní mohli reprodukovat nebo ověřit — což je zvláštní problém vzhledem k tomu, jak citlivý je výstup LLM na prompty a nastavení.
- **Postupy FAIR ve výzkumu.** Otevřená a reprodukovatelná praxe — **F**indable (dohledatelná), **A**ccessible (přístupná), **I**nteroperable (interoperabilní), **R**eusable (znovupoužitelná) data a kód, předregistrace a sdílené benchmarky — je v AIED přijímána nerovnoměrně. Slabé dodržování principů FAIR ztěžuje opětovné použití, srovnávání a stavění na studiích.
- **Proprietární nástroje a modely.** Velká část výzkumu závisí na uzavřených, proprietárních [[ai-technologies|systémech AI]], jejichž vnitřní chování, trénovací data a aktualizace modelů jsou neprůhledné a mohou se změnit bez oznámení. To omezuje reprodukovatelnost, znemožňuje přesnou replikaci a může vázat zjištění na plán prodejce. Vyvolává to také otázky nezávislosti hodnocení (viz [[ai-ed-evaluation|Hodnocení AIED]]).

## Slabé nebo omezené využití teorie

Opakující se kritikou je, že mnoho empirických článků má **omezené nebo zastaralé teoretické rámování**. Výzkumníci mohou:

- **Přebírat teorie nekriticky.** Rámce se přebírají, protože jsou známé, aniž by se plně zabývaly jejich předpoklady, rozsahem nebo důkazní základnou.
- **Chybně interpretovat rámce jako pevné posloupnosti.** Několik široce používaných rámců se považuje za uspořádané žebříky, po nichž studující musí stoupat z „nízkého“ do „vysokého“ stadia — důkazy však nepodporují vždy začínat na dně. Například:
    - **Bloomova taxonomie** se často čte jako striktní hierarchie (zapamatování → aplikace → hodnocení), vyšší cíle však nevyžadují nejprve procvičovat nižší; úlohy lze navrhnout tak, aby zapojovaly hodnocení nebo tvorbu od začátku (viz [[cross-dataset-bloom-question-classification]]).
    - **ADDIE** a další modely návrhu výuky se někdy považují za rigidní lineární fáze, nikoli za iterativní, flexibilní plánovací heuristiky, kterými mají být (viz [[learning-design|Návrh výuky]]).
- **Přehlížejí sporné teorie.** Některé teorie široce používané v AIED byly samy zpochybněny. **Teorie kognitivní zátěže** byla například kritizována a její empirická tvrzení byla v předchozích studiích vyvrácena nebo zpochybněna, přesto se v nové práci AIED nadále vyvolává jako uzavřený základ.

Důsledkem není, že [[theories-and-frameworks|teorie a rámce]] jsou zbytečné, ale že by se měly používat s ohledem na svou skutečnou důkazní základnu, zamýšlený rozsah a známou kritiku — nikoli jako samozřejmé [[scaffolding|scaffoldy]] nebo rigidní procedurální posloupnosti.

## Krize metaanalytických důkazů

Rostoucí soubor metavýzkumu — přehledů, které zkoumají přehledy — argumentuje, že titulní tvrzení oboru o učebních ziscích poháněných AI stojí na důkazní základně mnohem slabší, než se zdá. Tři vzájemně se doplňující kritiky to dokazují neobvykle silně:

- **Zkreslení pozitivních syntéz je závažné a kvantifikovatelné.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] ve studiové meta-metaanalýze 1 840 veličin efektu ze 67 metaanalýz našli silné důkazy publikačního zkreslení (všechny Eggerovy testy *p* < 0,0001) a extrémní heterogenitu mezi studiemi (τ = 0,869). Efekty korigované na publikační zkreslení měly zhruba **jednu třetinu** běžně uváděné velikosti (SMD = 0,196 proti mediánu 0,67 v publikované literatuře), s predikčním intervalem od −1,521 do +1,908 — od velké škody po velký prospěch. Žádný výsledek, obor, úroveň ani podskupina podle role AI nevykázaly konzistentní zisky a mezi studiemi před rokem 2023 a po něm nebyl rozdíl. Jejich verdikt: široká tvrzení o zobecněných učebních ziscích jsou předčasná.
- **Metaanalytické metody se systematicky používají nesprávně.** Forenzní audit [[oneill-presumed-effective-meta-analysis-2026|O'Neilla (2026)]] 14 vysoce citovaných metaanalýz AIED zjistil, že *žádná* neposkytla validní základ pro svá tvrzení: žádná neměla koherentní konstrukt (zacházely s nástrojem „ChatGPT“, jako by šlo o jedinou intervenci, a slučovaly výsledky testů, motivaci, [[self-efficacy|sebeúčinnost]] a postoje do jediného čísla „[[learning-gains|akademického výkonu]]“); uváděná heterogenita byla závažná, s I² od 77,2 % do 94,4 % napříč 13 metaanalýzami, které ji uváděly, a 12 z těch 13 nad 80 %, a nikdy nebyla vyřešena (žádná nesplnila minimální velikost podskupiny deseti studií, pět se opíralo o podskupiny s jedinou studií a tři další o podskupiny se dvěma); dvanáct zacházelo se závislými veličinami efektu z téže studie jako s nezávislými, což nafukovalo zdánlivé důkazy; a žádná validně neposoudila publikační zkreslení (běžné byly diskreditované metriky fail-safe N a nesprávně použité Eggerovy testy). Protože I² závisí na přesnosti, nemůže samo o sobě stanovit, jak daleko od sebe skutečné efekty jsou, a reportování, které by to ukázalo, z velké části chybělo: jen čtyři metaanalýzy uvedly rozptyl mezi studiemi (τ²) a jen dvě uvedly predikční interval, oba zahrnovaly nulu. Většina (61 %) náhodně prověřených primárních studií byla problematická a jednu studii se zfalšovanými referencemi zařadilo šest ze 14 metaanalýz.
- **„Intervence“ je černá skříňka.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] oživují debatu o médiích a metodách a argumentují, že „ChatGPT“ je nástroj, nikoli metoda — ptát se, zda „zlepšuje učení“, je non sequitur. Při auditu části studií za metaanalýzou Denga et al. (2025) zjistili, že jen 21 % srovnání mělo dobře definovanou intervenci, kontrolní skupinu *a* validní měřítko učení; uváděné velikosti efektu (g = 0,7) dokonce převýšily ty u účelově stavěných [[intelligent-tutoring|inteligentních doučovacích systémů]] (0,66), což je varovný signál, že „intervence“ byla heterogenní „tajná přísada“.

Konvergence těchto tří nezávislých kritik je sama důkazem: napříč různými metodami, korpusy a rámováním dospívají ke stejnému závěru — že pozitivní veličiny efektu AIED, zejména z raných metaanalýz, pravděpodobně odrážejí **publikační zkreslení, nekoherenci konstruktů a metodologické zkratky** stejně jako (nebo více než) skutečné učební zisky. To neznamená, že nástroje AI nemají vzdělávací hodnotu; znamená to, že *oborové* důkazy o jejich hodnotě jsou v současnosti nafouknuté a musí se tak číst. Přesouvá to také odpovědnost na [[meta-analysis-systematic-review|kvalitu syntézy]]: metaanalýza je jen tak důvěryhodná, jak je koherentní její konstrukt, jak nezávislé jsou její veličiny efektu, jak přiměřená je její analýza moderátorů a heterogeneity a jak validní je její posouzení publikačního zkreslení — přičemž kritiky ukazují, že každý z těchto bodů je běžně porušován.

## Kritické čtení literatury AIEd

Dohromady tato omezení argumentují pro kritické, vícesignálové čtení výzkumu AIED: zkontrolujte, zda se zjištění zobecňuje a má dostatečnou statistickou sílu; ověřte, jak byly konstrukty měřeny (a zda tvrzení nestojí na sebeposudku); upřednostňujte nedávnou, verze uvádějící a reprodukovatelnou práci; a zpochybňujte teoretické rámování, místo abyste známé rámce brali jako dané. To je protějšek rigorózní [[research-methods-aied|volby metody]] a [[ai-ed-evaluation|hodnocení]]: dobré metody a dobré hodnocení jsou nutné, ale teprve čtení s pozorností k omezením mění důkazy v obhajitelná rozhodnutí.

## Od výzkumu k praxi

Dalším, praktickým omezením je **výzva aplikovat výzkum na [[teacher-role|výuku]] a návrh výuky**. Praktici — vyučující, [[stakeholders|návrháři výuky]] a vzdělavatelé akademických pracovníků — často nemají čas ani specializovanou odbornost číst, posuzovat a překládat primární výzkum do konkrétních rozhodnutí ve třídě. Literatura je rozsáhlá, roztříštěná a psaná pro výzkumníky; zjištění se uvádějí se statistickými a metodologickými podrobnostmi, které nejsou okamžitě použitelné; a protože tvrzení jsou prozatímní (viz problém rychlosti výše), praktik nemůže jedinou studii jednoduše brát doslova. Vzniká tím mezera mezi tím, co důkazy podporují, a tím, co se skutečně dostane do [[pedagogy|výukové praxe]].

Smyslem této znalostní báze je pomoci tuto mezeru uzavřít — usnadnit sledování, interpretaci a aplikaci výzkumu AI ve vzdělávání v praxi — tím, že pečlivě vybírá open-access zjištění do strukturovaných, přístupných shrnutí, propojuje související práci přes [[ai-education|stránky konceptů]] a označuje omezení, která by čtenáři měli zvážit. Usiluje o podporu [[interpreting-and-applying-aied-research|praxe informované důkazy]] ve výuce a návrhu výuky a tím zároveň odhaluje mezery a otázky, které mohou informovat nový výzkum a vývoj. Porozumění limitům výzkumu tedy není samoúčelné: je to to, co praktikům umožňuje vhodně aplikovat zjištění a výzkumníkům navrhovat silnější studie, které lépe slouží praxi.

## Dvě pasti auditu, které stojí za to znát

Dvě konkrétní praktiky reportování nafukují nebo zkreslují syntézu a obě jsou viditelné v publikovaném záznamu, nikoli hypotetické.

**Údaj o heterogenitě závisí na modelu a model se uvádí zřídka.** Heterogenita jednoho přehledu je uváděna jako **I² = 82,98 % u modelu s fixními efekty a I² = 15,75 % u modelu s náhodnými efekty**. Obě hodnoty popisují stejná data. Čtenář, který vytrhne jediné číslo heterogenity bez modelu, dostal technické tvrzení bez interpretace a rozdíl mezi „většina rozptylu je nevysvětlená“ a „malá část rozptylu je nevysvětlená“ je rozdílem mezi zavržením oboru a důvěrou v něj.

**Titulní procento může být artefaktem vyhledávacích termínů.** Scopingový přehled 195 studií vzdělávání učitelů učinil z digitální kompetence a [[tpack|TPACK]] explicitní deskriptory vyhledávání, zatímco návrh výuky a hodnocení ekvivalentní termín neměly, takže uváděných **46,5 % a 1,9 %** jsou míry, které sama dotazovací formulace zkonstruovala. Tvrzení o prevalenci je jen tak smysluplné, jaké je vyhledávání za ním.

**A základní míra je číslo, které nikdo neuvádí.** Metodologická omezení jsou zde měřitelná, nikoli dojmová: v kritickém přehledu 80 studií HCI o kritickém myšlení s AI **42 (52 %) nemělo žádnou kontrolní skupinu** a většina ostatních se opírala o sebeposudek. Když více než polovina pozitivních zjištění oboru pochází z designů, které nedokážou oddělit efekt AI od běžné činnosti, vhodnou výchozí pravděpodobností u jakéhokoli jednotlivého zjištění je skepse, ne prozatímní přijetí.

## Časté mylné představy

- **„Sekce omezení jsou šablonovitá fráze.“** Metodologická omezení jsou **měřitelná, nikoli dojmová**: v kritickém přehledu **80 studií HCI** o kritickém myšlení s AI **42 (52 %) nemělo žádnou kontrolní skupinu**. Právě přesný počet činí omezení použitelným.
- **„Heterogenita je jediné číslo, které můžete citovat.“** Tentýž přehled ukazuje riziko reportování: heterogenita je uváděna jako **I² = 82,98 % u modelu s fixními efekty a I² = 15,75 % u modelu s náhodnými efekty**. Stejná data dávají příběh o devíti bodech, nebo o dvou, podle zvoleného modelu, takže citované I² bez modelu je neinterpretovatelné.
- **„Velký uváděný efekt je číslo, kterému věřit.“** Titulní číslo, jako efekt z **30 studujících v jednom kurzu na jednom pracovišti**, je běžnou podobou křehkého tvrzení a počet studií bez kontrol ukazuje, jak často tato křehkost zůstává nehlášena.

## Související koncepty

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied]] — Vývoj teorie v AI ve vzdělávání

## Související články
- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — Chatboti AI ve vysokoškolském vzdělávání: srovnání očekávání a důkazů (Thoeni & Fryer 2026)

- [[ground-truth-reliability-aied]] — Reliabilita a validita zlatého standardu při hodnocení
- [[ai-literacy-assessment-misalignment]] — Sebeposuzovaná versus výkonová gramotnost v oblasti AI
- [[machines-misread-pedagogical-quality]] — Proč stroje špatně čtou pedagogickou kvalitu
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Kritické limity AI tutorů a využití teorie
- [[cross-dataset-bloom-question-classification]] — Bloomova taxonomie a klasifikace otázek
- [[eeg-familiarity-automated-assessment-2026]] — Automatizace hodnocení studujících: predikce známosti z EEG
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause (kritika srovnání médií)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-metaanalýza: efekty AI korigované na publikační zkreslení ~1/3 uváděné velikosti
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forenzní audit 14 metaanalýz AIED
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: empirický rámec reportování pro systematické přehledy s asistencí AI
- [[frontier-models-physics-benchmark-audit-2026]] — How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Kritéria zařazení jako práh rigoróznosti a údaj o heterogenitě, který se mění s modelem (Doğan et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Clusterově randomizovaný třídní pokus, jehož výsledek výkonu nedosáhl významnosti (Rücker & Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: doučování AI a člověkem přináší ekvivalentní učební zisky u GRE
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: schémata založená na tvrzeních pro auditovatelné kódování vzdělávacích dialogů
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data

- [[digital-competence-ai-responsive-pedagogy-2026]] — Scopingový přehled 195 studií vzdělávání učitelů, kde design vyhledávacího řetězce utváří uváděné frekvence
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Mezinárodní průzkum učitelů K-12: strojově přeložené položky, jednopoložkové míry obav, žádné testování invariance
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Systematický přehled 103 studií GenAI ve vysokoškolském vzdělávání: 56 % podmíněných zisků, známky maskující změnu procesu (Hawi & Samaha 2026)
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Rozšíření dat může vyrobit titulní metriku
