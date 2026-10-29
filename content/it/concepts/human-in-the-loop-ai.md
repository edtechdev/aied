---
title: "IA con intervento umano (HITL)"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: "concepts/human-in-the-loop-ai"
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Human-in-the-loop** — il pattern di progettazione in cui i [[ai-technologies|sistemi di IA]] educativi intercalano strategicamente la generazione automatizzata con il giudizio di esperti umani, preservando la qualità e la sicurezza [[pedagogy|pedagogica]] mentre si scala la produzione. Piuttosto che automatizzare completamente valutazione, feedback o istruzione, l'HITL mantiene un essere umano (docente, esperto di materia o chi apprende) nel ciclo decisionale dove il suo giudizio ha il valore marginale più alto — per valutare la qualità, dirimere i casi limite e proteggere l'[[agency|agency]] e la sicurezza di chi apprende. La domanda progettuale centrale non è *se* includere gli umani, ma *dove* nella pipeline la loro supervisione è più preziosa e meno sostituibile.

## Domande da considerare

- La domanda progettuale centrale dell'HITL non è se includere gli umani, ma dove nella pipeline il loro giudizio è più prezioso. In un sistema di IA per la valutazione o il feedback, in quale punto insisteresti per mantenere un essere umano nel ciclo?
- Studi sulla [[automated-question-generation|generazione di domande]] tramite IA hanno rilevato che i computer gestiscono bene chiarezza e validità, ma che gli umani sono ancora necessari per distrattori significativi e buon feedback. Perché alcune parti del giudizio educativo potrebbero resistere all'automazione?
- Una valutazione ha rilevato che tre LLM fornivano raccomandazioni di supporto agli studenti incoerenti e insensibili — concludendo che il giudizio umano è ancora necessario prima che l'IA consigli qualcosa sugli studenti. Quando un'IA "raccomanda" un supporto per uno studente in difficoltà, cosa potrebbe andare storto se nessun essere umano la esamina?
- La pagina suggerisce che umani e algoritmi colgono tipi diversi di problemi — automatizza ciò che è verificabile con precisione, preserva il giudizio dove la sfumatura è insostituibile. Nella tua pratica, dove si trova il confine tra i due?
- Mantenere un essere umano nel ciclo è inquadrato come protezione dell'agency e della sicurezza di chi apprende, non solo della qualità. In che modo l'automazione completa potrebbe alterare sottilmente il senso che gli studenti hanno di chi è responsabile del loro apprendimento?
- Se l'IA diventa più autonoma, la supervisione HITL è descritta come una barriera di sicurezza centrale. A quale livello di autonomia dell'IA ti sentiresti a disagio — e cosa ti dice quel disagio su dove collocare la supervisione?

## Introduzione

L'HITL è una risposta ai limiti e ai rischi dell'[[ai-education|IA in educazione]] completamente autonoma: i sistemi automatizzati possono generare su scala ma mancano del giudizio contestuale, [[ethics|etico]] e pedagogico che docenti ed esperti apportano. Due implementazioni recenti illustrano architetture distinte:

Il supporto prescrittivo è un dominio in cui la supervisione umana è sempre più spesso sostenuta come non opzionale. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] hanno testato se tre LLM potessero raccomandare piani di supporto agli studenti a partire da indicatori di [[learning-analytics|learning analytics]] e hanno rilevato una sensibilità limitata al bisogno e una netta incoerenza tra modelli — concludendo che il giudizio human-in-the-loop è ancora necessario prima che la consulenza prescrittiva basata su [[llm|LLM]] possa essere dispiegata in modo sicuro ed etico.

Una terza architettura colloca il giudizio umano *a monte* del modello piuttosto che al suo output. Nello studio di [[lee-learner-question-types-ai-education-2026|Lee, Atif e Kang (2026)]] sulla classificazione delle domande degli studenti, tre esperti a livello dottorale hanno governato l'intera pipeline: hanno raffinato le definizioni operative per ogni ruolo [[constructivist|costruttivista]], etichettato in modo indipendente finché il kappa di Fleiss è salito da 0,60 a 0,83 dopo la risoluzione delle discrepanze, e validato gli item retro-tradotti e parafrasati usati per bilanciare il training set.

## CODE-GEN: generazione di domande MCQ human-in-the-loop

