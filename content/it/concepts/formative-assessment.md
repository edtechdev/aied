---
title: Valutazione formativa
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl, ai-infused-assignment-playbook]
confidence: high
translation_of: concepts/formative-assessment
source_updated: "2026-10-15T08:25:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **La valutazione formativa** — una valutazione progettata per informare l'istruzione e l'apprendimento in corso, a differenza della valutazione [[summative-assessment|sommativa]]. Nell'istruzione sull'IA, la valutazione formativa è al tempo stesso trasformata dall'IA e essenziale per essa: i sistemi di IA possono generare, validare e adattare item e feedback formativi su larga scala, mentre il feedback formativo è un meccanismo primario attraverso cui i [[intelligent-tutoring|tutor di IA]] e i [[adaptive-learning|sistemi adattivi]] sostengono l'apprendimento. La [[research-methods-aied|ricerca]] della base di conoscenza esamina gli item formativi generati dall'IA, il feedback generato dall'IA, e la progettazione e valutazione di questi sistemi.

## Domande da considerare

- La valutazione formativa è pensata per chiudere il ciclo — far emergere ciò che gli studenti non sanno e fornire un feedback su cui possano agire *mentre l'apprendimento è ancora in corso*. In che cosa questo è fondamentalmente diverso dalla valutazione sommativa, e quando le due possono essere confuse nella pratica?
- L'IA può generare domande a scelta multipla con un'accuratezza impressionante sulle dimensioni verificabili, ma è più debole sulle dimensioni di giudizio didattico. Se una macchina è brava nelle risposte corrette ma più debole nel [[pedagogy|giudizio pedagogico]], a che cosa dovrebbe essere delegata — e che cosa dovrebbero continuare a fare gli esseri umani?
- Il feedback generato dall'IA aiuta solo quando gli studenti lo mettono effettivamente in atto — la condizione del "feedback attuato", in cui gli studenti selezionano, valutano e applicano i suggerimenti, ha superato la semplice ricezione del feedback. Se l'attuazione conta più del feedback stesso, che cosa significa per il modo in cui il feedback formativo andrebbe progettato?
- Il feedback è descritto non come trasferimento di informazioni ma come pratica [[ethics|etica]] e relazionale. Che cosa si perde quando la valutazione formativa è prodotta in massa come "AI slop" — e che cosa possono preservare le banche di commenti umane e la cura relazionale?

## Introduzione

