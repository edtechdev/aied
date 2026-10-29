---
title: "Wie bringen wir einen simulierten Studenten dazu, sich wie ein echter Lernender zu verhalten?"
created: "2026-10-02T08:36:18-04:00"
updated: "2026-10-29T07:57:30-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
translation_of: faqs/making-simulated-students-behave-like-learners
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Am Donnerstag haben Sie eine Demo. Der simulierte Studierende darin verfehlt eine Bruchrechenaufgabe, bekommt einen Hinweis und liefert dann die richtige Lösung mit der richtigen Erklärung. Jemand im Raum fragt, warum eine lernende Person, die Schwierigkeiten hat, das täte, und Sie haben keine Antwort.

Vor der nächsten Demo brauchen Sie so viel Klarheit: Ein Modell aufzufordern, eine studierende Person zu spielen, erzeugt den Klang einer lernenden Person. Was das Verhalten erzeugt, ist eine Einschränkung dessen, was der Simulator weiß, Struktur in den Zügen und Validierung gegen Aufzeichnungen echter Lernender. Nur 3 % der Studien, die Lernende simulieren, validieren ihren Simulator nach der Nutzung, also wird das niemand für Sie prüfen.

## Die kurze Version

**1.** Schreiben Sie auf, welche Lernenden Sie nicht simulieren, und stellen Sie diesen Satz dorthin, wo Ihre Nutzer ihn lesen.

**2.** Testen Sie den Überzeugungszustand, nicht die Prosa. Fragen Sie, was der Simulator nach einer Korrektur sagt.

**3.** Beschränken Sie Wissen gezielt: Geben Sie den epistemischen Zustand vor oder entfernen Sie das Wissen.

**4.** Skripten Sie die Interaktion Zug um Zug. Ein besserer Persona-Prompt behebt Drift nicht.

**5.** Bewerten Sie Verhaltenstreue und Anleitungsansprechbarkeit getrennt, gegen Aufzeichnungen echter Lernender.

## Entscheiden Sie, welche Frage der Simulator beantwortet

Unter „simulierte Studierende“ fallen drei Aufgaben zusammen, und sie brauchen unterschiedliche Maschinerie. Das Einüben einer Lehrperson oder eines Tutors braucht einen Partner, der sich unter Druck plausibel verhält. Das Prüfen, wie eine KI mit unterschiedlichen Lernendenprofilen umgeht, braucht Abdeckung der Profile, die Ihnen wichtig sind. Die Vorhersage von Ergebnissen für einen Kurs braucht eine Verteilung von Lernenden statt eines überzeugenden Individuums. Ein Simulator, der für die erste Aufgabe gebaut wurde, wird Sie bei der dritten enttäuschen, und die Belege unten trennen die drei immer wieder.

## Benennen Sie die Lernenden, die Sie nicht abdecken

Der nützlichste Befund für alle, die einem Simulator vertrauen wollen, betrifft die Abdeckung. Zwölf Lehrkräfte, die LLM-Studierende tutorten, berichteten über zu komplexe Sprache, fehlende Emotion, unnatürliche Aufmerksamkeit und unerklärte Wissenssprünge, und die Simulationen deckten nur eines von vier Quadranten realen Studierendenverhaltens ab ([[llm-student-simulation-teacher-insights|Martynova et al., 2026]]). Der Quadrant, den sie abdeckten, war der am leichtesten zu simulierende.

Das ist wichtig, weil fast niemand prüft. Nur 3 % der Studien, die Lernende simulieren, validieren ihren Simulator nach der Nutzung. Wenn Sie einen bauen und die Validierung überspringen, sind Sie in der überwältigenden Mehrheit, und Sie sind auch der Grund, warum diese Zahl zitierbar bleibt.

## Beschränken Sie, was der Simulator weiß

Ein leistungsfähiges Modell kann nicht ohne Weiteres so tun, als sei es ein teilweise Wissender. Die Forschung nennt das das **Kompetenzparadox**: breit leistungsfähige Modelle, die gebeten werden, teilweise wissende Lernende nachzuahmen, erzeugen unrealistische Fehlermuster und Lerndynamiken.

