---
title: Generative KI
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
technology: [intelligent-tutoring, llm, prompt-engineering, rag]
ethics: [hallucination-risk]
confidence: high
translation_of: concepts/generative-ai
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

> **Generative KI** — KI-Systeme, die Text, Code, Bilder und andere Inhalte erzeugen können, am prominentesten große Sprachmodelle wie GPT-4 und Claude. Generative KI ist die Technologie, die die aktuelle Welle der [[ai-education|KI in der Bildung]]-[[research-methods-aied|Forschung]] antreibt.

## Fragen zum Nachdenken

- Generative KI erzeugt auf Abruf flüssige, selbstbewusst klingende Inhalte. Ist Flüssigkeit gleich Korrektheit, und wo haben Sie eine selbstbewusst klingende, aber falsche Ausgabe gesehen — was machte sie schwer zu erkennen?
- Anders als frühere regelbasierte oder abrufbasierte Systeme erzeugen generative Modelle neue Inhalte, statt gespeicherte Antworten abzurufen. Wie verändert dieser Wandel die Risiken — Halluzination, übermäßiges Vertrauen, akademische Integrität — gegenüber einer Suchmaschine?
- Mit mehr als 80 Artikeln ist generative KI der größte Strang dieser Wissensbasis und erstreckt sich über Tutoring, Assessment, Inhaltserzeugung und Sicherheit. Welche Anwendung erscheint Ihnen für das Lernen am vielversprechendsten, und welche am gefährlichsten — und warum?
- Dieselbe Technologie, die ein sokratisches Tutorial erzeugen kann, kann auch eine „Correct-Answer-Trap“ produzieren, die zum Kopieren anregt. Welche Designentscheidungen könnten generative KI, die Lernen ummantelt, von generativer KI unterscheiden, die es kurzschließt?

## Einführung

### Was generative KI für die Bildung anders macht

Anders als frühere regelbasierte oder abrufbasierte Systeme erzeugt generative KI auf Abruf flüssige, kontextuell angemessene Inhalte. Das schafft sowohl beispiellose Möglichkeiten als auch neuartige Risiken:

- **Inhaltserzeugung:** [[llm|LLMs]] können Unterrichtsmaterialien, Beispiele und Erklärungen erzeugen. [[book-level-synthetic-textbook-organization|Synthetische Lehrbücher]], [[courseblueprint-adaptive-video-generation|adaptive Videos]] und [[ai-generated-instructional-videos-computing-ed|Lehrvideos]] zeigen die Spanne der Erzeugung bildungspolitischer Inhalte.
- **Entwürfe für Unterrichtsplanung, die von Plattform und Sprache abhängen.** Expert:innen[[ai-ed-evaluation|evaluation von KI]]-erzeugten naturwissenschaftlichen Unterrichtsplänen zeigt, dass die Inhaltsqualität weder einheitlich noch neutral ist. [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli und Yildirim (2026)]] ließen elf Spezialistinnen und Spezialisten der [[science-education|Naturwissenschaftsdidaktik]] ChatGPT-4 und ein bildungsfokussiertes Werkzeug (Teacher's Buddy) gegen die Stufen des Engineering-Design-Based-Learning der sechsten Klasse bewerten: die bildungsfokussierte Plattform übertraf die allgemeine über alle acht Qualitätskriterien hinweg, doch bewerteten 7 von 11 Expertinnen und Experten die Pläne dennoch nur als „durch Korrektur anwendbar“. Beide Plattformen erzeugten aus englischen Prompts pädagogisch reichere Ausgabe als aus türkischen, selbst wenn sie gebeten wurden, für Mersin, Türkei, zu lokalisieren — eine [[digital-divide|digitale Gerechtigkeit]]ssorge, bei der die Promptsprache die Unterrichtsqualität formt.
- **Tutoring und Dialog:** [[intelligent-tutoring|KI-Tutoring-Systeme]] nutzen generative KI für konversationellen Unterricht. [[socratic-method|Sokratischer Dialog]] und [[golrang-propact-pair-programming-2026|kollaboratives Tutoring]] nutzen generative Fähigkeiten für [[pedagogy|pädagogische]] Interaktion.
- **Simulierte Patient:innen und Fallkonsistenz.** Ein von mehreren Expertinnen und Experten annotiertes Korpus von 4,815 Studierenden-KI-Nachrichten der Plattform MeduAI-SP ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]) fand, dass nur etwa 0.68% der LLM-erzeugten Antworten simulierter Patient:innen klare Treueprobleme enthielten, und progressive Offenlegung wurde in etwa 99.3% der Patient:innennachrichten als klinisch angemessen bewertet. Das stützt die Behauptung, dass generative KI simulierte Patient:innen Fallkonsistenz und untersuchungsabhängige, nicht vorzeitige Offenlegung unter strukturiertem YAML-Skripting (qwen-max) aufrechterhalten können, was sie zu einer hinreichend stabilen Umgebung für Ergebnisforschung macht statt nur für Plausibilitätsdemonstrationen — während das System während des Lernens absichtlich Diagnosen und [[summative-assessment|summative]] Bewertungen vorenthielt.
- **Assessment:** [[automated-essay-scoring|Aufsatzbewertung]], [[automated-assessment|automatisierte Benotung]] und [[formative-assessment|formatives Assessment]] verlassen sich zunehmend auf generative Modelle. [[benchmark|Benchmarks]] untermauern diesen Wandel für offene Arbeit: [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] fanden, dass kontextsensitive GenAI-Modelle (GPTo1, das nahezu perfekte Übereinstimmung mit menschlichen Benotenden erreichte) frühere Satz-Embedding-Ansätze bei der Benotung offener Antworten von Studierenden deutlich übertrafen, die auf starrem Referenzabgleich beruhten und gültige, aber anders formulierte Antworten falsch klassifizierten. [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] erweitern dies auf die [[medical-education|medizinische]] Bildung vor dem klinischen Teil, wo die Benotung offener Fragen durch GPT-4 substantielle bis nahezu perfekte Inter-Rater-Übereinstimmung mit Fakultätsangehörigen erreichte (gewichtetes Kappa bis 0.94) — aber erst, nachdem Menschen die Rubrik über drei Runden hinweg iterativ verfeinert hatten und in der Schleife blieben, um Diskrepanzen zu schlichten —, während die synthetischste Frage mit ganzheitlicher Rubrik bei moderat stehen blieb (κw = 0.54). Das ist Evidenz dafür, dass die Verlässlichkeit generativen Assessments ebenso sehr durch menschliches Rubrik-Engineering und Fehlermusteranalyse geformt wird wie durch das rohe Modell. Doch dieselbe Flüssigkeit verallgemeinert nicht über Item-Typen hinweg: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] fanden, dass ChatGPT-5 menschliche Fakultätsangehörige bei objektiven Apothekenprüfungsitems erreichte (CCC 0.935–1.000), aber nicht bei Kurzantwort- (≈0) oder Aufsatzitems (0.341–0.854), und eine strukturierte Rubrik schloss die Lücke nicht verlässlich.
- **Risiken:** [[hallucination-risk|Halluzination]], [[cognitive-offloading|übermäßiges Vertrauen]], [[cognitive-offloading|kognitive Entlastung]] und Bedenken der [[academic-integrity|akademischen Integrität]] entstehen speziell aus der Flüssigkeit und [[accessibility|Barrierefreiheit]] generativer KI.

