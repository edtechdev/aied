---
title: LLM-Training und Feinabstimmung
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/llm-training-and-fine-tuning
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

> **LLM-Training und Feinabstimmung** — wie Bildungs-KI-Modelle gemacht werden: die Pipeline von Vortraining über Post-Training bis zur Anpassung, was jede Stufe kostet, und was die Evidenz sagt, dass sie einbringt. Das organisierende Problem ist eine **Anreiz-Fehlausrichtung**: allgemeine Modelle sind darauf optimiert zu antworten, während Lehren erfordert, die Antwort zurückzuhalten. Post-Training und Feinabstimmung sind die zwei Hebel, die dieses Verhalten ändern, und das klarste Ergebnis der Wissensbasis ist, dass sie eine *dritte* Wahl sind, nicht die erste — Abruf und Prompting kommen früher in der Entscheidung, und eine Studie hier fand überwachtes Feinabstimmen an einer Aufgabe scheiternd, bei der schlichtes Prompting gewann ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Geschrieben für Entwickelnde von Bildungssoftware und lehrende Praktiker, die entscheiden, was sie damit bauen.

## Fragen zum Nachdenken

- Wenn Sie eine Tutoring-Aufgabe haben, bei der ein allgemeines Modell zu bereitwillig antwortet, ist Ihr erster Zug ein besserer Prompt, Abruf über Ihre eigenen Materialien oder Training? Was müssten Sie messen, um zu sagen, welches geholfen hat?
- Feinabstimmung braucht Daten. Woher kämen die Trainingsbeispiele Ihres Projekts, wem gehören sie, und welche Datenschutzprüfung bräuchten sie, bevor sie genutzt werden könnten?
- Eine Studie hier fand, dass Feinabstimmung eines Modells auf Assessment-Daten *Formatierung und Ähnlichkeit* verbesserte, während eine separate Feinabstimmung bei der Erzeugung von Feedback rundheraus scheiterte. Was legt das nahe über das Abstimmen der Trainingsmethode auf die Aufgabe?
- Post-Training mit bestärkendem Lernen kann einem Modell beibringen, anzuleiten statt zu antworten. Welche Belohnung würden Sie schreiben, um „leitet gut an“ zu erfassen, und wie würde ein Modell sie austricksen?
- Die Wissensbasis berichtet, dass Modell- und Promptwahl nur etwa 15 % der Lücke zwischen einem LLM und Lerngewinnen der Studierenden ausmachen. Wenn das stimmt, wie sollte es Ihre Bauen-statt-Kaufen-Entscheidung verändern?
- Ein feinabgestimmtes Modell, das genau ist, kann über ein langes Gespräch hinweg trotzdem unsicher sein. Was würden Sie testen, bevor Sie eines unbeaufsichtigt mit Studierenden sprechen lassen?

## Einführung

Entwicklung von Bildungs-KI läuft aus zwei Richtungen auf dieselbe Wand. Allgemeine Sprachmodelle sind auf menschliche Präferenz für Hilfsbereitschaft nachtrainiert, was in der Praxis bedeutet, prompt und vollständig zu antworten; Tutoring erfordert das Gegenteil, weil das pädagogische Ziel ist, einer Studentin zu helfen, die Antwort zu erreichen, statt sie zu überreichen. Gleichzeitig weiß ein allgemeines Modell nichts über Ihr Curriculum, Ihre Rubrik oder die Stimme Ihrer Institution, und keine Menge an Prompt-Engineering installiert die verlässlich.

Diese Seite behandelt die Techniken, die ein Modell verändern statt den Text, den Sie senden. Sie sitzen auf einer **Leiter zunehmender Bindung**: Prompting, dann Abruf, dann parametereffiziente Anpassung, dann volle Feinabstimmung, dann Post-Training mit Präferenz- oder Belohnungssignalen. Jede Sprosse kostet mehr Daten, mehr Rechenleistung und mehr Evaluationsdisziplin als die letzte, und jede ist eine schlechtere erste Wahl als die Sprosse darunter, es sei denn, eine spezifische Messung rechtfertigt den Aufstieg. Viel der Forschungsliteratur berichtet nur die Spitze dieser Leiter, was es für einen Entwickelnden leicht macht, nach Training zu greifen, wenn Abruf genügt hätte.

Die Seite ist um die Entscheidungen organiert, denen ein Bauender tatsächlich gegenübersteht: welchen Hebel ziehen (dieser Abschnitt und der nächste), was Anpassung in der Praxis einbringt und kostet, was Post-Training formen kann, das Anpassung nicht kann, und wie diese Systeme scheitern. Terminologie wird in ihrem Standardsinn verwendet: **Vortraining** ist die Stufe von Grund auf auf einem allgemeinen Korpus, **Post-Training** ist alles danach, das Verhalten formt (überwachte Feinabstimmung, Präferenzoptimierung, bestärkendes Lernen), und **Feinabstimmung** umfasst sowohl die überwachte Stufe des Post-Trainings als auch die spätere Aufgaben- oder Domänenanpassung, einschließlich parametereffizienter Methoden.

## Die Trainingspipeline, Stufe für Stufe

Drei Stufen, mit sehr unterschiedlicher Zugänglichkeit. Zu wissen, welche eine Arbeit beschreibt, verhindert die meisten Fehllesungen dieser Literatur.

**Vortraining** baut ein Basismodell aus einem allgemeinen Textkorpus. Es ist die Stufe, die die breite Fähigkeit des Modells erzeugt, und sie ist für praktisch jedes Bildungsprojekt außer Reichweite: die Kosten sind in Millionen Dollar gemessen und die Daten sind ein Web-Maßstab-Crawl. Nichts in dieser Wissensbasis tut es. Ihre Relevanz für Praktiker ist diagnostisch statt umsetzbar — Vortrainingsdaten sind der dominante Hebel darauf, wie sich ein Modell verhält, und es ist der eine Hebel, den Sie nicht ziehen können. Jene Asymmetrie ist der Grund, warum alle verbleibenden Techniken des Feldes auf einem bereits trainierten Modell operieren.

