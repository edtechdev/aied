---
connected_resources: [teacherserver]
title: Automatische Aufgabengenerierung
created: "2026-05-08T10:44:35-04:00"
updated: "2026-11-19T03:30:00-05:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-11-16T09:58:00-05:00"
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

> **Automatische Aufgabengenerierung (AQG)** — der Einsatz von KI, besonders NLP und [[llm|Large Language Models (LLMs)]], um [[assessment|Prüfungsaufgaben]] für Bildungszwecke (Multiple-Choice, Kurzantwort, Lückentext, Programmierung und Leistungsaufgaben) automatisch aus Quellmaterial oder Lernzielen zu erzeugen. AQG ermöglicht Prüfung in großem Maßstab — [[formative-assessment|formative]] Quizze, adaptive Übungen und Übungsaufgaben zu produzieren —, doch die Qualität variiert dramatisch über Aufgabentypen hinweg und erfordert Validierung, um halluzinierte oder schlecht kalibrierte Aufgaben zu vermeiden. Sie ist eine Kernkomponente von [[automated-assessment]] und ein zentraler Befähiger von [[adaptive-learning]] und [[personalized-learning]].

## Fragen zum Nachdenken

- Automatische Aufgabengenerierung erzeugt Prüfungsaufgaben aus Quellmaterial in großem Maßstab —, doch diese Seite warnt, dass die Qualität über Aufgabentypen hinweg dramatisch variiert. Welchen Aufgabentyp würde die KI vor dem Lesen Ihrer Vermutung nach am zuverlässigsten erzeugen: Multiple-Choice, Kurzantwort oder Code — und warum?
- Die zentrale Herausforderung ist Qualitätskontrolle: LLMs können sachlich falsche Aufgaben erzeugen. Eine Pipeline reduzierte Halluzination um 62%, indem sie eine Generate-then-Validate-Refine-Schleife hinzufügte. Warum, denken Sie, würde die Aufforderung an die KI, ihre eigenen Aufgaben zu validieren, diese sinnvoll verbessern, statt bloß ihre eigene Ausgabe abzunicken?
- [[research-methods-aied|Forschung]] zeigt, dass generierte Aufgaben unter Umständen zu Denken niedriger Ordnung (Erinnern) tendieren, sofern sie nicht ausdrücklich für Ergebnisse höherer Ordnung entworfen werden. Wenn Sie KI zum Aufbau von Übungsaufgaben nutzten, wie würden Sie wissen, ob diese echtes Verständnis oder bloß Auswendiglernen trainierten?
- Schwierigkeitskalibrierung ist entscheidend: KI-Schwierigkeitsschätzungen korrelieren stark mit der Studierendenleistung, doch die Seite warnt vor Missbrauch bei hochrelevanten Prüfungen. Wann wäre eine Aufgabe, die die KI für „richtig schwierig“ hält, dennoch die falsche Frage für eine bestimmte lernende Person?
- [[accessibility|Barrierefreiheit]]-bewusste Generierung baut Aufgaben, die auf gehörlose und schwerhörige Lernende zugeschnitten sind, verfeinert in Partnerschaft mit der Zielgemeinschaft. Was legt dieses Beispiel nahe darüber, warum Aufgabengenerierung nicht als rein technisches oder rein inhaltsbezogenes Problem behandelt werden kann?

## Einleitung

Automatisierte Fragengenerierung ist bedeutsam, weil die Erstellung von Assessment-Items von Hand kostspielig ist und KI sie schnell und in großem Maßstab erzeugen kann. Die Forschung zeigt jedoch, dass generierte Items hinsichtlich Korrektheit, Relevanz und Schwierigkeit validiert werden müssen und dass sich verschiedene Item-Typen (MCQs, Kurzantworten, Code) darin unterscheiden, wie zuverlässig sie generiert werden können. AQG liegt daher an der Schnittstelle von [[generative-ai|generativer KI]], [[educational-nlp|NLP im Bildungsbereich]] und [[educational-measurement|Bildungsmessung]].

Eine praktische Grenze: Die Ersparnis ist enger gefasst als „KI schreibt die Fragen". Bei 150 gematchten Paaren aus acht zahnmedizinischen Fakultäten sank die Finalisierung der Items von 6,0 auf 1,0 Minuten pro Item — 5,1 Minuten Ersparnis (95% CI 4,6 bis 5,7, d = 3,79) — gemessen ab einem brauchbaren Entwurf und ohne Upload, Latenz, fehlgeschlagene Generierungen und verworfene Entwürfe ([[islam-human-vs-ai-sba-dental-2026|Islam et al. (2026)]]). Der gemessene Gewinn betrifft den Überarbeitungsdurchgang, die Ersparnis über den gesamten Prozess hinweg hängt also davon ab, was außerhalb der Zeitmessung liegt.

## Ansätze der Aufgabengenerierung

Die Forschung der Wissensdatenbank veranschaulicht mehrere Ansätze:

- **Generate-then-Validate-Pipelines:** [[generate-then-validate-question-gen|Generate-Then-Validate]] führt eine Generierung → Validierung → Verfeinerung-Schleife ein, die LLM-Halluzination um 62% gegenüber direkter Generierung reduziert und 89% Genauigkeit auf [[stem-education|STEM]]-Datensätzen sowie 23% Verbesserung bei Relevanz erreicht. Der Validierungsschritt filtert ungültige oder geringwertige Aufgaben heraus, und fehlgeschlagene Aufgaben lösen Neugenerierung mit korrigierenden Prompts aus.
- **Wissensspurbasierte Generierung:** [[kt4eqg-personalized-question-generation|KT4EQG]] erzeugt personalisierte Übungsaufgaben, geleitet von [[knowledge-tracing|Knowledge Tracing]], und schneidet Aufgaben auf den Wissensstand jeder lernenden Person zu, statt generische Aufgaben zu erzeugen.
- **Fehlvorstellungsgebundene Distraktoren als diagnostische Markierungen:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] bindet jeden Distraktor an eine einzelne gewonnene Fehlvorstellung und markiert genau eine korrekte Option, sodass eine Aufgabe mit eingebauten diagnostischen Zielen erzeugt und dann deterministisch ohne [[llm|LLM]]-Aufruf bewertet werden kann — etwa 7.6 Sekunden und rund \$0.005 pro Runde im Live-Einsatz der Autoren, gegenüber etwa 32 Sekunden und \$0.015 für eine LLM-bewertete Kurzantwortrunde. Die Bindung ist nur so gut wie die Fehlvorstellungsmarkierungen hinter ihr, da gewonnene [[misconceptions]] die Ziel-Fehlvorstellungen nur bei F1 ≈ 0.56 trafen, und ihre Aufgabenauswahl 0.72 der Zeit eine tatsächlich schwache Fähigkeit bediente.
- **Kognitive-Tiefe-bewusste Generierung:** [[llm-educational-question-cognitive-depth|Evaluierung der kognitiven Tiefe von LLM-generierten Aufgaben]] untersucht, ob generierte Aufgaben [[critical-thinking|höherordentliches Denken]] (Erschaffen, Bewerten) oder bloß Auswendiglernen anzapfen, und schließt an Blooms Taxonomie und [[educational-measurement]] an.
- **Fehlereinbettende Fallprobleme für wiederholte Prüfung:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]] erzeugten neue hierarchische diagnostische Argumentationsprobleme (HDR) — kurze Fälle mit absichtlich eingebetteten Fehlern, die Studierende finden und erklären müssen —, und fanden, dass von GPT-4o verfasste Aufgaben mit menschlich verfassten bei interner Konsistenz übereinstimmten (Cronbach's α = 0.78 für beide) und bei Schwierigkeit, wobei Fishers exakte Tests keine signifikante Differenz in der Punkteverteilung über 100 Teilnehmende fanden. Das Format paart eine [[critical-thinking|höherordentliche Denk]]anforderung mit einer eingeschränkten Antwort, sodass Antworten konvergieren und Bewertung reproduzierbar wird. Die generative Motivation ist Aufgabenwiederverwendung: Eine Fallwiederverwendung lädt zu Gedächtnis und Antwortwiederverwendung ein, während strukturell äquivalente, aber kontextuell verschiedene generierte Fälle Aufgabenbias bei der Neumessung unterdrücken.
- **[[pedagogy|Pädagogische]] Pipelines:** [[slidesqaqa-pedagogical-question-generation|Q&A-Generierung aus Präsentationsdecks]] nutzt eine mehrstufige Pipeline für pädagogisch fundierte Aufgabengenerierung aus Kursmaterialien.
- **Barrierefreiheitsbewusste Generierung:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]] entwerfen ein LLM-gestütztes Aufgabengenerierungssystem für [[inclusive-learning|gehörlose und schwerhörige Lernende]], das visuelle und emotionale Fragenstrategien einführt, die Momente visueller oder emotionaler Schwierigkeit in Videos adressieren, und Fragen iterativ mit der Zielgemeinschaft verfeinert, um sprachliche Zugänglichkeit sicherzustellen.
- **RAG-basierte Human-in-the-Loop-Systeme:** [[code-gen|CODE-GEN]] kombiniert [[rag|Retrieval-Augmented Generation]] mit [[human-in-the-loop-ai|Human-in-the-Loop]]-Prüfung zur Erzeugung von [[automated-assessment|Multiple-Choice-Prüfungen]].
- **[[benchmark|Benchmarks]] und Evaluation:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] bietet einen Benchmark wissenschaftlicher/mathematischer Rätsel zur Evaluation von Aufgabengenerierungs- und Argumentationssystemen.

## Validierung und Qualität

Die zentrale Herausforderung bei AQG ist die **Qualitätskontrolle**:
- **Den Lösungsprozess bewerten, nicht den Aufgabenstamm:** [[proiqa-math-item-quality-assessment-2026|ProIQA]] argumentiert, dass die Qualitätsprüfung von Aufgaben dem Vorgehen einer Fachexpertin bzw. eines Fachexperten folgen sollte — die Lösung simulieren —, und erzeugt pro Aufgabe einen LLM-generierten Reasoning-Baum, der mit 90,38–97,80 % auf mathematische Korrektheit verifiziert wird; anschließend kodiert es dessen Abhängigkeitsstruktur mit einem [[machine-learning|neuronalen Netz]] zusammen mit einer Sicht, die nur den Aufgabenstamm berücksichtigt. Berichtet werden durchschnittliche Verbesserungen gegenüber der zweitbesten Methode von 7,5 % bei der Konzeptbewertung, 6,3 % bei der Schwierigkeitsschätzung und 19,5 % bei der Kompetenzbewertung; die Fehleranalyse benennt zudem einen Fehlermodus, den man im Blick behalten sollte: Ein logisch korrekter, aber strukturell flacher Reasoning-Baum lässt eine schwere Aufgabe leicht erscheinen.

- **Halluzinationsrisiko:** LLMs können sachlich falsche Fragen generieren. [[generate-then-validate-question-gen|Generate-Then-Validate]] zeigt, dass eine eigene Validierungsphase dies deutlich reduziert, und das [[hallucination-risk|Halluzinationsrisiko]] ist durchgängig ein anerkanntes Problem.
- **Schwierigkeitskalibrierung:** Generierte Fragen müssen auf ein angemessenes Schwierigkeitsniveau kalibriert werden. [[llm-difficulty-calibration-programming-exams-2026|Forschung zur Schwierigkeitskalibrierung]] zeigt, dass KI-Schwierigkeitsschätzungen stark mit der Leistung der Lernenden korrelieren (z. B. rho ≈ −0,87), was eine bessere Aufgabenauswahl ermöglicht — zugleich aber vor [[ai-misuse-learning-harm|Missbrauch]] in High-Stakes-Kontexten warnt. [[razavi-powers-item-difficulty-llm-2026|Razavi und Powers (2026)]] erweitern dies auf Mathematik- und Leseaufgaben für K-5 (N = 5170), die nach dem Rasch-IRT-Modell kalibriert wurden: Die Zero-Shot-Schwierigkeitsbewertungen von GPT-4o korrelierten mittel bis stark mit den tatsächlichen Schwierigkeiten (r = 0,83 Mathematik, r = 0,81 Lesen), variierten jedoch nach Klassenstufe, während ein merkmalsbasierter Ansatz — von einem LLM extrahierte kognitive und sprachliche Merkmale, die in baumbasierte Modelle eingespeist wurden — Korrelationen von bis zu r = 0,87 erreichte. Die strukturierte Merkmalsextraktion der Studie (z. B. Syntaxkomplexität, [[cognitive-offloading|kognitive Belastung]], Tückischkeit der Distraktoren) und ihr praxisnaher siebenstufiger Arbeitsablauf bieten eine Vorlage für die Kalibrierung generierter Aufgaben, während ihr Befund zur Range-Restriction in den frühen Klassenstufen und ihre Einschränkungen hinsichtlich der Generalisierbarkeit vor einem Einsatz in High-Stakes-Kontexten mahnen.

- **Umfangreiche Evidenz zur Studierendenwahrnehmung:** [[johnson-student-ratings-automatically-generated-questions-2025|Johnson et al. (2025)]] analysierten 5.214.211 studentische Fragesitzungen zu automatisch generierten Lückentextaufgaben im CoachMe-Übungsfeature des VitalSource Bookshelf E-Readers. Bewertungen waren selten — 3,31 Daumen hoch und 2,00 Daumen runter pro 1.000 Sitzungen —, und Daumen-runter-Bewertungen hingen mit generatorgesteuerten Merkmalen zusammen, darunter Satzwichtigkeit (Odds Ratio 2,38), Antwortwichtigkeit (1,64) und Wortart der Antwort, während die Modelle für Daumen hoch nahezu leer waren. Ein Schwellenwert für die beiden Wichtigkeitsvariablen würde die Daumen-runter-Rate auf etwa 1,62 pro 1.000 Sitzungen senken, wodurch Bewertungen studentischer Endnutzer zu einem praktikablen Qualitätssignal für die Feinabstimmung der Generierung würden.

- Durchschnittliche psychometrische Gleichwertigkeit kann Defizite auf Item-Ebene verdecken: Ein [[meta-analysis-systematic-review|Scoping Review]] von 153 Berichten aus der medizinischen Ausbildung ergab, dass die KI-basierte Item-Generierung mitunter Schwierigkeit und Trennschärfe menschlich erstellter Items erreichte, doch in einem Physiologie-Vergleich erfüllten nur 9 von 40 ChatGPT-Items alle Idealkriterien, gegenüber 19 von 40 Items von Lehrenden ([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **Erkennbarkeit in einer realen Prüfung und was die Überprüfung tatsächlich aussortiert:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] nahmen 30 KI-generierte MCQs und 30 MCQs aus der nationalen Zulassungsprüfung (National Licensing Exam) in eine benotete, tablet-basierte Prüfung auf, die von 119 [[medical-education|Medizinstudierenden]] im fünften Studienjahr absolviert wurde; die KI-Items wurden von ChatGPT-4o und Gemini 1.5 Pro aus den kursinternen Materialien entworfen und durchliefen ein Expertengremium, das 82% von ihnen akzeptierte und 18,2% als unbrauchbar ausschied. Die Quellenzuordnung der Studierenden unterschied sich zwischen den beiden Item-Arten nicht, und Itemschwierigkeit, Distraktorverteilung und wahrgenommene curriculare Passung waren statistisch nicht unterscheidbar — ein Ergebnis zur *Wiedererkennung*, nicht zur Qualität, und der Grund, warum die Autoren den Nutzen des Workflows darin sehen, den Aufwand der Lehrenden vom Entwerfen zum Überprüfen zu verlagern, statt ihn zu beseitigen. Ein explorativer Unterschied blieb bestehen: Gemini-Items waren schwerer als die Items der Zulassungsprüfung (p = 0,028), ChatGPT-Items dagegen nicht (p = 0,984).
- **Aufgabenabhängigkeit:** Die Zuverlässigkeit der Generierung variiert je nach Aufgabentyp. [[cong-confidence-asag-2026|Bewertung von Kurzantworten]] und [[self-referential-l2-writing-llm-assessment|analytische Bewertung von Schreibtexten]] zeigen, dass Aufgaben mit offenen Antworten und Schreibaufgaben schwieriger zuverlässig zu generieren und zu bewerten sind als strukturierte Aufgaben.
- **Kognitive Qualität:** Die [[llm-educational-question-cognitive-depth|Bewertung der kognitiven Tiefe]] zeigt, dass generierte Items tendenziell zu Denkprozessen niedrigerer Ordnung neigen, sofern sie nicht explizit auf Lernergebnisse höherer Ordnung ausgerichtet sind.

- **Kriterienraster für die Item-Erstellung werden erfüllt, bevor die Ausrichtung auf die Kompetenzstufen gelingt.** Siebenundzwanzig von GPT-4 generierte Chemie-Items erfüllten im Durchschnitt 87,71 % von 22 binären Kriterien zur Item-Erstellung, doch nur 33,33 % reduzierten die Fachsprache und 48,15 % hielten die Antwortoptionen in ihrer Länge ausgewogen, und bei der Ausrichtung auf die Kompetenzstufen wurden lediglich 25,93 % exakte Übereinstimmung mit der aus dem Rasch-Modell abgeleiteten Schwierigkeit erreicht ([[rodemer-ai-generated-mcq-chemistry-assessment-2026|Rodemer et al. (2026)]]). Entscheidend ist die empirische Schwierigkeit, nicht die Checkliste.

- **Die automatische Zuordnung des kognitiven Niveaus überträgt sich nicht auf generierte Items.** Ein auf einer kuratierten Item-Bank trainierter Klassifikator der Bloom-Taxonomie brach bei KI-generierten Fragen ein — Makro-F1 von 0,88 innerhalb der Verteilung auf 0,48 und 0,20 außerhalb davon —, weil generierte Items im Durchschnitt deutlich mehr Wörter umfassen (18,2 gegenüber 9,3) und nur einen Median von 10,5 % ihrer Bloom-Trigger-Verben mit dem kuratierten Korpus gemeinsam haben, gegenüber 35,1 % bei einem näher liegenden Set; das Nachtrainieren auf gelabelten Out-of-Distribution-Daten brachte den größten Einzelgewinn, ab einer Schwelle von etwa N > 1.000 gelabelten Samples ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

## Rolle in adaptivem und personalisiertem Lernen

AQG ist ein zentraler Befähiger [[adaptive-learning|adaptiven]] und [[personalized-learning|personalisierten]] Lernens: Sie produziert die großen Aufgabenbanken, aus denen adaptive Tutoren schöpfen, und — kombiniert mit [[knowledge-tracing|Knowledge Tracing]] oder [[student-modeling|Studierendenmodellierung]] — kann Aufgaben zuschneiden, die auf die Wissensstände einzelner Lernender zugeschnitten sind ([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|Interessenbasierte Personalisierung]] zeigt, dass AQG Aufgaben auch an Studierendeninteressen anpassen kann, nicht nur an Schwierigkeit.

## Implikationen für KI in der Bildung

- **Generieren, dann validieren:** Paaren Sie Generierung immer mit einem Validierungs-/Verfeinerungsstadium, um Halluzination zu kontrollieren und Relevanz sicherzustellen.
- **Aufgabentyp an Zuverlässigkeit anpassen:** Nutzen Sie AQG für strukturierte Aufgabentypen (MCQ, Lückentext, Code), wo sie am zuverlässigsten ist, und wenden Sie sorgfältige Validierung auf offene Antwort- und Schreibaufgaben an.
- **Für kognitive Tiefe entwerfen:** Prompts und Pipelines sollten höherordentliches Denken adressieren, nicht bloß Erinnern, um echtes Lernen zu stützen.
- **Schwierigkeit kalibrieren:** Nutzen Sie KI-Schwierigkeitsschätzungen, um angemessen herausfordernde Aufgaben auszuwählen, mit starker Validierung vor hochrelevantem Einsatz.
- **Über Lernendenmodelle personalisieren:** Kombinieren Sie AQG mit Knowledge Tracing und Interessenmodellen, um adaptive, individualisierte Aufgaben zu erzeugen.

## Verbreitete Fehlvorstellungen

**„Generierte Aufgaben sind in dem Maßstab nutzbar, in dem sie produziert werden können."** Das Volumen ist nicht die Beschränkung; die Kalibrierung ist es. Die Qualität variiert dramatisch über Aufgabentypen und verlangt Validierung, um halluzinierte oder schlecht kalibrierte Aufgaben zu vermeiden, weshalb die Pipelines, die funktionieren, ihren Aufwand in die Verifikation statt in die Generierung stecken — eine senkte die Halluzination um **62 %**, indem sie eine generate-then-validate-refine-Schleife ergänzte.

**„Eine Verfeinerungsschleife macht generierte Aufgaben vertrauenswürdig."** Sie macht sie weniger falsch. Eine 62-prozentige Verringerung der Halluzination lässt einen erheblichen Rest, und keine Schleife löst das schwierigere Problem, ob die angegebene Schwierigkeit einer Aufgabe dem entspricht, was Studierende tatsächlich tun — die [[assessment-validity|Validitäts]]-Frage, an der die Evidenz zu Schwierigkeitsmarkierungen generierte Metadaten scheitern lässt. Validierung reduziert Erfundenes; Kalibrierung braucht Antwortdaten von Studierenden.

**„Aufgabengenerierung personalisiert das Üben von selbst."** Sie erzeugt Angebot, und Personalisierung ist ein Zuordnungsproblem. Mehr Aufgaben zu produzieren sagt Ihnen nicht, welche Aufgabe eine gegebene lernende Person als Nächstes sehen sollte, und die Frage der adaptiven Auswahl ist ein eigener Mechanismus mit eigener Evidenz.

**„Generierung skaliert Assessment, ohne zu verändern, was Assessment misst."** Sie verändert die Zusammensetzung dessen, was gemessen wird, weil die Aufgaben, die sich gut generieren lassen, keine repräsentative Stichprobe der Aufgaben sind, die gut messen. Leicht zu generierende Formate werden die schwerer zu generierenden fortschreitend verdrängen, was das Konstrukt still umformt.

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

- [[genai-medical-education-transformation-review-2026]] — Scoping-Review von 153 Berichten zur medizinischen Ausbildung über KI-gestützte Item-Generierung im Vergleich zur Item-Qualität von Lehrenden

- [[assessing-quality-ai-generated-exams-field-2025]] — Großangelegte Feldvalidierung der Qualität KI-generierter Prüfungen mittels IRT
- [[generate-then-validate-question-gen]] — Fragengenerierung nach dem Generate-Then-Validate-Verfahren
- [[kt4eqg-personalized-question-generation]] — Personalisierte Fragengenerierung mittels Knowledge Tracing
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-gestützte Fragengenerierung für gehörlose und schwerhörige Lernende
- [[llm-educational-question-cognitive-depth]] — Kognitive Tiefe von LLM-generierten Fragen
- [[slidesqaqa-pedagogical-question-generation]] — Pädagogische Fragengenerierung für Foliensatz-Q&A
- [[code-gen]] — CODE-GEN: RAG-basierte Fragengenerierung mit Human-in-the-Loop
- [[nsmq-riddles-science-math-benchmark]] — NSMQ-Riddles-Benchmark
- [[taklif-ai-interest-based-personalized-assignments]] — Interessenbasierte personalisierte Aufgaben
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-basierte Schwierigkeitskalibrierung
- [[self-referential-l2-writing-llm-assessment]] — Selbstreferenzielle analytische Schreibbewertung
- [[cross-dataset-bloom-question-classification]] — Datensatzübergreifende Klassifikation von Bloom-Fragen
- [[llm-chatbots-cs-multiple-choice]] — LLM-Chatbots und CS-Multiple-Choice-Aufgaben
- [[socratic-tests-conversational-assessment]] — Sokratische Tests: dialogbasierte Leistungsbeurteilung
- [[llm-turing-test-italian-legal-exams-2026]] — LLM-Turing-Test in juristischen Prüfungen
- [[razavi-powers-item-difficulty-llm-2026]] — Schätzung der Itemschwierigkeit mithilfe von LLMs und baumbasiertem ML
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Prozessbasierte Qualitätsbewertung von Mathematikaufgaben
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: Ein agentischer Tutor, der seinen Lernenden in einer Mensch-KI-Co-Learning-Schleife kennenlernt
- [[automated-constructive-assessment-hdr-llm-2026]] — Automatisierung konstruktiver Leistungsbeurteilung mit Large Language Models: Auf dem Weg zu skalierbarer und wiederholter Bewertung praktischer Kompetenz
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Nutzung von LLMs durch Studierende und die Grenzen KI-generierter Aufgabenschwierigkeit in Data-Science-Kursen
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluierung vortrainierter Modelle zur pädagogischen Bewertung neuartiger KI-gestützter Lernfragen
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Studierende konnten in einer benoteten Prüfung KI-generierte MCQs nicht von Items der Approbationsprüfung unterscheiden, und 18,2 % der generierten Items wurden bei der Überprüfung aussortiert (Vogt et al. 2026)
- [[rodemer-ai-generated-mcq-chemistry-assessment-2026]] — Generierte Items, die ein Bewertungsraster für die Itemformulierung erfüllen, können ihr angestrebtes Kompetenzniveau dennoch verfehlen
- [[islam-human-vs-ai-sba-dental-2026]] — Die Finalisierungszeit sank von 6,0 auf 1,0 Minuten pro Item, gemessen vom nutzbaren Entwurf bis zur Endfassung, nicht von Anfang bis Ende
