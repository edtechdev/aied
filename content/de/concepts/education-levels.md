---
title: "Bildungsstufen"
created: "2026-09-20T13:08:39-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education, teacher education]
confidence: medium
translation_of: concepts/education-levels
source_updated: "2026-09-28T21:44:10-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Bildungsstufen** – die Bänder, die das `level`-Metadatenfeld dieser Wissensbasis organisieren: **preschool**, **primary education**, **middle school**, **secondary**, **K-12**, **higher ed**, **undergraduate**, **graduate**, **adult learning**, **special education** und **[[teacher-role|teacher]] education**. Diese Seite ist das Dach für dieses Feld statt eine Duplikatin irgendeiner einzelnen Bandseite: Sie erklärt, was sich verändert, wenn man über die Bänder wechselt, warum der Bruch zwischen Schule und Universität mehr zählt als das unterrichtete Fach, und wo die KI-Evidenz dicht ist und wo sie dünn.

## Fragen zum Nachdenken

- Ein Doktorandenseminar und eine Mathematikstunde in der zweiten Klasse sind beide „Bildung“, doch ein Werkzeug, das der einen hilft, kann der anderen schaden. Was am Band – nicht am Fach – verändert, wie gute KI-Nutzung aussieht?
- Eine Studie mit 132 Zweitklässlerinnen und Zweitklässlern fand einen adaptiven Mathematiktutor nicht besser als eine feste Sequenz. Würden Sie bei einer Universitätsstudierenden dasselbe Nullergebnis erwarten, und welche Lernendenkapazität setzt Adaptation stillschweigend voraus?
- „K-12“ und „higher education“ komprimieren jeweils mehrere klar unterscheidbare Settings unter einem Label. Welche Vergleiche verbergen diese Labels?
- Wenn die Evidenzbasis eines Bandes dünn ist: Ist die ehrliche Antwort, nichts zu sagen, von einem benachbarten Band zu borgen, oder eine Studie zu entwerfen?

## Einführung

Das `level`-Metadatenfeld benennt das Bildungsband, um das es in einer Quelle geht – Bänder, nicht Altersgruppen: **preschool**, **primary education**, **middle school**, **secondary**, **K-12**, **higher ed**, **undergraduate**, **graduate**, **adult learning**, **special education**, **teacher education**. Einige benennen eine Stufe der Beschulung, zwei benennen die sehr verschiedenen Hälften des Universitätsstudiums, zwei benennen eine [[learners|Lernendenpopulation]] statt einer Stufe, und eines benennt die Menschen, die lehren. Eine Quelle kann mehrere Bänder gleichzeitig tragen.

Diese Seite ist das Dach für dieses Feld; die Bandseiten leisten die tiefe Arbeit und sollten mit ihr gelesen werden: [[k-12]], [[early-childhood-elementary-ai-education]], [[higher-ed]], [[adult-learning]], [[special-education]], [[teacher-education]] und [[vocational-education]].

## Was ein Band vom anderen unterscheidet

Bänder unterscheiden sich gleichzeitig entlang mehrerer Achsen, und KI-Forschung variiert davon meist nur eine.

- **Kapazität zur Selbstregulation.** Zwei Versionen desselben Mathematiktutors für die zweite Klasse – identische Inhalte, Interface, Feedback und gesprochene Hinweise, sich nur darin unterscheidend, ob die Aufgabenauswahl einer [[knowledge-tracing|Bayesian Knowledge Tracing]]-Meisterschaftsschätzung folgte –, erzeugten unter 132 Siebenjährigen keinen Posttest-Unterschied (F(1, 124) = 0,32, p = 0,574). Die erste Erklärung der Autoren ist entwicklungsbedingt: [[adaptive-learning|adaptive Systeme]] setzen Lernende voraus, die Feedback aufnehmen können, Anstrengung regulieren und fokussiert bleiben, und junge Kinder haben begrenzte [[self-regulated-learning|Selbstregulation]] ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Wer die Interaktion vermittelt.** In den Schulbändern steht ein Erwachsener zwischen Lernendem und Werkzeug. Eine Befragung von 270 Vorschullehrenden fand die Adoptionsabsicht getrieben von [[technology-acceptance-model|wahrgenommener Nützlichkeit]], einfacher Nutzung, KI-[[self-efficacy]] und [[anxiety-and-stress|KI-Angst]] –, wobei die Studie KI, die an Kinder gerichtet ist, bewusst ausschloss ([[preschool-teachers-ai-behavioral-intention-2026]]).
- **Wozu das Assessment dient.** Sekundarstufen-Assessment speist externe Einsätze; universitäres Assessment ist Kursarbeit und Berechtigungen; Graduierten-Assessment ist das Formen einer Forscherin oder eines Forschers.
- **[[prior-knowledge|Vorwissen]].** Vorwissen dominierte die Posttest-Leistung jener Studie (F(1, 124) = 206,99, p < 0,001, η²p = 0,63), daher korreliert ein Bandlabel mit einem Wissensniveau, ist aber nicht gleich ihm.

## Die Schuljahre und die Universitätsjahre

Der folgenreichste Bruch ist der zwischen Schule und Universität, und die zwei geläufigsten Labels verbergen ihn jeweils oder kreuzen ihn.

Innerhalb der Schuljahre ändert sich das gemessene Ergebnis scharf nach Band. In der Primarstufe ist es Fachlernen: 97 chinesische Drittklässlerinnen und Drittklässler, die [[conversational-ai|GenAI-Chatbots]] in der [[science-education|naturwissenschaftlichen Untersuchung]] nutzten, stellten bessere Fragen als eine Suchmaschinen-Kontrollgruppe (t = 2,47, p = 0,015) ([[dai-chatbots-problem-posing-primary-2026]]). In der Sekundarstufe wird es oft Haltung statt Leistung: Eine Befragung von 508 taiwanesischen Schülerinnen und Schülern der unteren Sekundarstufe fand erfahrungsbezogenen Reiz, der über Freude zur Nutzungsabsicht von [[generative-ai|ChatGPT]] für das Liederlernen wirkt (XM → PEOU β = 0,630; PE → ATU β = 0,369), mit 81,5% auf dem kostenlosen Tarif – eine Zugangs-[[equity-in-ai-education|Gerechtigkeits]]-Tatsache, verkleidet als Technologieakzeptanz-Befund ([[chatgpt-music-education-junior-high-2026]]). Die Sekundarstufe birgt auch die größte Lernwarnung des Korpus: Über 26.811 chinesische Studierende der Klassen 7–12 hinweg stiegen Hausaufgabenscores um 18% und die Bearbeitungszeit fiel um 30%, während die Scores in [[summative-assessment|geschlossenen Prüfungen]] innerhalb von sechs Monaten um etwa 20% fielen, konzentriert bei den etwa 81%, deren Verhalten auf ausgelagerte Hausaufgaben hindeutete ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

Die Universitätsjahre teilen sich erneut. Das Undergraduate-Studium ist Kursarbeit unter externem Urteil: Unter Studierenden im Schreibbereich an einer Minderheiten dienenden R1-Universität sagte [[ai-literacy]] vorher, *welche Art* von [[llm]]-Abhängigkeit ein Studierender einnahm, statt wie viel er oder sie LLMs nutzte ([[llm-reliance-types-undergrad]]). Das Graduiertenstudium ist Forschungstraining, wo sich das Ergebnis von Leistung zu Formung verschiebt. Unter 420 Astronomie-Doktorandinnen, -Doktoranden und Postdocs war KI-Abhängigkeit negativ mit Forschungs[[agency|autonomie]] assoziiert (r = −0,355) und [[self-efficacy|Selbstwirksamkeit]] (r = −0,321), und der indirekte Pfad zu innovativem Verhalten verlief überwiegend über Autonomie (−0,115) statt über Selbstwirksamkeit (−0,069); Betreuungsunterstützung schwächte die negative Verbindung zu Autonomie (B = 0,077, p = 0,020) ([[ai-mediated-research-agency-formation-2026]]). Ein Doktorand oder eine Doktorandin wird nach dem Urteil beurteilt, das KI-Abhängigkeit offenbar erodiert; ein Undergraduate nicht. Beides unter „higher education“ zu fassen, verbirgt das.

## Wo die Evidenz konzentriert ist, und wo sie dünn ist

Das Korpus ist ungleichmäßig besiedelt, und das Level-Feld macht das Ungleichgewicht sichtbar.

