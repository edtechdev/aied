---
title: Technologien
created: "2026-08-19T18:10:00-04:00"
updated: "2026-11-19T03:30:00-05:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
translation_of: concepts/ai-technologies
source_updated: "2026-11-16T05:33:47-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
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

- **Große Sprachmodelle (LLMs).** Das rechnerische Rückgrat der meisten modernen [[ai-education|AIED]]-Systeme — [[llm|LLMs]] erzeugen menschenähnlichen Text für Tutoring, Leistungsbeurteilung und Inhaltsgenerierung und sind die am häufigsten referenzierte Technologie des Feldes. [[llm-training-and-fine-tuning|Training und Fine-Tuning]] passt allgemeine LLMs für den Einsatz in der Bildung an.
- **Generative KI.** Die umfassendere Kategorie von Systemen, die Text, Code, Bilder und andere Inhalte erzeugen — [[generative-ai|generative KI]] (vor allem angetrieben von LLMs) ist die Technologie hinter der aktuellen Welle der [[ai-education|AIED]]-Forschung. Siehe auch [[multimodal|multimodale Modelle]] (Text, Bild, Audio) und [[simulation|Simulation]].
- **Roboter und [[embodied-learning|verkörperte]] Systeme.** [[educational-robotics|Roboter in der Bildung]] bringen eine verkörperte und häufig [[community-of-inquiry|soziale Präsenz]] ein — programmierbare Kits für [[computational-thinking|Computational Thinking]] sowie humanoide und soziale Roboter für Tutoring, [[storytelling-in-education|Storytelling]] und Rollenspiele. Robotik ist ein eigenständiger technischer Strang, der sich mit [[agentic-ai|agentischer KI]] und [[human-in-the-loop-ai|Human-in-the-Loop]]-Design überschneidet.
- **Wissensbasierte Systeme.** [[knowledge-graph|Wissensgraphen]] und [[educational-nlp|bildungsbezogenes NLP]] repräsentieren und verarbeiten Fachwissen, zunehmend in Kombination mit LLMs für fundiertes, erklärbares Tutoring.

Eine funktionsbasierte Taxonomie trägt weiter in die Lehrkräftefortbildung als eine Liste von Modellarchitekturen. [[jaksic-engaging-high-school-teachers-ai-2025|Jaksic, Ansaf und Massey (2025)]] organisierten einen eintägigen Workshop für neun Lehrkräfte weiterführender Schulen entlang von sechs Familien der KI-Anwendung — Klassifikation, Erkennung, Speicher, Entscheidungsfindung, Optimierung und Vorhersage —, die jeweils mit einer Anwendung verknüpft wurden, die die Lehrkräfte bereits nutzten, von der Spam-Filterung bis zum Kredit-Scoring. Die Lehrkräfte kamen in der Frage gespalten, ob KI eine Bedrohung sei: 40% bejahten dies, 40% waren unentschieden, und jede teilnehmende Person berichtete, etwas Neues gelernt zu haben. Die ordnende Einheit ist das, was das System tut — etwas, das eine Lehrkraft in einem Unterrichtswerkzeug wiedererkennen kann, ohne zu wissen, wie es trainiert wurde.

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
- **Verantwortungsvoller Einsatz:** technische Verfahren sind zentral für [[reducing-ai-misuse|die Reduktion von KI-Missbrauch]] — [[rag|RAG]]-Verankerung, [[guardrails|Leitplanken]], [[prompt-engineering|Prompt Engineering]]-[[scaffolding|Scaffolding]] und [[human-in-the-loop-ai|menschliche Aufsicht]] prägen, ob KI Lernen stützt oder untergräbt ([[cognitive-offloading|kognitive Entlastung]], [[hallucination-risk|Halluzinationsrisiko]]).

**Die Forschungsaufmerksamkeit konzentriert sich auf einen schmalen Ausschnitt des Werkzeug-Ökosystems.** Bei der Zuordnung von 85 KI-Werkzeugen zur MINT- und Ingenieurliteratur fanden [[beyond-chatgpt-stem-ai-tool-mapping-2026|Terkowsky et al. (2026)]] nur 36 überhaupt forschungssichtbar und [[conversational-ai|konversationelle KI]]/LLMs für 73,7 % von 927 Paper-Werkzeug-Verbindungen verantwortlich, mit 23 Publikationen in einem etablierten Laborkontext.

## Folgerungen für KI in der Bildung