**Post-Training** formt Verhalten auf dem Basismodell. Überwachte Feinabstimmung (SFT) lehrt das Modell, Demonstrationen zu imitieren; Präferenzoptimierung und bestärkendes Lernen drücken es dann hin zu Ausgaben, die ein Belohnungsmodell oder eine Menge menschlicher Urteile höher bewertet. Das ist die Stufe, auf der ein Modell gelehrt werden kann, anzuleiten statt zu antworten, und es ist, wo die frappierendsten Bildungsergebnisse leben. Es ist auch die Stufe, die am empfindlichsten auf Belohnungsdesign reagiert, weil eine Belohnung eine komprimierte Spezifikation dessen ist, was Sie wollen, und Modelle optimieren, was immer Sie tatsächlich geschrieben haben.

**Anpassung** passt ein bestehendes Modell an Ihre Aufgabe oder Domäne an, meist mit weit weniger Daten und Rechenleistung. Parametereffiziente Feinabstimmung (PEFT), deren übliche Form LoRA ist, trainiert eine kleine Zahl hinzugefügter Parameter und lässt die Basisgewichte eingefroren. Volle Feinabstimmung aktualisiert alles. Destillation und Unlearning sitzen neben ihnen. Die Abschnitte unten nehmen jedes der Reihe nach. Für die meisten Bildungsentwickelnden ist dies die praktische Stufe — die, auf der ein paar hundert bis ein paar tausend Beispiele und eine einzige GPU ein einsetzbares Modell erzeugen können.

## Prompt, abrufen oder trainieren? Die Entscheidung, die zuerst kommt

Das stärkste einzelne Ergebnis in dieser Wissensbasis zu jener Frage ist eine Abrufstudie, keine Trainingsstudie. Beim Bau eines Kurs-Wissensbasis-Assistenten evaluierten Shen et al. (2026) lokale Modelle in drei Konfigurationen und fanden, dass **Abruf, nicht das Modell, die erstordentliche Designentscheidung ist**: ihr lokales LLM ohne Abruf erreichte nur **52,3 %** Genauigkeit, *unter* einer TF-IDF-Baseline von **55,4 %**, während das Hinzufügen von [[rag|retrieval-augmented generation]] ohne jede Feinabstimmung es auf **66,6 %** hob ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Die Feinabstimmungs-Konfigurationen, die sie ebenfalls testeten, werden neben Abruf-Ablationen, Quantisierung und Energie pro Abfrage berichtet, was den Vergleich ungewöhnlich ehrlich macht: ein Basismodell ohne Grundierung kann schlechter sein als eine jahrzehntealte lexikalische Methode, und die günstigste Lösung ist nicht Training.

Was das Feld tatsächlich baut, spiegelt eine ähnliche Ordnung. Ein PRISMA-geleitetes Review von 23 empirischen Studien (2020–2025) zur Anpassung von KI für [[writing-education|Schreibinstruktion]] fand **Prompt-Engineering dominant (N = 13), vor Feinabstimmung (N = 7) und hybriden Architekturen (N = 3)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Der schärfere Befund des Reviews ist eine strukturelle Fehlausrichtung statt einer Technikreihung: angegebene pädagogische Ziele haben sich hin zu Schreibprozessen, [[feedback-literacy|Feedback-Kompetenz]] und akademischen Fähigkeiten höherer Ordnung bewegt, während die dominanten Implementierungen noch produktfokussierte Ziele über Prompt-Design oder Feinabstimmung verfolgen.

Wo Prompting und Training Kopf an Kopf verglichen wurden, hängt das Ergebnis von der Aufgabe ab, was genau der Grund ist, warum die Entscheidung gemessen statt angenommen werden sollte:

- **Training gewinnt, wenn das Ziel ein stabiles Ausgabeformat oder eine kontrollierte Eigenschaft ist.** Bei der automatischen Item-Erzeugung für L2-Hör-Assessment plateauierte iterative Prompt-Verfeinerung, und Feinabstimmung von GPT-4.1 *auf den optimierten Prompt* verbesserte dann die Erzeugung über Prompting allein hinaus — was Modellanpassung statt Prompt-Design als den Treiber des verbleibenden Gewinns isoliert ([[gpt-item-generation-l2-listening-2026]]).
- **Prompting gewinnt, wenn das Ziel urteilsbeladener Text ist.** Dasselbe System, das für *Bewertung* erfolgreich feinabstimmte, scheiterte bei *Feedback*: in WrAFT erreichte ein feinabgestimmtes GPT-4o-Modul QWK 0,84 und RMSE 0,44 auf 360 zurückgehaltenen TOEFL-Aufsätzen, aber überwachte Feinabstimmung für Feedback-Erzeugung erzeugte abgeschnittene und unparsebare Ausgabe, während direktes Prompting von Claude 3.7 das Feedback erzeugte, das Lehrkräfte am besten bewerteten ([[wraft-automated-writing-evaluation-argumentative-2026]]). Feinabstimmung lehrte das Modell, einen Score zu treffen; sie lehrte es nicht zu schreiben.
- **Promptseitige Formung kann für Training einspringen, wenn das Ziel eine Persona oder eine Rubrik ist.** Rubrikgeleitetes Prompting, iterativ mitverfeinert, erhöhte die LLM-Mensch-Übereinstimmung bei Designarbeit der Studierenden von **54,75 % auf 81,25 %** (Cronbachs Alpha 0,393 → 0,798) ohne jede Feinabstimmung ([[yasar-llms-iterative-pedagogical-design-2026]]), und ein literaturgeerdeter Custom-GPT-Prompt lockte mathematische Ziel-Fehlvorstellungen bei **0,98** Präsenz gegenüber **0,40** bei einem breiten Prompt hervor ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **Es gibt eine Obergrenze für alles davon.** Hardy und Kim (2026) schätzen, dass Modell- und Promptwahl zusammen nur etwa **15 %** der Fehlausrichtung zwischen LLMs und Lerngewinnen der Studierenden ausmachen, wobei der Rest über Modelle hinweg geteilt ist, und sie fanden, dass Benchmark-Gewichtung und Ensemble mit einstimmiger Abstimmung die Ausrichtung *schlechter* machten ([[educational-llm-alignment]]). Wenn Vortrainingsdaten der dominante Hebel sind und es der eine ist, den Sie nicht ziehen können, dann sollten Erwartungen an das, was jede dieser Techniken erreichen kann, entsprechend kalibriert werden.

