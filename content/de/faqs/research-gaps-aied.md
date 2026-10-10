---
title: "Was sind bemerkenswerte Lücken in der Forschungsliteratur zu KI in der Bildung?"
created: "2026-08-24T14:10:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

# Was sind bemerkenswerte Lücken in der Forschungsliteratur zu KI in der Bildung?

Die folgenreichsten Lücken in KI in der Bildung (AIED) betreffen **ob bestimmte Bildungsdesigns dauerhafte Vorteile erzeugen, für wen, über welche Mechanismen, und unter welchen Bedingungen –, nicht einfach, ob KI bildungswirksame Aufgaben ausführen kann**. Die Wissensbasis dokumentiert vielversprechende Interventionen neben anhaltenden Schwächen in Messung, kausaler Inferenz, Generalisierbarkeit, Implementierung und Reproduzierbarkeit. Das sind oft Lücken in der *Stärke, Spezifität oder Anwendbarkeit* von Belegen statt eine vollständige Abwesenheit von Forschung. Siehe [[limitations-in-aied-research|Grenzen in der AIED-Forschung]].

Die Lücken unterscheiden sich außerdem über das Feld. Belege über etablierte [[intelligent-tutoring|Intelligent Tutoring Systems]], prädiktive [[learning-analytics|Analytics]], [[generative-ai|generative KI]] und autonome Agenten sollten nicht als austauschbar behandelt werden. Ebenso involvieren KI zu nutzen, um Lernen zu unterstützen, und Menschen *über* KI zu belehren verwandte, aber verschiedene Forschungsfragen, wie der Überblick [[ai-education|KI in der Bildung]] erklärt.

## 1. Isolieren, was KI über guten Unterricht hinaus hinzufügt

Strenge Klassenraumexperimente existieren, also ist die Lücke nicht mehr angemessen als „wir brauchen randomisierte Studien" beschrieben. Eine präzisere Frage ist, **ob die KI-Komponente Wert über zusätzliche Übung, bessere Materialien, zeitnahes Feedback oder erhöhte Instruktionsunterstützung hinaus hinzufügt**.

Zum Beispiel berichtet [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment]] mäßige Leistungsgewinne über 18 Mittelschulen, neben begrenztem substanziellem Engagement mit dem Tutor. Die Autoren halten fest, dass die Gewinne jenen ähnelten, die mit strukturiertem Üben ohne KI assoziiert sind. Das etabliert Belege über ein implementiertes Instruktionspaket, isoliert aber den inkrementellen Beitrag seiner KI-Komponente nicht sauber.

Das darunterliegende Problem ist konzeptuell ebenso wie empirisch. „ChatGPT" benennt ein Werkzeug, keine Methode, und [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] prüfen 19 ChatGPT-in-der-Bildung-Vergleiche, um zu zeigen, was das kostet: nur 4 (21%) spezifizieren alle drei von replizierbarer Behandlung, operationalisierter Kontrolle und validem Lernmaß (74% gut definierte Behandlung, 42% gut definierte Kontrolle, 53% ein Lern Ergebnis). Ihr größerer Punkt ist, dass, wenn neue KI neben neuen Aktivitäten, Feedback oder Schnittstellendesign eingeführt wird, Medium und Methode konfundiert sind und kein Effekt der KI zugeschrieben werden kann.

Forschung braucht deshalb mehr Vergleiche mit starken, realistischen Nicht-KI-Alternativen, die Curriculum, Übungsgelegenheiten und Unterstützung so konstant wie möglich halten. Unabhängige Replikationen sollten testen, ob Vorteile Veränderungen in Institution, Lehrenden, Fach und Modell überleben. Wie [[research-methods-aied|Wirksamkeits-Forschungsmethoden]] betont, beantworten verschiedene Methoden verschiedene Fragen: [[qualitative-research|qualitative]] und [[design-based-research|design-basierte]] Studien helfen, Implementierung zu erklären, während angemessen designte Experimente Kausalbehauptungen stärken.

## 2. Dauerhaftes Lernen und eigenständige Fähigkeit über die Zeit verfolgen

Verbesserte Arbeit während der KI-Nutzung ist nicht notwendigerweise Beleg für Lernen, das nach Ende der Unterstützung besteht. Die Synthesen [[learning-gains|Lernzuwächse]] und [[cognitive-offloading|kognitive Auslagerung]] unterscheiden wiederholt begleitete Leistung von behaltenem Wissen, eigenständiger Argumentation und Transfer auf unvertraute Aufgaben.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] veranschaulicht das Messproblem. In einem randomisierten Experiment mit mehr als 6.000 Mittelschulstudierenden erhöhte eine Drei-richtige-in-Folge-Meisterschaftsregel plattformdefinierten Erfolg, ohne für sich feststellbare Lerngewinne eine Woche später zu erzeugen. Die stärksten Verzögertest-Belege traten auf, wenn KI im Meisterschafts-Workflow eingebettet war und auf geübtes Material konzentriert waren.

**Die verbleibende Lücke betrifft Fähigkeitstrajektorien, nicht bloß einen zusätzlichen Posttest.** Studien sollten Behalten über Monate, Transfer über Aufgaben, Leistung nach dem Entzug der Unterstützung, und die Genauigkeit der Lernenden im Beurteilen dessen, was sie wissen, untersuchen. Sie sollten außerdem Scheitern beim Erwerb einer Fertigkeit von der Verschlechterung einer bereits etablierten Fertigkeit unterscheiden. Forschung zu Auslagerung sollte testen, wann Delegation jene Trajektorien unterstützt und wann sie die zu ihrer Entwicklung nötige Übung verdrängt.

## 3. Erklären, welche Instruktionskomponenten funktionieren –, und warum

„KI-unterstütztes Lernen" kombiniert oft mehrere Veränderungen: neues Feedback, zusätzliche Reflexion, Peer-Diskussion, verschiedene Aufgabensequenzen, und veränderte Assessmentanreize. Ein erfolgreiches Paket etabliert nicht, welche Komponenten nötig sind oder welcher Mechanismus den Vorteil erzeugte.

Das multiseitige Experiment [[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design in higher education]] liefert einen brauchbaren Fortschritt. Unter 1.176 Studierenden der ersten Semester übertrafen reflektive und hybride Feedbackdesigns direktes [[ai-feedback-quality|KI-Feedback]] bei verzögertem KI-freiem Transfer. Die hybride Bedingung kombinierte Selbstevaluation, [[peer-assessment|Feedback]] und KI-Kritik. Das stützt es, zu untersuchen, wie Feedback organisiert und genutzt wird, statt Zugang als die Intervention zu behandeln.

Weitere Studien sollten den Beitrag und das Timing erster eigenständiger Versuche, Selbsterklärung, Peer-Inputs, korrigierenden Feedbacks, Hinweise und ausblendender Unterstützung isolieren. Sie sollten testen, wie jene Komponenten mit [[prior-knowledge|Vorwissen]] und Aufgabenschwierigkeit interagieren.

Die begleitende Theorielücke ist gleichermaßen wichtig: **eine [[learning-theories|Lerntheorie]] zu benennen ist nicht dasselbe wie sie zu testen**. Forschung sollte eine theoretische Vorhersage mit einem spezifischen Systemverhalten und einem messbaren Lernprozess verbinden. Statistische Mediation kann jene Erklärung informieren, etabliert aber nicht für sich einen kausalen Mechanismus. Siehe [[theory-development-aied|Theorieentwicklung in AIED]] und [[scaffolding]].

## 4. Maße, automatisierte Urteile und simulierte Lernende validieren

Konstrukte wie „Engagement", „[[critical-thinking|kritisches Denken]]", „KI-Kompetenz" und „[[personalized-learning|Personalisierung]]" werden inkonsistent gemessen. Selbstauskünfte können Wahrnehmungen und Erfahrungen beschreiben, können aber demonstrierte Kompetenz nicht ersetzen. Technische Genauigkeit, expertenbewertete Ausgabequalität und studentisches Lernen repräsentieren außerdem verschiedene Evaluationsziele. Diese Unterscheidungen sind zentral für [[educational-measurement|Bildungsmessung]] und [[ai-ed-evaluation|Evaluation von KI in der Bildung]].

Eine besonders wichtige Lücke betrifft [[ai-technologies|KI-Systeme]], die genutzt werden, um andere KI-Systeme zu evaluieren. In [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]] gaben [[simulating-students|simulierte Studierende]] zugewiesene [[misconceptions]] nach korrigierendem Feedback häufig auf, unabhängig davon, ob sie die Fehlvorstellung adressierte. Ihre Antworten könnten daher unwirksamen Unterricht als erfolgreich erscheinen lassen. Gezieltes Training verbesserte das Wahrhaftigkeitsmaß der Studie, aber Verbesserung bei jenem Maß ist nicht gleichbedeutend mit Validierung gegen menschliches Lernen.

