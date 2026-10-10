---
connected_resources: [lesson-md, liascript, onmicro-ai]
title: Edtech-Plattform
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:24-04:00"
connected_faqs: [designing-educational-ai-software]
type: concept
foundations: [ai-education]
pedagogy: [online-teaching-and-learning]
technology: [adaptive-learning, generative-ai, llm, personalized-learning, edtech-platform]
ethics: [equity-in-ai-education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/edtech-platform
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Edtech-Plattform** — die digitalen Systeme, Lernmanagementsysteme (LMS), Tutorsysteme und Online-Lernumgebungen, über die KI an Lernende und Lehrende geliefert wird. In der KI-Bildung ist die Plattform die *Infrastrukturschicht*, die bestimmt, ob eine KI-Fähigkeit die Studierenden erreicht, wie sie eingesetzt wird (offen vs. proprietär, integriert vs. eigenständig) und wer auf sie zugreifen, sie anpassen und evaluieren kann. Forschung in dieser Wissensdatenbank untersucht Plattformen aus mehreren Blickwinkeln: ihre Gestaltung, ihre Annahme- und Engagement-Restriktionen, ihre institutionelle Steuerung und ihre Gerechtigkeitsimplikationen.([[access-not-enough-ai-tutoring-2026]]) ([[oatutor-open-source-adaptive-tutor-2023]])

## Fragen zum Nachdenken

- Denken Sie an das letzte KI-Tutoring- oder Feedbackwerkzeug, dem Sie begegnet sind. Denken Sie nun daran, wo es tatsächlich „lebte“ — im LMS, auf der Plattform oder in der App, die es verpackte. Fühlt sich dieser Behälter wie ein neutraler Auslieferungskanal an, oder könnten seine Gestaltungsentscheidungen (offen vs. proprietär, integriert vs. eigenständig, Cloud vs. lokal) verändert haben, was Sie damit tun konnten?
- Eine Studie fand, dass nahezu die Hälfte der Studierenden eine gut gestaltete KI-Tutoring-Plattform nie nutzte, und dass Vielnutzende eher zu den leistungsstärkeren Studierenden gehörten. Wenn ein Werkzeug „im Prinzip“ wirksam ist, die Studierenden es aber nicht nutzen, ist dann die Fähigkeit oder die Plattform das eigentliche Problem? Was würde das für Ihre Evaluation von Edtech bedeuten?
- Proprietäre KI-Plattformen können Forschende auf eine Handvoll geschlossener Systeme beschränken, während offene Plattformen wie OATutor jedem erlauben, abzuzweigen (fork), zu experimentieren und zu veröffentlichen. Was könnte verloren gehen — für Forschung, Gerechtigkeit und institutionelle Autonomie —, wenn KI-Bildung über geschlossene, intransparente Plattformen geliefert wird?
- Wie sehr prägt das Geschäftsmodell einer Plattform — wer zahlt, wem die Daten gehören, was optimiert wird — das Lernen, das tatsächlich auf ihr stattfindet? Wo würden Sie nachsehen, um diesen Einfluss zu sehen?
- Einige neue „KI-native“ Plattformen ersetzen das MOOC-Modell „ein Video für viele Studierende“ durch ein Multi-Agenten-Klassenzimmer, das um jede lernende Person herum gebaut ist. Was würden Sie, bevor Sie weiterlesen, fürchten zu verlieren, wenn Unterricht eins-zu-eins mit Agenten wird statt eins-zu-viele mit Lehrenden?

## Einleitung

Die Plattform sitzt zwischen einem KI-Modell oder einer KI-Fähigkeit und der lernenden Person. Sie ist der Behälter, der Tutoring, Prüfung, Feedback und Verwaltung zu etwas Nutzbarem verpackt — und, entscheidend, sie formt Lernergebnisse durch ihre Gestaltungsentscheidungen, ihre Zugänglichkeit und ihr zugrundeliegendes Geschäftsmodell. Das Konzept umspannt Lernmanagementsysteme wie Moodle, großskalige Online-Plattformen wie MOOCs, dedizierte [[intelligent-tutoring|intelligente Tutoring]]systeme und aufkommende agentische oder KI-native Kursplattformen. Den Behälter zu benennen ist nicht dasselbe, seine Autoren zu benennen: Die Plattform ist das eingesetzte System, während die Interessengruppe, die entscheidet, was es tut, [[educational-technology-developers]] ist —, was hier relevant ist, weil die unten stehenden Befunde zu Annahme, Gerechtigkeitsverzerrung und Beschaffung meist Folgen von Gestaltungsentscheidungen sind, die getroffen wurden, bevor eine Plattform je ein Klassenzimmer erreichte.

## Was eine Plattform in der KI-Bildung leistet

Plattformen in der KI-Bildung erfüllen mehrere unterschiedliche Funktionen:

- **Unterricht und Tutoring liefern** — der Behälter für [[intelligent-tutoring|KI-Tutoring]] und [[intelligent-tutoring]]-Systeme, von in LMS eingebetteten Tutoren bis zu eigenständigen adaptiven Tutoring-Plattformen.
- **Die Lernumgebung verwalten** — Kursorganisation, Einschreibung, Fortschrittsverfolgung und Verwaltung, die traditionelle LMS-Plattformen bieten.
- **Prüfung und Feedback beherbergen** — wo [[automated-assessment]], [[formative-assessment]] und [[feedback|Feedbackschleifen]] laufen.
- **Lerndaten sammeln und analysieren** — das Substrat für [[learning-analytics]] und [[student-modeling]].
- **Zugang und Einsatz steuern** — Entscheidungen über [[open-source]] vs. proprietär, lokal vs. Cloud, und welche Institutionen und Lernenden sie nutzen können.

## Zentrale Befunde aus den Artikeln der Wissensdatenbank

### Annahme, nicht Fähigkeit, ist oft die bindende Restriktion

Eine Plattform kann im Prinzip wirksam sein und in der Praxis doch scheitern, wenn Lernende sie nicht nutzen. Zwei [[rct|RCTs]] einer [[ai-literacy|KI-Kompetenz]]-(Lese-)Tutoring-Plattform fanden, dass **nahezu die Hälfte der Kontrollstudierenden die Plattform nie nutzte** und Nutzende im Schnitt nur 2–5 Minuten pro Woche verbrachten — weit unter der für Lesefortschritt nötigen Dosierung. Ein persönlicher Engagement-Tutor erhöhte Nutzung und Engagement erheblich, erzeugte aber dennoch keine Leistungsgewinne, und Plattformnutzende neigten zu leistungsstärkeren Studierenden, was Gerechtigkeitsbedenken aufwirft.([[access-not-enough-ai-tutoring-2026]])

Abfolge zählt ebenso viel wie Fähigkeit: Ein Review von über 100 Studien zu KI in der Bildung (2020–2025) platziert End-to-End-Plattformen an der Spitze eines Adoptionsstapels und argumentiert, Institutionen sollten formative Prüfung, Führungskapazität und geteilte Normen etablieren, bevor sie die Plattformen kaufen, die sie skalieren ([[raza-farooq-aied-review-2020-2025|Raza & Farooq (2025)]]).

Die Lücke liegt auf Nachrichtenebene, nicht bei Anmeldungen: In einem zweijährigen Cluster-RCT probierten 96% der Studierenden Khanmigo aus, doch die mediane Person schrieb ihm nur in 17% der Sitzungen, in denen sie einen Fehler machte, und ~14.5% der Nachrichten trugen eine echte mathematische Frage oder einen Argumentationsschritt — bei \\$15 pro Studierendem pro Jahr ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos and Low, 2026]]).

