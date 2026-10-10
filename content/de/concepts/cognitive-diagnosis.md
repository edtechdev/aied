---
title: Kognitive Diagnose
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Kognitive Diagnose** — das Schließen auf den latenten Wissenszustand einer lernenden Person — die konkreten Konzepte, Fähigkeiten und Missverständnisse, die sie hat oder nicht hat — aus ihren Antworten oder ihrem Verhalten. Sie ist das assessmentseitige Pendant zu [[knowledge-tracing|Knowledge Tracing]], fokussiert darauf zu charakterisieren, *was* eine Person weiß, statt nur ihre nächste Leistung vorherzusagen.

## Fragen zum Nachdenken

- Kognitive Diagnose schließt auf den latenten Wissenszustand einer lernenden Person — die konkreten Konzepte, Fähigkeiten und Missverständnisse, die sie hat oder nicht hat — aus ihren Antworten, statt nur ihre nächste Note vorherzusagen. Welchen Unterschied erwarten Sie vor der Lektüre zwischen „die Note einer Person vorhersagen“ und „diagnostizieren, was sie tatsächlich nicht versteht“?
- Eine zentrale Idee ist die „Falle der richtigen Antwort“ — wo eine richtige Antwort fehlerhaftes Denken verbirgt. Waren Sie je sicher, dass eine Person etwas verstanden hatte, weil sie es richtig beantwortete, und entdeckten dann ein Missverständnis darunter? Wie könnte eine Diagnose das sichtbar machen, wo eine Note es nicht könnte?
- Die Seite unterscheidet kognitive Diagnose (eine statische, feinkörnige Momentaufnahme dessen, was eine lernende Person gegenwärtig hält) von Knowledge Tracing (die zeitliche Dynamik von Beherrschung über die Zeit). Warum würde ein intelligenter Tutor beides brauchen — um zu wissen, was falsch ist, und um zu wissen, was als Nächstes zu lehren ist?
- Ein Gestaltungsprinzip hier ist, Diagnose von Feedback zu trennen: LLM-Tutoren bestätigen richtige Schritte, weisen aber gültiges Denken zu häufig zurück und validieren Fehler zu häufig, und genaue Diagnose liefert nicht verlässlich umsetzbares Feedback. Warum könnte zu wissen, was falsch ist, dennoch scheitern, einen hilfreichen nächsten Schritt zu erzeugen?
- Diagnose in der LLM-Ära reicht von Multiple-Choice zu offenen, handgeschriebenen und konversationellen Arbeiten. Was könnte schiefgehen, wenn eine KI ein Missverständnis aus einer Arbeit diagnostiziert, die sie nicht vollständig versteht — und wie würden Sie prüfen, dass die Diagnose selbst vertrauenswürdig ist?

## Einführung

Während Knowledge Tracing typischerweise einen skalaren Beherrschungswert über die Zeit schätzt, erzeugt kognitive Diagnose ein granulareres Profil: welche Wissenskomponenten beherrscht sind, welche fragil sind und welche Missverständnisse vorliegen. Dieses Profil ist das Substrat für [[personalized-learning|personalisiertes Lernen]], [[intelligent-tutoring|intelligentes Tutoring]] und [[adaptive-learning|adaptives Lernen]].

### Wie kognitive Diagnose funktioniert

- **Diagnostische Modelle:** psychometrische Modelle (häufig unter [[item-response-theory|Item-Response-Theorie]] und [[educational-measurement|Bildungsmessung]]) schließen aus Mustern richtiger und falscher Antworten auf latente Fähigkeitszustände, manchmal über kognitive Diagnosemodelle, die Items mehreren Wissenskomponenten zuordnen.
- **Automatische Modellsuche:** weil kein einzelnes diagnostisches Modell zu jeder lernenden Person passt, erzeugen [[machine-learning|AutoML]]-getriebene Ansätze (etwa personalisierte neuronale Suche kognitiver Architekturen) diagnostische Modelle für heterogene Profile von Lernenden — indem sie [[multimodal|multimodale]] Bildungsdaten integrieren, um dynamische Analyse von Lernprozessen und kognitive Diagnose pro lernender Person zu ermöglichen, statt sich auf statische [[summative-assessment|Prüfungs]]-Ergebnisse und einfache statistische Indikatoren zu stützen ([[personalized-neural-cognitive-architecture-search-2026]]).
- **Antwortdaten:** Diagnose schöpft aus Antworten auf Assessments, Hinweise, [[help-seeking|Hilfesuche]] und Bearbeitungszeit — reichere Signale als rohe Noten.
- **LLM-basierte Diagnose:** neuere Ansätze nutzen [[llm|große Sprachmodelle]], um aus offenen oder handgeschriebenen Arbeiten zu diagnostizieren und die konkreten [[misconceptions|Missverständnisse]] hinter einem Fehler zu identifizieren (etwa die „Falle der richtigen Antwort“, wo eine richtige Antwort fehlerhaftes Denken verbirgt). Zwei Ergebnisse von 2026 begrenzen, wie weit diese Diagnose reicht. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] überwachte diagnostisches Schließen als eine von vier Fähigkeiten in einer offenen 4B/9B/27B-Familie, und Wissenszustandsdiagnose blieb ihre schwächste gemessene Fähigkeit — 54.04% bei 27B und 53.55% bei 9B, nahe genug, dass dreimal so viele Parameter die Lücke nicht schlossen —, während [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]]s LLM-Bewertender bei gepoolten Antworten mit wahrer Beherrschung bei r = 0.68 korrelierte, innerhalb der schwächsten Fähigkeitsstufe aber nur bei r ≈ 0.15 (r ≈ 0.48 mittel, 0.41 stark), sodass diagnostische Zuverlässigkeit vom Fähigkeitsniveau der lernenden Person genauso stark abhängt wie vom Modell.
- **Häufige Fehler auf Kohortenebene diagnostizieren, nicht eine Antwort auf einmal.** [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] kehren die übliche Richtung um: statt den Fehler einer einzelnen lernenden Person zu diagnostizieren, schlägt ein [[llm|LLM]] Kandidaten-Transformationen zur Fehlerbehebung vor, die falsche Formalisierungen über einen gesamten Bildungsdatensatz hinweg auf richtige abbilden, und jeder Kandidat wird algorithmisch validiert, bevor er behalten wird. An 6.106 Paaren richtiger und falscher aussagenlogischer Formalisierungen entdeckte der Arbeitsablauf 248 Cluster von Transformationen, die 5.156 Paare erklärten (84.44%), gegenüber 4.370 (71.57%) für die handverlesenen Fehler des bisherigen Stands der Technik, und er gewann die Fehler wieder, die eine Domänenexpertin zuvor in der Literatur identifiziert hatte. Clustering ordnet Kandidaten in Einzel-Transformation-, Äquivalenz-Transformations- und hierarchische Gruppen, und der resultierende Korrelationsgraph kann für Lehrende visualisiert werden; dieselbe Pipeline übertrug sich auf Modallogik und reguläre Ausdrücke, wo allein eine Disjunction-für-Conjunction-Transformation 98.80% ihres 334-Paar-Clusters abdeckte. Es ist ein Weg zum Inventar der Missverständnisse, das ein diagnostisches Modell braucht, bevor es angepasst werden kann.

- **Die Wiederherstellung richtiger Lösungen, nicht die Fehlersimulation, ist der Engpass.** Modelle konstruierten eine Lösung in 95.2% der Distraktor-Abläufe und simulierten ein konkretes Eedi-Missverständnis mit 0.92 Genauigkeit, dennoch erhöhte das Liefern der richtigen Antwort noch die Übereinstimmung mit menschlichen Distraktoren (0.52 → 0.56) — das Scheitern sitzt vorgelagert, bei der Wiederherstellung der Lösung ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **Diagnose auf Outcome-Ebene in OBE-Curricula:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] diagnostizieren, welche Kursoutcomes eine lernende Person in Outcome-Based Education erreicht hat, indem sie Outcomes als Wissenskonzepte behandeln, Konzeptbeziehungen über expertenvalidierte OBE-Affinitäts-Abbildungen zwischen Kurs- und Programmoutcomes liefern (eine explizite Alternative zu implizit gelernten Aufmerksamkeits- oder Graphbeziehungen) und ein speichergestütztes Modul nutzen, um zu schätzen, wie das Erreichen eines Outcomes andere beeinflusst — und übertreffen damit die Baselines DKT, DKVMN, EKT und SimpleKT (89.81% AUC) an Live-Daten eines Ingenieurprogramms.
- **Aus Instrumenten diagnostizieren, die für etwas anderes gebaut wurden.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] zeigen, dass ein CD-Modell objektstufige Information aus Items extrahieren kann, die nie für Diagnose geschrieben wurden. Sie bildeten FCI-, FMCE- und EMCS-Items auf 14 feinkörnige Lernziele in der einführenden Mechanik ab und passten DINA an 24.394 Posttest-Antworten aus 807 Kursen an, wobei sie gute Passung für zwei der drei Instrumente fanden (FCI RMSEA² = 0.033; EMCS = 0.022) und Klassifikationsgenauigkeit auf oder über dem Benchmark für formative Prüfungen mit geringem Einsatz bei 19 der 22 Objektiv-Assessment-Kombinationen. Die Attributstruktur, nicht die Itemqualität, war die bindende Einschränkung: expertenseitige Kodierung überstand die Modellprüfung fast unversehrt — DINA schlug eine Revision von nur 14% von 754 Item-Objektiv-Kodierungen vor, und die Kodierenden übernahmen 20 davon (2.7%) —, dennoch konnte das Modell drei *konzeptuell verschachtelte* Energieobjektive nicht trennen (Potenzielle Energie 0.675, Energieerhaltung 0.705, Kinetische Energie 0.745), weil je zwei etwa 70% ihrer Items teilten (Jaccard-Überlappung 0.67–0.73), was DINAs Annahme konjunktiver Unabhängigkeit verletzt, während Impulsobjektive im selben Instrument 0.820–0.917 erreichten. Feinere Attribute passten ebenfalls besser statt schlechter: die 14-Objektiv-Struktur verbesserte die Modellpassung gegenüber der früheren Vier-Breitfähigkeiten-Struktur desselben Teams an allen drei Instrumenten. Itemüberlappung, nicht Kodierfehler, begrenzt, wie fein Beherrschung getrennt werden kann.
- **Bayessches DINA für personalisierte Lernpfade:** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng und Huang (2026)]] integrieren ein Bayessches DINA-Modell (trainiert am EdNet-Datensatz, N=5,000) mit Wissensraumtheorie und einem Algorithmus für den kürzesten Förderpfad, um personalisierte Lernpfade zu erzeugen, und prüfen empirisch die vermittelnde Rolle [[cognitive-offloading|kognitiver Last]] über Hidden-Markov-Modell-Zustandsübergänge (validiert an 120 Studierenden) — was sowohl das sparsamkeitsgetriebene Konvergenzproblem traditioneller DINA-Modelle adressiert als auch den ungetesteten psychologischen Mechanismus hinter der Wirksamkeit personalisierter Pfade.
- **Sprachverankerte Diagnose anstelle von ID-Embeddings.** [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] ersetzen diskrete Studierenden-, Aufgaben- und Konzeptidentifikatoren durch LLM-erstellte Konzeptschemata und prozessverankerte Belege und kalibrieren den posterioren Zustand jeder Person aus Antwortdatensätzen. Über drei [[math-education|Mathematik]]-[[online-teaching-and-learning|Plattform]]-Datensätze hinweg erreicht das Framework 83.51% ACC / 85.37% AUC auf XES3G5M und 87.16% ACC auf MOOC, wobei der Zugewinn genau dort konzentriert ist, wo klassische kognitive Diagnosemodelle degradieren: neue Konzepte (+4.60 ACC gegenüber KCD) und fehlende Q-Matrix-Einträge (+4.52). Das Abtragen der strukturierten Belege lässt die MOOC-Genauigkeit von 87.16% auf 78.95% fallen, sodass die Verbesserung von der sprachabgeleiteten Struktur kommt und nicht von der Modellskala. ([[process-grounded-language-cognitive-diagnosis-2026]])

## Warum das wichtig ist

Genaue Diagnose lässt Unterricht auf die tatsächlichen Lücken zielen statt auf eine globale „Fähigkeits“-Note — wodurch [[automated-assessment|automatisiertes Prüfen]] ermöglicht wird, das erklärt, *warum* eine Person Fehler machte, und [[feedback|Feedbackschleifen]], die konkrete [[student-modeling|Wissenszustände]] fördern. Schlechte Diagnose erzeugt das Gegenteil: Unterricht, der auf die falschen Konzepte zielt. Deshalb betont [[psychometrically-aware-ai|psychometrisch bewusste KI]] diagnostische Validität neben Vorhersagegenauigkeit.

### Beziehung zu Knowledge Tracing und intelligentem Tutoring

