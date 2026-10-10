---
title: "Rechtliche Fragen und Risiken"
created: "2026-09-18T05:40:00-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [academic-integrity, reducing-ai-misuse]
assessment: [ai-detection, assessment-validity, remote-proctoring]
institutions: [educational-policy-ai, governance, regulation]
ethics: [accessibility, ai-use-disclosure, equity-in-ai-education, hallucination-risk, privacy]
pedagogy: [professional-training]
discipline: [legal education]
level: [higher ed]
audience: [administrators, policymakers, institutions, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-issues-and-risks
source_updated: "2026-09-30T07:29:37-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Rechtliche Fragen und Risiken** – das Risiko, das Institutionen, Personal und Studierende eingehen, wenn [[generative-ai|generative KI]] in der Bildung schlecht gesteuert wird: ein Studierender, der aufgrund eines Detektor-Scores zu Unrecht des Schummelns bezichtigt wird, ein Prüfungsaufsichtssystem, das mehr beobachtet und aufzeichnet, als das Assessment erfordert, eine zu weit gefasste Regel, die ein assistives Werkzeug bestraft, oder eine Politik, die zu vage ist, um konsistent durchgesetzt zu werden. Das Risiko ist nicht eine Rechtsfrage, sondern mehrere, die zusammen ankommen –, evidentielle (ob die Anschuldigung überhaupt belegt werden kann), vertragliche und prozedurale (ob die Einrichtung ihren eigenen Regeln folgte und dem bzw. der Studierenden eine faire Anhörung gab), gleichheitsbezogene (ob die Regel behinderte oder nicht-muttersprachliche Studierende belastet) und datenschutzbezogene (was die Überwachung sammelte und wo es gespeichert wurde). Es ist von [[academic-integrity|akademischer Integrität]] verschieden, die der Verhaltensrahmen ist, der durchgesetzt wird: Diese Seite handelt davon, was passiert, wenn jene Durchsetzung angefochten wird.

## Fragen zum Nachdenken

- Detektionswerkzeuge können Autorschaft nicht verlässlich identifizieren. Wenn das Instrument den strittigen Fakt nicht feststellen kann: Worauf ruht ein Fehlverhaltensfall dann tatsächlich?
- Prüfungsaufsicht- und KI-Detektionsdaten werden im großen Maßstab erzeugt und unbegrenzt aufbewahrt. Wer trägt das Rechtsrisiko für diese Daten, die Einrichtung oder ihr Anbieter?
- Wenn eine Politik „die Nutzung von KI“ verbietet, ohne [[wright-transcription-not-generation-2026|Transkription von Generierung zu unterscheiden]], schützt die Regel dann Integrität oder bestraft sie eine Behindertenanpassung?

## Einführung

Die Evidenz der Wissensbasis zu diesem Thema ist prozedural statt juristisch. Sie dokumentiert, was Institutionen als Beleg behandeln, wie Anschuldigungsverfahren funktionieren, wie unverlässlich die Instrumente sind und was Überwachung sammelt; sie dokumentiert noch keine Prozessergebnisse. Diese Lücke sollte offen benannt statt mit selbstsicheren Behauptungen gefüllt werden: Die Fälle, die diese Fragen entscheiden würden, sind überwiegend nicht berichtet, verglichen oder noch in internen institutionellen Verfahren.

Was die Literatur stützt, ist eine Beschreibung der Fehlermodi, die Rechtsrisiko erzeugen. Das wiederkehrende Muster ist, dass die eigenen Instrumente und Verfahren der Institution, nicht eine böswillige Anklägerin bzw. ein böswilliger Ankläger, sie in Risiko bringen: ein probabilistischer Score, der als Feststellung behandelt wird, eine Regel, die in der Absicht klarer ist als im Geltungsbereich, ein System, das Daten sammelte, nach denen niemand fragte, und eine Anhörung, die annahm, der technische Beleg brauche keine Prüfung.

## Wo das Risiko sich konzentriert

### Zu-Unrecht-Anschuldigung und fehlerhafte Belege

[[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] analysierten tatsächliche Akten zu Anschuldigungen des Fehlverhaltens mit generativer KI und sortierten die von Institutionen genutzten Belege in Kategorien: systemaufgezeichnete Verhaltensspuren, die nur in beaufsichtigtem oder überwachtem Assessment verfügbar sind, Prozessbelege wie Entwürfe, Betreuungssitzungen und Präsentationen, wo diese Praktiken existieren, und Belege, die von der Untersuchung selbst erzeugt werden. Zwei Dinge folgen für das Rechtsrisiko. Erstens ist in unbetreuten Einreichungen die systemaufgezeichnete Kategorie leer, was Fälle auf schwächere Kategorien drängt. Zweitens halten sie fest, dass Prinzipien natürlicher Gerechtigkeit erfordern, dass ein bzw. eine Studierende über die Anschuldigung informiert wird und vor jeder Feststellung Gelegenheit zur Reaktion erhält, Pflichten, die in australischen Regulierungsstandards (Department of Education, 2021; TEQSA, 2025) ebenso kodifiziert sind wie in hoch angesehener Politik zur akademischen Integrität. Die Gelegenheit zur Reaktion ist typischerweise ein Untersuchungstreffen oder ein Panel-Interview, und was der bzw. die Studierende sagt, wird Teil der Beleglage –, was bedeutet, dass prozedurale Fehler, nicht nur evidentielle, der Ort sind, wo ein Fall verwundbar wird.

Das evidentielle Problem sitzt darunter. Detektor-Ausgabe ist der am häufigsten herangezogene und am wenigsten tragfähige Beleg. [[hadra-ai-detector-accuracy-efl-2026|Hadra et al. (2026)]] testeten Turnitin und Originality auf einem balancierten Korpus von 192 Texten und fanden Gesamtgenauigkeiten von 0,69 bzw. 0,61, wobei beide bei hybrider menschlicher KI-Schreibarbeit schlecht abschnitten –, der Form, die in einer echten Anschuldigung am wahrscheinlichsten erscheint –, und die Genauigkeit mit der Textlänge, bei wissenschaftlichem Schreiben und mit einer grenzwertigen Tendenz, von EFL-Studierenden geschriebene menschliche Arbeit als KI fehlzuklassifizieren, weiter sank. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer et al. (2026)]] kommen aus einem anderen Korpus und Werkzeugsatz zum selben Schluss, und [[bassett-ai-detectors-education-2026|Bassett et al.]] machen den strukturellen Punkt, dass keine Schwelle das Problem löst: Ein Detektor, der auf Fangen von KI-Nutzung eingestellt ist, wird menschliche Arbeit markieren, und einer, der auf Schonen menschlicher Arbeit eingestellt ist, wird KI-Nutzung übersehen, daher ist jeder einzelne Score eine Wahl darüber, welchen Fehler man machen will. [[karr-ai-detection-humanization-2026|Karrs Review]] dazu, warum Detektion scheitert, kommt aus der Perspektive des Schreib-Humanisierung zum selben Ort, und [[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al. (2026)]] argumentieren, das prozedurale Rahmenwerk selbst müsse nun neu bewertet werden, denn die Ära unentdeckbaren Fehlverhaltens breche die Annahme, dass Fehlverhalten durch das eingereichte Artefakt belegt werden könne.

