---
title: Ricerca sull'usabilità
created: "2026-10-14T21:55:00-04:00"
type: concept
connected_faqs: [designing-educational-ai-software]
research_method: [system development, user study, interviews]
page_kind: [evaluation]
confidence: high
methods: [usability-research]
reviewed_by: [editor]
translation_of: concepts/usability-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Ricerca sull'usabilità** — lo studio empirico di come gli utenti interagiscono con un sistema software, e della sua usabilità, utilità ed esperienza utente (UX). Derivata dall'interazione uomo-macchina (HCI), la ricerca sull'usabilità valuta se uno strumento educativo basato sull'IA è utilizzabile, apprendibile, efficiente e soddisfacente — le qualità che determinano se i discenti lo adottano effettivamente e ne traggono beneficio. È distinta da, ma complementare a, l'[[qualitative-research|indagine qualitativa]] sui fenomeni di apprendimento e l'[[quantitative-research|efficacia quantitativa]]: la ricerca sull'usabilità si concentra sull'*interazione tra persona e sistema*, non sui risultati di apprendimento in quanto tali.

## Domande da considerare

- Puoi ricordare uno strumento software — educativo o meno — pedagogicamente solido o genuinamente potente, che hai però smesso di usare perché confuso o frustrante? Quel fallimento è esattamente ciò che la ricerca sull'usabilità cerca di spiegare prima che costi apprendimento.
- Un'assunzione comune è che l'efficacia educativa di uno strumento possa essere giudicata dal miglioramento dei guadagni di apprendimento. Ma la pagina sostiene che uno strumento può essere inutilizzabile e sembrare comunque 'funzionare' in una sperimentazione, o essere utilizzabile e non riuscire a insegnare. Perché uno studio che mostra guadagni di apprendimento potrebbe comunque trascurare che lo strumento è scomodo da usare nella pratica?
- Prima di leggere i metodi, come faresti a scoprire se un tutor IA è confuso, frustrante o soggetto a errori per i discenti? Che cosa faresti o osserveresti effettivamente — e che cosa mancherebbe nel resoconto di soddisfazione di un utente che un'osservazione attenta coglierebbe?
- Il think-aloud è un metodo fondamentale: gli utenti verbalizzano i propri pensieri mentre lavorano, esponendo confusione e modelli mentali in tempo reale. Se tu fossi un discente che usa uno strumento di IA, cosa saresti in grado di articolare della tua confusione che un semplice sondaggio «ti è piaciuto?» non coglierebbe mai?
- La pagina osserva che la soddisfazione auto-riferita può divergere dalla performance oggettiva — le persone possono dire di amare uno strumento che segretamente le rallenta, o sottovalutarne uno che in realtà le aiuta. Dove hai visto quel divario tra ciò che le persone dicono e ciò che il loro comportamento mostra?
- La ricerca sull'usabilità ti dice se uno strumento è utilizzabile, non se insegna. Se stai valutando uno strumento di apprendimento basato sull'IA, come combineresti le evidenze di usabilità con le evidenze di apprendimento — e cosa potrebbe non riuscire a ottenere uno strumento che supera entrambi i test?

## Introduzione

La ricerca su usabilità ed UX risponde a domande come: gli studenti riescono a capire come usare questo tutor IA? Lo strumento di IA è confuso, frustrante o soggetto a errori? Si adatta al flusso di lavoro di insegnanti o discenti? Queste domande sono un prerequisito — e a volte la causa nascosta — dei [[learning-gains|guadagni di apprendimento]] (o della loro assenza) misurati negli studi di efficacia. Uno strumento di IA pedagogicamente solido ma inutilizzabile fallirà nella pratica; le evidenze di usabilità spiegano perché.

## Metodi fondamentali

- **Protocolli think-aloud.** Gli utenti verbalizzano i propri pensieri durante l'esecuzione dei compiti, rivelando comprensione, confusione e modelli mentali in tempo reale. [[code-anchor-multi-view-visualization|Uno studio sulle visualizzazioni di codice multi-vista]] e [[learn-framework-responsible-genai-pbl-2026|il quadro LEARN]] usano il think-aloud per comprendere come i discenti danno senso agli strumenti assistiti dall'IA; i [[feedback-futures-genai|feedback futures]] esaminano come i discenti elaborano il feedback generato dall'IA.
- **Studi con utenti.** Valutazioni strutturate basate su compiti misurano efficienza, tassi di errore, soddisfazione e completamento. [[rhaimi-productivemath-2025|ProductiveMath]] valuta l'usabilità di un'app basata sull'IA generativa nel supportare l'insegnamento del productive failure; [[supplynet-visual-exploratory-learning|SupplyNet]] conduce uno studio con utenti su uno strumento di apprendimento esplorativo visivo; gli [[llm-chatbots-cs-multiple-choice|chatbot LLM per le domande a scelta multipla in informatica]] valutano la qualità dell'interazione.
- **Interviste e osservazione.** Interviste e osservazioni qualitative sull'usabilità colgono esperienza utente, preferenze e punti critici. [[icub-humanoid-storytelling-llm-hri-2025|Uno studio di usabilità su un robot umanoide narratore]] usa una valutazione strutturata per chiedere se i genitori lascerebbero il robot interagire con un bambino; l'[[genai-architectural-design-studios|IA negli studi di progettazione]] osserva e intervista studenti che usano l'IA in lavori di progettazione autentici.
- **Valutazione sistematica dell'usabilità.** Valutazione euristica, cognitive walkthrough e misure di UX basate su questionari (ad es. SUS) valutano sistematicamente l'usabilità rispetto a criteri consolidati.

## Come la ricerca sull'usabilità appare nella base di conoscenze

- **Valutazione degli strumenti di apprendimento basati sull'IA.** [[rhaimi-productivemath-2025|ProductiveMath]], [[supplynet-visual-exploratory-learning|SupplyNet]] e le [[anvil-ai-educational-animations|animazioni educative]] sono valutati per usabilità ed UX.
- **Interazione uomo-robot e [[conversational-ai|IA conversazionale]].** [[icub-humanoid-storytelling-llm-hri-2025|Lo studio sull'umanoide narratore]] è uno studio di usabilità esplicito sull'interazione alimentata da [[llm|LLM]]; [[conversational-ai-agents-umbrella-review-2026|una revisione ombrello degli agenti di IA conversazionale]] identifica l'usabilità e la qualità dell'interazione come tema ricorrente.
- **Progettazione e raffinamento.** I risultati sull'usabilità alimentano la progettazione iterativa (vedi [[design-thinking|design thinking]] e [[learning-design|progettazione dell'apprendimento]]), migliorando gli strumenti prima o insieme ai test di efficacia.
- **Uno strumento attraverso contesti diversi, e il tetto che lo limita.** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] hanno mantenuto costanti dominio, compito e strumento mentre il livello educativo variava, così che le valutazioni di 144 studenti su 893 risposte di feedback e 237 report confrontino contesti anziché discipline — e solo l'accuratezza percepita differiva tra i livelli. Lo studio nomina anche il limite di questo tipo di valutazione con utenti: dal 72,2 all'86,4 percento degli studenti si collocava in media ad almeno 4 su 5, e gli autori dichiarano che le loro differenze non significative non stabiliscono l'equivalenza perché nessun margine è stato fissato in anticipo.
- **La progettazione dei valutatori riportata come parte del risultato.** [[bespoke-industry-personalized-lecture-videos-2026|Puech et al. (2026)]] hanno fatto giudicare a 25 esperti abbinati al dominio 92 lezioni rigenerate rispetto a una rubrica ancorata alla «qualità di una lezione MOOC standard», assegnando ogni video a un singolo revisore (k = 1) per distribuire il panel su una parte più ampia del corpus anziché raccogliere valutazioni ripetute. Il compromesso è modellato anziché nascosto: un modello a intercetta casuale attribuisce circa il 35 percento della varianza residua al revisore (ICC = 0,35) e gli intervalli sono raggruppati per revisore, ed è così che un panel di esperti può riportare «87 percento pari o superiore alla soglia» con un intervallo onesto.

## Relazione con le altre famiglie di ricerca

La ricerca sull'usabilità condivide i metodi di raccolta dati con la [[qualitative-research|ricerca qualitativa]] (interviste, osservazione, think-aloud) ma differisce nell'*obiettivo*: la ricerca qualitativa interpreta significato ed esperienza per costruire comprensione e teoria, mentre la ricerca sull'usabilità valuta un artefatto rispetto a criteri di usabilità/UX. Si sovrappone anche all'[[ai-ed-evaluation|valutazione dell'IA in educazione]] (valutare se un sistema funziona) e alla [[educational-measurement|misurazione]] (quantificare i costrutti di usabilità). La base di conoscenze tratta l'usabilità come un filone metodologico distinto ma connesso — rilevante per la [[human-ai-collaboration|collaborazione uomo-IA]], l'[[student-experience|esperienza dello studente]] e la progettazione di strumenti di apprendimento basati sull'IA efficaci. Vedi [[research-methods-aied|metodi di ricerca sull'IA in educazione]] per come si inserisce nel più ampio panorama dei metodi.

## Punti di forza e limiti

- **Punti di forza:** identifica direttamente le barriere di usabilità che bloccano adozione e apprendimento; produce indicazioni di progettazione azionabili; integra la ricerca di efficacia e quella qualitativa spiegando *perché* uno strumento funziona o fallisce nell'uso; relativamente rapida ed economica rispetto ai grandi esperimenti.
- **Limiti:** i risultati sull'usabilità non stabiliscono effetti sull'apprendimento (uno strumento utilizzabile può comunque non insegnare); campioni piccoli e impostazioni specifiche al compito limitano la generalizzabilità; la soddisfazione auto-riferita può divergere dalla performance oggettiva; dipendenza dal ricercatore e dalla progettazione del compito.

## Concetti collegati

- [[research-methods-aied]]
- [[qualitative-research]]
- [[human-ai-collaboration]]
- [[student-experience]]
- [[ai-ed-evaluation]]
- [[learning-design]]
- [[design-thinking]]
- [[intelligent-tutoring]]

## Articoli collegati

- [[icub-humanoid-storytelling-llm-hri-2025]] — A usability study of an LLM-powered storytelling humanoid
- [[rhaimi-productivemath-2025]] — ProductiveMath: usability of a generative-AI app
- [[supplynet-visual-exploratory-learning]] — SupplyNet user study
- [[anvil-ai-educational-animations]] — Usability of AI-generated educational animations
- [[code-anchor-multi-view-visualization]] — Think-aloud study of multi-view code visualizations
- [[learn-framework-responsible-genai-pbl-2026]] — LEARN framework and think-aloud evaluation
- [[feedback-futures-genai]] — How learners process AI-generated feedback
- [[llm-chatbots-cs-multiple-choice]] — LLM chatbots for CS multiple-choice questions
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents
