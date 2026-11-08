---
title: Sensoren und Blickanalyse
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-07T20:05:54-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-05T22:30:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Sensoren und Blickanalyse** — die Nutzung von Eye-Tracking, Elektroenzephalografie, elektrodermaler Aktivität, Herzfrequenzvariabilität und kamerabasierter Körperhaltung, um Lernendenzustände wie Aufmerksamkeit, Engagement, kognitive Belastung und Affekt zu erschließen. In der [[ai-education|KI in der Bildung]] versprechen diese Signale einen kontinuierlichen, nonverbalen Blick auf Lernen, den Quizze und Selbstauskünfte nicht liefern können. Sie stehen zugleich im Zentrum des härtesten Inferenzproblems des Feldes: Ein Sensor zeichnet einen Körper auf, keinen Geist, und jede Aussage darüber, was eine lernende Person denkt oder fühlt, ist eine Interpretation, die auf dieser Aufzeichnung aufsetzt ([[kim-ai-embodied-learning-review-2026|Kim und Han, 2026]]).

## Fragen zum Nachdenken

- Eine Webcam kann zeigen, dass Ihre Augen während einer ganzen Vorlesung innerhalb eines Videoplayers blieben. Heißt das, Sie waren aufmerksam?
- Wenn ein Tutor Ihre kognitive Belastung in Echtzeit schätzen könnte, sollte er aufgrund dieser Schätzung handeln, ohne Sie vorher zu fragen?
- Der Blick einer lernenden Person kann den Bildschirm wegen eines Tics, einer Sehbeeinträchtigung oder einer kulturellen Norm verlassen. Was bedeutet eine Markierung „geringe Aufmerksamkeit" für diese Person?
- Sollte eine Universität Hirn- und Herz-Daten zur Kursverbesserung erheben dürfen, und was würde echte Einwilligung erfordern?
- Eine Angabe von „75% Genauigkeit bei Engagement" klingt präzise. Welche Ebene des Engagements hat der Sensor tatsächlich erreicht, und welche hat er verfehlt?
- Die Fernaufsicht liest inzwischen Körperhaltung und Kopfbewegung. Wo verläuft die Grenze zwischen dem Erkennen von Fehlverhalten und dem Beurteilen eines Körpers?

## Einführung

Sensoren und Blickanalyse bezeichnen eine Familie von Verfahren, die physikalische Messungen einer lernenden Person in pädagogische Inferenzen verwandeln. Zu den Messungen gehören, wo die Augen ruhen und wie lange, die elektrische Aktivität der Kopfhaut, Schweißdrüsenreaktionen, die Schlag-zu-Schlag-Variation der Herzfrequenz sowie Position und Bewegung von Kopf und Oberkörper. Zu den Inferenzen gehören Aufmerksamkeit, Engagement, kognitive Belastung, Verwirrung, Stress und – in Assessment-Kontexten – Verdacht.

Der Reiz ist unkompliziert. [[self-report-measures|Selbstauskünfte]] sind retrospektiv und grob, und Quizze beproben Lernen an wenigen Momenten. Sensoren laufen kontinuierlich und kosten die lernende Person kaum bewussten Aufwand. Diese Kombination hat Sensorik zentral für [[learning-analytics]] und [[student-modeling]] gemacht, und sie hat eine umfangreiche Literatur hervorgebracht, in der die Sensorik technisch beeindruckend und die Interpretation dünn ist.

Ein [[meta-analysis-systematic-review|systematisches Review]] von 23 Studien, die KI mit [[embodied-learning]] verbinden, macht die Schieflage konkret. Analyse und Evaluation machten 40,0% der kodierten KI-Rollen aus, Erkennung und Detektion 22,5%, während Feedback und Coaching 15,0% einnahmen. Sensorische Rollen machten 62,5% der Rollen-Tags aus gegenüber 35,0% für partizipative ([[kim-ai-embodied-learning-review-2026|Kim und Han, 2026]]). Das Feld ist besser darin, Lernende zu beobachten, als darin, zu ändern, was als Nächstes geschieht.

## Was jedes Signal tatsächlich misst

**Blick und Fixation.** Eye-Tracker berichten, wohin das Auge zeigt, wie lange es verweilt, wann es sakkadiert und wie weit es streut. Bildschirmbasierte Systeme wie WebGazer schätzen den Blick aus einer Webcam, während Brillen das Auge direkt verfolgen. TutorLoop wandelt Blick in zwei Größen um: Aufmerksamkeit als Prozentsatz der Blickpunkte innerhalb des Inhaltsbereichs und Arbeitslast als Blickentropie, mit der Begründung, dass streuender Blick kognitive Belastung abbildet ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Ollie, ein blickinformierter Assistent für Kinder, definiert stattdessen Interessenbereiche in einem Bild und löst Erzählung aus, wenn ein Kind einen davon ansieht ([[gaze-informed-ai-children|Wu et al., 2026]]).

**Elektroenzephalografie.** EEG zeichnet Spannungsschwankungen über die Kopfhaut mit hoher zeitlicher Auflösung auf. Es ist das einzige Signal dieser Familie, das kortikale Aktivität direkt erreicht, weshalb es Assessment-Forschung anzieht. Praktische Bildungssysteme verwenden Trockenelektroden und wenige Kanäle: E3Sense nahm vier trockene EEG-Kanäle mit 125 Hz ab und analysierte zwei frontale ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). Forschungssysteme wählen den entgegengesetzten Weg: Kosmyna et al. (2025) nutzten 32-Kanal-EEG, um Studierende zu vergleichen, die mit einem [[llm|LLM]], einer Suchmaschine oder ohne Werkzeug schrieben, und fanden die schwächste neuronale Konnektivität in der LLM-Gruppe ([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna et al., 2025]]). Diese Studie ist zugleich die klarste Warnung vor Ein-Kanal-Evidenz, da ihre zentrale Behauptung auf einer optionalen Crossover-Sitzung beruht, an der nur 18 von 54 Teilnehmenden teilnahmen.

**Elektrodermale Aktivität.** EDA misst die Leitfähigkeit der Schweißdrüsen, einen Index sympathischer Erregung. Sie reagiert auf Stress, Anstrengung und emotionale Intensität und kann nicht zwischen ihnen unterscheiden. Dasselbe Konstrukt erscheint in Armbändern und in Stirnelektroden, die durch einen Eye-Tracker-Rahmen wenige Zentimeter auseinander fixiert sind ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

**Herzfrequenz und Herzfrequenzvariabilität.** Die Herzfrequenz bildet Erregung ab, und die Variabilität zwischen den Schlägen indiziert autonome Erholung. In einer einjährigen Studie mit 458 Studierenden, die Oura-Ringe trugen, ging Sprachgebrauch emotionaler Erschöpfung mit geringerer Schlafeffizienz und geringerer Herzfrequenzvariabilität einher ([[affective-text-wearable-student-health|Affective Text and Wearable Sensing, 2026]]). Keines der beiden Maße identifiziert eine Ursache.

**Kamerabasierte Körperhaltung und Bewegung.** Ein Fernaufsichtssystem kann siebzehn Körperlandmarken pro Frame extrahieren und daraus Haltungsabweichung, Kopfbewegungstrend und Oberkörperbewegung ableiten ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). Das misst Bewegung. Es als verdächtiges Verhalten zu bezeichnen, ist ein getrennter, unbelegter Schritt.

Diese Signale unterscheiden sich in Abtastrate, Rauschen und Instrumentierungsaufwand. E3Sense glich zwölf EEG-, sechs Augen- und drei EDA-Fenster zu einer gemeinsamen 120-Sekunden-Repräsentation mit 166 Dimensionen aus ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage betrieb sieben Gerätetypen gleichzeitig und kam zu dem Schluss, dass leichte Kombinationen den größten Teil des nutzbaren Signals trugen ([[engagement-assessment-video|Leng et al., 2026]]).

## Wofür die Signale genutzt werden

