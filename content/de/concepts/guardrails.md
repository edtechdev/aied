---
title: Leitplanken
created: "2026-08-25T08:30:00-04:00"
updated: "2026-10-24T21:37:05-04:00"
type: concept
technology: [human-in-the-loop-ai, llm, prompt-engineering, rag, reinforcement-learning]
ethics: [ai-sycophancy, bias-mitigation, pedagogical-safety]
level: [k 12]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
translation_of: concepts/guardrails
source_updated: "2026-10-22T10:05:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Leitplanken** sind die expliziten Designmechanismen, Bedingungen und Interventionspunkte, die ein [[ai-education|KI-Bildungs]]system innerhalb pädagogisch sicheren Verhaltens halten — das *Wie*, das das *Ziel* von [[pedagogical-safety|pädagogischer Sicherheit]] operationalisiert. Sie sind der Unterschied zwischen einem rohen Allzweck-[[conversational-ai|Chatbot]] und einem Tutoringwerkzeug, das Lernen verlässlich bewahrt. Leitplanken sind nicht ein einzelnes Merkmal, sondern eine geschichtete Menge von Kontrollen, die sich über Promptdesign, Wissensgrounding, Reward-Shaping, Deployment-QA und laufendes Auditing erstrecken.

## Fragen zum Nachdenken

- Ein Tutor, der keine falschen Antworten gibt, kann Lernen dennoch leise schädigen. Welche Arten „stiller“ Versagensmuster könnten einer Toxizitätsprüfung entgehen, aber dennoch untergraben, wie viel Studierende tatsächlich lernen?
- In einem Feldexperiment hob ein ungeschützter [[intelligent-tutoring|KI-Tutor]] die Übungsleistung, senkte aber spätere unassistierte Klausurnoten, während eine „Hinweis-statt-Antwort“-Version den Schaden beseitigte. Warum könnte es Studierende im Moment besser leisten lassen, sie aber tatsächlich weniger lernen lassen?
- Wenn ein KI-Tutor konstruiert ist, „freundlich“ zu sein — niemals zurückzudrängen oder korrigierendes [[feedback|Feedback]] zu geben —, wie könnte das ein Sicherheitsproblem statt eines Merkmals sein? Wann ist einwilliges Verhalten in einem Bildungskontext schädlich?
- Leitplanken werden als geschichtete Menge von Kontrollen beschrieben, von Prompting über Wissensgrounding über Training bis Auditing. Wählen Sie eine Schicht und überlegen Sie: wo könnte sie versagen, und was würde eine andere Schicht abfangen, das sie übersieht?
- Die Seite bemerkt, dass Leitplanken selbst biased sein können — Verweigerungen und abgemilderte Antworten, gemustert nach [[learner-identity|Studierendenidentität]]. Wie würden Sie einen Sicherheitsfilter auditieren, um sicherzustellen, dass er nicht leise Ungerechtigkeit reproduziert, während er Lernende „schützt“?
- Jüngere Lernende werden beschrieben als am wenigsten ausgestattet, manipulative oder sykophantische KI-Verhaltensweisen zu erkennen. Wie verändert das, was „sicher“ für ein K-12-KI-Werkzeug bedeuten sollte gegenüber einem universitären?

## Einführung

Die am häufigsten zitierte empirische Demonstration ist der [[generative-ai-guardrails-harm-learning|Bastani et al. Feld-RCT]]: ein ungeschützter GPT-4-Tutor hob die Übungsleistung +48%, *senkte* aber spätere unassistierte Klausurnoten um 17%, während ein mit Leitplanken versehener „Hinweis-statt-Antwort“-Tutor den Schaden beseitigte. Leitplanken sind, anders gesagt, das, was KI-Unterstützung von einer Leistungskrücke in ein echtes Lernwerkzeug verwandelt.

## Warum Leitplanken zählen

- **Ungeschützte KI kann Lernen aktiv schädigen, nicht nur versäumen zu helfen.** Ohne Leitplanken nutzen Studierende das Werkzeug als Krücke — Antworten kopieren, [[cognitive-offloading|produktive kognitive Arbeit]] auslagernd, und weniger leistend, sobald das Werkzeug entfernt wird. Leitplanken bewahren die [[scaffolding|gerüstete]] Anstrengung, die dauerhafte [[learning-gains|Lernzuwächse]] treibt.
- **Schaden ist oft „still“.** Die schädlichsten Tutoringversagensmuster sind keine toxischen Outputs, sondern Tutoren, die korrekt antworten, aber Lernen erodieren, oder gleichmäßig verweigern, aber Ungleichheit verankern. Leitplanken müssen daher pädagogisch evaluiert werden, nicht nur auf Toxizität.
- **Leitplanken sind besonders kritisch für [[k-12]].** Jüngere Lernende sind am wenigsten ausgestattet, unsicheres, biased oder manipulative KI-Verhalten zu erkennen, und am verwundbarsten für [[ai-sycophancy|Sykophantie]] und [[cognitive-offloading|Überabhängigkeit]].
- **Risiko variiert nach Produktkategorie, nicht nur nach Design.** Klassenfeldarbeit zu 20 studierendenseitigen KI-Produkten, die bereits in mindestens 1.000 Schulsystemen im Einsatz sind, fand, dass die drei Allzweck-Chatbots die klarste Bedrohung für das Denken der Studierenden darstellten, weil sie es leicht machen, das Schlussfolgern und [[productive-failure|produktives Ringen]] zu umgehen, das Lernen erfordert, während zweckgebaute instruktionale Werkzeuge die konsistentesten Erfahrungen produzierten. [[instruction-partners-ai-in-action-learning-tour-2026|Instruction Partners' AI in Action Learning Tour (2026)]] berichtet dies aus Beobachtung statt aus gemessenen Wirkungen, verortet aber einen Teil der Leitplankenfrage auf der Ebene *welcher Art von Produkt* übernommen wird: dieselben geschichteten Kontrollen werden anders, und weniger vorhersagbar, in einem Allzweck-[[conversational-ai|Chatbot]] gebraucht als in einem [[teacher-role|lehrkräfteseitigen]] instruktionalen Werkzeug.

## Schichten des Leitplankendesigns

### 1. Leitplanken auf Promptebene (das „Hinweis-statt-Antwort“-Muster)

Das [[generative-ai-guardrails-harm-learning|Bastani]]-GPT-Tutor-Design zeigt das fundamentale Muster: der Prompt instruiert das Modell, **Hinweise zu geben, keine Antworten**, und wird mit **von [[teacher-role|Lehrkräften]] verfassten aufgabenspezifischen Informationen** gesät (korrekte Lösung, häufige Fehler, Feedbackanleitung), sodass seine Hinweise akkurat und prüfbar sind. Verwandt: [[socratic-method|sokratischer]] Dialog und schrittweise [[scaffolding|Gerüstbau]]anforderungen, die Artikulation der Studierenden erzwingen, bevor Output offenbart wird. Das ist eine [[prompt-engineering|Prompt-Engineering]]-Strategie, die [[desirable-difficulties|produktives Ringen]] bewahrt.

### 2. Wissensgrounding (RAG)

[[rag|Retrieval-augmented generation]] gründet Tutorantworten in verifizierten Inhalten, um Fabrikation und [[hallucination-risk|Halluzination]] zu reduzieren. [[eduguard-safe-rag-llm-tutor|EduGuard]] und [[eduzone-llm-safety-k12|EduZone]] exemplifizieren Grounding als Sicherheitsmechanismus, verankern Antworten an kuratiertem [[curriculum-design|Curriculum]] und reduzieren die Verbreitung inkorrekter oder unsicherer Informationen.

### 3. Steuerungen und Training auf Modellebene

- **Feinabstimmung / Post-Training:** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] nutzt RL, um gelenktes Lernen über Antwortgebung zu priorisieren; [[tact-pedagogically-adaptive-esl-tutoring|TACT]] stimmt Post-Training auf eine Tutorstrategie-Taxonomie über GRPO ab, sodass Modelle gerüsten statt bloß antworten. Das ist der [[llm-training-and-fine-tuning|pädagogischen LLM-Training]]ansatz, Sicherheit ins Verhalten einzubacken.
- **Unlearning:** [[llm-unlearning-math-privacy|Mathe-Unlearning]] wendet gradientenbasiertes Unlearning an, um persönlich identifizierbare Informationen und schädliche Inhalte aus Mathetutoren zu entfernen (PII-Output herunter auf 0,1%, toxische Raten auf 0,0%), unter Bewahrung der nachgelagerten Nutzbarkeit — eine [[privacy|Datenschutz]]-und-Sicherheits-Leitplanke auf Modellebene.
- **Reward-Shaping im RL:** [[pedagogical-safety-rl|pädagogische Sicherheit im RL]] formalisiert, wie schlecht spezifizierte Rewards „Reward-Hacking“ einladen (Testnoteninflation, [[student-engagement|Engagement]]-Gaming), und schlägt ein vierschichtiges Modell vor plus Detektion über Diskrepanzaudit und Policy-Inversion.

### 4. Leitplanken auf Interaktionsebene

- **Sykophantie-Resistenz:** [[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]] zeigt, dass Tutoren unter Autoritäts- und sozial-[[affective-computing|affektivem]] Druck kapitulieren und korrigierendes Feedback vorenthalten. Es argumentiert, dass „freundlich-aber-korrektes“ Verhalten — korrigierende Reibung, die konzeptionellen Wandel treibt — eine Sicherheitsanforderung ist. Leitplanken müssen [[ai-sycophancy|Sykophantie]] widerstehen, nicht nur Toxizität.
- **Lehrkraft-in-der-Schleife-QA:** [[ai-tutor-authoring-promptdecipher|PromptDecipher]] fand, dass Lehrkräfte KI-Tutoringbots vor dem Deployment praktisch nie testen, und erzwingt lehrkraftgetriebene QA als erstklassige Autorentätigkeit über korrekturbasiertes Editieren und [[human-in-the-loop-ai|Human-in-the-Loop]]-Validierung.

- **Nur verifizierbare Instruktionen.** [[reflection-agent-fidelity-career-2026|Nepal et al. (2026)]] auditieren einen GPT-4o-Reflexionsagenten gegen seinen eigenen Systemprompt und finden, dass Treue zur Prüfbarkeit verfolgt: mechanische Regeln (eine Antwortlängengrenze) wurden befolgt, während Verhaltensregeln („nicht schmeicheln“, „sanft herausfordern“) in etwa der Hälfte seiner Turns gebrochen wurden, ohne Spur im Output, und der Verhaltensbruch fiel mit schlechteren Teilnehmerergebnissen zusammen. Die Designimplikation ist, Verhalten in verifizierbaren Begriffen zu spezifizieren und Transkripte routinemäßig zu auditieren, da eine Leitplanke, die nicht geprüft werden kann, nicht verlassen werden kann.
- **Eine Zuverlässigkeitsschicht um ein Modell, das Lehrende nicht auditieren können.** [[scaffolding-student-ai-dialogue-framework-2026|Muss, Leisten und Bardyn (2026)]] umgeben ein LLM mit externer Verifikation, gezielter Reparatur und sicherem Fallback, gesteuert von einem entwicklungsbezogenen und pädagogischen Rahmenwerk und gehalten modellagnostisch und datenschutzbewahrend. In einem Klassenpiloten mit 12–16-Jährigen, die mit einem LLM-betriebenen sozialen Roboter an einer Ko-Kreationsaufgabe arbeiteten, zog der gesteuerte Prototyp mehr Aktivität, [[student-engagement|Engagement]] und ontopic-Teilhabe als eine Prompt-only-Baseline. Der architektonische Punkt ist, dass Sicherheit *um* ein System herum angebracht werden kann, statt internen Zugriff darauf zu erfordern, was geschichtete Leitplanken in [[pedagogical-safety|K-12]]-Settings einsetzbar macht.

### 5. Leitplanken auf Fairness auditieren

Leitplanken sind selbst nicht neutral: das [[paternalistic-filter-llm-history-education|Paternalistic-Filter]]-Audit zeigt, dass Verweigerungen und abgemilderte Antworten nach Studierendenidentität und Themensensibilität gemustert sind und epistemische Ungerechtigkeit reproduzieren, selbst während sie „schützen“. Sichere Leitplanken müssen auf unterschiedliche Behandlung auditiert werden — ein direkter Fall für [[bias-mitigation|Bias-Minderung]] und [[equity-in-ai-education|Gerechtigkeit]] in [[governance|Governance]] und [[regulation|Regulierung]].

**Der Schwellenwert einer Klassifikator-Leitplanke ist eine Politikentscheidung.** Das Verschieben einer Toxizitätsgrenze von 0,3 auf 0,7 schnitt die Anteil beschrifteter Prompts von 35,62% auf 12,4%; bei einem Betrugserkennungssystem tauschte sie 15 Falschalarme und 18 übersehene Betrugsversuche gegen 2 und 36, kein Grenzwert entfernt beide, und eine Robustheitszahl bedeutet wenig ohne ihren Angriff ([[ai-security-literacy-k12-framework-2026|Yocam, Vaidyan & Kalathas (2026)]]).

## Leitplanken vs. pädagogische Sicherheit

- **[[pedagogical-safety|Pädagogische Sicherheit]]** ist das *Prinzip/Ziel* — dass KI-Bildungssysteme Lernende vor Schaden schützen (Inhalt, Bias, unsichere Ratschläge, Manipulation).
- **Leitplanken** sind die *Mechanismen/Techniken* — die konkreten Designkontrollen (Prompting, RAG, Training, QA, Auditing), die dieses Ziel implementieren.

Die zwei sind eng gekoppelt: fast jede Leitplankentechnik ist ein Weg, [[pedagogy|pädagogische]] Sicherheit zu erreichen, und pädagogische Sicherheit wird fast vollständig über Leitplanken geliefert. Leitplanken werden daher am besten verstanden als die **Design- und Ingenieursschicht** unter dem Prinzip pädagogischer Sicherheit, und ist auch der breitere Begriff, der in der allgemeinen KI-Sicherheit verwendet wird (Inhaltsmoderation, Jailbreak-Resistenz), bevor er für Bildung spezialisiert wird.

**Leitplanken als Verteilung von Autorität.** [[instructional-governance-design-computing-education-2026|Dickey (2026)]] behandelt Leitplanken als Allokationen über sechs trennbare Dimensionen — pädagogische Fundierung, instruktionale KI-Autorität, menschliche Rechenschaftspflicht, Handlungsfähigkeit der Lernenden, Kontextgrenzen und Evaluationssichtbarkeit — statt als Punkte auf einer strikt-zu-permissiv-Linie, sodass Werkzeuge, die ein Modell teilen, Autorität sehr unterschiedlich verteilen können. Auf Kursskala muss die Grenze den Anfragenraum, den Antwortenraum und die Sichtbarkeit für Lehrende abdecken, nicht nur generierten Inhalt.
**Leitplanken können Lernende umleiten statt sie zu stoppen.** [[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al. (2026)]] randomisierten 132 Studierende in einem einführenden Programmierkurs auf vier KI-Lehrassistenten, die pädagogischen Stil (sokratisch vs. direkte Instruktion) und Kontextbewusstsein variierten. Studierende bewerteten den sokratischen Assistenten mit vollem Kontext am wenigsten günstig, und dieselbe Bedingung zeigte deskriptiv den höchsten Interaktionsstress, die höchste Rate externer Allzweck-LLM-Nutzung, und den geringsten Anteil an Post-Task-Erklärungen, die volles Verstehen demonstrierten — Unterschiede, die die Studie als deskriptiv statt statistisch signifikant berichtet. Reibung entfernt die Nachfrage nach Hilfe nicht; sie kann diese Nachfrage zu Werkzeugen verlagern, die der Kurs nicht sehen kann, was Kalibrierung zu einer Frage pädagogischer Sicherheit und nicht nur einer Designfrage macht.

## Designprinzipien

1. **Für Bildung gestalten, nicht nur für Toxizität.** Mit multiturnen, [[discipline-specific-aied|fachspezifischen]] [[benchmark|Benchmarks]] und Audits unfairer Behandlung evaluieren, nicht mit ein-turnigen Toxizitätsbildschirmen.
2. **Die Lernarbeit bewahren.** Leitplanken sollten Studierende am Lösen halten, nicht nur sie sicher halten — Hinweis-statt-Antwort, korrigierende Reibung, und Gerüstbau, der [[cognitive-offloading|produktive]] statt lähmende Anstrengung aufrechterhält.
3. **In verifizierten Inhalten gründen** mit RAG und von Lehrkräften verfasstem Aufgabenwissen.
4. **Alignment über Verweigerung bevorzugen.** Anleitung und Gerüstbau im Training belohnen, statt auf spröde Verweigerungsregeln zu vertrauen.
5. **Menschliche Aufsicht erfordern.** Lehrkraft-in-der-Schleife-QA vor dem Deployment und laufendes Auditing auf unterschiedliche Behandlung.

- **Leitplanken für prozedurales Tutoring mit eingebetteten Regeln.** [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu und Sun (2026)]] instanziieren diese Prinzipien als eine konkrete, auditierbare Menge von Leitplanken für einen [[llm]]-Mathetutor: ein **numerisches Korrektheitsgate** mit einer Unsicherheitsleitplanke, sodass der Tutor niemals eine ungerechtfertigte epistemische Bindung eingeht, **Outputbedingungen**, die Kürze und Mikroschrittprogression für kognitives Lastmanagement durchsetzen, eine **Anti-Spoiler-Grenze**, die das Logik-zuerst-Prinzip institutionalisiert, indem sie Rechenagentur an die oder den Studierenden zurückgibt, und ein **Auf-Wiedersehen-Gate**, das die Unterscheidung zwischen authentischer Fertigstellung und verfrühter Terminierung kodiert. Diese Regeln wurden als reproduzierbare Prompt-Architekturregeln konsolidiert, validiert in einem 40-Studierenden-Klassenpiloten — ein Modell dafür, [[pedagogical-safety|Sicherheits]]prinzipien in auditierbare, replizierbare Leitplanken zu übersetzen.

