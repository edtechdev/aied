---
title: Roboter in der Bildung
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/educational-robotics
source_updated: "2026-10-01T09:59:02-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Roboter in der Bildung (Bildungsrobotik)** — der Einsatz physischer oder simulierter Roboter als Werkzeuge für [[teacher-role|Lehren]] und Lernen. Bildungsrobotik spannt ein weites Spektrum auf: von programmierbaren Bausätzen, die computational thinking und Programmieren lehren, bis zu sozial assistiven und humanoiden Robotern, die tutoren, Geschichten erzählen, Gebärdensprache modellieren oder soziale Fähigkeiten einüben. Sie wird geschätzt dafür, [[problem-solving|Problemlösen]], [[critical-thinking|kritisches Denken]], [[creativity|Kreativität]] und STEAM-Engagement zu fördern und abstrakte Rechnerkonzepte durch verkörperte Interaktion greifbar zu machen. Der Robotikkorpus der Wissensbasis umfasst in das [[curriculum-design|Curriculum]] integrierte Programmierung, LLM-gestützte konversationelle Tutoren, sozial assistive [[storytelling-in-education|Storytelling]]-Roboter und Rollenspiel für sozial-emotionales Lernen. Sie wird von zwei eng verwandten Bereichen getragen, die hier absorbiert werden: **soziale Roboter** (für soziale Interaktion und Beziehungsaufbau gestaltete Roboter) und **Mensch-Roboter-Interaktion (HRI)** (die Untersuchung dessen, wie Menschen Roboter wahrnehmen, ihnen vertrauen und mit ihnen lernen).

## Fragen zum Nachdenken

- Ein Roboter im Klassenraum fügt eine verkörperte, [[community-of-inquiry|soziale Präsenz]] hinzu, die ein Chatbot auf einem Bildschirm nicht kann. Was, glauben Sie, verändern der physische Körper und die sozialen Signale eines Roboters daran, wie Studierende lernen, vertrauen und sich engagieren – und wovon könnten sie ablenken?
- Soziale Roboter nutzen menschenähnliche Sprache, Gestik und Persönlichkeit, um zu lehren, Geschichten zu erzählen oder soziale Fähigkeiten zu einüben. Ist ein Roboter, der menschlich aussieht und agiert, inhärent besser für das Lernen, oder könnte diese soziale Präsenz Risiken bringen (Fehlinformation, Überabhängigkeit, Datenschutz), die rein softwarebasierte Werkzeuge nicht haben?
- LLMs lassen soziale Roboter heute flüssig konversieren. Wenn ein Roboter wie ein Tutor sprechen kann, was hängt dann noch von seiner physischen Verkörperung ab – und wo ist das Hinzufügen eines „Körpers" für das Lernen wirklich bedeutsam statt bloße Neuheit?
- Denken Sie an einen Moment, in dem Sie etwas lernten, indem Sie physisch einen Gegenstand manipulierten oder zusahen, wie Ihre Handlungen ein sichtbares Ergebnis erzeugten. Wie könnte das Programmieren eines physischen Roboters abstrakte Ideen (wie Programmlogik) wirksamer verankern als das Schreiben von Code auf einem Bildschirm?

## Einführung

Bildungsrobotik ist eine eigenständige, aber eng verwandte Anwendung von [[ai-education|KI in der Bildung]]. Anders als rein softwarebasierte [[intelligent-tutoring|intelligente Tutoringsysteme]] oder [[llm]]-Chatbots fügen Roboter eine **verkörperte** und oft **soziale** Präsenz hinzu – ein physischer Agent, den Lernende sehen, manipulieren und (zunehmend) mit dem sie konversieren können. Diese Verkörperung ist zentral für ihren [[pedagogy|pädagogischen]] Wert: sie verankert abstrakte Programmlogik in beobachtbarem Verhalten und sie kann Beziehungsaufbau und emotionales Engagement unterstützen, was körperlose Systeme nicht können.

