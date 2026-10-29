---
title: "L'uso dell'AI aiuta davvero i miei studenti a imparare?"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [evaluating-ai-interventions-methods, how-ai-impacts-students, top-10-findings-ai-education-instructors]
weight: 90
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
translation_of: "faqs/does-ai-help-students-learn"
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Uno studente ti dice che è il tutor di IA il motivo per cui ha finalmente capito il materiale, e tu non hai modo di verificare quell'affermazione. Oppure ti arriva sulla scrivania un progetto pilota con un sondaggio di soddisfazione e lo screenshot di voti in risalita, e qualcuno vuole una decisione sulla licenza entro fine mese. Oppure sei davanti a una classe e ti chiedi se lo strumento che gli hai appena detto di aprire li stia aiutando a esercitarsi o li stia aiutando a evitare l'esercizio.

La risposta breve: sì, l'IA può aiutare gli studenti ad apprendere, e nessuna delle cose che più probabilmente vedrai dimostra che lo abbia fatto: consegne migliori, completamento più rapido, studenti contenti o un prodotto che si chiama tutor. Ciò che separa i casi in cui l'apprendimento migliora da quelli in cui non migliora è il design dell'attività e l'esito che hai scelto di misurare.

## La versione breve

**1.** Nomina prima la capacità, poi decidi quale evidenza mostrerebbe che è cambiata.

**2.** Misura la stessa capacità più tardi, togliendo lo strumento, perché è l'unica misura che risponde alla tua domanda.

**3.** Metti il tentativo dello studente prima dell'aiuto, e chiedi una risposta all'aiuto dopo.

**4.** Valuta la verifica: cosa hanno controllato, cosa hanno rifiutato, cosa hanno cambiato.

**5.** Guarda i risultati per conoscenza pregressa, perché la media nasconde gli studenti che il design sta fallendo.

## Decidi cosa intendi per apprendimento prima di guardare qualsiasi evidenza

«L'IA aiuta gli studenti ad apprendere» non è una domanda sola. Ne raggruppa almeno tre: lo strumento alza la prestazione mentre è aperto, costruisce una capacità che persiste quando è chiuso, e cambia chi finisce con quella capacità. Un rapporto di un fornitore, un sondaggio su un pilota e uno studio randomizzato possono essere tutti onesti e rispondere comunque a domande diverse.

Scrivi la capacità prima dell'attività. «Produrre un rapporto rifinito» è un esito diverso da «selezionare l'evidenza appropriata», «spiegare una relazione causale» o «individuare una conclusione non supportata». La valutazione deve rivelare la capacità che intendi sviluppare, che è l'argomento della [[educational-measurement|misurazione educativa]] e il punto di partenza della [[ai-ed-evaluation|valutazione dell'IA in educazione]].

Il corpus sostiene due affermazioni insieme, e tenerle entrambe è la disciplina che questa pagina chiede. Una sintesi della Banca Mondiale, [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps?]], ha aggregato 14 studi randomizzati in dieci economie e ha stimato un effetto medio positivo sull'apprendimento di 0,125 deviazioni standard per le tecnologie educative adattive e abilitate all'IA. Ha anche combinato [[adaptive-learning|sistemi adattivi]] precedenti con strumenti di [[generative-ai|IA generativa]], non ha trovato alcun vantaggio statisticamente stabilito per gli strumenti generativi più recenti e ha riconosciuto un'incertezza considerevole in quel confronto. Il risultato sostiene il potenziale di questi interventi, non l'affermazione che un qualsiasi [[conversational-ai|chatbot]] migliorerà l'apprendimento. Una media positiva, in altre parole, è compatibile con una grande variazione e con nessun vantaggio dimostrato per la cosa che stai effettivamente considerando.

Gli studi più utili sono quelli che fanno variare il design dentro un singolo esperimento. [[genai-feedback-design-multisite-experiment|Uno studio randomizzato multi-sito]] con 1.176 studenti al primo anno ha confrontato [[peer-assessment|feedback tra pari]], feedback diretto dell'IA, autovalutazione seguita da feedback dell'IA e una sequenza ibrida di autovalutazione, feedback tra pari e critica dell'IA. Le condizioni riflessiva e ibrida hanno prodotto un [[transfer-of-learning|transfert differito senza IA]] più forte del feedback diretto dell'IA: gli studenti sono andati meglio su un nuovo compito di argomentazione scientifica, non solo sul saggio che stavano rivedendo. Quelle condizioni richiedevano anche più lavoro valutativo e probabilmente più tempo, quindi lo studio sostiene il design completo del feedback e non una sua componente.

