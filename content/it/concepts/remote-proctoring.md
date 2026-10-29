---
title: Sorveglianza degli esami a distanza
created: "2026-10-14T22:00:00-04:00"
type: concept
foundations: [academic-integrity]
pedagogy: [online-teaching-and-learning]
assessment: [process-oriented-assessment, remote-proctoring, summative-assessment]
ethics: [equity-in-ai-education, privacy]
level: [higher ed]
confidence: high
translation_of: "concepts/remote-proctoring"
source_updated: "2026-10-03T01:40:50-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **La sorveglianza degli esami a distanza** — il monitoraggio degli esami quando gli studenti li sostengono lontano da una sede fisica supervisionata, che va da un sorvegliante umano che osserva via webcam o da una sala di controllo a sistemi di sorveglianza pienamente automatizzati basati sull'IA (AIPS) che usano il machine/deep learning per verificare l'identità e segnalare comportamenti sospetti. È il principale mezzo per preservare la validità della [[summative-assessment]] e l'[[academic-integrity|academic integrity]] nell'[[online-teaching-and-learning|apprendimento online e a distanza]], dove la vigilanza in persona è spesso impraticabile — ma solleva gravi preoccupazioni riguardo alla [[privacy]], alla sorveglianza accademica, all'equità, alla correttezza e all'erosione della [[trust]], costi che possono a loro volta danneggiare l'ambiente di apprendimento che la sorveglianza intende proteggere.

## Domande da considerare

- Prima di leggere: quando immaginate l'"integrità accademica negli esami online", qual è il vostro primo istinto su come preservarla — e quell'istinto riguarda l'individuare chi bara o il costruire fiducia? La pagina sostiene che i due riflettono filosofie molto diverse.
- La sorveglianza degli esami a distanza va da un essere umano che osserva via webcam a sistemi di IA che analizzano i movimenti degli occhi, la postura della testa e le espressioni facciali. Cosa osserva *effettivamente* un sistema di IA quando segnala un "comportamento sospetto", e quanto siete sicuri che guardare via dallo schermo equivalga a barare?
- La pagina avverte che il monitoraggio può essere controproducente: essere osservati aumenta l'[[anxiety-and-stress|ansia da esame]], e gli studenti stressati possono essere *più* propensi a barare. Riuscite a pensare a un momento in cui la pressione o la sorveglianza hanno inciso sul vostro rendimento? Quell'esperienza indebolisce il caso a favore della sorveglianza?
- La sorveglianza automatizzata cattura lo spazio abitativo, il volto e la voce degli studenti, spesso con poca scelta reale se non quella di acconsentire. Dov'è il confine tra una supervisione ragionevole dell'esame e una sorveglianza che presume gli studenti colpevoli fino a prova contraria — e chi dovrebbe tracciarlo?
- La ricerca mostra che la sorveglianza può segnalare comportamenti innocui come sospetti, producendo accuse infondate, e che l'accuratezza dei modelli varia tra dati demografici e ambienti. Se siete un [[administrator]], come soppesate l'integrità che recupera contro l'equità e la fiducia che può erodere?
- La pagina inquadra la sorveglianza come uno strumento, non una soluzione — esistono alternative come la valutazione orale e la [[process-oriented-assessment|valutazione basata sul processo]]. Prima di leggere: quale approccio difendereste per una valutazione ad alte poste in gioco in un contesto a distanza, e quali evidenze vi farebbero cambiare idea?

## Introduzione

La sorveglianza degli esami a distanza esiste su uno spettro. **La sorveglianza online** comporta tipicamente un sorvegliante umano che controlla uno studente attraverso una webcam o da una sala di controllo. **La sorveglianza automatizzata/basata sull'IA (AIPS)** sostituisce o potenzia l'essere umano con sistemi di [[machine-learning]] e deep learning (CNN, RNN, LSTM) che analizzano segnali visivi — movimenti degli occhi, postura della testa, espressioni facciali e linguaggio del corpo — per rilevare comportamenti sospetti in tempo reale. Piattaforme comuni includono ProctorU e Kryterion. Gli AIPS combinano tipicamente quattro funzioni: (1) autenticazione dell'identità (per es., verifica facciale tramite telecamera), (2) restrizioni alla navigazione, (3) autorizzazione/controllo remoto dell'esame e (4) generazione di report dalle sessioni registrate.

## Vantaggi e opportunità

- **Recupera validità e integrità nella valutazione online.** La sorveglianza degli esami a distanza risponde a un genuino problema di validità. Nella [[online-teaching-and-learning|valutazione online]], l'[[generative-ai|IA generativa]] rende i lavori non sorvegliati inaffidabili come misura dell'apprendimento: misure a libro chiuso, non assistite e sorvegliate sono il segnale più forte di ciò che gli studenti sanno effettivamente (si vedano la [[summative-assessment]] e le [[generative-ai-reduced-study-time-math|proctored retention evidence]]). Senza una qualche forma di supervisione, gli esami online possono gonfiare i voti catturando una prestazione assistita dall'IA anziché indipendente.
- **Scalabilità e costo.** La sorveglianza automatizzata riduce la necessità di sedi fisiche dedicate e di sorveglianti umani, rendendo il monitoraggio praticabile su larga scala — un vantaggio per i MOOC e per i grandi programmi online, dove la sorveglianza tradizionale è logisticamente e finanziariamente impraticabile.
- **Accessibilità e portata.** La sorveglianza consente agli studenti in sedi remote di sostenere gli esami da qualsiasi luogo, rimuovendo le barriere geografiche e di pianificazione al conseguimento delle certificazioni.
- **Capacità di rilevamento.** I sistemi avanzati di ML/DL possono rilevare l'imbroglio (movimenti degli occhi, postura della testa, espressioni facciali) in modo più affidabile dell'osservazione manuale, e possono monitorare in modo continuo anziché intermittente.

## Svantaggi, rischi e danni

- **Danni alla fiducia e alla relazione studente-docente.** Il costo più consequenziale della sorveglianza degli esami a distanza è spesso relazionale. La sorveglianza continua comunica che gli studenti sono presunti disonesti, il che può erodere la [[trust]], corrodere la relazione studente–docente e minare il senso di scopo condiviso che sostiene l'integrità accademica. Il monitoraggio come applicazione della norma può scacciare l'approccio fiduciario ed educativo all'integrità che costruisce l'uso responsabile.
- **Sorveglianza accademica.** La sorveglianza degli esami a distanza è una forma di sorveglianza accademica che estende il monitoraggio istituzionale nell'ambiente domestico privato dello studente. Oltre l'esame stesso, questi sistemi catturano continuamente lo spazio abitativo, il volto, la voce e il comportamento dello studente — un livello di scrutinio con pochi precedenti nell'istruzione [[higher-ed|higher education]]. I critici sostengono che questo normalizzi una cultura della sorveglianza in cui gli studenti sono presunti colpevoli fino a prova contraria, rimodellando la relazione tra istituzioni e chi apprende e sollevando interrogativi sulla proporzionalità: se i guadagni di integrità giustifichino sottorre ogni studente a un monitoraggio pervasivo per le mancanze di pochi.([[privacy]]), [[trust]]
- **Privacy e consenso.** Gli AIPS accedono continuamente a immagini facciali, pattern vocali, direzione dello sguardo e dinamiche della digitazione, spesso attraverso una sorveglianza audiovisiva persistente. La gestione dei dati deve conformarsi a quadri come il GDPR e il PDP Bill indiano, e richiede un consenso chiaro e una gestione sicura dei dati biometrici. Gli studenti spesso hanno poca scelta se non accettare il monitoraggio, se desiderano sostenere un esame, sollevando interrogativi sul fatto che il consenso sia genuinamente volontario.([[privacy]])
- **Falsi positivi, accuse infondate e ansia.** I sistemi possono segnalare comportamenti innocui (guardare via, aggiustare la postura) come sospetti, erodendo la fiducia degli studenti e producendo accuse di irregolarità infondate — specialmente laddove i sorveglianti o i candidati manchino di competenza.
- **Stress e ansia da esame.** Sostenere un esame sorvegliato è di per sé una fonte di stress e ansia significativi. La sorveglianza continua, il timore di essere segnalati a torto e la pressione di essere osservati possono aumentare l'ansia da esame e compromettere la prestazione — e, secondo le evidenze, gli studenti stressati possono essere *più* propensi a ricorrere a comportamenti disonesti, il che significa che il monitoraggio può essere controproducente. Essere monitorati è stressante e può di per sé indurre il comportamento non etico che mira a prevenire.
- **La giustificazione fondata sull'integrità non ha superato il test più grande.** Attraverso quattro ondate e 1.760 studenti in 105 corsi, la sorveglianza ha aumentato l'ansia da esame (β = 0,60, p < 0,001) ma non ha avuto alcun effetto sulla tentazione di barare, sulla difficoltà percepita o sui voti, quindi il costo della sorveglianza non è stato compensato dall'effetto deterrente ([[conijn-fear-big-brother-proctored-exams-2022|Conijn et al. (2022)]]).
- **Equità e divario digitale.** La dipendenza dai dispositivi, la connessione internet instabile, l'illuminazione e la variabilità dell'hardware svantaggiano in modo sproporzionato gli studenti delle aree rurali e a banda limitata; l'accuratezza dei modelli può variare tra dati demografici e ambienti, rischiando segnalazioni ingiuste.([[digital-divide]]), [[equity-in-ai-education]] Una revisione di scopo sulla sorveglianza nella valutazione dell'[[nursing-education|infermieristica]] mostra che questo non è un caso limite: quattro dei suoi sei studi inclusi hanno riportato problemi di connettività internet, uno ha riportato interruzioni di corrente insieme a pacchetti dati limitati, e incompatibilità dei dispositivi, malfunzionamenti delle estensioni del browser e scansioni ambientali fallite erano routine — quindi è la disuguaglianza infrastrutturale, non solo il bias dei modelli, a determinare chi possa essere valutato.([[harerimana-remote-proctoring-nursing-scoping-2026]])
- **Lacune di rilevamento e la corsa agli armamenti.** Lo spoofing dell'identità (mascheramento con foto/video), l'uso del browser e il copia-incolla restano difficili da intercettare in modo affidabile; l'accuratezza del rilevamento è limitata dalle lacune dei dataset, dalla valutazione su modello singolo e dalle mancanze di riproducibilità. La sorveglianza non risolve pienamente l'integrità e può creare un falso senso di sicurezza.
- **La questione della governance.** Se la sorveglianza sia la risposta giusta rispetto a una [[authentic-assessment|riprogettazione della valutazione]] (orale, basata sul processo, [[eportfolio|portfolio]]) è una decisione istituzionale aperta; la sorveglianza degli esami a distanza è uno strumento, non una soluzione completa.([[governance]]) L'esposizione che segue quando l'applicazione va male — accuse che poggiano su punteggi e log degli eventi, conservazione e trattamento ulteriore dei dati catturati, e regole che ricadono in modo diseguale sugli studenti con disabilità o non madrelingua — è mappata sui [[legal-issues-and-risks]].

## Base di evidenze

- Una revisione [[meta-analysis-systematic-review|systematic review]] decennale di 80 studi peer-reviewed (2014–2024) rileva che la sorveglianza avanzata basata su ML/DL individua l'imbroglio in modo più affidabile dei metodi tradizionali, ma è limitata dalle lacune dei dataset (il 35% non ha divulgato pienamente i dati), dalla valutazione su modello singolo (40%), dai problemi di riproducibilità (30%), dalla scarsa reportistica etica (solo il 25%) e da metriche incoerenti (20%). I falsi positivi/negativi — segnalare comportamenti normali come sospetti o mancare imbrogli sottili — minano l'affidabilità e la fiducia.([[automated-online-exam-proctoring-decade-review-2026]])
- Una revisione complementare documenta i metodi di imbroglio che l'IA deve contrastare (spoofing dell'identità tramite foto/video, uso di browser/dispositivi, copia-incolla) e le barriere pratiche: l'ansia dei candidati, le lacune di competenza che causano accuse infondate, e l'infrastruttura (webcam, microfono, internet) che non è universalmente accessibile o disponibile. Riporta che circa il 37,8% degli studenti universitari e circa il 41,8% degli studenti delle scuole superiori ammettono di barare — la motivazione del monitoraggio.([[academic-dishonesty-automated-proctoring-ai-2026]])
- **I docenti non vedono alcun beneficio dalla sorveglianza degli esami sostenuti fuori dalla classe.** [[biology-degree-integrity-genai-cheating-2026|Chan et al. (2026)]] hanno intervistato 56 docenti (tasso di risposta del 47%) in un dipartimento di [[biology-education|biologia]] dopo aver codificato tutti i 38 programmi dei suoi corsi obbligatori fondamentali, e hanno chiesto loro di valutare ogni categoria di voto che usano per la vulnerabilità alla disonestà accademica (0 = minimamente a 4 = altamente vulnerabile). Gli esami sorvegliati e non sorvegliati sostenuti fuori dalla classe sono stati valutati *identicamente* a una mediana di 3 (moderatamente vulnerabili), mentre gli esami sorvegliati in presenza sono stati l'unica categoria valutata minimamente vulnerabile (mediana 0) e significativamente meno vulnerabile di ogni altra categoria (p_adj < 0,01). Poiché i browser in modalità bloccata erano disponibili per gli esami fuori dalla classe, il risultato è una percezione che gli strumenti non abbiano ridotto l'esposizione — in linea con le evidenze della revisione sopra, secondo cui la sorveglianza online è efficace solo in modo diseguale, e con i costi documentati in termini di ansia, privacy e accuse infondate che rendono il compromesso contestato. Le poste in gioco sono visibili nella stessa ponderazione dei punteggi dello studio: gli esami fuori dalla classe pesavano in media il 54,2% del voto nei corsi in presenza che li usavano e il 59,2% nei corsi online, dove ogni offerta faceva affidamento su di essi.
- Una revisione di scopo sulla sorveglianza degli esami a distanza nella valutazione degli studenti di [[nursing-education|infermieristica]] [[assessment|student assessment]] mappa uno spettro di modalità anziché una pratica unica — vigilanza umana in diretta (ProctorU), sorveglianza tramite estensione del browser basata sull'IA con webcam, microfono e segnalazione dei comportamenti (Honorlock), monitoraggio con webcam più browser in modalità bloccata (Respondus Monitor), un'app di vigilanza mobile distribuita a livello istituzionale, e desktop fissi in centri d'esame sotto sorveglianza centrale — e sostiene che la diversità rifletta disparità nell'infrastruttura e nella capacità istituzionale piuttosto che uno standard condiviso. Solo sei studi hanno soddisfatto i suoi criteri di inclusione (1.567 studenti di infermieristica negli USA, nel Regno Unito, nell'Africa meridionale e in Egitto), e nessuno è stato pubblicato prima del 2021. Ciò che la revisione stabilisce è che la sorveglianza produce percezioni di deterrenza e un pesante carico di revisione per i docenti: il 98–100% di accordo sul fatto che il monitoraggio via webcam e i browser in modalità bloccata scoraggino l'imbroglio è [[self-report-measures|self-report]] da un unico programma graduate per infermieri specialisti, gli avvisi dell'IA ad alto rischio erano rari, non più del 5%, eppure i frequenti avvisi minori producevano falsi positivi che richiedevano una revisione dispendiosa in termini di tempo, e i docenti sudafricani hanno riportato disonestà continuate sotto monitoraggio attivo. L'unico studio comparativo sulla prestazione indica il contrario — una coorte sorvegliata in presenza ha ottenuto punteggi significativamente più alti all'HESI Exit Exam e nella prontezza per l'NCLEX rispetto alla coorte ProctorU — e la revisione tratta il legame tra sorveglianza e apprendimento più onesto come una questione aperta anziché un beneficio acquisito.([[harerimana-remote-proctoring-nursing-scoping-2026]])
- **Un esame sorvegliato in presenza ha comunque prodotto il 44,2% di studenti ad alto rischio.** In un corso di [[cs-education|Introduction to Programming]] presso un'università pubblica turca, 23 studenti del primo anno su 52 sono stati etichettati come ad alto rischio a partire dai log dell'esame che registravano eventi di copia, perdita di focus e clic destro, benché l'esame fosse sorvegliato e sostenuto in un laboratorio informatico; lo stesso studio predice tale rischio a partire dalle tracce dell'LMS dell'inizio del semestre anziché dal comportamento durante l'esame.([[akcapinar-ai-cheating-risk-lms-prediction-2026]])

## Direzioni raccomandate

- **Supervisione ibrida uomo–IA.** Abbinare la segnalazione automatizzata alla [[human-in-the-loop-ai|revisione umana]] per ridurre i falsi positivi e mantenere il giudizio contestuale.
- **Architettura che preserva la privacy.** L'elaborazione in edge computing, l'anonimizzazione e la gestione sul dispositivo riducono l'invasività della cattura continua di dati.
- **Distribuzione consapevole dell'equità.** Dataset diversificati e geograficamente inclusivi e modelli leggeri per ambienti a basse risorse; alternative accessibili per gli studenti senza dispositivi o connettività affidabili.
- **Educare prima di sorvegliare.** Preferire la promozione dell'[[ai-literacy]] e dell'[[reducing-ai-misuse|uso responsabile]] attraverso la cultura e la costruzione di fiducia, riservando la sorveglianza ai casi ad alte poste in gioco che la richiedono genuinamente.

## Concetti collegati
- [[anxiety-and-stress]]
- [[academic-integrity]]
- [[summative-assessment]]
- [[assessment]]
- [[automated-assessment]]
- [[online-teaching-and-learning]]
- [[ai-misuse-learning-harm]]
- [[privacy]]
- [[equity-in-ai-education]]
- [[digital-divide]]
- [[student-experience]]
- [[trust]]
- [[governance]]
- [[legal-issues-and-risks]]
- [[higher-ed]]

## Articoli collegati

- [[automated-online-exam-proctoring-decade-review-2026]] — Decade-long systematic review of automated online exam proctoring
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Comprehensive review of academic dishonesty in automated proctoring
- [[ssaho-ai-academic-integrity-review-2025]] — AI and academic integrity: systematic review
- [[conijn-fear-big-brother-proctored-exams-2022]] — The fear of Big Brother: proctoring's negative side-effects on test anxiety
- [[biology-degree-integrity-genai-cheating-2026]] — Can students cheat their way to a biology degree? A case study of the vulnerability of biology course grades to academic dishonesty in the era of generative AI
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Under surveillance: mapping remote proctoring practices in nursing student assessment
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — 44.2% of students labeled high-risk in a proctored, face-to-face exam, with the risk predicted from early-semester LMS traces