Duan et al. (2026) hanno costruito un sistema [[rag|basato su RAG]] e [[agentic-ai|agentico]] con due agenti:
- **Generator Agent** — Produce domande di programmazione a scelta multipla allineate agli obiettivi di apprendimento del corso
- **Validator Agent** — Valuta la qualità su sette dimensioni pedagogiche

**Valutazione:** 6 SME hanno giudicato 288 domande generate dall'IA. Tassi di successo validati da umani: **79,9%–98,6%** tra le dimensioni.

**Dimensioni forti per l'IA (basso carico umano):**
- Chiarezza della domanda, validità del codice, allineamento concettuale, validità della risposta corretta

**Dimensioni che richiedono l'umano (alto carico umano):**
- Progettazione di distrattori pedagogicamente significativi
- [[feedback|Feedback]] esplicativo di alta qualità

Intuizione strategica: lo sforzo umano dovrebbe essere concentrato dove il giudizio didattico è insostituibile; la verifica computazionale può essere completamente automatizzata.

## MAIC: generazione di script human-in-the-loop

Yu et al. (2024) hanno dispiegato una classe multi-agente (agente [[teacher-role|Docente]], agente TA, archetipi di compagni di classe) presso la Tsinghua University con oltre 500 studenti e oltre 100.000 record di apprendimento. I docenti umani partecipano alla generazione degli script e alla supervisione, garantendo che l'aumento di scala dell'IA non soppianti la competenza pedagogica.

## PedaCo: doppio filtraggio per la generazione di video con IA

Kim, Baek e Kwak (2026) estendono l'HITL ai [[video-education|video didattici generati dall'IA]] tramite **PedaCo** (Pedagogical Co-creation), una pipeline con due livelli di filtraggio complementari che istanziano una *resistenza fondata su principi* basata sulla Cognitive Theory of Multimedia Learning (CTML) di Mayer. Il **primo livello** colloca l'essere umano nella fase dello script: un LLM stende uno script, un revisore basato su IA segnala potenziali violazioni della CTML (ad es. "La scena 3 introduce termini tecnici senza una spiegazione preliminare"), e l'educatore decide se accettare, rivedere o rigenerare. Il **secondo livello** esegue metriche automatizzate post-sintesi su coerenza, ridondanza, contiguità temporale, modalità e qualità dell'immagine, che l'educatore esamina. In uno studio within-subject (23 educatori), l'approccio basato sulla revisione ha migliorato ogni principio della CTML (rating medio 3,07→3,86, p<.01), con gli educatori che hanno valutato l'efficienza di produzione a 4,26/5 — attrito percepito come produttivo, non gravoso. Il principio di progettazione riecheggia la sintesi HITL della knowledge base: umani e algoritmi colgono tipi *diversi* di problemi, quindi i sistemi più efficaci automatizzano dove la verifica computazionale è precisa (sincronizzazione temporale) e preservano il giudizio umano dove la sfumatura pedagogica è insostituibile (tono, aderenza al pubblico).

Il posizionamento può contare più della presenza: i professionisti hanno valutato uno strumento di authoring di Social Story come altamente usabile (SUS 86,8) ma hanno riferito che la revisione arrivava troppo tardi, perché i vincoli culturali e clinici stabiliti prima della generazione — un abaya invece di abbigliamento occidentale — sono più difficili da recuperare modificando l'output in seguito ([[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]]).

## Perché l'HITL conta nell'era dell'IA

