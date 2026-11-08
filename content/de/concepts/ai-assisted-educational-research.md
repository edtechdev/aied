---
title: KI-gestützte Bildungsforschung
created: "2026-10-05T10:45:00-04:00"
updated: "2026-11-07T20:28:28-05:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
connected_resources: [learning-design-wiki]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
contributors: [editor]
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-11-08T08:41:46-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
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

> **Synthese:** KI-gestützte Bildungsforschung ist der Einsatz von KI als Instrument der eigenen wissenschaftlichen Arbeit des Felds – Literatur suchen und abrufen, Einträge für Reviews screenen, qualitative Daten kodieren, Daten analysieren, Manuskripte entwerfen und redigieren sowie die Reflexion darüber, was diese Werkzeuge mit dem produzierten Wissen anstellen. Sie unterscheidet sich von Forschung *über* [[ai-education|KI in der Bildung]]: die Designs, mit denen untersucht wird, ob KI Lernenden hilft, gehören zu [[research-methods-aied]], die Bewertung von KI-Systemen zu [[ai-ed-evaluation]] und das Lesen einer einzelnen AIED-Studie zu [[interpreting-and-applying-aied-research]]. Diese Seite behandelt den eigenen Arbeitsablauf der Forschenden und die Untersuchung der Praktiker-Forschenden – das scholarship of teaching and learning und die Klassenraumforschung – sowie die epistemischen Einsatzbedingungen, wenn Automatisierung in eines von beidem Einzug hält. Ihre Evidenz ist dünn und jung: ein Rahmenvorschlag, der reflektierende Bericht eines Review-Teams, eine kleine Fokusgruppenstudie, zwei bibliometrische Studien, ein Workshop-Bericht und Fallstudien einzelner Untersuchender. Sie beschreibt eine Richtung des Reisens statt etablierter Praxis, und der Strang der Praktiker-Forschung ist der dünnste von allen.

## Fragen zum Nachdenken

- Wer gilt hier als Forschende: die geförderte Wissenschaftlerin, die Doktorandin, die Dozentin, die den eigenen Klassenraum untersucht? Wen beschreibt die Evidenz tatsächlich?
- Ein KI-Screen hat eine Studie aus Ihrem Review ausgeschlossen. Wer ist für diese Entscheidung rechenschaftspflichtig – der Anbieter, das Werkzeug, das Protokoll oder Sie?
- Wenn ein Modell Quellen zusammenfasst, die Sie nicht gelesen haben, welchen Teil der wissenschaftlichen Arbeit tun Sie dann nicht mehr?
- Eine simulierte lernende Person kann einen Tutor über viele Profile hinweg testen. Was würden Sie prüfen, bevor Sie ihrem Urteil über echte Studierende glauben?
- Praktiker-Untersuchung ist meist lokal und klein. Sollte ihre Evidenz die Hürde einer geförderten Studie erfüllen, oder anders gewichtet werden, weil das Setting der Punkt ist?
- Wenn KI beim Entwurf eines Papiers geholfen hat, was sollte den Lesenden mitgeteilt werden, und wo sollte diese Offenlegung stehen?

## Einführung

KI-gestützte Bildungsforschung ist das Feld, das KI-Werkzeuge auf die eigene Arbeit richtet. Der Untersuchungsgegenstand ist nicht eine lernende Person, die einen [[intelligent-tutoring|KI-Tutor]] nutzt, sondern eine Forscherin, die ein Modell zum Suchen, Screenen, Extrahieren, Kodieren, Analysieren oder Schreiben nutzt. Was sich verändert, ist der Arbeitsablauf der Forschenden und, leiser, die Kriterien, nach denen ihre Ergebnisse als Evidenz zählen.

Diese Seite handelt bewusst nicht von Forschung *über* KI in der Bildung. Fragen dazu, ob ein KI-Tutor das Lernen verbessert, behandelt [[research-methods-aied]], die Bewertung von KI-Systemen [[ai-ed-evaluation]] und das vorsichtige Lesen einer einzelnen Studie [[interpreting-and-applying-aied-research]] und [[limitations-in-aied-research]]. Die beiden Literaturen werden häufig vermischt, und die Werkzeugbehauptungen der zweiten werden oft zur Stützung der ersten geborgt.

Der Umfang reicht von der Literatursuche über das Screening, das Kodieren, die Analyse und das Schreiben und schließt die erkenntnistheoretische Reflexion ein, die fragt, was Automatisierung mit dem Wissen anstellt, das ein Feld produziert. Er schließt außerdem Praktiker-Forschung ein: das scholarship of teaching and learning und die Untersuchung des eigenen Klassenraums, bei der eine Lehrkraft die eigene Praxis untersucht. Dieser Strang ist der schwächste Teil dieser Seite, und die Abschnitte unten sagen das, statt es zu glätten.

## Wie KI in den Forschungsarbeitsablauf eintritt

