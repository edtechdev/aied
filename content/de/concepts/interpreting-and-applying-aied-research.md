---
title: AIED-Forschung interpretieren und anwenden
created: "2026-09-19T05:41:27-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
translation_of: concepts/interpreting-and-applying-aied-research
source_updated: "2026-10-05T11:23:36-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **AIED-Forschung interpretieren und anwenden** — wie Sie entscheiden, ob ein Befund der KI-Bildung es wert ist, danach zu handeln, egal ob Sie unterrichten, ein Programm leiten, einen Kurs gestalten oder Software bauen. Sie brauchen keine Statistik, um diese Seite zu nutzen. Sie beginnt mit der Frage, die Praktikerinnen und Praktiker tatsächlich haben – *soll ich das tun?* –, arbeitet die wenigen Dinge durch, die sie beantworten, und hält das technische Detail in einem späteren Abschnitt für alle, die es wollen oder brauchen. Die kurze Version: ein Befund ist es wert, danach zu handeln, wenn Sie wissen, womit verglichen wurde, was gemessen wurde, wer untersucht wurde, und ob das Werkzeug noch in der untersuchten Form existiert. Die meisten Behauptungen, die Lehrende, Administration und Entwickelnde erreichen, scheitern an einem dieser vier.

## Fragen zum Nachdenken

- Ein Anbieter, eine Nachrichtenmeldung oder eine Kollegin sagt, ein KI-Werkzeug habe das Lernen verbessert. Was möchten Sie als einziges sehen, bevor Sie es in Ihrem eigenen Kurs ausprobieren – und wüssten Sie, wo Sie danach suchen müssten?
- Jede Artikelseite in dieser Wissensbasis hat jetzt einen Abschnitt **What this means for practice**, und die meisten haben einen Abschnitt **Limitations**. Wenn Sie beide zusammen lesen, was sagt Ihnen jeder, was der andere nicht sagt?
- Studierende üben mit einem KI-Werkzeug und schneiden bei der Übungsarbeit besser ab, dann schneiden sie bei der [[summative-assessment|Prüfung mit geschlossenem Buch]] schlechter ab. Welche Zahl ist das Lernenergebnis, das Ihrem Kurs wichtig ist – und würden Ihre gegenwärtigen Assessments den Unterschied bemerken?
- Eine Studie verspricht eine große Verbesserung, aber sie verfolgte 30 Studierende in einem Kurs an einer Einrichtung, und die untersuchte Version des Werkzeugs ist nicht mehr die Version, die irgendjemand nutzt. Welche dieser beiden Tatsachen beunruhigt Sie mehr, und warum?
- Viele KI-Werkzeuge erhöhen, wie viel Studierende sie nutzen, ohne zu erhöhen, wie viel sie lernen. Wenn Sie zwischen einem Werkzeug wählen müssten, das Engagement erhöht, und einem, das Leistung ohne Hilfe erhöht, welche Evidenz würde es entscheiden?
- Sie werden gebeten, ein Werkzeug auf der Basis der eigenen Wirksamkeitszahlen des Anbieters zu genehmigen oder zu kaufen. Was möchten Sie darüber offengelegt haben, wie diese Zahlen produziert wurden?

## Einführung

Diese Seite ist für Menschen, die etwas entscheiden müssen: eine Lehrkraft, die sich fragt, ob sie eine Aufgabe ändern soll, eine [[administrator|Administratorin]], die einen Piloten abwägt, eine Lerndesignerin, die einen Kurs baut, eine Softwareentwicklerin, die entscheidet, was ein Merkmal tun soll, oder eine Forscherin, die einem von ihnen einen Befund erklärt.

Zwei Gewohnheiten machen den Unterschied, und keine braucht Forschungstraining.

