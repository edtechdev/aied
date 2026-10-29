---
title: "Was sind Best Practices für das Berichten und Deuten von Forschung zu KI in der Bildung?"
created: "2026-09-16T15:05:00-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
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

Ihr Entwurf hat eine Schlagzeilen-Zahl im Abstract, und eine Gutachterin oder ein Gutachter hat gerade gefragt, was die Kontrollgruppe tatsächlich getan hat. Oder Sie sind selbst die Gutachterin oder der Gutachter und halten eine Metaanalyse in der Hand, deren gepoolter Effekt 0.67 beträgt und deren Methodenteil anderthalb Seiten füllt. Oder Ihre Abteilung schreibt eine Handreichung dazu, wie Mitarbeitende KI-Studien berichten sollen, und will etwas Konkreteres als „folgen Sie den Standards".

Sechs Auslassungen entscheiden die meisten dieser Fälle: welches KI-System verwendet wurde, wofür es konfiguriert war, welche pädagogische Rolle es spielte, ob Menschen seine Ausgaben gestaltet oder geprüft haben, was das Ergebnismaß tatsächlich erfasst hat und was die Autorinnen und Autoren gegen Verzerrung, Kosten und Grenzen unternommen haben. „Nicht beurteilbar" ist das ehrliche Urteil, wenn diese Angaben fehlen, und es ist ein anderes Urteil als „widerlegt".

## Die kurze Version

**1.** Beschreiben Sie die KI als Behandlung, nicht als Anbieter. Modell, Version, Konfiguration, Prompts, Rolle und wer die Ausgabe gestaltet oder geprüft hat.

**2.** Nennen Sie die pädagogische Begründung und den aktiven Vergleich. Ein Produktname ist keine Methode, und „weiter wie bisher" ist keine faire Kontrollbedingung.

**3.** Bringen Sie das Maß mit der Behauptung zur Deckung, einschließlich der Frage, ob das Ergebnis verzögert und ohne Unterstützung erhoben wurde.

**4.** Berichten Sie die Unsicherheit, die Ihre Analyse tatsächlich hat: abhängige Effekte, Varianz zwischen Studien, Prädiktionsintervalle, Subgruppengrößen, Publikationsbias.

**5.** Validieren Sie jedes automatisierte Urteil, mit einem benannten Goldstandard und einer benannten entscheidenden Instanz.

**6.** Berichten Sie die Gegengewichte: Governance, Rechenkosten, Ihre eigene KI-Nutzung, Nullbefunde und nur Quellen, die Sie selbst geprüft haben.

## Beschreiben Sie die KI als Behandlung, die jemand nachbauen könnte

Das ist die Prüfung, an der die meisten Einreichungen scheitern. Das RAISE-Framework (*Reporting AI Studies in Education*, Allison 2026) ist eine Checkliste mit 30 Punkten über zehn thematische Bereiche, und seine diagnostische Aussage ist konkret: Einreichungen lassen routinemäßig aus, welches Modell verwendet wurde, wie es konfiguriert war, welche Rolle es spielte und ob menschliche Akteure seine Ausgaben gestaltet oder geprüft haben. Gutachtende bleiben dann mit vier unbeantwortbaren Fragen zurück. Was genau tat die KI? War sie notwendig? Ist das replizierbar? Sind die Lernbehauptungen glaubwürdig?

RAISE reicht von der pädagogischen Begründung über die Spezifikation auf API-Ebene, die Interaktion zwischen Lernenden und KI, Zugänglichkeit und kulturelle Passung, Teilnehmende und Setting, menschliche Beteiligung, Design, Ethik, Transparenz und Reproduzierbarkeit bis zu den Grenzen. Die begleitende Ethics and Risk Matrix deckt Risiken für die [[agency|Handlungsfähigkeit]] von Lernenden, für [[equity-in-ai-education|Gerechtigkeit]], für Daten-[[governance]] und für algorithmische Transparenz ab. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah und Gašević (2026)]] bieten eine gestraffte Alternative. TEP-AIED faltet Transparenz, Ethik und Pädagogik in eine interdependente Struktur, liefert eine Leitlinientabelle, die auf sieben Artikelabschnitte abgebildet ist, und bittet Autorinnen und Autoren, im Methodenteil einen Unterabschnitt mit dem Titel „Transparency, Ethics, and Pedagogy Considerations" zu ergänzen. Ihr Grund ist praktisch: RAISE ist umfassend und für den Routinegebrauch in empirischer Forschung zu feingliedrig. Die Offenlegung fällt unter [[ai-use-disclosure]] und ist das, was Aussagen zu [[privacy|Datenschutz]] und [[ethics|Ethik]] überprüfbar macht.

