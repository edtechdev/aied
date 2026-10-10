---
title: Quelloffene Software (Open Source)
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-10T09:04:27-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
translation_of: concepts/open-source
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Open Source** — die Nutzung offen lizenzierter *Modelle, Code, Daten und Inhalte* in der [[ai-education|KI in der Bildung]]. Offenheit ist das Hauptgegenwicht der Wissensbasis zu Vendor Lock-in und [[privacy|Datenexposition]]: offene Gewichtsmodelle können auf Campus-Hardware laufen, um FERPA-, GDPR- und EU-AI-Act-Pflichten zu erfüllen, offen lizenzierte Korpora können ohne Verlagsgenehmigung indexiert und feinjustiert werden, und offene Benchmark- und Datensatzveröffentlichungen machen [[research-methods-aied|Forschung]] replizierbar. Die Lasten sind ebenso real: Infrastruktur- und [[pedagogical-safety|Sicherheits]]zusicherung, Wartung, die die Förderung überlebt, und Qualität, die Offenheit von selbst nicht garantiert.

## Fragen zum Nachdenken

- „Open source" wird oft als „frei und einfach" gehört. Welche der vier Schichten unten — Modelle, Code, Daten oder Inhalte — kostet Ihre Institution tatsächlich am meisten zur Übernahme, und warum?
- Offene Gewichte machen lokale Einsatz möglich, aber jemand muss das System noch betreiben, patchen und evaluieren. Wer sollte diese Arbeit nach dem Ende des ursprünglichen Projekts besitzen, und wer bezahlt sie?
- Eine Studie hier fand ein offenes 32B-Modell, das ein weit größeres proprietäres System an pädagogischem Wissen übertraf, während eine andere jedes getestete offene Modell unter der menschlichen Baseline bei wissenschaftlicher Visualisierungskompetenz fand. Wie entscheiden Sie, welcher Benchmark der richtige für Ihre Entscheidung ist?
- Ein einzelnes offen lizenziertes Korpus ist das, was eine Schule einen On-Premise-Assistenten über ihre eigenen Kursmaterialien betreiben lässt. Welche Pflichten kommen damit — gegenüber den ursprünglichen Autorinnen und Autoren, gegenüber Studierenden, deren Daten indexiert werden, und gegenüber der Lizenz selbst?
- Wenn [[generative-ai|generative KI]] einen Kurs in unter einer halben Stunde für ein paar Dollar produzieren kann, was ist die verbleibende Begründung für offene Bildungsressourcen — Kosten, Lizenzfreiheit, Qualitätssicherung, oder etwas anderes?
- Sollten Institutionen Open-Source-Übernahme als Beschaffungsentscheidung, Infrastrukturentscheidung oder pädagogische Entscheidung behandeln? Was bricht, wenn sie als nur eine davon behandelt wird?

## Einführung

Locker bedeutet „offen" in der KI-Bildung, dass vier Artefaktarten für Inspektion, Wiederverwendung und Modifikation verfügbar sind: **Modellgewichte**, **Quellcode**, **Daten und Evaluationsinstrumente** und **Bildungsinhalte**. Die Artikel der Wissensbasis häufen sich ungleich über diese Schichten, und das resultierende Bild ist nützlicher als der Slogan: Offenheit kauft spezifische Dinge — lokale Kontrolle, Prüfbarkeit, Replizierbarkeit und rechtliche Klarheit — und kostet spezifische Dinge — Infrastruktur, Expertise, Wartung und eine Qualitätssicherungslast, die vom Anbieter zur Institution wandert.

### Offene Modelle und offene Gewichte

