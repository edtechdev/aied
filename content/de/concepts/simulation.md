---
connected_resources: [openmaic]
title: "Simulation"
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-30T23:30:00-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
translation_of: concepts/simulation
source_updated: "2026-10-28T15:48:01-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Simulation** — der Einsatz modellierter Umgebungen, Agenten oder Szenarien, um Lernen durch Übung und Feedback in Kontexten zu unterstützen, die sicher, wiederholbar und oft anders unzugänglich sind. Simulationen lassen Lernende handeln, Fehler machen und Folgen sehen ohne reale Kosten, und werden zunehmend von KI und agentenbasierter Modellierung angetrieben.

## Fragen zum Nachdenken

- Erinnern Sie sich an einen Moment, in dem Sie etwas lernten, indem Sie es in einer sicheren Umgebung mit niedrigem Einsatz taten – ein Labor, eine Mock-Übung, ein Flug- oder Spielsimulator. Was machte diese Übung wirksam, und was könnte verloren gehen, wenn die Simulation zu realistisch oder nicht realistisch genug wäre?
- Die Seite argumentiert, Simulationen ließen Lernende Fehler machen und Folgen „ohne reale Kosten" sehen. Was, glauben Sie, wird gewonnen, und was könnte verloren gehen, wenn die Kosten eines Fehlers auf nahezu null sinken?
- Wenn eine KI Patienten, Studierende oder Gesprächspartner zum Üben simulieren kann, wo würden Sie die Grenze zwischen wertvoller Probe und Übung ziehen, die nicht auf reale menschliche Interaktion transferiert?
- Warum könnte das Bewusstsein einer lernenden Person für die Grenzen einer Simulation – ihre [[trust|Vertrauenswürdigkeit]] – ebenso sehr zählen wie, wie getreu sie Realität modelliert?
- Wie könnte dieselbe Simulationstechnologie, die jemandem hilft zu lernen, sie auch in die Irre führen, und was müssten Sie wissen, um diese zwei Ergebnisse auseinanderzuhalten?

## Einführung

Simulation sitzt im Kern [[experiential-learning|erfahrungsbasierter]] und [[active-learning|aktiven]] [[pedagogy|Pädagogiken]]. Sie liefert die absichtliche Übung, [[productive-failure|produktives Scheitern]] und [[feedback|Feedbackschleifen]], die Fähigkeit und Urteilsvermögen aufbauen. KI hat Simulation auf zwei Weisen transformiert: sie treibt realistischere und adaptive simulierte Umgebungen an, und sie erzeugt [[simulating-students|simulierte Lernende]], Patienten oder Gesprächspartner, die Übung skalierbar machen. Verhaltens-Evidenz zeigt, dass *wie* Lernende sich mit einer Simulation engagieren, systematisch statt gleichförmig variiert: beim Verfolgen von Online-Lernenden, die ökologische Modelle in VERA bauen, klassifizierten [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] [[student-engagement|Engagement]] in Beobachtung (häufige Läufe und Parameteranpassung mit wenig Modellbau), Konstruktion (hands-on Bauen mit wenig Simulation) und Exploration (vollständige Konstruktion-Parametrisierung-Simulation-Zyklen), wobei Explorierende die komplexesten und vielfältigsten Modelle produzierten und beobachtungsstarke Lernende weitgehend bestehende kopierten – ein Argument, Simulationsumgebungen so zu gestalten, dass sie Lernende zu vollzyklischer Aktivität treiben.
- **Ein expliziter Mechanismus ist prüfbar, ein gelernter Generator nicht.** DagFlow-AI baut synthetische Daten aus einem gerichteten azyklischen Graphen plus Verteilungen und Formeln pro Variable, sodass der Datenerzeugungsprozess ein Dokument ist, das eine Lehrkraft lesen und korrigieren kann ([[arthur-dagflow-agentic-synthetic-data-statistics-2026|Arthur et al., 2026]]). Das steht in bewusstem Kontrast zur GAN- und VAE-Synthese, die einen Seed-Datensatz braucht und einen opaken Prozess liefert. Der Preis ist, dass es mehrere Iterationen brauchte, bis eine stabile Simulation stand.

### KI und Simulation

- **KI-angetriebene Umgebungen:** adaptive Simulationen passen Schwierigkeit und Szenarien an den Zustand einer lernenden Person an und verbinden sich mit [[adaptive-learning|adaptivem Lernen]] und auf [[reinforcement-learning|bestärkendem Lernen]] basierendem Coaching.
- **Die virtuelle Umgebung und die KI-Schicht sind trennbare Gewinne.** In einer dreiwöchigen Einheit zum Ohmschen Gesetz in Klasse 9 betrug die adjustierte Leistung 23,45 von 30 mit einem KI-gestützten virtuellen Labor, 20,51 mit demselben Labor ohne KI und 16,57 in einem physischen Labor ([[li-ahmad-ai-virtual-lab-flipped-physics-2026|Li und Ahmad (2026)]]). Die intakten Klassen wurden jeweils einer anderen Lehrkraft zugewiesen, sodass dies drei Klassenzimmer-Arrangements beschreibt, nicht den Agenten allein.

- **Prompt-generierte Simulationen bringen ein maßgeschneidertes Labor in Reichweite.** Lehrende können browsergestützte Modelle des Themas aus einer wiederverwendbaren Prompt-Vorlage erzeugen, das ein Kurs braucht (Schieberegler, Animation, zeitabhängige Graphen), und jedes zweimal validieren – technisch, dann gegen die bekannte analytische Lösung –, statt die nächstliegende publizierte Simulation zu akzeptieren ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025]]).

