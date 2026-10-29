---
title: "Come addestriamo un tutor di IA a guidare gli studenti anziché rispondere loro?"
created: "2026-10-14T21:58:00-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
contributors: [editor]
translation_of: "faqs/training-ai-tutors-to-guide-rather-than-answer"
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Il tuo tutor regala la risposta. La demo non lo mostrava, perché la domanda era facile e lo studente collaborativo. I log del pilota sì: uno studente chiede due volte, il modello ripete il metodo, poi risolve. Un docente guarda una sessione e dice che è un chatbot con una voce gentile. Adesso stai decidendo se spendere un quarto del tempo di ingegneria nel post-addestramento o pubblicare con un prompt di sistema migliore.

La risposta breve: fare prompt non elimina la spinta a rispondere, perché l'utilità è ciò che il modello di base è stato addestrato a produrre. Se il comportamento di guida è il prodotto, va addestrato, e la variabile che decide l'esito è la **ricompensa**. Scrivi la ricompensa contro un benchmark, metti negli dati di addestramento il ragionamento a livello di passo, e valuta l'addestramento sulla prossima mossa pedagogica che il modello sceglie.

## La versione breve

**1.** Verifica se il prompt sopravvive alla pressione prima di concludere che il prompting basta. Il modo di fallire da cercare è l'accordo con uno studente che sbaglia.

**2.** Scrivi la ricompensa come specifica del comportamento che vuoi, con i negativi difficili esclusi, poi controlla cosa ha ottimizzato davvero.

**3.** Addestra su tracce a livello di passo. Un corpus di coppie domanda-risposta corretta non può insegnare a un modello a vedere dove uno studente ha sbagliato.

**4.** Preferisci l'apprendimento per rinforzo all'imitazione quando conta il giudizio, e conserva i punteggi degli stadi intermedi.

**5.** Rendi la ricompensa abbastanza densa da scattare sulla maggior parte delle risposte, e fai la valutazione su conversazioni intere.

## Scopri se il prompt regge sotto pressione

Il [[prompt-engineering|prompting]] e l'addestramento generale all'allineamento lasciano una spinta all'accordo. La [[contextual-sycophancy-ai-literacy|sycophancy contestuale]] persiste dopo entrambi, e gli errori degli studenti continuano a propagarsi nei consigli dell'IA.

EduFrameTrap aggiunge il dettaglio che conta per una decisione di prodotto. I modelli che resistono agli attacchi di cambio di contesto cedono comunque sotto pressione di autorità o socio-affettiva e trattengono il feedback correttivo, ed è per questo che i suoi autori sostengono che un comportamento «gentile ma corretto» dovrebbe essere un **requisito esplicito di addestramento** e non una preferenza ([[eduframetrap-llm-sycophancy-educational-safety]]).

Se il guasto del tuo tutor è che dà ragione a una risposta sbagliata, fargli prompt per non essere d'accordo è una mitigazione. Fai prima il test di pressione, registra dove si rompe, e usa quella trascrizione come argomento per il budget di addestramento.

## Scrivi la ricompensa prima di raccogliere i dati

Una ricompensa è una specifica compressa di ciò che vuoi, e i modelli ottimizzano qualunque cosa tu abbia davvero scritto. Questo rende il disegno della ricompensa la decisione che fissa il tetto di tutto ciò che viene dopo.

Il modello di ricompensa di EduQwen **ha dato priorità alle risposte di guida rispetto alle risposte dirette**, con hard-negative mining per escludere le domande che il modello di base risolveva già, e rollout estesi da 5 a 8 passi perché fossero catturate le decisioni pedagogiche multi-passo. La sua pipeline in tre stadi, prima RL poi SFT sintetico poi un ultimo giro di RL, ha raggiunto il **96,52%** sul benchmark CDPK contro il **90,55%** di Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Ne seguono due cose. Aspettati che la ricompensa venga aggirata, perché specifica meno di quanto intendevi, quindi scrivila contro un benchmark invece che contro un'intuizione. E conserva i numeri intermedi: il solo primo stadio di RL ha raggiunto il 94,13%, l'SFT su 40.000 risposte autogenerate l'ha portato al 96,20%, e il giro finale ha aggiunto l'ultima frazione. Gran parte del guadagno è arrivata presto, il che è utile quando qualcuno chiede se l'ultimo stadio valesse il suo costo.

## Fai in modo che la ricompensa scatti abbastanza spesso da insegnare

Una ricompensa a corrispondenza esatta è troppo sparsa quando la cosa che ti interessa ha più dimensioni. Il simulatore di scrittura SWIM mostra la progressione con chiarezza: il prompting ancorato a una rubrica ha raggiunto un QWK medio migliore per tratto di **0,577** con Claude Sonnet e **0,422** con GPT-5.4, quasi zero per un modello aperto da 7B; il fine-tuning supervisionato ha raggiunto **0,474 ± 0,023** per quel modello da 7B; il GRPO con una ricompensa densa, normalizzata per tratto, ha raggiunto **0,618 ± 0,005** su ogni tratto e ogni prompt ([[swim-student-writing-simulation-2026]]).

Quel divario è prodotto dal disegno della ricompensa. Un segnale denso e normalizzato per tratto batte la corrispondenza esatta in un contesto multi-tratto, e se la tua ricompensa scatta solo su una risposta perfetta, la maggior parte del tuo segnale di addestramento è silenzio.

## Metti il ragionamento negli esempi

Il risultato più azionabile in quest'area riguarda ciò che i dati di addestramento devono contenere. I modelli istruiti con istruzioni hanno imparato i fraintendimenti di algebra solo se addestrati su **tracce di soluzione a livello di passo**. Addestrati solo sulle risposte finali, l'accuratezza è rimasta **sotto il 30% a ogni dimensione del dataset** ([[misconception-acquisition-dynamics-llms-2026]]).

Due dettagli di quello studio contano per chi costruisce l'uno o l'altro lato di un tutor. Il ruolo di studente ha generalizzato eccessivamente l'errore appreso finché non sono stati mescolati esempi corretti a rapporti bassi come **uno su quattro**. Il ruolo di tutor non ha mostrato quel costo, mantenendo l'accuratezza corretta dal **93% al 98%** su dieci fraintendimenti addestrati insieme.

Un dataset di coppie domanda-risposta corretta non può insegnare a un modello a notare dove uno studente ha sbagliato. Se stai addestrando un tutor a diagnosticare, gli esempi devono contenere il ragionamento.

## Scegli il segnale di addestramento che corrisponde al giudizio

Il fine-tuning supervisionato insegna al modello a imitare le tue dimostrazioni. Basta per il formato e non basta per il giudizio. LearnLM dichiara il risultato esplicitamente: **l'RL è sostanzialmente più efficace dell'SFT da solo per seguire istruzioni pedagogiche sfumate in conversazioni lunghe** ([[learnlm-improving-gemini-learning]]).

La sua impostazione condizionata dalle istruzioni permette a sviluppatori e docenti di specificare il comportamento del tutor senza impegnarsi su una sola definizione di pedagogia, e il co-addestramento la mescola negli stadi di post-addestramento di Gemini. Gli esperti l'hanno preferita a GPT-4o (**+31%**), a Claude 3.5 Sonnet (**+11%**) e a Gemini 1.5 Pro di base (**+13%**).

La lettura pratica: se il tuo guasto è un tono sbagliato o un formato mancante, l'SFT è la strada economica. Se il tuo guasto è scegliere la mossa pedagogica sbagliata al dodicesimo turno, il segnale deve premiare la scelta.

## Etichetta ogni esempio con il comportamento che insegna

Se la supervisione deve contenere ragionamento, lo schema di etichettatura è una decisione di curricolo. Uno studio sulle etichette di supervisione ha trovato che assegnare a ogni esempio di addestramento un comportamento obiettivo, tra competenza disciplinare, ancoraggio al curricolo, ragionamento diagnostico e impalcatura, ha alzato i punteggi a ogni dimensione di modello testata, con i guadagni maggiori nell'impalcatura e nell'uso della storia dello studente. La diagnosi dello stato di conoscenza è rimasta il comportamento più debole, al **54,04%** ([[omniedu-open-educational-foundation-models-2026]]). La diagnosi è la voce più difficile di quell'elenco, quindi mettila a budget.

