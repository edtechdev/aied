---
title: Teorie dell'apprendimento
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories, metacognition, self-regulated-learning]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_faqs: [research-gaps-aied]
translation_of: "concepts/learning-theories"
source_updated: "2026-10-28T19:24:33-04:00"
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

> **Teorie dell'apprendimento** — la famiglia di quadri teorici che spiegano come avviene l'apprendimento, e il concetto ombrello delle idee legate alla teoria in questa knowledge base. Nell'[[ai-education|IA nell'educazione]], le teorie dell'apprendimento plasmano sia il modo in cui i sistemi di IA vengono progettati (la pedagogia che incarnano) sia il modo in cui il campo interpreta se l'IA "funziona": lo stesso strumento può essere un supporto graduato (scaffold) sotto ipotesi [[constructivist|costruttiviste]], un motore di rinforzo sotto il [[behaviorism|comportamentismo]], o un rischio di carico cognitivo sotto la Teoria del Carico Cognitivo.

## Domande da considerare

- Pensa a un tutor di IA o a un sistema adattivo che hai usato o visto. Quali ipotesi faceva su come apprendono le persone — premiava le risposte corrette (comportamentismo), costruiva comprensione (costruttivismo) o gestiva lo sforzo mentale (carico cognitivo)? I suoi creatori hanno mai dichiarato queste ipotesi?
- La pagina descrive una lacuna ricorrente: il discorso teorico propugna il costruttivismo mentre le implementazioni di IA ricadono per default su meccaniche di esercitazione e feedback. Dove hai visto uno strumento sostenere di supportare l'apprendimento profondo quando in realtà si limita a rinforzare risposte superficiali?
- Lo stesso strumento di IA può apparire un successo sotto una teoria e un fallimento sotto un'altra — punteggi gonfiati nei compiti a casa si leggono come apprendimento nel comportamentismo, ma come incapacità di costruire una comprensione duratura nel costruttivismo. Quale lente è più equa per giudicare se gli studenti hanno effettivamente imparato?
- Poiché ogni tutor di IA incorpora una teoria, che i suoi progettisti lo dichiarino o meno, "funziona?" potrebbe essere la domanda sbagliata. Qual è la domanda migliore da porsi su un'IA educativa, date le teorie che potrebbe incarnare?
- L'IA generativa spinge gli educatori a considerare nuove teorie — come l'apprendimento come co-costruzione iterativa tra esseri umani e IA, o l'IA come partner cognitivo lungo l'arco della vita. L'ascesa dell'IA richiede davvero nuove teorie dell'apprendimento, o quelle esistenti bastano ancora?
- La misurazione dei guadagni di apprendimento è essa stessa "carica di teoria": uno strumento costruito su una teoria potrebbe non catturare i guadagni che un'altra prevede. Come potrebbero due ricercatori con diversi orientamenti teorici guardare agli stessi dati e giungere a conclusioni opposte sul fatto che uno strumento di IA abbia funzionato?

## Introduzione

Questo è il concetto ombrello del filone sulle teorie dell'apprendimento della knowledge base. Le teorie dell'apprendimento stanno al cuore dell'IA nell'educazione perché ogni tutor di IA, sistema adattivo e strumento di feedback incorpora ipotesi su come apprendono le persone — che i progettisti lo dichiarino o meno. La knowledge base documenta queste teorie singolarmente e le tratta come la lente concettuale attraverso cui valutare il progetto e gli effetti dell'IA. Il campo di ricerca che verifica questi quadri teorici è una pagina a sé: [[learning-sciences|le scienze dell'apprendimento]] studiano l'apprendimento in modo empirico — esperimenti, prove in classe e design-based research — e trattano una teoria come qualcosa da confermare o falsificare, mentre questa pagina raccoglie i quadri teorici stessi; le due espressioni sono tenute distinte in questa knowledge base, con il singolare "scienza dell'apprendimento" (learning science) a nominare questo filone teorico.

### Il panorama delle teorie dell'apprendimento

La knowledge base documenta diverse famiglie di teorie dell'apprendimento, ciascuna con i propri concetti:

- **Teorie classiche dell'apprendimento.** Il [[behaviorism|comportamentismo]] (l'apprendimento come cambiamento comportamentale osservabile, attraverso rinforzo ed esercitazione ripetuta) e il [[constructivist|costruttivismo]] (l'apprendimento come costruzione attiva di conoscenza) sono i due poli che ricorrono più spesso nella ricerca sull'IA. Il campo mostra frequentemente una lacuna di "costruttivismo a parole, comportamentismo nei fatti", in cui il discorso teorico propugna la costruzione mentre le implementazioni di IA ricadono per default su meccaniche di esercitazione e feedback.([[ai-vocational-education-training-review]]) La [[cognitive-psychology|psicologia cognitiva]] è il terzo polo classico — l'apprendimento come cambiamento delle rappresentazioni mentali interne — ed è la teoria più responsabile dei contributi distintivi dell'AIED ([[knowledge-tracing]], [[cognitive-diagnosis]], [[student-modeling]], [[intelligent-tutoring]]).
- **Teorie socioculturali e dello sviluppo.** La [[sociocultural-learning|teoria socioculturale]] sostiene che apprendimento e sviluppo emergano attraverso la partecipazione sociale e siano mediati da strumenti culturali e da altri più competenti — abbracciando la [[sociocultural-learning|Zona di Sviluppo Prossimale]], lo [[scaffolding]], l'apprendistato, le comunità di pratica e la [[distributed-cognition|cognizione distribuita]]. Nell'era dell'IA, l'[[generative-ai|IA generativa]] è sempre più inquadrata come un *agente di mediazione* (mediational agent) che al tempo stesso media l'attività e genera contributi contingenti all'interazione.([[generative-ai-mediational-agent-sociocultural-2026]])
- **Cognizione e architettura cognitiva.** La [[cognitive-psychology|psicologia cognitiva / cognitivismo]] è l'ombrello di questa famiglia: la Teoria del Carico Cognitivo (come i limiti della memoria di lavoro plasmino l'istruzione), la Teoria dei Due Processi (elaborazione rapida intuitiva vs. lenta deliberativa) e la [[metacognition]] (monitorare e regolare il proprio apprendimento) spiegano i meccanismi *interni* che gli strumenti di IA attivano o aggirano.
- **Motivazione e autodirezione.** La [[self-determination-theory|teoria dell'autodeterminazione]] (autonomia, competenza, relazione), l'[[self-efficacy|autoefficacia]] (fiducia nelle proprie capacità), l'[[self-regulated-learning|apprendimento autoregolato]] (definizione di obiettivi, monitoraggio e aggiustamento) e la [[motivation|motivazione]] spiegano perché chi apprende si rapporta all'IA nel modo in cui lo fa.
- **Contesto e attività di apprendimento.** L'[[experiential-learning|apprendimento esperienziale]], l'[[active-learning|apprendimento attivo]], l'[[project-based-learning|apprendimento basato su progetti]], l'[[collaborative-learning|apprendimento collaborativo]], il [[transfer-of-learning|trasferimento dell'apprendimento]], le [[desirable-difficulties|difficoltà desiderabili]] e l'[[embodied-learning|apprendimento incarnato]] descrivono i tipi di attività e di contesto che producono apprendimento duraturo.

### Teorie dell'apprendimento e guadagni di apprendimento

Le teorie dell'apprendimento sono in ultima analisi valutate dai loro esiti, e il concetto di [[learning-gains|guadagni di apprendimento]] della knowledge base è il punto in cui la teoria incontra l'evidenza. Ciascuna teoria fa una previsione diversa su ciò che *conta* come apprendimento e su come misurarlo: il comportamentismo prevede guadagni osservabili di prestazione in compiti di esercitazione e feedback; il costruttivismo prevede una comprensione più profonda che si trasferisce a problemi nuovi; la teoria socioculturale prevede guadagni nella partecipazione e nella risoluzione di problemi mediata; la teoria del carico cognitivo prevede guadagni solo quando l'istruzione rispetta i limiti della memoria di lavoro. Per questo la misurazione dei [[learning-gains|guadagni di apprendimento]] è carica di teoria — uno strumento costruito su una teoria potrebbe non catturare i guadagni che un'altra prevede. Nell'era dell'IA, la netta divergenza tra la prestazione assistita dall'IA e i [[learning-gains|guadagni di apprendimento]] non assistiti (vedi [[generative-ai-reduced-study-time-math]], [[stromberg-generative-ai-learning-penalty-secondary-2026]]) può essere letta attraverso questa lente: una lettura comportamentista vede i punteggi gonfiati nei compiti a casa come un successo, mentre una lettura costruttivista, focalizzata sulla comprensione duratura, vede la stessa evidenza come un fallimento dell'apprendimento. Collegare le teorie alla [[ai-ed-evaluation|valutazione]] e agli [[learning-gains|esiti misurati]] è quindi essenziale per decidere quale lente teorica un dato sistema di IA soddisfi effettivamente.

### Perché le teorie dell'apprendimento contano per l'IA nell'educazione

Le teorie dell'apprendimento contano per tre ragioni:

- **Prevedono gli effetti dell'IA.** Che uno strumento di IA migliori o danneggi l'apprendimento dipende da quale meccanismo attiva. Un tutor che consegna le risposte danneggia nell'ottica costruttivista (aggira la costruzione), è neutro nel comportamentismo (rinforza) e solleva preoccupazioni di carico cognitivo (scarica invece di costruire). I concetti di [[cognitive-offloading|scaricamento cognitivo]] e [[cognitive-offloading|Over-Reliance]] della knowledge base colgono il lato del rischio di questo fenomeno.
- **Espongono la lacuna tra teoria e pratica.** Il lavoro empirico trova ripetutamente che le implementazioni di IA incarnano teorie diverse da quelle che il discorso teorico rivendica — in particolare un linguaggio costruttivista abbinato a meccaniche comportamentiste di esercitazione e pratica.([[ai-vocational-education-training-review]]) Valutare l'IA richiede quindi di chiedersi *quale* teoria un sistema incarni effettivamente, non semplicemente se "funzioni".
- **Sono attivamente ripensate.** L'IA generativa [[prompt-engineering|spinge]] gli educatori a riconsiderare se le teorie classiche bastino. Il [[generativism-learning-theory|generativismo]] propone che l'apprendimento nell'era dell'IA avvenga sempre più attraverso una co-costruzione iterativa tra apprendenti umani e sistemi di IA, estendendo piuttosto che sostituendo le quattro classiche (comportamentismo, cognitivismo, costruttivismo, connessionismo).([[generativism-learning-theory]])

### Nuove direzioni teoriche dal lavoro recente in AIED

Il lavoro teorico recente estende il filone classico in diverse direzioni, ciascuna ri-centrando la relazione umano–IA anziché trattare l'IA come uno strumento neutro:

- **Co-[[regulation|regolazione]] umano–IA.** Un quadro evolutivo posiziona l'IA non come strumento esterno ma come **partner cognitivo** che co-regola pensiero, apprendimento e autocontrollo lungo l'arco della vita.([[ai-cognitive-partner-co-regulation-learning]]) Attingendo alla funzione esecutiva, alla [[metacognition]], alla cognizione distribuita e allo sviluppo socioculturale, assegna all'IA quattro ruoli — supporto graduato, supporto metacognitivo, memoria esterna / sistema di [[cognitive-offloading|scaricamento cognitivo]], e partner nelle decisioni — con il quadro più rilevante a partire dalla fanciullezza avanzata.
- **Cognizione d'insieme (Ensemble Cognition).** Un quadro [[philosophy-of-ai-in-education|filosofico]] riconcettualizza il pensiero come emergente dalle interazioni dinamiche tra agenti umani e artificiali, anziché risiedere unicamente nelle menti individuali.([[ensemble-cognition-philosophy-ai-education]]) Mette in discussione il "paradigma della coscienza" (le assunzioni di autonomia, coscienza e stabilità) e articola cinque caratteristiche — agenzia distribuita, centralità dinamica, orchestrazione cognitiva, integrazione multi-rappresentazionale e commutazione sensibile al contesto — distinguendo l'**agenzia funzionale** dell'IA dalla responsabilità morale.
- **Crescita [[self-directed-learning|autodiretta]] / A2PL.** Un'estensione dell'[[self-directed-learning|apprendimento autodiretto]] integra l'IA generativa con i [[learning-analytics|learning analytics]] per coltivare la **Crescita Autodiretta**, operazionalizzata attraverso il modello Aspire to Potentials for Learners (A2PL).([[self-directed-growth-generative-ai-learning-analytics]]) Riconfigura le aspirazioni di chi apprende (umanistiche), il pensiero complesso (costruttivista) e l'autovalutazione (pragmatica) in un'unica competenza, posizionando la GAI come un supporto collaborativo non prescrittivo anziché come un fornitore di contenuti.

- **Sovra-generalizzazione ingannevole.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] estendono la tradizione ACT-R / Knowledge-Learning-Instruction teorizzando quando la correttezza osservata maschera una comprensione condizionale incompleta: chi apprende compila una produzione sovra-generalizzata che omette un vincolo di applicazione pur continuando a comportarsi correttamente — una modalità di fallimento che i sistemi adattivi di mastery, e persino l'istruzione tradizionale, possono mancare, a meno che non verifichino *quando astenersi* da un'azione.
- **Teoria KLI eseguibile.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger e Carvalho (2025)]] fondano il quadro Knowledge-Learning-Instruction in un modello computazionale eseguibile (il quadro Apprentice Learner con un meccanismo di memoria in stile ACT-R) che riproduce un'interazione di crossover nei dati umani: la pura pratica aiuta la memoria dei fatti verbatim (ritardando l'oblio), mentre la pratica integrata con esempi aiuta l'induzione di abilità generalizzabili. Poiché la KLI lega la conoscenza costante (fatti) ai processi di memoria e la conoscenza variabile (abilità) all'induzione, il risultato è un'interazione contenuto–trattamento prevista, anziché una contraddizione tra le raccomandazioni sul test e quelle sugli esempi risolti — e il successo del modello solo quando è presente un meccanismo di memoria dimostra che pratica ed esempi svolgono ruoli distinti e complementari.
- **L'incarnazione come sfida ontologica al paradigma dell'IA.** [[videla-embodied-ai-education-choreography|Videla, Penny e Ross (2026)]] argomentano che un divario ontologico separa la cognizione incarnata ed enattiva dall'idioma rappresentazionale che l'IA incarna, quindi l'IA dovrebbe essere de-centrata come centro epistemico anziché trattata come uno strumento neutro.

