---
connected_resources: [drawsplat]
title: Multimodale KI
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
translation_of: concepts/multimodal
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Multimodale KI** — [[ai-technologies|KI-Systeme]], die Inhalte über mehrere Modalitäten hinweg verarbeiten, verstehen oder generieren — Text, Bilder, Audio, Video und strukturierte Daten —, und die Bildungsfragen, die diese Systeme aufwerfen. In [[ai-education|KI in der Bildung]] erscheint multimodale KI in drei unverwechselbaren Rollen: als der *Lerninhalt*, den Lernende schaffen und mit dem sie sich einlassen ([[multimodal-learning-genai|multimodales Lernen]]), als die *Fähigkeitsgrenze* von Tutoringsystemen, die Diagramme und Graphen interpretieren müssen ([[syal-multimodal-dialogue-stem-2026|multimodales Tutoring]]), und als das *Assessmentsignal*, das zur Evaluation von Verstehen genutzt wird ([[multimodal-item-parameter-estimation-2026|multimodale Messung]]).

## Fragen zum Nachdenken

- Denken Sie an einen Graphen, ein Kraftediagramm oder eine Skizze, die Sie in Worten zu erklären gekämpft haben. Was legt diese Erfahrung über die Grenzen eines rein textbasierten [[intelligent-tutoring|KI-Tutors]] nahe, der bei bildreichen Problemen helfen will?
- Ein [[physics-education|Physik]]-Tutor beantwortet textbasierte Probleme ~96% der Zeit, fällt aber auf ~74% bei Problemen, die Bedeutung in Diagramme einbetten. Was verursacht Ihrer Meinung nach diese „multimodale Interferenz“ vor der Lektüre —, und können Sie sich eine Lösung denken, die kein Neutrainieren des Modells erfordert?
- Sie haben wahrscheinlich sowohl Text als auch Bilder mit KI-Werkzeugen generiert. Haben Sie gefunden, dass „[[prompt-engineering|Prompten]] für Bilder“ sich vom Prompten für Text unterscheidet? Welche Fähigkeiten könnten Studierende brauchen, um eine abstrakte Idee in einen präzisen visuellen Prompt zu übersetzen?
- Multimodale KI kann Aufsätze benoten, Feedback mit Audioerzählung generieren und sogar Prüfungsitemstatistiken aus Bild-und-Text-Items rekonstruieren. Was signalisiert (oder riskiert) die Verschiebung von reinem Text zu multimodalem Assessment für [[bias-mitigation|Fairness]] und Validität?
- Wie könnte die Tatsache, dass KI-Unterstützung bei genau den diagrammlastigen Problemen weniger verlässlich ist, die tiefes [[stem-education|STEM]]-Verstehen aufbauen, eine [[equity-in-ai-education|Gerechtigkeitslücke]] zwischen Lernenden schaffen? Wer ist am stärksten betroffen?
- Multimodale Systeme können Text zu Audio oder Visuals übersetzen, um inklusives Lernen zu stützen, ermöglichen aber auch feingranulares Klassenzimmer-Sensing. Wo ist die Grenze zwischen hilfreichem multimodalem Zugang und Überwachung?

## Einführung

Multimodalität in KI bezieht sich auf die Fähigkeit, über verschiedene Repräsentationsformen zu arbeiten statt nur über Text. Moderne [[generative-ai|generative KI]]- und [[llm|LLM]]-Systeme akzeptieren und produzieren zunehmend Bilder, Audio und Video zusätzlich zu Text, was neue Möglichkeiten und neue Risiken für Bildung eröffnet. Gegründet in sozial-semiotischer Theorie, die vertritt, dass Bedeutung über Modi hinweg gemacht wird — nicht nur Wörter —, verändert multimodale KI, wie [[teacher-role|Lehren]], Lernen und Assessment gestaltet und evaluiert werden.([[multimodal-learning-genai]])

## Drei Gesichter multimodaler KI in der Bildung

### 1. Multimodales Lernen und Inhaltserzeugung

Multimodale KI ermöglicht Lernenden, Inhalte über Text, Bild, Audio und Video zu produzieren und sich damit einzulassen. Ein Leitfaden für Lehrende zu multimodalem Lernen mit generativer KI positioniert diese Werkzeuge als „kyber-sozialen“ Partner: sie ergänzen —, können aber nicht ersetzen — menschliche Sinnstiftung.([[multimodal-learning-genai]])

- **[[ai-literacy|KI-Kompetenz]] in multimodalen Kontexten** ist geschichtet: grundlegendes Bewusstsein multimodaler Plattformen, intermediäre Ko-Kreation und [[critical-thinking|kritische Evaluation]] von Outputs, und fortgeschrittenes Design multimodaler Aktivitäten und Assessments.([[multimodal-learning-genai]])
- **Multimodales Prompting** ist selbst eine anspruchsvolle epistemische Praxis. Studierende, die für Bilder ebenso wie für Text prompten, entdecken, dass „Prompt-Literacy sich zwischen Prompten für Text und Prompten für Bilder unterscheidet“ — abstrakte Bedeutung in maschinenlesbare multimodale Prompts zu übersetzen erfordert ein präzises visuelles Vokabular und exponiert Systemgrenzen und -bias.([[multimodal-prompting-ai-literacy]])
- **Multimodales Assessment** verschiebt sich von Aufsätzen zu Artefakten, die Text, Bild, Audio und Video kombinieren, wobei Lehrende KI nutzen, um Erzeugung und Feedback zu [[scaffolding|gerüsten]] statt die eigene Produktion der lernenden Person zu ersetzen.([[multimodal-learning-genai]])
- **Multimodales Komponieren der Lernenden als Gerüst für kritisches Denken trägt einen Trade-off.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] zeigen, dass es, wenn Schülerinnen und Schüler der oberen Grundstufe schriftliche Erzählungen in KI-generierte Bilder und kurze Videos verwandeln, anhaltende Zuwächse in Interpretation, Analyse, Evaluation und Erklärung stützte —, aber nicht Inferenz. Weil die Visuals Geschichtsverstehen explizit machten, berichteten Studierende geringere Notwendigkeit, implizite Bedeutung aus Text allein zu inferieren; Peer-Kollaboration, nicht das multimodale Werkzeug, stellte Gelegenheiten für Inferenz wieder her. Der Wert multimodaler KI als Sinnstiftungspartner ist damit dimensionsspezifisch und hängt von [[learning-design|Instruktionsdesign]] ab, das die inferenzielle und [[self-regulated-learning|selbstregulatorische]] Arbeit bewusst wieder einführt, die die Externalisierung kurzschließen kann.
- **Multimodale [[writing-education|Komposition]] der Lernenden als kritische KI-Kompetenz.** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss et al. (2026)]] analysieren 90-Sekunden- bis 3-minütige Video-Public-Service-Ankündigungen von 22 Elftklässlerinnen und Elftklässlern zu selbstgewählten KI-[[ethics|Ethik]]themen — Überwachung durch schulregulierte Laptops und elektronische „Hall-Passes“, [[privacy|informierte Einwilligung]] und punitive algorithmische Anschuldigung —, als [[ai-literacy|kritische KI-Kompetenz]], vollzogen durch Komposition über bewegtes Bild, Ton, Text und die eigenen Körper der Studierenden. Über alle sieben Filme hinweg wurde Schaden als aus Mensch-Maschine-Verstrickung entstehend dargestellt statt aus dem Werkzeug allein (ein anthropomorphisierter „KI-Stalker“ wurde in drei von sieben von einem menschlichen Schauspieler gespielt), und 15 von 18 Einheitsende-Antworten sagten, Komposition habe ihr Verständnis von KI-Ethik verändert. Die Autoren argumentieren, multimodale Produkte *demonstrierten* und *kommunizierten* kritische Kompetenz sowohl —, produktive Artefakte, Reflexionen und bürgerschaftlicher Diskurs können als [[assessment|Assessment]]beleg dienen, den rein textliche Kompetenz strukturell übersieht.

