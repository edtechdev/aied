---
title: "Wie lehre ich Studierende, KI-Ausgaben zu verifizieren?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
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

Es ist die Woche vor der Notenabgabe, und zwei eingereichte Arbeiten zitieren Quellen, die es nicht gibt. Beide Studierenden sagen, sie hätten nachgeprüft. Die eine hat den Link geöffnet. Der andere hat den Absatz gelesen und entschieden, er klinge richtig. Sie haben dieser Gruppe bereits gesagt, sie solle prüfen, was der Chatbot ihr liefert, und das bloße Sagen hat das Verhalten nicht erzeugt.

Verifikation ist eine Abfolge, die Sie in eine Aufgabe einbauen können. Legen Sie vor dem Start der Aufgabe fest, was als korrekt gilt, lassen Sie die studierende Person eine Erwartung schriftlich festhalten, schicken Sie sie zum Beleg statt zu ihrem Eindruck von der Prosa, und bewerten Sie den Beleg, den sie erzeugt. Eine Rubrikzeile, die „Quellen geprüft“ sagt, misst davon nichts.

## Die kurze Version

**1.** Schreiben Sie zuerst den Lösungsschlüssel. Eine Prüfung braucht etwas, gegen das sie auflösen kann, und die meisten Verifikationsaufgaben definieren nie, was korrekt heißt.

**2.** Verlangen Sie eine Vorhersage, bevor die Ausgabe erscheint, damit die Überlegung der studierenden Person auf Papier steht, bevor das Werkzeug sie überschreiben kann.

**3.** Benennen Sie das Ziel jeder Prüfung: die Autorinnenliste, das Publikationsorgan, das Jahr, die konkrete Zahl, den konkreten Schritt. „Stellen Sie sicher, dass es stimmt“ ist keine Prüfung.

**4.** Trennen Sie die Prüfung, die eine Maschine ausführen kann, von dem Urteil, das nur eine lesende Person fällen kann, und lehren Sie die Studierenden, welches von beidem sie gerade tun.

**5.** Bewerten Sie den Beleg gegen den Schlüssel, nicht die Anstrengung, damit Prüfungstheater nichts einbringt.

**6.** Legen Sie die Prüfung in die Aufgabe hinein. Zeitdruck ist ein dokumentierter Grund dafür, dass Studierende sie auslassen.

## Entscheiden Sie, was korrekt heißt, bevor irgendjemand etwas prüft

[[verification-quality-reliance-calibration-genai-2026|Wei und Shang (2026)]] begutachten 493 deduplizierte Datensätze und ordnen 14 vorrangige empirische Studien zu, und sie trennen dabei sieben Dinge, die „kritische KI-Nutzung“ zu einem einzigen zusammenfallen lässt: epistemische Bewertung, Initiierung der Verifikation, Prozessqualität, Verifikationserfolg, Abhängigkeitsentscheidungen, unmittelbare Aufgabenleistung und eigenständiges Lernen. Ihre Rubrik sagt „Quellen geprüft“, und das liegt auf Stufe zwei und sagt Ihnen nichts darüber, ob die Prüfung kompetent war oder ob sie die Antwort der studierenden Person verändert hat. Initiierung ist nicht Erfolg. Ein starkes Vorgehen kann ergebnislos enden, ein schwaches kann auf die richtige Antwort treffen, und eine studierende Person, die eine Suche ausgeführt hat und verwirrt geblieben ist, erhält dieselbe Punktzahl wie eine, die die Frage geklärt hat.

Dieselbe Übersicht zieht eine zweite Linie, die zwischen [[trust]] und Abhängigkeit verläuft. [[trust-calibration|Abhängigkeitskalibrierung]] fragt, ob eine Abhängigkeitsentscheidung angesichts der tatsächlichen Qualität der Ausgabe angemessen war, was das Urteil an eine Entscheidung und eine Ausgabe bindet. Eine begutachtete Studie fand, dass falsche ChatGPT-Informationen das berichtete Vertrauen der Teilnehmenden verschoben, und hielt nie fest, ob diese später eine bestimmte Empfehlung annahmen oder ablehnten. Eine andere Studie protokollierte Annahme- und Ablehnungsentscheidungen zu ChatGPT-[[feedback]] bei 78 Translationsstudierenden, doch ohne unabhängige Expertenbewertung lässt sich eine Annahme nicht angemessen und eine Ablehnung nicht begründet nennen. Ohne Grundwahrheit über die Qualität der Ausgabe lässt sich Abhängigkeit überhaupt nicht klassifizieren.

Das ist die Designfolge, und es ist das Erste, was zu reparieren ist. Bevor Sie eine Verifikationsaufgabe stellen, schreiben Sie zwei kurze Beschreibungen: wie eine korrekte Ausgabe für diese Aufgabe aussieht, und wie eine plausible, aber falsche Ausgabe aussieht. Je eine reicht. Die Studierenden haben dann einen Maßstab, gegen den sie prüfen können, und Sie haben etwas, woran Sie die Prüfung bewerten können, außer daran, ob die studierende Person sorgfältig klingt.

## Lassen Sie sie sich festlegen, bevor das Werkzeug antwortet

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] baut ein Messprogramm auf *predict before you run* auf: Die lernende Person sagt, was geschehen sollte, und dann wird das Verhalten des Artefakts an dieser Vorhersage auf fachlicher Grundlage gemessen, nicht daran, ob es läuft. Die Überlegung existiert, bevor die Ausgabe existiert, und das macht sie bewertbar.

Seine Durchsicht von 24 Studien fand, dass dasselbe Werkzeug unter unterschiedlichen Aufgabenstrukturen zu entgegengesetzten Ergebnissen kam. Eine konventionelle ChatGPT-Einrichtung endete signifikant niedriger in Leistung, [[self-efficacy|Selbstwirksamkeit]] und Flow, während eine Bedingung mit zusätzlichen Verifikationsanforderungen und Fehlerreflexionsmodulen stärkeres [[critical-thinking|höherstufiges Denken]] zeigte. Das Werkzeug war über diese Bedingungen hinweg konstant. Was variierte, war die Frage, ob die Aufgabe von der studierenden Person verlangte, eine Position zu halten, die das Werkzeug bestreiten konnte.

In der Praxis ist das eine Zeile auf dem Aufgabenblatt: Schreiben Sie, bevor Sie das Werkzeug öffnen, auf, was Sie erwarten, dass es sagt, und warum. Vergleichen Sie dann. Zwei Studierende können denselben Absatz erzeugen, und nur eine von beiden kann erklären, wo der Absatz von ihrer Vorhersage abweicht.

## Schicken Sie sie zum Beleg

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verfolgten 113.588 Referenzen aus 5.225 Arbeiten zur Informatikdidaktik, die seit 2021 erschienen sind, und prüften 828 verdächtige Datensätze manuell. Sie fanden 30 mit nachweislich fabrizierten bibliografischen Angaben in 14 Arbeiten, alle aus den Jahren 2025 und 2026. Dreizehn waren vollständig erfunden. Die anderen 17 kombinierten einen echten Titel mit fabrizierter oder falscher Autorschaft, falschem Publikationsorgan oder falschem Jahr. Auf dem SIGCSE Technical Symposium stieg die Zahl von 3 in den Proceedings von 2025 auf 17 in denen von 2026, also 2.3 % der Proceedings-Beiträge jenes Jahres.

Autorenfelder scheitern häufiger als jeder andere Teil einer generierten Referenz. Dieser einzelne Befund sagt Ihnen, wonach Sie fragen müssen. „Öffnen Sie die Quelle und lesen Sie die Autorinnenliste“ zielt auf das Feld, das am wahrscheinlichsten falsch ist, und es erzeugt eine Tatsache, die die studierende Person entweder hat oder nicht hat. „Stellen Sie sicher, dass die Quellen echt sind“ erzeugt eine Versicherung. Verlangen Sie von den Studierenden, Autoren, Publikationsorgan und Jahr gegen den Beleg selbst zu bestätigen. Die Arbeit verlangt, dass jedes zitierte Werk verifiziert wird und dass jede automatisierte Prüfung [[human-in-the-loop-ai|human-in-the-loop]] bleibt, und genau das ist die Gewohnheit, die eine Zitationsanforderung einübt.

## Trennen Sie die Prüfung, die eine Maschine ausführen kann, von dem Urteil, das nur eine lesende Person fällen kann

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] setzt eine vertretbare Schwelle dafür, was mechanisch geprüft werden darf: dokumentierte Kriterien, ein Abgleich mit etabliertem Wissen ohne deutendes Urteil und eine einzige richtige Antwort oder vorab festgelegte akzeptable Alternativen. Daten, Formeln, Zitate und Berechnungen erfüllen diese Schwelle. Alles Deutende verfehlt sie, und dort ist die eigene Lektüre der studierenden Person das Instrument der Prüfung.

Gousopoulos formalisiert dieselbe Trennung als Signalerkennungsproblem mit zwei unabhängigen Parametern. Sensitivität ist die Fähigkeit, korrekte von fehlerhafter Ausgabe zu unterscheiden; Kriterium ist, wo die lernende Person die Schwelle für Ablehnung setzt. Überabhängigkeit teilt sich entlang dieser Linie. Warnungen, Checklisten und Halluzinations-Prompts verschieben das Kriterium und verändern, wann eine studierende Person ablehnt. Fachliche Unterweisung, durchgearbeitete Vergleiche und Übung mit eingesäten Fehlern erhöhen die Sensitivität, weil die lernende Person dann unterscheiden kann. Eine studierende Person, die fehlerhafte Ausgabe annimmt, kann ein Kriteriumsproblem oder ein Sensitivitätsproblem haben, und die beiden brauchen unterschiedliche Lehre.

Die Voraussetzung ist unbequem. Verifikationsunterweisung ist nur dort bildend, wo die Sensitivität über null liegen kann, was genug Fachwissen verlangt, um korrekte von falscher Ausgabe zu unterscheiden. In derselben Durchsicht gelang es Novizen, die von einem [[llm]] erzeugten Code erklären sollten, bei etwa einem Drittel der Aufgaben, sodass die Beurteilung von KI-Feedback oder Code gegen das eigene Nachdenken nur dort eine echte Prüfung ist, wo dieses Nachdenken Substanz hat. Wenn Ihre Studierenden das fachliche Denken noch nicht ohne Hilfe leisten können, kaufen weitere Warnungen nichts. Lehren Sie den Inhalt und hängen Sie die Prüfung daran.

Eine weitere Warnung gehört ins Design: Interventionen, die unangemessene Annahme verringern, müssen auch darauf geprüft werden, ob sie brauchbare Unterstützung ungewollt zurückweisen. Lassen Sie Raum dafür, dass eine studierende Person gute Ausgabe aus einem genannten Grund annimmt.

## Bewerten Sie die Prüfung, ohne sie in Überwachung zu verwandeln

Gousopoulos zieht die Konsequenz direkt. Wenn die KI das Artefakt erzeugen kann, kann das Artefakt nicht die Bewertung sein, also verlagert sich die Beurteilung auf die Spezifikation, die Validierungsüberlegung und die Interpretation. Sein Konstrukt der Modellautorschaft hat vier Facetten – Spezifikation, konzeptuelles Modell, Verifikation und Interpretation – auf vier geordneten Stufen von delegiert bis verfasst. Die Stufe „verfasst“ verlangt eine überprüfbare Spezifikation vor dem ersten Prompt, die Ablehnung von Ausgabe aus fachlichen Gründen mit genanntem Grund und eine Interpretation, die über den eigenen Bericht des Artefakts über sich selbst hinausgeht.

Die Rubrik stützt sich auf Material, das eine Konstruktionsaufgabe ohnehin erzeugt, sodass dasselbe Instrument zugleich eine [[formative-assessment|formative Bewertung]] und ein Forschungsmaß ist. Das beantwortet die Sorge um Beschäftigungstherapie: Sie bewerten ein Nebenprodukt einer Aufgabe, die Sie ohnehin gestellt haben. Zwei Grenzen gehören daneben. Keine Studie unter Wei und Shangs 14 vorrangigen Fällen hat Verifikationserfolg und die folgende Abhängigkeitsentscheidung zusammen gemessen, und wenige haben die unmittelbare Leistung mit verzögerter Behaltensleistung oder [[transfer-of-learning|Transfer]] verfolgt, sodass die Rubrik auf einer analytischen Landkarte ruht und nicht auf einer validierten kausalen Abfolge.

Drei Entscheidungen verhindern, dass daraus Überwachung wird. Bewerten Sie die Prüfung gegen beurteilte Qualität statt gegen Anstrengung, sonst bauen Sie einen Anreiz, Prüfen zu spielen. Legen Sie die Herkunft offen, wie Venetsanos es verlangt: Studierende müssen wissen, welche Teile des Feedbacks, das sie erhalten, maschinell verifiziert und welche bewertend beurteilt wurden, und dass menschliches Urteil Vorrang hat, weil sie Feedback nicht gewichten können, das sie nicht verorten können. Und halten Sie die Durchsetzung aus Detektionswerkzeugen heraus. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argumentieren, dass [[ai-detection|KI-Detektion]] in der Bildung überhaupt nicht verwendet werden sollte: Ihre Schätzungen sind probabilistisch und lassen sich nicht unabhängig verifizieren, weil die Herkunft realer Texte unbekannt ist, ihre Werte erfüllen nicht den Standard der überwiegenden Wahrscheinlichkeit, den Integritätsverfahren verlangen, und die Dichotomie Mensch gegen KI ist bedeutungslos für Arbeiten, die mit KI statt von KI erstellt wurden. Ihr Schluss ist, dass Detektion „die akademische Integrität nicht schützt; sie untergräbt sie“. Überwachungsregime fördern Misstrauen und zehren das [[trust|Vertrauen]] auf, das Sie brauchen, damit Studierende überhaupt etwas offenlegen. Halten Sie die beiden Bedeutungen von Detektion auseinander. Das Erkennen KI-generierten Textes hat hier keine vertretbare beweisrechtliche Rolle; Studierenden beizubringen, Fehler in KI-Ausgabe zu erkennen, ist die ganze Übung.

Die Trennung ist architektonisch und es lohnt sich, sie den Studierenden zu erklären. [[vetting-dual-llm-safety-education|Li, Zhang und Botelho (2026)]] prüfen Ausgabe mit einem zweiten Modell, statt die Prüfung in den Generator einzubetten. Wer sieht, warum das so gebaut ist, sieht auch, warum „das Werkzeug hat gesagt, es sei richtig“ kein Verifikationsargument ist.

## Wenn Sie den Kurs gestalten statt ihn zu lehren

Drei Befunde von oben gehören in den Kursaufbau, wo eine allein arbeitende Lehrperson sie nicht erreichen wird.

Der erste ist eine Diagnose. Führen Sie eine Aufgabe mit eingesäten Fehlern durch: zwanzig Items, acht mit einem fachlichen Fehler. Die Aufgabe sagt Ihnen, ob Studierende überhaupt unterscheiden können, bevor Sie ein Semester damit verbringen, ein Kriterium zu lehren, das sie nicht nutzen können. Eine Gruppe, die die eingesäten Fehler übersieht, braucht inhaltliche Wiederholung, was auch immer der Syllabus über kritische Nutzung sagt.

Der zweite ist die Platzierung der Warnung. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings und Park (2026)]] zeigten 100 in den USA ansässigen Studierenden, 40 muttersprachlichen und 60 internationalen EFL-Studierenden, unmittelbar vor zwei Aufgaben eine allgemeine Vorwarnung. Geimpfte Studierende verifizierten die Aufgabe zur Zusammenfassung akademischer Quellen deutlich häufiger (M = 0.34 gegenüber 0.18), während die selbstberichtete Verifikationsabsicht sich nicht bewegte. Der Effekt war zudem aufgabenspezifisch: Er zeigte sich bei der Quellenzusammenfassung, aber nicht durchgängig bei einem Mathe-Quiz zu Potenzen und Multiplikation großer Zahlen. Setzen Sie die Warnung an den Ort der Nutzung, pro Aufgabentyp, statt einmal im Syllabus oder im Orientierungsmodul.

Der dritte ist die Terminierung. Ein Syllabus, der die Verifikation ungetaktet lässt, sagt, sie sei optional, und Zeitdruck ist ein dokumentierter Grund, aus dem Studierende Prüfungen auslassen. Verifikation, die in der Aufgabe selbst liegt und ein bewertetes Artefakt mit sich führt, geschieht. Verifikation, die in einem Policy-Absatz liegt, geschieht nicht.

## Wenn Sie die studierende Person sind, die das hier liest

Vier Schritte decken das meiste ab, was die Forschung von Ihnen verlangt.

Schreiben Sie Ihre Erwartung auf, bevor Sie den Prompt abschicken. Ein Satz dazu, was die Antwort sein sollte, dann vergleichen Sie die Ausgabe damit.

Öffnen Sie die Quelle. Lesen Sie die Autorinnenliste, das Publikationsorgan und das Jahr gegen den Beleg, denn das Autorenfeld ist der Ort, an dem generierte Referenzen am häufigsten scheitern.

Schreiben Sie für alles Deutende den Grund in eigenen Worten. Ein fabrizierter Grund ist so sichtbar wie eine fabrizierte Zitation.

Misstrauen Sie dem Gefühl, dass die Prosa sich gut liest. Novizen, die LLM-generierten Code erklären sollten, gelangen bei etwa einem Drittel der Aufgaben zum Erfolg, und eine Feldstudie zu Quizgesprächen zwischen Studierenden und ChatGPT fand, dass das Befolgen korrekter Hinweise dennoch eine falsche Antwort ergab. Was Sie prüfen können, ist enger als das, was Sie lesen können.

## Was Lehrende hier falsch machen

**„Ich habe ihnen doch gesagt, sie sollen ihre Quellen prüfen.“** Eine Warnung verlangt eine Haltung. Sorgfältige Studierende haben sie, eilige nicht, und in dem Satz steckt nichts, wonach eine studierende Person um 23 Uhr handeln kann, während auf dem Bildschirm eine Ausgabe steht, die sich vollkommen gut liest.

**„Eine Rubrikzeile zum Prüfen der Quellen deckt das ab.“** Diese Zeile liegt bei der Initiierung und sagt nichts über Prozessqualität oder Erfolg. Eine studierende Person, die eine Suche ausgeführt und aufgegeben hat, erhält dieselbe Punktzahl wie eine, die die Frage geklärt hat, also belohnt die Rubrik die Geste.

**„Wenn sie sorgfältig lesen, werden sie die Fehler finden.“** Flüssigkeit trägt das Urteil. Die begutachtete Literatur zeigt Novizen bei etwa einem Drittel Erfolg beim Erklären generierten Codes, und die Feldstudie verzeichnete eine falsche Antwort, die über korrekte Hinweise zustande kam.

**„Studierende, die sagen, sie würden prüfen, prüfen auch.“** In der Studie von Vu, Cummings und Park bewegte sich die selbstberichtete Absicht nicht, während sich das gezeigte Verhalten bewegte (M = 0.34 gegenüber 0.18). Bewerten Sie das Verhalten, das sich bewegt hat.

**„Die Studierenden, die die Prüfung auslassen, sind die, denen es egal ist.“** [[trust-calibration-chatbots-design-problem-2026|Jaidka und Cai (2026)]] kreuzen die Fähigkeit zu verifizieren mit der Motivation zu verifizieren, und die Profile brauchen unterschiedliche Abhilfen. Die studierende Person mit hoher Fähigkeit und niedriger Motivation neigt zu selbstgefälligem Übervertrauen. Die studierende Person mit niedriger Fähigkeit und niedriger Motivation ist am stärksten exponiert. Zwei Studierende, die an derselben Prüfung scheitern, können entgegengesetzte Lehre brauchen, und [[prior-knowledge|Vorwissen]] entscheidet, wen Sie vor sich haben.

**„Mehr Warnungen werden die Studierenden reparieren, die nicht unterscheiden können.“** Warnungen verschieben das Kriterium. Sie erhöhen die Sensitivität nicht, und die Sensitivität ist es, was eine studierende Person, die den Fehler erkennt, von einer unterscheidet, die es nicht kann.

**„Ein Detektor stützt die Policy ab.“** Nach der obigen Evidenz verfehlt ein Detektorwert den Standard, den ein Integritätsfall verlangt, die Trennung Mensch gegen KI trägt für Arbeiten mit KI nicht, und das Regime kostet Sie das [[trust|Vertrauen]], das Sie brauchen, damit Studierende überhaupt etwas offenlegen.

## Was Ihnen entgegenkommen wird