- **Den menschlichen Gegenpart automatisieren.** [[astra-atco-training-simulator|Chew et al. (2026)]] ersetzen die spezialisierten menschlichen Rollenspielerinnen und Rollenspieler, die Fluglotsensimulationen bestücken, durch autonome [[llm|LLM]]-Sim-Piloten und beseitigen damit einen Trainingskapazitäts-Engpass; ihre feinjustierte Sprach-Pipeline senkte die Wortfehlerrate bei singapurisch-akzentuierter Flugsprache von 107.80% auf 23.45%, obwohl alle Evaluationen auf Komponentenebene erfolgten, ohne dass eine Auszubildenden-Kohorte lief.
- **Adversariale Simulatoren als Trainingspartner.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] paart einen Policy-Agenten mit LLM-Patientensimulatoren, gebaut um sich über eine 57K-Fall-Szenario-Pipeline hinweg adversarial zu verhalten; Training gegen sie senkte die Rate verpasster Red-Flag-Signale um etwa ein Drittel, und verblindete Klinikerinnen und Kliniker bevorzugten den trainierten Agenten in 87.6% der Seite-an-Seite-Vergleiche.
- **Fehlende Fallzustände explizit kodieren.** Ein Multi-Agenten-Standardpatienten-System hält Intentionserkennung, fallverankerte Antworterzeugung und Nachsitzungs-Evaluation getrennt und unterscheidet vier Arten fehlender Information – klinisch negativ, der Patientin oder dem Patienten unbekannt, noch nicht erfasst, und im Fall abwesend –, weil das Zusammenwerfen derselben zu „normal" nicht gestützte klinische Fakten injiziert ([[medeasy-ai-standardized-patients|Gao et al. (2026)]]).
- **Simulierte Agenten:** KI kann Patienten (für medizinisches Training), Studierende (für [[teacher-role|Lehrkräfte]]praxis) oder Gesprächspartner simulieren und macht zwischenmenschliche Übung mit hohem Einsatz zugänglich und wiederholbar. In der [[teacher-education|Lehrkräftebildung]] bauten [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang und Zhang (2025)]] *Student GPT*, einen maßgeschneiderten ChatGPT-[[conversational-ai|Chatbot]], der einen [[k-12|Mittelschüler]] spielte, der verbreitete [[misconceptions|Missverständnisse]] über Verhältnisschlussfolgern hält, und Lehramtsstudierenden der [[math-education|Mathematik]] erschwingliche, inhaltsspezifische Übung im Diagnostizieren studentischen Denkens gab –, und nutzten ein [[affective-computing|Affective]], Communicative, Technical (ACT) genannten Kodierrahmen, um systematisch die Stärken des Rollenspiels des simulierten Studierenden (Klarheit, Relevanz, Fehlerkonsistenz) und Authentizitätsschwächen (lehrkraft-ähnlicher Ton, Rollenverwirrung) zu bewerten.
- **Kontrafaktische Historie zu einem erstklassigen Merkmal machen.** SupplyNets kontextuelle Multi-Agenten-[[llm|LLM]]-Agenten erzeugen Lieferkettendynamik, die aus Entscheidungen der Lernenden emergent ist statt geskriptet, und seine verzweigte Zeitleiste lässt Lernende frühere Entscheidungen ohne Strafe erneut besuchen – 13 von 14 Teilnehmenden bewerteten es hoch darin, Entscheidungen mit Leistung zu verbinden, gegenüber 3 für die Baseline ([[supplynet-visual-exploratory-learning|Li et al. (2026)]]).
- **Verankerte Dynamik, nicht eine promptete Persona.** [[adaptive-virtual-patient-psychotherapy-training|Chen et al. (2026)]] parametrisierten die Offenlegungsdynamik eines virtuellen Patienten aus fast 2,000 Stunden echter Psychotherapie-Transkripte und aktualisierten das Niveau jeden Zug; über 1,033 Züge mit 20 Klinikerinnen und Klinikern stieg ihre Offenlegung mit Empathie und Exploration der Therapeutin oder des Therapeuten, während eine Nur-Prompt-Baseline auf demselben LLM flach blieb.
- **Rollenspiel versetzt die lernende Person in die Rolle.** Wo simulierte Agenten den Gegenpart liefern, gibt Rollenspiel der lernenden Person stattdessen diese Rolle. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari und Kolleginnen und Kollegen (2026)]] ließen 18 Kinder im Alter von 9–10 Jahren eine Mobbingszene anschauen, die von sozialen Robotern dargestellt wurde, über die Position jeder Figur schlussfolgern und dann das Verteidigen einüben, indem sie einen Roboter-Avatar wie eine Puppe führten, und berichteten Zuwächse in wahrgenommener [[self-efficacy|Selbstwirksamkeit]] beim Verteidigen plus besser kalibrierten Überzeugungen darüber, ob die Konfrontation eines Mobbers tatsächlich stoppt, dass er mobbt. Ihre Rahmung, robotervermitteltes angewandtes Drama, hält eine menschliche Facilitatorin in der Forum-Theatre-Rolle und beschränkt Automatisierung auf narrative Kontrolle, was eine nützliche Erinnerung ist, dass der anspruchsvolle Teil von Rollenspiel die Reflexion ist statt die Maschinerie. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga und Johnson (2025)]] platzieren Rollenspiel neben Simulation unter den Strategien, aus denen KI-gestütztes Online-Lernen schöpft.

- **Simulierte Lernende:** Modelle studentischen Verhaltens lassen [[research-methods-aied|Forschende]] und Gestaltende Tutoringsysteme und [[curriculum-design|Curriculum]] vor Live-Einsatz testen und verankern [[student-modeling|Lernendenmodellierung]] und [[knowledge-tracing|Knowledge Tracing]].
- **Vertrauen und Treue:** der Wert einer Simulation hängt davon ab, wie getreu sie den realen Kontext modelliert –, und vom Bewusstsein der lernenden Person für ihre Grenzen, verbunden mit [[trust-calibration|Vertrauenskalibrierung]].