Die pädagogische Begründung steht bei RAISE an erster Stelle, weil KI kein neutrales Werkzeug ist. Der Wert hängt von der Passung zwischen Lernproblem, theoretischer Begründung und der Abbildung von Zielen auf Ergebnismaße ab. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] fand, dass alle bis auf zwei von 14 geprüften Metaanalysen die Behandlung als Werkzeug definierten – ChatGPT oder GenAI oder allgemein „KI". Ein Produktname ist keine [[pedagogy|Pädagogik]]. Die Auseinandersetzung mit ChatGPT als eine gemeinsame Intervention zu behandeln ist vergleichbar damit, die Effekte von „Papier" zu meta-analysieren.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] führen dasselbe Argument für Primärstudien. Bei der Prüfung einer Teilmenge der Vergleiche hinter einer prominenten Metaanalyse fanden sie, dass nur 21% eine klar definierte Behandlung, eine Kontrollgruppe und ein valides Lernmaß aufwiesen. Die berichtete Effektstärke (g = 0.7) lag zudem über der von eigens entwickelten [[intelligent-tutoring|intelligenten Tutorensystemen]] (0.66), und diese Lücke ist ein Warnsignal: Eine Behandlung, die maßgeschneiderten Nachhilfeunterricht schlägt, ist wahrscheinlich ein Bündel verschiedener Dinge unter einem Etikett.

Der Test ist eine einzige Frage: Könnte eine kompetente Leserin oder ein kompetenter Leser Ihre Intervention allein aus dem Methodenteil nachbauen und dasselbe erhalten?

## Entscheiden Sie, was Ihr Messinstrument Sie zu behaupten erlaubt

In O'Neills Evidenzprüfung von 46 zufällig ausgewählten Primärstudien zeigten 28 (61%) Validitätsbedenken. Am häufigsten war eine Fehlpassung der abhängigen Variable (n = 15), gefolgt von einer Fehlpassung der unabhängigen Variable (n = 11), Problemen des Versuchsdesigns (n = 7), Problemen der Datenextraktion (n = 6), dem Fehlen einer Kontrollgruppe (n = 6) und nicht zufälliger Gruppenzuweisung (n = 6). Mehrdimensionale Ergebnisse wurden routinemäßig gepoolt, als seien sie austauschbar, wobei Testergebnisse, Qualität der Hausarbeit, [[motivation]], [[self-efficacy|Selbstwirksamkeit]], Einstellungen und [[student-engagement|Engagement]] zu einer einzigen Zahl für „akademische Leistung" zusammengezogen wurden.

Zwei Berichtsgewohnheiten verhindern das. Sagen Sie, welches Konstrukt das Instrument misst, und dass es für diese Population validiert wurde; [[self-report-measures]] zeigt, wo wahrnehmungsbasierte Maße von tatsächlichem Verhalten abweichen, und [[assessment-validity]] behandelt die Konstruktvalidität. Berichten Sie dann ein Ergebnis, das nicht von der Überzeugung der lernenden Person über die Hilfe abhängt. Unmittelbare Aufgabenleistung unter Assistenz ist kein [[learning-gains|Lernzuwachs]], und [[cognitive-offloading|kognitive Entlastung]] ist der Mechanismus, der beides am plausibelsten trennt. Die [[verification-quality-reliance-calibration-genai-2026|Mini-Review von 2026 über 493 Datensätze und 14 vorrangige Studien]] fand, dass keine Studie den Verifikationserfolg und die anschließende Verlassensentscheidung gemeinsam gegen einen unabhängig entschiedenen Standard der Ausgabequalität gemessen hat, und wenige blickten über die unmittelbare Leistung hinaus auf verzögerte Behaltensleistung oder [[transfer-of-learning|Transfer]].

