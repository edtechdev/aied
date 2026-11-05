---
title: Automatisierungsbias
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [cognitive-offloading, human-ai-collaboration, ai-literacy]
pedagogy: [metacognition]
ethics: [trust-calibration, automation-bias]
audience: [instructors, learners, administrators, software developers]
confidence: high
connected_faqs: [reducing-over-reliance, verify-ai-output]
contributors: [editor]
translation_of: concepts/automation-bias
source_updated: "2026-11-04T18:49:36-05:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
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

### Lehrkräfte, die Scores und Empfehlungen folgen

Die klarste Darstellung des Mechanismus findet sich in der lehrkraftgerichteten Arbeit. [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe et al. (2026)]] beschreiben Diagnosesysteme, die Leistung und Bearbeitungszeit sehen, während [[motivation]], Lernhistorie und Klassendynamik für sie unsichtbar bleiben, und warnen, dass Automatisierungsbias Lehrkräfte dazu drängen kann, Empfehlungen zu folgen, die auf diesem dünnen Ausschnitt beruhen. Ihr Gegenmittel ist kein besserer Score, sondern eine andere Haltung: Wo die Erklärung schwach ist, müssen Lehrkräfte sich stärker auf ihre eigene Beobachtung stützen, wie sich Studierende bei der Nutzung der KI verhalten.

Die schärfste Lücke liegt am Punkt des Urteils. [[human-in-the-loop-ai-scoring-national-assessment-2026|Die Studie zum Scoring in der nationalen Leistungsmessung (2026)]] lässt Raterinnen Maschinenscores prüfen, und ihre Autorinnen und Autoren benennen den ungetesteten Mechanismus direkt: Ob Raterinnen, denen vor der Beurteilung KI-Scores gezeigt werden, von ihnen verankert werden oder ihnen folgen, ist ungemessen, und sie schlagen verblindete gegenüber nicht verblindeten Rater-Experimenten als nächsten Schritt vor. Die Human-in-the-Loop-Behauptung in diesem Design ist daher eine Annahme, kein Befund – und es ist die gute Version des Designs.

### Analytics-Dashboards und die Human-in-the-Loop-Behauptung

[[in-the-loop-educational-ai-learning-sciences-2026|Das lerntheoretische Review zu In-the-Loop-KI in der Bildung (2026)]] gibt dem Muster seine allgemeine Form: Dashboards schließen Teilhabe aus Klicks, automatisiertes [[writing-education|Schreibfeedback]] privilegiert Oberflächenmerkmale gegenüber Argumentation, und Ampeln der Frühwarnung interpretieren Verläufe vor. Automatisierungsbias verstärkt jedes davon, und das Review behandelt [[trust]] als soziotechnisches Ergebnis, geformt durch Transparenz, wahrgenommene Kompetenz und ein sinnvolles Recht auf Überstimmung, statt als stabile Einstellung.

Zwei Designs im Korpus nehmen das ernst. [[factria-responsible-institutional-analytics-2026|FACTRIA (2026)]] hält einen Menschen in der Schleife, indem es sich weigert zu empfehlen: In einer Think-Aloud-Studie mit elf [[stakeholders]], die vier reale Analytics-Fälle lesen und mit Cohen's k von 0,76 kodiert wurden, unterstützte der [[conversational-ai|Chatbot]] die Interpretation und lehnte ausdrücklich Entscheidungen ab, und seine Autorinnen und Autoren markieren Automatisierungsbias und unkritische Übernahme als Restrisiken. [[ludia-udl-ai-thought-partner-2026|LUDIA (2026)]] leitet jede Ausgabe durch eine Lehrkraft und räumt dann ein, dass der Schutz schwächer ist, als er aussieht, weil die Lehrkraft, die einen schwachen Vorschlag am ehesten annimmt, gerade die ist, die darauf vertraut, dass LUDIA [[universal-design-for-learning|Universal Design for Learning]] versteht.

