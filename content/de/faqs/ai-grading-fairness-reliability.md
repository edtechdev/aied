---
title: "Kann ich KI einsetzen, um die Arbeiten von Studierenden fair und verlässlich zu benoten?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Sie haben eine Rubrik, an die Sie glauben, mehr Abgaben als Stunden und ein Werkzeug, das in der Zeit, die eine einzige Arbeit zu lesen braucht, eine Punktzahl plus mehrere selbstsichere Absätze zurückgibt. Sie probieren es an Arbeiten aus, die Sie bereits benotet haben. Die Hälfte der Punktzahlen sieht richtig aus. Eine ist seltsam großzügig, eine seltsam streng, und Sie können noch nicht sagen, ob das am Werkzeug liegt oder an der Arbeit.

Kurze Antwort für eine Kollegin: KI-Benotung verdient ihren Platz als beaufsichtigte Assistenz oder als zweite Leserin, und zwar bei Aufgaben, die Sie gegen bereits benotete Arbeiten geprüft haben. Übereinstimmung überträgt sich nicht von einem Assessmenttyp auf den anderen. In einer Pharmazieprüfung mit sechzehn Studierenden fand [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] nahezu vollständige Übereinstimmung bei objektiven Itemtypen und unzuverlässige Übereinstimmung bei offenen Antworten. An drei englischen Universitäten fand [[opraise-automated-marking-ai-assessment-2026|das OpRaise-Projekt]], dass KI und menschliche Bewertende je nach Institution in 35% bis 65% der Fälle dieselbe Notenstufe vergaben, mit zur Mitte hin zusammengedrückten Noten. Eine flüssige Begründung ist kein Beleg dafür, dass Ihre Kriterien angewendet wurden. Ob das Ergebnis [[assessment-validity|für Ihre Entscheidung gültig ist]], ist eine lokale Frage, die Sie selbst beantworten müssen, und für alles, was zu einer dokumentierten Note wird, [[human-in-the-loop-ai|bleibt ein Mensch rechenschaftspflichtig]].

## Die Kurzfassung

**1.** Benennen Sie die Rolle, bevor Sie irgendetwas laufen lassen: Feedback-Assistenz, zweite Leserin oder primäre Benotung. Sie brauchen unterschiedlich viel Evidenz.

**2.** Beginnen Sie mit der Rolle mit den geringsten Folgen, die Ihr eigentliches Problem löst. Wenn ein deterministischer Lösungsschlüssel die Aufgabe erledigt, fügt ein LLM Risiko hinzu statt Wert.

**3.** Kalibrieren Sie an Arbeiten, die Sie bereits benotet haben, einschließlich starker, schwacher, grenzwertiger und ungewöhnlich aufgebauter Abgaben. Bequeme Beispiele beweisen nichts.

**4.** Halten Sie Kalibrierungs- und Testset getrennt, sonst messen Sie, wie gut Sie das Werkzeug auf vertraute Essays eingestellt haben.

**5.** Berichten Sie exakte Übereinstimmung, Punktzahlunterschiede und die Richtung der Verzerrung, nicht eine Korrelation. Prüfen Sie Bestehensgrenzen gesondert.

**6.** Sagen Sie Studierenden, welche Rolle das Werkzeug spielt, wer die Note entscheidet und wie sie eine Überprüfung beantragen.

## Entscheiden Sie, was die KI tun darf

Drei Arrangements werden „KI-Benotung" genannt, und sie tragen unterschiedliche Pflichten.

Eine **Feedback-Assistenz** entwirft Kommentare oder markiert mögliche Auslassungen, die Sie annehmen, umschreiben oder verwerfen. Das Risiko bleibt auf die Kommentarqualität begrenzt, und Sie lesen alles, bevor es eine studierende Person erreicht. Eine **zweite Leserin** schlägt Kriterienpunktzahlen vor oder markiert Unstimmigkeiten, um Ihre eigene Bewertung zu strukturieren. Ihre Fehler müssen nützlich sein, nicht bloß falsch: eine Markierung, die Sie zu einer Abgabe zurückschickt, die Sie sonst nachlässig benotet hätten, ist es wert. Eine **primäre Benotung** erzeugt Punktzahlen, die zu dokumentierten Noten werden. Das ist das Arrangement, das die Evidenz in dieser Wissensbasis über enge, lokal validierte Fälle hinaus nicht stützt.

