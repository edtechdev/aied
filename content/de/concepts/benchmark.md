---
title: Benchmark (Vergleichsmaßstab)
created: "2026-08-09T16:52:03-04:00"
updated: "2026-11-19T01:10:00-05:00"
type: concept
technology: [generative-ai, llm]
assessment: [assessment]
connected_faqs: [reporting-interpreting-aied-research, checking-whether-educational-ai-works]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, benchmark]
translation_of: concepts/benchmark
source_updated: "2026-11-17T08:35:00-05:00"
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
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Benchmark** — standardisierte Test-Suiten und Evaluations-Frameworks, mit denen die Leistung von KI-Modellen bei Bildungsaufgaben gemessen wird. Benchmarks ermöglichen reproduzierbare Vergleiche über Modelle und Ansätze hinweg und sind unverzichtbar für die Bewertung der Zuverlässigkeit, Fairness und [[pedagogy|pädagogischen]] Qualität von KI in Bildungssystemen.

## Fragen zum Nachdenken

- Ein Benchmark ist eine standardisierte Test-Suite zur Messung der Leistung von KI-Modellen bei Bildungsaufgaben. Was testen die meisten KI-Benchmarks Ihrer Meinung nach tatsächlich, bevor Sie weiterlesen — und warum könnte das etwas anderes sein als das, was ein guter Tutor braucht?
- Ein Pedagogy Benchmark testet pädagogisches Wissen — [[teacher-role|Unterrichts]]strategien, Beurteilungsmethoden, Sonderpädagogik — und nicht Fachwissen. Warum könnte eine KI, die ein Fach brillant beherrscht, es dennoch nicht vermitteln können, und warum würde ein Benchmark, der Pädagogik ignoriert, das übersehen?
- Eine Lehre hier ist [[research-methods-aied|methodisch]]: Wie man einen Benchmark validiert, verändert die Ergebnisse dramatisch, wobei naive Validierung weit höhere Leistungen ausweist als rigorose, trial-unabhängige Methoden. Wie könnte ein Modellentwickler oder Anbieter versucht sein, die Validierung so zu gestalten, dass sie gut aussieht, und woran würden Sie das erkennen?
- Benchmark-Leistung überträgt sich oft nicht auf den praktischen Nutzen. Fällt Ihnen ein Szenario ein, in dem eine KI einen Benchmark „gewinnt“ und dennoch im realen Klassenzimmer scheitert — und was sagt diese Lücke über das Vertrauen auf Benchmark-Werte allein aus?
- Benchmark-Design kann selbst Bias kodieren oder verstärken. Wenn ein Benchmark aus bestimmten Aufgaben, in bestimmten Sprachen, aus bestimmten Populationen besteht — wessen Lernen misst er am Ende, und wessen ignoriert er?

## Einleitung

Benchmarks bilden die Evidenzgrundlage der [[ai-education|Forschung zu KI in der Bildung]]. Sie liefern standardisierte Datensätze, Aufgaben und Metriken, mit denen Forschende Modelle vergleichen, Fortschritte verfolgen und Fehlermodi identifizieren können. In der Forschung treten Benchmarks in mehreren Domänen auf:

- **[[cstutorbench-slm-tutors|CSTutorBench]]** evaluiert kleine Sprachmodelle für Tutoring-Aufgaben in der Informatik.
- **[[anvil-ai-educational-animations|ANVIL]]** benchmarkt KI-generierte Lernanimationen gegen von Menschen erstellte Alternativen.
- **[[teaching-feedback-classification-benchmark|Benchmarks für Unterrichtsfeedback]]** bewerten den sprachübergreifenden Transfer der Klassifikation von [[ai-feedback-quality|Feedbackqualität]].
- **[[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark (CDPK + SEND)]]** testet pädagogisches Wissen — Unterrichtsstrategien, [[assessment|Beurteilungsmethoden]] und [[special-education|Sonderpädagogik]] — statt Fachwissen und berichtet eine „Value Frontier“ (Kosten vs. Genauigkeit) über 97 Modelle hinweg (die meisten allgemeinen Benchmarks testen Fachwissen; Pädagogik ist eine eigenständige, bildungskritische Dimension).
- **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** benchmarkt [[llm|LLM]]-basierte [[learning-design|Instructional-Design]]-Agenten über 25.795 Instructional-Design-Szenarien hinweg und zeigt, dass hybride Agenten, die in klassischen ISD-Frameworks (ADDIE, Dick & Carey, Rapid Prototyping) verankert sind, reine Theorie oder reine Technik übertreffen — ein Benchmark-Ergebnis mit direkten Implikationen für das Design [[agentic-ai|agentischer KI]] in der Bildung.
- **[[tutor-case-bench-challenging-behaviors-2026|TutorCaseBench]]** verankert die Tutor-Evaluation in dokumentierter Fallliteratur statt in simulierten Personas: 923 Dialoge aus Fällen der Sonderpädagogik und der pädagogischen Psychologie, wobei das stärkste von 11 Modellen in 55,8 % der offenen Fälle eine dokumentierte Intervention erreichte.

- **Lerneradaptation als explizites Benchmark-Kriterium.** Die Teaching Monster Challenge bewertet die Anpassung an eine vorgegebene Lerner-Persona, doch ihr automatisierter LLM-Judge trennte nur ein schwaches Schlussfeld ab — die Spitzensysteme lagen nahe an seiner Obergrenze, und sein Ranking widersprach der Präferenz der Crowd (Spearman ρ = −0,17) ([[teaching-monster-pck-benchmark-2026|Lin et al. (2026)]]).

## Warum Benchmarks in AIED wichtig sind

Benchmarks stehen in Verbindung mit [[ai-ed-evaluation|KI-Bildungsevaluation]] und [[assessment-validity|Beurteilungsvalidität]] — ohne rigorose Benchmarks sind Aussagen über die Wirksamkeit von [[intelligent-tutoring|KI-Tutoring]] nicht überprüfbar. Sie überschneiden sich zudem mit [[bias-mitigation|Bias-Minderung]], da Benchmark-Design Biases kodieren oder verstärken kann. Die Spannung zwischen Benchmark-Leistung und praktischem Nutzen wird in mehreren Artikeln untersucht und verknüpft mit Fragen des [[transfer-of-learning|Lerntransfers]] in Anwendungen [[generative-ai|generativer KI]].

- **Wenn die Metrik und nicht das System das Problem ist:** [[algorag-rag-theoretical-cs-education-2026|AlgoRAG]] erzielte BLEU-4 = 0,0000 auf allen 179 theoretischen [[cs-education|Informatik]]-Prüfungsfragen, während eine pädagogische Rubrik mit sechs Kriterien 0,7620 ergab, denn logisch äquivalente Beweise unterscheiden sich regelmäßig in Notation, Variablennamen und Beweisstrategie. Ein Nullwert sagt mehr über N-Gramm-Überlappung aus als über Antwortqualität — das ist das allgemeine Argument dagegen, Oberflächenmetriken als Leitzahl für AIED-Systeme in formalen Domänen zu behandeln.
- **Kontrafaktische Benchmarks auf Konstruktebene.** CFES-P24 drückt Prinzipien des Multimedia-Lernens als deterministische, umkehrbare Folientransformationen aus, um zu prüfen, ob MLLMs auf spezifische Instructional-Design-Konstrukte reagieren, statt plausible Gesamtbewertungen zu produzieren. Ein eingefrorener Pilotlauf zeigte Konstrukterkennung (Operation, Prinzip, Reparatur, Evidenzlokalisierung) bei 8/8, während vergleichendes Urteil (Richtung 6/8) und Schweregrad-Kalibrierung (0/8) scheiterten — ein Argument für mehrschichtige Scorecards statt Gesamtwerten. ([[cfes-p24-multimodal-slide-auditing-2026|Ma et al., 2026]])

