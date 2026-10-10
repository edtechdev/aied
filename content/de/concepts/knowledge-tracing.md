---
title: Wissensstandsverfolgung
created: "2026-06-23T10:44:35-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-09T09:50:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Knowledge Tracing** — Modellierung dessen, was Lernende über die Zeit wissen, indem ihre Leistung bei Übungen verfolgt und künftige Beherrschung vorhergesagt wird. Es ist der modellierungsreichste Strang der Wissensbasis und erstreckt sich über Bayes'sche, Deep-Learning- und [[llm|LLM-erweiterte]] Ansätze, das Wissen von Studierenden zu verfolgen, während es sich entwickelt.

## Fragen zum Nachdenken

- Knowledge Tracing modelliert aus Ihrer Leistung bei Übungen, was Sie über die Zeit wissen, und verfolgt, wann Wissen erworben wird und wann es verkümmert. Was können Ihre Antworten darüber offenbaren, ob Sie etwas wirklich „wissen", statt es nur diesmal richtig zu haben?
- Die Seite warnt, dass „Beherrschung nicht Korrektheit ist" — eine lernende Person kann als gemeistert erscheinen und dennoch eine Fähigkeit systematisch falsch anwenden, wenn eine verborgene Bedingung verletzt wird. Wann haben Sie jemanden (oder sich selbst) gesehen, der etwas zu verstehen schien, es aber tatsächlich nicht tat?
- Wenn Knowledge Tracing adaptive Systeme speist, die entscheiden, was als Nächstes zu unterrichten ist — was geht schief, wenn das Modell richtige Antworten mit echter Beherrschung verwechselt und eine lernende Person zu früh weitergehen lässt?
- Knowledge Tracing kommt in vielen Formen vor — Bayes'sch, neuronal, hypergraphbasiert, dialogbasiert, LLM-erweitert. Welche Trade-offs würden Sie zwischen einem transparenten Modell, das Sie erklären können, und einem mächtigen, aber opaken erwarten?
- Die Seite verbindet Knowledge Tracing mit simulierten Studierenden — der Erzeugung der Wissenszustände, die Tracing normalerweise aus echten Daten erschließt. Wie könnte die Simulation von Lernenden helfen, einen Tutor zu testen, bevor er echten Studierenden begegnet?
- Da Wissen über die Zeit verkümmert, was sollte ein adaptives System mit der vergangenen „Beherrschung" einer lernenden Person tun, sobald sie es vergessen hat? Wie würden Sie für Vergessen gestalten, statt anzunehmen, Wissen bleibe bestehen?

## Einführung

Knowledge Tracing verwandelt rohe Übungsantworten in Schätzungen dessen, was eine lernende Person gemeistert hat und was sie noch lernen muss. Anders als einfaches Verfolgen von Korrektheit modelliert Knowledge Tracing die zeitliche Dynamik des Lernens — wann Wissen erworben wird, wann es verkümmert und wie Konzepte miteinander zusammenhängen.

### In der Wissensbasis vertretene Ansätze

