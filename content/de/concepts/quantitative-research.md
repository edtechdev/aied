---
title: Quantitative Forschung
created: "2026-08-24T02:05:00-04:00"
updated: "2026-10-30T23:30:00-04:00"
type: concept
assessment: [educational-measurement]
research_method: [survey, experiment]
confidence: high
methods: [quantitative-research, research-methods-aied]
translation_of: concepts/quantitative-research
source_updated: "2026-10-28T15:48:01-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
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
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Quantitative Forschung** — die Familie empirischer Methoden, die *numerische* Daten erheben und analysieren, um Muster zu beschreiben, Beziehungen zu testen und kausale Effekte zu schätzen. In der [[ai-education|KI in der Bildung]] quantifizieren quantitative Methoden, ob und wie KI-Werkzeuge [[learning-gains|Lernoutcomes]], [[student-engagement|Engagement]], [[motivation|Motivation]] und [[self-efficacy|Selbstwirksamkeit]] beeinflussen, und modellieren die psychologischen und verhaltensbezogenen Mechanismen der KI-Nutzung. Sie liefern die Breite, Präzision und kausale Schlussfolgerungskraft, die [[qualitative-research|qualitative Methoden]] für Tiefe und Kontext eintauschen.

## Fragen zum Nachdenken

- „Studierende, die einen KI-Tutor nutzen, punkten höher" — ist das vor der Lektüre eine Behauptung über Kausalität oder Korrelation, und welches einzelne Stück Evidenz würde eine in die andere verwandeln?
- Eine Querschnitt-Erhebung kann ein komplexes mediationales Modell testen und dennoch nie Kausalität etablieren. Warum könnten zwei Variablen in einer Erhebung korrelieren, selbst wenn keine die andere verursacht? Können Sie an eine Weise denken, in der man in der Bildung durch solche Korrelation echt irregeführt werden könnte?
- Quantitative Instrumente sind nur so gut wie das, was sie messen – und die Seite hält fest, dass Instrumente das falsche Konstrukt messen können. Wenn Sie eine Selbstauskunfts-Erhebung zu „Konfidenz" oder „Engagement" ausfüllen, was könnte sie stattdessen tatsächlich erfassen, und wie würden Sie das herausfinden?
- Ein RCT weist Lernende zufällig Bedingungen zu, um einen kausalen Effekt zu schätzen. Was macht zufällige Zuweisung mächtig, und welche praktischen und ethischen Probleme entstehen, wenn die „Behandlung" ein möglicherweise hilfreiches KI-Werkzeug ist, das manchen Studierenden vorenthalten wird?
- Longitudinale Designs verfolgen dieselben Lernenden über Zeit – unverzichtbar, um KI-aufgeblähte Leistung von dauerhaftem Lernen zu unterscheiden. Warum würde eine einzelne Momentaufnahme hoher Punktzahlen nicht offenbaren, ob Lernen tatsächlich stattfand?
- Quantitative Arbeit liefert Breite und kausale Kraft; qualitative Arbeit liefert Tiefe und Bedeutung. Wo haben Zahlen allein Sie Ihrer Ansicht nach vor der Lektüre der Paarung am wahrscheinlichsten über eine Lernbehauptung irregeführt, und welche Methode würden Sie hinzufügen, um das zu prüfen?

## Einführung

Quantitative Forschung umspannt deskriptive Designs (Prävalenz und Muster messen), korrelative/beobachtende Designs (Beziehungen zwischen Variablen testen) sowie experimentelle und quasi-experimentelle Designs (kausale Effekte schätzen). Was sie eint, ist die systematische Reduktion von Beobachtungen auf Zahlen, analysiert mit Statistik, und die Priorität, die auf **Reliabilität, Validität und Generalisierbarkeit** gelegt wird – den zentralen Anliegen der [[educational-measurement|Bildungsmessung]].

## Wichtige quantitative Ansätze

### Erhebungs- und korrelative Forschung
Querschnitt-Erhebungen messen selbstberichtete Einstellungen, Wahrnehmungen, Motivation, [[self-efficacy|Selbstwirksamkeit]] und Technologieakzeptanz, oft modelliert mit Regression oder Strukturgleichungsmodellierung (SEM/PLS-SEM), um hypothetische Beziehungen und Mediatoren zu testen. Diese dominieren den Korpus der Wissensbasis, besonders für Akzeptanz-, Motivations- und psychologische-Mechanismus-Fragen. [[acceptance-ai-english-tools-2026|Akzeptanz KI-gestützter englischer Werkzeuge]] baut auf dem [[technology-acceptance-model|TAM]] mit SEM auf; [[tian-genai-learning-adoption-pathways-2026|GenAI-Adoptionspfade]] nutzen PLS-SEM, fsQCA und Importance-Performance-Mapping; [[teacher-education-ai-literacy-sdt-2026|KI-Kompetenz von Lehrkräften]] nutzt faktorvalidierte Erhebungen, verankert in der [[self-determination-theory|Selbstbestimmungstheorie]].

- **Stärken:** große Stichproben; breite, kostengünstige Abdeckung; testet komplexe mediationale Modelle; praktikabel für Einstellungen, die schwer zu beobachten sind.
- **Grenzen:** Querschnitt-Daten können keine Kausalität etablieren; Selbstauskunfts-Bias; Convenience-Sampling begrenzt Generalisierbarkeit; Mediatoren aus Kovarianz inferiert, nicht aus Manipulation. Siehe [[self-report-measures|Selbstauskunftsmaße]] für die instrumentenseitige Behandlung dieser Grenzen.
- **Ein saturiertes Mediationsmodell kann seine eigene Ordnung nicht prüfen.** Eine Ein-Wellen-Befragung von 1.020 Pflegestudierenden zerlegte einen Gesamteffekt von 1.36 in einen direkten von 0.92 und einen indirekten von 0.44 über selbstreguliertes Lernen, 32,35% des Gesamten, mit einem Modell, das so viele freie Parameter hat wie beobachtete Kovarianzen und die Daten daher per Konstruktion reproduziert ([[li-nursing-genai-interaction-self-regulated-learning-2026|Li et al. (2026)]]).
**Ein nahezu null Indirekteffekt kann zwei lebendige Pfade verbergen.** In einer Selbstauskunfts-Welle von 568 Designstudierenden verlief der indirekte Zusammenhang mit 0.0929 über Promotion-Fokus und mit -0.0884 über Prevention-Fokus, zusammen 0.0045, während der direkte Pfad 98,7% des Gesamten trug ([[wang-ai-disruption-design-innovation-competence-2026|Wang et al. (2026)]]).

### Experimentelle und quasi-experimentelle Forschung
Experimente weisen Lernende zufällig Bedingungen zu (z. B. KI-Tutor gegenüber menschlichem Tutor, oder KI-gescaffoldet gegenüber unassistiert), um kausale Effekte auf Ergebnisse zu schätzen. **Randomisierte kontrollierte Studien ([[rct|RCTs]])** sind der Goldstandard für interne Validität. [[access-not-enough-ai-tutoring-2026|Eine randomisierte Feldstudie zu menschlicher Unterstützung plus KI-Tutoring]] und [[genai-can-harm-teaching-rct-2026|ein RCT zu generativer KI im Unterricht]] nutzen Zuweisung, um kausale Effekte zu isolieren. **Quasi-experimentelle** Designs (Pre/Post, gematchte Gruppen ohne Randomisierung) sind in intakten Klassenräumen praktikabler, aber schwächer bei Kausalbehauptungen.

[[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] wählen stattdessen ein Within-Subject-Crossover: jede und jeder Studierende begegnet demselben Physikinhalt zweimal, einmal in einer Active-Learning-Stunde im Klassenraum und einmal durch den eigenen KI-Tutor des Kurses, mit Pre- und Post-Tests um jede davon, sodass jede lernende Person ihre eigene Kontrolle ist und Zwischenpersonen-Unterschiede sich aufheben.

- **Stärken:** stärkste kausale Schlussfolgerung; saubere Ergebnismessung; unterstützt Effektstärkenschätzung und Wirksamkeitsbehauptungen.
- **Grenzen:** kostspielig und langsam; künstliche Bedingungen reduzieren ökologische Validität; sich schnell verändernde KI-Werkzeuge datieren Experimente schnell; kleine Stichproben unterpowern die Detektion von Effekten; ethische Einschränkungen beim Vorenthalten hilfreicher Werkzeuge.
- **Eine gruppenrandomisierte Zugangsstudie braucht eine Übernahmeprüfung.** Weil etwa 15% der Studierenden in behandelten Klassen den Tutor überhaupt nutzten, spiegelt die Intent-to-Treat-Schätzung der Studie die Wirkung der Einführung des Werkzeugs wider — einschließlich der damit verbundenen Erlaubnis und Substitution — statt den isolierten Effekt einzelner Sitzungen ([[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]]).

### Longitudinale Forschung
Longitudinale Designs verfolgen dieselben Lernenden über Zeit und erfassen Veränderung, Wachstum und dauerhaftes Lernen, das Messung zu einem einzigen Zeitpunkt verpasst. [[ai-lms-middle-school-longitudinal|Eine longitudinale LMS-Studie]] verfolgt Studierende über ein Schuljahr. Longitudinale Designs sind unverzichtbar, um KI-aufgeblähte Leistung von [[genai-performance-vs-learning|dauerhaftem Lernen]] zu unterscheiden.


Zwischen-Datensatz-Vergleiche brauchen einen fixierten Arbeitspunkt: eine strukturelle Prüfung synthetischer Bildungsdaten fand, dass die Analyse jedes Datensatzes an seiner eigenen Schwelle einen Kontrast umkehrte, der an einem geteilten Punkt hielt, und dass ihr Surrogat-Vergleich nur die synthetischen Daten und Permutationen ihrer selbst brauchte – eine permutationsbasierte Null statt einer absoluten Schwelle ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).

