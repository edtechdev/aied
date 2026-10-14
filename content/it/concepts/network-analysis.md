---
title: Analisi delle reti
created: "2026-10-14T21:55:00-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
reviewed_by: [editor]
translation_of: "concepts/network-analysis"
source_updated: "2026-10-04T10:50:04-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Analisi delle reti** — la famiglia di [[research-methods-aied|metodi di ricerca]] che modella le entità (persone, concetti, azioni o codici) come **nodi** collegati da **archi** che rappresentano relazioni o transizioni, e che poi analizza la struttura e le dinamiche della rete risultante per rivelare schemi invisibili ai conteggi di frequenza o ai confronti a coppie. Nella ricerca sull'IA nell'educazione, l'analisi delle reti è utilizzata per mappare i modelli di interazione tra discenti e strumenti di IA, modellare come gli elementi della conoscenza o del discorso co-occorrono e tracciare sequenze temporali di comportamento. Comprende varianti distinte — **Epistemic Network Analysis** (ENA, modellazione della co-occorrenza di codici/costrutti), **Social Network Analysis** (SNA, modellazione delle relazioni tra persone) e **Transition Network Analysis** (TNA, modellazione delle sequenze temporali di stati) — ciascuna delle quali operazionalizza "l'apprendimento come connessione" in modo diverso. ([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## Domande da considerare

- Quando senti "analisi delle reti" nel campo dell'educazione, quali immagini ti vengono in mente — mappe delle amicizie tra studenti, collegamenti tra idee, o qualcos'altro? In che modo si differenziano dal semplice conteggio della frequenza con cui le cose si verificano?
- Supponi di voler sapere se gli studenti si impegnano effettivamente con il feedback di uno strumento di scrittura basato sull'IA o se invece si limitano a ottenere risposte. Perché una metrica del tipo "quante volte hanno fatto clic" potrebbe non cogliere la storia che una sequenza di azioni rivelerebbe (ad esempio un ciclo di revisione rispetto a un ciclo di chat)?
- La pagina distingue Epistemic, Social e Transition Network Analysis. Senza conoscerne i dettagli, sai indovinare quale variante useresti per studiare (a) come le persone collaborano, (b) quali idee co-occorrono nel ragionamento degli studenti, e (c) come i discenti si spostano tra stati nel tempo?
- Un ricercatore scopre che discenti con alta e bassa literacy usano lo stesso strumento di IA ma producono strutture di rete del ragionamento molto diverse. Che cosa ci dice questo sulla valutazione degli strumenti di IA con un unico punteggio medio?
- Metriche di rete come "densità" e "centralità" descrivono se l'interazione è casuale o organizzata attorno a hub. Quando una rete organizzata attorno a un singolo discente sarebbe segno di una buona collaborazione — e quando segno di un problema?

## Introduzione

I metodi di analisi delle reti condividono un presupposto centrale: che la struttura delle connessioni — e non solo la loro presenza o frequenza — porta significato. Anziché chiedersi "quanto di X si è verificato", si chiedono "come sono collegati gli elementi, e che cosa rivela tale connettività riguardo alla [[metacognition|cognizione]], alla [[collaborative-learning|collaborazione]] o ai processi di apprendimento?" Questo li rende particolarmente preziosi nella ricerca sull'IA nell'educazione, dove i ricercatori vogliono sempre più comprendere il *processo* dell'interazione discente–[[student-ai-interaction|IA]] (come i discenti navigano [[feedback]], dialogo e revisione) anziché soltanto il prodotto (punteggi finali, tassi di errore).

## Varianti utilizzate nel corpus della knowledge base

- **Epistemic Network Analysis (ENA)** — la variante più comune nella knowledge base (discussa in ~24 articoli). L'ENA modella la co-occorrenza di codici o costrutti all'interno di segmenti di discorso o attività, producendo reti che mostrano quali idee, abilità o azioni epistemiche tendono a essere collegate in un determinato contesto. È utilizzata per confrontare come diversi gruppi (ad esempio discenti con alta vs. bassa literacy, collaboratori umani vs. IA) strutturano la propria cognizione. ([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Social Network Analysis (SNA)** — modella le relazioni tra persone (discenti, insegnanti, agenti) per rivelare strutture di collaborazione, influenza, centralità e comunità. Utile per studiare l'apprendimento [[collaborative-learning|collaborativo]] e tra pari. ([[misiejuk-cognitive-offloading-prompting-2026]])
- **Transition Network Analysis (TNA)** — modella sequenze temporali di stati discreti (ad esempio azioni del discente in una sessione di tutoring) come una rete orientata, quantificando la probabilità di transizione tra stati. La TNA è utilizzata per rivelare cicli comportamentali, percorsi e dinamiche di recezione nell'interazione discente–IA. ([[penny-transition-network-analysis-efl-writing-2026]])

Queste si distinguono da un **[[knowledge-graph]]**, che è una struttura dati per rappresentare e ragionare su fatti (un'ontologia / un triplestore), non un metodo analitico per studiare il processo o la struttura delle relazioni.

## L'analisi delle reti nella ricerca sull'IA nell'educazione

I metodi di rete sono utilizzati in tutta la base di evidenze della knowledge base per rispondere a domande che le metriche aggregate non possono:

- **Aprire la "scatola nera" dell'interazione discente–IA.** La TNA rivela il *processo* — i cicli comportamentali e i percorsi che i discenti seguono quando usano strumenti di IA (ad esempio un "ciclo di revisione" rispetto a un "ciclo di chat" nella [[writing-education|scrittura]] assistita da [[conversational-ai|chatbot]]) anziché soltanto l'output finale. ([[penny-transition-network-analysis-efl-writing-2026]])
- **Confrontare la strutturazione cognitiva tra gruppi.** L'ENA mostra come diversi gruppi collegano i costrutti in modo diverso — ad esempio come la [[metacognition]] co-occorra con la delega rispetto al ragionamento umano nella collaborazione umano–IA, rivelando modalità di collaborazione differenti. ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Tracciare le firme di alfabetizzazione all'IA e di interazione.** L'ENA sui log di interazione identifica modelli distinti di uso degli [[llm|LLM]] (raffinamento iterativo strategico rispetto a comandi lineari), distinguendo la [[ai-literacy|competenza]] del discente e il suo sviluppo. ([[tracing-genai-literacy-interaction-patterns]])
- **Analizzare il discorso e il framing.** L'ENA è applicata a dati [[qualitative-research|qualitativi]] e [[multimodal|multimodali]] (ad esempio i frame di YouTube su ChatGPT nell'educazione) per rivelare la struttura del discorso pubblico o disciplinare. ([[youtube-frames-chatgpt-education]])
- **Integrare l'autovalutazione e le metriche di prodotto.** Poiché i metodi di rete usano dati comportamentali osservati, possono esporre discrepanze tra ciò che i discenti dichiarano e ciò che fanno realmente — un ritrovamento ricorrente nella letteratura della knowledge base sulla recezione del feedback.

- **La struttura del grafo come quantità di validazione, non come riassunto descrittivo.** [[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]] tracciano β0 — il numero di componenti connesse di un grafo di prossimità settimanale tra discenti a una soglia euclidea fissata — per verificare se le coorti sintetiche riproducono quelle reali, preferendolo perché è fissato dal solo grafo, non richiede ottimizzazione o seme casuale a differenza della massimizzazione della modularità, e resta definito quando da un settimo a un terzo dei discenti si trovano da soli in una componente.

## Considerazioni metodologiche

- **La codifica è il fondamento.** Tutte le varianti di rete dipendono dalla codifica affidabile dei dati grezzi (enunciati, eventi, relazioni) in nodi/codici discreti; la codifica automatica basata su LLM è sempre più usata ma richiede validazione umana (ad esempio il κ di Fleiss pari a 0,70–0,71 negli studi TNA). ([[penny-transition-network-analysis-efl-writing-2026]])
- **Trattare l'accordo tra codificatori come controllo continuo, non come statistica una tantum.** [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] hanno codificato 304 enunciati di noticing con α di Krippendorff = .803 e monitorato l'accordo nel corso dello studio, ricodificando gli enunciati contestati ogni volta che il κ aggregato scendeva sotto la loro soglia di ricalibrazione di .85 (ai Casi 18 e 27) e senza necessità di ulteriori ricalibrazioni dai Casi 36–51. La sequenza è il punto: un'affidabilità misurata solo alla fine avrebbe lasciato i primi modelli di transizione a poggiare sulla deriva del codificatore, poiché quei modelli settimanali di transizione costituivano il ritrovamento dello studio.
- **Le metriche a livello di rete sintetizzano la struttura.** Densità, reciprocità, centralizzazione e in-/out-strength descrivono se l'interazione è casuale o organizzata attorno a hub "gravitazionali", e quanto reciproco sia lo scambio.
- **Il confronto statistico è necessario per le differenze tra gruppi.** I test del chi-quadro o i test di permutazione sono usati per stabilire che le differenze di rete osservate (ad esempio per livello di competenza) non siano dovute al caso. [[caeai-response-length-ai-ethics-education-2026|Shao et al. (2026)]] mostrano che l'ipotesi nulla deve essere costruita per corrispondere al testo. In una discussione di caso con venti studenti di [[higher-ed|laurea magistrale]] di discipline miste, la quota di termini condivisi di dimensione 3 è salita dal 5,2% all'8,0% mentre i token di contenuto sono scesi a circa 0,65× il loro livello post-lettura. Un test di permutazione sull'intero corpus avrebbe dichiarato significativo quel rialzo; il loro test di permutazione dei token condizionato alla lunghezza non lo ha fatto (Q6 p = .62, Q7 p = .15).
- **Validare lo strumento prima di leggerne la rete.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai & Alshahri (2026)]] hanno costruito l'AI-STEM-MLCS di 45 item seguendo l'intero percorso di sviluppo della scala — rapporti di validità di contenuto degli esperti, analisi fattoriale esplorativa poi confermativa (CFI = 0,983, RMSEA = 0,019), ω di McDonald compreso tra 0,888 e 0,905, e ICC test-retest a due settimane compresi tra 0,751 e 0,900 — prima di modellare le quattro dimensioni con la graph analysis esplorativa. Derivare la struttura da una rete i cui nodi sono punteggi di scala non validati è ciò contro cui quell'ordine mette in guardia, e gli autori indicano la validazione specifica per il contesto saudita come il confine al trasferimento della struttura.
- **Interpretare con cautela.** La granularità dei nodi (ad esempio un nodo grossolano "chat") può oscurare l'intento; la classificazione automatica porta una certa ambiguità; e la struttura di rete trasversale non stabilisce la causalità.
- **Reti che espongono ciò che un aggregato nasconde.** [[genai-social-annotation-epistemic-network-analysis-2026|Pan et al. (2026)]] hanno trovato che la classe con annotazione GenAI ha superato in punteggio e in coinvolgimento il gruppo di controllo, poi hanno diviso la classe sperimentale alla mediana del rendimento e hanno mostrato che il guadagno non era condiviso: i gruppi ad alto rendimento hanno avviato il 60,7 percento delle richieste di feedback sulle proprie annotazioni contro il 34,0 percento dei gruppi a basso rendimento, che sono rimasti in un ciclo autoreferenziale (separazione dei gruppi significativa sull'asse X dell'ENA, U = 25,00, p = 0,01). La lezione di design è che un singolo effetto a livello di gruppo può riassumere due diverse strutture di interazione — e i due gruppi erano classi intatte, quindi il confronto identifica lo schema senza attribuirlo causalmente.