Kognitive Diagnose sitzt im Herzen der Architektur [[intelligent-tutoring|intelligenten Tutorings]] und ist das assessmentseitige Pendant des [[knowledge-tracing|Knowledge Tracing]]:

- **Diagnose versus Tracing — komplementäre zeitliche Sichten.** [[knowledge-tracing|Knowledge Tracing]] verfolgt die *zeitliche Dynamik* der Beherrschung — es schätzt, wie sich ein skalarer Wissenszustand über Aufgaben hinweg entwickelt, und sagt die nächste Antwort vorher. Kognitive Diagnose erzeugt die *statische, feinkörnige Momentaufnahme* dessen, welche Wissenskomponenten, Fähigkeiten oder Missverständnisse eine lernende Person gegenwärtig hält. Ein Tutor braucht beides: Knowledge Tracing, um zu sequenzieren, was als Nächstes zu lehren ist, kognitive Diagnose, um zu wissen, *was* tatsächlich falsch ist. Auf [[item-response-theory|IRT]]- und [[educational-measurement|messungs]]-basierten diagnostischen Modellen und kognitiven Diagnosemodellen, die Items mehreren Komponenten zuordnen, wird die diagnostische Seite konkret.

- **Diagnose in der LLM-Ära.** [[llm|LLMs]] erweitern Diagnose von Multiple-Choice-Antworten hin zu offenen, handgeschriebenen und konversationellen Arbeiten und identifizieren die konkreten [[misconceptions|Missverständnisse]] hinter einem Fehler (etwa die „Falle der richtigen Antwort“, wo eine richtige Antwort fehlerhaftes Denken verbirgt). [[xie-hillm-cd-2026|HiLLM-CD]] nutzt LLMs für automatische Konzeptbaum-Konstruktion und hierarchische Kompetenzinferenz und verbindet so Diagnose und Tracing. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] treiben dies weiter, indem sie Diagnose über mehrere kommerzielle LLM-APIs mit ε-lokaler Differential Privacy föderieren, und zeigen, dass genaue, datenschutzbewahrende Diagnose machbar ist, ohne dass ein Modell rohe Studierendendaten sieht.
- **Diagnose von Feedback zu trennen ist ein Gestaltungsprinzip.** LLM-Tutoren bestätigen zuverlässig richtige Schritte, weisen aber gültiges Denken zu häufig zurück und validieren Fehler zu häufig — und genaue Diagnose liefert nicht verlässlich umsetzbares [[feedback|Feedback]]. ITS-Design sollte daher eine diagnostische Komponente von der Feedback-/[[scaffolding|Scaffolding]]-Komponente trennen ([[yasir-llm-tutoring-agents-2026]]).

## Verbindungen

Kognitive Diagnose verbindet sich mit [[knowledge-tracing|Knowledge Tracing]], [[student-modeling|Modellierung von Lernenden]], [[educational-measurement|Bildungsmessung]] und [[assessment|Assessment]]. Ihre Einsichten speisen [[intelligent-tutoring|intelligentes Tutoring]] und [[adaptive-learning|adaptives Lernen]], und Arbeit in der LLM-Ära verlinkt sie mit der Identifikation von Missverständnissen im [[intelligent-tutoring|KI-Tutoring]].

## Verbundene Konzepte
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## Verbundene Artikel
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking LLMs for Diagnosing Cognitive Skills from Handwritten Math
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[llm-student-misconception-identification]] — LLM identification of student misconceptions
- [[student-math-competence-clustering]] — Clustering for Modeling Student Mathematical Competence
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Cognitive Agent Compilation for Explicit Problem Solver Modeling
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: diagnosing from simulated learners
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM concept trees + hierarchical proficiency inference
- [[yasir-llm-tutoring-agents-2026]] — Separating diagnosis from feedback in LLM tutors
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-preserving heterogeneous multi-LLM federated diagnosis
- [[llm-common-modeling-mistakes-formalisms-2026]] — Mining common modeling mistakes at scale with LLM-generated, algorithmically validated bug-fixing transformations (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: DINA-based diagnosis of 14 learning objectives from existing physics concept inventories (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — LLM knowledge-concept annotation and calibrated concept-level knowledge states
- [[llm-distractor-generation-student-reasoning-2026]] — misconception-based distractors as a diagnostic item-design task
- [[misconception-acquisition-dynamics-llms-2026]] — where the error enters the solution is the diagnostic bottleneck
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching
