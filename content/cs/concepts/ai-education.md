---
title: "Umělá inteligence ve vzdělávání"
created: "2026-10-15T14:22:00-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty developers, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]
confidence: high
institutions: [educational-policy-ai]
reviewed_by: [editor]
translation_of: "concepts/ai-education"
source_updated: "2026-10-02T07:35:56-04:00"
translation_note: "*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-15"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

> **AI ve vzdělávání (AIED)** — široké, interdisciplinární obor, který aplikuje umělou inteligenci na výuku a učení a zkoumá její návrh, používání, hodnocení a důsledky. Jako zastřešující koncept znalostní báze zahrnuje AI ve vzdělávání **AI pro vzdělávání** (využití AI ke zlepšení výuky a hodnocení) a **vzdělávání o AI** (budování gramotnosti v oblasti AI a kritického porozumění). Leží na pomezí instruční technologie, [[learning-sciences|věd o učení]] — empirického výzkumného oboru, který se ptá, zda se změnil žák, a nikoli jen zda fungoval nástroj —, informatiky, [[educational-policy-ai|vzdělávací politiky]], [[ethics|etiky]] a [[equity-in-ai-education|rovnosti]]. Tato stránka je úvod do oboru a mapa ke každému konceptu, který znalostní báze pokrývá.

## Otázky k zamyšlení

- „AI ve vzdělávání" zahrnuje dva směry: AI pro vzdělávání (využití AI ke zlepšení výuky) a vzdělávání o AI (budování gramotnosti a kritického porozumění). Který z nich je vám bližší a který máte sklon přehlížet?
- Dějiny oboru jsou pojímány jako opakující se napětí mezi kontrolou a svobodou žáka. Když sledujete zavádění AI nástrojů, kde toto napětí dnes znovu poznáváte?
- AI ve vzdělávání leží na pomezí technologií, věd o učení, politiky, etiky a rovnosti. Které z těchto čoek přirozeně použijete při hodnocení AI nástroje — a kterou pravděpodobně zapomenete?
- Tato znalostní báze člení obor na větve: pedagogiku, teorie učení, technologie, obory, hodnocení, zpětnou vazbu, zúčastněné strany a řízení. Kdybyste mapovali své vlastní používání AI, ve které větvi byste se ocitli vy?
- AIED zahrnuje výuku žáků v kritickém používání AI jako cíl samotný. Je ve vašem kontextu AI pokládáno spíše za předmět výuky, nebo za nástroj k použití — a odpovídá tato rovnováha tomu, co žáci skutečně potřebují?
- Žáci se mohou naučit gramotnost v oblasti AI kritickým používáním AI, nejen učením se o AI. Jak by praktické, kritické používání mohlo budovat porozumění, jakého pasivní výuka nedokáže?

## Úvod

AI ve vzdělávání je zastřešující pojem, který společně definují všechny ostatní stránky konceptů. Znalostní báze člení obor na níže uvedené hlavní větve, z nichž každá odkazuje na příslušné stránky konceptů.

Průkopnická [[history-of-aied|historická]] perspektiva **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** sleduje AIED od kybernetiky a Dartmouthské konference v roce 1956 přes [[intelligent-tutoring|kognitivní tutory]] a Papertův [[constructivist|konstrukcionismus]], přičemž dochází k závěru, že dnešní debaty o [[generative-ai|GenAI]] znovu odehrávají fundamentální napětí mezi kontrolou a [[agency|agenturností]].

## Jak je znalostní báze organizována: zastřešující stránky

Pokrytí konceptů v znalostní bázi je zakotveno v několika **zastřešujících stránkách**, které sdružují související koncepty do navigovatelných větví. Jsou dobrými vstupními body k prozkoumání oboru:

- **AI ve vzdělávání** — tato stránka, přehled oboru a mapa celého pokrytí.
- **[[ai-literacy|Gramotnost v oblasti AI]]** — zastřešující pojem pro porozumění, používání a kritické hodnocení AI, zahrnující [[prompt-engineering|prompt engineering]], [[critical-thinking|kritické myšlení]], [[ethics|etiku AI]] a [[reducing-ai-misuse|zodpovědné používání]]. Vedle toho [[human-ai-collaboration|spolupráce člověka a AI]] a [[agentic-ai|agentní AI]] vymezují, jak lidé a AI pracují společně.
- **[[pedagogy|Pedagogiky a strategie výuky]]** — zastřešující pojem pro to, jak výuka probíhá: metody a strategie výuky, v jejichž rámci AI působí ([[active-learning|aktivní]], [[collaborative-learning|spoluprácí]], [[project-based-learning|projektová]], [[problem-based-learning|problémová]], [[experiential-learning|zkušenostní]], [[game-based-learning|herní]], [[socratic-method|sokratovská]], [[scaffolding|scaffolding]] a další), včetně specifického kontextu [[online-teaching-and-learning|online výuky a učení]].
- **[[learning-theories|Teorie učení]]** — zastřešující pojem pro to, jak učení probíhá: teoretické rámce ([[behaviorism|behaviorismus]], [[cognitive-psychology|kognitivismus]], [[constructivist|konstruktivismus]], [[sociocultural-learning|sociokulturní]], kognitivní, [[motivation|motivační]]), které formují návrh a hodnocení AI.
- **[[ai-technologies|Technologie]]** — zastřešující pojem pro technickou vrstvu: AI systémy ([[llm|velké jazykové modely]], [[generative-ai|generativní AI]], [[multimodal|multimodální modely]], [[educational-robotics|robotiku]]) a techniky ([[rag|retrieval-augmented generation]], [[prompt-engineering|prompt engineering]], [[reinforcement-learning|zpětnovazebné učení]], [[llm-training-and-fine-tuning|trénování modelů]], [[agentic-ai|agentní orchestraci]]), které pohánějí AIED. Rodina modelování žáka — [[knowledge-tracing|trasování znalostí]], [[cognitive-diagnosis|kognitivní diagnóza]], [[simulating-students|simulace žáků]] a systémy, které je spotřebovávají ([[intelligent-tutoring|inteligentní výuka]], [[adaptive-learning|adaptivní učení]], [[personalized-learning|personalizované učení]]) — je seskupena pod zastřešujícím pojmem [[student-modeling|Modelování žáka a adaptivní výuka]] v rámci této technické větve.
- **[[discipline-specific-aied|AI v jednotlivých oborech]]** — zastřešující pojem pro to, jak je AI aplikována napříč předměty ([[math-education|matematika]], [[physics-education|fyzika]], [[language-learning|jazyky]], [[cs-education|informatika]], [[writing-education|psaní]], [[stem-education|STEM]], [[engineering-education|inženýrství]], [[business-education|podnikání]], [[teacher-education|výuka učitelů]], [[medical-education|zdravotnické profese]] a další) — a za hranicemi akademických předmětů profesní a aplikovaná větev, která hodnotí prokázanou praxi spíše než správnost ([[nursing-education|ošetřovatelství]], [[information-technology|informační technologie]], [[vocational-education|učení v oblasti odborné přípravy]], [[design-education|designové vzdělávání]]) — a vzdělávací úrovně ([[k-12|K-12]], [[higher-ed|vysokoškolské vzdělávání]], [[adult-learning|učení dospělých]]).
- **[[assessment|Hodnocení]]** (s větvemi [[formative-assessment|formativní]], [[summative-assessment|sumativní]], [[authentic-assessment|autentické]], [[oral-assessment|ústní]] a [[automated-assessment|automatizované]]) — zastřešující pojem pro to, jak AI jak hodnotí žáky, tak přetváří validitu a integritu hodnocení.
- **[[feedback|Zpětná vazba]]** — zastřešující pojem pro to, jak je zpětná vazba generována, předávána a využívána: zpětnovazební smyčka, [[ai-feedback-quality|kvalita zpětné vazby]], [[feedback-literacy|gramotnost ve zpětné vazbě]] a její hodnoticí kontexty ([[formative-assessment|formativní]], [[peer-assessment|vzájemná]], [[automated-assessment|automatizovaná]]).
- **[[stakeholders|Zúčastněné strany v AI ve vzdělávání]]** — zastřešující pojem pro to, kdo jsou aktéři: žáci, [[teacher-role|učitelé]], [[learning-design|autoři výukových návrhů]], [[administrator|administrátoři]] a [[educational-policy-ai|tvůrci politik]].
- **[[ai-ed-evaluation|Hodnocení AI ve vzdělávání]]** a **[[research-methods-aied|výzkumné metody]]** — zastřešující pojmy pro to, jak víme, zda AI funguje: studie efektivity, [[benchmark|benchmarky]], [[rct|randomizované kontrolované studie]], [[meta-analysis-systematic-review|metaanalýza]] a [[learning-gains|zisky v učení]] jako klíčový výsledkový ukazatel. Čtenáři by měli také zvážit [[limitations-in-aied-research|průřezové limity těchto důkazů]].
- **[[governance|Řízení AI]]**, **[[educational-policy-ai|vzdělávací politika v oblasti AI]]** a **[[equity-in-ai-education|rovnost]]** — zastřešující pojmy pro institucionální, regulatorní a spravedlivou vrstvu (viz také [[regulation|regulace]] a [[privacy|soukromí]]).

