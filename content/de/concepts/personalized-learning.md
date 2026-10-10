---
title: Personalisiertes Lernen
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-10T09:04:27-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/personalized-learning
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

> **Personalisiertes Lernen** — Bildungserlebnisse auf individuelle [[student-modeling|Lernendenprofile]] zuschneiden, einschließlich Vorwissen, Lerntempo, Präferenzen und [[affective-computing|affektiven]] Zuständen. KI ermöglicht Personalisierung im großen Maßstab, wenngleich die Lücke zwischen *Systempersonalisierung* und *von der lernenden Person wahrgenommener Personalisierung* eine offene Messherausforderung bleibt. Neben [[adaptive-learning|adaptivem Lernen]] und [[intelligent-tutoring|intelligentem Tutoring]] ist sie eines der anwendungsseitigen Mitglieder der [[student-modeling|Lernendenmodellierung und adaptiven Instruktion]] — sie konsumiert Lernendenmodelle, um Instruktion anzupassen.

## Fragen zum Nachdenken

- Wenn Sie an „personalisiertes Lernen" denken, stellen Sie sich dann Inhalte vor, die auf das Tempo einer lernenden Person zugeschnitten sind, oder auf ihre gewählten Ziele? Die Seite sagt, dass diese zutiefst verschieden sind (gleichförmige Ergebnisse über variierte Wege gegenüber vielfältigen Ergebnissen). Welche schätzen Sie mehr, und warum?
- Die Seite unterscheidet personalisiertes Lernen (das Ziel) von adaptivem Lernen (ein Mechanismus). Können Sie sich Personalisierung vorstellen, die keine Echtzeit-Adaption einschließt — und zählt sie dann noch?
- Ein System kann anpassen, ohne dass die lernende Person sich je anerkannt fühlt. Wann haben Sie es erlebt, „personalisiert zu werden", ohne sich echt gekannt zu fühlen? Was ist der Unterschied?
- Die Seite markiert, dass Überpersonalisierung Lernende in Spuren niedriger Erwartung stranden lassen kann. Wie könnte KI-Zuschneiden in bester Absicht versehentlich die Obergrenze für eine lernende Person senken?
- Personalisierung braucht detaillierte Lernendendaten; Datenschutz braucht Datenminimierung. Wo ziehen Sie die Linie zwischen „genug Daten zur Anpassung" und „so vielen, dass die lernende Person exponiert ist"?
- Was müsste eine KI über Sitzungen hinweg über Sie erinnern, um Ihr Lernen echt zu personalisieren —, und was sind die Risiken, wenn sie sich an jene Dinge erinnert?

## Einführung

Bildungserlebnisse auf individuelle Lernendenprofile zuschneiden, einschließlich [[prior-knowledge|Vorwissen]], Lerntempo, Präferenzen und affektiven Zuständen. KI ermöglicht Personalisierung im großen Maßstab, wenngleich die Lücke zwischen *Systempersonalisierung* und *von der lernenden Person wahrgenommener Personalisierung* eine offene Messherausforderung bleibt.

- **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** unterscheiden zwei Formen der Personalisierung mit tiefen historischen Wurzeln — gleichförmige Ergebnisse, erreicht über variierte Wege (Skinners [[teacher-role|Lehr]]maschinen bis zu Khan-Academy-artigem Mastery-Tutoring) gegenüber vielfältigen, von Lernenden gewählten Ergebnissen —, die auf die Kontrolle-gegen-Handlungsfähigkeit-Spannung des Felds abbilden.

## Architekturen KI-getriebener Personalisierung

### Longitudinaler Speicher (PersonaVLM → Bildung)

Nie et al. (2026) entwickelten eine [[multimodal|multimediale]] Langzeitgedächtnisarchitektur (PersonaVLM), die Personakonsistenz über Interaktionen hinweg aufrechterhält. Auf Bildung abgebildet ermöglicht dies Tutoringsysteme, die sich an die [[misconceptions|Fehlkonzepte]], bevorzugten Erklärungen und Fortschrittshistorie einer lernenden Person über Sitzungen hinweg erinnern —, was ein kritisches Defizit in zustandslosen [[conversational-ai|Chatbot]]-Tutoren adressiert.

