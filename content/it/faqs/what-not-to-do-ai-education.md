---
title: "Che cosa dovrebbero evitare di fare gli educatori con l'IA?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

La maggior parte delle indicazioni sull'IA in educazione dice cosa provare. Questa pagina raccoglie le pratiche che le prove dicono di smettere, ordinate per il ruolo che dovrebbe smetterle. Le convinzioni false sono trattate altrove: la [[addressing-common-misconceptions-ai-education|FAQ sui fraintendimenti]] se ne occupa, e la pagina di concetto [[misconceptions]] spiega perché persistono. Ciò che la ricerca non può ancora dire appartiene alle [[limitations-in-aied-research|limitazioni nella ricerca sull'AIEd]]. Quello che segue è il passo successivo alla convinzione, cioè ciò che le persone fanno, quanto costa e cosa fare invece.

Tre fallimenti ricorrono in tutti i ruoli.

1. **Sostituzione.** Uno strumento svolge il pensiero che il discente doveva fare, e l'output viene valutato come se l'avesse fatto il discente. Il tema consegnato è la registrazione di ciò che sa fare il modello, non di ciò che sa fare lo studente.
2. **Prova non guadagnata.** Un segnale economico da raccogliere, come la fiducia, la fluidità, il coinvolgimento o un tasso di completamento, viene trattato come prova di qualcosa che non può mostrare. Una dashboard può riportare quaranta minuti in una sessione di tutoring; non può riportare se qualcuno ha imparato la formula quadratica.
3. **Struttura lasciata all'esortazione.** A un avvertimento, a una frase di policy o a una sessione di formazione si chiede di fare il lavoro che devono fare il design dell'interfaccia, il design della valutazione o la governance. Il programma dice di usare l'IA in modo responsabile, e il tutor consegna comunque la risposta finita al primo prompt.

## La versione breve

**1.** Non valutare, citare o promuovere mai un output come prova della capacità che l'ha prodotto.

**2.** Raccogliere la misura senza aiuto accanto a quella assistita, ogni volta.

**3.** Trattare fluidità, fiducia e coinvolgimento come caratteristiche dell'uso, non come apprendimento.

**4.** Mettere la salvaguardia nel flusso di lavoro, non in un avvertimento.

**5.** Presumere che qualsiasi dato lo strumento possa vedere sarà conservato, combinato e violato.

**6.** Se l'affermazione arriva con una demo ma non con un confronto, è marketing.

## Per i docenti

**Non certificare l'output come capacità.** Una consegna rifinita è prova di una consegna rifinita. Se uno studente consegna una rassegna della letteratura le cui fonti non si possono verificare contro nulla che il corso abbia insegnato, e la valutazione non riesce a distinguere ciò che quello studente sa fare senza aiuto, la valutazione ha smesso di misurare la cosa che il titolo afferma ([[assessment-validity]], [[authentic-assessment]]). La soluzione è una riprogettazione del compito; un codice d'onore più severo non basta.

**Non usare un punteggio di rilevatore come prova di condotta scorretta.** In uno studio controllato su 642 abstract pubblicati, i rilevatori hanno segnalato il 38–80% delle modifiche leggere con IA conformi alle linee guida e il 9–15% della scrittura umana non modificata, mentre hanno intercettato meno del 4% delle riscritture passate per un servizio di umanizzazione ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Un benchmark indipendente ha trovato che nessuno di 14 strumenti commerciali raggiungeva l'80% di accuratezza, e una semplice parafrasi dimezza anche quel risultato ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). A tassi di base realistici, i falsi positivi superano i veri positivi ([[should-we-use-ai-detectors]]). Un rilevatore può avviare una conversazione; non può chiuderla.

**Non aggiungere l'IA a una valutazione che non è stata riprogettata.** Applicare uno strumento a un compito progettato per una prestazione senza aiuto produce esattamente l'inflazione dei voti che nasconde la perdita, con i compiti in su e l'esame in giù. Chiedere di ogni compito valutato cosa mostrerebbe la versione senza aiuto, e correggere prima il compito ([[reducing-ai-misuse]]). Se la serie di esercizi a casa e il quiz in classe verificano la stessa competenza, solo uno dei due sta misurando lo studente.

