---
title: "Metafore e analogie"
created: "2026-11-08T12:00:00-05:00"
updated: "2026-11-08T12:00:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [misconceptions, student-engagement]
technology: [generative-ai]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
translation_of: concepts/metaphors-and-analogies
source_updated: "2026-11-07T12:10:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Sintesi**: Le metafore e le analogie svolgono due compiti nell'educazione all'IA. Sono dispositivi di attribuzione di senso attraverso cui educatori e studenti decidono che cosa l'IA *è* (uno strumento, un assistente, una scatola nera, un oracolo), e sono dispositivi didattici che mappano un dominio di origine familiare su un concetto bersaglio poco familiare. La ricerca in questa base di conoscenza mostra che i due compiti sono collegati: le metafore che le persone possiedono modellano ciò che si aspettano dall'IA, quali caratteristiche notano e se si fidano di essa o la temono. La stessa logica della mappatura strutturale spiega perché un'analogia possa rendere memorabile un'idea tecnica mentre la rappresenta in modo silenziosamente errato. Un'analogia generata dalla GenAI e difettosa può essere più utile di una rifinita quando gli studenti conoscono il dominio di origine abbastanza bene da verificarne la mappatura e ripararla. La lezione pratica è scegliere le metafore in funzione della caratteristica che si insegna, controllare la tenuta strutturale e l'accessibilità culturale, e trattare il confronto come un oggetto di critica anziché come una spiegazione compiuta. L'evidenza è per lo più qualitativa, concettuale e su piccola scala; il campo ha poca evidenza causale che l'insegnamento basato sulle metafore migliori l'apprendimento.

## Domande da considerare

- Quale metafora usi per l'IA generativa quando non stai facendo attenzione, e che cosa rende quella metafora facile da vedere o facile da ignorare?
- Quando un'analogia familiare aiuta uno studente a capire un concetto tecnico, e quando invece instilla un'idea sbagliata che l'insegnamento successivo deve disfare?
- I domini di origine di chi contano come familiari? Se un'analogia dipende dallo sport, dai videogiochi o da un elettrodomestico da cucina, chi è incluso e chi resta fuori?
- Un tutor IA dovrebbe generare analogie per gli studenti, o dovrebbe dare agli studenti analogie da criticare? Che cosa cambia quando l'analogia è personalizzata sugli interessi dichiarati di uno studente?
- Un'analogia memorabile non è necessariamente un'analogia accurata. Che cosa chiederesti agli studenti di fare per mostrare che sanno distinguere le due cose?
- Quale evidenza ti convincerebbe che una lezione basata sulle metafore ha migliorato l'alfabetizzazione all'IA, e non solo reso la lezione più coinvolgente?

## Introduzione

Una metafora dice che una cosa è un'altra: l'IA è una scatola nera, un aiutante, uno specchio, una mappa. Un'analogia rende di solito il confronto più esplicito: una lista concatenata funziona come una catena, la ricorsione funziona come un insieme di scatole annidate, oppure usare l'IA è come cucinare con un Thermomix. Le due si sovrappongono nella pratica. Entrambe chiedono a chi apprende di trasportare relazioni da un dominio di origine familiare a un dominio bersaglio meno familiare, ed entrambe diventano fuorvianti quando la mappatura viene estesa oltre le relazioni che effettivamente conserva.

Questo le rende più che decorazione retorica. La ricerca sulla metafora concettuale tratta la metafora come una struttura del pensiero, non solo del linguaggio: i confronti disponibili alle persone modellano quali aspetti di un sistema appaiono salienti e quali spiegazioni appaiono naturali. Nell'educazione all'IA la posta in gioco è pratica. Uno studente che inquadra un LLM come un motore di ricerca può aspettarsi che recuperi fatti immagazzinati e può non cercare quelli inventati. Un docente che lo inquadra come uno studente avanzato può aspettarsi un giudizio e una competenza disciplinare che il modello non ha. Una discussione politica inquadrata attorno a un "disastro naturale" o a un "concorrente" sostiene risposte diverse da una inquadrata attorno a una "calcolatrice per parole".