Berichte über die Nutzung sind konsistenter als die Evidenz für den Effekt. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai und Chan (2026)]] interviewten 28 Doktorandinnen und Doktoranden in sieben Fokusgruppen an einer Einrichtung und fanden, dass 27 der 28 [[generative-ai|generative KI]] irgendwo in ihrer Forschung nutzten: Ideenfindung, [[meta-analysis-systematic-review|Literaturreview]], Erklärung, Datenverarbeitung, Programmierung, [[writing-education|wissenschaftliches Schreiben]], Redaktion und Übersetzung.

Ihre Teilnehmenden waren kalibriert, nicht leichtgläubig. Sie ordneten Werkzeuge Aufgaben nach wahrgenommenem Einsatz und intellektueller Anforderung zu, nutzten KI stärker in Verfahrensarbeit mit geringem Einsatz und blieben vorsichtig, wo der wissenschaftliche Beitrag zentral war. Sie behielten außerdem durchgehend [[human-in-the-loop-ai|menschliche Aufsicht]] und behandelten das Modell als Assistenten, der „irreführend" oder „völlig falsch" sein könnte.

Der politische Befund ist der praktische. Bestehende institutionelle Leitlinien adressierten Lehre, Lernen und Assessment, und die Teilnehmenden erlebten sie als abstrakt und nicht zur Forschungspraxis passend. Die Autorinnen und Autoren schlagen forschendenorientierte Leitlinien vor, aufgebaut auf einem vierdimensionalen Rahmen der [[ai-literacy|KI-Kompetenz]], als entwicklungsorientiertes Gerüst statt als Regelwerk.

Die Studie deckt eine einzelne Einrichtung ab, eine selbstselektierte Gruppe von 28 sowie [[self-report-measures|selbstberichtete]] Schilderungen; die Studierenden könnten die Nutzung aus Integritätsgründen unterberichtet haben. Sie beschreibt, wie eine fähige Gruppe diese Werkzeuge nutzt, nicht, was die Nutzung hervorbringt.

## Literatursuche und -abruf

Ein Workshop-Bericht kartiert eine Agenda, statt sie zu messen. Der CHIIR-2026-Workshop zu generativer KI und akademischer Suche versammelte Forschende aus menschlicher Informationsinteraktion und Retrieval, und sein Bericht beschreibt Systeme, die für Dokumentenabruf gebaut wurden, inzwischen aber zusammenfassen, empfehlen, synthetisieren und konversieren – was die Annahme erschüttert, das System lokalisiere Quellen, während die Interpretation bei der nutzenden Person bleibt.

Ein Lightning Talk testete, wie Modelle Wissenschaftlerinnen und Wissenschaftler rekonstruieren. Gegen Ground Truth aus OpenAlex und Google Scholar für 1,596 Seed-Autorinnen und -Autoren über 10 Disziplinen und 8 globale Regionen hinweg wurden hochzitierte Forschende mit etwa der doppelten Rate geringer zitierter Peers rekonstruiert; getestet wurden DeepSeek R1, Llama 4 Scout und Mixtral 8×7B.

Eine [[librarians|Bibliothekarin]] berichtete von einer „Vertrauenslücke": Studierende vertrauten generativer Suche oft zu sehr, während Fakultätsmitglieder ihr misstrauten, und eintägige Workshops wurden als unzureichend für dauerhafte Kompetenz beurteilt. Der Designfaden, zu dem die Teilnehmenden am häufigsten zurückkehrten, war „Reibung" – die nutzende Person bei der kritischen, manchmal unbequemen Arbeit zu halten, aus der Lernen entsteht.

Der Bericht deckt eine einzelne, selbstselektierte Veranstaltung ab und hält weitgehend Meinungen, Designprinzipien und Forschungsfragen fest. Seine Zahlen gehören zu einzelnen Vorträgen statt zum Workshop, und nichts darin zeigt, dass KI-gestützte akademische Suche das Lernen verbessert oder schädigt.

## Screening und Automatisierung systematischer Reviews

Systematische Reviews sind dort, wo Automatisierung am weitesten vorangekommen ist – und wo ihre Grenzen sichtbar werden. [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] reflektieren über den Review eines interdisziplinären Teams und berichten, dass Automatisierung die Verfahrenslast vor allem beim Abstract-Screening reduzierte – mit Werkzeugen wie ASReview, SWIFT-Review, Covidence, AIScreenR und MetaMate –, während Datenextraktion, Abgleich und Synthese bei menschlichen Reviewerinnen und Reviewern blieben. Mentoring und Peer-Diskussion funktionierten als methodische Infrastruktur, nicht als Höflichkeit.

Ihre Schlussfolgerung ist eine Arbeitsteilung statt einer Übergabe: weisen Sie Automatisierung der Verfahrenslast zu, verifizieren Sie jede Ausgabe, und behalten Sie interpretative Entscheidungen beim Menschen. Der Bericht ist die Reflexion eines einzelnen Teams ohne Vergleichsbedingung, seine Strategien sind also beschrieben statt getestet.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta und Lin (2026)]] quantifizieren das Reporting-Problem über 888 Review-Automatisierungspapiere mit 14,726 Annotationseinträgen. Seit 2023 berichteten 38.0% der Software- und Produktpapiere keinerlei Evaluation, gegenüber 9.3% der [[llm|LLM]]-Papiere. Die Lücke übersteht die Stratifizierung: in Screening und Selektion verzeichneten Softwarepapiere durchschnittlich 3,2 substanzielle Evaluationseinträge, wobei 39.3% keine berichteten, während LLM-Papiere durchschnittlich 7,3 Einträge mit einer Rate von 3.8% ohne Evaluation verzeichneten.

