---
title: "Was sollten Pädagoginnen und Pädagogen im Umgang mit KI vermeiden?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-11T06:20:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Der größte Teil der Orientierung zu KI in der Bildung sagt, was man versuchen sollte. Diese Seite sammelt die Praktiken, von denen die Evidenz sagt, dass man sie beenden sollte, geordnet nach der Rolle, die sie beenden müsste. Falsche Überzeugungen werden anderswo behandelt: Die [[addressing-common-misconceptions-ai-education|FAQ zu Missverständnissen]] übernimmt das, und die Konzeptseite [[misconceptions]] erklärt, warum sie fortbestehen. Was die Forschung noch nicht sagen kann, gehört zu den [[limitations-in-aied-research|Grenzen der AIEd-Forschung]]. Was hier folgt, ist der Schritt nach der Überzeugung, also was Menschen tun, was es kostet und was stattdessen zu tun ist.

Drei Fehlformen wiederholen sich über alle Rollen hinweg.

1. **Substitution.** Ein Werkzeug vollzieht das Denken, das die lernende Person vollziehen sollte, und die Ausgabe wird bewertet, als hätte sie es getan. Der Essay, der eingereicht wird, ist ein Protokoll dessen, was das Modell kann, nicht dessen, was der Studierende kann.
2. **Unverdiente Evidenz.** Ein Signal, das billig zu erheben ist, etwa Zuversicht, Flüssigkeit, Engagement oder eine Abschlussquote, wird als Beleg für etwas behandelt, das es nicht zeigen kann. Ein Dashboard kann vierzig Minuten in einer Tutorensitzung melden; es kann nicht melden, ob jemand die quadratische Formel gelernt hat.
3. **Struktur der Ermahnung überlassen.** Eine Warnung, ein Richtliniensatz oder eine Schulung soll die Arbeit tun, die Interface-Design, Assessment-Design oder Governance tun müssen. Der Lehrplan sagt, KI verantwortungsvoll zu nutzen, und der Tutor übergibt trotzdem bei der ersten Eingabe die fertige Antwort.

## Die Kurzfassung

**1.** Bewerten, zitieren oder bewerben Sie niemals eine Ausgabe als Beleg für die Fähigkeit, die sie erzeugt hat.

**2.** Erheben Sie jedes Mal das unbegleitete Maß neben dem unterstützten.

**3.** Behandeln Sie Flüssigkeit, Zuversicht und Engagement als Merkmale der Nutzung, nicht als Lernen.

**4.** Setzen Sie die Schutzmaßnahme in den Arbeitsablauf, nicht in eine Warnung.

**5.** Gehen Sie davon aus, dass alle Daten, die das Werkzeug sehen kann, aufbewahrt, kombiniert und kompromittiert werden.

**6.** Wenn die Behauptung mit einer Demo, aber ohne Vergleich kommt, ist es Marketing.

## Für Lehrende

**Zertifizieren Sie Ausgabe nicht als Fähigkeit.** Eine polierte Einreichung ist Beleg einer polierten Einreichung. Wenn eine studierende Person eine Literaturübersicht einreicht, deren Quellen Sie mit nichts abgleichen können, was der Kurs gelehrt hat, und das Assessment nicht unterscheiden kann, was diese Person ohne Hilfe kann, hat das Assessment aufgehört, das zu messen, was der Abschluss behauptet ([[assessment-validity]], [[authentic-assessment]]). Die Lösung ist eine Neugestaltung der Aufgabe; ein strengerer Ehrenkodex wird es nicht leisten.

**Nutzen Sie einen Detektor-Score nicht als Beweis für Fehlverhalten.** In einer kontrollierten Studie mit 642 veröffentlichten Abstracts markierten Detektoren 38–80% richtlinienkonformer leichter KI-Bearbeitung und 9–15% unveränderten menschlichen Schreibens, während sie weniger als 4% der Umschreibungen erwischten, die durch einen Humanisierungsdienst gelaufen waren ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Ein unabhängiger Benchmark ergab, dass keines von 14 kommerziellen Werkzeugen 80% Genauigkeit erreichte, und einfaches Paraphrasieren halbiert selbst diesen Wert ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Bei realistischen Basisraten überwiegen falsch Positive ([[should-we-use-ai-detectors]]). Ein Detektor kann ein Gespräch beginnen; er kann keines beenden.

