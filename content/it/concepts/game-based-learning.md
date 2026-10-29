---
title: Apprendimento basato sul gioco
created: "2026-10-14T21:55:00-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
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

### Gamification

La **gamification** è l'applicazione di elementi di progettazione del gioco (punti, badge, livelli, classifiche, sfide, barre di avanzamento) a contesti non ludici per motivare e coinvolgere gli utenti. A differenza dell'apprendimento basato sul gioco — dove l'apprendimento avviene *attraverso* un gioco — la gamification sovrappone meccaniche di gioco a un'attività di apprendimento esistente, senza trasformarla in un gioco completo. È usata nell'istruzione per aumentare la motivazione, lo [[student-engagement|engagement degli studenti]] e la persistenza, ed è ampiamente applicata nei contesti delle aule formali.

La gamification è fondata sulla teoria motivazionale, in particolare sulla [[self-determination-theory|teoria dell'autodeterminazione]] (a supporto di autonomia, competenza e relazione) e sui framework di cambiamento comportamentale. Ha mostrato una particolare sinergia con il [[project-based-learning|project-based learning]] nei domini applicati come la robotica. Nella ricerca della base di conoscenza:

- **Istruzione in robotica:** la revisione comparativa ha rilevato che la gamification dominava nelle aule formali nell'istruzione in robotica (p < .001) e privilegiava fortemente il [[project-based-learning|project-based learning]] (p = .009), mentre l'apprendimento basato sul gioco era più comune nei contesti informali.
- **Engagement e motivazione:** la gamification è usata in tutta la base di conoscenza per aumentare l'engagement e la motivazione degli studenti nei contesti di apprendimento dell'IA, della [[cs-education|programmazione]] e delle [[stem-education|discipline STEM]]. La ricerca su [[genai-motivation-engagement-2026|IA generativa, motivazione e engagement]] esamina come gli elementi ludici si combinino con l'IA per sostenere l'interesse degli studenti. Due studi del 2026 estendono questo confrontando condizioni gamificate e supportate dall'IA con l'istruzione tradizionale: [[nasa-tlx-workload-gamified-ai-2026|uno studio NASA-TLX]] ha misurato il carico di lavoro percepito in condizioni di apprendimento tradizionali, gamificate e supportate dall'IA, e [[arcs-motivational-ergonomics-gamified-ai-2026|uno studio ARCS]] ha esaminato l'"ergonomia" motivazionale nell'apprendimento gamificato e supportato dall'IA, con implicazioni per la [[professional-training|formazione sul posto di lavoro]]. Insieme chiariscono che il beneficio motivazionale delle progettazioni ludiche e supportate dall'IA dipende da come esse modellano [[motivation|lo sforzo percepito]], il carico di lavoro e l'attenzione (ad es. le dimensioni attenzione/rilevanza dell'ARCS), non dalla gamification di per sé.

Il GBL e la gamification si collegano insieme alla [[educational-robotics|robotica educativa]], allo [[student-engagement|engagement degli studenti]], alla [[motivation|motivazione]], alla [[self-determination-theory|teoria dell'autodeterminazione]], all'[[active-learning|apprendimento attivo]], alla [[simulation|simulazione]], al [[project-based-learning|project-based learning]] e al [[computational-thinking|pensiero computazionale]].

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
- [[ai-game-based-learning-systematic-review-2026]] — Revisione sistematica di 55 studi sull'apprendimento basato sul gioco supportato dall'IA: esiti positivi, una base di evidenze sottile

- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — Generative AI, Motivation, and Engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — NASA-TLX workload across gamified/AI conditions
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS motivation and AI-supported gamification
