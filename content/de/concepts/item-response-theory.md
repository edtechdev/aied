---
title: Item-Response-Theorie
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
translation_of: concepts/item-response-theory
source_updated: "2026-10-05T08:24:47-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Item-Response-Theorie (IRT)** – eine Familie psychometrischer Modelle, die latente Fähigkeit aus Itemantworten schätzen, indem sie die Beziehung zwischen der Fähigkeit eines Lernenden und der Wahrscheinlichkeit modellieren, jedes Item korrekt zu beantworten. IRT modelliert Itemschwierigkeit und Trennschärfe und ermöglicht Messpräzision und adaptives Testen. Im KI-Zeitalter trifft IRT auf [[llm|LLMs]] in [[llm-item-difficulty-prediction]] und [[llm-psychometric-calibration-cdp]]: KI sagt Itemschwierigkeit vorher und kalibriert sie, was die Messpräzision potenziell verbessert und [[adaptive-learning|adaptives Lernen]] speist.

## Fragen zum Nachdenken

- Die Item-Response-Theorie behandelt Fähigkeit und Itemschwierigkeit als gemeinsam aus Antwortmustern geschätzt, statt einen rohen Testscore als das Maß zu behandeln. Wie könnten sich zwei Studierende mit derselben Anzahl richtiger Antworten tatsächlich in der Fähigkeit unterscheiden?
- IRT lässt Sie Lernende auf einer gemeinsamen Skala vergleichen und Präzision pro Person schätzen. Warum könnte es mehr zählen, die Schwierigkeit und Trennschärfe eines Items zu kennen, als nur zu wissen, ob ein Studierender es richtig hatte?
- Eine Studie nutzte IRT-Person-Fit-Statistiken, um menschliche von KI-generierten Antworten in Multiple-Choice-Tests zu unterscheiden – und markierte KI-Antworten als „abweichend“. Wie könnte dieselbe Messmaschinerie, die Lernen bewertet, auch akademische Integrität kontrollieren?
- [[research-methods-aied|Forschende]] nutzen IRT, um zu validieren, dass KI-generierte Prüfungsfragen in Schwierigkeit und Trennschärfe zu von Experten geschriebenen passen. Wenn eine KI ein Item schreibt, das „gut aussieht“, warum ist empirische Kalibrierung gegen angepasste IRT-Parameter dann noch nötig?
- Wenn KI Itemschwierigkeit vorhersagt und kalibriert: Was kann schiefgehen, wenn die Schwierigkeitsschätzung eines Modells nicht gegen echte Antwortdaten von Studierenden validiert wird?
- IRT verbindet sich mit adaptivem Testen und Knowledge Tracing – Ihre Antworten nutzen, um zu wählen, was als Nächstes gefragt wird. Wie ermöglicht es die Schätzung Ihrer Fähigkeit aus jeder Antwort, dass ein Test kürzer und präziser wird statt bloß länger?

## Einführung

IRT behandelt Fähigkeit (θ) und Itemparameter (Schwierigkeit, Trennschärfe, manchmal Raten) als gemeinsam aus Antwortmustern geschätzt, statt einen rohen Score als das Maß zu behandeln. Das macht es möglich, Lernende auf einer gemeinsamen Skala zu vergleichen, Items adaptiv auszuwählen und Präzision pro Person statt global zu schätzen.

### Wie IRT in der Forschung auftritt

- **KI-vorhergesagte Schwierigkeit:** [[llm-item-difficulty-prediction|LLM-Itemschwierigkeitsvorhersage]] nutzt Sprachmodelle, um Itemschwierigkeit zu schätzen, was gegen empirisch angepasste IRT-Parameter validiert werden muss.
- **Psychometrische Kalibrierung:** [[llm-psychometric-calibration-cdp|LLM-psychometrische Kalibrierung]] richtet modellbasiertes Assessment an IRT-basierter Messung aus, damit KI-generierte Antworten Messeigenschaften bewahren.
- **Knowledge Tracing und Modellierung von Studierenden:** IRT ist eng verwandt mit [[knowledge-tracing|Knowledge Tracing]] und [[student-modeling|Modellierung von Studierenden]] – Modelle, die das Wissen von Lernenden über die Zeit verfolgen –, und teilt das Ziel, unbeobachtbare Lernendenzustände aus beobachtbaren Antworten zu schätzen.

