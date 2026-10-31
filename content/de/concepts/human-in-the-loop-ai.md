---
title: Human-in-the-Loop-KI
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-30T23:30:00-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-28T19:13:23-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Human-in-the-loop-KI** – das Designmuster, in dem pädagogische [[ai-technologies|KI-Systeme]] strategisch automatisierte Generierung mit menschlichem Fachurteil verschränken und dabei [[pedagogy|pädagogische]] Qualität und Sicherheit bewahren, während sie die Produktion skalieren. Statt Assessment, Feedback oder Instruktion vollständig zu automatisieren, hält HITL einen Menschen (Lehrkraft, Fachexpertin bzw. Fachexperten oder Lernenden) in der Entscheidungsschleife, wo sein Urteil den höchsten Grenznutzen hat – bei der Bewertung von Qualität, der Schlichtung von Grenzfällen und dem Schutz von [[agency|Lernendenhandlungsfähigkeit]] und Sicherheit. Die zentrale Designfrage ist nicht *ob* Menschen einbezogen werden, sondern *wo* in der Pipeline ihre Aufsicht am wertvollsten und am wenigsten ersetzbar ist.

## Fragen zum Nachdenken

- Die zentrale HITL-Designfrage ist nicht, ob Menschen einbezogen werden, sondern wo in der Pipeline ihr Urteil am wertvollsten ist. An welchem Punkt eines KI-Assessment- oder Feedbacksystems würden Sie darauf bestehen, dass ein Mensch in der Schleife bleibt?
- Studien zu KI-[[automated-question-generation|Aufgengenerierung]] fanden, dass Computer Klarheit und Validität gut handhaben, aber Menschen noch für sinnvolle Distraktoren und gutes Feedback nötig sind. Warum könnten einige Teile pädagogischen Urteils sich der Automatisierung widersetzen?
- Eine Evaluation fand, dass drei LLMs inkonsistente, unsensible Empfehlungen zur Studierendenunterstützung gaben – mit dem Schluss, menschliches Urteil sei noch nötig, bevor KI Ratschläge zu Studierenden gibt. Wenn eine KI „empfiehlt“, einer schwachen Studierenden bzw. einem schwachen Studierenden zu helfen: Was kann schiefgehen, wenn kein Mensch das prüft?
- Die Seite legt nahe, Menschen und Algorithmen fingen unterschiedliche Arten von Problemen – automatisieren Sie, was präzise verifizierbar ist, bewahren Sie Urteil, wo Nuance unersetzbar ist. Wo liegt in Ihrer eigenen Praxis die Grenze zwischen beidem?
- Einen Menschen in der Schleife zu halten wird als Schutz der Handlungsfähigkeit und Sicherheit der Lernenden gerahmt, nicht nur der Qualität. Wie könnte volle Automatisierung subtil verändern, wer sich bei den Studierenden für ihr Lernen verantwortlich fühlt?
- Wenn KI autonomer wird, wird HITL-Aufsicht als zentrale Sicherheitsleitplanke beschrieben. Ab welchem Niveau der KI-Autonomie würden Sie sich unwohl fühlen –, und was sagt dieses Unwohlsein darüber, wo Aufsicht hingehört?

## Einführung

HITL ist eine Antwort auf die Grenzen und Risiken vollständig autonomer [[ai-education|KI in der Bildung]]: Automatisierte Systeme können im großen Maßstab generieren, ermangeln aber des kontextuellen, [[ethics|ethischen]] und pädagogischen Urteils, das Lehrende und Fachleute mitbringen. Zwei aktuelle Implementierungen illustrieren klar unterscheidbare Architekturen:

- **Human-in-the-Loop reicht nicht, wenn der Mensch nur absegnet.** [[learning-analytics-genai-learning-design|Rienties, Divjak und Law (2026)]] argumentieren, dass echte Handlungsfähigkeit die Fähigkeit erfordert, KI-gestützte Empfehlungen zu verstehen, anzufechten, neu zu gestalten und manchmal abzulehnen – nicht bloß, um Entscheidungen abzunehmen, die anderswo geformt wurden.

Vorschreibende Unterstützung ist eine Domäne, in der menschliche Aufsicht zunehmend als nicht optional argumentiert wird. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] testeten, ob drei LLMs Pläne zur Studierendenunterstützung aus [[learning-analytics|Learning-Analytics]]-Indikatoren empfehlen können, und fanden begrenzte Sensibilität für Bedarf und scharfe modellübergreifende Inkonsistenz –, mit dem Schluss, dass Human-in-the-Loop-Urteil noch nötig sei, bevor [[llm|vorschreibende Beratung]] sicher und ethisch eingesetzt werden könne.

