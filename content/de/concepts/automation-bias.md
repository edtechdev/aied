---
title: Automatisierungsbias
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-19T12:54:50-05:00"
type: concept
foundations: [cognitive-offloading, human-ai-collaboration, ai-literacy]
pedagogy: [metacognition]
ethics: [trust-calibration, automation-bias]
audience: [instructors, learners, administrators, software developers]
confidence: high
connected_faqs: [reducing-over-reliance, verify-ai-output]
contributors: [editor]
translation_of: concepts/automation-bias
source_updated: "2026-11-19T09:45:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Synthese:** Automatisierungsbias ist der menschliche Fehlermodus, der eine KI-gestützte Entscheidung falsch macht, selbst wenn das System richtig liegt. Menschen akzeptieren eine automatisierte Empfehlung, die sie hinterfragt hätten, wären sie selbst zu derselben Schlussfolgerung gelangt, und sie hören auf, nach den Belegen zu suchen, die ihr widersprochen hätten. In der Bildung sind die entscheidenden Urteile bereits an mehreren Stellen automatisiert – Scores, Bereitschaftsmarkierungen, Aufsichtsurteile, Ground-Truth-Labels, Hinweise –, sodass der Bias an dem hängt, der die Ausgabe absegnet. Der Korpus behandelt ihn weniger als Persönlichkeitsmerkmal denn als Eigenschaft eines Arbeitsablaufs: Er erscheint dort, wo Verifikation optional ist, wo die Ausgabe flüssig ist und wo die prüfende Person einen Preis dafür zahlt, zu zweifeln.

## Fragen zum Nachdenken

- Wenn eine Lehrkraft eine algorithmische Empfehlung überstimmt, ist das Überstimmen meist die Prüfung. Was geschieht mit dieser Prüfung, wenn die Lehrkraft glaubt, der Algorithmus sei besser informiert als sie selbst?
- Zwei Fehler sind möglich: eine falsche Empfehlung akzeptieren und eine richtige ablehnen. Welchen fängt das Verfahren Ihrer Institution ab, und welchen belohnt es?
- Wenn ein Dashboard eine lernende Person als gefährdet markiert – was müssten Sie wissen, um zu widersprechen, und woher käme dieses Wissen?
- [[trust-calibration|Vertrauensforschung]] sagt voraus, dass Menschen, die an sich selbst zweifeln, sich am stärksten an Maschinen lehnen. Was bedeutet es, dass der Korpus bei Studierenden das Gegenteil findet?
- Wessen Urteil wird verdrängt, wenn eine KI das [[feedback]] schreibt, die Note setzt oder die Intervention entwirft – und hat der [[human-in-the-loop-ai|Mensch in der Schleife]] eine echte Gelegenheit einzugreifen oder nur eine formale?

## Einführung

Studierende und [[teacher-role|Lehrkräfte]] arbeiten bereits neben Systemen, die Urteile produzieren: Aufsatzbewertende, Engagement-[[visualization|Dashboards]], Aufsichtserkennung, Annotationsmodelle, die Labels erzeugen, Tutoring-Hinweise. Jede dieser Ausgaben erreicht eine Person, die entscheiden muss, ob sie sie annimmt, und Automatisierungsbias benennt das vorhersagbare Scheitern dieser Person beim Prüfen. Diese Seite behandelt die menschliche Seite des Problems. Bias im Modell – schiefe Trainingsdaten, ungleiche Fehlerraten über Gruppen hinweg – ist auf [[bias-mitigation]] dokumentiert. Die Frage hier ist, was geschieht, nachdem das Modell gesprochen hat.

Das Konzept ist für die Bildung wichtig, weil die Menschen in der Schleife selten Fachleute für das System sind. Eine Lehrkraft, die entscheidet, ob sie einer algorithmischen Empfehlung über eine lernende Person traut, ist eine Domänenexpertin mit dreißig weiteren Studierenden im Raum und ohne Prüfprotokoll. Eine Raterin, der vor der Beurteilung eines Aufsatzes ein Maschinenscore gezeigt wird, wird gebeten, einer Zahl zu widersprechen, die keine sichtbare Geschichte hat. Automatisierungsbias macht diese Positionen schwer, und er ist der Grund, warum „ein Mensch prüft die Ausgabe" als Schutz schwächer ist, als es klingt.

## Was der Bias ist und was nicht

Die Literatur trennt zwei Fehler. **Unterlassung** ist das Versäumnis zu bemerken, dass das automatisierte System nichts getan hat, als es hätte handeln sollen, oder dass es einen Fall verfehlt hat, den es hätte erfassen sollen.

**Begehung** ist das Akzeptieren einer Handlung oder eines Urteils, das das System falsch erzeugt hat. Die Bildungsversion ist die vertraute: der Aufsatz, der gut bewertet und nicht erneut gelesen wurde, die markierte lernende Person, die nicht befragt wurde, der Hinweis, dem ohne Prüfung gefolgt wurde.

Drei benachbarte Konzepte sind leicht mit ihm zu verwechseln, und der Korpus trennt sie:

- [[trust-calibration|Vertrauenskalibrierung]] ist der Zustand der Abhängigkeit einer Person relativ zur tatsächlichen Zuverlässigkeit des Systems. Automatisierungsbias ist der spezifische Fehler, den eine Fehlkalibrierung erlaubt, und beide werden unterschiedlich gemessen.
- [[cognitive-offloading|Kognitive Auslagerung]] ist das Delegieren mentaler Arbeit an ein Werkzeug. Auslagerung kann vernünftig sein; Automatisierungsbias ist, was geschieht, wenn die Delegation der Prüfung entkommt.
- Modellseitiger Bias ist eine Eigenschaft des Systems. Automatisierungsbias ist eine Eigenschaft der Interaktion, und er bleibt verfügbar, selbst wenn das Modell vollkommen korrekt ist.

Die Diskrepanz, die das anschaulich macht, ist, dass Automatisierungsbias keinen Fehler in der Maschine braucht. Das [[geoscience-field-learning-genai-2026|geowissenschaftliche Review generativer KI]] im Feldlernen baut drei Mechanismen auf Ankern, Bestätigungsfehler und Automatisierungsbias – aufmerksamkeitsbezogene Vorstrukturierung, interpretatives Verankern und Autoritätstransfer – und stellt schlicht fest, dass keiner davon erfordert, dass die Ausgabe falsch ist.

## Warum pädagogische Entscheidungen exponiert sind

Fünf Stellen tragen den größten Teil des Risikos, und jede hat eine andere Person, die absegnet:

1. **Bewertung und Feedback.** [[automated-assessment|Automatisierte Bewerter]] und Schreibanalysatoren erzeugen eine Zahl oder einen Kommentar, die ein Mensch annehmen kann, ohne die Arbeit erneut zu lesen.
2. **Analytics und Frühwarnung.** [[learning-analytics|Analytics-Dashboards]] schließen aus Klickstrom- und Abgabedaten auf Teilhabe und Risiko und präsentieren die Inferenz dann als Markierung. [[recommender-systems-and-learning-paths|Empfehlungssysteme]] gehen weiter und ordnen, was eine lernende Person als Nächstes tun sollte.
3. **Aufsicht und Erkennung von Fehlverhalten.** [[remote-proctoring|Aufsichtssysteme]] und [[ai-detection|Erkennungswerkzeuge]] erzeugen einen Verdacht, über den ein Mensch entscheidet, oft unter Zeitdruck.
4. **Ground Truth selbst.** Wenn Modelle die Labels annotieren, die die Forschung später als Wahrheit behandelt, tritt der Bias in den Apparat der [[educational-measurement|Bildungsmessung]] ein.
5. **Lernendengerichtete Unterstützung.** [[intelligent-tutoring|Hinweise]], Erklärungen und Entwürfe laden Studierende ein, eine Darstellung des Materials anzunehmen, statt eine eigene aufzubauen.

## Was der Korpus zeigt

### Lehrkräfte, die Scores und Empfehlungen den Vorrang geben

Die klarste Beschreibung des Mechanismus findet sich in den Arbeiten, die sich an Lehrkräfte richten. [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe et al. (2026)]] beschreiben diagnostische Systeme, die Leistung und Bearbeitungszeit sehen, während [[motivation|Motivation]], Lerngeschichte und Klassendynamik für sie unsichtbar bleiben, und warnen, dass Automation Bias Lehrkräfte dazu drängen kann, sich Empfehlungen zu beugen, die auf diesem schmalen Ausschnitt beruhen. Ihr Gegenmittel ist nicht ein besserer Score, sondern eine andere Haltung: Wo die Erklärung schwach ist, müssen sich Lehrkräfte stärker auf ihre eigene Beobachtung dessen stützen, wie sich Schülerinnen und Schüler bei der Nutzung der KI verhalten.

Die deutlichste Lücke zeigt sich am Punkt der Urteilsbildung. [[human-in-the-loop-ai-scoring-national-assessment-2026|Die Studie zur Bewertung nationaler Leistungstests (2026)]] lässt Rater maschinelle Bewertungen überprüfen, und ihre Autorinnen und Autoren benennen den ungeprüften Mechanismus direkt: Ob Rater, denen vor ihrer Urteilsbildung KI-Bewertungen angezeigt werden, von diesen verankert werden oder ihnen nachgeben, ist nicht gemessen; als nächsten Schritt schlagen sie Experimente mit verblindeten gegenüber nicht verblindeten Ratern vor. Die Human-in-the-Loop-Behauptung in diesem Design ist daher eine Annahme, kein Befund — und dies ist die gute Version des Designs.

Ein Experiment zur Sicherheitsaufsicht liefert nun die entsprechende Messung in einem benachbarten Kontext. Über 416 Bewerterinnen und Bewerter sowie 3.957 Items hinweg senkte die Präsentation von Modellvorschlägen vor der menschlichen Antwort die Bewertergenauigkeit bei Items, die das Modell falsch beantwortet hatte, von 36,7 % auf 20,6 %, während die Genauigkeit bei Items, die das Modell richtig beantwortet hatte, um 7,3 Punkte stieg ([[shi-human-ai-complementarity-safety-2026|Shi et al., 2026]]). Die Bewertenden wurden insgesamt genauer und zugleich weniger fähig, jene Fehler zu erkennen, zu deren Erkennung sie eingesetzt waren — genau jener Bias, der sich so auswirkt, wie ihn die Autorinnen und Autoren der nationalen Assessment-Studie vermuteten: Die Maschinenantwort setzt den Rahmen, und der Mensch passt sich innerhalb dieses Rahmens an.

### Analytics-Dashboards und der Human-in-the-Loop-Anspruch

[[in-the-loop-educational-ai-learning-sciences-2026|Die lernwissenschaftliche Übersichtsarbeit zu In-the-Loop-Bildungs-KI (2026)]] gibt dem Muster seine allgemeine Form: Dashboards leiten Beteiligung aus Klicks ab, automatisiertes [[writing-education|Schreibfeedback]] bevorzugt Oberflächenmerkmale gegenüber der Argumentation, und Early-Alert-Ampeln deuten Lernverläufe vorab. Der Automation Bias verschärft jeden dieser Effekte, und die Übersichtsarbeit behandelt [[trust|Vertrauen]] als soziotechnisches Ergebnis, das durch Transparenz, wahrgenommene Kompetenz und ein wirksames Recht auf Übersteuerung geprägt wird — und nicht als stabile Einstellung.

Zwei Designs nehmen diesen Punkt ernst. [[factria-responsible-institutional-analytics-2026|FACTRIA (2026)]] belässt einen Menschen im Prozess (Human-in-the-Loop), indem es Empfehlungen verweigert: In einer Think-Aloud-Studie, in der elf [[stakeholders|Stakeholder]] vier reale Analytics-Fälle lasen — kodiert mit Cohens k von 0,76 —, unterstützte der [[conversational-ai|Chatbot]] die Interpretation und lehnte es ausdrücklich ab, Entscheidungen zu treffen; seine Autorinnen und Autoren benennen Automation Bias und unkritische Übernahme als verbleibende Risiken. [[ludia-udl-ai-thought-partner-2026|LUDIA (2026)]] leitet jede Ausgabe über eine Lehrkraft und räumt dann ein, dass diese Absicherung schwächer ist, als sie aussieht, denn die Lehrkraft, die am ehesten einen schlechten Vorschlag übernimmt, ist diejenige, die darauf vertraut, dass LUDIA [[universal-design-for-learning|Universal Design for Learning]] versteht.

