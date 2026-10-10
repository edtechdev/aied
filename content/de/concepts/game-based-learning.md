---
title: Spielbasiertes Lernen
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Spielbasiertes Lernen (GBL)** — der Einsatz von Spielen selbst (digital oder physisch) als Medium und Kontext des Lernens, wobei die Mechaniken, Herausforderungen und Progression des Spiels die Bildungsinhalte tragen. Lernende lernen *durch* das Spielen. Verwandt damit legt **Gamifizierung** Spieldesign-Elemente (Punkte, Abzeichen, Stufen, Bestenlisten) auf Nicht-Spiel-Lernaktivitäten, ohne sie in vollständige Spiele zu verwandeln. In der KI- und [[educational-robotics|Robotik]]bildung werden beide Ansätze genutzt, um technische Inhalte ansprechend und motivierend zu machen.

## Fragen zum Nachdenken

- Spielbasiertes Lernen nutzt das Spiel selbst als Medium des Lernens —, Sie lernen *durch* das Spielen. Gamifizierung legt bloß Punkte, Abzeichen und Stufen auf eine Nicht-Spiel-Aktivität. Wie verschieden, denken Sie, sind diese beiden in ihrer Wirkung auf echtes Lernen gegenüber auf kurzfristiges Engagement?
- Ein vergleichender Review fand spielbasiertes Lernen verbreiteter in informellen Umgebungen, während Gamifizierung formelle Klassenzimmer dominierte und projektbasiertes Lernen begünstigte. Warum, denken Sie, fand jeder Ansatz ein anderes Zuhause —, und was sagt uns das darüber, wo jeder am besten wirkt?
- Gamifizierung gründet in der Selbstbestimmungstheorie —, [[agency|Autonomie]], Kompetenz, Verbundenheit. Wenn Motivation darin besteht, jene Bedürfnisse zu befriedigen, warum könnte ein Punkte-und-Abzeichen-System abhängig davon gelingen oder scheitern, wie es wahrgenommenen Aufwand und Aufmerksamkeit formt?
- [[research-methods-aied|Forschung]] legt nahe, dass der motivationale Nutzen spielartiger und KI-unterstützter Designs davon abhängt, wie sie wahrgenommene Arbeitslast und Aufmerksamkeit formen, nicht von Gamifizierung allein. Wann haben Sie gesehen, wie ein Spiel oder Abzeichen Engagement steigerten, ohne das Lernen tatsächlich zu verbessern —, oder umgekehrt?

## Einleitung

GBL gründet in [[motivation|Motivation]]-, [[student-engagement|Studierendenengagement]]- und [[active-learning|Aktivlernen]]-Theorien: Spiele bieten intrinsische Motivation, unmittelbares Feedback und authentische Problemkontexte. Es überschneidet sich mit [[simulation]], [[project-based-learning]] und [[educational-robotics]]. GBL ist besonders relevant für [[educational-robotics]], [[computational-thinking]] und [[cs-education]], wo Spiele abstrakte technische Konzepte konkret und unterhaltsam machen können.

### Wie GBL in der Forschung der Wissensdatenbank erscheint

- **Robotikbildung:** [[game-based-gamified-robotics-education-review-2026|Ein vergleichender systematischer Review]] von spielbasiertem Lernen und Gamifizierung in der Robotikbildung fand GBL verbreiteter in informellen Umgebungen, während Gamifizierung formelle Klassenzimmer dominierte und [[project-based-learning|projektbasiertes Lernen]] begünstigte.
- **Robotervermittelte Spiele:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] ist ein robotervermitteltes Rollenspiel zur Anti-Mobbing-Intervention, und [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] nutzt interaktives [[storytelling-in-education|digitales Storytelling]], um Motivation zu steigern.
- **KI-[[conversational-ai|Konversationsagenten]] in Simulationsspielen:** Wenzel, Geiger, and Liening (2026) leiten den CAIS-GBL-Rahmen ab —, vier Gestaltungsprinzipien und fünfzehn Gestaltungsmerkmale für KI-Konversationsagenten in digitalem spielbasiertem Lernen —, aus theoriegetriebenen Meta-Anforderungen, die kognitives, motivationales, [[affective-computing|affektives]] und [[sociocultural-learning|soziokulturelles]] Engagement umspannen, mit einer [[equity-in-ai-education|Gerechtigkeit]]-durch-Gestaltung-Haltung. Ihr instanziierter Agent (Lara) in einem Unternehmenssimulationsspiel wurde positiv für kognitive und [[community-of-inquiry|soziale Präsenz]] und [[self-regulated-learning|Selbstregulations]]unterstützung aufgenommen und adressierte die verbreitete Lücke begrenzten [[formative-assessment|formativen]] Feedbacks und strukturierter Reflexion in Simulationsspielen.


- **KI-GBL-Wirksamkeit:** Ein systematischer Review von 55 Studien zu KI-unterstütztem spielbasiertem Lernen findet positive Effekte auf Wissen, intrinsische Motivation und affektives Engagement, doch nur 4 Studien (7%) erreichten seine Hochqualitäts-Schwelle und nur 4 (7%) waren [[rct|RCTs]] ([[ai-game-based-learning-systematic-review-2026|Kaşarcı & Yurt, 2026]]). Wirksamkeit hing daran, den KI-Mechanismus mit einer benannten [[learning-theories|Lerntheorie]] auszurichten.

### Gamifizierung

**Gamifizierung** ist die Anwendung von Spieldesign-Elementen (Punkte, Abzeichen, Stufen, Bestenlisten, Herausforderungen, Fortschrittsbalken) auf Nicht-Spiel-Kontexte, um Nutzende zu motivieren und zu engagieren. Anders als spielbasiertes Lernen —, wo Lernen *durch* ein Spiel stattfindet —, legt Gamifizierung Spielmechaniken auf eine bestehende Lernaktivität, ohne sie in ein vollständiges Spiel zu verwandeln. Sie wird in der Bildung genutzt, um Motivation, [[student-engagement|Studierendenengagement]] und Persistenz zu steigern, und ist in formellen Klassenzimmern weit verbreitet.

Gamifizierung gründet in Motivationstheorie, besonders [[self-determination-theory|Selbstbestimmungstheorie]] (Autonomie, Kompetenz und Verbundenheit stützend) und Rahmen des Verhaltenswandels. Sie hat besondere Synergie mit [[project-based-learning]] in angewandten Domänen wie Robotik gezeigt. In der Forschung der Wissensdatenbank:

- **Robotikbildung:** Der vergleichende Review fand, dass Gamifizierung formelle Klassenzimmer in der Robotikbildung dominierte (p < .001) und [[project-based-learning|projektbasiertes Lernen]] stark begünstigte (p = .009), während spielbasiertes Lernen in informellen Umgebungen verbreiteter war.
- **Engagement und Motivation:** Gamifizierung wird über die Wissensdatenbank genutzt, um Engagement und Motivation von Lernenden in KI-, [[cs-education|Programmier-]] und [[stem-education|STEM]]-Lernkontexten zu steigern. [[genai-motivation-engagement-2026|Forschung zu generativer KI, Motivation und Engagement]] untersucht, wie sich spielartige Elemente mit KI verbinden, um das Interesse Lernender aufrechtzuerhalten. Zwei Studien von 2026 erweitern dies, indem sie gamifizierte und KI-unterstützte Bedingungen mit traditionellem Unterricht vergleichen: [[nasa-tlx-workload-gamified-ai-2026|eine NASA-TLX-Studie]] maß wahrgenommene Arbeitslast über traditionelle, gamifizierte und KI-unterstützte Lernbedingungen, und [[arcs-motivational-ergonomics-gamified-ai-2026|eine ARCS-Studie]] untersuchte motivationale „Ergonomie“ in gamifiziertem und KI-unterstütztem Lernen mit Implikationen für [[professional-training|Arbeitsplatz-Weiterbildung]]. Zusammen verdeutlichen sie, dass der motivationale Nutzen spielartiger und KI-unterstützter Designs davon abhängt, wie sie [[motivation|wahrgenommenen Aufwand]], Arbeitslast und Aufmerksamkeit formen (z. B. ARCS-Aufmerksamkeits-/Relevanzdimensionen), nicht von Gamifizierung allein.

GBL und Gamifizierung verbinden sich zusammen mit [[educational-robotics]], [[student-engagement]], [[motivation]], [[self-determination-theory]], [[active-learning]], [[simulation]], [[project-based-learning]] und [[computational-thinking]].

## Verbundene Konzepte
- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education
- [[virtual-and-augmented-reality]] — immersive and gamified practice overlap in design and evidence

## Verbundene Artikel
- [[ai-game-based-learning-systematic-review-2026]] — Systematic review of 55 AI-supported game-based learning studies: positive outcomes, a thin evidence base

- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — Generative AI, Motivation, and Engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — NASA-TLX workload across gamified/AI conditions
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS motivation and AI-supported gamification
