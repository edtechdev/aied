---
title: "Bildungsstufen"
created: "2026-09-20T13:08:39-04:00"
updated: "2026-11-19T01:10:00-05:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
discipline: [teacher education]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education]
confidence: medium
translation_of: concepts/education-levels
source_updated: "2026-11-15T06:45:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Bildungsstufen** — die Stufen, die die `level`-Metadaten ordnen: **Vorschulbereich**, **Primarstufe**, **Mittelstufe**, **Sekundarbereich**, **K-12**, **Hochschulbildung**, **grundständiges Studium**, **Graduiertenstudium**, **Erwachsenenbildung**, **Sonderpädagogik** und **[[teacher-role|Lehrkräfte]]bildung**. Dieser Dachbegriff deckt das Feld als Ganzes ab und nicht eine einzelne Stufe; er erklärt, was sich beim Wechsel zwischen den Stufen ändert, warum der Bruch zwischen Schule und Universität mehr wiegt als das unterrichtete Fach und wo die KI-Evidenz dicht und wo sie dünn ist.

## Fragen zum Nachdenken

- Ein Graduiertenseminar und eine Mathematikstunde in der zweiten Klasse sind beides „Bildung", doch ein Werkzeug, das dem einen hilft, kann dem anderen schaden. Was an der Stufe — nicht am Fach — verändert, was ein guter KI-Einsatz ausmacht?
- Eine Studie mit 132 Zweitklässlern fand einen adaptiven Mathematiktutor nicht besser als eine feste Aufgabenfolge. Würden Sie bei einer Universitätsstudierenden dasselbe Nullergebnis erwarten, und welche Fähigkeit der Lernenden setzt Adaptierung stillschweigend voraus?
- „K-12" und „Hochschulbildung" fassen jeweils mehrere unterschiedliche Settings unter einem Label zusammen. Welche Vergleiche verbergen diese Labels?
- Wenn die Evidenzbasis einer Stufe dünn ist, ist es dann die ehrliche Antwort, nichts zu sagen, sich bei einer Nachbarstufe zu bedienen oder eine Studie zu entwerfen?

## Einleitung

Das Metadatenfeld `level` benennt die Bildungsstufe, um die es in einer Quelle geht — Stufen, nicht Altersangaben: **Vorschulbereich**, **Primarstufe**, **Mittelstufe**, **Sekundarbereich**, **K-12**, **Hochschulbildung**, **grundständiges Studium**, **Graduiertenstudium**, **Erwachsenenbildung**, **Sonderpädagogik**. Einige benennen eine Phase der Schulbildung, zwei die sehr unterschiedlichen Hälften des Universitätsstudiums und zwei eine [[learners|Lernendengruppe]] statt einer Phase. Eine Quelle kann mehrere Stufen zugleich tragen. Lehrkräftebildung ist keine Stufe: Sie ist ein Berufsfeld, das unter [[discipline-specific-aied|Disziplin]] getaggt wird, weil es durch grundständiges Studium und Graduiertenstudium (Erstausbildung) sowie durch K-12 und Erwachsenenbildung (berufsbegleitende Weiterbildung) verläuft.

Die Stufenseiten leisten die Tiefenarbeit und gehören zu jeder Lektüre des Feldes. Innerhalb der Schuljahre: [[early-childhood-elementary-ai-education|frühkindliche Bildung]] (Vorschule und die ersten Jahre), [[primary-education|Primarstufe]] (etwa 5 bis 11 Jahre) und [[secondary-education|Sekundarbereich]] (Mittel- und Oberstufe zusammen), wobei [[k-12]] die übergreifenden Befunde bündelt. Innerhalb des Universitätsstudiums: [[higher-ed|Hochschulbildung]] als Dach, [[undergraduate-education|grundständiges Studium]] für Studienleistungen unter externer Bewertung und [[graduate-education|Graduiertenstudium]] für Betreuung, Forschungsausbildung und berufsqualifizierende Programme. Außerhalb der beiden Leitern: [[adult-learning|Erwachsenenbildung]], [[vocational-education|Berufsbildung]], [[special-education|Sonderpädagogik]] und [[teacher-education|Lehrkräftebildung]].

