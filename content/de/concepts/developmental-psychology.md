---
title: "Entwicklungspsychologie"
created: "2026-11-18T18:45:00-05:00"
updated: "2026-11-18T18:45:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/developmental-psychology
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
connected_concepts: [cognitive-psychology, early-childhood-elementary-ai-education, parents-and-families, metacognition, executive-function, self-regulated-learning, scaffolding, cognitive-offloading, well-being, creativity, ai-literacy, longitudinal-research, research-methods-aied]
connected_articles: [guo-ai-literacy-developmental-paces-2026, ai-toys-child-development-2026, clara-developmental-appropriateness-children-stories-2026, niu-genai-children-creative-thinking-cognitive-development-review-2026, vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026, genai-reliance-executive-functioning-2026, horowitz-kraus-children-chatgpt-cognitive-control-2026, adolescent-chatbot-self-disclosure-help-seeking-2026, ai-connectedness-adolescent-mental-health-2026, ai-play-framework-early-childhood-2026, age-tiered-ai-literacy-guidebooks-2026, preservice-early-childhood-genai-magnetism-2026, pergantis-chatbots-executive-functions-systematic-review-2025, sharma-chatgpt-dependency-executive-dysfunction-stress-2026]
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Entwicklungspsychologie** — die Untersuchung dessen, wie sich kognitive, sprachliche, soziale, emotionale und motivationale Fähigkeiten mit dem Alter verändern, und welche Grenzen diese Veränderungen dem setzen, was Lernende tun können und welche Unterstützung sie brauchen. In der [[ai-education|KI in der Bildung]] liefert sie die Frage hinter jeder Altersangabe: nicht „Funktioniert dieses Tool?", sondern „Funktioniert es für einen Geist auf dieser Entwicklungsstufe, der genau diese Aufgabe bearbeitet?". Sie erklärt, warum dasselbe [[generative-ai|generative KI]]-Tool für eine 20-jährige Person eine sinnvolle Lernhilfe und für ein 7-jähriges Kind ein Entwicklungsrisiko ist, und sie markiert, wo solche Aussagen auf Hypothesen statt auf gemessenen Ergebnissen beruhen.

## Fragen zum Nachdenken

- Zwei Lernende nutzen denselben Chatbot für dieselbe Aufgabe. Was würde die Entwicklungspsychologie Sie prüfen lassen, bevor Sie die Interaktion als angemessen bezeichnen: nur das Alter oder etwas Spezifischeres?
- „Altersgerecht" wird in KI-Leitlinien ständig verwendet. Welche Evidenz bräuchten Sie, um diese Bezeichnung zu akzeptieren, und worauf stützt sie sich stattdessen üblicherweise?
- Exekutivfunktionen, [[metacognition|Metakognition]] und [[self-regulated-learning|Selbstregulation]] entwickeln sich ungleichmäßig. Wenn ein Tool für die Lernenden reguliert, welche Fähigkeit wird unterstützt und welche verdrängt?
- Die meisten Studien hier messen Lernende ein einziges Mal. Was kann eine einzelne Messung über Entwicklung aussagen — und was nicht?
- Spiel ist ein Entwicklungsmedium, keine Pause vom Lernen. Wenn ein KI-Spielzeug die Erzählung übernimmt, was übt das Kind dann noch?
- Die Adoleszenz wird sowohl als Risikofenster als auch als Gestaltungschance gerahmt. Was davon stützt die Evidenz?

## Einführung

Die Entwicklungspsychologie liegt mehreren Nachbarkonzepten zugrunde, ohne mit einem von ihnen identisch zu sein. Die [[cognitive-psychology|Kognitive Psychologie]] erklärt die Mechanismen (Arbeitsgedächtnis, Belastung, Verzerrungen, Abruf), sagt aber nichts darüber, wie sich diese Mechanismen mit dem Alter verändern. [[early-childhood-elementary-ai-education|Frühkindliche Bildung]] ist eine Seite zu einer Bildungsstufe: Sie behandelt Vorschule und Grundschule als Settings, und ihr Hinweis zum Geltungsbereich sagt ausdrücklich, dass ihre Anliegen entwicklungsspezifisch sind, ohne die entwicklungsbezogene Erklärung selbst zu liefern. [[parents-and-families|Eltern und Familien]] behandelt das Zuhause als Kontext. Was keines von ihnen tut: die Entwicklung selbst als Erklärungsrahmen zu behandeln — als den Grund, warum ein Design, das zu einem Altersband passt, in einem anderen fehlschlägt, und als den Grund, warum Aussagen über Langzeitwirkungen auf einen sich entwickelnden Geist so schwer zu treffen sind.

