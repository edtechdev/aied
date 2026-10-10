---
title: Forschungsmethoden in der AIED
created: "2026-08-13T05:48:37-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [ai-education]
assessment: [educational-measurement]
research_method: [experiment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, benchmark, rct, research-methods-aied]
connected_faqs: [research-gaps-aied, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research, reporting-interpreting-aied-research]
translation_of: concepts/research-methods-aied
source_updated: "2026-10-05T10:25:44-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Forschungsmethoden in der AIED** – die Menge empirischer Designs, Datenerhebungsstrategien und Analysetechniken, die Forschende nutzen, um [[ai-education|KI in der Bildung]] zu studieren: ob und wie KI-Werkzeuge Lernen stützen (oder schaden), und unter welchen Bedingungen. Das Korpus der Wissensbasis umspannt experimentelle, Befragungs-, qualitative, designbasierte, rechnerische Benchmark- und Review-Methoden. Jede hat eigene Stärken und Grenzen, und die Wahl unter ihnen beinhaltet Trade-offs zwischen interner Validität (Vertrauen in kausale Behauptungen), externer Validität (Verallgemeinerbarkeit), ökologischer Validität (realweltliche Authentizität) und der Durchführbarkeit, sich schnell bewegende KI-Werkzeuge zu studieren.

## Fragen zum Nachdenken

- Die zentrale Spannung der Seite: Die stärksten Designs für Kausalschluss (randomisierte Experimente) sind die härtesten, in echten Klassenzimmern durchzuführen, während die authentischsten Settings schwächere kausale Kontrolle bieten. Wenn Sie entscheiden müssten, ob ein [[intelligent-tutoring|KI-Tutor]] Lernen hilft: Mit welchem dieser zwei Fehler würden Sie lieber leben –, und warum?
- Können Sie vor der Lektüre den Unterschied zwischen interner, externer und ökologischer Validität benennen? Die Seite argumentiert, jedes Design handle diese gegeneinander. Wie könnte eine Studie, die rigoros kausal ist, Ihnen dennoch fast nichts Nützliches über ein echtes Klassenzimmer sagen?
- Ein Benchmark zeigt, dass eine KI bei Genauigkeit hoch abschneidet, aber die Seite beharrt darauf, hohe Benchmark-Genauigkeit impliziere keine pädagogische Wirksamkeit. Warum könnte ein System, das den „Test besteht“, Studierenden dennoch nicht helfen zu lernen –, und welche Art Evidenz fehlt?
- Designbasierte Forschung iteriert an einer echten Intervention, kann aber Gewinne nicht einem bestimmten Mechanismus zuschreiben, während eine RCT Ursachen isoliert, aber unter künstlichen Bedingungen läuft. Wie lange bleibt Ihrer Meinung nach eine rigorose RCT angesichts des schnellen Tempos des KI-Wandels relevant, bevor das getestete Werkzeug veraltet ist?
- Delphi-Expertenkonsens etabliert Übereinstimmung unter Fachleuten, nicht empirischen Effekt. Wann ist es legitim, ein Kompetenzrahmenwerk aus dem zu bauen, was Fachleute glauben, gegenüber aus Daten darüber, was funktioniert –, und wie würden Sie den Unterschied in der Praxis erkennen?
- Die Seite plädiert für Triangulation –, Benchmark-Evaluation, Experimente, Messung und qualitative Arbeit zu kombinieren, um sowohl zu beurteilen, ob ein Werkzeug wirkt, als auch wie. Wo in einer Behauptung wie „diese KI verbessert das Lernen“ bräuchten Sie vor der Lektüre jede Methode, um überzeugt zu sein?

## Einführung

Die zentrale Spannung in der AIED-Forschung ist, dass die stärksten Designs für Kausalschluss –, randomisierte Experimente –, oft die schwersten sind, mit authentischen KI-Werkzeugen in echten Klassenzimmern durchzuführen, während die authentischsten Settings (Feldeinsätze, Fallstudien, Logdatenanalysen) schwächere kausale Kontrolle bieten. Keine einzelne Methode löst das; das Feld kommt voran, indem es über Methoden hinweg trianguliert, und indem es explizit macht, welche Art von Behauptung jedes Design stützen kann. Jede Methode trägt auch übergreifende Grenzen –, Verallgemeinerbarkeit, Messvalidität, das schnelle Tempo des KI-Wandels, Reproduzierbarkeit und schwache Theorieverwendung –, die Lesende abwägen müssen; siehe [[limitations-in-aied-research|übergreifende Grenzen der AIED-Forschung]].

Der Gegenstand der Seite ist Methode statt Befunde. [[learning-sciences|Lernwissenschaften]] ist das substanzielle Feld, dem diese Methoden dienen: Wo diese Seite abdeckt, wie eine Studie zu entwerfen, zu messen und zu berichten ist, deckt jene Seite ab, was das Feld darüber etabliert hat, wie Menschen lernen und wie Lernumgebungen gestaltet werden sollten, und behandelt designbasierte und Mixed-Methods als die charakteristischen Ansätze der Lernwissenschaften statt als zwei Optionen unter vielen.

Benachbart zu dieser Seite ist [[ai-assisted-educational-research|KI-gestützte Bildungsforschung]], die KI als Instrument der eigenen Arbeit des Feldes abdeckt: Literatursuche, Screening, Review-Automatisierung, qualitative Kodierung, Analyse und Schreiben. Ihr Umfang umfasst Praktikerforschung wie das Scholarship of Teaching and Learning, und sie bleibt von den Designs verschieden, die diese Seite beschreibt.

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen und Graulich (2026)]] üben dieselbe Prüfung auf die Wissensproduktion des Feldes selbst aus und nutzen Changs (2004) nomisches Messproblem: Das Messen einer Größe erfordert ein Gesetz, das sie zu etwas Beobachtbarem in Beziehung setzt, doch jenes Gesetz kann nicht empirisch getestet werden, ohne die Größe bereits zu kennen. Sie argumentieren, KI-abgeleitete Messfunktionen, die aus Trainingsdaten und Optimierung statt aus der Forscherin bzw. dem Forscher hervorgehen, könnten es eher verstärken als lösen. Solche Funktionen können präzise aussehen und dennoch epistemisch opak bleiben, daher verschiebt sich die Rolle der Forscherin bzw. des Forschers zum Interpretieren und Validieren rechnerischer Outputs. Ihr siebenphasiges reflexives Rahmenwerk (Problemrahmung; Instrumentierung und Messung; Experimentierung und evidenzbasierte Schlussfolgerung; Vergleiche und Replikation; Normen und Konsens aufbauen; Implementierung und ihre Folgen; und kontinuierliche Verfeinerung) wird als analytisches Hilfsmittel angeboten, nicht als validierte Methode, und sie argumentieren, Vergleichbarkeit müsse sich über Studierendenpopulationen erstrecken statt über die Teilmengen, denen ein Modell gut dient.

### Berichtsrigorosität und das TEP-AIED-Modell

Die Berichtsqualität von Studien zu KI in der Bildung ist selbst ein Forschungsanliegen. [[tep-aied-model-reporting-2026|Das TEP-AIED-Modell (Hwang, Xie, Wah & Gasevic, 2026)]] bietet ein strukturiertes Rahmenwerk, Forschung zu KI in der Bildung mit Rigorosität darzustellen, und organisiert die wesentlichen Komponenten eines Studienberichts –, Theorie-/Technologie-/Bildungsproblem-Rahmung, Design, Daten, Analyse und Ergebnisse –, damit Lesende und Reviewende beurteilen können, ob Behauptungen gestützt und die Arbeit reproduzierbar sind. Es antwortet auf die chronischen Schwächen des Feldes im Berichten (vage Werkzeugbeschreibungen, ungenannte Modellversionen, ausgelassene Evaluationsdetails), die die [[limitations-in-aied-research|Grenzen]]seite dokumentiert. Berichtsrahmenwerke wie TEP-AIED sitzen neben etablierten Berichts-Checklisten (z. B. Anleitung im [[rct|CONSORT]]-Stil für Studien, PRISMA-Stil-Anleitung für Reviews) als Teil des breiteren Zugs des Feldes hin zu [[educational-measurement|methodologischer Transparenz]] und Reproduzierbarkeit.

[[raise-framework-ai-education-reporting-2026|RAISE (Allison, 2026)]] nähert sich demselben Problem aus der entgegengesetzten Richtung –, als Checkliste statt als Erzählstruktur. Es legt **30 Items über zehn thematische Domänen** (pädagogische Begründung und theoretische Verankerung, KI-Systemspezifikation, KI-Rolle und -Interaktion, [[accessibility|Barrierefreiheit]] und kulturelle Passung, Setting und Teilnehmende, menschliche Beteiligung, Studiendesign und -evaluation, Ethik und Vertrauenswürdigkeit, Transparenz und Reproduzierbarkeit, sowie Grenzen und Implikationen), mit einer editierbaren Version und einer Begleit**Ethik- und Risikomatrix**, die Lernendenhandlungsfähigkeit, [[equity-in-ai-education|Gerechtigkeit]] des Zugangs, Daten[[governance|Governance]] und algorithmische Transparenz abdeckt. Die beiden Rahmenwerke adressieren einander direkt: TEP-AIED charakterisiert RAISE als umfassend, bemängelt aber seine Breite, mit dem Argument, „seine Breite und Granularität mögen es komplex und weniger zugänglich für routinemäßige empirische Anwendungen machen“, während RAISEs eigene Rahmung ist, dass es keine Methode und kein Modell vorschreibt und nur verlangt, dass Entscheidungen sichtbar gemacht werden. Zusammen gelesen markieren sie den Trade-off in dieser Literatur –, die vollere Audit-Checkliste gegenüber der schlankeren dreidimensionalen Erzählung –, und sie konvergieren auf dieselben Nichtverhandelbaren: Benennen und Versionieren Sie das KI-System, legen Sie Prompts und Interaktionsdesign offen, definieren Sie Behandlungs- und Vergleichsbedingungen, berichten Sie ethische Prüfung und Risikominderung, und geben Sie an, ob Ergebnisse Leistung, Behaltensleistung oder Transfer messen. Damit eine Studie nach diesen Kriterien beurteilt werden kann, muss das Berichtsinstrument zur Designzeit übernommen statt auf der Manuskriptstufe zusammengestellt werden, was der Punkt ist, auf dem beide Rahmenwerke bestehen. Korpusebene historische Analyse ist selbst eine methodische Entscheidung mit Transparenzpflichten: [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] verorten jedes Papier in ihrem AI×Ed-Rahmenwerk auf Basis von Autorenurteil über Abstracts und Volltexte, räumen explizit ein, dass dies keine systematische oder skalierbare datengetriebene Kategorisierung ist, und machen ihren vollständigen Datensatz öffentlich als Ergänzungsmaterial zur Replikation verfügbar.

### Experimentelle und quasi-experimentelle Designs

Eine **Wirksamkeitsstudie** testet, ob eine Intervention ihren beabsichtigten Lerneffekt erzeugt, typischerweise unter Nutzung experimenteller oder quasi-experimenteller Designs, die Ergebnisse mit und ohne die Intervention vergleichen. Experimente weisen Lernende zufällig Bedingungen zu (z. B. KI-Tutor gegenüber menschlichem Tutor, oder KI-gestützt gegenüber unassistiert), um kausale Effekte auf Ergebnisse wie Lernzuwächse, [[student-engagement|Engagement]] oder Motivation zu schätzen. **Randomisierte kontrollierte Studien** sind der Goldstandard für interne Validität. [[access-not-enough-ai-tutoring-2026|Eine randomisierte Feldstudie zu menschlicher Unterstützung plus KI-Tutoring]] und [[genai-can-harm-teaching-rct-2026|eine RCT zu generativer KI im Lehren]] nutzen Zuweisung, um kausale Effekte zu isolieren. **Quasi-experimentelle** Designs (Pre/Post, Between-Subjects oder abgeglichene Gruppen ohne Randomisierung) sind in intakten Klassenzimmern machbarer, aber schwächer bei kausalen Behauptungen.
- **Instrumentvalidierung und Baseline-Prüfungen kommen vor der Effektschätzung.** [[genai-cognitive-scaffold-geometric-reasoning-2026|Davor (2026)]] verglich zwei intakte ghanaische Oberstufenklassen (86 Studierende, 43 pro Gruppe) bei GenAI als Geometrie-Scaffold, dimensionierte die Stichprobe mit einer G*Power-Analyse und pilotierte den Geometry Reasoning and Proof Test auf eine Spearman-Brown-Split-Half-Verlässlichkeit von 0,859 vor der Studie. Die Gruppen unterschieden sich nicht signifikant im Pre-Test, und eine ANCOVA, die für vorherige Leistung adjustierte, behielt den Gruppeneffekt (F(1, 83) = 50,30, p < 0,001, partielles η² = 0,377). Ohne zufällige Zuweisung sind die Pilot-Verlässlichkeit und die Baseline-Äquivalenzprüfung das, was den adjustierten Vergleich interpretierbar machen.

- **Stärken:** stärkster Kausalschluss; saubere Ergebnismessung; stützt Effektstärkenschätzung und Wirksamkeitsbehauptungen.
- **Grenzen:** kostspielig und langsam; künstliche Bedingungen können ökologische Validität reduzieren; sich schnell wandelnde KI-Werkzeuge lassen lange Experimente schnell veralten; kleine Stichproben sind oft unterpowert, bedeutsame Effekte zu entdecken; [[ethics|ethische]] Einschränkungen, potenziell hilfreiche Werkzeuge vorzuenthalten.
- **Vorbilder:** [[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]], [[agent-voice-accents-k12-group-learning]], [[ai-use-critical-thinking-medical-students-2026]].
- **Präregistrierung gilt für Sekundäranalysen, nicht nur für Studien.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] ließ vier [[knowledge-tracing|Knowledge-Tracing]]-Update-Regeln über identische ASSISTments-Logs laufen (12.716 Studierende, 985.813 bewertete Ereignisse), die sich nur darin unterschieden, wie sie mit Hinweisen versehene Zeilen bewerteten, hielt die bestätigende Hälfte versiegelt, bis eine Datei existierte, die die URL der Registrierung enthielt, und berichtete, dass alle vier präregistrierten Vorhersagen hielten. Jede Vollendung zu honorieren sagte spätere ungestützte Leistung knapp über einer Fähigkeit-Schwierigkeit-Konstante vorher (gepoolte AUC 0,604 gegenüber 0,595), während sie 93,9% der Studierenden-Fähigkeits-Paare als gemeistert erklärte gegenüber 72,8% unter einer strengen Regel. Wenn ein Log mehrere Schlussfolgerungen stützt, ist die Festlegung der Analyse im Voraus das, was den Vergleich glaubwürdig macht.

### Befragungs- und Strukturgleichungsmodellierungsstudien

Querschnittsbefragungen messen selbstberichtete Haltungen, Wahrnehmungen, Motivation, [[self-efficacy|Selbstwirksamkeit]] und [[technology-acceptance-model|Technologieakzeptanz]], oft modelliert mit Regression oder Strukturgleichungsmodellierung (SEM/PLS-SEM), um hypothetische Beziehungen und Mediatoren zu testen. Diese dominieren das Korpus der Wissensbasis, besonders bei Akzeptanz-, Motivations- und psychologischem-Mechanismus-Fragen.

- **Stärken:** große Stichproben; breite, kostengünstige Abdeckung; können komplexe mediationale Modelle psychologischer Mechanismen testen; machbar für das Studium von Haltungen, die schwer zu beobachten sind.
- **Grenzen:** Querschnittsdaten können Kausalität nicht etablieren; Gemeinsam-Methoden-/Selbstauskunft-Bias; Zufallsstichproben begrenzen Verallgemeinerbarkeit; Mediatoren werden aus Kovarianz erschlossen, nicht aus Manipulation.

Das Instrument selbst verdient eigene Prüfung. Was ein Fragebogen, Interview oder Tagebuch etablieren kann und was nicht –, und die dokumentierte Lücke zwischen dem, was Menschen berichten, und dem, was sie tun –, ist auf [[self-report-measures|Selbstauskunftsmaßen]] versammelt.
- **Vorbilder:** [[acceptance-ai-english-tools-2026]], [[genai-motivation-engagement-2026]], [[ai-autonomous-learning-accomplishment-2026]], [[genai-over-reliance-learning-2026]], [[ai-use-critical-thinking-medical-students-2026]].

### Qualitative Methoden

Interviews, Fokusgruppen und thematische Analyse erzeugen reiche, kontextuelle Berichte darüber, wie Studierende und Lehrende KI-Werkzeuge erfahren, welche Bedeutungen sie ihnen beimessen, und welche Spannungen und Schäden standardisierte Maße übersehen. [[hazra-safetutors-pedagogical-safety-2026|Forschung zur Sicherheit von KI-Tutoren]] und [[ai-changing-teaching-workflows|wie KI Lehrarbeitsabläufe verändert]] stützen sich stark auf qualitative Evidenz. Siehe die eigene Konzeptseite [[qualitative-research|qualitative Forschung]] für die vollständige Behandlung qualitativer Ansätze –, thematische Analyse, Grounded Theory, Phänomenologie/Phänomenografie, Diskursanalyse, Beobachtungen und Ethnografie, Fallstudien, sowie Interviews/Fokusgruppen –, jede mit Vorbildern aus der Wissensbasis.

- **Stärken:** tiefe ökologische und konzeptuelle Einsicht; bringt unerwartete Phänomene, Risiken und Mechanismen zutage; unverzichtbar für Theoriebildung und für das Studium umstrittener Konstrukte wie Vertrauen, [[agency|Autonomie]] und Autorschaft.
- **Grenzen:** begrenzte Verallgemeinerbarkeit; interpretativ und forscherabhängig; kleine Stichproben; schwächere Stützung kausaler Behauptungen; Befunde können über Studien hinweg schwer zu synthetisieren sein.
- **Vorbilder:** [[hazra-safetutors-pedagogical-safety-2026]], [[ai-changing-teaching-workflows]], [[scaffolding-critical-engagement-genai-minority-students]].

### Mixed-Methods-Designs

Mixed-Methods-Studien kombinieren quantitative und qualitative Stränge –, oft sequenziell (z. B. QUAL→QUAN→qual) –, damit qualitative Daten quantitative Befunde erklären oder kontextualisieren. [[genai-over-reliance-learning-2026|Eine Mixed-Method-Studie zu GenAI und nachhaltigem Lernen]] paart dreiwellige Befragungen mit Pädagogeninterviews; [[t2i-competence-paradox-2026|die Kompetenzparadox-Studie]] nutzt Dozierenden-Fokusgruppen, eine Studierendenbefragung und Folgeinterviews.

- **Stärken:** Triangulation erhöht Vertrauen; quantitative Breite plus qualitative Tiefe; können unerwartete Ergebnisse erklären und Mechanismus und Größe überbrücken.
- **Grenzen:** komplex, ressourcenintensiv und methodisch anspruchsvoll; Integration kann flach sein, wenn sie nicht sorgsam gestaltet ist; erbt weiterhin die Schwächen jedes Strangs (z. B. Selbstauskunft).
- **Vorbilder:** [[genai-over-reliance-learning-2026]], [[t2i-competence-paradox-2026]], [[same-ai-different-pathways]], [[fouad-bentley-trust-utility-gap-physics-2026]].

### Designbasierte Forschung (DBR)

DBR entwirft, implementiert und verfeinert eine Bildungsintervention iterativ in authentischen Kontexten und zirkuliert zwischen Theorie, Design und realweltlicher Praxis. Sie ist in der Wissensbasis prominent für die Entwicklung KI-basierter Lernumgebungen und [[pedagogy|pädagogischer]] Modelle. Siehe die eigene Konzeptseite [[design-based-research|designbasierte Forschung]] für den vollständigen DBR-Zyklus, Vorbilder und ihre Stärken/Grenzen. Ein kanonisches AIEd-Beispiel ist die Studie zum KI-assistierten [[collaborative-learning|kollaborativem Lernen]]-Modell ([[ai-assisted-collaborative-learning-model-dbr|Putra et al.]]), die einen vierphasigen DBR-Zyklus lief –, Bedarfsanalyse, Modelldesign, achtwöchige Klassenraumimplementierung und Modellverfeinerung –, wobei sie an einem vierstufigen Lernzyklus iterierte (Problemidentifikation → KI-assistierte kollaborative Untersuchung → kollaboratives [[problem-solving|Problemlösen]] → Reflexion und Präsentation). Andere Vorbilder entwickeln [[ai-literacy|KI-Kompetenz]]-[[teacher-education|Lehrkräftetraining]] ([[genai-literacy-training-teacher-education-dbr-2026]]) und [[generative-ai|GenAI]]-[[scaffolding|Scaffolding]] für [[critical-thinking|kritisches Denken]] ([[critical-thinking-genai-scaffolding]]).

- **Stärken:** hohe ökologische Validität und praktische Relevanz; erzeugt sowohl nutzbare Artefakte als auch Theorie; ansprechbar auf die Komplexität echter Klassenzimmer und sich entwickelnder KI-Werkzeuge; gut geeignet, ein Modell zu entwickeln und es auf Basis authentischer Implementierungsevidenz zu verfeinern.
- **Grenzen:** schwache interne Validität (wenige/keine Kontrollgruppen); Befunde sind kontextgebunden und schwer zu verallgemeinern; lange Zeitlinien; schwierig, zu isolieren, welches Designelement ein Ergebnis verursachte –, DBR demonstriert Machbarkeit und Verbesserung, kann aber Lernzuwächse keinem bestimmten Mechanismus zuschreiben.
- **Vorbilder:** [[ai-assisted-collaborative-learning-model-dbr]], [[genai-literacy-training-teacher-education-dbr-2026]], [[critical-thinking-genai-scaffolding]], [[human-centered-ai-teacher-educators-2026]].

DBR handelt die kausale Kontrolle von [[rct|Experimenten]] gegen ökologische Authentizität und iterative Verfeinerung: Sie ist das richtige Werkzeug für Fragen nach „wie gestalten wir diese KI-Lernumgebung, damit sie in der Praxis funktioniert?“, und ihre Evidenz ist am stärksten als Proof-of-Concept und Designanleitung statt als kausale Wirksamkeit. Das Lesen von DBR-Lernzuwächsen erfordert dieselbe [[limitations-in-aied-research|Vorsicht]] wie bei anderen Designs –, ohne ein unassistiertes, kontrolliertes Ergebnismaß können Gewinne dieselbe KI-aufgeblähte-Leistung-Konfundierung widerspiegeln, die unter [[learning-gains|Lernzuwächsen]] dokumentiert ist.

### Systematische Reviews und Metaanalysen

Reviews synthetisieren die Evidenzbasis, statt ein neues Experiment zu laufen. Systematische und Scoping-Reviews wenden ein transparentes Protokoll an, um einen Korpus von Studien zu suchen, zu screenen, zu beurteilen und zu synthetisieren; Metaanalysen bündeln zusätzlich Effektstärken über Studien, um eine gewichtete Zusammenfassungsschätzung zu erzeugen und Moderatoren zu testen. [[zerkouk-comprehensive-review-its-2025|Ein umfassender ITS-Review]] und [[genai-higher-education-systematic-review-2026|ein systematischer Review zu GenAI in der Hochschulbildung]] exemplifizieren den Ansatz.

- **Stärken:** effiziente Synthese einer großen, fragmentierten Literatur; Metaanalyse ergibt gepoolte Effektschätzungen und entdeckt Moderatoren; unverzichtbar für evidenzbasierte Praxis und Identifikation von Lücken.
- **Grenzen:** hängen von der Qualität der eingeschlossenen Studien ab (garbage-in/garbage-out); Publikationsbias; heterogene Methoden und Ergebnismaße machen Synthese schwer; schnell alternd angesichts des Tempos des KI-Wandels.
- **Meta-Forschung-Vorbehalt (2026):** Kritiken der AIED-Synthesebasis zeigen, dass viele frühe Metaanalysen durch Konstrukt-Inkohärenz, ungelöste Heterogenität, unadressierte Abhängigkeit unter Effektstärken und ungültige Publikationsbias-Bewertung unterminiert werden –, was die KI-Effektstärken der Schlagzeilen aufbläht (siehe [[bartos-ai-learning-meta-meta-analysis-2026]], [[oneill-presumed-effective-meta-analysis-2026]] und [[weidlich-chatgpt-effect-search-cause-2025]]). Behandeln Sie gepoolte AIED-Effektstärken als Obergrenzen.
- **Vorbilder:** [[zerkouk-comprehensive-review-its-2025]], [[genai-higher-education-systematic-review-2026]], [[chatgpt-critical-creative-thinking-review]], [[zerkouk-comprehensive-review-its-2025]], [[agentic-ai-education-scoping-review]].

Siehe die eigene Konzeptseite [[meta-analysis-systematic-review|Metaanalyse und systematischer Review]] für eine vollere Behandlung von systematischem Review und Metaanalyse in der KI-Bildung –, einschließlich ihrer Beziehung zu primären Designs, PRISMA-Berichterstattung, und ihrer Stärken und Grenzen.

### Rechnerische und Benchmark-Evaluation

Rechnerische Evaluation bewertet [[ai-technologies|KI-Systeme]] direkt –, gegen Benchmarks, Ground-Truth-Labels oder menschliche Urteile –, statt menschliche Lernende zu studieren. Das umfasst [[benchmark|Benchmarks]], [[llm]]-as-judge-Ansätze. Das ist die Methode, die der [[ai-ed-evaluation|Evaluation von KI in der Bildung]] am nächsten ist (siehe die Unterscheidung unten).

- **Stärken:** schnell, skalierbar, reproduzierbar; ermöglicht Kopf-an-Kopf-Vergleich von Modellen und Systemversionen; unverzichtbar für Systementwicklung und Qualitätssicherung.
- **Grenzen:** misst Systemoutput, nicht Lernen –, hohe Benchmark-Genauigkeit impliziert keine pädagogische Wirksamkeit; Ground-Truth- und Rubrikqualität sind selbst umstritten; kann pädagogische Qualität übersehen, die Menschen wahrnehmen. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] argumentieren, die Flexibilität von LLMs in natürlicher Sprache mache rein technische Metriken unzureichend und erfordere von menschlicher Einsicht inspirierte Evaluationsansätze –, [[simulating-students|simulierte Studierende]], KI-[[teacher-role|Lehrkräfte]]tests und verhaltenswissenschaftliche Analysen, die zuvor menschlichen Subjekten vorbehalten waren –, um lernrelevante Qualität zu beurteilen, und dass LLMs vorsichtig zu studieren Einsicht in menschliches Lernen erzeugen könne.
- **Disjunkte Teilnehmende, nicht zufällige Splits, verhindern Leckage in der Detektor-Evaluation.** [[detecting-gpt-assisted-writing-stylometric-2026|Kumar et al. (2026)]] bauten einen stilometrischen [[ai-detection|Detektor]] aus 90 Schreiberinnen und Schreibern, die jeweils eine ungestützte und eine paraphrasierte Probe erzeugten, und hielten jedes Fenster eines bzw. einer Teilnehmenden in einem einzigen Fold, damit Autorenstil nicht über den Split lecken konnte, und hielten 18 Personen vollständig heraus. Der Random Forest erreichte ROC-AUC 0,870 mit F1 0,842, markierte aber 4 von 18 unabhängig verfassten Dokumenten als GPT-assistiert (22,2%); die Autoren behandeln jene Falsch-Positiv-Rate als das einsatzrelevante Ergebnis und rahmen das Modell als Entscheidungsunterstützung statt als automatisierten Fehlverhaltensbildschirm.
- **Vorbilder:** [[teachbench-llm-teaching-evaluation]], [[jeon-isd-agent-bench-2026]], [[ground-truth-reliability-aied]], [[cong-confidence-asag-2026]], [[drawedumath-vlm-struggling-students-2026]].
- **Berichtsstandards für automatisierte Pipelines, und auditierte Benchmarks.** Zwei Arbeiten aus dem Jahr 2026 erweitern methodische Rechenschaftspflicht über die Studie selbst hinaus. PRISMA-LLM kartiert 888 Review-Automatisierungspapiere und 14.726 Annotationen und findet, dass 38,0% der Software- oder Produktpapiere keine Evaluation berichteten gegenüber 9,3% der LLM-Papiere, und dass 52% der nur-positiven LLM-Evaluationen ein Hochbar-Anliegen unerfüllt ließen, und schlägt Berichterstattung vor, die identifiziert, wo im Review-Arbeitsablauf Automatisierung wirkte ([[prisma-llm-ai-assisted-systematic-reviews-2026]]). Ein Experten-Neubenotungs-Audit von sechs [[physics-education|Physik]]benchmarks zeigt dasselbe Problem auf Instrumentenebene: Von 250 auditierten Ablehnungen waren nur 12 (4,80%) echte Modellfehler, während 143 Itemdefekte und 95 Bewerterfehler waren ([[frontier-models-physics-benchmark-audit-2026]]). Beide argumentieren, rechnerische Evaluationen bräuchten ein auditiertes Fehlerbudget, bevor ihre Ergebnisse als Befunde über Lernende oder Modelle gelesen werden.
- **Bauen Sie die Mensch-Übereinstimmungs-Prüfung in die Detektorentwicklung ein, nicht danach.** [[baker-taylorizable-process-textual-detector-development-2026|Baker und Kollegen (2026)]] legen einen siebenstufigen Prozess für textuelle Detektoren kognitiver Konstrukte dar –, Datensatzauswahl, Konstruktdefinition, Codebuch-Entwurf, menschliche Inter-Rater-Prüfung, Kategorienverfeinerung, Detektorbau und Anwendung –, damit Verlässlichkeit auf menschlich kodierten Labels jeder [[llm|LLM]]-as-judge-Bereitstellung vorausgeht. Es erfordert chancenkorrigierte Übereinstimmungsmetriken (Cohens oder Fleiss' κ, Krippendorffs α), Studierendenebene-Kreuzvalidierung und Subgruppen-Fehleranalyse als Mindeststandards, und argumentiert, Fehlmessung werde zu einer Schadensquelle, sobald solche [[educational-nlp|Detektoren]] im Inneren bereitgestellter Plattformen sitzen.

### Andere Designs: Längsschnitt-, Fall- und Simulationsstudien

Über die großen Familien hinaus nutzt die Wissensbasis **Längsschnitt**designs, die Lernende über die Zeit verfolgen ([[ai-lms-middle-school-longitudinal|eine Längsschnitt-LMS-Studie]]), **Fall- und in-the-wild**-Studien authentischer Nutzung ([[ai-in-the-wild-college|groß angelegte Analyse echter Studierendeninteraktionen]]) und **Simulations**studien, in denen LLMs für Studierende oder Patienten einspringen ([[llm-student-simulation-teacher-insights|LLMs als simulierte Lernende]], [[simulation|Simulation]]). Diese handeln Breite oder Kontrolle gegen Realismus und gegen Zugang zu Phänomenen, die sonst schwer zu beobachten sind.

### Expertenkonsensmethoden: die Delphi-Technik

Die Delphi-Methode ist eine strukturierte Technik, **Expertenkonsens** zu einer Frage herzustellen, bei der die Antwort noch nicht empirisch bekannt ist –, in der Wissensbasis am häufigsten genutzt, um Rahmenwerke, Kompetenzlisten und Definitionen zu entwickeln, denen Praktikerinnen und Praktiker sowie Forschende zustimmen können. In einer Delphi-Studie antwortet ein Gremium von Fachleuten auf aufeinanderfolgende Runden von Fragebögen; nach jeder Runde wird eine anonymisierte Zusammenfassung der Antworten der Gruppe zurückgespeist, und Fachleute überarbeiten ihre Antworten, bis die Gruppe zu Übereinstimmung konvergiert (typischerweise definiert durch eine vorgesetzte Schwelle, z. B. 75%). Es ist eine Weise, Konstruktvalidität und professionellen Konsens durch iterative, anonymisierte Konsultation aufzubauen statt durch eine einzelne Befragung oder Abstimmung.

- **Stärken:** erzeugt Konsens aus einem vielfältigen Fachgremium ohne Gruppenpräsenzdruck (Anonymität reduziert Dominanzeffekte); gut geeignet, Konstrukte, Kompetenzen und Rahmenwerke zu definieren, wenn kein validiertes Maß existiert; iterative Runden lassen Fachleute verfeinern und konvergieren; machbar, wo volle Experimente oder große Stichproben unpraktisch sind.
- **Grenzen:** Konsens spiegelt Fachurteil, nicht empirische Evidenz –, er etabliert Übereinstimmung, nicht Effekt; Ergebnisse hängen von der Gremium[[writing-education|zusammensetzung]] und der (subjektiven) Konsensschwelle ab; kann über mehrere Runden langsam sein; das Urteil eines einzelnen Gremiums mag nicht verallgemeinern.
- **Vorbilder:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|die SAIL-Rahmenwerk-Studie]] (drei Runden, 17 Fachleute, Verfeinerung der KI-Kompetenzstufen), [[hcap-human-centric-ai-pedagogy-framework-2026|die HCAP-Rahmenwerk-Studie]] (drei Runden, 30 Lehrende, Definition von 25 KI-Lehrkräfte-Kompetenzen), [[ai-literacy-heptagon-2026|das AI Literacy Heptagon]] (das Experteninput/-konsens neben einem PRISMA-geleiteten Review nutzte) und.

Delphi wird oft mit anderen Methoden kombiniert –, beispielsweise kann Expertenkonsens genutzt werden, um ein Rahmenwerk zu validieren (wie in SAIL und HCAP), das dann über designbasierte Forschung oder Befragungsstudien getestet oder implementiert wird. Es sitzt neben qualitativen und Fachurteilsansätzen und trägt zur [[educational-measurement|Validität]] rahmenwerkbasierter Instrumente bei.

### Forschung gegenüber Evaluation: Verbindungen und Unterscheidungen

Forschung und Evaluation sind eng verwandt, aber verschieden. **Forschung** fragt verallgemeinerbare Fragen darüber, wie KI Lernen beeinflusst –, „verbessert Scaffolding Lernergebnisse?“ –, und zielt darauf, Theorie und Evidenz aufzubauen, die über die spezifische Studie hinaus transferieren. **Evaluation** (siehe [[ai-ed-evaluation|Evaluation von KI in der Bildung]]) beurteilt, ob ein *spezifisches* KI-Werkzeug oder -System funktioniert –, ob es korrekt, verlässlich, pädagogisch stichhaltig und zweckmäßig ist –, gegen Benchmarks, Rubriken oder von Akteuren definierte Kriterien. Forschung betont interne Validität und Verallgemeinerung; Evaluation betont Systemqualität und lokale Entscheidungsfindung.

Die Grenzen verschwimmen: Benchmark-Studien sind Evaluation, die Forschung speisen kann, und Evaluationsinstrumente (Rubriken, Ground-Truth-Sets, Validitätsrahmenwerke) hängen von den [[educational-measurement|Bildungsmess]]- und [[assessment-validity|Assessmentvaliditäts]]anliegen ab, die Forschung klärt. Umgekehrt sollten Forschungsbefunde darüber, was Lernen stützt, prägen, wie KI-Werkzeuge [[ai-ed-evaluation|evaluiert werden]]. Die Wissensbasis behandelt sie als komplementär: Rechnerische und Benchmark-Evaluation ([[benchmark|Benchmarks]], [[ai-ed-evaluation|Evaluation von KI in der Bildung]]) sagt uns, ob ein KI-System technisch stichhaltig ist, während Wirksamkeits- und Befragungsforschung ([[rct|RCT]]) sagt uns, ob es Menschen hilft zu lernen.

### Unter Methoden wählen

Methodenwahl folgt der Forschungsfrage. Kausaleffekt-Fragen bevorzugen Experimente ([[rct|RCT]]); Mechanismus- und Wahrnehmungsfragen bevorzugen Befragungs- und qualitative Arbeit; Systemqualitätsfragen bevorzugen rechnerische Evaluation ([[benchmark|Benchmarks]], [[ai-ed-evaluation|Evaluation von KI in der Bildung]]); Synthesefragen bevorzugen Reviews und Metaanalysen; Designfragen bevorzugen DBR; und Fragen danach, was Fachleute darüber übereinkommen, was ein Konstrukt, eine Kompetenz oder ein Rahmenwerk enthalten sollte, bevorzugen Expertenkonsensmethoden wie die Delphi-Technik. Angesichts der Heterogenität des Feldes und des Tempos des KI-Wandels spiegelt das Korpus der Wissensbasis einen absichtsvollen Zug hin zur Triangulation –, rechnerische Evaluation mit Wirksamkeits-, qualitativer und Expertenkonsens-Evidenz zu kombinieren, um sowohl zu beurteilen, ob ein Werkzeug funktioniert, als auch ob es Lernen hilft.

Ebenso wichtig ist, jede einzelne Studie mit Bewusstsein für die **übergreifenden Grenzen** zu lesen, die AIED-Forschung als Ganzes betreffen –, methodische Einschränkungen, das schnelle Tempo des KI-Wandels gegenüber langsamer Publikation, Lücken in Reproduzierbarkeit und FAIR-Praxis, Rückgriff auf proprietäre Werkzeuge, und schwache oder unkritische Theorieverwendung. Siehe [[limitations-in-aied-research|übergreifende Grenzen der AIED-Forschung]].

## Die großen Forschungstraditionen gegenüberstellen

Die drei großen Forschungstraditionen –, [[quantitative-research|quantitative]], [[qualitative-research|qualitative]] und experimentelle –, unterscheiden sich fundamental darin, was sie behaupten können, was sie opfern, und wann jede angemessen ist. Diese Kontraste zu verstehen ist unverzichtbar, sowohl für das Entwerfen als auch für das Lesen von Forschung zu KI in der Bildung.

### Was jede Tradition etabliert

| Dimension | Quantitativ / Befragung | Qualitativ | Experimentell |
|---|---|---|---|
| Kernfrage | Wie viel? Wie verwandt? | Was bedeutet es? Wie wird es erfahren? | Verursacht X Y? |
| Primärdaten | Zahlen, Skalen, Selbstauskunft | Wörter, Beobachtungen, Artefakte | Ergebnismaße über zugewiesenen Bedingungen |
| Schlussziel | Muster, Korrelationen, Mediation | Bedeutung, Mechanismen, Kategorien | Kausale Effekte |
| Interne Validität | Schwach (korrelational) | Schwach (keine Kontrolle) | Stark (zufällige Zuweisung) |
| Externe Validität | Stark (große Stichproben) | Begrenzt (klein, kontextgebunden) | Moderat (kontrollierte Bedingungen) |
| Ökologische Validität | Moderat | Hoch | Niedriger (künstliche Bedingungen) |

- **[[quantitative-research|Quantitative Forschung]]** misst und modelliert Beziehungen unter Variablen –, Befragungen, SEM/PLS-SEM, Messung, Längsschnittverfolgung. Sie bietet Breite, Präzision und Verallgemeinerbarkeit, kann aber Kausalität aus Querschnittsdaten nicht etablieren und erbt [[educational-measurement|Mess]]grenzen (einschließlich Selbstauskunft-Bias).
- **[[qualitative-research|Qualitative Forschung]]** interpretiert Bedeutung und Erfahrung –, Interviews, Fokusgruppen, thematische Analyse, Grounded Theory, Phänomenografie, Diskursanalyse, Beobachtung/Ethnografie, Fallstudien. Sie bietet Tiefe, Mechanismus und Theoriebildung (siehe [[theory-development-aied|Theorieentwicklung in der AIED]]) aber begrenzte Verallgemeinerbarkeit und schwache kausale Stützung.
- **Experimentelle und quasi-experimentelle Designs** (siehe [[rct|RCT]]) schätzen kausale Effekte über zufällige Zuweisung oder abgeglichenen Vergleich –, der Goldstandard für interne Validität, auf Kosten von Kosten, Geschwindigkeit und ökologischer Validität.

### Die Mess- und Mixed-Methods-Verbindungen

Quantitative Arbeit hängt von [[educational-measurement|Bildungsmessung]] ab –, verlässlichen, validen Instrumenten für die studierten Konstrukte. Qualitative Arbeit legt die Mechanismen und Bedeutungen offen, die jene Instrumente übersehen mögen. **Experimentelle** Arbeit schätzt, ob eine Intervention die Ergebnisse *verursacht*, die die Instrumente messen. Die drei sind komplementäre Schichten: Instrumente quantifizieren Konstrukte, Experimente etablieren Kausalität, und qualitative Arbeit erklärt das *Wie und Warum* hinter den Zahlen.

[[mixed-methods-research|Mixed-Methods-Designs]] kombinieren absichtlich quantitative und qualitative Stränge, damit ihre Stärken die Schwächen der anderen ausgleichen –, quantitative Breite plus qualitative Tiefe, wobei Triangulation das Vertrauen erhöht.

### Usability- und HCI-Forschung

Ein eigener methodischer Strang –, [[usability-research|Usability- und HCI-Forschung]] –, evaluiert, wie Nutzende mit einem KI-System interagieren: seine Usability, Nützlichkeit, Erlernbarkeit und Nutzungserfahrung, unter Nutzung von Think-Aloud-Protokollen, strukturierten Nutzungsstudien, Interviews und Beobachtung. Es ist der [[ai-ed-evaluation|Evaluation von KI in der Bildung]] am nächsten und beantwortet eine *Voraussetzungs*frage: Selbst ein pädagogisch stichhaltiges Werkzeug scheitert, wenn es unbenutzbar ist. Usability-Forschung teilt Datenerhebungsmethoden mit qualitativer Forschung, zielt aber darauf, ein Artefakt zu evaluieren statt Bedeutung zu interpretieren.

### Nutzen und Grenzen über Traditionen hinweg

- **Quantitativ/Befragung:** Nutzen –, große Stichproben, breite Abdeckung, testet komplexe Mediatoren, effizient. Grenzen –, keine Kausalität, Selbstauskunft-Bias, Zufallsstichproben, Instrumente mögen das falsche Konstrukt messen.
- **Qualitativ:** Nutzen –, tiefe Einsicht, bringt unerwartete Phänomene und Schäden zutage, unverzichtbar für Theoriebildung, zentriert unterrepräsentierte Stimmen. Grenzen –, begrenzte Verallgemeinerbarkeit, Forscherabhängigkeit, kleine Stichproben, schwache kausale Stützung, schwer zu synthetisieren.
- **Experimentell:** Nutzen –, stärkster Kausalschluss, saubere Ergebnismessung, Effektstärkenschätzung. Grenzen –, kostspielig/langsam, künstliche Bedingungen, sich schnell wandelnde KI datiert Ergebnisse, unterpowert kleine Stichproben, ethische Einschränkungen.
- **Mixed-Methods:** Nutzen –, Triangulation, Breite + Tiefe, erklärt unerwartete Ergebnisse. Grenzen –, komplex, ressourcenintensiv, Integration kann flach sein, erbt die Schwächen jedes Strangs.
- **Usability/HCI:** Nutzen –, identifiziert Übernahmebarrieren, handlungsleitende Designanleitung, schnell und billig. Grenzen –, etabliert keine Lerneffekte, kleine Stichproben, selbstberichtete Zufriedenheit kann in die Irre führen.

In der Praxis fällt Forschung zu KI in der Bildung selten saufig in eine Tradition. Die stärkste Evidenz trianguliert: Eine rechnerische oder Usability-Evaluation etabliert, dass ein System funktioniert, ein Experiment etabliert, dass es Lernen verursacht, quantitative Instrumente messen die Konstrukte, und qualitative Arbeit legt die Mechanismen und Bedeutungen offen –, und beantwortet zusammen sowohl *ob* ein Werkzeug Lernen hilft als auch *wie und warum*.

## Verbundene Konzepte

- [[interpreting-and-applying-aied-research]]
- [[ai-ed-evaluation]]
- [[rct]]
- [[benchmark]]
- [[meta-analysis-systematic-review]]
- [[ai-assisted-educational-research]] — KI-gestützte Bildungsforschung
- [[educational-measurement]]
- [[assessment-validity]]
- [[simulation]]
- [[ai-education]]
- [[higher-ed]]
- [[limitations-in-aied-research]]
- [[learning-gains]]
- [[theory-development-aied]] — Theorieentwicklung in der KI-Bildung
- [[qualitative-research]] — Qualitative Forschung
- [[quantitative-research]] — Quantitative Forschung
- [[mixed-methods-research]] — Mixed-Methods-Forschung
- [[design-based-research]] — Designbasierte Forschung
- [[usability-research]] — Usability-Forschung
- [[self-report-measures]]
- [[learning-sciences]]

## Verbundene Artikel

- [[ai-methodologies-science-education-research-2026]] — A seven-phase epistemic-iteration framework for reflecting on how AI methodologies may transform science education research (Martin et al., 2026)
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[genai-can-harm-teaching-rct-2026]] — Generative AI Can Harm Teaching
- [[genai-over-reliance-learning-2026]] — From Enhancement to Over-Reliance: A Mixed-Method Study
- [[acceptance-ai-english-tools-2026]] — Acceptance of AI-Assisted English Language Learning Tools
- [[hazra-safetutors-pedagogical-safety-2026]] — AI Tutor Safety and Pedagogical Harms
- [[zerkouk-comprehensive-review-its-2025]] — Comprehensive Review of Intelligent Tutoring Systems
- [[ai-assisted-collaborative-learning-model-dbr]] — Design-Based Research for an AI-Assisted Collaborative Learning Model
- [[teachbench-llm-teaching-evaluation]] — TeachBench: Evaluating LLM Teaching Ability
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Reliability and Validity
- [[llm-student-simulation-teacher-insights]] — Can LLMs Effectively Simulate Human Learners?
- [[raise-framework-ai-education-reporting-2026]] — RAISE: 30 items in ten domains for transparent reporting of AI-in-education studies (Allison 2026)
- [[ai-lms-middle-school-longitudinal]] — AI-Integrated Learning Management System: A Longitudinal Study
- [[ai-in-the-wild-college]] — AI in the Wild: Large Scale Analysis of Authentic Interactions
- [[same-ai-different-pathways]] — Same AI, Different Pathways: Unpacking Mechanisms
- [[tep-aied-model-reporting-2026]] — The TEP-AIED model for reporting AI-in-education research with rigor (Hwang, Xie, Wah & Gasevic 2026)
- [[t2i-competence-paradox-2026]] — The Competence Paradox: Text-to-Image GenAI in Art and Design
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analysis of AI effect on learning
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: flawed AIED meta-analysis audit
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
