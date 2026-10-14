---
title: Engagement degli Studenti
created: "2026-10-14T22:04:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [motivation, self-regulated-learning, student-engagement]
technology: [generative-ai, learning-analytics]
audience: [learners]
level: [higher ed]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
reviewed_by: [editor]
translation_of: "concepts/student-engagement"
source_updated: "2026-10-08T09:45:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> L'**engagement degli studenti** — il grado e la qualità del coinvolgimento attivo di chi apprende nel processo di apprendimento, più spesso scomposto nelle dimensioni comportamentale, cognitiva e [[affective-computing|affettiva]]. Nella ricerca sull'[[ai-education|IA in educazione]], l'engagement degli studenti è sia un esito chiave (uno strumento di IA mantiene gli studenti coinvolti?) sia un meccanismo (l'engagement media tra il design dell'IA e l'apprendimento?). È concettualmente distinto dall'apprendimento stesso — l'engagement è partecipazione all'apprendimento, non prova di guadagno cognitivo — e dalle metriche specifiche usate per misurarlo.

## Domande da considerare

- La pagina insiste che l'engagement non è la stessa cosa dell'apprendimento — uno studente può essere attivo dal punto di vista comportamentale (cliccando, trascorrendo tempo) pur essendo cognitivamente superficiale. Dove hai visto un alto "engagement" che ha prodotto poco apprendimento, e come te ne sei accorto?
- Pensa a un momento in cui eri profondamente coinvolto a livello cognitivo in qualcosa — alle prese davvero con un'idea. Cosa c'era di diverso rispetto alle volte in cui eri semplicemente occupato o intrattenuto, e uno strumento di IA potrebbe creare in modo affidabile quello stato?
- L'engagement è scomposto nelle dimensioni comportamentale, cognitiva e affettiva, che possono divergere. Perché pensi che i ricercatori insistano nel trattarle separatamente anziché come una cosa sola, e cosa misureresti per distinguerle?
- La ricerca suggerisce che l'engagement cognitivo profondo con l'IA predice l'apprendimento, mentre l'engagement superficiale predice l'eccessivo affidamento. Se uno strumento è "coinvolgente" ma superficiale, di chi è la colpa — del design, del compito o di chi apprende?
- Come potrebbe uno strumento di IA soddisfare [[agency|autonomia]], competenza e relazione (i bisogni dietro l'engagement) senza che queste caratteristiche si trasformino in intrattenimento superficiale che soppianta l'apprendimento reale?

## Introduzione

L'engagement è un costrutto multidimensionale radicato nella psicologia dell'educazione. L'**engagement comportamentale** si riferisce a partecipazione, sforzo, persistenza e attività on-task. L'**engagement cognitivo** si riferisce alla profondità dell'elaborazione mentale — elaborazione, [[critical-thinking|analisi critica]], auto-[[regulation|regolazione]] e investimento di sforzo mentale. L'**engagement affettivo** si riferisce a reazioni emotive come interesse, piacere, [[anxiety-and-stress|ansia]] e identificazione con l'apprendimento. Queste dimensioni possono divergere: uno studente può essere attivo a livello comportamentale (cliccando, trascorrendo tempo) pur essendo cognitivamente superficiale (accettando passivamente l'output), o affettivamente interessato pur essendo comportamentalmente distratto. Questa multidimensionalità è il motivo per cui l'engagement non deve essere equiparato a nessun singolo comportamento osservabile.

### Come l'engagement degli studenti appare nella ricerca

- **L'engagement come esito del design dell'IA:** la [[genai-motivation-engagement-2026|ricerca sulla motivazione con GenAI]] mostra che l'engagement nell'apprendimento supportato dalla [[generative-ai|IA generativa]] segue la soddisfazione dei bisogni psicologici di base ([[self-determination-theory|autonomia, competenza, relazione]]) — l'engagement è il risultato a valle del supporto motivazionale, non della sola disponibilità della tecnologia. L'engagement è spesso misurato tramite [[self-report-measures|autovalutazione]] mentre l'engagement comportamentale deriva dai log di interazione, e i due non sono intercambiabili.

