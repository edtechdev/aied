---
title: "GradeBench"
created: "2026-11-18T18:45:00-05:00"
updated: "2026-11-18T18:45:00-05:00"
type: resource
summary: "Ein öffentliches Leaderboard für Frontier-Modelle, die echte handschriftliche MINT-Antworten auf Hochschulniveau anhand der von der Lehrkraft ausgewählten Kriterien des Bewertungsrasters bewerten."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

GradeBench stellt eine enge, nützliche Frage zur [[automated-assessment|automatisierten Bewertung]]: Wählt ein Frontier-Modell dieselben Bewertungskriterien aus, wenn es die handschriftliche Antwort eines Studierenden, das Bewertungsraster der Lehrperson, eine Musterlösung und die von der Lehrperson tatsächlich ausgewählten Kriterien erhält? Die Gold-Labels sind echte Rasterauswahlen von Lehrpersonen und TAs aus Klausuren und Quizzen, nicht nachträglich bewertete Modellausgaben.

## Was Sie damit tun können

Lesen Sie das Leaderboard, bevor Sie der Genauigkeitsangabe eines Bewertungsanbieters vertrauen, und lesen Sie die Aufgabenkonstruktion, bevor Sie dem Leaderboard vertrauen. Der [[benchmark]] umfasst 464 Aufgaben aus 125 Fragen in 45 [[higher-ed|universitären]] Kursen an mehr als zehn Institutionen, beschränkt auf Freitextaufgaben aus Klausuren und Quizzen, die ein Professor oder ein TA Zeile für Zeile geprüft hat, und mit einem Übergewicht an Teilpunkten — Aufgaben mit voller Punktzahl und Aufgaben mit null Punkten sind jeweils auf 5 % gedeckelt, weil Modelle diese leicht bewältigen.

Das aktuelle Leaderboard endet deutlich unterhalb der menschlichen Übereinstimmung: Das beste Modell erreicht 57,3 % exakte Rasterübereinstimmung, und die Website trägt die Genauigkeit gegen die Kosten pro 1.000 Antworten auf, wobei ein Modell, das 0,8 Punkte zurückliegt, etwa ein Siebtel davon kostet. Diese Kostenachse ist der praktisch nützliche Teil, denn Bewerten ist ein Massengeschäft.

Ein zweites, unabhängig entwickeltes Instrument finden Sie im [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) der Learning Design Alliance, der als offenes Repository statt als gehostetes Leaderboard bereitgestellt wird und in [[porcaro-ai-grading-benchmark-2026|Porcaros Studie]] zusammengefasst ist.

## Für wen es gedacht ist

Lehrende, die entscheiden, ob ein Bewertungswerkzeug Noten ungeprüft freigeben darf, Fachleute für Prüfungswesen, die Beschaffungsanforderungen formulieren, und Forschende, die ein Ziel auf Ebene der Bewertungskriterien brauchen statt einer Korrelation aus dem Aufsatz-Scoring.

## Anmerkungen und Einschränkungen

GradeBench wird von Pensive veröffentlicht, einer kommerziellen KI-Bewertungsplattform, Benchmark und Produkt haben also denselben Eigentümer; die Aufgabenkonstruktion ist dokumentiert und vertretbar, aber betrachten Sie die Rahmung als die des Anbieters. Er deckt STEM-Klausuren mit Bewertungsrastern aus mindestens vier Kriterien ab, was Aufsätze, Kurzantworten und Diskussionsbeiträge ausschließt — die Formate, in denen der größte Teil der Bewertung in den [[humanities-education|Geisteswissenschaften]] stattfindet. Die exakte Rasterübereinstimmung ist eine strenge Metrik: Zwei Bewertende können bei einem Kriterium uneinig sein und beide Recht haben, was die Leistung des Studierenden betrifft. Die Werte beschreiben Modellversionen, die im November 2026 verfügbar waren, und werden sich verändern.
