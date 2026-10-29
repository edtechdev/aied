---
title: Divario digitale
created: "2026-10-14T22:10:00-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13]
type: concept
foundations: [ai-education, ai-literacy]
ethics: [accessibility, equity-in-ai-education]
confidence: high
translation_of: "concepts/digital-divide"
source_updated: "2026-10-14T14:35:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Divario digitale** — la distribuzione diseguale dell'accesso alle [[ai-technologies|tecnologie]] digitali (e sempre più dell'IA), delle competenze per usarle e dei benefici che ne derivano, tra individui, comunità e nazioni. Nell'educazione all'IA il divario digitale è una questione centrale di equità: la [[generative-ai|IA generativa]] sta rapidamente ridisegnando l'apprendimento, e il distacco tra chi può usarla in modo efficace e critico e chi non può minaccia di approfondire le disuguaglianze educative esistenti.

## Domande da considerare

- Il divario digitale viene spesso descritto su tre livelli: accesso, competenze e chi ne trae effettivamente beneficio. A quale livello pensate che la maggior parte delle persone si riferisca quando dice "colmare il divario digitale" — e perché questa visione potrebbe essere incompleta?
- Dare a ogni studente un dispositivo e l'accesso a internet non significa automaticamente che sappia usare l'IA in modo efficace o critico. Che cosa separa l'avere accesso dall'essere in grado di trarne beneficio?
- L'IA aggiunge nuovi strati di disuguaglianza: il bias algoritmico può danneggiare in modo sproporzionato gli [[learners|studenti]] emarginati, e l'alfabetizzazione sull'IA determina a sua volta se la tecnologia amplierà o restringerà i divari. In che cosa questo è diverso dai divari delle tecnologie precedenti?
- Il divario si estende anche a QUALI comunità, lingue e prospettive sono rappresentate nei sistemi di IA e servite da essi. In che modo la rappresentazione è essa stessa una forma di accesso — o di esclusione?
- Se colmare il divario è "una questione di giustizia e partecipazione", su chi grava la responsabilità: piattaforme, scuole, governi o tutti insieme — e come sarebbe concretamente una distribuzione equa dei benefici dell'IA?

## Introduzione

Il divario digitale è comunemente inteso come operante su **tre livelli** (van Deursen & van Dijk, 2014): il divario di *primo livello* riguarda l'accesso alle tecnologie e alle infrastrutture (connettività, dispositivi, ambienti di supporto); il divario di *secondo livello* riguarda competenze e abilità (la capacità diseguale di usare gli strumenti in modo efficace e significativo); e il divario di *terzo livello* riguarda esiti e benefici (chi trae effettivamente beneficio dall'uso della tecnologia, con l'IA che può esacerbare disparità sociali, culturali ed economiche). [[framing-ai-use-for-students|Inquadrare l'uso dell'IA]] attraverso questa lente rende chiaro che l'equità richiede più della chiusura del divario di dispositivi e infrastrutture — richiede la costruzione delle competenze per usare l'IA in modo efficace e critico, così che i suoi benefici siano distribuiti equamente anziché rafforzare le disuguaglianze esistenti.

La svolta dell'inferenza sul dispositivo aggiunge una dimensione hardware al divario di primo livello. Quando il tutoring gira nel browser anziché nel cloud — [[browser-sized-agents-slm-webllm-tutor-2026|tutor SLM residenti nel browser]] via WebLLM — la barriera del costo di abbonamento scompare, ma al suo posto subentra una barriera di capacità: su un portatile consumer lo stesso sistema impiegava circa 180 secondi per prova contro 10–58 secondi per un'API remota, e i dispositivi di classe Chromebook non possono eseguire affatto un modello 8B. Gli studenti con hardware moderno ottengono generazioni rapide e fluide mentre gli studenti su dispositivi più vecchi fronteggiano latenza o esaurimento della memoria, quindi locale ed economico non equivale automaticamente a equo.

### Come il divario digitale appare nella ricerca

