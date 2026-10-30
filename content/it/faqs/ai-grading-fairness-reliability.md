---
title: "Posso usare l'IA per valutare il lavoro degli studenti in modo equo e affidabile?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Hai una rubrica in cui credi, più elaborati che ore e uno strumento che restituisce un punteggio e diversi paragrafi sicuri di sé nel tempo che serve a leggere un solo saggio. Lo provi su lavori che hai già valutato. Metà dei punteggi sembra giusta. Uno è stranamente generoso, uno stranamente severo, e non riesci ancora a capire se dipenda dallo strumento o dal saggio.

Risposta breve da dare a un collega: la valutazione con l'IA si guadagna un posto come assistente supervisionato o secondo lettore, su compiti in cui l'hai verificata contro lavori che hai già corretto. L'accordo non si trasferisce da un tipo di valutazione all'altro. In un esame di farmacia con sedici studenti, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] hanno trovato un accordo quasi perfetto sui tipi di item oggettivi e un accordo inaffidabile sulle risposte aperte. In tre università inglesi, [[opraise-automated-marking-ai-assessment-2026|il progetto OpRaise]] ha trovato che valutatori IA e umani concordavano sulla fascia di laurea tra il 35% e il 65% delle volte a seconda dell'istituzione, con i voti compressi verso il centro. Una giustificazione fluente non è prova che i tuoi criteri siano stati applicati. Se il risultato sia [[assessment-validity|valido per la tua decisione]] è una questione locale a cui devi rispondere tu, e [[human-in-the-loop-ai|una persona resta responsabile]] di tutto ciò che diventa un voto registrato.

## La versione breve

**1.** Dai un nome al ruolo prima di far girare qualsiasi cosa: assistente al feedback, secondo lettore o valutatore principale. Richiedono quantità diverse di evidenza.

**2.** Parti dal ruolo con le conseguenze minori che risolve il tuo problema reale. Se basterebbe una chiave deterministica, un LLM aggiunge rischio anziché valore.

**3.** Calibra su lavori che hai già valutato, inclusi elaborati forti, deboli, al limite e con una struttura insolita. Gli esempi comodi non dimostrano nulla.

**4.** Tieni separati l'insieme di calibrazione e quello di prova, altrimenti stai misurando quanto bene hai tarato lo strumento su saggi familiari.

**5.** Riporta l'accordo esatto, le differenze di punteggio e la direzione del bias, non una correlazione. Controlla appositamente le soglie di superamento.

**6.** Di' agli studenti quale ruolo ha lo strumento, chi decide il voto e come chiedere una revisione.

## Decidi cosa può fare l'IA

Tre assetti vengono chiamati «valutazione con l'IA» e comportano obblighi diversi.

Un **assistente al feedback** abbozza commenti o segnala possibili omissioni che puoi accettare, riscrivere o scartare. Il rischio resta confinato alla qualità dei commenti, e tu leggi tutto prima che arrivi a uno studente. Un **secondo lettore** propone punteggi per criterio o segnala disaccordi per strutturare la tua correzione. I suoi errori devono essere utili e non solo sbagliati: una segnalazione che ti riporta su un elaborato che avresti corretto distrattamente vale la pena. Un **valutatore principale** produce punteggi che diventano voti registrati. È l'assetto che l'evidenza di questa base di conoscenza non sostiene al di fuori di casi ristretti e validati localmente.

Scegli il gradino più basso che risponde al tuo vincolo reale. Se il carico di correzione deriva dal controllo di una chiave di risposta fissa, la normale correzione deterministica è più trasparente e verificabile di un modello linguistico, e lo studio di farmacia suggerisce che il vantaggio dell'LLM sugli item oggettivi era in parte un artefatto dell'avergli fornito le risposte corrette durante la valutazione. Riserva il modello ai lavori che richiedono interpretazione, e poi verifica quell'interpretazione.

[[automated-assessment|La valutazione automatizzata]] copre il macchinario più ampio di attribuzione dei punteggi, moderazione e generazione di feedback. Questa pagina è la questione di giudizio che sta sotto.

## Cosa mostra davvero l'evidenza

