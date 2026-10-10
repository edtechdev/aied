---
title: Virtual und Augmented Reality
created: "2026-09-13T09:52:00-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
pedagogy: [embodied-learning, professional-training]
technology: [generative-ai, multimodal, simulation]
ethics: [accessibility]
confidence: high
discipline: [medical education, stem education]
translation_of: concepts/virtual-and-augmented-reality
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Virtual und Augmented Reality (VR/AR)** – die Anzeige- und Interaktionsschicht, durch die Lernumgebungen erfahren werden: vollständig synthetische Räume in VR, und digitale Inhalte, die in AR und Mixed Reality über die physische Welt gelegt werden. KI betritt diese Schicht in zwei Richtungen. Sie *autorisiert* sie, denn [[generative-ai|generative KI]] verwandelt nun eine Beschreibung in natürlicher Sprache in ein funktionierendes browserbasiertes AR- oder VR-Lernwerkzeug, das keinen spezialisierten Entwickler mehr erfordert. Und sie *bewohnt* sie, da [[agentic-ai|Agenten]], [[pedagogical-agent|pädagogische Agenten]] und [[rag|abgerufenes Wissen]] einen Lernenden freihändig im Inneren der immersiven Umgebung führen. Was die Modalität über einen Bildschirm hinaus ergänzt, ist Präsenz und [[embodied-learning|Verkörperung]]; was sie kostet, ist Treue, Hardware und die Toleranz eines Körpers dafür, dort zu sein.

## Fragen zum Nachdenken

- Wo fällt die Grenze zwischen dem, was modelliert wird, und der Oberfläche, auf der es gezeigt wird? Vergleichen Sie einen Desktop-Patientensimulator mit einer VR-Exkursion zu einem Ort, den Studierende nicht besuchen können. Welche Unterschiede würden Sie erwarten, dass sie Lernen verändern, und welche womöglich nur Neuheit?
- Ein Pilotprojekt fand, dass Studierende berichteten, Wellenlänge und Amplitude über eine Handgeste stärker zu *fühlen* als über einen Schieberegler –, doch es maß Wahrnehmung, nicht Leistung, bei 29 Studierenden und ohne Vergleichsgruppe. Wie viel sollte berichtetes „Fühlen“ zur Übernahme eines Werkzeugs zählen?
- Wenn generative KI einer Lehrkraft ohne Programmierhintergrund erlaubt, in einem Nachmittag eine funktionierende AR-Simulation zu bauen: Welche neuen Verantwortungen folgen daraus für die Validierung der [[physics-education|Physik]], die Beurteilung der Treue und die Entscheidung, ob sie in einen Kurs gehört?
- In einem Review zu KI-gestützter Pflegesimulation passte KI zu menschlichen Schauspielerinnen und Schauspielern bei strukturierter Kommunikation, aber nicht bei taktilen und emotional komplexen Szenarien. Wie würden Sie Praxis sequenzieren, damit Lernende einige Teile mit KI und andere mit Menschen einüben?
- Eine Klassenzimmer-VR-Studie berichtete minimale Bewegungskrankheit, während die meta-analytische Schätzung für intelligente VR bei Studierenden mit Behinderungen nicht statistisch signifikant war. Was würden Sie gemessen wissen wollen, bevor ein Programm in Headsets investiert?

## Einführung

Virtual und Augmented Reality sind eine **Modalität**, kein Modell: Sie sind die Schicht, durch die eine Lernumgebung den bzw. die Lernende erreicht. Das macht sie zu einer anderen Achse als [[simulation|Simulation]], die das ist, was überhaupt modelliert wird. Beide werden oft verwechselt, denn immersive Umgebungen sind verbreitete Lieferfahrzeuge für Simulationen, doch sie variieren unabhängig –, ein Desktop-Patientensimulator ist Simulation ohne VR, und eine AR-Überlagerung auf einem realen Instrument ist VR ohne Simulation. Die Achsen auseinanderzuhalten zählt für das Design: Zu entscheiden, Praxis risikofrei zu machen, ist eine andere Entscheidung als zu entscheiden, sie zu verkörpern, und beide tragen unterschiedliche Kosten, unterschiedliche Fehlermodi und unterschiedliche Evidenz. VR/AR ist die **Lieferschicht** für eine Simulation und ein enger Verwandter von [[game-based-learning|spielbasiertem Lernen]]; sie operationalisiert [[embodied-learning|verkörperte]] und [[situated-learning|situierte]] Darstellungen des Lernens und sitzt im Inneren von [[experiential-learning|erfahrungsbasierter]] und [[active-learning|aktiver]] Praxis.

