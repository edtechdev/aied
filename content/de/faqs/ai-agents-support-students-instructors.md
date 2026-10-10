---
title: "Wie können KI-Agenten Studierende und Lehrende unterstützen?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

# Wie können KI-Agenten Studierende und Lehrende unterstützen?

**KI-Agenten können über das Beantworten einzelner Fragen hinausgehen**, indem sie planen, Werkzeuge nutzen, relevanten Kontext behalten, Teilaufgaben koordinieren und Unterstützung über eine Folge von Interaktionen anpassen. Für Studierende gehören adaptive Tutorings, Studienplanung, [[formative-assessment|formatives]] Feedback, angeleitetes [[problem-solving|Problemlösen]], Übungsgenerierung, Simulation, Empfehlungen zu Voraussetzungen und reflektierendes oder metakognitives [[prompt-engineering|Prompting]] zu den plausiblen Rollen. Für Lehrende können Agenten bei Materialentwicklung, [[automated-question-generation|Fragengenerierung]] und -validierung, Feedback-Triage, Kurs-[[learning-analytics|Analytics]], Instruktionsdesign-Workflows, Ressourcenabruf und der Orchestrierung spezialisierter Agenten helfen.

## Wiederkehrende agentische Fähigkeiten

Der Artikel [[agentic-workflows-education|Agentische Workflows in der Bildung]] beschreibt vier wiederkehrende agentische Fähigkeiten: **Reflexion, Planung, Werkzeugnutzung und Multi-Agent-Kollaboration**. Jede erweitert die Möglichkeiten, führt aber auch [[explainable-ai|Interpretierbarkeits-]], Koordinations-, Vertrauens-, Latenz- und Aufsichtsherausforderungen ein.

## Was KI-Agenten gut können (positive Implikationen)

- **Anhaltende, adaptive Unterstützung.** Anders als Single-Turn-[[conversational-ai|Chatbots]] können Agenten ein Lerngespräch über viele Turns aufrechterhalten – sich erinnern, was eine lernende Person weiß, Schwierigkeit anpassen und mehrstufiges [[scaffolding|Scaffolding]] sequenzieren. Das unterstützt [[adaptive-learning|adaptives]] und [[personalized-learning|personalisiertes]] Lernen im Maßstab.
- **Entlastung der Lehrenden.** Agenten können Materialien entwerfen, Fragen generieren und validieren (etwa ein Generator-Validator-Paar), Feedback triagieren und spezialisierte Sub-Agenten orchestrieren, wodurch Lehrende für höherwertige Interaktion frei werden.
- **Reiche Interaktion und [[desirable-difficulties|produktive Reibung]].** Multi-Agent-Klassenzimmer und simulierte Peers erzeugen vielfältige Dynamiken – peer-artigen Diskurs, konstruktive Uneinigkeit, Rollenspiel –, die [[collaborative-learning|kollaboratives Lernen]] und [[socratic-method|sokratisches Fragen]] unterstützen. Agenten, die hinterfragen statt zustimmen, können Lernende zu tieferem Überdenken drängen (konstruktiv-konfliktorische Agenten verbesserten in der Forschung Design-Ergebnisse).
- **Risikoarme Übung und Simulation.** Agentenbasierte [[simulation|Simulationen]] ([[simulating-students|simulierte Studierende]], [[medical-education|klinische]] Szenarien) lassen Lernende in sicheren, wiederholbaren Umgebungen üben, bevor sie in der Praxis anwenden.

## Zentrale Risiken und Vorbehalte (negative Implikationen)

- **Überautomatisierung kann Lernen aushöhlen.** Je mehr ein Agent automatisiert, desto weniger kognitive Arbeit leistet die lernende Person. Proaktive Agenten können Studierende als passive Konsumierende zurücklassen, die anstrengungsvollen Prozesse schwächen, die dauerhaftes Lernen aufbauen, und das Risiko von [[cognitive-offloading|Überabhängigkeit]] erhöhen.
- **Reduziertes metakognitives Engagement.** Wenn Agenten Planung und Monitoring übernehmen, entwickeln Lernende möglicherweise die [[metacognition]] und [[self-regulated-learning|Selbstregulation]] nicht, die Bildung aufbauen soll. Agenten sollten diese Prozesse hervorlocken, nicht ersetzen.
- **Fehlplatziertes Vertrauen und Verifikationslücken.** Autonome Agenten können plausible, aber unvalidierte Ausgaben erzeugen; Lernende und Lehrende können sie [[trust-calibration|übervertrauen]]. Robuste Verifikation und [[ai-literacy]] werden wichtiger, je mehr [[agency|Autonomie]] Agenten gewinnen.
- **Intransparenz und Rechenschaftspflicht.** Multi-Agent-Systeme erschweren [[human-in-the-loop-ai|menschliche Aufsicht]] – welcher Agent ist für einen Fehler verantwortlich, und wo greift ein Mensch ein? Koordinationsfehler und Persona-Drift können Verlässlichkeit und [[pedagogical-safety|pädagogische Sicherheit]] untergraben.
- **[[equity-in-ai-education|Gerechtigkeit]] und Bias.** Agenten können Bias aus Trainingsdaten im Maßstab reproduzieren, und ungleicher Zugang zu leistungsfähigen agentischen Systemen kann Ungleichheit vergrößern.

## Was die Belege bislang zeigen

Konkrete Ergebnisse – und Vorbehalte – häufen sich. [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]] – die erste [[rct|randomisierte kontrollierte Studie]] eines Mensch-KI-Systems im Live-Tutoring – gab Novizen-Tutorinnen und -Tutoren Echtzeit-Anleitung auf Expertenniveau, gewonnen aus der Argumentation erfahrener Tutorinnen und Tutoren: über **900 Tutoren und ~1.800 Studierende** hinweg beherrschten Studierende von Tutoren mit Zugang Themen mit **4 Prozentpunkten höherer Wahrscheinlichkeit**, steigend auf **9 Prozentpunkte** bei den am niedrigsten bewerteten Tutoren, deren Studierende zu denen höherbewerteter Tutoren in der Kontrollgruppe aufschlossen. Es kostete etwa **\$20 pro Tutor jährlich**, und die Analyse von **550.000+ Tutoring-Nachrichten** zeigte, dass Tutoren sich dahin verlagerten, leitende Fragen zu stellen, statt Antworten zu verraten – ein klarer Fall von KI, die die [[teacher-role|Lehrperson]] erweitert statt ersetzt.

Aber „agentisch" ist nicht automatisch besser. [[ilieva-agentic-genai-higher-education-2026|Eine Studie mit 130 Studierenden in einem E-Commerce-Kurs]] fand sowohl [[generative-ai|GenAI]]-Chatbots als auch GAI-Agenten höher bewertet als traditionelles [[online-teaching-and-learning|E-Learning]] bei Lernunterstützung und [[personalized-learning|Personalisierung]] – doch **kein statistisch signifikanter Unterschied zwischen Chatbot- und Agentenbedingung**, sodass zusätzliche Autonomie sich nicht in zusätzlichen Lernwert übersetzte. Das vorgeschlagene Agentic-GAI-Supported-Learning-Framework behandelt Agenten deshalb als **begrenzte, menschlich überwachte Lernpartner**, mit Zielen, Kontrollpunkten und abschließenden Entscheidungen, die Menschen vorbehalten bleiben.

Zwei weitere Vorbehalte sind bedeutsam. Erstens **Wash-out**: randomisierte Studien zeigen, dass selbst kurze KI-Unterstützung spätere unbegleitete Leistung senken kann, und das Intervall nach dem Entzug – benannt [[cognitive-washout-ai-skill-decay-2026|cognitive washout]] – ist fast vollständig ungemessen, sodass die Dauerhaftigkeit agentenunterstützter [[learning-gains|Lernzuwächse]] unbekannt ist. Zweitens **Evaluation**: [[zhang-platform-scores-miss-ai-teaching-agents-2026|der Einsatz von acht KI-Lehragenten über ein medizinisches Curriculum]] hinweg ordneten plattformgenerierte Werte Agenten anders als eine unabhängige Expertenrubrik (der von der Plattform drittplatzierte Agent rangierte bei Unterrichtsqualität zuletzt), weil Plattformwerte Studierendenleistung indexieren statt die Unterrichtsqualität des [[pedagogical-agent|Agenten]]. Der [[governance]]-Review [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] fügt eine Verhältnismäßigkeitsregel hinzu – **Autonomie sollte nicht die Reife der Belege oder die Stärke rechenschaftspflichtiger menschlicher Kontrolle übersteigen** – und hält fest, dass die Belege für Artefakt-Ergebnisse am stärksten und für dauerhaftes Lernen und Gerechtigkeit am schwächsten sind. Für den Aufbau siehe [[developing-ai-tutor]]; für die Bewertung, ob er funktioniert, siehe [[evaluating-ai-interventions-methods]].

## Stand der Belege

Die Belegbasis ist noch im Entstehen. Die Synthese [[agentic-ai|Agentic AI in der Bildung]] der Wissensbasis stützt sich auf einen [[meta-analysis-systematic-review|Scoping Review]] von 474 Studien, hält aber erhebliche Konzentration in [[higher-ed|Hochschulbildung]], [[stem-education|STEM]], kurzfristigen Designs und textbasiertem Tutoring fest; nur eine Minderheit der begutachteten Arbeit gründete ihre Systeme explizit in Bildungstheorie, und belastbare langfristige Validierung im Unterricht bleibt begrenzt.

Die zentrale Designwarnung ist deshalb, größere Autonomie nicht mit besserem Lernen gleichzusetzen. [[agentic-ai-pedagogical-best-practice-2026|Agentic AI und pädagogische Best Practice]] empfiehlt intentionale Reibung, dynamisches Scaffolding und menschliche Aufsicht, damit Agenteninitiative nicht die eigene Planung, Überwachung, Urteil und Anstrengung der lernenden Person entfernt. Siehe auch [[intelligent-tutoring|Intelligent Tutoring]] und [[human-in-the-loop-ai|Human-in-the-Loop KI]].
