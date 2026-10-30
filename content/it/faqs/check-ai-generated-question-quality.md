---
title: "Come faccio a capire se le domande di quiz ed esami generate dall'IA sono davvero buone?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Chiedi venti domande dai tuoi appunti delle lezioni. Te le restituiscono con chiavi di risposta, spiegazioni, etichette di difficoltà e categorie della tassonomia di Bloom, in un documento formattato che sembra finito. Il tuo nome sta per finirci sopra.

Risposta breve da dare a un collega: le domande generate sono candidate, non una valutazione. Risolvi ogni domanda da solo, controlla cosa l'item chiede davvero di fare a uno studente e scopri come gli studenti vi rispondono prima che conti. Nei due studi più ampi di questa base di conoscenza, il segnale interessante non è che la generazione funziona, ma dove fallisce. Una generazione iterativa dentro un flusso di lavoro specifico per il corso ha prodotto esami a scelta multipla utilizzabili in 71 corsi universitari ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). In un audit di scienza dei dati su 311 domande somministrate, le etichette di difficoltà del modello seguivano quasi perfettamente i livelli di Bloom che aveva generato insieme a esse (ρ di Spearman = 0,90) mentre seguivano il punteggio effettivo degli studenti a ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An e Wang, 2026]]). L'etichetta era una descrizione del prompt, non una misura dell'item.

## La versione breve

**1.** Scrivi l'esito atteso e l'evidenza che una risposta soddisfacente fornirebbe prima di generare qualsiasi cosa.

**2.** Costruisci una matrice di specifiche per vedere quali esiti campiona la serie e con quale frequenza.

**3.** Risolvi ogni item da solo prima di fidarti della chiave, e leggi la spiegazione come un'affermazione da verificare.

**4.** Chiedi cosa deve fare uno studente per rispondere. Una domanda che dice «analizza» e richiede memoria è una domanda di memoria.

**5.** Tratta le etichette di difficoltà come metadati del prompt, non come psicometria.

**6.** Sperimenta gli item e ispeziona come funzionano, poi rivedi quelli deboli.

## Parti dall'apprendimento di cui vuoi l'evidenza

La generazione costa così poco che il formato dell'output diventa in silenzio la specifica. Se i tuoi appunti producono item a scelta multipla ordinati, finirai per misurare se gli studenti sanno scegliere tra affermazioni plausibili, qualunque esito dichiari il programma.

Specifica prima l'esito, poi l'evidenza che una risposta soddisfacente fornirebbe, poi le conoscenze che ci si aspetta che gli studenti portino. Includi i materiali del corso, le misconcezioni che prevedi, gli strumenti consentiti e il formato della risposta. Se vuoi che gli studenti interpretino evidenze, l'item deve richiedere interpretazione, e aggiungere la parola a una domanda di definizione non basta. Uno scenario lungo può comunque essere risolvibile con una sola frase familiare che svela la risposta.

Una matrice di specifiche della valutazione è una tabella che incrocia esiti e item, e il suo valore è che espone le lacune prima degli studenti. Rende anche visibile il compromesso: ogni item che generi dal materiale più facile è un item che non hai speso sull'esito che ti interessa di più.

## Esamina ogni item su sei dimensioni

Parti dalla chiave. È difendibile contro il contenuto autorevole del corso, e la spiegazione regge quando la verifichi in modo indipendente? La chiave e la spiegazione vengono spesso dallo stesso passaggio difettoso, quindi controllarne una non controlla l'altra.

Poi chiedi cosa richiede davvero rispondere all'item, tra la lettura e la scelta. È qui che gli item generati falliscono più spesso, ed è qui che l'etichetta è meno affidabile.

Controlla poi l'allineamento: rispondere fornisce evidenza per l'esito previsto o per qualcosa di adiacente e più facile da valutare?

Leggi la formulazione come la leggerebbe uno studente. L'informazione necessaria è presente, e l'ambiguità non legata al tuo costrutto è stata rimossa?

Guarda insieme le opzioni e le regole di punteggio. I distrattori sono plausibili e distinti tra loro e dalla chiave, e la chiave riconosce risposte alternative legittime che la tua rubrica accrediterebbe?

Infine, chiedi chi esclude l'item. Il carico di lettura, il contesto culturale, le immagini e la formattazione possono imporre richieste non legate all'esito. Per uno studente multilingue o con disabilità, un item che premia la lettura veloce misura qualcosa che non volevi misurare, e [[differential-effects-across-learner-groups|la prestazione dei sottogruppi]] è dove questo emerge.

Un secondo modello può aiutarti a individuare problemi, e l'accordo tra due modelli non è una verifica indipendente della correttezza. Condividono dati di addestramento e modi di fallire. Risolvi l'item, poi fai guardare quelli che conteranno a una persona qualificata.

## Non lasciare che a decidere sia l'etichetta di difficoltà

La letteratura sulla [[automated-question-generation|generazione di domande]] è più utile sul fallimento delle etichette che sul successo della generazione. [[student-llm-use-ai-question-difficulty-data-science-2026|An e Wang (2026)]] hanno esaminato 378 domande scritte da persone in corsi di scienza dei dati, delle quali 311 sono state somministrate a 54 studenti, per 7.888 risposte raccolte. Le etichette facile, media e difficile del modello correlavano con i livelli di Bloom che aveva generato insieme a esse a ρ = 0,90 e con la difficoltà empirica degli item a ρ = 0,06. Circa il 70% degli item somministrati è stato risolto correttamente da tutti gli studenti, il che lasciava quasi nessuna variazione che un'etichetta di difficoltà potesse seguire, nemmeno in linea di principio.

Ne seguono due lezioni. Primo, la difficoltà è una proprietà dell'interazione tra un item e una popolazione, quindi nessuna etichetta prodotta prima di somministrare l'item può essere considerata un valore misurato. Secondo, una banca di item a cui tutti rispondono correttamente non è una valutazione facile, è una valutazione inutile: porta quasi nessuna informazione su chi sa cosa.

Il caso positivo è più ristretto di quanto dichiarino i fornitori e vale la pena conoscerlo con precisione. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] hanno generato esami a scelta multipla da dieci domande per 71 corsi universitari, circa 1.200 studenti, con un ciclo che genera, giudica e rivede ogni item in base ai materiali forniti dall'insegnante di ciascun corso, e poi hanno confrontato gli item con esami scritti da persone. È un flusso di lavoro con un revisore al suo interno, eseguito corso per corso, non un singolo prompt su contenuti generici. Il sostegno riguarda quel flusso di lavoro in quelle condizioni, e non si estende a qualunque cosa lo stesso modello produca incollando appunti non revisionati.

## Gestisci un ciclo di generazione, revisione, sperimentazione e correzione

Genera contro una matrice di specifiche e chiedi l'esito previsto, la chiave, una soluzione concisa e la misconcezione che ogni distrattore dovrebbe intercettare. Le annotazioni rendono il design ispezionabile. Non sono prova che il design sia solido.

Ripara prima di accumulare. Elimina affermazioni non sostenute, item duplicati, indizi accidentali nel testo della domanda, chiavi multiple difendibili e complessità non legata al costrutto, e annota cosa hai cambiato, perché il pattern delle riparazioni ti dice quale parte del prompt correggere.

Sperimenta dove la sperimentazione è proporzionata. Una pratica a bassa posta in gioco, o una sperimentazione gestita dentro la valutazione, ti dà dati di risposta. Di' agli studenti come segnalare una domanda ambigua o sbagliata e leggi quelle segnalazioni, perché sono il tuo segnale di errore più informativo.

Poi ispeziona come funzionano gli item: la proporzione di risposte corrette, quali distrattori attirano risposte e se il successo sull'item accompagna la prestazione nel resto della valutazione. Un item in cui gli studenti forti falliscono e quelli deboli riescono è un difetto, non una domanda difficile. In una classe piccola queste statistiche sono instabili, quindi combinale con la revisione del contenuto e le spiegazioni degli studenti invece di trattare una percentuale come un verdetto.

Correggi e conserva il registro: la versione approvata, l'esito a cui serve, la chiave, la motivazione, le note di revisione e la storia delle somministrazioni. Per banche grandi o ad alta posta in gioco è qui che servono specialisti della valutazione e metodi psicometrici adeguati, e la competenza in [[educational-measurement|misurazione]] non è sostituibile con una lettura attenta.

## Come si presenta in un corso

In un corso introduttivo di sociologia l'esito potrebbe essere distinguere una spiegazione strutturale da una individuale. Un item debole chiede agli studenti di definire «strutturale», il che misura il riconoscimento lessicale. Una candidata più forte presenta un breve scenario su una famiglia e una decisione lavorativa, poi chiede quale spiegazione individua meglio un vincolo strutturale, con distrattori che rappresentano interpretazioni plausibili ma diverse.

L'insegnante controlla che lo scenario sostenga davvero la chiave, che due opzioni non esprimano la stessa idea e che la risposta non dipenda da terminologia mai introdotta nel corso. Una domanda di follow-up di una riga, «quale dettaglio sostiene la tua scelta?», fa emergere il ragionamento che l'opzione selezionata nasconde. L'adattamento non è testato come formato di item, e il suo valore è più ristretto: le domande di revisione qui sopra si possono porre prima che un item venga somministrato, e una chiave sbagliata si può riparare prima che gli studenti la vedano.

Per gli studenti che generano le proprie domande di pratica, la stessa regola vale al loro livello: prova a risolvere l'item, verifica la spiegazione contro le fonti del corso e porta i casi irrisolvibili a chi conosce la materia. Una [[study-with-ai|pratica di studio]] che abitua gli studenti ad accettare acriticamente le chiavi generate insegna l'abitudine sbagliata.

## Cosa ti tornerà addosso

**«Ha dato una risposta e una spiegazione.»** Entrambe possono ripetere lo stesso errore, e la spiegazione genera fiducia proprio perché è fluente. Verifica il ragionamento contro i tuoi materiali, non contro la sua stessa riformulazione.

**«Sono solo domande di pratica.»** La pratica insegna misconcezioni quando le chiavi sbagliate restano non corrette, e gli studenti ripetono l'errore con la stessa facilità della risposta giusta. Una posta in gioco più bassa cambia quanta revisione sia proporzionata. Non cambia se l'accuratezza conti.

**«Agli studenti il quiz è piaciuto.»** Il gradimento è evidenza sull'esperienza. Un quiz facile che tutti finiscono comodamente dà una buona sensazione e misura poco, e l'audit di scienza dei dati ha trovato che la popolarità degli item non era accompagnata da alcun segnale di difficoltà utilizzabile.

**«La rubrica o i tag di Bloom mostrano che centra gli esiti.»** Le etichette di Bloom fornite dallo stesso passaggio di generazione sono l'evidenza meno indipendente disponibile. Il ρ = 0,90 contro le etichette e il ρ = 0,06 contro la prestazione degli studenti sono esattamente come appare quando lo si misura.

## Cosa fare questa settimana

**1.** Scegli un esito e scrivi l'evidenza che una risposta soddisfacente fornirebbe. Poi genera cinque item su quell'esito, chiedendo la chiave, la soluzione e la misconcezione che ogni distrattore dovrebbe intercettare.

**2.** Risolvi tutti e cinque senza guardare le chiavi, e registra quelli su cui tu e il modello non siete d'accordo.

**3.** Chiedi a un collega di esaminare i due candidati più forti per allineamento e ambiguità, ed elimina tutto ciò che nessuno dei due riesce a difendere.

**4.** Sperimenta i sopravvissuti con un breve follow-up che chiede agli studenti quale dettaglio sostiene la loro scelta.

**5.** Registra cosa hai cambiato e perché, così il lotto successivo parte da un prompt migliore invece che dallo stesso.

## Dove andare adesso

[[automated-question-generation|La generazione automatizzata di domande]] è la pagina concettuale sui metodi di generazione e la loro qualità misurata, e [[educational-measurement|la misurazione educativa]] copre l'analisi degli item, l'affidabilità e la psicometria che una sperimentazione appena accenna. Entrambe stanno sotto la [[assessment-validity|validità della valutazione]], che è lo standard a cui serve l'intero ciclo.

Il lato del giudizio dello stesso problema appartiene alla [[ai-grading-fairness-reliability|valutazione con l'IA]], perché un buon item corretto male non è meglio di un cattivo item corretto bene. Per la questione più ampia di cosa dovrebbe rappresentare un voto quando gli studenti possono usare l'IA, vedi [[redesign-assessment-ai-era|ridisegnare la valutazione nell'era dell'IA]].
