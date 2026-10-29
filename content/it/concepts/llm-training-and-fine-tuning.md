---
title: "Addestramento e fine-tuning degli LLM"
created: "2026-10-14T21:55:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/llm-training-and-fine-tuning
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Addestramento e fine-tuning degli LLM** — come si costruiscono i modelli di IA educativi: la pipeline dal pre-addestramento al post-addestramento fino all'adattamento, quanto costa ciascuno stadio e cosa dimostrano le evidenze che compri. Il problema organizzativo è un **disallineamento di incentivi**: i modelli general-purpose sono ottimizzati per rispondere, mentre insegnare richiede di trattenere la risposta. Il post-addestramento e il fine-tuning sono le due leve che modificano quel comportamento, e il risultato più chiaro della knowledge base è che sono una scelta *terza*, non la prima — il recupero e il prompting arrivano prima nella decisione, e uno studio qui presente ha trovato il supervised fine-tuning fallire in un compito in cui il semplice prompting ha vinto ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Scritto per sviluppatori di software educativi e professionisti dell'insegnamento che decidono cosa costruire.

## Domande da considerare

- Se avete un compito di tutoraggio in cui un modello generale risponde troppo prontamente, la vostra prima mossa è un prompt migliore, il recupero sui vostri materiali, o l'addestramento? Cosa dovreste misurare per capire quale dei tre ha aiutato?
- Il fine-tuning ha bisogno di dati. Da dove proverrebbero gli esempi di addestramento del vostro progetto, chi li possiede, e quale revisione della privacy richiederebbero prima di poter essere usati?
- Uno studio qui presente ha trovato che il fine-tuning di un modello su dati di valutazione migliorava *formattazione e similarità* mentre un altro fine-tuning separato falliva del tutto nella generazione di feedback. Cosa suggerisce questo sul fatto di adeguare il metodo di addestramento al compito?
- Il post-addestramento con reinforcement learning può insegnare a un modello a guidare anziché rispondere. Quale ricompensa scrivereste per catturare "guida bene", e come potrebbe un modello aggirarla?
- La knowledge base riporta che la scelta del modello e del prompt spiega solo circa il 15% del divario tra gli LLM e i guadagni di apprendimento degli studenti. Se fosse vero, come dovrebbe cambiare la vostra decisione tra costruire e comprare?
- Un modello fine-tuned che è accurato può comunque non essere sicuro nel corso di una conversazione lunga. Cosa testereste prima di lasciarlo parlare con gli studenti senza supervisione?

## Introduzione

Lo sviluppo dell'IA educativa si scontra con lo stesso muro da due direzioni. I modelli linguistici general-purpose sono post-addestrati sulla preferenza umana per l'utilità, che in pratica significa rispondere prontamente e completamente; la tutorizzazione richiede l'opposto, perché l'obiettivo pedagogico è aiutare lo studente a raggiungere la risposta anziché consegnargliela. Al tempo stesso, un modello generale non sa nulla del vostro curriculum, della vostra rubrica o del tono della vostra istituzione, e nessuna quantità di prompt engineering installa in modo affidabile questi elementi.

Questa pagina copre le tecniche che modificano un modello anziché il testo che gli inviate. Si collocano su una **scala di impegno crescente**: prompting, poi recupero, poi adattamento parameter-efficient, poi fine-tuning completo, poi post-addestramento con segnali di preferenza o di ricompensa. Ciascun gradino costa più dati, più calcolo e più disciplina valutativa del precedente, ed è una scelta iniziale peggiore di quella del gradino sottostante a meno che una misura specifica giustifichi la salita. Gran parte della letteratura di ricerca riporta solo la cima di quella scala, il che rende facile per uno sviluppatore puntare all'addestramento quando il recupero sarebbe stato sufficiente.

La pagina è organizzata attorno alle decisioni che chi costruisce si trova effettivamente ad affrontare: quale leva tirare (questa sezione e la successiva), cosa l'adattamento compra e costa in pratica, cosa il post-addestramento può plasmare che l'adattamento non può, e come questi sistemi falliscono. La terminologia è usata nel suo senso standard: il **pre-addestramento** è lo stadio da zero su un corpus generale, il **post-addestramento** è tutto ciò che lo segue e che plasma il comportamento (supervised fine-tuning, ottimizzazione delle preferenze, reinforcement learning), e il **fine-tuning** copre sia lo stadio supervisionato del post-addestramento sia il successivo lavoro di adattamento al compito o al dominio, inclusi i metodi parameter-efficient.

## La pipeline di addestramento, stadio per stadio

Tre stadi, con accessibilità molto diverse. Sapere quale stadio un articolo descrive previene la maggior parte delle cattive letture di questa letteratura.

Il **pre-addestramento** costruisce un modello base da un corpus testuale generale. È lo stadio che produce la capacità ampia del modello, ed è fuori portata per praticamente ogni progetto educativo: il costo si misura in milioni di dollari e i dati sono una raccolta su scala web. Nulla in questa knowledge base lo fa. La sua rilevanza per i professionisti è diagnostica più che azionabile — i dati di pre-addestramento sono la leva dominante sul comportamento di un modello, ed è l'unica leva che non potete tirare. Quella asimmetria è il motivo per cui tutte le tecniche rimanenti del campo operano su un modello già addestrato.

