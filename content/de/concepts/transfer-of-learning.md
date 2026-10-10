---
title: Lerntransfer
created: "2026-05-07T18:02:28-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties, metacognition, scaffolding, transfer-of-learning]
technology: [intelligent-tutoring]
level: [k 12]
confidence: high
translation_of: concepts/transfer-of-learning
source_updated: "2026-10-01T09:59:06-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Lerntransfer** – das Ausmaß, in dem Wissen oder Fähigkeiten, die in einem Kontext erworben wurden (z. B. Praxis mit einem KI-Werkzeug), in einem anderen Kontext anhalten und anwendbar sind (z. B. unabhängige Leistung ohne das Werkzeug). In der [[ai-education|KI in der Bildung]] ist Transfer die zentrale offene Frage: ob die Leistungsgewinne, die Studierende *mit* KI-Werkzeugen zeigen, sich in dauerhaftes Lernen übersetzen, das sie *ohne* sie demonstrieren können.

## Fragen zum Nachdenken

- Hier ist ein frappierendes Muster, das die Seite dokumentiert: Studierende zeigen oft unmittelbare Gewinne bei KI-assistierten Aufgaben, doch diese Gewinne können verschwinden –, oder sich sogar umkehren –, wenn die KI entfernt wird. Warum könnte ein Werkzeug, das im Moment klar hilft, die Studierenden am Ende ohne es schlechter dastehen lassen?
- Erinnern Sie sich an etwas, das Sie mit einem Tutor, Taschenrechner oder Assistenten zu tun gelernt haben und dann allein tun mussten. Übertrug sich die Fähigkeit, oder fühlten Sie sich vom Hilfsmittel abhängig? Was war bei den Erfahrungen anders, die sich gut übertrugen gegenüber denen, die es nicht taten?
- Eine verbreitete Intuition ist, dass „Üben Üben ist“ –, dass eine Aufgabe mit Hilfe dieselbe Fähigkeit aufbaut wie sie allein zu tun. Wo könnte diese Intuition in die Irre führen, besonders wenn die Hilfe eine KI ist, die das Schlussfolgern für einen vollzieht statt einen hindurchzuführen?
- Die Seite zieht eine Unterscheidung zwischen „Effekten mit“ einer Technologie und „Effekten von“ ihr –, bessere Leistung bei der Nutzung des Werkzeugs gegenüber mehr Fähigkeit ohne es. Wenn Sie Lehrkraft, Designerin bzw. Designer oder Studierende bzw. Studierender sind: Was davon ist Ihr echtes Ziel, und woran würden Sie erkennen, dass Sie es erreicht haben?
- Die Evidenz legt nahe, dass es zählt, wie viel kognitive Arbeit Sie delegieren: Oberflächenaufgaben wie Grammatik zu entlasten schadet Transfer weniger als tiefes Schlussfolgern und Struktur zu entlasten. Denken Sie an das letzte Mal, als Sie KI bei einer Aufgabe nutzten. Welche „Schicht“ haben Sie delegiert, und was sagt Ihre Wahl darüber vorher, was Sie behalten würden?
- Die Seite schlägt Bedingungen vor, die positiven Transfer stützen könnten – [[pedagogy|pädagogische]] [[guardrails|Leitplanken]], ausblendende Unterstützung, Kalibrierung an die Bereitschaft des Lernenden. Wenn Sie ein KI-Lernwerkzeug entwerfen würden (oder dessen Nutzende wären): Worauf würden Sie bestehen, damit Gewinne bei der Nutzung zu dauerhafter Fähigkeit ohne es werden?

## Einführung

Lerntransfer ist ein fundamentales Anliegen in der Bildungs[[research-methods-aied|forschung]], und KI-Werkzeuge haben es dringend gemacht. Das definierende empirische Muster, das über Studien zu KI in der Bildung dokumentiert ist, ist ein **Transferparadox**: Studierende, die KI nutzen, zeigen typischerweise unmittelbare, messbare Gewinne bei Aufgaben, bei denen KI verfügbar ist, doch diese Gewinne bestehen oft nicht –, oder kehren sich sogar um –, wenn KI entfernt wird und Studierende ihr Verständnis unabhängig demonstrieren müssen. Dieses Muster verwickelt [[cognitive-offloading|übermäßige Abhängigkeit]], die Theorie der kognitiven Last und [[metacognition|Metakognition]] als die wirksamen Mechanismen und verbindet sich direkt mit Debatten über das Design von [[intelligent-tutoring|KI-Tutoring]].

