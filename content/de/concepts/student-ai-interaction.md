---
title: Interaktion zwischen Studierenden und KI
created: "2026-08-20T02:55:00-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
translation_of: concepts/student-ai-interaction
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

> **Interaktion zwischen Studierenden und KI** — die Muster, Prozesse und kognitive Arbeit darin, wie Lernende sich während des Lernens und [[problem-solving|Problemlösens]] mit [[generative-ai|generativen KI]]-Systemen einlassen. [[research-methods-aied|Forschung]] hier charakterisiert, was Studierende von KI verlangen, wie sich Prompts und Dialoge entwickeln, und wie Interaktionsqualität sich zu [[learning-gains|Lernergebnissen]], [[cognitive-offloading|kognitiver Auslagerung]] und [[agency|Handlungsfähigkeit]] verhält.

## Fragen zum Nachdenken

- Denken Sie an die letzten Prompts, die Sie (oder eine oder ein Studierender) an eine KI geschrieben haben. Würden Sie die meisten als Fragen nach der Antwort beschreiben, oder als Bitten an die KI, zu erklären, zu sondieren oder zu evaluieren? Was vermuten Sie, dass dieses Muster mit Lernen macht?
- Die Forschung findet, dass eine kleine Teilmenge von Fragetypen die meisten Studierendenanfragen ausmacht, und dass sich die Fragen verändern, während eine Aufgabe fortschreitet. Warum, glauben Sie, verengen sich die Fragen der Studierenden, und was legt das darüber nahe, wie sie das Werkzeug nutzen?
- Die Seite behauptet, flache, antwortensuchende Prompts seien mit reduziertem Lernen und Überabhängigkeit assoziiert, während reflexive, verifikationsorientierte Interaktion Verstehen stützt. Was trennt Ihrer Meinung nach einen „guten“ Prompt von einem „schlechten“ —, und ist das die Verantwortung der oder des Studierenden oder das Design des Werkzeugs?
- Wenn Interaktionsqualität durch Aufgabenkontext und Gerüstbau geformt wird, statt ein fixes Merkmal der oder des Studierenden zu sein, wie könnte ein Kurs oder ein Werkzeug neugestaltet werden, um ein breiteres, produktiveres Spektrum von Inquiry einzuladen?
- Wie würden Sie wissen, ob der flüssige KI-Dialog einer oder eines Studierenden echtes Lernen oder nur geschickte Delegation widerspiegelt —, und was würden Sie prüfen, um das herauszufinden?

## Einführung

Die Interaktion zwischen Studierenden und KI ist die beobachtbare Oberfläche des [[student-engagement|Engagements]] der Lernenden mit generativer KI — die Fragen, die sie stellen, die Prompts, die sie schreiben, die Weise, wie sie KI-Output aushandeln und verifizieren, und wie sich diese Muster über Aufgabenphasen und über die Zeit hinweg verschieben. Sie sitzt an der Schnittstelle von [[student-experience|Erleben der Studierenden]], [[prompt-engineering|Prompt-Engineering]] und [[learning-analytics|Learning Analytics]], und ist zentral für Debatten darüber, ob KI-Nutzung in der Bildung echtes Lernen oder [[cognitive-offloading|Überabhängigkeit]] darstellt. Wo [[human-ai-collaboration|Mensch-KI-Zollaboration]] die hochrangige Teilung kognitiver Arbeit zwischen Menschen und Modellen rahmt, ist die Interaktion zwischen Studierenden und KI die konkrete, messbare Vollziehung dieser Beziehung —, die spezifischen Anfragen, Prompts und Aushandlungszüge, die Lernende Moment für Moment machen.

### Was Studierende KI fragen