La valutazione formativa è centrale per l'[[ai-education|IA nell'istruzione]] perché si colloca alla giunzione tra [[assessment|valutazione]] e [[feedback|feedback sull'apprendimento]]. Il suo scopo è chiudere il ciclo: far emergere ciò che gli studenti sanno e non sanno, e fornire un feedback su cui possano agire per migliorare. L'IA rende questo fattibile su larga scala — generando item, valutando le risposte e fornendo feedback individualizzati — ma la ricerca della base di conoscenza mostra che la qualità varia drammaticamente tra i tipi di item, e che il feedback aiuta solo quando gli studenti lo mettono effettivamente in atto.

## Item formativi generati dall'IA

I sistemi di IA generano item di valutazione formativa attraverso modalità diverse, con un'affidabilità che varia secondo il tipo:

- **Domande a scelta multipla:** [[code-gen]] mostra che l'[[agentic-ai|IA agentica]] può generare in modo affidabile domande a scelta multipla per la comprensione del codice, se validate su sette dimensioni pedagogiche — i tassi di successo raggiungono il **98,6%** per l'allineamento concettuale e il **79,9%** per la qualità del feedback — il che suggerisce che l'IA è più forte sulle dimensioni verificabili e più debole sulle dimensioni di giudizio didattico. Questo si collega alla [[automated-question-generation|generazione automatizzata di domande]] in senso più ampio.

- **Una banca di item generati facile non dà alcun segnale formativo.** In un impiego della durata di 10 settimane, circa il 70% degli item di pratica generati dall'IA è stato risposto correttamente da ogni studente (p = 1,0), quindi i quiz a bassa posta in gioco condotti ogni 15-20 minuti sono stati ben accolti ma hanno fornito quasi nessuna informazione discriminante per adattare l'istruzione ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Valutazione automatizzata dei saggi:** i framework multi-agente (ad es. MASS) migliorano la coerenza rispetto agli [[llm|LLM]] presi singolarmente nella [[automated-essay-scoring|valutazione dei saggi]], sebbene l'[[explainable-ai|interpretabilità]] delle decisioni di valutazione multi-agente resti una sfida aperta.
- **Pipeline di valutazione formativa:** [[cotal-formative-assessment-scoring-2026|CoTAL]] accoppia il prompting Chain-of-Thought con l'[[active-learning|apprendimento attivo]] e l'Evidence-Centered Design per produrre una valutazione formativa generalizzabile con [[prompt-engineering|prompt engineering]] human-in-the-loop.
- **[[automated-assessment|Valutazioni automatizzate ad alta frequenza]]:** le [[automated-formative-assessments-a-level-sciences|valutazioni formative automatizzate nelle materie scientifiche di livello A]] esaminano l'effetto della valutazione formativa automatizzata ad alta frequenza sugli [[learning-gains|esiti di apprendimento]]. Una revisione di ambito sulla correzione automatica delle risposte brevi in ambito [[science-education|scientifico]] (2017 - inizio 2024) conferma che questo caso d'uso formativo a risposta breve è un campo con una reale trazione: i modelli della famiglia BERT hanno dominato la correzione automatica fino al 2021, prima degli [[llm|LLM]] più grandi sollecitati tramite prompting a partire dal ~2022, e i modelli aumentati con il dominio, consapevoli della rubrica e chain-of-thought hanno ottenuto i risultati migliori — eppure gli appelli della revisione a una valutazione completa e le [[bias-mitigation|equità]] e le lacune di spiegabilità irrisolte mettono in guardia dall'estendere tali sistemi a usi [[summative-assessment|sommativi]] o ad alta posta in gioco senza mediazione ([[auto-marking-short-answer-science-2026]]).

## Feedback generato dall'IA

Un ampio corpo di ricerca della base di conoscenza esamina il feedback formativo generato dall'IA:

- **Il problema dell'attuazione:** [[ai-feedback-enactment-workflow-2026|Making AI-Generated Feedback Matter]] (13.037 studenti; 51.296 risorse) mostra che il valore del feedback dipende dal fatto che gli studenti lo *mettano in atto* — la condizione **Enacted Feedback**, in cui gli studenti selezionano, valutano e applicano i suggerimenti di feedback dell'IA, ha superato il semplice feedback diretto.
- **Il feedback dell'IA può eguagliare gli insegnanti esperti quando la rubrica porta i criteri.** Alla cieca rispetto alla fonte e randomizzati su 47 gruppi di progetto universitari, un LLM a cui erano stati forniti la rubrica 0-30 costruita insieme e un esemplare è risultato non inferiore *e* equivalente al feedback esperto (+0,23, IC 90% [−0,46, 0,91]) — è stata la rubrica, non il modello, a calibrare ([[ai-generated-feedback-higher-ed|Grion et al. (2026)]]).
- **Il feedback non è trasferimento di informazioni:** [[care-full-feedback-genai|The care-full craft of feedback]] sostiene che il feedback è una pratica etica e relazionale, non una trasmissione di informazioni — il feedback costituisce feedback solo quando gli studenti gli danno senso e agiscono su di esso, e contrappone l'"AI slop" prodotta in massa alle scorciatoie delle banche di commenti umane.
- **Il feedback sequenziato può ritorcersi contro:** [[sequenced-ai-feedback-learning|Sequenced AI feedback]] (incoraggiamento → suggerimenti → risposta corretta, progettato per promuovere l'autonomia) ha effettivamente **danneggiato l'apprendimento** in un esperimento randomizzato (N = 199) pur aumentando lo [[student-engagement|engagement]] e le percezioni positive — un risultato cautelativo sulla progettazione del feedback.
- **Strumenti centrati sullo studente:** [[learner-centered-feedback-ai|PolyFeed]] combina modelli di suggerimento basati sul machine learning con la pratica dell'[[teacher-role|insegnante]], mostrando come gli insegnanti adottino e adattino i suggerimenti di feedback dell'IA; il [[ai-internal-feedback-evaluative-judgments|feedback interno supportato dall'IA]] aiuta gli studenti universitari a sviluppare il [[evaluative-judgment|giudizio valutativo]].
- **Prompting guidato dalla rubrica e feedback consapevole del ruolo:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] hanno mostrato che il raffinamento iterativo della rubrica — chiarire i descrittori di prestazione e accettare esplicitamente indicatori impliciti di apprendimento — ha portato l'accordo LLM-umano sul lavoro di progettazione degli studenti dal 54,75% all'81,25% (l'Alfa di Cronbach salendo da 0,393 a 0,798), con i guadagni maggiori nella categoria Iterazione e riflessione, cognitivamente impegnativa. Sollecitare lo stesso modello nei ruoli di docente, revisore tra pari e revisore di progetto ha prodotto feedback valutativi distinti, e gli LLM post-revisione sono stati più coerenti di alcuni valutatori umani nell'applicare le soglie di prestazione — posizionando gli LLM guidati dalla rubrica come partner di calibrazione e co-progettazione negli ambienti di feedback formativo, con la supervisione human-in-the-loop che resta essenziale.
- **Le cifre di accordo nascondono una direzione: un modello può ripiegare verso la categoria di mezzo.** Un valutatore LLM che etichettava i turni di dialogo all'interno di una valutazione basata sulla conversazione ha corrisposto alla codifica umana nel 52,2% di 155 eventi, ma ha usato l'etichetta cautelativa PARTIAL_CORRECT più spesso dei valutatori (53,5% contro 41,3%) e ha segnalato il 5,4% dei turni come IRRELEVANT laddove i valutatori non ne hanno segnalato nessuno ([[llm-multi-agent-conversation-assessment-2025|Hou et al., 2025]]).
- **Il feedback dell'IA sostiene la partecipazione e produce guadagni su larga scala:** l'esperimento sul campo della durata di un semestre di [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] attraverso esercitazioni universitarie ha rilevato che il feedback formativo individuale con GPT-4 (che abbraccia tutte e tre le dimensioni di Hattie & Timperley — Feed-Back, Feed-Up, Feed-Forward) ha sostenuto la partecipazione più alta attraverso otto compiti a risposta aperta, ha allungato le risposte degli studenti e ha prodotto i guadagni di apprendimento sui contenuti più forti — un effetto guidato dalla fornitura affidabile e coerente dell'IA, poiché quando il feedback testuale tra pari di alta qualità è stato effettivamente ricevuto, gli esiti tra pari hanno eguagliato quelli dell'IA.
- **Futuri del feedback:** [[feedback-futures-genai|Feedback Futures]] sintetizza un numero speciale e sostiene che la domanda non è *se* la [[generative-ai|GenAI]] possa produrre feedback ma come progettare un feedback che sostenga l'apprendimento, distillando le tensioni ricorrenti nel campo.

- **La maggior parte del feedback formativo è momentanea, non sostenibile.** In una revisione di ambito di 37 studi sulla valutazione autentica, 23 hanno usato il feedback formativo per il miglioramento immediato ma solo quattro hanno usato un feedback sostenibile che gli studenti trasferiscono ai contesti futuri — il modello reattivo che gli attuali strumenti di feedback con IA riproducono ([[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan, Boud & Du (2025)]]).
- **Feedback che parte dalla diagnosi per problemi quantitativi a risposta aperta:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]] fornisce feedback formativo personalizzato in tempo reale sulle Engineering Economics Calculated Formula Questions, un dominio in cui le soluzioni scritte a mano e non strutturate avevano precedentemente bloccato il supporto dell'IA. Uno scheletro [[machine-learning|XGBoost]] per domanda diagnostica gli errori probabili etichettati dalla rubrica a partire dalle risposte numeriche presentate dagli studenti (precisione media 0,81, richiamo 0,79), e uno schema basato sul dialogo richiede risposte intermedie solo quando la confidenza della previsione è bassa — bilanciando l'accuratezza del feedback contro l'efficienza di raccolta all'interno di un'interfaccia web con banca di domande.
- **Scala e limiti del feedback formativo con LLM (evidenza sistematica):** una revisione sistematica guidata dalla [[meta-analysis-systematic-review|revisione sistematica]] secondo PRISMA di 42 studi empirici (2023-2025) rileva che gli LLM possono ridurre il carico di lavoro degli insegnanti e fornire feedback rapido e personalizzato su larga scala — specialmente in coorti numerose o di [[higher-ed|istruzione superiore]] — ma che il feedback è talvolta troppo generico o disallineato rispetto al voto assegnato e che l'affidabilità cala sui compiti più lunghi, [[multilingual-learning|multilingue]] o sfumati, rafforzando l'idea che il feedback formativo con IA si dispieghi al meglio sotto la supervisione di chi educa ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **L'adattività è un ingrediente separabile, non una decorazione:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod & Breitwieser (2026)]] forniscono il test causale diretto che la maggior parte degli studi sul feedback con LLM dà per assunto, mettendo a confronto il feedback contingente alla risposta di GPT-4 con indicazioni generiche scritte da esperti, appaiate per struttura, tono, lunghezza e formulazione [[motivation|motivazionale]] (verificate con una rubrica di qualità a cinque dimensioni, κ = 0,76-1,00). In un esperimento entro-soggetto preregistrato, 155 alunni tedeschi di quinta e sesta elementare (M = 12,08 anni) hanno rivisto sei piani se-allora: la qualità del piano è salita da una mediana di **2 → 5** sotto il feedback adattivo rispetto a **2 → 3** sotto le indicazioni generiche (V entro-persona = 10.440, p < 0,001, r = 0,86; stima dell'interazione condizione × tempo = 1,68, SE = 0,14, p < 0,001, senza differenza pre-supporto). I bambini hanno valutato il feedback adattivo sia più utile (r = 0,67) sia più motivante (r = 0,74), e le percezioni a livello di prova hanno predetto l'entità dei guadagni di revisione — rendendo la [[technology-acceptance-model|utilità percepita]] parte del percorso anziché un sottoprodotto affettivo. Poiché il controllo era esso stesso ben progettato, lo studio mostra il valore aggiunto *al di là* di indicazioni ben fatte ma non contingenti, piuttosto che la differenza tra feedback e nulla: le indicazioni generiche sono un sostituto autentico ma limitato che si assesta sulla propria mediana. La pianificazione è servita come caso di prova in quanto strategia fondamentale di [[self-regulated-learning|apprendimento autoregolato]] con criteri di qualità espliciti, il che rende la contingenza — la proprietà che distingue lo [[scaffolding|scaffolding]] dal supporto statico — direttamente misurabile su una risposta di una sola frase. Gli autori definiscono l'adattività in senso stretto come adattamento contingente alla risposta del contenuto del feedback alla risposta concreta dello studente, distinguendola dall'interattività conversazionale, dal tono e dall'[[adaptive-learning|apprendimento adattivo]] come tratto stabile.
- **L'utilità percepita segue l'azionabilità:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] hanno chiesto a 144 studenti di programmazione di valutare 893 istanze di feedback generato da LLM su cinque dimensioni e 237 report consolidati su sei, tenendo costanti dominio, compito e strumento mentre variava il livello educativo. Le valutazioni sono state favorevoli in ogni caso, con medie a livello di studente da 4,24 a 4,43 per le singole risposte e da 4,11 a 4,38 per i report, eppure azionabilità e utilità hanno ricevuto le valutazioni più basse anche se azionabilità e accuratezza percepita hanno portato i pesi relativi maggiori (32,6% e 29,0%) in un modello che spiega il 76% della varianza nell'utilità percepita, e motivazione e personalizzazione hanno guidato un modello a livello di report dell'intenzione d'uso che spiega il 53%. Poiché l'azionabilità è la dimensione che la ricerca sul [[feedback]] tratta come la più difficile da fornire, lo schema si legge come [[technology-acceptance-model|accettazione della tecnologia]] applicata al feedback: l'utilità segue il fatto che chi apprende possa agire, non quanto il feedback suoni rifinito.

- **L'accordo offline sovrastima la prestazione dal vivo:** la pipeline di feedback GPT-4o di [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] ha riprodotto il voto del docente entro 0,5 punti nell'83% di 362 consegne, eppure l'accordo corretto per il caso era solo moderato (ICC(2,1) = 0,49) ed è sceso da r = 0,92 sugli elaborati storici a 0,57 nell'uso dal vivo supervisionato dal docente.
- **La comprensione supera l'azionabilità nel percorso verso la revisione:** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao e Fan (2026)]] hanno separato la diagnosi a livello di singolo problema dai suggerimenti e hanno fornito agli studenti una scheda di interpretazione scritta (ristrutturazione, spiegazione dell'effetto, identificazione dell'incertezza, piano di revisione) prima di una revisione indipendente, della revisione strutturata da parte dell'insegnante, della ri-valutazione e della riflessione. Attraverso tre cicli di scrittura in due classi intatte (96 studenti; 288 osservazioni a livello di ciclo), la comprensione del feedback ha portato l'associazione più forte con la qualità della revisione (r = 0,501, prima dell'azionabilità a 0,480 e dell'accuratezza diagnostica a 0,445), e il gruppo diagnostico ha guadagnato 5,92 punti di scrittura contro 3,58 (g di Hedges = 1,12), collocando la leva nella comprensione della diagnosi da parte degli studenti piuttosto che nella sua sola azionabilità.

## Progettazione ancorata al curricolo e con l'educatore nel ciclo

[[ai-learning-tools-engineering-education-needs|LearnLens]] affronta tre problemi persistenti nella valutazione formativa con IA: la **valutazione consapevole degli errori** (cogliere errori di ragionamento sfumati anziché errori superficiali), le **catene di memoria legate all'argomento** (che sostituiscono il recupero [[rag]] rumoroso basato sulla somiglianza con un recupero strutturato ancorato al [[curriculum-design|curricolo]]) e la progettazione **con l'educatore nel ciclo** (personalizzazione e supervisione da parte dell'insegnante, non automatizzazione completa). Questo si collega alla più ampia tensione nell'[[human-in-the-loop-ai|IA human-in-the-loop]]: automatizzazione scalabile con validazione esperta.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl & Leuders (2026)]] affinano ciò che "educatore nel ciclo" significa quando uno strumento produce le proprie affermazioni anziché osservazioni grezze. La loro analisi concettuale sostiene che le inferenze diagnostiche generate dall'IA sono un'evidenza qualitativamente diversa, perché sono già il prodotto di un'interpretazione algoritmica, quindi gli insegnanti hanno bisogno di un ulteriore strato che gli autori chiamano **meta-diagnosi**: accettare, rifiutare o modificare deliberatamente un'inferenza e integrarla con la propria conoscenza contestuale. Specificare il framework DiaCoM per questo tratta le inferenze generate dall'IA come caratteristica della situazione e la decisione di accettare, rifiutare o modificare come comportamento diagnostico, ampliando al tempo stesso le caratteristiche della persona che gli insegnanti devono possedere fino a includere la conoscenza di come i sistemi di IA funzionano effettivamente. Poiché i sistemi attuali si basano perlopiù su dati di prestazione come la correttezza dei compiti e il tempo di completamento, gli stati motivazionali e le dinamiche di classe restano largamente assenti, quindi l'articolo mantiene gli insegnanti, non la dashboard, come agenti riflessivi responsabili e inquadra il giudicare le affermazioni algoritmiche come un obiettivo per lo sviluppo professionale.

