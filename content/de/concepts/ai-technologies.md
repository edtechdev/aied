---
title: Technologien
created: "2026-08-19T18:10:00-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
translation_of: concepts/ai-technologies
source_updated: "2026-10-02T07:32:07-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Technologien** — die Modelle, Architekturen und Verfahren, die KI-Bildungssysteme antreiben, und das Überblickskonzept für die Abdeckung der technischen Ebene in der Wissensbasis. Wo [[pedagogy|Pädagogik]] und [[learning-theories|Lerntheorien]] betreffen, *wie Lehren und Lernen geschehen*, und [[ai-ed-evaluation|Evaluation von KI in der Bildung]] betrifft, *ob KI wirkt*, verankert diese Seite den *technischen* Strang: die KI-Systeme ([[llm|große Sprachmodelle]], [[generative-ai|generative KI]], [[multimodal|multimodale Modelle]], [[educational-robotics|Roboter]]) und die Verfahren, die genutzt werden, sie zu bauen, zu steuern und einzusetzen ([[prompt-engineering|Prompt Engineering]], [[rag|Retrieval-Augmented Generation]], [[reinforcement-learning|bestärkendes Lernen]], [[educational-nlp|NLP in der Bildung]], [[knowledge-graph|Wissensgraphen]], [[agentic-ai|agentische Orchestrierung]]).

## Fragen zum Nachdenken

- Sie können hervorragend unterrichten, ohne ein LLM bauen zu können — diese Seite argumentiert jedoch, dass Ihre technischen Entscheidungen weiterhin prägen, was KI in Ihrem Klassenzimmer kann und nicht kann. Auf welche Weise könnte die zugrunde liegende Technologie eines KI-Werkzeugs unmerklich verändern, wie Ihre Studierenden lernen, auch wenn Sie den Code nie sehen?
- Eine verbreitete Annahme ist, dass das Modell die ganze Geschichte sei — doch Verfahren wie Retrieval-Augmented Generation (RAG) und Prompt Engineering existieren genau dafür, die Ausgaben von LLMs zu steuern und zu verankern. Was, denken Sie, geschieht tatsächlich im Hintergrund, wenn Sie eine KI bitten, „genauer zu sein“ oder „diese Quelle zu nutzen“?
- RAG wird als Kernverfahren zur Reduktion von Halluzination und zur Verbesserung von Sicherheit beschrieben. Warum, glauben Sie, wäre es für die Bildung wichtiger, relevantes Wissen abzurufen, um eine Antwort der KI zu „verankern“, als etwa für lockere Unterhaltung — und was könnte schiefgehen, wenn diese Verankerung scheitert?
- Die Seite behauptet, technische Entscheidungen verkörperten pädagogische Annahmen: Ein auf sokratischem Prompting aufbauender Tutor argumentiert mit Lernenden, während ein antwortgenerierendes Modell einfach Lösungen überreichen kann. Können Sie sich an ein KI-Werkzeug erinnern, das eine bestimmte Lehrphilosophie zu „unterstellen“ schien — und passte das zu der Art, wie Sie tatsächlich unterrichten oder lernen wollten?
- Jenseits bloßer Genauigkeit sollten KI-Systeme dieser Seite nach an Verlässlichkeit, Pädagogik und Gerechtigkeit bewertet werden. Welche Kennzahl vermuten Sie als Standard der meisten Menschen (auch vieler Lehrenden), wenn sie beurteilen, ob ein KI-Werkzeug „funktioniert“, und warum könnte diese Kennzahl mehr verbergen als offenbaren?
- Agentische KI wird beschrieben als Verschiebung der KI „von einem prompt-antwortenden Werkzeug zu einem proaktiven Mitarbeitenden“. Wie könnte ein System, das von sich aus mehrstufige Arbeitsabläufe anstößt und orchestriert, verändern, wofür Sie als Lehrende oder Lernende verantwortlich sind — und wer macht es dafür rechenschaftspflichtig?

## Einführung

