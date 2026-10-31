---
title: Ricerca qualitativa
created: "2026-10-14T21:58:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
research_method: [interviews, case study]
confidence: high
methods: [qualitative-research, research-methods-aied]
translation_of: "concepts/qualitative-research"
source_updated: "2026-10-28T15:48:01-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Ricerca qualitativa** — la famiglia di metodi empirici che studia come le persone *vivono, interpretano e attribuiscono significato* ai fenomeni, tipicamente attraverso parole, osservazioni e manufatti piuttosto che numeri. Nella [[ai-education|IA nell'educazione]], i metodi qualitativi rivelano *come* studenti e insegnanti vivano realmente gli [[generative-ai|strumenti di IA]] — i significati, le tensioni, i danni e i meccanismi che le misure standardizzate non colgono. Poiché l'IA nell'educazione si evolve rapidamente e i suoi effetti sono spesso mediati da contesto, percezione e costrutti contestati come [[trust|fiducia]] e [[agency|agency]], il lavoro qualitativo è essenziale accanto ai disegni [[quantitative-research|quantitativi]] (si veda [[research-methods-aied]]).

## Domande da considerare

- Un'indagine ti dice che il 40% degli studenti diffida di un [[intelligent-tutoring|tutor basato sull'IA]]; un focus group ti dice *perché* ne diffidano. Quale numero ti sembra più azionabile, e cosa aggiunge il "perché" che la percentuale non può dire?
- I risultati qualitativi di solito non sono generalizzabili in senso statistico, eppure sono spesso "generalizzabili in senso concettuale" — meccanismi e dinamiche che si trasferiscono altrove. Prima di leggere, cosa significa che un risultato sia generalizzabile in termini concettuali ma non statistici?
- La pagina mette in guardia sul fatto che la *concordanza* nella codifica tra umani e LLM non è la stessa cosa della *qualità* della codifica quando il consenso umano non è una verità di riferimento. Ti è mai capitato di trattare "due revisori erano d'accordo" come prova che qualcosa fosse corretto? Quando la concordanza è un segnale di verità, e quando è solo un errore condiviso?
- Se l'IA può ora assistere la codifica qualitativa su larga scala, questo minaccia la profondità interpretativa che rende preziosa la ricerca qualitativa, o si limita ad automatizzarne la fatica? Come decideresti quale delle due cose sta accadendo in un dato studio?
- Il lavoro qualitativo mette al centro le voci sotto-rappresentate — studenti di minoranze etniche, non utilizzatori scettici — che le grandi indagini spesso non colgono. Pensa a un'affermazione sull'IA nell'educazione che hai sentito. L'esperienza di chi probabilmente *non* è catturata dal numero titolare?
- Scegli un costrutto contestato che ti sta a cuore — fiducia, agency o danno. Prima di leggere, abbozza come lo studieresti con parole e osservazioni piuttosto che con numeri, e annota cosa perderesti nel farlo.

## Introduzione

La ricerca qualitativa non è un singolo metodo ma una famiglia organizzata in base a *cosa* studia e *come* l'evidenza viene raccolta e analizzata. Ciò che li unisce è l'enfasi sulla costruzione di significato, sul contesto e sulla profondità rispetto all'ampiezza e al controllo causale. I risultati qualitativi tipicamente **non** sono generalizzabili in senso statistico, ma sono spesso *generalizzabili in senso concettuale* — rivelando meccanismi, categorie e dinamiche che si trasferiscono ad altri contesti. Nel corpus della knowledge base, il lavoro qualitativo è prominente nello studio dell'accettazione dell'IA, della fiducia, del danno, della [[teacher-role|pratica insegnante]] e dei processi di apprendimento.

## I principali approcci qualitativi

### Analisi tematica
L'analisi tematica identifica, codifica e interpreta pattern ("temi") all'interno di dati qualitativi — tipicamente trascrizioni di interviste o focus group, risposte aperte a questionari o documenti. È l'approccio più ampiamente usato negli studi qualitativi della knowledge base. Le interviste e le risposte aperte sono esse stesse [[self-report-measures|dati auto-riferiti]], quindi condividono i limiti su ciò che si può affermare riguardo al comportamento — si veda quella pagina per capire dove l'evidenza auto-riferita è solida e dove si rompe. [[fouad-bentley-trust-utility-gap-physics-2026|Uno studio sul divario fiducia–utilità in fisica]] usa l'analisi tematica dei dati di intervista agli studenti per far emergere lo scetticismo e le preferenze di adozione [[discipline-specific-aied|specifici del dominio]]; [[genai-teacher-feedback-comparison|un confronto tra feedback di GenAI e feedback dell'insegnante]] analizza le percezioni degli studenti su utilità e affidabilità; e [[ai-adult-learning-guidelines-dis2026|le linee guida per l'apprendimento con l'IA in età adulta]] derivano principi di design dalla codifica tematica di input di esperti e discenti. [[ai-changing-teaching-workflows|Come l'IA cambia i flussi di lavoro degli insegnanti]] si basa sull'analisi tematica dei resoconti degli educatori.

L'affidabilità della codifica può diventare una procedura continua anziché un controllo una tantum. [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] codificano 304 affermazioni di noticing a un α di Krippendorff = 0,803, monitorano la concordanza su cinque casi sovrapposti (κ aggregato = 0,937) e ricodificano le affermazioni contestate ogni volta che la concordanza scendeva sotto una soglia di ricalibrazione di 0,85 prima di riprendere; le affermazioni codificate entrano poi in un'analisi di reti epistemiche che modella quali dimensioni co-occorrono, invece di una lista piatta di temi.

### Grounded theory
La grounded theory costruisce una teoria *a partire dai dati* anziché testare un quadro a priori, usando una codifica iterativa (aperta → assiale → selettiva) fino alla saturazione teorica. È ideale per costruire nuova teoria su fenomeni emergenti dell'IA nell'educazione. [[liu-tool-tutor-crutch-programming-2026|Liu et al.]] sviluppano una grounded theory di *strumento, tutor o stampella* — una tipologia a tre modalità di come gli studenti si [[scaffolding|facilitino]] cognitivamente o scarichino sull'IA nell'[[cs-education|educazione alla programmazione]] — teorizzando direttamente il [[cognitive-offloading|cognitive offloading]]. [[favero-critical-ai-tutors-empower-enslave-2025|Uno studio grounded-theory sui tutor di IA critici]] esamina se tali tutor emancipino o asserviscano i discenti. [[genai-feedback-design-multisite-experiment|Il design human-centered del feedback GenAI]] usa un'analisi grounded su uno studio multisito. Si veda anche [[theory-development-aied]] per come tali teorie grounded alimentino la costruzione teorica del campo.

### Fenomenologia e fenomenografia
Gli approcci fenomenologici studiano l'*esperienza vissuta* di un fenomeno — com'è imparare con l'IA — mentre la fenomenografia studia i *modi qualitativamente diversi* in cui le persone vivono e comprendono un fenomeno (producendo "categorie di descrizione"). [[absent-cognitive-baseline-2026|The Absent Cognitive Baseline]] attinge alle esperienze vissute dagli studenti di autovalutazione con l'IA per teorizzare un vuoto strutturale; [[metacognitively-discordant-completion-genai-2026|uno studio fenomenologico]] cattura l'esperienza di portare a termine un lavoro con l'IA sapendo consapevolmente di non capirlo; e [[genai-runaway-object-math-higher-ed|uno studio socio-culturale e interpretativo]] analizza come la GenAI diventi un "oggetto fuggitivo" nella pratica accademica della [[math-education|matematica]].

### Analisi del discorso
L'analisi del discorso esamina come il linguaggio in uso costruisca significato, identità e potere — analizzando il parlato in classe, il testo scritto o le sequenze interazionali. [[nspa-neuro-symbolic-pedagogical-alignment-2026|NSPA]] conduce un'*analisi del discorso* in classe a orizzonte lungo (qui assistita computazionalmente) per mitigare il bias dialettale nella comprensione dell'interazione in classe; [[scaffolding-critical-engagement-genai-minority-students|uno studio su studenti preparatori di minoranze etniche]] analizza il *discorso* collaborativo in compiti di [[prompt-engineering]]. L'analisi del discorso fa da ponte tra interpretazione qualitativa e metodi computazionali quando si combina con [[educational-nlp]].

[[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal (2026)]] mostra come la codifica del discorso diventi verificabile quando è resa come regole conteggiabili: su 366 abstract e 91.405 token, un'associazione conta solo quando un attore precede un predicato entro sei parole interposte, e la prossimità nominale è esclusa così che "governance dell'IA" non conti mai come evidenza che l'IA governi — un'approssimazione basata su regole, non un parse di dipendenze, i cui limiti il design dichiara.

### Osservazioni ed etnografia
Gli studi osservativi guardano il comportamento nel contesto; l'etnografia estende questo a uno studio sostenuto e immersivo di un contesto, spesso con il ricercatore come osservatore partecipe. [[trio-ethnography-llm-programming-education|Una trio-etnografia]] dell'educazione alla programmazione supportata dalle LLM traccia come evolvano le interpretazioni degli studenti; [[zha-ai-literacy-biology-case-study|uno studio di caso in classe]] osserva l'integrazione dell'[[ai-literacy|alfabetizzazione sull'IA]] nella [[biology-education|biologia]]. I metodi osservativi catturano il comportamento *reale* (cosa fanno i discenti con l'IA) piuttosto che il comportamento riportato — integrando le indagini auto-riferite che dominano la [[educational-measurement|misurazione quantitativa]] degli atteggiamenti.

### Studi di caso
Uno studio di caso è un'indagine approfondita di un caso delimitato (un corso, un'istituzione, un singolo discente) che usa molteplici fonti di dati. [[drummond-genai-business-schools-framework-2026|Uno studio di caso in una business school]] genera un quadro di insegnamento e apprendimento informato dagli studenti per la GenAI; [[zha-ai-literacy-biology-case-study|uno studio di caso in biologia]] documenta l'integrazione dell'alfabetizzazione sull'IA. Gli studi di caso scambiano ampiezza per profondità e sono forti nella generazione di teoria e nell'intuizione trasferibile piuttosto che nella generalizzazione. [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]] offrono uno studio di caso qualitativo su 21 studenti universitari con disabilità visiva in tre università palestinesi, usando l'analisi tematica di interviste semi-strutturate per mostrare come la GenAI funzioni come [[assistive-technology|tecnologia assistiva]] per l'[[inclusive-learning|apprendimento inclusivo]] — un esempio di ricerca basata su studi di caso che porta alla superficie meccanismi (adattamento personalizzato, potenziamento del docente, parità educativa) che le misure quantitative non colgono.
- La variazione scelta non è la variazione trovata: tre apprendenti di EFL, selezionati da 241 studenti intervistati per competenza, genere e storia con la GenAI diversi, hanno seguito traiettorie emotive nettamente divergenti attraverso tre compiti, eppure i casi di variazione massima non possono stimare quanto sia comune una qualsiasi traiettoria ([[wu-efl-emotional-dynamics-genai-writing-2026|Wu, Yang e Lin (2026)]]).

[[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan (2026)]] triangola video, i log propri del sistema di allerta e interviste di richiamo dello stimolo per un insegnante e otto studenti, mostrando che un segnale affettivo acquisiva significato solo attraverso la risposta dell'insegnante; la codifica degli episodi in due fasi da parte di un singolo autore, senza codifica indipendente né rilevamento dell'affetto validato, segna il limite di ciò che un'analisi di caso con un solo codificatore può giustificare.

### Interviste e focus group
Le **interviste** semi-strutturate e i **focus group** sono gli strumenti primari di raccolta dati in tutti gli approcci sopra. Elicitano resoconti ricchi e contestuali. Il corpus qualitativo della knowledge base si fonda in larga misura sulle interviste (ad es. [[genai-expertise-pathways-sysadmin|i percorsi di expertise]]) e sui focus group (ad es. [[t2i-competence-paradox-2026|il paradosso della competenza nel text-to-image]], [[ai-adult-learning-guidelines-dis2026]]). La qualità dipende da un'attenta progettazione delle domande, dal campionamento per variazione e da un'analisi rigorosa.

## Come appare la ricerca qualitativa nella knowledge base

- **Meccanismo e processo.** Il lavoro qualitativo rivela *perché* l'IA aiuti o danneggi. [[same-ai-different-pathways]] usa filoni qualitativi per scomporre i meccanismi dell'apprendimento [[sociocultural-learning|mediato dall'IA]] tra contesti.
- **Fiducia, agency e identità.** I costrutti contestati e soggettivi sono spesso studiati al meglio qualitativamente. [[t2i-competence-paradox-2026]] porta alla superficie come gli studenti di arte e design negozino facilità, rischio e identità creativa; [[genai-runaway-object-math-higher-ed]] cattura il ruolo dell'IA nel rimodellare identità e pratica accademica.
- **Equità e voci sotto-rappresentate.** Il lavoro qualitativo mette al centro prospettive spesso escluse dalle grandi indagini — [[scaffolding-critical-engagement-genai-minority-students|studenti di minoranze etniche]], [[becker-chatgpt-typology-physics-2026|non utilizzatori scettici]]. Questo si collega a [[equity-in-ai-education]].
- **Costruzione di tipologie e tassonomie.** [[becker-chatgpt-typology-physics-2026|Una tipologia qualitativa dell'adozione di ChatGPT]] distingue gli utenti pragmatici dai non utilizzatori scettici — categorie che informano la successiva progettazione degli strumenti di indagine.
- **Codifica comparabile tra documenti.** [[genai-governance-australian-higher-ed-2026|Poudyal (2026)]] applica 15 vignette fisse alle politiche pubbliche di 20 università per ottenere 300 classificazioni comparabili, e riporta che un secondo codificatore indipendente ne ha fatte coincidere solo il 57,3% (κ = 0,395) — rendendo visibile la fragilità dello schema di codifica invece di lasciare la concordanza non dichiarata.

## IA e analisi qualitativa

Uno sviluppo recente distintivo è l'uso delle [[llm|LLM]] per assistere la codifica qualitativa. L'evidenza della knowledge base è cautelativa: [[human-vs-llm-ordered-coding]] mostra che la codifica tra LLM e umani diverge, con errori che si propagano attraverso l'analisi temporale; [[agreement-not-quality-llm-coding-verification|Agreement Is Not Quality]] mostra che la *concordanza* di codifica tra umani e LLM non è la stessa cosa della *qualità* della codifica quando il consenso umano non è una verità di riferimento. La codifica assistita dalle LLM può scalare e accelerare l'analisi qualitativa, ma i suoi output richiedono verifica rispetto al [[human-in-the-loop-ai|giudizio umano]] — un'importante intersezione tra ricerca qualitativa, [[educational-nlp]] e [[ai-ed-evaluation]].

**Il problema dell'output fluente e della giustificabilità.** [[chain-behind-claim-warrantability-2026|Holster (2026)]] affina perché accuratezza e dichiarazione siano standard insufficienti per il lavoro qualitativo assistito dall'IA. Poiché le LLM riorganizzano i corpus in minuti in argomenti fluenti, citazioni e affermazioni di prevalenza, possono nascondere il percorso analitico che li ha prodotti — e le persone tendono a valutare come più vero l'output fluido e facilmente processabile. Holster propone la **warrantability** (giustificabilità) come complemento di accuratezza e dichiarazione: un'interpretazione assistita dall'IA è giustificabile quando il percorso dai dati di origine all'affermazione resta *ispezionabile, contestabile e rivedibile*. La sua macchina costruttiva è fatta di **lenti semantiche** (riorganizzazioni documentate di un corpus attraverso livelli di astrazione) e di un repertorio relativo alle affermazioni di **artefatti di giustificazione** — tabelle di argomenti collegate alle fonti, pile di lenti e fiumi di evidenza — progettati dentro gli strumenti così che anche l'analisi fluente produca una registrazione del percorso ritracciabile. Questo estende la tradizione di audit-trail del campo nell'era generativa e dà ai revisori qualcosa di concreto da contestare al di là di un'interpretazione finale.
- **L'affidabilità non è accuratezza nella codifica con LLM [[agentic-ai|multi-agente]].** Una pipeline informata dalla letteratura in cui due codificatori di IA hanno codificato in modo indipendente, dibattuto e riconciliato i disaccordi ha prodotto una concordanza tra codificatori superiore al kappa di Cohen 0,85 su ogni dataset ed etichetta, mentre l'F1 rispetto al criterio andava da 0,31 a 0,89 (media 0,68, DS 0,16) — alta concordanza tra agenti che erano entrambi in errore. Codebook più lunghi (t = -11,702) ed excerpt più simili (t = -9,249) riducevano l'accuratezza iniziale, e i turni di discussione correlavano positivamente con l'accuratezza (t = 7,997) mentre i conflitti correttamente risolti e le modalità collaborative correlavano negativamente (t = -9,720 e -8,420), quindi la convergenza è un proxy debole della correttezza. L'implicazione pratica è che la codifica assistita dall'IA richiede una risoluzione a livello di checklist rispetto a un riferimento umano, anziché la concordanza tra agenti come segnale di qualità. ([[llm-qualitative-coding-consensus-2026]])

## Punti di forza e limiti

- **Punti di forza:** profonda intuizione ecologica e concettuale; porta alla superficie fenomeni, rischi e meccanismi inattesi; essenziale per la costruzione di teoria (si veda [[theory-development-aied]]); cattura significato, contesto e costrutti contestati; mette al centro prospettive sotto-rappresentate; forte nello studio di fenomeni in rapida evoluzione, dove le misure standardizzate sono in ritardo.
- **Limiti:** generalizzabilità statistica limitata; natura interpretativa e dipendenza dal ricercatore (problemi di affidabilità); campioni piccoli; supporto più debole per le affermazioni causali; risultati difficili da sintetizzare tra studi; intensità di tempo e lavoro.

I metodi qualitativi e quantitativi sono complementi, non rivali — si veda [[research-methods-aied]] per come si contrastino e si triangolino, e [[mixed-methods-research|metodi misti]] per i disegni che li combinano.

## Idee sbagliate comuni

**"I risultati qualitativi non sono generalizzabili perché i campioni sono piccoli."** Di solito non sono generalizzabili *statisticamente* e sono spesso generalizzabili *concettualmente* — i meccanismi e le dinamiche che identificano si trasferiscono ad altri contesti anche dove le frequenze no. Un focus group che spiega perché gli studenti diffidano di un tutor ha prodotto un meccanismo che un'indagine non può produrre, e scartarlo perché privo di intervallo di confidenza scarta proprio la parte che viaggia.

**"L'IA può ora fare l'analisi qualitativa, quindi il metodo scala."** Scala la codifica e non l'interpretazione. Dove il corpus mostra che questo funziona bene, è perché il compito di codifica era stato reso confrontabile prima — uno studio ha applicato **15 vignette fisse** alle politiche pubbliche di **20 università** per ottenere **300 classificazioni confrontabili**, che è un disegno a strumento strutturato e non un disegno interpretativo aperto. L'intuizione del lavoro qualitativo sta nella costruzione delle categorie, e quella il modello la eredita anziché produrla.

**"La saturazione è una proprietà del numero di partecipanti."** È una proprietà dell'analisi: si smette quando i nuovi dati smettono di produrre nuovi codici. Due studi con campioni di uguale dimensione possono essere ugualmente lontani dalla saturazione, ed è per questo che un rapporto che cita il numero di partecipanti come prova di adeguatezza non ha dimostrato nulla sulla copertura.

**"I risultati quantitativi e qualitativi si fanno concorrenza."** Rispondono a domande diverse: un'indagine ti dice quanti studenti diffidano di un tutor, le interviste ti dicono perché. Trattarli come resoconti rivali della stessa cosa produce la falsa scelta che le sezioni di rassegna continuano a riprodurre.

## Concetti collegati

- [[research-methods-aied]]
- [[mixed-methods-research]]
- [[quantitative-research]]
- [[theory-development-aied]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[educational-measurement]]
- [[educational-nlp]]
- [[ai-ed-evaluation]]
- [[equity-in-ai-education]]
- [[trust]]
- [[agency]]
- [[cognitive-offloading]]
- [[self-report-measures]]

## Articoli collegati
- [[chain-behind-claim-warrantability-2026]] — warrantability standard for AI-assisted qualitative analysis
- [[liu-tool-tutor-crutch-programming-2026]] — Tool, Tutor, or Crutch: a grounded theory of AI-assisted programming
- [[trio-ethnography-llm-programming-education]] — A trio-ethnography of interpretation evolution in LLM-supported programming
- [[absent-cognitive-baseline-2026]] — Theorizing a structural gap in AI-native students' self-assessment
- [[t2i-competence-paradox-2026]] — The competence paradox in text-to-image GenAI use
- [[fouad-bentley-trust-utility-gap-physics-2026]] — Trust–utility gap in physics education
- [[genai-teacher-feedback-comparison]] — Comparing GenAI and teacher feedback: student perceptions
- [[hazra-safetutors-pedagogical-safety-2026]] — AI tutor safety and pedagogical harms
- [[zha-ai-literacy-biology-case-study]] — Case study of AI-literacy integration in a biology class
- [[becker-chatgpt-typology-physics-2026]] — A qualitative typology of ChatGPT adoption in physics
- [[scaffolding-critical-engagement-genai-minority-students]] — Collaborative discourse in prompt engineering among ethnic-minority students
- [[human-vs-llm-ordered-coding]] — Comparing human and LLM ordered coding of qualitative data
- [[agreement-not-quality-llm-coding-verification]] — Agreement is not quality in LLM qualitative coding
- [[same-ai-different-pathways]] — Unpacking mechanisms of AI-mediated learning across contexts
- [[drummond-genai-business-schools-framework-2026]] — Student-informed GenAI framework via case study
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Critical AI tutors: empower or enslave
- [[genai-runaway-object-math-higher-ed]] — GenAI as a runaway object in higher-education mathematics
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[wu-efl-emotional-dynamics-genai-writing-2026]] — EFL learners' emotional engagement in GenAI-assisted writing: a longitudinal multiple-case study
