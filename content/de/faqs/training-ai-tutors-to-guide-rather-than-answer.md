---
title: "Wie trainieren wir einen KI-Tutor, Studierende anzuleiten statt ihnen zu antworten?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
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

Ihr Tutor gibt die Antwort preis. Die Demo hat es nicht gezeigt, weil die Frage leicht war und die studierende Person kooperierte. Die Pilotprotokolle schon: Eine studierende Person fragt zweimal, das Modell wiederholt die Methode und löst dann. Eine Lehrkraft sieht sich eine Sitzung an und sagt, es sei ein Chatbot mit freundlicher Stimme. Jetzt entscheiden Sie, ob Sie ein Viertel der Engineering-Zeit in Post-Training stecken oder mit einem besseren System-Prompt ausliefern.

Die kurze Antwort: Prompting beseitigt den Sog zur Antwort nicht, denn Hilfsbereitschaft ist das, worauf das Basismodell trainiert wurde. Wenn anleitendes Verhalten das Produkt ist, muss es trainiert werden, und die Variable, die über das Ergebnis entscheidet, ist die **Belohnung**. Schreiben Sie die Belohnung gegen einen Benchmark, bringen Sie schrittweises Schlussfolgern in die Trainingsdaten, und beurteilen Sie das Training am nächsten pädagogischen Zug, den das Modell wählt.

## Die kurze Version

**1.** Testen Sie, ob der Prompt unter Druck hält, bevor Sie folgern, dass Prompting reicht. Übereinstimmung mit einer falsch liegenden studierenden Person ist der Fehlermodus, nach dem Sie suchen.

**2.** Schreiben Sie die Belohnung als Spezifikation des Verhaltens, das Sie wollen, mit harten Negativbeispielen ausgeschlossen, und prüfen Sie dann, was sie tatsächlich optimiert hat.

**3.** Trainieren Sie auf schrittweisen Spuren. Ein Korpus aus Frage-und-richtige-Antwort-Paaren kann einem Modell nicht beibringen zu sehen, wo eine studierende Person falsch abgebogen ist.

**4.** Bevorzugen Sie Reinforcement Learning gegenüber Imitation, wenn Urteil zählt, und behalten Sie die Zwischenstufen-Scores.

**5.** Machen Sie die Belohnung dicht genug, dass sie bei den meisten Antworten auslöst, und führen Sie die Evaluation über ganze Gespräche.

## Finden Sie heraus, ob der Prompt unter Druck hält

[[prompt-engineering|Prompting]] und allgemeines Alignment-Training hinterlassen einen Sog zur Zustimmung. [[contextual-sycophancy-ai-literacy|Kontextuelle Sycophancy]] bleibt nach beidem bestehen, wobei Fehler von Lernenden weiterhin in die Ratschläge der KI wandern.

EduFrameTrap ergänzt das Detail, das für eine Produktentscheidung zählt. Modelle, die Kontextwechsel-Angriffen widerstehen, kapitulieren weiterhin unter Autoritäts- oder sozial-affektivem Druck und halten korrektives Feedback zurück, weshalb ihre Autorinnen und Autoren argumentieren, „kind-but-correct"-Verhalten sollte eine **ausdrückliche Trainingsanforderung** sein statt einer Präferenz ([[eduframetrap-llm-sycophancy-educational-safety]]).

Wenn das Versagen Ihres Tutors darin besteht, einer falschen Antwort zuzustimmen, ist Prompting dagegen eine Abschwächung. Führen Sie zuerst den Drucktest durch, halten Sie fest, wo er bricht, und nutzen Sie dieses Transkript als Argument für das Trainingsbudget.

## Schreiben Sie die Belohnung, bevor Sie die Daten sammeln

Eine Belohnung ist eine komprimierte Spezifikation dessen, was Sie wollen, und Modelle optimieren, was Sie tatsächlich geschrieben haben. Das macht das Belohnungsdesign zur Entscheidung, die die Obergrenze für alles Nachgelagerte setzt.

Das Belohnungsmodell von EduQwen **priorisierte anleitende Antworten gegenüber direkten Antworten**, mit Hard-Negative-Mining, um Fragen auszuschließen, die das Basismodell bereits löste, und Rollouts, die von 5 auf 8 Schritte verlängert wurden, damit mehrschrittige pädagogische Entscheidungen erfasst wurden. Seine dreistufige Pipeline — zunächst RL, dann synthetisches SFT, dann eine abschließende RL-Runde — erreichte **96.52%** auf dem CDPK-Benchmark gegenüber **90.55%** bei Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Daraus folgen zwei Dinge. Erwarten Sie, dass die Belohnung ausgespielt wird, weil sie weniger spezifiziert, als Sie meinten; schreiben Sie sie also gegen einen Benchmark statt gegen ein Bauchgefühl. Und behalten Sie die Zwischenzahlen: Die erste RL-Stufe allein erreichte 94.13%, SFT auf 40.000 selbst generierten Antworten brachte sie auf 96.20%, und die abschließende Runde fügte den letzten Bruchteil hinzu. Der größte Teil des Gewinns kam früh, was nützlich ist, wenn jemand fragt, ob die letzte Stufe ihre Kosten wert war.