Forschung muss etablieren, welche automatisierten Werte und simulierten Verhaltensweisen Ergebnisse mit echten Lernenden vorhersagen, einschließlich Lernenden und Settings, die während der Entwicklung nicht genutzt wurden. Menschliche Urteile erfordern ebenfalls Prüfung: Übereinstimmung unter Bewertenden ist nicht automatisch Beleg, dass das richtige Konstrukt bewertet wird.

**Die Lücke ist Validierung der Evaluationskette – von Modellverhalten, über [[pedagogy|pädagogisches]] Urteil, zu Antwort der lernenden Person, zu bildungswirksamem Ergebnis.**

## 5. Assessmentvalidität etablieren, wenn KI die Belege erzeugen und bewerten kann

KI erzeugt zwei verbundene Assessmentprobleme: sie kann helfen, die bewertete Arbeit zu erzeugen, und sie kann beeinflussen, wie jene Arbeit bewertet wird.

Die [[ai-agents-complete-lms-assessment-validity-2026|Studie der Wissensbasis zu KI-Agenten, die bewertete LMS-Aufgaben erledigen]] dokumentiert Agenten, die einen laufenden Grundstudiumskurs navigieren und bewertete Aktivitäten erledigen. Jene Demonstrationen etablieren eine Fähigkeit, die Annahmen über studentenproduzierte Belege herausfordert; sie etablieren nicht die Prävalenz solcher Nutzung oder entwerten jedes asynchrone Assessment.

Die Forschungsfrage ist, **welche Assessmentdesigns weiterhin vertretbare Schlussfolgerungen über die lernende Person stützen**. [[eportfolio|Portfolios]], Reflexionen, gestufte Einreichungen und Aktivitätsprotokolle sollten selbst validiert werden, statt anzunehmen, dass sie Autorschaft oder Verständnis etablieren. Studien sollten Kombinationen von Belegen gegen unabhängig beobachtete Kompetenz untersuchen, und dabei Barrierefreiheit, Arbeitsbelastung, Datenschutz und Angst der Person berücksichtigen. Siehe [[assessment-validity|Assessmentvalidität]].

Für [[automated-assessment|automatisierte Bewertung]] berichtet [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] systematische Uneinigkeit zwischen Standardmodellen und menschlichen Bewertenden. Seine Befunde sind konfigurationsspezifisch, demonstrieren aber, warum interne Konsistenz unzureichend ist.

Eine brauchbare konzeptuelle Unterscheidung kommt von [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]]: bewerten Sie, was Lernende eigenständig tun müssen, was sie mit KI leisten dürfen, und was sie verifizieren und verteidigen müssen. Das ist ein vorgeschlagenes Framework, das empirischer Validierung bedarf, keine etablierte Assessmentlösung.

[[karr-ai-detection-humanization-2026|Karr et al. (2026)]] quantifizieren, warum Detektion eine Sackgasse ist. Über 642 veröffentlichte englische Abstracts markierten zwei kommerzielle KI-Detektoren bei τ = 0.50 leitlinienkonformes leichtes KI-Editieren bei 38–80%, markierten unveränderte Originale von 2023–25 bei 9–15% (Nicht-[[stem-education|STEM]] weit über STEM, p < 0.001), und erwischten nach Humanisierung weniger als 4% der KI-markierten Umschreibungen (Falsch-Negativ-Rate > 96%). Ein Wert, der ehrliche Unterstützung bestraft, während er Ausweichen übersieht, kann nicht die Grundlage für eine vertretbare Schlussfolgerung über die lernende Person sein; die Lücke, die er offenlegt, sind Designs und Prozessbelege, die nicht von solch einem Wert abhängen.

## 6. Zeigen, dass sich KI-Kompetenz in verantwortungsvolles Verhalten überträgt

Die Interventionsforschung zu KI-Kompetenz ist erheblich genug, um Synthese zu stützen. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education: A Meta-Analysis of Effects and Moderators]] umfasst 59 Studien und 7.211 Teilnehmende. Sie berichtet einen positiven Durchschnittseffekt, aber erhebliche Variation über Studien und ein weites Prognoseintervall, das Null umspannt. Wissensfokussierte Ergebnisse zeigten stärkere Effekte als Fähigkeiten, Einstellungen oder Ethik.