## Was eine Stufe von einer anderen unterscheidet

Stufen unterscheiden sich entlang mehrerer Achsen gleichzeitig, und die KI-Forschung variiert meist nur eine davon.

- **Fähigkeit zur Selbstregulation.** Zwei Versionen desselben Mathematiktutors für die zweite Klasse — identische Inhalte, Oberfläche, Rückmeldungen und gesprochene Hinweise, unterschiedlich nur darin, ob die Aufgabenauswahl einer Mastery-Schätzung nach [[knowledge-tracing|Bayesian Knowledge Tracing]] folgte — ergaben bei 132 Siebenjährigen keinen Unterschied im Posttest (F(1, 124) = 0,32, p = 0,574). Die erste Erklärung der Autoren ist entwicklungsbezogen: [[adaptive-learning|adaptive Systeme]] setzen Lernende voraus, die Rückmeldungen aufgreifen, ihre Anstrengung regulieren und aufmerksam bleiben können, und junge Kinder verfügen über begrenzte [[self-regulated-learning|Selbstregulation]] ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley et al., 2026]]).
- **Wer die Interaktion vermittelt.** In den Schulstufen steht ein Erwachsener zwischen Lernenden und Werkzeug. Eine Befragung von 270 Vorschullehrkräften fand die Nutzungsabsicht bestimmt durch [[technology-acceptance-model|wahrgenommene Nützlichkeit]], Benutzerfreundlichkeit, KI-[[self-efficacy|Selbstwirksamkeit]] und [[anxiety-and-stress|KI-Angst]] — und die Studie schloss KI, die sich an Kinder richtet, bewusst aus ([[preschool-teachers-ai-behavioral-intention-2026|Duan et al., 2026]]).
- **Wozu die Bewertung dient.** Leistungsbeurteilung im Sekundarbereich ist an externe, folgenreiche Entscheidungen gekoppelt; universitäre Bewertung ist Studienleistung und Abschluss; Bewertung im Graduiertenstudium ist die Herausbildung einer Forscherpersönlichkeit.
- **[[prior-knowledge|Vorwissen]].** Vorwissen dominierte die Posttest-Leistung in dieser Studie (F(1, 124) = 206,99, p < 0,001, η²p = 0,63); eine Stufenbezeichnung korreliert also mit einem Wissensniveau, ist aber nicht dasselbe.

## Die Schuljahre und die Universitätsjahre

Der folgenreichste Einschnitt ist der Bruch zwischen Schule und Universität, und die beiden häufigsten Labels verbergen ihn jeweils oder überschreiten ihn.

Innerhalb der Schuljahre ändert sich das gemessene Ergebnis je Stufe stark. In der Primarstufe ist es das Fachlernen: 97 chinesische Drittklässler, die [[conversational-ai|GenAI-Chatbots]] im [[science-education|forschend-entdeckenden Naturwissenschaftsunterricht]] nutzten, formulierten bessere Probleme als eine Suchmaschinen-Kontrollgruppe (t = 2,47, p = 0,015) ([[dai-chatbots-problem-posing-primary-2026|Dai et al., 2026]]). Im Sekundarbereich wird es oft zur Einstellung statt zur Leistung. Eine Befragung von 508 taiwanesischen Schülerinnen und Schülern der Junior High School fand, dass Erlebnisattraktivität über Freude die Absicht formte, [[generative-ai|ChatGPT]] zum Lernen von Songtexten zu nutzen (XM → PEOU β = 0,630; PE → ATU β = 0,369), wobei 81,5 % die kostenlose Version nutzten — eine Tatsache der Zugangs-[[equity-in-ai-education|Chancengerechtigkeit]], verkleidet als Technologieakzeptanz-Befund ([[chatgpt-music-education-junior-high-2026|Weng et al., 2026]]). Der Sekundarbereich enthält auch die größte Lernwarnung der Literatur: Bei 26.811 chinesischen Schülerinnen und Schülern der Klassen 7–12 stiegen die Hausaufgabenpunkte um 18 % und die Bearbeitungszeit sank um 30 %, während die Ergebnisse in [[summative-assessment|Klausuren ohne Hilfsmittel]] innerhalb von sechs Monaten um etwa 20 % fielen, konzentriert bei den ~81 %, deren Verhalten auf ein Auslagern der Hausaufgaben hindeutete ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al. (2026)]]).

