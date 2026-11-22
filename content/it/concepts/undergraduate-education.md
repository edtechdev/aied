---
title: Studi di primo ciclo
created: "2026-11-22T11:00:00-05:00"
updated: "2026-11-22T12:30:00-05:00"
type: concept
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
assessment: [formative-assessment, assessment, learning-gains]
technology: [generative-ai, conversational-ai, intelligent-tutoring, llm]
level: [undergraduate, higher ed]
confidence: medium
translation_of: concepts/undergraduate-education
source_updated: "2026-11-22T12:10:00-05:00"
translation_note: "Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua."
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-22"
    agent: hermes-agent
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-22"
    agent: hermes-agent
connected_concepts: [scaffolding, help-seeking, feedback-literacy, self-regulated-learning, desirable-difficulties, process-oriented-assessment, self-report-measures, ai-detection, learning-analytics, student-support-and-success, equity-in-ai-education, writing-education, stem-education]
connected_articles: [guardrails-ai-teaching-assistants-programming-2026, genai-use-changing-institutional-policy-physics-2026, caeai-chatgpt-interdisciplinary-stem-nonstem-2026, li-who-benefits-llms-prompt-engineering-equity-2026, llm-math-homework-offloading-traces-2026, patrick-ai-higher-order-thinking-systematic-review-2025, genai-reliance-human-agency-collaborative-learning-2026, genai-cognitive-offloading-learner-agency-review-2026, ai-enabled-course-development-first-year-adjustment-2026, thulin-chatbot-mental-health-students-2026, torres-peralta-perceived-learning-engagement-homework-2026, kumar-chatgpt-academic-assignments-2025, zaripova-genai-self-regulation-neuroai-competence-2026]
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Sintesi:** l'istruzione universitaria di primo ciclo è dove l'IA incontra le classi più grandi e la [[assessment|valutazione]] più standardizzata: corsi propedeutici del primo e del secondo anno in cui un docente insegna a diverse centinaia di studenti contro una [[rubrics|rubrica]] condivisa. I trial a questo livello si dividono per disegno piuttosto che per modello. Un tutor costruito a partire dalla pedagogia del corso ha battuto l'[[active-learning|apprendimento attivo]] in classe, mentre un assistente di corso ben ancorato distribuito senza integrazione didattica ha abbassato voti e partecipazione. L'evidenza più forte riguarda il [[feedback]] su scala, la [[help-seeking|ricerca di aiuto]] e lo [[scaffolding|sostenimento]], il materiale di studio verificato e l'outreach che sposta le scadenze amministrative; quella più debole riguarda le affermazioni per cui un assistente generale aumenta ciò che gli studenti sanno fare senza aiuto.

## Domande da considerare

- Se un tutor alza i voti dei compiti di due punti e mezzo ma l'esame non si muove, cosa ha comprato il corso?
- I voti sono calati in un corso in cui sei studenti su sette non hanno mai aperto il [[conversational-ai|chatbot]]. Cosa ha cambiato la sola disponibilità?
- Cosa è più difendibile in un corso da 600 studenti: rilevare i lavori scritti con l'IA, o cambiare ciò che il lavoro deve contenere?
- Cosa può assumere un corso del primo anno sulle abitudini IA apprese dagli studenti nella scuola secondaria?
- Quando l'unità di design è una coorte di 900 invece di un discente, quali affermazioni della [[personalized-learning|personalizzazione]] sopravvivono?

## Introduzione

Lo studio universitario di primo ciclo è il lavoro di corso della laurea: lezioni, sezioni, laboratori e corsi di servizio, valutati continuamente e sommati in una credenziale. Gli studenti sono adulti che scelgono il proprio tempo di studio, insegnati in coorti molto più grandi di qualsiasi classe scolastica. Non sono ancora ricercatori, e nessun supervisore è responsabile di formare il loro giudizio, il che separa la fascia dalla formazione post-laurea.

La scala è il vincolo definitorio. Un corso introduttorio di [[physics-education|fisica]], economia o [[cs-education|programmazione]] può iscrivere da diverse centinaia a qualche migliaio di studenti, con assistenti che correggono ciascuno decine di saggi o dimostrazioni. Volume di feedback, disponibilità di aiuto e costo di notare uno studente in difficoltà sono i problemi progettuali ricorrenti. La domanda che decide se l'IA ha aiutato non è se il sistema ha prodotto una risposta, ma che cosa hanno ancora fatto gli studenti quando l'ha prodotta.

