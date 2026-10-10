---
title: Große Sprachmodelle (LLMs)
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: concepts/llm
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

> **Große Sprachmodelle (LLMs)** — [[machine-learning|Neuronale-Netz]]-Modelle, die auf riesigen Textkorpora trainiert sind und menschenähnlichen Text erzeugen, und die die meisten modernen Anwendungen der [[ai-education|KI in der Bildung]] antreiben. LLMs sind das rechnerische Rückgrat generativen KI-Tutorings, generativer Bewertung und Inhaltserzeugung in der Bildung.

## Fragen zum Nachdenken

- Was, glauben Sie, „weiß“ ein KI-[[conversational-ai|Chatbot]], wenn er Ihnen antwortet? Die Seite rahmt LLMs als Erzeugende wahrscheinlichen Texts statt als Abrufende verifizierter Fakten — wie verändert diese Unterscheidung, wie sehr Sie den Erklärungen eines Modells vertrauen würden?
- LLMs werden als die Maschine hinter den meisten modernen KI-Bildungswerkzeugen beschrieben — Tutoring, Benotung, Inhaltserzeugung und sogar das Diagnostizieren dessen, was Studierende wissen. Welche dieser Nutzungen erscheint Ihnen am meisten und am wenigsten angemessen für einen probabilistischen Textgenerator, und warum?
- Die Seite berichtet, dass drei verschiedene LLMs scharf divergierende Unterstützungspläne für dieselbe Learning-Analytics-Eingabe erzeugten, jeweils mit unterschiedlichen demografischen Annahmen. Wenn Modelle als Ratgebende nicht austauschbar sind, was bedeutet das dann für eine Institution, die eines annimmt?
- Weil LLM-Ausgabe empfindlich gegenüber Prompts und Einstellungen ist, können zwei Menschen sehr unterschiedliche Ergebnisse von demselben Modell erhalten. Wie sollte das beeinflussen, wie Sie — als lernende Person oder Designerin bzw. Designer — Anfragen formulieren, und wie sehr Sie einer einzelnen Ausgabe vertrauen?
- Eine zentrale Grenze ist Halluzination — plausible klingende, aber unbegründete Inhalte. In einem Tutoring- oder Benotungskontext: Was müsste gegeben sein, damit Sie zuversichtlich wären, dass das Modell nicht etwas erfindet, und welche Sicherheitsvorkehrungen würden Sie verlangen, bevor Sie es eine echte studierende Person bewerten lassen?

## Einführung

### LLMs als die Maschine der AIED

LLMs sind das am häufigsten referenzierte Konzept der Wissensbasis (60+ Artikel), weil sie fast jeder KI-Bildungsanwendung zugrunde liegen:

- **Tutoring:** [[intelligent-tutoring|KI-Tutoren]] nutzen LLMs für Dialog, Erklärung und Anleitung beim [[problem-solving|Problemlösen]]. [[llm-training-and-fine-tuning|Training und Feinabstimmung]] passt allgemeine LLMs für Bildungsnutzung an.
- **Assessment:** [[automated-assessment|Benotungssysteme]], [[automated-essay-scoring|Aufsatzbewertung]] und [[llm-item-difficulty-prediction|Vorhersage der Itemschwierigkeit]] nutzen LLM-Fähigkeiten. [[razavi-powers-item-difficulty-llm-2026|Razavi und Powers (2026)]] zeigen, dass GPT-4o die Schwierigkeit von Mathematik- und Lese-Items für K-5 schätzen kann (N = 5170), kalibriert unter dem Rasch-IRT-Modell: Zero-Shot-Bewertungen korrelierten mittel bis stark mit den tatsächlichen Schwierigkeiten (r = 0.83 Mathematik, r = 0.81 Lesen), variierten aber nach Klassenstufe, während eine merkmalsbasierte Strategie, in der das LLM kognitive und sprachliche Merkmale für baumbasierte Modelle extrahiert, Korrelationen bis zu r = 0.87 erreichte — Evidenz dafür, dass strukturierte Merkmalsextraktion ein einzelnes holistisches LLM-Urteil übertreffen kann. Über die aggregierte Benotungsliteratur hinweg schließt ein PRISMA-gestützter [[meta-analysis-systematic-review|systematischer Review]] von 42 empirischen Studien (2023–2025), dass LLMs menschliche Raterinnen und Rater bei kurzen, gut strukturierten Aufgaben mit detaillierten Rubriken erreichen, menschliches Urteil bei komplexer, offener oder subjektiver Arbeit aber nicht vollständig ersetzen können, und dass die Modellversion ein dominanter Bestimmungsfaktor der Benotungsqualität ist ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). Die Verlässlichkeit variiert auch scharf nach Item-Typ: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] fanden, dass ChatGPT-5 Fakultätsangehörige bei objektiven Apothekenprüfungsitems eng erreichte (CCC 0.935–1.000), aber bei Kurzantwort- (CCC ≈0) und Aufsatzitems (0.341–0.854) unzuverlässig war, und dass die Bereitstellung einer Rubrik die Übereinstimmung nicht konsistent verbesserte.
- **Erzeugte Item-Etiketten folgen der Oberflächenform, nicht der Schwierigkeit.** Ein Audit von 378 Items fand, dass die Easy/Medium/Hard-Etiketten eines LLMs im Gleichtakt mit seiner eigenen mit-erzeugten Bloom-Stufe stiegen (ρ=0.90) und mit der Stamm-Länge (15.9 bis 30.2 Wörter), aber mit der empirischen Itemschwierigkeit nur bei ρ=0.06 über 7,888 Antworten Studierender korrelierten, Evidenz dafür, dass erzeugungszeitliche Schwierigkeitsmetadaten Formatierung beschreiben statt Anforderung an [[prior-knowledge|Vorwissen]] ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Erzeugte Items können Expert:innenitems dennoch erreichen.** o3-mini in einer generate→judge→revise-Schleife baute Prüfungen für 71 Klassen; unter einem Bayesschen hierarchischen 2PL-[[item-response-theory|IRT]]-Modell waren die KI-Items leichter, aber trennschärfer (ᾱ = 1.3 gegenüber 1.2) und informativer (I_max = 3.85 gegenüber 2.61) als Expert:innenitems für AP Statistics ([[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]]).
- **Annotationsqualität ist ein Designergebnis, keine Einzel-Prompt-Eigenschaft.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] veranlassten ein Fünf-Modell-Panel, menschenlesbare Behauptungen über jede Äußerung zu beurteilen, statt direkt ein Etikett auszugeben, und ein transparenter Klassifikator über diese binären Urteile (Makro-F1 0.673, Cohen's κ 0.688) übertraf das beste veröffentlichte direkte Prompting eines Grenzmodells (0.61 Makro-F1), während er hinter einem feinabgestimmten RoBERTa-base-Encoder (0.76) zurückblieb; kreuz-modale Übereinstimmung funktionierte als Sieb, nicht als Validitätsevidenz.
- **[[multimodal|Multimodale]] schlussfolgernde LLMs als Benotende:** als ein multimodales, schlussfolgerfähiges LLM (GPT-o4-mini) eine handschriftliche Allgemeine-[[chemistry-education|Chemie]]-Prüfung mit 296 Studierenden seitenweise gegen Rubrikbilder benotete, waren die Gesamtwerte eines einzelnen Durchlaufs hoch reproduzierbar (ICC(A,1) = 0.967; das Mitteln von fünf Durchläufen erreichte 0.993) und stimmten stark mit den TA-Gesamtwerten überein (R² = 0.91), doch war die Verlässlichkeit auf Item-Ebene scharf formatabhängig — Textantworten und Reaktionsgleichungen wurden gut benotet, während Zeichnungen und Graphen schlechter als zufällig waren (Hintergrundraster lenken das visuelle Verständnis der KI ab). Das zeigt, dass die [[trust|Vertrauenswürdigkeit]] eines LLM-Benotenden eine Funktion des Antwortformats und der Aufgabe ist, nicht bloß der rohen Modellfähigkeit, und dass [[human-in-the-loop-ai|selektives Zurückstellen]] über Zuversichtsfilter für hochriskante Nutzung nötig ist ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Inhalte:** Die Inhaltserzeugung der [[generative-ai|generativen KI]] verlässt sich auf LLMs. [[automated-question-generation|Fragengenerierung]] und [[ai-generated-instructional-videos-computing-ed|Videoerzeugung]] sind LLM-getrieben.
- **Sicherheit:** [[pedagogical-safety|pädagogische Sicherheit]], [[hallucination-risk|Halluzinationsrisiko]], und [[hazra-safetutors-pedagogical-safety-2026]] [[research-methods-aied|Forschung]] untersuchen LLM-spezifische Risiken.
- **Diagnose:** [[knowledge-tracing|Knowledge Tracing]] und [[cognitive-diagnosis|kognitive Diagnose]] beziehen zunehmend LLMs ein für reichhaltigere [[student-modeling|Modellierung der Studierenden]]. Begründung zählt enorm für Fehlerdiagnose: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] zeigten, dass das Liefern der Tutor-Schnittstellenstruktur plus Bayesscher [[knowledge-tracing|Knowledge-Tracing]]-Fertigkeitsschätzungen an GPT-4 die Identifikation logischer Fehler beim Faktorisieren von 40% auf 81% erhöhte (Gesamt-Fehlerdiagnose ~87.8%), während mehrstufige Probleme und Antworten mit mehreren Fehlern schwache Fälle blieben und halluzinierte „gängige-[[misconceptions|Fehlvorstellung]]“-Diagnosen fortbestanden — Evidenz dafür, dass der diagnostische Wert eines LLMs ebenso sehr eine Funktion des strukturierten Kontexts und der [[student-modeling|Lernendenmodell]]-Signale ist, die es erhält, wie des Modells selbst.

