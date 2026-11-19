---
title: "Primarstufe"
created: "2026-11-18T18:45:00-05:00"
updated: "2026-11-18T18:45:00-05:00"
type: concept
pedagogy: [scaffolding, game-based-learning, self-regulated-learning, social-emotional-learning]
technology: [adaptive-learning, intelligent-tutoring, conversational-ai, generative-ai]
level: [primary education, k 12]
confidence: medium
translation_of: concepts/primary-education
source_updated: "2026-11-15T06:45:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Synthese:** KI in der Primarstufe wird vor allem eingesetzt, um Übungen im frühen Lesen, Schreiben und Rechnen zu differenzieren, Materialien für Lehrkräfte zu entwerfen und Kindern etwas zu geben, dem sie Fragen stellen können. Die methodisch am besten kontrollierten Studien zeigen kleine Zuwächse, die von der Orchestrierung durch die [[teacher-role|Lehrkraft]] abhängen und nicht vom Modell; eine Studie, die eigens darauf angelegt war, [[adaptive-learning|Adaptivität]] zu isolieren, fand keinen Vorteil dafür. Diese Seite behandelt, was die Evidenz zu Tutoring, Lesen, Schreiben und [[ai-literacy|KI-Kompetenz]] belegt und warum der Einsatz auf Klassenebene verändert, was gute Praxis im Alter von fünf bis elf Jahren bedeutet.

## Fragen zum Nachdenken

- Ein Tutoring-System verbessert die Werte bei den unterrichteten Wörtern, nicht aber bei standardisiertem Wortschatz. Auf welches Ergebnis sollte eine Schule ihre Kaufentscheidung stützen?
- In einer Studie in der zweiten Klasse schnitt der adaptive Tutor nicht besser ab als die feste Aufgabensequenz. Wenn Adaptivität nicht der wirksame Bestandteil ist, welcher ist es dann, und wie würden Sie das prüfen?
- Kinder in einer Studie [[trust|vertrauten]] einem Chatbot etwa so sehr wie einer Lehrkraft oder einem Freund. Was würde sich in Ihrem Unterricht ändern, wenn Sie von diesem Maß an Vertrauen ausgingen?
- Die meisten Einsätze in der Primarstufe finden auf Klassenebene statt: ein gemeinsamer Bildschirm, eine Lehrkraft, die Prompts eingibt, Kinder, die zusehen. Was ermöglicht das, was Geräte für alle nicht ermöglichen?

## Einführung

Die Primarstufe umfasst etwa die Altersspanne von fünf bis elf Jahren, in der Kinder lernen, Text zu dekodieren, mit Zahlen zu denken und in einem Raum mit einer erwachsenen Person zu arbeiten. KI gelangt in diese Stufe über Übungssoftware, die sich an die Antworten eines Kindes anpasst, über Werkzeuge für Lehrkräfte, die Unterrichtspläne und [[feedback]] entwerfen, und über [[conversational-ai|dialogfähige Agenten]], die Kinder direkt ansprechen. Beim Dritten ist die Evidenz am schwächsten und die Exposition am unmittelbarsten.

Kinder haben begrenzte Tastaturfertigkeiten, eine sich entwickelnde [[metacognition]] und eine starke Neigung, ein flüssig formulierendes System für eine sachkundige Person zu halten. In Klassenräumen gibt es weniger Geräte als Kinder, die realistische Einheit ist daher eine Lernstation, ein gemeinsamer Bildschirm oder ein von der Lehrkraft vermittelter Arbeitsablauf — nicht ein Tutor pro Kind. Erwachsene tragen zudem rechtliche und entwicklungsbezogene Verantwortung, die kein Anbietervertrag überträgt.

## Was die Evidenzbasis tragen kann

- **Die Literatur ist breit, aber flach.** Ein Review von 31 Studien zu KI im [[language-learning|Sprachunterricht]] der Grundschule aus den Jahren 2013 bis 2025 ergab, dass sich die Arbeiten auf Sprechen, Literalität und Wortschatz konzentrierten, während Grammatik, Hörverstehen und Gebärdensprache kaum untersucht wurden. Die meisten waren [[qualitative-research|qualitativ]] oder [[mixed-methods-research|Mixed Methods]], mit mittleren Stichproben und ohne Angabe der Jahrgangsstufe.

- **Die stärkste Studie zum Sprachunterricht in der Primarstufe ist bescheiden.** Ein [[meta-analysis-systematic-review|Scoping Review]] von 119 Berichten zu KI-gestützten Werkzeugen im Englischunterricht der Grundschule enthielt eine [[rct|clusterrandomisierte Studie]] mit 217 [[multilingual-learning|Englischlernenden]] der zweiten Klasse. Sie fand eine Effektstärke von 0,38 bei den unterrichteten Wörtern und nicht signifikante Effekte auf standardisierten Wortschatz und [[reading-education|Leseverstehen]] ([[li-zhou-ai-tools-primary-english-scoping-review-2026|Li und Zhou, 2026]]).

- **Eine personalisierte Bruchrechnungsplattform war dem üblichen Unterricht nicht überlegen.** Über fünf Tage hinweg erzielte die Gruppe mit dem üblichen Unterricht signifikant größere Zuwächse im Bruchverständnis als die Mathbot-Gruppe. Die endgültige Stichprobe umfasste nach Ausfällen und dem Entfernen von Ausreißern 22 Schülerinnen und Schüler, und die Vergleichsgruppe lag eine Klassenstufe unter der Behandlungsgruppe ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman, 2024]]).

- **Gepoolte Tutoring-Effekte sind klein und fragil.** Eine Metaanalyse von 18 Experimenten und 11 [[intelligent-tutoring|intelligenten Tutoring-Systemen]] an US-amerikanischen K-12-Schulen fand g = 0,271. Die Effekte hielten sich bei g = 0,266 in der Grundschule, sanken in Studien mit ländlichen Schulen auf g = 0,146 und fielen jenseits von sechs Monaten auf ein nicht signifikantes g = 0,110 ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

Der durchschnittliche Effekt ist positiv, klein und empfindlich gegenüber Setting, Dauer und dem gewählten Ergebnismaß.

## Tutoring und adaptive Übung

- **Adaptivität allein brachte nichts.** In einem Feldexperiment arbeiteten 132 Zweitklässlerinnen und Zweitklässler 30 Minuten mit einer von zwei Versionen desselben Mathematik-Tutors, die in Inhalt, Oberfläche, Feedback und Hinweisen identisch waren. Nur die Aufgabenauswahl unterschied sich. Die Posttest-Werte unterschieden sich nicht, F(1, 124) = 0,32, p = 0,574, und ebenso wenig die berichtete Anstrengung oder Freude ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley, Berner und Schmalfeldt, 2026]]).

- **Die Fortbildung, nicht das System, erzeugte den Zuwachs.** In 19 Klassen öffentlicher Schulen in Brasilien übertrafen Schülerinnen und Schüler, die von fortgebildeten Lehrkräften unterrichtet wurden, die Kontrollgruppe sowohl in der Fortbildungsbedingung (15,15 Punkte) als auch in der Bedingung Fortbildung plus System (12,31). Die zusätzliche Nutzung des Systems brachte keinen weiteren Zuwachs, −4,33, 95%-Konfidenzintervall [−17,29; 7,23], und Lehrkräfte berichteten, dass das Fotografieren der Arbeiten und das Korrigieren von Erkennungsfehlern zusätzliche Zeit kosteten ([[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al., 2026]]).

- **Die Dosis ging mit dem Lesezuwachs einher, und die Dosis war eine Entscheidung der Lehrkraft.** An einer Charter School wurden Erst- und Zweitklässlerinnen und -klässler anhand der protokollierten Minuten in Gruppen mit hoher, niedriger und ohne Dosis eingeteilt. Hohe Dosis erzielte größere Zuwächse als niedrige Dosis mit g = 0,56; hoch gegenüber keiner Dosis erreichte g = 0,65, aber p = 0,026 und lag damit außerhalb der korrigierten Schwelle von 0,025. Schülerinnen und Schüler unterhalb des 25. Perzentils zeigten g = 0,89 ([[burns-ai-tutor-reading-growth-2026|Burns und Morton, 2026]]).

