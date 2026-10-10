---
title: Wissensgraph
created: "2026-08-09T16:55:17-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [ai-education, curriculum-design]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
confidence: high
translation_of: concepts/knowledge-graph
source_updated: "2026-10-09T09:25:11-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Wissensgraph** — eine strukturierte Repräsentation von Konzepten und ihren Beziehungen, die genutzt wird, um Fachwissen, Verständnis der Studierenden und Lernabhängigkeiten in Systemen der [[ai-education|KI in der Bildung]] zu modellieren. Wissensgraphen ermöglichen es KI-Systemen, darüber zu schlussfolgern, was Studierende wissen, was sie als Nächstes lernen müssen und wie Konze miteinander zusammenhängen.

## Fragen zum Nachdenken

- Ein Wissensgraph erfasst nicht nur Konzepte, sondern ihre Beziehungen — Voraussetzungen, Ähnlichkeit, Hierarchie. Warum könnte es für ein adaptives System nützlicher sein zu wissen, wie Konzepte zusammenhängen, als eine flache Liste von Fertigkeiten zu haben?
- Wie sehen Voraussetzungsbeziehungen in einem Fach wie dem Ihren aus? Können Sie an ein Thema denken, an dem Studierende regelmäßig scheitern, weil ihnen ein grundlegendes Konzept fehlt, das der Graph offenlegen würde?
- Die Seite beschreibt den Einsatz von Wissensgraphen, um Wissenslücken zu erkennen — wo Lernenden grundlegende Konzepte fehlen. Wie könnte das Sichtbarmachen dieser Lücke verändern, was ein KI-Tutor als Nächstes zu unterrichten beschließt?
- Wissensgraphen können manuell oder automatisch von LLMs aus Bildungstexten gebaut werden. Welche Risiken birgt es, eine KI die Konzeptstruktur konstruieren zu lassen, über die ein Tutor dann schließen wird?
- Wenn Wissensgraphen die Fachstruktur liefern, über die KI-Agenten schließen, was passiert dann mit Vertrauen und Genauigkeit, wenn der Graph selbst einen Fehler oder eine verzerrte Beziehung enthält?
- Ein Wissensgraph wird als strukturelles Rückgrat beschrieben, das feinkörnige Diagnose und personalisierte Pfade ermöglicht. Was müsste in Ihrem eigenen [[teacher-role|Unterricht]] oder Design ein Wissensgraph Ihres Fachs erfassen — und was würde er auslassen?

## Einführung

Wissensgraphen liefern das strukturelle Rückgrat für viele intelligente Bildungssysteme. Anders als flache Listen von Fertigkeiten oder Konzepten erfassen Wissensgraphen Voraussetzungsbeziehungen, Ähnlichkeit und hierarchische Organisation — unverzichtbar für [[adaptive-learning|adaptives Lernen]], [[knowledge-tracing|Knowledge Tracing]] und [[student-modeling|Modellierung der Studierenden]].

## Wie Wissensgraphen in der AIED genutzt werden

Wissensgraphen sind ein wiederkehrender struktureller Mechanismus in der AIED-[[research-methods-aied|Forschung]] der Wissensbasis und dienen mehreren ausgeprägten Rollen:

- **[[knowledge-tracing|Knowledge-Tracing]]-Modelle** nutzen Konzeptgraphen, um Schätzungen der Studierendenkompetenz über verwandte Fertigkeiten hinweg auszubreiten, was die Vorhersagegenauigkeit verbessert, wenn die Daten spärlich sind.
- **[[student-modeling|Systeme zur Modellierung der Studierenden]]** nutzen Wissensgraphen, um semantisch aussagekräftig darzustellen, was Lernende wissen, und ermöglichen damit feinkörnige Diagnose.
- **[[adaptive-learning|Adaptive Plattformen]]** nutzen Voraussetzungsgraphen, um Inhalte zu sequenzieren und [[personalized-learning|personalisierte Lernpfade]] zu empfehlen.
- **Die Algorithmenwahl über dem Graphen verändert Ergebnisse.** In G4L erzeugte das Ausbreiten von Meisterschaft durch einen Evolving Knowledge Space Graph mit Bayesscher Wissensausbreitung +24% gemessenes Wissen (0.717 → 0.887), gegenüber +5% für Knowledge Space Theory und +1% für Weighted Distance Dependent Induction ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).
- **[[cognitive-diagnosis|Kognitive-Diagnose]]-Rahmenwerke** wie [[xie-hillm-cd-2026|HiLLM-CD]] konstruieren Konzeptbäume aus Bildungstexten mithilfe von LLMs und beseitigen damit manuelle Annotation.
- **Wissensgraph-gestütztes Tutoring:** [[quantum-education-its|ITAS]] nutzt einen Wissensgraphen von Quantenkonzepten (mit expliziten Voraussetzungsbeziehungen), um ein Multi-Agenten-Tutoring-System anzutreiben, und traversiert den Graphen, um die nächsten Themen für kontraintuitives Material auszuwählen.
- **Curriculum- und Kursmodellierung:** [[coursegraph-cs-course-comparison-2026|CourseGraph]] vergleicht Strukturen von Informatikkursen über Institutionen hinweg mithilfe von Graphenrepräsentationen; [[learnity-graphs-lifelong-learning-framework-2026|Learnity-Graphen]] modellieren [[lifelong-learning|Wege lebenslangen Lernens]].
- **Lernen von Voraussetzungsbeziehungen:** [[proprl-prerequisite-relation-learning|ProPrL]] lernt Voraussetzungsbeziehungen zwischen Konzepten und formalisiert damit die Kanten, die Wissensgraphen kodieren.
- **Erkennung von Wissenslücken:** [[knowledge-gap-detection-ai-tas|Erkennung von Wissenslücken]] nutzt graphenbasiertes Schlussfolgern in KI-Lehrassistenten, um zu erkennen, wo Lernenden grundlegende Konzepte fehlen.
- **[[multimodal|Multimodales]] und erklärbares Schlussfolgern:** [[multimodal-knowledge-graph-educational-reasoning|multimodale Wissensgraphen]] erweitern die Graphenstruktur über Inhaltsmodalitäten hinweg; [[fair-explainable-edu-recommendations|faire und erklärbare Empfehlungen]] verbinden Wissensgraphen-Embeddings mit sequenzieller Modellierung (ein hybrides HKG-GRU-Rahmenwerk).
- **Unterrichtlich strukturierte Graphen für Ressourcenempfehlung:** [[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu, Sun & Song (2026)]] zerlegen jede Entität einer Lehrressource in vier unterrichtliche Dimensionen (Unterrichtskontext, kognitive Stufe, technologisches Merkmal, kulturelle Anpassungsfähigkeit), berechnen nutzungsabhängige semantische Ähnlichkeit über diesen Dimensionen und verschmelzen sie mit kollaborativem Filtern über einen fähigkeits- und fortschrittsbewussten Koeffizienten — was pädagogische Struktur direkt in das Empfehlungssignal kodiert, statt Ressourcen als Konsumgüter zu behandeln.
- **Ontologiebasierte Wissensbasen:** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova (2026)]] schlägt eine geschichtete, hybride Wissensbasis-Architektur vor, die in Beschreibungslogik gegründet ist und die klassischen Einzelontologie-Modelle von ITS durch **Systeme abgebildeter Ontologien** ersetzt — und prozedurales (regelbasiertes), probabilistisches/unscharfes und ML-extrahiertes implizites Wissen hinzufügt —, plus ein Metadaten-Rahmenwerk zum Beschreiben, Entdecken und Wiederverwenden bildungspolitischer Ontologien.
- **[[scaffolding|Scaffolding]] und Schreiben:** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] und [[visual-query-tracer-declarative-logic-learning|visuelles Query-Tracing]] wenden graphenbasierte Struktur auf narratives Entwerfen und Lernen deklarativer Logik an.
- **Von Menschen kuratierte literarische Graphen, und was ein Audit offenlegt:** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] grapht literarische Prämissen — 1,455 Axiom-Datensätze, 1,464 Zuordnungen zu 149 Werken und 472 typisierte Beziehungen —, wobei [[llm|Sprachmodelle]] Kandidatenformulierungen vorschlagen, die menschliche Kurator:innen auswählen und begründen. Sein nachgerechnetes Audit ist so lehrreich wie seine Struktur: jeder Endpunkt löst sich auf, und kein Duplikat oder Selbstlink bleibt, doch ordnen sich 1,448 der 1,455 Axiome genau einem Werk zu (kreuzwerkliche Wiederverwendung ist also spärlich), die Kontext-Taxonomie kann ihre zwei Kontexttypen nicht trennen, und kein Provenienz-Datensatz überlebt, sodass die Momentaufnahme ihre eigene Pipeline nicht rekonstruieren kann. Strukturelle Validität ist nicht interpretative Qualität, und ein kuratierter Graph ohne Provenienz kann weder auditiert noch aktualisiert werden.

## LLM-getriebene Konstruktion von Wissensgraphen

Neuere Forschung untersucht den Einsatz von [[llm|LLMs]], um Wissensgraphen automatisch aus bildungspolitischen Inhalten zu konstruieren. Das [[xie-hillm-cd-2026|HiLLM-CD]]-Rahmenwerk nutzt Multi-Agenten-LLM-Pipelines, um Aufgaben-Konzept-Verknüpfungen und hierarchische Konzeptbäume zu erzeugen, und verringert damit die Abhängigkeit von Expert:innenannotation. Das verbindet sich mit breiteren Anwendungen der [[generative-ai|generativen KI]] im Curriculum-Design und in der automatisierten Inhaltsorganisation, und mit [[rag|RAG]] (retrieval-augmented generation), wo graphenstrukturiertes Wissen die Retrievalqualität gegenüber flacher Ähnlichkeitssuche verbessern kann.

## Beziehung zu anderen Konzepten

Wissensgraphen verbinden sich mit [[learning-design|Lerndesign]] (definieren, was zu lehren ist), [[curriculum-design|Curriculum-Design]] (wie es zu sequenzieren ist) und [[learning-analytics|Learning Analytics]] (Einsichten aus Interaktionsdaten der Studierenden extrahieren). Sie sind grundlegend für Systeme des [[intelligent-tutoring|intelligenten Tutorings]], die strukturierte Repräsentationen bildungspolitischer Bereiche brauchen. Da KI-Agenten in der Bildung üblicher werden, liefern Wissensgraphen die Bereichsstruktur, über die [[agentic-ai|agentische Systeme]] schließen — ein Muster, das in [[quantum-education-its|ITAS]] und Lehrassistenten zur Erkennung von Wissenslücken zu sehen ist.

## Verbundene Konzepte

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[learning-analytics]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]
- [[ai-technologies]] — Dachbegriff: KI-Technologien und -Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)
- [[recommender-systems-and-learning-paths]]
## Verbundene Artikel
- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — A curator-built graph of 1,455 literary axioms with a structural audit and no provenance record (Liu & Zhao 2026)
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[learnity-graphs-lifelong-learning-framework-2026]] — Learnity graphs for lifelong learning
- [[veriforge-narrative-drafting-scaffolding-2026]] — Veriforge: narrative-drafting scaffolds
- [[quantum-education-its]] — Quantum education intelligent tutoring (ITAS)
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph: CS course comparison
- [[proprl-prerequisite-relation-learning]] — ProPrL: prerequisite-relation learning
- [[knowledge-gap-detection-ai-tas]] — Knowledge-gap detection in AI teaching assistants
- [[visual-query-tracer-declarative-logic-learning]] — Visual query tracer for declarative logic learning
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]] — Hybrid CF–KG cross-domain recommendation for multimodal teaching resources
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-driven cognitive diagnosis
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
