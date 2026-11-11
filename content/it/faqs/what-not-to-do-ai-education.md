---
title: "Che cosa dovrebbero evitare di fare gli educatori con l'IA?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
contributors: [editor]
translation_of: "faqs/what-not-to-do-ai-education"
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

La maggior parte delle indicazioni sull'IA in educazione è formulata come ciò che vale la pena provare. Questa pagina è l'elenco opposto: le pratiche che le prove dicono di smettere, organizzate per il ruolo che dovrebbe smetterle. Non è deliberatamente un elenco di convinzioni false — le gestisce la [[addressing-common-misconceptions-ai-education|FAQ sui fraintendimenti]], e la pagina di concetto [[misconceptions|fraintendimenti]] spiega perché persistono — e non è un elenco di ciò che la ricerca non può ancora dirvi, che è ciò che coprono le [[limitations-in-aied-research|limitazioni nella ricerca sull'AIED]]. Il focus qui è il passo successivo a una convinzione: ciò che le persone fanno davvero, quanto costa e cosa fare invece.

Tre fallimenti ricorrono in ogni ruolo. **Sostituzione** — uno strumento svolge il pensiero che il discente doveva fare, e l'output viene valutato come se l'avesse fatto il discente. **Prova non guadagnata** — un segnale facile da raccogliere (fiducia, fluidità, coinvolgimento, un tasso di completamento) viene trattato come prova di qualcosa che non può mostrare. **Struttura lasciata all'esortazione** — a un avvertimento, a una frase di policy o a una sessione di formazione si chiede di fare il lavoro che devono fare il design dell'interfaccia, il design della valutazione o la governance.

## La versione breve

**1.** Non valutare, citare o promuovere mai un output come prova della capacità che l'ha prodotto.

**2.** Raccogli la misura senza aiuto accanto a quella assistita, ogni volta.

**3.** Tratta fluidità, fiducia e coinvolgimento come caratteristiche dell'uso, non come apprendimento.

**4.** Metti la salvaguardia nel flusso di lavoro, non in un avvertimento.

**5.** Presumi che qualsiasi dato lo strumento possa vedere sarà conservato, combinato e violato.

**6.** Se l'affermazione arriva con una demo ma non con un confronto, è marketing.

## Per i discenti

**Non consegnare la parte che dovresti stare esercitando.** La distinzione non è quanto usi l'IA ma quale lavoro cognitivo si sposta. Esternalizzare i compiti a casa alza i voti dei compiti mentre abbassa quelli degli esami a libro chiuso — un guadagno del 18% contro una perdita del 20% in uno studio secondario — perché la pratica che costruisce conoscenza recuperabile è andata allo strumento ([[reducing-ai-misuse]]). Se l'esercizio è il punto, lo strumento non può fare l'esercizio.

**Non leggere la fluidità come accuratezza.** Il testo fluido è l'output di un modello linguistico indipendentemente dal fatto che il contenuto sia vero, e il meccanismo che lo rende persuasivo è lo stesso che lo rende sbagliato ([[hallucination-risk]]). Verifica l'affermazione specifica, non il tono del paragrafo. L'abitudine alla verifica raramente nasce da sola: in un panel di 900 adulti a cui è stato dato un riassunto generato dall'IA, i lettori hanno seguito una fonte citata al suo interno nell'1% delle visite ([[trust-calibration]]).

**Non accettare l'accordo come feedback.** I modelli affermano sostanzialmente più degli umani — su 11 modelli, le risposte dell'IA hanno confermato gli utenti il 49% più spesso delle risposte umane — e l'eccesso è ciò che fa percepire l'interazione come un sostegno ([[ai-sycophancy]]). Un tutor che non ti contraddice mai ha rimosso il segnale correttivo per cui eri venuto. Chiedi l'obiezione, non l'approvazione.

**Non barattare una domanda con una risposta quando sei bloccato.** La lotta produttiva che salti è l'apprendimento; la ricerca di aiuto che recupera una risposta è un comportamento diverso dalla ricerca di aiuto che recupera un indizio ([[help-seeking]], [[desirable-difficulties]]). Usa strumenti che trattengono la risposta finita.

**Non incollare informazioni personali, sanitarie o familiari in uno strumento per ottenere una risposta migliore.** Lo strumento non ha alcun obbligo di dimenticarle, e il costo per la privacy non è visibile nella qualità della risposta ([[privacy]]).

## Per i genitori e le famiglie

**Non fare i compiti con lo strumento, né lasciare che vengano fatti accanto a te.** Lo schema che emerge dai dati è un'inflazione dei voti con un costo nascosto: voti dei compiti su del 18% mentre quelli degli esami a libro chiuso scendono del 20% ([[reducing-ai-misuse]]). Quello che puoi controllare è il processo — tuo figlio sa spiegare il passo, rifarlo su carta e dire su cosa era incerto? Se no, il compito l'ha fatto lo strumento.

**Non lasciare che un chatbot diventi il confidente.** I sistemi sicofanti affermano molto più delle persone — il 49% in più su 11 modelli — e l'affermazione è il meccanismo che li fa sembrare sicuri con cui parlare ([[ai-sycophancy]]). In un ampio studio longitudinale, gli utenti si sono rivolti all'IA sicofante per consigli personali quasi quanto agli amici stretti e alla famiglia, con una soddisfazione inferiore nelle relazioni reali ([[sycophantic-ai-social-interaction-2026]]). Un bambino che porta il proprio disagio a un modello che dà sempre ragione non viene ascoltato; viene rispecchiato.

**Non dare un chatbot generativo a un bambino piccolo e chiamarlo supervisionato perché sei nella stanza.** L'indicazione per fasce d'età è concreta: attività con scaffolding e non generative per i 9–12 anni, uso generativo supervisionato con ragionamento etico dai 13 in su ([[ai-guidance-children-under-13]]). Per i più piccoli il rischio è la credenza — i bambini in fase preoperatoria accettano il contenuto generato come vero, e i sistemi non sono calibrati sullo sviluppo nel feedback che danno. L'uso congiunto adulto significa chiedere cosa ha appena fatto il giocattolo, non sorvegliare dalla porta ([[early-childhood-elementary-ai-education]]).

**Non presumere che lo strumento della scuola protegga i dati di tuo figlio perché l'ha scelto la scuola.** Chiedi cosa viene conservato, per quanto tempo, se addestra qualcosa e chi altro lo vede ([[privacy]]). La consapevolezza non segue l'esposizione: un mese dopo una lezione in cui gli studenti hanno visto il proprio comportamento registrato proiettato in diretta, il 66% di una classe del year 7 sceglieva ancora l'impostazione del chatbot meno protettiva ([[privacy]]).

**Non usare il risultato di un rilevatore per accusare tuo figlio, né per sostenere un'accusa della scuola.** Nel test controllato più solido, i rilevatori hanno segnalato il 9–15% della scrittura umana non modificata e hanno intercettato meno del 4% delle riscritture dell'IA umanizzate; a tassi di base realistici i falsi positivi superano i veri positivi ([[ai-detection]]). Tratta una segnalazione come un motivo per chiedere la cronologia delle bozze e una conversazione, non come un risultato.

**Non concludere che vietare lo strumento sia l'opzione sicura.** La fiducia insufficiente è un fallimento di calibrazione con un suo costo — la capacità non sfruttata — e la competenza che conta è la fiducia calibrata, non l'evitamento ([[trust-calibration]]). La mossa genitoriale utile è la stessa che la ricerca sostiene per gli studenti: richiedere un passo di verifica e renderlo abbastanza economico che un bambino stanco lo faccia davvero ([[verify-ai-output]]).

**Non scambiare un filtro di contenuti per sicurezza.** I filtri riguardano ciò che un sistema dirà; non riguardano ciò che un'interazione fa a un discente — pratica erosa, accordo sicofante o rifiuti disomogenei ([[pedagogical-safety]]).

## Per i docenti

**Non certificare l'output come capacità.** Una consegna rifinita è prova di una consegna rifinita. Se la valutazione non riesce a distinguere ciò che lo studente sa fare senza aiuto, la valutazione ha smesso di misurare la cosa che il titolo afferma ([[assessment-validity]], [[authentic-assessment]]). La soluzione è una riprogettazione del compito, non un codice d'onore più severo.

**Non usare un punteggio di rilevamento come prova di condotta scorretta.** Il test controllato più solido segnala il 38–80% delle lievi modifiche con IA conformi alle linee guida e il 9–15% della scrittura umana non modificata, mentre intercetta meno del 4% delle riscritture passate per un servizio di umanizzazione; 14 strumenti commerciali in un benchmark indipendente sono tutti scesi sotto l'80% di accuratezza, e a tassi di base realistici i falsi positivi superano i veri positivi ([[ai-detection]], [[should-we-use-ai-detectors]]). Un rilevatore può avviare una conversazione; non può chiuderla.

**Non aggiungere l'IA a una valutazione che non hai riprogettato.** Imbullonare uno strumento su un compito progettato per una prestazione senza aiuto produce esattamente l'inflazione dei voti che nasconde la perdita — compiti su, esame giù. Chiedi di ogni compito valutato cosa mostrerebbe la versione senza aiuto, e aggiusta prima il compito ([[reducing-ai-misuse]]).

**Non trattare il coinvolgimento come apprendimento.** Tempo sul compito, soddisfazione, volume di ricerca di aiuto e attività in chat sono tutti facili da strumentare e tutti compatibili con nessun apprendimento. Un guardrail che ha ridotto il passaggio degli studenti a una posizione errata dell'IA dal 42–60,5% al 5,7–8,2% non ha prodotto alcun effetto di apprendimento misurabile nella sessione (β = 0,03, p = 0,18). Il comportamento è rimasto; l'apprendimento non si è mosso ([[student-engagement]]).

**Non affidarti a un avvertimento dove l'interfaccia potrebbe vincolare.** Un tutor che può produrre la risposta finita la produrrà sotto la pressione della scadenza. Il guardrail che funziona è quello integrato nell'interazione, non la frase nel programma del corso ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Non incollare lavori degli studenti, piani educativi individualizzati, registri disciplinari o bozze identificabili in uno strumento di consumo.** La minimizzazione dei dati è una decisione di progettazione che stai prendendo per conto dello studente, che tu ci abbia pensato o no ([[privacy]]).

## Per gli sviluppatori didattici e dei docenti

**Non fare formazione sullo strumento e chiamarla alfabetizzazione all'IA.** Una sessione sul prompting insegna l'interfaccia di un prodotto; l'[[ai-literacy|alfabetizzazione all'IA]] è la capacità di giudicare quando lo strumento va usato, cosa sta facendo e cosa verificare. Gli insegnanti che imparano i pulsanti senza il giudizio escono con fiducia e nessuna calibrazione ([[teacher-ai-competency]]).