Der konzeptionelle Punkt, der diese Befunde verbindet, stammt aus [[extended-minds-coupling-flexibility-2026|der Kopplungs-Flexibilitäts-Darstellung erweiterter Geister (2026)]]: Eine bloß formale Gelegenheit, anzunehmen oder abzulehnen, setzt den Menschen nicht in die Produktion des Urteils, wenn Automatisierungsbias sie zunichtemacht. Aufsicht erfordert eine substanzielle Gelegenheit einzugreifen, und ein Ablehnungsknopf, den niemand drückt, ist keine Aufsicht.

### Ground Truth und LLM-Annotation

Das Konzept erreicht die Forschungspipeline über Annotation. [[ground-truth-reliability-aied|Die Zuverlässigkeitsanalyse von Ground Truth (2026)]] listet die Risiken der Nutzung von LLMs als Annotatoren: übermäßiges Vertrauen in Ausgaben ohne Verifikation, zirkuläre Validierung, bei der ein Modell seine eigene Ausgabe bewertet, und stille Verschlechterung, bei der Labels trügerisch konsistent bleiben, während sie in die falsche Richtung driften. Automatisierungsbias kontaminiert hier den Referenzstandard, gegen den jede spätere Messung bewertet wird.

### Lernende und epistemische Autorität

Für Studierende geht es beim Mechanismus darum, wem das Denken zugeschrieben wird. [[polished-artifacts-fragile-engagement-2026|Die CSCL-Analyse polierter Artefakte (2026)]] gründet ihren sozialkognitiven Strang auf Automatisierungsbias – der KI mehr epistemische Kompetenz zuschreiben, als die Situation rechtfertigt – und paart ihn mit einem zweiten Strang, in dem polierte externe Produkte Abschluss erzeugen. [[page-cognitive-partnership-cycle-human-ai-2026|Der Zyklus kognitiver Partnerschaft (2026)]] nennt Automatisierungsbias unter vier Fehlermodi, die Iteration durch Denken ersetzen lassen, neben [[cognitive-offloading|Auslagerung]], Verständnisillusion und rekursiver Fehlerverstärkung. [[eight-mode-ai-engagement-typology-2026|Die Engagement-Typologie (2026)]] behandelt ihn als einen Modus unter acht: Das Modell zu fragen, was die Literatur sagt, ist ein Oracle-Zug, dessen charakteristisches Risiko darin besteht, die Antwort anzunehmen.

Zwei Beiträge argumentieren, das Gegengewicht sei eine Disposition statt einer Regel. [[assessing-student-drive-framework-2025|Der Drive-Rahmen (2025)]] schlägt aktive [[agency|menschliche Handlungsfähigkeit]] als kognitive Schutzmaßnahme gegen Automatisierungsbias und die Fähigkeitsatrophie vor, die der Auslagerung folgt. [[sun-llm-nursing-education-professional-identity-2026|Das pflegewissenschaftliche Review (2026)]], das 489 Studien aus 47 Ländern durch Benners Kompetenzerwerb, kognitive Belastungstheorie, Automatisierungsbias und Wengers Identitätsbildung liest, schließt, dass dasselbe Werkzeug hilft oder schadet, je nachdem, ob es Arbeit verdrängt, die für die Kompetenz nebensächlich oder für sie konstitutiv ist.

### Wenn der Bias als Risiko benannt statt gemessen wird

Ein großer Teil des Korpus führt Automatisierungsbias in einem Bedrohungsmodell auf, ohne ihn zu testen, und der Unterschied ist wichtig dafür, wie viel Gewicht das Konzept tragen kann. [[ahmadfard-interactive-oer-review-2026|Das Review interaktiver OER (2026)]] nennt ihn unter wiederkehrenden Risiken, die die Handlungsfähigkeit von Lernenden und Lehrkräften erodieren, aufgeführt statt gemessen. [[alshahrani-health-sciences-ai-use-2026|Die gesundheitswissenschaftliche Befragung (2026)]] liest die [[ethics|ethischen]] Bedenken von 310 Studierenden als Argument für eine [[professional-training|Berufsausbildung]], die Automatisierungsbias ausdrücklich abdeckt. [[ai-literacy-legal-translation-2026|Die Studie zur juristischen Übersetzung (2026)]] verlangt, Post-Editing und Verifikation als benotete Fähigkeiten zu lehren, und benennt den Druck von Automatisierungsbias und Qualitätsillusion, der Übersetzungsfehler leicht übersehbar macht. [[morales-cevallos-ai-forensic-science-education-2026|Das rechtswissenschaftliche Review (2026)]] findet Automatisierungsbias in seinen eingeschlossenen Studien dokumentiert und schlägt fallbasierte Übungen vor, die aus berichteten Fehlern gebaut sind. [[rana-genai-design-thinking-2025|Die Design-Thinking-Studie (2025)]] macht ihn zu einer Designanforderung: [[scaffolding|Scaffolds]], die menschliches Urteil im Zentrum halten und sowohl Auslagerung als auch Automatisierungsbias entgegenwirken.

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

- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Lehrkräfte davor gewarnt, Empfehlungen zu folgen, die auf dünnen Daten beruhen
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — benennt die Verankerung von Raterinnen durch KI-Scores als ungetestetes Risiko und schlägt Verblindung vor
- [[in-the-loop-educational-ai-learning-sciences-2026]] — Dashboards, Oberflächenmerkmale im Feedback und Ampeln als allgemeines Muster
- [[factria-responsible-institutional-analytics-2026]] — elf Akteure, vier Fälle, ein Chatbot, der sich weigert zu empfehlen
- [[ludia-udl-ai-thought-partner-2026]] — der Lehrkraftschutz, geschwächt durch Vertrauen in das Domänenwissen des Werkzeugs
- [[extended-minds-coupling-flexibility-2026]] — ein formales Recht abzulehnen ist keine Aufsicht, wenn Automatisierungsbias es zunichtemacht
- [[ground-truth-reliability-aied]] — LLM-Annotation, zirkuläre Validierung und stilles Label-Driften
- [[polished-artifacts-fragile-engagement-2026]] — Automatisierungsbias als sozialkognitiver Strang reduzierter epistemischer Anstrengung
- [[page-cognitive-partnership-cycle-human-ai-2026]] — einer von vier Fehlermodi in rekursiver Mensch-KI-Arbeit
- [[eight-mode-ai-engagement-typology-2026]] — der Oracle-Modus und sein charakteristisches Risiko
- [[assessing-student-drive-framework-2025]] — aktive menschliche Handlungsfähigkeit als Schutz gegen Automatisierungsbias
- [[sun-llm-nursing-education-professional-identity-2026]] — 489 Studien dazu, ob KI nebensächliche oder konstitutive Arbeit verdrängt
- [[geoscience-field-learning-genai-2026]] — Ankern, Bestätigung und Automatisierungsbias in evidentgebundener Feldarbeit
- [[ahmadfard-interactive-oer-review-2026]] — Automatisierungsbias unter Risiken genannt, die die Handlungsfähigkeit von Lernenden und Lehrkräften erodieren
- [[alshahrani-health-sciences-ai-use-2026]] — ethische Bedenken von 310 Studierenden gelesen als Argument für ausdrückliche Schulung
- [[ai-literacy-legal-translation-2026]] — Post-Editing als benotete Fähigkeit gegen den Druck der Qualitätsillusion
- [[morales-cevallos-ai-forensic-science-education-2026]] — Automatisierungsbias in den geprüften rechtswissenschaftlichen KI-Studien dokumentiert
- [[rana-genai-design-thinking-2025]] — Scaffolds, die menschliches Urteil im Zentrum halten
- [[kim-overtrust-ai-literacy-2026]] — die umgekehrte Vorhersage: zuversichtliche Studierende vertrauten dem Werkzeug stärker
- [[haiml-human-centered-ai-metacognitive-model-2026]] — ein auf der Forschung zu Automatisierungsbias gebauter Rahmen, kein Test davon
- [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026]] — einer von drei Mechanismen, die kritische Bürgerschaft erodieren
- [[academic-erasure-complexity-ai-writing-2026]] — Automatisierungsbias in der affektiven Arbeit der Durchsetzung von KI-Nutzung
- [[llm-fallacy-misattribution]] — die nächste Unterscheidung: Überabhängigkeit von einem System versus wahrgenommene eigene Kompetenz
