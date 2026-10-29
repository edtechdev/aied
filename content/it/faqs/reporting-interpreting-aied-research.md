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
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

# Quali sono le buone pratiche per riferire e interpretare la ricerca sull'IA nell'istruzione?

State scrivendo uno studio sull'IA nell'istruzione la cui affermazione sta già superando il suo disegno di ricerca, oppure ne state revisionando uno e decidendo se il numero nel titolo significa qualcosa. In entrambi i casi le stesse sei omissioni decidono l'esito: quale sistema di IA è stato effettivamente usato, a cosa era configurato per fare, quale ruolo pedagogico ha ricoperto, se esseri umani hanno progettato o revisionato il suo output, che cosa ha realmente catturato la misura dell'esito, e che cosa gli autori hanno fatto riguardo al bias, al costo e ai limiti. Un autore che le omette presenta uno studio che non può essere valutato; un revisore che non le cerca non può distinguere un intervento progettato da una demo di uno strumento riciclata. «Non valutabile» — non «supportato» e non «confutato» — è il verdetto onesto quando mancano.

La posta in gioco non è ipotetica. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] ha sottoposto ad audit 14 meta-analisi sottoposte a revisione paritaria che affermavano che l'IA migliora l'istruzione e ha trovato che *nessuna* forniva una base valida per le affermazioni che avanzava. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] hanno aggregato 1.840 dimensioni dell'effetto provenienti da 67 meta-analisi e hanno trovato che, una volta modellato il bias di pubblicazione, l'effetto medio scende a circa **un terzo** della mediana pubblicata (SMD = 0,196 contro 0,67). [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] hanno verificato **30 riferimenti fabbricati in 14 articoli di didattica dell'informatica**, tutti pubblicati nel 2025 o nel 2026 — un difetto che raggiunge i lettori proprio perché i revisori non possono verificare ogni voce di una lista di riferimenti. La disciplina nel riferire decide se la base di evidenze del campo sia utilizzabile del tutto. Per le scelte di progettazione che stanno sotto di essa si veda [[research-methods-aied|Research Methods in AI in Education]]; per il catalogo delle modalità di fallimento, [[limitations-in-aied-research|Limitations in AIEd Research]]. Per il lato del lettore — ciò che un praticante fa con un articolo una volta che esiste — si veda [[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]].

## La versione breve

Sei mosse decidono se la vostra affermazione sopravvive alla revisione:

1. **Descrivete il sistema di IA come un trattamento, non come un fornitore.** Modello, versione, configurazione, prompt, ruolo, e se esseri umani hanno progettato o revisionato l'output.
2. **Indicate la giustificazione pedagogica e il confronto attivo.** Il nome di un prodotto non è un metodo; il consueto modo di fare lezione non è un controllo equo.
3. **Fate in modo che la misura corrisponda all'affermazione.** Che cosa cattura lo strumento, la sua validazione per questa popolazione, e se l'esito è stato differito e senza aiuto.
4. **Validate ogni giudizio automatizzato.** Nominate lo standard di riferimento, l'obiettivo di calibrazione e chi ha arbitrato il disaccordo.
5. **Riportate l'incertezza dell'analisi, non solo la sua stima puntuale** — effetti dipendenti, τ², intervalli di predizione, dimensioni dei sottogruppi, valutazione del bias di pubblicazione.
6. **Riportate i contrappesi**: procedura etica e di governance, costo computazionale e ambientale, il vostro uso dell'IA, i risultati nulli, e solo citazioni che avete verificato.

## Decidete che cosa direte del sistema di IA — e scrivetelo in modo che qualcuno possa ricostruirlo

Questo è il controllo che la maggior parte delle proposte fallisce. Il framework RAISE (*Reporting AI Studies in Education*, Allison 2026) è una checklist di 30 voci distribuita su dieci domini tematici, e la sua affermazione diagnostica è specifica anziché retorica: le proposte omettono abitualmente quale modello è stato usato (GPT-4, Claude o un algoritmo personalizzato), come è stato configurato (parametri di prompt e fine-tuning), quale ruolo ha ricoperto (generatore di feedback, coautore, tutor, valutatore), e se attori umani hanno progettato o revisionato i suoi output. Questo lascia i revisori con quattro domande senza risposta — «Che cosa stava facendo esattamente l'IA?», «Era necessario?», «È replicabile?» e «Le affermazioni sull'apprendimento sono credibili?».

Va dalla giustificazione educativa attraverso la specifica a livello di API, l'interazione discente–IA, l'accessibilità e l'adeguatezza culturale, i partecipanti e l'ambientazione, il coinvolgimento umano, il disegno, l'etica, la trasparenza e la riproducibilità, fino ai limiti. Il suo **Ethics and Risk Matrix** complementare copre i rischi per l'[[agency]] dei discenti, l'[[equity-in-ai-education|equità]], la [[governance]] dei dati e la trasparenza algoritmica. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah e Gašević (2026)]] offrono un'alternativa semplificata, TEP-AIED, che piega Trasparenza, Etica e Pedagogia in un'unica struttura interdipendente, fornisce una tabella di linee guida mappata su sette sezioni dell'articolo, e chiede agli autori di aggiungere una sottosezione di metodo intitolata «Transparency, Ethics, and Pedagogy Considerations» — perché, secondo la loro lettura, RAISE è completo ma troppo granuloso per l'uso empirico di routine. La divulgazione si colloca sotto [[ai-use-disclosure]] ed è ciò che rende verificabili le affermazioni sulla [[privacy]] e l'[[ethics]].

## Decidete se il vostro trattamento è un metodo o un prodotto

La giustificazione educativa è il primo dominio di RAISE perché l'IA non è uno strumento neutrale: il valore dipende dall'allineamento tra il problema di apprendimento, una giustificazione teorica, e la mappatura dagli obiettivi alle misure degli esiti. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] ha trovato che tutte tranne due delle meta-analisi auditate definivano il trattamento come uno strumento — ChatGPT, IA generativa, «IA» — e che il nome di un prodotto non è una [[pedagogy]]; trattare l'esposizione a ChatGPT come un unico intervento è paragonabile al meta-analizzare gli effetti della «carta». [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] fanno la stessa argomentazione per gli studi primari: sottoponendo ad audit un sottoinsieme dei confronti dietro una meta-analisi di rilievo, hanno trovato che solo il **21% aveva un trattamento ben definito, un gruppo di controllo e una misura di apprendimento valida**, e la dimensione dell'effetto riportata (g = 0,7) superava quella dei [[intelligent-tutoring|sistemi di tutoraggio intelligente]] costruiti ad hoc (0,66) — un campanello d'allarme sul fatto che il «trattamento» era una salsa segreta eterogenea anziché un metodo nominato.

Il test: un lettore competente potrebbe ricostruire il vostro intervento partendo solo dalla sezione del metodo e ottenere la stessa cosa?

## Decidete che cosa misura il vostro strumento e che cosa può dire quindi l'affermazione

Nell'audit probatorio di O'Neill su 46 studi primari selezionati casualmente, **28 (61%) presentavano problemi di validità**, e la mancata corrispondenza della variabile dipendente era il più comune (n = 15), seguita dalla mancata corrispondenza della variabile indipendente (n = 11), problemi di disegno sperimentale (n = 7), problemi di estrazione dei dati (n = 6), assenza di un gruppo di controllo (n = 6) e assegnazione non casuale ai gruppi (n = 6). Esiti multidimensionali venivano abitualmente aggregati come se fossero intercambiabili — punteggi dei test, qualità dei compiti a casa, [[motivation]], [[self-efficacy]], atteggiamenti e [[student-engagement|coinvolgimento]] condensati in un unico numero di «rendimento accademico».

Due abitudini nel riferire prevengono questo. Indicate quale costrutto misura lo strumento e che è stato validato per quella popolazione: si veda [[self-report-measures]] per capire dove le misure basate sulla percezione divergono dal comportamento, e [[assessment-validity]] sulla validità di costrutto. Poi riportate un esito che non dipende dalla credenza del discente riguardo all'aiuto, perché la prestazione immediata sul compito sotto assistenza non è [[learning-gains|guadagno di apprendimento]]: [[verification-quality-reliance-calibration-genai-2026|una mini review del 2026 su 493 record e 14 studi prioritari]] ha trovato che nessuno misurava insieme il successo della verifica e la successiva decisione di affidamento rispetto a uno standard di qualità dell'output arbitrato in modo indipendente, e che pochi guardavano oltre la prestazione immediata fino alla ritenzione differita o al trasferimento. [[does-ai-help-students-learn|L'evidenza sull'apprendimento durevole]] resta contrastante, e il [[cognitive-offloading|delega cognitiva]] è il meccanismo che più plausibilmente separa le due cose.

## Decidete come sono stati validati i vostri giudizi automatizzati

La [[ai-ed-evaluation|valutazione in AIED]] delega sempre più spesso il punteggio ai modelli, il che rende la procedura di validazione parte del risultato anziché un'appendice. Il resoconto di Khan Academy sulle metriche del suo [[intelligent-tutoring|tutor IA]] riporta che il coinvolgimento cognitivo è valutato da un giudice [[llm]] calibrato contro esperti pedagogici umani a F1 0,83, e che i movimenti delle metriche sono venuti da più di 40 esperimenti in produzione in cinque mesi anziché da una valutazione offline ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] mostrano che il disaccordo uomo–macchina sulla qualità delle [[formative-assessment|domande di pretest]] è sistematico anziché casuale, e che l'operazionalizzazione della rubrica conta più del prompting che parte prima dalla giustificazione.

L'accordo con i codificatori umani non è qualità, e riportarlo come se lo fosse è un bersaglio per il revisore. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] hanno fatto giudicare da un esperto indipendente, in cieco rispetto alla fonte, 855 coppie di insiemi di codici, trovando che l'accordo uomo–LLM (Jaccard medio 0,30) era ben al di sotto dell'accordo uomo–uomo (0,52), mentre il verificatore in cieco preferiva la codifica umana e quella della macchina a tassi indistinguibili (51,5% contro 48,5%, p = 0,537). Riportate l'obiettivo di calibrazione, lo standard di riferimento, e chi lo ha arbitrato.

## Decidete se il confronto è equo e quanto lontano arriva l'affermazione

Equità e portata falliscono allo stesso modo: un effetto grande che significa meno di quanto appaia. 11 delle 14 meta-analisi auditate non fissavano alcun confine di popolazione, quindi «studenti» andava dai bambini fino ai medici in formazione; un singolo corso, istituzione, disciplina o paese non autorizza un'affermazione generale, e i risultati per uno strumento si trasferiscono raramente a un altro. Gli effetti di novità, il tempo extra sul compito, e una condizione di confronto che ha ricevuto un'istruzione consueta anziché un controllo attivo sono le spiegazioni abituali per un effetto grande — quindi riportate che cosa ha realmente fatto il controllo, quanto tempo ogni braccio ha trascorso, e quanto era nuovo lo strumento. Indicate anche il confine di popolazione, perché gli effetti differiscono tra gruppi di discenti e un confine non dichiarato è ciò che permette a un unico numero aggregato di stare al posto di tutti loro (si veda [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]]). Trattate anche lo strumento come un bersaglio mobile: i sistemi proprietari cambiano senza preavviso, quindi un risultato è vincolato a una versione del modello, e il [[benchmark]] che entusiasmava in una release potrebbe non reggere nella successiva.

## Decidete che cosa può sostenere la vostra analisi — e riportatene l'incertezza, non solo il titolo

Per le sintesi, riportate la gestione degli effetti dipendenti, la varianza tra studi, gli intervalli di predizione e la valutazione del bias di pubblicazione, non solo I². O'Neill ha trovato che l'eterogeneità riportata era grave ogni volta che era indicata (I² dal 77,2% al 94,4% in 13 meta-analisi, 12 delle quali sopra l'80%) e mai risolta (nessuna analisi dei moderatori raggiungeva la dimensione minima di sottogruppo di dieci studi), che 12 meta-analisi trattavano dimensioni dell'effetto dipendenti provenienti dallo stesso studio come indipendenti — gonfiando l'evidenza apparente — e che solo quattro riportavano la varianza tra studi (τ²) e solo due un intervallo di predizione, entrambi includenti lo zero. Il bias di pubblicazione non è stato valutato in modo valido in nessun caso.

Poiché I² dipende dalla precisione, una cifra di eterogeneità deve viaggiare con il suo modello: [[limitations-in-aied-research|Limitations in AIEd Research]] documenta una sintesi la cui eterogeneità è I² = 82,98% sotto un modello a effetti fissi e 15,75% sotto effetti casuali, quindi un lettore cui viene dato solo il primo numero non può dire quanto è incoerente il corpus. Riportate τ² e un intervallo di predizione accanto a esso; si veda [[meta-analysis-systematic-review|meta-analisi e revisione sistematica]] per le convenzioni dal lato della revisione, e scontate di conseguenza il numero nel titolo — la media corretta per il bias di Bartoš et al. era SMD = 0,196 con un intervallo di predizione che andava da −1.521 a +1.908, spaziando da un danno sostanziale a un beneficio sostanziale per un ipotetico nuovo studio.

## Decidete che cosa divulgate su etica, costo, governance — e sul vostro uso dell'IA

Una revisione di tutti gli articoli della conferenza AIED 2025 ha trovato un modello di «adozione di LLM senza divulgazione»: la maggior parte dei progetti usava LLM, ma meno di una manciata riportava il consumo di risorse o l'impronta di carbonio. Quell'articolo fornisce un metodo open-source con strumenti di misura per hardware locale e cloud, oltre a una formula per stimare la spesa computazionale dei modelli di frontiera il cui numero di parametri non è divulgato, e argomenta che non riportare questi costi è di per sé una preoccupazione etica. Aggiungete governance dei dati, consenso, e accessibilità/adeguatezza culturale (voci di RAISE; [[universal-design-for-learning]], [[accessibility]]) — si veda [[equity-ethics-pedagogical-safety-research]] per il trattamento più completo di questi obblighi.

Il vostro uso dell'IA nel processo di ricerca richiede la stessa divulgazione. [[prisma-llm-ai-assisted-systematic-reviews-2026|L'analisi PRISMA-LLM di Zabaleta e Lin]] su 888 articoli sull'automazione delle revisioni mostra quanto è diseguale questo riportare: dal 2023, il **38,0% degli articoli su software/prodotti non riportava alcuna valutazione** (contro il 9,3% degli articoli su LLM), la ricchezza media del riportare era 6,3 per gli articoli su LLM contro 3,3 per quelli su software/prodotti, e l'84,1% dell'uso di LLM si affidava a sistemi proprietari o ospitati, con solo il 4,9% a pesi aperti. Il loro framework separa la divulgazione dell'implementazione dalla valutazione sensibile alle conseguenze attraverso cinque livelli di divulgazione — un modello praticabile per descrivere che cosa ha fatto uno strumento in una revisione. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] aggiungono il quadro dal lato dell'autore: 27 di 28 ricercatori post-laurea hanno usato l'IA generativa nell'ideazione, nella revisione della letteratura, nella spiegazione, nell'elaborazione dei dati, nella programmazione, nella [[writing-education|scrittura accademica]], nell'editing e nella traduzione, calibrando l'uso in base alla posta in gioco e alle norme disciplinari, notando al contempo che le politiche istituzionali riguardano l'insegnamento e la valutazione anziché la pratica della ricerca.

## Decidete che fare dei risultati nulli e delle citazioni

Denny et al. hanno verificato 30 riferimenti fabbricati in 14 articoli, con il conteggio verificato in un simposio tecnico che sale da 3 nel 2025 a 17 nel 2026 (2,3% degli articoli di quell'anno negli atti) — e la stesura assistita da LLM rende economica da produrre una citazione inventata ma plausibile. I loro contrappesi contano quando citate quell'audit: la maggior parte dei riferimenti segnalati era benigna — 229 erano discrepanze nei metadati ACM dove il PDF era corretto e 188 erano varianti bibliografiche valide — quindi il conteggio delle fabbricazioni è un limite inferiore deliberato e la maggioranza benigna non è un errore di arrotondamento. Verificate ogni voce che non potete controllare personalmente.

Riportare i risultati nulli e negativi è l'altra faccia della stessa medaglia. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] hanno trovato evidenza forte di risultati nulli soppressi (ogni test di Egger p < ,0001) ed eterogeneità estrema (τ = 0,869), senza che alcun sottogruppo per esito, campo, livello o ruolo dell'IA mostrasse guadagni consistenti. Hanno anche trovato nessuna differenza tra studi pubblicati prima e dopo il gennaio 2023, il che mina l'affermazione che gli strumenti generativi moderni producano specificamente guadagni.

## Le debolezze documentate del campo, nei suoi numeri

I tassi di base rispetto ai quali un'affermazione dovrebbe essere pesata:

- **Validità:** 28 di 46 studi primari vagliati (61%) presentavano problemi di validità; solo il 21% dei confronti auditate aveva un trattamento ben definito, un gruppo di controllo e una misura valida.
- **Eterogeneità irrisolta:** I² dal 77,2% al 94,4% in 13 meta-analisi, 12 sopra l'80%, nessuna analisi dei moderatori che raggiunga il minimo di dieci studi, effetti dipendenti trattati come indipendenti in 12, e solo quattro sintesi che danno τ² contro solo due che danno un intervallo di predizione.
- **Bias di pubblicazione:** non valutato nelle 14 meta-analisi auditate; ogni test di Egger nel bacino più ampio era significativo (p < ,0001), con τ = 0,869.
- **Riferimenti:** 30 fabbricazioni in 14 articoli, 17 in un simposio del 2026 — 2,3% degli atti di quell'anno.

## Le obiezioni che sentirete

**«I revisori vogliono la novità, non il dettaglio sul metodo.»** Le riviste si stanno muovendo nella direzione opposta: RAISE e TEP-AIED danno agli editori un costrutto da richiedere, e la sottosezione di metodo di TEP-AIED è un punto di ingresso a basso attrito. Il dettaglio sul metodo è ciò che converte un articolo non valutabile in uno citabile.

**«Non abbiamo lo spazio.»** I cinque livelli di divulgazione sono livelli di riportare anziché livelli di rischio, quindi la profondità di valutazione della pipeline può essere una frase o due. Versione, prompt e ruolo stanno in un breve paragrafo; costo e governance stanno in una frase sui limiti.

**«Tutti lo riportano così.»** Questo è il risultato, non una difesa — 61% di studi primari vagliati con problemi di validità, 12 di 13 meta-analisi sopra l'80% di eterogeneità, 38,0% di articoli su software/prodotti senza alcuna valutazione. La norma è il difetto.

**«Il nostro strumento è proprietario, quindi non possiamo riportare il modello.»** Riportate versione, data di accesso, configurazione, i prompt che avete fornito, ruolo e protezioni. Se il fornitore non vuole dirlo, quel vincolo appartiene ai limiti come confine all'affermazione.

**«Riportare i nulli ci danneggerà.»** I nulli soppressi sono il meccanismo documentato dietro la media corretta per il bias SMD = 0,196; pubblicarli è ciò che mantiene leggibile il vostro risultato positivo.

## Checklist pre-sottomissione

- **Riportate:** il modello, la versione, la configurazione e i prompt, e il ruolo dell'IA nel disegno. **Controllate:** potreste ricostruire l'intervento partendo solo dalla sezione del metodo?
- **Riportate:** la giustificazione pedagogica e la condizione di confronto attiva. **Controllate:** il trattamento è un metodo nominato anziché il nome di un prodotto?
- **Riportate:** che cosa cattura ogni misura, la sua validazione per questa popolazione, e l'esito differito o senza aiuto. **Controllate:** l'affermazione nel titolo corrisponde alla variabile dipendente?
- **Riportate:** chi ha arbitrato i giudizi automatizzati, rispetto a quale standard di riferimento, con quale accordo. **Controllate:** l'accuratezza o l'accordo vengono usati come se fossero qualità?
- **Riportate:** la gestione degli effetti dipendenti, τ², gli intervalli di predizione, le dimensioni dei sottogruppi dei moderatori e la valutazione del bias di pubblicazione. **Controllate:** l'eterogeneità è citata con il suo modello e la sua precisione?
- **Riportate:** il coinvolgimento umano, la governance dei dati, il consenso, l'accessibilità e l'adeguatezza culturale, più il costo computazionale e ambientale. **Controllate:** le affermazioni etiche sono sostenute da una procedura descritta anziché da principi asseriti?
- **Riportate:** l'uso dell'IA dentro il processo di ricerca, attraverso tutti e cinque i livelli di divulgazione. **Controllate:** la pipeline di revisione o analisi è stata valutata del tutto?
- **Riportate:** i risultati nulli, negativi e smententi accanto a quelli positivi. **Controllate:** la dimensione dell'effetto è scontata per il probabile bias di pubblicazione?

## Che cosa alzerebbe realmente lo standard

I rimedi in questa letteratura sono istituzionali anziché individuali. O'Neill raccomanda la trasparenza obbligatoria dei dati per le meta-analisi — tabelle complete delle dimensioni dell'effetto, strutture di dipendenza, τ² e intervalli di predizione — più un più forte filtro da parte di revisori ed editor e una prassi di ritrazione funzionante, sulla base dell'argomento che questi fallimenti sono prodotti di un filtro fallito anziché errori isolati. PRISMA-LLM propone cinque livelli di divulgazione come livelli di riportare anziché livelli di rischio, cosicché la profondità di valutazione di una pipeline di revisione sia dichiarata apertamente; RAISE e TEP-AIED danno alle riviste un costrutto da richiedere nelle proposte. Per un terreno correlato si veda [[research-gaps-aied|le lacune notevoli nella letteratura di ricerca]], [[limitations-in-aied-research|Limitations in AIEd Research]], e [[evaluating-ai-interventions-methods|misure e metodi per valutare gli interventi legati all'IA]]. Un rimedio a basso costo sta agli autori: ogni pagina di articolo in questa base di conoscenze abbina ora uno studio a una sezione **Cosa significa per la pratica** e solitamente a una sezione **Limiti**, quindi scrivere l'articolo in modo che entrambe possano essere riempite onestamente — l'azione che un praticante potrebbe compiere, e il vincolo su di essa — è un'abitudine nel riferire tanto quanto una nello scrivere (si veda [[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]]).
