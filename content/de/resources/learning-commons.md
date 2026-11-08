---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-07T20:05:54-05:00"
type: resource
summary: "Offene KI-Infrastruktur aus der Bildungsinitiative von Mark Zuckerberg und Priscilla Chan: ein Wissensgraph aus Standards, Curricula und Daten der Lernwissenschaft, Evaluatoren zur Beurteilung von LLM-Ausgaben und modellagnostische Agent Skills für Abläufe von Lehrkräften."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**Learning Commons** veröffentlicht drei offene Werkzeuge, um KI-Funktionen auf echte Curriculum-Inhalte zu setzen — einen **[[knowledge-graph|Knowledge Graph]]** aus akademischen Standards, Curricula und Forschung der Lernwissenschaft, eine Bibliothek von **Evaluatoren** zur Beurteilung generierten Texts und modellagnostische **[[agentic-ai|Agent Skills]]** für gängige Abläufe von Lehrkräften — und betreibt eine Plattform, die Curriculum Sync ergänzt, um Curricula in ein [[edtech-platform|Lernmanagementsystem]] zu laden.

## Was man damit tun kann

**Generierte Inhalte an einen Standard ausrichten.** Der Knowledge Graph modelliert Standards, [[curriculum-design|Curricula]] und Forschung als Entitäten und Beziehungen unter einem gemeinsamen Schema. Ein Produkt kann den Standard nachschlagen, den ein Item adressieren soll, Voraussetzungsbeziehungen durchlaufen oder den Inhalt eines Tutors in dem Curriculum verankern, das er unterrichten soll, ohne eine eigene Datenpipeline zu bauen und zu pflegen.

**Generierte Ausgabe bewerten, bevor Studierende sie sehen.** Die **Evaluatoren** messen Merkmale von [[llm|LLM-Ausgaben]] — Textkomplexität, [[feedback|Feedback]], Ausrichtung an Standards und dauerhafte Kompetenzen — und erscheinen als Python- und TypeScript-SDKs auf npm und PyPI. In der Praxis wirken sie als Regressionsprüfung, wenn sich ein Prompt oder Modell ändert, als Vergleich über Kandidatenmodelle oder als Filter für generierte Items und Erklärungen.

**Einen Ablauf für Lehrkräfte bündeln.** **Agent Skills** bündeln Anweisungen, Referenzen und Leitplanken in einem offenen, modellagnostischen Format: eine Verständnisprüfung, gestufte Differenzierung von Unterrichtsstunden, ein standardkonformer Unterrichtsplan und Unterrichtsvorbereitung. Sie lassen sich in ein Agenten-Framework einsetzen oder als ausgearbeitete Vorlagen dafür lesen, wie viel Struktur ein verlässlicher Klassenraumablauf braucht.

**Ein Curriculum in ein Lernmanagementsystem bringen.** Curriculum Sync ist der Plattformschritt, der eine Standardlandkarte in etwas verwandelt, das ein Kurs im LMS tatsächlich nutzen kann.

## Für wen es gedacht ist

Entwickler, die KI-Funktionen in Produkte für Curriculum und [[assessment|Bewertung]] einbauen, und die Curriculum- oder Standardteams, die die Daten liefern, an denen diese Produkte ausgerichtet werden. [[teacher-role|Lehrkräfte]] können die Agent Skills eigenständig nutzen, doch die Rahmung des Repositories selbst ist Infrastruktur für Menschen, die Werkzeuge ausliefern.

## Anmerkungen und Vorbehalte

Offen im [[open-source|Quellcode]] zu sein macht die Daten nicht offen. Der Code von Knowledge Graph und Evaluatoren steht unter MIT, Agent Skills unter Apache-2.0, während jeder Datensatz sein eigenes Zugangslabel trägt — Open, Open + Gated oder Gated —, und Gated-Inhalte sind nicht von den offenen Lizenzen abgedeckt, die das Repository nennt; prüfen Sie also den Datensatzkatalog, bevor Sie Nutzungsrechte annehmen. Der Prompt-Inhalt der Evaluatoren steht unter CC BY 4.0, doch die annotierten Korpora CLEAR und PERSUADE 2.0, die er verwendet, stehen unter CC BY-NC-SA 4.0. Die Plattform und die dahinterliegenden Datensätze erfordern ein Konto.

## Verbundene Konzepte

- [[curriculum-design]] — der Graph existiert, um generierte Inhalte an Standards und Curricula auszurichten
- [[open-source]] — MIT- und Apache-2.0-Code mit Datenlizenzierung je Datensatz
- [[educational-nlp]] — die Evaluatoren sind eine Schicht der Textmessung über LLM-Ausgaben
- [[agentic-ai]] — Skills, die einen Arbeitsablauf für ein Modell bündeln
- [[edtech-platform]] — Curriculum Sync lädt Curricula in ein Lernmanagementsystem
- [[llm]] — Ziel der Evaluation und Nutznießer der Skills
