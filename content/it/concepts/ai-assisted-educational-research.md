---
title: Ricerca educativa assistita dall'IA
created: "2026-10-14T23:30:00-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: "concepts/ai-assisted-educational-research"
source_updated: "2026-10-05T14:14:11-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Sintesi:** la ricerca educativa assistita dall'IA è l'uso dell'IA come strumento del lavoro scientifico proprio del campo — cercare e recuperare letteratura, selezionare record per le revisioni, codificare dati qualitativi, analizzare dati, redigere e revisionare manoscritti, e la riflessione che si chiede cosa quegli strumenti facciano alla conoscenza prodotta. Essa si distingue dalla ricerca *sull'*IA in educazione: i disegni usati per studiare se l'IA aiuti chi apprende appartengono a [[research-methods-aied]], la valutazione dei sistemi di IA appartiene a [[ai-ed-evaluation]], e la lettura di un singolo studio AIED appartiene a [[interpreting-and-applying-aied-research]]. Questa pagina copre il flusso di lavoro proprio del ricercatore e l'indagine del ricercatore-praticante — lo scholarship of teaching and learning e la ricerca in classe — e le poste in gioco epistemiche quando l'automazione entra nell'uno o nell'altra. La sua evidenza è esile e recente: una proposta di quadro, il resoconto riflessivo di una squadra di revisione, un piccolo studio con focus group, due studi bibliometrici, un rapporto di workshop e studi di caso a singolo investigatore. Essa descrive una direzione di marcia anziché una pratica consolidata, e il filone della ricerca del praticante è il più esile di tutti.

## Domande da considerare

- Chi conta come ricercatore qui: l'accademico finanziato, lo studente di dottorato, il docente che studia la propria classe? Quale di questi l'evidenza descrive effettivamente?
- Uno screening con IA ha escluso uno studio dalla tua revisione. Chi è responsabile di quella decisione — il fornitore, lo strumento, il protocollo o tu?
- Quando un modello sintetizza fonti che non hai letto, quale parte del lavoro scientifico hai smesso di fare?
- Una persona che apprende simulata può testare un tutor su molti profili. Cosa verificheresti prima di credere al suo verdetto su studenti reali?
- L'indagine del praticante è di solito locale e piccola. La sua evidenza dovrebbe soddisfare il criterio di una prova finanziata, o essere pesata diversamente perché il contesto è il punto?
- Se l'IA ha aiutato a redigere un articolo, cosa dovrebbe essere detto ai lettori, e dove dovrebbe abitare quella divulgazione?

## Introduzione

La ricerca educativa assistita dall'IA è il campo che rivolge gli strumenti di IA contro il proprio lavoro. L'oggetto di studio non è una persona che apprende che usa un tutor di IA ma un ricercatore che usa un modello per cercare, selezionare, estrarre, codificare, analizzare o scrivere. Ciò che cambia è il flusso di lavoro del ricercatore e, più silenziosamente, i criteri in base ai quali il suo output conta come evidenza.

Questa pagina non riguarda deliberatamente la ricerca *sull'*IA in educazione. Le domande sul fatto che un tutor di IA migliori l'apprendimento sono affrontate da [[research-methods-aied]], la valutazione dei sistemi di IA da [[ai-ed-evaluation]], e la lettura cauta di un singolo studio da [[interpreting-and-applying-aied-research]] e [[limitations-in-aied-research]]. Le due letterature sono spesso confuse, e le asserzioni sugli strumenti della seconda sono frequentemente prese a prestito per sostenere la prima.

L'ambito va dalla ricerca in letteratura alla selezione, codifica, analisi e scrittura, e include la riflessione epistemologica che si chiede cosa l'automazione faccia alla conoscenza che un campo produce. Include anche la ricerca del praticante: lo scholarship of teaching and learning e l'indagine in classe, dove un docente studia la propria pratica. Quel filone è la parte più debole di questa pagina, e le sezioni seguenti lo dicono anziché appianarlo.

## Come l'IA entra nel flusso di lavoro della ricerca

I resoconti sull'uso sono più coerenti dell'evidenza per l'effetto. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] hanno intervistato 28 studenti di dottorato in sette focus group in un'istituzione e hanno trovato che 27 dei 28 usavano IA generativa in qualche punto della propria ricerca: ideazione, revisione della letteratura, spiegazione, elaborazione dei dati, programmazione, scrittura accademica, revisione e traduzione.

I loro partecipanti erano calibrati anziché creduloni. Abbinavano gli strumenti ai compiti in base alle poste in gioco e alle richieste intellettuali percepite, usavano l'IA più pesantemente nel lavoro procedurale a basso rischio, e restavano cauti dove il contributo scientifico era centrale. Conservavano inoltre supervisione umana in ogni momento, trattando il modello come assistente che poteva essere "fuorviante" o "completamente sbagliato".

Il risultato sulla politica è quello pratico. Le linee guida istituzionali esistenti riguardavano insegnamento, apprendimento e valutazione, e i partecipanti le vivevano come astratte e disallineate con la pratica della ricerca. Gli autori propongono linee guida orientate al ricercatore, costruite su un quadro di alfabetizzazione sull'IA a quattro dimensioni, come impalcatura di sviluppo anziché come manuale di regole.

Lo studio copre un'unica istituzione, un gruppo auto-selezionato di 28 persone e resoconti auto-riferiti; gli studenti possono aver sotto-riportato l'uso per ragioni di integrità. Esso descrive come un gruppo capace usa questi strumenti, non ciò che l'uso produce.

## Ricerca e recupero in letteratura

Un rapporto di workshop mappa un'agenda anziché misurarla. Il CHIIR 2026 Workshop on Generative AI and Academic Search ha riunito ricercatori in interazione e recupero dell'informazione umana, e il suo rapporto descrive sistemi costruiti per il recupero di documenti che ora sintetizzano, raccomandano, sintetizzano e conversano — destabilizzando l'assunto che il sistema localizzi le fonti mentre l'interpretazione resta con l'utente.

Un lightning talk ha testato come i modelli ricostruiscono gli studiosi. Rispetto alla verità di base di OpenAlex e Google Scholar per 1.596 autori seme su 10 discipline e 8 regioni globali, i ricercatori altamente citati venivano ricostruiti a circa il doppio del tasso dei pari citati meno, testando DeepSeek R1, Llama 4 Scout e Mixtral 8×7B.

Un bibliotecario ha riportato un "divario di fiducia": gli studenti spesso si fidavano eccessivamente della ricerca generativa mentre la faculty la diffidava, e i workshop a sessione singola erano giudicati insufficienti per un'alfabetizzazione durevole. Il filo di progettazione a cui i partecipanti tornavano più spesso era l'"attrito" — mantenere gli utenti impegnati nel lavoro critico, talvolta scomodo, da cui viene l'apprendimento.

Il rapporto copre un singolo evento auto-selezionato e registra in gran parte opinioni, principi di progettazione e domande di ricerca. Le sue cifre appartengono ai singoli talk anziché al workshop, e nulla in esso mostra che la ricerca accademica con IA migliori o danneggi l'apprendimento.

## Selezione e automazione delle revisioni sistematiche

Le revisioni sistematiche sono dove l'automazione è avanzata di più, e dove si mostrano i suoi limiti. [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] riflettono sulla revisione di una squadra interdisciplinare e riportano che l'automazione ha ridotto l'onere procedurale principalmente nella selezione degli abstract — strumenti come ASReview, SWIFT-Review, Covidence, AIScreenR e MetaMate — mentre estrazione dei dati, riconciliazione e sintesi restavano ai revisori umani. Il mentoring e la discussione tra pari funzionavano come infrastruttura metodologica, non come cortesia.

La loro conclusione è una divisione del lavoro anziché un passaggio di consegne: assegnare all'automazione l'onere procedurale, verificare ogni output, e mantenere umane le decisioni interpretative. Il resoconto è la riflessione di una squadra senza condizione di confronto, per cui le sue strategie sono descritte anziché testate.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta e Lin (2026)]] quantificano il problema del reporting su 888 articoli di automazione delle revisioni che portano 14.726 elementi di annotazione. Dal 2023, il 38.0% degli articoli su software e prodotti non riportava alcuna valutazione, contro il 9.3% degli articoli su LLM. Il divario sopravvive alla stratificazione: nella selezione e nella scelta, gli articoli su software avevano in media 3.2 elementi di valutazione sostanziali con il 39.3% che non ne riportava nessuno, mentre gli articoli su LLM avevano in media 7.3 elementi con un tasso di mancata valutazione del 3.8%.