[[ai-education|KI in der Bildung]] läuft auf einem bestimmten technischen Stack, und ihn zu verstehen ist für [[teacher-role|Lehrende]] und Forschende bedeutsam, auch wenn sie selbst keine Systeme bauen — weil technische Entscheidungen prägen, was KI im Klassenzimmer kann und nicht kann, welche Risiken sie birgt und wie man sie bewertet. Diese Seite ordnet die Abdeckung technischer Konzepte der Wissensbasis: die KI-Systeme, die Verfahren, die sie anpassen und steuern, und wie die technische Ebene mit Pädagogik, Assessment und Evaluation verbunden ist.

## KI-Systeme in der Bildung

- **Große Sprachmodelle (LLMs).** Das rechnerische Rückgrat der meisten modernen [[ai-education|AIED]] — [[llm|LLMs]] erzeugen menschenähnlichen Text für Tutoring, Assessment und Inhaltserstellung und sind die am häufigsten referenzierte Technologie der Wissensbasis. [[llm-training-and-fine-tuning|Training und Feinabstimmung]] passt allgemeine LLMs für den Bildungseinsatz an.
- **Generative KI.** Die breitere Kategorie von Systemen, die Text, Code, Bilder und andere Inhalte erzeugen — [[generative-ai|generative KI]] (vorrangig durch LLMs angetrieben) ist die Technologie hinter der aktuellen Welle der [[ai-education|AIED]]-Forschung. Siehe auch [[multimodal|multimodale Modelle]] (Text, Bild, Audio) und [[simulation|Simulation]].
- **Roboter und verkörperte Systeme.** [[educational-robotics|Roboter in der Bildung]] fügen eine verkörperte und oft soziale Präsenz hinzu — programmierbare Bausätze für computational thinking sowie humanoide/soziale Roboter für Tutoring, Storytelling und Rollenspiel. Robotik ist ein eigener technischer Strang, der [[agentic-ai|agentische KI]] und [[human-in-the-loop-ai|Human-in-the-Loop]]-Design überschneidet.
- **Wissensbasierte Systeme.** [[knowledge-graph|Wissensgraphen]] und [[educational-nlp|NLP in der Bildung]] repräsentieren und verarbeiten Domänenwissen, zunehmend kombiniert mit LLMs für verankertes, erklärbares Tutoring.

## Verfahren und Methoden

- **Prompt Engineering.** [[prompt-engineering|Prompt Engineering]] ist, wie Lehrende und Entwickelnde die Ausgaben von LLMs formen — der primäre Mechanismus, durch den Entlastung und Steuerung in LLM-Interaktionen vollzogen werden.
- **Retrieval-Augmented Generation (RAG).** [[rag|RAG]] verankert die Ausgaben von LLMs in abgerufenem Wissen, wodurch Halluzination sinkt und Genauigkeit steigt — ein Kernverfahren für den [[pedagogical-safety|sicheren]] Bildungseinsatz.
- **Bestärkendes Lernen.** [[reinforcement-learning|Bestärkendes Lernen]] trainiert Agenten, Verhalten über die Zeit hinweg zu optimieren, eingesetzt in [[adaptive-learning|adaptiven Systemen]] und [[game-based-learning|spielbasiertem Lernen]].
- **Agentische Orchestrierung.** [[agentic-ai|Agentische KI]]-Systeme planen und führen mehrstufige Arbeitsabläufe aus — oft unter Orchestrierung mehrerer spezialisierter Agenten (siehe [[agentic-ai|Multi-Agenten-Systeme]]) — und wandeln KI von einem prompt-antwortenden Werkzeug in einen proaktiven Mitarbeitenden um.
- **Der agentische Bildungs-Stack hinkt der Entwicklungsfront hinterher.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] kartierten 474 Studien und fanden GPT-Serien-Modelle und LangChain dominant, während gesteuerte Werkzeug-Orchestrierung, persistenter Speicher und langfristige Planung weitgehend fehlten — und nur 138 von 474 (29%) schöpften aus Bildungstheorie.
- **Modelltraining und Anpassung.** [[llm-training-and-fine-tuning|LLM-Training und Feinabstimmung]], [[educational-llm-alignment|bildungsbezogene Ausrichtung]] und [[cstutorbench-slm-tutors|Anpassung kleiner Sprachmodelle]] machen allgemeine Modelle bildungsspezifisch — wenngleich die Belege in der Wissensbasis [[rag|Retrieval]] und [[prompt-engineering|Prompting]] in der Entscheidungsreihenfolge vor das Training setzen, da ein gut verankerter Prompt günstiger ist als ein angepasstes Modell.

