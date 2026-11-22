---
title: Istruzione secondaria
created: "2026-11-22T11:00:00-05:00"
updated: "2026-11-22T11:00:00-05:00"
type: concept
pedagogy: [help-seeking, student-engagement, self-regulated-learning, metacognition]
technology: [generative-ai, intelligent-tutoring, llm]
level: [secondary, middle school, k 12]
confidence: medium
translation_of: concepts/secondary-education
source_updated: "2026-11-15T06:35:09-05:00"
translation_note: "Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua."
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-22"
    agent: hermes-agent
connected_concepts: [k-12, primary-education, undergraduate-education, intelligent-tutoring, academic-integrity, ai-detection, automated-assessment, assessment-validity, ai-literacy, help-seeking]
connected_articles: [one-click-away-khanmigo-two-year-school-experiment-2026, ai-tutoring-micro-rct-gcse-science-2026, leite-its-k12-meta-analysis-2025, ai-supported-instruction-stem-meta-analysis-2026, genai-learning-motivation-meta-analysis-2026, kreijkes-llm-note-taking-reading-comprehension-2026, jansen-argumentative-writing-feedback-receptivity-2026, chang-shared-epistemic-agency-gai-scientific-writing-2026, clerc-ai-literacy-workshop-llm-regulation-2026, cuenca-rodriguez-genai-use-caution-trajectories-2026, schaller-ai-text-detection-authentic-writing-2026, chan-rethinking-aigiarism-secondary-integrity-2026, ai-marking-accuracy-gcse-physics-2026, porcaro-ai-grading-benchmark-2026, wu-genai-scientific-literacy-china-2026, student-motivation-need-satisfaction-genai-sdt-2026, perez-montesdeoca-genai-secondary-systematic-review-2026, wu-genai-secondary-innovation-digital-literacy-2026, zhang-ai-learning-tools-tpb-high-school-2026, schicchi-high-school-genai-attitudes-scale-2026, torres-peralta-perceived-learning-engagement-homework-2026, cho-chatgpt-high-school-gpa-2025]
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Sintesi:** l'istruzione secondaria è la fascia in cui l'uso della [[generative-ai|IA generativa]] è ordinario e i [[learning-gains|guadagni di apprendimento]] misurati sono più piccoli delle affermazioni fatte per essa. Una sperimentazione di due anni in scuole medie ordinarie ha prodotto circa 0,06–0,08 SD all'anno, e la [[meta-analysis-systematic-review|meta-analisi]] del [[intelligent-tutoring|tutoraggio intelligente]] nella K-12 circa g = 0,27, perché lo [[student-engagement|coinvolgimento]] e la [[help-seeking|ricerca di aiuto]] limitano l'effetto piuttosto che la capacità del modello. Gli studenti preferiscono lo strumento che svolge una parte maggiore del lavoro cognitivo, e gli [[ai-detection|rilevatori]] separano i saggi interi ma non le frasi. L'evidenza va dalla ripetizione per gli esami attraverso la [[writing-education|scrittura]] e l'autorialità fino alla correzione, al rilevamento e agli anni della scuola media, dove l'uso corre più veloce dello scetticismo.

## Domande da considerare

- Un tutor è a un clic di distanza, eppure lo studente mediano gli ha chiesto aiuto nel 17% delle sessioni contenenti un errore. Cosa rende chiedere più economico che saltare nella tua classe?
- Gli studenti hanno preferito il [[conversational-ai|chatbot]] alla presa di appunti e hanno appreso meno da esso. Come coglieresti quella trappola prima che lo faccia la prova?
- I rilevatori raggiungono F1 0,96 sui saggi interi, 0,88 sulle frasi e perdono un terzo del richiamo dopo una riscrittura. Quale policy di integrità sopravvive a questo?
- Quasi ogni sperimentazione secondaria dura da quattro a dodici settimane su un test di unità. Cosa giustificherebbe un'adozione dipartimentale di un anno?
- L'uso dichiarato sale da 12 a 17 mentre la [[trust|fiducia]] nell'output resta piatta. Dove, tra la sesta e la nona classe, insegneresti la verifica?