Der konzeptionelle Punkt, der diese Aspekte verbindet, stammt aus [[extended-minds-coupling-flexibility-2026|dem Kopplungs-Flexibilitäts-Ansatz erweiterter Geister (2026)]]: Eine bloß formale Gelegenheit, etwas anzunehmen oder abzulehnen, bringt den Menschen nicht in die Entstehung des Urteils hinein, wenn der Automation Bias sie zunichtemacht. Aufsicht erfordert eine substanzielle Möglichkeit zum Eingreifen, und eine Ablehnen-Schaltfläche, die niemand drückt, ist keine Aufsicht.

### Ground Truth und LLM-Annotation

Das Konzept gelangt über die Annotation in die Forschungspipeline. [[ground-truth-reliability-aied|Die Reliabilitätsanalyse von Ground Truth (2026)]] benennt die Risiken des Einsatzes von LLMs als Annotatoren: übermäßiges Vertrauen in die Ausgaben ohne Überprüfung, zirkuläre Validierung, bei der ein Modell seine eigene Ausgabe bewertet, und schleichende Degradation, bei der die Labels trügerisch konsistent bleiben, während sie sich in die falsche Richtung verschieben. Automationsbias kontaminiert hier den Referenzstandard, an dem jede spätere Messung beurteilt wird.

### Lernende und epistemische Autorität

Für Lernende dreht sich der Mechanismus darum, wem das Denken zugeschrieben wird. [[polished-artifacts-fragile-engagement-2026|Die CSCL-Analyse polierter Artefakte (2026)]] verankert ihren sozial-kognitiven Strang im Automation Bias — der KI wird eine größere epistemische Kompetenz zugeschrieben, als die Situation rechtfertigt — und verbindet ihn mit einem zweiten Strang, in dem polierte externe Produkte ein Gefühl von Abgeschlossenheit erzeugen. [[page-cognitive-partnership-cycle-human-ai-2026|Der Zyklus der kognitiven Partnerschaft (2026)]] zählt Automation Bias zu vier Fehlermodi, die Iteration an die Stelle des Denkens treten lassen, neben [[cognitive-offloading|Offloading]], der Illusion des Verstehens und rekursiver Fehlerverstärkung. [[eight-mode-ai-engagement-typology-2026|Die Engagement-Typologie (2026)]] behandelt ihn als einen Modus unter acht: das Modell zu fragen, was die Literatur sagt, ist ein Oracle-Zug, dessen charakteristisches Risiko darin besteht, die Antwort zu übernehmen.

Zwei Beiträge argumentieren, dass das Gegengewicht eine Haltung und keine Regel ist. [[assessing-student-drive-framework-2025|Das Drive-Framework (2025)]] schlägt aktive [[agency|menschliche Handlungsfähigkeit]] als kognitive Absicherung gegen Automation Bias und gegen den Kompetenzschwund vor, der auf das Auslagern von Aufgaben folgt. [[sun-llm-nursing-education-professional-identity-2026|Der Übersichtsartikel zur Pflegeausbildung (2026)]] liest 489 Studien aus 47 Ländern durch die Linse von Benners Modell des Fertigkeitserwerbs, der Cognitive Load Theory, dem Automation Bias und Wengers Identitätsformation und kommt zu dem Schluss, dass dasselbe Werkzeug hilft oder schadet — je nachdem, ob es Arbeit ersetzt, die für die Kompetenz nebensächlich ist, oder Arbeit, die sie überhaupt erst konstituiert.

### Wenn der Bias als Risiko benannt statt gemessen wird

