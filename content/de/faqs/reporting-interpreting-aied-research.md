---
title: "Was sind Best Practices für das Berichten und Deuten von Forschung zu KI in der Bildung?"
created: "2026-09-16T15:05:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
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
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

# Was sind Best Practices für das Berichten und Deuten von Forschung zu KI in der Bildung?

Sie schreiben eine Studie zu KI in der Bildung auf, deren Behauptung ihrem Design bereits vorausläuft, oder Sie begutachten eine und entscheiden, ob die Schlagzeilenzahl irgendetwas bedeutet. So oder so entscheiden dieselben sechs Auslassungen: welches KI-System tatsächlich genutzt wurde, was es zu tun konfiguriert war, welche pädagogische Rolle es spielte, ob Menschen ihre Ausgabe designten oder prüften, was das Ergebnismaß wirklich erfasste, und was die Autoren gegen Bias, Kosten und Grenzen taten. Eine Autorin oder ein Autor, die sie auslässt, reicht eine Studie ein, die nicht bewertet werden kann; eine Gutachterin oder ein Gutachter, die nicht nach ihnen suchen, kann eine designte Intervention nicht von einer recycelten Werkzeugdemonstration unterscheiden. „Nicht bewertbar" –, nicht „gestützt" und nicht „widerlegt" –, ist das ehrliche Urteil, wenn sie fehlen.

Der Einsatz ist nicht hypothetisch. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] prüfte 14 peer-reviewte Meta-Analysen, die behaupten, KI verbessere Bildung, und fand, dass *keine* eine valide Grundlage für die Behauptungen bot, die sie vortrug. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] poolten 1.840 Effektstärken aus 67 Meta-Analysen und fanden, dass, sobald Publikationsbias modelliert wird, der Durchschnittseffekt auf etwa **ein Drittel** des veröffentlichten Medians fällt (SMD = 0.196 gegenüber 0.67). [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verifizierten **30 erfundene Referenzen über 14 Informatikbildungspapiere**, alle in 2025 oder 2026 veröffentlicht –, ein Defekt, der Leserinnen und Leser genau deshalb erreicht, weil Gutachtende nicht jeden Eintrag in einer Referenzliste verifizieren können. Berichtsdisziplin entscheidet, ob die Belegbasis des Felds überhaupt brauchbar ist. Für die Designwahlen darunter siehe [[research-methods-aied|Forschungsmethoden in AIED]]; für den Katalog der Fehlermodi [[limitations-in-aied-research|Grenzen in der AIED-Forschung]]. Für die Seite der Leserin oder des Lesers – was eine Praktikerin oder ein Praktiker mit einem Papier tut, sobald es existiert –, siehe [[interpreting-and-applying-aied-research|Deuten und Anwenden von AIED-Forschung]].

## Die kurze Version

Sechs Schritte entscheiden, ob Ihre Behauptung die Begutachtung überlebt:

1. **Beschreiben Sie das KI-System als Behandlung, nicht als Anbieter.** Modell, Version, Konfiguration, Prompts, Rolle, und ob Menschen die Ausgabe designten oder prüften.
2. **Benennen Sie die pädagogische Begründung und den aktiven Vergleich.** Ein Produktname ist keine Methode; Business-as-usual ist keine faire Kontrolle.
3. **Lassen Sie das Maß zur Behauptung passen.** Was das Instrument erfasst, seine Validierung für diese Population, und ob das Ergebnis verzögert und unbegleitet war.
4. **Validieren Sie jedes automatisierte Urteil.** Benennen Sie die Grundwahrheit, das Kalibrierungsziel und wer die Uneinigkeit adjudizierte.
5. **Berichten Sie die Unsicherheit der Analyse, nicht nur ihre Punktschätzung** – abhängige Effekte, τ², Prognoseintervalle, Teilgruppengrößen, Publikationsbiasbewertung.
6. **Berichten Sie die Gegengewichte**: Ethik- und Governance-Verfahren, Rechen- und Umweltkosten, Ihre eigene KI-Nutzung, Nullergebnisse, und nur Zitationen, die Sie verifiziert haben.

## Entscheiden Sie, was Sie über das KI-System sagen werden –, und schreiben Sie es so, dass jemand es nachbauen könnte

Das ist die Prüfung, die die meisten Einreichungen scheitern. Das RAISE-Framework (*Reporting AI Studies in Education*, Allison 2026) ist eine 30-Item-Checkliste über zehn thematische Domänen, und seine diagnostische Behauptung ist spezifisch statt rhetorisch: Einreichungen lassen routiniert aus, welches Modell genutzt wurde (GPT-4, Claude oder ein maßgeschneiderter Algorithmus), wie es konfiguriert war (Prompts, Feinabstimmungsparameter), welche Rolle es spielte (Feedbackgenerator, Koautor, Tutor, Bewerter), und ob menschliche Akteure seine Ausgaben designten oder prüften. Das lässt Gutachtende mit vier unbeantwortbaren Fragen zurück – „Was genau tat die KI?", „War sie nötig?", „Ist das replizierbar?" und „Sind die Lernbehauptungen glaubwürdig?"

Es läuft von bildungswirksamer Begründung über API-Niveau-Spezifikation, Lernenden-KI-Interaktion, Barrierefreiheit und kulturelle Passung, Teilnehmende und Setting, menschliche Beteiligung, Design, Ethik, Transparenz und Reproduzierbarkeit, bis zu Grenzen. Seine Begleit-**Ethik- und Risikomatrix** deckt Risiken für [[agency|Handlungsfähigkeit der lernenden Person]], [[equity-in-ai-education|Gerechtigkeit]], Daten-[[governance]] und algorithmische Transparenz ab. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah und Gašević (2026)]] bieten eine gestraffte Alternative, TEP-AIED, die Transparenz, Ethik und Pädagogik in eine voneinander abhängige Struktur faltet, eine Leitlinientabelle liefert, die auf sieben Papiersektionen abgebildet ist, und Autoren bittet, einen Methoden-Unterabschnitt mit dem Titel „Transparency, Ethics, and Pedagogy Considerations" hinzuzufügen –, weil RAISE, nach ihrer Darstellung, umfassend, aber für routinemäßigen empirischen Gebrauch zu granulat sei. Die Offenlegung sitzt unter [[ai-use-disclosure]] und ist das, was [[privacy]]- und [[ethics]]-Behauptungen prüfbar macht.

## Entscheiden Sie, ob Ihre Behandlung eine Methode oder ein Produkt ist

Bildungswirksame Begründung ist RAISEs erste Domäne, weil KI kein neutrales Werkzeug ist: Wert hängt von der Abstimmung zwischen dem Lernproblem, einer theoretischen Begründung, und der Abbildung von Zielen auf Ergebnismaße ab. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] fand, dass alle bis auf zwei der geprüften Meta-Analysen die Behandlung als Werkzeug definierten – ChatGPT, GenAI, „KI" –, und dass ein Produktname keine [[pedagogy]] ist; die Exposition gegenüber ChatGPT als eine gemeinsame Intervention zu behandeln ist vergleichbar damit, die Effekte von „Papier" zu meta-analysieren. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] machen dasselbe Argument für Primärstudien: einen Teil der Vergleiche hinter einer prominenten Meta-Analyse prüfend, fanden sie nur **21% mit einer gut definierten Behandlung, einer Kontrollgruppe und einem validen Lernmaß**, und die berichtete Effektstärke (g = 0.7) übertraf jene zweckgebauter [[intelligent-tutoring|Intelligent Tutoring Systems]] (0.66) –, ein rotes Signal, dass die „Behandlung" eine heterogene geheime Soße statt eine benannte Methode war.

Der Test: könnte eine kompetente Leserin oder ein kompetenter Leser Ihre Intervention aus dem Methodenabschnitt allein nachbauen und dasselbe bekommen?

## Entscheiden Sie, was Ihr Instrument misst und was die Behauptung deshalb sagen darf

In O'Neills Belegprüfung von 46 zufällig ausgewählten Primärstudien hatten **28 (61%) Validitätsbedenken**, und Nichtübereinstimmung der abhängigen Variable war die häufigste (n = 15), gefolgt von Nichtübereinstimmung der unabhängigen Variable (n = 11), Problemen des experimentellen Designs (n = 7), Datenextraktionsproblemen (n = 6), Fehlen einer Kontrollgruppe (n = 6) und nichtzufälliger Gruppenzuweisung (n = 6). Multidimensionale Ergebnisse wurden routiniert gepoolt, als seien sie austauschbar – Testpunktzahlen, Hausaufgabenqualität, [[motivation]], [[self-efficacy]], Einstellungen und [[student-engagement|Engagement]] zusammengefallen in eine einzige „akademische Leistungs"-Zahl.

