---
title: "Studenti"
created: "2026-10-14T22:20:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
translation_of: concepts/learners
source_updated: "2026-10-25T15:20:00-04:00"
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

> **Sintesi:** Gli studenti sono il pubblico primario dell'[[ai-education|IA nell'educazione]] — gli allievi della [[k-12|scuola K-12]], dell'[[higher-ed|istruzione superiore]] e della formazione per [[adult-learning|adulti]] il cui lavoro, la cui comprensione e il cui senso di sé l'IA oggi plasma. Questa pagina è l'ombrello per la copertura della knowledge base sul lato studentesco: che cosa gli studenti vivono ([[student-experience|esperienza studentesca]]), chi stanno diventando ([[learner-identity|identità dello studente]]), che cosa scelgono ancora ([[agency|agenzia]]), come interagiscono davvero con lo strumento ([[student-ai-interaction|interazione studenti-IA]]), se il loro sforzo e la loro [[self-regulated-learning|autoregolazione]] reggano sotto di essa ([[cognitive-offloading|scaricamento cognitivo]]), e come i sistemi di IA li modellizzano ([[student-modeling|modellizzazione dello studente]]). Il risultato ricorrente in quella ricerca è che lo stesso strumento aiuta e danneggia studenti diversi in modi diversi — i guadagni si concentrano dove [[prior-knowledge|conoscenze pregresse]], [[ai-literacy|alfabetizzazione in IA]] e abitudini di verifica sono già presenti, e l'inversione si concentra dove l'IA sostituisce il pensiero che il compito avrebbe dovuto costruire.

## Domande da considerare

- Quali studenti nel vostro contesto un nuovo strumento di IA raggiungerebbe per primi, e quali lascerebbe indietro — e che cosa ve lo fa pensare?
- La ricerca riporta spesso che gli studenti *credono* che l'IA li abbia aiutati, mentre le misure senza assistenza non mostrano alcun guadagno, o una perdita. Se il resoconto dello studente non è evidenza affidabile, che cosa accettereste come evidenza che l'apprendimento è avvenuto?
- Gli studenti sono descritti qui sia come persone che usano l'IA sia come oggetti che l'IA modellizza ([[student-modeling|modelli dello studente]], [[knowledge-tracing|tracciamento delle conoscenze]], [[simulating-students|studenti simulati]]). Dove un modello dello studente dovrebbe informare l'insegnamento, e dove si dovrebbe smettere di fidarsi di esso?
- L'[[self-regulated-learning|autoregolazione]] e le [[prior-knowledge|conoscenze pregresse]] decidono se il supporto dell'IA diventa apprendimento o sostituzione. È un deficit dello studente da rimediare, un problema progettuale da risolvere, o un problema di valutazione da correggere?
- Se un gruppo di studenti ottiene risultati scarsi con uno strumento di IA, i progettisti dello strumento sono di solito gli ultimi a saperlo. Come sarebbe, nella vostra istituzione, una prassi realmente funzionante per ascoltare gli studenti prima e dopo l'introduzione?
- L'[[agency|agenzia dello studente]] e l'[[learner-identity|identità]] sono in gioco accanto al rendimento. Quale di esse rifiutereste di scambiare con [[learning-gains|guadagni misurabili nel punteggio]] — e il vostro progetto di valutazione renderebbe visibile quel rifiuto?

## Introduzione

Gli studenti compaiono in questa knowledge base sotto due forme molto diverse, e confonderle genera la maggior parte della confusione nel campo. Nella prima, gli studenti sono **persone che usano l'IA**: fanno domande, accettano o rifiutano risposte, perdono o mantengono l'equilibrio, e riportano esperienze di supporto, senso di colpa, ansia e dipendenza. Nella seconda, gli studenti sono **oggetti che i sistemi di IA modellizzano**: una stima di abilità nel [[knowledge-tracing|tracciamento delle conoscenze]], uno stato latente nella [[cognitive-diagnosis|diagnosi cognitiva]], o uno [[simulating-students|studente simulato]] che ne sostituisce uno reale. L'evidenza sulla prima viene da indagini, colloqui, analisi dei log ed esperimenti; l'evidenza sulla seconda viene dalla macchineria stessa della misura — e un modello dello studente è un'affermazione, non uno studente.