Il **post-addestramento** plasma il comportamento sopra il modello base. Il supervised fine-tuning (SFT) insegna al modello a imitare dimostrazioni; l'ottimizzazione delle preferenze e il reinforcement learning lo spingono poi verso output che un reward model o un insieme di giudizi umani valuta più in alto. È lo stadio in cui un modello può essere insegnato a guidare anziché rispondere, ed è dove vivono i risultati educativi più sorprendenti. È anche lo stadio più sensibile alla progettazione della ricompensa, perché una ricompensa è una specifica compressa di ciò che volete e i modelli ottimizzano qualunque cosa abbiate effettivamente scritto.

L'**adattamento** adegua un modello esistente al vostro compito o dominio, di solito con molti meno dati e calcolo. Il fine-tuning parameter-efficient (PEFT), di cui LoRA è la forma comune, addestra un piccolo numero di parametri aggiunti e lascia i pesi base congelati. Il fine-tuning completo aggiorna tutto. La distillazione e l'unlearning si collocano accanto a essi. Le sezioni seguenti li prendono uno per uno. Per la maggior parte degli sviluppatori educativi questo è lo stadio pratico — quello in cui da poche centinaia a poche migliaia di esempi e una singola GPU possono produrre un modello distribuibile.

## Prompt, recupero o addestramento? La decisione che viene prima

Il singolo risultato più forte di questa knowledge base su quella domanda è uno studio sul recupero, non sull'addestramento. Nel costruire un assistente per la base di conoscenza di un corso, Shen et al. (2026) hanno valutato modelli locali in tre configurazioni e hanno trovato che il **recupero, non il modello, è la decisione progettuale di primo ordine**: il loro LLM locale senza recupero raggiungeva solo il **52,3%** di accuratezza, *sotto* una baseline TF-IDF del **55,4%**, mentre l'aggiunta del [[rag|retrieval-augmented generation]] senza alcun fine-tuning lo portava al **66,6%** ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Le configurazioni di fine-tuning che hanno anche testato sono riportate insieme alle ablazioni del recupero, alla quantizzazione e all'energia per query, il che rende il confronto insolitamente onesto: un modello base senza ancoraggio può essere peggiore di un metodo lessicale vecchio di decenni, e la soluzione più economica non è l'addestramento.

Ciò che il campo costruisce effettivamente riflette un ordine simile. Una revisione PRISMA-guided di 23 studi empirici (2020–2025) sulla personalizzazione dell'IA per l'[[writing-education|insegnamento della scrittura]] ha trovato il **prompt engineering dominante (N = 13), davanti al fine-tuning (N = 7) e alle architetture ibride (N = 3)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Il risultato più affilato della revisione è un disallineamento strutturale più che una classifica delle tecniche: gli obiettivi pedagogici dichiarati si sono spostati verso i processi di scrittura, la [[feedback-literacy|alfabetizzazione al feedback]] e le competenze accademiche di ordine superiore, mentre le implementazioni dominanti perseguono ancora obiettivi focalizzati sul prodotto attraverso il prompt design o il fine-tuning.

Laddove prompting e addestramento sono stati confrontati direttamente, il risultato dipende dal compito, ed è esattamente per questo che la decisione dovrebbe essere misurata anziché data per scontata:

- **L'addestramento vince quando l'obiettivo è un formato di output stabile o una proprietà controllata.** Nella generazione automatica di item per la valutazione della comprensione orale in L2, il raffinamento iterativo del prompt è arrivato a un plateau, e il fine-tuning di GPT-4.1 *sul prompt ottimizzato* ha poi migliorato la generazione oltre il solo prompting — isolando l'adattamento del modello, piuttosto che la progettazione del prompt, come motore del guadagno residuo ([[gpt-item-generation-l2-listening-2026]]).
- **Il prompting vince quando l'obiettivo è un testo carico di giudizio.** Lo stesso sistema che aveva effettuato con successo il fine-tuning per la *valutazione* falliva nel *feedback*: in WrAFT, un modulo GPT-4o fine-tuned raggiungeva QWK 0,84 e RMSE 0,44 su 360 saggi TOEFL tenuti da parte, ma il supervised fine-tuning per la generazione di feedback produceva output troncati e non parsificabili, mentre il prompting diretto di Claude 3.7 produceva il feedback che gli insegnanti hanno valutato migliore ([[wraft-automated-writing-evaluation-argumentative-2026]]). Il fine-tuning aveva insegnato al modello a centrare un punteggio; non gli aveva insegnato a scrivere.
- **La modellazione a livello di prompt può sostituire l'addestramento quando l'obiettivo è una persona o una rubrica.** Il prompting guidato dalla rubrica, co-raffinato in modo iterativo, ha portato l'accordo LLM–umano su lavori di progettazione degli studenti dal **54,75%** all'**81,25%** (alpha di Cronbach 0,393 → 0,798) senza alcun fine-tuning ([[yasar-llms-iterative-pedagogical-design-2026]]), e un prompt GPT personalizzato fondato sulla letteratura suscitava i misconcepimenti matematici obiettivo con una presenza pari a **0,98** contro **0,40** per un prompt ampio ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **C'è un tetto su tutto quanto.** Hardy e Kim (2026) stimano che la scelta del modello e del prompt insieme spieghino solo circa il **15%** del disallineamento tra gli LLM e i guadagni di apprendimento degli studenti, con il resto distribuito tra i modelli, e hanno trovato che la ponderazione per benchmark e gli ensemble a voto unanime peggioravano l'allineamento ([[educational-llm-alignment]]). Se i dati di pre-addestramento sono la leva dominante ed è l'unica che non potete tirare, allora le aspettative su ciò che ciascuna di queste tecniche può ottenere dovrebbero essere calibrate di conseguenza.

