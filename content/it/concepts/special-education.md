---
title: Istruzione speciale
created: "2026-10-14T22:10:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
connected_resources: [teacherserver]
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
translation_of: concepts/special-education
source_updated: "2026-10-26T08:20:00-04:00"
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

> **Istruzione speciale** — la progettazione e l'erogazione dell'istruzione per studenti con disabilità, che abbraccia differenze cognitive, fisiche, sensoriali e dello sviluppo neurologico. La [[research-methods-aied|ricerca]] sull'[[ai-education|IA nell'educazione]] in questa knowledge base esplora come gli strumenti di IA possano supportare bisogni diversi di chi apprende attraverso la [[personalized-learning|personalizzazione]], lo [[scaffolding|scaffold adattivo]] e interfacce accessibili — esaminando al tempo stesso i rischi di [[ai-technologies|sistemi di IA]] che trascurano o emarginano gli studenti disabili.

> ⚠️ **Istruzione speciale è innanzitutto un termine del [[k-12]].** È radicato nell'Individuals with Disabilities Education Act (IDEA) statunitense e nel sistema basato sul diritto agli Individualized Education Programs (IEP) che regola i servizi di istruzione speciale nella scuola primaria e secondaria. Nell'[[higher-ed|istruzione superiore]] — e sempre più spesso anche nel K-12 — l'inquadratura più comune è il **[[universal-design-for-learning|Universal Design for Learning]]** (un framework di progettazione proattivo che avvantaggia tutti coloro che apprendono) insieme all'[[accessibility]] e alle [[assistive-technology|tecnologie assistive]] anziché l'"istruzione speciale". Un articolo del K-12 sull'istruzione speciale e un pezzo universitario sull'UDL riguardano contesti sovrapposti ma distinti; la knowledge base conserva entrambi perché la letteratura di ricerca abbraccia entrambi. Quando una fonte riguarda l'istruzione superiore e gli studenti disabili, di solito è meglio collegarla all'[[universal-design-for-learning]], all'[[accessibility]] o all'[[inclusive-learning]] che all'istruzione speciale.

## Domande da considerare

- La pagina sottolinea che "istruzione speciale" è innanzitutto un termine del K-12, basato sul diritto e radicato nell'IDEA e negli IEP, mentre l'istruzione superiore parla più spesso di Universal Design for Learning e accessibilità. Perché pensi che questi contesti differiscano, e cosa rivela questa differenza?
- La promessa di personalizzazione dell'IA sembra fatta su misura per coloro che apprendono con bisogni diversi. Ma se un sistema può adattarsi ai "profili cognitivi individuali", cosa può andare storto quando il modello di una disabilità è troppo grossolano o del tutto assente?
- La ricerca include strumenti di IA progettati per profili di disabilità specifici (ad esempio studenti dislessici o sordi e con problemi di udito). Quali rischi vedi nel progettare per profili ristretti rispetto al progettare universalmente per tutti coloro che apprendono fin dall'inizio?
- In che modo i sistemi di IA costruiti per lo studente "medio" possono finire per trascurare o emarginare gli studenti disabili, anche involontariamente — e di chi è la responsabilità di impedirlo?
- Cosa significherebbe per uno strumento di IA includere davvero, anziché meramente accogliere, uno studente con disabilità — e come riconosceresti la differenza nella pratica?

## Introduzione

L'istruzione speciale è un dominio in cui la capacità dell'IA di personalizzare e adattare offre una promessa particolare. A differenza dell'istruzione uguale per tutti, gli [[intelligent-tutoring|tutor di IA]] possono in teoria adattarsi ai profili cognitivi individuali, ai bisogni comunicativi e ai ritmi di apprendimento. Gli articoli di questa knowledge base abbracciano l'IA per profili di disabilità specifici, le esperienze di chi apprende neurodivergente e prospettive critiche su IA e disabilità.

**Tutoring con IA specifico per la disabilità** adatta l'IA a bisogni particolari di chi apprende. **[[special-r1-rl-special-education|Special-R1]]** estende il [[reinforcement-learning|reinforcement learning]] per modellare la diversità cognitiva e comunicativa attraverso cinque profili di disabilità, usando prompt persona-aware e ricompense sul pensiero per plasmare le risposte del tutor per ciascun apprendente. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** ha analizzato come gli studenti dislessici vivono gli strumenti di IA, rivelando sia il valore dell'IA per il supporto all'alfabetizzazione sia barriere di accessibilità persistenti. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** hanno progettato un sistema di generazione di domande basato su [[llm]] per gli studenti [[accessibility|sordi e con problemi di udito]], introducendo strategie di domanda Visive ed Emotive e raffinando iterativamente le domande con la comunità di riferimento per superare il disallineamento tra i prompt testuali dell'IA e le prime lingue basate sulla lingua dei segni. **[[embodied-string-learning-blindness-low-vision-musicians]]** ha sviluppato strategie di apprendimento non visive con musicisti ciechi e ipovedenti, centrando il [[embodied-learning|design incarnato]] guidato dalla disabilità. Questi si collegano all'[[inclusive-learning]] e alla [[neurodiversity]].

**Esperienze di chi apprende neurodivergente** mettono al centro studenti autistici e con ADHD. **[[neurodivergent-computing-students|Zastudil et al.]]** hanno rilevato che gli studenti neurodivergenti di informatica hanno bisogno di compiti strutturati, team piccoli e stabili e definizioni di ruolo esplicite — requisiti di progettazione che gli strumenti di [[collaborative-learning]] devono affrontare. **[[adhd-video-segmentation-computing-education]]** ha dimostrato che i video segmentati dall'IA hanno eliminato il divario di performance nell'ADHD. Entrambi si collegano al [[learning-design]] e all'[[universal-design-for-learning]].

**Prospettive critiche** esaminano come l'IA possa emarginare chi apprende con disabilità. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** sostiene che i sistemi di IA emarginano attivamente la conoscenza centrata sulla disabilità a causa dei dati di addestramento occidentocentrici — collegandosi alle preoccupazioni di [[equity-in-ai-education]] sulla giustizia epistemica.

**L'IA per la dislessia attraverso rilevamento, supporto e apprendimento personalizzato.** Una revisione sistematica interdisciplinare del 2026 [[meta-analysis-systematic-review|(revisione sistematica)]] (Dabaghi, D'Urso & Sciarrone, guidata dal PRISMA, 2018–2024, n=72) mappa come l'IA supporta gli studenti con dislessia nell'istruzione, rilevando che l'IA è usata per il rilevamento, il supporto assistivo e l'apprendimento personalizzato — ma con questi filoni che evolvono in parallelo anziché in integrazione, spinti più dall'opportunità tecnologica che da una teoria educativa consolidata. Gli strumenti di aiuto all'istruzione basati su ML ricadono in cinque aree (applicazioni specifiche, impegno, personalizzazione, raccomandazione, supporto generico) eppure enfatizzano la performance tecnica e l'accuratezza della classificazione, trascurando la validità ecologica e l'impiego pratico in classe. La ricerca sul rilevamento (EEG, eye-tracking, modelli ML) privilegia l'intervento precoce e mostra una promessa diagnostica, ma spesso richiede apparecchiature specializzate e ambienti controllati, limitando la scalabilità e l'accessibilità nei contesti scolastici tipici. Le sfide aperte includono la limitata validazione sperimentale, la scalabilità, le preoccupazioni di [[ethics]]/privacy sui dati sensibili degli studenti, il limitato supporto e formazione per gli insegnanti, e le barriere linguistiche e culturali (la maggior parte della ricerca si rivolge a popolazioni anglofone).

**Offloading cognitivo per studenti con disturbi dell'apprendimento (SWLDs).** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]], una revisione concettuale in una serie speciale di *Learning Disability Quarterly* sull'IA per studenti con LD, reinquadrano l'uso dell'[[generative-ai|IA generativa]] per gli SWLD attraverso la lente del [[cognitive-offloading]]. Sostengono che l'IA generativa può essere un **aiuto compensativo o una scorciatoia** a seconda di come le decisioni di offloading interagiscono con i profili cognitivi e [[motivation|motivazionali]] degli SWLD (sfide nelle funzioni esecutive e nella memoria di lavoro, carico cognitivo accresciuto, obiettivi di performance che evitano lo sforzo, minore autoefficacia accademica e aspettative gonfiate verso l'IA generativa) e con la progettazione didattica. Per lettura e scrittura, l'IA generativa può sostenere l'accesso con uno scaffold (adeguamento del livello del testo, sintesi, output [[multimodal]], pianificazione, stesura, feedback di revisione) preservando al tempo stesso l'[[student-engagement|impegno]] di ordine superiore — ma un offloading eccessivo rischia di bypassare i processi di comprensione, pianificazione e monitoraggio che sono già fragili per questi apprendenti, favorendo la "pigrizia [[metacognition|metacognitiva]]" e aggravando le difficoltà di alfabetizzazione tra i domini. L'articolo posiziona le **[[guardrails|protezioni didattiche]]** come fattore moderante chiave e raccomanda di [[teacher-role|insegnare]] l'offloading strategico, costruire l'[[ai-literacy]] per calibrare la fiducia negli strumenti, sequenziare le esperienze di padronanza per costruire l'[[self-efficacy]], e allineare compiti e valutazione agli obiettivi IEP che privilegiano lo sviluppo delle competenze sulla sostituzione. Questo estende la copertura dell'istruzione speciale nella knowledge base alla dimensione di equità dell'offloading: lo stesso strumento che abbassa le barriere all'accesso può, se non sorvegliato, sostituirsi alla pratica di cui gli SWLD hanno più bisogno.
**I contenuti di intervento generati dall'IA necessitano di controlli prima della generazione, non solo di revisione.** [[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]] hanno rilevato che i professionisti hanno valutato lo strumento Social Story co-progettato altamente usabile (SUS 86,8) eppure ne hanno definito le immagini genericamente occidentali e il suo tracciatore di comportamenti disallineato dal giudizio clinico legato agli obiettivi — vincoli che avrebbero impostato prima della generazione.

[[vlm-task-planning-humanoid-robot-autism-education-2026|Kudláčková (2026)]] parte dai materiali anziché dalla conversazione: un modello visione-linguaggio legge le fotografie di Shoebox Tasks — progettati in modo che l'obiettivo sia visibile negli oggetti — e le trasforma in un piano che un robot umanoide Nao esegue o dimostra, riportando l'accuratezza del piano su sei compiti e nessun dato sugli studenti.
- **Il comportamento di sfida è il punto in cui i benchmark dei tutor si fermano.** Su 923 dialoghi ancorati a casi tratti dalla letteratura di istruzione speciale e di psicologia dell'educazione, il migliore di 11 modelli soddisfaceva un intervento documentato nel 55,8% dei casi aperti e nel 43,3% dei piani a lungo termine ([[tutor-case-bench-challenging-behaviors-2026|Park et al. (2026)]]).

## Implicazioni per gli insegnanti di istruzione speciale

- **Co-progettare l'IA con gli studenti di riferimento e la comunità.** La [[llm-question-generation-deaf-hard-of-hearing-2026|generazione di domande per studenti sordi/con problemi di udito]] mostra il valore del raffinamento iterativo dell'IA con la comunità per colmare il divario tra i prompt testuali e le prime lingue basate sulla lingua dei segni — coinvolgete chi apprende e le sue comunità nella progettazione anziché presumere che l'IA si adatti a loro.
- **Far corrispondere l'IA a profili di disabilità specifici, non all'accessibilità generica.** [[special-r1-rl-special-education|Special-R1]] modella la diversità cognitiva e comunicativa attraverso i profili di disabilità; [[dyslexlens-dyslexic-learners-ai|DysLexLens]] documenta sia il valore per l'alfabetizzazione sia le barriere di accessibilità persistenti che gli studenti dislessici affrontano — scegliete strumenti allineati al profilo di ciascun apprendente e siate attenti alle barriere non soddisfatte.
- **Strutturare la collaborazione per chi apprende neurodivergente.** Gli [[neurodivergent-computing-students|studenti neurodivergenti di informatica]] hanno bisogno di compiti strutturati, team piccoli e stabili e ruoli espliciti — applicate questi requisiti di progettazione a qualsiasi attività collaborativa mediata dall'IA.
- **Usare l'IA per ridurre (non allargare) i divari di performance.** I [[adhd-video-segmentation-computing-education|video segmentati dall'IA]] hanno eliminato il divario di performance nell'ADHD — impiegate l'IA adattiva dove l'evidenza mostra che equalizza gli esiti, non dove si limita ad automatizzare.
- **Centrare il design incarnato guidato dalla disabilità.** La ricerca sui [[embodied-string-learning-blindness-low-vision-musicians|musicisti ciechi/ipovedenti]] mostra che le strategie non visive guidate dalla disabilità superano le interfacce visive predefinite — costruite e adattate l'IA con le competenze degli studenti disabili.
- **Guardarsi dall'emarginazione epistemica.** Le [[genai-minoritized-knowledges-disability|prospettive critiche]] avvertono che i dati di addestramento occidentocentrici possono emarginare la conoscenza centrata sulla disabilità — verificate contenuti e strumenti di IA per la giustizia epistemica insieme all'[[equity-in-ai-education]].

## Idee sbagliate comuni

- **"I giudizi di usabilità validano uno strumento assistivo."** I professionisti hanno valutato uno strumento Social Story co-progettato **altamente usabile (SUS 86,8)** eppure ne hanno definito le **immagini genericamente occidentali** e il **tracciatore di comportamenti disallineato dal giudizio clinico legato agli obiettivi**. Un'usabilità alta coesisteva con fallimenti sostanziali, quindi un punteggio SUS non è un avallo di adeguatezza.
- **"I benchmark generici ti dicono come un tutor gestisce i casi di istruzione speciale."** Su **923 dialoghi ancorati a casi** tratti dalla letteratura di istruzione speciale e di psicologia dell'educazione, **il migliore di 11 modelli** soddisfaceva un criterio documentato — e **il comportamento di sfida è il punto in cui i benchmark dei tutor si fermano**. Le valutazioni standard non raggiungono i casi in cui i professionisti hanno più bisogno di aiuto.
- **"Chi apprende neurodivergente ha bisogno di accomodamenti, non di requisiti di progettazione."** [[neurodivergent-computing-students|Zastudil et al.]] hanno rilevato che gli studenti neurodivergenti di informatica hanno bisogno di **compiti strutturati, team piccoli e stabili e definizioni di ruolo esplicite** — requisiti generali di progettazione che avvantaggiano tutti, non aggiustamenti individuali concessi dopo la diagnosi.

## Concetti collegati
- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## Articoli collegati
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench: evaluating LLM tutors on students with challenging behaviors (Park et al. 2026)
- [[seung-basham-cognitive-offloading-swld-2026]] — GenAI cognitive offloading for students with learning disabilities
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
- [[vlm-task-planning-humanoid-robot-autism-education-2026]] — A vision-language model plans Shoebox Tasks for a Nao robot (Kudláčková 2026)
