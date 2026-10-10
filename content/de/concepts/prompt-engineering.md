---
title: Prompt-Engineering
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer]
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
translation_of: concepts/prompt-engineering
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Prompt Engineering** — die Praxis, Eingaben an große Sprachmodelle zu entwerfen und zu verfeinern, um gewünschte Ausgaben zu erreichen. In der Bildung dient Prompt Engineering doppelten Rollen: als Fähigkeit der lernenden Person (Lernende müssen lernen, wirksam zu prompten) und als Hebel des Systemdesigns (Entwickelnde bauen Prompts, die das Verhalten [[intelligent-tutoring|KI-Tutorings]] prägen).

## Fragen zum Nachdenken

- Sie haben kürzlich wahrscheinlich einen Prompt in ein KI-Werkzeug getippt. Bedenken Sie nun: die Art, wie Sie ihn formuliert haben, ist nicht neutral — sie kann verraten, wie Sie geplant, gedacht und Ihre Anstrengung verteilt haben. Was könnten Ihre eigenen Prompting-Gewohnheiten darüber sagen, wie Sie an Probleme herangehen?
- Eine Studie fand, dass Nutzende, die Anfragen gekonnt formulieren, systematisch bessere Ausgaben erhalten als jene, die dieselbe Absicht weniger geschickt ausdrücken. Wenn Sie akzeptieren, dass „Prompt-Privileg“ real ist: Wird fairer Zugang zu KI dann am besten dadurch behoben, [[teacher-role|allen beizubringen]], besser zu prompten, oder dadurch, das System so umzuentwerfen, dass es diese Fähigkeit nicht verlangt — und wie sind die Kompromisse jeweils?
- Ist Prompting ein „Trick“, den man auswendig lernt, oder eine echte intellektuelle Fähigkeit? Eine Linie der [[research-methods-aied|Forschung]] behandelt es als berufliches Urteilen innerhalb einer Disziplin (Journalismus, Recht, [[medical-education|Medizin]]); eine andere behandelt es als Kern der KI-Kompetenz. Welche Sicht passt zu Ihrer eigenen Erfahrung dessen, was gute von schlechten Prompts tatsächlich trennt?
- Gut gestaltete Prompts können das Denken der lernenden Person stützen, während schlecht genutzte kognitive Entlastung fördern können. Erinnern Sie sich an einen Moment, in dem eine KI-Antwort für Sie gedacht hat? Was am Prompt — oder an Ihrer Absicht — hat das bewirkt, und hätte es gegenteilig gestaltet werden können?
- Prompting ist sowohl Fähigkeit der lernenden Person als auch Hebel des Systemdesigns: manche Tutoren routen und wählen Prompts inzwischen automatisch für die nutzende Person. Während Prompting von der nutzenden Person zum System wandert: Was verlieren Lernende — und was gewinnen sie?
- Setzen Sie sich vor der Lektüre ein kleines Ziel: entscheiden Sie sich nach der Lektüre über Prompt Engineering für eine konkrete Weise, wie Sie ändern werden, wie Sie in Ihrer eigenen Arbeit Prompts schreiben, und für ein Ergebnis, das Sie prüfen werden, um zu wissen, dass es funktioniert hat.

## Einführung

Prompt Engineering ist zentral für den wirksamen Einsatz [[generative-ai|generativer KI]] in der Bildung. Anders als traditionelle Programmierschnittstellen reagieren LLMs auf natürliche Sprache —, aber Qualität, Genauigkeit und [[pedagogy|pädagogischer]] Wert jener Antworten hängen stark vom Promptdesign ab. Forschung in dieser Wissensbasis zeigt, dass Prompting kein neutraler Akt ist: es spiegelt, wie Lernende denken, planen und kognitive Anstrengung verteilen. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran und Arar (2026)]] schärfen, was der Begriff abdeckt, indem sie Prompt Engineering, die technische Optimierung von Eingaben für Leistung, von Prompt-Kompetenz unterscheiden, der rhetorischen, ethischen und reflektierten Arbeit, Zweck zu klären, Ausgabe kritisch zu lesen und mit angegebenen Gründen zu überarbeiten. Ihr Prompt Literacy Cycle (Clarify Purpose, Craft the Prompt, Engage with Output, Refine the Prompt, Reflect) und eine Beispiel-Prozessrubrik machen die Unterscheidung lehrbar, und sie argumentieren, Instruktion, die allein Ausgaben optimiere, lasse die ethischen und erkenntnistheoretischen Dimensionen der LLM-Nutzung unberührt.

