---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**Learning Commons** ist die Bildungsinitiative von Mark Zuckerberg und Priscilla Chan, 2025 gestartet, um die lernwissenschaftliche Arbeit der Chan Zuckerberg Initiative in die Infrastruktur zu tragen, auf der Edtech-Produkte tatsächlich gebaut werden. Ihr Argument ist infrastrukturell und nicht pädagogisch: Forschung gibt es, akademische Standards gibt es, und hochwertige Curricula gibt es, aber sie liegen in getrennten Systemen, sodass Entwickler auf dem aufbauen, was am leichtesten erreichbar ist. Die Organisation veröffentlicht drei offene Werkzeuge auf GitHub — einen Knowledge Graph, eine Reihe von Evaluatoren und [[agentic-ai|Agent Skills]] — und betreibt eine Plattform, die Curriculum Sync ergänzt, um Curricula in ein [[edtech-platform|Lernmanagementsystem]] zu laden.

## Was man damit tun kann

Der **Knowledge Graph** modelliert akademische Standards, Curricula und Forschung der Lernwissenschaft als Entitäten und Beziehungen unter einem gemeinsamen Schema, sodass ein Werkzeug generierte Inhalte an einen Standard ausrichten kann, ohne eine eigene Datenpipeline zu bauen. Die **Evaluators** messen Merkmale von [[llm|LLM-Ausgaben]] durch die Brille der Lernwissenschaft — Textkomplexität, [[feedback]], Ausrichtung an akademischen Standards und dauerhafte Kompetenzen — und kommen mit Python- und TypeScript-SDKs, veröffentlicht auf npm und PyPI, um generierte Inhalte zu bewerten oder Kandidatenmodelle zu vergleichen. **Agent Skills** bündeln Anweisungen, Referenzen und Leitplanken für gängige Abläufe von Lehrkräften in einem offenen, modellagnostischen Format: eine Verständnisprüfung, gestufte Differenzierung von Unterrichtsstunden, standardkonforme Unterrichtspläne und Unterrichtsvorbereitung. In der Praxis ist der Graph das, was die anderen beiden glaubwürdig macht: Die Ausrichtung von Inhalten ist die Behauptung, und der Graph ist die Referenz, gegen die sie geprüft wird.

## Für wen es gedacht ist

Entwickler, die KI-Funktionen in Produkte für [[curriculum-design|Curriculum]] und Bewertung einbauen, und die Curriculum- oder Standardteams, die die Daten liefern, an denen diese Produkte ausgerichtet werden. Lehrkräfte können die Agent Skills eigenständig nutzen, doch die Rahmung des Repositories selbst ist Infrastruktur für Menschen, die Werkzeuge ausliefern.

## Anmerkungen und Vorbehalte

Offen im [[open-source|Quellcode]] zu sein macht die Daten nicht offen. Der Code des Knowledge Graph steht unter MIT, während jeder Datensatz sein eigenes Zugangslabel trägt — Open, Open + Gated oder Gated — und Gated-Inhalte ausdrücklich nicht von den offenen Lizenzen abgedeckt sind, die das Repository nennt; prüfen Sie also den Datensatzkatalog, bevor Sie Nutzungsrechte annehmen. Der Code der Evaluatoren steht unter MIT und sein Prompt-Inhalt unter CC BY 4.0, doch die annotierten Korpora CLEAR und PERSUADE 2.0, die er verwendet, stehen unter CC BY-NC-SA 4.0. Die Plattform und die dahinterliegenden Datensätze erfordern ein Konto. Aktivität der Repositories nach Stand vom 2026-11-04: 167 Sterne für den Knowledge Graph, 88 für Evaluators, 41 für Agent Skills. Die Initiative wird von CZI finanziert, und ihre Darstellung des Problems ist die des Geldgebers selbst.

## Verbundene Konzepte

- [[curriculum-design]] — der Graph existiert, um generierte Inhalte an Standards und Curricula auszurichten
- [[open-source]] — MIT- und Apache-2.0-Code mit Datenlizenzierung je Datensatz
- [[educational-nlp]] — die Evaluatoren sind eine Schicht der Textmessung über LLM-Ausgaben
- [[agentic-ai]] — Skills, die einen Arbeitsablauf für ein Modell bündeln
- [[edtech-platform]] — Curriculum Sync lädt Curricula in ein Lernmanagementsystem
- [[llm]] — Ziel der Evaluation und Nutznießer der Skills