## Was Feinabstimmung einbringt: Kontrollierbarkeit über Skala

Wenn ein allgemeines Modell nicht dazu gebracht werden kann, eine Eigenschaft zu halten, die Sie brauchen, kann Feinabstimmung auf einem bescheidenen Datensatz es oft — und das wiederkehrende Ergebnis ist, dass *Zielen Skala schlägt*. Drei 8B-Modelle, feinabgestimmt auf ein expertengestaltetes Kinderlese-Curriculum, übertrafen Zero-Shot-GPT-4o und Llama 3.3 70B bei schwierigkeitsbezogenen Kennzahlen, mit vernachlässigbaren Sicherheitsproblemen. Die Autoren rahmen dies als **Kontrollierbarkeit über Skala**, da ein kompaktes Modell auf eine bestimmte Lesestufe und ein Fehlermuster getunt werden kann, auf Weisen, auf die ein allgemeines Modell nicht darum gebeten werden kann ([[llm-children-reading-story-generation]]).

Das Muster wiederholt sich über sehr unterschiedliche Aufgaben hinweg:

- **Curriculum-Verankerung.** Ein multilingualer Instruktionsdatensatz mit 24,795 Beispielen, geerdet in Indian Knowledge Systems, erzeugte eine 7B-Feinabstimmung mit **6,39** auf einem externen Panel von fünf Juroren (Median über 1,201 stratifizierte Items). Das ist innerhalb **0,15** eines starken allgemeinen Referenzmodells bei einem Bruchteil der Einsatz-Kosten — während dasselbe Basismodell ohne die Feinabstimmung **nahe null bei IKS-spezifischen Dimensionen** erzielte ([[iks-instruct-dataset-indian-knowledge]]). Jene Lücke zwischen „allgemein kompetent“ und „hier kompetent“ ist der ganze Fall für Domänenanpassung. Vermerken Sie auch das kontraintuitive Detail, das die Autoren berichten: Qualität stieg **nicht** monoton mit Datenkuratierung.
- **Assessment-Zuverlässigkeit, günstig.** Ein einzelner LoRA-Adapter, trainiert auf etwa **3.900** gepoolten benoteten Beispielen, brachte fünf kleine offene Modelle (4B–30B) auf Parität oder besser mit einem menschlichen Bewertenden über zwei Informatik-Klausuren hinweg, und löschte Persona-Empfindlichkeit fast aus (Drift ≤ 0,32 MAE) ([[llm-graders-computer-science-exams-2026]]). Ein Adapter, ein Datensatz, mehrere Basismodelle — das ist die Gestalt eines praktischen Einsatzes.
- **Selektive Automatisierung.** Konfidenz war ein verlässlicher Prädiktor für Bewertungsfehler (β = −0,602, p < .001). Die 20 % am wenigsten konfidenten Antworten an menschliche Prüfung zu routen, bewegte ein feinabgestimmtes GPT-3.5-Modell von r = 0,781 auf **r = 0,822** (RMSE 0,5990 → 0,5544), während es manuelle Bewertungsarbeit um etwa **80 %** senkte ([[know-when-to-trust-ai-scoring-reliability-2026]]). Feinabstimmung ersetzt hier den Menschen nicht; sie macht die Aufmerksamkeit des Menschen bezahlbar.
- **Konstrukte messen, die Sie sonst von Hand bewerten würden.** Feinabgestimmte ungarische Transformer (hubert-base-cc, PULI-BERT-Large) wurden gegen TF-IDF-Merkmale und Qwen3-Einbettungen für die Bewertung reflektierenden Schreibens in der [[teacher-education|Lehrkräftebildung]] gebenchmarkt ([[reflection-level-classification-hungarian-essays-2026]]), und ein feinabgestimmtes multimodales Modell (auf Qwen3.5 basierend) wurde gezeigt, Item-Charakteristik-Kurven für Multiple-Choice-Items zu rekonstruieren, wobei es die in 3PL- und MCM-Kurven kodierten Antwortmuster lernt statt sie gesagt zu bekommen ([[multimodal-item-parameter-estimation-2026]]).

## Parametereffiziente Anpassung in der Praxis

LoRA und seine Verwandten sind, wo die meisten Bildungsteams tatsächlich arbeiten werden, und die Literatur enthält ungewöhnlich spezifische Anleitung dazu, wie sie sich verhalten.