Nennen Sie die Obergrenze ausdrücklich in der Diskussion. Eine Studie, die ein Quiz mit geöffnetem Werkzeug gemessen hat, kann eine Aussage über unterstützte Leistung stützen. Sie kann keine Aussage darüber stützen, was Studierende gelernt haben, und dieser Satz kostet eine Zeile.

## Berichten Sie die Unsicherheit, die Ihre Analyse tatsächlich hat

Bei Synthesen berichten Sie den Umgang mit abhängigen Effekten, die Varianz zwischen Studien, Prädiktionsintervalle und die Einschätzung von Publikationsbias. I² allein leistet diese Arbeit nicht. O'Neill fand die berichtete Heterogenität überall dort, wo sie angegeben war, als schwerwiegend, von 77.2% bis 94.4% über 13 Metaanalysen, davon 12 über 80%, und nirgends aufgelöst: Keine Moderatoranalyse erreichte die Mindestgröße von zehn Studien pro Subgruppe. Zwölf Metaanalysen behandelten abhängige Effektstärken aus derselben Studie als unabhängig, was die scheinbare Evidenz aufbläht. Nur vier berichteten die Varianz zwischen Studien (τ²) und nur zwei ein Prädiktionsintervall, und beide Intervalle schlossen null ein. Publikationsbias wurde in keinem Fall der Gesamtheit valide eingeschätzt.

Heterogenitätswerte brauchen ihr Modell, denn I² ist präzisionsabhängig. [[limitations-in-aied-research|Limitations in AIEd Research]] dokumentiert eine Synthese mit I² = 82.98% unter einem Fixed-Effect-Modell und 15.75% unter Random Effects. Wer nur die erste Zahl erhält, kann nicht erkennen, wie inkonsistent der Bestand ist. Berichten Sie τ² und ein Prädiktionsintervall daneben, was auch die Konvention ist, die [[meta-analysis-systematic-review|die Review-Literatur]] verlangt.

Diskontieren Sie dann Ihre eigene Schlagzeile. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] poolten 1.840 Effektstärken aus 67 Metaanalysen und fanden, dass der durchschnittliche Effekt nach Modellierung des Publikationsbias auf etwa ein Drittel des veröffentlichten Medians fällt (SMD = 0.196 gegenüber 0.67), mit einem Prädiktionsintervall von -1.521 bis +1.908. Dieses Intervall reicht von erheblichem Schaden bis zu erheblichem Nutzen für eine hypothetische neue Studie. Es ist die nützlichste Zahl des Artikels und die, die am ehesten aus dem Abstract verschwindet.

## Sagen Sie, wie weit die Aussage trägt

Fairness und Reichweite scheitern auf dieselbe Weise: ein großer Effekt, der weniger bedeutet, als er zu bedeuten scheint. Elf der 14 geprüften Metaanalysen setzten keine Populationsgrenze, sodass „Studierende" von Kindern bis zu Medizinstudierenden reichte. Ein einzelner Kurs, eine Institution, eine Disziplin oder ein Land rechtfertigen keine allgemeine Aussage, und Ergebnisse für ein Werkzeug übertragen sich selten auf ein anderes.

Drei Erklärungen decken die meisten großen Effekte ab, und jede ist berichtbar. Neuheit ist eine. Zusätzliche Zeit auf der Aufgabe ist eine weitere. Die dritte ist eine Vergleichsbedingung, die Unterricht nach dem Muster „weiter wie bisher" statt einer aktiven Kontrolle erhielt. Berichten Sie, was die Kontrolle tatsächlich tat, wie viel Zeit jeder Arm aufwendete und wie neu das Werkzeug war. Nennen Sie ebenso die Populationsgrenze, denn Effekte unterscheiden sich zwischen Lernendengruppen, und eine ungenannte Grenze ist das, was eine gepoolte Zahl für alle stehen lässt; [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]] legt die Variation dar.

Behandeln Sie das Werkzeug als bewegliches Ziel. Proprietäre Systeme ändern sich ohne Ankündigung, eine Befundlage ist also an eine Modellversion gebunden, und der [[benchmark|Benchmark]], der in einem Release begeisterte, hält im nächsten vielleicht nicht. Version und Zugriffsdatum gehören aus diesem Grund in den Methodenteil, nicht nur der Reproduzierbarkeit wegen.

## Validieren Sie die automatisierten Urteile

[[ai-ed-evaluation|AIED-Evaluation]] überträgt die Bewertung zunehmend an Modelle, was das Validierungsverfahren zu einem Teil des Ergebnisses statt zu einem Anhang macht. Khan Academys Darstellung der Kennzahlen seines [[intelligent-tutoring|KI-Tutors]] berichtet, dass kognitives Engagement von einem [[llm|LLM]]-Richter bewertet wird, der gegen menschliche pädagogische Expertinnen und Experten bei F1 0.83 kalibriert wurde, und dass die Kennzahlenbewegungen aus mehr als 40 Live-Experimenten in fünf Monaten stammten statt aus Offline-Evaluation ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] zeigen, dass die Uneinigkeit zwischen Mensch und Maschine über die Qualität von [[formative-assessment|Pretest-Fragen]] systematisch und nicht zufällig ist, und dass die Operationalisierung der Rubrik mehr zählt als ein Prompt, der mit der Begründung beginnt.

Übereinstimmung mit menschlichen Kodierenden ist etwas anderes als Qualität, und sie so zu berichten, als sei sie Qualität, ist ein Ziel für Gutachtende. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] ließen eine unabhängige Expertin oder einen unabhängigen Experten 855 paarweise Kodiersätze blind gegenüber der Quelle beurteilen. Die Übereinstimmung zwischen Mensch und LLM lag bei einem mittleren Jaccard von 0.30 gegenüber 0.52 bei der Übereinstimmung zwischen Menschen, während die blinde Prüfinstanz menschliche und maschinelle Kodierung mit ununterscheidbaren Raten bevorzugte (51.5% gegenüber 48.5%, p = 0.537). Berichten Sie das Kalibrierungsziel, den Goldstandard und wer die Uneinigkeit entschieden hat. Diese drei Angaben sind es, die eine Leserin oder einen Leser entscheiden lassen, wie viel Gewicht die automatisierte Bewertung tragen kann.

## Legen Sie die Kosten und Ihre eigene Nutzung offen

Eine Durchsicht aller Konferenzbeiträge der AIED 2025 fand ein Muster der LLM-Nutzung ohne Offenlegung: Die meisten Projekte verwendeten LLMs, und weniger als eine Handvoll berichteten Ressourcenverbrauch oder CO₂-Fußabdruck. Dieser Beitrag liefert eine Open-Source-Methode mit Messwerkzeugen für lokale und Cloud-Hardware sowie eine Formel zur Schätzung des Rechenaufwands von Frontier-Modellen, deren Parameterzahlen nicht offengelegt sind. Sein Argument ist, dass die fehlende Berichterstattung dieser Kosten selbst ein ethisches Problem ist. Datengovernance, Einwilligung, Zugänglichkeit und kulturelle Passung gehören in denselben Absatz (RAISE-Punkte; [[universal-design-for-learning]], [[accessibility|Barrierefreiheit]]). [[equity-ethics-pedagogical-safety-research]] enthält die ausführlichere Behandlung.

Ihre eigene KI-Nutzung im Forschungsprozess braucht dieselbe Offenlegung. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta und Lins PRISMA-LLM-Analyse]] von 888 Arbeiten zur Review-Automatisierung zeigt, wie ungleich diese Berichterstattung ist. Seit 2023 berichteten 38.0% der Software- und Produktarbeiten überhaupt keine Evaluation, gegenüber 9.3% der LLM-Arbeiten. Die mittlere Berichtsreichhaltigkeit lag bei 6.3 für LLM-Arbeiten und 3.3 für Software- und Produktarbeiten. 84.1% der LLM-Nutzung stützte sich auf proprietäre oder gehostete Systeme, nur 4.9% auf offene Gewichte. Ihr Framework trennt die Offenlegung der Implementierung von der folgenbewussten Evaluation über fünf Offenlegungsstufen, was eine brauchbare Vorlage dafür ist, zu beschreiben, was ein Werkzeug innerhalb eines Reviews getan hat.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai und Chan (2026)]] ergänzen das Bild von der Autorinnenseite. Von 28 Nachwuchsforschenden nutzten 27 GenAI für Ideenfindung, Literaturreview, Erklärung, Datenverarbeitung, Programmierung, [[writing-education|akademisches Schreiben]], Redaktion und Übersetzung. Sie kalibrierten die Nutzung an der Höhe des Einsatzes und an disziplinären Normen. Die Richtlinien ihrer Institutionen betrafen Lehre und Prüfung statt Forschungspraxis, was die Berichtsentscheidung bei der Autorin oder dem Autor lässt.

