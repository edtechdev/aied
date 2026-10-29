---
title: "Wie können wir KI darin besser machen, Lernen in unserem eigenen Fach zu unterstützen?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
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

Das Ticket sagt „fine-tune das Modell auf unseren Kursmaterialien". Das Budget ist genehmigt, eine GPU ist für nächsten Monat gebucht, und eine Doktorandin oder ein Doktorand soll einen Datensatz zusammenstellen. Niemand in der Runde hat gefragt, was ein einfacher Prompt auf denselben Fragen erreicht oder was eine Stichwortsuche erreicht.

Stellen Sie diese beiden Fragen zuerst. In dieser Wissensbasis ist die Lücke zwischen einem allgemeinen Modell und einem kurskompetenten Modell überwiegend ein Problem der Verankerung und des Promptings, und die Evidenz für diese Reihenfolge ist ungewöhnlich direkt: Eine Studie zu einem Kursassistenten fand, dass die Suche und nicht das Modell die Entscheidung erster Ordnung war, und ein allgemeines Modell ohne Verankerung schnitt *schlechter* ab als eine einfache TF-IDF-Baseline.

Training ist real und manchmal notwendig. Es ist die dritte oder vierte Sache, die man versucht, und die Arbeit unten ist so geordnet, dass Sie herausfinden, welche Sprosse Sie tatsächlich brauchen, bevor Sie das Rechenbudget des Quartals ausgeben.

## Die kurze Version

**1.** Protokollieren Sie, was ein einfacher Prompt erreicht und was eine triviale lexikalische Methode erreicht, bevor Sie irgendetwas ändern. Diese zweite Zahl ist das, was Sie ehrlich hält.

**2.** Setzen Sie die Suche über Ihre eigenen Materialien vor das Modell. Sie ist der größte einzelne Zugewinn, der hier für den Aufwand berichtet wird, und sie ist umkehrbar.

**3.** Entwickeln Sie den Prompt gegen Ihre Rubrik und iterieren Sie, bis die Verbesserung aufhört. Das Plateau ist das Signal, dass Training etwas beitragen könnte.

**4.** Passen Sie die Gewichte mit [[llm-training-and-fine-tuning|LoRA]] an, wenn das Ziel stabil und eng ist: ein Format, eine Rubrik, ein Leseniveau, ein Fachvokabular.

**5.** Trainieren Sie nach, wenn das Problem das Verhalten und nicht der Inhalt ist, und schreiben Sie die Belohnung gegen einen Benchmark, von dem Sie erwarten, dass er ausgenutzt wird.

**6.** Bauen Sie den Trainingssatz auf der Ebene von Schritten. Daten, die nur Antworten enthalten, bringen einer Fehlvorstellung nichts bei.

## Holen Sie sich eine Baseline, die Sie tatsächlich schlagen können

Bevor Sie etwas ändern, protokollieren Sie, was ein einfacher Prompt zurückgibt. Dann protokollieren Sie, was eine triviale Methode zurückgibt.

Die Studie zum [[shen-sustainable-ai-knowledge-base-cs-education-2026|Kurs-Wissensbasis-Assistenten]] ist allein dafür lesenswert. Ein lokales LLM ohne Suche erreichte **52.3%** Genauigkeit. Eine TF-IDF-Baseline, eine jahrzehntealte lexikalische Methode, erreichte **55.4%**. Das Modell war schlechter als die klassische Methode.

Überspringen Sie diesen Schritt, und Sie können nicht sagen, ob Ihr Fine-Tuning geholfen hat. Schlimmer noch, Sie können ein System ausliefern, das eine Stichwortsuche schlägt, und es erst erfahren, wenn eine Tutorin oder ein Tutor es erwähnt. Zwei Zahlen in einer Tabelle, an einem Nachmittag erhoben, schützen den Rest des Budgets.

## Verankern Sie das Modell in Ihren eigenen Materialien

[[rag|Retrieval-augmented Generation]] über die Kursmaterialien, ohne jedes Fine-Tuning, hob dasselbe System von 52.3% auf **66.6%**. Dieser Zugewinn kam aus einem Index, und er bringt eine Eigenschaft mit, die ein Trainingslauf nicht hat: Wenn sich Ihre Dokumente ändern, indizieren Sie neu.

Zwei weitere Ergebnisse zeigen in dieselbe Richtung. Ein PRISMA-Review über 23 empirische Studien zur Anpassung von KI für den [[writing-education|Schreibunterricht]] fand **Prompt-Engineering dominant (N = 13), vor Fine-Tuning (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Wo eine Wissensbasis aktuell bleiben muss, ist die Suche der einzige Hebel, der aktuell bleibt, ohne einen Trainingslauf zu wiederholen.

Die Suche hat auch eine pädagogische Form. Ein Modell in Ihren eigenen bearbeiteten Beispielen und Rubriken zu verankern ist der Weg, auf dem es innerhalb des [[scaffolding|Gerüsts]] bleibt, das Sie entworfen haben, und auf dem von Ihnen gesetzten Niveau antwortet, statt in allgemeine Ratschläge abzudriften. Diese Drift ist die häufigste Beschwerde über fertig gekaufte Tutoren, und sie ist öfter ein Suchproblem als ein Gewichtsproblem.

## Schreiben Sie den Prompt gegen Ihre Rubrik, und achten Sie auf das Plateau

Prompt-Arbeit ist kein Vorbereitungsschritt, den man erledigt, während man auf die GPU wartet. Zwei Ergebnisse zeigen, was sie allein erreicht:

- **Rubrikgeleitetes Prompting, iterativ gemeinsam verfeinert, hob die Übereinstimmung zwischen LLM und Mensch bei studentischen Designarbeiten von 54.75% auf 81.25%** (Cronbachs Alpha 0.393 auf 0.798), ohne jedes Fine-Tuning ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Ein literaturgestützter eigener Prompt rief angestrebte mathematische [[misconceptions|Fehlvorstellungen]] mit **0.98** Präsenz hervor, gegenüber **0.40** bei einem breiten Prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Das praktische Signal ist das **Plateau**. In der Studie zur Item-Generierung hörte die iterative Prompt-Verfeinerung auf, sich zu verbessern, und Fine-Tuning von GPT-4.1 *auf den optimierten Prompt* fügte dann den verbleibenden Zugewinn hinzu ([[gpt-item-generation-l2-listening-2026]]). Ein Plateau nach echter Prompt-Arbeit ist Evidenz dafür, dass Training Raum hat, etwas beizutragen. Vor dem Erreichen eines Plateaus nach Training zu greifen ist Raten, und Raten kostet einen Monat.

Beachten Sie, was das Ergebnis zur Item-Generierung über die Reihenfolge impliziert. Das Fine-Tuning baute auf dem optimierten Prompt auf, die Prompt-Arbeit war also nicht verschwendet, als das Team schließlich trainierte. Die billige Sprosse ist zugleich die Spezifikation für die teure.

## Passen Sie die Gewichte an, wenn das Ziel stabil und eng ist

Anpassung zahlt sich aus, wenn das Modell eine Eigenschaft zuverlässig halten soll: ein Leseniveau, ein Ausgabeformat, ein Fach, das ihm fehlt. Das wiederkehrende Ergebnis ist, dass **Zielgenauigkeit die Größe schlägt**.

- Drei **8B**-Modelle, fine-tuned auf einem von Expertinnen und Experten gestalteten Kinderlesecurriculum, übertrafen Zero-Shot-GPT-4o und Llama 3.3 70B bei schwierigkeitsbezogenen Kennzahlen, mit vernachlässigbaren Sicherheitsproblemen. Die Autoren und Autorinnen rahmen das als **Kontrollierbarkeit statt Skalierung** ([[llm-children-reading-story-generation]]).
- Ein Anweisungsdatensatz mit **24.795 Beispielen**, verankert in Indian Knowledge Systems, ergab ein **7B**-Fine-Tune mit **6.39** auf einem externen Panel aus fünf Gutachtenden, innerhalb von **0.15** eines starken allgemeinen Referenzmodells bei einem Bruchteil der Deployment-Kosten. Dasselbe Basismodell erreichte **nahe null auf fachspezifischen Dimensionen** ohne das Fine-Tuning ([[iks-instruct-dataset-indian-knowledge]]). Diese Lücke zwischen allgemein kompetent und hier kompetent ist die ganze Begründung für Domänenanpassung.
- Ein einzelner [[llm-training-and-fine-tuning|LoRA]]-Adapter, trainiert auf rund **3.900** gepoolten benoteten Beispielen, brachte fünf kleine offene Modelle (4B bis 30B) auf Parität oder besser mit einer menschlichen Bewertung über zwei Informatikprüfungen ([[llm-graders-computer-science-exams-2026]]). Ein Adapter, ein Datensatz, mehrere Basismodelle: Das ist die Form des Deployments, die ein kleines Team betreiben kann.

Das Wort *stabil* in der Überschrift trägt das Gewicht. Format, Rubrik, Leseniveau und Fachvokabular sind stabile Ziele. Urteilslastige Prosa hat kein solches Ziel, und dort scheitert die Anpassung, wie die beiden nächsten Abschnitte zeigen.

## Ändern Sie das Verhalten, wenn die Antworten das Problem sind

Anpassung bringt einem Modell bei, *was es produzieren soll*. Nachtraining bringt ihm bei, *wie es sich verhalten soll*. Für Nachhilfe ist diese Unterscheidung das ganze Problem: Allgemeine Modelle sind auf menschliche Präferenz für Hilfsbereitschaft nachtrainiert, was heißt, prompt zu antworten, und Lehren verlangt, die Antwort zurückzuhalten.

Die stärksten pädagogischen Ergebnisse dieses Bestands liegen hier. Das Belohnungsmodell von EduQwen priorisierte ausdrücklich **anleitende Antworten gegenüber direkten Antworten**, und seine dreistufige Pipeline erreichte **96.52%** auf dem CDPK-Benchmark gegenüber **90.55%** bei Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Der Schreibsimulator von SWIM bewegte sich von rubrikgestütztem Prompting (bestes QWK **0.577**) über überwachtes Fine-Tuning (**0.474 ± 0.023**) zu Reinforcement Learning (**0.618 ± 0.005**) über jedes Merkmal und jeden Prompt hinweg ([[swim-student-writing-simulation-2026]]).

Lesen Sie die SWIM-Zahlen aufmerksam, denn der mittlere Schritt ging rückwärts. Überwachtes Fine-Tuning auf Demonstrationen machte den Simulator schlechter als der Prompt, von dem er ausging, und erst das Belohnungssignal holte den Verlust zurück und übertraf dann die Baseline. Wenn Ihr Plan beim überwachten Fine-Tuning endet, ist der Plan vielleicht ein Umweg.

## Beaufsichtigen Sie auf der Ebene der Schritte

Ein Befund ist hier leicht zu übersehen und teuer zu ignorieren: **Qualität der Beaufsichtigung schlägt Quantität der Beaufsichtigung**. Anweisungsgetunte Modelle lernten Algebra-Fehlvorstellungen nur, wenn sie auf **Lösungsspuren auf Schrittebene** trainiert wurden. Nur auf Endergebnisse trainiert, blieb die Genauigkeit **bei jeder Datengröße unter 30%** ([[misconception-acquisition-dynamics-llms-2026]]).

Wenn Ihre Trainingsbeispiele Paare aus Frage und richtiger Antwort sind, trainieren Sie das Falsche, und weitere Beispiele reparieren das nicht. Was Sie brauchen, ist die Zwischenarbeit: die falsche Abbiegung, der Schritt, an dem die lernende Person vom Weg abkam, die Korrektur. Das zu erheben ist ein Problem der Datenaufbereitung mit einer pädagogischen Nebenbedingung, und es bedeutet meist, Sitzungen zu protokollieren statt Lösungsschlüssel abzugreifen.

## Wo Anpassung leise scheitert

Das ist der Teil, den die Begeisterung überspringt.

**Urteilslastiger Text.** In WrAFT erzeugte dasselbe Projekt, das für die *Bewertung* von Aufsätzen erfolgreich fine-tunte (QWK 0.84), abgeschnittene und nicht parsbare Ausgaben, als es für *Feedback* fine-tunte, während das direkte Prompten von Claude 3.7 das Feedback erzeugte, das Lehrkräfte am besten bewerteten ([[wraft-automated-writing-evaluation-argumentative-2026]]). Fine-Tuning brachte dem Modell bei, eine Punktzahl zu treffen, und Bewerten war das Einzige, was es lernte.

**Transfer zwischen Modellen.** Skalierung ist kein verlässlicher Prädiktor für die nachgelagerte Leistung unter LoRA-Anpassung, und **identische Hyperparameter erzeugten qualitativ unterschiedliches Verhalten über Architekturen hinweg** ([[aiawe-automated-writing-evaluation]]). Ein Rezept, das auf einem Modell funktionierte, ist kein Rezept.

**Architektur vor Parameterzahl.** Fine-Tuning von drei offenen Text-zu-Bild-Modellen auf 1.000 mit Bildunterschriften versehenen Bildern aus der Nukleartechnik verbesserte Stable Diffusion XL erheblich, brachte begrenzte Gewinne für SD-v3.5-Medium und erzeugte **für Flux.1 überhaupt keine messbare Verbesserung** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Das Problem war die Validierung.** Ein nicht trainiertes Frontier-GPT-4 erzeugte beim Verfassen von Nachhilfe-Feedback rund **35%** zu allgemeine, falsche oder die Antwort verratende Hinweise, und seine eigenen automatisierten Qualitätsprüfungen widersprachen dem menschlichen Urteil ([[reddig-maclellan-personalized-feedback-llm-2026]]). Das ist ein Filterproblem, und ein LoRA löst es nicht.

Das Muster über alle vier hinweg: Anpassung bewegt ein Modell zuverlässig auf ein Ziel zu, das Sie spezifizieren und bewerten können. Sie fügt kein Urteil hinzu, und eine Pipeline ohne Prüfung liefert trotzdem schlechte Ausgaben.

## Budgetieren Sie die Anpassung ehrlich

Für die Sprosse der Anpassung liegt die Hürde niedriger, als die meisten Teams annehmen: **einige Hundert bis einige Tausend Beispiele und eine einzelne GPU**. LoRA trainiert eine kleine Zahl zusätzlicher Parameter und lässt die Basisgewichte eingefroren, sodass mehrere Modelle aus einem Adapter bedient werden können.

Der Rang ist ein Kompromiss und kein Regler, den man maximiert. Der Zugewinn pro Million Adapterparameter fiel monoton, als der Rang stieg, und die Ausrichtung auf Kursniveau war eine Entscheidung über Skalierung und Rang statt ein kostenloses Upgrade ([[lora-finetuned-control-systems-course-qa-2026]]).

Welche Schichten Sie anpassen, ist ebenfalls eine echte Wahl. Nur die **letzten vier Transformer-Schichten** eines BERT-basierten Diskursanalysators zu aktualisieren übertraf sowohl die Anpassung nur der obersten Schicht als auch Fine-Tuning in voller Tiefe ([[bert-discourse-english-teaching-2026]]). Drei Konfigurationen, drei verschiedene Ergebnisse, und die billigste gewann.

Die Kosten, die man leicht unterschätzt, sind die Evaluation, und sie ist größer als die Rechenrechnung. Siehe [[checking-whether-educational-ai-works|Woran erkennen wir, ob eine KI in der Bildung korrekt arbeitet und nicht nur gut abschneidet?]]

## Kalibrieren Sie Ihre Erwartungen

Modell- und Promptwahl zusammen erklären nur etwa **15%** der Fehlausrichtung zwischen LLMs und Lernzuwächsen von Studierenden, und in dieser Studie machten Benchmark-Gewichtung und Einstimmigkeits-Ensembles die Ausrichtung *schlechter* ([[educational-llm-alignment]]). Vortrainingsdaten sind der dominante Hebel dafür, wie sich ein Modell verhält, und es ist der einzige Hebel, den Sie nicht ziehen können.

Nichts davon spricht gegen die Arbeit oben. Es spricht dagegen, von einem Fine-Tuning die Behebung eines Designproblems zu erwarten. Wenn das Problem ist, dass Ihr Tutor zu bereitwillig antwortet, kann Training es adressieren. Wenn das Problem ist, dass Ihre Lernenden sich nicht darauf einlassen, wird Training das nicht, und die 15%-Zahl sagt, dass das Geld anderswo besser eingesetzt ist.

## Was Teams falsch machen

Fine-Tuning ist der Weg, einem Modell Ihren Kurs beizubringen. Die Suche über Ihre eigenen Materialien hob dasselbe System von 52.3% auf 66.6% ohne jedes Training, und ein gegen eine Rubrik verfeinerter Prompt bewegte die Übereinstimmung von 54.75% auf 81.25%. Training bringt einem Modell Verhalten und Format weit zuverlässiger bei als Inhalte.

Ein größeres Basismodell macht all das überflüssig. Ein auf einem Kinderlesecurriculum fine-tuntes 8B-Modell schlug Zero-Shot-GPT-4o und Llama 3.3 70B bei Schwierigkeitskennzahlen, und ein 7B-Fine-Tune landete innerhalb von 0.15 eines starken allgemeinen Referenzmodells bei einem Bruchteil der Deployment-Kosten. Größe und Passung sind verschiedene Achsen, und nur eine davon ist pro Token käuflich.

Mehr Daten reparieren einen falsch gebauten Trainingssatz. Beaufsichtigung nur mit Antworten ließ die Genauigkeit in der Fehlvorstellungsstudie bei jeder Datengröße unter 30%. Skalierung repariert kein Ziel, dem die Information fehlt, die das Modell braucht.

Ein Rezept, das auf einem Modell funktionierte, funktioniert auch auf dem nächsten. Identische Hyperparameter erzeugten qualitativ unterschiedliches Verhalten über Architekturen hinweg, und dieselbe Fine-Tuning-Methode verbesserte ein Bildmodell erheblich und bewirkte bei einem anderen nichts Messbares. Führen Sie das Rezept auf Ihrem Basismodell erneut aus, oder Sie raten.

Überwachtes Fine-Tuning ist der sichere Zwischenschritt vor Reinforcement Learning. In SWIM erreichte die überwachte Stufe 0.474 gegenüber 0.577 des Prompts, den sie ersetzte, und nur das Belohnungssignal holte das zurück. Der Zwischenschritt kann Sie einen Monat und eine Regression kosten.

## Was Ihnen entgegenkommen wird

**„Das Budget ist für Fine-Tuning genehmigt, also fine-tunen wir."** Verbringen Sie eine Woche mit der Baseline und dem Index. Wenn die Suche die Zahl bewegt, ist das Fine-Tuning eine spätere Entscheidung mit besserer Informationslage, und Sie haben entweder ein stärkeres Argument dafür oder einen guten Grund, die GPU zurückzugeben.

**„Unser Problem ist, dass Studierende es nicht nutzen."** Training verändert, was das Modell produziert. Die 15%-Zahl beschreibt, wie viel Modell- und Promptwahl zur Fehlausrichtung mit Lernzuwächsen beitragen, und Engagement liegt außerhalb davon. Messen Sie, wo Studierende aussteigen, bevor Sie Rechenleistung kaufen.

**„Wir können studentische Arbeiten nicht an eine Anbieter-API schicken."** Das stärkste LoRA-Ergebnis hier kam von offenen Modellen im Bereich 4B bis 30B, und ein einzelner Adapter bediente mehrere davon. Diese Deployment-Form steht einem Team mit einer GPU und ohne Auftragsverarbeitungsvertrag zur Verfügung.

**„Prompting ist ein Hack; echte Arbeit heißt Training."** Der Review über 23 Studien zum Schreibunterricht fand Prompting als dominanten Ansatz und Fine-Tuning dahinter, und der größte auf dieser Seite berichtete Zugewinn kam aus einem Index. Sowohl der Review als auch die Kursassistenten-Studie ordneten diese Sprossen nach gemessenem Zugewinn.

**„Wir haben Prompting versucht, es ist auf einem Plateau gelandet, also brauchen wir Training."** Das ist die richtige Lesart, und es ist der eine Fall, in dem der Aufstieg gerechtfertigt ist. Nehmen Sie den optimierten Prompt in das Fine-Tuning mit, wie es das Item-Generierungs-Team tat, und erwarten Sie einen kleineren Zugewinn, als die Prompt-Arbeit gebracht hat.

**„Unsere Kursmaterialien sind uneinheitlich, die Suche wird also Müll zurückgeben."** Das wird sie, und die Suche erbt die Qualität des Bestands. Den Bestand zu bereinigen ist billiger, als ein Modell darauf zu trainieren, ihn zu umgehen, und der Zugewinn von 52.3% auf 66.6% wurde über gewöhnlichen Kursmaterialien gemessen und nicht über einem kuratierten Satz.

## Was Sie diese Woche tun können

**1.** Führen Sie eine Baseline nur mit Prompt und eine Stichwort-Baseline auf 50 echten Fragen aus Ihrem Kurs aus, und schreiben Sie beide Zahlen auf.

**2.** Richten Sie die Suche auf die Materialien, die Sie schon haben, und führen Sie dieselben 50 Fragen erneut aus, damit der Zugewinn gegen Ihre eigene Baseline gemessen wird.

**3.** Setzen Sie die Rubrik in den System-Prompt und iterieren Sie eine Woche lang. Hören Sie auf, wenn zwei Runden nichts mehr hinzufügen.

**4.** Prüfen Sie Ihren Trainingssatz auf Spuren auf Schrittebene. Wenn er aus Frage-Antwort-Paaren besteht, ist der Datensatz nicht bereit.

**5.** Schreiben Sie die eine Eigenschaft auf, die zuverlässig gehalten werden muss, und entscheiden Sie, ob sie Verhalten oder Inhalt ist. Diese Entscheidung wählt die Sprosse.

## Wohin als Nächstes

[[training-ai-tutors-to-guide-rather-than-answer|Wie trainieren wir einen KI-Tutor so, dass er Studierende anleitet, statt ihnen zu antworten?]] behandelt die Hälfte des Nachtrainings im Detail. [[checking-whether-educational-ai-works|Woran erkennen wir, ob eine KI in der Bildung korrekt arbeitet?]] behandelt, wie man erkennt, ob irgendetwas davon gewirkt hat. [[developing-ai-tutor|Was sind Best Practices für die Entwicklung eines wirksamen KI-Tutors?]] ist die Interaktionsdesign-Seite desselben Ziels, und [[designing-educational-ai-software|Was sind Best Practices für das Design von Bildungssoftware mit KI?]] behandelt das umgebende System. Die vollständige Konzeptseite ist [[llm-training-and-fine-tuning]].