### Agenten-natives Personalisierungssubstrat (DeepTutor)

Ma et al. (2026) entwerfen jedes [[deeptutor]]-Merkmal so, dass es ein gemeinsames Personalisierungssubstrat teilt, statt Personalisierung auf reaktive Werkzeuge aufzusetzen. Diese Architektur sichert kreuzmodale Kohärenz: dasselbe Lernendenprofil treibt [[problem-solving|Problemlösen]], [[automated-question-generation|Fragengenerierung]] und kollaboratives Schreiben.

### Multi-Agenten-Sozialpersonalisierung (MAIC)

Yu et al. (2024) personalisieren nicht nur Inhalte, sondern auch den *sozialen Kontext*. Kommilitonen-Archetypen (Class Clown, Deep Thinker, Note Taker, Inquisitive Mind) schaffen variierte Peer-Lern-Dynamiken, abgeglichen auf individuelle Bedürfnisse der Lernenden.

### AutoML für Lernendenporträts

Personalisierung ist ein zentrales Ziel zur Verbesserung der Bildungsqualität, dennoch bleibt die Verarbeitung multiquellenhafter heterogener Lernverhaltensdaten eine Herausforderung. Ein personalisiertes neuronales kognitives Architektursuch-Rahmenwerk, getrieben von automatisiertem [[reinforcement-learning|maschinellem Lernen]], baut Lernendenporträts und generiert diagnostische Modelle für heterogene Lernendenprofile, wobei multimodale Daten integriert werden, um über statische Prüfungsergebnisse hinauszugehen.

Eine statische Wissensbasis kann nicht personalisieren: Ontologien evolvieren langsam und behandeln Unsicherheit schlecht, sodass die Architektur Repräsentation an Wissenstyp anpasst — deklarativ zu Ontologien, prozedural zu Regeln, unsicher zu fuzzy oder probabilistischen Ontologien, implizit zu Analytics und maschinellem Lernen —, und ein System kleiner abgebildeter Ontologien einem monolithischen Modell vorzieht ([[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova, 2026]]).

## Beziehung zu adaptivem Lernen und intelligentem Tutoring

Personalisiertes Lernen wird oft mit [[adaptive-learning|adaptivem Lernen]] gleichgesetzt, aber sie sind nicht dasselbe. **Adaptives Lernen** bezeichnet den *Mechanismus* — ein System, das Inhalte, Tempo und Schwierigkeit in Echtzeit an ein Lernendenmodell anpasst. **Personalisiertes Lernen** ist das *breitere Ziel* — das volle Lernumfeld (Inhalte, Wege, Tempo, Präferenzen, Ziele) auf ein Individuum zuzuschneiden, wovon Echtzeit-Anpassung eine Umsetzung ist. Adaptive Systeme sind ein *Mittel* zu Personalisierung, aber Personalisierung kann auch über statische Lernendenprofile, wahlbasierte Wege oder menschliches Tutorzuschneiden erreicht werden, das nicht in Echtzeit anpasst.

Ein PRISMA-2020-Review von 22 Hochschulinterventionen platziert Unterstützung personalisierten Lernens und adaptive Wege unter den dominanten KI-Anwendungsfällen, dennoch verbesserten die meisten Umsetzungen bestehende Praxis, statt sie zu transformieren ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

[[intelligent-tutoring|Intelligentes Tutoring]] sitzt dazwischen: ITS sind die kanonischen *adaptiven* Plattformen, die personalisierte Instruktion über strukturierte Lernendenmodellierung liefern, während [[llm|LLM]]-basierte Tutoren konversationell personalisieren. Alle drei sind die anwendungsseitigen Mitglieder der Familie [[student-modeling|Lernendenmodellierung und adaptive Instruktion]] — sie konsumieren die von [[student-modeling|Lernendenmodellierung]], [[knowledge-tracing|Knowledge Tracing]] und [[cognitive-diagnosis|kognitiver Diagnose]] produzierten Lernendenrepräsentationen, um zu entscheiden, was als nächstes gelehrt wird. Die Unterscheidung zählt für Evaluation: Studien, die ein System „adaptiv", „personalisiert" oder „individualisiert" austauschbar labeln (siehe unten), können verdecken, ob der behauptete Nutzen aus Echtzeit-Anpassung, Lernendenwahl oder Inhaltszuschneiden stammt.

## Messherausforderungen

- **System- gegenüber wahrgenommener Personalisierung** — ein System kann anpassen, ohne dass sich die lernende Person anerkannt fühlt
- **Longitudinale Validität** — Personalisierungsnutzen kann zerfallen, wenn Profile veralten oder überanpassen
- **[[equity-in-ai-education|Gerechtigkeits]]risiken** — Überpersonalisierung kann Lernende in Spuren niedriger Erwartung stranden lassen

- **Bias-Risiken** — das Konditionieren auf Studierendenattribute kann Stereotyp kodieren: bei konstant gehaltenen Essays wurde Feedback für Studierende, die durch Ethnie, Sprache oder Behinderung markiert waren, lobender und weniger kritisch ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen & Demszky (2026)]]).

## Personalisierung und Assessment

Personalisierung und [[assessment|Assessment]] sind in KI-getriebenem Lernen eng gekoppelt. Adaptive Personalisierung hängt von laufender [[formative-assessment|formativer]] Messung ab, was eine lernende Person weiß (über [[knowledge-tracing|Knowledge Tracing]], [[student-modeling|Lernendenmodellierung]] und [[cognitive-diagnosis|kognitive Diagnose]]), um zu entscheiden, was als nächstes anzupassen ist —, sodass die Reliabilität des [[assessment|Assessment]]signals die Qualität der Personalisierung direkt einschränkt. Umgekehrt, wenn [[summative-assessment|summatives Assessment]] pro lernende Person personalisiert wird, werden [[bias-mitigation|Fairness]] und Vergleichbarkeit schwerer zu etablieren. Die [[research-methods-aied|Forschung]] der Wissensbasis warnt davor, an seichte oder verrauschte Signale überanzupassen: [[adaptive-learning|adaptive]] Systeme, die eine lernende Person falsch messen, können auf Weisen personalisieren, die Lernen reduzieren statt es zu unterstützen, und KI-native Lernende, deren Selbstauskunft unzuverlässig ist (eine „abwesende kognitive Baseline"), sind schwerer akkurat zu modellieren.

## Personalisierung im KI-Zeitalter

Der stärkste Beleg, dass diese Sorge nicht hypothetisch ist, kommt aus einer [[personalization-paradox-adaptive-learning-emotions-2026|dreiwellige longitudinale Studie mit 486 chinesischen Studierenden (Li, Lin & Qiu, 2026)]], die fand, dass je personalisierter Studierende ihre KI-adaptive Umgebung wahrnahmen, desto *niedriger* ihr [[self-regulated-learning|selbstreguliertes Lernen]] war — das „Personalisierungsparadox". Verschiebungen in akademischen Emotionen trugen den größten Teil des Effekts: das Begegnen der adaptiven Umgebung sagte weniger Freude und mehr Angst und Langeweile vorher, und jene emotionalen Veränderungen erklärten zusammen etwa die Hälfte der Assoziation zwischen Personalisierung und reduzierter Selbstregulation. [[ai-literacy|KI-Kompetenz]] pufferte den Schaden und schwächte die negative emotionale Assoziation bei hoher Kompetenz zur Nicht-Signifikanz. Personalisierung scheint daher adaptive Passung auf Kosten der eigenen [[regulation|regulatorischen]] Aktivität der lernenden Person zu kaufen, und die Studie verweist auf emotionale Erfahrung — nicht nur kognitive Last — als den Kanal, über den diese Kosten gezahlt werden.


Wo die Diagnose hinter einem Weg validiert ist, zahlt sich Personalisierung dadurch aus, dass sie Last senkt, statt mehr abzudecken: Kürzeste-Pfad-Remediation mittelte 3.82 Schritte und senkte die Lernzeit um 22.0% (57.6 gegenüber 73.8 Minuten), wobei kognitive Last 53.7% des Nachtesteffekts trug ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).

Evidenz für das Werkzeug kann selbst bei kleiner Skala negativ sein: in einem fünftägigen Grundschultest zu Brüchen (finales n = 22) zeigte die Business-as-usual-Gruppe signifikant größere Verständnisgewinne als die KI-adaptive Mathbot-Gruppe, und die Autoren markieren Klassenstufen-Konfundierungen, Raten und Lizenzkosten als Grenzen — ein „adaptives" Label trägt keinen Effekt ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman (2024)]]).

Bestärkendes Lernen ist ein distincter Mechanismus der Personalisierung, und [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] kartieren seine empirische Erfolgsbilanz: ihr [[meta-analysis-systematic-review|PRISMA]]-Review von 89 RL-in-der-Bildung-Studien findet RL-Personalisierung konzentriert in der [[higher-ed|Hochschulbildung]] und der [[math-education|Mathematik]], mit Anpassung hauptsächlich umgesetzt als Inhaltsplanung (n = 53) oder leitungsbezogene Personalisierung wie Hinweise und Feedback (n = 36). Sie berichten, dass RL-Policies am häufigsten auf leitungsbezogener Anpassung und auf [[affective-computing|affektiven]] Variablen Nicht-adaptive-Baselines besiegten (63% der getesteten Studien), und dass Lerngewinn — besonders normalisierter Lerngewinn — die wirksamste Belohnungsquelle war —, praktische Orientierung für das Entwerfen von Belohnungssignalen, die zu echtem Lernen statt zu [[student-engagement|Engagement]] personalisieren.

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] zeigen, dass das Belohnungsziel selbst eine Personalisierungswahl ist: ein auf die unabhängige Kompetenz der lernenden Person trainierter RL-Coach senkte die Rundenzeit um 27.9% (p = 0.005), wo regelbasiertes Verblassen keine verlässliche Veränderung produzierte, und die Autoren argumentieren, dass für Aufgabenleistung optimierte Coding-Agenten keinen Anreiz für das tragen, was der Mensch behält.

Bernstein und Sibia (2026) schärfen eine Unterscheidung zwischen Interessenpersonalisierung und Expertisepersonalisierung: interessengematchte GenAI-Analogien wurden als engagierender und einprägsamer berichtet, aber nicht gleichförmig vertrauenswürdiger, und manche Studierende bevorzugten die generische technische Erklärung sogar, wenn die Analogie ihrem erklärten Interesse entsprach, wegen Selbstgenügsamkeit und Vollständigkeit ([[student-reception-genai-analogies-computing-2026]]). Ihre Designempfehlung ist, über Quelldomänenstruktur zu personalisieren und Studierende zu fragen, was sie bereits wissen, nicht nur was sie interessiert, da Vertrautheit mit einer Quelldomäne das ist, was eine lernende Person die Analogie untersuchen lässt —, und Lernenden Kontrolle über Personalisierung zu geben über ein Menü von Analogien, Opt-in, oder das gemeinsame Anbieten generischer und personalisierter Versionen. Sidorkin (2026) dokumentiert eine weitere Paarung auf der Ebene von Kursmaterialien statt individueller Erklärungen: auf Abruf generierte wöchentliche Lektüren für einen graduierten Kurs zu Bildungsführung wurden auf einmal entlang von Interesse (Sektor, professionelle Rolle, lokale Beispiele) und Verständnisniveau (Tempo, Definitionen, Tiefe) zugeschnitten, und die resultierenden Logs teilten ein gemeinsames Rückgrat (TF-IDF-Cosinus-Ähnlichkeit von 0.50 bis 0.61), was er als eine Vorlage mit justierbaren Reglern liest statt als Neuschreiben pro lernende Person. Dasselbe Korpus zeigt, dass Zuschneiden strukturell, aber in der Intensität ungleich war: Marker auf Artefaktebene mittelten 52.24 pro 10.000 Wörter und reichten von 38.74 bis 74.29 über Logs, während verständnisorientierte Prompts 3.4-fach bis 8.7-fach mehr definitionales [[scaffolding|Scaffolding]] produzierten als baseline-erklärender Text.

