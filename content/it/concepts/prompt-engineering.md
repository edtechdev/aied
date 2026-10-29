---
title: Prompt engineering
created: "2026-10-14T22:50:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer]
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
translation_of: concepts/prompt-engineering
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Il prompt engineering** — la pratica di progettare e perfezionare gli input rivolti a grandi modelli linguistici per ottenere gli output desiderati. Nell'istruzione, il prompt engineering svolge un duplice ruolo: come competenza dello studente (gli studenti devono imparare a formulare prompt efficaci) e come leva di progettazione del sistema (gli sviluppatori costruiscono prompt che modellano il comportamento del [[intelligent-tutoring|tutoraggio basato sull'IA]]).

## Domande da considerare

- Ha probabilemente digitato un prompt in uno strumento di IA di recente. Consideri allora questo: il modo in cui l'ha formulato non è neutrale — può rivelare come ha pianificato, pensato e distribuito il suo sforzo. Che cosa potrebbero dire le sue abitudini nel formulare prompt sul modo in cui affronta i problemi?
- Uno studio ha rilevato che gli utenti che formulano le richieste con abilità ottengono sistematicamente output migliori di quelli che esprimono la stessa intenzione in modo meno abile. Se accetta che il "privilegio del prompt" sia reale, l'accesso equo all'IA si corregge meglio [[teacher-role|insegnando]] a tutti a formulare prompt migliori, o ridisegnando il sistema perché non pretenda quella competenza — e quali sono i compromessi di ciascuna scelta?
- Formulare prompt è un "trucco" da memorizzare, o una competenza intellettuale autentica? Una linea di [[research-methods-aied|ricerca]] lo tratta come giudizio professionale all'interno di una disciplina (giornalismo, diritto, [[medical-education|medicina]]); un'altra lo tratta come nucleo dell'alfabetizzazione sull'IA. Quale prospettiva si allinea con la sua esperienza di ciò che distingue davvero i prompt buoni da quelli cattivi?
- I prompt ben progettati possono sostenere il pensiero degli studenti, mentre quelli usati male possono incoraggiare il delegamento cognitivo. Ricorda un momento in cui una risposta dell'IA ha pensato al posto suo? Che cosa, nel prompt — o nella sua intenzione — l'ha determinato, e si sarebbe potuto progettare il contrario?
- Formulare prompt è al tempo stesso una competenza dello studente e una leva di progettazione del sistema: alcuni tutor ora instradano e selezionano automaticamente i prompt al posto dell'utente. Mentre il prompting si sposta dall'utente al sistema, che cosa perdono gli studenti — e che cosa guadagnano?
- Si fissi un piccolo obiettivo prima di proseguire: dopo aver appreso il prompt engineering, decida un modo concreto in cui cambierà il modo di scrivere i prompt nel suo lavoro, e quale risultato verificherà per sapere che ha funzionato.

## Introduzione

Il prompt engineering è centrale per un uso efficace dell'[[generative-ai|IA generativa]] nell'istruzione. A differenza delle interfacce di programmazione tradizionali, gli LLM rispondono al linguaggio naturale — ma la qualità, l'accuratezza e il valore [[pedagogy|pedagogico]] di quelle risposte dipendono fortemente dalla progettazione del prompt. La ricerca in questa knowledge base rivela che il prompting non è un atto neutro: riflette come gli studenti pensano, pianificano e distribuiscono lo sforzo cognitivo. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran e Arar (2026)]] precisano ciò che il termine copre distinguendo il prompt engineering, l'ottimizzazione tecnica degli input per la performance, dall'alfabetizzazione nel prompting (prompt literacy), il lavoro retorico, etico e riflessivo di chiarire lo scopo, leggere criticamente l'output e rivedere con ragioni dichiarate. Il loro Prompt Literacy Cycle (chiarire lo scopo, costruire il prompt, confrontarsi con l'output, perfezionare il prompt, riflettere) e una rubrica esemplare di processo rendono insegnabile la distinzione, e sostengono che un'istruzione che ottimizza solo gli output lascia intatte le dimensioni etiche ed epistemiche dell'uso degli LLM.

### Come appare il prompt engineering nella ricerca

- **Il prompting come traccia cognitiva:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] mostrano che gli schemi di prompt rivelano il [[cognitive-offloading|delegamento cognitivo]] — i lavori di alta qualità usano prompt ricchi di contesto, cortesi e istruzionali; i lavori di bassa qualità mostrano un disaccordo reattivo privo di ancoraggio al dominio

- **La profondità migliora il prodotto, non la ritenzione.** In 22 studenti postgraduate, la quota di prompt orientati alla spiegazione ("perché/come/spiega") prediceva in modo indipendente la qualità del compito assegnata dai valutatori (β = 6,27) al di là della conoscenza di base e del volume di prompt, pur mostrando un'associazione nulla con il richiamo immediato ([[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]).

- **La cognizione nel prompting segue la disciplina, non lo studente.** [[student-ai-conversations-cognitive-engagement-2026|Chang e Li (2026)]] hanno classificato 60.087 prompt provenienti da 116 corsi e hanno rilevato che i profili di livello di Bloom differivano per disciplina — STEM a prevalenza Apply (20,8%), scienze sociali a prevalenza Create (33,8%) — con una varianza a livello di corso superiore alla varianza a livello di studente.
- **Il prompting come alfabetizzazione:** la ricerca [[tracing-genai-literacy-interaction-patterns|Tracing GenAI literacy]] e quella [[aaai2026-prompting-literacy-k12|sull'alfabetizzazione nel prompting nel K-12]] inquadrano il prompting come componente centrale dell'[[ai-literacy|alfabetizzazione sull'IA]]
- **I principianti ricorrono per default a tentativi ed errori, e danno la colpa al modello.** In un seminario di linguistica testuale, dieci principianti con l'IA generativa perfezionavano i prompt per tentativi ed errori, ricorrevano raramente a esempi in contesto, e attribuivano in modo schiacciante gli scarsi output all'LLM piuttosto che alla propria formulazione del prompt ([[llms-text-linguistics-teaching-2026|Brocca e Garassino (2026)]]).


- **Quando il docente modella il prompt, gli studenti lo riusano verbatim.** Tra 310 prompt registrati di dodici gruppi STEAM di scuola media, la copia esatta dell'istruzione del docente era il punto di vista più frequente tra gli studenti, al 47,1%, prima dell'indagine spontanea al 28,7% ([[middle-school-genai-steam-interactions-2026|Zhao e Li (2026)]]).

- **Un ciclo regolativo batte una formula di prompting.** In un pilota quasi-sperimentale con 42 studenti universitari, quelli istruiti sul ciclo IDEA (Intent, Deconstruction, Expression, Adaptation) producevano prompt e output di qualità superiore rispetto ai coetanei istruiti sul prompting Ruolo–Compito–Contesto–Formato in tutte e cinque le categorie di compito (guadagni nei prompt corretti da +11,77 a +29,19 punti) ([[idea-framework-metacognitive-genai-2026|Wang et al., 2026]]).
- **Il prompting come progettazione di sistema:** [[cotal-formative-assessment-scoring-2026|CoTAL]] usa il prompt engineering [[human-in-the-loop-ai|human-in-the-loop]] per la valutazione della [[formative-assessment|valutazione formativa]]; il [[choi-anchor-aes-prompting-2025|prompting basato su ancore]] migliora la [[automated-essay-scoring|valutazione automatica dei temi]]

- **Il prompting è la competenza d'ingresso, non la disciplina.** Gorsky (2026) inquadra l'[[ai-literacy|alfabetizzazione sull'IA]] per i professionisti del software come la capacità di gestire gli [[agentic-ai|agenti]] piuttosto che di formulare prompt per loro, indicando l'inquadramento, la specificazione, l'ingegneria del contesto, la verifica, l'orchestrazione multi-agente e l'auditabilità come le competenze che un curricolo deve valutare ([[ase-26-agentic-software-engineering-curriculum|Gorsky (2026)]]).
- **Instradamento adattivo dei prompt:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] tratta la selezione del prompt come parte del sistema di tutoraggio stesso — un instradamento di prompt consapevole del dominio su 14 caratteristiche pedagogiche, in cui un router stocastico seleziona il miglior prompt per ciascuna conversazione. Questo sposta il prompting da competenza dello studente a leva adattiva di progettazione del sistema, migliorando il [[student-engagement|coinvolgimento]] e l'efficienza (28,1% contro 19,6% di conversione negli esercizi in un test A/B reale).
- **Modalità del prompt:** la [[voice-text-prompt-problems-computing-education|ricerca su input vocale e testuale]] esamina se la modalità del prompting influenzi gli [[learning-gains|esiti di apprendimento]]

- **Il prompting oltre il testo — l'illustrazione scientifica.** Il prompting può generare rapidamente figure di chimica molecolare e fisica, ma una resa localmente persuasiva può comunque essere errata o portare un pregiudizio rappresentazionale, per cui gli studenti devono interrogare le visualizzazioni generate dall'IA alla luce dei principi chimici anziché fidarsi di esse ([[unesco-ai-guidelines-chemical-education-2026|Li et al. (2026)]]).
- **Prompting sostenuto da scaffolding:** [[guided-llm-scaffolding-independent-learning|Guided LLM scaffolding]] e [[scaffolding-critical-engagement-genai-minority-students|scaffolding per il coinvolgimento critico]] insegnano il prompting strutturato come intervento di apprendimento

- **Prompt di coaching con supporto che svanisce:** in ARPG+, un coach in tempo reale diagnosticava la qualità del prompt su sei dimensioni e riduceva il supporto man mano che cresceva la competenza, portando la qualità finale del prompt a 7,82 contro 5,95 per i template statici e 4,52 senza alcun ausilio ([[ye-arpg-real-time-coaching-llm-prompting-2026|Ye et al. (2026)]]).
- **La decomposizione dei compiti ha un ottimo:** generare lezioni di formazione per tutor in tre segmenti produceva le lezioni meglio valutate (media 14,67), mentre un passaggio unico otteneva il punteggio più basso (10,67) e cinque segmenti ricadevano al di sotto di tre — una decomposizione moderata batte entrambi gli estremi ([[lin-llm-interactive-lesson-generation|Lin et al. (2025)]]).
- **Il privilegio del prompt e l'equità:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] mostrano che la competenza nel prompting è distribuita in modo diseguale — gli utenti che formulano le richieste con abilità ottengono sistematicamente output migliori di quelli che esprimono la stessa intenzione in modo meno abile. Il loro Prompt Equity Transformer sposta l'ottimizzazione del prompt dall'utente al sistema di IA, sostenendo che l'output [[equity-in-ai-education|equo]] dovrebbe essere ingegnerizzato nel modello anziché preteso dai principianti.
- **Il perfezionamento dei prompt si stabilizza; da lì subentra il fine-tuning.** La progettazione iterativa dei prompt produceva guadagni decrescenti nella qualità degli item nell'[[assessment|ascolto]] in L2, ma il fine-tuning di GPT-4.1 sul prompt ottimizzato — con il prompt mantenuto costante — produceva item più ancorati al contesto e più equilibrati, isolando l'adattamento del modello anziché l'artigianato del prompt come leva successiva ([[gpt-item-generation-l2-listening-2026|Aryadoust e Wong, 2026)]]).

- **Il prompting come giudizio professionale [[situated-learning|situato]].** Oltre all'alfabetizzazione e alla progettazione di sistema, il prompting può essere inquadrato come una *pratica disciplinare*. La [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|tassonomia di Dierickx et al.]] per il giornalismo tratta la definizione del compito e il prompting come una forma di giudizio professionale esercitata all'interno delle norme epistemiche ed etiche di un dominio — tradurre il lavoro giornalistico in compiti espliciti (raccolta delle notizie → costruzione di senso → editing → pubblicazione/distribuzione) rende visibili assunti, priorità e [[ethics|considerazioni etiche]], e trasforma il prompting in uno strumento pedagogico per l'alfabetizzazione critica sull'IA. La sua logica si trasferisce ad altre professioni ad alta intensità di conoscenza (diritto, medicina, politiche pubbliche).
- **La progettazione del prompt come specifica didattica.** Neto e colleghi (2026) rilevano nella loro [[meta-analysis-systematic-review|revisione sistematica]] sull'IA generativa nell'educazione sanitaria che la progettazione del prompt funziona come una forma di specifica didattica, codificando gli obiettivi cognitivi e i criteri di qualità impliciti nella stesura esperta — eppure solo il 34,8% degli studi allineava i contenuti generati ai framework didattici e solo il 34,8% riportava il prompting con sufficiente dettaglio per essere riprodotto. Looi, Liu e Sun (2026) mostrano inoltre come l'architettura del prompt possa incorporare regole pedagogiche (cancelli di correttezza, confini anti-spoiler, cancelli di commiato) per vincolare il comportamento di tutoraggio degli [[llm|LLM]] nei domini procedurali.
- **Prompting guidato dalla rubrica e consapevole del ruolo.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] hanno mostrato che il prompting guidato dalla rubrica — trattando la rubrica come interfaccia semantica tra l'intento pedagogico umano e l'inferenza della macchina — portava l'accordo LLM–umano sui lavori di design degli studenti dal 54,75% all'81,25% (Alfa di Cronbach da 0,393 a 0,798). Le rubriche ingegnerizzate per gli LLM devono bilanciare precisione e flessibilità: troppo vaghe invitano a interpretazioni libere, troppo rigide riducono il modello a un semplice pattern-matching. Il prompting consapevole del ruolo — valutare lo stesso manufatto sotto prompt da docente, da revisore tra pari e da revisore di progetti — produceva un feedback qualitativamente distinto ed epistemicamente differente, mostrando che la progettazione del prompt modella non solo l'accuratezza ma la posizione valutativa dell'output.
- **Lo scaffolding del prompt può allontanare un modello dall'insegnante.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]] hanno fatto produrre a sette modelli feedback sulla scrittura a livello di paragrafo sotto tre strategie di prompting e hanno rilevato che aggiungere nomi di categorie o esempi svolti aumentava la divergenza dalla distribuzione dell'insegnante per la maggior parte di essi, migliorando solo Mistral-7B (da 0,2695 a 0,2398). La baseline zero-shot restava la più vicina, per cui le istruzioni sul tipo di focalizzazione sono qualcosa da testare piuttosto che da presumere.
- **Prompting consapevole del contesto per la valutazione.** Il prompting consapevole del contesto di modelli linguistici pre-addestrati automatizza la codifica delle competenze di [[collaborative-learning|risoluzione collaborativa di problemi]] a partire dai dati di processo, modellando le dipendenze tra i codici comportamentali e fondendo abilità cognitive e sociali. Questo consente un'analisi strutturata della risoluzione collaborativa di problemi su larga scala e in tempo reale, superando l'intensità di lavoro degli schemi di codifica manuale.
- **Template basati sui ruoli e rubriche di qualità per la pianificazione del docente.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo e Tahir (2025)]] sviluppano empiricamente un framework di prompt per la pianificazione di [[curriculum-design|lezioni]] di arte STEAM per bambini che abbina un template Ruolo (R) – Istruzioni (I) – Obiettivo finale (E) (adattato da RISEN) a una rubrica di ottimizzazione "quattro punti e una linea" — standardizzata, pratica, coinvolgente e completa, più una dimensione di estensione. Applicare la rubrica per criticare e perfezionare i prompt manteneva i piani generati accettabili per gli insegnanti di arte in servizio (valutazioni medie superiori a 4/5), esponendo al contempo lacune ricorrenti (la [[personalized-learning|personalizzazione]], i vincoli di [[pedagogical-safety|sicurezza dei bambini]], il pregiudizio culturale) che il prompting one-shot semplice lasciava inespresse — mostrando che i template di prompt più criteri di valutazione espliciti funzionano come scaffolding di controllo qualità per la generazione in classe.

- **La progettazione di ruolo e di vincoli come variabile indipendente.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] confrontano due agenti costruiti sullo stesso modello e sulla stessa piattaforma a temperatura 0,3, la cui unica differenza è come il prompt specifica ruolo, competenze e vincoli: un agente insegnante esperto che risponde a partire da una fonte di conoscenza manualistica delimitata, contro un agente empatico centrato sullo studente, programmato per diagnosticare i [[misconceptions|concetti erronei]] e verificare la comprensione. La sola differenza di ruolo spostava la performance di apprendimento, il carico cognitivo, l'esperienza di flow e l'empatia percepita, mostrando che la specifica del ruolo è una decisione di progettazione didattica con effetti misurabili, anziché un vezzo stilistico ([[pedagogical-agent|agente pedagogico]]).
- **Il prompting come progettazione della valutazione.** [[ecd-prompts-automated-essay-scoring-2026|Xiong et al. (2026)]] mappano i modelli di studente, evidenza e compito dell'Evidence-Centered Design sulle parti di un prompt di valutazione, derivando cinque principi — intenzionalità, tracciabilità, responsabilità, iterazione ed equità; i loro prompt costruiti con l'ECD valutavano i temi narrativi in modo più accurato delle baseline zero-shot, few-shot e chain-of-thought.
### Connessioni con concetti più ampi

Il prompt engineering si collega allo [[scaffolding|scaffolding]] — i prompt ben progettati possono sostenere il pensiero degli studenti anziché bypassarlo. Si interseca con la [[metacognition|metacognizione]] e l'[[ai-literacy|alfabetizzazione sull'IA]], poiché un prompting efficace richiede di comprendere sia le capacità dell'IA sia i propri obiettivi di apprendimento. La ricerca sul [[cognitive-offloading|delegamento cognitivo]] collega direttamente la qualità del prompt al fatto che l'uso dell'IA sostenga o mini l'apprendimento.

