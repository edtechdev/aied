---
title: "Limiti nella ricerca AIEd"
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
translation_of: concepts/limitations-in-aied-research
source_updated: "2026-10-28T01:06:31-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Limiti nella ricerca AIEd** — le ricorrenti debolezze e i vincoli che condizionano quanta fiducia si può riporre nei risultati della ricerca sull'IA in educazione, e come i lettori dovrebbero interpretarli. Questi attraversano gli studi singoli: limiti metodologici (generalizzabilità, dimensione del campione, validità, autovalutazione), il problema della velocità (l'IA e i risultati invecchiano rapidamente mentre la pubblicazione tarda), limiti tra ricerca e pratica (riproducibilità, pratiche FAIR, strumenti proprietari) e uso debole della teoria. I limiti metodologici sono misurabili, non impressionistici: in una revisione critica di 80 studi HCI sul pensiero critico con l'IA, 42 (52%) non prevedevano alcun gruppo di controllo e la maggior parte dei restanti si basava sull'autovalutazione, quindi i risultati positivi del campo poggiano su progetti che non possono separare l'effetto dell'IA dalla riflessione ordinaria ([[critical-review-critical-thinking-hci-research-ai-2026]]). Anche la codifica degli esiti è disomogenea nello stesso modo: una revisione sistematica di 103 studi dell'istruzione superiore ha ordinato il proprio corpus in una tipologia degli esiti a quattro livelli e ha collocato il 56% di esso in un unico pattern condizionale, dove confidenza e motivazione crescevano senza un corrispondente guadagno in termini di competenza durevole ([[generative-ai-higher-education-systematic-review-2026]]). Riconoscere questi limiti è essenziale per leggere la letteratura in modo critico e per progettare studi più robusti.

## Domande da considerare

- Quanta fiducia riporreste in un titolo come "la tutorizzazione con l'IA aumenta l'apprendimento del 30%" se veniste a sapere che deriva da 30 studenti di un unico corso in un'unica istituzione? La pagina segnala generalizzabilità e campioni ridotti come limiti ricorrenti — cosa vorreste sapere prima di agire in base a un singolo risultato?
- Un limite sorprendente è il "problema della velocità": l'IA si evolve più rapidamente di quanto i risultati vengano pubblicati, quindi uno studio su una generazione di modelli può già descrivere un sistema obsoleto. Come dovrebbe cambiare la fiducia che riponete nella ricerca sull'IA in educazione?
- Molti studi si basano su atteggiamenti e usi [[self-report-measures|auto-riferiti]], che sono distorti: le persone sovrastimano le proprie competenze e sotto-segnalano l'uso improprio. Avete mai risposto a un'indagine sulle vostre capacità o sul vostro comportamento in modo non corrispondente alla realtà? Perché le misure basate sulla percezione divergono così spesso dalla performance oggettiva?
- La pagina osserva che framework familiari come la tassonomia di Bloom sono spesso fraintesi come scale rigide, e che persino teorie ampiamente usate come la teoria del [[cognitive-offloading|carico cognitivo]] sono state messe in discussione. Quando avete visto una teoria invocata come verità acquisita in un contesto in cui le sue stesse evidenze erano di fatto contestate?
- La maggior parte della ricerca sull'IA dipende da modelli proprietari e opachi, i cui dati e aggiornamenti non si possono ispezionare. Se non potete verificare esattamente quale modello abbia prodotto un risultato, quanta fiducia potete riporre nelle affermazioni che su di esso si fondano — e cosa renderebbe i risultati più riproducibili?
- Se siete un docente o un progettista senza tempo per leggere la ricerca primaria, come decidete quali affermazioni sull'IA siano sufficientemente affidabili da modificare la vostra pratica — dato che la letteratura è frammentata, provvisoria e scritta per i ricercatori?

## Introduzione

L'IA in educazione è un campo in rapida evoluzione ed eterogeneo, e la sua base di evidenze presenta un insieme caratteristico di limiti che ricercatori, professionisti e decisori politici dovrebbero soppesare nell'uso di qualsiasi risultato. Alcuni di essi sono condivisi con la più ampia letteratura delle scienze dell'apprendimento e della psicologia; altri sono amplificati o resi unici dalla natura stessa dell'IA. Questa pagina li organizza in quattro aree trasversali.

## Limiti metodologici

La pagina sui [[research-methods-aied|metodi di ricerca]] della knowledge base descrive punti di forza e limiti di ciascun progetto. Diversi limiti ricorrono tra i progetti e meritano particolare attenzione:

- **Generalizzabilità.** I risultati di un singolo corso, istituzione, disciplina o contesto nazionale potrebbero non trasferirsi. Campioni ridotti, di convenienza o di una sola istituzione limitano la validità esterna; i risultati relativi a uno strumento di IA raramente si estendono a uno strumento o a un contesto diverso.

- **I confronti tra convinzioni in diversi paesi comportano un rischio di misura.** Un'indagine su 1.405 insegnanti della K-12 in cinque paesi ha usato la traduzione automatica senza retro-traduzione o test di invarianza di misura e ha misurato la preoccupazione per plagio e creatività con item singoli, quindi i suoi contrasti tra paesi non possono essere letti come costrutti equivalenti ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).
- **Il rigore a livello di sintesi è un asse separato dal rigore degli studi primari.** Una meta-analisi può soddisfare i propri criteri di inclusione e tuttavia aggregare studi che differiscono per progetto, fedeltà di implementazione e misura degli esiti senza ponderare nulla di tutto ciò: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan e colleghi (2026)]] affermano esplicitamente di non aver usato alcuno strumento formale di valutazione della qualità e di aver trattato i criteri di inclusione come soglia di rigore, quindi uno studio quasi-sperimentale e uno randomizzato hanno contribuito in pari misura alla stima aggregata per le discipline [[stem-education|STEM]]. La stessa revisione mostra un rischio di resoconto collegato: la sua eterogeneità è riportata come I² = 82,98% in un modello a effetti fissi e I² = 15,75% in un modello a effetti casuali, il che significa che un lettore che estrae un singolo dato di eterogeneità senza il suo modello non può dire quanto sia incoerente il corpus. Valutate una sintesi su come ha gestito le dimensioni degli effetti dipendenti, la qualità e l'eterogeneità, non solo sul fatto che abbia seguito un protocollo di ricerca.

- **Il progetto di reperimento determina i numeri principali di una sintesi.** In una scoping review di 195 studi sulla formazione degli insegnanti, la competenza digitale e [[tpack|TPACK]] erano descrittori di ricerca espliciti mentre la progettazione didattica e la valutazione non avevano equivalenti, quindi il 46,5% e l'1,9% riportati descrivono il corpus reperito piuttosto che il campo ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández et al. (2026)]]).
- **Campioni di piccole dimensioni.** Molti studi AIED sono sotto-potenziati — troppo pochi partecipanti per rilevare in modo affidabile effetti significativi o per sostenere le affermazioni forti che a volte se ne traggono.
- **I punteggi finali possono nascondere proprio l'oggetto dello studio.** In una revisione PRISMA di 103 studi sull'istruzione [[higher-ed|superiore]], il 56% riportava guadagni condizionati dall'impalcatura didattica o dalla verifica, e differenze nulle nei voti accompagnavano spesso cambiamenti reali nel processo — più debugging, più cicli di controllo — quindi i voti da soli non possono dire se l'[[generative-ai|IA generativa]] abbia rafforzato o svuotato la pratica ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi e Samaha (2026)]]).

