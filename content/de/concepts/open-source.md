---
title: Quelloffene Software (Open Source)
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-30T23:30:00-04:00"
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
source_updated: "2026-10-28T19:13:23-04:00"
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

Qualität ist nicht mehr der automatische Preis der Offenheit. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] wendet [[reinforcement-learning|bestärkendes Lernen]] (DAPO) und überwachte Feinjustierung auf eine offene Modellfamilie an, schürft 440 harte Negative, generiert 40.000 synthetische Antworten, die auf 1.050 schwierigkeitsgeordnete Beispiele reduziert werden, und erreicht **96.52%** im Pädagogik-Benchmark — über Gemini-3 Pros 90.55% — bei 32B dichten Parametern. [[aiawe-automated-writing-evaluation|AiAWE]] erreicht ähnliche Schlussfolgerungen für [[automated-essay-scoring|automatisierte Bewertung von Schreiben]]: ein LoRA-angepasstes offenes Gemma-3-27B-it übertrifft LLaMA-3.3-70B und eine feinjustierte GPT-3.5-Baseline an 480 TOEFL-Essays und läuft auf einem Server der Verbraucherklasse, mit dem markanten Nebenbefund, dass Parameterzahl *kein* verlässlicher Prädiktor nachgelagerter Leistung unter LoRA-Anpassung ist. Die Gegenevidenz verdient gleiche Rechnung: [[mllm-scientific-visualization-literacy|ein Benchmark von sechs MLLMs]] (drei geschlossene, drei offene) fand jedes Open-Source-Modell unter der menschlichen Baseline bei wissenschaftlicher [[visualization|Visualisierungs]]kompetenz, während Gemini den menschlichen Mittelwert bei mehreren Teilmengen übertraf. Offenheit erhöht die Obergrenze der Kontrolle, nicht die der Fähigkeit.

OmniEdu veröffentlicht die gesamte Pipeline statt nur Gewichte: fähigkeitsbalancierte Überwachung über eine 69.999-Beispiele-Mischung hob jede Skala einer offenen 4B/9B/27B K–12-Familie — das justierte 4B-Modell gewann 55 Punkte MathTutorBench-Gerüst-Gewinnrate über seine Basis —, während Wissenszustandsdiagnose ihre schwächste Fähigkeit bei 54.04% blieb ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### Offene Werkzeuge, Tutoren und Forschungsinfrastruktur

Der klarste Fall für offenen Code ist Replikation. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — das erste vollständig offene adaptive Tutoringsystem auf ITS-Prinzipien — paart eine **MIT-lizenzierte Codebasis** mit einer **Creative-Commons-Bibliothek (CC BY)** aus OpenStax-Algebra-Lehrbüchern, plus [[knowledge-tracing|Knowledge Tracing]], A/B-Testing und LTI-Unterstützung; sein explizites Designziel ist, dass eine Forscherin ein Experiment laufen lassen und dann das gesamte End-to-End-Rahmenwerk, Inhalte und Plattform als Repository-Link veröffentlichen kann. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] macht dasselbe Argument auf der Methodenschicht und ersetzt Erwartungsmaximierungs-Punktschätzer durch volle Bayessche Inferenz (HMC, variational inference, Pathfinder, optimization) in einem offenen Python-Paket, das die Unsicherheit offenlegt, von der A/B-Vergleiche adaptiver Interventionen abhängen. [[deeptutor]] veröffentlicht ein vollständiges [[agentic-ai|agentisches]] Tutoringsrahmenwerk mit einem Trace-Forest-Lernendengedächtnis — Apache 2.0, und bis Ende 2026 ein voller Lernarbeitsraum statt nur der Pipelines, die seine Studie benchmarkt — und [[mooc-to-maic|MAIC]]s Klassenzimmergenerator OpenMAIC verschifft unter MIT neben der Studie, die ihn evaluiert, sodass ein Kurs generiert, selbst gehostet und inspiziert werden kann statt nur darüber gelesen zu werden; [[vismatic-secure-sandbox-cs-education|VISMATIC]] veröffentlicht seine containerisierte Sandbox für prozessorientierte Überwachung, sodass andere Institutionen das Integritätsmodell übernehmen können statt der Version des Anbieters. Offener Code trägt auch die Transparenzlast: die Skripte für die affektbewussten Tutoring-Prompts von [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] sind zur Inspektion und weitere [[llm-training-and-fine-tuning|pädagogische Training]]arbeit veröffentlicht. Offene Infrastruktur setzt den Referenzpunkt dafür, was Bildungsagenten tun sollten: der [[agentic-ai-education-scoping-review|Scoping Review der Wissensbasis zu 474 agentischen KI-Studien]] nutzt ein schnell wachsendes Open-Source-Agentenprojekt als seinen „frontier agent paradigm"-Benchmark und findet, dass Bildungssystemen noch governierte Werkzeugorchestrierung, persistenten Speicher, langhorizontale Planung und prüfbare Handlung fehlen.

### Offene Benchmarks, Datensätze und Methodentransparenz

Mehrere Beiträge hier sind offene *Evaluationsinfrastruktur* statt Systeme. [[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark]] (CDPK + SEND, gebaut aus echten chilenischen Lehrkraftprüfungs-Items) umfasst 97 Modelle: offengewichtiges DeepSeek R1 erreichte 86.65% gegenüber einer Top-10 meist geschlossener Schlussfolgerungsmodelle, und die Kosten-Genauigkeit-Frontier bewegte sich von ~50% auf ~82% bei \$0.10/M Eingabe-Token zwischen April 2024 und Juni 2025 — wobei offenes Qwen-3 8B bei 3.5¢ das beste geschlossene Modell von April 2024 bei über 400-fach niedrigeren Kosten nahezu erreichte. Leistung fällt scharf unter etwa 8B Parametern, was eine praktische Größenrandbedingung für Campus-Einsätze ist. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] veröffentlicht einen Datensatz, ein Schema und einen Prototyp für spur-basierte Evaluation sozial intelligenten Multi-Agenten-Tutorings (540 Teilnehmende, 360 Sitzungen, 1.440 Aufgabenepisoden). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] zeigt den kulturellen Fall für offene Daten: 24.795 Anweisungs-Antwort-Paare über sieben Sprachen und 41 pädagogische Techniken aus vedischen und klassischen Quellen, abgestimmt auf das CBSE-[[curriculum-design|Curriculum]], was ein kompaktes 7B-Modell ein weit größeres allgemeines Referenzmodell annähern ließ (medianer Richterpunktewert 6.39 vs 6.54) zu einem Bruchteil der Einsatzkosten. Von Studierenden verfasste [[benchmark|Benchmarks]] sind ein anderer Weg zur Offenheit: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] kuratiert 80 langhorizontale akademische Aufgaben aus 230 von Studierenden eingereichten Kandidaten (über 25+ professionelle Domänen, 16 erfordern CUDA-GPUs, laufen in isolierten Docker-Sandboxes) und erweitert ein offenes Agentenökosystem auf akademische Evaluation. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] argumentieren, dass Offenheit auch eine [[sustainability|Umwelt]]pflicht ist: alle AIED-2025-Papiere reviewend fanden sie ein Muster der „LLM adoption without disclosure" und reagierten mit einer Open-Source-Messmethodik — Softwarewerkzeuge plus eine Formel, die Rechenaufwand schätzt, selbst wenn Parameterzahlen unbekannt sind.

### Wo offene Inhalte auf offenen Code treffen

Offene Bildungsressourcen haben ihre eigene Seite, [[open-education|offene Bildung]], weil das Argument dort pädagogisch und lizenzgeleitet ist statt infrastrukturell. Was auf diese Seite gehört, ist die Naht, an der die beiden Offenheiten aufeinandertreffen, und sie ist schmaler, als es aussieht.

Die Naht ist eine Lizenzkompatibilitäts-Randbedingung. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] paart eine MIT-lizenzierte Codebasis mit einer CC-BY-Inhaltsbibliothek aus OpenStax-Algebra-Lehrbüchern, was heißt, dass die Bedingungen des Codes und die Bedingungen der Inhalte durch Design kompatibel gehalten werden müssen, und eine permissive Lizenz auf der einen Seite liefert die andere nicht mit. Die Naht erscheint auch dort, wo ein offen lizenziertes Korpus das ist, was ein On-Premise-System rechtmäßig betreibbar macht: [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] indexieren 82 OER-Dokumente in einen Wissensbasis-Assistenten auf einer Consumer-GPU mit 12 GB, und die ganze Geschichte ist eine Open-Source-Geschichte über Quantisierung, Halluzination und Provenienz statt ein Argument über Lehrbücher.

Was diese Seite nicht tut, ist, für die Ressource zu argumentieren. Ob ein maschinengeschriebenes Lehrbuch standardmäßig offen ist, ob eine Lizenz einen generierten Remix überlebt und ob offene Pädagogik etwas Messbares lehrt, sind Fragen für [[open-education|offene Bildung]], und es sind die Fragen, um die es der aktuellen Literatur des Felds tatsächlich geht.

### Vorteile und Lasten

- **Vorteile.** Datensouveränität und regulatorische Compliance ([[privacy|Datenschutz]], [[regulation|Regulierung]]) durch lokales Hosting; Kostenkontrolle, da lokale Inferenz keine Anfragengebühr hat und offene Modelle sich proprietärer Qualität zu einem Bruchteil des Preises annähern ([[singh-eduqwen-pedagogical-rl-2026]]); Reproduzierbarkeit, weil Rahmenwerk, Prompts, Inhalte und Daten mit der Studie verschiffen können ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); Prüfbarkeit und Sicherheitsreview unter [[governance|institutioneller Governance]]; und die Fähigkeit, für eine spezifische [[pedagogy|Pädagogik]] oder die Wissensbasis einer spezifischen Gemeinschaft zu feinjustieren ([[iks-instruct-dataset-indian-knowledge]]).
- **Lasten.** Lokales Hosting erfordert Hardware und Expertise, die viele Institutionen nicht haben; Qualität und [[pedagogical-safety|Sicherheit]] sind nicht out of the box garantiert — offene Modelle können bei spezifischen Kompetenzen hinter menschlichen Baselines zurückbleiben ([[mllm-scientific-visualization-literacy]]) und Quantisierung erhöht Halluzinationsraten, sofern nicht gemindert ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]); jemand muss das System nach der Veröffentlichung warten ([[programming-its]] dokumentiert ein kleines Promotionsstudierendenteam, sicherheitsseitige Exposition im Work-in-Progress und eine erhebliche Compliance-Last); und eine offene Lizenz ist eine Erlaubnis, kein funktionierendes Produkt — die Wartung, die ein veröffentlichtes System nutzbar hält, fällt auf die [[educational-technology-developers|Bildungstechnologie-Entwicklerinnen und -Entwickler]], die es gebaut haben, und ihre Finanzierung und Anreize entscheiden, ob ein forkbares Repository, ein gewartetes Produkt oder keines von beiden das ist, was eine Institution erbt, wenn die Förderung endet.

### Offenheit in die Praxis bringen

- **Für Lehrende und Institutionen:** prüfen Sie die Lizenz der *Inhalte* ebenso wie den Code, bevor Sie ein System übernehmen — MIT-Code über CC-BY-Lehrbüchern ist wiederverwendbar, aber eine permissive Lizenz garantiert nicht, dass Tutoringpfade, Itembanken oder Übersetzungen existieren. Bevorzugen Sie offene Modelle, wenn Studierendendaten den Campus rechtlich nicht verlassen können ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), aber benchmarken Sie das Modell an *Ihrer* Aufgabe, statt allgemeinen Leaderboards zu vertrauen ([[cdpk-pedagogy-benchmark-llms]]). Budgetieren Sie dafür, dass jemand das System nach dem Piloten betreibt und evaluiert.
- **Für Entwicklerinnen, Entwickler und Forschende:** verschiffen Sie das Ganze — OATutors End-to-End-Veröffentlichung (Code, Inhalte, Experimentvorrichtung) ist der Replizierbarkeitsstandard, den diese Literatur fortlaufend belohnt. Veröffentlichen Sie Prompts und Extraktionsschemata neben Gewichten ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Berichten Sie Rechenaufwand und Kohlenstoff ([[aied-carbon-footprint-reporting]]). Verankern Sie Assistenten in offen lizenzierten Korpora, damit Herkunft prüfbar und Anpassung rechtmäßig ist ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Nutzen Sie quantisierungsbewusste Feinjustierung statt schlichter Quantisierung, wenn Genauigkeit und Energie beide zählen, und halten Sie Code- und Inhaltslizenzen kompatibel.

## Verbreitete Fehlvorstellungen

**„Offene Gewichte, Open Source, offene Inhalte und offene Pädagogik sind dieselbe Offenheit."** Es sind vier verschiedene Dinge, und sie scheitern unabhängig voneinander. Die Argumente zu Ressource und Praxis liegen auf [[open-education|offener Bildung]]; diese Seite behandelt die Artefakte, die ein Erbauer ausliefert und lizenziert. Offene *Gewichte* erlauben lokalen Einsatz; offener *Quellcode* erlaubt Modifikation; offene *Inhalte* erlauben Wiederverwendung und Anpassung; offene *Pädagogik* betrifft, wer entscheidet, was gelehrt wird. Ein Modell mit offenen Gewichten und proprietärer Trainingspipeline, verpackt in ein Werkzeug mit geschlossener Oberfläche und einer Inhaltsbibliothek mit allen Rechten vorbehalten, ist in einem der vier Sinne „offen" und in dreien geschlossen.

Das Wort selbst ist vorgelagert umstritten. [[deimann-rethinking-openness-ai-2026|Deimann und Lukács (2026)]] beobachten, dass die Offenheitsdebatte über die Open-Source-Community die KI erreichte, mit der ersten Open Source AI Definition, die 2024 veröffentlicht wurde, und sie argumentieren, dass Offenheit dort als Imaginäres statt als Eigenschaft fungiert: eine Bestrebung, die Institutionen in der Sprache übernehmen, während das umgebende Regime intakt bleibt. Das ist eine nützliche Kontrolle für diese Seite, weil eine Lizenz eine Eigenschaft ist und eine Bewegung nicht.

**„Offen heißt billiger."** Offene Gewichte machen lokalen Einsatz möglich, aber **jemand muss das System weiterhin hosten, patchen und evaluieren** — und dieser Jemand muss die Förderung überleben, die die Arbeit finanziert hat. Die in dieser Literatur benannten Lasten sind konkret: Infrastruktur, [[pedagogical-safety|Sicherheits]]zusicherung und Wartung. Die Gesamtkosten können eine Lizenzgebühr übersteigen, und Institutionen, die Offenheit als Ersparnis behandeln, entdecken die Wartungspflicht häufig erst, nachdem sich das Projektpersonal zerstreut hat.

**„Geschlossene Frontier-Modelle sind einfach besser, also sind offene Alternativen ein Rückfall."** Die Lücke ist schmaler, als diese Annahme nahelegt. In [[cdpk-pedagogy-benchmark-llms|dem Pedagogy Benchmark]] (CDPK + SEND, gebaut aus echten chilenischen Lehrkraftprüfungs-Items) über 97 Modelle erreichte das offengewichtige **DeepSeek R1 86,65 %**, gegenüber einer Top-10, die überwiegend aus geschlossenen Schlussfolgerungsmodellen bestand — und der Kosten-Genauigkeit-Vergleich läuft weiter in die offene Richtung. Das verbleibende Argument für Offenheit betrifft daher Kontrolle und Auditierbarkeit, nicht ein Fähigkeitsopfer.

**„Die Gewichte zu veröffentlichen heißt, die Arbeit zu veröffentlichen."** Die stärkeren offenen Beiträge veröffentlichen die Pipeline. OmniEdu publiziert fähigkeitsbalancierte Überwachung über eine 69.999-Beispiele-Mischung statt nur finale Gewichte, was jede Skala einer offenen 4B/9B/27B-K–12-Familie hob, wobei das justierte 4B-Modell **55 Punkte** MathTutorBench-Scaffolding-Leistung gewann; [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] dokumentiert ebenso sein RL- und Feinjustierungsverfahren, einschließlich 440 geschürfter harter Negative und 40.000 generierter Antworten. Gewichte ohne das Rezept reproduzieren ein Ergebnis, ohne die Methode zu reproduzieren.

## Verbundene Konzepte

- [[open-education]]
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

- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-Premise-OER-KI-Wissensbasis-Assistent auf Consumer-Hardware (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — MIT-lizenzierter adaptiver Tutor mit einer CC-BY-OpenStax-Inhaltsbibliothek (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Offenes 32B-pädagogisches Modell, das weit größere proprietäre Systeme übertrifft (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Drop-in-FERPA-konformer lokaler LLM-Autobewerter
- [[programming-its]] — Selbst gehostetes offen gewichtetes LLM zur GDPR/EU-AI-Act-Konformität in einem Python-ITS
- [[aiawe-automated-writing-evaluation]] — LoRA-angepasstes offen gewichtetes Modell für die automatisierte Bewertung von Schreiben
- [[stanbkt-bayesian-knowledge-tracing]] — Offenes Python-Paket für vollständiges bayessches Knowledge Tracing
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — Vollständig quelloffenes agentisches Tutoringsrahmenwerk mit Lernendengedächtnis
- [[vismatic-secure-sandbox-cs-education]] — Offene containerisierte Sandbox für prozessorientierte Bewertung
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affektiver Mathetutor mit offener Codebasis
- [[cdpk-pedagogy-benchmark-llms]] — Offener Pädagogik-Benchmark über 97 Modelle und die Kosten-Genauigkeit-Frontier
- [[astra-multi-agent-tutoring-benchmark-2026]] — Offener Datensatz und Prototyp für spur-basierte Evaluation von Multi-Agenten-Tutoring
- [[mllm-scientific-visualization-literacy]] — Offene Modelle unter der menschlichen Baseline bei Visualisierungskompetenz
- [[iks-instruct-dataset-indian-knowledge]] — Offener mehrsprachiger Datensatz für kulturell verankerte Instruktion
- [[aied-carbon-footprint-reporting]] — Quelloffene Methode zur Berichterstattung über die Umweltkosten von LLMs
- [[egai-power-systems-education]] — Offene ausführbare Modulbibliothek für KI im Maschinenbau
- [[mooc-to-maic]] — LLM-getriebene Kursgenerierung und die sich wandelnde Ökonomie der Kursproduktion
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Offene Foundation-Modelle für Lernen und Lehren
