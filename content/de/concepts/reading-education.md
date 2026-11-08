---
title: "Lesen"
created: "2026-11-05T02:16:00-05:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding, motivation, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
assessment: [assessment, assessment-validity]
ethics: [neurodiversity, accessibility]
audience: [instructors, curriculum designers, researchers]
level: [primary education, k 12, higher ed]
connected_faqs: [ai-support-reading-comprehension]
confidence: medium
updated: "2026-11-07T20:28:56-05:00"
translation_of: "concepts/reading-education"
source_updated: "2026-11-06T01:55:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Lesen** — das Lehren und Bewerten des Lesens: Verständnis, Flüssigkeit, Wortschatz und die Motivation zu lesen, zusammen mit dem Design von Texten in der richtigen Schwierigkeit für eine lesende Person. In der [[ai-education|KI-Bildung]] verläuft die Literatur entlang von vier Linien: Werkzeuge, die Lesende beim Lesen unterstützen, Werkzeuge, die Lesen bewerten, Werkzeuge, die Text an das Niveau einer lesenden Person anpassen oder für sie erzeugen, und die Messfrage unter allen dreien — was einen Text schwer macht und ob **Lesbarkeit** das erfasst. Diese Seite behandelt Lesen als eigene Domäne, getrennt von [[language-learning|Sprachenlernen]] (Aneignung einer weiteren Sprache), [[english-education|Englischunterricht]] (EAP/EFL/ESL, der seinen eigenen Strang zu Lesen und Lesbarkeit trägt) und [[writing-education|Schreiben]] (Verfassen von Text): Es geht um die Begegnung der lesenden Person mit Text. Die Evidenz ist vielversprechend, aber ungleich — mehrere Pilotstudien, eine Handvoll validierter Instrumente und wenige kontrollierte Vergleiche. Wo die Wissensbasis nur eine kleine Studie enthält, sagt diese Seite das.

## Fragen zum Nachdenken

- Wenn ein KI-Werkzeug einer studierenden Person hilft, eine Passage zu verstehen, was hat die studierende Person dann gelernt — den Inhalt, eine Lesestrategie oder wie man das Werkzeug nach der Antwort fragt? Welches davon wollen Sie bewerten?
- Lesbarkeitsformeln zählen Wörter und Satzlängen. Was übersehen sie an der Erfahrung einer lesenden Person mit einem Text, und was würden Sie stattdessen messen?
- Wenn KI jeden Text auf das Leseniveau einer studierenden Person umschreiben kann, verliert das Niveau dann seine Bedeutung — oder muss die studierende Person irgendwann trotzdem schwierigen Text bewältigen?
- Wer profitiert davon, wenn Leseassessment automatisch erzeugt wird: die Arbeitslast der Lehrkraft, die Motivation der studierenden Person oder die Validität des Punktewerts? Können alle drei zugleich besser werden?
- Leseschwierigkeit ist auch eine Frage der Barrierefreiheit. Wie sollten sich Werkzeuge für leseschwache Lernende, mehrsprachige Lernende und neurodivergente Studierende von einem allgemeinen Leseassistenten unterscheiden?

## Einführung

Lesen ist in der Wissensbasis ein junger Strang. Die meisten Studien sind klein und neueren Datums, und sie gruppieren sich um den Text statt um die Lesenden: eine Passage erzeugen, sie vereinfachen, sie bewerten oder ihre Schwierigkeit beurteilen. Die Frage, die sie verbindet, ist, ob eine Maschine sagen kann, wie schwer ein Text für eine bestimmte lesende Person sein wird, und ob sie auf dieses Urteil hin handeln kann, ohne die Arbeit zu entfernen, die das Lesen leisten soll.

Vier Arbeitslinien treten auf:

- **Die lesende Person unterstützen** während des Lesens, einschließlich motivationaler und begleitender Werkzeuge.
- **Lesen bewerten**, über generierte Passagen, Quizze und KI-Feedback zu Leseleistungen.
- **Text anpassen und erzeugen** auf einem Zielniveau, von der Vereinfachung bis zu differenzierten Materialien.
- **Lesbarkeit und Textschwierigkeit messen**, die Schicht, auf der die anderen drei beruhen.

## Lernende beim Lesen unterstützen

Das Lesen mit [[generative-ai|generativer KI]] erzeugt uneinheitliche Verständnisergebnisse — Zuwächse in einer Studie, kein [[transfer-of-learning|Wissenstransfer]] in einer anderen —, und das AIR-Instrument wurde auf der Hypothese gebaut, dass die Varianz darin liegt, warum Lesende zum Werkzeug greifen. Brann, Etgar und Sidi entwickelten und validierten eine Skala mit 21 Items und vier Motiven: Aufgabenorientiert (Task-oriented), Wohlbefinden (Feel-good), Übersetzung (Translation) und Aufwandsvermeidung (Low-effort) ([[air-scale-motivations-ai-reading-2026|Brann et al., 2026]]). Ihre Evidenz stammt von 425 britischen Studierenden in der explorativen und von 414 in der konfirmatorischen Stichprobe, mit Fit-Indizes von CFI 0,95 und RMSEA 0,056. Die Unterscheidung ist für die Praxis wichtig: Eine lesende Person, die das Werkzeug nutzt, um eine Aufgabe zu erledigen, befindet sich in einer anderen Haltung als eine, die es nutzt, um Aufwand zu vermeiden, und Aufwandsvermeidung ist das Motiv, das die Autorinnen und Autoren als wichtigstes Warnsignal für oberflächliche Verarbeitung markieren.

Das ist ein Messergebnis, keine Wirkungsstudie, und die Seite hält die Unterscheidung ein. Was die Wissensbasis noch nicht enthält, ist eine kontrollierte Studie zu einem Lesecompanion, die dauerhafte Verständniszuwächse zeigt.

## Lesen bewerten

Die Bewertung des Lesens ist der Bereich, in dem KI am häufigsten als arbeitssparendes Werkzeug erscheint. Almirabis Praxis-Fallstudie baute das AI-Mediated Motivational Reading Assessment auf sechs Multiple-Choice-Quizzen mit 53 arabischsprachigen EFL-Studierenden im Grundstudium auf und bewegte sich von einer Lehrbuchpassage zu KI-generierten Passagen, von nicht beaufsichtigter Online-Darbietung zu beaufsichtigter Papierform ([[almirabi-ai-reading-assessment-motivation-2026|Almirabi, 2026]]). Die Punktewerte stiegen von 69,4 % im Lehrbuchquiz auf einen Zyklusmittelwert von 76,5 %, wobei der KI-Gesamtwert 4,2 Punkte über dem Lehrbuchquiz lag, sobald unüberwachte Quizze ausgeschlossen wurden. Der Autor stellt ausdrücklich fest, dass Textquelle, Darbietung, Aufsicht und Reihenfolge nicht isoliert wurden und [[motivation|Motivation]] nie gemessen wurde, sodass die Daten mit einem motivationalen Nutzen vereinbar sind, aber keinen belegen.

Eine zweite Studie bewegt sich in die andere Richtung und behandelt KI-Feedback als studierendenzentrierten Prozess statt als Bewertungserleichterung. In einem zweimonatigen Quasi-Experiment mit 200 Siebtklässlerinnen und Siebtklässlern in Shenzhen erzeugte ChatGPT-gestütztes [[feedback|Feedback]] zum chinesischen Lesen einen Zuwachs von 30,40 Punkten auf einem Feedbackmaß und von 17,95 auf der Feedback-Orientierung, gegenüber Rückgängen in der Klasse mit konventionellem Feedback ([[chatgpt-feedback-orientation-chinese-reading-2026|Chen et al., 2026]]). Der behauptete Mechanismus ist [[feedback-literacy|Feedback-Kompetenz]], nicht Verständnis, und die [[assessment|Assessment]]-Frage — ob Punktewerte über Bedingungen hinweg dasselbe bedeuten — bleibt offen.

