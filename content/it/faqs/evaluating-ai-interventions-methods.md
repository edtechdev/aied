---
title: "Quali misure e metodi di ricerca può usare un docente per valutare gli interventi legati all'AI?"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
reviewed_by: [editor]
translation_of: "faqs/evaluating-ai-interventions-methods"
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

# Quali misure e metodi di ricerca può usare un docente per valutare gli interventi legati all'AI?

**Abbinare il metodo all'affermazione.** Se vuoi sapere se agli studenti è *piaciuta* un'attività con l'AI, un sondaggio può aiutare. Se vuoi sapere se hanno *imparato*, usa misure di performance. Un sondaggio è una [[self-report-measures|misura di autovalutazione]] — lo strumento giusto per gli atteggiamenti e quello sbagliato per l'apprendimento, per le ragioni raccolte in quella pagina. Se vuoi sapere se l'AI ha *causato* un miglioramento, hai bisogno di una condizione di confronto credibile e preferibilmente di un'assegnazione casuale.

## Opzioni di metodo

La pagina [[research-methods-aied|Research Methods in AIED]] distingue diverse opzioni utili:

- Gli **esperimenti randomizzati** forniscono la più forte inferenza causale.
- Le progettazioni **quasi-sperimentali** pre/post o a gruppi abbinati sono spesso più pratiche in classi intatte ma supportano affermazioni causali più deboli.
- Interviste, focus group, osservazioni e analisi di artefatti **[[qualitative-research|qualitative]]** rivelano meccanismi ed esperienze inattese.
- L'**analisi qualitativa assistita dall'AI** può riorganizzare in pochi minuti corpora di interviste o osservazioni, quindi la [[chain-behind-claim-warrantability-2026|warrantability]] conta quanto l'accuratezza o la divulgazione: registrare le riorganizzazioni documentate che consentono a un lettore di ispezionare, contestare e rivedere il percorso dai dati all'affermazione.
- I **[[mixed-methods-research|metodi misti]]** combinano evidenze di esito con spiegazioni del perché gli effetti si sono verificati.
- La **[[design-based-research|ricerca basata sulla progettazione]]** è utile quando i docenti sviluppano e affinano iterativamente un intervento in un corso autentico.

Qualunque canale si usi, solo tre condizioni rendono interpretabile un'affermazione causale: un **trattamento descritto con precisione**, una **condizione di confronto ben definita** e una **misura valida dell'apprendimento durevole**. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] verificano 19 confronti su ChatGPT nell'educazione rispetto esattamente a questi criteri e trovano che solo 4 (21%) soddisfano tutti e tre — il 74% aveva un trattamento ben definito, il 42% un gruppo di controllo ben definito e il 53% un esito qualificabile come apprendimento. Uno [[generative-ai|strumento general-purpose]] introdotto insieme a nuove attività, feedback o progettazione dell'interfaccia confonde il medium con il metodo, quindi un risultato significativo non può essere attribuito all'AI.

## Una valutazione in aula gestibile

Per una valutazione in aula gestibile, un minimo utile è una **misura di base, l'intervento, una misura immediata successiva e una misura differita senza assistenza**. Ove possibile, includere una condizione di confronto come la pratica esistente, nessuna AI, AI senza restrizioni versus AI con scaffolding, o due progettazioni alternative. Misurare separatamente le prestazioni assistite e l'apprendimento indipendente.

La sintesi su [[ai-ed-evaluation|AI Ed Evaluation]] raccomanda esiti come guadagno di apprendimento senza assistenza, ritenzione differita, trasferimento a un nuovo compito, qualità del ragionamento, [[misconceptions]], accoglienza del feedback e prestazioni per sottogruppo. Engagement, soddisfazione, registri d'uso dell'AI, autoefficacia e [[technology-acceptance-model|utilità percepita]] possono essere misure secondarie preziose ma non dovrebbero essere trattate come sostituti dell'apprendimento. Il carico di lavoro del docente e il risparmio di tempo sono anch'essi esiti di implementazione legittimi.

Due cautele si applicano al modo di leggere i risultati. Primo, un effetto medio dalla letteratura è una guida debole per una singola classe: [[oneill-presumed-effective-meta-analysis-2026|O'Neill's (2026) audit]] di 14 [[meta-analysis-systematic-review|meta-analisi]] ad alto impatto ha trovato che nessuna forniva una base valida per le proprie affermazioni — i [[learning-gains|"academic achievement"]] aggregati mescolavano punteggi di test, motivazione, [[self-efficacy]] e atteggiamenti in un'unica stima, l'eterogeneità riportata era estrema (I² variava dal 77,2% al 94,4% nelle 13 analisi che la riportavano, con 12 di quelle 13 sopra l'80%), tutte e 14 valutavano in modo non valido il [[limitations-in-aied-research|publication bias]], e il 61% degli studi primari esaminati casualmente presentava problemi di validità, mentre le statistiche che mostrerebbero quanto si distribuiscano effettivamente i singoli risultati erano in gran parte assenti (solo quattro analisi riportavano la varianza tra studi e solo due riportavano un intervallo di previsione, entrambi includenti lo zero). Secondo, un punteggio comodo può misurare il costrutto sbagliato: in [[zhang-platform-scores-miss-ai-teaching-agents-2026|una valutazione di otto agenti di insegnamento AI]], l'agente classificato terzo dal punteggio proprio della piattaforma risultava ultimo su una rubrica validata da esperti, perché i punteggi della piattaforma indicizzavano le prestazioni degli studenti durante l'interazione anziché la qualità didattica dell'agente. Trattare qualunque metrica singola di una dashboard come un'ipotesi da validare rispetto a una misura legata alla capacità che si intende sviluppare.

Per ciò che l'evidenza attuale mostra e non mostra, e dove resta sottile, si vedano [[does-ai-help-students-learn]] e [[research-gaps-aied]].
