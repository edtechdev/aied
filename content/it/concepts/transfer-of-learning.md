---
title: Transfer dell'apprendimento
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties, metacognition, scaffolding, transfer-of-learning]
technology: [intelligent-tutoring]
level: [k 12]
confidence: high
translation_of: "concepts/transfer-of-learning"
source_updated: "2026-10-01T09:59:06-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Transfer dell'apprendimento** — la misura in cui conoscenze o abilità acquisite in un contesto (ad es., la pratica con uno strumento di IA) persistono e si applicano in un contesto diverso (ad es., la performance indipendente senza lo strumento). Nell'[[ai-education|IA nell'educazione]], il transfer è la questione aperta centrale: se i guadagni di performance che gli studenti mostrano *con* gli strumenti di IA si traducano in apprendimento duraturo che possano dimostrare *senza* di essi.

## Domande da considerare

- Ecco un pattern sorprendente che la pagina documenta: gli studenti spesso mostrano guadagni immediati nei compiti assistiti dall'IA, eppure quei guadagni possono svanire — o addirittura invertirsi — quando l'IA viene rimossa. Prima di leggere le spiegazioni, perché pensi che uno strumento che chiaramente aiuta sul momento possa finire per lasciare gli studenti in condizioni peggiori senza di esso?
- Ricorda qualcosa che hai imparato a fare con un tutor, una calcolatrice o un assistente e che poi hai dovuto fare da solo. L'abilità si è trasferita, o ti sei sentito dipendente dall'ausilio? Cos'era diverso nelle esperienze che si sono trasferite bene rispetto a quelle che non lo hanno fatto?
- Un'intuizione comune è che "la pratica è pratica" — che svolgere un compito con aiuto sviluppi la stessa abilità che svolgerlo da soli. Dove quell'intuizione potrebbe fuorviare, specialmente quando l'aiuto è un'IA che completa il ragionamento al posto tuo anziché guidarti attraverso di esso?
- La pagina traccia una distinzione tra "effetti con" una tecnologia e "effetti di" essa — ottenere performance migliori mentre si usa lo strumento rispetto al diventare più capaci senza di esso. Se sei insegnante, progettista o studente, quale di questi è il tuo vero obiettivo, e come sapresti di averlo raggiunto?
- L'evidenza suggerisce che quanto lavoro cognitivo deleghi conta: l'esternalizzazione di compiti superficiali come la grammatica danneggia il transfer meno dell'esternalizzazione del ragionamento profondo e della struttura. Pensa all'ultima volta che hai usato l'IA per un compito. Quale "livello" hai delegato, e cosa predice la tua scelta su cosa tratterresti?
- La pagina propone condizioni che potrebbero sostenere un transfer positivo — [[pedagogy|ripari]] pedagogici, supporto in dissolvenza, calibrazione alla prontezza dello studente. Se tu stessi progettando (o fossi l'utente di) uno strumento di apprendimento con IA, cosa esigeresti affinché i guadagni ottenuti usandolo diventino capacità duratura senza di esso?

## Introduzione

Il transfer dell'apprendimento è una preoccupazione fondativa nella [[research-methods-aied|ricerca]] educativa, e gli strumenti di IA l'hanno reso urgente. Il pattern empirico definitorio documentato attraverso gli studi sull'IA nell'educazione è un **paradosso del transfer**: gli studenti che usano l'IA mostrano tipicamente guadagni immediati e misurabili nei compiti in cui l'IA è disponibile, ma quei guadagni spesso non persistono — o addirittura si invertono — quando l'IA viene rimossa e gli studenti devono dimostrare la comprensione in modo indipendente. Questo pattern chiama in causa il [[cognitive-offloading|sovra-affidamento]], la Teoria del Carico Cognitivo e la [[metacognition|metacognizione]] come meccanismi in azione, e si collega direttamente ai dibattiti sulla progettazione del [[intelligent-tutoring|tutoring con IA]].

La prontezza non è transfer: la pratica orale assistita dall'IA è stata associata a una minore ansia nel parlare e a una maggiore disponibilità a comunicare con gli esseri umani, eppure nessuno dei due studi ha osservato il parlato umano, lasciando il percorso dalla prova orale con l'IA alla capacità comunicativa umana una proposta pedagogica non verificata ([[ai-speaking-practice-communicative-readiness-2026|Wang & Li (2026)]]).

### Il paradosso del transfer

Gli studenti che usano l'IA mostrano tipicamente **guadagni immediati e misurabili** nei compiti in cui l'IA è disponibile. Eppure, quando l'IA viene rimossa:

- Gli effetti diventano **misti o negativi**
- I guadagni spesso **non si trasferiscono** a contesti non valutati
- Gli studenti possono diventare **dipendenti dallo strumento** a scapito del ragionamento indipendente

La base di evidenze, sintetizzata nella revisione [[stanford-evidence-base-ai-k12-2026|Stanford Evidence Base on AI in K-12]], è coerente tra i domini:

| Studio | Contesto | Effetto immediato | Effetto di transfer | Meccanismo |
|---|---|---|---|---|
| Bastani et al. (2025) | Matematica delle superiori | Voti più alti nella pratica | **~17% peggio** negli esami finali a libro chiuso | Il chatbot di uso generale faceva il lavoro |
| Chen et al. (2025) | Compiti di programmazione | Punteggi più alti nei compiti | **Nessun miglioramento** negli esami senza assistenza | Il [[llm]]-Tutor risolveva i problemi al posto degli studenti |
| Lehmann et al. (2025) | Programmazione | Più argomenti coperti | **Danneggiata la comprensione**; divari ampliati | IA generale per studenti con basi deboli |
| Stadler et al. (2024) | Ricerca accademica | Completamento più rapido del compito | **Ragionamento di qualità inferiore** vs. ricerca | [[student-engagement|Coinvolgimento]] cognitivo ridotto |
| Kosmyna et al. (2025) | Scrittura di saggi | Qualità del saggio più alta | **L'83% non è riuscito a ricordare** le proprie citazioni | Paternità esternalizzata |

Tutti e cinque gli studi mostrano un pattern di **transfer negativo o nullo** quando l'IA di uso generale è l'intervento.

### Meccanismi che minano il transfer

**Spiazzamento metacognitivo.** L'IA che completa il ragionamento riduce le occasioni per gli studenti di monitorare la propria comprensione e selezionare strategie. Gli studenti che hanno usato l'IA erano meno in grado di spiegare le proprie risposte quando interrogati. Questo si collega alla ricerca sulla [[metacognition|metacognizione]] sull'auto-monitoraggio e all'[[vibe-compiler-metacognition-genai-agency-2026|evidenza che corsi strutturati aumentano la competenza metacognitiva mentre gli assistenti LLM grezzi non lo fanno]].

**Soppressione del carico pertinente.** L'IA di uso generale riduce non solo il carico cognitivo estraneo (distraente) ma anche quello *pertinente* — lo sforzo mentale produttivo che codifica conoscenza duratura. Una pratica più facile dà una sensazione migliore ma lascia tracce più deboli. Si veda la Teoria del Carico Cognitivo e la distinzione tra [[stanford-evidence-base-ai-k12-2026|IA specifica per il tutoring vs. IA generale]].

**Sovra-affidamento / inversione da expertise.** Ai novizi che ricevono risposte non costruiscono schemi. L'IA generale fornisce risposte; il tutoring efficace fornisce guida strutturata. Quando ai novizi vengono date scorciatoie da esperti, l'apprendimento è perturbato — il principio delle [[desirable-difficulties|difficoltà desiderabili]] al contrario.

**Performance dipendente dallo strumento.** Gli studenti possono ottimizzare per le affordance specifiche dello strumento di IA ([[prompt-engineering|prompt engineering]], affidamento sulla struttura del codice generato) anziché costruire generalizzazione nel dominio — una forma di [[cognitive-offloading-speedup-illusion|esternalizzazione cognitiva]] che appare produttiva ma sostituisce l'apprendimento duraturo.

Un'aula protetta può anche insegnare l'abitudine sbagliata: [[shi-genai-experiential-learning-management-education-2026|Shi, Dai & Zhang (2026)]] avvertono che simulazioni con regole fissate in anticipo filtrano l'incertezza e rafforzano il rispetto delle regole, quindi le abitudini decisionali formate al loro interno possono diventare una passività cognitiva una volta che gli studenti incontrano interessi in competizione e informazioni incomplete in contesti reali.

**Esternalizzazione sensibile al livello e transfer.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] verifica direttamente la distinzione di Salomon, Perkins & Globerson tra "effetti con vs. effetti della tecnologia" nella scrittura assistita da [[generative-ai|GenAI]]: un quasi-esperimento di otto settimane ha rilevato che la collaborazione aperta con l'IA massimizzava la performance nella scrittura assistita ma produceva gli esiti di near-transfer indipendente *più bassi* senza IA, mentre il supporto delimitato con riflessione preservava la competenza indipendente. Livelli di esternalizzazione più profondi (ragionamento, struttura) prevedevano transfer peggiore rispetto ai livelli superficiali (grammatica). Questa è evidenza diretta dalla classe che i guadagni di performance *con* supporto dell'IA non si trasferiscono alla performance indipendente *senza* supporto — e che la profondità della delega, non solo il fatto che l'IA venga usata, plasma il transfer.

