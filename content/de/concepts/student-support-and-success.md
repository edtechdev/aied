---
title: Unterstützung und Erfolg von Studierenden
created: "2026-10-01T20:31:35-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
foundations: [ai-education, human-ai-collaboration]
pedagogy: [help-seeking, student-experience, student-engagement]
technology: [learning-analytics, conversational-ai, machine-learning, student-modeling, recommender-systems-and-learning-paths, generative-ai]
assessment: [learning-gains]
methods: [rct, quantitative-research]
institutions: [change-management, educational-policy-ai, governance]
ethics: [equity-in-ai-education, privacy]
audience: [administrators, institutions, researchers, instructors]
level: [higher ed, undergraduate]
confidence: high
connected_faqs: [ai-agents-support-students-instructors, institutional-ai-policy]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
translation_of: concepts/student-support-and-success
source_updated: "2026-10-03T01:40:50-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Unterstützung und Erfolg von Studierenden** — die institutionelle Arbeit, Studierenden zu helfen zu bleiben, Fortschritte zu machen und abzuschließen: **Beratung, administrative Assistenz, Ansprache, Weitervermittlung und die Zuteilung knapper Unterstützung**. Dies ist die Seite dafür, was Einrichtungen *mit* Studierenden tun statt was *innerhalb* eines Kurses passiert. [[higher-ed|Hochschulbildung]] ist der weitere Überblick für den Sektor und [[student-experience|Erleben der Studierenden]] deckt ab, wie KI auf der eigenen Erfahrung der Studierenden ankommt; [[learning-gains|Lernzuwächse]] messen, ob Lernen stattfand. Der unterscheidende Befund in dieser Wissensbasis ist, dass KI-Unterstützung verlässlich **Aufgabenerledigung** bewegt — eine datierte, binäre Handlung, die eine Person kontrolliert und die Einrichtung beobachten kann —, während sie **Persistenz, Credits und Graduierung** weitgehend unangetastet lässt. Diese Ergebnisse zu trennen ist der Punkt dieser Seite.

## Fragen zum Nachdenken

- Welches Ergebnis wollen Sie bewegen? Eine Einschreibungserinnerung und ein Halteprogramm sind unterschiedliche Interventionen mit unterschiedlicher Evidenz, und die Forschung hier legt nahe, dass eine die andere nicht erkauft.
- Wenn ein Modell eine Person als gefährdet markiert, was passiert als Nächstes? Wer handelt, mit welcher Kapazität, und was würde die Empfehlung machbar statt bloß genau machen?
- Unterstützungskapazität ist endlich. Wenn KI sie rangfolgt oder zuteilt, was macht das mit den Studierenden, die eine menschliche Beraterin ohnehin bemerkt hätte?
- Wer ist rechenschaftspflichtig, wenn eine automatisierte Nachricht, Weitervermittlung oder ein Risikowert falsch ist? Die Person sieht die Konsequenz; die Einrichtung besitzt das System.
- Reisen Ihre Unterstützungsdaten? Büroübergreifendes Teilen ist das, was Targeting möglich macht, und zugleich der häufigste Grund, weshalb Targeting stillschweigend aufhört.

## Einführung

Studierendenunterstützung sitzt auf der institutionellen Seite der Beziehung. Ihre Arbeit ist Beratung, Ansprache, Weitervermittlung und die Zuteilung endlicher menschlicher und finanzieller Kapazität; ihre Evidenzbasis sind Verwaltungsdaten, Einschreibungsereignisse, erworbene Credits, und ob eine Person zurückkehrt. Generative KI betrat dieses Territorium später als den Unterricht, und ein großer Teil der Literatur hier betrifft **nicht-generative** Systeme — SMS-Chatbots, Frühwarnmodelle, föderierte Risikovorhersage —, wobei generative Werkzeuge als Beraterinnen, Assistentinnen und Wissensbasis-Antworterinnen ankommen.

Die Unterscheidung, die diese Seite organisiert, ist die zwischen **was ein Nudge tun kann** und **was eine Trajektorie erfordert**. Unterstützungstechnologien exzellieren bei einer datierten, binären Entscheidung: bis zu diesem Datum einschreiben, dieses Formular ausfüllen, Early Start beginnen. Sie haben weit größere Schwierigkeiten mit kumulativen Ergebnissen — Persistenz, Credits, Graduierung —, die Unterricht, Finanzen, Beschäftigung, familiäre Umstände und frühere Vorbereitung alle prägen. Die stärksten Belege der Wissensbasis dazu kommen von einer vierjährigen randomisierten Evaluation, die Einschreibung scharf bewegte und Graduierung überhaupt nicht.

## Die Unterstützungsfunktionen

Die Forschung clustert in fünf Funktionen, und die Clustergrenzen zählen, weil sie unterschiedliche Evidenz tragen.

**Ansprache und Kommunikation.** Einrichtungen kontaktieren Studierende im großen Maßstab, und die stärksten Evaluationen testen, ob es irgendetwas verändert. Eine vierjährige randomisierte Studie von CSUNny, einem nicht-generativen SMS-Chatbot an der California State University, Northridge, begleitete zwei grundständige Kohorten (N = 8.708) über acht Semester ([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page, 2026]]). Eine am 31. Juli 2018 gesendete Einschreibungserinnerung machte behandelte Studierende 34 Prozentpunkte wahrscheinlicher, bis zum 16. August einzuschreiben, und nur 2 Punkte wahrscheinlicher bis zum 15. September; Early-Start-Erinnerungen erzeugten 11 Punkte mehr Einschreibung bis zum 7. Juni und 20 Punkte bis zum 22. Juni. Aufnahmebereitschaft hielt: jährliche Opt-out-Raten überschritten nie 4%. Eine vorregistrierte Mehrsemester-Studie an der Georgia State University stieß Studierende in zwei großen asynchronen Kursen (N = 1.568 und N = 915) mit zwei bis drei angepassten Nachrichten pro Woche an und hob die Chancen, ein A oder B zu erzielen, um vier Prozentpunkte gegenüber 61% der Kontrollen und verschob DFW-Raten um etwa drei Punkte in jedem Kurs ([[chatbot-outreach-course-performance-2026|Meyer et al., 2026)]]).

**Beratung und akademische Planung.** Kurs- und Notenvorhersage liefert die Planungseingabe — ein Modell sagt gemeinsam vorher, welche Kurse eine Person belegen und welche Noten sie erhalten wird ([[trace-course-grade-prediction-2026|Savala, 2026]]), und ein anderes sagt modulstufigen Fortschritt in großen Online-Programmierkursen mit einem intrinsisch interpretierbaren Entscheidungsbaum vorher ([[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska, 2026]]). Übertragbare Leistungsnachweise sind ein Beratungsproblem für sich: CourseGraph modelliert Kursinhalte als Wissensgraphen, um externe Kursäquivalenzen für mobile Studierende zu evaluieren ([[coursegraph-cs-course-comparison-2026|Nijdam et al., 2026)]]). Auf institutioneller Ebene fand ein Review von 155 Studien zu KI und Servicebereitstellung in der Hochschulbildung Learning Analytics als häufigste Anwendung mit 46 Studien (29.7%), vor Chatbots und virtuellen Assistentinnen mit 31 (20.0%) und prädiktiver Analytik mit 29 (18.7%) ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga, 2026]]).

**Weitervermittlung und Unterstützungszuteilung.** Vorhersage ist kein Plan, und die Lücke zwischen ihnen ist da, wo die schärfste Kritik des Felds sitzt. SC2R formalisiert sie als **Machbarkeitslücke**: ein Risikowert wird nur dann zu Entscheidungsunterstützung, wenn seine Empfehlungen semantisch machbar und maschinell prüfbar sind — begrenzt durch Timing, Budget, Unveränderbarkeit und Verfügbarkeit statt bloß modellvalid ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge, 2026)]]). Ob Modelle Unterstützung gut zuteilen können, ist empirisch umstritten: gebeten, Unterstützungspläne für 4.500 synthetische Studierenden-Vignetten zu empfehlen, zeigten drei LLMs begrenzte Sensitivität für studentischen Bedarf und scharfe Inkonsistenz über Modelle hinweg ([[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al., 2026]]).

