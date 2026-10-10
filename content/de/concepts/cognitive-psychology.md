---
title: Kognitionspsychologie
created: "2026-08-27T10:52:12-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
translation_of: concepts/cognitive-psychology
source_updated: "2026-09-26T01:51:49-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Kognitionspsychologie / Kognitivismus** — die Familie von Theorien, die Lernen durch interne mentale Prozesse erklärt — Aufmerksamkeit, Wahrnehmung, Gedächtnis, Schlussfolgern und Metakognition — statt allein durch beobachtbares Verhalten. In [[ai-education|KI in der Bildung]] gründen kognitivistische Annahmen hinter den charakteristischsten Beiträgen des Feldes: [[intelligent-tutoring|intelligente Tutorensysteme]], die Wissen der Lernenden modellieren, [[knowledge-tracing]] und [[cognitive-diagnosis]], die verfolgen, was eine lernende Person weiß, auf Fehlerdiagnose gegründete [[feedback|Feedback]]-Designs und die gesamte Familie der [[student-modeling|Lernendenmodellierung und adaptiven Instruktion]]. Kognitivismus ist der Mittelweg zwischen [[behaviorism|Behaviorismus]] (Lernen als Verhaltensänderung) und [[constructivist|Konstruktivismus]] (Lernen als aktive Sinnstiftung), und er ist die theoretische Linse, die am engsten mit der Computermetapher des Geistes verknüpft ist, die die frühe AIED bewegte.

## Fragen zum Nachdenken

- Wenn Sie an „Lernen“ denken, stellen Sie sich dann eine Veränderung dessen vor, was jemand tut, oder eine Veränderung dessen, was jemand weiß und abrufen kann? Wie könnte diese Unterscheidung verändern, wie Sie beurteilen, ob ein KI-Tutoring-Werkzeug tatsächlich funktioniert?
- KI-Tutoring baut auf einer „Computermetapher“ auf — der Behandlung des Geistes als informationsverarbeitendes System mit Gedächtnisgrenzen. Wo fühlt sich diese Metapher mächtig an, und wo könnte sie etwas Wichtiges daran verfehlen, wie Menschen lernen?
- Ein KI-Werkzeug lässt eine Aufgabe mühelos erscheinen: Es erklärt den nächsten Schritt, reduziert Reibung, und die lernende Person leistet damit blendend. Zählt das als erfolgreiches [[teacher-role|Lehren]]? Wie würden Sie wissen, ob die lernende Person es nun ohne das Werkzeug kann?
- Die Cognitive Load Theory unterscheidet intrinsische, extrinsische und germane kognitive Last. Wenn Sie einen KI-Assistenten entwerfen müssten, welche Art von Last würden Sie bewusst zu reduzieren versuchen, und welche wären Sie vorsichtig, NICHT zu entfernen?
- Wenn eine lernende Person weiß, dass sie Gedächtnis und Schlussfolgern an eine KI auslagern kann, wann ist das eine kluge Strategie und wann eine Abkürzung, die Lernen leise verhindert? Was bestimmt den Unterschied?
- Kognitivismus nimmt an, dass Wissen in Komponenten zerlegt und über die Zeit verfolgt werden kann. Was könnte verloren gehen, wenn wir das Verständnis einer lernenden Person auf eine Menge verfolgbarer Wissenskomponenten reduzieren?

## Einführung

Kognitionspsychologie ist die Lerntheorietradition, die Lernen als Veränderung interner mentaler Repräsentationen behandelt — Konzepte, Schemata und Prozeduren im Gedächtnis — statt als Veränderung beobachtbaren Verhaltens. Ihr Vokabular der Informationsverarbeitung (Aufmerksamkeit, Enkodierung, Abruf, begrenztes Arbeitsgedächtnis) lieferte sowohl die diagnostische Sprache für Lernschwierigkeiten als auch die Architektur hinter [[intelligent-tutoring]] und [[knowledge-tracing]]: Systemen, die den internen Zustand einer lernenden Person erschließen und sich anpassen. Sie bleibt der Bezugsrahmen für [[metacognition|Metakognition]], [[desirable-difficulties|wünschenswerte Schwierigkeiten]] und [[self-regulated-learning|selbstreguliertes Lernen]] in dieser Wissensbasis.

## Kernideen

- **Lernen ist eine Veränderung interner mentaler Repräsentationen.** Kognitivismus vertritt, dass Lernen den Erwerb, die Speicherung und die Reorganisation von Wissen im Gedächtnis umfasst — Konzepte, Schemata und Prozeduren — statt nur eine Veränderung der beobachtbaren Reaktion. Was eine lernende Person *weiß und abrufen kann*, zählt, nicht nur, was sie tut.
- **Die Informationsverarbeitungs-(Computer-)Metapher.** Der Geist wird als informationsverarbeitendes System mit Kapazitäten und Engpässen behandelt — [[item-response-theory|Messung]] latenter Fähigkeit, Arbeitsgedächtnisgrenzen, Enkodierung und Abruf —, was genau das Modell ist, das KI-Tutoring (ein Computerprogramm, das die Kognition der Lernenden modelliert und sich anpasst) zur natürlichen Passung machte.
- **Aufmerksamkeit und Gedächtnis sind begrenzt.** Das Arbeitsgedächtnis hat begrenzte Kapazität; dauerhaftes Lernen erfordert Enkodierung in das Langzeitgedächtnis durch Wiederholung, Elaboration und [[retrieval-spacing-interleaving|Abrufübung]]. Das verbindet Kognitivismus mit [[research-methods-aied|Forschung]] zu [[cognitive-offloading|kognitiver Auslagerung]] (Delegation von Gedächtnis/Verarbeitung an externe Werkzeuge) und zur „Leistungs-Lernen-Lücke“, wenn KI Abruf und Übung umgeht.
- **Metakognition reguliert Kognition.** [[metacognition|Metakognition]] — das Überwachen und Kontrollieren des eigenen Denkens — ist ein ausgeprägt kognitivistisches Konstrukt, und es erklärt, warum die Kalibrierung der Lernenden darüber, wann sie sich auf KI verlassen, für das Lernen zählt (siehe [[cognitive-offloading]] und [[self-regulated-learning]]).
- **Wissen ist zerlegbar und verfolgbar.** Kognitivistische AIED nimmt an, dass Wissen der Lernenden als Komponenten repräsentiert und über die Zeit verfolgt werden kann — die Grundlage von [[knowledge-tracing|Knowledge Tracing]], [[cognitive-diagnosis|kognitiver Diagnose]] und [[item-response-theory|Item-Response-Theorie]].

## Kognitivismus und KI in der Bildung

### Die kognitivistische Herkunft der AIED

Kognitivismus ist wohl die Theorie, die am meisten dafür verantwortlich ist, dass es KI in der Bildung überhaupt gibt. Die frühen kognitiven Tutoren (z. B. Andersons ACT-R-basierte Tutoren) [[embodied-learning|verkörperten]] die Annahme, dass Lernen als Produktionsregeln modelliert werden könnte und dass ein System verfolgen könnte, welche Regeln eine lernende Person beherrscht. Das produzierte die kanonische Architektur, die das Feld noch definiert: ein Domänenmodell, ein [[student-modeling|Lernendenmodell]], das den Wissensstand der lernenden Person verfolgt, und ein [[pedagogy|pädagogisches]] Modell, das Instruktion anpasst — alle kognitivistischen Ursprungs. Modernes [[knowledge-tracing|Knowledge Tracing]] (Bayesianisch, Deep-Learning und IRT-basiert) und [[cognitive-diagnosis|kognitive Diagnose]] setzen diese Tradition fort. Dieselbe Annahme untermauert [[intelligent-tutoring|intelligentes Tutoring]], [[adaptive-learning|adaptives Lernen]] und [[personalized-learning|personalisiertes Lernen]], die in der Wissensbasis unter dem Dach [[student-modeling|Lernendenmodellierung und adaptive Instruktion]] gebündelt sind.

### Kognitive Last und die Gestaltung von Instruktion

Die Cognitive Load Theory (CLT) ist das am weitesten angewandte kognitivistische Rahmenwerk im [[learning-design|Instruktionsdesign]]: Sie unterscheidet intrinsische Last (Aufgabenkomplexität), extrinsische Last (Darstellungsreibung) und germane Last (schemabildende Anstrengung). Gut gestaltete KI sollte extrinsische Last reduzieren und germane Verarbeitung bewahren; schlecht integrierte KI reduziert alle drei und lässt vollendete Aufgaben mit leerem Lernen zurück. Die Arbeitsgedächtnisrahmung der CLT ist auch zentral für die Debatten über [[cognitive-offloading|kognitive Auslagerung]] — ob KI schädliche extrinsische Last reduziert oder die germane Verarbeitung kurzschließt, die Lernen erzeugt.

Mayers Cognitive Theory of Multimedia Learning (CTML) wendet dieselben Arbeitsgedächtnisannahmen auf die Materialien selbst an, und ihre Empfehlungen sind ungewöhnlich konkret: Lernende profitieren stärker von Wörtern und Bildern zusammen als von Wörtern allein, wenn irrelevantes Material ausgeschlossen wird, wenn eine Lektion segmentiert und im Tempo der Nutzenden dargeboten wird statt als eine durchgehende Einheit, wenn korrespondierende Wörter und Bilder nahe beieinander und gleichzeitig erscheinen, und wenn Erzählung konversationell und in einer freundlichen menschlichen Stimme erfolgt statt förmlich oder maschinell erzeugt.

### Kognitivismus vs. Behaviorismus und Konstruktivismus

- **vs. [[behaviorism|Behaviorismus]]:** Behaviorismus erklärt Lernen als beobachtbare Verhaltensänderung durch Verstärkung und Drill; Kognitivismus beharrt auf internen Repräsentationen und verfolgt mentale Zustände. KI-Praxis zeigt oft eine Lücke von „Konstruktivismus dem Namen nach, Behaviorismus in der Praxis“, aber kognitivistische Designs (Lernendenmodellierung, Knowledge Tracing) unterscheiden sich von rein behavioristischem Drill-und-Feedback, weil sie das *erschlossene Wissen der lernenden Person repräsentieren und sich anpassen*, statt bloß Reaktionen zu verstärken.
- **vs. [[constructivist|Konstruktivismus]]:** Konstruktivismus vertritt, dass [[learners|Lernende]] Bedeutung aktiv durch Erfahrung konstruieren; Kognitivismus betont akkurate Enkodierung von (oft vorstrukturiertem) Wissen und Können. Die kognitivistische Herkunft der AIED (strukturierte Domänen, explizite Wissenskomponenten) wird von Konstruktivistinnen und Konstruktivisten manchmal als zu behavioristisch oder zu transmissionsorientiert kritisiert, während Kognitivismus erwidert, dass Repräsentation und Verfolgung von Wissen das ist, was genuin adaptive Instruktion ermöglicht.
- **vs. den [[learning-sciences|Lernwissenschaften]]:** Kognitivismus liefert die Mechanismen, mit denen dieses Feld gestaltet — Arbeitsgedächtnis, Enkodierung, Abruf, zerlegbare Wissenskomponenten —, ist aber selbst nicht designorientiert. Es erklärt, wie Lernen passiert; die Lernwissenschaften fragen, wie man Umgebungen baut, in denen es passiert, und halten diese Designs einem empirischen Test.

### Die KI-Zeitalter-Spannung: die Grenze des Kognitivismus steht unter Druck

[[generative-ai|Generative KI]] erweitert und hinterfragt den Kognitivismus zugleich. Sie erweitert ihn, indem sie Wissensrepräsentationen mächtiger macht (LLMs als Wissensmaschinen, die über [[knowledge-tracing]] verfolgt und über [[student-modeling|Lernendenmodellierung]] angepasst werden können). Sie hinterfragt ihn, indem sie verkompliziert, *wo* Kognition „ist“: wenn KI Schlussfolgern, Gedächtnis und sogar metakognitionähnliche Funktionen ausführt, wird die kognitivistische Annahme erschüttert, dass Lernen interne Verarbeitung im individuellen Geist ist — wie [[distributed-cognition|verteilte Kognition]], [[ai-cognitive-partner-co-regulation-learning|Ko-Regulation]] und posthumanistische Rahmungen argumentieren, dass Kognition über menschliche und künstliche Systeme verteilt sein kann. Dennoch bleibt die kognitivistische Frage die zentrale des Feldes: *internalisiert die lernende Person das Wissen, oder hält es das Werkzeug?* Das ist die Frage der kognitiven Auslagerung und der Leistungs-Lernen-Lücke in ihrer reinsten Form.

## Folgerungen für Design und Forschung

1. **Auf Internalisierung gestalten, nicht nur auf Leistung.** Kognitivistische AIED sollte danach evaluiert werden, ob die lernende Person Wissen *ohne* das Werkzeug abrufen und anwenden kann — nicht auf assistierter Leistung. Das ist die [[ai-misuse-learning-harm|Leistungs-Lernen-Lücke]] und die Begründung für die Messung unassistierten [[transfer-of-learning|Transfers]].
2. **Die lernende Person repräsentieren, nicht nur antworten.** Strukturierte [[student-modeling|Lernendenmodellierung]] und [[knowledge-tracing|Knowledge Tracing]] an den KI-Dialog anbinden, damit sich das System an erschlossenes Wissen anpasst, statt flüssig, aber blind zu antworten.([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **Arbeitsgedächtnisgrenzen respektieren.** Cognitive Load Theory auf die KI-UX anwenden: extrinsische Last reduzieren (Reibung, überladene Interfaces) und germane Verarbeitung bewahren ([[desirable-difficulties|produktives Ringen]], Abrufübung), statt jede kognitive Anforderung zu minimieren.
4. **Metakognition kalibrieren.** Weil [[metacognition|Metakognition]] bestimmt, wann Lernende sich zur Auslagerung entscheiden, ist das Lehren von Kalibrierung (zu wissen, was man tatsächlich allein kann) eine kognitivistische Antwort auf Überabhängigkeit (siehe [[cognitive-offloading]]).

## Verbundene Konzepte

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — die Befunde zur Behaltensleistung, auf denen diese Praxisfamilie beruht

## Verbundene Artikel

- [[cognitive-shift-ai-education]] — Der kognitive Wandel in der KI-Bildung
- [[cogtax-cognitive-taxonomy]] — Eine kognitive Taxonomie für KI-Nutzung
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Pädagogische LLM-Agenten, gegründet in Knowledge Tracing
- [[nie-personavlm-long-term-personalization-2026]] — LLM-Lernendenmodellierung und Gedächtnis
- [[ai-cognitive-partner-co-regulation-learning]] — KI als kognitiver Partner im ko-regulierten Lernen
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: Denken als Mensch-KI-Interaktion