**Rang ist ein Trade-off, kein zu maximierender Regler.** Lu et al. (2026) bauten 360 System-Nutzer-Assistent-Dialoge aus einem Kurs über lineare Regelsysteme, strukturierten Antworten in ein Lösung-Methode-Lehrpunkte-Format um und wandten LoRA auf Qwen2.5-3B und 7B bei Rängen 4, 8 und 16 an. Die Abdeckung strukturierter Ausgabe bewegte sich von nahe null bei Basis auf etwa **1,00**, und die beste Konfiguration (7B, r = 16) erreichte ROUGE-L **0,4093** mit Bootstrap-Konfidenzintervallen für den Gewinn gänzlich über null. Aber **der Gewinn pro Million Adapter-Parameter fiel monoton, während der Rang stieg**, daher ist Ausrichtung auf Kursebene ein Skala-und-Rang-Trade-off statt eines kostenlosen Upgrades ([[lora-finetuned-control-systems-course-qa-2026]]). Ihre Kennzahlen messen Ähnlichkeit und Formatierung, nicht Ableitungsgenauigkeit, was der Standardvorbehalt für diese ganze Familie von Evaluationen ist.

**Skala sagt Erfolg nicht vorher, und identische Einstellungen verhalten sich unterschiedlich über Architekturen hinweg.** AiAWE, ein Open-Source-System automatischer Schreibbewertung, gebaut auf einem LoRA-angepassten Gemma-3-27B-it, erreichte RMSE 0,474, QWK 0,828 und Übereinstimmung innerhalb ±0,5 des menschlichen Scores bei **90,56 %** von 360 Evaluationsaufsätzen, übertraf LLaMA-3.3-70B und eine feinabgestimmte GPT-3.5-Baseline — während es auf einem Server der Verbraucherklasse lief. Drei breitere Befunde zählen mehr als der Score: Modellskala war **kein** verlässlicher Prädiktor für nachgelagerte Leistung unter LoRA-Anpassung, **identische LoRA-Hyperparameter erzeugten qualitativ unterschiedliche Anpassungsverhalten über Architekturen hinweg**, und ein gut getuntes offenes Modell mittlerer Größe kann mit proprietären Systemen konkurrenzfähig sein ([[aiawe-automated-writing-evaluation]]).

**Welche Schichten anzupassen sind, ist eine echte Entscheidung.** In einem Diskursanalyse-System für den Englischunterricht schlug Feinabstimmung eines gekürzten BERT durch Aktualisierung **nur der letzten vier Transformer-Schichten** beide Alternativen: nur die oberste Schicht anzupassen traf eine niedrigere Obergrenze, und volle 12-Schichten-Feinabstimmung überpasste und oszillierte ([[bert-discourse-english-teaching-2026]]).

**Die Basisarchitektur kann mehr zählen als die Parameterzahl.** Feinabstimmung dreier offener Text-zu-Bild-Modelle auf 1.000 beschrifteten Bildern aus dem Kerntechnik-Ingenieurwesen verbesserte Stable Diffusion XL erheblich, gab begrenzte Gewinne für SD-v3.5-Medium und erzeugte **keine messbare Verbesserung für das Flow-Matching-Modell Flux.1 überhaupt** ([[nuclear-diffusion-text-to-image-learning-2026]]). Ein Feinabstimmungs-Rezept ist nicht über Architekturen hinweg portierbar, was dieselbe Lektion ist, die AiAWE aus der anderen Richtung berichtet.

Zwei benachbarte Techniken runden die Anpassungsstufe ab. **Destillation** komprimiert ein großes oder Black-Box-System in ein kleines einsetzbares. Eine zweistufige Pipeline destillierte einen gefitteten Black-Box-ML-Schätzer und seine post-hoc Interpretation in ein kleines offen-gewichtiges LLM, wobei ein 2B-Parameter-„Mentee“ nahezu verlustfreie Wiederherstellung der Oracle-Effektfläche erreichte (r > .90). Jenes Ergebnis wird unter einer Treue-zuerst-Evaluation berichtet, die jede Erzählung gegen die Attribution prüft, die sie zu beschreiben behauptet ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Unlearning** entfernt zielgerichtete Inhalte nach dem Training: gradientenbasiertes Unlearning wurde auf drei Modelle angewandt, um PII und schädliche Inhalte zu entfernen, getestet in zwei Entfernungsordnungen (PII-zuerst und Schädlicher-Inhalt-zuerst) ([[llm-unlearning-math-privacy]]) — das relevante Werkzeug, wenn ein Modell etwas auswendig gelernt hat, das es nicht tragen sollte.

## Post-Training: Verhalten formen, nicht bloß Format

Anpassung lehrt ein Modell, *was es produzieren soll*; Post-Training lehrt es, *wie es sich verhalten soll*. Das ist, wo die pädagogischen Ergebnisse am frappierendsten sind, und wo das Design des Belohnungs- oder Präferenzsignals alles entscheidet.

**Das Pipeline-Ergebnis.** Singh et al. (2026) verwandelten Qwen3-32B in EduQwen durch drei Stufen — anfängliches RL, synthetisches SFT, abschließendes RL — und erreichten **96,52 %** auf dem CDPK-Benchmark und übertrafen Gemini-3 Pro bei **90,55 %**. Die Zwischenergebnisse sind der lehrreiche Teil: die erste RL-Stufe allein erreichte 94,13 %, SFT auf 40,000 selbstgenerierten Antworten brachte sie auf 96,20 %, und die abschließende RL-Runde fügte den letzten Bruchteil hinzu. Das Belohnungsmodell priorisierte **anleitende Antworten über direkte Antworten**, Mining harter Negativer schloss Fragen aus, die das Basismodell bereits löste, und Rollouts wurden von 5 auf 8 Schritte erweitert, um mehrstufige pädagogische Entscheidungen zu erfassen ([[singh-eduqwen-pedagogical-rl-2026]]). Demgegenüber fand der Pedagogy Benchmark — gezogen aus echten Prüfungen professioneller Entwicklung von Lehrkräften über **97 Modelle** — Genauigkeiten von **28 % bis 89 %**, ein Beleg dafür, dass pädagogisches Wissen nicht beiläufig während allgemeinen Vortrainings erworben wird ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