## Cosa misura l'evidenza a questo livello

I trial tra gli undergraduate sono facili da contare e difficili da confrontare. L'esito è di solito un voto di corso, un test scritto dal docente o una rubrica applicata a un artefatto.

- **L'effetto aggregato è positivo e dipende dalla durata.** Trentacinque studi sperimentali e quasi-sperimentali che coprivano 175 dimensioni dell'effetto hanno prodotto g = 0,53 per gli undergraduate e g = 0,46 per il [[learning-gains|rendimento accademico]] ([[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]]). L'effetto accademico è calato da g = 5,07 per interventi di quattro settimane o meno a g = 0,01 oltre dodici settimane, contro un'eterogeneità superiore al 96%.

- **La [[educational-measurement|misurazione]] ritardata è l'eccezione.** Un test a sorpresa 45 giorni dopo un corso di economia da 120 studenti è una delle poche misure di ritenzione qui: gli studenti con supporto IA hanno riportato il 57,5% contro il 68,5%, d = 0,68, avendo studiato 3,2 ore contro 5,8 ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]]).

- **L'artefatto valutato è l'unità abituale di evidenza.** Questo conta per la [[assessment-validity|validità]]: un saggio valutato con rubrica o una suite di test superata possono migliorare mentre la capacità che il corso esiste per costruire no.

## Tutoraggio e aiuto in corsi con molti iscritti

Il risultato positivo più grande viene da un tutor costruito a partire dalla pedagogia del corso, non da un assistente generale.

- **Un tutor progettato ha battuto l'apprendimento attivo del corso.** Nel Physical Sciences 2 di Harvard, 194 studenti hanno incontrato le stesse due lezioni due volte, una volta in classe e una volta con un tutor su misura. Il post-test mediano è stato 4,5 contro 3,5, il tempo sul compito 49 minuti contro circa 60, e l'effetto modellizzato 0,63 ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025]]). Il tutor codificava sette pratiche istruzionali e usava soluzioni scritte dai docenti.

- **La stessa tecnologia senza integrazione didattica ha perso terreno.** Un assistente GPT-4o ancorato al corso ha raggiunto 2.379 studenti di 30 [[teacher-role|docenti]]. Nelle sezioni dello stesso corso, i voti finali sono calati di 4,12 punti (0,37 SD) e le partecipazioni registrate sono calate di circa 0,90 SD; il 15% degli studenti lo ha usato, per circa quattro sessioni ([[liu-course-integrated-ai-tutoring-rct-2026]]). Gli studenti di prima generazione hanno perso 0,50 SD contro 0,22 dei colleghi.

- **Un chatbot di recupero su misura può non produrre nulla.** In un corso di marketing da 454 studenti randomizzato nelle sezioni, nessun effetto gruppo-per-tempo è apparso su interesse, [[self-efficacy|autoefficacia]], coinvolgimento o punteggio al test. Gli studenti hanno effettuato l'accesso 0,89 volte a settimana e hanno valutato il gradimento 80/100 ([[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]]).

- **Il design dell'interazione sposta gli esiti più della scelta del modello.** HelpCoach è intervenuto solo sulle domande vaghe: il 57,3% delle prime bozze poneva una domanda specifica contro il 40,5%, e la ritenzione una settimana dopo era 1,9 contro 0,3 su 6 ([[helpcoach-ai-help-seeking-scaffolding-2026]]).

## Il divario tra punteggio e apprendimento

Quattro disegni separano il punteggio sul compito supportato da ciò che gli studenti sapevano fare senza aiuto, e concordano sulla direzione.

- **CS1: i punteggi degli esercizi sono saliti, la conoscenza concettuale no.** In un corso Java da 275 studenti, gli utenti di [[generative-ai|ChatGPT]] hanno riportato il 71,84% sull'esercizio contro il 29,85% degli studenti che usavano risorse web ordinarie, mentre i guadagni di conoscenza pre-post erano 0,71, 0,85 e 0,83 punti senza interazione tempo-per-gruppo ([[bassner-performance-learning-dissociation-ai-programming-2026]]).