### Datenschutz und Überwachung

[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana et al. (2026)]] kartieren [[remote-proctoring|Fernaufsicht bei Prüfungen]] über die Pflege-Assessment hinweg und führen Datenschutz und Überwachung neben der emotionalen Wirkung auf Studierende und [[equity-in-ai-education|Gerechtigkeit]]seffekten unter ihre Hauptanliegen. [[automated-online-exam-proctoring-decade-review-2026]] und [[academic-dishonesty-automated-proctoring-ai-2026]] dokumentieren dieselben [[ai-technologies|Technologien]] über ein längeres Zeitfenster, und die Datenschutzfragen, die sie aufwerfen, sind gewöhnliche mit rechtlichen Konsequenzen: Was erfasst wird (Video, Audio, Tastatureingaben, Blick, Raumscans), wie lange es aufbewahrt wird, wo es gespeichert wird, wer darauf zugreifen kann, ob der Anbieter es weiterverarbeitet, und ob Studierende darin eingewilligt haben als Bedingung des Assessments. Institutionen, die in regulierten Datenumgebungen operieren, tragen gesetzliche Pflichten lange bevor ein Rechtsstreit erscheint, und die FERPA- und DSGVO-bewusste Arbeit der Wissensbasis an lokalen und anbieterseitig gehosteten KI-Systemen zeigt, wie dieselben Fragen für Unterrichtswerkzeuge gelten, nicht nur für Prüfungsaufsicht.

### Barrierefreiheit und Behinderung

[[wright-transcription-not-generation-2026|Wright (2026)]] argumentiert, pauschale „KI-Nutzung“-Verbote seien überinkludierend, weil sie Sprache-zu-Text-Transkription und OCR nicht von generativem Entwerfen unterschieden, und dass Studierende mit Zuständen, die Feinmotorik, Lesbarkeit der Handschrift oder Tippgenauigkeit betreffen, historisch genau auf diese Werkzeuge angewiesen waren –, einschließlich eigenständiger Sprache-zu-Text-Produkte wie Dragon NaturallySpeaking, von denen mehrere eingestellt oder verschlechtert wurden, wobei KI-gestützte Transkription die funktionale Lücke füllt. Wright hält fest, die Schnittmenge von Behinderung, assistiven Technologien und KI-Fehlverhaltenspolitik sei untererforscht und das Ausmaß dieser Verdrängung sei nicht empirisch gemessen. Das Risiko ist in der Form einfach: Eine Regel, die einem bzw. einer Studierenden das primäre Mittel zur Erzeugung lesbarer Arbeit entzieht, ist eine Regel, die einen Anpassungsprozess brauchen könnte, um zu bestehen. [[shin-ai-policies-sld-2026]] dokumentiert dieselbe Lücke von der Politikseite für Studierende mit spezifischen Lernbehinderungen, und die Arbeit der Wissensbasis zu [[assistive-technology|assistiven Technologien]] und [[neurodiversity|Neurodiversität]] liefert die umgebenden Begriffe.

### Sprachliche Gerechtigkeit und die Grenze zwischen Unterstützung und Substitution

[[li-genai-assessment-language-equity-2026|Li (2026)]] liefert die gleichheitsbezogene Version des Arguments für Studierende, die Englisch als zusätzliche Sprache nutzen. Weil ein einzelnes Interface nun sowohl erlaubtes Bearbeiten als auch verbotenes Entwerfen vollzieht, belastet eine Regel, die [[generative-ai|generative KI]] als eine Kategorie unerlaubter Assistenz behandelt, die Studierenden höher mit Compliance-Kosten, die am wahrscheinlichsten legitime Sprachunterstützung brauchen, konzentriert Verdacht auf Schreiberinnen und Schreiber, deren Oberflächengeläufigkeit sich verschoben hat, und ermöglicht selektive Durchsetzung auf schwacher Evidenz –, wobei Anschuldigungen rufliche, akademische und manchmal Visa- oder finanzielle Konsequenzen tragen. Das Mittel ist eine Grenze, die durch Funktion und Assessmentkonstrukt definiert wird statt durch Werkzeugname, die Oberflächeneingriffe, die keine Ideen, Quellen oder analytische Struktur hinzufügen, von Substitution trennt, die die intellektuelle Arbeit erschafft oder wesentlich umformt, mit kalibrierter [[ai-use-disclosure|Offenlegung]], damit routinemäßige Übersetzung und Bearbeitung keine Compliance-Kosten anziehen, die jene übersteigen, die einsprachige Peers tragen. Die Rechtsstruktur ist Argumentation über indirekte Diskriminierung – die kohortenverzerrte Last identifizieren, die eine formal neutrale Regel erzeugt, dann fragen, ob ein legitimes Ziel mit verhältnismäßigen und praktisch gangbaren Mitteln verfolgt wird –, verstärkt durch die verwaltungsrechtliche Erwartung, dass eine Entscheiderin bzw. ein Entscheider die angewandte Regel, die herangezogene Evidenz und die Verhältnismäßigkeit des Ergebnisses benennen kann, was eine Feststellung anfechtbar und den Prozess legitim macht. [[ai-detection|Detektion]] wird zu einem Triage-Signal herabgestuft, wobei Entwurfshistorien, gestufte Einreichungen und ein kurzes konstruktausgerichtetes Gespräch als Belege bevorzugt werden, daher läuft das Risiko in beide Richtungen: hin zu einer Diskriminierungs- oder Anfechtungsherausforderung, und hin zur Zerbrechlichkeit einer Feststellung, die auf Stellvertretern wie polierter Sprache oder nicht-muttersprachlicher Formulierung ruht.

### Unklare Regeln, inkonsistente Durchsetzung

[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski und Hurley (2025)]] behandeln Klarheit als Vorbedingung für vertretbare Durchsetzung statt als Höflichkeit und berichten, dass Richtlinien an rechtswissenschaftlichen Fakultäten von umfassender [[governance|Governance]] bis zu keiner erklärten Politik reichen, wobei die meisten es einzelnen Lehrenden überlassen, die Regeln zu interpretieren und anzuwenden. [[qian-governing-genai-higher-ed-policy-2026|Qian (2026)]] findet dieselbe Variation über US-Universitäten hinweg, zusammen mit Unterstützungsökosystemen, die sich ebenso sehr unterscheiden, und [[crompton-governing-genai-higher-ed-delphi-2026]] berichtet den Expertenkonsens, dass Governance fragmentiert sei. Ein bzw. eine Studierende, die bzw. der unter einer Regel diszipliniert wird, die niemand präzise benennen kann, ist ein Streit über Verfahren und Fairness, bevor es ein Streit über KI ist, und [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] argumentiert, das Mittel sei [[assessment|Assessmentdesign]], das Urteil und Verantwortung sichtbar mache, statt Überwachung, die sie erschließt. Die Befragung von 1.057 US-Fakultätsangehörigen durch [[watson-rainie-ai-challenge-faculty-survey-2026|Watson und Rainie (2026)]] zeigt dieselbe Inkonsistenz aus der anderen Richtung: 87% der Antwortenden schrieben ihre eigenen Regeln auf Aufgabenebene, während nur 48% sagten, ihre Einrichtung habe schriftliche Richtlinien, und 35% sagten, ihr Fachbereich habe sie, daher begegnen Studierende innerhalb einer einzigen Einrichtung einem Flickwerk individuell verfasster Richtlinien. Die strukturelle Antwort unter jenen Dokumenten ist dünn – eine Arbeitsgruppe oder Aufsichtsgruppe in 55% der Fälle, aber [[ai-literacy|KI-Kompetenz]] als allgemeines Bildungsergebnis in nur 13% adoptiert –, und es zählt rechtlich, weil die Durchsetzung einer Regel, die die Einrichtung nie angenommen hat, schwer zu verteidigen ist.

[[coates-governing-academic-integrity-indicators-2025|Coates, Croucher und Calderon (2025)]] verorten die Schwäche weiter vorgelagert, in der Governance statt im studentischen Verhalten oder in der Instrumentqualität. Ihr Rahmenwerk akademischer Integritätsindikatoren – 130 Items unter acht Dimensionen, die von Design und Entwicklung über Analyse, Berichterstattung, Evaluation und Verbesserung laufen – ist als Governance-Fragen für Leitungsgremien und Ausschüsse geschrieben: ob das oberste Gremium der Einrichtung Aktualisierungen zu Assessmentprozessen und -ergebnissen erhält, ob Leistungskennzahlen Assessmentqualität abdecken, ob Induktion und Orientierung akademische Integrität einschließen, und ob es eine einfache Route für die Überweisung von Fällen des Contract Cheating gibt. Ihr Reformprogramm zielt auf Governance-Architekturen, die Menschen in Governance-Rollen und die Technologien und Ressourcen, die Assessment stützen, und sie argumentieren, solche Entwicklung zahle sich ohne externe Erschwinglichkeit aus [[regulation|Regulierung]], [[benchmark|Benchmarking]] und institutionenübergreifendem Wettbewerb wahrscheinlich nicht aus. Für das Rechtsrisiko impliziert das, dass eine vertretbare Position darauf ruht, die eigene Praxis zu kennen und zu dokumentieren –, dieselbe Information, die eine Einrichtung braucht, wenn eine Feststellung angefochten wird.

### Das automatisierte Benoten angreifen

Ein anderes Risiko sitzt im Inneren der Instrumente selbst. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] versteckte fünf indirekte Prompt-Injektionen in den Dateien eines synthetischen Essays, den ein institutionelles [[automated-assessment|KI-Benotungswerkzeug]] (Microsoft Copilot, GPT-5.2) in sechs von sechs Baseline-Läufen als durchgefallen benotet hatte. Zwei Strategien hoben die Note ohne sichtbare Warnung an die Nutzenden, bei berichteten Angriffserfolgsraten von 100% (9 von 9 Iterationen) und 94% (17 von 18), indem sie Instruktionsmanipulation, Rollenspiel und Verschleierung kombinierten; das Werkzeug deaktivierte einen Chat still, nachdem es den einfachsten Angriff blockiert hatte, und in einer Iteration kündigte es an, nie eingebetteten Instruktionen zu folgen, und hob dann die Note bei jedem der nächsten sechs Läufe an. Eine durch eine versteckte Instruktion erlangte Note trägt keinen [[assessment-validity|Validitäts]]anspruch, und dieselbe Technik könnte genutzt werden, um eine Einreichung zu verschlechtern, ohne eine dauerhafte Spur im Output zu hinterlassen –, was bedeutet, dass die Anfechtungsakte für eine angefochtene automatisierte Entscheidung womöglich leer ist, und eine Feststellung des Fehlverhaltens (oder des Verdiensts) aus dem Artefakt überhaupt nicht belegt werden kann. Humbles Forderungen auf Sektorebene sind klare KI-[[educational-policy-ai|Politik]], [[educational-development|professionelle Entwicklung]] und standardisierte, domänenagnostische Resilienz-Tests, damit die Angriffsfläche gemessen statt angenommen wird, mit eingeschränkter KI-Nutzung und [[human-in-the-loop-ai|menschlicher Prüfung]], die für folgenreiche Arbeit vorbehalten ist.

### Jenseits des Campus-Tores

Für berufliche Programme endet das Risiko nicht mit dem Abschluss. Gutowski und Hurley halten fest, dass die Berufsstandesregeln, die praktizierende Anwältinnen und Anwälte binden – die Pflicht technologischer Kompetenz, Vertraulichkeit, Aufsicht über andere, die die Werkzeuge nutzen, Offenheit gegenüber dem Gericht –, bereits an KI-Nutzung anknüpfen, und dass [[hallucination-risk|halluzinierte]] Autorität Sanktionen für Praktikerinnen und Praktiker erzeugt hat, die erfundene Fälle einreichten. Dieselbe Transferlogik gilt überall dort, wo eine Lizenz, Registrierung oder gesetzliche Pflicht der bzw. dem Absolventin bzw. Absolventen folgt, weshalb die Disziplinseiten zu [[legal-education|Rechtswissenschaften]] und den [[medical-education|Gesundheitsberufen]] neben dieser Seite gehören.

## Offene Fragen

- Welches dieser Risiken hat tatsächlich Rechtsstreitigkeiten oder Regulierungsfeststellungen erzeugt? Die Wissensbasis hat Verfahren, Richtlinien und technische Evaluationen, aber keine Fallergebnisse, und sie sollte nicht so gelesen werden, als hätte sie sie.
- Überlebt Detektor-Ausgabe als Beleg für irgendetwas, sobald eine Einrichtung ihre Fehlerraten in einer Anhörung einräumt, oder verwandelt das Eingeständnis den Fall in einen Streit über prozedurale Fairness?
- Ist der Anbieter oder die Einrichtung der Datenkontrollverantwortliche, wenn Prüfungsaufsicht und Detektion über eine Drittplattform laufen, und verändert das den Rat an Institutionen?
- Sollten Institutionen die Belegstandards veröffentlichen, die sie auf KI-Fehlverhalten anwenden, so wie Beweisschwellen anderswo veröffentlicht werden, als Weise, sowohl Zu-Unrecht-Anschuldigung als auch Rechtsrisiko zu senken?