Questa pagina copre entrambi i lati di quel doppio ruolo: la metafora come finestra su come educatori e studenti intendono l'IA, e l'analogia come tecnica didattica nell'alfabetizzazione all'IA e nelle spiegazioni generate dall'IA. Collega il lavoro sulle concettualizzazioni di docenti e studenti, i workshop sulle metafore in aula, le analogie generate dalla GenAI, la progettazione didattica basata sulle analogie e l'alfabetizzazione critica all'IA. Non tratta "metafora" e "analogia" come sinonimi esatti, ma le tiene insieme perché i problemi di progettazione sono condivisi: scelta del dominio di origine, tenuta strutturale, accesso culturale e critica.

## Perché le metafore e le analogie contano

Il punto di partenza teorico è la teoria della metafora concettuale, associata a Lakoff e Johnson. La sua tesi centrale è che le persone comprendono i domini astratti attraverso mappature da domini più concreti, e che quelle mappature possono diventare così familiari da non sembrare più confronti. "Il viaggio della vita" non è solo un modo di parlare; porta con sé assunzioni su direzione, progresso, ostacoli e destinazioni. Lo stesso vale per "l'assistente IA" o "la scatola nera IA".

Per l'educazione, la conseguenza utile è che la metafora può fare lavoro concettuale prima che un insegnante offra una definizione. Dà a chi apprende un punto su cui stare. Può anche portare con sé un'intera teoria dell'agentività: un "assistente" implica un utente al comando, mentre un "agente" implica iniziativa, e una "scatola nera" implica che la spiegazione è impossibile o superflua. Non sono descrizioni neutre. Distribuiscono responsabilità e fissano aspettative di fiducia.

Le analogie aggiungono un secondo strato: la corrispondenza strutturale. Una buona analogia didattica conserva le relazioni che contano per il concetto bersaglio, non solo la somiglianza superficiale. Una catena può illustrare una lista concatenata perché entrambe coinvolgono nodi connessi in sequenza. Un insieme di scatole annidate può illustrare la ricorsione perché ogni livello contiene una versione più piccola della stessa struttura. Il confronto è sempre parziale. La domanda pedagogica è se le relazioni conservate siano quelle di cui chi apprende ha bisogno, e se chi apprende riesca a vedere dove la mappatura si ferma.

Quella domanda separa questa pagina dall'[[explainable-ai|IA spiegabile]]. L'IA spiegabile chiede come rendere leggibili alle parti interessate le decisioni di un sistema. Un'analogia didattica chiede come chi apprende possa costruire un modello mentale utilizzabile di un processo. Una spiegazione del perché un modello ha segnalato uno studente non è la stessa cosa di un'analogia su come un modello genera testo, e nessuna delle due sostituisce l'altra.

## Come educatori e studenti descrivono l'IA

La base di conoscenza ha ormai diverse finestre sulle metafore che le persone usano davvero. Non convergono su un'unica immagine, e questo è in parte il punto.

[[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson e Casey (2025)]] hanno condotto workshop di analisi delle metafore con studenti, accademici e personale di supporto educativo. Le metafore dei partecipanti si sono raggruppate in quattro ampie categorie: *Funzioni* (confronti di tipo strumentale, come un coltellino svizzero), *Ruoli* (relazioni di tipo umano, come aiutante, compagno di studio o amico-nemico), *Qualità* (confronti inaffidabili o inconoscibili, come una scatola nera o una china scivolosa) e *Agentività* (confronti autonomi o minacciosi, come un concorrente o un robot sinistro). Due tensioni attraversavano l'insieme: l'agentività umana contro quella della macchina, e il noto contro l'inconoscibile. Il workshop non ha risolto quelle tensioni. Le ha rese disponibili alla discussione, che è ciò che un intervento basato sulle metafore può realisticamente fare.

[[engineering-faculty-metaphors-ai-understanding-2026|Gerhardt e colleghi (2026)]] hanno intervistato 57 docenti di ingegneria in discipline e università diverse e hanno analizzato le analogie che offrivano spontaneamente. I docenti inquadravano per lo più l'IA generativa come un essere sociale o un agente di tipo umano (un assistente, un dottorando) oppure come un oggetto tecnico (un motore di ricerca, uno strumento). Pochi la inquadravano come una forza ambientale o sistemica. Gli autori organizzano le risposte lungo cinque dimensioni: ontologia, epistemologia, operazione, relazione, e potere o capacità. La loro preoccupazione non è che i docenti usino metafore, ma che colleghi dello stesso dipartimento possano averne di incompatibili mentre presumono di condividere un linguaggio. Questo fa dell'elicitazione delle metafore una diagnostica per lo sviluppo professionale dei docenti, non solo una tecnica d'aula.

