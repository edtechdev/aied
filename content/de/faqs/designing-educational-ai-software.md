---
title: "Was sind Best Practices und Tipps für das Design wirksamer Bildungs-KI-Software?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
translation_of: faqs/designing-educational-ai-software
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

# Was sind Best Practices und Tipps für das Design wirksamer Bildungs-KI-Software?

**Bildungs-KI sollte als Instruktionssystem designed werden, nicht bloß als Allzweckmodell mit einer Bildungsoberfläche.** Die jüngste Designforschung in der Wissensbasis schärft diese Behauptung zu etwas Spezifischerem: die stärksten Systeme sind als **begrenzte Experten unter menschlicher Aufsicht** gebaut, mitgestaltet von den Lehrkräften und Lernenden, die sie nutzen werden, und begründet in verifizierbarem Inhalt statt in Modellspeicher. Eine praktische Menge von Designregeln:

- Richten Sie das System an expliziten Lernzielen aus.
- Scaffolden Sie, statt die Ziel-Kognition zu vollenden.
- Begründen Sie Antworten in von der Lehrkraft genehmigtem oder autoritativem Inhalt, wo faktische Verlässlichkeit zählt.
- Kommunizieren Sie Unsicherheit.
- Bieten Sie einen [[human-in-the-loop-ai|menschlichen Eskalationspfad]].
- Designen Sie für „freundlich-aber-richtig"-Antworten statt für Zustimmung zur nutzenden Person.
- Geben Sie Lehrenden bedeutsame Konfiguration und [[teacher-role|Aufsicht]].
- Minimieren Sie unnötige Daten der lernenden Person und erheben Sie nur, was pädagogisch nötig ist (siehe [[privacy]]).
- Designen Sie [[accessibility]] von Beginn an.
- Testen Sie auf ungleiche Leistung über Lernendenpopulationen hinweg (siehe [[equity-in-ai-education|Gerechtigkeit]]).
- Evaluieren Sie anhaltende, mehrturnige Interaktion statt isolierte Demonstrationsprompts.

## Pädagogische Sicherheit

Die Seite [[pedagogical-safety|Pädagogische Sicherheit]] betont, dass konventionelle Sicherheitstestung für Bildung unzureichend ist. Ein System kann toxische Inhalte vermeiden und dennoch bildungswirksamen Schaden verursachen, indem es Antworten überoffenbart, [[misconceptions]] verstärkt, Reflexion unterdrückt, Abhängigkeit fördert oder von Instruktionszielen abdriftet. Sie empfiehlt disziplinbewusste, mehrturnige Sicherheitsevaluation, Human-in-the-Loop-Qualitätssicherung, Grounding und Ausrichtung auf Anleitung statt Antwortbereitstellung.

Der [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]-[[benchmark]] verwandelt jene Warnung in Zahlen. Über jedes getestete Modell hinweg – von 3.8B-Open-Weight-Modellen bis GPT-5-mini – war [[pedagogy|pädagogischer]] Schaden universal, Modellgröße verbesserte Sicherheit nicht verlässlich, und Fehlerraten eskalierten von 17.7% in Single-Turn-Interaktionen auf 77.8% in mehrturnigen Gesprächen, während Verletzungsmuster nach Fach variierten. Die 11-dimensionale, 48-Teilrisiko-Taxonomie des Benchmarks (kognitiv, epistemisch, [[metacognition|metakognitiv]], [[motivation|motivational]]-affektiv, entwicklungsbezogen und gerechtigkeitsbezogen, Instruktionsabstimmung und andere) ist eine brauchbare Designcheckliste. Die praktische Lehre für alle, die Bildungssoftware spezifizieren: ein System kann genau und nach konventionellen Maßen „sicher" sein, während es Lernen leise erodiert, also ist mehrturnige, disziplinbewusste Evaluation eine Anforderung statt ein letztes Tor.

## Barrierefreiheit und Gerechtigkeit