**Engagement-Erkennung im [[video-education|Videolernen]].** E3Sense bat 30 Universitätsstudierende, fünf Segmente pro Video zu bewerten, was 450 Bewertungen ergab. Ein fusioniertes Modell erreichte 75,0% ausgewogene Genauigkeit innerhalb einer Stufe gegen eine Baseline der häufigsten Klasse von 63,0% bei zurückgehaltenen Teilnehmenden ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage berichtete einen MAE von 0,81 und 83,75% Genauigkeit innerhalb einer Stufe über 16 Teilnehmende und 715 Sondenfenster ([[engagement-assessment-video|Leng et al., 2026]]). Beide behandeln die Schätzung als Näherung.

**Aufmerksamkeitsschätzung im Klassenzimmer.** Ein [[multimodal|multimodaler Transformer]] fusionierte Gesichtsbilder mit Wearable-Signalen auf DIPSER, einem naturalistischen Datensatz mit 57 Personen, und erreichte einen MAE von 0,283. Sein Vorsprung gegenüber einer rein visuellen Baseline war bescheiden, und die Autorinnen und Autoren schließen, dass Gesichtsmerkmale die primäre Informationsquelle waren ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]).

**Kognitive Belastung und Feedback-Timing.** TutorLoop nutzte blickabgeleitete Aufmerksamkeit und Arbeitslast, um mit einem bestärkenden Lernagenten unter vier [[feedback|Feedback-Typen]] zu wählen. Über 187 Teilnehmende hinweg intervenierte das vollständige System seltener als die Baselines und verbesserte dennoch die Aufmerksamkeit und senkte die Arbeitslast ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**Fernaufsicht und Integrität.** Haltungsbasierte Fernaufsicht berichtet nahezu Spitzenwerte auf ihrem eigenen gelabelten Szenarioset: 99,56% Genauigkeit und eine AUC von 0,9957 ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). Wearable-KI verändert dasselbe Problem von der anderen Seite. Intelligente Brillen beseitigen den Blickabfall und die Haltungsverschiebung, auf die Aufsicht baut – eine Bedingung, die Corbin und Kolleginnen als doppelte Transparenz bezeichnen ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**Affekt und [[well-being|Wohlbefinden]].** Während Prüfungen erhobene physiologische Signale sagten Notenkategorien voraus, wobei Random Forest über 30 Wiederholungen einen Mittelwert von 0,96 erreichte ([[physiological-signals-exam-outcomes-ml|Yamazaki und Rimal, 2026]]). Die stärksten Prädiktoren waren elektrodermale Aktivität, Beschleunigungsbewegung und Hauttemperatur. Das ist Erregung und Bewegung, nicht Verstehen.

**Assessment-Forschung.** EEG wurde als direktes Maß für Vertrautheit und für mentale Repräsentation getestet. Beide Linien sind vielversprechend und beide bleiben explorativ, was der nächste Abschnitt aufgreift.

## Die Inferenzlücke

Jede der obigen Nutzungen hängt an einer Kette: ein physiologisches oder behaviorales Ereignis, ein daraus berechnetes Merkmal, ein auf Labels trainiertes Modell und eine Aussage über einen mentalen Zustand. Jedes Glied ist undicht.

Das Label ist oft das schwächste Glied. E3Sense sagte die eigenen Segmentbewertungen der Lernenden voraus, und 63% dieser Bewertungen lagen auf den beiden engagierten Stufen. Ein Modell kann gut abschneiden, indem es die Verteilung statt den Zustand lernt. Als die Forschenden die eigenen Definitionen von Engagement der Lernenden hinzufügten, stieg die Genauigkeit von 64,6% auf 71,5%, was nahelegt, dass die Labels und die Signale teilweise unterschiedliche Dinge maßen ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

[[assessment-validity|Validierung]] kann das Modell aufblähen. Ein Benchmark von fünfzehn Modellen zur EEG-basierten Vertrautheitsvorhersage erreichte 0,9853 F1 unter geschichteter Kreuzvalidierung. Trial-unabhängiges Group K-Fold, das die zeitliche Struktur respektiert, senkte den Spitzenwert auf 0,6038 F1 gegen ein Zufallsniveau von 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara und Halloluwa, 2026]]). Die erste Zahl beschreibt Leckage; die zweite beschreibt Lernen.

Ein neuronales Korrelat ist kein Score. Aus EEG rekonstruierte Bilder korrelierten mit der Testleistung bei R² = 0,79 über 55 Teilnehmenden-Video-Beobachtungen. Richtig beantwortete Items zeigten zudem höhere semantische Ähnlichkeit als falsche. Dennoch produzierte ein Teilnehmender hochwertige Rekonstruktionen und antwortete falsch, sodass Rekonstruktionsqualität nicht als Korrektheit gelesen werden kann ([[seeing-cognitive-representations-eeg-reconstruction|Su et al., 2026]]).

Aufmerksamkeit ist nicht Lernen. In TutorLoop korrelierte Aufmerksamkeit mit Lernen bei r = 0,017, während Arbeitslast negativ mit r = -0,168 korrelierte ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Ein System, das das Aufmerksamkeitssignal maximierte, hätte etwas nahezu Rauschhaftes optimiert.

Ein Sensor kann Ko-Präsenz erfassen, wo eine Studie Interaktion behauptet: [[hur-computational-analysis-teacher-group-interactions-2026|Hur et al. (2026)]] fanden, dass ein haltungsbasierter Detektor nur 55% Recall erreichte und 11 von 20 Ereignissen erfasste, die menschliche Codierende in Interaktionen zwischen Lehrkraft und Schülergruppen identifizierten. Die Lehrkraft war in 49,2% der kodierten Segmente innerhalb der Gruppengrenze anwesend, während Studierende nur in 25,4% zur Lehrkraft blickten, und kein Audio-Merkmal änderte sich in einem der beiden Vergleiche, sodass die Pipeline räumliche Ko-Präsenz statt anhaltender Interaktion registrierte.

Ein physiologisches Profil ist keine Diagnose. Prüfungsstressmodelle sagen aus Erregung und Bewegung eine Notenkategorie voraus, und die Autorinnen und Autoren bestehen darauf, dass die Ausgabe neben persönliche Umstände und psychosozialen Kontext gehört statt in eine Entscheidung mit hohem Einsatz ([[physiological-signals-exam-outcomes-ml|Yamazaki und Rimal, 2026]]).

Schließlich ist Erhebung nicht Integration. Kim und Han fanden, dass die meisten multimodalen Studien Ströme parallel sammelten, eine Gesichtsemotion, Blick und Gesichtserkennung nachträglich ausrichtete, und keine ihre Eingaben live fusionierte, während eine lernende Person das System nutzte ([[kim-ai-embodied-learning-review-2026|Kim und Han, 2026]]). Eine Seite synchronisierter Kanäle kann wie ein Modell der lernenden Person aussehen, wenn sie nur eine Aufzeichnung ist.

## Ethik des Vermessens von Lernenden

**Einwilligung wird durch institutionelle Macht geschwächt.** Ein Studierender, der anwesend sein oder eine Prüfung ablegen muss, kann eine Kamera oder ein Wearable nicht frei ablehnen. Demografische Merkmale werden vielleicht nicht einmal freiwillig angegeben: Die Geschlechts-, Alters- und Ethnizitätslabels von DIPSER wurden durch Computer-Vision-Modelle aus Bildmaterial erschlossen statt von Teilnehmenden geliefert ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). Zu erschließen, wer jemand ist, um zu prüfen, ob ein Modell diese Person fair behandelt, ist selbst ein Profiling-Akt.

**Biometrische Daten sind keine gewöhnlichen Analytics-Daten.** EEG, EDA und Herzfrequenzvariabilität sind gesundheitsnah und in vielen Rechtsordnungen besondere Datenkategorien. Sie können Schlaf, Stress und medizinische Zustände offenlegen, die über alles hinausgehen, was ein Kurs braucht. Ein blickinformiertes System für Kinder zog selbst in einem kleinen Piloten einen [[privacy|Datenschutz]]-Einwand eines Elternteils auf sich ([[gaze-informed-ai-children|Wu et al., 2026]]).

**Funktionsausweitung ist der normale Weg.** Wohlbefindensüberwachung wird Risikomarkierung, und Risikomarkierung wird Bewertungsbeleg. Corbin und Kolleginnen zeigen die Assessment-Version dieser Verschiebung: Sobald physischer Ausschluss scheitert, wandert die Inspektion von Artefakten zu Körpern, und Studierende müssen beweisen, dass ihre Brillen korrigierend und ihre Geräte therapeutisch sind ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**Gerechtigkeitsfehler bündeln sich an Körpern, die abweichen.** Gesichtsbasierte Aufmerksamkeitsschätzung hängt von Hautton, Sehhilfen und Beleuchtung ab. Blickbasierte Aufmerksamkeit benachteiligt Lernende, die Blickkontakt vermeiden, darunter einige autistische und [[neurodiversity|neurodivergente Studierende]]. Haltungsbasierte Fernaufsicht markiert Tics, Stimming und kulturelle Bewegungsnormen. Die Fernaufsichtsstudie testet nicht, ob markierte Haltung mit Fehlverhalten korrespondiert oder ob der Detektor [[inclusive-learning|Studierende mit Behinderungen]] oder kulturelle Unterschiede im Blick fair behandelt ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). Regulierung ist hier keine Lösung; sie ist eine Weise, den Fehler in eine Regel zu waschen.

**Gerechtigkeitsansprüche brauchen Evidenz auf Subjektebene.** Ein geschlechtsgerichteter Regularisierer senkte die MAE-Lücke in der Validierung von 0,02 auf 0,005 und vergrößerte dann sowohl die Lücke als auch den Fehler der schlechtesten Gruppe bei zurückgehaltenen Subjekten ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). Einen einzelnen Split als Fairnessbeleg zu berichten, ist ein Designfehler mit Gerechtigkeitskosten.

**Datenschutz lässt sich einbauen.** TutorLoop betrieb WebGazer clientseitig, sodass roher Blick den Browser nie verließ ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Diese Wahl zeigt, dass ein Teil der Kosten architektonisch und nicht inhärent ist. Die härtere Frage ist, ob die Inferenz überhaupt existieren sollte.

## Verbreitete Fehlvorstellungen

**„Eye-Tracking sagt Ihnen, wo die Aufmerksamkeit ist."** Es sagt Ihnen, wohin die Augen zeigen. Der Blick kann auf einer Folie ruhen, während die lernende Person an etwas anderes denkt, und er kann den Bildschirm aus Gründen verlassen, die nichts mit Aufmerksamkeit zu tun haben. Das Aufmerksamkeitsmaß von TutorLoop korrelierte mit Lernen bei r = 0,017, was nahezu keinem Zusammenhang entspricht ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**„Ein physiologisches Signal ist ein direkter Auslesewert eines mentalen Zustands."** EDA indiziert sympathische Erregung, und Herzfrequenzvariabilität indiziert autonome Erholung. Keines unterscheidet Stress von Anstrengung von Aufregung. Ein Modell, das Prüfungsnoten aus EDA, Bewegung und Hauttemperatur vorhersagt, hat die Erregungssignatur des Körpers gelernt, nicht das Verstehen der lernenden Person ([[physiological-signals-exam-outcomes-ml|Yamazaki und Rimal, 2026]]).

**„Hohe Klassifikationsgenauigkeit heißt, das System erkennt den Zustand."** Genauigkeit hängt von den Labels, dem Split und der Basisrate ab. Die EEG-Vertrautheitsvorhersage fiel von 0,9853 auf 0,6038 F1, als die Validierung Trial-Grenzen respektierte ([[eeg-familiarity-automated-assessment-2026|Nanayakkara und Halloluwa, 2026]]). Die 99,56% der Fernaufsicht beschreiben ein maßgeschneidertes gelabeltes Szenarioset, keine Live-Prüfungen ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]).

