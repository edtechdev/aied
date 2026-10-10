---
title: Formatives Assessment
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-10T09:04:27-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl]
confidence: high
translation_of: concepts/formative-assessment
source_updated: "2026-10-04T05:46:16-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Formatives Assessment** — Assessment, das darauf ausgelegt ist, laufenden Unterricht und laufendes Lernen zu informieren, im Unterschied zu [[summative-assessment|summativer]] Evaluation. In der KI-Bildung wird formatives Assessment sowohl von KI transformiert als auch als für sie wesentlich erachtet: KI-Systeme können formative Items und Feedback im großen Maßstab generieren, validieren und anpassen, während formatives Feedback ein primärer Mechanismus ist, über den [[intelligent-tutoring|KI-Tutoren]] und [[adaptive-learning|adaptive Systeme]] Lernen unterstützen. Die [[research-methods-aied|Forschung]] der Wissensbasis untersucht KI-generierte formative Items, KI-generiertes Feedback sowie Design und Evaluation dieser Systeme.

## Fragen zum Nachdenken

- Formatives Assessment soll den Kreislauf schließen — an die Oberfläche bringen, was Lernende nicht wissen, und Feedback geben, auf das sie handeln können, *während das Lernen noch im Gang ist*. Wie unterscheidet sich das grundlegend von summativer Evaluation, und wann könnten die beiden in der Praxis verwechselt werden?
- KI kann Multiple-Choice-Fragen mit beeindruckender Genauigkeit an verifizierbaren Dimensionen generieren, ist aber am schwächsten an Dimensionen instruktionellen Urteils. Wenn eine Maschine gut in richtigen Antworten ist, aber schwächer im [[pedagogy|pädagogischen]] Urteil, was sollte ihr zugetraut werden zu tun — und was sollten Menschen weiter tun?
- KI-generiertes Feedback hilft nur, wenn Studierende es tatsächlich umsetzen — die Bedingung „enacted feedback", in der Lernende Vorschläge auswählen, bewerten und anwenden, übertraf das bloße Erhalten von Feedback. Wenn Umsetzung mehr zählt als das Feedback selbst, was bedeutet das dafür, wie formatives Feedback gestaltet werden sollte?
- Feedback wird beschrieben nicht als Informationstransfer, sondern als [[ethics|ethische]], relationale Praxis. Was geht verloren, wenn formatives Assessment als „AI slop" in Massenproduktion hergestellt wird — und was können menschliche Kommentarbanken und relationale Sorge bewahren?

## Einführung

Formatives Assessment ist für [[ai-education|KI in der Bildung]] zentral, weil es an der Verbindung von [[assessment|Assessment]] und [[feedback|Lernfeedback]] liegt. Sein Zweck ist, den Kreislauf zu schließen: an die Oberfläche bringen, was Lernende wissen und nicht wissen, und Feedback geben, auf das sie zur Verbesserung handeln können. KI macht das im großen Maßstab machbar — Items generieren, Antworten bewerten und individualisiertes Feedback liefern —, aber die Forschung der Wissensbasis zeigt, dass die Qualität über Item-Typen hinweg dramatisch variiert, und dass Feedback nur hilft, wenn Studierende es tatsächlich umsetzen.

## KI-generierte formative Items

KI-Systeme generieren formative Assessment-Items über Modalitäten hinweg, mit je nach Typ variierender Reliabilität:

- **Multiple-Choice-Fragen:** [[code-gen]] zeigt, dass [[agentic-ai|agentische KI]] MCQs für Code-Verständnis reliabel generieren kann, wenn sie über sieben pädagogische Dimensionen validiert werden — Erfolgsraten erreichen **98.6%** für Konzept-Alignment und **79.9%** für Feedback-Qualität —, was nahelegt, dass KI an verifizierbaren Dimensionen am stärksten und an Dimensionen instruktionellen Urteils am schwächsten ist. Das verbindet sich breiter mit [[automated-question-generation|automatisierter Fragengenerierung]].

- **Eine einfache generierte Itembank gibt kein formatives Signal.** In einer 10-wöchigen Anwendung wurden etwa 70% der KI-generierten Übungsitems von allen Lernenden richtig beantwortet (p = 1.0), sodass die alle 15 bis 20 Minuten laufenden niedrigschwelligen Quizze gut ankamen, aber fast keine unterscheidende Information zur Anpassung des Unterrichts trugen ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Automatisierte Essay-Bewertung:** Multi-Agenten-Rahmenwerke (z. B. MASS) verbessern die Konsistenz gegenüber eigenständigen [[llm|LLMs]] bei der [[automated-essay-scoring|Essay-Bewertung]], wenngleich [[explainable-ai|Interpretierbarkeit]] von Multi-Agenten-Bewertungsentscheidungen eine offene Herausforderung bleibt.
- **Formative Bewertungspipelines:** [[cotal-formative-assessment-scoring-2026|CoTAL]] koppelt Chain-of-Thought-Prompting mit [[active-learning|Active Learning]] und Evidence-Centered Design, um generalisierbare formative Assessment-Bewertung mit Human-in-the-Loop-[[prompt-engineering|Prompt-Engineering]] zu erzeugen.
- **Hochfrequente, [[automated-assessment|automatisiert bewertete Assessments]]:** [[automated-formative-assessments-a-level-sciences|automatisierte formative Assessments in A-Level-Naturwissenschaften]] untersucht den Effekt hochfrequenten, automatisiert bewerteten formativen Assessments auf [[learning-gains|Lernergebnisse]]. Ein Scoping Review automatischer Kurzantwort-Bewertung in der [[science-education|Naturwissenschaft]] (2017–frühe 2024) bestätigt, dass dieser formative Kurzantwort-Anwendungsfall ein Feld mit echter Zugkraft ist: BERT-Familien-Modelle dominierten das automatische Bewerten bis 2021, bevor ab ~2022 größere [[llm|LLMs]] geprompttet wurden, und domänenerweiterte, rubrikbewusste und chain-of-thought-Modelle performten am besten — dennoch mahnen die Forderungen des Reviews nach umfassender Evaluation und die ungelösten [[bias-mitigation|Fairness]]- und Erklärbarkeitslücken dagegen, solche Systeme auf unvermittelte [[summative-assessment|summative]] oder folgenschwere Nutzung auszudehnen ([[auto-marking-short-answer-science-2026]]).

## KI-generiertes Feedback

Ein großer Korpus an Forschung der Wissensbasis untersucht KI-generiertes formatives Feedback:

- **Das Umsetzungsproblem:** [[ai-feedback-enactment-workflow-2026|Making AI-Generated Feedback Matter]] (13.037 Lernende; 51.296 Ressourcen) zeigt, dass der Wert von Feedback davon abhängt, ob Lernende es *umsetzen* — die Bedingung **Enacted Feedback**, in der Lernende KI-Feedback-Vorschläge auswählen, bewerten und anwenden, übertraf einfaches gerichtetes Feedback.
- **KI-Feedback kann Expertinnen und Experten erreichen, wenn die Rubrik die Kriterien trägt.** Blind gegenüber der Quelle und randomisiert über 47 universitäre Projektgruppen hinweg war ein LLM, das die mitkonstruierte 0–30-Rubrik und ein Beispiel erhielt, nicht unterlegen *und* äquivalent zu Expertenfeedback (+0.23, 90% CI [−0.46, 0.91]) — die Rubrik, nicht das Modell, kalibrierte ([[ai-generated-feedback-higher-ed|Grion et al. (2026)]]).
- **Feedback ist kein Informationstransfer:** [[care-full-feedback-genai|The care-full craft of feedback]] argumentiert, Feedback sei eine ethische, relationale Praxis, keine Informationstransmission — Feedback konstituiert sich nur als Feedback, wenn Lernende es sinnhaft machen und darauf handeln, und kontrastiert massenproduziertes „AI slop" mit Abkürzungen menschlicher Kommentarbanken.
- **Sequenziertes Feedback kann nach hinten losgehen:** [[sequenced-ai-feedback-learning|Sequenced AI feedback]] (Ermutigung → Hinweise → richtige Antwort, konzipiert zur Förderung von Autonomie) **schadete dem Lernen** tatsächlich in einem randomisierten Experiment (N=199), trotz Steigerung von [[student-engagement|Engagement]] und positiven Wahrnehmungen — ein mahnender Befund über Feedback-Design.
- **Lernendenzentrierte Werkzeuge:** [[learner-centered-feedback-ai|PolyFeed]] kombiniert ML-Vorschlagsmodelle mit der Praxis der [[teacher-role|Lehrkräfte]] und zeigt, wie Lehrkräfte KI-Feedback-Vorschläge annehmen und anpassen; [[ai-internal-feedback-evaluative-judgments|KI-unterstütztes internes Feedback]] hilft Studierenden, [[evaluative-judgment|evaluatives Urteilsvermögen]] zu entwickeln.
- **Rubrikgeleitetes Prompting und rollenbewusstes Feedback:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] zeigten, dass iterative Rubrik-Mitverfeinerung — Leistungsdeskriptoren klären und implizite Indikatoren des Lernens explizit akzeptieren — die LLM–Mensch-Übereinstimmung bei Designarbeiten von Studierenden von 54.75% auf 81.25% trieb (Cronbachs Alpha stieg von 0.393 auf 0.798), mit den größten Zuwächsen in der kognitiv anspruchsvollen Kategorie Iteration & Reflection. Prompting desselben Modells unter Rollen von Lehrenden, Peer-Reviewerinnen und Gutachtenden erzeugte distinctes evaluatives Feedback, und post-Revision-LLMs waren konsistenter als manche menschlichen Bewertenden im Anwenden von Leistungsschwellen — was rubrikgeleitete LLMs als Kalibrierungs- und Co-Design-Partner in formativen Feedbackumgebungen positioniert, wobei Human-in-the-Loop-Aufsicht wesentlich bleibt.
- **Übereinstimmungswerte verbergen eine Richtung: ein Modell kann zur mittleren Kategorie tendieren.** Ein LLM-Bewerter, der Dialogzüge innerhalb eines konversationsbasierten Assessments taggte, stimmte mit menschlicher Codierung bei 52.2% von 155 Ereignissen überein, nutzte aber das ausweichende Label PARTIAL_CORRECT häufiger als die Bewertenden (53.5% gegenüber 41.3%) und markierte 5.4% der Züge als IRRELEVANT, wo Bewertende keine markierten ([[llm-multi-agent-conversation-assessment-2025|Hou et al., 2025]]).
- **KI-Feedback erhält Teilhabe und treibt Zuwächse im großen Maßstab:** [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]]s semesterlanges Feldexperiment über universitäre Tutorien hinweg fand, dass individuelles GPT-4-Formativfeedback (über alle drei Hattie-&-Timperley-Dimensionen hinweg — Feed-Back, Feed-Up, Feed-Forward) die höchste Teilhabe über acht offene Aufgaben hinweg erhielt, Antworten der Lernenden verlängerte und die stärksten Zuwächse im Inhaltslernen erzeugte — ein Effekt, getrieben von verlässlicher, konsistenter KI-Bereitstellung, da bei tatsächlich erhaltenem hochwertigem textuellem Peer-Feedback die Peer-Ergebnisse die der KI erreichten.
- **Feedback-Zukünfte:** [[feedback-futures-genai|Feedback Futures]] synthetisiert ein Sonderheft und argumentiert, die Frage sei nicht, *ob* [[generative-ai|GenAI]] Feedback produzieren kann, sondern wie man Feedback gestaltet, das Lernen unterstützt, wobei wiederkehrende Spannungen über das Feld hinweg destilliert werden.