## Veröffentlichen Sie den Nullbefund, und prüfen Sie jede Quellenangabe

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verifizierten 30 erfundene Referenzen in 14 Arbeiten, wobei die Zahl bei einem technischen Symposium von 3 im Jahr 2025 auf 17 im Jahr 2026 stieg, also 2.3% der Beiträge dieses Jahres. LLM-gestütztes Schreiben macht eine plausibel erfundene Quellenangabe billig zu erzeugen, weshalb die Prüfung vor der Einreichung geschehen muss und nicht nach der Annahme.

Die Gegengewichte in dieser Prüfung zählen, wenn Sie sie zitieren. Die meisten markierten Referenzen waren harmlos: 229 waren ACM-Metadatenfehlpaarungen, bei denen das PDF korrekt war, und 188 waren gültige bibliografische Varianten. Die Zahl der Erfindungen ist bewusst eine Untergrenze, und die harmlose Mehrheit ist kein Rundungsfehler. Prüfen Sie jeden Eintrag, den Sie nicht selbst nachsehen können.

Null- und Negativbefunde zu berichten ist die andere Hälfte einer ehrlichen Evidenzbasis. Bartoš et al. fanden starke Hinweise auf unterdrückte Nullbefunde (jeder Egger-Test p < .0001) und extreme Heterogenität (τ = 0.869), wobei keine Subgruppe nach Ergebnis, Feld, Stufe oder KI-Rolle konsistente Gewinne zeigte. Sie fanden auch keinen Unterschied zwischen Studien, die vor und nach Januar 2023 veröffentlicht wurden, was die Behauptung untergräbt, moderne generative Werkzeuge erzeugten spezifisch Gewinne.

## Was Forschende dabei falsch machen

**„Eine Effektstärke ist eine Eigenschaft der Modalität."** Es gibt keinen Effekt von KI in der Bildung, über den zu berichten wäre. Alle bis auf zwei der geprüften Metaanalysen definierten die Behandlung als Werkzeugnamen, nur 21% der geprüften Vergleiche hatten eine definierte Behandlung, eine Kontrolle und ein valides Maß, und das gepoolte g = 0.7 lag über eigens entwickelter intelligenter Nachhilfe bei 0.66. Eine Effektstärke gehört zu einem Design, einer Population und einem Messzeitpunkt.

**„Der gepoolte Mittelwert ist das, was mit meinen Studierenden geschehen wird."** Der Mittelwert beschreibt die Gesamtheit der Studien, und nichts darin legt einen einzelnen Kursraum fest. Der bias-korrigierte Durchschnitt ist SMD = 0.196, und sein Prädiktionsintervall reicht von -1.521 bis +1.908. Die berichtete Heterogenität liegt in 12 von 13 Metaanalysen über 80%, und keine Subgruppe im größeren Pool zeigte konsistente Gewinne. Eine Veränderung auf Ebene einzelner Studierender ist aus keiner der beiden Zahlen identifizierbar.

**„Ein Nullbefund bedeutet, dass das Werkzeug nicht funktioniert."** Ein Nullbefund ist eine Aussage über ein Design bei einer gegebenen Präzision, und die Abwesenheit eines nachweisbaren Effekts in einer Studie ist eine Tatsache über diese Studie. Der bias-korrigierte SMD = 0.196 stammt aus einer Literatur, in der jeder Egger-Test signifikant war, die verteidigbare Lesart des Bestands ist also ein kleiner und unsicherer Durchschnitt. Auch keine Subgruppe nach Ergebnis, Feld, Stufe oder KI-Rolle im größeren Pool zeigte konsistente Gewinne. Das dokumentierte Problem dieser Literatur ist die Unterdrückung.

**„Eine Studie entscheidet das."** Die Basisraten sprechen dagegen. 61% der geprüften Primärstudien hatten Validitätsbedenken, ein Kurs oder eine Institution rechtfertigen keine allgemeine Aussage, und ein proprietäres System ist ein bewegliches Ziel, gebunden an eine Modellversion. Eine einzelne Studie ist ein Datenpunkt mit angehängtem Design.

