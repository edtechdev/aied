---
connected_resources: [pressing-prompts, student-guide-to-ai]
title: Kritisches Denken
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
foundations: [ai-education, ai-literacy, cognitive-offloading]
pedagogy: [scaffolding, socratic-method]
technology: [generative-ai]
connected_faqs: [verify-ai-output]
level: [higher ed]
confidence: medium
translation_of: concepts/critical-thinking
source_updated: "2026-10-07T15:40:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Kritisches Denken** — die Fähigkeit, Information zu analysieren, zu bewerten und zu synthetisieren — ist sowohl eine Fähigkeit, die KI-Werkzeuge entwickeln helfen können, als auch eine Kompetenz, die Studierende beim Einsatz von KI anwenden müssen. In der [[research-methods-aied|Forschung]] zu [[ai-education|KI in der Bildung]] erscheint kritisches Denken in zwei miteinander verbundenen Formen: als Lernziel ([[teacher-role|Lehrenden]] kritisches Denken vermitteln) und als Schutz gegen unkritische Abhängigkeit von KI.

## Fragen zum Nachdenken

- Wie zuversichtlich sind Sie, dass Sie eine falsche oder irreführende KI-generierte Antwort erkennen? Forschung legt nahe, dass [[self-report-measures|selbstberichtete]] KI-Kompetenz die tatsächliche Bewertungsfähigkeit deutlich übersteigt — wie würden Sie sich selbst testen?
- Kritisches Denken erscheint hier in zwei Formen: als zu lehrende Fähigkeit und als Schutz gegen unkritische Abhängigkeit von KI. Können Sie sich eine Situation vorstellen, in der ein Werkzeug, das kritisches Denken „lehrt“, tatsächlich sein Gegenteil trainiert?
- Eine Studie fand, dass es große Zuwächse im höherstufigen Denken brachte, wenn Studierende KI-generierte Fehler hinterfragten. Wie könnte das absichtliche Offenlegen von Fehlern — statt sie zu verbergen — ein stärkerer didaktischer Schritt sein, als Sie annahmen?
- Leichter Zugang zu KI-Antworten kann kritisches [[student-engagement|Engagement]] verdrängen, bevor Studierende es merken. Welches Gestaltungsmerkmal — statt einer Richtlinie oder eines Verbots — könnte die kognitive Anstrengung wachhalten?
- Es wurde gezeigt, dass KI-Ratschläge die Bereitschaft unterdrücken, „ich weiß nicht“ zu sagen — selbst wenn der Ratschlag falsch ist. Wie verändert das, was es bedeutet, eine Kultur des Klassenzimmers zu schaffen, in der Hinterfragen sicher ist?

## Einführung

Kritisches Denken ist zentral für [[ai-literacy|KI-Kompetenz]] — Studierende, die KI-Ausgaben nicht kritisch bewerten können, sind verwundbar für [[cognitive-offloading|übermäßige Abhängigkeit]], [[hallucination-risk|halluzinierte Information]] und verzerrte Empfehlungen. Forschung zu [[cognitive-offloading|kognitiver Entlastung]] zeigt, dass leichter Zugang zu KI-Antworten kritisches Engagement verdrängen kann, während [[socratic-method|sokratische Ansätze]], die direkte Antworten zurückhalten, die kognitive Anstrengung bewahren, die für tieferes Denken nötig ist.

Strukturierte Dialogsteuerung, nicht ein besserer Prompt, trennt einen Fehlschluss-Tutor von einem debattierenden Chatbot: Jeden Zug durch Toulmin-basierte Absichtserkennung, eine feste Strategiereihenfolge und einen Verifier-Agenten zu routen, ließ ein sokratisches System 84.5% der Dialogqualitäts-Kennzahlen bestehen gegenüber 61.5% für eine heuristische Baseline ([[lftutor-logical-fallacy-education-2026|Shi et al. (2026)]]).

### Kritisches Denken in der KI-Bildungsforschung

Die Artikel der Wissensbasis erkunden kritisches Denken durch [[design-based-research|designbasierte]] und empirische Linsen. [[ai-agents-constructive-conflict-design-education-2026|Adversariale KI-Agenten]] vollziehen konstruktiven Konflikt, um in unerfahrenen Designenden zum Überdenken anzuregen — eine sokratische Variante, die kritische Neubewertung erzwingt. [[genai-can-harm-teaching-rct-2026|RCT-Forschung zu GenAI im Unterricht]] wirft die Frage auf, ob KI-Werkzeuge, die für oberflächliche Ergebnisse optimieren, womöglich unbeabsichtigt das kritische Denken unterdrücken, das zu tieferem Lernen führt. Gemessene Belege schärfen den Punkt: Ob kritisches Denken sich bewegt, hängt davon ab, wie KI-vermitteltes Feedback und KI-vermittelte Aufgaben gestaltet sind, und von der [[metacognition|metakognitiven]] Regulation der Lernenden, nicht vom Zugang zu einem Modell.


Der Zusammenhang von GenAI-Nutzung mit selbstberichtetem kritischem Denken verlief fast vollständig über GenAI-[[feedback-literacy|Feedback-Kompetenz]]: bei 421 chinesischen Studierenden mediierte Feedback-Kompetenz 71.98% des Gesamtzusammenhangs (β=0.185), und der residuale direkte Pfad war nur für weniger reflexive Studierende positiv (β=0.177) und für reflexivere nicht signifikant ([[genai-use-critical-thinking-moderation-2026|Yan et al. (2026)]]).

**Ein meta-analytischer Anker für die Moderationsbehauptung.** Über 29 Experimente hinweg erhöhte GenAI höherstufiges Denken mäßig (g = 0.609), mit kritischem Denken bei ES = 0.691 — unter Problemlösen (0.745) und über Kreativität (0.444) — am stärksten bei 8–16-wöchigen Interventionen (0.759) und bei Lernenden mit hohem SRL (0.863 gegenüber 0.284) ([[zhao-genai-higher-order-thinking-meta-2026|Zhao et al. (2025)]]).

[[chatgpt-critical-creative-thinking-review|Reviews zu ChatGPTs Wirkung auf das Denken]] dokumentieren gemischte Befunde: KI kann kritische Analyse [[scaffolding|scaffolden]], wenn sie absichtsvoll genutzt wird (etwa indem Studierende KI-generierte Argumente kritisieren), aber sie kann Denken auch kurzschließen, wenn sie als Antwortmaschine genutzt wird. Diese Spannung verbindet sich mit Forschung zu [[ai-literacy-assessment-misalignment|Fehlausrichtung bei KI-Kompetenz-Assessments]], die zeigt, dass selbstberichtete KI-Kompetenz die tatsächliche kritische Bewertungsfähigkeit deutlich übersteigt. Ein kritischer Review von 80 HCI-Studien zu kritischem Denken mit KI fand das Feld dabei, wie es misst, was es selten definiert: nur 23 der 80 gaben überhaupt an, wie sie kritisches Denken verstanden, 49 (61%) bewerteten es über Selbstauskunft statt über Performanz, und 42 (52%) nutzten keine Kontrollgruppe ([[critical-review-critical-thinking-hci-research-ai-2026]]).

[[critical-thinking-paradox-genai-learning-2026|Lin und Al-Hada (2026)]] lesen dieses gemischte Bild als Produkt-Prozess-Dissoziation: GenAI kann die Qualität einer Aufgabe erhöhen und gleichzeitig den ungestützten, verzögerten Transfer dahinter senken, sodass Lernen an ungestützter verzögerter Leistung beurteilt werden sollte statt am KI-gestützten Produkt.