- **Menschenähnlichkeit ist eine Eigenschaft der Interaktion, nicht des Modells.** Sobald beide Backends hinter demselben Avatar gerendert waren, verschwand ein textbasierter Menschenähnlichkeits-Vorteil: Teilnehmende nannten das kommerzielle Modell natürlich (54% gegenüber 22%), während Kommunikationsleistung identisch war; Stimme, Latenz und Zugwechsel formten um, wie dieselbe Dialogqualität wahrgenommen wurde ([[sophie-clinical-communication-ai-assessment-2026|Hasan et al. (2026)]]).
- **[[generative-ai|GenAI]] im simulationsbasierten Lernen.** [[genai-scenario-based-healthcare-education-2026|Neto und Kolleginnen und Kollegen (2026)]] [[meta-analysis-systematic-review|sichten systematisch]] GenAI über szenario-, fall-, problem- und simulationsbasiertes Lernen in der Gesundheitsbildung hinweg und finden positive Ergebnisse für kognitive Fähigkeiten höherer Ordnung, aber inkonsistente Ergebnisse anderswo, wobei hybride [[human-ai-collaboration|Mensch-KI-Zusammenarbeit]] vollständig automatisierte Ansätze übertrifft. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger und Liening (2026)]] entwickeln KI-konversationelle Agenten für adaptive Unterstützung in Wirtschafts-Simulationsspielen und adressieren die verbreitete Lücke begrenzten [[formative-assessment|formativen]] Feedbacks und strukturierter Reflexion im simulationsbasierten Lernen.
- **Die „Authentizitätslücke" begrenzt, was KI-Simulation ersetzen kann.** In [[medical-education|klinischer]] Simulation findet [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]]s [[mixed-methods-research|Mixed-Methods]]-systematischer Review von KI-angetriebener Pflegesimulation (19 Studien, N=1,253) KI wirksam für kognitives Wissen und affektive Ergebnisse, aber inkonsistent für komplexe psychomotorische Fähigkeiten. Ihr Konzept einer **Authentizitätslücke** – ein von Lernenden wahrgenommenes Zurückbleiben in emotionaler Resonanz, nonverbaler Signalerkennung und taktilen/körperlichen Untersuchungsdimensionen – erklärt, *warum* KI-Simulation am besten für hochstrukturierte Ziele ist (fundamentale Kommunikation, Anamneseerhebung) und in einem **gestuften Simulationskontinuum** sitzen sollte, das fortgeschrittene psychomotorische und emotional komplexe Szenarien an menschliche standardisierte Patienten und klinische Praktika übergibt. Technische Instabilität (z. B. Verzögerungen bei Spracherkennung) kann außerdem extraneous [[cognitive-offloading|kognitive Last]] und Angst hinzufügen, deshalb sind Treue und Stabilität selbst Designhebel. Das parallelisiert [[genai-scenario-based-healthcare-education-2026|Neto et al.]] Befund, dass hybride Mensch-KI-Ansätze vollständig automatisierte übertreffen.
- **Von Lehrkräften und KI co-gestaltete Simulationen.** Interaktive Simulationen, die sowohl konzeptuelles Lernen als auch Kompetenzentwicklung unterstützen, sind in hands-on-Domänen selten, und GenAI-Ausgabe ermangelt oft pädagogischer Validität. In der [[stem-education|drohnenbasierten STEM-Bildung]] wurden von Lehrkräften und KI co-gestaltete Simulationen, eingebettet in ein ansonsten identisches hands-on Curriculum, mit einem quasi-experimentellen Pretest-Posttest-Design über 30 Sekundarstufen-Studierende hinweg evaluiert, und untersuchten, ob simulationsgestützter Unterricht überlegene [[learning-gains|Lernoutcomes]] ergibt ([[simulation-assisted-drone-learning-stem-2026|Simulationsgestütztes Drohnenlernen in STEM]]). Separat nutzen [[agentic-ai|Multi-Agenten]]-Tutoring-[[benchmark|Benchmarks]] wie ASTRA simulierte sozial intelligente Agenten, um partizipations-ausbalancierte Kollaboration im [[cs-education|Programmier-Einführungskurs]] zu untersuchen ([[astra-multi-agent-tutoring-benchmark-2026]]).

