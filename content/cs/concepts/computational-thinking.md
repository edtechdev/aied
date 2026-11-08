---
title: "Počítačové myšlení"
created: "2026-08-09T10:44:35-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
updated: "2026-11-08T06:31:34-05:00"
translation_of: "concepts/computational-thinking"
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

> **Počítačové myšlení** — přístup k řešení problémů zahrnující dekompozici, rozpoznávání vzorů, abstrakci a algoritmický design. Ve [[ai-education|vzdělávání v AI]] je počítačové myšlení zároveň předpokladem pro porozumění systémům AI a dovedností, kterou mohou nástroje AI pomoci rozvíjet.

## Otázky k zamyšlení

- Když řešíte problém tak, že ho rozložíte na části, všimnete si vzorů, abstrahujete podstatné a navrhnete kroky, už děláte počítačové myšlení — i bez počítače. Kde jste to nedávno dělali?
- Častý předpoklad je, že počítačové myšlení je totéž jako programování nebo „počítačová gramotnost". Jak se mohou lišit a proč na tom může záležet při výuce?
- Výzkum naznačuje, že schopnost studentů posoudit návrhy AI omezují jejich mezery v základních konceptech — nikoli samotný nástroj AI. Co musí studující už chápat, než může kriticky hodnotit výstup AI?
- Někteří tvrdí, že počítačové myšlení má studující posunout od pasivního konzumování výstupů AI k budování, kritice a navrhování s AI. Jak by skutečně vypadala třída, která studenty pojímá jako producenty, nikoli konzumenty?
- Generativní AI už dokáže skórovat růst počítačového myšlení studentů — přesto mají lidé i AI potíže s nejtěžším konstruktem, systémovým myšlením. Kde by se podle vás automatizace hodnocení měla zastavit a proč?
- Výzkum robotiky zjišťuje, že počítačové myšlení se rozvíjí jen tehdy, když jsou koncepty učiněny explicitními a mapovány na [[curriculum-design|kurikulum]], nikoli pojímány jako izolovaná technická cvičení. Jaké je riziko výuky „technických dovedností" bez pojmenování myšlení, které je pod nimi?

## Úvod

### CT ve třídě éry AI

Propojené články v této znalostní bázi se shodují na ústředním tvrzení: počítačové myšlení (CT) je koncepčním základem, který studující potřebují, aby se mohli kriticky zabývat AI, a zároveň dovedností, kterou dobře navržené učení podporované AI nejpřímo prohlubuje. Níže jsou důkazy seskupeny do čtyř témat vycházejících z propojených článků.

- **CT jako základ gramotnosti v AI a kritické angažovanosti.** Několik studií ukazuje, že CT je to, co studujícím umožňuje výstupy AI hodnotit, nikoli jen konzumovat. [[chat-debugging-human-ai-collaboration-circuits|Výzkum ladění chatu]] zjistil, že když vysokoškoláci ladili analogové obvody s pomocí LLM, limitujícím faktorem byly jejich *mezery v základních konceptech a kritickém myšlení* — nikoli nástroj, protože studentům chyběly klíčové myšlenky potřebné k posouzení návrhů AI. [[llm-intervention-design-cs-review|Přehled designů intervencí s LLM]] rovněž uzavírá, že to, co odlišuje účinné intervence od „frustrace z nástroje", je tlak [[cs-education|vzdělávání v informatice]] k počítačovému myšlení namísto zvládnutí syntaxe. V [[early-childhood-elementary-ai-education|raném dětství]] [[ai-play-framework-early-childhood-2026|rámec AI-Play]] buduje nepočítačové, hravé [[ai-literacy|základy gramotnosti v AI]] tím, že děti učí, že „AI je systém složený z částí" a „AI se učí z příkladů" — vývojově zakotvenou první vrstvu CT. A [[academic-league-of-ai-2026|akademická liga AI]] spojuje CT s reálnými občanskými projekty AI prostřednictvím [[project-based-learning|projektového učení]] a zasazuje [[ai-literacy|gramotnost v AI]] do praxe. Společně to naznačuje, že CT je přenositelné kognitivní jádro gramotnosti v AI.