- **[[hallucination-risk|Halluzination]] und Energie in der Evaluation verankern, nicht nur Genauigkeit.** [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] bewerteten Halluzination als Entailment gegenüber den abgerufenen Open-License-Chunks (κ = 0,76 mit Expertenurteil) und protokollierten 1,8 mWh pro Anfrage; ihre Ablation stellte Retrieval an die erste Stelle: Ein lokales LLM ohne Retrieval erreichte 52,3 %, unter der TF-IDF-Baseline von 55,4 %.

- **Verifikation kann bei generierten Inhalten besser sein als Bewertung.** [[diagramir-educational-math-diagram-evaluation|Kumar et al. (2025)]] übersetzen generierte Mathematikdiagramme in eine schemabeschränkte Zwischenrepräsentation zurück und führen deterministische Regelprüfungen aus; sie erreichen eine höhere Übereinstimmung mit menschlichen Bewerterinnen und Bewertern (Cohens κ 0,48–0,56) als LLM-as-a-Judge (0,39–0,47) und lassen ein kleines Modell den besten Judge zu 10× geringeren Kosten erreichen.
- **Trial-unabhängige Evaluation in physiologischen Benchmarks.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara & Halloluwa (2026)]] benchmarken 15 ML/DL-Modelle für EEG-basierte Vertrautheitsvorhersage und zeigen, dass die Wahl des Validierungsschemas die Hauptergebnisse dramatisch verändert: Standardmäßige stratifizierte Kreuzvalidierung erlaubt zeitliche Leakage und berichtet bis zu 0,9853 F1, während trial-unabhängige Group-K-Fold-Validierung den Spitzenwert auf 0,6038 F1 senkt. Die Lehre — zeit- bzw. leakage-bewusste Evaluation ist für glaubwürdige Bildungs-Benchmarks unverzichtbar — reicht über EEG hinaus zu jedem Benchmark, der sequentielle oder zeitstrukturierte Daten nutzt.

- **Verteilungsverschiebung ist eine zweite Benchmark-Achse neben Leakage.** Ein Benchmark, der den In-Distribution-Wert eines Klassifikators und seinen Transferwert berichtet, berichtet zwei verschiedene Größen: Ein Bloom-Level-Klassifikator, der auf seiner kuratierten Aufgabenbank ein Makro-F1 von 0,88 hielt, fiel auf zwei KI-generierten Fragensätzen auf 0,48 und 0,20, und Nachtraining auf annotierten Out-of-Distribution-Daten stellte bis zu 0,82 wieder her; eine einzelne In-Distribution-Leaderboard-Zahl überschätzt also, was ein eingesetztes Instrument leisten wird ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

- **Ein Datensatz, der gebaut wurde, um datensatzübergreifenden Transfer zu testen.** ICLE++ annotiert persuasive Essays mit holistischen und zehn merkmalsbezogenen Bewertungen, um die Abhängigkeit der [[automated-essay-scoring|AES]]-Forschung von ASAP offenzulegen, dessen zeitbegrenzte, ausschließlich von Muttersprachlerinnen und Muttersprachlern verfasste Essays Länge mit Qualität vermengen; Modelle, die auf Merkmalsannotationen trainiert wurden, transferierten besser über Datensätze hinweg als solche, die nur auf holistischen Bewertungen trainiert wurden ([[icle-plus-plus-essay-scoring|Li & Ng, 2026]]).

- **Ein an Menschen genormter Benchmark misst für ein LLM möglicherweise nicht dasselbe Konstrukt.** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] verglichen Antwortstrukturen von Menschen und [[multimodal|multimodalen]] LLMs bei einer [[chemistry-education|Chemie]]-Diagnostik und einer Prüfung zum [[quantitative-research|quantitativen]] Denken; die Faktorkongruenz zwischen LLMs und Menschen blieb unter der Mensch–Mensch-Baseline, und Parallelanalysen behielten unterschiedliche Faktorzahlen bei.