Wählen Sie die niedrigste Sprosse, die Ihre tatsächliche Einschränkung adressiert. Wenn Ihre Bewertungslast aus dem Prüfen eines festen Lösungsschlüssels besteht, ist gewöhnliche deterministische Benotung transparenter und prüfbarer als ein Sprachmodell, und die Pharmaziestudie legt nahe, dass der Vorteil des LLM bei objektiven Items teilweise ein Artefakt davon war, dass ihm während der Benotung die richtigen Antworten vorlagen. Sparen Sie das Modell für Arbeit, die Interpretation braucht, und prüfen Sie dann diese Interpretation.

[[automated-assessment|Automatisiertes Assessment]] deckt die weitere Maschinerie von Benotung, Moderation und Feedbackerzeugung ab. Diese Seite ist die Urteilsfrage darunter.

## Was die Evidenz tatsächlich zeigt

Die Übereinstimmung hängt vom Itemtyp ab. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] benoteten eine Pharmazieprüfung im gemischten Format, die 16 Studierende bearbeitet hatten, und berichteten eine Konkordanz mit der Bewertung durch die Lehrenden zwischen 0.935 und 1.000 für Multiple-Choice-, Auswahl-mehrerer-Antworten- und Lückentext-Items. Die Übereinstimmung bei subjektiven offenen Antworten war unzuverlässig. Zwei Details zählen mehr als die Schlagzeile. Während der Benotung wurden die richtigen Antworten mitgeliefert, was Ergebnisse bei objektiven Items schmeichelt, und das Hinzufügen einer Rubrik verbesserte die Übereinstimmung nicht durchgängig, was die verbreitete Annahme untergräbt, eine gute Rubrik mache aus einem LLM einen konsistenten Bewertenden. Sechzehn Studierende tragen keine Aussage über Ihren Kurs. Die Variation innerhalb einer einzigen Prüfung ist der übertragbare Befund: ein System, das Ihren Multiple-Choice-Teil bewältigt, sagt nichts über Ihre Essays.

Die Übereinstimmung auf der Notenstufe ist moderat und ungleich. [[opraise-automated-marking-ai-assessment-2026|Der OpRaise-Bericht]] untersuchte authentische Psychologie-Essays von Bachelorstudierenden und fand eine Übereinstimmung zwischen KI und menschlichen Bewertenden auf der britischen Notenstufe von 63% in Cambridge, 53% in Nottingham und 35% an der Manchester Metropolitan. Die Noten wurden zur Mitte hin zusammengedrückt, wobei die Ränder am ungenauesten benotet wurden: ein Essay, den ein Mensch mit 75 benotete, wurde von jedem KI-System um einige Punkte niedriger bewertet, und ein mit 50 benoteter Essay um einige Punkte höher. Diese Kompression ist der Fehler, auf den Sie achten müssen, denn sie schadet genau den Studierenden am oberen und unteren Rand Ihrer Verteilung, während die Mitte in Ordnung aussieht. Das ist ein Projektbericht und kein begutachteter Versuch, und es ist die nützlichste Warnung im Evidenzbestand.

Ihre eigenen Noten sind eine unvollkommene Referenz. Bewertende widersprechen einander, und Ihre frühere Punktzahl für einen ähnlichen Essay ist ein Urteil, keine Grundwahrheit. Übereinstimmung mit einem Bewertenden stellt Konsistenz mit diesem Bewertenden her, was nicht dasselbe ist wie Fairness. Wo die Folgen es rechtfertigen, ziehen Sie eine zweite qualifizierte Leserin hinzu, die schwierige Fälle entscheidet, und behandeln Sie eine Unstimmigkeit zwischen KI und menschlichem Bewertenden als Anlass, die Arbeit neu zu lesen, nicht als Urteil darüber, welche Seite recht hat.