- **L'alfabetizzazione sull'IA come meccanismo di equità:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|il framework SAIL]] è stato esplicitamente progettato per affrontare i divari di secondo e terzo livello, offrendo un percorso graduale e indipendente dall'età per un'alfabetizzazione sull'IA equa in tutte le fasi dell'educazione, fondato sull'argomentazione che l'alfabetizzazione sull'IA è inseparabile dall'equità e dalla partecipazione.

- **Politiche e infrastrutture:** [[oecd-digital-education-outlook-2026|OECD Digital Education Outlook 2026]] situa il divario digitale all'interno delle [[educational-policy-ai|politiche educative]] nazionali, esaminando come vari l'accesso alle tecnologie digitali e all'IA e che cosa i sistemi possano fare per colmare i divari.

- **Uso responsabile e alfabetizzazione nel [[prompt-engineering|prompting]]:** la [[aaai2026-prompting-literacy-k12|ricerca K-12 sull'alfabetizzazione nel prompting]] affronta il divario di secondo livello [[teacher-role|insegnando]] agli studenti le competenze per usare in modo responsabile i [[conversational-ai|chatbot]] di IA, riconoscendo che il solo accesso non conferisce la capacità di [[ai-literacy|usare bene l'IA]].
- **L'abilità di formulazione è essa stessa un divario di secondo livello.** Su MedQA, l'accuratezza cresceva con la sofisticazione del prompt (82,4% per formulazioni da bassa alfabetizzazione contro 83,4% per formulazioni da esperti), e un Prompt Equity Transformer che riformulava le richieste in parole equivalenti ma più chiare colmava il divario — spostando dal discente al sistema l'onere di un prompting efficace ([[prompt-privilege-equitable-ai-access-2026|Jin et al. (2026)]]).

- **Rappresentazione e silenzio strutturale:** la [[structural-silence-underrepresented-language-ai-2026|ricerca sulle lingue sottorappresentate]] evidenzia come il divario digitale si estenda a *quali* comunità, lingue e prospettive siano rappresentate nei sistemi di IA e servite da essi — una dimensione culturale ed epistemica della disuguaglianza.

- **Il code-switching è esso stesso un'esclusione.** La maggior parte degli strumenti LLM per le lezioni presume audio in sola lingua inglese e una connessione internet affidabile, escludendo le classi che mescolano inglese e una lingua familiare; i dati indiani di UDISE+ collocano l'accesso a internet nelle scuole vicino al 54%, con un divario urbano-rurale di 24 punti, e un compagno bilingue risponde con trascrizione sul dispositivo e archiviazione local-first ([[bilingual-llm-lecture-companion-srl-2026|Malhotra, 2026]]).

### L'IA approfondisce (e può colmare) i divari

