---
title: ICAP-Rahmen
created: "2026-08-14T04:33:38-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
connected_faqs: [designing-ai-into-learning]
foundations: [learning-design]
pedagogy: [active-learning, cognitive-psychology, collaborative-learning, learning-theories]
technology: [educational-nlp, learning-analytics]
confidence: high
translation_of: concepts/icap-framework
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Das ICAP-Framework** (Interactive–Constructive–Active–Passive) — eine von Michelene Chi entwickelte Taxonomie kognitiven Engagements, die Verhalten von Lernenden in vier Modi der Wissensveränderung klassifiziert, geordnet von am wenigsten bis am meisten kognitiv engagiert: *passiv*, *aktiv*, *konstruktiv* und *interaktiv*. In der KI-Bildung bietet ICAP sowohl ein Designziel (Werkzeuge bauen, die konstruktives und interaktives Engagement hervorrufen statt passiven Konsum) als auch eine Evaluationslinse (messen, ob Lernende und KI-Systeme tatsächlich in den höheren Modi engagiert sind).([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

## Fragen zum Nachdenken

- Denken Sie an das letzte Mal, als Sie etwas durch ein Video oder Lesen „lernten". Das ICAP-Framework würde das passiv nennen. Was behalten Sie tatsächlich aus passivem Kontrast gegenüber dem Erklären an jemand anderen?
- ICAP ordnet Engagement von passiv über aktiv über konstruktiv zu interaktiv. Wo halten KI-Werkzeuge, die Sie genutzt haben, Lernende tendenziell – und zählt das Durchklicken durch adaptive Übung als echtes Engagement oder bloße Aktivität?
- Die Seite argumentiert, die folgenreichste Verschiebung sei die von Aktiv zu Konstruktiv – Erklärungen oder neue Artefakte erzeugen statt Wissen bloß anzuwenden. Warum könnte das Produzieren von etwas Neuem der Schritt sein, der Verständnis tatsächlich verändert?
- Eine Studie fand, dass menschliche Expertinnen und Experten KI-Modelle beim Labeln von Engagementstufen weit übertreffen. Wenn automatisierte Systeme Engagement systematisch unterschätzen, wie sollten wir „Engagement"-Metriken behandeln, die von KI generiert werden?
- ICAP zeigt, dass ein Werkzeug, das für Sie antwortet, Sie passiv hält, während eines, das promptet und fragt, Sie zu konstruktivem und interaktivem Engagement treibt. Welche Designwahl würden Sie für Ihre Lernenden treffen?
- Das Framework wird sowohl als Designziel als auch als Evaluationslinse genutzt. Wie könnten Sie ICAP in Ihrem eigenen Unterricht oder Design nutzen, um zu beurteilen, ob Lernende echt engagiert statt bloß aktiv sind?

## Einführung

ICAP gründet in der Annahme, dass *was Lernende tun* bestimmt, wie viel und was sie lernen. Chis Framework postuliert, dass sich die Natur der Wissensveränderung vertieft, während sich Engagement von passiv über aktiv über konstruktiv zu interaktiv bewegt – von Speichern über Aufmerken über Integrieren neuen Wissens mit Vorwissen zu Ko-Kreation von Wissen durch Dialog. Das macht ICAP zu einem mächtigen analytischen Werkzeug für KI in der Bildung, wo die zentrale Designfrage lautet, ob KI-Unterstützung kognitives Engagement der Lernenden stützt oder verdrängt.

## Die vier Modi

| Modus | Verhalten der lernenden Person | Natur der Wissensveränderung |
|-------|-------------------------------|------------------------------|
| **Interaktiv** | Dialog mit einer anderen lernenden Person oder einem Agenten, Bedeutung ko-konstruieren; z. B. eine Position verteidigen, [[collaborative-learning|kollaboratives Problemlösen]] | Neues Wissen durch gemeinsame, reziproke Aktivität ko-kreieren |
| **Konstruktiv** | Neue Ausgabe über das Gegebene hinaus erzeugen; z. B. sich selbst erklären, vergleichen, reflektieren, zeichnen | Neue Information mit Vorwissen integrieren, um neuartiges Verständnis zu produzieren |
| **Aktiv** | Material manipulieren oder auf es einwirken; z. B. Notizen machen, unterstreichen, innehalten zum Denken | Information aufmerksam beachten und speichern, manchmal ohne tiefe Integration |
| **Passiv** | Information ohne offene Handlung empfangen; z. B. einem Vortrag zuhören, lesen | Information speichern, mit begrenzter weiterer Verarbeitung |

## ICAP in der KI-Bildung

### Ein Designziel für KI-Werkzeuge

ICAP rahmt die zentrale Designfrage für KI in der Bildung neu: ein KI-Werkzeug, das *für* die lernende Person *antwortet*, hält sie in passiven/aktiven Modi, während ein Werkzeug, das *promptet, fragt und [[scaffolding|stützt]]*, Lernende zu konstruktivem und interaktivem Engagement treiben kann. Das richtet ICAP an [[constructivist|konstruktivistischer]] Pädagogik und an [[active-learning|Forschung zu aktivem Lernen]] aus.([[multimodal-learning-genai]])([[hingle-collaborative-ai-literacy-2025]])

### Eine Evaluationslinse für KI-Agenten

ICAP dient auch als Messrahmen. In einer Studie erweiterten Forschende ICAP auf eine 7-Punkte-Skala, um kognitives Engagement in kollaborativem Dialog zu charakterisieren, und verglichen dann trainierte menschliche Annotatorinnen und Annotatoren mit LLM-basiertem Labeln (In-Context-Learning, Zero-Shot-Prompting und reflexive Agenten). Menschliche Inter-Rater-Reliabilität (kappa = 0.906–0.998) übertraf LLM-Annotation (kappa = 0.541–0.609) weit, was ICAPs Rolle – und gegenwärtige Grenzen – in der automatisierten Engagementmessung für [[learning-analytics|Learning-Analytics]]-Pipelines unterstreicht.([[icap-cognitive-engagement-llm-agents]])

### Anleitung von Facilitation kollaborativen Dialogs

Weil interaktives Engagement der höchste ICAP-Modus ist, hilft das Framework, den Wert von KI-Facilitation in [[collaborative-learning|kollaborativer Online-Diskussion]] zu verorten. [[llm-facilitation-timing-online-discussions|Forschung zum Timing von LLM-Facilitation]] zeigt, dass *wann* eine KI in eine Diskussion interveniert, prägt, ob sie interaktive Wissens-Ko-Konstruktion stützt oder unterbricht – eine ICAP-informierte Warnung, dass autonome Moderationsagenten auf menschenähnliche Zurückhaltung kalibriert werden müssen statt auf übereifrige Facilitation.

### ICAP und Design von Learning Analytics

ICAP liegt Kritiken an flachen „Engagement"-Metriken zugrunde: mit einem Dashboard zu interagieren, indem man Filter klickt, ist *aktives*, nicht *interaktives* Engagement. Wirksame Learning-Analytics-Designs rufen Selbstbewertung und zweiseitigen Dialog hervor, statt bloß Daten anzuzeigen – eine Implikation, die direkt aus Chis Framework gezogen wird.([[interactive-learning-dashboards-engagement]])

### Der Aktiv→Konstruktiv-Übergang als entscheidender Schritt

Obwohl ICAP eine Hierarchie beschreibt, ist die folgenreichste Verschiebung für Lernen der Sprung von *aktiven* zu *konstruktiven* Modi (Chi & Boucher, 2023). Aktives Engagement (Wissen auf ähnliche-aber-nicht-identische Szenarien anwenden) bereitet Lernende vor, aber es ist konstruktives Engagement – Erklärungen, Zusammenfassungen oder neue Artefakte erzeugen –, das sie befähigt, neues Wissen zu kreieren. Das ist der Knackpunkt für KI in der Bildung: ein Werkzeug, das Lernende im aktiven Modus hält (z. B. Durchklicken durch adaptive Übung), mag produktiv aussehen, treibt sie aber nie in die konstruktive Erzeugung, die dauerhaftes Verständnis ergibt. Kollaborative und kompetenzfokussierte Interventionen, die den Aktiv→Konstruktiv-Sprung bewusst stützen, zeigen tendenziell die stärksten Zuwächse.([[hingle-collaborative-ai-literacy-2025]])

### ICAP als Signal für adaptives Scaffolding in intelligenten Tutoring-Systemen

ICAPs Modi können als *Zielzustände* operationalisiert werden, zwischen denen ein adaptiver Tutor wählt, um kognitives Engagement auf Grundlage eines sich entwickelnden Lernendenmodells zu stützen. In einem Logik-ITS wählten [[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al.]] dynamisch zwischen einem *aktiven* „Guided"-Worked-Example-Modus und einem *konstruktiven* „Buggy"-Beispiel-Modus. Im Vergleich von Bayesian Knowledge Tracing (BKT) gegenüber Deep Reinforcement Learning (DRL) und einer nicht-adaptiven Baseline über 113 Studierende verbesserten beide adaptiven Policies die Posttest-Leistung – aber auf unterschiedene Weise: BKT gab die größten Zuwächse bei Studierenden mit geringem Vorwissen (half ihnen aufzuholen), während DRL die höchsten Posttest-Punktzahlen unter Studierenden mit hohem Vorwissen produzierte. Das ist eine konkrete Demonstration, dass wirksames *Personalisieren* des ICAP-Modus eines intelligenten Tutors davon abhängt, das aktuelle Wissen der lernenden Person zu modellieren – und dass kein einzelner Modus und keine einzelne adaptive Methode zu jeder lernenden Person passt. Es verbindet die ICAP-Hierarchie direkt mit Design für [[adaptive-learning|adaptives Lernen]] und [[knowledge-tracing|Knowledge Tracing]].

### ICAP als Modell kognitiven Zustands zur Erzeugung menschenähnlicher Agenten

Über das Wählen von Aufgabenmodi hinaus wurde ICAP direkt in das *kognitive Modell* eines generativen Bildungsagenten eingebettet. [[cogevolution-student-cognitive-evolution-agent-2026|CogEvolution]] baut ein ICAP-basiertes „kognitives Tiefen-Perzeptron", das Eingaben auf eine Wahrscheinlichkeitsverteilung über die vier ICAP-Stufen abbildet und dies mit evolutionsinspirierten Zustandsupdates und Item-Response-Theorie-Gedächtnisabruf verschmilzt, um die kognitive Evolution einer lernenden Person zu simulieren (einschließlich Übergängen wie Verwirrung → Einsicht). Ablationen zeigen, dass das Entfernen des ICAP-Wahrnehmungsmoduls die Fähigkeit des Agenten zusammenbrechen lässt, flaches von tiefem Lernen zu unterscheiden – ein Beleg, dass die ICAP-Taxonomie als feinkörniges, internes Maß kognitiven Engagements für [[simulating-students|Simulation von Lernenden]] dienen kann, nicht bloß als externe Evaluationslinse.

### ICAP verankert Assessment reflexiver GenAI-Interaktion

ICAPs Betonung generativen, prozessbezogenen Engagements wurde von Assessmentrahmen übernommen, die bewerten, *wie* Studierende mit generativer KI lernen. [[assessing-student-drive-framework-2025|Das DRIVE-Framework]] richtet sein Kernkonstrukt – tiefe reflexive Interaktion mit GenAI-Ausgabe – explizit an der Art generativen Engagements aus, die ICAP als zu tieferem Lernen führend identifiziert, und nutzt es, um oberflächlichen Konsum von mühsamer, reflexiver Überarbeitung KI-generierter Inhalte zu unterscheiden. Das positioniert ICAP als theoretischen Anker für die Gestaltung und Messung bedeutsamer [[generative-ai|GenAI]]-Lerninteraktionen statt bloßer Nutzungsverfolgung.

## Implikationen für Design und Forschung

1. **Für die höheren Modi gestalten.** KI-Werkzeuge sollten Lernende prompten, zu erzeugen, zu erklären und zu dialogisieren – konstruktive und interaktive Aktivität –, statt passive Inhalte zu liefern oder als Antwortmaschinen zu agieren.([[multimodal-learning-genai]])
2. **Lernende über Modi hinweg engagieren.** Wirksamer [[ai-literacy|KI-Kompetenz]]-Unterricht engagiert Lernende auf mehreren ICAP-Stufen – passive Exposition, aktive Manipulation, konstruktive Erzeugung und interaktiven Dialog –, wobei der Modus gewählt wird, der zum Lernziel passt.([[hingle-collaborative-ai-literacy-2025]])
3. **Engagement ehrlich messen.** ICAP gibt Forschenden und Gestaltenden ein gemeinsames Vokabular, um echtes kognitives Engagement von bloßer Aktivität zu unterscheiden – ein Korrektiv zu flachem [[student-engagement|Engagement]].([[icap-cognitive-engagement-llm-agents]])
4. **Die Mensch-LLM-Annotationslücke beobachten.** Wenn automatisierte Systeme genutzt werden, um Engagement zu kodieren, muss ihre systematische Unterlegenheit gegenüber trainierten Menschen berücksichtigt werden.([[icap-cognitive-engagement-llm-agents]])

## Verbundene Konzepte

- [[active-learning]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[constructivist]]
- [[learning-design]]
- [[metacognition]]
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[limitations-in-aied-research]]

## Verbundene Artikel

- [[icap-cognitive-engagement-llm-agents]] — Erweitertes ICAP-Framework zur Messung von Engagement mit menschlicher gegenüber LLM-Annotation
- [[hingle-collaborative-ai-literacy-2025]] — Collaborative AI literacy across the four ICAP modes
- [[interactive-learning-dashboards-engagement]] — ICAP als Kritik an flachem Learning-Analytics-Engagement
- [[multimodal-learning-genai]] — ICAP and cognitive engagement in multimodal learning design
- [[llm-facilitation-timing-online-discussions]] — LLM facilitation timing in online collaborative discussions
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — ICAP cognitive-depth model in a generative student-simulation agent
- [[assessing-student-drive-framework-2025]] — ICAP-anchored assessment of reflective GenAI interaction