**Non trattare il coinvolgimento come apprendimento.** Tempo sul compito, soddisfazione, volume di ricerca di aiuto e attività in chat sono tutti facili da strumentare e tutti compatibili con nessun apprendimento. In un esperimento 3 × 2 con 186 partecipanti che giudicavano casi civili su una piattaforma supportata da un LLM, un guardrail che ha ridotto il passaggio a una posizione errata dell'IA dal 42–60.5% al 5.7–8.2% non ha prodotto alcun effetto di apprendimento misurabile entro la sessione (β = 0.03, p = 0.18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Il comportamento è cambiato; la misura dell'apprendimento no ([[student-engagement]]).

**Non affidarsi a un avvertimento dove l'interfaccia potrebbe vincolare.** Un tutor che può produrre la risposta finita la produrrà sotto la pressione della scadenza, qualunque cosa dica il programma. Il guardrail che funziona è costruito nell'interazione ([[reducing-ai-misuse]], [[pedagogical-safety]]). Trattenere la risposta finale per i primi due tentativi è una decisione di progettazione; chiedere agli studenti di non chiederla è una richiesta.

**Non incollare lavori degli studenti, PEI, registri disciplinari o bozze identificabili in uno strumento di consumo.** La minimizzazione dei dati è una decisione di progettazione che si prende per conto dello studente, che ci si abbia pensato o no ([[privacy]]). L'account gratuito del chatbot che risponde a una domanda sul piano comportamentale di uno studente è anche una copia di quel piano sul server di qualcun altro.

## Per i discenti

**Non consegnare la parte che si dovrebbe stare esercitando.** Supponiamo che il compito sia un saggio di cinque paragrafi: si incolla il prompt in un chatbot, si prende la bozza che restituisce e la si consegna. Quello che si consegna è la registrazione di ciò che sa fare il modello. La domanda è quale lavoro cognitivo si sposta, non quanto l'IA si usa. Esternalizzare i compiti a casa alza i voti dei compiti mentre abbassa quelli degli esami a libro chiuso: su 26,811 studenti della secondaria seguiti per 30 mesi, i voti dei compiti sono saliti del 18% e quelli degli esami sono scesi del 20% entro sei mesi ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu, 2026]]). La pratica che costruisce conoscenza recuperabile è andata allo strumento ([[reducing-ai-misuse]]). Se l'esercizio è il punto, lo strumento non può fare l'esercizio.

**Non leggere la fluidità come accuratezza.** Il testo fluido è l'output di un [[llm|modello linguistico]] indipendentemente dal fatto che il contenuto sia vero, e il meccanismo che lo rende persuasivo è lo stesso che lo rende sbagliato ([[hallucination-risk]]). Verificare l'affermazione specifica, non il tono del paragrafo. Quell'abitudine raramente nasce da sola: in un panel di rilevazione passiva di 900 adulti statunitensi a cui è stato dato un riassunto generato dall'IA, i lettori hanno seguito una fonte citata al suo interno nell'1% delle visite ([[trust-calibration-chatbots-design-problem-2026|Jaidka e Cai, 2026]]). Se il compito richiede tre fonti, aprirle tutte e tre.

**Non accettare l'accordo come feedback.** I modelli affermano sostanzialmente più degli umani: su 11 modelli, le risposte dell'IA hanno confermato gli utenti il 49% più spesso delle risposte umane, e l'eccesso è ciò che fa percepire l'interazione come un sostegno ([[ai-personal-coach-review-benefits-risks-2026|Potel e Kumashiro, 2026]]). Un tutor che non è mai in disaccordo con te ha rimosso il segnale correttivo per cui eri venuto ([[ai-sycophancy]]). Chiedere l'obiezione, non l'approvazione: «Che cosa c'è di sbagliato in questo argomento, e che cosa direbbe uno scettico?».

**Non barattare una domanda con una risposta quando si è bloccati.** La lotta produttiva che si salta è l'apprendimento. La ricerca di aiuto che recupera una risposta è un comportamento diverso dalla ricerca di aiuto che recupera un indizio ([[help-seeking]], [[desirable-difficulties]]). Usare strumenti che trattengono la risposta finita, e chiedere il passo successivo anziché la soluzione.

**Non incollare informazioni personali, sanitarie o familiari in uno strumento per ottenere una risposta migliore.** Lo strumento non ha alcun obbligo di dimenticarle, e il costo per la privacy non compare nella qualità della risposta ([[privacy]]). Un prompt migliore non richiede la diagnosi, l'indirizzo o i nomi dei familiari.

## Per i genitori e le famiglie

**Non fare i compiti con lo strumento, né lasciare che vengano fatti accanto a sé.** Lo schema nei dati è un'inflazione dei voti con un costo nascosto: nello stesso panel di 30 mesi, i voti dei compiti sono saliti del 18% mentre quelli degli esami a libro chiuso sono scesi del 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu, 2026]]). Un bambino che porta a casa compiti perfetti e un compito in classe fallito sta mostrando esattamente questo divario. Quello che si può controllare è il processo. Il bambino sa spiegare il passo, rifare un problema su carta e dire su quale parte era incerto? Se no, il compito l'ha fatto lo strumento.

**Non lasciare che un chatbot diventi il confidente.** I sistemi sicofanti affermano molto più delle persone, il 49% in più su 11 modelli, e quell'affermazione è ciò che li fa sembrare sicuri con cui parlare ([[ai-personal-coach-review-benefits-risks-2026|Potel e Kumashiro, 2026]]). In un ampio studio longitudinale, gli utenti si sono rivolti all'IA sicofante per consigli personali quasi quanto agli amici stretti e alla famiglia, con una soddisfazione inferiore nelle relazioni reali ([[sycophantic-ai-social-interaction-2026]]). Un bambino che porta il proprio disagio a un modello che dà sempre ragione non viene ascoltato. Viene rispecchiato. Se il bambino parla con un chatbot di un'amicizia o di un lutto, quello è il momento di chiedere a chi altro l'ha raccontato.

**Non dare un chatbot generativo a un bambino piccolo e chiamarlo supervisionato perché si è nella stanza.** L'indicazione per fasce d'età è concreta: attività con scaffolding e non generative per i 9–12 anni, uso generativo supervisionato con ragionamento etico dai 13 in su ([[ai-guidance-children-under-13]]). Per i più piccoli il rischio riguarda le convinzioni. I bambini in fase preoperatoria accettano il contenuto generato come vero, e i sistemi non sono calibrati sullo sviluppo nel feedback che danno. L'uso congiunto da parte di un adulto significa sedersi accanto al bambino e chiedergli cosa ha appena fatto il giocattolo, non sorvegliare dalla porta ([[early-childhood-elementary-ai-education]]).

**Non presumere che lo strumento della scuola protegga i dati del bambino perché l'ha scelto la scuola.** Chiedere cosa viene conservato, per quanto tempo, se addestra qualcosa e chi altro lo vede ([[privacy]]). La consapevolezza non segue l'esposizione: un mese dopo una lezione in cui una classe del primo anno della secondaria ha visto il proprio comportamento registrato proiettato in diretta, il 66% dei 47 studenti sceglieva ancora l'impostazione del chatbot meno protettiva ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Porre le domande alla scuola per iscritto, e chiedere le risposte per iscritto.

**Non usare il risultato di un rilevatore per accusare il proprio figlio, né per sostenere un'accusa della scuola.** In uno studio controllato su 642 abstract pubblicati, i rilevatori hanno segnalato il 9–15% della scrittura umana non modificata e hanno intercettato meno del 4% delle riscritture dell'IA umanizzate ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). A tassi di base realistici, i falsi positivi superano i veri positivi ([[ai-detection]]). Trattare una segnalazione come un motivo per chiedere la cronologia delle bozze e una conversazione, non come un risultato.

