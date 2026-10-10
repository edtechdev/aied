---
title: "Entwicklerinnen und Entwickler von Bildungstechnologien"
created: "2026-09-17T15:20:00-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [educational-development, learning-design]
technology: [learning-analytics, edtech-platform, open-source]
audience: [instructional designers, software developers, learning analytics designers, institutions, educational technology developers]
page_kind: [evaluation]
confidence: high
methods: [design-based-research]
connected_resources: [playlab]
translation_of: concepts/educational-technology-developers
source_updated: "2026-09-17T15:20:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Entwicklerinnen und Entwickler von Bildungstechnologien** – die Menschen und Organisationen, die Bildungstechnologien bauen: Produktdesignerinnen und -designer, Softwareentwicklerinnen und -entwickler, Learning Engineers, Learning-Analytics-Designende sowie die Edtech-Unternehmen, Universitätslabore und [[open-source|Open-Source]]-Projekte, in denen sie arbeiten. In der KI-Bildung ist dies die Rolle, die eine Modellfähigkeit in etwas verwandelt, das eine Lehrkraft oder ein Lernender tatsächlich nutzen kann, und sie trägt Entscheidungen, die keine spätere Stufe rückgängig machen kann: auf welchen Belegen eine Designbehauptung ruht, wie weit eine [[learning-analytics|Analytics]]-Pipeline oder ein [[intelligent-tutoring|Tutoring]]-System im eigenen lizenzierten Material der Einrichtung verankert ist, ob Lehrende und Lernende am Design beteiligt sind, welche [[learning-design|Instruktionsdesign]]annahmen in den Voreinstellungen verbacken sind, und was mit dem Produkt geschieht, wenn die Förderung endet. Über die Systemberichte und Einsatzstudien der Wissensbasis hinweg ist die wiederkehrende Lehre, dass der Einsatzkontext, nicht das Modell, üblicherweise die bindende Einschränkung ist.

## Fragen zum Nachdenken

- Wenn die Metaanalysen, die behaupten, „KI verbessert das Lernen“, auf ungültiger Methodik beruhen, wie das Audit in [[oneill-presumed-effective-meta-analysis-2026]] fand: Auf welchen Belegen darf eine Produkt-Roadmap dann tatsächlich aufbauen?
- Sollten die Erklärungen eines Algorithmus in der Curriculum-Sprache der Lehrenden geschrieben sein, selbst wenn das mehr Designaufwand kostet als das Offenlegen von Merkmalswichtigkeiten –, und wer zahlt für diesen Aufwand?
- Wenn ein Werkzeug mit Studierenden ko-designt wurde: Wessen Urteil entscheidet – gemessene Lernzuwächse oder die 96%, die sagten, sie wollten es behalten?
- Ist On-Premise-Einsatz mit offener Lizenz eine technische oder eine Governance-Entscheidung –, und sollten Transparenzanforderungen zur Bedingung des Kaufs werden?
- Was schuldet eine Entwicklerin oder ein Entwickler einer Einrichtung, wenn der Zuschuss endet: ein gewartetes Produkt, ein fork-bares Repository oder eine offene Aussage, dass das System nie eine validierte Intervention war?

## Einführung

Die bzw. der Entwickelnde sitzt eine Ebene unter der Plattform. [[edtech-platform]] beschreibt das eingesetzte System und den Akteur, zu dem es wird, sobald es in einer Schule oder Universität ist; diese Seite handelt von den Menschen, die entscheiden, was dieses System tut. Die Unterscheidung zählt, weil Befunde auf Plattformebene – geringe Übernahme, Gerechtigkeitsverzerrung, Reibung in der Beschaffung – üblicherweise Konsequenzen von Designentscheidungen sind, die früher von jemandem getroffen wurden, der die Lernenden nie getroffen hat.

Die Rolle ist auch von ihren Nachbarinnen und Nachbarn verschieden. [[learning-design]] und [[curriculum-design]] gestalten einen Kurs für eine bekannte Kohorte; eine bzw. ein Technologieentwickelnde gestaltet ein Produkt, das viele Kurse nutzen werden, unterrichtet von Menschen, die sie nie getroffen hat –, weshalb Voreinstellungen, Konfigurierbarkeit und Dokumentation pädagogisches Gewicht tragen. [[educational-development]] unterstützt das Lehrpersonal einer Einrichtung von innen; Entwickelnde sitzen außen oder daneben und liefern die Werkzeuge, um deren Übernahme dieses Personal dann gebeten wird. Und [[design-based-research]] ist der Evidenzstandard, den solche Entwickelnden zunehmend erfüllen sollen: iterativ, kontextuell und berichtet mit seinen eigenen Grenzen.

### Wer pädagogische KI baut

**Forschungslabore, die öffentliche Infrastruktur bauen.** [[oatutor-open-source-adaptive-tutor-2023|OATutor]] wurde an der UC Berkeley als erstes vollständig offenes adaptives Tutoringsystem nach [[intelligent-tutoring|ITS]]-Prinzipien gebaut: eine MIT-lizenzierte Codebasis mit einer Creative-Commons-Algebra-Bibliothek, [[knowledge-tracing|Bayesian Knowledge Tracing]]-Meisterschaftsschätzung, A/B-Test-Infrastruktur und LTI-Unterstützung. Sein Existenzgrund ist eine Designentscheidung – proprietäre Plattformen hatten [[adaptive-learning]]-Forschung auf geschlossene Systeme begrenzt –, und sein Authoring-Weg ist eine weitere: 16 Urhebende produzierten in sechs Monaten nach 2,27 Stunden Schulung einen College-Algebra-Kurs.

**Modellbauer.** [[learnlm-improving-gemini-learning]] rahmt die Verbesserung eines Modells für das Lernen neu als [[prompt-engineering|pädagogische Instruktionsbefolgung]]: Verhalten wird pro Anwendung über Systeminstruktionen gesetzt statt über eine feste Definition von [[pedagogy]], und Experten-Gutachtende bevorzugten sie um +31% gegenüber GPT-4o und +13% gegenüber Basis-Gemini. Der praktische Punkt: Pädagogik ist zu kontextabhängig, um global definiert zu werden; die nützliche Fähigkeit ist die Bindung an die Instruktionen, die eine Entwicklerin oder ein Entwickler schreibt, gemessen über gesprächsbezogene Szenarien statt über einzeleinschrittige [[benchmark|Benchmarks]].

**Architektinnen und Architekten von Wissensmodellen.** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] argumentiert, [[personalized-learning|personalisiertes Lernen]] brauche mehr als eine statische Ontologie, und schlägt Systeme abgebildeter Ontologien plus Regeln und Analytics anstelle der klassischen Vier-Modell-ITS-Architektur vor, sowie ein Wiederverwendungsrahmenwerk aus acht Metadatenklassen, das die Kosten jedes neuen Baus senken soll.

**Infrastruktur- und Messingenieurinnen und -ingenieure.** [[a4l-analytics-pipeline]] beschreibt eine modulare, domänenagnostische Pipeline für Daten zur Interaktion von Lernenden, validiert über drei pädagogische KI-Assistenten, wobei für eine Domäne gebaute Methoden sich auf eine andere erweiterten – wiederverwendbare [[learning-analytics|Learning-Analytics]]-Infrastruktur statt eines Einkurs-Dashboards. [[stanbkt-bayesian-knowledge-tracing]] zeigt den komplementären Fall: Eine bayesianische Reimplementierung produzierte *identische* Vorhersage zum etablierten Punktschätzer-Werkzeug (AUC 0,711), unterschied sich nur in den Kosten und in glaubwürdigen Intervallen, die einen Bedingungsvergleich interpretierbar machen.

**Bauende innerhalb von Institutionen.** [[moodle-ai-tutoring-deep-learning]] bettet LLM-Tutoring in ein bestehendes LMS ein statt ein eigenständiges Werkzeug auszuliefern und senkt so die Übernahmeschwelle, die die ITS-Literatur als Grund nennt, warum Systeme in der Praxis scheitern. [[savvy-student-attention-video-learning]] verwandelt multimodale Aufmerksamkeitssignale in ein Interface, das Lehrende lesen können, bevor sie ein Video freigeben. [[instructional-agents-multi-agent-course-gen|Instructional Agents]] automatisiert die ersten drei Phasen von ADDIE mit rollenspezialisierten Agenten, und seine Ablation ist eine Designlektion: Die Einzel-Agent-Baseline schnitt am schlechtesten ab, Full Co-Pilot übertraf Autonomous um 0,5–0,9 Punkte, und kein Qualitätsunterschied zwischen den Backends machte das billigste zur Voreinstellung.

### Worauf eine Designbehauptung ruhen kann

**Die Evidenzbasis ist schwächer als sie aussieht.** [[oneill-presumed-effective-meta-analysis-2026]] auditiert 14 Metaanalysen, die behaupten, KI verbessere Bildung, und fand, dass keine ihre Behauptungen rechtfertigte: Alle bis zwei definierten die Behandlung als Werkzeug statt als pädagogische Intervention, 61% von 59 geprüften Primärstudien hatten Validitätsprobleme, die Heterogenität war hoch, wo immer sie berichtet wurde, Moderatoranalysen waren unterpowert, und Publikationsbias wurde nie gültig bewertet. Eine zurückgezogene Metaanalyse wurde noch von 60% der stichprobenartig geprüften späteren Arbeiten als maßgeblich zitiert. Für Entwickelnde ist „KI verbessert das Lernen“ eine Produktkategorie-Behauptung, kein Designinput.

**Berichten Sie Unsicherheit und volle Kosten, nicht nur Genauigkeit.** Für [[stanbkt-bayesian-knowledge-tracing|StanBKT]] kauft bayesianische Inferenz nichts in der Vorhersage und alles in der Möglichkeit zu sagen, welche Effekte glaubwürdig waren. [[shen-sustainable-ai-knowledge-base-cs-education-2026]] berichtet Retrieval-Ablationen, quantisierungsbewusste Feinabstimmung, VRAM, Energie pro Anfrage und Halluzination gemessen gegen abgerufene offene Ressourcen –, mit dem eigenen Vorbehalt der Autoren, dass das System kein validierter Tutor sei. Das ist die [[ai-ed-evaluation|Evaluations]]disziplin, die eine Einsatzbehauptung prüfbar macht.

### Ko-Design mit Lehrenden und Lernenden

**Erklärungen müssen die Sprache der Lehrenden sprechen.** [[xai-teachers-trust-edtech-recommendations-2026]] führte ein Within-Subject-Experiment mit 41 Chemielehrenden zu einem ML-Empfehlungswerkzeug durch: Verständlichkeit, [[trust|Vertrauen]] und Akzeptanz korrelierten positiv, und domänengetriebene Erklärungen in der Sprache des Curriculums erzeugten signifikant höhere Verständlichkeit, gelerntes [[trust-calibration|Vertrauen]] und Akzeptanz als Erklärungen über Merkmalswichtigkeit. Vertrauen war auch dynamisch – mehrere Lehrende sagten, nur Unterrichtserfahrung würde es entscheiden –, und Akzeptanz hing von pädagogischer Ausrichtung und Arbeitslastreduktion ab.

**Ko-Design auf institutionellem Maßstab.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]] an der Open University wurde über sechs designbasierte Studien in 18 Monaten mit 498 Studierenden und 20 Personalangehörigen gebaut. Etwa 20% waren anfangs skeptisch; nach praktischer Nutzung wollten 96% es behalten, und eine explorative RCT fand doppelt so viel Nutzungszeit, aber keine signifikanten Unterschiede bei Daten zum Lernprozess. Die ermöglichenden Faktoren waren organisatorisch – Unterstützung durch die Leitung, einheitsübergreifende Zusammenarbeit, dateninformierte Iteration – mit Lücken in der Kapazität zu systemischem Denken.

### Beschaffung, Offenheit und nach dem Ende der Förderung

[[shen-sustainable-ai-knowledge-base-cs-education-2026]] liefert die Inputs, die eine Beschaffungsentscheidung braucht: eine Hardware-Untergrenze von 12 GB VRAM, eine Genauigkeitsobergrenze für ein Modell der 7B-Klasse, Energie pro Anfrage und eine Reihenfolge der Entscheidungen – zuerst Retrieval (ohne es erzielte das Modell 52,3%, unter einer TF-IDF-Baseline), dann Feinabstimmung, dann quantisierungsbewusste Kompression; offene Lizenzierung ist die Vorbedingung, ein Korpus lokal auszuliefern. [[reclaiming-epistemic-agency-co-agency-2026]] rahmt dieselbe Entscheidung als Governance: Transparenzanforderungen verwandeln Kaufen in epistemologische Governance, Anfechtbarkeit und Herkunft werden zu Bedingungen, und Bezirke mit der geringsten Kapazität stehen vor der höchsten Hürde. [[credential-cognitive-stewardship-ai-assessment]] ergänzt, dass Anbietergovernance in nur 29% von 30 auditierten Richtlinienpaketen auftauchte, die weit bereitwilliger angaben, was KI tun darf, als welche Belege des Lernens erhalten blieben. [[genai-mindtool-generative-learning]] stellt die Designfrage – fördert das Produkt Lernen *mit* dem Werkzeug oder lädt es kognitive Arbeit ab –, und [[vocabulary-difficulty-prediction]] zeigt den Handel im Kleinen: Das am besten abschneidende Black-Box-Modell (r > 0,91) war weniger erklärbar als das interpretierbare (r > 0,77).

## Verbundene Konzepte

- [[edtech-platform]]
- [[learning-design]]
- [[curriculum-design]]
- [[design-based-research]]
- [[educational-development]]
- [[open-source]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[universal-design-for-learning]]
- [[assessment-validity]]
- [[ai-ed-evaluation]]
- [[governance]]
- [[educational-policy-ai]]
- [[sustainability]]
- [[privacy]]

## Verbundene Artikel

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[moodle-ai-tutoring-deep-learning]]
- [[learnlm-improving-gemini-learning]]
- [[savvy-student-attention-video-learning]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[oneill-presumed-effective-meta-analysis-2026]]
- [[a4l-analytics-pipeline]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[instructional-agents-multi-agent-course-gen]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]]
- [[credential-cognitive-stewardship-ai-assessment]]
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[genai-mindtool-generative-learning]]
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]]
- [[vocabulary-difficulty-prediction]]
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]]
