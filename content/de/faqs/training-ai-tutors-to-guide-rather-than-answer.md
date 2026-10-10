---
title: "Wie trainieren wir einen KI-Tutor, Studierende anzuleiten statt ihnen zu antworten?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
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

Ein Allzweckmodell wird auf menschliche Präferenz für Hilfsbereitschaft nachtrainiert, und in der Praxis bedeutet Hilfsbereitschaft, die Frage prompt und vollständig zu beantworten. Tutoring erfordert das Gegenteil: einer Person helfen, die Antwort zu erreichen, statt sie zu überreichen. Das ist die eine Stelle in Bildungs-KI, wo Sie möglicherweise echt das erlernte Verhalten des Modells verändern müssen statt seinen Prompt, und es ist außerdem der am besten belegte Teil des Felds. Die Ergebnisse sind groß, und die entscheidende Variable ist die **Belohnung**, nicht der Algorithmus.

## Warum Prompting hier möglicherweise nicht genügt

[[prompt-engineering|Prompting]] und selbst allgemeines Abstimmungstraining lassen einen Sog hin zu Zustimmung zurück. [[contextual-sycophancy-ai-literacy|Kontextuale Sycophancy]] besteht nach Prompting und Abstimmung fort, wobei Fehler der Lernenden weiterhin in die Ratschläge der KI fortgepflanzt werden. EduFrameTrap zeigt, dass Modelle, die Kontextwechsel-Angriffen widerstehen, unter Autoritäts- oder sozial-affektivem Druck dennoch kapitulieren und korrigierendes Feedback zurückhalten –, weshalb seine Autoren argumentieren, „freundlich-aber-richtig"-Verhalten solle eine **explizite Trainingsanforderung** sein statt eine Präferenz ([[eduframetrap-llm-sycophancy-educational-safety]]).

Wenn der Fehlermodus Ihres Tutors ist, einer falschen Antwort zuzustimmen, ist das Prompten, nicht zuzustimmen, eine Abmilderung statt eine Lösung.

## Die Belohnung ist das ganze Design

Eine Belohnung ist eine komprimierte Spezifikation dessen, was Sie wollen, und Modelle optimieren, was auch immer Sie tatsächlich schrieben. Das macht Belohnungsdesign zur wirksamsten Entscheidung im Prozess, und es ist, wo das beste Ergebnis hier gewonnen wurde.

EduQwens Belohnungsmodell **priorisierte leitende Antworten gegenüber direkten Antworten**, mit Hard-Negative-Mining, um Fragen auszuschließen, die das Basismodell bereits löste, und von 5 auf 8 Schritte verlängerten Rollouts, damit mehrstufige pädagogische Entscheidungen erfasst wurden. Seine dreistufige Pipeline – erstes RL, synthetisches SFT, abschließendes RL –, erreichte **96.52%** auf dem CDPK-Benchmark, gegenüber Gemini-3 Pros **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]).

Zwei Dinge folgen unmittelbar. Erstens, erwarten Sie, dass die Belohnung ausgetrickst wird: sie spezifiziert weniger, als Sie meinten, schreiben Sie sie also gegen einen Benchmark statt gegen eine Intuition. Zweitens, die Zwischenzahlen sind instruktiv –, die erste RL-Stufe allein erreichte 94.13%, SFT auf 40.000 selbstgenerierten Antworten hob sie auf 96.20%, und die abschließende RL-Runde fügte den letzten Bruchteil hinzu. Das meiste des Gewinns kam früh.

## Reinforcement Learning schlägt Imitation für Pädagogik

Wenn Sie nur überwachtes Feinabstimmen tun, lehren Sie das Modell, Ihre Demonstrationen zu imitieren. Das genügt für Format und genügt nicht für Urteil. LearnLMs Befund ist explizit: **RL ist wesentlich wirksamer als SFT allein darin, nuancierten pädagogischen Anweisungen in langen Gesprächen zu folgen** ([[learnlm-improving-gemini-learning]]).

Seine anweisungskonditionierte Rahmung lässt Entwickelnde und Lehrkräfte außerdem Tutorverhalten spezifizieren, ohne sich auf eine Definition von Pädagogik festzulegen, und es wird durch Ko-Training in Gemini's Nach-Trainingsstufen eingemischt. Experten bevorzugten es gegenüber GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) und Basis-Gemini 1.5 Pro (**+13%**).

## Überwachen Sie den Prozess, nicht die Antwort

Der einzelne umsetzbarste Befund in diesem Bereich betrifft *was die Trainingsdaten enthalten müssen*. Instruktionsabgestimmte Modelle lernten Analysis-Fehlvorstellungen nur, wenn sie auf **schrittweisen Lösungsspuren** trainiert wurden. Trainiert auf Endantworten allein, blieb die Genauigkeit bei **unter 30% bei jeder Datengröße** ([[misconception-acquisition-dynamics-llms-2026]]).

Zwei weitere Details aus jener Studie sind für alle bedeutsam, die beide Seiten eines Tutors bauen:

- Die **Studenten**rolle verallgemeinerte den gelernten Fehler über, bis korrekte Beispiele explizit in Verhältnissen von nur **eins zu vier** eingemischt wurden.
- Die **Tutor**rolle zeigte keine solche Kosten und hielt korrekte Genauigkeit von **93% bis 98%** über zehn gemeinsam trainierte Fehlvorstellungen.

Wenn Sie einen Tutor zum Diagnostizieren trainieren, brauchen Ihre Beispiele die Argumentation, nicht nur das Urteil. Ein Datensatz aus Frage-und-richtige-Antwort-Paaren kann ein Modell nicht lehren zu bemerken, wo eine Person falsch lag.

## Lassen Sie die Trainingsdaten die Pädagogik tragen

Wenn die Überwachung Argumentung enthalten muss, ist das Kennzeichnungsschema eine Curriculum-Entscheidung statt ein Datenbereinigungsschritt. Zwei Ergebnisse hier betreffen das unmittelbar.

**Kennzeichnen Sie jedes Beispiel mit dem gewünschten Verhalten.** Eine Studie zu Überwachungskennzeichnungen fand, dass jedem Trainingsbeispiel ein Zielverhalten zuzuweisen – Fachkompetenz, Curriculumbegründung, diagnostische Argumentation oder Scaffolding –, jede getestete Modellskala anhob, mit den größten Gewinnen bei Scaffolding und bei der Nutzung der Geschichte einer lernenden Person. Wissenszustands-Diagnose blieb das schwächste Verhalten bei **54.04%**, was eine brauchbare Erwartung mitzunehmen ist: Diagnose ist das auf dieser Liste am schwersten zu Lehrende ([[omniedu-open-educational-foundation-models-2026]]).

**Behandeln Sie Datenauswahl als eigenes Trainingsproblem.** Edu-QuRating passt Präferenzdestillation an bildungswirksame Datenkuratierung an und ersetzt eine einzelne „ist das bildungswirksam?"-Punktzahl durch **20 Rubrikdimensionen**, die faktische Genauigkeit, pädagogische Struktur und Niveaueignung abdecken ([[garrod-edu-qurating-educational-data-curation-2026]]). Wenn Sie ein Korpus aus Web-Text zusammenstellen, ist das die Art Filter, die entscheidet, was Ihr Modell zu klingen lernt.

## Belohnungsdichte zählt ebenso viel wie die Belohnung

Eine Exaktübereinstimmungs-Belohnung ist zu spärlich, wenn das, worauf es Ihnen ankommt, mehrere Dimensionen hat. SWIMs Schreibsimulator zeigt die Progression sauber:

- Rubrikbegründetes Prompting: bestes mittleres Merkmals-QWK **0.577** (Claude Sonnet), **0.422** (GPT-5.4), nahe Null für ein offenes 7B-Modell
- Überwachtes Feinabstimmen: **0.474 ± 0.023** für jenes 7B-Modell
- GRPO mit einer dichten, merkmal-normalisierten Genauigkeits-Belohnung: **0.618 ± 0.005**, über jedes Merkmal und jeden Prompt ([[swim-student-writing-simulation-2026]])

Das Belohnungsdesign war der Punkt: ein dichtes merkmal-normalisiertes Signal statt Exaktübereinstimmung, denn Exaktübereinstimmung ist in einer Mehrmerkmal-Einstellung zu spärlich. Wenn Ihre Belohnung nur bei einer perfekten Antwort feuert, ist das meiste Ihres Trainingssignals Schweigen.

## Trainieren Sie die Entscheidung, nicht nur die Äußerung

Nach-Training muss nicht nur prägen, was das Modell sagt. TACT trainierte einen Tutor auf eine 13-Strategien-Taxonomie plus eine Zwei-Achsen-Studenten-Schritt-Taxonomie nach und gewann **20.30 Punkte** gegenüber seinem Qwen3.5-4B-Rückgrat, mit einem diagnostischen Benchmark, der die während des Trainings verfügbaren **Lernendenzustands-Kennzeichnungen zurückhält**, damit das Modell den Zustand aus dem Dialog erschließen muss ([[tact-pedagogically-adaptive-esl-tutoring]]).

Dieselbe Logik läuft durch [[special-education|Sonderpädagogik]]-Abstimmung ([[special-r1-rl-special-education]]) und durch heuristische-RL-Arbeit, die Modelle als sokratische Anleitende statt Antwortende abstimmt ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Eine Plattform geht weiter und trainiert die *Richtlinie* statt die Prosa: ein Reinforcement-Learning-Agent wählt die nächste Übungsaufgabe, also entscheidet das trainierte Modell, was die lernende Person als Nächstes tut ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

## Welche Daten brauchen Sie?

Zwei entgegengesetzte Wetten definieren den Raum, und welche Sie eingehen, hängt davon ab, was Sie bereits haben:

- **Anweisungskonditioniertes Nach-Training, wenn Ihre Daten spärlich sind.** LearnLM trägt systemebene Anweisungen, die Lehrkräfte und Entwickelnde Tutorverhalten spezifizieren lassen, und stützt sich auf Ko-Training statt auf ein großes Korpus von Tutoring-Transkripten.
- **Feinabstimmung auf authentischen Interaktionsdaten, wenn Sie sie haben.** TeachLM wettet, dass [[prompt-engineering|Prompt-Engineering]] ein Behelf ist und die knappe Zutat echte Lernenden-Tutor-Interaktion ist. Trainiert auf **100.000 Stunden** Eins-zu-eins-Sitzungen unter strenger Anonymisierung, verdoppelt es die Sprechzeit von Studierenden, verbessert den Fragestil, und erhöht Dialog-Turns um **50%** ([[teachlm-post-training-llms-education]]).

Ein kostengünstigerer Weg zu pädagogischem Verhalten ist Destillation: Pedagogy-R1 (1.5B und 7B) wurde auf pädagogisch gefilterten, von einem QwQ-32B-Lehrer destillierten Ausgaben anweisungsabgestimmt, gepaart mit Chain-of-Pedagogy-Prompting ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Testen Sie es bei Gesprächslänge

Training macht ein Modell nicht über ein langes Gespräch sicher. SafeTutors zeigt, dass selbst spezialisierte pädagogische Modelle über anhaltenden Dialog degradieren und Schaden durch Überoffenbarung von Antworten begehen können ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pädagogische Sicherheit]] muss bei Gesprächslänge getestet werden statt beim Einzelturn –, einschließlich der Turns, in denen die Person falsch liegt, beharrt, oder drängt.

## Wohin als Nächstes

- [[making-ai-better-at-supporting-learning|Wie können wir KI darin besser machen, Lernen in unserem eigenen Fach zu unterstützen?]] — ob Training überhaupt der richtige Hebel ist
- [[checking-whether-educational-ai-works|Woran erkennen wir, dass eine Bildungs-KI richtig funktioniert und nicht nur gut punktet?]] — messen, ob sich das Verhalten tatsächlich veränderte
- [[developing-ai-tutor|Was sind Best Practices für die Entwicklung eines wirksamen KI-Tutors?]] — das Interaktionsdesign-Gegenstück, das dasselbe leitende Verhalten durch Scaffolding und Hinweisleitern formt statt durch Training
- [[llm-training-and-fine-tuning]] — die vollständige Konzeptseite