Die schärfere Lücke ist deshalb nicht einfach, mehr Kompetenz-Frameworks zu entwickeln. Es ist zu bestimmen, **ob Kompetenzunterweisung verändert, wie Menschen handeln, wenn sie KI nutzen**.

Können Lernende nicht gestützte Behauptungen erkennen, Quellen verifizieren, irreführende Vorschläge ablehnen, unangemessene Zustimmung identifizieren, und wählen, wann sie nicht auslagern? Bleiben jene Verhaltensweisen unter Zeitdruck bestehen und übertragen sie sich auf unvertraute Systeme und Disziplinen?

Forschung sollte leistungsbasierte Bewertungen mit Beobachtungen tatsächlicher Entscheidungen und verzögerter Nachverfolgung kombinieren. Sie sollte konzeptuelles Wissen, operative Versiertheit und kritisches Urteil unterscheiden, statt sie als austauschbar zu behandeln. Die Synthesen [[ai-literacy|KI-Kompetenz]] und [[trust-calibration|Vertrauenskalibrierung]] liefern brauchbare Ausgangspunkte für diese Unterscheidungen.

## 7. Generalisierbarkeit und gerechte Ergebnisse verstehen –, nicht nur gerechter Zugang

Befunde aus einem Kurs, einer Institution, Sprache oder Lernendenpopulation bieten oft begrenzte Grundlagen für Entscheidungen anderswo. Die Synthese [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] identifiziert das als wiederkehrendes Problem. Mehr Belege sind nötig darüber, wie Instruktionseffekte über Entwicklungsstufen, Disziplinen, Vorwissen, Behinderung, Sprache und Ressourcenbedingungen variieren.

Gerechtigkeitsforschung muss außerdem Zugang, Fähigkeiten und Ergebnisse unterscheiden. Die Synthese [[digital-divide|Digitale Spaltung]] macht klar, dass das Bereitstellen von Geräten oder Werkzeugzugang nicht gleiche Fähigkeit zu profitieren etabliert.

Zum Beispiel verfolgte [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] 752 Schülerinnen und Schüler der Unterstufe in Hongkong. Lücken psychologischer Bereitschaft verengten sich, während Unterschiede bei einem objektiven KI-Kompetenztest bestanden. Alle Gruppen verbesserten sich, aber Gesamtverbesserung beseitigte die Ungleichheit nicht. Weil Profile des Vorwissens nicht zufällig zugewiesen wurden, etabliert die Studie ihre kausalen Effekte nicht.

Die eigene Abdeckung der Wissensbasis zeigt, wo die Belege auf Gruppenebene ebenfalls dünn und ungleich sind. [[differential-effects-across-learner-groups|Unterschiedliche Effekte über Lernendengruppen hinweg]] zählt die Literatur danach, wen sie untersucht: Zweitsprachen- und mehrsprachige Lernende und Studierende mit Behinderungen sind die tiefsten Stränge, Geschlecht und Neurodivergenz als Nächstes, während Studierende der ersten Generation und internationale Studierende in diesem Korpus je eine einzelne Studie haben, begabte und leistungsstarke Studierende als Gruppe praktisch ununtersucht sind, und Flüchtlings-, Immigranten- und vertriebene Lernende in keiner erscheinen. Eine Belegbasis mit jener Form kann Gerechtigkeitsfragen nicht durch Aggregation beantworten; sie muss absichtsvoll beprobt werden.

**Die Forschungspriorität ist, zu identifizieren, welche Designs Unterschiede in demonstrierter Fähigkeit, Teilnahme und Handlungsfähigkeit reduzieren.** Studien sollten Ergebnisse und Belastungen nach Teilgruppen untersuchen, nicht bloß Durchschnittsgewinne. Barrierefreiheitsforschung sollte unterscheiden, Barrieren für Teilnahme zu entfernen von einer Fähigkeit zu ersetzen, die die lernende Person zu entwickeln beabsichtigt. Siehe [[equity-in-ai-education|Gerechtigkeit in der KI-Bildung]] und [[accessibility]].

Fähigkeit variiert außerdem innerhalb eines einzelnen nationalen Systems auf Weisen, die Governance-Kategorien nicht erfassen. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] bewerteten KI-Integration über 45 nigerianische Universitäten und fanden nur mäßige Gesamtannahme (M = 4.79, Spanne 1.83–7.83 auf einer Zehn-Punkte-Skala), wobei Institutionstyp Integration nicht vorhersagte, sobald Alter und Geografie kontrolliert wurden (Alter β = 0.43; Süd-West-Lage β = 0.31). Interne Fähigkeiten interkorrelierten bei r = 0.79–0.80 und internationale Kollaborationen mit Industriepartnerschaften bei r = 0.74, also akkumulieren gut verbundene Institutionen sich verstärkende Vorteile. Die Lücke ist, zu testen, welche Kapazitätsaufbau-Designs Ergebnisse an neueren, weniger verbundenen Institutionen verändern.

## 8. Bestimmen, wie Kontrolle zwischen Lernenden, Lehrenden und Agenten geteilt werden sollte

Während KI-Systeme planen, Handlungen initiieren, Gedächtnis pflegen und Werkzeuge koordinieren, wird die bildungswirksame Frage spezifischer als ob Mensch-KI-Kollaboration vorteilhaft ist: **wer sollte welche Teile des Lernprozesses steuern, und wann sollte sich jene Kontrolle verändern?**

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] kartiert 474 Studien und identifiziert begrenzte longitudinale Validierung, Konzentrationen in [[higher-ed|Hochschulbildung]] und STEM, und schwache Bildungstheorie-Integration. Nur 29% der begutachteten Studien stützten sich explizit auf Bildungstheorie –, ein Befund über jenes Korpus, nicht über alle AIED-Forschung.

Forschung sollte Konfigurationen vergleichen, in denen Lernende oder Agenten Hilfe initiieren, Ziele setzen, Strategien auswählen, Fortschritt überwachen und abschließende Entscheidungen treffen. Sie sollte testen, ob Unterstützung schrittweise entzogen werden kann, wenn Kompetenz sich entwickelt, und ob Lernende die Fähigkeit behalten, das System herauszufordern.

Die Synthesen [[agentic-ai|Agentic AI]] und [[human-ai-collaboration|Mensch-KI-Zusammenarbeit]] erheben außerdem Fragen zu [[teacher-role|Lehrkraft]]-Intervention und Rechenschaftspflicht in Multi-Agent-Umgebungen. Größere Autonomie sollte als pädagogische Designwahl bewertet werden, nicht als bildungswirksamer Fortschritt angenommen.

## 9. Pädagogische und relationale Sicherheit mit echten bildungswirksamen Folgen verbinden

Bildungswirksame Sicherheit erstreckt sich über faktische Genauigkeit, anstößige Inhalte oder verbotene Anfragen hinaus. Ein Tutor kann eine richtige Antwort liefern und gleichzeitig die Gelegenheit der lernenden Person zum Argumentieren untergraben, eine zugrundeliegende Fehlvorstellung verstärken, oder unangemessene Abhängigkeit fördern. Siehe [[pedagogical-safety|Pädagogische Sicherheit]].

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors: Pedagogical Safety in AI Tutoring]] identifiziert Fehler wie übermäßige Offenbarung von Antworten und Verlassen von Scaffolding, mit erheblich mehr Fehlern unter mehrturnigem Testen. Das sind [[benchmark]]-Befunde unter spezifizierten Testbedingungen –, keine Schätzungen der Prävalenz oder Schwere von Schaden in Klassenzimmern.

Das unaufgelöste Thema ist, wie solche Fehler echte Lernende über anhaltende Nutzung betreffen. Welche erzeugen vorübergehende Verwirrung, anhaltende Fehlvorstellungen, reduzierte Motivation, oder geschwächte eigenständige Fähigkeit? Welche Schutzmaßnahmen reduzieren jene Risiken ohne übermäßige Ablehnung oder Frustration?

Längerfristige Forschung sollte außerdem Vertrauen, Bereitschaft, menschliche Hilfe zu suchen, [[agency|Handlungsfähigkeit der lernenden Person]], und Beziehungen zu Peers und Lehrenden untersuchen. Diese Fragen sind besonders für Kinder wichtig und erfordern entwicklungsangemessene Studien, die Systemverhalten mit bildungswirksamen und relationalen Ergebnissen verbinden.

## 10. Erklären, wie Implementierung, Lehrkraftentwicklung und Kosten Ergebnisse prägen

