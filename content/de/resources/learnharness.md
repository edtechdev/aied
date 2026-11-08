---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "Eine kostenlose, quelloffene Desktop-App (AGPL-3.0), in der KI-Agenten messen, was eine lernende Person bereits versteht, eine Abhängigkeitskarte zum Ziel planen, jeweils einen Denkschritt unterrichten und das Üben anpassen – mit einem dauerhaften Wissensgraphen aus Aussagen und Denkketten, den spätere Sitzungen lesen, statt von vorn zu beginnen."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**LearnHarness** ist eine Desktop-Anwendung für [[agentic-ai|agentengestütztes]] Lernen, die eine Lektion um [[prior-knowledge|das, was eine lernende Person bereits versteht]], herum organisiert statt um eine Themenliste. Das Projekt beschreibt vier Züge: **messen** – die Ideen sondieren, von denen das Ziel abhängt, um herauszufinden, wo das Verständnis endet; **planen** – eine Abhängigkeitskarte zum Ziel ableiten und sie als Unterrichtskarte zeigen; **unterrichten** – jeweils einen Denkschritt in einem Rhythmus aus Vorhersagen, Erklären und Prüfen durcharbeiten, damit Verwirrungen behoben werden, bevor etwas darauf aufgebaut wird; und **üben** – ein Strom von Aufgaben, die auf die eigenen Schwierigkeiten der lernenden Person zielen.

## Was man damit tun kann

Der besondere Eingang ist das Denkfeld: Lernende schreiben oder diktieren ihre Überlegungen und ihre Unsicherheit, statt nur zu antworten, was das Projekt so versteht, dass der Agent Denken abbildet und keine Richtig-falsch-Aufzeichnung führt. Er kann außerdem Fragen im Hintergrund recherchieren, visuelle Erklärungen erzeugen und interaktive Demonstrationen bauen.

Was sich ansammelt, ist ein [[knowledge-graph|Wissensgraph]] aus Aussagen und Denkketten, die auf ihre Ursprungssitzungen zurückverweisen und von späteren Lehr- und Übungsagenten als Kontext gelesen werden; Notizen lassen sich importieren. Das Projekt betont, dass der Graph Ideen und Verbindungen speichert, keine Bewertungen von Fähigkeiten.

## Für wen es gedacht ist

Für selbstständig Lernende, die an schwierigem Stoff arbeiten, sowie für Lehrende oder Entwickelnde, die sehen wollen, wie ein agentennativer [[intelligent-tutoring|KI-Tutor]] aussieht, wenn seine Prompts und sein Zustand einsehbar sind. Es ist in TypeScript geschrieben, läuft aus dem Quellcode, und seine Tests sind als deterministisch dokumentiert, ohne Modellaufrufe.

## Hinweise und Einschränkungen

Kostenlos betrifft die Software, nicht die Inferenz: Lernende bringen Provider-Schlüssel, ein Abonnement, eine lokale Claude Code CLI oder einen beliebigen OpenAI-kompatiblen Endpunkt mit und zahlen den Anbieter ohne Aufschlag; ein Live-Zähler schätzt nur bekannte API-Kosten. Aufzeichnungen, Chats und Schlüssel bleiben als einfache Dateien auf dem Rechner, doch das Projekt warnt, dass lokale Speicherung keine Offline-Verarbeitung bedeutet, da Modellanfragen, optionales Diktieren und Webrecherche alle externe Dienste erreichen. Der Windows-x64-Installer ist nicht signiert, Windows wird also warnen. Es wird keine Wirksamkeitsstudie berichtet, die Begründung stützt sich daher auf die dargelegte Ratio statt auf gemessene Ergebnisse; das Repository hatte zum Prüfzeitpunkt am 2. November 2026 etwa 4.800 Sterne.

## Verbundene Konzepte

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
