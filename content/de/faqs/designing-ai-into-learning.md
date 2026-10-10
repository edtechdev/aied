---
title: "Wie sollte KI in die Lernerfahrung designed werden?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
translation_of: faqs/designing-ai-into-learning
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

# Wie sollte KI in die Lernerfahrung designed werden?

**Beginnen Sie beim Lernziel und beim Lernprozess – nicht beim KI-Merkmal.** Das [[pedagogy|Pädagogiken und Lehrstrategien]]-Konzept der Wissensbasis betont, dass dieselbe KI je nach Instruktionsdesign als Scaffold, [[socratic-method|sokratischer]] Gesprächspartner, Feedbackpartner, [[simulation]] oder Antwortgenerator fungieren kann. Was zählt, ist, ob die Konfiguration die Aktivität erhält, die das beabsichtigte Lernen erzeugt.

## Ein starkes Standardmuster

Ein starkes Standardmuster ist: **lernende Person versucht → KI unterstützt → lernende Person bewertet oder überarbeitet → lernende Person demonstriert Verständnis.** Konkreter:

- Erhalten Sie [[productive-failure|produktives Scheitern]], wo es dem Lernen dient.
- Verlangen Sie eine erste Vorhersage oder Lösung, bevor Sie KI-Unterstützung anzeigen.
- Bevorzugen Sie Fragen, Hinweise, Beispiele, Gegenargumente und Feedback gegenüber sofortigem Abschluss.
- Verlangen Sie Verifikation folgenreicher Behauptungen.
- Beziehen Sie Gelegenheiten zur Erklärung und [[learning-by-teaching|Teach-back]] ein.
- Blenden Sie Unterstützung schrittweise aus, wenn Kompetenz wächst.
- Behalten Sie einige KI-freie Gelegenheiten, damit Lernende kalibrieren können, was sie selbstständig können.

Die Synthese [[reducing-ai-misuse|Reduktion von KI-Missbrauch]] empfiehlt spezifisch Zuerst-Denken/KI-Zweitens/Reflektieren-Sequenzen und absichtsvolle Evaluationskontrollpunkte.

## Passen Sie die KI-Rolle an das Niveau kognitiven Engagements an

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall und Panaderos Küchengerät-Analogie]] rahmt die Designfrage von *ob* Lernende [[generative-ai|generative KI]] nutzen zu *wie* jene Nutzung prägt, was sie werden. Die Abbildung von vier Nutzungen eines smarten Küchengeräts auf Lernfälle über das [[icap-framework|ICAP]]- und [[samr-model|SAMR]]-Framework gibt eine Designleiter: eine Aufgabe vollständig auszulagern, ohne Überarbeitung oder [[critical-thinking|kritisches Engagement]], ist passive Substitution und riskiert [[cognitive-offloading|Fertigkeitsverlust und Überabhängigkeit]]; [[prompt-engineering|Prompts verfeinern]] und Ausgaben kreuzverifizieren erfordert [[prior-knowledge|Vorwissen]] und [[self-regulated-learning|Selbstregulation]] (Aktiv/Augmentation); KI zum Brainstorming, Gliedern und Bewerten eigener Arbeit zu nutzen ist konstruktiv/modifizierend; und KI als echter Dialogpartner für Ko-Konstruktion und adaptives [[feedback]] ist interaktiv/Neudefinition. Die Designimplikation ist direkt: dasselbe Werkzeug ist auf einer Sprosse ein Bypass und auf der nächsten ein Scaffold, also spezifizieren Sie den beabsichtigten Modus, statt pauschalen Zugang zu gewähren.

## Sequenzieren Sie das Design, erlauben Sie nicht nur das Werkzeug

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec und Horvat]] analysierten die geplante Sequenz von 29.064 Lehr- und Lernaktivitäten über 554 Kurse und fanden eine sichtbare Designgrammatik: Aktivitäten vom Aneignungstyp sind der häufigste Einstiegspunkt und der größte Einzeltyp (über 20%), der Lerntyp folgt der beabsichtigten Bloom-Stufe (Aneignung fallend von ~50% auf Stufe 1 zu ~20% auf Stufe 6, Produktion steigend über 20% auf Stufen 5–6), und der stärkste Übergang ist Assessment → Diskussion (0.332). Zwei Lehren für KI-Design: KI gehört dorthin, wo die Sequenz einen spezifischen Aktivitätstyp beabsichtigt, statt am Ende angeflanscht, und weil Feedback mit [[collaborative-learning|Kollaboration]], [[group-work|Gruppenarbeit]] und [[teacher-role|Lehrkraft]]präsenz gehäuft auftrat, erzeugen Peer- und synchrone Strukturen die [[feedback]]-Momente, in die sich KI-Unterstützung einhängen sollte, statt sie zu ersetzen.

[[refrain-amplify-genai-curriculum-2026|Torres-Sahlis und Kollegens „erst zurückhalten, dann verstärken"-Framework]] schiebt das auf Programmebene: halten Sie ein generatives Werkzeug zurück, während sich eine Fähigkeit bildet, und stellen Sie es wieder her, sobald der Student es leiten, beurteilen, was es zurückgibt, und dafür einstehen kann, mit einer schwer zu fälschenden Kontrolle an jedem Scharnier. Geräte werden über ein bildendes-versus-[[cognitive-offloading|auslagerndes]]-Kriterium gesteuert – erlaubt, wo sie engagierte Arbeit unterstützen, ausgeschlossen, wo sie Aufmerksamkeit abziehen. Das verwandelt Auslagerungsentscheidungen in eine [[curriculum-design|Curriculum]]- und [[governance]]-Frage, die Kurs-Design vorhergeht statt ihm zu folgen.

## Konstruktive Abstimmung kommt zuerst

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes und Kollegens Diskursanalyse]] von 14 Stücken Hochschulanleitung warnt, dass effizienzgerahmte Ratschläge – generative KI zu nutzen, um Ergebnisse, Rubriken und Kursgliederungen zu entwerfen –, Abstimmung erzeugen, die *abgestimmt aussieht*, während sie die „konstruktive" Hälfte vernachlässigt: Ergebnisse, Aktivitäten und [[assessment]] als diskrete Posten statt als voneinander abhängige generiert. Ihr Gegenmittel ist Resequenzierung, nicht Verbot: Pädagogische Fachkräfte sollten konstruktive Abstimmung gut genug verstehen, um KI-Ausgaben zu leiten, zu befragen und abzulehnen, bevor sie irgendeinen Teil davon auslagern, weil eine auf Plausibilität gegründete Oberflächenakzeptanz-Gewohnheit dasselbe Bewertungsversagen ist, vor dem Lehrende Studierende warnen. Wo KI genutzt wird, argumentieren sie für institutionell begrenzte, [[rag|retrieval-gestützte]] Systeme, die um lokale Richtlinien und Qualitätsstandards konfiguriert sind, statt um generische internet-trainierte Standards.

## Das breitere Prinzip

Das breitere Prinzip in [[finkelstein-principled-ai-education-2025|dem Principled AI Education Framework]] ist, dass Technologie menschliche Fähigkeiten, die Bildung zu entwickeln beabsichtigt, erweitern statt verdrängen sollte. Siehe auch [[learning-design|Instruktionsdesign]], [[active-learning|aktives Lernen]] und [[scaffolding]].

Für die pädagogischen Standards, die entscheiden, ob eine designede Interaktion Lernen erhält, siehe [[reduce-ai-cheating]] und [[redesign-assessment-ai-era]]; dafür, wie dieselben Prinzipien die Software selbst beschränken, siehe [[designing-educational-ai-software]], und für ihre Übersetzung in die Architektur eines Tutors siehe [[developing-ai-tutor]].
