---
connected_resources: [vibes-diy]
title: Vibe-Coding
created: "2026-09-08T01:30:00-04:00"
updated: "2026-10-30T23:30:00-04:00"
type: concept
foundations: [agentic-ai, ai-literacy, computational-thinking, human-ai-collaboration, teacher-role]
technology: [generative-ai, llm, prompt-engineering]
audience: [instructors, curriculum designers, researchers, software developers]
level: [higher ed, k 12]
confidence: high
discipline: [cs education, writing education]
translation_of: concepts/vibe-coding
source_updated: "2026-10-25T14:15:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
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

> **Vibe Coding** — Software bauen, indem man ein großes Sprachmodell iterativ promptet und das resultierende Verhalten beurteilt, ohne den zugrunde liegenden Quellcode direkt zu lesen oder zu bearbeiten. Von Andrej Karpathy 2025 populär gemacht als jener Arbeitsablauf, in dem man „vergisst, dass der Code überhaupt existiert“, ist Vibe Coding die LLM-native Realisierung von Programmierung in natürlicher Sprache und End-User-Development — Rahmungen, die in dieser Wissensbasis inzwischen als Synonyme behandelt werden —, in der Prosa zur primären Programmierschnittstelle wird.

## Fragen zum Nachdenken

- Karpathys ursprüngliche Rahmung sagte, man solle „vergessen, dass der Code überhaupt existiert.“ Bevor Sie weiterlesen, fragen Sie sich: Ist es, den Code nicht zu sehen, ein Vorteil (er senkt Barrieren) oder ein Risiko (Sie können nicht verifizieren oder beheben, was Sie nicht sehen)? Was folgt daraus dafür, wem Vibe Coding erlaubt sein sollte?
- Forschung dazu, wer bei Vibe Coding erfolgreich ist, fand, dass klassische [[cs-education|Leistung in der Informatik]] Erfolg weiterhin vorhersagt, selbst wenn die nutzende Person nie Code anfasst. Wenn Sie das überrascht: Welche verborgene Fähigkeit könnte Informatikausbildung aufbauen, die Prosa allein nicht erfasst?
- Dieselbe Studie fand, dass Schreibfähigkeit die Leistung beim Vibe Coding weitgehend *deshalb* vorhersagt, weil sie höherwertige Prompts erzeugt. Wenn Prompting wirklich der Engpass ist: Ist die richtige Abhilfe dann, [[prompt-engineering|Menschen besseres Prompting beizubringen]] — oder Werkzeuge neu zu entwerfen, damit sie weniger Prosafähigkeit verlangen?
- Vibe Coding wird oft dafür gefeiert, „jede und jeden“ zur Entwicklerin bzw. zum Entwickler zu machen. Wenn aber sowohl Schreibfähigkeit als auch Informatikwissen die Ergebnisse prägen: Erweitert Vibe Coding dann den Zugang zum Bauen von Software, oder verlagert es die Fähigkeitsbarriere bloß von Code zu Prosa?
- Manche Entwicklerinnen und Entwickler unterscheiden „reines“ Vibe Coding (nie Code lesen) von KI-gestütztem Programmieren, bei dem man prüft und bearbeitet, was das Modell geschrieben hat. Wo, glauben Sie, ist echtes Lernen — gegenüber [[cognitive-offloading|Übervertrauen]] — wahrscheinlicher, und warum?

## Einführung

Vibe Coding beschreibt einen Interaktionsstil, der durch LLM-integrierte Entwicklungsplattformen (Replit, Lovable, Cursor und andere) ermöglicht wird: Die nutzende Person spezifiziert ein Programm in natürlicher Sprache, das Modell erzeugt ein lauffähiges System, und die nutzende Person iteriert auf Basis beobachteten Verhaltens statt durch Bearbeiten von Quellcode. Der Begriff wurde von OpenAI-Mitgründer Andrej Karpathy im Februar 2025 geprägt, um das Erlebnis einzufangen, sich so stark auf das Modell zu stützen, dass „der Code“ aus dem Bewusstsein verschwindet. Vibe Coding liegt an der Konvergenz mehrerer Stränge, die diese Wissensbasis bereits verfolgt — es ist [[generative-ai|generative KI]], angewandt auf [[cs-education|Programmieren]], eine extreme Form [[prompt-engineering|promptgetriebener]] Arbeit, ein konkreter Fall von [[human-ai-collaboration|Mensch-KI-Zusammenarbeit]] und der bisher klarste Weg für [[teacher-role|Nichtprogrammierende]] und Endnutzende, eigene Software zu bauen (End-User-Development).

Es hat auch tiefe Wurzeln. Die Idee des Programmierens in gewöhnlicher Sprache ist weit älter als LLMs — von COBOLs Aspiration, „ein englischsprachiges Programmiersystem für Nichtfachleute“ zu sein, über Donald Knuths literate programming bis zu Forschung zu Programmierung in natürlicher Sprache mit eingeschränkten Teilmengen des Englischen. Erst mit LLMs wurde es machbar, echt konversationelle, unterspezifizierte Anweisungen auf lauffähigen Code abzubilden. Vibe Coding ist die besondere Variante, in der die nutzende Person absichtlich den erzeugten Quellcode nicht inspiziert oder bearbeitet und sich ganz auf iteratives Prompting und Verhaltensbewertung stützt.

### Das Konstrukt definieren: „reines“ vs. code-sichtbares Vibe Coding

Die Definition von Vibe Coding ist noch im Fluss. Manche nutzen den Begriff breit für jede KI-geführte Programmierung; andere bestehen darauf, dass er streng „Software bauen mit einem LLM, ohne den geschriebenen Code zu prüfen“ meint. Google Cloud unterscheidet eine „reine“ No-Code-Version (konsistent mit Karpathys Definition) von einer Version, in der die nutzende Person den erzeugten Code versteht und verfeinert. Diese Unterscheidung ist für die [[research-methods-aied|Forschung]] bedeutsam: eine kontrollierte Studie zu Vibe-Coding-Fähigkeit erfordert ein wohldefiniertes Konstrukt. Die CHI-2026-Studie zu Prädiktoren der Vibe-Coding-Fähigkeit zielte absichtlich auf die „reine“ No-Code-Variante — die Teilnehmenden konnten den erzeugten Quellcode weder ansehen noch bearbeiten, sodass die gemessene Leistung die Fähigkeit widerspiegelte, Verhalten allein über Prosa und beobachtete Ausgabe zu spezifizieren, zu verfeinern und zu debuggen (siehe [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al.]]).

### Wer bei Vibe Coding erfolgreich ist: Belege

Eine vorregistrierte Querschnittstudie (N = 100 Studierende im Tertiärbereich) liefert die ersten kontrollierten, personenebenen Belege dafür, welche Fähigkeiten Erfolg beim Vibe Coding vorhersagen. Sowohl [[writing-education|Kompetenz in schriftlicher Kommunikation]] (r = .29) als auch Leistung in der Informatik (r = .39) sagten die Leistung an expertengeprüften, GUI-orientierten Vibe-Coding-Aufgaben signifikant voraus, wobei die Informatikleistung nach Kontrolle für domänenallgemeine kognitive Fähigkeiten signifikant blieb (partielles r = .281). In einem gemeinsamen Modell trug die Informatikleistung etwa doppelt so viel eindeutige Varianz bei wie die Schreibfähigkeit, doch beide fügten unabhängigen Vorhersagewert hinzu. Entscheidend: menschlich bewertete Promptqualität mediierte die Verbindung Schreiben→Leistung und liefert damit Belege zum Antwortprozess, dass klare Prosa über die Erzeugung besserer Prompts wirkt. Weil die Umgebung den Quellcode verbarg, konnte Informatikwissen nur indirekt helfen (über Problemzerlegung, algorithmisches Denken und mentale Modelle des Kontrollflusses) — daher argumentieren die Autoren, dass ihre Informatikschätzung eine *untere Grenze* für KI-gestütztes Programmieren ist, in dem nutzende Personen Code auch direkt bearbeiten können ([[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al., 2026]]).

### Vibe Coding als End-User-Development und Werkzeug für Lehrkräfte

Ein großes Versprechen von Vibe Coding ist, dass es Nichtprogrammierenden — einschließlich [[teacher-role|Lehrkräften]] und Domänenexpertinnen und -experten — erlaubt, eigene Software zu bauen, eine Form von End-User-Development im LLM-Zeitalter. Eine [[gaide-vibe-coding-k12-teachers|GAIDE-Rahmenwerk-Studie]] zeigte Lehrkräfte der K-12-Stufen (Nichtprogrammierende), die Vibe Coding in einem achtwöchigen Workshop nutzten, um KI-gestützte Lernwerkzeuge zu bauen, und dabei ihre [[ai-literacy|KI-Kompetenz]] erhöhten sowie „Lernen durch Erschaffen“ als Modell der Professionalisierung demonstrierten. In der Hochschulbildung baute eine Lehrkraft in wenigen Tagen per Vibe Coding einen [[vibe-coding-programming-process-visualizer|Programmierprozess-Visualisierer aus IDE-Aktivitätslogs]], der die Programmierprozesse der Studierenden für Lehren und [[academic-integrity|Prüfung]] sichtbar machte. Diese Fälle positionieren Vibe Coding nicht bloß als Fähigkeit der Lernenden, sondern als Autorenfähigkeit, die [[educational-development|neu formt, wer Bildungstechnologie erschaffen kann]].

