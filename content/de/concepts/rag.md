---
title: RAG (Retrieval-Augmented Generation)
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
technology: [generative-ai, intelligent-tutoring, knowledge-graph, llm, llm-training-and-fine-tuning, edtech-platform]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
connected_resources: [gemini-notebook]
translation_of: concepts/rag
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **RAG (Retrieval-Augmented Generation)** — eine KI-Architektur, die Informationsabruf mit Textgenerierung verbindet und es [[llm|LLMs]] erlaubt, Antworten in externen Wissensquellen zu verankern, statt sich allein auf Trainingsdaten zu stützen. In der Bildung adressiert RAG Halluzinationen, ermöglicht [[curriculum-design|curriculum]]-gebundenes Tutoring und speist domänenspezifische [[intelligent-tutoring|KI-Tutoren]].

## Fragen zum Nachdenken

- Sie haben wahrscheinlich schon einmal erlebt, dass ein KI-[[conversational-ai|Chatbot]] selbstsicher etwas Falsches behauptet hat. Was verändert es an dieser Fehlschlagart, die Antwort eines Modells in externen Dokumenten zu „verankern", und welche neuen Fehlschlagarten könnte das mit sich bringen?
- RAG ruft relevante Materialien ab und führt sie dem Generator zu. Welche Annahmen macht das, bevor Sie weiterlesen, über die Qualität der abgerufenen Inhalte — und darüber, ob der abgerufene Text tatsächlich das Richtige zum Unterrichten ist?
- Die Seite stellt RAG dem Fine-Tuning gegenüber: Retrieval verankert Antworten in aktuellen Quellen ohne erneutes Training, während Fine-Tuning Verhaltensweisen einbettet. Wenn Sie einen curriculum-ausgerichteten Tutor bauen würden — welchem Ansatz würden Sie für Genauigkeit vertrauen, und welchem für den Unterrichtsstil?
- RAG wird als die Hauptantwort auf Halluzination in der Bildung dargestellt. Bedenken Sie aber: Wenn die Abrufquelle selbst Fehler enthält oder veraltet ist — kann RAG dann noch halluzinieren? Wo könnte die Garantie „in verifizierten Inhalten verankert" in der Praxis brüchig werden?
- Für eine entwickelnde oder lehrende Person: Was muss ein Tutor jenseits der Lehrbuchinhalte „wissen" — Pädagogik, wann Antworten zurückzuhalten sind, wie Verständnis zu erkunden ist? Wo würde RAG allein das nicht leisten, und womit würden Sie es kombinieren?

## Einführung

### Wie RAG in der Bildung genutzt wird