Zwei Berichtsgewohnheiten verhindern das. Benennen Sie, welches Konstrukt das Instrument misst, und dass es für jene Population validiert wurde: siehe [[self-report-measures]] dafür, wo wahrnehmungsbasierte Maße von Verhalten divergieren, und [[assessment-validity]] zu Konstruktvalidität. Berichten Sie dann ein Ergebnis, das nicht vom Glauben der lernenden Person über die Hilfe abhängt, denn unmittelbare Aufgabenleistung unter Unterstützung ist kein [[learning-gains|Lerngewinn]]: [[verification-quality-reliance-calibration-genai-2026|ein Mini-Review aus dem Jahr 2026 mit 493 Datensätzen und 14 prioritären Studien]] fand, dass keine den Verifikationserfolg und die folgende Abhängigkeitsentscheidung zusammen gegen einen unabhängig adjudizierten Standard der Ausgabequalität maß, und wenige über unmittelbare Leistung hinaus auf verzögertes Behalten oder Transfer schauten. [[does-ai-help-students-learn|Die Belege für dauerhaftes Lernen]] bleiben gemischt, und [[cognitive-offloading|kognitive Auslagerung]] ist der Mechanismus, der die zwei am plausibelsten trennt.

## Entscheiden Sie, wie Ihre automatisierten Urteile validiert wurden

[[ai-ed-evaluation|AIED-Evaluation]] delegiert zunehmend Bewertung an Modelle, was das Validierungsverfahren zum Teil des Ergebnisses macht statt zum Anhang. Khan Academys Bericht über ihre [[intelligent-tutoring|KI-Tutor]]-Maße berichtet, dass kognitives Engagement von einem [[llm]]-Judge bewertet wird, der gegen menschliche pädagogische Experten bei F1 0.83 kalibriert ist, und dass Maßbewegungen von mehr als 40 Live-Experimenten in fünf Monaten kamen statt von Offline-Evaluation ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] zeigen, dass Mensch-Maschine-Uneinigkeit über die Qualität von [[formative-assessment|Pretest]]-Fragen systematisch statt zufällig ist, und dass Rubrikoperationalisierung mehr zählt als Begründung-zuerst-Prompting.

Übereinstimmung mit menschlichen Kodierern ist nicht Qualität, und sie als solche zu berichten ist ein Ziel für Gutachtende. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] ließen einen unabhängigen Experten 855 paarweise Codesätze blind gegenüber der Quelle beurteilen und fanden Mensch-LLM-Übereinstimmung (mittlere Jaccard 0.30) weit unter Mensch-Mensch-Übereinstimmung (0.52), während der blinde Verifizierer menschliche und maschinelle Kodierung mit nicht unterscheidbaren Raten bevorzugte (51.5% vs 48.5%, p = 0.537). Berichten Sie das Kalibrierungsziel, die Grundwahrheit, und wer sie adjudizierte.

## Entscheiden Sie, ob der Vergleich fair ist und wie weit die Behauptung reist

Fairness und Umfang scheitern auf dieselbe Weise: ein großer Effekt, der weniger bedeutet, als er scheint. 11 der 14 geprüften Meta-Analysen setzten keine Populationsgrenze, also reichten „Studierende" von Kindern bis zu Medizin-Auszubildenden; ein einzelner Kurs, eine einzelne Institution, Disziplin oder ein einzelnes Land lizenzieren keine allgemeine Behauptung, und Ergebnisse für ein Werkzeug übertragen sich selten auf ein anderes. Neuheitseffekte, zusätzliche Zeit am Task, und eine Vergleichsbedingung, die Business-as-usual-Unterricht statt einer aktiven Kontrolle erhielt, sind die üblichen Erklärungen für einen großen Effekt –, berichten Sie also, was die Kontrolle tatsächlich tat, wie viel Zeit jeder Arm verbrachte, und wie neu das Werkzeug war. Benennen Sie auch die Populationsgrenze, denn Effekte unterscheiden sich über Lernendengruppen, und eine unbenannte Grenze ist das, was eine einzige gepoolte Zahl für alle einspringen lässt (siehe [[differential-effects-across-learner-groups|Unterschiedliche Effekte über Lernendengruppen hinweg]]). Behandeln Sie das Werkzeug auch als bewegliches Ziel: proprietäre Systeme verändern sich ohne Ankündigung, also ist ein Befund an eine Modellversion gebunden, und der [[benchmark]], der in einer Veröffentlichung begeisterte, hält in der nächsten möglicherweise nicht.

## Entscheiden Sie, was Ihre Analyse stützen kann –, und berichten Sie ihre Unsicherheit, nicht nur ihre Schlagzeile

Für Synthesen berichten Sie Behandlung abhängiger Effekte, Zwischenstudienvarianz, Prognoseintervalle und Publikationsbiasbewertung, nicht nur I². O'Neill fand, dass berichtete Heterogenität schwer war, wo auch immer sie gegeben wurde (I² von 77.2% bis 94.4% über 13 Meta-Analysen, 12 davon über 80%) und nie aufgelöst wurde (keine Moderatoranalyse erfüllte die minimale Teilgruppengröße von zehn Studien), dass 12 Meta-Analysen abhängige Effektstärken aus derselben Studie als unabhängig behandelten –, was scheinbare Belege aufblähte –, und dass nur vier Zwischenstudienvarianz (τ²) und nur zwei ein Prognoseintervall berichteten, die beide Null einschlossen. Publikationsbias wurde nirgends valide bewertet.

Weil I² präzisionsabhängig ist, muss eine Heterogenitätszahl mit ihrem Modell reisen: [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] dokumentiert eine Synthese, deren Heterogenität I² = 82.98% unter einem Fixed-Effekt-Modell ist und 15.75% unter zufälligen Effekten, also kann eine Leserin oder ein Leser, der nur die erste Zahl bekommt, nicht sagen, wie inkonsistent das Korpus ist. Berichten Sie τ² und ein Prognoseintervall daneben; siehe [[meta-analysis-systematic-review|Meta-Analyse und systematischer Review]] für die Review-seitigen Konventionen, und diskontieren Sie die Schlagzeile entsprechend – Bartoš et al.s bias-bereinigter Durchschnitt war SMD = 0.196 mit einem Prognoseintervall von −1.521 bis +1.908, das erheblichen Schaden bis erheblichen Nutzen für eine hypothetische neue Studie umspannt.

## Entscheiden Sie, was Sie über Ethik, Kosten, Governance offenlegen –, und über Ihre eigene KI-Nutzung

Ein Review aller AIED-2025-Konferenzpapiere fand ein „LLM-Annahme ohne Offenlegung"-Muster: die meisten Projekte nutzten LLMs, aber weniger als eine Handvoll berichteten Ressourcenverbrauch oder CO2-Fußabdruck. Jenes Papier liefert eine Open-Source-Methode mit Messwerkzeugen für lokale und Cloud-Hardware plus eine Formel zur Schätzung der Rechenkosten von Frontier-Modellen, deren Parameterzahlen nicht offengelegt sind, und argumentiert, dass diese Kosten nicht zu berichten selbst ein ethisches Anliegen ist. Fügen Sie Daten-Governance, Einverständnis und Barrierefreiheit/kulturelle Passung hinzu (RAISE-Items; [[universal-design-for-learning]], [[accessibility]]) –, siehe [[equity-ethics-pedagogical-safety-research]] für die vollständigere Behandlung dieser Verpflichtungen.

Ihre eigene KI-Nutzung im Forschungsprozess braucht dieselbe Offenlegung. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta und Lins PRISMA-LLM-Analyse]] von 888 Review-Automatisierungspapieren zeigt, wie ungleichmäßig dieses Berichten ist: seit 2023 berichteten **38.0% der Software-/Produktpapiere überhaupt keine Evaluation** (gegenüber 9.3% der LLM-Papiere), mittlere Berichtsfülle war 6.3 für LLM-Papiere gegenüber 3.3 für Software-/Produktpapiere, und 84.1% der LLM-Nutzung stützten sich auf proprietäre oder gehostete Systeme mit nur 4.9% Open-Weight. Ihr Framework trennt Implementierungsoffenlegung von folgensensitiver Evaluation über fünf Offenlegungsstufen –, eine brauchbare Vorlage, um zu beschreiben, was ein Werkzeug in einem Review tat. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai und Chan (2026)]] fügen das Bild von der Autorenseite hinzu: 27 von 28 Graduierten in der Forschung nutzten GenAI über Ideenfindung, Literaturreview, Erklärung, Datenverarbeitung, Programmierung, [[writing-education|akademisches Schreiben]], Editieren und Übersetzung, wobei sie Nutzung nach Einsatzhöhe und disziplinären Normen kalibrierten, und hielten zugleich fest, dass institutionelle Richtlinien Lehren und Assessment adressieren statt Forschungspraxis.

## Entscheiden Sie, was mit Nullergebnissen und Zitationen zu tun ist

Denny et al. verifizierten 30 erfundene Referenzen über 14 Papiere, wobei die verifizierte Zahl auf einem technischen Symposium von 3 in 2025 auf 17 in 2026 stieg (2.3% der Proceedings-Papiere jenes Jahres) –, und LLM-gestütztes Entwerfen macht ein plausibles erfundenes Zitat billig zu erzeugen. Ihre Gegengewichte sind bedeutsam, wenn Sie jene Prüfung zitieren: die meisten markierten Referenzen waren harmlos –, 229 waren ACM-Metadaten-Nichtübereinstimmungen, wo das PDF korrekt war, und 188 waren valide bibliografische Varianten –, also ist die erfundene Zahl eine absichtsvolle untere Grenze und die harmlose Mehrheit ist kein Rundungsfehler. Verifizieren Sie jeden Eintrag, den Sie nicht persönlich prüfen können.

Null- und negative Befunde zu berichten ist die andere Seite derselben Münze. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] fanden starke Belege unterdrückter Nullergebnisse (jeder Egger-Test p < .0001) und extreme Heterogenität (τ = 0.869), ohne dass irgendeine Ergebnis-, Feld-, Niveau- oder KI-Rollen-Teilgruppe konsistente Gewinne zeigte. Sie fanden außerdem keinen Unterschied zwischen Studien, die vor und nach Januar 2023 veröffentlicht wurden, was die Behauptung untergräbt, dass moderne generative Werkzeuge spezifisch Gewinne erzeugen.

## Die dokumentierten Schwächen des Felds, in seinen eigenen Zahlen

Die Basisraten, gegen die eine Behauptung zu gewichten ist:

- **Validität:** 28 von 46 geprüften Primärstudien (61%) hatten Validitätsbedenken; nur 21% der geprüften Vergleiche hatten eine gut definierte Behandlung, Kontrollgruppe und valides Maß.
- **Unaufgelöste Heterogenität:** I² von 77.2% bis 94.4% über 13 Meta-Analysen, 12 über 80%, keine Moderatoranalyse, die das Zehn-Studien-Minimum erreichte, abhängige Effekte in 12 als unabhängig behandelt, und nur vier Synthesen gaben τ² an gegenüber nur zwei ein Prognoseintervall.
- **Publikationsbias:** unbewertet über die 14 geprüften Meta-Analysen; jeder Egger-Test im größeren Pool war signifikant (p < .0001), mit τ = 0.869.
- **Referenzen:** 30 Erfindungen über 14 Papiere, 17 auf einem 2026er-Symposium –, 2.3% der Proceedings jenes Jahres.

## Die Einwände, die Sie hören werden

**„Gutachtende wollen Neuheit, kein Methodendetail."** Zeitschriften bewegen sich in die andere Richtung: RAISE und TEP-AIED geben Herausgebern ein Konstrukt, das zu verlangen ist, und TEP-AIEDs Methoden-Unterabschnitt ist ein reibungsarmer Einstiegspunkt. Methodendetail ist das, was ein nicht bewertbares Papier in ein zitierbares verwandelt.

**„Wir haben den Platz nicht."** Die fünf Offenlegungsstufen sind Berichtsniveaus statt Risikoniveaus, also kann die Evaluationstiefe der Pipeline ein oder zwei Sätze sein. Version, Prompts und Rolle passen in einen kurzen Absatz; Kosten und Governance passen in einen Grenzen-Satz.

**„Alle berichten es so."** Das ist der Befund, keine Verteidigung –, 61% der geprüften Primärstudien mit Validitätsbedenken, 12 von 13 Meta-Analysen über 80% Heterogenität, 38.0% der Software-/Produktpapiere ohne Evaluation. Die Norm ist der Defekt.

