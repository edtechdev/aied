---
connected_resources: [liascript]
title: Informatikbildung
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
foundations: [ai-literacy, computational-thinking]
technology: [generative-ai, llm, prompt-engineering]
assessment: [automated-assessment]
discipline: [stem education, cs education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/cs-education
source_updated: "2026-10-02T12:40:11-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Informatikbildung** — die [[science-education|naturwissenschaftliche]] Informatikbildung ist das am besten erforschte STEM-Teilgebiet der Wissensbasis und profitiert von einer natürlichen Ausrichtung zwischen KI-Werkzeugen und Programmieraufgaben. Codegenerierung, Debugging-Unterstützung und automatisierte Code-Reviews sind ihre primären KI-Anwendungen. Weil Studierende lernen, genau die Werkzeuge zu bauen, die sie nutzen, steht die Informatikbildung im Zentrum der Debatten über KI-Kompetenz, Curriculum-Neugestaltung, agentische Softwaretechnik und die Grenze zwischen echtem Lernen und [[cognitive-offloading|Überabhängigkeit]].

## Fragen zum Nachdenken

- Wenn KI heute Code schreiben kann, der echte Programmierprüfungen besteht, was sollten Studierende dann noch von Hand lernen — und was sollte das Curriculum nicht mehr lehren?
- [[research-methods-aied|Forschung]] fand, dass höheres Vertrauen in einen KI-Coding-Assistenten die SCHLECHTERE Fähigkeit vorhersagte, korrekte von irreführenden Vorschlägen zu unterscheiden. Wie unterscheidet sich Vertrauen von angemessenem Verlass, und wie würden Sie Letzteres lehren?
- In der Studierenden-KI-Ko-Programmierung verließen sich fast 80% der Interaktionen auf nicht-lernende Strategien wie das Auslagern von Antworten, und nur etwa 1 von 9 zeigte tiefes epistemisches [[student-engagement|Engagement]]. Warum passiert echtes Lernen standardmäßig selten, wenn KI verfügbar ist?
- Ein [[learning-by-teaching|Lernen-durch-Lehren]]-Agent, der zu kompetent war, untergrub die Debugging-Praxis der Studierenden. Würden Sie einen KI-Tutor bewusst fehlbar machen — und wenn ja, wie?
- Während KI die Implementierung automatisiert, verschieben sich Curricula vom Codeschreiben zum Verifizieren und Steuern KI-erzeugter Artefakte. Welche neuen Kompetenzen verlangt das, und was könnte in der Verschiebung verloren gehen?
- Studierende bauen die Werkzeuge, die sie nutzen. Wie verändert es, sowohl Bauer als auch Nutzer von KI zu sein, was sie über deren Grenzen — und deren Ethik — lernen sollten?

## Einführung

### KI in der Informatikbildung

- **Codegenerierung und -vervollständigung:** [[code-review-genai-cs1|CS1-Code-Review]], [[dura-llm-cs2|DURA für CS2]] und [[prompt-problems-nl-programming-mistakes|NL-Programmierfehler]] untersuchen, wie Studierende KI zur Codegenerierung nutzen und was sie daraus lernen.
- **Konversationelle Agenten für Anfängerinnen und Anfänger ([[meta-analysis-systematic-review|Scoping Review]]):** [[conversational-agents-novice-programmers-scoping-2025|Barzanji & Loitsch (2025)]] kartieren 23 Studien (2019–Juni 2024) zu [[conversational-ai|konversationellen Agenten]] für Programmieranfängerinnen und -anfänger und dokumentieren eine Verschiebung von regelbasierten Chatbots hin zu [[llm]]- und [[rag]]-basierten Agenten (wobei [[rag|retrieval-augmented generation]] [[hallucination-risk|Halluzination]] reduziert) und personalisierter Tutoringsunterstützung (z. B. InfoBot, ProbSol-Bot, Lint Bot, Profe Alex). Bemerkenswert ist, dass nur 4 von 23 Studien ihr Design in [[learning-theories|Lerntheorie]] gründen und 17 von 23 Prototypen nur englischsprachig sind, obwohl die meiste Forschung aus nicht-englischsprachigen Ländern stammt — ein Hinweis auf schwache [[pedagogy|pädagogische]] Fundierung und eine Inklusivitätslücke für zukünftiges CA-Design in der einführenden Programmierung.
- **Debugging-Unterstützung:** [[debugtracker-classroom-debugging|Debugging-Werkzeuge]], [[chat-debugging-human-ai-collaboration-circuits|Mensch-KI-Debugging-Kollaboration]] und [[golrang-propact-pair-programming-2026|dyadisches Pair-Programming-Modellierung]] nutzen KI zur Fehleridentifikation und -behebung.
- **Automatisiertes Assessment:** [[automated-grading-linux-bash-examinations-large-language-models|Linux-Bash-Benotung]], [[llm-automated-grading-programming-comparison-2026|ein großangelegter Vergleich von 18 Benotungsmodellen]] und [[llm-intervention-design-cs-review|ein Review zu LLM-Interventionsdesign]] evaluieren automatisiertes Code-Assessment. Die Sicherheit dieses Arbeitsablaufs ist eine eigene Frage: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] red-teamte eine routinemäßige KI-Benotungsaufgabe und fand, dass Instruktionen, die in einer eingereichten Datei versteckt waren, die Note eines durchfallenden Aufsatzes ohne sichtbare Warnung hoben, in 9 von 9 Iterationen für eine Strategie und 17 von 18 für eine andere — ein Beleg dafür, dass Prüfendenrobustheit auf der [[assessment-validity]]-Checkliste neben Genauigkeit gehört.
- **Ein einteiliger Benotungsprompt kann ein LLM kollabieren lassen, und Feinabstimmung repariert es.** [[llm-graders-computer-science-exams-2026|Habibullah et al. (2026)]] benoteten eine praktische Computer-Vision-Klausur (570 doppelt benotete Studierende) unter 171 Konfigurationen und eine Klausur zum maschinellen Lernen (1.038 Studierende) unter 162 weiteren: ein kurzes „Strict-Grader“-Präambel trieb 14 von 17 offengewichtigen Modellen aus dem benoteten Band (MAE ≥ 8), wobei drei ganz mit dem Benoten aufhörten, und der Schaden wurde auf zwei Sätze zur Kreditverweigerungspolitik zurückgeführt, deren Richtung sich nicht auf die zweite Klausur übertrug (sieben Modelle verbesserten sich). Ein LoRA-Adapter über etwa 3.900 gepoolte benotete Beispiele brachte fünf kleine offene Modelle auf Parität mit einem menschlichen Prüfenden.
- **KI-generierte Lernmedien:** [[ai-generated-traces-novice-programmers|Generierte animierte Traces]] zeigen, dass KI-generierte Visualisierungen unmittelbares Lernen fördern können, aber personalisiert werden müssen — Studierende auf mittlerem Niveau erlebten einen Leistungseinbruch, konsistent mit dem Expertise-Reversal-Effekt.
- **GenAI-Analogie-Kritik als instruktionaler Aktivposten:** [[student-reception-genai-analogies-computing-2026|Bernstein & Sibia (2026)]] gründen die Rezeption von GenAI-Analogien in CS2: zehn Studierende, die CS2 bereits abgeschlossen hatten, prüften GenAI-generierte Analogien für verknüpfte Listen und Rekursion und wiesen Zuordnungen zurück, die die strukturelle Korrespondenz verfehlten — eine Insel-Route-Analogie, die auf eine zirkuläre statt auf eine einfach verknüpfte Liste abgebildet wurde, oder ein Badminton-Spielwechsel, das für Rekursion angeboten wurde, obwohl es keinen garantiert schrumpfenden Input hat, wobei eine Studentin stattdessen Golf vorschlug. Die Arbeit argumentiert, dass Analogiekritik selbst eine Prüfung des Konzeptverstehens ist, was fehlerhafte KI-Analogien zu einem nutzbaren instruktionalen Aktivposten macht statt zu einer Gefahr, die herauszufiltern ist, und empfiehlt, sie als Objekte zur Inspektion und Reparatur zuzuweisen.
- **[[misconceptions|Missverständnis]]-Modellierung:** [[student-misconceptions-conditionals-loops-taxonomy|eine Taxonomie von Missverständnissen zu Bedingungen und Schleifen]] gibt automatisierten Systemen ein präzises Vokabular zur Diagnose von Anfängerfehlern.
- **Modellgenerierte strategische Missverständnisse:** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] bauten SocraticTrap-CS um 35 Konzepte aus dem ACM/IEEE-CS2023-Curriculum — Algorithmen, Programmiersprachen, Datenbanken, Netzwerke und Betriebssysteme — und baten sieben offengewichtige Modelle um eine flüssige, autoritative Erklärung, die auf einem subtilen Fehler ruht. Sechs der sieben produzierten für 91% oder mehr der angefragten Konzepte ein expertenbestätigtes strategisches Missverständnis (221 von 241 Segmenten, 91,7%), ohne signifikante Unterschiede zwischen den CS-Domänen; konzeptionelle Fehler dominierten (66,5% konzeptionell vs. 33,5% faktisch, und keine rein logischen), und sowohl Überzeugungskraft als auch Fehlertyp variierten nach Domäne. Die Autoren empfehlen daher domänensensible Gegenmaßnahmen — schlussfolgerungsfokussierte Prüfungen in programmierlastigen Kursen, Querreferenzierung gegen Protokollspezifikationen im Netzwerkbereich —, und die Evaluation von [[automated-question-generation]] und KI-verfassten Erklärungen an pädagogischer [[trust|Vertrauenswürdigkeit]] statt allein an Korrektheit.
- **[[authentic-assessment|Authentisches Assessment]]-Leistung:** [[genai-oop-programming-assessments-2026|Lepp & Kaimre (2026)]] zeigen, dass [[generative-ai|GenAI]]-Systeme des Jahres 2026 die durchschnittliche Studierendenkohorte bei authentischen einführenden OOP-[[assessment|Assessments]] übertreffen und bei längeren Programmieraufgaben häufig volle Punktzahl erreichen, aber weiterhin mit Interfaces, abstrakten Klassen, Vererbung und bildbasierten Fragen kämpfen — wiederkehrende Fehlermuster, die Lehrende beim Assessmentdesign nutzen können. Eine CS1-Längsschnittstudie verstärkt die Fähigkeitkeitsseite dieses Befunds: [[student-llm-code-detection-cs1-2026|Ye et al. (2026)]] maßen Grenzmodelle bei 98,93-99,99% an den Laboren gegenüber 76,37-88,03% bei Studierendeneinreichungen.
- **Prädiktive Modellierung für Risikounterstützung:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] zeigen, dass intrinsisch interpretierbare Entscheidungsbäume, trainiert auf Merkmalen von Inhaltsinteraktionslogs, modulweisen Fortschritt in großangelegten Online-Programmierkursen akkurat vorhersagen (85–91% Genauigkeit über vier K-12-Kurse) und „No-submission“-Abbruchergebnisse markieren, was Lehrenden ein Fenster von 7–8 Tagen gibt, um [[teacher-role|einzugreifen]] bei kämpfenden und desengagierten [[learners|Lernenden]] vor Modulterminen — das die obige automatisierte Benotungs- und Abbruchprädiktionsarbeit ergänzt.
- **Retrieval-augmentierte Unterstützung für theoretische Informatik passt nur zu asynchronem Studium.** AlgoRAG beantwortete alle 179 von Lehrenden verfassten Klausurfragen innerhalb eines 240-Sekunden-Timeouts bei durchschnittlich 38,0 Sekunden je Frage, und sein BLEU-4 von 0,0000 über die Menge ist eine Eigenschaft des n-gram-Matchings an mathematischen Beweisen statt ein Systemversagen ([[algorag-rag-theoretical-cs-education-2026|Adhikari (2026)]]).