Dieser Rahmen ist in der KI-Bildung wichtiger als in den meisten anderen Feldern, weil KI-Tools typischerweise an Erwachsenen evaluiert und dann nach unten weitergegeben werden. Ein mit Studierenden getesteter Chatbot erreicht über eine Schullizenz ein 12-jähriges Kind; eine für Leseanfänger entwickelte App zur Geschichtengenerierung gelangt in Klassenzimmer; KI-Spielzeuge finden Eingang ins Spiel, bevor jemand gefragt hat, was sie mit dem Spiel machen. Die Übersichtsarbeiten gelangen aus unterschiedlichen Richtungen immer wieder zum selben Schluss: Die Entwicklungsevidenz ist dünn, die Mechanismen sind plausibel, und die Handlungsempfehlungen werden der Forschung vorausgeschrieben.

## Entwicklungsstufen und Fähigkeiten als Designbeschränkungen

Der konkreteste Nutzen der Entwicklungspsychologie liegt hier darin, Design zu beschränken — nicht Lernende zu etikettieren. CLARA, ein an der University of Auckland entwickeltes System, weigert sich, das Alter eines Kindes direkt vorherzusagen. Es zerlegt eine Geschichte mithilfe einer Entwicklungstaxonomie mit 122 Labels in kognitive, sprachliche und sozial-emotionale Anforderungen und aggregiert die aktivierten Labels anschließend zu einer Schätzung der Entwicklungsstufe. Diese Designentscheidung ist selbst das Argument: Was einen Text geeignet macht, ist nicht eine Zahl, sondern die spezifischen Anforderungen, die er an spezifische Fähigkeiten stellt.

Altersgestufte Ressourcen machen denselben Punkt von der Curriculumsseite her. Taiwans AI Learning Application Guidebook wurde in zwei Ausgaben erstellt: eine für Lernende von 9 bis 12 Jahren mit gescaffoldeten, plattformbasierten, nicht-generativen Aktivitäten und eine fortgeschrittene Ausgabe für 13- bis 18-Jährige mit authentischen Anwendungen, ethischer Reflexion und beaufsichtigter Nutzung generativer KI. Die Stufung ist der Substanz nach entwicklungsbezogen, nicht nur dem Schwierigkeitsgrad nach: Die Ausgabe für die Jüngeren vermeidet generative Tools, statt sie zu vereinfachen.

Das Risiko bei allen solchen Schemata ist, dass die Bänder zu groben Proxy-Variablen werden. Ein fünfjähriges und ein fünfzehnjähriges Kind unterscheiden sich in weit mehr als dem Abstand zwischen zwei Alterslabels, und ein einziges Band kann Kinder umfassen, deren Fähigkeiten um Jahre auseinanderliegen.

## Exekutivfunktionen als das maßgebliche Konstrukt

Wo die Evidenz hinsichtlich der Mechanismen konkret wird, landet sie meist bei den Exekutivfunktionen: jenen Prozessen, die planen, inhibieren, wechseln und Informationen lange genug halten, um sie zu nutzen. Die Entwicklungsfrage lautet, welche davon ein gegebenes Tool unterstützt und ob die Unterstützung das Tool überdauert. Die Unterscheidung von Kompensation, Scaffolding und Entwicklung bei Vasileiou und Kolleginnen und Kollegen formuliert diese Differenz am schärfsten, und Klarins Darstellung der Abhängigkeit Jugendlicher benennt den Fehlermodus: Die verdrängten Fähigkeiten sind noch in der Entstehung. Das Konstrukt, seine Messung und die Evidenz zur Abhängigkeit haben nun eine eigene Seite: [[executive-function|Exekutivfunktionen]].

## Adoleszenz als eigener Fall

