---
title: Pädagogische Agenten
created: "2026-08-08T11:47:01-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
connected_faqs: [ai-agents-support-students-instructors]
translation_of: concepts/pedagogical-agent
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

> **Synthese**: [[pedagogy|Pädagogische]] Agenten sind KI-getriebene konversationelle Interfaces, die in Lernumgebungen eingebettet sind und pädagogische Strategien (Hervorlocken, Erklären, Scaffolding) nutzen, um [[student-engagement|Engagement]], Reflexion und Metakognition der Lernenden zu stützen. Entwürfe variieren von einfachen Informationslieferanten bis zu interaktiven Dialogpartnern, die sich an Lernendenzustände anpassen.

## Fragen zum Nachdenken

- Denken Sie an einen Moment, in dem ein Chatbot oder Tutor Ihnen eine perfekte Antwort gab, die Sie nicht klüger zurückließ. Was macht, dass eine KI „lehrt“ statt bloß „löst“ –, und warum könnte ein Benchmark-Score diesen Unterschied nicht erfassen?
- Die Seite findet, dass Tutoring-„Löse“-Scores und „Pädagogik“-Scores über Modelle hinweg nur schwach korrelieren. Was sollte Ihnen das über die Evaluation eines KI-Tutors nach seiner Fähigkeit sagen, Fragen zu beantworten?
- Einige Entwürfe geben der KI klare Rollen – Lehrkraft, Kommilitone, Mentor – und halten sogar einen Elternteil zentral einbezogen (wie in ParaTutor). Verändert es in Ihrer Erfahrung, wie [[learners]] mit einem Agenten interagieren, wenn man ihm eine klare Rolle gibt?
- Echte Studierende „umgehen“ oft die pädagogische Rahmung eines Chatbots, wenn die Ziele des Agenten mit den eigenen des Lernenden kollidieren. Warum könnte ein Lernender gutes Scaffolding rational ignorieren, und was impliziert das für die Annahme „wenn wir es bauen, werden sie sich engagieren“?
- Würden Sie lieber von einer KI lernen, die Ihnen Dinge sagt, von einer, die Ihnen Fragen stellt, oder von einer, die eine Gruppendiskussion vermittelt? Wie prägt Ihre Präferenz, was ein „pädagogischer Agent“ Ihrer Meinung nach sein sollte?
- Von einem einfachen Informationslieferanten bis zu einer Flotte spezialisierter Agenten, die einen ganzen Kurs orchestrieren –, wo denken Sie liegt der Wert (und das Risiko) von konversationellem KI-Tutoring tatsächlich?

## Einführung

Ein pädagogischer Agent ist eine interaktive KI-Komponente innerhalb eines Lernsystems, die Lernende über Dialog, Fragen oder Prompts anspricht, um kognitive und [[metacognition|metakognitive Prozesse]] zu stützen. Anders als passive [[visualization|Dashboards]] oder statisches Feedback setzen pädagogische Agenten evidenzbasierte Tutoringstrategien ein – etwa das Hervorlocken von Selbst[[assessment|bewertungen]] der Lernenden, bevor sie [[feedback]] geben, oder [[scaffolding|Scaffolding]] von [[problem-solving|Problemlösen]] durch sokratischen Dialog. Der Dachbegriff deckt nun alles ab, von einem einzelnen konversationellen [[intelligent-tutoring|intelligenten Tutor]] bis zu Flotten rollenspezialisierter [[agentic-ai|Agenten]], die dozieren, mentorieren, Zusammenarbeit erleichtern und sogar Kursgenerierung orchestrieren, alles verankert in jahrzehntelanger [[research-methods-aied|Forschung]] zu intelligenten Tutoringsystemen.

## Wie pädagogische Agenten in der Wissensbasis untersucht werden

