---
title: "Fallbasiertes Lernen"
created: "2026-11-07T13:10:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [problem-based-learning, productive-failure]
technology: [generative-ai, simulation, intelligent-tutoring]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
updated: "2026-11-07T20:28:56-05:00"
translation_of: "concepts/case-based-learning"
source_updated: "2026-11-08T12:23:59-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Synthese:** Fallbasiertes Lernen lehrt durch einzelne Fälle: eine Patientenpräsentation, einen Rechtsstreit, eine Geschäftsentscheidung, eine Unterrichtsepisode oder ein Paar kontrastierender Beispiele. Der Fall liefert den Kontext, die Fakten und die Ambiguität; die Lehrperson entwirft die Fragen und die Diskussion, die daraus Lernen machen. Der Ansatz ist eine Signaturpädagogik — in der juristischen und betriebswirtschaftlichen Ausbildung, wo Fallmethode und sokratisches Fragen den Unterricht seit Langem organisieren, und in der Ausbildung der Gesundheitsberufe, wo klinische Fälle und simulierte Patientinnen und Patienten kontrollierte Übung ermöglichen. Sein Lernmechanismus überschneidet sich mit [[problem-based-learning]] und [[productive-failure]], ist aber nicht dasselbe: Fälle sind typischerweise begrenzte Erzählungen mit einem gestalteten Problemraum, während problembasiertes Lernen von einem schlecht strukturierten Problem ausgeht, das Lernende untersuchen. Die neue KI-Evidenz ist vielversprechend, aber schmal. Eine Machbarkeitsstudie zu fünf perioperativen Fällen fand, dass ein gegroundetes LLM 99,3% (543/547) der Fragen von Auszubildenden angemessen beantwortete und keine erfundenen Inhalte produzierte. Eine pflegerische Machbarkeitsstudie fand, dass ChatGPT die Fallerstellung von 106 auf 71 Minuten verkürzte, ohne messbare Veränderung der Diskussionsqualität. Eine Metaanalyse von sechs randomisierten Studien fand, dass KI-gestütztes problem- und fallbasiertes Lernen Wissen und Zufriedenheit verbesserte, aber nur zwei Studien testeten fallbasiertes Lernen, und die Übersicht analysierte die Formate nie getrennt. Dem Korpus fehlt weiterhin eine Studie, die Fallqualität, Diskussionsmoderation und Lernergebnisse im selben Design isoliert.

## Fragen zum Nachdenken

- Was macht einen Fall zu einem Fall — statt zu einer langen Textaufgabe oder zu einer Geschichte mit angehängtem Quiz?
- Wie unterscheidet sich fallbasiertes Lernen von problembasiertem Lernen, und warum ist der Unterschied wichtig dafür, wie KI eingesetzt werden sollte?
- Welche Teile einer Falldiskussion sollten im Voraus geplant werden, und welche sollten dem Urteil der Lehrperson im Moment überlassen bleiben?
- Wenn eine KI einen Fall erzeugt: Was muss geprüft werden, bevor Lernende ihn sehen? Wenn Lernende einen Fall mit einer KI-Tutorin oder einem KI-Tutor besprechen: Was muss geschützt werden?
- Warum sind Fälle in der juristischen und betriebswirtschaftlichen Ausbildung so verbreitet, und was würden diese Disziplinen verlieren, wenn Fälle durch Zusammenfassungen oder Simulationen ersetzt würden?
- Welche Evidenz würde zeigen, dass fallbasiertes Lehren wirkt — statt dass Lernende den Fall mochten oder die Diskussion hoch bewerteten?

## Einführung

Ein Fall ist ein begrenztes Einzelnes. Er gibt Lernenden eine Situation mit Akteuren, Fakten, Einschränkungen und meist einer Entscheidung oder Diagnose, zu der sie gelangen sollen. Der Fall trägt seine Lehre nicht in sich. Die Lehre entsteht aus den Fragen, die eine Lehrperson stellt, den Vergleichen, die Lernende ziehen, und dem Schlussfolgern, das sie in der Diskussion externalisieren. Deshalb ist fallbasiertes Lehren eine Designpraxis und nicht bloß ein Genre von Lesematerial.