- **IRT-Größen aus LLM-Logits ausgelesen.** [[huang-interpretable-knowledge-tracing-2026|Huang et al. (2026)]] extrahieren Studierendenfähigkeit θ = z^GOOD − z^BAD und Tutorzug-Schwierigkeit d = z^HARD − z^EASY aus Next-Token-Logits und kombinieren sie in einem 1PL-Rasch-Prädiktor, wodurch dialogbasiertes Knowledge Tracing interpretierbar wird (64,29% Genauigkeit, 65,25 AUC auf QATD2k).
- **Bayesianische hierarchische Feldvalidierung:** [[assessing-quality-ai-generated-exams-field-2025|Assessment KI-generierter Prüfungen]] nutzt ein bayesianisches hierarchisches 2PL-IRT-Modell (mit Pre-Test-Ankeritems, um 1.686 Studierende auf eine gemeinsame θ-Skala zu setzen), um zu zeigen, dass KI-generierte Fragen in Schwierigkeit und Trennschärfe zu von Experten geschriebenen standardisierten Prüfungsitems passen – eine groß angelegte Demonstration von IRT als Validierungsrückgrat für [[automated-question-generation|automatisierte Aufgengenerierung]].
- **Testinformation lokalisiert Präzision.** Ein 20-items Test zur GenAI-Kompetenz, validiert mit einem 2PL-Modell (RMSEA = 0,03, CFI = 0,97), hatte seine Informationsfunktion bei θ = −0,8 am höchsten, wodurch er für Lernende mit niedriger bis moderater Kompetenz am präzisesten war statt gleichmäßig über die Skala ([[jin-glat-genai-literacy-assessment|Jin et al. (2025)]]).

- **Menschliche von GenAI-Antworten mit Person-Fit-Statistiken trennen:** [[irt-human-genai-mcq-responses|Strugatski und Alexandron (2026)]] wenden Person-Fit-Statistiken (PFS) innerhalb von IRT an, um menschliche von [[generative-ai|generative KI]]antworten in Multiple-Choice-Assessments zu unterscheiden. PFS markieren GenAI-Antworten in zwei authentischen Kontexten (einem [[chemistry-education|Chemie]]test und einer nationalen Prüfung) als „abweichende“ Antwortende, zeigen, dass verschiedene [[conversational-ai|Chatbots]] unterschiedliche Antwortmuster erzeugen (eine heterogene Gruppe von „Intelligenzen“), und offenbaren, dass neuere GenAI-Versionen menschenähnlicher werden –, was IRT als robustes Rahmenwerk für [[academic-integrity|Integrität]]screening in folgenreichen Tests positioniert.

- **Dieselben Items messen für ein LLM womöglich nicht dasselbe latente Konstrukt.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld und Alexandron (2026)]] verglichen menschliche und LLM-Faktorenstrukturen über zwei Instrumente mit explorativer Faktorenanalyse und Kongruenzabgleich; die LLM-Mensch-Ähnlichkeit blieb verlässlich unter der Mensch-Mensch-Baseline, daher transferieren an Menschen angepasste IRT-Parameter nicht automatisch.

- **LLM-Schwierigkeitsschätzung gegen Rasch-IRT-Parameter:** [[razavi-powers-item-difficulty-llm-2026|Razavi und Powers (2026)]] evaluieren, ob GPT-4o die Schwierigkeit von K-5-Mathematik- und Lese-Assessmentitems schätzen kann (N = 5.170), die unter dem Rasch-IRT-Modell kalibriert wurden. Ein Zero-Shot-Direktschätzansatz korrelierte moderat bis stark mit den wahren Rasch-Schwierigkeiten (r = 0,83 Mathematik, r = 0,81 Lesen), war aber ungleichmäßig über die Klassenstufen und für die Klassen K und 1 oft nicht besser als eine Dummy-Regression auf den Klassenmittelwert, wahrscheinlich wegen Bereichsbeschränkung bei Schwierigkeiten in unteren Klassenstufen. Eine merkmalsbasierte Strategie – LLM-extrahierte kognitive und sprachliche Merkmale, gespeist in baumbasierte Modelle – übertraf die Direktschätzung (Korrelationen bis r = 0,87), wobei Klassenstufe und Wortzahl die stärksten Prädiktoren waren. Die Studie unterstreicht, dass LLM-Schwierigkeitsschätzungen gegen empirisch angepasste IRT-Parameter validiert werden müssen, und dass strukturierte Merkmalsextraktion die Vorhersage schärfen kann, wo ganzheitliches Zero-Shot-Urteil zu kurz greift.
- **Schwierigkeit erklären statt vorhersagen.** [[explaining-question-difficulty-natural-language-2026|Cui et al. (2026)]] passten ein 1PL-Rasch-Modell auf LLM-Antwortaufzeichnungen für GSM8K (1.319 Fragen), BBH-structured (1.396) und WinoGrande (1.267) an, mit 5.000 Modellen für GSM8K und WinoGrande und 3.811 für BBH-structured. Dann ließen sie ein LLM Hypothesen in natürlicher Sprache dafür vorschlagen, warum ein Item schwerer ist als ein anderes, und wählten sie aus mit L1-regulierter Regression auf zurückgehaltenen Fragen. Allein auf ungesehenen Fragen genutzt erreichen die ausgewählten Hypothesen R² = 0,373 auf GSM8K, 0,580 auf BBH-structured und 0,090 auf WinoGrande, das Beste der verglichenen Methoden auf GSM8K und WinoGrande und das zweitbeste auf BBH-structured, wo ein feinabgestimmtes RoBERTa-base 0,646 erreicht. Als zusätzliche Merkmale ergänzen sie +0,11 zu RoBERTa-base auf GSM8K (0,362 auf 0,468) und +0,19 bzw. +0,18 zu zwei eingefrorenen Embedding-Modellen. Eine kausale Sonde bearbeitet 50 Testfragen pro Datensatz in Richtung oder weg von einer Hypothese: Schwierigkeit-erhöhende Bearbeitungen senken die mittlere Genauigkeit um 15,27 bzw. 23,88 Prozentpunkte auf GSM8K und BBH-structured, während Schwierigkeit-senkende Bearbeitungen sie um 32,18 bzw. 28,52 heben. Schwierigkeit wird hier aus Modellantworten geschätzt, nicht von menschlichen Testteilnehmenden, daher ist dies ein LLM-Evaluations- und Psychometrie-Ergebnis.

- **Das Simulieren von Antwortenden kann zurückgewinnen, was Regression auf den Stimulus nicht kann:** Ein feinabgestimmtes multimodales LLM, das die Wahrscheinlichkeiten der Optionswahl von Studierenden über Fähigkeitsniveaus hinweg reproduziert, approximierte zurückgehaltene Schwierigkeit bei r = 0,85, über den Regressions-Baselines MathBERT (0,68) und MetaMath (0,75), und gewann den Ratenparameter c bei 0,48 zurück, während Trennschärfe a schwach blieb (0,31) ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026]]).
- **Mängel der Itemkonstruktion als Voreinsatz-Prüfung für IRT-Parameter:** [[item-writing-flaws-irt-difficulty-2026|Schmucker und Moore (2026)]] testen, ob Item-Writing-Flaw-(IWF-)Rubriken – eine domänenübergreifende, textliche Evaluation, die keine Studierendendaten erfordert – empirisch geschätzte IRT-Schwierigkeit und -Trennschärfe vorhersagen. Über **7.126 Multiple-Choice-Fragen** in [[stem-education|STEM]] (physikalische Wissenschaften, [[math-education|Mathematik]], Lebens-/Erdwissenschaften) hinweg nutzten sie automatisierte, LLM-gestützte Kodierung, um zu zeigen, dass IWF-Rubriken prädiktive Validität für empirische IRT-Parameter tragen und eine skalierbare Voreinsatz-Prüfung bieten, die aufwendiges Pilot-Testen ergänzt oder teilweise ersetzt.
- **IRT-basierte Risikofilterung für selektive KI-Benotung:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] passten ein zweiparametrisches logistisches IRT-Modell an KI-benotete handschriftliche Chemiedaten an und definieren das „Risiko“ der Annahme eines KI-Urteils als die absolute Abweichung zwischen dem normalisierten Score der KI und der IRT-erwarteten Kreditwahrscheinlichkeit (Risk = |s−p|); nur Items innerhalb einer gewählten Toleranz dieser bayesianischen Erwartung anzunehmen markiert „überraschende“ KI-Scores zur [[human-in-the-loop-ai|menschlichen Prüfung]], was IRT von einem reinen Score-Aggregationswerkzeug in einen operativen Annahme-/Rückverweis-Mechanismus für [[automated-assessment|automatisiertes Assessment]] verwandelt – einen, der Ausrichtung an menschlicher Benotung ähnlich einfacheren Teilpunktschwellen erzielte, aber mit niedrigerem menschlichem Aufwand, wenngleich seine Logik für nicht-technische Zielgruppen weniger transparent ist.
- **IRT als Kalibrierungsschicht innerhalb eines diagnostischen Modells:** PLCD ergänzt einen IRT-inspirierten Guessing-and-Slipping-Kopf über antworten auf Aufgabenebene und verbessert damit Wahrscheinlichkeitsqualität statt Genauigkeit – der erwartete Kalibrierfehler fiel von 0,071 auf 0,037 auf XES3G5M –, was IRT zu einer internen Korrektur für Antwortrauschen macht, nicht nur zu einem Scoring-Modell ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

- **Teile-und-herrsche-Kalibrierung für kontinuierlich wachsende Banken:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] behandeln IRT-Neukalibrierung als Skalierungsproblem statt als Anpassungsproblem. Wenn KI-basierte Itemgenerierung und merkmalsbasierte Parameterprädiktion eine Bank größer, spärlicher und kontinuierlich aktualisiert machen, wird das Neuanpassen der gesamten Antworthistorie bei jedem Update stetig teurer; ihre *Konsensus-Kalibrierung* kalibriert stattdessen jede Zeitperiode einmal und kombiniert eine neue Periode mit bereits berechneten früheren Posterioren. Zwei Merkmale unterscheiden sie von bestehender IRT-Teile-und-herrsche-Arbeit: Die Perioden teilen keine latente Metrik, daher wird jede über ein robustes Haebara-Kriterium an eine Referenzmetrik verlinkt, das *separat für jeden Posterior-Draw* gelöst wird (wobei Linking-Fehler in die verlinkten Posterioren getragen werden), und jede Periode ist ihr eigener hierarchischer Fit, der ein geschätztes Priori beisteuert, daher muss das naive Produkt der Posterioren dieses Priori herausteilen und ein Konsensus-Priori wieder eingesetzt werden –, was auf die Regel der bayesianischen Komitee-Maschine zurückfällt, wenn die Prioris fest sind. Gegen einen gepoolten Benchmark auf vier Quartalsperioden des Duolingo English Test stimmten die Posteriormittel bei r = 0,998 (Schwierigkeit) und 0,991 (log-Trennschärfe) überein, mit Posterior-SDs bei r = 0,970 bzw. 0,920, was milde Unterdispersion (SD-Verhältnis 0,91–0,98) lässt, die im niedrigsten Terteil der Periodenexposition am größten war. Es ist IRT-Kalibrierung, für die Lieferbedingungen neu konstruiert, die KI-generierte Itembanken erzeugen.
- **Wie selten IRT die Instrumentvalidierung verankert:** Eine Begutachtung der Instrumente zur Lehrkraft-KI-Kompetenz quantifiziert die Abwesenheit von IRT statt seine Nutzung. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore und Maat (2026)]] bewerteten 33 Instrumente gegen eine Entscheidungsmatrix, angepasst von COSMIN und Terwee et al. (2007); die strukturelle Validität war stark, mit 24 (72,7%) auf Grade A durch CFA, PLS-SEM oder IRT-Modellierung, doch keines nutzte IRT oder Rasch als primäre Evidenz, und nur fünf Instrumente (15,2%) berichteten Messinvarianz- oder Differential-Item-Functioning-Evidenz. Die Autoren argumentieren für IRT und Performanzaufgaben neben Selbstbewertung, um validierte Fähigkeit von berichtetem Vertrauen zu trennen.
- **Eine kausale Alternative zu assoziativem IRT.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] argumentieren, IRT- und bayesianische Netzwerk-Lernendenmodelle könnten Interventionen oder Kontrafaktisches nicht ausdrücken, und erheben stattdessen Strukturgleichungen von Expertinnen und Experten; auf einer adaptiven Testbatterie mit 109 Studierenden war das erhobene Modell etwas weniger prädiktiv (−287 gegenüber −277 Test-Log-Likelihood), stützte aber kontrafaktische Anfragen zu Hilfe.

### Verbindungen

IRT ist ein Fundament von [[educational-measurement|Bildungsmessung]] und [[assessment-validity|Assessmentvalidität]], untermauert [[adaptive-learning|adaptives Lernen]] (adaptive Itemauswahl) und [[student-modeling|Modellierung von Studierenden]] und verbindet sich mit [[psychometrically-aware-ai|psychometrisch bewusster KI]] (Assessment ausgerichtet an der Messtheorie) und [[knowledge-tracing|Knowledge Tracing]]. Es erscheint in [[llm-difficulty-calibration-programming-exams-2026|LLM-Schwierigkeitskalibrierung]] für Assessment in der Programmierung.

## Verbundene Konzepte

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Verbundene Artikel
- [[explaining-question-difficulty-natural-language-2026]] — Explaining LLM question difficulty in natural language through IRT and causal edits (Cui et al. 2026)
- [[item-writing-flaws-irt-difficulty-2026]] — Impact of item-writing flaws on IRT difficulty and discrimination (Schmucker & Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale IRT field validation of AI-generated exams
- [[jin-glat-genai-literacy-assessment]] — GLAT uses IRT/2PL validation (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM difficulty calibration in programming exams
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[irt-human-genai-mcq-responses]] — Using IRT to separate human and GenAI MCQ responses
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian consensus calibration of a continuously evolving IRT item bank (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Field audit showing IRT/Rasch rarely used as primary validation evidence in teacher AI literacy instruments
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
