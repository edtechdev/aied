---
title: Verkörpertes Lernen
created: "2026-08-13T18:49:42-04:00"
updated: "2026-11-07T20:05:54-05:00"
type: concept
foundations: [computational-thinking]
pedagogy: [active-learning, embodied-learning, situated-learning]
technology: [educational-robotics]
confidence: high
translation_of: concepts/embodied-learning
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
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

> **Verkörpertes Lernen** — das [[pedagogy|pädagogische]] Prinzip, dass Lernen in körperlicher Erfahrung, physischer Interaktion und dem sensomotorischen Kontext der lernenden Person gründet. Verkörperte Ansätze gehen davon aus, dass Kognition nicht rein abstrakt ist, sondern vom Körper und seiner Interaktion mit der Umgebung geformt wird. In [[ai-education|KI in der Bildung]] wird Verkörperung durch [[educational-robotics|Bildungsroboter]] und [[educational-robotics|soziale Roboter]] realisiert, deren physische Präsenz abstrakte Konzepte (wie Programmlogik oder soziale Fähigkeiten) in beobachtbarem, manipulierbarem Verhalten verankert.

## Fragen zum Nachdenken

- Wir denken oft, Lernen geschehe „im Kopf“, wobei der Körper das Gehirn nur herumträgt. Was, wenn Lernen tatsächlich in körperlicher Erfahrung und Interaktion mit der Umgebung gründet? Welches Fach haben Sie gelernt, das Ihren Körper zu erfordern schien — und hätte es rein abstrakt gelernt werden können?
- Verkörperte Ansätze behaupten, ein physischer, manipulierbarer Agent helfe Lernenden, abstrakte Ideen mit konkreten Ergebnissen zu verbinden — etwa zu sehen, wie ein Programm einen Roboter bewegt. Wann haben Sie bemerkt, dass etwas Physisches zu tun ein abstraktes Konzept endlich „klicken“ ließ?
- Manche [[research-methods-aied|Forschende]] behandeln Gestik als Beleg für Verstehen — sie verfolgen die Handbewegungen der Studierenden neben ihrer Sprache, um konzeptuelles Begreifen zu bewerten. Wenn die Hände einer Person das Konzept „wissen“, bevor ihre Worte es tun, was könnte das dafür bedeuten, wie wir Lernen bewerten sollten?
- Eine aufkommende Kritik stellt „entkörperlichte“ KI infrage, die mit abstrakten Symbolen arbeitet, und argumentiert, KI solle um verkörperte Intelligenz herum gestaltet werden, um das Denken der Lernenden zu erhalten statt es auszulagern. Glauben Sie, dass eine KI, die nie einen Körper hatte, verkörpertes Lernen vollständig stützen kann?

## Einführung

Verkörpertes Lernen ist eng verwandt mit [[active-learning|aktivem Lernen]], [[experiential-learning|erfahrungsbasiertem Lernen]] und situierten/[[constructivist|konstruktivistischen]] Theorien. Die zentrale Behauptung ist, dass ein physischer, manipulierbarer Agent Lernenden hilft, abstrakte Ideen mit konkreten Ergebnissen zu verbinden — ein Programm, das einen Roboter bewegt, oder ein Rollenspiel mit einem physischen Roboter — auf Weisen, die rein bildschirmbasierte Interaktion vielleicht nicht vermag. Robotik ist die klarste Verkörperung von KI in der Bildung und gibt Lernenden etwas zu sehen, zu berühren und zu beobachten.

### Wie verkörpertes Lernen in der Forschung der Wissensbasis erscheint