Günstige Bewertung implizierte nicht Tauglichkeit zur Delegation. Unter 118 LLM-Papieren mit ausschließlich positiven Evaluationen berichteten 52% noch mindestens eine Sorge, dass der Arbeitsablauf unter der für seine Rolle nötigen Hürde blieb. Der Modellzugang war überwiegend proprietär: 84.1% der LLM-Nutzung stützten sich auf proprietäre oder gehostete Systeme, 11.0% war gemischt, und nur 4.9% waren Open-Weight.

Aus diesen Mustern leiten die Autorinnen und Autoren PRISMA-LLM ab, einen dreischichtigen Rahmen, dessen fünf Implementierungsstufen Offenlegungsstufen statt Risikostufen sind. Es ist ein zum Testen angebotener Vorschlag, keine offizielle, vom PRISMA Executive gebilligte Erweiterung. Schweigen auf Papierebene, so warnen sie, ist kein Beleg dafür, dass Validierung fehlt – sie kann in einem Produktbericht, einem Protokoll oder einem Repository liegen.

## Qualitative Kodierung und Analyse

Qualitative Analyse ist die Stufe, in der Interpretation das Produkt ist, was Delegation schwerer zu verteidigen macht. Die Seite [[qualitative-research|Qualitative Forschung]] bündelt die Evidenz des Korpus zu KI-gestützter Kodierung, einschließlich Studien, die zeigen, dass Übereinstimmung zwischen Mensch und Modell nicht dasselbe ist wie Kodierungsqualität und dass Fehler sich durch temporale Analyse fortpflanzen können. Diese Literatur behandelt das Modell als Skalierungshilfe, deren Ausgaben gegen menschliches Urteil verifiziert werden müssen.

[[ai-methodologies-science-education-research-2026|Martin et al. (2026)]] beschreiben die Rollenverschiebung direkt. Mit der Anwendung automatisierter Kodierungsmodelle bewegt sich die Forscherin vom Kodieren studentischer Daten zum Validieren der Modellausgaben; wenn unüberwachte Modelle Begründungen clustern, vollzieht der Algorithmus die erste explorative Analyse. Forschende, so argumentieren sie, brauchen zunehmend Kompetenzen in Datenwissenschaft neben qualitativer, [[quantitative-research|quantitativer]] und theoretischer Expertise.

Ihr Rahmen liefert außerdem die hier maßgebliche Prüfung: [[explainable-ai|erklärbare KI]] kann offenlegen, ob automatisierte Kodierung semantischem Verständnis folgt oder nur Schlüsselwörtern. Eine Kodierungspipeline, die mit menschlichen Labels übereinstimmt, kann dennoch das Falsche lesen.

Quantifizierte Evidenz dafür, dass Automatisierung menschliche Kodierung erreichen und nicht nur unterstützen kann, kommt aus der Konversationsanalyse. [[ravi-llm-conversation-threads-collaborative-learning-2026|Ravi et al. (2026)]] evaluierten LLM-Threading von Transkripten kleiner Gruppen und prüften dann, ob explizite Thread-Labels die nachgelagerte Kodierung mit dem relationalen ABCDE-Schema stützen: Das Hinzufügen LLM-generierter Thread-Labels zu einem Alles-auf-einmal-Prompt hob Cohens Kappa für die Kodierung von Elicitation-Moves von 0.0502 auf 0.6325, und LLM-Threading kostete unter 1 US-Dollar pro Transkript gegenüber rund 25 US-Dollar für menschliche Threads. Die Diskursstruktur, nicht die rohe Modellfähigkeit, trug den Gewinn.

[[hur-computational-analysis-teacher-group-interactions-2026|Hur et al. (2026)]] bieten eine Typologie der Stufenführung, die jede von drei Analysestufen — Exploration, Interpretation und Bestätigung — als primär menschlich oder computergestützt klassifiziert. In einer ausgearbeiteten Fallstudie mit 15 Mathematik-Unterrichtsvideos der High School brachte ein posebasierter Detektor, der die Exploration computergestützt führte, 317 Lehrer-Gruppen-Interaktionsereignisse hervor, wobei die signifikanten Befunde sich auf die Keypoints konzentrierten, die die Erkennungsheuristik selbst privilegierte.
LLM-Transkriptindikatoren stimmten mit Menschen am stärksten bei objektiven Konstrukten überein (κ = .778 für explizite Fragen, .722 für das Besprechen von Mathematik) und am schwächsten bei subjektiven (κ = .562 für braucht Hilfe, .531 für könnte verwirrt sein). Die Autorinnen und Autoren zitieren Barany et al. (2024), deren Vergleich von vier Codebuch-Arbeitsabläufen fand, dass abwechselnde menschliche und KI-Handlungsfähigkeit die qualitativ besten Codebücher erzeugte, und rahmen Stufenführung als benennbare analytische Entscheidung statt als ungeprüften Standard.

[[ober-prompt-engineering-interview-transcripts-2026|Ober et al. (2026)]] verbinden grounded menschliche Kodierung, SentenceBERT-Embeddings und Affinity-Propagation-Clustering zu einer replizierbaren, menschlich geführten Pipeline zur Analyse von Interviewtranskripten. An sechs Fokusgruppen mit 13 Lehrkräften der US-amerikanischen Mittel- und Oberstufe erzeugte die Pipeline 78 First-Level- und 32 H-Cluster für Kommunikation sowie 79 und 32 für digitale Kompetenz, von denen die menschliche Prüfung 14 und 16 aussagekräftige Cluster behielt.
Das Prompten von ChatGPT-4o und Copilot erzeugte identische Labels für 33,3 % (7 von 21) der Kommunikationscluster und 43,8 % (7 von 16) der Digital-Literacy-Cluster, mit durchschnittlichen Kosinusähnlichkeiten zwischen 0,835 und 0,880. Die datenabgeleiteten Codes wurden dann in ein verfeinertes Codebuch Version 2 überführt, das eine Kategorie „Lehren“ hinzufügte und soziale und kontextuelle Dimensionen explizit machte, und die menschliche Prüfung jedes Labels fand keine klaren Halluzinationen.

[[potter-participatory-design-writing-analytics-2026|Potter et al. (2026)]] demonstrieren eine durchgängige hybride induktive thematische Analyse, in der GPT-4o erste Codes und vorläufige Themen innerhalb einer sicheren retrieval-augmentierten Plattform erzeugte, während die Forschenden die letzte interpretative Autorität behielten. Über Fokusgruppen mit neun Schreiblehrenden am College kodierten drei Kernforschende die Transkripte unabhängig neu, zwei externe Validierende prüften die vollständigen Daten, und das Team konsolidierte vier Themen — Verbesserung von Metrik- und Feedback-Klarheit, Anpassbarkeit und Flexibilität für Lehrende, Integration mit bestehenden Werkzeugen und Verbesserungen der Oberfläche —, die jeweils einer konkreten WAT-C-Designrevision zugeordnet wurden. Das Modell schloss gelegentlich Zitate aus oder formulierte sie um, erfand aber keine, und der Arbeitsablauf verteilte die Arbeit der Forschenden neu, statt sie zu entfernen: Verifikation, Kontextualisierung und Triangulation fügten Prüfschichten hinzu, statt Zeit zu sparen.

[[zambrano-llm-human-ai-codebook-development-2026|Zambrano et al. (2026)]] vergleichen vier Strategien der Theorieinjektion für die LLM-Codebuchkonstruktion — Atheoretical, Theory Named, Full References Given und Papers Provided — über 12 Codebücher, die von 5 Bewertenden auf 7 Dimensionen beurteilt wurden. Die Theorie zu benennen, ohne ihre Arbeiten bereitzustellen, schlug das Bereitstellen vollständiger Texte bei Nützlichkeit (4,40 gegenüber 3,20 für Full References Given) und Konkretheit (3,80 gegenüber 2,40 für Papers Provided), während vollständige Arbeiten nur bei der theoretischen Ausrichtung gewannen (4,60 gegenüber 3,60) und die vier Modellstufen reproduzierten, trotz Anweisungen, sie zu vermeiden. Menschliche Verfeinerung blieb in beiden Studien wesentlich: Zwei Kodierende führten überlappende GPT-Vorschläge zusammen, und die endgültigen Codebücher landeten bei 11 und 15 Konstrukten, sodass der Arbeitsablauf Zusammenarbeit und nicht Delegation war.

[[zhou-gaiva-human-ai-video-analysis-2026|Zhou et al. (2026)]] liefern die erste Kodierungsevidenz für die Videomodalität, wobei GPT-4o bei der Kodierung von Unterrichtstranskripten Kappa 0,91 für Coordinated Collaboration gegenüber Mensch-Mensch-Kappa 0,83 erreichte. Menschliche Bewertende wandten das Transkriptionsraster zuverlässig an, mit ICC 0,89–0,99 über Genauigkeit, Vollständigkeit und Spezifität in einer doppelt kodierten Teilstichprobe. Das gestufte Design — MLLM-Transkription, gefolgt von transkriptbasierter LLM-Kodierung — trug das Ergebnis, da direkte Videokodierung mit Menschen bestenfalls bei Kappa 0,20 übereinstimmte.