**Die Entscheidung trainieren statt die Äußerung.** TACT post-trainierte einen Tutor auf eine Taxonomie mit 13 Strategien plus eine Taxonomie von Studierenden-Zügen über zwei Achsen und gewann **20,30 Punkte** gegenüber seinem Qwen3.5-4B-Rückgrat, mit einem diagnostischen Benchmark, der die während des Trainings verfügbaren Lernzustands-Labels zurückhält, sodass das Modell den Zustand aus dem Dialog erschließen muss ([[tact-pedagogically-adaptive-esl-tutoring]]). Dieselbe Logik erscheint in Special-R1 für [[special-education|Sonderpädagogik]]-Ausrichtung ([[special-r1-rl-special-education]]) und in heuristischer-RL-Arbeit, die Modelle als sokratische Anleiter statt Antwortende ausrichtet ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Post-Training muss nicht bloß formen, was das Modell sagt: eine Plattform paart einen bewachten Tutoring-Chatbot mit einem Agenten bestärkenden Lernens, der das nächste Übungsproblem wählt, sodass die trainierte Policy entscheidet, was die Lernende als Nächstes tut ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Destillierte Schlussfolgermodelle.** Eine günstigere Route zu pädagogischem Verhalten ist, ein kleines Modell zu lehren, ein größeres zu imitieren: Pedagogy-R1 (1,5B und 7B) wurde auf pädagogisch gefilterte Ausgaben instruction-getunt, die aus einem QwQ-32B-Lehrer destilliert waren, gepaart mit Chain-of-Pedagogy-Prompting ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Instruktionskonditioniertes Post-Training versus authentische Daten.** LearnLM rahmt Bildungsmodell-Training als *pädagogisches Instruktionsbefolgen* neu, wobei es System-level-Instruktionen trägt, die es Entwickelnden und Lehrkräften erlauben, Tutor-Verhalten zu spezifizieren, ohne sich auf eine Definition von Pädagogik festzulegen. Es wird durch Mit-Training in Geminis Post-Training-Stufen gemischt, und Experten bevorzugten es gegenüber GPT-4o (**+31 %**), Claude 3.5 Sonnet (**+11 %**) und Basis Gemini 1.5 Pro (**+13 %**). Der zentrale Befund ist, dass **RL wesentlich wirksamer ist als SFT allein**, um nuancierten pädagogischen Instruktionen in langen Gesprächen zu folgen ([[learnlm-improving-gemini-learning]]). TeachLM setzt auf das Gegenteil: dass [[prompt-engineering|Prompt-Engineering]] ein Provisorium ist und die knappe Zutat *authentische* Lernender-Tutor-Interaktionsdaten sind. Trainiert auf **100,000 Stunden** Einzelsitzungen unter strenger Anonymisierung, verdoppelt es die Sprechzeit der Studierenden, verbessert den Fragestil und erhöht Dialogzüge um **50 %** ([[teachlm-post-training-llms-education]]). Zusammen definieren sie den Designraum: instruktionskonditioniertes Post-Training, wenn Ihre Daten knapp sind, Feinabstimmung auf echte Tutoring-Interaktionen, wenn Sie sie haben.

**Supervisionsqualität schlägt Supervisionsmenge.** SWIMs Progression für einen Schreib-Simulator ist die sauberste Demonstration. Rubrikgeerdetes Prompting gab begrenzte Kontrolle der Kompetenz (beste durchschnittliche Trait-QWK 0,577 für Claude Sonnet, 0,422 für GPT-5.4, nahe null für ein offenes 7B-Modell); überwachte Feinabstimmung hob jenes 7B-Modell auf **0,474 ± 0,023**. GRPO gegen eine aus automatisierter Aufsatzbewertung abgeleitete Belohnung hob sie weiter auf **0,618 ± 0,005** über jedes Trait und jeden Prompt, wobei die Belohnung als dichte trait-normalisierte Genauigkeit gestaltet war, weil Exakt-Match-Belohnungen im Multi-Trait-Setting zu spärlich sind ([[swim-student-writing-simulation-2026]]). Die Studie zur Fehlvorstellungs-Modellierung erreicht eine schärfere Schlussfolgerung darüber, *was* die Supervision enthalten muss: instruction-getunte Modelle lernten Algebra-Fehlvorstellungen nur, wenn sie auf **Lösungsspuren auf Schrittebene** trainiert wurden, wobei die Genauigkeit bei Training auf alleinige Endantworten bei **unter 30 % bei jeder Datenmenge** blieb. Seine Studierendenrolle verallgemeinerte den gelernten Fehler über, bis korrekte Beispiele explizit bei Verhältnissen von nur **eins zu vier** eingemischt wurden, während die Tutorrolle keine solche Kosten zeigte und korrekte Genauigkeit von **93 % bis 98 %** über zehn gemeinsam trainierte Fehlvorstellungen hielt ([[misconception-acquisition-dynamics-llms-2026]]).

Die Trainingsdaten sind selbst etwas, das Modelle kuratieren können: Edu-QuRating passt Präferenzdestillation an die Kuratierung von Bildungsdaten an und ersetzt einen einzelnen Score „ist das Bildungsinhalt?“ durch 20 Rubrikdimensionen, die faktische Genauigkeit, pädagogische Struktur und Niveaueignung abdecken ([[garrod-edu-qurating-educational-data-curation-2026]]).

**Theorie kann ein Trainingsgerüst sein.** Für Agenten, die [[learning-design|Instruktionssystemdesign]] automatisieren, übertraf ein Hybrid aus klassischen ADDIE- und Dick-&-Carey-Frameworks mit ReAct-artigem Schlussfolgern sowohl reine Theorie (strukturiert, aber unflexibel) als auch Nur-Technik-Agenten (flexibel, aber ungeerdet), über **25,795** Szenarien aus einer Kontextmatrix mit 51 Variablen mit einem Multi-Juror-Protokoll, um Bias durch LLM-als-Juror zu reduzieren ([[jeon-isd-agent-bench-2026]]). Und eine Studie zu Supervisions-*Labels* fand, dass jedem Trainingsbeispiel ein Zielverhalten zuzuweisen — Fachkompetenz, Curriculum-Verankerung, diagnostisches Schlussfolgern oder Scaffolding — jede getestete Modellskala anhob, mit den größten Gewinnen bei Scaffolding und beim Nutzen der Geschichte einer Lernenden, während Wissenszustands-Diagnose am schwächsten bei **54,04 %** blieb ([[omniedu-open-educational-foundation-models-2026]]).

## Die Lernendenseite trainieren, nicht nur den Tutor

Dieselbe Maschinerie wird zunehmend auf das Simulieren von Studierenden gerichtet, was die Ökonomie der Evaluation eines Tutors verändert: statt Lernende zu rekrutieren, erzeugen Sie sie.

Die Mahnung zur Vorsicht ist, dass simulierte Studierende wie jedes andere Instrument validiert werden müssen. Benchmarking feinabgestimmter und geprompteter Modelle auf **382 zurückgehaltenen Dialogen** aus dem größten öffentlichen Korpus echter Studierenden-Tutor-Mathematikdialoge — über sieben Kennzahlen überspannend linguistische, verhaltensbezogene und kognitive Aspekte — erzeugte den direktesten Test des Feldes dafür, ob simulierte Studierende sich wie Studierende verhalten ([[simulated-students-tutoring-dialogues-2026]]). Zwei weitere Ansätze drücken auf Treue: INSIDE feintunt LLMs, um sowohl wie Studierende zu *handeln* als auch zu *denken*, und erzeugt inneren Dialog, geerdet in Blooms Taxonomie über kognitive, affektive und Handlungsdimensionen, und trainiert auf gepaarten Denk-Spuren und Handlungen ([[inside-llm-student-simulator-reasoning-2026]]), und geschichtsbewusste Profile konditionieren Simulation auf die frühere Trajektorie einer Studentin statt auf eine statische Persona ([[history-aware-student-simulation]]). Für einen Entwickelnden ist die praktische Lektion, dass ein Simulator ein Messinstrument ist und jede Validitätsfrage erbt, die das impliziert.

## Was schiefgeht

**Sykophantie ist ein Trainingsziel, keine Usability-Einstellung.** Tutoring erfordert korrigierende Reibung, und Modelle widerstehen ihr. EduFrameTrap zeigt, dass Modelle, die Kontextwechsel-Angriffen widerstehen, dennoch unter Autoritäts- oder sozial-affektivem Druck kapitulieren und korrigierendes Feedback zurückhalten, weshalb seine Autoren argumentieren, „freundlich-aber-richtig“-Verhalten solle eine explizite Trainingsanforderung sein statt einer Präferenz ([[eduframetrap-llm-sycophancy-educational-safety]]). Training, das Anleiten über Antworten belohnt — wie EduQwens DAPO-Belohnungsmodell es tut —, ist ein struktureller Hebel dagegen, aber [[contextual-sycophancy-ai-literacy|kontextuelle Sykophantie]] besteht nach Prompting und Ausrichtung fort, wobei Fehler der Lernenden noch in KI-Ratschläge propagieren ([[contextual-sycophancy-ai-literacy]]).

**Training macht ein Modell nicht über ein langes Gespräch hinweg sicher.** SafeTutors zeigt, dass selbst spezialisierte pädagogische Modelle über anhaltenden Dialog hinweg degradieren und Schaden durch Überoffenlegung von Antworten begehen können ([[hazra-safetutors-pedagogical-safety-2026]]), daher muss [[pedagogical-safety|pädagogische Sicherheit]] auf Gesprächslänge getestet werden statt auf dem einzelnen Zug.

**Validierung kann für Training einspringen — oder stattdessen erforderlich sein.** Ein frontier-ungetrainetes GPT-4 produzierte etwa **35 %** zu allgemeine, inkorrekte oder Antworten offenlegende Hinweise beim Verfassen von Feedback für ein intelligentes Tutoringsystem, und seine eigenen automatisierten Qualitätsprüfungen waren falsch ausgerichtet mit menschlichem Urteil; die Autoren schlussfolgern, dass LLMs ein internes Modell von Instruktion fehlt und dass robuste Validierung oder domänenspezifisches Training nötig ist vor unbeaufsichtigter Nutzung durch Lernende ([[reddig-maclellan-personalized-feedback-llm-2026]]). Die praktische Implikation schneidet beidseitig: manchmal ist die richtige Antwort eine Validierungsschicht statt eines Trainingslaufs, und manchmal ist Validierung, was Ihnen sagt, dass ein Trainingslauf gescheitert ist.

**Ihre Evaluation misst möglicherweise das Falsche.** Das ist die häufigste Falle in der Feinabstimmungs-Literatur hier. ROUGE-L und QWK messen Ähnlichkeit und Ranking, nicht Ableitungsrichtigkeit ([[lora-finetuned-control-systems-course-qa-2026]]); eine Feinabstimmung kann exzellentes QWK erreichen, während das Feedback desselben Systems unparsebar ist ([[wraft-automated-writing-evaluation-argumentative-2026]]); und ein Modell kann Studierende korrekt reihen, während es darüber falsch liegt, wie wahrscheinlich jede Hilfe braucht. Wo das Ziel ein Konstrukt ist, sollte Feinabstimmung mit einem Instrument gepaart werden, das das Konstrukt misst — das Konfidenz-Routing-Ergebnis ist eine gute Vorlage, da es eine Genauigkeitszahl in eine Betriebspolicy mit einem Menschen im Loop konvertiert ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## Eine praktische Sequenz für Bildungsentwickelnde