### Rechnerische und psychometrische Quantifizierung
Quantitative Methoden schließen außerdem die direkte Messung von Konstrukten über Instrumente ein – die Domäne der [[educational-measurement|Bildungsmessung]] und der [[item-response-theory|Item-Response-Theorie]]. Das [[jin-glat-genai-literacy-assessment|GLAT]] der Wissensbasis ist ein 20-Item-quantitatives Instrument, validiert mit IRT; [[educational-measurement|Messinstrumente]] über [[ai-literacy|KI-Kompetenz]], Akzeptanz und Selbstwirksamkeit hinweg liefern die validierten Skalen, auf denen Erhebungs- und Experimentalforschung angewiesen sind.

Bibliometrische Analyse ist eine weitere quantitative Familie: [[sriram-ethical-ai-medical-education-bibliometric-2026|Sriram et al. (2026)]] kartieren 1.403 [[medical-education|Medizinische und Gesundheitsberufebildung]]-Publikationen über Länder-, Institutions- und Schlagwort-Kookkurrenznetzwerke und lesen die Form einer Literatur, statt ihre Studien zu bewerten — was ihre Schlussfolgerung, dass [[governance|KI-Governance]]-Arbeit nicht mit dem Capability-Testing Schritt gehalten hat, zu einer Behauptung über das Feld macht und nicht über Lernen.

## Wie quantitative Forschung in der Wissensbasis erscheint

- **Wirksamkeit und Kausalbehauptungen.** RCTs und Quasi-Experimente testen, ob KI-Werkzeuge Lernen verbessern ([[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention|Adaptives Pretesting und Retention]]).

- **Präregistrierung und Replikation.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] nennen ihre Hypothesen und ihren Analyseplan vor der Studie und poolen den randomisierten Vergleich über zwei Semester und zwei große asynchrone Kurse hinweg, sodass die Schätzung auf einem fixierten Plan und einer Replikation ruht statt auf einer einzelnen Stichprobe.
- **Mechanismen-Modellierung.** SEM/PLS-SEM testen Mediatoren und Moderatoren der KI-Adoption und des Lernens ([[tian-genai-learning-adoption-pathways-2026]], [[acceptance-ai-english-tools-2026]], [[teacher-education-ai-literacy-sdt-2026]]).

- **Panel-Modelle, die Within- von Between-Personen-Effekten trennen.** [[genai-reliance-human-agency-collaborative-learning-2026|Wu und Lu (2026)]] schätzen ein Random-Intercept-Cross-Lagged-Panel-Modell über drei Wellen kollaborativer Schreibdaten, das stabile Unterschiede zwischen Studierenden von within-person zeitlicher Ordnung trennt – die Unterscheidung, die es erlaubt, erhöhte Abhängigkeit als einem Abfall wahrgenommener Handlungsfähigkeit vorausgehend zu lesen statt sie bloß zu begleiten.
- **Messung und Skalenentwicklung.** Die Wissensbasis dokumentiert quantitative Instrumentenentwicklung und -validierung ([[jin-glat-genai-literacy-assessment|GLAT]], [[educational-measurement|Bildungsmessung]]).

- **Leistung gegenüber dauerhaftem Lernen.** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]] randomisiert 120 Studierende auf KI-assistiertes oder traditionelles Lernen und misst Retention mit einem Überraschungs-20-Fragen-Test 45 Tage nach der Intervention, deshalb ist das Ergebnis, was die Verzögerung überlebte, statt was am Ende der Sitzung erschien.

## Stärken und Grenzen