## Implicazioni per la ricerca sull'IA nell'educazione

1. **Preferire i metodi di processo alle sole metriche di prodotto.** Per valutare se gli strumenti di IA supportano l'apprendimento, modellare come i discenti si impegnano effettivamente (recezione, dialogo, revisione) con metodi di sequenza/rete anziché affidarsi soltanto ai punteggi finali.
2. **Usare l'ENA per confrontare la strutturazione cognitiva.** Quando ci si chiede come diversi discenti o modalità (umano vs. IA) strutturano il proprio ragionamento, l'ENA fornisce un confronto diretto e visivo delle reti di co-occorrenza — una tecnica adatta alla [[student-modeling|modellazione dello studente]] di come i discenti collegano le idee.
3. **Validare la codifica automatica.** Con grandi dataset di log, la classificazione basata sugli [[llm|LLM]] è potente ma deve essere verificata rispetto alla codifica umana (riportando l'accordo tra valutatori) prima di interpretare la struttura della rete.
4. **Progettare per la differenziazione.** L'analisi delle reti rivela spesso che lo *stesso* strumento di IA produce modelli di interazione diversi tra sottogruppi di discenti — informando un design adattivo anziché una valutazione uguale per tutti.

## Validazione ENA del dialogo collaborativo simulato

- **L'ENA come validazione del dialogo simulato.** Fang (2026) applica la Epistemic Network Analysis per valutare se agenti LLM con fine-tuning riproducono la struttura del dialogo collaborativo reale sulla [[problem-solving|risoluzione di problemi]]. Confrontando i vettori di adiacenza simulati con la rete empirica, riporta una distanza ENA di 0,17 — entro la soglia del 95° percentile della distribuzione nulla, con un p-value di permutazione di 0,65 — dimostrando il potere dell'ENA come controllo [[quantitative-research|quantitativo]] sulla fedeltà delle [[simulation|simulazioni]] generative del discorso, accanto ad altre applicazioni di ENA/SNA/TNA nella ricerca educativa.

## Concetti collegati

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Articoli collegati
- [[caeai-response-length-ai-ethics-education-2026]] — Response length, not lexical alignment, drives shared-term statistics in participant–morpheme networks (Shao et al. 2026)

- [[penny-transition-network-analysis-efl-writing-2026]] — TNA of learner-chatbot interactions in scaffolded EFL writing
- [[tracing-genai-literacy-interaction-patterns]] — ENA of GenAI literacy interaction patterns
- [[hao-human-ai-collaborative-problem-solving-cognition]] — ENA of human-AI collaborative problem solving
- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive offloading and prompting (SNA/network methods)
- [[youtube-frames-chatgpt-education]] — ENA of YouTube frames of ChatGPT in education
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing (ENA)
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
