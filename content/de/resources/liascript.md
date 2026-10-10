---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Ein offener Markdown-Dialekt, der eine einfache Textdatei in einen interaktiven Kurs im Browser verwandelt, mit Quiz und lauffähigem Code, dazu ein Multi-Agent-Assistent zum Bauen von Kursen damit."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-09-24T04:57:47-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**LiaScript** ist ein erweiterter Markdown-Dialekt samt einem Interpreter dafür. Eine einfache Textdatei wird zu einem interaktiven Kurs: Dasselbe Dokument kann als Erzählung gelesen, als Folien abgespielt oder als Kurs durchgearbeitet werden, alles im Browser. Zum Schreiben wie zum Lesen muss nichts installiert werden.

## Was man damit tun kann

Quiz kommen in den Formen, die eine Lehrkraft erwartet, darunter Multiple Choice, Matrixfragen, Texteingabe, Dropdowns und Lückentexte, direkt in Markdown geschrieben. Code-Blöcke können bearbeitbar und lauffähig gemacht werden für [[cs-education|Programmier]]-Tutorials, und ein Makrosystem verpackt JavaScript-Bibliotheken in wiederverwendbare Blöcke, sodass interaktive Diagramme von keiner Autorin und keinem Autor Code verlangen. Ein Kurs wird dort gehostet, wo die Autorin oder der Autor Text ohnehin aufbewahrt, ohne an einen Dienst gebunden zu sein, und alles läuft client-seitig, sodass ein geladener Kurs offline funktioniert. Der LiaScript Exporter verpackt einen davon als SCORM für Moodle, ILIAS und andere [[edtech-platform|Lernmanagementsysteme]].

## Der Lehr-Agent zum Bauen von Kursen

Das Projekt veröffentlicht außerdem einen **[Lehr-Agenten](https://github.com/LiaScript/teaching-agent)** zum Verfassen von LiaScript-Kursen, lizenziert unter der Boost Software License 1.0. Vier Agenten für Lehren, visuelles Design, Lernenden-Rückmeldung und Veröffentlichung arbeiten um eine einzige Projektdatei herum, die den Kurszustand hält, mit einem Define-first-Arbeitsablauf: Ziele, Zielgruppe und Didaktik werden festgelegt, bevor irgendein Material geschrieben wird, und es folgen Validierungstore. Ein Entwurf kann aus der Perspektive einer benannten Lernenden-Persona geprüft werden, um [[cognitive-offloading|kognitive Belastung]] und angenommenes Vorwissen zu kontrollieren. Der Agent ist editor-agnostisch und erzeugt aus einer einzigen Spezifikation Konfigurationen für Claude Code, Copilot, Codex, Cursor oder einen Web-Chat, und das Repository dient zugleich als ausgearbeitetes Beispiel, da es einen Kurs mit sechs Einheiten zur EU-NIS2-Richtlinie und ein Dokument enthält, das beschreibt, wie er entstand.

## Anmerkungen und Vorbehalte

LiaScript ist kostenlos, ohne kostenpflichtige Stufe und ohne Kontopflicht, und wird offen unter BSD-3-Clause entwickelt, sodass Institutionen es selbst hosten und verändern können. Die Funktion Live Classroom verdient einen Blick, bevor Sie sich im großen Maßstab darauf verlassen, da die Echtzeit-Synchronisierung einen gemeinsamen Dienst nutzt statt rein lokaler Darstellung. Der Lehr-Agent ist jung und wenig verbreitet, behandeln Sie ihn also als funktionierenden Prototyp und nicht als unterstütztes Produkt.

## Verbundene Konzepte

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
