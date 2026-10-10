---
title: "Wie kann ich KI-Betrug in meinem Kurs reduzieren?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [should-we-use-ai-detectors, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education, top-10-findings-ai-education-instructors]
weight: 88
foundations: [academic-integrity, ai-literacy, reducing-ai-misuse]
assessment: [assessment]
translation_of: faqs/reduce-ai-cheating
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

# Wie kann ich KI-Betrug in meinem Kurs reduzieren?

**Die stärkste Richtung in der Wissensbasis ist, weniger auf Detektion zu setzen und mehr auf strukturelles [[assessment|Assessment]]-Design, explizite Erwartungen, Lernverifikation und [[ai-literacy]].** Die Synthese [[academic-integrity|Akademische Integrität]] berichtet erhebliche Grenzen in der Erkennung KI-generierter Texte und argumentiert, dass akademische Integrität im [[generative-ai]]-Zeitalter zunehmend ein Assessmentdesign-Problem statt einfach ein Detektionsproblem ist. Detektionswerkzeuge sind unzuverlässig und prozedural unfair. In einer kontrollierten Studie mit 642 veröffentlichten englischen Abstracts markierten zwei kommerzielle Detektoren leitlinienkonformes leichtes KI-*Editieren* bei 38–80%, markierten unveränderte Originale von 2023–25 bei 9–15% (Nicht-[[stem-education|STEM]] weit über STEM, p<0.001), und – nach KI-„Humanisierung" – erwischten weniger als 4% der KI-markierten Umschreibungen, ein Integritäts-Catch-22, das ehrliche Unterstützung bestraft, während es absichtliches Ausweichen ermöglicht.([[karr-ai-detection-humanization-2026]]) In einer verdeckten Feldstudie blieben 94% vollständig KI-generierter Einreichungen, die in laufende Online-Prüfungen über fünf Psychologiemodule injiziert wurden, unentdeckt, und die KI-Arbeit erzielte im Durchschnitt bessere Ergebnisse als echte Studierende; die Vanderbilt University deaktivierte ihren lizenzierten Detektor, nachdem sie eine beworbene Falsch-Positiv-Rate von 1% nicht validieren konnte, die bei 75.000 jährlichen Einreichungen etwa 750 falsch etikettierte Studierende implizierte.([[teichmann-detecting-undetectable-misconduct-2026]]) Detektion allein ist deshalb ein schwacher Hebel – der stärkere Hebel ist das Assessmentdesign-Argument, das in [[redesign-assessment-ai-era]] vollständig dargelegt ist. Unten sind konkrete, umsetzbare Ansätze, grob geordnet nach Stärke der Belege.

## 1. Mit Leitplanken versehene KI-Werkzeuge: „Hinweis, nicht Antwort"

Konfigurieren Sie jede [[simulating-students|KI]], die Studierende nutzen, so, dass sie [[scaffolding|scaffoldet]] statt offenbart. Der stärkste kausale Befund in der Wissensbasis ist ein Feld-[[rct]], in dem ein **ungehüteter** ChatGPT-artiger Tutor begleitete Übungsleistung um **+48%** erhöhte, aber unbegleitete Prüfungswerte um **−17%** *senkte*; ein **mit Leitplanken versehener** Tutor (Hinweise statt Antworten, plus [[teacher-role|lehrkraft]]-verfasste Probleminformationen) beseitigte den Schaden vollständig.([[generative-ai-guardrails-harm-learning]]) Eine große Studie mit 26.811 Studierenden fand, dass Auslagern von Hausaufgaben Hausaufgabenwerte um 18% erhöhte, aber [[summative-assessment|geschlossene Prüfungs]]werte innerhalb von sechs Monaten um 20% *senkte* – genau der Schaden, den [[guardrails]] und unbegleitete Maße zu verhindern bestimmt sind.([[stromberg-generative-ai-learning-penalty-secondary-2026]])

**Konkrete Beispiele:**

