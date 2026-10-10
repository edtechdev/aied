---
title: Hilfesuche
created: "2026-08-06T10:20:04-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/help-seeking
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Hilfesuche** — der Prozess der lernenden Person, einen Unterstützungsbedarf zu erkennen und ihn strategisch anzufragen, und wie dieser Prozess sich in KI-gestützten Lernumgebungen abspielt. In [[ai-education|KI in der Bildung]] ist Hilfesuche zentral dafür, ob KI-Werkzeuge Lernen stützen oder untergraben: die *Qualität* der Hilfesuche (wann, wie und worum Lernende bitten) prägt Ergebnisse stark, und KI-Tutoren, Hinweise und [[pedagogy|pädagogische]] Agenten sind genau dafür gestaltet, produktive Hilfesuche hervorzurufen statt Antwortsuche.([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])


Proaktive Ansprache kann Hilfesuche erhöhen, ohne das Lernmaterial zu verändern. Ein vorregistriertes Experiment in stark belegten grundständigen Kursen kontaktierte Studierende über einen akademischen Chatbot und fand größere Inanspruchnahme von Tutoring und ergänzendem Unterricht; Mediationsanalyse schrieb 17.8% des Noteneffekts dieser erhöhten Hilfesuche zu (p = 0.041) ([[chatbot-outreach-course-performance-2026]]).

## Fragen zum Nachdenken

- Wenn Sie nicht weiterkommen, neigen Sie dazu, um eine direkte Antwort zu bitten oder um Orientierung, die Ihnen hilft, es selbst herauszufinden? Was, glauben Sie, tut jede Wahl mit dem, was Sie tatsächlich behalten?
- Forschung zeigt, dass Studierende oft beabsichtigen, mit KI zu lernen, aber standardmäßig um die Antwort bitten — eine „Absicht-Verhalten-Lücke“, die mit schlechterer Leistung verbunden ist. Warum könnten gute Absichten so leicht in Antwortsuche zusammenfallen?
- Ein dauerhafter „Hinweisknopf“ kann eine Lernaufgabe in eine Kopierübung verwandeln, indem er signalisiert, dass Hilfe immer da ist. Können Sie sich an einen Moment erinnern, in dem allzu leicht verfügbare Hilfe Sie das Denken überspringen ließ, das Sie tun mussten?
- Eine Studie fand, dass allein die Warnung an Studierende, eine KI könne Fehler machen, tatsächlich ihre Hilfesuche erhöhte. Wie könnte gesunde Skepsis verändern, wie Studierende sich mit einem Tutor einlassen, verglichen mit blindem Vertrauen?
- Kämpfende Studierende sind oft am wenigsten geneigt, unaufgefordert Hilfe zu suchen. Wenn die Studierenden, die Unterstützung am meisten brauchen, nicht von sich aus melden, wie sollten KI-Werkzeuge und Lehrende reagieren?
- Die Seite schlägt vor, Hinweise zu verzögern und die Designfrage von „ob“ zu „wie“ man Hilfe gibt zu verschieben. Wie sähe eine gut gestaltete Hilfserfahrung für Ihre Lernenden aus — und was würde sie tatsächlich annehmen lassen?

## Einführung

Hilfesuche ist ein etabliertes Konstrukt der Lernforschung, eng verbunden mit [[self-regulated-learning|selbstreguliertem Lernen]] und [[metacognition|Metakognition]]: Sie erfordert von Lernenden, das eigene Verstehen zu überwachen, eine Lücke zu erkennen, zu entscheiden, dass Hilfe nötig ist, und eine wirksame Bitte zu formulieren. Mit dem Aufstieg [[generative-ai|generativer KI]]-Tutoren hat Hilfesuche neue Bedeutung angenommen — und neue Fehlermodi. Lernende *beabsichtigen* oft, KI zum Lernen zu nutzen, bitten aber standardmäßig um direkte Antworten, eine Lücke, die Forschung in dieser Wissensbasis über Domänen und Altersgruppen hinweg dokumentiert. Das klassische Modell nimmt an, eine Bitte gelte Wissen, das der Bittenden fehlt. Nachfrage nach operativer Unterstützung kompliziert diese Annahme: über 4.093 Anfragen fragten mindestens 20.4% nach dem Status einer laufenden Einreichung statt nach Wissen, eine Klasse, die ein retrieval-gebundener Assistent nur 1.3% der Zeit bediente [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

## Produktive versus unproduktive Hilfesuche

Die zentrale Unterscheidung in der Literatur ist die zwischen Hilfesuche, die Lernen stützt, und Hilfesuche, die es umgeht.

### Unproduktive Verhaltensweisen der Hilfesuche

Forschung in dieser Wissensbasis identifiziert konkrete, beobachtbare Muster unproduktiver Hilfesuche, besonders in [[intelligent-tutoring|intelligenten Tutorsystemen]]:

- **Vorzeitige Hinweisanfragen** — um Hilfe bitten, bevor irgendein Lösungsversuch unternommen wurde. Sogar unsichere Studierende lernen mehr, wenn sie zuerst versuchen.([[lak2026-hint-button-unproductive-use]])
- **Oberflächliches Hinweislesen** — die Hinweise zu schnell durchgehen, um sie zu lesen (markiert bei einer Benchmark von etwa 4 Wörtern pro Sekunde), und oft direkt zum Bottom-out-Hinweis springen, der die Antwort enthüllt.([[lak2026-hint-button-unproductive-use]])
- **Antwortsuche statt Lernsuchen** — die KI bitten, die Antwort zu produzieren, statt zu erklären oder anzuleiten. In einer Studie mit 98 Neuntklässlerinnen und Neuntklässlern, die einen GenAI-Tutor nutzten, wurden Interaktionen von instrumentellen Bitten dominiert, mit fast keiner Überwachung oder Evaluation des eigenen Lernens — obwohl die Studierenden scaffoldete Unterstützung zuvor gewählt hatten. Diese **Absicht-Verhalten-Lücke** war mit *niedrigerer* Posttest-Leistung und höherer extrinsischer kognitiver Last verbunden.([[regulating-ai-tutor-adolescent-srl]])
- **KI vor jedem unabhängigen Versuch oder menschlichen Quelle konsultieren.** [[uneven-impact-generative-ai-student-learning-2026|Manikonda et al. (2026)]] messen diese Reihenfolge direkt als **frühe Abhängigkeit** — GenAI vor unabhängigem Denken, einer traditionellen Suche oder dem Erreichen einer Lehrkraft konsultieren — und finden sie verbunden mit größerem negativen Einfluss (β = .402, p = .004) sowie akademischem Nutzen (β = .301, p < .001) unter 118 Studierenden in KI-bezogenen Kursen. Der Zusammenhang mit Schaden fehlte bei geringer [[ai-literacy|Evaluationskompetenz]] und war bei hoher Evaluationskompetenz am stärksten (b = .688 bei +1 SD, p < .001), sodass die Studierenden, die KI-Ausgaben am besten beurteilen konnten, die höchsten Kosten dafür berichteten, sie zuerst zu konsultieren: die Wahl, *wen man zuerst fragt*, trägt einen Nachteil, den Geschicklichkeit im Bewerten der Antwort nicht ausgleicht. Es zeigt auch, dass KI für das Organisieren, Bewerten und Zerlegen von Problemen zu nutzen — **kognitive** statt frühe Abhängigkeit — das Muster ist, das mit positivem Einfluss verbunden ist, sodass der Fehlermodus der Hilfesuche einer der Sequenzierung ist statt des Fragens überhaupt.
- **Anhaltendes Fragen ohne Erholung** — Fragen ist zunächst produktiv, aber nicht unbegrenzt: Hilfeanfragen sind der am besten behebbare Typ von Stocken beim Einsetzen (47.0%), fallen aber am weitesten, sobald Unterstützung scheitert (12.5% bei Tiefe sechs oder mehr), sodass Beharrlichkeit, nicht die Anfrage selbst, das Signal ist, das zu verfolgen sich lohnt [[guided-ai-tutor-impasse-resolution-2026|Ahtisham et al. (2026)]].
- **Kämpfende Studierende sind am wenigsten geneigt, unaufgefordert Hilfe zu suchen** — die Engagement-Seite der Hilfesuche. In [[one-click-away-khanmigo-two-year-school-experiment-2026|einer zweijährigen Khanmigo-RCT (Oreopoulos & Low 2026)]] schrieb der mediane kämpfende Studierende den KI-Tutor selbst bei freiem Zugang und verpflichtender Übungszeit in nur ~17% der Fehlersitzungen an, meist mit blanken Antworten oder Klicks — konsistent mit dem bildungsökonomischen Befund, dass initiativesabhängige Interventionen die wenigsten der Studierenden erreichen, die am meisten profitieren würden. [[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK (Oreopoulos et al. 2026)]] zeigt, dass Inanspruchnahme stark auf die Reduktion von Reibung reagiert (Inanspruchnahme der ersten Sitzung stieg von 45% auf 83% nach Vereinfachung der Einschreibung), aber Einstieg ≠ anhaltende Teilnahme (Teilnahme blieb aussetzend).

### Warum unproduktive Hilfesuche dem Lernen schadet

Die **Affordance-Perspektive** erklärt einen zentralen Mechanismus: Wenn eine Oberfläche Hilfe durchgehend und auffällig verfügbar macht (etwa einen dauerhaften „Hinweisknopf“), signalisiert sie Lernenden, dass Hilfe immer da ist, und erzeugt eine unbeabsichtigte Affordance, die die Aufgabe in eine Kopierübung zusammenfallen lassen kann. Der schnelle Zugriff auf Bottom-out-Hinweise umgeht die aktive Schema-Konstruktion, die Lernen erfordert.([[lak2026-hint-button-unproductive-use]])

### Die Qualität der Hilfesuche ist messbar

Zwei einfache, interpretierbare Indikatoren — vorzeitige Hinweisanfragen und oberflächliches Hinweislesen — sind aus standardmäßigen Tutoring-Logs berechenbar und über Semester hinweg konsistent mit reduzierten [[learning-gains|Lernzuwächsen]] verbunden, selbst nach Kontrolle von [[prior-knowledge|Vorwissen]]. Das macht sie praktisch für [[learning-analytics|Learning-Analytics]]-[[visualization|Dashboards]] und Echtzeit-Intervention, anders als komplexe, maschinell gelernte „Gaming-the-System“-Detektoren.([[lak2026-hint-button-unproductive-use]])

## KI-Systeme gestalten, um produktive Hilfesuche zu fördern

### Scaffolding, wie Studierende fragen

Explizites Training in **auf Schlussfolgern fokussierter Hilfesuche** — schrittweise Hinweise und Verifikation bitten statt finaler Antworten — bringt bessere Ergebnisse als unkritische Abhängigkeit. In einer quasi-experimentellen grundständigen Statistikstudie führte geleiteter LLM-Zugang (mit Training in schlussfolgerungsorientierter Hilfesuche) zu stärkerer unabhängiger Leistung und besserer Kalibrierung der Selbstbewertung als unbeschränkter LLM-Zugang. Die Lehre: **LLM-Zugang allein ist eine unvollständige Intervention**; die Designherausforderung ist, *wie* Studierende KI nutzen zu scaffolden, damit sie als Argumentationspartnerin statt als Antwortbeschaffungswerkzeug funktioniert.([[guided-llm-scaffolding-independent-learning]])

Interaktionskosten sind Teil derselben Frage. [[penquiry-pen-based-llm-qa-2026|Rhee et al. (2026)]] identifizieren eine **Referenzielle Barriere** und eine **Expressive Barriere**, die stiftbasierte Lernende davon abhalten, ein [[llm|LLM]] überhaupt etwas zu fragen: Das Zeigen auf eine Diagrammregion oder einen Gleichungsterm kann in getippter Prosa nicht ausgedrückt werden, und der Aufwand der Formulierung trifft genau dann ein, wenn eine Frage am fragilsten ist. Ihr Penquiry-System löst Referenz, indem es Tuschemarken an Dokumentelemente schnappt, und erweitert spärliche Tusche-Schlüsselwörter durch Autovervollständigung zu vollständigen Anfragen; zwei iterative Studien mit je 16 Teilnehmenden fanden, dass der kognitive und physische Overhead der Anfrage signifikant sank. Ob geringere Fragekosten *bessere* Hilfesuche hervorbringen oder bloß mehr davon, bleibt offen, und die Autoren schlagen zeitlich adaptive Autovervollständigung vor — grundlegende Verifikation früh in einer Sitzung, höherstufige Prompts später — als Weg von reduzierter Reibung zu [[scaffolding|ausblendender Unterstützung]] statt einer dauerhaften Krücke.

Scaffolding kann auch innerhalb der Aufgabe geliefert werden statt vor ihr. [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et al. (2026)]] bauten HelpCoach, ein Add-on für Chat-Oberflächen, das bewertet, wie spezifisch eine Person um Hilfe bittet, und zu einer Überarbeitung anregt, wenn eine Frage zu vage ist, wodurch die Wissenskomponente und der Scaffolding-Typ explizit werden. In einer Between-Subjects-Studie mit 40 Hochschulstudierenden, die Webprogrammierung lernten, schrieben HelpCoach-Teilnehmende in ihren ersten Entwürfen einen signifikant höheren Anteil spezifischer Fragen als eine Voraufgaben-Trainings-Baseline (57.3% gegenüber 40.5%) und behielten eine Woche später signifikant mehr Wissen (d = 1.100), während der Spezifitätsunterschied bei der dritten Aufgabe nicht mehr signifikant war (43.7% gegenüber 32.1%). Die Autoren mahnen, dass der Behaltenszugewinn noch nicht gezielteren Chatbot-Antworten zugeschrieben werden kann.

Ein dritter Hebel für die Kosten des Fragens ist, *woher* die Hilfe kommt. [[course-specific-rag-help-seeking-higher-ed-2026|Gray und Hobbs (2026)]] bauten Beacon, einen kursspezifischen [[rag|retrieval-gestützten]] Assistenten, der in den freigegebenen Materialien eines einzelnen Programmiermoduls verankert ist, und evaluierten ihn mit 15 Informatikstudierenden und vier Wissenschaftlerinnen und Wissenschaftlern. 89% der Teilnehmenden bewerteten seine Antworten als stark mit den Kursmaterialien abgestimmt und 66.7% sagten, er stütte ihr Lernen statt es zu ersetzen, wenngleich nur etwa die Hälfte bis 60% Zugewinne an Verständnis oder Vertrauen berichteten. Die Motivation ist die Barriere, die dieser Abschnitt dokumentiert: 62.5% jener Studierenden sagten, sie vermieden manchmal, um Hilfe zu bitten, wenn sie sie brauchten, und 75% berichteten Angst, wenn ein Thema nicht einleuchtete, sodass ein privater, modulverankerter Kanal als erste Sprosse vor dem Ansprechen einer Lehrperson angeboten wird. Die interviewten Wissenschaftlerinnen und Wissenschaftler hielten das Gegenargument lebendig — sie schätzten, dass Beacon vollständige Lösungen zurückhielt, und sorgten sich, dass unbeschränkte Werkzeuge Studierende eine Entwicklungsstufe überspringen lassen —, weshalb das Design sich seinen Platz verdient, indem es sich weigert, die Arbeit zu vollenden.

### Vertrauen durch Transparenz kalibrieren

Ein Klassenzimmerexperiment mit 252 Studierenden fand, dass **Studierende vor KI-Fallibilität zu warnen die Hilfesuche erhöhte** in einem Mathematik-Tutoring-System. Transparenz über potenzielle Systemfehler verbesserte das Engagement der Lernenden mit dem System — was Hilfesuche mit [[trust-calibration|Vertrauenskalibrierung]] und [[hallucination-risk|Halluzinationsrisiko]] verbindet.([[ai-fallibility-warning-help-seeking]])

### Hinweis- und Scaffolding-Lieferung überdenken

Statt Hilfe zu entfernen, empfiehlt Forschung, neu zu konstruieren, wie sie geliefert wird:

- **Verzögerte Hinweisverfügbarkeit** — minimale Engagementzeit oder Lösungsversuche verlangen, bevor Hinweise (besonders Bottom-out-Hinweise) zugänglich sind.([[lak2026-hint-button-unproductive-use]])
- **Von *ob* zu *wie* verschieben** — die zentrale Designfrage ist, wie man Hinweislieferung an Prinzipien produktiven Kämpfens ausrichtet, nicht ob man überhaupt Hinweise gibt.([[lak2026-hint-button-unproductive-use]])
### Das Annahmeproblem in LLM-Tutoren

Reale Studierende **umgehen häufig das [[scaffolding|Scaffolding]]** eines [[conversational-ai|Chatbots]] — nicht notwendigerweise schädlich, aber oft, weil es ein Missverhältnis zwischen der pädagogischen Rahmung des Chatbots und den eigenen Lernzielen der Studierenden gibt. Evaluationspipelines müssen daher messen, nicht nur ob ein Tutor scaffoldet, sondern ob Studierende dieses Scaffolding *annehmen*, statt es anzunehmen.([[rethinking-scaffolding-llm-tutors]])

## Hilfesuche und selbstreguliertes Lernen

Hilfesuche ist integraler Teil [[self-regulated-learning|selbstregulierten Lernens]]: produktive Hilfesuche erfordert von Lernenden, Verstehen zu überwachen, zu beurteilen, wann Hilfe nötig ist, und geeignete Quellen zu wählen. In GenAI-Kontexten wird das noch anspruchsvoller, da Studierende auch [[agency|Handlungsfähigkeit]] über die KI ausüben und epistemische Wachsamkeit bewahren müssen, statt sich ihr zu fügen. Forschung in dieser Wissensbasis stützt die Notwendigkeit von [[scaffolding|Scaffolds]], die [[agentic-ai|agentischere]] und epistemisch proaktivere KI-Nutzung fördern, und hebt das Risiko [[cognitive-offloading|übermäßiger Abhängigkeit]] und [[cognitive-offloading|kognitiver Entlastung]] hervor, wenn Hilfesuche in bedingungslose Antwortsuche abgleitet.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

### LLM-vermittelte Hilfesuche als vierstufiger Prozess

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al. (2026)]] zeigen, dass LLM-Hilfesuche im alltäglichen STEM-Studium keine einzelne Handlung ist, sondern ein geschichteter, kontextabhängiger Prozess mit vier Stufen: (1) *entscheiden, ob Hilfe nötig ist* — Studierende versuchen Aufgaben zuerst unabhängig, um den Lernwert zu bewahren; (2) *wählen, wen man fragt* — ChatGPT als niedrigschwelliger erster Schritt, dann Peers für konzeptuelles Aushandeln, dann Lehrende für komplexe oder folgenreiche Fragen; (3) *die Art der Hilfe bestimmen* — von Hinweisen und Erklärungen über das Scaffolding von [[problem-solving|Problemlösen]] und das Straffen von Routinearbeit bis zum Ausweiten des Lernens; und (4) *die erhaltene Hilfe beurteilen* — selektives Vertrauen ausüben und KI-Ausgaben gegen Kursarbeit oder mit Menschen verifizieren. Entscheidend bevorzugten Studierende **instrumentelle Hilfesuche** (Verständnis verbessern) gegenüber **exekutiver Hilfesuche** (Lösungen beschaffen), eine Unterscheidung, die die Autoren vorschlagen, in neue SRL-für-LLM-Messitems zu adaptieren.

In vollständig online stattfindender [[english-education|Komposition]] ist die Verfügbarkeit des Werkzeugs nicht der Engpass. [[reed-resource-literacy-genai-composition-2026|Reed (2026)]] beobachtete, dass die Studierenden, die kämpften, nicht jene ohne Unterstützung waren, sondern jene, die nicht erkannten, wann Hilfe nötig war, welche Ressource zur Aufgabe passte, oder wie man Feedback beurteilt, sobald es ankam — und flüssige [[generative-ai|generative KI]]-Ausgabe wird leicht für autoritative Unterstützung gehalten. Ihre Antwort war, Hilfesuche *strukturiert* zu machen statt bloß verfügbar: verpflichtende Berührungspunkte, die Aufgabenanforderungen dekodieren, Ressourcen mit Begründung kartieren, Feedbackquellen vergleichen und den Kreis mit Reflexion schließen.