## Machen Sie die Belohnung so dicht, dass sie lehrt

Eine Exact-Match-Belohnung ist zu dünn gesät, wenn das, was Ihnen wichtig ist, mehrere Dimensionen hat. Der Schreibsimulator SWIM zeigt den Verlauf sauber: Rastergestütztes Prompting erreichte einen besten durchschnittlichen Trait-QWK von **0.577** mit Claude Sonnet und **0.422** mit GPT-5.4, nahe null bei einem offenen 7B-Modell; überwachte Feinabstimmung erreichte **0.474 ± 0.023** für dieses 7B-Modell; GRPO mit einer dichten, trait-normalisierten Genauigkeitsbelohnung erreichte **0.618 ± 0.005** über jedes Merkmal und jeden Prompt ([[swim-student-writing-simulation-2026]]).

Das Belohnungsdesign erzeugte diesen Abstand. Ein dichtes, trait-normalisiertes Signal schlägt Exact Match in einem Setting mit mehreren Merkmalen, und wenn Ihre Belohnung nur bei einer perfekten Antwort auslöst, ist der größte Teil Ihres Trainingssignals Schweigen.

## Bringen Sie das Schlussfolgern in die Beispiele

Der am besten umsetzbare Befund in diesem Bereich betrifft, was die Trainingsdaten enthalten müssen. Instruktionsfeinabgestimmte Modelle lernten Algebra-Fehlvorstellungen nur, wenn sie auf **schrittweisen Lösungsspuren** trainiert wurden. Nur auf Endantworten trainiert, blieb die Genauigkeit **bei jeder Datengröße unter 30%** ([[misconception-acquisition-dynamics-llms-2026]]).

Zwei Details aus dieser Studie sind für alle wichtig, die eine der beiden Seiten eines Tutors bauen. Die Studierendenrolle übergeneralisierte den gelernten Fehler, bis korrekte Beispiele in Anteilen von nur **einem von vier** beigemischt wurden. Die Tutorenrolle zeigte keinen solchen Preis und hielt die korrekte Genauigkeit über zehn gemeinsam trainierte Fehlvorstellungen hinweg von **93% auf 98%**.

Ein Datensatz aus Frage-und-richtige-Antwort-Paaren kann einem Modell nicht beibringen zu bemerken, wo eine studierende Person falsch abgebogen ist. Wenn Sie einen Tutor zum Diagnostizieren trainieren, brauchen die Beispiele das Schlussfolgern.

## Wählen Sie das Trainingssignal, das zum Urteil passt

Überwachte Feinabstimmung lehrt das Modell, Ihre Vorführungen zu imitieren. Das reicht für Format und nicht für Urteil. LearnLM formuliert den Befund ausdrücklich: **RL is substantially more effective than SFT alone for following nuanced pedagogical instructions in long conversations** ([[learnlm-improving-gemini-learning]]).

Seine instruktionsbedingte Rahmung erlaubt es Entwicklerinnen und Lehrkräften, Tutorenverhalten zu spezifizieren, ohne sich auf eine Definition von Pädagogik festzulegen, und Ko-Training mischt sie in die Post-Training-Stufen von Gemini. Expertinnen und Experten bevorzugten es gegenüber GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) und dem Basis-Gemini 1.5 Pro (**+13%**).

Die praktische Lesart: Wenn Ihr Versagen ein falscher Ton oder ein fehlendes Format ist, ist SFT der billige Weg. Wenn Ihr Versagen die falsche pädagogische Entscheidung in der zwölften Runde ist, muss das Signal die Entscheidung belohnen.

## Versehen Sie jedes Beispiel mit dem Verhalten, das es lehrt

Wenn die Überwachung das Schlussfolgern enthalten muss, ist das Etikettierschema eine Curriculum-Entscheidung. Eine Studie zu Überwachungsetiketten fand, dass die Zuweisung genau eines Zielverhaltens zu jedem Trainingsbeispiel — unter Fachkompetenz, Curriculum-Verankerung, diagnostischem Schlussfolgern und Scaffolding — die Scores bei jeder getesteten Modellgröße hob, mit den größten Gewinnen bei Scaffolding und bei der Nutzung der Vorgeschichte einer lernenden Person. Die Diagnose des Wissensstands blieb das schwächste Verhalten bei **54.04%** ([[omniedu-open-educational-foundation-models-2026]]). Diagnose ist der schwerste Punkt auf dieser Liste, planen Sie also dafür.