Bereitschaft ist nicht Transfer: KI-assistierte Sprechpraxis war mit niedrigerer Sprechangst und höherer Bereitschaft assoziiert, mit Menschen zu sprechen, doch beobachtete keine Studie menschliches Sprechen, wodurch die Route von KI-Probe zu menschlicher kommunikativer Fähigkeit ein ungetesteter pädagogischer Vorschlag bleibt ([[ai-speaking-practice-communicative-readiness-2026|Wang & Li (2026)]]).

### Das Transferparadox

Studierende, die KI nutzen, zeigen typischerweise **unmittelbare, messbare Gewinne** bei den Aufgaben, bei denen KI verfügbar ist. Doch wenn KI entfernt wird:

- werden Effekte **gemischt oder negativ**
- scheitern Gewinne oft daran, sich auf **nicht bewertete Settings zu übertragen**
- können Studierende **vom Werkzeug abhängig werden** auf Kosten unabhängigen Schlussfolgerns

Die Evidenzbasis, synthetisiert im [[stanford-evidence-base-ai-k12-2026|Stanford Review zur Evidenzbasis zu KI in K-12]], ist konsistent über Domänen hinweg:

| Studie | Kontext | Unmittelbarer Effekt | Transfereffekt | Mechanismus |
|---|---|---|---|---|
| Bastani et al. (2025) | Mathematik in der Oberstufe | Höhere Übungsnoten | **Etwa 17% schlechter** bei geschlossenen Abschlussprüfungen | Allgemeiner Chatbot erledigte die Arbeit |
| Chen et al. (2025) | Programmierhausaufgaben | Höhere Hausaufgabenscores | **Keine Verbesserung** bei unassistierten Prüfungen | [[llm]]-Tutor löste Aufgaben für Studierende |
| Lehmann et al. (2025) | Programmierung | Mehr abgedeckte Themen | **Verständnis geschädigt**; Lücken vergrößert | Allgemeine KI bei Lernenden mit geringem Vorwissen |
| Stadler et al. (2024) | Akademische Forschung | Schnellere Aufgabenbewältigung | **Schlechtere Schlussfolgerqualität** gegenüber Suche | Reduziertes kognitives [[student-engagement|Engagement]] |
| Kosmyna et al. (2025) | Essayschreiben | Höhere Essayqualität | **83% konnten sich nicht erinnern** an ihre eigenen Zitate | Ausgelagerte Autorschaft |

Alle fünf Studien zeigen ein Muster **negativen oder ausbleibenden Transfers**, wenn allgemeine KI die Intervention ist.

### Mechanismen, die Transfer untergraben

**Metakognitive Verdrängung.** KI, die Schlussfolgern vollzieht, reduziert Gelegenheiten für Studierende, ihr eigenes Verständnis zu überwachen und Strategien zu wählen. Studierende, die KI nutzten, waren weniger fähig, ihre Antworten zu erklären, wenn sie befragt wurden. Das verbindet sich mit der [[metacognition|Metakognition]]sforschung zum Selbstmonitoring und der [[vibe-compiler-metacognition-genai-agency-2026|Evidenz, dass strukturierte Kurse metakognitive Kompetenz erhöhen, während rohe LLM-Assistenten es nicht tun]].

**Unterdrückung germane Last.** Allgemeine KI reduziert nicht nur fremde (ablenkende) kognitive Last, sondern auch *germane* Last –, die produktive mentale Anstrengung, die dauerhaftes Wissen enkodiert. Leichteres Üben fühlt sich besser an, speichert aber schwächere Spuren. Siehe Theorie der kognitiven Last und die Unterscheidung zwischen [[stanford-evidence-base-ai-k12-2026|Tutoring-spezifischer und allgemeiner KI]].

**Übermäßige Abhängigkeit / Expertise-Umkehr.** Novizen, denen Antworten gegeben werden, bauen keine Schemata auf. Allgemeine KI liefert Antworten; wirksames Tutoring liefert strukturierte Anleitung. Wenn Novizen Abkürzungen auf Expertenniveau gegeben werden, wird Lernen gestört –, das Prinzip [[desirable-difficulties|wünschenswerter Schwierigkeiten]] in Umkehrung.

**Werkzeugabhängige Leistung.** Studierende können auf die spezifischen Anmutungen des KI-Werkzeugs optimieren ([[prompt-engineering|Prompt-Engineering]], Rückgriff auf generierte Codestruktur) statt Domänengeneralisierung aufzubauen –, eine Form [[cognitive-offloading-speedup-illusion|kognitiver Entlastung]], die produktiv fühlt, aber dauerhaftes Lernen verdrängt.

