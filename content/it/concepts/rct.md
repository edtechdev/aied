---
title: "ECA (Studio Clinico Randomizzato Controllato)"
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Randomized controlled trial (RCT)** — un disegno di ricerca in cui i partecipanti sono assegnati casualmente a una condizione di trattamento o a una condizione di controllo per stimare l'effetto causale di un intervento su un esito. Nell'[[ai-education|IA nell'educazione]], gli RCT sono lo standard di riferimento (gold standard) per stabilire se uno strumento di IA o un approccio [[pedagogy|pedagogico]] *causi* [[learning-gains|guadagni di apprendimento]], cambiamenti nel coinvolgimento o altri esiti, anziché limitarsi a correlare con essi.

## Domande da considerare

- Se una scuola ti dice che "gli studenti che hanno usato lo strumento di IA hanno ottenuto punteggi più alti", perché questo potrebbe comunque non dimostrare che il guadagno sia stato causato dallo strumento — anche se la differenza è grande?
- La randomizzazione bilancia i confondenti noti *e ignoti* tra i gruppi. Prima di proseguire nella lettura: cosa ottiene l'assegnazione casuale che un semplice confronto tra due classi intatte non può ottenere, per quanto ben appaiate possano apparire?
- La pagina definisce l'RCT lo standard di riferimento ma elenca costi reali: contesti artificiali, un'IA in rapida evoluzione che invecchia le sperimentazioni, campioni piccoli e sotto-dimensionati, e vincoli [[ethics|etici]] sul negare strumenti utili. Quale di questi compromessi pensi sia più spesso ignorato nei titoli della ricerca sull'educazione?
- Un RCT con 1.174 partecipanti ha rilevato che la [[generative-ai|GenAI]] ha colmato circa tre quarti di un divario di produttività legato all'educazione. Ma un RCT ben condotto può comunque riguardare un compito ristretto in un contesto artificioso. Cosa dovresti verificare riguardo alla *misura dell'esito* prima di fidarti dell'affermazione causale?
- Considera direttamente il problema etico: se avessi un motivo fondato per credere che un [[intelligent-tutoring|tutor di IA]] aiuti gli studenti a imparare, è difendibile negarlo casualmente a metà di una classe per un semestre? Come progetteresti uno studio eticamente corretto che isoli comunque la causa?

## Introduzione

La randomizzazione è ciò che distingue un RCT da altri disegni: assegnando casualmente gli studenti alle condizioni, un RCT bilancia i confondenti noti e ignoti tra i gruppi, così che ogni differenza osservata negli esiti può essere attribuita all'intervento con un'elevata validità interna.

### Come gli RCT compaiono nella ricerca

- **Micro-RCT come risposta alla tecnologia in rapida evoluzione:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] sostengono che le sperimentazioni su larga scala convenzionali non riescono a tenere il passo delle [[edtech-platform|piattaforme]] di tutoring che cambiano in modo rilevante durante uno studio, e impiegano micro-randomized controlled trial condotti dagli [[teacher-role|insegnanti]] nelle scuole secondarie inglesi (644 studenti su 929 che hanno completato il post-test, g = 0,33) per mantenere ripetibile la stima causale. I compromessi sono dichiarati nel loro stesso disegno: 30,7% di abbandono, esiti allineati al [[curriculum-design|curricolo]] anziché standardizzati in modo indipendente, e solo quattro settimane di follow-up.
- **Affermazioni di efficacia causale:** gli RCT nell'AIED verificano se un tutor di IA, uno strumento o un trattamento pedagogico migliori gli esiti. [[generative-ai-education-productivity-gaps|Un esperimento randomizzato sull'IA generativa]] con 1.174 partecipanti ha rilevato che la GenAI riduce sensibilmente i divari di produttività legati all'educazione, colmando circa tre quarti della differenza iniziale di rendimento — una chiara stima causale dell'effetto dell'IA.
- **Confronto con lo standard di riferimento:** la pagina sui [[research-methods-aied|metodi di ricerca]] colloca gli RCT come il disegno più forte per la validità interna, notandone al contempo i compromessi — costo, condizioni artificiali, IA in rapida evoluzione, campioni piccoli e sotto-dimensionati, e limiti etici nel negare strumenti potenzialmente utili.