[[marrone-genai-qualitative-coding-metacognitive-reflections-2026|Marrone et al. (2026)]] berichten den bislang größten Kodierungsfall mit mehreren Stakeholdern und fine-tunten GPT-4o-mini auf 14.100 Studierendenreflexionen, was 18.883 gelabelte Stichproben über eine Schule, eine Universität und ein staatliches Bildungsministerium ergab. Die Genauigkeit war konstruktabhängig: Zielsetzung erreichte 91,28 %, Reflexion über Lernen 67,44 % und Anstrengungsregulation 60,74 %, bei 81,94 % insgesamt im finalen Split. Der neunstufige Co-Design-Arbeitsablauf kostete rund 744 Stunden, davon fast 500 Stunden spezialisierte Algorithmusentwicklung.

[[keith-llm-prompting-human-coding-theory-concepts-essays-2026|Keith et al. (2026)]] liefern die erste direkte Zerlegung von LLM- gegenüber menschlicher deduktiver Kodierung und prompteten vier Modelle über 240 Designzellen, 8.040 Datenzeilen und 60.060 Prompts zu Theorie-Konzept-Essays. Die Modellidentität dominierte die Varianz: partielles Eta-Quadrat 0,19 der Korrelationsvarianz und F = 578,36 im Bias-Modell, während der Prompt-Typ nicht signifikant war. Qualität divergierte vom Preis — Claude Sonnet 4 erzielte das niedrigste Modellfehler-Logit (-1,90) gegenüber -1,05 bei GPT-4.1 Mini, und Gemini 2.5 Pro kostete 178,13 US-Dollar und schnitt doch schlechter ab als GPT-4.1 Full zu 56,77 US-Dollar.

[[ober-persistence-pedagogical-agent-dialogues-2026|Ober et al. (2026)]] kartieren die Kodierungsübereinstimmung auf Konstruktebene systematisch und ließen acht ChatGPT-4o-Konfigurationen gegen zwei trainierte menschliche Kodierende über fünf Konstrukte in Dialogen von Studierenden mit einem pädagogischen Agenten laufen. Die Selbstkonsistenz-Kappa lag über die Konfigurationen hinweg bei 0,865–0,890, während die Mensch-LLM-Kappa nur 0,000–0,419 umfasste, sodass Konsistenz ohne menschliche Ausrichtung ein diagnostisches Signal ist, das die Operationalisierung des Konstrukts markiert — das Instrument, nicht das Modell.

## Datenanalyse und die epistemischen Einsatzbedingungen

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen und Graulich (2026)]] setzen die Wissensproduktion des Felds selbst unter Druck, und ihr Artikel ist das Rückgrat dieser Seite. Verwurzelt in Hasok Changs (2004) Darstellung epistemischer Iteration – aufeinander aufbauende Stufen des Wissens hin zu epistemischen Zielen – ziehen sie eine Parallele zur rund 150-jährigen Entwicklung des Thermometers und argumentieren, das Feld befinde sich heute womöglich in einer vergleichbaren Iteration.

Ihre zentrale Sorge ist epistemisch, nicht technisch. Changs nomic-measurement-Problem besagt, dass das Messen einer Größe ein Gesetz erfordert, das sie auf etwas Beobachtbares bezieht, dieses Gesetz aber empirisch nicht getestet werden kann, ohne die Größe bereits zu kennen. KI-abgeleitete Messfunktionen, die aus Trainingsdaten und Optimierung statt aus der Forscherin hervorgehen, können dies verschärfen statt auflösen, weil sie präzise und prognostisch wirken und zugleich opak bleiben können.

Der Rahmen hat sieben Phasen: Problemformulierung; Instrumentierung und Messung; Experimentieren und evidenzbasierte Inferenz; Vergleiche und Replikation; Aufbau von Normen und Konsens; Implementierung und ihre Folgen; sowie kontinuierliche Verfeinerung. Die Autorinnen und Autoren präsentieren diese als analytische Dimensionen, die sich wiederholen, überlappen oder fehlen können, nicht als validierte Sequenz.

Vergleichbarkeit ist die Phase mit der schärfsten [[equity-in-ai-education|Gerechtigkeitskante]]. Regnaults Prinzip verlangt, dass ein Instrument unter denselben Bedingungen denselben Wert anzeigt und dass Instrumente eines Typs übereinstimmen – Vergleichbarkeit muss sich jedoch über Studierendenpopulationen erstrecken, und [[machine-learning|maschinelles Lernen]] neigt dazu, kanonische Vorstellungen besser zu kodieren als die vielfältigen Weisen, in denen Studierende schwächere ausdrücken.

Sie benennen außerdem ein Rechenschaftsproblem. Forschende nutzen vortrainierte Modelle, deren Trainingsdaten, [[llm-training-and-fine-tuning|Feinjustierung]] und Ziele sie womöglich nicht kennen, was eine Schicht epistemischer Abhängigkeit hinzufügt; weil diese Systeme aus soziotechnischen Netzwerken hervorgehen, wird Verantwortung schwer zurechenbar – ein „many-hands"-Problem.

Die nötige Ehrlichkeit ist, dass der Artikel keine Daten berichtet und keine Lerneffekte etabliert. Er zeigt nicht, dass KI-Methoden die Forschung verbessern oder zu gültigeren Schlussfolgerungen führen; dieser Vergleich wird als künftige Arbeit gestellt, und die Autorinnen und Autoren räumen ein, ihre Hypothete „könnte sich durchaus als falsch erweisen".