- **Corso di dimostrazioni: i guadagni nei compiti non hanno raggiunto l'esame.** Alla Carnegie Mellon, 153 studenti dotati di un chatbot e un'interfaccia di feedback sulle dimostrazioni hanno riportato 2,56 punti in più nei compiti. L'esame successivo, sostenuto senza IA, non ha mostrato differenze significative, e ogni 100 messaggi aggiuntivi al chatbot erano associati a 3,02 punti in meno nell'esame successivo ([[ai-proof-learning-cognitive-offloading-2026]]).

- **Feedback: revisioni migliori, post-test piatto.** In un corso di economia da 354 studenti, il feedback mediato dall'IA ha migliorato la qualità della revisione a d = 0,50 su 1.366 saggi, e il post-test cieco è stato 0,59 contro 0,56 ([[lu-ai-mediated-feedback-feedbackwriter-rct-2026]]).

- **Lo schema d'uso ha deciso se il guadagno sopravvivesse alla rimozione.** Un chatbot commerciale ha alzato i punteggi senza aiuto di 6,7 punti (0,27 SD) tra 211 studenti di Middlebury, ed è persistito. Il 32% che lo usava per automatizzare il lavoro ha guadagnato 0,54 SD sui saggi mentre era disponibile e 0,02 SD una volta rimosso ([[contractor-learning-impact-generative-ai-2026]]).

Il meccanismo usualmente offerto è la [[cognitive-offloading|esternalizzazione cognitiva]]: lo strumento svolge il processo che il compito era progettato per suscitare. Ciò che segue è un ordinamento piuttosto che un divieto — un tentativo prima, aiuto poi, e un giudizio valutato senza lo strumento.

## Cosa gli studenti riportano di sé

I questionari a questo livello chiedono agli studenti che cosa hanno guadagnato, e le loro risposte stanno alla larga rispetto a ciò che dicono di aver fatto. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] hanno somministrato un questionario a 1.477 rispondenti a Sonora, in Messico, inclusi 765 studenti universitari. Il loro indice di coinvolgimento poggia su tre comportamenti dichiarati — leggere, modificare e aggiungere le proprie idee — e si è mosso appena con una singola autovalutazione 0–10 dell'apprendimento, a una correlazione aggregata di 0,052. Gli studenti universitari hanno usato ChatGPT più degli studenti delle superiori e hanno valutato il proprio apprendimento solo leggermente più in alto. Gli autori leggono il risultato come un avvertimento sulla [[assessment-validity|validità della valutazione]] piuttosto che un verdetto sull'apprendimento, poiché nessun esito è stato misurato.

Là dove anche i predittori sono autodichiarati, un modello descrive un quadro mentale più che un meccanismo. [[kumar-chatgpt-academic-assignments-2025|Kumar et al. (2025)]] hanno modellizzato i percorsi verso la performance dichiarata nei compiti per 304 studenti di due università del Karnataka. L'alfabetizzazione digitale ha raggiunto β = 0,393 e l'utilità percepita β = 0,259, mentre la consapevolezza etica non ha predetto la performance (β = −0,006, p = ,924). Performance, alfabetizzazione ed etica erano tutte autovalutate, quindi il percorso più forte dice che gli studenti che si valutano digitalmente alfabeti valutano anche il proprio lavoro più in alto. Il nulla dell'etica resta il risultato utile: gli autori lo leggono come l'etica che plasma la condotta piuttosto che i voti, e raccomandano di valutare direttamente la disclosure e la citazione.

Il confronto tra livelli fa apparire il lato undergraduate disuguale piuttosto che uniformemente basso. [[zaripova-genai-self-regulation-neuroai-competence-2026|Zaripova et al. (2026)]] hanno confrontato 381 studenti di un'ateneo tecnico in Uzbekistan su un sottocampione bilanciato di 302. Gli undergraduate mediavano 3,527 sulla scala etica contro 4,627 dei post-laurea, con d = 1,47 per etica e autonomia accademica. Il carico cognitivo percepito non differiva per livello (p = ,296). Le distribuzioni portano il punto di design: le deviazioni standard dei post-laurea su etica e autoregolazione erano circa un terzo dei valori undergraduate, mentre gli undergraduate raggiungevano il minimo della scala. Una coorte del primo anno contiene quindi studenti che valutano criticamente l'output accanto a studenti che dichiarano quasi nulla di questa disposizione.