- **Una sperimentazione progettata per l'equivalenza, non per la differenza.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]] hanno randomizzato 2.383 adulti assegnandoli a tutoring con IA, tutoring umano dal vivo o un controllo video, hanno redatto nuovi item GRE con ex sviluppatori di test ETS e Kaplan per tenere fuori la contaminazione da test pubblicati, hanno controbilanciato le due forme e hanno verificato l'equivalenza con due test unilaterali contro ±0,25 DS anziché una differenza: le scelte di disegno che rendono interpretabile un risultato di "nessuna differenza significativa".
- **Randomizzazione per gruppi, bassa adozione e cosa significa allora una stima intent-to-treat.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] hanno randomizzato 2.379 studenti universitari in 13 blocchi assegnando gli *insegnanti* anziché gli studenti, così che ogni studente di una sezione ereditava la condizione del proprio insegnante — il disegno che rende fattibile una sperimentazione di dispiegamento su più sezioni, e quello che genera i problemi di inferenza che lo studio poi documenta. Solo circa il 15% degli studenti delle sezioni trattate ha effettivamente usato lo strumento, quindi gli effetti riportati stimano l'*offerta* di accesso anziché l'uso; gli autori leggono l'intervento come l'uso più ampio dell'IA che la sua introduzione ha indotto, e trattano le sessioni individuali come una questione a parte. Poiché il trattamento era assegnato a livello di insegnante, l'inferenza poggia su 34 cluster — un contesto in cui gli errori standard robusti al cluster sovrastimano la precisione — quindi lo studio riporta insieme a essi l'inferenza per randomizzazione e ne trova robuste le conclusioni. I due effetti principali, un calo di 0,37 DS nei voti finali nel campione con corrispondenza esatta e un calo di 0,90 DS nella partecipazione registrata sulla piattaforma in entrambi i campioni, sono conseguenze a livello di sezione che una randomizzazione per studente dello stesso strumento non avrebbe potuto isolare senza contaminazione tra compagni trattati e di controllo.
- **L'adoione delimita ciò che una sperimentazione può verificare, e il supporto al coinvolgimento non è dosaggio.** [[access-not-enough-ai-tutoring-2026|Robinson et al. (2026)]] hanno condotto due RCT su piattaforme di lettura in cui solo il 60,7% e il 53,3% degli studenti di controllo ha mai usato la piattaforma; un tutor per il coinvolgimento ha aumentato del 71–80% le storie lette senza però produrre alcun guadagno di rendimento, in linea con i 2–5 minuti settimanali raggiunti.
- **Una scala che converte i nulli in evidenza.** [[mata-sustaining-ai-enabled-student-support-2026|Mata et al. (2026)]] hanno seguito 8.708 studenti su otto semestri con una potenza tale da rilevare effetti di 0,05 DS e hanno trovato ampi movimenti immediati su compiti binari datati — 34 punti percentuali in più di iscrizioni entro il 16 agosto dopo un singolo promemoria — mentre rendimento accademico, persistenza e laurea non mostravano alcun effetto rilevabile. La scala è la lezione di disegno: a questo N i nulli accademici sono risultati precisi anziché mancati rilevamenti, ed è ciò che consente la conclusione che uno strumento di comunicazione muove ciò che può affrontare e non gli esiti di apprendimento cumulativi.
- **Una media nulla può mascherare un'eterogeneità che si compensa.** Un RCT pre-registrato che ha randomizzato 538 insegnanti in 24 scuole turche a livello di dipartimento scolastico ha rilevato che il rendimento è sceso di 0,129 DS tra gli insegnanti al di sotto della mediana mentre è salito di 0,054 tra quelli al di sopra, e la motivazione è scesa di 0,111 DS, con un esito compresso dal soffitto (media di controllo 89,2/100) che limitava la potenza.([[genai-can-harm-teaching-rct-2026|Sungu, Lira & Duckworth (2026)]])
- **Pre-registrazione che fissa la domanda e l'effetto rilevabile.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] hanno registrato entrambe le sperimentazioni sui corsi presso il Registry of Efficacy and Effectiveness Studies, impegnandosi in anticipo sulla stima intent-to-treat e su una dimensione minima dell'effetto rilevabile di circa 0,157, e hanno randomizzato gli studenti consenzienti ogni trimestre con una seconda ondata in fase di add/drop così che chi si iscriveva in ritardo entrasse nel disegno anziché nel campione di analisi predefinito. Mettendo insieme 2.483 studenti su due corsi, l'effetto si colloca alla soglia A/B (quattro punti percentuali) mentre il cambiamento aggregato nel voto numerico non sopravvive alla correzione per confronti multipli — un promemoria che un esito primario registrato disciplina quale risultato, tra diversi correlati, viene creduto.
- **Randomizzazione all'interno di sezioni intatte, con una baseline pre-trattamento.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni & Fryer (2026)]] hanno randomizzato 454 studenti universitari all'interno di tre sezioni di marketing intatte dopo il drop/add e hanno misurato tutti e quattro gli esiti a T1, prima che qualsiasi studente avesse accesso al chatbot, così che il confronto sull'intero trimestre poggia su una baseline misurata anziché presunta. Il risultato piatto (nessuna interazione gruppo × tempo ha raggiunto la significatività; il maggiore effetto riportato è stato d = 0,050, sull'interesse) è riportato insieme all'adozione — 0,89 accessi a settimana contro l'assegnazione di uno a settimana — il che evita che un nullo su un trattamento debolmente usato venga letto come un nullo sullo strumento.
- **Crossover within-subject, e un controllo al meglio delle prassi.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] hanno fatto svolgere a ciascuno dei 194 studenti di scienze della vita di Harvard due lezioni di fisica — una in una sessione in classe di [[active-learning|apprendimento attivo]] e una con il tutor di IA del corso, in ordine controbilanciato con pre- e post-test attorno a ciascuna — così che ogni studente funge da controllo di sé stesso e il confronto tra *modalità di erogazione* non è confuso da chi è stato assegnato a quale. La seconda scelta di disegno conta quanto la prima: il termine di confronto era l'apprendimento attivo basato sulla ricerca anziché la lezione frontale, quindi il vantaggio (mediana del post-test 4,5 contro 3,5) è misurato rispetto alla prassi migliore attuale e non può essere letto come "l'IA batte l'insegnamento".

### Punti di forza e limiti

- **Punti di forza:** inferenza causale più forte; misurazione pulita degli esiti; supporta la stima della dimensione dell'effetto; bilancia i confondenti tramite la randomizzazione.
- **Limiti:** costoso e lento; i contesti artificiali possono ridurre la validità ecologica; gli strumenti di IA cambiano più rapidamente di quanto possano durare le sperimentazioni; i campioni piccoli spesso hanno potenza insufficiente per rilevare effetti significativi; vincoli etici nel negare un'IA potenzialmente benefica al gruppo di controllo. Due di questi limiti cambiano forma quando l'assegnazione è per cluster: il campione effettivo diventa il numero di *cluster* anziché il numero di studenti, quindi una sperimentazione può essere grande per numero di partecipanti e sottile secondo questa misura — i 2.379 studenti di Liu et al. poggiano su 34 cluster a livello di insegnante — e quando l'adozione è volontaria e bassa, una stima intent-to-treat risponde alla domanda se l'*offerta* dello strumento abbia cambiato gli esiti, non se il suo uso lo abbia fatto.

Per il trattamento più completo del disegno sperimentale nell'IA nell'educazione — incluso quando un RCT sia appropriato rispetto a disegni quasi-sperimentali, basati su indagine o computazionali — si veda [[research-methods-aied]].

## Concetti collegati

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — il disegno dietro l'evidenza più solida sul supporto agli studenti

## Articoli collegati

- [[generative-ai-education-productivity-gaps]] — Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching: an RCT
- [[access-not-enough-ai-tutoring-2026]] — Access is not enough: human support improves engagement with AI tutoring
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Group randomization by instructor: a 0.37 SD fall in final grades and a 0.90 SD fall in platform participation, with 15% uptake and inference on 34 clusters (Liu et al. 2026)