**Dicht.** Higher education ist das am stärksten abgedeckte Band: Die hier herangezogenen Seiten umfassen eine achtwöchige Plattformstudie mit 60 Ingenieurstudierenden ([[ai-assisted-seminar-learning-information-literacy-2026]]), eine Befragung von 395 Bildungsmanagern ([[ai-adoption-readiness-ukraine-education-managers-2026]]), eine Meta-Synthese von 18 afrikanischen Hochschulbildungsstudien ([[data-privacy-ai-african-higher-education-2026]]) und eine 420-Forschende-Studie zum Doktorandentraining ([[ai-mediated-research-agency-formation-2026]]). Primar- und Sekundarstufe tragen ebenfalls Ergebnisevidenz.

**Dünn, und stellenweise abwesend.** Die hier herangezogenen Seiten berichten überhaupt keine Studie zu Ergebnissen bei Kindern im Vorschulband; die nächste Evidenz ist eine Befragung von Lehrendenabsichten, die an Kinder gerichtete Werkzeuge ausschloss ([[preschool-teachers-ai-behavioral-intention-2026]]). Middle school erscheint hauptsächlich als *vorgeschlagenes* Design und Längsschnittstudie statt als berichtete Ergebnisse ([[ai-lms-middle-school-longitudinal]]). Die stärkste Evidenz des beruflichen Bandes sind 63 [[self-report-measures|Selbstauskunfts]]antworten aus einem Kurs, von dem seine Autoren sagen, es bedürfe der Replikation ([[ai-ive-pbl-vocational-design-creativity-2026]]). Die Graduierten-Evidenz ist querschnittlich, wobei ein Modell mit umgekehrtem Pfad etwas besser passt als das entwicklungsbezogene, daher wird die Richtung von Abhängigkeit zu reduzierter Autonomie eher erschlossen als bestätigt ([[ai-mediated-research-agency-formation-2026]]). Nichts von dem hier Herangezogenen berichtet KI-Ergebnisevidenz für **adult learning** oder **special education** als Bänder; diese haben ihre eigene Abdeckung unter [[adult-learning]] und [[special-education]], und diese Seite verallgemeinert nicht von Befunden im Schulalter, um die Lücke zu füllen.

Ein Muster gilt auf jeder untersuchten Stufe: Die menschliche Schicht absorbiert die härtesten Fälle. Ein menschlicher Experte blieb am Glaubwürdigkeits-Entscheidungspunkt für Ingenieurstudierende, selbst wenn algorithmische Empfehlung F1 = 0,64 erreichte ([[ai-assisted-seminar-learning-information-literacy-2026]]); Betreuungsunterstützung war die eine Bedingung, die die negativen Verbindungen der KI-Abhängigkeit im Doktorandentraining schwächte ([[ai-mediated-research-agency-formation-2026]]); und es sind Vorschullehrende, nicht Kinder, die die Adoptierenden sind ([[preschool-teachers-ai-behavioral-intention-2026]]).

## Was stufengerechtes Design tatsächlich verändert

- **Autonomie und Unterstützung.** Bei jungen Lernenden passen Sie das *Niveau der Unterstützung* an – mehr [[scaffolding]], Anleitung oder Hinweise – statt die Aufgabenschwierigkeit; Schwierigkeitsanpassung brachte in der frühen Primarstufe nichts, während Meisterschaftsgating adaptive Studierende womöglich zurückgehalten hat ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Leseniveau.** Ein alterszugeschnittener Chatbot nutzte Promptvariablen für die Alter 7–9, 9–11 und 12–14, und 63 Kinder von der ersten bis zur achten Klasse behandelten ihn als glaubwürdige Informationsquelle ([[vahedian-children-attitudes-ai-chatbot-2026]]).
- **Vermittlung.** [[parents-and-families|Eltern]] und Lehrende vermitteln in den Schuljahren, [[librarians]] und Betreuende in den Universitätsjahren –, wobei das universitäre Gegenstück Expertise statt Vormundschaft ist: Die Ingenieurplattform behielt einen Menschen dort, wo der Algorithmus am wenigsten sicher war ([[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Assessment-Einsatz.** Das Mittelschul-LMS-Design steuert KI nach Aktivität, hält begrenzte Hinweise im Übungsmodus und schaltet KI bei benoteten Items ab ([[ai-lms-middle-school-longitudinal]]) – eine Vorsichtsmaßnahme, die die Evidenz zur Lernstrafe in der Sekundarstufe konkretisiert ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).
- **Datenschutzpflichten bei Minderjährigen.** Pflichten skalieren mit dem Alter: Bei Minderjährigen sind die Vorschläge des Korpus strukturell – Datenminimierung, altersangemessene Antwortbeschränkungen, rollenbasierte Zugriffskontrolle, prüfbare Protokolle ([[ai-lms-middle-school-longitudinal]]) –, und das Bewusstsein für digitale Sicherheit von Kindern kann nicht vorausgesetzt werden, da manche bereit waren, einem Chatbot Geheimnisse anzuvertrauen ([[vahedian-children-attitudes-ai-chatbot-2026]]). Bei Erwachsenen verschieben sich die Pflichten hin zu Einwilligung, Kontrolle und grenzüberschreitendem Datenfluss ([[data-privacy-ai-african-higher-education-2026]]).
- **Governance, die zum Band passt.** Bereitschaft ist schichtspezifisch: 395 ukrainische Manager bewerteten persönliche Bereitschaft 0,68 Punkte über Systembereitschaft (d = 0,73), nannten regulatorische Abwesenheit am häufigsten (58,5%) und bewerteten [[personalized-learning|Personalisierung]] – den Nutzen, den Anbieter am stärksten versprechen – von allen Anwendungen am niedrigsten (29,4%) ([[ai-adoption-readiness-ukraine-education-managers-2026]]).

## Folgerungen für KI in der Bildung

- **Lesen Sie das Level-Feld vor dem Themenfeld.** Ein Befund aus einem Band ist eine Hypothese für ein anderes, kein übertragbares Ergebnis.
- **Passen Sie bei den jüngsten Bändern Unterstützung an, nicht Aufgabenschwierigkeit** ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Übertragen Sie ein Werkzeug nicht über den Bruch zwischen Schule und Universität, ohne neu zu spezifizieren, wer die epistemische Autorität hält.** Abhängigkeit, die im Doktorandentraining Autonomie senkt, ist ein Risiko für die Forschungsformung ([[ai-mediated-research-agency-formation-2026]]).
- **Steuern Sie KI nach Aktivität, nicht nach Begeisterung**, und skalieren Sie Datenschutzpflichten mit dem Alter ([[ai-lms-middle-school-longitudinal]], [[data-privacy-ai-african-higher-education-2026]]).
- **Gestalten Sie für den vermittelnden Erwachsenen jenes Bandes** – Elternteil, Lehrkraft, Bibliothekarin oder Betreuende – und messen Sie dessen Bereitschaft getrennt von der der Institution ([[ai-adoption-readiness-ukraine-education-managers-2026]], [[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Sagen Sie klar, wenn ein Band keine Evidenz hat**, und **verwechseln Sie Absicht nicht mit Leistung**: Mehrere stufenspezifische Studien berichten Haltungs- oder [[self-report-measures|Selbstauskunfts]]-Ergebnisse statt Lernen.

## Verbundene Konzepte
- [[k-12]]
- [[early-childhood-elementary-ai-education]]
- [[higher-ed]]
- [[adult-learning]]
- [[special-education]]
- [[teacher-education]]
- [[vocational-education]]
- [[learners]]
- [[parents-and-families]]
- [[differential-effects-across-learner-groups]]

## Verbundene Artikel
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Adaptive versus non-adaptive tutoring in second-grade mathematics (Sibley et al. 2026)
- [[dai-chatbots-problem-posing-primary-2026]] — GenAI chatbots and problem posing with third-graders in primary science
- [[chatgpt-music-education-junior-high-2026]] — Junior high students' attitudes toward ChatGPT for lyric learning (Weng & Chiang 2026)
- [[ai-lms-middle-school-longitudinal]] — AI-integrated LMS designed for middle school, with a proposed longitudinal study
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — The generative AI learning penalty in Chinese secondary education (Strömberg et al. 2026)
- [[llm-reliance-types-undergrad]] — Four types of LLM reliance among undergraduate writers (Hossain 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — AI-assisted seminar platform with embedded librarian support for engineering students
- [[ai-mediated-research-agency-formation-2026]] — AI dependence, autonomy and innovation in doctoral and postdoctoral training (Han & Liu 2026)
- [[data-privacy-ai-african-higher-education-2026]] — Stakeholder views on data privacy in African higher education (Duncan 2026)
- [[ai-adoption-readiness-ukraine-education-managers-2026]] — Education managers' AI adoption readiness across Ukraine (Kremen et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-enabled immersive PBL for vocational design students (Jin et al. 2027)
- [[preschool-teachers-ai-behavioral-intention-2026]] — Preschool teachers' intention to use AI in early childhood settings
- [[vahedian-children-attitudes-ai-chatbot-2026]] — Children's attitudes toward an age-tailored AI chatbot
