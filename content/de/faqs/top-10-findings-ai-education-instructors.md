---
title: "Was sind die 10 wichtigsten Befunde aus der Forschung zu KI in der Bildung, die Lehrkräfte kennen sollten?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Diese zehn Studien betreffen unmittelbar Entscheidungen, die Lehrkräfte treffen: was sie aufgeben, wie sie es bewerten, welche Werkzeuge sie kaufen, wie sie sie bauen lassen und woran sie erkennen, ob Lernen stattgefunden hat. Jeder Eintrag nennt die Studie, ihr Ergebnis und die Praxis, die sie verändert.

## Die zehn Studien

**1. Einfacher Chatbot-Zugang senkte die Prüfungsergebnisse um 17% ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Knapp 1.000 Gymnasiasten in der Türkei, in etwa 50 Klassen, arbeiteten drei Mathematik-Sitzungen zum selben Stoff durch. Eine Gruppe hatte während der Übung ein einfaches GPT-4-Chatfenster. Eine andere hatte einen Tutor auf demselben Modell mit von Lehrkräften geschriebenen [[guardrails|Leitplanken]]: Hinweise statt Antworten, mit der richtigen Lösung und typischen Fehlern im Prompt. Die Kontrollgruppe hatte keine KI. Jede Sitzung endete mit einer [[summative-assessment|Prüfung ohne Hilfsmittel]] zu ähnlichen Aufgaben, ohne das Werkzeug.

Die Gruppe mit dem einfachen Chat schnitt während der Übung 48% besser ab als die Kontrolle und in der Prüfung 17% schlechter. Schüler, die nie KI benutzten, übertrafen sie. Die Gruppe mit Leitplanken legte in der Übung 127% zu und erreichte in der Prüfung dasselbe Niveau. Der Schaden verschwand, und an seine Stelle trat kein Lernvorteil. Die Chatprotokolle erklären die Aufspaltung: Die ungeschützte Gruppe fragte nach Antworten und hörte auf, während die geschützte Gruppe Aufgaben versuchte, Hinweise erbat und sich schon in der ersten Sitzung verbesserte.

Für Lehrkräfte ist „KI erlaubt“ keine Richtlinie. Die Oberfläche entscheidet, ob das Werkzeug zu einem Hinweiskanal oder zu einer Antwortmaschine wird, und ein allgemeiner Chatbot ist standardmäßig Letzteres. Ein Chatfenster, das während der Übung offen bleibt, kostet die Studierenden am meisten, die sich am stärksten darauf stützen.

Verwaltungen können dasselbe Ergebnis gegen die Beschaffungsbehauptung stellen, ein stärkeres Modell behebe die Pädagogik. Das Modell war in beiden Armen identisch.

Siehe auch: [[training-ai-tutors-to-guide-rather-than-answer|Einen Tutor darin schulen, zu führen statt zu antworten]]

**2. Ein Tutor, der auf der eigenen Pädagogik des Kurses aufbaute, übertraf den Kurs mit aktivem Lernen, in weniger Zeit ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 ist Harvards Einführungskurs in Physik für Studierende der Lebenswissenschaften. Im Herbst 2023 absolvierten 194 Studierende in einer Crossover-Studie zwei Lektionen zweimal, einmal im [[active-learning|Aktiven Lernen]] des Kurses und einmal über einen für den Kurs gebauten Tutor, mit Prä- und Posttests zu jeder Version.

Studierende lernten mit dem Tutor mehr. Der mediane Posttest lag bei 4.5 gegen 3.5, die medianen [[learning-gains|Lerngewinne]] waren mehr als doppelt so hoch wie die des Kurses, und Quantilschätzungen des Effekts reichten von 0.73 bis 1.3 Standardabweichungen. Sie verbrachten im Median 49 Minuten mit dem Tutor gegen etwa 60 Minuten im Kurs, und 83% bewerteten seine Erklärungen als ebenso gut oder besser als die ihrer Lehrkräfte. Die Werte für Engagement und Motivation stiegen. Freude und Wachstumsdenken unterschieden sich nicht.

Das Ergebnis ruht auf dem Design. Der Tutor führte dieselben Schritte aus wie der Kurs: durchgearbeitete Beispiele, gestufte Hinweise, Aufforderungen zur Selbsterklärung und eine Abfolge, die der Forschung zum Physiklernen folgt. Der Vergleich richtete sich gegen aktives Lernen, nicht gegen eine Vorlesung, sodass der übliche Einwand, alles schlage eine Vorlesung, hier nicht greift.

Wer Lehrkräfte fortbildet, hat hier das stärkste verfügbare Argument dafür, dass Tutordesign Curriculumarbeit ist und nicht Beschaffung. Für Produktteams ist die Messlatte konkret: einen Kursraum mit aktivem Lernen erreichen, in weniger Zeit, mit denselben Unterrichtsschritten.

Siehe auch: [[developing-ai-tutor|Best Practices für die Entwicklung eines KI-Tutors]]

**3. KI-Tutoring erreichte das Niveau menschlicher Expertentutoren ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench führte 2.469 Tutoring-Sitzungen mit 2.383 Erwachsenen zusammen, die sich auf den GRE vorbereiteten, mit 13 KI-Tutoren auf 12 Modellen, live anwesenden menschlichen Tutoren und einer Videokontrolle. Das Ergebnis war der Lerngewinn bei quantitativen und verbalen Aufgaben.

Gepooltes KI-Tutoring war statistisch äquivalent zum Tutoring durch menschliche Expertinnen und Experten, innerhalb einer Viertelstandardabweichung, und beide übertrafen die Kontrolle um etwa sechs Prozentpunkte: 6.86 in Quantitative und 5.47 in Verbal, also ungefähr eineinhalb bis zwei zusätzliche richtige Antworten pro Abschnitt. Die KI-Tutoren wurden bei der Unterrichtsplanung und beim Erstellen von Übungsaufgaben schwächer bewertet, worin die menschlichen Tutoren besser waren.

Für Verwaltungen ändert sich die Personalrechnung bei gut spezifizierter Testvorbereitung. Wenn ein lizenzierter Tutor einen menschlichen Tutor auf einer Viertelstandardabweichung erreicht, geht es bei der Entscheidung um Kosten und Abdeckung, und die Wirksamkeit ist keine Frage mehr. Forschende werden die Grenze anmerken: Äquivalenz ist keine Überlegenheit, und ein standardisierter Test ist das Ergebnis, das eine Maschine am leichtesten treffen kann.

Wer Lehrkräfte fortbildet, kann auf die Stelle schauen, an der die menschlichen Tutoren einen Vorsprung behielten: zu diagnostizieren, was eine lernende Person als Nächstes braucht, und die Abfolge zu bauen, die daraus folgt.

Siehe auch: [[intelligent-tutoring|Intelligentes Tutoring]]

**4. Notizen schlagen das Fragen eines Chatbots, drei Tage später ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes und Kolleginnen und Kollegen führten ein vorregistriertes Experiment in sieben englischen Sekundarschulen durch. 405 Schüler der Jahrgangsstufe 10 bearbeiteten zwei von drei Bedingungen zu einem Geschichtstext: einen Chatbot, der Fragen dazu beantworten konnte, Notizen machen oder beides. Drei Tage später schrieben sie Prüfungen ohne Hilfsmittel zu wörtlichem Behalten, Verständnis und [[retrieval-spacing-interleaving|freiem Abruf]].

Notizen übertrafen den Chatbot bei allen drei Maßen, um etwa eine halbe Standardabweichung beim Behalten und knapp vier Zehntel beim Verständnis. Notizen plus Chatbot übertrafen den Chatbot allein bei zwei der drei Maße und brachten beim freien Abruf nichts, und Notizen allein waren stärker als die Kombination. In der kombinierten Bedingung kopierten etwa ein Viertel der Schüler die Ausgabe des Chatbots in ihre Notizen. Die Schüler bewerteten den Chatbot weiterhin als leichter, hilfreicher und angenehmer als das Schreiben.

Lehrkräfte haben hier direkte Evidenz dafür, dass ein Leseassistent das Lesen ersetzen kann. Wenn der Zweck der Aufgabe darin besteht, einen Text zu verstehen, [[writing-education|ist das Schreiben das Verstehen]], und ein Werkzeug, das Fragen zum Text beantwortet, nimmt die Übung weg. Behalten Sie die Notizen. Wenn Sie den Chatbot zulassen, verlangen Sie etwas, das er nicht liefern kann: einen Vergleich, eine Infragestellung des Textes oder eine Zusammenfassung, die nach dem Schließen des Werkzeugs geschrieben wird.

Siehe auch: [[ai-support-reading-comprehension|KI-Unterstützung für das Leseverständnis]]

**5. Die Lernzeit sank um 27%, und das Behalten sank mit ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Ein Zehnjahrespanel der ALEKS-Plattform mit 3.2 Millionen Lerninteraktionen und 12.2 Millionen Antwortzeiten im Einstufungstest zeigt, was Studierende taten, nachdem ChatGPT erschienen war. Das Design vergleicht Aufgabentypen, die sich in einen Chatbot einfügen lassen (textbasierte Sachaufgaben), mit Typen, die das Manipulieren eines Graphen innerhalb der Plattform verlangen, im selben Curriculum.

Die Zeit für die KI-anfälligen Aufgaben sank bei Studierenden um 2.8% pro Quartal, um 26.9% über elf Quartale. Bei Gymnasiasten sank sie um 31.3%, in der Mittelstufe um 9.0%, und bei Fünftklässlern zeigte sich keine erkennbare Veränderung. Der Rückgang verschwand vollständig unter [[remote-proctoring|Aufsicht]], was der entscheidende Test ist: Als das Werkzeug nicht verfügbar war, verbrachten die Schüler die alte Zeit. Beaufsichtigte Behaltensaufgaben zeigten einen kumulativen Rückgang der Chance auf eine richtige Antwort um 25%.

Der Altersgradient ist ein Designsignal für Produktteams. Die Übungszeit ist die Variable, die sich bewegt, und sie bewegt sich am stärksten dort, wo die Aufgabe am leichtesten abzugeben ist. Für Lehrkräfte ist die auf die Aufgabe verwendete Zeit eine billige Frühwarnung: Eine Kohorte, die dieselben Aufgaben viel schneller beendet, lernt wahrscheinlich nicht dasselbe.

Siehe auch: [[reducing-over-reliance|Übermäßige Abhängigkeit von KI verringern]]

**6. Hausaufgabennoten stiegen um 18%, während Prüfungen ohne Hilfsmittel um 20% fielen ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26.811 Schüler der Jahrgangsstufen 7 bis 12 in China, 30 Monate lang beobachtet, wobei generative KI zu unterschiedlichen Zeitpunkten in den Kohorten eingeführt wurde. Die Hausaufgabennoten stiegen um 18% und die Bearbeitungszeit sank um 30%, von 64 auf 45 Minuten. Monatliche Prüfungen ohne Hilfsmittel fielen innerhalb von sechs Monaten um 20% des Ausgangsmittelwerts, und wichtige Aufnahmeprüfungen fielen nach etwa zwei Jahren um 18% bis 24%.

Der Zeitpunkt zeigt den Mechanismus. Etwa 81% der KI-Nutzenden beendeten die Hausaufgaben schneller als der schnellste Schüler ohne KI und schnitten dann in Prüfungen schlecht ab. Die Minderheit, die ihre Hausaufgabenzeit mit der von Nichtnutzenden vergleichbar hielt, lernte so gut wie alle anderen. Die Verluste waren in den Sozialwissenschaften am größten, dann in MINT, dann in Sprachen, und größer bei leistungsstarken Schülern.

Das Erledigen von Hausaufgaben ist ein schlechter Stellvertreter für Leistung, und die Lücke zeigt sich innerhalb von sechs Monaten, lange bevor sich Ergebnisse von Aufnahmeprüfungen bewegen. Lehrkräfte können früher handeln: bewertete Belege ohne Hilfsmittel halten und Hausaufgaben als Übung behandeln, deren Bearbeitungszeit sichtbar ist.

Siehe auch: [[checking-whether-educational-ai-works|Prüfen, ob KI in der Bildung wirkt]]

**7. Jeder getestete Tutor versagte in der Pädagogik, und über ein Gespräch hinweg versagte er stärker ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors testete 11 Tutoren, von Open-Weight-Modellen mit 3.8B bis 72B Parametern plus GPT-5-mini, in Mathematik, Physik und Chemie, gegen eine Taxonomie aus 11 Dimensionen und 48 Unterrisiken aus der [[learning-theories|Lernwissenschaft]]. Seine Fehlerkategorien sind pädagogisch: übermäßige Offenlegung von Antworten, Verstärkung von Fehlvorstellungen und das Aufgeben von [[scaffolding|Scaffolding]]. Jede davon wirkt im Moment hilfreich, weil die lernende Person schnell eine richtige Antwort bekommt.

Jedes Modell zeigte breiten pädagogischen Schaden. Größere Modelle waren nicht zuverlässig sicherer, und allgemeine Hilfsbereitschaft korrelierte nur schwach mit pädagogischer Sicherheit. Die Schadensraten stiegen von 17.7% bei Einzelrunden-Austauschen auf 77.8% in Gesprächen mit fünf bis acht Runden.

Einzelrunden-Evaluierungen sind kein Beleg für einen sicheren Tutor, und Produktteams sollten ihr Testen darauf ausrichten. Ein Modell, das einen einmaligen Hilfsbereitschafts- und Sicherheitscheck besteht, kann in einem Großteil eines echten Gesprächs versagen. Wer einen Tutor kauft, braucht drei Antworten: Hält er Lösungen zurück, prüft er Fehlvorstellungen, und hält er über eine Sitzung stand. Eine Anbieterdemo mit einem Austausch liefert keine davon.

Siehe auch: [[pedagogical-safety|Pädagogische Sicherheit]]

**8. Fälle von Fehlverhalten stützen sich auf dünnere Belege, als die Vorwürfe nahelegen ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz und Kolleginnen und Kollegen kodierten jeden Fall von Fehlverhalten mit generativer KI an einer australischen Universität über drei Jahre: 1.162 Fälle mit 1.855 Belegstücken, jedes bewertet nach Relevanz, Glaubwürdigkeit und inferenzieller Kraft.

Vorwürfe wegen generativer KI stiegen von 11.9% der Fehlverhaltensfälle im Jahr 2023 auf 36.9% im Jahr 2025, während das Gesamtvolumen der Fälle gleich blieb. 58 Fälle, 5% aller GenAI-Fälle, stützten sich allein auf Behauptungen ohne ein einziges Belegstück. Detektorausgaben waren selten und schwach: Turnitin- oder Ähnlichkeitsberichte hatten in 73 Belegstücken keine inferenzielle Kraft, und eigenständige GPTZero-Ausgaben hatten in 69 eine geringe Glaubwürdigkeit. Die stärkste Evidenz kam aus der Untersuchung statt aus dem Vorwurf, mit mündlichen Aussagen in 410 Belegstücken zu 97.2% stark. [[hallucination-risk|Erfundene Literaturangaben]] waren die größte strukturelle Verschiebung, 22.3% der Belegstücke, mit einem Anstieg von 10.4% im Jahr 2023 auf 30.0% im Jahr 2025.

