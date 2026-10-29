---
title: "Woran erkennen wir, dass eine Bildungs-KI richtig funktioniert und nicht nur gut punktet?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
translation_of: faqs/checking-whether-educational-ai-works
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

Der Evaluationsbericht eines Anbieters landet mit einer Zahl obenauf: Übereinstimmung mit menschlichen Bewertenden, 0.84. Oder Ihre Pilotierung endet am Freitag, und die Evidenz besteht aus einer Zufriedenheitsbefragung plus einer Benchmark-Zeile, die aus den Release Notes des Modells kopiert ist. In der Sitzung fragt jemand, ob das System funktioniert, und Sie haben eine Zahl, die sich wie eine Antwort anhört.

Die kurze Antwort: Die Werte, die Sie am häufigsten sehen, messen Ähnlichkeit, und Ähnlichkeit ist eine schwächere Behauptung als „das lehrt etwas" oder auch nur „dieses Feedback ist lesbar". Legen Sie fest, was jede Zahl beweisen darf, bewerten Sie jede Ausgabe, die Ihr System produziert, und verwandeln Sie Genauigkeit in eine Regel mit einer Schwelle, einer Person und einer Einsparung. Eine Zahl, nach der niemand handeln kann, ist keine Evidenz.

## Die Kurzfassung

**1.** Schreiben Sie einen Satz, der benennt, was Ihnen wichtig ist, und wählen Sie dann ein Maß, das genau das liest. Wortüberlappung sagt Ihnen nicht, ob das Schlussfolgern richtig ist.

**2.** Bewerten Sie jede Ausgabe einzeln. Ein starker Bewertungswert sagt nichts über das Feedback-Modul daneben.

**3.** Lassen Sie eine Person etwa fünfzig Ausgaben bewerten und vergleichen Sie diese Bewertungen mit Ihrem automatischen Prüfer. Wo die beiden nicht übereinstimmen, ist der Prüfer das Objekt der Prüfung.

**4.** Ersetzen Sie „Genauigkeit 0.84" durch eine Regel: unterhalb dieser Konfidenz liest ein Mensch die Antwort. Berichten Sie die Schwelle, den Anteil der Arbeit, den sie spart, und was aus der Übereinstimmung geworden ist.

**5.** Testen Sie Sicherheit über ganze Gespräche hinweg, und prüfen Sie jede simulierte Studierende, bevor Sie ihr trauen, was sie über Ihren Tutor sagt.

## Legen Sie fest, was die Zahl beweisen darf

Zwei Familien von Zahlen dominieren diese Literatur. Beide messen, wie eng Ihre Ausgabe etwas anderem ähnelt, und das ist eine schwächere Behauptung als Korrektheit.

**Ähnlichkeitswerte** (ROUGE und BLEU) vergleichen die Formulierung der Antwort Ihres Systems mit der Formulierung einer Referenzantwort. Ein Modell, das etwas schreibt, das dem erwarteten Text nahekommt, schneidet gut ab, selbst wenn sein Schlussfolgern falsch ist oder wenn eine Studierende über einen Weg zur richtigen Antwort gelangen könnte, der nichts lehrt.

**Übereinstimmungswerte** (QWK, quadratisch gewichtetes Kappa) messen, wie eng die Noten des Modells mit denen eines Menschen übereinstimmen. Ein Modell kann bei der Endnote mit dem Bewertenden übereinstimmen und dennoch falsch darin liegen, warum – und das Warum ist der Teil, aus dem eine Studierende lernt.

Eine Studierende kann über einen falschen Weg zu einer falschen Antwort gelangen, der wie ein richtiger aussieht, und kein Ähnlichkeitswert bemerkt das. Wenn das Schlussfolgern das ist, was Ihnen wichtig ist, muss das Maß es lesen: ein Rubric, das eine Person anwendet, oder eine Prüfung, die für genau diesen Schritt geschrieben ist.

Der Kursassistent für Lineare Regelungssysteme berichtet das auf die richtige Weise. Seine beste Konfiguration erreichte einen Ähnlichkeitswert von **0.4093** gegen Referenzantworten, wobei die Verbesserung verlässlich über null lag, und die Autorinnen und Autoren sagen offen, dass die Zahlen Formulierung und Format messen ([[lora-finetuned-control-systems-course-qa-2026]]). Der Wert ist unspektakulär und die Arbeit trotzdem nützlich, weil sie sagt, was der Wert abdeckt.

## Bewerten Sie jede Ausgabe einzeln

Im Projekt WrAFT erreichte ein feinabgestimmtes Modell einen Übereinstimmungswert von **0.84** mit menschlichen Bewertenden über 360 zurückgehaltene TOEFL-Essays. Das ist ein starkes Ergebnis für das Bewerten. Das auf Feedback-Texterstellung trainierte Modell desselben Projekts produzierte Ausgabe, die abgeschnitten und nicht parsebar war, während das bloße Prompting eines anderen Modells Feedback erzeugte, das Lehrkräfte bevorzugten ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Die Wissensbasis trägt denselben Fehler in einer zweiten Form: eine Bereitstellung, deren Bewertungsmodul gut abschnitt und deren Feedback mitten im Satz abgeschnitten und unlesbar ankam. Nichts in der Schlagzeilenzahl sagte das.

Listen Sie also die Ausgaben auf, die Ihr System produziert, und geben Sie jeder ihr eigenes Maß und ihre eigene Bestehensbedingung. Benotung, Feedback-Text, Hinweisauswahl und Sicherheitsverweigerungen scheitern auf unterschiedliche Weise, und ein Modulwert kann nicht über sein eigenes Modul hinaussehen.

## Setzen Sie einen Menschen dorthin, wo das Modell unsicher ist

Eine Korrelation sagt Ihnen, dass das Modell meistens richtig liegt. Sie sagt Ihnen nicht, was in den Fällen zu tun ist, in denen es das nicht tut. Das Ergebnis zum Konfidenz-Routing ist die sauberste Vorlage in der Wissensbasis, und sie ist kurz genug zum Kopieren.

Konfidenz erwies sich als verlässliches Warnsignal: Wenn das Modell unsicher war, lag es eher falsch (**β = -0.602, p < 0.001**). Das Team schickte die am wenigsten sicheren **20%** der Antworten an einen Menschen. Diese eine Regel hob die Übereinstimmung mit menschlichen Noten von **0.78 auf 0.82** und senkte die manuelle Bewertungsarbeit um rund **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Sehen Sie, was der Bericht enthält: eine Schwelle, eine Person und eine Einsparung. „Übereinstimmung 0.84" enthält nichts davon, weshalb es schwer ist, danach zu handeln, und leicht, darüber zu streiten.

## Prüfen Sie Ihren automatischen Prüfer gegen einen Menschen

Viele Teams nutzen inzwischen ein zweites Modell, um das erste zu beurteilen. Die Anordnung ist vernünftig, und das zweite Modell hat nicht automatisch recht.

Eine Studie, in der ein Frontier-Modell Hinweise für ein [[intelligent-tutoring|intelligentes Tutorsystem]] verfasste, fand, dass rund **35%** davon zu allgemein, falsch oder verräterisch waren und dass die automatischen Qualitätsprüfungen des Modells darin nicht mit dem menschlichen Urteil darüber übereinstimmten, welche schlecht waren ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Die praktische Version: Nehmen Sie eine Stichprobe von etwa fünfzig Ausgaben, lassen Sie eine Person sie bewerten und vergleichen Sie das mit den Bewertungen Ihres Prüfers. Wo die beiden auseinandergehen, haben Sie etwas über den Prüfer gelernt. Behalten Sie die Stichprobe und die Nichtübereinstimmungstabelle, denn sie ist auch das Artefakt, mit dem Sie einer Gutachterin antworten, die fragt, woher Sie das wissen.

## Messen Sie die Größe selbst, wenn die Aufgabe es erlaubt

Die sauberste Lösung ist, das Modell auf dieselbe Größe zu trainieren, die Sie messen wollen. Ein feinabgestimmtes Modell wurde darauf trainiert, die statistischen Eigenschaften von Testfragen zu reproduzieren: wie schwer jeder Item ist, wie gut er stärkere von schwächeren Studierenden trennt. Es lernte diese Muster, statt sie genannt zu bekommen ([[multimodal-item-parameter-estimation-2026]]). Weil das Ziel eine Eigenschaft des Assessments selbst war, konnte die Evaluation diese Eigenschaft betreffen statt die Formulierung.