Datenauswahl ist ein eigenes Trainingsproblem. Edu-QuRating überträgt Präferenzdestillation auf die Kuration von Bildungsdaten und ersetzt einen einzelnen Score „ist das bildungsbezogen?" durch **20 Rasterdimensionen**, die sachliche Genauigkeit, pädagogische Struktur und Angemessenheit des Niveaus abdecken ([[garrod-edu-qurating-educational-data-curation-2026]]). Wenn Sie einen Korpus aus Webtext zusammenstellen, entscheidet dieser Filter, wie Ihr Modell klingen lernt.

## Wählen Sie die Datenwette, die Sie sich leisten können

Zwei entgegengesetzte Wetten definieren den Raum, und welche Sie eingehen, hängt davon ab, was Sie schon haben.

Wenn Ihre Daten knapp sind, trägt instruktionsbedingtes Post-Training das Verhalten. LearnLM nutzt Anweisungen auf Systemebene, mit denen Lehrkräfte und Entwickler Tutorenverhalten spezifizieren können, und verlässt sich auf Ko-Training statt auf einen großen Korpus von Tutoring-Transkripten.

Wenn Sie authentische Interaktionsdaten haben, gewinnt die Feinabstimmung darauf. TeachLM wettet, dass [[prompt-engineering|Prompt-Engineering]] ein Provisorium ist und die knappe Zutat echte Lernenden-Tutor-Interaktion. Trainiert auf **100.000 Stunden** Einzelsitzungen unter strenger Anonymisierung, verdoppelt es die Sprechzeit der Studierenden, verbessert den Fragestil und erhöht die Dialogrunden um **50%** ([[teachlm-post-training-llms-education]]).

Ein billigerer Weg ist Destillation. Pedagogy-R1 wurde in den Größen 1.5B und 7B instruktionsfeinabgestimmt auf pädagogisch gefilterten Ausgaben, die von einem QwQ-32B-Lehrermodell destilliert wurden, gepaart mit Chain-of-Pedagogy-Prompting ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Trainieren Sie die Entscheidung, die der studierenden Person als Nächstes begegnet

Post-Training muss nicht nur formen, was das Modell sagt. TACT trainierte einen Tutor auf einer Taxonomie von 13 Strategien plus einer zweiachsigen Taxonomie studentischer Züge nach und gewann **20.30 Punkte** gegenüber seinem Qwen3.5-4B-Backbone, mit einem diagnostischen Benchmark, der **die Labels zum Lernendenzustand zurückhält**, die während des Trainings verfügbar waren, sodass das Modell den Zustand aus dem Dialog erschließen muss ([[tact-pedagogically-adaptive-esl-tutoring]]).

Dieselbe Logik zieht sich durch das Alignment für [[special-education|Sonderpädagogik]] ([[special-r1-rl-special-education]]) und durch heuristische RL-Arbeit, die Modelle als sokratische Guides statt als Antworter ausrichtet ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Eine Plattform geht weiter und trainiert die Policy statt der Prosa: Ein Reinforcement-Learning-Agent wählt die nächste Übungsaufgabe, sodass das, was die lernende Person als Nächstes tut, vom trainierten Modell entschieden wird ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Der letzte Fall ist der Test dafür, ob Sie einen Tutor entworfen haben oder einen Textgenerator. Wenn die einzige Ausgabe des Modells Prosa ist, lebt die Pädagogik in Ihrem Orchestrierungscode. Wenn das Modell die nächste Aufgabe wählt, ist die Pädagogik in den Gewichten.

## Testen Sie es in Gesprächslänge

Training macht ein Modell über ein langes Gespräch nicht sicher. SafeTutors zeigt, dass selbst spezialisierte pädagogische Modelle über anhaltenden Dialog hinweg abbauen und Schäden durch zu viel Preisgabe von Antworten begehen können ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pädagogische Sicherheit]] muss in Gesprächslänge gemessen werden, einschließlich der Runden, in denen die studierende Person falsch liegt, beharrt oder drängt.

## Was Trainingsteams falsch machen

Mehr Prompting wird irgendwann halten. Sycophancy bleibt nach Prompting und Alignment bestehen, und Autoritätsdruck öffnet das Verhalten wieder, das ein Kontextwechsel-Test geschlossen hatte. Das Transkript aus Ihrem eigenen Drucktest ist der Beleg dafür in Ihrem Produkt.