### 2. Multimodales Tutoring und die Fähigkeitsgrenze

Wenn LLM-basierte Tutoren Probleme lösen müssen, die Bedeutung in Graphen, Kraftediagramme, Skizzen oder Tabellen einbetten, sinkt ihre Genauigkeit scharf — der **Multimodale-Interferenz-Effekt**.([[syal-multimodal-dialogue-stem-2026]])

- Bei OpenStax-Physikproblemen sinkt rein-textliche Genauigkeit von ~96% auf **~74%** bei bildreichen Problemen, konsistent über Modellfamilien hinweg.([[syal-multimodal-dialogue-stem-2026]])
- **Visuelle Verarbeitungsfehler** — Versagen, Informationen aus Graphen oder Diagrammen zu extrahieren — dominieren die Fehlertaxonomie und sind der korrigierbarste Fehlermodus.
- Eine einfache strukturierte-Dialog-Intervention (das Modell beschreiben lassen, was es sieht, nur *beobachtbare* Fehllesungen korrigieren, ohne Physik zu verraten, dann erneut prompten) stellt Genauigkeit auf **~95%** wieder her, ohne Neutraining.([[syal-multimodal-dialogue-stem-2026]])
- Das ist ein **Gerechtigkeitsanliegen**: Studierende, die an bildreichen Problemen arbeiten — genau die Probleme, die tiefes konzeptionelles Verstehen in STEM aufbauen —, erhalten derzeit weniger verlässliche KI-Unterstützung als jene an rein-textlichen Übungen.
- **Eine visuelle Hilfe zu konstruieren ist schwerer als eine zu lesen.** Auf GeoVAD-Bench hob das Liefern eines expertenhaften Hilfsdiagramms die Genauigkeit (+3.3 bis +7.0 Punkte), aber Modelle ihre eigene Hilfslinie konstruieren zu lassen verbreiterte die Lücke um 10.0 bis 13.5 Punkte —, zwei Modelle erzielten schlechtere Ergebnisse als ohne visuelles Schlussfolgern ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]).
- **Die Grenze ist ein Profil, kein Niveau —, und künstlerische Bildsprache sitzt außerhalb der Region, die Modelle gut handhaben.** [[muse-vlm-artistic-image-benchmark-2026|MUSE (Zhu et al., 2026)]] evaluiert 30 offene und proprietäre VLMs auf 12 Aufgaben über 1.174 beauftragte Kunstwerke, und die Fähigkeitsstreuung über Dimensionen hinweg ist breiter als jeder aggregierte Score nahelegt: Szenenklassifikation ist fast ausgereift (23 von 30 Modellen über 75.0, Median 81.0), während Emotionserkennung bei 39.5 endet und die offenen Aufgaben, die von Modellen verlangen, ihren Beleg zu *artikulieren*, bei 50.90 (visuelle Hinweisidentifikation) und 49.18 (Emotionsursacheninferenz) auf semantischer Ähnlichkeit erzielen. Kompositionales und sichtpunktabhängiges Schlussfolgern versagen am härtesten —, wo die Ground Truth keine bestimmte laterale oder vertikale Relation spezifiziert, behaupten 90.0% und 73.3% der Modelle dennoch eine, nur 43.3% platzieren das Mädchen korrekt in der Tiefe, und kein Modell löst alle drei Dimensionen eines einzelnen Items. Versagen kaskadieren auch: eine falsch gegründete Figur wird dann mit einer flüssigen Begründung aus naher visueller Semantik (Schmetterlinge, Vögel) gerechtfertigt, was das im Tutoring gefährlichste Ergebnis ist, weil die Erklärung als kompetent liest. Für bildbasiertes [[language-learning|Sprachenlernen]] argumentiert das für dimensionsniveau Validierung an der Bildsprache, die ein Kurs tatsächlich nutzt, statt einen allgemeinen multimodalen Score zu importieren, und für die Ausweitung des unten beschriebenen Grounding-Checkpoints — beschreiben, was gesehen wird, und wo, bevor daraus geschlossen wird —, auf [[situated-learning|situierte]] künstlerische Inhalte ([[muse-vlm-artistic-image-benchmark-2026]]).

Die praktische Designimplikation ist ein **visueller Grounding-Checkpoint** in multimodalem Tutoring: ein bewusster Schritt, wo das System beschreibt, was es sieht, bevor es eine Lösung versucht, was der oder dem Studierenden oder einer menschlichen Aufsicht die Chance gibt, Wahrnehmungsfehler zu korrigieren.([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu et al. (2026)]] fügen eine vorgelagerte Bedingung hinzu: eine Gleichung, ein Graph oder eine Einheit kann in einem Bericht erscheinen und dennoch nie aus dem verarbeiteten Dokument abgerufen werden, sodass eine Uneinigkeit mit der Lehrperson ein Extraktionsversagen statt ein Schlussfolgerungsversagen sein kann —, was das Einreichungsformat Teil des Assessmentdesigns macht.

### 3. Multimodales Assessment und Messung

Multimodale KI verbreitert sowohl den *Inhalt* von Assessment als auch das *Signal*, das zur Benotung genutzt wird.

- **Multimodale Feedbacksysteme** integrieren strukturierten Text, Foliereferenzen und Streaming-Audioerzählung. In einer Studie erreichte [[ai-feedback-quality|KI-multimodales Feedback]] Lehrendenfeedback beim Lernen und übertraf es bei den Wahrnehmungen der Studierenden *signifikant*.([[multimodal-ai-feedback-learning]])
- **Multimodale Item-Response-Schätzung** nutzt feinabgestimmte multimodale LLMs, um Itemcharakteristik-Kurven (IRT / 3PL) direkt aus vorhergesagten Antwortwahrscheinlichkeiten auf Bild-und-Text-Items zu rekonstruieren, was multimodale KI mit [[educational-measurement|Bildungsmessung]] und [[item-response-theory|Item-Response-Theorie]] verbindet.([[multimodal-item-parameter-estimation-2026]])
- **Evaluation bildungssprachlicher Vision-Language-Modelle** und [[mllm-scientific-visualization-literacy|multimodale LLM-Kompetenz]] erweitern das Evaluationstoolkit des Feldes auf multimodales Schlussfolgern und [[visualization|Visualisierung]].([[drawedumath-vlm-struggling-students-2026]])([[mllm-scientific-visualization-literacy]])
- **Multimodale Benotung händischer [[chemistry-education|Chemie]] exponiert eine formatabhängige Fähigkeitsgrenze:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] benoteten eine 296-Studierende-Abschlussklausur in Allgemeiner Chemie Seite für Seite gegen Rubrikbilder mit einem multimodalen, schlussfolgernden LLM und erzielten bei textlichen Antworten und chemischen Reaktionsgleichungen verlässliche Ergebnisse (höchstes normiertes F1), aber bei Zeichnungen und Graphen *schlechter als zufällig* — Hintergrundraster lenken KI-Vision visuell ab und wissenschaftliche Diagramme/chemische Strukturen bleiben schwer zu interpretieren —, was verstärkt, dass die Vision multimodaler KI nicht robust gegenüber repräsentationslastiger Arbeit ist und am besten mit [[human-in-the-loop-ai|menschlichem Zurückstellen]] grafischer Items eingesetzt wird ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Konstrukterkennung und vergleichendes Urteil sind trennbare Fähigkeiten.** [[cfes-p24-multimodal-slide-auditing-2026|Ma et al. (2026)]] drücken sechs Multimedia-Lernprinzipien als reversible Folienedits plus visuelle-Äquivalenz-Sham-Kontrollen aus und finden, dass beide Modelle jede Operation, jedes Prinzip und jede Reparatur wiederherstellten (8/8), während die Schwerekalibrierung vollständig versagte (0/8) —, ein Kompositscore würde verbergen, welche Schicht versagt.
- **Fairnessgewinne können in Existenz validiert werden.** Ein multimodaler Aufmerksamkeitsschätzer besiegte eine rein visuelle Baseline nur mäßig, und sein geschlechtertargetierter MAE-Lücken-Regularisierer schnitt die Validierungslücke von 0.02 auf 0.005, erhöhte aber die Lücke und den Worst-Group-Fehler auf zurückgehaltenen Subjekten —, sodass subgruppenbewusste, wiederholte Subjektebenen-Validierung vor Deployment erforderlich ist ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).
- **Multimodale Benotung kann ein Selektionsergebnis reproduzieren, selbst wo Itembenotung nachhinkt.** Beim Benoten von 10.364 händischen Olympiade- und Universitätsseiten erreichte ein LLM Prüfgesamtwerte bei r = 0.93–0.96 und platzierte dieselben fünf Studierenden auf das Olympiadeteam, doch erreichte die Teileübereinstimmung 70%: Zweitleser-Beweis, nicht ein Benotender vom Dienst ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **Diagrammgenerierung ist eine Fähigkeitsgrenze, keine gelöste.** Auf einem 15.246-Fragen-Physik-Benchmark, der multimodalen Output benotet, erwies sich das Synthetisieren oder Editieren strukturierter Physikdiagramme als schwerer als das Antworten, und führende Modelle blieben unter 70% strikter Meisterschaft —, ein Beleg, dass visuelle *Produktion* hinter visuellem *Verstehen* zurückbleibt ([[omniphys-multimodal-physics-benchmark-2026|Chen et al., 2026]]).