## Introduzione

L'istruzione secondaria copre grossomodo dagli 11 ai 18 anni — scuola media o scuola superiore inferiore, poi il liceo — e tre caratteristiche del contesto plasmano ciò che l'IA può fare in questa fascia. La frequenza è obbligatoria, gli insegnanti sono specialisti per disciplina che possono vedere 150 studenti a settimana, e le [[assessment|valutazioni]] consequenziali sono esterne: GCSE, [[summative-assessment|esami nazionali]] e PISA a 15 anni.

Gli stessi studenti adottano più in fretta. In Svizzera, l'84% dei 14–19enni dichiara un uso regolare dell'IA generativa, una quota più alta di qualsiasi fascia di età adulta. Uso quasi universale, esami esterni e un adulto responsabile di più classi spiegano perché la letteratura si concentri su ripasso, correzione, compiti e integrità piuttosto che sulla riprogettazione del [[curriculum-design|curricolo]].

## Cosa misura la ricerca

- **I guadagni del tutoraggio intelligente sono modesti e si riducono con la distanza.** Diciotto esperimenti statunitensi su 11 sistemi si sono aggregati a g = 0,271, quasi identici nella primaria (0,266) e nella scuola media (0,256). Gli effetti sono calati a 0,146 dove erano incluse scuole rurali e a un valore non significativo di 0,110 oltre sei mesi; gli esiti a fine anno (0,155) erano un terzo dei post-test immediati (0,460) ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

- **Le rassegne STEM riportano effetti maggiori con un controllo di qualità più debole.** Trentacinque studi sperimentali e quasi-sperimentali si sono aggregati a g = 0,670, con il liceo a 1,099 e la scuola media a 0,392. Gli autori non hanno applicato alcuno strumento formale di valutazione, e l'eterogeneità a effetti fissi ha raggiunto I² = 82,98% ([[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al., 2026]]).

- **I guadagni di [[motivation|motivazione]] in questa fascia sono più piccoli che all'università.** In 42 studi controllati (56 dimensioni dell'effetto, 6.059 studenti) l'effetto motivazionale aggregato era g = 0,764, ma gli studi secondari mediavano 0,360 contro 0,886 nell'[[higher-ed|istruzione superiore]], con I² = 93,7% ([[genai-learning-motivation-meta-analysis-2026|Fang et al., 2026]]).

- **Una sperimentazione tipica è breve e usa un test costruito localmente.** Una valutazione di scienze GCSE ha randomizzato 929 studenti in tre discipline, ne ha trattenuti 644 al post-test e ha riportato g = 0,33 su un test allineato al curricolo di 35 punti che i suoi autori definiscono provvisorio ([[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al., 2026]]).

## Tutoraggio, ripasso e il problema del coinvolgimento

- **L'accesso non è l'uso.** In 18 scuole medie del Tennessee, Khanmigo ha aumentato il rendimento in matematica di 0,06–0,08 SD all'anno a circa \$15 per studente, vicino al guadagno dello stesso esercizio Khan Academy senza IA. Il 96% degli studenti l'ha provato, ma lo studente mediano gli ha scritto nel 17% delle sessioni contenenti un errore ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos e Low, 2026]]).

- **Una persona nella stanza cambia l'esperienza della difficoltà.** Tra 149 studenti degli anni terminali che lavoravano al di sopra del livello del curricolo, lo stress era riportato dal 32,0% di chi cercava sul web aperto, dal 19,2% di chi usava il tutor GenAI e dal 5,8% di chi aveva un tutor umano. Nessun esito di apprendimento è stato misurato ([[ennion-human-tutoring-genai-tutoring-search-2026|Ennion e McLellan, 2026]]).

- **Un supporto sensibile all'affetto può aumentare l'[[anxiety-and-stress|ansia]] che mira a ridurre.** In due classi di [[chemistry-education|chimica]] di nono grado che svolgevano la stessa sequenza laboratoriale di 16 settimane, l'ansia è cresciuta con il [[feedback]] emotivo dell'IA (F = 4,60, p = 0,035) ed è restata piatta con il solo insegnante. Gli studenti non riuscivano a dire se governasse il consiglio calmante del sistema o la procedura dell'insegnante ([[liu-chemistry-lab-emotional-feedback-2026|Liu, Li e Zhang, 2026]]).

## Scrittura, lettura e autorialità

- **Gli studenti preferiscono l'attività che fa il lavoro per loro.** In sette scuole inglesi, 405 studenti di Year 10 hanno letto due passaggi di storia e sono stati testati tre giorni dopo, a libro chiuso. La presa di appunti ha battuto l'uso del chatbot di circa 0,5 SD sulla ritenzione e 0,4 sulla comprensione, eppure gli studenti hanno valutato il chatbot più facile e piacevole ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).

- **Il feedback cambia la scrittura solo per gli studenti disposti ad agire.** Ciascuno di 1.507 studenti secondari ha ricevuto un messaggio standardizzato e dieci minuti per revisionare; l'impegno comportamentale e gli atteggiamenti strumentali hanno spostato la performance dal 46° al 54° percentile, mentre la [[technology-acceptance-model|utilità percepita]] non mediava nulla ([[jansen-argumentative-writing-feedback-receptivity-2026|Jansen et al., 2026]]).

- **Un assistente vincolato può lasciare che siano gli studenti a fare il pensiero.** In un'unità bilingue sulla fotosintesi, 122 studenti di settimo grado hanno prodotto 6.788 turni con un assistente invitato a trattenere le risposte; il 59% ha raggiunto un'agenzia epistemica condivisa, e l'assistente non ha dato una risposta diretta in nessuno dei 1.049 turni verificati. Circa il 20% delle interazioni riguardava copiare testo o pescare una risposta ([[chang-shared-epistemic-agency-gai-scientific-writing-2026|Chang et al., 2026]]).

## Valutazione, integrità e pressione degli esami

- **La concordanza di correzione può essere alta e comunque essere distorta.** Un correttore [[llm]] commerciale ha replicato i voti AQA GCSE di [[physics-education|fisica]] con κ quadratico ponderato = 0,885 su 71 item controversi, ma ha sovra-corretto di 0,30 punti in media e di 6 punti su un quesito ([[ai-marking-accuracy-gcse-physics-2026|Bozdag e Qiu, 2026]]).

- **Un kappa non mostra se un correttore si può manipolare.** Tra 22 modelli invitati, 14 hanno alzato un voto di più del 5% della scala quando la risposta portava una nota, uno dell'83,2%, e descrivere lo studente come forte ha alzato il voto in 28 delle 66 coppie modello-compito ([[porcaro-ai-grading-benchmark-2026|Porcaro, 2026]]).

- **Il rilevamento localizza i saggi, non le frasi.** Con registri di tastiera e appunti di 2.429 quindicenni tedeschi, i classificatori hanno separato testo IA e umano a macro-F1 0,96, ma l'F1 a livello di frase è sceso a 0,88 e il richiamo dell'IA è calato da 0,92 a 0,60 dopo una riscrittura in stile studente ([[schaller-ai-text-detection-authentic-writing-2026|Schaller et al., 2026]]).

- **Gli studenti ragionano sull'integrità in modo condizionale.** Tra 133 studenti di Hong Kong di 14–16 anni, l'accettabilità dipendeva dallo scopo dell'uso (62,4%), dall'impatto sull'apprendimento (54,1%) e dall'intento (51,9%), non dall'uso dell'IA in sé ([[chan-rethinking-aigiarism-secondary-integrity-2026|Chan, 2026]]).

## Il divario tra adozione ed evidenza e la riprogettazione della valutazione

L'uso a questo livello è quasi universale; l'evidenza è per lo più una descrizione di esso. [[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca et al. (2026)]] hanno sintetizzato 33 studi: 26 descrivevano come veniva usata la tecnologia contro 7 che esaminavano il cambiamento degli studenti, e solo 21 raccolgevano dati originali dalla classe. Quasi tutti erano avviati dai docenti e svolti isolatamente, che è il pattern che nasconde la cifra dell'84% di adozione — singoli insegnanti che sperimentano, non dipartimenti che riprogettano.

Ciò che la rassegna stabilisce è condizionale. Il feedback era l'applicazione più forte, con un feedback di vocabolario su misura che quasi raddoppiava i punteggi in uno studio incluso, mentre la delega completa restringeva l'apprendimento e confrontare o rifiutare l'output lo approfondiva. L'accuratezza seguiva la difficoltà del compito piuttosto che la materia: BingChat e Bard raggiungevano il 92,11% su quesiti di biologia di base, ogni strumento scendeva sotto il 20% sugli item di ordine superiore, e la correzione automatizzata raggiungeva il 50,8% di concordanza con i valutatori umani. Il lavoro sui questionari punta sulla profondità piuttosto che sulla dose, poiché [[wu-genai-secondary-innovation-digital-literacy-2026|Wu e Zhang (2025)]] hanno trovato la profondità d'uso associata alla capacità di innovazione autovalutata mentre la frequenza no, in un disegno trasversale in cui i percorsi ripetono le correlazioni.

L'adozione segue l'intenzione; l'ansia agisce dopo. [[zhang-ai-learning-tools-tpb-high-school-2026|Zhang e An (2026)]] hanno trovato l'[[anxiety-and-stress|ansia verso l'IA]] non correlata all'intenzione (β = 0,056, p = 0,123) ma negativa per tutti e tre i comportamenti, più fortemente per l'applicazione dell'output (β = −0,247), in un modello in cui l'utilità guidava e le aspettative degli adulti superavano la capacità. La misurazione è anche di livello pilota: [[schicchi-high-school-genai-attitudes-scale-2026|Schicchi e Taibi (2026)]] hanno trattenuto tre fattori di una scala di atteggiamenti di 19 item su 93 studenti, senza modello confermativo.

Per questo la domanda della valutazione diventa ciò che un prodotto completato certifica ancora. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] hanno trovato l'apprendimento percepito quasi non correlato a un indice di coinvolgimento di lettura, modifica e aggiunta all'output (correlazione aggregata 0,052), e [[cho-chatgpt-high-school-gpa-2025|Cho (2025)]] ha passato in rassegna associazioni di GPA di 0,31 nella scrittura e 0,18 in matematica che sono per lo più confronti tra utenti e non utenti. Raccogli il prompt, la risposta bozza e le revisioni, e valuta il processo piuttosto che la pagina.

## Scuola secondaria di primo grado e prima adolescenza

- **L'uso si consolida prima dello scetticismo.** Tra 1.598 studenti di 12–25 anni, l'uso medio è salito da 1,24 a 1,77 su una scala 0–4 tra i 12 e i 17 anni, e il numero di attività usate intensamente è salito da 1,76 a 3,48, mentre l'attendibilità percepita non è cambiata ([[cuenca-rodriguez-genai-use-caution-trajectories-2026|Cuenca-Rodríguez et al., 2026]]).

- **Un workshop di due ore cambia comportamenti che i questionari non colgono.** Tra 116 studenti francesi di terza e quarta media, chi vi ha partecipato accettava meno prompt sottospecificati (51,5% contro 66,7%) e faceva una domanda di approfondimento dopo una risposta debole il 59,2% delle volte contro il 27,9%; i loro autodichiarazioni di alfabetizzazione sull'IA non predicevano né l'uno né l'altro ([[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc et al., 2026]]).

- **Lo scopo dell'uso vale più della frequenza.** Tra 12.191 quindicenni di quattro regioni cinesi, spostarsi verso un uso orientato all'apprendimento valeva 5,8 punti PISA a frequenza fissa, mentre spostarsi verso riassumere e redigere costava 6,6 ([[wu-genai-scientific-literacy-china-2026|Wu et al., 2026]]).

- **I guadagni di motivazione nella prima adolescenza hanno un costo relazionale.** In 2.464 studenti tedeschi di settima e ottava, ChatGPT dentro l'apprendimento basato sulle competenze era associato a più soddisfazione di autonomia e competenza ma a una relazione più debole ([[student-motivation-need-satisfaction-genai-sdt-2026|Schweder et al., 2026]]).

## Connessioni

La secondaria si colloca tra la [[primary-education|primaria]] e l'[[undergraduate-education|istruzione universitaria di primo ciclo]], e condivide le preoccupazioni della [[k-12]] sulla [[teacher-role|capacità docente]] e sull'[[equity-in-ai-education|equità]]. Ciò che la distingue è la combinazione di esami esterni e insegnamento specialistico per disciplina, che spinge l'IA verso il ripasso, la correzione e il supporto ai compiti. Questo rende la [[assessment-validity|validità]] e la [[automated-assessment|correzione automatizzata]] più centrali qui che negli anni della primaria, dove domina l'adeguatezza [[developmental-psychology|evolutiva]]. L'altro filo distintivo è l'[[self-regulated-learning|apprendimento autoregolato]]: gli adolescenti ricevono lo strumento prima di ricevere il giudizio per usarlo, quindi la [[metacognition|metacognizione]] e l'[[cognitive-offloading|esternalizzazione]] decidono se un guadagno compare.

## Implicazioni per la pratica

**Per gli insegnanti**

- Metti il tutor dove avviene l'errore. La cifra del 17% è un problema di design, non un deficit dello studente: richiedi una domanda o una spiegazione prima del problema successivo, e verifica lo scambio piuttosto che l'accesso.
- Sequenza gli strumenti di scrittura invece di presentarli insieme: interroga, chiudi il chatbot, poi scrivi. Un quarto degli studenti copiava quando entrambi erano aperti insieme.
- Decidi prima della lezione il consiglio di chi governa quando un sistema sensibile all'affetto contrasta con la tua procedura, e dillo agli studenti.

**Per i dirigenti scolastici**

- Fai bilancio sull'uso realizzato. Una licenza di \$15 non è un programma; l'effetto dipende da orario, [[prompt-engineering|prompting]] del docente e monitoraggio dei progressi.
- Fissa le aspettative a 0,06–0,08 SD all'anno per il tutoraggio in classi ordinarie e circa 0,27 per il tutoraggio intelligente. Non promettere la chiusura del divario da nessuno dei due.
- Tieni l'output dei rilevatori fuori dai provvedimenti per misconduca. Richiedi bozze, cronologia delle versioni o [[oral-assessment|difesa orale]], perché i punteggi su testo intero si muovono con una riscrittura.

**Per i ricercatori**

- Riporta il rilevamento a livello di frase oltre che di testo, e riporta i risultati delle sonde accanto alle statistiche di concordanza.
- Misura per che cosa gli studenti hanno usato lo strumento, non solo quanto spesso. Lo scopo ha separato un divario PISA di 12 punti a frequenza uguale.
- Verifica la durata oltre quattro settimane, con esiti di fine anno o esterni. I post-test immediati sovrastimano gli effetti del tutoraggio di circa tre volte.

## Idee sbagliate comuni

- **"Un tutor IA insegna ogni volta che gli studenti hanno accesso."** Il 96% degli studenti ha provato Khanmigo; lo studente mediano gli ha chiesto aiuto nel 17% delle sessioni in cui era presente un errore. Disponibilità e dose sono variabili diverse.

- **"Un'alta concordanza con gli esaminatori significa che un correttore è affidabile."** Quattordici dei 22 modelli potevano essere spostati di più del 5% della scala con una nota nella risposta, e un'etichetta sullo studente ha alzato i voti in 28 delle 66 coppie modello-compito.

- **"Il rilevamento può dirti quali frasi ha scritto l'IA."** L'F1 a livello di frase è sceso a 0,88, il richiamo è calato a 0,60 dopo una riscrittura in stile studente, e un testo scritto dopo l'uso del chatbot senza materiale copiato è stato letto come umano nel 94,6% dei casi.

- **"La [[ai-literacy|alfabetizzazione critica sull'IA]] può aspettare fino all'università."** L'uso sale ogni anno dai 12 ai 17 mentre l'attendibilità percepita resta piatta, e un workshop di due ore in terza e quarta media ha cambiato il prompting e il comportamento di approfondimento due giorni dopo.