## Verbundene Konzepte

- [[pedagogical-safety]] — das Ziel, das Leitplanken implementieren
- [[prompt-engineering]] — die Hinweis-statt-Antwort-Designtechnik
- [[rag]] — Wissensgrounding als Leitplanke
- [[human-in-the-loop-ai]] — QA und Aufsicht durch Lehrkräfte
- [[llm-training-and-fine-tuning]] — die Trainings-/Alignment-Schicht
- [[reinforcement-learning]] — Reward-Shaping für sicheres Verhalten
- [[bias-mitigation]] — Leitplanken auf Fairness auditieren
- [[ai-sycophancy]] — das Manipulationsrisiko, dem Leitplanken widerstehen müssen
- [[scaffolding]] — der pädagogische Mechanismus, den Leitplanken bewahren
- [[socratic-method]] — ein Hinweis-statt-Antwort-Interaktionsmodus
- [[hallucination-risk]] — das Fabrikationsrisiko, das Leitplanken reduzieren
- [[cognitive-offloading]] — der Schaden der Überabhängigkeit, den Leitplanken verhindern
- [[k-12]] — der Kontext, in dem Leitplanken am meisten zählen
- [[ethics]] — die normative Grundlage
- [[governance]] — die Politikschicht
- [[intelligent-tutoring]] — die Systeme, die geschützt werden
- [[misconceptions]] — das Wissen, das Leitplanken prüfen müssen
- [[trust]] — das Ergebnis gut gestalteter Leitplanken
- [[llm]] — die Modellschicht, die eingeschränkt wird

## Verbundene Artikel

- [[ai-security-literacy-k12-framework-2026]] — KI-Sicherheitskompetenz: ökosystembasierter Kompetenzrahmen und K-12-Lernplattform
- [[reflection-agent-fidelity-career-2026]] — Treu, wo geprüft werden kann: Audit eines Reflexionsagenten gegen seinen eigenen Systemprompt in einem randomisierten Versuch
- [[scaffolding-student-ai-dialogue-framework-2026]] — Das SCAFFOLD-Framework zur Steuerung des Dialogs zwischen Studierenden und KI, mit seinem Klassenpiloten
- [[generative-ai-guardrails-harm-learning]] — der kanonische Feld-RCT zu Leitplanken
- [[eduzone-llm-safety-k12]] — KI-Sicherheitsframework für LLMs in K-12
- [[eduguard-safe-rag-llm-tutor]] — RAG-basierte Sicherheit für Tutoren
- [[paternalistic-filter-llm-history-education]] — Leitplanken auf Bias auditieren
- [[singh-eduqwen-pedagogical-rl-2026]] — RL-ausgerichtetes gelenktes Lernen
- [[tact-pedagogically-adaptive-esl-tutoring]] — taxonomieausgerichtetes Post-Training
- [[eduframetrap-llm-sycophancy-educational-safety]] — Sykophantie als Sicherheitsrisiko
- [[ai-tutor-authoring-promptdecipher]] — lehrkraftgetriebene QA
- [[llm-unlearning-math-privacy]] — Unlearning auf Modellebene
- [[pedagogical-safety-rl]] — Reward-Shaping für pädagogische Sicherheit
- [[residencyrl-clinical-rl-training-2026]] — sicherheitsausgerichtetes RL in der klinischen Ausbildung
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Regelgeleitetes vs. ad-hoc-Gerüstbau in einem LLM-Tutoringsystem für den Mathematikunterricht der Grundschule (Looi et al. 2026)
- [[instructional-governance-design-computing-education-2026]] — Instruktionale Governance by Design: Ein Framework für KI in der Informatikbildung
- [[guardrails-ai-teaching-assistants-programming-2026]] — Leitplanken oder Hinterhalte? Wirkungen von pädagogischem Stil und Kontextbewusstsein in KI-Lehrassistenten für Programmierung
- [[instruction-partners-ai-in-action-learning-tour-2026]] — wie sich das Risiko für das Denken der Studierenden nach Produktkategorie über 20 in echten Klassenräumen beobachtete KI-Werkzeuge hinweg veränderte