## Cosa compra il fine-tuning: controllabilità rispetto a scala

Quando un modello generale non può essere indotto a mantenere una proprietà che vi serve, il fine-tuning su un dataset modesto spesso può — e il risultato ricorrente è che *il targeting batte la dimensione*. Tre modelli da 8B fine-tuned su un curriculum di lettura per bambini progettato da esperti hanno superato GPT-4o zero-shot e Llama 3.3 70B sulle metriche legate alla difficoltà, con problemi di sicurezza trascurabili. Gli autori inquadrano questo come **controllabilità rispetto a scala**, poiché un modello compatto può essere sintonizzato su un livello di lettura e un pattern di errore specifici in un modo in cui un modello generale non può essere interrogato ([[llm-children-reading-story-generation]]).

Il pattern si ripete su compiti molto diversi:

- **Ancoraggio al curriculum.** Un dataset di istruzioni multilingue di 24.795 esempi ancorato agli Indian Knowledge Systems ha prodotto un fine-tune da 7B che segnava **6,39** su un panel esterno di cinque giudici (mediana su 1.201 item stratificati). È entro **0,15** da un forte modello generale di riferimento a una frazione del costo di deployment — mentre lo stesso modello base segnava **vicino allo zero sulle dimensioni specifiche degli IKS** senza il fine-tune ([[iks-instruct-dataset-indian-knowledge]]). Quel divario tra "competente in generale" e "competente qui" è l'intero argomento a favore dell'adattamento al dominio. Notate anche il dettaglio controintuitivo che gli autori riportano: la qualità **non** cresceva in modo monotono con la cura dei dati.
- **Affidabilità della valutazione, a basso costo.** Un singolo adattatore LoRA addestrato su circa **3.900** esempi valutati raccolti ha portato cinque piccoli modelli aperti (4B–30B) alla parità o meglio con un valutatore umano su due esami di informatica, e ha quasi annullato la sensibilità alla persona (drift ≤ 0,32 MAE) ([[llm-graders-computer-science-exams-2026]]). Un adattatore, un dataset, diversi modelli base — questa è la forma di un deployment pratico.
- **Automazione selettiva.** La confidenza era un predittore affidabile dell'errore di valutazione (β = −0,602, p < 0,001). L'instradamento del **20%** meno fiducioso delle risposte alla revisione umana ha portato un modello GPT-3.5 fine-tuned da r = 0,781 a **r = 0,822** (RMSE 0,5990 → 0,5544) riducendo il lavoro manuale di valutazione di circa l'**80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]). Il fine-tuning qui non sostituisce l'umano; rende conveniente l'attenzione dell'umano.
- **Misurare costrutti che altrimenti valutereste a mano.** Trasformatori ungheresi fine-tuned (hubert-base-cc, PULI-BERT-Large) sono stati messi a benchmark contro feature TF-IDF ed embedding Qwen3 per la valutazione della scrittura riflessiva nella [[teacher-education|formazione degli insegnanti]] ([[reflection-level-classification-hungarian-essays-2026]]), e un modello multimodale fine-tuned (basato su Qwen3.5) ha dimostrato di ricostruire le curve caratteristiche degli item per item a scelta multipla, apprendendo i pattern di risposta codificati nelle curve 3PL e MCM piuttosto che essendone informato ([[multimodal-item-parameter-estimation-2026]]).

## L'adattamento parameter-efficient in pratica

LoRA e i suoi parenti sono il luogo in cui la maggior parte dei team educativi lavorerà effettivamente, e la letteratura contiene indicazioni insolitamente specifiche sul loro comportamento.

**Il rank è un compromesso, non un quadrante da massimizzare.** Lu et al. (2026) hanno costruito 360 dialoghi sistema–utente–assistente da un corso di Sistemi di Controllo Lineare, ristrutturato le risposte in un formato Soluzione–Metodo–Punti Didattici, e applicato LoRA a Qwen2.5-3B e 7B a rank 4, 8 e 16. La copertura dell'output strutturato è passata da quasi zero nella base a circa **1,00**, e la configurazione migliore (7B, r = 16) ha raggiunto ROUGE-L **0,4093** con intervalli di confidenza bootstrap del guadagno interamente sopra zero. Ma il **guadagno per milione di parametri dell'adattatore scendeva in modo monotono al crescere del rank**, quindi l'allineamento a livello di corso è un compromesso tra scala e rank piuttosto che un upgrade gratuito ([[lora-finetuned-control-systems-course-qa-2026]]). Le loro metriche misurano similarità e formattazione, non accuratezza derivazionale, che è l'avvertenza standard per tutta questa famiglia di valutazioni.

**La scala non predice il successo, e impostazioni identiche si comportano in modo diverso tra architetture.** AiAWE, un sistema di valutazione automatica della scrittura open-source costruito su una Gemma-3-27B-it adattata con LoRA, ha raggiunto RMSE 0,474, QWK 0,828, e accordo entro ±0,5 dal punteggio umano sul **90,56%** di 360 saggi di valutazione, superando LLaMA-3.3-70B e una baseline GPT-3.5 fine-tuned — pur girando su un server di classe consumer. Tre risultati più ampi contano più del punteggio: la scala del modello **non** era un predittore affidabile della performance downstream sotto adattamento LoRA, **iperparametri LoRA identici producevano comportamenti di adattamento qualitativamente diversi tra architetture**, e un modello aperto di medie dimensioni ben sintonizzato può essere competitivo con i sistemi proprietari ([[aiawe-automated-writing-evaluation]]).

**Quali livelli adattare è una decisione reale.** In un sistema di analisi del discorso per l'insegnamento dell'inglese, il fine-tuning di un BERT troncato aggiornando **solo gli ultimi quattro livelli del Transformer** batteva entrambe le alternative: adattare solo il livello superiore toccava un tetto più basso, e il fine-tuning completo su 12 livelli andava in overfit e oscillava ([[bert-discourse-english-teaching-2026]]).

**L'architettura base può contare più del numero di parametri.** Il fine-tuning di tre modelli testo-immagine aperti su 1.000 immagini di ingegneria nucleare con didascalie ha migliorato sensibilmente Stable Diffusion XL, ha dato guadagni limitati per SD-v3.5-Medium, e non ha prodotto **alcun miglioramento misurabile per il modello flow-matching Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]). Una ricetta di fine-tuning non è portabile tra architetture, che è la stessa lezione che AiAWE riporta dall'altra direzione.

Due tecniche adiacenti completano lo stadio di adattamento. La **distillazione** comprime un sistema grande o black-box in uno piccolo distribuibile. Una pipeline in due stadi ha distillato uno stimatore ML black-box fittato e la sua interpretazione post-hoc in un piccolo LLM a pesi aperti, con un "mentee" da 2B parametri che otteneva un recupero quasi senza perdita della superficie degli effetti dell'oracolo (r > 0,90). Quel risultato è riportato sotto una valutazione faithfulness-first che audita ogni narrazione rispetto all'attribuzione che pretende di descrivere ([[distilling-self-explaining-lm-learning-analytics-2026]]). L'**unlearning** rimuove contenuti mirati dopo l'addestramento: l'unlearning basato su gradiente è stato applicato a tre modelli per eliminare PII e contenuti dannosi, testato in due ordini di rimozione (PII-per-primo e contenuti-dannosi-per-primo) ([[llm-unlearning-math-privacy]]) — lo strumento pertinente quando un modello ha memorizzato qualcosa che non dovrebbe portare.

## Post-addestramento: plasmare il comportamento, non solo il formato

L'adattamento insegna a un modello *cosa produrre*; il post-addestramento gli insegna *come comportarsi*. È qui che i risultati pedagogici sono più sorprendenti, e dove la progettazione del segnale di ricompensa o di preferenza decide tutto.

**Il risultato della pipeline.** Singh et al. (2026) hanno trasformato Qwen3-32B in EduQwen attraverso tre stadi — RL iniziale, SFT sintetico, RL finale — raggiungendo il **96,52%** sul benchmark CDPK e superando il **90,55%** di Gemini-3 Pro. I risultati intermedi sono la parte istruttiva: il primo stadio di RL da solo raggiungeva il 94,13%, l'SFT su 40.000 risposte auto-generate lo portava al 96,20%, e il round finale di RL aggiungeva l'ultima frazione. Il reward model dava priorità alle **risposte che guidano rispetto alle risposte dirette**, il mining di hard-negative escludeva le domande che il modello base già risolveva, e i rollout venivano estesi da 5 a 8 passi per catturare le decisioni pedagogiche multi-passo ([[singh-eduqwen-pedagogical-rl-2026]]). A confronto, il Pedagogy Benchmark — tratto da esami reali di sviluppo professionale degli insegnanti su **97 modelli** — ha trovato accuratezze comprese tra il **28%** e l'**89%**, evidenza che la conoscenza pedagogica non viene acquisita incidentalmente durante il pre-addestramento generale ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

