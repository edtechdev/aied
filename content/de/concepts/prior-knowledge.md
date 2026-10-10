---
title: Vorwissen
created: "2026-08-22T01:20:00-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
foundations: [learning-design]
pedagogy: [constructivist, learning-theories, metacognition, prior-knowledge, scaffolding]
technology: [personalized-learning, student-modeling]
confidence: high
translation_of: concepts/prior-knowledge
source_updated: "2026-10-01T18:49:55-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Vorwissen** — das existierende Wissen, die Fähigkeiten, Überzeugungen und mentalen Modelle, die eine lernende Person in eine neue Lernaufgabe mitbringt. Es ist der einzelne stärkste Prädiktor nachfolgenden Lernens: neue Informationen werden durch —, und integriert mit — dem interpretiert, was die lernende Person bereits weiß, sodass Instruktion, die Vorwissen aktiviert und darauf aufbaut, stärkeres, dauerhafteres Lernen erzeugt als Instruktion, die jede lernende Person als unbeschriebenes Blatt behandelt. In [[ai-education|KI in der Bildung]] ist Vorwissen zentral für [[student-modeling|Lernendenmodellierung]] (die Anpassung von [[personalized-learning|Instruktion]] an den aktuellen Zustand der lernenden Person), für das [[constructivist|konstruktivistische]] Prinzip, dass Wissen aktiv auf existierenden mentalen Modellen konstruiert wird, und für das Risiko, dass KI-Werkzeuge, die Inhalte vorab abrufen und an die Oberfläche bringen, die [[retrieval-spacing-interleaving|Abrufübung]] umgehen, die Vorwissen aktiviert.

## Fragen zum Nachdenken

- Was haben Sie tief gelernt, und was fiel Ihnen schwer zu lernen? Wie viel des Unterschiedes kam auf das, was Sie beim Start bereits wussten?
- Vorwissen zu haben genügt nicht —, es muss aktiv abgerufen und verbunden werden. Wann hat das Abrufen dessen, was Sie bereits wussten (oder das Scheitern daran), verändert, wie gut Sie etwas Neues gelernt haben?
- Die Seite sagt, Vorwissen könne *interferieren*, wenn es falsch ist (ein Missverständnis). Fällt Ihnen eine Überzeugung ein, die Sie hielten und die es erschwerte, neue, korrekte Information zu lernen?
- Generative KI, die Antworten vorab abruft, kann die Abrufübung umgehen, die Vorwissen aktiviert. Wie könnte ein Werkzeug, das Ihnen helfen soll zu lernen, Sie tatsächlich davon abhalten, abzurufen, was Sie wissen?
- Wenn eine KI Ihren Vorwissensstand schätzen muss, um zu personalisieren, was passiert, wenn diese Schätzung falsch ist? Wie zuversichtlich sind Sie, dass ein System akkurat wissen könnte, was Sie bereits wissen?
- Wie unterscheidet sich „Vorwissen aktivieren“ vom einfachen Stellen einer Frage an Studierende vor dem [[teacher-role|Lehren]]? Was würde diese Aktivierung echt vertiefen lassen, dass das Lernen danach vertieft?

## Einführung

Vorwissensaktivierung ist einer der robustesten Befunde in den [[learning-sciences|Lernwissenschaften]]: Lernende absorbieren neues Material nicht im Vakuum, sondern kartieren es auf existierende Schemata, und die Qualität dieser Kartierung bestimmt Retention und [[transfer-of-learning|Transfer]]. Das Konzept untermauert Ausubels Advance Organizers, die Aktivierung von Vorwissen vor neuer Instruktion, Abrufübung als Form der Aktivierung und Stärkung dessen, was bekannt ist, und diagnostisches [[assessment|Assessment]] dessen, was Lernende bereits wissen. Im KI-Zeitalter hat Vorwissen neue Dringlichkeit angenommen, weil [[generative-ai|generative KI]] entweder Aktivierung *stützen* kann ([[prompt-engineering|Prompten]] von Lernenden, abzurufen und zu verbinden, was sie wissen) oder sie vollständig *umgehen* kann (indem sie sofort eine Antwort oder vorab abgerufene Inhalte liefert, die die lernende Person nie abrufen oder integrieren musste).

## Die Rolle von Vorwissen