- **Steuerung durch Lernende in Simulation ist vollzogen, nicht gewährt.** Ein 2 × 2-Experiment in einer Schwarm-Simulation ([[learner-agency-ai-simulation-2026|Su, Nair und Nagashima 2026]]) gab manchen Studierenden Parameter-Schieberegler, manchen einen optionalen konversationellen Agenten und manchen beides; jede Bedingung verbesserte sich, aber keine der Ermöglichungen produzierte einen verlässlichen Unterschied, sobald Vorwissen kontrolliert war (p = .849 und p = .108). Was [[learning-gains|Zuwächse]] vorhersagte, war, wo und wie lange Lernende Parameter manipulierten: aufrechterhaltene Schiebereglernutzung in der konzeptuell komplexesten Lektion war positiv mit Zuwächsen assoziiert, und dasselbe Verhalten in der leichteren Lektion negativ. Für Simulationsbauerinnen und -bauer ist die Implikation, dass das Anbieten von Steuerung nicht die Intervention ist – Lernenden zu helfen zu entscheiden, was zu ändern ist, und zu registrieren, was sich änderte, ist es.
- **Ein digitaler Zwilling ist eine Simulation mit einer Hardware-Rechnung, und die Rechnung prägt, wer teilnehmen kann.** Ein [[meta-analysis-systematic-review|systematischer Review]] von 11 Studien zu digitalen Zwillingen in [[engineering-education|Ingenieurwesen]]- und STEM-Hochschulbildung fand, dass jede Implementierung einen funktionierenden Prototypen mit Echtzeit-Synchronisation lieferte, doch nur drei statistisch signifikante [[learning-gains|Lernzuwächse]] berichteten. Physische Rigs begrenzten den Zugang in fünf Studien auf 1–3 gleichzeitige Studierende, und reduzierte soziale Interaktion war die am häufigsten genannte pädagogische Herausforderung, in sechs ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González et al. (2026)]]).
- **Agentenbasierte Simulation kann eine Metakognitionstheorie als prüfbares System modellieren.** Ein agentenbasiertes, an digitalen Zwillingen orientiertes Rahmenwerk, das das fünfstufige AMERT-Modell mit einer NetLogo-Simulation verbindet, erlaubte es Forschenden, Lernenden-Archetypen und Aufgabenbedingungen zu variieren und metakognitive Verläufe zu beobachten, wobei die Autorinnen und Autoren betonen, dass der Output Hypothesengenerierung ist und keine Evidenz über reale Lernende ([[agent-based-digital-twin-metacognition-2026|Guo, 2026]]). Simulation wird damit zum virtuellen Labor für eine Theorie, die sonst schwer zu beobachten ist.

### Verbindungen

Simulation verbindet sich mit [[active-learning|aktivem Lernen]], [[adaptive-learning|adaptivem Lernen]] und [[pedagogical-agent|pädagogischen Agenten]]. Sie ist ein Mechanismus für erfahrungsbasiertes und [[constructivist|konstruktivistisches]] Lernen und wird durch KI-Fähigkeit verstärkt, adaptive, realistische Übungsumgebungen zu erzeugen.

## Verbreitete Fehlvorstellungen