**Lesen Sie zuerst die zwei Abschnitte, die für Sie geschrieben wurden.** Jede Artikelseite hier trägt jetzt einen Abschnitt **What this means for practice** – meist drei bis fünf konkrete Handlungen, abgeleitet aus dieser Studie –, und die meisten tragen einen Abschnitt **Limitations**, der festhält, was die Studie nicht stützen kann. Lesen Sie diese vor den Befunden der Studie, nicht danach. Der Praxisabschnitt sagt Ihnen, wofür die Studie gut ist; der Abschnitt zu Grenzen sagt Ihnen, wo sie endet. Wenn der Praxisabschnitt fehlt oder vage ist, behandeln Sie diese Seite als unfertig statt als Evidenz.

**Beurteilen Sie die Behauptung, nicht das Vertrauen in die Behauptung.** Behauptungen über [[ai-education|KI in der Bildung]] sind meist über *irgendetwas* genau und irreführend über das, was Ihnen wichtig ist, weil sich eine Studie und Ihr Klassenraum in vier Weisen unterscheiden: womit verglichen wurde, was gemessen wurde, wer teilnahm, und welche Version des Werkzeugs genutzt wurde. Der Rest dieser Seite gibt Ihnen die Prüfungen in einfacher Sprache, dann die Evidenz hinter jeder davon für Lesende, die sie wollen.

Was folgt, ist außerdem kein Ersatz für seine Nachbarseiten. [[research-methods-aied|Forschungsmethoden in der KI-Bildung]] behandelt, wie Designs gebaut werden, [[limitations-in-aied-research|Grenzen der AIED-Forschung]] katalogisiert die wiederkehrenden Schwächen der Literatur, [[ai-ed-evaluation|Evaluation von KI in der Bildung]] behandelt, wie Systeme und Ausgaben evaluiert werden, und [[differential-effects-across-learner-groups|Unterschiedliche Effekte zwischen Gruppen von Lernenden]] behandelt, wen ein Befund einschließt und wen nicht.

## Vier Fragen, die die meisten Behauptungen entscheiden

Stellen Sie diese, bevor Sie Zeit, Geld oder ein Semester für etwas aufwenden.

**1. Womit wurde verglichen, und war der Vergleich fair?** „Studierende, die die KI nutzten, schnitten besser ab als Studierende, die es nicht taten" sagt Ihnen nur etwas, wenn die anderen Studierenden etwas Reales taten. Wenn der Vergleich Business-as-usual war – oder nichts –, dann bündelt der Befund das Werkzeug mit zusätzlicher Zeit, zusätzlicher Aufmerksamkeit und Neuheit. Wonach zu suchen ist: eine **Kontrollgruppe**, die eine glaubwürdige Alternative erhielt, und zufällige Zuweisung zu den zwei Bedingungen.

**2. Was genau maßen sie?** Das ist, wo die meisten aufregenden Behauptungen still scheitern. Testpunktzahlen, Hausaufgabenqualität, [[motivation|Motivation]], Einstellungen und [[student-engagement|Engagement]] werden zu einer einzigen „Leistung"-Zahl gepoolt, oder ein Maß der Leistung *mit dem Werkzeug anwesend* wird als Lernen berichtet. Lernen, das davon abhängt, dass das Werkzeug da ist, ist nicht dasselbe wie Lernen, das anhält. Wonach zu suchen ist: was das Instrument maß, ob es für diese Population validiert war, und ob ein Ergebnis **ohne** die KI im Raum gemessen wurde.

**3. Wer wurde untersucht, wie viele, und wie lange?** Dreißig Studierende in einem Kurs sind ein Signal, kein Ergebnis. Eine vierwöchige Intervention kann Ihnen nichts über ein Jahr sagen. Und eine Studie mit Studierenden anders als Ihren ist weiterhin nützlich – sie ist eine Hypothese über Ihr Setting, keine Vorhersage. Wonach zu suchen ist: Stichprobengröße, wie Teilnehmende rekrutiert wurden, Einzelstandort, Dauer, und ob irgendeine Untergruppe groß genug zur Analyse war.

