---
connected_resources: [mglearn]
title: Apprendimento delle lingue
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: "concepts/language-learning"
source_updated: "2026-10-26T12:05:00-04:00"
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

> **Apprendimento delle lingue** — lo studio di come l'IA supporta l'acquisizione di una seconda lingua (L2), lo sviluppo della scrittura e la diversità linguistica nei contesti educativi. La [[ai-education|ricerca sull'IA in educazione]] [[research-methods-aied|metodologica]] di questa knowledge base spazia dagli interlocutori IA per il dialogo parlato alla [[automated-essay-scoring|valutazione automatica della scrittura]] per chi apprende una L2, al supporto per la lettura, fino alle preoccupazioni sul pregiudizio linguistico nei sistemi di punteggio basati sull'IA.

## Domande da considerare

- Il linguaggio è intrinsecamente interattivo, il che lo rende particolarmente adatto all'[[conversational-ai|IA conversazionale]] — ma le capacità linguistiche dell'IA sollevano anche rischi di pregiudizio contro le strutture non native. Dove ha visto dispiegarsi questa tensione tra opportunità e rischio?
- Uno studio ha rilevato che il punteggio attribuito dall'IA sottostima sistematicamente gli studenti linguisticamente più deboli, mentre un altro ha proposto di confrontare gli studenti con i loro lavori precedenti anziché con le norme dei madrelingua. Come cambia il "punto di riferimento" della valutazione il fatto che il [[ai-feedback-quality|feedback dell'IA]] aiuti o penalizzi chi apprende?
- Gli interlocutori IA possono estendere la pratica comunicativa su larga scala, ma la pagina avverte che dovrebbero essere abbinati all'interazione umana perché la fluenza si trasferisca alla conversazione reale. Cosa potrebbe guadagnare esercitandosi con un'IA che un partner umano non può offrire — e cosa perderebbe?
- È stato dimostrato che è il supporto dell'insegnante — non solo lo strumento IA — a determinare il coinvolgimento nell'apprendimento delle lingue assistito dall'IA attraverso gli obiettivi di riuscita degli studenti. Come plasmano il contesto sociale e [[pedagogy|pedagogico]] il fatto che chi apprende continui a impegnarsi con uno strumento di pratica basato sull'IA?
- Una [[meta-analysis-systematic-review|meta-analisi]] ha trovato guadagni da piccoli a moderati, dipendenti dal livello, dalle tecnologie emergenti, con le abilità produttive (parlato, scrittura) che guadagnano più di quelle ricettive. Perché parlare e scrivere potrebbero beneficiare più dell'ascolto e della lettura dagli strumenti IA?
- Se l'IA privilegia l'inglese standard e può penalizzare le strutture linguistiche non native o diversificate, come dovrebbero gli insegnanti di lingue progettare la valutazione e il feedback affinché l'IA supporti la diversità linguistica anziché cancellarla?

## Introduzione

L'apprendimento delle lingue è emerso come un ambito significativo dell'IA in educazione perché il linguaggio è intrinsecamente interattivo — il che lo rende adatto all'IA conversazionale — e perché le capacità linguistiche dell'IA sollevano al contempo opportunità ([[personalized-learning|pratica linguistica personalizzata]] su larga scala) e rischi (pregiudizio sistematico contro le strutture linguistiche non native). Gli articoli di questa knowledge base esplorano entrambi i lati dell'equazione. Quando la lingua obiettivo è specificamente l'**inglese** — in particolare l'[[english-education|inglese per scopi accademici (EAP)]] e l'[[teacher-role|insegnamento]] dell'inglese EFL/ESL/L2 — si veda la pagina concettuale dedicata a [[english-education]], che distingue la ricerca specifica sull'inglese dall'acquisizione generale di una L2 e dalla scrittura in generale.