- **Übernahme folgt der Aufgabe, nicht dem Teilgebiet.** Über sieben Aufgaben und 211 Studierende hinweg maßen [[student-llm-use-cs-subfields-2026|Nizamani et al. (2026)]] LLM-Nutzung von 89,6% in Algorithmen bis 15,2% in Softwaretechnik und schrieben die Streuung Aufgabenkomplexität, Verifizierbarkeit und Gerüstbau zu statt dem Fach selbst.
- **Feedback kann so gestuft werden, dass die Diagnose verborgen bleibt.** [[educator-guided-llm-pedagogical-agent-2026|Riazi & Rooshenas (2026)]] trennen eine artefaktgegründete Diagnose des Datenbankschemas einer oder eines Studierenden vom Arbeitsablauf, der sie freigibt, wobei Lehrende die Stufen verfassen; über 383 Episoden hinweg erreichten 71,1% des Feedbacks sein Zielniveau.

### Programmierpädagogik: von Blöcken zu verkörpertem, spielbasiertem Lernen

Programmierbildung erstreckt sich von einführenden blockbasierten Programmieransätzen bis zu fortgeschrittener Softwareentwicklung und verankert abstrakten Code zunehmend in konkreten, beobachtbaren Ergebnissen.

- **Blockbasierte visuelle Programmierung:** Umgebungen wie Scratch und Blockly lassen Anfängerinnen und Anfänger grafische Blöcke zusammenstecken statt Text zu tippen, was Syntaxfehler eliminiert und Programmstruktur sichtbar macht — besonders wertvoll für jüngere Lernende und zur Steuerung [[educational-robotics|pädagogischer Roboter]]. Im KI-Zeitalter werden sie zunehmend mit konversationellen KI-Agenten kombiniert (z. B. [[microbit-robotics-machine-learning-teacher-training-2026|Micro:bit + MakeCode in der Lehrkräftebildung]], [[cstutorbench-slm-tutors|Tutoren auf Basis kleiner Sprachmodelle]]).
- **[[embodied-learning|Verkörperte]] Blockprogrammierung:** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] kombiniert blockbasierte Programmierung mit einem konversationellen KI-Lehragenten und verkörperter Roboterausführung und schafft eine iterative Autoren-Laufen-Beobachten-Überarbeiten-Schleife, die die [[agency|Handlungsfähigkeit]] der Lernenden bewahrt.
- **Robotiksteuerung in natürlicher Sprache:** [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] lässt Anfängerinnen und Anfänger simulierte Roboter durch Instruktionen in natürlicher Sprache steuern, was die Hürde zur Roboterprogrammierung senkt, ohne Low-Level-Code-Expertise zu verlangen.
- **Robotik und Computational Thinking:** [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] verknüpft Computational Thinking mit pädagogischer Robotik in sekundaren STEAM-Curricula, und [[microbit-robotics-machine-learning-teacher-training-2026|Lehrkräftebildungsforschung]] argumentiert, dass Robotik- und ML-Aktivitäten in der [[teacher-education|Lehrkräftebildung]] eingebettet werden sollten.
- **Spielbasiertes und gamifiziertes Lernen:** [[game-based-gamified-robotics-education-review-2026|Ein systematischer Review]] vergleicht spielbasiertes Lernen (geeignet für informelle Settings) und Gamifizierung (geeignet für formale Klassenzimmer) in der Robotikbildung, die einführende Programmierung und modulare Kits betont.
- **Projektbasierte Robotik:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] lehrt Roboterprogrammierung durch ein agiles, semesterspannendes [[project-based-learning|Projekt]], adressiert die Theorie-Praxis-Lücke in der Hochschulbildung.
- **LLM-Auswirkungen auf [[learning-gains|Lernergebnisse]]:** [[jost-llm-programming-education-learning-outcomes|Jošt et al. (2024)]] und [[genai-meta-analysis-programming-learning|eine Metaanalyse zu GenAI und Programmierlernen]] untersuchen, ob KI-unterstützte Werkzeuge Programmierleistung fördern oder untergraben.

### Curriculum-Transformation im KI-Zeitalter

Die Frage „was sollten Studierende noch von Hand lernen?“ formt heute Computing-Programme um.

- **Von der Implementierung zur Verifikation:** [[reshaping-cs-education-genai|Reshaping Undergraduate CS Education]] argumentiert, dass Curricula, während GenAI Implementierungsebenen-Programmierung, Debugging und Testen automatisiert, sich hin zum *Verstehen und Verifizieren KI-erzeugter Artefakte* verschieben müssen, wobei Systemdesign, Abstraktion und [[critical-thinking|kritische Evaluation]] bewahrt und Details der niedrigen Implementierungsebene abgewertet werden. Das stimmt überein mit [[ai-literacy]]-Rahmenwerken, die Evaluation über Generierung stellen.
- **Agentische Softwaretechnik als Disziplin:** [[ase-26-agentic-software-engineering-curriculum|ASE-26]] formalisiert das Steuern von Agenten statt das Schreiben von Code — Auditierbarkeit, Context Engineering, Verifikation, Multi-Agenten-Workflows und AgentOps lehrend —, und positioniert [[agentic-ai|agentische KI]]-Kompetenz als strukturiertes, gerüstetes Curriculum statt Syntaxmeisterschaft.

- **Von der Produktion zum Urteil: Verstehenschuld und AASEE.** [[judgment-centred-software-engineering-education-2026|Mahmoud (2026)]] argumentiert, das Feld sollte von einem produktionszentrierten zu einem urteilszentrierten Modell wechseln, und erweitert Verstehenschuld — die aufgeschobenen Lern- und Wartungskosten, wenn KI-unterstützte Produktion die Fähigkeit der lernenden Person überholt, Software zu erklären, zu testen, zu modifizieren und zu rechtfertigen — zu einer [[assessment]]-Linse, gegründet in 621 reflektiven Tagebüchern von 207 Studierenden. Der Review verfeinert das AASEE-Rahmenwerk zu fünf nichtlinearen Integrationsniveaus, gekreuzt von vier Evidenzverpflichtungen — erklären, verifizieren, modifizieren und Rechenschaft ablegen —, und berichtet eine bedingte Evidenzbasis: eine STEM-[[meta-analysis-systematic-review|Metaanalyse]] mit extremer Heterogenität (I² = 96,32%) verliert ihren gepoolten Nutzen, sobald Publikationsbias korrigiert wird, und Synthesen von 76, 72 und 64 Studien zeigen kurzfristige Effizienzgewinne, die nicht auf unassistierte Leistung [[transfer-of-learning|transferieren]].
- **Neue Pädagogiken und Assessmentmodelle:** [[test-driven-ai-assisted-learning|Test-Driven AI-Assisted Learning]] ersetzt Vorlesungen durch [[self-directed-learning|selbstgesteuertes]] KI-unterstütztes Studium, eingegrenzt durch wöchentliche Closed-Book-Tests, wobei individuelle Rechenschaftspflicht bewahrt wird, während KI-Agenten Materialproduktion und Benotung unter [[human-in-the-loop-ai|menschlicher Aufsicht]] skalieren.
- **Die Mechanik des Modells offline lehren.** Eine Praktikerressourcensuite lehrt die vollständige LLM-Trainings→Generierungs-Pipeline unplugged — händisch ausgezählte n-gram-Raster und würfelbasiertes Sampling, ohne Programmierung oder Mathematik vorauszusetzen —, und berichtet Auslieferung an etwa 400 Teilnehmende, wobei Engagement erst auf der Generierungsstufe begann ([[llms-unplugged-teaching-resources-2026|Swift (2026)]]).
- **Was [[vibe-coding]]-Erfolg vorhersagt — und was weiter zu lehren ist:** [[vibe-coding-writing-cs-achievement-2026|Eine vorregistrierte CHI-2026-Studie (N=100)]] zu reinem „No-Code“-Vibe-Coding fand, dass sowohl Informatikleistung (r = .39) als auch schriftliche Kommunikationskompetenz (r = .29) Leistung unabhängig vorhersagten, wobei Informatikleistung signifikant blieb, selbst nach Kontrolle domänenallgemeiner kognitiver Fähigkeit, und etwa die doppelte eindeutige Varianz der Schreibfähigkeit beitrug. Weil die Umgebung generierten Code verbarg, konnte Informatikwissen nur indirekt helfen (Problemzerlegung, algorithmisches Denken) — was die CS-Schätzung zu einer *unteren Grenze* für KI-unterstützte Arbeitsabläufe macht, die auch Bearbeitung erlauben. Die Autoren argumentieren, Curricula sollten schriftliche Kommunikation neben Informatikgrundlagen gewichten, statt Vibe Coding als obsolet gewordene Syntaxmeisterschaft zu behandeln.

### KI-Kompetenz, Handlungsfähigkeit und das Risiko der Überabhängigkeit

Weil Programmierung der Ort ist, an dem KI-Unterstützung am mächtigsten ist, sind es auch die Versagensmodi.

- **Vertrauen ≠ angemessener Verlass:** [[trust-reliance-ai-education-2026|Trust and reliance on AI (Pitts et al.)]] finden, dass höheres Vertrauen in einen KI-Assistenten *schlechtere* Unterscheidung zwischen korrekten und irreführenden Vorschlägen beim Python-[[problem-solving|Problemlösen]] vorhersagte — moderiert durch [[ai-literacy|KI-Kompetenz]] und Kognitionsbedarf. Kalibrierung, nicht Vertrauen, ist das Ziel.
- **Epistemische KI-Kompetenz:** [[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]] zeigt, dass in der Studierenden-KI-Ko-Programmierung 78,8% der Interaktionen auf nicht-meisterschaftsorientierte Ziele und unzuverlässige Strategien verließen (Auslagern, Verifikationssuche), wobei nur 11,1% hohes epistemisches Engagement zeigten — echtes Lernen entsteht selten ohne bewusste Designunterstützung.

- **KI-Anfragen sind eng und generationsgemustert.** Bei der Klassifikation von 830 CS2-Prompts gegen die Graesser-Taxonomie fanden [[student-ai-inquiry-types-cs2-2026|Amoozadeh und Alipour (2026)]], dass Assertions-, Verifikations- und instrumentale Prompts beide Sitzungen dominierten, und dass Studierende der ersten Generation weniger Fragen stellten und auf Verifikation verließen, während Peers der weiterführenden Generation die KI als aktiven Problemlösungspartner nutzten.
- **Strukturelle Interventionen gegen Copy-Paste-Überabhängigkeit:** [[soft-barriers-copying-ai-programming-2026|Weiche Barrieren für Kopieren bei KI-unterstützter Programmierung]] evaluieren leichtgewichtige Designinterventionen (z. B. Mechanismen, die blindes Copy-Pasting von KI-Output entmutigen) und finden, dass sie Überabhängigkeit reduzieren können, ohne KI-Unterstützung zu blockieren — ein Beleg dafür, dass das [[cognitive-offloading|Überabhängigkeitsrisiko]] in der Informatikbildung auf instruktionale Designfixes anspricht, nicht nur auf Lernendenedukation oder Verbote.
- **Lehrbare Agenten und produktive Übung:** [[chatgpt-teachable-agent-programming-lbt-2024|Lernen-durch-Lehren mit ChatGPT]] verbesserte Wissenszuwächse und Codequalität, untergrub aber Fehlerkorrekturpraxis, weil der Agent zu kompetent ist — eine Designlektion: Agenten *bewusst fehlbar* machen, damit Debugging bewahrt bleibt.
- **Unterstützungsgovernance:** [[llm-programming-support-governance-cs-education|ein Scoping Review von 90 Systemen]] führt das **PEA-Rahmenwerk** (Policy, Enforcement, Authority) ein, um LLM-Unterstützung zu begrenzen und zu kontrollieren — ein vergleichendes Vokabular für die Gestaltung von [[scaffolding|Gerüstbau]], der Überabhängigkeit begrenzt.

- **Governance-Passung, nicht Striktheit.** [[instructional-governance-design-computing-education-2026|Dickey (2026)]] schlägt ein sechsdimensionales Governance-Profil vor — pädagogische Fundierung, instruktionale KI-Autorität, menschliche Rechenschaftspflicht, Handlungsfähigkeit der Lernenden, Kontextgrenzen und Evaluationssichtbarkeit —, und zeigt über sieben interne Werkzeuge und vier publizierte Programmiersysteme hinweg, dass dasselbe Modell Autorität und Rechenschaftspflicht sehr unterschiedlich verteilen kann; was verantwortungsvolle Skalierung vorhersagt, ist Governance-*Passung* zur instruktionalen Funktion, nicht wie strikt das Werkzeug ist.
- **Verhaltenskontext für adaptives KI-Tutoring:** [[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] präsentieren **TutorTrace**, einen Datensatz und eine Pipeline, die den Verhaltenskontext von Lernenden in Echtzeit aus IDE-Telemetrie in KI-unterstützten Python-Kursen (N=480) berechenbar machen. Sie leiten eine Taxonomie der Aktivität vor, zwischen und über KI-Anfragen hinweg ab und können klassifizieren, ob eine anstehende Anfrage gelenkte oder abhängige [[help-seeking|Hilfesuche]] widerspiegelt (AUROC=.717), und unmittelbar bevorstehende Anfragen vorhersagen (AUROC=.726); verhaltensbewusste Prompts reduzierten Intervalle ohne unabhängige Arbeit von 50,0% auf 20,7% in einer vorläufigen Evaluation. Das zeigt, wie Verhaltenstelemetrie [[intelligent-tutoring|KI-Programmier tutoren]] an die tatsächliche Anstrengung der Lernenden adaptiv machen kann, nicht nur an ihre expliziten Anfragen.
- **Die Dualität des Bauens dessen, was man nutzt:** Die einzigartige Position von Informatikstudierenden schafft sowohl [[metacognition|metakognitives]] Bewusstsein der Grenzen von KI als auch echtes Risiko [[cognitive-offloading|Überabhängigkeit]] von KI-erzeugtem Code. [[code-review-genai-cs1|Code-Review-Interviews]] und [[critical-engagement-code-completion|Studien zu kritischem Engagement]] adressieren diese Spannung direkt.

- **Agentisches Coding und Verstehen in Team-PBL:** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka et al. (2026)]] führten Spec-Driven Development mit [[agentic-ai|KI-Agenten]] in einen undergraduate Softwaretechnik-Projektkurs ein und fanden, dass der Implementierungsdurchsatz (hinzugefügte LOC) über 2022-2025 stieg, während starke KI-Nutzung mit Codeverstehenseinbrüchen zusammenfiel, die sich nur nach individuellen Prüfungen durch die Lehrperson erholten - direkter Beleg dafür, dass Durchsatzgewinne kein Verstehen garantieren, und dass [[cognitive-offloading|Überabhängigkeit]] beim KI-unterstützten Codieren auf instruktionale Überwachung anspricht.

### Gerechtigkeit, Kultur und wer ins Computing kommt

- **Teilhabe verbreitern:** [[suacode-african-students-motivations|SuaCode]] dokumentiert Motivationen für smartphonebasiertes Codieren unter afrikanischen Studierenden (weniger als 1% der Sekundarschulabgängerinnen und -abgänger haben fundamentale Codefähigkeiten) und informiert zugängliche KI-unterstützte MOOCs für [[equity-in-ai-education|ressourcenarme Kontexte]].
- **Neurodivergenz und Kollaboration:** [[neurodivergent-computing-students|Neurodivergente Informatikstudierende]] berichten Unbehagen mit mehrdeutigen Kollaborationsstrukturen; strukturierte Aufgaben, kleinere konstante Teams und explizite Rollen verbessern [[accessibility|Barrierefreiheit]] — Designlektionen für die KI-Werkzeuge, die in Informatikklassenzimmer einziehen.
- **Kultur prägt wahrgenommene Ethik:** [[cross-cultural-student-perceptions-genai-computing|Kanadische vs. südkoreanische Informatikstudierende]] beurteilten identische KI-unterstützte Codingpraktiken unterschiedlich, trotz funktional identischer Richtlinien — Politikharmonisierung erzeugt keine Wahrnehmungsharmonisierung, ein [[academic-integrity|akademisches Integritäts-]] und [[equity-in-ai-education|Gerechtigkeitsanliegen]].
- **Kollaborations[[explainable-ai|transparenz]]:** [[student-perception-ai-use-collaboration|Graf et al.]] finden, dass fehlabgestimmte Überzeugungen der Partnerinnen und Partner über die KI-Nutzung der jeweils anderen niedrigere Projektnoten vorhersagen, besonders bei leistungsschwächeren Studierenden — Transparenzmechanismen (Offenlegungen, geteilte Logs) könnten in kollaborativer Programmierung nötig sein.

### Ethikbildung und der Arbeitsmarkt

- **Ethik-zu-Verhalten-Lücke:** [[cost-of-ethics-crisis-cs-ethics-education|die „Cost-of-Ethics Crisis“]] zeigt, dass Informatikstudierende trotz zeitgenössischer Ethikbildung bei der Jobsuche Entlohnung, Ort und Kultur über [[ethics|ethische]] Anliegen priorisieren — eine kritische Lücke darin, wie Ethikinstruktion zu Verhalten transferiert.
- **Arbeitsmarktumformung:** [[ai-engineering-computing-workforce-grey-literature-2026|ein systematischer Review US-amerikanischer Grauliteratur]] rahmt das „Dual Train Problem“ — schneller KI-Wandel im Wettlauf mit [[governance|institutioneller]] Anpassung —, und fordert dauerhafte KI-Kompetenzen, Ethik/Governance und fähigkeitsbasierte Berechtigungen, abgestimmt auf entstehende Rollen (z. B. [[prompt-engineering]], KI-Auditing, [[educational-policy-ai|KI-Politik]]).

### Verbindungen

Informatikbildung verbindet sich mit [[computational-thinking|Computational Thinking]], [[stem-education]], [[automated-assessment|automatisiertem Benoten]], [[prompt-engineering|Prompt-Engineering]], [[ai-literacy|KI-Kompetenz]], [[agentic-ai|agentischer KI]], [[curriculum-design|Curriculum-Design]], [[human-ai-collaboration|Mensch-KI-Kollaboration]], [[higher-ed|Hochschulbildung]], [[k-12]] und [[professional-training|beruflicher Weiterbildung]]. Ihr engster angewandter Nachbar ist [[information-technology]]: die Informatikbildung nimmt das Programm und den Algorithmus zum Objekt, während die IT-Bildung das eingesetzte organisatorische System und das Urteil der Praktikerin oder des Praktikers darüber zum Objekt nimmt — weshalb die zwei Felder verschiedene KI-Schäden debattieren, ob Codegenerierung Programmierfähigkeit erodiert dagegen, ob KI-Troubleshooting diagnostische Fähigkeit erodiert, und verschiedene Fragen an ihre Absolventinnen und Absolventen stellen, ob sie ein System bauen können dagegen, ob sie die Systeme, die sie administrieren, regieren können. Es ist die Domäne, in der [[ai-education|AIED]]-Werkzeuge sowohl genutzt als auch gebaut werden, was sie zum Testfeld für [[intelligent-tutoring|intelligentes Tutoring]], [[educational-robotics|pädagogische Robotik]], [[collaborative-learning|kollaboratives Lernen]], [[game-based-learning|spielbasiertes Lernen]] und die Risiken von [[cognitive-offloading|Überabhängigkeit]] macht.

**Eine 72-Studien-Synthese und das VIE-Rahmenwerk.** [[kumar-genai-computing-education-systematic-review-2026|Kumar, Wongsirichot und Nanthaamornphong (2026)]] reviewten die empirische Literatur zu generativer KI in Computing- und Programmierbildung (Januar 2022 – April 2026, 72 Studien, 33 Venues) und rückten genau das strukturelle Merkmal in den Vordergrund, das die Disziplin auszeichnet: die KI erzeugt das bewertbare Artefakt selbst, sodass das Nutzen des Werkzeugs, das Lernen der Fähigkeit und das Bewertetwerden in einen Tastendruck kollabieren. Ihre Synthese von 14 Themen findet, dass der am häufigsten replizierte Effekt des Feldes — kurzfristige Effizienz- und Fertigstellungsgewinne (36 Studien) — auch sein irreführendster ist: diese Gewinne [[transfer-of-learning|transferieren]] nicht auf unassistierte Leistung (21 Studien), und [[prior-knowledge|Vorwissen]] moderiert, ob Unterstützung zu dauerhafter Fähigkeit oder einer Krücke wird. [[ai-detection|Detektions]]forschung ist dünn (3 Studien), während Kursneugestaltung vergleichsweise gut belegt ist (25 Studien), und der Review konsolidiert den Korpus in drei interdependente Designanforderungen — Verification, Implementation und Equity —, in denen kritisches Engagement mit KI-Output ein benoteter, beobachtbarer Bestandteil der Studierendenarbeit sein muss statt eine Aspiration, die dem Ermessen der Studierenden überlassen wird ([[scaffolding|Gerüstbau]], [[assessment-validity]]).

## Folgerungen für Lehrende im Computing

- **Assessments gestalten, die KI nicht durchsegeln kann.** Die wiederkehrenden Versagensmuster von GenAI (Interfaces, abstrakte Klassen, Vererbung, bildbasierte Aufgaben) nutzen, statt Werkzeuge pauschal zu verbieten — [[genai-oop-programming-assessments-2026|GenAI-Systeme kämpfen weiter dort]].
- **Autobewertbare Hausaufgaben boten keinen Fertigstellungswiderstand.** [[chatgpt-qiskit-homework-autogradable-2026|Kaltchenko & Tiwana (2026)]] führten 50 ChatGPT-Sitzungen je Qiskit-Aufgabe durch, und alle 150 Artefakte wurden ausgeführt und bestanden den Prüfenden, weil Personalisierung Parameter variierte statt Aufgabenstruktur; das Gegenmittel ist direkte Bewertung des Verstehens — überwachte Modifikation oder mündliche Verteidigung.
- **Vertrauen kalibrieren, nicht nur aufbauen.** [[trust-reliance-ai-education-2026|Trust-reliance-Forschung]] zeigt, dass höheres Vertrauen *schlechtere* Unterscheidung irreführender KI-Vorschläge vorhersagte; Verifikation und kritische Evaluation lehren, moderiert durch KI-Kompetenz und Kognitionsbedarf.
- **Debugging und [[desirable-difficulties|produktives Ringen]] am Leben erhalten.** Werkzeuge oder bewusst fehlbare Agenten wählen ([[chatgpt-teachable-agent-programming-lbt-2024|Lernen-durch-Lehren]]), die Fehlerkorrekturpraxis bewahren, und KI-generierte Medien personalisieren, um Expertise-Reversal-Effekte zu vermeiden ([[ai-generated-traces-novice-programmers|Expertise-Reversal]]).
- **KI-Unterstützung explizit regieren.** Politik, Enforcement und Autorität für LLM-Unterstützung definieren ([[llm-programming-support-governance-cs-education|PEA]]), statt Grenzen implizit zu lassen.
- **Curricula hin zu Verifikation und Agentensteuerung verschieben.** Während GenAI Implementierung automatisiert, Verstehen/Verifizieren von KI-Artefakten lehren ([[reshaping-cs-education-genai|Curricula umformen]]) und strukturierte agentische Softwaretechnikfähigkeiten ([[ase-26-agentic-software-engineering-curriculum|ASE-26]]).
- **Kollaboration für alle Lernenden strukturieren.** Kleinere konstante Teams, explizite Rollen und KI-Nutzungstransparenz stützen [[neurodiversity|neurodivergente]] Studierende und faire Kollaboration, besonders wo fehlabgestimmte KI-Nutzungsüberzeugungen Projektnoten senken.

- **LLM-adaptive Erklärungen zu Programmierfehlern (2026):** Eine crowdsourcing-basierte Studie (N=103) fand, dass LLM-umgeschriebene Fehlermeldungen die Lesbarkeit verbessern, objektive Debugging-Leistung aber davon abhängt, den Erklärungsstil (pragmatisch vs. kontingent) auf die Fähigkeit der Programmiererin oder des Programmierers abzustimmen — eine Gerüstbaueinsicht für KI-unterstützte Programmierbildung ([[llm-adaptive-programming-error-explanations-2026]]).

## Verbundene Konzepte

- [[computational-thinking]]
- [[vibe-coding]]
- [[stem-education]]
- [[information-technology]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[curriculum-design]]
- [[human-ai-collaboration]]
- [[higher-ed]]
- [[k-12]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[teacher-education]]
- [[professional-training]]
- [[ai-education]]
- [[collaborative-learning]]
- [[prior-knowledge]]
- [[scaffolding]]
- [[assessment-validity]]

## Verbundene Artikel
- [[kumar-genai-computing-education-systematic-review-2026]] — Systematischer Review von 72 Studien: Effizienzgewinne, die nicht transferieren, und das VIE-Rahmenwerk
- [[vibe-coding-writing-cs-achievement-2026]] — Informatikleistung und Schreibfähigkeiten sagen Vibe-Coding-Kompetenz vorher (CHI 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[mechanical-engineering-ai-curriculum-2026]] — Project-Based AI Education Curriculum in Thermal Engineering
- [[code-review-genai-cs1]] — CS1-Code-Review von KI-erzeugtem Code
- [[dura-llm-cs2]] — DURA: LLM-Assistenten für CS2
- [[reshaping-cs-education-genai]] — Umformung von Undergraduate-CS-Curricula für GenAI
- [[ase-26-agentic-software-engineering-curriculum]] — Curriculum zur agentischen Softwaretechnik ASE-26
- [[test-driven-ai-assisted-learning]] — Test-Driven AI-Assisted Learning
- [[genai-oop-programming-assessments-2026]] — GenAI-Leistung bei authentischen einführenden OOP-Assessments (Lepp & Kaimre 2026)
- [[trust-reliance-ai-education-2026]] — Vertrauen vs. angemessener Verlass beim Python-Problemlösen
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — epistemische KI-Kompetenz in der Studierenden-KI-Ko-Programmierung
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Lernen-durch-Lehren mit ChatGPT
- [[llm-programming-support-governance-cs-education]] — PEA-Rahmenwerk zur Begrenzung von LLM-Unterstützung
- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping Review konversationeller Agenten für Programmieranfängerinnen und -anfänger
- [[debugtracker-classroom-debugging]] — DebugTracker-Klassenzimmer-Debugging
- [[llm-automated-grading-programming-comparison-2026]] — Vergleich von 18 automatisierten Benotungsmodellen
- [[ai-generated-traces-novice-programmers]] — KI-generierte animierte Traces
- [[student-misconceptions-conditionals-loops-taxonomy]] — Taxonomie zu Missverständnissen bei Bedingungen/Schleifen
- [[jost-llm-programming-education-learning-outcomes]] — LLM-Auswirkungen auf Programmierlernergebnisse (Jošt et al.)
- [[genai-meta-analysis-programming-learning]] — Metaanalyse zu GenAI und Programmierlernen
- [[golrang-propact-pair-programming-2026]] — dyadisches Pair-Programming-Modellierung
- [[critical-engagement-code-completion]] — kritisches Engagement mit Codevervollständigung
- [[suacode-african-students-motivations]] — SuaCode smartphonebasiertes Codieren in Afrika
- [[cross-cultural-student-perceptions-genai-computing]] — kulturübergreifende Wahrnehmungen KI-unterstützten Codierens
- [[neurodivergent-computing-students]] — neurodivergente Informatikstudierende
- [[microbit-robotics-machine-learning-teacher-training-2026]] — Micro:bit + ML in der Lehrkräftebildung
- [[computational-thinking-educational-robotics-secondary-2026]] — Computational Thinking und pädagogische Robotik
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly verkörperte Blockprogrammierung
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM Robotersteuerung in natürlicher Sprache
- [[llm-computational-thinking-physics-2026]] — LLM-Unterstützung für Computational Thinking in der Physik
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT löst Qiskit-Hausaufgaben; autobewertbares Design
- [[llm-adaptive-programming-error-explanations-2026]] — LLM-adaptive Erklärungen zu Programmierfehlern
- [[soft-barriers-copying-ai-programming-2026]] — Copy-Paste-Widerstand bei KI-unterstützter Programmierung
- [[zhang-ml-student-progress-programming-2026]]
- [[spec-driven-development-ai-agents-sdpbl-2026]] - SDD mit KI-Agenten in einem Software-PBL-Kurs; Durchsatz vs. Verstehen
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: benchmarking models' capacity to generate strategic misconceptions across the CS curriculum
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injection red-team of AI-mediated grading: hidden instructions that move the mark undetected
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory
- [[llms-unplugged-teaching-resources-2026]] — LLMs Unplugged: Teaching Resources for a ChatGPT World
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education

- [[judgment-centred-software-engineering-education-2026]] — A Post-Hype Review and Framework for AI-Augmented Software Engineering Education
- [[llm-graders-computer-science-exams-2026]] — Where LLM Graders Succeed and Break: Evidence from Two Computer-Science Exams
- [[student-llm-use-cs-subfields-2026]] — LLM-Übernahme reichte von 89,6% in Algorithmen bis 15,2% in Softwaretechnik über 211 Studierende und folgte der Aufgabe statt dem Teilgebiet
- [[educator-guided-llm-pedagogical-agent-2026]] — Educator-authored staged feedback for conceptual database design: hidden diagnosis, controlled disclosure, 71.1% target-level across 383 episodes