**„Sie können es einfach für die Note machen.“** Teilweise wahr, also bewerten Sie Material, das die KI nicht anstelle einer studierenden Person erzeugen kann. Eine Spezifikation, die vor dem ersten Prompt geschrieben wurde, eine Vorhersage, die festgehalten wurde, bevor das Artefakt läuft, eine Quellenliste, die gegen den Beleg geprüft wurde, ein genannter fachlicher Grund für eine Ablehnung: Jedes davon verlangt von der studierenden Person, eine Position zu halten, die der Generator nicht liefern kann. Ein fabrizierter Grund ist so sichtbar wie eine fabrizierte Zitation. Wo eine studierende Person kein Fachwissen hat, gegen das sie prüfen kann, ist Verifikation Theater, und keine Rubrik rettet das – was ein Argument dafür ist, zuerst den Inhalt zu lehren.

**„Im Syllabus ist keine Zeit dafür.“** Die Vorwarnung ist eine Nachricht vor der Aufgabe. Die Aufgabe mit eingesäten Fehlern nutzt ein Quiz, das Sie ohnehin geben. Die Rubrik stützt sich auf Material, das die Aufgabe ohnehin erzeugt, sie kostet also Bewertungszeit für Evidenz, die Ihnen sonst fehlen würde. Die Alternative kostet mehr: unverifizierte Einreichungen, fabrizierte Referenzen und die Integritätsgespräche, die folgen.

**„Das Werkzeug hat meistens recht.“** Dann ist die Prüfung billig, und die Ausnahmen sind der Punkt. Autorenfelder scheitern häufiger als jeder andere Teil einer generierten Referenz, 17 der 30 fabrizierten Einträge kombinierten einen echten Titel mit falscher Autorschaft, falschem Publikationsorgan oder falschem Jahr, und 17 tauchten in den Proceedings eines einzigen Jahres auf. Genauigkeit bei den Teilen, die Sie zufällig bemerken, sagt nichts über die Teile, die Sie nicht bemerken.

**„Meine Studierenden wissen nicht genug, um die Ausgabe zu beurteilen.“** Das ist die Sensitivitätsschwelle, und sie ist real. Gousopoulos sagt vorher, dass Verifikationsunterweisung unterhalb eines fachlichen Wissenssockels scheitert, und merkt an, dass manche Fächer ein externes Kriterium liefern – Physik, Chemie, Ökologie und Epidemiologie darunter –, während Geschichte, Literatur und [[ethics|Ethik]] das weitgehend nicht tun. Lehren Sie das Fach und hängen Sie die Prüfung daran, oder erwarten Sie, dass die Prüfung zum Ritual wird.

**„Das ist Überwachung.“** Das ist es, wenn Sie Anstrengung bewerten oder beobachten, wie Studierende arbeiten. Bewerten Sie das Artefakt gegen den Schlüssel, sagen Sie, welches Feedback maschinell geprüft und welches von einer Person beurteilt wurde, und lassen Sie Detektoren draußen.

## Was Sie diese Woche tun können

**1.** Schreiben Sie die beiden Beschreibungen für Ihre nächste Aufgabe: eine korrekte Ausgabe und eine plausible falsche. Das ist der Schlüssel, gegen den die Prüfung auflöst.

**2.** Fügen Sie die Vorhersagezeile hinzu. Ein Satz, geschrieben bevor das Werkzeug geöffnet wird, danach auf fachlicher Grundlage verglichen.

**3.** Ersetzen Sie „prüfen Sie Ihre Quellen“ durch „öffnen Sie den Beleg und bestätigen Sie die Autoren, das Publikationsorgan und das Jahr“.

**4.** Setzen Sie acht eingesäte Fehler in ein Quiz, das Sie ohnehin geben, und sehen Sie, welche Studierenden sie finden.

**5.** Bewerten Sie ein Verifikationsartefakt gegen den Schlüssel und sagen Sie der studierenden Person, welcher Teil der Prüfung gescheitert ist: der Maßstab, der Prozess oder die Entscheidung.

## Wohin als Nächstes

[[incorporating-ai-literacy]] behandelt, wie Sie das Verständnis aufbauen, das diese Seite einsetzt, und [[ai-literacy-evidence]] behandelt, was diese Kompetenzarbeit wert ist. [[reducing-over-reliance]] behandelt die Designseite von Studierenden, die sich auf das Werkzeug stützen, [[study-with-ai]] ist der Begleiter für Studierende, und [[asynchronous-online-courses-ai]] behandelt die Version dieses Problems, in der es keine Sitzung gibt, in die sich eine Prüfung legen ließe. Zum Feedback, das Studierende prüfen, siehe [[ai-feedback-quality]] und [[hallucination-risk]].