- **Ein Lern-Sicherheits-Problem jenseits der Ausgabequalität.** [[ssail-safe-sound-ai-learning-2026|Rahimi (2026)]] argumentiert, generative KI könne die Qualität der Arbeit einer lernenden Person erhöhen, während sie kognitive Arbeit verrichtet, die diese selbst tun muss, weshalb Sicherheit an der Entwicklungstrajektorie des Menschen beurteilt werden sollte — Learning Safety, die Kompetenzen schützt, und Learning Soundness, die ihre Entwicklung stützt — statt an Genauigkeit, Bias oder Datenschutz.
- **Wirksamkeitsbehauptungen messen Leistung, nicht Lernen.** Die größte Schätzung des Felds — eine [[meta-analysis-systematic-review|Metaanalyse]] von 69 Studien, die *g* = 0.7 für ChatGPT und ähnliche Werkzeuge berichten — bündelt unmittelbaren Aufgabenerfolg statt verzögertes, ungestütztes Behalten, weshalb sie kein Beleg dafür ist, dass generative KI [[learning-gains|Lernen]] erzeugt ([[genai-performance-vs-learning|Yan et al., 2025]]).
- **Erzeugung von Lernumgebungen:** Spezialisierte generative Modelle verwandeln heute ein Kursbriefing direkt in fertige Lernartefakte. [[cogevol-learning-environment-generation-2026|CogEvol (Tu et al. 2026)]], eine Familie von Modellen, die für Einzeldurchgang-Erzeugung strukturierter Folien und eigenständiger interaktiver HTML-Seiten trainiert ist, vollendet eine Folie in einem Median von 17 Sekunden und eine interaktive Seite in 59 — und ersetzt damit minutenlanges [[agentic-ai|Agenten]]-[[scaffolding|Scaffolding]] über mehrere Züge. Verlässlichkeit wird über eine Produktionspipeline erzwungen, die echte Fehler in 53,687 verifizierte SFT-Stichproben konvertiert, plus eine hybride Regel-plus-VLM-Belohnung für GRPO-basiertes RL. Das positioniert generative KI als Maschine zur Inhaltserstellung, mit Implikationen für Produktionsabläufe der [[teacher-role|Lehrenden]] und des [[curriculum-design|Curriculums]], und dafür, ob KI-erzeugte Lernumgebungen funktional und pädagogisch solide sind statt bloß visuell poliert.

Eine Erhebung der Werkzeugnutzung durch Lehrende zeigt, dass sich die Aufmerksamkeit auf Produktion statt Unterricht konzentriert: Bild-, Audio-, Video- und Präsentationswerkzeuge machten etwa die Hälfte der 50 Werkzeuge aus, die 211 Lehrende aus neun Ländern nominierten, während Tutoring- und Chatbot-Werkzeuge die kleinste unterrichtszugewandte Gruppe bildeten ([[typology-generative-ai-tools-education-2026|Bower, Torrington & Lai (2026)]]).

### Die Abdeckung generativer KI in der Wissensbasis

Mit mehr als 80 Artikeln ist generative KI der größte Technologiestrang der Wissensbasis. Forschung erstreckt sich über Wirksamkeitsstudien ([[genai-meta-analysis-programming-learning|Metaanalysen]]), Sicherheitsbedenken ([[hazra-safetutors-pedagogical-safety-2026|Schäden von Tutoren]], [[eduguard-safe-rag-llm-tutor|Leitplanken]]) und Designprinzipien ([[instructional-guidance-genai-learning|Unterrichtsorientierung]]).

Über 53 Studien hinweg gebündelt übertraf GenAI-assistierte Bildung nicht-GenAI-Ansätze bei Leistung (g = 0.40), höherrangigem Denken (g = 0.72), Motivation (g = 0.81) und Schreiben (g = 0.76), obwohl spielassistiertes GenAI keinen signifikanten Nutzen hinzufügte (g = 0.24) ([[genai-educational-outcomes-meta-analysis|Dong (2026)]]).


Eine separate Metaanalyse von 42 Studien zu Motivation allein setzt den gebündelten Effekt niedriger an (g = 0.764) und berichtet ein 95%-Prädiktionsintervall über [−0.689, 2.217], weshalb der Motivationsvorteil für ein neues Setting nicht verlässlich positiv ist ([[genai-learning-motivation-meta-analysis-2026|Fang et al. (2026)]]).