Ein Zurückhalten der präferierten Antwort des Systems ist schützend statt korrigierend: In einer Multi-Agenten-Debatte, die nie eine empfohlene Position offenbarte, fiel das schädliche Umschalten auf eine inkorrekte KI-Antwort von 42,0–60,5% auf 5,7–8,2%, während auch die Übernahme korrekter Ratschläge sank ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

Eine dritte Architektur platziert menschliches Urteil *vorgelagert* des Modells statt an seinem Output. In der Studie zu [[lee-learner-question-types-ai-education-2026|Lee, Atif & Kang (2026)]] zur Klassifikation von Lernendenfragen steuerten drei doktoratsnahe Expertinnen und Experten die gesamte Pipeline: Sie verfeinerten die operationalen Definitionen für jede [[constructivist]]-Rolle, markierten unabhängig, bis Fleiss' Kappa von 0,60 auf 0,83 stieg, nachdem Diskrepanzen aufgelöst waren, und validierten die rückübersetzten und paraphrasierten Items, die genutzt wurden, um das Trainingsset zu balancieren.

## CODE-GEN: Human-in-the-Loop-MCQ-Generierung

Duan et al. (2026) bauten ein [[rag]]-basiertes [[agentic-ai|agentisches]] System mit zwei Agenten:
- **Generator-Agent** – erzeugt Multiple-Choice-Coding-Fragen, ausgerichtet an den Lernzielen des Kurses
- **Validator-Agent** – bewertet Qualität über sieben pädagogische Dimensionen

**Evaluation:** 6 SMEs beurteilten 288 KI-generierte Fragen. Menschen-validierte Erfolgsraten: **79.9%–98.6%** über Dimensionen hinweg.

**KI-starke Dimensionen (niedrige menschliche Last):**
- Fragenklarheit, Code-Gültigkeit, Konzeptausrichtung, Gültigkeit der richtigen Antwort

**Menschenerforderliche Dimensionen (hohe menschliche Last):**
- Pädagogisch sinnvolles Distraktordesign
- Hochwertiges erklärendes [[feedback|Feedback]]

Strategische Einsicht: Menschliche Anstrengung sollte konzentriert werden, wo Instruktionsurteil unersetzbar ist; rechnerische Verifikation kann vollständig automatisiert werden.

## MAIC: Human-in-the-Loop-Skript-Generierung

Yu et al. (2024) setzten ein Multi-Agent-Klassenzimmer ([[teacher-role|Teacher]]-Agent, TA-Agent, Kommilitoninnen- und Kommilitonen-Archetypen) an der Tsinghua-Universität mit >500 Studierenden und >100.000 Lernaufzeichnungen ein. Menschliche Lehrende wirken an Skriptgenerierung und Aufsicht mit und stellen sicher, dass KI-Verstärkung im großen Maßstab pädagogische Expertise nicht verdrängt.

## PedaCo: Doppelte Kontrolle für KI-Videogenerierung

Kim, Baek und Kwak (2026) erweitern HITL auf [[video-education|KI-generiertes Unterrichtsvideo]] über **PedaCo** (Pedagogical Co-creation), eine Pipeline mit zwei komplementären Kontrollschichten, die *prinzipiellen Widerstand* instanziieren, verankert in Mayers Kognitiver Theorie multimedialen Lernens (CTML). Die **erste Schicht** platziert den Menschen im Skriptstadium: Ein LLM entwirft ein Skript, ein KI-Reviewer markiert potenzielle CTML-Verstöße (z. B. „Szene 3 führt technische Begriffe ohne vorherige Erklärung ein“), und die bzw. der Pädagogin bzw. Pädagoge entscheidet, anzunehmen, zu überarbeiten oder neu zu generieren. Die **zweite Schicht** führt automatisierte Metriken nach der Synthese über Kohärenz, Redundanz, zeitliche Kontiguität, Modalität und Bildqualität aus, die die bzw. der Pädagogin bzw. Pädagoge prüft. In einer Within-Subject-Studie (23 Pädagoginnen und Pädagogen) verbesserte der reviewbasierte Ansatz jedes CTML-Prinzip (mittlere Bewertung 3,07→3,86, p<0,01), wobei Pädagoginnen und Pädagogen die Produktionseffizienz mit 4,26/5 bewerteten – Reibung als produktiv wahrgenommen, nicht als belastend. Das Designprinzip wiederholt die HITL-Synthese der Wissensbasis: Menschen und Algorithmen fangen *unterschiedliche* Arten von Problemen, daher automatisieren die wirksamsten Systeme dort, wo rechnerische Verifikation präzise ist (zeitliche Synchronisation), und bewahren menschliches Urteil, wo pädagogische Nuance unersetzbar ist (Ton, Publikumsfit).

Platzierung kann mehr zählen als Präsenz: Praktikerinnen und Praktiker bewerteten ein Autorenwerkzeug für Social Storys als hoch nutzbar (SUS 86,8), berichteten aber, das Review komme zu spät, weil kulturelle und klinische Einschränkungen, die vor der Generierung gesetzt werden – ein Abaya statt westlicher Straßenkleidung –, schwerer durch nachträgliches Bearbeiten der Ausgabe zu korrigieren sind ([[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]]).

## Warum HITL im KI-Zeitalter zählt

Human-in-the-Loop-Design ist aus mehreren konvergierenden Gründen für die Diskussionen der Wissensbasis zu [[agentic-ai|agentischer KI]] und [[ai-literacy|verantwortungsvoller KI-Nutzung]] zentral geworden:
- **Pädagogische Sicherheit.** [[pedagogical-safety]] erfordert, dass KI mit echter Instruktionsautorität menschliche Aufsicht behält, damit Fehler, Biases oder schädliche Ausgaben gefangen werden, bevor sie Lernende erreichen. Das ist besonders wichtig für autonome Agenten, die [[agentic-ai|proaktiv Ziele verfolgen]].
- **Aufsicht ist selten in der Praxis, nicht nur in der Theorie.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] fanden, dass robuste eingebettete Governance und Human-in-the-Loop-Aufsicht über 474 pädagogische agentische KI-Systeme hinweg selten ausgeprägt waren, selbst als Einzelaufgaben-Autonomie und Multi-Agent-Kollaboration wuchsen – die Lücke zwischen dem Designprinzip und der eingesetzten Praxis.
- **Die kritische Frage ist, wie die Schleife handlungsleitend gemacht wird, nicht wie sehr Menschen teilnehmen.** Eine lernwissenschaftliche Sicht argumentiert, dass die Organisation von Lernen um Datenerfassung, rechnerische Interpretation und wahrscheinliche Antwort herum pädagogisches Handeln davon abhängig macht, was Systeme erkennen und worauf sie reagieren können, und dass Alerts und Engagement-Klassifikationen die lernende Person deuten, bevor eine Lehrkraft oder eine studierende Person handelt ([[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]]).
- **Validität und Qualitätskontrolle.** HITL ist ein Qualitätstor für [[automated-assessment|automatisiertes Assessment]] und Generierung – Menschen schlichten dort, wo automatisierte Bewertung unverlässlich ist (siehe [[llms-do-not-grade-essays-like-humans-2026|LLM-Essaybenotung]]-[[research-methods-aied|Forschung]]), und validieren generierte Items. Ein PRISMA-geleiteter [[meta-analysis-systematic-review|systematischer Review]] von 42 Studien zu Benotung und Feedback (2023–2025) kommt ausdrücklich zum selben Schluss: LLMs erreichen die Übereinstimmung mit menschlichen Beurteilenden bei kurzen, wohlstrukturierten Aufgaben, können aber menschliches Urteil bei komplexer, offener oder subjektiver Arbeit nicht vollständig ersetzen, und die höchste Effektivität der Benotung wird in hybriden Systemen erreicht, die KI-getriebene Benotung mit Aufsicht und Verifikation durch Lehrende kombinieren ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] zeigen konkret, wo jene Grenze fällt: ChatGPT-5 passte bei objektiven Items der Pharmazieprüfung zur Fakultät (CCC 0,935–1,000), war aber bei Kurzantwort- und Essay-Items unverlässlich, selbst wenn eine Rubrik geliefert wurde, was die Autoren zu der Empfehlung führt, bei komplexem, subjektivem oder folgenreichem Assessment hybrid zu benoten mit menschlicher Prüfung.
- Wiederholung ist kein Ersatz für jene Aufsicht: Bei Neubenotung identischer Einsendungen an fünf verschiedenen Tagen reproduzierte dasselbe Modell seine eigenen Ergebnisse nur bei Krippendorffs Alpha 0,625, mit Variation, die in den mittleren Noten konzentriert war, während A und F in den Fünf-Sitzungs-Zählungen fehlten ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **Handlungsfähigkeit der Lernenden.** Einen Menschen in der Schleife zu halten bewahrt [[agency]] und stützt [[self-regulated-learning]], und wirkt der [[cognitive-offloading|übermäßigen Abhängigkeit]] entgegen, die vollständig autonome Assistenz induzieren kann.

- **Studierende setzen selbst den Menschen an das folgenreiche Ende.** Unter 93 Undergraduates bevorzugten 81,7% menschliche Benotung für eine Abschlussarbeit, die 40% der Note zählte, wollten 75 von 93, dass KI unterstützt statt Bewerter ersetzt, und 69 wollten KI-Benotung immer menschlich geprüft ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Vertrauen und Kalibrierung.** Transparente menschliche Aufsicht stützt [[trust-calibration]] – Lernende und Lehrende wissen, dass ein qualifizierter Mensch hinter dem System steht.
- **Vor dem Review sichtbare Kriterien heben die Übereinstimmung.** [[calibrating-trustworthiness-llm-education-2026|Coscia et al. (2026)]] fanden, dass das Sichtbarmachen von Vertrauenswürdigkeitsmetriken für Prüfende, während sie LLM-Antworten verglichen, die Inter-Rater-Übereinstimmung von Krippendorffs Alpha 0,3987 auf 0,4931 hob, während das Hinzufügen weiterer Maße kognitive Überlast ohne Ertrag ergab.
- **Begrenzte Handlungsfähigkeit als Architektur, nicht als Disclaimer.** [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] bauen in ihrem AGAI-HE-Rahmenwerk für [[agentic-ai|agentische]] Lernunterstützung Aufsicht in das Modell selbst ein, als dritte Schicht neben den Schichten des pädagogischen Arbeitsablaufs und der agentischen Unterstützung: Sie definiert akzeptable KI-Nutzung, pädagogische Grenzen, [[privacy]]-Regeln, [[ai-use-disclosure|Offenlegungsanforderungen]], Quellenverifikation, Lehrenden-Checkpoints, [[academic-integrity|Integrität]]mechanismen und letztmenschliche Verantwortung, und verlangt, dass jede agentische Funktion auf eine Lernanforderung, einen Assessmentzweck oder eine Governance-Kontrolle zurückführbar ist. Es ist eine konkrete Instanziierung des Prinzips, dass HITL eine System-Design-Eigenschaft ist statt eine Richtlinienaussage –, und die 130-Studierende-Wahrnehmungsstudie der Autoren ist eine Erinnerung, dass das Hinzufügen agentischer Orchestrierung unter jener Aufsicht sich für sich genommen nicht als bessere Lernunterstützung registrierte als ein Chatbot.
- **Wie oft der Mensch schaut, ist selbst eine Designentscheidung.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] trennt die *Frequenz* der Aufsicht von ihrer Platzierung: Hochfrequentes HITL, das jede KI-Ausgabe prüft, bevor sie Studierende erreicht, kauft Qualitätskontrolle, schnelle Fehlererkennung, Verantwortlichkeit und laufende Kalibrierung, kann aber die Effizienz zunichtemachen, die die Automatisierung motivierte, und Spitzenbenotungszeiten zum Engpass machen; niederfrequentes HITL, das Stichproben prüft und nur markierte Fälle reviewt, skaliert und verkürzt die Bearbeitungszeit, riskiert aber, dass sich Fehler über Einsendungen hinweg unentdeckt ausbreiten, schwächt die Verantwortlichkeit und erzeugt ein [[equity-in-ai-education|Gerechtigkeits]]problem, wenn einige Studierende gründlichere menschliche Prüfung erhalten als andere. Statt eine universelle Antwort vorzuschreiben, verlangt das Rahmenwerk, den Trade-off explizit gegen disziplinäre Fehlertoleranzen zu treffen, dagegen, ob das Assessment [[formative-assessment|formativ]] oder [[summative-assessment|summativ]] ist, gegen Kohortengröße und institutionelle Ressourcen –, und setzt eine Voreinstellung in die entgegengesetzte Richtung des üblichen Effizienzarguments: Beginnen Sie mit hochfrequenter Aufsicht und skalieren Sie sie nur zurück, wenn substanzielle Evidenz akzeptable Verlässlichkeit, Sicherheit und Fairness demonstriert, sodass die Beweislast darauf ruht, zu zeigen, dass *weniger* Aufsicht sicher ist. Das Papier warnt auch, dass die Prinzipien hinter solcher Aufsicht den Personalaufwand eher verlagern als senken können, was Nettoeffizienzgewinne zu einer offenen empirischen Frage lässt.
- Eingesetzte menschliche Aufsicht kann Annahme-Routing statt Qualitätsurteil bedeuten: In einem hybriden Anfragesystem kodierte das Annahmefeld nur, ob die bzw. der Bearbeitende von der bzw. dem Fragenden verschieden war, und kein Maß bewertete die Antwortqualität [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].

## Wo HITL in der Forschung der Wissensbasis auftritt
- **Automatisiertes Assessment und Benotung:** HITL-Systeme kombinieren KI-Generierung/-Bewertung mit menschlicher Validierung über Kurzantwort-Benotung ([[cong-confidence-asag-2026]]), Selbsterklärungs-Assessment ([[llm-automated-assessment-student-self-explanations]]) und [[automated-essay-scoring|Essaybewertung]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] instanziieren dies bei folgenreicher Benotung handschriftlicher allgemeiner [[chemistry-education|Chemie]]: Weil die Verlässlichkeit eines [[multimodal]]-LLMs nach Antwortformat variiert (textuelle und chemische Reaktionsantworten sind verlässlich, während Zeichnen und Diagrammerstellung schlechter als zufällig abschneiden) und falsche Positive von Studierenden unentdeckt bleiben, konvertieren sie rohe KI-Scores in eine selektive Annehmen/Rückverweis-Politik unter Nutzung von Konfidenzfiltern – Teilpunktschwellen, eine [[item-response-theory|IRT]]-basierte Risikoschwelle und Ausschluss nach Aufgabentyp –, wobei sie unsichere und grafische Items an Menschen zurückverweisen, ein Ansatz, den die Autoren an [[regulation|regulatorische]] Rahmenwerke binden, die KI im [[assessment|Bildungsassessment]] als hochriskant bezeichnen und dokumentierte menschliche Aufsicht verlangen.
- **Feedbacksysteme:** Sie verlangen dokumentierte menschliche Aufsicht.
- **Operatives HITL-Scoring in einem nationalen Assessment (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] instanziieren HITL auf institutionellem Maßstab in der Acredita-EB-Prüfung Uruguays. Weil die Fehler des LLM-Bewerters systematisch konservativ sind (Unterbenotung), nutzt der Arbeitsablauf eine Entscheidungspunkt-Logik, die menschliche Prüfung genau zu den Kandidatinnen und Kandidaten leitet, deren Bestanden-/Durchgefallen-Ergebnis vom Writing-Abschnitt abhängt – KI-benotete Bestanden-Antworten werden mit Vertrauen angenommen, während KI-benotete Durchgefallen-Antworten (15,3–16,5% der Fälle) von Experten-Beurteilenden verifiziert werden, was den Aufwand für vollständige Benotung um ≥50% senkt bei einem Restrisiko eines Bestehens durch KI-Fehler von nur 0,2–0,6%. Das ist HITL als Ressourcenzuteilungsstrategie: Menschen schlichten genau dort, wo der konservative Bias der KI ansonsten folgenreiche Ergebnisse verändern würde.

- **Die Rückverweisschwelle aus der eigenen Auflösung der Rubrik ableiten (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] setzten die Toleranz zwischen KI und Lehrendem auf 0,5 Punkte – die größte Diskrepanz, die eine Einsendung nicht über ein Ankerband bewegen kann – und eskalierten Ausreißer bei 0,8 Punkten, wobei sie 11 von 362 Einsendungen (3,0%) zur menschlichen Prüfung schickten, bevor das Feedback freigegeben wurde.

- **Übereinstimmung zwischen Annotierenden ist keine menschliche Ground Truth.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] schieben Modellannotation in die Auditschicht, ohne sie jemals gegen menschliche Gold-Labels zu validieren, wodurch modellübergreifende Übereinstimmung (Median 0,401) ein Stellvertreter für Behauptungsqualität bleibt, den geteilte Modellfehler überleben können. Ihr Design hält die Aufsicht diagnostisch statt dekorativ: Weil die Zwischenurteile explizit sind, kann eine Prüfende sehen, welche Verhaltensweisen ausgelöst wurden, und ein fehlgelesenes Verhalten von einer Regel trennen, die das Konstrukt schlecht kodiert.
- **Feedbacksysteme:** Human-in-the-Loop-Feedbackdesign erscheint in [[becerra-aicofe-feedback-2026|kollaborativen Feedbacksystemen]] und [[cong-confidence-asag-2026|konfidenzbewusster Kurzantwort-Benotung]].
- **Unterstützung von Klassenzimmerzusammenarbeit.** [[breideband-community-builder-cobi-2026|CoBi]] behält die Lehrkraft als prüfenden Menschen in einem KI-System, das erhebenden Diskurs in Kleingruppen erkennt: Lehrende bevorzugten explizit Review vor/nach Aktionen statt Live-Echtzeitanzeige, die sie „auf der Stelle“ gestellt hätte, und das auf Klassenebene (statt individuelle Ebene) aggregierte Feedback des Systems ist genau das, was es ihm ermöglicht, die Spannung zwischen [[privacy]], Überwachung und Studierenden[[agency]] zu navigieren.
- **Fragen- und Inhaltsgenerierung:** Jenseits von CODE-GEN leitet HITL Aufgengenerierung für Assessment und [[scaffolding]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Agentische und Multi-Agent-Systeme:** Wenn KI autonomer wird, ist HITL-Aufsicht eine zentrale [[agentic-ai|Designleitplanke]] ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Routing nach Entscheidungskonsequenz, nicht nach Modellunsicherheit (2026).** Eine [[human-in-the-loop-ai-scoring-national-assessment-2026|operative Studie aus dem Jahr 2026]] zum nationalen Acredita-EB-Akkreditierungstest Uruguays (zwei Ausgaben, jeweils etwa 5.000-6.000 Kandidatinnen und Kandidaten) zeigt, wie Human-in-the-Loop-Design aussieht, wenn es von Entscheidungskonsequenzen statt von Modellunsicherheit getrieben ist. Ein GPT-5-Bewerter stimmte bei 60-80% der 15 Rubrikitems mit Experten-Beurteilenden überein, war aber systematisch konservativ und erzeugte Diskrepanzen zwischen Mensch-Bestanden/KI-Durchgefallen in 15,3% (2024) und 16,5% (2025) der Bestanden-/Durchgefallen-Vergleiche und fast nie das Gegenteil. Das Rahmenwerk nimmt daher KI-bestehende Ergebnisse unverändert an und leitet jedes KI-durchgefallene Ergebnis, das das Ergebnis einer Kandidatin bzw. eines Kandidaten ändern könnte, zur Expertenprüfung –, nachdem es zunächst Kandidatinnen und Kandidaten überspringt, deren Bestehen/Durchfallen nicht vom Writing-Abschnitt abhängen kann –, wodurch die einer vollständigen menschlichen Benotung bedürfenden Antworten um mindestens 50% sinken. Ein zweites Design aus dem Jahr 2026 zieht die Grenze von der anderen Seite: In einer Multi-Agent-KI-Plattform für standardisierte Patienten ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]) ist menschliche Aufsicht dem vorbehalten, was KI als unfähig zu entscheiden beurteilt wird, wobei Fakultät und menschliche standardisierte Patienten kontextuelle Interpretation, Nachhilfe und Bereitschaftsurteile liefern, und es dem System explizit nicht erlaubt ist, [[medical-education|klinische]] Kompetenz autonom zu bestimmen.
- **Forschungsinstrument: Menschen validieren Labels statt Scores.** Lernwissenschaftliche und informatische Kodierende beurteilten LLM-generierte Verhaltenssegmente auf einem synchronisierten Zeitstrahl mit κ = 0,703, und ihre Dissense wurden zur Fehleranalyse der Studie selbst ([[fonteles-embodied-learning-human-in-the-loop-multimodal-2026|Fonteles et al., 2026]]).
- **Das Modell fasst zusammen, die Forschenden labeln.** Eine kollaborative-Modellierungs-Studie nutzte GPT-3.5-Turbo, um für jedes von 394 Diskurssegmenten eine auf den Aufgabenkontext zugeschnittene Zusammenfassung zu schreiben, ließ jede Zusammenfassung von Forschenden prüfen und koder sie bis κ ≥ 0,7, und trainierte die Detektoren auf jenen Labels, sodass das Modell die Urteile selbst nie fällte. Die Aufsicht verlagerte sich dann nach außen: Vier erfahrene Lehrkräfte prüften ein gelabeltes Segment, drei erkannten die Verhaltensweisen, und eine argumentierte, dass zwei Labels auf einem Segment verschleierten, was die Studierenden taten – ein Gebrauchstauglichkeits-Einwand, den die Autoren aufzeichneten statt lösten ([[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang et al., 2026]]).
- **HITL als Architektur für eine ganze Disziplin, nicht einen Arbeitsablauf.** [[zhai-science-literacy-generative-ai-coherence-2026|Zhai et al. (2026)]] spezifizieren vier verzahnte Schichten – Dateninfrastruktur, Modellentwicklung, pädagogische Schnittstelle und menschliche Governance –, zusammengehalten durch drei Prinzipien: menschliche Aufsicht und Handlungsfähigkeit, co-adaptive Intelligenz und kontextuelle Responsivität.

## Synthese

Human-in-the-Loop-Design ist nicht bloß eine Sicherheitsmaßnahme – er ist eine **Ressourcenzuteilungsstrategie**. Die Grenzfrage ist nicht *ob* Menschen einbezogen werden, sondern *wo* in der Pipeline ihr Urteil den höchsten Grenznutzen hat. Die wirksamsten HITL-Systeme konzentrieren knappe menschliche Expertise dort, wo automatisierte Systeme am schwächsten sind (Distraktordesign, erklärendes Feedback, Schlichtung von Grenzfällen, ethisches Urteil) und automatisieren den Rest – und bewahren dabei Qualität, Sicherheit und Vertrauen, während sie die Produktion skalieren.
- **Menschliche Aufsicht besteht fort in KI-assistierter Arbeit.** [[scaffolding-systematic-reviews-2026|Forschung zu systematischen Reviews]] fand, dass KI-Automatisierungswerkzeuge prozedurale Lasten senkten (z. B. Screening), interpretative Entscheidungen aber weiterhin substanzieller menschlicher Aufsicht bedurften; [[kim-ai-andragogy-2026|Andragogie-Forschung]] macht Human-in-the-loop (geteilte mentale Modelle, Ko-Kreation) zu einem zentralen KI-Designprinzip.
- **Human-in-the-loop auf institutionellem Maßstab.** Qin (2026) beschreibt, wie die Lingnan-Universität ein Human-in-the-Loop-Bildungsmodell entwickelte, das ethisches Nachdenken, kritisches Urteil und soziale Verantwortung in den Vordergrund stellt und gleichzeitig den Zugang zu [[generative-ai|GenAI]] demokratisiert. Das Modell positioniert Menschen als den Ort von Urteil und Werten, selbst wenn KI über das [[curriculum-design|Curriculum]] hinweg eingebettet wird – eine konkrete [[governance|institutionelle]] Instanziierung von Human-in-the-Loop-Prinzipien in der [[higher-ed|Hochschulbildung]].
- **Lernende als Human-in-the-Loop ihres eigenen Tutorings.** [[ko-hughes-vsd-student-centered-its-2026|Value Sensitive Design]] mit Community-College-Studierenden produzierte eine vollständige Familie Lernenden zugewandter HITL-Merkmale für ein ITS (Kontrolle über Neubewertung und Review, personalisierte Ziele/Tempo, Lesezeichen für Review, Bestätigen von Vertrauen über Meisterschaft und eine Steuerung des Beteiligungsniveaus der KI-Assistenz), was die bzw. den Studierende als aktive Steuernden der Tutoringschleife positioniert statt als passive Konsumierende adaptiver Entscheidungen. Die Studie fand auch Lehrende gespalten darüber, ob solche Lernendenkontrolle die Integrität des systemgesteuerten Lernpfads untergraben könnte – ein Beispiel für die breitere Ressourcenzuteilungsfrage, wo menschliches Urteil (Lernende gegenüber Lehrende) am meisten Wert hinzufügt.
- **Eskalation von KI zu Experte ist ein Human-in-the-Loop-Zug.** Das SCAN-Rahmenwerk weist Aufgaben vier generative-KI-Modi nach Lernendendistanz zu und liest passives [[student-engagement|Engagement]] innerhalb einer korrekt zugewiesenen KI-Aufgabe als Fehlqualifizierungssignal, die bzw. den Lernende von KI zu Expertenhilfe zu verschieben, mit einem Menschen als epistemischem Prüfer ([[ai-teammate-task-distribution-medical-training-2026|Tsim et al. (2026)]]).
- **Aufsicht über Ratschläge zur KI-Übernahme.** Weil [[conversational-ai|konversationelle KI]]-Systeme, die von skeptischen Nutzenden konsultiert werden, dafür prädisponiert sein können, die Übernahme zu befördern, sind menschliche Aufsicht und unabhängige Evaluation unverzichtbar. Ein Audit, das zeigt, dass die meisten Grenzmodellmodelle skeptisches [[k-12]]-Personal zu [[student-engagement|Engagement]] umlenken, unterstreicht das Erfordernis transparenter, prüfbarer KI-Ratschläge statt unkritischen Vertrauens.

## Verbreitete Fehlvorstellungen

- **„Die Empfehlung des Systems zu zeigen hilft dem Menschen, es zu beaufsichtigen."** **Die bevorzugte Antwort eines Systems zurückzuhalten ist schützend statt korrigierend**: In einer Multi-Agenten-Debatte, die **nie eine empfohlene Position offenlegte**, **sank** das schädliche Wechseln zur Antwort der KI. Offenlegung lud zu Devotion ein; Zurückhalten stützte das Urteil.
- **„Human-in-the-Loop muss einen Menschen und eine Entscheidung bedeuten."** Ein Multi-Agenten-Klassenzimmer aus [[teacher-role|Lehrenden]]-Agent, Tutor-Assistenz-Agent und Archetypen von Mitschülerinnen und Mitschülern wurde an der Tsinghua-Universität mit **mehr als 500 Studierenden und mehr als 100.000 Lernaufzeichnungen** eingesetzt. Aufsicht skaliert durch die Anordnung, nicht durch die Vermehrung von Aufsichtspersonen.
- **„KI-Ausgaben zu prüfen ist intuitiv."** In einer **Within-Subject-Studie mit 23 Bildungspersonen** **verbesserte** ein reviewbasierter Ansatz **jedes CTML-Prinzip (mittlere Bewertung 3,07 auf 3,86, p < .01)**, wobei die Bildungspersonen die Produktionseffizienz günstig bewerteten. Review ist eine Fähigkeit, die sich unter einer strukturierten Methode verbesserte.

## Verbundene Konzepte
- [[pedagogical-patterns]] — Wo menschliches Review in erprobten Sequenzen sitzt, und was nie isoliert getestet wurde
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — menschliches Urteil in einem automatisierten Unterstützungsfluss

## Verbundene Artikel
- [[zhai-science-literacy-generative-ai-coherence-2026]] — Vierschichtige HITL-Architektur für generative KI in der naturwissenschaftlichen Bildung (Zhai et al. 2026)
- [[fonteles-embodied-learning-human-in-the-loop-multimodal-2026]] — Kodierende, die LLM-Verhaltenssegmente als Forschungsinstrument validieren (Fonteles et al. 2026)
- [[lee-learner-question-types-ai-education-2026]] — Von Experten labelte Fragensklassifikation: Menschen steuern Kodierung, Augmentierung und Fehleranalyse (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — Menschliche Aufsicht und Governance als dritte Schicht des agentischen GAI-Kursdesigns (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Wertsensibles Design eines studierendenzentrierten ITS (Lernende in der Tutoringschleife)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — KI-gestütztes HITL-Scoring in einem groß angelegten nationalen Schreib-Assessment (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN-Rahmenwerk: KI-Aufgabenverteilung in der medizinischen Ausbildung neu bedacht (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs benoten Essays nicht wie Menschen (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — KI-Anwendungen zur Unterstützung der Andragogik (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Systematische Reviews mit Mentoring und KI scaffolden (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — KI-gestützte, von Lehrenden beaufsichtigte Benotung und Rückmeldung
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Kann KI angemessene Unterstützung für diverse Studierendenprofile liefern? Eine Evaluation im großen Maßstab
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluierung eines scaffolding-orientierten Multi-Agent-LLM-Systems für das Training klinischer Interviews
- [[tripartite-feedback-framework-ai-assessment-2026]] — Tripartites Rahmenwerk: Feedback nach epistemischem Status sortieren und die fünf Grenzprinzipien für KI-Beteiligung (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — KI-unterstützte Social-Story-Intervention für Sonderpädagogik: Das Design von AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Behauptungsbasierte Schemata für auditierbares Kodieren pädagogischer Dialoge
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — Von der Stimmungsklassifikation zum umsetzbaren und verantwortungsvollen Feedback: Ein Scoping-Review und eine Evidence Map zu NLP in der studentischen Lehrveranstaltungsevaluation, 2015–2026

- [[llm-grading-assistants-public-health-2026]] — Identische LLM-Benotungsdurchläufe an verschiedenen Tagen reproduzieren sich nur bei Krippendorffs Alpha 0,625
- [[when-students-prefer-ai-scoring-feedback-2026]] — Studierende bevorzugen menschliche Benotung für folgenreiche Arbeit und KI als Assistenz, nicht als Ersatz
- [[student-query-demand-hybrid-ai-support-2026]] — Was Studierende tatsächlich fragen: Anfragestruktur und Automatisierungspotenzial in einem hybriden Unterstützungssystem
- [[in-the-loop-educational-ai-learning-sciences-2026]] — „In-The-Loop"-Ansätze in der Bildungs-KI neu bedacht: Eine lernwissenschaftliche Perspektive
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Das Zurückhalten der präferierten Antwort des Systems senkte das Nachgeben vor falschen KI-Ratschlägen – schützend statt korrigierend