- **Guadagno di engagement senza guadagno di apprendimento, in uno studio in classe randomizzato a cluster:** [[domain-specific-chatbot-stem-enthusiasm-2025|Rücker e Becker-Genschow (2025)]] hanno randomizzato 195 classi di nona (gruppo sperimentale di 102 studenti) a un chatbot di matematica specifico di dominio o a materiali di differenziazione convenzionali per una singola lezione sul metodo di Erone per stimare le radici quadrate. L'interesse situazionale è aumentato sensibilmente nella condizione con chatbot (M = 2,63 vs 2,43, p = 0,00005, d di Cohen = 0,63) e l'accettazione su tutte e quattro le dimensioni del [[technology-acceptance-model|Technology Acceptance Model]] era alta, eppure il confronto delle prestazioni pre-post non ha trovato un'interazione significativa gruppo×tempo (F(1194) = 2,84, p = 0,094) e il carico cognitivo estrinseco era leggermente più alto. Lo studio è uno dei pochi test randomizzati a cluster di un chatbot personalizzato nella [[math-education|matematica]] [[k-12|secondaria]], e il suo risultato scisso è il punto: interesse e [[learning-gains|rendimento]] si sono mossi su tempi diversi, quindi un risultato di engagement non è evidenza di apprendimento.

- **Qualità anziché quantità:** l'[[critical-engagement-code-completion|engagement critico nel completamento di codice con IA]], l'[[icap-cognitive-engagement-llm-agents|analisi del discorso sull'engagement cognitivo]] e lo [[scaffolding-critical-engagement-genai-minority-students|scaffolding dell'engagement critico]] mostrano che l'engagement *profondo* (cognitivo) con l'IA predice l'apprendimento, mentre l'engagement *superficiale* (comportamentale) predice l'[[cognitive-offloading|Over-Reliance]] e lo spostamento dell'apprendimento che dominano la letteratura sui rischi della knowledge base.

- **Fragile e dipendente dal contesto:** [[polished-artifacts-fragile-engagement-2026|Polished artifacts, fragile engagement]] e i [[genai-tutor-engagement-patterns|pattern di engagement multi-istituzione]] rilevano che l'engagement varia per compito, contesto e studente — uno strumento di IA che coinvolge profondamente uno studente può produrre un comportamento superficiale e teso all'output in un altro.

- **Antecedenti motivazionali:** [[ai-availability-student-motivation|AI availability and motivation]] mostra che sapere che l'IA è disponibile può ridurre il valore percepito dell'engagement faticoso, in particolare per chi apprende in modo novizio — l'engagement è plasmato da aspettativa, valore e competenza percepita tanto quanto dalle caratteristiche dello strumento. **[[wang-goal-setting-ai-engagement-2026|Wang e Wang (2026)]]** estendono questo con un resoconto basato sulla teoria del goal setting su **758 studenti universitari di [[multilingual-learning|inglese]]** nell'apprendimento assistito dall'IA, mostrando che il **supporto dell'insegnante** accresce direttamente l'engagement e opera attraverso gli obiettivi di **padronanza e di performance** degli studenti (anziché gli obiettivi di evitamento). L'engagement nei contesti di IA non è quindi solo un esito individuale o di design — è anche **socialmente supportato** dall'insegnante e dagli orientamenti agli obiettivi che si incoraggia chi apprende ad adottare.

Quello [[scaffolding|supporto]] ha una controparte istituzionale con un doppio percorso. Il disegno a due studi di [[gai-advocacy-practice-art-education-2026|Chen (2026)]] (160 studenti d'arte in un esperimento con scenari, 425 intervistati) ha rilevato che l'incongruenza percepita tra la promozione della GAI da parte di un'università e le sue pratiche effettive di insegnamento e valutazione prediceva l'engagement nel processo creativo attraverso due valutazioni opposte — negativa via impedimento (β = −0,060, p = 0,004) e positiva via sfida (β = 0,217, p < 0,001) — con il pathways thinking che rafforza solo la via positiva, così che la stessa condizione istituzionale coinvolgeva alcuni studenti e disimpegnava gli altri.

- **Competenza ed emozione come motori dell'engagement:** [[chatbot-engagement-genai-competency-emotion-2026|Zhao et al. (2026)]] modellano **871 studenti universitari** che interagiscono con un chatbot [[llm|LLM]], rilevando che la **competenza in GenAI** predice l'engagement con il chatbot sia direttamente sia indirettamente attraverso le **emozioni positive** (la via affettiva), e che sia la competenza sia l'emozione positiva predicono l'engagement e le emozioni positive di apprendimento. L'engagement è quindi congiuntamente un esito di *competenza* e un esito *affettivo* — chi apprende e manca di [[teacher-ai-competency|competenza nell'IA]] e prova ansia o frustrazione si disimpegna, il che ha implicazioni per la formazione sull'[[ai-literacy|alfabetizzazione nell'IA]] come intervento sull'engagement anziché come mero obiettivo di competenza.

- **Engagement cognitivo associato alla disciplina nelle chat studente-IA.** [[student-ai-conversations-cognitive-engagement-2026|Chang e Li (2026)]] mostrano che i prompt degli studenti all'IA codificano in media una domanda cognitiva di ordine superiore del ~62%, ma i profili di engagement per livello di Bloom differiscono nettamente per disciplina ([[stem-education|STEM]] prevalenza di Apply 20,8%, lingue prevalenza di Understand 31,7%, scienze sociali prevalenza di Create 33,8%). Usando un disegno within-person, hanno rilevato che gli stessi studenti producevano significativamente più prompt di ordine superiore in scienze sociali che nei corsi STEM (p < .001), con variazione a livello di corso superiore alla variazione a livello di studente — evidenza che l'engagement cognitivo con l'IA è plasmato dal contesto disciplinare, non solo dallo stile individuale.

- **Il [[ai-feedback-quality|feedback dell'IA]] sostiene l'attivazione comportamentale.** L'esperimento di tipo lab-in-the-field di [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] durato un semestre ha rilevato che gli studenti che ricevevano feedback individuale di GPT-4 su compiti aperti hanno sostenuto la partecipazione più alta su otto compiti settimanali (~50% all'ultimo, vs ~30% per i gruppi con feedback del docente o dei pari) e hanno scritto ~29 caratteri in più per risposta — il feedback IA individuale ha attivato l'engagement sia sul margine estensivo (partecipazione) sia sul margine intensivo (sforzo per risposta), anche se gli studenti hanno valutato il [[peer-assessment|feedback dei pari]] leggermente più alto.

- **Predire l'uso accademico dell'IA a partire dai costrutti di apprendimento.** Un framework esplorativo di [[reinforcement-learning|machine learning]] ha analizzato dati di sondaggio su 166 studenti universitari per identificare i costrutti legati all'apprendimento associati all'uso accademico previsto di ChatGPT, usando l'analisi SHAP per mantenere l'[[explainable-ai|interpretabilità]]. I risultati informano su come engagement, supporto all'apprendimento e altri costrutti plasmino l'incorporazione degli strumenti di IA nel lavoro accademico degli studenti.

- **L'accesso a uno strumento di IA può *abbassare* l'engagement misurato, e i tassi di completamento non lo mostreranno.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] hanno randomizzato l'accesso al tutor su 13 blocchi in una grande università pubblica statunitense e hanno rilevato che la partecipazione registrata sulla piattaforma è scesa di 0,90 DS, le visualizzazioni di pagina di 0,37–0,38 DS e i giorni attivi di 0,51–0,61 DS — mentre la consegna dei compiti e la consegna puntuale non erano alterate. La dissociazione è la lezione di misurazione: un corso che monitorasse solo il completamento dei compiti non avrebbe visto nulla, perché la riduzione risiedeva nell'attività di discussione, quiz e interazione con il docente che la piattaforma registrava. Gli studenti nelle sezioni trattate hanno anche riferito di porre all'insegnante meno domande di contenuto (circa il 57% rispetto al 44%), quindi il calo coincideva con una sostituzione che si allontanava dal contatto umano anziché con un disimpegno dal corso.

