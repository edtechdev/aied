---
title: Hilfesuche
created: "2026-08-06T10:20:04-04:00"
updated: "2026-11-19T03:30:00-05:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/help-seeking
source_updated: "2026-11-19T09:58:08-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Hilfesuche** — der Prozess der lernenden Person, einen Unterstützungsbedarf zu erkennen und ihn strategisch anzufragen, und wie dieser Prozess sich in KI-gestützten Lernumgebungen abspielt. In [[ai-education|KI in der Bildung]] ist Hilfesuche zentral dafür, ob KI-Werkzeuge Lernen stützen oder untergraben: die *Qualität* der Hilfesuche (wann, wie und worum Lernende bitten) prägt Ergebnisse stark, und KI-Tutoren, Hinweise und [[pedagogy|pädagogische]] Agenten sind genau dafür gestaltet, produktive Hilfesuche hervorzurufen statt Antwortsuche.([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])

## Fragen zum Nachdenken

- Wenn Sie nicht weiterkommen, neigen Sie dazu, um eine direkte Antwort zu bitten oder um Orientierung, die Ihnen hilft, es selbst herauszufinden? Was, glauben Sie, tut jede Wahl mit dem, was Sie tatsächlich behalten?
- Forschung zeigt, dass Studierende oft beabsichtigen, mit KI zu lernen, aber standardmäßig um die Antwort bitten — eine „Absicht-Verhalten-Lücke“, die mit schlechterer Leistung verbunden ist. Warum könnten gute Absichten so leicht in Antwortsuche zusammenfallen?
- Ein dauerhafter „Hinweisknopf“ kann eine Lernaufgabe in eine Kopierübung verwandeln, indem er signalisiert, dass Hilfe immer da ist. Können Sie sich an einen Moment erinnern, in dem allzu leicht verfügbare Hilfe Sie das Denken überspringen ließ, das Sie tun mussten?
- Eine Studie fand, dass allein die Warnung an Studierende, eine KI könne Fehler machen, tatsächlich ihre Hilfesuche erhöhte. Wie könnte gesunde Skepsis verändern, wie Studierende sich mit einem Tutor einlassen, verglichen mit blindem Vertrauen?
- Kämpfende Studierende sind oft am wenigsten geneigt, unaufgefordert Hilfe zu suchen. Wenn die Studierenden, die Unterstützung am meisten brauchen, nicht von sich aus melden, wie sollten KI-Werkzeuge und Lehrende reagieren?
- Die Seite schlägt vor, Hinweise zu verzögern und die Designfrage von „ob“ zu „wie“ man Hilfe gibt zu verschieben. Wie sähe eine gut gestaltete Hilfserfahrung für Ihre Lernenden aus — und was würde sie tatsächlich annehmen lassen?

## Einführung

Hilfesuche ist ein etabliertes Konstrukt der Lernforschung, eng verbunden mit [[self-regulated-learning|selbstreguliertem Lernen]] und [[metacognition|Metakognition]]: Sie erfordert von Lernenden, das eigene Verstehen zu überwachen, eine Lücke zu erkennen, zu entscheiden, dass Hilfe nötig ist, und eine wirksame Bitte zu formulieren. Mit dem Aufstieg [[generative-ai|generativer KI]]-Tutoren hat Hilfesuche neue Bedeutung angenommen — und neue Fehlermodi. Lernende *beabsichtigen* oft, KI zum Lernen zu nutzen, bitten aber standardmäßig um direkte Antworten, eine Lücke, die Forschung in dieser Wissensbasis über Domänen und Altersgruppen hinweg dokumentiert. Das klassische Modell nimmt an, eine Bitte gelte Wissen, das der Bittenden fehlt. Die tatsächliche studentische Nachfrage umfasst etwas anderes: [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]] fanden, dass ein retrieval-gebundener Assistent nur 1,3 % der Anfragen zum Status einer ausstehenden Einreichung bediente.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

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

### Scaffolding für das Fragenstellen von Lernenden

Explizites Training in **schlussfolgerungsorientiertem Hilfesuchen** — dem Anfordern schrittweiser Hinweise und von Überprüfungen statt fertiger Antworten — führt zu besseren Ergebnissen als unkritisches Sich-Verlassen auf die KI. In einer quasi-experimentellen Studie mit Studierenden eines Statistikkurses führte ein angeleiteter LLM-Zugang (mit Training zu schlussfolgerungsorientiertem Hilfesuchen) zu stärkerer eigenständiger Leistung und einer besseren [[self-assessment|Kalibrierung der Selbsteinschätzung]] als ein uneingeschränkter LLM-Zugang. Die Lehre daraus: **LLM-Zugang allein ist eine unvollständige Intervention**; die Gestaltungsaufgabe besteht darin, das *Wie* der KI-Nutzung durch Studierende zu scaffolden, sodass die KI als Partnerin im Schlussfolgern wirkt und nicht als Werkzeug zum Beschaffen von Antworten.([[guided-llm-scaffolding-independent-learning|Amanlou et al., 2026]])