Un'istanza complementare, per quanto confusa, viene dalla [[physics-education|fisica]]: la riprogettazione alla Ruhr University Bochum di un corso introduttivo di fisica nucleare e delle particelle ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al., 2026]]) ha visto gli studenti completare con successo problemi di ricerca collaborativi e ricchi di risorse con l'assistenza dell'IA, eppure quegli stessi studenti ottenevano in media 20,6/80 in un esame scritto convenzionale senza aiuti, con diversi tentativi seri incapaci di completare calcoli standard. Gli autori leggono questo come evidenza che la performance assistita non si trasferisce automaticamente alla performance non sollecitata, e il loro rimedio è la progettazione deliberata: rendere l'esame scritto l'unico determinante del voto, rilasciare in anticipo i problemi dei tutorial così che il tempo in classe diventi discussione preparata, e aggiungere preparazione sui prerequisiti, esempi risolti e consolidamento attorno al lavoro esplorativo in cui l'IA è permessa.

## Condizioni che sostengono un transfer positivo

L'evidenza limitata suggerisce che il transfer è possibile quando:

- **Sono presenti ripari [[guardrails|pedagogici]]** — suggerimenti passo dopo passo, targeting delle [[misconceptions|idee erronee]], [[socratic-method|interrogazione socratica]] (variante tutoring di Bastani et al., 2025)
- **Le strategie tradizionali sono preservate** — la presa di appunti abbinata all'uso dell'IA ha migliorato la ritenzione (Kreijkes et al., 2026)
- **L'IA è usata per pratica [[formative-assessment|formativa]], non [[summative-assessment|sommativa]]** — scaffolding durante l'apprendimento, non durante la valutazione
- **Il formato della pratica è adeguato alla conoscenza da trasferire.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] rilevano che i guadagni della pratica di recupero spesso non si trasferiscono a problemi non familiari — rafforzano la memoria di una procedura senza abilitarne l'uso in nuovi contesti — e che la generalizzazione duratura ad applicazioni nuove richiede di abbinare la pratica a esempi risolti che supportino l'induzione dell'abilità; il rapporto ottimale esempio–problema dipende quindi dal fatto che il contenuto sia un fatto verbatim o un'abilità generalizzabile.
- **L'expertise dello studente è calibrata** — lo strumento adatta il supporto alla prontezza anziché prestabilire la piena assistenza