## Multimodale KI für Sprach- und zugängliches Lernen

Multimodale Systeme erweitern auch Zugang und [[personalized-learning|Personalisierung]]. KI-gelenkte Audio-[[video-education|Video]]lernwerkzeuge passen Wiedergabegeschwindigkeit an, produzieren multimodale Videozusammenfassungen und stützen Ausspracheübung.([[ai-guided-learning-audiovideo-2026]]) Multimodale Wissensgraphen schlussfolgern über Bilder und Text für Bildungsaufgaben,([[multimodal-knowledge-graph-educational-reasoning]]) und multimodale Repräsentationen verbessern [[inclusive-learning|inklusives Lernen]], indem sie Informationen über Modi hinweg übersetzen (z. B. Text zu Audio oder Visuellem). Domänenanwendungen umfassen Benotung und Diagnose händischer Mathematik,([[llm-cognitive-diagnosis-handwritten-math]]) [[affective-tutoring|affektives Tutoring]] mit multimodalen Signalen,([[multimodal-affective-its-presentation]])([[kar-mathbuddy-affective-math-tutoring-2025]]) Text-zu-Bild-Lernen in spezialisierten Fächern,([[nuclear-diffusion-text-to-image-learning-2026]]) und datenschutzbewusstes multimodales Klassenzimmer-Sensing.([[privacy-aware-classroom-incident-recognition-2026]]) Bird (2026) demonstriert eine textinterne Form von Multimodalität: einen feinabgestimmten ELECTRA-Transformer mit computational-linguistics-Merkmalsanalyse zu fusionieren, um englische Literatur nach UK Key Stage zu klassifizieren, wo das fusionierte Modell (F1 0.996) jede unimodale Baseline weit übertraf —, ein Beleg, dass das Kombinieren von Repräsentationsformen, selbst innerhalb von Text, Einzelmodellansätze übertreffen kann.