- **Reliabilität ist eine Benchmark-Achse: Wiederholte Durchläufe und modellübergreifende Übereinstimmung trennen lösbare Items von modellspezifischen.** [[croteau-mllm-visual-math-reasoning-refusal-2025|Croteau & Heffernan (2025)]] ließen sechs Modelle jeweils dreimal über 376 bildabhängige Mathematik-Items laufen und veröffentlichten das Konsens-Testbed.
Die Durchlaufstabilität auf Item-Ebene lag bei 79,0 %–85,4 % Konsistenz, der mittlere paarweise Cohens Kappa über Modellfamilien hinweg betrug 0,54, und die 76 Items, die alle sechs Modelle mehrheitlich korrekt lösten („Gold“), plus 61 Items, die 3/3 gelöst wurden („Ultra-Gold“), wurden zu reproduzierbaren Benchmark-Teilmengen — Genauigkeit aus einem einzigen Durchlauf ist eine schwache Grundlage für Einsatzentscheidungen.

- **Der Zeithorizont ist eine Benchmark-Achse, kein Detail.** [[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]] setzen einen [[pedagogical-agent|Tutor-Agenten]] in eine kontinuierliche 30-tägige Beziehung mit einem simulierten Lernenden und finden, dass jeder Adapter bis Tag 5–10 ein Plateau erreichte, kein Adapter beim Lernzuwachs in mehr als einer Basismodell-Klasse führte und die fünf Bewertungsachsen weitgehend unabhängig waren.