Ein geschütztes Klassenzimmer kann auch die falsche Gewohnheit lehren: [[shi-genai-experiential-learning-management-education-2026|Shi, Dai & Zhang (2026)]] warnen, Simulationen mit vorab festgelegten Regeln filterten Unsicherheit heraus und verstärkten Regeltreue, daher könnten in ihnen gebildete Entscheidungsgewohnheiten zu einer kognitiven Haftung werden, sobald Studierende in realen Settings auf konkurrierende Interessen und unvollständige Information treffen.
**Schichtempfindliche Entlastung und Transfer.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] testet Salomon, Perkins & Globersons Unterscheidung „Effekte mit gegenüber Effekten von Technologie“ direkt im [[generative-ai|GenAI]]-assistierten Schreiben: Ein achtwöchiges Quasiexperiment fand, dass offene KI-Kollaboration die gestützte Schreibleistung maximierte, aber die *niedrigsten* unabhängigen No-KI-Nahtransfer-Ergebnisse erzeugte, während begrenzte Unterstützung mit Reflexion unabhängige Kompetenz bewahrte. Tiefere Entlastungsschichten (Schlussfolgern, Struktur) sagten schlechteren Transfer vorher als Oberflächenschichten (Grammatik). Das ist direkte Klassenzimmerevidenz, dass die Leistungsgewinne der KI bei *mit*-Unterstützung sich nicht auf unabhängige Leistung bei *von*-Unterstützung übertragen –, und dass die Tiefe der Delegation, nicht nur ob KI genutzt wird, Transfer prägt.

Ein komplementäres, wenn auch konfundiertes Beispiel kommt aus der [[physics-education|Physik]]: Das Redesign eines Einführungskurses zu Kern- und Teilchenphysik an der Ruhr-Universität Bochum ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al., 2026]]) ließ Studierende kollaborative, ressourcenreiche Forschungsprobleme mit KI-Assistenz erfolgreich bewältigen, doch dieselben Studierenden erreichten im Mittel 20,6/80 in einer konventionellen schriftlichen Prüfung ohne Hilfsmittel, wobei mehrere ernsthafte Versuche Standardberechnungen nicht vollenden konnten. Die Autoren lesen das als Evidenz, dass assistierte Leistung sich nicht automatisch auf unaufgeforderte Leistung überträgt, und ihr Mittel ist absichtsvolles Design: die schriftliche Prüfung zum alleinigen Notenmaßstab zu machen, Übungsaufgaben vorab freizugeben, damit die Unterrichtszeit zu vorbereiteter Diskussion wird, und Vorkenntnisvorbereitung, durchgearbeitete Beispiele und Festigung rund um die erkundende KI-erlaubte Arbeit zu ergänzen.

## Bedingungen, die positiven Transfer stützen

Die begrenzte Evidenz legt nahe, dass Transfer möglich ist, wenn:

- **Pädagogische Leitplanken vorhanden sind** –, schrittweise Hinweise, [[misconceptions|Fehlvorstellungen]]-Adressierung, [[socratic-method|sokratisches Fragen]] (Tutoringvariante bei Bastani et al., 2025)
- **Traditionelle Strategien bewahrt werden** –, Notizenmachen gepaart mit KI-Nutzung verbesserte die Behaltensleistung (Kreijkes et al., 2026)
- **KI für [[formative-assessment|formative]], nicht [[summative-assessment|summative]], Praxis genutzt wird** –, Scaffolding beim Lernen, nicht beim Assessment
- **Das Übungsformat zum transferierten Wissen passt.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] finden, dass Gewinne aus Abrufübung häufig daran scheitern, sich auf unvertraute Probleme zu übertragen –, sie stärken das Gedächtnis für ein Verfahren, ohne seine Nutzung in neuen Kontexten zu ermöglichen –, und dass dauerhafte Verallgemeinerung auf neue Anwendungen erfordert, Üben mit durchgearbeiteten Beispielen zu paaren, die Fähigkeitsinduktion stützen; das optimale Beispiel-Problem-Verhältnis hängt daher davon ab, ob der Inhalt ein wortgetreuer Fakt oder eine verallgemeinerbare Fähigkeit ist.
- **Die Expertise des Lernenden kalibriert ist** –, das Werkzeug passt Unterstützung an die Bereitschaft an, statt standardmäßig volle Assistenz zu leisten

- **Transfer das Kriterium ist, das Lernen von Assistenz trennt.** [[yan-agentivism-learning-theory-ai-2026|Yan und Gašević (2026)]] bauen ihre Theorie menschlichen KI-Lernens rund um Transfer unter reduzierter Unterstützung: Assistierte Leistung zählt als Lernen nur, wenn die Fähigkeit anhält, sobald die Unterstützung zurückgezogen wird, was Transfer zum Test macht statt zu einem Ergebnis unter mehreren. Ihre Proposition ist direktional, dass das Verlangen von Quellenprüfung oder Begründung während KI-gestützter Arbeit die verzögerte Leistung verbessern sollte, während wiederholte reibungsarme Delegation ohne Rekonstruktion die Kalibrierung der eigenen Kompetenz durch Lernende schwächen sollte.
- **Anleitung mit der Arbeit ko-lokalisiert ist.** Gegen das Negativtransfermuster in der Tabelle oben fand ein Vergleich mit 36 Teilnehmenden, dass Lernende, die von einem Schreibtischroboter assistiert wurden, ihren Score bei 7,0/10 hielten, sobald Hilfe zurückgezogen wurde, während ChatGPT-assistierte Lernende auf 4,4/10 fielen, ein 60% höherer kurzfristiger Transfer-Score ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). Das Ergebnis ist kurzfristiger Transfer, gemessen etwa 35 Minuten nach der Aufgabe, ohne verzögerten Behaltensstest, bei 36 Teilnehmenden an einem Campus.

Das richtet sich an der Forschung zu [[intelligent-tutoring|KI-Tutoring]] aus, die zeigt, dass tutoringspezifische Werkzeuge mit pädagogischen Leitplanken allgemeine [[conversational-ai|Chatbots]] übertreffen, und an den [[scaffolding|Scaffolding]]prinzipien über ausblendende Unterstützung, wenn Kompetenz wächst.

### Unbeantwortete Fragen

1. **Zeitskala:** Verbessert sich Transfer über Wochen/Monate der Nutzung, oder vertieft sich Abhängigkeit?
2. **Domänenunterschiede:** Ist Transfer besser in wohlstrukturierten Domänen (Mathematik) gegenüber schlecht strukturierten Domänen (Schreiben)?
3. **Individuelle Unterschiede:** Leiden Studierende mit hohem [[prior-knowledge|Vorwissen]] weniger Transferverlust als Novizen?
4. **Fähigkeitsbehebung:** Können explizite „KI-aus“-Übungssitzungen Werkzeugabhängigkeit umkehren?

### Verbindungen zu verwandten Konzepten

Lerntransfer verbindet sich mit [[metacognition|Metakognition]] (Selbstüberwachung des Verständnisses), der Theorie der kognitiven Last (germane gegenüber fremder Last), [[desirable-difficulties|wünschenswerten Schwierigkeiten]] (produktives Ringen), [[scaffolding|Scaffolding]] (ausblendende Unterstützung), [[cognitive-offloading|übermäßiger Abhängigkeit]] (Werkzeugabhängigkeit) und [[sociocultural-learning|soziokulturellem Lernen]] (allgemeine KI operiert außerhalb der ZPD, indem sie Arbeit für Studierende vollzieht). Es ist die Brücke zwischen assistierter Leistung und echtem Lernen –, die Unterscheidung zwischen [[stanford-evidence-base-ai-k12-2026]] und die zentrale Frage für die Wirksamkeit von [[intelligent-tutoring|KI-Tutoring]].

## Verbundene Konzepte

- [[pedagogical-patterns]] — Das Ergebnis, nach dem die meisten dieser Sequenzen letztlich beurteilt werden
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
- [[productive-failure]] — Produktives Scheitern
## Verbundene Artikel
- [[yan-agentivism-learning-theory-ai-2026]] — A mid-range learning theory for human-AI interaction, with four mechanisms and six testable propositions (Yan and Gašević 2026)

- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Performance-learning distinction and durable transfer
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[rachatasumrit-example-problem-ratio-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[shi-genai-experiential-learning-management-education-2026]] — argues that protected classroom simulations can form decision habits that fail outside them

- [[ai-speaking-practice-communicative-readiness-2026]] — AI-assisted speaking practice raised willingness toward humans but no study observed human speaking
- [[aifred-desk-robotic-ai-guidance-2026]] — AIfred: Augmented Learning through Functional Robotic Embodiment at the Desk