- **Verankertes Programmieren:** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] verankert [[cs-education|Blockprogrammierung]] in verkörperter Roboterausführung und erzeugt eine enge Schleife aus Erstellen, Ausführen, Beobachten und Überarbeiten, damit Lernende sehen, wie ihr Code zu Verhalten wird.
- **Sozialrobotische Interaktion:** [[educational-robotics|Soziale Roboter]], die für [[storytelling-in-education|Storytelling]] ([[motibo-digital-storytelling-robots-motivation-2026|MotiBo]], [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]), Rollenspiel ([[remind-robot-mediated-roleplay-antibullying-2026|REMind]]) und Gebärdensprache ([[pepper-robot-sign-language-lis-2025|Pepper]]) eingesetzt werden, bieten verkörperte soziale Interaktion, die relationales und [[social-emotional-learning|emotionales]] Lernen stützt.
- **Verkörperungsmerkmale sind nicht das, was Ergebnisse treibt.** Eine [[meta-analysis-systematic-review|Metaanalyse]] von 11 RALL-Studien (N = 595, g = 0.83, I² = 84.4%) fand, dass Robotermorphologie, Modalität, Autonomie und soziale Rolle das Lernen einer Zweitsprache nicht moderierten; gruppenbasierte Formate schlugen Eins-zu-eins, sodass die Position des Roboters, nicht seine Verkörperung, den Effekt trug ([[robot-assisted-language-learning-meta-analysis-2026|Wang et al. (2026)]]).
- **Verkörperung und kreatives Schreiben:** [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|Forschung zur Roboter-LLM-Integration im kreativen Schreiben]] untersucht, wie Verkörperung die Interaktion der Lernenden und ihre Ergebnisse beeinflusst.
- **Mensch-Roboter-Interaktion:** [[educational-robotics|HRI]]-Forschung ([[task-context-trust-educational-hri-2026|Vertrauen]], [[human-autonomy-agency-hri-review-2025|Handlungsfähigkeit]]) untersucht, wie physische Verkörperung Vertrauen, [[student-engagement|Engagement]] und [[agency|Autonomie]] prägt.
- **Gesten als Beleg für Verstehen:** [[multimodal-embodied-cognition-oral-explanations-2026|Morphew et al.]] integrieren Computer-Vision-Gestenverfolgung mit [[llm|LLM]]-Analyse der Sprache, um zu zeigen, dass das konzeptuelle Verständnis von Ingenieurstudierenden für Statistik sowohl durch Sprache als auch durch Gestik ausgedrückt wird. Gesten mit hoher Konfidenz in Erklärungen clustern um konkrete Konzepte (besonders den Mittelwert), und enge Gestik-Sprache-Kopplung signalisiert kohärente konzeptuelle Rede, während Divergenz sich entwickelnde Ideen markiert — was verkörperte Handlung als Beleg im [[assessment-validity|Assessment]] über [[multimodal|multimodale Learning Analytics]] positioniert, nicht nur als Lernmechanismus.

- **Ein rein sprachlicher Lernbegleiter zieht die Untersuchung auf das, was sich sagen lässt.** In einem Master-Labor zur Fluidstatik bauten Studierende das Auftriebsmodell von Hand, bevor ein Gemini-basierter Lernbegleiter hinzukam, um es auf ein neues Phänomen anzuwenden. Über drei Paare hinweg hielt die KI die ISLE-Sequenz, doch auf die Bitte „sagen Sie uns einfach“ produzierte sie Massenwerte, die niemand gemessen hatte, und eine entfernte Teilnehmerin absolvierte einen physikalisch korrekten Zyklus, der sauber, aber entkörpert war ([[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani, 2026]]). Die Designlehre ist Sequenz statt Substitution: das Modell zuerst im Körper bauen, dann das Sprachmodell auf seine Anwendung arbeiten lassen.

### Verkörperte Intelligenz und die Kritik entkörperlichter KI

Ein zweiter, theoretischerer Strang der Verkörperungsforschung der Wissensbasis betrifft die Rolle des *Körpers* im KI-[[sociocultural-learning|vermittelten Lernen]] — nicht durch physische Roboter, sondern durch die Frage, ob [[ai-technologies|KI-Systeme]] selbst (oder werden können) verkörpert sind. Diese Arbeit stellt die Dominanz symbolischer, entkörperlichter KI-Modelle infrage, die auf abstrakter Informationsverarbeitung aufbauen:

- **Verkörperte KI als Gestaltungsprinzip.** Das **E3-HOT-Framework** argumentiert, dass KI — um die kognitive Handlungsfähigkeit der Lernenden und ihr [[critical-thinking|höherstufiges Denken]] zu erhalten (statt [[cognitive-offloading|kognitive Auslagerung]] zu fördern) — um *verkörperte Intelligenz* herum gestaltet werden sollte: situative Einbettung, verkörperte Teilnahme und kognitive Erschaffung — innerhalb einer virtuell-realen integrierten Lernumgebung.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])
- **Die Grenzen entkörperlichter [[generative-ai|generativer KI]].** Postkognitivistische Forschung argumentiert, dass heutige GenAI-Systeme Propriozeption, multimodale Handlungsfähigkeit und verkörperte Praxis fehlen, und plädiert für eine „verkörperte KI“, die in Situiertheit, Emergenz und sensomotorischer Kopplung gründet, und schlägt eine perzeptiv-[[affective-computing|affektive]] Choreografie für die Mensch-[[student-ai-interaction|KI-Interaktion]] vor.([[videla-embodied-ai-education-choreography]])
- **Verkörperung, Situiertheit und soziale Konstruktion.** Im [[science-education|Naturwissenschaftslernen]] fungieren KI-Werkzeuge als „mediationale Artefakte“, die digitale Praxisgemeinschaften und Grenzüberschreitungen ermöglichen und verkörperte, authentische Untersuchung mit realweltlichen und interdisziplinären Kontexten verbinden.([[li-ai-science-situated-learning-teachers-2025]]) Das bindet Verkörperung an [[situated-learning|situiertes Lernen]] und [[distributed-cognition|verteilte Kognition]].

Verkörpertes Lernen verbindet sich mit [[educational-robotics|Bildungsrobotik]], [[educational-robotics|Robotik in der Bildung]], [[educational-robotics|robotischen Systemen]], [[active-learning|aktivem Lernen]], [[experiential-learning|erfahrungsbasiertem Lernen]], [[situated-learning|situiertem Lernen]], [[distributed-cognition|verteilter Kognition]], [[computational-thinking|computational thinking]] und [[social-emotional-learning|sozial-emotionalem Lernen]].
- **Körperverfolgung macht Selbstregulation zu einem messbaren Signal.** In einer Mixed-Reality-Photosynthese-Simulation, in der Bewegungs-Tags Lernenden-Agenten über ein projiziertes Modell bewegten, klassifizierte eine LLM-Pipeline 470 Segmente selbstregulierten Verhaltens in 40 Minuten Video, wobei das Segment-Label „dominating" mit 66,4 % am häufigsten vertreten war ([[fonteles-embodied-learning-human-in-the-loop-multimodal-2026|Fonteles et al., 2026]]).

- **KI beobachtet den Körper meist, statt an ihm teilzunehmen.** In einem PRISMA-Review von 23 Studien zu KI für verkörpertes Lernen wurden die 40 kodierten KI-Rollen von Wahrnehmung dominiert: Analyse und Evaluation 40,0 % und Erkennung und Detektion 22,5 % gegenüber 35,0 % für Rollen, die innerhalb der Aktivität handeln (Feedback und Coaching 15,0 %, Interaktion 12,5 %, Inhaltserzeugung 7,5 %). Ohne die drei mit „Low“ bewerteten und vier nicht bewertbaren Arbeiten sinkt die Interaktion auf 6,7 % und die Inhaltserzeugung auf 3,3 %, sodass die Evidenz dafür, dass KI an die verkörperte Schleife anschließt, auf den schwächsten Arbeiten beruht ([[kim-ai-embodied-learning-review-2026|Kim und Han (2026)]]).