Far corrispondere il ruolo dell'IA al livello di rendimento è una mossa progettuale collegata: i docenti di scienze in formazione hanno descritto ChatGPT come un tutor paziente per chi ha bassi risultati, come allenatore personale per chi ha risultati medi e come partner intellettuale per chi ha alti risultati, mentre l'insegnante manteneva la spiegazione finale dei contenuti difficili ([[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom et al., 2026]]).

## Compromessi di progettazione

| Dimensione | Idoneità dell'IA | Richiesta umana |
|------------|------------------|-----------------|
| Correttezza fattuale | Alta | Bassa |
| Allineamento concettuale | Alta | Media |
| Qualità dei distrattori | Bassa | Alta |
| Profondità del feedback | Bassa | Alta |
| Coerenza della rubrica | Media | Media |

## Valutazione, feedback e apprendimento

La valutazione formativa nell'istruzione sull'IA si collega al processo di apprendimento stesso:

- **Cicli di feedback:** i [[feedback|cicli di feedback]] sono il meccanismo con cui la valutazione formativa informa l'apprendimento; i tutor di IA e i sistemi adattivi chiudono questi cicli su larga scala.
- **Apprendimento autoregolato:** il feedback formativo sostiene l'[[self-regulated-learning|apprendimento autoregolato]] quando gli studenti monitorano il progresso e si correggono; il feedback dell'IA dovrebbe coltivare il [[ai-internal-feedback-evaluative-judgments|giudizio valutativo]], non soppiantarlo.
- **La valutazione automatizzata raggiunge alcune fasi del ciclo, non tutte:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen & Liu (2026)]] hanno condotto un quasi-esperimento di 14 settimane in cui 46 studenti di interpretariato consegnavano renditions settimanali a un sistema di valutazione automatizzato che restituiva un punteggio immediato, una trascrizione, gli errori evidenziati e una rendition di riferimento, mentre un gruppo di controllo riceveva solo il feedback dell'insegnante a tutta la classe. Il gruppo automatizzato è migliorato di più nel complesso (d = 1,03), ma il guadagno è rimasto dove il deficit era scomponibile, il segnale affidabile e la scala sensibile: l'accuratezza linguistica e la coerenza logica sono salite mentre la fedeltà dell'informazione (accordo con i valutatori umani r = 0,12) e la fluidità dell'esecuzione non si sono mosse. L'[[self-regulated-learning|apprendimento autoregolato]] è stato irregolare in modo corrispondente, con esecuzione e monitoraggio che correlavano con i guadagni di punteggio (r = 0,42) mentre pianificazione e motivazione emotiva si collocavano vicino al punto medio della scala, e diversi studenti hanno rimandato il coinvolgimento dopo punteggi bassi anziché analizzarne le cause. Il sistema ha raggiunto la fase di esecuzione del ciclo, non la pianificazione che la precede.
- **Dalla diagnosi automatizzata alla pratica generata:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo & Li (2026)]] collegano in un unico ciclo chiuso l'allineamento audio-punteggio, la quantificazione degli errori e uno strato di Proximal Policy Optimization per l'educazione musicale, trasformando i segnali di errore ritmico (richiamo 91,2%, specificità 98,4%) in ricompense che indirizzano le tracce di pratica generate, e riportano un'interazione Gruppo × Tempo significativa a favore del gruppo con il sistema (beta = 0,52) attraverso un quasi-esperimento di 12 settimane con 120 studenti universitari di musica. Gli autori inquadrano questo come fattibilità tecnica, e la lettura pratica è il triage più che la valutazione: una precisione dell'89,7% significa che circa un errore ritmico segnalato su dieci è un falso allarme, e i revisori esperti dello studio hanno valutato il supporto all'espressione musicale come l'area più debole, quindi i cicli automatizzati si adattano alle esercitazioni tecniche mentre il giudizio espressivo resta agli insegnanti.
- **Scaffolding:** lo [[scaffolding|scaffolding]] e la valutazione formativa lavorano insieme — l'IA può fornire suggerimenti e sollecitazioni al momento giusto, sebbene la ricerca sul feedback sequenziato metta in guardia contro una strutturazione eccessiva.

