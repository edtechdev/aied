---
title: "Wie kann mir KI helfen, im Maßstab besseres Feedback zu geben?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
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

Es ist Woche sechs. Sie haben einen Stapel Entwürfe, ein Rubric, an das Sie glauben, und den wachsenden Verdacht, dass ein Drittel Ihrer Kommentare überflogen und vergessen wird. Eine Kollegin erwähnt, dass ein Werkzeug inzwischen jeden Entwurf innerhalb einer Stunde kommentiert. Die Fachbereichssitzung braucht eine Antwort: Ist das ein Fortschritt oder ein schnellerer Weg, Text zu produzieren, den niemand liest?

Die kurze Antwort, die Sie einer Kollegin geben können: KI-Feedback verdient seinen Platz bei Abdeckung, Rechtzeitigkeit und Konsistenz, innerhalb eines schmalen Bands. Sprachliche Arbeit im Korrekturlese-Maßstab und rubric-geleitete Kommentare zum ersten Durchgang sind es wert, automatisiert zu werden. Die Reichweite ist der billige Teil. In einem cluster-randomisierten Experiment mit 1.176 Erstsemesterstudierenden schlugen reflexive und hybride Designs die direkte KI-Kritik beim verzögerten, KI-freien [[transfer-of-learning|Transfer]]. In einem randomisierten Essay-Experiment mit 70 Studierenden erzeugte besser bewertetes KI-Feedback keine besseren Überarbeitungen als das einer erfahrenen Lehrkraft. Was eine Studierende mit einem Kommentar tut, entscheidet das Ergebnis, und [[feedback-literacy|Feedbackkompetenz]] trennt die Studierenden, die profitieren, von denen, die abschreiben.

## Die Kurzfassung

**1.** Legen Sie fest, was als Erfolg zählt, bevor Sie irgendetwas pilotieren: Überarbeitungsqualität und verzögerte Leistung ohne Hilfsmittel, nicht die Flüssigkeit der Kommentare.

**2.** Sortieren Sie Ihre eigenen Kommentare in Korrekturen auf Sprachebene und Entscheidungen auf Urteilsebene. Nur die erste Kategorie ist ein Kandidat für Automatisierung.

**3.** Staffeln Sie die Quellen. Zuerst Selbsteinschätzung, dann Peer-Feedback, dann KI-Kritik. Zwei Quellen nebeneinandergestellt erzeugen passive Übernahme.

**4.** Geben Sie dem Modell Ihr Rubric und lassen Sie es Schritt für Schritt begründen. Eine bloße Anweisung erzeugt generische Ausgabe.

**5.** Behalten Sie die endgültige Nachricht, den Ton und alles, was zu einem Datensatz wird, bei einem Menschen.

**6.** Kalkulieren Sie die Stunden ein, die Sie für Löschen und Kalibrieren brauchen, und vergleichen Sie sie mit den Stunden, die Sie freigesetzt haben.

## Legen Sie fest, was als Erfolg zählt, bevor Sie irgendetwas pilotieren

Die verführerische Kennzahl ist die Qualität dessen, was das Modell schreibt. Sie ist auch die Kennzahl, die in die Irre führt.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] randomisierten 70 Studierende, die argumentative Essays auf Persisch schrieben, in drei Gruppen. Chain-of-Thought-Prompting erzeugte signifikant höher bewertetes Feedback (M = 12.90) als Zero-Shot-Prompting (M = 11.25, p = 0.01) und als eine erfahrene menschliche Lehrkraft (M = 11.20, p = 0.008). Die Chain-of-Thought-Gruppe überarbeitete ihre Essays nicht signifikant stärker als die Gruppe mit Lehrkraft-Feedback, die vergleichbare Zugewinne erzielte. Bessere Kommentare, dieselben Überarbeitungen. Wenn Ihr Erfolgskriterium die Kommentarqualität ist, liest sich diese Studie als Erfolg. Wenn es das ist, was sich im Essay verändert hat, dann nicht.

Zwei weitere Signale schmeicheln einer Pilotierung, die schlecht läuft, also legen Sie sie vorab fest. Die Studierendenzufriedenheit ist das eine. In der hochschulweiten Deakin-Pilotierung, über die [[tubino-adachi-ai-automated-feedback-literacy|Tubino und Adachi (2022)]] berichten, koexistierten positive Durchschnittsbewertungen mit von Studierenden gemeldeten Fehlern, ein Smiley-Fragebogen ist also kein Genauigkeitsbeleg. Die Nutzung ist das andere. Das Deakin-Werkzeug war optional, und die Nutzung lag im Durchschnitt bei etwa 13% der Bachelor- und 12% der Masterstudierenden, obwohl fast 4.000 Studierende Zugang hatten. Proaktive, leistungsstarke Studierende nutzten es häufiger. Das ist es, was es bringt, ein Werkzeug verfügbar zu machen.

Das Erfolgsmaß, das standhält, ist Überarbeitungsqualität plus verzögerte Leistung ohne KI. Mehrfache Wiedereinreichungen am selben Tag sind eine brauchbare Spur dafür, ob sich eine Studierende überhaupt damit befasst hat. Sie sind kein Beleg dafür, dass etwas gelernt wurde.

## Sortieren Sie Ihre Kommentare, bevor Sie sie automatisieren

Nehmen Sie Ihren letzten Kommentarsatz und teilen Sie ihn in zwei: Korrekturen an Sätzen und Entscheidungen über das Denken. Die Teilung sagt Ihnen, was zu automatisieren ist, und sie ist schmaler, als Anbieter suggerieren.

Die Deakin-Pilotierung lief 2021 mit dem KI-Werkzeug für automatisiertes Feedback von FeedbackFruits über 29 Einheiten und fast 4.000 Studierende. Es arbeitet an Textmerkmalen auf Mikroebene: Satzlänge, Interpunktion, Grammatik, Textstruktur. Das trägt die Korrekturlesephase, in der die Lehrkraft die Parameter setzt, die Studierende das Werkzeug selbstständig nutzt und das Feedback rechtzeitig ankommt, um handlungsfähig zu sein. Die Arbeitsteilung ist es, die skaliert, nicht das Modell.

Kommentare auf Urteilsebene sind der Ort, an dem die Fehlermuster leben. [[learner-centered-feedback-ai|Aldino et al. (2026)]] sammelten lehrkraftseitige Probleme von 21 Lehrkräften im Hochschulbereich: inkonsistenter Ton (n = 7), mögliche Fehlinformationen (n = 5) und Vertrauensprobleme (n = 5). Ihr Überarbeitungsaufwand floss ins Löschen übertriebenen Lobs und generischer Vorschläge statt ins Ergänzen von Inhalt. Diese Liste ist Ihre Prüfaufgabe, und dorthin gehen die Stunden.

## Staffeln Sie die Quellen, statt sie zu stapeln

Die stärkste Designevidenz stammt aus einem standortübergreifenden, cluster-randomisierten, längsschnittlichen Feldexperiment: 1.176 Erstsemesterstudierende in 48 Kursgruppen an 4 Universitäten und in 3 [[stem-education|naturwissenschaftlichen]] Domänen, auf Ebene der Kursgruppe randomisiert in die Bedingungen nur Peer, direkte GenAI, reflexive GenAI und hybrid ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Die reflexive Bedingung verlangte Selbsteinschätzung vor der KI-Kritik. Die hybride lief Selbsteinschätzung, dann Peer-Feedback, dann GenAI-Kritik. Hybrid erzeugte die höchsten Zugewinne in Argumentqualität und den klarsten Vorteil beim konzeptuellen Lernen. Reflexiv und hybrid erzeugten beide stärkere Feedback-Übernahme und mehr [[self-regulated-learning|selbstreguliertes Lernen]] als direkte GenAI, und beide übertrafen sie beim verzögerten, KI-freien Transfer. Direkte GenAI hob die unmittelbare Argumentqualität über das Peer-Feedback, das ist ihr Vorteil, und sie tat es mit schwächerem Transfer.

Der Mechanismus erklärt, warum die Abfolge mehr zählt als das Werkzeug. Direkte Kritik lädt zur passiven Übernahme ein: Die Studierende liest ein Urteil und wendet es an. Reflexive und hybride Designs zwingen sie, den Kommentar zu interpretieren, ihn gegen Kriterien zu halten, seine Relevanz zu beurteilen und dann zu überarbeiten. Der Bildungswert hängt weniger vom KI-Zugang ab als davon, ob die Feedback-Umgebung [[agency|Handlungsfähigkeit]] und [[evaluative-judgment|evaluatives Urteil]] beim Überarbeiten erhält.

Peer-Feedback verdient seinen eigenen Platz in der Abfolge. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen und Yan (2026)]] führten zwei parallele Englischkurse (N = 118 Erstsemesterstudierende in China; GenAI n = 56, Peer n = 62) durch drei Selbsteinschätzungszyklen über ein Semester. GenAI-Scaffolding verbesserte die Feedbackkompetenz leicht, aber signifikant gegenüber menschlichem Peer-Review (ANCOVA p = 0.049, ηp² = 0.03). GenAI-Studierende verfeinerten Prompts iterativ und verifizierten oder hinterfragten ungenaue Ausgabe. Studierende in der Peer-Gruppe wählten Quellen nach sozialer Bequemlichkeit und ließen ihr evaluatives Urteil durch Freundschaftsbias verzerren. Peer-Review behielt einen eigenständigen Wert für die Adressatenbewusstheit, weshalb die Autorinnen und Autoren mehrstufige Designs mit anonymem Peer-Feedback vorschlagen statt eines Ersatzes.

Der Vorteil von Gu et al. war klein, und sie lesen ihn als real, aber nicht für sich genommen transformativ. Teacher-Scaffolding, Prompt-Leitlinien und Arbeitsblätter leisteten die unterstützende Arbeit.

## Geben Sie dem Modell ein Rubric und lassen Sie es seine Schritte zeigen

Rubric-bezogene Generierung ist der automatisierbare Teil.

Der Qualitätsgewinn von Farrokhnia et al. kam aus einem Chain-of-Thought-Prompt, der das Modell durch eine schrittweise Bewertung gegen ein Argumentations-Rubric führte, nicht aus einer bloßen Anweisung, Feedback zu geben. Gu et al. gaben ihrer GenAI-Gruppe ChatGPT-4o mit vorab trainierten Rubrics und Prompt-Leitlinien, und das war es, was die Ausgabe gegen ausgewiesene Kriterien prüfbar machte. In beiden Fällen ist der Prompt der Ort, an dem Ihre Kriterien ins System gelangen, und die Begründungsspur ist das, was Ihnen zeigt, ob das Modell sie angewendet hat.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson und Yan (2025)]] machen die Prompt-Qualität zum Angelpunkt des ganzen Prozesses. Vage Prompts ergeben generische, nutzlose Ausgabe, und generierte Kommentare können halluziniert, verzerrt oder überlappend sein, was das evaluative Urteil wieder der Leserin aufbürdet. Die Kalibrierung ist noch schärfer. Bei Farrokhnia et al. hing die Qualität des GenAI-Feedbacks signifikant mit der Stärke des ersten Entwurfs einer Studierenden zusammen, die Qualität des Lehrkraft-Feedbacks nicht. Die Lehrkraft kalibrierte konsistenter. Volumen skaliert. Kalibrierung nicht.

## Behalten Sie das letzte Wort und den Datensatz bei Menschen