**L'IA come tutor e interlocutore linguistico** è il tema più sviluppato. **[[ai-interlocutor-l2-spoken-dialogue|Cosa cambia quando l'interlocutore è un'IA?]]** esamina la fluenza interazionale e l'assimilazione linguistica (uptake) quando chi apprende una L2 conversa con l'IA anziché con esseri umani. Il **[[tact-pedagogically-adaptive-esl-tutoring|TACT]]** fornisce tutoring ESL pedagogicamente adattivo. **[[llm-children-reading-story-generation]]** esplora le storie generate dall'IA per lo sviluppo della lettura nei bambini. Questi studi si collegano all'[[intelligent-tutoring]] e all'[[generative-ai|IA generativa]]. **[[llm-agents-5e-esl-grammar-2026|Yang, Weng e Yang (2026)]]** hanno progettato due agenti basati su [[llm|LLM]] — un insegnante di inglese IA convenzionale e uno che utilizza il **framework 5E** (engage, explore, explain, elaborate, evaluate) per l'apprendimento della grammatica per inchiesta. Su **37 studenti ESL** in un confronto randomizzato, **gli studenti ad alte prestazioni hanno risposto positivamente all'insegnante IA**, mentre gli studenti a basse prestazioni hanno mostrato atteggiamenti misti, e le condizioni differivano in motivazione intrinseca, cambiamento cognitivo e prestazioni — a indicare che la progettazione di agenti LLM dovrebbe essere adeguata alla competenza di chi apprende.

Per i tutor fisicamente incarnati, una meta-analisi di 11 studi RALL (N = 595) ha trovato un grande effetto aggregato sull'apprendimento della L2 (g = 0,83) con un'elevata eterogeneità, e solo il formato di interazione lo moderava — i formati di gruppo battevano quelli individuali, mentre morfologia del robot, modalità, autonomia e ruolo sociale non avevano effetto ([[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang & Zou (2026)]]).

**L'IA nella valutazione linguistica** sta emergendo man mano che gli LLM supportano la [[automated-question-generation|generazione di item]] e la valutazione. **[[gpt-item-generation-l2-listening-2026|Aryadoust e Wong (2026)]]** hanno confrontato il [[prompt-engineering|prompt engineering]] con il fine-tuning per la generazione automatica di item nella valutazione dell'ascolto in L2: il perfezionamento iterativo del prompt migliorava la qualità degli item ma poi si stabilizzava, mentre il **fine-tuning di GPT-4.1 sul prompt ottimizzato** (mantenendo costante la progettazione del prompt) produceva ulteriori guadagni — un modello per quando gli sviluppatori di valutazioni dovrebbero investire nell'adattamento del modello piuttosto che nell'iterazione dei prompt.

Un confronto di 52 compiti di valutazione EFL valutati da 20 insegnanti esperti non ha trovato differenze complessive di qualità significative tra item generati dall'IA e sviluppati da esseri umani, ma una chiara divisione del lavoro: l'IA era preferita per grammatica e vocabolario (69%) e lo sviluppo umano per lettura, scrittura, ascolto e parlato (75–83%) ([[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia e Darvishi (2026)]]).

**La valutazione automatica della scrittura per chi apprende una L2** valuta la capacità dell'IA di valutare la scrittura non nativa. **[[self-referential-l2-writing-llm-assessment|Bannò et al.]]** hanno proposto un approccio auto-referenziale che confronta la scrittura dello studente con i suoi lavori precedenti anziché con le norme dei madrelingua. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** hanno rilevato che il punteggio attribuito dall'IA sottostima sistematicamente gli studenti linguisticamente deboli — un risultato che si collega all'[[assessment-validity|validità della valutazione]] e alle preoccupazioni di [[bias-mitigation|mitigazione del pregiudizio]]. **[[genai-linguistic-diversity-academic-writing]]** esplora come l'IA influenzi la diversità linguistica nei contesti accademici.

Un sistema a livello di discorso va oltre denominando il difetto anziché assegnare un punteggio al testo: la classificazione delle relazioni tra coppie di frasi localizzava le rotture di coerenza — salti logici, connettivi mancanti, riferimenti ambigui — e l'adozione da parte degli insegnanti del feedback da esso generato era compresa tra il 71,2% e l'88,4% ([[bert-discourse-english-teaching-2026|Wang et al., 2026]]).

