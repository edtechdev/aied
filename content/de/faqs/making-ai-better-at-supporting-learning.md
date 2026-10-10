---
title: "Wie können wir KI darin besser machen, Lernen in unserem eigenen Fach zu unterstützen?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-10T09:50:26-04:00"
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
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Ein Allzweckmodell wird die Frage eines Studenten bereitwillig für ihn beantworten, und es weiß nichts über Ihr Curriculum, Ihre Rubrik oder die Fehler, die Ihre Studierenden tatsächlich machen. Jene Lücke zu schließen wird meist als Trainingsproblem gerahmt. In dieser Wissensbasis ist es überwiegend ein **Grounding- und Prompting**-Problem, und die Belege für jene Reihenfolge sind ungewöhnlich direkt: eine Kursassistenz-Studie fand, dass Retrieval, nicht das Modell, die erstklassige Entscheidung war, und dass ein allgemeines Modell ohne Grounding *unter* einer reinen TF-IDF-Baseline punktete.

Training ist real und manchmal nötig, aber es ist das dritte oder vierte, was zu versuchen ist, nicht das erste. Was folgt, ist die Leiter in der Reihenfolge, die verschwendete Rechenzeit vermeidet.

## Die kurze Version

Es gibt fünf Hebel, in aufsteigender Reihenfolge von Kosten und Verpflichtung: **Prompting**, **Retrieval** über Ihre eigenen Materialien, **parametereffiziente Anpassung** ([[llm-training-and-fine-tuning|LoRA]] und ähnliche), **vollständige Feinabstimmung** und **Post-Training** mit Präferenz- oder Belohnungssignalen. Jede Sprosse kostet mehr Daten, mehr Rechenzeit und mehr Evaluationsdisziplin als die darunter, und jede ist eine schlechtere erste Wahl, wenn nicht eine Messung den Aufstieg rechtfertigt.

Die Forschungsliteratur berichtet meist die Spitze jener Leiter, weshalb es leicht ist, nach Training zu greifen, wenn Grounding genügt hätte.

## Schritt 1: Holen Sie sich eine Baseline, die Sie tatsächlich schlagen können

Bevor Sie irgendetwas verändern, protokollieren Sie, was Sie von einem reinen Prompt bekommen. Protokollieren Sie dann, was eine triviale Methode bekommt, denn das ist die Zahl, die Sie ehrlich hält.

Die [[shen-sustainable-ai-knowledge-base-cs-education-2026|Kurs-Wissensbasis-Assistenz]]-Studie ist allein dafür lesenswert. Ein lokales LLM ohne Retrieval erreichte **52.3%** Genauigkeit. Eine TF-IDF-Baseline – eine lexikalische Methode, die Jahrzehnte alt ist –, erreichte **55.4%**. Das Modell war schlechter als die klassische Methode.

Wenn Sie diesen Schritt überspringen, können Sie nicht sagen, ob Ihre Feinabstimmung half, und Sie könnten etwas ausliefern, das eine Stichwortsuche schlägt.

## Schritt 2: Begründen Sie das Modell in Ihren eigenen Materialien

Das Hinzufügen von [[rag|Retrieval-Augmented Generation]] über die Kursmaterialien, ohne jede Feinabstimmung, hob jenes System von 52.3% auf **66.6%**. Das ist der größte Einzelgewinn, der in dieser Wissensbasis für den Aufwand berichtet wird, und er ist reversibel: wenn sich Ihre Dokumente ändern, indizieren Sie neu, statt neu zu trainieren.

Zwei weitere Ergebnisse zeigen in dieselbe Richtung. Ein PRISMA-Review von 23 empirischen Studien zur Anpassung von KI für [[writing-education|Schreibunterweisung]] fand **Prompt-Engineering dominant (N = 13), vor Feinabstimmung (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Und wo eine Wissensbasis aktuell bleiben muss, ist Retrieval der einzige Hebel, der aktuell bleibt, ohne einen Trainingslauf erneut auszuführen.

Retrieval hat außerdem eine pädagogische Form. Ein Modell in Ihren eigenen ausgearbeiteten Beispielen und Rubriken zu begründen ist, wie es innerhalb des von Ihnen designten [[scaffolding|Scaffolds]] bleibt, statt in generische Ratschläge abzudriften.

## Schritt 3: Konstruieren Sie den Prompt gegen eine Rubrik

Prompt-Arbeit ist kein Vorspiel, das Sie tun, während Sie auf Training warten. Zwei Ergebnisse hier zeigen, was sie für sich erreicht:

- **Rubrikgeleitetes Prompting, iterativ ko-verfeinert, hob LLM-Mensch-Übereinstimmung bei studentischer Designarbeit von 54.75% auf 81.25%** (Cronbachs Alpha 0.393 → 0.798), ohne jede Feinabstimmung ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Ein literaturbegründeter maßgeschneiderter Prompt erzeugte mathematische Ziel-[[misconceptions]] bei **0.98** Präsenz, gegenüber **0.40** für einen breiten Prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Das praktische Signal ist das **Plateau**. In der Item-Generierungsstudie hörte iterative Prompt-Verfeinerung auf, sich zu verbessern, und Feinabstimmung von GPT-4.1 *auf dem optimierten Prompt* fügte dann den verbleibenden Gewinn hinzu ([[gpt-item-generation-l2-listening-2026]]). Ein Plateau nach echter Prompt-Arbeit ist Ihr Beleg, dass Training etwas hinzufügen könnte. Nach Training zu greifen, bevor Sie eines erreicht haben, ist Raten.

## Schritt 4: Passen Sie das Modell an, wenn das Ziel stabil und spezifisch ist

Anpassung zahlt sich aus, wenn Sie brauchen, dass das Modell eine Eigenschaft verlässlich hält: ein Leseniveau, ein Ausgabeformat, eine Domäne, die ihm fehlt. Das wiederkehrende Ergebnis ist, dass **Zielgenauigkeit Größe schlägt**.

- Drei **8B**-Modelle, feinabgestimmt auf ein expertenkonstruiertes Lesecurriculum für Kinder, übertrafen Zero-Shot-GPT-4o und Llama 3.3 70B bei Schwierigkeitsmaßen, mit vernachlässigbaren Sicherheitsproblemen. Die Autoren rahmen das als **Steuerbarkeit über Größe** ([[llm-children-reading-story-generation]]).
- Ein **24.795-Beispiele**-Instruktionsdatensatz, begründet in Indian Knowledge Systems, erzeugte eine **7B**-Feinabstimmung, die **6.39** auf einem Fünf-Judges-Panel externer Experten punktete, innerhalb von **0.15** eines starken allgemeinen Referenzmodells bei einem Bruchteil der Deployment-Kosten –, während dasselbe Basismodell ohne die Feinabstimmung **nahe Null bei domänenspezifischen Dimensionen** punktete. Jene Lücke zwischen „generell kompetent" und „hier kompetent" ist der gesamte Fall für Domänenanpassung ([[iks-instruct-dataset-indian-knowledge]]).
- Ein einzelner [[llm-training-and-fine-tuning|LoRA]]-Adapter, trainiert auf etwa **3.900** gepoolten bewerteten Beispielen, brachte fünf kleine offene Modelle (4B–30B) auf Parität oder besser mit einer menschlichen bewertenden Person über zwei Informatikprüfungen ([[llm-graders-computer-science-exams-2026]]). Ein Adapter, ein Datensatz, mehrere Basismodelle: das ist die Form eines Deployments, das ein kleines Team tatsächlich führen kann.

Beachten Sie das Wort *stabil* in der Überschrift. Format, Rubrik, Leseniveau und Domänenvokabular sind stabile Ziele. Urteilsbeladene Prosa ist es nicht, und dort scheitert Anpassung.

## Schritt 5: Verändern Sie, wie es sich verhält, nicht nur was es erzeugt

Anpassung lehrt ein Modell *was zu erzeugen*. Post-Training lehrt es *wie sich zu verhalten*, und für Tutoring ist jene Unterscheidung das ganze Problem: allgemeine Modelle werden auf menschliche Präferenz für Hilfsbereitschaft nachtrainiert, was sofortiges Antworten bedeutet, während Lehren erfordert, die Antwort zurückzuhalten.

Hier leben die stärksten bildungswirksamen Ergebnisse. EduQwens Belohnungsmodell priorisierte explizit **leitende Antworten gegenüber direkten Antworten**, und seine dreistufige Pipeline erreichte **96.52%** auf dem CDPK-Benchmark gegenüber Gemini-3 Pros **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]). SWIMs Schreibsimulator bewegte sich von rubrikbegründetem Prompting (bestes QWK **0.577**) zu überwachtem Feinabstimmen (**0.474 ± 0.023**) zu Reinforcement Learning (**0.618 ± 0.005**) über jedes Merkmal und jeden Prompt ([[swim-student-writing-simulation-2026]]).

Ein Befund in diesem Bereich ist leicht zu übersehen und teuer zu ignorieren: **Aufsichtsqualität schlägt Aufsichtsmenge**. Instruktionsabgestimmte Modelle lernten Analysis-Fehlvorstellungen nur, wenn sie auf **schrittniveau Lösungsspuren** trainiert wurden; trainiert auf Endantworten allein, blieb die Genauigkeit bei **unter 30% bei jeder Datengröße** ([[misconception-acquisition-dynamics-llms-2026]]). Wenn Ihre Trainingsbeispiele Frage-und-richtige-Antwort-Paare sind, trainieren Sie das Falsche.

## Wann Anpassen des Modells nicht hilft

Das ist der Teil, den die Begeisterung meist überspringt.

- **Urteilsbeladener Text.** In WrAFT erzeugte dasselbe Projekt, das für das *Bewerten* von Aufsätzen erfolgreich feinabstimmte (QWK 0.84), abgeschnittene und unparsebare Ausgaben, wenn es für *Feedback* feinabstimmte, während direktes Prompten von Claude 3.7 das Feedback erzeugte, das Lehrkräfte am besten bewerteten ([[wraft-automated-writing-evaluation-argumentative-2026]]). Feinabstimmung lehrte das Modell, einen Wert zu treffen; sie lehrte es nicht zu schreiben.
- **Größe ist kein verlässlicher Prädiktor** für nachgelagerte Leistung unter LoRA-Anpassung, und **identische Hyperparameter erzeugten qualitativ verschiedenes Verhalten über Architekturen hinweg** ([[aiawe-automated-writing-evaluation]]). Ein Rezept, das auf einem Modell funktionierte, ist kein Rezept.
- **Architektur kann mehr zählen als Parameterzahl.** Feinabstimmung von drei offenen Text-zu-Bild-Modellen auf 1.000 mit Bildunterschriften versehenen Bildern aus Kerntechnik verbesserte Stable Diffusion XL erheblich, gab begrenzte Gewinne für SD-v3.5-Medium, und erzeugte **keine messbare Verbesserung für Flux.1 überhaupt** ([[nuclear-diffusion-text-to-image-learning-2026]]).
- **Manchmal ist die Antwort Validierung statt Training.** Ein ungeschultes GPT-4 an der Grenze erzeugte etwa **35%** zu allgemeine, falsche oder antwortenverratende Hinweise, wenn es Tutoring-Feedback verfasste, und seine eigenen automatischen Qualitätsprüfungen waren mit menschlichem Urteil uneins ([[reddig-maclellan-personalized-feedback-llm-2026]]).

## Was es in der Praxis braucht

