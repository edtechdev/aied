---
title: "Wie prüfe ich, ob KI-generierte Quiz- und Prüfungsfragen wirklich gut sind?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Sie bitten um zwanzig Fragen aus Ihren Vorlesungsnotizen. Zurück kommen sie mit Lösungsschlüsseln, Erklärungen, Schwierigkeitslabels und Bloom-Taxonomie-Kategorien, in einem formatierten Dokument, das fertig aussieht. Ihr Name kommt bald darauf.

Kurze Antwort für eine Kollegin: generierte Fragen sind Kandidaten, kein Assessment. Lösen Sie jede selbst, prüfen Sie, was ein Item von einer studierenden Person tatsächlich verlangt, und finden Sie heraus, wie Studierende darauf reagieren, bevor es zählt. In den beiden größten Studien dieser Wissensbasis ist das interessante Signal nicht, dass Generierung funktioniert, sondern wo sie scheitert. Iterative Generierung innerhalb eines kursspezifischen Workflows produzierte brauchbare Multiple-Choice-Prüfungen in 71 College-Klassen ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). In einem Data-Science-Audit von 311 eingesetzten Fragen folgten die Schwierigkeitslabels des Modells den Bloom-Stufen, die es daneben erzeugt hatte, nahezu perfekt (Spearman ρ = 0.90), während sie dem, was Studierende tatsächlich erreichten, mit ρ = 0.06 folgten ([[student-llm-use-ai-question-difficulty-data-science-2026|An und Wang, 2026]]). Das Label war eine Beschreibung des Prompts, keine Messung des Items.

## Die Kurzfassung

**1.** Schreiben Sie das Lernziel und die Evidenz auf, die eine zufriedenstellende Antwort liefern würde, bevor Sie irgendetwas generieren.

**2.** Bauen Sie einen Blueprint, damit Sie sehen, welche Lernziele das Set abdeckt und wie oft.

**3.** Lösen Sie jedes Item selbst, bevor Sie dem Schlüssel trauen, und lesen Sie die Erklärung als eine zu prüfende Behauptung.

**4.** Fragen Sie, was eine studierende Person tun muss, um zu antworten. Eine Frage, die „analysieren" sagt und Abruf verlangt, ist eine Abruffrage.

**5.** Behandeln Sie Schwierigkeitslabels als Prompt-Metadaten, nicht als Psychometrie.

**6.** Pilotieren Sie die Items, prüfen Sie, wie sie funktionieren, und überarbeiten Sie die schwachen.

## Beginnen Sie mit dem Lernen, für das Sie Evidenz wollen

Generierung ist billig genug, dass das Ausgabeformat still zur Spezifikation wird. Wenn Ihre Notizen ordentliche Multiple-Choice-Items ergeben, messen Sie am Ende, ob Studierende unter plausiblen Aussagen wählen können, welches Lernziel der Syllabus auch immer behauptet.

Legen Sie zuerst das Lernziel fest, dann die Evidenz, die eine zufriedenstellende Antwort liefern würde, dann das Wissen, das Studierende mitbringen sollen. Nehmen Sie die Kursmaterialien auf, die Fehlvorstellungen, die Sie erwarten, alle erlaubten Werkzeuge und das Antwortformat. Wenn Sie wollen, dass Studierende Evidenz interpretieren, muss das Item Interpretation verlangen, und das Wort zu einer Definitionsfrage hinzuzufügen leistet das nicht. Ein langes Szenario kann immer noch durch eine einzige vertraute Wendung beantwortbar sein, die alles verrät.

Ein Assessment-Blueprint ist eine Tabelle von Lernzielen gegen Items, und sein Wert liegt darin, dass er Lücken sichtbar macht, bevor es die Studierenden tun. Er macht auch den Zielkonflikt sichtbar: jedes Item, das Sie aus dem einfachsten Material generieren, ist ein Item, das Sie nicht für das Lernziel ausgegeben haben, das Ihnen am meisten bedeutet.

## Prüfen Sie jedes Item in sechs Dimensionen

Beginnen Sie mit dem Schlüssel. Ist er gegen autoritative Kursinhalte verteidigbar, und hält die Erklärung stand, wenn Sie sie unabhängig prüfen? Schlüssel und Erklärung stammen oft aus demselben fehlerhaften Schritt, ein Prüfen des einen prüft also nicht das andere.

Fragen Sie dann, was die Beantwortung des Items zwischen Lesen und Wählen tatsächlich von einer studierenden Person verlangt. Hier scheitern generierte Items am häufigsten, und hier ist das Label am wenigsten verlässlich.

Prüfen Sie als Nächstes die Passung: Liefert die Beantwortung Evidenz für das beabsichtigte Lernziel oder für etwas Angrenzendes, das leichter zu bewerten ist?

Lesen Sie die Formulierung, wie eine studierende Person sie liest. Ist die nötige Information vorhanden, und wurde Mehrdeutigkeit entfernt, die nichts mit Ihrem Konstrukt zu tun hat?

Betrachten Sie die Optionen und die Bewertungsregeln zusammen. Sind die Distraktoren plausibel und voneinander und vom Schlüssel unterscheidbar, und erkennt der Schlüssel legitime alternative Antworten an, die Ihre Rubrik anrechnen würde?

Fragen Sie schließlich, wen das Item ausschließt. Leselast, kultureller Kontext, Visualisierungen und Formatierung können Anforderungen stellen, die nichts mit dem Lernziel zu tun haben. Für eine mehrsprachige oder behinderte studierende Person misst ein Item, das schnelles Lesen belohnt, etwas, das Sie nicht beabsichtigt haben, und [[differential-effects-across-learner-groups|die Leistung in Teilgruppen]] ist der Ort, an dem das sichtbar wird.

Ein zweites Modell kann Ihnen helfen, Probleme zu finden, und Übereinstimmung zwischen zwei Modellen ist keine unabhängige Verifikation der Richtigkeit. Sie teilen Trainingsdaten und Fehlermodi. Lösen Sie das Item, und lassen Sie dann eine qualifizierte Person diejenigen ansehen, die zählen werden.

## Lassen Sie nicht das Schwierigkeitslabel entscheiden

Die Literatur zur [[automated-question-generation|Fragengenerierung]] ist nützlicher zum Scheitern der Labels als zum Erfolg der Generierung. [[student-llm-use-ai-question-difficulty-data-science-2026|An und Wang (2026)]] untersuchten 378 verfasste Fragen in Data-Science-Kursen, von denen 311 an 54 Studierende mit 7.888 Antworten ausgeliefert wurden. Die Labels leicht, mittel und schwer des Modells korrelierten mit seinen eigenen mitgenerierten Bloom-Stufen bei ρ = 0.90 und mit der empirischen Itemschwierigkeit bei ρ = 0.06. Rund 70% der eingesetzten Items wurden von jeder studierenden Person richtig beantwortet, was fast keine Variation für ein Schwierigkeitslabel übrig ließ, selbst im Prinzip.

Daraus folgen zwei Lehren. Erstens ist Schwierigkeit eine Eigenschaft der Interaktion zwischen einem Item und einer Population, sodass kein Label, das vor der Administration des Items entsteht, als gemessener Wert gelten kann. Zweitens ist eine Itembank, die alle richtig beantworten, kein leichtes Assessment, sondern ein nutzloses: Sie trägt fast keine Information darüber, wer was weiß.

