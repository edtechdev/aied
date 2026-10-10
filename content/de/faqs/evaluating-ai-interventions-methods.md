---
title: "Welche Maße und Forschungsmethoden kann eine Lehrkraft nutzen, um KI-bezogene Interventionen zu evaluieren?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/evaluating-ai-interventions-methods
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

# Welche Maße und Forschungsmethoden kann eine Lehrkraft nutzen, um KI-bezogene Interventionen zu evaluieren?

**Passen Sie die Methode an die Behauptung an.** Wenn Sie wissen wollen, ob Studierenden eine KI-Aktivität *gefiel*, kann eine Befragung helfen. Wenn Sie wissen wollen, ob sie *gelernt haben*, nutzen Sie Leistungsmaße. Eine Befragung ist ein [[self-report-measures|Selbstauskunftsmaß]] – das richtige Instrument für Einstellungen und das falsche für Lernen, aus den Gründen, die auf jener Seite gesammelt sind. Wenn Sie wissen wollen, ob die KI *eine Verbesserung verursachte*, brauchen Sie eine glaubwürdige Vergleichsbedingung und vorzugsweise zufällige Zuweisung.

## Methodenoptionen

Die Seite [[research-methods-aied|Forschungsmethoden in AIED]] unterscheidet mehrere brauchbare Optionen:

- **Randomisierte Experimente** bieten die stärkste kausale Inferenz.
- **Quasi-experimentelle** Prä/Post- oder gematchte Gruppendesigns sind oft praktischer in intakten Klassen, stützen aber schwächere Kausalbehauptungen.
- **[[qualitative-research|Qualitative]]** Interviews, Fokusgruppen, Beobachtungen und Artefaktanalysen offenbaren Mechanismen und unerwartete Erfahrungen.
- **KI-gestützte qualitative Analyse** kann Interview- oder Beobachtungskorpora in Minuten reorganisieren, sodass [[chain-behind-claim-warrantability-2026|Begründbarkeit]] ebenso viel zählt wie Genauigkeit oder Offenlegung: protokollieren Sie die dokumentierten Reorganisationen, die eine Leserin oder einen Leser den Pfad von den Daten zur Behauptung inspizieren, anfechten und revidieren lassen.
- **[[mixed-methods-research|Mixed Methods]]** kombinieren Ergebnisbelege mit Erklärungen, warum Effekte auftraten.
- **[[design-based-research|Design-Based Research]]** ist brauchbar, wenn Lehrende eine Intervention in einem authentischen Kurs iterativ entwickeln und verfeinern.

Welchen Kanal Sie auch nutzen, nur drei Bedingungen machen eine Kausalbehauptung interpretierbar: eine **präzise beschriebene Behandlung**, eine **gut definierte Vergleichsbedingung** und ein **valides Maß dauerhaften Lernens**. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] prüfen 19 ChatGPT-in-der-Bildung-Vergleiche gegen genau diese Kriterien und finden, dass nur 4 (21%) alle drei erfüllen – 74% hatten eine gut definierte Behandlung, 42% eine gut definierte Kontrollgruppe, und 53% ein Ergebnis, das als Lernen qualifizierte. Ein [[generative-ai|Allzweckwerkzeug]], das neben neuen Aktivitäten, Feedback oder Schnittstellendesign eingeführt wird, konfundiert das Medium mit der Methode, sodass ein signifikantes Ergebnis nicht der KI zugeschrieben werden kann.

## Eine managebare Klassenraumevaluation

Für eine managebare Klassenraumevaluation ist ein brauchbares Minimum eine **Baselinemessung, die Intervention, eine unmittelbare Postmessung und eine spätere unbegleitete Messung**. Wo immer möglich, schließen Sie eine Vergleichsbedingung ein wie vorhandene Praxis, keine KI, uneingeschränkte KI versus gescaffoldete KI, oder zwei alternative Designs. Messen Sie begleitete Leistung und eigenständiges Lernen separat.

Die Synthese [[ai-ed-evaluation|Evaluation von KI in der Bildung]] empfiehlt Ergebnisse wie unbegleiteten Lerngewinn, verzögertes Behalten, Transfer auf eine neue Aufgabe, Qualität der Argumentation, [[misconceptions]], Feedbackumsetzung und Leistung nach Teilgruppen. Engagement, Zufriedenheit, KI-Nutzungsprotokolle, Selbstwirksamkeit und [[technology-acceptance-model|wahrgenommene Nützlichkeit]] können brauchbare sekundäre Maße sein, sollten aber nicht als Ersatz für Lernen behandelt werden. Arbeitsbelastung der Lehrkraft und Zeitersparnis sind ebenfalls legitime Implementierungsergebnisse.

Zwei Vorsichtsmaßnahmen gelten dafür, wie Ergebnisse gelesen werden. Erstens ist ein gemittelter Effekt aus der Literatur eine schwache Anleitung für einen einzelnen Klassenraum: [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026) Prüfung]] von 14 einflussreichen [[meta-analysis-systematic-review|Meta-Analysen]] fand, dass keine eine valide Grundlage für ihre Behauptungen bot – gepoolte [[learning-gains|„akademische Leistungs"]]werte vermischten Testpunktzahlen, Motivation, [[self-efficacy]] und Einstellungen zu einer Schätzung, berichtete Heterogenität war extrem (I² reichte von 77.2% bis 94.4% in den 13 Analysen, die sie berichteten, wobei 12 dieser 13 über 80% lagen), alle 14 bewerteten [[limitations-in-aied-research|Publikationsbias]] invalide, und 61% der zufällig geprüften Primärstudien trugen Validitätsprobleme, während die Statistiken, die zeigen würden, wie weit individuelle Ergebnisse tatsächlich streuen, weitgehend fehlten (nur vier Analysen berichteten Zwischenstudienvarianz und nur zwei ein Prognoseintervall, von denen beide Null einschlossen). Zweitens kann ein bequemer Wert das falsche Konstrukt messen: in [[zhang-platform-scores-miss-ai-teaching-agents-2026|einer Evaluation von acht KI-Lehragenten]] rangierte der vom Score der Plattform drittplatzierte Agent auf einer expertenvalidierten Rubrik zuletzt, weil Plattformwerte Studierendenleistung während der Interaktion indexierten statt die Unterrichtsqualität des Agenten. Behandeln Sie jedes einzelne Dashboardmaß als Hypothese, die gegen ein Maß zu validieren ist, das an die Fähigkeit gebunden ist, die Sie zu entwickeln beabsichtigen.

Dafür, was die aktuellen Belege zeigen und was nicht, und wo sie dünn bleiben, siehe [[does-ai-help-students-learn]] und [[research-gaps-aied]].
