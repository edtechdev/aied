---
title: Sensori e analisi dello sguardo
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T14:14:01-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-05T22:30:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Sensori e analisi dello sguardo** — l'uso di eye tracking, elettroencefalografia, attività elettrodermica, variabilità della frequenza cardiaca e postura ricavata dalla telecamera per inferire stati di chi apprende come attenzione, coinvolgimento, carico cognitivo e affetto. Nell'[[ai-education|IA nell'educazione]] questi segnali promettono una visione continua e non verbale dell'apprendimento che quiz e autovalutazioni non possono fornire. Stanno anche al centro del problema inferenziale più difficile del campo: un sensore registra un corpo, non una mente, e ogni affermazione su ciò che chi apprende pensa o sente è un'interpretazione sovrapposta a quella registrazione ([[kim-ai-embodied-learning-review-2026|Kim e Han, 2026]]).

## Domande da considerare

- Una webcam può mostrare che i tuoi occhi sono rimasti dentro un video per tutta una lezione. Significa che stavi prestando attenzione?
- Se un tutor potesse stimare il tuo carico cognitivo in tempo reale, dovrebbe agire su quella stima senza chiedertelo prima?
- Lo sguardo di uno studente può lasciare lo schermo per un tic, una disabilità visiva o una norma culturale. Cosa significa una segnalazione di «bassa attenzione» per quello studente?
- Dovrebbe essere consentito a un'università raccogliere dati cerebrali e cardiaci per migliorare i corsi, e cosa richiederebbe un consenso reale?
- Una cifra come «75% di accuratezza sul coinvolgimento» suona precisa. Quale strato del coinvolgimento ha davvero raggiunto il sensore, e quale ha mancato?
- Il proctoring ora legge postura e movimento della testa. Dove passa il confine tra rilevare una condotta scorretta e giudicare un corpo?

## Introduzione

Sensori e analisi dello sguardo descrivono una famiglia di metodi che trasformano misurazioni fisiche di chi apprende in inferenze educative. Le misurazioni includono dove si posano gli occhi e per quanto tempo, l'attività elettrica del cuoio capelluto, le risposte delle ghiandole sudoripare, la variazione battito per battito della frequenza cardiaca e la posizione e il movimento di testa e tronco. Le inferenze includono attenzione, coinvolgimento, carico cognitivo, confusione, stress e, nei contesti di valutazione, sospetto.

L'attrattiva è diretta. Le [[self-report-measures|autovalutazioni]] sono retrospettive e grossolane, e i quiz campionano l'apprendimento in pochi momenti. I sensori funzionano in continuo e costano a chi apprende poco sforzo cosciente. Quella combinazione ha reso il rilevamento centrale per la [[learning-analytics|learning analytics]] e la [[student-modeling|modellazione dello studente]], e ha prodotto una letteratura ampia in cui il rilevamento è tecnicamente impressionante e l'interpretazione è sottile.

Una [[meta-analysis-systematic-review|rassegna sistematica]] di 23 studi che accoppiano l'IA all'[[embodied-learning|apprendimento incarnato]] rende concreto lo squilibrio. Analisi e valutazione contavano per il 40,0% dei ruoli IA codificati, riconoscimento e rilevamento per il 22,5%, mentre feedback e coaching prendevano il 15,0%. I ruoli di rilevamento costituivano il 62,5% dei tag di ruolo contro il 35,0% di quelli partecipativi ([[kim-ai-embodied-learning-review-2026|Kim e Han, 2026]]). Il campo è più bravo a guardare chi apprende che a cambiare ciò che accade dopo.

## Cosa misura davvero ciascun segnale

**Sguardo e fissazione.** Gli eye tracker riportano dove punta l'occhio, per quanto tempo si sofferma, quando compie saccadi e quanto ampiamente si disperde. Sistemi basati sullo schermo come WebGazer stimano lo sguardo da una webcam, mentre gli occhiali tracciano l'occhio direttamente. TutorLoop converte lo sguardo in due quantità: l'attenzione come percentuale di punti di sguardo dentro l'area dei contenuti, e il carico come entropia dello sguardo, sul ragionamento che uno sguardo disperso segua il carico cognitivo ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Ollie, un assistente informato dallo sguardo per bambini, definisce invece aree di interesse in un'immagine e avvia la narrazione quando un bambino ne guarda una ([[gaze-informed-ai-children|Wu et al., 2026]]).

**Elettroencefalografia.** L'EEG registra fluttuazioni di tensione sul cuoio capelluto con alta risoluzione temporale. È l'unico segnale di questa famiglia che raggiunge direttamente l'attività corticale, ed è per questo che attira la ricerca sulla valutazione. I sistemi educativi pratici usano elettrodi asciutti e pochi canali: E3Sense ha preso quattro canali EEG asciutti a 125 Hz e ne ha analizzati due frontali ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). Gli impianti di livello di ricerca fanno il contrario: Kosmyna et al. (2025) hanno usato EEG a 32 canali per confrontare studenti che scrivevano con un [[llm|LLM]], con un motore di ricerca o senza strumenti, e hanno trovato la connettività neurale più debole nel gruppo LLM ([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna et al., 2025]]). Quello studio è anche l'avvertimento più chiaro sull'evidenza a canale singolo, perché la sua tesi centrale si regge su una sessione di crossover facoltativa a cui hanno partecipato solo 18 dei 54 partecipanti.

**Attività elettrodermica.** L'EDA misura la conduttanza delle ghiandole sudoripare, un indice dell'attivazione simpatica. Risponde a stress, sforzo e intensità emotiva, e non sa distinguerli. Lo stesso costrutto compare nei bracciali e negli elettrodi frontali fissati a pochi centimetri di distanza da una montatura di eye tracker ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

**Frequenza cardiaca e variabilità della frequenza cardiaca.** La frequenza cardiaca segue l'attivazione, e la variabilità tra i battiti indicizza il recupero autonomico. In uno studio lungo un anno su 458 studenti che indossavano anelli Oura, il linguaggio dell'esaurimento emotivo seguiva una minore efficienza del sonno e una minore variabilità della frequenza cardiaca ([[affective-text-wearable-student-health|Affective Text and Wearable Sensing, 2026]]). Nessuna delle due misure identifica una causa.

**Postura e movimento da telecamera.** Un sistema di proctoring può estrarre diciassette punti di riferimento corporei per fotogramma e ricavare deviazione della postura, tendenza del movimento della testa e movimento della parte superiore del corpo ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). Questo misura il movimento. Chiamarlo comportamento sospetto è un passo separato e non supportato.

Questi segnali differiscono per frequenza di campionamento, rumore e onere di strumentazione. E3Sense ha allineato dodici finestre EEG, sei oculari e tre EDA in una rappresentazione condivisa di 120 secondi con 166 dimensioni ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage ha fatto funzionare sette tipi di dispositivo insieme e ha concluso che le combinazioni leggere portavano gran parte del segnale utilizzabile ([[engagement-assessment-video|Leng et al., 2026]]).

## A cosa servono i segnali

**Rilevamento del coinvolgimento nell'[[video-education|apprendimento video]].** E3Sense ha chiesto a 30 studenti universitari di valutare cinque segmenti per video, producendo 450 valutazioni. Un modello fuso ha raggiunto il 75,0% di accuratezza bilanciata entro un livello contro un valore di riferimento modale del 63,0% su partecipanti tenuti fuori ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage ha riportato un MAE di 0,81 e l'83,75% di accuratezza entro un livello su 16 partecipanti e 715 finestre di sondaggio ([[engagement-assessment-video|Leng et al., 2026]]). Entrambi trattano la stima come approssimativa.

**Stima dell'attenzione in aula.** Un [[multimodal|trasformatore multimodale]] ha fuso immagini facciali con segnali indossabili su DIPSER, un dataset naturalistico di 57 soggetti, e ha raggiunto un MAE di 0,283. Il suo vantaggio su un valore di riferimento solo visivo era modesto, e gli autori concludono che i tratti facciali erano la fonte primaria di informazione ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]).

**Carico cognitivo e tempi del feedback.** TutorLoop ha usato attenzione e carico ricavati dallo sguardo per scegliere tra quattro [[feedback|tipi di feedback]] con un agente di apprendimento per rinforzo. Su 187 partecipanti il sistema completo è intervenuto meno spesso dei valori di riferimento ma ha migliorato l'attenzione e ridotto il carico ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**Proctoring e integrità.** Il proctoring basato sulla posa riporta prestazioni quasi al tetto sul proprio insieme di scenari etichettati: 99,56% di accuratezza e un AUC di 0,9957 ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). L'IA indossabile cambia lo stesso problema dall'altro lato. Gli occhiali intelligenti rimuovono la caduta dello sguardo e lo spostamento di postura su cui si regge la sorveglianza, una condizione che Corbin e colleghi chiamano doppia trasparenza ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**Affetto e [[well-being|benessere]].** I segnali fisiologici raccolti durante gli esami hanno predetto categorie di voto, con la random forest che raggiungeva una media di 0,96 su 30 repliche ([[physiological-signals-exam-outcomes-ml|Yamazaki e Rimal, 2026]]). I predittori principali erano attività elettrodermica, movimento dell'accelerometro e temperatura della pelle. Si tratta di attivazione e movimento, non di comprensione.

**Ricerca sulla valutazione.** L'EEG è stato testato come misura diretta della familiarità e della rappresentazione mentale. Entrambe le linee sono promettenti ed entrambe restano esplorative, cosa di cui si occupa la sezione seguente.

## Il divario inferenziale

Ogni uso qui sopra dipende da una catena: un evento fisiologico o comportamentale, una caratteristica calcolata da esso, un modello addestrato su etichette e un'affermazione su uno stato mentale. Ogni anello perde qualcosa.

L'etichetta è spesso l'anello più debole. E3Sense prediceva le valutazioni dei segmenti fatte dagli stessi studenti, e il 63% di quelle valutazioni stava ai due livelli di coinvolgimento. Un modello può ottenere buoni punteggi imparando la distribuzione anziché lo stato. Quando i ricercatori hanno aggiunto le definizioni di coinvolgimento degli stessi studenti, l'accuratezza è salita dal 64,6% al 71,5%, il che suggerisce che etichette e segnali misuravano in parte cose diverse ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

La [[assessment-validity|validazione]] può gonfiare il modello. Un benchmark di quindici modelli per la previsione della familiarità basata su EEG ha raggiunto 0,9853 di F1 sotto validazione incrociata stratificata. Il Group K-Fold indipendente dalle prove, che rispetta la struttura temporale, ha abbassato il picco a 0,6038 di F1 contro un livello di caso del 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara e Halloluwa, 2026]]). Il primo numero descrive una fuga di dati; il secondo descrive apprendimento.