### Wie Prompt Engineering in der Forschung auftritt

- **Prompting als kognitive Spur:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] zeigen, dass Prompt-Muster [[cognitive-offloading|kognitive Entlastung]] offenlegen — Arbeit hoher Qualität nutzt kontextreiche, höfliche und instruktive Prompts; Arbeit geringer Qualität zeigt reaktive Ablehnung ohne fachliche Verankerung

- **Tiefe verbessert das Produkt, nicht das Behaltensleistung.** Bei 22 Graduierten sagte der Anteil erklärungssuchender („why/how/explain“) Prompts unabhängig bewertete Aufgabenqualität voraus (β = 6.27), über Basiswissen und Prompt-Volumen hinaus, zeigte aber eine Null-Assoziation mit unmittelbarem Abruf ([[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]).

- **Prompt-Kognition folgt der Disziplin, nicht dem Lernenden.** [[student-ai-conversations-cognitive-engagement-2026|Chang und Li (2026)]] klassifizierten 60,087 Prompts aus 116 Kursen und fanden, dass sich Bloom-Stufen-Profile nach Disziplin unterschieden — MINT Apply-prävalent (20.8%), Sozialwissenschaften Create-prävalent (33.8%) —, wobei die Varianz auf Kursebene die auf Lernendenebene übertraf.
- **Prompting als Kompetenz:** [[tracing-genai-literacy-interaction-patterns|Tracing GenAI literacy]] und [[aaai2026-prompting-literacy-k12|K-12-Prompting-Kompetenz]] rahmen Prompting als Kernbestandteil der [[ai-literacy|KI-Kompetenz]].
- **Novizinnen und Novizen setzen auf Versuch-und-Irrtum und geben dem Modell die Schuld.** In einem Seminar zu Textlinguistik verfeinerten zehn GenAI-Novizinnen und -Novizen Prompts durch Versuch und Irrtum, griffen selten zu In-Context-Beispielen und schrieben schlechte Ausgaben überwältigend dem LLM statt ihrer eigenen Promptformulierung zu ([[llms-text-linguistics-teaching-2026|Brocca & Garassino (2026)]]).

- **Wenn die Lehrkraft den Prompt vormacht, nutzen Lernende ihn wörtlich wieder.** Unter 310 aufgezeichneten Prompts aus zwölf STEAM-Gruppen der Mittelstufe war exaktes Kopieren der Anweisung der Lehrkraft die häufigste Perspektive der Lernenden bei 47.1%, vor spontaner Untersuchung bei 28.7% ([[middle-school-genai-steam-interactions-2026|Zhao & Li (2026)]]).

- **Ein regulatorischer Zyklus schlägt eine Prompt-Formel.** In einem quasi-experimentellen Piloten mit 42 Studierenden erzeugten Lernende, die den IDEA-Zyklus gelehrt bekamen (Intent, Deconstruction, Expression, Adaptation), Prompts und Ausgaben höherer Qualität als Peers, die Role–Task–Context–Format-Prompting gelehrt bekamen, und zwar in allen fünf Aufgabenkategorien (angepasste Promptgewinne von +11.77 bis +29.19 Punkten) ([[idea-framework-metacognitive-genai-2026|Wang et al., 2026]]).
- **Prompting als Systemdesign:** [[cotal-formative-assessment-scoring-2026|CoTAL]] nutzt [[human-in-the-loop-ai|Human-in-the-Loop-]]Prompt Engineering für Bewertung im [[formative-assessment|formativen Prüfen]]; [[choi-anchor-aes-prompting-2025|ankerbasiertes Prompting]] verbessert [[automated-essay-scoring|automatisierte Bewertung von Aufsätzen]].

- **Prompting ist die Einstiegsfähigkeit, nicht die Disziplin.** Gorsky (2026) rahmt [[ai-literacy|KI-Kompetenz]] für Softwareprofis als Fähigkeit, [[agentic-ai|Agenten]] zu managen, statt sie zu prompten, und benennt Rahmung, Spezifikation, Context Engineering, Verifikation, Multi-Agenten-Orchestrierung und Prüfbarkeit als die Fähigkeiten, die ein Curriculum bewerten muss ([[ase-26-agentic-software-engineering-curriculum|Gorsky (2026)]]).
- **Adaptives Prompt-Routing:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] behandelt Prompt-Auswahl als Teil des Tutoring-Systems selbst — fachbewusstes Prompt-Routing über 14 pädagogische Merkmale, wobei ein stochastischer Router den besten Prompt pro Gespräch auswählt. Das verlagert Prompting von einer Fähigkeit der lernenden Person zu einem adaptiven Hebel des Systemdesigns und verbessert [[student-engagement|Engagement]] und Effizienz (28.1% gegenüber 19.6% Übungskonversion in einem realen A/B-Test).
- **Prompt-Modalitäten:** [[voice-text-prompt-problems-computing-education|Forschung zu Spracheingabe gegenüber Texteingabe]] untersucht, ob die Prompt-Modalität [[learning-gains|Lernleistungen]] beeinflusst.

- **Prompting über Text hinaus — wissenschaftliche Illustration.** Prompting kann molekulare und physikochemische Abbildungen schnell erzeugen, doch eine lokal überzeugende Darstellung kann dennoch falsch sein oder Repräsentationsbias tragen, sodass Lernende KI-erzeugte Visualisierungen gegen chemische Prinzipien befragen müssen, statt ihnen zu vertrauen ([[unesco-ai-guidelines-chemical-education-2026|Li et al. (2026)]]).
- **Gestütztes Prompting:** [[guided-llm-scaffolding-independent-learning|Guided LLM scaffolding]] und [[scaffolding-critical-engagement-genai-minority-students|Scaffolding kritischer Auseinandersetzung]] lehren strukturiertes Prompting als Lernintervention.

- **Coach-Prompting mit ausblendender Unterstützung:** In ARPG+ diagnostizierte ein Echtzeit-Coach Promptqualität über sechs Dimensionen und blendete Unterstützung aus, während Kompetenz wuchs, wodurch er die endgültige Promptqualität auf 7.82 hob gegenüber 5.95 bei statischen Vorlagen und 4.52 ohne Unterstützung ([[ye-arpg-real-time-coaching-llm-prompting-2026|Ye et al. (2026)]]).
- **Aufgabenzerlegung hat ein Optimum:** Das Erzeugen von Tutor-Trainingslektionen in drei Segmenten erzeugte die höchstbewerteten Lektionen (Mittelwert 14.67), während ein einzelner Durchlauf am niedrigsten abschnitt (10.67) und fünf Segmente unter drei zurückfielen — moderate Zerlegung schlägt beide Extreme ([[lin-llm-interactive-lesson-generation|Lin et al. (2025)]]).
- **Prompt-Privileg und Gerechtigkeit:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] zeigen, dass Prompting-Expertise ungleich verteilt ist — Nutzende, die Anfragen gekonnt formulieren, erhalten systematisch bessere Ausgaben als jene, die dieselbe Absicht weniger geschickt ausdrücken. Ihr Prompt Equity Transformer verlagert Prompt-Optimierung von der nutzenden Person auf das KI-System und argumentiert, dass [[equity-in-ai-education|gerechte]] Ausgabe in das Modell konstruiert werden sollte, statt von Novizinnen und Novizen verlangt zu werden.
- **Prompt-Verfeinerung plättet ab; Feinjustierung übernimmt von dort.** Iteratives Promptdesign ergab abnehmende Item-Qualitätsgewinne im [[assessment|Assessment]] für L2-Hörverstehen, aber Feinjustierung von GPT-4.1 am optimierten Prompt — der Prompt konstant gehalten — erzeugte kontextuell besser fundierte und ausgewogenere Items, wodurch Modellanpassung statt Prompt-Handwerk als nächster Hebel isoliert wird ([[gpt-item-generation-l2-listening-2026|Aryadoust & Wong, 2026]]).

- **Prompting als [[situated-learning|situiertes]] berufliches Urteilen.** Über Kompetenz und Systemdesign hinaus kann Prompting als *disziplinäre Praxis* gerahmt werden. Die [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Taxonomie von Dierickx et al.]] für den Journalismus behandelt Aufgabendefinition und Prompting als Form beruflichen Urteilens, das innerhalb der erkenntnistheoretischen und ethischen Normen einer Domäne ausgeübt wird — journalistische Arbeit in explizite Aufgaben zu übersetzen (newsgathering → sensemaking → editing → publication/distribution) macht Annahmen, Prioritäten und [[ethics|ethische Erwägungen]] sichtbar und verwandelt Prompting in ein pädagogisches Werkzeug für kritische KI-Kompetenz. Ihre Logik überträgt sich auf andere wissensintensive Berufe (Recht, Medizin, öffentliche Politik).
- **Prompt-Design als Instruktionsspezifikation.** Neto und Kollegen (2026) finden in ihrem [[meta-analysis-systematic-review|systematischen Review]] zu GenAI in der Bildung im Gesundheitswesen, dass Promptdesign als eine Form von Instruktionsspezifikation funktioniert und die kognitiven Ziele und Qualitätskriterien kodiert, die im Expertinnen- und Expertenautorenschaft implizit sind —, doch nur 34.8% der Studien richteten erzeugte Inhalte an Instruktionsrahmenwerken aus, und nur 34.8% berichteten Prompting detailliert genug zur Reproduktion. Looi, Liu und Sun (2026) zeigen außerdem, wie Prompt-Architektur pädagogische Regeln einbetten kann (Korrektheits-Gates, Anti-Spoiler-Grenzen, Abschieds-Gates), um [[llm|LLM]]-Tutoringverhalten in prozeduralen Domänen zu beschränken.
- **Rubrikgestütztes und rollenbewusstes Prompting.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] zeigten, dass rubrikgestütztes Prompting — die Rubrik als semantische Schnittstelle zwischen menschlicher pädagogischer Absicht und maschineller Inferenz behandeln — die Übereinstimmung zwischen LLM und Mensch über Entwurfsarbeiten von Lernenden von 54.75% auf 81.25% trieb (Cronbachs Alpha 0.393 → 0.798). Für LLMs konstruierte Rubriken müssen Präzision und Flexibilität ausbalancieren: zu vage lädt zu freier Interpretation ein, zu starr reduziert das Modell auf Mustererkennung. Rollenbewusstes Prompting — dasselbe Artefakt unter Prompts als Lehrkraft, Peer-Gutachtende und Fördergutachtende bewerten — erzeugte qualitativ verschiedene, erkenntnistheoretisch verschiedene Rückmeldungen und zeigt damit, dass Promptdesign nicht nur Genauigkeit prägt, sondern die evaluative Haltung der Ausgabe.
- **Prompt-Stützung kann ein Modell weiter von der Lehrkraft wegbewegen.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]] ließen sieben Modelle Schreibfeedback auf Absatzebene unter drei Prompting-Strategien erzeugen und fanden, dass das Hinzufügen von Kategorienamen oder ausgearbeiteten Beispielen bei den meisten von ihnen die Divergenz von der Lehrkraftverteilung erhöhte und nur Mistral-7B verbesserte (0.2695 auf 0.2398). Die Zero-Shot-Basislinie blieb am nächsten, weshalb Fokustyp-Anweisungen etwas sind, das man testen statt voraussetzen sollte.
- **Kontextbewusstes Prompting für Assessment.** Kontextbewusstes Prompting vortrainierter Sprachmodelle automatisiert das Kodieren von Fähigkeiten [[collaborative-learning|kollaborativen Problemlösens]] aus Prozessdaten, modelliert Abhängigkeiten zwischen Verhaltenscodes und verschmilzt kognitive und soziale Fähigkeiten. Das ermöglicht strukturierte CPS-Analyse im Maßstab und in Echtzeit und überwindet die Arbeitsintensität manueller Kodierschemata.
- **Rollenbasierte Vorlagen und Qualitätsrubriken für Lehrplanung.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo und Tahir (2025)]] entwickeln empirisch ein Prompt-Rahmenwerk für [[curriculum-design|Unterrichtsplanung]] in Kinder-STEAM-Kunst, das eine Role (R) – Instructions (I) – End Goal (E)-Vorlage (adaptiert aus RISEN) mit einer „vier Punkte und eine Linie“-Optimierungsrubrik paart — standardisiert, praktisch, ansprechend und vollständig, plus eine Erweiterungsdimension. Das Anwenden der Rubrik, um Prompts zu kritisieren und zu verfeinern, hielt erzeugte Pläne für praktizierende Kunstlehrende akzeptabel (mittlere Bewertungen über 4/5) und legte dabei wiederkehrende Lücken offen ([[personalized-learning|Personalisierung]], [[pedagogical-safety|Kindersicherheits-]]Randbedingungen, kultureller Bias), die schlichtes One-Shot-Prompting unadressiert ließ —, und zeigt damit, dass Prompt-Vorlagen plus explizite Bewertungskriterien als Qualitätskontroll-Stützung für Erzeugung im Kursraum funktionieren.
- **Rollen- und Randbedingungsdesign als unabhängige Variable.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] vergleichen zwei Agenten, die auf demselben Modell und derselben Plattform bei Temperatur 0.3 gebaut sind und deren einziger Unterschied ist, wie der Prompt Rolle, Fähigkeiten und Randbedingungen spezifiziert: ein Expertenlehrkraft-Agent, der aus einer begrenzten Schulbuch-Wissensquelle antwortet, gegenüber einem empathischen, lernendenzentrierten Agenten, der skriptgesteuert [[misconceptions|Missverständnisse]] diagnostiziert und Verständnis prüft. Der Rollenunterschied allein verschob Lernleistung, kognitive Last, Flusserleben und wahrgenommene Empathie und zeigt damit, dass Rollenspezifikation eine Instruktionsdesign-Entscheidung mit messbaren Wirkungen ist statt eine stilistische Schnörkelei ([[pedagogical-agent|pädagogischer Agent]]).

### Verbindungen zu weiteren Konzepten

Prompt Engineering verbindet sich mit [[scaffolding|Scaffolding]] — gut gestaltete Prompts können das Denken der lernenden Person stützen, statt es zu umgehen. Es überschneidet sich mit [[metacognition|Metakognition]] und [[ai-literacy|KI-Kompetenz]], da wirksames Prompting sowohl das Verständnis der Fähigkeiten der KI als auch der eigenen Lernziele erfordert. Die [[cognitive-offloading|Forschung zu kognitiver Entlastung]] verbindet Promptqualität direkt damit, ob KI-Nutzung Lernen stützt oder untergräbt.

- **Schreibfähigkeit treibt Prompting, und beides sagt [[vibe-coding|Vibe-Coding-]]Erfolg voraus.** In einer vorregistrierten CHI-2026-Studie (N=100) fanden [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann & Su]], dass Kompetenz in schriftlicher Kommunikation GUI-orientierte Vibe-Coding-Leistung vorhersagte (r = .29), wobei menschlich bewertete Promptqualität die Verbindung *mediierte* — Belege zum Antwortprozess, dass klare, strukturierte Prosa sich in bessere Prompts für Programmierung in natürlicher Sprache übersetzt. Sowohl Schreibfähigkeit als auch [[cs-education|Informatikleistung]] waren unabhängige Prädiktoren, und Informatikleistung (r = .39) trug etwa doppelt so viel eindeutige Varianz, sodass die Verbesserung von Prompting allein wahrscheinlich nicht vollständig für Programmiergrundlagen in LLM-nativer Entwicklung einspringen kann.
- **Prompting-Strategie sagt Leistung voraus.** Eine [[isaza-chatgpt-engineering-prompting-2026|empirische Studie mit 128 Ingenieurstudierenden]] fand, dass AI Query Efficiency (klare, gut strukturierte Prompts) und KI-getriebenes [[problem-solving|Problemlösen]] (strategische Integration von KI-Ausgabe in das Schlussfolgern) die stärksten Prädiktoren akademischen Erfolgs waren — selbst nach Kontrolle für GPA —, was zeigt, dass Prompting eine lehrbare Fähigkeit ist, die prägt, wie wirksam Lernende mit KI lernen.
- **Prompting-Stil, nicht nur Promptqualität, verfolgt Ergebnisse.** Aus 1,540 Tutoringsitzungen abgeleitete Merkmale verbanden konzeptuelles Fragen mit Prüfungsleistung, während Aufgabendelegationsverhalten negativ korrelierte —, doch dieselben Merkmale replizierten im folgenden Semester nicht, weshalb es sich um Verhaltensmuster statt um stabile Fähigkeiten handelt ([[principal-trait-analysis-human-ai-skills-2026|McNichols, Du und Lan (2026)]]).
- **Eine nutzbare Taxonomie, und welche Prompt-Kategorien tatsächlich sich auszahlen.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] übersetzen technische Strategien in das 3K-Modell (*Kontext, Kernauftrag, Klarheit* — context, core task, clarity): elf praxisorientierte Kategorien, jede mit einer gut/durchschnittlich/suboptimal-Rubrik, und jede getestet als experimentelle Variation an für Lehramtsstudierende erzeugtem Feedback zu deren Lernzielen. Domänenspezifische technische Sprache war die entscheidende Kategorie — das Ersetzen von Fachterminologie durch alltägliche Paraphrasen reduzierte die Feedbackqualität über drei Modelle hinweg signifikant (β = −0.412) —, während das Hinzufügen konkreter Beispiele und das Entfernen der Chain-of-Thought-Anweisung in der ersten Studie keinen signifikanten Unterschied zur Basislinie erzeugte; Beispiele halfen, sobald die Analyse mit den besten Modell-Prompt-Kombinationen wiederholt wurde (β = 0.52). Promptqualität und Modellwahl erklärten zusammen 42.8% der Varianz in der bewerteten Feedbackqualität, was der Fall des Papiers dafür ist, dass Prompt Engineering eine messbare und lehrbare Kompetenz ist statt eine stilistische Präferenz — und dass seine Kategorien in der Effektstärke nicht austauschbar sind.

