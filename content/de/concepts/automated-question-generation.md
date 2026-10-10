---
connected_resources: [teacherserver]
title: Automatische Aufgabengenerierung
created: "2026-05-08T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Automatische Aufgabengenerierung (AQG)** — der Einsatz von KI, besonders NLP und [[llm|Large Language Models (LLMs)]], um [[assessment|Prüfungsaufgaben]] für Bildungszwecke (Multiple-Choice, Kurzantwort, Lückentext, Programmierung und Leistungsaufgaben) automatisch aus Quellmaterial oder Lernzielen zu erzeugen. AQG ermöglicht Prüfung in großem Maßstab — [[formative-assessment|formative]] Quizze, adaptive Übungen und Übungsaufgaben zu produzieren —, doch die Qualität variiert dramatisch über Aufgabentypen hinweg und erfordert Validierung, um halluzinierte oder schlecht kalibrierte Aufgaben zu vermeiden. Sie ist eine Kernkomponente von [[automated-assessment]] und ein zentraler Befähiger von [[adaptive-learning]] und [[personalized-learning]].

## Fragen zum Nachdenken

- Automatische Aufgabengenerierung erzeugt Prüfungsaufgaben aus Quellmaterial in großem Maßstab —, doch diese Seite warnt, dass die Qualität über Aufgabentypen hinweg dramatisch variiert. Welchen Aufgabentyp würde die KI vor dem Lesen Ihrer Vermutung nach am zuverlässigsten erzeugen: Multiple-Choice, Kurzantwort oder Code — und warum?
- Die zentrale Herausforderung ist Qualitätskontrolle: LLMs können sachlich falsche Aufgaben erzeugen. Eine Pipeline reduzierte Halluzination um 62%, indem sie eine Generate-then-Validate-Refine-Schleife hinzufügte. Warum, denken Sie, würde die Aufforderung an die KI, ihre eigenen Aufgaben zu validieren, diese sinnvoll verbessern, statt bloß ihre eigene Ausgabe abzunicken?
- [[research-methods-aied|Forschung]] zeigt, dass generierte Aufgaben unter Umständen zu Denken niedriger Ordnung (Erinnern) tendieren, sofern sie nicht ausdrücklich für Ergebnisse höherer Ordnung entworfen werden. Wenn Sie KI zum Aufbau von Übungsaufgaben nutzten, wie würden Sie wissen, ob diese echtes Verständnis oder bloß Auswendiglernen trainierten?
- Schwierigkeitskalibrierung ist entscheidend: KI-Schwierigkeitsschätzungen korrelieren stark mit der Studierendenleistung, doch die Seite warnt vor Missbrauch bei hochrelevanten Prüfungen. Wann wäre eine Aufgabe, die die KI für „richtig schwierig“ hält, dennoch die falsche Frage für eine bestimmte lernende Person?
- [[accessibility|Barrierefreiheit]]-bewusste Generierung baut Aufgaben, die auf gehörlose und schwerhörige Lernende zugeschnitten sind, verfeinert in Partnerschaft mit der Zielgemeinschaft. Was legt dieses Beispiel nahe darüber, warum Aufgabengenerierung nicht als rein technisches oder rein inhaltsbezogenes Problem behandelt werden kann?

## Einleitung

Automatische Aufgabengenerierung ist relevant, weil Prüfungsaufgaben von Hand teuer zu erstellen sind, und KI sie schnell und in großem Maßstab produzieren kann. Die Forschung der Wissensdatenbank zeigt jedoch, dass generierte Aufgaben auf Korrektheit, Relevanz und Schwierigkeit validiert werden müssen, und dass verschiedene Aufgabentypen (MCQ, Kurzantwort, Code) darin variieren, wie zuverlässig sie erzeugt werden können. AQG liegt daher an der Schnittstelle von [[generative-ai|generativer KI]], [[educational-nlp|Bildungs-NLP]] und [[educational-measurement]].

## Ansätze der Aufgabengenerierung

Die Forschung der Wissensdatenbank veranschaulicht mehrere Ansätze:

- **Generate-then-Validate-Pipelines:** [[generate-then-validate-question-gen|Generate-Then-Validate]] führt eine Generierung → Validierung → Verfeinerung-Schleife ein, die LLM-Halluzination um 62% gegenüber direkter Generierung reduziert und 89% Genauigkeit auf [[stem-education|STEM]]-Datensätzen sowie 23% Verbesserung bei Relevanz erreicht. Der Validierungsschritt filtert ungültige oder geringwertige Aufgaben heraus, und fehlgeschlagene Aufgaben lösen Neugenerierung mit korrigierenden Prompts aus.
- **Wissensspurbasierte Generierung:** [[kt4eqg-personalized-question-generation|KT4EQG]] erzeugt personalisierte Übungsaufgaben, geleitet von [[knowledge-tracing|Knowledge Tracing]], und schneidet Aufgaben auf den Wissensstand jeder lernenden Person zu, statt generische Aufgaben zu erzeugen.
- **Fehlvorstellungsgebundene Distraktoren als diagnostische Markierungen:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] bindet jeden Distraktor an eine einzelne gewonnene Fehlvorstellung und markiert genau eine korrekte Option, sodass eine Aufgabe mit eingebauten diagnostischen Zielen erzeugt und dann deterministisch ohne [[llm|LLM]]-Aufruf bewertet werden kann — etwa 7.6 Sekunden und rund \\$0.005 pro Runde im Live-Einsatz der Autoren, gegenüber etwa 32 Sekunden und \\$0.015 für eine LLM-bewertete Kurzantwortrunde. Die Bindung ist nur so gut wie die Fehlvorstellungsmarkierungen hinter ihr, da gewonnene [[misconceptions]] die Ziel-Fehlvorstellungen nur bei F1 ≈ 0.56 trafen, und ihre Aufgabenauswahl 0.72 der Zeit eine tatsächlich schwache Fähigkeit bediente.
- **Kognitive-Tiefe-bewusste Generierung:** [[llm-educational-question-cognitive-depth|Evaluierung der kognitiven Tiefe von LLM-generierten Aufgaben]] untersucht, ob generierte Aufgaben [[critical-thinking|höherordentliches Denken]] (Erschaffen, Bewerten) oder bloß Auswendiglernen anzapfen, und schließt an Blooms Taxonomie und [[educational-measurement]] an.
- **Fehlereinbettende Fallprobleme für wiederholte Prüfung:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]] erzeugten neue hierarchische diagnostische Argumentationsprobleme (HDR) — kurze Fälle mit absichtlich eingebetteten Fehlern, die Studierende finden und erklären müssen —, und fanden, dass von GPT-4o verfasste Aufgaben mit menschlich verfassten bei interner Konsistenz übereinstimmten (Cronbach's α = 0.78 für beide) und bei Schwierigkeit, wobei Fishers exakte Tests keine signifikante Differenz in der Punkteverteilung über 100 Teilnehmende fanden. Das Format paart eine [[critical-thinking|höherordentliche Denk]]anforderung mit einer eingeschränkten Antwort, sodass Antworten konvergieren und Bewertung reproduzierbar wird. Die generative Motivation ist Aufgabenwiederverwendung: Eine Fallwiederverwendung lädt zu Gedächtnis und Antwortwiederverwendung ein, während strukturell äquivalente, aber kontextuell verschiedene generierte Fälle Aufgabenbias bei der Neumessung unterdrücken.
- **[[pedagogy|Pädagogische]] Pipelines:** [[slidesqaqa-pedagogical-question-generation|Q&A-Generierung aus Präsentationsdecks]] nutzt eine mehrstufige Pipeline für pädagogisch fundierte Aufgabengenerierung aus Kursmaterialien.
- **Barrierefreiheitsbewusste Generierung:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]] entwerfen ein LLM-gestütztes Aufgabengenerierungssystem für [[inclusive-learning|gehörlose und schwerhörige Lernende]], das visuelle und emotionale Fragenstrategien einführt, die Momente visueller oder emotionaler Schwierigkeit in Videos adressieren, und Fragen iterativ mit der Zielgemeinschaft verfeinert, um sprachliche Zugänglichkeit sicherzustellen.
- **RAG-basierte Human-in-the-Loop-Systeme:** [[code-gen|CODE-GEN]] kombiniert [[rag|Retrieval-Augmented Generation]] mit [[human-in-the-loop-ai|Human-in-the-Loop]]-Prüfung zur Erzeugung von [[automated-assessment|Multiple-Choice-Prüfungen]].
- **[[benchmark|Benchmarks]] und Evaluation:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] bietet einen Benchmark wissenschaftlicher/mathematischer Rätsel zur Evaluation von Aufgabengenerierungs- und Argumentationssystemen.

