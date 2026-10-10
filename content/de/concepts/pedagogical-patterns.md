---
title: Pädagogische Muster
created: "2026-09-30T16:20:00-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
translation_of: concepts/pedagogical-patterns
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Pädagogische Muster** — die *geordneten Sequenzen* von Aktivität, die die Forschung in dieser Wissensbasis geprüft hat, mit Aufmerksamkeit dafür, wo [[generative-ai|generative KI]] in die Sequenz eintritt und wo [[human-in-the-loop-ai|menschliches Urteil]] verbleiben muss. Wo [[pedagogy|Pädagogik]] Ansätze katalogisiert ([[active-learning|aktives Lernen]], [[problem-based-learning|problembasiertes Lernen]], [[collaborative-learning|kollaboratives Lernen]]) und [[learning-design|Lerndesign]] beschreibt, wie ein Kurs gestaltet wird, katalogisiert diese Seite, was Studierende und Lehrende tatsächlich *tun*, in welcher Reihenfolge, und was geschah, als es versucht wurde. PAIRR — entwerfen, Peer-Review, KI-Review, Reflexion, Überarbeitung — ist das am besten dokumentierte Beispiel, und das Muster dahinter kehrt über Fächer hinweg wieder: Anstrengung zuerst, KI an zweiter Stelle, menschliches Urteil beim Einsatz.

## Fragen zum Nachdenken

- Ein Muster ist eine *Sequenz*, kein Werkzeug. Nehmen Sie eine Aufgabe, die Sie unterrichten, und schreiben Sie die Reihenfolge der Züge auf, die eine studierende Person macht. Wo in dieser Reihenfolge würde KI helfen, und wo würde sie die Arbeit tun, die die studierende Person tun soll?
- Mehrere Muster hier geben KI bewusst eine *schwache* Rolle — Hinweise statt Antworten, Fragen statt Korrekturen. Warum sollte ein bewusst weniger hilfreicher Tutor besseres Lernen erzeugen, und was bedeutet das für die KI-Werkzeuge, die Ihre Institution kauft?
- Das am besten belegte Muster auf dieser Seite ([[learning-by-teaching|Lernen durch Lehren]] einer KI) bittet Studierende zu erklären, und es verbessert Erklärung und Fragenqualität, aber *nicht* objektiven Abruf. Wenn Sie es übernähmen, was würden Sie daran ändern, wie Sie bewerten?
- Wenn [[ai-feedback-quality|KI-Feedback]] höherer Qualität war als Lehrkräftefeedback, überarbeiteten Studierende nicht mehr. Was legt das nahe über den Unterschied zwischen dem Produzieren von Feedback und dem Bringen von Studierenden, es zu nutzen?
- Kontexte verändern die Antwort: manche Muster wurden online und asynchron getestet, andere face-to-face mit einem Labor. Welche davon könnten Sie in Ihrem eigenen Setting ohne neue Werkzeuge durchführen, und welche würden Infrastruktur brauchen, die Sie nicht haben?
- Fast jedes Muster hier behält einen Menschen am Punkt des Urteils — Benotung, Verifikation oder Interpretation. Ist das eine Designentscheidung, eine evidenzbasierte Notwendigkeit, oder eine Grenze dessen, was bisher getestet wurde?

## Einführung

Pädagogik beantwortet *wie sollen wir lehren*; diese Seite beantwortet eine engere, operativere Frage: **in welcher Reihenfolge sollten die Züge geschehen, und wo gehört KI in diese Reihenfolge?** Die Unterscheidung zählt, weil dasselbe Werkzeug je nach seiner Position in einer Sequenz entgegengesetzte Ergebnisse erzeugt. Ein generative-KI-Assistent, der platziert wird, bevor eine studierende Person ein Problem versucht, senkt verlässlich die spätere ungestützte Leistung; platziert nach einem Versuch, mit Hinweisen statt Antworten, beseitigt dieselbe Klasse von System diesen Schaden.

Jedes Muster unten wird mit einem Evidenzstatus berichtet, weil die Abdeckung der Wissensbasis ungleich ist und der Unterschied für jeden zählt, der über die Annahme entscheidet:

- **Getestet** — mindestens ein Artikel berichtet einen kontrollierten oder vergleichenden Test.
- **Gemischt** — getestet, aber ohne Kontrolle, mit widersprüchlichen Ergebnissen, oder mit der getesteten Variable, die mit etwas anderem verflochten ist.
- **Designvorschläge** — die Idee erscheint nur als Vorschlag oder Rahmenwerk, ohne berichteten Test. Diese werden separat am Ende der Seite gesammelt, in *Designvorschläge (noch nicht getestet)*, und sind keine Evidenz.

Die Muster werden nach der Funktion gruppiert, die sie in einer Lektion erfüllen: Anstrengung vor Hilfe platzieren, KI-Feedback mit menschlichem Feedback paaren, Verständnis statt Ausgabe verifizieren, die lernende Person zur Lehrenden machen, Zusammenarbeit strukturieren, und eine spezifische [[misconceptions|Fehlvorstellung]] konfrontieren. Kontexte (online, face-to-face, blended) und Fächer werden bei jedem berichtet und am Ende zusammengefasst.

## Muster, die Anstrengung vor Hilfe platzieren

Diese Muster teilen eine strukturelle Behauptung: die lernende Person muss sich auf einen Versuch festlegen, bevor die KI beiträgt. Es ist die konsistentest gestützte Designregel in der Wissensbasis.

### Abrufen oder Versuchen, bevor die KI antwortet

**Evidenz: getestet.** Die Sequenz ist: aus dem Gedächtnis versuchen, Anweisung oder ein Beispiel erhalten, in verteilten Sitzungen üben, die KI erst konsultieren, nachdem man sich auf einen Versuch festgelegt hat, antwortskontingentes Feedback erhalten, das die Fehlvorstellung sondiert, und erst vorankommen, wenn die Antwort angemessenes Engagement zeigt.

Eine adaptive verteilte-Abruf-Bedingung erzielte die höchsten Posttest-Werte (M = 78.19) und übertraf signifikant lernendengesteuertes KI-Studium (M = 67.28, d = 0.92, p = .003) über 89 Studierende in einem blended Statistik-Kurs, während feste Verteilung statistisch nicht von adaptiver zu unterscheiden war ([[adaptive-pretesting-retention|Akgun & Toker, 2026]]). Der Kontrastfall ist entscheidend: in einer [[rct|randomisierten Studie]] mit 120 Studierenden behielt die Gruppe, die *mit* uneingeschränktem ChatGPT studierte, bei einem Überraschungstest 45 Tage später weniger — 57.5% korrekt gegenüber 68.5% bei traditionellen Lernenden, t(83) = −3.19, p = .002, d = 0.68 —, und hatte auch etwa 45% weniger gelernt, wobei der Nachteil eine Kovariate für die Lernzeit überlebte ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]). Ein vorregistriertes randomisiertes Feldexperiment in einem Online-MBA fand, dass Zugewinne *abgeschlossenen Wochen* folgten statt Minuten der Exposition (+2.00 Punkte pro zusätzlicher abgeschlossener Tutoring-Woche, p = .018), was sich als [[retrieval-spacing-interleaving|verteilte Übung]] liest, die mehr zählt als Gesamtzeit ([[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]).

### Produktives Scheitern: Versuch vor Anweisung

**Evidenz: gemischt, und dünner als ihr Ruf.** Studierende versuchen ein Problem, das auf ein Konzept zielt, das ihnen nicht gelehrt wurde, der Tutor hält die Lösung zurück und evoziert mehrere Versuche, Hilfe kommt nur, wenn strikt notwendig, und Konsolidierung folgt mit Vergleich und direkter Anweisung.

Die eine Feldstudie, die die volle Sequenz mit einem gesteuerten Tutor testet, nutzte 17 Schülerinnen und Schüler der Oberstufe in Singapur: die gesteuerte Bedingung erzielte einen höheren Wert bei produktivem Scheitern, signifikant für Problemkonsistenz (p = .046), und Studierende produzierten im Mittel 2.6 Repräsentationen pro Sitzung (p = .05), aber **kein Lernergebniss wurde gemessen** ([[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]). Die stärkste Unterstützung ist indirekt und kommt aus einem randomisierten Within-Subjects-Experiment mit 26 Studierenden, bei dem unmittelbar antwortendes [[scaffolding|Scaffolding]] signifikant *schlechter* abschnitt als Peer-, TA- und Tutor-Rollen bei Modellabstraktion (β = −0.692, p = .015; β = −1.039, p < .001; β = −0.769, p = .005), obwohl Studierende den direktiven Tutor *bevorzugten* — Präferenz lief der Kompetenz entgegen ([[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]).

### Fehleranalyse und fehlerhafte Beispiele

**Evidenz: gemischt.** Studierende diagnostizieren einen Fehler in einem Artefakt — einem KI-erzeugten Diagramm, das referentielle Integrität verletzt, einer Abfrage, die einen Join fallen lässt, einem [[llm|LLM]]-Code-Snippet —, erhalten Hinweise, die sie zwingen, die Lösung zu erschließen, statt ihnen die Korrektur in die Hand zu geben, reparieren sie, und reflektieren, welche Teile der Ausgabe unvertrauenswürdig waren.

Eine Prä-Post-Studie mit 13 Studierenden in einem Online-Datenbankkurs stieg von 4.25 auf 6.83 von 7 (t(12) ≈ 5.10, p < .001, d = 1.49) mithilfe wöchentlicher Kritik-und-Verfeinerungs-Zyklen, die auf absichtlichen KI-Versagensfällen aufbauten, aber ohne Kontrollgruppe kann der Zugewinn nicht vom [[curriculum-design|Curriculum]] oder der Lehrenden getrennt werden ([[pedagogy-ai-mistakes|Hosseini, 2026]]). Ein [[meta-analysis-systematic-review|systematischer Review]] von 72 Studien der Informatikbildung berichtet, dass Fehleranalyse eine *ausgeprägte Kompetenz* ist: Studierende schnitten beim Korrigieren LLM-erzeugten Codes signifikant schlechter ab als bei traditionellen Programmierprüfungsaufgaben ([[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]). Kein Artikel in der Wissensbasis berichtet einen kontrollierten Test von Unterricht mit fehlerhaften Beispielen als solchem.

### Ausgearbeitete Beispiele mit Selbsterklärung

**Evidenz: gemischt — die zwei Hälften divergieren.** Ein ausgearbeitetes Beispiel wird mit fehlenden Begründungen zum Vervollständigen präsentiert, oder mit zu findenden Fehlern; die studierende Person vervollständigt oder repariert es, erklärt ihre Schlussfolgerung, und versucht dann das nächste Problem.

Adaptives Zuweisen geleiteter und fehlerbehafteter Beispiele übertraf zufällige Zuweisung von Problemtypen in einer Klassenraumstudie mit 113 Studierenden (Posttest M = 72.3 und 72.5 gegenüber 65.7 Kontrolle, A = .58, p = .005 und p = .002), und die [[knowledge-tracing|Knowledge-Tracing]]-Variante verringerte die Leistungslücke um 77.1% für Studierende mit geringem [[prior-knowledge|Vorwissen]] (β = 9.4, p = .001) ([[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]). Aber das *Hinzufügen* des Selbsterklärungsschritts zu elaboriertem KI-Feedback verlor in einem vorregistrierten Experiment mit 302 Teilnehmenden bei jedem Maß: es verdoppelte die Feedbackzeit (4.1 gegenüber 2.1 min, p < .001), senkte die abgeschlossenen Probleme um 40% (2.0 gegenüber 3.4, p < .001), erzeugte keinen Zugewinn pro Episode (OR = 1.03, p = .486), und senkte die Meisterschaft am Sitzungsende (65% gegenüber 79%, d = .41, p < .001) ([[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]).

## Muster, die KI-Feedback mit menschlichem Feedback paaren

Der am häufigsten replizierte Befund der Wissensbasis über KI-Feedback ist, dass es *kombiniert* mit menschlichem Feedback besser wirkt als allein — und dass seine Qualität nicht bestimmt, ob Studierende es nutzen.

### PAIRR: Peer- und KI-Review mit Reflexion

**Evidenz: gemischt (breit implementiert, nicht kontrolliert).** Studierende lesen und reflektieren, wie KI und Feedback wirken, entwerfen, geben und empfangen Peer-Review, prompten die KI um kriteriengesteuertes Feedback zum selben Entwurf, vergleichen beide kritisch, schreiben einen Überarbeitungsplan, überarbeiten, und reflektieren, welches Feedback was verändert hat.

Die größte Studie zur Nutzung von KI-Feedback durch Studierende bis heute begleitete 654 Studierende über zehn Schreibkurse und drei schreibintensive [[stem-education|STEM]]-Kurse hinweg: 58% bevorzugten kombiniertes ChatGPT- und [[peer-assessment|Peer-Feedback]], 36% nur Peer und nur 6% nur KI; 75% fanden die beiden ähnlich und gegenseitig verstärkend; KI-Feedback wurde von 31% „übermäßig allgemein“ genannt, während Peer-Feedback für 28% spezifischer war; und nur 5.3% zeigten Überzuversicht in KI-Feedback ([[pairr-ai-peer-review-2025|Sperber et al., 2025]]). Das Modell wurde auch in einem Schreibkurs für Wirtschaft im fortgeschrittenen Studium mit 34 Studierenden durchgeführt, wo etwa ein Viertel der kodierten Reflexionen Skepsis gegenüber KI-Feedback äußerte oder Ungenauigkeiten darin notierte ([[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]). Beide berichten Wahrnehmungsdaten; keiner hat eine Kontrollbedingung, weshalb das Muster *gemischt* statt *getestet* ist.

### Kombiniertes Peer- und KI-Feedback

**Evidenz: getestet.** Die vergleichende Evidenz kommt von außerhalb des PAIRR-Programms. Ein Quasi-Experiment mit 122 chinesischen EFL-Studierenden fand, dass integriertes KI-plus-Peer-Feedback verhaltensbezogenes, affektives und kognitives [[student-engagement|Engagement]] gegenüber nur-Peer-Feedback erhöhte (alle p < .001; partielles η² = 0.28, 0.28, 0.32) und das Schreiben auf allen vier IELTS-Dimensionen verbesserte (F(1,119) = 42.68, p < .001, partielles η² = 0.26), am größten bei Aufgabenerfüllung (d = 1.41) — ohne verzögerten Posttest, weshalb Dauerhaftigkeit ungemessen ist ([[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]). In einer randomisierten Studie mit 45 Lehramtsstudierenden in 12 Gruppen übertraf GenAI-gestütztes Peer-Feedback schlichtes Peer-Feedback bei Argumentation, und die *prompt-umhüllte* Variante schnitt am besten ab bei fortgeschrittenen Elementen wie Widerlegungsdaten und Ansprechen der gegnerischen Sicht ([[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]).

### KI-Kritik dann Überarbeitung

**Evidenz: getestet — mit einem wichtigen Nullresultat.** Entwerfen, die KI um rubricagesteuertes Feedback prompten, dieses Feedback kritisch gegen die Rubrik und die Quellen bewerten, einen Überarbeitungsplan schreiben, überarbeiten, und reflektieren.

Ein kontrolliertes 2 × 2 faktorielles Experiment mit 120 Englisch-Studierenden fand, dass der Zugewinn an Schreibqualität für die Gruppe am höchsten war, die sowohl im Filtern als auch im Bewerten trainiert war (M = 7.92), gegenüber 6.10, 4.56 und 3.10 für die anderen Bedingungen, wobei tiefe Überarbeitung von 28% auf 48% stieg und der Vorteil bei einem neuen Thema und nach dem Entfernen der KI-Unterstützung fortbestand ([[rethinking-ai-writing-feedback-literacy|Dai, 2026]]). Das Nullresultat ist der lehrreiche Teil: in einem randomisierten Drei-Gruppen-Experiment mit 70 Studierenden war Chain-of-Thought-gepromptetes KI-Feedback signifikant *höherer Qualität* als sowohl Zero-Shot-KI-Feedback (p = .01) als auch Lehrkräftefeedback (p = .008), doch übersetzte sich dieser Qualitätsvorteil **nicht in größere Überarbeitungszugewinne** — Lehrkräftefeedback erzeugte vergleichbare Verbesserung ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]).

### Human-in-the-loop-Review von KI-Ausgabe

**Evidenz: gemischt — der Review-Schritt ist selten die getestete Variable.** KI erzeugt Entwurfsausgabe, automatisierte Verifizierer-Agenten prüfen sie auf Realismus, Lesbarkeit oder [[hallucination-risk|Halluzination]], gescheiterte Prüfungen schleifen zur Verfeinerung zurück, und eine Lehrkraft prüft, bearbeitet und akzeptiert oder verwirft, bevor irgendetwas Studierende erreicht.

Eine Vier-Agenten-Schleife mit 8 Lehrenden erzeugte 212 Probleme, von denen 166 unverändert akzeptiert wurden, und Realismusprüfungen funktionierten wie beabsichtigt (10 Realismusprobleme markiert, 20 Mengen- oder Einheiten-Bearbeitungen, kein Mathematikfehler in einem finalen Problem gefunden) — aber Interessenpassung war der schwache Punkt, wobei Studierende das Thema in 160 von 422 Antworten zurückwiesen ([[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]). Ein von Lehrenden in der Schleife befindliches Feedbackwerkzeug, bewertet von 30 Lehrenden, fiel über neun Items nie unter 4.1/5 und senkte die mediane Zeit pro Aufgabe von 10–30 Minuten auf unter 5, aber die Autoren erkennen an, dass es keine Evaluation durch Studierende gibt, weshalb keine Lernbehauptung gestützt wird ([[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]). Ein Red-Team-Experiment macht den Einsatz konkret: 2 von 5 Prompt-Injektionen veränderten eine Note unentdeckt, zu 100% (9/9) und 94% (17/18), was die Lehrkraft als einzige echte Prüfung von Ausgabe [[automated-assessment|KI-Benotung]] zurückließ ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]).

## Muster, die Verständnis statt Ausgabe verifizieren

Weil KI ein kompetentes Artefakt erzeugen kann, bewegen diese Muster Assessment hin zu Evidenz, die das Artefakt allein nicht liefern kann.

### Mündliche Verifikation und Viva

**Evidenz: getestet als Format, aber die Ergebnisse betreffen Werte und Affekt statt Lernen.** Eine Programmieraufgabe wird mit erlaubter KI eingereicht, gefolgt innerhalb von 48 Stunden von einer verbindlichen 15-minütigen mündlichen Code-Review, in der die studierende Person das Programm erklärt und Integrationstests live durchführt, benotet mit 70% auf die Review und 30% auf die Rubrik.

Ein Quasi-Experiment über drei Semester mit 96 Studierenden fand keine statistisch signifikante Veränderung der Prüfungsleistung trotz der neuen Richtlinien (~2% Verbesserung bei einer Prüfung), während das Verhältnis von eingefügten zu Gesamtzeichen von 61.0% auf 68.1% stieg (p < 0.0001); 90% der Studierenden sagten, die Reviews hätten sie motiviert, ihren Code besser zu verstehen, und 65%, sie hätten Übermäßige Abhängigkeit vermieden ([[code-review-genai-cs1|Fowles et al., 2026]]). Asynchrone aufgezeichnete mündliche Antworten erzielten signifikant höhere Werte als persönliche Multiple-Choice (Zwischenprüfung Md = 92.5 gegenüber 70, p < .001; Abschlussprüfung Md = 94.2 gegenüber 86.4, p = .002) mit nur moderaten kreuz-formatischen Korrelationen (τ = .44 und .25) — und die Autoren warnen, dies seien *Formatwertunterschiede, kein Beleg für Lernzugewinne*, mit ungemessenem Betrugsverhalten ([[asynchronous-oral-assessment-2026|Pentland et al., 2026]]). Die Richtung ist nicht einheitlich positiv: Studierende waren ruhiger in einem chatbasierten Viva (M = 6.50 gegenüber 5.86, p = .028), bewerteten aber das face-to-face-Viva signifikant besser für das Verstehen der eigenen Arbeit (p = .004) ([[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]).

### Gestufte Checkpoints und Prozessevidenz

**Evidenz: gemischt — kein kontrollierter Test des Mechanismus selbst.** Kursarbeit läuft als gestufte Module, die jeweils in einem Checkpoint enden, der sowohl die Ausgabe *als auch* den Ansatz verifiziert — ein korrektes Ergebnis, das durch Hardcoding erreicht wurde, wird zurückgewiesen —, mit einer Prüfung vor dem Voranschreiten, die die lernende Person zu übersprungenen Schritten zurückschickt.

Eine Fallstudie mit 5 Graduierten in einem selbstbestimmten Quanteninformationskurs protokollierte 75 Interaktionen und bestätigte, dass der duale Ausgabe-und-Ansatz-Checkpoint wie beabsichtigt funktionierte, ohne Kontrollgruppe ([[quantum-education-its|Elhaimeur & Chrisochoides, 2026]]). Ein Pilotversuch mit 27 Teilnehmenden mit Stop-Block-Checkpoints berichtete signifikante [[self-efficacy|Selbstwirksamkeits]]zugewinne über alle zehn bewerteten Fertigkeitsbereiche (p < 0.001) in einem Within-Subjects-Prä-Post-Design, bei dem Zugewinne nicht von Übungseffekten getrennt werden können ([[agentic-education-coding|Naboulsi, 2026]]). Ein Quasi-Experiment über drei Jahre mit 248 Studierenden des [[engineering-education|biomedizinischen Ingenieurwesens]] fand höhere A-Quoten nach Hinzufügen von problembasiertem Lernen mit vier Modulen, Meilensteinen und Rubriken (66.4% gegenüber 39.1%, Δ = +27.3 Punkte, p = 0.042), fortdauernd nach Ausschluss des pandemiebetroffenen Jahrs, aber der Vergleich ist historisch und nicht randomisiert ([[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]).

## Muster, die die lernende Person zur Lehrenden machen

### Lernen durch Lehren eines KI-Schülers

**Evidenz: getestet, und das am besten belegte Muster auf dieser Seite.** Die studierende Person studiert den Inhalt, erklärt ihn dann einer KI, die gepromptet ist, eine Novizenhaltung zu halten, die die Zielerklärung nie offenbart; die KI bittet um Erklärungen, Beispiele und Verifikationsschlüsse, sequenziert von niederer zu höherer Ordnung, und beharrt, bis die Erklärung zufriedenstellend ist.

Ein Quasi-Experiment mit 68 angehenden Lehrkräften fand, dass das Erklären gegenüber einem GAI-Novizen höhere Werte beim Definieren des Flipped Classroom erzielte (M = 4.18 gegenüber 3.29, p < 0.001, r = 0.474) und seiner Aktivitäten (M = 4.91 gegenüber 3.06, p < 0.001, r = 0.642), mehr und höherwertige Fragen erzeugte (beide p < 0.001) — aber **keinen Gruppenunterschied bei objektiven Fragen** zeigte (M = 23.18 gegenüber 21.57, p = 0.416) ([[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]). Ein randomisiertes Laborexperiment mit 41 Studierenden fand höhere Wissenstest-Werte (angepasst 11.86 gegenüber 10.53, F = 35.54, η² = 0.74) und klareren, lesbareren Code, aber **keinen Unterschied bei Codekorrektheit** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]). Eine 11-wöchige Einführung über 546 Studierende fand, dass jeder zusätzliche Akt tiefen Lernens mit einer Abnahme der erwarteten Quizversuche um 2.7% assoziiert war (IRR 0.973, p < .001), wobei der Vergleich durch Zeit-auf-Aufgabe und gegen Semesterende auf 30–35% steigende Umgehung durch externe Inhaltswiederverwendung konfundiert war ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]). Die konsistente Form: Zugewinne bei Erklärung und generativer Arbeit, nicht bei objektivem Abruf.

## Muster, die Zusammenarbeit strukturieren

### Skriptgesteuerte Rollen mit einer geteilten KI

**Evidenz: getestet, aber in kontrollierten oder unkontrollierten Settings statt gewöhnlichen Klassenzimmern.** Zwei Lernende teilen eine KI und erhalten explizite Rollen mit Rotationsregeln zugewiesen; die KI ist so konfiguriert, dass sie bei Bedarf eine Rolle übernimmt, und ihre Ausgabe geht an die gesamte Gruppe. In einer Pair-Programming-Variante modelliert die geteilte KI die gemeinsame Aufmerksamkeit und Anstrengung des Dyaden und sagt einen Zusammenbruch bis zu 30 Sekunden voraus, und eskaliert Scaffolds in Stufen vom Nichts-Tun bis zu einem direktiven Hinweis.

Ein Within-Subjects-Experiment mit 26 Dyaden fand, dass die Feedbackbedingung höheren Debugging-Erfolg erzielte (t[49.96] = −13.51, p < .0001) und schneller fertig wurde (t[44.70] = 4.39, p < .0001), obwohl sie Dual-Eye-Tracking- und Pupillometrie-Hardware verlangte und den Transfer auf unüberwachte Paararbeit nicht testete ([[golrang-propact-pair-programming-2026|Golrang et al., 2026]]). Ein Quasi-Experiment mit 58 Graduierten in 16 Gruppen fand, dass Rollendesign die Mind-Map-Inhaltswerte von 3.65 auf 4.59 auf einer SOLO-Skala von 1–5 erhöhte (z = 3.771, p < 0.001), während Knoten- und Zweigzahlen flach blieben — aber ohne Kontrollgruppe können Übungseffekte nicht ausgeschlossen werden ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]).

### KI-assistierte Diskussion

**Evidenz: gemischt — die eine direkte Implementierung ist eine Fallbeschreibung.** Studierende analysieren ein Szenario und beantworten geleitete Fragen unabhängig, prompten ChatGPT mit einem standardisierten Prompt zu denselben Fragen, bewerten die KI-Antworten auf Genauigkeit gegen die eigenen, verfeinern ihre Antwort, und schließen mit einer Klassendiskussion.

Die Wirtschaftsaktivität nutzt absichtlich einen KI-Fehler — ChatGPT nennt das im Lied dargestellte Verhalten „perfekt elastische“ Nachfrage, wenn die korrekte Antwort unelastisch ist — und verwandelt damit die Validierung von KI-Ausgabe in die Diskussion ([[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]). Sie berichtet Eindrücke der Lehrenden, kein gemessenes Ergebnis. Eine getestete kollaborative Diskussionssequenz mit 67 Lehramtsstudierenden fand, dass die Experimentalgruppe eine Vorlesungskontrolle übertraf (M = 51.45 gegenüber 43.89, p = 0.001, g = 0.839) mit steigender Ko-Regulation (p = 0.043, g = 0.512) — aber KI wurde genutzt, um die Technik zu *entwerfen*, nicht um die Diskussion zu vermitteln ([[ccct-cooperative-learning-technique|Tutal, 2026]]).

## Muster, die eine spezifische Fehlvorstellung konfrontieren

### Widerlegung und konzeptueller Wandel

**Evidenz: getestet — mit direkt widersprüchlichen Ergebnissen.** Die spezifische Überzeugung der lernenden Person evozieren, einen [[refutation-text|Widerlegungstext]] oder einen personalisierten KI-Dialog präsentieren, der sie konfrontiert, sich mit der Gegenevidenz und der korrekten Erklärung auseinandersetzen, die korrekte Konzeption neu benennen, dann nach einer Verzögerung erneut testen.

Ein vorregistriertes Experiment mit 375 Erwachsenen fand, dass personalisierter Fehlvorstellungs-KI-Dialog signifikant größere unmittelbare Glaubensreduktionen erzeugte als sowohl Lehrbuch-Widerlegung als auch neutraler KI-Dialog, fortdauernd bei 10 Tagen, aber bei 2 Monaten mit Lehrbuch-Widerlegung konvergierend ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen, 2026]]). Ein Solomon-Vier-Gruppen-Quasi-Experiment mit 413 Zehntklässlerinnen und Zehntklässlern fand das *Gegenteil*: von Expert:innen geschriebene und KI-erzeugte konzeptuelle-Wandel-Texte waren beide signifikant wirksamer als interaktiver ChatGPT-Dialog, der keinen signifikanten Vorteil gegenüber der Kontrolle zeigte, und die Zugewinne waren fast ausschließlich auf leistungsstarke Studierende beschränkt ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]). Das zweite Paper markiert den Konflikt ausdrücklich und schreibt ihn [[prompt-engineering|Prompt-Design]] und Bereich zu. Der Widerlegungstext selbst übertraf in beiden die Kontrolle.

## Kontexte und Fächer

Das Muster bestimmt, was der Kontext verlangt, und mehrere Muster wurden in nur einem Setting getestet:

- **Online und asynchron.** Abruf und Verteilung, die sokratischen Varianten, ausgearbeitete Beispiele mit Selbsterklärung, prompt-umhüllte Nutzung, asynchrone [[oral-assessment|mündliche Bewertung]], und die Lernen-durch-Lehren-Einführungen. Asynchrone Settings machen die *Sequenzierung* tragend, weil das System nicht sehen kann, ob die studierende Person zuerst versucht hat.
- **Face-to-face und blended.** [[productive-failure|Produktives Scheitern]], Fehleranalyse, die Flipped-Varianten, mündliche Code-Review, skriptgesteuerte Zusammenarbeit, und die konzeptuellen-Wandel-Studien. Klassenzeit wird oft neu zugewiesen statt ersetzt — im Muster der mündlichen Review zogen Vorlesungen auf Video, damit Klassenzeit die Gespräche halten konnte.
- **In der getesteten Evidenz vertretene Fächer.** [[writing-education|Schreiben]] und [[language-learning|Sprachenlernen]] (PAIRR, kombiniertes Peer- und KI-Feedback, KI-Kritik dann Überarbeitung), [[math-education|Mathematik]] (Abruf und Verteilung, produktives Scheitern, ausgearbeitete Beispiele, Fehleranalyse), [[cs-education|Informatik]] (sokratische Assistenten, Fehleranalyse, mündliche Code-Review, Lernen durch Lehren, skriptgesteuerte Paararbeit), [[medical-education|Medizin]] (sokratisches Scaffolding in klinischen Interviews), [[teacher-education|Lehrkräftebildung]] (skriptgesteuerte Argumentation, Lernen durch Lehren), [[business-education|Wirtschaft]] (Flipped-MBA-Tutoring), und [[physics-education|Physik]], [[science-education|Naturwissenschaft]] und [[vocational-education|berufliche]] Settings für die konzeptuellen-Wandel- und mündliche-Bewertung-Studien.

## Was die Evidenz noch nicht stützt

Deutlich gesagt, weil dies die Befunde sind, die am wahrscheinlichsten stillschweigend fallengelassen werden:

- **Besseres KI-Feedback erzeugt nicht mehr Überarbeitung.** Höherwertiges Chain-of-Thought-Feedback übertraf Lehrkräftefeedback bei Qualität und erzeugte keinen Überarbeitungsvorteil (Farrokhnia et al., 2026).
- **[[socratic-method|Sokratisches Fragen]] ist nicht automatisch besser.** Eine randomisierte Studie mit 132 Studierenden fand, dass der sokratische Assistent mit vollem Kontext signifikant *schlechter* für die Unterstützung des Aufgabenabschlusses bewertet wurde als alle anderen Konfigurationen (mittlerer Rang 48.63, μ = 3.53, gegenüber 4.27, 4.16 und 4.12; χ²(3) = 12.14, p = .007), mit der meisten externen LLM-Nutzung (23%) und den wenigsten Vollverständnis-Antworten (48% gegenüber 67%) ([[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]) — während eine medizinische RCT fand, dass ein [[agentic-ai|Multi-Agenten]]-System, das einen sokratischen Tutor enthält, seine Kontrolle bei Prüfungs- und Kommunikationswerten übertraf ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]).
- **Studierende bevorzugen die weniger wirksame Rolle.** Direktives Tutoring wurde bevorzugt, während unmittelbar antwortendes Scaffolding Modellabstraktion senkte (Zhu et al., 2026).
- **Verifikationsformate verändern Werte, ohne Lernen zu demonstrieren.** Mündliche Formate erhöhten Werte und reduzierten [[anxiety-and-stress|Angst]], während eine Studie face-to-face besser für Verständnis fand, und keine Studie maß Betrug.
- **Kein kontrollierter Test isoliert menschliche Review von KI-Ausgabe**, und der Checkpoint-Mechanismus ist nie als die manipulierte Variable getestet worden.
- **Produktives Scheitern und Fehleranalyse stützen sich auf kleine, unkontrollierte Studien** (n = 17 und n = 13), die Strategietreue oder [[self-report-measures|Selbstauskunft]] messen statt Lernergebnissen.

## Designvorschläge (noch nicht getestet)

Die Muster unten stammen aus einem Leitfaden für Lehrende, den die Betreiberin bzw. der Betreiber der Wissensbasis bereitgestellt hat (*AI-Ready Course Design*, September 2026). Dieser Leitfaden sagt ausdrücklich, dass seine Beispiele **Designvorschläge sind, keine getesteten Interventionen**, und kein Artikel in dieser Wissensbasis testet sie. Sie werden hier als Designideen verzeichnet, die es wert sind, versucht und bewertet zu werden, und dürfen nicht als Evidenz gelesen werden.

- **Argument + Überarbeitungsspur** (Komposition, Geisteswissenschaften). Ersetzen Sie eine reine Aufsatzeinreichung durch eine anfängliche These, zwei annotierte Quellenpassagen, einen überarbeiteten Aufsatz und eine Entscheidungsnotiz von 150 Wörtern; erlauben Sie KI-Kritik nach dem ersten Entwurf. Bewerten Sie die Anspruch-Evidenz-Verbindung und einen angenommenen oder zurückgewiesenen Vorschlag, gerechtfertigt gegen die Quellen.
- **Daten + begründete Behauptung** (Naturwissenschaft, Laboratorien). Ersetzen Sie einen polierten Laborbericht durch rohe Beobachtungen, ein Diagramm, eine Unsicherheitsnotiz und eine Erklärung, die Ergebnisse mit einer Behauptung verbindet; KI darf eine gelieferte Interpretation kritisieren, und Studierende verifizieren diese Kritik gegen ihre Daten.
- **Versuch + Fehleranalyse** (Präkalkül, Kalkül). Ersetzen Sie Hausaufgaben nur mit Antworten durch einen anfänglichen Versuch, eine Analyse einer fehlerbehafteten ausgearbeiteten Lösung, und eine korrigierte Erklärung; Hinweise sind nur nach dem Versuch erlaubt. Das ist die Designform des Fehleranalyse-Musters oben, und sie erbt die schwache Evidenzbasis dieses Musters.
- **Position + Herausforderung + Überdenken** (Psychologie, Soziologie). Ersetzen Sie „einmal posten, zweimal antworten“ durch eine fallbasierte Behauptung unter Nutzung eines Kurkonzepts; ein Peer liefert ein Gegenbeispiel und die Autorin bzw. der Autor überarbeitet oder verteidigt mit Evidenz.
- **Projekt + verknüpfte Prüfung** (Wirtschaft, Gesundheitsberufe). Paaren Sie eine KI-erlaubte Empfehlung für eine fiktive Organisation oder einen Patientenfall mit einer kurzen Erklärung von zwei Schlüsselentscheidungen und einer Antwort auf eine veränderte Beschränkung; veröffentlichen Sie die Benotungsbeziehung zwischen den zwei Komponenten.
- **Plan + Versuch + Anpassung** (College-Erfolg). Ersetzen Sie eine generische Zeitmanagement-Reflexion durch einen einwöchigen Studienplan, eine kurze Aufzeichnung des Versuchens, und eine Überarbeitung, gebunden an das, was geschah; KI darf Terminierungsoptionen vorschlagen, nachdem die studierende Person Beschränkungen identifiziert hat.

Die eigenen Vorsichten des Leitfadens gelten: aufgezeichnete Videos, Reflexionen und Logs können selbst KI-assistiert sein, weshalb in vollständig asynchronen Kursen eine Aufzeichnung nicht als Verifikation unabhängiger Meisterschaft behandelt werden sollte. Zwei seiner Rahmungen — Assessment-Zwillinge und asynchrone mündliche Bewertung als Abschreckung gegen Betrug — bleiben Rahmenwerke, die auf Validierung warten; die oben zitierten Studien zur asynchronen mündlichen Bewertung maßen Formatwerte und maßen Betrug überhaupt nicht.

## Verbundene Konzepte

- [[pedagogy]] — der Dachbegriff der Unterrichtsansätze, die diese Seite in Sequenzen operationalisiert
- [[learning-design]] — wo Muster gewählt, sequenziert und in einen Kurs eingebettet werden
- [[scaffolding]] — das Unterstützung-und-Ausblenden-Prinzip, das bestimmt, wo KI-Hilfe gehört
- [[feedback]] — das System, das die Feedbackmuster dieser Seite instanziieren
- [[formative-assessment]] — der Assessmentzweck, dem die meisten dieser Muster dienen
- [[peer-assessment]] — die menschliche Hälfte der PAIRR- und kombinierten-Feedback-Muster
- [[ai-feedback-quality]] — warum Feedbackqualität allein Überarbeitung nicht bestimmt
- [[evaluative-judgment]] — die Bewertung, die Studierende an KI-Ausgabe vollziehen müssen
- [[feedback-literacy]] — die Fähigkeit, die die kritischen-Bewertung-Schritte aufbauen
- [[human-in-the-loop-ai]] — die Aufsichtsstruktur der Review-Muster
- [[oral-assessment]] — das Format, das den Verifikationsmustern zugrunde liegt
- [[process-oriented-assessment]] — die Logik hinter gestuften Checkpoints
- [[productive-failure]] — das Konzept hinter Versuch-vor-Anweisung
- [[retrieval-spacing-interleaving]] — die Evidenzbasis für Muster verteilten Abrufs
- [[desirable-difficulties]] — warum anstrengungsreiche Sequenzen flüssige übertreffen
- [[misconceptions]] — was die konzeptuellen-Wandel-Muster anzielen
- [[refutation-text]] — die Textform der Fehlvorstellungskonfrontation
- [[learning-by-teaching]] — die Pädagogik hinter dem KI-Schüler-Muster
- [[socratic-method]] — das Fragemuster und seine widersprüchliche Evidenz
- [[collaborative-learning]] — der Kontext für skriptgesteuerte geteilte-KI-Arbeit
- [[cognitive-offloading]] — das Risiko, das jedes Anstrengung-zuerst-Muster zu vermeiden sucht
- [[metacognition]] — was die Reflexionsschritte in diesen Sequenzen auslösen sollen
- [[prompt-engineering]] — die Scaffolding-Schicht in Mustern strukturierter Nutzung
- [[transfer-of-learning]] — das Ergebnis, an dem die meisten Muster letztlich gemessen werden
- [[assessment-validity]] — der Grund, warum Prozessevidenz überhaupt vorgeschlagen wird
- [[academic-integrity]] — der Treiber hinter mündlicher und prozessualer Verifikation
- [[ai-literacy]] — die Fähigkeit, die durch das Kritisieren von KI-Ausgabe entwickelt wird
- [[online-teaching-and-learning]] — der Kontext, der Sequenzierung tragend macht
- [[higher-ed]] — die Stufe, auf der der Großteil dieser Evidenz erzeugt wurde
- [[k-12]] — die Stufe der Studien zu produktivem Scheitern, konzeptuellem Wandel und mündlicher Bewertung

