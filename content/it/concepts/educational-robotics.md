---
title: Robot nell'educazione
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/educational-robotics
source_updated: "2026-10-01T09:59:02-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Robot nell'educazione (robotica educativa)** — l'uso di robot fisici o simulati come strumenti per [[teacher-role|insegnamento]] e apprendimento. La robotica educativa spazia su un ampio spettro: dai kit programmabili che insegnano il pensiero computazionale e la programmazione, ai robot socialmente assistivi e umanoidi che fanno da tutor, raccontano storie, modellano la lingua dei segni o provano abilità sociali. È apprezzata perché favorisce la [[problem-solving|risoluzione di problemi]], il [[critical-thinking|pensiero critico]], la [[creativity|creatività]] e il coinvolgimento nelle STEAM, e perché rende tangibili i concetti informatici astratti attraverso l'interazione incarnata. Il corpus di robotica della knowledge base spazia dalla programmazione integrata nel [[curriculum-design|curricolo]], ai tutor conversazionali basati su LLM, ai robot di [[storytelling-in-education|narrazione]] socialmente assistivi, e al gioco di ruolo per l'apprendimento socio-emotivo. È sostenuta da due aree strettamente correlate, qui assorbite: i **robot sociali** (robot progettati per l'interazione sociale e la costruzione di relazioni) e l'**interazione uomo-robot (HRI)** (lo studio di come le persone percepiscano, si fidino e imparino con i robot).

## Domande da considerare

- Un robot in aula aggiunge una [[community-of-inquiry|presenza sociale]] incarnata che una chatbot su uno schermo non può dare. Che cosa pensi che il corpo fisico e i segnali sociali di un robot cambino nel modo in cui gli studenti apprendono, si fidano e si coinvolgono — e da che cosa potrebbero distrarre?
- I robot sociali usano espressione, gesti e personalità simili a quelli umani per insegnare, raccontare storie o provare abilità sociali. Un robot che sembra e agisce come un essere umano è intrinsecamente migliore per l'apprendimento, o quella presenza sociale potrebbe comportare rischi (disinformazione, eccessiva dipendenza, privacy) che gli strumenti esclusivamente software non hanno?
- Gli LLM permettono ormai ai robot sociali di conversare con scioltezza. Se un robot sa parlare come un tutor, che cosa dipende ancora dalla sua incarnazione fisica — e dove l'aggiunta di un "corpo" conta davvero per l'apprendimento anziché essere solo una novità?
- Pensa a un momento in cui hai imparato qualcosa manipolando fisicamente un oggetto o osservando le tue azioni produrre un risultato visibile. In che modo programmare un robot fisico potrebbe ancorare le idee astratte (come la logica dei programmi) in modo più efficace che scrivere codice su uno schermo?

## Introduzione

La robotica educativa è un'applicazione distinta ma strettamente correlata dell'[[ai-education|IA nell'educazione]]. A differenza dei [[intelligent-tutoring|tutor intelligenti]] o delle chatbot [[llm]] esclusivamente software, i robot aggiungono una presenza **incarnata** e spesso **sociale** — un agente fisico che chi apprende può vedere, manipolare e, sempre più spesso, con cui può conversare. Questa incarnazione è centrale per il loro valore [[pedagogy|pedagogico]]: essa ancora la logica astratta dei programmi a un comportamento osservabile e può sostenere la costruzione di relazioni e il coinvolgimento emotivo che i sistemi disincarnati non possono offrire.

L'evidenza è più sottile di quanto suggerisca il volume dei lavori: una rassegna dell'IA e della robotica nell'educazione rileva che la maggior parte degli studi empirici coinvolge chi apprende sotto i 13 anni per quattro settimane o meno, concentrati in pochi paesi che hanno investito precocemente, con la [[learning-gains|performance di apprendimento]] come esito più studiato e l'etica, l'equità e le politiche in ritardo rispetto all'adozione ([[white-wu-robotics-ai-education-2026|White e Wu (2026)]]).

### Robot sociali e interazione uomo-robot

Due filoni plasmano il lato sociale della robotica nell'educazione.

I **robot sociali** sono robot progettati per coinvolgere le persone attraverso l'interazione sociale, usando segnali simili a quelli umani come l'espressione, il gesto, l'espressione facciale e la personalità per comunicare, insegnare, assistere o fare compagnia. Nell'educazione, i robot sociali (umanoidi come iCub, Pepper, Reachy e robot compagni) sono usati per il tutorato, la narrazione, il gioco di ruolo, il supporto linguistico e come compagni di studio. La loro presenza sociale è il fattore distintivo chiave rispetto agli [[agentic-ai|agenti IA]] software, perché consente la costruzione di relazioni e il coinvolgimento emotivo. I progressi nei [[llm|large language model]] hanno ampliato drasticamente ciò che i robot sociali possono dire e fare, abilitando un tutorato conversazionale fluido e adattivo — introducendo al contempo rischi come la disinformazione, la [[cognitive-offloading|eccessiva dipendenza]] e le violazioni della [[privacy]], e motivando approcci di progettazione basati sulla conoscenza.

L'**interazione uomo-robot (HRI)** è lo studio interdisciplinare di come persone e robot interagiscono, che comprende percezione, comunicazione, collaborazione e le dinamiche sociali, cognitive ed [[ethics|etiche]] di tale interazione. Nell'educazione, la HRI è alla base di come chi apprende percepisce, si fida e impara con i robot — sia programmando un robot, sia conversando con un robot tutor, sia provando scenari sociali. La [[research-methods-aied|ricerca]] sulla HRI esamina come l'aspetto del robot, il suo comportamento, il contesto del compito e l'incarnazione plasmino l'[[usability-research|esperienza utente]], la fiducia, l'agentività e l'apprendimento. Le preoccupazioni chiave nella HRI educativa includono preservare l'[[agency|agentività]] umana, costruire la [[trust|fiducia]], sostenere l'[[self-efficacy|autoefficacia]] e garantire che l'interazione con i robot sostenga anziché minare l'autonomia e l'apprendimento sociale. Essa collega la robotica alla [[human-ai-collaboration|collaborazione uomo-IA]] e all'[[social-emotional-learning|apprendimento socio-emotivo]].

### Come i robot sono usati nell'educazione

[[teaching-with-robots-five-types-perspective-2026|Christ et al. (2026)]] aggiungono una tipologia di ruoli anziché un elenco di tecnologie: i loro cinque tipi di robot d'aula, derivati da workshop, differiscono per *funzione pedagogica e livello di astrazione*, non per hardware. Il tipo a conduce una dimostrazione non interattiva di pattern sociali generici (un teatro delle emozioni preconfezionato seguito da una discussione di dinamiche come l'escalation o l'incomprensione); il tipo b è un robot interattivo reattivo al tocco che sostiene un teatro fisico partecipativo, l'[[embodied-learning|apprendimento incarnato]], la consapevolezza dei confini e la regolazione emotiva; il tipo c è un partner di lingua parlata che mostra empatia e ricorda le interazioni con un singolo alunno, creando un contesto protetto uno-a-uno per l'autorivelazione; il tipo d è guidato esternamente da uno specialista nascosto, come un burattino con gradi di libertà aggiuntivi, con l'obiettivo di appiattire la gerarchia sociale; e il tipo e è un robot non interattivo che riproduce azioni recentemente osservate nella scuola, affinché gli alunni possano riflettere sul comportamento situato — il contrasto con il tipo a essendo esattamente la sua astrazione specifica del contesto anziché generalizzata. La tipologia è esplicita nell'essere uno spazio di progettazione non validato, fondato su un unico programma nazionale di salute mentale, quindi è un menu per progettare e valutare ruoli del robot, non un'evidenza che uno qualsiasi di essi funzioni.

- **Pensiero computazionale e programmazione:** i robot programmabili (ad es. LEGO, piattaforme a blocchi) aiutano chi apprende a collegare il codice a risultati reali. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] collega il pensiero computazionale ai curricoli STEAM secondari, e [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] combina la programmazione a blocchi con un agente di [[conversational-ai|IA conversazionale]] e un feedback robotico incarnato. [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] consente ai principianti di controllare robot simulati con il linguaggio naturale.

- **Tutorato e trasmissione di conoscenza:** la [[knowledge-based-design-generative-social-robots-2026|ricerca sulla progettazione basata sulla conoscenza]] e [[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]] sviluppano robot sociali generativi basati su LLM che fanno da tutor a studenti dell'istruzione superiore, affrontando rischi come la disinformazione e la [[cognitive-offloading|eccessiva dipendenza]]. La [[task-context-trust-educational-hri-2026|ricerca sulla fiducia]] mostra che ciò che un robot fa (il contesto del compito) plasma la fiducia di chi apprende più del suo aspetto, con la fiducia più alta durante i compiti istruttivi.

- **Narrazione e coinvolgimento:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] e [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]] usano robot sociali interattivi basati su LLM per la narrazione, al fine di aumentare motivazione e coinvolgimento, mentre [[icub-humanoid-storytelling-llm-hri-2025|lo studio HRI narrativo su iCub]] esplora la narrazione co-creativa tra umani e umanoidi.