Ein Kernstrang der Forschung misst die **Typen und Qualität von Studierendenanfragen**. Studien wenden Taxonomien von Fragetypen an — zum Beispiel Graessers 18-Typen-Taxonomie —, um Interaktionen zwischen Studierenden und KI zu klassifizieren, oft mit Few-Shot-Klassifikatoren, um die Analyse über Hunderte oder Tausende von Interaktionen hinweg zu skalieren. Befunde zeigen, dass eine kleine Teilmenge von Fragetypen die Mehrheit der Studierendenanfragen ausmacht, und dass sich die Fragen, die Studierende stellen, **im Fortschreiten einer Aufgabe substanziell verändern** (z. B. [[student-ai-inquiry-types-cs2-2026]]). Diese Aufgabenabhängigkeit zählt: Interaktionsqualität ist kein fixes Merkmal der oder des Studierenden, sondern wird durch Problemkontext, [[scaffolding|Gerüstbau]] und die Affordanzen des KI-Werkzeugs geformt. Bei den jüngsten Altersstufen fanden [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]], dass Kinder (Alter 6–14) aktiv die Glaubwürdigkeit eines [[conversational-ai|Chatbots]] testeten, indem sie Fragen mit bekannter Antwort stellten (z. B. „wie groß ist ein T-Rex“) —, ein Ausdruck epistemischer Selbst-Handlungsfähigkeit —, während das modale Kind nur 1–3 Fragen stellte und ein herausragender Erstklässler 21 stellte, was unterstreicht, wie entwicklungsbezogene und individuelle Variation die Fragen prägt, die Lernende stellen.


Die Taxonomien selbst sind sich noch nicht einig: über 46 Kategorisierungen aus 33 Studien hinweg benennen ähnliche Labels verschiedene Phänomene, sodass der Review die *Interaktionsepisode* — einen zielgerichteten, zeitlich begrenzten Austausch — als Einheit vorschlägt, die Wissenserwerb, evaluatives Feedback, strategische Anleitung, dialogische Inquiry, Artefaktverfeinerung und Ko-Regulation umspannt ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).

Diese Taxonomiestudien ergänzend charakterisieren [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] die *Dialogform* von Studierendenanfragen. Unter 38 [[higher-ed|Undergraduates]], die unbeaufsichtigte argumentative Aufsätze erledigten, nutzten 76,32% ein einstufiges Fragen-Antwort-erhalten-Stopp-Muster — typischerweise den Assessmenttitel einfügend, ohne ihre Bedarfe zu spezifizieren, und identische Prompts erneut einreichend, wenn unzufrieden —, und 78,94% berührten [[generative-ai|GenAI]] nur am Anfang (Ideen, Hintergrund) oder Ende (Polieren, Länge) einer Aufgabe und hielten es getrennt von Lesen und unabhängigem [[writing-education|Schreiben]]; nur 23,68% unterhielten iterativen Hin-und-her-Dialog mit Folgefragen und eigener Schlussfolgerung. Die Autoren platzieren diese Muster auf einem Spektrum von **kognitivem Outsourcing** bis **kognitiver Reallokation** — dem GenAI-Zeitalter-Analogon von Oberflächen- vs. [[metacognition|tiefen Ansätzen]] zum Lernen —, wobei sie bemerken, dass die meisten Studierenden das Werkzeug als aufgerüstete Suchmaschine konzipierten, was sie auf das Outsourcing-Ende einschränkte.

Diese Muster als epistemische Arbeit neu rahmend, fand eine Analyse von 200 Ko-Programmier-Chatsitzungen, dass 78,8% der Studierenden-GenAI-Interaktionen auf nicht-meisterschaftsorientierten Zielen und Strategien wie Outsourcing oder Verifikationssuche liefen, und nur 11,1% meisterschaftsorientierte Ziele mit epistemischer Begründung koppelten ([[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]]).

Die Kodierung von 50 stichprobenartigen Austauschen gibt eine dreifache Typologie desselben Verhaltens: [[three-pathways-student-ai-interaction-2026|Zahra (2026)]] klassifizierte 46% als Passive Review, wo das Modell als Orakel wirkt und Output mit geringer Prüfung akzeptiert wird, 18% als Direct Question, und 36% als Strategic Dialogue, und paarte die Verteilung mit einem Begrenzung-zuerst-Designargument (kappa = .48 zwischen Kodierenden). Eine Sieben-Aufgaben-Umfrage mit 211 Informatikstudierenden erreicht dieselbe Schlussfolgerung aus der anderen Richtung: [[student-llm-use-cs-subfields-2026|Nizamani et al. (2026)]] maßen LLM-Übernahme von 89,6% in Algorithmen bis 15,2% in Softwaretechnik und schrieben die Streuung Aufgabenkomplexität, Verifizierbarkeit und Gerüstbau zu statt dem Teilgebiet.

### Interaktionsqualität und Lernen

Ein ergänzender Strang verknüpft die *Form* der Interaktion mit Lernen. Flache oder habitual enge Prompts (KI zu bitten, die Antwort zu produzieren, statt zu erklären, zu sondieren oder zu evaluieren) sind mit reduziertem Lernen und erhöhter Überabhängigkeit assoziiert, während reflexive, verifikationsorientierte Interaktion [[metacognition|Metakognition]] und dauerhaftes Verstehen stützt. Das verbindet die Interaktion zwischen Studierenden und KI direkt mit [[intelligent-tutoring|KI-Tutoring]]design: Systeme können gebaut werden, um ein breiteres, produktiveres Spektrum von Inquiry einzuladen und Fragenstellen zu gerüsten, statt bloß zu antworten. Interaktion muss nicht durch antwortensuchende Prompts laufen —, wenn KI die eigene Arbeit der Studierenden kritisiert, wird der Austausch ein reflexiver, verifikationsorientierter Dialog: in [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] zeigten die Antworten der Lernenden auf [[llm]]-Aufsatz-[[feedback|Feedback]] Reflexion in 92,7%, Akzeptanz in 93,6%, und aktive Widerlegung von LLM-Behauptungen in 87,8% der Fälle (inter-rater κs = 0,81–0,89), und ihre Antwort-auf-[[ai-feedback-quality|Feedbackqualität]] verbesserte sich über Iterationen hinweg als lehrbare Fähigkeit. Die reflexive Seite der Interaktion muss nicht durch direktes Prompting laufen —, in [[breideband-community-builder-cobi-2026|CoBi]] ließen sich Studierende auf klassenweite KI-Visualisierungen ihrer eigenen [[collaborative-learning|kollaborativen]] Rede ein und berieten, wann die Klassifikationen der KI falsch schienen, wobei sie scheinbare Fehlklassifikationen in Gelegenheiten verwandelten, ihr Verstehen der Fähigkeiten und Grenzen der KI zu kalibrieren ([[trust-calibration]]), statt ihren Output rein zu akzeptieren. Die Verbindung zwischen Interaktionsform und Lernen hat eine Grenze: [[page-cognitive-partnership-cycle-human-ai-2026|Page (2026)]] trennt *konversationelle Iteration* von *kognitiver Iteration* auf der Grundlage, dass eine lernende Person einen Output über viele Turns hinweg verfeinern kann, während das mentale Modell dahinter unverändert bleibt, sodass der Beleg des Lernens eine Veränderung der kognitiven Position der lernenden Person ist statt der Länge oder Flüssigkeit des Austauschs —, Turnzahl ist kein Proxy für Engagementtiefe.

Die Interaktion, nicht das Werkzeug, bestimmt den Pfad: in einem Feldexperiment mit knapp 1.000 Mathematikschülerinnen und -schülern der Sekundarstufe hob uneingeschränktes GPT-4 Übungsnoten 48%, senkte aber unassistierte Klausurnoten 17%, während dasselbe Modell, auf lehrkraftdesignte Hinweise beschränkt, Übung 127% hob und das Defizit weitgehend auslöschte ([[naim-bypass-offload-scaffold-llm-learning-2026|Lee, 2026]]).

Ob Studierende effektiv prompteten, nicht wie viel, verfolgte Erfolg: AI Query Efficiency und AI-Driven Problem-Solving waren die stärksten Prädiktoren akademischer Leistung über 128 Ingenieurstudierende hinweg, und blieben nach Kontrolle des GPA signifikant ([[isaza-chatgpt-engineering-prompting-2026|Isaza Dominguez et al. (2026)]]).

Verhaltenskontext ist ein separates Signal von der Frage selbst: in TutorTraces vier Deployments (480 Lernende, ~180.000 IDE-Events) schnitt die Bedingung von Hilfe auf den jüngsten Verhaltenszustand einer lernenden Person Intervalle zwischen Anfragen ohne unabhängige Arbeit von 50,0% auf 20,7%, und unmittelbar bevorstehende Anfragen waren aus Verhalten allein vorhersagbar (AUROC = .726) ([[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]]).

Dichte ist nicht der Mechanismus: Studierende zwischen Stimme und Text abzuwechseln verdoppelte Dialogturns pro Minute fast (1,34 gegenüber 0,75), ohne wöchentliche Meisterschaft zu verändern, und die Autoren lesen die mediane 26-Sekunden-Überlegung des getippten Kanals vor dem ersten Tastendruck als den Enkodierakt selbst ([[ai-tutor-modality-randomized-field-experiment-2026|Yang, Van Alstyne and Dellarocas (2026)]]).

Eine Verifikationsschleife kann flach bleiben: Lag-Sequenzanalyse eines vierwöchigen LLM-Agenten-Deployments in einem undergraduate Datenbankkurs fand einen signifikanten Anfrage-Evaluation-Anfrage-Zyklus, doch starke Selbstübergangsschleifen innerhalb niederer Ordnungszustände und nur 3,92% der Interaktionen, die höherstufige Kognition erreichten ([[li-dbagent-llm-educational-agent-cs-2026|Li et al. (2026)]]).

Bernstein und Sibia (2026) dokumentieren ein iteratives-Filter-Muster darin, wie CS2-Studierende GenAI-Erklärungen handhaben ([[student-reception-genai-analogies-computing-2026]]): sie querreferenzieren gegen Vorlesungsnotizen, verlangen Provenienz („I would be a lot more doubtful... without one“), und sondieren mit Folgefragen auf Inkonsistenz, statt ein einzelnes Akzeptieren-oder-Ablehnen-Urteil zu fällen. Studierende lesen Erklärungen auch nach deren Wissen und Hintergrund, den sie annahmen —, angenommenes [[prior-knowledge|Vorwissen]] über den Syllabus hinaus, Standardsport- und Gaming-Referenzen („the more male-dominated side of computing“), und exzessive Wiederholung fungierten alle als Signale über den imaginierten Leser, wobei Über-Gerüstbau als herablassend gelesen wurde statt bloß als ineffizient.

KI im richtigen *Punkt* einer Aufgabe zu konsultieren zählt so viel wie die Formulierung des individuellen Prompts: in derselben Studie fanden [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]], dass die reallokationsorientierte Minderheit unabhängige Arbeit mit GenAI-Konsultation abwechselte und unveränderte Gesamtanstrengung, aber einen verschobenen Fokus berichtete —, wobei sie Ressourcen vom Suchen zum Prüfen argumentativer Qualität und Balance verlagerten, und Reflexionsnotizen nach Sitzungen schrieben, um flacher Retention entgegenzuwirken —, während Lernende mit Meisterschaftszielen, aber schwacher [[ai-literacy|KI-Kompetenz]] in ein „Effizienzparadox“ fielen, auslagernd „nicht aus Absicht, sondern standardmäßig“.

### Von der Interaktion zur Pädagogik

Die Interaktion zwischen Studierenden und KI zu charakterisieren informiert [[learning-design|Lerndesign]]: Lehrende können bemerken, wenn die Fragemuster der Studierenden eng oder flach sind, und Interventionen gestalten, die Inquiry verbreitern; [[teacher-role|Lehre]] verschiebt sich hin zum Coaching Studierender, produktiv mit KI zu interagieren. Es gründet auch [[ai-literacy|KI-Kompetenz]]curricula, die effektives Prompting und Verifikation als lehrbare Fähigkeiten behandeln statt als angeborene Fähigkeiten.

Designhebel können diesen Default verschieben: in einem etwa 70-Studierende-asynchronen Physikkurs war das benotete Artefakt das Dialogtranskript statt einer Antwort, doch viele Studierende stellten immer noch lange Listen von Fragen, ohne die sokratischen Folgefragen des Modells zu beantworten —, das Versagensmodus, das die Kriterien abzufangen geschrieben wurden ([[context-prompts-physics-assignments-2026|Rodriguez & Wulff (2026)]]).


Von Lehrkräften verfasste Prompts sind ein solcher Hebel, aber vollzogene Rigorosität hinkt dem Ziel hinterher: über 1.479 Gespräche hinweg unterschritten 38% das von der Lehrperson intendierte Depth-of-Knowledge-Niveau und näherten sich 50% bei DOK 3, während explizite Ziellinien diese Lücke um 0,22 Niveaus verengten und eine „keine direkten Antworten“-Leitplanke KI-Finalantwortraten um 8,5 Prozentpunkte schnitt ([[teacher-authored-prompts-student-ai-dialogue|Liu et al. (2026)]]).

Nichtnutzung ist selbst ein Interaktionsmuster, für das [[pedagogy|Pädagogik]] planen muss. [[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al. (2026)]], 85 [[teacher-education|Lehramtsstudierende]] in drei Kursen untersuchend, wo GenAI-Nutzung in [[assessment|Assessment]] explizit erlaubt war, fanden, dass 62,4% (53 von 85) ablehnten, sie überhaupt zu nutzen, weit unter der 79–83%-Übernahme in vergleichbaren britischen und australischen Umfragen, und dass die Nutzung der Übernehmenden flach und korrektiv war statt generativ (Korrekturlesen 43,8%, Klarheitsprüfungen 34,4%, Textgenerierung nur 18,8%). Ihre Entscheidungen verfolgten Assessmentdesign und institutionelle Kultur statt technische Schwierigkeit: 41,5% der Nichtübernehmenden fürchteten, fälschlich des [[academic-integrity|Plagiats]] beschuldigt zu werden, und neun von elf Interviewten lasen die permissive Politik selbst als mögliche „Falle“. Die Lücke zwischen 32 umfrageberichteten Nutzenden und 28 Selbsterklärungen zeigt, dass die *berichtete* KI-Interaktion der Studierenden durch benotete Folgen geformt ist —, ein Messvorbehalt für Learning-Analytics-Accounts der Interaktion zwischen Studierenden und KI.


## Disziplin und kognitives Engagement im Studierenden-KI-Chat

- **Disziplinassoziiertes kognitives Engagement im Studierenden-KI-Chat.** Chang und Li (2026) analysieren Studierendenprompts an KI über 116 Kurse hinweg mit einem within-person, cross-discipline Design und zeigen, dass Studierenden-KI-Gespräche **disziplinassoziiertes** kognitives Engagement widerspiegeln statt fixe individuelle Interaktionsstile. Etwa 62% der Prompts enkodierten insgesamt höherstufige kognitive Anforderung, aber Bloom-Niveau-Profile unterschieden sich scharf nach Disziplin: [[stem-education|STEM]]-Kurse riefen Apply-prävalente Prompts hervor (20,8%), Sprachkurse Understand-prävalente (31,7%), und Sozialwissenschaftskurse Create-prävalente (33,8%). Gepaarte within-person-Vergleiche bestätigten, dass dieselben Studierenden in Sozialwissenschaftskursen signifikant mehr höherstufige Prompts produzierten als in STEM-Kursen (gepooltes n = 16, p < .001), und Kursvariation übertraf Studierendenvariation —, ein starkes Argument, dass KI-Lehrassistenten mit disziplinärem Kontext im Blick gestaltet und evaluiert werden sollten.

## Verbundene Konzepte
- [[learners]] — Lernende: das Dach für die lernendenseitigen Konzepte
- [[human-ai-collaboration]]
- [[student-experience]]
- [[prompt-engineering]]
- [[learning-analytics]]
- [[cognitive-offloading]]
- [[intelligent-tutoring]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[llm]]
- [[ai-literacy]]

## Verbundene Artikel
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Cognitive outsourcing vs. reallocation in unsupervised student–GenAI assessments (Yan et al. 2026)
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — „Is this a trap?“: student teachers' non-adoption of GenAI in assessments (Zou et al. 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[student-llm-interaction-taxonomy-review-2026]] — Student-LLM Interaction Taxonomy Review
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts in Student-AI Dialogue
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): LLM Integration in CS2
- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education
- [[isaza-chatgpt-engineering-prompting-2026]] — Logged prompting and integration behaviors
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning
- [[ai-tutor-modality-randomized-field-experiment-2026]] — When AI Tutors Speak: Evidence from a Randomized Field Experiment
- [[context-prompts-physics-assignments-2026]] — Artificial Intelligence Driven Physics Assignments using Context Prompts
- [[three-pathways-student-ai-interaction-2026]] — Three Pathways typology of student-AI interaction: 46% Passive Review, 18% Direct Question, 36% Strategic Dialogue