Die Evidenz ist dünner, als das Arbeitsvolumen nahelegt: ein Review zu KI und Robotik in der Bildung findet, dass die meisten empirischen Studien Lernende unter 13 über vier Wochen oder weniger einbeziehen, auf wenige früh investierende Länder konzentriert sind, mit [[learning-gains|Lernleistung]] als am besten untersuchtem Ergebnis, während Ethik, Gerechtigkeit und Politik der Einführung hinterherhinken ([[white-wu-robotics-ai-education-2026|White und Wu (2026)]]).

### Soziale Roboter und Mensch-Roboter-Interaktion

Zwei Stränge prägen die soziale Seite der Robotik in der Bildung.

**Soziale Roboter** sind Roboter, die darauf ausgelegt sind, Menschen durch soziale Interaktion einzubinden, und dazu menschenähnliche Signale wie Sprache, Gestik, Mimik und Persönlichkeit nutzen, um zu kommunizieren, zu lehren, zu unterstützen oder zu begleiten. In der Bildung werden soziale Roboter (Humanoide wie iCub, Pepper, Reachy und Begleitroboter) für Tutoring, Storytelling, Rollenspiel, Sprachunterstützung und als Lernbegleiter eingesetzt. Ihre soziale Präsenz ist der entscheidende Unterscheider gegenüber softwarebasierten [[agentic-ai|KI-Agenten]] und ermöglicht Beziehungsaufbau und emotionales Engagement. Fortschritte bei [[llm|großen Sprachmodellen]] haben dramatisch erweitert, was soziale Roboter sagen und tun können, und flüssiges, adaptives konversationelles Tutoring ermöglicht – während sie zugleich Risiken wie Fehlinformation, [[cognitive-offloading|Überabhängigkeit]] und [[privacy|Datenschutzverletzungen]] einführten, was wissensbasierte Designansätze motiviert.

**Mensch-Roboter-Interaktion (HRI)** ist die interdisziplinäre Untersuchung dessen, wie Menschen und Roboter interagieren, und umfasst Wahrnehmung, Kommunikation, Kollaboration sowie die sozialen, kognitiven und [[ethics|ethischen]] Dynamiken dieser Interaktion. In der Bildung liegt HRI zugrunde, wie Lernende Roboter wahrnehmen, ihnen vertrauen und mit ihnen lernen – ob beim Programmieren eines Roboters, beim Konversieren mit einem Tutorroboter oder beim Einüben sozialer Szenarien. HRI-[[research-methods-aied|Forschung]] untersucht, wie Robotererscheinung, -verhalten, Aufgabenkontext und Verkörperung [[usability-research|Nutzungserlebnis]], Vertrauen, Handlungsfähigkeit und Lernen prägen. Zentrale Anliegen in der Bildungs-HRI sind der Erhalt menschlicher [[agency|Handlungsfähigkeit]], der Aufbau von [[trust|Vertrauen]], die Unterstützung von [[self-efficacy|Selbstwirksamkeit]] und die Sicherstellung, dass Interaktion mit Robotern Autonomie und soziales Lernen stützt statt untergräbt. Sie verbindet Robotik mit [[human-ai-collaboration|Mensch-KI-Zusammenarbeit]] und [[social-emotional-learning|sozial-emotionalem Lernen]].

### Wie Roboter in der Bildung eingesetzt werden

[[teaching-with-robots-five-types-perspective-2026|Christ et al. (2026)]] fügen eine Rollentypologie statt einer Technologieliste hinzu: ihre fünf aus Workshops abgeleiteten Typen von Klassenraumroboter unterscheiden sich durch *pädagogische Funktion und Abstraktionsebene*, nicht durch Hardware. Typ a führt eine nicht-interaktive Demonstration generischer sozialer Muster auf (ein geskriptetes Emotionstheater gefolgt von einer Diskussion von Dynamiken wie Eskalation oder Missverständnis); Typ b ist ein berührungsreaktiver interaktiver Roboter, der partizipatorisches physisches Theater, [[embodied-learning|verkörpertes Lernen]], Grenzbewusstsein und Emotionsregulation unterstützt; Typ c ist ein gesprochensprachlicher Partner, der Empathie zeigt und sich an Interaktionen mit einer einzelnen Schülerin oder einem einzelnen Schüler erinnert, wodurch ein geschützter Einzel-Setting für Selbstoffenbarung entsteht; Typ d wird von einer verborgenen Fachperson extern geleitet, wie eine Puppe mit zusätzlichen Freiheitsgraden, mit dem Ziel, soziale Hierarchie einzuebnen; und Typ e ist ein nicht-interaktiver Roboter, der kürzlich in der Schule beobachtete Handlungen wiederspielt, damit Schülerinnen und Schüler über situiertes Verhalten reflektieren können – der Kontrast zu Typ a ist genau seine kontextspezifische statt generalisierte Abstraktion. Die Typologie ist explizit darin, ein unvalidierter Designraum zu sein, der in einem nationalen Programm zur psychischen Gesundheit gründet; sie ist also ein Menü zur Gestaltung und Evaluation von Roboterrollen, nicht ein Beleg dafür, dass eine davon wirkt.

- **Computational thinking und Programmierung:** Programmierbare Roboter (z. B. LEGO, blockbasierte Plattformen) helfen Lernenden, Code mit realen Ergebnissen zu verbinden. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] verknüpft computational thinking mit STEAM-Curricula der Sekundarstufe, und [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] kombiniert Blockprogrammierung mit einem [[conversational-ai|konversationellen KI]]-Agenten und verkörpertem Roboter-Feedback. [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] lässt Anfängerinnen und Anfänger simulierte Roboter mit natürlicher Sprache steuern.
- **Tutoring und Wissensvermittlung:** [[knowledge-based-design-generative-social-robots-2026|Forschung zu wissensbasiertem Design]] und [[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]] entwickeln LLM-gestützte generative soziale Roboter, die Studierende in der Hochschulbildung tutoren, und adressieren dabei Risiken wie Fehlinformation und [[cognitive-offloading|Überabhängigkeit]]. [[task-context-trust-educational-hri-2026|Forschung zu Vertrauen]] zeigt, dass das, was ein Roboter tut (Aufgabenkontext), das Vertrauen der Lernenden stärker prägt als sein Erscheinungsbild, mit dem höchsten Vertrauen während instruktionaler Aufgaben.
- **Storytelling und Engagement:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] und [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]] nutzen interaktive, LLM-gestützte soziale Roboter für Storytelling, um Motivation und Engagement zu steigern, während [[icub-humanoid-storytelling-llm-hri-2025|die iCub-Narrativ-HRI-Studie]] co-kreatives Storytelling zwischen Menschen und Humanoiden erkundet.
- **Sozial-emotionales Lernen und [[inclusive-learning|Inklusion]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] nutzt robotervermitteltes Rollenspiel, um Anti-Mobbing-Zuschauerintervention einzuüben, und [[pepper-robot-sign-language-lis-2025|Arbeit mit dem Roboter Pepper]] erkundet Roboterkommunikation in Gebärdensprache, um gehörlose Lernende zu unterstützen. [[pepper-social-robot-formal-education-scoping-review-2026|Ein Scoping Review]] kartiert den Einsatz von Pepper in formaler Bildung.
- **Autonomie und Handlungsfähigkeit:** [[human-autonomy-agency-hri-review-2025|Ein systematischer Review]] synthetisiert, wie HRI menschliche Autonomie und das Gefühl von Handlungsfähigkeit beeinflusst, und verbindet Designrahmen mit [[regulation|regulatorischen]] Anforderungen (EU AI Act, IEEE Ethically Aligned Design). [[social-robot-study-companions|Soziale Roboter als Lernbegleiter]] und [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|Robotik-LLM-Integration im kreativen Schreiben]] erkunden Roboterrollen weiter.
- **Projektbasierte und spielbasierte Ansätze:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] präsentiert einen projektbasierten Robotikkurs, und [[game-based-gamified-robotics-education-review-2026|ein systematischer Review]] vergleicht spielbasiertes Lernen und Gamification in der Robotikbildung.
- **Bestärkendes Lernen und Sim-to-Real in einem vollständigen Robotik-Arbeitsablauf.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao und Wang (2026)]] verwandeln einen durchgehenden Forschungs-Robotik-Arbeitsablauf – Zusammenbau, elektrische Prüfungen, simulationsbasiertes Policy-Training und physischer Einsatz – in einen [[k-12|Highschool]]-Kurs, gebaut auf einem offenen Humanoiden (ein ToddlerBot, mit berichteten Bauteilkosten unter USD 6,000) über acht dreistündige Sitzungen. Paare teilen einen Roboter und trainieren eine [[reinforcement-learning|Gehpolicy]] in [[simulation|Simulation]], bevor sie sie auf Hardware ausbringen, wobei Sicherheitstore (ein bestandener Stehtest vor dem Gehen) die Abhängigkeitsreihenfolge sichtbar machen. Weil ein geteiltes Artefakt das Team statt das Individuum belohnt, trennt das Framework Roboterleistung von individuellem Verständnis: Studierende rotieren Rollen, jedes reicht an jedem Kontrollpunkt eine separate Prognose und Erklärung ein, und unterstütztes Weiterschreiten wird explizit nicht als Beleg konzeptueller Beherrschung behandelt – die Warnung der Autoren, dass das Bestehen eines Roboter-Meilensteins nicht sein Verständnis ist.
- **Wettbewerbsrobotik als Ökosystemproblem, nicht als Bausatzproblem.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] lokalisieren den bindenden Engpass der Robotik in der K-12 weniger in Curriculum oder Hardware als in nachhaltiger lokaler technischer Mentorenschaft, und zeigen, dass sie geografisch verteilt ist: in Indiana brach die Teilnahme an der FIRST LEGO League in der Remote-Saison 2020 ein, städtische Teilnahme erholte sich allmählich, ländliche Teilnahme nicht, und blieb nahe ihrem Stand nach 2020 bis 2025–2026. Ihr ARC-Rahmen macht Mentorenschaft zum gestalteten Objekt – Hochschulen führen einen credit-tragenden Kurs, der Studierende als Workshop-Mentoren für nahe Teams vorbereitet, und ausgereifte Schulprogramme werden sekundäre Hubs, deren erfahrene Schülerinnen und Schüler Peer-Mentoren für weitere Schulen werden, sodass Reichweite über das Einzugsgebiet jeder Universität hinaus in einer sich selbst verstärkenden Schleife propagiert. Eine Universitätserprobung schuf drei ländliche FLL-Teams und bewegte die Verbundenheit der Studierenden mit der Community von 1.86 auf 4.00 auf einer Fünf-Punkte-Skala (die größte aller gemessenen Verschiebungen, vor der Konfidenz im Unterrichten technischer Konzepte bei +1.29), während eine räumlich explizite Markov-Simulation von Indianas 1,925 öffentlichen Schulen 992 Schulprogramme nach 40 Jahren unter moderaten Annahmen gegenüber 161 ohne ARC projizierte. Die Evidenz ist auf Machbarkeitsniveau – sieben Mentoren und vier Eltern, retrospektive Selbstberichte, keine Kontrollgruppe –, aber die Rahmung ist auf jedes Robotikprogramm übertragbar: was skaliert oder nicht skaliert, ist Mentorenschaftskapazität und Hub-Geografie, nicht der Roboter ([[arc-hubs-k12-ai-robotics-rural-2026]]).
- **Kindliche Entwicklung und junge Lernende:** [[ai-toys-child-development-2026|KI-fähiges Spielzeug und kindliche Entwicklung]] verschiebt die Linse auf kommerzielles KI-Spielzeug in der frühen Kindheit und untersucht, wie KI-fähiges Spielzeug kindliche Entwicklung und Spiel beeinflusst. Das erweitert Bildungsrobotik über Klassenraumroboter hinaus auf das Konsumspielzeug, dem Kinder zu Hause begegnen, und wirft Fragen zu [[pedagogical-agent|Agenten]] im Spiel, [[trust-calibration|Vertrauenskalibrierung]], [[agency|Handlungsfähigkeit]] und [[well-being|Wohlbefinden]] für die jüngsten Lernenden auf – ein Bereich, in dem Designanleitung dünner ist als für schulpflichtige Robotikcurricula.
- **Greifbares Programmieren und soziale Roboter in der KI-Kompetenz von Pre-K.** Lee (2026) integriert unpluggedes Spiel, greifbares Programmieren (Bee-Bot, Ozobot) und angeleiteten Dialog mit einem sozialen KI-Roboter im Curriculum Play With AI (PL-AI) für Pre-K und Kindergarten, das die [[ai-literacy|KI-Kompetenz]] der Kinder durch verkörperte, greifbare Robotikaktivitäten stützt. Die [[design-based-research|designbasierte Forschung]] dokumentiert, wie diese verkörperten, greifbaren Robotikaktivitäten das entstehende Schlussfolgern von Kindern über KI-Konzepte unterstützen, wobei vier Designprinzipien – verkörpertes Spiel, greifbares Programmieren, angeleiteter Dialog und Co-Design durch die Lehrkraft – ein entwicklungsangemessenes Modell für Robotik und KI-Bildung in der [[early-childhood-elementary-ai-education|frühen Kindheit]] bieten.
- **Zwei Paradigmen für junge Lernende: Programmierroboter und generative soziale Roboter.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li und Lee (2025)]] rahmen Robotik in der frühen Kindheit als Paarung zweier [[pedagogy|pädagogischer]] Paradigmen mit je eigener theoretischer Basis. **Programmierroboter** (Bee-Bot, KIBO, Matatalab) stammen von Paperts LOGO ab und verkörpern [[constructivist|Konstruktionismus]] – Kinder lernen durch Machen und bauen [[computational-thinking|computational thinking]] durch greifbares Programmieren auf. **Generative soziale Roboter**, angetrieben von [[generative-ai|generativer KI]], gründen in [[sociocultural-learning|sozialem Konstruktivismus]] und agieren als konversationelle Peers oder Tutoren, die Lernen innerhalb der Zone der proximalen Entwicklung des Kindes [[scaffolding|stützen]] und sozial-emotionale Entwicklung unterstützen. Ihr fünfschrittiger **Creative Project Approach** zur Integration beider Robotertypen in den Project Approach hält Lehrkräfte als Facilitators, die Interaktion zwischen Kind und Roboter anleiten, Automatisierung mit [[creativity|Kreativität]] ausbalancieren und [[agency|Handlungsfähigkeit]] des Kindes bewahren.
- **Was Robotik für computational thinking im Kindergarten tatsächlich tut.** Ein systematischer Review von 53 Studien fand problembasiertes Lernen, Storytelling und Scaffolding als am häufigsten genutzte Strategien, wobei die meisten Studien keinen CT-Rahmen benannten und eher ad hoc Assessment-Werkzeuge nutzten als ein validiertes Instrument wie TechCheck-K ([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou & Sapounidis (2026)]]).

### Verkörperung und Pädagogik

Ein bestimmendes Thema ist, dass Roboter wirksam sind, wenn sie echte Lernziele unterstützen – nicht als isolierte technische Übungen. Ein tischmontierter Robotik-Projektor, der mit einem Laptop-ChatGPT verknüpft war, während Hilfe verfügbar war (6.7 gegenüber 7.3/10, p = .41), aber seine Punktzahl nach dem Abzug hielt (7.0 gegenüber 4.4/10, p = .003), eine 60% höhere kurzfristige Transferpunktzahl – ein aufgabenabhängiger Zuwachs, den die Autoren räumlicher Ko-Lokation statt allgemeinem Ersatz zurechnen ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). Der Wert eines Roboters hängt vom pädagogischen Kontext ab: computational thinking unterrichten ([[computational-thinking]]), [[stem-education|STEAM]] unterstützen, Fähigkeiten im [[cs-education|Programmieren]] aufbauen, Lernende motivieren ([[motivation|Motivation]], [[student-engagement|Engagement]]) oder [[social-emotional-learning|sozial-emotionales Lernen]] und [[equity-in-ai-education|Inklusion]] unterstützen. Robotik verbindet sich außerdem mit [[project-based-learning|projektbasiertem Lernen]], [[game-based-learning|spielbasiertem Lernen]] und [[experiential-learning|erfahrungsbasiertem Lernen]]. Zentrale Designaspekte sind der Erhalt der [[agency|Handlungsfähigkeit]] der Lernenden, der Aufbau von [[trust|Vertrauen]], die Unterstützung von [[self-efficacy|Selbstwirksamkeit]] und die Verankerung des Lernens in [[embodied-learning|verkörperter Interaktion]]. Im [[language-learning|Sprachenlernen]] weist [[robot-assisted-language-learning-meta-analysis-2026|meta-analytische Evidenz]] auf die Wirksamkeit verkörperten robotergestützten Sprachenlernens hin.

- **Wege zum Lernen KI-gestützter Robotik.** [[educational-robotics-pathways-2026|Eine qualitative Studie]] mit Schülerinnen und Schülern der Highschool in einem Robotik- und KI-Curriculum fand Lernen durch reale Praxis, Gestalten und spielerischen kreativen Ausdruck (konstruktivistische, erkenntnispluralistische Linse).

## Verbundene Konzepte
- [[early-childhood-elementary-ai-education]] — KI-Bildung in der frühen Kindheit und in der Grundschule
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Überblick: KI-Technologien und -Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)

## Verbundene Artikel

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Scoping Review des Roboters Pepper in formaler Bildung
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metaanalyse von KI-verbessertem verkörpertem robotergestütztem Sprachenlernen
- [[white-wu-robotics-ai-education-2026]] — Robotik und KI in der Bildung
- [[computational-thinking-educational-robotics-secondary-2026]] — Computational Thinking und Bildungsrobotik
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — Wissensbasiertes Design für generative soziale Roboter
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — Task-Kontext und Vertrauen in der Bildungs-HRI
- [[human-autonomy-agency-hri-review-2025]] — Menschliche Autonomie und Handlungsfähigkeit in der HRI
- [[icub-humanoid-storytelling-llm-hri-2025]] — iCub Narrative HRI
- [[pepper-robot-sign-language-lis-2025]] — Pepper und Gebärdensprache
- [[social-robot-study-companions]] — Soziale Roboter als Lernbegleiter
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Robotik-LLM-Integration im kreativen Schreiben
- [[game-based-gamified-robotics-education-review-2026]] — Spielbasierte und gamifizierte Robotikbildung
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — Pathways to Learning AI-Powered Educational Robotics (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — Robotervermitteltes computational thinking im Kindergarten
- [[ai-toys-child-development-2026]] — KI-fähiges Spielzeug und kindliche Entwicklung
- [[creative-project-approach-ai-early-childhood-2025]] — The Creative Project Approach: integrating coding and generative social robots into early-childhood projects (Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — Five functionally distinct types of classroom robot, from scripted demonstration to one-to-one empathic dialogue (Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: a hubs-based framework that treats technical mentorship capacity and hub geography, not hardware, as the constraint on rural K–12 robotics programs (Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — Teaching Reinforcement Learning and Humanoid Robotics to High-School Students: An Expert-Validated Curriculum Design on a Low-Cost Open Platform
- [[aifred-desk-robotic-ai-guidance-2026]] — A desk-mounted robotic projector: co-located guidance preserved transfer where laptop ChatGPT lost it