- Stellen Sie den Tutor so ein, dass er schrittweise, [[socratic-method|sokratische]] Hinweise gibt statt des nächsten Antwortschnitts.
- Speisen Sie die KI mit richtigen Lösungen *und* häufigen [[misconceptions]], damit sie Fehler adressieren kann.
- Verlangen Sie einen Versuch der Person, *bevor* die KI ihre Ausgabe offenbart („zeigen Sie zuerst Ihren Versuch").
- Behandeln Sie jedes Werkzeug, das die Aufgabe mühelos fühlen lässt, als fehlplatziert –, die [[brcic-effortless-trap-productive-struggle-2026|„wenn das Hineinlassen von KI die Aufgabe mühelos fühlen lässt, ist sie am falschen Platz"-Regel]].

## 2. Assessment-Redesign: machen Sie Betrug durch Design sichtbar (und wirksam abschreckend)

Weil Schaden durch Missbrauch Assessment-abhängig ist, verändern Sie, was als Leistung zählt. Die Synthese [[reducing-ai-misuse|Reduktion von KI-Missbrauch]] reiht das als Tier-1, weil es funktioniert, ob eine Person das richtige Verhalten wählt oder nicht – es beschränkt das Umfeld, statt von Motivation abzuhängen. Die [[ai-assessment-scale-reform|AI Assessment Scale (AIAS)]] ist ein strukturiertes Framework dafür: kennzeichnen Sie jede Aufgabe nach ihrem KI-Nutzungsniveau (z. B. „keine KI", „KI nur für Brainstorming", „KI-Unterstützung mit Zitation", „volle KI-Nutzung"), damit Erwartungen explizit und durchsetzbar sind.([[ai-assessment-scale-reform]])

Ein [[meta-analysis-systematic-review|systematischer Review]] von 72 Studien zu generativer KI in der [[cs-education|Informatikbildung]] kommt aus einer anderen Belegbasis zum selben Schluss: er reiht **Redesign** als sowohl machbar als auch am wirksamsten und hebt das Hinzufügen eines mündlichen oder anderweitig prozessichtbaren Elements zu mindestens einem hochrangigen Assessment pro Kurs als die einzelne wirksamste Intervention hervor, und hält fest, dass Detektion der *dünnste* Bereich des ganzen Reviews ist – nur 3 Studien, obwohl sie die institutionelle Debatte dominiert ([[kumar-genai-computing-education-systematic-review-2026]]). Derselbe Review berichtet, dass 60–80% der Informatikstudierenden generative KI in Kursarbeit nutzten, typischerweise ohne explizite Lehrkraftsanktionierung, und dass 70% einer nationalen Fakultätsstichprobe explizit Schulung zu KI-resistentem Assessmentdesign erbaten.

**Konkrete Beispiele:**

- **Unbegleitete, im Klassenraum, geschlossene Assessments** – proktorierte Prüfungen, Quiz oder zeitbegrenzte schriftliche Arbeit, in denen Studierende ohne Werkzeuge bestehen. Gewichten Sie diese stärker, da Hausaufgaben das sind, was KI aufbläht.
- **Mündliche Prüfungen und Verteidigungen** – lassen Sie Studierende ihre Arbeit laut erklären oder verteidigen; Echtzeit-Dialog ist inhärent KI-resistent.([[fenton-oral-exams-ai-authentic-assessment-2025]])
- **Prozessartefakte** – verlangen Sie Entwürfe, Argumentationsspuren, annotiertes „zeigen Sie Ihr Denken", oder Reflexionsprotokolle, damit der *Prozess* sichtbar ist, nicht nur das Produkt.([[authentic-products-authenticated-processes-2026]])
- **Authentische, kontextuelle Aufgaben** – nutzen Sie reale, datenreiche oder persönliche Prompts, die schwer auszulagern und für die Person bedeutsam sind (z. B. ein Konzept auf einen lokalen Fall, ein Praktikum oder die eigenen Daten der Person anwenden).([[kirsanov-beyond-detection-ai-online-assessments-2026]])
- **KI-freie Zonen** – bestimmen Sie Teile des Kurses (oder spezifische Aufgaben), in denen eigenständige Fähigkeit wirklich das bewertete Konstrukt ist.
- **Aufgabenvariation pro Person** – geben Sie jeder Person eine oberflächlich verschiedene, aber konstruktäquivalente Version derselben Aufgabe, sodass Kopieren strukturell nutzlos ist; behandeln Sie das als fähigkeitsbedingt, da [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]] fand, dass Frontier-Generatoren nur 0.81–0.88 auf einem gemeinsamen Integritätswert erreichen, während Nicht-Frontier-Modelle auf 0.50–0.55 zusammenbrechen.

## 3. Lernverifikation: verifizieren Sie Verständnis, nicht Provenienz

Statt zu versuchen zu belegen, *wie* eine Einreichung erzeugt wurde, bitten Sie Studierende gelegentlich, zu *demonstrieren*, was sie lernten. [[best-response-student-ai-dialog-2026|„The Best Response to Student AI Use Is Not Detection, It Is Dialog"]] beschreibt kurze Verifikationsgespräche, frühe Entwürfe, Reflexionen und Studierenden-Videos als praktische Mechanismen.

**Konkrete Beispiele:**

- Eine 2-minütige Eins-zu-eins oder aufgezeichnete Erklärung eines eingereichten Stücks.
- Ein Anschlussquiz zum selben Material, ohne Werkzeuge abgelegt.
- Bitten Sie Studierende, eine Stichprobe ihrer Arbeit zu überarbeiten und die Veränderungen zu erklären.

*Hinweis:* diese Quelle ist ein Praxisbericht, also ist er am besten als vielversprechende Praxis statt als definitiver Kausalbeleg zu behandeln.

**Verifikation ist außerdem das, was einen Fehlverhaltensprozess vertretbar macht.** [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] analysierten echte Akten zu Fehlverhalten mit generativer KI und fanden, dass Prinzipien natürlicher Gerechtigkeit verlangen, dass eine Person über die Anschuldigung informiert wird und eine Gelegenheit zur Antwort *vor* irgendeiner Feststellung erhält; die Antwortgelegenheit ist typischerweise eine Untersuchungssitzung oder ein Panel-Interview, und was auch immer die Person sagt, wird Teil der Belegakte. Ihre Belegkategorien erklären außerdem, warum Verifikation in den Kurs eingebaut statt während der Untersuchung improvisiert werden muss: systemaufgezeichnete Verhaltensspuren existieren nur in beaufsichtigtem Assessment, und die schwächeren Prozessbelege – Entwürfe, Aufsichtssitzungen, Präsentationen – existieren nur, wo jene Praktiken bereits vorhanden waren. Eine Verifikationsroutine ist Prozessbeleg, auf den Sie sich dann stützen können. Die Regel selbst muss außerdem präzise sein: [[wright-transcription-not-generation-2026|Wright (2026)]] zeigt, dass Verbote, die Sprach-zu-Text-Transkription und generatives Entwerfen als dieselbe „KI-Nutzung" behandeln, überinklusiv sind und riskieren, Studierende zu sanktionieren, die das Verbotene nicht taten, was ein Fairnessproblem ist, bevor es ein rechtliches ist ([[legal-issues-and-risks]]).

## 4. Gescaffoldete Nutzungssequenzen: „zuerst denken, KI danach, drittens reflektieren"

Statt KI zu verbieten, lehren Sie Studierenden einen strukturierten Workflow, der sie in der kognitiven Schleife hält. Die Synthese [[reducing-ai-misuse|Reduktion von KI-Missbrauch]] skizziert acht Designprinzipien: erhalten Sie [[desirable-difficulties|kognitive Reibung]], positionieren Sie KI als *vorläufigen* Denkpartner (keine Autorität), betten Sie Evaluationskontrollpunkte ein, und verlangen Sie [[metacognition|metakognitives]] Journaling und Prompt-Protokolle.

**Konkrete Beispielsequenz:**

1. **Zuerst denken** – Studierende brainstormen, gliedern oder entwerfen eigenständig vor jeder KI-Nutzung.
2. **KI danach** – sie nutzen KI, um gegen ihr eigenes Denken zu kritisieren, zu erweitern oder Alternativen zu generieren.
3. **Drittens reflektieren** – sie protokollieren, wofür sie KI nutzten, was sie annahmen/verwarfen, und warum (ein Prompt- + Überarbeitungsprotokoll).

## 5. Aufgabenspezifische KI-Nutzungserklärungen

Ersetzen Sie generische „Ich habe KI genutzt ☐"-Kästchen durch **[[discipline-specific-aied|domänenspezifische]] Erklärungs-Frameworks**, die KI-Nutzung auf kognitive Phasen abbilden (z. B. strukturelle Planung gegenüber Inhaltsgenerierung).([[genai-declaration-frameworks-higher-education]]) Das zwingt Studierende, darüber zu reflektieren, *wie* sie KI nutzten, und klärt die Grenze zwischen akzeptabler Unterstützung und Fehlverhalten. Paaren Sie es mit expliziten Erwartungen und der Zusicherung, dass ehrliche Offenlegung nicht bestraft wird –, strafende oder vage Richtlinien treiben aktiv Verbergung.([[gonsalves-student-non-compliance-ai-declarations-2025]])([[chang-should-i-tell-my-teacher-ai-disclosure-2026]])

Die Assessmentdesign-Modellierung von [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed und Temimi]] erklärt den Mechanismus hinter jenem Ratschlag. Offenlegung wird nur dann zur attraktiven Option, wenn die Kosten der Ehrlichkeit niedrig bleiben; und weil die falsch Positiven eines Detektors auch auf ehrliche Studierende fallen, kann **stärkeres Monitoring Verbergung relativ attraktiver machen**, wann immer zusätzliche Sensitivität mehr neue falsch Positive als neue richtig Positive erzeugt. Lesen Sie eine erklärte Nutzung als Kontext statt als Geständnis, und designen Sie für die Person, die am meisten zur Verbergung versucht ist, statt für die durchschnittliche.

**Konkretes Beispiel:** ein Deckblatt, das Studierende bittet, pro Aufgabe anzugeben: *Haben Sie KI genutzt? Für welche Phasen (Brainstorming / Entwerfen / Überarbeiten / Prüfen)? Welches Werkzeug und welche Prompts haben Sie genutzt? Wie haben Sie die Ausgabe bewertet?*

## 6. Bauen Sie KI-Kompetenz und ehrliche Erwartungen auf

Die Synthese [[reducing-ai-misuse|Reduktion von KI-Missbrauch]] reiht KI-Kompetenz- und [[prompt-engineering|Prompting]]-Unterweisung als Tier-2: ein [[k-12]]-Modul, das szenariobasierte Prompt-Übung mit einem [[llm]]-Autobewerter nutzt, verbesserte tatsächliche Prompting-Fertigkeiten und hob das Vertrauen in die Nutzung von KI zum Lernen um **+10.4%**, wobei 87% berichteten, gelernt zu haben, KI verantwortungsvoll zu nutzen.([[aaai2026-prompting-literacy-k12]]) Setzen Sie klare Erwartungen darüber, was als Betrug zählt, *warum* es dem Lernen schadet (die [[ai-misuse-learning-harm|Leistungs-Lern-Lücke]]), und wie Studierende KI produktiv nutzen können –, das adressiert das „alle tun es"-Peer-Norm- und Rationalisierungsproblem, dokumentiert in [[ai-tools-academic-work-cheating-2026]] und [[student-rationalization-ai-writing]].

Studierendenbefragungen stützen jene Rahmung. Unter 504 Soziologiestudierenden hatten 65% generative KI für Kursarbeit genutzt, aber nur 3%, um Aufgabentext zu erzeugen, und 2%, um einen vollständigen Entwurf zu erzeugen; unterdessen hatten 81% irgendeine KI-Anleitung erhalten, aber nur 46% fanden sie sehr klar ([[student-genai-use-views-writing]]). Mehrdeutigkeit, nicht Aufsässigkeit, ist das praktische Problem –, weshalb die Instruktionskapazitäts-Seite dieser FAQ sich mit [[ai-literacy-evidence]] und mit der Reihenfolge von Interventionen in [[top-10-findings-ai-education-instructors]] verbindet. Studierende beschreiben die Werkzeuge nicht in denselben Begriffen wie die Richtlinie: [[mulisa-students-genai-integrity-perspectives-2026|Mulisa und Mezgebu (2026)]] fanden, die Frage, die Studierende aufwerfen, sei, ob generative KI ein Werkzeug sei, das Betrug erleichtert, oder ein Partner, der Lernen unterstützt, und ihre Darstellung der Spannung zwischen institutionellen Integritätsregeln und den eigenen Lernbedarfen der Studierenden ist brauchbarer für die Rahmung von Erwartungen als eine weitere Warnung vor Strafen.

## Das Fazit

Kombinieren Sie einen **strukturellen Boden** (Leitplanken + Assessment-Redesign, die Betrug unabhängig von Motivation schwer machen) mit **bildendem Kapazitätsaufbau** (KI-Kompetenz, Erklärungen, „Denken-KI-Reflektieren"-Sequenzen). Detektion allein ist der schwächste Hebel; das Ziel ist, ehrliche, produktive KI-Nutzung zum Weg des geringsten Widerstands zu machen.
