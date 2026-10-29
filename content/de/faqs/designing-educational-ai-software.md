---
title: "Was sind Best Practices und Tipps für das Design wirksamer Bildungs-KI-Software?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Ihr Team hat einen funktionierenden Prototyp-Tutor und in drei Wochen eine Demo für einen Schulbezirk. Oder eine Partnerschule hat Sie gebeten, eine Chat-Oberfläche auf ihren Kursreader zu setzen, und jemand sagt, das sei eine Sache von zwei Wochen. Oder eine Beschaffungsprüferin hat den Sicherheitsabschnitt mit einer Zeile zurückgeschickt: Was genau haben Sie getestet?

Die Antwort ist enger, als die meisten Produktspezifikationen annehmen. Bildungs-KI funktioniert als begrenzter Experte unter menschlicher Aufsicht: Fähigkeit beschränkt auf eine definierte Domäne, verankert in von der Lehrkraft freigegebenen Inhalten statt im Modellgedächtnis, mit den Lehrkräften und Lernenden co-designt, die sie nutzen, und bewertet an anhaltender Mehrzug-Interaktion. Der letzte Teilsatz ist der, den die meisten Teams überspringen. Pädagogischer Schaden trat in jedem im Benchmark unten getesteten Modell auf, und die Fehlerraten stiegen von 17.7% in Ein-Zug-Interaktionen auf 77.8% in Mehrzug-Gesprächen.

## Die kurze Version

**1.** Schreiben Sie auf, was das System entscheidet und was eine Lehrkraft entscheidet. Diese Grenze wird zur Architektur.

**2.** Bewerten Sie Mehrzug-Interaktion mit Fachbezug gegen echten Lehrplan, nicht einzelne Prompts gegen ein allgemeines Sicherheitsraster.

**3.** Verankern Sie Antworten in freigegebenen Inhalten und halten Sie die prüfende Komponente von der konversationellen getrennt.

**4.** Behandeln Sie jede studentische Abgabe als nicht vertrauenswürdige Eingabe, auch wenn das System sie bewertet.

**5.** Bauen Sie das Versuchstor, den Eskalationspfad und die Übersteuerung durch die Lehrkraft vor dem Pilot.

**6.** Setzen Sie Barrierefreiheit und disaggregiertes Chancengerechtigkeits-Testing in die Spezifikation statt ins Backlog.

## Entscheiden Sie, was das System sein darf

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Die partizipative Designstudie von Reichert und Kolleginnen und Kollegen]] mit sechs Sekundarstufenlehrkräften korrigiert die Annahme, dass Bildungs-KI ein autonomer Agent sein sollte. Gebeten, Klassenzimmer-[[conversational-ai|Chatbots]] auf Papier zu prototypen, beschrieben alle Lehrkräfte einen begrenzten Experten entlang zweier Dimensionen. Autoritätsgrenzen hielten Lehrkräfte in Kontrolle, weil die Verantwortung für das Lernen und die Sicherheit von Studierenden nicht delegiert werden kann. Expertisengrenzen spiegelten das Fehlen kontextuellen Wissens der KI über einzelne Studierende, Klassendynamik und institutionelle Normen.

Die Architektur, die sie skizzierten, hatte vier Komponenten (Inhaltseingrenzung, Inhaltsdarstellung, Anpassung an Studierende, Aufsicht durch die [[teacher-role|Lehrkraft]]) auf drei Schutzschichten: Domänengrenzen, die den Umfang beschränken, Inhaltsfilterung, die sichere [[personalized-learning|Personalisierung]] ermöglicht, und eine Übersteuerung durch die Lehrkraft für uneindeutige Fälle. Die Delegation war selektiv. Auf Gagnés neun Unterrichtsereignisse abgebildet, begrüßten die Lehrkräfte KI für die Darstellung von Inhalten, das Bereitstellen von Übungsaufgaben und [[formative-assessment|formatives]] [[feedback|Feedback]] und lehnten sie für das Setzen von Zielen oder die Durchführung [[summative-assessment|summativer]] [[assessment|Assessments]] ab.

Zwei Voreinstellungen gehören in dieselbe Spezifikation: Richten Sie das System an expliziten Lernzielen aus, und stimmen Sie es auf freundliche, aber korrekte Antworten ab statt auf Zustimmung zu dem, was gerade getippt wird. Ein Tutor, der einer falschen Antwort schmeichelt, hat der studierenden Person beigebracht, die Antwort sei richtig.