La progettazione human-in-the-loop è diventata centrale nelle discussioni della knowledge base sull'[[agentic-ai|IA agentica]] e sull'[[reducing-ai-misuse|uso responsabile dell'IA]] per diverse ragioni convergenti:
- **Sicurezza pedagogica.** La [[pedagogical-safety|sicurezza pedagogica]] richiede che un'IA con reale autorità didattica mantenga la supervisione umana, così che errori, bias o output dannosi siano colti prima di raggiungere chi apprende. Questo è particolarmente importante per gli agenti autonomi che [[agentic-ai|perseguono obiettivi proattivamente]].
- **La supervisione è rara nella pratica, non solo in teoria.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] hanno rilevato che una governance incorporata robusta e la supervisione human-in-the-loop si manifestavano raramente in 474 sistemi di IA agentica educativa, anche mentre crescevano l'autonomia su singolo compito e la collaborazione multi-agente — il divario tra il principio di progettazione e la pratica dispiegata.
- **La domanda critica è come il ciclo sia reso azionabile, non quanto gli umani partecipino.** Una prospettiva delle scienze dell'apprendimento sostiene che organizzare l'apprendimento attorno alla cattura dei dati, all'interpretazione computazionale e alla risposta probabile rende l'azione pedagogica dipendente da ciò che i sistemi possono rilevare e su cui possono agire, e che gli alert e le classificazioni di engagement interpretano chi apprende prima che qualsiasi docente o studente agisca ([[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]]).
- **Validità e controllo qualità.** L'HITL è un gate di qualità per la [[automated-assessment|valutazione automatizzata]] e la generazione — gli umani dirimono dove il punteggio automatizzato è inaffidabile (si veda la [[research-methods-aied|ricerca]] sulla [[llms-do-not-grade-essays-like-humans-2026|valutazione dei saggi con LLM]]) e validano gli item generati. Una revisione sistematica [[meta-analysis-systematic-review|guidata da PRISMA]] di 42 studi su valutazione e feedback (2023–2025) giunge esplicitamente alla stessa conclusione: le LLM eguagliano i valutatori umani su compiti brevi e ben strutturati ma non possono sostituire completamente il giudizio umano su lavori complessi, aperti o soggettivi, e la massima efficacia della valutazione si ottiene in sistemi ibridi che combinano valutazione guidata dall'IA con supervisione e verifica del docente ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] mostrano concretamente dove cade quel confine: ChatGPT-5 ha eguagliato il corpo docente sugli item oggettivi dell'esame di farmacia (CCC 0,935–1.000) ma è stato inaffidabile sugli item a risposta breve e sui saggi anche quando fornita una rubrica, portando gli autori a raccomandare una valutazione ibrida con revisione umana per valutazioni complesse, soggettive o ad alto rischio.
 La ripetizione non sostituisce quella supervisione: rivalutando consegne identiche in cinque giorni diversi, lo stesso modello ha riprodotto i propri risultati solo a un alpha di Krippendorff di 0,625, con la variazione concentrata nei voti intermedi e A e F assenti dai conteggi delle cinque sessioni ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **Agency di chi apprende.** Mantenere un essere umano nel ciclo preserva l'[[agency|agency]] e supporta l'[[self-regulated-learning|apprendimento autoregolato]], contrastando l'[[cognitive-offloading|eccesso di affidamento]] che l'assistenza completamente autonoma può indurre.


- **Gli studenti collocano loro stessi l'umano all'estremità ad alto rischio.** Tra 93 studenti di laurea triennale, l'81,7% ha preferito la valutazione umana per un saggio finale del valore del 40% del voto, 75 su 93 hanno voluto che l'IA assistesse piuttosto che sostituisse i valutatori, e 69 hanno voluto che la valutazione dell'IA fosse sempre rivista da un umano ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Fiducia e calibrazione.** Una supervisione umana trasparente supporta la [[trust-calibration|calibrazione della fiducia]] — chi apprende e chi insegna sanno che un essere umano qualificato sostiene il sistema.
- **Criteri visibili prima della revisione aumentano l'accordo.** [[calibrating-trustworthiness-llm-education-2026|Coscia et al. (2026)]] hanno rilevato che mostrare le metriche di affidabilità ai revisori mentre confrontavano le risposte delle LLM ha elevato l'accordo tra valutatori da un alpha di Krippendorff di 0,3987 a 0,4931, mentre l'aggiunta di ulteriori misure ha aggiunto sovraccarico cognitivo senza ritorno.
- **Agency limitata come architettura, non come disclaimer.** Il framework AGAI-HE di [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] per il supporto all'apprendimento [[agentic-ai|agentico]] integra la supervisione nel modello stesso, come terzo livello accanto al livello del flusso di lavoro pedagogico e a quello del supporto agentico: definisce l'uso accettabile dell'IA, i confini pedagogici, le regole di [[privacy|privacy]], i requisiti di [[ai-use-disclosure|divulgazione]], la verifica delle fonti, i checkpoint per i docenti, i meccanismi di [[academic-integrity|integrità]], e la responsabilità umana finale, e richiede che ogni funzione agentica sia riconducibile a un requisito di apprendimento, uno scopo di valutazione o un controllo di governance. È un'istanza concreta del principio che l'HITL è una proprietà della progettazione di sistema piuttosto che una dichiarazione di policy — e lo studio di percezione degli autori su 130 studenti ricorda che aggiungere orchestrazione agentica sotto quella supervisione non ha, di per sé, registrato un supporto all'apprendimento migliore di quello di un chatbot.
- **La frequenza con cui l'umano guarda è essa stessa una decisione progettuale.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] separa la *frequenza* della supervisione dal suo posizionamento: l'HITL ad alta frequenza, che esamina ogni output dell'IA prima che raggiunga gli studenti, acquista controllo qualità, rilevamento rapido degli errori, responsabilità e calibrazione continua ma può annullare l'efficienza che ha motivato l'automazione e creare colli di bottiglia nei periodi di picco della correzione; l'HITL a bassa frequenza, che controlla campioni ed esamina solo i casi segnalati, scala e riduce i tempi di risposta ma rischia che gli errori si propaghino non rilevati tra le consegne, indebolisce la responsabilità e crea un problema di [[equity-in-ai-education|equità]] se alcuni studenti ricevono una revisione umana più approfondita di altri. Piuttosto che prescrivere una risposta universale, il framework richiede che il trade-off sia reso esplicito rispetto alle tolleranze di errore disciplinari, al carattere [[formative-assessment|formativo]] o [[summative-assessment|sommativo]] della valutazione, alla dimensione della coorte e alle risorse istituzionali — e fissa un default nella direzione opposta rispetto al solito argomento dell'efficienza: iniziare con una supervisione ad alta frequenza e ridimensionarla solo quando evidenze sostanziali dimostrino affidabilità, sicurezza ed equità accettabili, così che l'onere della prova ricada sul dimostrare che *meno* supervisione è sicura. L'articolo avverte anche che i principi alla base di tale supervisione potrebbero spostare lo sforzo del personale piuttosto che ridurlo, lasciando i guadagni netti di efficienza una questione empirica aperta.
- La supervisione umana dispiegata può significare instradamento delle approvazioni piuttosto che giudizio di qualità: in un sistema ibrido di interrogazione il campo di accettazione codificava solo se il risolutore differiva dal richiedente, e nessuna misura valutava la qualità della risposta [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].