Die Drift hat eine Richtung, und sie zeigt auf die Lernenden, die am meisten simuliert werden müssten. Gegen Studierendenideen aus 49 NGSS-konformen Naturwissenschaftsstunden hielten sechs Modelle die meisten Ideen innerhalb des erwarteten Wissensbereichs und etwa zwei Drittel auf oder unter dem Ziel-Leseniveau, und überschritten dann genau dort die Grenzen, wo die lernende Person am jüngsten war. Ideen aus Grund- und Mittelschule überschritten häufiger den Wissensbereich und das Leseniveau der Zielklassenstufe, und das Korpus neigte zu breiterem Schlussfolgern, technischerem Vokabular und weniger Unsicherheitsmarkern („vielleicht“, „es scheint“) als die echten Stundenideen ([[llm-simulating-student-scientific-thinking-2026|Nguyen und Cao, 2026]]).

Zwei Anmerkungen zu dieser Studie. Die Modellwahl ist nicht eindimensional, denn ein System, das Stundenideen eng trifft, kann sie dennoch über der Klassenstufe ansetzen. Und die Reparatur ist oft unterrichtlich: Ein ausdrücklicher Re-Prompt auf Klassenstufenniveau hob die meisten Modelle zurück in den Bereich.

## Geben Sie den Zustand vor oder nehmen Sie das Wissen weg

Wenn das Modell zu viel weiß, können Sie den Zustand benennen, in dem es sein sollte, oder das Wissen abziehen, das es nicht haben sollte.

**Auf einen epistemischen Zustand konditionieren.** Ein trainierungsfreies Framework baut aus einem [[knowledge-graph|Wissensgraphen]] einen kognitiven Prototyp für jede studierende Person und bewertet Beam-Search-Kandidaten dagegen; es berichtet eine Verbesserung der Simulationsgenauigkeit um 100 % ([[simulating-students-diverse-cognitive-levels-2025|Wu et al., 2025]]). Die Qualität steigt mit dem kognitiven Niveau der studierenden Person, also bleiben schwächere Lernende der schwierigere Fall, was bedauerlich ist, da sie meist der Punkt sind. Kognitive Dynamik statt einer statischen Persona zu modellieren, geht weiter: Die ICAP-basierten Zustandsaktualisierungen von CogEvolution erreichten R²LC = 0.92, wo statische Agenten 0.45 erreichten, und fielen ohne ihr ICAP-Modul auf 0.58 ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang et al., 2026]]).

**Das Wissen entfernen.** Die Unterdrückung von 16 gezielten Wissenskomponenten in Mistral-7B senkte die Genauigkeit von etwa 0.75 bei einem Vergessensanteil von 10 % auf unter 0.5 bei 40 %, während das Basismodell nahe 0.85 blieb. Das unterdrückte Wissen erwies sich durch überwachtes Wiederlernen und coach-geführten Dialog als wiederherstellbar ([[simulating-novice-students-machine-unlearning-2026|Song, Guo & Lin, 2026]]). Das ist das Nächste an einer direkten Herstellung eines Novizen, und die Wiederherstellbarkeit wird zum Vorteil, wenn Sie wollen, dass der Simulator während einer Sitzung lernt.

## Skripten Sie die Züge, nicht die Persona

Personastabilität erweist sich als Problem des Interaktionsdesigns und nicht der Modellwahl. Bei der Kreuzung von fünf LLMs mit drei Prompt-Designs und vier ADHD-Intensitätspersonas beseitigten skriptgesteuerte, aufgabenverankerte Interaktionen die von Beobachtern bewertete Verhaltensdrift um bis zu 97 % gegenüber ungeskriptetem Dialog. Ohne ausdrückliche Personaanweisungen neigte die Baseline-Studierendendarstellung zu hohen ADHD-Symptomen ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase & Leins, 2026]]).

Wenn Ihr Simulator driftet, sehen Sie sich an, was Sie ihn Zug um Zug tun lassen, bevor Sie Modelle wechseln oder die Beschreibung der studierenden Person neu schreiben.

## Zwei Dinge bewerten, nicht eins

StudentSim verlangt, dass zwei Eigenschaften zusammen gelten: **Verhaltenstreue**, also wie gut der Simulator die eigenen Antworten einer studierenden Person trifft, und **Anleitungsansprechbarkeit**, also wie verlässlich er dorthin aktualisiert, wohin die Anleitung des Tutors führt. Sein Benchmark gießt öffentliche Lernendenkorpora (Schach, zweitsprachliches englisches Schreiben, Mathematik) in ein Protokoll pro studierender Person, auf dem jeder Simulator gefittet und an zurückgehaltenen Aufzeichnungen bewertet wird. Domänenspezifisches Zustandstracking schnitt schwach bei der Ansprechbarkeit ab, und reines Prompt-LLM-Rollenspiel schnitt schwach bei der Treue ab ([[studentsim-llm-student-simulators|Yang et al., 2026]]). Ein Simulator kann einen Test bestehen und den anderen verfehlen, also berichten Sie beide.

Als Proof of Concept erzeugte ein eingefrorenes StudentSim, das als Belohnung in einer Schachtutor-Schleife mit [[reinforcement-learning|Verstärkungslernen]] diente, Tutoren, die Fachleute als genauer, besser angeleitet und personalisierter bewerteten als jene, die gegen eine Grenz-LLM-Simulator-Belohnung oder ganz ohne RL trainiert wurden. Ein guter Simulator kann sowohl das Trainingssignal als auch das Messinstrument sein.

Handlungstreue hat ihre eigene Grenze. Studierendensimulatoren reproduzieren beobachtbare Handlungen ohne das latente Schlussfolgern dahinter, und [[inside-llm-student-simulator-reasoning-2026|INSIDE]] fine-tuned Modelle so, dass sie vor jeder Handlung einen inneren Dialog erzeugen, und erreicht die höchste Übereinstimmung zwischen generiertem Schlussfolgern und echten Code-Änderungen bei 51.8 % an vertrauten und 57.9 % an ungesehenen Aufgaben, ohne Handlungstreue zu verlieren (Niousha et al., 2026). Wenn Sie interessiert, warum Ihr simulierter Studierender etwas getan hat, reicht die Übereinstimmung der Handlung nicht.

## Validieren Sie gegen echte Lernende und berichten Sie die Baseline

Zwei Vergleiche zeigen, was Validierung kostet.

Ein Benchmarking von neun Simulationsmethoden gegen sieben referenzbasierte Metriken an 382 zurückgehaltenen Dialogen aus dem größten öffentlichen Korpus echter Mathematik-Dialoge zwischen Studierenden und Tutoren ergab, dass Prompting beim Fine-Tuning zurücklag: bei Dialogakten (0.4998 gegen 0.6840), bei ROUGE-L (0.1648 gegen 0.3212) und bei der Kosinusähnlichkeit (0.5460 gegen 0.7390). Die beste getestete Methode, Präferenzoptimierung an einem 8B-Modell, schlug überwachtes Fine-Tuning nur marginal und war bei Fehlern schlechter, und eine menschliche Bewertung mit drei Tutoren reproduzierte diese Rangfolge ([[simulated-students-tutoring-dialogues-2026|Scarlatos et al., 2026]]). Die Spitze dieser Leiter liegt nahe der Mitte, also entscheidet die Baseline, die Sie berichten, wie beeindruckend Ihre eigene Zahl aussieht.

SWIM ist der klarste Vergleich von Prompting, Fine-Tuning und Verstärkungslernen, weil es jeden generierten Aufsatz gegen ein Zielmerkmalprofil bewertet, statt ihn impressionistisch zu beurteilen. Rubrikgestütztes Prompting gab selbst starken proprietären Modellen begrenzte Kontrolle, mit einem besten durchschnittlichen Merkmals-QWK von 0.577 (Claude Sonnet) und 0.422 (GPT-5.4) und nahe null für ein offenes 7B-Modell. Überwachtes Fine-Tuning an echten Paaren aus Punktzahl und Aufsatz erreichte 0.474 ± 0.023 für dieses 7B-Modell. GRPO mit einer aus automatischer Aufsatzbewertung abgeleiteten Belohnung erreichte 0.618 ± 0.005, wobei die Gewinne an zwei unabhängigen Bewertern hielten, gegen die die Policy nie trainiert hatte ([[swim-student-writing-simulation-2026]]).

Prompting erzeugte zudem eine idealisierte Population statt einer realistischen: einen mittleren normalisierten Gesamtwert von 0.74 gegenüber 0.58 bei echten Studierenden und eine mediane Länge von 304 Wörtern gegenüber 167. Die trainierten Modelle gewannen die menschlichen Verteilungen von Punktzahl und Länge ohne jede Längenüberwachung zurück. Eine Sache blieb schwer: authentische Form niedriger Kompetenz. Trainierte Modelle gewannen die Syntax zurück, schrieben aber zu wenige Rechtschreib- und Grammatikfehler, während Prompting Schwäche durch oberflächliche Verfälschung simulierte, mit Rechtschreibfehlern, die über ansonsten kompetente Prosa gesprüht wurden.

Oberflächlicher Realismus ist in beide Richtungen ein schwacher Test. In einer verblindeten Studie klassifizierten fachkundige Annotierende 164 von 196 (83.7 %) LLM-generierten Java-Einreichungen fälschlich als von Menschen geschrieben, weil die Fehler funktional nicht von authentischen zu unterscheiden waren, und die Übereinstimmung mit echten Fehlern sank dann mit steigender Aufgabenschwierigkeit ([[simulating-students-java-programming-errors-llms|Keramati et al., 2026]]). Über sieben Modelle von 4B bis 120B Parametern kippten Simulatoren mit nahezu gleichförmiger Rate zur richtigen Antwort, welche Rückmeldung sie auch erhielten, also sagt Ausgabeähnlichkeit nichts über den Überzeugungszustand dahinter. Training gegen den **Selective Flip Score** hob die Treue um bis zu +0.56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar & Sachan, 2026]]).

## Prüfen Sie, ob eine Beschreibung genügen würde

Bevor Sie eine Kohorte bauen, prüfen Sie die billigere Option. Für die Bewertung einer Online-Lernerfahrung, bevor Studierende sich darauf einlassen, für die Vorhersage von Abbruch und Abschluss und für Design-Feedback übertraf ein einzelner „beschreibender“ Web-Agent, der die Lektion durchläuft und eine reichhaltige Beschreibung der Erfahrung erzeugt, die direkte Simulation einer Studierendenpopulation.

Die simulierten Studierenden in diesem Vergleich zeigten weit weniger Verhaltensbreite als echte Lernende: Über 100 Agenten in fünf Testlektionen reproduzierten sie nur etwa 4 % der Wege, die echte Studierende nahmen, und kosteten dabei deutlich mehr Rechenzeit. Die Pipeline aus Beschreiben und Vorhersagen erreichte die beste Vorhersage der Abbruchverteilung in einem massiven globalen CS1-Kurs, mit einem mittleren JSD von 0.060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech, 2025]]).

Die Grenze, die sie zieht, ist praktisch. Eine Studierendenpopulation zu simulieren kann unnötig oder kontraproduktiv sein, wenn das Ziel Ergebnisvorhersage oder Designkritik ist. Simulation verdient ihre Kosten, wenn die Abdeckung echter Lernendenvariation zählt, etwa beim Prüfen des Umgangs einer KI mit unterschiedlichen Profilen oder wenn eine Lehrperson etwas zum Einüben braucht.

## Was Entwicklungsteams falsch machen

Oberflächlicher Realismus ist das Ziel. Eine Fehlklassifikationsrate von 83.7 % für maschinell geschriebenen Code und nahezu gleichförmiges Antwortkippen über sieben Modelle sagen beide, dass ein menschliches Urteil, das die Ausgabe liest, die Eigenschaft nicht sehen kann, die Sie behaupten. Testen Sie stattdessen die Reaktion auf eine Korrektur.

Ein besserer Persona-Prompt behebt Drift. Skriptgesteuerte, aufgabenverankerte Züge senkten die von Beobachtern bewertete Drift um bis zu 97 % über fünf Modelle und drei Prompt-Designs. Das Design der Züge hat die Arbeit getan.

Ein stärkeres Basismodell schließt die Kompetenzlücke. Ein starkes proprietäres Modell erreichte unter Prompting 0.422 beim Merkmals-QWK, während ein fine-getuntes 7B 0.474 erreichte, und derselbe Sechs-Modell-Vergleich schoss am stärksten in den jüngsten Klassenstufen über das Ziel. Die Modellwahl tauscht eine Treueachse gegen eine andere.

Validierung heißt, dass eine Kollegin ein Transkript gelesen hat und fand, es klinge richtig. Das Java-Ergebnis zeigt, wie weit dieses Urteil trägt. Validierung heißt zurückgehaltene Aufzeichnungen echter Lernender und eine Baseline, die Sie benennen können.

Eine Population zu simulieren ist die gründliche Option. Über 100 Agenten deckten die Simulationen etwa 4 % der Wege ab, die echte Studierende nahmen, bei deutlich höherem Rechenaufwand als der beschreibende Agent.

## Was Ihnen entgegenkommen wird

**„Lehrkräfte konnten unseren Simulator nicht von einer studierenden Person unterscheiden.“** In der verblindeten Java-Studie klassifizierten fachkundige Annotierende 83.7 % der maschinellen Einreichungen als menschlich. Das misst die Annotierenden, und es lässt den Überzeugungszustand ungeprüft.

**„Fine-Tuning liegt außerhalb unseres Rahmens.“** Dann begrenzen Sie die Behauptung auf das, was Prompting stützt, und sagen Sie das. Prompting setzte eine Obergrenze von 0.577 für das stärkste getestete Modell und nahe null für ein offenes 7B, und es erzeugte eine idealisierte Punktzahlverteilung.

**„Wir haben keinen Zugang zu echten Lernendendaten.“** StudentSims Protokoll ist aus öffentlichen Lernendenkorpora in Schach, Zweitsprachenschreiben und Mathematik gebaut. Öffentliche Daten begrenzen, was Sie über Ihre eigene Population behaupten können, und sie geben Ihnen eine Baseline – und das ist das, was die meisten Berichte auslassen.

**„GRPO hat überwachtes Fine-Tuning geschlagen, also sollten wir mit RL trainieren.“** Das hat es, mit 0.618 gegen 0.474. Die Form niedriger Kompetenz blieb in beiden Fällen schwer, mit zu wenigen Rechtschreib- und Grammatikfehlern, und in einem separaten Benchmark schlug Präferenzoptimierung das Fine-Tuning nur marginal und verlor bei Fehlern. Prüfen Sie, von welcher Eigenschaft Ihr Anwendungsfall abhängt.

**„Die schwächsten Lernenden sind ein kleiner Teil unserer Nutzer.“** Sie sind der schwierigste Fall für jede Methode auf dieser Seite, und der Abdeckungsbefund sagt, dass die Simulationen im leichtesten Quadranten clustern. Wenn Ihr Simulator dazu dienen soll, Schlüsse über Studierende mit Schwierigkeiten zu ziehen, gehört diese Lücke in den Bericht.

## Was Sie diese Woche tun können

**1.** Schreiben Sie den Abdeckungssatz: welche Lernenden dieser Simulator nicht repräsentiert. Setzen Sie ihn in die README und in die Demo-Notizen.

**2.** Fügen Sie Ihrem Testsatz eine Probe hinzu, die den Simulator korrigiert und prüft, ob er falsch bleibt.

**3.** Ersetzen Sie freies Persona-Chatten in einem Ablauf durch aufgabenverankerte Züge und vergleichen Sie die Drift.

**4.** Bewerten Sie einen bestehenden Simulator gegen zurückgehaltene echte Aufzeichnungen, sowohl bei der Treue als auch bei der Ansprechbarkeit, und berichten Sie die beiden Zahlen getrennt.

**5.** Führen Sie die Prüfung mit dem beschreibenden Agenten zu der Frage durch, die Sie tatsächlich beantwortet brauchen, bevor Sie eine Kohorte finanzieren.

## Wohin als Nächstes

[[simulating-students]] ist die vollständige Konzeptseite. [[checking-whether-educational-ai-works]] behandelt die Bewertung der Systeme, gegen die Sie testen, und [[making-ai-better-at-supporting-learning]] behandelt die Trainingsmethoden hinter den Fine-Tuning-Ergebnissen hier. [[addressing-common-misconceptions-ai-education]] nimmt auf, ob simulierte Studierende in der Forschung für echte Lernende einstehen können.