KI prägt diese Modalität nun von beiden Enden. Sie *autorisiert* immersive Inhalte, denn [[generative-ai|generative KI]] verwandelt einen strukturierten Prompt in natürlicher Sprache in ein lauffähiges AR- oder VR-Artefakt, wodurch die spezialisierte Programmierfähigkeit zusammenfällt, die früher die Produktion kontrollierte. Und sie *bewohnt* die Umgebung, da [[agentic-ai|Agenten]], [[pedagogical-agent|pädagogische Agenten]] und [[rag|abgerufenes Domänenwissen]] Anleitung im Inneren liefern –, freihändig, in Echtzeit, verankert in Quellen, die der bzw. die Lernende nicht konsultieren kann, während er bzw. sie ein Headset trägt.

## Was die Modalität ergänzt

Der Fall für VR/AR ruht auf Präsenz und [[embodied-learning|Verkörperung]] statt auf Informationslieferung. Ein geteilter virtueller Raum kann auch Ko-Präsenz von Geografie entkoppeln: Ein VR-Klassenzimmer auf einer Echtzeit-Synchronisationsschicht brachte Lehrende und Studierende in denselben Raum und ließ sie dieselben 3D-Naturwissenschaftsmaterialien manipulieren, unabhängig vom Standort, mit einem Ziel von bis zu zwanzig Teilnehmenden. In einer einstündigen Sitzung mit 10 Studierenden auf einer Meta Quest 3 berichtete es gute [[usability-research|Usability]] auf der System Usability Scale und minimale Übelkeit durch [[simulation|Simulation]], während seine eigene Schwäche die Konsistenz der Nutzerschnittstelle war –, und seine Gestaltenden vermieden absichtlich die früheren Peer-to-Peer-Architekturen, deren Bildrate sich verschlechterte, wenn Teilnehmende hinzustießen, eine Erinnerung, dass Präsenz durch Ingenieurwesen begrenzt ist. Kontrolliertere Vergleiche sind nüchtern darüber, was die Oberfläche allein kauft: Eine Studie mit 24 Teilnehmenden zu technischer Mechanik fand, dass Mixed-Reality-Apps und physische Baukästen das [[student-engagement|Engagement]] gegenüber Klassenunterricht hoben, doch komplexe Visualisierungen für Lernende in jeder Bedingung schwierig blieben. Engagement ist der verlässliche Effekt; Verständnis ist es nicht.

## Generative KI als Autorenschicht

Die Barriere, die früher definierte, wer ein immersives Werkzeug bauen konnte, ist weitgehend gefallen. Unter Nutzung einer viertelementigen Promptstruktur –, **Werkzeuge, Anzeige, Handsteuerung, Optimierung** –, kann eine [[teacher-role|Lehrkraft]] oder ein Studierender ohne Coding-Hintergrund eine browserbasierte, handgesteuerte AR-Physiksimulation erzeugen, die als einzelne HTML-Datei läuft mit nichts außer einer Kamera, und sie dann verfeinern, indem er bzw. sie in einfacher Sprache beschreibt, was schiefging. Die Geste ist vom Touchscreen vertraut: Kneifen und Sprechen stimmt eine physikalische Größe statt ein Bild zu zoomen, daher hebt das vertikale Öffnen der Finger die Amplitude, und das horizontale verlängert die Wellenlänge und verschiebt die Lampe zum roten Ende des Spektrums. Dieselbe Struktur generalisiert: das Coulomb-Feld um eine Fingerspitze breitete sich durch den Raum aus, zwei Hände als entgegengesetzte Ladungen, und die Rechte-Hand-Regel für magnetische Kraft, gezeichnet auf der eigenen Hand des bzw. der Lernenden –, absichtlich **unspiegelnd** gerendert, denn Spiegeln würde genau die Regel invertieren, die gelehrt wird.

Das Pilotprojekt ist in gleichem Maße ermutigend und vorläufig. Mit 29 Medizinbildungs-Studierenden des zweiten Jahres in einem Einführungskurs zu Strahlungsphysik stimmten alle 29 zu, die Geste helfe ihnen, zu „fühlen“, was Wellenlänge ist (Mittel 4,52), Amplitudensteuerung erzielte die höchste Bewertung (4,59), 93% fanden die Steuerung der Welle in der Luft natürlich, und 86% berichteten, sich engagierter und fokussierter zu fühlen als beim regulären Lernen. Die Evidenz ist jedoch reine Wahrnehmung, einzelne Klasse und ohne Vergleichsgruppe –, daher ist die ehrliche Lesart, dass [[prompt-engineering|Prompt-Engineering]] die Produktionsbarriere entfernt hat, was die zugrunde liegende Frage nach Verkörperung *testbar* macht, nicht dass sie beantwortet wurde.

## KI im Inneren der immersiven Umgebung

Die zweite Richtung ist jene, in der KI aufhört zu autorieren und anfängt, im Inneren des Headsets zu lehren, und es ist die, in der [[rag|Retrieval-Verankerung]] tragend wird. Eine agentische immersive Trainingsplattform für Hochdosis-Brachytherapie baute einen digitalen Zwilling der Behandlungssuite –, anatomisch präzise Patientenmodelle, Katheter, Afterloader, Applikatoren –, damit Trainierende die räumliche Orientierung eines Applikators relativ zu Risikoorganen sehen konnten, ohne Abschirmraum, ohne aktive radioaktive Quelle und ohne die Datenschutzgefahren einer physischen Beckenuntersuchung. Ein wissensbewusster Assistent, verankert in [[medical-education|klinischen]] Leitlinien, lieferte freihändige Anleitung über ein dreistufiges Sprach-Interface (Headset-Mikrofon zu Backend-Transkription und Intent-Analyse zu räumlicher Sprache), was die Controller-Abhängigkeit während komplexer Manöver entfernt. Technisch funktionierte es: 3–5 Sekunden End-to-End-Latenz über 50 Monte-Carlo-Läufe, Kontextabruf über 0,93 und Antwortrelevanz 0,87 auf 52 von Fachleuten verfassten Frage-Antwort-Paaren, wobei ein medizinisches Embedding-Modell die Antwortvollständigkeit verbesserte.

Ihre Lücken bestimmen die aktuelle Grenze des Musters. Evaluation war objektive Metriken plus ein einzelner Domänenexperten-Nutzer, nicht Lernende; es gab kein automatisiertes [[assessment|Assessment]] oder [[adaptive-learning|adaptives Feedback]]; und der Assistent kann die Dokumente, die er erhielt, nicht übertreffen, daher sitzen institutionsspezifische Protokolle und seltene Szenarien außerhalb seiner Kompetenz. Mit anderen Worten, die Tutoring-Intelligenz im Inneren immersiver Umgebungen ist noch überwiegend **Anleitung**, nicht Messung –, und dieselbe Plattformarchitektur, mit [[llm|Modellinferenz]] auf ein lokales GPU-Backend ausgelagert, ist das, was freihändige Anleitung schnell genug macht, um überhaupt nutzbar zu sein.

Der klarste Versuch bis heute zu jener fehlenden Messung kommt aus einem beruflichen Designatelier statt aus einem klinischen Setting. In einem zwölfwöchigen Kurs zu Innengestaltung wurde eine VR-Umgebung (Headsets plus ein 3D-Modellierungswerkzeug) mit einem LLM-gestützten Assistenten, gerendert als digitaler Mensch, gegen konventionellen [[project-based-learning|projektbasierten]] Unterricht verglichen, wobei dem Assistenten je Phase eine klare Rolle zugewiesen wurde –, Ressourcenempfehlung und Aufgabenzerlegung, geschichtetes Fragen mit Wissenslandkarten, simulierte Designeffekte und Fehlererkennung, dann Diskurs-Protokollierung für die Lehrkraft ([[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2026]]). Über 63 gültige Antworten hinweg erzeugte die immersive-plus-Agent-Bedingung signifikant höhere Designfähigkeit (η²p = 0,138) und kreative Fähigkeit (η²p = 0,111), kognitives (d = 0,90) und verhaltensbezogenes (d = 0,75) [[student-engagement|Engagement]], und Motivation (d = 0,74) und Zufriedenheit (d = 0,69) –, wobei berichtete [[cognitive-offloading|kognitive Last]] *niedriger*, nicht höher, war (d = −0,52), was die Autoren dem Assistenten zuschreiben, der Such- und fachübergreifenden Integrationsaufwand kürzte. Zwei Grenzen hindern das daran, die Frage zu entscheiden: Ideen-Neuheit und [[affective-computing|affektives]] Engagement bewegten sich nicht, und jedes Ergebnis ist [[self-report-measures|Selbstauskunft]], ohne Artefaktbewertungen oder Headset-Protokolle.