- **Höherstufiges kognitives Engagement im Chat zwischen Studierenden und KI.** Chang und Li (2026) finden, dass ~62% der Prompts der Studierenden an KI höherstufige kognitive Anforderungen kodieren, wobei Bloom-Profile je nach Fach variieren ([[stem-education|STEM]] Anwenden-dominiert 20.8%, Sprachen Verstehen-dominiert 31.7%, Sozialwissenschaften Erschaffen-dominiert 33.8%). Ihr Within-Person-Design zeigt, dass dieselben Studierenden in Sozialwissenschaften signifikant mehr höherstufige Prompts produzieren als in STEM-Kursen (p < .001), was darauf hinweist, dass fachlicher Kontext kritisches und höherstufiges Engagement mit KI prägt.

- **Interaktionsmuster clustern nach Bloom-Niveau und Vorwissen.** In einer forschungsbasierten Schreibaufgabe zur Datenwissenschaft produzierten 19 Studierende 14 LLM-Interaktionsmuster, die nach Vorwissensniveau variierten, und die Designimplikation war, Scaffolding auf konkrete höherstufige Denkstufen zu richten statt auf LLM-Nutzung allgemein ([[luo-ibl-patterns-llm-bloom-2026|Luo et al. (2026)]]).

- **KI als Katalysator für kritische Medienkompetenz bei Kindern.** Demir und Akar (2026) evaluieren ein 18-stündiges Programm kritischer Medienkompetenz nach dem 5E-Modell für türkische Viertklässlerinnen und Viertklässler, in dem [[generative-ai|generative KI]] (ChatGPT, Grammarly) als [[pedagogical-agent|pädagogischer Agent]] phasenweise eingebettet wirkte statt als Zusatz. Paarweise Vergleiche zeigten große Zuwächse im Medienlesen (+3.50), im Schreiben (+1.67) und in der gesamten Medienkompetenz (+5.17, alle p < .01), mit Effektstärken im Gruppenzwischenvergleich von Cohen's *d* = 1.12 (Lesen), 1.18 (Schreiben) und 1.31 (Gesamtkompetenz) zugunsten der KI-gestützten Gruppe. [[qualitative-research|Qualitative]] Analyse (Interviews, studentische Poster/Zeichnungen/Slogans, Unterrichtsbeobachtung) förderte sechs Domänen des Wachstums kritischer Medienkompetenz zutage — digitaler Selbstschutz und [[privacy|Datenschutz]], zweckbestimmte und verantwortungsvolle Mediennutzung, sichere Kommunikation und Grenzbewusstsein, kritische Bewertung und Bewusstsein für Fehlinformation, Bewusstsein für Online-Risiken sowie Medien-[[ethics|Ethik]]/digitale Bürgerschaft —, was darauf hinweist, dass das absichtsvolle Hinterfragen KI-vermittelter Inhalte kritische Analyse und Reflexion bei jungen Lernenden kultivieren kann.

- **Dimensionenspezifische Zuwächse in kritischem Denken beim multimodalen Schreiben in der Grundschule.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] begleiteten 60 [[k-12|Fünftklässlerinnen und Fünftklässler]] durch eine achtwöchige von [[conversational-ai|konversationeller KI]] gestützte multimodale Schreibpraxis, in der sie Erzählungen in KI-generierte Bilder und kurze Videos verwandelten. Eine Analyse mit wiederholten Messungen über sechs Dimensionen kritischen Denkens fand anhaltende Zuwächse (T1→T2 und T1→T3) in Interpretation, Analyse, Bewertung und Erklärung, einen kurzlebigen Zugewinn an Selbst-[[regulation|Regulation]] und **keine Veränderung bei der Schlussfolgerung** — ein ungleichmäßiges Muster auf Dimensionsebene, das ein aggregierter Wert für kritisches Denken verborgen hätte. Die Autoren argumentieren, dass die KI-generierten Visualisierungen Bedeutung *externalisierten* und damit die schlussfolgernde Anforderung senkten, die Schreiben normalerweise stellt, während [[collaborative-learning|Peer-Kollaboration]] (Peer-Fragen, die das Erschließen der Deutungen anderer erzwangen) die Gelegenheiten zur Schlussfolgerung lieferte, die die alleinige [[student-ai-interaction|KI-Interaktion]] nicht bot. Die Designlehre: [[multimodal|multimodale KI]]-Komposition stützt mehrere Facetten kritischen Denkens, sollte aber mit fortgesetztem [[scaffolding|Scaffolding]] und strukturiertem Peer-Austausch gepaart werden, um Schlussfolgerung und [[self-regulated-learning|Selbstregulation]] zu bewahren.

