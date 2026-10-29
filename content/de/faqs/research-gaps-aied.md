---
title: "Was sind bemerkenswerte Lücken in der Forschungsliteratur zu KI in der Bildung?"
created: "2026-08-24T14:10:00-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Eine Förderfrist liegt acht Tage entfernt, und der Hintergrundabschnitt braucht einen Satz dazu, was dieses Feld noch nicht weiß. Oder eine Kollegin hat einem Ausschuss gesagt, KI-Tutoring steigere die Leistung, unter Verweis auf ein zweijähriges Experiment an 18 Mittelschulen, und Sie sind die Person, die sagen muss, was diese Studie tragen kann. Oder Sie wählen eine Dissertationsfrage, und jede Version davon scheint schon bearbeitet worden zu sein.

Die Lücken, die zählen, betreffen Stärke, Spezifität und Anwendbarkeit. KI kann Bildungsaufgaben erledigen; die offenen Fragen sind, ob ein bestimmtes Design dauerhaften Nutzen erzeugt, für wen, über welchen Mechanismus und unter welchen Bedingungen. Diese Unterscheidung entscheidet zwei Dinge auf Ihrem Schreibtisch: was als Nächstes zu untersuchen ist und was Sie in der Zwischenzeit nicht mehr behaupten sollten. [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] ist der Katalog hinter dieser Seite. Belege zu [[intelligent-tutoring|intelligenten Tutoring-Systemen]], prädiktiver [[learning-analytics|Learning Analytics]], [[generative-ai|generativer KI]] und autonomen Agenten sind ebenfalls nicht austauschbar, und Forschung zur Nutzung von KI für das Lernen unterscheidet sich von Forschung dazu, Menschen etwas über KI beizubringen, wie der Überblick [[ai-education|KI in der Bildung]] erklärt.

## Die kurze Version

**1.** Vergleichen Sie die KI mit einer starken Nicht-KI-Alternative, die Curriculum, Übung und Unterstützung konstant hält, und sagen Sie, was die KI hinzugefügt hat.

**2.** Messen Sie verzögerte, unbegleitete Leistung, und stellen Sie fest, dass unterstützte Leistung kein Lernzuwachs ist.

**3.** Berichten Sie, welche Komponente des Pakets die Arbeit geleistet hat und welchen Mechanismus Sie behaupten.

**4.** Validieren Sie jeden automatisierten Wert und jede simulierte lernende Person gegen echte Lernende, einschließlich Lernender außerhalb Ihrer Entwicklungsstichprobe.

**5.** Nennen Sie die Populationsgrenze, denn ein gepoolter Durchschnitt beantwortet keine Gerechtigkeitsfrage.

**6.** Beschreiben Sie die Anordnung gut genug, dass jemand anderes sie nachbauen könnte.

## Wählen Sie einen Vergleich, der die KI isoliert

Strenge Klassenzimmerexperimente existieren, deshalb benennt „wir brauchen randomisierte Studien“ die Lücke nicht mehr. Die schärfere Frage ist, ob die KI-Komponente einen Mehrwert über zusätzliche Übung, bessere Materialien, zeitnahes Feedback oder mehr instruktionale Unterstützung hinaus bietet.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] berichtet bescheidene Leistungszuwächse an 18 Mittelschulen bei begrenztem substanziellem Engagement mit dem Tutor, und die Autorinnen und Autoren merken an, dass die Zuwächse jenen aus strukturierter Übung ohne KI ähnelten. Das sind Belege zu einem implementierten Paket, und sie können nicht isolieren, was die KI darin hinzugefügt hat.

Das Problem darunter ist ebenso konzeptuell wie empirisch. „ChatGPT“ benennt ein Werkzeug, keine Methode. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] prüften 19 Vergleiche zu ChatGPT in der Bildung: Nur 4 (21%) spezifizierten alle drei von replizierbarer Behandlung, operationalisierter Kontrolle und validem Lernmaß (74% wohldefinierte Behandlung, 42% wohldefinierte Kontrolle, 53% ein Lernoutcome). Wenn neue KI zusammen mit neuen Aktivitäten, Feedback oder Interface-Design kommt, sind Medium und Methode konfundiert, und kein Effekt gehört der KI.

Was es klären würde: Vergleiche gegen realistische Nicht-KI-Alternativen, wobei Curriculum, Übungsgelegenheiten und Unterstützung so konstant wie möglich gehalten werden, plus unabhängige Replikationen über Institution, Lehrkraft, Fach und Modell hinweg. Methoden beantworten hier unterschiedliche Fragen. [[qualitative-research|Qualitative]] und [[design-based-research|designbasierte]] Arbeit erklärt Implementation, während gut designte Experimente die Kausalbehauptungen tragen, wie [[research-methods-aied|Wirksamkeits-Forschungsmethoden]] darlegen.

## Messen Sie das Lernen, nachdem das Werkzeug weg ist

Verbesserte Arbeit während der KI-Nutzung ist kein Beleg für Lernen, das das Ende der Unterstützung übersteht. Die Synthesen zu [[learning-gains|Lernzuwächsen]] und [[cognitive-offloading|kognitiver Auslagerung]] ziehen immer wieder dieselbe Linie zwischen unterstützter Leistung, behaltenem Wissen, unabhängigem Schlussfolgern und Transfer.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] zeigt das Messproblem in einem randomisierten Experiment mit mehr als 6.000 Mittelschülerinnen und -schülern. Eine Mastery-Regel – drei richtige Antworten in Folge – erhöhte den plattformdefinierten Erfolg, ohne für sich genommen eine Woche später erkennbare Lernzuwächse zu erzeugen. Die stärksten Belege aus verzögerten Tests zeigten sich, als KI innerhalb des Mastery-Workflows saß und sich auf geübtes Material konzentrierte.

Die verbleibende Lücke betrifft Verläufe von Fähigkeit, und ein zusätzlicher Posttest schließt sie nicht. Niemand hat Retention über Monate, Transfer über Aufgaben hinweg, Leistung nach Entzug oder die Genauigkeit von Lernenden bei der Beurteilung dessen, was sie wissen, etabliert, und das Feld hat das Scheitern beim Erwerb einer Fähigkeit nicht vom Verfall einer bereits etablierten getrennt. Forschung zu Auslagerung muss noch zeigen, wann Delegation diese Verläufe stützt und wann sie die Übung verdrängt, die sie aufbaut.

## Finden Sie heraus, welcher Teil des Pakets die Arbeit geleistet hat

„KI-unterstütztes Lernen“ bündelt meist mehrere Änderungen: neues Feedback, ergänzte Reflexion, Peer-Diskussion, andere Aufgabenfolgen, veränderte Assessment-Anreize. Ein Paket, das gelingt, sagt Ihnen nicht, welche Komponenten notwendig waren.

[[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design]] ist ein echter Fortschritt bei dieser Frage. Unter 1.176 Erstsemesterstudierenden übertrafen reflektierende und hybride Designs direktes [[ai-feedback-quality|KI-Feedback]] bei verzögertem KI-freiem Transfer. Die hybride Bedingung kombinierte Selbstevaluation, [[peer-assessment|Peer-Feedback]] und KI-Kritik. Das trennt, wie Feedback organisiert und genutzt wird, davon, ob Studierende überhaupt Zugang zu Feedback haben.

Weiterhin offen: der Beitrag und das Timing erster unabhängiger Versuche, von Selbsterklärung, Peer-Input, korrigierendem Feedback, Hinweisen und auslaufender Unterstützung, und wie jedes davon mit [[prior-knowledge|Vorwissen]] und Aufgabenschwierigkeit interagiert.

Die Theorielücke läuft daneben her. Eine [[learning-theories|Lerntheorie]] zu benennen ist nicht, sie zu testen. Eine Studie braucht eine theoretische Vorhersage, die an ein konkretes Systemverhalten gebunden ist, und ein messbares Lernprozessmaß, und statistische Mediation informiert diese Erklärung, ohne einen kausalen Mechanismus zu etablieren. [[theory-development-aied|Theorieentwicklung in AIED]] und [[scaffolding]] führen das Argument weiter.

## Validieren Sie das Maß, bevor Sie es interpretieren

Konstrukte wie Engagement, [[critical-thinking|kritisches Denken]], KI-Kompetenz und [[personalized-learning|Personalisierung]] werden in dieser Literatur inkonsistent gemessen. Selbstauskünfte beschreiben Wahrnehmungen; sie können nicht für demonstrierte Kompetenz einstehen. Technische Genauigkeit, von Fachleuten bewertete Ausgabequalität und studentisches Lernen sind drei verschiedene Evaluationsziele. [[educational-measurement|Bildungsmessung]] und [[ai-ed-evaluation|Evaluation von KI in der Bildung]] behandeln diese Unterscheidungen als grundlegend.

Eine Lücke sitzt im Messproblem selbst: [[ai-technologies|KI-Systeme]], die andere KI-Systeme bewerten. In [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]] gaben [[simulating-students|simulierte Studierende]] zugewiesene [[misconceptions|Fehlvorstellungen]] nach korrigierendem Feedback häufig auf, unabhängig davon, ob das Feedback die Fehlvorstellung adressierte, sodass ihre Antworten unwirksame Instruktion erfolgreich aussehen lassen konnten. Gezieltes Training verbesserte das Faithfulness-Maß der Studie, und eine Verbesserung auf diesem Maß ist keine Validierung gegen menschliches Lernen.

Was fehlt, ist die Validierung der gesamten Evaluationskette – vom Modellverhalten über [[pedagogy|pädagogisches]] Urteil und Lernendenreaktion bis zum Bildungsergebnis –, an Lernenden und in Settings, die während der Entwicklung nicht genutzt wurden. Menschliches Urteil braucht dieselbe Prüfung, denn Übereinstimmung zwischen Beurteilenden ist kein Beleg dafür, dass das richtige Konstrukt erfasst wurde.

## Entscheiden Sie, was ein Assessment noch bescheinigen kann

KI erzeugt zwei miteinander verbundene Assessment-Probleme: Sie hilft, die bewertete Arbeit zu produzieren, und sie kann beeinflussen, wie diese Arbeit bewertet wird.

Die [[ai-agents-complete-lms-assessment-validity-2026|Studie der Wissensbasis zu KI-Agenten, die bewertete LMS-Aufgaben erledigen]] dokumentiert Agenten, die sich in einem laufenden Grundstudienkurs zurechtfinden und bewertete Aktivitäten abschließen. Das zeigt eine Fähigkeit, die Annahmen über von Studierenden produzierte Belege infrage stellt. Es etabliert nicht, wie verbreitet solche Nutzung ist, und es entwertet asynchrones Assessment nicht als Kategorie.

Die Forschungsfrage ist, welche Designs noch verteidigbare Schlüsse über die lernende Person stützen. [[eportfolio|Portfolios]], Reflexionen, gestufte Abgaben und Aktivitätsprotokolle müssen als Belege validiert werden, statt dass man annimmt, sie stellten Urheberschaft oder Verständnis fest. Studien sollten Kombinationen von Belegen gegen unabhängig beobachtete Kompetenz testen und dabei Barrierefreiheit, Arbeitsbelastung, Datenschutz und Prüfungsangst von Studierenden berücksichtigen. [[assessment-validity|Assessmentvalidität]] hält die Details.

Für [[automated-assessment|automatisierte Bewertung]] berichtet [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] systematische Nichtübereinstimmung zwischen unveränderten Modellen und menschlichen Beurteilenden. Die Befunde sind konfigurationsspezifisch, und sie zeigen, warum interne Konsistenz keine Validitätsbehauptung tragen kann.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] schlägt vor, getrennt zu bewerten, was Lernende unabhängig tun müssen, was sie mit KI erreichen dürfen und was sie prüfen und verteidigen müssen. Das ist ein Framework, das auf empirische Validierung wartet.

Detektion ist die klarste Sackgasse in diesem Bereich. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] ließen zwei kommerzielle Detektoren bei τ = 0.50 über 642 veröffentlichte englische Abstracts laufen. Leitlinienkonformes leichtes KI-Editing wurde zu 38-80% markiert. Unveränderte Originale von 2023-25 wurden zu 9-15% markiert, wobei Arbeiten außerhalb von [[stem-education|STEM]] weit über STEM lagen, bei p < 0.001. Nach Humanisierung fingen die Werkzeuge weniger als 4% der als KI-markierten Umschreibungen, eine Falsch-Negativ-Rate über 96%. Ein Wert, der ehrliche Unterstützung bestraft und Umgehung übersieht, kann keinen Schluss über eine lernende Person begründen.

## Hören Sie auf, Kompetenzwerte als Verhaltensbelege zu lesen

Forschung zu KI-Kompetenz-Interventionen ist umfangreich genug, um sie zu synthetisieren. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education]] umfasst 59 Studien und 7.211 Teilnehmende, berichtet einen positiven durchschnittlichen Effekt und ebenso substanzielle Variation mit einem weiten Prognoseintervall, das die Null einschließt. Wissensbezogene Outcomes fielen stärker aus als Fähigkeiten, Haltungen oder Ethik.

Die schärfere Lücke ist, ob Kompetenzunterricht verändert, was Menschen tun, wenn sie KI nutzen, und ein weiteres Kompetenzframework würde sie nicht schließen. Können Lernende ungestützte Behauptungen erkennen, Quellen verifizieren, irreführende Vorschläge zurückweisen, unangemessene Zustimmung bemerken und entscheiden, wann sie nicht delegieren sollten? Hält davon etwas unter Zeitdruck stand, und überträgt es sich auf unbekannte Systeme und Disziplinen?

Das zu klären braucht leistungsbasierte Bewertung kombiniert mit Beobachtung tatsächlicher Entscheidungen und verzögerter Nachbefragung, wobei konzeptuelles Wissen, operative Fertigkeit und kritisches Urteil getrennt statt gepoolt gehalten werden. [[ai-literacy|KI-Kompetenz]] und [[trust-calibration|Vertrauenskalibrierung]] liefern die Unterscheidungen.

## Berichten Sie, wen der Befund ausschließt

Befunde aus einem Kurs, einer Institution, einer Sprache oder einer Lernendenpopulation rechtfertigen selten Entscheidungen anderswo – ein Problem, das die Synthese [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] als wiederkehrend behandelt. Wie Effekte über Entwicklungsstufe, Disziplin, Vorwissen, Behinderung, Sprache und Ressourcenbedingungen variieren, bleibt weitgehend ungemessen.

Gerechtigkeitsforschung muss außerdem Zugang, Fähigkeiten und Outcomes trennen. Die Synthese [[digital-divide|Digitale Spaltung]] ist eindeutig, dass Geräte und Werkzeugzugang keine gleiche Fähigkeit zum Nutzen begründen. [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] begleitete 752 Schülerinnen und Schüler der Junior-Sekundarstufe in Hongkong: Psychologische Bereitschaftslücken verengten sich, während Unterschiede in einem objektiven KI-Kompetenztest bestehen blieben. Jede Gruppe verbesserte sich, und die Ungleichheit schloss sich nicht. Vorlernprofile waren nicht zufällig zugewiesen, ihre kausale Rolle bleibt also unbekannt.

Die Abdeckung ist an bestimmten Stellen dünn. [[differential-effects-across-learner-groups|Unterschiedliche Effekte über Lernendengruppen hinweg]] zählt die Literatur nach Population: Zweitsprach- und mehrsprachige Lernende sowie Studierende mit Behinderungen sind die tiefsten Stränge, Geschlecht und Neurodiversität folgen als Nächstes, Erststudierende und internationale Studierende haben je eine Studie in diesem Korpus, begabte und leistungsstarke Studierende sind praktisch unerforscht, und geflüchtete, eingewanderte und vertriebene Lernende erscheinen in keiner. Eine Belegbasis mit dieser Form kann eine Gerechtigkeitsfrage nicht durch Aggregation beantworten.

Auch innerhalb eines einzigen nationalen Systems variiert die Kapazität. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] bewerteten die KI-Integration an 45 nigerianischen Universitäten und fanden eine moderate Gesamtdurchdringung (M = 4.79, Spanne 1.83-7.83 auf einer 10-Punkte-Skala), wobei der Institutionstyp die Integration nicht vorhersagte, sobald Alter und Geografie kontrolliert wurden (Alter β = 0.43; Lage im Südwesten β = 0.31). Interne Kapazitäten korrelierten untereinander mit r = 0.79-0.80 und internationale Kooperationen mit Industriepartnerschaften mit r = 0.74, sodass vernetzte Institutionen kumulierende Vorteile anhäufen. Welche Kapazitätsaufbau-Designs an neueren, weniger vernetzten Institutionen Outcomes verändern, ist ungetestet.

Die Forschungspriorität ist, Designs zu identifizieren, die Unterschiede in demonstrierter Fähigkeit, Partizipation und [[agency]] verringern, wobei Teilgruppen-Outcomes und Belastungen neben durchschnittlichen Zuwächsen berichtet werden. Barrierefreiheit trägt ihre eigene ungelöste Frage: ob ein Design eine Barriere für Partizipation entfernt oder eine Fähigkeit ersetzt, die die lernende Person eigentlich entwickeln soll. Siehe [[equity-in-ai-education|Gerechtigkeit in der KI-Bildung]] und [[accessibility|Barrierefreiheit]].

## Sagen Sie, wer die Kontrolle hat, und wann sie wechselt

Wenn Systeme planen, Initiativen ergreifen, Gedächtnis halten und Werkzeuge koordinieren, wird die pädagogische Frage, wer welche Teile des Lernprozesses kontrollieren sollte und wann diese Kontrolle wechseln sollte.

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] kartiert 474 Studien und findet begrenzte longitudinale Validierung, eine Konzentration auf [[higher-ed|Hochschulbildung]] und STEM sowie schwache Integration von Bildungstheorie: Nur 29% der geprüften Studien bezogen sich explizit auf Bildungstheorie, ein Befund über diesen Korpus und nicht über alle AIED-Arbeit.

Offene Fragen folgen. Erzeugt von Lernenden initiierte Hilfe andere Outcomes als von Agenten initiierte Hilfe? Kann Unterstützung zurückgezogen werden, während Kompetenz sich entwickelt, ohne Verlust? Behalten Lernende die Fähigkeit, das System infrage zu stellen? Die Synthesen [[agentic-ai|Agentic AI]] und [[human-ai-collaboration|Mensch-KI-Zusammenarbeit]] ergänzen [[teacher-role|Lehrkraft]]-Intervention und Rechenschaft in Multi-Agenten-Settings, wo niemand etabliert hat, wer für die Entscheidung eines Agenten einsteht. Mehr Autonomie ist eine pädagogische Designentscheidung, deren Belegbasis noch aufzubauen ist.

## Testen Sie Sicherheitsfehler an echten Lernenden

Pädagogische Sicherheit reicht über faktische Genauigkeit und verbotene Anfragen hinaus. Ein Tutor kann eine korrekte Antwort geben und dabei die Gelegenheit der lernenden Person zum Denken entfernen, eine Fehlvorstellung verstärken oder Abhängigkeit aufbauen. [[pedagogical-safety|Pädagogische Sicherheit]] behandelt das Konstrukt.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifiziert Fehler, darunter übermäßige Antwortoffenlegung und Aufgabe von Scaffolding, mit substanziell mehr Fehlern unter Multi-Turn-Tests. Das sind [[benchmark]]-Befunde unter spezifizierten Bedingungen, keine Schätzungen, wie oft Schaden in Klassenzimmern auftritt.

Was geschieht, wenn diese Fehler bei anhaltender Nutzung auf echte Lernende treffen, ist unbekannt. Welche vorübergehende Verwirrung erzeugen, welche persistierende Fehlvorstellungen, welche Motivation senken und welche unabhängige Fähigkeit schwächen, wurde nicht gemessen. Ebenso wenig hat jemand etabliert, welche Schutzmaßnahmen diese Risiken senken, ohne übermäßige Verweigerung oder Frustration zu erzeugen. Längerfristige Arbeit muss außerdem Vertrauen, Bereitschaft, menschliche Hilfe zu suchen, [[agency|Handlungsfähigkeit der Lernenden]] und Beziehungen zu Peers und Lehrkräften als Outcomes führen. Für Kinder erfordert das entwicklungsangemessene Studien, die Systemverhalten mit Bildungs- und Beziehungsoutcomes verbinden.

## Trennen Sie Adoption von Implementation

Technische Fähigkeit begründet nicht, dass ein Werkzeug gut genutzt wird, und professionelle Entwicklung erreicht Studierende nicht automatisch. Das fehlende Glied verläuft meist von der Lehrkräftevorbereitung über veränderte Unterrichtspraxis zu studentischen Outcomes.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]] ist eine Mehrebenenstudie mit 46 Lehrkräften und 2.832 Studierenden. Pädagogisches KI-Wissen war mit den Wahrnehmungen und Absichten der Studierenden assoziiert, und keine der gemessenen Lehrkraftwissens-Komponenten war direkt mit den KI-Wissenszuwächsen der Studierenden assoziiert. Assoziationen dieser Art begründen nicht, dass eine Trainingsintervention besseres Lernen verursachen würde.

Die offene Frage ist, welche Kombinationen aus Coaching, [[curriculum-design|Curriculum-Abstimmung]], Review-Routinen, Zeitplanung und institutioneller Unterstützung anhaltende Verbesserung erzeugen, und Studien müssen tatsächlich umgesetzten Unterricht beobachten statt Lehrkraftzuversicht oder Adoptionsabsicht. [[teacher-ai-competency|KI-Kompetenz von Lehrkräften]] und [[educational-development|Educational Development]] decken das Terrain ab.

Vergleichende Kosteneffektivität ist eine zweite Lücke. Evaluationen sollten Verifikation, Korrektur, Training, Supervision, Wartung und Implementationszeit neben Abo- und Modellnutzungskosten zählen und KI-unterstützte Bereitstellung mit realistischen Alternativen vergleichen. Die Frage, die es zu beantworten lohnt, ist, welchen Bildungsnutzen die vollständige Anordnung für die Ressourcen liefert, die sie beansprucht.

## Zählen Sie Governance-Dokumente als Absichtserklärungen

[[ethics|Ethische]] Prinzipien und Governance-Frameworks sind notwendig, und ihre Existenz begründet nicht, dass sie Praxis verändern oder Lernende schützen.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] prüften 25 Artikel und fanden Endnutzende in der Ethikliteratur weitgehend passiv, mit praktisch abwesenden Studierendenstimmen, neben Spannungen zwischen Werten und Machtasymmetrien zwischen Stakeholdern. Das beschreibt die geprüfte Literatur. Es ist keine Behauptung, dass Studierende nie an AIED-Design teilnehmen.

Was fehlt, sind Belege dazu, welche Governance-Anordnungen einen messbaren Unterschied machen. Verändern Beteiligung von Studierenden und Lehrkräften Beschaffung, Werkzeugdesign, Assessment-Regeln oder Abhilfen nach einem Fehler? Fangen menschliche Review-Verfahren folgenreiche Fehler? Stehen Alternativen zur KI-Nutzung den Menschen, denen man sagt, sie zu nutzen, wirklich zur Verfügung? Datenschutzforschung hat eine parallele Lücke: Der Bildungswert zusätzlicher Datenerhebung wird meist angenommen, und datenminimierende Designs wurden selten mit intrusiveren auf Lernen und Autonomie der Lernenden zugleich verglichen. Siehe [[governance|KI-Governance]] und [[privacy|Datenschutz]].

## Machen Sie die Studie nachbaubar

AIED hat ein ungewöhnlich hartes Reproduzierbarkeitsproblem. Studien lassen Prompts, Modellversionen, Einstellungen, Code und instruktionale Details aus, und proprietäre Systeme können sich während oder nach einer Intervention ändern. [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] dokumentiert das Muster.

Eine Studie nachzubauen heißt, die instruktionale Anordnung ebenso zu beschreiben wie das Modell: Lernaufgaben, Inhaltsquellen, erlaubte Aktionen, Interface, Lehrkraftunterstützung, Assessment-Bedingungen und alles, was sich während des Einsatzes geändert hat. Eine Konfiguration zu reproduzieren und zu testen, ob ihr pädagogisches Prinzip auf eine andere übertragbar ist, sind getrennte Leistungen, und die Berichtsleitlinien in [[research-methods-aied|Wirksamkeits-Forschungsmethoden]] adressieren beides.