Das System ist nie die gesamte Behandlung. Eine Lehrkraft entscheidet, wer es nutzt, wie lange und was geschieht, wenn es versagt.

## Lesen, Schreiben und Feedback

- **Feedback verbesserte das Schreiben, wenn Lehrkräfte es besprachen.** eRevise gab Fünft- und Sechstklässlerinnen und -klässlern [[ai-feedback-quality|automatisiertes Feedback]] zur Verwendung von Belegen beim argumentativen Schreiben. Bei 34 Lehrkräften und 609 Schülerinnen und Schülern in acht Louisiana Parishes verbesserten sich die Merkmalswerte schon durch das Feedback allein, und in Klassen, in denen Lehrkräfte inhaltlich darauf eingingen, waren die Verbesserungen größer. Konzeptionelle Erklärungen zur Belegverwendung stiegen von 18,1 % auf 41,9 % ([[correnti-erevise-validity-argument-formative-assessment-2026|Correnti et al., 2026]]).

- **Adaptives Feedback war gut gemachter generischer Anleitung überlegen.** In einem präregistrierten Within-Subjects-Experiment überarbeiteten 155 deutsche Fünft- und Sechstklässlerinnen und -klässler sechs kurze Pläne, drei mit LLM-Feedback zum eigenen Text und drei mit von Expertinnen und Experten verfassten Hinweisen, die in Struktur, Ton und Länge angeglichen waren. Die mediane Planqualität stieg unter generischer Anleitung von 2 auf 3 und unter adaptivem Feedback von 2 auf 5 ([[ai-feedback-adaptivity-children-plans-2026|Sukjaitham et al., 2026]]).

- **Ein neunwöchiges [[generative-ai|GenAI]]-Schreibprogramm veränderte Affekt, nicht Tiefe.** Bei 301 Schülerinnen und Schülern der Klassen 5 und 6 im Osten Chinas, die klassenweise zugewiesen wurden, stärkte das Programm das ideale Selbst beim Schreiben in der Zweitsprache sowie die schulische Belastbarkeit und verbesserte den Sprachgebrauch. Es veränderte weder Growth Mindset noch kognitives oder metakognitives Engagement oder die Textorganisation, und die Effekte waren klein: partielles η² von 0,030 für [[motivation]] und 0,014 für den Sprachgebrauch ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]).

Kontingentes Feedback zum eigenen Versuch eines Kindes leistet etwas, das generische Anleitung nicht leisten kann, und der Zuwachs wächst, wenn eine erwachsene Person aufgreift, was das Feedback angestoßen hat.

## KI-Kompetenz und die eigene Nutzung von Chatbots durch Kinder

- **Kinder vertrauen einem Chatbot, der sich korrekt verhält, schnell.** Dreiundsechzig Kinder im Alter von 6 bis 14 Jahren nutzten an einer öffentlichen Schule in den USA einen thematisch begrenzten Chatbot. Zweiundfünfzig Prozent vertrauten seinen Antworten generell, 35 % vertrauten ihm wie einer Lehrkraft oder einem Freund, und etwa ein Drittel hätte ihm etwas anvertraut. Die Kinder prüften die Glaubwürdigkeit mit Fragen, deren Antworten sie bereits kannten ([[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed und Martin, 2025]]).

- **Wissen über KI nimmt mit dem Alter zu; die Einschätzung von Sicherheit nicht.** Bei 71 Kindern im Alter von 10 bis 16 Jahren stieg das Grundlagenwissen über KI mit dem Alter, β = 0,17. Die Einschätzungen, wie wichtig KI-Sicherheit ist (M = 2,51) und wie sicher KI derzeit ist (M = 2,77), lagen nahe dem Mittelpunkt einer vierstufigen Skala, ohne Alterseffekt. Ein zwölfjähriges Kind begründete: „Wenn sie gute Freunde sind, spioniert er nicht so viel“ ([[children-ai-safety-misconceptions-2026|Leisten et al., 2026]]).

- **Unterricht über KI erzeugt große Zuwächse in [[self-report-measures|Selbstberichten]].** Eine Metaanalyse von 16 Studien, die KI selbst zum Gegenstand hatten, poolte 57 Effektstärken aus 3.837 K-12-Schülerinnen und -Schülern zu g = 0,892, bei einer Heterogenität von I² = 94,68 %.

- **Für die oberen Grundschuljahre existiert eine validierte Selbstberichtsskala.** Der AI Literacy [[self-assessment]] Questionnaire mit 15 Items erfasst für die Klassen 4 bis 6 das Lernen über KI, die Funktionsweise von KI und das Leben mit KI, mit CFI = 0,994 und Alpha = 0,934. Seine Autoren erklären, dass er wahrgenommene, nicht nachgewiesene Kompetenz misst ([[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan und Srikoon, 2025]]).

KI-Kompetenz ist hier nicht ein vereinfachtes [[curriculum-design|Curriculum]]. Ein Rahmenwerk für eine neunjährige und eines für eine siebzehnjährige Person unterscheiden sich in ihrer Art: Die jüngere Lernende braucht Geschichten, [[metaphors-and-analogies|Analogien]] und eigenes Herstellen, während die ältere ein System kritisieren und eine Entscheidung begründen kann.

## Was KI-Kompetenz enthält und was die Studien messen

Ein Review von 25 empirischen Primärstudien aus dem Jahr 2025 füllt diese Behauptung inhaltlich: Das Konstrukt, das er kartiert, hat vier Stränge, und sie werden in sehr ungleichen Anteilen unterrichtet. [[yim-ai-literacy-primary-schools-review-2025|Yim und Su (2025)]] fanden digitale Kompetenz für die Interaktion mit KI in 19 der 25 Studien, Computational Thinking in 10, KI-Ethik in 10 und kritische Datenkompetenz in nur 5.

Eine Programmiereinheit erreicht damit einen von vier Strängen. Der Strang, der eine neunjährige Person erkennen ließe, wie Trainingsdaten prägen, was ein Klassifikator ausgibt, ist derjenige, den die Literatur meist überspringt. Yim und Su lesen das Muster als technische Rahmung, die gesellschaftliche Implikationen in eine Nebenrolle drängt.

Der Unterricht folgt konstruktionistischer Logik, aber mit Agenten statt mit Papier. Agenten kamen in 15 von 25 Studien vor, softwareorientierte Geräte in 8 und Unplugged-Aktivitäten in 3; Teachable Machine, Jibo, Cozmo und Alexa lassen Kinder ein Modell trainieren, ohne Code zu schreiben. Von den 16 Studien, die ein Rahmenwerk nennen, nutzten 8 Konstruktionismus oder Konstruktivismus und 6 das ARCS-Modell. Die Reviewerinnen und Reviewer stellen die verbreitete Reihenfolge infrage, die regelbasiertes Programmieren vor datengetriebenem Lernen lehrt, weil maschinelles Lernen von einem Kind verlangt, Beispiele zu kuratieren statt Regeln zu schreiben.

Was als Evidenz gilt, ist dünner als das, was unterrichtet wird. Fragebögen kamen in 19 von 25 Studien vor, oft als einmalige Items zu Bereitschaft oder Absicht, und nur 15 von 25 berichteten überhaupt ein Lernergebnis. Interviews (11) und Rubrics für Artefakte (8) waren die Stellen, an denen konzeptionelles Verständnis sichtbar wurde. Das ist die Basis unter der oben genannten validierten [[self-assessment]]-Skala: ein solides Instrument für wahrgenommene Kompetenz in einer Literatur, die nachgewiesene Kompetenz selten prüft.