Die bindende Restriktion ist, wo die KI innerhalb der Plattform sitzt: In einem Versuch an 6.000 Schülerinnen und Schülern der Mittelstufe ging der gemessene Effekt von strukturierten Berührungspunkten innerhalb der Übungsumgebung aus — 2.0 „help me get started“-Nutzungen, 2.3 Nach-Fehler-Erklärungen und 3.2 Schritterklärungen pro Mastery-Studierendem —, während KI-Zugang allein wenig beitrug ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al. (2026)]]).

### Welche Werkzeuge Lehrende nutzen und was den Zugang beschränkt

Eine seltene Erhebung der von Lehrenden berichteten Plattformwahl stammt aus einer Typologie von 2026, aufgebaut aus 211 Lehrenden über neun Länder: Die Werkzeuge, die Klassenzimmer erreichen, sind überproportional diejenigen mit einer kostenlosen Stufe, weil eine öffentlich verfügbare kostenlose Version ein Einschlusskriterium war, und die am häufigsten genannten Einträge sind allgemeine Assistenten und Mediengeneratoren statt zweckgebauter Plattformen. Etwa die Hälfte der fünfzig gelisteten Werkzeuge erzeugt Bilder, Audio, Video oder Präsentationsdecks, während dokumentengestützte Assistenten (NotebookLM, Elicit, SciSpace, Humata, Research Rabbit) den kohärentesten Cluster in der Forschungskategorie bilden. Dedizierte [[intelligent-tutoring|Tutoring]]systeme erscheinen als kleine, fachspezifische Gruppe statt als Zentrum der berichteten Nutzung —, was das obige Annahmeproblem in einem weiteren Rahmen verortet, in dem eine Plattform mit allgemeinen Werkzeugen um Aufmerksamkeit konkurriert, die Studierende und Lehrende bereits offen haben.([[typology-generative-ai-tools-education-2026]])

### Das Plattformmodell ist entscheidend: offen vs. proprietär

- **Proprietäre Plattformen** erzeugen Barrieren für Forschung: Forschende, die [[adaptive-learning|adaptive Lern]]-Experimente replizieren oder erweitern wollen, sind oft auf eine kleine Zahl geschlossener Plattformen beschränkt.
- **Offene Plattformen** senken diese Barriere. **OATutor** ist das erste Open-Source-adaptive Tutorsystem, das auf ITS-Prinzipien aufbaut — eine MIT-lizenzierte Codebasis mit einer Creative-Commons-Algebra-Inhaltsbibliothek, [[knowledge-tracing|Knowledge-Tracing]]-Meisterschaftsschätzung und eingebautem A/B-Testen —, die Forschenden erlaubt, das vollständige End-to-End-System abzuzweigen, zu experimentieren und zu veröffentlichen.([[oatutor-open-source-adaptive-tutor-2023]])
- **Transparenz ist vor die Klammer gezogen.** In derselben Prüfung von 48 Plattformrichtlinien waren Datenerhebung und Weitergabe an Dritte vergleichsweise gut offengelegt, während KI-spezifische Offenlegung und Rechenschaftspflicht nachhinkten, und 16 von 48 Plattformen (33%) machten keine sinnvolle KI-Offenlegung trotz sichtbarer KI-Funktionen ([[edtech-privacy-deferral-2026|Nair & Greenstadt, 2026]]).

- **Die LMS-API begrenzt, was eine spielintegrierte Plattform prüfen kann.** Ein Hypergamification-Pilot, der eine spielbare Welt aus Blackboard-Inhalten erzeugte, konnte keine Multiple-Choice- oder offenen Fragen darstellen, weil studentengebundene Tokens keine Frageinhalte zurückgaben und kein Endpunkt für das Einstellen von Laufzeitantworten existierte ([[hypergamification-game-engine-lms|Yusubov et al., 2026]]).
- **Isolation und Kosten sind Gestaltungsvariablen der Plattform.** VISMATIC paart rootless Container — die, anders als JupyterHub, laterale Bewegung und Host-Kompromittierung verhindern — mit prozessbezogener Telemetrie auf API-Ebene und betreibt 19 Studierende und 1.880 protokollierte Ereignisse auf einem einzigen Raspberry-Pi-5-Knoten, der für 10 bis 20 ausgelegt ist ([[vismatic-secure-sandbox-cs-education|Arroyo et al. (2026)]]).

### KI-native Plattformen gestalten Online-Bildung neu

