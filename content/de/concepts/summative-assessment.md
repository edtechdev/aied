---
title: Summatives Assessment
created: "2026-08-19T17:30:00-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
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

> **Summatives Assessment** — Assessment, das genutzt wird, um zu bewerten und zu zertifizieren, was eine lernende Person am Ende einer Einheit, eines Kurses oder eines Programms gelernt hat, im Gegensatz zu [[formative-assessment|formativem Assessment]], das das Lernen während des Unterrichts unterstützt. Summatives Assessment nimmt typischerweise die Form hochriskanter Prüfungen an — schriftlich, mündlich, beaufsichtigt oder geschlossen —, die Noten vergeben, das Voranschreiten steuern und Kompetenz zertifizieren. Im KI-Zeitalter ist summatives Assessment zu einem zentralen Kampffeld über [[academic-integrity|akademische Integrität]] und Validität geworden: [[generative-ai|generative KI]] kann Leistung an unbeaufsichtigten oder Take-home-Aufgaben aufblähen, was die Wahl des summativen Formats — und wie es KI-Substitution widersteht — zu einer entscheidenden Designentscheidung macht.

## Fragen zum Nachdenken

- Summatives Assessment zertifiziert, was eine studierende Person am Ende eines Kurses gelernt hat, während formatives Assessment das Lernen während seiner unterstützt. Wo haben Sie die Grenze zwischen diesen beiden verschwimmen sehen, und warum könnte es zählen, dass sie unterschiedliche Funktionen erfüllen?
- Die Seite rahmt generative KI als summatives Assessment in zwei Richtungen zugleich umformend: KI benotet Prüfungen, und Studierende nutzen KI, um prüfungsbasierter Messung zu entgehen. Welcher dieser zwei Drucke erscheint Ihnen als die größere Bedrohung für die Validität, und warum?
- Wenn unbeaufsichtigte oder Take-home-Aufgaben Validität verlieren, weil KI die Antworten erzeugen kann, was bedeutet das dann dafür, wie Assessments gestaltet werden sollten — und was könnte dabei geopfert werden?
- [[research-methods-aied|Forschung]], die auf der Seite zitiert wird, findet, dass LLMs Aufsätze nicht so benoten wie Menschen. Wenn automatisierte Benotung schnell und konsistent ist, aber anders benotet, ist das ein [[bias-mitigation|Fairness]]problem, eine Gelegenheit, oder beides?
- Was bedeutet ein hochriskantes Ergebnis (eine Note, ein Zertifikat, eine Zulassung), wenn die Arbeit dahinter von KI hätte erzeugt werden können? Wie würden Sie ein Assessment entwerfen, dem Sie tatsächlich vertrauen könnten?

## Einführung

Summatives Assessment erfüllt eine grundsätzlich andere Funktion als formatives Assessment: es misst und zertifiziert Leistung, statt nächste Schritte anzuleiten. Es umfasst Tests am Einheitenende, Abschlussprüfungen, standardisierte und hochriskante Tests (z. B. Aufnahmeprüfungen), mündliche Verteidigungen, und kumulative Leistungsassessments. Weil summative Ergebnisse echte Konsequenzen tragen (Noten, Voranschreiten, Zertifikate, Universitätszulassung), sehen sie sich im KI-Zeitalter besonderem Druck ausgesetzt — sowohl als *Ziele* automatisierter Benotung als auch als *verletzliche* Maße, die Studierende möglicherweise mithilfe generativer KI zu überlisten suchen.

## Der Einsatz im KI-Zeitalter: Validität und Integrität

Die Forschung der Wissensbasis dokumentiert, wie generative KI die Landschaft summativen Assessments grundsätzlich in zwei Richtungen umgeformt hat: KI wird genutzt, um Prüfungen im großen Maßstab zu **benoten**, und KI kann von Studierenden genutzt werden, prüfungsbasierter **Messung** ihres eigenen Lernens zu **entgehen**.

- **KI als Benotende.** Summatives Assessment verlässt sich zunehmend auf [[automated-assessment|automatisierte Benotung]] von Prüfungen, Aufsätzen und Kurzantworten. [[llms-do-not-grade-essays-like-humans-2026|Forschung zur LLM-Aufsatzbenotung]] findet, dass [[llm|LLMs]] Aufsätze nicht so benoten wie Menschen, was Validitäts- und Fairnessfragen für hochriskante automatisierte Benotung aufwirft. [[llm-automated-assessment-student-self-explanations|LLMs, die Selbsterklärungen von Studierenden bewerten]], und [[cong-confidence-asag-2026|automatische Kurzantwortbenotung]] erkunden die Verlässlichkeit von LLM-Benotung in summativen Kontexten, während [[psyscore-essay-scoring-zpd-feedback|psychometrisch bewusste Rahmenwerke]] danach streben, automatisierte Benotung vertrauenswürdig und adaptiv zu halten. Eine handschriftliche Allgemeine-Chemie-Prüfung mit 296 Studierenden illustriert, warum selektive Aufsicht nötig ist: die Übereinstimmung des multimodalen LLM im Gesamtwert mit TA-Benotung war hoch (R² = 0.91), doch variierte die Verlässlichkeit auf Item-Ebene scharf nach Format, und falsch Positive Ergebnisse (KI, die echt falsche Antworten gutschreibt) gehen tendenziell unentdeckt, weil Studierende sie selten anfechten — weshalb ein einheitlicher „benote alles“-KI-Benotender für hochriskante Nutzung nicht vertretbar ist ohne zuversichtsbasiertes Zurückstellen an Menschen ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Übereinstimmung im Ergebnis kann ungenaue Item-Benotung überleben.** Gegen moderierte offizielle Benotungen korrelierte ein multimodales LLM, das 10,364 handschriftliche Seiten der Physikolympiade und von Universitäten benotete, bei r = 0.93–0.96 und rekonstruierte dasselbe fünfköpfige internationale Team, obwohl die genaue Übereinstimmung bei Aufgabenteilen 70% erreichte — ein Benotender wird an den Entscheidungen gemessen, die er informiert ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **KI als Umgehung.** Weil generative KI Antworten auf schriftliche Fragen erzeugen kann, verlieren unbeaufsichtigte und Take-home-summative Aufgaben Validität: [[generative-ai-reduced-study-time-math|beaufsichtigte, ungestützte Maße sind unverzichtbar]], weil unbeaufsichtigte Leistung durch KI aufgebläht ist, und [[generative-ai-guardrails-harm-learning|mit Leitplanken versehene (Hinweis-statt-Antwort) Werkzeuge]] können die Prüfungsstrafe beseitigen, die unbewachte KI verursacht. [[chirikov-ai-grade-inflation-2026|Chirikovs (2026)]] Quasi-Experiment an über 500,000 Noten macht den Mechanismus konkret: nach der Veröffentlichung von ChatGPT sahen Kurse mit mehr KI-exponierten Aufgaben den Anteil der A-Noten um 13 Prozentpunkte steigen, und der Effekt konzentrierte sich auf **hausaufgabenlastige Kurse** (zusätzliche 16 pp in der Dreifachdifferenz-Schätzung) — direkte Evidenz dafür, dass unbeaufsichtigte Hausaufgaben, nicht echte [[learning-gains|Lernzugewinne]], der Ort sind, wo KI summative Ergebnisse aufbläht.
- **KI-erzeugte Prüfungen.** [[assessing-quality-ai-generated-exams-field-2025|Eine groß angelegte Feldstudie]] und [[ai-vs-human-assessment-efl-tpck-2026|EFL-Assessment-Forschung]] untersuchen, ob KI hochwertige Prüfungen und Assessmentaufgaben *erzeugen* kann — eine aufkommende summativ-designende Nutzung von KI.

## KI-resistente summative Formate

Ein zentrales Thema in der Wissensbasis ist, dass **summatives Format KI-Widerstand bestimmt** — je mehr eine Aufgabe live, persönlich, individuell gesondierte Leistung verlangt, desto schwerer ist es für Studierende, KI für ihr eigenes Lernen zu substituieren.

- **Mündliche Prüfungen und Assessments.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] argumentiert, die mündliche Prüfung sei ein technisch einfaches, inhärent KI-resistentes summatives Format: ihr interaktiver Dialog in Echtzeit prüft Verständnis, [[critical-thinking|kritisches Denken]] und Schlussfolgern statt Auswendiglernen, hindert Studierende daran, KI zu nutzen, um Antworten zu erzeugen und auswendig zu lernen, und spiegelt professionelle Praxis. [[socratic-tests-conversational-assessment|Sokratische Tests]] und [[code-review-genai-cs1|Code-Review-Interviews]] erweitern dies auf dynamisches, konversationelles und interviewbasiertes summatives Assessment.
- **Geschlossene, beaufsichtigte, ungestützte Maße.** [[generative-ai-reduced-study-time-math|Evidenz]] und [[stromberg-generative-ai-learning-penalty-secondary-2026|groß angelegte Felddaten]] zeigen, dass beaufsichtigte geschlossene Prüfungen — nicht aufgeblähte Hausaufgaben oder Take-home-Arbeit — das verlässliche Signal tatsächlichen Lernens sind, wenn Studierende KI nutzen. Rahmenwerke für [[responsible-assessment-ai-era-stanford-2026|verantwortungsvolles Assessment]] betten diese ungestützten Maße in eine validitätsgetriebene Neugestaltung ein. Wo Prüfungen online bleiben, übernimmt [[remote-proctoring|Fernaufsicht]] diese Rolle, und die zwei Reviews des Korpus zu automatisierter Aufsicht finden Datenschutz- und [[bias-mitigation|Fairness]]bedenken neben Detektionsgewinnen ([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).

- **Eine verletzliche Aufgabe mit einem bestätigenden Zwilling paaren.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] behalten eine GenAI-verletzliche Aufgabe wegen ihres Lernwerts, paaren sie aber mit einer zweiten Aufgabe, die dieselben Ergebnisse bewertet, und machen die Benotung durch einen bestätigenden Schwellenwert oder eine Gewichtung interdependent, sodass der Zwilling das Ergebnis zertifiziert.
## Hochriskantes und standardisiertes summatives Assessment

Hochriskantes summatives Assessment — Aufnahmeprüfungen, standardisierte Tests und Zertifizierung — trägt überproportionale Konsequenzen und ist ein Fokus der Sorge im KI-Zeitalter. [[stromberg-generative-ai-learning-penalty-secondary-2026|Die Studie zur Lernstrafe generativer KI]] maß Ergebnisse an Aufnahmeprüfungen für die Oberstufe (Zhongkao) und die Hochschule (Gaokao) und fand, dass die Aufnahmeprüfungswerte nach längerer KI-Nutzung um 18–24% fielen. [[brcic-effortless-trap-productive-struggle-2026|Die Effortless Trap]] und [[genai-performance-vs-learning|Leistung-gegenüber-Lernen-Forschung]] warnen, dass Zugewinne bei KI-assistierten Aufgaben nicht auf ungestützte hochriskante Maße übertragen.

## Summativ gegenüber formativ im KI-Zeitalter

Die Assessmentliteratur der Wissensbasis betont konsistent, dass [[assessment|Assessment]] am wirksamsten ist, wenn es [[formative-assessment|formative]] und summative Funktionen verbindet — aber das KI-Zeitalter verschärft die Unterscheidung. Weil KI Leistung an Aufgaben mit geringem Risiko, unbeaufsichtigten und prozessverborgenen Aufgaben aufbläht, werden **summative (besonders beaufsichtigte/geschlossene/persönliche) Maße zur entscheidenden Prüfung** darauf, ob Lernen tatsächlich stattfand. Das motiviert eine Neugestaltung des Assessments, die authentische, KI-resistente summative Aufgaben (mündliche Prüfungen, Code-Review-Interviews, beaufsichtigte Prüfungen, prozessbasierte [[eportfolio|Portfolios]]) als Anker der [[academic-integrity|Integrität]] behält, während formatives Assessment genutzt wird, um das Lernen unterwegs zu stützen. Siehe [[authentic-assessment|authentisches Assessment]] für die konstruktive Designantwort.

## Implikationen für KI in der Bildung

- **Summatives Format ist ein Hebel für Validität und Integrität:** KI-resistente summative Formate (mündlich, beaufsichtigt, geschlossen, persönlich) bewahren die Verbindung zwischen bewerteter Leistung und tatsächlichem Lernen.
- **Beaufsichtigte/ungestützte Maße sind das verlässliche Signal:** wenn Studierende KI nutzen, offenbaren ungestützte summative Prüfungen — nicht Hausaufgaben — echtes Lernen.
- **Automatisierte Benotung braucht psychometrische Prüfung:** LLMs zu nutzen, um hochriskante Prüfungen zu benoten, verlangt die Bewertung von Verlässlichkeit, Fairness und Validität, nicht nur Genauigkeit.
 Benotungsfehler ist auch notenabhängig: über 32 Einreichungen bei einer Prüfung in öffentlicher Gesundheit vermieden die LLMs die Enden der Skala — kein E oder F erschien im schnellen Modus —, während das beste Modell die menschliche Note bei 50.0% exakt und innerhalb ±1 Note bei 90.6% traf ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **KI kann auch Prüfungen erzeugen:** KI-assistierte Erzeugung von Prüfungen und Aufgaben ist eine aufkommende summativ-designende Anwendung, die selbst Qualitätsbewertung braucht.
- **Den Zweck der Benotung überdenken, nicht nur das Format.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] kritisieren traditionelle summative, normreferenzielle Benotung dafür, oberflächliches, fragmentiertes Lernen zu fördern, Studierenden wenig Kontrolle oder Transparenz zu geben, intrinsische [[motivation|Motivation]] zu schädigen, Stress und [[well-being|Angst]] zu befeuern und Ungerechtigkeiten zu verewigen, während sie weitgehend Abruf bewertet statt Anwendung in der echten Welt. Sie positionieren Neubewertung, [[mastery-learning|standardsbasierte Benotung]] und Ungrading als auf Benotung fokussierte Innovationen, die summative schwere Praxis abmildern können, während sie anerkennen, dass diese in der Managementbildung wegen normativer Barrieren marginal bleiben — Benotung auf einer Kurve, externes Signalisieren (Ranglisten, Praktika, Akkreditierung) und instrumentelle Denkweise der Studierenden —, und empfehlen inkrementelles Experimentieren mit institutioneller Unterstützung.

## Verbundene Konzepte

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## Verbundene Artikel
- [[llm-grading-assistants-public-health-2026]] — LLM graders compress the grade scale and avoid the extremes in high-stakes essay assessment

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant summative assessment
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — The generative AI learning penalty: proctored/closed-book exam evidence
- [[chirikov-ai-grade-inflation-2026]] — AI task displacement as a mechanism of grade inflation; homework-heavy courses (Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — Faster completion, less learning: proctored measures essential
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails harms learning
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans
- [[llm-automated-assessment-student-self-explanations]] — LLMs for automated assessment of student self-explanations
- [[cong-confidence-asag-2026]] — Automatic short-answer grading
- [[psyscore-essay-scoring-zpd-feedback]] — Psychometrically-aware trait-adaptive essay scoring
- [[socratic-tests-conversational-assessment]] — Socratic tests: dynamic, conversational, multimodal assessment
- [[code-review-genai-cs1]] — Code review interviews in CS1
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[test-driven-ai-assisted-learning]] — Test-driven AI-assisted learning
- [[genai-oop-programming-assessments-2026]] — GenAI performance on object-oriented programming assessments
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: productive struggle and the illusion of learning
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated versus human-developed assessment tasks in EFL
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
