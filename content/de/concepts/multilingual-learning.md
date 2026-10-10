---
connected_resources: [mglearn]
title: Mehrsprachiges Lernen
created: "2026-08-19T09:55:00-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
technology: [llm]
ethics: [culturally-relevant-pedagogy, digital-divide, equity-in-ai-education, global-south, inclusive-learning, multilingual-learning]
discipline: [language learning]
confidence: medium
translation_of: concepts/multilingual-learning
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

> Mehrsprachiges Lernen in der KI-Bildung betrifft die Frage, wie pädagogische [[ai-technologies|Technologien]] und LLM-basierte Systeme Lernende über Sprachen, Dialekte und ressourcenarme sprachliche Kontexte hinweg unterstützen — und die Risiken sprachlichen Ausschlusses, wenn KI-Systeme vorrangig für dominante Sprachen gebaut werden.

## Fragen zum Nachdenken

- Die meisten KI-Modelle werden vorrangig an ressourcenstarken Sprachen wie Englisch trainiert. Wenn Sie in einer anderen Sprache denken, lernen oder geprüft werden: Wie könnte Sie das systematisch benachteiligen — selbst wenn das Werkzeug auf Englisch zu „funktionieren“ scheint?
- Die Seite warnt, dass unthematisierte monolinguale Voreingenommenheit in der KI die digitale Kluft vertieft und Gerechtigkeit untergräbt, besonders im Globalen Süden. Was erfordert echte Gerechtigkeit über die bloße Übersetzung von KI-Inhalten in eine andere Sprache hinaus?
- Automatisiertes Assessment kann Sprachbias zeigen und dabei Nicht-Muttersprachlerinnen und Nicht-Muttersprachler selbst bei derselben Schlussfolgerung bestrafen. Wenn Sie KI-Bewertung einführen würden: Was würden Sie prüfen, um Fairness über Sprachen hinweg sicherzustellen statt bloß Genauigkeit in einer?
- Die Seite zeigt, dass ressourcenarme Sprachen durch Feinjustierung von Modellen an kuratierten Korpora bedient werden können, sogar unter praktischen Hardware-Einschränkungen. Welche Kompromisse würden Sie zwischen Effizienz und der Treue erwarten, mit der das Modell eine ressourcenarme Sprache handhabt?
- Mehrsprachige KI muss über Übersetzung hinausgehen und kulturell relevante Pädagogik abbilden — Inhalte, die sprachlich *und* kontextuell angemessen sind. Wie könnte ein perfekt übersetzter Inhalt eine lernende Person dennoch scheitern lassen, wenn er lokalen Kontext und Kultur ignoriert?

## Einführung

Mehrsprachiges Lernen betrifft Bildung für Lernende, die in anderen als den dominanten Sprachen lernen oder denken, und es ist eine zentrale Gerechtigkeitsdimension von KI in der Bildung: [[generative-ai|generative KI]] wird überwältigend an ressourcenstarken Sprachen trainiert und justiert, was alle übrigen systematisch benachteiligen kann. Das Thema spannt technische Arbeit (Modelle an ressourcenarme Sprachen und dialektale Korpora anzupassen, [[rag|Retrieval]] in nicht-dominanten Sprachen), pädagogische Anliegen ([[culturally-relevant-pedagogy|lokal verankerter Unterricht]]) und strukturelle Gerechtigkeit (wer überhaupt Zugang zu nützlicher pädagogischer KI hat) — was es von der [[digital-divide]] und [[equity-in-ai-education]] untrennbar macht.

## Überblick

Mehrsprachiges Lernen ist eine zentrale Gerechtigkeitsdimension von [[ai-education|KI in der Bildung]]. Generative KI und [[llm|LLMs]] werden überwältigend an ressourcenstarken Sprachen trainiert und justiert, was Lernende, die in anderen Sprachen lernen oder denken, systematisch benachteiligen kann. Das Thema spannt technische Herausforderungen (Anpassung von Modellen an ressourcenarme Sprachen, dialektale Korpora, [[rag|RAG]] in nicht-dominanten Sprachen), [[pedagogy|pädagogische]] Anliegen (kulturell relevanter und lokal verankerter Unterricht) und strukturelle Gerechtigkeit (wer überhaupt Zugang zu nützlicher pädagogischer KI erhält).

## Technische Ansätze

- **Feinjustierung für ressourcenarme Sprachen:** Nwogo et al. (2026) [[multilingual-adaptive-learning-nigeria-2026|justierten ein instruction-justiertes LLM an einem kuratierten Nigerian-Pidgin-Korpus]] innerhalb einer [[adaptive-learning]]-Plattform fein und analysierten systematisch die Quantisierungskompromisse (4/5/8-Bit) zwischen semantischer Treue und Recheneffizienz — und zeigten damit, dass ressourcenarme Sprachen unter praktischen Hardware-Einschränkungen bedient werden können. Siehe auch den [[bilingual-llm-lecture-companion-srl-2026|bilingualen LLM-Vorlesungsbegleiter]] für [[self-regulated-learning|selbstreguliertes Lernen]].
- **Korpus- und Datengerechtigkeit:** Der Aufbau kuratierter Korpora (z. B. Nigerian Pidgin, indische Wissenssysteme über [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]]) ist eine wiederkehrende Strategie, Modellausgaben in der eigenen Sprache der Lernenden zu ermöglichen.
- **Sprachdominierte und mündliche Kontexte:** [[kutti-ai-voice-first-learning-companion|Sprachdominierte Begleiter]] und [[structural-silence-underrepresented-language-ai-2026|Analysen strukturellen Schweigens]] behandeln Kontexte, in denen textbasierte KI Sprechern unterrepräsentierter Sprachen versagt.

## Gerechtigkeit und Pädagogik

Mehrsprachige KI muss über Übersetzung hinausgehen und [[culturally-relevant-pedagogy|kulturell relevante Pädagogik]] abbilden — Inhalte erzeugen, die sprachlich und kontextuell angemessen sind. Studien zu [[llm-cultural-relevance-k12|LLM-Kulturrelevanz in K-12]] und [[scaffolding-critical-engagement-genai-minority-students|kritischer Auseinandersetzung mit GenAI unter Studierenden mit Minderheitenhintergrund]] zeigen, dass sprachliche und kulturelle Passung darüber entscheidet, ob Lernende tatsächlich profitieren. Unbehandelt vertieft monolinguale Voreingenommenheit in der KI die [[digital-divide]] und untergräbt [[equity-in-ai-education|Gerechtigkeit]] im [[global-south|Globalen Süden]].

## Bias im Assessment

Mehrsprachigkeitsanliegen betreffen auch [[automated-assessment|automatisiertes Assessment]]: [[ai-scoring-language-bias-physics|KI-Bewertung kann Sprachbias zeigen]] (z. B. in [[physics-education|Physik]]) und dabei Nicht-Muttersprachlerinnen und Nicht-Muttersprachler bestrafen. Sicherzustellen, dass Assessment-Werkzeuge über Sprachen hinweg fair sind, ist Teil der [[assessment-validity]].

LLM-basiertes komparatives Urteilen ist ein Fall, in dem der Bias dem menschlichen Referenzmaß folgte statt dem Modell: Werte für informationsorientiertes Schreiben in den Klassenstufen 3–6 konvergierten mit den Rubriken der Forschenden (r = .59–.73) und zeigten Muster prädiktiven Bias für mehrsprachige Lernende, die denen menschlicher Bewertung ähnelten, ohne Belege dafür, dass größere Modellfähigkeit oder höhere Kosten die Validität verbesserten ([[llm-comparative-judgment-writing-screening-2026|Mercer & Reed (2026)]]).

## Implikationen für Lehrende in mehrsprachigen Kontexten

- **KI auf die eigenen Sprachen der Lernenden ausweiten, nicht nur auf Englisch.** Justieren Sie Modelle für ressourcenarme und nicht-dominante Sprachen fein oder konfigurieren Sie sie dafür ([[multilingual-adaptive-learning-nigeria-2026|Nigerian-Pidgin-Plattform]]), statt englischsprachige Werkzeuge zu erzwingen; paaren Sie KI, wo möglich, mit [[rag|RAG]] und lokalen Korpora.
- **Assessment gegen Sprachbias absichern.** [[ai-scoring-language-bias-physics|KI-Bewertung]] kann Nicht-Muttersprachlerinnen und Nicht-Muttersprachler bestrafen — nutzen Sie sprachbewusste oder menschlich moderierte Bewertung, um [[assessment-validity]] und [[equity-in-ai-education|Fairness]] zu schützen.
- **Kultur und Kontext abbilden, nicht nur Übersetzung.** Mehrsprachige KI muss über Übersetzung hinaus zu [[culturally-relevant-pedagogy|kulturell relevanter Pädagogik]] gelangen — Inhalte erzeugen, die sprachlich und kontextuell angemessen sind ([[llm-cultural-relevance-k12|K-12-Kulturrelevanz]]).
- **KI mit mehrsprachigen Unterstützungsstrukturen paaren.** Nutzen Sie sprachdominante und mündliche Modi ([[kutti-ai-voice-first-learning-companion|sprachdominierte Begleiter]]), wo textbasierte KI versagt, und stützen Sie [[self-regulated-learning|Selbstregulation]] in bilingualen Kontexten ([[bilingual-llm-lecture-companion-srl-2026|bilingualer Vorlesungsbegleiter]]).
- **Die digitale Kluft im Blick behalten.** Monolinguale Voreingenommenheit in der KI vertieft die [[digital-divide]] und untergräbt Zugang im [[global-south]] — planen Sie gerechte Infrastruktur und Zugang neben der Werkzeugwahl ein.

## Verbundene Konzepte

- [[differential-effects-across-learner-groups]]
- [[language-learning]]
- [[llm]]
- [[equity-in-ai-education]]
- [[global-south]]
- [[digital-divide]]
- [[culturally-relevant-pedagogy]]
- [[inclusive-learning]]
- [[generative-ai]]

## Verbundene Artikel

- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Nigeria
- [[bilingual-llm-lecture-companion-srl-2026]] — Bilingual LLM Lecture Companion
- [[structural-silence-underrepresented-language-ai-2026]] — Structural Silence: Underrepresented Languages
- [[llm-cultural-relevance-k12]] — LLM Cultural Relevance in K-12
- [[scaffolding-critical-engagement-genai-minority-students]] — Critical Engagement with GenAI Among Minority Students
- [[iks-instruct-dataset-indian-knowledge]] — IKS-Instruct: Indian Knowledge Systems Dataset
- [[kutti-ai-voice-first-learning-companion]] — Voice-First Learning Companion
- [[ai-scoring-language-bias-physics]] — AI Scoring Language Bias in Physics
