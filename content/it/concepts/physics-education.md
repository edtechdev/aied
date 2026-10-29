---
title: Educazione alla fisica
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [socratic-method]
technology: [generative-ai, intelligent-tutoring]
discipline: [physics education, stem education]
audience: [learners, instructors]
level: [higher ed]
confidence: high
translation_of: concepts/physics-education
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **L'educazione alla fisica** — lo studio di come gli studenti apprendono la fisica e di come insegnarla in modo più efficace, dall'[[intelligent-tutoring|tutoraggio IA socratico]] alla valutazione del [[computational-thinking|pensiero computazionale]], dalla [[trust|fiducia]] degli studenti e dai modelli di adozione dell'IA, alla validità della correzione automatizzata, fino alla preparazione degli insegnanti. Gli articoli sull'educazione alla fisica di questa base di conoscenza si distinguono per la loro specificità di dominio: esplorano come gli strumenti di IA interagiscano con le richieste cognitive peculiari del ragionamento fisico — pensiero visuo-spaziale, modellizzazione matematica, pensiero astratto di sistemi e [[problem-solving|risoluzione di problemi]] in più passi.

## Domande da considerare

- I problemi di fisica richiedono spesso pensiero visuo-spaziale, modellizzazione matematica e ragionamento in più passi. Perché queste potrebbero essere proprio le richieste cognitive con cui gli attuali tutor basati sull'IA faticano?
- Gli studenti riferiscono un ampio divario tra fiducia e utilità — il 91% usa l'IA per i corsi ma solo il 41% si fida di essa. Hai mai usato uno strumento di cui non ti fidavi pienamente? Che cosa alimentava il divario?
- La correzione tramite IA ha sottostimato sistematicamente le spiegazioni di fisica degli studenti linguisticamente deboli. Che cosa suggerisce questo su come un'IA valuta una spiegazione rispetto a una risposta numerica corretta?
- Uno studio ha rilevato che un chatbot socratico basato sull'IA ha migliorato drasticamente la specificità delle domande in un corso di fisica in presenza, ma che gli studenti cedevano anche frequentemente il "controllo strategico" al tutor. Quando affidare il controllo strategico aiuta l'apprendimento, e quando lo danneggia?
- Perché la fisica potrebbe essere un "banco di prova" per l'[[ai-education|IA nell'educazione]] — che cosa rende i suoi problemi ideali per studiare come l'IA influenzi ragionamento e valutazione?
- Ti fideresti di un'IA per correggere la tua serie di problemi di fisica o per ragionare con te attraverso un diagramma delle forze? Che cosa dovrebbe essere vero dell'IA — e del tuo corso — perché tu rispondessi di sì?

## Introduzione

La [[research-methods-aied|ricerca]] sull'educazione alla fisica è diventata un banco di prova per l'IA nell'educazione perché i problemi di fisica sono ben strutturati ma cognitivamente esigenti, il che li rende ideali per studiare come gli strumenti di IA influenzino apprendimento, ragionamento e valutazione. I 26 articoli di questa base di conoscenza dipingono collettivamente il quadro di un campo alle prese sia con la promessa sia con i limiti dell'IA — dai chatbot [[conversational-ai|socratici]] che migliorano la qualità delle domande degli studenti fino alle distorsioni sistematiche di correzione che penalizzano gli studenti linguisticamente diversi.

### Principali temi di ricerca

Il **tutoraggio IA socratico in fisica** è il tema più sviluppato, con tre articoli che dispiegano dialogo socratico basato su [[llm]] in corsi di fisica reali. **[[hashmi-socratic-physics-chatbot-2025|Hashmi et al.]]** hanno dimostrato che un'interazione socratica sostenuta con un chatbot basato sull'IA migliora drasticamente la specificità delle domande nella meccanica introduttiva, con 150 studenti STEM in un corso in presenza. **[[socratic-ai-physics-tutor-taxonomy-2026|Hashmi & Rebello]]** hanno costruito una tassonomia bottom-up di 357 categorie di discorso degli studenti a partire dallo stesso dispiegamento, rivelando che i turni meta-procedurali — dove gli studenti cedono il controllo strategico al tutor — dominano le interazioni degli studenti. Entrambi contribuiscono alla ricerca più ampia sul [[socratic-method]] e si collegano ai framework di [[intelligent-tutoring|tutoraggio IA]] e [[intelligent-tutoring]].

