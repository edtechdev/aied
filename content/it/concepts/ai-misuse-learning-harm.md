---
title: Uso improprio dell'IA e danno all'apprendimento
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
connected_faqs: [does-ai-help-students-learn, how-ai-impacts-students, asynchronous-online-courses-ai]
type: concept
foundations: [academic-integrity, cognitive-offloading]
pedagogy: [metacognition, motivation, self-regulated-learning]
technology: [generative-ai]
assessment: [assessment]
confidence: high
translation_of: concepts/ai-misuse-learning-harm
source_updated: "2026-10-25T16:25:00-04:00"
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

> **L'uso improprio dell'IA e il danno all'apprendimento** — la relazione causale tra lo scaricamento da parte degli studenti del [[cognitive-offloading|lavoro cognitivo]] sulla [[generative-ai|IA generativa]] e il ridotto apprendimento durevole, anche quando la performance immediata sul compito sale. La caratteristica distintiva è un divario performance–apprendimento: l'IA gonfia la performance assistita mentre degrada gli esiti non assistiti, a libro chiuso, e di ritenzione.

## Domande da considerare

- Uno studente può performare meglio nel momento presente imparando meno nel tempo — l'IA può innalzare la performance assistita degradando il risultato successivo, non assistito. Quando hai sentito di aver "imparato" qualcosa che è svanito nel momento in cui lo strumento se n'è andato?
- Il risultato centrale è un divario performance–apprendimento: gli studenti che hanno usato un [[intelligent-tutoring|tutor di IA]] senza guardrail hanno ottenuto punteggi del 48% più alti sulla pratica ma del 17% più bassi agli esami a libro chiuso. Come cambia questo il modo in cui interpreteresti un voto alto ottenuto con l'aiuto dell'IA?
- L'uso improprio riguarda la sostituzione — delegare la stesura, il richiamo o l'analisi che costruiscono la comprensione durevole — anziché usare l'IA come complemento. Dove tracceresti il confine tra l'IA che ti aiuta a imparare e l'IA che impara al posto tuo?
- Gli studenti nel gruppo danneggiato non percepivano di aver imparato meno. Se i discenti non possono accorgersi di essere danneggiati, che cosa dovrebbe osservare un insegnante al posto di fidarsi delle autovalutazioni degli studenti?
- Il danno è selettivo per tipo di valutazione: emerge su misure sorvegliate e a libro chiuso ma può essere nascosto quando i lavori del corso non riescono a distinguere il lavoro assistito dall'IA da quello indipendente. Che tipo di valutazione rivelerebbe effettivamente se gli studenti hanno imparato?
- L'IA con guardrail di tipo "suggerimento non risposta" ha eliminato il danno preservando il beneficio. Che cosa servirebbe per progettare un aiuto dell'IA che supporti l'apprendimento senza diventare una stampella?

## Introduzione

L'uso improprio dell'IA è distinto dall'uso dell'IA. L'uso descrive l'impiego dell'IA come complemento all'apprendimento — [[feedback|feedback]], brainstorming o aiuto alla revisione che mantengono il lavoro cognitivo del discente nel ciclo. L'uso improprio descrive la sostituzione: delegare all'IA i processi mentali stessi (stesura, richiamo, analisi, revisione) che costruiscono la comprensione durevole. Il danno documentato nella base di evidenze della knowledge base non è che l'uso improprio non aiuti; è che l'uso improprio degrada attivamente il risultato successivo, non assistito.

Il danno atteso è esso stesso documentato: in dati svedesi da indagine e focus group, [[gillette-partnership-ethics-genai-higher-education-2026|Gillette et al. (2026)]] hanno trovato che il 51% dei partecipanti (n = 106) temeva che l'uso della GenAI potesse ostacolare lo sviluppo individuale, nominando perdite nel [[critical-thinking|pensiero critico]], nella creatività e nell'autonomia anziché violazioni di regole.

### Il divario performance–apprendimento

