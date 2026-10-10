---
title: Informatisches Denken
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
translation_of: concepts/computational-thinking
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Computational thinking** — ein Problemlöseansatz, der Dekomposition, Mustererkennung, Abstraktion und algorithmisches Design umfasst. In der KI-Bildung ist computational thinking sowohl eine Vorbedingung für das Verstehen von KI-Systemen als auch eine Fähigkeit, die KI-Werkzeuge beim Entwickeln unterstützen können.

## Fragen zum Nachdenken

- Wenn Sie ein Problem lösen, indem Sie es in Teile zerlegen, Muster erkennen, das Wesentliche abstrahieren und Schritte entwerfen – betreiben Sie bereits computational thinking, sogar ohne Computer. Wo haben Sie das kürzlich getan?
- Eine verbreitete Annahme ist, dass computational thinking dasselbe sei wie Programmieren oder „Computer Literacy". Wie könnten sie sich unterscheiden, und warum könnte dieser Unterschied dafür bedeutsam sein, wie Sie es unterrichten?
- Die Forschung legt nahe, dass die Defizite der Studierenden in grundlegenden Konzepten – nicht das KI-Werkzeug selbst – es sind, die ihre Fähigkeit begrenzen, KI-Vorschläge zu beurteilen. Was muss eine lernende Person bereits verstehen, bevor sie die Ausgabe einer KI kritisch bewerten kann?
- Einige argumentieren, computational thinking solle Lernende von passivem Konsumieren von KI-Ausgaben hin zu Bauen, Kritisieren und Gestalten mit KI bewegen. Wie würde ein Klassenraum aussehen, der Studierende als Produzierende statt als Konsumierende behandelt?
- Generative KI kann heute das Wachstum im computational thinking von Studierenden bewerten – doch sowohl Menschen als auch KI tun sich mit dem schwierigsten Konstrukt, Systemdenken, schwer. Wo sollte Ihrer Ansicht nach die Automatisierung des Assessments enden, und warum?
- Robotikforschung findet, dass computational thinking sich nur entwickelt, wenn Konzepte explizit gemacht und auf das Curriculum abgebildet werden, statt sie als isolierte Technikübungen zu behandeln. Was ist das Risiko, „Tech-Skills" zu unterrichten, ohne das darunterliegende Denken zu benennen?

## Einführung

### Computational thinking im Klassenraum der KI-Ära

Die verbundenen Artikel der Wissensbasis laufen auf eine zentrale Behauptung zu: Computational Thinking (CT) ist das konzeptuelle Fundament, das Studierende brauchen, um sich kritisch mit KI auseinanderzusetzen, und es ist zugleich die Fähigkeit, die gut gestaltetes KI-gestütztes Lernen am direktesten vertieft. Unten ist die Evidenz in vier Themen gegliedert, die in den verlinkten Artikeln gründen.

- **CT als Grundlage von KI-Kompetenz und kritischer Auseinandersetzung.** Mehrere Studien zeigen, dass CT es Lernenden ermöglicht, KI-Ausgaben zu bewerten, statt sie nur zu konsumieren. [[chat-debugging-human-ai-collaboration-circuits|Forschung zum Chat-Debugging]] fand, dass bei Studierenden, die mit LLM-Hilfe analoge Schaltkreise debuggten, ihre *Defizite in grundlegenden Konzepten und kritischem Denken* – nicht das Werkzeug – der begrenzende Faktor waren, da den Studierenden die Kernideen fehlten, die nötig sind, um KI-Vorschläge zu beurteilen. [[llm-intervention-design-cs-review|Ein Review von LLM-Interventionsdesigns]] schlussfolgert ebenfalls, dass die Hinwendung des [[cs-education|Informatikunterrichts]] zu computational thinking gegenüber der Beherrschung von Syntax das ist, was wirksame Interventionen von „Werkzeugfrustration" unterscheidet. In der frühen Kindheit baut [[ai-play-framework-early-childhood-2026|das AI-Play-Framework]] unplugged, spielbasiert [[ai-literacy|KI-Kompetenz]] auf, indem es Kindern beibringt, dass „KI ein aus Teilen gebautes System ist" und „KI aus Beispielen lernt" – eine entwicklungspsychologisch fundierte erste Schicht von CT. Und [[academic-league-of-ai-2026|eine KI-Akademische Liga]] verbindet CT über [[project-based-learning|projektbasiertes Lernen]] mit realen bürgerschaftlichen KI-Projekten und bettet [[ai-literacy|KI-Kompetenz]] in die Praxis ein. Zusammen legen diese Studien nahe, dass CT der transferierbare kognitive Kern der KI-Kompetenz ist.
- **Bildungsrobotik als Vehikel für CT.** Robotik ist der am besten untersuchte Kontext für die Entwicklung von CT über [[k-12|K-12]] und [[stem-education|STEM-Bildung]] hinweg. [[computational-thinking-educational-robotics-secondary-2026|Forschung in der Sekundarstufe]] argumentiert, dass Bildungsrobotik Problemlösen und kritisches Denken nur dann verbessert, wenn CT-Konzepte explizit gemacht und auf das [[stem-education|STEAM]]-Curriculum abgebildet werden, statt sie als isolierte technische Übungen zu behandeln. Ein [[game-based-gamified-robotics-education-review-2026|systematischer Review von 95 Studien]] bestätigt, dass Robotik CT, Kreativität und Problemlösen fördert und dass [[game-based-learning|spielbasiertes Lernen]] zu informellen Settings passt, während Gamification formale Klassenräume dominiert und projektbasiertes Lernen unterstützt. [[microbit-robotics-machine-learning-teacher-training-2026|Evidenz aus der Lehrkräftebildung]] zeigt, dass eine integrierte Intervention mit Micro:bit + Roboter + maschinellem Lernen signifikante Zuwächse im CT-Wissen (d = 0.638) in der ersten Phase der Lehrkräftebildung erzielte, und argumentiert, Robotik solle eingebettet werden, damit künftige Lehrkräfte CT unterrichten können. LLMs können die Hürde weiter senken: [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] koppelt ein LLM mit Robotersimulation, damit Anfängerinnen und Anfänger Roboter über natürliche Sprache steuern und so CT-eingebettete Robotik ohne Programmierung auf unterer Ebene zugänglich wird.
- **KI als „fähigerere Peerin" kann CT in unterausgestatteten Robotikkursen tragen.** Ein 14-wöchiges Quasi-Experiment mit 103 Erstsemesterstudierenden in Nigeria fand, dass KI-gestütztes problembasiertes Lernen (ChatGPT und Teachable Machine innerhalb der Zone der proximalen Entwicklung) konventionellen Unterricht im Posttest zu computational thinking und Roboterprogrammierung übertraf, ohne Geschlechtermoderation ([[ai-pbl-computational-thinking-2026|KI-PBL-Robotikstudie (2026)]]).
- **LLMs als Werkzeuge für CT-Assessment und -Entwicklung.** [[generative-ai|Generative KI]] bietet skalierbare Wege, CT zu messen und zu stützen. [[llm-computational-thinking-physics-2026|Forschung zum CT-Assessment in Physik]] zeigte, dass LLMs menschliche Raterinnen und Rater beim Bewerten von Wachstum in Data Practices und Computational Problem-Solving Practices in [[physics-education|Physikkursen]] mit großer Teilnehmendenzahl spiegeln können – während sowohl Menschen als auch das LLM sich mit dem komplexeren Konstrukt Systemdenken schwertaten, was eine klare Grenze für Automatisierung markiert. [[visual-query-tracer-declarative-logic-learning|Visuelles Query Tracing]] zeigt, wie Visualisierung abstrakte Berechnung stützen kann und Intuition aufbaut, die CT-Entwicklung unterstützt. [[student-misconceptions-conditionals-loops-taxonomy|Eine Taxonomie von Missverständnissen über Bedingungen und Schleifen]] bietet feinkörnige Ziele für [[scaffolding|Scaffolding]] und für automatisierte Missverständnisdetektion und verbindet sich mit [[misconceptions|Missverständnissen]]. Diese Werkzeuge wirken jedoch am besten, wenn pädagogisches Design führt: [[llm-intervention-design-cs-review|der Informatik-Review]] fand, dass semesterlange „Virtual Tutor"-Designs mit scaffoldedem Feedback CT konsistent verbesserten, während unstrukturierter Werkzeugzugang Frustration erhöhte.

Dauerhafte Kompetenzen verschieben sich, sobald die Implementierung automatisiert ist: ein Workshop-Bericht benennt Abstraktion, computational thinking und ein „verification spectrum" als die zu lehrenden Fähigkeiten und verweist auf eine Studie mit nahezu 1,000 Studierenden, in der uneingeschränkter GPT-4-Zugang die Übungsleistung um 48% erhöhte, aber die Prüfungspunktzahlen um 17% senkte, sobald KI abgezogen wurde ([[reshaping-cs-education-genai|Lee et al. (2026)]]).

- **CT über K-12, Lehrkräftebildung und Neugestaltung des Assessments hinweg.** CT spannt das gesamte Spektrum von [[k-12|K-12]] bis [[higher-ed|Hochschulbildung]] auf und gestaltet das Assessment neu. Am frühen Kindheitsende erweitert AI-Play CT und KI-Kompetenz auf Lernende von Pre-K bis K2 und nicht-technische Familien; am universitären Ende fand die [[genai-oop-programming-assessments-2026|OOP-Assessment-Studie]], dass GenAI-Systeme von 2026 die durchschnittliche Studierendenleistung in authentischen Programmierprüfungen übertreffen, aber an Schnittstellen, abstrakten Klassen und Vererbung weiterhin scheitern – wiederkehrende konzeptuelle Lücken, die genau markieren, wo CT schwer zu automatisieren bleibt. [[solving-vs-evaluating-genai-solutions|Eine randomisierte A/B-Crossover-Studie]] zeigte, dass Aufgaben zum Bewerten und Kritisieren vergleichbare Ergebnisse erzeugen wie Generierung, was nahelegt, dass CT durch das Beurteilen fehlerhafter KI-Lösungen geübt werden kann, wenngleich Zuwächse bewusstes Scaffolding erfordern. Dem allem zugrunde liegt die Lehrkraft: die Micro:bit-Studie verbindet CT-Unterricht direkt mit [[teacher-education|Lehrkräftebildung]], und [[hashmi-socratic-physics-chatbot-2025|Sokratische Chatbot-Forschung]] verbindet die präzise Problemformulierung, die CT verlangt, mit messbarer Kursleistung.
- **Ein validiertes Instrument lokalisiert, wo CT am schwierigsten ist.** Ein 34-Item-Test zu computational thinking, gebaut mit Evidence-Centered Design und validiert per Item-Response-Theorie über 461 Studierende im KI-Programmieren hinweg, konzentrierte Schwierigkeit auf Datenrepräsentation, Sequenzierung logischer Operatoren und Schleifenstrukturen statt gleichmäßig über das Syllabus ([[zhang-ct-ai-training-test-2026|Zhang & Zhang (2026)]]).

### CT und der Wandel von KI-Konsumierenden hin zu Produzierenden, Schaffenden und Gestaltenden

Ein zentrales Ziel für CT in der KI-Ära ist, Studierende und Lehrende über *passiven Konsum* von KI-Ausgaben hinaus hin zu *Erschaffen, Bauen und Gestalten* mit und für KI zu bewegen – eine Agenda, die CT mit konstruktivistischem Lernen (Lernen durch Machen) in Einklang bringt. Die verbundenen Artikel der Wissensbasis machen diese Wendung hin zu Produzierenden, Schaffenden und Gestaltenden zunehmend explizit. [[ai-writes-code-student-writes-model-2026|Forschung zur Modellautorschaft]] rahmt Lernen durch Konstruktion mit GenAI als messbaren Prozess der „Modellautorschaft" neu – Studierende verfassen, debuggen und iterieren KI-Modelle, statt nur KI-generierten Code oder Antworten zu konsumieren. [[code-to-learn-genai-artifact-construction-2026|Das CtL-GenAI-Framework]] operationalisiert dies als Konstruktionismus für das GenAI-Zeitalter und behandelt Artefakte, die Studierende mit KI bauen, als Motor der CT-Entwicklung. [[computational-thinking-ai-agent-creation|CT durch das Erschaffen von KI-Agenten]] zeigt, dass das Gestalten, nicht bloße Nutzen, von KI-Agenten Dekomposition, Abstraktion und algorithmisches Schlussfolgern direkt einübt.

Die neue meta-analytische Evidenz schärft dieses Bild. [[astor-computational-thinking-meta-review-2026|Ein Meta-Review von 128 CT-Systematischen Reviews]] findet, dass das Feld auf einer einheitlichen Definition von CT als Schlussfolgern mit abstrakten Modellen konvergiert, die rechnerische Schritte und Algorithmen nutzen, um Probleme zu lösen – genau die Art von Modellbau- (statt Antwortenkonsum-)Denken, die produktionsorientiertes Lernen verlangt. [[tsingidou-ct-robotics-kindergarten-2026|Forschung zu CT und Robotik im Kindergarten]] zeigt, dass selbst Lernende in der frühen Kindheit durch spielbasiertes Bauen mit Robotern Produzierende werden, mit problembasiertem Lernen, Storytelling und Scaffolding – ein entwicklungsbezogener erster Schritt hin dazu, Technologie als etwas zu sehen, das man konstruiert, nicht nur bedient. Und [[solving-vs-evaluating-genai-solutions|Forschung zu Bewertung und Kritik]] zeigt, dass CT durch das Beurteilen und Debuggen fehlerhafter KI-Lösungen geübt werden kann – eine produzierende Haltung gegenüber KI-Ausgabe, die der Falle des passiven Konsums widersteht.

Die praktische Konsequenz ist, dass CT-Unterricht so gestaltet werden sollte, dass Lernende *Dinge mit KI machen* – Modelle verfassen, Agenten bauen, Artefakte konstruieren und KI-Ausgabe kritisieren –, statt fertige Lösungen zu erhalten. Das vertieft sowohl CT als auch baut [[ai-literacy|KI-Kompetenz]] als partizipatorische und kreative statt bloß konzeptuelle auf. Lehrkräfte brauchen wiederum Unterstützung, um von der Nutzung von KI-Werkzeugen zum Gestalten KI-erweiterter Lernaktivitäten überzugehen (siehe [[teacher-role]] und [[professional-training|berufliche Weiterbildung]]).