- **Ein Tutoring-Benchmark, der gegen menschliche Tutoren statt gegen Leaderboards bewertet.** StudentBench randomisiert 2.383 Erwachsene auf KI-Tutoring, Live-Tutoring durch menschliche Expertinnen und Experten sowie eine Videokontrollgruppe und arbeitet mit neu geschriebenen GRE-Items; das gepoolte KI-Tutoring ist dem menschlichen Tutoring statistisch äquivalent (p=.015) und liegt 5,5–6,9 Prozentpunkte über der Kontrolle; seine Leaderboards zur Unterrichtsqualität, aufgebaut aus 2.028 Experten-Paarvergleichen, bewerten Unterrichtspläne und Gesprächsverhalten statt dessen, wie viel die Lernenden gelernt haben ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]).
- **Benchmarks zu auditieren ist inzwischen ein eigenständiger Forschungsbeitrag.** Drei Artefakte aus dem Jahr 2026 treiben die Benchmark-Arbeit über die Leaderboard-Aggregation hinaus. EduFair-Bench hält einen simulierten Lernenden konstant und variiert demografische Attribute, wodurch ein Tutoring-Benchmark zu einem Fairness-Audit mit pädagogischen Metriken auf Turn-Ebene wird ([[edufair-bench-pedagogical-fairness-llm-tutors-2026|Zhao et al., 2026]]). GeoVAD-Bench diagnostiziert visuelle Zwischenkonstruktionen — Wahrnehmung, Qualität der Hilfskonstruktionen, Nutzung — statt endgültiger Korrektheit bei 600 [[math-education|Geometrie]]-Aufgaben ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]). Eine Experten-Nachbewertung von sechs [[physics-education|Physik]]-Benchmarks quantifizierte den Fehler, den solche Werte tragen: 57,20 % der auditierten Ablehnungen waren Item-Defekte, 38,00 % Bewerterfehler und nur 4,80 % echte Modellfehler ([[frontier-models-physics-benchmark-audit-2026|Ansari et al., 2026]]). Zusammen argumentieren sie, dass ein Benchmark-Wert immer mit seinem eigenen auditierten Fehlerbudget gelesen werden sollte — dieselbe Disziplin, die [[assessment-validity|Beurteilungsvalidität]] von Instrumenten im Klassenzimmer verlangt.
- **Entkoppelte Annotation und Fragengenerierung als Konstruktionsparadigma.** Die meisten Benchmarks bauen aufgabenspezifische Frage-Antwort-Paare pro Item oder Bild, was die Erweiterung auf neue Aufgaben teuer macht, Daten schwer über Aufgaben hinweg wiederverwendbar und nur begrenzte Kontrolle über Fragenform und -komplexität lässt. MUSE kehrt die Reihenfolge um: Jedes Kunstwerk wird einmalig in eine wiederverwendbare strukturierte Repräsentation seines visuellen und semantischen Inhalts annotiert, danach werden 12 Aufgaben aus vordefinierten Generierungsregeln instanziiert, sodass ein Bild eine Multi-View-Evaluationsinstanz ergibt, in der Schwierigkeit und Format als explizite Designvariablen und nicht als Nebenprodukte behandelt werden ([[muse-vlm-artistic-image-benchmark-2026|Zhu et al., 2026]]). Die Korrelationsevidenz ist ein zweites Argument für dieses Design — die 12 Aufgaben messen verwandte, aber nicht redundante Fähigkeiten (Jigsaw Puzzle korreliert schwach mit den meisten anderen, ρ = 0,25 bis −0,10), und auf sechs externen Benchmarks übertragen sich allgemeine multimodale Werte ungleichmäßig auf künstlerisches Bildungsbildmaterial (BLINK Jigsaw vs. MUSE Jigsaw ρ = −0,20) — das ist das Argument aus der Konstruktabdeckung dagegen, einen einzelnen aggregierten Wert als Proxy für bildungsrelevante Fähigkeit zu lesen ([[muse-vlm-artistic-image-benchmark-2026|Zhu et al., 2026]]).
- **Multimodale Ausgabegenerierung ist die Achse, die die meisten Benchmarks auslassen.** [[omniphys-multimodal-physics-benchmark-2026|Chen et al. (2026)]] bewerten 15.246 Physikfragen und 19.850 Bilder von der [[k-12|Mittelstufe]] bis zur Universität, einschließlich einer Teilmenge zur Diagrammbearbeitung: Das Synthetisieren oder Bearbeiten strukturierter Physikdiagramme erwies sich als schwieriger als das Beantworten, und führende Modelle blieben unter 70 % strikter Beherrschung.
- **K-12-Abdeckung in den Naturwissenschaften und das Sättigungsproblem.** Ein an NGSS ausgerichteter Benchmark für Naturwissenschaften in Mittel- und Oberstufe (1.078 + 1.150 synthetische Items, von drei Judges validiert) fand neun Open-Weight-Modelle über 90 % One-Shot-Genauigkeit, während klassische Item-Statistiken hohe Schwierigkeitswerte und niedrige Trennschärfe zeigten: Die Modellgröße sagte die Leistung nicht voraus, und die Autoren fragen, ob der Test zu leicht ist ([[llm-benchmark-secondary-science-topics-2026|Schroeder et al., 2026]]). Es ist der domänenspezifische Fall dafür, die Item-Statistiken eines Benchmarks neben seinem Leaderboard zu lesen.
- **Eine triviale Baseline und IRT-Ground-Truth als Kontrolle der Hauptgenauigkeit.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]] bauen FoundationalASSIST aus 1.722.169 ASSISTments-Interaktionen auf, wobei Fragetext und tatsächliche Schülerantworten erhalten bleiben, bewerten die [[knowledge-tracing|Knowledge-Tracing]]-Aufgabe gegen eine Always-Correct-Baseline von 51,3 Prozent und lesen Modellkompetenz gegen zweiparametrige IRT-Schätzungen, die auf denselben Daten angepasst wurden. Vier Frontier-Modelle übertreffen die triviale Baseline um etwa fünf Punkte (bestes 56,2 Prozent) und liegen unter dem Zufall, wenn es um die Beurteilung der Item-Trennschärfe geht. Der Fehler, den ein eigens dafür gebauter Benchmark sichtbar machen kann: Sie sagen bei richtigen Antworten in 85,4 Prozent der Fälle Korrektheit voraus, bei falschen aber nur in 12,6 Prozent — ihre scheinbare Fähigkeit ist also Optimismus-Bias.
- **Die Konfiguration eines Bewertermodells ist selbst eine Variable.** [[llm-graders-computer-science-exams-2026|Habibullah et al. (2026)]] durchmustern 171 Bewertungskonfigurationen über eine doppelt bewertete Prüfung mit 570 Studierenden und finden, dass eine kurze „Strict Grader“-Präambel 14 von 17 Open-Weights-Modellen aus dem Notenband herausdrängt; anschließend replizieren sie mit 162 Konfigurationen auf einer unabhängigen Prüfung mit 1.038 Studierenden, deren Ergebnisse die Anfälligkeit reproduzieren, nicht aber ihre Richtung. Die beste Konfiguration (MAE 1,64/35, unter den 2,61/35, die menschliche Bewerter gegeneinander erreichen) ist daher kein Beleg dafür, dass LLM-Bewertung funktioniert — obwohl ein auf den gepoolten menschlichen Labels trainierter LoRA-Adapter fünf kleine Modelle auf menschliches Niveau bringt und die Persona-Sensitivität nahezu verschwinden lässt.
- **Trainingsdaten begrenzen, um Fähigkeitsaussagen zurechenbar zu machen.** [[li-littlelearner-pedagogically-controlled-knowledge-exposure-2026|Li et al. (2026)]] filtern FineWeb-Edu auf 88B Tokens US-amerikanischen K–5-Materials und trainieren darauf ein 5B-Modell von Grund auf; anschließend prüfen sie die Nahtstelle über Verhaltensproben statt über Scores — Beibehaltung nahe null bei Beyond-K–5-Passagen, Einbruch bei Beyond-K–5-Jeopardy-Items und weniger als halb so viele gelöste MathCAMPS-Aufgaben der 8. Klasse selbst bei pass@1024. Weil die vorherige Exposition bekannt ist, kann eine Fähigkeit, die nach Skalierung, [[llm-training-and-fine-tuning|Post-Training]] oder In-Context-Beispielen auftritt, der Intervention zugeschrieben werden; die Autoren berichten außerdem, dass die Grenze nicht menschlich geformt ist, da das Modell manchmal eine nachgelagerte Fähigkeit übertrifft, während es an deren Voraussetzung scheitert.
- **Die Bewertungsregel ist Teil des Instruments.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] lässt vier Knowledge-Tracing-Update-Regeln über dieselben ASSISTments-2012–13-Ereignissequenzen laufen, die sich nur darin unterscheiden, wie sie hinweisgestützte Zeilen bewerten, und preregistriert die Vergleiche hinter einem Fence, der die konfirmatorische Hälfte der Studierenden zurückhält, bis die Registrierungsdatei vorliegt. Jede abgeschlossene Bearbeitung zu honorieren schlägt eine Skill-Schwierigkeitskonstante kaum (gepoolte AUC 0,604 vs. 0,595 über 985.813 bewertete Ereignisse) und erklärt 93,9 Prozent der Schüler–Skill-Paare für beherrscht gegenüber 72,8 Prozent unter einer Regel, die assistierte Zeilen als fehlgeschlagene erste Versuche liest (0,658) — die allgemeine Lehre lautet, dass ein Mastery-Label durch die Evidenzregel definiert wird, nicht durch das Log.
- **Modellfähigkeit als kalibriertes Niveau berichten, nicht nur als Genauigkeit.** [[standardized-assessment-llm-english-proficiency-2026|Min et al. (2026)]] bilden 624 expertenannotierte Items mithilfe von 2.050 Lernendenantworten auf benannte Kompetenzniveaus ab und finden, dass Frontier-Modelle die kalibrierte Obergrenze überschreiten — eine Grenze, die eine Prozentzahl verbirgt.