- **Die körperlichste Literatur misst den Körper am wenigsten.** Von 32 Ergebnis-Tags entfielen 43,8 % auf kognitive Ergebnisse, 34,4 % auf affektive und 21,9 % auf psychomotorische, eine Reihenfolge, die auch unter den 16 höher bewerteten Arbeiten hielt (24,0 % von 25 Tags). Die Autorinnen und Autoren führen das auf die Schwierigkeit zurück, psychomotorische Maße zu wählen, und auf eine Gewohnheit, kognitive Zuwächse zu priorisieren, nicht auf einen schwachen Effekt auf körperliche Fertigkeiten. Keines der begutachteten Systeme war für gemeinsam handelnde Lernende gestaltet; die Zusammenarbeit, die erscheint, ist Kooperation zwischen [[teacher-role|Lehrkraft]] und KI ([[kim-ai-embodied-learning-review-2026|Kim und Han (2026)]]).

## Verbreitete Fehlvorstellungen

- **„Der Körper ist das, was verkörpertes Lernen zum Funktionieren bringt."** Eine Metaanalyse von **11 RALL-Studien (N = 595, g = 0,83, I² = 84,4%)** fand, dass **Robotermorphologie, Modalität, Autonomie und soziale Rolle** die Ergebnisse des [[language-learning|Zweitsprachenlernens]] **nicht moderierten**. Die Verkörperungsmerkmale waren nicht der wirksame Bestandteil, und die Heterogenität war hoch genug (I² = 84,4%), dass der gepoolte Effekt eine sehr gemischte Gruppe von Interventionen beschreibt.
- **„Ein großer Effekt entscheidet über den Mechanismus."** g = 0,83 mit 595 Teilnehmenden über 11 Studien ist ein echtes Signal, und es identifiziert nicht, was es erzeugt hat. Da die Designmerkmale den Effekt nicht moderierten, sitzt der plausible Mechanismus in der pädagogischen Aktivität statt in der Hardware — was verändert, worin zu investieren ist.
- **„Verkörperung lässt sich nicht messen und bleibt deshalb theoretisch."** Körperverfolgung kann Regulation in ein **messbares Signal** verwandeln: In einer Mixed-Reality-Photosynthese-Simulation, in der Bewegungs-Tags Studierendenagenten über ein projiziertes Modell bewegten, labelte eine LLM-Pipeline **470 Segmente** Regulationsverhalten. Das Konstrukt ist operationalisierbar, auch wo es schwer zu definieren ist.

## Verbundene Konzepte
- [[educational-robotics]]
- [[active-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[computational-thinking]]
- [[social-emotional-learning]]
- [[learning-theories]]
- [[multimodal]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — die Modalität, die Verkörperung direkt auszunutzen versucht

## Verbundene Artikel
- [[fonteles-embodied-learning-human-in-the-loop-multimodal-2026]] — Mit Bewegungsverfolgung versehene Photosynthese-Simulation, analysiert mit einer LLM-Pipeline (Fonteles et al. 2026)
- [[multimodal-embodied-cognition-oral-explanations-2026]] — Ein multimodaler Rahmen für verkörperte Kognition in mündlichen Erklärungen
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Dauerhaftes Lernen durch verkörperte Intelligenz fördern (E3-HOT)
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[pepper-robot-sign-language-lis-2025]] — Pepper und Gebärdensprache
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Integration von Robotern und LLMs im kreativen Schreiben
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metaanalyse KI-gestützten verkörperten robotergestützten Sprachlernens
- [[vargas-situated-learning-ai-review-2024]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[videla-embodied-ai-education-choreography]]

- [[embodied-inquiry-ai-facilitator-physics-2026]] — KI als Begleitung nach handgebauten Modellen: Eine sprachbasierte KI kann verkörperter Untersuchung nicht folgen (Tufino & Damiani 2026)
- [[kim-ai-embodied-learning-review-2026]] — KI im verkörperten Lernen beobachtet meist: Wahrnehmungsrollen 62,5 % der kodierten Rollen-Tags, und kein begutachtetes System führte multimodale Ströme zusammen, während Lernende es nutzten (Kim & Han 2026)