## Lesbarkeit: Was einen Text schwer macht

Lesbarkeit ist das älteste Maß in diesem Bereich und dasjenige, das KI am stärksten verunsichert. Ein Flesch-Kincaid- oder Lexile-Wert schätzt die Schwierigkeit aus Oberflächenmerkmalen, vor allem aus Wort- und Satzlänge. CLARA wurde auf den Einwand gebaut, dass zwei Geschichten mit demselben Wert unterschiedlich viel kognitive, sprachliche und sozial-emotionale Arbeit verlangen können: Seine entwicklungsbezogene Taxonomie mit 122 Labels erreichte 0,904 Überlappungsgenauigkeit gegenüber Altersreferenzen von Verlagen und 0,81 Übereinstimmung mit verblindeten Lehrkräfterankings, gegenüber 0,603 für die FKGL-Formel ([[clara-developmental-appropriateness-children-stories-2026|Yin et al., 2026]]). Das [[assessment-validity|Validitätsproblem]] ist der Punkt — eine Formel kann reliabel sein und trotzdem das Falsche messen.

Zwei weitere Studien vergrößern die Lücke. Bird verbindet Transformer-Klassifikation mit Merkmalen der Computerlinguistik, um englische Literatur einer britischen Key Stage zuzuordnen, erreicht F1 0,996 und verpackt das Ergebnis als Werkzeug für Lehrkräfte ([[bird-multimodal-educational-literature-2026|Bird, 2026]]). Clark et al. gehen ganz unter die Oberfläche und messen Konstruktionen mit bekannten Verarbeitungskosten — n-Gramme mit geringer Frequenz, lange Dependenzen, gestapelte Nomina, denominale Verben, unbelebte Subjekte, reduzierte Objektrelativsätze — und finden, dass neuere Modelle sie im Verhältnis zu ihren eigenen bedeutungserhaltenden Paraphrasen und zu menschlichen Baselines übermäßig nutzen ([[clark-ai-generated-language-readability-2026|Clark et al., 2026]]). Lesbarkeit ist nach dieser Evidenz eine Eigenschaft der Verarbeitungsanforderungen eines Textes und dessen, wer ihn produziert hat, nicht nur seiner Längenstatistik.

Die praktische Konsequenz ist, dass ein Jahrgangsstufenwert eine schwache Garantie für irgendeinen Text ist und eine besonders schwache Garantie für KI-geschriebenen Text.

Die Wahrnehmung der Zielgruppe ist inzwischen direkt messbar. [[thome-perceived-text-complexity-student-profiles-2025|Thome et al., 2025]] sammelten einen Datensatz mit 3.954 Annotationen von 193 deutschen Gymnasiastinnen und Gymnasiasten, die Sätze aus Lernhilfen zur Berufsorientierung und aus Wikipedia bewerteten, und fanden, dass die Lesenden der Formel widersprachen: 72,8 % der Annotationen waren sehr leicht oder leicht, trotz der niedrigen Flesch-Reading-Ease-Werte des Korpus. Eine SHAP-Analyse eines profilbasierten Modells zeigte Lesemerkmale, die diese Wahrnehmung trieben — die zu Hause gesprochene Sprache war das einflussreichste Personenmerkmal (0,09), vor Geschlecht (0,08) und selbsteingeschätzter Deutschkompetenz (0,07) —, sodass ein Jahrgangsstufenwert nicht nur die Verarbeitungsanforderungen des Textes verfehlt, sondern auch, wessen Leseerfahrung er misst.

## Texte anpassen und erzeugen

Die größte Gruppe von Studien erzeugt oder schreibt Text für eine lesende Person um. Drei Ansätze unterscheiden sich darin, was sie steuern:

- **Niveaukontrollierte Generierung.** Die Feinabstimmung dreier 8B-Modelle auf einem von Expertinnen und Experten gestalteten Lesecurriculum für Kinder und auf Geschichten von GPT-4o und Llama 3.3 70B übertraf beide größeren Zero-Shot-Modelle bei schwierigkeitsbezogenen Metriken, mit vernachlässigbaren Sicherheitsproblemen ([[llm-children-reading-story-generation|Li et al., 2026]]).
- **Differenzierte Materialien.** Ein rollenpromptbasierter GenAI-Arbeitsablauf für [[english-education|EAP]]-Lesematerialien verbesserte Ergebnisse vor allem durch zusätzliche, niveauspezifische Unterstützungsschichten — Glossen, Satzentschlüsselung, rhetorische Hinweise, kritische Prompts — statt durch Veränderung der Komplexität auf Passagenebene, mit dem größten Effekt bei Lernenden mit hoher Sprachkompetenz (d = 1,40) ([[genai-differentiated-eap-reading-materials-2026|Gao, 2026]]).
- **Zugeschnittene Kurslektüren.** Ein Graduiertenkurs ersetzte sein Lehrbuch durch bedarfsgerechte Lektüren, die auf Interesse und Verständnisniveau zugeschnitten waren; 24 Studierende bewerteten sie als nützlich, und 75 % stimmten zu, mehr gelernt zu haben, während die Artefaktanalyse fehlende Nachverfolgbarkeit und inkonsistente Zitation fand ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]).

Die Vereinfachung ist die vierte Variante, und ihr Engpass ist die Evaluation statt die Generierung. MuTSE paart eine Generierungspipeline aus Prompt und Modell mit einer abgestuften Engine für semantische Ausrichtung, sodass Vereinfachungen an pädagogisch bedeutsamen Kriterien verglichen und bewertet werden können statt an einer einzigen Lesbarkeitszahl ([[text-simplification-its|Roscan et al., 2026]]).

## Lesende, Schnittstellen und Zugang

Lesen ist auch eine Zugangsfrage. AIRRI gibt Aufgabenmaterial als verfremdete Bilder aus, um Pipelines vom Screenshot zum LLM zu unterlaufen, und seine Autoren berichten die Lesbarkeitskosten ehrlich: Streifenüberlagerungen wurden von allen vier interviewten Fachleuten für Design und Typografie als lesbar beurteilt, während die Extraktionsfehlerrate 100 % erreichte ([[airri-machine-resistant-reading-interface-2026|Airri et al., 2026]]). Der Kompromiss zwischen Maschinenlesbarkeit und menschlicher Lesbarkeit ist eine Designentscheidung mit einem Preis für die Barrierefreiheit.

Für Lernende mit Legasthenie findet ein PRISMA-geleiteter Review von 72 Studien aus den Jahren 2018 bis 2024 KI im Einsatz für Erkennung, [[assistive-technology|unterstützende Technologie]] und [[personalized-learning|personalisiertes Lernen]], aber mit einer fragmentierten Evidenzbasis und wenig experimenteller Validierung; generative KI ist kaum vertreten ([[dabaghi-ai-dyslexia-education-review-2026|Dabaghi et al., 2026]]). Leseschwierigkeit ist der Ort, an dem [[neurodiversity|Neurodiversität]] und [[accessibility|Barrierefreiheit]] auf die allgemeine Leseagenda treffen, und die Seite behandelt sie nicht als separates Thema.

## Was die Evidenz zeigt und nicht zeigt

Der Strang ist messreich und wirkungsarm. Es gibt validierte Instrumente (AIR), validierte Schwierigkeitsmodelle (CLARA, Bird) und einen wachsenden Satz von Werkzeugen zur Generierung und Vereinfachung. Es gibt sehr wenige kontrollierte Studien, die eine Leseintervention mit Verständniszuwächsen verbinden, und mehrere der Assessment-Studien vermischen die Textquelle mit Darbietung oder Aufsicht. Die Stichproben sind klein: 53 Studierende in der Leseassessment-Fallstudie, 24 in der Studie zu zugeschnittenen Lektüren, 200 Siebtklässlerinnen und Siebtklässler im größten Quasi-Experiment. Die Wissensbasis sollte als Dokumentation eines Designraums gelesen werden, nicht als etablierter Effekt.