## Dove appare l'HITL nella ricerca della knowledge base
- **Valutazione e correzione automatizzate:** i sistemi HITL combinano generazione/punteggio dell'IA con validazione umana nella correzione di risposte brevi ([[cong-confidence-asag-2026]]), nella valutazione di auto-spiegazioni ([[llm-automated-assessment-student-self-explanations]]) e nella [[automated-essay-scoring|valutazione di saggi]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros e Kortemeyer]] istanziano questo nella correzione scritta a mano ad alto rischio di [[chemistry-education|chimica]] generale: poiché l'affidabilità di una [[multimodal|LLM multimodale]] varia in base al formato della risposta (le risposte testuali e di reazione chimica sono affidabili mentre disegni e grafici ottengono risultati peggiori del caso) e i falsi positivi non vengono rilevati dagli studenti, essi convertono i punteggi grezzi dell'IA in una politica selettiva di accettazione/rinvio usando filtri di confidenza — soglie di credito parziale, una soglia di rischio basata sulla [[item-response-theory|IRT]], ed esclusione per tipo di problema — rinviando gli item incerti e grafici agli umani, un approccio che gli autori collegano ai quadri [[regulation|regolatori]] che designano l'IA nella [[assessment|valutazione educativa]] come ad alto rischio e impongono una supervisione umana documentata.
- **Sistemi di feedback:** impongono una supervisione umana documentata.
- **Punteggio HITL operativo in una valutazione nazionale (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] istanziano l'HITL su scala istituzionale nell'esame Acredita EB in Uruguay. Poiché gli errori dello scorer LLM sono sistematicamente conservativi (sotto-valutazione), il flusso di lavoro usa una logica a punti decisionali che instrada la revisione umana esattamente ai candidati il cui esito di superamento/non superamento dipende dalla sezione Writing — le risposte promosse dall'IA vengono accettate con confidenza, mentre i non superamenti marcati dall'IA (15,3–16,5% dei casi) sono verificati da valutatori esperti, riducendo il carico di lavoro di correzione completa di almeno il 50% con un rischio residuo di promozione dovuto a errore dell'IA di solo 0,2–0,6%. Questo è l'HITL come strategia di allocazione delle risorse: gli umani dirimono precisamente dove il bias conservativo dell'IA altererebbe altrimenti esiti ad alto rischio.