L'accordo dipende dal tipo di item. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] hanno valutato un esame di farmacia a formato misto svolto da 16 studenti e hanno riportato una concordanza con la correzione dei docenti tra 0,935 e 1,000 per gli item a scelta multipla, a selezione multipla e a completamento. L'accordo sulle risposte aperte soggettive era inaffidabile. Due dettagli contano più del titolo. Le risposte corrette erano fornite durante la valutazione, il che lusinga i risultati sugli item oggettivi, e l'aggiunta di una rubrica non migliorava in modo coerente l'accordo, il che indebolisce l'assunto comune che una buona rubrica trasformi un LLM in un correttore coerente. Sedici studenti non possono sostenere un'affermazione sul tuo corso. La variazione dentro un singolo esame è il risultato trasferibile: un sistema che gestisce la tua sezione a scelta multipla non dice nulla sui tuoi saggi.

L'accordo sulle fasce è moderato e disomogeneo. [[opraise-automated-marking-ai-assessment-2026|Il rapporto OpRaise]] ha esaminato saggi autentici di psicologia di laurea triennale e ha trovato un accordo tra valutatori IA e umani sulla fascia di laurea britannica del 63% a Cambridge, del 53% a Nottingham e del 35% alla Manchester Metropolitan. I voti erano compressi verso il centro, con le code valutate in modo meno accurato: un saggio che un umano aveva valutato 75 riceveva da ogni sistema di IA un punteggio inferiore di diversi punti, e un saggio valutato 50 un punteggio superiore di diversi punti. Quella compressione è l'errore da tenere d'occhio, perché danneggia esattamente gli studenti in cima e in fondo alla tua distribuzione lasciando il centro apparentemente a posto. È un rapporto di progetto e non uno studio peer-reviewed, ed è l'avvertimento più utile della base di evidenza.

I tuoi voti sono un riferimento imperfetto. Gli insegnanti non sono d'accordo tra loro, e il tuo punteggio precedente su un saggio simile è un giudizio, non una verità di fondo. L'accordo con un correttore stabilisce coerenza con quel correttore, che non è la stessa cosa dell'equità. Dove la posta in gioco lo giustifica, usa un secondo lettore qualificato per dirimere i casi difficili, e tratta un disaccordo tra l'IA e un correttore umano come un invito a rileggere il lavoro più che come un verdetto su chi ha ragione.

Coerenza e buon giudizio divergono. Un modello può restituire punteggi quasi identici a una nuova esecuzione applicando male i tuoi criteri, perché la ripetibilità misura la stabilità, non la validità. Le code di OpRaise mostrano il pattern: il sistema era stabile e sbagliato proprio sui saggi che contavano di più.

## Valida la procedura prima che tocchi un voto

Segui questi passaggi su elaborati già valutati e adeguatamente protetti, che coprano le risposte che ricevi davvero: forti, deboli, al limite, incompleti, con struttura insolita e risposte corrette espresse in modo inconsueto.

**1. Specifica i criteri ed esigi l'evidenza.** Fornisci il compito, la rubrica, le regole di punteggio e esempi di come risposte alternative legittime ottengono credito. Chiedi giustificazioni concise a livello di criterio, legate a passaggi identificabili. Poi verifica tu stesso quelle giustificazioni contro l'elaborato.

**2. Separa la calibrazione dalla valutazione.** Taratura su un insieme, prova su un altro. Senza quella separazione non puoi distinguere una procedura validata da una ben adattata ai dati.

**3. Misura le decisioni che contano.** Registra l'accordo esatto, l'ampiezza e la direzione delle differenze di punteggio e se il modello assegna sistematicamente voti più alti o più bassi. Esamina separatamente le soglie di superamento e le altre soglie rilevanti. Un'elevata correlazione può convivere con uno spostamento sistematico.

**4. Verifica la ripetibilità e il comportamento dei sottogruppi.** Riesegui un sottoinsieme con impostazioni identiche. Cerca errori a livello di criterio e casi in cui lingua, formattazione o stile legittimo vengono scambiati per comprensione più debole. Conteggi ridotti nei sottogruppi giustificano cautela, non un'affermazione di equità.

**5. Scrivi la regola di escalation.** Decidi quali casi vanno sempre corretti da un umano e come si risolvono i disaccordi. Non lasciare che a decidere sia la fiducia dichiarata dal modello; la fiducia va validata contro gli errori osservati prima di poter contare.

**6. Proteggi il flusso di lavoro.** Usa un ambiente approvato, riduci al minimo le informazioni identificative e tieni rubrica e istruzioni separate dal contenuto inviato. Quella separazione rende la manomissione più difficile da nascondere. Non la rende impossibile.

**7. Registra cosa invaliderebbe il controllo.** Conserva modello e versione, prompt, rubrica e impostazioni. Un aggiornamento del modello o una revisione della rubrica sono motivi per ripetere i controlli rappresentativi invece di dare per scontata la continuità.

## Rendi visibile agli studenti l'assetto

Gli studenti hanno diritto di sapere quale ruolo ha lo strumento, chi decide e come contestare un risultato. Un'informazione vaga produce sospetto; i dettagli producono un rapporto praticabile. Qualcosa come: «Uno strumento di IA approvato può abbozzare commenti di rubrica sulla tua bozza. Io rivedo ogni commento e determino il tuo voto. Contattami se un commento fraintende il tuo lavoro.» Poi rendi vero quello che hai scritto.

Due direzioni di errore richiedono attenzione separata. Le detrazioni eccessive sono quelle che gli studenti segnalano, e dominano i ricorsi. Il credito non guadagnato è quella che resta taciuta e corrompe in silenzio il registro. Campiona entrambe, e includi le tue ore di verifica quando giudichi se il flusso di lavoro ti ha fatto risparmiare qualcosa.

## Cosa ti tornerà addosso

**«Anche gli umani sono prevenuti.»** Lo sono, ed è per questo che il confronto ha bisogno di criteri espliciti invece che del punteggio di un singolo correttore come standard. La dispersione istituzionale di OpRaise è l'argomento: se correttori umani di tre università hanno prodotto accordi di fascia così diversi con gli stessi sistemi, il riferimento umano è parte di ciò che va specificato, non un metro fisso.

**«La rubrica lo rende oggettivo.»** Una rubrica rende esplicite le aspettative. Applicarla resta interpretazione, e lo studio di farmacia ha trovato che fornire una rubrica non migliorava in modo coerente l'accordo. Ciò che la rubrica ti compra è uno standard verificabile per le giustificazioni, non una garanzia sui punteggi.

**«Dovrei controllare tutto, il che vanifica lo scopo.»** Per alcuni compiti è la conclusione giusta, e la risposta è restringere il lavoro. Abbozzare commenti dalle tue note di punteggio lascia il giudizio a te e toglie la digitazione. Le segnalazioni del secondo lettore sugli elaborati al limite concentrano la tua attenzione dove cambia un esito.

**«Il mio collega l'ha provato e ha funzionato bene.»** Chiedi cosa ha misurato. In questa letteratura le valutazioni positive convivono abitualmente con gli errori, e un collega che ha letto qualche output sensato ha fatto una dimostrazione, non una validazione. La domanda è cosa farebbe la sua procedura ai saggi che ti accorgeresti per ultimo.

## Cosa fare questa settimana

**1.** Scegli una valutazione e scrivi l'unico ruolo che l'IA avrebbe. Scrivi quale evidenza ti permetterebbe di spostarla di un gradino più su.

**2.** Provala su cinque elaborati che hai già valutato, scelti per includerne uno forte, uno debole, uno al limite e uno con una struttura insolita ma legittima.

**3.** Registra ogni disaccordo con il lavoro e il criterio, e nomina gli errori che considereresti inaccettabili e non solo sbagliati.

**4.** Verifica se le differenze di punteggio vanno in una direzione coerente, e controlla separatamente la tua soglia di superamento.

**5.** Abbozza il paragrafo di informativa per gli studenti e la via per la revisione, e confronta il tuo tempo di verifica con il tempo di correzione che hai evitato.

## Dove andare adesso

[[assessment-validity|La validità della valutazione]] è il concetto che decide queste questioni: se l'evidenza sostiene l'inferenza che vuoi trarre. [[automated-assessment|La valutazione automatizzata]] copre la tecnologia e la sua prestazione misurata nei vari formati, e [[ai-feedback-at-scale|il feedback dell'IA su larga scala]] affronta il problema adiacente dei commenti generati e se gli studenti agiscono su di essi.

Per cosa dovrebbe rappresentare un voto quando gli studenti usano l'IA, inclusi la sostituzione del costrutto e l'evidenza autenticata del processo, vedi [[redesign-assessment-ai-era|ridisegnare la valutazione nell'era dell'IA]]. Per sapere se il rilevamento può sostituire un design del compito difendibile, vedi [[should-we-use-ai-detectors|se usare i rilevatori di IA]]. Per la questione valutativa che sta sotto tutto questo, vedi [[checking-whether-educational-ai-works|verificare se un'IA educativa funziona]].
