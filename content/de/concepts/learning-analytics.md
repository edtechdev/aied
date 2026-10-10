---
title: Learning Analytics
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
translation_of: concepts/learning-analytics
source_updated: "2026-10-07T09:45:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Learning Analytics** — das Messen, Sammeln, Analysieren und Berichten von Daten über Lernende und ihre Kontexte zum Zweck des Verstehens und Optimierens von Lernen. KI hat Learning Analytics von beschreibenden Dashboards hin zu prädiktiven und präskriptiven Systemen verwandelt.

## Fragen zum Nachdenken

- Die meisten Menschen nehmen an, dass das Sammeln von mehr Lerndaten Bildung automatisch verbessert. Die Seite argumentiert, Analytics würden erst dann aussagekräftig, wenn sie in eine Intervention zurückfließen — sonst beschreiben oder markieren sie bloß, ohne das Lernen zu verändern. Wo haben Sie Daten gesehen, die gesammelt wurden und nie zu einer Handlung führten?
- Stellen Sie sich vor, ein Dashboard sagt Ihnen, eine studierende Person sei „gefährdet“ — eine Vorhersage. Was unterscheidet das von echt umsetzbarer Orientierung, die eine Lehrkraft oder eine Institution tatsächlich ausführen kann? Die Seite legt nahe, dass Vorhersage allein nicht genügt.
- Die Seite hält fest, KI habe Learning Analytics vom Beschreiben dessen, was geschah, zum Vorhersagen dessen, was geschehen wird, und Verschreiben dessen, was als Nächstes zu tun ist, bewegt. Welche dieser drei Generationen haben Sie erlebt, und was fehlte in den anderen?
- In einer Studie erzeugten drei verschiedene KI-Modelle scharf unterschiedliche Unterstützungspläne für dieselben Daten einer studierenden Person, und die Verbindungen zwischen Analytics-Indikatoren und empfohlener Hilfe waren meist schwach. Was legt das nahe über das Vertrauen in den Ratschlag einer KI auf den ersten Blick?
- Learning Analytics sitzt in einer Datenschutzspannung: je feinkörniger die Daten, desto aufschlussreicher — und desto mächtiger die Intervention. Wo würden Sie die Grenze dafür ziehen, was über Sie oder Ihre Studierenden gesammelt wird, und wer sollte das entscheiden?

## Einführung

### KI-verstärkte Analytics

- **Prädiktive Analytics:** [[reinforcement-learning|Maschinelles Lernen]] auf Interaktionsdaten der Lernenden sagt Ergebnisse voraus — von der [[at-risk-students-ml-prediction|Identifikation gefährdeter Studierender]] bis zur [[knowledge-tracing|Schätzung des Wissenszustands]].
- **Validierung zählt ebenso viel wie Vorhersage.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan und Carvalho (2025)]] zeigen, dass prädiktive Wissenszustandsmodelle (BKT, BKT-with-Forgetting, AFM) genau aussehen, wenn sie rückwirkend auf eine vollständige Sitzungshistorie angepasst werden, doch unter **zeitbasierter Kreuzvalidierung** — die nächste Sitzung aus vorherigen vorherzusagen, wie Analytics tatsächlich eingesetzt werden — überschätzen sie die Leistung der Lernenden, verfehlen Spacing-/Vergessensdynamiken und können Übungsbedingungen falsch ordnen. Die Vorsicht für Analytics: rückwirkende Anpassung kann schlechte vorwärtsgerichtete prädiktive Validität auf longitudinalen Daten verdecken, weshalb Indikator- und Dashboard-Modelle walk-forward validiert werden sollten.
- **Die Item-Attribut-Zuordnung hinter der Schätzung validieren.** Die Q-Matrix, die Items mit Attributen verknüpft, ist eine Annahme, keine Daten: zurückgewiesene Einträge bei 14 von 918 analytischen Denkitems senkten, einmal korrigiert, ein scheinbares Wissenszustandsmuster von 14.2% auf 3.8% — weshalb Meisterschafts-Analytics ihre Q-Matrix auditieren sollten, nicht nur ihre prädiktive Anpassung ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **[[curriculum-design|Curriculum]]-verankerte prädiktive Analytics:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] schätzen Wissenszustände innerhalb von Outcome-Based Education, indem sie Kursergebnisse direkt aus LMS-Interaktions- und Leistungsdaten verfolgen, OBE-Affinitätszuordnungen (Kurs-Programm-Ergebnis-Beziehungen) nutzen, um Konzeptverknüpfungen zu strukturieren, und ein speichergestärktes Netzwerk, um kreuz-ergebnisbezogene Auswirkungen zu modellieren — und erreichen 89.81% AUC und übertreffen DKT, DKVMN, EKT und SimpleKT auf Live-Ingenieurdaten einer Universität, während sie auf allgemeinen ASSISTments-Daten nur wettbewerbsfähig (nicht überlegen) bleiben.
- **Interpretierbare Fortschrittsvorhersage mit einem Handlungsfenster:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] sagen modulweisen Fortschritt der Studierenden in groß angelegten Online-[[cs-education|Programmier]]kursen aus Inhaltsinteraktions-Log-Merkmalen voraus, nutzen dabei gläserne Entscheidungsbäume, die die Genauigkeit Black-Box-Modelle erreichen (85–91%), und markieren „No submission“-Abbruchergebnisse bis zu 7–8 Tage vor Modul-Fristen — ein explizites Echtzeitfenster für [[teacher-role|Intervention]] statt einer bloßen Risikomarkierung, und eine explorative Typologie von desengagiert-gefährdeten, desengagiert-aber-erfolgreichen und engagierten Hochleister-Profilen.
- **Föderiertes, erklärbares Risikomodell über Institutionen hinweg (2026).** [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] erweitern Risikomodellierung über eininstitutionelle Vorhersage hinaus, indem sie ein Multi-Aufgaben-Modell (Leistung + Abbruch) über simulierte Institutionen hinweg mittels föderierten Lernens trainieren, sodass rohe Daten der Studierenden jede Institution nie verlassen. Unter kontrollierter Heterogenität (Label-Skew, Klassenungleichgewicht, zeitlicher Drift, strukturelle Missingness) bewahrt das Modell Rangfolgegenauigkeit (OULAD AUC 0.918) und strukturell stabile Rangfolgen der Merkmalswichtigkeit, doch driftet die probabilistische Kalibrierung — was Rangfolgeleistung von Wahrscheinlichkeitsverlässlichkeit entkoppelt. Für Frühwarnsysteme ist das eine Vorsicht, dass schwellenwertbasierte Interventionen institutionenspezifische Kalibrierung brauchen könnten, und ein Argument dafür, Analytics entlang Diskrimination, Kalibrierung, Robustheit und Erklärbarkeit zugleich zu bewerten.
- **Validierung synthetischer Daten ist eine Vorbedingung für datenschutzbewahrende Analytics.** Eine strukturelle Prüfung synthetischer Versionen von vier jährlichen Studienhabitus-Kohorten (117–120 Lernende über achtzehn Wochen) fand, dass Partitionsdeskriptoren in zwei von vier Kohorten eng übereinstimmten, während die Woche-zu-Woche-Variation ausnahmslos 2.6- bis 4.9-fach niedriger lief (Variationskoeffizient 0.086–0.152 gegenüber 0.399–0.539 bei den echten Kohorten), und nur 36% der auf synthetischen Pilotdaten erreichten Befunde wurden über 25 Validierungsanfragen hinweg auf den echten Daten bestätigt ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).
- **Engagement-Analytics:** [[student-engagement|Engagementmessung]] und [[engagement-intensity-learner-modeling|Intensitätsmodellierung]] quantifizieren, wie Studierende mit KI-Systemen interagieren.
- **Feedback-Analytics:** [[teaching-feedback-classification-benchmark|Feedbackklassifikation]] und [[ai-feedback-quality|Qualitätsbewertung]] analysieren das Feedback, das Studierende erhalten.
- **Netzwerkanalyse:** [[misiejuk-cognitive-offloading-prompting-2026|Co-Occurrence Network Analysis]] und [[epistemic-emotions-collaborative-problem-solving|epistemische Netzwerkanalyse]] legen Interaktionsmuster offen.
- **Datenschutzspannungen:** [[privacy|Datenschutz]]bedenken wachsen, während Analytics feinkörniger und KI-getriebener werden.
- **Ein Governance-Review-Rahmenwerk für Daten Studierender.** LEAGUE schlägt sechs Säulen vor — Lawfulness, Equity, Agency, Governance, Utility und Ethics by Design —, behandelt FERPA- und GDPR-Konformität als Untergrenze und empfiehlt geplante Neubewertung, während die Modelle driften ([[league-ethical-governance-student-data-2026|Varadaraju & Vijayakumar (2026)]]).

**Kurs-Konkurrenz modellieren, nicht nur Sequenz.** TRACE gibt jedem Kurs in einem Semester dieselbe Positionskodierung, und das gemeinsame Vorhersagen von Kursen und Noten senkte den Notenvorhersagefehler auf 0.1339 MAE — eine Reduktion um 46.4% gegenüber einem Nur-Noten-Transformer — auf zehn Jahren institutioneller Daten ([[trace-course-grade-prediction-2026|Savala (2026)]]).

### Der Learning-Analytics-Zyklus

Learning Analytics wird kanonisch als Zyklus gerahmt, der mit Aktivität der Lernenden beginnt, die Daten erzeugt, welche in Maße und Indikatoren verarbeitet werden, die dann in **Interventionen** übersetzt werden — und die Intervention fließt zurück in die Aktivität der Lernenden, um die Schleife zu schließen. Der Interventionsschritt ist es, der Analytics von bloßer Überwachung oder Vorhersage unterscheidet: ohne ihn beschreiben und markieren Analytics, verändern aber nie das Lernen. Dieser Zyklus ist der organisierende Rahmen, um zu verstehen, wo KI-Werkzeuge (Dashboards, Feedbackgeneratoren, präskriptive Empfehlungssysteme) in der Pipeline sitzen und welchen Schritt sie automatisieren.

Ein auf Lernende zugewendetes Dashboard ist nur so gut wie seine Reichweite: in einer Hongkonger Schreibstudie der neunten Klasse erreichte ein Prompt-Klassifikator eine Makro-F1 von 0.757, etwa ein Drittel der 46 Studierenden öffnete die drei GenAI-Nutzungs-Dashboards, und die Gruppenunterschiede beim Kopieren und beim lernorientierten Prompting waren nicht verlässlich ([[learning-analytics-genai-secondary-writing-2026|Fong et al. (2026)]]).

Eine Häufigkeitskodierung qualitativer Daten ist ein Einstiegspunkt, kein Urteil: in einer Studie mit zehn Teilnehmenden lasen manche Lehrende Häufigkeitskodierungen als produktiven Weg hinein, während andere warnten, sie verdeckten seltene, aber kritische Antworten, weshalb das Design jede aggregierte Ansicht zurück mit wörtlichem Text der Studierenden verknüpft hält ([[wordstream-glass-learning-analytics|Nguyen et al. (2026)]]).

### Von der Beschreibung zur Intervention

Learning analytics hat sich in der Wissensbasis über drei Generationen entwickelt: beschreibend (was geschah?), prädiktiv (was wird geschehen?) und präskriptiv (was sollten wir tun?). KI ermöglicht die präskriptive Schicht — Analytics, die direkt [[feedback|Unterrichtsinterventionen]] auslösen. Eine zentrale Grenze ist die **Umsetzbarkeitslücke**: [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel & Laforge 2026)]] zeigt, dass Vorhersage allein für Entscheidungsunterstützung nicht genügt, und dass kontrafaktischer Rekurs erst dann operativ aussagekräftig wird, wenn Empfehlungen semantisch machbar und maschinell prüfbar sind — beschränkt durch Timing, Budget, Unveränderlichkeit und Verfügbarkeit über SHACL-Validierung, statt bloß modellvalide. Das bewegt das Feld über Risikowerte hinaus hin zu Empfehlungen, die Institutionen tatsächlich vollziehen können, mit bewahrter [[human-in-the-loop-ai|menschlicher Aufsicht]].

Ein direkter empirischer Test der präskriptiven Schicht kommt von [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]], die drei LLMs baten, Unterstützungspläne für 4.500 [[simulating-students|synthetische Studierenden]]-Vignetten zu empfehlen.