Für Verwaltungen ist die Lehre verfahrensbezogen. Ein Fall, der auf einem Detektorwert aufbaut, wird eine Beschwerde nicht überstehen, und eine Untersuchung, die mit dem Werkzeug statt mit dem Gespräch beginnt, erzeugt schwache Akten. Lehrkräfte können auf das Artefakt reagieren, das immer wieder auftaucht: Erfundene Literaturangaben sind häufig, und eine Prüfung der Angaben ist billig.

Siehe auch: [[should-we-use-ai-detectors|KI-Detektoren verwenden]]

**9. Das Selbstvertrauen von Lehrkräften in ihre KI-Kompetenz folgt kaum ihrer gemessenen Fähigkeit ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 Lehrkräfte der Primar- und Sekundarstufe (K-12) füllten eine Selbsteinschätzung zur KI-Kompetenz und ein objektives Leistungsmaß auf Grundlage desselben Rahmens aus: Konzept, Nutzung, Bewertung und Ethik. Die Korrelationen zwischen beiden reichten von 0.07 bis 0.24.

Eine latente Profilanalyse fand sechs Gruppen. 43 Lehrkräfte schätzten sich durchgehend hoch ein und erzielten zugleich niedrigere Werte im objektiven Maß. 59 zeigten das Gegenteil. Der Rest gruppierte sich um den Mittelwert oder teilte sich nach Vorerfahrung mit KI.

Für die Fortbildung von Lehrkräften ist [[self-assessment|Selbstbewertung]] keine Bedarfsanalyse. Eine Umfrage, die Lehrkräfte nach ihrem Selbstvertrauen fragt, wird die Selbstsicheren überfördern und die Stillen unterversorgen, und diese Gruppen sind nicht die Kompetenten und die Kämpfenden. Kurze Leistungsaufgaben trennen sie. Forschende sollten die niedrigen Korrelationen als Messwarnung nehmen: Jede Studie über [[ai-literacy|KI-Kompetenz]], die auf [[self-report-measures|Selbsteinschätzung]] beruht, misst Selbstvertrauen.

Siehe auch: [[faculty-development-ai|Lehrkräftefortbildung, die die Praxis verändert]]

**10. KI-Bewertung benachteiligt Studierende, die schwächer schreiben ([[ai-scoring-language-bias-physics|Feser und Tschisgale, 2026]]).**

Die Physikerklärungen von 116 Sekundarschülern wurden von 9 Machine-Learning-Ansätzen und 2 Ansätzen mit großen Sprachmodellen bewertet und dann mit Expertenbewertungen verglichen. Die Übereinstimmung mit den Experten reichte von 67.2% bis 78.4%, was akzeptabel klingt, bis man die Fehler aufschlüsselt.

Jeder Ansatz unterschätzte das konzeptuelle Verständnis bei Erklärungen von geringerer sprachlicher Qualität. Die Verzerrung lief in eine Richtung: Stärkeres Schreiben wurde nicht aufgewertet. Das Muster spiegelt, was für Physiklehrkräfte selbst berichtet wurde, was nahelegt, dass die Schwierigkeit darin liegt, Verständnis aus Prosa zu erschließen, für Menschen ebenso wie für Modelle.

Beschäftigte im Assessment und Produktteams müssen Unterschätzungsraten nach Sprachqualität berichten, nicht nur die Gesamtübereinstimmung mit Experten, weil der Durchschnitt die Gruppe verdeckt, die Schaden nimmt. Wer [[multilingual-learning|mehrsprachige Lernende]] bewertet, sollte Antworten mit geringer Sprachqualität an die [[human-in-the-loop-ai|menschliche Prüfung]] weiterleiten oder Aufgaben gestalten, die nicht von Prosa abhängen.

