---
title: "Wie kann KI Studierende beim Lesen und beim Leseverstehen unterstützen?"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-07T20:31:05-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Wenn Sie irgendein Fach unterrichten, wählen Sie Lektüren aus, passen Texte an und entscheiden, ob eine Quelle für Ihre Studierenden zu schwer ist. KI kann bei jeder dieser Aufgaben helfen, aber die Schwierigkeitszahlen, die sie Ihnen gibt, sind keine Messungen von Schwierigkeit — sie sind Schätzungen über einen durchschnittlichen Text und eine durchschnittliche Leserschaft, und die Lesenden, die Sie tatsächlich unterrichten, können weit vom Durchschnitt entfernt sein. Diese FAQ sagt Ihnen, wo die Werkzeuge wirklich helfen, wo sie versagen und was Sie dagegen tun können.

## Was KI tatsächlich leisten kann

**Texte im Maßstab finden und anpassen.** KI ist stark darin, Quellen zu finden, Vokabular zu vereinfachen, Glossare zu erzeugen und eine Passage in einen [[study-with-ai|Lernleitfaden oder eine Zusammenfassung]] zu verwandeln. Nutzen Sie sie für die mechanischen Teile der Lesvorbereitung — Suchen, Niveau-Einschätzung, Herausziehen von Schlüsselbegriffen — und behalten Sie die menschliche Prüfung dort, wo es zählt.

**Die Leserschaft statt den Text modellieren.** Weil Leservariablen viel des Signals darin tragen, wie schwer sich ein Text anfühlt, sagen Werkzeuge, die die Leserschaft profilieren, die wahrgenommene Schwierigkeit besser voraus als jede Formel. In der größten Studie der Wissensbasis bewerteten 193 deutsche Gymnasiastinnen und Gymnasiasten 3.954 Sätze, und profilbasierte Modelle (bestes Ensemble RMSE 0,822 gegenüber einer Mittelwertbasislinie von 1,070) schlugen die Flesch-Werte der Texte, die dasselbe Material weit schwerer einstuften, als die Studierenden es erlebten — 72,8% der Annotationen waren leicht oder sehr leicht ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck und Conrad, 2025]]). Die praktische Version: Die Bewertungen einiger Studierender zu einer Passage schlagen das Label jeder Formel.

## Wo KI an Grenzen stößt

**Schwierigkeitslabels sind keine Messungen.** Ein Label wie „mittel“ oder ein Flesch-Wert beschreibt die Oberfläche des Textes, nicht die Erfahrung Ihrer Studierenden. Lesermerkmale — die zu Hause gesprochene Sprache, die selbst eingeschätzte Fähigkeit, sogar Geschlecht — trugen in der obigen Studie mehr Signal als Textstatistiken, und die Übereinstimmung zwischen den Annotierenden war niedrig (Krippendorffs Alpha = 0,23), gerade weil wahrgenommene Schwierigkeit zwischen Lesenden variiert. Behandeln Sie Formeln und Labels als Hypothesen und kalibrieren Sie sie an den Studierenden, die den Text lesen müssen.

**Eine KI für Ihre Studierenden einzusetzen, funktioniert auch nicht.** In derselben Studie konnten rollenspielgeprompte ChatGPT und Claude die Wahrnehmung von Schwierigkeit durch Studierende selbst mit gelabelten Beispielen nicht reproduzieren — ein LLM kann eine Leserin nicht gut genug [[simulating-students|simulieren]], um einen Text für Sie zu beurteilen ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck und Conrad, 2025]]).

**KI-geschriebener Text liest sich anders als menschliche Prosa.** Über 14 Modelle hinweg übernutzt KI-Sprache seltene niederfrequente Wörter und gestapelte Substantive, lässt optionale Wörter weg und hat längere Dependenzen als gattungsgleiches menschliches Schreiben; die Effekte sind stärker im Mehrrunden-Chat als in Essays mit einer Runde, was die Autoren mit dem Druck iterativer Konversation verbinden ([[clark-ai-generated-language-readability-2026|Clark, Martin und Mahowald, 2026]]). Generierte Erklärungen und generiertes Lesematerial tragen beide dieses Profil, sodass ein KI-entworfener Text schwerer zu verarbeiten sein kann, als sein gemessenes Leseniveau nahelegt.

**KI-Zusammenfassungen können das Lesen ersetzen.** Ein Werkzeug, das einen Artikel in eine Zusammenfassung verwandelt, ist für die Triage nützlich, aber wenn die Zusammenfassung den Text ersetzt, verlieren Studierende die Übung im Leseverstehen, für die die Aufgabe gedacht war — dieselbe Falle wie [[reducing-over-reliance|Überabhängigkeit]] anderswo.

## Was Sie dagegen tun können

**Bevor Sie einen Text zuweisen,** holen Sie eine zweite Meinung jenseits des Werkzeugs ein: Überfliegen Sie ihn selbst, achten Sie auf das obige KI-Prosaprofil, wenn er generiert wurde, und — stärkste Evidenz — bitten Sie ein oder zwei Studierende, ihn auszuprobieren. Ein fünfminütiger Pilot mit echten Lesenden schlägt jeden Schwierigkeitsalgorithmus.

**Wenn Sie einen Text mit KI anpassen,** halten Sie die Anpassung sichtbar und überprüfbar. Originale und vereinfachte Versionen nebeneinander lassen Studierende (und Sie) sehen, was sich geändert hat, und geben mehrsprachigen Lernenden ein Gerüst, das das Original nicht verbirgt ([[ai-multilingual-learners|wie KI mehrsprachige Lernende behandelt]] deckt die Risiken der Sprachangemessenheit ab).

**Wenn Sie ein Lesewerkzeug oder eine Oberfläche bewerten,** fragen Sie, ob es die einzelne Leserin modelliert oder ein globales Label aufstempelt. Für Zweitsprachen-Lesende ist der Unterschied oft die ganze Geschichte. Für Forschende ist das offene Problem die Messung: Die Seite [[reading-education|Lesebildung]] kartiert vier Forschungslinien — Unterstützung beim Lesen, Bewertung des Lesens, adaptiver Text und die Messfrage unter allen dreien ([[educational-measurement|Messung]] ist das schwache Glied in der Kette) — und berichtet die Evidenz als vielversprechend, aber ungleichmäßig, sodass starke Behauptungen über den Lesenutzen eines Werkzeugs dieselbe Skepsis verdienen wie jede [[checking-whether-educational-ai-works|Lernbehauptung zu KI]].