### Homogenisierung des Designs: Zugang ohne Vielfalt

Das End-User-Development-Versprechen von Vibe Coding betrifft, wer bauen kann, nicht was gebaut wird. In einer Kurseinrichtung erzeugten 73 Studierende, die Seiten für unterschiedliche Betriebe auf einer Vibe-Coding-Plattform bauten, etwa ein Dutzend unterschiedliche Designs, und gefühlte Urheberschaft korrelierte nicht mit gemessener Originalität ([[vibe-coding-design-diversity-2026|Boussioux et al. (2026)]]). Die Hürde zum Bauen zu senken kann die Ausgabe standardisieren — ein Preis, den das Versprechen des Zugangs nicht ankündigt.

### Lernen, Handlungsfähigkeit und das Risiko des Übervertrauens

Vibe Coding eröffnet Kernfragen darüber neu, was gelernt wird, wenn KI die Implementierung automatisiert. Weil die nutzende Person keinen Code liest, muss sie dem Verhalten des Modells vertrauen — was Vibe Coding zu einem folgenreichen Fall der Spannung zwischen [[agency|Handlungsfähigkeit]] und [[cognitive-offloading|Übervertrauen]] macht, die sich durch KI-gestütztes Programmieren zieht. Curricula reagieren darauf, indem sie sich vom Lehren der Implementierung zum Lehren verlagern, wie man KI-erzeugte Artefakte anleitet, verifiziert und prüft (siehe [[reshaping-cs-education-genai|die Neugestaltung des Informatik-Grundstudiums]] und [[agentic-ai|agentisches Software Engineering]]). Vibe Coding verändert auch die erkenntnistheoretische Position der lernenden Person: Erfolg hängt weniger davon ab, Code zu schreiben, als Absicht präzise auszudrücken und Verhalten an Zielen zu messen — Kompetenzen, die näher an [[computational-thinking|computational thinking]] und strukturiertem Schreiben liegen als an klassischer Syntaxbeherrschung.

Eine zweite Grenze zeigt sich im Bauen selbst: Die Code-Hürde zu entfernen kann die Diagnoselast unberührt lassen. Zwei Ingenieur-Fallstudien ließen eine Lehrkraft per Prompting von Gemini in gewöhnlicher Sprache innerhalb weniger Stunden lauffähige Websimulationen eines Batterie-Thermomanagementsystems und dreier ARQ-Protokolle bauen ([[caee-vibe-coding-simulation-development-engineering-education-2026|Tarasak et al. (2026)]]). Ein Duplicate-Packet-Fehler überlebte dann wiederholte Prompts, einschließlich eines, der das geforderte Verhalten benannte. Er wurde erst behoben, als die Lehrkraft aus dem Protokollverhalten auf ein unzureichendes Timeout-Intervall schloss, einen Parameter, den die Schnittstelle nie exponierte. Die Wirkung beider Simulationen auf das Lernen wurde nicht gemessen, sodass der Bericht Machbarkeit statt Wirksamkeit belegt.

### Verbindungen zu verwandten Konzepten

Vibe Coding verbindet sich natürlich mit [[prompt-engineering]] (Promptqualität ist der Mechanismus prosagetriebener Entwicklung), [[cs-education]] (als der Domäne, in der die Technik am meisten genutzt und am meisten bestritten wird), [[computational-thinking]] (die mentale Modellierung, die Erfolg selbst ohne Codezugang vorhersagt), [[writing-education]] (Schreiben wird zur Programmierfähigkeit) und [[agentic-ai]] (ein Modell auf ein Artefakt hin anzuleiten statt es von Hand zu bauen). Es überschneidet sich außerdem mit [[ai-literacy]] und [[teacher-role]], da die Fähigkeit, eigene Werkzeuge zu bauen, verändert, was Lehrkräfte und Lernende tun können. Schließlich wirft es dieselben Fragen zu [[academic-integrity|akademischer Integrität]] und Assessment auf, die KI-Codegenerierung in der gesamten Informatikbildung aufwirft.

Eine Fallstudie auf Ebene der Fakultät in dieser Wissensbasis liefert die organisationelle Schicht. [[zimmer-ai-intrapreneurship-faculty-innovation-2026|Zimmer (2026)]] beschreibt *AI Intrapreneurship* — Lehrende bauen eigene Werkzeuge, statt auf institutionelle Beschaffung zu warten —, einschließlich einer Autorin, die nicht programmiert und Claude Code nutzte, um einen Prüfer für 321 Kurslinks zu bauen. Die entscheidenden Ermöglicher waren organisationeller statt technischer Art: Handlungsspielraum in der Arbeit, Belohnungen und verfügbare Zeit, wobei Letztere in akademischen Settings am offensichtlichsten im Defizit und durch Beförderung und Tenure untergraben ist. Das Bild zur Sicherheit blieb nüchtern, da Veracodes Analyse von 2025 nur 55% des KI-erzeugten Codes als sicher fand, sodass per Vibe Coding gebaute Unterrichtswerkzeuge weiterhin einen Prüfdurchgang brauchen, bevor sie mit Daten von Lernenden umgehen oder sich mit einem LMS verbinden.

## Verbreitete Fehlvorstellungen

**„Vibe Coding senkt die Fähigkeitsbarriere, es geht also vor allem um gutes Schreiben.“** Kompetenz in schriftlicher Kommunikation hilft und trägt das Ergebnis nicht allein. In einer vorregistrierten Querschnittstudie (N = 100 Studierende im Tertiärbereich) sagten sowohl [[writing-education|Kompetenz in schriftlicher Kommunikation]] (r = .29) als auch Leistung in der Informatik (r = .39) die Leistung an expertengeprüften, GUI-orientierten Vibe-Coding-Aufgaben signifikant voraus, und in einem gemeinsamen Modell trug die Informatikleistung etwa **doppelt so viel eindeutige Varianz** bei wie die Schreibfähigkeit, während beide unabhängigen Vorhersagewert behielten. Die Barriere hat sich verschoben, nicht aufgelöst, und ein Teil von ihr bleibt technisch.

**„Weil jetzt alle Software bauen können, wird das Gebaute vielfältiger.“** Zugang und Vielfalt sind getrennte Ergebnisse, und Zugang kann das zweite sogar zusammendrücken. Die Belege zur Design-Homogenisierung in diesem Korpus beschreiben genau dieses Muster: eine breitere Gruppe von Erstellenden, die mit denselben Modellen, denselben Komponentenkonventionen und denselben Prompting-Voreinstellungen arbeitet, tendiert zu konvergierenden Designs. Urheberschaft zu demokratisieren diversifiziert Artefakte nicht automatisch.

**„‚Reines‘ Vibe Coding ist, was der Begriff meint, also spielt die Unterscheidung keine Rolle.“** Sie spielt für die Evaluation und für die Sicherheit eine Rolle. Die Seite unterscheidet reines Vibe Coding, bei dem die nutzende Person den erzeugten Quellcode absichtlich nicht inspiziert oder bearbeitet und sich ganz auf iteratives Prompting und Verhaltensbewertung stützt, von code-sichtbarer Arbeit, in der die nutzende Person liest, was erzeugt wurde. Das sind verschiedene Aktivitäten mit verschiedenen Fehlerprofilen, und eine Studie über die eine rechtfertigt keine Aussagen über die andere.

**„Wenn die App läuft, ist der erzeugte Code in Ordnung.“** Laufen ist ein schwacher Test. Veracodes Analyse von 2025 fand nur 55% des KI-erzeugten Codes als sicher, sodass per Vibe Coding gebaute Unterrichtswerkzeuge weiterhin einen Prüfdurchgang brauchen, bevor sie mit Daten von Lernenden umgehen oder sich mit einem System verbinden, das Schutz verdient. Verhaltensbewertung bestätigt die Pfade, die eine nutzende Person zufällig ausübt, und sagt nichts über die, die sie nicht ausübt.

## Vibe Coding in die Praxis umsetzen

**Für Lehrende und Lehrkräftebildende**

