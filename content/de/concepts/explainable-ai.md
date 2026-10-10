---
title: Erklärbare KI
created: "2026-09-07T10:15:00-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Erklärbare KI (XAI) in der Bildung** ist das Design und die Untersuchung, die Entscheidungen eines KI-Systems für seine Bildungs-Stakeholder lesbar zu machen — [[learners]], Lehrkräfte, [[administrator|Verwaltung]], [[parents-and-families|Eltern]], Forschende und [[stakeholders|Politik]]. Die zentrale Unterscheidung, auf der das Feld besteht: **Fachinhalt** zu erklären (warum eine Tatsache wahr ist) ist nicht dasselbe wie die **Entscheidung eines KI-Systems** zu erklären (warum dieser Lernenden diese Aktivität zugewiesen wurde, warum diese Antwort als falsch markiert wurde, welche Evidenz eine Risikovorhersage stützt). Bildung bringt unterscheidende Erklärbarkeitsbedarfe — verrauschte Lerndaten, Erklärungen, die [[metacognition]] und [[self-regulated-learning]] direkt unterstützen können, und Stakeholder, die grundlegend verschiedene Erklärungstypen benötigen. Die operative Designfrage ist **Erklärungsqualität**, nicht bloße Verfügbarkeit von Erklärungen: eine Erklärung, die technisch vorhanden, aber unlesbar, irreführend oder auf ihr Publikum falsch ausgerichtet ist, kann mehr Schaden tun als keine Erklärung.

## Fragen zum Nachdenken

- Wenn ein [[intelligent-tutoring|KI-Tutor]] Ihnen sagt, warum ein Hinweis gegeben wurde, erklärt das den *Fachinhalt* oder die *Entscheidung des Systems*? Können Sie drei Beispiele für jedes in Ihrer eigenen Nutzung von Bildungs-KI benennen?
- Wer braucht Erklärungen in der Bildung — und brauchen Lernende, Lehrkräfte und Politik die *gleiche* Art? Wofür würde jede eine Erklärung nutzen?
- Eine KI markiert eine Studentin als gefährdet, das Studium abzubrechen. Was muss eine [[teacher-role|Lehrkraft]] wissen, um danach zu handeln, im Vergleich zu dem, was die Studentin wissen muss? Ist dieselbe Erklärung für beide angemessen?
- Die Seite argumentiert, Erklärungs*qualität* zählt mehr als Erklärungs*verfügbarkeit*. Was lässt eine technisch vorhandene Erklärung scheitern — fällt Ihnen ein Zeitpunkt ein, an dem eine Erklärung da war, aber nutzlos oder schlimmer, irreführend?
- [[trust-calibration|Vertrauen]] und Erklärung sind verbunden, aber nicht identisch. Warum könnte eine selbstbewusste, flüssige Erklärung *falsches* Vertrauen in ein fehlerhaftes System schaffen — und wie würden Sie erkennen, dass das geschieht?

## Einführung

Erklärbare [[ai-education|KI in der Bildung]] benennt die wachsende Erwartung, dass KI-Systeme in Klassenzimmern keine Black Boxes sein sollten. Weil KI in der Bildung folgenreiche Entscheidungen beeinflusst — Noten, Risikomarkierungen, [[recommender-systems-and-learning-paths|Lernpfade]], Ressourcenempfehlungen —, fordern Stakeholder zunehmend zu wissen, nicht nur *was* das System schlussfolgerte, sondern *warum*. Bildung schärft das zu zwei unterscheidenden Fragen: den gelernten Fachinhalt erklären und die eigene Entscheidungsfindung des KI-Systems erklären. Beide zu verwechseln ist ein Kategorienfehler mit praktischen Folgen: eine KI, die eine [[physics-education|Physik]]-Antwort perfekt erklärt, gibt einer Studentin und einer Lehrkraft dennoch keinen Einblick darin, warum das *System* sie als gefährdet einstuft, eine bestimmte Aktivität empfahl oder eine Antwort als falsch markierte.

## Fachinhalt erklären versus die Entscheidung des Systems erklären

Der grundlegende Beitrag des Feldes — das [[xai-education-framework|XAI-ED-Framework]] (Khosravi et al., 2022) — besteht darauf, dass Bildung *unterscheidende* Erklärbarkeitsbedarfe über allgemeines XAI hinaus hat. Die wichtigste davon ist die Spaltung zwischen zwei Erklärungszielen:

- **Fachinhalt-Erklärungen** verdeutlichen *Inhalt*: warum ein Hinweis eine [[misconceptions|Fehlvorstellung]] adressiert, warum eine Antwort inkorrekt ist, wie ein Physikergebnis aus Prinzipien folgt. Das sind [[pedagogy|pädagogische]] Erklärungen, die [[scaffolding]], [[feedback]] und [[metacognition]] unterstützen.
- **Systementscheidungs-Erklärungen** verdeutlichen *das Modell*: warum dieser Lernenden diese Aktivität zugewiesen wurde, warum das System diese Studentin als gefährdet vorhersagt, welche Evidenz eine Knowledge-Tracing- oder [[learning-analytics]]-Vorhersage stützt. Das sind Transparenzerklärungen, die [[trust-calibration]], [[bias-mitigation]] und Verantwortlichkeit unterstützen.

Die Unterscheidung zählt, weil sie verschiedenen Stakeholdern und Zwecken dienen. Eine Lernende, die „warum ist das als falsch markiert?“ beantwortet, braucht meist die *Fachinhalt*-Erklärung; eine Lehrkraft, die entscheidet, ob sie einer Risikomarkierung folgt, oder Politik, die auf Bias prüft, braucht die *Systementscheidungs*-Erklärung. Eine einzelne Erklärung zu gestalten, die beiden dient, ist selten möglich — daher ist Multi-Stakeholder-Design ein Kernthema von XAI-ED.

## Wer Erklärungen braucht: Multi-Stakeholder-Design

- **Lernende** brauchen Erklärungen, die ihr eigenes Lernen und ihre Selbstregulation unterstützen — warum ein Hinweis gegeben wurde, warum ihre Antwort als falsch markiert wurde, warum diese Ressource empfohlen wird (unterstützend für [[self-regulated-learning]]). Die [[student-perspectives-ai-writing-grading-2026|Evidenz aus Studierendenperspektive]] zeigt, dass Lernende eine scharfe Linie ziehen zwischen dem Akzeptieren von KI-*Feedback* (nützlich für Revision) und dem Abtreten von *Benotungsautorität* (der menschlichen Lehrkraft vorbehalten) — eine kalibrierte, funktionsabgestimmte Haltung, aktiviert durch Transparenz über KI-Beteiligung. [[ko-hughes-vsd-student-centered-its-2026|Arbeit zu Value-Sensitive Design mit Studierenden an Community Colleges]] schärft den Punkt: Studierende bevorzugten *kollaborative, vermenschlichte* Erklärungen (z. B. „die KI könnte hier unsicher sein, also lass uns das gemeinsam prüfen“) gegenüber roher Modellkonfidenz oder technischer Transparenz, weil Transparenz allein wenig Wert hat, wenn sie nicht direkt ihr Lernen unterstützt. Die Studie brachte eine Transparenz-versus-Interpretierbarkeit-Spannung an die Oberfläche, die Erklärungsdesign hin zu lernendenseitiger Semantik statt Merkmalswichtigkeits-Ausgabe drückt.
- **Lehrkräfte** brauchen Erklärungen, die Intervention informieren — welche Studierenden gefährdet sind und *warum*, auf welcher Evidenz. [[xai-teachers-trust-edtech-recommendations-2026|Erklärbarkeitsstudien mit Lehrkräften]] zeigen, dass [[discipline-specific-aied|domänenspezifische]], [[curriculum-design|curriculare]] Spracherklärungen Akzeptanz und kalibriertes Vertrauen wirksamer aufbauen als generische Merkmalswichtigkeits-Erklärungen, doch Lehrkräfte wollen echte Klassenzimmerfahrung vor voller Verlässlichkeit — Erklärung allein verleiht keine [[trust-calibration|Kalibrierung]].
- **Entwickelnde und Forschende** brauchen Erklärungen, um Modellverhalten zu debuggen und [[bias-mitigation|Bias]] zu erkennen — welche Merkmale Vorhersagen treiben, an die Oberfläche zu bringen.
- **Verwaltung und Politik** brauchen Erklärungen für Verantwortlichkeit, [[privacy]] und [[regulation]]-Compliance (z. B. das Recht auf Erklärung), und um zu prüfen, ob KI-getriebene Entscheidungen fair und [[equity-in-ai-education|gerecht]] sind.

## Ansätze und Formate

Das XAI-ED-Framework katalogisiert die wichtigsten Erklärungsmodalitäten: **visuell** (Heatmaps, Entscheidungsbäume), **textuell** (Begründungen in natürlicher Sprache), **beispielbasiert** (Kontrafaktische, nächste Nachbarn), **Merkmalswichtigkeits**-Rankings, **Regelextraktion** und **Modellvereinfachung**. Es bildet außerdem Ansätze auf Modellklassen ab:

- **White-Box**-Modelle (Entscheidungsbäume, lineare Modelle, regelbasiert) sind inhärent interpretierbar.
- **Black-Box**-Modelle ([[machine-learning|neuronale Netze]], Ensembles) erfordern post-hoc Erklärungsmethoden.
- **Glass-Box**-Ansätze versuchen, Genauigkeit mit Transparenz auszubalancieren.

Die konkrete KIED-Evidenzbasis überspannt alle davon. **Interpretierbares [[knowledge-tracing|Knowledge Tracing]]** macht Modelle des Lernendenwissens direkt inspizierbar ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). **Selbsterklärende Surrogate** destillieren ein Black-Box-Modell in ein kleines, interpretierbares [[llm|Sprachmodell]] für [[learning-analytics]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Kontrafaktische Erklärungen** — „was müsste sich für ein anderes Ergebnis ändern“ — unterstützen Bildungs-Entscheidungsunterstützung und Regress ([[sc2r-counterfactual-recourse-educational-2026]]). **Federierte + erklärbare Learning Analytics** zeigt, dass Erklärungsqualität driften kann (Kalibrierung degradiert), selbst wenn Ranking-Stabilität hält, und unterstreicht, dass Erklärungen keine feste Eigenschaft sind, sondern eine Systemausgabe, die zu messen ist ([[villegas-ch-federated-explainable-learning-analytics-2026]]). Und **interpretierbare [[affective-computing|affektive]] ITS** demonstriert Erklärungen im [[affective-tutoring|emotionsbewussten]] Tutoring ([[multimodal-affective-its-presentation]]).

## Erklärungsqualität, nicht Verfügbarkeit

Eine wiederkehrende Lektion über die Evidenz: **eine Erklärung zu haben, genügt nicht**; die Erklärung muss richtig für ihr Publikum, genau und auf die Einsätze kalibriert sein. Das XAI-ED-Framework benennt die Fallstricke explizit:

- **Erklärungsüberlastung** — zu viel Information überwältigt die Nutzerin und negiert den Nutzen.
- **Irreführende Erklärungen** — post-hoc Erklärungen spiegeln möglicherweise nicht das tatsächliche Schlussfolgern des Modells wider und geben falsches Vertrauen.
- **Bestätigungsbias** — Nutzer beachten selektiv Erklärungen, die bestehende Überzeugungen bestätigen.
- **Übervertrauen** — flüssige Erklärungen können falsches Vertrauen in fehlerhafte Systeme schaffen und [[cognitive-offloading|Überabhängigkeit]] nähren (die Kehrseite von [[trust-calibration]]).
- **Das System austricksen** — Studierende können Erklärungen ausnutzen, um tatsächliches Lernen zu umgehen.

Erklärungsqualität hat auch eine Gerechtigkeitsdimension: eine Erklärung, die technisch vorhanden, aber für einen gegebenen Stakeholder unlesbar ist — oder die den [[bias-mitigation|Bias]] in einer Vorhersage verschleiert —, verfehlt ihren Zweck. Daher ist die Designfrage *Qualität und Passung*, und daher ist menschzentriertes, stakeholderspezifisches Erklärungsdesign untrennbar von der technischen Erzeugung von Erklärungen. Wirksames XAI ist ein Kommunikationsakt, gestaltet für die kognitiven Bedürfnisse der Empfangenden, nicht bloß ein technisches Artefakt.

Erklärung ist nicht immer ein Nivellierer. In einem 2 × 2-Vignettenexperiment mit 250 Schülerinnen der siebten Klasse erhöhte eine schriftliche Begründung für eine Mathematiknote die Akzeptanz und wahrgenommene Fairness in beiden Bedingungen, erweiterte aber eher die Lücke zwischen [[teacher-role|Lehrkraft]]- und KI-getroffenen Entscheidungen, statt sie zu schließen ([[decision-making-agent-student-decision-acceptance-2026|Zhang et al. (2026)]]).

Zwei Vorsichtshinweise schärfen dies weiter, die beide den neuesten Beitrag des Wikis zum Thema zentral macht. Erstens ist die Erklärungsmaschinerie nicht selbst neutral: post-hoc Methoden wie LIME und SHAP können dem tatsächlichen Verhalten des Modells untreu sein, daher kann eine technisch vorhandene Erklärung eher irreführen als informieren ([[lund-socially-accountable-data-science-xai-2026|Lund et al. 2026]], gestützt auf Chuan et al. 2024). Zweitens ist **Erklärung nicht Verantwortlichkeit**. Ein Bericht darüber, welche Merkmale eine Vorhersage trieben, offenbart nicht, ob jene Merkmale angemessen zu nutzen waren, ob die Trainingsdaten repräsentativ waren oder ob das Design des Systems gutes Urteil spiegelte; Erklärungen können den Anschein von Transparenz schaffen, während sie die strukturellen Bedingungen, die eine Entscheidung erzeugten, unberührt lassen (Mittelstadt et al. 2019). Für die Bildung bedeutet das, dass die Frage, die es weiter zu stellen gilt, nicht ist, ob eine Erklärung erzeugt wurde, sondern ob die Person, die sie empfängt — eine Studentin, eine Lehrkraft, eine Beraterin — sie verstehen, danach handeln oder die Entscheidung dahinter anfechten könnte. Dasselbe Versagen der Lesbarkeit erscheint auf der Sicherheitsseite von [[automated-assessment|automatisiertem Assessment]]: [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026)]] Red-Team eines KI-Benotungswerkzeugs fand, dass es den Chat stillschweigend deaktivierte, nachdem es eine Prompt-Injektion blockierte, und — nachdem es angekündigt hatte, es werde eingebetteten Anweisungen nie folgen — ihnen in sechs weiteren Läufen an derselben Datei folgte, was der Nutzerin kein verlässliches Signal ließ, auf das Verlass zu gründen wäre.

**Erklärbar durch Design** ist eine Antwort auf das Treue-Problem post hoc. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang und Fang (2025)]] parametrisieren einen Erklärungsdecoder durch dieselbe fusionierte Repräsentation und denselben vorhergesagten Score, die über das [[assessment]] entscheiden, sodass ein niedriger Score bei [[formative-assessment|formativen]] Fragen eine Begründung ergibt, die unzureichende Sondierungsfragen benennt, und paaren ihn mit Aufmerksamkeit über zwei Linsen auf Curriculumsstandards und fachspezifische Rubrik-Züge. Die Aufmerksamkeit-zu-Rubrik-Ausrichtung erreicht 78,0 % gegenüber 41,7 % bei GPT-4 Zero-Shot und 32,1 % bei BERT, und Treue wird durch kontrafaktisches Löschen rubrik-kritischer Spannen neben menschlichen Bewertungen an einer rubrikverankerten Checkliste geprüft, was einen Erklärungs-Glaubwürdigkeitswert von 0,78 ergibt — ein Anstieg von 0,31 gegenüber BERT-base. Das Audit zeigt auch, wo der architektonische Anspruch dünnt: bei emotionalen Hinweisen legt das Modell 28,4 % des Aufmerksamkeitsgewichts gegenüber einer Expertin 15,2 % (Ausrichtung 0,53), wobei ein Fehlerfall 28 % dem Token „frustrated“ zuweist, was die Autoren als Überanpassung an Affekt statt an Pädagogik lesen und als Bereich der Verfeinerung benennen. Erklärungen in den Entscheidungspfad einzubetten macht sie treuer als post-hoc Begründungen; es macht sie nicht richtig.

## Erklärbarkeit als Praxis der Verantwortlichkeit lehren

