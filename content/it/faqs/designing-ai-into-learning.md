---
title: "Come dovrebbe essere progettata l'IA nell'esperienza di apprendimento?"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
contributors: [editor]
translation_of: "faqs/designing-ai-into-learning"
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
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

Lo schema del modulo ha una riga che dice "attività con IA" e nessuno sa dire cosa sostituisce. Oppure un docente ha chiesto di aggiungere un chatbot a un corso che già funziona, e il tuo compito è collocarlo senza rompere la parte che faceva funzionare il corso.

Parti dall'obiettivo di apprendimento e dall'attività che lo produce. Lo stesso modello può essere un'impalcatura, un partner [[socratic-method|socratico]], un lettore di bozze, una [[simulation|simulazione]] o una macchina di risposte, e quale delle cinque ottieni dipende dal progetto, non dal modello. Nomina la modalità che stai costruendo, metti il tentativo dello studente prima che compaia qualsiasi aiuto, e mantieni almeno un percorso attraverso il corso che funzioni senza lo strumento.

## La versione breve

**1.** Scrivi la frase su cosa sanno fare gli studenti dopo, senza lo strumento, e verifica ogni funzione di IA contro di essa.

**2.** Metti in sequenza l'interazione: lo studente tenta, l'IA supporta, lo studente valuta o rivede, lo studente dimostra.

**3.** Nomina la modalità sulla scala ICAP. Aggiramento e impalcatura possono essere lo stesso strumento a pioli diversi.

**4.** Colloca l'IA dove la sequenza del corso intende già una specifica attività, non alla fine come bonus.

**5.** Trattieni lo strumento mentre una capacità si sta formando, poi ripristinalo a un checkpoint che lo studente non può fingere.

## Decidi cosa fa lo studente senza lo strumento

Il concetto [[pedagogy|Pedagogies and Teaching Strategies]] della base di conoscenza fornisce il test: la configurazione preserva l'attività che produce l'apprendimento voluto? Rispondi su carta, prima che qualcuno scelga una funzione.

[[finkelstein-principled-ai-education-2025|The Principled AI Education Framework]] enuncia la regola generale: la tecnologia dovrebbe aumentare, non spiazzare, le capacità umane che l'educazione intende sviluppare. Scritta come test per un modulo, significa nominare la capacità, nominare l'attività che la costruisce e chiedere se l'IA sta dentro quell'attività o accanto.

## Metti il tentativo prima dell'aiuto

Il pattern predefinito che sopravvive al contatto con una classe reale: **lo studente tenta, l'IA supporta, lo studente valuta o rivede, lo studente dimostra la comprensione.**

In pratica significa chiedere una previsione o una soluzione iniziale prima che compaia qualsiasi assistenza, e preferire domande, suggerimenti, esempi, controargomentazioni e [[feedback]] al completamento immediato. Preserva il [[productive-failure|fallimento produttivo]] dove serve all'apprendimento. Richiedi la verifica delle affermazioni consequenziali, incorpora la spiegazione e il [[learning-by-teaching|teach-back]], e ritira progressivamente il supporto man mano che la competenza cresce. Mantieni un po' di lavoro senza IA così che gli studenti possano calibrare cosa sanno fare da soli.

La sintesi [[reducing-ai-misuse|Reducing AI Misuse]] raccomanda la stessa forma come sequenza pensa prima, IA dopo, rifletti, con checkpoint di valutazione deliberati.

## Nomina la modalità per cui stai progettando

[[thermomix-genai-education-analogy-2026|l'analogia della macchina da cucina di Rummel, Nachtigall e Panadero]] riformula la domanda: da se gli studenti usano l'[[generative-ai|IA generativa]] a come quell'uso plasma ciò che diventano. Mappata su [[icap-framework|ICAP]] e [[samr-model|SAMR]], dà una scala. Esternalizzare completamente un compito senza revisione né [[critical-thinking|impegno critico]] è sostituzione passiva, e rischia [[cognitive-offloading|perdita di competenza e dipendenza eccessiva]]. [[prompt-engineering|Raffinare i prompt]] e verificare gli output in modo incrociato richiede [[prior-knowledge|conoscenza pregressa]] e [[self-regulated-learning|autoregolazione]], che è attivo o aumento. Usare l'IA per fare brainstorming, delineare e valutare un lavoro originale è costruttivo o modificazione. L'IA come vero partner di dialogo per la co-costruzione e il feedback adattivo è interattivo o ridefinizione.

L'implicazione è diretta. Lo stesso strumento è un aggiramento a un piolo e un'[[scaffolding|impalcatura]] a quello successivo, quindi il documento di progetto dovrebbe nominare la modalità prevista.

## Collocala dove la sequenza intende un'attività

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec e Horvat]] hanno analizzato la sequenza pianificata di 29.064 attività di insegnamento e apprendimento in 554 corsi e hanno trovato una grammatica di progetto visibile. Le attività di tipo acquisizione sono il punto d'ingresso più comune e il tipo singolo più numeroso, sopra il 20%. Il tipo di apprendimento segue il livello di Bloom previsto, con l'acquisizione che scende da circa il 50% al livello 1 a circa il 20% al livello 6 e la produzione che sale sopra il 20% ai livelli 5 e 6. La transizione più forte nei dati è da valutazione a discussione, a 0,332.

Ne seguono due lezioni per il progetto dell'IA. Metti lo strumento dove la sequenza intende un tipo di attività. E, poiché il feedback si raggruppava con [[collaborative-learning|collaborazione]], [[group-work|lavoro di gruppo]] e presenza [[teacher-role|del docente]], le strutture tra pari e sincrone sono il punto in cui il supporto dell'IA dovrebbe innestarsi, non quello in cui dovrebbe sostituire.

## Decidi cosa trattenere, e quando ripristinarlo

[[refrain-amplify-genai-curriculum-2026|il framework "trattenere, poi amplificare" di Torres-Sahli e colleghi]] porta questo al livello del programma. Trattieni uno strumento generativo mentre una capacità si sta formando, poi ripristinalo quando lo studente sa dirigerlo, giudicare ciò che restituisce e risponderne, con un checkpoint difficile da fingere a ogni snodo.

I dispositivi sono governati da un criterio di formazione contro [[cognitive-offloading|scaricamento]]: ammessi dove sostengono un lavoro impegnato, esclusi dove drenano l'attenzione. Questo trasforma le decisioni di scaricamento in una questione di [[curriculum-design|curriculum]] e di [[governance]] che viene prima del progetto a livello di corso, non dopo.

## Verifica che l'allineamento sia reale

[[mcinnes-salvaging-constructive-alignment-genai-2026|l'analisi del discorso di McInnes e colleghi]] su 14 documenti di orientamento dell'istruzione superiore avverte che i consigli inquadrati sull'efficienza, come usare l'IA generativa per redigere esiti, rubriche e programmi dei corsi, producono un [[assessment|allineamento]] che sembra allineato trascurando la metà costruttiva. Esiti, attività e valutazioni vengono generati come elementi separati invece che interdipendenti.

Il loro rimedio è la ri-sequenziazione. Gli educatori dovrebbero capire l'allineamento costruttivo abbastanza bene da dirigere, interrogare e rifiutare l'output dell'IA prima di delegarne qualsiasi parte, perché accettare una superficie plausibile è lo stesso fallimento valutativo contro cui i docenti mettono in guardia gli studenti. Dove si usa l'IA, sostengono sistemi delimitati a livello istituzionale e [[rag|aumentati dal recupero]], configurati intorno alle politiche e agli standard di qualità locali invece che ai default generici addestrati su internet.

## Cosa sbagliano i progettisti didattici

Aggiungere l'IA conta come l'intervento. Ciò che cambia l'apprendimento è l'attività che lo studente svolge, e l'IA è una parte della cornice in cui la svolge. Un suggerimento ben collocato e una risposta ben collocata possono girare sullo stesso modello e produrre apprendimenti opposti.

Scrivere il permesso è il lavoro di progetto. Un permesso stabilisce cosa è consentito. Non stabilisce la sequenza, la modalità o il checkpoint, e quei tre decidono se l'attività sopravvive.

L'efficienza è l'obiettivo della riprogettazione. Redigere esiti e rubriche con un modello è veloce, e l'analisi dei 14 documenti ha trovato che il risultato può sembrare allineato mentre le parti smettono di sostenersi a vicenda.

## Cosa ti tornerà contro

**"Gli studenti lo useranno comunque, quindi progettare intorno allo strumento è ingenuo."** Lo useranno, ed è questo l'argomento per specificare la modalità e insegnarla. Un modulo che nomina la modalità dà allo studente qualcosa a cui conformarsi.

**"Non abbiamo tempo di ri-sequenziare un corso intero."** Allora ri-sequenzia un modulo e una valutazione. Lo snodo trattenere-poi-amplificare è un checkpoint, e la sequenza pensa prima sono tre istruzioni su una dispensa.

**"La nostra funzione di IA ha già i guardrail."** I guardrail vincolano ciò che il modello dice. Non decidono se lo studente ha tentato prima, se il supporto si ritira o se esiste un percorso senza IA. Quelle sono decisioni di progetto nel tuo corso, non impostazioni nel prodotto.

## Cosa fare questa settimana

**1.** Scrivi la frase sulla prestazione senza aiuto per il modulo e mettila sopra l'elenco delle attività.

**2.** Segna la modalità ICAP prevista accanto a ogni attività con IA nello schema.

**3.** Sposta un'attività con IA in modo che lo studente tenti il problema per primo.

**4.** Scegli un percorso senza IA attraverso il modulo ed etichettalo per gli studenti.

**5.** Nomina uno snodo in cui lo strumento viene trattenuto, e il checkpoint che lo ripristina.

## Dove andare adesso

[[learning-design|Instructional Design]], [[active-learning|Active Learning]] e [[scaffolding]] portano il vocabolario di progetto. Per i default a livello di interazione che decidono se un'attività progettata preserva l'apprendimento, vedi [[reduce-ai-cheating]] e [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] copre come gli stessi principi vincolino il software stesso, e [[developing-ai-tutor]] li traduce nell'architettura di un tutor.
