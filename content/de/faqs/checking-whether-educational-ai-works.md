---
title: "Woran erkennen wir, dass eine Bildungs-KI richtig funktioniert und nicht nur gut punktet?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-10T09:50:26-04:00"
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

Eine Bildungs-KI kann wirken, als funktioniere sie, während sie es nicht tut. Die Punktzahlen, die Sie am häufigsten sehen – wie ähnlich die Antwort des Modells einer richtigen ist, oder wie eng seine Noten mit denen eines Menschen übereinstimmen –, können stark aussehen, während das, worauf es Ihnen tatsächlich ankommt, kaputt ist.

In einem Projekt in dieser Wissensbasis verdiente dasselbe System einen guten Übereinstimmungswert für das Bewerten von Aufsätzen und erzeugte im selben Einsatz Feedback, das mitten im Satz abbrach und unlesbar war. Die Bewertung funktionierte. Das Feedback nicht. Nichts in der Schlagzeilenzahl sagte das.

Diese Seite handelt davon, den Unterschied zu erkennen, und setzt keine Vorkenntnisse in Messtheorie voraus.

## Was die üblichen Punktzahlen tatsächlich messen

Zwei Arten von Zahlen dominieren diese Literatur, und beide messen **Ähnlichkeit statt Korrektheit**.

- **Ähnlichkeitswerte** (Sie werden sie ROUGE und BLEU genannt sehen) vergleichen die Formulierung der Antwort des Modells mit der Formulierung einer Referenzantwort. Ein Modell, das etwas dem erwarteten Text Nahes schreibt, punktet gut –, selbst wenn seine Argumentation falsch ist, und selbst wenn ein Student die richtige Antwort über einen Weg erreichen könnte, der nichts lehrt.
- **Übereinstimmungswerte** (Sie werden QWK sehen, oder quadratisch gewichtetes Kappa) messen, wie eng die Noten des Modells mit denen eines Menschen übereinstimmen. Ein Modell kann mit der bewertenden Person bei der Endnote übereinstimmen und gleichzeitig falsch liegen bei *warum*, dem Teil, aus dem ein Student lernt.

Ein Student kann eine falsche Antwort über einen falschen Weg erreichen, der wie ein richtiger aussieht, und kein Ähnlichkeitswert wird es bemerken. Wenn Ihnen die Argumentation am Herzen liegt, brauchen Sie etwas, das die Argumentation liest – eine von einer Person angewandte Rubrik oder eine für diesen spezifischen Schritt geschriebene Prüfung.

Der Assistent des Kurses Lineare Regelungssysteme ist ein gutes Beispiel für ein Team, das das ehrlich berichtet. Seine beste Konfiguration erreichte einen Ähnlichkeitswert von **0.4093** gegen Referenzantworten, mit der Verbesserung zuverlässig über Null gemessen, und die Autoren halten offen fest, dass ihre Zahlen Formulierung und Format messen ([[lora-finetuned-control-systems-course-qa-2026]]).

## Ein System kann einen Test bestehen und den nächsten scheitern

Das ist die brauchbarste Lektion in der Wissensbasis, weil es die ist, die Menschen hereinlegt.

Im WrAFT-Projekt erreichte ein feinabgestimmtes Modell einen Übereinstimmungswert von **0.84** mit menschlichen Bewertenden über 360 Held-out-TOEFL-Aufsätze. Das ist ein starkes Ergebnis für *Bewertung*. Das Modell desselben Projekts, trainiert um *Feedback zu schreiben*, erzeugte Ausgaben, die abgeschnitten und unparsebar waren –, während einfach ein anderes Modell zu prompten das Feedback erzeugte, das Lehrkräfte bevorzugten ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Bewerten Sie also jede Ausgabe, die Ihr System erzeugt, einzeln. Ein guter Wert beim Bewertungsmodul sagt Ihnen nichts über das Feedbackmodul daneben.

## Prüfen Sie, ob Ihr automatischer Prüfer mit Menschen übereinstimmt

Viele Teams nutzen nun eine zweite KI, um die erste zu prüfen. Das ist vernünftig, aber die zweite KI ist nicht automatisch richtig.

Eine Studie, in der ein Frontier-Modell Hinweise für ein [[intelligent-tutoring|Intelligent Tutoring System]] verfasste, fand, dass etwa **35%** davon zu allgemein, falsch waren oder die Antwort verrieten –, und dass die eigenen automatischen Qualitätsprüfungen des Modells mit dem menschlichen Urteil darüber uneins waren, welche davon schlecht waren ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Praktische Version: nehmen Sie eine Stichprobe von etwa fünfzig Ausgaben, lassen Sie eine Person sie bewerten, und vergleichen Sie das mit den Bewertungen Ihres automatischen Prüfers. Wenn die beiden uneins sind, ist Ihre automatische Zahl kein Beleg.

## Verwandle eine Punktzahl in eine Regel, nach der Sie handeln können

Eine Korrelation sagt Ihnen, dass das Modell meist richtig liegt. Sie sagt Ihnen nicht, was in den Fällen zu tun ist, in denen es das nicht tut. Das Konfidenz-Routing-Ergebnis ist hier die klarste Vorlage, und sie ist einfach genug zum Kopieren.

Konfidenz erwies sich als verlässliches Warnsignal: wenn das Modell unsicher war, war es mit höherer Wahrscheinlichkeit falsch (**β = −0.602, p < .001**). Also schickte das Team die am wenigsten konfidenten **20%** der Antworten an einen Menschen. Jene einzelne Regel erhöhte die Übereinstimmung mit menschlichen Noten von **0.78 auf 0.82** und schnitt manuelle Bewertungsarbeit um etwa **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Beachten Sie, was der Bericht enthält: einen Schwellenwert, einen Menschen und eine Ersparnis. „Übereinstimmung 0.84" enthält nichts davon, weshalb es schwer ist, danach zu handeln.

## Messen Sie, wenn Sie können, die Sache selbst

Der sauberste Fix ist, das Modell auf dieselbe Größe zu trainieren, die Sie messen wollen. Ein feinabgestimmtes Modell wurde trainiert, die statistischen Eigenschaften von Testfragen zu reproduzieren – die Zahlen, die beschreiben, wie schwer jede Frage ist und wie gut sie stärkere von schwächeren Studierenden trennt –, und es lernte jene Muster, statt ihnen gesagt zu werden ([[multimodal-item-parameter-estimation-2026]]). Das Ziel war eine Eigenschaft des Assessments selbst, also konnte die Evaluation über jene Eigenschaft sein statt über Formulierung.

Berichten Sie auch die Progression, nicht nur den Endpunkt. SWIMs Schreibsimulator veröffentlichte den Wert jeder Stufe nebeneinander – Rubrik-basiertes Prompting **0.577**, Feinabstimmung **0.474 ± 0.023**, Reinforcement Learning **0.618 ± 0.005** ([[swim-student-writing-simulation-2026]]) –, was eine Leserin oder einen Leser sehen lässt, ob das Training irgendetwas getan hat. Eine einzelne Endzahl kann ihnen das nicht sagen.

## Testen Sie Sicherheit über ein ganzes Gespräch, nicht eine Antwort

Die meiste Sicherheitstestung prüft einen einzelnen Austausch. Die Schäden, die beim Tutoring zählen, akkumulieren. SafeTutors fand, dass selbst Modelle, die spezifisch für Lehren gebaut wurden, über ein langes Gespräch degradieren und Antworten offenlegen können, die sie zurückhalten sollten ([[hazra-safetutors-pedagogical-safety-2026]]).

Führen Sie die Sicherheitsprüfung über vollständige Gespräche, und schließen Sie die Turns ein, in denen der Student falsch liegt, weiterdrängt oder versucht, das Modell aus seiner Rolle zu reden.

