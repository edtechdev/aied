---
title: "Wie kann KI Bildungsforschung unterstützen?"
created: "2026-10-05T11:23:36-04:00"
updated: "2026-10-29T07:57:30-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
translation_of: faqs/how-can-ai-assist-with-educational-research
source_updated: "2026-10-28T11:26:02-04:00"
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

Ihre Mitautorin möchte einen Absatz im Methodenteil über die KI-Werkzeuge, die das Team genutzt hat. Oder der Screening-Stapel ist länger, als die Frist erlaubt. Oder eine Gutachterin hat höflich gefragt, ob ein Mensch die Transkripte gelesen hat, und Sie sind nicht sicher, was die ehrliche Antwort ist.

Die kurze Antwort für dieses Treffen: KI kann die Suche, einen ersten Screening-Durchgang, die Triage beim Kodieren und das Entwerfen übernehmen, und sie kann keine Verantwortung für das tragen, was das Projekt folgert. Entscheiden Sie vor Projektbeginn, welche Aufgaben für sie offen sind, prüfen Sie Ausgaben gegen einen menschlichen Standard mit einer benannten Person, die Streitfälle entscheidet, und protokollieren Sie genug, dass eine außenstehende Person rekonstruieren könnte, was passiert ist. Die meisten Teams stellen fest, dass die Stunden für Prüfung und Protokollierung zusätzliche Arbeit sind, nicht eingesparte.

## Die kurze Version

**1.** Schreiben Sie vor der ersten Suche auf, welche Forschungsaufgaben KI nutzen dürfen und welche nicht. Sortieren Sie nach Tragweite, nicht nach Werkzeug.

**2.** Setzen Sie die Automatisierung beim Screening ein. Lassen Sie Datenextraktion, Abgleich und Synthese bei Menschen.

**3.** Legen Sie Codebuch und Raster fest, bevor ein automatisierter Durchgang die Daten berührt.

**4.** Entscheiden Sie, was Prüfung bedeutet und wer sie unterschreibt. Übereinstimmung zwischen einem Modell und einer kodierenden Person ist ein Ähnlichkeitsmaß, kein Qualitätsergebnis.

**5.** Prüfen Sie jede Referenz von Hand, zuerst die Autorinnen und Autoren, wann immer KI am Text beteiligt war.

**6.** Protokollieren Sie Prompts, Modellversionen und Korpusversionen, und planen Sie die Stunden dafür ein.

## Entscheiden Sie vor Projektbeginn, was KI berühren darf

Die Reichweitenentscheidung gehört in die Projektakte und nicht in das Gedächtnis von jemandem. In [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai und Chans (2026) Fokusgruppenstudie]] kalibrierten Forschende, die darüber nachgedacht hatten, die Nutzung nach Tragweite und intellektueller Zentralität: stärker bei wenig riskanter Verfahrensarbeit, vorsichtig dort, wo der wissenschaftliche Beitrag zentral war. 27 der 28 Nachwuchsforschenden in dieser Studie hatten GenAI irgendwo im Arbeitsablauf genutzt, einschließlich wissenschaftlichen Schreibens und Übersetzens; für die meisten Teams ist die Frage also, wo die Linie liegt, nicht ob es eine gibt.

Schreiben Sie die Linie als Liste mit einem Urteil für jede Aufgabe: Literatursuche, Abstract-Screening, Extraktion, qualitative Kodierung, statistische Analyse, Entwerfen, Referenzformatierung. Lesen Sie diese Studie als Landkarte dessen, was Forschende berichteten zu tun. Sie ist ein Fokusgruppenbericht, kein Wirksamkeitsergebnis.

## Setzen Sie die Automatisierung beim Screening ein und behalten Sie die Synthese im Team

Systematische Reviews sind der Bereich, in dem die Automatisierung am weitesten fortgeschritten ist. Werkzeuge wie ASReview, SWIFT-Review, Covidence, AIScreenR und MetaMate senkten die Verfahrenslast vor allem beim Abstract-Screening, während Datenextraktion, Abgleich und Synthese in dem einen Team, das seinen Arbeitsablauf berichtete, bei menschlichen Gutachtenden blieben ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