Il concetto centrale, articolato in [[genai-performance-vs-learning|distinguere i guadagni di performance dall'apprendimento]], è che l'IA generativa aumenta facilmente la **performance** — efficienza immediata e qualità dell'output — bypassando spesso l'elaborazione cognitiva e [[metacognition|metacognitiva]] profonda richiesta per l'**apprendimento**. Uno strumento che ottimizza per la performance può quindi minare l'apprendimento. Il divario è ora dimostrato causalmente su scala di campo: un [[rct|trial controllato randomizzato]] ha trovato che l'assistenza dell'IA senza guardrail innalzava la performance sulla pratica ma riduceva i punteggi agli esami successivi non assistiti.

### Meccanismi del danno

- **La [[cognitive-surrender|resa cognitiva]]** — il termine che i ricercatori usano per gli studenti che scaricano il pensiero sull'IA come dipendenza passiva e non riflessiva, in opposizione alla forma deliberata e strategica dello [[cognitive-offloading|scaricamento cognitivo]]. Produce un declino misurabile a livello di popolazione della conoscenza durevole.
- **La copia delle risposte come stampella** — l'uso improprio è guidato meno dagli errori dell'IA che inducono in errore gli studenti che dagli studenti che copiano le risposte anziché imparare. Quando l'analisi dello [[student-engagement|engagement]] mostra che gli studenti per lo più "chiedono la risposta", il danno all'apprendimento segue.
- **L'erosione della motivazione** — la disponibilità percepita di una scorciatoia dell'IA senza sforzo riduce la motivazione autonoma e la persistenza, secondo la [[self-determination-theory|teoria dell'autodeterminazione]]. Poiché è la persistenza a produrre l'apprendimento profondo, la sua erosione si somma al danno diretto.
- **Lo spiazzamento dell'apprendimento** — la sostituzione degli output dell'IA ai processi faticosi (elaborazione, richiamo, auto-spiegazione) che consolidano la conoscenza, coerente con il [[cognitive-offloading|sovra-affidamento]].
- **La confusione letta come intenzione.** Quando gli insegnanti non nominano il ruolo previsto dell'IA in un compito, gli studenti lo definiscono in base a ciò che è più facile, e il corpo docente legge il disallineamento risultante come imbroglio piuttosto che come un confine che non è mai stato enunciato ([[this-is-how-we-ai-teaching-guide-2026|Hanshaw et al., 2026]]).

### La base di evidenze

- **RCT causale sul campo (≈1.000 studenti di matematica delle scuole superiori):** un tutor in stile ChatGPT senza guardrail ha innalzato la performance sulla pratica assistita **+48%** ma ridotto i punteggi all'[[summative-assessment|esame a libro chiuso]] non assistito **−17%** — gli studenti che non avevano mai avuto accesso all'IA superavano quelli che lo avevano avuto. Un tutor con guardrail di tipo "suggerimento non risposta" eliminava il danno. È notevole che gli studenti nel braccio danneggiato non percepivano di aver imparato meno.
- **Dati comportamentali su scala di popolazione (3,2 milioni di interazioni ALEKS):** il tempo di studio sui problemi suscettibili all'IA è sceso **−26,9%** cumulativamente per gli studenti universitari (scuole superiori −31,3%) dopo il rilascio di ChatGPT, con un **declino del 25% nelle probabilità di una risposta corretta sugli item di ritenzione sorvegliati**. L'effetto svaniva interamente sotto sorveglianza, ancorandolo all'uso dell'IA fuori piattaforma.
- **Un grande risultato nullo:** sfruttando il calo stagionale dell'uso di ChatGPT durante l'estate si è mostrato **nessun cambiamento netto nelle medie dei test standardizzati delle scuole superiori** — probabilmente perché il danno dell'uso improprio è compensato in aggregato dall'uso produttivo dell'IA. Questo non contraddice il danno causale all'apprendimento durevole; avverte di non sovra-generalizzare a partire dai punteggi aggregati dei test.

### La dipendenza come percorso verso il burnout

L'uso improprio danneggia più del risultato. Un'indagine su 276 studenti universitari cinesi
([[ai-dependency-self-efficacy-teacher-support-burnout-2026|Huang et al., 2026]]) ha modellato la dipendenza dall'IA come mediatrice tra
risorse protettive del discente e burnout da apprendimento, e ha trovato che portava l'intero effetto: l'[[self-efficacy|auto-efficacia accademica]]
e, più debolmente, il supporto degli [[teacher-role|insegnanti]] riducevano entrambi la dipendenza dall'IA, che a sua volta prediceva il burnout. Entrambi i percorsi indiretti
erano significativi e pienamente mediatori — gli effetti diretti diventavano non significativi una volta che la dipendenza entrava nel modello — con
il percorso dell'auto-efficacia il più forte dei due. Letto accanto al divario performance–apprendimento sopra, il risultato estende il costo
dell'uso improprio dalla conoscenza durevole degradata all'esaurimento e al disimpegno del discente, e localizza il meccanismo nella dipendenza stessa
piuttosto che nell'uso dell'IA in quanto tale: le risorse che proteggono dall'uso improprio sembrano funzionare prevenendo la dipendenza, non
contrastandone gli effetti a posteriori. Gli autori segnalano un'avvertenza di misurazione — la loro AI Dependency Scale è adattata dall'Internet
Addiction Test e la sua validità di contenuto per l'IA non è stata stabilita — quindi il percorso è meglio trattato come
un'ipotesi ben modellata che come una dimensione dell'effetto stabilita.

### La natura del danno dipendente dalla valutazione

La sfumatura pratica più importante è che il danno è **selettivo per tipo di valutazione**. Emerge su misure **sorvegliate, a libro chiuso e non assistite** della conoscenza durevole. Sui normali lavori valutati del corso che non riescono a distinguere il lavoro assistito dall'IA da quello indipendente, l'uso improprio può *gonfiare* i voti immediati. Questo è il motivo per cui il divario percepito-vs-effettivo è pericoloso: studenti (e a volte insegnanti) vedono guadagni di performance a breve termine e mancano l'erosione dell'apprendimento che emerge solo quando lo strumento viene rimosso.

**Quale affidamento, non quanto.** Un'indagine su 118 studenti in 12 corsi intensivi di IA ([[uneven-impact-generative-ai-student-learning-2026|Manikonda et al. 2026]]) separa due comportamenti che le misure di frequenza d'uso collassano. L'**affidamento cognitivo** — usare la GenAI per organizzare, valutare, combinare e scomporre — era il predittore più forte dell'impatto positivo percepito (β = ,495, p < ,001), e lo scaricamento che descrive non è uniformemente dannoso: organizzare e riassumere idee e scoprire nuove intuizioni si collocavano tra le caratteristiche associate al miglior apprendimento percepito. L'**affidamento precoce** — consultare la GenAI *prima* del pensiero indipendente, di una ricerca tradizionale o di un insegnante — prediceva il beneficio accademico (β = ,301, p < ,001) *e* l'impatto negativo (β = ,402, p = ,004) allo stesso tempo. La moderazione è la parte che riguarda il rimedio di alfabetizzazione sopra: l'associazione tra affidamento precoce e impatto negativo era assente a bassa [[ai-literacy|alfabetizzazione valutativa]] (b = ,025, p = ,861) e più forte tra gli studenti che giudicano meglio gli output dell'IA (b = ,688, p < ,001), quindi l'abilità valutativa non proteggeva dal costo del chiedere prima all'IA — gli studenti meglio piazzati per accorgersi del costo erano quelli che lo riportavano. L'implicazione operativa è che l'uso improprio è in parte una questione di *tempistica* rispetto al tentativo proprio del discente, non solo di volume, ed è il motivo per cui gli interventi che bersagliano quando l'IA viene consultata si affiancano ai rimedi di progettazione della valutazione sotto.

### Implicazioni e rimedi

- **I [[guardrails|guardrail]] sull'accesso grezzo:** il [[prompt-engineering|prompting]] di tipo suggerimento-non-risposta e lo [[scaffolding|scaffolding]] autorevole dell'insegnante neutralizzano l'effetto stampella (vedi [[generative-ai-guardrails-harm-learning|la GenAI senza guardrail può danneggiare l'apprendimento]]).
- **La [[assessment|progettazione della valutazione]]:** servono valutazioni resistenti all'IA e sorvegliate/non assistite per portare alla luce — e scoraggiare — l'uso improprio.
- **Alfabetizzazione e metacognizione:** la formazione all'[[ai-literacy|alfabetizzazione sull'IA]] e all'[[self-regulated-learning|apprendimento autoregolato]] che aiuta gli studenti a riconoscere i modelli di affidamento e il costo del bypassare il proprio lavoro cognitivo.