Eine systematische Kartierung der Forschung zum naturwissenschaftlichen Grundschulunterricht gelangt von einem anderen Korpus aus zum selben Problem. Über 103 Scopus-indexierte Publikationen von 2023 bis Anfang 2026 hinweg fanden [[barokah-ai-elementary-science-review-2026|Barokah, Hermita und Putra (2026)]], dass sich die erfassten Ergebnisse in affektive und regulatorische Bereiche erweiterten, während epistemische Ergebnisse dünn blieben. Nur wenige Studien fragten, ob Kinder Beobachtung von Schlussfolgerung trennen oder die Grenzen einer KI-generierten Aussage beurteilen können. Ihre Warnung zur Leistungsmessung ist spezifisch für diese Altersstufe: Leistungsaufgaben in der oberen Grundschule liefern unvollständige Erklärungen, Zeichnungen und Gesten, und ein Bewertungsschema, das eine entwicklungsförderliche Antwort als falsch markiert, nimmt den formativen Wert weg. Die Beitragenden beider Literaturen konzentrieren sich in China, den Vereinigten Staaten und Hongkong, und der Grundschul-Review ergänzt eine Geschlechterlücke: Jungen berichten mehr Zuversicht und Bereitschaft (Dai et al., 2020, wie bei Yim und Su berichtet).

## Designentscheidungen, die auf dieser Stufe zählen

- **Setzen Sie auf Klassenebene ein, nicht auf Geräteebene.** Ein gemeinsamer Bildschirm, an dem eine Lehrkraft Prompts eingibt, hält die Ausgaben innerhalb der Prüfung durch Erwachsene, und ein von der Lehrkraft vermittelter Arbeitsablauf kann auch Schülerinnen und Schüler erreichen, die das Werkzeug nie berühren. Das brasilianische Unplugged-Design ist der klarste Fall: Papier und Stift für die Kinder, eine Kamera und ein Server für die Lehrkraft.

- **Rechnen Sie den Prüfaufwand mit ein.** Lehrkräfte in der Rechenstudie schätzten fertige Übungslisten, nannten aber Fotografieren, Warten und das Korrigieren von Erkennungsfehlern als Preis. Die Arbeitsbelastung war negativ mit den Zuwächsen assoziiert, am deutlichsten bei der mentalen Anforderung, −2,569.

- **Fortbilden, bevor Sie skalieren.** Nur 19,2 % der 302 befragten türkischen Grundschullehrkräfte hatten überhaupt eine KI-Fortbildung, und Fortbildung sowie Nutzungshäufigkeit waren die Variablen, die am konsistentesten mit positiven Wahrnehmungen zusammenhingen. Die Bereitschaft (M = 3,98) lag deutlich vor der Erfahrung (M = 3,00) ([[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci und Uygun, 2026]]).

- **Schützen Sie die Grenze zwischen persönlichem und geteiltem Wissen.** Generierte Unterrichtspläne können wie kollektiv bewährte Praxis aussehen, ohne dass eine Fachgemeinschaft sie verbürgt. Das Risiko trifft am härtesten Novizinnen und Novizen, deren [[pedagogy|pädagogisches]] Inhaltswissen sich noch formt ([[webb-pck-genai-2026|Webb et al., 2026]]).

- **Entscheiden Sie, wo die Daten liegen, bevor Sie das Modell wählen.** Ein von der Schule gehostetes kleines [[llm|Sprachmodell]] mit 1B bis 13B Parametern, das nur im Schulnetz erreichbar ist und bei dem ausgehender Datenverkehr untersagt ist, tauscht Reasoning-Tiefe gegen architektonischen Datenschutz. Der Test ist, ob Schulleitungen erklären und kontrollieren können, was mit den Daten der Kinder geschieht ([[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar und Iqbal, 2026]]).