L'IA aggiunge nuovi strati alle implicazioni di equità della tecnologia. Il bias algoritmico può avere un impatto sproporzionato sugli studenti provenienti da comunità emarginate, e l'[[ai-literacy|alfabetizzazione sull'IA]] — la capacità di comprendere, valutare criticamente e mitigare i bias e i rischi dell'IA — è a sua volta un fattore chiave nel determinare se l'IA amplierà o restringerà i divari. La [[research-methods-aied|ricerca]] mostra che gli educatori con maggiore alfabetizzazione sull'IA sono più efficaci nell'identificare e mitigare esiti distorti. Il divario digitale nell'era dell'IA non è quindi semplicemente un problema di dotazione tecnica, ma una questione di giustizia e partecipazione: chi può accedere all'IA, chi può usarla criticamente e chi ne beneficia.


Un filone consolidato della letteratura ripercorre come il concetto stesso si sia spostato dall'accesso all'**equità digitale**, oggi definita su quattro dimensioni — alfabetizzazione digitale, accessibilità economica, contenuti sensibili ai gruppi e disponibilità di infrastrutture — e legge l'IA consumer come una nuova ondata del divario che favorisce gli utenti già in grado di verificare criticamente l'output delle macchine ([[mechanical-compliance-human-flourishing-ai-literacy-2026|Rose (2026)]]).

**La personalità, non solo lo status socioeconomico, plasma il divario dell'era dell'IA.** [[ai-divide-ses-personality-primary-education-2026|Wang et al. (2026)]] hanno analizzato dati di indagine e di registro nazionale su **4.497 studenti di classe 6ª** nei Paesi Bassi, separando due vie di mediazione — uso dell'IA e alfabetizzazione digitale — che collegano background e personalità dello studente al [[learning-gains|rendimento accademico]]. Il loro risultato chiave ridefinisce il divario classico: **è l'alfabetizzazione digitale, non l'intensità d'uso dell'IA, a mediare** il legame tra personalità e rendimento, ed emerge un nuovo divario di competenze digitali guidato più dai **tratti di personalità che dallo status socioeconomico**. I vantaggi dello status socioeconomico sul rendimento operavano indipendentemente dall'[[student-engagement|engagement]] con l'IA. Questo complica l'inquadramento del divario digitale fondato su accesso e status socioeconomico, indicando la formazione delle competenze e il supporto disposizionale come leve rilevanti per l'equità accanto all'accesso a dispositivi e strumenti.

**Il divario ha uno strato metacognitivo.** Poiché sfruttare l'IA in modo produttivo richiede conoscenze pregresse e autoregolazione, gli studenti che già le possiedono ne traggono il massimo beneficio mentre quelli che avrebbero più bisogno di pratica delegano alle macchine l'apprendimento stesso — un "divario metacognitivo di equità" che può ampliare le differenze di risultato anche a parità di accesso ([[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]).

L'istruzione strutturata sull'IA a scuola è un catalizzatore psicologico ma non un livellatore cognitivo: su 752 studenti della secondaria inferiore di Hong Kong, un curricolo di un anno ha ridotto i divari di fiducia e motivazione, lasciando però intatte le differenze oggettive di alfabetizzazione sull'IA tra studenti con alta e bassa agency ([[school-ai-education-readiness-gaps-agency-2026|Liang et al. (2026)]]).

**Il divario opera anche a livello istituzionale.** [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] mostrano che nel sistema di istruzione superiore nigeriano la capacità di integrare l'IA si concentra nelle istituzioni più anziane della regione Sud-Ovest e si accumula attraverso legami di rete che si rafforzano a vicenda (collaborazioni internazionali × partenariati industriali, r = 0,74) — il che significa che gli "esclusi" istituzionali (tipicamente le università statali più recenti) incontrano barriere strutturali nell'accedere alle stesse reti che permetterebbero loro di recuperare. La disuguaglianza digitale è dunque riprodotta non solo tra i singoli studenti, ma attraverso le strutture [[governance|istituzionali]] che determinano chi può partecipare a un'economia della conoscenza trasformata dall'IA.

**Il divario ha anche una geografia, e il mentorship è il suo meccanismo.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] documentano un'asimmetria di recupero nella partecipazione al FIRST LEGO League in Indiana: la partecipazione sia urbana sia rurale è calata nella stagione remota del 2020, ma solo quella urbana si è ripresa, mentre quella rurale è rimasta vicino al livello post-2020 fino al 2025–2026. Il meccanismo che individuano è l'accesso al mentorship tecnico — persone con conoscenze di programmazione e [[educational-robotics|robotica]] sufficienti ad avviare e sostenere un team — che alle scuole rurali può mancare anche quando studenti e insegnanti sono interessati, rendendolo una precondizione del percorso robotica-IA anziché una sua caratteristica. La loro risposta è progettare la propagazione di quel mentorship: hub primari universitari formano studenti undergraduate e ospitano laboratori, programmi scolastici maturi diventano hub secondari che fanno da mentore alle scuole vicine, e una simulazione spaziale di Markov sulle 1.925 scuole pubbliche dell'Indiana proietta 992 programmi dopo 40 anni sotto ipotesi moderate, contro 161 senza ARC, incluse 341 programmi rurali contro 60. Letti accanto al risultato sulle reti istituzionali, il pattern è che i divari persistono attraverso *la struttura di chi può fornire competenze dove*, e che fornirle deliberatamente — anziché presumere la vicinanza a un'università — è la leva politica.

**Accesso e gerarchia epistemica sono problemi diversi.** [[beyond-the-algorithm-academic-developers-digital-mediators-2026|Sithole (2026)]] traccia la distinzione con nettezza a partire da interviste a [[educational-development|sviluppatori accademici]] di due Historically Disadvantaged Institutions sudafricane: la disuguaglianza digitale è distributiva — dispositivi, connettività, budget, alfabetizzazione digitale — ed è in linea di principio risolvibile attraverso la redistribuzione, mentre la **colonialità algoritmica** è epistemica e persiste anche in condizioni di pieno accesso, perché inerisce a ciò che i sistemi codificano e alla conoscenza di chi essi mettono al centro. I partecipanti allo studio vivono entrambe simultaneamente, descrivendo la condizione come l'essere "chiamati a costruire un futuro digitale su fondamenta analogiche": le fondamenta nominano il registro materiale del divario, e il futuro importato arriva precaricato con le assunzioni epistemiche dei contesti che lo hanno progettato. L'implicazione pratica per il lavoro sull'equità è che colmare un divario di accesso non smuove di per sé la gerarchia — i due fenomeni operano su registri diversi e richiedono risposte diverse.

**Un progetto può aggirare il divario di dispositivi anziché aspettare che si chiuda.** [[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al. (2026)]] verificano se studenti che non toccano mai un computer possano comunque ricevere un supporto in stile intelligent tutoring, usando un paradigma che chiamano "AIED unplugged" in cui l'insegnante è il proxy tra studente e sistema: gli studenti continuano a lavorare con carta e penna, l'insegnante fotografa le loro soluzioni con uno smartphone e il sistema restituisce elenchi di esercizi personalizzati, valutazione automatica e feedback specifici per errore. Il loro quasi-esperimento a grappolo su 19 classi di scuole pubbliche brasiliane è, a loro detta, la prima valutazione quasi-sperimentale di un tale sistema in classi autentiche anziché in prototipo, e l'app girava sui telefoni degli insegnanti sotto la connettività intermittente tipica di quelle scuole. Il progetto è quindi una strategia di equità distinta da quelle sopra: anziché chiudere il divario di primo livello di dispositivi e banda prima che il tutoring con IA possa raggiungere qualcuno, o elevare le competenze di secondo livello come biglietto d'ingresso, esso raggiunge gli studenti con cui l'IA non interagisce mai direttamente. Lo stesso studio, però, mostra che il percorso non è esente dal divario che scavalca. Il vantaggio di apprendimento rispetto alla pratica abituale era riconducibile alla formazione degli insegnanti piuttosto che alla tecnologia — le condizioni di formazione e di sistema completo non differivano sui guadagni — e l'effetto indiretto positivo del sistema sull'apprendimento operava attraverso la *riduzione dello sforzo dell'insegnante*, con un carico di lavoro maggiore associato a guadagni inferiori. Aggirare il divario di accesso non dissolve quindi il problema di equità; ne riloca il vincolo stringente sulla capacità e sul tempo dell'insegnante.

- **Il vincolo hardware potrebbe stare dissolvendosi, non il divario di accesso chiudendosi.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] sostengono che il vincolo stringente per un [[equity-in-ai-education|equo]] apprendimento linguistico è ormai il software anziché l'hardware: l'intera catena sintesi–riconoscimento–traduzione sta sotto i 4 GB, misurazioni della comunità pongono un modello 3B a 4–9 token al secondo su un single-board computer da \\$80, e cinque anni di pratica quotidiana costano circa \\$18 di elettricità contro \\$1.200 per un abbonamento cloud e \\$2.600 per tutoring settimanale.

- **La compressione dei modelli è un'altra via verso hardware limitato.** Un tutor adattivo in Nigerian Pidgin ottimizzato su un corpus di 416.343 voci ha mantenuto struttura semantica e coerenza a 8 bit, mentre le versioni a 4 e 5 bit riducevano la latenza di inferenza con una degradazione minima della qualità didattica, e i madrelingua verificavano l'accettabilità culturale anziché affidarsi alle sole metriche ([[multilingual-adaptive-learning-nigeria-2026|Nwogo et al., 2026]]).

- **Un laboratorio simulato può riprodurre il conto delle attrezzature che intendeva evitare.** Una [[meta-analysis-systematic-review|revisione sistematica]] di 11 studi su gemelli digitali nell'istruzione superiore STEM ha rilevato costi hardware di \\$2.000-\\$15.000 per nodo di workstation funzionale in quattro studi, con entità fisiche che limitavano l'accesso a 1-3 studenti simultanei in cinque, e nessuno studio incluso ha prodotto un'analisi di ritorno sull'investimento ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-Gonzalez et al. (2026)]]). La revisione confronta quel costo d'ingresso con le strumentazioni fisiche di caratterizzazione, che vanno da \\$30.000 a oltre \\$150.000.

