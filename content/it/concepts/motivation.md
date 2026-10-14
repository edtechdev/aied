---
title: Motivazione
created: "2026-10-14T22:10:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [motivation, self-determination-theory, student-engagement]
technology: [affective-computing]
connected_faqs: [ai-anxiety-wellbeing, asynchronous-online-courses-ai]
audience: [learners]
confidence: high
reviewed_by: [editor]
translation_of: concepts/motivation
source_updated: "2026-10-03T12:32:09-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Motivazione** — i processi psicologici che avviano, dirigono e sostengono il comportamento orientato a un obiettivo. Nell'[[ai-education|AI nell'istruzione]], la [[research-methods-aied|ricerca]] sulla motivazione esamina come gli strumenti di AI influenzino la motivazione degli studenti e dei docenti — se l'AI [[scaffolding|fornisce supporto]] a o mina la perseveranza, la curiosità e il coinvolgimento intrinseco — e come gli stati motivazionali plasmino l'efficacia dell'apprendimento mediato dall'AI.

## Domande da considerare

- La motivazione è spesso trattata come un tratto che alcuni studenti "hanno" e altri no. La pagina la descrive invece come processi psicologici che avviano, dirigono e sostengono il comportamento — e come qualcosa di evolutivo e socialmente supportato. Come questo inquadramento ridefinisce chi è responsabile della motivazione dello studente?
- Gli strumenti di AI possono rimuovere gli attriti e rendere l'apprendimento più accessibile, ma possono anche ridurre lo sforzo cognitivo e la fatica che sostengono la motivazione intrinseca. Quando rendere qualcosa "più facile" l'ha effettivamente reso meno motivante o meno soddisfacente per te?
- La teoria dell'autodeterminazione afferma che la motivazione intrinseca cresce da autonomia, competenza e relazionalità. Se un [[intelligent-tutoring|tutor basato su AI]] svolge la maggior parte del lavoro, quale di questi tre potrebbe minacciare — e quale potrebbe potenziare?
- La ricerca rileva profili motivazionali distinti tra gli studenti in un [[curriculum-design|curricolo]] basato su AI, e che il raggiungimento di un profilo autodeterminato prediceva i maggiori guadagni in alfabetizzazione AI. Che cosa potrebbe servire a uno studente per passare dal disimpegno passivo a una genuina autodeterminazione nell'uso dell'AI?
- La pagina riporta che il supporto del docente guida il coinvolgimento assistito dall'AI in gran parte attraverso obiettivi di padronanza e di prestazione — gli orientamenti "di approccio" anziché "di evitamento". Come il modo in cui un docente inquadra l'uso dell'AI ("per farcela" vs. "per evitare di sbagliare") plasma il fatto che gli studenti si impegnino in profondità?
- Se progetti per la motivazione, l'obiettivo è rendere l'apprendimento più facile, più coinvolgente o più faticoso in modo significativo? Dove [[accessibility|accessibilità]] e motivazione intrinseca tirano in direzioni opposte?

## Introduzione

La motivazione è un costrutto fondativo nella ricerca sull'istruzione, e l'ascesa dell'AI nell'istruzione l'ha reso più consequenziale: gli strumenti di AI possono rimuovere gli attriti e rendere l'apprendimento più accessibile, ma possono anche ridurre lo sforzo cognitivo e la fatica che sostengono la motivazione intrinseca e l'apprendimento profondo. Gli articoli di questa base di conoscenza esplorano la motivazione attraverso gli strumenti di AI rivolti agli studenti, i sistemi di AI rivolti ai docenti, e i meccanismi psicologici — [[self-determination-theory|autodeterminazione]], [[self-efficacy-tutoring-learning|autoefficacia]], emozioni — attraverso i quali l'AI plasma il comportamento motivato.

- **[[lee-wu-gender-motivation-genai-achievement-2026|Lee e Wu]]** mostrano che genere e motivazione guidano un coinvolgimento differenziato con GenAI, con traiettorie di [[learning-gains|rendimento]] distinte.

## Temi principali di ricerca

**Gli effetti dell'AI sulla motivazione degli studenti** è la linea di ricerca più diretta. **[[ai-availability-student-motivation]]** esamina come la disponibilità di assistenza basata su AI influenzi la motivazione e la perseveranza degli studenti, collegandosi alla ricerca su [[cognitive-offloading|Over-Reliance]] riguardo all'erosione della motivazione quando è l'AI a svolgere il lavoro. Per la perseveranza in particolare, basta un'esposizione breve: dieci minuti con un assistente che rispondeva su richiesta hanno lasciato i partecipanti a saltare 0,20 dei problemi senza assistenza contro 0,11 per i controlli ([[liu-ai-assistance-reduces-persistence-2026|Liu et al., 2026]]). **[[scheu-mobile-chatbot-journaling-motivation-2026]]** esplora il journaling tramite [[conversational-ai|chatbot]] mobile come intervento motivazionale. **[[ai-learning-tools-engineering-education-needs]]** esamina che cosa motiva gli studenti ad adottare strumenti di apprendimento basati su AI nella [[engineering-education|formazione in ingegneria]].

Una meta-analisi di 42 studi (56 dimensioni dell'effetto, 6.059 studenti) ha trovato che l'apprendimento supportato da GenAI aumentava la motivazione di g di Hedges = 0,764 (IC 95% [0,566, 0,962]) — ma con I² = 93,7% e un intervallo di predizione al 95% di [−0,689, 2,217], la media nasconde contesti in cui l'effetto è vicino allo zero o negativo ([[genai-learning-motivation-meta-analysis-2026|Fang et al. (2026)]]).
- **L'uso non riflessivo erode la motivazione — più negli uomini.** L'uso di GenAI senza riflessione (accettare le risposte senza esaminarle) prediceva una motivazione più bassa (β = −0,54) e una [[self-efficacy|autoefficacia]] più bassa (β = −0,37) tra 487 studenti universitari, e l'effetto sulla motivazione era significativamente più forte per gli studenti maschi mentre l'effetto sull'autoefficacia era più forte per le studentesse ([[genai-thoughtless-use-self-directed-learning-2026|Zhao e Gu, 2026]]).

Il motivo per cui un lettore ricorre all'AI è esso stesso una variabile misurabile: la scala AIR distingue quattro motivazioni per la lettura assistita da GenAI — Task-oriented (orientata al compito), Feel-good (benessere), Translation e Low-effort (basso sforzo) — e solo Low-effort, usare l'AI quando si è stanchi o disimpegnati, era correlata negativamente al bisogno di cognizione (r = −0,18) ([[air-scale-motivations-ai-reading-2026|Brann, Etgar e Sidi (2026)]]).

**La motivazione nel coinvolgimento mediato dall'AI** esamina come la qualità motivazionale (non solo la quantità) cambi con l'AI. **[[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|Isaeva et al.]]** hanno combinato la teoria dell'autodeterminazione con la [[network-analysis|network analysis epistemica]] per studiare il coinvolgimento con l'[[generative-ai|AI generativa]]. **[[liang-ai-learning-motivation-sdt-2026|Liang et al. (2026)]]** hanno seguito la motivazione in ottica evolutiva tramite latent transition analysis su **2.086 studenti della [[k-12|scuola secondaria]]** in un curricolo sull'AI di un anno, trovando tre profili stabili (Disimpegnato, In sviluppo, Autodeterminato) e che il raggiungimento del profilo Autodeterminato prediceva i maggiori guadagni in [[ai-literacy|alfabetizzazione AI]]. **[[wang-goal-setting-ai-engagement-2026|Wang e Wang (2026)]]** hanno usato la teoria del goal-setting con **758 apprendenti di inglese dell'[[higher-ed|università]]**, mostrando che il **supporto del docente** guida il coinvolgimento assistito dall'AI principalmente attraverso obiettivi di padronanza e di prestazione (gli orientamenti di approccio, non di evitamento). Complessivamente questi studi mostrano che la motivazione nei contesti di AI è insieme evolutiva e socialmente supportata — cambia nel tempo e risponde al supporto del docente e all'inquadramento degli obiettivi, non solo al design dello strumento.

L'orientamento all'obiettivo instrada anche il modo in cui lo strumento viene usato: gli obiettivi di padronanza e di prestazione normativa tendono a sostenere l'elaborazione e il perfezionamento, mentre gli obiettivi di prestazione legati all'apparenza rendono più probabili la minimizzazione dello sforzo e la protezione della competenza percepita — quindi lo stesso assistente fornisce supporto al pensiero o lo sostituisce a seconda del clima motivazionale ([[oby-chatgpt-use-learning-framework-2026|Øby, 2026]]).

Un formato dialogico può aumentare la motivazione senza migliorare la valutazione complessiva: in 222 studenti del primo anno delle scuole superiori, il dialogo docente-docente ha aumentato la motivazione ARCS più del formato docente-studente per gli apprendenti con alta esperienza concreta (b = 0,162, p < 0,001) pur ottenendo un punteggio significativamente inferiore nella valutazione complessiva (b = −0,126, p = 0,005) ([[tts-dialogue-lessons-learner-characteristics-2026|Watanabe et al. (2026)]]).

La motivazione plasma il modo in cui gli studenti inquadrano lo strumento, e l'inquadramento porta con sé il guadagno metacognitivo: [[cui-motivation-roles-metacognitive-genai-2026|Cui et al. (2026)]] hanno trovato che il ruolo di collaboratore — il 7,5% dei log — era l'unico a produrre una catena metacognitiva completa, mentre gli studenti motivati estrinsecamente usavano GenAI come strumento sostitutivo nel 64,6% dei log e non producevano connessioni di ordine superiore.

**I guadagni motivazionali sono specifici del costrutto, non generali.** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]] hanno trovato che un programma di [[writing-education|scrittura]] supportato da GenAI di nove settimane per 301 studenti di classe quinta e sesta aumentava il loro sé ideale come scrittori in L2 e la buoyancy accademica — le componenti aspirazionale e di resilienza della motivazione — lasciando invariato il growth mindset; l'unico guadagno nel growth mindset è apparso nel gruppo di controllo e non è sopravvissuto alla correzione per confronti multipli. Gli studenti attribuivano il cambiamento all'aver visto un testo fluido costruito a partire da un vocabolario che già conoscevano, il che rendeva la scrittura riuscita sentita come raggiungibile. Quindi la motivazione non è un'unica manopola che l'AI alza: ciò che è migliorato è la convinzione di *poter* scrivere bene, non la convinzione che l'abilità cresca con lo sforzo. La stessa specificità di costrutto compare quando GenAI è esso stesso l'intervento di rilevanza. [[genai-math-relevance-intervention-2026|Guo, Fryer e Shum (2026)]] hanno fatto trascorrere a **218 studenti delle scuole superiori** un'ora in dialogo semi-strutturato con un [[conversational-ai|chatbot]] volto alla rilevanza personale rispetto alla [[math-education|matematica]]; la versione collettiva, a livello di classe, ha aumentato la rilevanza come identificazione (F = 4,35, p = 0,014, η² = 0,04; contro il controllo, F = 11,11, p = 0,001, η² = 0,073 — un effetto medio) e, nel SEM, prediceva la rilevanza rispetto a una lezione specifica una settimana dopo (β = 0,18, p < 0,01), mentre l'interesse per la lezione di matematica non si è mosso (F = 0,29, p = 0,75, η² = 0,003). Gli autori attribuiscono il disaccoppiamento al dosaggio: una singola sessione di un'ora è troppo breve perché i guadagni di rilevanza si consolidino in interesse per la classe.

Un intervento di utility-value non è uniformemente benefico: una versione con supporto graduale non ha prodotto alcun guadagno complessivo nell'integrazione della conoscenza nei docenti in formazione e l'ha *danneggiata* per gli apprendenti entrati con un alto valore di utilità percepito, un'interazione aptitudinale-trattamento che argomenta a favore di adeguare il supporto motivazionale ai punti di partenza degli apprendenti ([[utility-value-intervention-teach-responsibly-genai-2026|Boos, Eder e Lachner (2026)]]).
**Un messaggio di feedback muove l'interesse attraverso la sua utilità percepita, non attraverso le disposizioni dello studente.** [[jansen-argumentative-writing-feedback-receptivity-2026|Jansen et al. (2026)]] hanno fornito a 1.507 studenti della secondaria un singolo messaggio di feedback automatizzato standardizzato dopo una prima bozza di testo argomentativo: la ricettività globale era l'unica dimensione di ricettività correlata al cambiamento di interesse situazionale (circa 0,11 punti sulla scala osservata, grossomodo il 54° contro il 46° percentile), e quell'effetto era completamente mediato dall'utilità percepita (β indiretto = 0,09, IC 95% [0,06, 0,13]) senza alcun percorso diretto significativo residuo (β = 0,06, IC 95% [−0,07, 0,16]), quindi ciò che ha spostato l'interesse è stato il valore percepito del messaggio piuttosto che la posizione generale dello studente verso il feedback.

**La motivazione e la perseveranza dei docenti** esamina la motivazione tra gli educatori. **[[framing-5-percent-problem-teachers-persistence|Framing the 5 Percent Problem]]** studia la perseveranza dei docenti con gli strumenti di AI, e **[[teacher-education-ai-literacy-sdt-2026|Chiu et al.]]** hanno trovato che lo [[educational-development|sviluppo professionale]] che supporta i bisogni favorisce un coinvolgimento comportamentale sostenuto nelle comunità di apprendimento professionale.

- **Motivazione interculturale dei futuri docenti:** [[motivation-shape-future-education-ai-switzerland-china|Martínez-Moreno et al. (2026)]] hanno validato la scala (D)FIT-Choice con 416 studenti docente in Svizzera e Cina, trovando che i docenti svizzeri riportano una più forte utilità sociale e motivazione intrinseca mentre i docenti cinesi mostrano una più alta competenza digitale percepita ed entusiasmo per l'integrazione dell'AI — mettendo in evidenza come fattori culturali e sistemici plasmino la motivazione a plasmare il futuro dell'istruzione con l'AI.

- **L'autoefficacia è la radice del godimento di GenAI da parte dei docenti.** In uno studio PLS-SEM su 434 docenti in servizio, l'autoefficacia era l'unica variabile esogena del modello e il suo effetto maggiore era sul godimento percepito (β = 0,805, f² = 1,839, alimentando a loro volta l'utilità percepita e la facilità d'uso ([[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez et al., 2026]]).

**Il paradosso dello sforzo e il circolo vizioso dell'assistenza.** [[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar, Bloom e Inzlicht (2026)]] sostengono che la motivazione non è semplicemente aiutata o ostacolata dall'AI ma ridistribuita: gli esseri umani in generale prendono il percorso di minor resistenza, eppure cercano anche lo sforzo — il paradosso dello sforzo — perché lo sforzo segnala che le azioni contano e perché la ricompensa legata al processo piuttosto che al prodotto aumenta la tendenza a impegnarsi e perseverare. Ne conseguono due tesi. Primo, la relazione sforzo-significato è una U invertita, quindi l'obiettivo motivazionale è un attrito moderato, e il rischio dell'AI senza attriti è di oltrepassare verso troppo poco. Secondo, un circolo vizioso: man mano che l'AI sostituisce lo sforzo in un dominio, i benefici motivazionali dello sforzo in quel dominio si erodono, il che rende gli utenti più dipendenti dall'AI, il che erode ulteriormente la motivazione. Distinguono inoltre il supplemento dalla sostituzione per stadio evolutivo — gli apprendenti negli stadi più precoci rischiano di aggirare le esperienze che costruiscono la perseveranza, mentre chi ha abilità consolidate può usare l'AI per risparmiare tempo ([[desirable-difficulties]], [[self-efficacy]]).

**La letteratura misura la motivazione senza una teoria di essa.** Una revisione di tipo scoping di 156 studi dal 2003 al 2025 ha trovato che 133 (85,3%) non erano guidati da alcuna teoria motivazionale specifica, la variabile più comune era una motivazione accademica generalizzata (n = 89), e 88 studi (56,4%) provenivano da un unico contesto nazionale ([[ai-student-motivation-scoping-review-2026|Li et al., 2026]]).

## Collegamenti con concetti correlati

La motivazione è il costrutto genitore della [[self-determination-theory]], che specifica i bisogni psicologici (autonomia, competenza, relazionalità) che sostengono la motivazione intrinseca. Si collega alla [[student-experience|esperienza dello studente]] come strato esperienziale del coinvolgimento motivato, allo [[student-engagement|coinvolgimento dello studente]] come sua dimensione misurabile, e all'[[affective-computing]] per i meccanismi emotivi che plasmano la motivazione. La motivazione si collega inoltre a [[cognitive-offloading|Over-Reliance]] (l'AI che riduce le [[desirable-difficulties|difficoltà desiderabili]]), all'[[self-regulated-learning|apprendimento autoregolato]] (gli apprendenti motivati si autoregolano), e al [[teacher-role|ruolo del docente]] (la motivazione si applica agli educatori oltre che agli studenti).

## Concetti collegati

- [[learners]] — Studenti: l'ombrello per i concetti relativi allo studente
- [[self-directed-learning]]
- [[self-determination-theory]]
- [[student-experience]]
- [[student-engagement]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[teacher-role]]
- [[ai-education]]
- [[framing-ai-use-for-students]]
- [[social-emotional-learning]] — Apprendimento socio-emotivo
## Articoli collegati
- [[liu-ai-assistance-reduces-persistence-2026]] — Brief AI use reduced persistence on later unassisted problems (Liu et al. 2026)
- [[jansen-argumentative-writing-feedback-receptivity-2026]] — Automated feedback on argumentative writing: The role of secondary students' feedback receptivity and feedback perception
- [[zohar-bloom-inzlicht-against-frictionless-ai-2026]] — The effort paradox and the vicious cycle of frictionless assistance
- [[cui-motivation-roles-metacognitive-genai-2026]] — Motivation and roles in metacognitive GenAI engagement
- [[lee-wu-gender-motivation-genai-achievement-2026]] — Gender, motivation, and GenAI achievement trajectories
- [[oby-chatgpt-use-learning-framework-2026]]
- [[genai-thoughtless-use-self-directed-learning-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[chatgpt-perception-online-learning-engagement-2026]]
- [[genai-student-experiences-uk-he-survey-2026]]
- [[ai-availability-student-motivation]]
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]]
- [[teacher-education-ai-literacy-sdt-2026]]
- [[scheu-mobile-chatbot-journaling-motivation-2026]]
- [[framing-5-percent-problem-teachers-persistence]]
- [[self-efficacy-tutoring-learning]]
- [[guillen-curriculum-genai-teacher-competence-2026]] — Assessing Teacher Digital Competence for GenAI Curriculum Design (Guillén-Gámez 2026)
- [[motivation-shape-future-education-ai-switzerland-china]] — Motivation to shape the future of education with AI
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions
- [[student-perceptions-ai-study-productivity-2026]] — Students' Perceptions of Artificial Intelligence Tools for Study Productivity and Learning: An Exploratory Survey Study
- [[liang-ai-learning-motivation-sdt-2026]] — SDT latent transition analysis of students' AI learning motivation (2,086 secondary students)
- [[wang-goal-setting-ai-engagement-2026]] — Goal-setting theory: teacher support, achievement goals, and engagement in AI-assisted English learning (758 Chinese students)
- [[utility-value-intervention-teach-responsibly-genai-2026]] — Utility-value intervention effects in learning to teach responsibly with GenAI (Boos, Eder & Lachner 2026)
- [[genai-writing-program-primary-l2-motivation-engagement]] — Construct-specific motivation gains in a primary L2 GenAI writing program (Lu et al. 2026)
- [[air-scale-motivations-ai-reading-2026]] — The AIR Scale: four motive families for reaching for AI while reading
- [[genai-math-relevance-intervention-2026]] — GenAI relevance dialogue raised relevance as identification but left class interest flat

- [[genai-learning-motivation-meta-analysis-2026]] — Random-effects meta-analysis of GenAI's effect on learning motivation (56 effect sizes, 6,059 students)
- [[ai-student-motivation-scoping-review-2026]] — 156 studies on AI and student motivation: 85.3% used no motivational theory, and coverage is narrow in construct, level, and country