Die Universitätsjahre teilen sich erneut. Das grundständige Studium ist Studienleistung unter externer Bewertung: Bei schreibenden Studierenden im grundständigen Studium an einer R1-Universität mit explizitem Auftrag zur Förderung minorisierter Gruppen sagte [[ai-literacy|KI-Kompetenz]] voraus, *welche Form* des Sich-Verlassens auf ein [[llm|LLM]] sie praktizierten, nicht wie viel sie es nutzten ([[llm-reliance-types-undergrad|Hossain, 2026]]). Das Graduiertenstudium ist Forschungsausbildung, bei der sich das Ergebnis von der Leistung zur Formung verschiebt. Bei 420 Doktorandinnen, Doktoranden und Postdocs der Astronomie war KI-Abhängigkeit negativ mit Forschungs-[[agency|Autonomie]] (r = −0,355) und [[self-efficacy|Selbstwirksamkeit]] (r = −0,321) assoziiert, und der indirekte Pfad zu innovativem Verhalten verlief überwiegend über Autonomie (−0,115) statt über Selbstwirksamkeit (−0,069); Unterstützung durch Betreuende schwächte den negativen Zusammenhang mit Autonomie ab (B = 0,077, p = 0,020) ([[ai-mediated-research-agency-formation-2026|Han et al., 2026]]). Promovierende werden nach jener Urteilskraft beurteilt, die KI-Abhängigkeit offenbar erodiert; Studierende im grundständigen Studium nicht. Beide unter „Hochschulbildung" zusammenzufassen verdeckt das.

## KI-Kompetenz als Entwicklungssequenz

Die vier Komponenten der KI-Kompetenz in der Primarstufe umfassen bereits das, was Rahmenmodelle für Graduierte als fortgeschritten behandeln. Über 25 empirische Studien hinweg fanden [[yim-ai-literacy-primary-schools-review-2025|Yim und Su (2025)]] digitale Kompetenz für die Interaktion mit KI in 19, Computational Thinking in 10, KI-Ethik in 10 und kritische Datenkompetenz in 5. Intelligente Agenten kamen in 15 Studien vor und Unplugged-Aktivitäten in 3 — die früheste Stufe lehrt KI also, indem sie ein Modell baut und untersucht, statt eines zu benutzen.

Im Sekundarbereich wird das Konstrukt zur Urteilskraft unter Zeitdruck. Über 33 Studien hinweg lag jedes getestete Werkzeug bei Biologieaufgaben höherer Ordnung unter 20 %, während BingChat und Bard bei grundlegenden Aufgaben 92,11 % erreichten ([[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca et al. (2026)]]). Zuwächse zeigten sich dort, wo Schülerinnen und Schüler Ausgaben verglichen und verwarfen, und verschwanden dort, wo das Werkzeug die Arbeit erledigte. Was Schülerinnen und Schüler zu lernen angeben, folgt kaum dem, was sie mit den Ausgaben tun: In einer Studie mit 1477 Befragten korrelierten wahrgenommenes Lernen und ein Engagement-Index mit 0,052 ([[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]]).

Im grundständigen Studium ist die entscheidende Größe Kompetenz statt Ethik. Bei 304 Studierenden im grundständigen und postgradualen Studium sagte digitale Kompetenz die selbstberichtete Leistung bei Studienaufgaben voraus (β = 0,393), ethisches Bewusstsein dagegen nicht (β = −0,006) ([[kumar-chatgpt-academic-assignments-2025|Kumar et al. (2025)]]). Im Graduiertenstudium ist die Lücke eine der Urteilskraft: Graduierte übertrafen Studierende im grundständigen Studium bei Ethik und akademischer Autonomie um d = 1,47, und die Nutzungshäufigkeit sagte Kompetenz mit β = 0,030 voraus, sobald Ethik und Selbstregulation ins Modell eingingen ([[zaripova-genai-self-regulation-neuroai-competence-2026|Zaripova et al. (2026)]]). Das Rahmenmodell für Graduierte ergänzt metakognitive Reflexion — die Dimension, die den vier Primarstufen-Komponenten fehlt ([[zhi-modeling-measuring-graduate-genai-literacy-2026|Zhi et al. (2026)]]).