### Collegamenti con i concetti correlati

Il divario digitale è una questione centrale della ricerca su [[equity-in-ai-education]], strettamente legata all'[[ai-literacy|alfabetizzazione sull'IA]] (posizionata come meccanismo centrale per affrontare le barriere strutturali), all'[[ethics|etica]] e alla [[bias-mitigation|mitigazione del bias]] (poiché il bias algoritmico colpisce in modo sproporzionato i gruppi emarginati). Si collega all'[[ai-education|IA nell'educazione]] e all'[[higher-ed|istruzione superiore]] come contesti in cui si manifestano i divari di accesso e capacità, e si rapporta alla [[student-experience|esperienza dello studente]] in quanto determina chi può partecipare in modo significativo all'apprendimento modellato dall'IA.

## Concetti collegati

- [[differential-effects-across-learner-groups]]
- [[remote-proctoring]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[ethics]]
- [[bias-mitigation]]
- [[ai-education]]
- [[higher-ed]]
- [[student-experience]]
- [[parents-and-families]]

## Articoli collegati

- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — Institutional structures, digital inequality, and AI integration in Nigerian higher education
- [[ai-divide-ses-personality-primary-education-2026]] — SES, personality, and AI divides in primary education (Wang et al. 2026)
- [[rodrigues-aied-unplugged-numeracy-2026]] — AIED unplugged: teacher-as-proxy tutoring reaches students with no device (Rodrigues et al. 2026)
- [[school-ai-education-readiness-gaps-agency-2026]] — School AI education narrows psychological but not cognitive readiness gaps
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — The Scaffolded AI literacy (SAIL) framework
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[aaai2026-prompting-literacy-k12]] — Teaching Responsible Use of AI Chatbots to K-12 Students
- [[structural-silence-underrepresented-language-ai-2026]] — Structural Silence and Underrepresented Languages
- [[sec-ai-literacy-narrative-review-2026]] — Social-Emotional Competence in AI Literacy
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Multilingual Low-Resource Contexts
- [[ai-science-chemistry-education-systematic-review-2025]] — Systematic review of AI in science/chemistry education
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI guidelines translated to chemical education; epistemic drift
- [[lodge-loble-cognitive-offloading-2026]] — AI, cognitive offloading and implications for education (Lodge & Loble 2026)
- [[mechanical-compliance-human-flourishing-ai-literacy-2026]] — Socialist humanist AI literacy + fair use
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: rural robotics access follows mentorship geography, not device access (Jacobson et al. 2026)
- [[beyond-the-algorithm-academic-developers-digital-mediators-2026]] — Digital inequality as distributive problem vs. algorithmic coloniality as epistemic one, in South African HDIs

- [[llmersion-local-first-language-learning-2026]] — LLMersion: A Local-First AI Agent Framework for Low-Cost Home Language Learning toward Educational Equity
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Digital twin labs carry an equipment bill that bounds concurrent access