Der Kontrast mit einem vergleichbaren Einsatz im Designunterricht ist lehrreich. Ein Architekturatelier, das eine [[generative-ai|GenAI-plus-Multinutzer-XR-Pipeline nutzte, fand *sinkendes]] Design[[self-efficacy|selbstwirksamkeitsvertrauen]] bei den Teams, die sie nutzten, und keinen Vorteil in blinden Expertengremium-Bewertungen. Der Unterschied zwischen beiden ist weniger die Hardware als die Orchestrierung: Die Berufsstudie legte die Phasenstruktur, die Rolle des Assistenten in jeder Phase und die Evaluationsrubrik vor der Intervention fest und maß produktive Fähigkeit getrennt von Ideen-Neuheit.

Die lehrkräftegerichtete Version desselben Musters ist jünger und zerbrechlicher. [[luminote-llm-vr-stage-lighting-education-2026|Liang et al. (2026)]] ließen eine Bühnenbeleuchtungslehrkraft ihre Absicht in eine VR-Szene sprechen, mit einem Laserpointer als räumlichem Anker, und ließen ein [[llm|LLM]] sie in von Lehrenden prüfbare räumliche Annotationen, ausführbare Beleuchtungsdemonstrationen und Bedarfs-Jargonerklärungen verwandeln. Über 55 Prompts und 531 generierte Aktionen hinweg war Assistenz am stärksten bei ausdrucksbezogenen, unterbestimmten Zielen (212 von 245 visuellen Effekt-Aktionen angewandt, 86,5%) und am schwächsten bei Anfragen auf Scheinwerferebene, wobei 26 der 28 abgelehnten Aktionen auf direktionale Referenzen wie „linkes Licht“ zurückgingen, die das Modell zum falschen Scheinwerfer auflöste –, Verankerung im räumlichen Bezugsrahmen der Szene, nicht Ausführbarkeit, war die bindende Einschränkung. Lehrende nutzten Vorschläge als einen [[human-in-the-loop-ai|kontrollierbaren Verfeinerungsprozess]] statt als eine Antwort: Auf 127 der 147 abgelehnten oder veränderten Aktionen (86,4%) folgte ein neuer Prompt, und nur auf eine eine manuelle Anpassung. Das warnendste Ergebnis der Studie ist repräsentational –, Annotationen, die Experten-Schlussfolgern externalisierten, richteten sich nicht verlässlich an dem aus, was Novizen verstanden, daher trägt immersive KI-Instruktion sowohl das Verankerungsproblem der Tutoring-Fälle oben als auch ein zweites, dass Lehrendenkompetenz und Lernendenverständnis nicht dasselbe Ziel sind.

## Was die Evidenz zeigt

Die stärkste Evidenz für VR/AR ist vergleichend und [[discipline-specific-aied|fachspezifisch]]. Eine [[meta-analysis-systematic-review|Metaanalyse]] von 33 experimentellen und quasi-experimentellen Studien (N = 3.181) zu aufkommenden [[ai-technologies|Technologien]] im Unterricht von [[english-education|Englisch als Fremdsprache]] fand einen kleinen bis moderaten Gesamteffekt (g = 0,38) und, darin, die **größten Effekte für VR/AR**, wobei Gewinne mit dem Bildungsniveau steigen und produktive Fähigkeiten (Sprechen, Schreiben) gegenüber rezeptiven begünstigen.

Die Gegenevidenz ist ebenso informativ. In der ersten Metaanalyse KI-basierter Interventionen für [[special-education|Studierende mit Behinderungen]] –, 29 Studien, 239 Effektstärken, mittlerer Gesamteffekt g = 0,588 –, erzeugten intelligente VR-Systeme g = 0,528, **nicht statistisch signifikant**, während Computersoftware 0,959 und Roboter 0,509 erreichten. Publikationsbias war vorhanden und Trim-and-Fill senkte die Gesamtschätzung auf g = 0,269. Das Muster ist nicht, dass Immersion scheitert, sondern dass ihre Effekte klein, heterogen und sensibel dafür sind, wie die jeweilige Intervention gestaltet und verglichen wurde.

Das klarste negative Ergebnis in der Wissensbasis kommt aus einem Atelier-Einsatz statt aus einem Vergleich von Modalitäten: In einem Architektur-Designatelier mit 27 Studierenden sanken Teams, die eine GenAI-plus-Multinutzer-XR-Pipeline nutzten, stärker im Design[[self-efficacy|selbstwirksamkeitsvertrauen]] (β = −1,675) und in der Ergebnis-Erwartung (β = −2,088) als Teams, die den normalen Kursarbeitsablauf bearbeiteten, ohne signifikanten Unterschied in den Experten-Bewertungen ihrer Präsentationen durch ein Gremium ([[genai-xr-architectural-design-education-2026|Xiao et al., 2026]]). Die Autoren erklären es als phasenabhängige Komplementarität mit echter Reibung –, GenAI für das Externalisieren tentativer Ideen, XR für räumliche und Maßstabsbewertung –, neben Kontroll-, Dimensions-Treue-, geteilte-Aufmerksamkeit- und Bewegungskomfort-Problemen, eine Erinnerung, dass immersives Werkzeug Interaktionskosten ebenso ergänzt wie Fähigkeit.

## Treue, Präsenz und die Authentizitätslücke

Wo immersive Praxis für interpersonale und prozedurale Fähigkeit genutzt wird, ist der begrenzende Faktor nicht visuelle Treue, sondern gefühlte Authentizität. Ein [[mixed-methods-research|Mixed-Methods]]-Review KI-gestützter Pflegesimulation (19 Studien, N = 1.253) fand KI wirksam für kognitives Wissen und affektive Ergebnisse, aber inkonsistent für komplexe psychomotorische Fähigkeiten, und benannte den Grund: eine **Authentizitätslücke**, die emotionale Resonanz, Erkennung nonverbaler Hinweise und taktile sowie physische [[summative-assessment|Untersuchungs]]dimensionen abdeckt. Ihre praktische Empfehlung ist ein **gestuftes Simulationskontinuum** –, KI ist gut geeignet für hoch strukturierte Ziele wie grundlegende Kommunikation und Anamneseerhebung, während fortgeschrittene psychomotorische und emotional komplexe Szenarien zu menschlichen standardisierten Patienten und klinischer Praktika gehören. Technische Instabilität verschärft das Problem: Verzögerungen der Spracherkennung injizieren fremde [[cognitive-offloading|kognitive Last]] und Angst, was Stabilität und Latenz zu Designhebeln statt zu Implementierungsdetails macht.

Dieselbe Logik erklärt, warum Präsenz nicht automatisch gut ist. Bewegungskrankheit, Inkonsistenz der Nutzerschnittstelle, Hardwarekosten und ungleicher Gerätezugang entscheiden, wer eine immersive Umgebung überhaupt nutzen kann, weshalb sich die [[equity-in-ai-education|Gerechtigkeits]]fragen der Modalität mit [[accessibility|Barrierefreiheit]] und [[inclusive-learning|inklusivem Lernen]] verbinden statt abseits davon zu sitzen.

## Verbundene Konzepte
- [[simulation]] — was immersive Umgebungen üblicherweise anzeigen; das Modell, nicht die Modalität
- [[embodied-learning]] — der Mechanismus, den die Modalität auszunutzen hat
- [[multimodal]] — Geste, Sprache und räumliche Eingabe als Lernkanäle
- [[situated-learning]]
- [[experiential-learning]]
- [[game-based-learning]]
- [[professional-training]] — das Setting, in dem immersive Praxis am stärksten etabliert ist
- [[generative-ai]] — die neue Autorenschicht
- [[prompt-engineering]] — wie Nicht-Programmierende immersive Werkzeuge bauen und verfeinern
- [[agentic-ai]]
- [[pedagogical-agent]]
- [[rag]] — Anleitung im Inneren des Headsets verankern
- [[intelligent-tutoring]]
- [[visualization]]
- [[medical-education]]
- [[accessibility]]
- [[inclusive-learning]]
- [[trust-calibration]] — Treue, und das Bewusstsein des bzw. der Lernenden für ihre Grenzen
- [[cognitive-offloading]] — Latenz und Instabilität als fremde Last
- [[edtech-platform]] — Synchronisation, Latenz und Präsenz an mehreren Standorten
- [[arts-design-and-media-education]]
## Verbundene Artikel

- [[genai-ar-physics-simulation-prompt-2026]] — four-element prompt generating hand-controlled AR physics simulations; 29-student pilot, perception-only evidence
- [[mixed-reality-engineering-learning]] — mixed-reality apps vs physical toolkits vs classroom in engineering mechanics; engagement up, complex visualization still hard
- [[medgame-llm-medical-education-gamification]] — gamified medical training with AI
- [[tech-enhanced-tabletop-cybersecurity-education]] — augmented tabletop scenarios in cybersecurity education
- [[genai-xr-architectural-design-education-2026]] — Generative AI and Extended Reality in Collaborative Architectural Design Education: An Exploratory Studio Study
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: immersive VR design studio with an LLM-backed teaching assistant, evaluated against traditional PBL (Jin et al. 2026)
- [[luminote-llm-vr-stage-lighting-education-2026]] — LumiNote: LLM-assisted multimodal instruction in VR stage lighting education, and where grounding broke down (Liang et al. 2026)