**„Engagement ist eine Sache, also kann ein Score es repräsentieren."** Das Konstrukt hat drei Stränge, und ein Sensor erreicht überwiegend den ersten. E3Sense fand, dass Lernende es über kognitive, behaviorale und emotionale Indikatoren in unterschiedlichen Anteilen definierten, und diese Definitionen veränderten die Vorhersage ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). Eine einzelne Zahl verbirgt, welche Ebene gemessen wurde.

**„Wenn das Modell im Validierungssplit fair ist, ist es im Klassenzimmer fair."** Ein Regularisierer, der den Validierungsfehler zwischen Geschlechtsgruppen ausglich, verschlechterte die Lücke bei zurückgehaltenen Daten ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). Fairness ist eine Eigenschaft eines Einsatzes, nicht eines Checkpoints.

## Verbundene Konzepte
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## Verbundene Artikel
- [[gaze-informed-ai-children]] — Blickausgelöste LLM-Erzählung hielt Kinder 6,48 s in einem erzählten Bereich gegenüber 1,67 s, aber die Studie maß Aufmerksamkeit statt Verstehen (Wu et al., 2026)
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — Kopfbefestigtes EEG, Eye-Tracking und Stirn-EDA sagten selbst bewertetes Engagement mit 75,0% Genauigkeit innerhalb einer Stufe gegen eine Baseline von 63,0% voraus (Anupkrishnan et al., 2026)
- [[engagement-assessment-video]] — EduGage fusionierte sieben Wearable- und Kameraströme zu Engagement-Schätzungen auf Segmentebene (MAE 0,81) und argumentiert für leichtere Instrumentierung (Leng et al., 2026)
- [[student-attention-estimation-fairness-2026]] — Ein multimodales Aufmerksamkeitsmodell erreichte MAE 0,283, und seine Fairnessgewinne in der Validierung kehrten sich bei zurückgehaltenen Subjekten um (Fragkiadakis et al., 2026)
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — Wearable-KI ist doppelt transparent, sodass physischer Ausschluss scheitert und die Durchsetzung dazu driftet, die Körper von Studierenden zu beurteilen (Corbin et al., 2026)
- [[eeg-familiarity-automated-assessment-2026]] — Fünfzehn Modelle zur EEG-Vertrautheitsvorhersage fielen unter trial-unabhängiger Validierung von 0,9853 auf 0,6038 F1 (Nanayakkara und Halloluwa, 2026)
- [[seeing-cognitive-representations-eeg-reconstruction]] — Aus EEG rekonstruierte Bilder folgten der Testleistung bei R² = 0,79, wobei ein Teilnehmender mit hoher Rekonstruktionsqualität falsch antwortete (Su et al., 2026)
- [[physiological-signals-exam-outcomes-ml]] — Random Forest sagte Prüfungsnotenkategorien aus EDA, Bewegung und Hauttemperatur voraus – Signale, die Erregung statt Verstehen indizieren (Yamazaki und Rimal, 2026)
- [[affective-text-wearable-student-health]] — Bei 458 Studierenden mit Oura-Ringen folgte das emotionale Register statt des Sorgenthemas Schlaf und Herzfrequenzvariabilität (2026)
- [[tutorloop-sensor-cognitive-feedback-2026]] — Webcam-Blick steuerte bestärkendes Feedback für 187 Lernende; Aufmerksamkeit korrelierte mit Lernen bei r = 0,017, während Arbeitslast negativ korrelierte (2026)
- [[arif-automated-online-proctoring-yolov11-2026]] — YOLOv11-Haltungsmerkmale markierten verdächtiges Verhalten mit 99,56% auf einem maßgeschneiderten gelabelten Set, ohne Fehlverhalten oder Fairness zu testen (Arif et al., 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — Die EEG-Konnektivität sank mit externer Schreibunterstützung über 54 Teilnehmende, was Abhängigkeit als akkumulierte kognitive Schuld rahmt (Kosmyna et al., 2025)
- [[kim-ai-embodied-learning-review-2026]] — Über 23 Studien dominierten sensorische Rollen mit 62,5% der Tags, und kein geprüftes System fusionierte multimodale Ströme live (Kim und Han, 2026)