- **La qualità della rubrica muove l'accordo nella valutazione automatizzata più della scelta del modello.** Su 1.200 risposte d'esame su Linux/bash, [[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo et al. (2026)]] hanno rilevato che aggiungere una rubrica completa più una risposta di riferimento ha migliorato ogni modello (il migliore: Gemini 3.0 Pro, ICC(3,1) = 0,888 contro un tetto umano di 0,949), mentre l'accordo è sceso in modo monotono all'aumentare del livello cognitivo della domanda.
- **Le rubriche generate dall'IA hanno corrisposto alla valutazione umana solo entro un margine.** Quattro rubriche di IA hanno raggiunto l'equivalenza con la linea di base umana entro ±5 punti su 308 risposte di programmazione (correlazioni 0,948-0,973), ma cinque coppie rubrica-compito l'hanno superata, e GPT-4.1/4o ha valutato sistematicamente più severamente sulle rubriche strutturate (−4,46 contro −0,66 per quelle a forma libera) ([[harmogen-ai-assessment-rubric-generation|Mendonça et al., 2026]]).
- **Validità e qualità:** la [[ai-feedback-quality|qualità]] e l'[[assessment-validity|validità]] degli item e del feedback formativi generati dall'IA devono essere valutate; [[ai-ed-evaluation]] fornisce i metodi.

- **La valutazione con IA aggiunge una minaccia alla validità.** Poiché un valutatore con IA può premiare feature irrilevanti per il costrutto come la fluidità linguistica anziché il ragionamento scientifico, un white paper di Stanford/ETS distillato da un incontro di circa 100 leader sostiene che la valutazione dovrebbe accumulare evidenze continue e ricche di contesto anziché certificare output una tantum ([[responsible-assessment-ai-era-stanford-2026|McGee et al. (2026)]]).
- **Mantenere il compito vulnerabile e aggiungere un gemello.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] sostengono che i saggi a casa e i report di ricerca portano un valore formativo sostanziale e dovrebbero essere mantenuti per l'apprendimento, abbinati a un secondo compito che valuta gli stessi esiti e fornisce evidenza sommativa affidabile.
## Rischio: la valutazione come sorveglianza

I sistemi di valutazione formativa possono passare da strumenti di supporto all'apprendimento a infrastrutture di monitoraggio del comportamento. Gli stessi flussi di dati che abilitano il tutoring adattivo possono abilitare il tracciamento punitivo se la [[governance|governance]] è debole. Questo si collega alla [[privacy|privacy]] e al [[well-being|benessere degli studenti]], e argomenta a favore di sistemi formativi che sostengano l'apprendimento anziché sorvegliarlo.

## Implicazioni per l'IA nell'istruzione

- **Far corrispondere il tipo di item all'affidabilità dell'IA:** usare l'IA per le dimensioni verificabili (allineamento concettuale, correttezza) e mantenere il giudizio umano per le dimensioni didattiche (qualità dei distrattori, profondità del feedback).
- **Progettare per l'attuazione, non solo per la fornitura:** il feedback dell'IA aiuta solo quando gli studenti lo selezionano, valutano e applicano — strutturare flussi di lavoro che sostengano l'attuazione.
- **La progettazione del feedback conta più del volume:** il feedback sequenziato o eccessivamente strutturato può ritorcersi contro; dare priorità a un feedback che sostenga il dare senso e l'autonomia dello studente.
- **Mantenere gli educatori nel ciclo:** i sistemi ancorati al curricolo e con l'educatore nel ciclo migliorano la rilevanza e riducono il rumore.
- **Valutare qualità e validità:** valutare gli item e il feedback generati dall'IA per qualità, validità ed [[equity-in-ai-education|equità]], non solo per velocità di generazione.
- **Trattare la valutazione formativa come una filosofia, non come un toolkit.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] sintetizzano la più ampia letteratura sull'istruzione superiore in un paradigma di "valutazione per l'apprendimento" che inquadra il [[feedback]] formativo, continuo e individualizzato come filosofia generale anziché come mero toolkit — bilanciando gli scopi formativi con quelli [[summative-assessment|sommativi]] e mettendo in primo piano l'[[agency|agentività dello studente]], l'autoregolazione e l'abilità [[metacognition|metacognitiva]]. Gli autori individuano cinque pratiche che si rafforzano reciprocamente ([[authentic-assessment|valutazione autentica]], auto- e [[peer-assessment|valutazione tra pari]], ri-valutazione, [[mastery-learning|votazione basata sugli standard]], ungrading) attraverso cui questa filosofia può essere realizzata, rilevando al tempo stesso che la loro adozione resta molto diseguale tra i campi dell'istruzione superiore.