### Il disimpegno conversazionale nell'era degli LLM

La letteratura sul gaming-the-system (abuso dei suggerimenti, indovinare sistematicamente) ha una controparte dell'era del dialogo: il disimpegno conversazionale — deridere l'agente, rispondere deliberatamente in modo errato, ignorarlo, specchiare il suo testo, o trattenere le risposte. [[rho-disengaged-conversational-behaviors-2026|Rho et al. (2026)]] danno a questo fenomeno il suo primo trattamento sistematico nel dialogo studente-IA, e la loro lezione centrale è interpretativa piuttosto che allarmistica. Un *turno* disimpegnato è una mossa interazionale, non uno stato stabile di disimpegno. L'apparente associazione del False Answering con i punteggi post-test non è sopravvissuta a un controllo di sensibilità con annotazione umana, e gli autori la leggono come una sonda *all'interno* di traiettorie che spesso tornano all'engagement (il cluster con le prestazioni più alte si è ripreso a p = 0,42). Il comportamento che separava effettivamente le traiettorie era il Withholding — il rifiuto di rispondere, che persisteva anziché risolversi. Per i progettisti questo inverte la priorità usuale: il disimpegno rumoroso e visibile è spesso auto-correttivo, mentre il ritiro silenzioso segnala che l'interazione si è rotta.

## Idee sbagliate comuni

**"Gli studenti se ne accorgerebbero se l'IA stesse danneggiando il loro apprendimento."** Non se ne accorgono, ed è il fatto più consequenziale della pagina: **gli studenti del gruppo danneggiato non percepivano di aver imparato meno.** L'autovalutazione non è quindi un segnale di allarme precoce utilizzabile. Il pattern del 48% in più sulla pratica e del 17% in meno all'esame è invisibile a chi lo vive, ed è per questo che il rilevamento del danno deve basarsi sulla misurazione anziché sulla testimonianza.

**"Il rischio è quanto l'IA usa uno studente."** Il rischio è ciò in sostituzione di cui l'IA viene usata. L'uso improprio qui significa delegare la stesura, il richiamo o l'analisi che costruiscono la comprensione durevole — sostituzione anziché complemento, e uno studente può sostituire pesantemente in un compito e integrare produttivamente in quello successivo. Il volume d'uso è la variabile sbagliata; la divisione del lavoro cognitivo è quella giusta.

**"Se la performance nella pratica migliora, lo strumento funziona."** Nell'RCT causale sul campo di circa 1.000 studenti di matematica delle scuole superiori, un tutor in stile ChatGPT senza guardrail ha innalzato la performance sulla pratica assistita **+48%** mentre *riduceva* i punteggi all'[[summative-assessment|esame a libro chiuso]] non assistito del **17%**. Le direzioni sono opposte, quindi qualsiasi valutazione che legge il dato della pratica come esito certificherà esattamente il danno che dovrebbe rilevare.

