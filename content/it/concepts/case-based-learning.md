---
title: "Apprendimento basato sui casi"
created: "2026-11-08T12:00:00-05:00"
updated: "2026-11-08T12:00:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [problem-based-learning, productive-failure]
technology: [generative-ai, simulation, intelligent-tutoring]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
translation_of: concepts/case-based-learning
source_updated: "2026-11-08T12:23:59-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Sintesi**: L'apprendimento basato sui casi insegna attraverso casi particolari: la presentazione di un paziente, una controversia legale, una decisione aziendale, un episodio in classe o una coppia di esempi contrastanti. Il caso fornisce il contesto, i fatti e l'ambiguità; il docente progetta le domande e la discussione che lo trasformano in apprendimento. L'approccio è una pedagogia distintiva nell'educazione giuridica e aziendale, dove il metodo dei casi e l'interrogazione socratica organizzano da tempo l'aula, e nell'educazione alle professioni sanitarie, dove i casi clinici e i pazienti simulati offrono una pratica controllata. Il suo meccanismo di apprendimento si sovrappone a quello di [[problem-based-learning]] e [[productive-failure]], ma non è la stessa cosa: i casi sono tipicamente narrazioni delimitate con uno spazio-problema progettato, mentre l'apprendimento basato sui problemi parte da un problema mal strutturato che gli studenti indagano. La nuova evidenza sull'IA è promettente ma ristretta. Uno studio di fattibilità perioperatorio su cinque casi ha rilevato che un LLM ancorato ai materiali ha risposto in modo appropriato al 99,3% (543/547) delle domande dei tirocinanti e non ha prodotto contenuti inventati. Uno studio di fattibilità infermieristico ha rilevato che ChatGPT ha ridotto il tempo di creazione dei casi da 106 a 71 minuti senza una variazione misurabile della qualità della discussione. Una meta-analisi di sei trial randomizzati ha rilevato che l'apprendimento basato su problemi e casi supportato dall'IA migliorava conoscenze e soddisfazione, ma solo due trial testavano l'apprendimento basato sui casi e la revisione non ha mai analizzato i formati separatamente. Il corpus manca ancora di uno studio che isoli qualità del caso, facilitazione della discussione ed esiti di apprendimento nello stesso disegno.

## Domande da considerare

- Che cosa rende un caso un caso, invece di un lungo problema in parole o di una storia con un quiz attaccato?
- In che modo l'apprendimento basato sui casi differisce dall'apprendimento basato sui problemi, e perché la differenza conta per il modo in cui l'IA dovrebbe essere usata?
- Quali parti della discussione di un caso vanno pianificate in anticipo, e quali vanno lasciate al giudizio del docente sul momento?
- Quando l'IA genera un caso, che cosa va verificato prima che gli studenti lo vedano? Quando gli studenti discutono un caso con un tutor IA, che cosa va protetto?
- Perché i casi sono così comuni nell'educazione giuridica e aziendale, e che cosa perderebbero quelle discipline se i casi fossero sostituiti da riassunti o simulazioni?
- Quale evidenza mostrerebbe che l'insegnamento basato sui casi funziona, e non semplicemente che gli studenti si sono divertiti con il caso o hanno valutato bene la discussione?

## Introduzione

Un caso è un particolare delimitato. Offre agli studenti una situazione con attori, fatti, vincoli e di solito una decisione o una diagnosi da raggiungere. Il caso non porta con sé la propria lezione. La lezione viene dalle domande che il docente pone, dai confronti che gli studenti fanno e dal ragionamento che esternalizzano nella discussione. È per questo che l'insegnamento basato sui casi è una pratica di progettazione, non solo un genere di materiale di lettura.

Il termine copre una famiglia di tecniche. L'**apprendimento basato sui casi** indica di solito casi strutturati usati per applicare conoscenze e sviluppare ragionamento clinico o professionale. Il **metodo dei casi** è la tradizione giuridica e aziendale di insegnare attraverso sentenze d'appello o situazioni manageriali, spesso con interrogazione socratica. Gli **studi di caso** possono indicare casi didattici, ma la stessa espressione designa anche un disegno di ricerca; uno studio di caso su una scuola non è una lezione basata sui casi. I **casi contrastanti** affinano la percezione chiedendo agli studenti di confrontare due o più esempi che differiscono su una caratteristica che il docente vuole far notare. La **discussione del caso** è lo strato di facilitazione che trasforma un caso scritto in ragionamento collettivo.

Queste tecniche si sovrappongono a [[problem-based-learning]], [[inquiry-based-learning]], [[simulation]] e [[productive-failure]], e i confini non sono sempre netti nella pratica. La distinzione che questa pagina mantiene è funzionale: un progetto basato sui casi parte da un caso selezionato o scritto per uno scopo didattico, e il docente lo usa per rendere visibile un particolare modo di ragionare.

## Che cosa conta come apprendimento basato sui casi

La prima distinzione è rispetto all'apprendimento basato sui problemi. Il PBL parte da un problema mal strutturato e chiede agli studenti di identificare che cosa devono imparare, di studiarlo e di tornare con una soluzione. Il problema può essere un caso, ma la caratteristica che lo definisce è l'indagine guidata dagli studenti. L'apprendimento basato sui casi comincia più spesso con un caso preparato e un insieme definito di obiettivi di apprendimento; il docente può condurre l'analisi, assegnare ruoli o usare il caso per illustrare una decisione. PBL e CBL condividono facilitazione e contesto, ma allocano il controllo in modo diverso. Questo conta per l'IA: un'IA che genera un caso sostiene un progetto CBL, mentre un'IA che fa da tutor agli studenti su un problema aperto è più vicina al PBL.

La seconda distinzione è rispetto allo studio di caso come ricerca. Uno studio di caso qualitativo è un metodo per studiare un sistema delimitato. Un caso didattico è un artefatto progettato. La stessa parola compare in entrambi, e il corpus contiene molti articoli che usano lo studio di caso come metodo di ricerca senza insegnare attraverso casi. Una pagina di concetto deve tenere separato il senso didattico, altrimenti il conteggio delle evidenze si gonfia.

La terza distinzione è tra i formati del caso. Un caso narrativo completo può occupare più pagine e richiedere una preparazione sostanziosa. Una vignetta breve può stare in una singola lezione o in una prova. Un insieme di casi contrastanti mette deliberatamente in coppia esempi che differiscono su una caratteristica bersaglio. Un caso simulato può essere interattivo, con un paziente standardizzato, un chatbot o un ambiente virtuale che risponde allo studente. Il formato cambia il lavoro cognitivo: i casi lunghi richiedono sintesi e definizione delle priorità, le vignette mettono alla prova il riconoscimento, i casi contrastanti sostengono la discriminazione, e le simulazioni aggiungono decisioni in tempo reale.

## Perché i casi funzionano

I casi sono un ponte dalla conoscenza astratta al giudizio situato. Offrono agli studenti un contesto in cui i concetti hanno conseguenze e rendono visibile la conoscenza pregressa: gli studenti devono notare che cosa il caso consente, che cosa lascia ambiguo e quali principi si applicano. Nell'educazione professionale è proprio questo il punto. L'educazione giuridica usa casi e dialogo socratico per insegnare agli studenti a leggere l'autorità, distinguere le massime e ragionare per precedente. L'educazione aziendale usa i casi per esercitare l'analisi in condizioni di incertezza, spesso con una decisione che non ha un'unica risposta giusta. L'educazione alle professioni sanitarie usa i casi clinici per provare diagnosi, gestione e comunicazione prima che i pazienti reali siano a rischio.

Il meccanismo non è semplicemente "esempi del mondo reale". Un caso può essere realistico e insegnare molto poco se la discussione non chiede mai agli studenti di discriminare, giustificare o confrontare. I progetti più solidi usano i casi per creare uno spazio-problema prima della spiegazione, che è il legame con [[productive-failure]]: gli studenti affrontano un caso, incontrano i limiti del loro modello attuale e poi ricevono un'istruzione che affronta quel divario. I casi contrastanti affinano ulteriormente questo effetto. Quando due casi differiscono su una caratteristica che conta, gli studenti vedono la caratteristica invece della storia superficiale. Lo studio esistente su un corso GenAI di tre settimane per 78 studenti di un programma preparatorio per minoranze etniche ha usato la modellazione del docente con casi contrastanti per spostare gli studenti dalla copia efficiente alla co-creazione critica ([[scaffolding-critical-engagement-genai-minority-students]]). È un progetto di confronto tra casi, non un test dell'apprendimento basato sui casi in ambito giuridico o aziendale, ma mostra il meccanismo in un'aula reale.

I casi hanno anche una dimensione sociale. La discussione di un caso rende pubblico il ragionamento: gli studenti propongono interpretazioni, ascoltano alternative e rivedono le proprie. Le domande del docente fanno il lavoro che un manuale non può fare. È per questo che sostituire un caso con un riassunto o una lezione può conservare il contenuto perdendo l'apprendimento. È anche per questo che un'IA che risponde alle domande del caso al posto dello studente può cortocircuitare la discussione anche quando le sue risposte sono accurate.

## Che cosa cambia l'IA

La nuova evidenza si addensa attorno a tre usi: generare casi, erogare casi e sintetizzare l'evidenza.

**Generare casi.** [[higashitsuji-chatgpt-case-creation-nursing-2025|Higashitsuji, Otsuka e Watanabe (2025)]] hanno confrontato la creazione manuale e quella assistita da ChatGPT di casi infermieristici da parte di otto docenti di infermieristica. Il tempo mediano di creazione è sceso da 106,0 a 71,0 minuti, una differenza statisticamente significativa, mentre il carico percepito e la qualità della discussione non hanno mostrato cambiamenti significativi. Lo studio è un trial di fattibilità con nove studenti e un crossover non randomizzato in cieco, quindi sostiene un risparmio di tempo plausibile, non un'equivalenza. La domanda di progettazione importante non è se un modello possa produrre un caso. È se il caso generato preservi il ragionamento clinico che il docente intendeva, e se qualcuno lo verifichi prima che gli studenti lo usino.

**Erogare casi.** [[trewren-ai-perioperative-case-based-learning-2026|Trewren e colleghi (2026)]] hanno costruito cinque casi perioperatori, li hanno caricati in una piattaforma LLM personalizzata e hanno fatto interrogare i casi a quattro tirocinanti di anestesia come valutazioni dei pazienti. Su 547 coppie domanda-risposta, il 99,3% (543/547) è stato giudicato appropriato e nessuna è stata inventata; i quattro fallimenti erano rifiuti di riportare informazioni contenute nel caso. Questa è evidenza che un modello ancorato ai materiali può tenere insieme un caso sotto interrogazione. Non è evidenza che i tirocinanti abbiano imparato di più di quanto avrebbero imparato da una discussione convenzionale del caso, e lo studio non ha confrontato le due cose.

**Sintetizzare l'evidenza.** [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025|Wei e colleghi (2025)]] hanno esaminato sei trial controllati randomizzati sull'apprendimento basato su problemi e casi supportato dall'IA nell'educazione medica e odontoiatrica. Quattro trial sono entrati nella meta-analisi sulle conoscenze, che riporta un miglioramento del 46% con bassa eterogeneità; tre hanno prodotto un punteggio aggregato di soddisfazione di 0,7. Il ragionamento clinico non è stato aggregato perché i trial usavano strumenti diversi. Solo due dei sei trial testavano il CBL, e la revisione non ha analizzato PBL e CBL separatamente. Il risultato è incoraggiante per i progetti basati su casi e problemi supportati dall'IA, ma non ci dice quali caratteristiche del caso abbiano prodotto il guadagno.

Le revisioni circostanti aggiungono contesto senza aggiungere una stima pulita del CBL. [[hardie-genai-nursing-scoping-review-2026|Hardie e colleghi (2026)]] hanno trovato l'apprendimento basato sui casi dentro il tema della simulazione di una revisione infermieristica di 103 studi, non come una delle sue quattro categorie nominate. [[lorteau-sarro-ai-legal-education-2025|Lorteau e Sarro (2025)]] descrivono l'IA come complemento all'insegnamento socratico e alle simulazioni giuridiche interattive, ma la loro revisione di 82 lavori non analizza il metodo dei casi come intervento. [[csaszar-ai-management-education-2026|Csaszar e colleghi (2026)]] non discutono esplicitamente l'insegnamento basato sui casi; i loro unici riferimenti ai casi sono incidentali, e notano che alcuni studi di caso sono stati sostituiti da simulazioni aziendali. L'educazione aziendale e giuridica fornisce quindi la ragione istituzionale dei casi, non l'evidenza sugli esiti. Progetti adiacenti simili a casi includono i [[ai-standardized-patient-scaffolding-medical-2026|pazienti standardizzati con scaffolding LLM]] e la [[genai-medical-education-transformation-review-2026|revisione sull'educazione medica]] che annovera l'apprendimento basato sui casi tra le sue categorie di applicazione.

## Progettare e facilitare i casi con l'IA

- **Scrivere il caso attorno a una decisione o a una discriminazione.** Un caso senza una scelta consequenziale diventa una lettura. Specificare che cosa gli studenti devono notare, decidere o giustificare, poi costruire i fatti e le ambiguità attorno a quel bersaglio.
- **Verificare i casi generati rispetto al ragionamento previsto.** L'IA può produrre dettagli clinici o giuridici fluenti ma strutturalmente sbagliati. Far rivedere a un esperto della materia i fatti, le omissioni e il percorso di ragionamento prima che il caso arrivi agli studenti.
- **Conservare l'ambiguità del caso.** Un caso generato che risolve ogni tensione insegna il riconoscimento, non il giudizio. Preservare le informazioni incomplete e le interpretazioni concorrenti che rendono necessaria la discussione.
- **Usare casi contrastanti quando il bersaglio è la discriminazione.** Appaiare casi che differiscono sulla caratteristica che gli studenti devono notare, e chiedere loro di spiegare la differenza invece di classificarli semplicemente uno per uno.
- **Proteggere la discussione dalla consegna di risposte.** Se durante il lavoro sul caso è disponibile un tutor IA, vincolarlo a domande, indizi o gioco di ruolo. Un'IA che fornisce la diagnosi o la conclusione giuridica rimuove il lavoro cognitivo che il caso esiste per creare.
- **Valutare il ragionamento, non il ricordo del caso.** Chiedere una giustificazione, una diagnosi differenziale, un confronto o una nota decisionale. Un quiz sui fatti del caso può essere superato mentre il ragionamento sottostante resta assente.
- **Trattare la facilitazione del docente come parte del progetto.** La sequenza delle domande, il momento della spiegazione e la gestione di una deviazione non sono decorazione. Determinano se il caso diventa un fallimento produttivo o un fallimento confuso.

## Limiti e lacune nell'evidenza

L'evidenza è scarsa in un modo specifico. Lo studio perioperatorio verifica se un modello ancorato ai materiali possa rispondere a domande su cinque casi, non se l'insegnamento basato sui casi migliori l'apprendimento. Lo studio infermieristico verifica il tempo di creazione dei casi e la qualità della discussione con nove studenti. La meta-analisi aggrega sei trial, solo due dei quali testavano il CBL, e il suo risultato sulle conoscenze mescola PBL e CBL. Le revisioni giuridiche e aziendali descrivono usi e contesti istituzionali; non isolano gli effetti del metodo dei casi. Lo studio sui casi contrastanti è una valutazione di corso, non un confronto controllato tra formati di caso.

C'è anche un rischio concettuale. Un caso può essere memorabile perché è vivido, non perché ha prodotto comprensione. Una discussione può sembrare produttiva perché gli studenti hanno parlato, non perché hanno ragionato. Il campo ha bisogno di disegni che separino il caso dalla facilitazione, il formato dalla materia e il coinvolgimento immediato dal trasferimento differito. Fino ad allora, l'affermazione onesta è che i casi sono una pedagogia professionale ben consolidata con un plausibile supporto dell'IA, non che i casi potenziati dall'IA abbiano un vantaggio di apprendimento dimostrato.

## Idee sbagliate comuni

- **"L'apprendimento basato sui casi è solo l'apprendimento basato sui problemi con una storia."** Il PBL è indagine guidata dagli studenti a partire da un problema mal strutturato. Il CBL parte di solito da un caso preparato e da un bersaglio didattico più definito.
- **"Un caso realistico insegna da solo."** Il realismo fornisce il contesto. Le domande, i confronti e i compiti di giustificazione forniscono l'apprendimento.
- **"I casi generati dall'IA sono pronti all'uso."** I casi generati possono essere fluenti, plausibili e sbagliati. Richiedono una revisione esperta e un controllo sul ragionamento che invitano a fare.
- **"Se gli studenti si divertono nella discussione, il caso ha funzionato."** Il coinvolgimento non è trasferimento. L'esito va misurato su un compito che gli studenti non erano in grado di svolgere prima.

## Concetti collegati

- [[problem-based-learning]]
- [[productive-failure]]
- [[inquiry-based-learning]]
- [[pedagogical-patterns]]
- [[simulation]]
- [[professional-training]]
- [[legal-education]]
- [[business-education]]
- [[medical-education]]
- [[nursing-education]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[higher-ed]]

## Articoli collegati

- [[trewren-ai-perioperative-case-based-learning-2026]] — un LLM ancorato ai materiali ha sostenuto cinque casi perioperatori senza inventare contenuti
- [[higashitsuji-chatgpt-case-creation-nursing-2025]] — ChatGPT ha ridotto il tempo di creazione dei casi infermieristici senza una differenza di qualità misurata
- [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025]] — sei RCT su PBL/CBL supportati dall'IA; solo due testavano il CBL
- [[scaffolding-critical-engagement-genai-minority-students]] — modellazione del docente con casi contrastanti in un corso GenAI
- [[ai-standardized-patient-scaffolding-medical-2026]] — apprendimento basato sui casi accanto a pazienti virtuali e simulati
- [[genai-medical-education-transformation-review-2026]] — apprendimento basato sui casi e ragionamento clinico tra le categorie di applicazione della revisione
- [[hardie-genai-nursing-scoping-review-2026]] — apprendimento basato sui casi dentro il tema della simulazione di una revisione infermieristica
- [[lorteau-sarro-ai-legal-education-2025]] — l'IA completa l'insegnamento socratico e le simulazioni giuridiche
- [[csaszar-ai-management-education-2026]] — studi di caso e simulazioni nell'educazione manageriale, senza un'analisi del metodo dei casi