Una valutazione favorevole non implicava idoneità alla delega. Tra 118 articoli su LLM con valutazioni solo positive, il 52% riportava comunque almeno una preoccupazione che il flusso di lavoro scendesse sotto il livello richiesto per il proprio ruolo. L'accesso ai modelli era in misura schiacciante proprietario: l'84.1% dell'uso di LLM si basava su sistemi proprietari o ospitati, l'11.0% era misto, e solo il 4.9% era a pesi aperti.

Da questi schemi gli autori derivano PRISMA-LLM, un quadro a tre livelli i cui cinque livelli di implementazione sono fasce di divulgazione anziché fasce di rischio. È una proposta offerta per essere testata, non un'estensione ufficiale avallata dal PRISMA Executive. Il silenzio a livello di articolo, avvertono, non è prova che la validazione sia assente — può risiedere in un rapporto di prodotto, in un protocollo o in un repository.

## Codifica e analisi qualitativa

L'analisi qualitativa è la fase in cui l'interpretazione è il prodotto, il che rende la delega più difficile da giustificare. La pagina sulla [[qualitative-research|Ricerca qualitativa]] raccoglie l'evidenza del corpus sulla codifica assistita dall'IA, inclusi studi che mostrano che l'accordo umano-modello non è la stessa cosa della qualità della codifica e che gli errori possono propagarsi attraverso l'analisi temporale. Quella letteratura tratta il modello come ausilio di scala i cui output richiedono verifica contro il giudizio umano.

[[ai-methodologies-science-education-research-2026|Martin et al. (2026)]] descrivono direttamente lo spostamento di ruolo. Man mano che vengono applicati modelli di codifica automatizzata, il ricercatore passa dal codificare i dati degli studenti al validare gli output del modello; quando i modelli non supervisionati raggruppano il ragionamento, l'algoritmo compie l'analisi esplorativa iniziale. I ricercatori, sostengono, hanno sempre più bisogno di competenze di data science accanto all'expertise qualitativa, quantitativa e teorica.

Il loro quadro fornisce anche il controllo che conta qui: l'IA spiegabile può rivelare se la codifica automatizzata segue la comprensione semantica o solo le parole chiave. Una pipeline di codifica che concorda con le etichette umane potrebbe stare leggendo la cosa sbagliata.

## Analisi dei dati e poste in gioco epistemiche

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen e Graulich (2026)]] premono sulla produzione di conoscenza del campo stessa, e il loro articolo è la spina dorsale di questa pagina. Fondati sul resoconto di Hasok Chang (2004) dell'iterazione epistemica — stadi successivi di conoscenza che si costruiscono l'uno sull'altro verso fini epistemici — essi tracciano un parallelo con lo sviluppo di circa 150 anni del termometro e sostengono che il campo potrebbe ora trovarsi all'interno di un'iterazione comparabile.

La loro preoccupazione centrale è epistemica anziché tecnica. Il problema della misura nomica di Chang sostiene che misurare una quantità richiede una legge che la relazioni a qualcosa di osservabile, eppure quella legge non può essere testata empiricamente senza già conoscere la quantità. Le funzioni di misura derivate dall'IA, che emergono da dati di addestramento e ottimizzazione piuttosto che dal ricercatore, possono intensificarlo anziché risolverlo, perché possono apparire precise e predittive restando al contempo opache.

Il quadro ha sette fasi: definizione del problema; strumentazione e misura; sperimentazione e inferenza basata sull'evidenza; confronti e replicazione; costruzione di norme e consenso; implementazione e le sue conseguenze; e raffinamento continuo. Gli autori le presentano come dimensioni analitiche che possono ripetersi, sovrapporsi o essere assenti, non come una sequenza validata.