## Wie die technische Ebene mit dem Feld verbunden ist

Der technische Strang ist untrennbar mit den anderen Themen der Wissensbasis verbunden:

- **Pädagogik:** technische Entscheidungen verkörpern pädagogische Annahmen — ein auf [[socratic-method|sokratischem Prompting]] aufbauender [[intelligent-tutoring|Tutor]] argumentiert mit Lernenden, während ein antwortgenerierendes Modell standardmäßig direkte Bereitstellung wählen kann (siehe [[pedagogy|Pädagogiken und Lehrstrategien]]).
- **Assessment und Evaluation:** [[ai-ed-evaluation|Evaluation von KI in der Bildung]] und [[benchmark|Benchmarks]] bestimmen, ob KI-Systeme tatsächlich funktionieren; [[assessment|Assessment]] und [[automated-assessment|automatisiertes Prüfen]] nutzen den technischen Stack zum Bewerten und Generieren.
- **Verantwortungsvoller Einsatz:** technische Verfahren sind zentral für [[reducing-ai-misuse|die Reduktion von KI-Missbrauch]] — [[rag|RAG]]-Verankerung, Leitplanken, [[prompt-engineering|Prompt Engineering]]-[[scaffolding|Scaffolding]] und [[human-in-the-loop-ai|menschliche Aufsicht]] prägen, ob KI Lernen stützt oder untergräbt ([[cognitive-offloading|kognitive Entlastung]], [[hallucination-risk|Halluzinationsrisiko]]).

## Folgerungen für KI in der Bildung

- **Technische Kompetenz stützt kritische Nutzung:** die zugrunde liegenden Modelle und Verfahren zu verstehen hilft Lehrenden und Lernenden, KI gut zu nutzen und kritisch zu bewerten (siehe [[ai-literacy|KI-Kompetenz]]).
- **Technologie nach pädagogischer Absicht wählen:** das KI-System und das Verfahren sollten der [[pedagogy|Lehrstrategie]] folgen, nicht umgekehrt.
- **Die technische Ebene bewerten:** [[ai-ed-evaluation|Evaluation von KI in der Bildung]] und [[benchmark|Benchmark]]-Forschung bewerten KI-Systeme an Verlässlichkeit, Pädagogik und [[equity-in-ai-education|Gerechtigkeit]], nicht nur an herausgestellter Genauigkeit.
- **Roboter und Agenten sind Teil des Stacks:** [[educational-robotics|verkörperte]] und [[agentic-ai|agentische]] Systeme erweitern das technische Repertoire über Text hinaus — und bringen eigene Gestaltungs- und Sicherheitserwägungen mit.

## Verbundene Konzepte
- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Verbundene Artikel
- [[agentic-ai-education-scoping-review]] — Scoping review of agentic AI in education
- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI's effect on productivity and learning in programming
- [[cstutorbench-slm-tutors]] — Small language model tutoring benchmarks
- [[educational-llm-alignment]] — Aligning LLMs for education
- [[eduguard-safe-rag-llm-tutor]] — Guardrailing RAG-based LLM tutors
- [[hazra-safetutors-pedagogical-safety-2026]] — AI tutor safety and harms
- [[elbench-education-llm-benchmark-2026]] — Education LLM benchmark
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini generative social robot
- [[benzion-ai-physics-simulations-virtual-lab]] — LLM-generated physics simulations for the classroom
