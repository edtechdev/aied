---
title: Netzwerkanalyse
created: "2026-08-22T01:40:00-04:00"
updated: "2026-10-10T09:04:27-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
translation_of: concepts/network-analysis
source_updated: "2026-10-04T10:50:04-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Netzwerkanalyse** — die Familie der [[research-methods-aied|Forschungsmethoden]], die Entitäten (Personen, Konzepte, Handlungen oder Codes) als **Knoten** modellieren, verbunden durch **Kanten**, die Beziehungen oder Übergänge repräsentieren, und dann die Struktur und Dynamik des resultierenden Netzwerks analysieren, um Muster zu offenbaren, die für Häufigkeitszählungen oder paarweise Vergleiche unsichtbar sind. In der KI-in-der-Bildung-Forschung wird Netzwerkanalyse genutzt, um Interaktionsmuster zwischen Lernenden und KI-Werkzeugen zu kartieren, zu modellieren, wie Wissens- oder Diskurselemente ko-okkurrieren, und zeitliche Sequenzen von Verhalten nachzuzeichnen. Sie umfasst distincte Varianten — **Epistemic Network Analysis** (ENA, Modellierung der Ko-Okkurrenz von Codes/Konstrukten), **Social Network Analysis** (SNA, Modellierung von Beziehungen zwischen Personen) und **Transition Network Analysis** (TNA, Modellierung zeitlicher Zustandssequenzen) —, von denen jede „Lernen als Verbindung" auf verschiedene Weise operationalisiert. ([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## Fragen zum Nachdenken

- Wenn Sie „Netzwerkanalyse" in der Bildung hören, welche Bilder kommen Ihnen in den Sinn — Freundschaftskarten von Lernenden, Verbindungen zwischen Ideen, oder etwas anderes? Wie unterscheiden sich diese davon, einfach zu zählen, wie oft Dinge auftreten?
- Angenommen, Sie wollten wissen, ob Lernende tatsächlich mit dem Feedback eines KI-Schreibwerkzeugs arbeiten statt nur Antworten zu bekommen. Warum könnte ein Messwert wie „wie oft haben sie geklickt" die Geschichte verfehlen, die eine Abfolge von Handlungen (z. B. eine Überarbeitungsschleife gegenüber einer Chatschleife) offenbaren würde?
- Die Seite unterscheidet epistemische, soziale und Transitions-Netzwerkanalyse. Ohne die Details zu kennen, können Sie erraten, welche Variante Sie nutzen würden, um zu untersuchen, (a) wie Menschen zusammenarbeiten, (b) welche Ideen im Schlussfolgern der Lernenden ko-okkurrieren, und (c) wie Lernende über die Zeit zwischen Zuständen wechseln?
- Eine Forscherin findet, dass Lernende mit hoher und niedriger Kompetenz dasselbe KI-Werkzeug nutzen, aber sehr verschiedene Netzwerkstrukturen des Schlussfolgerns produzieren. Was sagt Ihnen das über die Evaluation von KI-Werkzeugen mit einem einzigen Mittelwert?
- Netzwerkmetriken wie „Dichte" und „Zentralität" beschreiben, ob Interaktion zufällig oder um Hubs herum organisiert ist. Wann wäre ein organisiertes, auf einer lernenden Person zentriertes Netzwerk ein Zeichen guter Zusammenarbeit — und wann ein Zeichen eines Problems?

## Einführung

Methoden der Netzwerkanalyse teilen eine Kernprämisse: dass die Struktur von Verbindungen — nicht nur ihre Anwesenheit oder Häufigkeit — Bedeutung trägt. Statt zu fragen „wie viel von X trat auf", fragen sie „wie sind Elemente verbunden, und was offenbart diese Verbundenheit über [[metacognition|Kognition]], [[collaborative-learning|Zusammenarbeit]] oder Lernprozesse?" Das macht sie besonders wertvoll in der KI-in-der-Bildung, wo Forschende zunehmend den *Prozess* der Lernenden-[[student-ai-interaction|KI-Interaktion]] verstehen wollen (wie Lernende [[feedback|Feedback]], Dialog und Überarbeitung navigieren) statt nur das Produkt (abschließende Punktewerte, Fehlerraten).

## In der Wissensbasis verwendete Varianten

- **Epistemic Network Analysis (ENA)** — die häufigste Variante in der Wissensbasis (diskutiert in ~24 Artikeln). ENA modelliert die Ko-Okkurrenz von Codes oder Konstrukten innerhalb von Segmenten von Diskurs oder Aktivität und produziert Netzwerke, die zeigen, welche Ideen, Fähigkeiten oder epistemischen Handlungen in einem gegebenen Kontext tendenziell verbunden sind. Sie wird genutzt, um zu vergleichen, wie verschiedene Gruppen (z. B. Lernende mit hoher gegenüber niedriger Kompetenz, menschliche gegenüber KI-Kollaborateurinnen und -Kollaborateuren) ihre Kognition strukturieren. ([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Social Network Analysis (SNA)** — modelliert Beziehungen zwischen Personen (Lernenden, Lehrkräften, Agenten), um Kollaborationsstrukturen, Einfluss, Zentralität und Gemeinschaft zu offenbaren. Nützlich zum Studium [[collaborative-learning|kollaborativen]] Lernens und Peer-Lernens. ([[misiejuk-cognitive-offloading-prompting-2026]])
- **Transition Network Analysis (TNA)** — modelliert zeitliche Sequenzen diskreter Zustände (z. B. Lernendenhandlungen in einer Tutoringsitzung) als gerichtetes Netzwerk und quantifiziert die Wahrscheinlichkeit des Wechsels zwischen Zuständen. TNA wird genutzt, um Verhaltensschleifen, -pfade und Aufnahmedynamiken in der Lernenden-KI-Interaktion zu offenbaren. ([[penny-transition-network-analysis-efl-writing-2026]])

Diese unterscheiden sich von einem **[[knowledge-graph|Wissensgraphen]]**, der eine Datenstruktur zur Repräsentation und zum Schlussfolgern über Fakten ist (ein Ontologie-/Triple-Store), nicht eine analytische Methode zum Studium von Prozess- oder Beziehungsstruktur.

## Netzwerkanalyse in der KI-in-der-Bildung-Forschung

Netzwerkmethoden werden über die Evidenzbasis der Wissensbasis hinweg genutzt, um Fragen zu beantworten, die aggregierte Metriken nicht beantworten können:

- **Die „Black Box" der Lernenden-KI-Interaktion öffnen.** TNA offenbart den *Prozess* — die Verhaltensschleifen und -pfade, die Lernende bei der Nutzung von KI-Werkzeugen nehmen (z. B. eine „revision loop" gegenüber einer „chat loop" in [[conversational-ai|Chatbot]]-gerüstetem [[writing-education|Schreiben]]) statt nur der abschließenden Ausgabe. ([[penny-transition-network-analysis-efl-writing-2026]])
- **Kognitive Strukturierung über Gruppen hinweg vergleichen.** ENA zeigt, wie verschiedene Gruppen Konstrukte unterschiedlich verbinden — z. B. wie [[metacognition|Metakognition]] mit Delegation gegenüber menschlichem Schlussfolgern in Mensch-KI-Zusammenarbeit ko-okkurriert, was verschiedene Kollaborationsmodi offenbart. ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **KI-Kompetenz und Interaktionssignaturen nachzeichnen.** ENA auf Interaktionslogs identifiziert distincte Muster der [[llm|LLM]]-Nutzung (iterative strategische Verfeinerung gegenüber linearen Befehlen) und unterscheidet so [[ai-literacy|Proficiency]] und Entwicklung der Lernenden. ([[tracing-genai-literacy-interaction-patterns]])
- **Diskurs und Rahmung analysieren.** ENA wird auf [[qualitative-research|qualitative]] und [[multimodal|multimediale]] Daten angewandt (z. B. YouTube-Frames von ChatGPT in der Bildung), um die Struktur öffentlichen oder fachlichen Diskurses zu offenbaren. ([[youtube-frames-chatgpt-education]])
- **Selbstauskunft und Produktmetriken ergänzen.** Weil Netzwerkmethoden beobachtete Verhaltensdaten nutzen, können sie Diskrepanzen zwischen dem, was Lernende behaupten, und dem, was sie tatsächlich tun, offenlegen — ein wiederkehrender Befund in der Literatur der Wissensbasis zur Feedbackaufnahme.

- **Graphstruktur als Validierungsgröße, nicht als deskriptive Zusammenfassung.** [[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]] verfolgen β0 — die Anzahl verbundener Komponenten eines wöchentlichen Nähegraphen über Lernende bei einem festen euklidischen Schwellenwert —, um zu testen, ob synthetische Kohorten die realen reproduzieren, und bevorzugen ihn, weil er vom Graphen allein festgelegt ist, anders als Modularitätsmaximierung keine Optimierung und keinen Zufallsstartwert braucht, und definiert bleibt, wenn ein Siebtel bis ein Drittel der Lernenden allein in einer Komponente sitzt.

## Methodologische Erwägungen

- **Codierung ist das Fundament.** Alle Netzwerkvarianten hängen davon ab, Rohdaten (Äußerungen, Ereignisse, Beziehungen) verlässlich in diskrete Knoten/Codes zu codieren; automatisierte LLM-basierte Codierung wird zunehmend genutzt, erfordert aber menschliche Validierung (z. B. Fleiss' κ von 0.70–0.71 in TNA-Studien). ([[penny-transition-network-analysis-efl-writing-2026]])
- **Codiererübereinstimmung als laufende Prüfung behandeln, nicht als einmalige Statistik.** [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] codierten 304 Noticing-Aussagen bei Krippendorffs α = .803 und überwachten die Übereinstimmung über die Studie, wobei sie strittige Aussagen neu codierten, wann immer das gebündelte κ unter ihren Rekalibrierungsschwellenwert von .85 fiel (bei Cases 18 und 27), und bis zu den Cases 36–51 keine weitere Rekalibrierung brauchten. Die Sequenz ist der Punkt: nur am Ende gemessene Reliabilität hätte die frühen Transitionsmodelle auf Codiererdrift ruhen lassen, da jene wöchentlichen Transitionsmuster der Befund der Studie waren.
- **Netzwerkebene-Metriken fassen Struktur zusammen.** Dichte, Reziprozität, Zentralisierung und In-/Out-Strength beschreiben, ob Interaktion zufällig oder um „gravitative" Hubs herum organisiert ist, und wie reziprok der Austausch ist.
- **Statistischer Vergleich ist für Gruppenunterschiede nötig.** Chi-Quadrat-Tests oder Permutationstests werden genutzt, um zu etablieren, dass beobachtete Netzwerkunterschiede (z. B. nach Proficiency) nicht auf Zufall beruhen. [[caeai-response-length-ai-ethics-education-2026|Shao et al. (2026)]] zeigen, dass die Null auf den Text abgestimmt gebaut werden muss. In einer Falldiskussion mit zwanzig [[higher-ed|Graduierten]] gemischter Disziplinen stieg der Anteil geteilter Begriffe der Größe 3 von 5.2% auf 8.0%, während Inhaltstoken auf etwa das 0.65-Fache ihres Niveaus nach der Lektüre fielen. Ein Permutationstest über den ganzen Beutel hätte diesen Anstieg signifikant genannt; ihr längenkonditionierter Token-Permutationstest tat es nicht (Q6 p = .62, Q7 p = .15).
- **Das Instrument validieren, bevor sein Netzwerk gelesen wird.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai & Alshahri (2026)]] bauten die 45-Item AI-STEM-MLCS über die volle Skalenentwicklungsroute — Inhaltsvaliditätsverhältnisse von Experten, explorative dann konfirmatorische Faktorenanalyse (CFI = 0.983, RMSEA = 0.019), McDonalds ω von 0.888–0.905, und Zwei-Wochen-Test-Retest-ICCs von 0.751–0.900 —, bevor sie die vier Dimensionen mit explorativer Graphanalyse modellierten. Struktur von einem Netzwerk abzuleiten, dessen Knoten unvalidierte Skalenpunktewerte sind, ist das, wovor jene Ordnung schützt, und die Autoren benennen die Saudi-spezifische Validierung als die Grenze für die Übertragung der Struktur.
- **Mit Sorgfalt interpretieren.** Knotengranularität (z. B. ein grober „chat"-Knoten) kann Absicht verdecken; automatisierte Klassifikation trägt einige Mehrdeutigkeit; und querschnittliche Netzwerkstruktur etabliert keine Kausalität.
- **Netzwerke, die offenlegen, was ein Aggregat verbirgt.** [[genai-social-annotation-epistemic-network-analysis-2026|Pan et al. (2026)]] fanden, dass die GenAI-annotierende Klasse ihre Kontrolle übertraf und stärker engagierte, teilten dann die experimentelle Klasse am Median der Leistung und zeigten, dass der Zuwachs nicht geteilt wurde: leistungsstarke Gruppen initiierten 60.7 Prozent der Feedbackanfragen über ihre Annotationen hinweg gegenüber 34.0 Prozent bei leistungsschwachen Gruppen, die in einer selbstbezüglichen Schleife blieben (Gruppentrennung signifikant auf der ENA-X-Achse, U = 25.00, p = 0.01). Die Designlehre ist, dass ein Effekt auf Gruppenebene zwei verschiedene Interaktionsstrukturen zusammenfassen kann — und die beiden Gruppen waren intakte Klassen, sodass der Vergleich das Muster identifiziert, ohne es kausal zuzuschreiben.

## Implikationen für die KI-in-der-Bildung-Forschung

1. **Prozessmethoden gegenüber produktbezogenen Metriken bevorzugen.** Um zu evaluieren, ob KI-Werkzeuge Lernen unterstützen, modellieren Sie, wie Lernende tatsächlich engagieren (Aufnahme, Dialog, Überarbeitung), mit Sequenz-/Netzwerkmethoden, statt sich auf abschließende Punktewerte allein zu verlassen.
2. **ENA nutzen, um kognitive Strukturierung zu vergleichen.** Wenn Sie fragen, wie verschiedene Lernende oder Modi (menschlich gegenüber KI) ihr Schlussfolgern strukturieren, bietet ENA einen direkten, visuellen Vergleich von Ko-Okkurrenz-Netzwerken — eine Technik, die gut zur [[student-modeling|Modellierung von Lernenden]] dafür geeignet ist, wie Lernende Ideen verbinden.
3. **Automatisierte Codierung validieren.** Bei großen Log-Datensätzen ist [[llm|LLM]]-basierte Klassifikation mächtig, muss aber gegen menschliche Codierung geprüft werden (Inter-Rater-Übereinstimmung berichten), bevor Netzwerkstruktur interpretiert wird.
4. **Auf Differenzierung hin gestalten.** Netzwerkanalyse offenbart oft, dass *dasselbe* KI-Werkzeug verschiedene Interaktionsmuster über Lernendengruppen hinweg produziert — was adaptives Design informiert statt one-size-fits-all-Evaluation.


## ENA-Validierung simulierten kollaborativen Dialogs

- **ENA als Validierung für simulierten Dialog.** Fang (2026) wendet Epistemic Network Analysis an, um zu evaluieren, ob feinjustierte LLM-Agenten die Struktur echten kollaborativen [[problem-solving|Problemlöse]]dialogs reproduzieren. Simulierte Adjazenzvektoren mit dem empirischen Netzwerk vergleichend berichtet er eine ENA-Distanz von 0.17 — innerhalb der 95-Perzentil-Schwelle der Nullverteilung, mit einem Permutations-p-Wert von 0.65 —, was ENAs Kraft als [[quantitative-research|quantitative]] Prüfung der Fidelity generativer [[simulation|Simulationen]] von Diskurs demonstriert, neben anderen Anwendungen von ENA/SNA/TNA in der Bildungsforschung.

## Verbundene Konzepte

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Verbundene Artikel

- [[caeai-response-length-ai-ethics-education-2026]] — Response length, not lexical alignment, drives shared-term statistics in participant–morpheme networks (Shao et al. 2026)

- [[penny-transition-network-analysis-efl-writing-2026]] — TNA of learner-chatbot interactions in scaffolded EFL writing
- [[tracing-genai-literacy-interaction-patterns]] — ENA of GenAI literacy interaction patterns
- [[hao-human-ai-collaborative-problem-solving-cognition]] — ENA of human-AI collaborative problem solving
- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive offloading and prompting (SNA/network methods)
- [[youtube-frames-chatgpt-education]] — ENA of YouTube frames of ChatGPT in education
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing (ENA)
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
