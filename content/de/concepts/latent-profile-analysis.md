---
title: Latent-Profile-Analyse
created: "2026-09-20T12:39:59-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
methods: [quantitative-research, research-methods-aied]
confidence: high
translation_of: concepts/latent-profile-analysis
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Latent Profile Analysis (LPA)** — eine personenzentrierte Methode, die eine Stichprobe in nicht beobachtete Untergruppen (Profile) sortiert, wenn jeder Fall zugleich durch mehrere Variablen beschrieben wird. Sie ist das stetigindikatorische Mitglied der Mischmodellfamilie; ihr Geschwister **Latent Class Analysis (LCA)** wendet dieselbe Logik auf kategoriale Indikatoren an. Beide stellen eine andere Frage als die [[quantitative-research|variablenzentrierten]] Modelle, die die KI-in-der-Bildung-Forschung dominieren: nicht „wie viel sagt X im Durchschnitt Y vorher“, sondern „wie viele verschiedene Arten von lernender Person, [[teacher-role|Lehrkraft]] oder Manager verstecken sich in diesem Durchschnitt.“ In dieser Wissensbasis zeigt die Methode, dass ein KI-Werkzeug sehr unterschiedlich über Untergruppen hinweg ankommt — fünf ethisches-Bewusstsein-Profile unter ghanaischen Undergraduates, sechs Berufsfähigkeits-Typologien unter ukrainischen Bildungsmanagern, vier [[generative-ai|Generative-KI]]-Akzeptanzprofile unter taiwanesischen Lehramtsstudierenden.

## Fragen zum Nachdenken

- Eine Studie berichtet, dass die durchschnittliche Bequemlichkeit der Studierenden mit KI bei 3,8 von 5 liegt. Was könnte dieser Durchschnitt verbergen, wenn eine Gruppe begeistert und eine andere still widerständig ist?
- LPA modelliert stetige Werte; LCA modelliert Kategorien. Wenn Sie Interviewantworten als „nennt [[cognitive-offloading|Überabhängigkeit]]: ja/nein“ kodieren, welche brauchen Sie?
- Eine Fünf-Profil-Lösung berichtet eine Entropie von 0,816; ein Vier-Profil-Rivale erreicht 0,929, beschreibt die Daten aber weniger reich. Welche würden Sie publizieren?
- Profile sind deskriptiv, nicht kausal. Wenn ein „Resistant-Skeptics“-Profil hohe wahrgenommene Nutzungsfreundlichkeit, aber geringe Adoptionsabsicht zeigt, was stützt das, und was nicht?

## Einführung

Die meiste KI-in-der-Bildung-Evidenz ist variablenzentriert: sie schätzt durchschnittliche Beziehungen, und Durchschnitte nehmen Homogenität an. Personenzentrierte Methoden nehmen stattdessen die Person als Analyseeinheit und fragen, wie viele verschiedene Konfigurationen von Attributen in der Stichprobe existieren. LPA gehört zu dieser Familie, und ihr Ertrag hier ist, dass sie die Vielfalt der Lernenden von einer rhetorischen Behauptung in einen messbaren Befund verwandelt: wenn sich die ethisches-Bewusstsein-Profile von 26,1 Prozent bis 4,5 Prozent erstrecken trotz eines komfortablen Stichprobenmittels, hört Differenzierung auf, eine Designpräferenz zu sein.

## Was die Methode tut, und wann sie das richtige Werkzeug ist

LPA nimmt an, dass die Stichprobe aus einer Mischung von Untergruppen gezogen wird, jede mit eigenen Mittelwerten und Varianzen auf den Indikatoren. Die Forschenden liefern die Indikatoren und die Anzahl der Gruppen; der Algorithmus schätzt die Zugehörigkeitswahrscheinlichkeit jedes Falls und ordnet nach höchster Wahrscheinlichkeit zu, wobei er ein Mittelwertprofil pro Gruppe, eine Größe pro Profil und eine Zusammenfassung zurückgibt, wie sauber sich Fälle trennen. Welches Familienmitglied Sie nutzen, folgt den Indikatoren, nicht der Forschungsfrage:

- **LCA — kategoriale Indikatoren.** Becker und Kolleginnen und Kollegen wandelten kodierte Antwortkategorien aus den offenen Antworten von 1.189 Physikstudierenden in Indikatorvariablen um und behielten zwei Klassen: Pragmatic Users (70 Prozent) und Skeptical Non-Users (30 Prozent); weil ein nicht erwähntes Thema als „keine Zustimmung“ zählt, markieren die Autoren Zero-Inflation im Analysedatensatz.
- **LPA — stetige Indikatoren** wie Skalenwerte und Konstruktmittelwerte. Chen und Kolleginnen und Kollegen profilierten 128 taiwanesische Lehramtsstudierende auf fünf [[technology-acceptance-model|TAM]]/UTAUT2-Konstrukten; Acquah und Kolleginnen und Kollegen profilierten 509 ghanaische Undergraduates auf drei Dimensionen ethischen Bewusstseins; Schweder und Kolleginnen und Kollegen profilierten 2.464 Studierende auf [[motivation|motivationaler]] Bedürfnisbefriedigung.
- **Latent-(Profil-)Transitionsanalyse** erweitert die Familie über die Zeit, schätzt Profile pro Welle und die Wahrscheinlichkeit des Wechsels zwischen ihnen. Liang und Kolleginnen und Kollegen verfolgten die KI-Lernmotivation von 2.086 Studierenden über ein Jahr; Wu folgte 457 Japanischlernenden über drei Wellen, wobei das maladaptive Profil von 26,48 auf 17,74 Prozent schrumpfte.

Gewöhnliches Clustering ([[machine-learning|k-means]] und hierarchisch) verfolgt dieselbe personenzentrierte Absicht, partitioniert Fälle aber durch geometrische Distanz statt durch Schätzung eines Wahrscheinlichkeitsmodells. Greifen Sie zu LPA oder LCA, wenn die Frage Untergruppen betrifft — ob „die lernende Person“ eine Fiktion auf dem Aggregationsniveau Ihrer Stichprobe ist, und ob sich Untergruppen in Form ebenso wie in Niveau unterscheiden. Greifen Sie nicht dazu, wenn Sie einen durchschnittlichen Behandlungseffekt brauchen: eine Fünf-Profil-Lösung innerhalb eines [[rct|randomisierten Versuchs]] eines [[intelligent-tutoring|adaptiven Tutors]] sagte Posttestunterschiede vorher (partielles η² = .27), fand aber keine Bedingung × Profil-Interaktion (ps ≥ .198).

## Wie der Korpus sie nutzt

Drei Nutzungen kehren wieder.

- **Heterogenität etablieren, bevor man für sie gestaltet.** Kremen und Kolleginnen und Kollegen' Umfrage von 395 ukrainischen Bildungsmanagern nutzte personenzentrierte LCA, um zu zeigen, dass „der Manager“ eine Fiktion ist: sechs Typologien reichen von Kompetenz-beschränkt (25,6 Prozent, willig, aber ungeschickt) bis Barrierefreie Skeptiker (höchste Berufsfähigkeit, aber 74 Prozent KI-Misstrauen), und die Autoren lesen sie als Mandat für differenziertes Training.
- **Systemübergreifende Abstimmung als Stabilitätsprüfung.** [[teachers-ai-belief-profiles-talis-2024-2026|Fang und Jin (2026)]] behielten vier Glaubensprofile aus 40.680 Lehrkräften über 49 Bildungssysteme hinweg (Indifferent 6,13% bis Measured Endorsement 56,29%), und das Ändern der Abstimmungsreferenz ließ die Klassifikationsübereinstimmung bei 99,62% —, während die Nützlichkeit die Profile in allen 49 Systemen identisch ordnete und das Risiko nicht.
- **Untergruppen wiederherstellen, die ein Aggregat verbirgt.** Acquah und Kolleginnen und Kollegen behielten fünf ethisches-Bewusstsein-Profile von Comprehensive Very High (26,1 Prozent) bis Low Ethical Awareness (4,5 Prozent, Benefizienz 2,06), eine Streuung, die von knapp über einem Viertel der Stichprobe bis unter ein Zwanzigstel reicht. Chen und Kolleginnen und Kollegen fanden, dass Resistant Skeptics hohe wahrgenommene Nutzungsfreundlichkeit, aber sehr geringe Verhaltensabsicht berichteten — die klarste Demonstration des Korpus, dass das Nutzungsfreundlichkeit/Absicht-Paradox für ein mittelwertiges Modell unsichtbar ist.
- **Kalibrierung statt Niveau profilieren.** Die Lehrkraft-KI-Kompetenz-Studie wendete LPA auf die Übereinstimmung zwischen [[self-report-measures|Selbstauskunft]] und objektiven Maßen an und ergab sechs Profile: Überschätzung, Unterschätzung, Alignment, und eine niedrig/niedrig-Gruppe, konzentriert unter Lehrkräften ohne vorherige [[ai-literacy|KI-Kompetenz]]-Erfahrung. Hier beschreiben Profile ein Muster über Instrumente hinweg, nicht ein Werteband.

Profile dienen dann als unabhängige Variable: Fach prägte Zugehörigkeit unter Lehramtsstudierenden (Cramér's V = 0,532, STEM-Studierende konzentriert in Technology Pioneers), und Zugehörigkeit sagte später [[self-efficacy|Selbstwirksamkeit]], Burnout und [[anxiety-and-stress|KI-Angst]] anderswo im Korpus vorher.

## Die Anzahl der Profile wählen

Keine einzelne Statistik wählt die Lösung; der Korpus behandelt Retention als ein Urteil, das aus mehreren Kriterien zusammen gefällt wird.

- **Informationskriterien (BIC, AIC).** Niedriger ist meist besser, aber ein monotoner Rückgang signalisiert ein Problem statt einen Gewinner. In der ukrainischen Managerstudie fiel BIC monoton über den Zwei- bis Sechs-Klassen-Bereich ohne klares Minimum, und die Autoren nennen ihre Sechs-Klassen-Lösung auf dieser Evidenz explorativ.
- **Entropie.** Eine Zusammenfassung der Klassifikationssicherheit, näher an 1 bedeutet sauberere Zuordnung. Chen und Kolleginnen und Kollegen berichten 0,985 für vier Profile; Acquah und Kolleginnen und Kollegen berichten 0,816 für fünf Profile gegenüber 0,929 für vier, und schlagen selbst Konsolidierung für eine stabilere Gruppierung vor.
- **[[explainable-ai|Interpretierbarkeit]] und Profilgröße.** Die Vertrauen-in-KI-Profilierungsstudie behielt drei Cluster, obwohl der Calinski–Harabasz-Index zwei bevorzugte, weil drei interpretierbar waren, und bemerkt, dass ein Silhouette-Koeffizient von 0,288 schwache oder grenzwertige Trennung signalisiert. Chen und Kolleginnen und Kollegen warnen, dass ihr kleinstes Profil (14,06 Prozent von 128 Fällen) instabil sein könnte, und das kleinste Profil der Ghana-Studie hält nur 23 Studierende, was die Autoren zum Mergen vorschlagen.
- **Stabilität unter Resampling.** Bootstrap-Stabilität ist die ehrliche Prüfung, ob Profile in einer neuen Stichprobe wieder auftreten würden: der mittlere adjustierte Rand-Index war 0,385 für die ukrainische Sechs-Klassen-Lösung, aber 0,989 über 100 zufällige Initialisierungen in der Vertrauen-in-KI-Studie — dasselbe nominale Design, sehr verschiedenes Beweisgewicht.
- **Bootstrap-Likelihood-Ratio-Tests (BLRT)** und der Lo–Mendell–Rubin-Test sind Standardbegleiter von BIC und Entropie in der weiteren Mischmodellliteratur, aber die Profilstudien in dieser Wissensbasis berichten sie nicht. Wo eine Seite nur BIC und Entropie berichtet, behandeln Sie die Klassenzahl als provisorisch.


- **Der Likelihood-Ratio-Check, den dieser Korpus sonst auslässt.** [[ai-attitude-latent-profiles-career-development-2026|Song et al. (2026)]] behielten vier Profile (Entropie 0,824) aus 379 Betriebswirtschaftsstudierenden und berichteten die Lo–Mendell–Rubin-Entscheidung: signifikant bei vier (p = 0,035) und nicht signifikant bei fünf (p = 0,376).
- **Retention verteidigt mit der Rivallösung und einem Likelihood-Ratio-Test.** [[suria-martinez-academic-self-efficacy-motor-disabilities-2026|Suriá-Martínez et al. (2026)]] berichten, dass eine Vier-Profil-Lösung die 102 Studierenden etwas besser passte, aber nicht signifikant verbesserte und eine kleinste Klasse bei 12,7 Prozent beließ, sodass sie drei Profile (Entropie .89) behalten statt das numerisch besser passende Modell. Die verlierende Lösung und was sie disqualifizierte zu berichten ist das, was die behaltene Klassenzahl zu einem Urteil macht, das Lesende prüfen können, und das zweckgebaute 12-Item-KI-Nutzungsmaß der Studie — validiert an einer separaten Stichprobe von 85, die die Autoren als vorläufig bezeichnen — markiert die andere Grenze ihrer Evidenz.

Berichten Sie die Vergleiche, nicht nur den Gewinner: eine Seite, die sagt „wir behielten fünf Profile“, ohne die Rivallösung, die Entropiewerte und die Größe des kleinsten Profils gibt Lesenden keine Möglichkeit, die Wahl zu beurteilen.

## Ergebnisse lesen und berichten, und wo sie schiefgehen

Lesen Sie ein Profil nach seiner Form ebenso wie nach seinem Niveau. In der Ghana-Studie unterscheiden sich die Profile in der Konfiguration von Autonomie, Benefizienz und Fairness — das größte paart starke Autonomiezustimmung mit geringerer Benefizienz —, sodass zwei Profile auf ähnlichen Gesamtniveaus sitzen und dennoch verschiedenen Unterricht verlangen können.

Vier Vorsichtsmaßnahmen, jede in den Quellseiten genannt:

1. **Profile sind deskriptiv.** Sie sagen, wer in der Stichprobe ist, nicht warum, und querschnittliche Designs können Stabilität oder Bewegung nicht zeigen (die Lehramtsstudierenden-, Ghana- und Physikstudien). Nur die longitudinalen Analysen — eine jahrelange Transitionsstudie und Wus drei Wellen — stützen Behauptungen über Bewegung, und selbst dort ist Bewegung Assoziation, nicht Interventionseffekt.
2. **Zugehörigkeit ist geschätzt, nicht beobachtet.** Fälle werden nach höchster posteriorer Wahrscheinlichkeit zugeordnet, sodass Individuen nahe einer Grenze mit echter Unsicherheit klassifiziert werden; geringe Entropie und schwache Silhouette-Werte bedeuten, dass die Grenzen als weich gelesen werden sollten.
3. **Indikatorwahl definiert die Antwort.** Profile hängen vollständig davon ab, welche Variablen ins Modell eintreten, sodass Heterogenität, die die Studie nie misst, Heterogenität ist, die sie nicht finden kann — die Ghana-Studie erhob nur Geschlecht unter den Hintergründen und kann daher nicht sagen, was Zugehörigkeit vorhersagt.
4. **Entdeckte Heterogenität ist nicht entdeckte Kausalität.** Das Profil × Bedingung-Null des Tutorversuchs ist die Erinnerung: einen Outcome innerhalb eines Versuchs zu profilieren ist kein Moderationstest der Behandlung.

## Folgerungen für KI in der Bildung

1. **Heterogenität messen, bevor eine Intervention empfohlen wird.** Profile in diesem Korpus platzieren wiederholt ein Viertel oder mehr einer Stichprobe unter dem Schlagzeilendurchschnitt; für die Profile gestalten, die existieren, statt für das Mittel.
2. **Personenzentrierte Methoden bevorzugen, wenn das Ergebnis Differenzierung ist.** Die Lehramtsstudierenden- und Managerstudien präsentieren beide diese Verschiebung als ihren methodischen Beitrag, weil durchschnittliche Prädiktoren die Konfigurationen nicht offenbaren können, die differenzierte Unterstützung rechtfertigen.
3. **Retentionsevidenz vollständig berichten.** BIC/AIC-Vergleiche, Entropie, Profilgrößen und eine Stabilitätsprüfung publizieren, und klar sagen, wann eine Klassenzahl explorativ ist.
4. **Profile als Diagnostik behandeln, nicht als Etiketten.** Ein Profil ist ein Forschungskonstrukt mit geschätzter Grenze, sodass ein Werkzeug, das Individuen benannten Kategorien zuordnet, die Vorsicht jedes [[educational-measurement|Mess]]instruments trägt —, und [[differential-effects-across-learner-groups|unterschiedliche Effekte zwischen Gruppen von Lernenden]] die Prüfung jeder Subgruppenanalyse verdienen.

## Verbundene Konzepte

- [[quantitative-research]]
- [[mixed-methods-research]]
- [[research-methods-aied]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[differential-effects-across-learner-groups]]
- [[technology-acceptance-model]]

## Verbundene Artikel
- [[ai-attitude-latent-profiles-career-development-2026]] — Lo–Mendell–Rubin-Retentionsevidenz für vier KI-Einstellungsprofile bei 379 Betriebswirtschaftsstudierenden

- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Three-wave latent profile transition analysis of psychological adaptation
- [[liang-ai-learning-motivation-sdt-2026]] — Latent transition analysis of three motivation profiles over a year
- [[trust-in-ai-psychological-profiles-ml-2026]] — K-means profiles; silhouette vs. Calinski–Harabasz disagreement; ARI 0.989
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Hierarchical and k-means clustering into four GenAI adoption personas

- [[teachers-ai-belief-profiles-talis-2024-2026]] — Four teacher AI-belief profiles from 40,680 teachers in 49 systems, with alignment stability