- **Das meiste formative Feedback ist momentan, nicht nachhaltig.** In einem Scoping Review von 37 Authentic-Assessment-Studien nutzten 23 formatives Feedback für unmittelbare Verbesserung, aber nur vier nutzten nachhaltiges Feedback, das Lernende in künftige Kontexte übertragen — das reaktive Muster, das heutige KI-Feedback-Werkzeuge reproduzieren ([[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan, Boud & Du (2025)]]).
- **Diagnose-zuerst-Feedback für offene quantitative Probleme:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]] liefert Echtzeit-, personalisiertes formatives Feedback zu Calculated Formula Questions in Engineering Economics, einer Domäne, in der handgeschriebene, unstrukturierte Lösungen zuvor KI-Unterstützung blockierten. Ein [[machine-learning|XGBoost]]-Backbone pro Frage diagnostiziert wahrscheinliche rubrikgelabelte Fehler aus den eingereichten numerischen Antworten der Lernenden (average precision 0.81, recall 0.79), und ein dialogbasiertes Schema erbittet Zwischenantworten nur bei niedriger Vorhersagekonfidenz — was Feedback-Genauigkeit gegen Erhebungseffizienz innerhalb einer Fragebank-Weboberfläche abwägt.
- **Umfang und Grenzen von LLM-formativen Feedback (systematische Evidenz):** ein PRISMA-geleiteter [[meta-analysis-systematic-review|systematischer Review]] von 42 empirischen Studien (2023–2025) findet, dass LLMs die Arbeitslast von Lehrkräften reduzieren und rasches, personalisiertes Feedback im großen Maßstab liefern können — besonders in großen oder [[higher-ed|hochschulischen]] Kohorten —, dass Feedback aber manchmal zu generisch oder mit der vergebenen Note nicht abgestimmt ist und die Reliabilität bei längeren, [[multilingual-learning|mehrsprachigen]] oder nuancenreichen Aufgaben nachlässt, was verstärkt, dass formatives KI-Feedback am besten unter Aufsicht von Bildungspersonal eingesetzt wird ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **Adaptivität ist ein trennbarer Bestandteil, keine Dekoration:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod & Breitwieser (2026)]] liefern den direkten Kausaltest, den die meisten LLM-Feedback-Studien wegmodellieren, und stellen GPT-4-antwortkontingentes Feedback gegen expertengeschriebene generische Anleitung, abgeglichen in Struktur, Ton, Länge und [[motivation|motivationaler]] Formulierung (verifiziert mit einer fünfdimensionalen Qualitätsrubrik, κ = .76–1.00). In einem präregistrierten Within-Subjects-Experiment überarbeiteten 155 deutsche Fünft- und Sechstklässlerinnen und -klässler (M = 12.08 Jahre) sechs if-then-Pläne: die Planqualität stieg von einem Median von **2 → 5** unter adaptivem Feedback gegenüber **2 → 3** unter generischer Anleitung (within-person V = 10,440, p < .001, r = .86; Schätzung der Bedingung × Zeit-Interaktion = 1.68, SE = 0.14, p < .001, ohne Unterschied vor der Unterstützung). Kinder bewerteten adaptives Feedback sowohl als hilfreicher (r = .67) als auch als motivierender (r = .74), und Wahrnehmungen auf Versuchsebene sagten das Ausmaß der Überarbeitungsgewinne vorher — was [[technology-acceptance-model|wahrgenommene Nützlichkeit]] zum Teil des Pfades macht statt zu einem affektiven Nebenprodukt. Weil die Kontrolle selbst gut konzipiert war, zeigt die Studie Mehrwert *jenseits* guter nicht-kontingenter Anleitung statt den Unterschied zwischen Feedback und nichts: generische Anleitung ist ein echter, aber begrenzter Ersatz, der bei ihrem eigenen Median stagniert. Planung diente als Testfall als zentrale Strategie des [[self-regulated-learning|selbstregulierten Lernens]] mit expliziten Qualitätskriterien, was Kontingenz — die Eigenschaft, die [[scaffolding|Scaffolding]] von statischer Unterstützung unterscheidet — direkt an einer ein-Satz-Antwort messbar macht. Die Autoren definieren Adaptivität eng als antwortkontingente Anpassung des Feedback-Inhalts an die konkrete Antwort der lernenden Person, unterschieden von konversationeller Interaktivität, Ton und stabilem [[adaptive-learning|adaptivem Lernen]] als Eigenschaft.
- **Wahrgenommene Nützlichkeit spürt Umsetzbarkeit:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] ließen 144 Programmierungslernende 893 LLM-generierte Feedback-Instanzen auf fünf Dimensionen und 237 konsolidierte Berichte auf sechs bewerten, wobei Domäne, Aufgabe und Instrument konstant gehalten wurden, während das Bildungsniveau variierte. Die Bewertungen waren durchgängig günstig, mit studierendenbezogenen Mittelwerten von 4.24 bis 4.43 für individuelle Antworten und 4.11 bis 4.38 für Berichte, dennoch zogen Umsetzbarkeit und Nützlichkeit die niedrigsten Bewertungen, während Umsetzbarkeit und wahrgenommene Genauigkeit die größten relativen Gewichte trugen (32.6% und 29.0%) in einem Modell, das 76% der Varianz in wahrgenommener Nützlichkeit erklärte, und Motivation und Personalisierung ein berichtseitiges Modell der Nutzungsabsicht anführten, das 53% erklärte. Da Umsetzbarkeit die Dimension ist, die die [[feedback|Feedback]]forschung als am schwersten bereitzustellen behandelt, liest sich das Muster als [[technology-acceptance-model|Technologieakzeptanz]] angewandt auf Feedback: Nützlichkeit spürt, ob eine lernende Person handeln kann, nicht wie poliert das Feedback klingt.