- **Vzdělávací robotika jako nositel CT.** Robotika je nejstudovanějším kontextem rozvoje CT napříč [[k-12]] a [[stem-education|vzděláváním v STEM]]. [[computational-thinking-educational-robotics-secondary-2026|Výzkum na středních školách]] tvrdí, že vzdělávací robotika posiluje [[problem-solving|řešení problémů]] a kritické myšlení jen tehdy, když jsou koncepty CT učiněny explicitními a mapovány na kurikulum [[stem-education|STEAM]], nikoli pojímány jako izolovaná technická cvičení. [[game-based-gamified-robotics-education-review-2026|Systematický přehled 95 studií]] potvrzuje, že robotika podporuje CT, [[creativity|kreativitu]] a řešení problémů a že [[game-based-learning|učení založené na hře]] se hodí pro neformální prostředí, zatímco gamifikace dominuje formálním třídám a podporuje projektové učení. [[microbit-robotics-machine-learning-teacher-training-2026|Důkazy z přípravy učitelů]] ukazují, že integrovaná intervence Micro:bit + robot + [[machine-learning|strojové učení]] přinesla významné zisky ve znalostech CT (d = 0,638) v počátečním vzdělávání učitelů, a autoři argumentují, že robotika by měla být zabudována tak, aby budoucí učitelé mohli CT učit. LLM mohou bariéru dále snížit: [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] spojuje LLM s robotickou simulací, takže začátečníci ovládají roboty přirozeným jazykem, čímž je robotika s vloženým CT dostupná bez programování na nízké úrovni.
- **AI jako „schopnější vrstevník" může nést CT v nedostatečně vybavených kurzech robotiky.** Čtrnáct týdnů trvající kvaziexperiment se 103 vysokoškoláky prvního ročníku v Nigérii zjistil, že [[problem-based-learning|učení založené na problémech]] podporované AI (ChatGPT a Teachable Machine v [[sociocultural-learning|zóně proximálního vývoje]]) překonalo konvenční výuku v posttestu počítačového myšlení a v úspěšnosti v programování robotů, bez moderace pohlavím ([[ai-pbl-computational-thinking-2026|studie robotiky AI-PBL (2026)]]).

- **LLM jako nástroje pro hodnocení a rozvoj CT.** [[generative-ai|Generativní AI]] nabízí škálovatelné způsoby měření a scaffoldování CT. [[llm-computational-thinking-physics-2026|Výzkum hodnocení CT ve fyzice]] ukázal, že LLM dokážou napodobit lidské hodnotitele při skórování růstu v Data Practices a Computational Problem-Solving Practices ve velkých kurzech [[physics-education|fyziky]] — zatímco lidé i LLM měli potíže se složitějším konstruktem systémového myšlení, což vyznačuje jasnou hranici automatizace. [[visual-query-tracer-declarative-logic-learning|Vizualizace dotazů]] ukazuje, jak [[visualization|vizualizace]] může scaffoldovat abstraktní výpočet a budovat intuici podporující rozvoj CT. [[student-misconceptions-conditionals-loops-taxonomy|Taxonomie mylných představ o podmínkách a cyklech]] poskytuje jemnozrnné cíle pro [[scaffolding]] a pro automatizovanou detekci mylných představ a propojuje se s [[misconceptions|mylnými představami]]. Tyto nástroje však fungují nejlépe, když vede [[pedagogy|pedagogický]] design: [[llm-intervention-design-cs-review|přehled v informatice]] zjistil, že semestrální designy „virtuálního tutora" se scaffoldovanou zpětnou vazbou soustavně zlepšovaly CT, zatímco nestrukturovaný přístup k nástrojům zvyšoval frustraci.

Trvalé kompetence se posouvají, jakmile je implementace automatizována: zpráva z workshopu uvádí abstrakci, počítačové myšlení a „spektrum verifikace" jako dovednosti, které je třeba učit, a cituje pokus s téměř 1 000 studenty, kde neomezený přístup ke GPT-4 zvýšil výkon v praxi o 48 %, ale po odebrání AI snížil skóre u zkoušky o 17 % ([[reshaping-cs-education-genai|Lee et al. (2026)]]).

- **CT napříč K-12, přípravou učitelů a redesignem hodnocení.** CT pokrývá celé spektrum od [[k-12]] po [[higher-ed|vysokoškolské vzdělávání]] a přetváří hodnocení. Na konci raného dětství AI-Play rozšiřuje CT a gramotnost v AI na žáky Pre-K–K2 a netechnické rodiny; na univerzitním konci [[genai-oop-programming-assessments-2026|studie hodnocení OOP]] zjistila, že systémy generativní AI z roku 2026 překonávají průměrného studenta v autentických programátorských zkouškách, ale stále selhávají u rozhraní, abstraktních tříd a dědičnosti — opakující se koncepční mezery, které přesně vyznačují, kde CT zůstává obtížně automatizovatelné. [[solving-vs-evaluating-genai-solutions|Randomizovaná crossover studie A/B]] ukázala, že úkoly hodnocení a kritiky přinášejí srovnatelné výsledky jako generování, což naznačuje, že CT lze procvičovat posuzováním vadných řešení AI, i když zisky vyžadují záměrné scaffoldování. Základem všeho je učitel: studie Micro:bit spojuje výuku CT přímo s [[teacher-education|přípravou učitelů]] a [[hashmi-socratic-physics-chatbot-2025|výzkum sokratovského chatbota]] váže přesnou formulaci problému, kterou CT vyžaduje, k měřitelnému výkonu v kurzu.