### Verhaltenskontext sichtbar machen: TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] bearbeiten den Verhaltensvorläufer der Hilfesuche in der [[cs-education|KI-gestützten Programmierbildung]]: menschliche Tutoren passen sich an beobachtbares Verhalten der Lernenden an, nicht nur an ihre expliziten Anfragen, aber KI-Tutoren fehlt dieser Kontext. **TutorTrace** ist ein Datensatz und eine Pipeline, die den Verhaltenskontext Lernender in Echtzeit aus niedrigschwelliger IDE-Telemetrie berechenbar macht (vier Einsätze, N=480; ~180K Ereignisse, 13.633 Verhaltenssegmente, 27 Kennzahlen) und eine Taxonomie der Lernendenaktivität *vor* der ersten KI-Anfrage, *zwischen* aufeinanderfolgenden Anfragen und *über* die Sitzung hinweg ableitet. Das ermöglicht Systemen zu klassifizieren, ob eine Anfrage **geleitete** Hilfesuche spiegelt (vorangegangen von unabhängiger Arbeit) oder **abhängige** Hilfesuche (keine unabhängige Arbeit) — AUROC=.717 bei zurückgehaltener Vorhersage —, und unmittelbar bevorstehende Anfragen vorherzusagen (AUROC=.726). Eine vorläufige Klassenzimmerevaluation fand, dass verhaltensbewusste Prompts die Intervalle zwischen Anfragen ohne unabhängige Arbeit von 50.0% auf 20.7% senkten. Das verbindet [[learning-analytics|Learning-Analytics]]-Telemetrie mit [[intelligent-tutoring|adaptivem Tutoring]] und zeigt, dass Verhaltenskontext im großen Maßstab operationalisiert werden kann, um *wie* Studierende Hilfe suchen zu scaffolden statt bloß auf ihre expliziten Fragen zu antworten.

## Folgerungen für Design und Forschung

1. **Hilfesuche-Affordanzen absichtsvoll gestalten.** Dauerhafte, auffällige Hilfe-Knöpfe können Umgehungsstrategien ermöglichen; Zugang verzögern und Lieferung strukturieren, um [[desirable-difficulties|produktives Kämpfen]] zu stützen.([[lak2026-hint-button-unproductive-use]])
2. **Die Hilfesuche selbst scaffolden.** Lernende in schlussfolgerungsfokussierte Anfragen trainieren (schrittweise Hinweise, Verifikation), statt anzunehmen, Zugang bedeute gute Nutzung.([[guided-llm-scaffolding-independent-learning]])
3. **Transparenz nutzen, um Vertrauen zu kalibrieren.** Vor KI-Fallibilität zu warnen kann angemessene Hilfesuche und Engagement erhöhen.([[ai-fallibility-warning-help-seeking]])
4. **Annahme messen, nicht nur Scaffolding.** Evaluieren, ob Studierende sich tatsächlich mit pädagogischer Rahmung einlassen, nicht nur ob der Tutor sie bereitstellt.([[rethinking-scaffolding-llm-tutors]])
5. **Überwachung und Handlungsfähigkeit stützen.** Hilfesuche-Scaffolds sollten [[metacognition|Metakognition]] und [[self-regulated-learning|selbstreguliertes Lernen]] stärken und gegen [[cognitive-offloading|übermäßige Abhängigkeit]] schützen.

## Verbundene Konzepte
- [[learners]] — Lernende: die Überblicksseite für die Konzepte auf der Seite der Lernenden
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[k-12]]
- [[higher-ed]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[affective-tutoring]]
- [[feedback]]
- [[active-learning]]
- [[agentic-ai]]
- [[student-support-and-success]] — institutionelle Ansprache und Unterstützungszuteilung, jenseits der Hilfesuche im Kurs

## Verbundene Artikel
- [[penquiry-pen-based-llm-qa-2026]] — Penquiry: A Pen-based Interactive In-situ Q&A System Leveraging LLMs
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[lak2026-hint-button-unproductive-use]] — Premature hint requests and superficial hint reading predict lower learning gains in an ITS
- [[ai-fallibility-warning-help-seeking]] — Warning about AI fallibility increases help-seeking in a math tutoring system
- [[regulating-ai-tutor-adolescent-srl]] — The intention-behavior gap in adolescent GenAI help-seeking and self-regulated learning
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding improves reasoning-focused help-seeking and independent learning
- [[rethinking-scaffolding-llm-tutors]] — The scaffolding/student-uptake mismatch in real-world LLM tutor deployments
- [[uneven-impact-generative-ai-student-learning-2026]] — Early reliance: consulting GenAI before independent thought, search, or an instructor predicts both benefit and harm (Manikonda et al. 2026)
- [[reed-resource-literacy-genai-composition-2026]] — Resource literacy in online composition: the bottleneck is recognizing when help is needed (Reed 2026)
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving
- [[guided-ai-tutor-impasse-resolution-2026]] — Examining Variation in How Guided AI Tutors Resolve Student Impasses
- [[student-query-demand-hybrid-ai-support-2026]] — What Students Actually Ask: Demand Structure and Automation Potential in a Hybrid Support System