- **Eine Bewertungsregel kann von dem Modell ausgenutzt werden, das sie trainiert.** Eine [[adaptive-learning|Adaptivitäts]]metrik, die durch Wiederholung einer einzigen besten Entscheidung maximiert wird, zeigt, dass Benchmark-Design den Argmax veröffentlichen, Adaptation als Differenz bewerten und Über-Zufall-Baselines berichten sollte ([[llm-tutor-pedagogical-metric-degradation-2026|Domínguez Figaredo & Fernández De la Cruz, 2026]]).

Die Matching-Regel ist Teil der Messung, und ihre Größenordnung ist nicht marginal. [[nkrumah-ai-skill-extraction-engineering-2026|Nkrumah und Kollegen (2026)]] bewerteten 11 Konfigurationen — Embedding-Modelle, [[generative-ai|generative]] LLM-Setups und einen ReAct-Agenten — gegen einen ESCO-annotierten Benchmark aus 926 Stellenanzeigen-Samples mit 1.696 Gold-Skills und bewerteten anschließend jede erneut über eine achtstufige Matching-Pipeline. Die Pipeline reichte von exakter Zeichenkettenübereinstimmung bis zu einem Grenzwert von 0,85 für Embedding-Ähnlichkeit, und der gemessene Recall stieg über alle 11 Konfigurationen hinweg um 11 bis 72 Prozentpunkte. Der größte Sprung, 70,9 Punkte, ging an Gemini 2.5 Pro mit Chain-of-Thought, dessen Beschreibungen semantisch, aber selten lexikalisch mit den Gold-Labels übereinstimmten — eine Schwankung, die die Autoren als Beleg dafür lesen, dass Exact-Match-Evaluation ebenso Formatierung wie Fähigkeit maß.

## Wo die Benchmarks zu finden sind

Ein Benchmark ist nicht immer ein Paper. Drei Oberflächen tragen inzwischen den größten Teil der operativen Lektüre, und sie unterscheiden sich darin, was sie eine Leserin oder einen Leser prüfen lassen.

Leaderboards machen aus einem Benchmark einen laufenden Vergleich. [GradeBench](/resources/gradebench/) bewertet Frontier-Modelle auf 464 handschriftlichen STEM-Antworten aus 45 Universitätskursen gegen die Rubrik-Items, die Lehrende tatsächlich ausgewählt haben, und das beste Modell erreicht 57,3 % exakte Rubrik-Übereinstimmung. Die Kostenachse ist wichtiger als das Ranking: Ein Modell, das 0,8 Punkte zurückliegt, kostet etwa ein Siebtel pro tausend Antworten. Es misst Bewerten, nicht Lernen.

Detector-Leaderboards beantworten eine andere Frage. Das [RAID-Leaderboard](/resources/raid-benchmark-leaderboard/) bewertet Detektionsmodelle über Domänen, Decoding-Einstellungen und adversariale Angriffe hinweg, und seine True-Positive-Rate bei einer False-Positive-Rate von 1 % ist die Spalte, die auf institutioneller Ebene zählt, wo 1 % Hunderte von Studierenden bedeutet.

Manche Benchmarks existieren, um Zugang statt Fähigkeit zu vergleichen. [Fab AI](/resources/fab-ai-benchmark-leaderboard/) evaluiert Modelle für Bildung in Ländern mit niedrigem und mittlerem Einkommen über Pädagogik, grundlegende Literalität, SEND und visuelles Schließen hinweg, mit Spalten für Preis, Parameterzahl und offene Gewichte neben dem Score. Die Spannweite — Frontier-Modelle in den unteren Neunzigern und offene Modelle mit weniger als 2B Parametern zwischen 21 % und 43 % — macht den Einsatz-Trade-off explizit.

Diese Unterscheidung sollte man beibehalten. Ein Leaderboard-Wert ist eine Aussage über einen festen Item-Satz und niemals über ein Klassenzimmer, und diese drei Instrumente sind sich uneinig darüber, wozu Bildungsmessung da ist.

## Verbreitete Fehlvorstellungen

