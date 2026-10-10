---
title: Mathematikbildung
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
discipline: [math education, stem education]
audience: [learners, instructors]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/math-education
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Mathematikbildung** — das Studium dessen, wie Lernende Mathematik lernen und wie KI Mathematikunterricht unterstützen kann, erstreckt sich über affektives Tutoring, kognitive Diagnose aus handschriftlicher Arbeit, Bewertung von [[desirable-difficulties|produktivem Ringen]], Hilfesuchverhalten, Zusammenarbeit zwischen Lehrkräften und KI bei visueller Erzeugung und [[student-ai-interaction|Studierenden-KI-Interaktion]]-Trajektorien. Mathematikbildung ist das aktivste [[discipline-specific-aied|fachspezifische]] [[research-methods-aied|Forschungs]]gebiet in dieser Wissensbasis, mit 32 Artikeln, die gemeinsam erkunden, wie KI mathematisches Lernen unterstützen — und manchmal untergraben — kann, von Bruchrechnung in der Grundschule bis zur Hochschulbildung.

## Fragen zum Nachdenken

- Mathematikaufgaben haben klare richtige Antworten, verlangen aber reiches Schlussfolgern, weshalb Mathematik ein beliebtes Versuchsfeld für KI-Tutoring ist. Wenn Sie bei einer Mathematikaufgabe feststecken — welche Art Hilfe hilft Ihnen tatsächlich zu lernen, eine Antwort, ein Hinweis oder eine Frage —, und wozu neigt die KI wahrscheinlich?
- Forschung findet, dass KI-Tutoren oft zu überfürsorglich voreingestellt sind und selten auf Rigorität drängen, selbst wenn Lernende bereit sind. Wenn Sie einen Tutor gestalten, wie entscheiden Sie, wann Sie Hilfe zurückhalten, um das „produktive Ringen" zu bewahren, das Verständnis aufbaut?
- Die Seite zeigt, dass Lernende, die zu früh Hinweise anfordern oder sie oberflächlich überfliegen, tendenziell weniger lernen. Haben Sie schon einmal aus Ungeduld nach einem Hinweis gegriffen statt aus echter Anstrengung? Was offenbart das darüber, wie KI-Unterstützung Lernen untergraben statt unterstützen kann?
- KI-Kognitionsdiagnosesysteme halluzinieren manchmal Evidenz und attribuieren Fehler über, und selbst starke Modelle liefern unterdurchschnittliche Leistung, wenn sie die tatsächliche handschriftliche Arbeit der Lernenden lesen. Wie sicher wären Sie bei einem Tutor, der aus Ihren Nebenrechnungen diagnostiziert, was Sie falsch gemacht haben?
- LLMs drehen ihre Antworten über mathematisch äquivalente Problemformulierungen um — dasselbe Problem, unterschiedlich dargestellt, verändert das Ergebnis. Was sagt das über den Einsatz von KI, um mathematisches Verständnis zu bewerten oder zu diagnostizieren?

## Einführung

Mathematikbildung ist ein primäres Gebiet für [[ai-education|KI in der Bildung]] geworden, weil Mathematikaufgaben klare richtige Antworten haben, aber reiches Schlussfolgern verlangen — was sie ideal macht, um Wirksamkeit von Tutoring, Validität von Assessment und die Interaktion von KI-Werkzeugen mit Kognition und Affekt der Studierenden zu untersuchen. Die Artikel in dieser Wissensbasis offenbaren sowohl das Versprechen von KI-Mathematiktutoren als auch anhaltende Herausforderungen: Über-Scaffolding, das produktives Ringen untergräbt, Halluzination in kognitiver Diagnose und die Schwierigkeit, KI-Unterstützung mit echtem Lernen auszubalancieren.

### Zentrale Forschungsthemen