Ein komplementärer, lehrendenzentrierter Test dessen, wie Analytics das Klassenzimmer erreichen, kommt von [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]], die ein Learning-Analytics-Dashboard (DashED) entwarfen, um Lehrenden in zwei blended Kontexten ML-abgeleitete Profile [[self-regulated-learning|selbstregulierten Lernens]] zu vermitteln. Ihre Studie mit 100 Lehrenden zeigt, dass die *Darstellung* von Analytics selbst eine Barriere für Handlung ist: Lehrende bevorzugten systematisch einfachere, traditionellere Diagramme (Balkendiagramme, Kreisdiagramme), selbst wenn komplexere Designs (z. B. Heatmaps) reichere Einsichten erbrachten, und höhere [[visualization|Visualisierungskompetenz]] sagte tiefere, detailliertere Interpretation voraus (z. B. mehr Lehrende, die Trends in Zeitreihendaten erkannten). Für Gruppenvergleich bevorzugten Lehrende Überlagerung gegenüber Nebeneinanderstellung und vollinformative Diagramme gegenüber expliziter Differenzkodierung. Die von den Lehrenden vorgeschlagenen Handlungen wurden vom repräsentierten Inhalt und ihrem [[teacher-role|Level]] geformt statt vom Diagrammtyp — Lehrende an Universitäten bevorzugten wöchentliche Tests und Anpassung auf Kursebene, während Lehrende in der Berufsbildung direkte, individualisierte Betreuung vorschlugen —, was unterstreicht, dass der präskriptive Schritt ebenso sehr davon abhängt, wie Analytics visualisiert und kontextualisiert werden, wie vom zugrunde liegenden Modell. Ihr Befund ist warnend: Korrelationen zwischen LA-Indikatoren und empfohlener Unterstützung waren meist schwach, kreuz-modale Empfehlungen divergierten für dieselbe studierende Person scharf, und Unterstützung wurde häufig unabhängig davon zugewiesen, wer sie am meisten brauchte. Die Autoren schließen, dass aktuelle LLMs **noch nicht verlässlich sind als präskriptive Modelle für Studierendenunterstützung im großen Maßstab**, was bekräftigt, dass der präskriptive Schritt weiterhin Validierung, Feinabstimmung und menschliche Aufsicht verlangt statt Automatisierung von der Stange.

Der Schritt nach dem Wert — wer Unterstützung erhält, und ob sie dort zugewiesen wurde, wo sie gebraucht wurde — gehört zu [[student-support-and-success|Studierendenunterstützung und -erfolg]], das die Nachverfolgungs-, Überweisungs- und Zuweisungsevidenz trägt, die die präskriptive Schicht dieser Seite speist.

Ein Integritätsergebnis tritt in dieselbe prädiktive Schicht ein. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]] sagt das Risiko KI-assistierten Betrugs aus den ersten acht Wochen von [[video-education|Moodle- und Videoplayer]]-Spuren voraus, erreicht eine AUC von 0.763 mit logistischer Regression und argumentiert, das Signal sei genau deshalb nutzbar, weil es vor der Prüfung ankommt statt während ihrer.
Eine komplementäre Linie zielt auf die *Interpretation* von Analytics selbst. [[factria-responsible-institutional-analytics-2026|Marques et al. (2026)]]s FACTRIA-Rahmenwerk organisiert die verzerrenden Faktoren hinter einem Indikator — Pipeline, institutionell, kursbezogen und demografisch —, und ein Reflexions-Prompting-Chatbot erhöhte die Teilfaktoren, die 11 Beteiligte pro Fall abwogen, von 1.41 auf 3.45 (d = 2.15), was sie von direkten Lesarten hin zu bedingten verschob.

### Methoden und Netzwerkanalyse

Netzwerkmethoden sind zentral für Learning Analytics: [[network-analysis|Transition Network Analysis (TNA)]] modelliert zeitliche Sequenzen von Handlungen der Lernenden (z. B. die Überarbeitungs- und Chat-Schleifen im [[conversational-ai|Chatbot]]-umhüllten Schreiben), und [[network-analysis|Epistemic Network Analysis (ENA)]] kartiert, wie Codes/Konstrukte über Aktivität hinweg ko-okkupieren — zusammen legen sie den *Prozess* des Lernens und der [[student-ai-interaction|Interaktion zwischen Studierenden und KI]] offen statt nur sein Produkt.([[penny-transition-network-analysis-efl-writing-2026]])([[tracing-genai-literacy-interaction-patterns]])

- **Sequenz- und Markov-Ketten-Analyse selbstgesteuerten Verhaltens.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] verbanden Aktivitätssequenzanalyse, hierarchisches Clustering und Markov-Ketten-Modelle auf den Clickstreams von 315 Online-Lernenden, die 822 ökologische Modelle in VERA bauten, und destillierten neun feinkörnige, übergangsbasierte Verhaltenscluster in drei breitere Muster (Beobachtung, Konstruktion, Exploration). Ihre Arbeit zeigt, dass die Verbindung von Sequenzanalyse mit Markov-Ketten-Modellierung aussagekräftiges Verhalten in unstrukturierten, [[self-directed-learning|selbstgesteuerten]] Aufgaben aufdecken kann, selbst bei völliger Abwesenheit demografischer oder kontextueller Daten.
- **LA und GenAI formen Lerndesign unterschiedlich (2026).** [[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]] nutzten ENA in 11 Fokusgruppen von Lehrenden, um zu vergleichen, wie Learning Analytics gegenüber [[generative-ai|generativer KI]] Entscheidungen im [[learning-design|Lerndesign]] informieren. LA-Diskussionen zentrierten sich auf kontextuelle Information, Design auf Kursebene und kreatives [[problem-solving|Problemlösen]] (LA zum Diagnostizieren von Engagement und Zielen von Unterstützung), während GenAI-Diskussionen sich auf [[assessment|Assessmentdesign]] und das Entwerfen für [[self-determination-theory|Selbstbestimmung]] der Studierenden zentrierten (GenAI für Ideenfindung und Assessmententwicklung). Kontext und [[creativity|Kreativität]] waren über beide hinweg zentral — eine Erinnerung daran, dass Analytics Design nur innerhalb [[pedagogy|pädagogischen]] Kontexts und Autonomie der Lehrenden informieren.
- **Design-Analytics: geplante Aktivitätssequenzen schürfen statt Spuren (2026).** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec und Horvat (2026)]] wandten Markov-Ketten und sequenzielles Pattern-Mining auf die *designte* Sequenz von 29,064 Lehr- und Lernaktivitäten über 554 Kurse hinweg an, die in einem offenen Lerndesign-Werkzeug geplant waren. Die Übergangsmatrix erreichte ihren Gipfel bei Assessment zu Discussion (0.332), Selbstübergänge dominierten Practice (0.317) und Acquisition (0.292), und die stärkste aufeinanderfolgende Regel war Acquisition zu Assessment zu Practice zu Practice (Konfidenz 0.743, Lift 1.449), während der häufigste vierschrittige Pfad Acquisition, Practice, Practice, Assessment war (120 Vorkommen). Discussion und Assessment waren die am besten erreichbaren Typen und Production der entfernteste und sporadischste. Die Studie ist eine Erinnerung daran, dass Learning Analytics nicht mit LMS-Spuren beginnen müssen: Daten zur Designzeit können die pädagogische Grammatik eines Kurses offenlegen, bevor eine studierende Person ankommt, obwohl die Autoren betonen, dass Ähnlichkeit mit flipped, forschenden oder [[project-based-learning|projektbasierten]] Designs kein Beleg für Absicht ist.
- **Selbst-erklärende destillierte LLMs (2026):** Eine zweistufige Pipeline destilliert einen Black-Box-Learning-Analytics-Schätzer und seine Post-hoc-Interpretation in ein kleines, offen gewichtetes [[llm|LLM]], das sowohl eine Schätzung auf Individualebene als auch eine natürlichsprachliche Erklärung zurückgibt. Ein treueorientiertes Audit bewertet, ob Narrationen mit den Attributionen übereinstimmen, die sie beschreiben; [[simulation|Simulation]] zeigt nahezu verlustfreie Wiederherstellung (r > .90) mit einem Orakel-Mentor und bietet damit einen transparenteren, einsetzbaren Pfad für Analytics ([[distilling-self-explaining-lm-learning-analytics-2026]]).
- **Ermöglicher LA-basierter Bildungsinterventionen (2026).** [[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić (2026)]] identifizieren und priorisieren sieben Ermöglicher vertrauenswürdiger LA-basierter Bildungsinterventionen über Delphi + AHP + SNAP: [[governance|institutionelle]] strategische Orientierung, pädagogische und andere [[research-methods-aied|forschungs]]bezogene Grundlagen, verfügbare Ressourcen, pädagogische Unterstützung, Ethik und Daten-Governance, Engagement von Beteiligten, und Qualitätssicherung. Institutionelle strategische Orientierung rangierte am höchsten (und am einflussreichsten auf andere Ermöglicher), verfügbare Ressourcen an zweiter Stelle. [[trust|Vertrauenswürdigkeit]] (ethische Konformität, transparente/unverzerrte Algorithmen, pädagogische Validität) wird als die Vorbedingung gerahmt, ohne die LA-basierte Interventionen nicht aussagekräftig sind.
- **LLM-Interaktionstiefe sagt Aufgabenqualität voraus, aber nicht Abruf (2026).** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] verknüpft zugsebene LLM-Konversationstelemetrie (Depth/Volume/Pacing) mit [[learning-gains|Lernergebnissen]]: erklärungssuchende „Tiefe“ sagte unabhängig bewertete Aufgabenqualität voraus (β = 6.27), aber nicht unmittelbaren Abruf — eine Dissoziation zwischen elaborationsgetriebenem Verständnis und abrufgetriebener Konsolidierung, mit Implikationen dafür, wie [[llm|LLM]]-Interaktion in LA gemessen und bewertet wird.


- **Eine geteilte Interaktionseinheit fehlt.** Über 46 Kategorisierungen aus 33 Studien hinweg gibt es kein geteiltes Metacharakteristikum — ähnliche Etiketten benennen unterschiedliche Phänomene —, weshalb der Review die *Interaktionsepisode*, einen zielgerichteten begrenzten Austausch, als Einheit vorschlägt, um Dialog mit Fertigkeitserwerb zu korrelieren ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).
- **Kollaborativen Diskurs für Learning Analytics simulieren.** [[llm-agents-collaborative-problem-solving-simulation-2026|Fang (2026)]] nutzt feinabgestimmte teilnehmendenspezifische LLM-Agenten, um Dialoge kollaborativen Problemlösens zu reproduzieren, validiert mit Epistemic Network Analysis (ENA-Distanz 0.17, Permutations-p = 0.65). Der Ansatz bietet Learning-Analytics-Forschenden einen skalierbaren Weg, authentischen kollaborativen Diskurs zum Studium von Interaktionsdynamik, Zugübernahme und thematischen Code-Trajektorien zu erzeugen, ohne neue menschliche Daten zu sammeln.
- **Offene, reproduzierbare Daten und spurbereite Analytics.** [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] veröffentlicht einen synthetischen [[benchmark|Benchmark]] mit spurbereitem Schema (N=540; 360 Sitzungen; 1,440 Episoden) zur Analyse von Interaktion und Teilhabebalance in kollaborativem Programmieren. Log- und Spurdaten sind das natürliche Gegengewicht zu [[self-report-measures|Selbstauskunft]] in dieser Literatur: dasselbe Konstrukt wird oft zweimal gemessen, einmal durch Fragen und einmal durch Beobachten, und die beiden stimmen nicht immer überein. Separat identifizierte ein exploratives ML-Rahmenwerk mit SHAP-Analyse die lernbezogenen Konstrukte, die am stärksten mit beabsichtigter akademischer ChatGPT-Nutzung unter Universitätsstudierenden assoziiert sind, und priorisierte dabei [[explainable-ai|Interpretierbarkeit]] ([[determinants-chatgpt-use-higher-education-2026]]).
- **Wiederverwendbare Analytics-Infrastruktur, nur im Haus validiert (2026).** [[a4l-analytics-pipeline|Bai et al. (2026)]] reproduzierten veröffentlichte Befunde aus drei KI-Assistenten an der Georgia Tech, indem sie Konfigurationswerte statt Code änderten, obwohl die Behauptung auf der Reanalyse bestehender Einzelinstituts-Datensätze beruht und die eine Fähigkeitserweiterung von internen Personen vorgenommen wurde.

### Verbindungen

Learning Analytics verbindet sich mit [[knowledge-tracing|Knowledge Tracing]] (der zentralen Analytik), [[formative-assessment|formativem Assessment]] (analyticsgetriebenem Assessment), [[student-modeling|Modellierung der Studierenden]] (der Repräsentation der Lernenden, die Analytics bevölkern), [[privacy|Datenschutz]] (der [[ethics|ethischen]] Beschränkung), und [[edtech-platform|Edtech-Plattform]] (wo Analytics eingesetzt werden). Weil präskriptive Analytics zunehmend an [[simulating-students|simulierten Lernenden]] bewertet werden — wo synthetische Kohorten Studierender echte Kohorten in kontrollierten Tests ersetzen — verbindet sich Learning Analytics auch mit der Simulation von Studierenden.

- **Was Dashboards sichtbar machen, entscheidet, worauf Lehrende handeln.** [[ai-supported-lecturer-decision-making-2026|Köroğlu et al. (2026)]] reviewten 27 empirische Studien (2016–2025) und bauten eine soziotechnische Taxonomie KI-unterstützter Entscheidungsfindung von Dozierenden über acht Entscheidungstypen: unterrichtlich, curricular, Assessment, Feedback, Lernumgebung, emotional, administrativ und ethisch. Learning-Analytics-Dashboards waren das am häufigsten berichtete System, und die Kodierung zeigt Unterstützung konzentriert auf die unterrichtlichen, Feedback- und Assessment-Entscheidungen, die verhaltensbezogene Text- und Log-Daten informieren können, während emotionale, ethische, curriculare und Lernumgebungs-Entscheidungen selten unterstützt wurden. Die Autoren lesen das als Aufmerksamkeitseffekt statt als Fähigkeitsgrenze: weil die Systeme verhaltensbezogene Daten der Studierenden sichtbar und handlungsrelevant machten, fielen Motivation, [[metacognition|Metakognition]], Emotion und Umweltanliegen außerhalb dessen, was die Daten Dozierende zu erwägen einluden.

Prozessebene Instrumentierung ist der nächste Schritt nach unten der beschreibenden Schicht. [[pulla-parsons-problem-tool-2026|Prol et al. (2026)]] erweiterten eine [[open-source|Open-Source]]-Parsons-Problem-Plattform, um jede Blockplatzierung, -entfernung und -einreichung als chronologische Spur aufzuzeichnen, jede Einreichung mit korrektheitsbezogener Einfärbung pro Block und einer Versuchshistorie zu paaren, und optional die Spuren durch eine [[llm|LLM]]-Pipeline zu schicken, die wiederkehrende Schwierigkeitsmuster zur Prüfung durch Lehrende etikettiert. Über 68 Studierende in einem Java-Softwaredesign-Kurs im fortgeschrittenen Studium und 36 in einem einführenden Python-Kurs förderte die Analyse dieselben drei Schwierigkeiten zutage — das Wählen des falschen Exception-Typs, das Substituieren von `return` für `throw`, und inkorrekte Kontrollfluss-Ordnung —, was Korrektheits- und Versuchszählungen nicht offenlegen können, weil sie *ob* die Anordnung richtig war beantworten statt *was der Prozess war*. Die KI handelt als Interpret für die [[teacher-role|lehrende Person]] statt als Benotende der studierenden Person, und ihre Ausgabe wird als prüfbare Hypothese über die Schwierigkeiten einer Klasse gerahmt statt als Note.

## Verbundene Konzepte

- [[explainable-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — die Unterstützungsseite, die Vorhersage speist: Überweisung, Zuweisung, und die Ergebnisse, die sie bewegen oder nicht

## Verbundene Artikel
- [[factria-responsible-institutional-analytics-2026]] — Responsible Institutional Analytics: Interpreting Bias with AI Support

- [[ai-supported-lecturer-decision-making-2026]] — AI-Supported Lecturer Decision-Making in Higher Education
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving academic risk modeling (Villegas-Ch et al. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[learning-analytics-to-educational-interventions-2026]] — From learning analytics to educational interventions: enablers of trustworthy LA-based interventions (Svetec, Divjak & Kadoić 2026)
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[determinants-chatgpt-use-higher-education-2026]] — ML/SHAP determinants of future ChatGPT use in higher education
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — Markov chain and pattern mining of 29,064 planned activities in 554 courses, revealing a design grammar led by Acquisition and consolidating Practice
- [[pulla-parsons-problem-tool-2026]] — Pulla: process-level behavioral tracing and instructor-facing difficulty analysis in Parsons problems (Prol et al. 2026)
- [[a4l-analytics-pipeline]]
- [[league-ethical-governance-student-data-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — Predicting AI-assisted cheating risk from early-semester LMS traces (AUC 0.763)