## Wenn Sie mit falschen Studierenden testen, prüfen Sie zuerst die falschen Studierenden

Simulierte Studierende zu generieren statt echte zu rekrutieren macht Evaluation weit billiger. Aber ein simulierter Student ist ein Messinstrument, und es kann auf die Weisen falsch liegen, die jedes Instrument kann.

Der direkteste Test davon in der Wissensbasis benchmarkte simulierte und gepromptete Studierende gegen **382 Held-out-Dialoge** aus der größten öffentlichen Sammlung echter Student-Tutor-Mathematikdialoge, mit sieben Maßen über Sprache, Verhalten und Denken ([[simulated-students-tutoring-dialogues-2026]]). Andere Arbeit drückt von verschiedenen Richtungen auf Realismus: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] trainiert Modelle, sowohl zu *handeln* als auch zu *denken* wie Studierende, und geschichtsbewusste Profile konditionieren die Simulation auf die Vergangenheit eines Studenten statt auf eine feste Persona ([[history-aware-student-simulation]]).

Wenn Ihre Testumgebung ein simulierter Student ist, prüfen Sie den Simulator, bevor Sie dem vertrauen, was er über Ihren Tutor sagt.

## Vergleichen Sie gegen etwas außerhalb Ihres eigenen Projekts

Wenn Sie keine eigene Baseline haben, sagt Ihnen ein externer Benchmark, ob Ihre Zahl etwas taugt. Auf dem CDPK-Pädagogik-Benchmark erreichte EduQwen **96.52%** gegen Gemini-3 Pros **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]). Der Pedagogy Benchmark, gebaut aus echten Prüfungen zur professionellen Entwicklung von Lehrkräften und **97 Modelle** abdeckend, fand Genauigkeit von **28% bis 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

Jene Spanne ist der Punkt: bei einer Aufgabe über Lehren reichten Modelle von schlecht bis gut. Lesen Sie Benchmark-Ergebnisse als eine Spanne, in der Sie sitzen, nicht als Urteil.

## Eine Checkliste vor dem Release

**1.** Schreiben Sie in einem Satz auf, worauf es Ihnen tatsächlich ankommt, und wählen Sie ein Maß, das *das* erfasst statt Ähnlichkeit.

**2.** Holen Sie sich zuerst eine Baseline, einschließlich einer einfachen. Das Modell des Kursassistenten ohne Grounding punktete unter einer reinen Stichwortsuche.

**3.** Prüfen Sie jede Ausgabe, die Ihr System erzeugt, separat.

**4.** Lassen Sie eine Person eine Stichprobe bewerten und vergleichen Sie sie mit Ihrem automatischen Prüfer.

**5.** Verwandeln Sie Genauigkeit in eine Regel: einen Schwellenwert, einen Menschen und eine Ersparnis.

**6.** Testen Sie Sicherheit über ganze Gespräche.

**7.** Prüfen Sie jeden simulierten Studenten, bevor Sie ihm vertrauen.

**8.** Behalten Sie die Fehler. Abgeschnittenes Feedback und antwortenverratende Hinweise sind die Befunde, nicht das Rauschen.

## Verbundene Fragen

- [[making-ai-better-at-supporting-learning|Wie können wir KI darin besser machen, Lernen in unserem eigenen Fach zu unterstützen?]]
- [[training-ai-tutors-to-guide-rather-than-answer|Wie trainieren wir einen KI-Tutor, Studierende anzuleiten statt ihnen zu antworten?]]
- [[evaluating-ai-interventions-methods|Welche Maße und Forschungsmethoden kann eine Lehrkraft nutzen, um KI-bezogene Interventionen zu evaluieren?]] — die lehrkraftseitige Version dieser Frage
- [[reporting-interpreting-aied-research|Was sind Best Practices für das Berichten und Deuten von Forschung zu KI in der Bildung?]] — die forschungsseitige Version
- [[llm-training-and-fine-tuning]] — die vollständige Konzeptseite