Generative UI ist die neueste Fähigkeit in diesem Strang: Modelle, die ein funktionierendes interaktives Artefakt ausgeben — Schieberegler, manipulierbare Simulationen — statt Prosa. [[generative-ui-education-learning-interactives-2026|Kovshov et al. (2026)]], ein Team von Google Research, berichten, dass generative UI von der Stange noch nicht pädagogisch präzise genug für komplexe Konstrukte ist, dass aber das Zerlegen eines Lernziels in progressive gestufte Ziele und das Umhüllen der Erzeugung mit Kritik- und Selbstverbesserungsschleifen Interaktive erzeugt, die erfahrene Lehrkräfte als akzeptabel bewerten. Ihr Design ist ein Orchestrierungsdesign: Lehrende benennen Ziele, genehmigen sie und wählen unter Kandidatensimulationen, weshalb sich die bindende Beschränkung für maßgeschneidertes [[simulation|interaktives Lernmaterial]] von der Produktion hin zur Spezifikation verschiebt, und [[guardrails|pädagogische Leitplanken]] in die Erzeugungspipeline eingebettet sind statt der Wachsamkeit der Lehrenden im Nachhinein überlassen.

Jenseits dieser Kernstränge erweitert neuere Arbeit die Evidenzbasis über [[governance|institutionelle]], interaktionale und fachliche Kontexte. Qin (2026) dokumentiert, wie die Lingnan University GenAI-Kompetenz für alle Studierenden im Grundstudium als Teil einer digitalen Transformation der freien Künste institutionalisierte. Chang und Li (2026) zeigen, dass Gespräche zwischen Studierenden und KI fachassoziiertes kognitives [[student-engagement|Engagement]] kodieren, wobei etwa 62% der Prompts höherrangige kognitive Anforderung widerspiegeln. Neto und Kolleg:innen (2026) [[meta-analysis-systematic-review|systematisch reviewen]] GenAI in der szenariobasierten Gesundheitsbildung und finden, dass [[prompt-engineering|Prompt-Design]] als Unterrichtsspezifikation funktioniert, aber selten mit Unterrichtsrahmenwerken (34.8%) abgestimmt oder in reproduzierbarer Detailtiefe berichtet wird (34.8%). GenAI treibt auch Rollenspielsimulationen von Lernenden für praxisbasiertes [[teacher-education|Lehrkräftetraining]] an: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang und Zhang (2025)]] bauten *Student GPT*, einen eigenen ChatGPT-Chatbot, der eine [[k-12|Mittelschul]]schülerin bzw. einen Mittelschüler simulierte, die bzw. der gängige [[misconceptions|Fehlvorstellungen]] zum Verhältnisdenken hält, und gaben angehenden Mathematiklehrkräften erschwingliche, inhaltsspezifische Übung im Diagnostizieren von Studierendendenken — Evidenz dafür, dass Prompt-Design (ein literaturgestützter Prompt evozierte verlässlich die angezielten konzeptuellen Fehler, 0.98 gegenüber 0.40) ein generatives Modell von der Stange in eine nützliche pädagogische Persona lenken kann.

Ein [[li-language-educators-genai-review-2026|systematischer Review von Sprachlehrenden]] (Li et al. 2026) findet, dass Lehrende GenAI am meisten für vorbereitende Inhaltsarbeit wertschätzen — Unterrichtsplanung, Materialerstellung und Schreibunterstützung —, während sie beim Einsatz im live geführten Klassenzimmer zögern, mit Bedenken, die sich um [[academic-integrity|akademische Integrität]] (Plagiat und [[assessment-validity|Assessmentvalidität]]), professionelle Verdrängung und Technostress zentrieren; die Annahme wird von berufsidentitätsbezogenen, pädagogischen, technischen, institutionellen und Integritätsfaktoren geformt, und Kompetenzlücken ordnen sich Episteme, Techne und Phronesis zu.

Inhaltserzeugung reicht ebenfalls über die [[math-education|Mathematik]] hinaus in die Mitgestaltung von Lernressourcen mit Lehrenden — zum Beispiel von Lehrenden und KI mitgestaltete [[simulation|Simulation]]-Scaffolds für [[stem-education|Drohnen-STEM]]-Lernen, die pädagogische Validität und kontextuelle Relevanz bewahren. In der STEAM-[[arts-design-and-media-education|Kunstbildung]] von Kindern quantifizierten [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo und Tahir (2025)]] experimentell die Zugewinne ChatGPT-assistierter gegenüber von Lehrenden erzeugten Unterrichtsplänen (Expert:innen-median 20.5 gegenüber 17.6, p = .002, großer Effekt) — doch dokumentiert dieselbe Studie, dass flüssige Ausgabe echte Versagensarten bei der Erzeugung für das Klassenzimmer trägt: Pläne, die für den täglichen Unterricht idealisiert oder unpraktisch sind, übersehene Kindersicherheitsbeschränkungen (z. B. Schnitzmesser für [[early-childhood-elementary-ai-education|kleine Kinder]] vorzuschlagen), westlich-zentrierten kulturellen Bias und logisch fehlerhafte oder irrelevante Bild-/Ressourcenerzeugung. Der Beitrag ist ein Prompt-Rahmenwerk (Role–Instructions–End Goal plus eine „vier Punkte und eine Linie“-Qualitätsrubrik), das die Verlässlichkeitsfrage davon, ob das Modell erzeugen kann, darauf verlagert, wie Prompts und Evaluationskriterien es für pädagogische Nutzung beschränken müssen. Auf [[equity-in-ai-education|Gerechtigkeit]] zielende Nutzungen bleiben untererforscht; eine Initiative für einen reinen Mädchen-GenAI-Makerspace in Europa verband zwei GenAI-Werkzeuge mit feministischer Pädagogik, um anhaltende Geschlechterungerechtigkeiten bei der Teilhabe am Rechnen anzugehen, und analysierte von Mädchen mit GenAI erzeugte Bilder und Reflexionen von Beteiligten. Assistive und inklusive Anwendungen sind ein wachsender Strang: [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]] — eine [[qualitative-research|qualitative]] Fallstudie mit 21 sehbehinderten Studierenden im Grundstudium in Palästina — fanden, dass GenAI Tempo, Inhalt und Vermittlung an individuelle Lernprofile anpasst, komplexe akademische Texte vereinfacht und Inhalte über Modalitäten hinweg konvertiert, wobei Lernende es als Ergänzung statt als Ersatz für Lehrkräfte betrachten.

- **Generative KI als [[pedagogical-agent|pädagogischer Agent]] in der elementaren kritischen Medienkompetenz.** Demir und Akar (2026) operationalisieren das 5E-Unterrichtsmodell mit Werkzeugen generativer KI (ChatGPT für reflexive Fragen und Q&A, Grammarly und Canva AI für die Inhaltsverfeinerung, Padlet für [[peer-assessment|Peer-Feedback]]), die phasenweise eingebettet sind statt als isolierte Zusätze, in einem 18-stündigen Programm zur kritischen Medienkompetenz für türkische Viertklässlerinnen und Viertklässler, ausgerichtet auf die türkischen Sprach- und Sozialkunde-Curricula. Die KI-unterstützte Gruppe zeigte große Zugewinne im Medienlesen (+3.50), im Schreiben (+1.67) und in der gesamten Medienkompetenz (+5.17, alle p < .01), mit Effektstärken zwischen Gruppen von Cohen's *d* = 1.12 (Lesen), 1.18 (Schreiben) und 1.31 (gesamte Kompetenz), während die Kontrollgruppe nur bescheiden vorankam. Qualitative Analyse förderte sechs Bereiche des Wachstums kritischer Medienkompetenz zutage — digitaler Selbstschutz und [[privacy|Datenschutz]], zweckbestimmter und verantwortungsvoller Mediennutzung, sicherer Kommunikation und Grenzbewusstsein, [[critical-thinking|kritischer Evaluation]] und Desinformationsbewusstsein, Online-Risikobewusstsein, und Medien[[ethics|ethik]]/digitale Bürgerschaft —, was illustriert, wie generative KI als ummantelnder pädagogischer Agent in ein Curriculum gestaltet werden kann, der kritische Evaluation kultiviert, statt sie kurzzuschließen.

### Generative KI in spezialisierten Bereichen: Legasthenie-Unterstützung

Ein interdisziplinärer systematischer Review aus dem Jahr 2026 (Dabaghi, D'Urso & Sciarrone, PRISMA-gestützt, 2018–2024, n=72) findet, dass **generative KI im Bereich der Legasthenie-Unterstützung untergenutzt ist**. GAI-Forschung (alle aus 2024) bündelt sich in intelligente [[conversational-ai|Chatbots]], Unterstützung für [[teacher-role|Lehrkräfteschulung]] und explorative Studien und überholt rasch klassisches [[machine-learning|ML]] als Werkzeug der Wahl — doch bleiben rigoroses Experimentieren und reale Validierung weitgehend abwesend. Die Zukunfts-Trend-Analyse des Reviews zeigt auf GAI-gestützte personalisierte Materialien und Echtzeit-adaptives Feedback, [[multimodal|multimodale]] diagnostische Modelle, die Blickbewegungsmessung, EEG und verhaltensbezogene [[learning-analytics|Analytics]] integrieren, NLP-getriebene [[intelligent-tutoring|intelligente Tutoring-Systeme]] und konversationelle Agenten, und auf Lehrende zielende Unterstützungswerkzeuge. Das illustriert sowohl das Versprechen generativer KI für Inhaltserzeugung und interaktive Unterstützung in einem spezialisierten Bereich mit hohem Bedarf als auch das Risiko, dass ihre Annahme der Evidenzbasis davonläuft.

## Verbundene Konzepte

- [[llm]] — die Modellklasse, die generativer KI zugrunde liegt
- [[prompt-engineering]] — wie Ausgaben geformt werden
- [[rag]] — retrieval-augmented grounding
- [[ai-literacy]] — die Kompetenz, die nötig ist, um sie wirksam zu nutzen
- [[ai-education]] — das weitere Feld
- [[intelligent-tutoring]] — konversationelle und generative Tutoring-Systeme
- [[cognitive-offloading]] — das Risiko übermäßigen Vertrauens, das generative KI verstärkt
- [[hallucination-risk]] — ein zentrales Verlässlichkeitsrisiko erzeugter Inhalte
- [[academic-integrity]] — Integritätsbedenken aus flüssiger Erzeugung
- [[automated-assessment]] — generative Modelle in Benotung und Feedback
- [[ai-technologies]] — der Dachbegriff der KI-Verfahren und -Modelle
- [[higher-ed]] — ein primärer Einsatzkontext
- [[k-12]] — ein primärer Einsatzkontext

## Verbundene Artikel
- [[genai-learning-motivation-meta-analysis-2026]] — Meta-analysis of GenAI's effect on learning motivation, with a prediction interval spanning harm to benefit

- [[typology-generative-ai-tools-education-2026]] — Typology of Generative AI Tools for Education
- [[generative-ui-education-learning-interactives-2026]] — Harnessing Generative UI for Education: Tailored Learning Interactives
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: A Design Framework for Safe and Sound AI for Learning
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of GenAI learning outcomes
- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI in programming learning
- [[genai-performance-vs-learning]] — Performance vs. learning with GenAI
- [[hazra-safetutors-pedagogical-safety-2026]] — Harms of AI tutoring agents
- [[eduguard-safe-rag-llm-tutor]] — Guardrailing a safe RAG LLM tutor
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