**KI-Mathematiktutoring und Scaffolding** ist das größte Cluster, mit vier Artikeln, die untersuchen, wie KI-Tutoren Mathematiklernen unterstützen oder untergraben. **[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]** zeigt, dass das Hinzufügen affektiven Bewusstseins — Erkennen von Emotionen der Lernenden aus Text und Gesichtsausdrücken — einen Vorteil von +23 Prozentpunkten bei der Gewinnrate in Mathematik Tutoring erzeugt, und verbindet sich damit mit [[affective-computing|affective computing]] und [[affective-tutoring|affektivem Tutoring]]. **[[zhang-tutormoments-2026|TutorMoments]]** evaluiert 462 von Lehrenden annotierte Transkripte aus Mathematik-Tutoring der Klassenstufen 2–7 und findet, dass Frontier-Modelle zu Überfürsorglichkeit voreingestellt sind und selten auf Rigorität drängen, selbst wenn Lernende bereit sind — was die Ausrichtung zwischen KI-Hilfsbereitschaft und [[scaffolding|Scaffolding]]-Prinzipien direkt infrage stellt. **[[lak2026-hint-button-unproductive-use|An et al.]]** analysierten 999 Lernende über drei Semester im *Decimal Point* ITS und fanden, dass vorzeitige Hinweisanfragen und oberflächliches Hinweislesen konsistent reduzierte [[learning-gains|Lernzuwächse]] vorhersagen, selbst nach Kontrolle auf [[prior-knowledge|Vorwissen]] — ein Befund, der sich mit [[help-seeking|Hilfesuche]] und [[learning-analytics|Learning Analytics]] verbindet.

**Sozio-emotionale Unterstützung kann eher Effizienz als Leistung kaufen.** Das Hinzufügen einer LLM-Achtsamkeitsschicht zu einem Algebratutor der 7. Jahrgangsstufe ließ Lernen und mathematische Zustandsangst zwischen den Armen unverändert (42 von 252 Studierenden analysiert nach Störungen), dennoch erreichten Lernende in der Achtsamkeitsbedingung vergleichbares Lernen mit weniger Zeit und weniger angeforderten Hinweisen ([[mindful-llm-math-tutoring-2026|Rief et al., 2026)]]).

**[[cognitive-diagnosis|Kognitive Diagnose]] und Assessment** erkundet die Fähigkeit von KI, mathematisches Denken zu bewerten. [[razavi-powers-item-difficulty-llm-2026|Razavi und Powers (2026)]] fügen eine großmaßstäbliche Itemschwierigkeitsstudie hinzu, die Mathematik und Lesen umfasst: Über 5,170 Items der Klassenstufen K–5, kalibriert unter dem Rasch-IRT-Modell, korrelierten GPT-4os Zero-Shot-Schwierigkeitsbewertungen mäßig bis stark mit den wahren Schwierigkeiten (r = 0,83 Mathematik, r = 0,81 Lesen), waren aber ungleich über Klassenstufen hinweg, während ein merkmalsbasierter Ansatz (LLM-extrahierte Merkmale in baumbasierte Modelle) Korrelationen bis zu r = 0,87 erreichte, mit Klassenstufe und Wortzahl als Top-Prädiktoren. Die Studie bietet einen praktischen siebenschrittigen Ablauf für Testprofis und mahnt, dass Generalisierbarkeit jenseits von Mathematik und Lesen in K–5 unklar ist. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** benchmarkte 18 LLMs an 3,036 von Lehrenden annotierten Diagnoseurteilen aus handschriftlicher Mathematikarbeit und fand, dass alle Modelle stark unterdurchschnittlich abschneiden (F1 < 0,5), mit systematischer Überattribuierung und Halluzination von Evidenz — und verbindet sich damit mit [[knowledge-tracing|Knowledge Tracing]], [[hallucination-risk|Halluzinationsrisiko]] und [[multimodal|multimodalen]] Assessment-Herausforderungen. **[[representation-robustness-llm-math-problem-solving|Nath et al.]]** zeigten, dass [[llm|LLM]]-Mathematik-[[problem-solving|Problemlösen]] hoch sensitiv gegenüber Oberflächenrepräsentation ist — Modelle drehen Korrektheit über äquivalente Problemformulierungen um —, was [[assessment-validity|Validitäts]]bedenken für KI-basierte Mathematikbewertung aufwirft.