## Verifica se il guadagno sopravvive alla rimozione dello strumento

Questo è il controllo più informativo a tua disposizione, ed è facile lasciarlo fuori da un progetto pilota.

L'avvertimento più chiaro nel corpus è un esperimento randomizzato sul campo con quasi 1.000 studenti delle superiori, [[generative-ai-guardrails-harm-learning|l'IA generativa senza guardrail può danneggiare l'apprendimento]]. Un'interfaccia in stile general-purpose ha alzato i punteggi della pratica assistita del 48% rispetto al controllo, e gli stessi studenti hanno poi ottenuto punteggi inferiori del 17% negli esami non assistiti. Un tutor configurato con orientamenti e suggerimenti progettati dagli insegnanti ha in gran parte evitato quella penalità. Non ha prodotto un miglioramento statisticamente significativo nella prestazione all'esame non assistito rispetto al gruppo di controllo. Evitare il danno e dimostrare un apprendimento aggiuntivo sono risultati diversi.

Su scala nazionale la stessa divisione emerge con un ritardo. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] ha seguito 26.811 studenti delle scuole secondarie cinesi, dalle classi 7 alla 12, per 30 mesi usando un'adozione scaglionata. I punteggi dei compiti sono saliti del 18% e il tempo di completamento è calato del 30%, da 64 a 45 minuti. I punteggi degli esami mensili a libro chiuso sono calati del 20% entro sei mesi, e i punteggi degli esami di ammissione ad alto impatto sono calati del 18-24% rispetto al basale, ma solo dopo circa due anni. Le perdite si sono concentrate nel circa 81% di utenti il cui comportamento indicava esternalizzazione dei compiti, mentre gli studenti che hanno mantenuto un tempo sui compiti paragonabile a quello dei non utenti hanno appreso più o meno con la stessa efficienza. Ne seguono due cose per il tuo corso: la divergenza tra prestazione nei compiti e all'esame è il [[learning-gains|divario prestazione-apprendimento]] in una coorte nazionale, e il ritardo di due anni significa che una valutazione di un semestre sottostimerà sistematicamente il costo.

L'informatica mostra la stessa struttura. La [[kumar-genai-computing-education-systematic-review-2026|revisione sistematica di 72 studi]] ha trovato che l'IA generativa alzava in modo affidabile il completamento a breve termine e riduceva il tempo sul compito in 36 studi, senza un solo studio nel corpus che documentasse un effetto negativo sulla prestazione immediata, e quei guadagni «non si trasferiscono alla prestazione indipendente» in 21 studi. Gli studenti assistiti da Codex hanno completato il doppio dei compiti durante l'apprendimento e non sono andati meglio dei controlli nei post-test senza IA.

Poi c'è la questione se gli studenti usino o meno l'aiuto. Un esperimento scolastico randomizzato di due anni in 18 scuole medie, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]], ha trovato guadagni modesti in [[math-education|matematica]], e gli studenti raramente hanno avuto conversazioni di tutoraggio sostanziali. Gli autori hanno notato che i guadagni somigliavano a quelli riportati per la pratica strutturata senza IA, e il design univa pratica individualizzata e [[intelligent-tutoring|tutoraggio con IA]], quindi non isolava il contributo della componente IA. Avere un tutor capace disponibile è un fatto diverso dal fatto che gli studenti lo usino produttivamente.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] aggiunge una lezione più affilata da più di 6.000 studenti delle scuole medie che usavano NUMI. Il supporto dell'IA migliorava il recupero dopo gli errori e rallentava l'avanzamento tra le domande. Una regola di padronanza basata su tre risposte corrette di fila alzava il successo definito dalla piattaforma senza, da sola, migliorare l'apprendimento una settimana dopo. Il segnale più forte di apprendimento differito è comparso quando l'IA era incorporata nel flusso di lavoro della padronanza, e quei guadagni erano marginalmente significativi dal punto di vista statistico e concentrati su un materiale specifico già esercitato. È un'evidenza suggestiva per un approccio strutturato, non una ricetta dimostrata.