[[becerra-aicofe-feedback-2026|Becerra, Palma und Cobos (2026)]] beschreiben AICoFE, das drei unabhängig feinabgestimmte Modelle (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) über Rubric-Werte und qualitative Beobachtungen laufen lässt, um unabhängige Entwurfskommentare zu erzeugen. Die Lehrkraft stellt dann die endgültige Nachricht zusammen, indem sie Sätze oder Absätze auswählt, mit einer Legende, die zeigt, welches Modell was beigetragen hat. Das Modell entwirft. Die Lehrkraft liefert, und das Lieferobjekt ist von einer Person unterzeichnet, die den Entwurf gelesen hat.

Aldino et al. finden dasselbe Muster von Unterstützen und dann Verifizieren in der alltäglichen Praxis. Die Machine-Learning-Komponente markierte am häufigsten „Meeting Learning Objective" als fehlend (20 von 21 Lehrkräften hatten es ausgelassen; 16 akzeptierten die Markierung) und „Student-Teacher Relationship" (14 ausgelassen; 12 akzeptiert). Die Lehrkräfte entschieden über jeden Vorschlag nach professionellem Urteil, und genau darum geht es, sie in den Kreislauf zu setzen.

Zwölf der 21 Lehrkräfte von Aldino et al. nahmen weitere Überarbeitungen auf Satzebene vor, und das dominante Muster war das Kalibrieren des Tons: Lob heruntersetzen (f = 11), Vorschläge entfernen (f = 9), Ermutigung entfernen (f = 8). Die Überarbeitungen clusterten in der relationalen Dimension, besonders bei Student-Teacher Relationship (f = 24). Sie schützten Authentizität und professionelle Stimme, und diese Arbeit automatisiert sich nicht.

## Bringen Sie Studierenden bei, den Kommentar zu lesen

Feedbackkompetenz ist eine Voraussetzung, und sie ist ungleich verteilt.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths und Lodge (2026)]] ließen 32 Psychologiestudierende eine 25-minütige Essay-Aufgabe mit Bildschirmaufzeichnung bearbeiten, mit unbeschränktem Zugang zu ChatGPT, und sich die Aufzeichnung dann in einem videostimulierten Interview ansehen. Feedbackkompetenz war der einzige signifikante positive Prädiktor der Essay-Note (β = 0.46, p = 0.017). Die Häufigkeit der GenAI-Nutzung, die [[trust|Vertrauenswürdigkeit der Quelle]] und [[prior-knowledge|Vorwissen]] sagten die Leistung nicht vorher – ein Punkt, den [[feedback-futures-genai|Zhan, Wood, Carless und Yan (2026)]] auch in ihrem Sonderheft-Editorial machen. Weniger als ein Drittel der Studierenden verglich die KI-Ausgabe mit einer anderen Internetquelle. Die Hälfte äußerte bewusste KI-Vermeidung um der [[academic-integrity|akademischen Integrität]] willen oder weil sie den Essay in eigenen Worten wollte. Die meisten erbaten Feedback auf Aufgabenebene, das sich schlecht auf andere Aufgaben überträgt.

Die Extreme werden in dem Paar von IELTS-Schreibenden sichtbar, das Zhan et al. beschreiben. Eine Studierende mit geringer Kompetenz schrieb einen vagen Prompt, bekam generisches Feedback, vertraute ihm oder kopierte es übermäßig und befasste sich oberflächlich damit. Eine Studierende mit hoher Kompetenz schrieb einen kriterienbezogenen Prompt, hakte nach, glich Quellen ab und überwachte die Überarbeitungen. Der Unterschied war Anleitung und Gewohnheit, nicht Werkzeugzugang.

Sagen Sie Studierenden direkt, dass Modellkommentare halluziniert, verzerrt oder überlappend sein können und dass die Überarbeitung bei ihnen liegt. Rahmen Sie die Ausgabe als Entwurfsmeinung, die zu beurteilen ist, nicht als Antwort, die zu kopieren ist. Dann verlangen Sie den Vergleich, denn weniger als ein Drittel der Studierenden stellt ihn unaufgefordert an.