Der Begriff umfasst eine Familie von Techniken. **Fallbasiertes Lernen** bezeichnet meist strukturierte Fälle, mit denen Wissen angewendet und klinisches oder professionelles Schlussfolgern entwickelt wird. Die **Fallmethode** ist die juristische und betriebswirtschaftliche Tradition, durch Berufungsurteile oder Managementsituationen zu lehren, oft mit sokratischem Fragen. **Fallstudien** können Lehrfälle meinen, derselbe Ausdruck benennt aber auch ein Forschungsdesign; eine Fallstudie über eine Schule ist keine fallbasierte Unterrichtsstunde. **Kontrastierende Fälle** schärfen die Wahrnehmung, indem sie Lernende zwei oder mehr Beispiele vergleichen lassen, die sich in einem Merkmal unterscheiden, das die Lehrperson ihnen zu bemerken helfen will. **Falldiskussion** ist die Moderationsebene, die einen geschriebenen Fall in kollektives Schlussfolgern verwandelt.

Diese Techniken überschneiden sich mit [[problem-based-learning]], [[inquiry-based-learning]], [[simulation]] und [[productive-failure]], und die Grenzen sind in der Praxis nicht immer sauber. Die Unterscheidung, die diese Seite beibehält, ist funktional: Ein fallbasiertes Design beginnt mit einem Fall, der für einen Lehrzweck ausgewählt oder geschrieben wurde, und die Lehrperson nutzt ihn, um eine bestimmte Weise des Schlussfolgerns sichtbar zu machen.

## Was als fallbasiertes Lernen gilt

Die erste Unterscheidung gilt gegenüber problembasiertem Lernen. PBL beginnt mit einem schlecht strukturierten Problem und fordert Lernende auf, zu bestimmen, was sie lernen müssen, es zu recherchieren und mit einer Lösung zurückzukehren. Das Problem kann ein Fall sein, aber das definierende Merkmal ist lernendengesteuerte Untersuchung. Fallbasiertes Lernen beginnt häufiger mit einem vorbereiteten Fall und einer definierten Menge von Lernzielen; die Lehrperson kann die Analyse leiten, Rollen zuweisen oder den Fall nutzen, um eine Entscheidung zu illustrieren. PBL und CBL teilen Moderation und Kontext, aber sie verteilen Kontrolle unterschiedlich. Das ist für KI wichtig: Eine KI, die einen Fall erzeugt, unterstützt ein CBL-Design, während eine KI, die Lernende durch ein offenes Problem begleitet, näher an PBL liegt.

Die zweite Unterscheidung gilt gegenüber der Forschungsfallstudie. Eine qualitative Fallstudie ist eine Methode zur Untersuchung eines begrenzten Systems. Ein Lehrfall ist ein gestaltetes Artefakt. Dasselbe Wort erscheint in beiden, und der Korpus enthält viele Artikel, die Fallstudie als Forschungsmethode nutzen, ohne durch Fälle zu lehren. Eine Konzeptseite muss den Lehrsinn getrennt halten, sonst bläht sich die Evidenzzahl auf.

Die dritte Unterscheidung gilt unter Fallformaten. Ein vollständiger narrativer Fall kann sich über Seiten erstrecken und erhebliche Vorbereitung verlangen. Eine kurze Vignette kann in eine einzelne Sitzung oder eine Prüfung passen. Ein Set kontrastierender Fälle paart bewusst Beispiele, die sich in einem Zielmerkmal unterscheiden. Ein simulierter Fall kann interaktiv sein, mit einer standardisierten Patientin oder einem standardisierten Patienten, einem Chatbot oder einer virtuellen Umgebung, die auf die lernende Person reagiert. Das Format verändert die kognitive Arbeit: lange Fälle verlangen Synthese und Priorisierung, Vignetten prüfen Wiedererkennen, kontrastierende Fälle unterstützen Diskrimination, und Simulationen fügen Echtzeit-Entscheiden hinzu.

## Warum Fälle wirken

Fälle sind eine Brücke vom abstrakten Wissen zum situierten Urteil. Sie geben Lernenden einen Kontext, in dem Konzepte Folgen haben, und sie machen Vorwissen sichtbar: Lernende müssen bemerken, was der Fall hergibt, was er unklar lässt und welche Prinzipien gelten. In der professionellen Ausbildung ist das der Punkt. Die juristische Ausbildung nutzt Fälle und sokratischen Dialog, um Studierende zu lehren, Autorität zu lesen, Leitsätze zu unterscheiden und aus Präzedenzfällen zu schließen. Die betriebswirtschaftliche Ausbildung nutzt Fälle, um Analyse unter Unsicherheit zu üben, oft mit einer Entscheidung ohne einzige richtige Antwort. Die Ausbildung der Gesundheitsberufe nutzt klinische Fälle, um Diagnose, Management und Kommunikation zu proben, bevor echte Patientinnen und Patienten gefährdet sind.

