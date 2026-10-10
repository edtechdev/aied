---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Eine Open-Source-Sammlung von elf Claude-Code-Skills, die einen Kurs gegen die Evidenzbasis des Instructional Design prüfen und jede Empfehlung mit ihrer Evidenzstufe kennzeichnen."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**idstack** ist eine Open-Source-Sammlung von elf Skills für evidenzbasiertes [[learning-design|Instructional Design]], verbreitet als Claude-Code-Plugin mit einer begleitenden Chrome-Seitenleisten-Erweiterung. Statt einen Kurs zu entwerfen, prüfen die Skills einen: Sie klassifizieren Lernziele gegen die revidierte Bloom-Taxonomie, prüfen Constructive Alignment zwischen Lernzielen, Aktivitäten und Assessments, markieren Probleme der kognitiven Belastung und prüfen die Barrierefreiheit gegen WCAG 2.1 AA und Universal Design for Learning. Jede Empfehlung trägt eine Evidenzstufe, von T1 für Meta-Analysen und randomisierte Studien bis T5 für Expertenmeinung. Das Projekt gibt an, dass seine Zitate auf 108 begutachteten Studien aus elf Forschungsbereichen beruhen; diese Zahl ist die eigene Angabe des Projekts, und seine Bibliografie ist in Markdown veröffentlicht, damit eine prüfende Person sie nachvollziehen kann.

Kurse gelangen herein über eine Canvas-API-Verbindung, eine IMS-Common-Cartridge-Datei, ein SCORM-Paket, einen PDF-Export aus einem Autorenwerkzeug oder eingefügte Dokumente. Ein gemeinsames Projekt-Manifest erinnert den Kurs über Sitzungen hinweg, und ein Pipeline-Skill verkettet die Design-Stufen, wobei abgeschlossene Arbeit übersprungen wird. Prüfungen berichten gegen die acht Quality-Matters-Standards und das Community-of-Inquiry-Framework, getrennt nach Teaching, Social und Cognitive Presence, und stufen Empfehlungen dann nach Schweregrad.

## Was vor der Einführung zu wissen ist

Das Plugin erfordert zur Installation Claude Code und eine Bash-Shell; PowerShell und cmd können das Einrichtungsskript nicht ausführen, und Python 3 wird für Verlaufskurven der Bewertungen empfohlen. Kursdaten bleiben im Projektordner auf der eigenen Maschine der lesenden Person und verlassen ihn nur durch eine von der nutzenden Person aufgerufene Integration, etwa einen Canvas-API-Aufruf. Die Live-Inferenz der Chrome-Erweiterung braucht den eigenen kostenlosen Google-AI-Studio-API-Schlüssel der lesenden Person, wobei ein Simulationsmodus sie ohne einen solchen demonstriert. Das Projekt bezeichnet sich als Beta bei Version 3.5.1.0 und warnt vor Änderungen, die zwischen Nebenversionen brechen, und es erscheint unter dem savvides-GitHub-Konto statt unter einem benannten Autor.

## Verbundene Konzepte

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