**„Unser Werkzeug ist proprietär, also können wir das Modell nicht berichten."** Berichten Sie Version, Zugriffsdatum, Konfiguration, die von Ihnen gelieferten Prompts, Rolle und Leitplanken. Wenn der Anbieter es nicht sagen wird, gehört jene Randbedingung als Grenze der Behauptung in die Grenzen.

**„Nullen zu berichten wird uns schaden."** Unterdrückte Nullen sind der dokumentierte Mechanismus hinter dem bias-bereinigten Durchschnitt von SMD = 0.196; sie zu veröffentlichen ist das, was Ihr positives Ergebnis lesbar hält.

## Checkliste vor der Einreichung

- **Berichten:** das Modell, die Version, die Konfiguration und die Prompts, und die Rolle der KI im Design. **Prüfen:** könnten Sie die Intervention aus dem Methodenabschnitt allein nachbauen?
- **Berichten:** die pädagogische Begründung und die aktive Vergleichsbedingung. **Prüfen:** ist die Behandlung eine benannte Methode statt ein Produktname?
- **Berichten:** was jedes Maß erfasst, seine Validierung für diese Population, und das verzögerte oder unbegleitete Ergebnis. **Prüfen:** passt die Schlagzeilenbehauptung zur abhängigen Variable?
- **Berichten:** wer automatisierte Urteile adjudizierte, gegen welche Grundwahrheit, mit welcher Übereinstimmung. **Prüfen:** wird Genauigkeit oder Übereinstimmung so genutzt, als sei sie Qualität?
- **Berichten:** Behandlung abhängiger Effekte, τ², Prognoseintervalle, Moderator-Teilgruppengrößen und Publikationsbiasbewertung. **Prüfen:** wird Heterogenität mit ihrem Modell und ihrer Präzision zitiert?
- **Berichten:** menschliche Beteiligung, Daten-Governance, Einverständnis, Barrierefreiheit und kulturelle Passung, plus Rechen- und Umweltkosten. **Prüfen:** sind Ethikbehauptungen durch beschriebenes Verfahren gestützt statt durch behauptete Prinzipien?
- **Berichten:** KI-Nutzung innerhalb des Forschungsprozesses, über alle fünf Offenlegungsschichten. **Prüfen:** wurde die Begutachtungs- oder Analysepipeline überhaupt evaluiert?
- **Berichten:** Null-, negative und widerlegende Ergebnisse neben positiven. **Prüfen:** ist die Effektstärke für wahrscheinlichen Publikationsbias diskontiert?

## Was den Standard tatsächlich heben würde

Die Gegenmittel in dieser Literatur sind institutionell statt individuell. O'Neill empfiehlt verpflichtende Datentransparenz für Meta-Analysen – vollständige Effektstärketabellen, Abhängigkeitsstrukturen, τ² und Prognoseintervalle –, plus stärkeres Gatekeeping durch Gutachtende und Herausgeber und eine funktionierende Rücknahmepraxis, in dem Argument, dass diese Fehler Produkte gescheiterter Kontrolle sind statt isolierter Fehler. PRISMA-LLM schlägt fünf Offenlegungsstufen als Berichtsniveaus statt als Risikoniveaus vor, damit die Evaluationstiefe einer Review-Pipeline offen benannt wird; RAISE und TEP-AIED geben Zeitschriften ein Konstrukt, das in Einreichungen zu verlangen ist. Für verwandtes Terrain siehe [[research-gaps-aied|bemerkenswerte Lücken in der Forschungsliteratur]], [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] und [[evaluating-ai-interventions-methods|Maße und Methoden zur Evaluation KI-bezogener Interventionen]]. Ein kostengünstiges Gegenmittel liegt bei Autoren: jede Artikelseite in dieser Wissensbasis paart jetzt eine Studie mit einem Abschnitt **Was das für die Praxis bedeutet** und meist einem Abschnitt **Grenzen**, also das Papier so zu schreiben, dass beide ehrlich gefüllt werden können –, die Handlung, die eine Praktikerin oder ein Praktiker unternehmen könnte, und die Randbedingung dafür –, ist eine Berichtsgewohnheit ebenso sehr wie eine Schreibgewohnheit (siehe [[interpreting-and-applying-aied-research|Deuten und Anwenden von AIED-Forschung]]).