Als Sequenz gelesen verändert das Kontinuum, was jede Stufe prüfen sollte, nicht was sie lehren sollte. Arbeit in der Primarstufe verlangt ein Artefakt, das ein Kind erklären kann, Arbeit im Sekundarbereich einen Vergleich, den ein Schüler verteidigen kann, und Arbeit im Graduiertenstudium eine Darlegung, welche Behauptungen die eigenen der Kandidatin sind ([[academic-integrity|wissenschaftliche Integrität]]). Ein Werkzeug, das an einem Ende ausreicht, ist am anderen kein Nachweis.

## Wo die Evidenz dicht ist und wo sie dünn ist

Die Evidenz ist ungleich verteilt, und das Level-Feld macht das Ungleichgewicht sichtbar.

**Dicht.** Die Hochschulbildung ist die am besten abgedeckte Stufe: Die hier herangezogenen Seiten umfassen eine achtwöchige Plattformerprobung mit 60 Ingenieurstudierenden ([[ai-assisted-seminar-learning-information-literacy-2026|Huang, 2026]]), eine Befragung von 395 Bildungsmanagern ([[ai-adoption-readiness-ukraine-education-managers-2026|Kremen et al., 2026]]), eine Metasynthese von 18 afrikanischen Hochschulstudien ([[data-privacy-ai-african-higher-education-2026|Duncan, 2026]]) und eine Studie mit 420 Forschenden zur Doktoratsausbildung ([[ai-mediated-research-agency-formation-2026|Han et al., 2026]]). Auch Primar- und Sekundarstufe tragen Ergebnisevidenz.

**Dünn, stellenweise fehlend.** Die hier herangezogenen Seiten berichten für den Vorschulbereich überhaupt keine Studie mit Ergebnissen bei Kindern; die nächstliegende Evidenz ist eine Befragung von Lehrkräfteabsichten, die kindgerichtete Werkzeuge ausschloss ([[preschool-teachers-ai-behavioral-intention-2026|Duan et al., 2026]]). Die Mittelstufe erscheint vor allem als *vorgeschlagenes* Design und Längsschnittstudie, nicht als berichtete Ergebnisse ([[ai-lms-middle-school-longitudinal|Etchie et al., 2026]]). Die stärkste Evidenz der Berufsbildungsstufe sind 63 [[self-report-measures|Selbstauskünfte]] aus einem einzigen Kurs, die nach Aussage der Autoren eine Replikation erfordern ([[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2027]]). Die Evidenz zum Graduiertenstudium ist querschnittlich, wobei ein Modell mit umgekehrtem Pfad etwas besser passt als das Entwicklungsmodell; die Richtung von Abhängigkeit zu geringerer Autonomie ist also erschlossen, nicht bestätigt ([[ai-mediated-research-agency-formation-2026|Han et al., 2026]]). Keine der hier herangezogenen Quellen berichtet KI-Ergebnisevidenz für **Erwachsenenbildung** oder **Sonderpädagogik** als Stufen; diese haben ihre eigene Abdeckung unter [[adult-learning|Erwachsenenbildung]] und [[special-education|Sonderpädagogik]], und die Befunde aus dem Schulalter werden nicht verallgemeinert, um die Lücke zu füllen.

Mittlerweile gibt es Ergebnisse für die Mittelstufe: Bei 178 indonesischen Schülerinnen und Schülern der Junior High School sagten kulturell eingebettete diagnostische Aufgaben die Leistung bei symbolischen Aufgaben (β = 0,42) und das Engagement (β = 0,37) voraus, und KI-Diagnoseprofile stimmten mit Expertenurteilen überein (ICC = 0,81) ([[culturally-embedded-ai-diagnostic-assessment-2026|Anggara et al. (2026)]]).

Ein Muster gilt auf jeder untersuchten Stufe: Die menschliche Schicht fängt die schwierigsten Fälle ab. Ein menschlicher Experte blieb am Entscheidungspunkt für Glaubwürdigkeit bei Ingenieurstudierenden, selbst als die algorithmische Empfehlung F1 = 0,64 erreichte ([[ai-assisted-seminar-learning-information-literacy-2026|Huang, 2026]]); die Unterstützung durch Betreuende war die einzige Bedingung, die die negativen Zusammenhänge der KI-Abhängigkeit in der Doktoratsausbildung abschwächte ([[ai-mediated-research-agency-formation-2026|Han et al., 2026]]); und es sind Vorschullehrkräfte, nicht Kinder, die die Adoptierenden sind ([[preschool-teachers-ai-behavioral-intention-2026|Duan et al., 2026]]).

## Was stufengerechtes Design tatsächlich verändert

- **Autonomie und Unterstützung.** Bei jungen Lernenden das *Maß an Unterstützung* anpassen — mehr [[scaffolding|Scaffolding]], Anleitung oder Hinweise — statt die Aufgabenschwierigkeit; Schwierigkeitsanpassung brachte in der frühen Primarstufe nichts, während Mastery-Gating adaptive Lernende möglicherweise zurückhielt ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley et al., 2026]]).
- **Leseniveau.** Ein altersangepasster Chatbot nutzte Prompt-Variablen für die Altersgruppen 7–9, 9–11 und 12–14 Jahre, und 63 Kinder von der ersten bis zur achten Klasse behandelten ihn als glaubwürdige Informationsquelle ([[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed et al., 2025]]).
- **Vermittlung.** [[parents-and-families|Eltern]] und Lehrkräfte vermitteln in den Schuljahren, [[librarians|Bibliothekare]] und Betreuende in den Universitätsjahren — und das universitäre Gegenstück ist Expertise statt Vormundschaft: Die Ingenieurplattform behielt einen Menschen dort, wo der Algorithmus am wenigsten sicher war ([[ai-assisted-seminar-learning-information-literacy-2026|Huang, 2026]]).
- **Bewertungskonsequenzen.** Das LMS-Design für die Mittelstufe steuert KI nach Aktivität: Es belässt begrenzte Hinweise im Übungsmodus und schaltet KI bei benoteten Aufgaben ab ([[ai-lms-middle-school-longitudinal|Etchie et al., 2026]]) — eine Vorsichtsmaßnahme, die die Evidenz zur Lerneinbuße im Sekundarbereich konkret macht ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al. (2026)]]).
- **Datenschutzpflichten für Minderjährige.** Die Pflichten skalieren mit dem Alter: Für Minderjährige sind die Vorschläge strukturell — Datenminimierung, altersgerechte Antwortbeschränkungen, rollenbasierte Zugriffskontrolle, prüfbare Protokolle ([[ai-lms-middle-school-longitudinal|Etchie et al., 2026]]) — und das Bewusstsein von Kindern für digitale Sicherheit kann nicht vorausgesetzt werden, da einige bereit waren, einem Chatbot Geheimnisse anzuvertrauen ([[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed et al., 2025]]). Bei Erwachsenen verschieben sich die Pflichten zu Einwilligung, Kontrolle und grenzüberschreitendem Datenfluss ([[data-privacy-ai-african-higher-education-2026|Duncan, 2026]]).
- **Governance, die zur Stufe passt.** Bereitschaft ist schichtspezifisch: 395 ukrainische Manager bewerteten ihre persönliche Bereitschaft 0,68 Punkte höher als die Systembereitschaft (d = 0,73), nannten fehlende Regulierung am häufigsten (58,5 %) und bewerteten [[personalized-learning|Personalisierung]] — den Nutzen, den Anbieter am meisten versprechen — von allen Anwendungen am niedrigsten (29,4 %) ([[ai-adoption-readiness-ukraine-education-managers-2026|Kremen et al., 2026]]).

## Konsequenzen für KI in der Bildung

- **Lesen Sie das Level-Feld vor dem Themenfeld.** Ein Befund aus einer Stufe ist für eine andere eine Hypothese, kein übertragbares Ergebnis.
- **Passen Sie für die jüngsten Stufen die Unterstützung an, nicht die Aufgabenschwierigkeit** ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley et al., 2026]]).
- **Übertragen Sie ein Werkzeug nicht über den Bruch zwischen Schule und Universität hinweg, ohne neu zu bestimmen, wer die epistemische Autorität hält.** Abhängigkeit, die in der Doktoratsausbildung die Autonomie senkt, ist ein Risiko für die Ausbildung der Forscherpersönlichkeit ([[ai-mediated-research-agency-formation-2026|Han et al., 2026]]).
- **Steuern Sie KI nach Aktivität, nicht nach Begeisterung**, und skalieren Sie Datenschutzpflichten mit dem Alter ([[ai-lms-middle-school-longitudinal|Etchie et al., 2026]], [[data-privacy-ai-african-higher-education-2026|Duncan, 2026]]).
- **Entwerfen Sie für den vermittelnden Erwachsenen der jeweiligen Stufe** — Eltern, Lehrkraft, Bibliothekar oder Betreuung — und messen Sie dessen Bereitschaft getrennt von der der Institution ([[ai-adoption-readiness-ukraine-education-managers-2026|Kremen et al., 2026]], [[ai-assisted-seminar-learning-information-literacy-2026|Huang, 2026]]).
- **Sagen Sie klar, wenn eine Stufe keine Evidenz hat**, und **verwechseln Sie Absicht nicht mit Leistung**: Mehrere stufenspezifische Studien berichten Einstellungs- oder Ergebnisse aus [[self-report-measures|Selbstberichten]] statt Lernen.

## Verbreitete Fehlvorstellungen

**„Eine Stufenbezeichnung sagt, was ein Lernender kann."** Stufe und Wissensniveau korrelieren, ohne gleich zu sein. In der Tutoring-Studie der zweiten Klasse dominierte [[prior-knowledge|Vorwissen]] die Posttest-Leistung (**F(1, 124) = 206,99, p < 0,001, η²p = 0,63**) — ein großer Effekt, der die Klassenstufenbezeichnung neben dem tatsächlichen Vorwissen des Lernenden zu einem schwachen Prädiktor macht. Nach der Stufe zu entwerfen und die Streuung innerhalb der Stufe zu ignorieren heißt, für den Mittelwert einer breiten Verteilung zu entwerfen.

**„Das unterrichtete Fach ist wichtiger als die Bildungsstufe."** Der Bruch zwischen Schule und Universität ist wichtiger. Was sich über diese Grenze hinweg ändert, ist nicht der Inhalt, sondern die Fähigkeit zur Selbstregulation, die Natur des Bewertungsvertrags und die Frage, wer für das Lernen verantwortlich ist — weshalb ein Werkzeug, das einem Graduiertenseminar hilft, einer Zweitklassstunde selbst bei vergleichbaren Inhalten schaden kann.

**„Ein [[intelligent-tutoring|adaptiver Tutor]] hilft auf jeder Stufe gleich."** Der Vergleich, der die Variable isoliert, ist lehrreich: zwei Versionen desselben Mathematiktutors für die zweite Klasse — identische Inhalte, Oberfläche, Rückmeldungen und gesprochene Hinweise —, die sich **allein darin unterscheiden, ob die Aufgabenauswahl einem bayesianischen [[knowledge-tracing|Knowledge-Tracing]]-Modell folgte**. Adaptive Aufgabenauswahl ist eine stufensensitive Intervention, und ihr Nutzen hängt davon ab, ob Lernende auf dieser Stufe die Anpassung nutzen können.

