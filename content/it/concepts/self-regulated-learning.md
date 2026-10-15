---
connected_resources: [process-feedback]
title: Apprendimento autoregolato
created: "2026-10-14T21:55:00-04:00"
type: concept
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm, personalized-learning]
assessment: [formative-assessment]
connected_faqs: [reducing-over-reliance, study-with-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/self-regulated-learning
source_updated: "2026-10-15T10:00:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> L'apprendimento autoregolato (SRL) descrive gli studenti come partecipanti attivi che possono plasmare e sviluppare le proprie azioni cognitive e comportamentali in modo efficace. Gli strumenti di IA possono [[scaffolding|fare da impalcatura]] per lo sviluppo dell'SRL oppure vanificarlo involontariamente, rimuovendo proprio le richieste di regolazione che costruiscono la competenza.([[scheu-mobile-chatbot-journaling-motivation-2026]])([[stanford-evidence-base-ai-k12-2026]]) Le evidenze longitudinali affinano la distinzione: l'uso riflessivo attorno a uno strumento di IA prediceva il pensiero critico (β = 0,43) ma non l'incremento di conoscenza, e il solo accesso allo strumento non modificava nessuna delle due cose.([[melanou-genai-learning-dynamics-longitudinal-2026]])

## Domande da considerare

- L'SRL descrive studenti che gestiscono attivamente il proprio apprendimento attraverso tre fasi: prefigurativa (definizione degli obiettivi, pianificazione, autoefficacia), esecutiva (strategia, auto-osservazione) e di autoriflessione (valutazione, adattamento). Prima di proseguire nella lettura: quale di queste fasi svolgi davvero bene — e quale salti anche se sai che non dovresti?
- La tensione centrale della pagina: l'IA può fare da impalcatura per l'autoregolazione oppure vanificarla, rimuovendo le richieste di regolazione che costruiscono la competenza. Come può uno strumento che rende un compito più facile renderti al contempo un regolatore più debole del tuo apprendimento — e riesci a percepire la differenza nel tuo uso?
- Gli studenti mostrano spesso un «deficit di produzione»: possiedono la conoscenza sull'autoregolazione ma non la mettono in atto spontaneamente — chiedono a un chatbot di «estrarre le idee principali» e saltano del tutto la pianificazione e il monitoraggio. Ti è capitato di fare l'equivalente cognitivo di questo, pur conoscendo la strategia migliore?
- Quando il supporto è presente, il tuo giudizio può uscire di scena: in uno studio sui dati di tracciamento è stato il supporto disponibile, non l'accuratezza metacognitiva dello studente, a determinare la strategia di revisione scelta. Se un aiuto esterno scavalca la tua lettura del tuo apprendimento, quale giudizio conserveresti deliberatamente nelle tue mani?
- La ricerca ha individuato un «divario di [[trust-calibration|mancalibrazione]]»: gli studenti possono *percepire* più apprendimento con la GenAI trattenendone di meno — preferendo l'IA agli appunti nonostante una ritenzione più debole. Se ti senti produttivo mentre usi uno strumento, come potresti mai scoprire che in realtà non stai imparando di più?
- Che la GenAI funzioni da impalcatura, da scorciatoia o da partner dipende più dalla capacità di regolazione dello studente che dallo strumento stesso. Ma la pagina mostra anche che l'autoregolazione attutisce — senza annullare — il danno dello scaricamento cognitivo profondo. Che cosa significa questa riserva «attutisce ma non annulla» per la progettazione di strumenti di IA migliori?
- Fissa un obiettivo prima di leggere: scegli un compito per cui usi regolarmente l'IA e decidi in anticipo quale delle tre fasi dell'SRL (prefigurativa, esecutiva, riflessiva) proteggerai deliberatamente dall'automazione. Quale risultato ti dirà che ha funzionato?

## Introduzione

L'SRL è il processo attraverso cui gli studenti gestiscono attivamente il proprio apprendimento in tre fasi interconnesse:

1. **Prefigurativa:** definizione degli obiettivi, pianificazione strategica, credenze di [[self-efficacy]]
2. **Esecutiva:** impiego delle strategie, auto-osservazione, focalizzazione dell'[[cognitive-psychology|attenzione]]
3. **Autoriflessione:** [[self-assessment]], attribuzione causale, adattamento

Gli studenti autoregolati competenti impiegano strategie cognitive per migliorare il successo e utilizzano la [[metacognition]] per affinare continuamente i propri processi di apprendimento.([[scheu-mobile-chatbot-journaling-motivation-2026]])

Il lavoro empirico in un corso mediato dalla tecnologia conferma i legami tra le fasi: in uno studio adattivo di otto settimane sulla stocastica (194 studenti), il valore del compito, l'autoefficacia, l'orientamento agli obiettivi e le emozioni positive nella fase pre-azionale predicevano il comportamento regolatorio in fase di azione, mentre le emozioni negative lo ostacolavano, e la soddisfazione post-azionale si riversava nella fase pre-azionale successiva ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh & Fromm (2026)]]).

Una mappatura sistematica di 84 studi su IA e SRL ha rilevato che la ricerca si concentra sugli studenti dell'istruzione superiore e sugli aspetti metacognitivi e cognitivi dell'autoregolazione, con la dimensione motivazionale poco esplorata e oltre un terzo degli studi che non specificava alcuna teoria dell'SRL ([[banihashem-ai-srl-systematic-mapping-review-2025|Banihashem et al. (2025)]]).

Fondamentale: l'SRL attorno all'IA è modellato dalla *percezione* oltre che dal comportamento: [[yilmaz-genai-feedback-srl-online-higher-ed-2026|Yilmaz et al.]] dimostrano che il fatto che gli studenti percepiscano un feedback come proveniente dall'IA o da un essere umano influenza significativamente il loro apprendimento autoregolato e il comportamento di revisione — un promemoria del fatto che l'inquadramento sociale dell'IA, e non solo il suo contenuto, cambia il modo in cui gli studenti regolano attorno ad essa.

Una modalità di fallimento si colloca prima che la regolazione inizi: la procrastinazione dell'apprendimento assistita dalla GenAI — un ritardo non necessario nell'avviare un lavoro supportato dalla GenAI nonostante un'intenzione genuina di usarla. Tra 1.243 studenti universitari cinesi, un uso più frequente della GenAI si accompagnava a una minore procrastinazione (β = −0,195), e l'ansia verso l'apprendimento della GenAI rafforzava il legame tra intenzione e ritardo ([[genai-learning-procrastination-planned-behavior-2026|Li et al. (2026)]]).

Il punto in cui la GenAI entra nel ciclo ne decide l'effetto: mappando le fasi prefigurativa, esecutiva e riflessiva di Zimmerman sugli ambienti mediati dall'IA, un quadro di co-agency sostiene che il punto di ingresso determina se lo strumento amplifica o erode il senso di controllo dello studente, e che lo scaricamento supporta l'apprendimento trasformativo solo quando la decisione è intenzionale anziché di routine ([[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]]).

Un'indagine trasversale su 434 studenti universitari di pedagogia speciale misura una di queste catene: l'alfabetizzazione alla [[generative-ai|GenAI]] era positivamente associata ai comportamenti di apprendimento autoregolato assistiti dalla GenAI (B totale = 0,701), agendo principalmente attraverso l'[[agency]] di apprendimento (B = 0,345) piuttosto che attraverso le emozioni da sfida (B = 0,061) ([[genai-literacy-srl-special-education-2026|Yang et al. (2026)]]).

## Supporto digitale per l'SRL

### Diari di apprendimento

I diari di apprendimento sono un intervento promettente per l'SRL: riflettendo sui propri processi di apprendimento, gli studenti aumentano la consapevolezza della cognizione e rafforzano la capacità di regolazione. Considerazioni chiave di progettazione:

- **La struttura conta:** i diari aperti producono spesso voci superficiali; le domande guida e i modelli di esempio ne migliorano la profondità
- **Decadimento della motivazione:** le app mobili per i diari registrano comunemente un rapido declino del [[student-engagement|coinvolgimento]] dopo pochi giorni
- **Compromesso dell'impalcatura:** l'assistenza dell'IA che scrive le riflessioni al posto degli studenti mina la pratica dell'SRL; l'assistenza che struttura le domande senza redigerne il contenuto la preserva

### Dashboard che comunicano i profili SRL agli insegnanti

[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] estendono il supporto digitale all'SRL al versante dell'insegnante: la loro dashboard di [[learning-analytics]] (DashED) comunica agli insegnanti, in classi ibride, profili di apprendimento autoregolato derivati dal machine learning, e il modo in cui gli insegnanti agiscono su tali profili dipende dal contesto. In uso, gli insegnanti universitari della classe capovolta seguivano un'esplorazione sequenziale e privilegiavano l'adattamento a livello di corso e la proiezione delle [[visualization|dashboard]] in classe, mentre gli insegnanti professionali rivisitavano le pagine di sintesi e usavano lo strumento principalmente per sedute di coaching individuali. Le azioni proposte dagli insegnanti erano modellate dal contenuto rappresentato e dal loro livello di insegnamento più che dal tipo di grafico — gli insegnanti universitari privilegiavano i test settimanali e l'adattamento del corso, quelli professionali un coaching diretto e individualizzato. Questo colloca la dashboard come un'impalcatura per la regolazione dell'insegnamento da parte dei docenti, con esigenze di progettazione che variano secondo il contesto anziché un'unica interfaccia ottimale.

La controparte rivolta agli studenti è più esile: una dashboard che mostrava a 46 studenti della secondaria i propri prompt GenAI e la sovrapposizione testuale con le risposte del modello veniva aperta solo da circa un terzo della classe, rendendo l'esposizione volontaria — e non la visualizzazione stessa — il vincolo decisivo ([[learning-analytics-genai-secondary-writing-2026|Fong et al. (2026)]]).

### L'esperimento 2×2 di Scheu et al. (2026)

In un esperimento randomizzato sul campo con 179 studenti nell'arco di 22 giorni, furono confrontati due principi di progettazione:

| Principio | Meccanismo | Effetto sull'SRL | Effetto sulla motivazione | Effetto sul coinvolgimento |
|---|---|---|---|---|
| **Corso basato su esempi** | diario riflessivo di 7 giorni su [[curriculum-design|curriculum]] e [[teacher-role]] con risposte modellate | Aumento della competenza percepita e del gradimento | **Positivo** | Costantemente positivo |
| **[[llm]] assistente per il diario** | GPT-3.5 riassume le bozze, pone domande di chiarimento, suggerisce riformulazioni | Nessun effetto diretto misurato sulle abilità SRL | **Nessun effetto** | Crescente nel tempo ([[feedback|circolo di retroazione]]) |

**Intuizione chiave:** il corso migliorava le abilità SRL *e* la motivazione intrinseca attraverso il [[transfer-of-learning|trasferimento di abilità]], mentre l'assistente migliorava il coinvolgimento senza influire sulla motivazione.([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Strumenti di IA e il ciclo reciproco SRL–motivazione

Un principio fondativo della teoria dell'SRL è che le abilità di auto-[[regulation]] e la [[motivation]] formano una **relazione reciproca**:

- SRL migliore → apprendimento più riuscito → autoefficacia più alta → motivazione più forte
- Motivazione più alta → impegno più faticoso → pratica SRL migliore

Gli strumenti di IA possono entrare in questo ciclo in punti diversi:

- **Progettazione SRL-first** (ad es. corsi strutturati, suggerimenti graduati, domande di riflessione): rafforza il ciclo costruendo un'abilità genuina
- **Progettazione engagement-first** (ad es. completamento automatico, generazione di contenuti): può aumentare il coinvolgimento comportamentale senza entrare nel ciclo della motivazione, rischiando la dipendenza dallo strumento

### La regolazione strategica della GenAI come SRL

[[ai-anxiety-strategic-regulation-writing-2026|Kim (2026)]] riformula l'uso efficace della [[generative-ai|GenAI]] nella [[writing-education|scrittura accademica]] come **regolazione strategica** — una pratica SRL messa in atto di verifica, revisione, adozione selettiva o rifiuto dell'output dell'IA. In uno studio con [[mixed-methods-research|metodi misti]] su 107 studenti, un'[[anxiety-and-stress|ansia verso l'IA]] più elevata era positivamente associata alla verifica e alla revisione (β = 0,24), mentre la capacità valutativa prediceva la revisione attiva e l'integrazione selettiva (β = 0,46). Gli studenti si raggruppavano in quattro tipi regolatori — Fiducia acritica (18,7%), Integrazione selettiva (34,6%), Trasformazione valutativa (31,8%) e Rifiuto strategico (14,9%) — mostrando che l'[[ai-literacy]] nell'[[higher-ed]] funziona meno come accettazione che come competenza regolatoria fondata sul [[evaluative-judgment]] giudizio valutativo e sulla responsabilità [[ethics|etica]]. Questo colloca l'SRL come meccanismo centrale che distingue l'uso critico dell'IA da quello acritico.

Il governo dello strumento è esso stesso una sfaccettatura misurabile: una validazione a due ondate con studenti cinesi di EFL (EFA N = 305; CFA N = 342) separa sei dimensioni regolatorie e nomina la *regolazione ambientale* — verificare l'accuratezza dell'output generato, filtrare le risorse suggerite e porre limiti alla dipendenza — come una dimensione a sé stante ([[genai-srl-l2-writing-scale-2026|Wang, Zhang e Zhang (2026)]]).

Classifica prima di delegare: [[scan-framework-task-assignment-generative-ai-2025|Tsim e Gutoreva (2025)]] trasformano l'autoregolazione in un protocollo per compito — etichetta ogni sotto-compito come Sostituire, Complementare, Aiutare o Non negoziabile, giustificalo in una breve nota metacognitiva e conserva una traccia di audit di prompt, bozze e revisioni umane — con il ciclo che si ripete così che l'assegnazione di un compito informa quella del successivo.

**L'interazione stessa come oggetto di regolazione.** [[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström e Palmqvist (2026)]] documentano la stessa richiesta di regolazione dall'altra direzione: in una dimostrazione di otto turni con un chatbot per preparare la risposta a un esame [[summative-assessment|da svolgere a casa]], l'output predefinito dell'IA restava all'estremità *[[quantitative-research|quantitativa]]* e multistrutturale della tassonomia SOLO — levigato, pronto per la consegna e pedagogicamente sottile — e raggiungeva un ciclo di apprendimento a tre passi utilizzabile solo dopo ripetuti interventi a meta-livello («questo è travolgente, puoi condensarlo?»). La loro conclusione è che l'uso produttivo richiedeva «proprio le abilità autoregolative che lo strumento avrebbe dovuto supportare»: lo studente deve fissare obiettivi incrementali, richiedere aggiustamenti di difficoltà e riflettere su ciò che non ha ancora compreso, in aggiunta al contenuto disciplinare stesso. Essi chiamano questa capacità [[ai-literacy|alfabetizzazione all'interazione con l'IA]] e trattano il disimpegno dallo strumento come una decisione regolatoria legittima anziché un fallimento di perseveranza ([[metacognition]]).

- **La soddisfazione non è autoregolazione.** [[aigc-affordance-student-self-regulation-2026|Liang et al. (2026)]] hanno intervistato 689 studenti universitari in programmi industria-istruzione e testato un modello di mediazione seriale in cui le affordance percepite dei contenuti generati dall'IA aumentano l'[[self-efficacy]] rispetto all'AIGC (beta = 0,583) e, attraverso essa, la [[motivation]] di apprendimento (beta = 0,565) e l'apprendimento autoregolato (beta = 0,250), con la motivazione come predittore singolo più pesante dell'SRL (beta = 0,527). I risultati negativi portanti si affiancano a questi percorsi: la qualità del feedback valutativo dell'IA prediceva fortemente la soddisfazione (beta = 0,712) ma non l'autoefficacia (beta = 0,131), e la soddisfazione non aveva alcun effetto significativo sull'apprendimento autoregolato (beta = 0,032). Un assistente gradito e ben funzionante non è quindi evidenza che la regolazione sia migliorata — il meccanismo passa attraverso la fiducia e la motivazione, non attraverso l'esperienza dello studente dello strumento.

### La riflessione consapevole della GenAI come SRL

[[5p-reflection-model-genai-2026|Il modello di riflessione 5P (Kadel et al. 2026)]] ricentra la riflessione strutturata nell'era della GenAI come pratica SRL messa in atto. Poiché gli studenti cocreano sempre più significato con l'IA, i modelli di riflessione tradizionali faticano ad autenticare la riflessione dello studente, così il modello 5P (Purpose, Process, Product, Pitfalls, Plan) fonde la definizione di obiettivi guidata dalla fase prefigurativa, la riflessione-in-azione (documentando prompt e iterazioni), la riflessione-sull'azione (validando l'output probabilistico contro fonti esterne), una fase esplicita di insidie per il rischio di [[hallucination-risk|allucinazione]], il plagio [[academic-integrity|accademico]] e l'eccessivo affidamento sul [[cognitive-offloading|sovraccarico cognitivo]], e un piano rivolto al futuro — integrando il monitoraggio emotivo lungo tutto il percorso. La sua filosofia del «processo prima del prodotto» tratta la documentazione strutturata dell'[[human-ai-collaboration|interazione umano-IA]] come la richiesta regolatoria che preserva autenticità, [[agency]] e profondità [[metacognition|metacognitiva]], collocando la riflessione consapevole della GenAI come un'impalcatura per l'autoregolazione anziché un suo sostituto.

## Rapporto con la progettazione specifica per il tutoring

[[stanford-evidence-base-ai-k12-2026|L'IA specifica per il tutoring]] si allinea con la progettazione SRL-first: fornisce impalcature graduate che preservano l'[[agency]] e richiedono un'autoregolazione strategica. L'IA per scopi generali rimuove spesso del tutto le richieste di regolazione.([[stanford-evidence-base-ai-k12-2026]])

Per esempio:
- Il chatbot [[conversational-ai|conversazionale]] specifico per il tutoring di Bastani et al. preservava il ragionamento passo dopo passo (richiesta SRL)
- La variante GPT per scopi generali si limitava a fornire le risposte (bypass dell'SRL)

## Evidenze attraverso i contesti

- **Evidenze miste e divario di mancalibrazione.** Una revisione rapida della ricerca PreK-12 sulla GenAI rileva che i guadagni metacognitivi durante i compiti supportati spesso non persistono quando il supporto viene rimosso, e che la GenAI può aumentare l'[[self-report-measures|apprendimento percepito]] anche quando l'apprendimento durevole è assente (il divario di mancalibrazione — gli studenti preferivano la GenAI agli appunti nonostante una ritenzione più debole). Gli studenti necessitano di una formazione esplicita e adeguata alla fase per decidere cosa delegare e quando conta lo sforzo indipendente.([[young-people-learning-generative-ai-rapid-review-2026]])
- **Tensione tra iniziativa [[agentic-ai|agentica]] e autoregolazione.** [[agentic-ai-pedagogical-best-practice-2026|Woollaston et al. (2026)]] osservano che quanto più gli agenti automatizzano un compito, tanto meno lavoro cognitivo autoregolato compie lo studente — perciò le progettazioni dovrebbero dare agli studenti il controllo sull'avvio degli agenti (impalcature dinamiche e in dissolvenza) per preservare la capacità autoregolatoria anziché esternalizzarla.
- **L'autoregolazione modella l'uso degli assistenti di codifica basati su IA.** [[computational-thinking-aica-2026|Uno studio sugli assistenti di codifica basati su IA]] ha rilevato che gli studenti con alto [[computational-thinking]] mostravano una maggiore coerenza autoregolatoria (pianificazione-esecuzione-autoriflessione) e usavano l'AICA per la comprensione del codice, mentre gli studenti con basso CT lo usavano per il recupero immediato delle risposte.
- **L'SRL co-occorre con una minore distrazione digitale nell'apprendimento online.** [[decreasing-digital-distraction-college-online-learning-2026|Shi et al. (2026)]], usando il data mining non supervisionato su 530 studenti universitari, hanno rilevato che le strategie SRL — definizione degli obiettivi, strutturazione dell'ambiente e gestione del tempo — co-occorrevano più coerentemente con una minore distrazione digitale nell'apprendimento online ([[online-teaching-and-learning|apprendimento online]]) dell'istruzione superiore ([[higher-ed|istruzione superiore]]), insieme al coinvolgimento studente-insegnante e studente-contenuto. Il risultato colloca la formazione concreta all'SRL come intervento ad alta leva per uno studio online focalizzato.
- **La consapevolezza metacognitiva, non l'accesso allo strumento, è il motore più forte della performance adattiva nelle discipline STEM.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai e Alshahri (2026)]] hanno costruito e validato l'AI-STEM-MLCS con 649 studenti della secondaria in Arabia Saudita (CFI = 0,983, RMSEA = 0,019; ω di McDonald = 0,888-0,905) e hanno rilevato che le sue quattro dimensioni spiegavano il 68% della varianza nella performance di apprendimento autoregolato (R² = 0,68). La consapevolezza metacognitiva basata sull'IA era il predittore più forte (β = 0,38, p < 0,001), seguita dal trasferimento cognitivo e dall'adattabilità (β = 0,29, p = 0,008) e dall'apprendimento autoregolato potenziato dall'IA (β = 0,21, p = 0,040), mentre il ragionamento creativo e critico AI-STEM non prediceva il criterio (β = 0,14, p = 0,135). Gli autori interpretano lo schema come evidenza che il feedback [[adaptive-learning|adattivo]] eleva la performance STEM principalmente spingendo gli studenti a esaminare gli errori, ricalibrare e riutilizzare le strategie, così che lo strumento funziona meglio come diagnostico che localizza le lacune del meta-apprendimento che come punteggio globale unico. È una misura di [[self-report-measures|autodichiarazione]] validata in un unico sistema nazionale, perciò i coefficienti sono provvisori.
- **Il supporto esterno può scavalcare il giudizio metacognitore dello studente.** [[iqbal-human-genai-support-essay-revision-2026|Iqbal et al. (2026)]] hanno tracciato 87 studenti di EFL che revisionavano un saggio con [[generative-ai|GenAI]] (ChatGPT 4.0), supporto di un esperto umano o nessun supporto. La condizione di supporto era di gran lunga il correlato più forte della strategia di revisione scelta dallo studente (V di Cramér = 0,668), ben prima del trascinamento dal compito di scrittura precedente (V = 0,333), mentre l'accuratezza del giudizio metacognitivo (p = 0,172), l'abilità di scrittura (p = 0,261) e la [[motivation]] (p = 0,683) non erano associate. Il giudizio metacognitivo tracciava la strategia solo quando non era disponibile alcun supporto (test di permutazione p = 0,0460). Gli studenti con supporto GenAI guadagnavano di più (circa 4 punti in media con la strategia di diminuzione della ricerca di aiuto, contro −0,5 punti per la stessa strategia con supporto di esperto umano), eppure nessuna strategia di revisione era associata al cambiamento di punteggio (H(3) = 3,895, p = 0,273), perciò i guadagni provenivano dallo strumento anziché da una migliore autoregolazione. L'orientamento degli autori è che la GenAI dovrebbe stimolare la riflessione sulla propria strategia di revisione anziché fornire aiuto diretto.
- **L'uso riflessivo traccia il pensiero critico, non l'incremento di conoscenza.** [[melanou-genai-learning-dynamics-longitudinal-2026|Melanou et al. (2026)]] hanno seguito tre classi parallele di studenti di informatica aziendale (N = 87) per un corso di nove settimane, con la conoscenza in aumento in ogni gruppo (F(1, 50) = 29,87, p < 0,001, η²p = 0,374) e senza vantaggio dell'IA, senza interazione Tempo × Gruppo e senza effetto Matthew (F(1, 48) = 2,46, p = 0,124; BF01 = 8,70). L'uso riflessivo (controllare le fonti e verificare l'output dell'IA prima di adottarlo) era marcamente più alto nella condizione IA (3,72 contro 2,82; F(1, 40) = 20,21, p < 0,001) e prediceva il pensiero critico (β = 0,43, p < 0,001) ma non l'incremento di conoscenza, che era invece predetto dal carico cognitivo pertinente (β = 0,51, p = 0,001). La lettura pratica è che l'accesso all'IA non è di per sé un intervento, e che il suo rendimento metacognitivo emerge nella qualità del ragionamento prima di emergere nei punteggi dei test.

- **È la struttura, non la sola IA, a produrre i guadagni di SRL.** La mappatura delle fasi di Zimmerman sull'istruzione ibrida basata sul progetto con l'IA come [[scaffolding|impalcatura metacognitiva]] ha prodotto un N-Gain di 0,72 contro 0,28 per l'istruzione convenzionale (t = 8,47, p = 0,001, [[ai-project-hybrid-learning-self-regulated-2026|Priyambudi et al. (2026)]]), i quali sostengono che l'IA rafforza l'autoregolazione solo all'interno di una struttura del compito — l'uso non strutturato rischia la pigrizia metacognitiva.

## SRL mediata dagli LLM: impalcatura, scorciatoia o partner?

Un gruppo di studi delle Learning Letters (2026) converge su una tensione centrale: la [[generative-ai|GenAI]] può fare da impalcatura, vanificare o fare da partner per l'autoregolazione a seconda della progettazione e del modo in cui gli studenti ne regolano l'uso. L'evidenza indica l'SRL stesso — non lo strumento — come variabile decisiva.

- **[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al.]]** rilevano che gli LLM sono intessuti in un *ecosistema stratificato di [[help-seeking]]* anziché sostituire il supporto umano: gli studenti tentano prima i compiti in modo indipendente, poi consultano ChatGPT come primo passo a bassa soglia, i pari per la negoziazione concettuale e i docenti per le questioni ad alto rischio. Privilegiano la **ricerca di aiuto strumentale** (suggerimenti, guida passo dopo passo) rispetto alla **ricerca di aiuto esecutiva** (soluzioni dirette), esercitando una [[trust]] selettiva e verificando gli output contro i materiali del corso — un processo in quattro fasi (decidere se l'aiuto è necessario, scegliere a chi chiedere, determinare il tipo di aiuto, giudicare l'aiuto ricevuto) che può essere misurato e insegnato.
- **[[atif-dickson-deane-scaffold-shortcut-genai-srl-2026|Atif e Dickson-Deane]]** inquadrano l'uso della GenAI come **[[cognitive-offloading]]** che può essere o *supportato da impalcatura* (gli studenti criticano e adattano gli output dell'IA, conservando [[agency]] e costruzione di senso) o *sostituzionale* (gli studenti accettano gli output con una verifica minima, trasferendo il controllo allo strumento). In uno studio su 267 studenti postgraduate di IT, lo stesso strumento poteva fare da impalcatura o da scorciatoia per l'SRL a seconda della strategia dello studente — gli utenti fiduciosi mostravano agency nella definizione degli obiettivi e nel monitoraggio; gli utenti meno fiduciosi vedevano la GenAI come una scorciatoia o una scorrettezza.
- **[[lim-bannert-student-regulation-genai-chatbot-2026|Lim e Bannert]]** mostrano concretamente il rischio: gli studenti hanno usato volontariamente un chatbot genAI (73%) e hanno ottenuto punteggi più alti nei saggi, ma hanno scaricato la comprensione e la sintesi (chiedendo al chatbot di «estrarre solo le idee principali») e si sono impegnati in quasi nessuna pianificazione o monitoraggio — esternalizzando decisioni regolatorie chiave. Questo riflette un **deficit di produzione**: gli studenti possiedono la conoscenza sull'SRL ma non la mettono in atto spontaneamente, perciò gli strumenti genAI dovrebbero stimolare la riflessione (un'impalcatura di monitoraggio) quando le query indicano scaricamento.
- **[[song-genai-learning-partner-srl-over-time-2026|Song et al.]]** dimostrano che l'SRL è insieme un'**attitudine stabile e uno stato dinamico**: le linee di base individuali sono coerenti, ma la conoscenza metacognitiva e il [[well-being]] declinano sistematicamente nel corso di un semestre, spinti dalle scadenze valutative. Mostrano che la GenAI può agire come **[[pedagogical-agent|partner di apprendimento]]** sensibile al contesto quando riceve dati personali, temporali e contestuali — supportando gli studenti senza sostituire il loro sforzo. Questo argomenta contro la [[personalized-learning|personalizzazione]] «una taglia per tutte» basata solo sull'attitudine di base.
- **[[de-barba-srl-genai-2026|de Barba]]** estende teoricamente l'SRL, sostenendo che il campo si è ristretto alla regolazione focalizzata sul compito e a proxy comportamentali ottimizzabili nella tecnologia educativa. L'articolo propone un resoconto cross-scale dell'**agency dello studente** — regolazione (all'interno dei compiti), integrazione (attraverso il tempo e i contesti) e posizionamento (criticamente in relazione alle condizioni che inquadrano l'apprendimento) — come orientamento progettuale per ambienti mediati algoritmicamente.
- **L'autoregolazione attutisce ma non annulla il danno dello scaricamento.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] mostra che la scrittura autoregolata attenua — ma non elimina — l'associazione negativa tra [[cognitive-offloading]] profondo e risultati indipendenti senza IA nella scrittura assistita dalla GenAI: l'interazione scaricamento-per-SRL era positiva (B = 0,22), appiattendo il danno da una pendenza di −0,54 (SRL basso) a −0,33 (SRL alto) ma senza annullarlo. Una condizione di supporto limitato che abbina limiti alla delega a una riflessione obbligatoria ha prodotto la performance indipendente più forte, evidenza che la regolazione metacognitiva protegge parzialmente gli studenti senza poter compensare pienamente la delega del lavoro cognitivo stesso.

**Dove si colloca il «noleggio» nei modelli di Winne.** [[rented-self-decoupling-performance-becoming-2026|de Barba (2026)]] mappa il meccanismo sull'SRL come operazioni che il sistema compie al posto dello studente: notare, monitorare e il giudizio valutivo sono esercitati dallo strumento, un impasse viene risolto dalla ricerca anziché dalla scelta If-Then, Else dello studente, e i criteri con cui lo studente giudica sono presi a prestito anziché costruiti. Una capacità che uno studente crede di possedere mentre la possiede lo strumento — *noleggio nascosto* — sopprime il segnale di errore che altrimenti innescherebbe la regolazione, e dieci proposizioni specificano cosa testare, inclusi costi maggiori nell'acclimatamento al dominio e criteri che derivano verso i punti di riferimento propri del modello.

La lezione collettiva: **l'SRL è il meccanismo centrale che distingue l'uso critico dell'IA da quello acritico.** Che la GenAI funzioni da impalcatura, scorciatoia o partner dipende dalla capacità di regolazione degli studenti e dal fatto che gli strumenti siano progettati per preservare (anziché rimuovere) le richieste di regolazione che costruiscono la competenza.

Quale supporto è in gioco decide quale mediatore porta l'associazione: tra 3.003 insegnanti pre-servizio cinesi, il supporto percepito dello strumento di IA agiva sulla competenza innovativa principalmente attraverso l'[[self-efficacy]] rispetto all'IA (60,88% dell'effetto totale di quel percorso), mentre il supporto percepito dell'ambiente intelligente scolastico agiva principalmente attraverso l'apprendimento autoregolato (29,64% contro 18,60%) ([[preservice-teachers-ai-support-innovative-competence-2026|Liu et al. (2026)]]).

