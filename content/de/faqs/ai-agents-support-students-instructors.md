---
title: "Wie können KI-Agenten Studierende und Lehrende unterstützen?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Eine Anbieter-Demo läuft vierzig Minuten. Der Agent liest den Syllabus, entwirft das Quiz für nächste Woche, markiert drei Studierende, die die Lektüre nicht geöffnet haben, und bietet an, ihnen zu schreiben. Ihre Hochschulleitung will bis Ende des Monats eine Lizenzentscheidung.

Ein [[agentic-ai|Agent]] plant, ruft Werkzeuge auf, hält Kontext, zerlegt Arbeit in Teilaufgaben und passt sich über Züge hinweg an, was mehr ist als ein [[conversational-ai|Chatbot]]. Die Rollen auf Seiten der Studierenden und der Lehrenden, die das eröffnet, sind real. Die Evidenz zeigt nicht, dass mehr Autonomie mehr Lernen erzeugt: In der einzigen direkten Vergleichsstudie hier lagen ein Agent und ein Chatbot gleichauf. Setzen Sie Autonomie dort ein, wo ein Mensch die Ausgabe prüft, lassen Sie die Planung bei der lernenden Person, und bewerten Sie die Lehrqualität gegen Ihre eigene Rubrik.

## Die kurze Version

**1.** Benennen Sie die Aufgabe, bevor Sie das Produkt benennen.

**2.** Beginnen Sie auf der Seite der Lehrenden, wo eine Lehrperson die Arbeit ohnehin prüft.

**3.** Behandeln Sie zusätzliche Autonomie als Kosten, bis die Evidenz etwas anderes sagt.

**4.** Lassen Sie Planung und Beurteilung bei der lernenden Person, denn dafür existiert die Aufgabe.

**5.** Bewerten Sie den Agenten gegen Ihre Rubrik, und planen Sie eine Prüfung ohne Unterstützung ein, bevor der Pilot endet.

## Wählen Sie die Aufgabe, bevor Sie den Agenten wählen

[[agentic-workflows-education|Agentische Workflows in der Bildung]] benennt vier wiederkehrende Fähigkeiten: Reflexion, Planung, Werkzeugnutzung und Multiagenten-Kollaboration. Jede fügt eine Möglichkeit und zugleich Kosten hinzu, bei [[explainable-ai|Interpretierbarkeit]], Koordination, [[trust-calibration|Vertrauen]], Latenz und Aufsicht.

Die Rollen auf Seiten der Studierenden reichen von [[adaptive-learning|adaptiver]] Nachhilfe und Lernplanung über [[formative-assessment|formatives]] Feedback, angeleitetes [[problem-solving|Problemlösen]] und Übungsgenerierung bis zu Empfehlungen zu Voraussetzungen und reflexivem [[metacognition|metakognitivem]] [[prompt-engineering|Prompting]]. Die Rollen auf Seiten der Lehrenden umfassen Materialentwicklung, [[automated-question-generation|Fragengenerierung]] und -validierung, Feedback-Triage, Kurs-[[learning-analytics|Analytics]], Instructional Design, Ressourcenabruf und die Orchestrierung spezialisierter Subagenten.

Zwei davon sind früh sicherer, weil beide ein Artefakt erzeugen, das ein Mensch liest, bevor es Studierende lesen: ein Fragengenerator mit einem Validator und Entwürfe, die eine Lehrkraft bearbeitet.

## Beginnen Sie dort, wo ein Mensch die Arbeit ohnehin prüft

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], die erste [[rct|randomisierte kontrollierte Studie]] eines Mensch-KI-Systems in der Live-Nachhilfe, gab unerfahrenen Tutorinnen und Tutoren Echtzeithinweise, die aus dem Vorgehen erfahrener Tutoren stammten, über 900 Tutoren und rund 1.800 Studierende. Studierende von Tutoren mit Zugang erreichten um 4 Prozentpunkte häufiger Themenbeherrschung, steigend auf 9 Punkte bei den am schlechtesten bewerteten Tutoren, deren Studierende zu denen besser bewerteter Tutoren in der Kontrollgruppe aufschlossen. Es kostete etwa \$20 pro Tutor und Jahr, und die Analyse von über 550.000 Nachhilfenachrichten zeigte, dass Tutoren von Antwortgeben zu anleitenden Fragen übergingen. Das ist KI, die die [[teacher-role|Lehrperson]] erweitert.