**Fügen Sie KI nicht einem Assessment hinzu, das Sie nicht neu gestaltet haben.** Ein Werkzeug an eine Aufgabe zu schrauben, die für unbegleitete Performanz entworfen wurde, erzeugt genau die Noteninflation, die den Verlust verdeckt, mit Hausaufgaben hoch und Prüfung runter. Fragen Sie bei jeder benoteten Aufgabe, was die unbegleitete Version zeigen würde, und reparieren Sie zuerst die Aufgabe ([[reducing-ai-misuse]]). Wenn das Aufgabenblatt für zu Hause und das Quiz im Unterricht dieselbe Fertigkeit prüfen, misst nur eines von beiden die studierende Person.

**Behandeln Sie Engagement nicht als Lernen.** Zeit auf die Aufgabe, Zufriedenheit, Umfang der Hilfesuche und Chat-Aktivität lassen sich alle leicht instrumentieren und sind alle mit gar keinem Lernen vereinbar. In einem 3 × 2 Experiment mit 186 Teilnehmenden, die Zivilfälle auf einer LLM-gestützten Plattform beurteilten, erzeugte eine Leitplanke, die den Wechsel zu einer falschen KI-Position von 42–60,5% auf 5,7–8,2% senkte, innerhalb der Sitzung keinen messbaren Lerneffekt (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Das Verhalten änderte sich; das Lernmaß nicht ([[student-engagement]]).

**Verlassen Sie sich nicht auf eine Warnung, wo die Oberfläche einschränken könnte.** Ein Tutor, der die fertige Antwort erzeugen kann, wird sie unter Termindruck erzeugen, egal was der Lehrplan sagt. Die Leitplanke, die wirkt, ist in die Interaktion eingebaut ([[reducing-ai-misuse]], [[pedagogical-safety]]). Die endgültige Antwort in den ersten zwei Versuchen zurückzuhalten ist eine Designentscheidung; Studierende zu bitten, nicht danach zu fragen, ist eine Bitte.

**Kleben Sie keine Arbeiten von Studierenden, IEPs, Disziplinarakten oder identifizierbare Entwürfe in ein Verbraucherwerkzeug.** Datenminimierung ist eine Designentscheidung, die Sie im Namen der studierenden Person treffen, ob Sie darüber nachgedacht haben oder nicht ([[privacy]]). Das kostenlose Chatbot-Konto, das eine Frage zum Verhaltensplan einer studierenden Person beantwortet, ist zugleich eine Kopie dieses Plans auf dem Server von jemand anderem.

## Für Lernende

**Geben Sie nicht den Teil ab, den Sie üben sollen.** Angenommen, die Aufgabe ist ein Essay aus fünf Absätzen: Sie fügen die Aufgabenstellung in einen Chatbot ein, nehmen den Entwurf, den er zurückgibt, und reichen ihn ein. Was Sie einreichen, ist ein Protokoll dessen, was das Modell kann. Die Frage ist, welche kognitive Arbeit sich verschiebt, nicht wie viel KI Sie nutzen. Hausaufgaben auszulagern hebt die Hausaufgabennoten und senkt die Noten in der Prüfung ohne Hilfsmittel: Bei 26.811 Sekundarschülerinnen und -schülern, die 30 Monate lang begleitet wurden, stiegen die Hausaufgabennoten um 18% und die Prüfungsnoten fielen innerhalb von sechs Monaten um 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei und Wu, 2026]]). Die Übung, die abrufbares Wissen aufbaut, ging an das Werkzeug ([[reducing-ai-misuse]]). Wenn die Übung der Punkt ist, kann das Werkzeug die Übung nicht machen.

**Lesen Sie Flüssigkeit nicht als Genauigkeit.** Fließender Text ist die Ausgabe eines [[llm|Sprachmodells]], ob der Inhalt wahr ist oder nicht, und der Mechanismus, der ihn überzeugend macht, ist derselbe, der ihn falsch macht ([[hallucination-risk]]). Prüfen Sie die konkrete Behauptung, nicht den Ton des Absatzes. Diese Gewohnheit entsteht selten von selbst: In einem Panel mit passiver Beobachtung von 900 Erwachsenen in den USA, die eine KI-Zusammenfassung erhielten, folgten Lesende in 1% der Besuche einer darin zitierten Quelle ([[trust-calibration-chatbots-design-problem-2026|Jaidka und Cai, 2026]]). Wenn Ihre Aufgabe drei Quellen verlangt, öffnen Sie alle drei.

**Akzeptieren Sie Zustimmung nicht als Feedback.** Modelle bestätigen deutlich mehr als Menschen: Über 11 Modelle hinweg bestätigten KI-Antworten Nutzende 49% häufiger als menschliche Antworten, und der Überschuss ist das, was die Interaktion unterstützend wirken lässt ([[ai-personal-coach-review-benefits-risks-2026|Potel und Kumashiro, 2026]]). Ein Tutor, der Ihnen nie widerspricht, hat das korrektive Signal entfernt, um dessentwillen Sie gekommen sind ([[ai-sycophancy]]). Bitten Sie um den Einwand, nicht um die Bestätigung: „Was ist an diesem Argument falsch, und was würde ein Skeptiker sagen?“

**Tauschen Sie keine Frage gegen eine Antwort, wenn Sie feststecken.** Das produktive Ringen, das Sie überspringen, ist das Lernen. Hilfesuche, die eine Antwort abruft, ist ein anderes Verhalten als Hilfesuche, die einen Hinweis abruft ([[help-seeking]], [[desirable-difficulties]]). Nutzen Sie Werkzeuge, die die fertige Antwort zurückhalten, und fragen Sie nach dem nächsten Schritt statt nach der Lösung.

**Kleben Sie keine persönlichen, gesundheitlichen oder familiären Informationen in ein Werkzeug, um eine bessere Antwort zu bekommen.** Das Werkzeug hat keine Pflicht, sie zu vergessen, und die Datenschutzkosten sind in der Qualität der Antwort nicht sichtbar ([[privacy]]). Ein besserer Prompt braucht weder Ihre Diagnose noch Ihre Adresse oder die Namen Ihrer Familie.

## Für Eltern und Familien

**Machen Sie die Hausaufgaben nicht mit dem Werkzeug und lassen Sie sie nicht neben sich erledigen.** Das Muster in den Daten ist Noteninflation mit verborgenen Kosten: Im selben 30-Monats-Panel stiegen die Hausaufgabennoten um 18%, während die Noten in Prüfungen ohne Hilfsmittel um 20% fielen ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei und Wu, 2026]]). Ein Kind, das perfekte Hausaufgaben nach Hause bringt und die Klassenarbeit zum Kapitel nicht besteht, zeigt Ihnen genau diese Lücke. Was Sie prüfen können, ist der Prozess. Kann Ihr Kind den Schritt erklären, eine Aufgabe auf Papier wiederholen und sagen, bei welchem Teil es unsicher war? Wenn nicht, hat das Werkzeug die Aufgabe erledigt.

**Lassen Sie einen Chatbot nicht zum Vertrauten werden.** Sykophantische Systeme bestätigen weit mehr als Menschen, 49% mehr über 11 Modelle, und diese Bestätigung ist es, was sie sicher wirken lässt, um mit ihnen zu sprechen ([[ai-personal-coach-review-benefits-risks-2026|Potel und Kumashiro, 2026]]). In einer großen Längsschnittstudie wandten sich Nutzende für persönlichen Rat fast so oft an sykophantische KI wie an enge Freunde und Familie, bei geringerer Zufriedenheit in ihren realen Beziehungen ([[sycophantic-ai-social-interaction-2026]]). Ein Kind, das Belastung zu einem Modell bringt, das immer zustimmt, wird nicht gehört. Es wird gespiegelt. Wenn Ihr Kind mit einem Chatbot über eine Freundschaft oder einen Verlust spricht, ist das der Moment, in dem Sie fragen sollten, wem es sonst davon erzählt hat.

**Geben Sie einem kleinen Kind keinen generativen Chatbot und nennen Sie es beaufsichtigt, weil Sie im Raum sind.** Die altersgestufte Orientierung ist konkret: gerüstete, nicht-generative Aktivitäten für 9- bis 12-Jährige, beaufsichtigte generative Nutzung mit ethischer Reflexion ab 13 ([[ai-guidance-children-under-13]]). Für die jüngsten Kinder betrifft das Risiko den Glauben. Präoperationale Kinder akzeptieren generierte Inhalte als wahr, und die Systeme sind in ihrem Feedback nicht entwicklungsgerecht kalibriert. Erwachsene Mitnutzung heißt, neben dem Kind zu sitzen und zu fragen, was das Spielzeug gerade getan hat, nicht von der Tür aus zuzusehen ([[early-childhood-elementary-ai-education]]).

**Nehmen Sie nicht an, dass das Werkzeug der Schule die Daten Ihres Kindes schützt, weil die Schule es gewählt hat.** Fragen Sie, was aufbewahrt wird, wie lange, ob es irgendetwas trainiert und wer es sonst sieht ([[privacy]]). Bewusstsein folgt nicht aus Exposition: Einen Monat nach einer Unterrichtsstunde, in der eine Klasse der Jahrgangsstufe 7 ihr eigenes protokolliertes Verhalten live projiziert sah, wählten 66% der 47 Schülerinnen und Schüler noch die am wenigsten schützende Chatbot-Einstellung ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Stellen Sie die Fragen schriftlich an die Schule und verlangen Sie die Antworten schriftlich.

**Nutzen Sie ein Detektor-Ergebnis nicht, um Ihr Kind zu beschuldigen oder eine Beschuldigung einer Schule zu stützen.** In einer kontrollierten Studie mit 642 veröffentlichten Abstracts markierten Detektoren 9–15% unveränderten menschlichen Schreibens und erwischten weniger als 4% humanisierter KI-Umschreibungen ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Bei realistischen Basisraten überwiegen falsch Positive ([[ai-detection]]). Behandeln Sie eine Markierung als Grund, die Entwurfshistorie und ein Gespräch zu erbitten, nicht als Befund.

**Schließen Sie nicht, dass ein Verbot des Werkzeugs die sichere Option ist.** Untervertrauen ist ein Kalibrierungsfehler mit eigenen Kosten, nämlich verzichteter Fähigkeit, und die Fertigkeit, die zählt, ist passende Zuversicht, nicht Vermeidung ([[trust-calibration]]). Der nützliche elterliche Schritt ist derselbe, den die Forschung für Studierende stützt: einen Prüfschritt verlangen und ihn billig genug machen, dass ein müdes Kind ihn tatsächlich geht ([[verify-ai-output]]). Zu fragen, welche Quelle ein Chatbot verwendet hat, kostet eine Minute; den Chatbot zu verbieten kostet die Übung.

**Verwechseln Sie einen Inhaltsfilter nicht mit Sicherheit.** Filter adressieren, was ein System sagt. Sie adressieren nicht, was eine Interaktion mit einer lernenden Person macht: erodierte Übung, sykophantische Zustimmung oder ungleichmäßige Verweigerungen ([[pedagogical-safety]]).

## Für Lehr- und Curriculumsentwicklerinnen und -entwickler

**Führen Sie keine Werkzeugschulung durch und nennen Sie sie KI-Kompetenz.** Eine Sitzung zum [[prompt-engineering|Prompting]] lehrt die Oberfläche eines Produkts. [[ai-literacy|KI-Kompetenz]] ist die Fähigkeit zu beurteilen, wann das Werkzeug genutzt werden sollte, was es tut und was zu prüfen ist. Lehrkräfte, die die Knöpfe ohne das Urteil lernen, gehen mit Zuversicht und ohne Kalibrierung ([[teacher-ai-competency]]). Eine Fortbildung, die damit endet, dass alle einen Unterrichtsplan erzeugen können und niemand sagen kann, wann dieser Plan nicht genutzt werden sollte, hat die Oberfläche gelehrt.

**Führen Sie keine einmalige Fortbildung durch und erwarten Sie, dass sich die Praxis ändert.** Die Evidenz zu [[professional-training|beruflichem Lernen]] ist konsistent zu Dauer und Nachverfolgung: Einzelveranstaltungen bewegen die selbstberichtete Zuversicht, selten das Klassenraumverhalten, und der Zuversichtszuwachs kann das Ausbleiben von Veränderung verdecken ([[educational-development]]). Eine zweistündige Sitzung im August ohne Nachverfolgung im Oktober ist eine Zuversichtsintervention.

**Ignorieren Sie nicht das Assessmentsystem, das Sie stehen lassen.** Lehrende übernehmen die Praxis, die Sie lehren, nur, wenn das Assessment, an dem sie gemessen werden, sie nicht bestraft. Eine Werkstatt zu KI-resistentem Aufgabendesign, die neben einem unveränderten Prüfregime läuft, lehrt Lehrende, dass die Schulung dekorativ ist.

**Modellieren Sie nicht die unkritische Nutzung, vor der Sie warnen.** Ein Werkzeug vor Lehrenden zu demonstrieren, indem Sie einen Unterrichtsplan erzeugen, ohne Prüfschritt, lehrt das Publikum, dass die Ausgabe das Produkt ist. Erzeugen Sie ihn vor ihnen und markieren Sie dann die zwei Behauptungen, die geprüft werden müssen.

**Akzeptieren Sie eine Anbieter-Demo nicht als Wirksamkeitsbeleg.** Die Behauptung, die Sie bewerten, betrifft Lernen, und eine Demo zeigt Fähigkeit. Bitten Sie um unbegleitete Ergebnisse, Subgruppenergebnisse und Sicherheitstests über mehrere Züge ([[checking-whether-educational-ai-works]]).

## Für Entwicklerinnen und Entwickler von Bildungssoftware

**Optimieren Sie nicht die Kennzahl, die leicht zu protokollieren ist.** Sitzungslänge, Nachrichtenzahl und Zufriedenheitswerte verbessern sich unter fast jeder Änderung; das Lernen oft nicht. Dasselbe Team, das eine Leitplanke ausliefert, kann ein Dashboard ausliefern, das Interaktionsvolumen belohnt, und die beiden zeigen in entgegengesetzte Richtungen ([[learning-analytics]], [[student-engagement]]). Wenn Ihre Erfolgskennzahl Nachrichten pro Sitzung ist, haben Sie ein Produkt gebaut, das Studierende dafür belohnt, im Chat zu bleiben.

**Liefern Sie keinen Detektor ohne Validierungsstudie gegen das Konstrukt aus.** Ein Benchmark mit fünfzehn EEG-Modellen erreichte 0,9853 F1 unter stratifizierter Kreuzvalidierung; trial-unabhängiges Group K-Fold, das Trial-Grenzen respektiert, senkte den Spitzenwert auf 0,6038 gegenüber einem Zufallsniveau von 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara und Halloluwa, 2026]]). Ein Lächeln-Detektor kann *negativ* gegen beobachterbewertete Empathie laufen, weil ihm der Kontext fehlt, den eine menschliche Bewertungsperson hat ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Veröffentlichen Sie das Validierungsprotokoll zusammen mit der Schlagzeilenzahl.

**Leiten Sie Affekt, Aufmerksamkeit oder „Engagement“ nicht aus Gesichtern und Körpern ab, ohne Einwilligung und einen erklärten Zweck.** Das Risiko über mehrere Züge ist nicht das Risiko eines einzelnen Zugs: In einem Review zur pädagogischen Sicherheit stiegen die Fehler von 17,7% bei Einzelzug-Evaluationen auf 77,8% bei Mehrzug-Evaluationen ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Ein System, das auf isolierten Prompts zertifiziert ist, ist für eine Interaktion zertifiziert, die Studierende nicht haben ([[pedagogical-safety]], [[privacy]]).

**Verstecken Sie die Übergabe nicht.** Eine studierende Person, die nicht erkennen kann, wann ein Tutor generiert statt abruft oder wann ein Mensch im Kreis ist, kann ihr Vertrauen nicht kalibrieren. [[automation-bias|Automatisierungsbias]] wirkt am saubersten, wenn das System richtig liegt und der Mensch aufgehört hat zu prüfen ([[trust-calibration]]). Sagen Sie in der Oberfläche, wann eine Person die Arbeit lesen wird.

**Gestalten Sie nicht für den Benchmark und behaupten Sie dann den Klassenraum.** Benchmark-Leistung ist eine Eigenschaft des Benchmarks. Berichten Sie die getesteten Nutzungsbedingungen, die Population und die Aufgaben; sonst wird die Zahl als Versprechen über eine andere Umgebung gelesen ([[limitations-in-aied-research]]).

**Machen Sie das Werkzeug nicht zum einzigen Weg zur Hilfe.** Wenn der Zugang einer studierenden Person zu [[feedback|Feedback]] von der Verfügbarkeit, dem Kontingent oder der Lizenz eines Modells abhängt, ist die Gerechtigkeitsfrage bereits durch die Beschaffung entschieden ([[equity-in-ai-education]]).

## Für die Bildungsadministration

**Kaufen Sie Fähigkeitsbehauptungen nicht als Ergebnisbeleg.** Anbieter können ein Produkt demonstrieren; nur eine Evaluation kann Lernen demonstrieren. Verlangen Sie unbegleitete Ergebnisse, Subgruppenergebnisse, Abbruchquoten und einen Plan dafür, was nach Ende des Piloten geschieht ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Eine Demo zeigt den Tutor, der ein Problem löst; sie zeigt keine studierende Person, die das nächste löst.

**Setzen Sie keine Überwachung ein, weil sie verfügbar ist.** Proctoring-Systeme erfassen Gesichtsbilder, Identitätsdokumente, Raumscans einschließlich 360-Grad-Schwenks und Mikrofon-Audio. Ein Review von 80 Studien fand, dass nur 25% ethische Fragen überhaupt behandelten, 35% ihren Datensatz nicht offenlegten und 30% nicht reproduzierbar waren ([[automated-online-exam-proctoring-decade-review-2026|Malhotra und Chhabra, 2026]]). Die Kosten landen bei Studierenden, und die Evidenzbasis ist dünner, als der Vertrag nahelegt ([[privacy]], [[remote-proctoring]]).

**Schreiben Sie keine reine Verbotsrichtlinie und nennen Sie sie Governance.** Ein Verbot ohne Assessment-Neugestaltung, ohne Unterstützung und ohne Einspruchsweg verschiebt das Verhalten statt es zu verhindern, und es bestraft die Studierenden, die am wenigsten in der Lage sind, eine falsche Beschuldigung anzufechten. [[governance|Politik]] muss auch die bewertende Person abdecken: In einem Red-Team-Test eines alltäglichen Bewertungsablaufs brachten zwei von fünf Prompt-Injection-Strategien, die in einer Einreichung verborgen waren, einen durchfallenden Essay mit 100% und 94% Erfolg je nach Dateityp zum Bestehen ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Eine Politik, die Studierende einschränkt und nicht die Bewertungspipeline, ist eine halbe Politik.

**Setzen Sie Adoption nicht mit Verbesserung gleich.** Ein Dashboard, das Nutzung, Zufriedenheit und Abschluss berichtet, wird wie Erfolg aussehen, während das Lernmaß flach bleibt. Legen Sie vorab fest, welches Ergebnis Sie den Vertrag kündigen lässt ([[ai-ed-evaluation]]). Schreiben Sie diese Zahl auf, bevor der Pilot beginnt.

**Lassen Sie Barrierefreiheit nicht als Antrag auf Nachteilsausgleich ankommen.** In einem Scoping-Review von 40 Studien zu digitalen assistiven Technologien für [[neurodiversity|neurodivergente Studierende]] machten 28 eine formale Diagnose zur Teilnahmebedingung. Dieses diagnose-gesteuerte Modell schließt jede lernende Person mit Bedarf und ohne Etikett aus ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Für Bildungsforschende

**Lassen Sie Selbstauskunft nicht die Kausalbehauptung tragen.** Zuversicht, wahrgenommenes Lernen und Zufriedenheit sind Ergebnisse, aber sie sind nicht die Ergebnisse, die die meisten Studien zu messen behaupten. Die [[empathy|Empathie]]-Literatur ist der klarste Fall: Ein Feld, das Empathie lehren will, misst überwiegend Komfort, und ein Review über 17 Studien fand Zuversichtszuwächse weit häufiger als Evidenz für Empathie selbst ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail und Zafira, 2026]]; [[self-report-measures]]).

**Zitieren Sie keinen Effekt ohne sein Design.** In einem kritischen Review von 80 HCI-Studien zu [[critical-thinking|kritischem Denken]] mit KI liefen 42 (52%) ohne Kontrollgruppe ([[critical-review-critical-thinking-hci-research-ai-2026]]). Ein Schlagzeilen-Effekt von 30 Studierenden in einem Kurs an einem Standort ist die übliche Form einer fragilen Behauptung ([[limitations-in-aied-research]]).

**Berichten Sie Heterogenität nicht ohne das Modell.** Dieselben Daten ergeben I² = 82,98% unter einem Fixed-Effect-Modell und I² = 15,75% unter einem Random-Effects-Modell ([[ai-supported-instruction-stem-meta-analysis-2026]]). Ein zitiertes I² ohne sein Modell ist nicht interpretierbar ([[meta-analysis-systematic-review]]).

**Generalisieren Sie nicht aus einem einzigen Kontext und nennen Sie es einen Befund.** Ein Kurs, eine Einrichtung, eine Modellversion, eine Sprache. Modellverhalten ändert sich mit jedem Release, und Detektoren, die auf einer Generation trainiert wurden, verlieren Recall bei der nächsten ([[research-gaps-aied]], [[ai-detection]]).

**Behandeln Sie eine Korrelation zwischen Interaktion und Ergebnis nicht als Mechanismus.** Prompt-Volumen misst kognitive Auslagerung nicht. Cluster nach Volumen unterschieden sich nicht in der Verteilung kognitiver Arbeit, und handkodierter Dialog fand in 49,6% von 125 Dialogen gar kein Offloading ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Messen Sie die Arbeit selbst.

**Veröffentlichen Sie keinen Limitation-Absatz, der vor der Studie hätte geschrieben werden können.** Benennen Sie die konkrete Bedrohung, die konkrete Zahl und die Behauptung, die sie begrenzt. Das macht eine Limitation für die nächste Leserin oder den nächsten Leser nutzbar ([[interpreting-and-applying-aied-research]]).

## Warum diese Dinge zusammengehören

Jeder Punkt oben erhebt einen Proxy zum Urteil. Der Essay steht für die schreibende Person, der Score steht für das Fehlverhalten, das Lächeln steht für die Empathie und die Demo steht für das Lernen. Die Korrektur ist jedes Mal dieselbe: das Konstrukt benennen, ein Maß finden, das auch anders ausgehen könnte, und es neben dem bequemen erheben.

Keine dieser Warnungen bedeutet, dass das Werkzeug immer falsch ist. Ein Detektor kann ein Grund sein, mit einer studierenden Person zu sprechen. Ein Chatbot kann eine nützliche Übung sein. Ein Dashboard kann ein Anlass sein, eine Frage zu stellen. Was Schaden verursacht, ist die Substitution.

## Was Sie diese Woche tun können

- Wählen Sie eine benotete Aufgabe und schreiben Sie auf, was sie mit geschlossenem Werkzeug zeigen würde. Wenn die Antwort „nichts anderes“ ist, ist die Aufgabe das Problem.
- Fügen Sie einem Kurs, der derzeit nur unterstützte Performanz berichtet, ein unbegleitetes Maß hinzu.
- Lesen Sie den Proctoring- oder KI-Werkzeugvertrag Ihrer Einrichtung auf Aufbewahrung, Sekundärnutzung und Bedingungen bei Datenpannen, und prüfen Sie, ob der Einwilligungstext beschreibt, was das System tatsächlich erfasst.
- Bitten Sie einen Anbieter um unbegleitete Ergebnisse und Subgruppenergebnisse. Wenn die Antwort eine Demo ist, haben Sie Ihre Antwort.
- Verbringen Sie in Ihrer nächsten Lehrkräfte-Sitzung die zweite Hälfte mit Assessment-Neugestaltung statt mit Prompts.

## Wie es weitergeht

- [[addressing-common-misconceptions-ai-education]]: die Überzeugungen hinter diesen Praktiken und wie man sie ohne Herablassung korrigiert.
- [[limitations-in-aied-research]]: was die Evidenzbasis noch nicht stützen kann.
- [[reducing-ai-misuse]]: strukturelle Hebel gegen Missbrauch und warum sie Ermahnung schlagen.
- [[pedagogical-safety]]: was ein Tutor einer lernenden Person antun kann, während er jede Inhaltsprüfung besteht.
- [[should-we-use-ai-detectors]]: die Detektor-Evidenz vollständig.
- [[checking-whether-educational-ai-works]]: wie man eine Behauptung bewertet, bevor man sie übernimmt.
