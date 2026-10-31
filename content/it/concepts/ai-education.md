---
title: "IA in educazione"
created: "2026-10-14T21:57:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
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
translation_of: "concepts/ai-education"
source_updated: "2026-10-28T18:53:23-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **L'IA in educazione (AIED)** — l'ampio campo interdisciplinare che applica l'intelligenza artificiale all'insegnamento e all'apprendimento, e ne studia la progettazione, l'uso, la valutazione e le conseguenze. In quanto concetto ombrello della knowledge base, l'IA in educazione comprende l'**IA per l'educazione** (usare l'IA per migliorare istruzione e valutazione) e l'**educazione sull'IA** (sviluppare l'alfabetizzazione sull'IA e la comprensione critica). Si colloca all'intersezione tra tecnologia didattica, le [[learning-sciences|scienze dell'apprendimento]] — il campo di ricerca empirica che si chiede se il discente sia cambiato anziché solo se uno strumento abbia performato — informatica, [[educational-policy-ai|politica educativa]], [[ethics|etica]] ed [[equity-in-ai-education|equità]]. Questa pagina è un'introduzione al campo e una mappa di ogni concetto trattato dalla knowledge base.

## Domande da considerare

- L'"IA in educazione" abbraccia due direzioni: l'IA per l'educazione (usare l'IA per migliorare l'insegnamento) e l'educazione sull'IA (costruire alfabetizzazione e comprensione critica). Quale ti è più familiare, e quale tendi a trascurare?
- La storia del campo è inquadrata come una tensione ricorrente tra controllo e agency del discente. Mentre osservi l'adozione degli strumenti di IA, dove noti oggi quella stessa tensione in azione?
- L'IA in educazione si colloca all'intersezione tra tecnologia, scienze dell'apprendimento, politica, etica ed equità. Quale di queste lenti applichi naturalmente quando valuti uno strumento di IA — e quale rischi di dimenticare?
- Questa knowledge base organizza il campo in filoni: pedagogia, teorie dell'apprendimento, tecnologie, discipline, valutazione, feedback, parti interessate e governance. Se dovessi mappare il tuo uso dell'IA, in quale filone ti ritroveresti?
- L'AIED include l'insegnare agli studenti a usare l'IA in modo critico come obiettivo in sé. Nel tuo contesto, l'IA è trattata più come materia da insegnare o come strumento da usare — e questo equilibrio rispecchia ciò di cui i discenti hanno effettivamente bisogno?
- Gli studenti possono apprendere l'alfabetizzazione sull'IA usando l'IA in modo critico, non solo imparando cose sull'IA. In che modo un uso pratico e critico può costruire una comprensione che l'istruzione passiva non può?

## Introduzione

L'IA in educazione è l'ombrello che tutte le altre pagine di concetto definiscono collettivamente. La knowledge base organizza il campo nei principali filoni riportati sotto, ciascuno collegato alle pagine di concetto pertinenti.

Una prospettiva [[history-of-aied|storica]] di riferimento, quella di **[[mishra-control-vs-agency-history-2025|Mishra et al.]]**, ripercorre l'AIED dalla cibernetica e dalla conferenza di Dartmouth del 1956 fino ai [[intelligent-tutoring|tutor cognitivi]] e al [[constructivist|costruzionismo]] di Papert, sostenendo che i dibattiti odierni sulla [[generative-ai|GenAI]] ripropongono la tensione fondativa del campo tra controllo e [[agency|agency]].

## Come è organizzata la knowledge base: le pagine ombrello

La copertura concettuale della knowledge base è ancorata da diverse **pagine ombrello** che raggruppano i concetti correlati in filoni navigabili. Sono buoni punti d'ingresso per esplorare il campo:

