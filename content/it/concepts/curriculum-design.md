---
title: Progettazione curricolare
created: "2026-10-14T22:25:00-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks]
translation_of: concepts/curriculum-design
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **La progettazione curricolare** — il processo di pianificazione e strutturazione di ciò che si insegna attraverso corsi, programmi e istituzioni, inclusi gli obiettivi di apprendimento, la sequenza dei contenuti, le strategie di valutazione e la progressione delle competenze. Nell'era dell'IA, la progettazione curricolare deve bilanciare la conoscenza fondamentale con le competenze emergenti sull'IA, determinando non solo ciò che gli studenti apprendono ma come apprendono a lavorare con gli strumenti di IA e a valutarli criticamente.

## Domande da considerare

- La progettazione curricolare si chiede cosa gli studenti dovrebbero apprendere a livello di programma, mentre la progettazione dell'apprendimento si chiede il come a livello di corso. Quando l'IA rimodella una disciplina, quale di questi due strati pensi che dovrebbe cambiare per primo?
- Mentre l'[[generative-ai|IA generativa]] automatizza il lavoro a livello di implementazione, alcuni sostengono che i curricoli debbano spostarsi verso la progettazione di sistemi, l'astrazione e la [[critical-thinking|valutazione critica]]. Che cosa pensi che gli studenti perderebbero se le competenze di basso livello venissero de-enfatizzate?
- La riprogettazione curricolare nell'era dell'IA è spesso inquadrata come un equilibrio tra fluenza negli strumenti e conoscenza fondamentale. Dove hai visto quell'equilibrio pendere troppo in una direzione?
- Il framework SAIL tratta l'alfabetizzazione sull'IA come supportata attraverso le età e progettata per affrontare «divari digitali» più profondi dell'accesso. In che modo integrare l'alfabetizzazione sull'IA in un intero curricolo è diverso dall'aggiungere un singolo corso sull'IA?
- Se ogni disciplina ha ora bisogno di competenze sull'IA integrate al suo interno, chi è responsabile del cambiamento curricolare — gli insegnanti, i programmi o le istituzioni — e di che cosa hanno bisogno gli educatori per riuscirci?
- Un curricolo è una sequenza di competenze lungo gli anni, non solo un elenco di argomenti. In che modo questa visione più lunga cambia il fatto che una «unità di alfabetizzazione sull'IA» attecchisca davvero?

## Introduzione

La progettazione curricolare affronta il *cosa* dell'educazione a livello di programma, integrando [[learning-design|la progettazione dell'apprendimento]] che affronta il *come* a livello di corso. Gli articoli di questa knowledge base esplorano come l'IA stia rimodellando i curricoli attraverso le discipline — dall'ingegneria del software all'architettura all'educazione verde — e come gli educatori stiano progettando curricoli che integrano l'alfabetizzazione sull'IA senza sacrificare i fondamenti disciplinari.

### Temi chiave della ricerca

**Riprogettare i curricoli per l'era dell'IA** è la sfida centrale. **[[reshaping-cs-education-genai|Lee et al.]]** hanno sintetizzato i risultati di workshop internazionali sulla ridefinizione della [[cs-education|formazione in informatica]] universitaria, sostenendo che, man mano che GenAI automatizza la programmazione a livello di implementazione, i curricoli devono spostarsi verso la progettazione di sistemi, l'astrazione e la valutazione critica — de-enfatizzando i dettagli di implementazione di basso livello. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** ha formalizzato l'Ingegneria del Software Agentica come disciplina distinta con un curricolo di 21 moduli incentrato sull'«evoluzione dell'intento» e sulla disciplina del professionista necessaria per gestire gli [[agentic-ai|agenti di IA]]. Entrambi si collegano a [[ai-literacy|l'alfabetizzazione sull'IA]] e [[scaffolding|allo scaffolding]].

Considerando il cambiamento come sistemico anziché additivo, [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] triangolano una revisione di scoping, una mappatura bibliometrica di 209 record, 36 articoli e dieci interviste a leader accademici in cinque spostamenti — tra cui la trasmissione della conoscenza che cede il passo allo sviluppo delle capacità e la sperimentazione locale che cede il passo alla governance istituzionale.