Interaktionskosten sind Teil derselben Frage. [[penquiry-pen-based-llm-qa-2026|Rhee et al. (2026)]] identifizieren eine **referenzielle Barriere** und eine **expressive Barriere**, die Lernende mit Stift davon abhalten, einem [[llm|LLM]] überhaupt eine Frage zu stellen: Auf einen Bereich eines Diagramms oder einen Term in einer Gleichung zu zeigen, lässt sich in getipptem Text nicht ausdrücken, und der Aufwand des Formulierens fällt genau dann an, wenn eine Frage am fragilsten ist. Ihr System Penquiry löst Referenzen, indem es Stiftmarkierungen an Dokumentelementen einrasten lässt, und erweitert knappe handschriftliche Stichwörter mittels Autovervollständigung zu vollständigen Anfragen; zwei iterative Studien mit jeweils 16 Teilnehmenden ergaben, dass der kognitive und physische Mehraufwand des Fragens signifikant sank. Ob geringere Fragekosten *besseres* Hilfesuchen hervorbringen oder lediglich mehr davon, bleibt offen, und die Autoren schlagen eine zeitlich adaptive Autovervollständigung vor — Überprüfung der Grundlagen zu Beginn einer Sitzung, Impulse auf höherem Niveau später — als einen Weg von reduzierter Reibung hin zu [[scaffolding|schrittweise zurückgenommener Unterstützung]] statt zu einer dauerhaften Krücke.

Scaffolding kann auch innerhalb der Aufgabe statt vor ihr bereitgestellt werden. [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et al. (2026)]] entwickelten HelpCoach, ein Add-on für Chat-Interfaces, das einschätzt, wie spezifisch eine Studierende oder ein Studierender um Hilfe bittet, und zu einer Überarbeitung auffordert, wenn eine Frage zu vage ist — dadurch werden die Wissenskomponente und der Scaffolding-Typ explizit gemacht. In einer Between-Subjects-Studie mit 40 Studierenden, die Webprogrammierung lernten, formulierten die HelpCoach-Teilnehmenden in ihren ersten Entwürfen einen signifikant höheren Anteil spezifischer Fragen als eine Vergleichsgruppe mit Training vor der Aufgabe (57,3 % gegenüber 40,5 %) und behielten eine Woche später signifikant mehr Wissen (d = 1,100), während der Unterschied in der Spezifität bei der dritten Aufgabe nicht mehr signifikant war (43,7 % gegenüber 32,1 %). Die Autorinnen und Autoren betonen, dass der Zugewinn an Behaltensleistung noch nicht auf zielgerichtetere Chatbot-Antworten zurückgeführt werden kann.

Ein dritter Hebel für die Kosten des Fragens ist, *woher* die Hilfe kommt. [[course-specific-rag-help-seeking-higher-ed-2026|Gray and Hobbs (2026)]] entwickelten Beacon, einen kursspezifischen [[rag|retrieval-augmentierten]] Assistenten, der auf den freigegebenen Materialien eines Programmiermoduls verankert ist, und evaluierten ihn mit 15 Informatikstudierenden und vier Lehrenden. 89% der Teilnehmenden bewerteten seine Antworten als sehr gut mit den Kursmaterialien übereinstimmend, und 66,7% gaben an, dass er ihr Lernen unterstützte, anstatt es zu ersetzen, obwohl nur etwa die Hälfte bis 60% von Zugewinnen an Verständnis oder Selbstvertrauen berichteten. Die Motivation ist eine dokumentierte Barriere: 62,5% dieser Studierenden sagten, sie vermieden es manchmal, um Hilfe zu bitten, wenn sie sie brauchten, und 75% berichteten von [[anxiety-and-stress|Angst]], wenn ein Thema nicht einleuchtete; ein privater, im Modul verankerter Kanal wird daher als erste Stufe angeboten, bevor man sich an eine Lehrperson wendet. Die interviewten Lehrenden hielten das Gegenargument lebendig — sie schätzten, dass Beacon vollständige Lösungen zurückhielt, und befürchteten, dass uneingeschränkt nutzbare Werkzeuge Studierende eine Entwicklungsstufe überspringen lassen — und genau deshalb verdient das Design seinen Platz dadurch, dass es sich weigert, die Arbeit selbst zu erledigen.