- **Il transfer come criterio che separa apprendimento e assistenza.** [[yan-agentivism-learning-theory-ai-2026|Yan e Gašević (2026)]] costruiscono la loro teoria dell'apprendimento umano-IA attorno al transfer con supporto ridotto: la performance assistita conta come apprendimento solo se la capacità persiste una volta ritirato il supporto, il che rende il transfer il test anziché un esito tra gli altri. La loro proposizione è direzionale: richiedere la verifica delle fonti o la giustificazione durante il lavoro assistito dall'IA dovrebbe migliorare la performance differita, mentre la ripetuta delega a basso attrito senza ricostruzione dovrebbe indebolire la calibrazione che gli studenti hanno della propria competenza.

- **La guida è co-locata con il lavoro.** Contro il pattern di transfer negativo nella tabella sopra, un confronto su 36 partecipanti ha rilevato che gli studenti assistiti da un robot da banco mantenevano il punteggio a 7,0/10 una volta ritirato l'aiuto mentre gli studenti assistiti da ChatGPT cadevano a 4,4/10, un punteggio di transfer a breve termine superiore del 60% ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). Il risultato è un transfer a breve termine misurato circa 35 minuti dopo il compito, senza test di ritenzione differita, su 36 partecipanti in un solo campus.

Questo si allinea con la ricerca sul [[intelligent-tutoring|tutoring con IA]] che mostra che gli strumenti specifici per il tutoring con ripari pedagogici superano i [[conversational-ai|chatbot]] di uso generale, e con i principi dello [[scaffolding|scaffolding]] sulla dissolvenza del supporto man mano che la competenza cresce.