**L'[[accessibility|accessibilità]] per chi apprende le lingue** si collega all'[[inclusive-learning|apprendimento inclusivo]]: il **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** ha analizzato come chi è affetto da dislessia utilizzi l'IA per il supporto all'alfabetizzazione, e **[[ai-tools-arab-english-classrooms]]** ha esplorato gli strumenti IA nei contesti di classe arabo-inglese. Questi studi collegano l'apprendimento delle lingue all'[[equity-in-ai-education|equità nell'IA in educazione]] e alla [[special-education|educazione speciale]].

**I meccanismi motivazionali nell'apprendimento delle lingue assistito dall'IA** esaminano perché chi apprende si impegni con l'IA nella pratica linguistica. **[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]** hanno usato la teoria della definizione degli obiettivi con 758 studenti universitari cinesi di inglese per mostrare che il **supporto dell'insegnante** accresce il coinvolgimento nell'apprendimento assistito dall'IA attraverso gli obiettivi di padronanza e di prestazione degli studenti (non gli obiettivi di evitamento) — una prova che il contesto pedagogico e sociale, non solo lo strumento IA, determina se chi apprende resta coinvolto nella pratica linguistica assistita dall'IA. Questo collega l'apprendimento delle lingue alla [[motivation|motivazione]] e al [[student-engagement|coinvolgimento degli studenti]].

[[chatgpt-english-language-learning-malaysia|Annamalai et al. (2026)]] aggiungono un caso qualitativo di autodeterminazione: in interviste con 25 studenti universitari malesi, ChatGPT ha sostenuto competenza e autonomia, e la sua reattività conversazionale produceva un senso di essere ascoltati — un'"ecologia motivazionale mediata dall'IA" in cui il senso di relazione è in parte soddisfatto dallo strumento, sebbene i riferimenti imprecisi richiedessero verifica e integrazione umana.

La qualità della progettazione, non la frequenza d'uso, ha veicolato l'effetto motivazionale in un tutor costruito da un insegnante: su 74 studenti universitari che usavano un GPT di giapponese limitato al corso, la frequenza d'uso fuori dalla classe non mostrava alcuna correlazione significativa con autonomia, competenza o relazione, mentre chi apprende valutava il tutor molto positivamente per l'apprendimento autodiretto (M = 4,39) e citava la sicurezza affettiva (60,8%) ([[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee & Kwon, 2026]]).

**La scrittura supportata dall'IA generativa a livello primario.** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]] hanno condotto un programma di scrittura opinativa di nove settimane con 301 studenti di quinta e sesta elementare nella Cina orientale, con otto classi intatte assegnate casualmente al programma o all'insegnamento convenzionale. Il programma ha accresciuto il sé ideale di scrittura in L2 degli studenti (differenza media corretta 0,20) e la resilienza accademica (0,17), e ha innalzato il coinvolgimento comportamentale ed emotivo, ma non ha mosso la mentalità di crescita, il coinvolgimento cognitivo o metacognitivo, né l'organizzazione valutata con rubriche — tra le dimensioni della scrittura, solo l'uso della lingua è migliorato. Due caratteristiche della progettazione contano per gli insegnanti di lingue: la formulazione dei prompt è stata insegnata esplicitamente, attraverso una banca categorizzata di prompt legata a obiettivi di scrittura specifici, e il feedback dell'IA generativa è stato usato insieme al confronto con il feedback dell'insegnante e alla revisione ripetuta. I guadagni di authorship riportati da chi apprende poggiavano su quella struttura didattica piuttosto che sullo strumento di per sé, e gli autori indicano la ridotta [[metacognition|auto-regolazione]] e le strategie orientate alla scorciatoia come i rischi permanenti.

## Implicazioni per gli insegnanti di lingue

- **Le [[ai-technologies|tecnologie]] emergenti producono guadagni da piccoli a moderati, dipendenti dal livello.** Una [[liu-emerging-tech-tefl-review-2026|meta-analisi di 33 studi TEFL]] (N = 3.181) trova un effetto complessivo di g di Hedges = 0,38 che cresce con il livello educativo (primario 0,29, secondario 0,35, terziario 0,44), con VR/AR che producono gli effetti maggiori e le abilità produttive (parlato, scrittura) che guadagnano più delle ricettive — a sostegno dell'uso delle tecnologie emergenti, specialmente a livello terziario, mantenendo al contempo aspettative realistiche.
- **Una revisione sistematica mappa dove l'educazione linguistica elementare con l'IA è debole.** Su 31 studi (2013-2025), il lavoro nelle classi di lingue elementari si concentrava su parlato, alfabetizzazione e vocabolario, mentre grammatica, comprensione dell'ascolto e lingua dei segni erano a malapena studiati, e la maggior parte delle progettazioni mancava di specificità per livello scolastico ([[ai-elementary-language-education-review-2026|Hamasha et al., 2026]]).
- **Usare l'IA per estendere la pratica comunicativa, non per sostituirla.** Gli [[ai-interlocutor-l2-spoken-dialogue|interlocutori IA]] e i [[tact-pedagogically-adaptive-esl-tutoring|tutor ESL adattivi]] espandono la pratica interazionale su larga scala — abbinali all'interazione umana perché fluenza e assimilazione (uptake) si trasferiscano alla conversazione reale.

- **Estendere lo [[scaffolding|scaffolding]] dell'IA alla lettura collaborativa.** Con 63 studenti cinesi di inglese in uno studio di annotazione sociale assistita dalla GenAI, [[genai-social-annotation-epistemic-network-analysis-2026|Pan et al. (2026)]] hanno trovato che il chatbot innalzava il coinvolgimento cognitivo ed emotivo e la prestazione di lettura e legava la [[community-of-inquiry|presenza sociale]] all'integrazione e alla risoluzione, sebbene i gruppi ad alte prestazioni usassero lo scaffold molto di più.
- **La prontezza, non la prestazione osservata.** Su 708 apprendenti, una maggiore pratica orale assistita dall'IA si associava a una maggiore disponibilità a comunicare con esseri umani (β = 0,384) e a una minore [[anxiety-and-stress|ansia]] da parlato in lingua straniera (β = −0,416), mentre gli scenari con assistente vocale riducevano ulteriormente l'ansia attesa; nessuno dei due studi ha osservato il parlato umano reale ([[ai-speaking-practice-communicative-readiness-2026|Wang & Li (2026)]]).
- **Attenzione agli errori pragmatici, non solo grammaticali, nell'output dell'IA.** Insegnanti di cinque metodi di insegnamento linguistico online hanno indicato la cecità pragmatica, in cui l'output dell'IA è grammaticalmente corretto ma errato quanto a tono, formalità o cultura ([[ai-ethics-tensions-online-pedagogy-2026|Baoyi e Khan (2026)]]).
- **Dare priorità alla qualità del feedback piuttosto che alla quantità nel parlato supportato dall'ASR.** [[asr-english-speaking-feedback-metacognition-2026|Chen et al. (2026)]] rilevano che la correzione accurata degli errori e i compiti strutturati di riflessione migliorano l'interiorizzazione del [[feedback]] e il comportamento riflessivo nel parlato inglese universitario, mentre l'uso frequente dell'ASR e la precisione del riconoscimento accrescono motivazione o riflessione solo parzialmente — la sola precisione tecnica non guida un coinvolgimento cognitivo più profondo, e la competenza linguistica modera i guadagni (chi apprende più forte interiorizza il feedback più efficacemente). Questo sostiene un feedback pedagogicamente solido (ad es., spiegazioni articolatorie anziché semplici segnalazioni di errore), la riflessione assistita da scaffolding e il supporto differenziato per competenza.
- **Dare indizi prima delle correzioni.** Un compito ChatGPT con "indizio prima della correzione", in cui chi apprende deduce le correzioni da suggerimenti guidati anziché ricevere correzioni dirette, ha ridotto il carico cognitivo e sostenuto la revisione personalizzata — ma il beneficio valeva principalmente per chi aveva già conoscenze pregresse sufficienti (58 studenti, CEFR A1–B1) ([[lukesova-clue-before-correction-2026|Lukešová & Jennings (2026)]]).
- **Fornire un feedback sulla pronuncia che localizzi la differenza da colmare.** Profy apprende la competenza da parlato ampiamente non annotato e mostra *dove* chi apprende diverge dalle distribuzioni dei madrelingua; i suoi intervalli di confidenza dell'intelligibilità pre/post non si sovrapponevano, a differenza di una baseline di imitazione elicitata — una prova che la pratica di imitazione può essere supportata senza valutatori esperti ([[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]).
- **Usare il canale della trascrizione come secondo segnale, non come sostituto.** Un classificatore audio WavLM ha battuto un classificatore GPT-4o zero-shot che leggeva le trascrizioni su un corpus di apprendenti bilanciato per CEFR, quindi le tracce lessicali della prima lingua sono reali ma più deboli della pronuncia, del ritmo e dell'intonazione ([[acoustic-lexical-native-language-identification-learners-2026|Uluslu et al. (2026)]]).
- **Sostenere l'adattamento psicologico di chi apprende allo studio assistito dall'IA.** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]] segue chi apprende il giapponese per un semestre e rileva che si dividono in profili di adattamento disadattivo, moderato e positivo guidati dall'equilibrio tra tecnostress e resilienza, con la maggior parte di chi apprende che si sposta gradualmente verso un adattamento positivo e riporta maggiore [[self-efficacy|autoefficacia]] e minore burnout — un segnale per progettare una pratica linguistica mediata dall'IA che gestisca la tensione tecnologica, non solo l'accesso allo strumento.
- **Stare attenti al pregiudizio di punteggio e feedback contro chi apprende.** Il [[ai-scoring-language-bias-physics|punteggio attribuito dall'IA]] può penalizzare le strutture non native; la [[genai-linguistic-diversity-academic-writing|ricerca sulla diversità linguistica]] avverte che l'IA privilegia l'inglese standard — usare valutazione auto-referenziale o moderata da esseri umani.
- **Sostenere l'intero spettro di chi apprende.** Gli studi su [[dyslexlens-dyslexic-learners-ai|dislessia e accessibilità]] e la progettazione [[culturally-relevant-pedagogy|culturalmente responsiva]] ([[ai-tools-arab-english-classrooms|contesti arabo-inglesi]]) mostrano che l'IA deve essere adattata a esigenze di apprendimento diverse, non data per universale.

- **È l'infrastruttura, non solo il punteggio, a escludere le lingue.** Il bengalese detiene meno dello 0,5% dei contenuti web globali contro un deficit di token di addestramento inglese-bengalese di 67:1 e un divario di connettività rurale–urbano (36,5% contro 71,4% di penetrazione di internet), per cui la progettazione nativa, offline-first è un prerequisito per l'accesso anziché una comodità ([[structural-silence-underrepresented-language-ai-2026|Roy e Roy (2026)]]).
- **Gli educatori valorizzano l'IA generativa per il lavoro preparatorio, non per l'uso in classe dal vivo.** Una [[li-language-educators-genai-review-2026|revisione sistematica PRISMA di 23 studi]] (Li et al. 2026) rileva che gli educatori linguistici valorizzano maggiormente l'IA generativa per la preparazione dietro le quinte — la [[curriculum-design|pianificazione delle lezioni]], la creazione di materiali e il supporto/feedback alla scrittura — pur restando esitanti sull'implementazione diretta e visibile in classe, a riflettere un divario teoria–pratica tra l'approvare l'IA in linea di principio e l'usarla dal vivo. L'adozione è plasmata da fattori di identità professionale, pedagogici, tecnici, [[governance|istituzionali]] e di [[academic-integrity|integrità accademica]], con educatori che si collocano lungo uno spettro dalla non-adozione all'integrazione completa; gli atteggiamenti tendono a evolvere dall'insicurezza iniziale verso un uso selettivo e fiducioso con l'esposizione.
- **Preparare l'[[ai-literacy|alfabetizzazione sull'IA]] degli insegnanti di lingue.** Le [[governing-unseen-ai-literacy-language-teachers-2026|revisioni sistematiche]] rilevano che l'alfabetizzazione sull'IA tra gli insegnanti di lingue è una lacuna chiave — investire nella [[educational-development|formazione professionale]] degli insegnanti insieme all'adozione degli strumenti. Man mano che l'IA rimodella l'educazione linguistica, l'alfabetizzazione sull'IA è cruciale anche perché gli insegnanti si impegnino criticamente con la tecnologia: la Teachers' AI Literacy Scale (TAILS) è stata sviluppata per la [[teacher-education|formazione degli insegnanti di lingue]], operazionalizzando il framework ED-AI a sei dimensioni (conoscenza, valutazione, collaborazione, contestualizzazione, [[agency|autonomia]], [[ethics|etica]]) e validata con insegnanti di inglese pre-servizio.
- **Quattro profili di interazione in un compito bilingue ad alta pressione.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li e Weng (2026)]] hanno usato eye-tracking, registrazione della penna e registrazione vocale con 22 tirocinanti di interpretariato per mostrare che gli studenti dividono l'attenzione tra output dell'IA e i propri appunti in quattro modi distinti — Intensive Engagers, Fast Scanners, Traditionalists e Frequent Switchers — e che il 58,3% delle osservazioni a livello di fase cambiava profilo tra le fasi di comprensione e produzione dello stesso compito. Solo le strutture della fase di comprensione predicevano la qualità del prodotto, e il gruppo più dipendente dall'IA otteneva il punteggio più basso in fluenza di resa e qualità della lingua obiettivo, il che argomenta a favore dell'insegnare a chi apprende a descrivere e riflettere sulla propria strategia anziché prescrivere un unico modo di lavorare con lo strumento.
- **Instradare il ciclo completo delle quattro abilità attorno a costo e connettività.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] rilasciano LLMersion-1, un prototipo local-first che copre ascolto, lettura, parlato e scrittura sul documento personale di chi apprende su hardware di consumo — un tutor 1B si quantizza a 808 MB e l'intero stack residente resta sotto i 4 GB — e prezza cinque anni di pratica quotidiana a circa \\$18 di elettricità, contro \\$1.200 per un abbonamento cloud. Non sono riportati esiti per chi apprende e il feedback sulla pronuncia è solo segmentale.
- **Le evidenze sui guadagni orali dei chatbot sono disomogenee per caratteristica.** Nell'unica sintesi sistematica della questione, dieci studi dal 2021 al 2024 miglioravano più affidabilmente l'ampiezza e l'intelligibilità, mentre la coerenza era esaminata una sola volta e l'interazione quasi mai; quattro dei dieci riportavano un unico punteggio olistico ([[chatbots-oral-proficiency-efl-systematic-review|Soriano-Gonzalez & Belda-Medina (2026)]]).