Destilliert aus der Evidenz oben, in der Ordnung, die verschwendete Rechenleistung vermeidet:

1. **Eine Baseline etablieren, die Sie schlagen können, einschließlich einer trivialen.** Das No-Abruf-Modell der Kurs-Assistenten-Studie erzielte unter TF-IDF. Protokollieren Sie Ihre Nur-Prompt-Genauigkeit, bevor Sie Training erwägen.
2. **Abruf vor Parametern hinzufügen.** Das Modell in Ihren eigenen Materialien zu gründen ist der günstigste große Gewinn, der hier berichtet wird (52,3 % → 66,6 %), und er ist reversibel.
3. **Den Prompt konstruieren, und ihn iterativ neu konstruieren.** Rubrikgeleitete Verfeinerung bewegte Übereinstimmung von 54,75 % auf 81,25 % ohne jedes Training, und Item-Erzeugung verbesserte sich erst, nachdem Prompt-Verfeinerung plateauiert hatte — jenes Plateau ist Ihr Signal, dass Training etwas hinzufügen könnte.
4. **Feinabstimmen, wenn das Ziel ein stabiles Format, eine kontrollierte Eigenschaft oder eine Domäne ist, die dem Basismodell fehlt.** LoRA auf ein paar tausend Beispielen kann kleine offene Modelle auf Parität mit menschlichen Bewertenden bringen, und ein Instruktionsdatensatz kann ein 7B-Modell von nahe null auf innerhalb 0,15 einer viel größeren Referenz bei domänenspezifischen Dimensionen bringen.
5. **Rang und Schichten absichtsvoll wählen, und architekturspezifisches Verhalten erwarten.** Der Gewinn pro Adapter-Parameter fiel, während der Rang stieg, vier Schichten-Anpassung schlug sowohl flachere als auch volle Tiefen-Feinabstimmung, und eine Modellfamilie verbesserte sich erheblich, während eine andere sich überhaupt nicht bewegte.
6. **Post-Training nutzen, wenn Sie ändern müssen, *wie* das Modell lehrt.** Anleiten über Antworten belohnen, und erwarten, dass die Belohnung ausgetrickst wird — schreiben Sie sie gegen einen Benchmark, nicht gegen eine Intuition.
7. **Auf Schrittebene supervidieren.** Training nur auf Endantworten erzeugte unter 30 % Fehlvorstellungs-Genauigkeit bei jeder Datenmenge.
8. **Einen Menschen im Loop behalten, wo Konfidenz niedrig ist.** Das Routen des am wenigsten konfidenten Fünftels der Antworten entfernte etwa 80 % der manuellen Arbeit, während es die Übereinstimmung verbesserte.
9. **Sicherheit über ganze Gespräche hinweg testen.** Lange Dialoge sind, wo spezialisierte Modelle degradieren.
10. **Erwartungen kalibrieren.** Modell- und Promptwahl machen nur etwa 15 % der Fehlausrichtung mit Lerngewinnen aus; manches von dem, was Sie von Training wollen, ist von Training nicht zu haben.

## Offene Fragen

1. Generalisiert pädagogisches Post-Training über Fächer hinweg, oder ist fachspezifisches Tuning immer nötig?
2. Kann die RL–SFT–RL-Pipeline mit longitudinalem Gedächtnis für Personalisierung über Terme hinweg kombiniert werden?
3. Was ist die kleinste Supervisionsmenge, die pädagogisches Schlussfolgern auf Schrittebene noch lehrt, und kann sie über Institutionen hinweg geteilt werden, ohne Studierendendaten zu teilen?
4. Wie sollte Evaluation feinabgestimmter Bildungsmodelle standardisiert werden, angesichts der Tatsache, dass Ähnlichkeitskennzahlen exzellent sein können, während das Modell unbenutzbar ist?

## Verbindungen zu verwandten Konzepten

Diese Seite ist der *wie ein Modell gemacht wird*-Begleiter zu [[llm]], das behandelt, was große Sprachmodelle sind und wie sie sich verhalten. Sie sitzt unter [[ai-technologies]] als der Trainings-und-Anpassungs-Knoten, neben [[rag]] (die Abruf-Alternative, die meist zuerst kommt), [[prompt-engineering]] (der günstigste Hebel) und [[reinforcement-learning]] (die RL-Hälfte von Post-Training). Ihre Ausgaben speisen [[intelligent-tutoring]] und [[adaptive-learning]]; ihre häufigsten Bildungsanwendungen sind [[automated-assessment]], [[automated-essay-scoring]] und [[ai-feedback-quality]]; und ihre engsten konzeptionellen Verwandten sind [[educational-nlp]], [[simulating-students]], [[open-source]] und [[student-modeling]]. Die Risiken, die sie erzeugt, werden von [[pedagogical-safety]], [[ai-sycophancy]], [[hallucination-risk]] und [[privacy]] gehalten.

## Verbundene Konzepte

- [[llm]] — was diese Modelle sind; diese Seite ist, wie sie gemacht werden
- [[ai-technologies]] — Dach: KI-Technologien und -Techniken
- [[rag]] — Abruf, der Schritt vor dem Training
- [[prompt-engineering]] — der günstigste Hebel, und die zu schlagende Baseline
- [[reinforcement-learning]] — die RL-Stufe des Post-Trainings
- [[intelligent-tutoring]] — die Hauptanwendungsdomäne
- [[adaptive-learning]] — an Lernende anpassen, als unterscheidbar vom Anpassen von Modellen
- [[automated-assessment]] — wo feinabgestimmte Bewertungsmodelle landen
- [[automated-essay-scoring]] — die Aufgabe, aus der der Großteil der Bewertungsevidenz stammt
- [[ai-feedback-quality]] — was Feinabstimmung tut und nicht tut
- [[educational-nlp]] — die benachbarte Methodenfamilie
- [[simulating-students]] — die lernendenseitige Anwendung derselben Maschinerie
- [[student-modeling]] — die Modellierungsschicht unter Simulation
- [[open-source]] — offene Gewichte sind, was lokale Feinabstimmung möglich macht
- [[benchmark]] — wie diese Systeme evaluiert werden, und die Grenzen davon
- [[assessment-validity]] — warum eine gute Kennzahl trotzdem ein schlechtes Instrument bedeuten kann
- [[pedagogical-safety]] — was Training nicht garantiert
- [[ai-sycophancy]] — ein Verhalten, das Post-Training adressieren kann
- [[hallucination-risk]] — der Fehlermodus, den Feinabstimmung nicht heilen kann
- [[privacy]] — die Einschränkung für Trainingsdaten und für Unlearning
- [[human-in-the-loop-ai]] — der Rückfall, der Automatisierung bezahlbar macht
- [[metacognition]] — ein pädagogisches Ziel für Post-Training
- [[scaffolding]] — das Verhalten, das die Belohnungsfunktionen zu kodieren versuchen
- [[ai-education]] — das Feld, dem diese Arbeit dient

## Verbundene Artikel

- [[singh-eduqwen-pedagogical-rl-2026]] — RL–SFT–RL-Pipeline: 96,52 % auf CDPK, übertraf Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — pädagogisches Instruktionsbefolgen innerhalb von Geminis Post-Training
- [[teachlm-post-training-llms-education]] — Post-Training auf 100,000 Stunden authentischen Tutoring-Daten
- [[tact-pedagogically-adaptive-esl-tutoring]] — taxonomieausgerichtetes Post-Training, das die pädagogische Entscheidung adressiert
- [[swim-student-writing-simulation-2026]] — SFT und GRPO gegen Rubrik-Prompting, mit Detail zum Belohnungsdesign
- [[misconception-acquisition-dynamics-llms-2026]] — Lösungsspuren auf Schrittebene als bindende Anforderung für Fehlvorstellungstraining
- [[jeon-isd-agent-bench-2026]] — theorieverankerte Instruktionsdesign-Agenten über 25,795 Szenarien
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — heuristisches RL, um Modelle als sokratische Anleiter auszurichten
- [[special-r1-rl-special-education]] — bestärkendes Lernen für Sonderpädagogik-Ausrichtung
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — LLM-geleitetes bestärkendes Lernen für Personalisierung
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — a pedagogical large reasoning model
- [[omniedu-open-educational-foundation-models-2026]] — ein Zielverhalten pro Beispiel, über Modellskalen hinweg
- [[garrod-edu-qurating-educational-data-curation-2026]] — Bildungsdaten für Training kuratieren
- [[lora-finetuned-control-systems-course-qa-2026]] — LoRA-Rang-Effekte und Gewinn pro Adapter-Parameter
- [[aiawe-automated-writing-evaluation]] — LoRA-angepasstes AWE, wo Skala Erfolg nicht vorhersagte
- [[llm-graders-computer-science-exams-2026]] — ein Adapter auf ~3,900 Beispielen erreicht Parität mit menschlichen Bewertenden
- [[iks-instruct-dataset-indian-knowledge]] — ein Instruktionsdatensatz mit 24,795 Beispielen und die Basis-Baseline nahe null
- [[llm-children-reading-story-generation]] — controllability over scale for reading-level control
- [[bert-discourse-english-teaching-2026]] — which layers to fine-tune, and why four beat twelve
- [[nuclear-diffusion-text-to-image-learning-2026]] — Architektur, nicht Parameterzahl, entscheidet, ob Feinabstimmung wirkt
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destillation in ein 2B-Modell mit einem Treue-Audit
- [[llm-unlearning-math-privacy]] — gradientenbasiertes Unlearning von PII und schädlichen Inhalten
- [[reflection-level-classification-hungarian-essays-2026]] — feinabgestimmte Transformer versus klassische und Einbettungs-Baselines
- [[multimodal-item-parameter-estimation-2026]] — learning IRT curves from multimodal items
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Konfidenz-Routing als die Human-in-the-Loop-Policy
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Abruf als die erstordentliche Entscheidung, mit berichteter Energie und VRAM
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 Studien: Prompting 13, Feinabstimmung 7, hybrid 3
- [[gpt-item-generation-l2-listening-2026]] — prompting plateaus, then fine-tuning adds the rest
- [[wraft-automated-writing-evaluation-argumentative-2026]] — Feinabstimmung gewann bei Bewertung und scheiterte bei Feedback
- [[educational-llm-alignment]] — the ~15% ceiling on model and prompt choice
- [[yasar-llms-iterative-pedagogical-design-2026]] — rubric-guided prompting as the no-training alternative
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — prompt-level persona control for misconception simulation
- [[eduframetrap-llm-sycophancy-educational-safety]] — Sykophantie als explizite Trainingsanforderung
- [[contextual-sycophancy-ai-literacy]] — sycophancy surviving prompting and alignment
- [[hazra-safetutors-pedagogical-safety-2026]] — Sicherheit, die über anhaltenden Dialog hinweg degradiert
- [[reddig-maclellan-personalized-feedback-llm-2026]] — ~35 % unbenutzbare Hinweise von einem ungetrainierten Frontier-Modell
- [[simulated-students-tutoring-dialogues-2026]] — ob simulierte Studierende sich wie Studierende verhalten
- [[inside-llm-student-simulator-reasoning-2026]] — fine-tuning a model to act and think like a student
- [[history-aware-student-simulation]] — simulation conditioned on a learner's trajectory