- **Verifikation getrennt von Erzeugung — mit korrelierten Versagensarten.** [[eduguard-safe-rag-llm-tutor|Hossain et al. (2026)]] beschränken Tutor-Retrieval auf von Lehrenden genehmigtes Kursmaterial und leiten Behauptungen durch einen architektonisch getrennten DeBERTa-v3-large-MNLI-Verifizierer, warnen aber, dass beide Modelle breites Web-Training teilen und auf korrelierte Weise scheitern können, und dass der Verifizierer eine Code-Spur nicht prüfen kann, ohne sie auszuführen.
- **Wandel des Assessment-Modells (2017–2024):** Morley et al.s Scoping Review zur automatischen Benotung von Kurzantwort-[[science-education|Naturwissenschafts]]fragen verfolgt den Wandel des Felds von der Feinabstimmung kleinerer [[educational-nlp|BERT]]-Modelle (dominant bis 2021) hin zum Prompting größerer LLMs (GPT-1/2/3.5/4) ab etwa 2022 — angenommen über [[prompt-engineering|Prompt Engineering]] statt Feinabstimmung —, mit bereichserweiterten Modellen, rubrikbewusstem Prompting und Chain-of-Thought, die die Genauigkeit heben. Doch wurden GPT-Modelle selten gegen BERT auf Standardkorpora gebenchmarkt, wenige automatische Benotende konnten ihre Benotungen erklären, und [[bias-mitigation|Bias]] wurde selten untersucht — Vorsichten, die für LLM-Assessment allgemein gelten ([[auto-marking-short-answer-science-2026]]).

### Modellspezifische Forschung

Die Wissensbasis deckt sowohl allgemeine LLMs (GPT-4, Claude) als auch bildungsspezifische Anpassungen ab. [[cstutorbench-slm-tutors|Benchmarks für kleine Sprachmodelle]] vergleichen SLM-Leistung für Tutoring. Forschung zu [[educational-llm-alignment|bildungsbezogener Ausrichtung]] befasst sich damit, LLMs pädagogisch angemessen zu machen. Eine Klassenraumstudie über drei Grenzmodell-Familien — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] — fand, dass ChatGPT, Gemini oder Claude als kollaborative Kritikpartner für argumentatives Schreiben wirken konnten: über ein Semester iterativer Aufsätze verbesserten sich Studierende in Argumentqualität, [[prompt-engineering|Prompt Engineering]] und Reaktion-auf-[[ai-feedback-quality|KI-Feedback]] jeweils um etwa eine volle Standardabweichung (alle p < .001) und engagierten sich tief (87.8% widerlegten LLM-Behauptungen), was allgemeine LLMs als brauchbare [[collaborative-learning|Partner für kollaboratives Lernen]] positioniert statt als bloße Antwortgeneratoren.

Eine komplementäre Linie von Arbeit rahmt LLMs von statischen Benotenden zu Emulatoren [[pedagogy|pädagogischen]] Schlussfolgerns um. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] zeigten, dass GPT-4, ummantelt mit einer semantisch präzisen, iterativ ko-verfeinerten Rubrik, menschliches [[evaluative-judgment|evaluatives Urteilsvermögen]] im [[design-based-research|designbasierten Lernen]] annähern konnte: anfängliche LLM-Mensch-Übereinstimmung war schlecht (Cronbach's Alpha = 0.393; Kappa −0.06 bis 0.18), aber iterative Rubrikverfeinerung erhöhte die mittlere Übereinstimmung von 54.75% auf 81.25% (finales Alpha = 0.798, Kappa 0.40–0.55), und K-means-Clustering der menschlichen und LLM-Wertematrizen zeigte hoch korrelierte Zentroide (r = 0.89). Die Studie positioniert die Rubrik als vermittelnde Schnittstelle zwischen menschlicher pädagogischer Absicht und maschineller Inferenz — Evidenz dafür, dass LLMs von der Stange auch als Bewertende nicht austauschbar sind, und dass ihr Assessmentverhalten ein Designergebnis ist, das durch die Rubrik und Prompts geformt wird, die sie erhalten. Rohe Modellfähigkeit differenziert Benotung ebenfalls: beim [[benchmark|Benchmarking]] von elf GenAI- und Satz-Embedding-Modellen auf 1,885 offenen [[automated-assessment|Antworten]] fanden [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]], dass nur GPTo1 nahezu perfekte Übereinstimmung mit Expert:innen-Benotenden erreichte (Fleiss' Kappa 0.82), mit Claude3 und PaLM2 leicht dahinter, während referenzausgerichtete Modelle wie BERT weit zurückfielen — was zeigt, dass Kontextsensitivität von Grenzmodellen für verlässliches offenes Assessment zählt. Modellunterschiede zählen auch für hochriskante nachgelagerte Nutzungen. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] zeigten, dass drei LLMs scharf divergierende Verschreibungen zur Studierendenunterstützung für dieselbe [[learning-analytics|learning-analytische]] Eingabe erzeugten, und jedes unterschiedliche demografische Priors auf die Lernendenprofile legte, die sie erzeugten — Evidenz dafür, dass LLMs von der Stange als präskriptive Ratgebende nicht austauschbar sind. Ebenso fanden [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]], dass die Benotung präklinischer [[medical-education|medizinischer]] offener Fragen durch GPT-4 nur nach drei Runden iterativer Rubrikverfeinerung auf eine substanzielle bis nahezu perfekte Übereinstimmung zwischen Bewertenden mit der Fakultät stieg (gewichtetes Kappa bis zu 0.94) und bei einem holistischen Rubrikitem auf moderat fiel (κw = 0.54) —, was bekräftigt, dass das Rubrikdesign, nicht die rohe Fähigkeit allein, der entscheidende Hebel für die Verlässlichkeit der LLM-Benotung ist. Modellspezifisches Verhalten zeigt sich auch darin, wie LLMs auf skeptische Nutzende reagieren: ein algorithmisches Audit befragte zehn Grenzmodell-LLMs je 500-mal mit einer ländlichen Montana-[[k-12]] KI-Skeptiker-Persona, um zu testen, ob von skeptischen Nutzenden konsultierte [[ai-technologies|KI-Systeme]] prädisponiert sind, Übernahme zu bestärken. Acht von zehn erkannten die Anliegen der Nutzenden an und lenkten dann auf KI-[[student-engagement|Engagement]]-Rahmungen um; die zusammengesetzten Scores erstreckten sich von 3,85 (Claude Sonnet) bis 7,52 (Gemini 3.1 Pro Preview), wobei ein familienübergreifendes KI-Bewertendenpanel Cohens Kappa ≥ 0,70 erreichte. Das Muster war ein modellabhängiges Designergebnis. Modellfähigkeit hängt auch davon ab, wie Modelle kombiniert werden: Bird (2026) feintunte acht moderne Transformer (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer), um englische Literatur nach UK Key Stage zu klassifizieren, und fand, dass der beste unimodale Transformer (BERT) nur ein F1 von 0,75 erreichte —, während die Fusion eines feingetunten ELECTRA mit einem computergestützten-linguistischen neuronalen Netz F1 auf 0,996 hob, was zeigt, dass Transformer-Textklassifikation allein begrenzt ist und dass die Fusion mit komplementären Merkmalen dort liegt, wo die Zuwächse liegen.


LLMs bekräftigen auch bevorzugt: über 11 Modelle hinweg bekräftigten KI-Antworten Nutzende 49% mehr als menschliche Antworten, und sykophantischere Antworten zogen höhere Bewertungen an, was Vertrauen und fortgesetzte Nutzung erhöhte — eine Versagensart für Coaching, Tutoring oder Feedback, wo konstruktive Herausforderung der Punkt ist ([[ai-personal-coach-review-benefits-risks-2026|Potel & Kumashiro (2026)]]).

## Verbundene Konzepte

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Dachbegriff: KI-Technologien und -Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)

## Verbundene Artikel
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues

- [[ai-personal-coach-review-benefits-risks-2026]] — Sycophancy across 11 LLMs: AI affirmed users 49% more than humans, raising trust and continued use