## Validierung und Qualität

Die zentrale Herausforderung in AQG ist **Qualitätskontrolle**:
- **Bewerten Sie den Lösungsprozess, nicht den Stamm:** [[proiqa-math-item-quality-assessment-2026|ProIQA]] argumentiert, die Qualitätsprüfung von Aufgaben solle dem folgen, was Expertinnen und Experten tun — die Lösung simulieren —, und baut pro Aufgabe einen LLM-generierten Argumentationsbaum, der auf mathematische Korrektheit bei 90.38–97.80% verifiziert ist, und kodiert dann seine Abhängigkeitsstruktur mit einem graphbasierten [[machine-learning|neuronalen Netz]] neben einer Nur-Stamm-Sicht. Es berichtet durchschnittliche Zugewinne gegenüber der zweitbesten Methode von 7.5% in der Konzeptbewertung, 6.3% in der Schwierigkeitsschätzung und 19.5% in der Kompetenzbewertung, und seine Fehleranalyse benennt einen beachtenswerten Fehlermodus: Ein logisch korrekter, aber strukturell flacher Argumentationsbaum lässt eine schwere Aufgabe leicht erscheinen.
- **Halluzinationsrisiko:** LLMs können sachlich falsche Aufgaben erzeugen. [[generate-then-validate-question-gen|Generate-Then-Validate]] zeigt, dass eine dedizierte Validierungsphase dies stark reduziert, und [[hallucination-risk|Halluzinationsrisiko]] ist durchgehend ein anerkanntes Anliegen.
- **Schwierigkeitskalibrierung:** Generierte Aufgaben müssen auf angemessene Schwierigkeit kalibriert werden. [[llm-difficulty-calibration-programming-exams-2026|Schwierigkeitskalibrierungsforschung]] zeigt, dass KI-Schwierigkeitsschätzungen stark mit der Studierendenleistung korrelieren (z. B. rho ≈ −0.87), was bessere Aufgabenauswahl ermöglicht —, während sie vor [[ai-misuse-learning-harm|Missbrauch]] bei hochrelevanten Prüfungen warnt. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] erweitern dies auf K-5-Mathematik- und Leseaufgaben (N = 5170), kalibriert unter dem Rasch-IRT-Modell: GPT-4os Zero-Shot-Schwierigkeitsbewertungen korrelierten mäßig bis stark mit den wahren Schwierigkeiten (r = 0.83 Mathematik, r = 0.81 Lesen), variierten aber nach Jahrgangsstufe, während ein merkmalsbasierter Ansatz — von LLMs extrahierte kognitive und sprachliche Merkmale, in baumbasierte Modelle eingespeist — Korrelationen bis r = 0.87 erreichte. Die strukturierte Merkmalsextraktion der Studie (z. B. Syntaxkomplexität, [[cognitive-offloading|kognitive Last]], Distraktoren-Tücke) und ihr praktischer siebenstufiger Workflow bieten eine Vorlage zur Kalibrierung generierter Aufgaben, während ihre Restriktionsbefunde für frühe Jahrgangsstufen und Generalisierbarkeits-Vorbehalte vor hochrelevantem Einsatz warnen.
- **Generierte Schwierigkeitsmarkierungen können ein Konstruktvaliditäts-Versagen sein, kein Kalibrierungsfehler.** Über 378 generierte Aufgaben folgten die Easy/Medium/Hard-Markierungen des Modells der mit ihnen mitgenerierten Bloom-Stufe (ρ=0.90) und der Oberflächenform — mittlere Stammlänge steigend von 15.9 über 22.1 auf 30.2 Wörter —, korrelierten aber mit der empirischen Aufgabenschwierigkeit nur bei ρ=0.06 über 7.888 Antworten von 54 Studierenden, das Argument, generierte Metadaten gegen Antwortdaten zu kalibrieren statt mitgenerierten Markierungen zu vertrauen ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Großskalige psychometrische Feldvalidierung:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] validiert eine iterativ verfeinernde AQG-Pipeline (generate→judge→revise, im Self-Refine-Stil) in 91 echten Hochschulkursen (~1.686 Studierende). Bayesianische hierarchische 2PL-[[item-response-theory|IRT]]-Analyse zeigt, dass KI-generierte Aufgaben mit von Expertinnen und Experten geschriebenen standardisierten Prüfungsaufgaben mithalten — etwas leichter (β̄ = −0.45 gegenüber 0.35), aber etwas trennschärfer (ᾱ = 1.3 gegenüber 1.2), mit höherer Spitzen-Testinformation (Reliabilität 0.79 gegenüber 0.72) —, was zeigt, dass AQG kurszugeschnittene, psychometrisch fundierte Prüfungen in großem Maßstab produzieren kann.
- Durchschnittliche psychometrische Parität kann Aufgabenniveau-Defizite maskieren: Ein Scoping-Review von 153 Berichten aus der medizinischen Bildung fand, dass KI-Aufgabengenerierung manchmal mit menschlicher Schwierigkeit und Trennschärfe übereinstimmte, doch in einem Physiologie-Vergleich erfüllten nur 9 von 40 ChatGPT-Aufgaben alle idealen Kriterien gegenüber 19 von 40 Fakultätsaufgaben ([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **Erkennbarkeit in einer echten Prüfung, und was Prüfung tatsächlich entfernt:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] setzten 30 KI-generierte und 30 MCQ der nationalen Lizenzprüfung in eine bewertete tabletbasierte Prüfung, die 119 [[medical-education|Medizinstudierende]] im fünften Jahr ablegten, wobei die KI-Aufgaben aus den eigenen Kursmaterialien von ChatGPT-4o und Gemini 1.5 Pro über ein Expertenpanel entworfen wurden, das 82% von ihnen akzeptierte und 18.2% als unbrauchbar ausschied. Die Quellenzuschreibung der Studierenden unterschied sich nicht zwischen den beiden Aufgabenarten, und Aufgabenschwierigkeit, Distraktorenverteilung und wahrgenommene Curriculum-Ausrichtung waren statistisch nicht unterscheidbar —, ein *Erkennungs*ergebnis statt eines Qualitätsergebnisses, und der Grund, weshalb die Autoren den Nutzen des Workflows als Verschiebung des Aufwands der Lehrenden vom Entwerfen zum Prüfen beschreiben statt als dessen Beseitigung. Ein explorativer Unterschied überlebte: Gemini-Aufgaben waren schwerer als die Aufgaben der Lizenzprüfung (p = 0.028), während ChatGPT-Aufgaben es nicht waren (p = 0.984).
- **Aufgabenabhängigkeit:** Die Generierungszuverlässigkeit variiert nach Aufgabentyp. [[cong-confidence-asag-2026|Kurzantwortbewertung]] und [[self-referential-l2-writing-llm-assessment|analytische Schreibbewertung]] zeigen, dass offene Antwort- und Schreibaufgaben schwerer zuverlässig zu erzeugen und zu bewerten sind als strukturierte Aufgaben.
- **Kognitive Qualität:** [[llm-educational-question-cognitive-depth|Kognitive-Tiefe-Evaluation]] zeigt, dass generierte Aufgaben unter Denken niedriger Ordnung tendieren können, sofern sie nicht ausdrücklich für Ergebnisse höherer Ordnung entworfen werden.

- **Automatische Markierung der kognitiven Stufe überträgt sich nicht auf generierte Aufgaben.** Ein Bloom-Taxonomie-Klassifikator, trainiert auf einer kuratierten Aufgabenbank, brach auf KI-generierten Aufgaben zusammen — Makro-F1 von 0.88 in der Verteilung auf 0.48 und 0.20 außerhalb —, weil generierte Aufgaben weit mehr Wörter haben (18.2 gegenüber 9.3) und nur einen Median von 10.5% ihrer Bloom-Trigger-Verben mit dem kuratierten Korpus teilen, gegenüber 35.1% für eine nähere Menge; Neutraining auf markierten Out-of-Distribution-Daten war der größte Einzelzuwachs, bei einer Schwelle von etwa N > 1.000 markierte Stichproben ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

## Rolle in adaptivem und personalisiertem Lernen

AQG ist ein zentraler Befähiger [[adaptive-learning|adaptiven]] und [[personalized-learning|personalisierten]] Lernens: Sie produziert die großen Aufgabenbanken, aus denen adaptive Tutoren schöpfen, und — kombiniert mit [[knowledge-tracing|Knowledge Tracing]] oder [[student-modeling|Studierendenmodellierung]] — kann Aufgaben zuschneiden, die auf die Wissensstände einzelner Lernender zugeschnitten sind ([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|Interessenbasierte Personalisierung]] zeigt, dass AQG Aufgaben auch an Studierendeninteressen anpassen kann, nicht nur an Schwierigkeit.

## Implikationen für KI in der Bildung

- **Generieren, dann validieren:** Paaren Sie Generierung immer mit einem Validierungs-/Verfeinerungsstadium, um Halluzination zu kontrollieren und Relevanz sicherzustellen.
- **Aufgabentyp an Zuverlässigkeit anpassen:** Nutzen Sie AQG für strukturierte Aufgabentypen (MCQ, Lückentext, Code), wo sie am zuverlässigsten ist, und wenden Sie sorgfältige Validierung auf offene Antwort- und Schreibaufgaben an.
- **Für kognitive Tiefe entwerfen:** Prompts und Pipelines sollten höherordentliches Denken adressieren, nicht bloß Erinnern, um echtes Lernen zu stützen.
- **Schwierigkeit kalibrieren:** Nutzen Sie KI-Schwierigkeitsschätzungen, um angemessen herausfordernde Aufgaben auszuwählen, mit starker Validierung vor hochrelevantem Einsatz.
- **Über Lernendenmodelle personalisieren:** Kombinieren Sie AQG mit Knowledge Tracing und Interessenmodellen, um adaptive, individualisierte Aufgaben zu erzeugen.

## Verbundene Konzepte

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Verbundene Artikel
- [[genai-medical-education-transformation-review-2026]] — Scoping review of 153 medical-education reports on AI item generation versus faculty item quality

- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale field validation of AI-generated exam quality via IRT
- [[generate-then-validate-question-gen]] — Generate-Then-Validate question generation
- [[kt4eqg-personalized-question-generation]] — Personalized question generation via knowledge tracing
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[llm-educational-question-cognitive-depth]] — Cognitive depth of LLM-generated questions
- [[slidesqaqa-pedagogical-question-generation]] — Slide-deck Q&A pedagogical question generation
- [[code-gen]] — CODE-GEN: RAG-based human-in-the-loop question generation
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles benchmark
- [[taklif-ai-interest-based-personalized-assignments]] — Interest-based personalized assignments
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-based difficulty calibration
- [[self-referential-l2-writing-llm-assessment]] — Self-referential analytic writing assessment
- [[cross-dataset-bloom-question-classification]] — Cross-dataset Bloom question classification
- [[llm-chatbots-cs-multiple-choice]] — LLM chatbots and CS multiple-choice items
- [[socratic-tests-conversational-assessment]] — Socratic tests: conversational assessment
- [[llm-turing-test-italian-legal-exams-2026]] — LLM Turing test in legal exams
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[automated-constructive-assessment-hdr-llm-2026]] — Automating Constructive Assessment with Large Language Models: Toward Scalable and Repeated Evaluation of Practical Competence
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Students could not tell AI-generated MCQs from licensing-exam items in a graded exam, and 18.2% of generated items were eliminated in review (Vogt et al. 2026)
