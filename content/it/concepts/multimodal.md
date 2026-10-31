---
title: AI multimodale
created: "2026-10-14T23:10:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
connected_resources: [drawsplat]
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
translation_of: concepts/multimodal
source_updated: "2026-10-27T07:23:49-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **AI multimodale** — [[ai-technologies|sistemi di AI]] che elaborano, comprendono o generano contenuti attraverso modalità multiple — testo, immagini, audio, video e dati strutturati — e le domande educative che questi sistemi sollevano. Nell'[[ai-education|AI nell'istruzione]], l'AI multimodale compare in tre ruoli distinti: come *contenuto di apprendimento* che gli studenti creano e con cui si confrontano ([[multimodal-learning-genai|apprendimento multimodale]]), come *confine delle capacità* dei sistemi di tutoring che devono interpretare diagrammi e grafici ([[syal-multimodal-dialogue-stem-2026|tutoring multimodale]]), e come *segnale di valutazione* usato per valutare la comprensione ([[multimodal-item-parameter-estimation-2026|misura multimodale]]).

## Domande da considerare

- Pensa a un grafico, un diagramma delle forze o uno schema che tu abbia fatto fatica a spiegare a parole. Che cosa suggerisce quell'esperienza sui limiti di un [[intelligent-tutoring|tutor basato su AI]] testuale che cerchi di aiutare con problemi ricchi di immagini?
- Un tutor di [[physics-education|fisica]] risponde a problemi testuali circa il 96% delle volte ma scende a circa il 74% su problemi che incorporano il significato nei diagrammi. Prima di leggere, che cosa pensi causi questa "interferenza multimodale" — e riesci a pensare a una soluzione che non richieda di riaddestrare il modello?
- Hai probabilmente generato sia testo sia immagini con strumenti di AI. Hai trovato che il "[[prompt-engineering|prompting]] per le immagini" differisce dal prompting per il testo? Quali competenze potrebbero servire agli studenti per tradurre un'idea astratta in un prompt visivo preciso?
- L'AI multimodale può correggere saggi, generare feedback con narrazione audio, e perfino ricostruire le statistiche degli item d'esame da item composti di immagini e testo. Che cosa segnala (o rischia) il passaggio dalla valutazione solo testuale a quella multimodale per la [[bias-mitigation|correttezza]] e la validità?
- In che modo il fatto che il supporto dell'AI sia meno affidabile proprio sui problemi ricchi di diagrammi — quelli che costruiscono la comprensione profonda delle [[stem-education|STEM]] — potrebbe creare un divario di [[equity-in-ai-education|equità]] tra gli studenti? Chi ne è più colpito?
- I sistemi multimodali possono tradurre testo in audio o in elementi visivi per supportare l'apprendimento inclusivo, ma abilitano anche la rilevazione fine-grained in classe. Dov'è il confine tra accesso multimodale utile e sorveglianza?

## Introduzione

La multimodalità nell'AI si riferisce alla capacità di lavorare attraverso forme rappresentazionali diverse anziché il solo testo. I moderni sistemi di [[generative-ai|AI generativa]] e di [[llm|LLM]] accettano e producono sempre più immagini, audio e video in aggiunta al testo, aprendo nuove possibilità e nuovi rischi per l'istruzione. Fondata sulla teoria semiotica sociale, secondo cui il significato si costruisce attraverso le modalità — non solo le parole — l'AI multimodale cambia il modo in cui il [[teacher-role|teaching]], l'apprendimento e la valutazione vengono progettati e valutati.([[multimodal-learning-genai]])

## I tre volti dell'AI multimodale nell'istruzione

### 1. Apprendimento multimodale e creazione di contenuti

L'AI multimodale consente agli apprendenti di produrre e con cui confrontarsi con contenuti attraverso testo, immagine, audio e video. Una guida per educatori all'apprendimento multimodale con l'AI generativa colloca questi strumenti come partner "cyber-social": completano — ma non possono sostituire — la costruzione di significato umana.([[multimodal-learning-genai]])

- **L'[[ai-literacy|alfabetizzazione in AI]] in contesti multimodali** è stratificata: consapevolezza di base delle piattaforme multimodali, co-creazione intermedia e [[critical-thinking|valutazione critica]] degli output, e progettazione avanzata di attività e valutazioni multimodali.([[multimodal-learning-genai]])
- **Il prompting multimodale** è esso stesso una pratica epistemica impegnativa. Gli studenti che fanno prompting per immagini oltre che per testo scoprono che "la literacy del prompting è diversa tra il prompting per il testo e quello per le immagini" — tradurre un significato astratto in prompt multimodali leggibili dalla macchina richiede un preciso vocabolario visivo e mette in luce i limiti e i bias del sistema.([[multimodal-prompting-ai-literacy]])
- **La valutazione multimodale** passa dai saggi agli artefatti che combinano testo, immagine, audio e video, con gli educatori che usano l'AI per [[scaffolding|fornire supporto]] alla creazione e al feedback anziché sostituire la produzione propria dello studente.([[multimodal-learning-genai]])
- **La composizione multimodale dello studente come impalcatura del pensiero critico comporta un trade-off.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] mostrano che far trasformare a studenti dell'ultimo ciclo della primaria narrazioni scritte in immagini e brevi video generati dall'AI ha sostenuto guadagni duraturi in interpretazione, analisi, valutazione e spiegazione — ma non in inferenza. Poiché gli elementi visivi rendevano esplicito il significato della storia, gli studenti riportavano un minor bisogno di inferire il significato implicito dal solo testo; la collaborazione tra pari, non lo strumento multimodale, ha ripristinato le occasioni di inferenza. Il valore dell'AI multimodale come partner della costruzione di significato è dunque specifico per dimensione e dipende da un [[learning-design|design didattico]] che reintroduca deliberatamente il lavoro inferenziale e [[self-regulated-learning|autoregolativo]] che l'esternalizzazione può aggirare.
- **La [[writing-education|composizione]] multimodale dello studente come alfabetizzazione critica sull'AI.** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss et al. (2026)]] analizzano 22 annunci di servizio pubblico video, della durata da 90 secondi a 3 minuti, realizzati da studenti di undicesima anno su temi di [[ethics|etica]] dell'AI scelti da loro — la sorveglianza tramite laptop regolati dalla scuola e "passaggi di corridoio" elettronici, il [[privacy|consenso informato]], e l'accusa algoritmica punitiva — come [[ai-literacy|alfabetizzazione critica sull'AI]] realizzata attraverso la composizione su immagine in movimento, suono, testo e i corpi stessi degli studenti. In tutti e sette i film il danno era rappresentato come emergente dall'intreccio uomo-macchina anziché dal solo strumento (uno "stalker AI" antropomorfizzato era interpretato da un attore umano in tre dei sette), e 15 delle 18 risposte di fine unità affermavano che la composizione aveva cambiato la loro comprensione dell'etica dell'AI. Gli autori sostengono che i prodotti multimodali sia *dimostrano* sia *comunicano* competenza critica — artefatti produttivi, riflessioni e discorso civico possono servire come evidenza di [[assessment|valutazione]] che le scale strutturali della sola literacy testuale trascurano.

### 2. Tutoring multimodale e confine delle capacità

Quando i tutor basati su LLM devono risolvere problemi che incorporano il significato in grafici, diagrammi delle forze, schemi o tabelle, la loro accuratezza degrada bruscamente — è il **Multimodal Interference Effect**.([[syal-multimodal-dialogue-stem-2026]])

- Su problemi di fisica di OpenStax, l'accuratezza solo-testuale di circa il 96% scende a **circa il 74%** sui problemi ricchi di immagini, coerentemente tra famiglie di modelli.([[syal-multimodal-dialogue-stem-2026]])
- **Errori di elaborazione visiva** — incapacità di estrarre informazioni da grafici o diagrammi — dominano la tassonomia degli errori e sono la modalità di fallimento più correggibile.
- Un semplice intervento a dialogo strutturato (far descrivere al modello ciò che vede, correggere solo le letture errate *osservabili* senza rivelare la fisica, poi ri-sottoporre il prompt) ripristina l'accuratezza a **circa il 95%** senza alcun riaddestramento.([[syal-multimodal-dialogue-stem-2026]])
- Questa è una **preoccupazione di equità**: gli studenti che lavorano su problemi ricchi di immagini — proprio i problemi che costruiscono la comprensione concettuale profonda nelle STEM — ricevono attualmente un supporto AI meno affidabile di quelli che lavorano su esercizi solo testuali.
- **Costruire un ausilio visivo è più difficile che leggerne uno.** Su GeoVAD-Bench, fornire un diagramma ausiliario esperto aumentava l'accuratezza (da +3,3 a +7,0 punti), ma lasciare che i modelli costruissero la propria linea ausiliaria allargava il divario di 10,0-13,5 punti — due modelli hanno ottenuto risultati peggiori che senza alcun ragionamento visivo ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]).
- **Il confine è un profilo, non un livello — e l'immaginario artistico si colloca al di fuori della regione che i modelli gestiscono bene.** [[muse-vlm-artistic-image-benchmark-2026|MUSE (Zhu et al., 2026)]] valuta 30 VLM aperte e proprietarie su 12 compiti relativi a 1.174 opere d'arte commissionate, e la dispersione delle capacità tra le dimensioni è più ampia di quanto suggerisca qualsiasi punteggio aggregato: la classificazione di scena è quasi matura (23 modelli su 30 sopra 75,0, mediana 81,0) mentre il rilevamento delle emozioni non supera il 39,5 e i compiti a risposta aperta che richiedono ai modelli di *articolare* le proprie evidenze ottengono 50,90 (identificazione di indizi visivi) e 49,18 (inferenza della causa emotiva) in similarità semantica. Il ragionamento composizionale e quello dipendente dal punto di vista falliscono più duramente — laddove la ground truth non specifica alcuna relazione laterale o verticale definita, il 90,0% e il 73,3% dei modelli ne afferma comunque una, solo il 43,3% colloca correttamente la bambina in profondità, e nessun modello risolve tutte e tre le dimensioni di un singolo item. I fallimenti si propagano anche a cascata: un personaggio mal ancorato viene poi giustificato con una ratio fluida costruita a partire dalla semantica visiva circostante (farfalle, uccelli), ed è questo l'esito più pericoloso nel tutoring perché la spiegazione si legge come competente. Per l'apprendimento linguistico basato su immagini [[language-learning|linguistico]] questo argomenta a favore di una validazione a livello di singola dimensione sulle immagini che un corso usa effettivamente, anziché importare un punteggio multimodale generale, e di estendere il checkpoint di ancoraggio descritto sotto — descrivere ciò che si vede, e dove, prima di ragionarci sopra — a contenuti artistici [[situated-learning|situati]] ([[muse-vlm-artistic-image-benchmark-2026]]).

L'implicazione pratica di design è un **checkpoint di ancoraggio visivo** nel tutoring multimodale: un passaggio deliberato in cui il sistema descrive ciò che vede prima di tentare una soluzione, dando allo studente o a un supervisore umano la possibilità di correggere gli errori percettivi.([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu et al. (2026)]] aggiungono un vincolo preliminare: un'equazione, un grafico o un'unità possono comparire in un report senza essere mai stati recuperati dal documento elaborato, quindi un disaccordo con il docente può essere un fallimento di estrazione anziché di ragionamento — il che rende il formato di consegna parte del design della valutazione.

### 3. Valutazione e misura multimodali

L'AI multimodale amplia sia il *contenuto* della valutazione sia il *segnale* usato per assegnare un punteggio.

- **I sistemi di feedback multimodali** integrano testo strutturato, riferimenti alle slide e narrazione audio in streaming. In uno studio, il [[ai-feedback-quality|feedback multimodale dell'AI]] eguagliava il feedback degli educatori sull'apprendimento *superandolo significativamente* sulle percezioni degli studenti.([[multimodal-ai-feedback-learning]])
- **La scelta della modalità è un giudizio educativo, non un contenitore.** [[elkington-human-centred-assessment-value-2026|Elkington (2026)]] sostiene che scegliere tra formati scritti, orali, digitali e multimodali decide che cosa diventa possibile per gli apprendenti e visibile ai valutatori, e considera la scelta controllata tra modalità un vincolo generativo anziché un dettaglio amministrativo.
- **La stima dei parametri degli item multimodali** usa LLM multimodali messi a punto per ricostruire le curve caratteristiche degli item (IRT / 3PL) direttamente dalle probabilità predette delle opzioni su item composti di immagine e testo, collegando l'AI multimodale alla [[educational-measurement|misura educativa]] e alla [[item-response-theory|teoria della risposta all'item]]. ([[multimodal-item-parameter-estimation-2026]])
- **La valutazione di modelli vision-language educativi** e la [[mllm-scientific-visualization-literacy|literacy degli LLM multimodali]] estendono il toolkit valutativo del campo al ragionamento multimodale e alla [[visualization|visualizzazione]].([[drawedumath-vlm-struggling-students-2026]])([[mllm-scientific-visualization-literacy]])
- **La correzione multimodale della [[chemistry-education|chimica]] scritta a mano espone un confine di capacità dipendente dal formato:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros e Kortemeyer]] hanno corretto pagina per pagina l'esame finale scritto a mano di chimica generale di 296 studenti, confrontandolo con immagini di rubriche mediante un LLM multimodale con ragionamento, ottenendo punteggi affidabili sulle risposte testuali e sulle equazioni di reazione chimica (F1 normalizzato massimo) ma risultati su disegni e grafici *peggiori del caso* — le griglie di sfondo distraggono visivamente la visione dell'AI, e i diagrammi scientifici e le strutture chimiche restano difficili da interpretare — confermando che la visione dell'AI multimodale non è robusta sul lavoro ricco di rappresentazioni e si dispiega al meglio con la [[human-in-the-loop-ai|rinuncia all'uomo]] sugli item grafici ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Il riconoscimento del costrutto e il giudizio comparativo sono abilità separabili.** [[cfes-p24-multimodal-slide-auditing-2026|Ma et al. (2026)]] esprimono sei principi dell'apprendimento multimediale come modifiche reversibili alle slide più controlli sham di equivalenza visiva, e trovano che entrambi i modelli recuperavano ogni operazione, principio e riparazione (8/8) mentre la calibrazione della severità falliva del tutto (0/8) — un punteggio composito nasconderebbe quale strato fallisce.

- **I guadagni di correttezza possono essere validati fino all'esistenza.** Uno stimatore dell'attenzione multimodale batteva una baseline solo-visiva solo modestamente, e il suo regolarizzatore MAE-gap mirato al genere riduceva il divario di validazione da 0,02 a 0,005 aumentando però il divario e l'errore del peggior gruppo su soggetti tenuti fuori — quindi è richiesta una validazione ripetuta a livello di singolo soggetto e consapevole dei sottogruppi prima del dispiegamento ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).
- **La correzione multimodale può riprodurre un esito di selezione anche laddove il punteggio a livello di item resta indietro.** Correggendo 10.364 pagine manoscritte di Olimpiadi e universitarie, un LLM eguagliava i totali degli esaminatori a r = 0,93-0,96 e collocava gli stessi cinque studenti nella squadra delle Olimpiadi, eppure la concordanza sulle parti raggiungeva il 70%: evidenza di secondo lettore, non di correttore di riferimento ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **La generazione di diagrammi è una frontiera delle capacità, non un problema risolto.** Su un benchmark di fisica di 15.246 domande che valuta l'output multimodale, sintetizzare o modificare diagrammi di fisica strutturati si è rivelato più difficile che rispondere, e i modelli leader restavano sotto il 70% di padronanza stretta — evidenza che la *produzione* visiva resta indietro rispetto alla *comprensione* visiva ([[omniphys-multimodal-physics-benchmark-2026|Chen et al., 2026]]).

## AI multimodale per l'apprendimento linguistico e accessibile

I sistemi multimodali ampliano anche l'accesso e la [[personalized-learning|personalizzazione]]. Gli strumenti di apprendimento basati su audio e [[video-education|video]] guidati dall'AI adattano la velocità di riproduzione, producono riassunti video multimodali e supportano la pratica della pronuncia.([[ai-guided-learning-audiovideo-2026]]) I grafi di conoscenza multimodali ragionano attraverso immagini e testo per compiti educativi,([[multimodal-knowledge-graph-educational-reasoning]]) e le rappresentazioni multimodali migliorano l'[[inclusive-learning|apprendimento inclusivo]] traducendo l'informazione attraverso le modalità (ad es. da testo ad audio o a elementi visivi). Le applicazioni di dominio includono la correzione e la diagnosi della matematica scritta a mano,([[llm-cognitive-diagnosis-handwritten-math]]) il [[affective-tutoring|tutoring affettivo]] con segnali multimodali,([[multimodal-affective-its-presentation]])([[kar-mathbuddy-affective-math-tutoring-2025]]) l'apprendimento da testo a immagine in campi specializzati,([[nuclear-diffusion-text-to-image-learning-2026]]) e la rilevazione in classe multimodale e attenta alla privacy.([[privacy-aware-classroom-incident-recognition-2026]]) Bird (2026) dimostra una forma di multimodalità interna al testo: fondere un transformer ELECTRA messo a punto con l'analisi di tratti di linguistica computazionale per classificare la letteratura inglese per Key Stage del Regno Unito, dove il modello fuso (F1 0,996) superava di gran lunga ogni baseline unimodale — evidenza che combinare forme rappresentazionali, anche all'interno del testo, può superare gli approcci a modello singolo.

## Sfide e implicazioni di design

1. **Colmare il divario multimodale.** I sistemi di tutoring multimodali dovrebbero includere ancoraggio visivo e impalcature a dialogo strutturato anziché presumere che le capacità di visione siano robuste.([[syal-multimodal-dialogue-stem-2026]])
2. **Trattare il prompting multimodale come un'abilità insegnabile.** I curricoli di alfabetizzazione in AI devono affrontare il prompting specifico per modalità, la coerenza tra le modalità e la valutazione critica degli output multimodali.([[multimodal-prompting-ai-literacy]])
3. **Preservare la costruzione di significato umana.** L'AI multimodale dovrebbe aumentare, non sostituire, la costruzione e la valutazione del significato da parte dello studente attraverso le modalità.([[multimodal-learning-genai]])
4. **Estendere la valutazione alla validità multimodale.** La [[assessment-validity|validità della valutazione]], il bias e l'affidabilità devono essere esaminati quando l'AI assegna punteggi o genera artefatti multimodali.([[multimodal-item-parameter-estimation-2026]])([[ai-ed-evaluation]])
5. **Osservare equità e privacy.** Il supporto inaffidabile sui problemi ricchi di immagini e le esigenze di dati della rilevazione multimodale comportano entrambe implicazioni di equità e di privacy.([[syal-multimodal-dialogue-stem-2026]])([[privacy-aware-classroom-incident-recognition-2026]])
6. **Adeguare la pipeline al contenuto.** L'assistente da laboratorio di cybersecurity con LLM multimodale di Patel et al. (2025) gestiva meglio le slide visivamente dense, mentre una pipeline OCR-più-LLM forniva un valore didattico paragonabile su slide centrate sul testo a un costo computazionale significativamente inferiore ([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel et al. (2025)]]).

## Idee sbagliate comuni

**"Un modello multimodale gestisce problemi multimodali."** L'accuratezza degrada bruscamente quando il significato è portato dalla figura anziché dal testo. Un tutor di [[physics-education|fisica]] risponde a problemi testuali circa il **96%** delle volte ma scende a circa il **74%** sui problemi che incorporano il significato nei diagrammi — l'**effetto di interferenza multimodale**. Ventidue punti di capacità spariscono esattamente dove vive il contenuto disciplinare.

**"Aggiungere un'immagine al prompt risolve il problema dei diagrammi."** La modalità di input non è il collo di bottiglia; l'interferenza lo è. Un modello che riceve il diagramma e continua a ragionare sulla prosa circostante ha ricevuto l'informazione e non l'ha usata, ed è per questo che il fallimento resta invisibile a meno che qualcuno confronti i due formati del problema.

**"La capacità multimodale è un'unica scala, quindi il modello migliore in assoluto è il migliore per il compito ricco di immagini."** La capacità è specifica per compito, e un modello che guida nei benchmark generali può restare indietro sui diagrammi di forze. Per le discipline ricche di immagini il test rilevante è quello con il significato incorporato nella figura.

**"I limiti del tutoring solo testuale sono un fastidio, non un problema di curriculum."** Nelle discipline in cui il diagramma *è* il problema — fisica, chimica, geometria, ingegneria, medicina — il confine di competenza di un tutor solo testuale cade attraverso il contenuto valutato anziché ai suoi margini.

## Concetti collegati
- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — Ombrello: tecnologie e tecniche di AI (modelli, addestramento di LLM, robotica, RAG, agentico)
- [[virtual-and-augmented-reality]] — gesto, voce e input spaziale come canali di apprendimento
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]

## Articoli collegati
- [[elkington-human-centred-assessment-value-2026]] — Valutazione centrata sulla persona, assemblaggi e vincoli generativi (Elkington 2026)
- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — Video PSA composition on AI ethics as critical AI literacy pedagogy (Burriss et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — VLM performance on handwritten student math work (DrawEduMath, Lucy et al. 2026)
- [[multimodal-learning-genai]] — Educator's guide to multimodal learning with generative AI (MMLD-AI model)
- [[syal-multimodal-dialogue-stem-2026]] — The Multimodal Interference Effect and structured-dialogue recovery in STEM
- [[multimodal-ai-feedback-learning]] — Multimodal AI feedback matches educators on learning, exceeds on perceptions
- [[multimodal-prompting-ai-literacy]] — Students' multimodal prompting as epistemic work in AI literacy
- [[multimodal-item-parameter-estimation-2026]] — Estimating IRT item parameters with multimodal LLMs
- [[ai-guided-learning-audiovideo-2026]] — AI-guided audio-video learning support
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[mllm-scientific-visualization-literacy]] — Multimodal LLM literacy for scientific visualization
- [[multimodal-affective-its-presentation]] — Multimodal signals in affective intelligent tutoring
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affective multimodal math tutoring
- [[llm-cognitive-diagnosis-handwritten-math]] — LLM cognitive diagnosis of handwritten math
- [[nuclear-diffusion-text-to-image-learning-2026]] — Text-to-image learning in nuclear engineering education
- [[privacy-aware-classroom-incident-recognition-2026]] — Privacy-aware multimodal classroom sensing
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — Multimodal OCR instruction in cybersecurity education
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Multimodal AI composing and critical thinking in primary writing (Lu et al. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 12 tasks over 1,174 artworks show VLM capability as a dimension-specific profile, weakest in affective interpretation and viewpoint-dependent spatial reasoning (Zhu et al. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