**Non fare sviluppo professionale una tantum e aspettarti che la pratica cambi.** Le prove sulla [[professional-training|formazione professionale]] sono coerenti su durata e follow-up: gli eventi singoli muovono la fiducia autodichiarata, raramente il comportamento in classe, e il guadagno di fiducia può mascherare l'assenza di cambiamento ([[educational-development]]).

**Non ignorare il sistema di valutazione che lasci in piedi.** I docenti adotteranno la pratica che insegni solo se la valutazione a cui sono sottoposti non la punisce. Un workshop sulla progettazione di compiti resistenti all'IA che si svolge accanto a un regime d'esame invariato insegna ai docenti che la formazione è decorativa.

**Non modellare l'uso acritico contro cui stai mettendo in guardia.** Dimostrare uno strumento generando un piano di lezione davanti ai docenti, senza un passo di verifica, insegna al pubblico che l'output è il prodotto.

**Non accettare una demo del fornitore come prova di efficacia.** L'affermazione che stai valutando riguarda l'apprendimento, e una demo mostra la capacità. Chiedi esiti senza aiuto, risultati per sottogruppi e test di sicurezza multi-turno ([[checking-whether-educational-ai-works]]).

## Per gli sviluppatori di software educativo

**Non ottimizzare la metrica facile da registrare.** Durata della sessione, numero di messaggi e valutazioni di soddisfazione miglioreranno sotto quasi qualsiasi cambiamento; l'apprendimento spesso no. Lo stesso team che rilascia un guardrail può rilasciare una dashboard che premia il volume di interazione, e le due punteranno in direzioni opposte ([[learning-analytics]], [[student-engagement]]).