**L'adozione dell'IA da parte degli studenti e la fiducia** esplora come gli studenti di fisica usino effettivamente gli strumenti di IA. **[[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]]** hanno rilevato un divario tra fiducia e utilità di 50 punti: il 91% usa l'IA per i corsi ma solo il 41% si fida di essa, con studenti che identificano spontaneamente le modalità di fallimento dell'IA nel ragionamento visuo-spaziale e nei circuiti. **[[becker-chatgpt-typology-physics-2026|Becker et al.]]** hanno sviluppato una tipologia a due profili — 70% "Pragmatic Users" e 30% "Skeptical Non-Users" — a partire da 1.189 risposte a un'indagine, mostrando che entrambi i gruppi compiono compromessi calcolati tra rischio e utilità. Questi studi fanno avanzare la ricerca su [[ai-literacy]] e [[trust-calibration]] e mettono in discussione le [[educational-policy-ai|politiche sull'IA]] tagliate con il coltello.

**Le credenze epistemologiche corrispondono alla preferenza per il comportamento del chatbot.** In un grande corso basato sul calcolo, il 52% degli studenti preferiva un chatbot che iniziasse con l'indagine guidata e rispondesse solo quando interpellato, e ottenevano punteggi più alti sul totale EBAPS (p = 0,029) — differenze che non sopravvivevano a una correzione di Bonferroni, rendendo l'associazione suggestiva, non conclusiva ([[physics-chatbot-epistemological-beliefs-2026|Sirnoorkar e Mamidpalliwar (2026)]]).

