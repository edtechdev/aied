---
title: "Modellierung der Lernenden und adaptive Instruktion"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
translation_of: concepts/student-modeling
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Modellierung der Lernenden und adaptive Instruktion** — der Dachbegriff dafür, wie KI Lernende repräsentiert (was sie wissen, fühlen und brauchen) und wie sie diese Repräsentationen nutzt, um [[teacher-role|Unterricht]] anzupassen. Die Familie erstreckt sich über die *Modellierungs*schicht — **Modellierung der Studierenden**, [[knowledge-tracing|Knowledge Tracing]], [[cognitive-diagnosis|kognitive Diagnose]] und [[simulating-students|Simulation von Studierenden]] — und die *adaptiven Systeme*, die diese Modelle konsumieren — [[intelligent-tutoring|intelligentes Tutoring]], [[adaptive-learning|adaptives Lernen]] und [[personalized-learning|personalisiertes Lernen]]. Die geteilte Frage: *wie weiß ein System, was eine lernende Person weiß, und was sollte es als Nächstes lehren?*

## Fragen zum Nachdenken

- Die Dachfrage, die diese Seite stellt, ist: wie weiß ein System, was eine lernende Person weiß, und was sollte es als Nächstes lehren? Bevor Sie weiterlesen: Wie würden Sie überhaupt beginnen, „was eine lernende Person weiß“ in einer Maschine zu repräsentieren?
- Modellierung der Lernenden erstreckt sich über Knowledge Tracing (Wissen über Zeit verfolgen), kognitive Diagnose (beherrschte Fertigkeiten kartieren) und Simulation von Studierenden (synthetische Lernende). Was, glauben Sie, kann jeder Ansatz gut — und was riskiert er, falsch zu machen?
- Jede adaptive KI hängt von einem Modell der lernenden Person ab. Wenn ein Modell nur so gut ist wie die Evidenz, die es speist, welche Evidenz haben KI-Systeme Ihrer Meinung nach tatsächlich über eine studierende Person, und welche wichtigen Dinge über sie bleiben unsichtbar?
- Ein Modell mag erfassen, was eine studierende Person richtig und falsch macht, aber nicht warum, oder nicht wie sie sich fühlt. Wie könnte ein Lernendenmodell ein adaptives System in Weisen in die Irre führen, die der studierenden Person eher schaden als nutzen?
- Wenn Sie einen adaptiven Tutor entwerfen würden, was sollten Sie in seinem Modell von Ihnen enthalten — und was sollten Sie ihm ausdrücklich verbieten anzunehmen?

## Einführung

Modellierung der Lernenden ist die rechnerische Repräsentation von Lernenden; adaptive Instruktion ist, was Systeme mit dieser Repräsentation tun. Jede adaptive KI in der Bildung hängt von einem Modell der lernenden Person ab — selbst einem leichten —, und jedes Lernendenmodell existiert, um irgendeine Unterrichtsentscheidung zu informieren. Diese Seite ist der Dachbegriff für diese Pipeline: die Modellierungsmethoden, die Systeme, die auf Modellen handeln, und wie sie sich verhalten.

## Die Modellierungsschicht

Diese Konzepte beantworten „was weiß, fühlt und braucht diese lernende Person?“ — die Repräsentationsseite der Familie.

- **Modellierung der Studierenden** — die breite Praxis, Merkmale der lernenden Person (Wissen, Fertigkeiten, [[affective-computing|affektive]] Zustände, [[student-engagement|Engagement]], Präferenzen) in rechnerischer Form zu repräsentieren. Es ist der Dachbegriff innerhalb dieser Schicht, der alle Weisen umfasst, eine lernende Person zu repräsentieren.
- **[[knowledge-tracing|Knowledge Tracing]]** — die spezifische Praxis, kognitives Wissen *über Zeit* zu modellieren, indem Leistung an Übungen verfolgt und künftige Meisterschaft vorhergesagt wird. Es formalisiert die zeitliche Dynamik des Lernens — wann Wissen gewonnen wird, zerfällt, und wie Konzepte zusammenhängen.
- **[[cognitive-diagnosis|Kognitive Diagnose]]** — feinkörniges [[assessment|Assessment]] dessen, welche spezifischen Fertigkeiten oder Wissenskomponenten eine lernende Person beherrscht, das ein Meisterschaftsprofil erzeugt, das gezielte Remediation stützt.
- **[[simulating-students|Simulation von Studierenden]]** — *synthetische* Lernende auf Abruf erzeugen, statt eine echte Person zu repräsentieren, damit [[pedagogy|Pädagogik]] und KI-Systeme offline getestet oder trainiert werden können.
- **Ein kausaler Formalismus für Lernendenmodelle.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] ersetzen noisy-gate Bayessche Netzwerke durch von Expert:innen elizitierte strukturelle Kausalmodelle und machen Hinweise zu expliziten endogenen Variablen, sodass das Modell fragen kann, was eine studierende Person ohne die von ihr genutzte Hilfe geantwortet hätte — etwas weniger prädiktiv, aber fähig zu Kontrafaktualen, die assoziative Modelle nicht ausdrücken können.

Die Studie von [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] illustriert, dass treue Repräsentation nicht die komplexeste Modellfamilie verlangt: ein leichtes, intrinsisch interpretierbares Entscheidungsbaum-Modell der Studierenden — gebaut aus Merkmalen der Interaktion mit Kursinhalten statt aus reicher Telemetrie — sagt modulweisen Fortschritt in groß angelegten Online-[[cs-education|Programmier]]kursen voraus (85–91% Genauigkeit) und trennt desengagiert-gefährdete, desengagiert-aber-erfolgreiche und engagierte Hochleister-[[student-engagement|Engagement]]profile, was [[learning-analytics|Learning-Analytics]]-Frühwarnung im großen Maßstab stützt.

Ein prädiktives Lernendenmodell kann auf der Struktur der Einschreibung ruhen statt auf Spurdaten: TRACE kodiert jedes Semester als ungeordneten Korb von Kursen und sagt Kursmenge und Noten gemeinsam voraus, was den Notenvorhersagefehler auf 0.1339 MAE senkt — 46.4% unter einem Nur-Noten-Modell —, über 5,326 Studierende und zehn Jahre ([[trace-course-grade-prediction-2026|Savala (2026)]]).

Modelle der Studierenden können auch rein aus Verhaltensspuren gebaut werden und dennoch Anpassung stützen. [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] leiteten drei Engagementprofile — Beobachtung, Konstruktion und Exploration — aus den Clickstreams von 315 Online-Lernenden ab, die 822 ökologische Modelle in VERA bauten, ohne jede demografische oder kontextuelle Daten, und zeigten, dass diese Profile die Modellqualität vorhersagen (Exploration erzeugt die komplexesten und vielfältigsten Modelle, während Beobachtung von kopierten statt originalen Modellen dominiert wird). Solche Charakterisierungen auf Engagementebene sind die grobkörnigen Studierendenmodelle, die die [[adaptive-learning|Adaptive-Instruktion]]-Schicht konsumieren kann, um Feedback zu zielen.

Affektive Modellierung der Studierenden ist eine weitere Dimension: ein Mathe-Tutor schloss Emotion aus konversationellem Text und Gesichtsausdruck und bildete den aggregierten Zustand auf Tutoringstrategien ab, aber die multimodale Fusion erreichte nur 60% Genauigkeit gegenüber den eigenen Annotationen der Teilnehmenden, was die Affektlesart zum schwächsten Glied der Pipeline macht ([[kar-mathbuddy-affective-math-tutoring-2025|Kar et al. (2025)]]).

[[cross-subject-validity-delayed-start|Gutterman et al. (2026)]] fanden, dass ein während Mathematikübungen aufgezeichnetes Verzögerungsstartsignal Englischergebnisse vorhersagte, wobei chronisch Verzögernde (über 13 Minuten) geringere Zugewinne zeigten (ELA β = -.11 SD), sogar nach Kontrolle für [[prior-knowledge|Vorwissen]] und Zeit-auf-Aufgabe — weshalb verhaltensbezogene Studierendenmodelle über Fächer hinweg ohne Neu-Training pro Kurs übertragen können, obwohl ihre Schnittpunkte neu abgeleitet werden müssen.

## Die Adaptive-Instruktion-Schicht

Diese Konzepte beantworten „was sollte als Nächstes gelehrt werden?“ — die Anwendungsseite, die Lernendenmodelle konsumiert.

- **[[intelligent-tutoring|Intelligentes Tutoring]]** — Systeme, die Studierendenmodelle und Meisterschaftsschätzungen nutzen, um Probleme auszuwählen und Anleitung auf Schrittebene zu geben, die klassische Anwendung der Modellierung der Lernenden.
- **[[adaptive-learning|Adaptives Lernen]]** — Systeme, die Inhalte, Tempo oder Schwierigkeit als Reaktion auf das Lernendenmodell anpassen.
- **[[personalized-learning|Personalisiertes Lernen]]** — das weitere Zuschneiden von Instruktion, Inhalten und Wegen auf individuelle Merkmale und Präferenzen der lernenden Person.

## Wie die Mitglieder sich verhalten

Die Konzepte bilden eine Pipeline statt Konkurrenten: **Modellierung der Studierenden** ist die Dachrepräsentation; [[knowledge-tracing|Knowledge Tracing]] und [[cognitive-diagnosis|kognitive Diagnose]] sind spezifische Modellierungsmethoden, die sie bevölkern; [[simulating-students|Simulation]] *erzeugt* Lernende, statt echte zu repräsentieren; und [[intelligent-tutoring|intelligentes Tutoring]], [[adaptive-learning|adaptives Lernen]] und [[personalized-learning|personalisiertes Lernen]] sind die Systeme, die diese Modelle konsumieren, um Instruktion anzupassen.

**Modellierung der Studierenden gegenüber Simulation von Studierenden** ist die zentrale Unterscheidung, die gerade zu halten ist. Modellierung der Studierenden handelt davon, **eine echte lernende Person zu repräsentieren** — ein Modell *aus* den Daten einer tatsächlichen studierenden Person zu bauen, damit ein adaptives System auf diese Person handeln kann. Simulation von Studierenden dagegen **erzeugt eine synthetische lernende Person** auf Abruf, die für echte Lernende einspringt, damit Pädagogik und KI offline bewertet oder trainiert werden können. Die zwei sind eng verwandt statt austauschbar: simulierte Studierende *betten* typischerweise ein Modell der Studierenden ein (einen erkenntnistheoretischen Zustand, einen Satz von [[misconceptions|Fehlvorstellungen]] oder ein Engagementprofil) und stützen sich auf dieselben Konstrukte, die [[knowledge-tracing|Knowledge Tracing]] und [[cognitive-diagnosis|kognitive Diagnose]] formalisieren. Ihre Zwecke divergieren — Modellierung der Studierenden dient der Live-Anpassung, indem sie Entscheidungen über eine echte Person informiert, wohingegen [[simulation|Simulation]] Lernende fabriziert, um Systeme zu testen (und zunehmend, um KI zu auditieren, z. B. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]) statt auf eine echte Person zu handeln.

**Knowledge Tracing gegenüber Modellierung der Studierenden** ist die andere gängige Verwechslung. Knowledge Tracing modelliert spezifisch kognitives Wissen über Zeit; Modellierung der Studierenden ist die breitere Praxis, die alle Aspekte einer lernenden Person abdeckt (affektiver Zustand, Engagement, Präferenzen). Knowledge Tracing ist eine *Art von* Modellierung der Studierenden, fokussiert auf die kognitiv-zeitliche Dimension. Knowledge-Tracing-Konstrukte informieren auch [[simulating-students|simulierte Studierende]] — der kognitive Zustand einer simulierten lernenden Person ist oft mit derselben Meisterschafts-/Zerfallsdynamik formalisiert, die Knowledge-Tracing-Modelle modellieren, weshalb Simulation eine Weise ist, die Wissenszustände zu *erzeugen*, die Tracing-Methoden normalerweise aus echten Antwortdaten *erschließen*.

**Tracing am [[curriculum-design|Curriculum]] zu verankern stärkt das Modell.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] zeigen, dass ein Lernendenmodell Treue gewinnt, wenn Tracing an explizite Curriculumstruktur gebunden ist statt rein aus Daten gelernt: ihr Outcome-Based Knowledge Tracing (OKT) behandelt Kursergebnisse in Outcome-Based Education als die zu verfolgenden Wissenskonzepte, liefert Konzeptbeziehungen über expert:innenvalidierte OBE-„Affinitätszuordnungen“ zwischen Kurs- und Programm-Ergebnissen (eine explizite Alternative zu impliziter Aufmerksamkeit oder Graphen-Nachrichtenweitergabe), und nutzt ein speichergestärktes Modul, um zu modellieren, wie das Erreichen eines Ergebnisses andere beeinflusst. Auf Live-Daten eines Ingenieurprogramms übertraf es die Baselines DKT, DKVMN, EKT und SimpleKT (89.81% AUC), was illustriert, dass die Modellierungsschicht die eigene Struktur des Curriculums ausnutzen kann, um Lernende treuer zu repräsentieren.

**Intelligentes Tutoring gegenüber adaptivem/personalisiertem Lernen** sitzt auf der Anwendungsseite: intelligentes Tutoring ist das System, das Probleme auswählt und auf Schrittebene anleitet; adaptives Lernen stimmt Inhalte und Tempo ab; personalisiertes Lernen ist das breiteste Zuschneiden des gesamten Lernerlebnisses. Alle drei sind die „Konsumenten“ der Modellierungsschicht.

## Die geteilte Validitätsherausforderung

Über die gesamte Familie hinweg ist die definierende Validitätsherausforderung dieselbe: die Repräsentation der lernenden Person muss **den wahren Zustand einer lernenden Person treu widerspiegeln** statt der Standardannahmen des Systems. Für **Modellierung der Studierenden** und [[knowledge-tracing|Knowledge Tracing]] bedeutet das, dass das Modell echt erfassen muss, was eine lernende Person weiß ([[ai-ed-evaluation|Evaluation]] und [[assessment-validity|Messvalidität]]). Für [[simulating-students|Simulation]] bedeutet es, dass die synthetische lernende Person realistische Unvollkommenheit zeigen muss statt der vollen Kompetenz des Modells oder [[ai-sycophancy|sykophantischer]] Zustimmung. Adaptive Systeme, die fehlerbehaftete Modelle konsumieren, erben und propagieren diesen Fehler.


Modelle, die den Zustand der Lernenden aus Gameplay erschließen, erreichten AUCs von 0.848–0.913, doch nur zwei der 55 reviewten Studien auditieren sie auf demografischen Bias, und genau eine untersuchte unterschiedliche Ergebnisse nach Fähigkeit der lernenden Person ([[ai-game-based-learning-systematic-review-2026|Kaşarcı und Yurt (2026)]]).

Manche beabsichtigte Signale sind aus dem Dialog vielleicht überhaupt nicht zurückholbar: der Pilot des Learning-Context-Rahmenwerks holte Fehlvorstellungen zu 91.4% und Angst zu 100% zurück, aber Gewissenhaftigkeit nur zu 68.6% und Sprachkompetenz zu 60%, weshalb ein kontextbewusstes Modell langsam auftauchende Merkmale erfassen sollte, statt zu warten, dass der Dialog sie offenlegt ([[learning-context-framework-context-aware-ai-education-2026|Liu et al. (2026)]]).

[[edumirror-educational-social-dynamics|Lin et al. (2026)]] legen eine Zirkularität offen darin, wie solche synthetischen Lernenden validiert werden: ihre EduMirror-Agenten verabreichen psychometrische Fragebögen nachträglich und lesen Übereinstimmung mit der internen Werterepräsentation des Agenten als psychologische Validität, aber weil der Surveyor Dimensionen misst, die bereits in diesem Wertsystem kodiert sind, ist die Prüfung eine Konsistenzprüfung statt unabhängige Validierung.

**Korrektheit ist nicht immer ein treues Signal.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren und Stamper (2026)]] zeigen, dass ein Lernendenmodell, das Meisterschaft aus korrekten Handlungen erschließt, den wahren Zustand einer lernenden Person falsch darstellen kann: Lernende, die *trügerische Übergeneralisierung* zeigen, erscheinen als meisternd, lassen aber eine kritische Anwendungsbeschränkung aus, weshalb adaptive Systeme Übung vorzeitig stoppen können. Lernendenmodelle sollten bedingtes Verständnis bewerten — einschließlich ob die lernende Person weiß, wann eine Handlung zu unterlassen ist —, nicht nur Handlungskorrektheit.

Verborgene Fehlvorstellungen zeigen dasselbe Versagen von der anderen Seite: [[correct-answer-trap-misconceptions|Imran und Bulathwela (2026)]] fanden, dass ein feinabgestimmter Klassifikator 57.4% der durch fehlerhaftes Schlussfolgern erreichten korrekten Antworten fing, und bei einer Prävalenz von 1.6% ließ selbst ein 83.6%-genaues Schlussfolgermodell 8 Fehlalarme pro Detektion — weshalb auf Korrektheit beruhende Meisterschaftssignale sowohl unvollständig als auch teuer zu reparieren sind.

**Wie ein Modell validiert wird, ist selbst eine Validitätsfrage.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan und Carvalho (2025)]] zeigen, dass populäre Lernendenmodelle (BKT, BKT-with-Forgetting, AFM) menschliches Lernen nur zu erfassen scheinen, wenn sie rückwirkend auf einen vollständigen mehrsitzungsbasierten Datensatz angepasst werden; unter zeitbasierter (walk-forward) Kreuzvalidierung — eine künftige Sitzung aus früheren vorherzusagen, wie solche Modelle tatsächlich eingesetzt werden — überschätzen sie Leistung, verfehlen den [[retrieval-spacing-interleaving|Spacing-Effekt]] und ordnen Übungsbedingungen falsch. Weil vergessenserweiterte und vergessensfreie Modelle über Sitzungen hinweg etwa gleich abschnitten, schließen die Autoren, dass Vergessen oft in Lernendenparameter absorbiert wird statt echt repräsentiert zu sein. Die Lektion für die Familie ist, dass eine treue Repräsentation der lernenden Person so validiert werden muss, wie sie genutzt wird — und dass das Vermengen von Leistung im Moment mit langfristigem Behalten Modelle erzeugt, die genau aussehen, Lernende aber falsch darstellen.

## Modellierung im LLM-Zeitalter

Neuere Fortschritte nutzen [[llm|LLMs]] für reichhaltigere Modellierung. Das [[xie-hillm-cd-2026|HiLLM-CD-Rahmenwerk]] repräsentiert Studierende als Kompetenzbäume; [[multimodal-knowledge-graph-educational-reasoning|multimodale Ansätze]] konstruieren evidenzbasierte Wissensrepräsentationen aus vielfältigen Datenquellen; [[inside-llm-student-simulator-reasoning-2026|LLMs simulieren jetzt Studierende mit Schlussfolgerung]]. LLMs ermöglichen automatisierte Modellkonstruktion aus Bildungstext und höhertreue [[simulating-students|Simulation von Studierenden]], was die Abhängigkeit von Expert:innenannotation verringert — und die Treuebedenken oben verschärft. Signale aus dem Lernendenmodell *begründen* auch LLM-Schlussfolgern: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] fanden, dass das Verfüttern von GPT-4 mit der Bayesschen [[knowledge-tracing|Knowledge-Tracing]]-Fertigkeitsschätzung einer studierenden Person zusammen mit der Schnittstellenstruktur des Tutors seine Fehlerdiagnose scharf verbesserte (Identifikation logischer Fehler beim Faktorisieren stieg von 40% auf 81%; ~87.8% insgesamt), während mehrstufige Probleme und Antworten mit mehreren Fehlern die schwächsten Fälle blieben — Evidenz dafür, dass das Koppeln eines formalen Lernendenmodells an ein LLM tragfähiges Schlussfolgern über eine echte studierende Person stärkt, aber nicht garantiert. [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] zeigt, wie eine persistente Version dieser Kopplung aussieht: Meisterschaft und geschürfte Fehlvorstellungen werden pro (lernende Person, Fach) gespeichert statt als Protokolle pro Sitzung, sodass Evidenz über Sitzungen hinweg akkumuliert, und das Gedächtnis wird von einer LLM-benotenden Beobachtungsfunktion geschrieben, bleibt aber für die lernende Person über Meisterschaftsbalken und ein Etikett inspizierbar, das benennt, was jede erzeugte Frage zu sondieren gewählt wurde. Seine Kontrollen machen den Schreibschritt explizit — mit dem Gedächtnis gelesen, aber nicht länger aktualisiert, fiel der Anteil der Items, die auf eine echt schwache Fertigkeit zielen, von 0.72 auf 0.57 —, und es hält die Qualifikation dieser Seite intakt: die gespeicherte Meisterschaft ist der Glaube des Agenten über die lernende Person, nicht eine Messung ihres Wissens.

Sprache kann ID-Embeddings als Repräsentation ersetzen: PLCD baut LLM-abgeleitete Konzeptschemata und Aufgaben-Prozess-Graphen als Priors auf und erreicht 83.51% Genauigkeit auf XES3G5M, mit den größten Zugewinnen im Kaltstart — 4.60 ACC-Punkte über KCD für neue Konzepte und 4.00 für neue Aufgaben —, wo ID-basierte Modelle keine Historie haben ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).


Simulatorqualität trennt sich in zwei Achsen: eine Pool-dann-Spezialisieren-Pipeline, die geteilte Verhaltensmuster trainiert, bevor ein Adapter pro studierender Person Verhaltenstreue 0.51 und Anleitungsreagibilität 0.91 im Schach erreichte, gegenüber 0.23 und 0.72 für eine Grenzmodell-Rollenspiel-Baseline, was zeigt, dass ein Simulator sowohl eine studierende Person treffen als auch steuerbar sein muss ([[studentsim-llm-student-simulators|Yang et al. (2026)]]).

Risikowerte können genau und dennoch ungestützt sein: [[at-risk-students-ml-prediction|Gheisari und Salarian (2026)]] erreichten 99% Genauigkeit bei der Vorhersage des Abbruchs aus Einschreibungs- und Leistungsdatensätzen, aber auf 1,027 bereinigten Datensätzen einer einzelnen Institution ohne externe Validierung, ohne getestete Intervention, und mit Fairness-Audits als künftige Arbeit — der Wert unterstützt Triage, nicht ein Urteil über eine studierende Person.


Ein Lernendenmodell, das nur Risiko vorhersagt, genügt nicht für Entscheidungsunterstützung: das Koppeln eines kalibrierten Gefährdetenmodells mit ganzzahliger Programmierung von Rekurs über diskrete Handlungen — validiert gegen Timing-, Budget-, Unveränderlichkeits- und Verfügbarkeitsbeschränkungen — erzeugte kompakte Interventionspläne, wo Optimierung allein nicht vollziehbare akzeptierte ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge (2026)]]).

Ein Black-Box-Schätzer kann auch in ein kleines selbst-erklärendes Modell destilliert werden: eine zweistufige Pipeline verwandelt einen angepassten Schätzer und seine Post-hoc-Interpretation in einen „Mentee“ mit 2B Parametern, der eine Schätzung zusammen mit einer Narration zurückgibt, auditiert auf Treue statt auf Flüssigkeit ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Verbindungen zu anderen Konzepten

Modellierung der Lernenden und adaptive Instruktion speisen [[learning-analytics|Learning Analytics]] ([[visualization|Dashboards]] und Interventionen), [[formative-assessment|formatives Assessment]] (analyticsgetriebenes Assessment), und [[feedback|Feedback]] (was das System der lernenden Person sagt). Es verbindet sich mit [[ai-education|KI in der Bildung]] als Kernstrang von KI für die Bildung.

## Verbundene Konzepte

- [[learners]] — Lernende: der Dachbegriff für die Konzepte auf der Seite der Lernenden
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — die Modelle unter Risikovorhersage und Zielung von Unterstützung

## Verbundene Artikel
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — LLM tutors over-reject valid-alternative, over-validate incorrect (Yasir et al. 2026)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[studentsim-llm-student-simulators]] — StudentSim: Training LLM-based Student Simulators
- [[predicting-attrition-competitive-programming]] — Predicting Student Attrition in Competitive Programming
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — compact learner state plus a calibrated tracer as a recommender environment
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop

- [[ai-game-based-learning-systematic-review-2026]] — Stealth assessment reached AUCs of 0.848–0.913, but bias audits were near-absent across 55 studies
