---
title: "Repertoire"
created: "2026-11-19T13:05:00-05:00"
updated: "2026-11-19T13:05:00-05:00"
type: resource
summary: "Eine Webanwendung zum Aufbau schrittweiser KI-Aufgaben, in denen die Lehrperson die Rolle des Modells und die Grenzen der Studierendennutzung festlegt und die Identität der Studierenden aus dem Kontext des Modells herausgehalten wird."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Ein Baukasten für KI-integrierte Aufgaben, betrieben von AI Education Labs, Inc. Die Prämisse ist, dass die Alternative zu einem ungebremsten Chatbot nicht das Verbot ist, sondern Struktur: Die Lehrperson legt die Schritte fest, die eine studierende Person durchläuft, entscheidet, welche Rolle das Modell in jedem Schritt spielt, und bestimmt, wie weit sich jemand auf das Modell stützen darf. Die Aufgabe wird dann als Beitrittslink veröffentlicht statt als Prompt-Dokument verteilt.

## Was Sie damit tun können

- **Die Rolle des Modells pro Aufgabe festlegen.** Der Baukasten bietet Voreinstellungen für Tutor, sokratischen Fragesteller, Feedbackgeber und Rechercheassistent sowie einen eigenen Prompt, damit sich der Assistent so verhält, wie es die Aufgabe verlangt.
- **Gates zwischen die Schritte setzen.** Ein Schritt kann verlangen, dass jemand seine Überlegung erklärt, bevor es weitergeht, und die KI-Hilfe lässt sich pro Schritt begrenzen — die Oberfläche zeigt einen Restzähler statt eines offenen Zugangs.
- **Die Arbeitsfläche wählen.** Studierende schreiben auf einer Dokumentseite mit Randkommentaren; Chat- und Notizbuch-Layouts stehen zur Verfügung, wo sie besser zur Aufgabe passen als eine Seite.
- **Veröffentlichen und den Denkweg sehen, nicht nur das Ergebnis.** Ein Beitrittslink schreibt Studierende ein, der Fortschritt wird laufend gespeichert, und die Lehrperson kann das Transkript jeder Person lesen und als CSV oder Markdown exportieren.
- **Mit KI entwerfen, dann überarbeiten.** Das Setup kann mit einigen Fragen, einer hochgeladenen bestehenden Aufgabe oder einer früheren Aufgabe beginnen, wobei ein Assistent auf der Lehrendenseite einen ersten Entwurf füllt.

Die veröffentlichten Beispiele deuten die Bandbreite an: eine Physikaufgabe zu Beweisen und Zeugenaussage, eine Biologieübung zur Diagnose des Denkfehlers in der Erklärung eines KI-Praktikanten und eine Psychologieaufgabe zur Prüfung, ob eine Nachrichtengeschichte das Design einer Studie korrekt beschreibt.

## Für wen es gedacht ist

Für Lehrpersonen in der Hochschulbildung, die [[learning-design|Lernendesign]] die KI-Politik tragen lassen wollen — also lieber einschränken, wie ein Modell innerhalb einer Aufgabe genutzt werden kann, als zu kontrollieren, ob es genutzt wurde. Die Gates und Rolleneinstellungen sind eine Ausdrucksform von [[guardrails|Guardrails]] zur Entwurfszeit, und die Anwendung zielt auf Kursarbeit statt auf einen institutionellen Chatbetrieb.

## Hinweise und Vorbehalte

- **Pilotphase.** Die Nutzungsbedingungen erklären, dass der Dienst derzeit im Rahmen von Piloten kostenlos bereitgestellt wird, dass kostenpflichtige Tarife mit Ankündigung eingeführt werden können und dass Funktionen sich ändern oder entfallen können. Es gibt keine öffentliche Preisseite; Preise sieht man erst nach der Anmeldung.
- **Die Datenschutzaussage ist architektonisch und sollte genau gelesen werden.** Jede studierende Person erhält pro Aufgabe eine zufällige Sitzungskennung, die Zuordnung vom Konto zur Sitzung bleibt auf dem Server von Repertoire, und das Modell erhält die anonyme Sitzung, den Aufgabenkontext und den Text der Person. Der Vorbehalt steht in der Richtlinie selbst: Text, den jemand eingibt und der ihn oder sie identifiziert, wird wie jeder andere Text übermittelt, und die Lehrperson des Kurses kann die Transkripte lesen.
- **Inferenz bei Dritten.** Antworten entstehen über die Claude-API von Anthropic, mit der OpenAI-API als Ausweichweg, unter kommerziellen Bedingungen, die laut Richtlinie mit Stand September 2026 kein Training auf API-Eingaben und -Ausgaben vorsehen. Eine Institution sollte das über ihre eigene Vereinbarung bestätigen lassen statt über eine Webseite.
- **Es ist kein Bewertungssystem.** Richtlinie und Bedingungen beschreiben Assistentenurteile wie „Ziel erreicht“ als Hilfen für die Lehrperson; Noten und akademische Entscheidungen bleiben bei der Lehrperson und der Institution, und Entscheidungen über die [[ai-use-disclosure|Offenlegung der KI-Nutzung]] gegenüber Studierenden liegen bei der Lehrperson.
- **Hosting in den USA.** Die Daten liegen in Google Cloud Firestore mit Vercel-Hosting, und die Richtlinie adressiert FERPA-Pflichten, wo der Dienst Bildungsdaten verarbeitet; Nutzenden außerhalb der Vereinigten Staaten wird mitgeteilt, dass ihre Daten dort verarbeitet werden.

## Verbundene Konzepte

- [[learning-design]] — strukturiertes Aufgabendesign als der Punkt, an dem KI-Politik konkret wird.
- [[guardrails]] — Engagement-Gates und begrenzte KI-Hilfe als Einschränkungen zur Entwurfszeit.
- [[ai-use-disclosure]] — die Lehrperson, nicht die Plattform, entscheidet, wie KI-Nutzung gegenüber Studierenden deklariert wird.