**Cambiamento nella percezione senza cambiamento nel comportamento** è ciò che [[physics-students-llm-perceptions-instruction-2026|O'Brien et al. (2026)]] aggiungono a questo quadro. Una lezione riflessiva sul funzionamento degli LLM, tenuta in un corso obbligatorio del primo anno per studenti di fisica, ha aumentato nettamente lo scetticismo — l'accordo sul fatto che gli LLM possano lasciare negli studenti un falso senso di fiducia è salito dal 58% all'88%, e la convinzione che un LLM superi lo studente medio di fisica è scesa dal 54% al 32% — mentre la comodità (71% di accordo) e la pressione delle scadenze (65%) restavano le ragioni dominanti d'uso. I limiti della lezione sono informativi quanto il suo effetto: l'insegnamento sull'[[ai-literacy]] ha cambiato ciò che gli studenti dicevano di questi strumenti e non le pressioni che li spingono a ricorrervi, ed è per questo che un intervento di questo tipo appartiene accanto alla progettazione dei problemi e delle politiche, non al loro posto.

La formulazione di problemi trasforma lo studente nell'autore del problema: il 76% di 49 studenti di fisica ha percepito un cambiamento positivo nelle proprie interazioni con la GenAI dopo un addestramento al prompt engineering, con i principianti che ne beneficiavano di più, e circa il 68% considerava la tecnica positivamente come strumento di auto-studio ([[genai-assisted-problem-posing-physics-2026|Dawson & Rebello (2026)]]).

**Valutazione e pensiero computazionale** esamina come l'IA possa valutare l'apprendimento della fisica. **[[llm-computational-thinking-physics-2026|Savage et al.]]** hanno usato gli LLM per valutare la crescita del [[computational-thinking|pensiero computazionale]] nella fisica introduttiva, rilevando che gli LLM possono scalare la valutazione del CT ma faticano con costrutti complessi come il pensiero sistemico. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** hanno dimostrato che la correzione tramite IA sottostima sistematicamente le spiegazioni di fisica degli studenti linguisticamente deboli — un risultato che si collega alla [[assessment-validity]], alla [[bias-mitigation]] e all'[[equity-in-ai-education]].

**Infrastruttura psicometrica per la valutazione diagnostica.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] ribaltano la consueta domanda sull'IA nella fisica: anziché chiedersi se un modello possa risolvere o correggere la fisica, si chiedono se le [[assessment|valutazioni]] basate sulla ricerca del campo possano essere rese capaci di diagnosticarla. Mappando gli item di FCI, FMCE ed EMCS su 14 obiettivi di apprendimento fini e adattando un modello diagnostico-cognitivo DINA a 24.394 risposte post-test provenienti da 807 corsi in 79 istituzioni tramite la piattaforma LASSO, hanno costruito il Mechanics [[cognitive-diagnosis|Cognitive Diagnostic]] — riportato come il primo test adattivo computerizzato diagnostico-cognitivo in fisica. FCI ed EMCS mostravano un buon adattamento (RMSEA² = 0,033 e 0,022) mentre FMCE si adattava solo marginalmente (0,065), e gli autori attribuiscono quel disadattamento alla progettazione dello strumento anziché alla modellazione: 42 dei 43 item FMCE corretti condividono scenari in serie concatenate, creando la dipendenza locale tra item che l'assunzione di indipendenza condizionale del DINA vieta (FCI blocca 13 item su 30; EMCS nessuno). L'accuratezza di classificazione ha soddisfatto la soglia [[formative-assessment|formativa]] a bassa posta in gioco per 19 delle 22 combinazioni obiettivo–valutazione; i tre fallimenti erano obiettivi di energia dell'EMCS i cui item si sovrappongono per circa il 70%, quindi la padronanza dell'uno non può essere separata dagli altri. Il significato per l'insegnamento della fisica è che strumenti già somministrati nei corsi possono essere riutilizzati per erogare feedback fruibile a livello di obiettivo *durante* l'istruzione, anziché un punteggio post-test retrospettivo — a condizione che le rivendicazioni diagnostiche siano poste alla risoluzione che la banca di item può effettivamente supportare.

**Valutazione comparativa dell'IA multimodale su problemi di fisica autentici.** [[omniphys-multimodal-physics-benchmark-2026|Chen et al. (2026)]] introducono **OmniPhys**, un [[benchmark]] [[multimodal]] su larga scala (15.246 domande, 19.850 immagini) che spazia dalla fisica di scuola media a quella di livello universitario, tratto da corpora educativi cinesi. Insolitamente, esso valuta non solo la comprensione multimodale dell'*input* ma anche la generazione multimodale dell'*output* — se i modelli sappiano sintetizzare diagrammi di fisica strutturati, componente centrale dell'autentica risoluzione di problemi. Valutazioni estensive rivelano lacune critiche negli attuali LLM multimodali, specialmente nel ragionamento complesso e nella generazione visiva.

**Framework di progettazione didattica per l'istruzione potenziata dall'IA.** **[[airis-cognitively-activated-ai-physics-2026|Kuhn et al.]]** propongono il framework **AIRIS** (Activate–Inquire–Reflect with Intelligent Support) — una struttura a tre fasi per l'uso cognitivamente attivato dell'IA in fisica: gli studenti prevedono e abbozzano gli esiti attesi prima dell'IA (Activate), delegano all'IA i passaggi computazionali e rappresentazionali confrontando criticamente l'output con le proprie previsioni (Inquire), e interpretano, verificano la coerenza tra rappresentazioni e riflettono su ciò che l'IA ha contribuito in seguito (Reflect). Radicato nell'[[self-regulated-learning]], nella teoria del [[cognitive-offloading|carico cognitivo]], nelle rappresentazioni esterne multiple e nella [[human-ai-collaboration]], esso inquadra la sfida centrale come [[learning-design|progettazione didattica]] anziché come imbrogli o scelta dello strumento, e chiede esperimenti con "condizione di ritiro" che verifichino se l'apprendimento sopravvive alla rimozione del supporto dell'IA.
- **Insegnare la critica delle soluzioni dell'IA con una rubrica.** Ventiquattro gruppi di laboratorio di fisica introduttiva che hanno criticato una soluzione dell'IA con una riflessione guidata da MAPS hanno identificato l'integrazione numerica saltata, la notazione non definita e il tracciamento qualitativo anziché quantitativo, mentre i gruppi che avevano solo risolto un problema correlato accettavano l'output rifinito o lo rifiutavano in base alle proprie misconcezioni ([[probing-ai-generated-physics-solutions-2026|Borse et al. (2026)]]).

**Il video generativo come dato sperimentale sintetico.** [[genai-video-engineering-physics-workflow-2026|Alvarado-Cruz et al. (2026)]] generano scenari video con PixVerse, Grok Imagine e Pippit per tre regimi di forza resistiva — attrito costante, resistenza lineare e resistenza quadratica — ne estraggono la cinematica con lo strumento [[open-source]] Tracker e adattano i modelli analitici per minimi quadrati non lineari. I dati sintetici concordavano con le equazioni classiche del moto e recuperavano parametri fisicamente significativi, e il risultato pratico ricorrente è che la specificità dei prompt governa la coerenza fisica: descrizioni più dettagliate producevano dinamiche più coerenti. Il workflow rispecchia la pratica sperimentale dalla costruzione del modello alla validazione [[quantitative-research|quantitativa]], e riformula la [[prompt-engineering|formulazione dei prompt]] come una fase della progettazione sperimentale anziché una comodità. Ciò che non dimostra ancora è l'apprendimento: la validazione qui è la concordanza tra moto generato e i modelli degli autori, non il giudizio di misura degli studenti, quindi l'approccio eredita la domanda sulla [[assessment-validity|validità]] che qualsiasi dato generato usato come evidenza deve affrontare.

**Simulazioni su misura per gli argomenti che PhET non copre.** I modelli HTML/JavaScript generati da LLM consentono ai docenti di produrre la simulazione di cui il corso ha bisogno anziché la più vicina tra quelle pubblicate, previa validazione tecnica e fisica; in un pilota, 53 studenti in 26 coppie hanno costruito e raffinato i propri modelli di caduta libera senza che fosse richiesta alcuna preparazione di programmazione ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025]]).

