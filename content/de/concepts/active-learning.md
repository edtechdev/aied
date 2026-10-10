---
title: Aktives Lernen
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:25-04:00"
connected_faqs: [does-ai-help-students-learn, designing-ai-into-learning]
type: concept
foundations: [ai-education, learning-design]
pedagogy: [active-learning, scaffolding]
audience: [learners]
level: [higher ed, k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: concepts/active-learning
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

> **Aktives Lernen** — Unterrichtsansätze, die Lernende einbeziehen, Dinge zu tun und über das nachzudenken, was sie tun, statt passiv Information zu empfangen. In KI in der Bildung untersucht die Forschung zu aktivem Lernen sowohl, wie KI-Werkzeuge aktive Lernpädagogiken unterstützen können, als auch, wie aktives Engagement mit KI-Werkzeugen — statt passiven Konsums — Lernresultate beeinflusst.

## Fragen zum Nachdenken

- Sie haben „aktives Lernen" wahrscheinlich schon gelobt gehört. Aber lernt eine lernende Person, die durch ein Dashboard klickt oder eine generierte Antwort akzeptiert, wirklich aktiv? Was würde diese Tätigkeit in einem sinnvollen Sinne „aktiv" machen?
- Das ICAP-Rahmenwerk unterscheidet aktives, konstruktives und interaktives Engagement — nur die tieferen Stufen bauen dauerhaftes Wissen auf. Zu welcher Stufe des Engagements hat Sie das KI-Werkzeug gedrängt, mit dem Sie zuletzt etwas gelernt haben?
- KI kann aktives Lernen im großen Maßstab ermöglichen, aber schlecht gestaltete KI kann dem oder der Lernenden auch die kognitive Arbeit abnehmen. Wo haben Sie gesehen, dass KI eine lernende Person passiver statt engagierter gemacht hat?
- Eine EEG-Studie fand, dass interaktive Zusammenarbeit zwischen Studierenden und KI das höchste kognitive Engagement erzeugte, während volle Automatisierung es senkte. Warum könnte „Tun" mit KI „Zuschauen", wie KI die Arbeit macht, übertreffen?
- Teach-back — eine lernende Person erklären zu lassen, was sie versteht — macht Lücken wirksamer sichtbar als passives Wiederlesen. Wann kann die Aufforderung an eine lernende Person, es einer KI zu erklären, ein besserer Lernschritt sein, als die KI für sie antworten zu lassen?
- Aktives Lernen hängt von kalibriertem Scaffolding ab, das sich abschwächt, wenn Kompetenz wächst. Wie schwer ist es für einen KI-Tutor zu wissen, wann er zurücktreten soll — und was ist das Risiko, wenn er es nie tut?

## Einführung

Aktives Lernen ist ein grundlegendes Prinzip der Bildungsforschung, gegründet in [[constructivist|konstruktivistischen]] Theorien, die Lernende als aktive Konstrukteurinnen und Konstrukteure von Wissen positionieren. Im Kontext von KI in der Bildung gewinnt das Konzept doppelte Bedeutung: KI-Werkzeuge können aktives Lernen im großen Maßstab ermöglichen (durch [[intelligent-tutoring|interaktives Tutoring]], [[simulation|Simulationen]] und [[adaptive-learning|adaptives Feedback]]), aber schlecht gestaltete KI-Werkzeuge können es auch untergraben, indem sie [[cognitive-offloading|die kognitive Arbeit]] für Studierende übernehmen. Die Spannung zwischen KI-Unterstützung und aktivem kognitiven Engagement — untersucht in Artikeln wie [[lak2026-hint-button-unproductive-use|hint button unproductive use]] zu vorzeitiger Hinweisnutzung und [[efficiency-gain-illusion-ai-overreliance|efficiency gain illusion]] zu [[cognitive-offloading|Over-Reliance]] — ist ein zentrales Anliegen.

KI-ermöglichtes aktives Lernen tritt in dieser Wissensbasis in mehreren Formen auf: [[intelligent-tutoring|intelligente Tutoringsysteme]], die Studierende in Problemlösen einbinden statt Antworten zu geben, [[genai-mindtool-generative-learning|GenAI as a mindtool]]-Ansätze, in denen Studierende KI als Denkwerkzeug statt als Ersatz nutzen, [[test-driven-ai-assisted-learning|test-driven AI-assisted learning]], in dem Studierende KI-Interaktion treiben statt ihr zu folgen, und [[curiobot-llm-tutoring-exploratory-learning|exploratory learning environments]]. Das Konzept [[scaffolding|Scaffolding]] ist eng gekoppelt — wirksames aktives Lernen erfordert kalibrierte Unterstützung, die sich abschwächt, wenn Kompetenz wächst, was KI-Tutoren lernen müssen zu leisten.

## Wie aktives Lernen in der Forschung der Wissensbasis erscheint

- **Der Interaktionsmodus bestimmt kognitives Engagement.** [[ai-assisted-learning-modes-eeg|Eine EEG-Studie mit Oberstufen-Studierenden]] verglich die Modi Auto (KI löst selbstständig), Interaktiv (Zusammenarbeit zwischen Studierenden und KI mit Scaffolding) und Manuell (keine KI): **Interaktiv erzeugte das höchste kognitive Engagement und die höchste Aufgabengenauigkeit**, während Auto das Engagement senkte und Over-Reliance riskierte. Das gibt dem Argument, dass KI Studierende *tun* statt zuschauen lassen muss, eine neurophysiologische Dimension.

- **KI-unterstützte Erkundung ist nicht automatisch höherstufig.** Ein Quasi-Experiment mit 120 Studierenden der 8. Jahrgangsstufe fand, dass KI-unterstütztes [[inquiry-based-learning|forschungsbasiertes Lernen]] kreative mathematische Leistung und Einstellungen zur Mathematik erhöhte, aber keinen signifikanten Zuwachs im kritischen [[problem-solving|Problemlösen]] erzeugte — eine Mahnung, Zuwächse in Kreativität und Affekt nicht als Belege für tieferes Schlussfolgern zu lesen ([[mujib-ai-ibl-creative-math-2026|Mujib et al., 2026)]]).

- **Exploratives und simulationsbasiertes aktives Lernen.** [[supplynet-visual-exploratory-learning|SupplyNet]] nutzt eine kontextuelle Multi-Agent-LLM-Simulation, um visuelles exploratives Lernen in der Supply-Chain-Bildung zu unterstützen, und koppelt eine interaktive Netzwerkansicht mit einer verzweigten „Was-wäre-wenn"-Zeitleiste, damit Lernende kausale Dynamik verfolgen statt abstrakte Inhalte zu konsumieren. [[curiobot-llm-tutoring-exploratory-learning|Curiobot]] und [[genai-assisted-problem-posing-physics-2026|Probleme-Stellen in der Physik]] stellen ebenfalls lernendengerichtete Erkundung in den Vordergrund.

- **Strukturierte konversationelle Abläufe für aktive Wiederholung.** [[knowloop-confusion-to-consolidation-2026|KnowLoop]] strukturiert Nachbereitung nach der Vorlesung um drei Stufen — Recognize (Verwirrung vor Ort markieren), Resolve (Klärung) und Consolidate (Teach-back) — und zeigt, dass Teach-back Lernende dazu bringt, konzeptuelle Lücken zu artikulieren und offenzulegen, und dass kontextverankerte KI allgemeine KI für gezielte Unterstützung übertrifft. Teach-back instanziiert [[learning-by-teaching|Lernen durch Lehren]].

- **Aktives Lernen als projektbasierte, gemeinschaftliche Struktur.** [[academic-league-of-ai-2026|The Academic League of AI]] organisiert außercurriculare KI-Bildung um Wettbewerbsteams, Lerngruppen und KI-für-soziale-Wirkung-Projekte und verkörpert damit aktives und [[project-based-learning|projektbasiertes Lernen]] durch demokratische Studierendengovernance statt top-down-Curriculum.

- **Mindtools und generatives Engagement.** [[genai-mindtool-generative-learning|GenAI as a mindtool]] positioniert KI als Gerät, *mit* dem Studierende denken, statt als Quelle von Antworten, und bringt aktives Lernen in Übereinstimmung mit generativen Lerntheorien, in denen Lernende neue Ideen in bestehendes Wissen integrieren.

- **Um die Fehler des Modells herum gestalten.** Eine fünfschrittige Sequenz (unabhängige Analyse, ein standardisierter ChatGPT-Prompt, kritische Evaluation der Ausgabe, Verfeinerung und Klassendiskussion) funktioniert, weil die KI vorhersagbar falsch liegt: ChatGPT etikettiert die unelastische Nachfrage in einem Songtext als „perfectly elastic", und die Diskrepanz lehrt Studierende, Ausgaben zu validieren ([[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]).

- **Ein pädagogisch gestalteter KI-Tutor kann den aktiven Kursraum selbst übertreffen.** Ein Crossover-[[rct|RCT]] im Einführungskurs Physik in Harvard setzte einen eigens entwickelten KI-Tutor gegen die eigenen aktiven Lernstunden des Kurses — dieselbe forschungsbasierte Pädagogik, nicht eine Vorlesung — und fand signifikant mehr Lernen in weniger Zeit: Median im Post-Test 4,5 gegenüber 3,5, Effektstärke 0,63 per linearer Regression, mit einem Median von 49 Minuten Bearbeitungszeit gegenüber 60 im Kursraum ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]). Die Autoren schreiben das dem Design statt dem Medium zu, da der Tutor konstruiert wurde, um dieselben sieben forschungsbasierten Praktiken zu tragen wie der Kurs, und nur personalisiertes Feedback auf Anfrage und Selbstbestimmung des Tempos hinzufügte.

### Das ICAP-Rahmenwerk als organisierende Linse

Aktives Lernen wird präzise durch das [[icap-framework|ICAP-Rahmenwerk]] (Interactive–Constructive–Active–Passive) operationalisiert, das Verhalten von Lernenden nach Modus kognitiven Engagements und Wissenswandels klassifiziert. Unter ICAP erstreckt sich, was umgangssprachlich „aktives Lernen" genannt wird, tatsächlich über drei verschiedene, geordnete Stufen des Engagements: *active* (auf Material einwirken, etwa Notizen machen oder eine Aufforderung beantworten), *constructive* (neue Ausgabe jenseits des Gegebenen erzeugen, etwa sich selbst erklären oder zeichnen) und *interactive* (Bedeutung durch Dialog ko-konstruieren). Das zählt für KI in der Bildung, weil ein KI-Werkzeug sich als „aktiv" ausgeben kann, während es Lernende in den flachsten Modi hält: Durch ein Dashboard zu klicken oder eine generierte Antwort zu akzeptieren ist bestenfalls aktiv, nicht konstruktiv oder interaktiv. ICAP verschärft damit das zentrale Designziel aktiven Lernens — **Lernende von aktiv hin zu konstruktivem und interaktivem Engagement treiben** — und warnt vor KI-Systemen, die *für* die lernende Person *antworten*, was sie passiv hält.([[icap-cognitive-engagement-llm-agents]])([[hingle-collaborative-ai-literacy-2025]]) Das verbindet aktives Lernen unmittelbar mit [[icap-framework|ICAP-Rahmenwerk]], [[student-engagement|studentischem Engagement]] und [[collaborative-learning|kollaborativem Lernen]], dessen höchster ICAP-Modus interaktiver Dialog ist.

## Praktische Anleitung

- **Halten Sie die lernende Person in der Schleife.** Gestalten Sie KI-Interaktionen so, dass Studierende auf und mit Ausgaben einwirken (interaktive, gestützte Modi), statt fertige Antworten zu empfangen; volle Automatisierung senkt kognitives Engagement messbar.
- **Verankern Sie KI-Unterstützung in der eigenen Tätigkeit der Lernenden.** Verwirrungspunkte, lernendengerichtete Fragen und Probleme-Stellen geben personalisierte Einstiegspunkte für Wiederholung und Erkundung.
- **Nutzen Sie Teach-back und Erklärung.** Lassen Sie Lernende artikulieren, was sie verstehen; Lücken durch Erklärung sichtbar zu machen ist aktiver als passives Wiederlesen.
- **Koppeln Sie aktives Engagement mit kalibriertem Scaffolding.** Unterstützung sollte sich abschwächen, wenn Kompetenz wächst — [[scaffolding|Scaffolding]], das sich nie zurückzieht, kann selbst zu passiver Abhängigkeit werden.
- **Bevorzugen Sie Werkzeuge, die Denken sichtbar machen.** Explorative Simulationen, Mindtools und interaktive Problemräume unterstützen das kausale Nachverfolgen und vergleichende Schlussfolgern, die im Kern aktiven Lernens liegen.

## Verbindungen zu verwandten Konzepten

Aktives Lernen ist tief mit [[collaborative-learning|kollaborativem Lernen]] verbunden (viel aktives Lernen ist sozial), [[learning-by-teaching|Lernen durch Lehren]] (anderen erklären ist maximal aktiv), [[project-based-learning|projektbasiertem Lernen]] und [[experiential-learning|erfahrungsbasiertem Lernen]] (Lernen durch Tun in authentischen Kontexten), [[embodied-learning|verkörpertem Lernen]] (physisches Engagement), [[game-based-learning|spielbasiertem Lernen]] und [[simulation|Simulation]]. Es stützt sich auf [[scaffolding|Scaffolding]] und rechtzeitiges [[feedback|Feedback]] und wird von [[cognitive-offloading|Over-Reliance]] bedroht, wenn KI Anstrengung ersetzt. Gegründet in [[constructivist|Konstruktivismus]] und [[learning-theories|Lerntheorien]], erstreckt es sich über [[higher-ed|Hochschulbildung]], [[k-12|K-12]] und [[stem-education|STEM]].

Aktives Lernen ist einer der stärksten Hebel auf [[learning-gains|Lernzuwächse]] im KI-Zeitalter. Weil aktive Strategien Verständnis durch anstrengendes Tun aufbauen, sind sie am robustesten gegenüber Kurzschlüssen durch KI — und die Evidenz der Wissensbasis zeigt, dass diese Anstrengung zu bewahren dauerhaftes Lernen schützt, während sie KI absorbieren zu lassen es erodiert ([[generative-ai-reduced-study-time-math|reduzierte Lernzeit]], [[stromberg-generative-ai-learning-penalty-secondary-2026|the learning penalty]], [[lak2026-hint-button-unproductive-use|hint abuse]]). Lehrende, die Designs aktiven Lernens mit [[learning-gains|gemessenen Zuwächsen]] bei unassistierten Ergebnissen koppeln, bekommen das klarste Bild davon, ob KI-unterstützte Tätigkeit das Lernen tatsächlich verbessert hat.

## Verbundene Konzepte

- [[learning-gains]]
- [[problem-based-learning]]
- [[learning-by-teaching]]
- [[scaffolding]]
- [[constructivist]]
- [[learning-design]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[generative-ai]]
- [[feedback]]
- [[cognitive-offloading]]
- [[collaborative-learning]]
- [[learning-theories]]
- [[icap-framework]]
- [[student-engagement]]
- [[project-based-learning]]
- [[experiential-learning]]
- [[embodied-learning]]
- [[simulation]]
- [[game-based-learning]]
- [[help-seeking]]
- [[pedagogy]] — Überblicksseite: Pädagogien und Lehrstrategien in KI in der Bildung

## Verbundene Artikel

- [[kestin-ai-tutoring-outperforms-active-learning-rct-2025]] — AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting (Kestin et al. 2025)
- [[ai-pbl-computational-thinking-2026]]
- [[beck-genai-literacy-economics-hands-on]] — Active-learning GenAI framework for economics (Beck & Brodersen 2025)
- [[lak2026-hint-button-unproductive-use]]
- [[efficiency-gain-illusion-ai-overreliance]]
- [[neurodivergent-computing-students]]
- [[genai-mindtool-generative-learning]]
- [[test-driven-ai-assisted-learning]]
- [[curiobot-llm-tutoring-exploratory-learning]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[ai-assisted-learning-modes-eeg]] — EEG-Studie zu KI-Interaktionsmodi (interaktiv > automatisch)
- [[supplynet-visual-exploratory-learning]] — SupplyNet: visual exploratory learning via multi-agent simulation
- [[knowloop-confusion-to-consolidation-2026]] — KnowLoop: staged conversational post-lecture review
- [[academic-league-of-ai-2026]] — Academic League of AI: projektbasiertes aktives Lernen
- [[mujib-ai-ibl-creative-math-2026]] — KI-unterstütztes IBL und kreative mathematische Leistung
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Merkmale der Lernenden × Interaktionen mit TTS-Dialogformat
