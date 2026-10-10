---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Ein lokaler KI-Lehrassistent, der das eigene Curriculum in bearbeitbare Unterrichtsentwürfe, Materialien für Lernende und Folien verwandelt – mit einem frei wählbaren Modell."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**Claw-ED** ist ein lokal arbeitender Lehrassistent, der Unterricht aus den eigenen Curriculum-Materialien entwirft. Eine Lehrkraft importiert ihre Quellen, fordert eine Unterrichtsstunde an und erhält bearbeitbare Entwürfe zusammen mit Materialien für Lernende und Folien – erzeugt mit dem Modell, das die Lehrkraft wählt, und nicht mit einem festgelegten Anbieter.

## Was man damit tun kann

Der Arbeitsablauf läuft vom Import über Entwurf, Prüfung und Export, und Entwürfe werden als Ausgangspunkte behandelt, die eine Lehrkraft bearbeitet, nicht als fertige Handouts. Unterrichtsaufträge werden in eine Warteschlange gestellt und sind wiederherstellbar, sodass eine lange Generierung, die scheitert, fortgesetzt statt neu begonnen werden kann, und erzeugte Artefakte können heruntergeladen werden. Die Software stellt ihre Werkzeuge außerdem über einen MCP-Server einem [[agentic-ai|Agenten]] bereit und kann sich mit Google Drive verbinden, sodass eine Schule sie in bestehende Ablagen und Terminplanungen einbinden kann.

Das Projekt ist bewusst modellagnostisch. Es dokumentiert lokale Ollama-Modelle, günstige OpenRouter-Routen und gehostete Optionen nebeneinander, und seine Modellübersicht ist datiert – was deutlich macht, dass die Empfehlungen katalogbasierte Ausgangspunkte sind und nicht von Lehrkräften bewertete Qualitätsurteile.

## Anmerkungen und Vorbehalte

Die Software ist frei und steht für ihren ursprünglichen Code unter der MIT-Lizenz, also [[open-source|Open Source]], wobei Drittanbieter-Komponenten ihre eigenen Bedingungen behalten; ihr Betrieb bedeutet, bei gehosteten Modellen eigene Inferenzkosten zu tragen. Das Projekt bezeichnet sich selbst als von Lehrkräften geprüfte Beta und sagt in seiner README offen, dass ein bestandener CI-Lauf keine Unterrichtsqualität über lebende Modelle hinweg belegt – was die richtige Lesart einer grünen Testsuite in diesem Feld ist: Sie prüft die Software, nicht die [[pedagogy]]. Sie wird von MacxLabs gepflegt und nimmt von Lehrkräften geprüfte Beispielstunden als Beiträge an.

## Verbundene Konzepte

[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