## Verbundene Konzepte

- [[pedagogical-patterns]] — Die Stützungsschicht innerhalb von Sequenzen strukturierter Nutzung
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — Schirm: KI-Technologien und -Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)

## Verbundene Artikel

- [[wang-teacher-student-centered-agents-physics-2026]] — Agent role and constraint prompts as the design variable in physics learning (Wang et al. 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning for GPT-based L2 listening item generation (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: real-time coaching for educational LLM prompting
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Task-based taxonomy of LLM tasks for critical AI literacy in journalism
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[llms-text-linguistics-teaching-2026]] — LLMs in text linguistics teaching
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[lin-llm-interactive-lesson-generation]] — LLM generation of interactive tutor-training lessons (Lin et al. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI guidelines translated to chemical education; epistemic drift
- [[isaza-chatgpt-engineering-prompting-2026]] — Prompting behaviors predict engineering student performance
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Prompt engineering vs prompt literacy: a five-phase human-centered GenAI engagement framework with a five-step Prompt Literacy Cycle (Miles, Haber-Curran & Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Prompt engineering and model selection as predictors of AI-feedback quality (Jacobsen et al. 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing

- [[middle-school-genai-steam-interactions-2026]] — Middle-school STEAM groups copied the instructor's instruction verbatim in 47.1% of prompts