Der positive Fall ist enger als Anbieterbehauptungen, und es lohnt, ihn genau zu kennen. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] generierten zehnfragige Multiple-Choice-Prüfungen für 71 College-Klassen mit rund 1.200 Studierenden, mit einer Schleife, die jedes Item generiert, beurteilt und überarbeitet, konditioniert auf die von der jeweiligen Lehrkraft bereitgestellten Materialien des Kurses, und verglichen die Items dann mit von Menschen verfassten Prüfungen. Das ist ein Workflow mit einer prüfenden Instanz darin, pro Kurs ausgeführt, nicht ein einzelner Prompt über generischem Inhalt. Die Stützung gilt für den Workflow unter diesen Bedingungen, und sie erstreckt sich nicht auf das, was dasselbe Modell aus einem eingefügten Block unbearbeiteter Notizen produziert.

## Führen Sie einen Zyklus aus Generieren, Prüfen, Pilotieren, Überarbeiten

Generieren Sie gegen einen Blueprint, und verlangen Sie das beabsichtigte Lernziel, den Schlüssel, eine knappe Lösung und die Fehlvorstellung, die jeder Distraktor fangen soll. Die Annotationen machen das Design prüfbar. Sie sind kein Beleg dafür, dass das Design tragfähig ist.

Reparieren Sie, bevor Sie anhäufen. Löschen Sie nicht gestützte Behauptungen, doppelte Items, versehentliche Hinweise im Stamm, mehrere verteidigbare Schlüssel und Komplexität ohne Bezug zum Konstrukt, und notieren Sie, was Sie geändert haben, denn das Muster der Reparaturen sagt Ihnen, welchen Teil des Prompts Sie korrigieren müssen.

Pilotieren Sie dort, wo ein Pilot verhältnismäßig ist. Übung mit geringen Folgen oder ein gemanagter Pilot innerhalb des Assessments liefert Ihnen Antwortdaten. Sagen Sie Studierenden, wie sie eine mehrdeutige oder falsche Frage melden, und lesen Sie diese Meldungen, denn sie sind Ihr informativstes Fehlersignal.

Prüfen Sie dann, wie die Items funktionieren: der Anteil richtiger Antworten, welche Distraktoren Antworten anziehen und ob der Erfolg beim Item mit der Leistung im übrigen Assessment einhergeht. Ein Item, bei dem starke Studierende scheitern und schwache erfolgreich sind, ist ein Defekt und keine schwere Frage. In einer kleinen Klasse sind diese Statistiken instabil, kombinieren Sie sie also mit Inhaltsprüfung und Erklärungen der Studierenden, statt einen Prozentsatz als Urteil zu behandeln.

Überarbeiten Sie, und führen Sie das Protokoll: die genehmigte Version, das Lernziel, dem sie dient, den Schlüssel, die Begründung, die Prüfnotizen und die Administrationshistorie. Bei großen Banken oder Banken mit hohen Folgen gehören hier Assessment-Spezialistinnen und -Spezialisten und ordentliche psychometrische Methoden hin, und [[educational-measurement|Messexpertise]] ist nichts, was ein sorgfältiges Lesen ersetzen kann.

## Wie das in einem Kurs aussieht

In einem Einführungskurs Soziologie könnte das Lernziel darin bestehen, eine strukturelle Erklärung von einer individuellen zu unterscheiden. Ein schwaches Item verlangt, „strukturell" zu definieren, was Worterkennung misst. Ein stärkerer Kandidat gibt ein kurzes Szenario über eine Familie und eine Beschäftigungsentscheidung und fragt dann, welche Erklärung eine strukturelle Einschränkung am besten identifiziert, mit Distraktoren, die plausible, aber andere Interpretationen darstellen.

Die Lehrkraft prüft, ob das Szenario den Schlüssel tatsächlich stützt, ob zwei Optionen dieselbe Idee ausdrücken und ob die Beantwortung von Terminologie abhängt, die der Kurs nie eingeführt hat. Eine einzeilige Nachfrage, „Welches Detail stützt Ihre Wahl?", macht die Begründung sichtbar, die die gewählte Option verdeckt. Die Anpassung ist als Itemformat ungetestet, und ihr Wert ist enger: Die Prüffragen oben lassen sich beantworten, bevor ein Item administriert wird, und ein schlechter Schlüssel lässt sich reparieren, bevor Studierende ihn sehen.