- **„Die Leaderboard-Position sagt Ihnen, wie gut ein Tutor ist.“** StudentBench **randomisiert 2.383 Erwachsene auf KI-Tutoring, Live-Tutoring durch menschliche Experten und eine Video**bedingung und bewertet gegen menschliche Tutoren statt gegen andere Systeme. Ein Benchmark, der auf andere Modelle skaliert ist, beantwortet eine Frage, die niemand beantwortet haben musste.
- **„Simulierte Personas sind eine angemessene Grundlage für die Tutor-Evaluation.“** [[tutor-case-bench-challenging-behaviors-2026|TutorCaseBench]] verankert die Evaluation in **dokumentierter Fallliteratur statt in simulierten Personas** und nutzt **923 Dialoge**. Erfundene Schüler-Personas lassen ein System Fälle bestehen, die nicht vorkommen.
- **„Benchmarks kann man vertrauen, ohne den Judge zu prüfen.“** Halluzination wurde als **Entailment gegenüber den abgerufenen Open-License-Chunks (κ = 0,76 mit Expertenurteil)** bewertet — der Judge wurde gegen Experten validiert, bevor seine Werte verwendet wurden. Ein nicht validierter automatischer Judge produziert Zahlen unbekannter Bedeutung.

## Verbundene Konzepte

- [[ai-ed-evaluation]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[automated-essay-scoring]]

## Verbundene Artikel
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench: Evaluation von LLM-Tutoren bei Lernenden mit herausforderndem Verhalten (Park et al. 2026)
- [[standardized-assessment-llm-english-proficiency-2026]] — Ein Benchmark mit 624 Items zur Englischkompetenz, der Modellfähigkeit als kalibriertes Niveau berichtet (Min et al. 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[assessment-latent-structure-human-llm-2026]] — Messen Beurteilungsinstrumente bei Menschen und LLMs dasselbe? (Strugatski et al. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — The Pedagogy Benchmark: pädagogisches Wissen von LLMs (CDPK + SEND)
- [[jeon-isd-agent-bench-2026]] — ISD-Agent-Bench: Benchmarking LLM-basierter Instructional-Design-Agenten
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-Premise-OER-KI-Wissensbasis-Assistenten: mehrdimensionaler Benchmark
- [[authentic-products-authenticated-processes-2026]] — Von authentischen Produkten zu authentifizierten Prozessen: authentische Beurteilung in KI-reicher Hochschulbildung
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking großer Sprachmodelle zur Diagnose kognitiver Fähigkeiten von Lernenden anhand handschriftlicher Mathematikarbeiten
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: Ein Benchmark mit langem Zeithorizont für pädagogische LLM-Agenten mit simulierten Lernenden
- [[responsible-assessment-ai-era-stanford-2026]] — Verantwortungsvolle Beurteilung im KI-Zeitalter: zentrale Erkenntnisse einer zukunftsorientierten Konferenz
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[icle-plus-plus-essay-scoring]] — ICLE++: Modellierung feingranularer Merkmale für holistische Essay-Bewertung
- [[teaching-monster-pck-benchmark-2026]]
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking multimodaler LLMs für die Folienprüfung
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: Benchmark zur Evaluation generierter Mathematikdiagramme
- [[eeg-familiarity-automated-assessment-2026]] — Automatisierung der Lernendenbeurteilung: EEG-basierte Vertrautheitsvorhersage
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation für die theoretische Informatikausbildung -- Ein umfassendes Evaluationsframework für Algorithmenanalyse und Komplexitätstheorie
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: annotationsfirst, aufgabengenerative Benchmark-Konstruktion und Nicht-Redundanz auf Dimensionsebene über 12 Aufgaben zu künstlerischem Bildmaterial (Zhu et al. 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: KI- und menschliches Tutoring erzielen äquivalente GRE-Lernzuwächse
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation vortrainierter Modelle für die pädagogische Beurteilung neuartiger KI-gestützter Bildungsfragen
- [[llm-benchmark-secondary-science-topics-2026]] — Ein Benchmark für das Verständnis von LLMs zu naturwissenschaftlichen Themen der Mittel- und Oberstufe
- [[llm-tutor-pedagogical-metric-degradation-2026]] — Acht Designprinzipien für KI-Tutor-Benchmarks, abgeleitet aus einer Metrik, die in Wiederholung hinein optimiert wurde (Domínguez Figaredo & Fernández De la Cruz 2026)

- [[nkrumah-ai-skill-extraction-engineering-2026]] — Vergleich von KI-Ansätzen für automatisierte Skill-Extraktion: von Embeddings zu agentischen Systemen für die Ingenieurausbildung