## Costruisci l'attività perché sia lo studente a fare il pensiero che conta

Il [[learning-design|design didattico]] conta più del modello che usi. Il design che sopravvive a questi risultati ha quattro passaggi: un tentativo, un aiuto mirato alla difficoltà, qualcosa che lo studente fa con l'aiuto, e una nuova applicazione con il supporto ritirato.

**1.** Chiedi un tentativo iniziale, una previsione, una bozza, una spiegazione o un'interpretazione.

**2.** Offri un'assistenza mirata: un suggerimento, una spiegazione, un esempio contrastivo o un feedback focalizzato sul punto in cui si sono bloccati.

**3.** Chiedi una risposta all'assistenza. La spiegano, la usano per rivedere, la verificano, oppure giustificano perché l'accettano o la rifiutano.

**4.** Verifica un problema comparabile o un contesto diverso con il supporto ritirato.

È un punto di partenza didattico e non una sequenza validata, e la quantità e il momento giusti del supporto dipendono dagli studenti e dal compito. Riflette ciò che enfatizzano le sintesi su [[scaffolding]] e [[active-learning|apprendimento attivo]]: un supporto che aiuta gli studenti a capire, esercitare, valutare e alla fine fare a meno di esso.

Applica il principio all'obiettivo, non meccanicamente a ogni funzione. «Fai da impalcatura, non sostituire» è una buona regola con una trappola dentro. Un esempio svolto completo può essere qualcosa da cui gli studenti imparano, e una sequenza di suggerimenti può comunque diventare qualcosa su cui si clicca senza pensare. Quello che conta è cosa fa lo studente con l'assistenza, ed è per questo che [[cognitive-offloading|scaricamento cognitivo]] e [[help-seeking|ricerca di aiuto]] stanno agli estremi opposti di ciò che lo stesso strumento può produrre.

Vale la pena tenere presente il controesempio, perché ti impedisce di trasformare lo sforzo in un proxy dell'apprendimento. Negli esperimenti preregistrati riportati in [[coach-not-crutch-ai-writing|Coach not crutch]], gli adulti che si erano esercitati a rivedere lettere di presentazione con l'IA hanno prodotto in seguito una scrittura senza IA migliore di chi si era esercitato da solo, e hanno impiegato meno sforzo. I benefici persistevano a un follow-up di un giorno, e un secondo esperimento ha trovato che vedere un esempio rivisto dall'IA produceva benefici paragonabili all'esercizio con lo strumento. Erano compiti di scrittura brevi e delimitati, non prova di un miglioramento duraturo in ogni tipo di scrittura. Mostrano però che meno sforzo non è automaticamente meno apprendimento, e che l'obiettivo è preservare l'attività di apprendimento, non massimizzare la difficoltà.

## Rendi visibile il pensiero trattenuto in ciò che valuti

Come gli studenti usano lo strumento conta più di se ce l'hanno. In [[yan-cognitive-outsourcing-genai-assessments-2026|uno studio qualitativo su 38 studenti universitari]] in valutazioni di saggi non supervisionate, il coinvolgimento andava dall'[[cognitive-offloading|esternalizzazione cognitiva]] alla riallocazione cognitiva, cioè lo spostamento dello sforzo dal recupero di basso livello alla [[critical-thinking|valutazione critica]]. La maggior parte degli studenti, 31 su 38, intendeva usare l'IA generativa come assistente all'apprendimento. In pratica il 76,32% si è affidato al dialogo a turno unico «chiedo, ottengo la risposta, smetto», e il 78,94% ha usato lo strumento prima o dopo la stesura invece che attraverso il compito. Solo 8 studenti hanno lavorato come partner cognitivi in un dialogo sostenuto e iterativo. Quello spettro, dall'esternalizzazione alla riallocazione, è ciò che descrive l'[[student-ai-interaction|interazione studente-IA]]. Un partecipante ha descritto l'effetto così: «la velocità con cui lo dimentichi è anche molto alta».

La lezione [[pedagogy|pedagogica]] è che permessi generalizzati e divieti generalizzati lasciano entrambi gli studenti a indovinare. Ciò che ha cambiato il comportamento, nel resoconto di quello studio, è stata una guida specifica per il compito su quale lavoro cognitivo gli studenti dovessero trattenere e quale assistenza fosse appropriata, la direzione di design sviluppata in [[reduce-ai-cheating|ridurre i voti con l'IA]] e [[reducing-ai-misuse|ridurre l'uso improprio dell'IA]].

Quindi rendi il pensiero trattenuto un artefatto che puoi valutare. In matematica, chiedi la soluzione tentata prima che venga richiesto l'aiuto, poi fai usare agli studenti un prompt come «individua il primo passaggio che dovrei rivedere, dammi un suggerimento utile e chiedimi di riprovare», e richiedi una nuova soluzione più una spiegazione invece di una riproduzione della risposta dell'IA. In scrittura, fai valutare agli studenti la loro bozza contro la rubrica prima di chiedere una critica, poi fai spiegare quali suggerimenti hanno accettato, modificato o rifiutato. Se l'obiettivo è la costruzione di un'argomentazione, la prosa dell'IA non può sostituire la prova che lo studente sa costruire un'argomentazione. Se l'obiettivo è valutare revisioni alternative, confrontare esempi completi è appropriato. Le pagine su [[writing-education|insegnamento della scrittura]] e [[feedback-literacy|alfabetizzazione al feedback]] contengono il dettaglio.

Il requisito di design della revisione è la stessa mossa a livello di corso: la verifica, cioè leggere, testare, modificare, spiegare e criticare l'output dell'IA, resa una componente valutata e osservabile invece di un'aspirazione lasciata alla discrezione dello studente. E non ogni esito legittimo deve essere dimostrato senza IA. Un corso può insegnare deliberatamente un lavoro efficace supportato dall'IA, e in quel caso valuti la capacità dello studente di selezionare, verificare, rivedere e difendere il proprio uso dello strumento insieme alle fondamenta indipendenti che la disciplina richiede. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] propone quella distinzione tripartita tra capacità indipendente, prestazione aumentata dall'IA e responsabilità di verifica. È un quadro concettuale, non uno strumento validato.

## Controlla chi lo strumento aiuta e chi lascia indietro in silenzio

Un miglioramento medio può nascondere studenti che non hanno guadagnato nulla o che hanno incontrato una nuova barriera. La sintesi sul [[digital-divide|divario digitale]] separa l'accesso a uno strumento dall'abilità necessaria a usarlo e da chi finisce con un risultato utile, e tutte e tre le cose contano per un corso.

La [[prior-knowledge|conoscenza pregressa]] modera tutto nella revisione sull'informatica: studenti ben preparati convertono l'assistenza in abilità duratura, mentre studenti meno preparati rischiano di usarla come stampella che rimuove la pratica di cui hanno bisogno. Lo studio sulla coorte nazionale mostra la stessa concentrazione a modo suo, con le perdite di apprendimento collocate nell'81% il cui comportamento sui compiti indicava esternalizzazione.

Per una valutazione in classe, scomponi i risultati per conoscenza pregressa, bisogni linguistici e requisiti di accessibilità invece di riportare una media del corso. Insegnare agli studenti come ottenere e valutare un feedback utile fa parte dell'[[ai-literacy|alfabetizzazione all'IA]], e non arriva con la licenza. Quando valuti l'apprendimento indipendente, rimuovi l'assistenza che fornisce il pensiero bersaglio e lascia gli accomodamenti che danno accesso al compito, che è la distinzione da cui dipendono sia [[accessibility|l'accessibilità]] sia [[equity-in-ai-education|l'equità nell'educazione all'IA]].

Ispeziona anche il feedback che gli studenti ricevono davvero. Una risposta fluente può diagnosticare male la difficoltà, rafforzare un errore o consegnare una risposta dove serviva un altro tipo di supporto. Usa materiali allineati al corso, mantieni una via verso l'aiuto umano e non raccogliere più informazioni sugli studenti di quante l'attività richieda. [[ai-feedback-quality|Qualità del feedback dell'IA]], [[pedagogical-safety|sicurezza pedagogica]] e [[privacy]] coprono i dettagli.

## Non fidarti della dashboard, compresa la tua

Le metriche di piattaforma sono l'evidenza più facile da portare in una decisione di acquisto, e la più facile da sovrainterpretare. In [[zhang-platform-scores-miss-ai-teaching-agents-2026|una valutazione di otto agenti didattici di IA]] nell'[[medical-education|educazione medica]], le classifiche basate sul punteggio della piattaforma divergevano da una rubrica di qualità didattica validata da esperti. L'agente terzo per la piattaforma era ultimo per qualità secondo la rubrica, perché il punteggio della piattaforma tracciava la prestazione degli studenti durante l'interazione e non il comportamento didattico dell'agente. Una metrica incorporata è un'ipotesi da validare.

Lo stesso scetticismo vale per l'evidenza che generi tu. Un sondaggio di soddisfazione misura la soddisfazione, e l'apprendimento percepito è un'[[self-report-measures|autodichiarazione]] che il corpus documenta come molto lontana dall'apprendimento misurato. I voti delle consegne misurano la consegna. Nessuno dei due ti dice cosa saprà fare uno studente tra tre settimane con lo strumento chiuso, e [[evaluating-ai-interventions-methods|valutare gli interventi di IA]] espone i disegni di confronto che ti avvicinano.

## Cosa sbagliano gli insegnanti su questo

**«Voti più alti nella consegna significano che hanno imparato di più.»** Le due cose possono muoversi in direzioni opposte. L'esperimento sui guardrail ha alzato la pratica assistita del 48% mentre gli esami non assistiti sono calati del 17%, e la coorte nazionale ha visto i punteggi dei compiti salire del 18% mentre quelli degli esami a libro chiuso calavano del 20% entro sei mesi. Nessuno dei due pattern emergerebbe in un registro che riporta solo la consegna finale.

**«È un tutor, quindi è sicuro.»** Tutor è un'etichetta, e i risultati dietro l'etichetta sono misti. Il tutor configurato dall'insegnante ha evitato la penalità all'esame e non ha battuto il controllo negli esami non assistiti. Khanmigo ha prodotto guadagni modesti che somigliavano alla pratica strutturata, con poco tutoraggio sostanziale in atto. L'IA di NUMI rallentava l'avanzamento tra le domande. Un tutor può trattenere le soluzioni e assorbire comunque la pratica.

**«Se sembra più facile, non gli sta insegnando nulla.»** Sbagliato in entrambe le direzioni, ed è per questo che lo sforzo è un cattivo proxy. Coach not crutch ha trovato meno sforzo con una scrittura senza IA migliore il giorno dopo, quindi la facilità non è l'indizio. Ciò che separa i casi è se lo studente ha fatto il pensiero che l'obiettivo nomina, e quella è una questione di design, non un'impostazione di difficoltà.

**«Una regola generale, o un prompt migliore, sistema come lo usano.»** Lo studio su 38 studenti ha trovato la maggior parte degli studenti in modalità «chiedo e smetto» a turno unico esattamente nelle condizioni in cui era stato detto loro che l'IA era un assistente all'apprendimento. Ciò che ha spostato il comportamento è stata una guida specifica per il compito e un requisito valutato di verifica. Una riga di policy e un prompt ingegnoso sono entrambi input a questo, e nessuno dei due lo sostituisce.

**«Il punteggio della piattaforma, o il sondaggio di soddisfazione, mi dice che funziona.»** La valutazione sugli otto agenti ha trovato una classifica di piattaforma che si invertiva sotto una rubrica esperta. Soddisfazione e apprendimento percepito sono autodichiarazioni. Vale la pena raccoglierle entrambe come informazione di processo, e nessuna delle due è una misura di apprendimento.

**«L'accesso è il problema di equità, e l'accesso l'abbiamo risolto.»** L'accesso è una di tre linee, insieme all'abilità e a chi ottiene un risultato utile. La conoscenza pregressa decide se l'aiuto diventa abilità o stampella, e le perdite nella coorte nazionale si sono concentrate nel gruppo il cui comportamento suggeriva sostituzione, non nel gruppo senza dispositivi.

## Cosa ti tornerà addosso

**«I miei studenti dicono che li aiuta.»** Probabilmente li aiuta davvero con il lavoro che hanno davanti, e quello è il risultato, non una sua confutazione. Chiedi cosa sanno fare su un compito simile con lo strumento chiuso, e ottieni la risposta che conta.

**«Gli studi si contraddicono, quindi perché agire su qualcuno di essi?»** Raramente si contraddicono una volta che allinei l'esito che ciascuno ha misurato. I risultati positivi tendono a misurare la prestazione assistita, la soddisfazione o un'attività ben strutturata con controlli differiti; quelli negativi misurano la prestazione non assistita più tardi. La sintesi di Burneo rende l'incertezza esplicita: 0,125 deviazioni standard in media su 14 studi, nessun vantaggio stabilito per gli strumenti generativi più recenti. Un miglioramento prima-dopo non può mostrare che l'IA ha causato il guadagno, dato che gli studenti migliorano per il resto dell'[[teacher-role|insegnamento]], e [[research-methods-aied|i metodi di ricerca sull'efficacia]] espongono i disegni di confronto che ti avvicinano. Agisci sulle affermazioni di design, che si replicano, e resta aperto sulla dimensione dell'effetto, che non si replica.