## Implicazioni

- **Per gli strumenti di diario/chatbot:** combinare l'istruzione sull'SRL (basata sul corso) con un supporto opzionale alla scrittura per ottenere sia i guadagni di motivazione sia quelli di coinvolgimento
- **Per i progettisti di strumenti:** rendere la valutazione un passo obbligatorio, non opzionale. Iqbal et al. hanno rilevato che il supporto disponibile, anziché il giudizio metacognitivo dello studente, decideva la strategia di revisione usata dagli studenti e che i guadagni di punteggio con la GenAI non provenivano da una migliore regolazione, mentre Melanou et al. hanno rilevato che l'uso riflessivo prediceva il pensiero critico laddove il mero accesso allo strumento non lo faceva. Sono le interazioni che chiedono agli studenti di verificare, confrontare e ri-strategizzare a portare il valore di apprendimento.
- **Per i docenti:** trattare la consapevolezza metacognitiva basata sull'IA come prima leva e verificarla esplicitamente. Alatoai e Alshahri l'hanno trovata il predittore più forte della performance adattiva nelle discipline STEM (β = 0,38) e il trasferimento e l'adattabilità secondi (β = 0,29), perciò le attività che fanno esaminare agli studenti gli errori e portano una strategia in un nuovo contesto problematico fanno più delle sollecitazioni generiche al ragionamento critico o creativo.
- **Per le [[educational-policy-ai|politiche sull'IA]]:** i criteri di approvvigionamento dovrebbero chiedere se uno strumento sviluppa o sostituisce l'autoregolazione
- **Per i [[research-methods-aied|ricercatori]]:** gli studi di lungo periodo che misurano gli esiti dell'SRL (non solo la performance immediata) sono essenziali; Melanou et al. mostrano il rendimento di quella pazienza, poiché l'uso riflessivo di un semestre ha mosso il pensiero critico (β = 0,43) senza muovere l'incremento di conoscenza.

## Agenti conversazionali e SRL nei giochi di simulazione

- **Agenti conversazionali a supporto dell'apprendimento autoregolato nei giochi.** Wenzel, Geiger e Liening (2026) mostrano che un agente conversazionale di IA (Lara) in un gioco di [[simulation|simulazione]] aziendale può supportare l'apprendimento autoregolato attraverso feedback [[formative-assessment|formativi]] basati su metriche, guida su richiesta e riflessione strutturata — affrontando la limitazione comune per cui i giochi di simulazione offrono un feedback formativo e domande di riflessione limitati. Le valutazioni con studenti insegnanti e partecipanti al BSG hanno riportato percezioni positive della presenza cognitiva e [[community-of-inquiry|sociale]] dell'agente e del suo supporto all'autoregolazione.

## Rilevamento automatizzato dell'SRL: cosa si trasferisce e cosa no

- **I classificatori di SRL basati su embedding attraversano le lingue all'interno di un dominio, ma non tra domini.** Uno studio su 26 studenti (chimica e logica formale; protocolli think-aloud codificati con il modello di Winne e Hadwin) ha rilevato che i modelli basati su embedding (text-embedding-3-small) addestrati sull'inglese classificano l'SRL tedesco con circa 0,8 di AUC e circa 0,1 di degrado — tranne per l'enacting (circa 0,7). Il trasferimento tra domini fallisce: da chimica a logica scende a circa 0,6, l'enacting al caso (circa 0,5) — è il muro del dominio, non la lingua, a vincolare.
- **Tre modalità di fallimento spiegano dove si interrompe il trasferimento.** (1) Risoluzione dei concetti al significato quotidiano anziché di dominio — «cancel» contro «kürzen» in chimica — interrompe la classificazione dell'enacting. (2) Antropomorfizzazione — gli studenti tedeschi non abituati a un tutor pesantemente impalcato si rivolgevano a esso come a una persona, producendo enunciati fuori distribuzione; il trasferimento era migliore sulle piattaforme meno impalcate. (3) Ambiguità tra lettura di suggerimenti e formulazione di piani — i modelli non distinguono la lettura di un suggerimento metacognitivo dalla pianificazione senza dati di log. L'accorgersi degli errori è robusto in ogni condizione — notare di aver sbagliato è indipendente dal contesto. Rimedi: dizionari di esperti o fine-tuning per i termini di dominio; dati di log per i suggerimenti. ([[borchers-srl-language-generalization-2025]])

## Concetti collegati

- [[learners]] — Studenti: l'ombrello per i concetti del versante studente
- [[metacognition]] — il monitoraggio cognitivo su cui l'SRL si fonda
- [[self-assessment]]
- [[self-efficacy]] — una credenza della fase prefigurativa che guida lo sforzo
- [[scaffolding]] — supporto graduato che preserva la richiesta di regolazione
- [[feedback]] — l'input attorno a cui gli studenti regolano
- [[feedback-literacy]] — la capacità di agire sul feedback
- [[help-seeking]] — un comportamento SRL strategico
- [[motivation]] — il partner reciproco dell'autoregolazione
- [[cognitive-offloading]] — il rischio quando l'IA rimuove il lavoro di regolazione
- [[generative-ai]] — la tecnologia che può fare da impalcatura o vanificare l'SRL
- [[ai-literacy]] — competenza regolatoria nell'uso dell'IA
- [[self-directed-learning]] — il costrutto più ampio di autonomia
- [[agency]] — la capacità dello studente di agire con intenzione, centrale per regolazione, integrazione e posizionamento
- [[adaptive-learning]] — personalizzazione che può supportare la regolazione
- [[formative-assessment]] — feedback continuo per la regolazione
- [[learning-by-teaching]] — una strategia che costruisce l'autoregolazione
- [[intelligent-tutoring]] — sistemi che impalcano l'SRL
- [[llm]] — il modello sottostante agli strumenti di IA
- [[retrieval-spacing-interleaving]] — pianificazione, auto-verifica e scelte di strategia di studio che gli studenti compiono
- [[cognitive-surrender]]

## Articoli collegati

- [[aigc-affordance-student-self-regulation-2026]] — AIGC Affordance and Student Self-Regulation
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — AI-interaction literacy: steering a chatbot demanded the SRL it was meant to support (Brunnström & Palmqvist 2026)
- [[5p-reflection-model-genai-2026]] — The 5P reflection model for the GenAI era (Kadel et al. 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[de-barba-srl-genai-2026]] — Learner agency across scales: regulation, integration, positioning
- [[rented-self-decoupling-performance-becoming-2026]] — The rented self: rental mapped onto Winne's SRL models, with ten propositions and within-learner indices
- [[song-genai-learning-partner-srl-over-time-2026]] — GenAI as a context-aware learning partner over time
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — How students regulate learning with a genAI chatbot
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — Scaffold or shortcut? GenAI dual role in SRL
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[banihashem-ai-srl-systematic-mapping-review-2025]]
- [[yilmaz-genai-feedback-srl-online-higher-ed-2026]] — GenAI feedback and SRL: perceived source matters
- [[ai-anxiety-strategic-regulation-writing-2026]] — From AI anxiety to strategic regulation
- [[young-people-learning-generative-ai-rapid-review-2026]] — Mixed evidence on metacognition/self-regulation with GenAI
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and the self-regulation tension
- [[decreasing-digital-distraction-college-online-learning-2026]] — SRL and lower digital distraction in online learning (Shi et al. 2026)
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[scan-framework-task-assignment-generative-ai-2025]] — SCAN: a learner-facing loop of task identification, justification and post-task reflection
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[alatoai-ai-learning-environments-self-regulation-2026]] — A validated instrument for AI-supported self-regulation in adaptive STEM learning, with metacognitive awareness as the strongest predictor
- [[iqbal-human-genai-support-essay-revision-2026]] — Support condition, not metacognitive judgment, drove revision strategy choice in an essay-revision experiment
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Longitudinal: reflective AI use predicted critical thinking but not knowledge gain, with no Matthew effect
- [[genai-literacy-srl-special-education-2026]] — GenAI literacy related to self-regulated learning behaviors mainly through learning agency
- [[preservice-teachers-ai-support-innovative-competence-2026]] — Support type flips the mediator: AI self-efficacy vs self-regulated learning
- [[genai-learning-procrastination-planned-behavior-2026]] — GenAI-assisted learning procrastination: an intention-behavior gap that anxiety strengthens
- [[genai-srl-l2-writing-scale-2026]] — A validated six-dimension GenAI-SRL scale for L2 writing, with environmental regulation as its own dimension and a 12-item ant-colony-optimized short form
- [[borchers-srl-language-generalization-2025]] — Large Language Models Generalize SRL Prediction to New Languages Within But Not Between Domains (Borchers et al. 2025)
- [[ai-project-hybrid-learning-self-regulated-2026]] — Un modello di apprendimento ibrido basato sul progetto che utilizza l'intelligenza artificiale per potenziare l'apprendimento autoregolato degli studenti