## Verbreitete Fehlvorstellungen

- **„Ein Lesbarkeitswert sagt Ihnen, ob ein Text geeignet ist."** Ein Wert misst Oberflächenmerkmale; CLARAs Vergleich mit FKGL und die Verarbeitungsmerkmale von Clark et al. zeigen beide, wie viel von der Schwierigkeit er auslässt.
- **„KI-generierter Text ist leichter, weil er für ein Niveau erzeugt wird."** Die Evidenz läuft für Modellausgaben in die andere Richtung: Frontier-Modelle nutzen Konstruktionen übermäßig, die mit Verständniskosten verbunden sind.
- **„Lesen mit KI ist ein einziges Verhalten."** Die AIR-Skala findet vier unterschiedliche Motive, und sie sagen unterschiedliche Arten der Nutzung voraus.
- **„Wenn KI den Text umschreiben kann, spielt das Leseniveau keine Rolle mehr."** Differenzierung verändert die Unterstützung rund um eine Passage stärker als die strukturelle Komplexität der Passage, was eine andere Intervention ist als das Absenken ihres Niveaus.

## Verbundene Konzepte

- [[ai-education]] — der Schirm, unter dem diese Domäne sitzt
- [[language-learning]] — L2-Lesen überschneidet sich, aber dort ist der Erwerb der Gegenstand
- [[writing-education]] — die verfassende Seite der Literalität
- [[english-education]] — EAP/EFL/ESL-Lesen und Lesbarkeit
- [[educational-nlp]] — die Textmessungsschicht, auf der Lesbarkeit beruht
- [[assessment]] — Leseassessment und Punktevalidität
- [[motivation]] — warum Lesende KI nutzen und was das mit Verarbeitung macht
- [[scaffolding]] — Unterstützungsschichten in differenzierten Lesematerialien
- [[neurodiversity]] — Legasthenie und Leseschwierigkeit
- [[accessibility]] — menschlich lesbarer versus maschinenlesbarer Text
- [[generative-ai]] — die Technologie hinter erzeugten und angepassten Texten

## Verbundene Artikel

- [[air-scale-motivations-ai-reading-2026]] — eine validierte Skala der Motive für das Lesen mit GenAI
- [[almirabi-ai-reading-assessment-motivation-2026]] — KI-vermitteltes Leseassessment in einem EFL-Klassenzimmer
- [[genai-differentiated-eap-reading-materials-2026]] — differenzierte EAP-Lesematerialien
- [[llm-children-reading-story-generation]] — niveaukontrollierte Lesegeschichten für Kinder
- [[text-simplification-its]] — Textvereinfachung für das Tutoring bewerten
- [[clara-developmental-appropriateness-children-stories-2026]] — Entwicklungsschwierigkeit jenseits von Lesbarkeitsformeln
- [[bird-multimodal-educational-literature-2026]] — Literatur nach Key Stage klassifizieren
- [[clark-ai-generated-language-readability-2026]] — warum KI-generierte Sprache schwerer zu lesen ist
- [[sidorkin-ai-generated-course-readings-2026]] — zugeschnittene, KI-generierte Kurslektüren
- [[airri-machine-resistant-reading-interface-2026]] — maschinenresistente Leseschnittstellen und ihre Lesbarkeitskosten
- [[chatgpt-feedback-orientation-chinese-reading-2026]] — ChatGPT-Feedback im Lesen der Sekundarstufe
- [[dabaghi-ai-dyslexia-education-review-2026]] — KI für Lernende mit Legasthenie