### Vertrauen durch Transparenz kalibrieren

Ein Experiment im Unterricht mit 252 Schülerinnen und Schülern zeigte, dass in einem Mathematik-Tutoring-System **eine Warnung vor der Fehlbarkeit von KI die Hilfesuche verstärkte**. Transparenz über mögliche Systemfehler verbesserte die aktive Auseinandersetzung der Lernenden mit dem System — dies verbindet Hilfesuche mit [[trust-calibration|Vertrauenskalibrierung]] und [[hallucination-risk|Halluzinationsrisiko]].([[ai-fallibility-warning-help-seeking|Nagashima et al., 2026]])

### Bereitstellung von Hinweisen und Scaffolds neu denken

Anstatt Hilfe abzuschaffen, empfiehlt die Forschung, die Art ihrer Bereitstellung neu zu gestalten:

- **Verzögerte Hinweisverfügbarkeit** — erfordert eine Mindestbearbeitungszeit oder Lösungsversuche, bevor Hinweise (insbesondere Bottom-out-Hinweise) zugänglich sind.([[lak2026-hint-button-unproductive-use|An et al. (2026)]])
- **Eine Fading-Leiter wird umso weniger erklommen, je höher sie reicht.** In CoMeT, einem Tutor, der pro unbeantworteter Entscheidung eine Sprosse höher stieg und wieder zurücksank, wenn ein Lernender sie aufgriff, folgten nur 282 von 515 kodierten Fading-Episoden auf eine Antwort: Die Übernahmequote betrug nach der ersten Nachfrage 37,0 % und nach der dritten 21,8 % ([[adaptive-scaffolding-contingency-comet-tutor-2026|Hou et al. (2026)]]). Hilfe hinauszuzögern setzt daher einen Lernenden voraus, der die Aufforderung weiterhin beantwortet, und der gemessene Abfall bedeutet, dass die späteren Sprossen eines Scaffolds nur wenige der noch feststeckenden Schülerinnen und Schüler erreichen.
- **Von der Frage *ob* zur Frage *wie*** — die zentrale Designfrage lautet, wie die Ausgabe von Hinweisen im Einklang mit den Prinzipien des produktiven Ringens (Productive Struggle) gestaltet werden sollte, nicht ob überhaupt Hinweise gegeben werden sollen.([[lak2026-hint-button-unproductive-use|An et al. (2026)]])
- **Metaanalytische Evidenz für eine schülergesteuerte Bereitstellung.** In der Zusammenfassung von 18 US-amerikanischen K-12-Experimenten waren ausgearbeitete Beispiele (g = 0,324) und Hinweise auf Abruf (g = 0,316) signifikant, automatisch ausgelöste Just-in-Time-Hinweise hingegen nicht — die Autoren warnen jedoch, dass Lernende mit schwächerer Selbstregulationsfähigkeit die On-Demand-Funktionen ausnutzen können ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).
- **Die Nachrichtenlänge ist der Hebel, den die Forschung zur Hinweisvermittlung tatsächlich gemessen hat.** In einem real stattfindenden Programmierkurs sagten längere LLM-Hinweise eine schlechtere Korrektheit der nächsten Einreichung, mehr verbleibende Versuche und eine langsamere Neueinreichung vorher — pro Standardabweichung von 204,9 Zeichen über 14.809 Studierenden-Übungs-Paare hinweg ([[mihaylova-llm-feedback-live-programming-course-2026|Mihaylova et al., 2026]]). Die Lesbarkeit veränderte kaum ein Ergebnis, sodass der Umfang wichtiger war als der Schwierigkeitsgrad.
- **Frühere Hinweise zum selben Kursteil gingen mit geringerem Erfolg beim integrativen Schritt einher.** Studierende, die zu früheren Schritten eines Projekts Feedback erhielten, lösten ihren abschließenden Schritt in 95,6 % der Fälle, gegenüber 98,1 % bei jenen ohne solches Feedback — ein Log-Odds-Koeffizient von −1,096 ([[mihaylova-llm-feedback-live-programming-course-2026|Mihaylova et al., 2026]]). Die Autorinnen und Autoren deuten dies nicht als Schaden, da die Studierenden, die Hinweise einholen, plausibel diejenigen sind, die an dieser Stelle ohnehin Schwierigkeiten hätten — was eine Frage des [[self-regulated-learning|Monitorings]] ist.

