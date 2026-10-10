---
title: Adaptives Lernen
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
translation_of: concepts/adaptive-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Adaptives Lernen** — KI-gestützte Bildungssysteme, die Inhalte, Tempo und Unterrichtsstrategien an individuellen Merkmalen und Leistungen der Lernenden anpassen. Adaptives Lernen ist das operative Ziel eines großen Teils der [[ai-education|KI in der Bildung]]-[[research-methods-aied|Forschung]]: mithilfe von [[student-modeling|Lernendenmodellen]] Unterricht zu personalisieren.

## Fragen zum Nachdenken

- „Adaptives", „personalisiertes", „individualisiertes" und „maßgeschneidertes" Lernen werden oft synonym verwendet – die Forschung legt jedoch nahe, dass sie nicht dasselbe sind. Was nehmen Sie bei jedem dieser Wörter an, und wo könnten diese Annahmen falsch sein?
- Ein adaptives System passt Inhalte und Schwierigkeit anhand eines Modells dessen an, was Sie wissen. Was kann schiefgehen, wenn dieses Modell auf flachen oder unzuverlässigen Signalen über Ihr Lernen beruht?
- Ein zentraler Befund lautet, dass Systeme, die Beherrschung aus richtigen Antworten erschließen, das Üben zu früh beenden können – bevor Sie lernen, wann eine Handlung zu unterlassen ist. Kennen Sie eine Fähigkeit, bei der wiederholtes „richtig" Sie dennoch nicht auf eine reale Situation vorbereitet hat?
- Überanpassung kann den produktiven Kampf beseitigen, den Lernende für tiefes Lernen brauchen. Wenn KI in dem Moment, in dem Sie sich abmühen, alles einfacher macht, was genau verliert die lernende Person dann?
- Eine Metaanalyse legt nahe, dass der Anpassungsmechanismus – nicht die jeweilige Werkzeuggeneration – die [[learning-gains|Lernzuwächse]] bewirkt. Wenn das „Wie" mehr zählt als „welches Werkzeug", worauf sollten Sie bei der Auswahl adaptiver Software achten?
- LLM-basierte Tutoren können heute Sprache und Erklärungsstil anpassen, nicht nur die Schwierigkeit. Wann hilft die Personalisierung der Art, wie etwas erklärt wird, dem Lernen, und wann untergräbt sie womöglich unbemerkt die Handlungsfähigkeit der lernenden Person selbst?

## Einführung

### Kernmechanismen

- **Mess–Modell–Anpass-Schleife:** [[knowledge-tracing]] schätzt, was die lernende Person weiß, [[student-modeling]] repräsentiert die lernende Person, und das System passt Schwierigkeit, Inhalte und [[feedback]] entsprechend an.
- **Personalisierung im großen Maßstab:** Systeme für [[personalized-learning|personalisiertes Lernen]] nutzen adaptive Algorithmen, um für jede lernende Person individuelle Lernpfade bereitzustellen. [[deeptutor]] und [[ai-powered-personalized-learning-elementary-fractions-2026|Tutoren für Brüche in der Grundschule]] zeigen adaptive Personalisierung in der Praxis.
- **Inhaltssequenzierung:** [[adaptive-pretesting-retention|Adaptives Pretesting]] und [[adapt-adaptive-lesson-plan-transformer|Unterrichtsplan-Transformatoren]] optimieren Reihenfolge und Art der präsentierten Inhalte.
- **Integration in intelligente Tutoring-Systeme:** [[intelligent-tutoring|Intelligente Tutoring-Systeme]] sind die kanonische Plattform für adaptives Lernen und verbinden Diagnose mit Anpassung.
- **AutoML-gestützte Profilierung und Diagnose:** Traditionelle Bildungsmodelle haben Mühe, multisource und heterogene Daten zum Lernverhalten zu verarbeiten, was die Lernendenprofilierung und die Entwicklung diagnostischer Modelle einschränkt. Ein personalisiertes Framework zur neuronalen Architektursuche, getrieben von automatisiertem [[reinforcement-learning|maschinellen Lernen]], integriert [[multimodal|multimodale]] Bildungsdaten mit heterogenen Methoden, erzeugt diagnostische Modelle, die auf heterogene Lernendenprofile zugeschnitten sind, und unterstützt eine dynamische statt statische Analyse von Lernprozessen.

### Evidenz zur Wirksamkeit

Die Wissensbasis dokumentiert gemischte Evidenz: Adaptive Systeme verbessern Ergebnisse, wenn die Anpassung auf verlässlichen [[student-modeling|Lernendenmodellen]] gründet, schlecht kalibrierte Anpassung kann das Lernen jedoch schädigen. Die [[personalized-learning|Personalisierungsforschung]] unterscheidet wirksame Anpassung von oberflächlicher Anpassung an den Kunden. [[khalifeh-redefining-personalized-learning-ai-2026|Systematische Reviews]] zeigen, dass „adaptive", „personalisierte", „individualisierte" und „maßgeschneiderte" Lernangebote uneinheitlich verwendet werden – die Effektstärken hängen daher stark davon ab, wie Anpassung operationalisiert wird, und das Feld fordert einen einheitlichen Rahmen.

Ein PRISMA-2020-Review, der 959 Einträge auf 22 Interventionen in der Hochschulbildung reduzierte, zählt adaptive Lernpfade und Empfehlungssysteme zu den führenden KI-Anwendungen, doch die meisten Studien verbesserten bestehende Praxis, statt sie zu verändern ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

**Pädagogische Fundierung, nicht technische Leistungsfähigkeit, treibt Anpassung an.** Ein 15-Jahres-Review von 127 Studien zu intelligenten Tutoring-Systemen zeigt, dass die meisten Systeme um das herum gebaut sind, was die Technologie kann, und nicht um ein formuliertes pädagogisches Prinzip; er beziffert den durchschnittlichen Lernzuwachs durch intelligente Tutoring-Systeme auf etwa 20% gegenüber bis zu 98% bei menschlichem Tutoring ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

In einem zweijährigen Distrikt-RCT war die Annahme, nicht der Anpassungsmechanismus, der bindende Engpass: das Zusammenlegen der Anmeldung auf einen einzigen Schritt hob die Annahme in der ersten Sitzung allein durch Designänderungen von etwa 45% auf 83%, und die Zuwächse in der Intention-to-treat-Analyse wuchsen mit steigender Annahme ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos et al. (2026)]]).


Ein PRISMA-orientierter Review von 44 Studien zeigt, dass die Engagementliteratur hin zu behavioralem Engagement verzerrt und am dünnsten beim agentischen Engagement ist, und berichtet einen Neuheitseffekt – Engagement nimmt in Längsschnittstudien zu ALEKS und W-Pal ab, sobald die Neuheit des Werkzeugs verblasst ([[simon-student-engagement-adaptive-learning-2026|Simon, Zeng & Fryer (2026)]]).
### Die KI-Ära: LLM-basierte Anpassung und ihre Risiken

[[generative-ai|Generative KI]] hat erweitert, was adaptive Systeme können – konversationelle [[agentic-ai|agentische]] Tutoren, [[rag]]-verankerte Inhalte und [[llm]]-getriebenes [[intelligent-tutoring|Tutoring]] passen nicht nur die Aufgabenschwierigkeit, sondern auch Sprache und Erklärungsstil an (z. B. [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor]], [[chudziak-ai-math-tutoring-platform|adaptives Multi-Agenten-Mathematik-Tutoring]]). LLM-basierte Anpassung bringt jedoch neue Risiken mit sich: ohne verlässliche [[student-modeling|Lernendenmodelle]] kann Anpassung auf flachen Signalen beruhen; Überanpassung kann den produktiven Kampf verringern, den Lernende brauchen (siehe [[desirable-difficulties]], [[cognitive-offloading]]); und das Gleichgewicht zwischen Personalisieren und Bewahren der [[agency|Handlungsfähigkeit]] der Lernenden ist eine offene Designfrage (siehe [[agentic-ai|agentische KI]]). Eine von der lernenden Person angeforderte Variante der Anpassung kommt ganz ohne [[student-modeling|Lernendenmodell]] aus: in Sidorkins (2026) Graduiertenkurs passten sich die Lesetexte nur an, wenn Studierende Anschlussfragen stellten, um sie umzurahmen, zu vertiefen, zu vereinfachen oder zu lokalisieren, und verständnisorientierte Anfragen führten verlässlich zu dichterem Scaffolding (3,4x bis 8,7x mehr Definitionsmarker als im Baseline-Text), weshalb die Anforderung von mindestens drei Anschlussfragen pro Lesetext das Material in eine Interaktion verwandelte. Sie verlagert die adaptive Last außerdem auf die lernende Person: Anpassung geschieht hier nur, wenn die Studierenden wissen, worum sie bitten können.

### Beziehung zu personalisiertem Lernen und intelligentem Tutoring

Adaptives Lernen wird häufig mit [[personalized-learning|personalisiertem Lernen]] gleichgesetzt, doch sie unterscheiden sich. **Adaptives Lernen** ist der *Mechanismus* – die Echtzeitanpassung von Inhalten, Tempo und Schwierigkeit auf Grundlage eines Modells der lernenden Person. **Personalisiertes Lernen** ist das *umfassendere Ziel*, das gesamte Lernerlebnis auf ein Individuum zuzuschneiden, wobei Echtzeitanpassung eine Implementierung davon ist. Adaptive Systeme sind das kanonische *Mittel* hin zu Personalisierung. [[intelligent-tutoring|Intelligentes Tutoring]] ist die klassische *Plattform*: Intelligente Tutoring-Systeme verbinden Diagnose (Lernendenmodellierung, Knowledge Tracing) mit Anpassung, und LLM-basierte Tutoren passen sich konversationell an. Gemeinsam mit [[personalized-learning|personalisiertem Lernen]] ist adaptives Lernen ein anwendungsseitiges Mitglied der Familie der [[student-modeling|Lernendenmodellierung und adaptiven Instruktion]] – es verbraucht die Lernendenrepräsentationen, die [[student-modeling|Lernendenmodellierung]], [[knowledge-tracing]] und [[cognitive-diagnosis]] erzeugen.

### Forschungsbelege

- **[[meta-analysis-systematic-review|Metaanalytische]] Evidenz zu adaptiven + KI-Werkzeugen.** [[burneo-can-edtech-close-learning-gaps-2026|Eine Metaanalyse der Weltbank]] von 14 [[rct|RCTs]] bündelt rechnergestütztes adaptives Lernen, intelligentes Tutoring und generative KI auf einer gemeinsamen Skala und schätzt einen durchschnittlichen Lernzuwachs von ~0,125 SD ohne signifikanten Unterschied zwischen den beiden Technologiegenerationen – ein Beleg dafür, dass der Anpassungsmechanismus, nicht die jeweilige Werkzeuggeneration, die Zuwächse bewirkt.
- **Adaptive Algorithmen im Vergleich in dynamischen Domänen.** [[graph-its-adaptive-algorithms-2026|Grafbasierte ITS-Forschung]] vergleicht mehrere adaptive Lernalgorithmen (darunter Bayessche Wissenspropagation und intuitionistische Fuzzy-Logik) in einem grafbasierten Wissensrepräsentationsrahmen für dynamische Curricula.
- **RL als Anpassungsmechanismus, empirisch kartiert.** [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] sichten 89 Studien zu RL in der Bildung und zeigen, dass Anpassung in inhaltsbezogene (Sequenzierung von Instruktion/Planung von Inhalten, n = 53) und leitungsbezogene (Hinweise, [[feedback]], Auswahl von Aktivitäten, n = 36) Mechanismen zerfällt – wobei RL statistisch signifikante Überlegenheit gegenüber Baselines häufiger bei leitungsbezogener Anpassung zeigt als bei Inhaltsplanung. Sie empfehlen modellfreies RL für adaptives Lernen und warnen, dass klassisches RL in den gesichteten Studien Deep RL übertraf.
- **Korrektheitsbasierte Anpassung kann das Üben zu früh beenden.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren und Stamper (2026)]] fanden, dass adaptive Systeme, die Beherrschung aus Korrektheit erschließen, Gefahr laufen, das Üben zu beenden, bevor Lernende Kontexte erleben, in denen die gelernte Handlung zu unterlassen wäre – und so trügerische Übergeneralisierung unbemerkt bleibt. Sie empfehlen, Aufgaben mit einem „Nicht-Handeln"-Detektor aufzunehmen, bevor Beherrschungs-Abbruchregeln greifen, damit Anpassung bedingtes Verständnis prüft (wissen, wann eine Handlung zu unterlassen ist), nicht nur Korrektheit.
- **Eine Beherrschungsserie ist kein dauerhaftes Lernen.** In einem Feldexperiment mit 6.000 Schülerinnen und Schülern der Mittelstufe hob eine KI-gestützte Regel „dreimal richtig in Folge" die plattformdefinierte Zielerreichung um etwa 28,7 Prozentpunkte, ohne einen eine Woche später erhobenen Nachzügigkeitstest zu verbessern; Beherrschungsmetriken müssen also gegen verzögertes Lernen validiert werden, statt an dessen Stelle zu treten ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al. (2026)]]).
- **Passen Sie die *Art* des kognitiven Engagements an, nicht nur die Schwierigkeit.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi et al. (2026)]] fanden, dass BKT- und Deep-RL-Richtlinien, die angeleitete (aktive) oder fehlerbehaftete (konstruktive) durchgearbeitete Beispiele zuwiesen, beide die zufällige Zuweisung in einem Logiktutor mit 113 Studierenden übertrafen (Posttest 72,3 und 72,5 gegenüber 65,7), wobei BKT Studierende mit geringem Vorwissen am besten bediente und DRL die mit hohem.
- **Mehr Feedback ist nicht besseres Feedback.** In einem achtwöchigen adaptiven Stochastikkurs (194 Studierende) wurden direktives, informatives und transformatives Feedback unterschiedlich angenommen, und transformatives Feedback war mit kognitiver Überlastung statt mit besserer Regulation verbunden – Anpassung muss zur Phase und zum Bedarf der lernenden Person passen, nicht die Feedbackdichte maximieren ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh & Fromm (2026)]]).
- **Engagementprofile als Anpassungsziele.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] verfolgten 315 Online-Lernende beim Bau von 822 Modellen in VERA und klassifizierten ihr Engagement in die Profile Beobachtung, Konstruktion und Exploration; sie fanden, dass Lernende dazu tendieren, von konstruktionsfokussiertem Verhalten hin zu vollerer, hypothesengeleiteter Exploration fortzuschreiten, während Beobachtung über die Phasen hinweg bestehen bleibt. Sie argumentieren, dass adaptives und personalisiertes Design diese Profile erkennen und Feedback adressieren sollte (z. B. ähnliche Modelle empfehlen oder tieferes konzeptuelles Verständnis unterstützen), um oberflächliche Beobachtende hin zu integrativerem, vollzyklischem Modellieren zu bewegen.
- **Ein Gedächtnis, das gelesen, aber nicht geschrieben wird, ist keine Anpassung.** CoLearns Kontrollbedingung mit eingefrorenem Gedächtnis präsentierte feste Aufgaben und las dennoch das Lernendenprofil, und der Anteil der Aufgaben, die auf eine wirklich schwache Fähigkeit zielten, sank von 0,72 auf 0,57, wobei der finale Beherrschungsfehler über dem der adaptiven Bedingung lag ([[colearn-agentic-tutor-co-learning-loop-2026|He et al. (2026)]]).
- **Der Zuwachs kam aus der Sequenzierung, nicht aus einem klügeren Tutor.** [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung et al. (2026)]] trainierten einen personalisierten Tutor mit LLM-geleitetem Reinforcement Learning und setzten ihn in einem fünfmonatigen Python-Kurs an zehn [[k-12|weiterführenden Schulen]] in Taipeh ein, wobei sie 770 Studierende zwischen adaptiver und fester leicht-zu-schwer-Aufgabensequenz randomisierten. Adaptive Sequenzierung hob die Punktzahl in der [[summative-assessment|Abschlussprüfung]] in Präsenz ohne Hilfe um 0,156 SD (0,150 SD mit Kontrollen) – während eine Mediationsanalyse den Effekt fast vollständig dem Engagement zurechnete (0,185 SD über Bearbeitungszeit, 0,149 SD über Versuche) statt leichterem oder schwererem Material, und die Zuwächse waren bei Anfängern und Schulen unterer Stufen am größten. Der adaptive Hebel war die Reihenfolge des Übens, nicht die Qualität des Chats.
- **Behalten Sie Beherrschungsentscheidungen regelbasiert und beschränken Sie maschinelles Lernen auf das Monitoring.** Ein achtwöchiges adaptives STEM-Programm für 30 Sechstklässler steuerte die Lernpfade über regelbasierte Beherrschung, während maschinelles Lernen die Leistung verfolgte und so die Anpassung prüfbar hielt; ohne Pretest und mit einem Klassenraum pro Bedingung sind seine Zuwächse jedoch eine Pilotvorlage, die lokal zu validieren ist ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet et al., 2026]]).
- **Passen Sie das Engpassmerkmal an, nicht den schwachen Durchschnitt.** Übergangsmodellierung von Wissenszuständen stufte analytisches Denken als am schwersten zu erwerben und am leichtesten zu verlieren ein – niedrigste Vorwärtsübergangswahrscheinlichkeit 0,31 und höchste Rückwärtsübergangswahrscheinlichkeit 0,22–0,23 –, was das erneute Üben des markierten Merkmals zu einem schärferen Anpassungsziel macht als die Gesamtbeherrschung ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **Anpassung aus Prozesssequenzen, nicht aus aggregierten Punktzahlen.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]] leiteten Scaffolding-Regeln aus der Analyse der *Reihenfolge* von 65 Dialogbeiträgen von Studierenden in Dreiergruppen ab und bewegten adaptives Lernen von aggregierten Verhaltens- oder Leistungsmaßen hin zu individuellen Prozesssequenzen; maximales Scaffolding erhöhte on-task-Verhalten, aber auch Skripting, und das Design ist ungetestet.

## Verbundene Konzepte

- [[online-teaching-and-learning]] — Online-Lehre und -Lernen
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — Überblick: KI-Technologien und -Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)
- [[recommender-systems-and-learning-paths]]
## Verbundene Artikel
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Trügerische Übergeneralisierung: Adaptive Beherrschung kann das Üben beenden, bevor Lernende wissen, wann eine Handlung zu unterlassen ist (An, McLaren & Stamper 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — KI-Tutoring ist kein Monolith: Was wir tatsächlich wissen (Stanford SCALE/NSSA-Brief)
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — Systematischer Review des studentischen Engagements in adaptiven Lernplattformen
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtuelles Tutoring mit CAL: ein Experiment zu Annahme und Lernen
- [[making-ai-tutoring-productive-mastery-math-2026]] — KI-Tutoring produktiv machen: beherrschungsbasiertes Mathematiküben
- [[chudziak-ai-math-tutoring-platform]] — Adaptives/personalisiertes Multi-Agenten-Mathematik-Tutoring (Chudziak & Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Personalisiertes Lernen neu definiert: systematischer Review
- [[deeptutor]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — Tutoringspezifische KI, kalibriert auf die Bereitschaft der Lernenden, gegenüber allgemeinen Chatbots
- [[context-based-ai-secondary-chemistry-2026]] — Kontextbasierter 7E-Unterricht mit KI in der Sekundarstufe Chemie
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Adaptives KI-basiertes STEM-Programm für tiefes Lernen
- [[graph-its-adaptive-algorithms-2026]] — Grafbasiertes intelligentes Tutoring für dynamische Domänen (2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayessche kognitive Diagnose für personalisierte Lernpfade
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptives ICAP-Scaffolding in einem ITS (BKT gegenüber DRL)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Metaanalyse, die adaptive und KI-gestützte Werkzeuge über 14 RCTs bündelt
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Systematischer Review: adaptive Lernpfade unter den führenden Anwendungsfällen der KI-Integration in der Hochschulbildung
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Adaptive Problemsequenzierung schlägt feste Sequenzierung: +0,156 SD in einer Prüfung ohne Hilfe, vermittelt über Engagement statt Schwierigkeit (Chung et al. 2026)
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: ein agentischer Tutor, der seine lernende Person in einer Mensch-KI-Co-Learning-Schleife lernt