- **KI-Scaffolding und Entlastung ziehen kritisches Denken in entgegengesetzte Richtungen.** Davor, Larbi und Boateng (2026) befragten 533 Universitätsstudierende in Ghana und fanden, dass KI-Aufgaben-Scaffolding höheres kritisches Denken vorhersagte (β = .185), während die Tendenz zur [[cognitive-offloading|kognitiven Entlastung]] niedrigeres kritisches Denken vorhersagte (-.240); KI-Verifikationskompetenz hatte keinen direkten Effekt auf kritisches Denken und wirkte nur über [[metacognition|metakognitive Selbstregulation]], ein Muster voller Mediation, das die Autoren als Beleg dafür lesen, dass es nicht genug ist, Studierenden Fact-Checking von KI beizubringen. ([[davor-ai-supported-learning-higher-order-outcomes-2026|Davor et al. 2026]])
- **Entlastungstiefe, nicht Nutzung, begrenzt höherstufiges Denken.** Das Delegieren der Denkebene des Schreibens — Begründungen, Gegenargumente, Interpretation von Belegen — trug den stärksten negativen Zusammenhang mit unabhängigem höherstufigem Denken (ab = −0.34), und selbstreguliertes Schreiben schwächte ihn, kehrte ihn aber nie um ([[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]]).

- **Abhängigkeit, nicht Nutzung, ist dort, wo der Zusammenhang mit kritischem Denken sich dreht.** Shojaei und Kolleginnen (2026) befragten 412 Wirtschaftsstudierende in Oman und fanden eine nahezu null liegende bivariate Korrelation zwischen [[generative-ai|GenAI]]-Nutzung und selbstberichteter Disposition zu kritischem Denken (r = 0.050), wobei Abhängigkeit niedrigere Disposition vorhersagte (β = -0.389) und den Zusammenhang von Nutzung zu Disposition schwächte (β = -0.239), sodass die einfache Steigung von 0.424 bei geringer Abhängigkeit auf -0.054 bei hoher Abhängigkeit fiel. ([[shojaei-genai-dependence-critical-thinking-employability-2026|Shojaei et al. 2026]])


Eine größere Querschnittsbefragung zeigt in die andere Richtung: Unter 1.157 chinesischen Promotionsstudierenden war [[generative-ai|GenAI]]-Abhängigkeit positiv mit kritischem Denken verbunden (β = 0.492), und kritisches Denken trug etwa 85.0% des Pfads von funktionaler Abhängigkeit zu Forschungskreativität ([[genai-dependence-research-creativity-2026|Yin et al. (2026)]]).

- **Ein kurzer Reflexionsprompt macht das Vertrauen in KI-Ratschläge diskriminativer.** In einem Drei-Bedingungen-Experiment mit 342 Studierenden fand Ren (2026), dass offene ChatGPT-Unterstützung in 62.4% der Durchgänge zur Annahme falscher KI-Empfehlungen führte, was mit einem kurzen metakognitiven Reflexionsprompt auf 39.7% fiel (OR = 0.40, 95% CI [0.28, 0.56]); Reflexion verbesserte zudem die Kalibrierung des Bewusstseins (0.59 gegenüber 0.41) und senkte den KI-spezifischen Attributionsbias-Index von 0.42 auf 0.21, ohne die Genauigkeit der Empfehlungen zu verringern oder pauschale Ablehnung nützlicher Ratschläge auszulösen. ([[ren-metacognitive-awareness-genai-reliance-2026|Ren 2026]])


- **Vertrauen kann steigen, während Genauigkeit fällt.** [[shaw-nave-cognitive-surrender-2026|Shaw und Nave (2026)]] fanden, dass das Konsultieren eines KI-Assistenten die Genauigkeit um 25 Prozentpunkte erhöhte, wenn er richtig lag, und um 15 senkte, wenn er sich irrte, dennoch erhöhte seine Nutzung das Vertrauen selbst nach Fehlern, und 73.2% der Durchgänge mit falscher KI endeten in Kapitulation statt in strategischer Entlastung.
- **Von Lehrenden kuratiertes ChatGPT-Feedback hebt kritisches Denken durch höherstufige Überarbeitung.** Chen und Kollegen (2026) führten ein 18-wöchiges Quasi-Experiment mit 64 Studierenden durch, alle angehende Lehrkräfte für Chemie, Physik oder Mathematik, und verglichen konventionelles Lehr-Feedback (n = 32) mit ChatGPT-gestütztem Lehr-Feedback (n = 32) über zwei argumentative Schreibaufgaben hinweg. Die Gruppen begannen gleichwertig, und nur die gestützte Gruppe verbesserte sich signifikant (p < 0.001), wobei Cohen's *d* von 0.25 beim Pretest auf 3.74 beim Posttest stieg. Der Mechanismus war die Art des Feedbacks, nicht die bloße Anwesenheit eines Modells: die gestützte Gruppe erhielt mehr Demonstrieren (33.1% gegenüber 10.9%) und genau befragendes (21.5% gegenüber 6.0%) Feedback, überarbeitete 91.00% (435 von 478) der Feedbackeinheiten gegenüber 85.21% (242 von 284), und [[network-analysis|epistemische Netzwerkanalyse]] verband diese Überarbeitungen mit Analyse, Bewertung und Erschaffung statt mit Wiedererkennen und Verstehen, während Unterricht und Bewertungsfeedback nur durch Lehrende überwiegend Überarbeitungen in Wiedererkennen und Verstehen hervorbrachten. Lehrende behandelten die Ausgabe des Modells als Entwurfsmaterial und erweiterten, überarbeiteten oder verwarfen sie (14% verworfen, 9% korrekturbedürftig), und sechs von acht Interviewten bemängelten weiterhin Ungenauigkeit oder Unprofessionalität. Die Designlehre ist, dass der Zugewinn an kritischem Denken von Feedback kam, das Alternativen modelliert und das Denken der Studierenden befragt, wobei eine [[teacher-role|Lehrkraft]] kuratierte, was das Modell produzierte; die kleine, einzelne Semester umfassende Stichprobe bedeutet, dass die sehr große Effektstärke mit Vorsicht zu lesen ist. ([[chen-chatgpt-assisted-teacher-feedback-critical-thinking-2026|Chen et al. 2026]])

- **Ein Semester KI-Zugang ließ kritisches Denken flach, während reflektierte Nutzung es verfolgte.** Melanou, Beege und Kimmig (2026) begleiteten 87 Studierende der Wirtschaftsinformatik durch einen neunwöchigen Kurs in drei parallelen Bedingungen (tutorgerahmte KI, ungeleitete KI und keine KI) mit drei Messzeitpunkten. Wissen stieg in jeder Gruppe ohne Vorteil für eine der KI-Bedingungen und ohne Matthäus-Effekt (BF01 = 8.70), während selbstberichtetes kritisches Denken und [[motivation|Motivation]] stabil blieben. Was die Studierenden unterschied, war reflektierte Nutzung, die Praxis, Quellen zu prüfen und KI-Ausgaben zu verifizieren, bevor man sie übernimmt: sie war in der KI-Bedingung höher als in der Kontrollgruppe (Mittelwerte 3.72 gegenüber 2.82) und sagte kritisches Denken zur letzten Messung vorher (R² = 0.183, β = 0.43, p < 0.001). Das Ergebnis qualifiziert jede Erwartung, dass ein Kurs über KI-Nutzung kritisches Denken von selbst bewegt: [[metacognition|metakognitive]] Regulation, nicht Werkzeugzugang, ist dort, wo der Zusammenhang lebt, und die Autoren halten fest, dass ein Semester wahrscheinlich zu kurz ist, um dauerhaften Wandel zu sehen. ([[melanou-genai-learning-dynamics-longitudinal-2026|Melanou et al. 2026]])

### Verbindungen zu anderen Konzepten

Kritisches Denken überschneidet sich mit [[scaffolding|Scaffolding]] (KI-Unterstützung so gestalten, dass sie kognitive Anforderung aufrechterhält), [[prompt-engineering|Prompt Engineering]] (Fragen formulieren, die kritische Analyse anregen) und [[cognitive-offloading|übermäßiger Abhängigkeit]] (wissen, wann man KI vertrauen und wann man sie hinterfragen sollte). Es ist grundlegend für [[academic-integrity|akademische Integrität]] und dient als zentrale Dimension von [[ai-literacy|KI-Kompetenz]]-Frameworks in [[k-12|K-12]]- und [[higher-ed|Hochschulbildungskontexten]] gleichermaßen.

- **KI-Fehler als Provokationen für höherstufiges Denken:** [[pedagogy-ai-mistakes|Hosseini (2026)]] operationalisiert Blooms höherstufige Niveaus (Analysieren, Bewerten, Erschaffen), indem Studierende KI-generierte Fehler in einem Datenbankkurs hinterfragen, mit signifikanten Zuwächsen vor/nach der Maßnahme (Cohen's *d*=1.49) in fachlicher Kompetenz.
- **Kritik an KI-Ausgaben ist eine scaffoldbare Fähigkeit, kein Nebenprodukt des Problemlösens.** Gruppen, die nur ein verwandtes Physikproblem lösten, akzeptierten eine ausgefeilte KI-Lösung oder kritisierten sie aus ihren eigenen Missverständnissen, während MAPS-Rubrik-geleitete Reflexion expertenausgerichtete Kritik an fehlender Integration und undefinierter Notation hervorbrachte ([[probing-ai-generated-physics-solutions-2026|Borse et al. (2026)]]).

- **Die KI begrenzen, um kognitive Handlungsfähigkeit zu bewahren.** Die E3-HOT-Blaupause bildet drei verkörperte Wege — situative Einbettung, verkörperte Teilnahme, kognitive Erschaffung — auf Analysieren, Bewerten und Erschaffen ab und beschränkt die KI auf Prompts, Kritik und Strategievorschläge, damit Studierende Begründungen artikulieren und Belege anführen müssen, bevor eine Behauptung akzeptiert wird ([[zhu-e3-hot-embodied-intelligence-sustainable-learning|Zhu et al. (2026)]]).

- **Zweiseitiges Auditieren von KI-Erklärungen.** Bernstein und Sibia (2026) nutzten Paul-Elder-Standards (Genauigkeit, Klarheit, Annahmen, Perspektive) als Interviewfragen mit zehn Studierenden, die CS2 abgeschlossen hatten, und fanden Prüfung von [[generative-ai|GenAI]]-Erklärungen auf Mechanismen-Ebene: Studierende lokalisierten, wo das Mapping einer Analogie brach (eine Insel-Routen-Analogie für eine verkettete Liste, die einen Kreis implizierte; ein Badminton-Rally, das für Rekursion angeboten wurde und keinen garantiert schrumpfenden Input hatte), verlangten präzise Formulierungen statt Absicherungen und behandelten Erklärungen als Argumente, die eine Perspektive tragen. Entscheidend verlief diese Prüfung mit Expertise in der Quell- oder Zieldomäne statt mit persönlichem Interesse — was kritische [[ai-ed-evaluation|Bewertung von KI]]-Ausgaben als Wissensproblem neu rahmt („zweiseitiges Analogie-Audit“) statt als dispositionales —, und nahelegt, dass fehlerhafte KI-Analogien als zu inspizierende und zu reparierende Objekte zuzuweisen eine härtere Prüfung des konzeptuellen Verständnisses ist als das Lesen einer fertigen Erklärung.([[student-reception-genai-analogies-computing-2026]])

- **Kritisches Denken als nicht auslagerbares Engagement.** Xie (2026) fügt ein [[philosophy-of-ai-in-education|philosophisches]] Pendant aus daoistischer Selbstkultivierung hinzu: Weil KI eine undurchsichtige „Black Box“ ist, passt ein Framework, das auf die Harmonisierung von Unsicherheit ausgerichtet ist statt auf Wahrheitsfeststellung in absoluten Begriffen, besser zur gegenwärtigen epistemischen Landschaft, und kritisches Denken wird zu anhaltendem, erstpersonlichem, nicht auslagerbarem Engagement mit der Realität statt zu einem demonstrierbaren rationalen Verfahren. In der Neidan- (內丹) Praxis „gibt es keine kognitiven Abkürzungen“, weshalb KI als „kein kognitiver Ersatz, sondern ein instrumentaler Zusatz“ zum menschlichen Gedeihen positioniert wird.([[daoism-ai-education-philosophy-2026]])

- **Rollenrotation als Struktur für kritische Mensch-KI-Interaktion.** Kenzhebayeva und Kolleginnen (2026) berichten eine designbasierte Studie, in der 62 angehende Bildungspsychologinnen und -psychologen durch vier professionelle Rollen rotierten (Fallkonstrukteur, Forschungsanalystin, Praktiker-Interventionistin, reflexive Forscherin), die erzeugte Empfehlungen zum Gegenstand der Diskussion machten: die Teilnehmenden verglichen KI-Ausgaben mit psychologischer Theorie und veränderten oder lehnten Empfehlungen ab, die nicht zum Fall passten, und spätere Zyklen zeigten mehr Anfragen nach theoretischer Begründung, während übermäßiges Vertrauen auf scheinbar autoritative Antworten fortbestand. ([[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al. 2026]])

- **Verifikationszentrierte Integration in einem Fach.** Ein kritischer Review von [[generative-ai|generativer KI]] in der universitären [[chemistry-education|Chemiebildung]] (Vega-Baudrit und Rivera Álvarez, 2026) argumentiert, dass, weil chemisches Denken über makroskopische, submikroskopische und symbolische Repräsentationen hinweg koordiniert werden muss, Studierende nicht verifizieren können, was sie nicht verstehen, weshalb [[prior-knowledge|Vorwissen]] und [[scaffolding|Scaffolding]] zuerst kommen und Verifikation in das [[assessment|Assessment]] als bewertete Aktivität gestaltet werden sollte: eine falsche Annahme identifizieren, einen Einheiten- oder Mechanismusfehler korrigieren oder die Ablehnung einer erzeugten Antwort begründen, und dabei Prompt-Logs und Überarbeitungshistorien als Spuren des Denkens führen. ([[vega-baudrit-genai-university-chemistry-education-review-2026|Vega-Baudrit und Rivera Álvarez 2026]])
- **Verifikation als Lernaktivität, nicht nur als Schutz.** [[pearls-epistemic-verification-2026|Wang (2026)]] organisiert die Evaluation von KI-Artefakten um sechs interdependente Dimensionen — Prozess, Belege, Zugang, Reproduzierbarkeit, Legitimität und Quelle — und behandelt das Zusammenstellen dieser Begründung, statt der Flüssigkeit der Ausgabe, als das, was fachliche Expertise aufbaut.

**Die größte von Expertinnen und Experten bewertete Verletzlichkeit in der Wissensbasis ist kritisches Denken.** Über 65 von 30 Expertinnen und Experten bewertete Lernprozesse hinweg zogen Kritisches Denken und kritisch-analytisches Denken die höchste Störungsbewertung des Berichts auf sich (Mittelwert 4.00 von 5; 96% der Bewertenden bei 3 oder darüber), mit Verbesserung unter der Schwelle (2.40, 43%) ([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou, Greene & Nixon et al., 2026]]). Zehn von achtzehn höherstufigen Prozessen erreichten Konsens nur über Verletzlichkeit, was der Bericht als einseitiges Risiko liest statt als Trade-off.
## Verbundene Konzepte
- [[metacognition]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[generative-ai]]
- [[higher-ed]]
- [[problem-based-learning]]
- [[intelligent-tutoring]]
- [[educational-development]]
- [[teacher-role]]
- [[student-experience]]
- [[chemistry-education]] — Chemieunterricht und KI: Labore, formatives Assessment, Grenzen von LLMs, Philosophie des Experimentierens
- [[biology-education]] — Biologieunterricht und KI: Labor-Lehrassistenten, KI-Kompetenz in der Biologie, kritisches Denken, spezialisierte Werkzeuge
- [[cognitive-surrender]]