- **Apprendimento socio-emotivo e [[inclusive-learning|inclusione]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] usa il gioco di ruolo mediato dal robot per provare l'intervento da spettatore contro il bullismo, e [[pepper-robot-sign-language-lis-2025|il lavoro con il robot Pepper]] esplora la comunicazione in lingua dei segni tramite robot a supporto di studenti sordi. [[pepper-social-robot-formal-education-scoping-review-2026|Una revisione di scoping]] mappa l'uso di Pepper nell'educazione formale.

- **Autonomia e agentività:** [[human-autonomy-agency-hri-review-2025|una revisione sistematica]] sintetizza come la HRI influenzi l'autonomia umana e il senso di agentività, collegando i framework di progettazione alle esigenze [[regulation|regolatorie]] (AI Act dell'UE, IEEE Ethically Aligned Design). I [[social-robot-study-companions|robot sociali come compagni di studio]] e [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|l'integrazione robot-LLM nella scrittura creativa]] esplorano ulteriormente i ruoli dei robot.

- **Approcci basati su progetti e su giochi:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] presenta un corso di robotica basato su progetti, e [[game-based-gamified-robotics-education-review-2026|una revisione sistematica]] confronta l'apprendimento basato sul gioco e la gamificazione nell'educazione alla robotica.

- **Apprendimento per rinforzo e sim-to-realtà in un flusso di lavoro robotico completo.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao e Wang (2026)]] convertono un flusso di lavoro di ricerca robotica end-to-end — assemblaggio, controlli elettrici, addestramento di policy basato sulla simulazione e dispiegamento fisico — in un corso di [[k-12|scuola superiore]] costruito su un unico umanoide aperto (un ToddlerBot, con un costo delle parti dichiarato inferiore a 6.000 USD) distribuito su otto sessioni di tre ore. Le coppie condividono un robot e addestrano una [[reinforcement-learning|policy di camminata]] nella [[simulation|simulazione]] prima di dispiegarla sull'hardware, con barriere di sicurezza (un test di stazione eretta superato prima della camminata) che rendono visibile l'ordine delle dipendenze. Poiché un artefatto condiviso premia il team anziché l'individuo, il framework separa la performance del robot dalla comprensione individuale: gli studenti ruotano nei ruoli, ciascuno consegna una previsione e una spiegazione separate a ogni checkpoint, e il supporto graduale non è esplicitamente trattato come evidenza di padronanza concettuale — l'avvertimento degli autori che il superamento di una milestone del robot non equivale a comprenderla.

