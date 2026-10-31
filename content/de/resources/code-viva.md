---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
updated: "2026-10-30T12:00:00-04:00"
type: resource
summary: "Ein kostenloses Browser-Werkzeug, das für jede studierende Person in einem Programmierkurs eine schriftliche, zeitlich begrenzte Fassung einer mündlichen Code-Verteidigung durchführt und Bewertungen mit zitierten Belegen zur Freigabe durch die Lehrkraft vorschlägt."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Code Viva führt für jede studierende Person in einem Programmierkurs eine schriftliche, zeitlich begrenzte Fassung einer [[oral-assessment|mündlichen Prüfung]] durch, etwa fünfzehn bis zwanzig Minuten pro Person, ohne dass eine Lehrkraft im Raum ist. Es liest den eingereichten Code und die Commit-Historie einer Person, schreibt vier bis sechs Fragen zu deren eigenen Funktionen, Namen und Commits und gibt jeder Person einen persönlichen Link zum Antworten.

## Was man damit tun kann

Einreichungen kommen aus einem Gradescope-Export, einem Canvas-Download-Zip, einem Zip mit einem Ordner pro Person oder aus GitHub Classroom mit einem Lese-Token. Die Lehrkraft legt Sitzungslänge, Fragenzahl und Frist fest, markiert Zeitverlängerung mit dem 1,25- bis 3-fachen und liest, bearbeitet oder ersetzt die erzeugten Fragen, bevor sie Links versendet. Die Fragen decken Rekursionsbasisfälle, Randprüfungen, die Wahl von Datenstrukturen, undurchsichtige Variablennamen, Skalierung und Nachvollziehen, Sätze aus der Aufgabenstellung sowie Commit-Muster ab, etwa einen einzigen Sammel-Commit oder einen spät in der Nacht. Antworten kommen als Antwortcode zurück, und die Prüfansicht zeigt jedes Transkript neben einer vorgeschlagenen Bewertung von 0 bis 3 mit den Sätzen, auf denen sie beruht, dazu eine Warteschlange markierter Fälle, geordnet danach, wie sehr ein Gespräch gerechtfertigt ist. Ergebnisse lassen sich als CSV exportieren, und elf Demo-Kurse erlauben es, den ganzen Ablauf mit erfundenen Daten auszuprobieren.

## Für wen es gedacht ist

Lehrkräfte von Programmierkursen, die Belege dafür wollen, dass eine Person den eigenen Code erklären kann, und die lieber mit einer kurzen Liste von Studierenden sprechen als mit allen; die Fragen zu Commits machen es zu einer Form von [[process-oriented-assessment]].

## Anmerkungen und Vorbehalte

Alles läuft im Browser: Der Kurs liegt im lokalen Speicher mit einem JSON-Export, Fragen reisen in dem Teil eines Links, den Browser nicht an Server senden, und Antworten kommen nur als Codes zurück, die Studierende selbst abschicken, sodass keine Studierendendaten zu Dritten gelangen. Der Fragengenerator arbeitet regelbasiert und nicht modellgetrieben. Nach eigener Auskunft des Werkzeugs ist sein Code-Leser heuristisch, sodass ungewöhnliche Formatierung oder Makros eine Funktion verbergen können, und eine Bewertung kann das Kennen der Fachsprache belohnen statt das Verstehen des Codes, weshalb Bewertungen Vorschläge sind, die eine Lehrkraft freigibt, und weshalb es rät, den Einsatz mit geringem Gewicht zu versehen. Es sind keine Lizenz und kein Quellcode-Repository veröffentlicht, und weil Links die Fragen mitführen, werden sie einige Kilobyte groß – lang genug, um in ein Nachrichtenfeld eines Lernmanagementsystems zu passen.

## Verbundene Konzepte

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
