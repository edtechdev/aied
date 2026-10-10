---
title: "Lernwissenschaften"
created: "2026-09-17T14:12:00-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/learning-sciences
source_updated: "2026-09-17T14:48:59-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Lernwissenschaften** – das interdisziplinäre Forschungsfeld, das untersucht, wie Menschen lernen und wie man Umgebungen gestaltet, in denen Lernen geschieht, und dabei auf [[cognitive-psychology|kognitive Psychologie]], [[learning-theories|Lerntheorie]], Informatik und Linguistik zurückgreift und seine Entwürfe mit empirischer Evidenz statt allein mit Theorie beurteilt. In dieser Wissensbasis ist es das Forschungsfeld rund um [[ai-education|KI in der Bildung]] statt eines der Schulfächer: Es liefert die Mechanismen, die KI-Systeme operationalisieren (Wissenskomponenten, [[mastery-learning|Meisterschaftsschwellen]], [[transfer-of-learning|Transfer]]), die Designobjekte, in die sie eingebettet sind ([[learning-design|geplante Kurssequenzen]], [[intelligent-tutoring|Tutoren]], [[feedback|Feedback]]regime) und die Standards, nach denen sie beurteilt werden ([[learning-gains|Lernzuwächse]], [[assessment-validity|Assessmentvalidität]], [[equity-in-ai-education|Gerechtigkeit]]). Seine organisierende Frage ist nicht, ob ein Werkzeug gut abschneidet, sondern ob sich ein Lernender verändert hat.

## Fragen zum Nachdenken

- Ein Lernender besteht jede Übungsaufgabe, also beendet die Meisterschaftsschwelle den Satz –, dann wendet er die Regel falsch an, wenn die Handlung unterbleiben sollte. Wessen Fehler ist das: der des Lernenden, der des Modells oder der der Stoppregel?
- Sequenz-Mining kann 554 Kurse als Muster beschreiben, ohne ein Klassenzimmer zu beobachten. Was gewinnt das Feld, und was verliert es, indem es gestaltete Absichten statt vollzogene Aktivität untersucht?
- Demografische Sensibilitität im Feedback eines LLMs sieht wie Anpassung aus, wenn sie das angegebene Bildungsniveau eines Lernenden verfolgt, und wie Bias, wenn sie die Stimmung verschiebt. Sollte ein Feld, das beides nicht trennen kann, weiterhin offene Modelle zur Bewertung nutzen?
- Verengt der Appetit der Lernwissenschaften auf kausales Design – randomisierte Zuweisung, kontrafaktische Audits, ausführbare Modelle des Lernenden –, was als Evidenz in der KI-Bildung zählt?

## Einführung

Die Lernwissenschaften untersuchen Lernen und die Gestaltung von Lernumgebungen, und sie sind über ihre Methoden ebenso definiert wie über ihre Themen: Experimente, Klassenraumversuche, [[quantitative-research|quantitative]] Modellierung von Studierendendaten, [[qualitative-research|qualitative]] Analyse von Entwürfen und Kontexten sowie designbasierte Forschung, die eine Intervention baut und sie im Gebrauch überarbeitet. Diese Breite trennt diese Seite von den Nachbarseiten, die die Rahmenwerke, die Praxis und die Instrumente liefern; der Abschnitt unten legt jede Grenze dar und was das Feld auf ihrer anderen Seite etabliert hat.

Diese Seite deckt das substanzielle Wissen ab, das solche Methoden erzeugt haben – was Lernende mit einem generativen Modell tun, welche Anordnungen Ergebnisse verändern, und wo die eigenen Instrumente des Feldes scheitern. [[discipline-specific-aied]] nimmt den gegenteiligen Schnitt und hält daran fest, dass Fachinhalt verändere, was Unterstützung tun solle; die Lernwissenschaften nehmen die übergreifende Sicht ein, und die Mechanismen, die sie testen, sind unter [[cognitive-psychology|kognitiver Psychologie]] versammelt.

### Wie KI in den Lernwissenschaften auftritt

- **Zuerst der Mechanismus, dann das Modell.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren und Stamper (2026)]] führten elf Experimente (N = 192) mit [[intelligent-tutoring|intelligenten Tutoringsystemen]] für Riichi-Mahjong durch und zeigten, dass Lernende, die eine übergeneralisierte Produktion zusammenstellten – die Handlung ohne ihre Anwendungsbeschränkung –, sie bei der ersten „Nicht-Handeln“-Aufgabe zu 61,5%–100% falsch anwendeten, gegenüber 12% erwartetem Fehler unter [[knowledge-tracing|Bayesian knowledge tracing]]. Bei einer 95%-Meisterschaftsschwelle beendete das System die Praxis, bevor Lernende einen Fall trafen, der erfordert, die Handlung zu unterlassen, daher blieb der Defekt unentdeckt. Kurze Nicht-Handeln-Praxis mit [[feedback|Feedback]], das die fehlende Beschränkung benennt, senkte die Fehlanwendung auf 0,0%–23,1% (Cohens h 1,70–2,44), und eine Sekundäranalyse von dreizehn K-12-*Decimal-Point*-Datensätzen fand dieselbe Struktur im Ganzzahl-Bias (84%–88% der Vergleichsfehler).

- **Das Optimum hängt vom Inhalt ab.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger und Carvalho (2025)]] behandeln das Beispiel-Problem-Verhältnis als Inhalt-Behandlung-Interaktion: In einem 2×2-Experiment mit 95 Teilnehmenden an Material zu Flächen in der Geometrie erzeugte reines Übungstraining größere [[learning-gains|Lernzuwächse]] bei wortgetreuen Fakten, während beispielintegriertes Training größere Gewinne bei verallgemeinerbaren Fähigkeiten erzeugte (β = 0,41, p = 0,038, d = 0,38). Ein simulierter Lernender (Apprentice Learner) reproduzierte den Crossover nur, wenn er einen [[cognitive-psychology|Gedächtnis-und-Vergessensmechanismus]] im ACT-R-Stil erhielt. Mehr Üben ist nicht gleichmäßig besser: gedächtnisorientierter Inhalt verlangt Abruf, und induktionsorientierte Fähigkeiten verlangen integrierte Beispiele.
- **Design als analysierbares Objekt.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec und Horvat (2026)]] wandten [[learning-analytics|Learning Analytics]] auf [[learning-design|Lerndesign]] selbst an und kodierten 29.064 Aktivitäten über 554 Kurse hinweg, geplant in einem freien Kursgestaltungswerkzeug. Erwerb (Acquisition) war der häufigste Lerntyp und der häufigste Einstiegspunkt; die stärkste Markov-Transition war Assessment → Diskussion (0,332) und die Regel mit der höchsten Konfidenz war Erwerb → Assessment → Übung → Übung (0,743, lift 1,45). Lerntyp verfolgte die beabsichtigte Ergebnisebene, wobei Erwerb von etwa 50% der Aktivitäten auf Bloom-Ebene 1 auf rund 20% auf Ebene 6 fiel. Die Autoren betonen, dies seien Vor-Implementierungs-Entwürfe: Ähnlichkeit mit flipped, [[inquiry-based-learning|forschungsbasierten]] oder [[project-based-learning|projektbasierten]] Sequenzen sei kein Beleg für Absicht.
- **Die Modelle prüfen, die bewerten.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto und Hovy (2026)]] auditierten sechs [[llm|LLMs]] über [[automated-essay-scoring|Essaybewertung]], [[formative-assessment|formatives Feedback]] und Fragebeantwortung hinweg, hielten den Aufgabeneingabewert fest, während sie nur den demografischen Kontext variierten (192.480 Aufrufe). Die Bewertung war stabil unter expliziten Personas, doch Llama-70B blähte unter impliziter Konversationshistorie seine eigenen Scores um 1,57 Punkte auf (p < 0,001), und höhere Bildung zog weniger lesbare und positivere Antworten nach sich –, eine Stimmungslücke von etwa vier Standardabweichungen. Lesbarkeitseffekte schrumpften, während Längeneffekte wuchsen, und einige Koeffizienten wechselten das Vorzeichen zwischen den Bedingungen. Die Autoren bieten es als Audit-Instrument, nicht als Einsatzurteil, und lesen die Verschränkung von demografischem und thematischem Signal als Bedrohung für [[assessment-validity|Validität]] und [[equity-in-ai-education|Gerechtigkeit]].

