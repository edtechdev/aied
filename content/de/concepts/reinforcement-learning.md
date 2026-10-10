---
title: Bestärkendes Lernen
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer]
pedagogy: [active-learning, scaffolding]
technology: [adaptive-learning, intelligent-tutoring, llm, personalized-learning]
ethics: [pedagogical-safety]
level: [special education, k 12, higher ed]
confidence: medium

translation_of: concepts/reinforcement-learning
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

> **Bestärkendes Lernen** trainiert KI-Tutoren und Agenten durch Belohnungssignale: [[special-r1-rl-special-education|Special-R1]], [[singh-eduqwen-pedagogical-rl-2026|EduQwen]], [[pedagogical-safety-rl|pädagogische Sicherheit durch RL]] und [[ai-coaching-rl-skill-development|RL-gestütztes Coaching für Kompetenzentwicklung]] richten RL an pädagogischen Zielen aus, einschließlich Sicherheit und Fertigkeitstransfer ([[intelligent-tutoring|intelligentes Tutoring]], [[agentic-ai|agentische KI]]).

## Fragen zum Nachdenken

- Ein RL-Tutor „lernt", was zu tun ist, indem er ein Belohnungssignal maximiert. Was könnte vor der Lektüre an einer KI falsch sein, die eine Belohnung optimiert – insbesondere wenn die Belohnung so etwas ist wie „Studierende klicken Weiter" oder „richtige Antwort jetzt"?
- Die Seite hält fest, dass Belohnungsdesign Bildungswerte kodiert. Wenn Sie die Belohnung spezifizieren müssten, die ein KI-Tutor maximieren soll, was würden Sie hineintun –, und was würde Ihre Belohnung versehentlich ignorieren oder falsch belohnen?
- RL trainiert Agenten, langhorizontige Sequenzen von Entscheidungen zu treffen (welcher Hinweis, wann die Schwierigkeit zu erhöhen, wie das Tempo zu gestalten), statt einzelne Antworten. Wie unterscheidet sich das von der moment-zu-moment Korrektheit, die man naiv belohnen könnte –, und warum zählt der Unterschied für Lernen?
- Sicherheitseinschränkungen können in RL integriert werden, sodass Belohnungsoptimierung nicht auf Kosten des Wohlbefindens der lernenden Person geht. Denken Sie an ein „hilfreiches" Verhalten, das ein belohnungsoptimierender Tutor zeigen könnte, das tatsächlich pädagogisch schädlich wäre (z. B. Antworten wegzugeben, um Abschluss aufzublähen). Wo würde Ihre Sicherheitslinie liegen?
- Belohnungsoptimierung kann produktiven Kampf bewahren oder zerstören, je nach Design. Ist „Studierende erledigen Aufgabe" aus Ihrer Erfahrung dasselbe wie „Studierende lernen"? Wo haben Sie eine KI gesehen, die für ersteres optimiert war, während sie letzteres untergrub?

## Einführung

### Wie bestärkendes Lernen in der AIED funktioniert

Bestärkendes Lernen (RL) trainiert einen Agenten, indem es gewünschtes Verhalten belohnt – der Agent lernt eine Policy, die kumulative Belohnung durch Versuch und Irrtum maximiert. In der KI in der Bildung wird RL genutzt, um Tutoragenten und Lernbegleiter zu trainieren, die Sequenzen von Entscheidungen treffen müssen (welchen Hinweis geben, wann die Schwierigkeit erhöhen, wie das Üben temporeich gestalten), statt einzelne Antworten. Das macht RL gut geeignet für [[adaptive-learning|adaptives Lernen]] und [[intelligent-tutoring|intelligentes Tutoring]], wo langhorizontale pädagogische Entscheidungen zählen.

### In der Wissensbasis dokumentierte Anwendungen

- **Pädagogisch ausgerichtetes RL.** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] nutzt eine RL-SFT-RL-Pipeline, um ein Modell zu trainieren, das *anleitet* statt antwortet, und richtet Belohnung an pädagogischen Zielen aus; [[special-r1-rl-special-education|Special-R1]] wendet RL auf Tutordesign für [[special-education|Sonderpädagogik]] an.
- **RL schlägt supervised fine-tuning bei pädagogischer Instruktionsbefolgung.** LearnLMs Training fand präferenzbasiertes RL signifikant wirksamer als SFT allein, weil Präferenzurteile kontextabhängige Unterscheidungen über lange Gespräche hinweg erfassen, die mit Instruktions-Labels versehene supervised Daten nur teilweise handhaben ([[learnlm-improving-gemini-learning|LearnLM Team (2025)]]).
- **Sicherheit und Fertigkeitstransfer.** [[pedagogical-safety-rl|Pädagogische Sicherheit durch RL]] integriert Sicherheitseinschränkungen in RL-basiertes Tutoring, sodass Belohnungsoptimierung nicht auf Kosten des Wohlbefindens der lernenden Person geht; [[ai-coaching-rl-skill-development|RL-gestütztes Coaching für Kompetenzentwicklung]] zeigt RL-getriebenes Coaching, das echte Kompetenzentwicklung und Transfer unterstützt.
- **Was eine Belohnung weglässt, prägt, wem sie nützt.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi et al. (2026)]] fanden, dass ein auf Testpunktzahl und Zeiteffizienz belohnter Deep-RL-Tutor eine BKT-Heuristik im Posttest erreichte (A = .58 jeweils, gegenüber 65.7), aber nur 4% der Trainingsprobleme der konstruktiven Reparatur fehlerbehafteter Beispiele zuwies und Studierende mit hohem Vorwissen begünstigte.
- **Simulation und Übung.** [[history-aware-student-simulation|Historienbewusste Studierendensimulation]] und [[q-learning-lab-rl-teaching|Q-Learning-Lab]] nutzen RL und simulierte Lernende, um [[pedagogical-agent|pädagogische Agenten]] zu trainieren und zu evaluieren, und verbinden RL mit [[student-modeling|Lernendenmodellierung]] und [[learning-analytics|Learning Analytics]].

- **Langhorizontiges, sicherheitsgewichtetes RL.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] optimiert ganze 60-Züge-klinische Begegnungen – weit über die ≤12-Züge-Horizonte gleichzeitiger Dialogsysteme hinaus –, und Training gegen adversariale simulierte Patienten mit einer sicherheitsausgerichteten Belohnung erhöhte die diagnostische Genauigkeit um 7.0% und senkte die Rate verpasster Red-Flag-Signale um etwa ein Drittel.

### Evidenz über das Feld hinweg

Ein PRISMA-standard-[[riedmann-reinforcement-learning-education-review-2026|systematischer Review zu RL in der Bildung (Riedmann, Schaper & Lugrin, 2025)]] sichtete 89 Studien (2000–2024) und fand ein scharfes post-2016-Wachstum in [[adaptive-learning|Adaptives-Lernen]]- und [[intelligent-tutoring|Tutoring]]-Anwendungen, konzentriert in STEM (besonders [[math-education|Mathematik]]). Er berichtet, dass modellfreies RL dominierte (n = 72) mit Q-Learning als häufigstem Algorithmus, dennoch klassisches RL konsistenter wirksam war als Deep RL (61% gegenüber 36% der Papiere mit signifikanter Überlegenheit); dass Anpassung in inhaltsplanende (n = 53) und leitungsbezogene (n = 36) Mechanismen zerfiel, wobei RL Baselines häufiger bei Anleitung schlug; und dass Lernzuwachs – besonders normalisierter Lernzuwachs – die wirksamste Belohnungsquelle war. Der Review warnt außerdem, dass über die Hälfte der Studien (n = 54) statistische Tests übersprangen, deshalb hat das Wachstum des Felds seine methodische Strenge überholt.

### Verbindung zur Wissensbasis

RL untermauert viel modernes [[agentic-ai|agentisches-KI]]- und [[intelligent-tutoring|Intelligentes-Tutoring]]-Design, wo der Agent langfristiges Lernen statt eine einzelne korrekte Antwort optimieren muss. Es verbindet sich mit [[llm-training-and-fine-tuning|LLM-Training und Feinjustierung]] (RL als Trainingsmethode), [[scaffolding|Scaffolding]] (Belohnungsdesign, das produktiven Kampf bewahrt) und [[self-regulated-learning|selbstreguliertem Lernen]] (Agenten, die Lernenden helfen, ihre eigene Strategie zu regulieren). Weil Belohnungsdesign Bildungswerte kodiert, ist RL-Forschung in der AIED eng an [[pedagogical-safety|pädagogische Sicherheit]] und an die Gerechtigkeitserwägungen [[equity-in-ai-education|gerechten]] Tutorverhaltens gebunden.

## Verbundene Konzepte

- [[intelligent-tutoring]]
- [[student-experience]]
- [[stem-education]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[active-learning]]
- [[edtech-platform]]
- [[higher-ed]]
- [[learning-analytics]]
- [[open-source]]
- [[pedagogical-safety]]
- [[llm-training-and-fine-tuning]]
- [[ai-technologies]] — Überblick: KI-Technologien und -Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)

## Verbundene Artikel

- [[history-aware-student-simulation]]
- [[q-learning-lab-rl-teaching]]
- [[singh-eduqwen-pedagogical-rl-2026]]
- [[residencyrl-clinical-rl-training-2026]]
- [[learnlm-improving-gemini-learning]] — LearnLM: RLHF for pedagogical instruction following
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[riedmann-reinforcement-learning-education-review-2026]]