Die Adoleszenz erhält eine eigene Behandlung, weil die betreffenden Fähigkeiten ebenso sozial wie kognitiv sind. Die Befragung von 2.023 Jugendlichen in den Vereinigten Staaten und Hongkong durch Hu und Kolleginnen und Kollegen sortiert sie danach, worüber sie mit Chatbots sprechen, nicht danach, wie viel: eine instrumentelle Orientierung auf Problemlösen und Information, eine Selbstoffenbarungs-Orientierung, die auf Gefühle und Beziehungen zentriert ist, und eine dritte Gruppe, die keines von beiden berichtet. Die entwicklungsbezogene Lesart ist, dass dieselbe Technologie auf eine Phase trifft, in der Peer-Beziehungen und Identitätsarbeit die zentralen Aufgaben sind; ein Tool, das unbegrenzte, nicht wertende Selbstoffenbarung ermöglicht, ist daher keine neutrale Lernhilfe.

Der theoretische Beitrag von Fu und Zhao führt dies zu einem Konstrukt weiter, der „artificial intelligence connectedness" (KI-Verbundenheit), definiert als eine wahrgenommene Bindung, die psychologisch real, aber ethisch asymmetrisch ist, weil die Maschine Reziprozität simulieren kann, ohne jede Fähigkeit zur Fürsorge. Er berichtet keine Daten und sagt das auch ausdrücklich; sein Wert liegt in der Warnung, dass eine empfundene Beziehung kein Beleg für einen Entwicklungsnutzen ist.

## Spiel als Entwicklungsmedium

In der Literatur zu KI-Spielzeugen leistet die Entwicklungspsychologie die meiste Arbeit und verfügt über die geringste Evidenz. Die Übersichtsarbeit von Xu, Girouard und Shi argumentiert, dass KI-fähige Spielzeuge Handlungsmacht (Agency) im Spiel umverteilen: Die Kontrolle über Erzählung, Dialog, Beziehung und Information verschiebt sich vom Kind allein auf die Kind-Spielzeug-Interaktion. Diese Umverteilung kann das Spiel einschränken, wenn das Spielzeug es organisiert, oder es ermöglichen, wenn das Spielzeug als Ressource für kindgeleitete Fantasie und Erkundung reagiert. Ob das eine oder das andere eintritt, ist eine Frage von Design und Interaktion, und die Übersichtsarbeit stellt ausdrücklich fest, dass die Entwicklungsevidenz noch nicht vorliegt.

AI-Play, ein spielbasiertes Unplugged-Framework für Pre-K und Kindergarten, geht den umgekehrten Weg: Es vermittelt KI-Konzepte im Spiel, ohne dem Kind ein Gerät vorzusetzen — mit dem Argument, dass die Entwicklungsaufgabe in diesem Alter Repräsentation und Als-ob-Spiel ist, nicht die Interaktion mit einem System.

## Implikationen für die Praxis

Lehrende können das Anforderungsprofil eines Tools lesen statt des Altersbands auf seiner Verpackung. Die lohnende Frage ist, welche Fähigkeiten eine Aufgabe belastet: wie viel Text Lernende im Kopf behalten müssen, welches Leseniveau die Oberfläche voraussetzt, wie viel sozialen oder emotionalen Gehalt die Interaktion trägt. Ein generatives Tool, das flüssigen Text erzeugt, setzt Lesende voraus, die ihn beurteilen können — und diese Fähigkeit stellt sich später ein als flüssiges Lesen.

Hochschuldidaktikerinnen und Hochschuldidaktiker sowie Curriculumsentwicklerinnen und -entwickler können sich die Stufungslogik des taiwanischen Guidebooks ausleihen. Die Ausgabe für die Jüngeren hält die Aktivitäten gescaffoldet und nicht-generativ, die fortgeschrittene Ausgabe erlaubt beaufsichtigte generative Nutzung mit angehängter ethischer Reflexion. Der Unterschied zwischen den Ausgaben besteht darin, welche Tools Lernende verwenden dürfen — nicht darin, wie schwer die Arbeitsblätter sind. Diese Unterscheidung in eine Kursabfolge einzubauen, ist besser zu begründen, als eine einzige Tool-Richtlinie über alle Jahrgangsstufen hinweg anzuwenden.

Schul- und Programmleitungen können die Behauptung „altersgerecht" als eine Frage mit drei Teilen behandeln: welche Fähigkeit die Aufgabe erfordert, auf welcher Stufe die Lernenden stehen und welche Evidenz beides verbindet. Rezeptionsstudien und Anbieterdokumentation beantworten den dritten Teil selten.

