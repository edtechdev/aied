---
title: Apprendimento basato sul gioco
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-10-30T06:18:00-04:00"
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

> **L'apprendimento basato sul gioco (GBL, Game-Based Learning)** — l'uso dei giochi stessi (digitali o fisici) come mezzo e contesto per l'apprendimento, dove le meccaniche, le sfide e la progressione del gioco veicolano il contenuto educativo. Gli studenti imparano *giocando*. In modo analogo, la **gamification** applica elementi di progettazione del gioco (punti, badge, livelli, classifiche) ad attività di apprendimento non ludiche, senza trasformarle in giochi completi. Nell'istruzione sull'IA e sulla [[educational-robotics|robotica educativa]], entrambi gli approcci sono usati per rendere coinvolgente e motivante il contenuto tecnico.

## Domande da considerare

- L'apprendimento basato sul gioco usa il gioco stesso come mezzo per l'apprendimento — si impara *giocando*. La gamification si limita a sovrapporre punti, badge e livelli a un'attività non ludica. Quanto pensi che questi due approcci differiscano quanto a effetto sull'apprendimento reale, rispetto all'engagement a breve termine?
- Una revisione comparativa ha rilevato che l'apprendimento basato sul gioco è più diffuso nei contesti informali, mentre la gamification dominava nelle aule formali e privilegiava l'apprendimento basato su progetti. Perché secondo te ciascun approccio ha trovato una sede diversa — e cosa ci dice questo sui contesti in cui ciascuno funziona meglio?
- La gamification è fondata sulla teoria dell'autodeterminazione — [[agency|autonomia]], competenza, relazione. Se la motivazione consiste nel soddisfare questi bisogni, perché un sistema a punti e badge potrebbe riuscire o fallire a seconda di come modella lo sforzo percepito e l'attenzione?
- La [[research-methods-aied|ricerca]] suggerisce che il beneficio motivazionale delle progettazioni ludiche e supportate dall'IA dipenda da come esse modellano il carico di lavoro percepito e l'attenzione, non dalla gamification di per sé. Quando hai visto un gioco o dei badge aumentare l'engagement senza migliorare effettivamente l'apprendimento — o viceversa?

## Introduzione

Il GBL è fondato sulle teorie della [[motivation|motivazione]], dello [[student-engagement|engagement degli studenti]] e dell'[[active-learning|apprendimento attivo]]: i giochi forniscono motivazione intrinseca, feedback immediato e contesti problematici autentici. Si sovrappone alla [[simulation|simulazione]], al [[project-based-learning|project-based learning]] e alla [[educational-robotics|robotica educativa]]. Il GBL è particolarmente rilevante per la [[educational-robotics|robotica educativa]], il [[computational-thinking|pensiero computazionale]] e la [[cs-education|formazione in informatica]], dove i giochi possono rendere concreti e divertenti i concetti tecnici astratti.

### Come il GBL appare nella ricerca della base di conoscenza

- **Istruzione in robotica:** [[game-based-gamified-robotics-education-review-2026|una revisione sistematica comparativa]] dell'apprendimento basato sul gioco e della gamification nell'istruzione in robotica ha rilevato che il GBL è più diffuso nei contesti informali, mentre la gamification dominava nelle aule formali e privilegiava il [[project-based-learning|project-based learning]].
- **Giochi mediati da robot:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] è un gioco di ruolo mediato da robot per l'intervento contro il bullismo, e [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] usa la [[storytelling-in-education|narrazione digitale]] interattiva per aumentare la motivazione.
- **Agenti [[conversational-ai|conversazionali]] di IA nei giochi di simulazione:** Wenzel, Geiger e Liening (2026) derivano il framework CAIS-GBL — quattro principi di progettazione e quindici caratteristiche di progettazione per agenti conversazionali di IA nell'apprendimento basato sul gioco digitale — da meta-requisiti teorici che abbracciano l'engagement cognitivo, motivazionale, [[affective-computing|affettivo]] e [[sociocultural-learning|socioculturale]], con un approccio [[equity-in-ai-education|equità]] per progettazione. Il loro agente istanziato (Lara) in un gioco di simulazione aziendale è stato accolto positivamente per la presenza cognitiva e [[community-of-inquiry|presenza sociale]] e per il supporto a [[self-regulated-learning|l'autoregolazione dell'apprendimento]], affrontando il limite frequente del feedback [[formative-assessment|formativo]] e della riflessione strutturata nei giochi di simulazione.