Barrierefreiheit sollte konkrete operative Anforderungen umfassen wie Tastaturbedienbarkeit, Screenreader-Kompatibilität, Untertitel und Transkripte, angemessenen Kontrast, brauchbare Textalternativen und Kompatibilität mit assistiven [[ai-technologies|Technologien]]; KI-generierte Barrierefreiheitsmerkmale erfordern weiterhin Qualitätsprüfung. Siehe [[accessibility]].

Gerechtigkeitstestung sollte die gesamte Pipeline untersuchen und Verhalten über Sprache, Behinderung, Kultur und andere relevante Merkmale der lernenden Person hinweg disaggregieren, statt allein auf aggregierte Genauigkeit zu setzen. Siehe die Anleitung der Wissensbasis zu [[bias-mitigation]], zusammengefasst neben [[equity-in-ai-education|Gerechtigkeit]].

## Designen Sie für begrenzte Autorität, nicht für Autonomie

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reicherts und Kollegens partizipative Designstudie]] mit sechs Lehrenden der Sekundarstufe ist ein brauchbares Korrektiv zur Annahme, Bildungs-KI sollte ein autonomer Agent sein. Gebeten, Klassenraum-[[conversational-ai|Chatbots]] auf Papier zu prototypisieren, beschrieb jede Lehrkraft einen **begrenzten Experten** – spezialisierte Fähigkeit, beschränkt auf einen strikt definierten Bereich und operierend unter menschlicher Aufsicht –, über zwei Dimensionen. *Autoritätsgrenzen* hielten Lehrkräfte in letzter Kontrolle, weil professionelle Verantwortung für Lernen und Sicherheit der Studierenden nicht delegiert werden kann; *Expertisegrenzen* spiegelten KIs Mangel an kontextuellem Wissen über einzelne Studierende, Klassendynamik und institutionelle Normen.

Die von ihnen skizzierte Architektur hatte vier miteinander verbundene Komponenten – Inhaltsscoping, Inhaltspräsentation, Studentenadaption und [[teacher-role|Lehrkraft]]aufsicht –, ruhend auf drei Schutzschichten: Bereichsgrenzen, die Umfang beschränken, Inhaltsfilterung, die sichere [[personalized-learning|Personalisierung]] ermöglicht, und Lehrkraftübersteuerung für mehrdeutige Fälle. Delegation war selektiv: auf Gagnés neun Unterrichtsereignisse abgebildet, hießen Lehrkräfte KI willkommen für das Präsentieren von Inhalten, das Liefern von Übungsaufgaben und das Anbieten von [[formative-assessment|formativen]] [[feedback]], aber lehnten sie ab für Zielsetzung oder die Durchführung von [[summative-assessment|summativem]] [[assessment]]. Bemerkenswert priorisierten sie Verhaltenstransparenz – sichtbare Grenzen und Unsicherheitshinweise – gegenüber Modellerklärungen, und alle sechs erbaten vollständige Gesprächsprotokollierung, Echtzeitwarnungen und Übersteuerungsfähigkeit als Ausdruck [[teacher-role|professioneller Verantwortung]] statt als Misstrauen.

## Designen Sie mit Anspruchsgruppen, nicht nur für sie

Zwei weitere Studien erweitern das. [[ko-hughes-vsd-student-centered-its-2026|Ko und Hughes]] wandten Value-Sensitive Design auf ein [[intelligent-tutoring|Intelligent Tutoring System]] mit Community-College-Studierenden und Lehrenden an – einer Anspruchsgruppe, die historisch vom Design von Lernplattformen ausgeschlossen war –, und fanden anhaltende Wertspannungen, die zu managen statt zu lösen sind: Transparenz versus Interpretierbarkeit, Privatsphäre versus Instruktionseinblick, und [[agency|Handlungsfähigkeit der Studierenden]] versus systemgeleitetes [[scaffolding]]. Studierende bevorzugten kollaborative, humanisierte Erklärungen gegenüber roher Modelltransparenz, und der resultierende Prototyp kodierte 16 wertabgestimmte Merkmale über [[explainable-ai]], Human-in-the-Loop- und [[privacy]]-Kontrollen.

[[wang-teacher-ai-co-design-review-2026|Wang, Lius und Islams Review]] von 28 empirischen Studien zu Lehrkraft-KI-Co-Design fügt ein Designvokabular hinzu: [[generative-ai|generative KI]] wird hauptsächlich für Unterrichtsplanung, Promptgenerierung und kreative Ideenfindung genutzt, wobei KI weit häufiger als Assistenz oder Inhaltsgenerator agiert denn als Co-Designerin, und vier wiederkehrende Affordanzen – Effizienz, Reaktionsfähigkeit, [[creativity]] und [[equity-in-ai-education|Gerechtigkeit]] –, die Lehrkräfte nutzen können, um zu beurteilen, welches Werkzeug zu welchem Designproblem passt. Beide Studien behandeln Design als [[human-in-the-loop-ai|Human-in-the-Loop]]-[[human-ai-collaboration|Kollaboration]] – [[usability-research|Usability-Forschung]] statt Außenbeziehungspflege –, und beide fanden, dass die konsultierten Anspruchsgruppen Anforderungen hervorbrachen, die kein Genauigkeitsbenchmark erfassen würde.

## Begründen und verifizieren, vertrauen Sie nicht dem Modell

Grounding ist eine Architekturentscheidung, kein Prompt. [[eduguard-safe-rag-llm-tutor|EduGuard]], ein sicherer [[rag|retrieval-gestützter]] Tutor für [[cs-education|Einführungsprogrammierung]], paart von der Lehrkraft genehmigten Retrieval des Kurses mit einem architektonisch separaten Behauptungsprüfer, expliziter Kontrolle von [[cognitive-offloading|Überabhängigkeit]] und einem 618-Anfragen-Benchmark von Lehrenden verfasst, der Fehlvorstellungen, Debugging, code-gemischte Anfragen und adversarielle Direktantwort-Prompts umfasst – und verbessert GPT-4o-mini- und Llama-[[socratic-method|sokratische]]-Tutor-Baselines. Für Designer ist das die konkrete Form von „begründen Sie Antworten in von der Lehrkraft genehmigtem Inhalt": trennen Sie die Komponenten, die verifizieren, von den Komponenten, die konversieren, und testen Sie gegen Fälle, die aktiv versuchen, Antworten zu extrahieren. Siehe [[hallucination-risk|Halluzinationsrisiko]].

Wie sich diese Designprinzipien in einen gebauten Tutor übersetzen – Diagnose, Hinweisleitern, Feedback und Evaluation –, siehe [[developing-ai-tutor]]; für die pädagogischen Standards, die entscheiden, ob ein gut gebautes Werkzeug gut genutzt wird, siehe [[designing-ai-into-learning]].

**Behandeln Sie die Einreichung eines Studenten als nicht vertrauenswürdige Eingabe für jeden KI-Bewerter.** Das Bedrohungsmodell, das der meiste Designrat auslässt, ist adversarieller Inhalt im bewerteten Artefakt. [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026) adversarische Red-Team-Evaluation]] testete, ob Studierende ein LLM-basiertes Bewertungssystem durch Prompt-Injektion manipulieren können, die in ihre Einreichungen eingebettet ist, und fand, dass die Manipulation funktioniert: Injektionen, die den Bewerter anweisen, umrahmen oder Rollenspiel betreiben, verschieben den Wert, ohne die Arbeit zu verändern. Die Designfolgen folgen aus demselben Trennungsprinzip wie die obige Verifikationsarchitektur – halten Sie die Bewertungsrubrik und Anweisungen außerhalb des von Studierenden kontrollierten Kontextfensters, entfernen oder markieren Sie anweisungsähnliche Inhalte in Einreichungen, lassen Sie eine Einreichung niemals ihre eigenen Kriterien etablieren, und behalten Sie eine menschliche Entscheidung über jede folgenreiche Note. Ein KI-Bewerter, der seine Anweisungen aus demselben Text liest, den er bewertet, hat dem Kandidaten die Rubrik ausgehändigt.