Der größte Teil des Nutzens kommt aus zwei Designentscheidungen. Schreiben Sie Entscheidungsregeln für Graubereichsfälle, bevor das Screening beginnt, und führen Sie eine Kategorie „vielleicht" mit einem gemeinsamen Entscheidungsprotokoll, damit dieselbe Beurteilung auf dieselbe Art von Eintrag angewandt wird. Ohne das Protokoll divergieren die Regel der zweiten Gutachterin und die des ersten Gutachters still, und die Ausschlussliste ist nicht mehr reproduzierbar.

## Legen Sie das Codebuch fest, bevor das Modell etwas liest

[[qualitative-research|Qualitative Analyse]] ist die Stufe, auf der die Interpretation das Produkt ist. Konstrukte, Kodierraster und Trainingsdaten sind menschliche Entscheidungen und keine Modellausgaben ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]), was heißt, dass das Codebuch feststehen muss, bevor ein automatisierter Durchgang über den Korpus läuft. Die Alternative ist ein Kodierschema, das um das herum geschrieben wurde, was das Modell zufällig zutage brachte, und die Themen beschreiben dann die Lesart des Werkzeugs von Ihren Daten.

Delegation kann feinkörniger sein als alles oder nichts. [[agreement-not-quality-llm-coding-verification|Eine Blindverifikationsstudie]] klassifizierte 15 von 72 Codebuch-Items als nachweislich menschliche Expertise erfordernd, 12 als besser durch ein Modell bedient und 16 als für zuversichtsbasierte Triage geeignet. Sortieren Sie Ihre eigenen Items so, und die Arbeitsersparnis landet dort, wo sie sicher ist.

## Entscheiden Sie, was Prüfung bedeutet und wer sie unterschreibt

Hohe Übereinstimmung zwischen einem Modell und einer menschlichen Kodiererin wird berichtet, als ob sie Korrektheit belegt. Das tut sie nicht. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] ließen eine unabhängige Expertin 855 paarweise Codesätze blind gegenüber der Quelle beurteilen. Die Übereinstimmung Mensch-LLM (mittlerer Jaccard 0.30) lag deutlich unter der Übereinstimmung Mensch-Mensch (0.52), dennoch bevorzugte die blinde Prüferin menschliche und maschinelle Kodierung in Raten, die sie nicht unterscheiden konnte (51.5% gegen 48.5%, p = 0.537). In einigen Fällen kodierte der menschliche Konsens eine geteilte Verzerrung, die die Prüferin zugunsten des Modells verwarf.

Der Prüfschritt braucht also einen Goldstandard, der weder die Ausgabe des Modells noch die Übereinstimmung der Kodiererin mit ihr ist, plus eine benannte Person, die die Uneinigkeiten entschieden hat. Berichten Sie beides. Eine Ähnlichkeitsstatistik beschreibt, wie eng zwei Lesarten übereinstimmen, und sie sagt nichts darüber, ob eine der beiden richtig ist.

## Suchen Sie schnell, prüfen Sie dann jede Quelle selbst

Generative Suche fasst zusammen, empfiehlt, synthetisiert und dialogisiert, was die ältere Anordnung verunsichert, in der das System findet und die Leserin interpretiert ([[genai-academic-search-workshop]]). Behandeln Sie sie als Entdeckungswerkzeug. Der Workshop-Bericht enthält zwei Warnungen: Die Fähigkeit ist ungleich, wobei viel zitierte Forschende mit etwa doppelter Rate rekonstruiert wurden wie weniger zitierte Peers, und eine Bibliothekarin beschrieb eine Vertrauenslücke, in der Studierende generativer Suche zu sehr vertrauten, während Lehrende ihr misstrauten.

Die Referenzprüfung ist der Punkt, an dem das nicht verhandelbar wird, und die Fehler ballen sich im Autorenfeld, dem Feld, das die Anerkennung trägt. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] prüften 723.930 Publikationen und 15.872.533 Referenzen und verifizierten 30 erfundene Referenzen in 14 informatischen Bildungsarbeiten, alle aus 2025 und 2026. 17 der 30 waren Hybride: ein echter Titel, verbunden mit erfundenen oder falschen Autorinnen und Autoren. Die verifizierte Zahl bei einem technischen Symposium stieg von 3 im Jahr 2025 auf 17 im Jahr 2026, in 2.3% der Verfahrensbeiträge dieses Jahres. Ihre Summe ist eine bewusste Untergrenze, und automatisierte Prüfer erben die Fehler der Metadaten, die sie als Wahrheit behandeln. Prüfen Sie zuerst die Autorinnen und Autoren.

## Behandeln Sie einen automatisierten Score als Hypothese

Automatisierte Messfunktionen können präzise und prädiktiv wirken und dabei undurchsichtig bleiben. [[ai-methodologies-science-education-research-2026|Martin et al.]] rahmen das mit Changs nomischem Messproblem: Eine Größe zu messen verlangt ein Gesetz, das sie auf etwas Beobachtbares bezieht, und dieses Gesetz lässt sich nicht prüfen, ohne die Größe bereits zu kennen. KI-abgeleitete Messfunktionen entstehen aus Trainingsdaten und Optimierung und nicht aus der Forscherin, deshalb ist Arbeit an Erklärbarkeit wichtig, um zu zeigen, ob ein Modell semantisches Verstehen verfolgt oder nur Schlüsselwörter.

Der Fehler ist konkret. In [[zhang-platform-scores-miss-ai-teaching-agents-2026|einer Evaluation von acht KI-Lehragenten]] landete der Agent, der nach dem eigenen Score der Plattform Dritter war, auf einem expertenvalidierten Raster auf dem letzten Platz. Mensch-Maschine-Uneinigkeit ist systematisch und nicht zufällig, und die Operationalisierung des Rasters ist oft wichtiger als die Kunstfertigkeit des Prompts ([[machines-misread-pedagogical-quality|Tseng et al., 2026]]). Bevor ein automatisierter Score Ihr Instrument wird, validieren Sie ihn gegen ein Maß, das an die Fähigkeit gebunden ist, die Sie untersuchen wollen. Zu den Maßen selbst siehe [[evaluating-ai-interventions-methods]].

## Schreiben Sie den Methodenteil so, dass eine außenstehende Person ihn prüfen kann

Die Verbreitung ist der Berichterstattung vorausgelaufen. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta und Lin (2026)]] analysierten 888 Arbeiten zur Review-Automatisierung: Seit 2023 berichteten 38.0% der Software- und Produktarbeiten überhaupt keine Evaluation, gegenüber 9.3% der LLM-Arbeiten, und der Modellzugang war überwiegend proprietär (84.1%). Eine günstige Gesamtbewertung implizierte auch keine Eignung für Delegation, denn 52% von 118 ausschließlich positiven LLM-Arbeiten berichteten weiterhin eine Sorge, dass der Arbeitsablauf unter der Schwelle blieb, die ihre Rolle verlangt. Ihr PRISMA-LLM-Rahmenwerk trennt die Offenlegung der Implementierung von der folgenbewussten Evaluation und behandelt seine fünf Stufen als Offenlegungsstufen, nicht als Risikostufen.

Die praktische Version: Nennen Sie das System und seine Version, die Prompts, die Korpusversion, was ein Mensch geprüft hat und wo es versagt hat. Führen Sie Prompt-und-Antwort-Protokolle, denn eine flüssige generierte Themenliste wirkt lange unvermeidlich, bevor ihre beweisende Arbeit überhaupt begonnen hat ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Kalkulieren Sie auch die Stunden. [[persistent-ai-agents-academic-research|Eine 115-tägige Einzelfallstudie mit einer einzigen Forscherin]] zu einem persistenten Forschungsagenten fand als stärkstes Muster Kapazitätserweiterung statt nachgewiesener Arbeitsersetzung: Während Gedächtnis und Verfahrensweisen anwuchsen, wuchs der Umfang der delegierten Arbeit, während der Beitrag des Menschen nicht kleiner wurde.

## Führen Sie Praktikerforschung mit denselben Regeln im kleineren Maßstab durch

Wenn Sie ein Lehrender sind, der den eigenen Kurs untersucht, arbeiten Sie im dünnsten Strang des Korpus. [[ai-assisted-educational-research|AI-Assisted Educational Research]] benennt das als Lücke und nicht als Befund: KI-unterstützte Praktikerforschung ist plausibel weit verbreitet und fast undokumentiert, und die Evidenz zur Review-Automatisierung und zur Bibliometrie entscheidet nicht, wie ein Lehrender das eigene Unterrichten untersuchen sollte.

Was übertragbar ist, ist eine Reihe von Haltungen:

Nutzen Sie KI dort, wo Ihr lokales Setting nicht die Variable ist. Die Literatur Ihres Fachs durchsuchen, Ihre eigenen Aufnahmen transkribieren und zusammenfassen und Instrumente oder Einwilligungstexte entwerfen — all das qualifiziert sich.

Behalten Sie die interpretativen Züge. Was als Thema zählt, was ein Kommentar einer studierenden Person bedeutet und was Ihre Unterrichtsevidenz stützt, entscheiden Sie, und die Darstellung sollte sagen, welche Züge das Modell gemacht hat und welche Sie ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Legen Sie Ihre Kriterien vorab fest und halten Sie sie sichtbar. Eine kleine lokale Studie erholt sich nicht von einem Konstrukt, das definiert wurde, nachdem die Daten da waren.

Berichten Sie die Rolle der KI, die Prüfung, die Sie vorgenommen haben, und die Grenzen eines Designs mit einem einzigen Kurs und einer einzigen Forscherin. Ein Bericht über einen Arbeitsablauf ist kein Wirksamkeitsergebnis.

Behandeln Sie die Simulation einer Kohorte als fortgeschrittene Option und nicht als Standard. Simulierte Lernende decken tendenziell den einfachsten Quadranten realen Studierendenverhaltens ab und werden nach der Nutzung selten validiert ([[simulating-students]]). Lesen Sie [[making-simulated-students-behave-like-learners]], bevor Sie dem Urteil eines Simulators vertrauen.

## Was Forschende hier falsch machen

Übereinstimmung mit einer menschlichen Kodiererin heißt, dass die Kodierung richtig ist. Die Übereinstimmung Mensch-LLM in der Blindstudie lag bei 0.30 Jaccard gegen 0.52 bei Mensch-Mensch, und die blinde Prüferin konnte die beiden Kodierquellen bei 51.5% gegen 48.5% nicht auseinanderhalten. Übereinstimmung hält fest, dass zwei Lesarten konvergierten, auch wenn sie auf derselben Verzerrung konvergierten.

Ein Referenzprüfer ersetzt das Prüfen von Referenzen. Die 30 erfundenen Referenzen im Denny-Audit enthalten 17 Hybride, bei denen der Titel echt und die Autorinnen und Autoren es nicht waren — genau der Fall, den ein auf Metadaten trainiertes Prüfwerkzeug am schlechtesten behandelt, weil die Metadaten das sind, was falsch ist.

Eine günstige Evaluation macht einen Arbeitsablauf passend für Ihre Rolle. Von 118 ausschließlich positiven LLM-Arbeiten berichteten 52% weiterhin eine Sorge, dass der Arbeitsablauf unter der Schwelle blieb, die ihre Rolle verlangte. Lesen Sie die Tiefe der Evaluation gegen die Aufgabe, die Sie ihm geben.

Prompt-Kunstfertigkeit ist der wichtigste Hebel für Qualität. Die Operationalisierung des Rasters ist bei Mensch-Maschine-Übereinstimmung oft wichtiger als die Kunstfertigkeit des Prompts, und die Evaluation mit acht Agenten reihte dasselbe System je nach angewandtem Raster auf Platz drei und auf den letzten Platz.

KI nimmt Arbeit aus dem Projekt. Die 115-tägige Fallstudie fand einen wachsenden delegierten Umfang, während das Gedächtnis des Agenten anwuchs. Prüfung, Entscheidung von Streitfällen und Protokollierung sind die Stunden, die damit wachsen.

## Was Ihnen entgegenkommen wird

**„Meine Mitautorin macht das schon, und niemand hat sich beschwert."** Dass sich niemand beschwert, ist kein Befund zur Validität. Die Frage der Offenlegung ist von der Frage der Qualität getrennt, und die Zahl von 38.0% für unbewertete Softwarearbeiten sagt, dass das Schweigen des Feldes weit verbreitet ist.

**„Zwei Modelle stimmten überein, also ist die Kodierung entschieden."** Zwei Modelle, die Trainingsdaten teilen, teilen ihre Fehler. Die blinde Prüferin in der Liu-Studie bevorzugte maschinelle Kodierung zu 48.5%, und was diese Zahl interpretierbar machte, war eine unabhängige Beurteilung, nicht die Übereinstimmung selbst.

**„Wir können ein proprietäres Modell nicht prüfen, also gibt es nichts zu berichten."** PRISMA-LLM verlangt die Offenlegung der Implementierung als eine von der Evaluationstiefe getrennte Stufe. System, Version, Prompts, was Menschen geprüft haben und wo es versagt hat — all das ist auch für ein geschlossenes Modell berichtbar.

**„Die Ethikkommission wird das nie genehmigen."** Der Modellzugang war in 84.1% der untersuchten Arbeiten proprietär, was heißt, dass studentische Texte in der Regel Ihre Institution verlassen. Erheben Sie nur, was der Bildungszweck braucht, prüfen Sie, ob Lernendendaten die Modelle des Anbieters trainieren, und bevorzugen Sie lokale oder synthetische Daten, wo die Sensibilität hoch ist. [[equity-ethics-pedagogical-safety-research]] behandelt die Pflichten vollständig.

**„Das wird langsamer sein als es von Hand zu machen."** Bei einem kleinen Projekt ist es das oft. Das Argument dafür ruht auf dem Umfang bei Skalierung, und das Argument gegen Übertreibung ruht auf demselben 115-Tage-Bericht.

## Was Sie diese Woche tun können

**1.** Schreiben Sie die Aufgabenliste mit einem Urteil neben jedem Punkt, und legen Sie sie dorthin, wo das ganze Team sie sieht.

**2.** Fügen Sie die Entscheidungsregeln für Graubereiche und das Entscheidungsprotokoll Ihrem Screening-Protokoll hinzu, bevor der nächste Stapel beginnt.

**3.** Wählen Sie eine automatisierte Ausgabe, auf die Sie sich bereits verlassen, und validieren Sie sie gegen ein menschliches Urteil an einer Stichprobe, die Sie noch nicht angesehen haben.

**4.** Lesen Sie das letzte Manuskript, das Sie eingereicht haben, und prüfen Sie jeden Autorennamen in der Referenzliste von Hand.

**5.** Fügen Sie Ihrem Methoden-Template eine Zeile „wo die KI versagt hat" hinzu, damit die Gewohnheit der Offenlegung einmal aufgeschrieben ist.

## Wohin als Nächstes

Die begleitenden Fragen sind [[evaluating-ai-interventions-methods]] dazu, wie man eine Intervention misst, [[reporting-interpreting-aied-research]] zum Berichten des Systems und der eigenen KI-Nutzung und [[research-gaps-aied]] dazu, wo die Literatur dünn ist. [[equity-ethics-pedagogical-safety-research]] behandelt studentische Daten, und [[ai-assisted-educational-research]] ist die vollständige Konzeptseite hinter dieser.