- **Derivare la soglia di rinvio dalla risoluzione stessa della rubrica (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] hanno fissato la tolleranza IA–docente a 0,5 punti — la discrepanza massima che non può spostare una consegna oltre una fascia di ancoraggio — e hanno escalato gli outlier a 0,8 punti, inviando 11 delle 362 consegne (3,0%) alla revisione umana prima che il feedback fosse rilasciato.

- **L'accordo tra annotatori non è una verità di riferimento umana.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] spingono l'annotazione del modello nel livello di audit senza mai validarla rispetto a etichette umane di riferimento, lasciando l'accordo tra modelli (mediana 0,401) come proxy della qualità delle asserzioni su cui errori condivisi possono sopravvivere. Il loro progetto mantiene la supervisione diagnostica piuttosto che decorativa: poiché i giudizi intermedi sono espliciti, un revisore può vedere quali comportamenti si sono attivati e separare un comportamento frainteso da una regola che codifica male il costrutto.
- **Sistemi di feedback:** la progettazione del feedback human-in-the-loop appare nei [[becerra-aicofe-feedback-2026|sistemi di feedback collaborativo]] e nella [[cong-confidence-asag-2026|correzione di risposte brevi consapevole della confidenza]].
- **Supporto alla collaborazione in classe.** [[breideband-community-builder-cobi-2026|CoBi]] mantiene il docente come essere umano che revisiona in un sistema di IA che rileva il discorso positivo nei piccoli gruppi: i docenti hanno esplicitamente preferito la revisione pre/post-azione alla visualizzazione live in tempo reale che li avrebbe messi "sotto pressione", e il feedback aggregato a livello di classe (piuttosto che individuale) del sistema è proprio ciò che gli permette di navigare la tensione tra [[privacy|privacy]], sorveglianza e [[agency|agency]] degli studenti.
- **Generazione di domande e contenuti:** oltre a CODE-GEN, l'HITL guida la generazione di domande per la valutazione e lo [[scaffolding|supporto]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Sistemi agentici e multi-agente:** man mano che l'IA diventa più autonoma, la supervisione HITL è una [[agentic-ai|barriera di progettazione]] centrale ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Instradamento per conseguenza decisionale, non per incertezza del modello (2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|Uno studio operativo del 2026]] sul test di accreditamento nazionale Acredita EB in Uruguay (due edizioni, circa 5.000–6.000 candidati ciascuna) mostra come si presenta la progettazione human-in-the-loop quando è guidata dalle conseguenze decisionali piuttosto che dall'incertezza del modello. Uno scorer GPT-5 si è accordato con i valutatori esperti sul 60–80% dei 15 item della rubrica ma è stato sistematicamente conservativo, producendo discrepanze promosso-da-umano/non-promosso-da-IA nel 15,3% (2024) e nel 16,5% (2025) dei confronti di esito e quasi mai il contrario. Il framework accetta quindi i risultati promossi dall'IA a valore nominale e instrada ogni risultato non promosso dall'IA che potrebbe cambiare l'esito di un candidato alla revisione di esperti — dopo aver prima escluso i candidati il cui esito non può dipendere dalla sezione di scrittura — riducendo di almeno il 50% le risposte che necessitano di correzione umana completa. Un secondo progetto del 2026 traccia il confine dal lato opposto: in una piattaforma multi-agente di paziente standardizzato basata su IA ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]), la supervisione umana è riservata a ciò che l'IA è giudicata inadatta a decidere, con corpo docente e pazienti standardizzati umani che forniscono interpretazione contestuale, remediation e giudizi di prontezza, e con il sistema esplicitamente non autorizzato a determinare autonomamente la competenza [[medical-education|clinica]].

## Sintesi