- **La valutazione continua rifonda la stessa documentazione formativa.** L'architettura di riferimento AIM-CAI (un position paper, non un'implementazione) propone di sostituire la valutazione episodica come base di evidenza primaria con un'infrastruttura a sei strati: generazione di evidenza attraverso le piattaforme, serializzazione che preserva il contesto della fonte, traduzione semantica mediata dall'IA, interpretazione psicometrica, profili di competenza longitudinali e governance federata. La tabella dei cambiamenti dell'articolo enuncia la trasformazione: il feedback per singolo compito diventa feedback longitudinale a sostegno dell'orientamento e della riflessione; i voti diventano profili di competenza in evoluzione; le credenziali diventano documenti di sviluppo trasparenti. Lo strato di governance è l'insistenza dell'articolo — sette tensioni nominate (interoperabilità vs. autonomia locale, privacy vs. utilità, agentività dello studente vs. automatizzazione predittiva, sorveglianza vs. supporto, ecc.) ciascuna mappata su rischi e risposte, con l'avvertimento che l'inferenza continua non governata privilegia le norme culturali dominanti. L'affermazione di novità è integrativa: i componenti esistono; il contributo è l'architettura e la mappa della governance. ([[mcnamara-aim-cai-continuous-assessment-2026]])

## Concetti collegati

- [[pedagogical-patterns]] — Le forme sequenziate che la valutazione formativa assume quando l'IA fornisce parte del feedback
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Valutazione sommativa: formati resistenti all'IA (orali, sorvegliati, esami a libro chiuso)

## Articoli collegati
- [[llm-multi-agent-conversation-assessment-2025]] — A four-agent architecture for conversation-based assessment whose assessor hedges toward the middle category (Hou et al. 2025)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[nicola-richmond-programwide-assessment-genai-2025]] — Program-wide approaches to redesigning assessment in the GenAI era
- [[ai-feedback-enactment-workflow-2026]] — Making AI-generated feedback matter: from provision to enactment
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of GenAI
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[sequenced-ai-feedback-learning]] — Impact and pathways of sequenced AI feedback
- [[learner-centered-feedback-ai]] — Enhancing learner-centered feedback with AI
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing
- [[ai-internal-feedback-evaluative-judgments]] — Developing evaluative judgments through AI-supported internal feedback
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: formative assessment scoring with human-in-the-loop prompting
- [[automated-formative-assessments-a-level-sciences]] — High-frequency automated formative assessment
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: curriculum-grounded AI feedback
- [[genai-teacher-feedback-comparison]] — GenAI vs. teacher feedback comparison
- [[chatgpt-feedback-engagement-genai]] — ChatGPT feedback and engagement
- [[code-gen]] — CODE-GEN: validated MCQ generation
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Designing for authentic assessment
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated grading of Linux/bash exams
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — Adaptivity makes feedback effective: evidence from AI-generated feedback on children's plans
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Automated scoring, interpreting performance, and self-regulated learning (Chen & Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Teachers' diagnostic skills in AI-supported formative assessment: from diagnosis to meta-diagnosis
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Perceived usefulness and intention to use LLM-generated feedback in programming across three educational levels
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Adaptive teaching assistance combining generative AI and big data analytics in music education
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[mcnamara-aim-cai-continuous-assessment-2026]] — AI-Mediated Continuous Assessment Infrastructure (AIM-CAI): Connecting Learning Evidence Across Contexts and Time (McNamara & Hasnine 2026)
- [[etq-ai-conversational-teacher-training-2026]] — Conversational AI diagnostic for teaching misconceptions with evidence-grounded dialogue (Miranda & Calvani 2026)