- **La latenza di risposta è una leva dell'engagement.** In 1.137 sessioni di tutoraggio Quantitative AI, risposte più rapide si associavano a più messaggi degli studenti e a più pratica corretta (tempo mediano di risposta da 1,9 s a 31,0 s tra i modelli; latenza inferiore correlata con l'engagement a ρ di Spearman = −0,81, p = .0056), una catena che gli autori leggono come spiegazione di come modelli che ottengono risultati non notevoli sulla qualità di insegnamento raggiungano comunque guadagni a livello umano ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]).

- **L'uso dell'IA può accompagnarsi a maggiore assenteismo in classe mentre la fiducia non lo predice.** Un'indagine PLS-SEM su 291 studenti universitari portoghesi ha rilevato che l'uso generale dell'IA era associato positivamente all'assenteismo (β = 0,148, f² = 0,029) e all'autoefficacia per l'apprendimento indipendente, eppure l'autoefficacia stessa non prediceva l'assenteismo (β = −0,068, p = 0,276) — il pattern "fiducioso ma assente" dello studio. L'associazione con la frequenza era modesta e secondaria rispetto all'influenza dei pari (β = 0,510, f² = 0,326) e alla gestione del tempo (β = −0,163), e poiché il costrutto dell'uso dell'IA era unidimensionale e mescolava item orientati al supporto con item orientati alla sostituzione, lo studio non può separare l'uso complementare da quello sostitutivo né stabilire la direzione ([[confident-but-absent-ai-use-absenteeism-2026|Franco et al. (2026)]]).

### Misurare l'engagement: il problema della scelta della metrica

L'engagement è operazionalizzato attraverso una gamma di segnali osservabili. Le **metriche comportamentali** misurano ciò che chi apprende *fa* (tempo sul compito, conteggi di attività, frequenza di interazione, persistenza); le **metriche cognitive** misurano come chi apprende *pensa* (profondità di elaborazione, engagement critico, analisi del discorso); le **metriche affettive** misurano come chi apprende *si sente* (emozione, motivazione, interesse); e le **metriche contestuali** colgono il multitasking e l'attenzione. La ricerca sull'IA in educazione combina sempre più spesso questi elementi e tratta l'engagement come un meccanismo mediatore tra il design dello strumento di IA e i [[learning-gains|risultati di apprendimento]], anziché come un esito in sé.

- **Sei famiglie di applicazioni dell'IA + misurazione multi-metodo:** la [[ai-student-engagement-online-learning-review-2025|revisione sistematica di Zhou (2025)]] di 24 studi WoS mappa sei applicazioni dell'IA per l'engagement — [[conversational-ai|chatbot]] nella progettazione dei corsi, riconoscimento di emozione/volto/voce e eye tracking, ML per l'analisi dei dati, supporto all'interazione docente–studente, feedback e raccomandazioni personalizzati, e bot basati sull'IA in ambienti di apprendimento smart. Trova che integrare molteplici modalità e fonti di dati dell'IA fornisca una visione più accurata e in tempo reale dell'engagement cognitivo, emotivo e comportamentale rispetto agli approcci a fonte singola — rafforzando il problema della scelta della metrica sopra esposto.

La scelta della metrica è definitoria: uno studio che misura l'engagement come *tempo sul compito* può concludere che uno strumento di IA accresce l'engagement quando gli studenti trascorrono più tempo a interagire con esso, mentre uno studio che misura l'engagement come *elaborazione critica* può giungere alla conclusione opposta per lo stesso strumento. Questo è il motivo per cui la ricerca della knowledge base distingue l'engagement (partecipazione) dall'apprendimento (guadagno cognitivo effettivo) — si veda [[genai-performance-vs-learning|performance vs apprendimento]] — e per cui le metriche di engagement devono essere validate rispetto a ciò che dichiarano di misurare.

- **L'engagement come segnale fragile e dipendente dalla situazione:** [[polished-artifacts-fragile-engagement-2026|Polished artifacts, fragile engagement]] e i [[genai-tutor-engagement-patterns|pattern di engagement multi-istituzione]] rilevano che l'engagement varia per contesto, compito e studente — lo stesso strumento produce un forte engagement per alcuni studenti e un comportamento superficiale teso all'output per altri.

- **Telemetria comportamentale dalle [[edtech-platform|piattaforme]] di apprendimento:** la [[engagement-forecasting-its|previsione di sforzo e progresso]], il [[learning-engagement-assistant-lea|Learning Engagement Assistant]], la [[engagement-assessment-video|valutazione dell'engagement nell'apprendimento video]] e le [[interactive-learning-dashboards-engagement|dashboard di apprendimento]] traducono segnali comportamentali e fisiologici (attenzione, attività, persistenza) in metriche di engagement usate per il feedback adattivo e l'intervento del docente.

- **La sensoristica fisiologica aggiunge una modalità — e un problema di baseline.** [[e3sense-multimodal-learner-engagement-sensing-2026|E3Sense]] co-localizza sulla testa EEG a elettrodi secchi, occhiali di eye tracking ed elettrodi elettrodermici frontali e predice 450 valutazioni di engagement a livello di segmento su 30 partecipanti universitari su una scala ordinale a cinque livelli: AdaBoost sulla rappresentazione [[multimodal|multimodale]] fusa ha raggiunto il 75,0% di accuratezza bilanciata entro-un-livello contro il 63,0% del predire sempre la valutazione più comune. La ristrettezza di quel divario è il punto — il credito entro-un-livello consegna alla baseline senza sensori la maggior parte del suo punteggio su valutazioni distorte — e chiedere agli studenti cosa significhi per loro l'engagement ha spostato la stessa misura dal 64,6% al 71,5%, evidenza che l'etichetta di [[self-report-measures|autovalutazione]], non solo il sensore, decide cosa tali analytics possano affermare.

- **I vincoli di equità hanno bisogno di soggetti held-out per reggere.** Il regolarizzatore mirato al genere di uno stimatore di attenzione multimodale ha ridotto il divario di MAE in validazione da 0,02 a 0,005 ma ha aumentato sia il divario sia l'errore del gruppo peggiore su soggetti held-out, quindi una validazione ripetuta a livello di soggetto e consapevole dei sottogruppi appartiene a qualsiasi affermazione di sensing dell'engagement ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).