## Idee sbagliate comuni

- **"I tutor robot incarnati funzionano grazie all'incarnazione."** Una meta-analisi di **11 studi RALL (N = 595)** ha trovato un grande effetto aggregato sull'apprendimento della L2 (**g = 0,83**) con **elevata eterogeneità** e — cosa importante — **solo** le caratteristiche a livello di interazione lo moderavano. Morfologia e modalità no, quindi l'hardware non è l'ingrediente attivo.
- **"Gli item di valutazione generati dall'IA sono peggiori di quelli scritti dagli insegnanti."** Un confronto di **52 compiti di valutazione EFL valutati da 20 insegnanti esperti** non ha trovato **differenze complessive di qualità significative** tra item generati dall'IA e sviluppati da esseri umani, ma divergenze su dimensioni particolari. Parità complessiva con debolezze specifiche è un'affermazione diversa dal miglioramento o dalla carenza.
- **"Il feedback degli LLM può solo assegnare un punteggio alla scrittura."** Un sistema a livello di discorso va oltre **denominando il difetto anziché assegnare un punteggio al testo**, con la classificazione delle relazioni tra coppie di frasi che localizza le **rotture di coerenza** come salti logici e connettivi mancanti. L'output utile è diagnostico, non numerico.

## Concetti collegati