Supportpersonal und Familien können beobachten, was ein KI-Spielzeug mit dem Spiel macht. Achten Sie darauf, wer die Geschichte liefert. Entscheidet das Spielzeug die Handlung, folgt das Kind; antwortet das Spielzeug auf die Idee des Kindes, führt das Kind. Dieser Unterschied ist in wenigen Minuten Beobachtung sichtbar, und er ist in diesem Alter wichtiger als die inhaltliche Abdeckung des Spielzeugs.

## Wo die Evidenz dünn ist

Drei Grenzen kehren in den hier betrachteten Studien wieder.

Die erste ist das Design. Die meisten Studien sind Querschnittsbefragungen oder kleine Experimente mit einer einzigen Messung. Sie können zeigen, dass sich Altersgruppen unterscheiden; sie können nicht zeigen, dass KI eine Entwicklungstrajektorie verändert hat. Der Scoping Review von Niu und Kolleginnen und Kollegen zu generativer KI und dem kreativen Denken von Kindern sichtete 6.401 Datensätze und behielt 24 Evidenzquellen — eine kleine Basis für eine große Behauptung, und der Review berichtet sie auch als solche. Ein integrativer Review von 118 K–12-Studien zur KI-Kompetenz fand keine Studie, die dieselben Lernenden über Schulstufen hinweg verfolgte; die Progression über vier Bänder ist daher eine aus unterschiedlichen Kohorten erschlossene Ordnung und keine von jemandem beobachtete Trajektorie ([[guo-ai-literacy-developmental-paces-2026|Guo et al., 2026]]).

Die zweite ist die Zuschreibung. Ein bei vorhandenem Tool gemessener Lernzuwachs kann unterstützte Leistung sein statt einer Veränderung der Fähigkeit — dieselbe Unterscheidung, die Scaffolding von Entwicklung trennt.

Die dritte ist die Zeit. Entwicklung entfaltet sich über Jahre, und die Tools verändern sich schneller. Die altersbezogenen Empfehlungen des Compass Collaborative machen das explizit: Sie bezeichnen ihre Einträge als Hypothesen, die durch abduktives Schließen aus etablierter Entwicklungswissenschaft plus früher KI-Forschung gebildet wurden, und sagen, dass gesicherte Evidenz ein Jahrzehnt dauern kann.

## Das Messproblem hinter „altersgerecht"

Policy- und Beschaffungsdokumente verwenden „altersgerecht", als wäre es eine Eigenschaft eines Produkts. In der Forschung ist es eine Beziehung zwischen einem Tool, einer Fähigkeit und einer Aufgabe. CLARAs Taxonomie-Ansatz ist ein Versuch, diese Beziehung operationalisierbar zu machen; die Stufen des Guidebooks sind ein weiterer. Keiner beantwortet die schwierigere Frage, wer über Ausreichendheit entscheidet, und die Reviews, die altersgestufte Ressourcen untersuchen, evaluieren die Rezeption (831 Teilnehmende in der Studie von Wang, Chuang und Wu) und nicht Entwicklungsergebnisse.

## Verbreitete Fehlvorstellungen

- **„Altersgerecht bedeutet ein einziges Alterslabel."** CLARA schätzt eine Stufe aus den Anforderungen, die ein Text an spezifische Fähigkeiten stellt, und die beiden Ausgaben des Guidebooks unterscheiden sich darin, welche Tools sie erlauben, nicht nur im Leseniveau.
- **„Entwicklungspsychologie betrifft nur kleine Kinder."** Adoleszenz und Erwachsenenalter sind ebenfalls Entwicklungsphasen; die Literatur zu Abhängigkeit und Selbstoffenbarung handelt von Jugendlichen gerade deshalb, weil diese Fähigkeiten noch in der Entstehung sind.
- **„Wenn sich zwei Altersgruppen unterscheiden, erklärt das die Entwicklung."** Altersunterschiede im Querschnitt vermengen Kohorte, Curriculum, Gerätezugang und Kontext. Nur Designs, die dieselben Lernenden verfolgen, können Veränderung von Unterschied trennen.
- **„Ein Tool, das Leistung unterstützt, entwickelt die Fähigkeit."** Kompensation, Scaffolding und Entwicklung sind unterschiedliche Funktionen; nur von der letzten wird erwartet, dass sie bestehen bleibt, wenn das Tool entfernt wird.
- **„KI-Spielzeuge sind neutrale Spielmaterialien."** Das Argument der Agency-Umverteilung sagt etwas anderes: Die Reaktionsfähigkeit des Spielzeugs prägt, wer die Fantasiearbeit leistet.