### Domande aperte

1. **Scala temporale:** il transfer migliora nel corso di settimane/mesi di uso, o la dipendenza si approfondisce?
2. **Differenze di dominio:** il transfer è migliore in domini ben strutturati (matematica) vs. domini mal strutturati (scrittura)?
3. **Differenze individuali:** gli studenti con [[prior-knowledge|conoscenze pregresse]] solide subiscono una perdita di transfer minore dei novizi?
4. **Rimediazione delle abilità:** sessioni esplicite di pratica "senza IA" possono invertire la dipendenza dallo strumento?

### Collegamenti ai concetti correlati

Il transfer dell'apprendimento si collega alla [[metacognition|metacognizione]] (auto-monitoraggio della comprensione), alla Teoria del Carico Cognitivo (carico pertinente vs. estraneo), alle [[desirable-difficulties|difficoltà desiderabili]] (lotta produttiva), allo [[scaffolding|scaffolding]] (dissolvenza del supporto), al [[cognitive-offloading|sovra-affidamento]] (dipendenza dallo strumento), e all'[[sociocultural-learning|apprendimento socioculturale]] (l'IA di uso generale opera al di fuori della ZPD completando il lavoro al posto degli studenti). È il ponte tra performance assistita e apprendimento genuino — la distinzione tra [[stanford-evidence-base-ai-k12-2026]] e la questione centrale per l'efficacia del [[intelligent-tutoring|tutoring con IA]].

## Concetti collegati

- [[pedagogical-patterns]] — L'esito su cui la maggior parte di queste sequenze è in definitiva giudicata
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
- [[productive-failure]] — Productive Failure
## Articoli collegati
- [[yan-agentivism-learning-theory-ai-2026]] — A mid-range learning theory for human-AI interaction, with four mechanisms and six testable propositions (Yan and Gašević 2026)

- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Performance-learning distinction and durable transfer
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[rachatasumrit-example-problem-ratio-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[shi-genai-experiential-learning-management-education-2026]] — argues that protected classroom simulations can form decision habits that fail outside them

- [[ai-speaking-practice-communicative-readiness-2026]] — AI-assisted speaking practice raised willingness toward humans but no study observed human speaking
- [[aifred-desk-robotic-ai-guidance-2026]] — AIfred: Augmented Learning through Functional Robotic Embodiment at the Desk