**[[automated-scoring-economics-math-items-nigeria-2026|Olaoye, Owolabi und Olaoye (2026)]]** zeigen einen gegensätzlichen Weg, mathematische Antworten zu bewerten: Ihre Automated Extended Essay Grading Software bewertet erweiterte Antwort-Items in Mathematik in einer Abschlussprüfung der Sekundarstufe in Wirtschaft durch semantische Ähnlichkeit gegen das WAEC-Bewertungsschema, ohne Training auf bewerteten Skripten, und stimmte mit 12 menschlichen Prüfenden bei einer Intra-Klassen-Korrelation von 0.863 (Durchschnittsmaße) überein, mit Pearson-Koeffizienten von 0.604 bis 0.864. Die Übereinstimmung sitzt dort, wo die Noten am niedrigsten sind — die Software erzielte im Mittelwert 5,94 von 20 gegenüber 5,97 für die Bewertenden, jede prüfende Person bewertete nur 84 der 1,008 Skripte, und die Autoren attribuieren die niedrigen Noten der Unvertrautheit der Kandidatinnen und Kandidaten mit rechnerbasiertem Antworten.

**[[student-engagement|Engagement der Studierenden]] und KI-Kompetenz** untersucht, wie Lernende mit KI-Mathematikwerkzeugen interagieren. **[[epistemic-proactivity-math|Abdelghani et al.]]** verfolgten zeitliche Trajektorien der Studierenden-KI-Interaktion im Mathematiklernen und identifizierten einen Entwicklungspfad von oberflächlichem [[prompt-engineering|Prompting]] hin zu „epistemic proactivity" — aktives, [[self-directed-learning|selbstgesteuertes]] Verfolgen konzeptuellen Verständnisses. Das verbindet sich mit [[ai-literacy|KI-Kompetenz]], [[metacognition|Metakognition]] und [[self-regulated-learning|selbstreguliertem Lernen]]. **[[ai-powered-personalized-learning-elementary-fractions-2026|Holman]]** fand, dass KI-adaptive Plattformen das Bruchverständnis für Lernende mit Mathematik-Lernschwierigkeiten signifikant verbesserten, und verbindet sich damit mit [[personalized-learning|personalisiertem Lernen]] und [[adaptive-learning|adaptivem Lernen]].

**Unterstützung der Lehrenden** erkundet KI-Werkzeuge für Mathematiklehrende. **Rollenspiel mit simulierten Lernenden** dient auch der Praxis von Lehrenden: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang und Zhang (2025)]] bauten *Student GPT*, einen eigenen ChatGPT-[[conversational-ai|Chatbot]], der eine Mittelstufen-lernende Person mit verbreiteten [[misconceptions|Missverständnissen]] im Verhältnisschlussfolgern spielte, und gaben angehenden Mathematiklehrenden der Sekundarstufe risikoarme Praxis darin, das Denken der Lernenden zu diagnostizieren und zu korrekten Lösungen hin zu lenken — und illustrieren damit [[generative-ai|GenAI]]-gestützte [[simulation|Simulation]] als Ergänzung zu kostspieligen Plattformen wie TeachLivE für den Aufbau pädagogischen Inhaltswissens über Missverständnisse der Lernenden.

Die einzige feldebene Synthese dieses Gebiets in der Wissensbasis ist ein PRISMA-Review von 42 Studien (2021–2025), gescreent aus 922 Datensätzen (Cohen's Kappa = 0,88), und er fügt eine Kategorie hinzu, die den Clustern der Seite sonst fehlt: Lehrenden gerichtete Automatisierung, wo MATH41 rasche Produktion von Mathematikaufgaben für Lernende auf verschiedenen Stufen unterstützt und das hybride Modell CognifyNet die Aktivitätsmuster der Studierenden analysiert, damit Lehrende aufkommende Schwierigkeiten früh erkennen können. Derselbe Review verortet den blinden Fleck des Felds — mit Bildung bei 60% und Informatik bei 28% der Studiendomänen fiel nur eine Studie unter Psychologie, wodurch emotionale Wirkung, Vertrauen und Ethik vergleichsweise untererkundet bleiben —, und besteht darauf, dass technische Fähigkeit nicht mit demonstrierter Kursraumwirksamkeit gleichzusetzen ist. ([[ai-mathematics-education-prisma-review-2026]])

**Mathematik in der Hochschulbildung** erkundet die Wirkung von KI auf fortgeschrittene mathematische Praxis. **[[genai-runaway-object-math-higher-ed|Bui et al.]]** wandten [[sociocultural-learning|soziokulturelle]] Theorie auf [[generative-ai|GenAI]] in der Universitätsmathematik an und analysierten KI als „runaway object", der akademische Praxis auf Weisen transformiert, die [[governance|institutionellen]] und pädagogischen Normen vorauseilen.

**LLM-Tutoring und [[learning-design|Unterrichtsdesign]]** ist ein aufkommendes Cluster von zwei Studien aus 2026, die die Mathematik-Evidenzbasis verschärfen. [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu und Sun (2026)]] entwickelten ein regelgelenktes [[intelligent-tutoring|LLM-Tutoringsystem]] für Mathematik-Textaufgaben der Grundschule, dessen dreischichtige Architektur (Diagnose → Absichtsauswahl → eingeschränkte Antworterzeugung) die Interaktionskonsistenz verbesserte und vorzeitiges Antwortgeben in einem Piloten mit 40 Lernenden der 5. Jahrgangsstufe reduzierte — ein Beleg dafür, dass prozedurale Mathematikdomänen [[guardrails|strukturierte Regelwächter]] für ansonsten stochastisches LLM-Scaffolding brauchen. [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao und Wang (2026)]] wandten ein Smart-Classroom-Modell auf Mathematik-Studierende im M.Ed. an und fanden statistisch signifikante Zuwächse (p < .05) im Design von Unterrichtszielen über die Dimensionen Curriculum-Standards, Lehrbuch und Studierendenbedingungen hinweg.

Promptdesign ist selbst ein messbarer Hebel: Am MathDial-Benchmark erhöhte ein pädagogisch informierter sokratischer „Tutor Prompt" Success@N und senkte Telling@N scharf gegenüber einem Basis-Prompt, sowohl für GPT-4o als auch GPT-4o-mini ([[chudziak-ai-math-tutoring-platform|Chudziak & Kostka (2025)]]).

**[[generative-ai|GenAI]] für mathematische Modellierungsaufgaben** erweitert den Generierungsstrang über Routineübungen hinaus. Eine KI-gestützte Plattform, entwickelt durch den ADDIE-Ansatz, nutzte direkte Variation in Mathematik der Sekundarstufe als illustratives Thema und adressierte damit den Zeit- und Ressourcenmangel von Lehrenden, hochwertige Modellierungsaufgaben zu entwerfen: Bestehende Werkzeuge produzieren typischerweise konventionelle Textaufgaben oder Routineübungen, während die Plattform darauf zielte, Ressourcen zu erzeugen, die mathematische Modellierungskompetenzen fördern, verankert in etablierten Designprinzipien und [[prompt-engineering|retrieval-augmented generation]].