Der Mechanismus ist nicht einfach „Beispiele aus der realen Welt". Ein Fall kann realistisch sein und dennoch sehr wenig lehren, wenn die Diskussion Lernende nie auffordert zu unterscheiden, zu begründen oder zu vergleichen. Die stärkeren Designs nutzen Fälle, um einen Problemraum vor der Erklärung zu schaffen, und das ist die Verbindung zu [[productive-failure]]: Lernende versuchen einen Fall, stoßen an die Grenzen ihres aktuellen Modells und erhalten dann Instruktion, die diese Lücke adressiert. Kontrastierende Fälle schärfen das weiter. Wenn sich zwei Fälle in einem bedeutsamen Merkmal unterscheiden, können Lernende das Merkmal sehen statt die Oberflächengeschichte. Die bestehende Studie zu einem dreiwöchigen GenAI-Kurs für 78 Studierende aus ethnischen Minderheiten in einem Vorbereitungsprogramm nutzte Lehrkräftemodellierung mit kontrastierenden Fällen, um Studierende vom effizienten Kopieren zur kritischen Ko-Kreation zu bewegen ([[scaffolding-critical-engagement-genai-minority-students]]). Das ist ein Fallvergleichsdesign, kein Test fallbasierten Lernens in Jura oder Wirtschaft, aber es zeigt den Mechanismus in einem echten Klassenzimmer.

Fälle tragen auch eine soziale Dimension. Eine Falldiskussion macht Schlussfolgern öffentlich: Lernende schlagen Interpretationen vor, hören Alternativen und revidieren. Die Fragen der Lehrperson leisten die Arbeit, die ein Lehrbuch nicht leisten kann. Deshalb kann das Ersetzen eines Falls durch eine Zusammenfassung oder eine Vorlesung den Inhalt bewahren und das Lernen verlieren. Und deshalb kann eine KI, die die Fragen des Falls für die lernende Person beantwortet, die Diskussion kurzschließen, selbst wenn ihre Antworten korrekt sind.

## Was KI verändert

Die neue Evidenz gruppiert sich um drei Nutzungen: Fälle erzeugen, Fälle vermitteln und die Evidenz synthetisieren.

**Fälle erzeugen.** [[higashitsuji-chatgpt-case-creation-nursing-2025|Higashitsuji, Otsuka und Watanabe (2025)]] verglichen manuelle und ChatGPT-gestützte Fallerstellung durch acht Pflegelehrende. Die mediane Erstellungszeit sank von 106,0 auf 71,0 Minuten, ein statistisch signifikanter Unterschied, während wahrgenommene Belastung und Diskussionsqualität keine signifikante Veränderung zeigten. Die Studie ist eine Machbarkeitsstudie mit neun Studierenden und einem verblindeten, nicht randomisierten Crossover, sie stützt also eine plausible Zeitersparnis statt Gleichwertigkeit. Die wichtige Designfrage ist nicht, ob ein Modell einen Fall erzeugen kann. Sie ist, ob der erzeugte Fall das klinische Schlussfolgern bewahrt, das die Lehrperson beabsichtigt hat, und ob jemand ihn prüft, bevor Lernende ihn nutzen.

**Fälle vermitteln.** [[trewren-ai-perioperative-case-based-learning-2026|Trewren und Kolleginnen und Kollegen (2026)]] bauten fünf perioperative Fälle, luden sie in eine maßgeschneiderte LLM-Plattform und ließen vier Anästhesie-Auszubildende die Fälle als Patientenbeurteilungen befragen. Von 547 Frage-Antwort-Paaren wurden 99,3% (543/547) als angemessen beurteilt, keines war erfunden; die vier Fehlschläge waren Weigerungen, Informationen zu berichten, die der Fall enthielt. Das ist Evidenz dafür, dass ein gegroundetes Modell einen Fall unter Befragung zusammenhält. Es ist keine Evidenz dafür, dass Auszubildende mehr lernten als in einer konventionellen Falldiskussion, und die Studie verglich die beiden nicht.