**Non concludere che vietare lo strumento sia l'opzione sicura.** La fiducia insufficiente è un fallimento di calibrazione con un suo costo, la capacità non sfruttata, e la competenza che conta è la fiducia calibrata, non l'evitamento ([[trust-calibration]]). La mossa genitoriale utile è quella che la ricerca sostiene per gli studenti: richiedere un passo di verifica e renderlo abbastanza economico che un bambino stanco lo faccia davvero ([[verify-ai-output]]). Chiedere di vedere la fonte usata da un chatbot costa un minuto; vietare il chatbot costa la pratica.

**Non scambiare un filtro di contenuti per sicurezza.** I filtri riguardano ciò che un sistema dirà. Non riguardano ciò che un'interazione fa a un discente: pratica erosa, accordo sicofante o rifiuti disomogenei ([[pedagogical-safety]]).

## Per gli sviluppatori didattici e dei docenti

**Non fare formazione sullo strumento e chiamarla alfabetizzazione all'IA.** Una sessione sul [[prompt-engineering|prompting]] insegna l'interfaccia di un prodotto. L'[[ai-literacy|alfabetizzazione all'IA]] è la capacità di giudicare quando lo strumento va usato, cosa sta facendo e cosa verificare. Gli insegnanti che imparano i pulsanti senza il giudizio escono con fiducia e nessuna calibrazione ([[teacher-ai-competency]]). Un workshop che finisce con tutti capaci di generare un piano di lezione, e nessuno capace di dire quando quel piano non va usato, ha insegnato l'interfaccia.

**Non fare sviluppo professionale una tantum e aspettarsi che la pratica cambi.** Le prove sulla [[professional-training|formazione professionale]] sono coerenti su durata e follow-up: gli eventi singoli muovono la fiducia autodichiarata, raramente il comportamento in classe, e il guadagno di fiducia può mascherare l'assenza di cambiamento ([[educational-development]]). Una sessione di due ore ad agosto, senza follow-up a ottobre, è un intervento sulla fiducia.

**Non ignorare il sistema di valutazione che si lascia in piedi.** I docenti adotteranno la pratica insegnata solo se la valutazione a cui sono sottoposti non la punisce. Un workshop sulla progettazione di compiti resistenti all'IA che si svolge accanto a un regime d'esame invariato insegna ai docenti che la formazione è decorativa.

**Non modellare l'uso acritico contro cui si mette in guardia.** Dimostrare uno strumento generando un piano di lezione davanti ai docenti, senza un passo di verifica, insegna al pubblico che l'output è il prodotto. Generarlo davanti a loro, poi segnare le due affermazioni che vanno controllate.

**Non accettare una demo del fornitore come prova di efficacia.** L'affermazione che si sta valutando riguarda l'apprendimento, e una demo mostra la capacità. Chiedere esiti senza aiuto, risultati per sottogruppi e test di sicurezza multi-turno ([[checking-whether-educational-ai-works]]).

## Per gli sviluppatori di software educativo

**Non ottimizzare la metrica facile da registrare.** Durata della sessione, numero di messaggi e valutazioni di soddisfazione miglioreranno sotto quasi qualsiasi cambiamento; l'apprendimento spesso no. Lo stesso team che rilascia un guardrail può rilasciare una dashboard che premia il volume di interazione, e le due punteranno in direzioni opposte ([[learning-analytics]], [[student-engagement]]). Se la metrica di successo è il numero di messaggi per sessione, si è costruito un prodotto che premia gli studenti per restare nella chat.

**Non rilasciare un rilevatore senza uno studio di validazione contro il costrutto.** Un benchmark di quindici modelli EEG ha raggiunto 0.9853 di F1 con validazione incrociata stratificata; il Group K-Fold indipendente dalla prova, che rispetta i confini delle prove, ha abbassato il picco a 0.6038 contro un livello di casualità del 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara e Halloluwa, 2026]]). Un rilevatore di sorrisi può andare *negativamente* rispetto all'empatia valutata dagli osservatori perché gli manca il contesto che ha un valutatore umano ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Pubblicare il protocollo di validazione accanto al numero principale.