Offene Gewichte zählen am meisten dort, wo Studierendendaten den Campus nicht verlassen können. [[lata-ferpa-compliant-local-llm-autograder|LaTA]] ist ein Drop-in, FERPA-konformer lokaler [[llm|LLM]]-Autobewerter für fortgeschrittene [[stem-education|STEM]]-Kursarbeit, gebaut auf von Lehrenden verfassten Rubriken und Referenzlösungen, mit null Grenzkosten pro Einreichung. [[programming-its|SCRIPT]], ein Python-[[intelligent-tutoring|Tutoringsystem]] an der Universität Bielefeld, **vermeidet absichtsvoll kommerzielle LLM-APIs** und hostet ein offenes Llama-70B-Gewichtsmodell selbst, um GDPR und den EU AI Act zu erfüllen (der einige KI-in-der-Bildung-Nutzungen als hochriskant einstuft), wobei IP-Protokolle vom Tutoringsystem getrennt werden, pseudonyme Nutzendennamen genutzt werden und Tastenanschläge nur mit expliziter Zustimmung aufgezeichnet werden — eine Wahl, der die Autoren auch geringere Umweltwirkung und bessere Reproduzierbarkeit zuschreiben.

Qualität ist nicht mehr der automatische Preis der Offenheit. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] wendet [[reinforcement-learning|bestärkendes Lernen]] (DAPO) und überwachte Feinjustierung auf eine offene Modellfamilie an, schürft 440 harte Negative, generiert 40.000 synthetische Antworten, die auf 1.050 schwierigkeitsgeordnete Beispiele reduziert werden, und erreicht **96.52%** im Pädagogik-Benchmark — über Gemini-3 Pros 90.55% — bei 32B dichten Parametern. [[aiawe-automated-writing-evaluation|AiAWE]] erreicht ähnliche Schlussfolgerungen für [[automated-assessment|automatisierte Bewertung von Schreiben]]: ein LoRA-angepasstes offenes Gemma-3-27B-it übertrifft LLaMA-3.3-70B und eine feinjustierte GPT-3.5-Baseline an 480 TOEFL-Essays und läuft auf einem Server der Verbraucherklasse, mit dem markanten Nebenbefund, dass Parameterzahl *kein* verlässlicher Prädiktor nachgelagerter Leistung unter LoRA-Anpassung ist. Die Gegenevidenz verdient gleiche Rechnung: [[mllm-scientific-visualization-literacy|ein Benchmark von sechs MLLMs]] (drei geschlossene, drei offene) fand jedes Open-Source-Modell unter der menschlichen Baseline bei wissenschaftlicher [[visualization|Visualisierungs]]kompetenz, während Gemini den menschlichen Mittelwert bei mehreren Teilmengen übertraf. Offenheit erhöht die Obergrenze der Kontrolle, nicht die der Fähigkeit.

OmniEdu veröffentlicht die gesamte Pipeline statt nur Gewichte: fähigkeitsbalancierte Überwachung über eine 69.999-Beispiele-Mischung hob jede Skala einer offenen 4B/9B/27B K–12-Familie — das justierte 4B-Modell gewann 55 Punkte MathTutorBench-Gerüst-Gewinnrate über seine Basis —, während Wissenszustandsdiagnose ihre schwächste Fähigkeit bei 54.04% blieb ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### Offene Werkzeuge, Tutoren und Forschungsinfrastruktur

Der klarste Fall für offenen Code ist Replikation. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — das erste vollständig offene adaptive Tutoringsystem auf ITS-Prinzipien — paart eine **MIT-lizenzierte Codebasis** mit einer **Creative-Commons-Bibliothek (CC BY)** aus OpenStax-Algebra-Lehrbüchern, plus [[knowledge-tracing|Knowledge Tracing]], A/B-Testing und LTI-Unterstützung; sein explizites Designziel ist, dass eine Forscherin ein Experiment laufen lassen und dann das gesamte End-to-End-Rahmenwerk, Inhalte und Plattform als Repository-Link veröffentlichen kann. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] macht dasselbe Argument auf der Methodenschicht und ersetzt Erwartungsmaximierungs-Punktschätzer durch volle Bayessche Inferenz (HMC, variational inference, Pathfinder, optimization) in einem offenen Python-Paket, das die Unsicherheit offenlegt, von der A/B-Vergleiche adaptiver Interventionen abhängen. [[deeptutor]] veröffentlicht ein vollständiges [[agentic-ai|agentisches]] Tutoringsrahmenwerk mit einem Trace-Forest-Lernendengedächtnis — Apache 2.0, und bis Ende 2026 ein voller Lernarbeitsraum statt nur der Pipelines, die seine Studie benchmarkt — und [[mooc-to-maic|MAIC]]s Klassenzimmergenerator OpenMAIC verschifft unter MIT neben der Studie, die ihn evaluiert, sodass ein Kurs generiert, selbst gehostet und inspiziert werden kann statt nur darüber gelesen zu werden; [[vismatic-secure-sandbox-cs-education|VISMATIC]] veröffentlicht seine containerisierte Sandbox für prozessorientierte Überwachung, sodass andere Institutionen das Integritätsmodell übernehmen können statt der Version des Anbieters. Offener Code trägt auch die Transparenzlast: die Skripte für die affektbewussten Tutoring-Prompts von [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] sind zur Inspektion und weitere [[llm-training-and-fine-tuning|pädagogische Training]]arbeit veröffentlicht. Offene Infrastruktur setzt den Referenzpunkt dafür, was Bildungsagenten tun sollten: der [[agentic-ai-education-scoping-review|Scoping Review der Wissensbasis zu 474 agentischen KI-Studien]] nutzt ein schnell wachsendes Open-Source-Agentenprojekt als seinen „frontier agent paradigm"-Benchmark und findet, dass Bildungssystemen noch governierte Werkzeugorchestrierung, persistenten Speicher, langhorizontale Planung und prüfbare Handlung fehlen.

### Offene Benchmarks, Datensätze und Methodentransparenz

Mehrere Beiträge hier sind offene *Evaluationsinfrastruktur* statt Systeme. [[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark]] (CDPK + SEND, gebaut aus echten chilenischen Lehrkraftprüfungs-Items) umfasst 97 Modelle: offengewichtiges DeepSeek R1 erreichte 86.65% gegenüber einer Top-10 meist geschlossener Schlussfolgerungsmodelle, und die Kosten-Genauigkeit-Frontier bewegte sich von ~50% auf ~82% bei \$0.10/M Eingabe-Token zwischen April 2024 und Juni 2025 — wobei offenes Qwen-3 8B bei 3.5¢ das beste geschlossene Modell von April 2024 bei über 400-fach niedrigeren Kosten nahezu erreichte. Leistung fällt scharf unter etwa 8B Parametern, was eine praktische Größenrandbedingung für Campus-Einsätze ist. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] veröffentlicht einen Datensatz, ein Schema und einen Prototyp für spur-basierte Evaluation sozial intelligenten Multi-Agenten-Tutorings (540 Teilnehmende, 360 Sitzungen, 1.440 Aufgabenepisoden). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] zeigt den kulturellen Fall für offene Daten: 24.795 Anweisungs-Antwort-Paare über sieben Sprachen und 41 pädagogische Techniken aus vedischen und klassischen Quellen, abgestimmt auf das CBSE-[[curriculum-design|Curriculum]], was ein kompaktes 7B-Modell ein weit größeres allgemeines Referenzmodell annähern ließ (medianer Richterpunktewert 6.39 vs 6.54) zu einem Bruchteil der Einsatzkosten. Von Studierenden verfasste [[benchmark|Benchmarks]] sind ein anderer Weg zur Offenheit: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] kuratiert 80 langhorizontale akademische Aufgaben aus 230 von Studierenden eingereichten Kandidaten (über 25+ professionelle Domänen, 16 erfordern CUDA-GPUs, laufen in isolierten Docker-Sandboxes) und erweitert ein offenes Agentenökosystem auf akademische Evaluation. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] argumentieren, dass Offenheit auch eine [[sustainability|Umwelt]]pflicht ist: alle AIED-2025-Papiere reviewend fanden sie ein Muster der „LLM adoption without disclosure" und reagierten mit einer Open-Source-Messmethodik — Softwarewerkzeuge plus eine Formel, die Rechenaufwand schätzt, selbst wenn Parameterzahlen unbekannt sind.

### Offene Bildungsressourcen und offene Inhalte

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] ist der einzige Artikel der Wissensbasis, in dem **offene Bildungsressourcen der zentrale Gegenstand** sind statt einer beiläufigen Referenz. Sie bauen einen On-Premise-KI-Wissensbasis-Assistenten für die [[cs-education|Informatikbildung]] aus 82 OER-Dokumenten auf Hardware der Verbraucherklasse (eine RTX 3060 mit 12 GB VRAM), kombiniert strukturierte Extraktion, [[rag|retrieval-augmented generation]] und NF4 4-Bit-quantisierungsbewusste Feinjustierung. Feinjustierung fügte echten Wert über Retrieval hinaus hinzu (Qwen-7B 69.8%, +3.2 pp, p = 0.031; DeepSeek-MoE 78.6%, +12.0 pp, p < 0.001, einschließlich 82.3% bei Multi-Hop-Schlussfolgern); quantisierungsbewusste Justierung hielt die 4-Bit-Genauigkeitslücke bei 1.7 und 1.2 pp, während VRAM um ~38% und Energie auf 1.8 mWh pro Anfrage gesenkt wurde (43.8% unter der Baseline); und quantisierungsbedingte [[hallucination-risk|Halluzination]] wurde teils durch Feinjustierung zurückgewonnen (DeepSeek-MoE 10.4% → 8.1%), gemessen über ein zweistufiges NLI-Verfahren gegen abgerufene OER-Chunks. Der analytische Punkt ist generalisierbar: ein offen lizenziertes Korpus kann ohne Verlagsgenehmigungen indexiert, angepasst und ausgeliefert werden, und das Verankern eines Assistenten in abgerufenem OER gibt eine prüfbare Herkunftsspur —, was genau das ist, was ein proprietäres Lehrbuchkorpus nicht bieten kann.

Offenheit von Inhalten und Offenheit von Modellen sind auch anderswo Komplemente. OATutor kuratiert CC-BY-OpenStax-Lehrbücher in ein System, dessen Code MIT-lizenziert ist, sodass die Lizenzbedingungen von Code und Inhalten durch Design kompatibel gehalten werden müssen. [[egai-power-systems-education|Eine offene, ausführbare Modulbibliothek für KI in Energiesystemen]] senkt die Eintrittsbarriere mit Jupyter-Notebooks, die lokal oder in Colab laufen, geliefert über einen IEEE-Onlinekurs. Und ein projektbasiertes [[engineering-education|Maschinenbau]]-Curriculum veröffentlicht sein Syllabus, seine Daten und seinen Code in Open-Access-Repositories, damit andere Institutionen es übernehmen können ([[mechanical-engineering-ai-curriculum-2026]]). Benachbart zu OER ist offene *Kurs*auslieferung der Ort, wo sich die Ökonomie am schnellsten verschiebt: MAIC berichtet kollabierende MOOC-Produktion von etwa \$25.000 und 60 Stunden pro Kurs auf unter \$2 und 30 Minuten mit LLM-getriebener Multi-Agenten-Generierung. Wenn Inhaltsproduktion nahezu frei wird, bewegt sich das OER-Argument weg von Produktionskosten und hin zu Lizenzfreiheit, Verifizierbarkeit und Qualitätssicherung —, was ein anderes Angebot ist als das, auf dem OER-Advokatur gebaut war.

### Vorteile und Lasten

- **Vorteile.** Datensouveränität und regulatorische Compliance ([[privacy|Datenschutz]], [[regulation|Regulierung]]) durch lokales Hosting; Kostenkontrolle, da lokale Inferenz keine Anfragengebühr hat und offene Modelle sich proprietärer Qualität zu einem Bruchteil des Preises annähern ([[singh-eduqwen-pedagogical-rl-2026]]); Reproduzierbarkeit, weil Rahmenwerk, Prompts, Inhalte und Daten mit der Studie verschiffen können ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); Prüfbarkeit und Sicherheitsreview unter [[governance|institutioneller Governance]]; und die Fähigkeit, für eine spezifische [[pedagogy|Pädagogik]] oder die Wissensbasis einer spezifischen Gemeinschaft zu feinjustieren ([[iks-instruct-dataset-indian-knowledge]]).
- **Lasten.** Lokales Hosting erfordert Hardware und Expertise, die viele Institutionen nicht haben; Qualität und [[pedagogical-safety|Sicherheit]] sind nicht out of the box garantiert — offene Modelle können bei spezifischen Kompetenzen hinter menschlichen Baselines zurückbleiben ([[mllm-scientific-visualization-literacy]]) und Quantisierung erhöht Halluzinationsraten, sofern nicht gemindert ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]); jemand muss das System nach der Veröffentlichung warten ([[programming-its]] dokumentiert ein kleines Promotionsstudierendenteam, sicherheitsseitige Exposition im Work-in-Progress und eine erhebliche Compliance-Last); und eine offene Lizenz ist eine Erlaubnis, kein funktionierendes Produkt — die Wartung, die ein veröffentlichtes System nutzbar hält, fällt auf die [[educational-technology-developers|Bildungstechnologie-Entwicklerinnen und -Entwickler]], die es gebaut haben, und ihre Finanzierung und Anreize entscheiden, ob ein forkbares Repository, ein gewartetes Produkt oder keines von beiden das ist, was eine Institution erbt, wenn die Förderung endet.

### Offenheit in die Praxis bringen

- **Für Lehrende und Institutionen:** prüfen Sie die Lizenz der *Inhalte* ebenso wie den Code, bevor Sie ein System übernehmen — MIT-Code über CC-BY-Lehrbüchern ist wiederverwendbar, aber eine permissive Lizenz garantiert nicht, dass Tutoringpfade, Itembanken oder Übersetzungen existieren. Bevorzugen Sie offene Modelle, wenn Studierendendaten den Campus rechtlich nicht verlassen können ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), aber benchmarken Sie das Modell an *Ihrer* Aufgabe, statt allgemeinen Leaderboards zu vertrauen ([[cdpk-pedagogy-benchmark-llms]]). Budgetieren Sie dafür, dass jemand das System nach dem Piloten betreibt und evaluiert.
- **Für Entwicklerinnen, Entwickler und Forschende:** verschiffen Sie das Ganze — OATutors End-to-End-Veröffentlichung (Code, Inhalte, Experimentvorrichtung) ist der Replizierbarkeitsstandard, den diese Literatur fortlaufend belohnt. Veröffentlichen Sie Prompts und Extraktionsschemata neben Gewichten ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Berichten Sie Rechenaufwand und Kohlenstoff ([[aied-carbon-footprint-reporting]]). Verankern Sie Assistenten in offen lizenzierten Korpora, damit Herkunft prüfbar und Anpassung rechtmäßig ist ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Nutzen Sie quantisierungsbewusste Feinjustierung statt schlichter Quantisierung, wenn Genauigkeit und Energie beide zählen, und halten Sie Code- und Inhaltslizenzen kompatibel.

## Verbundene Konzepte

- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]

## Verbundene Artikel

- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-premise OER AI knowledge-base assistant on consumer hardware (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — MIT-licensed adaptive tutor with a CC BY OpenStax content library (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Open 32B pedagogical model outperforming far larger proprietary systems (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Drop-in FERPA-compliant local-LLM autograder
- [[programming-its]] — Self-hosted open-weight LLM for GDPR/EU AI Act compliance in a Python ITS
- [[aiawe-automated-writing-evaluation]] — LoRA-adapted open-weight model for automated writing evaluation
- [[stanbkt-bayesian-knowledge-tracing]] — Open Python package for full Bayesian knowledge tracing
- [[deeptutor]] — Fully open-source agentic tutoring framework with learner memory
- [[vismatic-secure-sandbox-cs-education]] — Open containerized sandbox for process-oriented assessment
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affective math tutor with an open codebase
- [[cdpk-pedagogy-benchmark-llms]] — Open pedagogy benchmark across 97 models and the cost–accuracy frontier
- [[astra-multi-agent-tutoring-benchmark-2026]] — Open dataset and prototype for trace-based multi-agent tutoring evaluation
- [[mllm-scientific-visualization-literacy]] — Open models below the human baseline on visualization literacy
- [[iks-instruct-dataset-indian-knowledge]] — Open multilingual dataset for culturally grounded instruction
- [[aied-carbon-footprint-reporting]] — Open-source method for reporting LLM environmental cost
- [[egai-power-systems-education]] — Open executable module library for engineering AI
- [[mechanical-engineering-ai-curriculum-2026]] — Publicly available curriculum, data, and code
- [[mooc-to-maic]] — LLM-driven course generation and the changing economics of course production
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching
