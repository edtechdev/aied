---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Ein Open-Source-MCP-Server, mit dem Claude, Cursor, Codex und andere Agenten in Canvas LMS lesen und handeln können – Werkzeuge für Studierende, Lehrende und Learning Designer, mit gesperrten Schreibaktionen und optionaler Anonymisierung von Daten Studierender."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**Canvas MCP** ist ein Open-Source-Server für das Model Context Protocol von Vishal Sachdev, der einen KI-Client mit einer Canvas-LMS-Instanz verbindet: Der Agent kann die anstehenden Arbeiten einer studierenden Person auflisten, die Aufgaben und Abgaben eines Kurses lesen, eine Klasse anschreiben oder einen Kurs auf Barrierefreiheit prüfen – alles über Werkzeuge, die der Server bereitstellt, statt über Ad-hoc-Screen-Scraping.

## Was man damit tun kann

Der Server liefert drei Familien von Werkzeugen. Werkzeuge für Studierende beantworten „Was ist diese Woche fällig", „Habe ich alles eingereicht" und „Wie viele Quizversuche bleiben mir" gegen Canvas' eigene `self`-Endpunkte. Werkzeuge für Lehrende listen und erstellen Aufgaben, lesen Abgaben, benoten im Stapel, versenden Nachrichten und ziehen Aufgabenanalysen. Werkzeuge für Learning Designer decken Kursqualitätsprüfungen und WCAG-Barrierefreiheitsscans ab. Insgesamt sind bis zu 128 Werkzeuge verfügbar, wobei das Standardprofil weniger registriert und funktionsgesteuerte Werkzeuge die Zahl erhöhen. Zusätzlich zu den Werkzeugen bündeln acht Agent Skills mehrstufige Rezepte – ein Wochenplan, ein morgendlicher Kurs-Gesundheitscheck, ein Entscheidungsbaum für Stapelbenotung, eine Peer-Review-Pipeline, ein Kursaudit vor dem Semester –, die sich über `skills.sh` in mehr als 40 Agenten installieren lassen.

## Für wen es gedacht ist

Lehrende, die einem Agenten das routinehafte Lesen und Nachrichten rund um einen Kurs überlassen wollen, und [[institutional-ai-infrastructure|institutionelle Teams]], die bewerten, was ein mit dem LMS verbundener Agent tatsächlich erreichen kann. Learning Designer bekommen hier das, was einer automatisierten Kursdurchsicht am nächsten kommt. Das Projekt ist ein ausgearbeitetes Beispiel für [[agentic-ai|agentische Werkzeuge]] auf der Ebene des LMS einer einzelnen Einrichtung statt eines generischen Chatbots.

## Anmerkungen und Vorbehalte

Die Einrichtung ist lokal: Python 3.11 oder neuer, ein Canvas-API-Token und eine URL sowie ein MCP-Client, mit einer doppelklickbaren Erweiterung für Claude Desktop. Der öffentlich gehostete Server wurde eingestellt, eine gemeinsame Bereitstellung bedeutet also Selbsthosting hinter der eigenen Authentifizierung der Einrichtung. Schreibwerkzeuge sind gesperrt – HTTP-Server sind schreibgeschützt, sofern Schreibwerkzeuge nicht ausdrücklich erlaubt sind, Löschvorgänge verlangen Bestätigungstoken, und Codeausführung läuft in einer Sandbox, die im Fehlerfall schließt. Datenschutzkontrollen sind optional: Antwortanonymisierung, E-Mail-Maskierung und PII-Filterung müssen aktiviert werden, und die README ist sorgfältig darin, dass diese FERPA-Pflichten unterstützen können, ohne Konformität herzustellen, die von der Bereitstellung und dem KI-Anbieter abhängt. Im Server gibt es keine Telemetrie, aber Canvas und der gewählte Client führen ihre eigenen Protokolle. Das Projekt steht unter MIT-Lizenz, wird aktiv entwickelt, und seine eigenen Leitfäden sind die maßgebliche Quelle für aktuelle Werkzeugnamen und Konfiguration.