**Addestrare la decisione piuttosto che l'enunciato.** TACT ha post-addestrato un tutor su una tassonomia di 13 strategie più una tassonomia a due assi delle mosse dello studente, guadagnando **20,30 punti** rispetto alla sua spina dorsale Qwen3.5-4B, con un benchmark diagnostico che trattiene le etichette di stato dello studente disponibili durante l'addestramento, così che il modello debba inferire lo stato dal dialogo ([[tact-pedagogically-adaptive-esl-tutoring]]). La stessa logica appare in Special-R1 per l'allineamento nell'[[special-education|educazione speciale]] ([[special-r1-rl-special-education]]) e nei lavori su RL euristico che allineano i modelli come guide socratiche anziché come risponditori ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Il post-addestramento non deve solo plasmare ciò che il modello dice: una piattaforma abbina un chatbot di tutoraggio sorvegliato a un agente di reinforcement learning che sceglie il prossimo problema di pratica, così che la policy addestrata decide cosa fa lo studente dopo ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Modelli di ragionamento distillati.** Una via più economica verso il comportamento pedagogico è insegnare a un modello piccolo a imitarne uno grande: Pedagogy-R1 (1,5B e 7B) è stato instruction-tuned su output pedagogicamente filtrati distillati da un insegnante QwQ-32B, abbinato al prompting Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Post-addestramento condizionato dall'istruzione versus dati autentici.** LearnLM inquadra l'addestramento dei modelli educativi come *instruction following pedagogico*, portando istruzioni a livello di sistema che permettono a sviluppatori e insegnanti di specificare il comportamento del tutor senza impegnarsi su una definizione unica di pedagogia. È mescolato negli stadi di post-addestramento di Gemini tramite co-training, e gli esperti lo hanno preferito a GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) e Gemini 1.5 Pro base (**+13%**). Il risultato chiave è che **l'RL è sostanzialmente più efficace del solo SFT** nel seguire istruzioni pedagogiche sfumate in conversazioni lunghe ([[learnlm-improving-gemini-learning]]). TeachLM fa la scommessa opposta: che il [[prompt-engineering|prompt engineering]] è un ripiego e che l'ingrediente scarso sono i dati *autentici* di interazione studente–tutor. Addestrato su **100.000 ore** di sessioni individuali sotto rigorosa anonimizzazione, raddoppia il tempo di parola degli studenti, migliora lo stile delle domande, e aumenta i turni di dialogo del **50%** ([[teachlm-post-training-llms-education]]). Insieme definiscono lo spazio progettuale: post-addestramento condizionato dall'istruzione quando i vostri dati sono scarsi, fine-tuning su interazioni di tutoraggio reali quando li avete.

**La qualità della supervisione batte la quantità della supervisione.** La progressione di SWIM per un simulatore di scrittura è la dimostrazione più pulita. Il prompting ancorato alla rubrica dava un controllo limitato della competenza (miglior QWK medio per tratto 0,577 per Claude Sonnet, 0,422 per GPT-5.4, quasi zero per un modello aperto da 7B); il supervised fine-tuning portava quel modello da 7B a **0,474 ± 0,023**. Il GRPO contro una ricompensa derivata dalla valutazione automatica dei saggi lo portava oltre, a **0,618 ± 0,005** su ogni tratto e prompt, con la ricompensa progettata come accuratezza normalizzata per tratto e densa perché le ricompense exact-match sono troppo sparse nell'impostazione multi-tratto ([[swim-student-writing-simulation-2026]]). Lo studio sulla modellazione dei misconcepimenti raggiunge una conclusione più affilata su *cosa* deve contenere la supervisione: i modelli instruction-tuned apprendevano i misconcepimenti algebrici solo quando addestrati su **tracce di soluzione a livello di passo**, con l'accuratezza che restava **sotto il 30% a ogni dimensione dei dati** quando addestrati solo sulle risposte finali. Il suo ruolo studente sovrageneralizzava l'errore appreso finché esempi corretti non venivano esplicitamente mescolati in rapporti bassi fino a **uno su quattro**, mentre il ruolo tutor non mostrava tale costo, mantenendo l'accuratezza sui corretti dal **93%** al **98%** su dieci misconcepimenti addestrati congiuntamente ([[misconception-acquisition-dynamics-llms-2026]]).

I dati di addestramento sono essi stessi qualcosa che i modelli possono curare: Edu-QuRating adatta la distillazione delle preferenze alla cura di dati educativi, sostituendo un singolo punteggio "è educativo?" con 20 dimensioni di rubrica che coprono accuratezza fattuale, struttura pedagogica e adeguatezza del livello ([[garrod-edu-qurating-educational-data-curation-2026]]).

**La teoria può essere un'impalcatura per l'addestramento.** Per agenti che automatizzano il [[learning-design|design di sistemi istruttivi]], un ibrido dei framework classici ADDIE e Dick & Carey con ragionamento in stile ReAct superava sia la teoria pura (strutturata ma inflessibile) sia gli agenti solo tecnica (flessibili ma non ancorati), su **25.795** scenari da una matrice di contesto a 51 variabili con un protocollo multi-giudice per ridurre il bias da LLM-as-judge ([[jeon-isd-agent-bench-2026]]). E uno studio sulle *etichette* di supervisione ha trovato che assegnare a ogni esempio di addestramento un unico comportamento obiettivo — competenza disciplinare, ancoraggio al curriculum, ragionamento diagnostico o scaffolding — sollevava ogni scala di modello testata, con i guadagni maggiori nello scaffolding e nell'uso della storia dello studente, mentre la diagnosi dello stato di conoscenza restava la più debole al **54,04%** ([[omniedu-open-educational-foundation-models-2026]]).

## Addestrare il lato dello studente, non solo il tutor

La stessa macchineria è sempre più puntata sulla simulazione degli studenti, il che cambia l'economia della valutazione di un tutor: invece di reclutare studenti, li generate.

L'avvertenza è che gli studenti simulati devono essere validati come qualsiasi altro strumento. La messa a benchmark di modelli fine-tuned e con prompting su **382 dialoghi** tenuti da parte dal più grande corpus pubblico di dialoghi matematici reali studente–tutor — su sette metriche che spaziano dagli aspetti linguistici, comportamentali e cognitivi — ha prodotto il test più diretto del campo sul fatto che gli studenti simulati si comportino come studenti ([[simulated-students-tutoring-dialogues-2026]]). Due ulteriori approcci spingono sulla fedeltà: INSIDE effettua il fine-tuning di LLM per sia *agire* sia *pensare* come studenti, generando dialogo interno ancorato alla tassonomia di Bloom attraverso dimensioni cognitive, affettive e d'azione e addestrandosi su tracce di pensiero e azioni accoppiate ([[inside-llm-student-simulator-reasoning-2026]]), e i profili history-aware condizionano la simulazione alla traiettoria pregressa di uno studente piuttosto che a una persona statica ([[history-aware-student-simulation]]). Per uno sviluppatore, la lezione pratica è che un simulatore è uno strumento di misura ed eredita ogni domanda di validità che ciò implica.

## Cosa va storto

**La siringofania (sycophancy) è un obiettivo di addestramento, non un'impostazione di usabilità.** La tutorizzazione richiede attrito correttivo, e i modelli vi resistono. EduFrameTrap mostra che i modelli che resistono agli attacchi di cambio di contesto capitolano comunque sotto pressione di autorità o socio-affettiva e trattengono il feedback correttivo, ed è per questo che i suoi autori sostengono che il comportamento "gentile-ma-corretto" dovrebbe essere un requisito esplicito di addestramento piuttosto che una preferenza ([[eduframetrap-llm-sycophancy-educational-safety]]). L'addestramento che premia il guidare rispetto al rispondere — come fa il reward model DAPO di EduQwen — è una leva strutturale contro di essa, ma la [[contextual-sycophancy-ai-literacy|sycophancy contestuale]] persiste dopo il prompting e l'allineamento, con gli errori degli studenti che continuano a propagarsi nei consigli dell'IA ([[contextual-sycophancy-ai-literacy]]).

**L'addestramento non rende un modello sicuro nel corso di una conversazione lunga.** SafeTutors mostra che persino i modelli pedagogici specializzati degradano nel dialogo sostenuto e possono commettere danni da sovra-divulgazione della risposta ([[hazra-safetutors-pedagogical-safety-2026]]), quindi la [[pedagogical-safety|sicurezza pedagogica]] deve essere testata sulla lunghezza della conversazione piuttosto che sul singolo turno.

**La validazione può sostituire l'addestramento — o essere richiesta al suo posto.** Un GPT-4 di frontiera non addestrato produceva circa il **35%** di suggerimenti troppo generali, errati o rivelatori della risposta quando redigeva feedback per un sistema di tutoraggio intelligente, e i suoi stessi controlli di qualità automatici erano disallineati dal giudizio umano; gli autori concludono che gli LLM mancano di un modello interno dell'istruzione e che sono necessari una validazione robusta o un addestramento specifico del dominio prima dell'uso senza supervisione rivolto agli studenti ([[reddig-maclellan-personalized-feedback-llm-2026]]). L'implicazione pratica taglia in entrambi i sensi: a volte la risposta giusta è un livello di validazione piuttosto che una sessione di addestramento, e a volte la validazione è ciò che vi dice che una sessione di addestramento è fallita.

**La vostra valutazione potrebbe misurare la cosa sbagliata.** Questa è la trappola più comune nella letteratura sul fine-tuning qui presente. ROUGE-L e QWK misurano similarità e ordinamento, non correttezza derivazionale ([[lora-finetuned-control-systems-course-qa-2026]]); un fine-tune può raggiungere un QWK eccellente mentre il feedback dello stesso sistema è non parsificabile ([[wraft-automated-writing-evaluation-argumentative-2026]]); e un modello può ordinare correttamente gli studenti essendo al tempo stesso in errore su quanto ciascuno di essi abbia probabilmente bisogno di aiuto. Quando l'obiettivo è un costrutto, il fine-tuning dovrebbe essere abbinato a uno strumento che misura il costrutto — il risultato sull'instradamento per confidenza è un buon modello, poiché converte un numero di accuratezza in una politica operativa con un umano nel ciclo ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## Una sequenza pratica per gli sviluppatori educativi