Das Plattformparadigma selbst entwickelt sich. **MAIC** (Massive AI-empowered Course) ersetzt das MOOC-Modell „ein Video für N Studierende“ durch ein LLM-getriebenes Multi-Agenten-Klassenzimmer — „N Agenten für 1 Studierende Person“ — unter Nutzung spezialisierter Teacher-, Assistant-, Classmate- und Analyzer-Agenten, um personalisiertes, adaptives Lernen in großem Maßstab zu liefern, und senkt die Kursproduktion von ~\\$25K/60 Stunden auf unter \\$2/30 Minuten.([[mooc-to-maic]]) Ebenso schlagen KI-integrierte LMS-Gestaltungen vor, über reine Workflow-Plattformen hinauszugehen hin zu Echtzeit-Unterrichtsunterstützung mit richtlinienbegrenzter (bounded) KI, formativem Andeuten, verteilter Wiederholung und Lehrkraft-Dashboards.([[ai-lms-middle-school-longitudinal]]) Am anderen Ende des Einsatzspektrums muss klassenraumeingebettete KI ihre Machbarkeit in lebendigen physischen Umgebungen beweisen. Der Community Builder ([[breideband-community-builder-cobi-2026|CoBi]]) — eine klassenraumweite Plattform, die Spracherkennung und Sprachverständnis nutzt, um kollaborativen Diskurs in Kleingruppen zu visualisieren — wurde erfolgreich über laute Mittelstufenklassenzimmer hinweg eingesetzt, mit handelsüblichen Mikrofonen und einer skalierbaren Cloud-Pipeline, was zeigt, dass Echtzeit-Sprach-KI-Infrastruktur in authentischen K-12-Umgebungen funktionieren kann, auch wenn Schnittstellen-Fehlanpassungen (Lehrkraft- vs. Studierendensicht darauf, ob Feedback Gruppen- oder Klassenebene betraf) Einsatzreibung erzeugten.

### Interessenbasierte und kontextbewusste Plattformfunktionen

Plattformen können über Leistungsdaten hinaus personalisieren. **Taklif.AI** ist eine LLM-gestützte Plattform, die Hochschulaufgaben auf Basis der **außerunterrichtlichen Interessen und kulturellen Kontexte** der Studierenden erzeugt, ausgerichtet an [[culturally-relevant-pedagogy]], und weg von Einheitsaufgaben hin zu interessengetriebenem Engagement.([[taklif-ai-interest-based-personalized-assignments]])

## Implikationen für Gestaltung und Forschung

