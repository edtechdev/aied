---
title: "Quali sono le buone pratiche per riferire e interpretare la ricerca sull'IA nell'istruzione?"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
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

La tua bozza ha un numero di richiamo nell'abstract, e un revisore ti ha appena chiesto cosa abbia fatto davvero il gruppo di controllo. Oppure sei tu il revisore, con in mano una meta-analisi il cui effetto aggregato è 0,67 e la cui sezione sui metodi occupa una pagina e mezza. Oppure il tuo dipartimento sta scrivendo indicazioni su come il personale dovrebbe riportare gli studi sull'IA e vuole qualcosa di più specifico di «seguite gli standard».

Sei omissioni decidono la maggior parte di questi casi: quale sistema di IA è stato usato, per cosa era configurato, quale ruolo pedagogico svolgeva, se degli esseri umani hanno progettato o rivisto il suo output, cosa ha misurato davvero lo strumento di rilevazione, e cosa hanno fatto gli autori riguardo a bias, costi e limiti. «Non valutabile» è il verdetto onesto quando mancano, ed è un verdetto diverso da «confutato».

## La versione breve

**1.** Descrivi l'IA come un trattamento, non come un fornitore. Modello, versione, configurazione, prompt, ruolo e chi ha progettato o rivisto l'output.

**2.** Nomina la ragione pedagogica e il confronto attivo. Un nome di prodotto non è un metodo, e la didattica abituale non è un controllo equo.

**3.** Fai corrispondere la misura all'affermazione, compreso se il risultato era differito e senza aiuto.

**4.** Riporta l'incertezza che l'analisi ha davvero: effetti dipendenti, varianza tra studi, intervalli di previsione, dimensioni dei sottogruppi, bias di pubblicazione.

**5.** Valida ogni giudizio automatizzato, con uno standard di riferimento nominato e un arbitro nominato.

**6.** Riporta i contrappesi: governance, costo computazionale, il tuo uso dell'IA, i risultati nulli, e solo le citazioni che hai controllato.

## Descrivi l'IA come un trattamento che qualcuno potrebbe ricostruire

È il controllo che la maggior parte delle proposte non supera. Il quadro RAISE (*Reporting AI Studies in Education*, Allison 2026) è una checklist di 30 voci su dieci domini tematici, e la sua affermazione diagnostica è specifica: le proposte omettono regolarmente quale modello è stato usato, come era configurato, quale ruolo svolgeva e se attori umani hanno progettato o rivisto i suoi output. Ai revisori restano poi quattro domande senza risposta. Cosa stava facendo esattamente l'IA? Era necessaria? È replicabile? Le affermazioni sull'apprendimento sono credibili?

RAISE va dalla giustificazione educativa alla specifica a livello di API, all'interazione tra chi impara e l'IA, all'accessibilità e all'appropriatezza culturale, ai partecipanti e al contesto, al coinvolgimento umano, alla progettazione, all'etica, alla trasparenza e riproducibilità, fino ai limiti. La sua Ethics and Risk Matrix di accompagnamento copre i rischi per l'[[agency|agentività]] di chi impara, per l'[[equity-in-ai-education|equità]], per la [[governance]] dei dati e per la trasparenza algoritmica. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah e Gašević (2026)]] offrono un'alternativa snellita. TEP-AIED fonde Trasparenza, Etica e Pedagogia in un'unica struttura interdipendente, fornisce una tabella di linee guida mappata su sette sezioni dell'articolo, e chiede agli autori di aggiungere una sottosezione Metodi intitolata «Transparency, Ethics, and Pedagogy Considerations». La loro ragione è pratica: RAISE è completo e troppo granulare per l'uso empirico di routine. La dichiarazione sta sotto [[ai-use-disclosure]] ed è ciò che rende verificabili le affermazioni su [[privacy]] ed [[ethics|etica]].

La giustificazione educativa viene per prima in RAISE perché l'IA non è uno strumento neutro. Il valore dipende dall'allineamento tra il problema di apprendimento, una ragione teorica e la mappatura dagli obiettivi alle misure dei risultati. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] ha trovato che tutte tranne due delle 14 meta-analisi sottoposte a revisione definivano il trattamento come uno strumento, ChatGPT o GenAI o «IA» in generale. Un nome di prodotto non è una [[pedagogy|pedagogia]]. Trattare l'esposizione a ChatGPT come un unico intervento comune è paragonabile a fare una meta-analisi degli effetti della «carta».

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] sostengono lo stesso argomento per gli studi primari. Esaminando un sottoinsieme dei confronti dietro una meta-analisi di primo piano, hanno trovato che solo il 21% aveva un trattamento ben definito, un gruppo di controllo e una misura di apprendimento valida. La dimensione dell'effetto riportata (g = 0,7) superava anche quella dei [[intelligent-tutoring|sistemi di tutoraggio intelligente]] costruiti appositamente (0,66), e quel divario è un segnale d'allarme: un trattamento che batte il tutoraggio costruito ad hoc è probabilmente un insieme di cose diverse che portano un'unica etichetta.

La prova è una domanda sola: un lettore competente potrebbe ricostruire il tuo intervento dalla sola sezione sui metodi e ottenere la stessa cosa?

## Decidi cosa la tua misura ti autorizza ad affermare

Nell'audit probatorio di O'Neill su 46 studi primari scelti a caso, 28 (61%) presentavano problemi di validità. Il disallineamento della variabile dipendente era il più comune (n = 15), seguito dal disallineamento della variabile indipendente (n = 11), da problemi di disegno sperimentale (n = 7), da problemi di estrazione dei dati (n = 6), dall'assenza di un gruppo di controllo (n = 6) e dall'assegnazione non casuale ai gruppi (n = 6). I risultati multidimensionali venivano regolarmente aggregati come se fossero intercambiabili, con punteggi dei test, qualità dei compiti a casa, [[motivation|motivazione]], [[self-efficacy|autoefficacia]], atteggiamenti e [[student-engagement|coinvolgimento]] compressi in un unico numero di «rendimento scolastico».

Due abitudini di rendicontazione lo prevengono. Dichiara quale costrutto misura lo strumento e che è stato validato per quella popolazione; [[self-report-measures]] mostra dove le misure basate sulla percezione divergono dal comportamento, e [[assessment-validity]] copre la validità di costrutto. Poi riporta un risultato che non dipenda dalla convinzione di chi impara riguardo all'aiuto. La prestazione immediata sul compito in condizioni di assistenza non è un [[learning-gains|guadagno di apprendimento]], e lo [[cognitive-offloading|scaricamento cognitivo]] è il meccanismo che più plausibilmente separa le due cose. La [[verification-quality-reliance-calibration-genai-2026|mini review del 2026 su 493 record e 14 studi prioritari]] ha trovato che nessuno misurava insieme il successo della verifica e la successiva decisione di affidamento rispetto a uno standard di qualità dell'output arbitrato in modo indipendente, e pochi guardavano oltre la prestazione immediata alla ritenzione differita o al [[transfer-of-learning|trasferimento]].

Dichiara il tetto esplicitamente nella discussione. Uno studio che ha misurato un quiz svolto con lo strumento aperto può sostenere un'affermazione sulla prestazione assistita. Non può sostenere un'affermazione su cosa hanno imparato gli studenti, e quella frase costa una riga.

## Riporta l'incertezza che la tua analisi ha davvero

Per le sintesi, riporta la gestione degli effetti dipendenti, la varianza tra studi, gli intervalli di previsione e la valutazione del bias di pubblicazione. L'I² da solo non basta. O'Neill ha trovato eterogeneità riportata come severa ovunque fosse indicata, dal 77,2% al 94,4% in 13 meta-analisi con 12 sopra l'80%, e mai risolta: nessuna analisi dei moderatori raggiungeva la dimensione minima di sottogruppo di dieci studi. Dodici meta-analisi trattavano le dimensioni dell'effetto dipendenti provenienti dallo stesso studio come indipendenti, il che gonfia l'evidenza apparente. Solo quattro riportavano la varianza tra studi (τ²) e solo due un intervallo di previsione, ed entrambi gli intervalli includevano lo zero. Il bias di pubblicazione non è stato valutato in modo valido da nessuna parte nell'insieme.

Le cifre di eterogeneità hanno bisogno del loro modello attaccato, perché I² dipende dalla precisione. [[limitations-in-aied-research|I limiti della ricerca sull'AI in educazione]] documenta una sintesi con I² = 82,98% sotto un modello a effetti fissi e 15,75% a effetti casuali. Un lettore a cui viene dato solo il primo numero non può capire quanto sia incoerente il corpus. Riporta τ² e un intervallo di previsione accanto, che è anche la convenzione che [[meta-analysis-systematic-review|la letteratura sulle revisioni]] richiede.

Poi sconta il tuo stesso numero di richiamo. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] hanno aggregato 1.840 dimensioni dell'effetto da 67 meta-analisi e hanno trovato che, una volta modellato il bias di pubblicazione, l'effetto medio scende a circa un terzo della mediana pubblicata (SMD = 0,196 contro 0,67), con un intervallo di previsione da -1.521 a +1,908. Quell'intervallo copre dal danno sostanziale al beneficio sostanziale per uno studio nuovo ipotetico. È il numero più utile dell'articolo e quello più probabilmente eliminato dall'abstract.

## Di' fin dove arriva l'affermazione

Equità e portata falliscono allo stesso modo: un effetto grande che significa meno di quanto sembri. Undici delle 14 meta-analisi esaminate non fissavano alcun confine di popolazione, per cui «gli studenti» andavano dai bambini ai medici in formazione. Un singolo corso, istituto, disciplina o paese non autorizza un'affermazione generale, e i risultati per uno strumento raramente si trasferiscono a un altro.

Tre spiegazioni rendono conto della maggior parte degli effetti grandi, e ciascuna è rendicontabile. La novità è una. Il tempo aggiuntivo sul compito è un'altra. La terza è una condizione di confronto che ha ricevuto la didattica abituale invece di un controllo attivo. Riporta cosa ha fatto davvero il controllo, quanto tempo ha speso ciascun braccio e quanto era nuovo lo strumento. Dichiara anche il confine di popolazione, perché gli effetti differiscono tra gruppi di studenti e un confine non dichiarato è ciò che permette a un unico numero aggregato di valere per tutti; [[differential-effects-across-learner-groups|Effetti differenziali tra gruppi di studenti]] espone la variazione.

Tratta lo strumento come un bersaglio mobile. I sistemi proprietari cambiano senza avviso, quindi un risultato è legato a una versione del modello, e il [[benchmark]] che entusiasmava in una release può non reggere nella successiva. Versione e data di accesso vanno nella sezione sui metodi per questa ragione, non solo per la riproducibilità.

## Valida i giudizi automatizzati

La [[ai-ed-evaluation|valutazione nell'AIED]] delega sempre più l'assegnazione dei punteggi ai modelli, il che rende la procedura di validazione parte del risultato e non un'appendice. Il resoconto di Khan Academy sulle metriche del suo [[intelligent-tutoring|tutor IA]] riporta che l'engagement cognitivo viene valutato da un giudice [[llm]] calibrato su esperti pedagogici umani con F1 0,83, e che i movimenti della metrica sono venuti da più di 40 esperimenti in produzione in cinque mesi invece che da valutazione offline ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] mostrano che il disaccordo tra umani e macchine sulla qualità delle [[formative-assessment|domande di pretest]] è sistematico e non casuale, e che l'operativizzazione della rubrica conta più del prompting che parte dalla motivazione.

L'accordo con i codificatori umani è una cosa separata dalla qualità, e riportarlo come se fosse qualità è un bersaglio per i revisori. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] hanno fatto giudicare a un esperto indipendente 855 insiemi di codici a coppie, in cieco rispetto alla fonte. L'accordo umano-LLM è risultato a una Jaccard media di 0,30 contro 0,52 per l'accordo umano-umano, mentre il verificatore in cieco preferiva la codifica umana e quella della macchina a tassi indistinguibili (51,5% contro 48,5%, p = 0,537). Riporta l'obiettivo di calibrazione, lo standard di riferimento e chi ha arbitrato il disaccordo. Sono queste tre voci che permettono a un lettore di decidere quanto peso può portare il punteggio automatizzato.

## Dichiara i costi e il tuo uso

Una revisione di tutti gli articoli della conferenza AIED 2025 ha trovato uno schema di adozione degli LLM senza dichiarazione: la maggior parte dei progetti usava LLM, e meno di una manciata riportava consumo di risorse o impronta di carbonio. Quell'articolo fornisce un metodo open source con strumenti di misura per hardware locale e cloud, più una formula per stimare il costo computazionale dei modelli di frontiera i cui conteggi di parametri non sono divulgati. Il suo argomento è che non riportare questi costi è di per sé una questione etica. Governance dei dati, consenso, accessibilità e appropriatezza culturale appartengono allo stesso paragrafo (voci RAISE; [[universal-design-for-learning|progettazione universale per l'apprendimento]], [[accessibility|accessibilità]]). [[equity-ethics-pedagogical-safety-research]] porta il trattamento più completo.

Il tuo uso dell'IA nel processo di ricerca ha bisogno della stessa dichiarazione. L'[[prisma-llm-ai-assisted-systematic-reviews-2026|analisi PRISMA-LLM di Zabaleta e Lin]] su 888 articoli sull'automazione delle revisioni mostra quanto questa rendicontazione sia disomogenea. Dal 2023, il 38,0% degli articoli su software e prodotti non riportava alcuna valutazione, contro il 9,3% degli articoli sugli LLM. La ricchezza media della rendicontazione era 6,3 per gli articoli sugli LLM e 3,3 per quelli su software e prodotti. L'84,1% dell'uso di LLM si basava su sistemi proprietari o ospitati, con solo il 4,9% a pesi aperti. Il loro quadro separa la dichiarazione dell'implementazione dalla valutazione sensibile alle conseguenze su cinque livelli di dichiarazione, che è un modello utilizzabile per descrivere cosa ha fatto uno strumento dentro una revisione.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] aggiungono il quadro dal lato dell'autore. Su 28 ricercatori post-laurea, 27 usavano GenAI in ideazione, revisione della letteratura, spiegazione, elaborazione dei dati, programmazione, [[writing-education|scrittura accademica]], revisione e traduzione. Calibravano l'uso rispetto alla posta in gioco e alle norme disciplinari. Le policy delle loro istituzioni riguardavano l'insegnamento e la valutazione piuttosto che la pratica di ricerca, il che lascia la decisione sulla rendicontazione all'autore.

## Pubblica i risultati nulli e controlla ogni citazione

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] hanno verificato 30 riferimenti fabbricati in 14 articoli, con il conteggio in un simposio tecnico che saliva da 3 nel 2025 a 17 nel 2026, cioè il 2,3% degli articoli di quegli atti. La stesura assistita da LLM rende economico produrre una citazione inventata plausibile, ed è per questo che il controllo deve avvenire prima della sottomissione e non dopo l'accettazione.

I contrappesi di quell'audit contano quando lo citi. La maggior parte dei riferimenti segnalati era innocua: 229 erano disallineamenti nei metadati ACM in cui il PDF era corretto, e 188 erano varianti bibliografiche valide. Il conteggio dei fabbricati è volutamente un limite inferiore, e la maggioranza innocua non è un errore di arrotondamento. Verifica ogni voce che non puoi controllare personalmente.

Riportare i risultati nulli e negativi è l'altra metà di una base probatoria onesta. Bartoš et al. hanno trovato forti evidenze di risultati nulli soppressi (ogni test di Egger p < 0,0001) e un'eterogeneità estrema (τ = 0,869), senza alcun sottogruppo per risultato, campo, livello o ruolo dell'IA che mostrasse guadagni coerenti. Non hanno trovato nemmeno differenze tra studi pubblicati prima e dopo gennaio 2023, il che indebolisce l'affermazione che gli strumenti generativi moderni producano specificamente guadagni.

## Cosa sbagliano i ricercatori su questo

**«Una dimensione dell'effetto è una proprietà della modalità.»** Non esiste un effetto dell'IA in educazione da riportare. Tutte tranne due delle meta-analisi esaminate definivano il trattamento con un nome di strumento, solo il 21% dei confronti esaminati aveva un trattamento definito, un controllo e una misura valida, e il g aggregato di 0,7 stava sopra il tutoraggio intelligente costruito ad hoc a 0,66. Una dimensione dell'effetto appartiene a un disegno, a una popolazione e a un'occasione di misurazione.

**«La media aggregata è quello che accadrà ai miei studenti.»** La media descrive l'insieme degli studi, e nulla in essa fissa una singola aula. La media corretta per il bias è SMD = 0,196 e il suo intervallo di previsione va da -1.521 a +1,908. L'eterogeneità riportata sta sopra l'80% in 12 delle 13 meta-analisi, e nessun sottogruppo nel pool più ampio mostrava guadagni coerenti. Un cambiamento a livello di studente non è identificabile da nessuno dei due numeri.

**«Un risultato nullo significa che lo strumento non funziona.»** Un nullo è un'affermazione su un disegno a una data precisione, e l'assenza di un effetto rilevabile in uno studio è un fatto su quello studio. Lo SMD = 0,196 corretto per il bias viene da una letteratura in cui ogni test di Egger era significativo, per cui la lettura difendibile del corpus è una media piccola e incerta. Nessun sottogruppo per risultato, campo, livello o ruolo dell'IA nel pool più ampio mostrava guadagni coerenti. Il problema documentato in questa letteratura è la soppressione.

**«Uno studio lo risolve.»** I tassi di base dicono il contrario. Il 61% degli studi primari verificati aveva problemi di validità, un corso o un istituto non autorizza un'affermazione generale, e un sistema proprietario è un bersaglio mobile legato a una versione del modello. Un singolo studio è un punto dati con un disegno attaccato.

**«Un accordo alto con i codificatori umani significa che il modello sta valutando la cosa giusta.»** L'accordo umano-LLM era 0,30 contro 0,52 per umano-umano, e il verificatore in cieco non riusciva a distinguere i due insiemi di codifica al 51,5% contro 48,5%. L'accordo misura la coerenza con un codificatore, e la qualità è una domanda separata che richiede uno standard di riferimento e un arbitro.

## Le obiezioni che sentirai

**«I revisori vogliono novità, non dettagli sul metodo.»** Le riviste si stanno muovendo nella direzione opposta. RAISE e TEP-AIED danno ai curatori un costrutto da richiedere, e la sottosezione Metodi di TEP-AIED è un punto d'ingresso a basso attrito. Il dettaglio sul metodo è ciò che converte un articolo non valutabile in uno citabile.

**«Non abbiamo lo spazio.»** I cinque livelli di dichiarazione sono livelli di rendicontazione e non livelli di rischio, per cui la profondità della valutazione può stare in una o due frasi. Versione, prompt e ruolo stanno in un paragrafo breve. Costo e governance stanno in una frase sui limiti.

**«Tutti lo riportano così.»** I numeri dicono che la norma è il problema: il 61% degli studi primari verificati con problemi di validità, 12 delle 13 meta-analisi sopra l'80% di eterogeneità, il 38,0% degli articoli su software e prodotti senza alcuna valutazione.

**«Il nostro strumento è proprietario, quindi non possiamo riportare il modello.»** Riporta versione, data di accesso, configurazione, i prompt che hai fornito, ruolo e salvaguardie. Se il fornitore non lo dice, quel vincolo appartiene ai limiti come confine dell'affermazione.

**«Riportare i nulli ci danneggerà.»** I nulli soppressi sono il meccanismo documentato dietro la media corretta per il bias di SMD = 0,196. Pubblicarli è ciò che tiene leggibile il tuo risultato positivo.

## Cosa fare questa settimana

**1.** Leggi il tuo abstract contro la tua sezione sui metodi e cancella ogni affermazione che il metodo non può sostenere. Una frase sul tetto della misura di solito basta.

**2.** Aggiungi il paragrafo di specifica: modello, versione, data di accesso, configurazione, prompt, ruolo, e chi ha progettato o rivisto l'output.

**3.** Tira fuori τ², l'intervallo di previsione e la valutazione del bias di pubblicazione dall'appendice e portali nei risultati, oppure di' chiaramente che non li hai calcolati.

**4.** Scrivi il confine di popolazione e la condizione di controllo nella dichiarazione del disegno, compreso quanto tempo ha speso ciascun braccio.

**5.** Verifica ogni riferimento che non hai letto personalmente, e controlla prima il campo degli autori.

## Dove andare dopo

[[research-methods-aied|Metodi di ricerca nell'IA in educazione]] copre le scelte di disegno che stanno sotto queste decisioni di rendicontazione, e [[limitations-in-aied-research|I limiti della ricerca sull'AI in educazione]] è il catalogo dei modi di fallire con i numeri attaccati. [[interpreting-and-applying-aied-research|Interpretare e applicare la ricerca sull'AI in educazione]] è il lato del lettore dello stesso problema, [[does-ai-help-students-learn|le evidenze sull'apprendimento durevole]] è ciò che la maggior parte di queste misure cerca di raggiungere, [[evaluating-ai-interventions-methods]] copre le misure e i disegni di confronto, e [[checking-whether-educational-ai-works]] è la versione più breve della domanda. Per le lacune che questa letteratura non ha colmato, vedi [[research-gaps-aied]].