Tyto zastřešující stránky jsou provázány v celém níže uvedeném textu; každá větev níže uvádí jak svůj zastřešující pojem, tak své dílčí koncepty.

## Dvě dimenze AI ve vzdělávání

Výzkum AI ve vzdělávání pokrývá dva vzájemně propojené směry:

- **AI pro vzdělávání** — využití AI systémů k posílení výuky, učení, hodnocení a správy. Zahrnuje [[intelligent-tutoring|AI doučování]], [[adaptive-learning|adaptivní učení]], [[personalized-learning|personalizované učení]], [[automated-essay-scoring|automatizované bodování esejí]], [[automated-question-generation|automatizované generování otázek]], [[automated-assessment|automatizované hodnocení]], [[formative-assessment|formativní hodnocení]], [[learning-analytics|learning analytics]] a [[feedback|zpětnovazební smyčky]].
- **Vzdělávání o AI** — výuka žáků a pedagogů v porozumění, používání a kritickém hodnocení AI. Jádrem je [[ai-literacy|gramotnost v oblasti AI]], podpořená [[prompt-engineering|prompt engineeringem]], [[critical-thinking|kritickým myšlením]], [[ethics|etikou AI]], vzděláváním o [[governance|řízení]], digitální gramotností a [[reducing-ai-misuse|zodpovědným používáním]].

Tyto dvě dimenze nejsou oddělené: [[ai-literacy|dobré používání AI]] vyžaduje její porozumění a výuka o AI je obohacena jejím používáním. Tato [[human-ai-collaboration|spolupráce člověka a AI]] je ústředním tématem.

## Základy AI ve vzdělávání

Průřezové a fundamentální koncepty oboru kotví pokrytí znalostní báze a objevují se první v postranním panelu. Otevírají je skupina **Základy** — koncepty, od kterých by měl každý čtenář začít: samotný zastřešující pojem, [[misconceptions|mylné představy o AI]], [[ai-literacy|gramotnost v oblasti AI]], [[agentic-ai|agentní AI]], [[cognitive-offloading|kognitivní odklánění]], [[framing-ai-use-for-students|jak je používání AI rámcováno pro žáky]], [[reducing-ai-misuse|omezování zneužívání AI]], [[academic-integrity|akademická integrita]], [[teacher-role|výuka]], [[learning-design|návrh výuky]] a [[educational-development|vzdělávací rozvoj]]. Větev **oboru** pak pokrývá [[history-of-aied|dějiny oboru]], [[limitations-in-aied-research|průřezové limity důkazní základny]], [[philosophy-of-ai-in-education|jeho filosofii]], mapu [[theories-and-frameworks|teorií a rámců]] a [[theory-development-aied|rozvoj teorií]]. Průřezová témata — [[human-ai-collaboration|spolupráce člověka a AI]], [[agency|agenturnost žáka]], [[learner-identity|identita žáka]], [[design-thinking|designové myšlení]], [[curriculum-design|návrh kurikula]], [[critical-thinking|kritické myšlení]] a [[computational-thinking|počítačové myšlení]] — protínají každou větev, protože nepřesné mentální modely, které lidé o AI mají, stojí výše než [[ai-misuse-learning-harm|zneužívání]] a podkalibrovaná [[trust-calibration|důvěra]].

## Výuka a instruování

Jak AI podporuje výuku a učení, je srdcem oboru. Klíčové koncepty zahrnují:

- **Základní pedagogiky:** [[pedagogy|pedagogiky a strategie výuky]] — zastřešující pojem pro pokrytí učebních metod v znalostní bázi — spolu s [[pedagogical-patterns|pedagogickými vzory]] (osvědčenými sekvencemi, do nichž se tyto metody ukotvují), [[active-learning|aktivním učením]], [[collaborative-learning|spoluprací]], [[group-work|skupinovou prací]], [[project-based-learning|projektovým učením]], [[problem-based-learning|problémovým učením]], [[productive-failure|produktivním selháním]], [[inquiry-based-learning|zkoumavým učením]], [[experiential-learning|zkušenostním učením]], [[game-based-learning|herním učením]], [[learning-by-teaching|učením učením ostatních]], [[scaffolding|scaffoldingem]], [[socratic-method|sokratovskou metodou]], [[critical-pedagogy|kritickou pedagogikou]], [[pedagogical-partnerships|pedagogickým partnerstvím]], [[storytelling-in-education|vyprávěním]], [[learning-design|návrhem výuky]], [[online-teaching-and-learning|online výukou a učením]] a [[video-education|videem ve vzdělávání]].
- **Teorie a procesy učení:** zastřešující pojem [[learning-theories|teorie učení]] ([[behaviorism|behaviorismus]], [[cognitive-psychology|kognitivismus]], [[constructivist|konstruktivismus]], [[sociocultural-learning|sociokulturní]], [[distributed-cognition|distribuovaná kognice]], [[situated-learning|situované učení]], [[embodied-learning|vpojaté učení]], [[community-of-inquiry|komunita zkoumání]] stojí po boku žákově orientovaných procesů, jako jsou [[self-regulated-learning|seberegulované učení]], [[self-determination-theory|teorie sebeurčení]], [[motivation|motivace]], [[self-efficacy|sebeúčinnost]], [[self-directed-learning|seberegulované směřování učení]], [[metacognition|metakognice]], [[desirable-difficulties|žádoucí obtíže]], [[transfer-of-learning|transfer učení]], [[prior-knowledge|předchozí znalosti]], [[icap-framework|kognitivní angažovanost ICAP]], [[refutation-text|refutační text]], [[retrieval-spacing-interleaving|retrieval, rozložení a prokládání]] a [[activity-theory-aied|teorie aktivity]].
- **Angažovanost a zkušenost žáka:** [[student-engagement|angažovanost žáků]], [[help-seeking|hledání pomoci]], [[social-emotional-learning|sociálně-emocionální učení]], [[well-being|pohoda]], [[creativity|kreativita]], [[problem-solving|řešení problémů]], [[mastery-learning|osvojování zdatnosti]] a [[student-ai-interaction|interakce žák–AI]] utvářejí, jak žáci AI skutečně vnímají a jak na ně působí, zatímco [[social-norms-ai-use|sociální normy, jež se kolem používání AI usazují]], rozhodují o tom, jak otevřeně se o tom dá diskutovat. Za hranicemi kurzu [[student-support-and-success|podpora a úspěch žáků]] pokrývá institucionální práci — poradenství, oslovování, doporučování a přidělování vzácné podpory —, kde AI spolehlivě zvyšuje dokončování úkolů, ale nikoli vytrvání nebo absolvování.

## Technologie a techniky

Stránka [[ai-technologies|Technologie]] je zastřešujícím pojmem pro technickou vrstvu:

- **Modely a techniky:** [[generative-ai|generativní AI]], [[llm|velké jazykové modely]], [[rag|retrieval-augmented generation]], [[multimodal|multimodální modely]], [[educational-nlp|vzdělávací NLP]], [[reinforcement-learning|zpětnovazebné učení]], [[knowledge-graph|znalostní grafy]], [[educational-robotics|roboti ve vzdělávání]], [[conversational-ai|konverzační AI]], [[simulation|simulace]] a [[llm-training-and-fine-tuning|trénování a dolaďování LLM]]. Záleží i na podkladových metodách: [[machine-learning|strojové učení]] je to, kde se tyto systémy budují, [[speech-and-voice-technologies|řečové a hlasové technologie]] nesou mluvené doučování a jazykovou praxi, [[visualization|vizualizace]] pokrývá dashboardy a vizuální analytiku pro žáky a pedagogy, a [[virtual-and-augmented-reality|virtuální a rozšířená realita]] hostí imerzivní praxi, jejíž vizuální vrstvu model nyní dokáže generovat. Sem patří i novější styly interakce — nejvýrazněji [[vibe-coding|vibe coding]], pracovní postup řízený přirozeným jazykem, v němž uživatel zadává program promptováním LLM a posuzuje výsledné chování, místo aby četl nebo upravoval zdrojový kód. To přebarvuje [[cs-education|programování]] jako akt vyjádření a ověření a snižuje bariéru pro [[teacher-role|koncové uživatele]] stavějící vlastní nástroje. Rámce hloubky integrace, jako je [[samr-model|SAMR]], a teorie přijetí, jako je [[technology-acceptance-model|TAM]], klasifikují, jak hluboko je AI přijímána a nakolik transformuje úkol.
- **Modelování žáka a adaptivní systémy:** technické systémy, které reprezentují žáka a adaptují se k němu, jsou seskupeny pod zastřešujícím pojmem [[student-modeling|Modelování žáka a adaptivní výuka]] — [[knowledge-tracing|trasování znalostí]], [[cognitive-diagnosis|kognitivní diagnóza]], [[simulating-students|simulace žáků]], [[intelligent-tutoring|inteligentní výuka]], [[adaptive-learning|adaptivní učení]], [[personalized-learning|personalizované učení]], [[recommender-systems-and-learning-paths|doporučovací systémy a studijní cesty]], [[pedagogical-agent|pedagogičtí agenti]], [[affective-tutoring|afektivní doučování]], [[affective-computing|afektivní počítačové zpracování]], [[human-in-the-loop-ai|AI s člověkem v kruhu]] a [[learning-analytics|learning analytics]]. Nacházejí se v technické vrstvě, protože jsou to samotné AI systémy, odlišné od pedagogik, které ztělesňují.

## AI v jednotlivých oborech

AI je aplikována napříč obory a vzdělávacími úrovněmi. [[discipline-specific-aied|Přehled AIED v jednotlivých oborech]] v znalostní bázi mapuje pokrytí podle předmětu — po boku [[learning-sciences|věd o učení]], které nejsou vyučovaným předmětem, ale průřezovým výzkumným oborem, který studuje učení samotné a pokládá předmětovou látku za jednu proměnnou mezi ostatními:

- **Předmětové oblasti:** [[math-education|matematika]], [[physics-education|fyzika]], [[chemistry-education|chemie]], [[biology-education|biologie]], [[cs-education|informatika]], [[engineering-education|inženýrství]], [[stem-education|STEM]], [[writing-education|psaní]], [[language-learning|jazyky]], [[english-education|výuka angličtiny (EAP/EFL/ESL)]], [[science-education|přírodovědné vzdělávání]], [[business-education|podnikání, ekonomie a management]], [[humanities-education|humanitní a společenské vědy]], [[arts-design-and-media-education|umění, design a mediální vzdělávání]], [[medical-education|lékařské a zdravotnické profese]], [[legal-education|právnické vzdělávání]] a profesní a aplikované větve — [[nursing-education|ošetřovatelství]], [[information-technology|informační technologie]], [[vocational-education|učení v oblasti odborné přípravy]] a [[design-education|designové vzdělávání]].

## Úrovně a kontexty

Stejný AI nástroj potkává velmi odlišná prostředí, a znalostní báze proto odděluje vzdělávací úroveň od pedagogiky, aby se poznatky tiše nepřenášely mezi nimi: [[k-12|K-12 školy]], [[early-childhood-elementary-ai-education|předškolní a základní vzdělávání]], [[higher-ed|vysokoškolské vzdělávání]], [[adult-learning|učení dospělých]], [[vocational-education|učení v oblasti odborné přípravy]], [[special-education|speciální vzdělávání]] a [[teacher-education|vzdělávání učitelů]]. K doméně přiléhavé koncepty protínající úrovně zahrnují [[universal-design-for-learning|univerzální design výuky]], [[neurodiversity|neurodiverzitu]], [[multilingual-learning|vícejazyčné učení]] a [[social-emotional-learning|sociálně-emocionální učení]].

## Hodnocení a měření

AI transformuje jak hodnotíme žáky, tak jak hodnotíme samotné AI systémy:

- **Hodnocení a zpětná vazba:** [[assessment|hodnocení]], [[formative-assessment|formativní hodnocení]], [[summative-assessment|sumativní hodnocení]], [[authentic-assessment|autentické hodnocení]], [[eportfolio|e-portfolio]], [[feedback|zpětná vazba]] a [[feedback-literacy|gramotnost ve zpětné vazbě]], [[ai-feedback-quality|kvalita AI zpětné vazby]], [[peer-assessment|vzájemné hodnocení]], [[oral-assessment|ústní hodnocení]], [[automated-assessment|automatizované hodnocení]], [[automated-essay-scoring|automatizované bodování esejí]] a [[automated-question-generation|automatizované generování otázek]]. Protože model nyní dokáže na požádání vyrobit věrohodně vypadající hotovou práci, znalostní báze dostává do popředí schopnost, která zůstává žákovu vlastní: [[evaluative-judgment|hodnotící úsudek]], schopnost posuzovat kvalitu své vlastní práce, práce spolužáků a výstupu AI vůči odůvodněným kritériím. Jde o konstrukt, na nějž konverguje několik studií zpětné vazby a autentického hodnocení — hybridní podmínka zpětné vazby překonávající přímou AI zpětnou vazbu v mnohacentrovém experimentu, mezera v udržitelnosti AI formativní zpětné vazby a praktický krok k hodnocení rozhodnutí, jež žáci činí, nikoli jen artefaktu —, a je to klíčový důvod, proč se přepracování v éře AI posouvá od [[ai-detection|detekce]] směrem k úkolům, jejichž integrita přežije kontrolu. [[group-work|Skupinová práce]] je obdobně hodnocena podél procesu i produktu, kde týmy musí vyjednat, čí a jaký druh angažovanosti AI je přijatelný.
- **Měření a validita:** [[assessment-validity|validita hodnocení]], [[psychometrically-aware-ai|psychometricky informovaná AI]], [[educational-measurement|vzdělávací měření]], [[item-response-theory|teorie odpovědí na položky]], [[self-report-measures|sebeposuzovací měření]] (instrument za podstatnou částí těchto důkazů a opakující se limita), [[ai-detection|detekce AI]], [[remote-proctoring|vzdálený dohled nad zkouškami]] a [[academic-integrity|akademická integrita]].

## Výzkumné metody a evaluace

Jak víme, zda AI funguje, je vlastní větev, a znalostní báze ji jako takovou pojímá:

- **Výzkumné metody:** [[research-methods-aied|výzkumné metody v AIED]] jako zastřešující pojem, s [[qualitative-research|kvalitativními]], [[quantitative-research|kvantitativními]], [[mixed-methods-research|smíšenými]], [[design-based-research|designovými]] a [[usability-research|usability]] přístupy, doplněnými [[rct|randomizovanými kontrolovanými studiemi]], [[meta-analysis-systematic-review|metaanalýzou a systematickým přehledem]] a [[network-analysis|síťovou analýzou]].

Výzkumná práce samotného oboru je nyní sama o sobě předmětem. [[ai-assisted-educational-research|AI podporovaný vzdělávací výzkum]] pokrývá AI používanou jako nástroj pro literární rešerši, screening, kvalitativní kódování, analýzu a psaní, včetně výzkumu praktiků, jako je stipendium výuky a učení. Zůstává odlišný od návrhů používaných ke studiu toho, co AI činí žákům.

- **Evaluace AI systémů:** [[ai-ed-evaluation|hodnocení AI ve vzdělávání]] a [[benchmark|benchmarky]] pro posuzování schopnosti systému, s [[learning-gains|zisky v učení]] jako výsledkem, na němž záleží, a s [[limitations-in-aied-research|průřezovými limity]] těchto důkazů a [[interpreting-and-applying-aied-research|způsoby čtení jediné studie]] jako varovným protiváhami.

## Lidé

AI ve vzdělávání mění role všech zúčastněných stran. Stránka [[stakeholders|Zúčastněné strany v AI ve vzdělávání]] je zastřešujícím pojmem pokrývajícím je všechny:

- **Žáci:** [[student-experience|zkušenost žáků]], [[career-development-and-readiness|kariérní rozvoj a připravenost]] a [[anxiety-and-stress|úzkost a stres z AI]] utvářejí, jak studenti AI vnímají.
- **Rodiny a komunity:** [[parents-and-families|rodiče a rodiny]] jsou obecenstvem, které školy o AI oslovují nejčastěji, a zároveň tím, za nímž stojí nejméně výzkumu v oblasti tohoto vedení, takže jejich obavy patří do obrazu zúčastněných stran, nikoli mimo něj.
- **Pedagogové a rámce výuky:** [[teacher-ai-competency|kompetence pedagogů v oblasti AI]], [[tpack|technologické pedagogické obsahové znalosti (TPACK)]], [[samr-model|SAMR]] a [[educational-development|vzdělávací rozvoj]] řeší přípravu a podporu pedagogů.
- **Tvůrci:** [[educational-technology-developers|vývojáři vzdělávacích technologií]] — návrháři produktů, softwaroví vývojáři, learning inženýři a analytici návrhů, kteří přeměňují schopnost modelu na něco, co instituce může zakoupit. Jsou odlišným obecenstvem od výše uvedených praktiků a administrátorů, a stojí mimo instituce, které jejich nástroje přijímají, což je důvod, proč se výchozí nastavení, codesign a údržba po ukončení financování objevují v této znalostní bázi jako pedagogické otázky, nikoli komerční.

## Instituce a politika

Institucionální vrstva je místem, kde se rozhodnutí o AI skutečně činí a obhajují: [[administrator|administrátoři]] a institucionální lídři, [[educational-policy-ai|vzdělávací politika v oblasti AI]], [[governance|řízení AI]], [[change-management|management změny]] jako práce na tom, aby přijetí vydrželo, [[regulation|regulace AI]] a otázky zadávání veřejných zakázek a platforem, jež vyplývají z [[technology-acceptance-model|přijetí technologií]], [[open-source|open source]] a [[edtech-platform|edtech platforem]], po boku [[lifelong-learning|profesního a celoživotního učení]] a [[professional-training|profesního vzdělávání]].

## Rovnost, etika a zodpovědné používání

Spravedlnost, přístup a odpovědnost jsou pro AI ve vzdělávání ústřední:

- **Rovnost a přístup:** [[equity-in-ai-education|rovnost]], [[differential-effects-across-learner-groups|diferenciální efekty napříč skupinami žáků]] (otázka, pro koho poznatek platí), [[digital-divide|digitální propast]], [[bias-mitigation|zmírňování zaujatosti]], [[culturally-relevant-pedagogy|kulturně relevantní pedagogika]], [[multilingual-learning|vícejazyčné učení]], [[inclusive-learning|inkluzivní učení]], [[accessibility|přístupnost]], [[assistive-technology|asistivní technologie]], [[neurodiversity|neurodiverzita]], [[universal-design-for-learning|univerzální design výuky]] a studie [[global-south|globálního Jihu]].
- **Etika a odpovědnost:** [[ethics|etika AI]], [[ai-misuse-learning-harm|zneužívání AI a újma na učení]], [[legal-issues-and-risks|právní otázky a rizika]], [[ai-use-disclosure|zveřejňování používání AI]], [[guardrails|zábrany]], [[privacy|soukromí]], [[hallucination-risk|riziko halucinací]], [[ai-sycophancy|AI patolízalství]], [[trust|důvěra]], [[trust-calibration|kalibrace důvěry]], [[reducing-ai-misuse|omezování zneužívání AI]], [[framing-ai-use-for-students|jak je používání AI rámcováno pro žáky]], [[pedagogical-safety|pedagogická bezpečnost]], [[sustainability|udržitelnost]] a [[cognitive-offloading|kognitivní odklánění]].

[[meta-analysis-systematic-review|Systematický přehled]] etické literatury oboru ([[agarwal-ethical-values-norms-aied-2026|Agarwal et al. 2026]], 25 článků) konsoliduje etiku AIED do šesti hlavních etických hodnot — nediskriminace, správa dat, lidský dohled, dobrá vůle, vysvětlitelnost a vzdělávací vhodnost — a mapuje etické normy na matici zúčastněných stran vůči hodnotám. Zjišťuje, že koncoví uživatelé jsou v etické literatuře z velké části pasivní (hlasy žáků jsou v podstatě nepřítomny), a vyzývá k integraci etiky do návrhu AIED a k většímu zaměření na vzdělávací (pedagogickou) dimenzi etiky AIED.

## Emergentní a průřezová témata

Několik témat protíná celý obor:

- **Důvěra a kritické používání:** [[trust|důvěra]], [[trust-calibration|kalibrace důvěry]], [[ai-sycophancy|AI patolízalství]], [[critical-thinking|kritické myšlení]], [[cognitive-offloading|kognitivní odklánění]], [[critical-pedagogy|kritická pedagogika]] a [[reducing-ai-misuse|omezování zneužívání AI]] (viz také [[framing-ai-use-for-students|jak je používání AI rámcováno pro žáky]]). Jak se žáci a učitelé rozhodnou AI přijmout a spoléhat na ni, modeluje výzkum [[technology-acceptance-model|přijetí technologií]], zatímco studie [[global-south|globálního Jihu]] dostávají do popředí rovnost a kulturní kontext přijetí. Empiricky to, jak se AI sama vysvětluje, tuto důvěru formuje: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] ukázali, že [[explainable-ai|vysvětlitelná AI]] buduje důvěru učitelů v AI doporučení prostřednictvím srozumitelnosti, přičemž doménově řízená (kurikulárně jazyková) vysvětlení jsou důvěřována a přijímána více než výstup založený na datech a důležitosti příznaků.
- **Vývoj oboru:** znalostní báze sleduje AI ve vzdělávání od raných [[intelligent-tutoring|systémů inteligentní výuky]] a [[knowledge-tracing|trasování znalostí]] přes LLM řízené [[intelligent-tutoring|doučování]], [[pedagogical-agent|agenty]] a [[agentic-ai|agentní AI]] — rychlý posun od studií zaměřených na nástroje k sociotechnickým rámcům ([[design-thinking|designové myšlení]], [[curriculum-design|návrh kurikula]], [[institutional-change-framework-ai|institucionální změna]]) a od ručně psaných systémů k uživatelsky řízeným pracovním postupům, v nichž žák nebo [[teacher-role|neprogramátor]] zadává chování v přirozeném jazyce ([[vibe-coding|vibe coding]]). [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] formalizují tuto trajektorii svým rámcem AI×Ed a sledují články napříč čtyřmi desetiletími sborníků, aby ukázali, že se obor posunul od rozmanité směsi — včetně podstatného výzkumu pokládajícího AI za analogii lidské inteligence a učení — směrem k téměř výlučnému zaměření na aplikovaná, dat řízená, výzkumníky orientovaná použití, obrat, který nástup [[llm|LLM]] nyní zčásti zřejmě ruší (tři ze čtyř článků „AI jako analogie" na AIED 2024 byly založeny na LLM).
- **Emoce, úzkost a kariérní budoucnost:** AI indukuje a formuje emocionální reakce — [[anxiety-and-stress|úzkost a stres z AI]] zahrnující dohled při zkouškách, obavy z integrity a nahrazení v kariéře —, zatímco [[career-development-and-readiness|kariérní rozvoj a připravenost]] řeší, jak vzdělává žáky pro AI narušený trh práce (viz také [[well-being|pohoda]]).

## Zralost oboru

Znalostní báze odráží obor v rychlém vývoji — od raných systémů inteligentní výuky přes LLM řízené doučování a agentní AI; od nástrojů zaměřených na detekci v oblasti akademické integrity k přepracování hodnocení; od studií zaměřených na nástroje k sociotechnickým a na rovnost zaměřeným rámcům. Důkazní základna stále více zdůrazňuje přísné [[research-methods-aied|výzkumné metody]], [[ai-ed-evaluation|evaluaci]], [[rct|experimentální návrhy]] a dlouhodobé výsledky.

## Související témata

AI ve vzdělávání souvisí s každým konceptem v znalostní bázi — je to obor, který společně definují všechny ostatní stránky konceptů. Použijte tuto stránku jako výchozí bod k navigaci celou znalostní bází.

## Související koncepty
- [[pedagogical-patterns]] — Osvědčené sekvence, které operationalizují pedagogiky oboru
- [[ai-literacy]] — zastřešující pojem: porozumění AI, její používání a hodnocení
- [[human-ai-collaboration]] — zastřešující pojem: jak lidé a AI pracují společně
- [[pedagogy]] — zastřešující pojem: metody a strategie výuky
- [[learning-theories]] — zastřešující pojem: jak učení probíhá
- [[ai-technologies]] — zastřešující pojem: modely, techniky a systémy
- [[discipline-specific-aied]] — zastřešující pojem: AI napříč předměty a úrovněmi
- [[assessment]] — zastřešující pojem: jak AI hodnotí žáky a přetváří validitu
- [[feedback]] — zastřešující pojem: jak je zpětná vazba generována, předávána a využívána
- [[stakeholders]] — zastřešující pojem: kdo jsou aktéři
- [[learners]] — zastřešující pojem: koncepty na straně žáka (zkušenost, identita, agenturnost, interakce, modely žáka)
- [[ai-ed-evaluation]] — zastřešující pojem: jak víme, zda AI funguje
- [[research-methods-aied]] — zastřešující pojem: metody výzkumu efektivity
- [[ai-assisted-educational-research]] — AI podporovaný vzdělávací výzkum
- [[governance]] — zastřešující pojem: institucionální a regulatorní vrstva
- [[educational-policy-ai]] — zastřešující pojem: politika, vedení a implementace
- [[equity-in-ai-education]] — zastřešující pojem: spravedlnost, přístup a inkluze
- [[learning-sciences]] — empirický obor za AIED
- [[ethics]] — etické dimenze AI ve vzdělávání
- [[misconceptions]] — mentální modely, které lidé k AI přinášejí
- [[interpreting-and-applying-aied-research]] — čtení studie a přenesení poznatku do praxe
- [[limitations-in-aied-research]] — průřezové limity důkazní základny
- [[meta-analysis-systematic-review]] — co stanovují přehledy a metaanalýzy
- [[history-of-aied]] — jak se obor vyvíjel
- [[philosophy-of-ai-in-education]] — filozofické základy
- [[theories-and-frameworks]] — mapa uzlů teorií a rámců
- [[theory-development-aied]] — budování a revize teorií

## Související články

Průřezové přehledy AI ve vzdělávání — studie, které mapují celý obor nebo celou vzdělávací úroveň, nikoli jedno téma:

- [[rismanchian-ai-education-four-decades-aixed-2026]] — Vývoj výzkumu AI a vzdělávání napříč čtyřmi desetiletími (rámec AIxEd)
- [[mishra-control-vs-agency-history-2025]] — Kontrola versus agenturnost: dějiny AI ve vzdělávání
- [[genai-higher-education-systematic-review-2026]] — Generativní AI ve vysokoškolském vzdělávání: systematický přehled 125 studií
- [[stanford-evidence-base-ai-k12-2026]] — Důkazní základna o AI v K-12: přehled 818 článků
- [[genai-educational-outcomes-meta-analysis]] — Generativní AI a vzdělávací výsledky: komplexní metaanalýza