Berichten Sie den Verlauf ebenso wie den Endpunkt. Der Schreibsimulator von SWIM veröffentlichte die Werte jeder Stufe nebeneinander: Rubric-basiertes Prompting **0.577**, Feinabstimmung **0.474 ± 0.023**, Reinforcement Learning **0.618 ± 0.005** ([[swim-student-writing-simulation-2026]]). Eine Leserin kann aus dieser Tabelle ersehen, ob das Training etwas bewirkt hat. Eine einzelne Endzahl kann ihr das nicht sagen, und sie verbirgt eine Stufe, in der das feinabgestimmte Modell schlechter abschnitt als das Prompting.

## Vergleichen Sie gegen etwas außerhalb Ihres Projekts

Holen Sie sich zuerst eine Baseline, auch eine billige. Das Modell des Kursassistenten ohne Grounding schnitt schlechter ab als eine einfache Stichwortsuche – die Art von Ergebnis, die die Roadmap verändert und einen Tag zu finden kostet.

Ein externer Benchmark sagt Ihnen dann, ob Ihr Wert überhaupt etwas taugt. Im CDPK-Pädagogik-Benchmark erreichte EduQwen **96.52%** gegen **90.55%** von Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Der Pedagogy Benchmark, gebaut aus echten Prüfungen der Lehrkräftefortbildung und **97 Modelle** abdeckend, fand Genauigkeiten von **28% bis 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

Bei einer Aufgabe über das Lehren reichten die Modelle also von schlecht bis gut, ein Benchmark-Ergebnis verortet Ihr System irgendwo in einer breiten Spanne.

## Testen Sie Sicherheit über ein ganzes Gespräch

Die meisten Sicherheitstests prüfen einen einzelnen Austausch. Die Schäden, die beim Tutoring zählen, summieren sich. SafeTutors fand, dass selbst Modelle, die eigens für das Lehren gebaut wurden, über ein langes Gespräch hinweg abfallen und Antworten preisgeben können, die sie zurückhalten sollten ([[hazra-safetutors-pedagogical-safety-2026]]).

Führen Sie die Prüfung über vollständige Gespräche durch, und schreiben Sie die Testzüge gezielt: die Studierende, die falsch liegt, die, die immer weiter drängt, die, die versucht, dem Modell seine Rolle auszureden. Ein Tutor, der zehn Züge durchhält und beim elften einknickt, fällt durch den Test, auf den es ankommt, und eine Suite pro Antwort würde ihn als sauber bewerten.

## Prüfen Sie die simulierte Studierende, bevor Sie ihr trauen

Simulierte Studierende zu erzeugen, statt echte zu rekrutieren, macht Evaluation erheblich billiger. Eine simulierte Studierende ist aber auch ein Messinstrument, und sie kann auf die Weise falsch sein, in der Instrumente falsch sind: zu kooperativ, zu flüssig, zu schnell bereit, einen Hinweis anzunehmen.

Der direkteste Test in der Wissensbasis verglich simulierte und gepromptete Studierende gegen **382 zurückgehaltene Dialoge** aus der größten öffentlichen Sammlung echter Mathematik-Dialoge zwischen Studierenden und Tutor, mit sieben Maßen zu Sprache, Verhalten und Denken ([[simulated-students-tutoring-dialogues-2026]]). Andere Arbeiten drängen aus unterschiedlichen Richtungen auf Realismus: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] trainiert Modelle darauf, sowohl wie Studierende zu handeln als auch zu denken, und verlaufsbewusste Profile konditionieren die Simulation auf die Vergangenheit einer Studierenden statt auf eine feste Persona ([[history-aware-student-simulation]]).

Wenn Ihr Prüfstand eine simulierte Studierende ist, validieren Sie den Simulator gegen echte Transkripte, bevor Sie ihn Ihren Tutor benoten lassen.

## Was Evaluationsteams falsch machen

Ein hoher Übereinstimmungswert heißt, dass das System korrekt ist. Er heißt, dass das System so bewertet wie der Bewertende, mit dem Sie verglichen haben, bei den Essays, bei denen Sie verglichen haben. Die 0.84 von WrAFT kamen mit Feedback, das sich nicht parsen ließ.

Eine Zahl kann für das Produkt stehen. Teams liefern ein Dashboard mit „Genauigkeit 0.84" in der Ecke und ohne Feld für das Feedback-Modul, die Hinweisstrategie oder das Verweigerungsverhalten. Der Modulwert ist die am leichtesten zu berechnende Zahl und das am wenigsten informative, was Sie berichten können.

Ein externer Benchmark entscheidet, ob das Werkzeug funktioniert. Die Spanne des Pedagogy Benchmark von 28% bis 89% sagt, dass die Aufgabenfamilie schwer und ungleich bedient ist. Ihre Position in dieser Spanne ist eine Tatsache über Ihr Modell. Was Ihre Studierenden danach können, ist eine andere Tatsache.

Ein Modell, das ein Modell beurteilt, ist ein billiger Ersatz für menschliche Bewertungen. Er ist billig. Die 35% und die Uneinigkeit darüber, welche Hinweise schlecht waren, beschreiben, was ein Richter durchlässt, der nie geprüft wurde.

Simulierte Studierende machen Evaluation kostenlos. Sie machen sie billig, und sie verschieben die Kosten in die Validierung. Der Vergleich über 382 Dialoge existiert, weil das Instrument kalibriert werden musste.

## Welche Einwände zurückkommen werden

**„Dafür haben wir keine Annotierenden."** Fünfzig bewertete Ausgaben reichen für den Anfang. Bewerten Sie sie selbst, wenn niemand sonst frei ist, und behalten Sie die Tabelle.

**„Unser Benchmark-Wert schlägt Gemini."** Das tut er, bei CDPK, mit den Prompts, die dieser Benchmark verwendet. Stellen Sie das Maß ohne Unterstützung daneben.

**„Unser automatischer Richter stimmt mit unseren menschlichen Bewertenden überein."** Dann haben Sie eine Korrelation bei einer Stichprobe. Fragen Sie, bei welchen Ausgaben er nicht übereinstimmte, und lesen Sie diese, denn dort lebt der Fehler.

**„Wir können vor dem Start keine vollständige Evaluation durchführen."** Führen Sie die drei billigen durch: eine Ausgabe separat bewertet, fünfzig Ausgaben von einer Person bewertet, ein Sicherheitsdurchlauf in Gesprächslänge. Die teuren Posten können nach der Pilotierung folgen.

**„Das System ist nur eine Demo, Evaluation ist also verfrüht."** Eine Demo ist der billigste Ort, um herauszufinden, dass Ihre Zahl die Formulierung misst. Sobald eine Roadmap daran hängt, kostet derselbe Befund mehr, um danach zu handeln.

## Was Sie diese Woche tun können

**1.** Schreiben Sie die Ein-Satz-Behauptung, die Ihre Evaluation stützen soll. Setzen Sie sie oben in das Eval-Dokument.

**2.** Listen Sie jede Ausgabe auf, die das System produziert, und geben Sie jeder eine Zeile, ein Maß und eine Bestehensbedingung.

**3.** Ziehen Sie fünfzig Ausgaben, bewerten Sie sie selbst und stellen Sie Ihre Bewertungen neben die des Prüfers.

**4.** Berechnen Sie die Konfidenzverteilung und schreiben Sie die Routing-Regel mit einer Zahl darin, plus den Namen der Person, die liest, was darunterfällt.

**5.** Führen Sie ein Sicherheitsgespräch, in dem die Studierende falsch liegt, zweimal dagegenhält und nach der Antwort fragt.

## Wohin als Nächstes

[[making-ai-better-at-supporting-learning|Wie können wir KI besser darin machen, das Lernen im eigenen Fach zu unterstützen?]] behandelt die Designseite desselben Problems. [[training-ai-tutors-to-guide-rather-than-answer]] behandelt den Trainingsweg zu einem Tutoring-Verhalten, und [[evaluating-ai-interventions-methods]] ist die lehrkraftgerichtete Version dieser Frage, mit [[reporting-interpreting-aied-research]] als der forschungsgerichteten. Die Methoden liegen unter [[ai-ed-evaluation]] und [[llm-training-and-fine-tuning]].