## Herausforderungen und Designimplikationen

1. **Die multimodale Lücke schließen.** Multimodale Tutoringsysteme sollten visuelles Grounding und strukturierte-Dialog-Gerüste einschließen, statt anzunehmen, Visionfähigkeiten seien robust.([[syal-multimodal-dialogue-stem-2026]])
2. **Multimodales Prompting als lehrbare Fähigkeit behandeln.** KI-Kompetenz-Curricula müssen modalitätsspezifisches Prompten, Kohärenz über Modi hinweg und kritische Evaluation multimodaler Outputs adressieren.([[multimodal-prompting-ai-literacy]])
3. **Menschliche Sinnstiftung bewahren.** Multimodale KI sollte die eigene Konstruktion und Evaluation von Bedeutung über Modi hinweg erweitern, nicht ersetzen.([[multimodal-learning-genai]]) 
4. **Evaluation auf multimodale Validität ausweiten.** [[assessment-validity|Assessmentvalidität]], Bias und Verlässlichkeit müssen untersucht werden, wenn KI multimodale Artefakte benotet oder generiert.([[multimodal-item-parameter-estimation-2026]])([[ai-ed-evaluation]])
5. **Gerechtigkeit und Datenschutz beobachten.** Unzuverlässige Unterstützung bei bildreichen Problemen und die Datenanforderungen multimodalen Sensings tragen beide Gerechtigkeits- und Datenschutzimplikationen.([[syal-multimodal-dialogue-stem-2026]])([[privacy-aware-classroom-incident-recognition-2026]])
6. **Die Pipeline auf den Inhalt abstimmen.** Das multimodale LLM eines Cybersecurity-Labassistenten handhabte dichte visuelle Folien besser, während eine OCR-plus-LLM-Pipeline auf textzentrierten Folien vergleichbaren instruktionalen Wert bei signifikant geringeren Rechenkosten lieferte.([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel et al. (2025)]])

## Verbundene Konzepte
- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)
- [[virtual-and-augmented-reality]] — gesture, voice and spatial input as learning channels
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]
## Verbundene Artikel
- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — Video PSA composition on AI ethics as critical AI literacy pedagogy (Burriss et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — VLM performance on handwritten student math work (DrawEduMath, Lucy et al. 2026)
- [[multimodal-learning-genai]] — Educator's guide to multimodal learning with generative AI (MMLD-AI model)
- [[syal-multimodal-dialogue-stem-2026]] — The Multimodal Interference Effect and structured-dialogue recovery in STEM
- [[multimodal-ai-feedback-learning]] — Multimodal AI feedback matches educators on learning, exceeds on perceptions
- [[multimodal-prompting-ai-literacy]] — Students' multimodal prompting as epistemic work in AI literacy
- [[multimodal-item-parameter-estimation-2026]] — Estimating IRT item parameters with multimodal LLMs
- [[ai-guided-learning-audiovideo-2026]] — AI-guided audio-video learning support
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[mllm-scientific-visualization-literacy]] — Multimodal LLM literacy for scientific visualization
- [[multimodal-affective-its-presentation]] — Multimodal signals in affective intelligent tutoring
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affective multimodal math tutoring
- [[llm-cognitive-diagnosis-handwritten-math]] — LLM cognitive diagnosis of handwritten math
- [[nuclear-diffusion-text-to-image-learning-2026]] — Text-to-image learning in nuclear engineering education
- [[privacy-aware-classroom-incident-recognition-2026]] — Privacy-aware multimodal classroom sensing
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — Multimodal OCR instruction in cybersecurity education
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Multimodal AI composing and critical thinking in primary writing (Lu et al. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 12 tasks over 1,174 artworks show VLM capability as a dimension-specific profile, weakest in affective interpretation and viewpoint-dependent spatial reasoning (Zhu et al. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