- **La robotica da competizione come problema di ecosistema, non di kit.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] collocano il vincolo vincolante sulla robotica K–12 meno nel curricolo o nell'hardware che nella mentorship tecnica locale sostenuta, e mostrano che esso è distribuito geograficamente: in Indiana, la partecipazione alla FIRST LEGO League è crollata nella stagione remota del 2020, la partecipazione urbana si è gradualmente ripresa e quella rurale no, rimanendo vicino al suo livello post-2020 fino al 2025–2026. Il loro framework ARC rende la mentorship l'oggetto ingegnerizzato — le università gestiscono un corso con crediti che prepara gli studenti undergraduate come mentor di workshop per i team vicini, e i programmi scolastici maturi diventano hub secondari i cui studenti esperti diventano peer mentor per ulteriori scuole, così che la portata si propaghi oltre l'area di attrazione di qualsiasi università attraverso un ciclo autorinforzante. Una sperimentazione su un'unica università ha creato tre team FLL rurali e spostato il senso di connessione comunitaria degli studenti undergraduate da 1,86 a 4,00 su una scala a cinque punti (il più ampio di qualsiasi spostamento misurato, davanti alla fiducia nell'insegnare concetti tecnici a +1,29), mentre una simulazione di Markov spazialmente esplicita delle 1.925 scuole pubbliche dell'Indiana ha proiettato 992 programmi scolastici dopo 40 anni sotto ipotesi moderate, contro 161 in assenza di ARC. L'evidenza è a livello di fattibilità — sette mentor e quattro genitori, autorielazioni retrospettive, nessun gruppo di controllo — ma l'inquadramento è trasportabile a qualsiasi programma di robotica: ciò che scala o non scala è la capacità di mentorship e la geografia degli hub, non il robot ([[arc-hubs-k12-ai-robotics-rural-2026]]).

- **Sviluppo infantile e studenti più giovani:** [[ai-toys-child-development-2026|i giocattoli abilitati all'IA e lo sviluppo infantile]] sposta la lente sui giocattoli IA commerciali nella prima infanzia, esaminando come i giocattoli abilitati all'IA influenzino lo sviluppo e il gioco del bambino. Questo estende la robotica educativa oltre i robot d'aula ai giocattoli di consumo che i bambini incontrano a casa, sollevando interrogativi sugli [[pedagogical-agent|agenti]] nel gioco, sulla [[trust-calibration|calibrazione della fiducia]], sull'[[agency|agentività]] e sul [[well-being|benessere]] degli studenti più giovani — un'area in cui l'orientamento progettuale è più sottile che per i curricoli di robotica in età scolare.

- **Codifica tangibile e robot sociali nell'[[ai-literacy|alfabetizzazione all'IA]] della scuola dell'infanzia.** Lee (2026) integra gioco unplugged, codifica tangibile (Bee-Bot, Ozobot) e dialogo guidato con un robot IA sociale nel curricolo Play With AI (PL-AI) per la scuola dell'infanzia e il kindergarten. La [[design-based-research|design-based research]] documenta come queste attività di robotica incarnata e tangibile sostengano il ragionamento emergente dei bambini sui concetti di IA, con quattro principi di progettazione — gioco incarnato, codifica tangibile, dialogo guidato e co-progettazione con l'insegnante — che offrono un modello adeguato allo sviluppo per la robotica e l'educazione all'IA nella [[early-childhood-elementary-ai-education|prima infanzia]].

- **Due paradigmi per gli studenti più giovani: robot di codifica e robot sociali generativi.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li e Lee (2025)]] inquadrano la robotica nella prima infanzia come l'accoppiamento di due paradigmi [[pedagogy|pedagogici]], ciascuno con una base teorica distinta. I **robot di codifica** (Bee-Bot, KIBO, Matatalab) discendono dal LOGO di Papert e incarnano il [[constructivist|costruzionismo]] — i bambini imparano costruendo e sviluppano il [[computational-thinking|pensiero computazionale]] attraverso la programmazione tangibile. I **robot sociali generativi**, basati sull'[[generative-ai|IA generativa]], sono fondati sul [[sociocultural-learning|costruttivismo sociale]] e agiscono come pari o tutor conversazionali che [[scaffolding|fanno da scaffolding]] all'apprendimento all'interno della Zona di Sviluppo Prossimale del bambino e sostengono lo sviluppo socio-emotivo. Il loro **Creative Project Approach** in cinque passi per integrare entrambi i tipi di robot nel Project Approach mantiene gli insegnanti come facilitatori che guidano l'interazione bambino-robot, bilanciano l'automazione con la [[creativity|creatività]] e preservano l'[[agency|agentività]] del bambino.

- **Ciò che la robotica del PC nella scuola dell'infanzia fa realmente.** Una revisione sistematica di 53 studi ha rilevato che l'apprendimento basato su problemi, la narrazione e lo scaffolding sono le strategie usate più frequentemente, con la maggior parte degli studi che non nomina alcun framework del PC e usa strumenti di valutazione ad hoc anziché uno strumento validato come TechCheck-K ([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou e Sapounidis (2026)]]).

### Incarnazione e pedagogia

Un tema definente è che i robot sono efficaci quando sostengono obiettivi di apprendimento genuini — non come esercizi tecnici isolati. Un proiettore robotico montato su scrivania ha pareggiato con il ChatGPT su laptop quando l'aiuto era disponibile (6,7 vs. 7,3/10, p = 0,41), ma ha mantenuto il proprio punteggio dopo il ritiro (7,0 vs. 4,4/10, p = 0,003), un punteggio di trasferimento a breve termine superiore del 60% — un guadagno dipendente dal compito che gli autori attribuiscono alla co-locazione spaziale anziché a una sostituzione generale ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). Il valore di un robot dipende dal contesto pedagogico: insegnare il pensiero computazionale ([[computational-thinking]]), sostenere le [[stem-education|STEAM]], costruire abilità di [[cs-education|programmazione]], motivare chi apprende ([[motivation|motivazione]], [[student-engagement|coinvolgimento]]), o sostenere l'[[social-emotional-learning|apprendimento socio-emotivo]] e l'[[equity-in-ai-education|inclusione]]. La robotica si collega anche all'[[project-based-learning|apprendimento basato su progetti]], al [[game-based-learning|game-based learning]] e all'[[experiential-learning|apprendimento esperienziale]]. Le considerazioni progettuali chiave includono preservare l'[[agency|agentività]] di chi apprende, costruire la [[trust|fiducia]], sostenere l'[[self-efficacy|autoefficacia]] e ancorare l'apprendimento all'[[embodied-learning|interazione incarnata]]. Nell'[[language-learning|apprendimento linguistico]], le [[robot-assisted-language-learning-meta-analysis-2026|evidenze meta-analitiche]] indicano l'efficacia dell'apprendimento linguistico robot-assistito incarnato.

- **Percorsi verso l'apprendimento della robotica potenziata dall'IA.** [[educational-robotics-pathways-2026|Uno studio qualitativo]] su studenti della scuola superiore in un curricolo robotica+IA ha rilevato apprendimento attraverso la pratica nel mondo reale, la progettazione e l'espressione creativa giocosa (ottica costruttivista, epistemologicamente pluralista).

## Concetti collegati
- [[early-childhood-elementary-ai-education]] — Educazione all'IA nella prima infanzia e nella scuola elementare
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Ombrello: tecnologie e tecniche di IA (modelli, addestramento di LLM, robotica, RAG, agentico)

## Articoli collegati

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Scoping Review of the Pepper Robot in Formal Education
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[computational-thinking-educational-robotics-secondary-2026]] — Computational Thinking and Educational Robotics
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — Knowledge-Based Design for Generative Social Robots
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — Task Context and Trust in Educational HRI
- [[human-autonomy-agency-hri-review-2025]] — Human Autonomy and Agency in HRI
- [[icub-humanoid-storytelling-llm-hri-2025]] — iCub Narrative HRI
- [[pepper-robot-sign-language-lis-2025]] — Pepper and Sign Language
- [[social-robot-study-companions]] — Social Robots as Study Companions
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Robot-LLM Integration in Creative Writing
- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — Pathways to Learning AI-Powered Educational Robotics (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — Robot-mediated CT in kindergarten
- [[ai-toys-child-development-2026]] — AI-enabled toys and child development
- [[creative-project-approach-ai-early-childhood-2025]] — The Creative Project Approach: integrating coding and generative social robots into early-childhood projects (Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — Five functionally distinct types of classroom robot, from scripted demonstration to one-to-one empathic dialogue (Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: a hubs-based framework that treats technical mentorship capacity and hub geography, not hardware, as the constraint on rural K–12 robotics programs (Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — Teaching Reinforcement Learning and Humanoid Robotics to High-School Students: An Expert-Validated Curriculum Design on a Low-Cost Open Platform
- [[aifred-desk-robotic-ai-guidance-2026]] — A desk-mounted robotic projector: co-located guidance preserved transfer where laptop ChatGPT lost it