- **„Simulation ist billiger und deshalb zweitklassig."** Autonome [[llm|LLM]]-Sim-Piloten **ersetzen die spezialisierten menschlichen Rollenspielerinnen und Rollenspieler, die Fluglotsensimulationen bestücken, und beseitigen damit einen Trainingskapazitätsengpass** — die Einschränkung war die Personalausstattung, nicht die Treue. Wo menschliche Rollenspieler knapp sind, ist die LLM-Simulation kein Ersatz, sondern die einzig verfügbare Option.
- **„Simulatoren sollten sich wie Durchschnittsfälle verhalten."** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] paart einen Policy-Agenten mit **LLM-Patientensimulatoren, die gebaut sind, um sich adversarial zu verhalten**. Ein Simulator, der kooperativ gestaltet ist, macht die Übung der Lernenden leichter als die Klinik, was das Gegenteil dessen ist, was Training braucht.
- **„Geskriptete Szenarien lehren Entscheiden unter Unsicherheit."** Die kontextuellen Multi-Agenten von SupplyNet erzeugen **Dynamik, die aus Entscheidungen der Lernenden emergent ist statt geskriptet**. Geskriptete Szenarien proben einen bekannten Pfad; die emergenten proben die Entscheidung.

## Verbundene Konzepte
- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Chemiebildung und KI: Labore, formatives Prüfen, Grenzen von LLMs, Philosophie des Experimentierens
- [[biology-education]] — Biologiebildung und KI: Labor-Lehrassistenten, KI-Kompetenz in der Biologie, kritisches Denken, spezialisierte Werkzeuge
- [[ai-technologies]] — Überblick: KI-Technologien und -Verfahren (Modelle, LLM-Training, Robotik, RAG, agentisch)
- [[virtual-and-augmented-reality]] — das Modell, nicht die Modalität — immersive Umgebungen rendern üblicherweise eine Simulation

## Verbundene Artikel
- [[learner-agency-ai-simulation-2026]] — Parametersteuerung und ein optionaler KI-Agent in einer Komplexsystem-Simulation: Gewinne folgten der vollzogenen Handlung, nicht dem Zugang
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Adaptive virtuelle Patienten für das Psychotherapie-Training
- [[ai-enabled-serious-games]] — KI-gestützte Serious Games
- [[anvil-ai-educational-animations]] — ANVIL: Analogien und Videos für Dozierende
- [[astra-atco-training-simulator]] — ASTRA: ATCO-Trainingssimulator
- [[supplynet-visual-exploratory-learning]] — SupplyNet: visuelles exploratorisches Lernen
- [[medeasy-ai-standardized-patients]] — MedEASY: KI-gestützte standardisierte Patienten
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Robotergestütztes Rollenspiel zur Intervention als Zeugin (angewandtes Drama)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — Systematischer Review zu GenAI in der szenariobasierten Gesundheitsbildung (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — CAIS-GBL-Framework für KI-Konversationsagenten in Wirtschaftssimulationsspielen (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Feinabgestimmte teilnehmendenspezifische LLM-Agenten, die Dialoge kollaborativen Problemlösens reproduzieren (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA-Synthetik-Benchmark für Multi-Agenten-Tutoring und partizipationsbalancierte Kollaboration
- [[simulation-assisted-drone-learning-stem-2026]] — Simulationsgestütztes Drohnenlernen mit von Lehrkraft und KI mitgestalteten Gerüsten
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — KI-gestützte Simulation in der Pflegebildung: Mixed-Methods-Systematischer-Review (Authentizitätslücke, gestuftes Kontinuum)
- [[sophie-clinical-communication-ai-assessment-2026]] — Skalierbares KI-basiertes Training klinischer Kommunikation und automatisches Assessment
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Digitale Zwillinge in der STEM-Bildung: Alle Prototypen funktionierten, Lernzuwächse meist nicht

- [[li-ahmad-ai-virtual-lab-flipped-physics-2026]] — KI-gestütztes virtuelles Labor für umgedrehtes Physiklernen: Effekte auf Leistung, Motivation und kognitive Last bei Mittelstufenstudierenden