## Forschungsschreiben, Zitieren und Integrität

Schreiben ist dort, wo KI-Unterstützung am sichtbarsten ist und ihre Fehlgriffe die größten Folgen haben, weil eine Referenz ein Bekenntnis zur Rechenschaft ist. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] prüften die gesamte ACM Digital Library – 723,930 Publikationen und 15,872,533 Referenzen – und verfolgten 113,588 Referenzen aus 5,225 Papieren der Computing-Education von 2021 an.

Sie verifizierten manuell 828 verdächtige Einträge und fanden 30 Referenzen mit nachweislich erfundenen bibliografischen Angaben in 14 Papieren, alle aus 2025 und 2026. Auf dem SIGCSE Technical Symposium stieg die Zahl von 3 in den Proceedings 2025 auf 17 in 2026 und trat in 2.3% der Proceedings-Papiere 2026 auf. Siebzehn der 30 waren Hybride, die einen echten Titel mit erfundenen oder falschen Autorenangaben paarten.

Ihre Zahl ist eine bewusste untere Grenze, und sie stellen das Problem als gemeinsam statt als durch Software gelöst dar. Autorinnen und Autoren sollten jedes zitierte Werk verifizieren, besonders wenn generative KI beim Schreiben verwendet wurde; Reviewerinnen und Reviewer können nicht jede Referenz prüfen, deshalb führen Veranstaltungen gezielte Prüfungen ein; Verlage sollten Metadaten verbessern. Automatisierte Detektion erbt die Fehler der Metadaten, die sie als Ground Truth behandelt.

Die Skaleneffekte von KI-Schreiben zeigen sich in einer zweiten bibliometrischen Studie. [[ai-assisted-writing-research-teams|Wang et al. (2026)]] analysierten 147,074 Publikationen aus PLoS- und Nature-Portfolio-Zeitschriften seit 2020 und verknüpften KI-gestütztes Schreiben mit kleineren, stärker junior-lastigen Teams. Beim extremen Übergang von keiner zu voller KI-Unterstützung war die Teamgröße in PLoS 22.1% kleiner und in Nature 45.5% kleiner (Poisson β = −0.250 und −0.607, beide p < 0.01).

Der Impact litt nicht offensichtlich. Etwa 7.34% der KI-gestützten PLoS-Papiere und 7.40% der Nature-Papiere erreichten die Top 5% des FWCI, über beiden menschgeschriebenen Vergleichsgruppen, und gematchte Vergleiche zeigten eine um 3.0% bzw. 2.7% höhere Wahrscheinlichkeit für Top-5%-FWCI (beide p < 0.01). Die Daten sind beobachtend, deshalb lehnen die Autorinnen und Autoren starke Kausalbehauptungen ab.

## Persistente Agenten im Forschungsumfeld

Über einzelne Prompts hinaus werden persistente Agenten im Forschungsworkspace selbst eingebettet. [[persistent-ai-agents-academic-research|Alzahrani (2026)]] berichtet von einer 115-tägigen Fallstudie einer einzelnen Untersuchenden zu einem Agenten mit dauerhaftem Gedächtnis, lokalen Dateien, externen Werkzeugen, geplanten Routinen und delegierten Rollen, der im Workspace einer ärztlichen Forscherin läuft.

Die deskriptiven Ergebnisse sind groß. Wiederherstellbare Telemetrie des Hauptagenten hielt 75,671 deduplizierte Einträge über 96 aktive Tage, ein Anteil aktiver Tage von 0.835; der Workspace hielt 502 gedächtnisbezogene Dateien, 17 konfigurierte Agentenverzeichnisse und 57 Skill-Dateien. Eine strenge 25-Tage-Teilmenge im Mai hielt 627 modellabgeschlossene Ereignisse und 73,950,305 erfasste Tokens, davon 82.9% Cache-Reads, mit etwa US\$1,961 beobachteten Systemausgaben.

Der Hauptbeitrag der Studie ist ein Messrahmen – PARE-M –, gebaut weil die Ergebnisse, die ein persistenter Agent unterstützen soll, wie Governance und Kosten pro Artefakt, für episodische [[benchmark|Benchmarks]] unsichtbar sind. Ihr zentraler Negativbefund ist, dass aggregiertes Interaktionsvolumen keine reduzierte menschliche Eingabe zeigte: als Gedächtnis und Prozeduren sich anhäuften, weitete sich der Umfang delegierter Arbeit, das stärkste Muster ist also Kapazitätsausweitung statt belegter Arbeitsersetzung.

Die Grenzen sind die, die eine einzelne selbstbeobachtete Fallstudie einlädt. Eine Forscherin war nutzende Person, Designerin, Datenquelle, Analytikerin und Nutznießerin, ohne Kontrollgruppe, ohne Baseline-Periode und ohne unabhängige Kodiererin für die Governance-Ereignisse.