## Verbundene Artikel

- [[pairr-ai-peer-review-2025]] — Peer and AI Review + Reflection (PAIRR): the flagship sequence, N = 654 (Sperber et al. 2025)
- [[gift-ai-pairr-business-writing-2025]] — PAIRR applied in a business writing course (MacArthur et al. 2025)
- [[ai-peer-feedback-l2-writing-engagement-2026]] — Integrated AI-plus-peer feedback raised engagement and all four IELTS dimensions (Liu 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Prompt-scaffolded GenAI peer feedback in collaborative argumentation (Chang et al. 2026)
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] — Training students to filter and appraise AI feedback: the FRAC and APCA conditions
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Higher-quality AI feedback produced no greater revision gains (Farrokhnia et al. 2026)
- [[guardrails-ai-teaching-assistants-programming-2026]] — Socratic plus full context was rated worse than every other assistant configuration (Eastwood et al. 2026)
- [[ai-standardized-patient-scaffolding-medical-2026]] — Need-triggered Socratic scaffolding in clinical interview training, N = 100 (Yang et al. 2026)
- [[hashmi-socratic-physics-chatbot-2025]] — Socratic chatbot in introductory mechanics: question specificity rose from 10–15% to 100% (Hashmi et al. 2025)
- [[agent-type-feedback-style-self-directed-learning-2026]] — Socratic versus directive agent feedback, with the order not counterbalanced (Han et al. 2026)
- [[adaptive-pretesting-retention]] — Adaptive spaced retrieval beat learner-directed AI study (Akgun & Toker 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — Unrestricted ChatGPT during study lowered 45-day retention (Barcaui 2025)
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Structured tutoring gains tracked completed weeks, not minutes (Yang et al. 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Examples versus practice cross over by knowledge type (Rachatasumrit et al. 2025)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive guided and buggy examples in an intelligent logic tutor (Dey Tithi et al. 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — Adding self-explanation to AI feedback lost on every measure (Asher et al. 2025)
- [[generative-ai-guardrails-harm-learning]] — Guarded tutoring removed the exam harm that unguarded GPT caused, ~1,000 students (Bastani et al. 2025)
- [[guided-llm-scaffolding-independent-learning]] — Guided versus unrestricted LLM use in statistics (Amanlou et al. 2026)
- [[preferred-scaffolding-ai-mathematical-modeling]] — Immediate-answer scaffolding depressed model abstraction while being preferred (Zhu et al., 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Steering an LLM tutor to withhold solutions for productive failure (Puech et al. 2025)
- [[pedagogy-ai-mistakes]] — Weekly critique-and-refinement cycles built on deliberate AI failure cases (Hosseini 2026)
- [[kumar-genai-computing-education-systematic-review-2026]] — Error analysis as a distinct competence, across 72 computing-education studies (Kumar et al. 2026)
- [[lukesova-clue-before-correction-2026]] — Guided clues instead of direct error correction in L2 revision (Lukešová & Jennings 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Explaining to an AI novice learner, N = 68 (Wang et al. 2026)
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Randomized test of teaching a ChatGPT agent to program (Chen et al. 2024)
- [[explique-teachable-agent-algorithms-546-students-2026]] — Learning by teaching deployed to 546 students over 11 weeks (Wang et al. 2026)
- [[socrates-students-instructors-llms-lbt-2025]] — Students designing questions an LLM cannot answer (Yang et al. 2025)
- [[code-review-genai-cs1]] — Mandatory oral code review interviews as a response to GenAI in CS1 (Fowles et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Asynchronous recorded oral assessment versus in-person multiple-choice (Pentland et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — Chat-based viva reduced anxiety while face-to-face was rated better for understanding (Yusuf et al. 2026)
- [[ai-supported-oral-assessment-tvet-2026]] — AI surfacing rubric evidence for teacher judgment in vocational workshops (Adams 2026)
- [[quantum-education-its]] — Output-and-approach checkpoints in a self-paced graduate course (Elhaimeur & Chrisochoides 2026)
- [[agentic-education-coding]] — Stop-block checkpoints and a pre-advancement check, N = 27 (Naboulsi 2026)
- [[pbl-biomedical-engineering-genai-2026]] — Four-module problem-based learning with milestones and rubrics (Nnamdi et al. 2026)
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] — A four-agent review loop with teachers, and where interest fit failed (Walkington et al. 2026)
- [[zhao-learnlens-feedback-educators-loop]] — Educator-in-the-loop feedback with verifier scores (Zhao et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injections that changed grades undetected, leaving the teacher as the only check (Humble 2026)
- [[golrang-propact-pair-programming-2026]] — A shared AI forecasting collaboration breakdown in pair programming (Golrang et al. 2026)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Scripted learner and AI roles in group knowledge construction (Cheng et al. 2026)
- [[paratutor-parent-child-tutoring]] — Role-separated AI support in parent–child tutoring (Luo et al. 2026)
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — Personalized AI dialogue beat textbook refutation immediately, converging by two months (Corbett & Tangen 2026)
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Conceptual-change texts beat interactive AI dialogue, the reverse result (Akdogan 2025)
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — AI-supported guided inquiry and conceptual understanding (Aydin 2026)
- [[ai-enhanced-flipped-classroom-three-year-2026]] — Three-cohort comparison of traditional, flipped and AI-enhanced flipped (Liu et al. 2026)
- [[flipped-learning-genai-design-education-2026]] — Flipped studio course with parameter-guided prompt scaffolding (Qu et al. 2026)
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — Teaching model moderated outcomes: flipped g = 1.96 against traditional g = 0.46 (Jing et al. 2026)
- [[ai-tutor-statistical-programming-adoption-2026]] — Weekly homework-tutor use predicted transfer-task scores in a flipped course (Préau et al. 2026)
- [[beck-genai-literacy-economics-hands-on]] — A five-step AI-critique discussion built on an AI error (Beck & Brodersen 2025)
- [[ccct-cooperative-learning-technique]] — A tested cooperative-learning sequence with assigned roles and a gallery walk (Tutal 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Seminar and peer-discussion module with an AI retrieval recommender (Huang 2026)