- **Offline-Übereinstimmung übertreibt Live-Performance:** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]]s GPT-4o-Feedback-Pipeline reproduzierte die Note der Lehrperson innerhalb von 0.5 Punkten in 83% von 362 Einreichungen, dennoch war die chancenkorrigierte Übereinstimmung nur mäßig (ICC(2,1) = 0.49) und fiel von r = 0.92 bei historischen Skripten auf 0.57 in live Lehrkraft-betreuender Nutzung.
- **Verständnis überholt Umsetzbarkeit auf dem Weg zur Überarbeitung:** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao und Fan (2026)]] trennten diagnose auf Item-Ebene von Vorschlägen und gaben Lernenden ein schriftliches Interpretationsblatt (Umformulierung, Wirkungserklärung, Identifikation von Unsicherheit, Überarbeitungsplan) vor unabhängiger Überarbeitung, strukturiertem Review durch Lehrkräfte, Neubewertung und Reflexion. Über drei Schreibaufgaben hinweg verbesserte sich Verständnis auf 0.512 (gegenüber Umsetzbarkeit bei 0.480 und diagnostischer Genauigkeit bei 0.445), und die Diagnosegruppe gewann 5.92 Schreibpunkte gegenüber 3.58 (Hedges' g = 1.12), was den Hebel im Verständnis der Diagnose durch die Lernenden verortet statt in ihrer Umsetzbarkeit allein.

## Curriculum-verankertes und bildungspersonalsgeführtes Design

[[ai-learning-tools-engineering-education-needs|LearnLens]] adressiert drei anhaltende Probleme im KI-formativen Assessment: **fehlerbewusstes Assessment** (error-aware assessment — nuancierte Denkfehler erfassen statt Oberflächenfehler), **themenverknüpfte Gedächtnisketten** (topic-linked memory chains — verrauschte ähnlichkeitsbasierte [[rag|RAG]] ersetzen durch strukturiertes, [[curriculum-design|curriculum]]-verankertes Retrieval), und **Bildungspersonal in der Schleife** (educator-in-the-loop — Anpassung und Aufsicht durch Lehrkräfte, nicht vollständige Automatisierung). Das verbindet sich mit der breiteren Spannung in [[human-in-the-loop-ai|Human-in-the-Loop-KI]]: skalierbare Automatisierung mit Expertenvalidierung.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl & Leuders (2026)]] schärfen, was Bildungspersonal in der Schleife bedeutet, sobald ein Werkzeug eigene Behauptungen produziert statt roher Beobachtungen. Ihre konzeptuelle Analyse argumentiert, dass KI-generierte diagnostische Inferenzen qualitativ verschiedene Evidenz sind, weil sie bereits das Produkt algorithmischer Interpretation sind, sodass Lehrkräfte eine weitere Schicht brauchen, die die Autoren **Metadiagnose** (meta-diagnosis) nennen: absichtsvolles Annehmen, Ablehnen oder Modifizieren einer Inferenz und ihre Integration mit dem eigenen Kontextwissen. Die Spezifikation des DiaCoM-Rahmenwerks dafür behandelt KI-generierte Inferenzen als Situationsmerkmal und die Entscheidung annehmen, ablehnen oder modifizieren als diagnostisches Verhalten, während die Persönlichkeitsmerkmale, die Lehrkräfte brauchen, ausgeweitet werden um Wissen darüber, wie KI-Systeme tatsächlich funktionieren. Weil heutige Systeme meist auf Leistungsdaten wie Aufgabenrichtigkeit und Bearbeitungszeit ruhen, bleiben motivationale Zustände und Klassenzimmerdynamiken weitgehend abwesend, sodass die Studie Lehrkräfte, nicht das Dashboard, als die verantwortlichen reflexiven Akteure behält und das Beurteilen algorithmischer Behauptungen als Ziel professioneller Entwicklung rahmt.