- **Behandeln Sie Kompetenzen, nicht Zugang, als Hebel für [[equity-in-ai-education|Bildungsgerechtigkeit]].** Bei 4.497 Schülerinnen und Schülern der Klasse 6 in den Niederlanden mediierte digitale Kompetenz — nicht die Intensität der KI-Nutzung — den Zusammenhang zwischen Herkunft und [[learning-gains|Leistung]] ([[ai-divide-ses-personality-primary-education-2026|Wang et al., 2026]]).

## Verbindungen

Die Primarstufe ist Teil von [[k-12]] und erbt dessen [[educational-policy-ai|bildungspolitische]] Probleme sowie die Engpässe bei den Lehrkräftekapazitäten, doch die entwicklungsbedingten Rahmenbedingungen sind ihre eigenen. Die angrenzende Literatur zur [[early-childhood-elementary-ai-education|frühen Kindheit]] umfasst den Vorschulbereich und die ersten Schuljahre, in denen Spiel und [[scaffolding]] durch Erwachsene dominieren. Die [[secondary-education|Sekundarstufe]] setzt etwa ab elf Jahren ein, wo Fachbereiche und [[summative-assessment|Prüfungen]] den Klassenraum mit einer einzigen Lehrkraft ersetzen.

## Implikationen für die Praxis

**Für Lehrkräfte**

- Legen Sie zuerst das Sprach- oder Mathematikziel fest, dann wählen Sie die Funktion des Werkzeugs. KI-Unterstützung wirkte, wenn sie in eine Aufgabe eintrat, statt eine zu ersetzen.
- Führen Sie adaptive Übung als kurze, protokollierte Lernstation durch und prüfen Sie die Minuten pro Kind, nicht die Nutzung pro Klasse.
- Fragen Sie Kinder, was ein Chatbot ist und wer sehen kann, was sie eingeben, bevor Sie sie einen nutzen lassen.

**Für Schulleitungen**

- Kalkulieren Sie bei jeder Entscheidung für lokales Hosting das zweite und dritte Jahr mit ein: Patchen, Backup und die technische Person, die dafür verantwortlich ist.
- Benennen Sie für jeden KI-entworfenen Plan oder Kommentarsatz, der in Umlauf kommt, eine prüfende Person, und planen Sie die Prüfzeit ein.
- Beurteilen Sie ein Lese- oder Mathematikwerkzeug anhand standardisierter und proximaler Maße zusammen.

**Für Forschende**

- Berichten Sie Dosis, Jahrgangsstufe und Implementierungsunterstützung zusammen mit den Effektstärken; die meisten Primärstudien lassen eines der drei weg.
- Trennen Sie im Design das Werkzeug vom Arbeitsablauf der Erwachsenen; Fortbildungs- und Systemeffekte waren in der Studie, die beides prüfte, nicht unterscheidbar.
- Messen Sie Prozesse, nicht nur Posttest-Werte. Fragenprotokolle, Überarbeitungsverläufe und Dialog-Rubrics erfassen, was Selbstberichtsskalen nicht erfassen.

## Verbreitete Fehlvorstellungen

- **„Adaptiv bedeutet besser.“** Adaptivität bezeichnet einen Mechanismus, kein Ergebnis: Der Tutor für die zweite Klasse, der die Aufgabenschwierigkeit anpasste, hinterließ Posttest-Werte, die statistisch nicht von der festen Sequenz zu unterscheiden waren, F(1, 124) = 0,32, p = 0,574.

- **„Ein Zuwachs bei den Items, die das Programm unterrichtet hat, beweist Lernen.“** In der Englischstudie in der Grundschule zeigte sich der Vorteil bei den Wörtern, die die Intervention abdeckte, und verschwand bei standardisiertem Wortschatz und Leseverstehen.

- **„Kinder begegnen Chatbots mit gesunder Skepsis.“** In der oben genannten Studie entstand Vertrauen schnell: Eine Mehrheit akzeptierte die Antworten des Systems, und mehr als ein Drittel behandelte es wie eine Lehrkraft oder einen Freund.

- **„Junge Kinder erhalten eine leichtere Version desselben KI-Kompetenz-Lehrplans.“** Was sich über die Altersstufen hinweg verschiebt, ist die Art der Aufgabe, nicht ihre Schwierigkeit: früh Geschichten und eigenes Herstellen, später Kritik und Rechenschaft.

## Verbundene Konzepte

- [[developmental-psychology]] — warum das Alter verändert, was eine Aufgabe verlangen kann, nicht nur, wie schwer sie ist
- [[math-education]] — das Fach mit den meisten KI-Studien in der Primarstufe und den meisten Nullergebnissen
- [[reading-education]] — Leseflüssigkeit, Dekodierung und Dosiseffekte in den frühen Klassenstufen
- [[writing-education]] — automatisiertes Feedback, Überarbeitung und die Grenzen der Bewertung mit Rubrics
- [[digital-divide]] — Lücken bei Geräten, Konnektivität und Kompetenzen, die entscheiden, wer profitiert
- [[equity-in-ai-education]] — unterschiedliche Effekte nach Einkommen, Sprachstatus und Ländlichkeit
- [[teacher-role]] — Orchestrierung, Vermittlung und die Arbeit, die KI dem Alltag einer Lehrkraft hinzufügt
- [[curriculum-design]] — KI-Kompetenz über Jahrgänge hinweg sequenzieren, statt ein Modul hinzuzufügen
- [[privacy]] — Kinderdaten, Aufbewahrung und architektonischer statt vertraglicher Schutz
- [[assessment]] — was als Evidenz gilt, dass ein Grundschulkind etwas hinzugelernt hat

## Verbundene Artikel

- [[ai-elementary-language-education-review-2026]] — 31 Studien zu KI im Sprachunterricht der Grundschule, konzentriert auf Sprechen, Literalität und Wortschatz
- [[guo-ai-literacy-developmental-paces-2026]] — 118 K-12-Studien, geordnet im Entwicklungsrahmenwerk PACES
- [[yu-k12-ai-education-ai-literacy-meta-analysis-2026]] — 16 Interventionen, die KI selbst unterrichten, gepoolt bei g = 0,892
- [[yim-ai-literacy-primary-schools-review-2025]] — 25 Primärstudien; KI-Kompetenz als vier ungleich unterrichtete Stränge, meist per Fragebogen erfasst
- [[barokah-ai-elementary-science-review-2026]] — 103 Publikationen, die fünf Anwendungscluster im naturwissenschaftlichen Grundschulunterricht kartieren; epistemische Ergebnisse dünn
- [[karampa-students-game-designers-ai-literacy-2026]] — 22 Schülerinnen und Schüler bauen ein Escape Game zu Fehlinformationen; KI-Kompetenz steigt von 3,684 auf 4,309
- [[llm-comparative-judgment-writing-screening-2026]] — 1.208 Schülerinnen und Schüler der Klassen 3 bis 6, LLM-Bewertung im Paarvergleich
- [[melo-llm-classroom-observation-teach-2026]] — 8.618 KI-Bewertungen im Vergleich mit Experteneinschätzungen nach TEACH Primary
- [[age-tiered-ai-literacy-guidebooks-2026]] — altersgestufte Handreichungen, 831 Teilnehmende; Akzeptanz ist nicht Lernen
- [[horowitz-kraus-children-chatgpt-cognitive-control-2026]] — Sechs- und Siebenjährige zeigen schwächere frontoparietale Konnektivität als Erwachsene
- [[tutor-case-bench-challenging-behaviors-2026]] — 923 dokumentierte Fälle; das beste Modell trifft in 55,8 % der Fälle eine dokumentierte Reaktion
- [[llm-simulating-student-scientific-thinking-2026]] — simulierte Schülerideen weichen in den Grundschulklassen am stärksten von realen ab
- [[human-ai-complementarity-social-emotional-learning-2026]] — Agenten halten Ton und Ablauf; Pädagoginnen und Pädagogen führen bei der Reflexion
