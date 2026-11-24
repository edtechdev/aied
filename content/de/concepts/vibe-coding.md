---
connected_resources: [vibes-diy, vibe-coding-center, agentic-builds, vibe-coded-classroom-examples]
title: "Vibe-Coding"
created: "2026-09-08T01:30:00-04:00"
type: concept
foundations: [agentic-ai, ai-literacy, computational-thinking, human-ai-collaboration, teacher-role]
technology: [generative-ai, llm, prompt-engineering]
audience: [instructors, curriculum designers, researchers, software developers]
level: [higher ed, k 12]
confidence: high
discipline: [cs education, writing education]
connected_concepts: [generative-ai, llm, prompt-engineering, cs-education, computational-thinking, writing-education, agentic-ai, human-ai-collaboration, ai-literacy, teacher-role, cognitive-offloading]
connected_articles: [vibe-coding-writing-cs-achievement-2026, gaide-vibe-coding-k12-teachers, vibe-coding-programming-process-visualizer, caee-vibe-coding-simulation-development-engineering-education-2026, prompt-problems-nl-programming-mistakes, code-to-learn-genai-artifact-construction-2026, reshaping-cs-education-genai, flowcode-ai-creative-coding, zimmer-ai-intrapreneurship-faculty-innovation-2026, vibe-coding-design-diversity-2026, ho-invariant-core-faculty-development-2027, lin-teacher-vibe-coding-uncertainty-2026]
updated: "2026-11-24T16:43:11-05:00"
translation_of: "concepts/vibe-coding"
source_updated: "2026-11-24T12:00:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Vibe Coding** — Software bauen, indem man ein [[llm|großes Sprachmodell]] iterativ promptet und das resultierende Verhalten beurteilt, ohne den zugrunde liegenden Quellcode direkt zu lesen oder zu bearbeiten. Von Andrej Karpathy 2025 populär gemacht als jener Arbeitsablauf, in dem man „vergisst, dass der Code überhaupt existiert“, ist Vibe Coding die LLM-native Realisierung von Programmierung in natürlicher Sprache und End-User-Development — Rahmungen, die in dieser Wissensbasis inzwischen als Synonyme behandelt werden —, in der Prosa zur primären Programmierschnittstelle wird.

## Fragen zum Nachdenken

- Karpathys ursprüngliche Rahmung sagte, man solle „vergessen, dass der Code überhaupt existiert.“ Bevor Sie weiterlesen, fragen Sie sich: Ist es, den Code nicht zu sehen, ein Vorteil (er senkt Barrieren) oder ein Risiko (Sie können nicht verifizieren oder beheben, was Sie nicht sehen)? Was folgt daraus dafür, wem Vibe Coding erlaubt sein sollte?
- Forschung dazu, wer bei Vibe Coding erfolgreich ist, fand, dass klassische [[cs-education|Leistung in der Informatik]] Erfolg weiterhin vorhersagt, selbst wenn die nutzende Person nie Code anfasst. Wenn Sie das überrascht: Welche verborgene Fähigkeit könnte Informatikausbildung aufbauen, die Prosa allein nicht erfasst?
- Dieselbe Studie fand, dass Schreibfähigkeit die Leistung beim Vibe Coding weitgehend *deshalb* vorhersagt, weil sie höherwertige Prompts erzeugt. Wenn Prompting wirklich der Engpass ist: Ist die richtige Abhilfe dann, [[prompt-engineering|Menschen besseres Prompting beizubringen]] — oder Werkzeuge neu zu entwerfen, damit sie weniger Prosafähigkeit verlangen?
- Vibe Coding wird oft dafür gefeiert, „jede und jeden“ zur Entwicklerin bzw. zum Entwickler zu machen. Wenn aber sowohl Schreibfähigkeit als auch Informatikwissen die Ergebnisse prägen: Erweitert Vibe Coding dann den Zugang zum Bauen von Software, oder verlagert es die Fähigkeitsbarriere bloß von Code zu Prosa?
- Manche Entwicklerinnen und Entwickler unterscheiden „reines“ Vibe Coding (nie Code lesen) von KI-gestütztem Programmieren, bei dem man prüft und bearbeitet, was das Modell geschrieben hat. Wo, glauben Sie, ist echtes Lernen — gegenüber [[cognitive-offloading|Übervertrauen]] — wahrscheinlicher, und warum?

## Einführung

Vibe Coding beschreibt einen Interaktionsstil, der durch LLM-integrierte Entwicklungsplattformen (Replit, Lovable, Cursor und andere) ermöglicht wird: Die nutzende Person spezifiziert ein Programm in natürlicher Sprache, das Modell erzeugt ein lauffähiges System, und die nutzende Person iteriert auf Basis beobachteten Verhaltens statt durch Bearbeiten von Quellcode. Der Begriff wurde von OpenAI-Mitgründer Andrej Karpathy im Februar 2025 geprägt, um das Erlebnis einzufangen, sich so stark auf das Modell zu stützen, dass „der Code“ aus dem Bewusstsein verschwindet. Vibe Coding liegt an der Konvergenz mehrerer Stränge, die diese Wissensbasis bereits verfolgt — es ist [[generative-ai|generative KI]], angewandt auf [[cs-education|Programmieren]], eine extreme Form [[prompt-engineering|promptgetriebener]] Arbeit, ein konkreter Fall von [[human-ai-collaboration|Mensch-KI-Zusammenarbeit]] und der bisher klarste Weg für [[teacher-role|Nichtprogrammierende]] und Endnutzende, eigene Software zu bauen (End-User-Development).

Es hat auch tiefe Wurzeln. Die Idee des Programmierens in gewöhnlicher Sprache ist weit älter als LLMs — von COBOLs Aspiration, „ein englischsprachiges Programmiersystem für Nichtfachleute“ zu sein, über Donald Knuths literate programming bis zu Forschung zu Programmierung in natürlicher Sprache mit eingeschränkten Teilmengen des Englischen. Erst mit LLMs wurde es machbar, echt konversationelle, unterspezifizierte Anweisungen auf lauffähigen Code abzubilden. Vibe Coding ist die besondere Variante, in der die nutzende Person absichtlich den erzeugten Quellcode nicht inspiziert oder bearbeitet und sich ganz auf iteratives Prompting und Verhaltensbewertung stützt.

## Das Konstrukt definieren: „reines“ vs. code-sichtbares Vibe Coding

Die Definition von Vibe Coding ist noch im Fluss. Manche nutzen den Begriff breit für jede KI-geführte Programmierung; andere bestehen darauf, dass er streng „Software bauen mit einem LLM, ohne den geschriebenen Code zu prüfen“ meint. Google Cloud unterscheidet eine „reine“ No-Code-Version (konsistent mit Karpathys Definition) von einer Version, in der die nutzende Person den erzeugten Code versteht und verfeinert. Diese Unterscheidung ist für die [[research-methods-aied|Forschung]] bedeutsam: eine kontrollierte Studie zu Vibe-Coding-Fähigkeit erfordert ein wohldefiniertes Konstrukt. Die CHI-2026-Studie zu Prädiktoren der Vibe-Coding-Fähigkeit zielte absichtlich auf die „reine“ No-Code-Variante — die Teilnehmenden konnten den erzeugten Quellcode weder ansehen noch bearbeiten, sodass die gemessene Leistung die Fähigkeit widerspiegelte, Verhalten allein über Prosa und beobachtete Ausgabe zu spezifizieren, zu verfeinern und zu debuggen (siehe [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al.]]).

## Wer bei Vibe Coding erfolgreich ist: Belege

Eine vorregistrierte Querschnittstudie (N = 100 Studierende im Tertiärbereich) liefert die ersten kontrollierten, personenebenen Belege dafür, welche Fähigkeiten Erfolg beim Vibe Coding vorhersagen. Sowohl [[writing-education|Kompetenz in schriftlicher Kommunikation]] (r = .29) als auch Leistung in der Informatik (r = .39) sagten die Leistung an expertengeprüften, GUI-orientierten Vibe-Coding-Aufgaben signifikant voraus, wobei die Informatikleistung nach Kontrolle für domänenallgemeine kognitive Fähigkeiten signifikant blieb (partielles r = .281). In einem gemeinsamen Modell trug die Informatikleistung etwa doppelt so viel eindeutige Varianz bei wie die Schreibfähigkeit, doch beide fügten unabhängigen Vorhersagewert hinzu. Entscheidend: menschlich bewertete Promptqualität mediierte die Verbindung Schreiben→Leistung und liefert damit Belege zum Antwortprozess, dass klare Prosa über die Erzeugung besserer Prompts wirkt. Weil die Umgebung den Quellcode verbarg, konnte Informatikwissen nur indirekt helfen (über Problemzerlegung, algorithmisches Denken und mentale Modelle des Kontrollflusses) — daher argumentieren die Autoren, dass ihre Informatikschätzung eine *untere Grenze* für KI-gestütztes Programmieren ist, in dem nutzende Personen Code auch direkt bearbeiten können ([[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al., 2026]]).

## Vibe Coding als End-User-Development und Werkzeug für Lehrkräfte

Ein großes Versprechen von Vibe Coding ist, dass es Nichtprogrammierenden — einschließlich [[teacher-role|Lehrkräften]] und Domänenexpertinnen und -experten — erlaubt, eigene Software zu bauen, eine Form von End-User-Development im LLM-Zeitalter. Eine [[gaide-vibe-coding-k12-teachers|GAIDE-Rahmenwerk-Studie]] zeigte [[k-12|K-12]]-Lehrkräfte (Nichtprogrammierende), die Vibe Coding in einem achtwöchigen Workshop nutzten, um KI-gestützte Lernwerkzeuge zu bauen, und dabei ihre [[ai-literacy|KI-Kompetenz]] erhöhten sowie „Lernen durch Erschaffen“ als Modell der Professionalisierung demonstrierten. In der [[higher-ed|Hochschulbildung]] baute eine Lehrkraft in wenigen Tagen per Vibe Coding einen [[vibe-coding-programming-process-visualizer|Programmierprozess-Visualisierer aus IDE-Aktivitätslogs]], der die Programmierprozesse der Studierenden für Lehren und [[academic-integrity|Prüfung]] sichtbar machte. Diese Fälle positionieren Vibe Coding nicht bloß als Fähigkeit der Lernenden, sondern als Autorenfähigkeit, die [[educational-development|neu formt, wer Bildungstechnologie erschaffen kann]].

Eine vergleichende Think-aloud-Studie bat 15 angehende Lehrkräfte, 13 Lehrkräfte im Schuldienst und 10 Programmierexpertinnen und -experten, in 30 Minuten eine Web-App für den Unterricht zu bauen, und zeichnete nach, wie jede Gruppe mit Unsicherheit umging ([[lin-teacher-vibe-coding-uncertainty-2026|Lin und Zou, 2026]]). Alle drei Gruppen durchliefen Problemrahmung, Entwicklung und Verifikation in Schleifen, doch sie reduzierten Unsicherheit unterschiedlich, und ihre Artefakte wichen entsprechend voneinander ab.

- **Lehrkräfte im Schuldienst automatisierten Routinen, die sie bereits kannten.** Wöchentliche Lesekontrollen und Tablett-Arbeitsblätter waren vertraute Probleme, sodass ihre Artefakte meist bestehende Praxis ersetzten: 8 von 13 fielen unter Ersetzung.
- **Angehende Lehrkräfte rahmten über pädagogische Prinzipien.** Ihre Projekte bauten häufig etwas Neues, mit Amplifikation in 9 von 15 Fällen und Transformation in 1.
- **Expertinnen und Experten arbeiteten strukturell, statt härter zu prompten.** Sie führten schmale Fähigkeitssondierungen durch, fragten das Modell nach klärenden Fragen, zerlegten das Artefakt in testbare Module und automatisierten Prüfungen.

