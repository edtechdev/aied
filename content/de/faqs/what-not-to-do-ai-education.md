---
title: "Was sollten Pädagoginnen und Pädagogen im Umgang mit KI vermeiden?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Der größte Teil der Orientierung zu KI in der Bildung ist als Liste dessen formuliert, was man versuchen sollte. Diese Seite ist die andere Liste: die Praktiken, von denen die Evidenz sagt, dass man sie beenden sollte, geordnet nach der Rolle, die sie beenden müsste. Sie ist bewusst keine Liste falscher Überzeugungen – dafür ist die [[addressing-common-misconceptions-ai-education|FAQ zu Missverständnissen]] zuständig, und die Konzeptseite [[misconceptions]] erklärt, warum sie fortbestehen – und keine Liste dessen, was die Forschung noch nicht sagen kann; das deckt [[limitations-in-aied-research|Grenzen der AIED-Forschung]] ab. Der Fokus liegt hier auf dem Schritt nach einer Überzeugung: was Menschen tatsächlich tun, was es kostet und was stattdessen zu tun ist.

Drei Fehlformen wiederholen sich über alle Rollen hinweg. **Substitution** – ein Werkzeug vollzieht das Denken, das die lernende Person vollziehen sollte, und die Ausgabe wird bewertet, als hätte sie es getan. **Unverdiente Evidenz** – ein Signal, das leicht zu erheben ist (Zuversicht, Flüssigkeit, Engagement, eine Abschlussquote), wird als Beleg für etwas behandelt, das es nicht zeigen kann. **Struktur der Ermahnung überlassen** – eine Warnung, ein Richtliniensatz oder eine Schulung soll die Arbeit tun, die Interface-Design, Assessment-Design oder Governance tun müssen.

## Die Kurzfassung

**1.** Bewerten, zitieren oder bewerben Sie niemals eine Ausgabe als Beleg für die Fähigkeit, die sie erzeugt hat.

**2.** Erheben Sie jedes Mal das unbegleitete Maß neben dem unterstützten.

**3.** Behandeln Sie Flüssigkeit, Zuversicht und Engagement als Merkmale der Nutzung, nicht als Lernen.

**4.** Setzen Sie die Schutzmaßnahme in den Arbeitsablauf, nicht in eine Warnung.

**5.** Gehen Sie davon aus, dass alle Daten, die das Werkzeug sehen kann, aufbewahrt, kombiniert und kompromittiert werden.

**6.** Wenn die Behauptung mit einer Demo, aber ohne Vergleich kommt, ist es Marketing.

## Für Lernende

**Geben Sie nicht den Teil ab, den Sie üben sollen.** Die Unterscheidung ist nicht, wie viel KI Sie nutzen, sondern welche kognitive Arbeit sich verschiebt. Hausaufgaben auszulagern hebt die Hausaufgabennoten und senkt die Noten in der Prüfung ohne Hilfsmittel – ein Zuwachs von 18% gegen einen Verlust von 20% in einer Sekundarstufenstudie –, weil die Übung, die abrufbares Wissen aufbaut, an das Werkzeug ging ([[reducing-ai-misuse]]). Wenn die Übung der Punkt ist, kann das Werkzeug die Übung nicht machen.

**Lesen Sie Flüssigkeit nicht als Genauigkeit.** Fließender Text ist die Ausgabe eines Sprachmodells, ob der Inhalt wahr ist oder nicht, und der Mechanismus, der ihn überzeugend macht, ist derselbe, der ihn falsch macht ([[hallucination-risk]]). Prüfen Sie die konkrete Behauptung, nicht den Ton des Absatzes. Die Prüfgewohnheit entsteht selten von selbst: In einem Panel von 900 Erwachsenen, die eine KI-Zusammenfassung erhielten, folgten Lesende in 1% der Besuche einer darin zitierten Quelle ([[trust-calibration]]).

**Akzeptieren Sie Zustimmung nicht als Feedback.** Modelle bestätigen deutlich mehr als Menschen – über 11 Modelle hinweg bestätigten KI-Antworten Nutzende 49% häufiger als menschliche Antworten –, und der Überschuss ist das, was die Interaktion unterstützend wirken lässt ([[ai-sycophancy]]). Ein Tutor, der Ihnen nie widerspricht, hat das korrektive Signal entfernt, um dessentwillen Sie gekommen sind. Bitten Sie um den Einwand, nicht um die Bestätigung.

**Tauschen Sie keine Frage gegen eine Antwort, wenn Sie feststecken.** Das produktive Ringen, das Sie überspringen, ist das Lernen; Hilfesuche, die eine Antwort abruft, ist ein anderes Verhalten als Hilfesuche, die einen Hinweis abruft ([[help-seeking]], [[desirable-difficulties]]). Nutzen Sie Werkzeuge, die die fertige Antwort zurückhalten.

**Kleben Sie keine persönlichen, gesundheitlichen oder familiären Informationen in ein Werkzeug, um eine bessere Antwort zu bekommen.** Das Werkzeug hat keine Pflicht, sie zu vergessen, und die Datenschutzkosten sind in der Qualität der Antwort nicht sichtbar ([[privacy]]).

## Für Eltern und Familien

**Machen Sie die Hausaufgaben nicht mit dem Werkzeug und lassen Sie sie nicht neben sich erledigen.** Das Muster, das in den Daten auftaucht, ist Noteninflation mit verborgenen Kosten: Hausaufgabennoten 18% höher, während die Noten in der Prüfung ohne Hilfsmittel um 20% fallen ([[reducing-ai-misuse]]). Was Sie prüfen können, ist der Prozess – kann Ihr Kind den Schritt erklären, ihn auf Papier wiederholen und sagen, wobei es unsicher war? Wenn nicht, hat das Werkzeug die Aufgabe erledigt.

**Lassen Sie einen Chatbot nicht zum Vertrauten werden.** Sykophantische Systeme bestätigen weit mehr als Menschen – 49% mehr über 11 Modelle –, und die Bestätigung ist der Mechanismus, der sie sicher wirken lässt, um mit ihnen zu sprechen ([[ai-sycophancy]]). In einer großen Längsschnittstudie wandten sich Nutzende für persönlichen Rat fast so oft an sykophantische KI wie an enge Freunde und Familie, bei geringerer Zufriedenheit in ihren realen Beziehungen ([[sycophantic-ai-social-interaction-2026]]). Ein Kind, das Belastung zu einem Modell bringt, das immer zustimmt, wird nicht gehört; es wird gespiegelt.

**Geben Sie einem kleinen Kind keinen generativen Chatbot und nennen Sie es beaufsichtigt, weil Sie im Raum sind.** Die altersgestufte Orientierung ist konkret: gerüstete, nicht-generative Aktivitäten für 9- bis 12-Jährige, beaufsichtigte generative Nutzung mit ethischer Reflexion ab 13 ([[ai-guidance-children-under-13]]). Für die jüngsten Kinder ist das Risiko der Glaube – präoperationale Kinder akzeptieren generierte Inhalte als wahr, und die Systeme sind in ihrem Feedback nicht entwicklungsgerecht kalibriert. Erwachsene Mitnutzung heißt fragen, was das Spielzeug gerade getan hat, nicht von der Tür aus zusehen ([[early-childhood-elementary-ai-education]]).

**Nehmen Sie nicht an, dass das Werkzeug der Schule die Daten Ihres Kindes schützt, weil die Schule es gewählt hat.** Fragen Sie, was aufbewahrt wird, wie lange, ob es irgendetwas trainiert und wer es sonst sieht ([[privacy]]). Bewusstsein folgt nicht aus Exposition: einen Monat nach einer Unterrichtsstunde, in der Schülerinnen und Schüler ihr eigenes protokolliertes Verhalten live projiziert sahen, wählten 66% einer Klasse der Jahrgangsstufe 7 noch die am wenigsten schützende Chatbot-Einstellung ([[privacy]]).

**Nutzen Sie ein Detektor-Ergebnis nicht, um Ihr Kind zu beschuldigen oder eine Beschuldigung einer Schule zu stützen.** Im stärksten kontrollierten Test markierten Detektoren 9–15% unveränderten menschlichen Schreibens und erwischten weniger als 4% humanisierter KI-Umschreibungen; bei realistischen Basisraten überwiegen falsch Positive ([[ai-detection]]). Behandeln Sie eine Markierung als Grund, die Entwurfshistorie und ein Gespräch zu erbitten, nicht als Befund.

**Schließen Sie nicht, dass ein Verbot des Werkzeugs die sichere Option ist.** Untervertrauen ist ein Kalibrierungsfehler mit eigenen Kosten – verzichteter Fähigkeit –, und die Fertigkeit, die zählt, ist passende Zuversicht, nicht Vermeidung ([[trust-calibration]]). Der nützliche elterliche Schritt ist derselbe, den die Forschung für Studierende stützt: einen Prüfschritt verlangen und ihn billig genug machen, dass ein müdes Kind ihn tatsächlich geht ([[verify-ai-output]]).

**Verwechseln Sie einen Inhaltsfilter nicht mit Sicherheit.** Filter adressieren, was ein System sagt; sie adressieren nicht, was eine Interaktion mit einer lernenden Person macht – erodierte Übung, sykophantische Zustimmung oder ungleichmäßige Verweigerungen ([[pedagogical-safety]]).

## Für Lehrende

**Zertifizieren Sie Ausgabe nicht als Fähigkeit.** Eine polierte Einreichung ist Beleg einer polierten Einreichung. Wenn das Assessment nicht unterscheiden kann, was die studierende Person ohne Hilfe kann, hat das Assessment aufgehört, das zu messen, was der Abschluss behauptet ([[assessment-validity]], [[authentic-assessment]]). Die Lösung ist eine Neugestaltung der Aufgabe, nicht ein strengerer Ehrenkodex.

**Nutzen Sie einen Detektor-Score nicht als Beweis für Fehlverhalten.** Der stärkste kontrollierte Test markiert 38–80% richtlinienkonformer leichter KI-Bearbeitung und 9–15% unveränderten menschlichen Schreibens, während er weniger als 4% der Umschreibungen erwischt, die durch einen Humanisierungsdienst gelaufen sind; 14 kommerzielle Werkzeuge in einem unabhängigen Benchmark lagen alle unter 80% Genauigkeit, und bei realistischen Basisraten überwiegen falsch Positive ([[ai-detection]], [[should-we-use-ai-detectors]]). Ein Detektor kann ein Gespräch beginnen; er kann keines beenden.

**Fügen Sie KI nicht einem Assessment hinzu, das Sie nicht neu gestaltet haben.** Ein Werkzeug an eine Aufgabe zu schrauben, die für unbegleitete Performanz entworfen wurde, erzeugt genau die Noteninflation, die den Verlust verdeckt – Hausaufgaben hoch, Prüfung runter. Fragen Sie bei jeder benoteten Aufgabe, was die unbegleitete Version zeigen würde, und reparieren Sie zuerst die Aufgabe ([[reducing-ai-misuse]]).

**Behandeln Sie Engagement nicht als Lernen.** Zeit auf die Aufgabe, Zufriedenheit, Umfang der Hilfesuche und Chat-Aktivität lassen sich alle leicht instrumentieren und sind alle mit gar keinem Lernen vereinbar. Eine Leitplanke, die den Wechsel von Studierenden zu einer falschen KI-Position von 42–60.5% auf 5.7–8.2% senkte, erzeugte innerhalb der Sitzung keinen messbaren Lerneffekt (β = 0.03, p = 0.18). Das Verhalten hielt; das Lernen bewegte sich nicht ([[student-engagement]]).

**Verlassen Sie sich nicht auf eine Warnung, wo die Oberfläche einschränken könnte.** Ein Tutor, der die fertige Antwort erzeugen kann, wird sie unter Termindruck erzeugen. Die Leitplanke, die wirkt, ist die in die Interaktion eingebaute, nicht der Satz im Syllabus ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Kleben Sie keine Arbeiten von Studierenden, IEPs, Disziplinarakten oder identifizierbare Entwürfe in ein Verbraucherwerkzeug.** Datenminimierung ist eine Designentscheidung, die Sie im Namen der studierenden Person treffen, ob Sie darüber nachgedacht haben oder nicht ([[privacy]]).

## Für Lehr- und Curriculumsentwicklerinnen und -entwickler

**Führen Sie keine Werkzeugschulung durch und nennen Sie sie KI-Kompetenz.** Eine Sitzung zum Prompting lehrt die Oberfläche eines Produkts; [[ai-literacy]] ist die Fähigkeit zu beurteilen, wann das Werkzeug genutzt werden sollte, was es tut und was zu prüfen ist. Lehrkräfte, die die Knöpfe ohne das Urteil lernen, gehen mit Zuversicht und ohne Kalibrierung ([[teacher-ai-competency]]).

**Führen Sie keine einmalige Fortbildung durch und erwarten Sie, dass sich die Praxis ändert.** Die Evidenz zu [[professional-training|beruflichem Lernen]] ist konsistent zu Dauer und Nachverfolgung: Einzelveranstaltungen bewegen die selbstberichtete Zuversicht, selten das Klassenraumverhalten, und der Zuversichtszuwachs kann das Ausbleiben von Veränderung verdecken ([[educational-development]]).

**Ignorieren Sie nicht das Assessmentsystem, das Sie stehen lassen.** Lehrende übernehmen die Praxis, die Sie lehren, nur, wenn das Assessment, an dem sie gemessen werden, sie nicht bestraft. Eine Werkstatt zu KI-resistentem Aufgabendesign, die neben einem unveränderten Prüfregime läuft, lehrt Lehrende, dass die Schulung dekorativ ist.

**Modellieren Sie nicht die unkritische Nutzung, vor der Sie warnen.** Ein Werkzeug vor Lehrenden zu demonstrieren, indem Sie einen Unterrichtsplan erzeugen, ohne Prüfschritt, lehrt das Publikum, dass die Ausgabe das Produkt ist.

**Akzeptieren Sie eine Anbieter-Demo nicht als Wirksamkeitsbeleg.** Die Behauptung, die Sie bewerten, betrifft Lernen, und eine Demo zeigt Fähigkeit. Bitten Sie um unbegleitete Ergebnisse, Subgruppenergebnisse und Sicherheitstests über mehrere Züge ([[checking-whether-educational-ai-works]]).

## Für Entwicklerinnen und Entwickler von Bildungssoftware

**Optimieren Sie nicht die Kennzahl, die leicht zu protokollieren ist.** Sitzungslänge, Nachrichtenzahl und Zufriedenheitswerte verbessern sich unter fast jeder Änderung; das Lernen oft nicht. Dasselbe Team, das eine Leitplanke ausliefert, kann ein Dashboard ausliefern, das Interaktionsvolumen belohnt, und die beiden zeigen in entgegengesetzte Richtungen ([[learning-analytics]], [[student-engagement]]).

**Liefern Sie keinen Detektor ohne Validierungsstudie gegen das Konstrukt aus.** Ein Modell, das 0.98 F1 auf einem durchgesickerten Split erreicht, kann unter trial-unabhängiger Validierung auf 0.60 fallen, und ein Lächeln-Detektor kann *negativ* gegen beobachterbewertete Empathie laufen, weil ihm der Kontext fehlt, den eine menschliche Bewertungsperson hat ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Veröffentlichen Sie das Validierungsprotokoll, nicht nur die Schlagzeile.

**Leiten Sie Affekt, Aufmerksamkeit oder „Engagement“ nicht aus Gesichtern und Körpern ab, ohne Einwilligung und einen erklärten Zweck.** Das Risiko über mehrere Züge ist nicht das Risiko eines einzelnen Zugs: Die Schadensraten stiegen in einem Review von etwa 18% bei Einzelzug-Evaluationen auf etwa 78% bei Mehrzug-Evaluationen; ein System, das auf isolierten Prompts zertifiziert ist, ist also für eine Interaktion zertifiziert, die Studierende nicht haben ([[pedagogical-safety]], [[privacy]]).

**Verstecken Sie die Übergabe nicht.** Eine studierende Person, die nicht erkennen kann, wann ein Tutor generiert statt abruft oder wann ein Mensch im Kreis ist, kann ihr Vertrauen nicht kalibrieren, und Automatisierungsbias wirkt am saubersten, wenn das System richtig liegt und der Mensch aufgehört hat zu prüfen ([[automation-bias]], [[trust-calibration]]).

**Gestalten Sie nicht für den Benchmark und behaupten Sie dann den Klassenraum.** Benchmark-Leistung ist eine Eigenschaft des Benchmarks. Berichten Sie die getesteten Nutzungsbedingungen, die Population und die Aufgaben; sonst wird die Zahl als Versprechen über eine andere Umgebung gelesen ([[limitations-in-aied-research]]).

**Machen Sie das Werkzeug nicht zum einzigen Weg zur Hilfe.** Wenn der Zugang einer studierenden Person zu Feedback von der Verfügbarkeit, dem Kontingent oder der Lizenz eines Modells abhängt, ist die Gerechtigkeitsfrage bereits durch die Beschaffung entschieden ([[equity-in-ai-education]]).

## Für die Bildungsadministration

**Kaufen Sie Fähigkeitsbehauptungen nicht als Ergebnisbeleg.** Anbieter können ein Produkt demonstrieren; nur eine Evaluation kann Lernen demonstrieren. Verlangen Sie unbegleitete Ergebnisse, Subgruppenergebnisse, Abbruchquoten und einen Plan dafür, was nach Ende des Piloten geschieht ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Setzen Sie keine Überwachung ein, weil sie verfügbar ist.** Proctoring-Systeme erfassen Gesichtsbilder, Identitätsdokumente, Raumscans einschließlich 360-Grad-Schwenks und Mikrofon-Audio, und ein Review von 80 Studien fand, dass nur 25% die Berichtsstandards für die Fragen erfüllten, die eine Einrichtung vor dem Einsatz beantwortet haben muss ([[privacy]], [[remote-proctoring]]). Die Kosten landen bei Studierenden; die Evidenzbasis ist dünner, als der Vertrag nahelegt.

**Schreiben Sie keine reine Verbotsrichtlinie und nennen Sie sie Governance.** Ein Verbot ohne Assessment-Neugestaltung, ohne Unterstützung und ohne Einspruchsweg verschiebt das Verhalten statt es zu verhindern, und es bestraft die Studierenden, die am wenigsten in der Lage sind, eine falsche Beschuldigung anzufechten. Politik muss auch die bewertende Person abdecken: Zwei von fünf indirekten Prompt-Injection-Strategien, die in eine Einreichung eingebettet waren, erhöhten die Note eines durchfallenden Essays ([[institutional-ai-policy]], [[course-ai-policy]]).

**Setzen Sie Adoption nicht mit Verbesserung gleich.** Ein Dashboard, das Nutzung, Zufriedenheit und Abschluss berichtet, wird wie Erfolg aussehen, während das Lernmaß flach bleibt. Legen Sie vorab fest, welches Ergebnis Sie den Vertrag kündigen lässt ([[ai-ed-evaluation]]).

**Lassen Sie Barrierefreiheit nicht als Antrag auf Nachteilsausgleich ankommen.** In einem Review von 40 Studien zu digitalen assistiven Technologien für neurodivergente Studierende machten 28 eine formale Diagnose zur Teilnahmebedingung – ein diagnose-gesteuertes Modell, das jede lernende Person mit Bedarf und ohne Etikett ausschließt ([[accessibility]], [[universal-design-for-learning]]).

## Für Bildungsforschende

**Lassen Sie Selbstauskunft nicht die Kausalbehauptung tragen.** Zuversicht, wahrgenommenes Lernen und Zufriedenheit sind Ergebnisse, aber sie sind nicht die Ergebnisse, die die meisten Studien zu messen behaupten. Die [[empathy|Empathie]]-Literatur ist der klarste Fall: Ein Feld, das Empathie lehren will, misst überwiegend Komfort, und der stärkste Review über 17 Studien fand Zuversichtszuwächse weit häufiger als Evidenz für Empathie selbst ([[self-report-measures]], [[empathy]]).

**Zitieren Sie keinen Effekt ohne sein Design.** In einem kritischen Review von 80 HCI-Studien zu kritischem Denken mit KI liefen 42 ohne Kontrollgruppe. Ein Schlagzeilen-Effekt von 30 Studierenden in einem Kurs an einem Standort ist die übliche Form einer fragilen Behauptung ([[limitations-in-aied-research]]).

**Berichten Sie Heterogenität nicht ohne das Modell.** Dieselben Daten ergeben I² = 82.98% unter einem Fixed-Effect-Modell und 15.75% unter einem Random-Effects-Modell; ein zitiertes I² ohne sein Modell ist nicht interpretierbar ([[meta-analysis-systematic-review]]).

**Generalisieren Sie nicht aus einem einzigen Kontext und nennen Sie es einen Befund.** Ein Kurs, eine Einrichtung, eine Modellversion, eine Sprache. Modellverhalten ändert sich mit jedem Release, und Detektoren, die auf einer Generation trainiert wurden, verlieren Recall bei der nächsten ([[research-gaps-aied]], [[ai-detection]]).

**Behandeln Sie eine Korrelation zwischen Interaktion und Ergebnis nicht als Mechanismus.** Prompt-Volumen misst kognitive Auslagerung nicht – Cluster nach Volumen unterschieden sich nicht in der Verteilung kognitiver Arbeit, und handkodierter Dialog fand in 49.6% von 125 Dialogen gar kein Offloading ([[cognitive-offloading]]). Messen Sie die Arbeit, nicht ihre sichtbare Spur.

**Veröffentlichen Sie keinen Limitation-Absatz, der vor der Studie hätte geschrieben werden können.** Benennen Sie die konkrete Bedrohung, die konkrete Zahl und die Behauptung, die sie begrenzt. Das macht eine Limitation für die nächste Leserin nutzbar ([[interpreting-and-applying-aied-research]]).

## Warum diese Dinge zusammengehören

Jeder Punkt oben ist ein Fall davon, dass ein Proxy zum Urteil erhoben wird: Der Essay steht für die schreibende Person, der Score steht für das Fehlverhalten, das Lächeln steht für die Empathie, die Demo steht für das Lernen, die Richtlinie steht für die Governance. Die Korrektur ist immer derselbe Schritt – das Konstrukt benennen, ein Maß finden, das auch anders ausgehen könnte, und es neben dem bequemen erheben.

Das ist auch der Grund, warum diese Warnungen keine Liste von Dingen sind, die immer falsch sind. Ein Detektor kann ein Grund sein, mit einer studierenden Person zu sprechen. Ein Chatbot kann eine nützliche Übung sein. Ein Dashboard kann ein Anlass sein, eine Frage zu stellen. Der Schaden liegt in der Substitution, nicht im Werkzeug.

## Was Sie diese Woche tun können

- Wählen Sie eine benotete Aufgabe und schreiben Sie auf, was sie mit geschlossenem Werkzeug zeigen würde. Wenn die Antwort „nichts anderes“ ist, ist die Aufgabe das Problem.
- Fügen Sie einem Kurs, der derzeit nur unterstützte Performanz berichtet, ein unbegleitetes Maß hinzu.
- Lesen Sie den Proctoring- oder KI-Werkzeugvertrag Ihrer Einrichtung auf Aufbewahrung, Sekundärnutzung und Bedingungen bei Datenpannen – und prüfen Sie, ob der Einwilligungstext beschreibt, was das System tatsächlich erfasst.
- Bitten Sie einen Anbieter um unbegleitete Ergebnisse und Subgruppenergebnisse. Wenn die Antwort eine Demo ist, haben Sie Ihre Antwort.
- Verbringen Sie in Ihrer nächsten Lehrkräfte-Sitzung die zweite Hälfte mit Assessment-Neugestaltung statt mit Prompts.

## Wie es weitergeht

- [[addressing-common-misconceptions-ai-education]] — die Überzeugungen hinter diesen Praktiken und wie man sie ohne Herablassung korrigiert.
- [[limitations-in-aied-research]] — was die Evidenzbasis noch nicht stützen kann.
- [[reducing-ai-misuse]] — strukturelle Hebel gegen Missbrauch und warum sie Ermahnung schlagen.
- [[pedagogical-safety]] — was ein Tutor einer lernenden Person antun kann, während er jede Inhaltsprüfung besteht.
- [[should-we-use-ai-detectors]] — die Detektor-Evidenz vollständig.
- [[checking-whether-educational-ai-works]] — wie man eine Behauptung bewertet, bevor man sie übernimmt.
