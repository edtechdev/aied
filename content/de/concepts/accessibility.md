---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack]
title: Barrierefreiheit
created: "2026-08-23T12:00:00-04:00"
updated: "2026-10-10T09:04:24-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
translation_of: concepts/accessibility
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Barrierefreiheit** — die Gestaltung von Bildungstechnologie, Inhalten und Schnittstellen so, dass sie von Menschen mit Behinderungen und unterschiedlichen Bedarfen wahrgenommen, bedient und verstanden werden können. In der [[ai-education|KI in der Bildung]] umfasst Barrierefreiheit konkrete, umsetzbare Barrieren des *Mediums* Lernens: Untertitel für Videos, Alternativtexte, Transkripte, Kompatibilität mit Screenreadern und Tastatursteuerung, Farbkontraste, Textvereinfachung, taktile Ausgabe, Gebärdensprach-Unterstützung und Kompatibilität mit assistiven [[ai-technologies|Technologien]].

## Fragen zum Nachdenken

- Als Sie das letzte Mal ein digitales Lernwerkzeug ausgewählt oder entworfen haben: Haben Sie geprüft, ob Untertitel, Alternativtexte, Tastaturnavigation und Farbkontraste funktionieren, bevor Sie seine [[pedagogy|Pädagogik]] betrachtet haben? Warum könnte diese Reihenfolge von Bedeutung sein?
- Ein Video mit korrekten Untertiteln ist „barrierefrei“, während ein Kurs, der die Diskussion an den Kommunikationsbedarfen einer gehörlosen lernenden Person ausrichtet, „diese Person unterstützt“. Wo würden Sie die Grenze ziehen zwischen dem Beseitigen einer technischen Barriere und dem sinnvollen Dienen einer studierenden Person?
- [[research-methods-aied|Forschung]] zeigt, dass KI-segmentierte [[video-education|Lehrvideos]] mit festen Pausen die Leistungslücke zwischen [[neurodiversity|ADHS]] und Nicht-ADHS-[[learners|Lernenden]] beseitigten. Können Sie sich an eine „auf eine lernende Person zugeschnittene Lösung“ erinnern, die am Ende allen in einer Klasse zugutekam?
- Manche argumentieren, Barrierefreiheit sei notwendig, aber nicht hinreichend — ein barrierefreies Werkzeug ist nicht automatisch ein inklusives oder behindertengerechtes. Was ist der Unterschied zwischen der Fähigkeit, ein Werkzeug zu nutzen, und dem sinnvoll von ihm Bedient-Werden?
- Viele KI-Werkzeuge wurden überwiegend mit englischsprachigen, westlich-zentrierten Daten trainiert. Wie könnte das einschränken, wie gut sie Lernenden dienen, deren Erstsprache eine Gebärdensprache ist oder deren Erkenntnisweisen von der gesellschaftlichen Mehrheit abweichen?
- KI kann Barrierefreiheit im großen Maßstab automatisieren — Untertitel erzeugen, Texte vereinfachen, taktile Ausgaben produzieren. Was würden Sie von Hand überprüfen wollen, bevor Sie dieser automatisierten Barrierefreiheit vertrauen, und warum?

## Einführung

Barrierefreiheit unterscheidet sich von drei benachbarten Konzepten dieser Wissensbasis, steht ihnen aber nahe. **[[inclusive-learning|Inklusives Lernen]]** ist der weitere Dachbegriff für die Gestaltung von Bildung für alle Unterschiede zwischen Lernenden (physisch, kognitiv, sensorisch, situativ). **[[special-education|Sonderpädagogik]]** ist der Unterrichtsbereich für Lernende mit diagnostizierten Behinderungen, einschließlich individueller Nachteilsausgleiche. **[[universal-design-for-learning|Universal Design for Learning]]** ist das vorausschauende Designrahmenwerk (mehrere Mittel des [[student-engagement|Engagements]], der Repräsentation, des Handelns/des Ausdrucks). **Barrierefreiheit** sitzt innerhalb dieser Konstellation als die *technische und verfahrensmäßige Schicht*: Barrieren für das Wahrnehmen und Bedienen des Formats beseitigen, statt die Pädagogik neu zu entwerfen. Beide lassen sich an einem Spektrum trennen — Barrierefreiheit fragt „Kann jeder diesen Inhalt und dieses Werkzeug nutzen?“, während die Unterstützung studierender Personen mit Behinderungen fragt „Dient der Unterricht jeder lernenden Person sinnvoll, einschließlich Nachteilsausgleichen und behinderungsspezifischer Unterstützung?“ Beides ist wichtig, und KI durchdringt beides.

### Warum der Unterschied zählt