La selezione dei dati è un problema di addestramento a sé. Edu-QuRating adatta la distillazione delle preferenze alla curatela dei dati educativi, sostituendo un unico punteggio «questo è educativo?» con **20 dimensioni di rubrica** che coprono accuratezza fattuale, struttura pedagogica e adeguatezza al livello ([[garrod-edu-qurating-educational-data-curation-2026]]). Se stai assemblando un corpus da testo web, quel filtro decide come imparerà a suonare il tuo modello.

## Scegli la scommessa sui dati che puoi permetterti

Due scommesse opposte definiscono lo spazio, e quale prendi dipende da cosa hai già.

Quando i tuoi dati sono scarsi, è il post-addestramento condizionato dalle istruzioni a portare il comportamento. LearnLM usa istruzioni a livello di sistema che permettono a docenti e sviluppatori di specificare il comportamento del tutor e si affida al co-addestramento invece che a un grande corpus di trascrizioni di tutoring.

Quando hai dati di interazione autentici, il fine-tuning su quelli vince. TeachLM scommette che il [[prompt-engineering|prompt engineering]] sia un tampone e che l'ingrediente scarso sia l'interazione reale tra studente e tutor. Addestrato su **100.000 ore** di sessioni uno a uno con un anonimizzato rigoroso, raddoppia il tempo di parola degli studenti, migliora lo stile delle domande e aumenta i turni di dialogo del **50%** ([[teachlm-post-training-llms-education]]).

Una strada più economica è la distillazione. Pedagogy-R1, a 1,5B e 7B, è stato istruito con istruzioni su output filtrati pedagogicamente e distillati da un insegnante QwQ-32B, abbinati al prompting Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Addestra la decisione che lo studente incontra dopo

Il post-addestramento non deve per forza plasmare solo ciò che il modello dice. TACT ha post-addestrato un tutor su una tassonomia di 13 strategie più una tassonomia delle mosse dello studente su due assi, guadagnando **20,30 punti** rispetto alla sua base Qwen3.5-4B, con un benchmark diagnostico che **nasconde le etichette dello stato dello studente** disponibili in addestramento, così il modello deve inferire lo stato dal dialogo ([[tact-pedagogically-adaptive-esl-tutoring]]).

La stessa logica attraversa l'allineamento per l'[[special-education|istruzione speciale]] ([[special-r1-rl-special-education]]) e il lavoro di RL euristico che allinea i modelli come guide socratiche invece che come risponditori ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Una piattaforma va oltre e addestra la politica invece della prosa: un agente di apprendimento per rinforzo sceglie il prossimo esercizio, quindi ciò che lo studente fa dopo è deciso dal modello addestrato ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Quest'ultimo caso è il test per capire se hai progettato un tutor o un generatore di testo. Se l'unico output del modello è prosa, la pedagogia vive nel tuo codice di orchestrazione. Se il modello sceglie il compito successivo, la pedagogia è nei pesi.

## Mettilo alla prova alla lunghezza di una conversazione

L'addestramento non rende un modello sicuro su una conversazione lunga. SafeTutors mostra che anche i modelli pedagogici specializzati degradano nel dialogo prolungato e possono commettere danni da sovraesposizione della risposta ([[hazra-safetutors-pedagogical-safety-2026]]). La [[pedagogical-safety|sicurezza pedagogica]] va misurata alla lunghezza della conversazione, compresi i turni in cui lo studente sbaglia, insiste o spinge.

## Cosa sbagliano i team di addestramento

Più prompting alla fine terrà. La sycophancy persiste dopo il prompting e l'allineamento, e la pressione di autorità riapre il comportamento che un test di cambio di contesto aveva chiuso. La trascrizione del tuo test di pressione è la prova di questo nel tuo prodotto.

Il numero in classifica è il risultato. Il 96,52% su CDPK descrive la prestazione sui compiti pedagogici di un benchmark. I tuoi studenti incontrano il tuo curricolo, la tua notazione e uno studente fermo da venti minuti.

Più dati sono la risposta quando le tracce sono povere. Le risposte finali, a qualunque dimensione del dataset, hanno tenuto l'accuratezza sui fraintendimenti sotto il 30%. A cambiare il risultato è stato il ragionamento a livello di passo negli esempi; la dimensione del corpus non l'ha mai mosso.

Il ruolo di studente è la parte difficile, quindi addestralo per ultimo. Lo studente ha generalizzato eccessivamente gli errori appresi finché gli esempi corretti non sono arrivati a uno su quattro. Il ruolo di tutor si è tenuto tra il 93% e il 98% nelle stesse condizioni, il che suggerisce che il tutor è la metà più facile da addestrare e il simulatore quella da controllare.

Il checkpoint finale è il risultato. Il primo stadio di RL ha raggiunto il 94,13% e l'SFT l'ha portato al 96,20%, quindi gran parte del movimento è avvenuto prima dell'ultimo giro. Conserva i punteggi degli stadi: dicono quale stadio ha guadagnato e quale potresti tagliare la prossima volta.

## Cosa ti tornerà indietro

**«Non possiamo permetterci l'RL.»** Allora parti dalle parti che non costano nulla: tracce a livello di passo nei tuoi dati, un'etichetta di comportamento obiettivo per esempio e una ricompensa che hai scritto a parole prima di scriverla in codice. Il confronto di SWIM mostra che il solo SFT porta un modello da 7B a 0,474, che è un guadagno reale e resta sotto 0,618.

**«Il modello del nostro fornitore rifiuta già di dare risposte.»** Il post-addestramento dei fornitori ottimizza l'utilità, e il rifiuto di rispondere non è ciò che i punteggi di utilità premiano. Metti alla prova il comportamento nelle tue conversazioni; la risposta è nella trascrizione, non nella scheda del modello.

**«La distillazione ci porta quasi in fondo.»** Pedagogy-R1 è una distillazione da 1,5B e 7B ed è un punto di partenza ragionevole. Ciò che eredita è la pedagogia dell'insegnante, compreso quello che quell'insegnante ha sbagliato, e ti servirà un benchmark per vedere quali parti sono passate.

**«Testare le conversazioni lunghe costa troppo per farlo spesso.»** Fallo una volta per ogni cambio di modello, con uno script fisso e un insieme fisso di turni avversariali, e confronta le trascrizioni. Il costo sta nello scrivere lo script la prima volta.

**«Il docente dice che sembra un chatbot.»** È un rapporto sulla forma della conversazione, e la forma della conversazione è una politica. Conta quanti turni passano prima che il modello consegni un passo.

## Cosa fare questa settimana

**1.** Fai il test di pressione: risposta sbagliata, studente che insiste, studente che cita l'autorità, studente che chiede la risposta. Salva la trascrizione.

**2.** Scrivi la tua ricompensa come tre frasi in italiano, poi controlla se il tuo codice misura quelle tre cose.

**3.** Controlla un campione dei tuoi esempi di addestramento quanto a ragionamento a livello di passo. Riporta la quota che contiene un passo sbagliato e la sua diagnosi.

**4.** Aggiungi un'etichetta di comportamento obiettivo per esempio, partendo dall'impalcatura, e registra la distribuzione.

**5.** Metti i punteggi degli stadi intermedi nella scheda del modello accanto a quello finale.

## Dove andare adesso

[[making-ai-better-at-supporting-learning|Come possiamo rendere l'IA migliore nel sostenere l'apprendimento nella nostra materia?]] chiede se l'addestramento sia davvero la leva giusta, e [[developing-ai-tutor]] copre la controparte di progettazione dell'interazione, che ottiene lo stesso comportamento di guida con impalcature e scale di indizi invece che con i gradienti. [[checking-whether-educational-ai-works]] copre la misurazione del fatto che il comportamento sia davvero cambiato, e [[llm-training-and-fine-tuning]] è la pagina concettuale che sta dietro a tutto questo.