### Come la knowledge base organizza questo filone

Anziché trattare le teorie dell'apprendimento come filosofia astratta, la knowledge base fonda ciascuna nella ricerca sull'IA nell'educazione che la utilizza. Le pagine [[constructivist|costruttivista]] e [[behaviorism|comportamentista]] documentano come i progetti di IA incarnino (o tradiscano) ciascuna teoria; la Teoria del Carico Cognitivo, l'[[self-regulated-learning|apprendimento autoregolato]], la [[metacognition]] e il [[transfer-of-learning|trasferimento dell'apprendimento]] collegano la teoria a meccanismi ed esiti specifici dell'IA. Questo rispecchia il modo in cui la knowledge base tratta altri domini ombrello come il [[feedback]] e la [[assessment|valutazione]] — un sistema coerente di concetti interagenti piuttosto che pagine isolate.

### Le teorie dell'apprendimento e l'"educazione sull'IA"

Le teorie dell'apprendimento compaiono anche come contenuto nei curricoli di [[ai-literacy|alfabetizzazione sull'IA]]: chi apprende studia comportamentismo, cognitivismo, costruttivismo e connessionismo per comprendere le assunzioni [[pedagogy|pedagogiche]] dietro gli strumenti che usa.([[generativism-learning-theory]]) Insegnare questo filone fornisce a studenti (ed educatori) il vocabolario per criticare il motivo per cui un prodotto di IA è costruito in un certo modo — e se le sue meccaniche servono effettivamente l'obiettivo di apprendimento in questione.

- **L'agente di mediazione.** Warschauer, Tate e Ritchie (2026) argomentano che l'IA generativa dissolve la distinzione socioculturale tra mezzi di mediazione e interazione sociale, proponendo l'*agente di mediazione* — un sistema che al tempo stesso media l'azione e genera contributi contingenti e non responsabili, occupando uno spazio ibrido tra uno strumento e un partner sociale. Ne derivano cinque abitudini di partecipazione antropocentriche (primato della cognizione umana, [[student-engagement|coinvolgimento]] intenzionale, agenzia di supervisione, vigilanza epistemica, autoregolazione riflessiva).([[generative-ai-mediational-agent-sociocultural-2026]])

### Teorie proposte per l'era dell'IA

Accanto alle famiglie classiche, la knowledge base documenta teorie scritte specificamente per l'apprendimento con sistemi di IA, e queste portano le implicazioni di progetto che le teorie più vecchie lasciano aperte. [[yan-agentivism-learning-theory-ai-2026|L'agentivismo (Yan e Gašević 2026)]] è un esempio di medio raggio: definisce l'apprendimento come crescita duratura della capacità umana anziché come completamento riuscito di un compito, nomina quattro meccanismi (agenzia delegata, monitoraggio e verifica epistemica, interiorizzazione ricostruttiva e trasferimento sotto supporto ridotto) e formula sei proposizioni verificabili, tra cui quella per cui un supporto dell'IA che preserva la responsabilità di chi apprende nella definizione del problema, nella fissazione dei criteri e nella giustificazione produce un apprendimento più forte rispetto a un supporto che consegna le risposte.