**Zugang zu akademischer Unterstützung.** Kursspezifische Retrieval-Systeme zielen auf die Studierenden, die am wenigsten wahrscheinlich einen Menschen fragen. Beacon, gebaut aus den freigegebenen Materialien eines einzelnen Programmiermoduls, zog hohe Relevanzbewertungen (89%) und wurde von den meisten Studierenden so beurteilt, ihr Lernen zu stützen statt zu ersetzen (66.7%), in einer kleinen Evaluation mit 15 Studierenden und 4 Wissenschaftlerinnen und Wissenschaftlern ([[course-specific-rag-help-seeking-higher-ed-2026|Zhou et al., 2026)]]). Tutoring-Inanspruchnahme ist ihr eigenes Problem: Eine zweijährige randomisierte Studie einer virtuellen Tutoring-Schicht für kämpfende Studierende musste Inanspruchnahme getrennt von Lernen testen, weil die Studierenden zu erreichen, die Unterstützung brauchen, nicht dasselbe ist wie sie bereitzustellen ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Fryer et al., 2026)]]).

**Administrative Assistenz.** Leitung und Administration werden als eigene Anwendungsdomäne untersucht, mit einer Taxonomie aus zehn Domänen, die kartiert, wo KI in der Bildungsleitung ankommt ([[sposato-ai-educational-leadership-taxonomy-2025|Sposato, 2025]]). Von Einrichtungen betriebene Dienste reichen über Beratung hinaus in die Gesundheit: ein integriertes Campus-Wohlbefindens-Framework paart Prävention — verbessern, wie Feedback erhoben wird — mit Intervention durch Erkennung psychischer Gesundheit ([[ai-campus-wellbeing-tools|Tang, 2026]]). Beglaubigung sitzt daneben: Wenn ein Agent einen Kurs im Namen einer Person abschließen kann, verliert ein Zertifikat, das „erworben“ sagt, seine Bedeutung, was Abschlussaufzeichnungen zu einem Designproblem macht ([[credentials-carry-evidence-ai-agents-2026|Srivastava, 2026)]]).

## Von Vorhersage zu Unterstützung

Risikovorhersage — Frühwarnsysteme, Dropout-Modelle, Gefährdeten-Klassifikatoren — ist [[learning-analytics|Learning-Analytics]]-Territorium in dieser Wissensbasis, und diese Seite behandelt *prädiktive Analytik* als dasselbe. Die Modellierungsarbeit ist erheblich: überwachte Klassifikatoren identifizieren Studierende vor Rücktritt aus akademischen Leistungs-, demografischen und Einschreibungsdaten ([[at-risk-students-ml-prediction|Gheisari & Salarian, 2026]]); ein zweischichtiges Framework kombiniert Codeforces-Verhaltenslogs (n = 1.816) mit psychografischen Befragungsdaten aus zehn Universitäten, um Rücktritt im wettbewerbsorientierten Programmieren vorherzusagen ([[predicting-attrition-competitive-programming|Alam et al., 2026)]]); und eine föderierte Architektur sagt Leistung und Dropout über Einrichtungen hinweg vorher, ohne rohe Studierendendaten zu teilen, und erreicht AUC = 0.918 auf OULAD gegenüber 0.925 zentralisiert ([[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al., 2026)]]). Eine Präzisions-Bildungs-Vision weitet die Logik auf digitale Zwillinge von Studierenden und „präventiven Studierendenerfolg“ aus ([[precision-education-student-digital-twins-2026|Han et al., 2026)]]).

Was *hierher* gehört, ist der Schritt nach dem Wert: **Unterstützungszuteilung**. Zwei Befunde setzen ihre Grenzen. Erstens die Rangfolge-versus-Kalibrierung-Trennung — föderierte Risikomodelle behielten ihre AUC unter Verteilungsverschiebung, während ihre Kalibrierung deutlich degradierte, sodass ein Modell, das Studierende noch richtig rangfolgt, darüber falsch liegen kann, wie wahrscheinlich jede und jeder Hilfe braucht. Zweitens die Ermöglicher-Studie: eine internationale Delphi- und AHP/SNAP-Analyse von Learning-Analytics-zu-Intervention identifizierte sieben Ermöglicher und reihte **institutionelle strategische Orientierung** am höchsten (Priorität 0.2072) und als einflussreichste auf die anderen (PageRank 0.2430), was den Engpass in institutioneller Planung verortet statt in den Modellen ([[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić, 2026)]]). Verhaltensclustering von 14.003 Studierendendatensätzen in sechs Profile, abgebildet auf empfohlene Lernobjekte, ist die Empfehlungsschicht, auf die das hinweist ([[najem-behavioral-clustering-adaptive-learning-recommendation-2026|Najem et al., 2026)]]).

Ein Integritätsergebnis gesellt sich zu derselben Pipeline. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]] sagt KI-unterstütztes Betrugsrisiko aus LMS-Spuren frühen Semesters vorher (AUC 0.763) und empfiehlt, nur über risikoarme Ansprache darauf zu agieren, wobei die Entscheidungsschwelle für Reichweite statt für Anschuldigung gewählt wird: sie auf 0.30 zu senken identifizierte 21 der 23 Hochrisiko-Studierenden, bei einer Präzision von 60%.

## Die Ergebnisleiter: was jedes Maß tatsächlich bedeutet

Das Wort „Erfolg“ verbirgt mindestens fünf verschiedene Messungen, und KI-Unterstützung bewegt sie nicht gleich. Sie zu unterscheiden ist das Nützlichste, was diese Seite tun kann.

- **Aufgabenerledigung** ist eine einzelne, datierte, binäre Handlung, die die Person kontrolliert und die Einrichtung innerhalb von Tagen beobachtet — sich bis zu einer Frist einschreiben, ein Formular einreichen, sich bei Early Start einschreiben. Es ist, wo Nudges wirken, und die Effekte können groß und unmittelbar sein (34 Prozentpunkte, dann 2, bei der CSUN-Einschreibungserinnerung).
- **Credits (eingeschriebene und erworbene Einheiten)** sind kumulativ und hängen von Kursverfügbarkeit, Sequenzierung und davon ab, wie viele Semester eine Person sich leisten kann. In der CSUN-Evaluation erschien kein signifikanter Behandlungseffekt auf eingeschriebene, erworbene oder kumulativ erworbene Einheiten.
- **Persistenz** ist Fortsetzung über Semester hinweg — Einschreibung nach Semestersequenz —, und sie bewegte sich auch nicht, bei N = 8.708 mit Power, Effekte von 0.05 Standardabweichungen oder größer zu erkennen.
- **Retention** ist die institutionelle Rate, die Persistenz erzeugt, und sie wird meist auf Programm- oder Kohortenebene berichtet. DFW-Raten auf Kursebene sind das Nächstliegende zu einem Frühindikator in dieser Literatur, und sie bewegten sich mäßig (−3 Prozentpunkte in jedem Kurs der Georgia-State-Studie).
- **Graduierung** ist das terminale, mehrjährige Ergebnis. Das Kontrollmittel für Graduierung bis zum vierten Jahr war 0.190 in der CSUN-Studie, und der Behandlungseffekt darauf war nicht statistisch signifikant.

Die Erklärung der Autoren für das Muster ist die zentrale Behauptung der Seite: Eine Erinnerung wirkt auf eine Entscheidung, die diskret und kurzfristig ist, während Persistenz und GPA kumulativ sind und durch Unterricht, Finanzen, Beschäftigung, familiäre Umstände und frühere Vorbereitung geformt werden. Sie schließen, dass Kommunikation durch ein Werkzeug wie dieses, **für sich genommen**, womöglich nicht ausreicht, sie zu verändern —, und dass die Nulls präzise sind statt unterpowert. Frühe Einschreibung trägt weiterhin institutionellen Wert für Personal- und Raumplanung, selbst wo sich Lernergebnisse nicht bewegen.

## Gerechtigkeit und die Risiken, auf einen Wert hin zu handeln

Unterstützungssysteme handeln an Studierenden, was ihre Fehlermodi von denen eines Tutors unterscheidet. Ein Stresstest von sechs Post-hoc-Fairness-Interventionen auf einem replizierten anbieterkontrollierten Frühwarnsystem, gebaut aus 168.550 Studierendendatensätzen, fand die Interventionen dabei, wie sie die versprochene Fairness nicht liefern ([[fairness-theatre-early-warning-systems-2026|McConvey et al., 2026)]]). Ein Review aus Studierendenanwaltschaft organisiert die Risikooberfläche rund um Zulassung, Rekrutierung und Finanzhilfe, und **Studierendenerfolgs-Dienste** — die Bereiche, in denen institutionelle KI am direktesten auf Studierende wirkt ([[students-at-stake-ai-deployment-risks-2026|Student Defense, 2026]]). Datenschutz und Gerechtigkeit sind hier strukturell statt nebensächlich: föderiertes Lernen existiert, weil das Teilen von Studierendendaten über Einrichtungen hinweg inakzeptabel ist, und die Human-in-the-Loop-Komponente im CSUN-Programm — Administrierende, die beantworten, was der Chatbot nicht konnte, und die Antwort dann in seine Wissensbasis zurückführen —, ist das, was die Autoren argumentieren, die Studierenden erreicht, die E-Mail und Telefon ignorieren.

## Die institutionellen Bedingungen

Dauerhaftigkeit ist in dieser Literatur eine organisationelle Eigenschaft, keine technische. Das CSUN-Programm überlebte vier Jahre, weil der Kanal zentral besessen war, gemeinsam überwacht vom Office of Undergraduate Studies und dem Office of the Registrar, und von einer einzelnen Kommunikationsspezialistin für eine konsistente Stimme geschrieben. Sein Targeting zerfiel aus einem ebenso organisationellen Grund: weil Studierendendaten nicht zentralisiert waren, erforderte eine Finanzhilfe-Erinnerung, dass ein Büro Nicht-Einreichende identifizierte und ein anderes die Teilmenge weitergab, und diese Reibung war belastend genug, dass gezielte Kampagnen von 36% aller Kampagnen in AY2018-19 auf 6% bis AY2022-23 fielen. Wo die Arbeit sitzt, wer die Daten besitzt, und ob einheitenübergreifende Koordination nachhaltig ist, entscheiden, was ein Unterstützungssystem tatsächlich tun kann —, weshalb diese Seite [[change-management|Change-Management]], [[governance|KI-Governance]] und [[educational-policy-ai|Bildungspolitik zur KI]] als Facetten trägt statt Einsatz als IT-Entscheidung zu behandeln.

## Verbindungen zu verwandten Konzepten

Studierendenunterstützung verbindet sich mit [[student-experience|Erleben der Studierenden]] als studierendenzugewandtem Pendant — dieselben Technologien gesehen von der Seite der Studierenden statt der Einrichtung —, und mit [[help-seeking|Hilfesuche]] für den Mechanismus, durch den Studierende, die Unterstützung brauchen, sie tatsächlich erhalten; Ansprache und kursspezifische Assistentinnen sind beides Versuche, die Kosten des Fragens zu senken. [[learning-analytics|Learning Analytics]] besitzt die Vorhersage, die Zuteilung speist, [[student-modeling|Modellierung von Lernenden]] und [[knowledge-tracing|Knowledge Tracing]] die Modelle darunter, und [[recommender-systems-and-learning-paths|Empfehlungssysteme und Lernpfade]] die Empfehlungsschicht. Sie verbindet sich mit [[well-being|Wohlbefinden]] über Campus-Systeme für psychische Gesundheit und Prävention, mit [[career-development-and-readiness|Berufsvorbereitung und Berufsfähigkeit]] als dem Ergebnis, das auf Abschluss folgt, mit [[equity-in-ai-education|Gerechtigkeit in der KI-Bildung]] und [[privacy|Datenschutz]] über die Risiken, auf Werte hin zu handeln, und mit [[administrator|Administration]], [[stakeholders|Akteuren in der KI-Bildung]] und [[change-management|Change-Management]] als den Rollen und Prozessen, die entscheiden, ob irgendetwas davon aufrechterhalten wird. [[learning-gains|Lernzuwächse]] ist der benachbarte Messknoten: die Ergebnisse dieser Seite sind administrativ statt instruktional, und die beiden bewegen sich nicht zusammen.

## Verbundene Konzepte
- [[higher-ed]] — die Überblicksseite des Sektors, unter der diese Seite sitzt
- [[student-experience]] — wie KI auf der eigenen Erfahrung der Studierenden ankommt
- [[learning-gains]] — ob Lernen stattfand, das instruktionale Ergebnis, das diese Seite nicht misst
- [[learning-analytics]] — Vorhersage, Frühwarnung und prädiktive Analytik
- [[student-modeling]] — die Modellierungsschicht unter Risikovorhersage
- [[knowledge-tracing]] — feinkörnige Schätzung von Fähigkeiten und Beherrschung
- [[recommender-systems-and-learning-paths]] — Kurse, Ressourcen und Pfade empfehlen
- [[help-seeking]] — wie Studierende dazu kommen, Unterstützung anzufragen
- [[well-being]] — psychische Gesundheit auf dem Campus, Prävention und Intervention
- [[career-development-and-readiness]] — das Ergebnis nach Abschluss
- [[administrator]] — die Rolle, die Unterstützungssysteme besitzt und betreibt
- [[stakeholders]] — wer einen Anspruch auf institutionelle KI-Entscheidungen hat
- [[change-management]] — das Programm nach dem Piloten aufrechterhalten
- [[governance]] — Politik und Aufsicht für institutionelle KI
- [[educational-policy-ai]] — der politische Kontext für institutionellen Einsatz
- [[equity-in-ai-education]] — wen das System erreicht und wen es verfehlt
- [[privacy]] — Studierendenakten, Datenteilung und föderierte Ansätze
- [[human-in-the-loop-ai]] — menschliches Urteil innerhalb eines automatisierten Unterstützungsflusses
- [[rct]] — das Design hinter der stärksten Evidenz hier

## Verbundene Artikel
- [[mata-sustaining-ai-enabled-student-support-2026]] — four-year randomized evaluation of a university support chatbot: task completion moved, graduation and GPA did not
- [[chatbot-outreach-course-performance-2026]] — pre-registered multi-semester outreach trial: higher A/B rates, modest DFW shifts, one demographic exception
- [[lopez-pernas-llm-appropriate-student-support-2026]] — 4,500 synthetic vignettes: limited sensitivity to student need and cross-model inconsistency in support recommendations
- [[sc2r-counterfactual-recourse-educational-2026]] — the actionability gap: recourse must be feasible and checkable, not merely model-valid
- [[fairness-theatre-early-warning-systems-2026]] — six post-hoc fairness interventions on a vendor early warning system built from 168,550 records
- [[at-risk-students-ml-prediction]] — supervised classifiers identifying students before withdrawal
- [[predicting-attrition-competitive-programming]] — behavioral logs plus psychographic survey predicting attrition
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — federated risk modeling across institutions without sharing raw student data
- [[precision-education-student-digital-twins-2026]] — digital twins and "preventive student success" as a vision
- [[learning-analytics-to-educational-interventions-2026]] — seven enablers for closing the loop from analytics to intervention
- [[course-specific-rag-help-seeking-higher-ed-2026]] — a course-specific assistant aimed at lowering the cost of asking for help
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — tutoring take-up tested separately from learning
- [[najem-behavioral-clustering-adaptive-learning-recommendation-2026]] — six behavioral profiles mapped to recommended learning objects
- [[trace-course-grade-prediction-2026]] — joint prediction of courses and grades for planning
- [[zhang-ml-student-progress-programming-2026]] — interpretable module-level progress prediction
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — 155 studies of AI, leadership, and service delivery in higher education
- [[sposato-ai-educational-leadership-taxonomy-2025]] — ten-domain taxonomy of AI in educational leadership
- [[students-at-stake-ai-deployment-risks-2026]] — student-side risk surface: admissions and aid, student-success services, and instruction
- [[ai-campus-wellbeing-tools]] — campus well-being support spanning prevention and intervention
- [[coursegraph-cs-course-comparison-2026]] — course equivalence for transfer credit and mobility
- [[credentials-carry-evidence-ai-agents-2026]] — what a completion record means when an agent can do the work
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — Predicting AI-assisted cheating risk early, and the threshold trade-off for low-stakes outreach