Eine dritte Achse der Personalisierung ist das *Ziel*, und sie ist die Eingabe, die KI-Planer am schlechtesten behandeln. [[personapath-personalized-learning-paths-2026|Liu et al. (2026)]] paarten 2.000 synthetische Lernendenpersonas mit einem Voraussetzungsgraphen aus 347 Lehrbüchern und 4.092 Konzepten und baten zehn LLMs, Schritt für Schritt zu planen, welches Wissen eine lernende Person studieren sollte, um eine erklärte Zieleinheit zu erreichen. Die Modelle produzierten strukturell solide Curricula — DeepSeek-V3.1 erreichte 90.9% bei Voraussetzungs- und Halluzinationsvalidität —, während sie daran scheiterten, sie an die lernende Person anzupassen: Adaptivität stagnierte bei 44.7%, DeepSeek-V3.1s abschließende Bestehensrate lag bei 29.5% in der Basisbildung und 14.6% in der Hochschulbildung, und das Entfernen des Mastery-Felds aus der Persona kostete bis zu 26.1 Prozentpunkte Adaptivität, während Validität nahezu unverändert blieb. Den gesamten Weg in einem Durchgang statt interaktiv zu generieren erhöhte Validität um bis zu 30.8 Punkte, während es Adaptivität um 28.8 senkte. Die Behauptung „personalisiert" ist eine Behauptung über das Reagieren auf den Zustand einer lernenden Person, und die Zustandsvariable ist der Teil, auf den diese Planer am leichtesten verzichten können —, ein rechnerisches Gegenstück zur Messsorge oben.

Eine vierte Achse ist das *Publikum* statt der individuellen lernenden Person: [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] regeneriert eine bestehende Vorlesung für eine benannte professionelle Gruppe (Gesundheitswesen, Finanzen oder Energie), und seine Expertenbewertenden bewerteten industrieumrahmte Versionen um 0.32 Punkte höher bei Personalisierungstiefe (3.97 gegenüber 3.65), während Publikumskalibrierung zurückblieb (3.52). Auf eine Kohorte statt auf eine lernende Person zuzuschneiden ist eine günstigere und handhabbarere Form der Personalisierung, aber die Rubrik, die sie maß, bewertete beurteilte Passung, nicht Lernendenergebnisse.

Personalisierung kann einen menschlichen Vortragenden überwiegen: in einem großen Online-Kurs (493 Antwortende) ordneten Studierende KI-generierte personalisierte Videos über nicht personalsierte menschlich aufgezeichnete (mittlerer Rang 2.26 gegenüber 2.69), und 88.4% ordneten irgendein personalisiertes Video auf Platz eins gegenüber 73.8% für menschlich aufgezeichnete ([[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]]).

## Prompt-konditionierte Mikropersonalisierung

[[prompt-engineering-personalization-ai-teaching-assistant-2026|Basu, Kakar & Goel (2026)]] zeigen, dass die Lücke zwischen System- und wahrgenommener Personalisierung auf Antwortebene adressiert werden kann. Ihr Rahmenwerk für den Jill-Watson-[[llm|LLM]]/[[rag|RAG]]-Tutor kombiniert von Lernenden gewählte Präferenzen (abstraction, verbosity, perception, processing, understanding) mit systemseitig inferierter kognitiver Anforderung ([[cognitive-diagnosis|Blooms Taxonomie]]), um 96 Mikroprofile zu produzieren, die bei jeder Interaktion über [[prompt-engineering|strukturierte Prompt-Konditionierung]] angepasst werden — kein Neutraining, keine [[discipline-specific-aied|fachspezifische]] Verfassung. Dies ist eine Hybride aus [[adaptive-learning|adaptability]] (lernendengetriebene Präferenzauswahl) und adaptivity (systemseitige kognitive Einschätzung), was zeigt, dass Personalisierung *wie* Inhalte dargestellt werden sowohl skalierbar als auch für Lernende wahrnehmbar sein kann.

## Terminologische Mehrdeutigkeit

Ein wiederkehrendes Problem ist, dass „personalisiertes Lernen" ein breiter, lose definierter Überbegriff ist. Systematische Reviews ([[khalifeh-redefining-personalized-learning-ai-2026|Khalifeh et al., 2026]]) finden, dass [[adaptive-learning|adaptives Lernen]], individualisierte Instruktion, angepasstes Lernen und personalisiertes Lernen austauschbar genutzt werden, ohne universell akzeptierte Definition —, eine Quelle konzeptueller Mehrdeutigkeit, die Forschungssynthese und evidenzbasierte Praxis kompliziert. Das Feld fordert zunehmend ein einheitliches Rahmenwerk und eine Definition, sodass „personalisiert" eine präzise, evidenzgestützte Behauptung statt ein vages Label bezeichnet (ein Punkt, verstärkt durch die [[limitations-in-aied-research|Kritik der Wissensbasis an schwacher Konstruktnutzung]]).

## Verbundene Konzepte

- [[adaptive-learning]] — Adaptive Systeme, die Inhalte, Tempo und Schwierigkeit in Echtzeit auf die lernende Person zuschneiden
- [[intelligent-tutoring]] — Tutoringsysteme, die die lernende Person modellieren und individualisierte Instruktion liefern
- [[student-modeling]] — Wissen, Fähigkeiten und Zustände der lernenden Person repräsentieren, die Anpassung treiben
- [[knowledge-tracing]] — Beherrschung von Wissenskomponenten aus Leistung über die Zeit inferieren
- [[cognitive-diagnosis]] — latentes Wissen und Attribute der lernenden Person aus Antworten diagnostizieren
- [[scaffolding]] — Unterstützung und Verblassen, kalibriert auf individuelle Bedürfnisse der lernenden Person
- [[student-experience]] — die gelebte Erfahrung der lernenden Person von Personalisierung
- [[learning-analytics]] — datengetriebene Messung von Lernen, die Anpassung informiert
- [[formative-assessment]] — laufendes Assessment, das signalisiert, was als nächstes anzupassen ist
- [[summative-assessment]] — Endpunkt-Assessment, dessen Vergleichbarkeit Personalisierung kompliziert
- [[generative-ai]] — LLM-basierte konversationelle Personalisierung
- [[edtech-platform]] — Plattformen, die personalisiertes Lernen im großen Maßstab liefern
- [[higher-ed]] — Hochschulkontext für Personalisierung
- [[online-teaching-and-learning]] — Online-Lehre und -Lernen
- [[recommender-systems-and-learning-paths]]

## Verbundene Artikel

- [[bespoke-industry-personalized-lecture-videos-2026]] — Industry-personalized lecture video regeneration from a seed transcript: audience-level tailoring, rated by domain experts (Puech et al. 2026)
- [[prompt-engineering-personalization-ai-teaching-assistant-2026]] — Prompt-engineering micro-personalization of an AI teaching assistant (Basu, Kakar & Goel 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[mishra-control-vs-agency-history-2025]] — Distinguishes two forms of personalization (uniform vs diverse outcomes)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefining personalized learning: systematic review
- [[deeptutor]] — Agent-native personalization substrate for tutoring
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Personalized adaptive learning for elementary fractions
- [[ai-coaching-rl-skill-development]] — Reinforcement-learning coaching for skill development
- [[personalized-ai-generated-videos-preference-2026]] — Students prefer personalized AI-generated videos over non-personalized human-recorded ones (Tomlinson et al. 2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in personalized automated feedback
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Systematic review: adaptive pathways & recommenders are a top AI integration use case in higher ed
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[personalization-paradox-adaptive-learning-emotions-2026]] — Personalization paradox: perceived adaptive personalization linked to lower self-regulated learning via academic emotions, buffered by AI literacy (Li, Lin & Qiu 2026)
- [[personapath-personalized-learning-paths-2026]] — PersonaPath: LLM planners reach 90.9% validity but no model exceeds 44.7% adaptivity when personalizing paths to a stated learner goal (Liu et al. 2026)