Questa pagina è il punto di ingresso per entrambe. Raccoglie i concetti sul lato studentesco che la knowledge base copre, spiega come si relazionano, e collega gli studi che stanno dietro. [[stakeholders]] copre l'altro lato dello stesso campo — [[teacher-role|docenti]], [[administrator|dirigenti]], progettisti e responsabili delle politiche — e le due pagine sono pensate per essere lette insieme.

## Chi conta come studente

La knowledge base tratta gli studenti lungo l'intero arco dell'istruzione formale: allievi della [[k-12|scuola K-12]], [[higher-ed|studenti universitari]], studenti [[vocational-education|professionali]] e [[professional-training|della formazione professionale]], e studenti della formazione per [[adult-learning|adulti]] e dell'[[lifelong-learning|apprendimento permanente]], inclusi [[special-education|studenti con disabilità]], studenti [[neurodiversity|neurodivergenti]] e studenti [[multilingual-learning|multilingui]]. Due convenzioni contano. Primo, "studenti" e "allievi" non sono intercambiabili in modo utile: *studenti* nomina un ruolo istituzionale, *allievi* nomina un'attività, e una persona può essere l'uno senza essere l'altro (un dipendente in [[professional-training|formazione in azienda]] è un allievo ma non uno studente). Secondo, gli studenti non sono un gruppo omogeneo, e l'eterogeneità è esattamente ciò che la ricerca continua a portare in superficie — [[prior-knowledge|conoscenze pregresse]], [[self-regulated-learning|autoregolazione]], lingua, accesso e stato di disabilità cambiano tutti se uno strumento di IA aiuta.

## Che cosa gli studenti vivono

L'[[student-experience|esperienza studentesca]] è una delle dimensioni più studiate dell'IA nell'educazione, e la sua lezione centrale è che gli effetti sono misti anziché uniformi. Il [[student-perceptions-ai-study-productivity-2026|lavoro d'indagine sulla produttività nello studio]] trova studenti che riportano guadagni di efficienza genuini — il 92,3% ha detto che l'IA aveva migliorato la propria comprensione — accanto a un divario che i numeri di apertura nascondono: solo il 38,5% ha detto che essa aveva ridotto il tempo di studio complessivo, e metà ha riportato di affidarsi a volte all'IA anziché cercare di imparare in modo indipendente. Le [[uneven-impact-generative-ai-student-learning-2026|analisi dei modelli di affidamento]] vanno oltre: studenti con livelli diversi di [[ai-literacy|alfabetizzazione in IA]] e di abilità di valutazione finiscono in relazioni qualitativamente diverse con lo strumento, quindi la stessa politica di corso produce esiti diversi per studenti diversi — supporto per alcuni, sostituzione per altri. Gli studenti [[genai-student-experiences-uk-he-survey-2026|descrivono con parole proprie l'attrazione del minimo sforzo]], che le pagine [[academic-integrity]] e [[misconceptions]] trattano come problema progettuale e di politica anziché morale.

L'affetto corre accanto alla storia cognitiva: [[anxiety-and-stress|ansia e stress]] e [[well-being|benessere]] documentano ansia per l'essere superati, per l'essere accusati di scorrettezza, e per il valore del titolo che si sta conseguendo. I modelli mentali che gli studenti hanno dell'IA — che cosa pensano essa sia e a che cosa pensano serva — sono a monte del fatto che la usino bene, ed è per questo che [[misconceptions]] e [[framing-ai-use-for-students]] compaiono in tutta la ricerca sul lato studentesco.

I resoconti degli studenti complicano anche la storia dell'integrità che inquadra così tanta politica sul lato studentesco. I [[mulisa-students-genai-integrity-perspectives-2026|colloqui con 27 studenti universitari di un'università etiope]] trovano un uso quasi universale della GenAI accanto a una lettura [[ethics|etica]] davvero divisa — la maggior parte che attribuisce agli strumenti il merito di aver innalzato il proprio rendimento, una minoranza che definisce l'uso nei lavori di corso una scorrettezza, e quasi tutti che riportano un campo di gioco diseguale in cui chi usa l'IA ottiene più dei lavoratori indipendenti diligenti, uno dei quali descrive l'effetto come qualcosa che uccide il proprio senso di diligenza. Il lato studentesco della procedura per scorrettezza è più sottile nella letteratura del lato studentesco dell'uso, ma l'[[munoz-misconduct-allegation-evidence-2026|analisi dei fascicoli di 1.162 accuse di GenAI]] mostra che cosa affrontano gli studenti quando arriva la risposta istituzionale: l'evidenza citata più spesso è del tipo valutato più debole, nessuna soglia evidentiaria minima governa se un caso procede, e gli studenti i cui casi poggiano su evidenze sottili sono sospinti verso gli appelli.

## Identità, agenzia e paternità

La ricerca sul lato studentesco non riguarda solo gli esiti. L'[[learner-identity|identità dello studente]] chiede chi uno studente sta diventando in relazione a una disciplina e all'IA, e l'evidenza corre in entrambe le direzioni: un uso ben progettato può sostenere l'appartenenza disciplinare, mentre l'esternalizzazione può erodere il senso che il lavoro sia proprio. L'[[agency|agenzia]] chiede che cosa lo studente controlla ancora. La knowledge base tratta entrambe come davvero in gioco, non come accessori morbidi del rendimento: uno studente che produce con l'IA un esito corretto e non riconosce più il ragionamento che vi sta dietro ha perduto qualcosa che il voto non registra. La domanda della paternità è quella in cui gli studenti stessi faticano di più: gli [[mulisa-students-genai-integrity-perspectives-2026|studenti intervistati su GenAI e integrità]] rivendicavano originalità perché nessun altro autore esisteva — "Se non è un'idea originale mia, allora di chi è?" — mentre altri concludevano che il lavoro non li rappresentava, e uno ragionò fino a riconoscere lo strumento come un coautore che non poteva essere, dato che l'IA non è una persona.

## Interagire con l'IA: che cosa gli studenti fanno davvero

La pagina [[student-ai-interaction|interazione studenti-IA]] raccoglie che cosa gli studenti chiedono all'IA, come evolvono i loro prompt e dialoghi, e perché la qualità dell'interazione predice gli [[learning-gains|esiti dell'apprendimento]] meglio dell'accesso. [[student-llm-interaction-taxonomy-review-2026|Una revisione esplorativa rapida di 46 categorizzazioni tratte da 33 studi]] trova quella base di evidenza concettualmente frammentata — gli studi differiscono per fonte dei dati, schema di categorie e unità di analisi, quindi "interazione di qualità" non è ancora un costrutto comparabile tra loro, e l'appello della revisione è a una tassonomia convergente dell'uso degli [[llm|LLM]] orientato all'apprendimento anziché all'affermazione che una tale tassonomia esista. Gli [[student-ai-conversations-cognitive-engagement-2026|studi sui contenuti dei dialoghi]] trovano che gli studenti si disciplinano in modi caratteristici, con un impegno che va dall'indagare e mettere alla prova le affermazioni all'accettare la prima risposta plausibile. L'[[help-seeking|ricerca di aiuto]] fornisce la cornice più antica: chiedere aiuto è un'abilità, e chiedere all'aiutante sbagliato nel modo sbagliato è una modalità di fallimento nota che l'IA non rimuove.

## Sforzo, autoregolazione e il divario tra prestazione e apprendimento

È qui che l'evidenza sul lato studentesco è più consequenziale, perché separa ciò che gli studenti *possono fare con l'IA* da ciò che *possono fare senza di essa*.

Il [[cognitive-offloading|scaricamento cognitivo]] raccoglie l'evidenza sull'eccessivo affidamento; [[genai-performance-vs-learning]] enuncia il punto metodologico centrale che prestazione assistita e capacità senza assistenza vanno misurate separatamente; gli [[layer-sensitive-cognitive-offloading-writing-2026|studi sullo scaricamento nella scrittura sensibili allo strato]] separano lo scaricamento superficiale, strutturale, delle idee e del ragionamento, e trovano la prestazione supportata più alta nella condizione meno vincolata accanto alla prestazione indipendente più bassa otto settimane dopo; e il resoconto della [[shaw-nave-cognitive-surrender-2026|resa cognitiva di Shaw e Nave]] nomina la disposizione che rende abituale anziché strategica la delega. La [[metacognitively-discordant-completion-genai-2026|discordanza metacognitiva]] documenta il caso intermedio scomodo — studenti che notano di non capire e consegnano comunque — e la [[verification-quality-reliance-calibration-genai-2026|ricerca sulla verifica]] mostra che il "controllare" è esso stesso un'abilità graduata, non un'abitudine binaria. Sul versante progettuale, la [[desirable-difficulties|difficoltà produttiva]] e [[reducing-ai-misuse|ridurre l'uso improprio dell'IA]] raccolgono gli interventi che ripristinano lo sforzo che il compito avrebbe dovuto richiedere.

## Gli studenti come modelli

I concetti sul lato studentesco con la discendenza tecnica più lunga sono quelli che rappresentano lo studente al sistema. Lo [[student-modeling|studente come modello]] copre la famiglia: [[knowledge-tracing|tracciamento delle conoscenze]] che stima l'acquisizione di abilità nel tempo, [[cognitive-diagnosis|diagnosi cognitiva]] che localizza misconcezioni specifiche, e i sistemi adattivi e [[personalized-learning|personalizzati]] che consumano quelle stime. Gli [[simulating-students|studenti simulati]] e la [[simulating-students-llm-review-2026|loro revisione]] trattano la [[simulation|simulazione]] come modo di testare [[intelligent-tutoring|tutor]] e generare dati quando studenti reali non sono disponibili — un sostituto esplicitamente provvisorio, non un rimpiazzo. Due cautele attraversano questa letteratura: le stime dei modelli sono inferenze dal comportamento che sono sensibili a come sono costruiti item e interfacce, e gli studi [[demographic-signals-llm-student-assessment-2026|sui segnali demografici]] mostrano che i sistemi di valutazione possono raccogliere proxy dell'identità dello studente (lingua, background) che non erano affatto destinati a far parte del costrutto. Le [[self-report-measures|misure di autovalutazione]] coprono il problema speculare sul versante della ricerca: ciò che gli studenti dicono del proprio apprendimento diverge spesso da ciò che sanno fare.

## Equità tra gli studenti

Poiché i benefici seguono il vantaggio pregresso, il lavoro sul lato studentesco è inseparabile dall'[[equity-in-ai-education|equità nell'educazione con l'IA]]. Il [[digital-divide|divario digitale]] e l'accesso ai livelli dei modelli a pagamento plasmano chi ottiene gli strumenti più potenti; le preoccupazioni di [[bias-mitigation|equità]] governano il modo in cui i modelli appresi trattano gruppi diversi; [[inclusive-learning|apprendimento inclusivo]], [[accessibility|accessibilità]], [[special-education|istruzione speciale]] e [[neurodiversity|neurodivergenza]] coprono gli studenti i cui bisogni il progetto di default ignora. La lezione pratica di questa ricerca è che "l'IA aiuta gli studenti" non è un risultato — il risultato è sempre *quali* studenti, in *quali* condizioni, con *quali* conoscenze pregresse e accesso. Due gruppi si portano una quota distintiva di quel rischio. [[wright-transcription-not-generation-2026|Wright (2026)]] sostiene che i divieti scritti intorno alla "[[generative-ai|IA generativa]]" anziché intorno alla funzione catturano strumenti di trascrizione che convertono il formato di un lavoro che lo studente ha già scritto, quindi i falsi positivi che ne risultano ricadono più duramente sugli studenti con disabilità che fanno affidamento su voce-testo e OCR, inclusi dove un OCR potenziato dall'IA ha sostituito software assistivo dismessi; una [[harerimana-remote-proctoring-nursing-scoping-2026|revisione esplorativa sulla sorveglianza a distanza durante gli esami]] fa il punto parallelo sulle condizioni di valutazione, trovando che connettività, costo dei dati e guasto dei dispositivi decidono chi possa essere valutato del tutto — un risultato di equità anziché tecnico, e concentrato nei contesti a basso e medio reddito.

## Dove si colloca questa pagina

Da leggere con [[stakeholders]] per le persone intorno allo studente, e con [[pedagogy]] e [[learning-design]] per ciò che i docenti fanno di questi risultati. L'[[assessment|valutazione]] determina quali capacità dello studente siano mai rese visibili; [[limitations-in-aied-research]] spiega perché tanta parte dell'evidenza sul lato studentesco sia a breve termine, auto-riportata e condotta su campioni di comodo; e [[misconceptions]] è il punto di ingresso abituale per gli studenti stessi.

## Idee sbagliate comuni

**"Studenti e discenti sono la stessa popolazione."** Non sono intercambiabili in modo utile: *studenti* nomina un ruolo istituzionale, *discenti* nomina un'attività, e una persona può essere l'una senza essere l'altra — un dipendente in [[professional-training|formazione in azienda]] è un discente ma non uno studente. Confonderli restringe la base di evidenza a chi ha un'iscrizione registrata e scarta silenziosamente proprio gli adulti, i professionisti e i discenti autodiretti di cui si occupa la ricerca sull'[[lifelong-learning|apprendimento permanente]].

**"Gli studenti riferiscono che l'IA migliora la loro comprensione, quindi fa risparmiare loro tempo."** Le due affermazioni si separano nei dati d'indagine. Nel lavoro sulla produttività dello studio, il **92,3%** ha detto che l'IA migliorava la propria comprensione, mentre solo il **38,5%** ha detto che riduceva il tempo di studio complessivo. Il numero di apertura descrive la comprensione percepita; il divario sotto di esso mostra che comprensione migliorata e tempo recuperato sono esiti diversi, e l'affermazione largamente ripetuta "l'IA fa risparmiare tempo" è portata dalla cifra più piccola.

**"Gli studenti che usano l'IA per scorciatoie commettono una colpa morale."** La knowledge base tratta l'attrazione del minimo sforzo come un problema di progettazione e di politica anziché di carattere — gli studenti la descrivono con parole proprie, e la letteratura su [[reducing-ai-misuse|uso improprio]] e [[academic-integrity|integrità]] colloca la leva nel design del compito e dell'ambiente. Inquadrarla moralmente non spiega nulla del perché lo stesso studente si comporti diversamente in due corsi.

**"Quando viene fatta un'accusa di scorrettezza, l'evidenza c'è."** L'analisi dei fascicoli di 1.162 accuse di GenAI mostra che cosa affrontano davvero gli studenti quando arriva la risposta istituzionale, e il lato studentesco della procedura per scorrettezza è molto più sottile nella letteratura del lato studentesco dell'uso. Una pagina sugli studenti che documenta solo il loro uso e non la loro esposizione all'accusa ha documentato metà dell'esperienza.

## Implicazioni per la pratica

**Per i docenti**

- Chiedi che cosa fanno i discenti, non solo che cosa riportano di sentire. Comprensione sentita (92,3%) e tempo recuperato (38,5%) divergono abbastanza che agire su una assumendo l'altra fuorvierebbe il progetto del corso.
- Progetta contro l'attrazione del minimo sforzo in modo strutturale anziché affidarti alla virtù del discente, poiché l'attrazione è documentata come risposta normale al design del compito.
- Informa i discenti sul processo che affronteranno se accusati, perché l'evidenza sulla procedura mostra che la risposta istituzionale è dove spesso cade il danno.

**Per gli sviluppatori**

- Non pubblicizzare risparmi di tempo che i discenti stessi non riportano. Fornisci metriche sia per la comprensione sia per il tempo, e tienile etichettate separatamente.
- Progetta per il discente non studente: gli utenti in formazione professionale e autodiretti non hanno il contesto di iscrizione che i tuoi default possono presupporre.

**Per i ricercatori**

- Mantieni esplicita la distinzione discente/studente nel campionamento, e riporta chi ne è escluso.
- Studia l'accusato oltre all'utente; il lato procedurale è la metà sottile di questa letteratura.

## Concetti collegati

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — Come gli studenti percepiscono l'IA, interagiscono con essa e ne sono influenzati
- [[learner-identity]] — Chi gli studenti stanno diventando in relazione a una disciplina e all'IA
- [[agency]] — Che cosa gli studenti controllano e scelgono ancora
- [[student-ai-interaction]] — Che cosa gli studenti chiedono davvero all'IA e come evolvono i dialoghi
- [[cognitive-offloading]] — Eccessivo affidamento e sostituzione dell'IA al pensiero
- [[self-regulated-learning]] — Pianificare, monitorare e correggere il proprio apprendimento
- [[help-seeking]] — Chiedere aiuto bene, e le modalità di fallimento quando gli studenti non lo fanno
- [[metacognition]] — Sapere che cosa si capisce e che cosa non si capisce
- [[motivation]] — Perché gli studenti persistono o si fermano
- [[self-efficacy]] — La fiducia degli studenti nella propria capacità
- [[student-engagement]] — Coinvolgimento comportamentale, emotivo e cognitivo
- [[prior-knowledge]] — Le conoscenze di sfondo che decidono se il supporto diventa apprendimento
- [[student-modeling]] — Rappresentare lo studente dentro il sistema
- [[knowledge-tracing]] — Stimare l'acquisizione di abilità nel tempo
- [[simulating-students]] — Studenti simulati da LLM come sostituti provvisori
- [[ai-literacy]] — La capacità che decide se gli studenti usano bene l'IA
- [[equity-in-ai-education]] — Chi beneficia e chi è escluso
- [[well-being]] — Ansia, stress e costo affettivo dello studio mediato dall'IA
- [[misconceptions]] — I modelli mentali che gli studenti portano all'IA
- [[stakeholders]] — L'altro lato dello stesso campo: docenti, dirigenti, progettisti
- [[assessment]] — Quali capacità dello studente siano mai rese visibili

## Articoli collegati

- [[uneven-impact-generative-ai-student-learning-2026]] — Reliance patterns and evaluation literacy split student outcomes
- [[student-perceptions-ai-study-productivity-2026]] — Learners report efficiency gains alongside dependency concerns
- [[student-llm-interaction-taxonomy-review-2026]] — A taxonomy of learning-oriented student-LLM interaction
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-specific patterns in student-AI chat
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Assisted performance gains without independent capability
- [[genai-performance-vs-learning]] — Why assisted performance and unassisted learning must be measured apart
- [[shaw-nave-cognitive-surrender-2026]] — Cognitive surrender as a disposition, not an accident
- [[metacognitively-discordant-completion-genai-2026]] — Learners who notice they do not understand and submit anyway
- [[verification-quality-reliance-calibration-genai-2026]] — Verification quality and reliance calibration
- [[simulating-students-llm-review-2026]] — Simulated students: architecture, mechanisms, and limits
- [[stanbkt-bayesian-knowledge-tracing]] — Parameter estimation in Bayesian knowledge tracing
- [[demographic-signals-llm-student-assessment-2026]] — Implicit and explicit demographic signals in LLM-based assessment
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI literacy, engagement, and psychological capital
- [[genai-student-experiences-uk-he-survey-2026]] — Students describe the pull of least effort
- [[mulisa-students-genai-integrity-perspectives-2026]] — Students on whether GenAI is a cheating tool or a learning partner
- [[munoz-misconduct-allegation-evidence-2026]] — What misconduct allegation files actually contain as evidence
- [[wright-transcription-not-generation-2026]] — Over-inclusive AI rules and the students they catch
- [[sharma-judgment-visible-genai-assessment-2026]] — Integrity as evaluative judgment rather than compliance
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Remote proctoring's emotional and equity costs for students