- **Il progetto di validazione può fabbricare il numero principale.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara e Halloluwa (2026)]] hanno messo a benchmark quindici modelli sulla predizione della familiarità basata su EEG e mostrano che la standard stratified cross-validation consente perdita di informazione temporale e riporta un F1 fino a 0,9853, mentre la Group K-Fold validation indipendente dai trial fa scendere il picco a 0,6038 F1 — ancora al di sopra del caso, ma ben lontano dal risultato citato.
- **I benchmark possono fornire loro gli errori che riportano.** La rivalutazione di esperti di 250 item di fisica rifiutati ha attribuito 238 (95,20%) a errori del benchmark o dei valutatori e solo 12 (4,80%) a errori genuini del modello, quindi il tasso di errore misurato di un modello non può scendere al di sotto del tasso di difettosità dello strumento ([[frontier-models-physics-benchmark-audit-2026|Ansari et al. (2026)]]).
- **Validità e misura.** La [[assessment-validity|validità di costrutto]] è spesso sottile: i proxy di "apprendimento", "[[student-engagement|coinvolgimento]]" o "alfabetizzazione" variano ampiamente, e gli strumenti non sempre sono validati per la popolazione o il costrutto studiati. L'accuratezza nei [[benchmark|benchmark]] non equivale all'efficacia educativa.
- **Autovalutazione e dati di indagine.** Una larga parte del corpus si basa su atteggiamenti, motivazione e usi auto-riferiti. L'autovalutazione è soggetta a distorsione — gli intervistati sovrastimano le proprie competenze, sotto-segnalano l'[[ai-misuse-learning-harm|uso improprio]] e giudicano male il proprio comportamento — quindi le misure basate sulla percezione divergono spesso dalla performance oggettiva (si vedano [[ai-literacy-assessment-misalignment]] e [[educational-measurement]]).
- **Contesto e resoconto della validazione possono essere quantificati attraverso una letteratura.** Una revisione PRISMA-ScR di 421 studi sul NLP applicato ai commenti sulla valutazione della didattica ha trovato il paese non risolto in 221 studi, ambiti di singola istituzione in 232 dei 284 casi risolti (81,7%), validazione esterna in 33 (7,8%) e accordo tra annotatori in 54 (12,8%) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher e da Silva (2026)]]).
- **La ricchezza del resoconto è misurabile, e il tipo di metodo la predice.** In 888 articoli sull'automazione delle revisioni, il 38,0% degli articoli su software/prodotti dal 2023 in poi non riportava alcuna valutazione, contro il 9,3% degli articoli su LLM, e il 52% dei 118 articoli su LLM a esiti solo positivi segnalava comunque una soglia di affidabilità non raggiunta — il modello alla base dei cinque livelli di disclosure di PRISMA-LLM ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta e Lin (2026)]]).
- **Standardizzare all'interno di ciascun dataset può nascondere un'errata rappresentazione della dispersione.** Quando coorti educative sintetiche sono state standardizzate secondo la propria dispersione, il fatto che la loro struttura settimanale variasse da 2,6 a 4,9 volte meno rispetto alle coorti reali è diventato invisibile nelle statistiche riportate — una pre-elaborazione di routine, nelle parole degli autori, non un timore ipotetico ([[synthetic-educational-data-structural-fidelity-2026|Inoue e Yasutake (2026)]]).

- **Le etichette generate dai modelli non sono ground truth.** Quando le etichette che addestrano o valutano un sistema sono esse stesse prodotte da modelli linguistici, l'accordo tra annotatori non può stabilire la validità: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] non hanno mai validato le loro annotazioni di asserzioni contro etichette d'oro umane, e i 49 classificatori a encoder che rilasciano ereditano quella provenienza e potrebbero non essere validi laddove le applicazioni differiscano in dimensioni significative. Il loro schema ha anche reso nettamente peggio del classificatore fine-tuned addestrato su dati annotati da esperti (macro-F1 0,673 contro 0,76), il che rende i corpus etichettati da esperti ancora degni di essere costruiti quando è richiesta un'elevata confidenza.

## Il problema della velocità: l'IA si evolve più rapidamente dei risultati