[[elsayed-pedagogical-symbiosis-posthuman-learner|La Simbiosi Pedagogica di Elsayed (2026)]] avanza un'affermazione ontologica più forte: chi apprende è un'entità *post-umana* la cui cognizione è ibrida anziché assistita da strumenti, organizzata da quattro principi: scaricamento cognitivo e aumento, co-costruzione epistemica, simbiosi metacognitiva e formazione dinamica dell'identità; operazionalizzata come una rubrica del Symbiotic Portfolio e un ruolo docente di "Coreografo Cognitivo"; è esplicitamente non verificata.

## Idee sbagliate comuni

**"Una delle teorie dell'apprendimento è quella giusta, quindi scegliere la teoria è questione di gusto."** Le teorie fanno affermazioni diverse su che cosa conti come evidenza, quindi gli stessi dati possono sostenere conclusioni opposte. Il caso più chiaro: punteggi gonfiati nei compiti a casa si leggono come **apprendimento sotto il comportamentismo** e come **fallimento nel costruire una comprensione duratura sotto il costruttivismo**. La scelta teorica determina quindi se un intervento è riuscito, il che la rende una decisione di misurazione anziché una preferenza stilistica.

**"Uno strumento che sostiene l'apprendimento profondo apparirà come apprendimento profondo sotto qualsiasi quadro."** Apparirà come successo sotto uno e come fallimento sotto un altro, come sopra. È per questo che le misure di esito del campo devono essere giustificate rispetto a una teoria dichiarata anziché prese in prestito come se fossero neutre.

**"Più teorie significano un campo meglio compreso."** L'accumulo senza arbitraggio è l'opposto del progresso. Le teorie proposte per l'era dell'IA si moltiplicano più in fretta di quanto vengano testate, e il segno della maturità è la risoluzione di previsioni concorrenti — il che richiede disegni in grado di distinguerle, non cataloghi che le accolgono.

**"L'educazione sull'IA è la stessa cosa dell'IA nell'educazione, in termini teorici."** Attingono a filoni diversi: una chiede come gli apprendenti giungano a comprendere l'IA come materia, l'altra come l'IA cambi il modo in cui avviene l'apprendimento. Confonderle produce revisioni della letteratura che mescolano due basi di evidenza distinte e non riportano un quadro coerente di nessuna delle due.

