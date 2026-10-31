---
title: Rischio di allucinazione
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
source_updated: "2026-10-26T07:30:00-04:00"
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

> Il **rischio di allucinazione** — il pericolo che i sistemi di IA generino contenuti plausibili ma fattualmente errati o fabbricati in contesti educativi, dove tali errori possono fuorviare i [[learners]], minare la [[trust|fiducia]] e produrre valutazioni non valide. L'allucinazione è particolarmente rilevante nell'educazione perché gli studenti possono mancare della conoscenza di dominio per individuare gli errori dell'IA, e i docenti possono affidarsi a diagnosi o feedback generati dall'IA che appaiono autorevoli ma sono infondati.

## Domande da considerare

- Gli studenti spesso mancano della conoscenza di dominio per individuare un errore dell'IA, e i docenti possono fidarsi di diagnosi IA dal suono autorevole. Come rende questa asimmetria di conoscenza tra IA e chi apprende l'allucinazione particolarmente pericolosa nell'educazione?
- Uno studio ha rilevato che un'IA che diagnosticava la matematica scritta a mano degli studenti poteva fabbricare citazioni di prove che non c'erano, affermando al contempo sicurezza. Quando un'IA suona certa e cita «prove», cosa dovrebbe spingervi a fermarvi e verificare?
- Se un tutor con [[intelligent-tutoring|IA]] convalida eccessivamente soluzioni errate e respinge eccessivamente ragionamenti validi ma non ottimali, quale sarebbe l'effetto a lungo termine sugli studenti e sui docenti che si fidano di esso?
- La pagina suggerisce revisione umana nel circuito, calibrazione della fiducia consapevole delle prove e ancoraggio a fonti verificate come mitigazioni. Quale di queste vi sembra più praticabile nel vostro contesto, e cosa potrebbe comunque non cogliere?
- Come potrebbe l'allucinazione interagire con la dipendenza eccessiva: perché un errore dell'IA è più pericoloso quando gli utenti si fidano dell'output acriticamente, piuttosto che quando sono scettici?
- Se doveste progettare uno strumento di [[ai-feedback-quality|feedback con IA]] per i vostri studenti, quali specifiche salvaguardie esigereste per proteggere dall'output plausibile ma errato — e come fareste a sapere che funzionano?

## Introduzione

L'allucinazione nell'IA educativa assume diverse forme documentate negli articoli di questa knowledge base: prove fabbricate nella [[assessment|valutazione degli studenti]], diagnosi errata e troppo sicura delle conoscenze di chi apprende, e spiegazioni dal suono plausibile ma errate che gli studenti accettano come vere. Il rischio è amplificato nell'educazione perché l'asimmetria di conoscenza tra IA e chi apprende colloca male quest'ultimo per verificare gli output dell'IA. Un ulteriore contesto è quello delle letture di corso generate dall'IA che sostituiscono un manuale: in un corso magistrale che aveva sostituito in questo modo il proprio testo commerciale, solo circa lo 0,80% delle 4.487 pagine registrate recava una citazione nel testo in stile APA e le stringhe DOI erano essenzialmente assenti, così che la maggior parte delle affermazioni non poteva essere verificata dall'interno dell'artefatto ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Quel divario di tracciabilità è distinto da una risposta sbagliata, perché il testo si legge come autorevole pur offrendo mezzi interni limitati di conferma.

Una revisione di 125 studi fornisce un intervallo sulla prevalenza e sul divario di individuazione: tassi di allucinazione del 10–40%, con studenti di medicina che individuavano gli errori dell'IA solo nel 44–55% dei casi ([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]).

**L'allucinazione nella valutazione** è particolarmente dannosa. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** ha rilevato che gli LLM fabbricano citazioni di prove non presenti nella scrittura a mano degli studenti quando diagnosticano le abilità cognitive, con il 58,5% delle diagnosi errate accompagnate da false affermazioni di confidenza probatoria. **[[llm-fallacy-misattribution]]** ha documentato la sovra-attribuzione sistematica di prove nel ragionamento degli [[llm]] — i modelli affermano supporto probatorio dove non ne esiste. Entrambi si collegano alle questioni di [[ai-ed-evaluation]] e di [[knowledge-tracing|tracciamento delle conoscenze]] sulla [[assessment-validity|validità della valutazione]]. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] aggiungono due modalità di fallimento visibili quando l'output dell'IA viene valutato anziché ispezionato: particolari fabbricati che sopravvivono alla correzione — un articolo recensito che non esiste, completo di un DOI irrisolvibile, e una numerosità campionaria riportata come 378 dove la fonte diceva 329 — e l'auto-contraddizione all'interno di una singola risposta, dove il modello ha ragionato fino all'opzione corretta e poi ne ha riportata una diversa nel riepilogo finale. Poiché le liste di riferimenti sono attualmente valutate per la formattazione anziché per l'accuratezza, questa classe di errori raggiunge un voto sufficiente pur fuorviando lo studente che usa lo stesso strumento per ripassare.