## Was Lehrkräfte daran falsch machen

Mehr Kommentare bedeuten mehr Feedback. Kommentare sind billig zu produzieren und teuer aufzunehmen, und die Engstelle liegt auf der Seite der Studierenden im Kreislauf. Die höher bewerteten KI-Kommentare von Farrokhnia et al. erzeugten nicht mehr Überarbeitung als Lehrkraft-Kommentare.

Ein besseres Modell wird die generische Ausgabe beheben. Die Fehler des Deakin-Werkzeugs waren Reichweitenfehler: Merkmale auf Satzebene, ein schmales Korrekturleseband. Zhan et al. verorten die Behebung im Prompt, im Rubric oder beim Menschen, nicht in einem größeren Modell. Das Paar der IELTS-Schreibenden ist der Beweis: dasselbe Werkzeug, andere Gewohnheiten, andere Ergebnisse.

Das Werkzeug verfügbar zu machen ist die Intervention. Die Nutzung lag bei etwa 13% der Bachelor- und 12% der Masterstudierenden, als das Werkzeug optional war. Der Rest der Designfrage ist, was mit den anderen 87% geschieht.

Die Zeitersparnis ist automatisch. Auf die Frage, was ihnen das KI-Feedback-Werkzeug gebracht habe, nannten 21 Lehrkräfte Zeitersparnis nur selten (n = 2). Reflexion (n = 14), verbesserte Sprache und Struktur (n = 11) und das Erkennen fehlender Komponenten (n = 10) nannten sie weit häufiger. Bearbeiten (f = 32) und Entfernen (f = 27) dominierten ihre Überarbeitungsarbeit, mit seltenem Ergänzen (f = 8). Was entsteht, ist ein Entwurf und ein diagnostischer Anstoß. Was ebenfalls entsteht, ist Prüf-, Kalibrierungs- und Verifikationsarbeit. [[ai-save-instructor-time|Die Arbeitslastfrage]] ist die am häufigsten weggeredete, und GenAI verteilt Lehrarbeit um, statt sie zu entfernen.

Zufriedenheitswerte sagen Ihnen, dass die Kommentare genau sind. In der Deakin-Pilotierung koexistierten positive Durchschnittsbewertungen mit von Studierenden gemeldeten Fehlern. Stichproben Sie die Ausgabe gegen Ihre eigene Lesart derselben Entwürfe und protokollieren Sie, wo das Modell generisch, falsch oder schmeichelnd war.

## Welche Einwände zurückkommen werden

**„KI-Feedback ist nicht persönlich."** Oft wahr, und das ist der Grund, das letzte Wort beim Menschen zu lassen. AICoFE existiert, weil generische Modellprosa nicht das ist, was eine Studierende erhalten sollte: Die Lehrkraft wählt aus, bearbeitet und unterzeichnet die endgültige Nachricht. Die 21 Lehrkräfte bei Aldino et al. schrieben den Ton aus demselben Grund um. Personalisierung ist in diesem Design Ihre Aufgabe, und das Modell leistet die Vorarbeit.

**„Meine Studierenden lesen Feedback ohnehin nicht."** Sie lesen weniger, als wir hoffen, und die Evidenz sagt, dass die Behebung im Design liegt, nicht im Volumen. Die Übernahme in der Deakin-Pilotierung lag bei etwa 13% und 12%. Die höher bewerteten Kommentare von Farrokhnia et al. erzeugten keine zusätzliche Überarbeitung. Was den Unterschied machte, war eine Abfolge, die Auseinandersetzung erzwingt – Selbsteinschätzung, dann Peer-Feedback, dann KI-Kritik –, plus drei Überarbeitungszyklen über ein Semester, die messbare Unterschiede in der Feedbackkompetenz erzeugten.