- Lehren Sie den Unterschied zwischen reinem und code-sichtbarem Vibe Coding explizit, und verlangen Sie das zweite für alles, was mit Daten von Lernenden umgehen wird. Die Unterscheidung ist eine lehrbare Gewohnheit und keine philosophische Feinheit.
- Halten Sie einen echten Programmierstrang neben der Vibe-Coding-Arbeit aufrecht, denn die Informatikleistung trug etwa doppelt so viel eindeutige Vorhersagevarianz. Natürlichsprachige Spezifikation als vollen Ersatz zu behandeln verwirft den stärkeren Prädiktor.
- Lassen Sie Studierende das Artefakt verhaltensbezogen bewerten *und* den Quellcode von allem inspizieren, was sie einsetzen. Erzeugten Code zu lesen ist eine Prüfkompetenz, und sie ist für Studierende, die prompten können, nicht automatisch gegeben.

**Für Entwicklerinnen, Entwickler und Administration**

- Führen Sie einen Sicherheitsprüfdurchgang für jedes per Vibe Coding gebaute Werkzeug durch, bevor es Studierendendaten berührt, im Einklang mit dem Befund von 55% sicherem Code.
- Rechnen Sie mit Homogenisierung: Wenn mehrere Mitarbeitende dieselbe Art von Werkzeug aus denselben Voreinstellungen per Vibe Coding bauen, erwarten Sie ähnliche Ausgabe und planen Sie, wie Differenzierung bewusst erreicht wird.
- Bevorzugen Sie code-sichtbare Arbeitsabläufe für gepflegte Werkzeuge und behalten Sie reines Vibe Coding Wegwerf-Prototypen vor.

**Für Forschende**

- Berichten Sie die Vibe-Coding-Bedingung (rein versus code-sichtbar) zusammen mit den Ergebnissen und nutzen Sie expertengeprüfte, GUI-orientierte Aufgaben statt selbst berichteten Erfolg, damit Ergebnisse über Studien hinweg vergleichbar sind.
- Messen Sie die Vielfalt der Artefakte und nicht nur die Zahl der Artefakte oder der Erstellenden, wenn das Zugangsargument geprüft wird.

## Verbundene Konzepte

- [[generative-ai]]
- [[llm]]
- [[prompt-engineering]]
- [[cs-education]]
- [[computational-thinking]]
- [[writing-education]]
- [[agentic-ai]]
- [[human-ai-collaboration]]
- [[ai-literacy]]
- [[teacher-role]]
- [[cognitive-offloading]]

## Verbundene Artikel

- [[vibe-coding-writing-cs-achievement-2026]] — Leistung in Informatik und Schreibfähigkeit sagen Vibe-Coding-Fertigkeit voraus (CHI 2026, empirische Studie)
- [[gaide-vibe-coding-k12-teachers]] — Ein leitendes Rahmenwerk für K-12-Lehrkräfte, um KI-gestützte Lerntechnologien durch Vibe Coding zu erstellen
- [[vibe-coding-programming-process-visualizer]] — Von der Idee zum Klassenraum in Tagen: mit „Vibe Coding“ einen Programmierprozess-Visualisierer aus IDE-Aktivitätsprotokollen erstellen
- [[caee-vibe-coding-simulation-development-engineering-education-2026]] — Vibe Coding erstellte zwei Ingenieur-Simulationen in Stunden; das Diagnostizieren eines Protokollfehlers brauchte weiterhin die Dozierende bzw. den Dozierenden
- [[prompt-problems-nl-programming-mistakes]] — Verständnis von Wahrnehmungen, Fehlern und Debugging-Ansätzen von Studierenden bei der Lösung von Programmieraufgaben in natürlicher Sprache
- [[code-to-learn-genai-artifact-construction-2026]] — Code to Learn mit Generativer KI: ein theoretisch fundiertes Rahmenwerk für Artefaktkonstruktion in der Oberstufe
- [[reshaping-cs-education-genai]] — Grundständige Informatikbildung für Generative KI neu gestalten
- [[flowcode-ai-creative-coding]] — Flowcode: eine KI-gestützte Programmierumgebung zum Scaffolden von Iteration in der kreativen Computing-Bildung
- [[zimmer-ai-intrapreneurship-faculty-innovation-2026]] — KI-Intrapreneurship: Fakultäten bauen ihre eigenen Werkzeuge, und die organisationalen Bedingungen, die entscheiden, ob der Impuls überlebt (Zimmer 2026)
- [[vibe-coding-design-diversity-2026]] — Ein Werkzeug, ein Geschmack? Wie Vibe Coding kollektive Vielfalt gegen individuelle Kreativität eintauscht
