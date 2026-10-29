---
title: "Quali sono le migliori pratiche per sviluppare un tutor AI efficace?"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
translation_of: "faqs/developing-ai-tutor"
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*


Un tutor AI efficace dovrebbe essere progettato come un **sistema di apprendimento, non come un [[conversational-ai|chatbot]] generatore di risposte**. Il tema più forte dell'intera knowledge base è che la struttura [[pedagogy|pedagogica]] — diagnosi, scaffolding, feedback, agency dello studente e valutazione — conta almeno quanto il modello sottostante. I due esempi sviluppati di seguito (un tutor di calcolo e un assistente alla scrittura) mostrano come la stessa architettura di base debba essere modellata da ciò che la disciplina richiede allo studente.

## 1. Iniziare da obiettivi di apprendimento espliciti e definire il compito dello studente

Prima di scegliere un modello, specificare:

- Cosa gli studenti dovrebbero sapere o saper fare al termine.
- Quale lavoro cognitivo devono svolgere da soli.
- In cosa il tutor può assisterli.

Un tutor ottimizzato per "completare il problema" può facilmente pregiudicare un tutor ottimizzato per "imparare a risolvere il problema". Il concetto di [[intelligent-tutoring]] evidenzia che l'efficacia dipende dalla progettazione pedagogica e non soltanto dalla capacità del modello.

## 2. Diagnosticare prima di prescrivere

Mantenere un modello dello studente basato su evidenze come conoscenza dimostrata, [[misconceptions]], tentativi recenti, comportamento di ricerca di aiuto e, ove opportuno, sicurezza in sé. Adattare difficoltà e assistenza a partire da queste evidenze anziché limitandosi a reagire all'ultimo prompt dello studente. Prestare attenzione nel lasciare che un [[llm]] svolga la diagnosi autonomamente: il [[benchmark|benchmarking]] ha rilevato che i tutor LLM potevano riconoscere ragionamenti chiaramente corretti mentre a volte rifiutavano alternative valide o accettavano ragionamenti errati. Per domini con conseguenze importanti, un'architettura utile è **diagnosi strutturata + dialogo LLM flessibile**. Si veda [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]].

## 3. Usare una scala di suggerimenti anziché dare immediatamente la soluzione

Una sequenza tutorale utile è: chiedere un tentativo, sondare il ragionamento dello studente, dare un piccolo indizio, dare un suggerimento concettuale più forte, mostrare un passaggio parziale, fornire una soluzione svolta solo quando è giustificato, quindi chiedere allo studente di spiegare o applicare l'idea in modo indipendente. Il supporto deve **sfumare all'aumentare della competenza**. Questo è centrale nel concetto di [[scaffolding]]. Un esperimento sul campo ha rilevato che un'interfaccia GPT senza protezioni aumentava le prestazioni in matematica con assistenza ma riduceva le prestazioni successive all'esame senza assistenza, mentre un tutor che forniva suggerimenti eliminava in gran parte quella penalizzazione dell'apprendimento — si veda [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]].

Un esperimento randomizzato sul campo più ampio, con oltre 6.000 studenti delle scuole medie su una piattaforma di pratica basata sulla padronanza, ha trovato la stessa caratteristica con maggiore dettaglio: gli studenti assegnati al supporto AI progredivano più lentamente e tentavano di rispondere a meno domande, ma rispondevano con maggiore accuratezza e — il meccanismo più chiaro — miglioravano la correttezza del tentativo successivo dopo un errore, avendo bisogno di meno tentativi per tornare a una risposta corretta. Si tratta di un **rallentamento produttivo**, non di accaparramento di risposte, ed è il comportamento che una scala di suggerimenti dovrebbe produrre. Lo stesso studio fornisce un monito sui proxy: richiedere tre risposte corrette consecutive aumentava nettamente la padronanza definita dalla piattaforma senza produrre guadagni rilevabili a un test differito una settimana dopo, e l'evidenza più forte sul test differito appariva solo dove l'AI era inserita nel flusso di lavoro sulla padronanza (coefficiente 0,085) anziché come accesso autonomo. Si veda [[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]].

