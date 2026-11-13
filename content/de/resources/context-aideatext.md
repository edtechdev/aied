---
title: "conText"
created: "2026-11-12T11:14:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Ein kostenloser Browser-Tutor, der ein Foto eines Hefts, ein PDF oder einen Text liest und die Schülerin oder den Schüler dann sokratisch auf Englisch oder Spanisch durch den Stoff führt, während er die Ideen, die sie beim Sprechen verbindet, als lebendiges Diagramm zeichnet."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

conText ist die sauberste kleine Demonstration einer Richtung, über die [[intelligent-tutoring|KI-Tutoring]] viel spricht und die es selten umsetzt: Das Modell beantwortet die Frage der Schülerin nicht, es stellt die nächste, und die Ideen der Lernenden werden beim Sprechen als Diagramm gezeichnet. Laden Sie ein Foto einer Heftseite, ein PDF oder einen Text hoch, und das Werkzeug sagt zuerst, was es verstanden hat, und beginnt dann einen gesprochenen [[socratic-method|sokratischen]] Dialog. Jede Idee, die die Schülerin nennt, erscheint als Knoten in einem lebendigen [[knowledge-graph|Wissensgraphen]]; Kanten entstehen, während das Gespräch sie verbindet, und das Panel meldet, wie viele Ideen unverbunden bleiben.

## Was man damit tun kann

Die Schleife ist bewusst kurz. Material hinein (bis zu 10 MB, acht PDF-Seiten oder 15.000 Zeichen Text), der Tutor liest es zurück, und das Gespräch läuft per Stimme — die Seite sagt, der Tutor benote nicht und schreibe nicht für die Schülerin. Das Diagramm ist das Artefakt, das die Sitzung im Nachhinein wertvoll macht: Es zeigt, welche Ideen die Schülerin tatsächlich in Beziehung gesetzt hat und welche lose blieben, was weit konkreter zu prüfen ist als ein Chat-Transkript. Die Sitzung lässt sich als Graph-XML-Datei exportieren und an einem anderen Tag erneut hochladen, um weiterzumachen, und die Löschtaste löscht sie sofort; andernfalls verwirft der Server sie nach einer Stunde.

Diese Kombination — ein Tutor, der die Antwort zurückhält, plus eine visuelle Aufzeichnung des Denkens — liegt genau in dem, was [[scaffolding|Scaffolding]] und [[metacognition|metakognitive]] Reflexion erreichen wollen, und sie gibt einer Lehrkraft etwas Konkretes, wonach sie fragen kann, statt eines fertigen Aufsatzes oder einer richtigen Zahl. Die eigene Rahmung der Seite lautet, dass ein korrektes Ergebnis Verstehen nicht mehr beweist, seit generative KI es erzeugen kann, also muss der Prozess sichtbar sein.

## Für wen es gedacht ist

Studierende, die eine Lektüre oder ein Übungsblatt durcharbeiten und befragt statt bevormundet werden wollen, Lehrende, die eine Prüfung mit niedrigen Einsätzen wollen, ob eine Schülerin Ideen verbinden kann, und Faculty Developer, die ein konkretes Beispiel für Prozessnachweise suchen. Lehrende haben einen curriculumnahen Leitfaden auf Englisch, Spanisch, Portugiesisch und Französisch; das Werkzeug selbst läuft auf Englisch und Spanisch, und das Erklärvideo ist auf Spanisch.

## Anmerkungen und Vorbehalte

Für das schülerseitige Werkzeug werden kein Preis und kein Konto veröffentlicht, während institutionelle Bereitstellung — Cloud, On-Premises oder hybrid — über ein individuelles Angebot und ein Gespräch angeboten wird; behandeln Sie „kostenlos" als den Zustand der öffentlichen Demo im November 2026, nicht als Zusage. Text und Bilder gehen an einen gehosteten Dienst auf Basis von Claude, und die Seite selbst rät Nutzern, Namen, Beträge, Adressen und Firmennamen vor dem Hochladen zu entfernen, was die Last der De-Identifikation auf die hochladende Person verschiebt statt auf die Plattform. Sitzungen löschen sich nach einer Stunde selbst, sofern nicht exportiert. Das dahinterstehende Unternehmen vermarktet zudem eine breitere Bewertungsplattform auf Basis von Reasoning-Graphen an Einrichtungen, und seine Aussagen zur Unterscheidung deduktiver, induktiver, abduktiver und analoger Graphen stammen aus vier Referenztexten — die Seite nennt das eine Demonstration, die Validierung im großen Maßstab steht noch aus.

## Verbundene Konzepte

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