- **L'IA in educazione** — questa pagina, la panoramica del campo e la mappa di tutta la copertura.
- **L'[[ai-literacy|alfabetizzazione sull'IA]]** — l'ombrello per comprendere, usare e valutare criticamente l'IA, che abbraccia [[prompt-engineering|prompt engineering]], [[critical-thinking|pensiero critico]], [[ethics|etica dell'IA]] e [[reducing-ai-misuse|uso responsabile]]. Accanto a essa, la [[human-ai-collaboration|collaborazione umano–IA]] e l'[[agentic-ai|IA agentica]] inquadrano come persone e IA lavorino insieme.
- **Le [[pedagogy|pedagogie e le strategie didattiche]]** — l'ombrello di come avviene l'insegnamento: i metodi e le strategie didattiche all'interno dei quali l'IA opera ([[active-learning|attivo]], [[collaborative-learning|collaborativo]], [[project-based-learning|basato su progetti]], [[problem-based-learning|basato su problemi]], [[experiential-learning|esperienziale]], [[game-based-learning|basato sul gioco]], [[socratic-method|socratico]], [[scaffolding|scaffolding]] e altri), inclusa la distinta dimensione dell'[[online-teaching-and-learning|insegnamento e apprendimento online]].
- **Le [[learning-theories|teorie dell'apprendimento]]** — l'ombrello di come avviene l'apprendimento: i quadri teorici ([[behaviorism|comportamentismo]], [[cognitive-psychology|cognitivismo]], [[constructivist|costruzionismo]], [[sociocultural-learning|socioculturale]], cognitivo, [[motivation|motivazionale]]) che danno forma alla progettazione e alla valutazione dell'IA.
- **Le [[ai-technologies|tecnologie]]** — l'ombrello dello strato tecnico: i sistemi di IA ([[llm|LLM]], [[generative-ai|IA generativa]], [[multimodal|multimodali]], [[educational-robotics|robotica]]) e le tecniche ([[rag|RAG]], [[prompt-engineering|prompt engineering]], [[reinforcement-learning|apprendimento per rinforzo]], [[llm-training-and-fine-tuning|addestramento dei modelli]], [[agentic-ai|orchestrazione agentica]]) che alimentano l'AIED. La famiglia della modellizzazione del discente — [[knowledge-tracing|knowledge tracing]], [[cognitive-diagnosis|diagnosi cognitiva]], [[simulating-students|simulazione degli studenti]] e i sistemi che le consumano ([[intelligent-tutoring|tutoraggio intelligente]], [[adaptive-learning|apprendimento adattivo]], [[personalized-learning|apprendimento personalizzato]]) — è raggruppata sotto l'ombrello [[student-modeling|Modellizzazione del discente e istruzione adattiva]] all'interno di questo filone tecnico.
- **L'[[discipline-specific-aied|IA nelle discipline]]** — l'ombrello di come l'IA è applicata nelle diverse aree disciplinari ([[math-education|matematica]], [[physics-education|fisica]], [[language-learning|apprendimento delle lingue]], [[cs-education|informatica]], [[writing-education|scrittura]], [[stem-education|STEM]], [[engineering-education|ingegneria]], [[business-education|economia aziendale]], [[teacher-education|formazione degli insegnanti]], [[medical-education|professioni sanitarie]] e altre) — e, oltre le materie accademiche, il filone professionale e applicato che valuta la pratica dimostrata anziché la correttezza ([[nursing-education|infermieristica]], [[information-technology|tecnologie dell'informazione]], [[vocational-education|istruzione e formazione professionale]], [[design-education|design education]]) — e i livelli educativi ([[k-12|K-12]], [[higher-ed|istruzione superiore]], [[adult-learning|apprendimento degli adulti]]).
- **La [[assessment|valutazione]]** (con i filoni [[formative-assessment|formativa]], [[summative-assessment|sommativa]], [[authentic-assessment|autentica]], [[oral-assessment|orale]] e [[automated-assessment|automatizzata]]) — l'ombrello di come l'IA valuta i discenti e rimodella la validità e l'integrità della valutazione.
- **Il [[feedback|feedback]]** — l'ombrello di come il feedback è generato, erogato e usato: il circuito del feedback, la [[ai-feedback-quality|qualità del feedback]], la [[feedback-literacy|alfabetizzazione al feedback]] e i suoi contesti di valutazione ([[formative-assessment|formativo]], [[peer-assessment|tra pari]], [[automated-assessment|automatizzato]]).
- **Le [[stakeholders|parti interessate nell'IA in educazione]]** — l'ombrello di chi sono gli attori: discenti, [[teacher-role|insegnanti]], [[learning-design|progettisti dell'apprendimento]], [[administrator|amministratori]] e [[educational-policy-ai|decisori politici]].
- **La [[ai-ed-evaluation|valutazione dell'IA in educazione]]** e i [[research-methods-aied|metodi di ricerca]]** — gli ombrelli di come sappiamo se l'IA funziona: studi di efficacia, [[benchmark|benchmark]], [[rct|trial controllati randomizzati]], [[meta-analysis-systematic-review|meta-analisi]] e i [[learning-gains|guadagni di apprendimento]] come misura di esito centrale. I lettori dovrebbero anche soppesare le [[limitations-in-aied-research|limitazioni trasversali di queste evidenze]].
- **La [[governance|governance dell'IA]]**, la [[educational-policy-ai|politica educativa sull'IA]]** e l'[[equity-in-ai-education|equità]]** — gli ombrelli dello strato istituzionale, regolatorio e di equità (si vedano anche [[regulation|regolamentazione]] e [[privacy|privacy]]).

Queste pagine ombrello sono collegate in tutte le sezioni che seguono; ciascun filone nomina sia il proprio ombrello sia i concetti che lo costituiscono.

## Due dimensioni dell'IA in educazione

La ricerca sull'IA in educazione abbraccia due direzioni interconnesse:

- **L'IA per l'educazione** — usare sistemi di IA per potenziare insegnamento, apprendimento, valutazione e amministrazione. Comprende il [[intelligent-tutoring|tutoraggio con IA]], l'[[adaptive-learning|apprendimento adattivo]], l'[[personalized-learning|apprendimento personalizzato]], la [[automated-essay-scoring|correzione automatizzata dei saggi]], la [[automated-question-generation|generazione automatizzata di domande]], la [[automated-assessment|valutazione automatizzata]], la [[formative-assessment|valutazione formativa]], la [[learning-analytics|learning analytics]] e i [[feedback|circuiti di feedback]].
- **L'educazione sull'IA** — insegnare a discenti ed educatori a comprendere, usare e valutare criticamente l'IA. Il nucleo è l'[[ai-literacy|alfabetizzazione sull'IA]], sostenuta da [[prompt-engineering|prompt engineering]], [[critical-thinking|pensiero critico]], [[ethics|etica dell'IA]], [[governance|educazione alla governance]], alfabetizzazione digitale e [[reducing-ai-misuse|uso responsabile]].

Queste due dimensioni non sono separate: [[ai-literacy|usare bene l'IA]] richiede di comprenderla, e insegnare sull'IA è arricchito dall'usarla. Questa [[human-ai-collaboration|collaborazione umano-IA]] è un tema centrale.

## Fondamenti dell'IA in educazione

I concetti trasversali e fondativi del campo ancorano la copertura della knowledge base e compaiono per primi nella barra laterale. Si aprono con un gruppo **Fondamentali** — i concetti da cui ogni lettore dovrebbe partire: l'ombrello stesso, i [[misconceptions|fraintendimenti sull'IA]], l'[[ai-literacy|alfabetizzazione sull'IA]], l'[[agentic-ai|IA agentica]], il [[cognitive-offloading|cognitive offloading]], il [[framing-ai-use-for-students|modo in cui l'uso dell'IA è inquadrato per gli studenti]], la [[reducing-ai-misuse|riduzione dell'uso improprio dell'IA]], l'[[academic-integrity|integrità accademica]], il [[teacher-role|ruolo dell'insegnante]], la [[learning-design|progettazione dell'apprendimento]] e lo [[educational-development|sviluppo educativo]]. Il filone del **campo** copre poi [[history-of-aied|la storia del campo]], le [[limitations-in-aied-research|limitazioni trasversali della base di evidenze]], la [[philosophy-of-ai-in-education|sua filosofia]], la mappa delle [[theories-and-frameworks|teorie e dei framework]] e la [[theory-development-aied|sviluppo della teoria]]. I temi trasversali — [[human-ai-collaboration|collaborazione umano–IA]], [[agency|agency del discente]], [[learner-identity|identità del discente]], [[design-thinking|design thinking]], [[curriculum-design|progettazione curricolare]], [[critical-thinking|pensiero critico]] e [[computational-thinking|pensiero computazionale]] — attraversano ogni filone, perché i modelli mentali inaccurati che le persone hanno dell'IA stanno a monte dell'[[ai-misuse-learning-harm|uso improprio]] e di una [[trust-calibration|fiducia]] sotto-calibrata.

## Apprendimento e istruzione

Il modo in cui l'IA sostiene insegnamento e apprendimento è il cuore del campo. I concetti chiave includono:

- **Pedagogie di base:** le [[pedagogy|pedagogie e strategie didattiche]] — l'ombrello della copertura sui metodi didattici della knowledge base — insieme ai [[pedagogical-patterns|pattern pedagogici]] (le sequenze testate in cui quei metodi si risolvono), l'[[active-learning|apprendimento attivo]], l'[[collaborative-learning|apprendimento collaborativo]], il [[group-work|lavoro di gruppo]], l'[[project-based-learning|apprendimento basato su progetti]], l'[[problem-based-learning|apprendimento basato su problemi]], il [[productive-failure|fallimento produttivo]], l'[[inquiry-based-learning|apprendimento basato sull'indagine]], l'[[experiential-learning|apprendimento esperienziale]], l'[[game-based-learning|apprendimento basato sul gioco]], l'[[learning-by-teaching|apprendimento insegnando]], lo [[scaffolding|scaffolding]], il [[socratic-method|metodo socratico]], la [[critical-pedagogy|pedagogia critica]], le [[pedagogical-partnerships|partnership pedagogiche]], lo [[storytelling-in-education|storytelling]], la [[learning-design|progettazione dell'apprendimento]], l'[[online-teaching-and-learning|insegnamento e apprendimento online]] e il [[video-education|video in educazione]].
- **Teorie e processi dell'apprendimento:** l'ombrello delle [[learning-theories|teorie dell'apprendimento]] ([[behaviorism|comportamentismo]], [[cognitive-psychology|cognitivismo]], [[constructivist|costruzionismo]], [[sociocultural-learning|socioculturale]], [[distributed-cognition|cognizione distribuita]], [[situated-learning|apprendimento situato]], [[embodied-learning|apprendimento incarnato]], [[community-of-inquiry|comunità di indagine]]) si affianca a processi rivolti al discente come l'[[self-regulated-learning|apprendimento autoregolato]], la [[self-determination-theory|teoria dell'autodeterminazione]], la [[motivation|motivazione]], l'[[self-efficacy|autoefficacia]], l'[[self-directed-learning|apprendimento autodiretto]], la [[metacognition|metacognizione]], le [[desirable-difficulties|difficoltà desiderabili]], il [[transfer-of-learning|trasferimento dell'apprendimento]], le [[prior-knowledge|conoscenze pregresse]], l'[[icap-framework|engagement cognitivo ICAP]], il [[refutation-text|testo di confutazione]], il [[retrieval-spacing-interleaving|recupero, la distribuzione e l'interleaving]] e la [[activity-theory-aied|teoria dell'attività]].
- **Coinvolgimento ed esperienza del discente:** lo [[student-engagement|coinvolgimento degli studenti]], l'[[help-seeking|ricerca di aiuto]], l'[[social-emotional-learning|apprendimento socio-emotivo]], il [[well-being|benessere]], la [[creativity|creatività]], il [[problem-solving|problem solving]], l'[[mastery-learning|apprendimento per padronanza]] e l'[[student-ai-interaction|interazione studente–IA]] danno forma al modo in cui i discenti incontrano effettivamente l'IA e ne sono influenzati, mentre le [[social-norms-ai-use|norme sociali che si stabiliscono attorno all'uso dell'IA]] decidono quanto apertamente tutto ciò possa essere discusso. Al di là del corso, il [[student-support-and-success|sostegno e il successo degli studenti]] copre il lavoro sul versante istituzionale — orientamento, outreach, invio a servizi e allocazione di un sostegno scarso — dove l'IA muove in modo affidabile il completamento dei compiti ma non la perseveranza o il conseguimento del titolo.

## Tecnologie e tecniche

La pagina sulle [[ai-technologies|tecnologie]] è l'ombrello dello strato tecnico:

- **Modelli e tecniche:** l'[[generative-ai|IA generativa]], gli [[llm|LLM]], la [[rag|retrieval-augmented generation]], i modelli [[multimodal|multimodali]], l'[[educational-nlp|NLP educativa]], l'[[reinforcement-learning|apprendimento per rinforzo]], i [[knowledge-graph|grafi di conoscenza]], i [[educational-robotics|robot in educazione]], l'[[conversational-ai|IA conversazionale]], la [[simulation|simulazione]] e l'[[llm-training-and-fine-tuning|addestramento e il fine-tuning degli LLM]]. Contano anche i metodi sottostanti: il [[machine-learning|machine learning]] è dove questi sistemi vengono costruiti, le [[speech-and-voice-technologies|tecnologie della voce e del parlato]] veicolano il tutoraggio orale e la pratica linguistica, la [[visualization|visualizzazione]] copre dashboard e analisi visuali per discenti e insegnanti, e la [[virtual-and-augmented-reality|realtà virtuale e aumentata]] ospita pratica immersiva il cui strato visivo il modello può ora generare. Anche stili di interazione più nuovi appartengono a questo filone — in primo luogo il [[vibe-coding|vibe coding]], il flusso di lavoro guidato dal linguaggio naturale in cui l'utente specifica un programma sollecitando un LLM e giudica il comportamento risultante anziché leggere o modificare il sorgente. Questo riformula la [[cs-education|programmazione]] come atto di espressione e verifica e abbassa la barriera agli [[teacher-role|utenti finali]] che costruiscono i propri strumenti. Framework di profondità di integrazione come [[samr-model|SAMR]] e teorie dell'adozione come il [[technology-acceptance-model|TAM]] classificano quanto profondamente l'IA è assunta e quanto trasforma il compito.
- **Modellizzazione del discente e sistemi adattivi:** i sistemi tecnici che rappresentano il discente e si adattano a esso sono raggruppati sotto l'ombrello [[student-modeling|Modellizzazione del discente e istruzione adattiva]] — [[knowledge-tracing|knowledge tracing]], [[cognitive-diagnosis|diagnosi cognitiva]], [[simulating-students|simulazione degli studenti]], [[intelligent-tutoring|tutoraggio intelligente]], [[adaptive-learning|apprendimento adattivo]], [[personalized-learning|apprendimento personalizzato]], [[recommender-systems-and-learning-paths|sistemi di raccomandazione e percorsi di apprendimento]], [[pedagogical-agent|agenti pedagogici]], [[affective-tutoring|tutoraggio affettivo]], [[affective-computing|affective computing]], [[human-in-the-loop-ai|IA human-in-the-loop]] e [[learning-analytics|learning analytics]]. Questi risiedono nello strato tecnico perché sono i sistemi di IA stessi, distinti dalle pedagogie che mettono in atto.

- **Piattaforme, apertura e adozione:** lo strato attorno al modello, dove una risorsa didattica viene licenziata, ospitata e pagata anziché costruita. L'[[open-education|educazione aperta]] copre l'insegnamento con contenuti a licenza aperta e la pedagogia che tratta gli studenti come loro produttori, ed è lì che si discutono le questioni di licenza e adattamento che il materiale generato oggi solleva. Sta accanto all'apertura in senso software, all'analisi a livello di piattaforma nelle [[edtech-platform|piattaforme edtech]] e alla ricerca sull'adozione portata dal [[technology-acceptance-model|TAM]].

## L'IA nelle discipline

L'IA è applicata attraverso le discipline e i livelli educativi. La [[discipline-specific-aied|panoramica dell'AIEd nelle discipline]] della knowledge base mappa la copertura per area disciplinare — accanto alle [[learning-sciences|scienze dell'apprendimento]], che non sono una materia insegnata ma il campo di ricerca trasversale che studia l'apprendimento stesso e tratta la materia come una variabile tra le altre:

- **Aree disciplinari:** [[math-education|matematica]], [[statistics-and-data-science-education|statistica e scienza dei dati]], [[physics-education|fisica]], [[chemistry-education|chimica]], [[biology-education|biologia]], [[cs-education|informatica]], [[engineering-education|ingegneria]], [[stem-education|STEM]], [[writing-education|scrittura]], [[language-learning|apprendimento delle lingue]], [[english-education|insegnamento dell'inglese (EAP/EFL/ESL)]], [[science-education|educazione scientifica]], [[environmental-education|educazione ambientale]], [[business-education|economia aziendale, economia e management]], [[humanities-education|scienze umane e sociali]], [[arts-design-and-media-education|arti, design e educazione ai media]], [[medical-education|professioni mediche e sanitarie]], [[legal-education|educazione giuridica]] e i filoni professionali e applicati — [[nursing-education|infermieristica]], [[information-technology|tecnologie dell'informazione]], [[vocational-education|istruzione e formazione professionale]] e [[design-education|design education]].

## Livelli e contesti

Lo stesso strumento di IA incontra contesti molto diversi, e la knowledge base separa il livello educativo dalla pedagogia, così che i risultati non si trasferiscano silenziosamente dall'uno all'altro: le scuole [[k-12|K-12]], l'[[early-childhood-elementary-ai-education|educazione della prima infanzia e primaria]], l'[[higher-ed|istruzione superiore]], l'[[adult-learning|apprendimento degli adulti]], l'[[vocational-education|istruzione e formazione professionale]], l'[[special-education|educazione speciale]] e la [[teacher-education|formazione degli insegnanti]]. I concetti adiacenti al dominio che attraversano i livelli includono la [[universal-design-for-learning|progettazione universale per l'apprendimento]], la [[neurodiversity|neurodiversità]], l'[[multilingual-learning|apprendimento multilingue]] e l'[[social-emotional-learning|apprendimento socio-emotivo]].

## Valutazione e misurazione

L'IA trasforma sia come valutiamo i discenti sia come valutiamo i sistemi di IA stessi:

- **Valutazione e feedback:** [[assessment|valutazione]], [[formative-assessment|valutazione formativa]], [[summative-assessment|valutazione sommativa]], [[authentic-assessment|valutazione autentica]], [[eportfolio|e-portfolio]], [[feedback|feedback]] e [[feedback-literacy|alfabetizzazione al feedback]], [[ai-feedback-quality|qualità del feedback con IA]], [[peer-assessment|valutazione tra pari]], [[oral-assessment|valutazione orale]], [[automated-assessment|valutazione automatizzata]], [[automated-essay-scoring|correzione automatizzata dei saggi]] e [[automated-question-generation|generazione automatizzata di domande]]. Poiché un modello può ora produrre su richiesta lavori finiti plausibili, la knowledge base mette in primo piano la capacità che resta propria del discente: il [[evaluative-judgment|giudizio valutativo]], la capacità di apprezzare la qualità del proprio lavoro, del lavoro dei pari e dell'output dell'IA rispetto a criteri ragionati. È il costrutto su cui convergono diversi studi sul feedback e sulla valutazione autentica — la condizione di feedback ibrido che supera il feedback diretto dell'IA in un esperimento multi-sito, il divario di sostenibilità nel feedback formativo dell'IA, e la mossa pratica di valutare le decisioni che gli studenti prendono anziché solo l'artefatto — ed è una ragione centrale per cui la riprogettazione nell'era dell'IA si sposta dal [[ai-detection|rilevamento]] verso compiti la cui integrità sopravvive all'ispezione. Anche il [[group-work|lavoro di gruppo]] è valutato lungo sia il processo sia il prodotto, laddove i team devono negoziare quale e che tipo di coinvolgimento dell'IA conti come accettabile.
- **Misurazione e validità:** [[assessment-validity|validità della valutazione]], [[psychometrically-aware-ai|IA psicometricamente consapevole]], [[educational-measurement|misurazione educativa]], [[item-response-theory|teoria della risposta all'item]], [[self-report-measures|misure di autovalutazione]] (lo strumento dietro a una quota rilevante di queste evidenze, e una limitazione ricorrente), [[ai-detection|rilevamento dell'IA]], [[remote-proctoring|sorveglianza d'esame a distanza]] e [[academic-integrity|integrità accademica]].

## Metodi di ricerca e valutazione

Il modo in cui sappiamo se l'IA funziona è un filone a sé, e la knowledge base lo tratta come tale:

- **Metodi di ricerca:** i [[research-methods-aied|metodi di ricerca nell'AIED]] come ombrello, con approcci [[qualitative-research|qualitativi]], [[quantitative-research|quantitativi]], [[mixed-methods-research|metodi misti]], [[design-based-research|design-based]] e [[usability-research|di usabilità]], oltre a [[rct|trial controllati randomizzati]], [[meta-analysis-systematic-review|meta-analisi e revisione sistematica]] e [[network-analysis|analisi delle reti]].

Il lavoro di ricerca del campo è ora esso stesso un soggetto a sé. L'[[ai-assisted-educational-research|AI-Assisted Educational Research]] copre l'IA usata come strumento per ricerca bibliografica, screening, codifica qualitativa, analisi e scrittura, inclusa la ricerca dei professionisti come lo scholarship of teaching and learning. Resta distinta dai disegni usati per studiare ciò che l'IA fa ai discenti.

- **Valutazione dei sistemi di IA:** la [[ai-ed-evaluation|valutazione dell'IA in educazione]] e i [[benchmark|benchmark]] per giudicare la capacità di un sistema, con i [[learning-gains|guadagni di apprendimento]] come esito che conta, e le [[limitations-in-aied-research|limitazioni trasversali]] di queste evidenze e [[interpreting-and-applying-aied-research|come leggere un singolo studio]] come contrappeso cautelativo.

## Persone

L'IA in educazione cambia i ruoli di ogni parte interessata. La pagina sulle [[stakeholders|parti interessate nell'IA in educazione]] è l'ombrello che le copre tutte:

- **Discenti:** l'[[student-experience|esperienza studentesca]], lo [[career-development-and-readiness|sviluppo di carriera e la preparazione]] e l'[[anxiety-and-stress|ansia e lo stress da IA]] danno forma al modo in cui gli studenti incontrano l'IA.
- **Famiglie e comunità:** i [[parents-and-families|genitori e le famiglie]] sono il pubblico che le scuole interpellano più spesso riguardo all'IA e quello con meno ricerche a sostegno delle indicazioni fornite, quindi le loro preoccupazioni appartengono al quadro delle parti interessate anziché restarne fuori.
- **Insegnanti e framework didattici:** la [[teacher-ai-competency|competenza degli insegnanti sull'IA]], il [[tpack|technological pedagogical content knowledge (TPACK)]], [[samr-model|SAMR]] e lo [[educational-development|sviluppo educativo]] riguardano la preparazione e il sostegno degli educatori.
- **Costruttori:** gli [[educational-technology-developers|sviluppatori di tecnologie educative]] — i progettisti di prodotto, sviluppatori di software, learning engineer e progettisti di analytics che trasformano una capacità del modello in qualcosa che un'istituzione può acquistare. Sono un pubblico distinto dai professionisti e dagli amministratori sopra citati, e si collocano al di fuori delle istituzioni che adottano i loro strumenti, ed è per questo che impostazioni predefinite, co-progettazione e manutenzione post-finanziamento compaiono in questa knowledge base come questioni pedagogiche anziché commerciali.

## Istituzioni e politica

Lo strato istituzionale è dove le decisioni sull'IA sono effettivamente prese e difese: [[administrator|amministratori]] e leader istituzionali, la [[educational-policy-ai|politica educativa sull'IA]], la [[governance|governance dell'IA]], il [[change-management|change management]] come lavoro di far attecchire un'adozione, la [[regulation|regolamentazione dell'IA]] e le questioni di acquisto e piattaforma che derivano dall'[[technology-acceptance-model|adozione della tecnologia]], dall'[[open-source|open source]] e dalle [[edtech-platform|piattaforme edtech]], accanto all'[[lifelong-learning|apprendimento professionale e permanente]] e alla [[professional-training|formazione professionale]].

## Equità, etica e uso responsabile

Equità, accesso e responsabilità sono centrali nell'IA in educazione:

- **Equità e accesso:** l'[[equity-in-ai-education|equità]], i [[differential-effects-across-learner-groups|differenziali d'effetto tra gruppi di discenti]] (la domanda su per chi un risultato valga), il [[digital-divide|divario digitale]], la [[bias-mitigation|mitigazione del bias]], la [[culturally-relevant-pedagogy|pedagogia culturalmente rilevante]], l'[[multilingual-learning|apprendimento multilingue]], l'[[inclusive-learning|apprendimento inclusivo]], l'[[accessibility|accessibilità]], le [[assistive-technology|tecnologie assistive]], la [[neurodiversity|neurodiversità]], la [[universal-design-for-learning|progettazione universale per l'apprendimento]] e gli studi sul [[global-south|Sud globale]].
- **Etica e responsabilità:** l'[[ethics|etica dell'IA]], l'[[ai-misuse-learning-harm|uso improprio dell'IA e il danno all'apprendimento]], le [[legal-issues-and-risks|questioni legali e i rischi]], la [[ai-use-disclosure|dichiarazione dell'uso dell'IA]], le [[guardrails|guardrail]], la [[privacy|privacy]], il [[hallucination-risk|rischio di allucinazione]], la [[ai-sycophancy|sycophancy dell'IA]], la [[trust|fiducia]], la [[trust-calibration|calibrazione della fiducia]], la [[reducing-ai-misuse|riduzione dell'uso improprio dell'IA]], il [[framing-ai-use-for-students|modo in cui l'uso dell'IA è inquadrato per gli studenti]], la [[pedagogical-safety|sicurezza pedagogica]], la [[sustainability|sostenibilità]] e il [[cognitive-offloading|cognitive offloading]].

Una [[meta-analysis-systematic-review|revisione sistematica]] della letteratura etica del campo ([[agarwal-ethical-values-norms-aied-2026|Agarwal et al. 2026]], 25 articoli) consolida l'etica dell'AIED in sei valori etici principali — non discriminazione, gestione dei dati, supervisione umana, buona volontà, spiegabilità e appropriatezza educativa — e mappa le norme etiche su una matrice stakeholder-per-valore. Rileva che gli utenti finali sono ampiamente passivi nella letteratura etica (le voci degli studenti essenzialmente assenti) e chiede di integrare l'etica nella progettazione dell'AIED e una maggiore attenzione alla dimensione educativa (pedagogica) dell'etica dell'AIED.

## Temi emergenti e trasversali

Diversi temi attraversano il campo:

- **Fiducia e uso critico:** la [[trust|fiducia]], la [[trust-calibration|calibrazione della fiducia]], la [[ai-sycophancy|sycophancy dell'IA]], il [[critical-thinking|pensiero critico]], il [[cognitive-offloading|cognitive offloading]], la [[critical-pedagogy|pedagogia critica]] e la [[reducing-ai-misuse|riduzione dell'uso improprio dell'IA]] (si veda anche il [[framing-ai-use-for-students|modo in cui l'uso dell'IA è inquadrato per gli studenti]]). Il modo in cui discenti e insegnanti decidono di adottare l'IA e di farvi affidamento è modellato dalla ricerca sull'[[technology-acceptance-model|accettazione della tecnologia]], mentre gli studi sul [[global-south|Sud globale]] mettono in primo piano equità e contesto culturale nell'adozione. Empiricamente, il modo in cui l'IA si spiega dà forma a questa fiducia: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] hanno mostrato che l'[[explainable-ai|IA spiegabile]] costruisce la fiducia degli insegnanti nelle raccomandazioni dell'IA attraverso la comprensibilità, con spiegazioni guidate dal dominio (nel linguaggio curricolare) ritenute affidabili e accettate più dell'output data-driven sull'importanza delle feature.
- **L'evoluzione del campo:** la knowledge base ripercorre l'IA in educazione dai primi [[intelligent-tutoring|sistemi di tutoraggio intelligente]] e dal [[knowledge-tracing|knowledge tracing]] al [[intelligent-tutoring|tutoraggio]] guidato dagli LLM, agli [[pedagogical-agent|agenti]] e all'[[agentic-ai|IA agentica]] — uno spostamento rapido da studi tool-centric a framework sociotecnici ([[design-thinking|design thinking]], [[curriculum-design|progettazione curricolare]], [[institutional-change-framework-ai|cambiamento istituzionale]]), e da sistemi scritti a mano a flussi di lavoro guidati dall'utente in cui un discente o un [[teacher-role|non programmatore]] specifica il comportamento in linguaggio naturale ([[vibe-coding|vibe coding]]). [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] formalizzano questa traiettoria con il loro framework AI×Ed, ripercorrendo gli articoli attraverso quattro decenni di atti di convegno per mostrare che il campo si è mosso da un mix diversificato — inclusa una ricerca sostanziosa che trattava l'IA come analogia dell'intelligenza e dell'apprendimento umani — verso un focus quasi esclusivo su usi applicati, data-driven e rivolti ai ricercatori, una svolta che l'ascesa degli [[llm|LLM]] sembra ora in parte invertire (tre dei quattro articoli "IA-come-analogia" ad AIED 2024 erano basati su LLM).
- **Emozione, ansia e futuri di carriera:** l'IA induce e dà forma a risposte emotive — l'[[anxiety-and-stress|ansia e lo stress da IA]] che abbracciano la sorveglianza degli esami, le paure sull'integrità e lo spiazzamento di carriera — mentre lo [[career-development-and-readiness|sviluppo di carriera e la preparazione]] riguardano come l'educazione prepari i discenti a un mercato del lavoro sconvolto dall'IA (si veda anche il [[well-being|benessere]]).

## Maturità del campo

La knowledge base riflette un campo in rapida evoluzione — dai primi sistemi di tutoraggio intelligente al tutoraggio guidato dagli LLM e all'IA agentica; dagli strumenti di integrità accademica focalizzati sul rilevamento alla riprogettazione della valutazione; da studi tool-centric a framework sociotecnici e focalizzati sull'equità. La base di evidenze enfatizza sempre più [[research-methods-aied|metodi di ricerca]] rigorosi, [[ai-ed-evaluation|valutazione]], disegni [[rct|sperimentali]] ed esiti di lungo periodo.

## Collegamenti

L'IA in educazione si collega a ogni concetto della knowledge base — è il campo che tutte le altre pagine di concetto definiscono collettivamente. Usa questa pagina come punto di partenza per navigare l'intera knowledge base.

## Idee sbagliate comuni

**"L'IA in educazione è un unico campo con un'unica base di prove."** È un ombrello su filoni distinti — discipline, livelli, valutazione, metodi di ricerca, istituzioni, equità — che differiscono nei metodi, nelle misure di esito e nella maturità. Un risultato di un filone non si trasferisce a un altro, ed è per questo che la base di conoscenza è organizzata così anziché come un'unica letteratura.

**"Uno strumento che migliora gli esiti di un corso migliora il successo degli studenti."** Il filone istituzionale mostra lo schema opposto: nel [[student-support-and-success|sostegno e il successo degli studenti]], l'IA **sposta in modo affidabile il completamento dei compiti ma non la perseveranza o il conseguimento del titolo**. Un intervento può vincere ogni misura interna al corso e lasciare piatto l'esito di completamento.

**"La prestazione di una tecnologia è prova di apprendimento."** Il campo si colloca all'intersezione tra tecnologia didattica e [[learning-sciences|scienze dell'apprendimento]], e la distinzione tra le due è esattamente questa: se un discente è cambiato, non solo se uno strumento ha funzionato. Una dimostrazione è un'affermazione sullo strumento.

**"Poiché l'IA è general-purpose, un risultato trovato ovunque vale ovunque."** La generalità della tecnologia non crea generalità delle prove. I filoni delle discipline, dei livelli e dei contesti esistono perché lo stesso strumento si comporta diversamente al loro interno, e un risultato trasportato senza modifiche oltre un confine è un'estrapolazione.

**"La maturità del campo si legge dal suo volume di pubblicazioni."** Volume e maturità divergono; il filone dei metodi di ricerca documenta debolezze ricorrenti di progettazione che il volume non corregge, e i framework si moltiplicano più in fretta di quanto vengano testati.

## Concetti collegati
- [[pedagogical-patterns]] — The tested sequences that operationalize the field's pedagogies
- [[ai-literacy]] — umbrella: understanding, using, and evaluating AI
- [[human-ai-collaboration]] — umbrella: how people and AI work together
- [[pedagogy]] — umbrella: teaching methods and strategies
- [[learning-theories]] — umbrella: how learning happens
- [[ai-technologies]] — umbrella: models, techniques, and systems
- [[discipline-specific-aied]] — umbrella: AI across subject areas and levels
- [[assessment]] — umbrella: how AI assesses learners and reshapes validity
- [[feedback]] — umbrella: how feedback is generated, delivered, and used
- [[stakeholders]] — umbrella: who the actors are
- [[learners]] — umbrella: the learner-side concepts (experience, identity, agency, interaction, learner models)
- [[ai-ed-evaluation]] — umbrella: how we know whether AI works
- [[research-methods-aied]] — umbrella: efficacy research methods
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[governance]] — umbrella: the institutional and regulatory layer
- [[educational-policy-ai]] — umbrella: policy, guidance, and implementation
- [[equity-in-ai-education]] — umbrella: fairness, access, and inclusion
- [[learning-sciences]] — the empirical field behind AIED
- [[ethics]] — the ethical dimensions of AI in education
- [[misconceptions]] — the mental models people bring to AI
- [[interpreting-and-applying-aied-research]] — reading a study, and carrying a finding into practice
- [[limitations-in-aied-research]] — cross-cutting limits of the evidence base
- [[meta-analysis-systematic-review]] — what the reviews and meta-analyses establish
- [[history-of-aied]] — how the field evolved
- [[philosophy-of-ai-in-education]] — the philosophical foundations
- [[theories-and-frameworks]] — the map of theory and framework nodes
- [[theory-development-aied]] — building and revising theory

## Articoli collegati

Revisioni di campo sull'IA in educazione — gli studi che esaminano l'intero campo o un intero livello educativo anziché un singolo argomento:

- [[rismanchian-ai-education-four-decades-aixed-2026]] — The evolution of AI-and-education research across four decades (AIxEd framework)
- [[mishra-control-vs-agency-history-2025]] — Control vs. agency: a history of AI in education
- [[genai-higher-education-systematic-review-2026]] — Generative AI in higher education: systematic review of 125 studies
- [[stanford-evidence-base-ai-k12-2026]] — The evidence base on AI in K-12: a review of 818 papers
- [[genai-educational-outcomes-meta-analysis]] — Generative AI and educational outcomes: comprehensive meta-analysis