## Implicazioni per la pratica

**Per i docenti**

- Scegliere la teoria in base a ciò che serve: spiegare come avviene l'apprendimento, descrivere lo stato di chi apprende o spiegare perché una pratica si diffonde. Applicare lo strato sbagliato misura la variabile giusta contro la previsione sbagliata.
- Dichiarare esplicitamente l'impegno teorico della misura di esito, poiché punteggi gonfiati nei compiti a casa si leggono come successo sotto il comportamentismo e come fallimento sotto il costruttivismo a partire dagli stessi dati.
- Quando un quadro non riesce a prevedere una differenza tra configurazioni, non è testabile nel vostro contesto e non vi aiuterà a decidere.

**Per gli sviluppatori**

- Pubblicare la teoria che il vostro sistema incarna e la previsione che la falsificherebbe; "fondato sul costruttivismo" senza una differenza falsificabile è un'affermazione senza contenuto.

**Per i ricercatori**

- Progettare per l'arbitraggio tra teorie anziché per l'accumulo di quadri. La maturità si manifesta come previsioni concorrenti risolte, non come crescita del vocabolario.

## Concetti collegati

- [[behaviorism]]
- [[cognitive-psychology]]
- [[constructivist]]
- [[metacognition]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[self-determination-theory]]
- [[self-efficacy]]
- [[motivation]]
- [[sociocultural-learning]]
- [[scaffolding]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[desirable-difficulties]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[embodied-learning]]
- [[cognitive-offloading]]
- [[learning-design]]
- [[learning-sciences]]
- [[philosophy-of-ai-in-education]]
- [[ai-education]]
- [[pedagogy]] — Ombrello: pedagogie e strategie didattiche nell'educazione con IA

## Articoli collegati

- [[yan-agentivism-learning-theory-ai-2026]] — Una teoria dell'apprendimento di medio raggio per l'interazione umano–IA, con quattro meccanismi e sei proposizioni verificabili (Yan e Gašević 2026)

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sovra-generalizzazione ingannevole: il dominio adattivo può interrompere la pratica prima che chi apprende sappia quando astenersi da un'azione (An, McLaren e Stamper 2026)
- [[airis-hybrid-human-ai-cognition-2026]] — Indagine e regolazione aumentate dall'IA in sistemi ibridi (AIRIS)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[ai-cognitive-partner-co-regulation-learning]] — Posiziona l'IA come partner cognitivo nella co-regolazione umano–IA; quadro evolutivo lungo l'arco della vita
- [[ensemble-cognition-philosophy-ai-education]] — Cognizione d'insieme: un quadro filosofico che riconcettualizza il pensiero come interazione umano–IA
- [[self-directed-growth-generative-ai-learning-analytics]] — La Crescita Autodiretta e il modello A2PL che estende l'apprendimento autodiretto con l'IA generativa
- [[generativism-learning-theory]] — Propone una nuova teoria dell'apprendimento per l'era dell'IA generativa, rivedendo le quattro classiche
- [[ai-vocational-education-training-review]] — Ha documentato la lacuna teoria-pratica tra costruttivismo e comportamentismo nell'IA per la formazione professionale
- [[genai-educational-outcomes-meta-analysis]]
- [[elsayed-pedagogical-symbiosis-posthuman-learner]]
- [[videla-embodied-ai-education-choreography]]
- [[generative-ai-mediational-agent-sociocultural-2026]] — L'IA generativa come agente di mediazione
- [[kim-ai-productive-failure-adult-2026]] — Progettare sistemi di IA per supportare l'apprendimento basato sul fallimento produttivo
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Direzione pedagogica degli LLM per il fallimento produttivo
- [[lukesova-clue-before-correction-2026]] — Indizio prima della correzione: ChatGPT per l'apprendimento autonomo delle lingue
- [[rachatasumrit-example-problem-ratio-2026]]