- **Kompetenz messen, und ihre Grenzen.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] organisiert Instrumente für kompetenten [[generative-ai|generative KI]]einsatz in vier Domänen – Wissen und Nutzung, epistemische Aufsicht, Verlässlichkeitskalibrierung und Kontrolle werkzeugnutzender Agenten –, und weigert sich, sie in ein einziges Kompetenzkontinuum zusammenzuziehen. Drei Korrelationen aus derselben Stichprobe zwischen selbstbewerteter und demonstrierter [[ai-literacy|KI-Kompetenz]] bündelten sich auf r = 0,055 (95%-KI [−0,047, 0,156], berichtetes N = 2.765), was der Autor als genug liest, [[self-report-measures|Selbstbewertungen]] als austauschbar mit Leistungs-Scores zu behandeln abzulehnen, wenngleich nicht genug, um einen Grenzwert zu setzen. Kein validiertes Instrument deckte die volle Menge der Entscheidungen ab, die werkzeugnutzende Agenten erzeugen; die vorgeschlagene geschichtete Batterie ist eine Designhypothese.
- **Selbstauskunft über die eigene Entlastung des Lernenden.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] übersetzt die Literatur zu [[cognitive-offloading|kognitiver Entlastung]] in PAUSE, einen rein browserbasierten Selbstcheck mit vier Domänen, jedes LLM-Ära-Item an eine Quelle verankert, ohne Komposit, ohne Speicherung und ohne Modell in Produktion; seine Bänder sind deskriptiv statt normiert, und eine Lesung darf Assessment-, Zulassungs- oder Einstellungsentscheidungen nicht rechtfertigen. Seine erklärten Grenzen zählen: Selbstauskunft über Entlastung ist anfällig gegenüber der Fähigkeit, um die es geht, eine Antwortende, die KI bewusst als [[scaffolding|Scaffold]] nutzt, liest bei mehreren Items als Entlastung, und ob KI-assoziierte Entlastung von allgemeiner Technologieabhängigkeit verschieden ist, bleibt offen.
- **Wo menschliche Expertise sitzt.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] berichten die klarste Arbeitsteilung: In einer zweimonatigen [[rct|randomisierten kontrollierten Studie]] mit etwa 900 unerfahrenen K-12-Tutoren und rund 1.800 Studierenden hoben Echtzeitvorschläge, gezogen aus dem Schlussfolgern erfahrener Tutoren, die Themenmeisterschaft um 4 Prozentpunkte (62% auf 66%, p < 0,01), und um 9 Punkte bei niedriger bewerteten Tutoren, zu etwa \\$20 pro Tutor pro Jahr, und verlagerten Tutoring hin zu Leitfragen. Die Gewinne waren proximal –, Tests am Jahresende bewegten sich nicht. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] finden Lehrende, die per Design dieselbe Position erreichen: Sechs Sekundarstufenlehrende, die Chatbots prototypten, spezifizierten einen begrenzten Experten, hielten Autoritätsgrenzen (Verantwortung für Lernen und Sicherheit ist nicht delegierbar) und Expertisegrenzen (das Modell mangelt ihres Wissens über einzelne Studierende), und delegierten Inhaltspräsentation, Übung und korrigierendes [[feedback|Feedback]], während sie Zielsetzung und [[summative-assessment|summatives Assessment]] für sich behielten.
- **Fähigkeit auf der Ebene des Feldes.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury und Liu (2026)]] befragten 127 Fakultätsangehörige mit einem für generative KI angepassten [[tpack|TPACK]]-Instrument: starkes Fachwissen und pädagogisches Fachwissen (M = 4,70–5,15) neben merklich niedrigerem technologieintegrierten Wissen, wobei holistisches TPACK am niedrigsten bei 2,55 war, Fachwissen mit keiner technologieintegrierten Domäne korrelierte, und die drei integrierten Domänen so hoch korrelierten (r = 0,81–0,91), dass sie als ein Faktor funktionieren mögen. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] liest die Governance-Schicht durch einen eingestellten Prototyp des britischen Staatsdiensts, dessen Codebasis ein Systemprompt plus eine Retrieval-Pipeline über kommerzielle Modelle war, und argumentiert, die Allgemeingültigkeit von Foundation-Modellen sowohl ermögliche schnelle Umwidmung zu [[educational-policy-ai|Politik]]werkzeugen als auch mache abweichenden Output zu einem dauerhaft nur abmilderbaren Risiko – Aufsicht, die über die Schleife blickt statt in ihr zu sitzen.

## Wie sich die Lernwissenschaften zu ihren Nachbarinnen und Nachbarn verhalten

[[design-based-research|Designbasierte Forschung]] ist die Methode, die dieses Feld entwickelt statt geborgt hat: Eine Intervention wird in einem arbeitenden Klassenzimmer gebaut und überarbeitet, wobei ihre theoretische Begründung mitüberarbeitet wird, sodass eine Studie sowohl ein Artefakt als auch ein Designprinzip ergibt. Das unterscheidet sie von einem Laborexperiment, das eine Ursache isoliert, indem es den Kontext still hält, und es ist der Grund, warum die Befunde des Feldes als Designwissen statt als Effektstärken ankommen. [[research-methods-aied]] nimmt den anderen Schnitt: Jene Seite überblickt das ganze Repertoire – Experimente, Befragungen, qualitative Arbeit, Benchmarks, Reviews, Konsensmethoden – als eine Wahl unter Instrumenten, abgewogen nach der Validität der Behauptung, die jede stützen kann. Diese Seite liest dasselbe Korpus von der substanziellen Seite und fragt, was das Repertoire über Lernen etabliert hat, wobei sie eine Methode danach beurteilt, ob ihre Designbehauptung den Kontakt mit Lernenden übersteht.

[[learning-theories|Lerntheorien]] versammeln die Kandidatenrahmenwerke – Behaviorismus, Kognitivismus, Konstruktivismus, soziokulturelle Darstellungen, Motivation und Selbstregulation – als Linsen für das Lesen von KI. Die Lernwissenschaften teilen dieses Vokabular, aber nicht diese Haltung: Hier ist eine Theorie eine Behauptung über einen Mechanismus, die ein Design entweder instanziieren oder widerlegen muss, und das Ansehen des Feldes ruht auf empirischer und Designarbeit statt auf der Kohärenz eines Rahmenwerks. Die Theorie-Seite ist jene, die man für das öffnet, was ein Rahmenwerk behauptet; diese Seite ist jene für die Evidenz, die ein Rahmenwerk angehäuft hat.

Das Feld baut auch Theorie, statt nur geborgte Rahmenwerke zu testen: [[theory-development-aied]] deckt die konzeptuelle Arbeit ab, die erklärt, wie Lernende, Lehrende und KI-Systeme interagieren, und es ist der Ort, wo die eigenen Konstrukte des Feldes argumentiert werden, bevor sie gemessen werden. Was von seinen Entwürfen üblicherweise erwartet wird, ist [[transfer-of-learning|Transfer]] – Wissen und Fähigkeit, die den Tutor, das Fach oder die Aufgabe überleben, in denen sie gelernt wurden –, weshalb ein innerhalb eines Werkzeugs gemessener Gewinn als schwächere Behauptung zählt als einer, der ohne es gemessen wird. Und weil eine gestaltete Umgebung eine zusammengesetzte Intervention ist, ist die Zuschreibung eines Ergebnisses zu einer Komponente das andauernde Messproblem des Feldes: [[educational-measurement|Bildungsmessung]] liefert den psychometrischen Apparat, der die Zuschreibung überhaupt argumentierbar macht, weshalb Messfragen hier früh statt nachträglich ankommen.

[[cognitive-psychology|Kognitive Psychologie]] ist die Disziplin auf Mechanismenebene, auf die das Feld am stärksten zurückgreift, und liefert begrenztes Arbeitsgedächtnis, Enkodierung und Abruf, zerlegbare Wissenskomponenten und die diagnostische Sprache der Lernendenmodellierung. Die Lernwissenschaften nutzen diese Mechanismen, ohne auf sie zu reduzieren: Ihre Analyseeinheit ist eine gestaltete Umgebung, die soziale, motivationale und kontextuelle Variablen trägt, die eine Laborbeschreibung von Gedächtnis nicht tut, und ihre Tests laufen an ganzen Interventionen statt an isolierten kognitiven Effekten.

[[pedagogy|Pädagogik]] und [[learning-design|Lerndesign]] decken Praxis ab – welche Lehrstrategie zu nutzen ist, und wie Ziele, Aktivitäten und Assessment zu einem Kurs zu sequenzieren sind. Beide sind das, was die Lernwissenschaften von außen studieren, als Objekte der Beschreibung und Evaluation; das Feld sagt einer Lehrkraft nicht, zu welcher Taktik sie als Nächstes greifen soll, es berichtet, was die Taktiken nachweislich tun. Lerndesign ist der engere Verwandte, da beide etwas produzieren, das implementiert und getestet werden kann, doch die Ausgabe des Designers ist ein lehrbarer Kurs und die Ausgabe des Feldes ist Wissen über Entwürfe im Allgemeinen.

Die Befunde zählen erst, wenn sie das Lehren erreichen, und diese Reise läuft über drei Seiten. [[educational-development|Lehr- und Curriculumsentwicklung]] ist die institutionelle Praxis, die sie trägt – Fakultätsentwicklung, Standards, Politik und Identitätsarbeit entscheiden, ob ein validiertes Design je ein Klassenzimmer erreicht, weshalb die Evidenz des Feldes routinemäßig dem voraus ist, was Institutionen implementiert haben. [[teacher-education|Lehrkräftebildung]] ist, wo das Wissen landen muss, bevor eine Lehrkraft den Raum betritt, und [[teacher-role|Lehre]] ist, wo es danach landet, im momentweisen Urteil darüber, wann einzugreifen ist, welches Instrument zu nutzen ist, und wann ein Lernender allein zu lassen ist. Keine der drei erzeugt lernwissenschaftliche Befunde; alle drei entscheiden, ob jene Befunde die Praxis verändern.

## Verbundene Konzepte

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Verbundene Artikel

- [[competent-generative-ai-use-measures-review-2026]] — Review and exploratory meta-analysis of measures for competent generative-AI use (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Correctness masking an incomplete rule: mastery stopping rules in adaptive learning (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Counterfactual audit of demographic signals in LLM student assessment (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Markov chains and pattern mining over 29,064 activities in 554 courses (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — A privacy-preserving, non-diagnostic self-check for AI-associated offloading (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Zero-shot governance: general-purpose AI in policy, read through the Redbox codebase (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Why the best example–problem ratio depends on content (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Teachers design bounded-expert chatbots, with selective delegation of instruction (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — Faculty GenAI TPACK: strong content knowledge, weak technology-integrated knowledge (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: a randomized trial of human–AI live tutoring at scale (Wang et al. 2024)
