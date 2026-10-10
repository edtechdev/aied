---
title: Lernen durch Lehren
created: "2026-08-14T10:45:34-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
pedagogy: [active-learning, learning-by-teaching, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring]
assessment: [feedback]
discipline: [cs education]
confidence: high
translation_of: concepts/learning-by-teaching
source_updated: "2026-10-01T18:49:55-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Lernen durch Lehren (LbT)** — der im Protégé-Effekt gründende Unterrichtsrahmen, in dem Studierende ihr Verständnis vertiefen, indem sie Material einer Peer-Person, einer unterrichteten Person oder einem Agenten erklären. Jahrzehntelange Arbeit zu LbT und Peer-Tutoring zeigt, dass das Erklären von Konzepten, das Vorwegnehmen von Missverständnissen und das Antworten auf Fragen Verständnis konsolidieren und Transfer stützen. In der KI-Ära operationalisieren **lehrbare Agenten** —, und zunehmend **LLMs, die als Novizen-Unterrichtete konfiguriert sind** —, LbT in großem Maßstab und positionieren Studierende als Lehrende, die erklären, korrigieren und Lücken füllen müssen.

## Fragen zum Nachdenken

- Erinnern Sie sich an eine Zeit, in der Sie etwas erst wirklich verstanden, nachdem Sie es jemand anderem erklärt hatten. Was geschah geistig —, und warum, denken Sie, erzeugt Lehren tieferes Verständnis als bloßes Alleinstudium?
- Eine verbreitete Sicht ist, dass Lehren etwas für Expertinnen und Experten sei, und Novizen nichts beizutragen hätten. Doch „Lernen durch Lehren“ ruht auf der entgegengesetzten Prämisse: Die Vorbereitung aufs Lehren zwingt Sie, Wissen zu organisieren und Ihre eigenen Lücken zu finden. Wie rahmt das neu, wer vom Lehren profitiert?
- Die Seite beschreibt „lehrbare Agenten“ —, Software, die Studierende als Teil des Lernens unterrichten. Mit einem LLM können Sie einen Chatbot als fehlbaren Novizen-Unterrichteten konfigurieren, der Fragen stellt und Fehler macht. Was müssten Sie in einen solchen Unterrichteten einbauen, damit er das Lernen tatsächlich verbessert statt nur zu plaudern?
- Eine Herausforderung ist „Fehlbarkeit konstruieren“ (engineering fallibility): KI-Modelle sind darauf trainiert, Experten-, flüssige Antworten zu geben, was das Gegenteil des ringenden Novizen ist, den das Lernen-durch-Lehren-Paradigma will. Warum könnte ein fehleranfälliger Unterrichteter für das Lernen wirksamer sein als ein korrekter?
- Ein ChatGPT-basierter lehrbarer Agent verbesserte das Lernen, doch seine Tendenz, korrekten Code zu erzeugen, beschränkte die Fehlerkorrektur-Praxis. Wie könnte ein Werkzeug, das immer die richtige Antwort gibt, die lernende Person tatsächlich kurzhalten, die das Erkennen und Beheben von Fehlern üben muss?
- Wenn Sie eine Lernen-durch-Lehren-Aktivität für Ihren eigenen Kurs entwerfen sollten, was würde die Lehraufgabe *folgenreich* genug machen, dass Studierende echte Mühe hineinstecken statt eine Antwort zu kopieren und einzufügen?

## Einleitung

Lernen durch Lehren ist der Befund, üblicherweise auf den Protégé-Effekt zurückgeführt, dass die Vorbereitung aufs Lehren —, und das tatsächliche Erklären gegenüber einer anderen Person oder einem lehrbaren Agenten —, tiefere Verarbeitung erzeugt als Alleinstudium. Die Anforderungen des Lehrens zwingen Lernende, Wissen zu organisieren, [[misconceptions|Missverständnisse]] vorwegzunehmen und Erklärungen zu erzeugen, was Lücken im eigenen Verständnis offenlegt und [[metacognition|Metakognition]] stärkt. KI tritt von beiden Richtungen in die Idee ein: [[intelligent-tutoring|Tutorsysteme]] und lehrbare Agenten können die Rolle der oder des Studierenden spielen, während eine wachsende Literatur fragt, was mit dem Lernen geschieht, wenn die Maschine statt die lernende Person die Erklärung liefert ([[generative-ai]], [[cs-education]]).