Ein großer Teil der Literatur führt Automation Bias in einem Bedrohungsmodell auf, ohne ihn zu testen, und der Unterschied ist entscheidend dafür, wie viel Gewicht das Konzept tragen kann. [[ahmadfard-interactive-oer-review-2026|Die interaktive OER-Review (2026)]] zählt ihn zu den wiederkehrenden Risiken, die die Handlungsfähigkeit von Lernenden und Lehrenden untergraben, und führt ihn auf, statt ihn zu messen. [[alshahrani-health-sciences-ai-use-2026|Die gesundheitswissenschaftliche Umfrage (2026)]] deutet die [[ethics|ethischen]] Bedenken von 310 Studierenden als Argument für eine [[professional-training|Berufsausbildung]], die Automation Bias ausdrücklich behandelt. [[ai-literacy-legal-translation-2026|Die Studie zur juristischen Übersetzung (2026)]] fordert, Post-Editing und Verifikation als benotete Fähigkeiten zu lehren, und nennt den Druck durch Automation Bias und Qualitätsillusion, der es leicht macht, Übersetzungsfehler zu übersehen. [[morales-cevallos-ai-forensic-science-education-2026|Die Review zur Forensik (2026)]] findet Automation Bias in ihren eingeschlossenen Studien dokumentiert und schlägt fallbasierte Übungen vor, die auf berichteten Fehlern aufbauen. [[rana-genai-design-thinking-2025|Die Design-Thinking-Studie (2025)]] macht daraus eine Designanforderung: [[scaffolding|Gerüste]], die menschliches Urteilsvermögen ins Zentrum rücken und sowohl der Auslagerung als auch dem Automation Bias entgegenwirken.

Ein anderer Bias liegt in der Ausgabe statt beim Nutzer. In Esmeraldas, Ecuador, beschrieben 90 Bildungs- und Gemeinschaftsakteure, wie Bildwerkzeuge den Hautton, die Haarstruktur und die Gesichtszüge afro-ecuadorianischer Teilnehmender veränderten; eine Person nannte es „eine Form von Rassismus, auch wenn sie digital ist“ — repräsentationaler Schaden, den keine Genauigkeitsmetrik erfasst ([[medranda-morales-ethnoeducation-ai-literacy-ecuador-2026|Medranda Morales & García Iturralde, 2026]]).

## Wo die Evidenz dünn, gemischt oder umgekehrt ist

**Eine Vorhersage, die scheiterte.** Die Literatur zu Automatisierungsbias sagt voraus, dass Menschen, die am eigenen Urteil zweifeln, sich am stärksten an Maschinen lehnen, sodass niedrige [[self-efficacy]] zu hohem Übervertrauen führen sollte. [[kim-overtrust-ai-literacy-2026|Die Studie zu Übervertrauen (2026)]] fand das umgekehrte Vorzeichen: Zuversichtliche Studierende übernahmen [[generative-ai|generative KI]] früher, sammelten positive Erfahrungen und vertrauten dem Werkzeug stärker. Das Design ist querschnittlich und kann keine Reihenfolge etablieren, was die Autorinnen und Autoren mehr als einmal sagen, sodass der Befund den Mechanismus nicht umstößt – aber er zeigt, dass die Klassenzimmerversion nicht in die Richtung laufen muss, die die Laborversion vorhersagt.

**Das entscheidende Experiment fehlt.** Niemand im Korpus hat den verblindeten gegenüber dem nicht verblindeten Rating-Vergleich durchgeführt, der die Verankerung durch Maschinenscores isolieren würde, sodass der Human-in-the-Loop-Schutz beim Scoring auf Plausibilität beruht. Dasselbe gilt für Dashboards: Die Studien beschreiben, was Lehrkräften gezeigt wird, selten, was sie deswegen anders tun.

**Konzeptionelle Aussagen überwiegen Messungen.** Das [[haiml-human-centered-ai-metacognitive-model-2026|HAIML-Modell (2026)]] baut seine Rahmung auf der Forschung zu Automatisierungsbias auf und bietet einen Lehrrahmen statt eines Tests davon. Der Zyklus kognitiver Partnerschaft bietet sechs Aussagen und eine Forschungsagenda. Beide sind für das Design nützlich, und keiner ist ein Beleg für die Größe des Phänomens in der Bildung.