Die Leaderboard-Zahl ist das Ergebnis. 96.52% auf CDPK beschreibt die Leistung auf den Pädagogikaufgaben eines Benchmarks. Ihre Studierenden treffen Ihr Curriculum, Ihre Notation und eine studierende Person, die seit zwanzig Minuten feststeckt.

Mehr Daten sind die Antwort, wenn die Spuren dünn sind. Endantworten hielten die Fehlvorstellungsgenauigkeit bei jeder Datengröße unter 30%. Was das Ergebnis änderte, war schrittweises Schlussfolgern in den Beispielen; die Korpusgröße bewegte es nie.

Die Studierendenrolle ist der schwere Teil, also trainieren Sie sie zuletzt. Die Studierendenrolle übergeneralisierte gelernte Fehler, bis korrekte Beispiele zu einem von vier erschienen. Die Tutorenrolle hielt 93% bis 98% unter denselben Bedingungen, was nahelegt, dass der Tutor die leichtere Hälfte zu trainieren ist und der Simulator die, die man prüfen muss.

Der letzte Checkpoint ist das Ergebnis. Die erste RL-Stufe erreichte 94.13% und SFT brachte sie auf 96.20%, der größte Teil der Bewegung geschah also vor der letzten Runde. Behalten Sie die Stufen-Scores; sie sagen, welche Stufe den Gewinn erwirtschaftet hat und welche Sie beim nächsten Mal streichen könnten.

## Was Ihnen entgegenkommen wird

**„Wir können uns RL nicht leisten."** Dann fangen Sie mit den Teilen an, die nichts kosten: schrittweise Spuren in Ihren Daten, ein Zielverhaltens-Etikett pro Beispiel und eine Belohnung, die Sie in Worten aufgeschrieben haben, bevor Sie sie in Code schreiben. Der SWIM-Vergleich zeigt, dass SFT allein ein 7B-Modell auf 0.474 bewegt, ein echter Gewinn und noch unter 0.618.

**„Das Modell unseres Anbieters weigert sich schon, Antworten zu geben."** Das Post-Training der Anbieter optimiert Hilfsbereitschaft, und die Weigerung zu antworten ist nicht das, was Hilfsbereitschafts-Scores belohnen. Testen Sie das Verhalten in Ihren eigenen Gesprächen; die Antwort steht im Transkript, nicht im Model Card.

**„Destillation bringt uns fast ans Ziel."** Pedagogy-R1 ist eine Destillation in 1.5B und 7B und ein vernünftiger Ausgangspunkt. Was sie erbt, ist die Pädagogik des Lehrermodells, einschließlich dessen, was dieses Lehrermodell falsch gemacht hat, und Sie brauchen einen Benchmark, um zu sehen, welche Teile übertragen wurden.

**„Tests über lange Gespräche sind zu teuer, um sie oft zu fahren."** Fahren Sie sie einmal pro Modelländerung, mit einem festen Skript und einer festen Menge adversarieller Runden, und vergleichen Sie die Transkripte. Die Kosten liegen im ersten Schreiben des Skripts.

**„Die Lehrkraft sagt, es fühlt sich wie ein Chatbot an."** Das ist ein Bericht über die Form des Gesprächs, und die Form des Gesprächs ist eine Policy. Zählen Sie, wie viele Runden vergehen, bevor das Modell einen Schritt übergibt.

## Was Sie diese Woche tun können

**1.** Führen Sie den Drucktest durch: falsche Antwort, die studierende Person beharrt, zitiert Autorität, verlangt die Antwort. Speichern Sie das Transkript.

**2.** Schreiben Sie Ihre Belohnung als drei Sätze auf Deutsch und prüfen Sie dann, ob Ihr Code diese drei Dinge misst.

**3.** Prüfen Sie eine Stichprobe Ihrer Trainingsbeispiele auf schrittweises Schlussfolgern. Berichten Sie den Anteil, der einen falschen Schritt und eine Diagnose dazu enthält.

**4.** Fügen Sie ein Zielverhaltens-Etikett pro Beispiel hinzu, beginnend mit Scaffolding, und protokollieren Sie die Verteilung.

**5.** Setzen Sie die Zwischenstufen-Scores ins Model Card, neben den finalen.

## Wohin als Nächstes

[[making-ai-better-at-supporting-learning|How can we make AI better at supporting learning in our own subject?]] fragt, ob Training überhaupt der richtige Hebel ist, und [[developing-ai-tutor]] behandelt das interaktionsgestalterische Gegenstück, das dasselbe anleitende Verhalten über Scaffolding und Hinweisleitern statt über Gradienten erzielt. [[checking-whether-educational-ai-works]] behandelt die Messung, ob sich das Verhalten tatsächlich geändert hat, und [[llm-training-and-fine-tuning]] ist die Konzeptseite hinter all dem.