- **Visuelle Gedankenkette: die [[agency|Autonomie]]lücke in der Geometrie.** GeoVAD-Bench diagnostiziert intermediäre visuelle Hilfen statt Endergebnisse über 600 Hilfskonstruktionsprobleme (200 leicht, 200 mittel, 200 schwer) und findet ein konsistentes Muster: Das Bereitstellen des Referenz-Hilfsdiagramms verbessert die Genauigkeit bescheiden (+3,3, +3,0, +7,0 Punkte über drei Modelle), während es dem Modell überlassen zu bleiben, seine eigene Hilfslinie auf dem Weg zur richtigen Antwort zu konstruieren, die Lücke um 10,0 bis 13,5 Punkte erweitert, wobei zwei Modelle schlechter abschneiden, als hätten sie gar kein visuelles Schlussfolgern gehabt. Vier Prozessfehlerkategorien erklärten 93,1% und 89,7% der attribuierten Fehlschläge. Für [[problem-solving|Problemlösen]]-Instruktion ist der Befund, dass diagrammatisches Scaffolding getrennt von Antwortgenauigkeit trainiert und evaluiert werden muss. ([[geovad-bench-visual-chain-of-thought-geometry-2026]])
- **KI-anfällige Probleme verlieren Lernzeit und Behalten.** Ein zehnjähriges Panel von 3,2 Millionen ALEKS-Interaktionen fand, dass die Lernzeit bei textbasierten Textaufgaben — jenen, die am leichtesten in KI-Prompts transkribierbar sind — nach ChatGPTs Veröffentlichung um 26,9% fiel, während aufgesehene Behaltensitems einen Rückgang der Chancen einer richtigen Antwort um 25% zeigten ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026)]]).
- **Lernende schätzen unmittelbares Feedback, aber optionale Übungsplattformen bleiben ungenutzt.** Von 157 Lernenden sahen [[genai-practice-platform-maths-feedback-2026|Chen et al. (2026)]] 95 sich registrieren und nur 34 eine Frage versuchen; Nutzerinnen und Nutzer bewerteten Engagement am höchsten (79% Zustimmung), während nur 42% die Plattform gegenüber dem bestehenden Aufgabenheft bevorzugten.
- **KI kann Leistung erhöhen und gleichzeitig eine Geschlechterlücke erweitern.** In einem sechswöchigen Quasi-Experiment mit 115 nigerianischen Oberstufenlernenden erhöhte ChatGPT-Feedback die Leistung bei quadratischen Gleichungen gegenüber konventionellem Unterricht (29,18 gegenüber 24,06), dennoch übertrafen männliche Lernende weibliche (30,95 gegenüber 25,16), trotz fehlenden Geschlechterunterschieds in der Selbstwirksamkeit — eine Gerechtigkeitsmahnung für KI-Unterstützung in Mathematik ([[ai-generated-responses-achievement-self-efficacy-2026|Oladayo & Diri, 2026)]]).

### Verbindungen zu verwandten Konzepten

Mathematikbildung sitzt innerhalb der breiteren Domäne [[stem-education|STEM]] mit unverwechselbaren Verbindungen zu [[intelligent-tutoring|intelligentem Tutoring]] und [[intelligent-tutoring|AI Tutoring]] durch die starke Tradition kognitiver Tutoren und ITS-Forschung in Mathematik, zu [[scaffolding|Scaffolding]] durch die Literatur zu produktivem Ringen und Hinweisnutzung, zu [[affective-computing|affective computing]] durch Mathematikangst und emotionsbewusstes Tutoring, zu [[knowledge-tracing|Knowledge Tracing]] und [[assessment-validity|Validität von Assessments]] durch kognitive Diagnose- und Assessmentforschung und zu [[teacher-role|Lehre]] durch Zusammenarbeit zwischen Lehrkräften und KI im Mathematikunterricht. Die Verbindung zu [[k-12|K-12]] ist besonders stark — viele der Mathematikartikel betreffen K-12-Kontexte —, während Verbindungen zu [[higher-ed|Hochschulbildung]] in Lehrkräftevorbereitung und fortgeschrittener mathematischer Praxis auftauchen.

## Implikationen für Mathematiklehrende

- **Behandeln Sie KI-Tutoring als Hebel auf Hilfesuche, nicht als Fähigkeitsfix.** [[lak2026-hint-button-unproductive-use|Hinweisnutzungsforschung]] zeigt, dass vorzeitige Hinweisanfragen und oberflächliches Hinweislesen niedrigere Zuwächse vorhersagen — daher zählt das Design von *wann und wie* Lernende KI-Hilfe suchen mehr als rohe Tutorfähigkeit. Ermutigen Sie Lernende, vor dem Fragen zu versuchen, und bringen Sie Hilfe im Moment des Bedarfs an die Oberfläche statt auf Anfrage.
- **Schützen Sie produktives Ringen.** [[zhang-tutormoments-2026|TutorMoments]] findet, dass Modelle zu Überfürsorglichkeit voreingestellt sind und selten auf Rigorität drängen; konfigurieren Sie KI-Unterstützung so, dass sie stützt statt löst, und beobachten Sie Antwortersetzung, die Schlussfolgern erodiert.
- **Behandeln Sie KI-Diagnoseausgabe nicht als Grundwahrheit.** [[llm-cognitive-diagnosis-handwritten-math|MathCog]] zeigt, dass LLMs bei der Diagnose mathematischen Denkens unterdurchschnittlich abschneiden (F1 < 0,5), mit Überattribuierung und halluzinierter Evidenz; nutzen Sie KI-Diagnose als Anregung, sie gegen die tatsächliche Arbeit der lernenden Person zu verifizieren.
- **Hüten Sie sich vor Fragilität des Oberflächenformats bei KI-Bewertung.** [[representation-robustness-llm-math-problem-solving|Repräsentationssensitivität]] bedeutet, dass äquivalente Probleme KI-Antworten umdrehen können — ein Validitätsrisiko für KI-basiertes Mathematik-Assessment; bevorzugen Sie [[human-in-the-loop-ai|menschliche Prüfung]] bei hochstrapazierter Bewertung.
- **Nutzen Sie KI, um die Hürde für personalisierte Übung zu senken.** [[ai-powered-personalized-learning-elementary-fractions-2026|Adaptive Plattformen]] verbesserten das Bruchverständnis für Lernende mit Mathematik-Lernschwierigkeiten; setzen Sie KI-adaptive Werkzeuge selektiv für Lernende ein, die differenzierte Unterstützung brauchen.
- **Behalten Sie die Kontrolle der Lehrkraft über KI-generierte Unterrichtsmaterialien.** [[teacher-control-ai-generation-math-visuals|Kontrolle der Lehrkraft über KI-Visualisierungen]] stützt ein Rahmenwerk, das KI-Effizienz mit pädagogischer Korrektheit ausbalanciert.

## Verbundene Konzepte

- [[stem-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[k-12]]
- [[higher-ed]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[help-seeking]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[assessment-validity]]
- [[multimodal]]
- [[hallucination-risk]]
- [[cognitive-offloading]]
- [[teacher-role]]
- [[educational-development]]
- [[generative-ai]]
- [[discipline-specific-aied]]
- [[teacher-education]]

## Verbundene Artikel

- [[ai-mathematics-education-prisma-review-2026]] — Artificial intelligence in mathematics education: A PRISMA-based systematic literature review (2021-2025)
- [[automated-scoring-economics-math-items-nigeria-2026]] — Automated software scoring of senior school certificate examination mathematical items in economics using a contextual similarity model
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[chudziak-ai-math-tutoring-platform]] — AI-powered math tutoring platform (Chudziak & Kostka 2025)
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[zhang-tutormoments-2026]]
- [[lak2026-hint-button-unproductive-use]]
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[representation-robustness-llm-math-problem-solving]]
- [[epistemic-proactivity-math]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[teacher-control-ai-generation-math-visuals]]
- [[ai-tpack-preservice-math-teachers]]
- [[genai-runaway-object-math-higher-ed]]
- [[generative-ai-reduced-study-time-math]] — ALEKS mastery platform: text-based problems most AI-susceptible
- [[mujib-ai-ibl-creative-math-2026]] — KI-unterstütztes IBL und kreative mathematische Leistung
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred scaffolding in AI-supported mathematical modeling
- [[instructional-design-proficiency-masters-math-2026]] — Smart-classroom model and D-T-E loop improving M.Ed. instructional design proficiency in mathematics (Zhu et al. 2026)
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Rule-guided vs ad-hoc scaffolding in an LLM tutoring system for primary mathematics (Looi et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[gpt4-handwritten-math-exam-grading-2026]] — GPT-4 grading of semi-open handwritten university mathematics answers
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — semantic knowledge-concept annotation and RL exercise sequencing on K-12 math corpora
- [[misconception-acquisition-dynamics-llms-2026]] — algebra mal-rule training dynamics in language models
- [[genai-practice-platform-maths-feedback-2026]] — Optionale GenAI-Übungsplattform in einer Mathematikklasse mit 157 Lernenden: unmittelbares Feedback geschätzt, Nutzung auf 34 aktive Nutzerinnen und Nutzer begrenzt
- [[ai-generated-responses-achievement-self-efficacy-2026]] — Assessing the Influence of AI-Generated Responses on Academic Achievement: An Ethical Perspective and Self-Efficacy