## Der Protégé-Effekt

Lernen durch Lehren ruht auf dem Befund, dass die Vorbereitung aufs Lehren und das tatsächliche Erklären gegenüber einer anderen Person tiefere Verarbeitung erzeugt als Alleinstudium. Die Anforderungen des Lehrens —, Ideen artikulieren, Missverständnisse vorwegnehmen und Fragen beantworten —, zwingen Lernende, Wissen zu organisieren, Lücken im eigenen Verständnis zu identifizieren und Erklärungen zu erzeugen, die Behalten und Transfer stützen. Der Nutzen ist am deutlichsten in [[collaborative-learning|kollaborativen Lern]]kontexten und in gut strukturierten Domänen, die lehrbare Agenten stützen (z. B. Betty's Brain). Der Protégé-Effekt benennt den Mechanismus: Studierende bringen mehr Mühe auf und reflektieren tiefer, wenn sie sich für das Lehren von etwas verantwortlich fühlen, sodass sie [[misconceptions|Fehlvorstellungen]] klären und Lücken durch Erklärung und [[metacognition|Metakognition]] füllen.

## Lehrbare Agenten: Von regelbasiert zu konversationell

**Lehrbare Agenten** sind die Softwaresysteme, durch die Lernen durch Lehren operationalisiert wird —, eine lernende Person lehrt ein System als Teil des Lernens. Traditionelle lehrbare Agenten waren regel- oder abrufbasiert und konnten nur auf begrenzte Befehle antworten; ihre zentrale Einschränkung war die Unfähigkeit zu natürlichsprachlichem Dialog. [[llm|Large Language Models]] ändern das: Sie können Rollen flexibel über [[prompt-engineering|Prompting]] annehmen —, einschließlich der Rolle eines „Unterrichteten“, der Fragen stellt oder Fehler macht —, und sich auf offenen Dialog einlassen, was LbT in weniger strukturierten Domänen (Schreiben, Wortschatz) ermöglicht als zuvor möglich.

Die Evidenzbasis der Wissensdatenbank führt diese Verschiebung auf **konversationelle, LLM-basierte lehrbare Agenten** zurück:

- **ChatGPT als lehrbarer Agent** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al.]]) unterstützt LbT in der Programmierung und verbessert Wissenszuwächse, Programmierfähigkeit und [[self-regulated-learning|selbstreguliertes Lernen]] —, doch seine Tendenz, korrekten Code zu erzeugen, beschränkt die Fehlerkorrektur-Praxis.
- **Explique in großem Maßstab** ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al.]]) setzte einen KI-lehrbaren Agenten (Algorithm Apprentice) bei 546 Studierenden über ein elfwöchiges Semester ein und fand, dass erklärungsorientierter Dialog weniger inkorrekte Quiz-Einreichungen vorhersagt, während Wiederverwendung externer Inhalte mehr vorhersagt.
- **Wortschatzunterricht** ([[teaching-ai-vocabulary-lbt-llms-2026|Uchida et al.]]) nutzte ein LLM als Studierenden, um dynamische Fragen zu erzeugen, und verbesserte das Behalten nach 3 und 7 Tagen.

## Fehlbarkeit konstruieren: LLMs als Novizen-Unterrichtete

Eine zentrale Gestaltungsherausforderung für LLM-basierte lehrbare Agenten ist, dass LLMs standardmäßig darauf trainiert sind, expertenniveau, flüssige Antworten zu produzieren —, das Gegenteil des fehlbaren Novizen, den das LbT-Paradigma will. Ein LLM zu einem guten Unterrichteten zu machen erfordert **Fehlbarkeit konstruieren**:

- **Generierte Fehler können als authentisch durchgehen.** In einer verblindeten Annotationsstudie klassifizierten Expertinnen und Experten 164 von 196 (83.7%) LLM-generierten Java-Einreichungen als menschlich geschrieben, sodass ein Unterrichteter realistische Bugs zum Debuggen liefern kann statt nur korrekten Code ([[simulating-students-java-programming-errors-llms|Keramati et al. (2026)]]).

- **[[prompting-teachability-novice-personas-lbt-2026|Prompting für Lehrbarkeit]]** (Miller & Bosch) fand, dass restriktionsbasierte Prompts, die explizit Fehlerproduktion erzwingen (z. B. „antworte inkorrekt“ oder „liege bei 2–3 Dingen falsch“), novizenartiges Verhalten weit zuverlässiger elizitieren als persona-, fehlvorstellungs- oder unsicherheitsbasierte Prompts.
- **[[socrates-students-instructors-llms-lbt-2025|Konstruierte Wissenslücken]]** (Yang et al.) entwerfen Probleme, die das LLM nicht ohne Wissen lösen kann, das nur die oder der Studierende besitzt, was Lehren zur Notwendigkeit macht und der passiven Überabhängigkeit von LLM-als-Tutor-Nutzung entgegenwirkt.
- **Expliques Lehrlingsbeschränkungen** (Wang et al.) weisen den Unterrichteten an, (a) Novize zu bleiben, (b) weiter um Klärung zu bitten, bis die Erklärung der oder des Studierenden korrekt ist, und (c) die Ziel-Erklärung nie zu offenbaren —, und Studierenden zu *widerstehen*, die die Rollen umkehren und den Unterrichteten zurückerklären lassen wollen.
- **Unlearning als gewichtslevel-Route zu Fehlbarkeit.** Machine Unlearning unterdrückt 16 zielgerichtete Wissenskomponenten in Mistral-7B und senkt die Genauigkeit von etwa 0.75 bei einem 10%-Vergessensverhältnis auf unter 0.5 bei 40%, während das Basismodell nahe 0.85 hielt. Das unterdrückte Wissen kehrte durch überwachtes Neulernen und coach-geleiteten Dialog zurück, sodass das Wissensniveau des Unterrichteten ein Regler statt eine Behauptung ist ([[simulating-novice-students-machine-unlearning-2026|Song, Guo & Lin, 2026]]).

## Fragenstellen, Selbstregulation und Aktivlernen

Zwei weitere Erschwinglichkeiten (affordances) kehren über die Wissensdatenbank wieder:

- **Fragen identifizieren Wissenslücken.** LbT-Systeme nutzen von Lernenden generierte Fragen, um Lücken offenzulegen und Verständnis zu verstärken, und [[teaching-ai-vocabulary-lbt-llms-2026|LLM-generierte Fragen]] ersetzen starre vorlagenbasierte Generatoren.
- **Teach-back legt offen, was Klärung verpasst.** In einem Review-System nach der Vorlesung mit 22 Teilnehmenden legte das reflektierende Teach-back eines Peer-Agenten konsistent Lücken offen zwischen dem, was Lernende zu verstehen glaubten, und dem, was sie artikulieren konnten, die vorlesungsbegründete Klärung allein nicht offenbart hatte ([[knowloop-confusion-to-consolidation-2026|Fang & Reidsma (2026)]]).
- **LbT-[[scaffolding|Gerüste]] stützen Selbst-[[regulation]].** Das Lehren eines [[conversational-ai|Konversationsagenten]] fördert [[self-efficacy|Selbstwirksamkeit]] und die Umsetzung selbstregulierter Lernstrategien und verbindet LbT mit [[desirable-difficulties]] —, die anstrengende Tat des Erklärens und Korrigierens ist selbst produktives Ringen, das die Reibungsbeseitigung der KI sonst tilgen würde.
- **Was Tutor-Lernen vorhersagt, ist Wissensaufbau, nicht Vorwissen.** Über 23 Mittelstufen-Tutorinnen und Tutoren sagte der Anteil der Antworten, die Wissen aufbauten statt es zu wiederholen, konzeptuelle Post-Test-Werte voraus (β = .138, p < 0.05), während frühere Testwerte nicht vorhersagten, wer sie produzierte, und Tutorinnen und Tutoren mit geringem Vorwissen, die Wissen aufbauten, auf gleichem Niveau wie Peers mit hohem Vorwissen abschlossen ([[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]).

## Warum es in der KI-Bildung zählt

Lernen durch Lehren ist das konstruktive, [[active-learning|aktive]] Gegenstück zum dominanten Muster LLM-als-Tutor. Wo ein Tutor Antworten gibt (und [[cognitive-offloading|Überabhängigkeit]] riskiert), macht eine LbT-Anordnung die oder den Studierenden zur Lehrkraft und erzwingt Erklärung, Lückenerkennung und Wissenskonstruktion. Dies positioniert LbT als Schlüsselstrategie, um [[generative-ai|generative KI]] von einer Krücke in ein Werkzeug für tieferes Lernen zu verwandeln, und verbindet sich mit [[desirable-difficulties]], [[active-learning]] und [[constructivist|konstruktivistischer]] [[pedagogy|Pädagogik]].

## Lernen durch Lehren in die Praxis umsetzen

### Gestaltungsmuster für einen KI-Unterrichteten

Die obige [[research-methods-aied|Forschung]] konvergiert auf einige wiederverwendbare Muster, um ein standardmäßig-Experten-LLM in einen produktiven Unterrichteten zu verwandeln:

- **Restriktionsbasierte Novizen-Prompts (am zuverlässigsten).** Statt das Modell zu bitten, „so zu tun, als sei es eine verwirrte Person“, erzwingen Sie explizit Fehlbarkeit und eine Lehrschleife, z. B.: *„Du bist ein Novizen-Studierender, der über [Konzept] lernt. Bitte mich, es dir beizubringen. Stelle klärende Fragen und liege bei 2–3 Dingen absichtlich falsch während unseres Gesprächs. Nenne nie selbst die richtige Antwort —, warte, bis ich es erkläre, und sage mir dann, ob ich Sinn ergeben habe.“*
- **Die Rückwärts-Lehren-Wache.** Fügen Sie eine Regel hinzu, dass der Unterrichtete *ablehnen* muss, die Antwort zurückzuerklären, wenn die oder der Studierende versucht, die Rollen zu tauschen: *„Wenn ich dich bitte, das Problem zu lösen oder das Konzept zu erklären, erinnere mich daran, dass ich die Lehrperson bin, und bitte mich, es stattdessen zu erklären.“* Explique zeigt, dass dieser Widerstand es ist, was die LbT-Interaktion erhält.
- **Konstruierte Wissenslücken.** Strukturieren Sie die Aufgabe so, dass das Modell *nicht* ohne Informationen antworten kann, die nur die oder der Studierende hat —, das Wissen der oder des Studierenden wird echt notwendig, nicht optional. Das verwandelt die Interaktion von optionalem Geplauder in verlangtes Lehren.
- **Ein externes Erfolgskriterium.** Geben Sie dem Lehren eine echte Konsequenz —, ein Türwächter-Quiz, das sich nur öffnet, nachdem die oder der Studierende erfolgreich gelehrt hat (Explique), oder eine Code-bewertende Plattform, die die Ausgabe des Agenten bestehen muss (Chen). Rechenschaftspflicht ist es, was echte Mühe aufrechterhält und verhindert, dass die ganze Übung zum Abhakkasten wird.

### Tipps für Lehrende

- **Machen Sie die Lehraufgabe folgenreich, nicht zu Beschäftigungsaufwand.** Die stärkste Evidenz für [[student-engagement|Engagement]] stammt von Aktivitäten, die zählen —, Explique hängte ein bewertetes Quiz hinter die Lehraufgabe; Chen band die Ausgabe des Unterrichteten an das Bestehen einer bewertenden Plattform. Wenn Lehren rein optional ist, werden Studierende den schweren Teil rational überspringen.
- **Geben Sie Studierenden ein Lehrprotokoll, nicht nur ein Chatfenster.** Gerüsten Sie die Interaktion mit einer Struktur —, „erkläre das Konzept → gib ein konkretes Beispiel → beantworte die Fragen des Unterrichteten → prüfe auf Verständnis“ —, sodass offener Dialog zu einer absichtsvollen Lehrabfolge wird statt zu ziellosem Geplauder.
- **Adressieren Sie Content-Dumping direkt.** Explique fand, dass direktes Kopieren und Einfügen externer Inhalte von unter 15% auf 30–35% der Interaktionen bis Semesterende stieg. Sagen Sie Studierenden, warum Einfügen den Zweck vereitelt, und erwägen Sie einen Rechenschaftsschritt (z. B. „erkläre das Missverständnis des Agenten in deinen eigenen Worten“).
- **Paaren Sie LbT mit Debugging-Praxis.** Weil KI korrekten Code schreibt, können Studierende Fehlerkorrektur-Praxis verlieren. Bitten Sie den Unterrichteten absichtlich, etwas *falsch zu implementieren*, oder folgen Sie der Lehrsitzung mit einer Fehlersuchaufgabe, damit Debugging in der Schleife bleibt.
- **Achten Sie auf den Aufwandgradienten.** Erwarten Sie, dass Neuheit verblasst; planen Sie, die Zielkonzepte zu variieren, Herausforderung hinzuzufügen, oder zu rotieren, welche Studierenden die [[teacher-role|Lehrrolle]] übernehmen, um kognitive Mühe über ein Semester aufrechtzuerhalten.

### Tipps für Entwickelnde

- **Bevorzugen Sie harte Restriktionen über Persona allein.** Prompting auf „Unsicherheit“ oder „eine Studierenden-Persona“ ist unzuverlässig; erzwingen Sie explizit Fehler und eine Klärungsschleife. (Siehe [[prompting-teachability-novice-personas-lbt-2026]].)
- **Bauen Sie ein Abschlusskriterium.** Definieren Sie, *wann die oder der Studierende genug erklärt hat* (Explique nutzte eine LLM-Werkzeugfunktion, die an den Lernzielen des Konzepts hing), sodass die Interaktion auf Verständnis endet, nicht auf einem Zeitlimit oder einer festen Zugzahl.
- **Protokollieren und kodieren Sie den Dialog.** Explique nutzte Wörter-pro-Minute-Erkennung plus LLM-semantische Kodierung, um Interaktionen als Detailed / Minimal / External Content Use zu klassifizieren —, jenes Signal ist, wie Sie Umgehung und sinkendes Engagement erkennen, bevor es zum Problem wird.
- **Geben Sie Lehrenden ein Dashboard.** Abschlussraten und [[qualitative-research|qualitative]] Muster in Lehrinteraktionen lassen einen Menschen eingreifen, wenn die Mühe sinkt (Expliques Lehrende überwachten genau das).

### Implikationen und offene Fragen

- **LbT ist ein skalierbares Gegenmittel gegen KI-Überabhängigkeit** —, es kehrt die Tutor/Studierenden-Rolle um und hält die lernende Person kognitiv aktiv, was mehr zählt, je flüssiger und „hilfsbereiter“ KI wird.
- **Fehlbarkeit ist ein Merkmal, kein Bug.** Ein Unterrichteter, der *zu* korrekt ist, entfernt die Fehlerkorrektur und Lückenerkennung, die LbT wirken lassen; gestalten Sie für das produktive Ringen statt dagegen.
- **Offene Fragen bleiben:** Wie halten sich LbT-Interaktionen über ein Semester hinaus, wenn Neuheit vollständig verblasst? Überträgt sich LbT in gleichem Maßstab auf nicht-Informatik-, weniger strukturierte Domänen? Kann automatisierte Dialogkodierung ein praktischer, echtzeitnaher Engagement-Monitor für Lehrende werden? Und wie halten wir die Lehrrolle für *jede*n Studierende*n* sinnhaft statt für eine motivierte Minderheit?

## Verbundene Konzepte

- [[pedagogical-patterns]] — Erklären gegenüber einem KI-Unterrichteten: die am besten belegte Abfolge in der Wissensdatenbank
- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[cs-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education

## Verbundene Artikel

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent for 546 students
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[socrates-students-instructors-llms-lbt-2025]] — Students as instructors of LLMs (Socrates)
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Vocabulary learning by teaching AI
- [[knowloop-confusion-to-consolidation-2026]] — Teach-back consolidation in a conversational review system
- [[simulating-novice-students-machine-unlearning-2026]] — machine unlearning to hold a tutee at a novice knowledge level, and relearning through teaching dialogue
- [[simulating-students-java-programming-errors-llms]] — Simulating student errors with LLMs
- [[knowledge-building-tutor-learning-2026]] — knowledge-building responses, not prior knowledge, predict tutor learning