- **Validovaný nástroj lokalizuje, kde je CT nejtěžší.** Test počítačového myšlení s 34 položkami, vytvořený pomocí Evidence-Centered Design a validovaný teorií odpovědi na položku u 461 studentů programování s AI, soustředil obtížnost do reprezentace dat, sekvencování logických operátorů a struktur cyklů, nikoli rovnoměrně napříč sylabem ([[zhang-ct-ai-training-test-2026|Zhang a Zhang (2026)]]).

### CT a posun od konzumentů AI k producentům, tvůrcům a designérům

Ústředním cílem CT v éře AI je posunout studenty a učitele za *pasivní konzumaci* výstupů AI k *tvorbě, budování a navrhování* s AI a pro AI — agenda, která slaďuje CT s konstrukcionistickým učením (učení tvorbou). Propojené články v této znalostní bázi tento obrat k producentovi, tvůrci a designérovi stále více zexplicitňují. [[ai-writes-code-student-writes-model-2026|Výzkum autorství modelů]] přerámovává učení tvorbou s generativní AI jako měřitelný proces „autorství modelu" — studenti modely AI autorizují, ladí a iterují, místo aby jen konzumovali kód nebo odpovědi vygenerované AI. [[code-to-learn-genai-artifact-construction-2026|Rámec CtL-Generative AI]] to operacionalizuje jako [[constructivist|konstrukcionismus]] pro éru generativní AI a pojímá artefakty, které studenti s AI vytvářejí, jako motor rozvoje CT. [[computational-thinking-ai-agent-creation|CT skrze tvorbu agentů AI]] ukazuje, že navrhování, nikoli pouhé používání agentů AI, přímo procvičuje dekompozici, abstrakci a algoritmické uvažování.

Nové metaanalytické důkazy tento obraz zostřují. [[astor-computational-thinking-meta-review-2026|Meta-review 128 systematických přehledů CT]] zjišťuje, že se obor sbíhá k jednotné definici CT jako uvažování s abstraktními modely, které k řešení problémů používají výpočetní kroky a algoritmy — přesně ten druh myšlení budováním modelů (nikoli konzumací odpovědí), který produkčně orientované učení vyžaduje. [[tsingidou-ct-robotics-kindergarten-2026|Výzkum CT a robotiky v mateřské škole]] ukazuje, že i studující v raném dětství se stávají producenty díky hravému budování s roboty, s využitím učení založeného na problémech, [[storytelling-in-education|vyprávění příběhů]] a scaffoldingu — vývojový první krok k vidění technologie jako něčeho, co se konstruuje, ne jen obsluhuje. A [[solving-vs-evaluating-genai-solutions|výzkum hodnocení a kritiky]] ukazuje, že CT lze procvičovat posuzováním a laděním vadných řešení AI — producentský postoj k výstupu AI, který odolává pasti pasivní konzumace.

Praktickým důsledkem je, že výuka CT by měla být navržena tak, aby studující *tvořili věci s AI* — autorizovali modely, stavěli agenty, konstruovali artefakty a kritizovali výstup AI — místo aby dostávali hotová řešení. To prohlubuje CT a buduje [[ai-literacy|gramotnost v AI]] jako participativní a kreativní, nikoli jen konceptuální. Učitelé pak potřebují podporu, aby přešli od používání nástrojů AI k navrhování učebních aktivit obohacených AI (viz [[teacher-role]] a [[professional-training]]).

Opětovné používání cizích modelů patří k producentskému postoji: implementace publikovaného modelu AI — výběr, instalace, spuštění a validace — lze učit jako naučitelnou, strukturovanou dovednost s nouzovou cestou pro každé očekávané selhání, a tři studenti bakalářského studia [[chemistry-education|chemie]] bez programátorského zázemí reprodukovali a rozšířili model predikce enzym–substrát během čtyř měsíců ([[praise-non-programmer-ai-model-implementation-2026|Achterweust et al. (2026)]]).

### Praktická doporučení

Pro pedagogy je konzistentní zpráva taková, že CT se rozvíjí *explicitní, scaffoldovanou a pozorovatelnou* angažovaností, nikoli pasivním používáním AI. Spárujte robotiku s explicitním mapováním konceptů CT na kurikulum; používejte LLM pro [[simulation|simulaci]], ovládání přirozeným jazykem a škálovatelné hodnocení růstu CT, zatímco lidský úsudek si vyhrazte pro konstrukty, jako je systémové myšlení; a přepracujte hodnocení tak, aby zdůrazňovalo hodnocení a diagnostiku výstupu AI před pouhým generováním. Ať je prostředí jakékoli — nepočítačová hra v raném dětství, roboti ve středoškolském [[stem-education|vzdělávání v STEM]] nebo virtuální tutoři ve [[higher-ed|vysokoškolském vzdělávání]] — strukturování aktivity tak, aby studenti museli uvažovat o dekompozici, vzoru, abstrakci a algoritmu, místo aby dostávali hotová řešení.

### Souvislosti se souvisejícími koncepty

Počítačové myšlení je sdíleným kognitivním základem pod [[ai-literacy|gramotností v AI]] a [[critical-thinking|kritickým myšlením]], kurikulárním jádrem [[cs-education|vzdělávání v informatice]] a výpočetní techniky [[k-12]] a koncepčním cílem, kterému mají být nejlépe uzpůsobeny [[educational-robotics|vzdělávací robotika]], [[game-based-learning|učení založené na hře]] a [[project-based-learning|projektové učení]]. Prohlubuje ho [[llm|velké jazykové modely]] a [[generative-ai|generativní AI]], když se používají jako nástroje scaffoldingu, a je to dovednost, kterou mají měřit taxonomie mylných představ studentů a hodnocení citlivá na CT. Učitelé ho rozvíjejí prostřednictvím [[teacher-education|přípravy učitelů]] a [[professional-training|profesního vzdělávání]] a přenáší se napříč doménami včetně [[physics-education|fyziky]] a [[stem-education|STEM]] obecně.

- **Počítačové myšlení predikuje učení s asistentem AI.** [[computational-thinking-aica-2026|Žáci osmé třídy]] s vysokým počítačovým myšlením významně překonali vrstevníky s nízkým CT v kurzu programování s asistentem AI a používali asistenta k porozumění, nikoli k vyhledávání odpovědí.

## Časté mylné představy

- **„AI odstraňuje potřebu počítačového myšlení."** [[chat-debugging-human-ai-collaboration-circuits|Studie ladění chatu]] zjistila, že když vysokoškoláci ladili obvody s pomocí LLM, limitujícím faktorem byly **jejich mezery v základních konceptech a kritickém myšlení — nikoli nástroj**. CT je to, co studujícímu umožňuje výstup hodnotit, nikoli přijmout, což je přesně kapacita, která činí pomoc AI vůbec použitelnou.
- **„Pomoc AI vyrovnává podmínky v nedostatečně vybavených prostředích."** Může, za určitých podmínek. **Čtrnáct týdnů trvající kvaziexperiment se 103 vysokoškoláky prvního ročníku v Nigérii** zjistil, že učení založené na problémech podporované AI (ChatGPT a Teachable Machine) přineslo zisky, a AI jako „schopnější vrstevník" nese CT tam, kde jiná podpora chybí. To je ale zjištění o strukturované intervenci, nikoli vlastnost toho, že studentům dáte [[conversational-ai|chatbota]].
- **„LLM nedokážou CT hodnotit spolehlivě."** [[llm-computational-thinking-physics-2026|Výzkum hodnocení CT ve fyzice]] zjistil, že LLM dokážou **napodobit lidské hodnotitele** při skórování růstu v Data Practices a Computational Problem-Solving Practices ve velkých kurzech. Překážkou škálování hodnocení CT byla kapacita hodnotitelů a toto omezení slábne — což přesouvá designový problém k otázce, zda nástroj měří CT, nebo jen soulad s pokyny.
- **„CT je programátorská dovednost, kterou robotika náhodou učí."** **[[meta-analysis-systematic-review|Systematický přehled]] 95 studií** potvrzuje, že robotika podporuje CT, kreativitu a řešení problémů, ale také že **prostředí moderuje výsledek**: [[game-based-learning|hra]] se hodí pro neformální prostředí, zatímco gamifikace se ve formálních liší. CT je soubor praktik, které se přenášejí nerovnoměrně, takže tvrzení o přenosu potřebuje úkolový design, který skutečně použil.

## Související koncepty

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

## Související články

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
- [[zhang-ct-ai-training-test-2026]] — Test počítačového myšlení v AI Training Test (CTAT)
- [[computational-thinking-aica-2026]] — Úrovně počítačového myšlení a asistenti programování s AI (2026)
- [[ai-writes-code-student-writes-model-2026]] — Autorství modelu: teorie a měření pro učení tvorbou s generativní AI
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: konstrukcionistický rámec pro tvorbu artefaktů
- [[astor-computational-thinking-meta-review-2026]] — Meta-review CT ze 128 systematických přehledů
- [[tsingidou-ct-robotics-kindergarten-2026]] — Systematický přehled CT prostřednictvím robotiky v mateřské škole
- [[praise-non-programmer-ai-model-implementation-2026]] — PRAISE: reprodukovatelný postup pro neprogramátory k implementaci publikovaných modelů AI