**„Hohe Übereinstimmung mit menschlichen Kodierenden heißt, dass das Modell das Richtige bewertet."** Die Übereinstimmung zwischen Mensch und LLM lag bei 0.30 gegenüber 0.52 zwischen Menschen, und die blinde Prüfinstanz konnte die beiden Kodiersätze bei 51.5% gegenüber 48.5% nicht unterscheiden. Übereinstimmung misst Konsistenz mit einer kodierenden Person, und Qualität ist eine separate Frage, die einen Goldstandard und eine entscheidende Instanz braucht.

## Die Einwände, die Sie hören werden

**„Gutachtende wollen Neuheit, nicht Methodendetail."** Die Zeitschriften bewegen sich in die andere Richtung. RAISE und TEP-AIED geben Herausgeberinnen und Herausgebern ein Konstrukt an die Hand, das sie verlangen können, und der Methoden-Unterabschnitt von TEP-AIED ist ein Einstieg mit geringer Hürde. Methodendetail ist das, was eine nicht beurteilbare Arbeit in eine zitierbare verwandelt.

**„Wir haben keinen Platz dafür."** Die fünf Offenlegungsstufen sind Berichtsebenen und keine Risikostufen, die Evaluationstiefe kann also ein oder zwei Sätze betragen. Version, Prompts und Rolle passen in einen kurzen Absatz. Kosten und Governance passen in einen Satz zu den Grenzen.

**„Alle berichten es so."** Die Zahlen sagen, dass die Norm das Problem ist: 61% der geprüften Primärstudien mit Validitätsbedenken, 12 von 13 Metaanalysen über 80% Heterogenität, 38.0% der Software- und Produktarbeiten ohne Evaluation.

**„Unser Werkzeug ist proprietär, wir können das Modell also nicht berichten."** Berichten Sie Version, Zugriffsdatum, Konfiguration, die von Ihnen gelieferten Prompts, Rolle und Leitplanken. Wenn der Anbieter es nicht sagen will, gehört diese Einschränkung als Grenze der Aussage in die Limitationen.

**„Nullbefunde zu berichten wird uns schaden."** Unterdrückte Nullbefunde sind der dokumentierte Mechanismus hinter dem bias-korrigierten Durchschnitt von SMD = 0.196. Sie zu veröffentlichen ist das, was Ihr positives Ergebnis lesbar hält.

## Was Sie diese Woche tun können

**1.** Lesen Sie Ihr Abstract gegen Ihren Methodenteil und streichen Sie jede Behauptung, die die Methode nicht stützen kann. Ein Satz zur Obergrenze des Maßes reicht meist.

**2.** Ergänzen Sie den Absatz zur Spezifikation: Modell, Version, Zugriffsdatum, Konfiguration, Prompts, Rolle und wer die Ausgabe gestaltet oder geprüft hat.

**3.** Holen Sie τ², das Prädiktionsintervall und die Einschätzung des Publikationsbias aus dem Anhang in die Ergebnisse, oder sagen Sie klar, dass Sie sie nicht berechnet haben.

**4.** Schreiben Sie die Populationsgrenze und die Kontrollbedingung in die Designbeschreibung, einschließlich der Zeit, die jeder Arm aufgewendet hat.

**5.** Prüfen Sie jede Referenz, die Sie nicht selbst gelesen haben, und sehen Sie zuerst das Autorenfeld an.

## Wohin als Nächstes

[[research-methods-aied|Research Methods in AI in Education]] behandelt die Designentscheidungen unterhalb dieser Berichtsentscheidungen, und [[limitations-in-aied-research|Limitations in AIEd Research]] ist der Katalog der Fehlermodi mit den zugehörigen Zahlen. [[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]] ist die Leserseite desselben Problems, [[does-ai-help-students-learn|die Evidenz zu dauerhaftem Lernen]] ist das, was die meisten dieser Maße zu erreichen versuchen, [[evaluating-ai-interventions-methods]] behandelt die Maße und Vergleichsdesigns, und [[checking-whether-educational-ai-works]] ist die kürzere Fassung der Frage. Zu den Lücken, die diese Literatur nicht gefüllt hat, siehe [[research-gaps-aied]].