Distillata dalle evidenze sopra, nell'ordine che evita di sprecare calcolo:

1. **Stabilite una baseline che potete battere, inclusa una banale.** Il modello senza recupero dello studio sull'assistente di corso segnava sotto TF-IDF. Registrate la vostra accuratezza solo-prompt prima di considerare l'addestramento.
2. **Aggiungete il recupero prima dei parametri.** Ancorare il modello ai vostri materiali è il guadagno grande più economico riportato qui (52,3% → 66,6%), ed è reversibile.
3. **Ingegnerizzate il prompt, e ri-ingegnerizzatelo in modo iterativo.** Il raffinamento guidato dalla rubrica ha spostato l'accordo dal 54,75% all'81,25% senza alcun addestramento, e la generazione di item è migliorata solo dopo che il raffinamento del prompt era arrivato a plateau — quel plateau è il vostro segnale che l'addestramento potrebbe aggiungere qualcosa.
4. **Effettuate il fine-tuning quando l'obiettivo è un formato stabile, una proprietà controllata, o un dominio che il modello base non possiede.** LoRA su poche migliaia di esempi può portare piccoli modelli aperti alla parità con il valutatore umano, e un dataset di istruzioni può portare un modello da 7B da quasi zero a entro 0,15 da un riferimento molto più grande sulle dimensioni specifiche del dominio.
5. **Scegliete rank e livelli deliberatamente, e aspettatevi comportamento specifico per architettura.** Il guadagno per parametro dell'adattatore scendeva al crescere del rank, l'adattamento a quattro livelli batteva sia il fine-tuning più superficiale sia quello a profondità piena, e una famiglia di modelli è migliorata sostanzialmente mentre un'altra non si è mossa affatto.
6. **Usate il post-addestramento quando dovete cambiare *come* il modello insegna.** Premiate il guidare rispetto al rispondere, e aspettatevi che la ricompensa venga aggirata — scrivetela contro un benchmark, non contro un'intuizione.
7. **Supervisionate a livello di passo.** L'addestramento solo sulle risposte finali produceva accuratezza sui misconcepimenti sotto il 30% a ogni dimensione dei dati.
8. **Mantenete un umano nel ciclo dove la confidenza è bassa.** L'instradamento del quinto meno fiducioso delle risposte rimuoveva circa l'80% del lavoro manuale migliorando l'accordo.
9. **Testate la sicurezza su conversazioni intere.** I dialoghi lunghi sono dove i modelli specializzati degradano.
10. **Calibrate le aspettative.** La scelta del modello e del prompt spiega solo circa il 15% del disallineamento con i guadagni di apprendimento; parte di ciò che volete dall'addestramento non è ottenibile dall'addestramento.

## Domande aperte

1. Il post-addestramento pedagogico si generalizza tra le discipline, o è sempre necessaria una sintonizzazione specifica per materia?
2. La pipeline RL–SFT–RL può essere combinata con memoria longitudinale per la personalizzazione tra semestri?
3. Qual è il più piccolo insieme di supervisione che insegna ancora il ragionamento pedagogico a livello di passo, e può essere condiviso tra istituzioni senza condividere i dati degli studenti?
4. Come dovrebbe essere standardizzata la valutazione dei modelli educativi fine-tuned, dato che le metriche di similarità possono essere eccellenti mentre il modello è inutilizzabile?

## Connessioni con i concetti correlati