Ein Detail ist jetzt billig und später teuer: Diese Lehrkräfte wollten behaviorale Transparenz, sichtbare Grenzen und Unsicherheitssignale, mehr als Erklärungen des Modellschlussfolgerns. Alle sechs baten um vollständige Gesprächsprotokollierung, Echtzeitwarnungen und Übersteuerungsmöglichkeit, gerahmt als professionelle Verantwortung und nicht als Misstrauen. Designen Sie das im ersten Sprint ein, denn die nachträgliche Integration von Protokollierung in einen Tutor, der unsichtbar wirken soll, ist eine Neuentwicklung.

## Testen Sie im Gespräch, nicht in einem Zug

Die Synthese [[pedagogical-safety|Pädagogische Sicherheit]] legt dar, dass konventionelles Sicherheitstesting für Bildung nicht ausreicht. Ein System kann toxische Inhalte vermeiden und trotzdem Schaden verursachen, indem es Antworten zu früh offenlegt, [[misconceptions|Fehlvorstellungen]] verstärkt, Reflexion unterdrückt, Abhängigkeit fördert oder von den Unterrichtszielen abdriftet.

Der [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]-[[benchmark|Benchmark]] beziffert das. Über alle getesteten Modelle hinweg, von offenen Modellen mit 3.8B Parametern bis GPT-5-mini, war [[pedagogy|pädagogischer]] Schaden universell, Skalierung verbesserte die Sicherheit nicht verlässlich, und die Fehlerraten stiegen von 17.7% in Ein-Zug-Interaktionen auf 77.8% in Mehrzug-Gesprächen. Die Verletzungsmuster variierten nach Fach. Seine Taxonomie mit 11 Dimensionen und 48 Unterrisiken deckt kognitive, epistemische, [[metacognition|metakognitive]], [[motivation|motivational]]-affektive, entwicklungsbezogene sowie Chancengerechtigkeits- und Unterrichtsausrichtungskategorien ab, und sie funktioniert als Design-Checkliste ebenso wie als Testsuite.

Lesen Sie die Eskalationszahl als Aussage über Ihren Testplan. Ein Tutor, der tausend Ein-Zug-Sonden besteht, kann vier von fünf Gesprächen scheitern, sobald eine studierende Person nachhakt oder ein drittes Mal fragt. Bauen Sie die Mehrzug-Testumgebung vor der Demo.

## Erden Sie die Inhalte und trennen Sie den Prüfer

Verankerung ist eine Architekturentscheidung. [[eduguard-safe-rag-llm-tutor|EduGuard]], ein sicherer [[rag|retrieval-augmentierter]] Tutor für die [[cs-education|Einführungsprogrammierung]], paart von der Lehrkraft freigegebenes Kursretrieval mit einem architektonisch getrennten Prüfer für Behauptungen, einer expliziten Kontrolle von [[cognitive-offloading|Überabhängigkeit]] und einem von der Lehrkraft verfassten Benchmark mit 600 Anfragen, der Fehlvorstellungen, Debugging, gemischtsprachige Anfragen und adversariale Direktantwort-Prompts abdeckt. Er übertraf die Baselines von GPT-4o-mini und Llama-[[socratic-method|sokratischen]] Tutoren.

Das Übertragbare ist die Trennung: Die Komponenten, die prüfen, führen kein Gespräch, und der Benchmark enthält Prompts, die geschrieben wurden, um Antworten zu entlocken, nicht um Höflichkeit zu prüfen. [[hallucination-risk|Halluzinationsrisiko]] behandelt den Fehlermodus, den freigegebenes Retrieval begrenzen soll.

## Behandeln Sie studentische Arbeiten als nicht vertrauenswürdige Eingabe

Das Bedrohungsmodell, das die meisten Designempfehlungen auslassen, sitzt in dem Artefakt, das bewertet wird. [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026) adversariale Red-Team-Evaluierung]] testete, ob Studierende einen LLM-basierten Bewerter durch Prompt-Injection in ihren Abgaben manipulieren konnten, und die Manipulation funktionierte: Injectionen, die den Bewerter anweisen, umrahmen oder in eine Rolle versetzen, verschieben die Punktzahl, ohne die Arbeit zu verändern.

Halten Sie Raster und Anweisungen außerhalb des von Studierenden kontrollierten Kontextfensters, entfernen oder markieren Sie anweisungsartige Inhalte, lassen Sie nie zu, dass eine Abgabe ihre eigenen Kriterien setzt, und halten Sie bei jeder folgenreichen Note eine menschliche Entscheidung. Ein Bewerter, der seine Anweisungen aus dem Text liest, den er beurteilt, hat das Raster an die Kandidatin übergeben.