- **Efficacia del GBL con IA:** una revisione sistematica di 55 studi sull'apprendimento basato sul gioco supportato dall'IA rileva effetti positivi su conoscenza, motivazione intrinseca e engagement affettivo, ma solo 4 studi (7%) hanno raggiunto la sua soglia di alta qualità e solo 4 (7%) erano [[rct|RCT]] ([[ai-game-based-learning-systematic-review-2026|Kaşarcı & Yurt, 2026]]). L'efficacia dipendeva dall'allineamento del meccanismo di IA con una [[learning-theories|teoria dell'apprendimento]] dichiarata.
- **Gli studenti come progettisti di giochi anziché come giocatori:** [[karampa-students-game-designers-ai-literacy-2026|Karampa et al. (2026)]] hanno fatto progettare a 22 studenti di primaria di 8-12 anni un escape board game aumentato sul tema della disinformazione, sommando [[project-based-learning|apprendimento basato su progetti]] e [[design-thinking|design thinking]] al framework delle escape room Room2Educ8. L'[[ai-literacy|alfabetizzazione all'IA]] composita su un questionario DigComp 3.0 di 20 item è salita da 3,684 a 4,309 su una scala a 5 punti, t(21) = −21,086, p < ,001, con tutte e cinque le aree di competenza in miglioramento. La classe ha generato 11 proposte con prompt di IA e le ha fuse in un unico gioco realizzabile. Autodichiarazione, una sola classe, nessun gruppo di controllo.

### Gamification

La **gamification** è l'applicazione di elementi di progettazione del gioco (punti, badge, livelli, classifiche, sfide, barre di avanzamento) a contesti non ludici per motivare e coinvolgere gli utenti. A differenza dell'apprendimento basato sul gioco — dove l'apprendimento avviene *attraverso* un gioco — la gamification sovrappone meccaniche di gioco a un'attività di apprendimento esistente, senza trasformarla in un gioco completo. È usata nell'istruzione per aumentare la motivazione, lo [[student-engagement|engagement degli studenti]] e la persistenza, ed è ampiamente applicata nei contesti delle aule formali.

La gamification è fondata sulla teoria motivazionale, in particolare sulla [[self-determination-theory|teoria dell'autodeterminazione]] (a supporto di autonomia, competenza e relazione) e sui framework di cambiamento comportamentale. Ha mostrato una particolare sinergia con il [[project-based-learning|project-based learning]] nei domini applicati come la robotica. Nella ricerca della base di conoscenza:

- **Istruzione in robotica:** la revisione comparativa ha rilevato che la gamification dominava nelle aule formali nell'istruzione in robotica (p < .001) e privilegiava fortemente il [[project-based-learning|project-based learning]] (p = .009), mentre l'apprendimento basato sul gioco era più comune nei contesti informali.
- **Engagement e motivazione:** la gamification è usata in tutta la base di conoscenza per aumentare l'engagement e la motivazione degli studenti nei contesti di apprendimento dell'IA, della [[cs-education|programmazione]] e delle [[stem-education|discipline STEM]]. La ricerca su [[genai-motivation-engagement-2026|IA generativa, motivazione e engagement]] esamina come gli elementi ludici si combinino con l'IA per sostenere l'interesse degli studenti. Due studi del 2026 estendono questo confrontando condizioni gamificate e supportate dall'IA con l'istruzione tradizionale: [[nasa-tlx-workload-gamified-ai-2026|uno studio NASA-TLX]] ha misurato il carico di lavoro percepito in condizioni di apprendimento tradizionali, gamificate e supportate dall'IA, e [[arcs-motivational-ergonomics-gamified-ai-2026|uno studio ARCS]] ha esaminato l'"ergonomia" motivazionale nell'apprendimento gamificato e supportato dall'IA, con implicazioni per la [[professional-training|formazione sul posto di lavoro]]. Insieme chiariscono che il beneficio motivazionale delle progettazioni ludiche e supportate dall'IA dipende da come esse modellano [[motivation|lo sforzo percepito]], il carico di lavoro e l'attenzione (ad es. le dimensioni attenzione/rilevanza dell'ARCS), non dalla gamification di per sé.

Il GBL e la gamification si collegano insieme alla [[educational-robotics|robotica educativa]], allo [[student-engagement|engagement degli studenti]], alla [[motivation|motivazione]], alla [[self-determination-theory|teoria dell'autodeterminazione]], all'[[active-learning|apprendimento attivo]], alla [[simulation|simulazione]], al [[project-based-learning|project-based learning]] e al [[computational-thinking|pensiero computazionale]].

## Idee sbagliate comuni

**"L'apprendimento basato su giochi supportato dall'IA ha una base di evidenze solida."** La sintesi dietro l'affermazione è ampia e sottile allo stesso tempo. Una **revisione sistematica di 55 studi** trova effetti positivi su conoscenza, motivazione intrinseca e coinvolgimento affettivo — ma solo **4 studi (7%) superavano la sua soglia di alta qualità**. Un effetto positivo aggregato tratto da un corpus in cui il 93% degli studi sta sotto l'asticella di qualità della revisione stessa è un'ipotesi con una letteratura attaccata, non un risultato su cui progettare.

**"Gli effetti positivi su motivazione e conoscenza si rafforzano a vicenda."** Sono misurati separatamente e, nella letteratura più ampia, hanno calendari separati: [[student-engagement|coinvolgimento e rendimento]] si muovono su tempistiche diverse, quindi un gioco che alza la motivazione intrinseca ha dimostrato un esito. Trattare il risultato motivazionale come conferma di quello cognitivo gonfia un risultato a due parti in uno più forte di quanto il disegno sostenga.

**"Se un gioco coinvolge gli studenti, l'apprendimento segue al divertimento."** Il divertimento è il meccanismo di consegna per la ripetizione che un gioco rende tollerabile, non il meccanismo dell'apprendimento. Un gioco che aggiunge coinvolgimento senza aggiungere pratica produttiva ha aggiunto la parte che non è mai stata scarsa.

## Implicazioni per la pratica

**Per i docenti**

- Chiediti che cosa il gioco fa ripetere agli studenti, non se gli studenti si divertono. La ripetizione dell'operazione giusta è il meccanismo; il divertimento è ciò che rende la ripetizione tollerabile.
- Tratta esiti motivazionali e cognitivi come affermazioni separate, e non lasciare che un aumento della motivazione intrinseca venga riportato come evidenza di apprendimento.
- Verifica la qualità rispetto all'asticella della revisione prima di adottare un titolo sulla base di una sintesi positiva: solo il 7% degli studi la superava.

**Per chi sviluppa**

- Strumenta gli esiti di apprendimento separatamente da coinvolgimento e affetto, e pubblica entrambi.
- Costruisci prima la pratica produttiva e poi lo strato di gioco; uno strato di gioco sopra una pratica debole ha automatizzato la parte che non è mai stata scarsa.

**Per chi fa ricerca**

- Alza la qualità progettuale del campo anziché il suo volume; un tasso del 7% di studi di alta qualità è il vincolo che limita ciò che se ne può concludere.

- **Il feedback conversazionale in una simulazione alza il carico germano senza abbassare quello estraneo.** In un gioco di simulazione aziendale di cinque settimane con **234 studenti**, gli utenti abituali di un chatbot di feedback basato su GPT-4o riportavano un **carico cognitivo germano significativamente più alto** rispetto agli utenti con accesso che non lo usavano (β = −,468, p < ,001) e rispetto al controllo con feedback statico (β = −,253, p = ,028) — mentre **il carico estraneo non mostrava alcun effetto** in nessuna delle due specificazioni (F(1, 219) = 0,499, p = ,481). Entrambi i carichi **sono calati nelle cinque settimane** (estraneo β = −,388, p < ,001), un effetto di novità misurato sul carico cognitivo anziché sul coinvolgimento ([[wenzel-conversational-ai-feedback-cognitive-load-game-2026|Wenzel, Geiger e Liening, 2026]]). Il punto progettuale è che il feedback portava personalizzazione, segnalazione, segmentazione e struttura di feed-forward su 19 indicatori concreti — la superficie del chatbot da sola non è il trattamento.

## Concetti collegati
- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — Ombrello: pedagogie e strategie didattiche nell'istruzione sull'IA
- [[virtual-and-augmented-reality]] — la pratica immersiva e gamificata si sovrappone nella progettazione e nelle evidenze

## Articoli collegati
- [[karampa-students-game-designers-ai-literacy-2026]] — Studenti di primaria progettano un escape board game; l'alfabetizzazione all'IA cresce in un laboratorio di e-course
- [[ai-game-based-learning-systematic-review-2026]] — Revisione sistematica di 55 studi sull'apprendimento basato sul gioco supportato dall'IA: esiti positivi, una base di evidenze sottile

- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — Generative AI, Motivation, and Engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — NASA-TLX workload across gamified/AI conditions
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS motivation and AI-supported gamification