**Evidenz synthetisieren.** [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025|Wei und Kolleginnen und Kollegen (2025)]] prüften sechs randomisierte kontrollierte Studien zu KI-gestütztem PBL und CBL in der medizinischen und zahnmedizinischen Ausbildung. Vier Studien gingen in die Wissens-Metaanalyse ein, die eine Verbesserung von 46% bei geringer Heterogenität berichtete; drei ergaben einen gepoolten Zufriedenheitswert von 0,7. Klinisches Schlussfolgern konnte nicht gepoolt werden, weil die Studien unterschiedliche Instrumente nutzten. Nur zwei der sechs Studien testeten CBL, und die Übersicht analysierte PBL und CBL nicht getrennt. Das Ergebnis ist ermutigend für KI-gestützte Fall- und Problemdesigns, sagt uns aber nicht, welche Fallmerkmale den Zugewinn erzeugten.

Die umgebenden Übersichten liefern Kontext, ohne eine saubere CBL-Schätzung zu liefern. [[hardie-genai-nursing-scoping-review-2026|Hardie und Kolleginnen und Kollegen (2026)]] fanden fallbasiertes Lernen innerhalb des Simulationsthemas einer Pflegeübersicht mit 103 Studien, nicht als eine ihrer vier benannten Kategorien. [[lorteau-sarro-ai-legal-education-2025|Lorteau und Sarro (2025)]] beschreiben KI als Ergänzung zum sokratischen Lehren und zu interaktiven juristischen Simulationen, aber ihre Übersicht über 82 Arbeiten analysiert die Fallmethode nicht als Intervention. [[csaszar-ai-management-education-2026|Csaszar und Kolleginnen und Kollegen (2026)]] behandeln fallbasiertes Lehren ausdrücklich nicht; ihre einzigen Fallverweise sind beiläufig, und sie merken an, dass einige Fallstudien durch Unternehmenssimulationen ersetzt wurden. Juristische und betriebswirtschaftliche Ausbildung liefern damit die institutionelle Begründung für Fälle, nicht die Evidenz zu Lernergebnissen. Verwandte fallähnliche Designs umfassen [[ai-standardized-patient-scaffolding-medical-2026|LLM-gerüstete standardisierte Patientinnen und Patienten]] und die [[genai-medical-education-transformation-review-2026|Übersicht zur medizinischen Ausbildung]], die fallbasiertes Lernen unter ihren Anwendungskategorien führt.

## Fälle mit KI gestalten und moderieren

- **Den Fall um eine Entscheidung oder eine Unterscheidung herum schreiben.** Ein Fall ohne folgenreiche Wahl wird zur Lektüre. Legen Sie fest, was Lernende bemerken, entscheiden oder begründen sollen, und bauen Sie die Fakten und Ambiguitäten um dieses Ziel herum.
- **Erzeugte Fälle gegen das beabsichtigte Schlussfolgern prüfen.** KI kann flüssige klinische oder juristische Details produzieren, die strukturell falsch sind. Lassen Sie eine Fachexpertin oder einen Fachexperten die Fakten, die Auslassungen und den Schlussfolgerungspfad prüfen, bevor der Fall Lernende erreicht.
- **Die Ambiguität des Falls bewahren.** Ein erzeugter Fall, der jede Spannung auflöst, lehrt Wiedererkennen, nicht Urteil. Bewahren Sie die unvollständigen Informationen und konkurrierenden Interpretationen, die die Diskussion nötig machen.
- **Kontrastierende Fälle nutzen, wenn das Ziel Diskrimination ist.** Paaren Sie Fälle, die sich in dem Merkmal unterscheiden, das Lernende bemerken müssen, und lassen Sie sie den Unterschied erklären, statt jeden Fall nur zu klassifizieren.
- **Die Diskussion vor Antwortlieferung schützen.** Wenn während der Fallarbeit eine KI-Tutorin oder ein KI-Tutor verfügbar ist, beschränken Sie sie auf Fragen, Hinweise oder Rollenspiel. Eine KI, die die Diagnose oder die juristische Schlussfolgerung liefert, entfernt die kognitive Arbeit, für die der Fall existiert.
- **Das Schlussfolgern bewerten, nicht die Erinnerung an den Fall.** Verlangen Sie eine Begründung, eine Differenzialdiagnose, einen Vergleich oder ein Entscheidungsmemo. Ein Quiz zu Fallfakten kann bestanden werden, während das zugrunde liegende Schlussfolgern fehlt.
- **Die Moderation durch die Lehrperson als Teil des Designs behandeln.** Die Abfolge der Fragen, der Moment der Erklärung und der Umgang mit einer falschen Wendung sind keine Dekoration. Sie entscheiden, ob aus dem Fall ein produktives oder ein verwirrendes Scheitern wird.