Questa pagina è la compagna *come un modello viene fatto* di [[llm]], che copre cosa sono i grandi modelli linguistici e come si comportano. Si colloca sotto [[ai-technologies]] come nodo dell'addestramento e dell'adattamento, accanto a [[rag]] (l'alternativa di recupero che di solito viene prima), [[prompt-engineering]] (la leva più economica), e [[reinforcement-learning]] (la metà RL del post-addestramento). I suoi output alimentano [[intelligent-tutoring]] e [[adaptive-learning]]; le sue applicazioni educative più comuni sono [[automated-assessment]], [[automated-essay-scoring]] e [[ai-feedback-quality]]; e i suoi parenti concettuali più stretti sono [[educational-nlp]], [[simulating-students]], [[open-source]] e [[student-modeling]]. I rischi che crea sono detenuti da [[pedagogical-safety]], [[ai-sycophancy]], [[hallucination-risk]] e [[privacy]].

## Concetti collegati

- [[llm]] — cosa sono questi modelli; questa pagina spiega come sono fatti
- [[ai-technologies]] — ombrello: tecnologie e tecniche di IA
- [[rag]] — il recupero, il passo prima dell'addestramento
- [[prompt-engineering]] — la leva più economica, e la baseline da battere
- [[reinforcement-learning]] — lo stadio RL del post-addestramento
- [[intelligent-tutoring]] — il principale dominio applicativo
- [[adaptive-learning]] — adattarsi a chi apprende, cosa distinta dall'adattare i modelli
- [[automated-assessment]] — dove atterrano i modelli di valutazione fine-tuned
- [[automated-essay-scoring]] — il compito da cui proviene la maggior parte delle evidenze sulla valutazione
- [[ai-feedback-quality]] — ciò che il fine-tuning risolve e non risolve
- [[educational-nlp]] — la famiglia di metodi adiacente
- [[simulating-students]] — l'applicazione lato studente della stessa macchinaria
- [[student-modeling]] — lo strato di modellazione sotto la simulazione
- [[open-source]] — i pesi aperti sono ciò che rende possibile il fine-tuning locale
- [[benchmark]] — come questi sistemi vengono valutati, e i limiti di ciò
- [[assessment-validity]] — perché una buona metrica può comunque significare uno strumento cattivo
- [[pedagogical-safety]] — ciò che l'addestramento non garantisce
- [[ai-sycophancy]] — un comportamento che il post-addestramento può bersagliare
- [[hallucination-risk]] — la modalità di fallimento che il fine-tuning non può curare
- [[privacy]] — il vincolo sui dati di addestramento e sull'unlearning
- [[human-in-the-loop-ai]] — il ripiego che rende conveniente l'automazione
- [[metacognition]] — un obiettivo pedagogico per il post-addestramento
- [[scaffolding]] — il comportamento che le funzioni di ricompensa cercano di codificare
- [[ai-education]] — il campo che questo lavoro serve

## Articoli collegati

- [[singh-eduqwen-pedagogical-rl-2026]] — RL–SFT–RL pipeline: 96.52% on CDPK, surpassing Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — pedagogical instruction following inside Gemini's post-training
- [[teachlm-post-training-llms-education]] — post-training on 100,000 hours of authentic tutoring data
- [[tact-pedagogically-adaptive-esl-tutoring]] — taxonomy-aligned post-training targeting the pedagogical decision
- [[swim-student-writing-simulation-2026]] — SFT and GRPO against rubric prompting, with reward design detail
- [[misconception-acquisition-dynamics-llms-2026]] — step-level traces as the binding requirement for misconception training
- [[jeon-isd-agent-bench-2026]] — theory-grounded instructional design agents across 25,795 scenarios
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — heuristic RL to align models as Socratic guides
- [[special-r1-rl-special-education]] — reinforcement learning for special education alignment
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — LLM-guided reinforcement learning for personalization
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — a pedagogical large reasoning model
- [[omniedu-open-educational-foundation-models-2026]] — one target behavior per example, across model scales
- [[garrod-edu-qurating-educational-data-curation-2026]] — curating educational data for training
- [[lora-finetuned-control-systems-course-qa-2026]] — LoRA rank effects and gain per adapter parameter
- [[aiawe-automated-writing-evaluation]] — LoRA-adapted AWE where scale did not predict success
- [[llm-graders-computer-science-exams-2026]] — one adapter on ~3,900 examples reaching human-grader parity
- [[iks-instruct-dataset-indian-knowledge]] — a 24,795-example instruction dataset and the near-zero base baseline
- [[llm-children-reading-story-generation]] — controllability over scale for reading-level control
- [[bert-discourse-english-teaching-2026]] — which layers to fine-tune, and why four beat twelve
- [[nuclear-diffusion-text-to-image-learning-2026]] — architecture, not parameter count, decides whether fine-tuning works
- [[distilling-self-explaining-lm-learning-analytics-2026]] — distillation into a 2B model with a faithfulness audit
- [[llm-unlearning-math-privacy]] — gradient-based unlearning of PII and harmful content
- [[reflection-level-classification-hungarian-essays-2026]] — fine-tuned transformers versus classical and embedding baselines
- [[multimodal-item-parameter-estimation-2026]] — learning IRT curves from multimodal items
- [[know-when-to-trust-ai-scoring-reliability-2026]] — confidence routing as the human-in-the-loop policy
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — retrieval as the first-order decision, with energy and VRAM reported
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 studies: prompting 13, fine-tuning 7, hybrid 3
- [[gpt-item-generation-l2-listening-2026]] — prompting plateaus, then fine-tuning adds the rest
- [[wraft-automated-writing-evaluation-argumentative-2026]] — fine-tuning won at scoring and failed at feedback
- [[educational-llm-alignment]] — the ~15% ceiling on model and prompt choice
- [[yasar-llms-iterative-pedagogical-design-2026]] — rubric-guided prompting as the no-training alternative
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — prompt-level persona control for misconception simulation
- [[eduframetrap-llm-sycophancy-educational-safety]] — sycophancy as an explicit training requirement
- [[contextual-sycophancy-ai-literacy]] — sycophancy surviving prompting and alignment
- [[hazra-safetutors-pedagogical-safety-2026]] — safety degrading over sustained dialogue
- [[reddig-maclellan-personalized-feedback-llm-2026]] — ~35% unusable hints from an untrained frontier model
- [[simulated-students-tutoring-dialogues-2026]] — whether simulated students behave like students
- [[inside-llm-student-simulator-reasoning-2026]] — fine-tuning a model to act and think like a student
- [[history-aware-student-simulation]] — simulation conditioned on a learner's trajectory