**Non rilasciare un rilevatore senza uno studio di validazione contro il costrutto.** Un modello che segna 0,98 di F1 su uno split trapelato può scendere a 0,60 sotto validazione indipendente dalla prova, e un rilevatore di sorrisi può andare *negativamente* rispetto all'empatia valutata dagli osservatori perché gli manca il contesto che ha un valutatore umano ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Pubblica il protocollo di validazione, non solo il titolo.

**Non inferire affetto, attenzione o «coinvolgimento» da volti e corpi senza consenso e uno scopo dichiarato.** Il rischio multi-turno non è il rischio single-turno: i tassi di danno in una revisione sono saliti da circa il 18% nelle valutazioni single-turno a circa il 78% in quelle multi-turno, quindi un sistema certificato su prompt isolati è certificato su un'interazione che gli studenti non hanno ([[pedagogical-safety]], [[privacy]]).

**Non nascondere il passaggio di consegne.** Uno studente che non riesce a dire quando un tutor sta generando anziché recuperando, o quando c'è un umano nel circuito, non può calibrarvi la fiducia, e il bias di automazione opera più limpido quando il sistema ha ragione e l'umano ha smesso di controllare ([[automation-bias]], [[trust-calibration]]).

**Non progettare per il benchmark e poi rivendicare l'aula.** La prestazione al benchmark è una proprietà del benchmark. Riporta le condizioni d'uso che hai testato, la popolazione e i compiti; altrimenti il numero sarà letto come una promessa su un contesto diverso ([[limitations-in-aied-research]]).

