---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Ein Open-Source-Autorensystem aus Whartons Generative AI Labs, das ein strukturiertes Interview mit einer Lehrperson in eine lauffähige, adaptive Lernsimulation mit eigenen Mentor-, Übungs- und Feedback-Agenten verwandelt."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Primer ist ein [[open-source|Open-Source-System]], mit dem man eine pädagogische [[simulation|Simulation]] baut, indem man einer KI eine Lektion beschreibt, statt sie zu programmieren. Das Urteil der Lehrperson bestimmt, was die Simulation vermittelt: Ein Interview holt heraus, was die Lehrkraft über die Lektion und die Studierenden weiß, ein Designdokument macht dieses Wissen überprüfbar, und nichts wird gebaut, bevor die Lehrperson es freigegeben hat.

## Was man damit tun kann

Das Interview stellt jeweils eine Frage: die Lektion, das Niveau und Vorwissen der Studierenden, verbreitete Fehlvorstellungen, den Ansatz der Lehrkraft und wie Erfolg bewertet wird. Lehrende können sprechen oder tippen und Lehrpläne, Unterrichtsentwürfe oder Bewertungsraster hochladen. Zurück kommt ein Designdokument zu Zielen, Szenarioablauf, Figuren, dem, was auf dem Spiel steht, und Anpassungslogik, das die Lehrperson überarbeitet und freigibt wie einen Unterrichtsentwurf. Fünf Agenten bauen es dann: Intake, Design, Casting Director, Image Generation und Experience Builder, der das Ergebnis für eine einzelne Person oder eine ganze Klasse zusammenstellt.

Zur Laufzeit treffen drei Agenten auf die lernende Person. Ein Mentor aktiviert Vorwissen und macht Fehlvorstellungen sichtbar. Ein Übungsagent spielt ein Rollenspiel-Gegenüber oder eine Nachhilfeschülerin im Teachback, bei dem die lernende Person ein Konzept erklärt und die Erklärung auf Nachfragen hin überarbeitet. Ein Feedback-Agent arbeitet mit dem Transkript, bespricht konkrete Momente und wie das Gelernte über das Szenario hinaus wirkt. Jeder Agent hat eine Figur in der Welt und eine didaktische Ebene, die Ziele verfolgt und Belege sammelt, und die Lehrperson erhält Berichte für Einzelne und aggregierte Berichte.

## Für wen es gedacht ist

Lehrende, Instructional Designer und Hochschuldidaktiker können eine Lektion im Detail beschreiben, ohne Code dafür schreiben zu wollen. Forschende, die Authoring mit der Lehrperson im Regelkreis oder [[agentic-ai|Multi-Agent-Workflows]] untersuchen, bekommen ein lauffähiges System zum Inspizieren, und Entwickelnde können es erweitern, weil Prompts, Vorlagen, Checklisten, Orchestrierungsmuster und TypeScript-Code vollständig offen sind.

## Anmerkungen und Vorbehalte

Die Autorinnen und Autoren nennen Primer einen experimentellen Prototyp und kein geprüftes Unterrichtsprodukt. Es wurde nicht als Lernintervention im Unterricht evaluiert, und niemand hat es auf FERPA, COPPA, staatliche Datenschutzgesetze für Schülerinnen und Schüler oder Bezirksrichtlinien geprüft; eine Einrichtung, die es mit Lernenden einsetzt, trägt diese Prüfung selbst. Die Software ist MIT-lizenziert und kostenlos, aber eine Simulation braucht Modellzugang, und der kostet Geld. Weil sie modellunabhängig ist und auf lokalen oder offenen Modellen läuft, lässt sie sich dort einsetzen, wo Datenschutzregeln strenger sind. Ein Whitepaper zu Architektur und Prompts ist von der Projektseite verlinkt. Das Repository hatte 98 Sterne und 16 Forks, als es im November 2026 geprüft wurde.

## Verbundene Konzepte

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