La progettazione human-in-the-loop non è semplicemente una misura di sicurezza — è una **strategia di allocazione delle risorse**. La domanda di frontiera non è *se* includere gli umani, ma *dove* nella pipeline il loro giudizio ha il valore marginale più alto. I sistemi HITL più efficaci concentrano la scarsa competenza umana dove i sistemi automatizzati sono più deboli (progettazione di distrattori, feedback esplicativo, dirimere i casi limite, giudizio etico) e automatizzano il resto — preservando qualità, sicurezza e fiducia mentre si scala la produzione.
- **La supervisione umana persiste nel lavoro assistito dall'IA.** La ricerca sulle [[scaffolding-systematic-reviews-2026|revisioni sistematiche]] ha rilevato che gli strumenti di automazione basati sull'IA hanno ridotto gli oneri procedurali (ad es. lo screening) ma le decisioni interpretative richiedevano ancora una sostanziale supervisione umana; la [[kim-ai-andragogy-2026|ricerca sull'andragogia]] rende l'human-in-the-loop (modelli mentali condivisi, co-creazione) un principio di progettazione centrale dell'IA.
- **Human-in-the-loop su scala istituzionale.** Qin (2026) descrive come la Lingnan University abbia sviluppato un modello educativo human-in-the-loop che mette in primo piano ragionamento etico, giudizio critico e responsabilità sociale democratizzando l'accesso alla [[generative-ai|GenAI]]. Il modello posiziona gli umani come luogo del giudizio e dei valori anche mentre l'IA è integrata in tutto il [[curriculum-design|curriculum]] — un'istanza [[governance|istituzionale]] concreta dei principi human-in-the-loop nell'[[higher-ed|istruzione superiore]].
- **Chi apprende come human-in-the-loop del proprio tutoraggio.** Il [[ko-hughes-vsd-student-centered-its-2026|Value Sensitive Design]] con studenti di community college ha prodotto una famiglia completa di funzionalità HITL rivolte a chi apprende per un ITS (controllo sulla ri-valutazione e la revisione, obiettivi/ritmo personalizzati, bookmarking per la revisione, conferma della confidenza sulla padronanza, e un controllo del livello di coinvolgimento dell'assistenza IA), posizionando lo studente come controllore attivo del ciclo di tutoraggio piuttosto che consumatore passivo di decisioni adattive. Lo studio ha anche rilevato i docenti divisi sul fatto che tale controllo da parte di chi apprende potesse minare l'integrità del percorso di apprendimento guidato dal sistema — un'istanza della più ampia questione di allocazione delle risorse su dove il giudizio umano (di chi apprende vs. del docente) aggiunga più valore.
- **L'escalation dall'IA all'esperto è una mossa human-in-the-loop.** Il framework SCAN assegna i compiti a quattro modalità di IA generativa in base alla distanza di chi apprende, e legge lo [[student-engagement|engagement]] passivo all'interno di un compito di IA correttamente assegnato come un segnale di de-specializzazione per spostare chi apprende dall'IA all'assistenza esperta, con un essere umano come revisore epistemico ([[ai-teammate-task-distribution-medical-training-2026|Tsim et al. (2026)]]).
- **Supervisione dei consigli sull'adozione dell'IA.** Poiché i sistemi di [[conversational-ai|IA conversazionale]] consultati da utenti scettici possono essere predisposti a incoraggiare l'adozione, la supervisione umana e la valutazione indipendente sono essenziali. Un audit che mostra la maggior parte dei modelli di frontiera reindirizzare il personale [[k-12]] rurale scettico verso lo [[student-engagement|engagement]] sottolinea la necessità di consigli sull'IA trasparenti e verificabili piuttosto che un affidamento acritico.

## Concetti collegati
- [[pedagogical-patterns]] — Dove si colloca la revisione umana nelle sequenze testate, e cosa non è mai stato testato in isolamento
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — il giudizio umano all'interno di un flusso di supporto automatizzato

## Articoli collegati
- [[lee-learner-question-types-ai-education-2026]] — Expert-labeled question classification: humans govern labeling, augmentation, and error analysis (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — Human supervision and governance as the third layer of agentic GAI course design (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Value-sensitive design of student-centered ITS (learners in the tutoring loop)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — HITL AI-assisted scoring in a large-scale national writing assessment (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN framework: rethinking AI task distribution in medical training (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — AI Applications in Supporting Andragogy (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Scaffolding Systematic Reviews with Mentoring and AI (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[tripartite-feedback-framework-ai-assessment-2026]] — Tripartite framework: sorting feedback by epistemic status and the five boundary principles for AI involvement (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026

- [[llm-grading-assistants-public-health-2026]] — Identical LLM grading reruns on different days reproduce at only Krippendorff's alpha 0.625
- [[when-students-prefer-ai-scoring-feedback-2026]] — Undergraduates prefer human scoring for high-stakes work and AI as an assistant, not a replacement
- [[student-query-demand-hybrid-ai-support-2026]] — What Students Actually Ask: Demand Structure and Automation Potential in a Hybrid Support System
- [[in-the-loop-educational-ai-learning-sciences-2026]] — Rethinking "In-The-Loop" Approaches in Educational AI: A Learning Sciences Perspective
