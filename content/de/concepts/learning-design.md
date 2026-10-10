---
title: Lerndesign
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy]
translation_of: concepts/learning-design
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

> **Lerndesign** (auch bekannt als *Instruktionsdesign*) — der systematische Prozess, effektive Lernerfahrungen durch die Analyse von Lernbedarfen und das Design, die Entwicklung, die Implementierung und die Evaluation von Unterrichtsmaterialien und -aktivitäten zu schaffen. KI transformiert Lerndesign, indem sie Inhaltserzeugung automatisiert, [[adaptive-learning|adaptive Lernpfade]] ermöglicht, datengetriebene Iteration stützt und die Rolle der Lerndesignerin oder des Lerndesigners erweitert — statt ersetzt.

## Fragen zum Nachdenken

- Denken Sie an einen Kurs oder eine Lektion, die Sie erlebt oder gestaltet haben. Wo endete „was zu lehren“ (Curriculum) und begann „wie es zu lehren“ (Lerndesign) —, und wie interagierten die zwei?
- Eine verbreitete Annahme ist, dass bessere KI-Fließfähigkeit automatisch bessere Bildungsinhalte erzeugt. Die Seite begegnet dem mit Evidenz, dass explizite pädagogische Struktur — nicht nur KI-Fließfähigkeit — bestimmt, wie effektiv Lernen ist. Wo haben Sie beeindruckenden Output gesehen, der scheiterte zu lehren?
- Wenn ein KI-Werkzeug einen ganzen Kurs aus einem Prompt erzeugen kann, welche menschlichen Entscheidungen werden wichtiger statt weniger? Die Seite argumentiert, KI erweitere die Rolle der Lerndesignerin oder des Lerndesigners statt sie zu ersetzen —, wie würde diese erweiterte Rolle aussehen?
- Manche Instruktionsdesignmodelle wie ADDIE werden als starre, lineare Schritte genutzt. Aber die Seite behandelt sie als iterative, flexible Planungsheuristiken. Wann könnte es, einem Prozess zu wörtlich zu folgen, gutes Design untergraben?
- Die Seite zeigt, dass pädagogisch gegründetes Prompting — zum Beispiel ein auf Lerntheorie basierendes fünfstufiges Rahmenwerk — höherstufige Ergebnisse signifikant verbesserte. Wenn Sie einen KI-Tutor bauen würden, was würden Sie in eine explizite Designschicht kodieren, damit seine Lehrstrategie nachvollziehbar und reproduzierbar bleibt?

## Einführung

Lerndesign überbrückt KI-Fähigkeiten und effektive Pädagogik. Wo [[curriculum-design]] adressiert, *was* auf Programmebene zu lehren ist, adressiert Lerndesign, *wie* es auf Kurs- und Lektionsebene zu lehren ist. Die Artikel in dieser Wissensbasis erkunden sowohl KI als Werkzeug für Lerndesignerinnen und Lerndesigner als auch Lerndesignprinzipien für das Bauen effektiver [[intelligent-tutoring|KI-Tutoring]]systeme.

Was diese Designarbeit in der Praxis umfasst, ist selbst eine empirische Frage. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] kodierten 1.378 Designer-Chatbot-Turns von fünf Novizen-Lerndesignern, die mit einem in ein Designwerkzeug eingebetteten Chatbot arbeiteten, und fanden, dass der Dialog sich auf intendierte Lernergebnisse und den pädagogischen Ansatz bündelte statt auf Inhaltsgenerierung. Designer kehrten wiederholt zu Ergebnissen als Alignment-Prüfung zurück, während sie Curriculumbestandteile in konkrete Aufgaben verwandelten, und die Rolle des Assistenten verschob sich über Phasen hinweg, von Begriffsklärung über Unterstützung bei Aufgabendesign bis zu einer Verifikationspass vor einer Frist. Designunterstützung ist auf dieser Evidenz weniger das Produzieren von Material als das Halten der Designabsicht kohärent.

Learning Analytics und generative KI stützen verschiedene Teile des Designs: über 11 Fokusgruppen an einer australischen Universität hinweg ko-okkurrierte Analytics-Diskurs am meisten mit Kontext und kursweitem Problemlösen (0,32), während GenAI-Diskurs sich auf Assessmentdesign zentrierte (0,26) und das Gestalten für Selbstbestimmung der Studierenden (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Zentrale Forschungsthemen

**KI-gestützte Inhaltserzeugung** ist die direkteste transformative Anwendung. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** präsentiert eine sechsphasige Architektur, die Generative KI mit LaTeX und Python integriert, um [[stem-education|STEM]]-Materialienerstellung zu automatisieren, validiert über 8 Module und 28 Projektkontexte hinweg mit studentischen Qualitätsbewertungen von 8.5-9.9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** nutzt ein Multi-Agenten-Rahmenwerk, strukturiert um das ADDIE-Modell, mit rollenbasierten Agenten (Teaching Faculty, Instructional Designer, Course Coordinator), die kollaborieren, um vollständige Kursmaterialien zu erzeugen. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** bietet eine strukturierte Pipeline für adaptive [[pedagogy|pädagogische]] [[video-education|Videogenerierung]], gegründet in Kurskorpora, und demonstriert, dass explizite pädagogische Struktur — nicht nur KI-Fließfähigkeit — für die Erzeugung von Bildungsinhalten essenziell ist. [[generative-ai|Generative-KI]]-Plattformen können Lerndesignprinzipien auch in den Inhalten verkörpern, die sie produzieren: [[ai-modeling-problem-generation-platform-2026|eine KI-gestützte Plattform zur Erzeugung mathematischer Modellierungsprobleme]] kombinierte etablierte Designprinzipien mit [[prompt-engineering|retrieval-augmented generation]], entwickelt über den ADDIE-Ansatz, um pädagogisch gegründete Aufgaben und Empfehlungen zu produzieren, an denen es konventionellen Inhaltsgeneratoren fehlt. Dennoch wird der Ertrag solcher KI-gestützter Inhalts- und Lektionsgenerierung von der eigenen Expertise der Lehrkraft vermittelt: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] fanden, dass erfahrene Lehrkräfte KI-generierte Lektionsideen kritisch an Studierende und Kontext anpassen (re-prompting und elaborating output), während Novizen dazu neigen, KI-Vorschläge direkt zu akzeptieren — sodass der pädagogische Wert von KI-Inhaltswerkzeugen von der Erfahrung und KI-Proficiency der Lehrkraft abhängt, nicht vom Werkzeug allein. Ein systematischer Review der [[wang-teacher-ai-co-design-review-2026|Lehrkraft-KI-Ko-Design von Lernaufgaben]] (Wang, Liu & Islam 2026) bestätigt das Muster in großem Maßstab über 28 Studien (2015–2025): GenAI wird hauptsächlich für Lektionsplanung, Promptgenerierung und kreative Ideenfindung genutzt, und der dominante Kollaborationsmodus ist KI als Assistent/Inhaltsgenerator statt ein umfassenderer Ko-Designer — mit Effizienz, Responsivität, [[creativity|Kreativität]] und [[equity-in-ai-education|Gerechtigkeit]] als wiederkehrenden Affordanzen. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] schärft den Lehrkräfteexpertise-Befund für Gruppenaktivitätsdesign: erfahrene Lehrkräfte produzieren reichere, synergistischere, besser ZPD-abgestimmte Rollenarchitekturen in KI-gestalteten kooperativen Aktivitäten als Novizen, unabhängig von KI-Vertrautheit, womit „pädagogische Prompt-Literacy“ als der Hebel gerahmt wird, der KI-Output in effektives [[collaborative-learning|differenziertes Gruppenlernen]] verwandelt. Wo generierte Materialien an Curriculum-Passung scheitern: sieben Mathematiklehrkräfte bewerteten KI-generierte Probleme zu produktivem Scheitern den menschlichen insgesamt nahe (M = 17,19 vs. 17,43 von 25), aber niedriger bei Curriculum-Alignment (M = 2,57 vs. 3,29), sodass generierte Probleme weiterhin in Länge, Leseniveau und Visualisierung bearbeitet werden mussten ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Pädagogisch gegründetes KI-Tutoring** wendet Instruktionsdesignprinzipien auf das Design von KI-Systemen an. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** bauten einen didaktisch getriebenen [[llm|LLM]]-Lehrkraftassistenten, in dem die Tutoringstrategie in einer expliziten externen Schicht kodiert ist — was Inhaltsauswahl und didaktische Strukturierung nachvollziehbar und reproduzierbar macht und damit Undurchsichtigkeitsbedenken in [[rethinking-scaffolding-llm-tutors]] direkt adressiert. **[[instructional-guidance-genai-learning|Hou et al.]]** demonstrierten, dass ein fünfstufiges [[prompt-engineering|Prompting]]-Rahmenwerk, gegründet in generativer [[learning-theories|Lerntheorie]], höherstufige kognitive Ergebnisse signifikant verbesserte, was zeigt, dass Instruktionsanleitung — nicht nur KI-Zugang — die Lerneffektivität bestimmt. Beides verbindet sich mit [[scaffolding]] und [[intelligent-tutoring]].
**Rahmenwerke und Evaluation** bieten strukturierte Ansätze. **[[bridging-instructional-design-framework-math]]** und **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonstrieren [[human-in-the-loop-ai|Human-in-the-Loop]]-Designprinzipien. **[[genai-mindtool-generative-learning]]** positioniert KI als „Mindtool“ — einen kognitiven Partner, der Denken der Lernenden erweitert statt ersetzt —, wendet Instruktionsdesigntheorie direkt auf KI-Integration an. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** wendet Universal-Design-for-Learning-Prinzipien an, um einen zugänglichen KI-Denkpartner für Lehrende zu schaffen, verbindet Instruktionsdesign mit [[inclusive-learning|inklusivem Lernen]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate–Inquire–Reflect) ist ein aufgabenstrukturierendes Rahmenwerk für kognitiv aktivierte KI-Nutzung, das den Beitrag der KI begrenzt, damit Vorhersage, Interpretation und Evaluation bei der lernenden Person bleiben — eine KI-spezifische Anpassung von Inquiry-Zyklen, gegründet in [[self-regulated-learning|selbstreguliertem Lernen]], Cognitive Load Theory und [[human-ai-collaboration|Mensch-KI-Kollaboration]]. Diese Designrahmenwerke ergänzend bietet die [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn et al. (2026)-Taxonomie]] eine *Klassifikation* statt einer Designmethode: sechs Kategorien (Learning Objective, Content, Representation Format, Epistemic [[student-engagement|Engagement]], Social Design, Artifacts), die Designerinnen und Designer und [[research-methods-aied|Forschende]] GenAI-Lernaktivitäten beschreiben, vergleichen und imaginieren lassen, indem sie explizit machen, warum, was, wie, womit und mit wem Lernende GenAI nutzen — gebaut als Boundary Object durch postdigitalen Dialog. Smart-Classroom-Rahmenwerke erweitern das auf die [[teacher-education|Lehrkräftebildung]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao und Wang (2026)]] schlagen ein dreidimensionales Rahmenwerk für Smart Education vor — Lerneffektivität, Informations- und Kommunikationstechnologie (IKT) und Klassenraumorganisation — und instanziieren es in einem [[math-education|Mathematik]]-M.Ed.-Kurs, der [[automated-assessment|automatisierte Benotung]], personalisierte Empfehlungen und Multi-[[ai-feedback-quality|KI-Feedback]] über Vor-, In- und Nachklassenstufen hinweg integriert. Ein Quasi-Experiment zeigte signifikante Zuwächse in der Fähigkeit der Studierenden, präzise, professionell gegründete Unterrichtsziele zu formulieren, was das transferierbare **D-T-E-Modell** (Disciplinary Demand–Technological Empowerment–Evaluation Loop) ergab — [[discipline-specific-aied|fachspezifische]] Anleitung für [[educational-development|Bildungsfachleute]], die Smart-Education-Konzepte in praktische Lerndesignpraxis überführen.