**Das Argument zur Tragweite ist der stärkste Teil.** Die Essays binden den Mechanismus an institutionelle Folgen: [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026|Muñiz und Castro Samayoa (2026)]] nennen Automatisierungsbias als einen von drei Mechanismen, die die Praxis kritischer Bürgerschaft erodieren, und [[academic-erasure-complexity-ai-writing-2026|die Analyse institutioneller Kontrolle der KI-Nutzung (2026)]] verbindet ihn mit der affektiven Arbeit der Durchsetzung von [[educational-policy-ai|KI-Politik]]. [[llm-fallacy-misattribution|Die Analyse des LLM-Fehlschlusses]] liefert die sauberste nahe Unterscheidung: Automatisierungsbias betrifft die Überabhängigkeit von einem System während einer Entscheidung, während ihr Gegenstand die Wahrnehmung der nutzenden Person ist, eine Ausgabe sei ihre eigene Kompetenz gewesen.

## Implikationen für die Praxis

- **Machen Sie die Prüfung billig und blind.** Halten Sie das menschliche Urteil fest, bevor Sie das der Maschine zeigen, oder halten Sie den Score zurück, bis eine Bewertung vorliegt. Verblindung ist die Intervention, die der Korpus immer wieder vorschlägt und nicht getestet hat.
- **Veröffentlichen Sie, was das System sehen konnte.** Eine Empfehlung, die allein auf Bearbeitungszeit beruht, sollte das sagen; Lehrkräfte können einen dünnen Input abwerten, wenn sie wissen, dass er dünn ist.
- **Zählen Sie einen Ablehnungsknopf nicht als Aufsicht.** Fragen Sie, was wahr sein müsste, damit eine Person ihn drückt, und was das Verfahren belohnt.
- **Lehren Sie Verifikation als benotete Fähigkeit.** Post-Editing, Nachrechnen und Quellenprüfung gehören in das [[curriculum-design|Curriculum]], nicht in einen Politikabsatz.
- **Schützen Sie die konstitutive Arbeit.** Die pflegewissenschaftliche Evidenz legt nahe, dass die zu verteidigende Grenze nicht „KI-freie Aufgaben" ist, sondern die Aufgaben, durch die Expertise entsteht.

## Verbreitete Fehlvorstellungen

- **„Er zählt nur, wenn die KI falsch liegt."** Er wirkt am saubersten, wenn die KI richtig liegt und der Mensch aufhört zu prüfen; die Mechanismen der Feldarbeit brauchen keine falsche Ausgabe.
- **„Er ist dasselbe wie niedriges oder hohes Vertrauen."** Kalibrierung ist ein Zustand; Automatisierungsbias ist der Fehler, den ein fehlkalibrierter Arbeitsablauf erlaubt. Zu geringes Vertrauen erzeugt seinen eigenen Fehler – gute Empfehlungen abzulehnen.
- **„Ein Mensch in der Schleife behebt das."** Die Schleife ist nur so gut wie die Gelegenheit einzugreifen, und die Scoring-Studien haben Verankerung nicht gemessen.
- **„Es ist ein Studierendenproblem."** Lehrkräfte, Raterinnen, Annotatoren und Administratorinnen sind die Absegnenden in jedem Design, das der Korpus beschreibt.
- **„Es ist ein Charakterfehler, den bessere Schulung entfernt."** Schulung hilft, aber dieselbe Person verhält sich anders, je nachdem, ob Verifikation billig ist, ob die Ausgabe flüssig ist und ob Widerspruch etwas kostet.

## Verbundene Konzepte

- [[trust-calibration]] — der Abhängigkeitszustand, dessen Scheitern Automatisierungsbias benennt
- [[bias-mitigation]] — das systemseitige Gegenstück: Bias im Modell
- [[cognitive-offloading]] — Delegation mentaler Arbeit, deren ein Ergebnis ungeprüfte Annahme ist
- [[human-in-the-loop-ai]] — der Schutz, dessen Stärke dieser Fehler entscheidet
- [[explainable-ai]] — die Transparenzintervention, die der Korpus vorschlägt und selten testet
- [[learning-analytics]] — Dashboards und Frühwarnungen, wo sich Unterlassungsfehler konzentrieren
- [[recommender-systems-and-learning-paths]] — das Ranken, was als Nächstes zu tun ist, dem eine lernende Person einfach folgen kann
- [[automated-assessment]] — der Score, den ein Mensch ohne erneutes Lesen annehmen kann
- [[scaffolding]] — Prüfungen, die billiger bleiben als die Annahme
- [[self-efficacy]] — das Merkmal, auf dem die Standardvorhersage beruht
- [[ai-detection]] — Detektion, über die Menschen unter Zeitdruck urteilen
- [[remote-proctoring]] — Verdacht, den ein Modell erzeugt und eine Person entscheidet
- [[ai-literacy]] — wo Verifikation als benotete Fähigkeit liegen würde

## Verbundene Artikel

- [[shi-human-ai-complementarity-safety-2026]] — 416 Bewertende, 3.957 Items: Candidate-First-Unterstützung senkte die Fehlererkennung bei Items mit falschen Modellantworten von 36,7 % auf 20,6 % (Shi et al., 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Lehrkräfte warnten davor, sich Empfehlungen zu unterwerfen, die auf einer dünnen Datenbasis beruhen
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — benennt die Verankerung von Bewertern durch AI-Scores als das ungetestete Risiko und schlägt eine Verblindung vor
- [[in-the-loop-educational-ai-learning-sciences-2026]] — Dashboards, Feedback zu Oberflächenmerkmalen und Ampeln als allgemeines Muster
- [[factria-responsible-institutional-analytics-2026]] — elf Stakeholder, vier Fälle, ein Chatbot, der Empfehlungen verweigert
- [[ludia-udl-ai-thought-partner-2026]] — die Schutzfunktion der Lehrkraft, die durch das Vertrauen in das Fachwissen des Tools geschwächt wird
- [[extended-minds-coupling-flexibility-2026]] — ein formales Recht auf Ablehnung ist keine Aufsicht, wenn der Automatisierungsbias es aushebelt
- [[ground-truth-reliability-aied]] — LLM-Annotation, zirkuläre Validierung und schleichender Label-Drift
- [[polished-artifacts-fragile-engagement-2026]] — Automation Bias als sozial-kognitiver Strang reduzierter epistemischer Anstrengung
- [[page-cognitive-partnership-cycle-human-ai-2026]] — einer von vier Fehlermodi in der rekursiven Zusammenarbeit zwischen Mensch und KI
- [[eight-mode-ai-engagement-typology-2026]] — der Oracle-Modus und sein charakteristisches Risiko
- [[assessing-student-drive-framework-2025]] — aktive menschliche Handlungsfähigkeit als Schutz gegen Automation Bias
- [[sun-llm-nursing-education-professional-identity-2026]] — 489 Studien zur Frage, ob KI wesensfremde oder konstitutive Arbeit verdrängt
- [[geoscience-field-learning-genai-2026]] — Verankerungs-, Bestätigungs- und Automatisierungsbias in evidenzgebundener Feldarbeit
- [[ahmadfard-interactive-oer-review-2026]] — Automation Bias wird unter den Risiken aufgeführt, die die Handlungsfähigkeit von Lernenden und Lehrenden untergraben
- [[alshahrani-health-sciences-ai-use-2026]] — Die ethischen Bedenken von 310 Studierenden lassen sich als Argument für eine explizite Schulung lesen
- [[ai-literacy-legal-translation-2026]] — Post-Editing wird als benotete Kompetenz vermittelt, gegen den Druck von Qualitätsillusionen
- [[morales-cevallos-ai-forensic-science-education-2026]] — Automation Bias, dokumentiert in den untersuchten Forensik-AI-Studien
- [[rana-genai-design-thinking-2025]] — Scaffolds, die das menschliche Urteilsvermögen in den Mittelpunkt stellen
- [[kim-overtrust-ai-literacy-2026]] — die Vorhersage kehrte sich um: selbstsichere Studierende vertrauten dem Tool stärker
- [[haiml-human-centered-ai-metacognitive-model-2026]] — ein Rahmenmodell, das auf der Forschung zum Automation Bias aufbaut, sie jedoch nicht überprüft
- [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026]] — einer von drei Mechanismen, die kritische Staatsbürgerschaft erodieren
- [[academic-erasure-complexity-ai-writing-2026]] — Automatisierungsbias innerhalb der affektiven Arbeit, die KI-Nutzung zu überwachen
- [[llm-fallacy-misattribution]] — die naheliegendste Unterscheidung: übermäßiges Vertrauen in ein System versus wahrgenommene persönliche Kompetenz