Gli studenti mostrano una gamma simile. [[genai-professionalization-metaphors-2026|Bohmer e colleghi (2026)]] hanno trovato studenti che concettualizzavano la GenAI come un attore sociale, una tecnica, materiale di apprendimento o una struttura, con cornici socio-emotive e tecniche entrambe salienti. [[ai-engineering-education-balancing-act|Kudina (2026)]] descrive le cornici dominanti degli studenti di ingegneria come l'LLM "oracolo" e "tutor", due cornici che attribuiscono entrambe autorità e personalizzazione oltre ciò che lo strumento fornisce affidabilmente. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman e colleghi (2026)]] trattano il "distributore automatico di feedback" di una studentessa come un artefatto di alfabetizzazione più utile del vocabolario rifinito del tutor, perché rende visibile la transazione: inserisci il lavoro, ricevi l'output, nessuna relazione e nessuna agentività.

Il risultato trasversale è che la metafora è diagnostica dell'aspettativa. Uno studente che chiama un LLM un oracolo non sta semplicemente usando una parola colorita. L'etichetta predice che cosa farà lo studente quando il modello sbaglia, e che cosa crederà sulla verifica. Un docente che lo chiama motore di ricerca non sta semplicemente essendo impreciso. L'etichetta predice che cosa chiederà agli studenti di fare con esso. È per questo che i programmi di [[educational-development]] possono usare l'elicitazione delle metafore prima di ridisegnare politiche o valutazioni, e perché [[engineering-education]] e [[cs-education]] hanno bisogno di conversazioni specifiche per disciplina anziché di un'unica definizione istituzionale.

Un filone filosofico spinge la metafora in un'altra direzione: [[daoism-ai-education-philosophy-2026|Xie (2026)]] propone lo "Zhenren" come contro-ideale rispetto allo studente gestito dall'algoritmo, trattando l'immagine come un modo per argomentare sugli scopi educativi anziché per spiegare un processo tecnico.

## Le analogie come tecnica didattica

L'evidenza d'aula più solida nel corpus viene dall'uso delle analogie nell'educazione informatica. [[student-reception-genai-analogies-computing-2026|Bernstein e Sibia (2026)]] hanno dato a studenti universitari analogie generate dalla GenAI per liste concatenate e ricorsione, poi hanno chiesto loro di annotare e discutere gli output. Gli studenti non hanno giudicato le analogie globalmente buone o cattive. Hanno separato accuratezza strutturale, chiarezza, appropriatezza e fiducia, e hanno nominato punti di rottura specifici: un percorso ad anello descrive una lista circolare, non una lista semplicemente concatenata; uno scambio di badminton non ha un input che si riduca in modo garantito per la ricorsione; un riferimento basato sugli interessi può dare per scontata una conoscenza che lo studente non ha.

Il contributo dell'articolo è l'idea di **verifica bilaterale dell'analogia**. La conoscenza del concetto bersaglio dice allo studente quali relazioni un'analogia deve conservare. La conoscenza del dominio di origine gli dice se il dominio di origine possiede davvero quelle relazioni. I verificatori più acuti non erano sempre gli studenti i cui interessi coincidevano con l'analogia. Erano gli studenti che conoscevano il dominio di origine abbastanza bene da ispezionarlo. Questo ha un'implicazione progettuale: un dominio di origine familiare può trasformare uno studente da destinatario in verificatore esperto. Gli autori raccomandano di assegnare analogie difettose come oggetti da ispezionare e riparare, anziché filtrarle via. L'analogia difettosa diventa una [[desirable-difficulties|difficoltà produttiva]].