**4. Ist das Werkzeug noch das Werkzeug, das untersucht wurde?** KI-Fähigkeit bewegt sich schneller als Publikation. Ein Befund von 2025 beschreibt die Modellgeneration von 2025 – manchmal eine spezifische Version, manchmal eine Konfiguration, die niemand mehr nutzt. Das macht den Befund nicht falsch; es macht ihn veraltet, und es bedeutet, die Behauptung sollte neu geprüft statt geerbt werden. Wonach zu suchen ist: Modellversion und das Datenerhebungsfenster.

## Was die Evidenz über KI-Behauptungen im Allgemeinen sagt

Wenn Sie sich eine Sache von dieser Seite merken, merken Sie, dass die Schlagzeilenzahl meist aufgeblasen und der Vergleich meist schwach ist. Das ist keine Randmeinung – es ist, was Prüfungen des Feldes selbst berichten. Mehrere gut gestaltete Studien zeigen echte Zuwächse; der Punkt ist, dass die Beweislast bei der Behauptung liegt.

- **Etwa zwei Drittel des durchschnittlichen Effekts verschwinden**, sobald Sie korrigieren, dass beeindruckende Ergebnisse publiziert werden und unbeeindruckende nicht. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] poolten 1,840 Effektstärken aus 67 Reviews und fanden, der korrigierte Durchschnitt war etwa ein Drittel des publizierten Medians – SMD 0.196 gegenüber 0.67.
- **Ein Produktname ist keine Lehrmethode.** Bei der Prüfung der Vergleiche hinter einer prominenten Metaanalyse fand [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] nur **21%** mit wohldefinierter Behandlung, einer Kontrollgruppe und einem validen Lernmaß –, und der berichtete Vorteil für „ChatGPT nutzen" kam größer heraus als für zweckgebaute [[intelligent-tutoring|intelligente Tutoring-Systeme]] (g = 0.7 gegenüber 0.66), was eher ein Warnsignal als ein Triumph ist.
- **Leistung mit dem Werkzeug wird routinemäßig für Lernen gehalten.** In einer [[k-12|K-12]]-Mathematikstudie verdienten Studierende, die mit einem zweckallgemeinen [[conversational-ai|Chatbot]] übten, bessere Übungsnoten und punkteten dann bei der Abschlussprüfung mit geschlossenem Buch **etwa 17% schlechter** als Peers ohne KI-Zugang ([[stanford-evidence-base-ai-k12-2026|Stanford-Evidenzbasis für KI in der K-12]]).
- **Die eigenen Reviews des Felds überstehen Prüfung nicht.** [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026)]] Prüfung von **14 begutachteten Metaanalysen**, die behaupten, KI verbessere Bildung, fand, dass **keine** eine gültige Basis für die von ihr vertretene Behauptung lieferte, und unter 46 zufällig ausgewählten Primärstudien präsentierten **61%** Validitätsbedenken. Das Problem ist nicht ein schlechtes Papier; es ist eine Berichtskultur.
- **Selbstauskünfte schmeicheln jedem.** Menschen bewerten ihre eigenen [[ai-literacy|KI-Fähigkeiten]] etwa **40%** höher, als Leistungsmaße zeigen, weshalb Zufriedenheits- und Konfidenzerhebungen die schwächste Evidenz sind, nach der Sie handeln können ([[self-report-measures|Selbstauskunftsmaße]], [[educational-measurement|Bildungsmessung]]).
- **Die meisten bereits in Klassenräumen befindlichen Produkte haben überhaupt keine unabhängige Evidenz.** Die [[instruction-partners-ai-in-action-learning-tour-2026|Learning Tour von Instruction Partners 2025–26]] profilierte 20 studierendenorientierte KI-Produkte und fand, dass von den 16 mit vollständigen Profilen nur sieben einen unabhängigen Review hatten, der studentische Leistung über Studierendengruppen hinweg in den USA untersuchte; zwei wurden nur im Ausland untersucht, vier hatten Studien in Arbeit und drei stützten sich auf interne Daten allein. Die Autorinnen und Autoren argumentieren, dass unabhängige kausale Studien, die prioritäre Gruppen abdecken, die Erwartung für alle studierendenorientierten Produkte sein sollten – noch nicht die Norm für Werkzeuge, die Schulen bereits nutzen.

