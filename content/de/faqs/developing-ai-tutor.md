---
title: "Was sind Best Practices für die Entwicklung eines wirksamen KI-Tutors?"
created: "2026-08-29T20:36:43-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
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
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Ihr Tutor ist drei Wochen von einem Pilotprojekt entfernt. Der Chat funktioniert, das Modell erklärt eine Ableitung sauber, und die interne Demo hat Applaus bekommen. Dann fragt jemand aus dem Lehrzentrum die Frage, für die Ihr Pflichtenheft kein Feld hat: Werden Studierende nach einem Semester mit diesem Ding ein Problem lösen, wenn es nicht im Raum ist? Was Sie haben, ist eine Funktionsliste. Was Sie nicht haben, ist ein Satz, der sagt, was die lernende Person am Ende allein können muss.

Ein Tutor ist eine Richtlinie, die um einen [[conversational-ai|Chatbot]] gelegt ist, und die Richtlinie entscheidet, ob Lernen stattfindet. Benennen Sie die kognitive Arbeit, die die lernende Person leisten muss, lassen Sie das System sie einfordern (einen Versuch vor der Hilfe, eine Hinweisleiter, die ausblendet, eine Prüfung, die das Modell nicht fälschen kann), und evaluieren Sie mit abgeschaltetem Tutor. Die Modellqualität bestimmt, wie gut sich das Gespräch anfühlt. Die Richtlinie entscheidet, was die studierende Person im Juni kann.

## Die kurze Version

**1.** Schreiben Sie das Lernziel als Aussage über Leistung ohne Hilfe und leiten Sie jede Funktion daraus ab. Wenn sich eine Funktion nicht auf diesen Satz zurückführen lässt, ist sie eine Demo-Funktion.

**2.** Bauen Sie das Lernendenmodell aus Belegen, die Sie protokollieren können, und speichern Sie jede Diagnose als Hypothese mit einem Konfidenzwert statt als Tatsache.

**3.** Legen Sie die Hilfeleiter im Code fest, mit benannten Sprossen, und lassen Sie die Oberfläche die lernende Person für jede Stufe nach unten etwas zahlen.

**4.** Verankern Sie die Inhalte in Ihren eigenen Materialien und geben Sie Rechnen, Algebra und Codeprüfung an deterministische Werkzeuge ab, die nicht halluzinieren können.

**5.** Testen Sie Lehrfehler über ganze Gespräche hinweg: Antwortenlecks, Sycophantie, Verstärkung von Fehlvorstellungen, instruktionales Abdriften.

**6.** Messen Sie mit einer Entzugsphase und einem verzögerten Test, nicht mit einem Zufriedenheitswert.

## Formulieren Sie das Lernziel als Aussage über Leistung ohne Hilfe

Drei Listen, geschrieben bevor jemand ein Modell auswählt:

- Was Lernende danach wissen oder können sollten.
- Welche kognitive Arbeit sie selbst leisten müssen.
- Was der Tutor für sie tun darf.

Die Literatur zu [[intelligent-tutoring]] macht den Punkt, dass Wirksamkeit von [[pedagogy|pädagogischem]] Design abhängt und nicht von der Modellfähigkeit allein, und das Scheitern lässt sich leicht versehentlich einbauen. Ein Tutor, der auf „das Problem fertigstellen" optimiert ist, untergräbt einen Tutor, der auf „lernen, das Problem zu lösen" optimiert ist, und besteht dabei jeden Funktionstest, den Sie schreiben, weil beide korrekte Endergebnisse liefern. Der Unterschied liegt darin, was die studierende Person zwischen Frage und Antwort getan hat.

Die zweite Liste ist der Ort, an dem Entwicklungsteams konkret werden. Nehmen Sie ein Beherrschungslabel wie „Ableitungsbeherrschung" und lassen Sie nicht zu, dass es das Produzieren der korrekten Ableitung bedeutet. Zerlegen Sie es in: erkennen, wann eine Ableitung angemessen ist; sie als momentane Änderungsrate interpretieren; die Regel auswählen; das Verfahren ausführen; erklären, warum die Wahl richtig war; Plausibilität prüfen; und es auf ein unvertrautes Problem anwenden. Jedes davon ist ein eigener protokollierbarer Punkt, und jedes impliziert eine andere Reaktion, wenn es fehlt. Diese Zerlegung ist auch die Verteidigung gegen die [[correct-answer-trap-misconceptions|Falle der richtigen Antwort]], in der eine lernende Person durch fehlerhaftes Schlussfolgern zur richtigen Antwort gelangt und Ihre Analytik einen Erfolg verzeichnet. [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] und [[zhang-tutormoments-2026|When Help is Unhelpful]] beschreiben beide Varianten dieses Scheiterns im Produktivbetrieb.

## Bauen Sie das Lernendenmodell vor dem Gespräch

Das Lernendenmodell hält zwei Arten von Zustand: Schätzungen pro Konzept (Grenzwert: in Entwicklung, Potenzregel: beherrscht, Produktregel: in Entwicklung, Kettenregel: nicht gezeigt) und Fehlvorstellungs-Hypothesen mit den Belegen und der Konfidenz hinter jeder. Halten Sie beides getrennt. Die Konzeptschätzung ist das, was die Schwierigkeitsauswahl steuert. Die Hypothese ist das, was die nächste Frage steuert.

Seien Sie vorsichtig damit, ein [[llm]] die Diagnose allein machen zu lassen. [[benchmark|Benchmarking]] fand heraus, dass LLM-Tutoren klar korrektes Schlussfolgern erkennen konnten, während sie manchmal gültige Alternativen zurückwiesen oder fehlerhaftes Schlussfolgern akzeptierten. Ein Modell, das den guten Fall erkennt und den mehrdeutigen falsch liest, scheitert genau an den Studierenden, die die Hilfe brauchen. Für folgenreiche Domänen ist die Architektur, die überlebt, **strukturierte Diagnose plus flexible LLM-Dialogführung**, die Anordnung, die [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]] beschreibt: Ihr eigener Detektor stellt fest, was die studierende Person wahrscheinlich getan hat, und das Modell schreibt das Gespräch um diesen Befund herum.

Geben Sie der Diagnose eine explizite Reihenfolge, die das Modell nicht überspringen kann: erkennen, verifizieren, reagieren. Das Modell darf eine [[misconceptions|Fehlvorstellung]] als Hypothese vorschlagen, muss sie dann aber gegen die tatsächliche Arbeit der studierenden Person oder eine gezielte Frage verifizieren, bevor der Tutor darauf reagiert. Ohne diesen Schritt erfindet das System Belege und tut dann so, als hätte die lernende Person einen Fehler gemacht, den sie nicht gemacht hat, was sowohl nutzlos als auch leicht beleidigend ist.

Protokollierenswerte Belege, grob nach Nützlichkeit geordnet: aktuelle Versuche mit ihren Zwischenschritten, gezeigtes Wissen pro Konzept, Hilfe suchendes Verhalten (das selbst ein Signal über Konfidenz ist) und selbst berichtete Konfidenz, wo Sie sie erheben. Passen Sie Schwierigkeit und Unterstützung aus diesem Protokoll an, und behandeln Sie den letzten Prompt der lernenden Person als einen Input darunter. Ein einzelner Prompt ist ein schlechter Schätzer dafür, was eine studierende Person weiß, und ein Tutor, der darauf reagiert, wird hin und her schwanken.

## Legen Sie die Hilfeleiter fest, und lassen Sie die Oberfläche dafür zahlen

Schreiben Sie die Sprossen auf, bevor Sie einen Prompt schreiben, denn die Leiter ist eine Produktentscheidung mit benannten Zuständen, und eine Ton-Einstellung kann das nicht ausdrücken. Eine brauchbare Abfolge:

1. Selbstständiger Versuch.
2. Metakognitive Frage danach, was die studierende Person bereits versucht hat.
3. Konzeptueller Hinweis.
4. Die relevante Regel benennen.
5. Einen Teil des Problems aufsetzen.
6. Vorgerechneter Zwischenschritt.
7. Vorgerechnete Lösung.
8. Die studierende Person erklärt die Lösung.
9. Die studierende Person löst ein vergleichbares Problem ohne Hilfe.

Die Unterstützung blendet aus, während die Kompetenz wächst, und das ist der Mechanismus im Zentrum von [[scaffolding]]. Eine vorgerechnete Lösung zu sehen belegt keine Beherrschung, also schuldet jede Sitzung, die Sprosse sieben erreicht, Ihnen Sprosse neun, bevor sie als abgeschlossen gilt.

Die kausale Evidenz dafür, die Leiter überhaupt zu bauen, stammt aus einem Feldexperiment, in dem eine ungeschützte GPT-Oberfläche die betreute Mathematikleistung erhöhte und die anschließende unbetreute Prüfungsleistung senkte. Ein Tutor, der Hinweise gab, beseitigte diese Lernstrafe weitgehend ([[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]). Die Einschränkung ist architektonisch. Dasselbe Modell erzeugte mit anderem Hilfe-Verhalten entgegengesetzte Ergebnisse bei dem Maß, auf das es ankommt.

Ein größeres randomisiertes Feldexperiment mit mehr als 6.000 Mittelstufenschülerinnen und -schülern auf einer beherrschungsbasierten Übungsplattform zeigt, wie die Leiter in den Logs aussieht. Studierende, die KI-Unterstützung erhielten, kamen langsamer voran und versuchten weniger Fragen, und sie antworteten genauer. Der klarste Mechanismus war die Korrektheit des nächsten Versuchs nach einem Fehler: Es waren weniger Versuche nötig, um zu einer richtigen Antwort zurückzukehren. Dieses Muster ist eine produktive Verlangsamung, und es ist die Signatur, die eine Hinweisleiter hinterlassen soll ([[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]]).

Dieselbe Studie liefert eine Warnung zu Ihren eigenen Dashboards. Die Anforderung von drei richtigen Antworten in Folge hob die plattformdefinierte Beherrschung deutlich, ohne bei einem eine Woche späteren verzögerten Test erkennbare Zugewinne zu erzeugen. Die stärkste Evidenz im verzögerten Test trat nur dort auf, wo die KI innerhalb des Beherrschungs-Workflows saß (Koeffizient 0.085), nicht dort, wo sie als eigenständiger Zugang verfügbar war. Wenn Ihre Erfolgsmetrik ein Streak-Zähler ist, liefern Sie ein System aus, das den Streak optimiert.

Reibung in der Oberfläche gehört in denselben Design-Durchgang. Unbegrenzte Hinweise hinter einer sichtbaren Schaltfläche machen die ganze Leiter zur Abkürzung, und vorzeitige Hinweisanfragen bei oberflächlichem Lesen gehen mit geringeren [[learning-gains]] einher. Wenn Sie `[Hint][Hint][Hint][Show Answer]` durch die Fragen „Was haben Sie schon versucht?" und „Welcher Teil blockiert Sie?" ersetzen (eine Regel wählen, die Gleichung aufsetzen, die Algebra machen, das Konzept verstehen), kostet das einen Bildschirm und leitet die studierende Person zu der Sprosse, die sie tatsächlich braucht. Es liefert Ihnen außerdem die Logdaten, die zeigen, welche Sprosse sie gewohnheitsmäßig überspringt.

## Geben Sie die prüfbaren Teile an eine Prüfinstanz

Verankern Sie die Generierung in lehrendenfreigegebenem Material: Lehrbuchabschnitte, Kursnotizen, durchgerechnete Beispiele, Terminologie, freigegebene Methoden, Notation, Aufgabenregeln, Richtlinien und [[curriculum-design|curriculare]] Ressourcen. Retrieval-augmentierte Generierung gegen diesen Korpus reduziert das [[hallucination-risk|Halluzinationsrisiko]] und beseitigt es nicht, wie [[rag]] darlegt. Legen Sie Zitate oder Herkunft in der Oberfläche offen, wo eine studierende Person eine Aussage prüfen könnte, denn das Zitat ist das, was die Verankerung im Nachhinein prüfbar macht.

Verankerung erledigt außerdem eine Aufgabe, die Genauigkeitsmetriken verfehlen. Ein Kurs hat freigegebene Methoden, und ein Tutor, der eine mathematisch gültige Technik einführt, die der Kurs nicht verwendet, hat der studierenden Person etwas beigebracht, wofür sie Punktabzug bekommt. Retrieval aus der Kursebene ist der Weg, auf dem der Tutor innerhalb des Methodensatzes bleibt.

Für Domänen mit formal prüfbaren Antworten fügen Sie deterministische Werkzeuge hinzu: Taschenrechner, Computeralgebrasysteme, Codeausführung, Wissensgraphen, regelbasierte Validatoren und [[discipline-specific-aied|domänenspezifische]] Solver. Die Arbeitsteilung ist der wichtige Teil. Das LLM übernimmt Erklärung und Dialog. Die symbolische Engine verifiziert algebraische Äquivalenz, Ableitungen, Integrale, Gleichungslösungen, kritische Punkte und numerische Näherungen. Ein falscher Zwischenschritt, den der Verifizierer fängt, wird zum Tutoring-Moment. Ein falscher Zwischenschritt, den nichts fängt, wird zur Fehlvorstellung, die die studierende Person mit in die Prüfung nimmt.

## Verlangen Sie, dass die lernende Person auf das Feedback reagiert

Feedback, das „Richtig", „Falsch" oder „Gut gemacht" sagt, ist ein Bewertungsereignis im Gewand des Unterrichtens. Die Wissensbasis behandelt [[feedback]] als Schleife aus Angebot und Aufnahme: Feedback unterstützt Lernen, wenn Studierende es verstehen und danach handeln, und die zweite Hälfte ist die, die Systeme üblicherweise überspringen. Bauen Sie den Tutor so, dass er den beteiligten Schlussfolgerungsschritt benennt, sagt, was überdacht werden muss, eine konkrete nächste Handlung gibt und die lernende Person bittet, vorherzusagen oder zu erklären, bevor das Feedback sichtbar wird.

Die Abfolge, die das trägt, ist: lernende Person zuerst, KI zweitens, lernende Person wieder. Die studierende Person generiert, wählt, begründet, bewertet oder reflektiert; der Tutor antwortet; die studierende Person macht etwas mit der Antwort. Designen Sie die Zugstruktur so, dass das nicht optional ist. Ein System, in dem das Modell auf eine Frage drei Absätze produzieren kann, bringt der studierenden Person bei zu fragen und zu lesen.

Das langfristige Ziel ist Internalisierung. Lernende sollten am Ende die Fragetechniken und [[problem-solving]]-Strategien des Tutors selbst ausführen, was das Argument der [[agency]] ist und der Grund, warum die Leiter eine oberste Sprosse hat, auf der der Tutor schweigt.

## Designen Sie für das, was in Zug vierzig passiert

Pädagogische Sicherheit ist eine eigene Testsuite, getrennt von gewöhnlicher Chatbot-Sicherheit, und die meisten Teams liefern nur mit der zweiten aus. Toxizität und Jailbreak-Resistenz sagen Ihnen nichts darüber, ob der Tutor einer studierenden Person, die zweimal fragt, eine Antwort aushändigt, einer falschen Methode zustimmt, weil die studierende Person selbstsicher klang, über eine lange Sitzung aus dem Methodensatz des Kurses driftet oder eine lernende Person in [[cognitive-offloading|kognitive Entlastung]] drückt. [[ai-sycophancy|Sycophantie]] ist die, die zuerst durchkommt, weil Zustimmung als Freundlichkeit gelesen wird und Ihre Präferenzdaten sie belohnen.

Testen Sie auf Antwortenlecks, Verstärkung von Fehlvorstellungen, übermäßige Zustimmung, unangemessene Schwierigkeit, Entlastung, verzerrte Behandlung, Verlust der Handlungsfähigkeit der lernenden Person, instruktionales Abdriften und Überkonfidenz in falschen Erklärungen. Führen Sie die Tests auf ausgedehnten Gesprächen durch, nicht auf einzelnen Zügen, denn pädagogische Fehler akkumulieren: Die ersten zehn Züge können vorbildlich sein, und der elfte kann die Sitzung zunichtemachen. Ein Tutor sollte freundlich und korrekt zugleich sein, auch wenn die lernende Person auf einer Fehlvorstellung beharrt. [[pedagogical-safety]] und [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]] legen die Fehlertaxonomie dar.

## Packen Sie die Datenarchitektur in dasselbe Designdokument

Erheben Sie nur Lernendendaten, die pädagogisch notwendig sind, und können Sie sagen, warum jedes Feld existiert. Wo Sie persistenten Speicher oder ein [[student-modeling|Lernendenmodell]] führen, machen Sie seinen Zweck für die lernende Person sichtbar, geben Sie ihr angemessene Kontrolle darüber, schützen Sie sensible Informationen, definieren Sie Aufbewahrung und leiten Sie folgenreiche Entscheidungen an eine Lehrperson oder einen anderen [[human-in-the-loop-ai|menschlichen]] Kontrollpunkt weiter. Ein Lernendenmodell, das still einen Konfidenzwert anhäuft, den eine studierende Person nie sieht, ist ein Datenschutzproblem und ein pädagogisches.

Prüfen Sie das Verhalten über Sprachhintergründe, Fähigkeitsniveaus, kulturelle Kontexte, Bedarfe an [[accessibility]] und Stufen von [[prior-knowledge|Vorwissen]] und KI-Erfahrung hinweg. Unterschiedliche Leistung bei demselben Lernziel ist ein Bug mit einer studierenden Person daran, und er wird in Ihrer aggregierten Genauigkeitszahl nicht auftauchen.

Eine Barrierefreiheits-Entscheidung verdient eine eigene Zeile: Machen Sie versiertes [[prompt-engineering|Prompting]] nicht zur Voraussetzung für guten Unterricht. Wenn der Tutor nur dann gut lehrt, wenn eine studierende Person einen sorgfältigen Prompt schreibt, haben Sie ein System gebaut, das Studierende bevorteilt, die bereits wissen, wie man mit Modellen spricht. Der Tutor sollte Lernenden helfen, produktive Fragen zu formulieren, was ebenfalls eine Fähigkeit der [[metacognition]] ist, die es wert ist, sie zu haben.

## Messen Sie das Entzugsintervall

Sitzungsmetriken sagen Ihnen nicht, ob das Ding funktioniert. Antwortgenauigkeit, Gesprächslänge, Präferenz der Studierenden, Zufriedenheit, Aufgabenabschluss und [[student-engagement|Engagement]] steigen alle bei Systemen, die nichts lehren, weil Studierende Hilfe mögen und Hilfe leicht zu messen ist. Evaluieren Sie Leistung ohne Hilfe, verzögerte Behaltensleistung, Transfer auf neue Probleme, Korrektur von Fehlvorstellungen, Unabhängigkeit der lernenden Person, Aufnahme von Feedback und [[differential-effects-across-learner-groups|differentielle Effekte zwischen Lernendengruppen]]. [[ai-ed-evaluation]] hat die Methoden, und [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]] argumentiert, dass Verhalten das Konstrukt ist.

Zwei Studien schärfen die Regel gegen [[self-report-measures|Selbstauskunft]] und kurze Horizonte. Ein Pilotversuch mit 38 Programmieranfängerinnen und -anfängern fand einen starken Zusammenhang zwischen der Nutzung von [[generative-ai|generativer KI]] und *wahrgenommenem* Lernen (rs=0.802, p<0.001), während die Indikatoren für autonomen Fortschritt ohne Unterstützung durch Lehrende am niedrigsten abschnitten. Die Autorinnen und Autoren nennen die Lücke eine Illusion von Kompetenz und epistemische Schuld, und genau diese Lücke belohnt eine Zufriedenheitsmetrik ([[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]]).

Grundsätzlicher: Der größte Teil der Evaluation endet in dem Moment, in dem die Unterstützung endet. [[cognitive-washout-ai-skill-decay-2026|Cognitive washout dynamics]] benennt das ungemessene Intervall nach dem Entzug und formalisiert vier Ergebnisse: elastisches Zurückfedern, teilweises Plateau, latentes Gerüst und Übererholung. Ihre Washout-Kurve enthält eine Erholungszeitkonstante, einen Term für die Vollständigkeit der Erholung und einen Hysterese-Index, der den Wiedererlern-Aufwand mit dem ursprünglichen Aufwand vergleicht. Da die Umkehrbarkeit den Schweregrad bestimmt, argumentiert das Framework, dass geplante Übung ohne Hilfe an der Erholungskurve dosiert werden sollte, statt als Prinzipienfrage debattiert zu werden. Ihr Evaluationsplan braucht eine Entzugsphase ebenso wie einen unmittelbaren Posttest, und [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|die randomisierte Evidenz, dass kurze Unterstützung spätere Leistung ohne Hilfe senkt]], ist der Grund, sie früh einzuplanen.

## Geben Sie Lehrenden etwas zum Bearbeiten

Lassen Sie Lehrende vor dem Einsatz realistische Lernendenprofile, häufige Fehlvorstellungen, Randfälle, adversarielle Prompts, mehrdeutige Antworten und lange Tutoring-Gespräche testen. Protokollieren Sie die pädagogischen Fehler und speisen Sie sie in System-Prompts, Tutoring-Richtlinien, Wissensquellen, [[guardrails]], Lernendenmodell-Regeln und Modellwahl zurück. Eine flüssige Antwort kann pädagogisch trotzdem falsch sein, und eine Lehrperson ist die einzige prüfende Instanz, die das sehen kann.

[[teacher-intervention-k12-ai-based-instruction-2026|Lees systematischer Review über 29 K-12-Studien]] beschreibt, woraus diese Aufsicht besteht und wo sie bricht. [[teacher-role|Lehrkräfte]]-Intervention ist ein wiederkehrender Vier-Phasen-Zyklus aus Beobachten, Urteilen, Eingreifen und Orchestrieren. KI-Warnungen, [[visualization|Dashboards]] und automatisierte Punktzahlen „führen nicht automatisch zu pädagogischem Handeln". Die stärkste Lehrstrategie, die der Review findet, ist pädagogische Übersetzung: Chatbot-Feedback auswählen, überarbeiten, ergänzen, zusammenfassen oder löschen, statt es durchzureichen.

Daraus folgen zwei Design-Warnungen, und beide widersprechen der üblichen Roadmap. Mehr KI-Information ist nicht besser: Systeme, die kontinuierlich Diagnostik ausgeben, überlasteten Lehrkräfte und zogen Aufmerksamkeit von ihrer eigenen Beobachtung ab. Priorisieren Sie, was es wert ist, darauf zu handeln, machen Sie es interpretierbar, und bieten Sie Empfehlungen in einer Form an, die eine Lehrperson annehmen, ändern, aufschieben oder ablehnen kann. Mehr Unterstützung für Lehrkräfte ist ebenfalls nicht besser: Eingriffe zu verzögern, damit Studierende selbstständig arbeiten können, ist selbst Expertise. Strukturelle Bedingungen, also Zeit zur Datenprüfung, Klassengröße und die Möglichkeit, die Gruppen, die Hilfe brauchen, physisch zu erreichen, sind Teil der Intervention und nicht Hintergrundlogistik. Ein Dashboard, das für eine Lehrperson ohne Freistunde gebaut ist, wird nicht geöffnet.

## Fall eins: ein Analysis-Tutor, bei dem die Prüfung billig ist

Ein Tutor für Analysis im ersten Hochschulsemester sollte steigern, was Studierende selbstständig lösen und erklären können, nachdem er entfernt wurde, und nicht die Zahl korrekt abgeschlossener Aufgaben maximieren. Mathe-Tutoring ist besonders anfällig für Über-Scaffolding, vorzeitige Hinweisnutzung und falsche Diagnose des Schlussfolgerns von Studierenden, und alle drei sind in Ihren Logs sichtbar, wenn Sie hinsehen ([[math-education]]).

**Verankerung und Verifikation.** Ein Aufbau mit sechs Schichten: Kursmaterialien und Richtlinien der Lehrperson, dann eine Retrieval-Schicht, dann eine Problem-Engine und ein Lernendenmodell neben einem symbolischen Verifizierer und einer Diagnose-Engine, dann eine pädagogische Richtlinien-Schicht, dann dialogische Generierung, dann die studierende Person, dann zurück ins Lernendenmodell. Der Verifizierer ist der Grund, warum dieses Design machbar ist. Er entscheidet, ob ein Ausdruck äquivalent ist, eine Ableitung korrekt, ein Integral ausgewertet, ein kritischer Punkt gefunden, und er tut das, ohne die Meinung des Modells zu erfragen.

**Eine Interaktion.** Beim Differenzieren von $f(x)=(x^2+1)\sin x$ verrät ein konventioneller Chatbot die Antwort. Ein lernorientierter Tutor schließt intern, dass die studierende Person beide Komponenten differenziert, die Ergebnisse aber multipliziert hat, eine mögliche Produktregel-als-$f'g'$-[[misconceptions|Fehlvorstellung]], und stellt zuerst eine diagnostische Frage: Welche Regel gilt, wenn zwei Funktionen multipliziert werden? Dann schreibt die studierende Person die Produktregel symbolisch hin, setzt $u$ und $v$ fest, und erst danach verifiziert der Tutor den finalen Ausdruck. Beachten Sie, wie viel des Tutorings geschah, bevor überhaupt Modellprosa die studierende Person erreichte.

**Mehrere Darstellungen.** Verbinden Sie symbolische Verfahren mit der Formel, dem Graphen, der Tabelle, einer verbalen Interpretation und einem physikalischen Kontext der Änderungsrate. Prozedurale Flüssigkeit und konzeptuelles Verständnis sehen auf einem korrekten Lösungsblatt identisch aus und divergieren beim Transferproblem.

**Das Dashboard.** Legen Sie aggregierte Belege anstelle undurchsichtiger Urteile offen: „Produktregel, 62% gezeigte Beherrschung; häufige Muster, 18% lassen einen Term weg, 11% multiplizieren Ableitungen." Einzeldiagnosen gehen als Hypothesen mit ihren stützenden Belegen hinaus, was sie auch für eine Lehrperson überprüfbar macht ([[explainable-ai|Erklärbarkeit]] ist hier für die Lehrperson wichtiger als für die studierende Person).

**Der Evaluationsplan.** Leistung mit dem Tutor, Leistung bei vergleichbaren Problemen ohne ihn, verzögerte Behaltensleistung, Transfer auf unvertraute Probleme, Qualität der konzeptuellen Erklärung, Korrektur von Fehlvorstellungen, angemessenes gegenüber vorzeitigem [[help-seeking|Hilfesuchen]], Antwortenlecks, Raten falsch-positiver und falsch-negativer Diagnosen und differentielle Ergebnisse. Der Vergleich, der das Projekt entscheidet, ist betreut gegen später unbetreut. Eine studierende Person, die mit dem Tutor von 60% auf 95% kommt und allein bei 60% bleibt, wurde nicht unterrichtet.

## Fall zwei: ein Schreib-Coach, bei dem die Phase die Erlaubnis entscheidet

Schreiben hat keine einzige richtige Antwort, also ist Verifikation Urteilskraft, und die Designarbeit verlagert sich auf die Phasierung. Die Wissensbasis rahmt Schreiben als kognitiven, sozialen und rhetorischen Prozess, was bedeutet, dass ein KI-Schreibsystem Lernen unterstützen und genau das Denken beseitigen kann, für das die Aufgabe existierte ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**Ein Fähigkeitsmodell.** Verfolgen Sie Argumentation (Spezifik der These, Ausrichtung von Behauptung und Beleg, Gegenargument), Organisation (Absatzfokus, logische Progression, Übergänge), Belege (Relevanz der Quelle, Integration, Interpretation), Überarbeitung (globale und satzbezogene Überarbeitung, Bewertung von Feedback) und Stil (Klarheit, Grammatik, Stimme). Jedes wird zu einem eigenen Signal im Lernendenmodell, und das ist es, was gezieltes Feedback überhaupt möglich macht.

**Verankern Sie den Coach in der Aufgabe.** Rufen Sie die Anweisungen, das Bewertungsraster der Lehrperson, Kurslektüre, Zitieranforderungen, Gattungskonventionen, Beispiele der Lehrperson und die KI-Nutzungsrichtlinie ab, damit Feedback sagen kann „das Raster Ihrer Lehrperson verlangt, dass Sie jede zentrale Behauptung mit Belegen aus mindestens zwei Kurslektüren verbinden", statt generische Erwartungen zu erfinden. Generische Ratschläge sind der Standardfehler eines nicht verankerten Schreibwerkzeugs, und Studierende merken das innerhalb von zwei Sitzungen.

**Setzen Sie Berechtigungen pro Phase.** KI-Beteiligung in verschiedenen Phasen wirkt sich unterschiedlich auf das wahrgenommene Eigentum aus. Unterstützung beim Planen reduziert Eigentum weniger als Unterstützung beim Entwerfen, und KI-generiertes Entwerfen erzeugt den größten Rückgang ([[ai-writing-support-stage-ownership-2026|From Planning to Revision]]). Dieser Befund lässt sich direkt in eine Berechtigungstabelle übersetzen. Beim Planen stellt der Coach Fragen, vergleicht Positionen, hinterfragt Annahmen und kritisiert Gliederungen, und er generiert nicht das Argument. Beim Entwerfen produziert die lernende Person zuerst Prosa, und der Coach entwickelt weiter, statt zu übernehmen. Beim Überarbeiten diagnostiziert der Coach und hört dort auf: unklare Behauptungen, fehlende Belege, Belege, die die Behauptung nicht stützen, organisatorische Probleme, der Entwurf gegen das Raster. Beim Lektorieren, nach der Überarbeitung, übernimmt er Grammatik, Zeichensetzung, Prägnanz und Zitierformatierung.

**Eine durchgespielte Interaktion.** Bei einem Essay über die Pflicht zu [[online-teaching-and-learning|Online-Kursen]] schreibt ein generisches System den Absatz der studierenden Person in polierte Prosa um und erledigt die intellektuelle Arbeit. Ein Coach sagt, was funktioniert, benennt das Hauptproblem (der Absatz nennt Gründe, erklärt aber nie, warum sie ein hochschulweites Mandat rechtfertigen), stellt eine Überarbeitungsfrage und bittet die studierende Person, einen Satz in eigenen Worten zu vervollständigen. Das Argument bleibt, wo es hingehört.

**Priorisiertes Feedback.** Eine Stärke, die erhalten bleiben soll, ein Problem mit hoher Wirkung, eine Frage, die das Urteil der schreibenden Person verlangt, ein konkretes Überarbeitungsziel. Nicht vierzig Kommentare. Eine studierende Person, die vierzig Kommentare erhält, sortiert sie nach Länge, und diese Sortierung hat nichts mit dem zu tun, was zählt.

**Lassen Sie die studierende Person das Feedback beurteilen.** [[feedback-literacy|Feedback-Kompetenz]] ist ein Lernziel für sich. Fragen Sie regelmäßig, ob die lernende Person einem Vorschlag zustimmt und warum, und lassen Sie sie ihn ablehnen. Das Ergebnis ist [[evaluative-judgment|evaluatives Urteil]] statt Befolgung, und es ist auch die einzige Verteidigung gegen einen Coach, der selbstsicher falsch liegt.

**Bewahren Sie die Stimme.** Unterscheiden Sie Fehler, Klarheitsprobleme, rhetorische Entscheidungen und Stilvorlieben, und lassen Sie die letzten beiden in Ruhe. Ein Coach, der rhetorische Entscheidungen „korrigiert", homogenisiert Texte hin zu dem Stil, den das Modell bevorzugt, und er richtet den größten Schaden bei [[multilingual-learning|mehrsprachigen]] Schreibenden und nicht standardisierten rhetorischen Traditionen an ([[ai-feedback-quality|KI-Feedback-Qualität]] ist die allgemeine Version dieses Problems).

**Lernen Sie aus den Überarbeitungen.** Speichern Sie die Überarbeitungshistorie statt nur der fertigen Essays. Ein wiederkehrendes Muster „Beleg eingeführt, aber nicht interpretiert", das sich über drei Essays hinweg verbessert, ist das nützlichste Signal, das ein Schreibsystem haben kann, und es ist kostenlos.

**Evaluation.** Qualität des KI-gestützten und des späteren Schreibens ohne KI, Fähigkeit, Schwächen in unvertrautem Text zu finden, Qualität der Überarbeitung, Aufnahme von Feedback, Fähigkeit, Überarbeitungen zu erklären, Eigentum, Abhängigkeit von KI-Prosa, Bewahrung der Stimme, Verzerrung über Dialekte und mehrsprachige Schreibende hinweg, Übereinstimmung mit dem Urteil der Lehrperson und verzögerter Transfer. Das Design, das das beantwortet, hat drei Arme: selbstständig schreiben, KI generiert den Text, und ein Coach. Alle drei Gruppen schreiben danach einen neuen Essay ohne KI. Wenn die KI-generierte Gruppe in der Übung gewinnt und ohne KI verliert, hat das System die Leistung verbessert statt das Lernen. Muster auf Klassenebene aus dem Dashboard (41% brauchen Unterstützung bei der Verbindung von Behauptung und Beleg) sind ein [[formative-assessment|formatives Assessment]]-Signal für die Lehrperson.

## Die beiden Designs vergleichen

| Entwurfsfrage | Analysis-Tutor | Schreib-Coach |
|---|---|---|
| Primäres Lernobjekt | Mathematische Konzepte und Problemlösen | Argumentation und Schreibprozess |
| Verifikation | Oft objektiv prüfbar | Erfordert meist kontextuelles Urteil |
| Deterministische Werkzeuge | Symbolische Mathe-Engine, Taschenrechner | Grammatik-, Zitier- und Rasterprüfungen |
| Hauptrolle der KI | Schlussfolgern diagnostizieren und gerüsten | Überarbeitung diagnostizieren und gerüsten |
| Hauptrisiko | Die Lösung verraten | Den Text für die lernende Person schreiben |
| Handlung der lernenden Person, auf die es ankommt | Lösen und erklären | Entwerfen, beurteilen und überarbeiten |
| Lernendenmodell | Konzepte, Verfahren, Fehlvorstellungen | Argument, Belege, Organisation, Überarbeitung |
| Zentrale Schutzmaßnahme | Versuch vor Lösung | Prosa der studierenden Person vor KI-Umschreibung |
| Transfertest | Neue Analysisaufgaben ohne KI | Neue Schreibaufgabe ohne KI |
| Erfolgskriterium | Selbstständiges mathematisches Schlussfolgern | Selbstständiges Schreiben und evaluatives Urteil |

Beide Systeme nutzen dieselbe Menge von [[ai-technologies|KI-Technologien]] und verkörpern unterschiedliche pädagogische Richtlinien, weil die Disziplinen verschiedene Arten des Denkens verlangen. Die Regel, die sich verallgemeinern lässt, lautet: Identifizieren Sie die kognitive Aktivität, die das Lernen erzeugt, und designen Sie die KI so, dass sie diese Aktivität unterstützt, ohne sie auszuführen. Diese Regel steht über jedem bestimmten Modell, Prompt, Agenten-Framework oder jeder Oberfläche.

## Was Entwicklungsteams falsch machen

Die Pädagogik lebt im System-Prompt, also ist ein sorgfältiger Prompt ein pädagogisches Design. Ein Prompt ist eine Schicht einer Richtlinie, die auch umfasst, welche Belege Sie erheben, welche Sprosse die Oberfläche anbietet, was der Verifizierer prüft und was das Dashboard zeigt. Ein gut geschriebener Prompt auf einem Lernendenmodell, das nichts speichert, erzeugt einen flüssigen Tutor ohne Erinnerung an die studierende Person, und die Leiter startet in jeder Sitzung neu.

Ein besseres Modell wird die Diagnose reparieren. Der Benchmarking-Befund oben fand LLM-Tutoren, die korrektes Schlussfolgern erkannten, während sie gültige Alternativen zurückwiesen und falsche akzeptierten, und das ist ein Fehlermuster, das Skalierung nicht offensichtlich behebt. Strukturierte Diagnose existiert, weil das Urteil des Modells der Teil ist, den Sie nicht prüfen können.

Zufriedenheit und Abschluss beweisen, dass das Design funktioniert. Sie beweisen, dass Studierende Hilfe bekommen haben. Der Pilotversuch mit 38 Programmierstudierenden fand wahrgenommenes Lernen stark mit der Nutzung assoziiert, während autonomer Fortschritt am niedrigsten abschnitt, und die Beherrschungsstudie fand, dass eine Streak-Anforderung die Plattformbeherrschung hob, ohne Zugewinn im verzögerten Test. Bauen Sie die Entzugsmessung in den Pilotversuch ein, sonst lernen Sie die falsche Lektion effizient.

Retrieval macht die Antworten vertrauenswürdig. Es reduziert das [[hallucination-risk|Halluzinationsrisiko]] und lässt den Rest der Fehlerfläche intakt: Eine abgerufene Passage kann falsch gelesen werden, eine gültige Technik kann für den Kurs falsch sein, und das Modell kann bei einem Schritt, den es selbst hergeleitet hat, weiterhin selbstsicher falsch liegen. Retrieval ist eine Untergrenze.

