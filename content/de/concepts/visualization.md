---
connected_resources: [drawsplat]
title: Visualisierung
type: concept
technology: [ai-technologies, learning-analytics, multimodal, visualization]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-10T09:04:23-04:00"
translation_of: concepts/visualization
source_updated: "2026-09-30T09:53:03-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Visualisierung** — die Nutzung von Datenvisualisierungen, Infografiken, Dashboards, Diagrammen und anderen grafischen Darstellungen, um Information für Lernen und Analyse verständlich zu machen. Über die Bildung hinweg wird Visualisierung zunehmend sowohl von KI erzeugt (Text-zu-Bild, [[multimodal]]-Folien- und Diagrammanalyse) als auch als die Schnittstelle genutzt, über die Lernende, Lehrkräfte und Analysesysteme über geteilte Daten schlussfolgern.

## Fragen zum Nachdenken

- Ein Diagramm oder Dashboard kann Daten klar machen — aber ist einfach eine Visualisierung zu *sehen* dasselbe wie sie zu verstehen? Die [[research-methods-aied|Forschung]] der Seite legt nahe, dass es mehr darauf ankommt, wie Sie mit einer Visualisierung interagieren, als auf das Diagramm selbst. Erinnern Sie sich an ein Dashboard oder einen Graphen, den Sie angesehen, aber nicht wirklich daraus gelernt haben. Was fehlte an der bloßen Anzeige?
- Konventionelle Lern-Dashboards folgen einem Modell „Daten zeigen, auf Einsicht hoffen“. Der Befund hier ist, dass Lernende, die Fragen zu ihren Daten beantworten, *bevor* sie die Kennzahlen sehen, besser reflektieren und kalibrieren als jene, die Diagramme passiv betrachten. Warum könnte es verändern, was Sie aus dem Sehen der tatsächlichen Daten gewinnen, gezwungen zu sein, zuerst vorherzusagen?
- KI kann nun genaue Visualisierungen spezialisierten Inhalts erzeugen — eine Studie erhöhte Domänengenauigkeit von 12 % auf 78 %, indem ein Text-zu-Bild-Modell auf nuklearen Konzepten feintunt wurde. Aber die Seite findet auch, dass kein Modell gleichförmig kompetent ist. Wo würden Sie einer KI-erzeugten Visualisierung vertrauen, und wo würden Sie darauf bestehen, sie gegen einen menschlichen Experten zu prüfen?
- Teilnehmende einer Studie fanden KI-erzeugte Daten-Comics engagierender und verständlicher, doch viele markierten auch Risiko von Fehlinformation und Informationsüberlastung. Wie wägen Sie die Anziehungskraft einer überzeugenden KI-Visualisierung gegen ihr Potenzial ab, irrezuführen — und was würden Sie verifizieren, bevor Sie ihr vertrauen oder sie nutzen?
- Die Seite warnt, dass die *Konfidenz* eines Modells nicht seine *Verlässlichkeit* ist: Systeme können bei Schweregradurteilen stark auseinandergehen, während sie grundlegende Konstrukte richtig erfassen. Wenn Sie sich auf ein KI-Werkzeug verlassen würden, um Folien, Aufsätze oder Daten zu bewerten, wie würden Sie entdecken, wo seine Konfidenz einen schweren Fehler verbirgt?
- Eine Studie fand, dass Studierende den Großteil ihres Blicks auf Code verwendeten trotz aufwendiger visueller Gerüste — visuelle Hilfen erfassten einfach nicht die Aufmerksamkeit aller. Was legt das nahe über die Annahme, ein schönes Diagramm oder Dashboard werde automatisch allen Lernenden helfen, sich zu engagieren? Was außer Visualisierungen prägt, wie Menschen ein Werkzeug tatsächlich nutzen?

## Einführung

Visualisierung ist die Nutzung grafischer Darstellung — Dashboards, Diagramme, Grafiken, Infografiken und multimodale Anzeigen —, um Lernen und Lerndaten verständlich zu machen. Ihre etablierteste Bildungsrolle ist das [[learning-analytics|Learning-Analytics]]-Dashboard, wo das dominante Modell *Daten zeigen und auf Einsicht hoffen* interaktiven Designs gewichen ist: die Evidenz zeigt, dass es mehr darauf ankommt, wie Lernende mit einer Darstellung interagieren, als ob sie sie sehen, und dass Selbst-Elizit-Prompts und [[pedagogical-agent|pädagogische Agenten]] die Kalibrierung mehr verbessern als passive Kennzahlen. Dieselbe Frage — regt die Anzeige Denken an oder ersetzt sie es? — verbindet Visualisierung mit [[desirable-difficulties]] und [[metacognition]].

## Visualisierung als Lernschnittstelle

Die etablierteste Rolle der Visualisierung in der Bildung ist das Learning-Analytics-Dashboard. Konventionelle Learning Analytics Dashboards (LADs) operieren nach einem Modell „Daten zeigen → auf Einsicht hoffen“ und präsentieren Verhaltenskennzahlen in Diagrammen, die Lernende passiv betrachten. Forschung zu [[interactive-learning-dashboards-engagement]] stellt dieses Paradigma infrage: wenn ein Dashboard einen [[llm]]-gestützten [[pedagogical-agent|pädagogischen Agenten]] und eine interaktive Judgment-of-Learning-Selbstbewertung hinzufügt, erzeugte die „Elizit“-Bedingung — in der Lernende Fragen zu ihren Daten beantworten, bevor sie Kennzahlen sehen — mehr Reflexion und genauere Beherrschungskalibrierung als entweder ein passives Dashboard oder ein „erzählender“ Agent. Die Lektion ist, dass es mehr darauf ankommt, wie Lernende mit Visualisierungen interagieren, als sie bloß zu sehen. Das verbindet sich mit [[learning-analytics]] und [[self-regulated-learning]], wo visuelles Feedback die Kalibrierung [[metacognition|metakognitiven]] Urteils unterstützt statt einfache Informationsanzeige.

[[teacher-role|Lehrkräfte]]-seitige Dashboards fügen eine unterscheidende Menge von Designlektionen hinzu. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] fanden, dass Lehrkräfte systematisch einfachere, traditionellere Visualisierungen bevorzugten (Balkendiagramme, Kreisdiagramme, Legenden), selbst wenn komplexere Designs (z. B. Heatmaps) detailliertere Einsichten erbrachten — visuelle Präferenz stimmte nicht immer mit Informativität überein, was Debatten über die vergleichende Lesbarkeit von Kreisdiagrammen wiederholt. Visualisierungskompetenz (VL) trieb Designpräferenzen nicht, aber Lehrkräfte mit höherer VL erzeugten tiefere, detailliertere Interpretationen (z. B. identifizierten mehr von ihnen Trends in Zeitreihendaten), was VL als [[research-methods-aied|Störfaktor]] dafür bestätigt, wie Lehrkräfte Analytics-Designs lesen. Für Gruppenvergleich bevorzugten Lehrkräfte stark Überlagerung gegenüber Nebeneinanderstellung und bevorzugten Diagramme, die volle Information zeigten (z. B. einschließlich einer Gruppe „Studierende, die nicht zugesehen haben“) statt expliziter Differenzkodierung, obwohl jüngere Lehrkräfte Differenzdiagramme höher reihten. Diese Befunde argumentieren, dass Dashboard-Design die angegebenen Präferenzen der Lehrkräfte gegen die interpretative Tiefe ausbalancieren muss, die komplexere Kodierungen erlauben.

Dashboards fungieren auch als geteilte Repräsentationen, die menschliches und KI-Schlussfolgern überbrücken. Das CLARA-System nutzt LLM-erzeugte Artefakte — Konzeptkarten und Zusammenarbeits-Assessments mit sieben Dimensionen — als gemeinsamen Grund zwischen Dashboard-Nutzenden und [[agentic-ai|KI-Agenten]] und indexiert sie in getrennte Vektor-Sammlungen, damit beide Parteien über dasselbe sichtbare, abfragbare Material schlussfolgern. In ähnlicher Weise rahmt das Expert Cognition Dashboard Analytics als „cognition intelligence“ neu und verwandelt rohe Verhaltensweisen der Lernenden in interpretierbare Kognitionsstrukturen über individuelle, Klassen- und KI-Zwilling-Expertenstufen hinweg. Diese Systeme positionieren Visualisierung nicht als Ausgabe, sondern als eingebettete Schlussfolger-Infrastruktur innerhalb [[ai-technologies]]-nativer Bildung.

## KI-erzeugte und multimodale visuelle Inhalte

Ein zweiter großer Strang betrifft KI, die Visualisierungen direkt erzeugt. [[nuclear-diffusion-text-to-image-learning-2026]] zeigt, dass domänenadaptierte Text-zu-Bild-Modelle genaue Illustrationen spezialisierter MINT-Konzepte erzeugen können: Feinabstimmung von Stable Diffusion auf nuklearen Domänenbildern erhöhte die Domänengenauigkeit von 12 % auf 78 % und ermöglichte es Instruierenden, korrekte Visualisierungen von Reaktorkomponenten und Sicherheitssystemen auf Abruf zu erzeugen. Diese generative Kapazität ist mächtig, aber uneben. [[mllm-scientific-visualization-literacy]] [[benchmark|benchmarkt]] sechs multimodale große Sprachmodelle gegen 485 menschliche Teilnehmende bei wissenschaftlicher Visualisierungskompetenz und findet keine gleichförmige Kompetenz: Closed-Source-Gemini übertraf den menschlichen Mittelwert in mehreren Teilmengen, während alle [[open-source]]-Modelle darunter fielen, mit besonderen Schwächen bei feinkörniger [[quantitative-research|quantitativer]] Schätzung und texturbasierten oder integrationsbasierten Visualisierungen. KI sollte daher menschliche Visualisierungskompetenz unterstützen — nicht ersetzen —, ein Befund mit direkten Implikationen für [[ai-literacy]] und [[formative-assessment]].