Für die Anpassungssprosse ist die Latte niedriger, als die meisten Teams annehmen: **einige Hundert bis einige Tausend Beispiele und eine einzelne GPU**. LoRA trainiert eine kleine Zahl hinzugefügter Parameter und lässt die Basisgewichte eingefroren, also können mehrere Modelle von einem Adapter bedient werden.

Rang ist ein Abwägungsprozess statt ein zu maximierender Regler: der Gewinn pro Million Adapterparameter fiel monoton, während der Rang stieg, und Kursabstimmung war eine Skala-und-Rang-Entscheidung statt ein kostenloses Upgrade ([[lora-finetuned-control-systems-course-qa-2026]]). Welche Schichten Sie anpassen, ist ebenfalls eine echte Wahl – nur die **letzten vier Transformer-Schichten** eines BERT-basierten Diskursanalysators zu aktualisieren übertraf sowohl das Anpassen nur der obersten Schicht als auch Feinabstimmung in voller Tiefe ([[bert-discourse-english-teaching-2026]]).

Die leicht zu unterschätzende Kostenstelle ist Evaluation, nicht Rechenzeit. Siehe [[checking-whether-educational-ai-works|Woran erkennen wir, dass eine Bildungs-KI richtig funktioniert und nicht nur gut punktet?]]

## Kalibrieren Sie, was Sie erwarten

Modell- und Promptwahl zusammen machen nur etwa **15%** der Fehlabstimmung zwischen LLMs und studentischen Lernzuwächsen aus, und in jener Studie machten Benchmark-Gewichtung und einstimmige Abstimmungs-Ensembles die Abstimmung *schlechter* ([[educational-llm-alignment]]). Vortrainingsdaten sind der dominante Hebel darauf, wie sich ein Modell verhält, und es ist der Hebel, den Sie nicht ziehen können.

Das ist kein Argument gegen die obige Arbeit. Es ist ein Argument dagegen, von einer Feinabstimmung zu erwarten, dass sie ein Designproblem behebt. Wenn das Problem ist, dass Ihr Tutor zu bereitwillig antwortet, mag Training es adressieren. Wenn das Problem ist, dass Ihre Lernenden sich nicht mit ihm engagieren, wird Training es nicht.

## Eine kurze Entscheidungsreihenfolge

**1.** Protokollieren Sie eine reine Prompt-Baseline, einschließlich einer trivialen.

**2.** Fügen Sie Retrieval über Ihre eigenen Materialien hinzu.

**3.** Konstruieren Sie den Prompt iterativ gegen Ihre Rubrik, und achten Sie auf das Plateau.

**4.** Passen Sie das Modell mit LoRA an, wenn das Ziel ein stabiles Format, eine stabile Rubrik, Niveau oder Domäne ist.

**5.** Trainieren Sie nach, nur wenn Sie *wie es sich verhält* verändern müssen, und schreiben Sie die Belohnung gegen einen Benchmark, denn sie wird ausgetrickst werden.

**6.** Überwachen Sie auf Schrittniveau, nicht auf Antwortniveau.

**7.** Halten Sie einen Menschen in der Schleife, wo Konfidenz niedrig ist.

**8.** Testen Sie Sicherheit über ganze Gespräche, nicht einzelne Turns.

## Verbundene Fragen

- [[training-ai-tutors-to-guide-rather-than-answer|Wie trainieren wir einen KI-Tutor, Studierende anzuleiten statt ihnen zu antworten?]] — die Post-Training-Hälfte im Detail
- [[checking-whether-educational-ai-works|Woran erkennen wir, dass eine Bildungs-KI richtig funktioniert und nicht nur gut punktet?]] — woran man erkennt, ob irgendetwas davon funktionierte
- [[developing-ai-tutor|Was sind Best Practices für die Entwicklung eines wirksamen KI-Tutors?]] — die Interaktionsdesign-Seite desselben Ziels
- [[designing-educational-ai-software|Was sind Best Practices und Tipps für das Design wirksamer Bildungs-KI-Software?]]
- [[llm-training-and-fine-tuning]] — die vollständige Konzeptseite