Die Sicherheitssuite zu bestehen bedeutet, dass es für Studierende sicher ist. Gewöhnliche Sicherheitstests decken Toxizität und Jailbreaks ab. Die pädagogischen Fehler, auf die es hier ankommt, Antwortenlecks, Sycophantie und Abdriften, sind für sie unsichtbar, und sie akkumulieren über ein Gespräch, statt in einem einzelnen Zug aufzutreten.

Engagement ist das Ziel. Gesprächslänge und Sitzungszahl sind die billigsten zu instrumentierenden Metriken, weshalb sie zu Zielen befördert werden. Das [[scaffolding]]-Argument sagt, dass die ideale Sitzung kürzer wird, während die studierende Person besser wird, also ist ein Anstieg des Engagements ebenso wahrscheinlich ein Symptom.

## Was Ihnen entgegenkommen wird

**„Wir liefern in sechs Wochen aus, und das ist ein Quartal Arbeit."** Der größte Teil der Architektur ist billig. Ein Versuchs-Gate, eine konfigurierte Leiter, Retrieval über Notizen, die Sie schon haben, und ein Log-Schema mit einem Entzugsfeld sind Tage Arbeit. Die teuren Posten (Lernendenmodell, Verifizierer, Dashboard) können hinter einem Feature-Flag für einen Kurs starten, und der Pilotversuch ist aussagekräftiger, wenn die billigen Teile erledigt sind.

**„Studierende lieben es, und der Abschluss ist gestiegen."** Beide Fakten sind mit einem System vereinbar, das Fragen gut beantwortet und nichts lehrt. Die Studie mit 6.000 Studierenden fand langsameren Fortschritt und weniger versuchte Fragen zusammen mit besserer Genauigkeit, also ist ein Rückgang beim Abschluss auch nicht automatisch eine schlechte Nachricht. Berichten Sie Leistung ohne Hilfe neben den Engagement-Zahlen und lassen Sie die beiden öffentlich widersprechen.

**„Wir können keine randomisierte Studie durchführen."** Sie können einen Vergleich innerhalb derselben Person ohne eine durchführen: dasselbe Lernziel, während der Einheit betreut, zwei Wochen später ohne Hilfe getestet, mit dem betreuten Wert daneben berichtet. Dieses Design beantwortet die Produktfrage und braucht keinen Kontrollarm. Was es Ihnen nicht sagen kann, ist das Kontrafaktische für Studierende, die den Tutor nie genutzt haben.

**„Das Modell ist eine Anbieter-API, also liegt das Hilfe-Verhalten außerhalb unserer Hände."** Die Sprossen leben in Ihrer Orchestrierungsschicht, und das Ergebnis des Guardrail-Experiments kam daher, dass geändert wurde, was der Tutor sagen durfte, nicht daher, dass Modelle getauscht wurden. Erwarten Sie, dass das Post-Training des Anbieters in Richtung prompten Antwortens zieht, weil Hilfsbereitschaft das ist, worauf es abgestimmt wurde, und legen Sie die Zurückhaltung in Ihren eigenen Code.

**„Lehrkräfte werden kein weiteres Dashboard nutzen."** Sie werden keines nutzen, das kontinuierlich Diagnostik ausgibt, was laut dem K-12-Review Aufmerksamkeit von ihrer eigenen Beobachtung abzog. Geben Sie ihnen eine kleine Zahl interpretierbarer Signale, eine Möglichkeit, jede Empfehlung anzunehmen oder abzulehnen, und Zeit in der Woche, sie anzusehen.

**„Wir haben keine Fachexpertise im Team."** Dann wird der Tutor generische Methoden lehren, und die Notation des Kurses driftet innerhalb eines Semesters. Eine Fachexpertin oder ein Fachexperte für zwei Tage in der Designphase, die die Fehlvorstellungsliste und die Liste freigegebener Methoden schreibt, ist der billigste Posten im Projekt und der, den Teams zuerst streichen.

## Diese Woche tun

**1.** Schreiben Sie den Satz zur Leistung ohne Hilfe für den Pilotversuch und setzen Sie ihn ins Pflichtenheft, über die Funktionsliste.

**2.** Fügen Sie ein Versuchs-Gate hinzu und protokollieren Sie es. Halten Sie fest, ob die studierende Person vor dem ersten Hinweis einen Versuch unternommen hat und welche Sprosse sie erreicht hat.

**3.** Ersetzen Sie die Hinweis-Schaltfläche durch die Frage nach dem blockierenden Punkt und protokollieren Sie die Antwort als Kategorie.

**4.** Planen Sie eine Prüfung ohne Hilfe zwei Wochen nach der Einheit und tragen Sie sie mit einer verantwortlichen Person in den Kalender ein.

**5.** Buchen Sie zwei Tage mit einer Fachlehrperson, um die Fehlvorstellungsliste und die Liste freigegebener Methoden zu schreiben.

## Wohin als Nächstes

[[designing-educational-ai-software]] behandelt die Regeln auf Softwareebene, die ein Tutor erfüllen muss, und [[designing-ai-into-learning]] behandelt, wo der Tutor in einer Kurssequenz sitzt. [[evaluating-ai-interventions-methods]] und [[checking-whether-educational-ai-works]] behandeln die Frage, ob das Ding funktioniert. Wenn Ihr Problem darin besteht, dass das Modell zu bereitwillig antwortet, arbeiten [[making-ai-better-at-supporting-learning]] und [[training-ai-tutors-to-guide-rather-than-answer]] die Trainingsseite derselben Frage durch.