## Scaffolden Sie die Arbeit, statt sie zu erledigen

Ein System, das antwortet, beendet das Denken, für das es gekauft wurde. Zwei Teile gehören ins Ticket: ein Versuchstor, damit keine Ausgabe erscheint, bevor die studierende Person etwas festgelegt hat, und ein [[human-in-the-loop-ai|menschlicher Eskalationspfad]] mit benanntem Ziel, was für ein Klassenraumprodukt die Lehrkraft bedeutet, in einer Form, auf die eine Lehrkraft reagieren kann. [[scaffolding|Scaffolding]] und das [[socratic-method|sokratische]] Muster sind die Produktversion dessen, was ein Unterrichtsplan von Hand tut; [[developing-ai-tutor]] behandelt Diagnose, Hinweisleitern und Feedback im Detail.

## Setzen Sie Barrierefreiheit und Chancengerechtigkeit in die Spezifikation

Anforderungen an Barrierefreiheit sind konkret genug für einen Sprint: Bedienbarkeit per Tastatur, Screenreader-Kompatibilität, Untertitel und Transkripte, angemessener Kontrast, nutzbare Textalternativen und Kompatibilität mit assistiven [[ai-technologies|Technologien]]. KI-generierte Barrierefreiheitsfunktionen brauchen weiterhin eine Qualitätsprüfung. Siehe [[accessibility]].

Chancengerechtigkeits-Testing sollte die gesamte Pipeline untersuchen und das Verhalten nach Sprache, Behinderung, Kultur und anderen relevanten Merkmalen von Lernenden disaggregieren, statt sich auf aggregierte Genauigkeit zu verlassen. Ein System, das im Durchschnitt gut und für eine Gruppe schlecht abschneidet, hat den Fehler an diese Gruppe ausgeliefert. Siehe [[bias-mitigation]] und [[equity-in-ai-education|Chancengerechtigkeit]].

## Designen Sie mit den Menschen, die es nutzen werden

[[ko-hughes-vsd-student-centered-its-2026|Ko und Hughes]] wandten werteorientiertes Design auf ein [[intelligent-tutoring|intelligentes Tutorsystem]] mit Studierenden und Lehrkräften eines Community College an, einer Gruppe, die beim Design von Lernplattformen historisch ausgeschlossen wurde. Sie fanden Wertespannungen, die zu managen statt zu lösen sind: Transparenz versus Interpretierbarkeit, [[privacy|Privatsphäre]] versus didaktische Einsicht und [[agency|Handlungsfähigkeit von Studierenden]] versus systemgeführtes [[scaffolding|Scaffolding]]. Studierende bevorzugten kollaborative, vermenschlichte Erklärungen gegenüber roher Modelltransparenz, und der Prototyp kodierte 16 wertekonforme Merkmale über [[explainable-ai|Explainable AI]], Human-in-the-Loop und Privatsphäre-Kontrollen.

[[wang-teacher-ai-co-design-review-2026|Die Übersicht von Wang, Liu und Islam]] über 28 empirische Studien liefert ein Vokabular zur Werkzeugwahl. [[generative-ai|Generative KI]] wird vor allem für Unterrichtsplanung, Prompt-Erzeugung und kreative Ideenfindung genutzt, wobei KI weit häufiger als Assistent oder Inhaltsgenerator wirkt denn als Co-Designer, und vier Affordanzen – Effizienz, Reaktionsfähigkeit, [[creativity|Kreativität]] und [[equity-in-ai-education|Chancengerechtigkeit]] –, mit denen Lehrkräfte beurteilen können, welches Werkzeug zu welchem Designproblem passt.

Beide Studien behandeln Design als [[human-in-the-loop-ai|Human-in-the-Loop]]-[[human-ai-collaboration|Zusammenarbeit]] und als [[usability-research|Usability-Forschung]] statt als Öffentlichkeitsarbeit. Beide fanden, dass Stakeholder Anforderungen aufdeckten, die kein Genauigkeitsbenchmark erfassen würde, und das ist das praktische Argument dafür, für die Sitzungen zu zahlen: die Anforderungen, die Sie sonst im Pilotprojekt treffen würden.

## Was Designteams falsch machen

Sicherheit bedeutet Inhaltsmoderation. Schaden in einem Bildungsprodukt kommt oft als hilfreiche Antwort zum falschen Zeitpunkt. SafeTutors fand pädagogischen Schaden in jedem getesteten Modell und Fehler, die über ein Gespräch auf 77.8% stiegen, und das ist keine Kategorie, für die Inhaltsfilter gebaut sind.

Ein größeres Modell wird die Pädagogik reparieren. Skalierung verbesserte die Sicherheit über die Spanne von offenen Modellen mit 3.8B Parametern bis GPT-5-mini nicht verlässlich.

Ein guter Retrieval-Index bedeutet, dass die Inhalte erledigt sind. EduGuard paart Retrieval mit einem separaten Prüfer und testet adversariale Direktantwort-Prompts, weil verankertes Retrieval weiterhin einen Weg zur übermäßigen Offenlegung lässt.

Die Lehrkraft ist der Rückfallpfad. Alle sechs Lehrkräfte in der Designstudie verlangten Protokollierung, Warnungen und Übersteuerung als Bedingung professioneller Verantwortung. Ein Support-Ticket ist keine Übersteuerung.

Barrierefreiheit ist ein späteres Ticket. Sie steht in der Spezifikation oder wird zur Neuentwicklung, und generierte Alternativtexte und Untertitel brauchen weiterhin eine menschliche Prüfung.

## Was Ihnen entgegenkommen wird

**„Wir können vor dem Start keine Evaluationsumgebung bauen.“** Bauen Sie eine kleine. Die erste Aussage, die Sie brauchen, ist, was über fünf Züge hinweg passiert. Nehmen Sie 40 echte Lehrplanfragen, führen Sie jede als Fünf-Zug-Gespräch mit einer studierenden Person, die dem Hinweis widersteht, und bewerten Sie gegen die 11 Dimensionen. Das ist ein vertretbarer Sicherheitsabschnitt, und er passt in einen Sprint.

**„Lehrkräfte wollen Prompts bearbeiten, und wir können nicht garantieren, was sie schreiben.“** Dann verengen Sie die Oberfläche, die sie bearbeiten. Der System-Prompt bleibt Ihrer; Ziele, freigegebene Inhalte, die Hinweisleiter und der Eskalationskontakt sind ihre. Die Architektur des begrenzten Experten existiert, damit die Konfiguration in einem Umfang bleibt, den Sie testen können.

**„Unsere Benchmark-Werte sind hoch.“** Genauigkeit bei Ein-Zug-Antworten sagt das Verhalten über ein Gespräch nicht voraus, und der Benchmark, der das Zweite misst, fand 77.8% Fehler in Mehrzug-Settings über jedes getestete Modell. Berichten Sie beide Zahlen, oder die erste wird als die zweite gelesen.

**„Vollständige Protokollierung ist ein Datenschutzproblem.“** Das ist sie, was für Zweckbindung statt für Verzicht spricht. Protokollieren Sie, was eine Lehrkraft zum Handeln braucht, minimieren Sie den Rest, beschränken Sie den Zugriff und sagen Sie im Produkt, was wie lange aufbewahrt wird.

## Was Sie diese Woche tun können

**1.** Schreiben Sie die Autoritätsgrenze auf eine Seite: was das System entscheidet, was die Lehrkraft entscheidet, und wofür Sie in einer Beschaffungsprüfung einstehen würden.

**2.** Verwandeln Sie die Taxonomie mit 11 Dimensionen in einen Testplan und führen Sie ihn mehrzügig mit 40 echten Fragen aus einem Kurs durch.

**3.** Trennen Sie den Prüfer vom Generator im Designdokument, auch wenn der erste Build beide in einem Prozess laufen lässt.

**4.** Fügen Sie das Versuchstor, das Eskalationsziel und die Übersteuerung durch die Lehrkraft mit Namen versehen der Warteschlange hinzu.

**5.** Setzen Sie die Barrierefreiheitsliste und eine Disaggregationsanforderung in die Abnahmekriterien dieses Releases.

## Wohin als Nächstes

[[developing-ai-tutor]] behandelt den Bau, und [[designing-ai-into-learning]] behandelt die pädagogischen Voreinstellungen darum herum. Ob das Ding nach dem Deployment funktioniert, steht in [[checking-whether-educational-ai-works]]; die Sicherheitskonzepte hinter dem Testplan in [[pedagogical-safety]] und [[hallucination-risk]]; für den Beschaffungskontext [[legal-issues-and-risks]].