- **L'engagement come segnale per la modellizzazione di chi apprende:** l'[[engagement-intensity-learner-modeling|intensità dell'engagement come segnale per la modellizzazione di chi apprende]] usa la forza dell'engagement per informare i sistemi di IA adattivi, posizionando le metriche di engagement come input per lo [[student-modeling]] e l'[[adaptive-learning|apprendimento adattivo]] anziché come meri output di valutazione.

### Engagement vs apprendimento

Un tema centrale nella ricerca della knowledge base è che engagement e apprendimento devono essere distinti. Strumenti di IA che generano un alto engagement (tempo sul compito, volume di interazione) possono non produrre apprendimento se quell'engagement è passivo o si sostituisce al [[cognitive-offloading|lavoro cognitivo]] della comprensione — si veda [[genai-performance-vs-learning|performance vs apprendimento]]. Al contrario, la lotta produttiva e le [[desirable-difficulties|difficoltà desiderabili]] possono produrre apprendimento anche quando l'engagement di superficie appare più basso. L'engagement è quindi meglio trattato come un *meccanismo* — prezioso nella misura in cui riflette o abilita un'[[cognitive-psychology|elaborazione cognitiva]] significativa — anziché come un esito terminale.

La distinzione non è accademica. [[pramod-agentic-ai-motivational-pathways-2026|Pramod e Patil (2026)]] collocano l'engagement al centro del loro modello PLS-SEM, tra motivazione e [[community-of-inquiry|presenza sociale]] da un lato e performance *percepita* dall'altro — il coefficiente più grande nel loro modello, e pur sempre una percezione anziché una misura dell'apprendimento.

### La pedagogia media l'effetto dell'IA sull'engagement

Una sintesi sistematica dell'[[higher-ed|IA nell'istruzione superiore]] ([[long-ai-higher-ed-engagement-teaching-methods-2026|Long et al., 2026]]) enfatizza che il **[[teacher-role|metodo di insegnamento]] in cui uno strumento di IA è inserito è il mediatore decisivo** del fatto che esso coinvolga o meno gli studenti. Chatbot, sistemi adattivi e predictive analytics accrescono l'engagement soprattutto quando dispiegati all'interno di pedagogie interattive — flipped classroom, [[project-based-learning|apprendimento basato su progetti]] e cicli di [[feedback|feedback]] con scaffolding — anziché come strumenti autonomi. La revisione formalizza questo come il **modello PMAISE** ([[pedagogy|Pedagogical]] Mediation of AI for Student Engagement), mappando l'allineamento tra le [[ai-technologies|tecnologie]] dell'IA, le strategie pedagogiche e le dimensioni affettiva, comportamentale e cognitiva dell'engagement. L'implicazione è che gli esiti di engagement sono co-prodotti dallo strumento *e* dalla [[learning-design|progettazione didattica]] circostante: la stessa IA può amplificare l'engagement in una pedagogia e inibirlo in un'altra.

### Collegamenti ai concetti correlati

L'engagement degli studenti si collega alla [[motivation|motivazione]] e alla [[self-determination-theory|teoria dell'autodeterminazione]] come suoi motori psicologici, e alla [[student-experience|esperienza studentesca]] come contesto vissuto. La sua misurazione si basa sulla [[learning-analytics|learning analytics]] e sulla [[educational-measurement|misurazione educativa]], che forniscono gli strumenti [[quantitative-research|quantitativi]] per operazionalizzare le dimensioni sopra esposte. La distinzione tra engagement profondo e superficiale si lega direttamente all'[[self-regulated-learning|apprendimento autoregolato]] (chi apprende in modo autoregolato si impegna strategicamente), al [[cognitive-offloading|cognitive offloading]] e all'[[cognitive-offloading|Over-Reliance]] (la fiducia superficiale come modalità di fallimento), e alla [[metacognition|metacognizione]]. Nella progettazione di sistemi, i segnali di engagement alimentano lo [[student-modeling]] e l'[[adaptive-learning|apprendimento adattivo]], e gli esiti di engagement compaiono nelle valutazioni [[research-methods-aied|metodologiche]] degli interventi di IA in educazione.

- **Le caratteristiche di chi apprende moderano le lezioni basate su dialogo TTS (2026):** Nelle lezioni di dialogo insegnante–studente, studente–studente e insegnante–insegnante generate con LLM+TTS, lo stile di [[experiential-learning|apprendimento esperienziale]] e la disposizione al pensiero critico interagivano significativamente con il formato del dialogo per la motivazione basata su ARCS, indicando che il contenuto di dialogo generato dall'IA è diversamente motivante a seconda del profilo di chi apprende ([[tts-dialogue-lessons-learner-characteristics-2026]]).

- **Guadagni specifici per dimensione a livello primario (2026):** Un programma di [[writing-education|scrittura]] in L2 supportato dalla GenAI della durata di nove settimane con 301 studenti di classe 5 e 6 ha aumentato l'engagement comportamentale ed emotivo ma ha lasciato invariato quello cognitivo e metacognitivo, e i suoi autori individuano il ridotto automonitoraggio durante la scrittura come un rischio permanente ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]). Il pattern è un'istanza concreta della distinzione engagement-vs-apprendimento sopra esposta: più attività e più piacere non si sono tradotti in un'elaborazione più profonda.

- **La dissociazione può andare nell'altra direzione (2026):** In un corso professionale di interior design di 12 settimane, uno studio VR immersivo con un assistente didattico LLM integrato ha aumentato l'engagement cognitivo (d = 0,90) e comportamentale (d = 0,75) rispetto all'istruzione tradizionale basata su [[project-based-learning|progetti]] mentre l'engagement affettivo non differiva significativamente (d = 0,38) — l'inverso del caso della scrittura in L2 sopra riportato ([[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2026]]). I guadagni cognitivi e comportamentali qui si accompagnavano a un carico cognitivo riportato *inferiore*, che gli autori attribuiscono all'assistente che assorbe lo sforzo di ricerca e di integrazione interdisciplinare. Letti contro il caso della scrittura, i due studi suggeriscono che quale dimensione di engagement un intervento supportato dall'IA muove è una proprietà del design — [[collaborative-learning|collaborazione]] immersiva ricca di discorso vs supporto alla scrittura in solitaria — anziché dell'assistenza dell'IA in generale, e che un vantaggio affettivo non può essere assunto da un feedback ad alta fedeltà o intelligente.


- **L'alfabetizzazione nell'IA agisce sull'engagement attraverso le risorse psicologiche (2026):** Uno studio di mediazione moderata su 1.198 studenti universitari a Zhengzhou, Cina ([[ai-literacy-learning-engagement-psych-capital-2026|Wang, 2026]]) ha modellato l'engagement come un esito dell'[[ai-literacy|alfabetizzazione nell'IA]] anziché come un sottoprodotto dell'uso dello strumento. L'alfabetizzazione nell'IA prediceva l'engagement di apprendimento direttamente e anche indirettamente costruendo capitale psicologico, con la via indiretta a portare circa la metà dell'effetto totale — mediazione parziale, quindi una competenza tecnologica si converte in engagement solo in parte attraverso le risorse psicologiche che genera. L'impegno professionale, una variabile basata sull'identità, moderava il legame capitale-psicologico–engagement senza alcun effetto diretto proprio, e la traduzione del capitale psicologico in engagement era marcatamente più forte per gli studenti che si vedevano diretti verso la professione. Il pattern è l'istanza più chiara disponibile del punto sopra esposto che le caratteristiche di chi apprende condizionano come l'IA influisce sull'engagement.

- **La pratica con l'IA prima della lezione può aumentare la partecipazione dal vivo (2026):** Un esperimento sul campo preregistrato con 759 studenti MBA ha rilevato che prepararsi con un compagno di discussione vocale basato sull'IA aumentava i contributi volontari di circa il 31% nelle sessioni successive, ma solo dopo un secondo uso; un primo uso era preceduto da una partecipazione più bassa ([[assigned-ai-preclass-student-engagement-2026|Wang et al., 2026)]]).


- **Il disimpegno come mossa a livello di turno, non come stato stabile:** [[rho-disengaged-conversational-behaviors-2026|Rho et al. (2026)]] hanno codificato 5.522 enunciati di studenti rivolti a un agente insegnabile basato sull'IA in Math Nation in sei categorie di disimpegno conversazionale (False Answering, Mocking, Ghosting, Mirroring, Withholding, Random/Noisy) e hanno rilevato che il tasso di engagement dominava al 75,7% degli enunciati. Le associazioni basate sulla prevalenza di False Answering e Mocking con i punteggi al post-test non sopravvivevano a una verifica di sensibilità con annotazione umana. L'analisi sequenziale è il risultato rilevante per l'engagement: il cluster con le prestazioni più alte combinava un disimpegno moderato con forti transizioni di recupero verso l'engagement (Withholding → Engagement p = 0,83), mentre il più basso mostrava auto-loop persistenti senza recupero (Engagement auto-loop p = 0,96). Il Withholding era l'unico tipo di disimpegno che tendeva a persistere anziché risolversi — persistenza vs riparazione, non presenza vs assenza, è la distinzione che separa le traiettorie di engagement.

## Concetti collegati

- [[learners]] — Learners: l'ombrello per i concetti relativi a chi apprende
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[community-of-inquiry]] — Community of Inquiry (engagement agentico come dimensione del CoI)
- [[eportfolio]]
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[motivation]]
- [[self-determination-theory]]
- [[student-experience]]
- [[learning-analytics]]
- [[educational-measurement]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[student-modeling]]
- [[adaptive-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[framing-ai-use-for-students]]
- [[stakeholders]] — Ombrello: persone e pubblici nell'IA in educazione (studenti, insegnanti, progettisti, amministratori, decisori politici)
- [[self-report-measures]]
- [[productive-failure]]

## Articoli collegati

- [[rho-disengaged-conversational-behaviors-2026]] — Disengaged conversational behaviors and learning in student-AI dialogues (Rho et al. 2026)

- [[assigned-ai-preclass-student-engagement-2026]] — Voice-based AI pre-class practice raised voluntary class contributions by ~31%, but only after a second use (Wang et al. 2026)
- [[confident-but-absent-ai-use-absenteeism-2026]] — AI use tracked with greater class absenteeism while self-efficacy did not predict it, with peer influence the dominant correlate (Franco et al. 2026)
- [[gai-advocacy-practice-art-education-2026]] — When universities advocate GAI but practice falls short: student appraisals and creative process engagement in art education

- [[e3sense-multimodal-learner-engagement-sensing-2026]] — Head-confined EEG, eye tracking, and EDA predict five-level engagement ratings, while learners' own definitions shift the mapping (Anupkrishnan et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[ai-student-engagement-online-learning-review-2025]]
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI in higher ed: systematic review of engagement + mediating role of teaching methods
- [[genai-motivation-engagement-2026]] — Impact of Generative AI on Student Motivation and Engagement
- [[critical-engagement-code-completion]] — To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion
- [[icap-cognitive-engagement-llm-agents]] — Measuring Cognitive Engagement in Collaborative Discourse
- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns
- [[polished-artifacts-fragile-engagement-2026]] — Polished Artifacts, Fragile Engagement
- [[ai-availability-student-motivation]] — "Why Put in This Much Effort?": How AI Availability Shapes Motivation
- [[genai-performance-vs-learning]] — Distinguishing Performance Gains From Learning
- [[scaffolding-critical-engagement-genai-minority-students]] — Scaffolding Critical Engagement With GenAI
- [[engagement-intensity-learner-modeling]] — Engagement Intensity as a Learner-Modeling Signal
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant
- [[engagement-assessment-video]] — Engagement Assessment in Video Learning
- [[engagement-forecasting-its]] — From Heuristics to Analytics: Forecasting Effort and Progress
- [[interactive-learning-dashboards-engagement]] — Interactive Learning Dashboards and Engagement
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions
- [[wang-goal-setting-ai-engagement-2026]] — Goal-setting theory: teacher support, achievement goals, and engagement in AI-assisted English learning (758 Chinese students)
- [[chatbot-engagement-genai-competency-emotion-2026]] — GenAI competency and emotion as drivers of chatbot engagement (Zhao et al. 2026)
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[gpt4-feedback-student-activation-2026]]
- [[genai-writing-program-primary-l2-motivation-engagement]] — Dimension-specific engagement gains at the primary level (Lu et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Cognitive and behavioral engagement up, affective engagement flat, in an immersive VR PBL studio (Jin et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Cluster-randomized secondary mathematics trial: situational interest rose with a customized chatbot while test performance did not (Rücker & Becker-Genschow 2025)
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI literacy drives engagement directly and through psychological capital, amplified by professional commitment (Wang 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Access to an AI tutor lowered recorded platform participation by 0.90 SDs while homework submission held steady (Liu et al. 2026)