- **Bayes'sche Ansätze:** [[stanbkt-bayesian-knowledge-tracing]] standardisiert BKT-Implementierungen, während [[mbp-kt-meta-behavioral-knowledge-tracing]] meta-behaviorale Signale einbezieht
- **Soft-Evidence-BKT mit einer LLM-Beobachtungsfunktion:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] behält die BKT-Struktur, ersetzt aber die binäre richtig/falsch-Beobachtung — die Eingabe von Standard-BKT — durch eine kontinuierliche: Ein [[llm|LLM]]-Bewerter gibt abgestufte Beherrschungsevidenz plus ein Zuversichtsgewicht aus, die in ein zuversichtheitsgemindertes Posterior geblendet und so gegatet werden, dass eine eindeutig falsche Antwort die Schätzung nicht erhöhen kann, was das Update zu einer Variante macht, die Standard-BKT verallgemeinert, statt es strikt zu reduzieren. Ob diese Beobachtungsfunktion verlässlich ist, hängt von der lernenden Person ab: Die mittlere Evidenz trennte Fähigkeitsstufen sauber (0,25 schwach / 0,67 gemischt / 0,77 stark), während die Korrelation innerhalb der Stufen mit echter Beherrschung nur r ≈ 0,15 / 0,48 / 0,41 betrug, was den verfolgten Zustand zu einer Überzeugung eines Agenten über die lernende Person statt zu einer kalibrierten Messung macht.
- **Neuronale und hybride Modelle:** [[neural-symbolic-knowledge-tracing]] verbindet symbolisches Schlussfolgern mit [[machine-learning|neuronalen Netzen]]; [[explainable-probabilistic-kt]] bringt interpretierbare probabilistische Modelle voran
- **Hypergraph-Speichernetzwerke:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] erweitert speicherbasiertes Tracing (DKVMN) um temporales Hypergraph-Schlussfolgern und modelliert dynamische höherstufige Interaktionen zwischen Konzepten, die in Fragen mit mehreren Fähigkeiten gemeinsam auftreten
- **Dialogbasiertes KT:** [[huang-interpretable-knowledge-tracing-2026]] passt Knowledge Tracing an konversationelles Tutoring an
- **LLM-erweitert:** [[xie-hillm-cd-2026|HiLLM-CD]] nutzt LLMs für automatisierte Konzeptbaum-Konstruktion und hierarchische Kompetenzinferenz
- **Semantisches, empfehlungsorientiertes KT:** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel und Sachan, 2025)]] verankert die *Eingabe* statt der Architektur: Ein LLM annotiert jede Frage mit Lösungsschritten und Wissenskonzepten, die an die Common Core State Standards for Mathematics angelehnt sind, kontrastives Lernen richtet Frage-, Lösungsschritt- und Konzept-Embeddings aus (wobei falsche Negative durch Vor-Clustering von Konzeptvarianten wie „interpreting a bar chart" und „reading information from a bar graph" entfernt werden), und ein KC-Kalibrierungsverlust lässt den Tracer einen Wissenszustand auf Konzeptebene direkt vorhersagen, statt einen zu erschließen, indem das Modell über jede Frage in diesem Konzept läuft. Der kalibrierte Tracer dient dann als Verstärkungslern-Umgebung für Übungsempfehlungen, wo eine modellbasierte Wertschätzung den Kritiker aus dem Tracer selbst initialisiert. Über vier Aufgaben auf XES3G5M, gemittelt über 2.048 Teststudierende, gaben Nicht-RL-Baselines marginale oder negative Wissenszuwächse, wertbasierte kontinuierliche Methoden schlugen politikbasierte, und die modellbasierte Wertschätzung verbesserte sie konsistent — am stärksten bei der Aufgabe zum schwächsten Konzept, wo sich das Ziel in jedem Schritt ändert. Die berichteten Zuwächse sind prozentuale Verbesserung des maximalen Wissens, keine Lernresultate, und die Pipeline hängt von generierten Lösungsschritten ab, deren Qualität der Tracer erbt.
- **Ergebnisbasiertes Knowledge Tracing (OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] verfolgen das Wissen von Studierenden innerhalb von Outcome-Based-Education-Systemen, indem sie **Kursergebnisse als die Wissenskonzepte selbst** behandeln und von Expertinnen und Experten validierte OBE-„Affinity Mappings" zwischen Kurs- und Programmergebnissen an die Stelle aufmerksamkeits- oder graphenabgeleiteter Konzeptrelationen setzen. Ein Memory Augmented Neural Network (MANN) modelliert, wie das Erreichen jedes Ergebnisses andere beeinflusst, und domänenadaptives BERT-Fine-Tuning bereichert die Ergebnis-Embeddings (wobei ein GRU-Backend LSTM schlägt). An lebenden LMS-Daten eines [[engineering-education|Ingenieur]]-Studiengangs (2.416 Studierende, 966 Ergebnisse) erreichte OKT 89,81% AUC — und übertraf damit DKT, DKVMN, EKT und SimpleKT —, während es bei ASSISTments nur wettbewerbsfähige Ergebnisse lieferte, was bestätigt, dass der Vorteil an die OBE-spezifische [[curriculum-design|Curriculum]]-Struktur gebunden ist.

- **Tracing nur aus Momentaufnahmen.** [[skill-acquisition-without-temporal-info|Nagai et al. (2026)]] leiten eine pseudo-zeitliche Ordnung aus Inklusionsrelationen zwischen den Fähigkeitsmengen der Lernenden ab und behandeln wachsende Fähigkeitsmengen als Lernfortschritt, sodass Momentaufnahmen zu einem einzigen Zeitpunkt weiter verfolgbar bleiben — die Formulierung nimmt aber an, dass Fähigkeiten nie verloren gehen, sodass Einsätze für Lernende, die zurückfallen, zuerst einen expliziten Vergessensmechanismus brauchen.

### Verhältnis zu anderen Konzepten

Knowledge Tracing ist eng mit [[student-modeling|Modellierung von Lernenden]] verwandt — während Knowledge Tracing spezifisch kognitives Wissen über die Zeit modelliert, ist Modellierung von Lernenden die breitere Praxis, alle Aspekte einer lernenden Person zu repräsentieren ([[affective-computing|affektiver]] Zustand, [[student-engagement|Engagement]], Präferenzen). Knowledge Tracing speist [[adaptive-learning|adaptive Lernsysteme]] und [[personalized-learning|personalisierte Lernsysteme]], die wissen müssen, was als Nächstes zu unterrichten ist, und [[intelligent-tutoring|intelligente Tutoring]]-Plattformen, die Beherrschungsschätzungen nutzen, um passende Probleme auszuwählen. Es verbindet sich mit [[learning-analytics|Learning Analytics]] für Dashboard- und Interventionsdesign und mit [[cognitive-diagnosis|kognitiver Diagnose]] für feinkörnige Fähigkeits-[[assessment|messung]]. Konstrukte des Knowledge Tracing informieren auch [[simulating-students|simulierte Studierende]] — der kognitive Zustand einer simulierten lernenden Person wird häufig mit derselben Beherrschungs-/Verkümmerungsdynamik formalisiert, die Knowledge Tracing modelliert, sodass [[simulation|Simulation]] eine Weise ist, die Wissenszustände zu *erzeugen*, die Tracing-Methoden normalerweise aus echten Antwortdaten *erschließen*.

**Eine Reichweiten-Vorsichtsmaßnahme: Tracing schätzt Fachbeherrschung, nicht höherstufige Kognition.** Ein 15-Jahre-Review von 127 Intelligent-Tutoring-Studien findet, dass Bayes'sches und Deep-Learning-Tracing sich im Zeitverlauf verbesserten, aber dennoch höherstufige kognitive Prozesse, Metakognition oder Motivation nicht modellieren können — die Zustände, die ein adaptives System am dringendsten adressieren müsste ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

**Eine Vorsichtsmaßnahme: Beherrschung ist nicht Korrektheit.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren und Stamper (2026)]] zeigen, dass BKTs Annahme zweier Zustände (gelernt/ungelernt) durch *täuschende Übergeneralisierung* verletzt werden kann — Lernende können als gemeistert erscheinen und dennoch eine Fähigkeit systematisch falsch anwenden, wenn eine verborgene Anwendungsbeschränkung verletzt wird. Das spricht dafür, bedingtes Verstehen zu verfolgen (zu wissen, *wann eine Handlung zu unterlassen* ist), nicht nur Handlungskorrektheit, wenn Beherrschungsschätzungen [[adaptive-learning|adaptive]] Abbruchregeln antreiben.

**Eine verwandte Vorsichtsmaßnahme betrifft *wie* Tracing-Modelle validiert gegenüber eingesetzt werden.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan und Carvalho (2025)]] fitten BKT, BKT-mit-Vergessen und das Additive-Factors-Modell auf einen Datensatz aus aufeinanderfolgendem Wiedererlernen über mehrere Sitzungen und fanden, dass sie Lerntrends reproduzieren, wenn sie rückwirkend auf alle Sitzungen gefittet werden (akzeptables AUC ≈ 0,74–0,79); aber unter **zeitbasierter Kreuzvalidierung** — auf einer Sitzung trainieren, um die nächste vorherzusagen, das realistische Anwendungssetting — überschätzen alle drei die künftige Leistung um etwa 47–58%, erfassen den [[desirable-difficulties|Spacing-Effekt]] nicht und können sogar die falsche Rangordnung über Übungsbedingungen hinweg vorhersagen. Bezeichnenderweise schnitten Modelle *ohne* expliziten Vergessensmechanismus etwa genauso gut ab wie die mit Vergessen erweiterten Versionen, wenn sich Sitzungen anhäuften, was nahelegt, dass Vergessen teilweise in andere Parameter absorbiert wurde (etwa Per-Studierenden-Interzepte im AFM), statt echt modelliert zu werden. Die Autoren verbinden das mit der Unterscheidung zwischen Lernen und Leistung: Beliebte Modelle verwechseln hohe Leistung im Moment mit hoher Wahrscheinlichkeit langfristigen Behaltens. Die praktische Implikation ist, dass ein Tracer, der bei rückwirkendem Fit gut aussieht, die adaptiven Systeme in die Irre führen kann, die seine Beherrschungsschätzungen konsumieren, was für Walk-Forward-Evaluation und Modelle spricht, die Retentionsintervall, Spacing und Vergessen zwischen Sitzungen berücksichtigen.

**Eine weitere Vorsichtsmaßnahme betrifft die Evidenzregel, die das Update speist.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] führte vier Update-Regeln über identische ASSISTments-Ereignisfolgen aus 2012–13, die sich nur darin unterschieden, wie sie mit Hilfe abgeschlossene Zeilen bewerten, auf einer konfirmatorischen Hälfte von 12.716 Studierenden und 985.813 bewerteten Ereignissen. Eine Zeile mit Hinweis oder erneutem Versuch als gescheiterten ersten Versuch zu lesen, sagte die spätere Leistung ohne Hilfe am besten vorher (gepooltes AUC 0.658); jeden Abschluss anzurechnen sagte sie am schlechtesten vorher (0.604), knapp über einer Konstanten, die nur Fähigkeitsschwierigkeit kennt (0.595). Dieselbe Wahl bestimmt die Beherrschungszahl: Abschlüsse anzurechnen erklärte 93,9% von 113.428 Studierenden-Fähigkeiten-Paaren für gemeistert gegenüber 72,8% unter der strengen Regel, und die Paare, die die nachsichtige Regel der strengen gegenüber vorauserklärte, erreichten später 70,9% Genauigkeit ohne Hilfe gegenüber 85,7%, wo beide übereinstimmten, unter der Basisrate von 0,744. Ein verfolgter Zustand ist daher zum Teil eine Funktion der Bewertungskonvention statt der lernenden Person allein, sodass eine Beherrschungsschätzung, die von einem [[adaptive-learning|adaptiven]] Gate konsumiert wird, die Regel tragen sollte, die sie erzeugt hat.

**Eine Fähigkeiten-Vorsichtsmaßnahme: Allgemeine Sprachmodelle verfolgen Wissen kaum über einer trivialen Baseline.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]] veröffentlichten FoundationalASSIST, das den vollständigen Fragetext, die Antworten, die Studierende tatsächlich gaben, und ihre Distraktor-Wahlen wiederherstellt, die frühere Tracing-Datensätze verworfen hatten, und testeten vier Frontier-[[llm|LLMs]] als Zero-Shot-Tracer. Das beste, GPT-OSS-120B, erreichte 56,2 Prozent gegenüber den 51,3 Prozent, die eine Immer-richtig-vorhersagen-Regel bereits erzielt (AUC-ROC 0.559), ohne Verbesserung durch längere Historien, und Llama-3.3-70B lag zu 85,4 Prozent der Zeit richtig, wenn eine lernende Person richtig antwortete, aber nur zu 12,6 Prozent, wenn sie sich irrte — ein Beleg dafür, dass ein fertiges Modell Optimismus statt Verständnis verfolgt, sodass die scheinbare Fähigkeit eines Tracers gegen die triviale Baseline gelesen werden muss, die seine Aufgabe zulässt.

- **Ein Einmal-Durchlauf-LLM kann Wissen verfolgen, bevor Lernende protokolliert sind.** Als eine getippte Frage ohne Zieldaten der Plattform abgefragt, erreichte Jev ein mittleres AUC von .706, über dem Besten von 28 tiefen Tracing-Modellen, die auf 8 Lernenden trainiert wurden (.689), und voraus, bis überwachtes Tracing bei 64–128 Lernenden aufholt ([[system-one-llm-knowledge-tracing-2026|Lee & Park (2026)]]).

## Verbundene Konzepte

- [[learners]] — Learners: die Überblicksseite für die Konzepte auf der Seite der Lernenden
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — feinkörnige Beherrschungsschätzung, die Unterstützungsentscheidungen speist

## Verbundene Artikel

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — semantically grounded tracing with KC-calibrated states, used as an RL environment for recommendation
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[crediting-assisted-work-inflates-mastery-2026]] — Which evidence rule decides a mastery claim (Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — A single-pass LLM traces knowledge above deep models trained on 8 learners, at a fraction of the cost (Lee & Park 2026)