Technische Fähigkeit etabliert nicht, dass ein Werkzeug produktiv genutzt werden wird, oder dass professionelle Entwicklung studentisches Lernen verbessert. Das fehlende Glied läuft oft von **Lehrkraftvorbereitung, über veränderte Klassenraumpraxis, zu studentischen Ergebnissen**.

In [[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]], einer Mehrebenen-Studie mit 46 Lehrkräften und 2.832 Studierenden, war pädagogisches KI-Wissen mit Wahrnehmungen und Absichten der Studierenden assoziiert, aber keine der gemessenen Lehrkraft-Wissens-Komponenten direkt mit studentischen KI-Wissensgewinnen assoziiert. Diese Assoziationen etablieren nicht, dass eine bestimmte Trainingsintervention besseres Lernen verursachen würde.

Forschung sollte untersuchen, welche Kombinationen von Coaching, [[curriculum-design|Curriculum]]-Abstimmung, Prüfroutinen, Terminierung und institutioneller Unterstützung anhaltende Verbesserungen erzeugen. Sie sollte ausgeübtes Unterrichten beobachten, nicht nur Selbstsicherheit oder Adoptionsabsicht der Lehrkraft. Siehe [[teacher-ai-competency|KI-Kompetenz von Lehrkräften]] und [[educational-development|Educational Development]].

Vergleichende Kosteneffektivität ist eine weitere Priorität. Evaluationen sollten Verifikation, Korrektur, Training, Aufsicht, Wartung und Implementierungszeit einschließen –, nicht nur Abonnement- oder Modellnutzungskosten –, und KI-unterstützte Bereitstellung mit realistischen Alternativen vergleichen. Die relevante Frage ist, welchen bildungswirksamen Nutzen die vollständige Arrangement für die Ressourcen liefert, die es erfordert.

## 11. Governance, Datenschutz und bedeutsame Teilnahme evaluieren

[[ethics|Ethische]] Prinzipien und Governance-Frameworks sind notwendig, aber ihre Existenz etabliert nicht, dass sie Praxis verändern oder Lernende schützen.

[[agarwal-ethical-values-norms-aied-2026|Identifying the Ethical Values and Norms for Artificial Intelligence in Education]] begutachtet 25 Artikel und findet Endnutzende weitgehend passiv in der begutachteten Ethikliteratur, wobei Stimmen von Studierenden praktisch abwesend sind. Es identifiziert außerdem Spannungen unter Werten und Machtasymmetrien zwischen Anspruchsgruppen. Das beschreibt die begutachtete Literatur; es sollte nicht zu einer Behauptung verallgemeinert werden, dass Studierende nie an AIED-Design teilnehmen.

Die Forschungslücke betrifft, **welche Governance-Arrangements einen messbaren Unterschied machen**. Verändert Teilnahme von Studierenden und Lehrkräften Beschaffung, Werkzeugdesign, Assessmentregeln oder Abhilfen nach Fehlern? Fangen menschliche Prüfverfahren folgenreiche Fehler? Sind Alternativen zur KI-Nutzung echt verfügbar?

Datenschutzforschung sollte ebenso den bildungswirksamen Wert zusätzlicher Datenerhebung untersuchen, statt anzunehmen, dass detaillierteres Monitoring der lernenden Person gerechtfertigt ist. Studien können datenminimierende Designs mit intrusiveren Alternativen vergleichen und sowohl Lernen als auch Autonomie der lernenden Person bewerten. Siehe [[governance|KI-Governance]] und [[privacy]].

## 12. Reproduzierbare Studien und vertrauenswürdige kumulative Belege bauen

AIED steht vor einem ungewöhnlich schwierigen Reproduzierbarkeitsproblem. Studien können Prompts, Modellversionen, Einstellungen, Code oder Instruktionsdetails auslassen; proprietäre Systeme können sich außerdem während oder nach einer Intervention verändern. Diese Themen sind in [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] dokumentiert.

Reproduzierbarkeit erfordert, das Instruktionsarrangement ebenso zu beschreiben wie das Modell: Lernaufgaben, Inhaltsquellen, erlaubte Handlungen, Schnittstelle, Lehrkraftunterstützung, Assessmentbedingungen, und Veränderungen während des Deployments. Forschende sollten unterscheiden, eine Konfiguration zu reproduzieren von zu testen, ob ihr pädagogisches Prinzip auf eine andere überträgt. Die Berichtsdiskussion in [[research-methods-aied|Wirksamkeits-Forschungsmethoden]] adressiert dieses Bedürfnis nach transparenten Beschreibungen.

Belegsynthese erfordert vergleichbare Sorgfalt. Die Seite [[meta-analysis-systematic-review|Meta-Analyse und systematischer Review]] hebt schwache Primärstudien, Publikationsbias, heterogene Interventionen und inkompatible Ergebnisse als Grenzen gepoolter Schlussfolgerungen hervor.

Ein einzelner durchschnittlicher „KI-Effekt" kann die Unterscheidungen verdecken, die Pädagogische Fachkräfte am meisten brauchen. Reviews sollten begleitete Leistung von eigenständigem Lernen trennen, Interventionstypen und Vergleichsbedingungen unterscheiden, und Kodierungs- und Analyseentscheidungen prüfbar machen. Nullbefunde, gescheiterte Implementierungen und Randbedingungen sind wesentliche Beiträge zu dieser kumulativen Belegbasis.

Die Syntheseliteratur ist selbst eine Lücke. [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026) forensische Prüfung]] von 14 einflussreichen [[meta-analysis-systematic-review|Meta-Analysen]] fand, dass keine eine valide Grundlage für ihre Behauptungen bot: kein kohärentes Konstrukt (ein Werkzeug als einzelne Intervention behandelt und multidimensionale Ergebnisse gepoolt), invalide Publikationsbiasbewertung in allen 14, berichtetes I² zwischen 77.2% und 94.4% in jeder Analyse, die es berichtete (12 der 13 über 80%), und 61% der zufällig geprüften Primärstudien mit Validitätsbedenken. Jene 14 Analysen hatten in etwa 16 Monaten mehr als 2.000 Zitationen angehäuft, und eine zurückgenommene Meta-Analyse wurde in 60% der nach der Rücknahme zitierenden Papiere weiterhin als autoritativ zitiert, ohne die Rücknahme anzuerkennen. Unkritische Aufnahme ist nicht auf zurückgenommene Arbeit beschränkt: in einer Stichprobe von 14 Papieren, die eine andere geprüfte Meta-Analyse zitieren, deren Abstract einen großen Effekt von „KI-Bildung" bewarb, der tatsächlich das Belehren von Studierenden über KI maß, zitierten nur 2 sie angemessen, während 8 sie als Beleg dafür lasen, dass KI-Integration das Lernen verbessert, und 4 in anderen Hinsichten falsch lagen. Die Empfehlungen der Prüfung zielen direkt auf jene Kette und bitten Zeitschriften, volle Datentransparenz für Meta-Analysen zu verlangen (Suchprotokolle, kodierte Studienmerkmale, extrahierte Statistiken und Analysecode), bitten Herausgeber, eine Publikationsakte nicht als Beweis von Begutachtungskompetenz zu behandeln, und bitten, Rücknahmen sichtbar zu machen, wo auch immer ein Artikel entdeckt, exportiert oder zitiert wird. Reproduzierbarkeit umfasst deshalb die Integrität der Synthesekette, nicht nur einzelner Studien.

Lehrkräfte, die die Klassenraum-Ebene dieser Bedenken wollen –, welche Maße und Vergleichsdesigns zu nutzen sind –, können der Methodenanleitung in [[evaluating-ai-interventions-methods]] folgen.

## Gesamtbilanz

Das zentrale Forschungsbedürfnis ist nicht einfach mehr Studien, die zeigen, dass Studierende KI mögen, Lehrkräfte Zeit sparen, oder KI-unterstützte Arbeit höhere Werte erhält. Es sind stärkere Belege, die beantworten:

> Welches Bildungsdesign, für welche Lernenden, in welchem Kontext, über welchen Mechanismus, erzeugt welche dauerhaften menschlichen Fähigkeiten –, und mit welcher Verteilung von Vorteilen, Kosten und Schäden?

Jene Frage zu beantworten erfordert komplementäre Methoden: gut spezifizierte Experimente, longitudinale Nachverfolgung, validierte Assessments, qualitative und design-basierte Untersuchung, gerechtigkeitsfokussierte Beprobung und transparente Synthese. Das Ziel ist eine Belegbasis, die erklärt, nicht nur ob eine Intervention funktionierte, sondern warum sie funktionierte, wo sie scheitern könnte, und was Pädagogische Fachkräfte verantwortungsvoll in ein anderes Setting tragen können.