Synthese braucht dieselbe Sorgfalt. [[meta-analysis-systematic-review|Meta-Analyse und systematischer Review]] nennt schwache Primärstudien, Publikationsbias, heterogene Interventionen und inkompatible Outcomes als Grenzen gepoolter Schlüsse, und ein einziger durchschnittlicher „KI-Effekt“ verdeckt die Unterscheidungen, die Lehrende brauchen. Reviews sollten unterstützte Leistung von unabhängigem Lernen trennen, Interventionstypen und Vergleichsbedingungen unterscheiden und Kodierungsentscheidungen prüfbar machen.

Die Syntheseliteratur ist selbst eine Lücke. [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026) forensische Prüfung]] von 14 hochwirksamen [[meta-analysis-systematic-review|Meta-Analysen]] fand, dass keine eine valide Grundlage für ihre Behauptungen bot. Kein kohärentes Konstrukt: ein Werkzeug als eine Intervention behandelt, multidimensionale Outcomes gepoolt. Publikationsbias wurde in allen 14 ungültig bewertet. Das berichtete I² reichte von 77.2% bis 94.4% in jeder Analyse, die es berichtete, wobei 12 der 13 über 80% lagen. 61% der zufällig geprüften Primärstudien trugen Validitätsbedenken. Diese 14 Analysen sammelten in etwa 16 Monaten mehr als 2.000 Zitationen, und eine zurückgezogene Meta-Analyse wurde in 60% der zitierenden Papiere nach dem Rückzug weiterhin als autoritativ zitiert, ohne Hinweis. Von 14 Papieren, die eine andere geprüfte Meta-Analyse zitierten, deren Abstract einen großen Effekt von „KI-Bildung“ bewarb, die tatsächlich das Lehren von Studierenden über KI maß, zitierten nur 2 sie angemessen, 8 lasen sie als Beleg dafür, dass die Integration von KI das Lernen verbessert, und 4 lagen auf andere Weise falsch. Die Prüfung bittet Journale, volle Datentransparenz für Meta-Analysen zu verlangen (Suchprotokolle, kodierte Studienmerkmale, extrahierte Statistiken, Analysecode), Herausgebende, eine Publikationshistorie nicht als Beweis für Review-Kompetenz zu behandeln, und Rückzüge überall sichtbar zu machen, wo ein Artikel gefunden, exportiert oder zitiert wird. Reproduzierbarkeit umfasst die Synthesekette, nicht nur die einzelne Studie.

Lehrende, die die klassenraumbezogene Version wollen, können [[evaluating-ai-interventions-methods]] folgen.

## Was Forschende und Lehrende dabei falsch verstehen

**Dem Feld fehlen Studien.** Ihm fehlen spezifizierte. Es gibt Multi-Site-Experimente, randomisierte Studien mit Tausenden Studierenden und 14 hochwirksame Meta-Analysen. Nur 21% der geprüften Vergleiche definierten Behandlung, Kontrolle und Outcome gut genug, um einen Effekt zuzuschreiben.

**Eine Theorie zu benennen testet sie.** Eine Zitation zu einer Lerntheorie ist eine Rahmungsentscheidung. Ein Test braucht eine Vorhersage, ein Systemverhalten, das sie implementiert, und ein Prozessmaß, das auch anders ausgehen könnte.

**Ein validierter automatisierter Wert ist ein validiertes Outcome.** Übereinstimmung mit menschlichen Kodierenden etabliert Konsistenz mit diesen Kodierenden. Simulierte Studierende verbesserten sich auf einem Faithfulness-Maß, ohne gegen menschliches Lernen validiert zu werden, und die Kette vom Modellverhalten zum Outcome bleibt ungebaut.

**Zugang ist Gerechtigkeit.** In der Hongkong-Studie verengten sich psychologische Bereitschaftslücken, während objektive Testunterschiede bestehen blieben, und jede Gruppe verbesserte sich, ohne dass die Ungleichheit sich schloss. Geräte und Lizenzen verändern, wer das Werkzeug erreichen kann.

**Mehr Autonomie ist Fortschritt.** Größere Agentenunabhängigkeit ist eine Designentscheidung. Bei 29% von 474 agentischen Studien, die auf Bildungstheorie zurückgreifen, und begrenzter longitudinaler Validierung hat niemand gezeigt, dass die Verschiebung der Kontrolle zum System das Lernen verbessert.

## Die Einwände, die Sie hören werden

**„Die Lücke ist einfach, dass wir mehr randomisierte Studien brauchen.“** Es gibt inzwischen reichlich, und das Problem sitzt vor den Design-Labels: Eine Studie zu einem Paket, das neues Feedback, neue Aufgaben und ein neues Interface bündelt, kann nichts der KI zuschreiben. Die Vergleichsbedingung ist der Ort, an dem die Arbeit liegt.

**„Ich kann keine mehrjährige Nachbefragung durchführen.“** Dann messen Sie eine verzögerte, unbegleitete Gelegenheit und sagen Sie, welches Intervall sie abdeckt. Eine Woche ist ein echter Befund, und die Mastery-Regel-Studie erhielt ihr Ergebnis nach einer Woche, indem sie KI in den Workflow einbettete und sich auf geübtes Material konzentrierte.

**„Randomisierung ist in meinem Kurs unmöglich.“** Designbasierte und qualitative Arbeit beantworten Implementationsfragen, die Studien nicht beantworten können, und das Feld braucht beides. Wo zufällige Zuweisung möglich ist, trägt sie weiterhin die Kausalbehauptung.

**„Die gepoolte Effektstärke sagt mir schon, was wirkt.“** Die 14 geprüften Meta-Analysen definierten die Behandlung als ein Werkzeug, poolten inkompatible Outcomes und berichteten I² über 80% in 12 von 13 Analysen, die es angaben. Die gepoolte Zahl beschreibt eine Gruppe von Studien mit einem Konstruktproblem.

**„Simulierte Studierende sind billiger, also kann ihre Validierung warten.“** In der Sykophantie-Studie ließen simulierte Studierende Fehlvorstellungen fallen, unabhängig davon, ob das Feedback sie adressierte, und das ist der Fehlermodus, der einen unwirksamen Tutor wirksam aussehen lässt.

## Diese Woche tun

**1.** Schreiben Sie die Vergleichsbedingung der Studie, die Sie planen, in einem Satz. Wenn sie Business-as-usual ist, überarbeiten Sie sie, bevor Sie irgendetwas anderes überarbeiten.

**2.** Fügen Sie dem Design ein verzögertes, unbegleitetes Maß hinzu und nennen Sie das Intervall im Methodenabschnitt.

**3.** Schreiben Sie die Populationsgrenze in die Designbeschreibung und dann in das Abstract, damit die Behauptung nicht weiter reisen kann als die Stichprobe.

**4.** Nehmen Sie die stärkste Behauptung in Ihrem aktuellen Entwurf und löschen Sie die Version, die Ihr Maß nicht tragen kann. Behalten Sie den Satz über die Obergrenze.

**5.** Benennen Sie für jeden automatisierten Wert oder jede simulierte lernende Person in der Studie den menschlichen Standard und die entscheidende Instanz, bevor die Datenerhebung beginnt.

## Wohin als Nächstes

[[reporting-interpreting-aied-research]] ist das Berichts-Gegenstück zu dieser Seite, und [[research-methods-aied|Forschungsmethoden in KI in der Bildung]] behandelt die Designentscheidungen hinter jeder Lücke. [[evaluating-ai-interventions-methods]] handhabt Maße und Vergleichsdesigns, [[checking-whether-educational-ai-works]] ist die kürzere Version der Wirksamkeitsfrage, und [[does-ai-help-students-learn]] sammelt, was über dauerhaftes Lernen bekannt ist. [[theory-development-aied]] und [[equity-ethics-pedagogical-safety-research]] führen die Theorie- und Gerechtigkeitsstränge weiter.