**Non rendere lo strumento l'unica via all'aiuto.** Se l'accesso di uno studente al feedback dipende dalla disponibilità, dalla quota o dalla licenza di un modello, la questione di equità è già stata decisa dall'approvvigionamento ([[equity-in-ai-education]]).

## Per gli amministratori educativi

**Non comprare affermazioni di capacità come prove di esito.** I fornitori possono dimostrare un prodotto; solo una valutazione può dimostrare l'apprendimento. Richiedi esiti senza aiuto, risultati per sottogruppi, abbandono e un piano per cosa succede quando il pilot finisce ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Non dispiegare sorveglianza perché è disponibile.** I sistemi di proctoring catturano immagini del volto, documenti d'identità, scansioni della stanza comprese panoramiche a 360 gradi e audio del microfono, e una revisione di 80 studi ha trovato che solo il 25% raggiungeva la soglia di rendicontazione per le domande a cui un'istituzione deve rispondere prima del dispiegamento ([[privacy]], [[remote-proctoring]]). Il costo ricade sugli studenti; la base di evidenze è più sottile di quanto implichi il contratto.

**Non scrivere una policy di soli divieti e chiamarla governance.** Un divieto senza riprogettazione della valutazione, senza supporto e senza via di appello sposta il comportamento anziché prevenirlo, e punisce gli studenti meno capaci di contestare un'accusa falsa. La policy deve coprire anche il valutatore: due delle cinque strategie di prompt injection indiretta incorporate in una consegna hanno alzato il voto di un saggio insufficiente ([[institutional-ai-policy]], [[course-ai-policy]]).

**Non equiparare l'adozione al miglioramento.** Una dashboard che riporta utilizzo, soddisfazione e completamento sembrerà un successo mentre la misura dell'apprendimento resta piatta. Decidi in anticipo quale esito ti farebbe cancellare il contratto ([[ai-ed-evaluation]]).

**Non lasciare che l'accessibilità arrivi come richiesta di adattamento.** In una revisione di 40 studi sulle tecnologie assistive digitali per studenti neurodivergenti, 28 facevano di una diagnosi formale una condizione di partecipazione — un modello vincolato alla diagnosi che esclude ogni discente con bisogni e senza etichetta ([[accessibility]], [[universal-design-for-learning]]).

## Per i ricercatori in educazione