Quel risultato complica l'assunzione usuale che le spiegazioni generate dall'IA debbano essere rifinite prima che gli studenti le vedano. Un'analogia pulita può comunque codificare una mappatura sbagliata, e una difettosa può essere più istruttiva se il compito è la critica. La condizione importante è che gli studenti abbiano abbastanza conoscenza del bersaglio da sapere che cosa l'analogia deve conservare, e abbastanza conoscenza del dominio di origine da controllare se lo fa. Senza l'una o l'altra, l'analogia può essere memorabile per la ragione sbagliata.

[[anvil-ai-educational-animations|ANVIL]] mostra il lato della generazione. Prende la definizione di un concetto, genera un'analogia testuale, la compila in una sceneggiatura, produce codice di animazione e ripara i fallimenti in un ciclo delimitato. Il sistema è stato valutato con docenti di informatica, che hanno giudicato adeguate la maggior parte delle analogie e hanno apprezzato lo strumento come collaboratore creativo per la pianificazione iniziale delle lezioni. Gli autori hanno anche rilevato che il controllo del docente, la modificabilità e l'aderenza pedagogica contavano più della qualità grezza della generazione. ANVIL è un promemoria del fatto che un'analogia generata dall'IA è un artefatto candidato, non una spiegazione compiuta: l'insegnante deve comunque decidere se la mappatura è strutturalmente solida e appropriata per la classe.

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall e Panadero]] usano un'analogia come argomentazione stessa. Il Thermomix, un elettrodomestico da cucina guidato, suscita entusiasmi e critiche simili a quelli dell'IA generativa nell'educazione. Mappando scenari di cucina su scenari di apprendimento, spostano la discussione da "l'IA è buona o cattiva" verso "quanta parte del lavoro è delegata, e che cosa questo fa a chi apprende?". L'analogia non è evidenza; è un dispositivo per rendere visibile un continuum di progettazione. È un uso legittimo dell'analogia in un articolo concettuale, ma non va scambiato per un intervento testato.

[[code-anchor-multi-view-visualization|Code as Anchor]] aggiunge una cautela progettuale. Gli studenti usavano rappresentazioni multiple, inclusa una vista metaforica, ma passavano la maggior parte del tempo di sguardo sul codice e solo una piccola quota sulla vista metaforica. Alcuni consideravano gli scaffold metaforici infantili o di recupero. Una metafora che un docente trova illuminante può leggersi, per uno studente, come un indicatore di scarsa capacità. La legittimità è parte dell'utilità pedagogica, non una preoccupazione separata.

## La metafora come alfabetizzazione critica all'IA

Il quadro più diretto per insegnare con le metafore viene da [[roe-perkins-furze-metaphors-critical-ai-literacy-2025|Roe, Perkins e Furze (2025)]]. Definiscono l'alfabetizzazione critica all'IA come la comprensione di come funzionano i sistemi di IA unita all'esame delle loro conseguenze sociali, ambientali e culturali. Partendo da un elenco di 13 metafore comuni dell'IA, ne selezionano quattro per l'uso in aula e valutano ciascuna rispetto a quattro criteri: accessibilità, potere esplicativo, potenziale di alfabetizzazione critica all'IA e utilità pedagogica.

Le quattro sono:

- **L'IA come specchio deformante**, per la distorsione e il pregiudizio nell'output generato.
- **L'IA come mappa**, per la rappresentazione, la selezione e la questione di quale conoscenza sia inclusa.
- **L'IA come camera d'eco**, per i cicli di retroazione, le bolle di filtro e il rafforzamento di schemi esistenti.
- **L'IA come scatola nera**, per l'opacità e i limiti della spiegazione.

Ciascuna è abbinata a una breve attività e a una discussione facilitata dall'insegnante. La lezione sullo specchio deformante fa testare agli studenti i prompt per il pregiudizio; quella sulla camera d'eco li fa osservare come prompt ripetuti e dati limitati rafforzino gli schemi; la lezione sulla mappa chiede che cosa la rappresentazione di un'IA includa e ometta; quella sulla scatola nera usa la generazione probabilistica per rendere visibili processi nascosti. Gli autori mappano le attività sul quadro delle competenze in IA dell'UNESCO per gli studenti, il che dà al quadro un aggancio curricolare invece di lasciarlo come esortazione generica a discutere di metafore.

La mossa più importante del quadro è trattare le metafore come oggetti di critica. Una metafora è utile perché è parziale, e diventa pericolosa quando viene presentata come completa. Lo specchio deformante mostra la distorsione ma non l'algoritmo che la produce. La mappa mostra la rappresentazione ma può implicare un'intenzione coerente che il sistema non ha. La scatola nera mostra l'opacità ma può incoraggiare la conclusione che nulla possa essere conosciuto. La lezione dovrebbe chiudersi con la domanda su dove il confronto si rompe.

È anche questo che collega il lavoro sulle metafore al più ampio campo dell'[[ai-literacy]]. Un workshop sulle metafore è un modo a bassa tecnologia di far emergere assunzioni prima di una lezione tecnica. La critica di un'analogia generata dall'IA è un modo per valutare se uno studente ha capito il concetto bersaglio. La metafora di uno studente, come il distributore automatico, può essere più rivelatrice di un item standardizzato di un questionario. Sono tutte forme di [[critical-thinking]] sull'IA, non solo esercizi di scrittura creativa.

## Progettare un insegnamento basato sulle metafore

- **Partire dalla caratteristica, non dall'immagine.** Decidere che cosa gli studenti devono capire, poi chiedere quale dominio di origine conserva le relazioni che contano. Un confronto memorabile che punta alla caratteristica sbagliata è peggio di una spiegazione semplice.
- **Controllare la tenuta strutturale prima della personalizzazione.** L'abbinamento agli interessi può aumentare il coinvolgimento, ma non garantisce che il dominio di origine abbia la struttura giusta. Verificare prima la mappatura, poi personalizzare.
- **Verificare l'accesso culturale al dominio di origine.** Specchi deformanti, mappe, sport ed elettrodomestici da cucina non sono ugualmente familiari a tutti gli studenti. Chiedere che cosa il confronto dà per scontato e offrire alternative.
- **Rendere espliciti i limiti.** Chiedere agli studenti di nominare che cosa la metafora conserva, che cosa distorce e che cosa non può spiegare. La critica è l'apprendimento valutato, non una discussione opzionale.
- **Usare più metafore parziali.** Uno specchio deformante, una mappa e una camera d'eco possono convivere perché ciascuna illumina una dimensione diversa. Una singola metafora totalizzante ha più probabilità di diventare un'idea sbagliata.
- **Tenere vicino la spiegazione tecnica.** Un'analogia può aprire un argomento, ma non dovrebbe sostituire l'insegnamento su dati di addestramento, generazione probabilistica o differenza tra output fluente e conoscenza verificata.
- **Valutare l'attività, non solo il coinvolgimento.** Il corpus non mostra ancora che le lezioni basate sulle metafore migliorino l'alfabetizzazione all'IA o gli esiti di apprendimento. Trattare le attività come progetti da testare, e misurare che cosa gli studenti sanno fare dopo.

## Idee sbagliate comuni

- **"Una metafora memorabile è una buona metafora."** La memorabilità non è potere esplicativo. Gli studenti possono ricordare un'analogia vivida e continuare a fraintendere il concetto che doveva chiarire.
- **"Le metafore sono illustrazioni neutre."** Ogni metafora seleziona alcune caratteristiche e ne nasconde altre. La scelta porta con sé assunzioni su agentività, fiducia e responsabilità.
- **"Le analogie generate dall'IA sono pronte all'uso."** Le analogie generate possono essere strutturalmente sbagliate, culturalmente ristrette o pedagogicamente inadatte. Richiedono la revisione dell'insegnante o un compito di critica per gli studenti.
- **"Se gli studenti si divertono con l'analogia, hanno imparato il concetto."** Coinvolgimento e apprendimento sono esiti separati. La base di evidenza qui è per lo più qualitativa e non stabilisce un guadagno di apprendimento.

## Limiti e lacune nell'evidenza

La letteratura in questa base di conoscenza è disomogenea. Gli studi sulle metafore di docenti e studenti sono qualitativi e spesso piccoli. Lo studio sui docenti di ingegneria analizza le risposte a una singola domanda di intervista. Lo studio sulla professionalizzazione tratta i conteggi di metafore come esplorativi. Lo studio d'aula sulle analogie ha dieci studenti universitari e un fattore di confusione tra personalizzazione e formato della spiegazione. Il quadro di Roe et al. è concettuale e le sue attività non sono state testate con gli studenti. ANVIL è una valutazione di sistema con docenti, non uno studio sull'apprendimento.

Questo non rende il lavoro inutile. Rende le affermazioni adeguatamente modeste. L'elicitazione delle metafore può rivelare assunzioni che i questionari non colgono. La critica delle analogie può rendere visibile la comprensione strutturale. Una metafora ben scelta può dare a una classe un oggetto condiviso su cui discutere. Ma il campo ha ancora bisogno di studi che confrontino l'insegnamento basato sulle metafore con l'insegnamento ordinario, misurino il trasferimento anziché il ricordo della metafora, e verifichino se l'approccio viaggia tra culture e discipline.

Il rischio di affermare troppo è reale in entrambe le direzioni. Un insegnante che tratta una metafora come spiegazione completa può instillarvi un'idea sbagliata. Un ricercatore che tratta la metafora come mera decorazione può mancare un meccanismo attraverso cui gli studenti costruiscono o non costruiscono un modello mentale. La posizione produttiva è trattare la metafora come rappresentazione progettata, parziale e criticabile, e studiare che cosa ne fanno gli studenti.

## Concetti collegati

- [[ai-literacy]] — l'ombrello per l'alfabetizzazione critica all'IA e l'insegnamento basato sulle metafore.
- [[critical-thinking]] — la critica delle analogie come forma di ragionamento strutturale.
- [[misconceptions]] — le analogie difettose come fonte di idee sbagliate durature.
- [[student-ai-interaction]] — come gli studenti interpretano e verificano le spiegazioni dell'IA.
- [[pedagogical-agent]] — i tutor IA che generano spiegazioni o analogie.
- [[learning-design]] — selezionare e sequenziare materiali basati sulle analogie.
- [[educational-development]] — l'elicitazione delle metafore nello sviluppo professionale dei docenti.
- [[engineering-education]] — le metafore di docenti e studenti in ingegneria.
- [[cs-education]] — uso e critica delle analogie nell'educazione informatica.
- [[cognitive-offloading]] — le metafore dello strumento e dell'assistente e i loro rischi.
- [[trust-calibration]] — i ruoli antropomorfi e la fiducia mal riposta.
- [[equity-in-ai-education]] — i domini di origine di chi contano come familiari.
- [[teacher-role]] — il giudizio dell'insegnante sulle spiegazioni generate dall'IA.
- [[explainable-ai]] — la spiegazione di sistema contro l'analogia didattica.
- [[student-engagement]] — gli effetti di coinvolgimento delle analogie personalizzate.
- [[higher-ed]] — il contesto della maggior parte degli studi di questo gruppo.

## Articoli collegati

- [[roe-perkins-furze-metaphors-critical-ai-literacy-2025]] — quattro metafore e criteri per insegnare l'alfabetizzazione critica all'IA
- [[student-reception-genai-analogies-computing-2026]] — gli studenti verificano le analogie generate dalla GenAI e riparano le mappature rotte
- [[fear-awe-genai-metaphor-workshops-2025]] — workshop di analisi delle metafore con studenti, accademici e personale
- [[engineering-faculty-metaphors-ai-understanding-2026]] — le metafore dei docenti di ingegneria costruiscono e vincolano la comprensione dell'IA
- [[genai-professionalization-metaphors-2026]] — le concettualizzazioni metaforiche della GenAI e dell'apprendimento professionale negli studenti
- [[thermomix-genai-education-analogy-2026]] — un'analogia con un elettrodomestico da cucina per la delega e l'apprendimento con l'IA
- [[anvil-ai-educational-animations]] — analogie generate dall'IA e animazioni didattiche per l'informatica
- [[ai-engineering-education-balancing-act]] — le metafore "oracolo" e "tutor" degli studenti eccedono le capacità dell'LLM
- [[code-anchor-multi-view-visualization]] — scaffold di visualizzazione metaforica e il loro problema di legittimità
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — il "distributore automatico di feedback" di una studentessa come evidenza di alfabetizzazione
- [[daoism-ai-education-philosophy-2026]] — lo "Zhenren" come contro-metafora dell'IA nell'educazione