### Das Nutzungsproblem bei LLM-Tutoren

Lernende in realen Lernumgebungen umgehen häufig **das [[scaffolding|Scaffolding]] eines [[conversational-ai|Chatbots]]** — nicht zwangsläufig auf schädliche Weise, sondern oft, weil die pädagogische Rahmung des Chatbots und die eigenen Lernziele der Lernenden nicht zusammenpassen. Evaluations-Pipelines müssen daher nicht nur messen, ob ein Tutor Scaffolding anbietet, sondern ob Lernende dieses Scaffolding tatsächlich *aufnehmen*, anstatt dies einfach vorauszusetzen.([[rethinking-scaffolding-llm-tutors|Neagu et al. (2026)]])

- **Ein optionaler Hilfe-Button wird nicht angeklickt.** In drei fünften Klassen riefen die Schülerinnen und Schüler nur selten einen Helfer-Agenten auf, den das Design bewusst optional gelassen hatte, um die Handlungsautonomie zu wahren; stattdessen holten sie eine [[teacher-role|Lehrkraft]], während die Verwirrung, für die er entwickelt worden war, bestehen blieb ([[humburg-scistory-ai-supported-inquiry-science-learning-games-2025|Humburg et al., 2025]]).
- In einem dreiwöchigen Rollenspiel in der fünften Klasse befragten alle 42 Schülerinnen und Schüler der GenAI-Bedingung die Lehrkraft im Spiel, und 61,9 % nannten die Möglichkeit, Fragen zu stellen, unter den Aspekten, die sie schätzten; mehrere gaben an, Fragen gestellt zu haben, die sie der realen Lehrkraft zu stellen gescheut hätten ([[zhou-genai-contextual-games-computational-thinking-2026|Zhou et al., 2026]]).

## Hilfesuche und selbstreguliertes Lernen

Hilfesuchen ist ein integraler Bestandteil des [[self-regulated-learning|selbstregulierten Lernens]]: Produktives Hilfesuchen verlangt von Lernenden, ihr Verständnis zu überwachen, zu beurteilen, wann Hilfe nötig ist, und geeignete Quellen auszuwählen. In GenAI-Kontexten wird dies noch anspruchsvoller, da Studierende gegenüber der KI zusätzlich [[agency|Agency]] ausüben und epistemische Wachsamkeit bewahren müssen, anstatt sich ihrem Urteil zu unterwerfen. Die Forschung stützt die Notwendigkeit von [[scaffolding|Scaffolds]], die eine [[agentic-ai|agentischere]] und epistemisch proaktivere KI-Nutzung fördern, und verweist auf das Risiko von [[cognitive-offloading|Over-Reliance]] und [[cognitive-offloading|kognitivem Offloading]], wenn Hilfesuchen zu bedingungslosem Antwortsuchen verkommt.([[regulating-ai-tutor-adolescent-srl|Abdelghani et al., 2026]])([[guided-llm-scaffolding-independent-learning|Amanlou et al., 2026]])

Evidenz auf Bevölkerungsebene verkompliziert das Substitutionsnarrativ: Unter 12.191 Schülerinnen und Schülern aus PISA 2025 in vier chinesischen Regionen ging eine häufigere Nutzung von GenAI für Schulaufgaben mit mehr akademischer Hilfesuche einher (β = 0,169), nicht mit weniger ([[wu-genai-scientific-literacy-china-2026|Wu et al. (2026)]]).

Logdaten verorten die Nachfrage nach Hilfe zeitlich und auf der Ebene einzelner Aufgaben. In einem Statics-Kurs mit 215 Studierenden erreichten die Anfragen an den ChatGPT-gestützten Assistenten des Lehrbuchs ihre Spitzen an Sonntagen und Montagen sowie erneut zwischen 1 und 3 Uhr morgens — jenen Stunden, in denen die Sprechstunden geschlossen waren ([[wyszynski-genai-user-input-engineering-statics-2026|Wyszynski, Barry und Dosse, 2026]]). Worum Studierende bitten, folgt der Schwierigkeit: In einem Assemblerkurs auf Graduiertenebene waren durch Prompts angestoßene Lösungsversuche seltener korrekt (OR = 0,35), und metakognitives Prompting konzentrierte sich auf Aufgaben mittlerer Schwierigkeit, bei denen die Erfolgschancen (Odds) prompt-gestützter Versuche um den Faktor 3,79 höher lagen ([[huang-multi-agent-self-regulated-learning-cs-2026|Huang et al., 2026]]). Ob Hilfe reflexiv wird, entscheidet mehr die Aufgabenschwierigkeit als die Gestaltung der Hinweise.

### LLM-vermittelte Hilfesuche als vierstufiger Prozess

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al. (2026)]] zeigen, dass Hilfesuche mit LLM im alltäglichen MINT-Studium kein einzelner Akt ist, sondern ein mehrschichtiger, kontextabhängiger Prozess mit vier Phasen: (1) *entscheiden, ob Hilfe benötigt wird* — Studierende versuchen Aufgaben zunächst selbstständig zu bearbeiten, um den Lernwert zu erhalten; (2) *wählen, wen man fragt* — ChatGPT als niedrigschwelliger erster Schritt, dann Mitstudierende zur begrifflichen Aushandlung, dann Lehrende bei komplexen oder besonders gewichtigen Anliegen; (3) *die Art der Hilfe bestimmen* — von Hinweisen und Erklärungen über Scaffolding beim [[problem-solving|Problemlösen]] und die Straffung von Routinearbeit bis hin zur Erweiterung des Lernens; und (4) *die erhaltene Hilfe beurteilen* — selektives Vertrauen ausüben und KI-Ausgaben anhand von Kursmaterialien oder gemeinsam mit Menschen überprüfen. Entscheidend ist, dass Studierende **instrumentelle Hilfesuche** (Vertiefung des Verständnisses) gegenüber **exekutiver Hilfesuche** (Erlangen von Lösungen) bevorzugten — eine Unterscheidung, die die Autoren zur Anpassung in neue SRL-für-LLM-Messitems vorschlagen.

Im vollständig online stattfindenden [[english-education|Schreibunterricht]] ist die Verfügbarkeit des Tools nicht der Engpass. [[reed-resource-literacy-genai-composition-2026|Reed (2026)]] beobachtete, dass die Studierenden mit Schwierigkeiten nicht diejenigen ohne Unterstützung waren, sondern diejenigen, die nicht erkannten, wann Hilfe nötig war, welche Ressource zur Aufgabe passte oder wie sich Feedback beurteilen ließ, sobald es eintraf — und flüssig formulierte Ausgaben [[generative-ai|generativer KI]] werden leicht mit fundierter Unterstützung verwechselt. Ihre Antwort darauf war, Hilfesuchen *strukturiert* zu gestalten, statt es lediglich verfügbar zu machen: verpflichtende Kontaktpunkte, die Aufgabenanforderungen entschlüsseln, Ressourcen begründet zuordnen, Feedbackquellen vergleichen und den Kreis mit einer Reflexion schließen.

### Verhaltenskontext sichtbar machen: TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] adressieren die verhaltensbezogene Vorstufe der Hilfesuche in der [[cs-education|KI-gestützten Programmierausbildung]]: Menschliche Tutorinnen und Tutoren passen sich dem beobachtbaren Verhalten der Lernenden an, nicht nur deren expliziten Anfragen, doch KI-Tutoren fehlt dieser Kontext. **TutorTrace** ist ein Datensatz samt Pipeline, der den Verhaltenskontext von Lernenden in Echtzeit aus Low-Level-Telemetrie der IDE berechenbar macht (vier Einsätze, N=480; ~180K Ereignisse, 13.633 Verhaltenssegmente, 27 Metriken) und daraus eine Taxonomie der Lernendenaktivität *vor* der ersten KI-Anfrage, *zwischen* aufeinanderfolgenden Anfragen und *über* die gesamte Sitzung hinweg ableitet. Dadurch können Systeme klassifizieren, ob eine Anfrage **angeleitete** Hilfesuche (mit vorausgegangener eigenständiger Arbeit) oder **abhängige** Hilfesuche (ohne eigenständige Arbeit) widerspiegelt — AUROC=0,717 bei der Vorhersage auf zurückgehaltenen Daten —, und unmittelbar bevorstehende Anfragen vorhersagen (AUROC=0,726). Eine vorläufige Evaluation im Unterricht zeigte, dass verhaltensbewusste Prompts den Anteil der Intervalle zwischen Anfragen ohne eigenständige Arbeit von 50,0% auf 20,7% senkten. Dies verknüpft Telemetrie aus den [[learning-analytics|Learning Analytics]] mit [[intelligent-tutoring|adaptivem Tutoring]] und zeigt, dass Verhaltenskontext im großen Maßstab operationalisiert werden kann, um das *Wie* der Hilfesuche von Studierenden zu stützen, anstatt lediglich auf ihre expliziten Fragen zu reagieren.

**Die Trajektorie der Hilfesuche sagt Transfer voraus, nicht nur ihr Niveau.** [[abdelghani-student-llm-epistemic-proactivity-math-2026|Abdelghani et al. (2026)]] kodierten 880 Gesprächsbeiträge von 112 Schülerinnen und Schülern der Sekundarstufe, die Mathematikaufgaben mit einem LLM modellierten, und fanden die statische Zusammensetzung wenig aussagekräftig: 81,5 % der Beiträge waren Anfragen, nur 2,2 % explizite Bewertung, und 54 % der Anfragen waren verstehensorientiert gegenüber 46 % mit Antwortsuche. Die Leistung in einem ohne KI bearbeiteten Post-Test wurde durch die Steigung innerhalb der Sitzung vorhergesagt und nicht durch deren Niveau. Verstehensorientierte Hilfesuche nahm über den Chat hinweg ab (M = −0,20), und diese Trajektorie fügte einem Modell, das bereits den Pre-Test-Wert enthielt, ΔR2 = 0,110 hinzu (β = 0,34, p < 0,001). Statische Interaktionsmerkmale steuerten nur ΔR2 = 0,023 bei (p = 0,684). Die Qualität der Hilfesuche muss daher als Kurve gelesen werden: Eine Sitzung, die mit konzeptuellen Fragen beginnt und dann in Antwortanfragen abgleitet, kennzeichnet schwächere Leistung ohne Unterstützung, und ein moderater Anstieg expliziter Selbstregulation (M = +0,103) glich dies nicht aus.

**Eine zweite Pipeline stellt dieselbe Frage von der Infrastrukturseite aus.** [[taufer-human-ai-interaction-haidl-2026|Taufer et al. (2026)]] argumentieren, dass ein Mensch-KI-Austausch eine eigene Datenklasse ist: Ihre Repräsentation erfasst den Rechenzustand, der die Anfrage ausgelöst hat, die Anfrage selbst, die Antwort, die Bewertung durch die nutzende Person und die darauffolgende Ausführung — als ein einziges Objekt. Anfragen werden anhand dieses Kontexts dann als Fehlerbehebung, Blockade beim nächsten Schritt, konzeptionelle Hilfe oder Validierung klassifiziert. In einem JupyterLab-Einsatz mit 35 Studierenden über 140 Studierenden-Aufgaben-Paare hinweg korrelierten bloße Interaktionszahlen nur mit r = 0,12 mit erfolgreich ausgeführten Zellen, während 37 Paare Zugang hatten und ihn nie nutzten und 26 ihn außerhalb ihrer zugewiesenen Bedingung nutzten.

- Wo eine Tutoring-Aufzeichnung möglicherweise benotet wird, ist es rational, eine Anfrage zu unterlassen; das Ausbleiben von Hilfesuche kann also nicht als fehlender Bedarf gelesen werden: Derselbe Log-Indikator bedeutet unter Bewertungsbedingungen etwas anderes ([[nakamura-observability-authenticity-paradox-stem-assessment-2026|Nakamura, 2026]]).

## Folgerungen für Design und Forschung

1. **Affordanzen für Hilfesuche bewusst gestalten.** Persistente, auffällige Hilfe-Buttons können Umgehungsstrategien begünstigen; den Zugang verzögern und die Bereitstellung strukturieren, um [[desirable-difficulties|produktives Ringen]] zu unterstützen.([[lak2026-hint-button-unproductive-use|An et al. (2026)]])
2. **Die Hilfesuche selbst mit Scaffolding unterstützen.** Lernende darin schulen, auf Denkprozesse gerichtete Anfragen zu stellen (schrittweise Hinweise, Überprüfung), statt anzunehmen, dass Zugang bereits gute Nutzung bedeutet.([[guided-llm-scaffolding-independent-learning|Amanlou et al., 2026]])
3. **Transparenz nutzen, um Vertrauen zu kalibrieren.** Auf die Fehlbarkeit von KI hinzuweisen, kann angemessene Hilfesuche und Engagement erhöhen.([[ai-fallibility-warning-help-seeking|Nagashima et al., 2026]])
4. **Die Nutzung messen, nicht nur das Scaffolding.** Evaluieren, ob Studierende sich tatsächlich mit der pädagogischen Rahmung auseinandersetzen, und nicht nur, ob der Tutor sie anbietet.([[rethinking-scaffolding-llm-tutors|Neagu et al. (2026)]])
5. **Monitoring und Handlungsfähigkeit unterstützen.** Scaffolds für die Hilfesuche sollten [[metacognition|Metakognition]] und [[self-regulated-learning|selbstreguliertes Lernen]] stärken und vor [[cognitive-offloading|übermäßiger Abhängigkeit]] schützen.
6. **Die Studierenden erreichen, die nicht fragen.** Outreach kann die Hilfesuche steigern, ohne die Lernmaterialien zu berühren: In einem präregistrierten Experiment in grundständigen Lehrveranstaltungen mit sehr hohen Teilnehmerzahlen wurden Studierende über einen akademischen Chatbot angeschrieben, was die Inanspruchnahme von Tutoring und Supplemental Instruction erhöhte; eine Mediationsanalyse schrieb 17,8 % des Noteneffekts dem Anstieg der Hilfesuche zu (p = 0,041) ([[chatbot-outreach-course-performance-2026|Meyer et al., 2026]]).

## Verbreitete Fehlvorstellungen

- **„Studierende, die Hilfe brauchen, fragen nicht danach.“** Ein **vorregistriertes Experiment** in großen Grundstudienkursen schrieb Studierende über einen akademischen Chatbot an und fand **größere Inanspruchnahme von Tutoring und ergänzender** Unterstützung. Nudging bewegte das Verhalten, also war die Hürde das [[prompt-engineering|Anstupsen]] und nicht die Bereitschaft.
- **„Hilfesuche-Anfragen betreffen das Lernen.“** **Operativer Unterstützungsbedarf** stellt diese Annahme infrage: über **4.093 Anfragen** fragten mindestens **20,4% nach dem Status einer ausstehenden Abgabe statt nach Wissen**. Ein Fünftel der Nachfrage nach Hilfe war administrativ.
- **„Einen KI-Tutor zu nutzen bedeutet, das eigene Lernen zu überwachen.“** In einer Studie mit **98 Neuntklässlerinnen und Neuntklässlern**, die einen GenAI-Tutor nutzten, waren die Interaktionen **von instrumentellen Anfragen dominiert, mit fast keiner Überwachung oder Bewertung des eigenen Lernens**. Nach Antworten zu fragen ist keine Hilfesuche in dem Sinn, den das Konstrukt meint.

## Wenn die Gewohnheit das Fragen ersetzt

Hilfesuche wird üblicherweise als Entscheidung untersucht — als Urteil darüber, ob das Fragen seine Kosten wert ist. Eine PLS-SEM-Studie von 2026 mit 392 Ingenieurstudierenden und Lehrenden auf den Philippinen legt nahe, dass diese Entscheidung, sobald [[generative-ai|generative KI]] eingebettet ist, weitgehend schon gefallen ist: **Die Gewohnheit sagte die Verdrängung menschlicher Hilfesuche mit β = 0,711 voraus**, während die [[technology-acceptance-model|Verhaltensabsicht]] sie mit β = 0,039 vorhersagte — ein Pfad, der statistisch nicht von null zu unterscheiden ist. Die Hälfte der GenAI-Nutzenden in dieser Stichprobe (49,6 %) berichtete, seltener eine Person um Hilfe zu bitten, und nur 15,8 % nannten einen Menschen als erste Ressource, wenn sie nicht weiterkamen, gegenüber 30,4 %, die ein Werkzeug nannten.

Zwei Folgerungen ergeben sich daraus für die Gestaltung von Hilfesuche. Erstens konkurrieren Interventionen, die auf Einstellungen zielen oder das Fragen attraktiver machen sollen, mit einer Routine, die bereits automatisch abläuft — sie müssen die Routine adressieren, nicht die Überzeugung. Zweitens war das einzige Konstrukt, das die Verdrängung *verringerte*, die Sorge um [[academic-integrity|akademische Integrität]] (β = −0,329), was nahelegt, dass sich menschliche Konsultation eher durch verpflichtende zwischenmenschliche Kontrollpunkte erhalten lässt — Peer-Review, mündliche Verteidigung, betreute Laborhilfe — als durch Ansprache.([[habit-over-intention-genai-help-seeking-engineering-2026|Pao et al., 2026]])

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

- [[leite-its-k12-meta-analysis-2025]] — Welche Tutoring-Unterstützungen den Effekt tragen: Beispiele und Hinweise auf Abruf statt automatischer Prompts

