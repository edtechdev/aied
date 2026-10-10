---
title: Mastery Learning
type: concept
pedagogy: [mastery-learning]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-10T09:04:24-04:00"
translation_of: concepts/mastery-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Mastery Learning** — ein [[pedagogy|pädagogisches]] Rahmenwerk, von Benjamin Bloom formalisiert, in dem [[learners|Lernende]] erst voranschreiten, nachdem sie bei jeder Einheit eine definierte Kompetenzschwelle nachgewiesen haben, statt nach einem festen Stundenplan vorzurücken. Es beruht auf der Prämisse, dass die meisten Lernenden bei ausreichend Zeit, Feedback und auf ihren aktuellen Stand zugeschnittenem Unterricht Mastery erreichen können. KI-Tutoring und adaptive Systeme setzen dieses Modell zunehmend um, indem sie kontinuierlich Wissen modellieren, Aufgaben auswählen und Übung aufrechterhalten, bis Kompetenz nachgewiesen ist.

## Fragen zum Nachdenken

- Die meiste Schulbildung fixiert die Zeit und lässt die Leistung variieren — alle gehen nach einer festen Zahl von Wochen weiter. Mastery Learning kehrt das um: Leistung wird konstant gehalten, während Zeit, Feedback und Übung variieren. Welches Modell passt besser dazu, wie Sie tatsächlich etwas Schwieriges gelernt haben?
- Ein kritischer Vorbehalt auf der Seite: „Richtigkeit ist nicht Mastery.“ Eine lernende Person kann richtige Antworten produzieren und dabei eine zentrale Randbedingung verfehlen, sodass das System verfrüht Mastery erklärt. Fällt Ihnen eine Fähigkeit ein, bei der korrektes Ausführen nicht bedeutete, dass Sie wirklich verstanden, *wann* man es nicht tun sollte?
- Mastery-basierte KI gibt Lernenden Handlungsfähigkeit, eigene Aufgaben zu wählen, doch Simulationen zeigen, dass naive Selbstauswahl massive Überübung erzeugen kann. Wo liegt die richtige Balance zwischen der Wahl der lernenden Person und Randbedingungen, die das Voranschreiten effizient halten?
- Die Seite betont dauerhafte Behaltensleistung statt einer einzelnen richtigen Durchführung — deshalb sollte auf Mastery verteilte Übung folgen. Wie könnte eine lernende Person heute etwas „gemeistert“ zu haben scheinen und es innerhalb von Stunden wieder verlieren?
- Wenn eine KI Ihnen erklärt, Sie hätten ein Thema „gemeistert“: Was sollte sie prüfen, bevor Sie es glauben — über wenige richtige Antworten hinaus?

## Einführung

Mastery Learning besagt, dass die Leistung konstant gehalten werden sollte, während Zeit und Unterstützung variieren: Lernende arbeiten kleine, gut sequenzierte Einheiten durch und erhalten korrigierendes Feedback, bis sie ein Mastery-Kriterium erfüllen, statt unabhängig vom Gelernten weitergeschoben zu werden. Blooms Umrahmung macht häufige [[formative-assessment|formatives Prüfen]] und eine ausdrückliche Definition von Kompetenz zum Kern des Unterrichts, und genau diese Kombination — Diagnose, Feedback, adaptives Tempo — automatisieren [[adaptive-learning|adaptives Lernen]] und [[intelligent-tutoring|intelligentes Tutoring]]. KI verbreitert daher die Machbarkeit von Mastery-Ansätzen und verschärft die Frage, ob erzeugtes Feedback gut genug kalibriert ist, um sie zu zertifizieren.

## Ursprung und Kernidee

Blooms Mastery Learning rahmte das Ziel des Unterrichts von „Lernende nach Begabung sortieren“ zu „Kompetenz vor dem Fortschreiten sicherstellen“ um. Wo konventioneller Unterricht Zeit als fix und Leistung als variabel behandelt, kehrt Mastery Learning das um: Leistung wird konstant gehalten, und Zeit, Feedback und Übung dürfen variieren. Lernende arbeiten kleine, gut sequenzierte Einheiten durch und — entscheidend — erhalten korrigierendes Feedback, wenn sie das Mastery-Kriterium verfehlen, statt unabhängig davon weitergeschoben zu werden. Das stellt [[formative-assessment|formatives Prüfen]] ins Herz des Modells — häufige, folgenarme Checks, die diagnostizieren, ob eine lernende Person bereit ist voranzuschreiten — und setzt eine klare Vorstellung von [[assessment|Assessment]] voraus, die an beobachtbarer Leistung statt an Anwesenheitszeit hängt.

