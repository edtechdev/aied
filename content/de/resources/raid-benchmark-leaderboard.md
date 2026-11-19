---
title: "RAID-Benchmark-Rangliste"
created: "2026-11-18T18:45:00-05:00"
updated: "2026-11-18T18:45:00-05:00"
type: resource
summary: "Ein öffentliches Leaderboard für KI-Text-Detektoren, die anhand von RAID bewertet werden – einem Benchmark, der entwickelt wurde, um die Robustheit gegenüber verschiedenen Modellen, Domänen, Dekodierungseinstellungen und adversarialen Angriffen zu prüfen."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

RAID ist der Benchmark hinter den meisten ernstzunehmenden Aussagen zur [[ai-detection|KI-Texterkennung]], und sein Leaderboard ist die Anlaufstelle, um zu prüfen, ob die veröffentlichte Genauigkeit eines Detektors einen Wechsel von Modell, Domäne oder Decoding-Einstellung oder einen gezielten Angriff übersteht. Die Einträge werden auf dem Testset bewertet und können von allen eingereicht werden, die den Einreichungsprozess des Repositorys einhalten.

## Was Sie damit tun können

Filtern Sie nach Domäne — Abstracts, Bücher, Nachrichten, Poesie, Rezepte, Reddit, Rezensionen, Wiki —, nach Decoding-Strategie (Greedy oder Sampling), nach Repetition Penalty und nach adversarialem Angriff, einschließlich Whitespace, Homoglyphen, Synonymersetzung, Paraphrase, Zero-Width-Spaces und Streichen von Artikeln. Vergleichen Sie anschließend einen Detektor über mehrere Metriken hinweg: AUROC, TPR bei einer Falsch-Positiv-Rate von 5 % und TPR bei 1 %.

Genau diese Filtermöglichkeiten sind der entscheidende Punkt. Ein Detektor, der in der Gesamtauswertung nahe 1,000 erreicht, kann einbrechen, sobald der Text paraphrasiert wurde oder das Quellmodell wechselt, und das Leaderboard zeigt Ihnen diesen Einbruch, bevor eine Institution einen Fall von [[academic-integrity|Fehlverhalten]] darauf aufbaut. Die Spalte mit der Falsch-Positiv-Rate von 1 % ist im Bildungsbereich am wichtigsten, denn auf institutioneller Ebene bedeutet eine Fehlerquote von 1 % Hunderte zu Unrecht beschuldigter Studierender.

## Für wen es gedacht ist

Forschende, die Erkennungsmethoden evaluieren, Verwaltungen, die Richtlinien verfassen, in denen möglicherweise auf einen Detektor verwiesen wird, und Lehrende, die eine konkrete Antwort auf die Frage „Lässt sich das erkennen?“ wollen, bevor sie dies in einem Lehrplan behaupten.

## Hinweise und Einschränkungen

Der Benchmark misst die Erkennung maschinell erzeugten Textes, nicht Fehlverhalten: Studierende, die KI zum Planen, Gliedern oder Überarbeiten nutzen, erzeugen Text, den zu erkennen die Detektoren nicht gebaut wurden, und Studierende, die [[language-learning|in einer Zweitsprache schreiben]], sind ein bekanntes Falsch-Positiv-Risiko, das ein Leaderboard nicht abbilden kann. RAID ist ein Forschungsartefakt, das von einem akademischen Team gepflegt wird; die Abdeckung folgt den Generatormodellen im Testset, sodass neuere Modelle unterrepräsentiert sein können, bis der Benchmark aktualisiert wird. Das Leaderboard ordnet Detektoren in eine Rangfolge ein, nicht die Praktiken ihrer Anbieter im Umgang mit Daten, und ein hoher AUROC sagt nichts darüber aus, ob das Einreichen studentischer Arbeiten bei diesem Dienst in Ihrer Rechtsordnung rechtmäßig oder ethisch vertretbar ist.

## Verknüpfte Konzepte

- [[ai-detection]] — die Methodenfamilie, die der Benchmark evaluiert
- [[academic-integrity]] — der Richtlinienkontext, in dem Detektorwerte verwendet werden
- [[benchmark]] — die übergeordnete Klasse von Instrumenten, zu der RAID gehört