Siehe auch: [[ai-grading-fairness-reliability|Faire und zuverlässige KI-Bewertung]]

## Was die zehn gemeinsam haben

Drei der Studien messen zwei Dinge zugleich: was Studierende mit dem Werkzeug produzieren und was sie ohne es können. Bastani, Rismanchian und Strömberg finden alle, dass die beiden auseinandergehen, und nur das Maß ohne Hilfe verhält sich wie Lernen. Vier hängen an einer Designentscheidung statt am Modell: die Leitplanken bei Bastani, die Pädagogik im Kestin-Tutor, das Schreiben, das Kreijkes in der Aufgabe behielt, und die Mehrrunden-Umgebung, die SafeTutors testete. Drei untersuchen das System um das Werkzeug herum, nämlich die Evidenz in Fehlverhaltensfällen, die Art, wie Lehrkompetenz gemessen wird, und die sprachlichen Annahmen in der [[automated-assessment|automatisierten Bewertung]]. StudentBench stellt Parität bei einem standardisierten Test fest, dem einen Ergebnis, bei dem eine Maschine einen Menschen am leichtesten erreichen kann. Bastani erscheint in zwei Gruppen, weil es sowohl die Lücke als auch die Designkorrektur liefert.

Damit bleiben drei Fragen, die in jede Kurs- oder Produktentscheidung gehören. Was sollte die lernende Person können, wenn das Werkzeug weg ist? Was verlangt die Aktivität von ihr, während es offen ist? Welche Evidenz würde den Unterschied einen Monat später zeigen?

## Wo die Evidenz dünn ist

Diese Studien teilen die [[limitations-in-aied-research|Grenzen der AIEd-Forschung]] insgesamt. Zwei der größten spielen in der Türkei und China, drei in den Vereinigten Staaten, eine in England, eine in Australien und die Bewertungsstudie in Deutschland. Eine ist ein Benchmark kommerzieller Modelle statt einer Feldstudie. Mathematik der Sekundarstufe dominiert, gefolgt von Physik und Informatik. Sehr wenige Studien untersuchen [[humanities-education|geisteswissenschaftliches Schreiben]] in großem Maßstab, berufliche Bildung oder Studierende mit Behinderungen.

Nur das chinesische Panel und das ALEKS-Panel beobachten Lernende mehr als zwei Jahre nach der Einführung, und die chinesischen Autoren argumentieren, dass kürzere Studien den langfristigen Nachteil systematisch unterschätzen. Sechs dieser Ergebnisse sind Preprints oder Working Papers, die kein Peer Review durchlaufen haben: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang und Feser. Die Studien von Bastani, Kestin, Kreijkes und Munoz sind in begutachteten Fachzeitschriften erschienen.

Null- und Negativergebnisse sind in dieser Literatur selten, daher überschätzt die veröffentlichte Bilanz wahrscheinlich, wie oft KI hilft. Diese Studien sind die derzeit beste Orientierung für zehn Entscheidungen, und keine von ihnen klärt eine Frage abschließend.

## Wie es weitergeht

[[does-ai-help-students-learn|Hilft KI Studierenden beim Lernen?]] ist die breitere Evidenzübersicht hinter diesen Aussagen. [[redesign-assessment-ai-era|Wie sollte Assessment für das KI-Zeitalter neu gestaltet werden?]] führt die Assessment-Hälfte weiter. Für die Integritätsfälle behandelt [[reduce-ai-cheating|Wie reduziere ich KI-Betrug?]] Prozessevidenz und Richtlinien. Für die Befunde zur beruflichen Entwicklung ist [[faculty-ai-competencies|Welche KI-Kompetenzen brauchen Lehrende?]] die Begleitseite, und [[addressing-common-misconceptions-ai-education|Wie können wir häufige Missverständnisse über KI in der Bildung ansprechen?]] behandelt die Einwände, die Sie wahrscheinlich von Kolleginnen und Kollegen hören.