Un correlato neurale non è un punteggio. Le immagini ricostruite dall'EEG correlavano con la prestazione al test a R² = 0,79 su 55 osservazioni partecipante-video. Gli item risposti correttamente mostravano anche una similarità semantica più alta di quelli sbagliati. Eppure un partecipante ha prodotto ricostruzioni di alta qualità e ha risposto in modo errato, quindi la qualità della ricostruzione non può essere letta come correttezza ([[seeing-cognitive-representations-eeg-reconstruction|Su et al., 2026]]).

L'attenzione non è apprendimento. In TutorLoop l'attenzione correlava con l'apprendimento a r = 0,017, mentre il carico correlava negativamente a r = -0,168 ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Un sistema che massimizzasse il segnale di attenzione avrebbe ottimizzato qualcosa di molto vicino al rumore.


Un sensore può registrare la co-presenza dove uno studio afferma l'interazione: [[hur-computational-analysis-teacher-group-interactions-2026|Hur et al. (2026)]] hanno trovato che un rilevatore basato sulla posa raggiungeva solo il 55% di recall, cogliendo 11 dei 20 eventi identificati dai codificatori umani nelle interazioni di gruppo insegnante–studenti. L'insegnante era presente dentro il confine del gruppo nel 49,2% dei segmenti codificati mentre gli studenti guardavano l'insegnante solo nel 25,4%, e nessuna caratteristica audio cambiava in nessuno dei due confronti, quindi la pipeline registrava la co-presenza spaziale anziché l'interazione sostenuta.