In un pilota di progettazione della valutazione, [[authentic-assessments-generative-ai-pilot-2026|Paula et al. (2026)]] hanno rilevato riferimenti fabbricati e stime temporali irrealistiche sopravvissuti a richieste ripetute e che hanno richiesto una revisione accademica sostanziale — allucinazione in uno strumento di stesura rivolto ai docenti anziché nel lavoro degli studenti.

Le **[[misconceptions|concezioni errate]] strategiche** sono un parente più sottile dell'allucinazione manifesta. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] hanno indotto sette modelli open-weight a produrre una «[[socratic-method|trappola socratica]]» per 35 concetti fondamentali dell'informatica — una spiegazione fluida e autorevole che poggia su un errore sottile e specifico del dominio — e tre esperti di dominio hanno confermato 221 dei 241 segmenti sollecitati (91,7%) come concezioni errate strategiche, senza differenze significative tra i domini dell'informatica. Gli errori erano prevalentemente concettuali anziché fattuali (66,5% contro 33,5%) e nessuno era puramente logico, ed erano stati valutati da moderatamente ad altamente persuasivi (M = 3,71 su una scala a cinque punti), con l'identità del modello a spiegare il 43% della varianza. Poiché le singole affermazioni possono essere corrette mentre la relazione tra esse è sbagliata, la verifica fattuale è insufficiente; gli autori sostengono che [[ai-literacy|chi apprende]] ha bisogno di verifica concettuale e validazione del modello mentale. Essi avvertono inoltre che il tasso misura la capacità sotto [[prompt-engineering|prompting]] avversariale anziché la prevalenza di tali errori nell'uso ordinario, e che nessuno studente è stato testato, quindi non è stato misurato alcun inganno o esito di apprendimento.

**Prove manipolate anziché fabbricate.** Una modalità di fallimento correlata nella [[automated-assessment|correzione automatizzata]] è l'output spostato dall'esterno. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] ha sottoposto a red-teaming un flusso di lavoro di routine per la correzione con IA e ha rilevato che istruzioni nascoste dentro il file consegnato alzavano il voto di un saggio insufficiente senza alcun avviso visibile in 9 iterazioni su 9 per una strategia e 17 su 18 per un'altra. Due dettagli hanno peso per la [[trust-calibration|fiducia]]: un'iniezione rilevata è stata bloccata disabilitando silenziosamente la chat e non è mai stata segnalata all'utente, e in un'esecuzione in cui lo strumento aveva annunciato che avrebbe seguito solo le istruzioni ufficiali del compito, sei rilanci dello stesso file hanno comunque alzato il voto. Un voto ottenuto in questo modo non reca alcuna pretesa di [[assessment-validity|validità]], e poiché la manipolazione non lascia traccia durevole, l'[[human-in-the-loop-ai|istruttore]] resta l'unico vero controllo su output progettati per non essere visibili.