## Verbundene Artikel
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] - A 30-expert consensus: critical thinking carries the report's highest disruption rating (mean 4.00)
- [[pearls-epistemic-verification-2026]] — PEARLS framework for epistemic agency and verifying AI output (Wang 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[critical-thinking-paradox-genai-learning-2026]] — The critical-thinking paradox in GenAI-integrated learning
- [[pedagogy-ai-mistakes]] — The Pedagogy of AI Mistakes: Fostering Higher-Order Thinking (Hosseini 2026)
- [[shaw-nave-cognitive-surrender-2026]] — Tri-System Theory and cognitive surrender: how AI reshapes human reasoning (Shaw & Nave 2026)
- [[cognitive-commons-ai-expertise-regeneration]] — The tragedy of the cognitive commons: AI and expertise regeneration
- [[zhao-genai-higher-order-thinking-meta-2026]] — GenAI and higher-order thinking meta-analysis
- [[avraamidou-ai-colonization-science-education]] — Disrupting the AI colonization of science education
- [[li-mroziak-reorienting-critical-ai-literacy]] — Reorienting critical AI literacy
- [[luo-ibl-patterns-llm-bloom-2026]] — IBL patterns in LLM-driven environments (Bloom's perspective)
- [[probing-ai-generated-physics-solutions-2026]] — Preparing students to critique AI-generated physics solutions
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[daoism-ai-education-philosophy-2026]] — Alternative AI Philosophy: Daoism as Method for AI in Education
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fostering Sustainable Learning via Embodied Intelligence (E3-HOT)
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Dimension-specific critical-thinking gains in AI-supported multimodal writing (Lu et al. 2027)
- [[lftutor-logical-fallacy-education-2026]] — teaching fallacy recognition through structured multi-turn dialogue
- [[caeai-ai-companions-learning-over-performance-2026]] — learning over performance: what companions should be optimized and measured for
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — AI scaffolding, offloading, and verification literacy via metacognitive self-regulation (Davor et al. 2026)
- [[shojaei-genai-dependence-critical-thinking-employability-2026]] — GenAI dependence bounds the use to critical-thinking link in business students (Shojaei et al. 2026)
- [[ren-metacognitive-awareness-genai-reliance-2026]] — Reflection prompt cuts acceptance of incorrect AI advice and attribution bias (Ren 2026)
- [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026]] — Role rotation as structure for critical human-AI interaction (Kenzhebayeva et al. 2026)
- [[vega-baudrit-genai-university-chemistry-education-review-2026]] — Verification-centered GenAI integration in university chemistry education (Vega-Baudrit and Rivera Álvarez 2026)
- [[chen-chatgpt-assisted-teacher-feedback-critical-thinking-2026]] — teacher-curated ChatGPT feedback raised critical thinking via higher-order revision (Chen et al. 2026)
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — a semester of AI access left critical thinking flat; reflective use predicted it (Melanou et al. 2026)

- [[genai-dependence-research-creativity-2026]] — GenAI dependence positively associated with critical thinking in 1,157 graduate students
- [[genai-use-critical-thinking-moderation-2026]] — GenAI use to critical thinking via feedback literacy, with a direct path only for less reflective students
