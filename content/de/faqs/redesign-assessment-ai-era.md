---
title: "Wie gestalte ich Assessment neu, damit eine Note weiterhin etwas Vertretbares darüber sagt, was die Person weiß oder kann?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [should-we-use-ai-detectors, reduce-ai-cheating, writing-instruction-ai-best-practices, course-ai-policy]
weight: 84
foundations: [academic-integrity]
assessment: [assessment, assessment-validity, authentic-assessment]
translation_of: faqs/redesign-assessment-ai-era
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

# Wie gestalte ich Assessment neu, damit eine Note weiterhin etwas Vertretbares darüber sagt, was die Person weiß oder kann?

**Beginnen Sie damit, explizit zu benennen, welche Fähigkeit die Note repräsentieren soll.** Bewerten Sie, was ein Student eigenständig kann, was er angemessen mit KI leisten kann, seine Fähigkeit, KI zu bewerten und zu leiten, oder eine Kombination davon? Die Wissensbasis behandelt das in [[assessment-validity|Assessmentvalidität]] als Validitätsproblem: ein poliertes Artefakt ist nicht mehr hinreichender Beleg, dass die Person die offenbar durch jenes Artefakt demonstrierte Fähigkeit besitzt. Das ist die Assessment-Hälfte desselben Arguments; die Durchsetzungs-Hälfte ist in [[reduce-ai-cheating]], und die allgemeine Validitätsrahmung läuft über [[evaluating-ai-interventions-methods]].

## Das Risiko der Konstruktsubstitution

Der Artikel [[authentic-products-authenticated-processes-2026|From Authentic Products to Authenticated Processes]] nennt das resultierende Risiko **Konstruktsubstitution**: die bewertende Person schreibt der Person ein KI-vermitteltes Produkt zu und misst versehentlich die Fähigkeiten des Werkzeugs statt die der Person. Ihre empfohlene Antwort ist, die Argumentation, das Urteil, die Verifikation, die Iteration und die Verantwortung der Person sichtbar zu machen, über Ansätze wie gestufte Einreichungen, annotierte Entscheidungsbegründungen, Prozessaufzeichnungen, Feedbacknutzungs-Erklärungen, mündliche Verteidigungen und andere Formen authentifizierter Prozessbelege.

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed und Temimi]] rahmen dasselbe Problem als eines **unvollständiger Information** statt der Moral: die Person weiß, wie die Arbeit erzeugt wurde, und die Institution sieht nur das Artefakt plus Teilspuren, also wird die Designfrage *welche Antwort der Person jedes Assessmentumfeld am attraktivsten macht*. Ihr Response-Region-Modell vergleicht drei Wahlen – keine KI-Nutzung, [[ai-use-disclosure|offengelegte]] Nutzung und verborgene Nutzung –, und zeigt, dass Regeln, Monitoring, Offenlegung und Redesign über verschiedene Kanäle wirken und nur Erfolg haben, wenn die attraktivste Antwort mit dem Zweck des Assessments übereinstimmt. Zwei Ergebnisse betreffen die Architektur unmittelbar. Abschreckung läuft über die **Diskrimination** eines Detektors zwischen verborgener Nutzung und legitimer Arbeit, nicht über seine rohe Trefferquote, sodass, wenn falsch Positive schneller steigen als richtig Positive, stärkeres Monitoring Verbergung relativ *attraktiver* machen kann. Und Redesign bewegt Studierende nur dann hin zu verantwortungsvoller Nutzung, wenn die Rubrik tatsächlich Prozessbelege belohnt; sonst bleibt es kosmetisch. Ihre praktische Regel ist, für die Person zu designen, die am meisten zur Verbergung versucht ist, statt für die gewissenhafteste.

## Eine starke Assessment-Architektur

In der Praxis kombiniert eine starke Assessment-Architektur oft eine **KI-fähige authentische Aufgabe** mit einer Form **eigenständiger Verifikation**. Je nach Disziplin könnte das eine kurze mündliche Erklärung umfassen, Anwendung im Klassenraum, Live-Demonstration, ein annotiertes [[eportfolio|Portfolio]], eine kurze unbegleitete Komponente, oder Befragung zu zentralen Entscheidungen.

Das [[authentic-assessment|Authentisches-Assessment]]-Konzept betont außerdem realistische intellektuelle Arbeit, kognitive Herausforderung, Handlungsfähigkeit der Person, Feedback und soziale oder professionelle Authentizität –, nicht bloß konventionelle Aufgaben für KI schwerer zu machen. Mündliche und Live-Komponenten brauchen sorgfältige Aufmerksamkeit für Angst, Behindertennachteilsausgleiche, sprachliche Unterschiede und Bias der bewertenden Person.

Eine beliebte Architektur ohne Überwachung – **Aufgabenvariation pro Person**, bei der jede Geprüfte eine oberflächlich verschiedene, aber konstruktäquivalente Version derselben Aufgabe bekommt, sodass Antworten nicht brauchbar geteilt werden können –, ist fähigkeitsbedingt statt kostenlos. [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]], ein [[benchmark]] von 600 generierten Varianten über 60 Bedingungszellen, fand Frontier-Modelle eng um einen gemeinsamen Integritätswert gehäuft (0.81–0.88), während Nicht-Frontier-Referenzen auf 0.50–0.55 zusammenbrechen, und dass keine einzelne [[prompt-engineering|Prompting]]-Strategie Oberflächendiversität und Konstruktäquivalenz gleichzeitig optimiert. Variation im Maßstab kann nicht aus Prompting allein angenommen werden, also sollte eine Institution ihr eigenes Modell-Prompt-Paar validieren, bevor sie die Garantie als real behandelt.

Redesign funktioniert außerdem selten Aufgabe für Aufgabe. In einer [[qualitative-research|qualitativen]] Studie mit 12 Akademikerinnen und Akademikern und 17 Studierenden an einer großen australischen Universität fanden [[nicola-richmond-programwide-assessment-genai-2025|Nicola-Richmond et al.]], dass beide Gruppen übereinstimmten, Assessment müsse sich verändern, betonten aber systemische Reibung – lange Vorlaufzeiten, Akkreditierungsrandbedingungen bei großen Kohorten, Arbeitsbelastung und Kosten –, und schlossen, dass Redesign *ein Dorf braucht*: ein Programm-weites Team, das Assessmentdesign-, [[generative-ai|generative KI]]-, Fachwissens-, Industrie- und Belegexpertise kombiniert, mit GenAI-Kompetenz- und Lernergebnis-Zusicherungspunkten strategisch über eine Qualifikation platziert. Die Aufgabenebenen-Methode, die das handhabbar macht, ist jene, die [[mccorkle-aligned-genai-course-policy-2025|McCorkle]] dokumentiert: jeden Schritt, den eine Person ausführt, inventarisieren, von jedem fragen „was, spezifisch, bewerte ich?", und die KI-Grenze aus der Antwort ableiten –, was auch der Weg ist, wie die Erwartungen hinter [[reduce-ai-cheating]] explizit und durchsetzbar werden.

Der Zweck zählt ebenso viel wie die Mechanik. [[ai-agents-joyful-assessment-third-space-2026|El Khoury und Ma]] argumentieren, dass Reform, die nur um die Verhinderung von Fehlverhalten organisiert ist, zu defensiv ist, und schlagen **freudvolles Assessment** vor – sicheres, emotional reaktives, ermächtigendes und die [[agency|Handlungsfähigkeit]] der Person unterstützendes –, in dem Integrität eine *Folge* guten Designs ist statt sein Ausgangspunkt. Ihr ausgearbeitetes Beispiel nutzt einen von der Lehrkraft gebauten [[agentic-ai|KI-Agenten]], um Studierende vor dem Urteil proben zu lassen und einen rubrikabgestimmten Belegbericht zu erzeugen, aber die Arbeitsteilung wird offen benannt: die KI organisiert Belege, die Lehrkraft deutet sie.
