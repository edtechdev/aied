---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack, teacher-dev]
title: Accessibilità
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
translation_of: concepts/accessibility
source_updated: "2026-10-15T10:00:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Accessibilità** — la progettazione di tecnologia educativa, contenuti e interfacce affinché possano essere percepiti, azionati e compresi da persone con disabilità e bisogni diversi. Nell'[[ai-education|IA nell'educazione]], l'accessibilità copre le barriere concrete e operative al *medium* dell'apprendimento: sottotitoli dei video, testo alternativo, trascrizioni, compatibilità con screen reader e tastiera, contrasto cromatico, semplificazione del testo, output tattile, supporto alla lingua dei segni e compatibilità con le [[ai-technologies|tecnologie]] assistive.

## Domande da considerare

- L'ultima volta che hai progettato o scelto uno strumento di apprendimento digitale, hai verificato se i suoi sottotitoli, il testo alternativo, la navigazione da tastiera e il contrasto cromatico funzionassero, prima di considerarne la [[pedagogy|pedagogia]]? Perché quest'ordine potrebbe essere importante?
- Un video con sottotitoli accurati è "accessibile", mentre un corso che struttura la discussione attorno ai bisogni comunicativi di uno studente sordo sta "supportando quello studente". Dove tracceresti il confine tra rimuovere una barriera tecnica e servire significativamente uno studente?
- La [[research-methods-aied|ricerca]] mostra che i [[video-education|video didattici]] segmentati dall'IA con pause fisse hanno eliminato il divario di rendimento tra [[neurodiversity|ADHD]] e [[learners|discenti]] non ADHD. Riesci a ricordare una "correzione progettata per un solo studente" che ha finito per avvantaggiare tutti in una classe di cui facevi parte?
- Alcuni sostengono che l'accessibilità sia necessaria ma non sufficiente — uno strumento accessibile non è automaticamente uno strumento inclusivo o giusto per la disabilità. Qual è la differenza tra essere in grado di usare uno strumento ed essere significativamente serviti da esso?
- Molti strumenti di IA sono addestrati in gran parte su dati anglofoni e occidentocentrici. In che modo ciò potrebbe limitare quanto bene servano gli studenti la cui prima lingua è una lingua dei segni, o i cui modi di conoscere differiscono da quelli mainstream?
- L'IA può automatizzare l'accessibilità su larga scala — generando sottotitoli, semplificando il testo, producendo output tattile. Cosa vorresti verificare a mano prima di fidarti di quell'accessibilità automatizzata, e perché?

## Introduzione

L'accessibilità è distinta da, ma strettamente legata a, tre concetti vicini in questa base di conoscenza. **[[inclusive-learning|L'apprendimento inclusivo]]** è l'ombrello più ampio per progettare l'educazione per tutta la variabilità degli studenti (fisica, cognitiva, sensoriale, situazionale). **[[special-education|L'educazione speciale]]** è il dominio didattico per gli studenti con disabilità diagnosticate, compresi gli accomodamenti individualizzati. **[[universal-design-for-learning|Il Progetto Universale per l'Apprendimento]]** è il framework di progettazione proattivo (mezzi multipli di [[student-engagement|coinvolgimento]], rappresentazione, azione/espressione). **L'accessibilità** si colloca dentro questa costellazione come il *livello tecnico e procedurale*: rimuovere le barriere alla percezione e all'uso del formato, piuttosto che riprogettare la pedagogia. Le due cose possono essere separate su uno spettro — l'accessibilità chiede "tutti possono accedere a questo contenuto e strumento?", mentre il supporto agli studenti con disabilità chiede "l'istruzione serve significativamente ogni studente, compresi accomodamenti e supporto specifico per la disabilità?". Entrambe contano, e l'IA si interseca con entrambe.

### Perché la distinzione conta

Un video con sottotitoli accurati e una trascrizione correttamente etichettata è *accessibile*; un corso che struttura la discussione per includere le preferenze comunicative di uno studente sordo sta *supportando quello studente*. Si sovrappongono — i media accessibili sono un prerequisito per l'istruzione inclusiva — ma richiedono mosse progettuali diverse e attingono a evidenze diverse. L'accessibilità è ancorata a standard e legge (WCAG, l'[[assistive-technology|Assistive Technology Act]] e l'IDEA degli Stati Uniti), mentre l'apprendimento accessibile e l'educazione speciale sono ancorati alla pedagogia e all'[[student-experience|esperienza dello studente]].

### Temi chiave di ricerca

**Accessibilità del formato: sottotitoli, trascrizioni e testo.** I **[[adhd-video-segmentation-computing-education|video didattici segmentati dall'IA]]** con pause fisse hanno eliminato il divario di rendimento tra studenti ADHD e non ADHD — l'accessibilità come catalizzatore che avvantaggia tutti. **[[text-simplification-its|MuTSE]]** valuta la [[intelligent-tutoring|semplificazione del testo]] basata su [[llm|LLM]] per adattare la complessità dei contenuti al livello di lettura di ogni studente, un livello di accessibilità [[human-in-the-loop-ai|human-in-the-loop]]. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** costruiscono la [[automated-question-generation|generazione di domande]] con LLM per studenti sordi e con ipoacusia, confrontandosi con il disallineamento tra prompt testuali dell'IA e prime lingue basate sul segno.

**Accesso sensoriale: output non visivo e tattile.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** rende la conversazione parlata la modalità primaria per i bambini ipovedenti, rimuovendo la dipendenza visiva. **[[tactile-statistical-graphs-accessibility|I grafici statistici tattili stampati in 3D]]** trasformano i dati statistici visivi in output toccabili per studenti ciechi e ipovedenti. **[[pepper-robot-sign-language-lis-2025|I robot per la lingua dei segni]]** estendono l'[[educational-robotics|robotica educativa]] nell'accessibilità comunicativa per gli studenti sordi.

**L'audiodescrizione scritta per il cinema non si trasferisce alle registrazioni di lezioni.** Le lezioni basate su slide fanno riferimento a diagrammi, equazioni e gesti di indicazione, e le loro pause durano in mediana solo 0,5 s, quindi [[ad4edu-lecture-audio-description-2026|Psychias & Gao (2026)]] hanno costruito un benchmark specifico per le lezioni e una metrica diagnosticabile da regole; l'addestramento successivo su coppie ordinate da giudice automatico non ha migliorato la conformità in modo uniforme.

**IA [[generative-ai|generativa]] per studenti ipovedenti.** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** — uno studio di caso [[qualitative-research|qualitativo]] su 21 studenti di [[higher-ed|laurea]] ipovedenti in tre università palestinesi — ha rilevato che la GenAI adatta ritmo, contenuti e modalità di erogazione ai profili di apprendimento individuali e semplifica testi accademici complessi convertendo al contempo i contenuti tra modalità (testo, audio, visivo), rendendo fruibili materiali che prima erano inaccessibili. Gli studenti hanno inquadrato l'immediatezza come requisito fondante di accessibilità piuttosto che come una comodità, e sei attributi tecnologici interdipendenti — interattività, facilità d'uso, convenienza, multimodalità, integrazione e scalabilità — determinavano se la GenAI fosse genuinamente accessibile in un [[global-south|contesto a basse risorse]], con [[usability-research|usabilità]], convenienza e accessibilità che si rafforzavano a vicenda piuttosto che costituire considerazioni progettuali separate.

**Politiche e accomodamenti per studenti con disabilità.** **[[shin-ai-policies-sld-2026|Shin et al.]]** analizzano i documenti di politica sull'IA degli Stati Uniti per rivelare un vuoto di orientamento per gli studenti con disturbi specifici dell'apprendimento, proponendo accomodamenti e raccomandazioni di [[educational-policy-ai|politica]] fondati sull'[[assistive-technology|Assistive Technology Act]] e sull'IDEA. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** meta-analizzano 29 studi di interventi basati sull'IA per studenti con disabilità, trovando un effetto positivo medio sugli [[learning-gains|esiti di apprendimento]] (g = 0,588) — e sostengono che l'IA debba fare più che garantire l'accessibilità: deve abilitare la partecipazione [[agency|agentica]].

**Divieti di IA eccessivamente inclusivi e trascrizione assistiva.** **[[wright-transcription-not-generation-2026|Wright (2026)]]** sostiene che i divieti indiscriminati sull'"uso dell'IA" sono eccessivamente inclusivi perché non distinguono la trascrizione da voce a testo e l'OCR dalla stesura generativa: le tecnologie di riconoscimento convertono il formato di contenuti che lo studente ha già scritto piuttosto che produrre nuovi contenuti, eppure una politica scritta attorno all'identità della piattaforma cattura entrambi allo stesso modo. Gli studenti con condizioni che incidono sul controllo motorio fine, sulla leggibilità della scrittura a mano o sull'accuratezza della digitazione — comprese le condizioni dello spettro autistico, la disprassia, la paralisi cerebrale e le lesioni da sforzo ripetitivo — hanno fatto affidamento su strumenti autonomi di conversione voce-testo e OCR, e le segnalazioni indicano che diversi prodotti autonomi di conversione voce-testo sono stati dismessi o degradati, lasciando alla trascrizione assistita dall'IA il compito di colmare il divario funzionale. Trattare quella sostituzione come scorrettezza solleva preoccupazioni di equità in base al dovere di accomodamento ragionevole dell'Equality Act 2010 del Regno Unito, al Public Sector Equality Duty anticipatorio, all'Americans with Disabilities Act degli Stati Uniti e al Disability Discrimination Act 1992 dell'Australia, benché l'articolo non pretenda che la caratterizzazione sia stata testata in un tribunale. L'articolo nota che l'intersezione tra disabilità, tecnologia assistiva e politica sulle scorrettezze con l'IA è poco esplorata, che la scala di questo spiazzamento non è misurata, e che la stessa imprecisione produce un rischio differenziale di falsi positivi, poiché i rilevatori leggono il testo a bassa perplessità degli scrittori non nativi di inglese come paternità automatica. L'esposizione legale che questa sovra-inclusione crea è mappata su [[legal-issues-and-risks]].

**La resistenza alla macchina ha un costo di leggibilità.** Le sovrapposizioni a strisce hanno degradato maggiormente l'estrazione (+35,9% di errore sui caratteri, +38,3% di errore sulle parole) eppure quattro esperti di tipografia e design hanno giudicato leggibili le strisce verticali, mentre le strisce diagonali alteravano le forme delle lettere ed erano giudicate illeggibili, e la variazione estrema di opacità aiutava solo a intensità che danneggiavano anch'esse la leggibilità umana ([[airri-machine-resistant-reading-interface-2026|Salaun et al. (2026)]]).

**IA per la dislessia: rilevamento, supporto e [[personalized-learning|apprendimento personalizzato]].** Una revisione [[meta-analysis-systematic-review|sistematica]] interdisciplinare del 2026 (Dabaghi, D'Urso & Sciarrone, guidata da PRISMA, 2018–2024, n=72) rileva che l'IA supporta gli studenti con dislessia nel rilevamento, nel supporto assistivo e nell'apprendimento personalizzato — ma con questi filoni che evolvono in parallelo piuttosto che in integrazione, spinti più dall'opportunità tecnologica che da una teoria educativa consolidata. Gli strumenti ML di aiuto all'apprendimento coprono cinque aree (applicazioni specifiche, coinvolgimento, personalizzazione, raccomandazione, supporto generico) eppure enfatizzano le prestazioni tecniche e l'accuratezza di classificazione trascurando la validità ecologica e la dispiegazione pratica in classe. La ricerca sul rilevamento (EEG, eye-tracking, modelli ML) mostra una promessa diagnostica per l'intervento precoce ma richiede spesso attrezzature specializzate e ambienti controllati, limitando la scalabilità e l'accessibilità nelle tipiche impostazioni scolastiche. Le sfide aperte includono la validazione sperimentale limitata, la scalabilità, le preoccupazioni [[ethics|etiche]]/[[privacy|di privacy]] sui dati sensibili degli studenti, il supporto e la formazione limitati per il ruolo del [[teacher-role|docente]], e le barriere linguistiche e culturali (la maggior parte della ricerca si rivolge a popolazioni anglofone) — a riprova che l'accessibilità deve essere validata, scalabile e fondata eticamente, non semplicemente dimostrata tecnicamente.

**I limiti della sola accessibilità.** Il **[[genai-minoritized-knowledges-disability|lavoro critico]]** avverte che l'IA addestrata su dati anglofoni e occidentocentrici può marginalizzare i modi di conoscere centrati sulla disabilità. I formati accessibili non garantiscono un'istruzione inclusiva o giusta — a riprova che l'accessibilità è necessaria ma non sufficiente, e deve connettersi all'[[equity-in-ai-education|equità nell'educazione con l'IA]].

**Strumenti focalizzati sugli accomodamenti e vincolati alla diagnosi dominano.** Una revisione di scoping di 40 studi di tecnologie assistive digitali per studenti neurodivergenti ha rilevato che 28 rendevano una diagnosi formale condizione di partecipazione e solo tre lavoravano sui pari neurotipici piuttosto che sullo studente, riportando al contempo effetti di inversione — sovraccarico cognitivo, affaticamento, distrazione ed eccessivo affidamento sull'IA generativa.([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]])

## Implicazioni per la pratica

- **Dare priorità alla barriera del formato.** Sottotitoli, trascrizioni, testo alternativo, contrasto e operabilità da tastiera sono il livello di controllo d'accesso — senza di essi nient'altro conta per gli studenti che ne hanno bisogno.
- **Usare l'IA per automatizzare l'accessibilità su larga scala.** L'IA può generare sottotitoli, semplificare il testo, produrre alternative tattili/audio e adattare la presentazione — ma valuta la qualità dell'output con verifiche human-in-the-loop.
- **Trattare l'accessibilità come necessaria ma non sufficiente.** Uno strumento accessibile non è automaticamente uno strumento inclusivo o giusto per la disabilità; abbina l'accessibilità al design dell'[[inclusive-learning|apprendimento inclusivo]] e al supporto dell'[[special-education|educazione speciale]].
- **Fondare gli accomodamenti nella legge e nelle politiche.** Fai riferimento agli standard (WCAG) e agli statuti (Assistive Technology Act, IDEA) quando progetti o acquisti strumenti di IA.
- **La diffusione dell'IA sta superando le politiche di accessibilità dell'IA a livello istituzionale.** [[chan-ai-institutionalization-index-global-universities-2026|Chan (2026)]] ha codificato tutte le 100 università classificate nel Times Higher Education 2026 e ha rilevato che lo 0% pubblica una politica di accessibilità dell'IA autonoma mentre il 93% distribuisce servizi campus basati sull'IA (chatbot per immatricolazioni, alloggi, IT). La lettura caritatevole dell'autrice è che gli obblighi di accessibilità risiedano dentro le politiche generali sui servizi per la disabilità, ma come misurato, i requisiti per gli strumenti di IA non compaiono in alcun punto del record istituzionale pubblico. Una breve dichiarazione istituzionale secondo cui gli strumenti di IA nell'insegnamento e nell'amministrazione devono essere accessibili agli studenti con disabilità sarebbe avanti rispetto all'intero campo misurato.

- **Trascrizione matematico-accessibile di video di [[physics-education|fisica]] (2026):** un flusso di lavoro basato sull'IA che usa Gemini (campionamento audio + video a 1 fps) e LuaLaTeX compila video didattici di fisica in PDF/UA-2 e PDF matematico-accessibili ISO 32005 che superano abitualmente la validazione di accessibilità — un percorso pratico e gratuito per rendere leggibili da screen reader i contenuti video ricchi di equazioni per studenti ciechi e ipovedenti ([[gemini-lualatex-physics-video-transcription-2026]]).

## Concetti collegati
- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — ombrello più ampio per progettare l'educazione attraverso la variabilità degli studenti
- [[special-education]] — dominio didattico per gli studenti con disabilità diagnosticate
- [[universal-design-for-learning]] — framework di progettazione proattivo
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — visori, motion sickness e accesso ai dispositivi decidono chi può usarli
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — la pagina ombrello per regole eccessivamente ampie, evidenze difettose e accomodamento ragionevole
- [[arts-design-and-media-education]]

## Articoli collegati
- [[chan-ai-institutionalization-index-global-universities-2026]] — Chan (2026): 0% of 100 elite universities publish an AI accessibility policy while 93% deploy AI campus services
- [[shin-ai-policies-sld-2026]] — AI policies and accommodations for students with specific learning disabilities
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Meta-analysis of AI interventions for students with disabilities
- [[adhd-video-segmentation-computing-education]] — AI-segmented videos with fixed pauses
- [[text-simplification-its]] — LLM-based text simplification for intelligent tutoring
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM question generation for Deaf/Hard-of-Hearing learners
- [[kutti-ai-voice-first-learning-companion]] — Voice-first companion for visually impaired children
- [[tactile-statistical-graphs-accessibility]] — Tactile 3D-printed statistical graphs
- [[pepper-robot-sign-language-lis-2025]] — Pepper robot supporting sign language
- [[genai-minoritized-knowledges-disability]] — Critical perspective on AI and disability-centered knowledge
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX math-accessible physics video transcription
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[wright-transcription-not-generation-2026]] — Transcription is not generation: over-inclusive AI prohibitions and the assistive tools they capture
- [[ad4edu-lecture-audio-description-2026]] — AD4EDU: Benchmarking University Lecture Audio Description across Accessibility Standards, Metrics, and Learner Preferences
- [[airri-machine-resistant-reading-interface-2026]] — AIRRI: Towards a Human-Readable, Machine-Resistant Reading Interface