L'IA cambia continuamente, e le conclusioni tratte da un qualsiasi modello o sistema possono diventare rapidamente **datate**. Uno studio su una generazione di [[llm]] può non descrivere la successiva; i punteggi nei benchmark, la qualità della tutorizzazione e persino l'utilità pratica di un risultato cambiano con il migliorare dei modelli. A ciò si aggiunge il fatto che il **processo di pubblicazione è lento** — dalla progettazione dello studio alla pubblicazione peer-reviewed può passare un anno o più — quindi un risultato pubblicato può già descrivere un sistema obsoleto. Revisori e lettori dovrebbero quindi trattare i risultati AIED come affermazioni provvisorie e sensibili alla data, piuttosto che come verità stabili, e preferire lavori recenti, orientati alla replica ed espliciti sulla versione.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni e Fryer (2026)]] rendono concreta la conseguenza per una letteratura specifica: poiché i sistemi basati su [[rag|RAG]] sono diventati pubblicamente disponibili solo nel novembre 2023, sostengono che i risultati pre-2023 sull'[[intelligent-tutoring|intelligent tutoring]] — basati su sistemi NLP rule-based, a corrispondenza di parole chiave o euristici che hanno poca somiglianza funzionale con gli attuali grandi modelli linguistici — dovrebbero essere trattati come contesto storico piuttosto che come evidenze direttamente comparabili, e riportano che la loro revisione non ha trovato alcun RCT pubblicato che esaminasse un chatbot IA basato su RAG nell'educazione universitaria per un intero semestre accademico. L'implicazione è che le domande fondamentali su come l'IA generativa influenzi l'apprendimento potrebbero dover essere riproposte per ciascuna nuova generazione di modelli, piuttosto che chiuse dall'aggregazione di risultati più vecchi.

## Limiti nella pratica della ricerca

Diversi limiti riguardano la condotta e l'infrastruttura della ricerca stessa:

- **Mancanza di riproducibilità.** Gli studi spesso non riportano dettagli sufficienti (prompt, versioni dei modelli, iperparametri, dati, codice di analisi) perché altri possano riprodurre o verificare i risultati — un problema particolare dato quanto l'output degli LLM sia sensibile a prompt e impostazioni.
- **Pratiche di ricerca FAIR.** La pratica aperta e riproducibile — dati e codice **t**rovabili, **a**ccessibili, **i**nteroperabili, **r**iutilizzabili, pre-registrazione e benchmark condivisi — è adottata in modo disomogeneo nella ricerca AIED. La debole adesione ai principi FAIR rende più difficile riutilizzare, confrontare e sviluppare gli studi.
- **Strumenti e modelli proprietari.** Molta ricerca dipende da [[ai-technologies|sistemi di IA]] chiusi e proprietari il cui comportamento interno, i dati di addestramento e gli aggiornamenti dei modelli sono opachi e possono cambiare senza preavviso. Questo limita la riproducibilità, rende impossibile la replica esatta e può legare i risultati alla roadmap di un fornitore. Solleva inoltre interrogativi sull'indipendenza della valutazione (si veda [[ai-ed-evaluation]]).

## Uso debole o limitato della teoria

Una critica ricorrente è che molti articoli empirici hanno un **inquadramento teorico limitato o superato**. I ricercatori possono:

- **Adottare teorie in modo acritico.** I framework vengono presi a prestito perché familiari, senza impegnarsi pienamente con le loro assunzioni, il loro ambito o la loro base di evidenze.
- **Fraintendere i framework come sequenze fisse.** Diversi framework ampiamente usati sono trattati come scale ordinate che chi apprende deve risalire da uno stadio "basso" a uno "alto" — ma le evidenze non supportano l'idea di iniziare sempre dal basso. Per esempio:
    - La **tassonomia di Bloom** è spesso letta come una gerarchia rigida (ricordo → applicazione → valutazione), eppure gli obiettivi di ordine superiore non richiedono di esercitare prima quelli di ordine inferiore; i compiti possono essere progettati per coinvolgere la valutazione o la creazione fin dall'inizio (si veda [[cross-dataset-bloom-question-classification]]).
    - Il modello **ADDIE** e altri modelli di progettazione didattica sono talvolta trattati come fasi lineari rigide piuttosto che come le euristiche iterative e flessibili di pianificazione che sono pensati per essere (si veda [[learning-design]]).
- **Trascurare teorie contestate.** Alcune teorie ampiamente usate nella ricerca AIEd sono esse stesse state messe in discussione. La **teoria del carico cognitivo**, per esempio, è stata criticata e le sue affermazioni empiriche confutate o contestate in studi precedenti, eppure continua a essere invocata come fondamento acquisito in nuovi lavori AIED.

L'implicazione non è che teorie e framework siano inutili, ma che dovrebbero essere usati con attenzione alla loro effettiva base di evidenze, al loro ambito previsto e alle critiche note — piuttosto che come [[scaffolding|impalcature]] auto-evidenti o come sequenze procedurali rigide.

## La crisi dell'evidenza meta-analitica