- **Technische Kompetenz stützt kritische Nutzung:** die zugrunde liegenden Modelle und Verfahren zu verstehen hilft Lehrenden und Lernenden, KI gut zu nutzen und kritisch zu bewerten (siehe [[ai-literacy|KI-Kompetenz]]).
- **Technologie nach pädagogischer Absicht wählen:** das KI-System und das Verfahren sollten der [[pedagogy|Lehrstrategie]] folgen, nicht umgekehrt.
- **Die technische Ebene bewerten:** [[ai-ed-evaluation|Evaluation von KI in der Bildung]] und [[benchmark|Benchmark]]-Forschung bewerten KI-Systeme an Verlässlichkeit, Pädagogik und [[equity-in-ai-education|Gerechtigkeit]], nicht nur an herausgestellter Genauigkeit.
- **Roboter und Agenten sind Teil des Stacks:** [[educational-robotics|verkörperte]] und [[agentic-ai|agentische]] Systeme erweitern das technische Repertoire über Text hinaus — und bringen eigene Gestaltungs- und Sicherheitserwägungen mit.

## Verbreitete Fehlvorstellungen

**„Das Modell ist die ganze Geschichte."** Verfahren wie Retrieval-Augmented Generation und Prompt Engineering existieren genau dafür, die Ausgabe eines LLM zu steuern und zu verankern, und die Architektur um das Modell herum entscheidet oft, ob es in einem Klassenzimmer nutzbar ist. Zwei Systeme auf demselben Modell können sich in ihrer Zuverlässigkeit vollständig unterscheiden, weil es das unterscheidet, was sie umgibt.

**„Die technische Reife des Felds ist etabliert."** Die Kartierung ist dünn, wo es zählt: über **474 Studien** hinweg dominierten GPT-Modelle und LangChain, während **gesteuerte Werkzeug-Orchestrierung, persistenter Speicher und langfristige Planung weitgehend fehlten**, und nur **138 von 474 (29 %)** schöpften aus Bildungstheorie. Der verwendete Stack ist weit schmaler als der Stack, den das Feld braucht.

**„Technische Entscheidungen sind Sache der Technologinnen und Technologen, nicht der Bildungspraxis."** Die Rahmung dieser Seite ist, dass Sie eine ausgezeichnete Lehrkraft sein können, ohne ein LLM bauen zu können, und dass Ihre technischen Entscheidungen dennoch formen, was KI in Ihrem Klassenzimmer kann und nicht kann. Ob ein System seine Antworten im Kursmaterial verankert, ist eine Entscheidung mit pädagogischen Folgen, die jemand treffen muss.

**„Ein fähigeres Modell wird die Lücken des Felds schließen."** Orchestrierung, Speicher und langfristige Planung sind architektonische statt Fähigkeitsprobleme — das dokumentierte Fehlen betrifft Systeme, die ihren Werkzeuggebrauch über Zeit selbst steuern, was ein besseres Modell nicht von allein liefert.

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

- [[beyond-chatgpt-stem-ai-tool-mapping-2026]] — Forschungssichtbarkeit von 85 KI-Tools in der MINT- und ingenieurwissenschaftlichen Lehre (Terkowsky et al. 2026)

- [[agentic-ai-education-scoping-review]] — Scoping Review zu agentischer KI im Bildungsbereich
- [[genai-meta-analysis-programming-learning]] — Metaanalyse zur Wirkung von GenAI auf Produktivität und Lernen beim Programmieren
- [[cstutorbench-slm-tutors]] — Tutoring-Benchmarks für kleine Sprachmodelle
- [[educational-llm-alignment]] — Alignment von LLMs für den Bildungsbereich
- [[eduguard-safe-rag-llm-tutor]] — Guardrails für RAG-basierte LLM-Tutoren
- [[hazra-safetutors-pedagogical-safety-2026]] — Sicherheit und Schädigungspotenziale von KI-Tutoren
- [[elbench-education-llm-benchmark-2026]] — LLM-Benchmark für den Bildungsbereich
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Generativer sozialer Roboter Teachy Mini
- [[benzion-ai-physics-simulations-virtual-lab]] — LLM-generierte Physiksimulationen für den Unterricht

- [[jaksic-engaging-high-school-teachers-ai-2025]] — Einbindung von Lehrkräften weiterführender Schulen in Konzepte, Anwendungen und Entwicklungen der Künstlichen Intelligenz