Wenn Erklärungsqualität entscheidet, ob XAI nützlich ist, muss das Erzeugen von Erklärungen als professionelle Gewohnheit gelehrt werden statt als Fähigkeit demonstriert. [[lund-socially-accountable-data-science-xai-2026|Lund und Kollegen (2026)]] schlagen vor, dies über vier Säulen zu tun — **Antwortbarkeit** (die Pflicht, Gründen denen zu geben, die betroffen sind), **Verantwortung** (Schaden über den Lebenszyklus hinweg antizipiert, nicht nachträglich verteidigt), **Durchsetzung** (Konsequenzen innerhalb des Kurses) und **Reflexivität** (dokumentierte Prüfung der eigenen Annahmen) —, jede mit ihren eigenen Aufgaben und ihren eigenen Kosten im Klassenzimmer.

Für Erklärbarkeit spezifisch sind die Aufgaben, die zählen, jene, die Erklärung aus dem Notebook herauszwingen: benotete Model Cards, die neben Genauigkeitskennzahlen gewichtet werden, und strukturierte Erklärungsaudits, in denen Studierende Interpretierbarkeitswerkzeuge auf ihre eigenen Modelle anwenden und die Ergebnisse dann einem Publikum ohne gemeinsamen technischen Hintergrund präsentieren. Durchsetzung ist die Säule, die in ethiknahen Kursen am häufigsten fehlt, und diejenige, die den Rest mehr als symbolisch macht — Rubriken, die verantwortungsvolle Dokumentation belohnen, Projekte, die aus [[ethics|ethischen]] Gründen zur Überarbeitung zurückgegeben werden können, und [[peer-assessment|Peer-Review]], die gegen Verantwortlichkeitskriterien geführt wird statt nur gegen technische. Das Papier ist offen, dass sich die Werkzeuge in den Kosten stark unterscheiden: Model Cards und Positionality Statements brauchen keine neue Software und riskieren nur oberflächliche Compliance, während Peer-Panels und Stakeholder-Engagement Koordination und institutionelles Buy-in erfordern, weshalb es eine gestufte Einführung empfiehlt statt eines Entweder-Oder-Engagements. Siehe [[curriculum-design]] dafür, wo diese in ein Programm passen.

## Verbundene Konzepte

- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]

## Verbundene Artikel

- [[lund-socially-accountable-data-science-xai-2026]] — Ein viersäuliges Framework (Antwortbarkeit, Verantwortung, Durchsetzung, Reflexivität) zum Lehren von XAI als Praxis der Verantwortlichkeit (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Value-Sensitive Design studierendenzentrierter ITS (kollaborative versus rohe Erklärungen)
- [[xai-education-framework]] — XAI-ED: das grundlegende Framework für erklärbare KI in der Bildung (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Domänenspezifische Erklärungen bauen Vertrauen und Akzeptanz der Lehrkräfte auf (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Studierendenperspektiven auf transparentes KI-unterstütztes Assessment (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretierbares Knowledge Tracing
- [[explainable-probabilistic-kt]] — Erklärbares Knowledge Tracing über probabilistische Einbettungen
- [[neural-symbolic-knowledge-tracing]] — Neural-symbolisches Knowledge Tracing
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destillieren von Black-Box-Modellen in selbsterklärende LMs für Learning Analytics
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federierte und erklärbare Learning Analytics für datenschutzbewahrende Risikomodellierung
- [[sc2r-counterfactual-recourse-educational-2026]] — Semantisch eingeschränkter kontrafaktischer Regress für Bildungs-Entscheidungsunterstützung
- [[fair-explainable-edu-recommendations]] — Faire und erklärbare Bildungsempfehlungen
- [[multimodal-affective-its-presentation]] — Interpretierbares Closed-Loop-ITS für multimodales affektives Feedback
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Erklärung der ChatGPT-Einführung in der Hochschulbildung
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Erklärbar-durch-Design-LLM-Framework: Aufmerksamkeit über zwei Linsen und score-parametrisierte Erklärungen für automatisiertes Lehrenden-Assessment (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt-Injektion in KI-vermittelter Benotung, wo Erkennung der Nutzerin nie gemeldet wurde (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation vortrainierter Modelle für pädagogisches Assessment neuer KI-unterstützter Bildungsfragen
- [[decision-making-agent-student-decision-acceptance-2026]] — Lehrkraft- versus KI-getroffene Benotungsentscheidungen: eine schriftliche Begründung erweiterte die Fairness-Lücke

## Zitation

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.