Le difese contro tali manipolazioni comportano il proprio compromesso: una pipeline di salvaguardie a più strati ha lasciato il 46,34% delle iniezioni con successo e Prompt Guard il 38,48%, mentre NeMo Guardrails ha bloccato ogni attacco ma ha segnalato il 16,22% delle interrogazioni legittime degli studenti — un tasso di falsi positivi che è esso stesso un danno pedagogico in un tutor ([[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]).

**L'allucinazione nel tutoraggio** incide direttamente sull'apprendimento. **[[yasir-llm-tutoring-agents-2026]]** ha rilevato che gli LLM convalidano eccessivamente soluzioni errate mentre respingono eccessivamente ragionamenti validi ma non ottimali — fallimenti sistemici che fuorvierebbero sia gli studenti sia i docenti. **[[eduframetrap-llm-sycophancy-educational-safety]]** e **[[eduguard-safe-rag-llm-tutor]]** affrontano i meccanismi di sicurezza per gli LLM educativi. Questi rischi si collegano alla [[pedagogical-safety]] e ai requisiti di [[human-in-the-loop-ai]].

**Gli approcci di mitigazione** includono progettazioni [[human-in-the-loop-ai|human-in-the-loop]] in cui l'IA supporta anziché sostituire il giudizio dei [[teacher-role|docenti]], architetture consapevoli delle prove che calibrano la fiducia in base alla qualità probatoria (come sostenuto da MathCog), e ancoraggio basato sulla [[rag]] che vincola gli output degli LLM a fonti verificate. Il concetto [[cognitive-offloading|dipendenza eccessiva]] è strettamente correlato — l'allucinazione è più pericolosa quando gli utenti si fidano acriticamente degli output dell'IA. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] aggiunge una modalità di fallimento che la pila di mitigazioni non copre pienamente: affermazioni istituzionali eccessivamente specifiche, con circa l'1,03% delle pagine registrate che abbina un campus nominato come «Sacramento State» a verbi assertivi su regole riviste di permanenza, tenure e promozione o su Ordini Esecutivi della CSU, nessuno dei quali verificabile dal testo. La specificità è ciò che rende questo costoso, poiché un dettaglio locale fabbricato appare abbastanza esatto da superare il controllo di plausibilità di un lettore, e il rimedio proposto dallo studio è procedurale anziché tecnico: trattare la generazione come produzione di bozze sotto revisione del docente, poi curare le fonti in una progettazione aumentata da recupero.

**L'inaffidabilità dichiarata ha abbassato la dipendenza riportata anziché alzarla.** Quando 546 partecipanti hanno letto lo stesso dialogo con IA generativa etichettato o come contenente informazioni fabbricate o come verificato accurato, l'etichetta «fabbricato» ha prodotto minore [[trust|fiducia]] e controllabilità percepita e maggiore dissonanza cognitiva e frustrazione insieme a punteggi di dipendenza *più bassi* (M = 2,935 contro 3,254) ([[frontiers-gai-hallucination-dependence-2026|Liu et al. (2026)]]). Il risultato qualifica la logica della dipendenza eccessiva di questa pagina: vedere che un output può essere fabbricato non equivale a continuare ad appoggiarvisi.

**I segnali di credibilità possono invece amplificare la deferenza.** Il movimento opposto compare quando un output inaffidabile viene agghindato: aggiungere citazioni e segnali di credibilità all'interfaccia di dibattito ARMADA ha alzato del 112% la frazione di partecipanti che abbandonavano un giudizio iniziale corretto per una posizione errata dell'IA (31,8% contro 15,0%), e il controllo manuale ha rilevato alcuni casi citati attribuiti male a riferimenti irrilevanti o fittizi ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

## Idee sbagliate comuni

- **«Gli studenti si accorgeranno degli errori.»** Una **revisione di 125 studi** colloca i tassi di allucinazione al **10-40%**, con **gli studenti di medicina — tra i discenti più selezionati dell'istruzione superiore — che individuano gli errori dell'IA solo nel 44-55% dei casi**. Tassi di individuazione ben sotto un'affidabilità da livello di caso significano che l'onere non può ricadere sul lettore.
- **«Gli errori sono evidenti quando compaiono.»** Un'IA che diagnosticava matematica scritta a mano poteva **fabbricare citazioni di prove che non c'erano affermando al contempo sicurezza**. Il fallimento non era una risposta plausibile ma errata; era un supporto inventato presentato con certezza, che è il tipo più difficile da cogliere perché si legge esattamente come la prova che un lettore attento vorrebbe.
- **«Un output senza citazioni è un problema di formattazione.»** In un corso magistrale che aveva sostituito il proprio manuale commerciale con letture generate dall'IA, solo **circa lo 0,80% di 4.487 pagine registrate recava una citazione nel testo in stile APA**. È un'assenza di provenienza a livello di corpus, non un'omissione occasionale, e significa che la verifica non ha un punto di partenza.
- **«L'allucinazione è un problema di generazione dei modelli che i modelli più nuovi risolvono.»** L'intervallo dei tassi va dal 10 al 40% su 125 studi, il che è una proprietà del compito e del dispiegamento tanto quanto del modello. Ridurre i tassi è un progresso reale e non cambia il fatto che un lettore debba poter verificare.

## Concetti collegati

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]

## Articoli collegati

- [[frontiers-gai-hallucination-dependence-2026]] — Labeling a GAI dialogue as fabricated lowered trust and dependence together
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Credibility cues raised deference to AI output, with some cited cases misattributed or fictitious
- [[ivory-psychology-assessment-integrity-2026]] — Fabricated citations and self-contradicting outputs inside passable student work (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: fluently plausible explanations that are wrong at the conceptual level (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Hidden prompt injections raise AI-graded marks undetected, and detected attacks go unreported (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education
