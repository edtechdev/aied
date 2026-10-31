---
title: Ricerca basata sul design
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
research_method: [literature review]
confidence: high
methods: [design-based-research, research-methods-aied]
translation_of: "concepts/design-based-research"
source_updated: "2026-10-25T21:50:00-04:00"
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

> **La ricerca basata sul design (DBR)** — un approccio metodologico che progetta, implementa e affina iterativamente un intervento educativo in contesti autentici, alternando teoria, design e pratica reale per produrre tanto un artefatto utilizzabile quanto principi di design validati. Nell'[[ai-education|IA nell'educazione]], la DBR è il metodo d'elezione per sviluppare ambienti di apprendimento con IA, modelli [[pedagogy|pedagogici]] e programmi di formazione degli insegnanti che devono funzionare nella realtà disordinata delle aule — scambiando il controllo causale degli [[rct|esperimenti]] con l'autenticità ecologica e il perfezionamento iterativo.

## Domande da considerare

- La ricerca basata sul design progetta, implementa e affina iterativamente un intervento in aule reali, alternando teoria e pratica. In che cosa si differenzia radicalmente da un esperimento controllato — e perché un ricercatore che lavora in aula potrebbe preferirla?
- La DBR scambia deliberatamente il controllo causale con l'autenticità ecologica. Se non puoi dire con certetezza CHE COSA abbia causato un guadagno di apprendimento, la conoscenza che resta vale comunque qualcosa?
- La DBR produce due cose insieme: un artefatto utilizzabile e principi di design validati. Quale di questi due output conta di più per te — uno strumento che funziona, o un principio che puoi applicare altrove?
- Un punto di forza della DBR è l'elevata rilevanza pratica; un limite è che i risultati sono vincolati al contesto e difficili da generalizzare. Quando ti fideresti abbastanza di un risultato DBR da applicarlo in un contesto molto diverso?
- Senza una misura di esito controllata e non assistita, i guadagni di apprendimento della DBR possono riflettere lo stesso problema della "performance gonfiata dall'IA" che essa stessa studia. Come progetteresti uno studio DBR affinché i guadagni riportati significhino davvero apprendimento e non performance assistita?

## Introduzione

La DBR è una tradizione di *design*, non una tradizione di dati: non si incastra ordinariamente nel contrasto tra [[quantitative-research|quantitativo]]/[[qualitative-research|qualitativo]]/sperimentale. Combina deliberatamente elementi di tutti e tre — raccogliendo sia dati di esito sia dati di processo attraverso cicli iterativi — per rispondere alla domanda *"come progettiamo questo ambiente di apprendimento con IA perché funzioni nella pratica?"* piuttosto che a *"X causa Y?"*. È strettamente correlata al [[learning-design]] (che specifica il processo di design) e alla [[usability-research|valutazione dell'usabilità]] (che alimenta il perfezionamento), ma si distingue per il suo carattere sostenuto, guidato dalla teoria e su più cicli, e per il suo duplice obiettivo di migliorare la pratica *e* generare teoria.

## Il ciclo DBR

La DBR non è un singolo design ma un ciclo iterativo, che tipicamente comprende:

1. **Analisi dei bisogni** — comprendere il problema, il contesto e gli apprendenti in ambienti autentici.
2. **Design** — articolare un intervento e la sua motivazione teorica sottostante.
3. **Implementazione** — dispiegare l'intervento in un'aula o in un programma reale.
4. **Perfezionamento** — analizzare i dati, rivedere il design e iterare (spesso su più cicli).
5. **Output di teoria e di artefatto** — produrre sia un intervento utilizzabile sia principi di design generalizzabili o un modello validato.

L'esempio canonico nell'ambito dell'educazione all'IA è lo [[ai-assisted-collaborative-learning-model-dbr|studio sul modello di apprendimento collaborativo assistito dall'IA (AACL)]], che ha condotto un ciclo DBR in quattro fasi — analisi dei bisogni, design del modello, un'implementazione in aula di otto settimane con studenti universitari indonesiani, e perfezionamento del modello — iterando su un ciclo di apprendimento in quattro stadi (individuazione del problema → indagine [[collaborative-learning|collaborativa]] assistita dall'IA → [[problem-solving|problem solving]] collaborativo → riflessione e presentazione).

## Come appare la DBR nella base di conoscenza

- **Sviluppare modelli di apprendimento.** Lo [[ai-assisted-collaborative-learning-model-dbr|studio sul modello AACL]] usa la DBR per sviluppare e valutare un modello di apprendimento collaborativo assistito dall'IA che punta sul [[critical-thinking|pensiero critico]] e sulla risoluzione dei problemi nell'[[higher-ed|istruzione superiore]].
- **Costruire formazione docente sull'alfabetizzazione all'IA.** [[genai-literacy-training-teacher-education-dbr-2026|Le et al.]] sviluppano e valutano un intervento formativo DBR sull'alfabetizzazione alla [[generative-ai|GenAI]] per studenti di [[teacher-education]]; [[human-centered-ai-teacher-educators-2026|Baran et al.]] usano la DBR tra il 2023 e il 2025 per progettare un apprendimento professionale sull'[[ai-literacy|alfabetizzazione all'IA]] critica fondato sui principi dell'IA centrata sull'uomo.
- **Progettare standard [[governance|istituzionali]].** [[crompton-faculty-technology-integration-standards-2026|Crompton et al.]] usano la DBR su due macrocicli iterativi e 114 partecipanti per sviluppare sei standard di integrazione tecnologica per il corpo docente.
- **Implementazione iterativa di sistemi.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties et al.]] descrivono sei studi DBR iterativi (18 mesi, 498 partecipanti) che implementano l'assistente IA AIDA della Open University con un approccio a sistemi embedded.
- **[[scaffolding]] e design di interventi.** Il [[critical-thinking-genai-scaffolding|supporto al pensiero critico con GenAI]] e altri studi di sviluppo di interventi usano la DBR per progettare e affinare i supporti basati sull'IA.
- **[[curriculum-design|Progettazione curricolare]] guidata dai giovani e dagli esperti.** [[science-integrated-ai-literacy-curriculum-dbr-2026|Moore et al. (2026)]] usano un processo DBR di due anni con un comitato consultivo di giovani ed esperti di IA per progettare un curriculum di alfabetizzazione all'[[ai-literacy|IA]] / ML integrato con le scienze per la scuola secondaria, affinando il design attraverso coorti diverse e misurando i guadagni di conoscenza sull'ML — un esempio di DBR come co-design partecipativo che integra la voce dei giovani nel ciclo di design.
- **Il co-perfezionamento iterativo della rubrica come DBR.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] esemplificano il carattere di perfezionamento iterativo della DBR applicato allo strumento di valutazione stesso: hanno trattato la rubrica come un artefatto di design rivedibile e sono passati attraverso il co-perfezionamento con un [[llm|LLM]] — chiarendo i descrittori di performance e accettando esplicitamente indicatori impliciti di apprendimento — il che ha elevato la concordanza LLM–umano su 80 poster di progetto degli studenti dal 54,75% all'81,25% (Alfa di Cronbach 0,393 → 0,798). Lo studio posiziona la rubrica come un'interfaccia mediatrice tra l'intenzione pedagogica umana e l'inferenza della macchina, e il suo [[prompt-engineering|prompting]] differenziato per ruolo (istruttore, revisore tra pari, revisore di sovvenzioni) mostra come le scelte di design modellino l'output valutativo — una dimostrazione in stile DBR del fatto che lo strumento di valutazione, e non solo l'intervento, è un oggetto di design.
- **Co-progettare l'alfabetizzazione all'IA nella prima infanzia.** [[play-ai-pre-k-kindergarten-ai-literacy-2026|Lee (2026)]] usa la DBR per co-progettare, testare e affinare il curriculum Play With AI (PL-AI) attraverso cicli iterativi con due insegnanti di pre-K e due di scuola dell'infanzia, attingendo a questionari per insegnanti, 32 ore di video in aula, appunti sul campo e trascrizioni degli incontri di design. Lo studio documenta come la DBR supporti il perfezionamento iterativo di attività di alfabetizzazione all'IA appropriate allo sviluppo e produca principi di design trasferibili (gioco [[embodied-learning|incorporato]], coding tangibile, dialogo guidato, co-design con gli insegnanti).
- **La revisione esperta come evidenza del perfezionamento — e un'onesta dichiarazione di portata.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong et al. (2026)]] sottopongono il loro curriculum robotico iniziale a quattro percorsi a cinque esperti che lo valutano su otto dimensioni, per poi rivederlo di conseguenza: l'implementazione indipendente del PPO passa a un'estensione e viene aggiunto un prerequisito di Python dopo che quattro esperti su cinque segnalano il carico cognitivo. La dispersione guida le revisioni tanto quanto le medie — il contesto motivazionale aveva una media di 4,00 con DS = 1,73 e un isolato punteggio di 1/5 — e gli autori affermano apertamente che il quadro rivisto resta non valutato in attesa dei dati degli studenti.
- **La triangolazione, e il limite che non può attraversare.** [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al. (2026)]] conducono un modello a rotazione dei ruoli attraverso cinque fasi DBR — analisi del problema, design pedagogico, implementazione, valutazione, perfezionamento — lungo otto settimane con 62 partecipanti, triangolando diari riflessivi, interviste, note osservative e prodotti generati dagli studenti con il member checking. La lezione di design sta in ciò che gli autori rivendicano per esso: in assenza di una misura di competenza pre-post e di un gruppo di confronto, presentano l'evidenza come coinvolgimento durante l'intervento anziché come guadagni di competenza dimostrati, che è esattamente il confine che un design DBR multi-fonte può e non può attraversare.

## Punti di forza e limiti

- **Punti di forza:** elevata validità ecologica e rilevanza pratica; produce sia artefatti utilizzabili sia teoria; è reattivo alla complessità delle aule reali e all'evoluzione degli strumenti di IA; è adatto a sviluppare un modello e ad affinarlo sulla base di evidenze di implementazione autentiche; coglie come un intervento funzioni davvero (o fallisca) nella pratica.
- **Limiti:** debole validità interna (pochi o nessun gruppo di controllo); i risultati sono vincolati al contesto e difficili da generalizzare; tempi lunghi; è difficile isolare quale elemento di design abbia causato un esito — la DBR dimostra la fattibilità e il miglioramento ma non può attribuire i guadagni di apprendimento a un meccanismo specifico.

La DBR scambia il controllo causale degli [[rct|esperimenti]] con l'autenticità ecologica e il perfezionamento iterativo: la sua evidenza è più forte come prova di concetto e come guida al design che come efficacia causale. Leggere i guadagni di apprendimento della DBR richiede la stessa [[limitations-in-aied-research|prudenza]] degli altri design — senza una misura di esito controllata e non assistita, i guadagni possono riflettere lo stesso confondimento di performance gonfiata dall'IA documentato sotto [[learning-gains|guadagni di apprendimento]].

## Relazione con altri metodi

La DBR è il metodo distintivo delle [[learning-sciences|scienze dell'apprendimento]] — il campo interdisciplinare che studia l'apprendimento e il design degli ambienti di apprendimento, e che tratta la costruzione di un intervento e il suo studio come un'attività unica anziché due. È complementare, non rivale, degli altri metodi di ricerca (si veda [[research-methods-aied]] per il quadro completo). Dove gli [[rct|esperimenti]] stabiliscono la causalità e le indagini [[quantitative-research|quantitative]] stabiliscono l'ampiezza, la DBR stabilisce la *fattibilità e la conoscenza di design* — se un intervento possa essere costruito per funzionare nella pratica autentica e quali principi di design lo sostengano. Si abbina di frequente alla [[usability-research|valutazione dell'usabilità]] (per affinare l'interfaccia) e ai [[qualitative-research|metodi qualitativi]] (per comprendere come gli apprendenti vivano l'intervento). Un programma DBR maturo tipicamente culmina in una [[rct|prova di efficacia]] o in uno studio di [[educational-measurement|misurazione]] che testa su larga scala gli effetti causali dell'intervento sviluppato.

## Idee sbagliate comuni

**"La design-based research è un metodo qualitativo."** La DBR è una tradizione di *progettazione*, non una tradizione di dati: non rientra affatto nel contrasto quantitativo/qualitativo/sperimentale, perché la sua unità di lavoro è l'artefatto iterato anziché un unico piano di misurazione. Gli studi dentro la DBR possono essere quantitativi, qualitativi o sperimentali; ciò che li rende DBR è che il progetto viene revisionato mentre il risultato viene prodotto.

**"Il perfezionamento iterativo rende il progetto immune dai confondenti che affliggono altri metodi."** L'iterazione scambia una minaccia con un'altra. Perfezionare un progetto a metà studio significa che la versione finale differisce da quella che ha prodotto l'evidenza iniziale, quindi un'affermazione sull'"intervento" copre più interventi. Riportare quale revisione ha prodotto quale esito è responsabilità della disciplina, ed è spesso lasciato implicito.

**"Poiché la DBR produce un artefatto funzionante, ha dimostrato l'efficacia."** Un progetto che funziona nel sito che lo ha co-prodotto ha dimostrato una vitalità locale, che è un'affermazione diversa dall'efficacia. L'artefatto porta con sé gli adattamenti fatti per quel contesto, e trasferirlo trasferisce assunzioni che non erano mai state dichiarate come assunzioni.

**"Trattare uno strumento come un artefatto di progettazione revisabile è un allontanamento dalla DBR."** È il carattere iterativo della DBR applicato alla misurazione anziché all'intervento: uno studio di questo corpus ha trattato la rubrica stessa come l'artefatto, ciclando attraverso co-perfezionamenti con un [[llm|LLM]]. Quell'estensione vale la pena di essere notata perché rende lo sviluppo dello strumento stesso parte dell'evidenza.

## Concetti collegati

- [[research-methods-aied]]
- [[rct]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[usability-research]]
- [[learning-design]]
- [[educational-measurement]]
- [[learning-gains]]
- [[limitations-in-aied-research]]
- [[theory-development-aied]]
- [[learning-sciences]]

## Articoli collegati

- [[ai-assisted-collaborative-learning-model-dbr]] — DBR for an AI-Assisted Collaborative Learning Model
- [[genai-literacy-training-teacher-education-dbr-2026]] — DBR for AI-literacy training in teacher education
- [[crompton-faculty-technology-integration-standards-2026]] — DBR for faculty technology-integration standards
- [[human-centered-ai-teacher-educators-2026]] — Human-centered AI for teacher educators (DBR)
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Six DBR studies implementing AIDA at the Open University
- [[critical-thinking-genai-scaffolding]] — DBR for GenAI critical-thinking scaffolding
- [[science-integrated-ai-literacy-curriculum-dbr-2026]] — DBR for a science-integrated AI literacy curriculum (Moore et al. 2026)
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play With AI (PL-AI): play-centered AI literacy curriculum for pre-K and kindergarten (Lee 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