- **Domänenspezifischer Abruf mit Notation-Bewusstsein:** [[algorag-rag-theoretical-cs-education-2026|AlgoRAG]] indexiert Lehrbücher, 847 Vorlesungsfolien, 312 gelöste Übungsaufgaben, 156 ausgearbeitete Beweisvorlagen und 89 Arbeitsblätter zur Komplexität für theoretische Kurse in [[cs-education|Informatik]] und ergänzt mathematische Entitätenerkennung sowie notationsbewusstes Re-Ranking; es beantwortete alle 179 von der Lehrkraft verfassten Klausurfragen innerhalb eines 240-Sekunden-Zeitlimits (Mittelwert 38,0 Sekunden), erzeugte aber BLEU-4 = 0,0000 und einen Rubrikwert von 0,7620, was sowohl den Wert der Architektur als auch die Grenzen der Metriken illustriert, mit denen sie beurteilt wird.
- **Reduktion von Halluzinationen:** [[eduguard-safe-rag-llm-tutor|EduGuard]] und [[eduzone-llm-safety-k12|EduZone]] nutzen RAG, um die Antworten von KI-Tutoren in verifizierten Bildungsinhalten verankert zu halten und damit [[hallucination-risk|Halluzinationsrisiko]] zu senken.
- **Verankerung ist nur so gut wie die Prüfung der Quelle:** Nur 1 von 12 Teilnehmenden bemerkte eine absichtlich unpassende Quellenkarte, sodass ein Herkunftslabel als Siegel der Autorität wirken kann statt als Einladung, das abgerufene Material zu prüfen ([[veriforge-narrative-drafting-scaffolding-2026|Sun et al. (2026)]]).
- **Curriculum-gebundenes Tutoring:** [[retrieval-augmented-tutoring-algorithm-kite|KITE]] ruft relevante Curriculum-Materialien ab, um Tutoringantworten zu informieren und die Ausrichtung an den Kursinhalten sicherzustellen.
- **Vor-Ort-Betrieb für institutionelle Kontrolle:** CourseChat betreibt einen RAG-Tutor über mehrere Kurse für die [[business-education|wirtschaftswissenschaftliche]] Ausbildung im Bachelor auf lokalen Edge-Hosts mit einer lokalen Vektordatenbank und einem von Ollama bereitgestellten 8B-Modell und hält Kursmaterialien und Studierendendialoge auf der Campus-Infrastruktur; die Modellwahl wurde zu einer gemeinsamen Entscheidung über Hardware und Bereitstellung, als größere Kandidaten an einem Latenzlimit scheiterten ([[on-premises-rag-tutoring-business-education-2026|CourseChat]]).
- **Indexierung von Lehrbüchern und Materialien:** [[book-level-synthetic-textbook-organization|Synthetische Lehrbuchorganisation]] indexiert Bildungsinhalte für den Abruf. [[structrag-diagram-reasoning-ai-tutoring|StructRAG]] erweitert den Abruf auf strukturierte Diagramme.
- **Integration in die Trainingspipeline:** Das [[llm-training-and-fine-tuning|Training pädagogischer LLMs]] nutzt RAG, um das Training von Tutoren in bewährten Bildungspraktiken zu verankern.
- **Kursspezifische akademische Unterstützung:** [[course-specific-rag-help-seeking-higher-ed-2026|Beacon]] ruft aus den freigegebenen Lehrmaterialien eines einzelnen Programmiermoduls ab, um Studierende zu unterstützen, die zögern, auf eine Lehrperson zuzugehen, und 89% der 15 bewertenden Studierenden stuften seine Antworten als stark an den Kursmaterialien ausgerichtet ein; der Designpunkt ist, dass Verankerung eine institutionelle Antwort auf die Passungslücke zwischen allgemeinen [[llm|LLMs]] und Erwartungen auf Modulebene ist.
- **Struktur beim Einlesen gegenüber Abruf zur Anfragezeit:** [[wiki-llm-indexing-ml-classes-2026|Wright (2026)]] stellte dasselbe Korpus des Maschinen-Lernen-Kurses DS3001 als sieben querverlinkte Wiki-Konzeptseiten mit Quellenangaben zusammen und setzte es einem abgestimmten Vektor-RAG-Baseline-Verfahren mit Chunk-Embedding-Abruf gegenüber. Über 59 von Menschen geschriebene Fragen beantwortete das zusammengestellte Wiki die gestimmte Indexierung besser (9,95 gegenüber 9,05 von 10, wobei ein Bootstrap-Konfidenzintervall der Differenz die Null ausschloss) und war häufiger in dem Material verankert, das die antwortende Person tatsächlich sah (98% gegenüber 81%), wobei sich beide Lücken bei Fragen, die Material von mehr als einer Seite brauchten, ungefähr verdreifachten (seitenübergreifende Werte 9,93 gegenüber 8,14, wobei die Verankerungsrate von RAG von 87% auf 64% fiel). Die Verankerungslücke war kein Abrufversagen: Nur 2 der 11 nicht verankerten Antworten des Vektor-RAG waren Abruffehlschläge, während die anderen 9 die relevanten Auszüge im Kontext hatten und dennoch ungestützte Details hinzufügten — ein Beleg dafür, dass Struktur beim Einlesen die Ausarbeitung einschränkt, nicht nur den Zugang.

### RAG gegenüber Fine-Tuning

RAG spielt eine ergänzende Rolle zum [[llm|LLM]]-Fine-Tuning — Retrieval liefert aktuelle, domänenspezifische Verankerung ohne erneutes Training, während Fine-Tuning [[pedagogy|pädagogische]] Verhaltensweisen einbettet. Die Forschung der Wissensbasis untersucht beide Ansätze und ihre Kombination.

## Verbundene Konzepte

- [[llm]]
- [[generative-ai]]
- [[hallucination-risk]]
- [[knowledge-graph]]
- [[edtech-platform]]
- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[pedagogical-safety]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Überblicksseite: KI-Technologien und Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)

## Verbundene Artikel

- [[eduguard-safe-rag-llm-tutor]]
- [[eduzone-llm-safety-k12]]
- [[retrieval-augmented-tutoring-algorithm-kite]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[book-level-synthetic-textbook-organization]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[wiki-llm-indexing-ml-classes-2026]] — Potential for Enhanced Learning in Machine Learning Classes by Using Wiki LLM Indexing
- [[on-premises-rag-tutoring-business-education-2026]] — On-Premises Multi-Course RAG Tutoring for Business Education