**„Evidenz, die sich in der Hochschulbildung konzentriert, lässt sich nach unten verallgemeinern."** Das gilt nicht, und die Verteilung der Literatur ist eine Warnung, keine Bequemlichkeit. Wo die Evidenz dicht und wo sie dünn ist, ist eine Eigenschaft der Forschungsökonomie, nicht des Ortes, an dem KI am meisten genutzt wird; eine Aussage über K-12, die aus Universitätsstichproben gezogen wird, ist daher eine Extrapolation über die Grenze hinweg, die am meisten zählt.

## Verbundene Konzepte
- [[primary-education]] — Die Primarstufe für sich betrachtet
- [[secondary-education]] — Mittel- und Oberstufe zusammen
- [[undergraduate-education]] — Studienleistungen unter externer Bewertung
- [[graduate-education]] — Betreuung, Forschungsausbildung, berufsqualifizierende Programme
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
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Adaptives versus nicht-adaptives Tutoring im Mathematikunterricht der zweiten Klasse (Sibley et al. 2026)
- [[dai-chatbots-problem-posing-primary-2026]] — GenAI-Chatbots und Problemformulierung mit Drittklässlern im naturwissenschaftlichen Primarstufenunterricht
- [[chatgpt-music-education-junior-high-2026]] — Einstellungen von Junior-High-Schülern zu ChatGPT beim Lernen von Songtexten (Weng & Chiang 2026)
- [[ai-lms-middle-school-longitudinal]] — KI-integriertes LMS, entworfen für die Mittelstufe, mit einer vorgeschlagenen Längsschnittstudie
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Die Lerneinbuße durch generative KI im chinesischen Sekundarbereich (Strömberg et al. 2026)
- [[llm-reliance-types-undergrad]] — Vier Formen des Sich-Verlassens auf LLM bei schreibenden Studierenden im grundständigen Studium (Hossain 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — KI-gestützte Seminarplattform mit eingebetteter Bibliotheksunterstützung für Ingenieurstudierende
- [[ai-mediated-research-agency-formation-2026]] — KI-Abhängigkeit, Autonomie und Innovation in der Doktorats- und Postdoc-Ausbildung (Han & Liu 2026)
- [[data-privacy-ai-african-higher-education-2026]] — Sichten von Stakeholdern auf Datenschutz in der afrikanischen Hochschulbildung (Duncan 2026)
- [[ai-adoption-readiness-ukraine-education-managers-2026]] — Bereitschaft von Bildungsmanagern zur KI-Adoption in der Ukraine (Kremen et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — KI-gestütztes immersives PBL für Designstudierende in der Berufsbildung (Jin et al. 2027)
- [[preschool-teachers-ai-behavioral-intention-2026]] — Absicht von Vorschullehrkräften, KI in frühkindlichen Settings zu nutzen
- [[vahedian-children-attitudes-ai-chatbot-2026]] — Einstellungen von Kindern zu einem altersangepassten KI-Chatbot
- [[yim-ai-literacy-primary-schools-review-2025]] — 25 Studien zur Primarstufe; vier Komponenten einschließlich Ethik und kritischer Datenkompetenz (Yim & Su 2025)
- [[perez-montesdeoca-genai-secondary-systematic-review-2026]] — 33 Studien zur Sekundarstufe; Genauigkeit bricht bei Aufgaben höherer Ordnung ein (Pérez-Montesdeoca et al. 2026)
- [[torres-peralta-perceived-learning-engagement-homework-2026]] — 1477 Befragte aus Oberstufe, Universität und Lehrerschaft; wahrgenommenes Lernen versus Engagement
- [[kumar-chatgpt-academic-assignments-2025]] — 304 Studierende im grundständigen und postgradualen Studium; digitale Kompetenz sagte Leistung voraus, Ethik nicht
- [[zaripova-genai-self-regulation-neuroai-competence-2026]] — Vergleich grundständiges Studium versus Graduiertenstudium; Lücke bei Ethik und Autonomie am größten (Zaripova et al. 2026)
- [[zhi-modeling-measuring-graduate-genai-literacy-2026]] — Modell der GenAI-Kompetenz von Graduierten mit fünf Dimensionen