**„Dafür zahlen Studierende nicht."** Dann verhindern Sie, dass die KI die einzige Stimme wird, die Studierende von Ihnen hören. Die vertretbare Version gibt Studierenden mehr Feedback-Momente, während Sie Ihre Stunden auf die urteilintensiven Teile verwenden: das letzte Wort, die Kalibrierung, die Kommentare, die Ihre Autorität tragen. Was Studierende bei sorglosem Einsatz verlieren, ist die Kohärenz zwischen Kriterien, Kommentaren und Ergebnis. Legen Sie die Komplementarität durch Abfolge, Vergleich, Bearbeitung und Governance fest, und der Einwand verliert seine Kraft. Lassen Sie zwei Quellen nebeneinander stehen, und er behält sie.

**„Ich habe keine Zeit, alles zu prüfen, was das Modell schreibt."** Dann prüfen Sie nicht alles. Automatisieren Sie das Band, in dem Fehler billig zu fangen sind, sprachliche Arbeit auf Satzebene, und stichproben Sie die Ausgabe auf Urteilsebene gegen Entwürfe, die Sie bereits benotet haben. Die Zahlen von Aldino sagen Ihnen, wonach Sie suchen müssen: Ton, Fehlinformation, übertriebenes Lob, Überlappung.

## Was Sie diese Woche tun können

**1.** Sortieren Sie Ihren eigenen letzten Kommentarsatz in Korrekturen auf Sprachebene und Entscheidungen auf Urteilsebene, und zählen Sie jeden Stapel.

**2.** Schreiben Sie den rubric-bezogenen, schrittweisen Prompt, den Sie einem Modell geben würden, und testen Sie ihn an drei Entwürfen, die Sie bereits benotet haben.

**3.** Stichproben Sie die Ausgabe gegen Ihre eigenen Kommentare und protokollieren Sie, wo das Modell generisch, falsch oder schmeichelnd war.

**4.** Staffeln Sie eine Aufgabe als Selbsteinschätzung, dann Peer-Feedback, dann KI-Kritik, und sagen Sie den Studierenden, dass die KI eine Entwurfsmeinung ist, die sie hinterfragen sollen.

**5.** Verlangen Sie einen Vergleich gegen eine zweite Quelle oder gegen die Kriterien, da weniger als ein Drittel der Studierenden das unaufgefordert tut.

**6.** Protokollieren Sie, wie viel des endgültigen Feedbacks vom Modell kam und wie viel Sie verändert haben. Die Kuratierungsverfolgung von AICoFE ist das Vorbild für diesen Datensatz.

**7.** Achten Sie auf die Kluft zwischen erfahrenen und unerfahrenen Kolleginnen und Kollegen. Lehrkräfte mit mehr als fünf Jahren Erfahrung berichteten mehr Probleme mit der Ausgabe des Werkzeugs als weniger erfahrene, die das Scaffolding schätzten. Wenn Ihre erfahrenen Kolleginnen und Kollegen mehr Fehler sehen als Sie, ist das eine Information über Ihre eigene Kalibrierung.

## Wohin als Nächstes

[[feedback]] ist das Dachkonzept für das ganze System: Bereitstellung, Kreislauf, Übernahme und Assessment-Kontext. [[ai-feedback-quality|KI-Feedback-Qualität]] behandelt, was generierte Kommentare genau, nützlich, rechtzeitig und pädagogisch tragfähig macht, und diese Seite ist die praktische Mitte: welche Kombinationen dieser Teile besseres Feedback im Maßstab erzeugen.

Fragen dazu, was eine Note bedeuten soll, sobald KI im Spiel ist – einschließlich Konstruktsubstitution, authentifizierter Prozessevidenz und Integritätsregeln –, gehören zu [[redesign-assessment-ai-era|Assessment im KI-Zeitalter neu gestalten]] und [[assessment-validity|Assessmentvalidität]] statt hierher. Für den Sonderfall Schreibdidaktik siehe [[writing-instruction-ai-best-practices|Best Practices für Schreibdidaktik im Kontext von KI]].