Die Rolle der KI an das Leistungsniveau anzupassen, ist ein verwandter Designzug: angehende Naturwissenschaftslehrkräfte beschrieben ChatGPT als Patient Tutor für schwache Leistungen, als Personal Coach für mittlere Leistungen und als Intellectual Sparring Partner für starke Leistungen, während die Lehrkraft die abschließende Erklärung schwieriger Inhalte behielt ([[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom et al., 2026]]).

## Design-Abwägungen

| Dimension | KI-Eignung | Menschliches Erfordernis |
|-----------|----------------|-------------------|
| Factual correctness | Hoch | Niedrig |
| Konzept-Alignment | Hoch | Mittel |
| Distraktorqualität | Niedrig | Hoch |
| Feedbacktiefe | Niedrig | Hoch |
| Rubrik-Konsistenz | Mittel | Mittel |

## Assessment, Feedback und Lernen

Formatives Assessment in der KI-Bildung verbindet sich mit dem Lernprozess selbst:

- **Feedbackschleifen:** [[feedback|Feedbackschleifen]] sind der Mechanismus, über den formatives Assessment Lernen informiert; KI-Tutoren und adaptive Systeme schließen diese Schleifen im großen Maßstab.
- **Selbstreguliertes Lernen:** formatives Feedback unterstützt [[self-regulated-learning|selbstreguliertes Lernen]], wenn Lernende Fortschritt überwachen und anpassen; KI-Feedback sollte [[ai-internal-feedback-evaluative-judgments|evaluatives Urteilsvermögen]] kultivieren, nicht verdrängen.
- **Automatisierte Bewertung erreicht manche Phasen des Zyklus, nicht alle:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen & Liu (2026)]] führten ein 14-wöchiges Quasi-Experiment durch, in dem 46 Dolmetschstudierende wöchentliche Darbietungen bei einem automatisierten Bewertungssystem einreichten, das einen sofortigen Punktewert, Transkript, markierte Fehler und eine Referenzdarbietung zurückgab, während eine Kontrollgruppe nur klassenweites Lehrkräftefeedback erhielt. Die automatisierte Gruppe verbesserte sich insgesamt mehr (d = 1.03), aber der Zuwachs blieb dort, wo das Defizit zerlegbar, das Signal verlässlich und die Skala sensitiv war: sprachliche Genauigkeit und logische Kohärenz stiegen, während Informationstreue (Übereinstimmung mit menschlichen Bewertenden r = 0.12) und Darbietungsflüssigkeit sich nicht bewegten. [[self-regulated-learning|Selbstreguliertes Lernen]] war in passender Weise ungleich, mit Ausführung und Überwachung korrelierend zu den Punktewertgewinnen (r = 0.42), während Planung und emotionale Motivation nahe der Skalenmitte lagen, und mehrere Studierende Engagement nach niedrigen Punktewerten aufschoben, statt Ursachen zu analysieren. Das System erreichte die Leistungsphase des Zyklus, nicht die Planung, die ihr vorausgeht.
- **Von automatisierter Diagnose zu generierter Übung:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo & Li (2026)]] verdrahten Audio-Score-Alignment, Fehlerquantifizierung und eine Proximal Policy Optimization-Schicht zu einer geschlossenen Schleife für die Musikbildung, die Rhythmusfehlersignale (91.2% recall, 98.4% specificity) in Belohnungen verwandeln, die generierte Übungstracks steuern, und berichten eine signifikante Gruppe × Zeit-Interaktion, die die Systemgruppe begünstigt (beta = 0.52), über ein 12-wöchiges Quasi-Experiment mit 120 Musikstudierenden. Die Autoren rahmen dies als technische Machbarkeit, und die praktische Lesart ist Triage statt Assessment: eine Präzision von 89.7% bedeutet, dass etwa einer von zehn markierten Rhythmusfehlern ein Fehlalarm ist, und die Expertenbegutachtenden der Studie bewerteten die Unterstützung musikalischen Ausdrucks als schwächsten Bereich, sodass automatisierte Schleifen zu technischen Drills passen, während ausdrucksbezogenes Urteil bei den Lehrkräften bleibt.
- **Scaffolding:** [[scaffolding|Scaffolding]] und formatives Assessment arbeiten zusammen — KI kann just-in-time-Hinweise und Prompts liefern, wenngleich die Forschung zu sequenziertem Feedback vor Überstrukturierung warnt.

- **Rubrikqualität bewegt die Übereinstimmung automatisierter Bewertung mehr als die Modellwahl.** Bei 1.200 Linux/bash-Prüfungsantworten fanden [[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo et al. (2026)]], dass das Hinzufügen einer vollen Rubrik plus einer Referenzantwort jedes Modell anhob (bestes: Gemini 3.0 Pro, ICC(3,1) = 0.888 gegenüber einer menschlichen Obergrenze von 0.949), während die Übereinstimmung monoton fiel, je höher das kognitive Niveau der Frage stieg.

- **KI-generierte Rubriken erreichten menschliche Bewertung nur innerhalb einer Spanne.** Vier KI-Rubriken erfüllten gebündelte Äquivalenz mit der menschlichen Baseline innerhalb von ±5 Punkten über 308 Programmierantworten (Korrelationen 0.948–0.973), aber fünf Rubrik-Aufgabe-Zellen überschritten sie, und GPT-4.1/4o bewerteten systematisch strenger bei strukturierten Rubriken (−4.46 gegenüber −0.66 bei freiform) ([[harmogen-ai-assessment-rubric-generation|Mendonça et al., 2026]]).
- **Validität und Qualität:** die [[ai-feedback-quality|Qualität]] und [[assessment-validity|Validität]] KI-generierter formativer Items und Feedbacks müssen evaluiert werden; [[ai-ed-evaluation|Evaluation von KI in der Bildung]] bietet die Methoden.

- **KI-Bewertung fügt eine Validitätsbedrohung hinzu.** Weil ein KI-Bewerter konstruktirrelevante Merkmale wie Sprachflüssigkeit statt naturwissenschaftliches Schlussfolgern belohnen kann, argumentiert ein von einer Zusammenkunft von etwa 100 Führungskräften destilliertes White Paper aus Stanford/ETS, dass Assessment kontinuierliche, kontextreiche Evidenz akkumulieren sollte statt einmalige Ausgaben zu zertifizieren ([[responsible-assessment-ai-era-stanford-2026|McGee et al. (2026)]]).

- **Behalten Sie die verwundbare Aufgabe und fügen Sie einen Zwilling hinzu.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] argumentieren, dass Take-Home-Essays und Forschungsberichte erheblichen formativen Wert tragen und für das Lernen beibehalten werden sollten, gepaart mit einer zweiten Aufgabe, die dieselben Ergebnisse bewertet und verlässliche summative Evidenz liefert.

## Risiko: Assessment als Überwachung

Systeme formativen Assessments können sich von Lernunterstützungswerkzeugen zu Verhaltensüberwachungsinfrastruktur verschieben. Dieselben Datenströme, die adaptives Tutoring ermöglichen, können strafende Nachverfolgung ermöglichen, wenn [[governance|Governance]] schwach ist. Das verbindet sich mit [[privacy|Datenschutz]] und dem [[well-being|Wohlbefinden der Lernenden]] und argumentiert für formative Systeme, die Lernen unterstützen, statt es zu überwachen.

## Implikationen für KI in der Bildung

- **Passen Sie Item-Typ an KI-Reliabilität an:** nutzen Sie KI für verifizierbare Dimensionen (Konzept-Alignment, Richtigkeit) und behalten Sie menschliches Urteil für instruktionelle Dimensionen (Distraktorqualität, Feedbacktiefe) bei.
- **Gestalten Sie für Umsetzung, nicht nur Bereitstellung:** KI-Feedback hilft nur, wenn Lernende es auswählen, bewerten und anwenden — strukturieren Sie Arbeitsabläufe, die Umsetzung unterstützen.
- **Feedback-Design zählt mehr als Volumen:** sequenziertes oder überstrukturiertes Feedback kann nach hinten losgehen; priorisieren Sie Feedback, das Sinnstiftung und Autonomie der Lernenden unterstützt.
- **Behalten Sie Bildungspersonal in der Schleife:** curriculum-verankerte, bildungspersonalsgeführte Systeme verbessern Relevanz und reduzieren Rauschen.
- **Evaluieren Sie Qualität und Validität:** bewerten Sie KI-generierte Items und Feedback auf Qualität, Validität und [[equity-in-ai-education|Gerechtigkeit]], nicht nur auf Generierungsgeschwindigkeit.
- **Behandeln Sie formatives Assessment als Philosophie, nicht als Werkzeugkasten.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] synthetisieren die breitere Hochschulliteratur zu einem „assessment for learning"-Paradigma, das formatives, laufendes und individualisiertes [[feedback|Feedback]] als übergreifende Philosophie rahmt statt als bloßen Werkzeugkasten — formatives mit [[summative-assessment|summativen]] Zwecken ausbalancierend und [[agency|Handlungsfähigkeit der Lernenden]], Selbstregulation und [[metacognition|metakognitive Fähigkeit]] in den Vordergrund stellend. Sie identifizieren fünf sich gegenseitig verstärkende Praktiken ([[authentic-assessment|authentisches Assessment]], Selbst- und [[peer-assessment|Peer-Bewertung]], Neubewertung, [[mastery-learning|standardsbasiertes Benoten]], ungrading), durch die diese Philosophie umgesetzt werden kann, während sie feststellen, dass ihre Aufnahme über Hochschulfelder hinweg höchst ungleich bleibt.

## Verbundene Konzepte

- [[pedagogical-patterns]] — Die sequenzierten Formen, die formatives Assessment annimmt, wenn KI einen Teil des Feedbacks liefert
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Summatives Assessment: KI-resistente Formate (mündlich, beaufsichtigt, geschlossene Prüfungen)

## Verbundene Artikel

- [[llm-multi-agent-conversation-assessment-2025]] — A four-agent architecture for conversation-based assessment whose assessor hedges toward the middle category (Hou et al. 2025)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[nicola-richmond-programwide-assessment-genai-2025]] — Program-wide approaches to redesigning assessment in the GenAI era
- [[ai-feedback-enactment-workflow-2026]] — Making AI-generated feedback matter: from provision to enactment
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of GenAI
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[sequenced-ai-feedback-learning]] — Impact and pathways of sequenced AI feedback
- [[learner-centered-feedback-ai]] — Enhancing learner-centered feedback with AI
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing
- [[ai-internal-feedback-evaluative-judgments]] — Developing evaluative judgments through AI-supported internal feedback
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: formative assessment scoring with human-in-the-loop prompting
- [[automated-formative-assessments-a-level-sciences]] — High-frequency automated formative assessment
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: curriculum-grounded AI feedback
- [[genai-teacher-feedback-comparison]] — GenAI vs. teacher feedback comparison
- [[chatgpt-feedback-engagement-genai]] — ChatGPT feedback and engagement
- [[code-gen]] — CODE-GEN: validated MCQ generation
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Designing for authentic assessment
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated grading of Linux/bash exams
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — Adaptivity makes feedback effective: evidence from AI-generated feedback on children's plans
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Automated scoring, interpreting performance, and self-regulated learning (Chen & Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Teachers' diagnostic skills in AI-supported formative assessment: from diagnosis to meta-diagnosis
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Perceived usefulness and intention to use LLM-generated feedback in programming across three educational levels
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Adaptive teaching assistance combining generative AI and big data analytics in music education
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