Dieser Unterschied spiegelt die Wissensbasis wider, die jede Gruppe einbrachte, keinen Fähigkeitsdefizit. Die Autoren argumentieren daher, dass die Lehrkräftebildung pädagogische, kontextuelle und technische Expertise integrieren sollte, anstatt Prompting-Fähigkeit allein zu trainieren.

**Autorenschaft ist ein Schritt der Leistungsbewertung, nicht nur eine Frage des Zugangs.** [[ho-invariant-core-faculty-development-2027|Ho (2026)]] zieht die Konsequenz: Wenn Artefakte das Denken, das sie hervorrufen sollten, nicht mehr belegen, muss die Bewertung den Prozess erfassen, und Prozessbelege erfordern eine längere Beobachtung, die eine knappe Personalausstattung nicht leisten kann. Ein von einer Lehrkraft selbst gebautes Werkzeug kann die pädagogischen Entscheidungen, das Scaffolding und die Ermutigung tragen, die ein gekauftes Produkt nicht bietet — das gibt die Gestaltungsentscheidung an die Lehrkraft zurück, die das Lernen beurteilt.

## Homogenisierung des Designs: Zugang ohne Vielfalt

Das End-User-Development-Versprechen von Vibe Coding betrifft, wer bauen kann, nicht was gebaut wird. In einer Kurseinrichtung erzeugten 73 Studierende, die Seiten für unterschiedliche Betriebe auf einer Vibe-Coding-Plattform bauten, etwa ein Dutzend unterschiedliche Designs, und gefühlte Urheberschaft korrelierte nicht mit gemessener Originalität ([[vibe-coding-design-diversity-2026|Boussioux et al. (2026)]]). Die Hürde zum Bauen zu senken kann die Ausgabe standardisieren — ein Preis, den das Versprechen des Zugangs nicht ankündigt.

## Lernen, Handlungsfähigkeit und das Risiko des Übervertrauens

Vibe Coding eröffnet Kernfragen darüber neu, was gelernt wird, wenn KI die Implementierung automatisiert. Weil die nutzende Person keinen Code liest, muss sie dem Verhalten des Modells vertrauen — was Vibe Coding zu einem folgenreichen Fall der Spannung zwischen [[agency|Handlungsfähigkeit]] und [[cognitive-offloading|Übervertrauen]] macht, die sich durch KI-gestütztes Programmieren zieht. Curricula reagieren darauf, indem sie sich vom Lehren der Implementierung zum Lehren verlagern, wie man KI-erzeugte Artefakte anleitet, verifiziert und prüft (siehe [[reshaping-cs-education-genai|die Neugestaltung des Informatik-Grundstudiums]] und [[agentic-ai|agentisches Software Engineering]]). Vibe Coding verändert auch die erkenntnistheoretische Position der lernenden Person: Erfolg hängt weniger davon ab, Code zu schreiben, als Absicht präzise auszudrücken und Verhalten an Zielen zu messen — Kompetenzen, die näher an [[computational-thinking|computational thinking]] und strukturiertem Schreiben liegen als an klassischer Syntaxbeherrschung.

Eine zweite Grenze zeigt sich im Bauen selbst: Die Code-Hürde zu entfernen kann die Diagnoselast unberührt lassen. Zwei Ingenieur-Fallstudien ließen eine Lehrkraft per Prompting von Gemini in gewöhnlicher Sprache innerhalb weniger Stunden lauffähige [[simulation|Websimulationen]] eines Batterie-Thermomanagementsystems und dreier ARQ-Protokolle bauen ([[caee-vibe-coding-simulation-development-engineering-education-2026|Tarasak et al. (2026)]]). Ein Duplicate-Packet-Fehler überlebte dann wiederholte Prompts, einschließlich eines, der das geforderte Verhalten benannte. Er wurde erst behoben, als die Lehrkraft aus dem Protokollverhalten auf ein unzureichendes Timeout-Intervall schloss, einen Parameter, den die Schnittstelle nie exponierte. Die Wirkung beider Simulationen auf das Lernen wurde nicht gemessen, sodass der Bericht Machbarkeit statt Wirksamkeit belegt.

## Verbindungen zu verwandten Konzepten

Vibe Coding verbindet sich natürlich mit [[prompt-engineering]] (Promptqualität ist der Mechanismus prosagetriebener Entwicklung), [[cs-education]] (als der Domäne, in der die Technik am meisten genutzt und am meisten bestritten wird), [[computational-thinking]] (die mentale Modellierung, die Erfolg selbst ohne Codezugang vorhersagt), [[writing-education]] (Schreiben wird zur Programmierfähigkeit) und [[agentic-ai]] (ein Modell auf ein Artefakt hin anzuleiten statt es von Hand zu bauen). Es überschneidet sich außerdem mit [[ai-literacy]] und [[teacher-role]], da die Fähigkeit, eigene Werkzeuge zu bauen, verändert, was Lehrkräfte und Lernende tun können. Schließlich wirft es dieselben Fragen zu [[academic-integrity|akademischer Integrität]] und Assessment auf, die KI-Codegenerierung in der gesamten Informatikbildung aufwirft.

Eine Fallstudie auf Ebene der Fakultät in dieser Wissensbasis liefert die organisationelle Schicht. [[zimmer-ai-intrapreneurship-faculty-innovation-2026|Zimmer (2026)]] beschreibt *AI Intrapreneurship* — Lehrende bauen eigene Werkzeuge, statt auf institutionelle Beschaffung zu warten —, einschließlich einer Autorin, die nicht programmiert und Claude Code nutzte, um einen Prüfer für 321 Kurslinks zu bauen. Die entscheidenden Ermöglicher waren organisationeller statt technischer Art: Handlungsspielraum in der Arbeit, Belohnungen und verfügbare Zeit, wobei Letztere in akademischen Settings am offensichtlichsten im Defizit und durch Beförderung und Tenure untergraben ist. Das Bild zur Sicherheit blieb nüchtern, da Veracodes Analyse von 2025 nur 55% des KI-erzeugten Codes als sicher fand, sodass per Vibe Coding gebaute Unterrichtswerkzeuge weiterhin einen Prüfdurchgang brauchen, bevor sie mit Daten von Lernenden umgehen oder sich mit einem LMS verbinden.

## Verbreitete Fehlvorstellungen

**Für Lehrende und Lehrkräftebildner**

- Vermitteln Sie den Unterschied zwischen reinem und code-sichtbarem Vibe Coding explizit und verlangen Sie Letzteres für alles, was mit Daten von Lernenden umgeht. Die Unterscheidung ist eine lehrbare Gewohnheit, keine [[philosophy-of-ai-in-education|philosophische]] Feinheit.
- Halten Sie einen echten Programmierstrang neben der Vibe-Coding-Arbeit aufrecht, denn die Leistung in der Informatik trug etwa doppelt so viel eindeutige Vorhersagevarianz bei. Wer Spezifikation in natürlicher Sprache als vollständigen Ersatz behandelt, verwirft den stärkeren Prädiktor.
- Lassen Sie Studierende das Artefakt über sein Verhalten bewerten *und* den Quellcode von allem inspizieren, was sie einsetzen. Das Lesen von erzeugtem Code ist eine Prüfkompetenz, und sie stellt sich bei Studierenden, die prompten können, nicht automatisch ein.

**Für Entwickelnde und Administrierende**

- Führen Sie bei jedem per Vibe Coding gebauten Werkzeug einen Sicherheits-Prüfdurchgang durch, bevor es mit Datensätzen von Lernenden in Berührung kommt — im Einklang mit dem Befund von 55% sicherem Code.
- Kalkulieren Sie Homogenisierung ein: Wenn mehrere Mitarbeitende dieselbe Art von Werkzeug aus denselben Voreinstellungen per Vibe Coding bauen, erwarten Sie ähnliche Ergebnisse und planen Sie, wie Differenzierung bewusst erreicht wird.
- Bevorzugen Sie code-sichtbare Workflows für gewartete Werkzeuge und reservieren Sie reines Vibe Coding für Wegwerf-Prototypen.

**Für Forschende**

- Berichten Sie die Vibe-Coding-Bedingung (rein versus code-sichtbar) zusammen mit den Ergebnissen und verwenden Sie expertengeprüfte, GUI-orientierte Aufgaben statt [[self-report-measures|selbstberichtetem]] Erfolg, damit Resultate über Studien hinweg vergleichbar sind.
- Messen Sie Artefaktvielfalt, nicht nur die Zahl der Artefakte oder der Erstellenden, wenn das Zugangsargument geprüft wird.

## Vibe Coding in die Praxis umsetzen

**„Vibe Coding senkt die Kompetenzschwelle, also kommt es vor allem darauf an, gut zu schreiben."** Schriftliche Kommunikationskompetenz hilft, trägt das Ergebnis aber nicht allein. In einer präregistrierten Querschnittsstudie (N = 100 Studierende im Tertiärbereich) sagten sowohl [[writing-education|schriftliche Kommunikationskompetenz]] (r = 0,29) als auch Informatikleistung (r = 0,39) die Leistung bei expertengeprüften, GUI-orientierten Vibe-Coding-Aufgaben signifikant vorher, und in einem gemeinsamen Modell trug die Informatikleistung etwa **doppelt so viel eindeutige Varianz** bei wie die Schreibkompetenz, wobei beide ihren unabhängigen Vorhersagewert behielten. Die Schwelle hat sich verschoben, sie ist nicht verschwunden, und ein Teil von ihr bleibt technisch.

**„Weil nun jede Person Software bauen kann, wird das, was gebaut wird, vielfältiger."** Zugang und Vielfalt sind getrennte Ergebnisse, und Zugang kann die Letztere sogar verringern. Die Evidenz zur Design-Homogenisierung beschreibt genau dieses Muster: Eine breitere Population von Erstellenden, die mit denselben Modellen, denselben Komponentenkonventionen und denselben Prompting-Voreinstellungen arbeitet, tendiert zu konvergierenden Designs. Die Demokratisierung der Autorenschaft macht Artefakte nicht automatisch vielfältiger.

**„‚Reines' Vibe Coding ist das, was der Begriff bedeutet, daher spielt die Unterscheidung keine Rolle."** Sie spielt für die Bewertung und für die Sicherheit eine Rolle. Beim reinen Vibe Coding wird der Quellcode nie gelesen oder bearbeitet; beurteilt wird nur das Verhalten. Bei code-sichtbarer Arbeit liest die nutzende Person, was erzeugt wurde. Das sind unterschiedliche Tätigkeiten mit unterschiedlichen Fehlerprofilen, und eine Studie zur einen erlaubt keine Aussagen über die andere.

**„Wenn die App läuft, ist der erzeugte Code in Ordnung."** Laufen ist ein schwacher Test. Veracodes Analyse von 2025 ergab, dass nur 55% des KI-generierten Codes sicher waren, daher brauchen per Vibe Coding gebaute Werkzeuge für den Unterricht weiterhin einen Prüfdurchgang, bevor sie Studierendendaten verarbeiten oder sich mit einem schützenswerten System verbinden. Verhaltensbezogene Bewertung bestätigt die Pfade, die eine nutzende Person zufällig durchläuft, und sagt nichts über diejenigen aus, die sie nicht durchläuft.