- [[eportfolio]]
- [[writing-education]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]

## Articoli collegati

- [[chatbots-oral-proficiency-efl-systematic-review]] — Chatbot gains in oral proficiency concentrate in range and intelligibility
- [[student-ai-interaction-consecutive-interpreting-2026]] — Student-AI Interaction in Computer-Assisted Consecutive Interpreting
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Profiles and Transitions of Psychological Adaptation in AI-Assisted Japanese Language Learning
- [[llm-agents-5e-esl-grammar-2026]] — LLM agents with 5E framework for ESL grammar acquisition (Yang, Weng & Yang 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning GPT for L2 listening item generation (Aryadoust & Wong 2026)
- [[bert-discourse-english-teaching-2026]] — BERT discourse classification for English teaching
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated vs human-developed assessment tasks in EFL
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Governing the unseen: AI literacy among language teachers
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Instructor-Designed AI Tutors in University Foreign Language Education: A Mixed-Methods Study of Learner Motivation and Reflective Learning Experience Based on Self-Determination Theory
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning
- [[chatgpt-english-language-learning-malaysia]] — Students' ChatGPT experiences in English language learning
- [[liu-emerging-tech-tefl-review-2026]] — Meta-analysis of emerging tech for EFL
- [[wang-goal-setting-ai-engagement-2026]] — Goal-setting theory: teacher support, achievement goals, and engagement in AI-assisted English learning (758 Chinese students)
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[asr-english-speaking-feedback-metacognition-2026]] — ASR technology in college English speaking: feedback internalization and metacognitive strategies
- [[genai-writing-program-primary-l2-motivation-engagement]] — A GenAI-supported writing program for primary L2 learners (Lu et al. 2026)
- [[llmersion-local-first-language-learning-2026]] — LLMersion: A Local-First AI Agent Framework for Low-Cost Home Language Learning toward Educational Equity
- [[ai-ethics-tensions-online-pedagogy-2026]] — Pragmatic blindness: AI language output can be grammatically correct but culturally wrong
- [[ai-speaking-practice-communicative-readiness-2026]] — Readiness, not observed performance
- [[genai-social-annotation-epistemic-network-analysis-2026]] — Extend AI scaffolding to collaborative reading
- [[acoustic-lexical-native-language-identification-learners-2026]] — Audio beats a zero-shot GPT-4o transcript classifier for L1 identification (Uluslu et al. 2026)