## Verbundene Konzepte

- [[academic-integrity]] — der Verhaltensrahmen, dessen Durchsetzung das Risiko trägt
- [[ai-detection]] — das Instrument im Zentrum von Fällen der Zu-Unrecht-Anschuldigung
- [[remote-proctoring]] — Überwachung im Assessment und ihre Datenschutzfragen
- [[assessment-validity]] — ob der Beleg die aus ihm gezogene Behauptung etablieren kann
- [[privacy]] — Sammlung, Aufbewahrung und Weiterverarbeitung von Studierendendaten
- [[regulation]] — gesetzliche und regulatorische Pflichten, die Institutionen erfüllen müssen
- [[governance]] — interne Politikgestaltung und Konsistenz der Durchsetzung
- [[educational-policy-ai]] — institutionelle KI-Politik als Quelle unbeabsichtigten Risikos
- [[ai-use-disclosure]] — Offenlegungserwartungen und ihre undurchsetzbaren Ränder
- [[accessibility]] — angemessene Anpassung, wo eine Regel ein assistives Werkzeug entfernt
- [[assistive-technology]] — die Werkzeuge im Zentrum des Überinklusionsproblems
- [[neurodiversity]] — die Studierenden, die zu weit gefassten Verboten am stärksten ausgesetzt sind
- [[equity-in-ai-education]] — unterschiedliche Last von Detektion und Überwachung
- [[student-experience]] — die menschlichen Kosten, die den rechtlichen vorausgehen
- [[hallucination-risk]] — erfundene Autorität als professionelle und institutionelle Haftung
- [[reducing-ai-misuse]] — die Präventionsalternative zur Anschuldigung

## Verbundene Artikel

- [[munoz-misconduct-allegation-evidence-2026]] — What evidence misconduct allegation files actually contain, and the natural justice requirement
- [[hadra-ai-detector-accuracy-efl-2026]] — Detector accuracy, hybrid text failure, and EFL misclassification risk
- [[van-vlasselaer-ai-detector-reliability-2026]] — Reliability of detection tools across a second corpus
- [[bassett-ai-detectors-education-2026]] — Why no detection threshold can be right: the error-tradeoff argument
- [[teichmann-detecting-undetectable-misconduct-2026]] — Misconduct procedures reassessed when evidence has become undetectable
- [[wright-transcription-not-generation-2026]] — Over-inclusive AI rules, disability accommodation and reasonable adjustment
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Remote proctoring mapped, with privacy and surveillance concerns
- [[automated-online-exam-proctoring-decade-review-2026]] — A decade of automated proctoring research
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Academic dishonesty and proctoring in the AI era
- [[gutowski-hurley-genai-policy-legal-education-2025]] — Policy clarity as a precondition for defensible enforcement
- [[qian-governing-genai-higher-ed-policy-2026]] — Policy and support ecosystems across innovative US universities
- [[crompton-governing-genai-higher-ed-delphi-2026]] — Expert consensus on fragmented governance
- [[sharma-judgment-visible-genai-assessment-2026]] — Integrity through visible judgment rather than surveillance
- [[shin-ai-policies-sld-2026]] — The policy void for students with specific learning disabilities
- [[li-genai-assessment-language-equity-2026]] — Language equity as a rule-design problem: the support–substitution boundary, indirect discrimination and reviewability (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Students attacking AI graders by indirect prompt injection, with grades changed undetected (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Governance indicators and reform program for authenticating assessment (Coates, Croucher & Calderon 2025)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1,057 US faculty: individual policies far outrun institutional ones, structural response thin (Watson & Rainie 2026)