## Grenzen und Evidenzlücken

Die Evidenz ist auf eine bestimmte Weise dünn. Die perioperative Studie prüft, ob ein gegroundetes Modell Fragen zu fünf Fällen beantworten kann, nicht ob fallbasiertes Lehren das Lernen verbessert. Die pflegerische Studie prüft Fallerstellungszeit und Diskussionsqualität mit neun Studierenden. Die Metaanalyse poolt sechs Studien, von denen nur zwei CBL testeten, und ihr Wissensergebnis mischt PBL und CBL. Die juristischen und betriebswirtschaftlichen Übersichten beschreiben Nutzungen und institutionelle Kontexte; sie isolieren die Wirkungen der Fallmethode nicht. Die Studie zu kontrastierenden Fällen ist eine Kursevaluation, kein kontrollierter Vergleich von Fallformaten.

Es gibt auch ein konzeptuelles Risiko. Ein Fall kann einprägsam sein, weil er lebendig ist, nicht weil er Verstehen erzeugt hat. Eine Diskussion kann produktiv wirken, weil Lernende sprachen, nicht weil sie schlussfolgerten. Das Feld braucht Designs, die den Fall von der Moderation trennen, das Format vom Fachinhalt und das unmittelbare Engagement vom verzögerten Transfer. Bis dahin lautet die ehrliche Behauptung, dass Fälle eine gut etablierte professionelle Pädagogik mit plausibler KI-Unterstützung sind, nicht dass KI-gestützte Fälle einen nachgewiesenen Lernvorteil haben.

## Verbreitete Fehlvorstellungen

- **„Fallbasiertes Lernen ist nur problembasiertes Lernen mit einer Geschichte."** PBL ist lernendengesteuerte Untersuchung von einem schlecht strukturierten Problem aus. CBL beginnt meist mit einem vorbereiteten Fall und einem klarer definierten Lehrziel.
- **„Ein realistischer Fall lehrt von selbst."** Realismus liefert Kontext. Die Fragen, Vergleiche und Begründungsaufgaben liefern das Lernen.
- **„KI-erzeugte Fälle sind fertig zum Einsatz."** Erzeugte Fälle können flüssig, plausibel und falsch sein. Sie brauchen Expertenprüfung und eine Kontrolle des Schlussfolgerns, zu dem sie einladen.
- **„Wenn Lernende die Diskussion genießen, hat der Fall funktioniert."** Engagement ist kein Transfer. Das Ergebnis muss an einer Aufgabe gemessen werden, die Lernende vorher nicht bewältigen konnten.

## Verbundene Konzepte

- [[problem-based-learning]]
- [[productive-failure]]
- [[inquiry-based-learning]]
- [[pedagogical-patterns]]
- [[simulation]]
- [[professional-training]]
- [[legal-education]]
- [[business-education]]
- [[medical-education]]
- [[nursing-education]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[higher-ed]]

## Verbundene Artikel

- [[trewren-ai-perioperative-case-based-learning-2026]] — Ein gegroundetes LLM hielt fünf perioperative Fälle ohne erfundene Inhalte
- [[higashitsuji-chatgpt-case-creation-nursing-2025]] — ChatGPT verkürzte die Erstellungszeit von Pflegefällen ohne gemessenen Qualitätsunterschied
- [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025]] — Sechs randomisierte kontrollierte Studien zu KI-gestütztem PBL/CBL; nur zwei testeten CBL
- [[scaffolding-critical-engagement-genai-minority-students]] — Lehrkräftemodellierung mit kontrastierenden Fällen in einem GenAI-Kurs
- [[ai-standardized-patient-scaffolding-medical-2026]] — Fallbasiertes Lernen neben virtuellen und simulierten Patientinnen und Patienten
- [[genai-medical-education-transformation-review-2026]] — Fallbasiertes Lernen und klinisches Schlussfolgern unter den Anwendungskategorien der Übersicht
- [[hardie-genai-nursing-scoping-review-2026]] — Fallbasiertes Lernen innerhalb des Simulationsthemas einer Pflegeübersicht
- [[lorteau-sarro-ai-legal-education-2025]] — KI ergänzt sokratisches Lehren und juristische Simulationen
- [[csaszar-ai-management-education-2026]] — Fallstudien und Simulationen der Managementausbildung, ohne eine Analyse der Fallmethode