**Non lasciare che l'autodichiarazione porti l'affermazione causale.** Fiducia, apprendimento percepito e soddisfazione sono esiti, ma non sono gli esiti che la maggior parte degli studi dice di misurare. La letteratura sull'[[empathy|empatia]] è il caso più chiaro: un campo che intende insegnare l'empatia misura per lo più il comfort, e la revisione più solida di 17 studi ha trovato guadagni di fiducia molto più comuni delle prove dell'empatia stessa ([[self-report-measures]], [[empathy]]).

**Non citare un effetto senza il suo disegno.** In una revisione critica di 80 studi HCI sul pensiero critico con l'IA, 42 non avevano un gruppo di controllo. Un effetto da titolo su 30 studenti in un corso in un sito è la forma comune di un'affermazione fragile ([[limitations-in-aied-research]]).

**Non riportare l'eterogeneità senza il modello.** Gli stessi dati danno I² = 82,98% sotto un modello a effetti fissi e 15,75% sotto un modello a effetti casuali; un I² citato senza il suo modello è ininterpretabile ([[meta-analysis-systematic-review]]).

**Non generalizzare da un solo contesto e chiamarlo risultato.** Un corso, un'istituzione, una versione del modello, una lingua. Il comportamento del modello cambia con ogni rilascio, e i rilevatori addestrati su una generazione perdono richiamo sulla successiva ([[research-gaps-aied]], [[ai-detection]]).

**Non trattare una correlazione tra interazione ed esito come un meccanismo.** Il volume di prompt non misura lo scaricamento cognitivo — i cluster per volume non differivano nella distribuzione del lavoro cognitivo, e il dialogo codificato a mano non ha trovato alcuno scaricamento nel 49,6% di 125 dialoghi ([[cognitive-offloading]]). Misura il lavoro, non la sua traccia visibile.

**Non pubblicare un paragrafo di limitazioni che si sarebbe potuto scrivere prima dello studio.** Nomina la minaccia specifica, il conteggio specifico e l'affermazione che delimita. È questo che rende una limitazione utilizzabile per il lettore successivo ([[interpreting-and-applying-aied-research]]).

## Perché stanno insieme

Ogni voce sopra è un caso di un proxy promosso a verdetto: il saggio sta per lo scrittore, il punteggio sta per la condotta scorretta, il sorriso sta per l'empatia, la demo sta per l'apprendimento, la policy sta per la governance. La correzione è sempre la stessa mossa — nomina il costrutto, trova una misura che potrebbe uscire al contrario e raccoglila accanto a quella comoda.

È anche per questo che queste cautele non sono un elenco di cose sempre sbagliate. Un rilevatore può essere un motivo per parlare con uno studente. Un chatbot può essere un esercizio utile. Una dashboard può essere uno stimolo a fare una domanda. Il danno è nella sostituzione, non nello strumento.

## Cosa fare questa settimana

- Scegli un compito valutato e scrivi cosa mostrerebbe con lo strumento chiuso. Se la risposta è «niente di diverso», il problema è il compito.
- Aggiungi una misura senza aiuto a un corso che al momento riporta solo la prestazione assistita.
- Leggi il contratto di proctoring o dello strumento di IA della tua istituzione per conservazione, uso secondario e violazioni — e controlla se il testo del consenso descrive ciò che il sistema cattura davvero.
- Chiedi a un fornitore esiti senza aiuto e risultati per sottogruppi. Se la risposta è una demo, hai la tua risposta.
- Nella prossima sessione con i docenti, dedica la seconda metà alla riprogettazione della valutazione anziché ai prompt.

## Dove andare adesso

- [[addressing-common-misconceptions-ai-education]] — le convinzioni dietro queste pratiche, e come correggerle senza sufficienza.
- [[limitations-in-aied-research]] — ciò che la base di evidenze non può ancora sostenere.
- [[reducing-ai-misuse]] — leve strutturali contro l'uso improprio, e perché battono l'esortazione.
- [[pedagogical-safety]] — cosa può fare un tutor a un discente superando ogni controllo sui contenuti.
- [[should-we-use-ai-detectors]] — le prove sui rilevatori per intero.
- [[checking-whether-educational-ai-works]] — come valutare un'affermazione prima di adottarla.