## Einen Befund in eine Entscheidung verwandeln

Die Sequenz, die die meiste verschwendete Anstrengung spart, in Reihenfolge.

1. **Schreiben Sie Ihr Ergebnis zuerst auf.** Nicht „KI mehr nutzen", sondern „Studierende können X ohne das Werkzeug tun". Wenn Ihr Ergebnis Leistung ohne Hilfe ist, dann ist eine Studie, die assistierte Leistung maß, benachbarte Evidenz, nicht direkte Evidenz.
2. **Finden Sie den Vergleich und das Maß** — in der Studie oder im Praxisabschnitt ihrer Artikelseite. Wenn eines von beiden fehlt, behandeln Sie die Behauptung als Demo statt als Befund.
3. **Lesen Sie den Abschnitt zu Grenzen als Anweisungen, nicht als Disclaimer.** „Einzelner Kurs, selbstberichtete Ergebnisse, vier Wochen" sagt Ihnen genau, welche Ihrer Annahmen die Studie nicht abdeckt.
4. **Prüfen Sie die Version und das Datum.** Wenn die Studie eine zwei Jahre alte Modellgeneration nutzte, planen Sie neu zu testen statt anzunehmen.
5. **Benennen Sie die ermöglichenden Bedingungen.** Kosten, Lizenzen, Personalzeit, Datenregeln, und ob Studierende für die Stufe bezahlen müssen, die tatsächlich funktioniert. Studien tragen diese selten, und sie entscheiden, ob eine Intervention ein Semester überlebt. In [[chick-faculty-development-ethical-ai-2026|einer Fakultätsentwicklungsstudie mit zehn Teilnehmenden]] sagten alle, sie würden KI weiter nutzen, während dieselben Personen persönliche Abonnements für Werkzeugzugang und keine Zeitunterstützung für die Neugestaltungen beschrieben, die sie geplant hatten.
6. **Pilotieren Sie klein, und messen Sie die Bedingung ohne Unterstützung.** Ein kurzes Pre/Post mit einem Assessment ohne das Werkzeug schlägt eine Zufriedenheitserhebung. Klein und ehrlich schlägt groß und rhetorisch. Siehe [[learning-design|Lerndesign]] dafür, wo das in das Kursdesign passt.
7. **Notieren Sie ein Review-Datum, und seien Sie bereit, die Behauptung fallen zu lassen.** Wenn die Prämisse einer Studie eine Fähigkeit ist, die nicht mehr existiert, ist die ehrliche Bewegung, die Behauptung zu pensionieren statt sie unbegrenzt zu zitieren – dieselbe Disziplin, die diese Wissensbasis auf ihre eigenen Seiten anwendet.

## Wörter, denen Sie in der Forschung begegnen werden

Einfache Übersetzungen, damit Sie eine Studie oder eine Anbieterseite ohne Methodenhintergrund überfliegen können.

- **Effektstärke** — wie groß der Unterschied war, auf einer Skala, auf der 0 nichts ist. Kleine Werte als „einen Anstoß" behandeln, nicht als „eine Transformation".
- **Statistisch signifikant** — unwahrscheinlich reiner Zufall *in dieser Stichprobe*. Es sagt nichts darüber, ob der Effekt groß ist, oder ob er in Ihrer Klasse geschehen wird.
- **Konfidenzintervall** — der Bereich der Ergebnisse, den die Daten nicht ausschließen können. Wenn der Bereich null einschließt, mag der Befund gar nichts sein, wie interessant die Schlagzeile auch ist.
- **[[meta-analysis-systematic-review|Metaanalyse]]** — eine Studie, die viele Studien poolt. Mächtig, und nur so gut wie das, was sie poolte, weshalb Reviews geprüft werden.
- **Publikationsbias** — interessante Ergebnisse werden publiziert und langweilige nicht, deshalb sieht der Durchschnitt der Literatur rosiger aus als die Realität.
- **Selbstauskunft** — Menschen, die sich selbst beschreiben. Nützlich für Einstellungen, schwach für Kompetenz oder Verhalten.
- **Kontrollgruppe** — die Vergleichsbedingung. Das Wichtigste, wonach zu suchen ist.
- **Pre/Post** — vorher und nachher gemessen ohne Vergleichsgruppe. Suggestiv, niemals schlüssig.
- **Untergruppenanalyse** — Ergebnisse für einen Teil der Stichprobe. Meist unterpowert, deshalb als Hypothese behandeln.
- **Replikation** — jemand anderes erhielt dasselbe Ergebnis. Selten, und die stärkste verfügbare Evidenz.
- **[[benchmark|Benchmark]]** — ein fixierter Aufgabensatz zum Punkten von Systemen. Punktzahlen bewegen sich, wenn sich das Ziel bewegt, deshalb das Datum prüfen.

## Wann trotzdem langsamer werden

- **Die Behauptung kommt vom Anbieter, an den Metriken des Anbieters.** Das kann weiterhin informativ sein – ein [[intelligent-tutoring|KI-Tutoring]]-Anbieter berichtet eine gegen menschliche Expertinnen und Experten kalibrierte Engagement-Metrik bei F1 0.83, mit Verbesserungen aus über 40 Experimenten in fünf Monaten ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al., 2026]]) –, aber Konstrukt, Raterinnen und Rater sowie Metrik sind die Entscheidungen des Anbieters. Fragen Sie nach der Vergleichsgruppe und dem Ergebnis ohne Hilfe.
- **Automatisiertes Bewerten wird als gelöst behandelt.** Hohe Übereinstimmung mit menschlichen Raterinnen und Ratern ist Reliabilität, nicht Qualität. In einer Bewertungsstudie stimmten menschliche Raterinnen und Rater mit dem Multi-Rater-Konsens bei etwa r = 0.88 überein, deshalb waren automatisierte Punktzahlen nahe r = 0.85 bereits an der eigenen Messdecke der Aufgabe ([[know-when-to-trust-ai-scoring-reliability-2026|Know When to Trust AI Scoring]]).
- **Die Referenzliste leistet Schwerarbeit.** Dreißig Referenzeinträge mit nachweislich erfundenen bibliografischen Angaben wurden über 14 [[cs-education|Computing-Education]]-Papiere hinweg bestätigt, alle von 2025 und 2026 ([[citation-errors-hallucinations-computing-education-2026|Denny et al., 2026]]). Wenn eine Behauptung auf einem Zitat ruht, prüfen Sie das Zitat.
- **Niemand maß das Verhalten, von dem Ihre Politik abhängt.** Über 493 deduplizierte Einträge und 14 prioritäre Studien hinweg maß keine Studie, ob Verifikation gelang *und* was die lernende Person dann damit tat, beurteilt gegen einen unabhängigen Standard der Ausgabequalität ([[verification-quality-reliance-calibration-genai-2026|Verifikation und Vertrauenskalibrierung]]). Kurspolitiken hängen an genau diesem Verhalten.

## Wenn Sie ein Werkzeug bauen oder kaufen

Dieselben Prüfungen kehren sich in Designanforderungen um, und die Evaluationsseiten der Wissensbasis tragen das Detail ([[ai-ed-evaluation|Evaluation von KI in der Bildung]], [[automated-assessment|Automatisiertes Assessment]]).

- **Machen Sie den Vergleich Teil der Feature-Spec.** Entscheiden Sie, was eine lernende Person sonst täte, und seien Sie in der Lage zu sagen, warum Ihr Werkzeug das schlägt – nicht, warum es nichts schlägt.
- **Messen Sie die Bedingung ohne Unterstützung.** Wenn Ihr Ergebnis Lernen ist, schließen Sie eine Aufgabe ohne das Werkzeug ein; assistierte Leistung allein wird Sie ebenso sehr in die Irre führen wie Ihre Käufer.
- **Berichten Sie, wie Ihre automatisierten Urteile validiert wurden** — der Goldstandard, das Kalibrierungsziel, wer Meinungsverschiedenheiten entschied –, und berichten Sie es als Reliabilität statt als Qualität.
- **Benennen Sie die Version und das Datum** in jeder Wirksamkeitsbehauptung, denn Ihr nächstes Release macht sie ungültig.
- **Zeigen Sie die Gegengewichte:** Kosten pro Studierendem, [[accessibility|Barrierefreiheit]], Datenhandhabung, und was mit Lernenden auf der kostenlosen Stufe geschieht. Siehe [[ai-use-disclosure|Offenlegung der KI-Nutzung]], [[privacy|Datenschutz]] und [[governance|Governance]].

## Für Lesende, die die Evidenz wollen

Die Prüfungen oben sind kein Volkswissen; sie kommen von dokumentierten Fehlschlägen in dieser Literatur. Dieser Abschnitt hält das Detail für alle, die ein Papier begutachten, eine Entscheidung verteidigen oder argumentieren, dass ein Werkzeug angemessen evaluiert werden sollte.

**Die Validitätsfehlschläge haben eine Verteilung, nicht nur eine Anwesenheit.** In [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026)]] 46 geprüften Studien war abhängige-Variablen-Fehlanpassung das häufigste Problem (n = 15) — das Maß erfasste nicht, was die Behauptung annahm — gefolgt von unabhängige-Variablen-Fehlanpassung (n = 11), Problemen im experimentellen Design (n = 7), Problemen bei der Datenextraktion (n = 6), Fehlen einer Kontrollgruppe (n = 6) und nicht-zufälliger Gruppenzuweisung (n = 6). Von den 14 Metaanalysen behandelten zwölf mehrere Effektstärken, die aus derselben Primärstudie gezogen waren, als unabhängig, was die scheinbare Evidenzbasis aufbläst.

**Untergruppenbehauptungen sind in den Studien, die sie machen, meist unentscheidbar.** Das [[ai-tutoring-micro-rct-gcse-science-2026|GCSE-Science-Mikro-RCT]] berichtet eine Behandlung-mit-Status-Interaktion von **0.57 marks (95% CI -2.25 to 3.39)**, mit stratifizierten Schätzungen von **g = 0.28 (95% CI -0.04 to 0.59)** für eine Gruppe und **g = 0.35 (95% CI 0.18 to 0.52)** für die andere. Ein Intervall, das null kreuzt, ist kein [[equity-in-ai-education|Gerechtigkeits]]befund; es ist eine Frage für einen lokalen Piloten.

**Eine Synthese kann ihr eigenes Protokoll erfüllen und dennoch ungewichtete Qualität poolen.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al. (2026)]] halten schlicht fest, dass sie kein formales Qualitätsbewertungswerkzeug nutzten und ihre Einschlusskriterien als die Strenge-Schwelle behandelten, deshalb trug eine quasi-experimentelle Studie gleich viel bei wie eine randomisierte –, und ihre Heterogenität liest **I² = 82.98% unter einem Fixed-Effect-Modell, aber 15.75% unter dem Random-Effects-Modell**, weshalb eine Heterogenitätszahl, die ohne ihr Modell zitiert wird, Ihnen nicht sagen kann, wie inkonsistent der Korpus ist.

**[[assessment-validity|Validierung]] automatisierten Urteilens ist Teil des Ergebnisses.** Übereinstimmung mit menschlichen Kodiererinnen und Kodierern ist eine Reliabilitätsaussage, und die Decke oben zeigt, warum sie nicht dasselbe ist wie Qualität ([[machines-misread-pedagogical-quality|Maschinen verkennen pädagogische Qualität]]).

**Werkzeugalter ist eine erstklassige Einschränkung.** Ein Review KI-assistierten Assessments hält fest, dass seine eigenen Befunde spezifische Modellversionen zu spezifischen Zeiten reflektieren, und dass Feldbewegung jede Darstellung von Modellfähigkeiten potenziell innerhalb von Monaten veralten lässt ([[ai-assisted-assessment-instruction-higher-ed-2026|KI-assistiertes Assessment und Instruktion in der Hochschulbildung]]). Bereichsbehauptungen auf ihre Generation eingrenzen: „[[generative-ai|generative KI]] verbesserte X" ist nicht übertragbar, während „GPT-4-Ära-Werkzeuglandschaft, in dieser Aufgabe, mit diesem [[scaffolding|Scaffolding]]" es ist.

**Benchmarkziele bewegen sich**, deshalb kann ein Ergebnis, das ein System heute sättigt oder verfehlt, mit dem nächsten Release invertieren; Sättigungs- und Kontaminationsprüfungen gehören neben jede benchmarkbasierte Behauptung.

**Diese Literatur neben ihren eigenen Kritikern zu lesen ist hier normale Praxis.** Die Berichts-Checklisten für Autorinnen und Autoren sowie Reviewer stehen in [[reporting-interpreting-aied-research|der FAQ zu Berichten und Interpretieren von KI-Forschung]], und die Bewertungsgewohnheiten dieser Seite paaren sich mit [[theory-development-aied|Theorieentwicklung in der KI-Bildung]], wenn eine Behauptung theoretisch statt empirisch ist.

## Eine kurze Checkliste

1. Nennen Sie Ihr Ergebnis in einem Satz, einschließlich ob das Werkzeug darin anwesend ist.
2. Finden Sie den Vergleich. Kein glaubwürdiger Vergleich, keine Entscheidung.
3. Passen Sie das Maß zu Ihrer Behauptung, und bevorzugen Sie ein Ergebnis ohne Hilfe.
4. Entblasen Sie die Zahl: lesen Sie die biaskorrigierte Effektstärke, nicht die Schlagzeile.
5. Prüfen Sie die Modellversion und die Daten der Studie.
6. Lesen Sie den Abschnitt zu Grenzen als Anweisungen für das, was Sie noch nicht wissen.
7. Kalkulieren Sie es: Lizenzen, Stufen, Personalzeit, Datenregeln.
8. Pilotieren Sie klein mit einem Maß ohne Hilfe, dann entscheiden Sie.
9. Notieren Sie ein Review-Datum ein Jahr hinaus, und seien Sie bereit, die Behauptung zu pensionieren.

## Verbundene Konzepte

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — KI-gestützte Bildungsforschung
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Verbundene Artikel

- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensische Prüfung von 14 AIED-Metaanalysen
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Publication-bias-adjustierte KI-Effekte bei etwa einem Drittel der berichteten Größe
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inclusion criteria used as the rigor threshold, and heterogeneity that changes with the model
- [[know-when-to-trust-ai-scoring-reliability-2026]] — When automated scoring reliability meets the task's measurement ceiling
- [[verification-quality-reliance-calibration-genai-2026]] — What the verification and reliance literature does not measure
- [[citation-errors-hallucinations-computing-education-2026]] — Fabricated references that reached print in 2025–2026
- [[stanford-evidence-base-ai-k12-2026]] — Practice gains, exam losses: the assistance-removal problem in K-12 math
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Subgroup effects whose confidence intervals cross zero
- [[chick-faculty-development-ethical-ai-2026]] — Enabling conditions: policy signals, personal subscriptions, no time
- [[ai-tutoring-quality-k12-methodologies-2026]] — Vendor metrics with their calibration and experiment count disclosed
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Findings tied to model versions, and the field's churn
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Independent-evidence counts for 16 student-facing AI products already in use