Konsistenz und tragfähiges Urteil gehen auseinander. Ein Modell kann bei einem erneuten Lauf nahezu identische Punktzahlen zurückgeben und dabei Ihre Kriterien schlecht anwenden, denn Wiederholbarkeit misst Stabilität, nicht Validität. Die Ränder bei OpRaise zeigen das Muster: Das System war stabil und lag bei den Essays falsch, die am meisten zählten.

## Validieren Sie das Verfahren, bevor es eine Note berührt

Arbeiten Sie das an zuvor bewerteten, angemessen geschützten Abgaben durch, die die Antworten abdecken, die Sie tatsächlich erhalten: starke, schwache, grenzwertige, unvollständige, ungewöhnlich aufgebaute und richtige Antworten in ungewohnter Formulierung.

**1. Kriterien festlegen und Evidenz verlangen.** Geben Sie die Aufgabe, die Rubrik, die Bewertungsregeln und Beispiele dafür, wie legitime alternative Antworten Punkte verdienen. Verlangen Sie knappe Begründungen auf Kriterienebene, die an identifizierbare Passagen gebunden sind. Prüfen Sie diese Begründungen dann selbst gegen die Abgabe.

**2. Kalibrierung von Evaluation trennen.** Stimmen Sie an einem Set ab und testen Sie an einem anderen. Ohne diese Trennung können Sie ein validiertes Verfahren nicht von einem gut angepassten unterscheiden.

**3. Die Entscheidungen messen, die zählen.** Halten Sie exakte Übereinstimmung fest, Größe und Richtung der Punktzahlunterschiede und ob das Modell systematisch höhere oder niedrigere Noten vergibt. Untersuchen Sie Bestehen und Nichtbestehen sowie andere folgenreiche Grenzen gesondert. Eine hohe Korrelation kann auf einer systematischen Verschiebung sitzen.

**4. Wiederholbarkeit und Verhalten in Teilgruppen testen.** Lassen Sie eine Teilmenge unter identischen Einstellungen erneut laufen. Suchen Sie nach Fehlern auf Kriterienebene und danach, ob Sprache, Formatierung oder legitimer Stil für schwächeres Verständnis gehalten wird. Kleine Fallzahlen in Teilgruppen stützen Vorsicht, keine Fairness-Aussage.

**5. Die Eskalationsregel schreiben.** Legen Sie fest, welche Fälle immer menschlich benotet werden und wie Unstimmigkeiten gelöst werden. Lassen Sie nicht die vom Modell angegebene Konfidenz entscheiden; Konfidenz muss gegen beobachtete Fehler validiert werden, bevor sie Gewicht tragen kann.

**6. Den Workflow schützen.** Nutzen Sie eine genehmigte Umgebung, minimieren Sie identifizierende Informationen und halten Sie Rubrik und Anweisungen getrennt vom eingereichten Inhalt. Diese Trennung macht Manipulation schwerer zu verbergen. Sie macht sie nicht unmöglich.

**7. Festhalten, was die Prüfung ungültig machen würde.** Bewahren Sie Modell und Version, Prompt, Rubrik und Einstellungen auf. Ein Modellupdate oder eine Rubrikrevision ist ein Grund, die repräsentativen Prüfungen zu wiederholen, statt Kontinuität anzunehmen.

## Machen Sie das Arrangement für Studierende sichtbar

Studierende haben Anspruch darauf zu wissen, welche Rolle das Werkzeug spielt, wer entscheidet und wie sie ein Ergebnis anfechten können. Vage Offenlegung erzeugt Misstrauen; Konkretes erzeugt eine tragfähige Beziehung. Etwa so: „Ein genehmigtes KI-Werkzeug darf Rubrik-Kommentare zu Ihrem Entwurf verfassen. Ich prüfe jeden Kommentar und lege Ihre Note fest. Melden Sie sich bei mir, wenn ein Kommentar Ihre Arbeit falsch darstellt." Machen Sie das dann wahr.

Zwei Fehlerrichtungen brauchen getrennte Aufmerksamkeit. Übermäßige Abzüge sind die, über die Studierende berichten, und sie dominieren die Widersprüche. Unverdiente Punkte sind die, die unerwähnt bleiben und den Datensatz still verfälschen. Stichproben Sie beides, und rechnen Sie Ihre Verifikationsstunden ein, wenn Sie beurteilen, ob der Workflow Ihnen etwas gespart hat.

## Was auf Sie zurückkommen wird

**„Menschen sind auch voreingenommen."** Das sind sie, weshalb der Vergleich explizite Kriterien braucht und nicht die Punktzahl eines einzelnen Bewertenden als Maßstab. Die institutionelle Streuung bei OpRaise ist hier das Argument: Wenn menschliche Bewertende an drei Universitäten mit denselben Systemen so unterschiedliche Übereinstimmung auf der Notenstufe erzielten, ist die menschliche Referenz Teil dessen, was spezifiziert werden muss, und kein fixes Maß.

**„Die Rubrik macht es objektiv."** Eine Rubrik macht Erwartungen explizit. Sie anzuwenden bleibt Interpretation, und die Pharmaziestudie fand, dass die Bereitstellung einer Rubrik die Übereinstimmung nicht durchgängig verbesserte. Was die Rubrik Ihnen kauft, ist ein prüfbarer Maßstab für die Begründungen, keine Garantie für die Punktzahlen.

**„Dann müsste ich alles prüfen, was den Zweck ad absurdum führt."** Bei manchen Aufgaben ist das die richtige Schlussfolgerung, und die Antwort ist, den Auftrag zu verengen. Kommentare aus Ihren eigenen Bewertungsnotizen zu entwerfen lässt das Urteil bei Ihnen und nimmt das Tippen weg. Markierungen einer zweiten Leserin bei grenzwertigen Abgaben konzentrieren Ihre Aufmerksamkeit dort, wo sie ein Ergebnis ändert.

**„Meine Kollegin hat es probiert, und es hat gut funktioniert."** Fragen Sie, was sie gemessen hat. Positive Bewertungen koexistieren in dieser Literatur routinemäßig mit Fehlern, und eine Kollegin, die ein paar vernünftige Ausgaben gelesen hat, hat eine Demonstration durchgeführt, keine Validierung. Die Frage ist, was ihr Verfahren mit den Essays täte, die Ihnen zuletzt auffallen würden.

## Was Sie diese Woche tun können

**1.** Wählen Sie ein Assessment und schreiben Sie die eine Rolle auf, die die KI spielen würde. Schreiben Sie auf, welche Evidenz es Ihnen erlauben würde, sie eine Sprosse höher zu setzen.

**2.** Lassen Sie es an fünf Abgaben laufen, die Sie bereits benotet haben, ausgewählt so, dass eine starke, eine schwache, eine grenzwertige und eine mit ungewöhnlichem, aber legitimem Aufbau dabei ist.

**3.** Protokollieren Sie jede Unstimmigkeit mit der Arbeit und dem Kriterium, und benennen Sie die Fehler, die Sie für inakzeptabel halten würden, nicht bloß für falsch.

**4.** Testen Sie, ob die Punktzahlunterschiede in eine konsistente Richtung laufen, und prüfen Sie Ihre Bestehensgrenze gesondert.

**5.** Entwerfen Sie den Absatz für die Offenlegung gegenüber Studierenden und den Weg zur Überprüfung, und vergleichen Sie Ihre Verifikationszeit mit der Bewertungszeit, die Sie vermieden haben.

## Wohin als Nächstes

[[assessment-validity|Assessmentvalidität]] ist das Konzept, das diese Fragen entscheidet: ob die Evidenz die Inferenz stützt, die Sie ziehen wollen. [[automated-assessment]] deckt die Technologie und ihre gemessene Leistung über Formate hinweg ab, und [[ai-feedback-at-scale]] behandelt das angrenzende Problem generierter Kommentare und ob Studierende danach handeln.

Was eine Note bedeuten soll, wenn Studierende KI nutzen – einschließlich Konstruktsubstitution und authentifizierter Prozessevidenz –, steht in [[redesign-assessment-ai-era|Assessment im KI-Zeitalter neu gestalten]]. Ob Detektion einen verteidigbaren Aufgabenentwurf ersetzen kann, behandelt [[should-we-use-ai-detectors|ob KI-Detektoren einzusetzen sind]]. Die Evaluationsfrage unter allem finden Sie in [[checking-whether-educational-ai-works|ob eine Bildungs-KI funktioniert]].