La comparabilità è la fase con il margine di equità più netto. Il principio di Regnault richiede che uno strumento dia la stessa lettura nelle stesse condizioni e che strumenti di un tipo concordino — ma la comparabilità deve estendersi attraverso le popolazioni studentesche, e l'apprendimento automatico tende a codificare le idee canoniche meglio dei modi diversi in cui gli studenti esprimono quelle più deboli.

Essi nominano anche un problema di accountability. I ricercatori usano modelli pre-addestrati i cui dati di addestramento, fine-tuning e obiettivi potrebbero non conoscere, aggiungendo uno strato di dipendenza epistemica; poiché questi sistemi emergono da reti sociotecniche, la responsabilità diventa difficile da allocare — un "problema delle molte mani".

L'onestà necessaria è che l'articolo non riporta dati e non stabilisce effetti sull'apprendimento. Non mostra che le metodologie di IA migliorino la ricerca o producano conclusioni più valide; quel confronto è posto come lavoro futuro, e gli autori ammettono che la loro ipotesi "potrebbe ben rivelarsi incorretta".

## Scrittura, citazione e integrità nella ricerca

La scrittura è dove l'assistenza dell'IA è più visibile e dove i suoi fallimenti sono più consequenziali, perché un riferimento è un'asserzione di responsabilità. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] hanno auditato l'intera ACM Digital Library — 723.930 pubblicazioni e 15.872.533 riferimenti — e hanno tracciato 113.588 riferimenti da 5.225 articoli di computing education pubblicati dal 2021 in poi.

Hanno verificato manualmente 828 record sospetti e hanno trovato 30 riferimenti contenenti informazioni bibliografiche verificabilmente fabbricate in 14 articoli, tutti del 2025 e del 2026. Al SIGCSE Technical Symposium il conteggio è salito da 3 nei proceedings del 2025 a 17 nel 2026, comparendo nel 2.3% degli articoli dei proceedings del 2026. Diciassette dei 30 erano ibridi che accoppiavano un titolo reale con autori fabbricati o errati.

Il loro conteggio è un limite inferiore deliberato, ed essi presentano il problema come condiviso anziché risolto dal software. Gli autori dovrebbero verificare ogni opera citata, specialmente quando l'IA generativa è stata usata nella scrittura; i revisori non possono auditare ogni riferimento, per cui le sedi adottano controlli mirati; gli editori dovrebbero migliorare i metadati. Il rilevamento automatizzato eredita i difetti dei metadati che tratta come verità di base.

Gli effetti di scala della scrittura con IA appaiono in un secondo studio bibliometrico. [[ai-assisted-writing-research-teams|Wang et al. (2026)]] hanno analizzato 147.074 pubblicazioni delle riviste del portafoglio PLoS e Nature dal 2020 e hanno associato la scrittura assistita dall'IA a squadre più piccole e inclini al junior. Nello spostamento estremo da nessuna assistenza dell'IA ad assistenza piena, la dimensione della squadra era inferiore del 22.1% in PLoS e del 45.5% in Nature (β di Poisson = −0.250 e −0.607, entrambi p < 0.01).

L'impatto non ne soffriva in modo evidente. Circa il 7.34% degli articoli PLoS assistiti dall'IA e il 7.40% di quelli di Nature raggiungevano il 5% superiore del FWCI, al di sopra di entrambi i gruppi di confronto scritti da umani, e i confronti appaiati mostravano una probabilità più alta del 3.0% e del 2.7% di rientrare nel 5% superiore del FWCI (entrambi p < 0.01). I dati sono osservazionali, per cui gli autori declinano asserzioni causali forti.

## Agenti persistenti nell'ambiente della ricerca

Oltre ai singoli prompt, gli agenti persistenti vengono incorporati nell'ambiente di lavoro della ricerca stessa. [[persistent-ai-agents-academic-research|Alzahrani (2026)]] riporta uno studio di caso a singolo investigatore di 115 giorni su un agente con memoria durevole, file locali, strumenti esterni, routine programmate e ruoli delegati, in esecuzione nell'ambiente di lavoro di un medico-ricercatore.

Gli esiti descrittivi sono grandi. La telemetria recuperabile dell'agente principale conteneva 75.671 record de-duplicati su 96 giorni attivi, una frazione di giorni attivi di 0.835; l'ambiente di lavoro conteneva 502 file relativi alla memoria, 17 directory di agenti configurati e 57 file di skill. Un sottoinsieme stretto di 25 giorni di maggio conteneva 627 eventi completati dal modello e 73.950.305 token registrati, di cui l'82.9% letture di cache, con circa US\$1.961 di spesa di sistema osservata.

Il contributo principale dello studio è una cornice di misura — PARE-M — costruita perché gli esiti che un agente persistente è destinato a sostenere, come la governance e il costo per artefatto, sono invisibili ai benchmark episodici. Il suo risultato negativo centrale è che il volume aggregato di interazione non ha dimostrato una riduzione dell'input umano: man mano che memoria e procedure si accumulavano, l'ambito del lavoro delegato si espandeva, per cui lo schema più forte è l'espansione della capacità anziché una provata sostituzione del lavoro.

I limiti sono quelli che un singolo caso auto-osservato invita. Un ricercatore era utente, progettista, fonte dei dati, analista e beneficiario, senza gruppo di controllo, senza periodo di base e senza codificatore indipendente per gli eventi di governance.

## Persone che apprendono simulate come strumenti di ricerca e valutazione

[[simulating-students|Simulare studenti]] è la pagina della knowledge base sulla tecnica e sul fenomeno: come costruire una persona che apprende sintetica il cui stato di conoscenza e i cui errori siano sufficientemente fedeli da sostituire una persona reale. Questa pagina tratta lo stesso apparato come strumento di ricerca e valutazione — a cosa serve una persona che apprende sintetica *di fatto* quando un intervento, uno strumento, un benchmark o un tutor deve essere testato su una scala o in condizioni che persone che apprendono reali non possono fornire.

L'uso più chiaro è valutare un tutor nel tempo. [[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]] pongono un agente tutor in una relazione di 30 giorni con una persona che apprende simulata il cui dominio, derivato da un modello di knowledge tracing addestrato su dati di studenti reali, guida le sue risposte. Valutando 10 adattatori di agenti, ogni adattatore raggiungeva un plateau entro 5–10 giorni ben al di sotto di un riferimento di apprendimento ideale, un risultato che la valutazione a sessione singola non può raggiungere. Un controllo di calibrazione rispetto all'accuratezza osservata delle sonde abbraccia la diagonale (ECE 0.049, Brier 0.033 su 1,19 milioni di tentativi).

La fedeltà è la precondizione, ed è misurabile. [[beagle-grounded-learner-emulation-2026|Wang et al. (2026)]] riportano una divergenza comportamentale dalle tracce di studenti reali di DKL = 0.31 contro 0.53 per la baseline migliore, e in un test di Turing con 71 valutatori le loro tracce erano statisticamente indistinguibili dai dati di studenti reali (52.8% di accuratezza, d′ = 0.15). Il fallimento da evitare è il pregiudizio di competenza: i modelli sollecitati da prompt risolvono il compito troppo bene per sostituire i novizi.

Lo stato di credenza è la parte facile da falsificare. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar e Sachan (2026)]] hanno mostrato che su sette modelli da 4B a 120B parametri, i simulatori abbandonavano una concezione errata assegnata e ri-risolvevano a partire dalla conoscenza interna a tassi quasi uniformi sotto feedback mirato, disallineato e generico. Essi lo quantificano con un Selective Flip Score e innalzano la fedeltà fino a +0.56 attraverso l'addestramento, il che è il punto: sollecitare da prompt una persona non costruisce una persona che apprende.

Le persone che apprendono simulate servono anche come banco di prova controllato per gli strumenti di valutazione stessi. [[llm-judged-helpfulness-pedagogy-signal|Fan et al. (2026)]] hanno accoppiato ciascuna di tre basi tutor con una persona che apprende simulata debole fissa sotto un protocollo pre-registrato e hanno trovato che le rubriche di utile di uso generale portano poco segnale pedagogico, con sette politiche che si estendono su 2.3 punti di pedagogia giudicata all'interno di una banda di 0.25 punti di utile giudicato. I turni che rivelano la risposta erano seguiti da meno lavoro studentesco indipendente su ogni base.

L'avvertimento appartiene alla pagina. Il verdetto di un simulatore è buono solo quanto il simulatore, e la sua copertura tende verso le persone che apprendono più facili.

## Ricerca del praticante: SoTL e indagine in classe

Questo è il filone che il corpus documenta meno. Lo scholarship of teaching and learning e la ricerca in classe sono indagini del praticante — un docente che studia il proprio corso, spesso su piccola scala, spesso come auto-studio — e le pagine raccolte qui non forniscono un resocondo fondato sulla ricerca dell'uso dell'IA in quella modalità.

L'evidenza più vicina è adiacente anziché pertinente. Gli studenti di dottorato in [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] stavano imparando a essere ricercatori, non studiando il proprio insegnamento. La squadra in [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] conduceva una revisione interdisciplinare formale, non un progetto locale. Gli studi bibliometrici descrivono discipline ed editori, non classi.

L'affermazione onesta è quindi una lacuna anziché un risultato. L'indagine del praticante assistita dall'IA è plausibilmente diffusa e quasi non documentata in questo corpus; una pagina che presentasse l'evidenza sull'automazione delle revisioni e quella bibliometrica come se stabilisse come un docente debba usare l'IA per studiare il proprio insegnamento starebbe eccedendo.

Ciò che può essere trasportato è una disposizione anziché un risultato: nominare il ruolo dell'IA nei metodi, mantenere umane le decisioni interpretative, e riportare ciò che è stato e non è stato verificato.

## Ciò che l'evidenza non stabilisce ancora

- **Nessun confronto testa a testa.** Martin et al. pongono il confronto tra metodi assistiti dall'IA e tradizionali come lavoro futuro. Nessun articolo cardine mostra che una metodologia di IA produca conclusioni più valide.
- **Disegni esili in tutta la pagina.** Gli articoli cardine sono una proposta di quadro, il resoconto riflessivo di una squadra, un rapporto di workshop, uno studio con focus group e bibliometria osservazionale. Nessuno è una prova controllata di un metodo assistito dall'IA.
- **Una lacuna di reporting, non un audit della pratica.** PRISMA-LLM legge il silenzio a livello di articolo; un flusso di lavoro senza valutazione nel proprio articolo può essere comunque validato altrove.
- **La ricerca del praticante è sotto-rappresentata.** Solo una manciata di pagine qui menziona il SoTL o la ricerca in classe, per cui il corpus non può fondare asserzioni su docenti che studiano la propria pratica.
- **Un bersaglio mobile.** Gli strumenti migliorano più in fretta di quanto si pubblichi, per cui un risultato su un flusso di lavoro del 2025 descrive una generazione di sistemi che potrebbe non esistere più in quella forma.

## Citazione

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.

## Concetti collegati

- [[research-methods-aied]] — l'ombrello per i disegni usati per studiare l'IA in educazione
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## Articoli collegati

- [[ai-methodologies-science-education-research-2026]] — a seven-phase reflective framework for how AI methodologies may transform science education research (Martin et al., 2026)
- [[scaffolding-systematic-reviews-2026]] — one interdisciplinary review team's account of mentoring and selective AI integration (Wang et al., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — how 28 postgraduate students used GenAI across the research workflow, and the guidelines they suggest (Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — a field-scale audit of fabricated references in the computing-education literature (Denny et al., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — a reporting framework for AI-assisted systematic reviews, and the accountability gap it documents (Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — a CHIIR 2026 workshop report on generative AI and academic search (Liu, Arguello, Hoeber et al., 2026)
- [[persistent-ai-agents-academic-research]] — a single-investigator case study of a persistent agent in a research workspace (Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — bibliometric evidence that AI-assisted writing accompanies smaller, younger research teams (Wang et al., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — a 30-day benchmark that evaluates tutor agents against a simulated learner (Lee et al., 2026)
- [[beagle-grounded-learner-emulation-2026]] — a neuro-symbolic simulator that reproduces genuine novice struggle (Wang et al., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — why simulators abandon a misconception under any feedback, and how training fixes it (Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — a pre-registered audit that uses a fixed simulated learner to test whether helpfulness measures pedagogy (Fan et al., 2026)