## Simulierte Lernende als Forschungs- und Evaluationsinstrumente

[[simulating-students|Simulation von Lernenden]] ist die Seite der Wissensbasis zur Technik und zum Phänomen: wie man eine synthetische lernende Person baut, deren Wissenszustand und Fehler treu genug sind, um für einen Menschen einzustehen. Diese Seite behandelt denselben Apparat als Instrument von Forschung und Evaluation – wozu eine synthetische lernende Person *gut ist*, wenn eine Intervention, ein Instrument, ein Benchmark oder ein Tutor in einem Maßstab oder unter Bedingungen getestet werden muss, die echte Lernende nicht liefern können.

Der klarste Einsatz ist die Evaluation eines Tutors über die Zeit. [[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]] setzen einen Agenten-Tutor in eine 30-tägige Beziehung zu einer simulierten lernenden Person, deren Beherrschung – aus einem auf Daten echter Studierender trainierten [[knowledge-tracing|Knowledge-Tracing]]-Modell – seine Antworten steuert. Bei der Evaluation von 10 Agenten-Adaptern plateauzte jeder Adapter innerhalb von 5–10 Tagen weit unter einer Ideal-Lern-Referenz, ein Ergebnis, das Einzelsitzungs-Evaluation nicht erreichen kann. Eine Kalibrierungsprüfung gegen beobachtete Probe-Accuracy liegt an der Diagonalen (ECE 0.049, Brier 0.033 über 1.19 million Versuche).

Treue ist die Vorbedingung, und sie ist messbar. [[beagle-grounded-learner-emulation-2026|Wang et al. (2026)]] berichten Verhaltensdivergenz von echten studentischen Spuren von DKL = 0.31 gegenüber 0.53 für die beste Baseline, und in einem Turing-Test mit 71 Ratern waren ihre Spuren statistisch nicht unterscheidbar von echten studentischen Daten (52.8% Accuracy, d′ = 0.15). Der zu vermeidende Fehlschlag ist Kompetenzbias: promptgesteuerte Modelle lösen die Aufgabe zu gut, um für Novizinnen und Novizen einzustehen.

Der Glaubenszustand ist der Teil, der leicht zu fälschen ist. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar und Sachan (2026)]] zeigten, dass Simulatoren über sieben Modelle von 4B bis 120B Parametern ein zugewiesenes [[misconceptions|Missverständnis]] verließen und aus internem Wissen neu lösten, und zwar in nahezu gleichmäßigen Raten unter gezieltem, fehlausgerichtetem und generischem Feedback. Sie quantifizieren dies mit einem Selective Flip Score und heben die Treue durch Training um bis zu +0.56, und das ist der Punkt: das [[prompt-engineering|Prompten]] einer Persona baut keine lernende Person.

Simulierte Lernende dienen außerdem als kontrolliertes Testbett für Evaluationsinstrumente selbst. [[llm-judged-helpfulness-pedagogy-signal|Fan et al. (2026)]] verbanden jede von drei Tutor-Basen mit einer festen schwachen simulierten lernenden Person unter einem vorregistrierten Protokoll und fanden, dass zweckallgemeine Helpfulness-Rubriken wenig [[pedagogy|pädagogisches]] Signal tragen, mit sieben Policies, die 2.3 Punkte beurteilter Pädagogik innerhalb eines 0.25-Punkte-Bands beurteilter Helpfulness aufspannen. Antwort-offenlegende Züge wurden auf jeder Basis von weniger unabhängiger studentischer Arbeit gefolgt.

Die Warnung gehört auf diese Seite. Das Urteil eines [[simulation|Simulators]] ist nur so gut wie der Simulator, und seine Abdeckung neigt zu den leichtesten Lernenden.

## Praktiker-Forschung: SoTL und Untersuchung des Klassenraums

Dies ist der Strang, den der Korpus am wenigsten dokumentiert. Das scholarship of teaching and learning und Klassenraumforschung sind Praktiker-Untersuchungen – eine [[teacher-role|Lehrkraft]] untersucht den eigenen Kurs, oft in kleinem Maßstab, oft als Selbststudium –, und die hier gesammelten Seiten liefern keine erforschte Darstellung von KI-Nutzung in dieser Weise.

Die nächste Evidenz ist benachbart statt treffend. Die Doktorandinnen und Doktoranden in [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai und Chan (2026)]] lernten, Forschende zu werden, statt die eigene Lehre zu untersuchen. Das Team in [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] führte einen formalen interdisziplinären Review durch, kein lokales Projekt. Die bibliometrischen Studien beschreiben Disziplinen und Verlage, keine Klassenräume.

Die ehrliche Feststellung ist daher eine Lücke statt ein Befund. KI-gestützte Praktiker-Untersuchung ist plausibel weit verbreitet und in diesem Korpus fast undokumentiert; eine Seite, die die Review-Automatisierungs- und bibliometrische Evidenz so darstellte, als kläre sie, wie eine Dozentin KI zur Untersuchung der eigenen Lehre einsetzen sollte, würde sich übernehmen.

