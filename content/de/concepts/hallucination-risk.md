---
title: Halluzinationsrisiko
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
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

> **Halluzinationsrisiko** — die Gefahr, dass KI-Systeme in Bildungskontexten plausible, aber faktisch falsche oder erfundene Inhalte erzeugen, wo solche Fehler [[learners|Lernende]] in die Irre führen, [[trust|Vertrauen]] untergraben und ungültige Assessments hervorbringen können. Halluzination ist in der Bildung besonders folgenreich, weil Studierenden das Domänenwissen fehlen kann, um KI-Fehler zu erkennen, und Lehrende sich auf KI-generierte Diagnosen oder Feedback stützen können, die autoritativ erscheinen, aber unbegründet sind.

## Fragen zum Nachdenken

- Studierenden fehlt oft das Domänenwissen, um den Fehler einer KI zu erkennen, und Lehrende können KI-Diagnosen vertrauen, die autoritativ klingen. Wie macht diese Wissensasymmetrie zwischen KI und lernender Person Halluzination in der Bildung besonders gefährlich?
- Eine Studie fand, dass eine KI, die handgeschriebene Mathematik von Studierenden diagnostizierte, Belegzitate erfinden konnte, die nicht vorhanden waren, und dabei Konfidenz behauptete. Wenn eine KI sicher klingt und „Belege“ anführt, was sollte Sie innehalten und prüfen lassen?
- Wenn ein [[intelligent-tutoring|KI-Tutor]] falsche Lösungen übervalidiert und gültige, aber suboptimale Argumentation übermäßig zurückweist, wie wäre der langfristige Effekt auf die Studierenden und Lehrenden, die ihr vertrauen?
- Die Seite schlägt Human-in-the-Loop-Prüfung, belegbewusste Konfidenzkalibrierung und Verankerung in verifizierten Quellen als Milderungsmaßnahmen vor. Welche davon erscheint in Ihrem eigenen Kontext am machbarsten, und was könnte sie dennoch übersehen?
- Wie könnte Halluzination mit übermäßiger Abhängigkeit interagieren: Warum ist ein KI-Fehler am gefährlichsten, wenn Nutzende der Ausgabe unkritisch vertrauen, statt wenn sie skeptisch sind?
- Wenn Sie ein [[ai-feedback-quality|KI-Feedback]]-Werkzeug für Ihre Studierenden entwerfen würden, welche konkreten Schutzmaßnahmen würden Sie gegen plausible, aber falsche Ausgaben verlangen — und wie würden Sie wissen, dass sie wirken?

## Einführung

Halluzination in Bildungs-KI nimmt mehrere Formen an, die in den Artikeln dieser Wissensbasis dokumentiert sind: erfundene Belege im [[assessment|studentischen Assessment]], überkonfidente Fehldiagnose des Wissens Lernender, und plausibel klingende, aber falsche Erklärungen, die Studierende als Wahrheit akzeptieren. Das Risiko ist in der Bildung verstärkt, weil die Wissensasymmetrie zwischen KI und lernender Person bedeutet, dass die lernende Person schlecht positioniert ist, KI-Ausgaben zu prüfen. Ein weiteres Setting sind KI-generierte Kurslektüren, die für ein Lehrbuch einspringen: In einem Graduiertenkurs, der seinen kommerziellen Text auf diese Weise ersetzte, trugen nur etwa 0.80% von 4.487 protokollierten Seiten ein In-Text-Zitat im APA-Stil, und DOI-Zeichenfolgen fehlten praktisch völlig, sodass die meisten Behauptungen nicht innerhalb des Artefakts auditiert werden konnten ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Diese Lücke der Nachvollziehbarkeit ist von einer falschen Antwort zu unterscheiden, weil der Text als autoritativ liest und dabei nur begrenzte interne Mittel der Bestätigung bietet.

Ein Review von 125 Studien grenzt die Prävalenz und die Erkennungslücke ein: Halluzinationsraten von 10–40%, wobei Medizinstudierende KI-Fehler nur in 44–55% der Fälle erkannten ([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]).

**Assessment-Halluzination** ist besonders schädlich. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** fand, dass LLMs beim Diagnostizieren kognitiver Fähigkeiten Belegzitate erfinden, die in der Handschrift der Studierenden nicht vorkommen, wobei 58.5% der falschen Diagnosen von falschen Behauptungen beleglicher Konfidenz begleitet waren. **[[llm-fallacy-misattribution]]** dokumentierte systematische Überattribution von Belegen im [[llm|LLM]]-Schließen — Modelle behaupten belegliche Unterstützung, wo keine existiert. Beides verbindet sich mit Anliegen an [[ai-ed-evaluation|Evaluation von KI in der Bildung]] und [[knowledge-tracing|Knowledge Tracing]] hinsichtlich der [[assessment-validity|Validität von Assessments]]. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] fügen zwei Fehlermodi hinzu, die sichtbar werden, wenn KI-Ausgaben bewertet statt inspiziert werden: erfundene Einzelheiten, die die Bewertung überleben — ein rezensiertes Paper, das es nicht gibt, samt nicht auflösbarer DOI, und ein als 378 berichteter Stichprobenumfang, wo die Quelle 329 sagte —, und Selbstwiderspruch innerhalb einer einzelnen Antwort, wo das Modell sich zur richtigen Option hinschloss und dann in seiner abschließenden Zusammenfassung eine andere berichtete. Weil Literaturlisten derzeit auf Formatierung statt auf Genauigkeit bewertet werden, erreicht diese Fehlerklasse eine bestehende Note, während sie die Person in die Irre führt, die dasselbe Werkzeug zum Wiederholen nutzt.

In einem Design-Piloten für Assessments fanden [[authentic-assessments-generative-ai-pilot-2026|Paula et al. (2026)]] erfundene Referenzen und unrealistische Zeitschätzungen, die wiederholtes Prompting überlebten und erhebliche akademische Überarbeitung erforderten — Halluzination in einem auf Lehrende gerichteten Entwurfswerkzeug statt in studentischer Arbeit.

**Strategische [[misconceptions|Missverständnisse]]** sind ein subtilerer Verwandter offener Halluzination. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] veranlassten sieben offene Gewichtsmodelle, eine „[[socratic-method|sokratische]] Falle“ für 35 zentrale Informatikkonzepte zu erzeugen — eine Erklärung, die flüssig und autoritativ ist, während sie auf einem subtilen, fachspezifischen Fehler ruht —, und drei Domänenexpertinnen und -experten bestätigten 221 von 241 veranlassten Segmenten (91.7%) als strategische Missverständnisse, ohne signifikante Unterschiede zwischen Informatikdomänen. Die Fehler waren überwiegend konzeptuell statt faktisch (66.5% gegenüber 33.5%) und keine rein logisch, und sie wurden als mäßig bis hoch überzeugend bewertet (M = 3.71 auf einer Fünf-Punkte-Skala), wobei Modellidentität 43% der Varianz erklärte. Weil einzelne Aussagen korrekt sein können, während die Beziehung zwischen ihnen falsch ist, genügt Fact-Checking nicht; die Autoren argumentieren, [[ai-literacy|Lernende]] bräuchten konzeptuelle Verifikation und Validierung mentaler Modelle. Sie mahnen zudem, dass die Rate die Fähigkeit unter adversarischem [[prompt-engineering|Prompting]] misst statt die Prävalenz solcher Fehler im gewöhnlichen Gebrauch, und dass keine Studierenden getestet wurden, also keine Täuschung oder kein Lern Ergebnis gemessen wurde.

**Manipulierte statt erfundene Belege.** Ein verwandter Fehlermodus in der [[automated-assessment|automatisierten Bewertung]] ist von außen bewegte Ausgabe. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] red-teamte einen routinemäßigen KI-Bewertungsarbeitsablauf und fand, dass Anweisungen, die in der eingereichten Datei versteckt waren, die Note eines durchfallenden Aufsatzes ohne sichtbare Warnung hoben — in 9 von 9 Iterationen bei einer Strategie und 17 von 18 bei einer anderen. Zwei Details betreffen [[trust-calibration|Vertrauenskalibrierung]]: eine erkannte Injektion wurde blockiert, indem der Chat stillschweigend deaktiviert und der Nutzerin oder dem Nutzer nie gemeldet wurde, und bei einem Lauf, bei dem das Werkzeug ankündigte, nur den offiziellen Aufgabenanweisungen zu folgen, hoben sechs Wiederholungen derselben Datei die Note dennoch. Eine auf diese Weise erhaltene Note trägt keinen Anspruch auf [[assessment-validity|Validität]], und weil die Manipulation keine dauerhafte Spur hinterlässt, bleibt [[human-in-the-loop-ai|die Lehrkraft]] die einzige echte Prüfung für Ausgabe, die darauf angelegt ist, nicht sichtbar zu sein.

Verteidigungen gegen solche Manipulation tragen ihren eigenen Trade-off: eine mehrschichtige Leitplanken-Pipeline ließ 46.34% der Injektionen erfolgreich und Prompt Guard 38.48%, während NeMo Guardrails jeden Angriff blockierte, aber 16.22% harmloser Studierendenanfragen markierte — eine False-Positive-Rate, die in einem Tutor selbst pädagogischer Schaden ist ([[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]).

**Tutoring-Halluzination** beeinflusst das Lernen unmittelbar. **[[yasir-llm-tutoring-agents-2026]]** fand, dass LLMs falsche Lösungen übervalidierten, während sie gültige, aber suboptimale Argumentation übermäßig zurückwiesen — systemische Fehler, die sowohl Studierende als auch Lehrende in die Irre führen würden. **[[eduframetrap-llm-sycophancy-educational-safety]]** und **[[eduguard-safe-rag-llm-tutor]]** adressieren Sicherheitsmechanismen für Bildungs-LLMs. Diese Risiken verbinden sich mit [[pedagogical-safety|pädagogischer Sicherheit]] und Anforderungen an [[human-in-the-loop-ai|Human-in-the-Loop-KI]].

**Milderungsansätze** umfassen [[human-in-the-loop-ai|Human-in-the-Loop]]-Designs, in denen KI das Urteil der [[teacher-role|Lehrkräfte]] stützt statt es zu ersetzen, belegbewusste Architekturen, die Konfidenz an der Qualität der Belege kalibrieren (wie von MathCog befürwortet), und [[rag|RAG]]-basierte Verankerung, die LLM-Ausgaben auf verifizierte Quellen begrenzt. Das Konzept [[cognitive-offloading|übermäßige Abhängigkeit]] ist eng verwandt — Halluzination ist am gefährlichsten, wenn Nutzende KI-Ausgaben unkritisch vertrauen. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] fügt einen Fehlermodus hinzu, den der Milderungs-Stack nicht vollständig abdeckt: über-spezifische institutionelle Behauptungen, wobei etwa 1.03% der protokollierten Seiten einen benannten Campus wie „Sacramento State“ mit assertiven Politikverben über überarbeitete Bleibe-, Tenure- und Beförderungsregeln oder CSU Executive Orders paaren, von denen keine aus dem Text verifizierbar ist. Spezifität ist es, was dies kostspielig macht, da eine erfundene lokale Einzelheit exakt genug aussieht, um die Plausibilitätsprüfung einer Leserin oder eines Lesers zu überstehen, und das von der Studie vorgeschlagene Gegenmittel ist prozedural statt technisch: Erzeugung als Entwurfsproduktion unter Prüfung durch die Lehrkraft behandeln, dann Quellen zu einem retrieval-gestützten Design kuratieren.

## Verbundene Konzepte
- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]
## Verbundene Artikel
- [[ivory-psychology-assessment-integrity-2026]] — Fabricated citations and self-contradicting outputs inside passable student work (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: fluently plausible explanations that are wrong at the conceptual level (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Hidden prompt injections raise AI-graded marks undetected, and detected attacks go unreported (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education