Ein Video mit korrekten Untertiteln und einem ordnungsgemäß ausgezeichneten Transkript ist *barrierefrei*; ein Kurs, der die Diskussion so strukturiert, dass die Kommunikationspräferenzen einer gehörlosen lernenden Person einbezogen werden, *unterstützt diese Person*. Sie überlappen — barrierefreie Medien sind eine Voraussetzung für inklusiven Unterricht —, aber sie verlangen unterschiedliche Designentscheidungen und stützen sich auf unterschiedliche Evidenz. Barrierefreiheit ist in Standards und Gesetz verankert (WCAG, der US-amerikanische [[assistive-technology|Assistive Technology Act]] und IDEA), während barrierefreies Lernen und Sonderpädagogik in Pädagogik und [[student-experience|Lernerfahrung]] verankert sind.

### Zentrale Forschungsthemen

**Formatzugang: Untertitel, Transkripte und Text.** **[[adhd-video-segmentation-computing-education|KI-segmentierte Lehrvideos]]** mit festen Pausen beseitigten die Leistungslücke zwischen ADHS- und Nicht-ADHS-Lernenden — Barrierefreiheit als Katalysator, der allen zugutekommt. **[[text-simplification-its|MuTSE]]** bewertet [[llm|LLM-basierte]] [[intelligent-tutoring|Textvereinfachung]], um die Komplexität der Inhalte an das Leseniveau jeder lernenden Person anzupassen, eine [[human-in-the-loop-ai|Human-in-the-loop]]-Schicht der Barrierefreiheit. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** entwickeln LLM-[[automated-question-generation|Fragengenerierung]] für gehörlose und schwerhörige Lernende und stellen sich der Diskrepanz zwischen textbasierten KI-Prompts und gebärdensprachlichen Erstsprachen.

**Sensorischer Zugang: nicht-visuelle und taktile Ausgabe.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** macht gesprochene Konversation zur primären Modalität für sehbehinderte Kinder und beseitigt die visuelle Abhängigkeit. **[[tactile-statistical-graphs-accessibility|Taktile 3D-gedruckte Diagramme]]** verwandeln visuelle statistische Daten in berührbare Ausgaben für blinde und sehbehinderte Studierende. **[[pepper-robot-sign-language-lis-2025|Gebärdensprach-Roboter]]** erweitern [[educational-robotics|Bildungsrobotik]] um kommunikative Barrierefreiheit für gehörlose Lernende.

**[[generative-ai|Generative KI]] für sehbehinderte Lernende.** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** — eine [[qualitative-research|qualitative]] Fallstudie mit 21 sehbehinderten [[higher-ed|Studierenden im Grundstudium]] an drei palästinensischen Universitäten — fanden, dass generative KI Tempo, Inhalte und Vermittlung an individuelle Lernprofile anpasst und komplexe akademische Texte vereinfacht, während sie Inhalte über Modalitäten hinweg konvertiert (Text, Audio, visuell) und damit Materialien nutzbar macht, die zuvor unzugänglich waren. Lernende rahmten Unmittelbarkeit als grundlegende Anforderung der Barrierefreiheit und nicht als Annehmlichkeit, und sechs voneinander abhängige technologische Merkmale — Interaktivität, Nutzungsfreundlichkeit, Erschwinglichkeit, Multimodalität, Integration und Skalierbarkeit — bestimmten, ob generative KI in einem [[global-south|ressourcenarmen Kontext]] tatsächlich barrierefrei war, wobei [[usability-research|Usability]], Erschwinglichkeit und Barrierefreiheit einander verstärkten statt getrennte Designgesichtspunkte zu sein.

**Politik und Nachteilsausgleiche für Studierende mit Behinderungen.** **[[shin-ai-policies-sld-2026|Shin et al.]]** analysieren US-amerikanische KI-Richtliniendokumente und legen eine Lücke in der Orientierung für Studierende mit spezifischen Lernbehinderungen offen; sie schlagen Nachteilsausgleiche und Empfehlungen zur [[educational-policy-ai|Bildungspolitik]] vor, die im [[assistive-technology|Assistive Technology Act]] und in IDEA begründet sind. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** meta-analysieren 29 Studien zu KI-basierten Interventionen für Studierende mit Behinderungen und finden einen mittleren positiven Effekt auf [[learning-gains|Lernergebnisse]] (g = 0.588) — und argumentieren, KI müsse mehr tun als Barrierefreiheit sichern: sie müsse [[agency|agentische]] Teilhabe ermöglichen.

**Übermäßig weit gefasste KI-Verbote und assistive Transkription.** **[[wright-transcription-not-generation-2026|Wright (2026)]]** argumentiert, pauschale Verbote der „KI-Nutzung“ seien übermäßig weit gefasst, weil sie Sprach-zu-Text-Transkription und OCR nicht von generativem Verfassen unterscheiden: Erkennungstechnologien konvertieren das Format von Inhalten, die die studierende Person bereits selbst verfasst hat, statt neue Inhalte zu erzeugen; dennoch erfasst eine Richtlinie, die um die Identität der Plattform herum geschrieben ist, beides gleichermaßen. Studierende mit Beeinträchtigungen der Feinmotorik, der Lesbarkeit der Handschrift oder der Tippgenauigkeit — darunter Autismus-Spektrum-Bedingungen, Dyspraxie, Zerebralparese und repetitive Belastungsverletzungen — haben auf eigenständige Sprach-zu-Text-Werkzeuge und OCR vertraut, und Berichte deuten darauf hin, dass mehrere eigenständige Sprach-zu-Text-Produkte eingestellt oder verschlechtert wurden, sodass KI-gestützte Transkription die Funktionslücke füllt. Diese Substitution als Fehlverhalten zu behandeln wirft Fairnessbedenken auf im Hinblick auf die Pflicht zu angemessenen Anpassungen im britischen Equality Act 2010, die antizipatorische Public Sector Equality Duty, den US-amerikanischen Americans with Disabilities Act und das australische Disability Discrimination Act 1992, obwohl das Paper nicht behauptet, diese Charakterisierung sei vor einem Gericht geprüft worden. Es hält fest, dass die Schnittmenge von Behinderung, assistiver Technologie und KI-Fehlverhaltensrichtlinie wenig erforscht ist, dass das Ausmaß dieser Verdrängung nicht gemessen ist und dass dieselbe Ungenauigkeit ein unterschiedliches Risiko falsch positiver Detektionen erzeugt, da Detektoren den Text nicht-muttersprachlich englisch schreibender Personen mit geringer Perplexität als maschinelle Autorschaft lesen. Die rechtliche Exposition, die diese Überinklusion erzeugt, ist auf [[legal-issues-and-risks]] abgebildet.

**KI bei Legasthenie: Detektion, Unterstützung und [[personalized-learning|personalisiertes Lernen]].** Ein [[meta-analysis-systematic-review|systematischer Review]] aus dem Jahr 2026, interdisziplinär angelegt (Dabaghi, D'Urso & Sciarrone, PRISMA-gestützt, 2018–2024, n=72), findet KI, die Studierende mit Legasthenie in den Bereichen Detektion, assistive Unterstützung und personalisiertes Lernen unterstützt — allerdings entwickeln sich diese Stränge eher parallel als integriert, getrieben eher von technologischen Möglichkeiten als von konsolidierter Bildungstheorie. ML-basierte Hilfswerkzeuge für die Bildung umfassen fünf Bereiche (spezifische Anwendungen, Engagement, Personalisierung, Empfehlung, allgemeine Unterstützung), betonen aber technische Leistungsfähigkeit und Klassifikationsgenauigkeit und übersehen dabei ökologische Validität und praktischen Einsatz im Klassenzimmer. Die Detektionsforschung (EEG, Blickbewegungsmessung, ML-Modelle) zeigt diagnostisches Potenzial für frühe Intervention, erfordert aber oft Spezialausrüstung und kontrollierte Umgebungen, was Skalierbarkeit und Barrierefreiheit in typischen Schulumgebungen einschränkt. Offene Herausforderungen sind begrenzte experimentelle Validierung, Skalierbarkeit, [[ethics|ethische]]/[[privacy|datenschutzrechtliche]] Bedenken bei sensiblen Daten Studierender, begrenzte Unterstützung und Schulung für [[teacher-role|Lehrkräfte]] sowie Sprach- und Kulturbarrieren (die meiste Forschung zielt auf englischsprachige Populationen) — was bekräftigt, dass Barrierefreiheit validiert, skalierbar und ethisch fundiert sein muss, nicht bloß technisch demonstriert.

**Die Grenzen der Barrierefreiheit allein.** **[[genai-minoritized-knowledges-disability|Kritische Arbeiten]]** warnen, KI, die auf anglophonen, westlich-zentrierten Daten trainiert ist, könne behindertenzentrierte Erkenntnisweisen marginalisieren. Barrierefreie Formate garantieren keinen inklusiven oder gerechten Unterricht — was bekräftigt, dass Barrierefreiheit notwendig, aber nicht hinreichend ist und sich mit [[equity-in-ai-education|Gerechtigkeit in der KI-Bildung]] verbinden muss.

**Werkzeuge mit Fokus auf Nachteilsausgleich und diagnosegebundenem Zugang dominieren.** Ein Scoping Review von 40 Studien zu digitalen assistiven Technologien für neurodivergente Studierende fand, dass 28 eine formale Diagnose zur Bedingung der Teilnahme machten und nur drei an neurotypischen Kommilitoninnen und Kommilitonen statt an der studierenden Person selbst arbeiteten, während sie Umkehreffekte berichteten — kognitive Überlastung, Erschöpfung, Ablenkung und übermäßige Abhängigkeit von generativer KI ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]]).

## Implikationen für die Praxis

- **Die Formatbarriere zuerst priorisieren.** Untertitel, Transkripte, Alternativtexte, Kontraste und Tastaturbedienbarkeit sind die maßgebliche Schicht — ohne sie ist alles andere für Lernende, die sie brauchen, bedeutungslos.
- **KI nutzen, um Barrierefreiheit im großen Maßstab zu automatisieren.** KI kann Untertitel erzeugen, Texte vereinfachen, taktile/auditive Alternativen herstellen und die Darstellung anpassen — aber die Ausgabequalität mit Human-in-the-loop-Prüfungen bewerten.
- **Barrierefreiheit als notwendig, aber nicht hinreichend behandeln.** Ein barrierefreies Werkzeug ist nicht automatisch ein inklusives oder behindertengerechtes Werkzeug; Barrierefreiheit mit Design für [[inclusive-learning|inklusives Lernen]] und Unterstützung im Sinne der [[special-education|Sonderpädagogik]] verbinden.
- **Nachteilsausgleiche in Gesetz und Politik verankern.** Auf Standards (WCAG) und Gesetze (Assistive Technology Act, IDEA) Bezug nehmen, wenn KI-Werkzeuge gestaltet oder beschafft werden.

- **Mathematisch barrierefreie Transkription von [[physics-education|Physik]]videos (2026):** Ein KI-Arbeitsablauf mit Gemini (Audio + 1-Bild-pro-Sekunde-Videoabtastung) und LuaLaTeX übersetzt Physik-Lehrvideos in mathematisch barrierefreie PDFs nach PDF/UA-2 und ISO 32005, die regelmäßig die Barrierefreiheitsvalidierung bestehen — ein praktischer, kostenloser Weg, um videobasierte Inhalte mit vielen Gleichungen für blinde und sehbehinderte Studierende screenreader-lesbar zu machen ([[gemini-lualatex-physics-video-transcription-2026]]).

## Verbundene Konzepte
- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — weiterer Dachbegriff für die Gestaltung von Bildung über alle Unterschiede zwischen Lernenden hinweg
- [[special-education]] — Unterrichtsbereich für Lernende mit diagnostizierten Behinderungen
- [[universal-design-for-learning]] — vorausschauendes Designrahmenwerk
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — Headsets, Bewegungskrankheit und Gerätezugang entscheiden, wer es nutzen kann
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — die Überblicksseite für übermäßig weite Regeln, mangelhafte Evidenz und angemessene Anpassungen
- [[arts-design-and-media-education]]
## Verbundene Artikel
- [[shin-ai-policies-sld-2026]] — KI-Richtlinien und Nachteilsausgleiche für Studierende mit spezifischen Lernbehinderungen
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Meta-Analyse von KI-Interventionen für Studierende mit Behinderungen
- [[adhd-video-segmentation-computing-education]] — KI-segmentierte Videos mit festen Pausen
- [[text-simplification-its]] — LLM-basierte Textvereinfachung für intelligentes Tutoring
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-Fragengenerierung für gehörlose/schwerhörige Lernende
- [[kutti-ai-voice-first-learning-companion]] — Sprachorientierter Begleiter für sehbehinderte Kinder
- [[tactile-statistical-graphs-accessibility]] — Taktile 3D-gedruckte statistische Diagramme
- [[pepper-robot-sign-language-lis-2025]] — Pepper-Roboter mit Gebärdensprachunterstützung
- [[genai-minoritized-knowledges-disability]] — Kritische Perspektive auf KI und behindertenzentriertes Wissen
- [[gemini-lualatex-physics-video-transcription-2026]] — Mathematisch barrierefreie Physikvideo-Transkription mit Gemini+LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive generative KI für sehbehinderte Lernende
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative KI, virtuelle Realität und mehr: ein Scoping Review digitaler assistiver Technologien für neurodivergente Studierende in der Hochschulbildung
- [[wright-transcription-not-generation-2026]] — Transkription ist nicht Generierung: übermäßig weit gefasste KI-Verbote und die assistiven Werkzeuge, die sie erfassen