**Entwurf und Architektur konversationeller Agenten.** Ein wiederkehrender Faden ist, wie Agenten strukturiert sind, nicht nur welche Modelle sie speisen. Das [[conversational-ai-tutors-framework|Rahmenwerk konversationeller KI-Tutoren]] argumentiert, bewährte ITS-[[ai-technologies|Technologien]] – [[knowledge-tracing|Knowledge Tracing]], Affekterkennung, [[student-modeling|Modellierung von Studierenden]] – sollten generative Tutoren verankern und das diagnostische Rückgrat bewahren, während [[generative-ai]] flexiblen Dialog liefert. Multi-Agent-Entwürfe treiben dies weiter: [[mooc-to-maic|MAIC]] ersetzt das „ein Video für N Studierende“ des [[online-teaching-and-learning|MOOC]] durch ein [[llm]]-getriebenes Klassenzimmer mit Teacher-, Assistant-, Classmate- und Analyzer-Agenten, um [[personalized-learning|personalisiertes Lernen]] im großen Maßstab zu liefern, während [[lecturaagents-multi-agent-teaching|LecturaAgents]] einen [[embodied-learning|verkörperten]] ProfessorAgenten ergänzt, dessen TASA-Algorithmus sichtbare [[teacher-role|Lehr]]handlungen (Handschrift, Hervorhebung) mit Lernendenprofilen ausrichtet. Selbst Eltern-Kind-Tutoring wird in [[paratutor-parent-child-tutoring|ParaTutor]] zum Zwei-Agenten-Problem, wo rollengetrenntes Scaffolding den Elternteil zentral einbezieht, statt einen generischen Chatbot ihn verdrängen zu lassen. Dieselbe rollenbasierte Logik erscheint in [[instructional-agents-multi-agent-course-gen|Instructional Agents]], wo Teaching-Faculty-, Designer-, TA- und Program-Chair-Agenten über ADDIE hinweg zusammenarbeiten, um Kursmaterialien zu erzeugen.

Eine komplementäre Nutzung rollenbasierter Agenten zielt auf [[teacher-education|Lehrkräfte]]praxis statt auf studentisches Lernen: [[educasim-cs1-instructional-practice|Mohne et al. (2026)]] kombinieren pädagogische Studierenden-Personas, Gedächtnis, das im tatsächlichen Kursmaterial verankert ist, und ein LLM-as-a-Judge-Speaker-Oracle, damit unerfahrende Lehrende eine Kleingruppenlektion üben –, 254 optionale Sitzungen mit durchschnittlich etwa 16 Minuten, zu etwa \\$0,05–\\$0,10 pro Sitzung.

**Lehrendes gegenüber lösendem Verhalten.** Ein zentraler empirischer Befund ist, dass Antwortproduktion keine Lernunterstützung ist. [[measuring-llm-tutors-teach-vs-solve|Messen, ob LLM-Tutoren lehren oder lösen]] zeigt, dass Löse- und Pädagogik-Scores auf Tutoring-Benchmarks nur schwach korrelieren (r = 0,421 über acht Modelle), mit dem Argument, Benchmarks müssten pädagogieorientierte Kriterien – Leitfragen, kalibrierte Hinweise, nicht-offenlegendes Scaffolding –, separat berichten. Das richtet sich an der [[stanford-evidence-base-ai-k12-2026|Tutoring-spezifischen gegenüber allgemeiner KI]]-Evidenz aus: Pädagogisch gestaltete Tutoren mit [[guardrails|Leitplanken]] mindern die Prüfungsscore-Rückgänge und das unterdrückte Schlussfolgern, die rohe allgemeine Chatbots erzeugen, und bewahren [[desirable-difficulties|wünschenswerte Schwierigkeiten]] und produktives Ringen, statt sie kurzzuschließen. Doch Benchmarks können überschätzen, wie gut selbst gestützte Tutoren in freier Wildbahn arbeiten. [[rethinking-scaffolding-llm-tutors|Scaffolding in LLM-Tutoren neu denken]] findet, dass echte Studierende die pädagogische Rahmung eines Chatbots häufig umgehen, eine rationale Antwort auf eine Fehlpassung zwischen den Zielen des Agenten und den eigenen des Lernenden –, daher muss Übernahme evaluiert, nicht angenommen werden.

**Rolle in Tutoring und Zusammenarbeit.** Agenten werden zunehmend nicht als Antwortgeber, sondern als Erleichternde und Vermittelnde positioniert. [[niari-ai-pedagogical-mediator-collaborative-learning|Niaris Rahmenwerk des pädagogischen Vermittlers]] überdenkt KI in der [[collaborative-learning|Zusammenarbeit]] als interaktionalen, epistemischen und regulatorischen Vermittler –, der Partizipation und geteilte [[regulation]] stützt, ohne Lehr- oder [[agency|Lernendenhandlungsfähigkeit]] zu verdrängen. Konkret behandelt [[golrang-propact-pair-programming-2026|kollaboratives KI-Tutoring (ProPACT)]] Zusammenarbeit selbst als den Gegenstand des Unterrichts, sagt dyadische Zusammenbrüche bis zu 30 Sekunden vorher und liefert minimal intrusive Stützen, die [[metacognition|Metakognition]] bewahren. [[embodied-inquiry-ai-facilitator-physics-2026|Verkörperte Untersuchung mit KI als Erleichternder]] zeigt, dass eine KI praktisches Modellbauen ergänzen kann, indem sie die Anwendung eines konstruierten Modells erleichtert, während die [[robot-assisted-language-learning-meta-analysis-2026|Metaanalyse zu robotergestütztem Sprachenlernen]] findet, dass Ergebnisse stärker davon abhängen, wie ein Roboter-Agent im Unterricht positioniert ist (gruppenbasierte Interaktion), als von seiner technischen Raffinesse. Ob die *Rolle*, die ein Agent spielt, genug ist, oder ob er auch sein *Verhalten anpassen* muss, wird von [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]] infrage gestellt: Eine „Book-Talk“-Studie an einer Grundschule ([[k-12|elementar]]) fand, dass ein fester „Studierenden-Peer“-Begleiter längere Interaktionen aufrechterhielt, doch die Handlungsfähigkeit der Studierenden unterdrückte und an eine „[[affective-computing|affektive]] Decke“ stieß (schwache emotionale/zukunftsorientierte Reflexion), mit dem Argument, Rollen*beschriftung* müsse mit rollen*adaptiver* Interaktionslogik gepaart werden statt mit einem monolithischen Einzelrollendesign.

[[ethics-training-agents-group-ethics-discussion-2026|Ethics Training Agents (Seo et al., 2026)]] zeigt, was passiert, wenn ein pädagogischer Agent moderieren statt lehren soll: Ein LLM-Erleichterer, der Zugfolge (Stacking mit 15-Sekunden-Melde-Fenstern), Zeitmanagement (automatisches Vorrücken einer Phase zum Abschluss nach 9 Minuten) und inkrementelle Batch-Zusammenfassung handhabte, senkte die kognitive Last der Teilnehmenden und gab ihnen ein Gefühl, die Diskussion sei „auf Kurs“ –, eine Teilnehmende stellte es günstig ChatGPT gegenüber, das sich „oft unorganisiert anfühlen oder es schwer machen kann, den Fortgang der Ideen zu sehen.“ Dieselbe Studie legt die Decke persona-basierter Agenten offen: Die drei unterschiedlichen [[ethics|ethisch]]-Orientierungs-Agenten wurden bei Beitrag, Vielfalt und Einfluss signifikant unter menschlichen Peers bewertet (Kruskal-Wallis p < 0,001), und Teilnehmende baten um prozessorientierte („wie der Agent schlussfolgert“) statt schlussfolgerungsorientierte Ausgabe.

**Wo konversationelle Agenten genutzt werden (und nicht) –, das Bild des Umbrella-Reviews.** Der [[conversational-ai-agents-umbrella-review-2026|Umbrella-Review zu konversationellen KI-Agenten]] (Ganguly et al. 2025, 34 Reviews) quantifiziert die CAI-Nutzung: Lehr- und Lernunterstützung (97,1% der Reviews), psychologische und [[motivation|motivationale]] Unterstützung (91,2%) sowie metakognitive und persönliche Entwicklung (88,2%) führen, während administrative Unterstützung (50%), Forschungs- und Informationsmanagement (52,9%) und Gesundheits-/medizinische Unterstützung (41,2%) hinterherhinken. Er hält auch fest, dass [[conversational-ai|CAI]]-Forschung durchgängige Designanleitung, CAI-spezifische [[usability-research|Usability]]-Methoden und konkrete Klassenzimmer-Orchestrierungsstrategien für die Rolle der Lehrenden mangelt –, was verstärkt, dass Design pädagogischer Agenten HCI-verankert, evidenzbasiert und auf [[ai-literacy|KI-Kompetenz]] bedacht sein muss.([[conversational-ai-agents-umbrella-review-2026]])

**Rollenorientierung ist eine Designvariable, keine stilistische Wahl.** Der [[wang-teacher-student-centered-agents-physics-2026|Vergleich von Physikagenten]] (Wang et al. 2026, 59 Lernende) isoliert prompt-spezifizierte Rolle, während Modell, Plattform und Temperatur festgehalten werden: Ein lehrkraftzentrierter Agent, verankert in einer begrenzten Lehrbuchquelle und aus der Perspektive der Dozentin bzw. des Dozenten antwortend, gegenüber einem studierendenzentrierten Agenten, konfiguriert mit Wissen über das Verständnis der Studierenden und skriptiert, Fehlvorstellungen zu diagnostizieren, das Konzept zu benennen und auf einen analogen Fall zu [[transfer-of-learning|übertragen]]. Die studierendenzentrierte Rolle gewann bei jedem gemessenen Ergebnis – Posttest-Leistung, niedrigere fremde und höhere germane kognitive Last, Fluss-Erleben und wahrgenommene Empathie –, obwohl der lehrkraftzentrierte Agent derjenige war, der für Genauigkeit und Lehrbuchtreue optimiert war. Das macht *Rolle und Interaktionsmuster* zu einem erstklassigen Designparameter neben [[prompt-engineering|Prompt]]- und Modellwahl, und zeigt, dass Empathie aus konversationeller Struktur konstruiert werden kann statt aus einem unterschiedlich trainierten Modell ([[affective-computing|affective computing]]).

**Autorierungsabsicht garantiert keine vollzogene Pädagogik.** Als 27 Mittelschullehrende ein lehrkräftegerichtetes Chatbot-Autorenwerkzeug konfigurierten, fand eine Evaluation von 108 Bot-Kriterienbewertungen, dass generierte Antworten weit besser auf Ansprechbarkeit (88,9%) und Persona (81,5%) ausgerichtet waren als auf Regeln (70,4%) oder den erklärten Zweck (59,3%), was die Autoren über pädagogische Formen von Normans Gulf of Execution und Gulf of Evaluation rahmen –, konfigurierbare Steuerungen allein machten die Instruktionsabsicht der Lehrkraft im Verhalten des Bots nicht sichtbar ([[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]]).

**Agenten in immersiven und Extended-Reality-Settings.** [[aclime-pedagogical-agents-extended-reality-2026|Ross und Kaspar (2026)]] erweitern das Konzept auf [[virtual-and-augmented-reality|Extended Reality]] (AR, augmented virtuality und VR) mit ACLIME, einem konzeptuellen Rahmenwerk, das – anders als CAMIL, CATLM-VR und TICOL – den Agenten im Inneren des Modells hält. Es benennt zwei Interaktionsmodi aus der Literatur: den Tutor, der Anleitung, Ermutigung, reflexive Fragen und Erklärungen anbietet, und den Rollenspielpartner, der eine definierte Rolle innerhalb eines Szenarios besetzt, etwa ein Einheimischer auf einer Exkursion zum Klimawandel oder ein verhandelndes Gegenüber in Unternehmensschulungen. Der Körper des Agenten (nur Kopf bis voller Körper) und sein Verhalten werden als Designoberflächen behandelt: visueller gegenüber verhaltensbezogenem Realismus, flexibler KI-Steuerung gegenüber fester regelbasierter Skriptung, synthetisierter gegenüber voraufgezeichneter Sprache und nonverbale Kanäle einschließlich Blick, Gestik und Proxemik. Es wird argumentiert, Immersion und körperbasierte Interaktivität vervielfachten die sozialen Hinweise hinter [[community-of-inquiry|sozialer Präsenz]] –, wobei verhaltensbezogener, nicht visueller Realismus als entscheidender Prädiktor vorgeschlagen wird –, während der eigene virtuelle Körper des Lernenden eine [[embodied-learning|Verkörperung]]dimension ergänzt (Körpereigentum, Handlungsfähigkeit des virtuellen eigenen Körpers, Selbstverortung) und den Proteus-Effekt. Der explizite Trade-off des Rahmenwerks ist kognitiv: Immersion und die bloße Präsenz des Agenten können kognitive Last heben, selbst wenn soziale Interaktion mit dem Agenten sie durch den kollektiven Arbeitsgedächtniseffekt senkt, und eine zeitliche Ebene (Vertrautwerden, reifende Mensch-Agent-Beziehungen, Neuheitsabnahme, sich entwickelnde Cyberkrankheit) wird den üblichen Designvariablen ergänzt. Sein Status ist absichtlich vorläufig: Kaum empirische Arbeit testet bisher pädagogische Agenten in immersiven Medien, und langfristige [[learning-gains|Lernendenergebnisse]] sowie Lernendenmerkmale sitzen außerhalb des Modells.

**Evaluation und Benchmarks.** Einen pädagogischen Agenten zu messen erfordert, Pädagogik zu testen, nicht Inhalt. [[teaching-monster-pck-benchmark-2026|Die Teaching Monster Challenge]] benchmarkt Pedagogical Content Knowledge, indem sie Agenten bittet, eine Lektion an eine spezifizierte Lernenden-Persona anzupassen, und findet Systeme stark im Inhalt, aber schwach darin, ihn anzupassen –, wobei sie offenlegt, dass LLM-Richter starke Systeme falsch einordnen. [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]] evaluiert Agenten über professionelles pädagogisches Urteil, [[situated-learning|situiertes]] Mehrfachumdrehungs-Tutoring und Canvas-Stil-Arbeitsablaufvervollständigung hinweg und zeigt, dass Modelle hinter professionellen Lehrstandards zurückbleiben. [[ai-generated-interactive-fiction-education-2026|KI-generierte interaktive Fiktion]] ergänzt einen Design-Evaluationswinkel: Kohärenz und Quiz-Integration, nicht Generierungsfähigkeit, begrenzen die Nützlichkeit für [[student-experience|das Erleben der Studierenden]].
**Persona-Robustheit über mehrere Umdrehungen stress-testen.** [[adversarial-stress-testing-role-playing-agents|Shouqi et al. (2026)]] führten sechs eskalierende Angriffe gegen Rollenspielagenten mit einem automatischen Richter aus: Multi-Strategie-Tests senkten die Robustheit um 0,17–0,20 gegenüber einer Einzelstrategie-Baseline, und kritische Fehler häuften sich nach Umdrehung 5–6, daher überschätzen kurze oder Einzelumdrehungs-Evaluationen Persona-Stabilität und ethische Bindung.

## Praktische Anleitung

Gestalten Sie für die Handlungsfähigkeit des Lernenden, nicht für die Bequemlichkeit des Modells. Begünstigen Sie tutoringspezifische Leitplanken – [[scaffolding|Scaffolding]], Hinweise, [[socratic-method|sokratisches Fragen]], [[misconceptions|Fehlvorstellungen]]-Adressierung – gegenüber roher Antwortgenerierung, da Lösen und Lehren divergieren. Verteilen Sie Unterstützung nach Nutzendenrolle (Elternteil gegenüber Kind, Peer gegenüber Peer) statt über ein einzelnes generisches Interface, und behandeln Sie Zusammenarbeit als gültiges Ziel für Scaffolding. Nehmen Sie nicht an, dass Studierende Scaffolding aufnehmen; evaluieren Sie Übernahme in echten Kontexten. Bauen Sie [[human-in-the-loop-ai|menschliche Aufsicht]] in das Autorenverfahren ein –, wie [[ai-tutor-authoring-promptdecipher|PromptDecipher]] es tut, indem es Lehrenden-QA von Bot-Antworten zu einer erstklassigen Aktivität macht –, und wählen Sie günstigere Backends, wo die Qualität hält. Berichten Sie Lehren- und Lösen-Scores separat, und validieren Sie generierte Inhalte mit Nutzenden, statt anzunehmen, Generierung sei gleich Nützlichkeit.

Lernendenpräferenz ist ein schlechter Stellvertreter für Scaffolding-Qualität: Studierende in KI-gestützter mathematischer Modellierung erbrachten mit Peer- und Teaching-Assistant-Rollen die besten Leistungen, bewerteten aber die direktiveren Tutor- und Excellent-Student-Rollen am höchsten bei Nützlichkeit und Selbstwirksamkeit ([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang und Yang (2026)]]).
 Ein Review von 46 Studien zu KI-Agenten im computergestützten kollaborativen Lernen unterscheidet kognitives Scaffolding, soziale Erleichterung und Instruktionsorchestrierung und findet kognitive Gewinne konsistent, während verhaltensbezogene, soziale und emotionale Ergebnisse kontextabhängig sind –, daher sollte die Funktion des Agenten nach dem Ergebnis gewählt werden, das er erzeugen soll ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

## Verbindungen zu verwandten Konzepten

Pädagogische Agenten sitzen an der Schnittstelle von [[intelligent-tutoring|intelligentem Tutoring]] (ihrem diagnostischen Rückgrat aus [[knowledge-tracing|Knowledge Tracing]] und Modellierung von Studierenden) und [[generative-ai|generativer KI]]/[[llm|LLMs]] (ihrem Liefermotor). Sie operationalisieren [[scaffolding|Scaffolding]] und [[feedback|Feedback]], zielen auf [[metacognition|Metakognition]] und [[self-regulated-learning|selbstreguliertes Lernen]] und zielen zunehmend auf [[collaborative-learning|Zusammenarbeit]]. Sicherheitsbedenken kehren über [[pedagogical-safety|pädagogische Sicherheit]], Autorierungsqualität und das Risiko wieder, dass Agenten Lernen [[cognitive-offloading|entlasten]] statt es zu stützen. All das wird über [[ai-ed-evaluation|Evaluation von KI in der Bildung]] und [[benchmark|Benchmarks]] bewertet, die Lehren messen müssen, nicht nur Lösen.

Entscheidend werden pädagogische Agenten nach ihren [[learning-gains|Lernzuwächsen]] beurteilt, nicht danach, wie flüssig sie antworten. Die Evidenz der Wissensbasis ist, dass Agenten dauerhafte Gewinne erzeugen, wenn sie als tutoringspezifische Coaches mit Leitplanken gestaltet sind –, [[stanford-evidence-base-ai-k12-2026|tutoringspezifische KI schlägt durchgängig allgemeine Chatbots]] –, und Lernen schädigen können, wenn sie für die Anstrengung des Lernenden einspringen ([[generative-ai-guardrails-harm-learning|die Leitplanken-RCT]], [[jost-llm-programming-education-learning-outcomes|LLM-Abhängigkeit und Noten]]). Das Messen der [[learning-gains|Lernzuwächse]] eines Agenten erfordert daher unassistierte, übertragbare Ergebnismaße, nicht Leistung im Werkzeug.

Besseres Feedback ist nicht dasselbe wie besseres Lernen: Das Anpassen eines Agenten mit Wissensbasen und einem Arbeitsablauf hob die Genauigkeit und Spezifität des Feedbacks, ließ aber selbstregulierende Verhaltensweisen, Lernerfahrungen und Ergebnisse unverändert, und sein Gewinnvorteil erschien nur unter direktivem Feedback ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

## Verbundene Konzepte
- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## Verbundene Artikel
- [[wang-teacher-student-centered-agents-physics-2026]] — Student-centered agent role outperforms teacher-centered role across performance, load, flow, and empathy (Wang et al. 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME: conceptual framework for pedagogical agents in AR/VR — tutor vs role-playing partner, realism, presence, cognitive load (Ross & Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim: generative student agents for instructional practice
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping review of conversational agents for novice programmers
- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred scaffolding in AI-supported mathematical modeling
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Role-adaptive AI companion for elementary book talk; affective ceiling of fixed-role agents (Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration

- [[teachers-configure-educational-chatbots-2026]] — Will It Teach as Intended? How Teachers Configure Educational AI Chatbots

- [[agent-type-feedback-style-self-directed-learning-2026]] — Customized agent raised feedback quality but not self-regulation or outcomes; gain edge only under directive feedback