- **La competenza nella scrittura guida il prompting, ed entrambe predicono il successo nel [[vibe-coding|vibe-coding]].** In uno studio preregistrato al CHI 2026 (N=100), [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann e Su]] hanno rilevato che la competenza nella comunicazione scritta prediceva la performance nel vibe-coding orientato alla GUI (r = 0,29), con la qualità del prompt valutata da umani che *mediava* il legame — evidenza basata sul processo di risposta che una prosa chiara e strutturata si traduce in prompt migliori per la programmazione in linguaggio naturale. Sia la competenza nella scrittura sia il [[cs-education|rendimento in informatica]] erano predittori indipendenti, e il rendimento in informatica (r = 0,39) portava circa il doppio della varianza unica, per cui migliorare il solo prompting difficilmente sostituirà appieno i fondamenti della programmazione nello sviluppo nativo per LLM.
- **La strategia di prompting predice la performance.** Uno [[isaza-chatgpt-engineering-prompting-2026|studio empirico su 128 studenti di ingegneria]] ha rilevato che l'efficienza della query verso l'IA (prompt chiari e ben strutturati) e la [[problem-solving|risoluzione di problemi]] guidata dall'IA (integrazione strategica dell'output dell'IA nel ragionamento) erano i predittori più forti del successo accademico — anche controllando la media dei voti (GPA) — a indicare che il prompting è una competenza insegnabile che modella quanto efficacemente gli studenti imparano con l'IA.
- **Lo stile del prompting, non solo la qualità del prompt, traccia gli esiti.** I tratti derivati da 1.540 sessioni di tutoraggio collegavano l'interrogazione concettuale alla performance d'esame, mentre i comportamenti di delega del compito correlavano negativamente — ma gli stessi tratti non si replicavano nel semestre successivo, per cui si tratta di pattern comportamentali piuttosto che di competenze stabili ([[principal-trait-analysis-human-ai-skills-2026|McNichols, Du e Lan (2026)]]).
- **Una tassonomia utilizzabile, e quali categorie di prompt rendono davvero.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] traducono le strategie tecniche nel modello 3K (*Kontext, Kernauftrag, Klarheit* — contesto, compito centrale, chiarezza): undici categorie orientate alla pratica, ciascuna con una rubrica buono/medio/subottimale, e ciascuna testata come variazione sperimentale sul feedback generato per gli obiettivi di apprendimento di insegnanti in formazione. Il linguaggio tecnico specifico del dominio era la categoria decisiva — sostituire la terminologia disciplinare con parafrasi quotidiane riduceva significativamente la qualità del feedback su tre modelli (β = −0,412) — mentre aggiungere esempi concreti e rimuovere l'istruzione chain-of-thought non produceva alcuna differenza significativa rispetto alla baseline nel primo studio; gli esempi aiutavano una volta che l'analisi era rieseguita con le combinazioni modello-prompt migliori (β = 0,52). La qualità del prompt e la scelta del modello spiegavano insieme il 42,8% della varianza nella qualità del feedback valutato, ed è questo l'argomento dell'articolo per cui il prompt engineering è una competenza misurabile e insegnabile piuttosto che una preferenza stilistica — e per cui le sue categorie non sono intercambiabili in termini di dimensione dell'effetto.

## Concetti collegati
- [[pedagogical-patterns]] — Lo strato di scaffolding all'interno delle sequenze di uso strutturato
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — Ombrello: tecnologie e tecniche di IA (modelli, addestramento di LLM, robotica, RAG, agenti)

## Articoli collegati
- [[wang-teacher-student-centered-agents-physics-2026]] — Agent role and constraint prompts as the design variable in physics learning (Wang et al. 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning for GPT-based L2 listening item generation (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: real-time coaching for educational LLM prompting
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Task-based taxonomy of LLM tasks for critical AI literacy in journalism
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[llms-text-linguistics-teaching-2026]] — LLMs in text linguistics teaching
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[lin-llm-interactive-lesson-generation]] — LLM generation of interactive tutor-training lessons (Lin et al. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI guidelines translated to chemical education; epistemic drift
- [[isaza-chatgpt-engineering-prompting-2026]] — Prompting behaviors predict engineering student performance
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Prompt engineering vs prompt literacy: a five-phase human-centered GenAI engagement framework with a five-step Prompt Literacy Cycle (Miles, Haber-Curran & Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Prompt engineering and model selection as predictors of AI-feedback quality (Jacobsen et al. 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing

- [[middle-school-genai-steam-interactions-2026]] — Middle-school STEAM groups copied the instructor's instruction verbatim in 47.1% of prompts
- [[ecd-prompts-automated-essay-scoring-2026]] — Using Evidence-Centered Design to Guide Prompt Engineering in Measurement: An Illustration with Automated Essay Scoring