- **Stärken:** Präzision und statistische Power; Generalisierbarkeit auf definierte Populationen; kausale Schlussfolgerung (mit experimentellen Designs); effiziente Großstichproben-Abdeckung; kumulativ und über Studien hinweg vergleichbar.
- **Grenzen:** erfasst, was messbar ist, und verpasst oft Prozess, Bedeutung und Kontext (siehe [[qualitative-research|qualitative Forschung]]); Selbstauskunfts-Bias; Instrumente können das falsche Konstrukt messen (siehe [[educational-measurement|Messprobleme]]); Korrelation ohne Kausalität; kann künstlich und langsam sein relativ zur KI-Veränderung.

Quantitative und [[qualitative-research|qualitative]] Methoden sind Komplemente – quantitative Arbeit liefert Breite und kausale Kraft, qualitative Arbeit liefert Tiefe und Bedeutung. [[mixed-methods-research|Mixed-Methods-Designs]] kombinieren sie. Siehe [[research-methods-aied|Forschungsmethoden in der KI-Bildung]] für den vollen Methodenvergleich und die Kontraste zwischen experimentellen, Erhebungs-, qualitativen und anderen Designs.

## Verbreitete Fehlvorstellungen

- **„Eine Intent-to-Treat-Schätzung beschreibt, was das Werkzeug tut."** In einer gruppenrandomisierten Zugangsstudie, in der **etwa 15% der Studierenden in behandelten Klassen den Tutor überhaupt nutzten**, spiegelt die ITT-Schätzung **den Effekt der Einführung** des Werkzeugs wider statt den Effekt seiner Nutzung. Geringe Übernahme macht aus einer ITT-Zahl eine Aussage über Implementierung, und sie als Werkzeugeffekt zu berichten überzeichnet, was gemessen wurde.
- **„Leistung bei der Aufgabe ist das Ergebnis."** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]] randomisiert **120 Studierende** auf KI-assistiertes oder traditionelles Lernen und misst **Retention** — das Design, das unmittelbare Leistung von dauerhaftem Lernen trennt. Eine Studie, die bei der Aufgabe endet, hat die leichtere Größe gemessen.
- **„Vergleiche zwischen Datensätzen sind unkompliziert."** Eine strukturelle Prüfung synthetischer Bildungsdaten fand, dass **die Analyse jedes Datensatzes an seiner eigenen Schwelle einen Kontrast umkehrte, der an einem geteilten Arbeitspunkt hielt**. Das Vorzeichen des Vergleichs hing von einer analytischen Wahl ab, und genau diese Art Fragilität soll ein vorab registrierter Arbeitspunkt verhindern.

## Verbundene Konzepte

- [[research-methods-aied]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[rct]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[technology-acceptance-model]]
- [[self-report-measures]]

## Verbundene Artikel

- [[access-not-enough-ai-tutoring-2026]] — Eine randomisierte Feldstudie zu menschlicher Unterstützung plus KI-Tutoring
- [[genai-can-harm-teaching-rct-2026]] — Generative KI kann Unterricht schaden: ein RCT
- [[acceptance-ai-english-tools-2026]] — Akzeptanz KI-gestützter Werkzeuge für das Englischlernen
- [[tian-genai-learning-adoption-pathways-2026]] — Adoptionspfade für generative KI (PLS-SEM, fsQCA)
- [[teacher-education-ai-literacy-sdt-2026]] — KI-Kompetenz von Lehrkräften über die Selbstbestimmungstheorie
- [[jin-glat-genai-literacy-assessment]] — GLAT: ein IRT-validierter GenKI-Kompetenztest
- [[ai-lms-middle-school-longitudinal]] — Eine longitudinale KI-integrierte LMS-Studie
- [[adaptive-pretesting-retention]] — Adaptives Pretesting und Retention
- [[synthetic-educational-data-structural-fidelity-2026]] — Was Treuemetric-Maße verfehlen: eine strukturelle Prüfung synthetischer Bildungsdaten
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Eine gruppenrandomisierte Zugangsstudie braucht eine Übernahmeprüfung
- [[sriram-ethical-ai-medical-education-bibliometric-2026]] — Bibliometrische Analyse ist eine weitere quantitative Familie: Sriram et al.

- [[li-nursing-genai-interaction-self-regulated-learning-2026]] — Nutzung generativer KI und zwischenmenschliche Bildunginteraktion unter Pflegestudierenden: selbstreguliertes Lernen als statistischer Mediator

- [[wang-ai-disruption-design-innovation-competence-2026]] — Bewusstsein für technologische KI-Disruption, Design-Thinking-Mindset und Designinnovationskompetenz unter Designstudierenden