**La mappatura e l'analisi del curricolo** usa l'IA per comprendere i curricoli esistenti. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** hanno analizzato 23 sillabi di corsi di ingegneria del software assistita dall'IA, individuando temi comuni — [[prompt-engineering|prompt engineering]], revisione del codice con l'IA, [[ethics|considerazioni etiche]] — e derivando indicazioni progettuali che enfatizzano il bilanciamento tra fluenza negli strumenti e conoscenza fondamentale. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** applica metodi computazionali per confrontare le strutture dei corsi di informatica tra istituzioni.

**L'integrazione dell'alfabetizzazione sull'IA** incorpora le competenze sull'IA attraverso le discipline. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** fornisce un framework di alfabetizzazione sull'IA supportato, applicabile a tutte le età e fasi educative, che affronta i [[digital-divide|divari digitali]] di secondo e terzo livello. **[[tracing-genai-literacy-interaction-patterns]]** esamina come l'alfabetizzazione sull'IA si sviluppi attraverso i pattern di interazione. **[[hingle-collaborative-ai-literacy-2025]]** esplora approcci collaborativi allo sviluppo del curricolo di alfabetizzazione sull'IA, collegandosi a [[collaborative-learning|l'apprendimento collaborativo]].

LearnAI mostra come appare una versione integrata: uno strato a esposizione ampia di brevi presentazioni dentro 18 corsi esistenti in cinque discipline (293 studenti), abbinato a sessioni facoltative di co-creazione uno-a-uno condotte da tutor pari universitari formati, così che discenti con abilità miste incontrino i compiti con l'IA al proprio livello ([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

L'integrazione nella pratica è in ritardo rispetto ai framework. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]] hanno rilevato che solo il 13,8% degli studenti di educazione e giornalismo intervistati diceva che i propri corsi affrontavano l'analisi critica dei media, contro il 97,8% che la riteneva importante, e le loro interviste agli esperti riconducevano il divario a una formazione degli insegnanti che privilegia le competenze tecniche e didattiche rispetto all'educazione ai media.

Una revisione PRISMA di 39 studi STEAM (2016–2025) ha trovato uno squilibrio parallelo negli elementi di alfabetizzazione sull'IA: le implementazioni sviluppavano literacy tecniche — concetti fondamentali di IA, pensiero computazionale, literacy dei dati — mentre sotto-sviluppavano la consapevolezza etica, l'immaginazione creativa e il creare, gestire e progettare con l'IA, per cui l'audit di ogni unità rispetto a questi elementi è la risposta pratica ([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).


La voce degli studenti è un altro input progettuale: l'84% di 166 studenti di economia dell'ultimo anno voleva che GenAI fosse insegnato nelle proprie unità e l'85% lo riteneva essenziale per l'occupabilità, mentre solo il 7% lo aveva appreso dalla propria università ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

Una revisione di 42 studi sull'educazione all'IA pre-universitaria trova i curricoli muoversi da contenuti tecnici verso modelli basati sulle competenze costruiti su framework come AI4K12 e le Cinque Grandi Idee dell'IA, con [[ai-literacy|l'alfabetizzazione sull'IA]] trattata come competenza trasversale mentre gli strumenti standardizzati per valutarla restano assenti ([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

Insegnanti e datori di lavoro concordavano sull'importanza di una sola delle 26 competenze sull'IA — fissare aspettative realistiche per il lavoro potenziato dall'IA — e solo tre delle 26 erano insegnate da metà o più insegnanti, l'evidenza del report di un divario di competenze sull'IA tra istruzione superiore e datori di lavoro ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

La progettazione delle attività di machine learning nel K-12 resta in superficie: una revisione dietro il framework ICE-T ha rilevato che uso invisibile, interazione tramite pulsanti e deployment di modelli rappresentano quasi il 60% delle attività di apprendimento supervisionato codificate, la creazione a esito aperto compariva solo due volte, e le prospettive tecnica e sociale co-occorrevano in solo circa il 3% delle attività ([[icet-ml-education-trust-2026|Haritz et al., 2026]]).

**L'innovazione curricolare [[discipline-specific-aied|specifica per dominio]]** applica la progettazione curricolare a campi specifici. **[[genai-architecture-education]]** esplora come l'IA generativa rimodella la [[pedagogy|pedagogia]] della progettazione architettonica. **[[talebzadeh-ai-green-education-2026]]** esamina l'integrazione dell'IA nei curricoli di educazione verde. **[[connected-ai-lesson-planning-vietnam]]** e **[[llm-cultural-relevance-k12]]** affrontano la [[culturally-relevant-pedagogy|progettazione curricolare culturalmente responsiva]].


**Integrare l'IA dentro la disciplina anziché accanto a essa.** Un curricolo di IA a tre livelli (introduttivo, applicativo, avanzato) ha inserito il machine learning dentro argomenti esistenti di ingegneria termica attraverso un corso di 39,1 ore, anziché aggiungere elettivi di informatica, evitando carico aggiuntivo per gli studenti di ingegneria meccanica e rilasciando apertamente programma, dati e codice ([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

Un caso giornalistico mostra la variante values-first: un'impalcatura triadica valori–processi–competenze ha portato gli studenti dal giornalismo solo umano al lavoro integrato con l'IA, eppure 8 su 9 (89%) riportavano fiducia nelle decisioni etiche mentre le voci del questionario su autorialità e bias suggerivano solo una comprensione superficiale ([[ying-genai-journalism-assessment-2026|Ngu and Weller (2026)]]).

**I framework [[governance|istituzionali]]** affrontano il cambiamento curricolare su larga scala. **[[finkelstein-principled-ai-education-2025]]** e **[[finkelstein-principled-ai-education-2025]]** forniscono principi per integrare l'IA attraverso i programmi educativi. **[[ai-adoption-training-public-sector]]** esamina le barriere all'adozione dei curricoli sull'IA nell'educazione del settore pubblico.

**Sequenziare l'IA attraverso il programma.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] propongono un framework «refrain, poi amplify» (trattieni, poi amplifica) che sequenzia l'IA generativa a livello di programma: trattieni uno strumento generativo mentre una capacità si sta formando, poi ripristinalo per amplificare quella capacità una volta che lo studente sappia dirigerla e giudicarne i ritorni. Governato da un criterio forming-versus-offloading (se un tratto di lavoro costruisce una capacità o la fa semplicemente passare attraverso lo strumento), il framework collega la progettazione curricolare a [[cognitive-offloading|il cognitive offloading]], [[self-regulated-learning|l'autoregolazione dell'apprendimento]] e [[academic-integrity|l'integrità accademica]], con checkpoint difficili da falsificare a ogni cerniera refrain-to-amplify.

La leva per gli stadi più alti non è più didattica: attraverso 89 progetti di capstone sponsorizzati, l'avanzamento dal Livello di Preparazione alla Forza Lavoro 6 al 7 era condizionato dall'esperienza inserita nell'industria — co-op e progetti del Manufacturing Extension Partnership — per cui i titoli di studio necessitano di apprendimento integrato con il lavoro anziché di un altro elettivo tecnico ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

Una conseguenza a livello curricolare della capacità dei modelli è che la progettazione resistente all'IA scade. Gli educatori dell'informatica descrivevano la calibrazione dei compiti rispetto a ciò che i modelli non potevano ancora fare e osservavano la calibrazione decadere — i problemi di un istruttore di cybersecurity richiedevano una genuina [[problem-solving|risoluzione di problemi]] sette o otto mesi prima e venivano poi semplicemente risolti — con un facilitatore che stimava una vita utile di circa un semestre. Il risultato strutturale del workshop è che quasi ogni adattamento era stato fatto da un singolo insegnante all'interno di un singolo corso, senza il coordinamento istituzionale che una risposta curricolare durevole richiederebbe ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

**Allineamento dell'intero corso quando l'IA generativa è permessa.** Una riprogettazione del 2026 di un corso introduttivo di [[physics-education|fisica]] nucleare e delle particelle ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]) ha integrato tre tipi di attività con ruoli distinti — lezioni per concetti e notazione, esercitazioni per la pratica analitica standard, e i compiti a casa come componente esplorativa «a forma di ricerca» di problemi insolitamente difficili e multi-metodo. L'attrito riportato (un prerequisito di programmazione non dichiarato, tempo insufficiente per comprendere anziché semplicemente ottenere risposte, e disallineamento tra lezioni, esercitazioni, compiti a casa e [[summative-assessment|esame]]) illustra che permettere l'IA generativa forza un lavoro di allineamento curricolare attraverso l'intero corso anziché un cambiamento a un solo tipo di compito; la struttura da loro raccomandata mantiene il lavoro esplorativo con IA permessa come compiti avanzati che danno punti bonus, mentre l'esame scritto senza ausili determina il voto.

**È la profondità dell'allineamento, non la frequenza d'uso, a separare i pattern di integrazione.** Attraverso 17 casi di moduli di economia, sei integravano GenAI sistematicamente nell'insegnamento, apprendimento e valutazione (costruttivo), nove in modo incoerente (blended) e due in modo sporadico (ad hoc); i casi costruttivi riportavano i risultati più forti in termini di impegno, capacità e rilevanza curricolare ([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**I consigli sull'allineamento costruttivo sotto scrutinio critico.** Laddove le fonti sopra riportano sull'allineamento nella pratica, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]] leggono la guida stessa come un discorso. La loro [[qualitative-research|analisi critica del discorso]] di 14 pezzi di letteratura grigia pubblicati da novembre 2022 ad aprile 2025 — per lo più pagine istituzionali e capitoli di [[educational-development|unità di apprendimento e insegnamento]] in posizioni centrali — ha trovato l'allineamento costruttivo presentato come un problema di efficienza: l'IA generativa era «un modo efficace ed efficiente di redigere rubriche» che poteva «razionalizzare il processo», antropomorfizzata come «un esperto e assistente educativo», uno «sparring partner» o «un assistente intelligente nella progettazione didattica», mentre il personale accademico forniva solo «expertise disciplinare» e lo strumento si assumeva «il lavoro pesante di sviluppare gli obiettivi di apprendimento, organizzare i contenuti del corso ... e allineare le componenti del corso». Le ricette di prompt copia-e-incolla e i template numerati inquadravano l'allineamento costruttivo come un prodotto standardizzabile, producendo tre modalità di fallimento: performatività (allineamento che solo appare allineato), cancellazione del contesto situato e critico, e allineamento costruttivo superficiale che confonde l'allineamento con la dimensione costruttiva. Il loro rimedio ri-sequenzia il flusso di lavoro della progettazione curricolare — gli educatori devono comprendere l'allineamento costruttivo abbastanza bene da dirigere, valutare e rifiutare l'output dell'IA prima di delegarne qualsiasi parte — e vincola qualsiasi strumento a un agente [[rag|retrieval-augmented]] istituzionale fondato su policy locali, rubriche e attributi dei laureati, con un ruolo di «tutor liminale» che estende anziché sostituire la relazione con il [[educational-development|progettista]].

**Generare compiti di modellizzazione allineati al curricolo.** Le piattaforme basate sull'IA possono affrontare la mancanza di tempo e risorse degli insegnanti per progettare compiti di [[math-education|modellizzazione matematica]] di alta qualità, generando problemi allineati al curricolo e raccomandazioni pedagogiche fondate su principi di progettazione e sulla generazione [[rag|retrieval-augmented]] — un approccio illustrato con la variazione diretta nella matematica della scuola secondaria ([[ai-modeling-problem-generation-platform-2026]]). Anche le letture dei corsi stesse sono ormai un bersaglio di generazione: Sidorkin (2026) ha sostituito un libro di testo commerciale con letture settimanali generate dall'IA in un corso magistrale di leadership educativa, e benché gli studenti le giudicassero utili e il 75 per cento concordasse di aver imparato più che in un corso comparabile, le 4.487 pagine di log portavano citazioni nel testo in stile APA solo in circa lo 0,80 per cento delle pagine e abbinavano un campus o un sistema nominato ad affermazioni assertive di policy in circa l'1,03 per cento delle pagine senza una fonte verificabile. La lezione sui materiali curricolari è trattare le letture generate come produzione di bozze sotto la revisione dell'insegnante, preventivare il lavoro dell'insegnante di progettazione dei prompt e verifica, e curare fonti validate dentro l'assistente anziché lasciare che la qualità delle fonti sia inferita dagli studenti dal contesto.

**La pianificazione delle lezioni assistita dall'IA allo strato curricolo-in-classe.** Nel punto in cui un curricolo diventa una lezione insegnata, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo e Tahir (2025)]] hanno confrontato sperimentalmente piani generati dagli insegnanti e piani assistiti da ChatGPT nell'educazione artistica [[stem-education|STEAM]] per bambini, trovando che i piani assistiti dall'IA erano valutati significativamente più alti da sei professori esperti (mediana 20,5 vs. 17,6, p = 0,002, effetto grande). Mostrano che il guadagno dipende da come l'insegnante delega: il metodo raccomandato colma le lacune di contenuto in una lezione auto-abbozzata dall'insegnante (preservando l'[[agency|autonomia]] progettuale dell'insegnante) anziché delegare l'intero piano, e contribuiscono un template di prompt Ruolo–Istruzioni–Obiettivo Finale per una generazione riproducibile e controllata in qualità — evidenza che la pianificazione delle lezioni con l'IA è più forte quando è integrata dentro, anziché sostituita dalle, decisioni curricolari dell'insegnante. Nell'educazione scientifica, la validazione degli esperti raggiunge un verdetto parallelo sulla progettazione della piattaforma: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli e Yildirim (2026)]] hanno fatto valutare a undici specialisti di [[science-education|educazione scientifica]] ChatGPT-4 e uno strumento focalizzato sull'educazione (Teacher's Buddy) su piani di sesta elementare allineati al curricolo rivisto della Turchia e al modello di apprendimento [[design-based-research|Design-Based]] Engineering. La piattaforma focalizzata sull'educazione ha ottenuto punteggi più alti su tutti gli otto criteri di qualità — incluse le fasi ad alta intensità di feedback e l'allineamento curricolare — evidenza che integrare la struttura pedagogica dentro l'IA produce output meglio allineato; eppure alcuni esperti preferivano ancora il piano di uso generale per la sua maggiore enfasi socio-emotiva, e 7 su 11 giudicavano i piani «applicabili con correzione» anziché direttamente utilizzabili. La scelta della piattaforma e dell'inquadramento del prompt, non solo dell'IA stessa, plasma quanto bene i piani generati si allineano agli standard curricolari e ai modelli di processo.

La struttura, non la formulazione del prompt, è ciò che rende affidabile la redazione assistita dall'IA in produzione: la pipeline Curriculum-as-Code di [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] potava il contesto in modo aggressivo e generava i materiali sezione per sezione attraverso 28 contesti progettuali, cosa che riduceva il tempo di preparazione dell'insegnante da circa otto a due ore per istruzione e non lasciava allucinazioni concettuali o matematiche da catturare per la revisione umana.

### Collegamenti con i concetti correlati

La progettazione curricolare si collega direttamente a [[learning-design|la progettazione dell'apprendimento]] — il curricolo definisce il cosa, l'insegnamento definisce il come. Si collega a [[ai-literacy|l'alfabetizzazione sull'IA]] perché integrare le competenze sull'IA è una sfida curricolare primaria, a [[teacher-role|il ruolo dell'insegnante]] e a [[educational-development|lo sviluppo educativo]] perché il cambiamento curricolare richiede la preparazione degli educatori, e a [[scaffolding|lo scaffolding]] perché i curricoli ben progettati supportano lo sviluppo delle competenze attraverso corsi e anni. I collegamenti con [[higher-ed|l'istruzione superiore]] e [[k-12|il K-12]] riflettono la rilevanza della progettazione curricolare attraverso i livelli educativi.

## Concetti collegati
- [[pedagogical-partnerships]] — Pedagogical Partnerships
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
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education
- [[recommender-systems-and-learning-paths]]
## Articoli collegati
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Critical discourse analysis of GenAI-for-constructive-alignment guidance (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[refrain-amplify-genai-curriculum-2026]] — Refrain-then-amplify curriculum framework for sequencing GenAI (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Project-Based AI Education Curriculum in Thermal Engineering
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Workforce Readiness Level framework for smart manufacturing in the AI era
- [[rewriting-curriculum-genai-pedagogy-2026]] — Rewriting the curriculum: GenAI-driven pedagogical change
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — AI Skills Framework: 26 assessable skills for curriculum mapping
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — STEAM education for AI literacy: systematic review
- [[caruana-pre-university-ai-education-slr-2026]] — Preparing learners and teachers for an AI-driven future: SLR of pre-university AI education (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI
