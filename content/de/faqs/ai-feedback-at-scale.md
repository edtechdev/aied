---
title: "Wie kann mir KI helfen, im Maßstab besseres Feedback zu geben?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
translation_of: faqs/ai-feedback-at-scale
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

# Wie kann mir KI helfen, im Maßstab besseres Feedback zu geben?

Es ist Woche sechs. Sie haben einen Stapel Entwürfe, eine Rubrik, an die Sie glauben, und einen wachsenden Verdacht, dass ein Drittel Ihrer Kommentare überflogen und vergessen wird. Ein Kollege erwähnt, dass ein Werkzeug nun jeden Entwurf innerhalb der Stunde kommentiert. Sie wollen wissen, ob das ein echtes Upgrade ist oder ein schnellerer Weg, Text zu erzeugen, den niemand liest.

**Das Fazit:** KI-Feedback ist es wert, für Abdeckung, Zeitnähe und Konsistenz innerhalb eines schmalen Bands angenommen zu werden – Arbeit auf Sprachebene und rubrikgeleitete Erstbewertungskommentare –, und es ist nur wert angenommen zu werden, wenn Sie gestalten, was um die Kommentare herum geschieht. Reichweite ist der einfache Teil. In [[genai-feedback-design-multisite-experiment|einem cluster-randomisierten Experiment mit 1.176 Studierenden der ersten Semester]] übertrafen reflektive und hybride Designs direkte KI-Kritik bei verzögertem, KI-freiem [[transfer-of-learning|Transfer]]; in [[farrokhnia-genai-feedback-student-revisions-2026|einem randomisierten Aufsatxexperiment mit 70 Studierenden]] erzeugte höherwertiges KI-Feedback keine besseren Überarbeitungen als das einer erfahrenen Lehrkraft. Über die Belege hinweg ist bedeutsamer, was Studierende mit einem Kommentar tun, als wie schnell der Kommentar ankommt, und [[feedback-literacy|Feedbackkompetenz]] – nicht KI-Zugang – trennt die Studierenden, die gewinnen, von denen, die kopieren.

## Die Unterscheidung, die alles entscheidet: Umfang ist nicht Qualität, und geliefert ist nicht gelesen

Zwei Trennungen leisten auf dieser Seite die meiste Arbeit.

**Mehr Feedback ist nicht besseres Feedback.** KI kann jeden Entwurf jede Woche kommentieren; die Menge ist nahezu kostenlos. Qualität ist es nicht. [[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson und Yan (2025)]] machen Promptqualität zum Angelpunkt des Prozesses: vage Prompts erzeugen generische, nutzlose Ausgaben, und generierte Kommentare können halluziniert, voreingenommen oder überlappend sein, was [[evaluative-judgment|Bewertungsurteil]] zurück auf die Leserin oder den Leser schiebt. Kalibrierung ist noch schärfer: in [[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] war GenAI-Feedbackqualität signifikant assoziiert mit der Stärke des ersten Entwurfs eines Studenten, während Lehrkräfte-Feedbackqualität es nicht war – die Lehrkraft kalibrierte konsistenter. Umfang skaliert. Kalibrierung nicht.

**Geliefertes Feedback ist nicht umgesetztes Feedback.** Das ist die teurere Verwechslung. Farrokhnia et al. randomisierten 70 Studierende, die argumentative Aufsätze auf Persisch schrieben, in drei Gruppen. Chain-of-Thought-Prompting erzeugte signifikant höher bewertetes Feedback (M = 12.90) als sowohl Zero-Shot-Prompting (M = 11.25, p = .01) als auch eine erfahrene menschliche Lehrkraft (M = 11.20, p = .008). Die Chain-of-Thought-Gruppe überarbeitete ihre Aufsätze dennoch nicht signifikant mehr als die Lehrkräfte-Feedbackgruppe, die vergleichbare Gewinne erzielte. Besser bewertete Kommentare, dieselbe Überarbeitung. Wenn Ihr Maßstab die Qualität dessen ist, was das Modell schreibt, liest sich das als Gewinn; wenn Ihr Maßstab ist, was sich im Aufsatz verändert hat, nicht.

Wer Feedback umsetzt, hängt von der lernenden Person ab. In [[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths und Lodge (2026)]] bearbeiteten 32 Psychologiestudierende eine 25-minütige, bildschirmaufgezeichnete Aufsatzaufgabe mit uneingeschränktem Zugang zu ChatGPT und sahen die Aufzeichnung danach in einem video-stimulierten Interview. Feedbackkompetenz war der einzige signifikante positive Prädiktor der Aufsatznote (β = 0.46, p = .017); [[feedback-futures-genai|das Editorial des Sonderhefts von Zhan, Wood, Carless und Yan (2026)]] hält fest, dass Häufigkeit der GenAI-Nutzung, [[trust|Vertrauenswürdigkeit der Quelle]] und [[prior-knowledge|Vorwissen]] Leistung nicht vorhersagten. Weniger als ein Drittel der Studierenden verglich KI-Ausgaben gegen eine andere Internetquelle; die Hälfte äußerte absichtliche KI-Vermeidung wegen [[academic-integrity|akademischer Integrität]] oder weil sie den Aufsatz in ihren eigenen Worten wollten; und die meisten erbaten Feedback auf Aufgabenebene, das schlecht auf andere Aufgaben überträgt.

Umsetzung ist außerdem ungleich verteilt. In der universitätsweiten Deakin-Pilotierung, berichtet von [[tubino-adachi-ai-automated-feedback-literacy|Tubino und Adachi (2022)]], war das KI-Werkzeug optional, und die Nutzung lag bei durchschnittlich etwa 13% der Studierenden der ersten Semester und 12% der Graduierten, obwohl fast 4.000 Studierende Zugang hatten. Proaktive, leistungsstarke Studierende nutzten es mehr. Das ist, was „das Werkzeug verfügbar machen" Ihnen einbringt, und deshalb dreht sich der Rest dieser Seite um Design statt Zugang.

## Was KI wirklich gut kann, und wo es aufhört

**Gut: Abdeckung und Konsistenz innerhalb eines schmalen Bands.** Tubino und Adachi berichten jene Pilotierung bei Deakin 2021 mit dem KI-Automatik-Feedbackwerkzeug von FeedbackFruits über 29 Einheiten und fast 4.000 Studierende. Es arbeitet auf Mikroebene an Textmerkmalen – Satzlänge, Interpunktion, Grammatik, Textstruktur – und unterstützt das Lektoratsstadium: die Lehrkraft setzt Parameter, der Student nutzt das Werkzeug unabhängig und erhält zeitnahes, umsetzbares Feedback. Die Arbeitsteilung ist das, was skaliert, nicht das Modell.

**Schlecht: Allgemeinheit, Korrektheit und Kalibrierung.** Dort scheitert es (Zhan et al., 2025), und das Gegenmittel ist ein Prompt, eine Rubrik oder ein Mensch – kein größeres Modell. [[learner-centered-feedback-ai|Aldino et al. (2026)]] fügen lehrkraftseitige Fehlermodi von 21 Hochschullehrkräften hinzu: inkonsistenter Ton (n = 7), potenzielle Fehlinformation (n = 5) und Vertrauensprobleme (n = 5), wobei Überarbeitungsaufwand mit dem Löschen übertriebenen Lobs und generischer Vorschläge verbracht wurde statt mit dem Hinzufügen von Inhalt.

## Ein Einsatzmuster, das standhält

Die Belege stützen eine Form mehr als jede andere: die KI entwirft, der Student bewertet zuerst, und ein Mensch entscheidet.

**Was automatisieren.** Sprachliche Arbeit auf Mikroebene und rubrikgeleitete Erstdiagnosen. Geben Sie dem Modell eine Rubrik und lassen Sie es Schritt für Schritt argumentieren – Farrokhnia et al.s Qualitätsgewinn kam von einem Chain-of-Thought-Prompt, der das Modell durch eine schrittweise Bewertung gegen eine Argumentationsrubrik führte, nicht von einer blanken Anweisung. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen und Yan (2026)]] gaben ihrer GenAI-Gruppe ebenfalls ChatGPT-4o mit vorab trainierten Rubriken und Prompt-Leitlinien, was die Ausgabe gegen angegebene Kriterien prüfbar machte. Rubrikreferenzierte Generierung ist automatisierbar; Urteil nicht.

**Was menschlich behalten.** Die abschließende Nachricht, den Ton, und alles, was zur Akte wird. [[becerra-aicofe-feedback-2026|Becerra, Palma und Cobos (2026)]] beschreiben AICoFE, das drei unabhängig feinabgestimmte Modelle (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) über Rubrikwerten und qualitativen Beobachtungen laufen lässt, um unabhängige Kommentarentwürfe zu erzeugen, und dann die Lehrkraft die abschließende Nachricht durch Auswahl von Sätzen oder Absätzen komponieren lässt, mit einer Legende, die zeigt, welches Modell was beitrug. KI ist Entwurfsgenerator, nicht abschließende Lieferantin. Aldino et al. finden dasselbe „unterstützen, aber verifizieren"-Muster: die ML-Komponente markierte am häufigsten **Learning Objective erfüllt** als fehlend (20 von 21 Lehrkräften hatten es ausgelassen; 16 akzeptierten) und **Lehrkraft-Student-Beziehung** (14 ausgelassen; 12 akzeptierten), wobei Lehrkräfte jeden Vorschlag nach professionellem Urteil entschieden.

**Wie sequenzieren.** Stapeln Sie Quellen nicht nebeneinander; staffeln Sie sie. In [[genai-feedback-design-multisite-experiment|Ateş' (2026)]] Experiment verlangte die reflektive Bedingung Selbstevaluation vor KI-Kritik, und die hybride lief Selbstevaluation → Peer-Feedback → GenAI-Kritik. Tubino und Adachi schlagen aus demselben Grund Vorlagen für drei Entwurfsphasen vor. Kombinieren Sie KI mit Peer-Feedback, statt das eine durch das andere zu ersetzen: Gu et al. führten zwei parallele Englischkurse (N = 118 Studierende der ersten Semester in China; GenAI n = 56, Peer n = 62) über drei Selbstevaluationszyklen in einem Semester durch, und GenAI-Scaffolding verbesserte Feedbackkompetenz leicht, aber signifikant gegenüber menschlichem Peer-Review (ANCOVA p = 0.049, ηp² = 0.03). GenAI-Studierende verfeinerten Prompts iterativ und verifizierten oder hinterfragten unzutreffende Ausgaben, während Peer-Gruppen-Studierende Quellen nach sozialer Bequemlichkeit wählten und ihr Bewertungsurteil durch Freundschaftsbias verzerrt war. Peer-Review behielt deutlichen Wert für Publikumsbewusstsein, weshalb die Autoren mehrstufige Designs mit anonymem Peer-Feedback vorschlagen.

**Wie es für Studierende rahmen.** Als vorläufige Meinung, die zu beurteilen ist, nicht als Antwort, die zu kopieren ist. Sagen Sie offen, dass Modellkommentare halluziniert, voreingenommen oder überlappend sein können und dass dem Studenten die Überarbeitung gehört. Das Paar IELTS-Schreibender in Zhan et al. zeigt die Extreme: ein Student mit niedriger Literalität und vagem Prompt erhielt generisches Feedback, vertraute oder überkopierte es und engagierte sich oberflächlich; ein Student mit hoher Literalität schrieb einen kriterienreferenzierten Prompt, hakte nach, prüfte Quellen gegen und überwachte Überarbeitungen. Der Unterschied war Unterweisung und Gewohnheit, nicht Werkzeugzugang.

**Wie die Ausgabe prüfen.** Vergleichen Sie eine Stichprobe generierter Kommentare gegen Ihr eigenes Lesen derselben Entwürfe, und achten Sie auf die oben benannten Fehlermodi – Ton, Fehlinformation, übertriebenes Lob, Überlappung. In der Deakin-Pilotierung koexistierten positive Durchschnittsbewertungen mit von Studierenden gemeldeten Fehlern, sodass Zufriedenheit ein schwaches Qualitätssignal ist; eine Smiley-Befragung ist kein Genauigkeitsbeleg.

## Fehlermodi, mit Zahlen

**Design, nicht Verfügbarkeit, treibt den Effekt.** Der stärkste Designbeleg ist ein multiseitiges, cluster-randomisiertes, longitudinales Feldexperiment: 1.176 Studierende der ersten Semester in 48 Sektionen über 4 Universitäten und 3 Wissenschaftsdomänen, randomisiert auf Sektionsebene in Peer-only-, direkte-GenAI-, reflektive-GenAI- und hybride Bedingungen. Hybrid erzeugte die höchsten Gewinne in Argumentqualität und den klarsten Vorteil bei konzeptuellem Lernen. Reflektive und hybride erzeugten beide stärkere Feedbackumsetzung und [[self-regulated-learning|selbstreguliertes Lernen]] als direkte GenAI, und beide übertrafen es bei verzögertem, KI-freiem Transfer. Direkte GenAI verbesserte unmittelbare Argumentqualität durchaus gegenüber Peer-Feedback – der Vorteil, den es hat –, aber mit schwächerem Transfer. Bildungswirksamer Wert hängt deshalb weniger von KI-Zugang ab als davon, ob die Feedbackumgebung [[agency|Handlungsfähigkeit der lernenden Person]], Bewertungsurteil und Eigenverantwortung während der Überarbeitung erhält: direkte Kritik lädt zu passiver Übernahme ein, während reflektive und hybride Designs den Studenten zwingen, sie zu deuten, gegen Kriterien zu vergleichen, ihre Relevanz zu beurteilen und dann zu überarbeiten. Andere Effektstärken mäßigen das. Gu et al.s Vorteil gegenüber Peer-Review war klein, und sie lesen ihn als echt, aber nicht allein transformativ – Lehrkräfte-Scaffolding, Prompt-Leitlinien und Arbeitsblätter leisteten die unterstützende Arbeit. Die Rahmung des Editorials ist, dass GenAI und menschliches Feedback nur komplementär sind, wenn die Komplementarität spezifiziert wird, durch Sequenzierung, Vergleich, Editieren und Governance statt durch Nebeneinanderstellenlassen zweier Quellen.

**Übervertrauen an beiden Enden der Pipeline.** Studierende können bei der Umsetzung von Feedback unkritisch überabhängig sein, und Lehrkräfte können sich Vorschlägen übermäßig fügen. Lehrkräfte-Feedback wird von Studierenden außerdem oft als negativer oder riskanter wahrgenommen als GenAI-Feedback, was die übliche Qualitätsannahme umkehrt. Behandeln Sie Feedbackkompetenz als Voraussetzung statt als Annahme: der stärkste Prädiktor in Hawkins et al. war die Feedbackkompetenz der lernenden Person, nicht wie oft sie KI nutzten.

**Arbeitsbelastung, die sich verlagert statt schrumpft.** [[ai-save-instructor-time|Die Arbeitsbelastungsfrage]] ist die am häufigsten weggesprochene. Gefragt, was ihnen das KI-Feedbackwerkzeug gab, nannten 21 Lehrkräfte Zeitersparnis (n = 2) nur selten, und nannten Reflexion (n = 14), verbesserte Sprache und Struktur (n = 11) und Identifikation fehlender Komponenten (n = 10) weit häufiger. Der sichtbare Gewinn ist ein Entwurf und eine diagnostische Aufforderung, kein fertiger Kommentar. Was stattdessen erscheint, ist Prüf-, Kalibrierungs- und Verifikationsarbeit. Zwölf der 21 Lehrkräfte nahmen weitere Überarbeitungen auf Satzebene vor; Editieren (f = 32) und Entfernen (f = 27) dominierten, während Hinzufügen selten war (f = 8). Das dominante Muster war Tonkalibrierung – Lob nach unten editieren (f = 11), Vorschläge entfernen (f = 9), Ermutigung entfernen (f = 8) –, um Authentizität und professionelle Stimme zu schützen, und Überarbeitungen häuften sich in der relationalen Dimension, besonders Lehrkraft-Student-Beziehung (f = 24). Lehrkräfte nannten das Bedürfnis nach menschlichem Editieren (n = 9), inkonsistenten Ton (n = 7), Fehlinformation (n = 5) und Vertrauensprobleme (n = 5); Lehrkräfte mit mehr als fünf Jahren Erfahrung berichteten mehr davon, während weniger erfahrene Lehrkräfte das Scaffolding schätzten – ein Grund zu beobachten, ob Novizen, die sich KI-Vorschlägen fügen, weniger unabhängiges Urteil aufbauen. Die Regel des Editorials: GenAI verteilt Lehrkräftearbeit um statt sie zu entfernen, und schlecht gestaltete Werkzeuge können sie erhöhen.

## Drei Einwände, ernst genommen

**„KI-Feedback ist nicht persönlich."** Oft wahr, und es ist genau der Grund, das letzte Wort menschlich zu behalten. AICoFE existiert, weil generische Modellprosa nicht das ist, was ein Student erhalten sollte – die Lehrkraft wählt, editiert und signiert die abschließende Nachricht. Die 21 Lehrkräfte in Aldino et al. schrieben Ton aus demselben Grund um, löschten übertriebenes Lob und strichen Vorschläge, die nicht zu ihrer Beziehung zum Studenten passten. Personalisierung ist in diesem Design nicht Aufgabe des Modells; sie ist Ihre, und das Modell leistet die Vorarbeit.

**„Meine Studierenden werden Feedback ohnehin nicht lesen."** Sie lesen weniger, als wir hoffen, und die Belege sagen, das Gegenmittel sei Design, nicht Umfang. Umsetzung in der Deakin-Pilotierung lag bei etwa 13% der Studierenden der ersten Semester und 12% der Graduierten. Farrokhnia et al.s höher bewertete KI-Kommentare erzeugten nicht mehr Überarbeitung als Lehrkräftekommentare. Was den Ausschlag gab, war Sequenzierung, die Engagement erzwingt – Selbstevaluation zuerst, dann Peer-Feedback, dann KI-Kritik –, plus drei Überarbeitungszyklen über ein Semester, die messbare Feedbackkompetenz-Unterschiede erzeugten. Mehrfache Wiedereinreichungen am selben Tag sind eine brauchbare Spur, ob Studierende sich überhaupt engagierten.

**„Dafür zahlen Studierende nicht."** Dann lassen Sie die KI nicht die einzige Stimme sein, die sie von Ihnen hören. Die vertretbare Version des Werkzeugs ist die, in der Studierende mehr Feedbackmomente erhalten, während Sie Ihre Stunden für die urteilsintensiven Teile aufwenden: das letzte Wort, die Kalibrierung, die Kommentare, die Ihre Autorität tragen. Was Studierende bei sorglosem Einsatz verlieren, ist nicht Ihre Präsenz, sondern die Kohärenz zwischen Kriterien, Kommentaren und Ergebnis. Spezifizieren Sie die Komplementarität – Sequenzierung, Vergleich, Editieren, Governance –, und der Einwand löst sich auf; lassen Sie zwei Quellen nebeneinander stehen, und er tut es nicht.

## Diese Woche

**1.** Sortieren Sie Ihren eigenen letzten Kommentarsatz in Korrekturen auf Sprachebene und Urteilsentscheidungen. Nur die erste Kategorie ist ein Automatisierungskandidat.

**2.** Schreiben Sie den rubrikreferenzierten, schrittweisen Prompt, den Sie einem Modell geben würden, und testen Sie ihn gegen drei Entwürfe, die Sie bereits bewertet haben.

**3.** Vergleichen Sie die Ausgabe gegen Ihre eigenen Kommentare und protokollieren Sie, wo das Modell generisch, falsch oder schmeichelnd war.

**4.** Staffeln Sie eine Aufgabe als Selbstevaluation → Peer-Feedback → KI-Kritik, und sagen Sie den Studierenden, die KI sei eine vorläufige Meinung, die sie herausfordern sollen.

**5.** Verlangen Sie einen Vergleich gegen eine zweite Quelle oder gegen die Kriterien – weniger als ein Drittel der Studierenden tut das unaufgefordert.

**6.** Budgetieren Sie die Prüfzeit, die Sie tatsächlich für Ton und Löschung aufwenden werden, und vergleichen Sie sie mit dem, was Sie freigemacht haben.

**7.** Achten Sie auf die Experten-Novizen-Spaltung. Wenn erfahrene Kollegen mehr Probleme mit der Ausgabe des Werkzeugs berichten als Sie, ist das eine Information über Ihre eigene Kalibrierung.

**8.** Entscheiden Sie, welches Ergebnis zählt, und messen Sie das: Nutzungsraten, Überarbeitungsspuren und verzögerte unbegleitete Leistung – nicht Zufriedenheitsbewertungen. Die etwa 13% und 12% der Deakin-Pilotierung sind eine brauchbare Baseline, und AICoFEs Kurationsprotokollierung modelliert die Lehrkraftseite: protokollieren Sie, wie viel des abschließenden Feedbacks vom Modell kam und wie viel Sie geändert haben.

**Wo diese Seite sitzt.** [[feedback]] ist das Dachkonzept für das ganze System – Bereitstellung, Schleife, Umsetzung und Assessmentkontext –, und [[ai-feedback-quality|KI-Feedbackqualität]] deckt ab, was generierte Kommentare zutreffend, brauchbar, zeitnah und pädagogisch stimmig macht. Diese Seite ist die praktische Mitte: welche Kombinationen jener Teile im Maßstab besseres Feedback erzeugen. Fragen dazu, was eine Note bedeuten soll, wenn KI beteiligt ist – Konstruktsubstitution, authentifizierte Prozessbelege, Integritätsregeln –, gehören zu [[redesign-assessment-ai-era|der Neugestaltung von Assessment im KI-Zeitalter]] und [[assessment-validity|Assessmentvalidität]] und nicht hierher.

Für den Sonderfall Schreibunterweisung siehe [[writing-instruction-ai-best-practices|Best Practices für Schreibunterweisung im Kontext von KI]].