**"Chi apprende con l'IA teme soprattutto di essere scoperto."** Le loro preoccupazioni dichiarate sono evolutive. In uno studio il **51% dei partecipanti (n = 106)** temeva che l'uso della GenAI potesse ostacolare lo sviluppo individuale, nominando perdite nel [[critical-thinking|pensiero critico]], nella creatività e nell'autonomia anziché violazioni di regole. L'inquadramento dell'[[academic-integrity|integrità]] che domina il discorso istituzionale non è quello a cui gli studenti stessi arrivano.

## Implicazioni per la pratica

**Per gli insegnanti**

- Non chiedete agli studenti se lo strumento ha aiutato; misurate la performance non assistita. Il resoconto soggettivo del gruppo danneggiato era rassicurante e sbagliato.
- Progettate per il complemento anziché la sostituzione, compito per compito, specificando che cosa lo studente deve produrre prima che l'IA possa essere usata.
- Vigilate su voti di pratica in salita accompagnati da punteggi non assistiti piatti o in calo — quella divergenza è la firma su cui agire, non un problema di qualità dei dati.
- Prendete sul serio la preoccupazione evolutiva nell'inquadramento. Gli studenti che sollevano perdite di pensiero critico e autonomia stanno descrivendo il meccanismo del danno, non resistendo a una regola.

**Per gli sviluppatori**

- Strumentate sia la performance assistita sia quella non assistita e non presentate mai solo la prima come apprendimento.
- Non aggiungete "lo hai trovato utile?" come misura dell'apprendimento; è rimasto stabile mentre l'apprendimento calava.
- Costruite il confine della sostituzione dentro l'interazione — il design con guardrail di tipo suggerimento-non-risposta ha eliminato il danno nella stessa famiglia di esperimenti.

**Per i ricercatori**

- Riportate sempre la misura non assistita, e riportate la percezione accanto ad essa anziché al suo posto.
- Riportate la struttura di sostituzione del compito, non solo la frequenza d'uso, quando attribuite il danno.

## Concetti collegati

- [[self-directed-learning]]
- [[remote-proctoring]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[self-regulated-learning]]
- [[motivation]]
- [[metacognition]]
- [[scaffolding]]
- [[generative-ai]]
- [[student-experience]]
- [[cognitive-surrender]]

## Articoli collegati

- [[gillette-partnership-ethics-genai-higher-education-2026]] — Swedish survey and focus-group study arguing that partnership ethics, not a cheating frame, should guide institutional genAI decisions
- [[rho-disengaged-conversational-behaviors-2026]] — Disengaged conversational behaviors and learning in student-AI dialogues (Rho et al. 2026)

- [[genai-thoughtless-use-self-directed-learning-2026]]
- [[generative-ai-guardrails-harm-learning]] — GenAI Without Guardrails Can Harm Learning
- [[genai-performance-vs-learning]] — Distinguishing Performance Gains from Learning
- [[ai-availability-student-motivation]] — AI Availability and Student Motivation
- [[genai-skill-bypass-literacy]] — GenAI Skill Bypass and Literacy
- [[cognitive-shift-ai-education]] — Cognitive Shift in AI Education
- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive Offloading in Student–AI Collaboration
- [[cognitive-commons-ai-expertise-regeneration]] — The tragedy of the cognitive commons: AI and expertise regeneration
- [[lodge-loble-cognitive-offloading-2026]] — AI, cognitive offloading and implications for education (Lodge & Loble 2026)
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[academic-erasure-complexity-ai-writing-2026]] — Academic erasure: the disappearance of complexity under AI-supported writing
- [[ai-dependency-self-efficacy-teacher-support-burnout-2026]] — AI dependency fully mediates the path from self-efficacy and teacher support to learning burnout (Huang et al. 2026)
- [[uneven-impact-generative-ai-student-learning-2026]] — Early reliance predicts negative impact while cognitive reliance predicts positive impact, and evaluation literacy strengthens rather than buffers the harm of consulting AI first (Manikonda et al. 2026)
- [[this-is-how-we-ai-teaching-guide-2026]] — This is How We AI: A Practical Approach to Teaching with Artificial Intelligence