**«Ho 200 studenti. Non posso fare valutazioni differite.»** Ti serve un compito basale breve e un item differito, non uno studio. Usa lo stesso tipo di compito tre settimane dopo senza lo strumento, tieni la versione dell'anno precedente dell'esame come confronto approssimativo e campiona il lavoro che sembra incoerente con le consegne precedenti. Basta per vedere un guadagno assistito del 48% accanto a una perdita non assistita del 17%, se sta succedendo nel tuo corso.

**«Khanmigo ha ottenuto un risultato positivo, quindi il tutoraggio funziona.»** Ha ottenuto guadagni modesti in matematica in 18 scuole medie, in un design che univa pratica individualizzata e tutoraggio con IA, mentre gli studenti raramente hanno avuto conversazioni di tutoraggio sostanziali. Leggilo come prova che un ambiente di pratica ben strutturato può produrre piccoli guadagni, non come prova che li abbia causati la componente IA.

**«Non posso vietarlo e non posso controllarlo.»** Corretto su entrambi i fronti, e nessuno dei due è necessario. La domanda di design è cosa rende facile la tua attività. Se la verifica è valutata, la dichiarazione non costa nulla e il controllo non assistito esiste, la maggior parte degli studenti prende la strada che hai costruito.

**«Io non insegno IA. Non è la mia materia.»** L'interferenza avviene dentro la tua materia, nel passaggio in cui l'IA svolge la pratica che il tuo corso esiste per fornire. È per questo che la soluzione è un cambio di consegna e non un'unità nuova.

## Cosa fare questa settimana

**1.** Prendi un'attività che già fai e scrivi la frase sulla capacità: cosa dovrebbe saper fare uno studente dopo, con lo strumento chiuso.

**2.** Aggiungi un basale di due minuti all'inizio e lo stesso tipo di item tre settimane dopo. Valuta entrambi senza IA in aula.

**3.** Cambia un prompt che dai agli studenti da «spiega questo» a «dammi un suggerimento, poi fammi una domanda», e richiedi un tentativo rivisto prima che vadano avanti.

**4.** Aggiungi un artefatto di verifica valutato: una nota breve su cosa hanno controllato, cosa hanno rifiutato e cosa hanno cambiato.

**5.** Scomponi il risultato per conoscenza pregressa per gli studenti che già sai in difficoltà, e leggi il feedback dell'IA che un campione di loro ha ricevuto.

## Dove andare adesso

[[evaluating-ai-interventions-methods|Valutare gli interventi di IA]] copre le misure e i disegni di confronto dietro i controlli qui sopra, e [[ai-ed-evaluation|la valutazione dell'IA in educazione]] è la guida pratica alla valutazione. [[how-ai-impacts-students|Come l'IA influisce sugli studenti]] prende il versante dell'esperienza studentesca, [[top-10-findings-ai-education-instructors|i dieci risultati principali per gli insegnanti]] comprime la stessa evidenza in decisioni didattiche, e [[limitations-in-aied-research|i limiti della ricerca sull'AIEd]] sono il resoconto onesto di ciò che questa letteratura non può ancora dirti. Se la tua domanda è diventata una domanda di valutazione, [[reduce-ai-cheating|ridurre i voti con l'IA]] è la pagina successiva.