### Praktische Anleitung

Für Lehrende ist die konsistente Botschaft, dass CT durch *explizites, gescaffoldetes, beobachtbares* Engagement entwickelt wird statt durch passiven KI-Einsatz. Paaren Sie Robotik mit expliziter Abbildung von CT-Konzepten auf das Curriculum; nutzen Sie LLMs für [[simulation|Simulation]], Steuerung in natürlicher Sprache und skalierbares Assessment von CT-Wachstum, während Sie menschliches Urteil für Konstrukte wie Systemdenken reservieren; und gestalten Sie Assessments neu, um Bewertung und Diagnose von KI-Ausgabe gegenüber roher Generierung zu betonen. Was auch immer das Setting ist – unpluggedes Spiel in der frühen Kindheit, Roboter in der [[stem-education|Sekundarstufe]] in STEM oder Virtual Tutors in der [[higher-ed|Hochschulbildung]] – strukturieren Sie die Aktivität so, dass Studierende über Dekomposition, Muster, Abstraktion und Algorithmus schlussfolgern müssen, statt fertige Lösungen zu erhalten.

### Verbindungen zu verwandten Konzepten

Computational Thinking ist das geteilte kognitive Fundament unter [[ai-literacy|KI-Kompetenz]] und [[critical-thinking|kritischem Denken]], der curriculare Kern von [[cs-education|Informatikunterricht]] und Rechnen in der [[k-12|K-12]] und das konzeptuelle Ziel, dem [[educational-robotics|Bildungsrobotik]], [[game-based-learning|spielbasiertes Lernen]] und [[project-based-learning|projektbasiertes Lernen]] am besten dienen sollten. Es wird durch [[llm|große Sprachmodelle]] und [[generative-ai|generative KI]] vertieft, wenn diese als Scaffolding-Werkzeuge genutzt werden, und es ist die Fähigkeit, die Taxonomien von Studierendenmissverständnissen und CT-bewusste Assessments zu messen anstreben. Lehrkräfte entwickeln es durch [[teacher-education|Lehrkräftebildung]] und [[professional-training|berufliche Weiterbildung]], und es transferiert über Domänen hinweg, einschließlich [[physics-education|Physikunterricht]] und [[stem-education|STEM]] insgesamt.

- **Computational Thinking prognostiziert Lernen mit KI-Assistenten.** [[computational-thinking-aica-2026|Achtklässlerinnen und Achtklässler]] mit hohem computational thinking übertrafen Peers mit niedrigem CT in einem Kurs mit KI-Coding-Assistenten signifikant, wobei sie den Assistenten für Verständnis statt für Antwortabruf nutzten.
## Verbundene Konzepte

- [[cs-education]]
- [[stem-education]]
- [[ai-literacy]]
- [[k-12]]
- [[prompt-engineering]]
- [[adaptive-learning]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[project-based-learning]]
- [[physics-education]]
- [[scaffolding]]
- [[critical-thinking]]
- [[teacher-education]]
- [[simulation]]
- [[socratic-method]]
- [[misconceptions]]
- [[agentic-ai]]

## Verbundene Artikel

- [[ai-pbl-computational-thinking-2026]]
- [[computational-thinking-ai-agent-creation]]
- [[reshaping-cs-education-genai]]
- [[prompt-problems-nl-programming-mistakes]]
- [[llm-computational-thinking-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[visual-query-tracer-declarative-logic-learning]]
- [[llm-intervention-design-cs-review]]
- [[academic-league-of-ai-2026]]
- [[ai-play-framework-early-childhood-2026]]
- [[edusim-llm-robotic-simulation-education-2026]]
- [[computational-thinking-educational-robotics-secondary-2026]]
- [[microbit-robotics-machine-learning-teacher-training-2026]]
- [[chat-debugging-human-ai-collaboration-circuits]]
- [[student-misconceptions-conditionals-loops-taxonomy]]
- [[genai-oop-programming-assessments-2026]]
- [[game-based-gamified-robotics-education-review-2026]]
- [[solving-vs-evaluating-genai-solutions]]
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[computational-thinking-aica-2026]] — Computational Thinking Levels and AI Coding Assistants (2026)
- [[ai-writes-code-student-writes-model-2026]] — Model authorship: theory & measurement for learning-by-construction with GenAI
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: constructionism framework for artifact construction
- [[astor-computational-thinking-meta-review-2026]] — CT meta-review of 128 systematic reviews
- [[tsingidou-ct-robotics-kindergarten-2026]] — Systematic review of CT via robotics in kindergarten