Für Studierende, die eigene Übungsfragen generieren, gilt dieselbe Regel auf ihrem Niveau: Versuchen Sie das Item, prüfen Sie die Erklärung gegen Kursquellen und bringen Sie die unauflösbaren Fälle zu jemandem, der das Fach kennt. [[study-with-ai|Lernpraxis]], die Studierende darauf trainiert, generierte Schlüssel unkritisch zu übernehmen, lehrt die falsche Gewohnheit.

## Was auf Sie zurückkommen wird

**„Es hat eine Antwort und eine Erklärung geliefert."** Beide können denselben Fehler wiederholen, und die Erklärung erzeugt gerade deshalb Vertrauen, weil sie flüssig ist. Prüfen Sie die Begründung gegen Ihre Materialien, nicht gegen ihre eigene Wiederholung.

**„Das sind nur Übungsfragen."** Übung lehrt Fehlvorstellungen, wenn falsche Schlüssel unkorrigiert bleiben, und Studierende üben den Fehler ebenso bereitwillig ein wie die richtige Antwort. Geringere Folgen ändern, wie viel Prüfung verhältnismäßig ist. Sie ändern nicht, ob Genauigkeit zählt.

**„Den Studierenden hat das Quiz gefallen."** Freude ist Evidenz über das Erlebnis. Ein leichtes Quiz, das alle bequem beenden, fühlt sich gut an und misst wenig, und das Data-Science-Audit fand, dass die Beliebtheit der Items mit keinem brauchbaren Schwierigkeitssignal einherging.

**„Die Rubrik oder die Bloom-Tags zeigen, dass es die Lernziele trifft."** Von demselben Generierungsschritt gelieferte Bloom-Labels sind die am wenigsten unabhängige Evidenz, die verfügbar ist. Das ρ = 0.90 gegen die Labels und ρ = 0.06 gegen die Leistung der Studierenden ist genau das Bild, wenn man es misst.

## Was Sie diese Woche tun können

**1.** Wählen Sie ein Lernziel und schreiben Sie die Evidenz auf, die eine zufriedenstellende Antwort liefern würde. Generieren Sie dann fünf Items dagegen und verlangen Sie den Schlüssel, die Lösung und die beabsichtigte Fehlvorstellung hinter jedem Distraktor.

**2.** Lösen Sie alle fünf, ohne auf die Schlüssel zu schauen, und protokollieren Sie die, bei denen Sie und das Modell uneinig sind.

**3.** Bitten Sie eine Kollegin, die zwei stärksten Kandidaten auf Passung und Mehrdeutigkeit zu prüfen, und löschen Sie alles, was keiner von Ihnen beiden verteidigen kann.

**4.** Pilotieren Sie die Überlebenden mit einer kurzen Nachfrage, welches Detail die Wahl der Studierenden stützt.

**5.** Halten Sie fest, was Sie geändert haben und warum, damit der nächste Satz von einem besseren Prompt startet statt vom selben.

## Wohin als Nächstes

[[automated-question-generation]] ist die Konzeptseite für Generierungsmethoden und ihre gemessene Qualität, und [[educational-measurement]] deckt Itemanalyse, Reliabilität und die Psychometrie ab, auf die ein Pilot nur zeigt. Beide stehen unter [[assessment-validity|Assessmentvalidität]], dem Maßstab, dem der ganze Zyklus dient.

Die Urteilsseite desselben Problems gehört zu [[ai-grading-fairness-reliability|KI-Benotung]], denn ein gutes Item, schlecht benotet, ist nicht besser als ein schlechtes Item, gut benotet. Die weitere Frage, was eine Note bedeuten soll, wenn Studierende KI nutzen können, behandelt [[redesign-assessment-ai-era|Assessment im KI-Zeitalter neu gestalten]].
