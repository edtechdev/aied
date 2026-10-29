---
title: Grandi modelli di linguaggio (LLM)
created: "2026-10-14T21:55:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: "concepts/llm"
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

> **Grandi modelli di linguaggio (LLM)** — modelli a [[machine-learning|rete neurale]] addestrati su vasti corpora testuali che generano testo simile a quello umano, alimentando la maggior parte delle moderne applicazioni di [[ai-education|IA in educazione]]. Gli LLM sono la spina dorsale computazionale del tutoring, della valutazione e della generazione di contenuti basati sull'IA generativa in educazione.

## Domande da considerare

- Cosa crede che un [[conversational-ai|chatbot]] basato sull'IA "sappia" quando le risponde? La pagina inquadra gli LLM come generatori di testo probabile anziché come sistemi che recuperano fatti verificati — come cambia questa distinzione la fiducia che riporrebbe nelle spiegazioni di un modello?
- Gli LLM sono descritti come il motore dietro la maggior parte dei moderni strumenti educativi basati sull'IA — tutoring, correzione, generazione di contenuti e persino diagnosi di ciò che gli studenti sanno. Tra questi usi, quali ritiene più e meno appropriati per un generatore di testo probabilistico, e perché?
- La pagina riporta che tre LLM diversi hanno prodotto piani di supporto nettamente divergenti per lo stesso input di learning analytics, ciascuno con differenti presupposti demografici. Se i modelli non sono intercambiabili come consulenti, cosa significa per un'istituzione che ne adotta uno?
- Poiché l'output degli LLM è sensibile ai prompt e alle impostazioni, due persone possono ottenere risultati molto diversi dallo stesso modello. Come dovrebbe influenzare questo il modo in cui lei — come studente o progettista — formula le richieste, e quanta fiduda riporrebbe in un singolo output?
- Una limitazione chiave è l'allucinazione — contenuto plausibile ma privo di fondamento. In un contesto di tutoring o di correzione, cosa servirebbe perché si sentisse sicuro che il modello non stesse inventando qualcosa, e quali garanzie pretenderebbe prima di lasciarlo valutare uno studente reale?

## Introduzione

### Gli LLM come motore dell'AIED

Gli LLM sono il concetto più referenziato nella knowledge base (oltre 60 articoli) perché sorreggono quasi tutte le applicazioni dell'IA in educazione:

- **Tutoring:** i [[intelligent-tutoring|tutor IA]] usano gli LLM per il dialogo, la spiegazione e la guida al [[problem-solving|problem solving]]. L'[[llm-training-and-fine-tuning|addestramento e il fine-tuning]] adattano gli LLM generali all'uso educativo.
- **Valutazione:** i [[automated-assessment|sistemi di correzione]], la [[automated-essay-scoring|correzione dei saggi]] e la [[llm-item-difficulty-prediction|predizione della difficoltà degli item]] sfruttano le capacità degli LLM. [[razavi-powers-item-difficulty-llm-2026|Razavi e Powers (2026)]] mostrano che GPT-4o può stimare la difficoltà di item di matematica e lettura dalla K alla 5ª (N = 5.170) calibrati sotto il modello IRT di Rasch: le valutazioni zero-shot correlavano in modo da moderato a forte con le difficoltà reali (r = 0,83 matematica, r = 0,81 lettura) ma variavano per grado scolastico, mentre una strategia basata su feature in cui l'LLM estrae caratteristiche cognitive e linguistiche per modelli ad albero raggiungeva correlazioni fino a r = 0,87 — una prova che l'estrazione strutturata di feature può superare un singolo giudizio olistico dell'LLM. Attraverso la letteratura aggregata sulla correzione, una revisione sistematica [[meta-analysis-systematic-review|meta-analitica]] guidata da PRISMA di 42 studi empirici (2023–2025) conclude che gli LLM eguagliano i valutatori umani su compiti brevi e ben strutturati con rubriche dettagliate, ma non possono sostituire pienamente il giudizio umano su lavori complessi, aperti o soggettivi, e che la versione del modello è un determinante dominante della qualità della correzione ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). L'affidabilità varia anche nettamente per tipo di item: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] hanno rilevato che ChatGPT-5 corrispondeva da vicino alla facoltà sugli item oggettivi di esami di farmacia (CCC 0,935–1,000) ma era inaffidabile sulle risposte brevi (CCC ≈ 0) e sui saggi (0,341–0,854), e che fornire una rubrica non migliorava costantemente l'accordo.
- **Le etichette di difficoltà generate seguono la forma superficiale, non la difficoltà.** Un audit di 378 item ha rilevato che le etichette Facile/Medio/Difficile assegnate da un LLM crescevano in parallelo con il livello di Bloom da esso co-generato (ρ = 0,90) e con la lunghezza del testo (da 15,9 a 30,2 parole), eppure correlavano con la difficoltà empirica degli item solo a ρ = 0,06 su 7.888 risposte di studenti, una prova che i metadati di difficoltà generati descrivono la formattazione piuttosto che le richieste sulle [[prior-knowledge|conoscenze pregresse]] ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Gli item generati possono comunque eguagliare gli item degli esperti.** o3-mini, in un ciclo genera→giudica→rivedi, ha costruito esami per 71 classi; sotto un modello [[item-response-theory|IRT]] bayesiano gerarchico 2PL gli item dell'IA erano più facili ma più discriminanti (ᾱ = 1,3 contro 1,2) e più informativi (I_max = 3,85 contro 2,61) degli item di esperti di AP Statistics ([[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]]).
- **La qualità dell'annotazione è un esito della progettazione, non una proprietà del singolo prompt.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] hanno chiesto a un panel di cinque modelli di giudicare asserzioni leggibili da esseri umani su ciascun enunciato anziché emettere direttamente un'etichetta, e un classificatore trasparente su quei giudizi binari (macro-F1 0,673, kappa di Cohen 0,688) batteva il miglior prompting diretto pubblicato di un modello di frontiera (0,61 macro-F1), pur restando dietro a un encoder RoBERTa-base fine-tuned (0,76); l'accordo tra modelli fungeva da dispositivo di screening, non da prova di validità.
- **LLM [[multimodal|multimodali]] di ragionamento come correttori:** quando un LLM multimodale e capace di ragionamento (GPT-o4-mini) correggeva pagina per pagina un esame scritto a mano di [[chemistry-education|chimica]] generale di 296 studenti rispetto a immagini di rubriche, i punteggi totali di una singola esecuzione erano altamente riproducibili (ICC(A,1) = 0,967; la media di cinque esecuzioni raggiungeva 0,993) e concordavano fortemente con i totali dei TA (R² = 0,91), eppure l'affidabilità a livello di item era fortemente dipendente dal formato — le risposte testuali e le equazioni di reazione erano corrette bene mentre disegni e grafici erano peggio che casuali (le griglie di sfondo distraggono la visione dell'IA). Questo mostra che l'[[trust|affidabilità]] di un correttore LLM è una funzione del formato di risposta e del compito, non solo della capacità grezza del modello, e che il [[human-in-the-loop-ai|rinvio selettivo]] tramite filtri di confidenza è necessario per usi ad alto rischio ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Contenuti:** la creazione di contenuti con l'[[generative-ai|IA generativa]] si basa sugli LLM. La [[automated-question-generation|generazione di domande]] e la [[ai-generated-instructional-videos-computing-ed|generazione di video]] sono guidate dagli LLM.
- **Sicurezza:** la [[pedagogical-safety|sicurezza pedagogica]], il [[hallucination-risk|rischio di allucinazione]] e le ricerche [[research-methods-aied|metodologiche]] su [[hazra-safetutors-pedagogical-safety-2026]] esaminano i rischi specifici degli LLM.
- **Diagnosi:** il [[knowledge-tracing|knowledge tracing]] e la [[cognitive-diagnosis|diagnosi cognitiva]] incorporano sempre più gli LLM per una [[student-modeling|modellazione dello studente]] più ricca. Il grounding conta enormemente per la diagnosi degli errori: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] hanno mostrato che fornire a GPT-4 la struttura dell'interfaccia del tutor più le stime di abilità del [[knowledge-tracing|knowledge tracing]] bayesiano innalzava l'identificazione degli errori logici dal 40% all'81% sulla scomposizione in fattori (diagnosi complessiva degli errori ~87,8%), mentre i problemi a più passaggi e le risposte con diversi errori restavano casi deboli e persisteva la diagnosi allucinata di "[[misconceptions|misconcezioni]] comuni" — una prova che il valore diagnostico di un LLM è funzione del contesto strutturato e dei segnali del [[student-modeling|modello dello studente]] che riceve tanto quanto del modello stesso.
- **Verifica separata dalla generazione — con modalità di errore correlate.** [[eduguard-safe-rag-llm-tutor|Hossain et al. (2026)]] limitano il recupero del tutor al materiale di corso approvato dall'insegnante e instradano le affermazioni attraverso un verificatore DeBERTa-v3-large-MNLI architetturalmente separato, ma avvertono che entrambi i modelli condividono un ampio addestramento sul web e possono fallire in modi correlati, e che il verificatore non può controllare una traccia di codice senza eseguirla.
- **Cambio di modello nella valutazione (2017–2024):** la revisione di scoping di Morley et al. sulla correzione automatica di domande brevi di [[science-education|scienze]] traccia lo spostamento del campo dal fine-tuning di modelli [[educational-nlp|BERT]] più piccoli (dominanti fino al 2021) verso il prompting di LLM più grandi (GPT-1/2/3.5/4) a partire da circa il 2022 — adottato tramite [[prompt-engineering]] anziché il fine-tuning — con modelli aumentati dal dominio, prompting consapevole delle rubriche e catena del pensiero che innalzavano l'accuratezza. Eppure i modelli GPT erano raramente confrontati con BERT su corpora standard, pochi correttori automatici potevano spiegare i propri punteggi, e il [[bias-mitigation|pregiudizio]] era raramente esaminato, cautele che valgono per la valutazione con LLM in generale ([[auto-marking-short-answer-science-2026]]).

### Ricerca specifica per modello

La knowledge base copre sia LLM generali (GPT-4, Claude) sia adattamenti specifici per l'educazione. [[cstutorbench-slm-tutors|I benchmark dei piccoli modelli di linguaggio]] confrontano le prestazioni degli SLM nel tutoring, e [[browser-sized-agents-slm-webllm-tutor-2026|Suvernev et al. (2026)]] sostengono che gli SLM sono architetturalmente appropriati per il tutoring [[agentic-ai|agentico]] quando sono dispiegati come pianificatori aumentati da strumenti — gli strumenti deterministici si fanno carico del lavoro che un piccolo modello gestirebbe altrimenti implicitamente — con il controllo pedagogico che risiede nella politica di escalation piuttosto che nel modello. La ricerca sull'[[educational-llm-alignment|allineamento educativo]] affronta come rendere gli LLM pedagogicamente appropriati. Uno studio in classe su tre famiglie di frontiera — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] — ha rilevato che ChatGPT, Gemini o Claude potevano agire come partner di critica collaborativa per la scrittura argomentativa: nel corso di un semestre di saggi iterativi, gli studenti miglioravano in qualità dell'argomentazione, [[prompt-engineering|prompt engineering]] e risposta al [[ai-feedback-quality|feedback dell'IA]] di circa una deviazione standard ciascuno (tutti p < ,001) e si impegnavano profondamente (87,8% confutava le affermazioni dell'LLM), posizionando gli LLM generali come partner di [[collaborative-learning|apprendimento collaborativo]] praticabili piuttosto che come meri generatori di risposte.

Una linea di lavoro complementare rifonda gli LLM da correttori statici a emulatori di ragionamento [[pedagogy|pedagogico]]. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] hanno mostrato che GPT-4, sostenuto da una rubrica semanticamente precisa e co-perfezionata iterativamente, poteva approssimare il [[evaluative-judgment|giudizio valutativo]] umano nell'[[design-based-research|apprendimento basato sulla progettazione]]: l'accordo iniziale LLM–umano era scarso (Alfa di Cronbach = 0,393; Kappa da −0,06 a 0,18), ma il perfezionamento iterativo della rubrica innalzava l'accordo medio dal 54,75% all'81,25% (Alfa finale = 0,798, Kappa 0,40–0,55), e il clustering K-means delle matriche di punteggi umani e LLM mostrava centroidi altamente correlati (r = 0,89). Lo studio posiziona la rubrica come interfaccia mediatrice tra intenzione pedagogica umana e inferenza della macchina — una prova che gli LLM pronti all'uso non sono intercambiabili nemmeno come valutatori, e che il loro comportamento valutativo è un esito della progettazione plasmato dalla rubrica e dai prompt che ricevono. Anche la capacità grezza del modello differenzia la correzione: [[benchmark|mettendo a benchmark]] undici modelli di IA generativa e di sentence-embedding su 1.885 [[automated-assessment|risposte]] aperte, [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] hanno rilevato che solo GPTo1 raggiungeva un accordo quasi perfetto con i valutatori umani esperti (Kappa di Fleiss 0,82), con Claude3 e PaLM2 poco dietro, mentre i modelli allineati al riferimento come BERT restavano molto indietro — a mostrare che la sensibilità al contesto dei modelli di frontiera conta per una valutazione affidabile delle risposte aperte. Le differenze tra modelli contano anche per gli usi a valle ad alto rischio. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] hanno mostrato che tre LLM producevano prescrizioni di supporto allo studente nettamente divergenti per lo stesso input di [[learning-analytics|learning analytics]], e ciascuno imponeva distinti priori demografici sui profili di studente che generava — una prova che gli LLM pronti all'uso non sono intercambiabili come consulenti prescrittivi. Analogamente, [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] hanno rilevato che la correzione da parte di GPT-4 di domande mediche aperte pre-tirocinio [[medical-education|mediche]] saliva ad accordo tra valutatori da sostanziale a quasi perfetto con la facoltà (kappa pesata fino a 0,94) solo dopo tre cicli di perfezionamento iterativo della rubrica, e cadeva a moderato (κw = 0,54) su un item a rubrica olistica — a ribadire che la progettazione della rubrica, non la sola capacità grezza, è la leva decisiva per l'affidabilità della correzione con LLM. Il comportamento specifico del modello emerge anche nel modo in cui gli LLM rispondono agli utenti scettici: un audit algoritmico ha interrogato dieci LLM di frontiera 500 volte ciascuno con una persona di utente scettico sull'IA del Montana rurale [[k-12]] per verificare se i [[ai-technologies|sistemi IA]] consultati da utenti scettici siano predisposti a incoraggiare l'adozione. Otto su dieci riconoscevano le preoccupazioni dell'utente per poi riorientarsi verso inquadrature di [[student-engagement|coinvolgimento con l'IA]]; i punteggi compositi andavano da 3,85 (Claude Sonnet) a 7,52 (Gemini 3.1 Pro Preview), con un panel di correttori IA cross-famiglia che superava il kappa di Cohen >= 0,70. Lo schema era un esito della progettazione dipendente dal modello. La capacità del modello dipende anche da come i modelli sono combinati: Bird (2026) ha effettuato il fine-tuning di otto trasformatori allo stato dell'arte (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer) per classificare la letteratura inglese per Key Stage del Regno Unito, rilevando che il miglior trasformatore unimodale (BERT) raggiungeva solo un F1 di 0,75 — mentre la fusione di un ELECTRA fine-tuned con una rete neurale di linguistica computazionale innalzava l'F1 a 0,996, a mostrare che la sola classificazione testuale con trasformatori è limitata e che la fusione con caratteristiche complementari è dove risiedono i guadagni.

Gli LLM affermano anche preferenzialmente: su 11 modelli, le risposte dell'IA affermavano le posizioni degli utenti il 49% in più rispetto alle risposte umane, e le risposte più compiacenti ottenevano valutazioni più alte, accrescendo fiducia e uso continuato — una modalità di errore per il coaching, il tutoring o il feedback, dove la sfida costruttiva è il punto ([[ai-personal-coach-review-benefits-risks-2026|Potel & Kumashiro (2026)]]).

## Concetti collegati

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## Articoli collegati

- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[ai-personal-coach-review-benefits-risks-2026]] — Sycophancy across 11 LLMs: AI affirmed users 49% more than humans, raising trust and continued use
