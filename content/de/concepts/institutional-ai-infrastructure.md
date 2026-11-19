---
title: "Institutionelle KI-Infrastruktur"
created: "2026-11-18T18:45:00-05:00"
updated: "2026-11-18T18:45:00-05:00"
type: concept
connected_resources: [mindrouter, amplify-genai, canvas-mcp]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed, k 12]
discipline: [information technology]
confidence: high
translation_of: concepts/institutional-ai-infrastructure
source_updated: "2026-11-16T20:30:23-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Institutionelle KI-Infrastruktur** — die Rechen-, Serving-, Routing- und Steuerungsschicht, die eine Institution betreibt, damit Modelle in Lehre, Forschung und Verwaltung nach ihren eigenen Regeln eingesetzt werden können. Sie umfasst die GPUs und Cluster, die die Gewichte halten, die Inferenzserver, die Anfragen beantworten, das [[llm|Gateway]], das sie misst und weiterleitet, die Model Cards und Audit-Logs, die das Arrangement überprüfbar machen, die Datenpipelines, die Studierendenakten mit Modellen verbinden, und die Mitarbeitenden, die alles am Laufen halten. Sie ist nicht dasselbe Objekt wie eine [[edtech-platform|EdTech-Plattform]] (der den Lernenden zugewandte Container) oder [[governance|Governance]] (die Richtlinie, die beide begrenzt).

## Fragen zum Nachdenken

- Wo läuft das Modell in Ihrer Institution tatsächlich, und kann jemand die Person benennen, die das ohne Nachschauen beantworten könnte?
- In welcher der sechs Adoptionsformen unten befinden Sie sich bereits, und in welcher glaubten Sie sich zu befinden?
- Wenn neunzig Prozent der Nutzung von zehn Prozent der Nutzenden ausgingen, würde eine Pro-Platz-Lizenz oder ein verbrauchsgemessenes Gateway Ihrem Budget besser dienen — und wissen Sie, welche Form Ihre Nutzung hat?
- Ein Richtliniendokument besagt, dass Anfragen die Jurisdiktion nicht verlassen dürfen. Was in Ihrem Stack erzwingt das, statt Menschen zu bitten, sich daran zu erinnern?
- Wer ist verantwortlich, wenn eine Empfehlung zur Kursanrechnung falsch ist, und zeichnet Ihre Infrastruktur genug auf, um das später beantworten zu können?
- Was ändert sich für eine Grundschule, wenn das Modell klein ist und im Gebäude läuft, statt Frontier-Größe zu haben und remote betrieben zu werden?

## Einführung

Institutionen verbrachten die ersten Jahre der [[generative-ai|generativen KI]] damit, Zugang einzukaufen: hier eine [[conversational-ai|Chatbot]]-Lizenz, dort ein Schreibassistent, jeweils mit eigenen Bedingungen und eigenem Datenpfad. Das Ergebnis ist ein Portfolio, das niemand in einem Satz beschreiben kann, und eine Reihe von Fragen (wo ist dieser Prompt hingegangen, wer hat dieses Modell genehmigt, was haben wir ausgegeben), die keine einzelne Stelle beantworten kann.

KI als Infrastruktur zu behandeln ist die Antwort. Das bedeutet eine gemeinsame Serving-Schicht, ein Gateway, das die Regeln der Institution auf jede Anfrage anwendet, und genügend Telemetrie, um Kosten, Last und Ausfälle zu sehen. Die Behauptung in der Literatur lautet nicht, dass dies billiger ist. Sie lautet, dass es die Institution zu der Partei macht, die entscheidet — das ist eine andere Art von Behauptung und eine, die schwerer zu prüfen ist.

Die hier versammelten Beiträge erweitern auch, was als Infrastruktur zählt. Zwei betreffen Inferenz für Chat und Lehre, einer betrifft das Studierendensekretariat, und einer betrifft Assessment-Aufzeichnungen. Sobald Kursanrechnung, Workload-[[learning-analytics|Analytics]] und Evidenzakkumulation von Embeddings und Modellaufrufen abhängen, ist das Backoffice ebenso Teil des Stacks wie das GPU-Rack. Die These lautet: Infrastruktur ist überall dort, wo eine Institution stillschweigend eine Entscheidung an ein Modell delegiert hat.

## Was Sie eigentlich wählen

Das Feld beschreibt sechs Formen, nicht zwei. Sie unterscheiden sich darin, wer die Daten hält, wer das Modell ändern kann und wer die Folgen eines Fehlers trägt.

**Kostenlose ausgelagerte Werkzeuge.** Mitarbeitende oder Studierende nutzen den Dienst eines Anbieters kostenlos. [[intelligent-tutoring|AI Tutor]] Pro von Contact North in Kanada ist der klarste Fall: kostenlos, anonym, kein Konto erforderlich, mit Modi für Diskussion, [[self-assessment|Selbstüberprüfung]] und das Erstellen von Lernleitfäden. Playlab liegt im gleichen Bereich und lässt Lehrende Apps bauen, die auf ihrem eigenen [[curriculum-design|Curriculum]] gründen, während der Anbieter die Modelle hostet. Die Kosten sind nicht null, sondern verschoben: kein institutioneller Audit-Trail, keine Quota-Steuerung und Bedingungen, die sich ohne Ankündigung ändern können. Das ist ein vertretbarer Ort zum Pilotieren und ein schlechter Ort zum Bleiben.

**Plätze auf einem kommerziellen Bildungs-Tenant.** Ein Schulbezirk oder eine Universität kauft ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education oder einen vergleichbaren Tenant. Die Beschaffung ist schnell, SSO und eine Admin-Konsole sind enthalten, und der Anbieter kontrolliert Modellwahl und Aufbewahrung. Die Institution gewinnt Identitätsintegration und verliert die Fähigkeit, einen Anbieter zu umgehen.

**Eine Plattform, die Sie selbst hosten.** [Amplify GenAI](/aied/resources/amplify-genai/) wird im eigenen AWS-Konto der Institution bereitgestellt, sodass Dokumente und Gespräche in einer Infrastruktur bleiben, die die Institution kontrolliert, während der Anbieter die Anwendung liefert. Der Pilot an der Vanderbilt University berichtete etwa \$3 pro Nutzer und Monat bei 1.300 Nutzern, wobei die Hälfte davon unter \$1 an Token-Ausgaben blieb. Diese Form kauft Datenkontrolle, ohne GPUs zu kaufen.

**Ein Gateway über gemischten Anbietern.** Eine einzige Eingangstür vor lokalen und kommerziellen Backends, mit Quotas, SSO, Logging und regionalem Routing. Fontys hat dies in drei Schichten gebaut; [MindRouter](/aied/resources/mindrouter/) und SPIN implementieren Varianten. Es ist die Form, die ein Richtliniendokument in eine erzwungene Beschränkung verwandelt, und diejenige, die einen Plattform-Engineer statt eines Beschaffungsreferenten braucht.

**Ihre eigene Inferenz.** GPUs, Scheduler, Modellserver und die Menschen, die sie betreiben. MindRouter an der University of Idaho ist der Referenzfall; SPIN am Georgia Tech ist dieselbe Wette innerhalb eines HPC-Zentrums. Dies ist die einzige Form, in der die Institution auf eine Vorladung, eine Aufsichtsbehörde oder eine Preisänderung des Anbieters reagieren kann, ohne um Erlaubnis zu bitten.

**KI in Werkzeugen, die Sie bereits betreiben.** Ein Moodle-Fragetyp, der KI-Partner einer Diskussionsplattform, ein Tool für Essay-Feedback. Der organisatorische Aufwand ist gering, und der Wandel kommt Kurs für Kurs — was auch seine Grenze ist: Nichts im Zentrum lernt daraus.

Diese Formen sind verschachtelt. Ein Gateway kann einer gehosteten Plattform vorgeschaltet sein; eine gehostete Plattform kann ein lokales Modell aufrufen; ein kostenloses Werkzeug kann der Pilot sein, der keine der obigen Formen rechtfertigt. Die nützliche Frage ist nicht, welche Form die beste ist, sondern welche Entscheidung jede Form stillschweigend für Sie trifft.

**Der tatsächliche Standard im Sektor ist ein Platz auf einem Anbieter-Tenant.** Nicht jede Institution trifft die Wahl bewusst. [[making-ai-work-for-students-ofs-2026|OfS und Advance HE (2026)]] untersuchten 127 Institutionen und fanden, dass die meisten Werkzeuge über bestehende Microsoft-365-Lizenzen bereitstellen, am häufigsten Copilot Chat, geschätzt, weil seine geschlossene Umgebung institutionelle Daten innerhalb des Compliance-Rahmens hält. Mitarbeitende an Institutionen ohne Lizenzen griffen zu leistungsfähigeren kostenlosen Werkzeugen, manchmal mit Studierendendaten, und Teilnehmende wiesen darauf hin, dass der heute kostenlose oder günstige Tarif zur morgigen, nicht budgetierten Preiserhöhung wird.

## Die Gateway-Schicht

Drei Implementierungen beschreiben inzwischen denselben architektonischen Schritt mit ungewöhnlicher Übereinstimmung.

[[huijts-suilen-institutional-ai-sovereignty-gateway-2025|Huijts und Suilen]] von Fontys ICT trennen ein ChatGPT-artiges Frontend, das an die institutionelle Identität gebunden ist, einen Routing-Kern, der Budgets und regionale Vorgaben erzwingt, und eine Anbieterschicht aus lokalen und kommerziellen Modellen. Sechs Monate und 300 Nutzer später war eine monatliche Obergrenze von \$500 nie überschritten worden, und jede Sitzung begann mit einer Model Card, die Fähigkeiten, Hosting-Region, Kosten und Alternativen benannte.

[[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] treibt dieselbe Idee ins Scheduling. Anfragen werden nach Rolle gewichtet ([[administrator|Administrator]] 10, Lehrende 5, Mitarbeitende 2, Studierende 1) mittels Weighted Deficit Round Robin, und die Backend-Auswahl ergänzt weiche Scores für Latenz, Last und Administratorpräferenz. Das Gateway führt das Audit-Log, und es misst Energie ebenso wie Tokens.

[[rahaman-soa-on-prem-ai-gateway-2026|SPIN am Georgia Tech]] macht die Trennung an der API-Grenze explizit: LiteLLM und PostgreSQL auf einer reinen CPU-VM, vLLM und Triton auf GPU-Knoten innerhalb von Slurm, wobei Backend-Host, -Port und -Schlüssel zur Anfragezeit aus der Datenbank aufgelöst werden. Ein Modell zu ersetzen wird zu einem Datenbank-Update, das für Clients unsichtbar ist.

Die Unterschiede sind lehrreich. Fontys steuert ein Multi-Provider-Portfolio, MindRouter steuert knappe geteilte Kapazität, und SPIN steuert Inferenz auf einem Batch-Scheduler, der darauf ausgelegt ist, Jobs zu beenden. Alle drei laufen auf eine Behauptung zu: Die API-Oberfläche ist der Vertrag, und das Modell dahinter ist austauschbar.

## Serving ist eine Richtlinie, kein Benchmark

[[rodenbeck-purdue-on-prem-genai-inference-2025|Purdues zwei Dienste]] erreichten über 1000 Nutzer mit 10+ [[open-source|Open-Source]]-Modellen für rund \$100.000 an Hardware, wobei etwa 40 % monatlich aktiv waren. Die entscheidende Entscheidung ist, dass das Team Ollama statt vLLM behielt, trotz des 4-5-fachen Durchsatzvorteils von vLLM, weil die Unterstützung vieler Modelle für eine Gemeinschaft, die Dinge ausprobieren will, wichtiger war als rohe Geschwindigkeit.

SPINs Lasttest liefert die andere Hälfte des Bildes. Gegen eine gemockte Engine bei 1000 gleichzeitigen Anfragen pro Sekunde erreichte eine Gateway-VM mit 8 vCPUs 76 % der idealen Gesamtrate, während Bare Metal mit 8 Workern 98 % erreichte. Die Proxy-Schicht ist billig, bis sie es nicht mehr ist, und die Schwelle ist messbar statt geheimnisvoll.

Keines der Ergebnisse lässt sich zu einer Regel verallgemeinern. Sie belegen, dass Durchsatz, Modellbreite und betriebliche Einfachheit gegeneinander abgewogen werden müssen und dass diese Abwägung bewusst getroffen werden sollte, statt sie aus dem Standard eines Anbieters zu erben.

## Die Edge verändert das Argument

[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar und Iqbal]] beschreiben eine Alternative im Schulmaßstab: einen refurbished Desktop oder Mini-PC mit einer Einstiegs-GPU, der ein Modell zwischen 1B und 13B Parametern hostet, zu Richtwerten von mehreren hundert bis mehreren tausend australischen Dollar pro Server. Ihr wirtschaftliches Argument ist eine Schule mit 400 Schülerinnen und Schülern, die die kumulierten Cloud-API-Kosten über Klassenzimmer hinweg nicht tragen kann. Ihre Ehrlichkeit liegt im Eingeständnis, dass kein umfassender Lebenszyklus-Kostenvergleich existiert, die Ersparnis also eine Hypothese und kein Befund ist.

Im Kursmaßstab zeigt [[on-premises-rag-tutoring-business-education-2026|CourseChat]] dieselbe Logik unter einer anderen Bedingung: ein 8B-Produktionsmodell, das gegenüber größeren Kandidaten beibehalten wurde, die eine Latenzschwelle für den Klasseneinsatz verfehlten. [[guadalupe-academic-chatbot-local-llm-2026|Guadalupe, Topón und Iza]] erreichten ein Median-Ziel von 5 Sekunden mit 3,57 s, verfehlten es aber beim p95 mit 6,47 s und führten rund 96 % der End-to-End-Zeit auf die Generierung zurück.

Lokaler Betrieb verändert die Datenschutzfrage von vertraglich zu physisch, und er beantwortet sie nicht. Ein lokales Deployment mit vollständigem Prompt-Logging ist weiterhin ein Aufbewahrungssystem; was sich ändert, ist, wer zur Herausgabe gezwungen werden kann.

## Das Backoffice ist auch Infrastruktur

[[pardos-borchers-institutional-workflows-oecd-2026|Pardos und Borchers]] argumentieren, dass der folgenreiche Ort von [[ai-education|KI in der Bildung]] nicht das Chatfenster ist, sondern das Studierendensekretariat, die Studienberatung und der Curriculumsausschuss. Ihre Beispiele sind Embeddings statt Gespräche: Kursvektoren, die aus Einschreibungshistorien gelernt werden, maschinelle Übersetzung zwischen den Vektorräumen zweier Institutionen und Tagging-Pipelines, die offene Ressourcen auf einen Standard abbilden.

Die Zahlen sind konkret. Embedding-basierte Transferprognose validierte 65 bestehende Anrechnungen und wird nun mit 59 Institutionen und vier Systemen der [[higher-ed|Hochschulbildung]] pilotiert. Credit Hours erklärten nur 6 % der Varianz der wahrgenommenen Arbeitsbelastung, während LMS-Aktivitätsmerkmale 36 % erklärten. Kollaboratives KI-Tagging senkte die Zeit um rund 50 %, verringerte aber die Genauigkeit um 35 %.

Der Adoptionsbefund ist derjenige, den Infrastrukturplaner behalten sollten. In einem 2×2-Experiment erhöhte das Verbergen von Ausreißer-Empfehlungen mit niedriger Konfidenz die Akzeptanz und Produktivität der Administratoren, während die Aufforderung an Nutzende, Empfehlungen zu markieren, die Akzeptanz senkte, sofern keine Ausreißer angezeigt wurden. Ein genauerer Recommender kann allein daran scheitern, wie seine Ausgabe dargestellt wird — das macht Interface-Design zu einem Teil der Infrastruktur und nicht zu einem Feinschliff am Ende.

## Assessment als Problem der Datenleitungen

[[mcnamara-aimcai-continuous-assessment-infrastructure-2026|AIM-CAI]] argumentiert, dass die Evidenz, die zur Interpretation des Lernens nötig ist, bereits existiert, aber über Systeme fragmentiert ist, die einander nicht lesen können. Sein Rahmenwerk hat sechs funktionale Schichten, drei inferenzielle Grenzen, die begrenzen, was eine Momentaufnahme tragen kann, und sieben Governance-Anforderungen, darunter Auditierbarkeit, Unsicherheitsschätzung und menschliche Übersteuerung. Es ist ein Rahmenwerk und kein Deployment, und die Autoren sagen das auch.

[[lata-ferpa-compliant-local-llm-autograder|LaTA]] liefert den engeren Fall: ein lokales Reasoning-Modell, das die [[privacy|FERPA]]-Frage, Studierendenarbeiten an einen Anbieter zu senden, beseitigt, statt sie zu verwalten. Zusammen legen sie nahe, dass Assessment-Infrastruktur kein Feature einer Lernplattform ist, sondern ein eigenes Problem mit eigenem Datenmodell und eigenen Fehlermodi.

## Kosten, Latenz und das Sichtbarkeitsproblem

Das wiederkehrende Thema über die Implementierungen hinweg ist, dass Kosten und Latenz erst sichtbar werden, wenn jemand sie messtechnisch erfasst. Purdues Hardware-Zahl von \$100.000 ist eine Kapitalzahl mit unausgesprochenen Personalkosten. SPINs Gateway-Benchmark grenzt den Proxy-Overhead ein und sagt nichts über End-to-End-Latenz. Die Energiebilanz von [[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] berichtet etwa 9,4 kW Normalverbrauch gegenüber einem beobachteten Spitzenwert von 14,1 kW und einem theoretischen Maximum von 22,1 kW, und 872.997.430 Tokens über ein 17-Tage-Fenster bedeuten \$82.843 bis \$251.806 jährliche Ersparnis gegenüber kommerziellen Äquivalenten zu den Tarifen des Papers.

Gehostete Plattformen auf Schulbezirksebene berichten dieselbe Art von Rechnung: PSD401 AI Studio beansprucht 67 bis 90 % niedrigere Kosten pro Token als kommerzielle Alternativen. Keine dieser Zahlen ist ohne denselben Nenner über Institutionen hinweg vergleichbar. Vergleichbar ist die Praxis, überhaupt zu messen.

## Souveränität hat eine Gerechtigkeitsdimension

Ein Gateway kann an ein lokales Modell weiterleiten, das die Sprache der Institution schlecht beherrscht, und das daraus entstehende Schweigen ist nicht neutral. Hier treffen sich das Infrastrukturargument und das Argument der [[digital-divide|digitalen Kluft]]: Institutionen mit Clustern und Personal gewinnen Fähigkeit, und die ohne nehmen hin, was der Anbieter zu dem Preis anbietet, den der Anbieter festlegt. Kostenlose Tarife sind wirklich nützlich und wirklich fragil, und das macht ihre Behandlung als Dauerstrategie zu einer Entscheidung darüber, welche Institutionen bedient werden.

## Implikationen für die Praxis

Leitende Administratoren können damit beginnen, die Form zu benennen, in der sich jede Einheit tatsächlich befindet. Die sechs Formen unterscheiden sich darin, wer die Daten hält und wer Fehlerfolgen trägt, und die meisten Institutionen befinden sich gleichzeitig in mehreren: ein Tenant für Mitarbeitende, ein kostenloses Werkzeug in einem Fachbereich, eine gehostete Plattform in einem anderen. Ein einseitiges Inventar dessen, was im Einsatz ist, wohin die Daten gehen und wer das Modell ändern kann, ist nützlicher als ein Strategiedokument, das eine davon beschreibt.

IT- und Bibliotheksleitungen können das Gateway zu dem Ort machen, an dem Richtlinien erzwungen werden. Fontys, MindRouter und SPIN laufen auf denselben Vertrag zu: eine API-Oberfläche, Quotas pro Nutzer, Identitätsintegration, regionales Routing und eine Model Card, die angezeigt wird, bevor die Anfrage hinausgeht. Eine Regel, die in einem PDF lebt, und eine Regel, die in einem Router lebt, sind verschiedene Objekte, und nur die zweite hält, wenn ein neues Modell auftaucht.

Mitarbeitende in Finanzen und Beschaffung können Kosten messtechnisch erfassen, bevor sie einen Lieferanten wählen. Pro-Platz-Lizenzierung, gehostete Plattformen und verbrauchsgemessene Gateways belohnen unterschiedliche Nutzungsformen, und der einzige Weg zu wissen, was billiger ist, besteht darin, Tokens, aktive Nutzer und Spitzenlast zu messen. Purdues Dienst erreichte etwa 1000 Nutzer mit rund \$100.000 an Hardware; ein gehosteter Pilot berichtet etwa \$3 pro Nutzer und Monat. Diese Zahlen sind ohne denselben Nenner nicht vergleichbar.

Zentren für Lehre und Lernen können Piloten auf kostenlosen Tarifen als Piloten behandeln. Kostenlose Werkzeuge sind der Grund, warum viele Lehrende überhaupt etwas ausprobieren können, und sie kommen ohne Audit-Trail, ohne Quota und mit Bedingungen, die sich ändern können. Ein erfolgreicher Pilot sollte in eine Form überführt werden, die die Institution steuern kann.

Schulleitungen ohne Rechenzentrum können dennoch ein lokales Modell betreiben. Ein refurbished Desktop mit einer Einstiegs-GPU hostet ein kleines Modell für ein Gebäude, und der Datenschutzgewinn ist physisch statt vertraglich. Es bleibt ein Aufbewahrungssystem, also bleiben Logging und Zugriff Designentscheidungen.

Fachbereichsleitungen können über das Chatfenster hinausblicken. Anrechnung, Workload-Analytics, Tagging und Assessment-Aufzeichnungen sind die Stellen, an denen Institutionen bereits Entscheidungen an ein Modell delegiert haben, und diese Systeme brauchen dieselbe Governance wie ein Chatbot — in der Regel bei geringerer Kontrolle.

## Verbreitete Fehlvorstellungen

**„On-Premises ist billiger.“** Die Lizenzgebühr verschwindet, und Hardware, Strom, Kühlung und Personal erscheinen. Purdues Dienst kostete etwa \$100.000 an Hardware, bevor jemand für den Betrieb bezahlt wurde, und das Personal ist der Teil, der nicht nach unten skaliert.

**„Ein Gateway ist nur ein Proxy.“** Ein Proxy leitet weiter. Ein Gateway entscheidet, welches Modell, welche Region, welches Budget, welcher Nutzer, was geloggt wird und was dem Nutzer gesagt wird, bevor er auf Senden drückt.

**„Lokal bedeutet privat.“** Lokalität ändert, wer die Daten per Vorladung anfordern kann, nicht ob sie aufbewahrt werden. Audit-Logging, Prompt-Speicherung und Administratorzugriff sind Designentscheidungen, und ein lokales Deployment mit vollständigem Logging ist weiterhin eine Überwachungsfläche.

**„GPUs kaufen ist die Strategie.“** Kapazität ohne Scheduling, Quotas und Support wird zu einer Warteschlange. Die erfolgreichen Fälle beschreiben Governance und Betrieb mindestens so sehr wie Hardware.

**„Das KI-Problem ist der Chatbot.“** Der meiste institutionelle Wert, der in dieser Literatur beschrieben wird, liegt in Anrechnung, Workload-Analytics, Tagging und Assessment-Aufzeichnungen — dort, wo nie ein Studierender ein Chatfenster öffnet.

## Verbundene Konzepte

- [[open-source]]
- [[rag]]
- [[privacy]]
- [[governance]]
- [[edtech-platform]]
- [[llm]]
- [[digital-divide]]
- [[assessment]]
- [[shadow-ai]]

## Verbundene Artikel

- [[huijts-suilen-institutional-ai-sovereignty-gateway-2025]] — Fontys ICT: ein gesteuertes Gateway für 300 Nutzer mit Model Cards und einer monatlichen Obergrenze von \$500
- [[rodenbeck-purdue-on-prem-genai-inference-2025]] — Purdue: zwei campusweite Inferenzdienste, 1000+ Nutzer, 10+ Modelle, Ollama statt vLLM
- [[rahaman-soa-on-prem-ai-gateway-2026]] — SPIN: Steuerung und Serving an der API-Grenze getrennt, mit einer lastgetesteten Proxy-Schicht
- [[sheneman-mindrouter-institutional-ai-sovereignty-2026]] — MindRouter: Fair-Share-Scheduling, Quotas und Energiebilanzierung in einem Open-Source-Gateway
- [[guadalupe-academic-chatbot-local-llm-2026]] — ESPOL: hybrides Retrieval mit einem lokalen Modell, das das Median-Latenzziel erreicht und p95 verfehlt
- [[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026]] — ein SLM-Argument im Schulmaßstab aus der Grundschulbildung
- [[pardos-borchers-institutional-workflows-oecd-2026]] — das OECD-Kapitel zu Anrechnung, Workload-Analytics und Assessment-Produktion
- [[mcnamara-aimcai-continuous-assessment-infrastructure-2026]] — AIM-CAI: sechs Schichten zur Verbindung von Lernevidenz
- [[on-premises-rag-tutoring-business-education-2026]] — CourseChat: ein 8B-Modell, das gegenüber größeren Kandidaten beibehalten wurde, die eine Latenzschwelle verfehlten
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: ein lokales Reasoning-Modell, das die FERPA-Frage beseitigt, statt sie zu verwalten
- [[making-ai-work-for-students-ofs-2026]] — OfS und Advance HE (2026): 244 Mitarbeitende und 91 Studierende an 127 Institutionen zu Erkennung, Assessment-Design, KI-Kompetenz und Strategie