Was hinübergetragen werden kann, ist eine Disposition statt ein Ergebnis: benennen Sie die Rolle der KI in den Methoden, behalten Sie interpretative Entscheidungen beim Menschen, und berichten Sie, was verifiziert wurde und was nicht.

## Was die Evidenz noch nicht etabliert

- **Kein direkter Vergleich.** Martin et al. stellen den Vergleich zwischen KI-gestützten und traditionellen Methoden als künftige Arbeit. Kein Anker-Artikel zeigt, dass eine KI-Methodik zu gültigeren Schlussfolgerungen führt.
- **Dünne Designs durchgehend.** Die Anker sind ein Rahmenvorschlag, der reflektierende Bericht eines Teams, ein Workshop-Bericht, eine Fokusgruppenstudie und beobachtende Bibliometrie. Keine ist eine [[rct|kontrollierte Studie]] einer KI-gestützten Methode.
- **Eine Reporting-Lücke, keine Prüfung der Praxis.** PRISMA-LLM liest Schweigen auf Papierebene; ein Arbeitsablauf ohne Evaluation in seinem Papier kann anderswo validiert sein.
- **Praktiker-Forschung ist unterrepräsentiert.** Nur eine Handvoll Seiten hier erwähnen SoTL oder Klassenraumforschung, deshalb kann der Korpus Behauptungen über Lehrkräfte, die die eigene Praxis untersuchen, nicht begründen.
- **Ein bewegtes Ziel.** Die Werkzeuge verbessern sich schneller als die Publikation, deshalb beschreibt ein Befund über einen Arbeitsablauf von 2025 eine Generation von Systemen, die es in dieser Form womöglich nicht mehr gibt.

## Verbreitete Fehlvorstellungen

- **„LLM- und Software-Papiere werden gleich gut evaluiert."** Seit 2023 berichteten **38,0% der Software- und Produktpapiere gar keine Evaluation, gegenüber 9,3% der LLM-Papiere**. Die Lücke ist groß, und sie läuft gegen die Annahme, dass neueres Werkzeug strenger getestet wird.
- **„Eine Stratifizierung nach Aufgabe behebt die Lücke."** **Die Lücke übersteht die Stratifizierung**: Im Screening und in der Auswahl erreichten Software-Papiere im Durchschnitt **3,2 substanzielle Evaluationsitems, wobei 39,3% keine berichteten**, während LLM-Papiere mehr erreichten. Der Unterschied ist eine systematische Eigenschaft der Papierklasse, nicht der Aufgabe.
- **„Eine positive Evaluation heißt, dass der Arbeitsablauf seine beabsichtigte Messlatte erreicht hat."** Unter **118 LLM-Papieren mit ausschließlich positiven Evaluationen berichteten 52% dennoch mindestens ein Bedenken, dass der Arbeitsablauf unter der für seine Rolle erforderlichen Messlatte blieb**. Die Hälfte der positiven Evaluationen enthielt ihre eigene Widerlegung.

## Zitation

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.

## Verbundene Konzepte

- [[research-methods-aied]] — der Überblick über die Designs, mit denen KI in der Bildung untersucht wird
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## Verbundene Artikel

- [[ai-methodologies-science-education-research-2026]] — ein siebenphasiger reflektierender Rahmen dafür, wie KI-Methodiken die Natur der Forschung zur Wissenschaftsbildung transformieren können (Martin et al., 2026)
- [[scaffolding-systematic-reviews-2026]] — der Bericht eines interdisziplinären Review-Teams über Mentoring und selektive KI-Integration (Wang et al., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — wie 28 Doktorandinnen und Doktoranden generative KI über den Forschungsarbeitsablauf hinweg nutzten, und die Leitlinien, die sie vorschlagen (Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — eine feldweite Prüfung erfundener Referenzen in der Computing-Education-Literatur (Denny et al., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — ein Reporting-Rahmen für KI-gestützte systematische Reviews und die Rechenschaftslücke, die er dokumentiert (Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — ein CHIIR-2026-Workshop-Bericht zu generativer KI und akademischer Suche (Liu, Arguello, Hoeber et al., 2026)
- [[persistent-ai-agents-academic-research]] — eine Fallstudie einer einzelnen Untersuchenden zu einem persistenten Agenten in einem Forschungsworkspace (Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — bibliometrische Evidenz, dass KI-gestütztes Schreiben kleinere, jüngere Forschungsteams begleitet (Wang et al., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — ein 30-tägiger Benchmark, der Tutor-Agenten gegen eine simulierte lernende Person evaluiert (Lee et al., 2026)
- [[beagle-grounded-learner-emulation-2026]] — ein neuro-symbolischer Simulator, der echte Novizen-Mühsal reproduziert (Wang et al., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — warum Simulatoren ein Missverständnis unter beliebigem Feedback verlassen, und wie Training es behebt (Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — eine vorregistrierte Prüfung, die eine feste simulierte lernende Person nutzt, um zu testen, ob Helpfulness Pädagogik misst (Fan et al., 2026)