## 4. Rendere il feedback specifico, immediato, azionabile e connesso al ragionamento

Evitare feedback che si limitino a dire "Corretto", "Non corretto" o "Ben fatto". Il tutor dovrebbe invece identificare il passaggio di ragionamento coinvolto, spiegare cosa deve essere riconsiderato, dare allo studente qualcosa di concreto da fare, e chiedere allo studente di prevedere o spiegare prima di rivelare il feedback quando è opportuno. La knowledge base tratta il [[feedback]] come un ciclo completo di **fornitura–accoglienza**: il feedback supporta l'apprendimento solo quando gli studenti lo comprendono e agiscono di conseguenza.

## 5. Ancorare i contenuti fattuali anziché fidarsi della memoria dell'LLM

Usare la generazione aumentata da recupero su materiali fidati come libri di testo approvati dal docente, appunti del corso, esempi svolti, politiche e risorse [[curriculum-design|curricolari]], ed esporre citazioni o provenienza ove utile. Per domini con risposte formalmente verificabili, aggiungere strumenti deterministici come calcolatrici, sistemi di matematica simbolica, esecuzione di codice, grafi della conoscenza, validatori basati su regole e risolutori [[discipline-specific-aied|specifici del dominio]]. La RAG può ridurre il [[hallucination-risk|rischio di allucinazione]], anche se non lo elimina — si veda [[rag|Retrieval-Augmented Generation]].

## 6. Progettare per la metacognizione e l'agency dello studente

Richiedere regolarmente allo studente di generare, scegliere, giustificare, valutare o riflettere. Un principio di progettazione utile è **prima lo studente → poi l'AI → di nuovo lo studente**. L'obiettivo a lungo termine è che gli studenti interiorizzino le domande e le strategie di [[problem-solving]] del tutor anziché diventare dipendenti da esso. Si vedano [[agency|learner agency]] e [[scaffolding]].

## 7. Trattare la sicurezza pedagogica come diversa dalla sicurezza ordinaria di un chatbot

I test di sicurezza per un tutor educativo dovrebbero includere più della sola tossicità e resistenza al jailbreak. Testare la fuga di risposte, il rinforzo delle misconcezioni, l'eccessivo accordo o [[ai-sycophancy|sycophancy]], la difficoltà inappropriata, il [[cognitive-offloading|cognitive offloading]], il trattamento distorto, la perdita di agency dello studente, la deriva didattica e l'eccessiva sicurezza in spiegazioni errate. Un tutor dovrebbe essere **gentile ma corretto**, anche quando lo studente insiste su una misconcezione, e i test dovrebbero coinvolgere conversazioni estese perché i fallimenti pedagogici possono accumularsi su più interazioni. Si vedano [[pedagogical-safety]] e [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]].

## 8. Integrare privacy, accessibilità ed equità nell'architettura

Raccogliere solo i dati dello studente pedagogicamente necessari. Dove si usa memoria persistente o [[student-modeling|modellazione dello studente]], rendere trasparente il suo scopo, dare agli studenti un controllo adeguato, proteggere le informazioni sensibili, definire politiche di conservazione e fornire supervisione del docente o [[human-in-the-loop-ai|umana]] per le situazioni con conseguenze importanti. Verificare il comportamento del tutor attraverso background linguistici, livelli di abilità, contesti culturali, esigenze di [[accessibility]], e diversi livelli di [[prior-knowledge|conoscenze pregresse]] ed esperienza con l'AI. Non fare del [[prompt-engineering|prompting]] sofisticato un prerequisito per una buona istruzione — è il tutor stesso che dovrebbe aiutare gli studenti a formulare domande produttive.

## 9. Misurare l'apprendimento, non solo la qualità del chatbot

Metriche come accuratezza delle risposte, durata delle conversazioni, preferenza degli studenti, soddisfazione, completamento dei compiti e [[student-engagement|engagement]] non sono sufficienti da sole. Valutare invece le prestazioni senza assistenza, la ritenzione differita, il trasferimento a nuovi problemi, la correzione delle misconcezioni, l'indipendenza dello studente, l'accoglienza del feedback e gli [[differential-effects-across-learner-groups|effetti differenziali tra gruppi di studenti]]. La domanda cruciale è se gli studenti siano in grado di ottenere buone prestazioni dopo che il tutor è stato rimosso. Si vedano [[ai-ed-evaluation]] e [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]].

Due studi recenti affinano questa regola contro [[self-report-measures|l'autovalutazione]] e gli orizzonti brevi. Uno studio pilota con 38 studenti principianti di programmazione ha trovato una forte associazione tra l'uso dell'[[generative-ai|AI generativa]] e l'apprendimento *percepito* (rs=0,802, p<0,001), mentre gli indicatori di progresso autonomo senza supporto del docente ottenevano i punteggi più bassi — il divario che gli autori avvertono produce un'illusione di competenza e debito epistemico, ed esattamente il divario che le metriche di soddisfazione premiano. Si veda [[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]].

Più fondamentalmente, la maggior parte delle valutazioni si ferma nel momento in cui l'assistenza finisce. [[cognitive-washout-ai-skill-decay-2026|Cognitive washout dynamics]] nomina l'intervallo post-ritiro non misurato e formalizza quattro possibili esiti — rimbalzo elastico, plateau parziale, impalcatura latente e sovra-recupero — con un modello a curva di washout i cui parametri includono la costante di tempo di recupero, la completezza del recupero e un indice di isteresi che confronta lo sforzo di riapprendimento con lo sforzo originale. Poiché la reversibilità determina la gravità, il framework sostiene che la pratica senza assistenza programmata dovrebbe essere dosata in base alla curva di recupero anziché essere discussa su basi morali. Un piano di valutazione di un tutor dovrebbe quindi includere una fase di ritiro, non solo un post-test immediato. Si veda [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|the randomized evidence that brief assistance depresses later unassisted performance]].

## 10. Mantenere insegnanti o esperti del dominio nel ciclo di garanzia della qualità

Prima del dispiegamento, far testare agli educatori profili realistici di studenti, misconcezioni comuni, casi limite, prompt avversariali, risposte ambigue e conversazioni tutorali estese. Registrare i fallimenti pedagogici e usarli per rivedere i prompt di sistema, le politiche tutorali, le fonti di conoscenza, i [[guardrails]], le regole del modello dello studente e la scelta del modello. La supervisione umana resta importante perché una risposta tutorale fluente può essere comunque pedagogicamente inappropriata o errata.

[[teacher-intervention-k12-ai-based-instruction-2026|Lee's systematic review of 29 K-12 studies]] mostra in cosa consiste effettivamente quella supervisione e dove si rompe. L'intervento del [[teacher-role|teacher]] è un ciclo ripetuto di quattro fasi di monitoraggio, giudizio, intervento e orchestrazione; avvisi dell'AI, [[visualization|dashboard]] e punteggi automatizzati "non portano automaticamente all'azione pedagogica"; e la strategia principale degli insegnanti è la *traduzione pedagogica* — selezionare, rivedere, integrare, riassumere o eliminare il feedback del chatbot anziché trasmetterlo invariato. Ne derivano due moniti progettuali. Più informazioni dall'AI non è meglio: i sistemi che emettono continuamente diagnostica sovraccaricavano gli insegnanti e distoglievano l'attenzione dalla loro stessa osservazione, quindi bisogna dare priorità a ciò su cui vale la pena agire e renderlo interpretabile, e offrire raccomandazioni in una forma che gli insegnanti possano accettare, modificare, rimandare o rifiutare. Più supporto agli insegnanti non è meglio: rimandare l'intervento per consentire agli studenti di lavorare in modo indipendente è essa stessa competenza, e le condizioni strutturali — tempo per esaminare i dati, dimensione della classe, capacità di raggiungere fisicamente i gruppi che hanno bisogno di aiuto — fanno parte dell'intervento anziché essere logistica di contorno.

## Un'architettura utile per un tutor AI

Una solida architettura di produzione può essere rappresentata come: obiettivo di apprendimento → evidenze dello studente/modello dello studente → politica pedagogica → contenuti ancorati e validati → generazione conversazionale → risposta dello studente → modello dello studente aggiornato (con ritorno all'inizio). Sicurezza, privacy, accessibilità, supervisione del docente e valutazione dovrebbero circondare l'intero ciclo.

## Il criterio di successo più importante

La metrica di sviluppo più importante non è "l'AI ha risolto il problema?" ma **"dopo aver interagito con l'AI, lo studente è in grado di risolvere autonomamente un problema paragonabile?"**. L'evidenza a favore di questo principio è più forte in domini di apprendimento strutturati come matematica e programmazione; la generalizzazione a domini più aperti resta meno certa, rendendo essenziale una valutazione specifica del dominio.

Per capire dove si colloca un tutor all'interno di una sequenza di corso anziché isolato, si veda [[designing-ai-into-learning]]; per le regole di progettazione a livello software che un tutor deve soddisfare, si veda [[designing-educational-ai-software]]; e per come valutare l'intervento risultante, si veda [[evaluating-ai-interventions-methods]].

---

## Esempio 1: Progettare un tutor AI di calcolo

Si consideri un tutor di calcolo del primo semestre universitario. Il suo obiettivo dovrebbe essere aumentare ciò che gli studenti sanno risolvere e spiegare **in modo indipendente dopo la rimozione del tutor**, non massimizzare i problemi completati correttamente. Il tutoring in matematica è particolarmente vulnerabile allo scaffolding eccessivo, all'uso prematuro di suggerimenti e alla diagnosi errata del ragionamento dello studente. Si vedano [[math-education]], [[zhang-tutormoments-2026|When Help is Unhelpful]], [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] e [[scaffolding]].

**Obiettivi di apprendimento.** Il tutor potrebbe mantenere una mappa concettuale (funzioni e grafici → tassi di variazione → limiti → derivata come limite → regole di derivazione → applicazioni → antiderivate → integrali definiti → teorema fondamentale). Per ogni concetto dovrebbe distinguere diversi tipi di padronanza. Per esempio, la "padronanza della derivata" non dovrebbe significare semplicemente produrre la derivata corretta; potrebbe includere riconoscere quando una derivata è appropriata, interpretarla come tasso di variazione istantaneo, selezionare la regola giusta, svolgere la procedura, spiegare perché è appropriata, verificarne la ragionevolezza e applicarla a un problema non familiare. Questo aiuta a prevenire la [[correct-answer-trap-misconceptions|trappola della risposta corretta]], dove uno studente raggiunge la risposta giusta attraverso un ragionamento difettoso.

**Architettura di sistema.** Una progettazione pratica a sei livelli: materiali del corso + politiche del docente → livello di retrieval/RAG → (motore di problemi → modello dello studente) e (verificatore simbolico → motore di diagnosi) → politica pedagogica → LLM conversazionale → studente → modello dello studente aggiornato.

1. **Livello di ancoraggio al corso:** recupera da materiali approvati dal docente (sezioni del libro di testo, appunti delle lezioni, esempi svolti, terminologia, metodi approvati, notazione, regole dei compiti) così che il tutor non introduca mai tecniche matematicamente valide ma inappropriate per il corso.
2. **Livello di verifica matematica:** usa un sistema di algebra computazionale per verificare equivalenze algebriche, derivate, integrali, soluzioni di equazioni, punti critici e approssimazioni numeriche — l'LLM si occupa di spiegazione e dialogo mentre il sistema deterministico si occupa della verifica matematica.
3. **Livello del modello dello studente:** mantiene stime per concetto (per es. limite: in sviluppo, regola della potenza: padroneggiata, regola del prodotto: in sviluppo, regola della catena: non dimostrata) più ipotesi di misconcezione con evidenze e confidenza. L'AI dovrebbe trattare una misconcezione come un'**ipotesi**, non come fatto acclarato, perché gli LLM possono allucinare evidenze o inferire misconcezioni in modo errato — è necessario un processo **rileva → verifica → rispondi**.

**Un'interazione tutorale.** Per derivare $f(x)=(x^2+1)\\sin x$, un chatbot convenzionale potrebbe rivelare immediatamente la risposta. Un tutor orientato all'apprendimento ragiona invece internamente: lo studente ha derivato entrambe le componenti ma sembra aver moltiplicato le loro derivate (una possibile misconcezione regola-del-prodotto-come-$f'g'$), quindi pone prima una domanda diagnostica ("quale regola usi quando due funzioni sono moltiplicate?"), poi fa scrivere allo studente la regola del prodotto in forma simbolica, poi imposta $u$ e $v$, e verifica l'espressione finale solo dopo che lo studente l'ha ricostruita.

**Una politica di aiuto graduato.** L'assistenza può adattarsi tramite una scala di livelli: tentativo indipendente → domanda [[metacognition|metacognitiva]] → spunto concettuale → identificazione della regola rilevante → impostazione di parte del problema → passaggio intermedio svolto → soluzione svolta → lo studente spiega → lo studente risolve autonomamente un problema di trasferimento. Vedere una soluzione svolta non dimostra padronanza, quindi dopo un aiuto sostanziale il tutor dovrebbe far tentare allo studente un problema paragonabile senza assistenza.

**Evitare l'uso improduttivo di suggerimenti.** L'interfaccia non dovrebbe rendere i suggerimenti illimitati una scorciatoia senza attrito, poiché le richieste premature di suggerimenti e la lettura superficiale dei suggerimenti sono associate a minori [[learning-gains|guadagni di apprendimento]]. Invece di `[Hint][Hint][Hint][Show Answer]`, il sistema potrebbe chiedere "cosa hai già provato?" e "cosa ti blocca?" (scegliere una regola, impostare l'equazione, svolgere l'algebra, comprendere il concetto, qualcos'altro) e fornire assistenza mirata.

**Sostenere il calcolo concettuale.** Il tutor dovrebbe collegare le procedure simboliche a rappresentazioni multiple (formula, grafico, tabella, interpretazione verbale, contesto fisico del tasso di variazione) per distinguere la fluidità procedurale dalla comprensione concettuale.

**Dashboard del docente.** Il sistema dovrebbe esporre evidenze aggregate anziché giudizi opachi dell'AI — per es. "regola del prodotto — 62% di padronanza dimostrata; pattern comuni: 18% omette un termine, 11% moltiplica le derivate" — con le diagnosi individuali presentate come ipotesi supportate da evidenze.

**Piano di valutazione.** Misurare le prestazioni durante l'uso del tutor, le prestazioni su problemi paragonabili senza di esso, la ritenzione differita, il trasferimento a problemi non familiari, la qualità della [[explainable-ai|spiegazione]] concettuale, la correzione delle misconcezioni, la [[help-seeking|ricerca di aiuto]] appropriata vs prematura, la fuga di risposte, i tassi di falsi positivi/negativi della diagnosi e gli [[differential-effects-across-learner-groups|esiti differenziali]]. Il confronto chiave è tra le prestazioni **con** il tutor e le prestazioni **senza** di esso successivamente — uno studente che passa dal 60% al 95% con assistenza ma resta al 60% autonomamente non ha ricevuto un tutoring efficace.

---

## Esempio 2: Progettare un assistente AI alla scrittura

Un assistente AI alla scrittura richiede una progettazione diversa perché la scrittura non ha un'unica risposta oggettivamente corretta. L'obiettivo è aiutare lo studente a diventare più abile nel pianificare, stendere, valutare e rivedere la propria scrittura. La knowledge base inquadra la scrittura come un **processo cognitivo, sociale e retorico**, il che significa che un sistema AI di scrittura può supportare l'apprendimento ma può anche eliminare esattamente il pensiero che il compito intendeva sviluppare. Si vedano [[writing-education]], [[ai-writing-support-stage-ownership-2026|From Planning to Revision]], [[coach-not-crutch-ai-writing|Coach not Crutch]] e [[feedback]].

**Obiettivi di apprendimento.** Il modello dello studente dell'assistente potrebbe tracciare l'argomentazione (specificità della tesi, allineamento affermazione-evidenza, controargomentazione), l'organizzazione (focus dei paragrafi, progressione logica, transizioni), le evidenze (rilevanza delle fonti, integrazione delle evidenze, interpretazione), la revisione (revisione globale e a livello di frase, valutazione del feedback) e lo stile (chiarezza delle frasi, grammatica, voce autoriale) — tracciando le **capacità** di scrittura, non solo il punteggio di un saggio.

**Ancorare l'assistente al compito.** Recuperare le istruzioni del compito, la rubrica del docente, le letture del corso, i requisiti di citazione, le convenzioni di genere, gli esempi del docente e la politica sull'uso dell'AI, così che il feedback possa riferirsi al compito effettivo ("la rubrica del tuo docente ti chiede di collegare ogni affermazione principale a evidenze da almeno due letture del corso") anziché inventare aspettative generiche.

**Trattare le fasi della scrittura in modo diverso.** Il coinvolgimento dell'AI in fasi diverse influenza diversamente la proprietà percepita — il supporto alla pianificazione riduce la proprietà meno del supporto alla stesura, e la stesura generata dall'AI produce la maggiore diminuzione di proprietà. Quindi un assistente può dare permessi diversi per fase: in pianificazione può porre domande, confrontare posizioni, sfidare assunti e criticare strutture, evitando però di generare l'intera argomentazione; in stesura lo studente produce prima il testo (l'assistente aiuta a sviluppare, non a prendere il controllo); in revisione l'assistente può identificare affermazioni poco chiare, segnalare evidenze mancanti, verificare se le evidenze supportano un'affermazione, rilevare problemi di organizzazione e confrontare una bozza con la rubrica — **diagnosticare prima di riscrivere**; in editing (dopo la revisione) può supportare grammatica, punteggiatura, concisione e formattazione delle citazioni.

**Interazione di esempio.** Per un saggio sull'obbligo dei [[online-teaching-and-learning|corsi online]], un sistema generico potrebbe riscrivere il paragrafo dello studente in prosa rifinita, svolgendo il lavoro intellettuale. Un assistente alla scrittura dice invece cosa funziona, nomina il problema principale (il paragrafo dà ragioni ma non spiega perché giustifichino un obbligo a livello di università), pone una domanda di revisione e chiede allo studente di completare una frase con parole proprie — lasciando allo studente la costruzione dell'argomentazione.

**Il feedback dovrebbe essere prioritizzato.** Ogni ciclo di feedback potrebbe contenere un punto di forza da preservare, un problema ad alto impatto, una domanda che richiede il giudizio dello scrittore e un obiettivo concreto di revisione — anziché sommergere lo studente di decine di commenti.

**Far valutare allo studente il [[ai-feedback-quality|feedback dell'AI]].** La [[feedback-literacy|feedback literacy]] è essa stessa un obiettivo di apprendimento; l'assistente dovrebbe chiedere periodicamente se lo studente è d'accordo con un suggerimento e perché, e consentire allo studente di rifiutare il feedback dell'AI — sviluppando il **[[evaluative-judgment|giudizio valutativo]]**, non l'obbedienza.

**Preservare la voce autoriale.** L'assistente dovrebbe distinguere errori, problemi di chiarezza, scelte retoriche e preferenze di stile, e non dovrebbe "correggere" automaticamente le ultime due — altrimenti rischia di omogeneizzare la scrittura verso qualunque stile il modello preferisca, specialmente per gli scrittori [[multilingual-learning|multilingue]] e per gli stili retorici non standard.

**Un modello dello studente basato sulla cronologia delle revisioni.** Anziché memorizzare solo i saggi finali, il sistema può imparare dalle revisioni dello studente (per es. un pattern ripetuto di "evidenza introdotta ma non interpretata" che migliora da saggio a saggio), adattandosi in base a evidenze di apprendimento.

**Coinvolgimento del docente.** Il docente controlla la rubrica, gli obiettivi del compito, le forme consentite di assistenza AI, la raccolta delle fonti, le aspettative di citazione, se la stesura generativa è permessa e quando è richiesta la revisione umana. Una dashboard del docente potrebbe mostrare pattern a livello di classe (per es. il 41% ha bisogno di supporto sul collegamento affermazione-evidenza) come segnale di [[formative-assessment]].

**Valutare l'assistente alla scrittura.** Misurare la qualità della scrittura assistita dall'AI e poi senza assistenza, la capacità di identificare debolezze in scritture non familiari, la qualità della revisione, l'accoglienza del feedback, la capacità di spiegare le revisioni, la proprietà da parte dello studente, la dipendenza dalla prosa dell'AI, la preservazione della voce, le distorsioni tra dialetti/scrittori multilingue/gruppi, l'allineamento con il giudizio del docente e il trasferimento differito. Un esperimento rivelatore confronta un gruppo che scrive in modo indipendente, un gruppo in cui l'AI genera/rivede il testo e un gruppo con assistente — tutti poi impegnati in un nuovo saggio senza AI: se il gruppo con testo generato dall'AI ottiene i risultati migliori in pratica ma pessimi senza AI, il sistema ha migliorato le prestazioni anziché l'apprendimento.

---

## Confronto tra le due progettazioni

| Domanda di progettazione | Tutor di calcolo | Assistente alla scrittura |
|---|---|---|
| Oggetto primario di apprendimento | Concetti matematici e risoluzione di problemi | Argomentazione e processo di scrittura |
| Verifica | Spesso oggettivamente verificabile | Richiede di solito giudizio contestuale |
| Strumenti deterministici | Motore di matematica simbolica / calcolatrice | Grammatica, citazioni, controlli della rubrica |
| Ruolo principale dell'AI | Diagnosticare e fare scaffolding del ragionamento | Diagnosticare e fare scaffolding della revisione |
| Rischio principale | Svelare la soluzione | Scrivere il testo al posto dello studente |
| Azione importante dello studente | Risolvere e spiegare | Stendere, valutare e rivedere |
| Modello dello studente | Concetti, procedure, misconcezioni | Argomentazione, evidenze, organizzazione, revisione |
| Salvaguardia chiave | Tentativo prima della soluzione | Prosa dello studente prima della riscrittura dell'AI |
| Test di trasferimento | Nuovi problemi di calcolo senza AI | Nuovo compito di scrittura senza AI |
| Criterio di successo | Ragionamento matematico indipendente | Scrittura indipendente e giudizio valutativo |

I due sistemi usano molte delle stesse [[ai-technologies|tecnologie]] AI ma incarnano **politiche pedagogiche diverse perché le discipline richiedono diversi tipi di pensiero**. Il principio comune: **identificare l'attività cognitiva che produce apprendimento, e progettare l'AI per supportare quell'attività senza sottrarla allo studente** — preservando il ragionamento matematico per il calcolo, e la paternità, le decisioni retoriche, la valutazione e la revisione per la scrittura. Quel principio è più fondamentale di qualunque particolare modello, prompt, framework di agenti o interfaccia utente.