**Für Reichweite gestalten.** Halanis Sieben-Hebel-Rahmenwerk fragt von jedem Kurssetting, welche davon noch operieren, wenn die oder der Studierende allein mit KI ist; strukturelle Züge wie zu verändern, was die Note bescheinigt, oder Aufgaben, die ohne das Denken nicht erledigt werden können, reichen weiter, als Studierenden zu sagen, dass Prozess zählt ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Das Werkzeug begrenzen, um das Denken zu schützen.** Ein neunwöchiges argumentatives Schreibdesign sequenzierte lehrkraftbegrenzte Chatbots, die Fragen stellen und sich weigern, Studierendenprosa zu generieren, und vier Sekundarstufenschülerinnen und -schüler bewegten sich von passiven KI-Konsumenten zu Evaluierenden, die gegen Output zurückdrängten — strategische Begrenzung, nicht uneingeschränkte Generativität, verfolgte die Zuwächse ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Rubrikgeführtes Prompting als Designhebel.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] demonstrierten, dass die Rubrik als vermittelndes Interface zwischen menschlicher pädagogischer Absicht und Maschineninferenz fungiert: Assessmentkriterien als revisable Designartefakte zu behandeln — statt als feste Instrumente — und sie iterativ mit dem LLM zu ko-verfeinern hob die LLM-Mensch-Übereinstimmung bei studentischer Designarbeit von 54,75% auf 81,25%. Für LLMs entwickelte Rubriken müssen Präzision und Flexibilität ausbalancieren — zu vage lädt freie Interpretation ein, zu starr reduziert das Modell auf Mustererkennung —, und rollenbewusstes Prompting (Lehrkraft, Peer-Reviewer, Grant-Reviewer) ergab verschiedene evaluative Feedbacks. Das positioniert Rubrikengineering als konkrete Lerndesignpraxis für das Formen von KI-Evaluationsverhalten, wobei Human-in-the-Loop-Aufsicht essenziell bleibt.

**KI-Agenten für Instruktionsdesign** erweitern das Feld in [[agentic-ai|agentische KI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** ist der erste standardisierte, theoriegegründete Benchmark zur Evaluation LLM-basierter Instruktionsdesignagenten — seine 25.795-Szenario-Context-Matrix (51 Kontextvariablen × 33 ISD-Teilschritte aus ADDIE) zeigt, dass Agenten, die in klassischen ISD-Rahmenwerken (ADDIE, Dick & Carey, Rapid Prototyping ISD) gegründet sind, theoriefreie Agenten übertreffen, was empirisch validiert, dass Instruktionsdesign eine strukturierte Disziplin ist statt eine generische Promptingaufgabe. Agenten sind nicht nur *Bauer* von Designs, sondern auch *Kritiker* derselben: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] nutzen einen einzelnen autonomen Webagenten, der eine mehrstufige Onlinelektion wie eine lernende Person navigiert, um ein Lerndesign zu evaluieren, *bevor* echte Lernende sich einlassen — seine Beschreibung der Studierenden Erfahrung sagt vorher, wo Novizen aussteigen, und bringt umsetzbares Designfeedback, wobei es jede Baseline und sogar eine simulierte Kohorte von Studierenden auf einem globalen CS1-Kurs übertrifft. Das rahmt Prüfungsstart-, agentische Evaluation als kostengünstige Ergänzung menschlicher Designiteration. **[[wang-multi-agent-systems-learning-designers-2025]]** und **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** erkunden Multi-Agenten-Rahmenwerke, die rollenbasierte Agenten um Instruktionsdesignmodelle orchestrieren, während **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** untersucht, wie Lehrkräfte und Agenten gemeinsam technologisches-pädagogisches-Inhaltswissen anwenden. Diese Arbeit verbindet Instruktionsdesign mit [[benchmark|Benchmarking]], [[ai-ed-evaluation|Evaluation von KI in der Bildung]] und dem Design von [[curriculum-design|Curriculum]] in großem Maßstab.

### Verbindungen zu verwandten Konzepten

Lerndesign ist die Brückendisziplin von [[ai-education|KI in der Bildung]] — es verbindet [[curriculum-design]] (was zu lehren) mit [[scaffolding|Gerüstbau]] (wie Lernende zu stützen), [[educational-development|Lehr- und Curriculumsentwicklung]] (wie Lehrende vorzubereiten) und [[generative-ai]] (die Werkzeuge selbst). Es ist eng gekoppelt mit [[teacher-role|Lehre]], weil KI-Werkzeuge umformen, was Lerndesignerinnen und Lerndesigner und Lehrende tun, und mit [[ai-literacy|KI-Kompetenz]], weil effektive KI-Integration erfordert, dass Lehrende KI-Fähigkeiten und -Grenzen verstehen. Designarbeit löst sich letztlich in eine *Reihenfolge von Aktivität* auf: [[pedagogical-patterns|pädagogische Muster]] katalogisieren die erprobten Reihenfolgen von Zügen, sodass ein Designer entscheiden kann, wo in einer Lektion KI gehört statt nur was einzuschließen. Die [[learning-sciences|Lernwissenschaften]] sind das Forschungsfeld hinter diesen Prinzipien: wo diese Seite die professionelle Praxis der Schaffung von Lernerfahrungen abdeckt, studieren die Lernwissenschaften diese Praxis und ihre Designs empirisch und erzeugen die kognitiven, motivationalen und sozialen Prinzipien, die Lerndesign dann operationalisiert.

### Wie Lerndesign Lernzuwächse bestimmt

Lerndesign ist der Hebel, der entscheidet, ob KI [[learning-gains|Lernzuwächse]] oder bloß KI-inflationierte Leistung produziert. Die Evidenz der Wissensbasis ist darin konsistent: **dasselbe KI-Werkzeug ergibt große Zuwächse oder Nettoschaden, je nachdem wie die Lernerfahrung um es herum gestaltet wird.** [[instructional-guidance-genai-learning|Hou et al.]] zeigten, dass ein auf Lerntheorie gegründetes fünfstufiges Prompting-Rahmenwerk höherstufige kognitive Ergebnisse signifikant verbesserte, während Zugang zu KI allein es nicht tat; [[genai-mindtool-generative-learning|Mindtool]]- und [[airis-cognitively-activated-ai-physics-2026|AIRIS]]-Rahmenwerke bewahren die kognitive Arbeit der lernenden Person, sodass dauerhafte Zuwächse (statt Aufgabeneffizienz) resultieren. Designentscheidungen, die [[learning-gains|Lernzuwächse]] schützen — Gerüstbau, der einen Studierendenversuch erfordert, [[formative-assessment]] mit unassistierten Ergebnismaßen, und pädagogische Struktur, die die lernende Person als Agenten hält —, spiegeln den Befund des Feldes (siehe [[learning-gains]]), dass KI ein starker Zuwachs ist, wenn sie coacht, und ein Schaden, wenn sie antwortet. Umgekehrt fallen schlecht gestaltete KI-integrierte Lektionen der [[cognitive-offloading|Leistungs-Lernen-Lücke]] zum Opfer, wo offensichtlicher Erfolg kein Lernen verbirgt.

### Praktische Anleitung für Designerinnen, Designer und Entwicklerinnen und Entwickler

Für Lerndesignerinnen und Lerndesigner, Kursentwicklerinnen und -entwickler und Ingenieurinnen und Ingenieure, die KI-unterstützte Lernerfahrungen bauen, übersetzen sich die Befunde der Wissensbasis in umsetzbare Praxis. Eine Grenze ist es wert, markiert zu werden, bevor die Praktiken selbst kommen: Lerndesign, wie diese Seite es beschreibt, ist das Design eines Kurses für eine bekannte Kohorte, während dieselben Prinzipien, in ein Produkt eingebacken, das viele Kurse — gelehrt von Menschen, die die Designerin nie treffen wird — nutzen werden, die Arbeit von [[educational-technology-developers|Bildungstechnologieentwicklerinnen und -entwicklern]] sind, wo Defaults, Konfigurierbarkeit und Dokumentation pädagogisches Gewicht tragen:

**KI-Generierung in einem strukturierten Instruktionsmodell gründen.** KI-Inhalt ist nur so gut wie die pädagogische Struktur hinter ihm — explizite Struktur, nicht KI-Fließfähigkeit, bestimmt Qualität. Um ein anerkanntes Modell herum gestalten (ADDIE, Dick & Carey, rapid prototyping) und pädagogische Entscheidungen explizit kodieren, statt sich darauf zu verlassen, dass das Modell sie inferiert.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Ein Prinzipienebenen-Rahmenwerk ebenso adoptieren wie ein Instruktionsmodell.** Ein Kursmodell strukturiert ein Design; ein publiziertes Rahmenwerk setzt die Kriterien, die viele Designs erfüllen sollten. Ein Beispiel, das es wert ist, vollständig gelesen zu werden, ist Digital Promise's *Powerful Learning with Emerging Technology*, das seine Anleitung unter drei Prinzipien organisiert — Evidence-Based, Learner-Centered, Skill-Building —, jedes expandiert zu Praktiken und Strategien, und [[privacy|Datenschutz]], [[explainable-ai|Erklärbarkeit]] und Fairness an bestimmte Praktiken als Sicherheitsverpflichtungen hängt statt als optionale Extras.([[powerful-learning-with-emerging-technology-2025]])
**Die KI-Konfiguration auf die Aufgabe abstimmen, nicht auf Raffinesse.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] unterscheidet vier Schichten — Prompt, Kontext, Harness und verifizierte Schleife — und wendet ein Prinzip minimal hinreichender Schicht an: die am wenigsten komplexe Konfiguration nutzen, die zu einem verifizierbaren Ergebnis fähig ist, da hinzugefügte Orchestrierung Koordinations-, Verifikations-, Datenschutz- und Verstehenskosten mit sich bringt.

**Rollenbasierte Multi-Agenten-Workflows für Inhaltsproduktion nutzen.** Statt eines generischen Prompts, verschiedene Agenten/Rollen orchestrieren (Teaching Faculty, Instructional Designer, Course Coordinator), die durch eine definierte Pipeline kollaborieren — das spiegelt, wie echte Kursteams arbeiten, und ergibt vollständigere Materialien als ein einzelner Prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Unterrichtsanleitung geben, nicht nur KI-Zugang.** Ob Lernende direkt mit KI oder mit KI-generierten Materialien interagieren, auf Lerntheorie gebaute Anleitung (z. B. ein schrittweises Prompting-[[scaffolding|Gerüst]], gegründet in generativen Lernprinzipien) treibt höherstufige Ergebnisse; Zugang allein tut es nicht. Die Lernaktivität darum herum gestalten, wie der Geist lernt, und KI als kognitives „Mindtool“ behandeln, das Denken erweitert statt ersetzt.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Vergessen modellieren und Review planen, wo Verfall am schlimmsten ist.** G4L repräsentiert Wissensverfall mit einer Ebbinghaus-Vergessenskurve, getrieben von verstrichener Zeit und Wiederholungen, und priorisiert die Einheiten, die am verwundbarsten für Verfall sind, statt erneut zu servieren, was zuletzt am besten bewertet wurde ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) fügen einen operativen Zug hinzu, um zu entscheiden, wo KI eintritt: eine Aktivität entbündeln in die Komponenten, die am besten unabhängig gemacht werden, und jene, die am besten mit KI gekoppelt werden, wobei das Urteil der Lehrenden zentral für die Teilung bleibt ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Inhalte nachvollziehbar und reviewbar machen.** Eine menschliche Designerin oder einen menschlichen Designer KI-Output reviewen und korrigieren lassen, bevor er Lernende erreicht, und KI-Generierung so strukturieren, dass die pädagogische Begründung (warum dieser Inhalt, in dieser Reihenfolge) inspizierbar ist —, was sowohl Qualität als auch die Undurchsichtigkeitsanliegen adressiert, die [[trust|Vertrauen]]-generierte Instruktion untergraben.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **KI-generierte Medien auf der Skriptstufe reviewen, nicht nach Synthese.** PedaCo setzt Educator-Review auf das Skript — wo pädagogische Fehler billig zu beheben sind —, bevor irgendetwas gerendert wird; die bewertete Unterrichtsvalidität stieg von 3,07 auf 3,86, während die automatisierte Post-Synthese-Schicht nur zwei von fünf Dimensionen verbesserte ([[ai-video-dual-gatekeeping-2026|Kim, Baek und Kwak (2026)]]).

**Von Anfang an für [[accessibility|Barrierefreiheit]] gestalten.** [[universal-design-for-learning|UDL]]-Prinzipien anwenden, wenn KI-Werkzeuge und KI-generierte Materialien gebaut werden, damit sie vielfältige Lernende bedienen, statt Barrierefreiheit nachträglich nachzurüsten.([[ludia-udl-ai-thought-partner-2026]])

**Für das Ausliefermedium planen.** Instruktionsdesign für [[online-teaching-and-learning|Online-Lehre und -Lernen]] ist keine neutrale Übersetzung von Präsenzdesign — das Medium verändert, welcher Gerüstbau, welches Assessment und welche Interaktion viabel sind, und KI multipliziert sowohl die Gelegenheiten (skalierbare [[personalized-learning|Personalisierung]], Always-on-Unterstützung) als auch die Risiken ([[academic-integrity|Integrität]], [[cognitive-offloading|kognitive Auslagerung]]), die Designerinnen und Designer planen müssen. Die pädagogische Hülle der KI so bewusst online gestalten wie in Präsenzkontexten.

**Gegen einen Benchmark evaluieren, nicht gegen Gefühl.** Wenn Sie einen Instruktionsdesignagenten bauen, evaluieren Sie ihn gegen einen standardisierten, theoriegegründeten Benchmark (z. B. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), sodass Sie messen können, ob Gründung in einem echten ISD-Rahmenwerk den Output tatsächlich gegenüber einem generischen LLM verbessert.([[jeon-isd-agent-bench-2026]])

- **KI formt die Instruktionsdesignpraxis um.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|reviewen systematisch]] 28 Studien (2020-2025) und finden, dass KI Designer bei Inhaltsgenerierung, Vorlagen und Personalisierung unterstützt, und als Co-Worker/Kollaborateur/Partner konzeptualisiert wird statt nur als Werkzeug —, obwohl pädagogische Abstimmung und Praktikerbereitschaft Herausforderungen bleiben.

## Verbundene Konzepte

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] — Pädagogische Partnerschaften
- [[online-teaching-and-learning]] — Online-Lehre und -Lernen
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] — Umbrella: Pädagogien und Lehrstrategien in der KI-Bildung
- [[stakeholders]] — Umbrella: Menschen und Zielgruppen in der KI-Bildung (Lernende, Lehrende, Designer, Administration, Politik)

## Verbundene Artikel
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[tang-chatbots-learning-design-2026]] — Chatbot use in learning design: designers dwell on outcomes and pedagogy rather than content generation (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Teacher-AI interaction patterns in lesson design across experience and AI proficiency (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI in higher ed: engagement + mediating role of teaching methods
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taxonomy (boundary object) for classifying GenAI learning activities
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents: autonomous web agent evaluates lesson designs and predicts student dropout before students engage (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: Seven Levers and the Student Alone with AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI and Instructional Design Practice: A Systematic Review (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Making AI annoying on purpose: constraint in AI-supported writing (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Smart-classroom model and D-T-E loop improving M.Ed. instructional design proficiency in mathematics (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Teacher–AI co-design of learning tasks: trends and perspectives (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architecture of roles in AI-designed differentiated group activities (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