Un crescente corpo di meta-ricerca — revisioni che scrutano le revisioni — sostiene che le affermazioni principali del campo circa i guadagni di apprendimento guidati dall'IA poggino su una base di evidenze assai più debole di quanto appaia. Tre critiche complementari lo dimostrano con forza insolita:

- **La distorsione da sintesi positiva è grave e quantificabile.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]], in una meta-meta-analisi a livello di studio di 1.840 dimensioni di effetto tratte da 67 meta-analisi, hanno trovato forti evidenze di bias di pubblicazione (tutti i test di Egger *p* < 0,0001) ed estrema eterogeneità tra gli studi (τ = 0,869). Gli effetti corretti per il bias di pubblicazione erano circa **un terzo** della grandezza comunemente riportata (SMD = 0,196 contro una mediana di 0,67 nella letteratura pubblicata), con un intervallo di predizione compreso tra −1,521 e +1,908 — da un danno rilevante a un beneficio rilevante. Nessun sottogruppo per esito, campo, livello o ruolo dell'IA ha mostrato guadagni consistenti, e non vi era differenza tra studi pre- e post-2023. Il loro verdetto: le affermazioni ampie su guadagni di apprendimento generalizzati sono premature.
- **I metodi meta-analitici sono sistematicamente applicati male.** L'audit forense di [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] su 14 meta-analisi AIED ad alto impatto ha rilevato che *nessuna* forniva una base valida per le proprie affermazioni: nessuna aveva un costrutto coerente (trattando lo strumento "ChatGPT" come se fosse un singolo intervento e aggregando punteggi ai test, motivazione, [[self-efficacy]] e atteggiamenti in un unico numero di "[[learning-gains|riuscita accademica]]"); l'eterogeneità riportata era grave, con I² compresa tra 77,2% e 94,4% nelle 13 meta-analisi che la riportavano e 12 di queste 13 sopra l'80%, e non fu mai risolta (nessuna rispettava la dimensione minima di sottogruppo di dieci studi, cinque si basavano su sottogruppi di un solo studio e altre tre su sottogruppi di due); dodici trattavano come indipendenti le dimensioni di effetto dipendenti provenienti dallo stesso studio, gonfiando l'evidenza apparente; e nessuna valutava validamente il bias di pubblicazione (metriche di fail-safe N screditate e test di Egger mal applicati erano comuni). Poiché I² dipende dalla precisione, non può da sola stabilire quanto siano distanti i veri effetti, e il resoconto che lo mostrerebbe era in gran parte assente: solo quattro meta-analisi riportavano la varianza tra studi (τ²) e solo due un intervallo di predizione, che in entrambi i casi includeva lo zero. Una maggioranza (61%) degli studi primari controllati casualmente era problematica, e uno studio con riferimenti fabbricati era incluso in sei delle 14 meta-analisi.
- **Il "trattamento" è una scatola nera.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] ripropongono il dibattito media/metodi per sostenere che "ChatGPT" è uno strumento, non un metodo — chiedersi se "migliori l'apprendimento" è un non sequitur. Sottoponendo ad audit un sottoinsieme degli studi alla base della meta-analisi di Deng et al. (2025), hanno trovato che solo il 21% dei confronti aveva un trattamento ben definito, un gruppo di controllo *e* una misura valida dell'apprendimento; le dimensioni di effetto riportate (g = 0,7) superavano persino quelle dei [[intelligent-tutoring|sistemi di tutoraggio intelligente]] progettati appositamente (0,66), un segnale d'allarme che il "trattamento" era un eterogeneo "ingrediente segreto".

La convergenza di queste tre critiche indipendenti è essa stessa un'evidenza: attraverso metodi, corpora e inquadramenti diversi, giungono alla stessa conclusione — che le dimensioni di effetto positive nella ricerca AIED, specialmente delle prime meta-analisi, riflettono probabilmente **bias di pubblicazione, incoerenza di costrutto e scorciatoie metodologiche** tanto quanto (o più di) genuini guadagni di apprendimento. Questo non significa che gli strumenti di IA non abbiano valore educativo; significa piuttosto che l'evidenza a livello di campo per il loro valore è attualmente gonfiata e deve essere letta di conseguenza. Questo sposta inoltre la responsabilità sulla [[meta-analysis-systematic-review|qualità della sintesi]]: una meta-analisi è affidabile quanto la coerenza dei suoi costrutti, l'indipendenza delle sue dimensioni di effetto, l'adeguatezza della sua analisi dei moderatori e dell'eterogeneità, e la validità della sua valutazione del bias di pubblicazione — ciascuno dei quali le critiche mostrano essere regolarmente violato.

## Leggere criticamente la letteratura AIED

Nel complesso, questi limiti suggeriscono una lettura critica e multi-segnale della ricerca AIED: verificate se un risultato si generalizza ed è adeguatamente potenziato; verificate come sono stati misurati i costrutti (e se le affermazioni poggiano sull'autovalutazione); preferite lavori recenti, espliciti sulla versione e riproducibili; e interrogate l'inquadramento teorico anziché dare per scontati i framework familiari. Questo è il complemento di una scelta rigorosa del [[research-methods-aied|metodo]] e dell'[[ai-ed-evaluation|valutazione]]: buoni metodi e buona valutazione sono necessari, ma è la lettura attenta ai limiti a trasformare le evidenze in decisioni difendibili.

## Dalla ricerca alla pratica

Un ulteriore limite pratico è la **sfida di applicare la ricerca all'[[teacher-role|insegnamento]] e alla progettazione didattica**. I professionisti — docenti, [[stakeholders|progettisti didattici]] e responsabili dello sviluppo della faculty — spesso non hanno il tempo o le competenze specialistiche per leggere, valutare e tradurre la ricerca primaria in decisioni concrete per la classe. La letteratura è ampia, frammentata e scritta per i ricercatori; i risultati sono riportati con dettaglio statistico e metodologico non immediatamente azionabile; e poiché le affermazioni sono provvisorie (si veda il problema della velocità sopra), un professionista non può semplicemente prendere per buono un singolo studio. Questo crea un divario tra ciò che le evidenze supportano e ciò che raggiunge effettivamente la [[pedagogy|pratica didattica]].

Lo scopo di questa knowledge base è contribuire a colmare quel divario — rendere più facile restare aggiornati, interpretare e applicare la ricerca sull'IA in educazione alla pratica — curando risultati ad accesso aperto in sintesi strutturate e accessibili, collegando i lavori correlati attraverso le [[ai-education|pagine concettuali]], e segnalando i limiti che i lettori dovrebbero soppesare. Si propone di sostenere la pratica informata dalle evidenze nell'insegnamento e nella progettazione didattica, e così facendo anche di portare alla luce lacune e domande che possono informare nuova ricerca e sviluppo. Comprendere i limiti della ricerca non è quindi un fine in sé: è ciò che permette ai professionisti di applicare i risultati in modo appropriato e ai ricercatori di progettare studi più robusti che servano meglio la pratica.

## Concetti collegati

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied]] — Theory Development in AI in Education

## Articoli collegati

- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — AI chatbots in higher education: comparing expectations to evidence (Thoeni & Fryer 2026)
- [[ground-truth-reliability-aied]] — Reliability and validity of ground truth in evaluation
- [[ai-literacy-assessment-misalignment]] — Self-reported vs. performance-based AI literacy
- [[machines-misread-pedagogical-quality]] — Why machines misread pedagogical quality
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Critical limits of AI tutors and theory use
- [[cross-dataset-bloom-question-classification]] — Bloom's taxonomy and question classification
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment: EEG-Based Familiarity Prediction
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause (media-comparison critique)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analysis: publication-bias-adjusted AI effects ~1/3 of reported size
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews
- [[frontier-models-physics-benchmark-audit-2026]] — How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inclusion criteria used as the rigor threshold, and a heterogeneity figure that changes with the model (Doğan et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — A cluster-randomized classroom trial whose performance outcome did not reach significance (Rücker & Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[digital-competence-ai-responsive-pedagogy-2026]] — Scoping review of 195 teacher-education studies where search-string design shapes the reported frequencies
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Cross-national K-12 teacher survey: machine-translated items, single-item concern measures, no invariance testing
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Systematic review of 103 GenAI higher-education studies: 56% conditional gains, grades masking process change (Hawi & Samaha 2026)