Un prompt riutilizzabile a quattro elementi — strumenti, visualizzazione, controlli manuali, ottimizzazione — consente a un insegnante senza codice di generare una simulazione AR basata su browser i cui gesti di pizzico e allargamento governano la fisica; in un pilota con 29 studenti il gesto ha aiutato tutti i 29 a "sentire" la lunghezza d'onda (media 4,52) e l'86% ha riportato un maggiore coinvolgimento ([[genai-ar-physics-simulation-prompt-2026|Levy et al. (2026)]]).

**Strumentazione generata dall'IA a partire da un prompt.** Un laboratorio sulla rotazione generato tramite prompt in linguaggio naturale a un assistente IA, senza codifica manuale, ha misurato il moto circolare uniforme e accelerato entro l'1% di un'analisi video indipendente con Tracker, consentendo ai docenti di costruire l'interfaccia attorno alle proprie variabili pedagogiche anziché adattarsi a un'app per sensori precompilata ([[ai-generated-smartphone-circular-motion-lab-2026|Suñer et al. (2026)]]).

**Prestazione assistita contro conoscenza non assistita in un corso riprogettato.** Una riprogettazione del 2026 del corso introduttivo di fisica nucleare e delle particelle della Ruhr University Bochum (Mikhasenko et al.) ha consentito l'uso della [[generative-ai|IA generativa]] su dieci schede di compiti deliberatamente resistenti all'IA e a forma di ricerca, progettate in modo che un [[prompt-engineering|prompting]] ingenuo non sarebbe bastato. Lo [[student-engagement|coinvolgimento]] e l'ambizione erano alti — 24 studenti su 42 hanno ottenuto il credito su tutte e dieci le schede, e una derivazione ha riempito più di due metri di lavagna — ma un esame scritto di 90 minuti senza ausili è stato un "serio monito": una media di 20,6/80, con solo due candidati su 27 che raggiungevano 40. Gli autori concludono che la prestazione assistita e la conoscenza indipendentemente recuperabile sono risultati distinti che non si può presumere si addestrino o si dimostrino a vicenda, e che i corsi di fisica devono riservare una parte della pratica al lavoro senza ausili — a rafforzamento dell'evidenza più ampia della base di conoscenza sul [[transfer-of-learning|transfer]].

Una revisione PRISMA del 2026 di 11 studi empirici in sei paesi giunge alla stessa conclusione a livello di campo: i guadagni a breve termine del feedback e delle simulazioni basati sull'IA non persistevano negli esami successivi né si trasferivano alla prestazione indipendente ([[ai-university-physics-education-review-2026|revisione dell'IA nell'educazione fisica universitaria]]).

**La progettazione del ruolo dell'agente come variabile didattica.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] tengono costanti modello (DeepSeek R1), piattaforma e temperatura e variano solo il ruolo specificato nel prompt: un agente centrato sul docente che risponde in modo autorevole da una fonte di conoscenza limitata al manuale, contro un agente centrato sullo studente configurato come insegnante empatico con conoscenza della comprensione degli studenti, programmato per diagnosticare la causa delle [[misconceptions]], nominare il concetto rilevante e trasferire a un fenomeno analogo. Tra 59 neodiplomati che lavoravano su due item concettuali, l'agente centrato sullo studente produceva punteggi post-test più alti (9,67 contro 7,93; r = 0,38), carico cognitivo estraneo più basso e carico pertinente più alto, esperienza di flow più forte (d = 0,92) e percezione di empatia più alta (r = 0,53) — evidenza che è l'inquadratura del ruolo, non solo l'accuratezza delle risposte, a rendere un agente di fisica efficace sul piano didattico ([[pedagogical-agent]], [[prompt-engineering]]).

- **I punteggi delle valutazioni comparative sottostimano ciò che i modelli già sanno fare in fisica.** Una nuova correzione con esperti di dominio di sei benchmark di fisica ampiamente usati ha rilevato che la maggior parte del divario riportato era un artefatto di item difettosi e di correttori automatici restrittivi: su 250 rifiuti verificati, 143 (57,20%) erano difetti del benchmark e 95 (38,00%) errori del correttore, con soli 12 (4,80%) errori genuini del modello. Corretti, HLE-Physics mean@4 saliva dal 47,28% al 78,66% e CritPt dal 32,29% all'87,50%. Per l'insegnamento della fisica questo taglia in due direzioni: significa che gli studenti possono già ottenere soluzioni testuali di livello esperto per molti problemi canonici, quindi la valutazione del ragionamento fisico deve orientarsi verso item che resistano alla contaminazione da benchmark e verso evidenze di processo anziché risposte finali. ([[frontier-models-physics-benchmark-audit-2026]])

- **La correzione tramite IA può riprodurre un esito di fisica ad alta posta in gioco senza corrispondere a ogni parte.** Correggendo 10.364 pagine manoscritte di Olimpiadi ed esami universitari, un LLM multimodale recuperava la stessa squadra olimpionica di cinque studenti degli esaminatori e correlava con i totali a r = 0,93–0,96, ma la concordanza esatta sulle parti delle domande raggiungeva il 70% — seconda lettura controllata dagli esaminatori, non sostituzione ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).

- **Le valutazioni comparative di fisica possono essere ancorate al curriculum e non in inglese.** [[physicsmate-bengali-secondary-physics-benchmark-2026|Jahin et al. (2026)]] hanno costruito 1.834 domande in bengali a partire dal manuale nazionale di fisica per le classi 9-10 e da un grafo di conoscenza di 1.760 nodi; un'unica ricetta fissa di fine-tuning otteneva 5,5, 15,0 e 23,3 punti a 0,6B, 1,7B e 4B parametri.

### Connessioni con concetti correlati

L'educazione alla fisica si colloca nel più ampio dominio della [[stem-education]] ma ha connessioni distintive: con il [[socratic-method]] attraverso la forte tradizione di dialogo socratico nella risoluzione di problemi di fisica; con il [[computational-thinking]] attraverso il ruolo crescente del calcolo in fisica; con la [[assessment-validity]] attraverso le sfide della correzione delle spiegazioni di fisica; e con la [[professional-training]] attraverso la preparazione basata sulle [[simulation]]. I concetti di [[student-experience]] e [[ai-literacy]] sono essenziali per comprendere come gli studenti di fisica si orientino tra gli strumenti di IA, mentre [[educational-measurement]] e [[automated-assessment|correzione automatizzata]] si collegano alla dimensione della valutazione.

## Implicazioni per i docenti di fisica

