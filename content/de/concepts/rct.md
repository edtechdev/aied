---
title: RCT
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Randomisierte kontrollierte Studie (RCT)** — ein Forschungsdesign, in dem Teilnehmende zufällig einer Behandlungs- oder Kontrollbedingung zugewiesen werden, um den kausalen Effekt einer Intervention auf ein Ergebnis zu schätzen. In der [[ai-education|KI in der Bildung]] sind RCTs der Goldstandard, um zu etablieren, ob ein KI-Werkzeug oder ein [[pedagogy|pädagogischer]] Ansatz [[learning-gains|Lernzugewinne]], Veränderungen des Engagements oder andere Ergebnisse *verursacht*, statt bloß mit ihnen zu korrelieren.

## Fragen zum Nachdenken

- Wenn eine Schule Ihnen sagt „Studierende, die das KI-Werkzeug nutzten, erzielten höhere Werte“, warum könnte das dennoch nicht belegen, dass das Werkzeug den Zugewinn verursacht hat — selbst wenn der Unterschied groß ist?
- Randomisierung balanciert bekannte *und unbekannte* Störvariablen über die Gruppen hinweg. Was, glauben Sie, erreicht zufällige Zuweisung, das der einfache Vergleich zweier intakter Klassenräume nicht kann, ganz gleich, wie gut angepasst sie aussehen?
- Die Seite nennt die RCT den Goldstandard, listet aber echte Kosten auf: künstliche Settings, sich schnell wandelnde KI, die Studien datiert, unterpowerte kleine Stichproben, und [[ethics|ethische]] Beschränkungen beim Vorenthalten hilfreicher Werkzeuge. Welcher dieser Kompromisse wird Ihrer Meinung nach in Schlagzeilen der Bildungsforschung am häufigsten ignoriert?
- Eine RCT mit 1,174 Teilnehmenden fand, dass [[generative-ai|GenAI]] etwa drei Viertel einer bildungsbasierten Produktivitätslücke schloss. Aber eine gut geführte RCT kann dennoch an einer engen Aufgabe in einem konstruierten Setting durchgeführt werden. Was sollten Sie über das *Ergebnismaß* prüfen, bevor Sie der Kausalbehauptung vertrauen?
- Betrachten Sie das Ethikproblem direkt: wenn Sie echten Grund hätten zu glauben, dass ein [[intelligent-tutoring|KI-Tutor]] Studierenden hilft zu lernen, ist es dann vertretbar, ihn einem halben Klassenzimmer für ein Semester zufällig vorzuenthalten? Wie würden Sie eine ethisch einwandfreie Studie entwerfen, die dennoch die Ursache isoliert?

## Einführung

Randomisierung ist es, was eine RCT von anderen Designs unterscheidet: indem Lernende zufällig den Bedingungen zugewiesen werden, balanciert eine RCT bekannte und unbekannte Störvariablen über die Gruppen hinweg, sodass jeder beobachtete Unterschied in den Ergebnisse der Intervention mit hoher interner Validität zugeschrieben werden kann.

### Wie RCTs in der Forschung auftreten

- **Mikro-RCTs als Antwort auf sich schnell bewegende Technologie:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] argumentieren, dass konventionelle groß angelegte Studien nicht mit [[edtech-platform|Plattformen]] für Tutoring Schritt halten können, die sich während einer Studie materiell verändern, und nutzen von [[teacher-role|Lehrkräften]] geführte mikro-randomisierte kontrollierte Studien über englische Sekundarschulen hinweg (644 von 929 Studierenden, die Posttests abschlossen, g = 0.33), um kausale Schätzung wiederholbar zu halten. Die Kompromisse stehen in ihrem eigenen Design: 30.7% Ausfall, [[curriculum-design|curriculum]]-ausgerichtete statt unabhängig standardisierte Ergebnisse, und nur vier Wochen Nachbeobachtung.
- **Kausalwirksamkeitsbehauptungen:** RCTs in der AIED testen, ob ein KI-Tutor, ein Werkzeug oder eine pädagogische Behandlung Ergebnisse verbessert. [[generative-ai-education-productivity-gaps|Ein randomisiertes Experiment zu generativer KI]] mit 1,174 Teilnehmenden fand, dass GenAI bildungsbasierte Produktivitätslücken substantiell verengt und etwa drei Viertel des anfänglichen Leistungsunterschieds schließt — eine klare kausale Schätzung der Wirkung von KI.
- **Vergleich zum Goldstandard:** Die Seite [[research-methods-aied|Forschungsmethoden]] verortet RCTs als das stärkste Design für interne Validität und hält gleichzeitig ihre Kompromisse fest — Kosten, künstliche Bedingungen, sich schnell wandelnde KI, kleine unterpowerte Stichproben, und ethische Grenzen beim Vorenthalten potenziell hilfreicher Werkzeuge von einer Kontrollgruppe.

- **Eine auf Äquivalenz statt Unterschied angelegte Studie.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]] randomisierten 2,383 Erwachsene auf KI-Tutoring, live menschliches Tutoring oder eine Videokontrolle, schrieben neue GRE-Items mit ehemaligen Testentwicklern von ETS und Kaplan, um Kontamination durch veröffentlichte Tests herauszuhalten, kreuz-balancierten die zwei Formen, und testeten Äquivalenz mit zwei einseitigen Tests gegen ±0.25 SD statt eines Unterschieds — die Designentscheidungen, die „kein signifikanter Unterschied“ zu einem interpretierbaren Ergebnis machen.
- **Gruppenrandomisierung, geringe Annahme, und was eine Intent-to-treat-Schätzung dann bedeutet.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] randomisierten 2,379 Studierende im Grundstudium über 13 Blöcke hinweg, indem sie *Lehrende* statt Studierende zuwiesen, sodass jede studierende Person in einem Seminar die Bedingung dieser bzw. dieses Lehrenden erbte — das Design, das eine Studie zur Einführung über mehrere Seminare machbar macht, und das die Inferenzprobleme erzeugt, die die Studie dann dokumentiert. Nur etwa 15% der Studierenden in behandelten Seminaren nutzten das Werkzeug je, sodass die berichteten Effekte das *Anbieten* von Zugang schätzen statt seiner Nutzung; die Autoren lesen die Intervention als den breiteren KI-Gebrauch, den ihre Einführung induzierte, und behandeln individuelle Sitzungen als separate Frage. Weil die Behandlung auf Ebene der Lehrenden zugewiesen wurde, ruht Inferenz auf 34 Clustern — einem Setting, in dem cluster-robuste Standardfehler die Präzision überschätzen —, sodass das Paper Randomisierungsinferenz neben ihnen berichtet und findet, dass seine Schlüsse robust sind. Die zwei Schlagzeileneffekte, ein Fall der Abschlussnoten um 0.37 SD in der Exakt-Match-Stichprobe und ein Fall der protokollierten Plattformteilnahme um 0.90 SD in beiden Stichproben, sind Konsequenzen auf Seminarebene, die eine Randomisierung pro studierender Person desselben Werkzeugs ohne Kontamination zwischen behandelten und kontrollierten Kommilitoninnen und Kommilitonen nicht hätte isolieren können.
- **Annahme begrenzt, was eine Studie testen kann, und Engagement-Unterstützung ist keine Dosis.** [[access-not-enough-ai-tutoring-2026|Robinson et al. (2026)]] führten zwei RCTs einer Leseplattform durch, bei denen nur 60.7% und 53.3% der Kontrollstudierenden die Plattform je nutzten; ein Engagement-Tutor erhöhte die gelesenen Geschichten um 71–80%, erzeugte aber keinen Leistungszugewinn, konsistent mit 2–5 Minuten pro Woche, die erreicht wurden.
- **Skala, die Nullresultate in Evidenz verwandelt.** [[mata-sustaining-ai-enabled-student-support-2026|Mata et al. (2026)]] begleiteten 8,708 Studierende über acht Semester hinweg mit der Power, Effekte von 0.05 SD zu detektieren, und fanden große, unmittelbare Bewegung bei datierten binären Aufgaben — 34 Prozentpunkte mehr Registrierung bis zum 16. August nach einer einzigen Erinnerung —, während akademische Leistung, Persistenz und Abschluss keinen detektierbaren Effekt zeigten. Die Skala ist die Designlektion: bei diesem N sind die akademischen Nullresultate präzise Ergebnisse statt Detektionsversagen, was die Schlussfolgerung lizenziert, dass ein Kommunikationswerkzeug das bewegt, was es adressieren kann, und nicht kumulative Lernergebnisse.
- **Ein Null-Mittelwert kann ausgleichende Heterogenität verdecken.** Eine vorregistrierte RCT, die 538 Lehrkräfte über 24 türkische Schulen auf Schule-Fachbereichs-Ebene randomisierte, fand, dass Leistung um 0.129 SD unter Lehrenden unter dem Median fiel, während sie um 0.054 unter denen über dem Median stieg, und Motivation um 0.111 SD fiel, wobei eine deckenkomprimierte Prüfung (Kontrollmittelwert 89.2/100) die Power begrenzte.([[genai-can-harm-teaching-rct-2026|Sungu, Lira & Duckworth (2026)]])
- **Vorregistrierung, die die Frage und den detektierbaren Effekt festsetzt.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] registrierten beide Kursstudien im Registry of Efficacy and Effectiveness Studies und verpflichteten sich im Voraus auf Intent-to-treat-Schätzung und eine minimal detektierbare Effektstärke von etwa 0.157, und randomisierten einwilligende Studierende jedes Semester mit einer zweiten Welle bei Add/Drop, sodass späte Einschreibende ins Design eintraten statt in die Standard-Analysestichprobe. Über 2,483 Studierende über zwei Kurse hinweg gebündelt liegt der Effekt an der A/B-Schwelle (vier Prozentpunkte), während die gebündelte Veränderung der numerischen Note die Korrektur für multiples Testen nicht überlebt — eine Erinnerung daran, dass ein registriertes primäres Ergebnis diszipliniert, welches von mehreren korrelierten Ergebnissen geglaubt wird.
- **Innerhalb intakter Seminare randomisieren, mit einer Prä-Behandlungs-Baseline.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni & Fryer (2026)]] randomisierten 454 Studierende im Grundstudium innerhalb dreier intakter Marketing-Seminare nach Drop/Add und maßen alle vier Ergebnisse zu T1, bevor eine studierende Person Chatbot-Zugang hatte, sodass der semesterlange Vergleich auf einer gemessenen Baseline ruht statt einer angenommenen. Das flache Ergebnis (keine Gruppe-×-Zeit-Interaktion erreichte Signifikanz; der größte berichtete Effekt war d = 0.050, beim Interesse) wird neben der Annahme berichtet — 0.89 Logins pro Woche gegenüber einem zugewiesenen einmal pro Woche —, was verhindert, dass ein Nullresultat über eine schwach genutzte Behandlung als ein Nullresultat über das Werkzeug gelesen wird.
- **Within-Subject-Crossover, und eine Kontrolle auf bestem Praxisstand.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] ließen jede bzw. jeden von 194 Studierenden der Lebenswissenschaften in Harvard zwei Physiklektionen bearbeiten — einmal in einer [[active-learning|Aktiv-lernen]]-Sitzung im Kurs und einmal mit dem eigenen KI-Tutor des Kurses, in kreuz-balancierter Reihenfolge mit Prä- und Posttests um jede herum —, sodass jede studierende Person ihre eigene Kontrolle dient und der Vergleich der *Vermittlungsmodi* nicht dadurch konfundiert ist, wer was zugewiesen bekam. Die zweite Wahl des Designs zählt ebenso sehr: der Vergleichswert war forschungsbasiertes aktives Lernen statt einer Vorlesung, sodass der Vorteil (medianer Posttest 4.5 gegenüber 3.5) gegen aktuelle Bestpractice gemessen ist und nicht als „KI schlägt Unterrichten“ gelesen werden kann.

### Stärken und Grenzen

- **Stärken:** stärkste kausale Inferenz; saubere Ergebnismessung; unterstützt Effektstärkenschätzung; balanciert Störvariablen durch Randomisierung.
- **Grenzen:** kostspielig und langsam; künstliche Settings können die ökologische Validität verringern; KI-Werkzeuge verändern sich schneller, als Studien laufen können; kleine Stichproben sind oft unterpowered, um aussagekräftige Effekte zu detektieren; ethische Beschränkungen beim Vorenthalten potenziell nützlicher KI von einer Kontrollgruppe. Zwei dieser Grenzen verändern ihre Form, wenn die Zuweisung geclustert ist: die effektive Stichprobe wird die Anzahl der *Cluster* statt die Anzahl der Studierenden, sodass eine Studie groß nach Kopfzahl und dünn nach diesem Maß sein kann — Liu et al.s 2.379 Studierende ruhen auf 34 Clustern auf Lehrendenebene —, und wenn die Annahme freiwillig und gering ist, beantwortet eine Intent-to-treat-Schätzung, ob das Anbieten des Werkzeugs Ergebnisse veränderte, nicht ob seine Nutzung es tat.

Für die ausführlichere Behandlung experimentellen Designs in der KI in der Bildung — einschließlich wann eine RCT gegenüber quasi-experimentellen, Befragungs- oder rechnerischen Designs angemessen ist — siehe [[research-methods-aied]].

## Verbundene Konzepte

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — das Design hinter der stärksten Evidenz zu Studierendenunterstützung

## Verbundene Artikel

- [[generative-ai-education-productivity-gaps]] — Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching: an RCT
- [[access-not-enough-ai-tutoring-2026]] — Access is not enough: human support improves engagement with AI tutoring
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Group randomization by instructor: a 0.37 SD fall in final grades and a 0.90 SD fall in platform participation, with 15% uptake and inference on 34 clusters (Liu et al. 2026)
