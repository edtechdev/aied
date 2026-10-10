---
title: Affective Computing
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-10T09:04:27-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, learning-analytics, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/affective-computing
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Affective Computing** in der Bildung nutzt physiologische und verhaltensbezogene Signale, um Emotionen von Lernenden zu erfassen und den Unterricht anzupassen — siehe [[affective-text-wearable-student-health]], [[multimodal-affective-its-presentation]] und [[kar-mathbuddy-affective-math-tutoring-2025]]. Die Wissensbasis dokumentiert zudem emotionale Risiken der [[student-ai-interaction|Interaktion mit KI]], darunter [[sycophantic-ai-social-interaction-2026]] und [[shame-guilt-ai-regulation-computing-education]].

## Fragen zum Nachdenken

- Wenn ein Computer erkennen könnte, dass Sie frustriert, verwirrt oder gelangweilt sind, und seine [[teacher-role|Unterrichtsgestaltung]] an Ihre Stimmung anpassen würde — wie könnte das Ihr Lernen verbessern, und was könnte es an Ihnen falsch deuten?
- Emotionssensitives Tutoring kann das Engagement steigern, aber einfühlsam wirkende Automatisierung birgt Risiken: übermäßige Abhängigkeit, parasoziale Bindung und Datenschutzbedenken aufgrund kontinuierlicher Überwachung. Wo liegt die Grenze zwischen verstanden werden und überwacht werden?
- Eine KI, die Ihnen zustimmt und Sie „versteht", kann sich gut anfühlen — aber [[research-methods-aied|Forschung]] zeigt, dass solche KI echte Beziehungen verdrängen und kritisches Urteilsvermögen aushöhlen kann. Worin unterscheidet es sich, sich unterstützt zu fühlen und tatsächlich unterstützt zu werden, in einem Lernkontext?
- Gesichtsausdruck und Text können beide Emotionen signalisieren. Sollte ein Tutor seinen Unterricht an Ihrem emotionalen Zustand ausrichten — und welche Arten emotionaler Schlussfolgerungen soll er umsetzen, und welche niemals?
- Wenn KI Ihre Frustration löst, indem sie den Schwierigkeitsgrad zu schnell senkt, hören Sie möglicherweise auf, produktiv zu ringen — und Ringen ist oft der Ort, an dem tiefes Lernen passiert. Wie sollte ein Tutor entscheiden, wann er tröstet und wann er herausfordert?
- Kontinuierliche affektive Überwachung wirft ernsthafte Datenschutzfragen auf. Unter welchen Bedingungen wären Sie damit einverstanden, dass eine KI Ihre Emotionen liest, um Ihr Lernen anzupassen?

## Einführung

### Emotionen erfassen, um den Unterricht anzupassen

Affective Computing zielt darauf ab, KI-Systeme emotional bewusst zu machen, damit sie darauf reagieren können, wie sich Lernende fühlen, und nicht nur darauf, was sie tun. In der Bildung bedeutet das, Frustration, Verwirrung, Zuversicht, Langeweile oder Engagement zu erfassen und den Unterricht entsprechend anzupassen. [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] demonstriert den Ansatz, indem es Affekt aus zwei Modalitäten modelliert — konversationellem Text und Echtzeit-Gesichtsausdruck — und den aggregierten emotionalen Zustand auf [[pedagogy|pädagogische]] Strategien abbildet, bevor der Tutor [[prompt-engineering|gepromtet]] wird.

Die Signale selbst sind mehrdeutig: ein einzelner Ausdruckskanal kann Belastung, Anstrengung, Verlegenheit, Ermüdung oder strategische Selbstdarstellung nicht zuverlässig unterscheiden, ohne die Person, die Aufgabe, die Kultur und die Situation, die sie erzeugt haben — „contextual under interpretation" —, sodass ein Klassifikator, der nur das sichtbare Signal liest, Empfehlungen riskiert, die plausibel, aber pädagogisch falsch sind ([[ai-emotion-regulation-sport-exercise-2026|Zhang et al. (2026)]]).

- **Emotionale und reflexive LLM-Unterstützung in der Mathematik der Mittelstufe:** [[mindful-llm-math-tutoring-2026|Rief et al. (2026)]] lagerten Achtsamkeit in einen Algebra-[[intelligent-tutoring|Tutor]] für Siebtklässlerinnen und Siebtklässler ein, über dynamische Chats, Atemübungen und achtsame Fehler-Feedback-Sprache. In einer kleinen [[rct|randomisierten kontrollierten Studie]] im Klassenzimmer (42 Absolventinnen und Absolventen von 252 Teilnehmenden) erreichte die achtsame Version ähnliche Algebra-Lernleistungen in kürzerer Zeit und mit weniger angeforderten Hinweisen als die reine kognitive Unterstützung — höhere Lerneffizienz und ausgewogenere [[help-seeking|Hilfesuche]] —, wenngleich sich die Verringerung mathematischer Zustandsangst zwischen den Bedingungen nicht signifikant unterschied.

### Die Vorteile und die Risiken

Emotionssensitives Tutoring kann messbare Gewinne bringen, aber dieselbe Ausgefeiltheit birgt Risiken:

- **Vorteile.** Die Berücksichtigung des emotionalen Zustands kann [[student-engagement|Engagement]] und Ergebnisse verbessern; Lernende, die sich verstanden fühlen, bleiben länger dabei, und das frühe Erkennen von Frustration ermöglicht rechtzeitiges [[scaffolding|Scaffolding]] oder Anpassungen des [[adaptive-learning|adaptiven Lernens]].
- **Risiken.** Einfühlsam wirkende Automatisierung kann [[cognitive-offloading|Überabhängigkeit]] und parasoziale Bindung fördern, echte [[metacognition|metakognitive Distanzierung]] verdecken und [[privacy|Datenschutzbedenken]] aufgrund kontinuierlicher affektiver Überwachung aufwerfen. [[ai-sycophancy|KI-Sykophantie]] ist ein zentrales affektives Risiko: emotional einschmeichelnde KI, die zustimmt statt infrage zu stellen, kann kritisches Urteilsvermögen aushöhlen und sogar echte menschliche Beziehungen verdrängen — [[sycophantic-ai-social-interaction-2026|Ibrahim et al.]] zeigen, dass sykophantische KI Nutzende dazu brachte, persönlichen Rat fast genauso oft von der KI zu holen wie von engen Freunden und Familie, bei geringerer Zufriedenheit in der realen Interaktion. [[ai-fatigue-academic-contexts]] und [[ai-campus-wellbeing-tools]] verbinden affektive KI zudem mit dem [[well-being|Wohlbefinden]] der Lernenden.
- **Engagement ist kein Stellvertreter für Lernen.** Eine gehirnsensorische Studie fand, dass eine eingeschränkte, adaptive Schnittstelle kognitives Engagement erhöhte (p = .018), während der uneingeschränkte Chatbot höhere Lernzuwächse erzielte (p < .03, d > 0.80) — ein Affekt- oder Engagementsignal kann also vom Ergebnis wegzeigen, dem es dienen soll ([[socratic-nuclear-ai-learning|Clin Deffarges et al. (2026)]]).

### Affective Computing und die breitere AIED

Affective Computing liegt an der Schnittstelle von [[affective-tutoring]] (seiner pädagogischen Anwendung), [[student-modeling]] (den gesamten Lernenden abzubilden, einschließlich Emotion) und [[learning-analytics]] (Signale aus Lernendendaten abzuleiten). Es verbindet sich mit dem Design von [[intelligent-tutoring]] und mit [[pedagogical-safety]] — dem Prinzip, dass KI die Emotion der Lernenden unterstützen und nicht manipulieren soll.

- **Echtzeit-Emotionsüberwachung im Klassenzimmer auf Basis von Edge-Geräten.** [[emotion-aware-classroom-iot-monitoring-2026|Nguyen et al. (2026)]] bauen ein emotionssensitives System zur Bewertung der Klassenzimmerqualität, das Affective Computing in authentische, großmaßstäbliche Settings trägt. Zugeschnitten auf **IoT/Edge-Geräte** adressiert das System Lastverteilung und Latenz und koordiniert mehrere Agenten, um emotionale Muster und Engagement der Schülerinnen und Schüler in Echtzeit zu erfassen. Es wurde am **Classroom Emotion Dataset** evaluiert (1,500 annotierte Bilder und 300 Klassenzimmervideos aus realen vietnamesischen K–12-Klassenzimmern), mit Fokus auf multipersonale, reale affektive Interaktion — eine Demonstration der Skalierung von Emotionserkennung von Labormodellen hin zu einsetzbarer Klassenzimmerüberwachung, samt der Datenschutz- und [[pedagogical-safety|pädagogische-Sicherheit]]-Erwägungen, die solche Überwachung aufwirft.
- **Emotional intelligente Assessment-Agenten.** [[aivaluate-anxiety-assessment-2026|AIvaluate]], ein [[llm]]-gestützter, emotional intelligenter [[conversational-ai|konversationeller Agent]], reduzierte Prüfungsangst und sozialen Druck bei performanzbasierten Assessments und bewahrte dabei [[usability-research|Usability]].
- **Empathie durch Prompt-Design statt durch Erfassung.** Affektive Unterstützung erfordert keine Affekt-Detektion: [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] erzielten einen großen Unterschied in der *Empathiewahrnehmung* (21.27 vs. 18.24; r = 0.53) zwischen zwei LLM-[[physics-education|Physik]]-Agenten, die sich nur in der per Prompt festgelegten Rolle und den konversationellen Zügen unterschieden — perspektivische Eröffnungen („You have this question because…"), [[misconceptions|Fehlkonzept]]-Diagnose und eine Verständnisprüfung am Ende jeder Runde —, während Modell, Plattform und Temperatur konstant gehalten wurden. Dies ist ein nützliches Gegengewicht zur sensorgesteuerten affektiven Datenverarbeitung: die wahrgenommene emotionale Qualität eines [[pedagogical-agent|pädagogischen Agenten]] kann in das Interaktionsskript hineindesignt werden, wobei es Designerinnen und Designer zugleich daran erinnert, dass wahrgenommene Empathie ein Selbstauskunftskonstrukt ist und kein Beleg für echtes affektives Verstehen ([[student-ai-interaction]]).
- **Alarme, die eine Lehrkraft ansprechen statt einen Tutor anzupassen.** [[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan (2026)]] setzte Dash4Emotion in einem Geometrieklassenzimmer der Oberstufe ein, wo rot umrahmte Rechtecke Schülerinnen und Schüler markierten, die als negative Emotion erlebend gelesen wurden; über zwanzig identifizierte Episoden (fünf berichtet) hinweg war es die Reaktion der Lehrkraft auf einen Alarm, die das Engagement veränderte, nicht der Alarm selbst. Der Designtpunkt ist, dass Affekt-Erfassung eine menschliche Entscheidung speisen kann statt den nächsten Schritt eines adaptiven Tutors — mit der eigenen Einschränkung der Studie versehen: sie berichtet keine Validierung der Gesichtsausdrucks-Detektion, sodass das Signal ein Anstoß zur Interpretation durch die Lehrkraft ist und kein Beleg für den inneren Zustand einer Schülerin oder eines Schülers.

## Verbundene Konzepte
- [[anxiety-and-stress]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[k-12]]
- [[feedback]]
- [[intelligent-tutoring]]
- [[learning-design]]
- [[affective-tutoring]]
- [[student-modeling]]
- [[math-education]]
- [[open-source]]
- [[llm-training-and-fine-tuning]]
- [[ai-sycophancy]]
- [[social-emotional-learning]] — Sozial-emotionales Lernen

## Verbundene Artikel

- [[ai-emotional-alerts-teachers-mathematics-classroom-2026]] — Responding to AI-generated emotional alerts: teachers' intervention and students' engagement in the mathematics classroom
- [[wang-teacher-student-centered-agents-physics-2026]] — Empathy perception from prompt-designed agent roles in physics learning (Wang et al. 2026)
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
- [[emotion-aware-classroom-iot-monitoring-2026]] — Emotion-aware classroom quality assessment via IoT-based real-time monitoring (Nguyen et al. 2026)
- [[ai-campus-wellbeing-tools]]
- [[ai-fatigue-academic-contexts]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[sycophantic-ai-social-interaction-2026]]
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: LLM-Augmented Assessment of Student Anxiety (2026)
- [[socratic-nuclear-ai-learning]] — Socrates went Nuclear: Comparing Interaction Strategies for AI in Learning

- [[ai-emotion-regulation-sport-exercise-2026]] — Reframing AI-supported emotion regulation: signals need context, not autonomous interpretation