Ethik und Verlässlichkeit mäßigen die Begeisterung für KI-erzeugte visuelle Inhalte. [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] fand, dass [[generative-ai|GenAI]]-assistierte Daten-Comics [[student-engagement|Engagement]] und Verständnis gegenüber konventionellen Visualisierungen unabhängig von früherer Visualisierungskompetenz verbesserten, doch Teilnehmende erhoben Bedenken zu Fehlinformationsrisiko und [[academic-integrity|Autorschafts]]-Zuschreibung, und zwei Drittel markierten Nachteile wie Informationsüberlastung durch überladene Layouts. Der kontrafaktische Benchmark CFES-P24 erweitert diese Prüfung auf [[cfes-p24-multimodal-slide-auditing-2026|Folien-Auditing]] und zeigt, dass multimodale LLMs verlässlich [[learning-design]]-Konstrukte erkennen können (Operationen, Prinzipien, Evidenz-Lokalisierung), während sie bei vergleichendem Urteil und Schweregradkalibrierung stark auseinandergehen — ein Beleg dafür, dass zusammengesetzte Werte verbergen, welche Fähigkeit versagt, und dass Konfidenz nicht Verlässlichkeit ist. Zusammen argumentieren diese Arbeiten für geschichtete [[ai-ed-evaluation|Evaluation von KI]]-erzeugten Visualisierungen statt ganzheitlicher Bewertungen.

## Folien-, Comic- und Multi-View-Werkzeuge in der Praxis

Praktische Systeme wenden diese Prinzipien in großem Maßstab an. AISSA kombiniert LLM-basierte Rubrikbewertung mit Learning-Analytics-Dashboards, um automatisiertes, iteratives Feedback zu Präsentationsfolien der Studierenden zu liefern, wobei es 90 Präsentationen in jeweils 1–3 Minuten zu Cent-Kosten pro Evaluation mit hoher wahrgenommener [[usability-research|Usability]] bearbeitet — während Studierende Feedback selektiv anwandten und manchmal Empfehlungen missachteten, die mit ihrem visuellen Design in Konflikt standen. In der [[cs-education|Programmierausbildung]] paart Flowcode ein Code-Struktur-Flussdiagramm mit einem lernorientierten Chat, um angehenden kreativen Programmierenden zu helfen, gefundene Beispiele zu verstehen und zu erweitern, wobei Visualisierung und [[desirable-difficulties|produktive Friktion]] KI-Nutzung hin zum Lernen statt zum Umgehen steuern. Doch visuelle [[scaffolding|Gerüste]] sind nicht universell wirksam: [[code-anchor-multi-view-visualization]] fand, dass Studierende ~47 % der Blickzeit auf Code verwendeten trotz visueller Gerüste, getrieben von Handlungsfähigkeit, repräsentationaler Passung und der wahrgenommenen Legitimität metaphorischer Ansichten. Diese [[student-experience|Lernendenerfahrungs]]-Befunde mahnen zur Vorsicht, dass Visualisierungsdesign auf [[affective-computing|affektive]] und soziale Faktoren achten muss, nicht bloß auf kognitive Ermöglichungen.

## Implikationen

Über die hier diskutierten Arbeiten hinweg tritt Visualisierung als doppelt genutztes Medium hervor: KI erzeugt und interpretiert zunehmend Visualisierungen, während Dashboards und interaktive Visuelles als die geteilte Oberfläche für gemeinsame Sinnstiftung von Mensch und KI dienen. Generative Text-zu-Bild- und multimodale Analyse erweitern die Reichweite der Visualisierung in spezialisierte [[stem-education|MINT]]-Inhalte und [[ai-feedback-quality|automatisiertes Feedback]], aber unebene Modellkompetenz, Versagen der Schweregradkalibrierung und [[ethics|ethische]] Bedenken zu Fehlinformation und Autorschaft verlangen sorgfältige, geschichtete Verifikation. Für Gestaltende und Bildungsfachkräfte ist die stärkste Schlussfolgerung, dass Interaktivität und Engagement — Schlussfolgern der Lernenden über visuelle Daten hervorlocken, Nutzern kognitive Anstrengung kontrollieren lassen und KI-erzeugte Visuelles als geteilte Infrastruktur behandeln statt als Endpunkte — mehr zählen als die Genauigkeit des Diagramms selbst.

## Verbundene Konzepte

- [[learning-analytics]]
- [[multimodal]]
- [[generative-ai]]
- [[ai-technologies]]
- [[ai-literacy]]
- [[storytelling-in-education]]
- [[learning-design]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — räumliche und dreidimensionale Darstellung

## Verbundene Artikel

- [[interactive-learning-dashboards-engagement]] — Lernvisualisierungen als Engagement-Werkzeuge über pädagogische Agenten überdenken
- [[mllm-scientific-visualization-literacy]] — Benchmarking multimodaler LLMs bei wissenschaftlicher Visualisierungskompetenz
- [[nuclear-diffusion-text-to-image-learning-2026]] — Domänenadaptierte Text-zu-Bild-Modelle für die Visualisierung nuklearer Konzepte
- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] — Effectiveness, benefits, and ethics of AI-assisted data comics
- [[cfes-p24-multimodal-slide-auditing-2026]] — Kontrafaktischer Benchmark für multimodales Folien-Auditing
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