## Wie KI Mastery umsetzt

Der Engpass für klassisches Mastery Learning war der Kostenaufwand aufseiten der Lehrenden, den Stand jeder lernenden Person zu diagnostizieren und den folgenden Unterricht zu personalisieren. Moderne KI-Systeme greifen dies über [[student-modeling|Modellierung der Lernenden]] und [[knowledge-tracing|Knowledge Tracing]] an: Statt eines einzigen aggregierten Werts pflegt das System eine dynamale Repräsentation dessen, welche Wissenskomponenten eine lernende Person beherrscht (oder nicht). Die Arbeit zu Responsible-DKT an [[neural-symbolic-knowledge-tracing]] injiziert ausdrückliche Mastery- und Nicht-Mastery-Regeln in ein tiefes Lernendenmodell — wiederholte richtige Antworten heben die vorhergesagte Mastery, während wiederholte falsche Antworten ein stärkeres Signal für Nicht-Mastery sind — und erzeugt so interpretierbare und zeitlich verlässliche Standschätzungen, auf die [[intelligent-tutoring|intelligentes Tutoring]] reagieren kann.

Mit einem laufenden Mastery-Modell wird die Aufgabe des Systems, zu entscheiden, *was als Nächstes präsentiert wird*. [[simulation|Simulationen]] von Strategien der Lernenden zur Aufgabenauswahl zeigen, dass naive Autonomie (z. B. selbst gewählte Aufgaben, risikoaverses Anvisieren von Schwächen) erhebliche Überübung an komplexen mehrstufigen Problemen erzeugen kann, während gezielte Systemrandbedingungen Fehlanpassungen korrigieren können, ohne effiziente Lernende nennenswert zu bestrafen. Das ist genau der Kompromiss, den [[adaptive-learning|adaptive]] und [[personalized-learning|personalisierte Lernensysteme]] ausbalancieren müssen: [[agency|Handlungsfähigkeit der Lernenden]] dort zu gewähren, wo sie hilft, und gleichzeitig Randbedingungen durchzusetzen, die das Voranschreiten zur Mastery effizient halten. Solche Entscheidungen interagieren auch mit der eigenen Fähigkeit der Lernenden, ihre Anstrengung zu regulieren, was Mastery Learning mit [[self-regulated-learning|selbstreguliertem Lernen]] verbindet.

**Ein kritischer Vorbehalt zur Mastery-Inferenz: Richtigkeit ist nicht Mastery.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren und Stamper (2026)]] zeigen, dass Lernende, die eine Fähigkeit überverallgemeinern — richtige Handlungen ausführen und dabei eine zentrale Anwendungsrandbedingung weglassen —, gemeistert erscheinen können, sodass auf [[knowledge-tracing|Knowledge Tracing]] beruhende Mastery-Stoppregeln die Übung beenden, bevor sie auf einen Fall treffen, in dem die Handlung *unterlassen* werden sollte. Die Abhilfe besteht darin, zu bewerten, *wann die Handlung zu unterlassen ist*, nicht nur wie sie auszuführen ist: nehmen Sie „Nicht-handeln“-Detektoraufgaben vor dem Auslösen der Mastery-Schwelle auf, gepaart mit [[feedback|Feedback]], das die fehlende Randbedingung benennt. Mastery ist besser als Unterscheidung von Anwendungsrandbedingungen plus Handlungsausführung zu verstehen, nicht als Richtigkeit allein.

**Ein zweiter Vorbehalt betrifft die Evidenzregel hinter der Schwelle.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] ließ vier Aktualisierungsregeln über identische Ereignissequenzen aus den ASSISTments-2012/13-Mathematik-Logs laufen — eine konfirmatorische Hälfte von 12,716 Studierenden und 985,813 bewerteten Ereignissen — und fand, dass die erklärte Mastery-Zahl mit der Regel bewegte statt mit den Lernenden: Jede Vervollständigung anzurechnen setzte 93.9% von 113,428 Studierenden-Fähigkeits-Paaren über die 0.95-Posteriorwahrscheinlichkeit, gegenüber 72.8%, wenn Zeilen mit Hinweis oder Wiederholung als gescheiterte Erstversuche gelesen wurden. Die Paare, die die nachsichtige Regel vor der strengen Regel erklärte, erreichten danach 70.9% ungestützte Genauigkeit gegenüber 85.7%, wo die Regeln übereinstimmten — unter der Basisrate von 0.744. Ein Fortschrittsgate, das assistierte Vervollständigungen zählt, zertifiziert damit Lernende, deren spätere unabhängige Arbeit unter dem Durchschnitt liegt, was die Behandlung von [[help-seeking|Hilfesuche]] innerhalb der Aktualisierungsregel — nicht die numerische Schwelle selbst — zur Entscheidung macht, die festlegt, was ein Mastery-Abzeichen zertifiziert.

## Übung, Behaltensleistung und die Grenzen der KI-Unterstützung

Mastery hängt auch von dauerhafter Behaltensleistung ab, nicht bloß von einer einzelnen richtigen Durchführung. Kognitionswissenschaft zu [[retrieval-spacing-interleaving|Abrufübung]] und der Vergessenskurve motiviert es, Übung zu verteilen, nachdem die Mastery-Schwelle erreicht ist. KI-Systeme für verteilte Wiederholung wie Memdora erzeugen Übungsmaterialien im Moment des Lesens und bieten eine Taxonomie kognitiv fundierter Abrufinteraktionen, geplant nach Algorithmen auf dem neuesten Stand, sodass erreichte Mastery über die Zeit verstärkt statt innerhalb von Stunden verloren wird. Diese Designs stützen sich auf [[cognitive-psychology|Kognitionspsychologie]] und das Prinzip der [[desirable-difficulties|wünschenswerten Schwierigkeiten]], um die Anstrengung des Abrufs selbst zum Teil des Lernprozesses zu machen.

Schließlich warnt die Evidenz davor anzunehmen, KI-erzeugte Unterstützung sei durchweg nützlich. In einer multi-[[governance|institutionellen]] Studie zu KI-erzeugten animierten Ablaufspuren für Programmieranfängerinnen und -anfänger waren die Vorteile kontextabhängig und kurzfristig, und Lernende mit mittlerem [[student-engagement|Engagement]] erlebten einen Leistungsabfall, der Koordinationskosten zugeschrieben wurde — ein Effekt im Stil der Expertise-Umkehr, der die Notwendigkeit unterstreicht, Unterstützung an den aktuellen Stand der lernenden Person anzupassen, statt ein Werkzeug pauschal anzuwenden. Ebenso positioniert ein Entwicklungskontinuum der [[ai-literacy|KI-Kompetenz]] in der [[higher-ed|Hochschulbildung]] Mastery nicht bloß als flüssige Übernahme von KI-Werkzeugen, sondern als Fortschreiten durch Stufen informierter und kritischer Nutzung, jede mit eigenen Strategien [[formative-assessment|formativen Prüfens]]. Zusammen rahmen diese Befunde KI-ermöglichtes Mastery Learning als System, das an einzelne Lernende kalibriert, nachhaltig verteilt und auf echte Kompetenz statt flüssige Ausgabe hin bewertet werden muss.

Standards-based grading ist das Assessment-Gegenstück zu Mastery Learning, und [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] zählen es zu fünf innovativen Praktiken, die an „assessment for learning“ ausgerichtet sind und die Lehrende in der Hochschulbildung übernehmen könnten — doch sie finden es im Diskurs zur Managementbildung praktisch abwesend. Sie führen das auf normative Barrieren zurück: normbezogenes „grading on a curve“, externe Signalisierung (Rankings, Praktika, Akkreditierung) und die instrumentelle Haltung der Studierenden widerstehen alle mastery-orientierten, notenfreien Ansätzen. Ihre Empfehlung ist inkrementelles Experimentieren — etwa die Einführung standardsbasierter Rubriken für eine einzelne Aufgabe vor der Skalierung —, gestützt auf Koordination auf Programmebene und dokumentierte Belege aus Scholarship of [[teacher-role|Teaching]] und Learning.

## Verbundene Konzepte

- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[self-regulated-learning]]
- [[formative-assessment]]
- [[desirable-difficulties]]
- [[retrieval-spacing-interleaving]] — Abruf und Spacing als Übungsmotor innerhalb von Mastery-Zyklen

## Verbundene Artikel

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[neural-symbolic-knowledge-tracing]] — Injecting mastery/non-mastery rules into deep learning for responsible, interpretable learner modeling
- [[mesny-innovative-assessment-grading-management-2026]]
- [[crediting-assisted-work-inflates-mastery-2026]] — Crediting assisted work inflates mastery: which evidence rule decides who is declared mastered (Srivastava 2026)