Der Agent unterrichtete nicht die studierende Person. Er speiste einen Menschen mitten im Gespräch, und der Mensch entschied, was zu sagen war. Ein Mensch im Kreislauf und ein Ergebnis nahe an der Arbeit sind das, was das Resultat auf einen anderen Kurs übertragbar macht.

## Nehmen Sie nicht an, dass mehr Autonomie mehr Lernen kauft

[[ilieva-agentic-genai-higher-education-2026|Eine Studie mit 130 Studierenden in einem E-Commerce-Kurs]] fand, dass sowohl [[generative-ai|generative-KI]]-Chatbots als auch Agenten gegenüber traditionellem [[online-teaching-and-learning|E-Learning]] bei Lernen und [[personalized-learning|Personalisierung]] besser bewertet wurden, ohne signifikanten Unterschied zwischen Chatbot und Agent. Mehr Autonomie, kein Zusatzwert bei diesen Maßen.

Das Framework dieser Studie behandelt Agenten als begrenzte, menschlich beaufsichtigte Lernpartner, wobei Ziele, Prüfpunkte und abschließende Entscheidungen bei Menschen bleiben. [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] macht daraus eine [[governance|Governance]]-Regel: Autonomie sollte weder die Reife der Evidenz noch die Stärke verantwortlicher menschlicher Kontrolle übersteigen, und die Evidenz ist am stärksten bei Ergebnissen auf Artefaktebene und am schwächsten bei dauerhaftem [[learning-gains|Lernen]] und [[equity-in-ai-education|Gerechtigkeit]].

Das Risiko auf Seiten der Lernenden läuft in dieselbe Richtung. Ein Agent, der für eine studierende Person plant und überwacht, nimmt ihr die Übung, die [[self-regulated-learning|Selbstregulation]] aufbaut, und lädt zu [[cognitive-offloading|kognitiver Entlastung]] ein. [[agentic-ai-pedagogical-best-practice-2026|Best-Practice-Hinweise]] verlangen intentionale Reibung, ausblendendes [[scaffolding|Scaffolding]] und [[human-in-the-loop-ai|menschliche Aufsicht]]. [[desirable-difficulties|Produktive Reibung]] hat funktionierende Beispiele. Agenten des konstruktiven Konflikts, die mit einem schwachen Design streiten, verbesserten Designresultate in der geprüften Forschung. [[simulating-students|Simulierte Peers]] unterstützen [[collaborative-learning|kollaboratives Lernen]] und [[socratic-method|sokratisches]] Nachfragen, und [[medical-education|klinische]] [[simulation|Simulationen]] lassen Lernende üben, wo ein Fehler billig ist.

Der Test für all das: Was kann die studierende Person nach der Sitzung, das vorher der Agent getan hat? Urteil abzugeben kostet die studierende Person die [[agency|Übung]] im Umgang damit.

## Prüfen Sie den Agenten gegen Ihr eigenes Urteil

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Acht KI-Lehragenten, die über ein medizinisches Curriculum ausgerollt wurden]], wurden von plattformgenerierten Werten und von einer unabhängigen Expertenrubrik unterschiedlich gereiht. Der auf Platz drei gereihte Agent der Plattform kam bei der Lehrqualität zuletzt. Plattformwerte indizieren die Leistung der Studierenden, die sich aus Gründen bewegt, die nichts mit Lehre zu tun haben.

Fragen Sie, was eine Dashboard-Zahl zählt, wer die Rubrik dahinter geschrieben hat und wie ein niedriger Wert in studentischer Arbeit aussähe. [[pedagogical-safety|Pädagogische Sicherheit]] gehört in dieselbe Prüfung, denn eine Kette von [[pedagogical-agent|Agenten]] macht es schwer zu sagen, welche Komponente verantwortlich ist, wenn eine Antwort falsch ist.

## Planen Sie das Abschalten ein

Randomisierte Studien zeigen, dass kurze KI-Unterstützung die spätere Leistung ohne Unterstützung drücken kann, und das Intervall nach dem Entzug, [[cognitive-washout-ai-skill-decay-2026|kognitives Auswaschen]], ist fast vollständig ungemessen. Die Synthese hinter dieser Seite stützt sich auf eine [[meta-analysis-systematic-review|Scoping-Review]] von 474 Studien und findet die Arbeiten konzentriert auf [[higher-ed|Hochschule]], [[stem-education|MINT]], kurzfristige Designs und textbasierte Nachhilfe, wobei nur eine Minderheit ausdrücklich in Bildungstheorie gegründet ist. Ein Pilot, der endet, wenn die Lizenz endet, hat das falsche Fenster gemessen.

## Was Verwaltungen dabei falsch machen

Ein Agent ist ein aufgerüsteter Chatbot, der Zugewinn sollte sich also in den Ergebnissen zeigen. Im Vergleich mit 130 Studierenden schlugen beide KI-Bedingungen das E-Learning, und keine schlug die andere.

Das Dashboard reiht Lehrqualität. Es reiht die Leistung der Studierenden, und acht Agenten erzeugten eine Reihung, die den dritten und den letzten Platz gegenüber einer Expertenrubrik umkehrte.

Autonomie ist die Funktion, die man kauft. Die Verhältnismäßigkeitsregel läuft andersherum, und die Evidenz ist am dünnsten, wo die Autonomie am größten ist.

Zugang schließt die Gerechtigkeitslücke. Ungleicher Zugang zu leistungsfähigen agentischen Systemen kann sie vergrößern, und ein Agent reproduziert Bias aus Trainingsdaten im Maßstab.

## Was Ihnen entgegenkommen wird

**„Studierende lassen es einfach die Arbeit machen."** Manche werden das, und die Architektur entscheidet, wie leicht es fällt. Agenten, die für die studierende Person planen und entwerfen, laden dazu ein. Agenten, die einen Versuch verlangen und dann eine Frage stellen, nicht.

**„Die Evaluation des Anbieters sagt, dass es funktioniert."** Fragen Sie, was die Zahl zählt. Wenn es plattformgemessene Leistung der Studierenden ist, misst sie die Studierenden ebenso sehr wie den Agenten.

**„Niemand kann sagen, welcher Agent in einer Kette verantwortlich ist."** Das gilt für die meisten aktuellen Deployments. Benennen Sie eine Verantwortliche oder einen Verantwortlichen für die Kette, protokollieren Sie, welche Komponente welche Ausgabe erzeugt hat, und halten Sie einen menschlichen Prüfpunkt, bevor etwas in eine Studierendenakte gelangt.

## Was Sie diese Woche tun können

**1.** Schreiben Sie die Aufgabe und das Ergebnis, an dem Sie sie beurteilen werden, je einen Satz, bevor der nächste Anbietertermin stattfindet.

**2.** Bewerten Sie die Ausgabe eines Agenten gegen Ihre Rubrik an zehn echten studentischen Arbeiten, und behalten Sie die Werte.

**3.** Fügen Sie dem Pilotplan eine datierte, verantwortlich zugewiesene Aufgabe ohne Unterstützung hinzu.

## Wohin als Nächstes

[[developing-ai-tutor]] behandelt den Aufbau für Studierende vom Ziel bis zur Hilfeleiter, und [[evaluating-ai-interventions-methods]] behandelt, ob die Sache gewirkt hat. [[intelligent-tutoring]] und [[ai-literacy]] liefern das Designvokabular, das diese Seite voraussetzt.