Letti insieme, i questionari mostrano ciò che l'[[self-report-measures|autovalutazione]] può e non può stabilire. Stabiliscono distribuzione e concezione di sé — quanto una coorte è dispersa, come gli studenti si valutano — e non l'apprendimento. L'evidenza di performance sopra è ciò che separa i due, dal test di ritenzione del 57,5% contro 68,5% al guadagno di 0,54 SD che è svanito quando il chatbot è stato rimosso. Guadagni autodichiarati e predittori autodichiarati richiedono quindi la stessa cautela in direzioni opposte. Un guadagno misurato con autovalutazione può essere competenza o fiducia, e un predittore misurato allo stesso modo può seguire l'esito perché uno strumento ha prodotto entrambi. La prova è se un design cambia qualcosa che uno studente fa: una bozza revisionata, una fonte verificata, un uso dichiarato.

## Scrittura, feedback e integrità

La scrittura è dove l'uso dell'IA è più visibile e il contratto valutativo più debole, perché un lavoro fluido non porta traccia del processo alle spalle.

- **Il [[ai-feedback-quality|feedback dell'IA]] ha eguagliato i docenti sul saggio e ha perso sulla relazione.** Tra 312 scrittori del primo anno, la qualità del saggio revisionato è salita d = 0,60 con il feedback dell'IA e d = 0,59 con il feedback del docente, equivalenti entro un margine prestabilito. La [[motivation|motivazione]] intrinseca era 4,90 contro 5,16, un divario d = 0,31 mediato dalla relazione percepita ([[liu-ai-generated-teacher-feedback-writing-motivation-rct-2026]]).

- **I requisiti di processo hanno alzato l'adozione e lasciato la qualità intatta.** In un corso di computing del primo anno di circa 570 studenti, l'adozione volontaria si è mantenuta vicino a due terzi finché un flusso bozza-prima-dell'IA con una [[reflection|riflessione]] valutata e un modulo di disclosure non l'ha alzata al 93%. L'uso dell'IA non ha predetto la qualità del saggio una volta controllata la scrittura precedente ([[shakil-scaffolding-genai-ethical-essay-2026]]).

- **L'output dei rilevatori funziona come triage, non come giudizio.** Argus ha valutato sei edizioni di un corso CS2 della Purdue: punteggio H medio 1,1 nel 2020 contro 11,9 nel 2026, e il 45,7% di 584 studenti è stato segnalato dopo revisione manuale. Gli studenti segnalati mediavano il 61,9% negli esami sorvegliati contro il 73,5%, con una mediana di 1,5 minuti di revisione del personale per studente ([[argus-academic-integrity-genai-2026]]).

- **L'errore dei rilevatori squalifica l'adjudicazione.** Sette rilevatori applicati a 91 saggi TOEFL di scrittori non madrelingua inglese hanno mediato un tasso di falsi positivi del 61,22%, e il 97% è stato segnalato da almeno uno ([[ragab-ai-integrity-verification-model-2026]]). Ciò che segue è una valutazione supervisionata della competenza ai punti di progressione, che sposta l'onere sulla policy di [[academic-integrity|integrità accademica]] piuttosto che sul software.

## Il primo anno: transizione, consulenza e supporto

Gli studenti del primo anno arrivano con abitudini formate a scuola e poco standing per contestare una risposta plausibile. Gli strumenti rivolti a loro fanno per lo più lavoro amministrativo.

- **Le abitudini arrivano prima dello scetticismo.** Tra 1.598 studenti di 12–25 anni, l'uso dichiarato è salito da 1,24 a 1,77 su una scala 0-4 tra i 12 e i 17 anni mentre l'attendibilità giudicata non si è mossa. All'università l'uso si è appiattito e spostato verso la traduzione; la cautela forte sui compiti di ricerca ha raggiunto il 23,3% nel quarto anno contro il 10,1% nel primo ([[cuenca-rodriguez-genai-use-caution-trajectories-2026]]).

- **Il materiale verificato ha aiutato gli studenti che ne avevano bisogno.** In un corso del primo anno di economia, 170 studenti con accesso a podcast e guide di studio generati dall'IA e verificati dai tutor hanno riportato 2,34 punti in più su un esame da 50 punti. Tre quarti di quel guadagno si trovavano nel quintile inferiore, la quota sotto il 60% è calata di 24,7 punti, e la verifica è costata 1,8 minuti di tempo del personale per studente ([[verified-study-materials-learning-gains-2026]]).

- **L'outreach di consulenza sposta le scadenze, non i voti.** Un chatbot via SMS in due grandi [[online-teaching-and-learning|corsi online]] ha alzato la quota che otteneva A o B di 4 punti e la frequenza al tutorato di 2, su 2.483 studenti ([[chatbot-outreach-course-performance-2026]]). Su 8.708 studenti in otto semestri, un servizio simile ha spostato l'iscrizione di 34 punti e lasciato GPA e persistenza invariati ([[mata-sustaining-ai-enabled-student-support-2026]]).

- **I modelli di early warning appartengono alla consulenza, non alla disciplina.** Le tracce LMS delle prime otto settimane di 52 studenti di programmazione hanno predetto eventi di rischio successivi in esame con AUC 0,763; l'autore inquadra il punteggio come un invito al supporto ([[akcapinar-ai-cheating-risk-lms-prediction-2026]]).

## Connessioni

L'undergraduate si colloca tra due fasce studiate con metodi diversi. La [[secondary-education|secondaria]] presuppone frequenza obbligatoria, un adulto che media lo strumento e l'aula come unità di adozione. L'insegnamento universitario presuppone discenti che fissano i propri orari e tratta il corso come l'unità. La [[higher-ed|istruzione superiore]] è il quadro più ampio — [[governance]], [[educational-development|sviluppo del corpo docente]], acquisti e programmi professionali — e la maggior parte dell'evidenza sull'accuratezza della correzione e sulla [[educational-policy-ai|policy istituzionale]] si trova lì. La [[graduate-education|formazione post-laurea]] sposta l'unità di lavoro dal corso alla ricerca supervisionata, dove la domanda diventa il giudizio. [[education-levels|Livelli di istruzione]] espone l'intero insieme di fasce.

## Implicazioni per la pratica

**Per i docenti**

- **Insegna l'interazione, non lo strumento.** Una singola sessione di 45 minuti su ciò che il modello sbaglia ha alzato la quota di risposte sbagliate corrette in revisione dal 41,3% al 69,3% ([[structured-genai-training-physics-problem-solving-rct-2026]]).
- **Metti peso valutato sulla performance senza aiuto.** Ogni design che ha separato i due ha trovato l'artefatto supportato migliorare per primo; valuta un lavoro senza IA.
- **Richiedi un tentativo prima dell'aiuto.** L'interfaccia tentativo-prima nel corso di dimostrazioni della Carnegie Mellon non portava penalità all'esame; il chatbot aperto sì.

**Per i responsabili di corso e di programma**

- **Tratta un chatbot di corso come un intervento [[pedagogy|pedagogico]].** La stessa tecnologia non ha prodotto alcun effetto misurabile in un corso randomizzato e ha abbassato i voti in un altro.
- **Conta il lavoro di verifica.** Il materiale di studio verificato è costato 1,8 minuti di tempo del personale per studente e ha prodotto il suo guadagno più grande tra gli studenti più deboli.
- **Monitora gli effetti sui [[differential-effects-across-learner-groups|sottogruppi]] prima di scalare.** Il differenziale di prima generazione nel trial da 2.379 studenti è stato il danno più grande e invisibile in una media di corso.

**Per i ricercatori**

- **Riporta un esito senza aiuto e uno ritardato,** altrimenti un effetto di artefatto sarà letto come un effetto di apprendimento.
- **Pre-specifica un margine di equivalenza** quando sostieni che il feedback dell'IA è pari a quello del docente.

## Idee sbagliate comuni

- **"Un chatbot di corso è infrastruttura neutra."** Nel trial da 2.379 studenti, il 15% degli studenti ha usato lo strumento e i voti sono calati di 0,37 SD, con una partecipazione in calo di 0,90 SD.
- **"Un punteggio più alto negli esercizi significa più apprendimento."** Gli utenti di ChatGPT hanno riportato il 71,84% contro il 29,85% su un esercizio CS1 mentre i guadagni concettuali erano statisticamente identici tra i gruppi.
- **"I rilevatori possono chiudere un caso di integrità."** Sette rilevatori hanno mediato il 61,22% di falsi positivi su saggi di scrittori non madrelingua inglese, e il 97% è stato segnalato da almeno uno.
- **"L'uso quotidiano significa che la [[ai-literacy|alfabetizzazione sull'IA]] può essere data per scontata."** L'uso dichiarato è salito ogni anno della secondaria mentre l'attendibilità giudicata restava piatta; la cautela sui compiti di ricerca è apparsa solo nel quarto anno.