- **Es ist der stärkste Prädiktor von Lernen.** Jahrzehnte von [[research-methods-aied|Forschung]] zeigen, dass das, was eine lernende Person bereits weiß, stärker mit [[learning-gains|Lernergebnissen]] korreliert als fast jeder andere Faktor, weil neue Informationen relativ zu existierenden mentalen Modellen enkodiert werden. KI-Systeme, die sich an den Vorwissensstand jeder lernenden Person anpassen, versprechen daher besondere Effizienz und [[transfer-of-learning|Transfer]].
- **Aktivierung zählt, nicht nur Besitz.** Vorwissen zu haben genügt nicht —, es muss aktiv abgerufen und mit dem neuen Material verbunden werden. Das ist, warum „Vorwissen aktivieren“ ein standardmäßiger [[pedagogy|instruktionaler]] Zug ist, und warum Abrufübung (abrufen, was Sie wissen, bevor Sie es ergänzen) Lernen über bloße Wiederaussetzung hinaus verbessert.
- **Es sagt nicht immer vorher, wer die Arbeit tut, die Lernen treibt.** In einer fünftägigen Lernen-durch-Lehren-Studie mit 23 Mittelstufentutorinnen und -tutoren sagten vorherige Testergebnisse nicht den Anteil wissensaufbauender Antworten vorher, die eine Tutorin oder ein Tutor produzierte, und Tutorinnen und Tutoren mit geringem Vorwissen, die Wissen aufbauten, endeten statistisch auf Niveau mit Peers mit hohem Vorwissen ([[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]).
- **Es prägt Interpretation.** Lernende interpretieren neue Informationen durch das, was sie bereits glauben. Wenn diese Überzeugungen falsch sind ([[misconceptions|Missverständnisse]]), kann Vorwissen mit Lernen *interferieren*, weshalb Instruktion Missverständnisse aufdecken und adressieren muss, statt einen neutralen Startpunkt anzunehmen.
- **Es treibt Lernendenmodellierung.** Um zu personalisieren, muss ein KI-System den Vorwissensstand der lernenden Person schätzen —, die Basis von [[knowledge-tracing|Knowledge Tracing]], Lernendenmodellierung und adaptivem [[scaffolding|Gerüstbau]]. Die Qualität dieser Schätzungen bestimmt, ob Anpassung echt hilfreich oder irreführend ist.
- **Wissensinhalt bestimmt, welcher Prozess durch Übung rekrutiert wird.** Ob Lernen an Gedächtnis oder an Induktion hängt, wird durch die Vorwissensstruktur des Ziels gesetzt: [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] folgen dem [[learning-theories|KLI]]-Rahmenwerk in der Unterscheidung von Wissenskomponenten mit konstanten Bedingungen und Reaktionen (Fakten, erworben durch Gedächtnis und Abrufübung) von jenen mit variablen Bedingungen und Reaktionen (Fähigkeiten, erworben durch Induktion und Generalisierung auf neue Inputs) —, weshalb sich die optimale Mischung aus ausgearbeiteten Beispielen und Übung für Fakteninhalt vs. Fähigkeitsinhalt unterscheidet.

## Vorwissen im KI-Zeitalter

Generative KI hat Vorwissen zu einer zentralen Designbetrachtung statt zu einer Hintergrundvariable gemacht:

- **Das Umgehungsrisiko.** [[agentic-ai-pedagogical-best-practice-2026|Proaktive agentische KI]], die Inhalte vorab abruft und an die Oberfläche bringt, kann die Abrufübung umgehen, die Vorwissen aktiviert —, die lernende Person muss nie abrufen oder integrieren, was sie weiß, bevor sie eine Antwort erhält. Das ist eines der sechs pädagogischen Risiken, die im Best-Practice-Rahmenwerk für [[agentic-ai|agentische]] Bildung identifiziert sind, und es verbindet sich direkt mit [[cognitive-offloading|Überabhängigkeit]] und dem [[desirable-difficulties|Prinzip wünschenswerter Schwierigkeiten]], dass aufwändige Verarbeitung dauerhaftes Lernen stützt.
- **Vorwissen prägt das Muster der Auslagerung, nicht nur Ergebnisse.** In einer Synthese-Schreibstudie verfasste der hohes-Wissen-minimale-Auslagerung-Cluster 80% seines Aufsatzes gegen 2% für den stärksten Auslagerungscluster (Mittel 25.1 Prompts), sodass Promptvolumen Vorwissen verfolgte statt Anstrengung ([[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]]).
- **Die Nutzenlücke akkumuliert.** Weil produktive KI-Nutzung davon abhängt, was eine lernende Person bereits weiß, nutzen Studierende mit stärkerem Vorwissen sie besser, während Novizen am wahrscheinlichsten sie als Ersatz behandeln —, ein distributionales Risiko, das Leistungslücken verbreitern kann, selbst wenn Zugang gleich ist ([[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]).
- **Priming und Aktivierung als Design.** [[genai-mindtool-generative-learning|GenAI-Mindtool-Ansätze]] „primen die Lernaufgabe“ bewusst, indem sie Vorwissen und Neugier durch Promptfragen, KI-generierte Visuals und Analogien aktivieren (z. B. „Was wissen Sie bereits über Ökosysteme?“), bevor neue Inhalte eingeführt werden —, wobei sie den Abruf-und-Integrations-Pfad modellieren statt den Antwort-liefern-Pfad.
- **Lernendenmodellierung und Gedächtnis.** KI-Systeme modellieren zunehmend den Vorwissensstand und das longitudinale Gedächtnis von Lernenden (z. B. Einbau von Vorwissensstand und Vergessenskurven in Tutoringsgedächtnis), was Spaced Repetition und adaptive Review ermöglicht, die auf dem aufbauen, was jede lernende Person bereits weiß.([[nie-personavlm-long-term-personalization-2026]])
- **Ein Personalisierungs-Adaptionshebel.** Weil Lernende in Vorwissen breit divergieren, muss Anpassung auf das Individuum abgestimmt werden —, ein Kernargument für [[personalized-learning|personalisiertes Lernen]] und adaptiven [[scaffolding|Gerüstbau]], die Lernende auf ihrem tatsächlichen aktuellen Stand treffen statt auf einer Klassenmittelannahme.

## Folgerungen für die Gestaltung von KI in der Bildung

1. **Aktivieren, bevor Sie liefern.** KI-Interaktionen so gestalten, dass sie Lernende prompten, abzurufen und zu artikulieren, was sie bereits wissen, bevor neue Inhalte oder Antworten geliefert werden —, Abrufübung bewahren statt sie zu umgehen.
2. **Den Vorwissensstand der lernenden Person modellieren.** Lernendenmodellierung und Anpassung auf geschätztes Vorwissen (und seine Missverständnisse) bauen, statt auf angenommener Gleichförmigkeit, um Personalisierung echt responsiv zu machen.
3. **Missverständnisse aufdecken und adressieren.** Wenn Vorwissen inkorrekt ist, wird es interferieren; Instruktion sollte Missverständnisse herausfordern und korrigieren, statt neue Inhalte auf fehlerhafte Fundamente zu legen.
4. **Den Reibungstrade-off abwägen.** Vorwissen zu aktivieren fügt wünschenswerte Schwierigkeit (Abruf, Integration) hinzu, die die reibungsentfernenden Defaults von KI tendenziell löschen —, eine Spannung, die bewusst zu managen ist, statt sie Automatisierung per Default auflösen zu lassen.

## Verbundene Konzepte

- [[learners]] — Lernende: das Dach für die lernendenseitigen Konzepte
- [[constructivist]]
- [[personalized-learning]]
- [[student-modeling]]
- [[misconceptions]]
- [[icap-framework]]
- [[knowledge-tracing]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[transfer-of-learning]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]
- [[learning-theories]]
- [[productive-failure]] — Productive Failure
- [[retrieval-spacing-interleaving]] — wie das, was eine lernende Person bereits weiß, bestimmt, was Abrufübung tun kann

## Verbundene Artikel

- [[agentic-ai-pedagogical-best-practice-2026]] — The tension between automation and learning (prior knowledge activation risk)
- [[genai-mindtool-generative-learning]] — GenAI as a mindtool: priming and activating prior knowledge
- [[nie-personavlm-long-term-personalization-2026]] — LLM student modeling and memory
- [[lodge-loble-cognitive-offloading-2026]] — Lodge & Loble on cognitive offloading
- [[cognitive-offloading-llm-synthesis-writing]] — Cognitive offloading in LLM synthesis writing
- [[bridging-instructional-design-framework-math]] — An instructional-design framework for math
- [[knowledge-building-tutor-learning-2026]] — knowledge-building rather than prior knowledge predicts tutor learning, and low-prior tutors who build knowledge catch up
- [[rachatasumrit-example-problem-ratio-2026]]