1. **Gestalten Sie für Annahme, nicht nur für Fähigkeit.** Die Wirksamkeit einer Plattform hängt davon ab, ob Lernende tatsächlich mit ihr interagieren; Unterstützungsstrukturen, Onboarding und Zeitplanung zählen ebenso viel wie die KI selbst.([[access-not-enough-ai-tutoring-2026]])
2. **Behandeln Sie Plattformstruktur als Gerechtigkeitshebel.** Wer von einer Plattform profitiert, hängt von Zugang, Infrastruktur und Engagement-Restriktionen ab — Plattformgestaltung muss durch eine [[equity-in-ai-education]]-Linse untersucht werden.([[access-not-enough-ai-tutoring-2026]])
3. **Bevorzugen Sie offene, replizierbare Plattformen für die Forschung.** Open-Source-Plattformen wie OATutor ermöglichen reproduzierbare Forschung zu adaptivem Lernen und eine geteilte Evidenzbasis.([[oatutor-open-source-adaptive-tutor-2023]])
4. **Gestalten Sie KI-native Plattformen mit Steuerung und Grenzen.** Datenschutz-zuerst-Architektur, Datenminimierung, prüfbare Protokolle und rollenbasierter Zugang sind entscheidend, wenn Plattformen KI-integriert werden —, was an die Anliegen [[privacy]] und [[governance]] anschließt.([[ai-lms-middle-school-longitudinal]])
Datenschutz kann in die Pipeline statt in die Richtlinie eingebaut werden: Ein Klassenzimmer-Vorfall-Detektor, der auf anonymisierten Posen-Trajektorien trainiert ist, hält Gesichts- und Erscheinungsmerkmale Minderjähriger aus dem System heraus, obwohl jede Methode im Zero-Shot-Transfer in echte Klassenzimmer an Genauigkeit verlor, wo die beste Genauigkeit des vorgeschlagenen Modells 63.41% betrug ([[privacy-aware-classroom-incident-recognition-2026|Parmar et al. (2026)]]).
5. **Erklären Sie Empfehlungen in der Fachsprache der Lehrkraft.** Die KI-Funktionen einer Plattform verdienen Vertrauen und Annahme, wenn ihre Erklärungen verständlich und pädagogisch sinnhaltig sind: In einem Within-Subject-Experiment mit einem KI-Gruppierungsempfehlungswerkzeug (GrouPer) fanden [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]], dass domänengetriebene, in curriculare Sprache gefasste Erklärungen Verständlichkeit, Vertrauen und Akzeptanz bei Lehrkräften signifikant stärker erhöhten als rohe Merkmalsbedeutungs-Erklärungen —, und dass echte Klassenzimmernutzung für volle Akzeptanz weiterhin zählte.([[xai-teachers-trust-edtech-recommendations-2026]])
6. **Trennen Sie das System, das Evidenz erzeugt, von dem, das sie bewertet.** Wenn Agenten einen Kurs anstelle einer lernenden Person absolvieren können, argumentiert [[credentials-carry-evidence-ai-agents-2026|Srivastava (2026)]], muss eine Plattform zeitnahe, einsehbare Evidenz der Argumentation der lernenden Person ausgeben und darf nicht ihr alleiniger Bewerter sein — Umgebung, Aussteller und Prüfer sollten unabhängig sein.([[credentials-carry-evidence-ai-agents-2026]])
7. **Erzeugen Sie Repräsentationen zur Entwurfszeit, nicht zur Laufzeit.** [[edtech-design-time-generative-ui|Neshaei et al. (2026)]] argumentieren, Laufzeitanpassung könne nicht in großem Maßstab verifiziert werden, und schlagen vor, Inhalte als modalitätsagnostische semantische Karten zu kodieren, aus denen interaktive, Audio-, vereinfachte Text- und niedrigbandbreitige Varianten vor der Veröffentlichung erzeugt und von Lehrenden freigegeben werden —, was Inferenzkosten pro lernende Person eliminiert, obwohl kein Prototyp berichtet wird.

## Verbundene Konzepte

- [[personalized-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[generative-ai]]
- [[llm]]
- [[open-source]]
- [[ai-literacy]]
- [[student-experience]]
- [[teacher-role]]
- [[k-12]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[governance]]
- [[culturally-relevant-pedagogy]]
- [[stem-education]]
- [[educational-technology-developers]]

## Verbundene Artikel
- [[typology-generative-ai-tools-education-2026]] — Was 211 Lehrende berichteten zu nutzen: 50 Werkzeuge in neun Kategorien
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[access-not-enough-ai-tutoring-2026]] — Annahme und Engagement sind die bindenden Restriktionen für KI-Tutoring-Plattformen
- [[oatutor-open-source-adaptive-tutor-2023]] — Eine Open-Source-adaptive Tutoring-Plattform für replizierbare Forschung
- [[mooc-to-maic]] — Moving from MOOC to LLM-driven multi-agent AI classrooms
- [[ai-lms-middle-school-longitudinal]] — AI-integrated LMS for middle school with bounded, privacy-first support
- [[taklif-ai-interest-based-personalized-assignments]] — Interest-based personalized assignment platform
- [[edusim-llm-robotic-simulation-education-2026]] — An LLM-robotic simulation platform for education
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — A generative social-robot teaching platform in higher education
- [[hypergamification-game-engine-lms]] — A game-engine-based LMS integrating gamification
- [[edtech-design-time-generative-ui]] — Designing edtech for generative UI
- [[lata-ferpa-compliant-local-llm-autograder]] — FERPA-compliant local LLM autograder platform
- [[vismatic-secure-sandbox-cs-education]] — A secure sandbox platform for CS education
- [[learnmate2-llm-adaptive-learning]] — LLM-powered personalized adaptive learning platform
- [[privacy-aware-classroom-incident-recognition-2026]] — Privacy-aware computer vision in classroom platforms
- [[raza-farooq-aied-review-2020-2025]] — Comprehensive review of AIED research and systems
- [[credentials-carry-evidence-ai-agents-2026]] — Credentials that carry their evidence for AI-agent work
- [[breideband-community-builder-cobi-2026]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