**Non inferire affetto, attenzione o «coinvolgimento» da volti e corpi senza consenso e uno scopo dichiarato.** Il rischio multi-turno non è il rischio single-turno: in una revisione sulla sicurezza pedagogica, i fallimenti sono saliti dal 17.7% nelle valutazioni single-turno al 77.8% in quelle multi-turno ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Un sistema certificato su prompt isolati è certificato su un'interazione che gli studenti non hanno ([[pedagogical-safety]], [[privacy]]).

**Non nascondere il passaggio di consegne.** Uno studente che non riesce a dire quando un tutor sta generando anziché recuperando, o quando c'è un umano nel circuito, non può calibrarvi la fiducia. Il [[automation-bias|bias di automazione]] opera più limpidamente quando il sistema ha ragione e l'umano ha smesso di controllare ([[trust-calibration]]). Dire nell'interfaccia quando una persona leggerà il lavoro.

**Non progettare per il benchmark e poi rivendicare l'aula.** La prestazione al benchmark è una proprietà del benchmark. Riportare le condizioni d'uso testate, la popolazione e i compiti; altrimenti il numero sarà letto come una promessa su un contesto diverso ([[limitations-in-aied-research]]).

**Non rendere lo strumento l'unica via all'aiuto.** Se l'accesso di uno studente al [[feedback|feedback]] dipende dalla disponibilità, dalla quota o dalla licenza di un modello, la questione di equità è già stata decisa dall'approvvigionamento ([[equity-in-ai-education]]).

## Per gli amministratori educativi

**Non comprare affermazioni di capacità come prove di esito.** I fornitori possono dimostrare un prodotto; solo una valutazione può dimostrare l'apprendimento. Richiedere esiti senza aiuto, risultati per sottogruppi, abbandono e un piano per cosa succede quando il pilot finisce ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Una demo mostra il tutor che risolve un problema; non mostra uno studente che risolve il successivo.

**Non dispiegare sorveglianza perché è disponibile.** I sistemi di proctoring catturano immagini del volto, documenti d'identità, scansioni della stanza comprese panoramiche a 360 gradi e audio del microfono. Una revisione di 80 studi ha trovato che solo il 25% affrontava del tutto le questioni etiche, il 35% non dichiarava il proprio dataset e il 30% non era riproducibile ([[automated-online-exam-proctoring-decade-review-2026|Malhotra e Chhabra, 2026]]). Il costo ricade sugli studenti, e la base di evidenze è più sottile di quanto implichi il contratto ([[privacy]], [[remote-proctoring]]).

**Non scrivere una policy di soli divieti e chiamarla governance.** Un divieto senza riprogettazione della valutazione, senza supporto e senza via di appello sposta il comportamento anziché prevenirlo, e punisce gli studenti meno capaci di contestare un'accusa falsa. La [[governance|policy]] deve coprire anche il valutatore: in un test red-team di un flusso di valutazione quotidiano, due di cinque strategie di prompt injection nascoste in una consegna hanno portato un saggio insufficiente a superare la prova con il 100% e il 94% di successo tra i tipi di file ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Una policy che vincola gli studenti e non la pipeline di valutazione è mezza policy.

**Non equiparare l'adozione al miglioramento.** Una dashboard che riporta utilizzo, soddisfazione e completamento sembrerà un successo mentre la misura dell'apprendimento resta piatta. Decidere in anticipo quale esito farebbe cancellare il contratto ([[ai-ed-evaluation]]). Scrivere quel numero prima che il pilot inizi.

**Non lasciare che l'accessibilità arrivi come richiesta di adattamento.** In una revisione scoping di 40 studi sulle tecnologie assistive digitali per studenti [[neurodiversity|neurodivergenti]], 28 facevano di una diagnosi formale una condizione di partecipazione. Quel modello vincolato alla diagnosi esclude ogni discente con bisogni e senza etichetta ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Per i ricercatori in educazione

**Non lasciare che l'autodichiarazione porti l'affermazione causale.** Fiducia, apprendimento percepito e soddisfazione sono esiti, ma non sono gli esiti che la maggior parte degli studi dice di misurare. La letteratura sull'[[empathy|empatia]] è il caso più chiaro: un campo che intende insegnare l'empatia misura per lo più il comfort, e una revisione di 17 studi ha trovato guadagni di fiducia molto più comuni delle prove dell'empatia stessa ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail e Zafira, 2026]]; [[self-report-measures]]).

**Non citare un effetto senza il suo disegno.** In una revisione critica di 80 studi HCI sul [[critical-thinking|pensiero critico]] con l'IA, 42 (52%) non avevano un gruppo di controllo ([[critical-review-critical-thinking-hci-research-ai-2026]]). Un effetto da titolo su 30 studenti in un corso in un sito è la forma comune di un'affermazione fragile ([[limitations-in-aied-research]]).

**Non riportare l'eterogeneità senza il modello.** Gli stessi dati danno I² = 82.98% sotto un modello a effetti fissi e I² = 15.75% sotto un modello a effetti casuali ([[ai-supported-instruction-stem-meta-analysis-2026]]). Un I² citato senza il suo modello è ininterpretabile ([[meta-analysis-systematic-review]]).

**Non generalizzare da un solo contesto e chiamarlo risultato.** Un corso, un'istituzione, una versione del modello, una lingua. Il comportamento del modello cambia con ogni rilascio, e i rilevatori addestrati su una generazione perdono richiamo sulla successiva ([[research-gaps-aied]], [[ai-detection]]).

**Non trattare una correlazione tra interazione ed esito come un meccanismo.** Il volume di prompt non misura lo scaricamento cognitivo. I cluster per volume non differivano nella distribuzione del lavoro cognitivo, e il dialogo codificato a mano non ha trovato alcuno scaricamento nel 49.6% di 125 dialoghi ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Misurare il lavoro stesso.

**Non pubblicare un paragrafo di limitazioni che si sarebbe potuto scrivere prima dello studio.** Nominare la minaccia specifica, il conteggio specifico e l'affermazione che delimita. È questo che rende una limitazione utilizzabile per il lettore successivo ([[interpreting-and-applying-aied-research]]).

## Perché stanno insieme

Ogni voce sopra promuove un proxy a verdetto. Il saggio sta per lo scrittore, il punteggio sta per la condotta scorretta, il sorriso sta per l'empatia, e la demo sta per l'apprendimento. La correzione è ogni volta la stessa: nominare il costrutto, trovare una misura che potrebbe uscire al contrario, e raccoglierla accanto a quella comoda.

Nessuna di queste cautele significa che lo strumento sia sempre sbagliato. Un rilevatore può essere un motivo per parlare con uno studente. Un chatbot può essere una prova utile. Una dashboard può essere uno stimolo a fare una domanda. Ciò che causa danno è la sostituzione.

## Cosa fare questa settimana

- Scegliere un compito valutato e scrivere cosa mostrerebbe con lo strumento chiuso. Se la risposta è «niente di diverso», il problema è il compito.
- Aggiungere una misura senza aiuto a un corso che al momento riporta solo la prestazione assistita.
- Leggere il contratto di proctoring o dello strumento di IA della propria istituzione per conservazione, uso secondario e violazioni, e controllare se il testo del consenso descrive ciò che il sistema cattura davvero.
- Chiedere a un fornitore esiti senza aiuto e risultati per sottogruppi. Se la risposta è una demo, si ha già la risposta.
- Nella prossima sessione con i docenti, dedicare la seconda metà alla riprogettazione della valutazione anziché ai prompt.

## Dove andare adesso

- [[addressing-common-misconceptions-ai-education]]: le convinzioni dietro queste pratiche, e come correggerle senza sufficienza.
- [[limitations-in-aied-research]]: ciò che la base di evidenze non può ancora sostenere.
- [[reducing-ai-misuse]]: leve strutturali contro l'uso improprio, e perché battono l'esortazione.
- [[pedagogical-safety]]: cosa può fare un tutor a un discente superando ogni controllo sui contenuti.
- [[should-we-use-ai-detectors]]: le prove sui rilevatori per intero.
- [[checking-whether-educational-ai-works]]: come valutare un'affermazione prima di adottarla.