Un profilo fisiologico non è una diagnosi. I modelli di stress da esame predicono una categoria di voto da attivazione e movimento, e gli autori insistono che l'output appartenga accanto alle circostanze personali e al contesto di salute mentale, non dentro una decisione ad alta posta in gioco ([[physiological-signals-exam-outcomes-ml|Yamazaki e Rimal, 2026]]).

Infine, raccolta non è integrazione. Kim e Han hanno trovato che la maggior parte degli studi multimodali raccoglieva flussi in parallelo, uno solo allineava affetto facciale, sguardo e rilevamento del volto a posteriori, e nessuno fondeva i propri input in tempo reale mentre chi apprende usava il sistema ([[kim-ai-embodied-learning-review-2026|Kim e Han, 2026]]). Una pagina di canali sincronizzati può sembrare un modello di chi apprende quando è solo una registrazione.

## L'etica del rilevare chi apprende

**Il consenso è indebolito dal potere istituzionale.** Uno studente che deve frequentare o sostenere un esame non può rifiutare liberamente una telecamera o un dispositivo indossabile. Gli attributi demografici possono non essere nemmeno forniti volontariamente: le etichette di genere, età ed etnia di DIPSER erano inferite dalle immagini da modelli di visione artificiale anziché fornite dai partecipanti ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). Inferire chi è qualcuno, per verificare se un modello lo tratta equamente, è di per sé un atto di profilazione.

**I dati biometrici non sono dati analitici ordinari.** EEG, EDA e variabilità della frequenza cardiaca sono adiacenti alla salute e, in molte giurisdizioni, dati di categoria speciale. Possono rivelare sonno, stress e condizioni mediche oltre qualsiasi necessità di un corso. Un sistema informato dallo sguardo per bambini ha attirato l'obiezione sulla [[privacy|privacy]] di un genitore anche in un piccolo studio pilota ([[gaze-informed-ai-children|Wu et al., 2026]]).

**La deriva funzionale è il percorso normale.** Il monitoraggio del benessere diventa segnalazione del rischio, e la segnalazione del rischio diventa prova di valutazione. Corbin e colleghi mostrano la versione valutativa di questa deriva: una volta che l'esclusione fisica fallisce, l'ispezione si sposta dagli artefatti ai corpi, e gli studenti devono dimostrare che i loro occhiali sono correttivi e i loro dispositivi terapeutici ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**I fallimenti di equità si concentrano su corpi che differiscono.** La stima dell'attenzione basata sul volto dipende dal tono della pelle, dagli occhiali e dall'illuminazione. L'attenzione basata sullo sguardo penalizza chi evita il contatto visivo, inclusi alcuni studenti autistici e [[neurodiversity|neurodivergenti]]. Il proctoring basato sulla posa segnala tic, stimming e norme culturali del movimento. Lo studio sul proctoring non verifica se la postura segnalata corrisponda a una condotta scorretta, né se il rilevatore tratti equamente gli [[inclusive-learning|studenti con disabilità]] o le differenze culturali nello sguardo ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). La regolazione non è un rimedio, qui; è un modo di riciclare l'errore in una regola.

**Le pretese di equità richiedono evidenza a livello di soggetto.** Un regolarizzatore mirato al genere ha ridotto il divario di MAE in validazione da 0,02 a 0,005, poi ha aumentato sia il divario sia l'errore del gruppo peggiore su soggetti tenuti fuori ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). Riportare una singola suddivisione come prova di equità è un fallimento progettuale con un costo di equità.

**La privacy può essere progettata dentro.** TutorLoop ha fatto girare WebGazer lato client, così lo sguardo grezzo non lasciava mai il browser ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Quella scelta mostra che parte del costo è architetturale anziché intrinseco. La domanda più difficile è se l'inferenza dovrebbe esistere del tutto.

## Idee sbagliate comuni

**«L'eye tracking dice dove sta l'attenzione.»** Dice dove puntano gli occhi. Lo sguardo può posarsi su una diapositiva mentre chi apprende pensa ad altro, e può lasciare lo schermo per ragioni non legate all'attenzione. La misura di attenzione di TutorLoop correlava con l'apprendimento a r = 0,017, che è vicino a nessuna relazione ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**«Un segnale fisiologico è una lettura diretta di uno stato mentale.»** L'EDA indicizza l'attivazione simpatica, e la variabilità della frequenza cardiaca indicizza il recupero autonomico. Nessuna delle due distingue lo stress dallo sforzo dall'eccitazione. Un modello che predice i voti d'esame da EDA, movimento e temperatura della pelle ha imparato la firma di attivazione del corpo, non la comprensione dello studente ([[physiological-signals-exam-outcomes-ml|Yamazaki e Rimal, 2026]]).

**«Un'accuratezza di classificazione alta significa che il sistema rileva lo stato.»** L'accuratezza dipende dalle etichette, dalla suddivisione e dal tasso di base. La previsione di familiarità con EEG è scesa da 0,9853 a 0,6038 di F1 quando la validazione ha rispettato i confini delle prove ([[eeg-familiarity-automated-assessment-2026|Nanayakkara e Halloluwa, 2026]]). Il 99,56% del proctoring descrive un insieme di scenari etichettati su misura, non esami dal vivo ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]).

**«Il coinvolgimento è una cosa sola, quindi un punteggio può rappresentarlo.»** Il costrutto ha tre filoni, e un sensore raggiunge soprattutto il primo. E3Sense ha trovato che gli studenti lo definivano attraverso indicatori cognitivi, comportamentali ed emotivi in proporzioni diverse, e quelle definizioni cambiavano la previsione ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). Un numero singolo nasconde quale strato è stato misurato.

**«Se il modello è equo sulla suddivisione di validazione, è equo in aula.»** Un regolarizzatore che equalizzava l'errore di validazione tra gruppi di genere ha peggiorato il divario sui soggetti tenuti fuori ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). L'equità è una proprietà di una messa in esercizio, non di un checkpoint.

## Concetti collegati
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## Articoli collegati
- [[gaze-informed-ai-children]] — La narrazione LLM attivata dallo sguardo ha trattenuto i bambini su una regione narrata per 6,48 s contro 1,67 s, ma lo studio misurava l'attenzione anziché la comprensione (Wu et al., 2026)
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — EEG montato sulla testa, eye tracking ed EDA frontale hanno predetto il coinvolgimento autovalutato al 75,0% di accuratezza entro un livello contro un valore di riferimento del 63,0% (Anupkrishnan et al., 2026)
- [[engagement-assessment-video]] — EduGage ha fuso sette flussi indossabili e da telecamera in stime di coinvolgimento a livello di segmento (MAE 0,81) e sostiene una strumentazione più leggera (Leng et al., 2026)
- [[student-attention-estimation-fairness-2026]] — Un modello multimodale dell'attenzione ha raggiunto un MAE di 0,283, e i suoi guadagni di equità in validazione si sono invertiti su soggetti tenuti fuori (Fragkiadakis et al., 2026)
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — L'IA indossabile è doppiamente trasparente, quindi l'esclusione fisica fallisce e l'applicazione deriva verso il giudicare i corpi degli studenti (Corbin et al., 2026)
- [[eeg-familiarity-automated-assessment-2026]] — Quindici modelli per la previsione di familiarità con EEG sono scesi da 0,9853 a 0,6038 di F1 sotto validazione indipendente dalle prove (Nanayakkara e Halloluwa, 2026)
- [[seeing-cognitive-representations-eeg-reconstruction]] — Le immagini ricostruite dall'EEG seguivano la prestazione al test a R² = 0,79, con un partecipante ad alta ricostruzione che rispondeva in modo errato (Su et al., 2026)
- [[physiological-signals-exam-outcomes-ml]] — La random forest ha predetto categorie di voto d'esame da EDA, movimento e temperatura della pelle, segnali che indicizzano l'attivazione anziché la comprensione (Yamazaki e Rimal, 2026)
- [[affective-text-wearable-student-health]] — In 458 studenti che indossavano Oura, il registro emotivo anziché il tema della preoccupazione seguiva sonno e variabilità della frequenza cardiaca (2026)
- [[tutorloop-sensor-cognitive-feedback-2026]] — Lo sguardo da webcam ha guidato il feedback di apprendimento per rinforzo per 187 studenti; l'attenzione correlava con l'apprendimento a r = 0,017 mentre il carico correlava negativamente (2026)
- [[arif-automated-online-proctoring-yolov11-2026]] — Le caratteristiche di posa YOLOv11 segnalavano comportamenti sospetti al 99,56% su un insieme etichettato su misura, senza testare la condotta scorretta o l'equità (Arif et al., 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — La connettività EEG scendeva con il supporto esterno alla scrittura su 54 partecipanti, inquadrando l'affidamento come debito cognitivo accumulato (Kosmyna et al., 2025)
- [[kim-ai-embodied-learning-review-2026]] — Su 23 studi, i ruoli di rilevamento dominavano al 62,5% dei tag e nessun sistema passato in rassegna fondeva i flussi multimodali in tempo reale (Kim e Han, 2026)