- [[taufer-human-ai-interaction-haidl-2026]] — Interaktionen als Daten erster Klasse: Klassifizierung einer Anfrage anhand des sie umgebenden Ausführungszustands
- [[abdelghani-student-llm-epistemic-proactivity-math-2026]] — Die Trajektorie der Hilfesuche — nicht ihr Niveau — sagt die Mathematikleistung ohne Unterstützung vorher
- [[mihaylova-llm-feedback-live-programming-course-2026]] — Hinweislänge gemessen an der Korrektheit der nächsten Einreichung, der Anzahl der Versuche und der benötigten Zeit, in einem Live-Programmierkurs
- [[humburg-scistory-ai-supported-inquiry-science-learning-games-2025]] — Ein Helfer-Agent, um den niemand gebeten hat (Humburg et al. 2025)

- [[penquiry-pen-based-llm-qa-2026]] — Penquiry: Ein stiftbasiertes, interaktives In-situ-Q&A-System auf Basis von LLMs
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-vermittelte Hilfesuche in STEM: mehrschichtig, instrumentell und verifiziert
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — Nur einen Klick entfernt: Khanmigo in einem zweijährigen Schulversuch
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtuelles Tutoring mit CAL: ein Experiment zu Nutzung und Lernerfolg
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — Der StudyChat-Datensatz mit Dialogen zwischen Studierenden und LLMs in einem AI-Kurs
- [[lak2026-hint-button-unproductive-use]] — Vorzeitige Hinweisanfragen und oberflächliches Lesen von Hinweisen sagen geringere Lernzuwächse in einem ITS voraus
- [[ai-fallibility-warning-help-seeking]] — Ein Warnhinweis auf die Fehlbarkeit von KI erhöht die Hilfesuche in einem Mathematik-Tutoring-System
- [[regulating-ai-tutor-adolescent-srl]] — Die Intentions-Verhaltens-Lücke bei der GenAI-Hilfesuche und beim selbstregulierten Lernen von Jugendlichen
- [[guided-llm-scaffolding-independent-learning]] — Angeleitetes LLM-Scaffolding verbessert das auf Schlussfolgern ausgerichtete Hilfesuchen und das eigenständige Lernen
- [[rethinking-scaffolding-llm-tutors]] — Die Diskrepanz zwischen Scaffolding und der tatsächlichen Aufnahme durch Lernende beim Einsatz von LLM-Tutoren in der Praxis
- [[uneven-impact-generative-ai-student-learning-2026]] — Frühes Sich-Verlassen auf GenAI: GenAI zu befragen, bevor man eigenständig nachdenkt, recherchiert oder eine Lehrkraft konsultiert, sagt sowohl Nutzen als auch Schaden voraus (Manikonda et al. 2026)
- [[reed-resource-literacy-genai-composition-2026]] — Ressourcenkompetenz in der Online-Textproduktion: Der Engpass liegt darin, zu erkennen, wann Hilfe benötigt wird (Reed 2026)
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Abbau von Barrieren für akademische Unterstützung: Evaluation eines kursspezifischen RAG-Systems zur Adressierung von Ungleichheiten bei der Hilfesuche in der Hochschulbildung
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptives Scaffolding erfordert Kontingenz: Ein KI-Tutor, der die Unterstützung abhängig vom Handeln der Lernenden steigert und wieder abbaut
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Scaffolding für gezielte KI-Hilfesuche beim Problemlösen
- [[guided-ai-tutor-impasse-resolution-2026]] — Untersuchung der Unterschiede darin, wie geführte KI-Tutoren Lernblockaden von Lernenden auflösen
- [[student-query-demand-hybrid-ai-support-2026]] — Was Studierende tatsächlich fragen: Nachfragestruktur und Automatisierungspotenzial in einem hybriden Unterstützungssystem

- [[wyszynski-genai-user-input-engineering-statics-2026]] — Untersuchung der Nutzung generativer KI durch Studierende anhand von Nutzereingabedaten in einem Kurs zur Technischen Statik
- [[huang-multi-agent-self-regulated-learning-cs-2026]] — Multi-Agenten-Modell künstlicher Intelligenz zur Förderung selbstregulierten Lernens und konzeptuellen Verständnisses in der Informatikbildung...
- [[habit-over-intention-genai-help-seeking-engineering-2026]] — Gewohnheit statt Absicht sagt voraus, dass Studierende Menschen seltener um Hilfe bitten: 49,6 % berichten von weniger menschlicher Hilfesuche, β für Gewohnheit 0,711 gegenüber 0,039 für Absicht