- **Progettare per la fiducia degli studenti, non solo per l'adozione.** [[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]] documentano un divario tra fiducia e utilità di 50 punti (91% di uso, 41% di fiducia), con studenti che identificano i fallimenti dell'IA nel ragionamento visuo-spaziale e nei circuiti — create occasioni per portare alla luce e discutere questi limiti anziché presumere accettazione.
- **Usare l'IA socratica per approfondire la qualità delle domande, ma sorvegliare la cessione strategica.** I [[hashmi-socratic-physics-chatbot-2025|chatbot socratici]] migliorano la specificità delle domande, eppure la [[socratic-ai-physics-tutor-taxonomy-2026|ricerca sulle tassonomie]] rileva che i turni meta-procedurali dominano — gli studenti affidano il controllo strategico al tutor. Intervenite per mantenere gli studenti nel ruolo di decisori.
- **Strutturare l'uso dell'IA a livello cognitivo, non solo permissivo.** [[airis-cognitively-activated-ai-physics-2026|AIRIS]] (Activate–Inquire–Reflect) mostra il valore del far prevedere/abbozzare gli studenti prima dell'IA, del delegare i passaggi computazionali confrontando criticamente l'output, e del far riflettere in seguito — trattate l'integrazione dell'IA come un problema di progettazione didattica, e verificate se l'apprendimento sopravvive alla rimozione dell'IA. In una prova randomizzata con 95 studenti universitari, 45 minuti di addestramento allineato all'SRL sui problemi di meccanica hanno aumentato l'accuratezza quando gli studenti hanno poi rivisto item di elettromagnetismo con un modello: il 69,3% delle loro risposte errate diventava corretto contro il 41,3% per i controlli non addestrati (d = 0,81) ([[structured-genai-training-physics-problem-solving-rct-2026|Huang et al. (2026)]]).
- **Proteggersi dalla distorsione di correzione.** La [[ai-scoring-language-bias-physics|correzione tramite IA]] sottostima sistematicamente le spiegazioni degli studenti linguisticamente più deboli; usate una correzione sensibile alla lingua o moderata da esseri umani per la valutazione concettuale.
- **Usare classi simulate per la preparazione degli insegnanti.** Le [[multiagent-classroom-dual-process-physics-teachers-2026|classi simulate multi-agente]] offrono agli insegnanti in formazione una rara pratica nel rispondere a ragionamenti autentici degli studenti — un complemento a basso costo al microteaching in presenza.
- **Riservare pratica e valutazione senza ausili.** La riprogettazione di Bochum ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al. 2026]]) mostra che compiti a forma di ricerca consentiti con l'IA e completati con alto coinvolgimento possono lasciare gli studenti molto indietro in un esame senza ausili (media 20,6/80) — trattate la prestazione assistita e la conoscenza indipendentemente recuperabile come distinte, e inserite nel corso pratica deliberata senza ausili e un esame scritto.

- **Verificare la fedeltà del facilitatore; mantenere la fase di costruzione del modello libera dall'IA.** Sollecitato a "diteci e basta" quale peso fosse più pesante, un Gem configurato appositamente ha inventato valori di massa che nessuno aveva misurato, quindi la fedeltà di un facilitatore basato sul linguaggio va verificata anziché presunta, e la fase di costruzione libera dall'IA preserva il lavoro pratico che essa non può raggiungere ([[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani (2026)]]).

## Concetti collegati

- [[stem-education]]
- [[socratic-method]]
- [[intelligent-tutoring]]
- [[computational-thinking]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[student-experience]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[professional-training]]
- [[simulation]]
- [[generative-ai]]
- [[higher-ed]]
- [[discipline-specific-aied]]
- [[chemistry-education]] — Chemistry education and AI: labs, formative assessment, LLM limits, philosophy of experimentation
- [[biology-education]] — Biology education and AI: lab teaching assistants, AI literacy in biology, critical thinking, specialized tools

## Articoli collegati

- [[genai-video-engineering-physics-workflow-2026]] — From Prompts to Physical Laws: A Generative AI Workflow for Engineering Physics Education
- [[wang-teacher-student-centered-agents-physics-2026]] — Teacher-centered vs. student-centered prompt-engineered physics agents (Wang et al. 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[benzion-ai-physics-simulations-virtual-lab]] — Using AI to rapidly generate physics simulations / virtual labs (Ben-Zion et al. 2025)
- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[llm-computational-thinking-physics-2026]]
- [[ai-scoring-language-bias-physics]]
- [[multiagent-classroom-dual-process-physics-teachers-2026]]
- [[physics-chatbot-epistemological-beliefs-2026]]
- [[ai-generated-smartphone-circular-motion-lab-2026]]
- [[genai-ar-physics-simulation-prompt-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: turning the FCI, FMCE and EMCS into a 14-objective cognitive diagnostic (Le et al. 2026)
- [[physics-students-llm-perceptions-instruction-2026]] — Skepticism vs. Convenience: Physics Students' Perceptions and Use of Large Language Models Before and After Instruction
- [[context-prompts-physics-assignments-2026]] — Artificial Intelligence Driven Physics Assignments using Context Prompts
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
- [[physicsmate-bengali-secondary-physics-benchmark-2026]] — PhysicsMate: 1,834 Bengali secondary-physics QA pairs mapped to a 1,760-node curriculum graph, with small-model adaptation gains
- [[ai-university-physics-education-review-2026]] — Artificial intelligence in university physics education: a systematic review of empirical studies
- [[structured-genai-training-physics-problem-solving-rct-2026]] — Structured GenAI training for physics problem revision: a randomized controlled trial (Huang et al. 2026)
