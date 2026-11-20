---
title: "Fab AI Benchmark-Rangliste"
created: "2026-11-18T18:45:00-05:00"
updated: "2026-11-18T18:45:00-05:00"
type: resource
summary: "Ein Modell-Leaderboard für Bildungs-Benchmarks mit Fokus auf Länder mit niedrigem und mittlerem Einkommen, das Pädagogik, Basisliteralität (grundlegende Lese- und Schreibkompetenzen), SEND (sonderpädagogischer Förderbedarf), visuelle Mathematik und mehrsprachige Leistungsfähigkeit abdeckt und Spalten zu Preis und offenen Modellgewichten (Open Weights) enthält."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Fab AI evaluiert Modelle anhand von Bildungsaufgaben, die dort relevant sind, wo Budgets, Bandbreite und Sprachabdeckung begrenzt sind — in den [[global-south|Ländern mit niedrigem und mittlerem Einkommen]], für die der Benchmark entwickelt wurde —, und veröffentlicht die Ergebnisse als sortierbares Leaderboard statt als Paper. Die Kerntabelle bewertet einen Pädagogik-Benchmark neben SEND, visueller Mathematik und visuellem Schlussfolgern, mit separaten Tabs für mehrsprachige Pädagogik, grundlegende Lese- und Schreibkompetenz sowie die Bewertung des Vorlesens.

## Was Sie damit tun können

Vergleichen Sie rund 300 Modelle anhand von Pädagogik-Scores, die derzeit von Werten in den unteren Neunzigern bis hinunter zu 21% reichen, und sortieren Sie anschließend nach dem, was ein Bildungsministerium tatsächlich abwägen muss: Preis pro Million Tokens, Parameterzahl, offene Gewichte und Veröffentlichungsdatum. Die Streuung am unteren Ende ist der nützliche Teil. Offene Modelle mit weniger als 2B Parametern liegen im Pädagogik-Benchmark zwischen 21% und 43%, während Frontier-Modelle in den unteren Neunzigern liegen — das macht aus „Können wir das offline auf günstiger Hardware betreiben?“ eine quantifizierte Abwägung statt einer Vermutung.

Der [[multilingual-learning|mehrsprachige]] Pädagogik-Tab ist der Grund, die Seite als Lesezeichen zu speichern. Die meisten Bildungs-Benchmarks sind rein englischsprachig, und die Frage, ob die Pädagogik eines Modells eine Übersetzung übersteht, ist genau die Frage, die ein Ministerium in einem mehrsprachigen System beantwortet haben muss. Die Daten lassen sich als CSV herunterladen, sodass die Vergleiche lokal erneut durchgeführt werden können.

## Für wen es gedacht ist

Politische Entscheidungsträger und Beschaffungsteams, die Modelle für nationale Systeme auswählen, Forschende, die [[digital-divide|die Zugangslücke]] in KI-gestützter Bildung untersuchen, und Entwickler, die ein Pädagogik-Ziel brauchen, das keine englischsprachige Prüfung ist.

## Anmerkungen und Einschränkungen

Ein Leaderboard misst Modelle anhand der eigenen Aufgaben des Benchmarks: Ein hoher Pädagogik-Score ist ein Beleg für diese Items, nicht für ein Klassenzimmer. Die Preisspalte verrechnet Input- und Output-Token-Preise im Verhältnis 3:1 — das ist eine Modellierungsentscheidung und nicht das, was ein konkreter Einsatz kosten wird. Die Abdeckung von Sprachen und von lokal gehosteten Modellen verändert sich, sobald neue Modelle erscheinen, und die niedrigen Werte kleiner Modelle spiegeln zum Teil ebenso das Aufgabenformat wie die tatsächliche Fähigkeit wider. Der Bezugsrahmen von Fab AI betrifft ausdrücklich Länder mit niedrigem und mittlerem Einkommen, daher bildet das Item-Set des Benchmarks diesen Kontext ab und sollte nicht als allgemeines Bildungsranking gelesen werden. Prüfen Sie die Veröffentlichungsdaten: Mehrere Einträge stammen aus der Zeit vor der aktuellen Modellgeneration.
