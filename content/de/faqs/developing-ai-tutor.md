---
title: "Was sind Best Practices für die Entwicklung eines wirksamen KI-Tutors?"
created: "2026-08-29T20:36:43-04:00"
updated: "2026-10-10T09:50:26-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
translation_of: faqs/developing-ai-tutor
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

Ein wirksamer KI-Tutor sollte als **Lernsystem designed werden, nicht als Antwortgenerierungs-[[conversational-ai|Chatbot]]**. Das stärkste Thema über die Wissensbasis hinweg ist, dass [[pedagogy|pädagogische]] Struktur – Diagnose, Scaffolding, Feedback, Handlungsfähigkeit der lernenden Person und Evaluation – mindestens ebenso viel zählt wie das zugrundeliegende Modell. Die zwei ausgearbeiteten Beispiele unten (ein Analysis-Tutor und ein Schreib-Coach) zeigen, wie dieselbe Kernarchitektur von dem geformt werden muss, was die Disziplin von der lernenden Person verlangt.

## 1. Beginnen Sie mit expliziten Lernzielen und definieren Sie die Aufgabe der lernenden Person

Spezifizieren Sie, bevor Sie ein Modell wählen:

- Was Lernende anschließend wissen oder tun können sollten.
- Welche kognitive Arbeit sie selbst ausführen müssen.
- Wobei der Tutor helfen darf.

Ein Tutor, der auf „das Problem fertigstellen" optimiert ist, kann leicht einen Tutor untergraben, der auf „lernen, das Problem zu lösen" optimiert ist. Das [[intelligent-tutoring]]-Konzept betont, dass Wirksamkeit von pädagogischem Design abhängt statt von Modellfähigkeit allein.

## 2. Diagnostizieren Sie, bevor Sie verschreiben

Pflegen Sie ein Lernendenmodell auf Basis von Belegen wie demonstriertem Wissen, [[misconceptions]], jüngsten Versuchen, Hilfe-Such-Verhalten und, wo angemessen, Selbstsicherheit. Passen Sie Schwierigkeit und Unterstützung aus diesen Belegen an, statt einfach auf den jüngsten Prompt der lernenden Person zu reagieren. Seien Sie vorsichtig damit, ein [[llm]] allein diagnostizieren zu lassen: [[benchmark|Benchmarking]] fand, dass LLM-Tutoren klar richtige Argumentation erkennen konnten, während sie manchmal gültige Alternativen verwarfen oder falsche Argumentation akzeptierten. Für folgenreiche Domänen ist eine brauchbare Architektur **strukturierte Diagnose + flexibler LLM-Dialog**. Siehe [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]].

## 3. Nutzen Sie eine Hinweisleiter, statt sofortig die Lösung zu geben

Eine brauchbare Tutoringssequenz ist: um einen Versuch bitten, die Argumentation der lernenden Person untersuchen, einen kleinen Hinweis geben, einen stärkeren konzeptuellen Hinweis geben, einen Teilschritt demonstrieren, eine ausgearbeitete Lösung nur liefern, wenn gerechtfertigt, dann die lernende Person bitten, die Idee eigenständig zu erklären oder anzuwenden. Unterstützung sollte **ausblenden, wenn Kompetenz zunimmt**. Das ist zentral für das [[scaffolding]]-Konzept. Ein Schlüsselexperiment fand, dass eine ungehütete GPT-Schnittstelle begleitete Mathematikleistung erhöhte, aber spätere unbegleitete Prüfungsleistung reduzierte, während ein Hinweise gebender Tutor jene Lernstrafe weitgehend beseitigte – siehe [[generative-ai-guardrails-harm-learning|Generative KI ohne Leitplanken kann Lernen schädigen]].

Ein größeres randomisiertes Feldexperiment mit mehr als 6.000 Schülerinnen und Schülern der Mittelstufe auf einer meisterschaftsbasierten Übungsplattform fand dieselbe Signatur im feineren Detail: Studierende, die KI-Unterstützung zugeteilt bekamen, kamen langsamer voran und versuchten weniger Fragen, antworteten aber genauer und – der klarste Mechanismus – verbesserten ihre Korrektheit beim nächsten Versuch nach Fehlern und brauchten weniger Versuche, um zu einer richtigen Antwort zurückzukehren. Das ist eine **produktive Verlangsamung**, nicht Antwortgreifen, und es ist das Verhalten, das eine Hinweisleiter erzeugen soll. Dieselbe Studie liefert eine Vorsicht zu Proxies: drei richtige Antworten in Folge zu verlangen erhöhte plattformdefinierte Meisterschaft stark, ohne feststellbare Gewinne bei einem verzögerten Test eine Woche später zu erzeugen, und der stärkste Verzögertest-Beleg erschien nur dort, wo die KI im Meisterschafts-Workflow saß (Koeffizient 0.085) statt als eigenständiger Zugang. Siehe [[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]].

## 4. Machen Sie Feedback spezifisch, unmittelbar, umsetzbar und mit Argumentation verbunden

Vermeiden Sie Feedback, das bloß „Richtig", „Falsch" oder „Gut gemacht" sagt. Der Tutor sollte stattdessen den involvierten Argumentationsschritt identifizieren, erklären, was zu überdenken ist, der lernenden Person etwas Konkretes geben, das als Nächstes zu tun ist, und sie bitten, vorher vorherzusagen oder zu erklären, wo angemessen. Die Wissensbasis behandelt [[feedback]] als vollständige **Bereitstellungs-Umsetzungs-Schleife**: Feedback unterstützt Lernen nur, wenn Studierende es verstehen und danach handeln.

## 5. Begründen Sie faktische Inhalte, statt dem Speicher des LLM zu vertrauen

Nutzen Sie Retrieval-Augmented Generation gegen vertrauenswürdige Materialien wie von der Lehrkraft genehmigte Lehrbücher, Kursnotizen, ausgearbeitete Beispiele, Richtlinien und [[curriculum-design|curriculare]] Ressourcen, und legen Sie Zitationen oder Provenienz offen, wo brauchbar. Für Domänen mit formal prüfbaren Antworten fügen Sie deterministische Werkzeuge hinzu wie Taschenrechner, symbolische Mathematiksysteme, Code-Ausführung, Wissensgraphen, regelbasierte Validatoren und [[discipline-specific-aied|domänenspezifische]] Löser. RAG kann das [[hallucination-risk|Halluzinationsrisiko]] reduzieren, beseitigt es aber nicht – siehe [[rag|Retrieval-Augmented Generation]].

## 6. Designen Sie für Metakognition und Handlungsfähigkeit der lernenden Person

Verlangen Sie regelmäßig von der lernenden Person, zu erzeugen, zu wählen, zu begründen, zu bewerten oder zu reflektieren. Ein brauchbares Designprinzip ist **lernende Person zuerst → KI zweitens → lernende Person erneut**. Das langfristige Ziel ist, dass Lernende die Fragestrategien und [[problem-solving]]-Strategien des Tutors verinnerlichen, statt vom Tutor abhängig zu werden. Siehe [[agency|Handlungsfähigkeit der lernenden Person]] und [[scaffolding]].

## 7. Behandeln Sie pädagogische Sicherheit als verschieden von gewöhnlicher Chatbot-Sicherheit

Sicherheitstestung für einen Bildungstutor sollte mehr umfassen als Toxizität und Jailbreak-Resistenz. Testen Sie auf Antwortenlecks, Verstärkung von Fehlvorstellungen, übermäßige Zustimmung oder [[ai-sycophancy|Sycophancy]], unangemessene Schwierigkeit, [[cognitive-offloading|kognitive Auslagerung]], voreingenommene Behandlung, Verlust der Handlungsfähigkeit der lernenden Person, Instruktionsdrift und Überehrwissen in falschen Erklärungen. Ein Tutor sollte **freundlich, aber richtig** sein, auch wenn die lernende Person auf einer Fehlvorstellung beharrt, und Testung sollte erweiterte Gespräche umfassen, weil pädagogische Fehler über mehrere Interaktionen akkumulieren können. Siehe [[pedagogical-safety]] und [[hazra-safetutors-pedagogical-safety-2026|Sicherheit von KI-Tutoren und pädagogische Schäden]].

## 8. Bauen Sie Privatsphäre, Barrierefreiheit und Gerechtigkeit in die Architektur ein

Erheben Sie nur Lernendendaten, die pädagogisch nötig sind. Wo anhaltender Speicher oder [[student-modeling|Lernendenmodellierung]] genutzt wird, machen Sie ihren Zweck transparent, geben Sie Lernenden angemessene Kontrolle, schützen Sie sensible Informationen, definieren Sie Datenhaltungsrichtlinien, und bieten Sie Lehrenden oder [[human-in-the-loop-ai|menschliche Aufsicht]] für folgenreiche Situationen. Prüfen Sie Tutorverhalten über Sprachhintergründe, Fähigkeitsniveaus, kulturelle Kontexte, [[accessibility]]-Bedarfe und verschiedene Niveaus von [[prior-knowledge|Vorwissen]] und KI-Erfahrung hinweg. Machen Sie ausgefeiltes [[prompt-engineering|Prompting]] nicht zur Voraussetzung für guten Unterricht – der Tutor selbst sollte Lernenden helfen, produktive Fragen zu formulieren.

## 9. Messen Sie Lernen, nicht nur Chatbotqualität

Maße wie Antwortgenauigkeit, Gesprächslänge, Präferenz der lernenden Person, Zufriedenheit, Aufgabenbewältigung und [[student-engagement|Engagement]] genügen für sich nicht. Evaluieren Sie stattdessen unbegleitete Leistung, verzögertes Behalten, Transfer auf neue Probleme, Korrektur von Fehlvorstellungen, Unabhängigkeit der lernenden Person, Feedbackumsetzung und [[differential-effects-across-learner-groups|unterschiedliche Effekte über Lernendengruppen hinweg]]. Die kritische Frage ist, ob Lernende erfolgreich bestehen können, nachdem der Tutor entfernt wurde. Siehe [[ai-ed-evaluation]] und [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]].

Zwei jüngere Studien schärfen jene Regel gegen [[self-report-measures|Selbstauskunft]] und kurze Horizonte. Eine Pilotierung mit 38 Novizen-Studierenden in Programmierung fand eine starke Assoziation zwischen [[generative-ai|generativer KI]]-Nutzung und *wahrgenommenem* Lernen (rs=0.802, p<0.001), während die Indikatoren eigenständigen Fortschritts ohne Instruktorenunterstützung am niedrigsten punkteten – die Lücke, vor der die Autoren warnen, erzeuge eine Illusion von Kompetenz und epistemische Schuld, und genau die Lücke, die Zufriedenheitsmaße belohnen. Siehe [[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]].

Fundamentaler halten die meisten Evaluationen im Moment der endenden Unterstützung. [[cognitive-washout-ai-skill-decay-2026|Cognitive-Washout-Dynamiken]] benennt das ungemessene Intervall nach dem Entzug und formalisiert vier mögliche Ergebnisse – elastischer Rückprall, partielles Plateau, latentes Scaffold und Übererholung –, mit einem Washout-Kurvenmodell, dessen Parameter Erholungszeitkonstante, Erholungsvollständigkeit und einen Hysterese-Index einschließen, der Wiederlernaufwand gegen Originalaufwand vergleicht. Weil Reversibilität die Schwere bestimmt, argumentiert das Framework, dass geplante, unbegleitete Übung gegen die Erholungskurve dosiert werden sollte, statt moralisch darum gestritten zu werden. Ein Tutor-Evaluationsplan sollte deshalb eine Entzugsphase einschließen, nicht nur einen unmittelbaren Posttest. Siehe [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|die randomisierten Belege, dass kurze Unterstützung spätere unbegleitete Leistung senkt]].

## 10. Halten Sie Lehrkräfte oder Domänenexperten im Qualitätssicherungskreislauf

Lassen Sie vor dem Deployment Pädagogische Fachkräfte realistische Lernendenprofile, häufige Fehlvorstellungen, Randfälle, adversarielle Prompts, mehrdeutige Antworten und erweiterte Tutoringgespräche testen. Protokollieren Sie pädagogische Fehler und nutzen Sie sie, um Systemprompts, Tutoringrichtlinien, Wissensquellen, [[guardrails]], Lernendenmodell-Regeln und Modellwahl zu revidieren. Menschliche Aufsicht bleibt bedeutsam, weil eine flüssige Tutoring-Antwort weiterhin pädagogisch unangemessen oder falsch sein kann.

[[teacher-intervention-k12-ai-based-instruction-2026|Lees systematischer Review von 29 K-12-Studien]] zeigt, woraus jene Aufsicht tatsächlich besteht, und wo sie bricht. [[teacher-role|Lehrkraft]]-Intervention ist ein sich wiederholender Vierphasenzyklus aus Monitoring, Urteil, Intervention und Orchestrierung; KI-Warnungen, [[visualization|Dashboards]] und automatische Werte „führen nicht automatisch zu pädagogischem Handeln"; und die führende Lehrkraftstrategie ist *pädagogische Übersetzung* – Chatbot-Feedback auswählen, revidieren, ergänzen, zusammenfassen oder löschen, statt es unverändert durchreichen. Zwei Designwarnungen folgen. Mehr KI-Information ist nicht besser: Systeme, die fortlaufend Diagnostik ausstoßen, überlasteten Lehrkräfte und zogen Aufmerksamkeit von ihrer eigenen Beobachtung ab, priorisieren Sie also, was zu handeln wert ist, und machen Sie es interpretierbar, und bieten Sie Empfehlungen in einer Form an, die Lehrkräfte annehmen, verändern, aufschieben oder ablehnen können. Mehr Lehrkraftunterstützung ist auch nicht besser: Intervention zu verzögern, damit Studierende eigenständig arbeiten können, ist selbst Expertise, und strukturelle Bedingungen – Zeit, Daten zu prüfen, Klassengröße, Fähigkeit, die Gruppen physisch zu erreichen, die Hilfe brauchen –, sind Teil der Intervention statt Hintergrundlogistik.

## Eine brauchbare KI-Tutor-Architektur

Eine starke Produktionsarchitektur kann so dargestellt werden: Lernziel → Lernendenbelege/Lernendenmodell → pädagogische Richtlinie → begründeter und validierter Inhalt → konversationelle Generierung → Antwort der lernenden Person → aktualisiertes Lernendenmodell (Schleife zurück). Sicherheit, Privatsphäre, Barrierefreiheit, Lehrkraftaufsicht und Evaluation sollten die gesamte Schleife umgeben.

## Das wichtigste Erfolgskriterium

Das wichtigste Entwicklungsmaß ist nicht „hat die KI das Problem gelöst?", sondern **„kann die lernende Person nach der Interaktion mit der KI ein vergleichbares Problem eigenständig lösen?"** Die Belege für dieses Prinzip sind in strukturerten Lerndomänen wie Mathematik und Programmierung am stärksten; die Generalisierung auf offenere Domänen bleibt unsicherer, was domänenspezifische Evaluation unverzichtbar macht.

Dafür, wo ein Tutor innerhalb einer Kurssequenz sitzt statt allein zu stehen, siehe [[designing-ai-into-learning]]; für die Softwaredesign-Regeln, die ein Tutor erfüllen muss, siehe [[designing-educational-ai-software]]; und dafür, wie die resultierende Intervention zu evaluieren ist, siehe [[evaluating-ai-interventions-methods]].

---

## Beispiel 1: Einen Analysis-KI-Tutor designen

Betrachten Sie einen Analysis-Tutor für das erste Semester im Grundstudium. Sein Ziel sollte sein, zu erhöhen, was Studierende **nach dem Entzug des Tutors eigenständig** lösen und erklären können, nicht, richtig erledigte Probleme zu maximieren. Mathe-Tutoring ist besonders anfällig für Über-Scaffolding, vorzeitige Hinweisnutzung und falsche Diagnose studentischer Argumentation. Siehe [[math-education]], [[zhang-tutormoments-2026|When Help is Unhelpful]], [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] und [[scaffolding]].

**Lernziele.** Der Tutor könnte eine Konzeptkarte pflegen (Funktionen und Graphen → Änderungsraten → Grenzwerte → Ableitung als Grenzwert → Ableitungsregeln → Anwendungen → Stammfunktionen → bestimmte Integrale → Hauptsatz). Für jedes Konzept sollte er verschiedene Arten von Meisterschaft unterscheiden. Beispielsweise sollte „Ableitungs-Meisterschaft" nicht einfach bedeuten, die richtige Ableitung zu erzeugen; sie könnte umfassen, zu erkennen, wann eine Ableitung angemessen ist, sie als unmittelbare Änderungsrate zu deuten, die richtige Regel auszuwählen, das Verfahren auszuführen, zu erklären, warum es angemessen ist, die Plausibilität zu prüfen, und sie auf ein unvertrautes Problem anzuwenden. Das hilft, die [[correct-answer-trap-misconceptions|Falle der richtigen Antwort]] zu verhindern, bei der eine lernende Person die richtige Antwort über fehlerhafte Argumentation erreicht.

**Systemarchitektur.** Ein praktisches sechsschichtiges Design: Kursmaterialien + Lehrkraftrichtlinien → Retrieval/RAG-Schicht → (Problemmaschine → Lernendenmodell) und (symbolischer Prüfer → Diagnosemaschine) → pädagogische Richtlinie → konversationelles LLM → Student → aktualisiertes Lernendenmodell.

1. **Kursbegründungsschicht:** ruft von der Lehrkraft genehmigte Materialien ab (Lehrbuchabschnitte, Vorlesungsnotizen, ausgearbeitete Beispiele, Terminologie, genehmigte Methoden, Notation, Aufgabenregeln), sodass der Tutor niemals Techniken einführt, die mathematisch gültig, aber für den Kurs unangemessen sind.
2. **Mathematische Verifikationsschicht:** nutzt ein Computeralgebrasystem, um algebraische Äquivalenz, Ableitungen, Integrale, Gleichungslösungen, kritische Punkte und numerische Approximationen zu verifizieren – das LLM bewältigt Erklärung und Dialog, während das deterministische System mathematische Prüfung bewältigt.
3. **Lernendenmodell-Schicht:** pflegt Schätzungen pro Konzept (z. B. Grenzwert: in Entwicklung, Potenzregel: gemeistert, Produktregel: in Entwicklung, Kettenregel: nicht demonstriert) plus Fehlvorstellungshypothesen mit Belegen und Konfidenz. Die KI sollte eine Fehlvorstellung als **Hypothese** behandeln, nicht als etablierte Tatsache, weil LLMs Belege halluzinieren oder Fehlvorstellungen falsch erschließen können – ein **erkennen → verifizieren → reagieren**-Prozess ist nötig.

**Eine Tutoringsinteraktion.** Zum Ableiten von $f(x)=(x^2+1)\sin x$ könnte ein konventioneller Chatbot sofortig die Antwort offenbaren. Ein lernorientierter Tutor argumentiert stattdessen intern: der Student hat beide Komponenten abgeleitet, scheint aber ihre Ableitungen multipliziert zu haben (eine mögliche Produktregel-als-$f'g'$-Fehlvorstellung), also stellt er zuerst eine diagnostische Frage („welche Regel nutzt man, wenn zwei Funktionen multipliziert werden?"), lässt dann den Studenten die Produktregel symbolisch aufschreiben, richtet dann $u$ und $v$ ein, und verifiziert den abschließenden Ausdruck erst, nachdem der Student ihn rekonstruiert hat.

**Eine gestufte Hilferichtlinie.** Unterstützung kann über eine Stufenleiter anpassen: eigenständiger Versuch → [[metacognition|metakognitive]] Frage → konzeptueller Hinweis → die relevante Regel identifizieren → einen Teil des Problems einrichten → ausgearbeiteter Zwischenschritt → ausgearbeitete Lösung → Student erklärt → Student löst ein Transferproblem eigenständig. Eine ausgearbeitete Lösung zu sehen demonstriert keine Meisterschaft, also sollte der Tutor nach erheblicher Hilfe die lernende Person ein vergleichbares Problem ohne Hilfe versuchen lassen.

**Unproduktive Hinweisnutzung vermeiden.** Die Schnittstelle sollte unbegrenzte Hinweise nicht zu einer reibungslosen Abkürzung machen, da vorzeitige Hinweisanfragen und oberflächliches Hinweislesen mit niedrigeren [[learning-gains|Lernzuwächsen]] assoziiert sind. Statt `[Hinweis][Hinweis][Hinweis][Antwort zeigen]` könnte das System fragen „was haben Sie versucht?" und „welcher Teil blockiert Sie?" (eine Regel wählen, die Gleichung aufstellen, die Algebra ausführen, das Konzept verstehen, etwas anderes) und gezielte Unterstützung bieten.

**Konzeptuelles Analysis-Verständnis unterstützen.** Der Tutor sollte symbolische Verfahren mit mehreren Repräsentationen verbinden (Formel, Graph, Tabelle, verbale Deutung, physischer Änderungsraten-Kontext), um prozedurale Flüssigkeit von konzeptuellem Verständnis zu unterscheiden.

**Lehrkraft-Dashboard.** Das System sollte aggregierte Belege offenlegen statt intransparente KI-Urteile – z. B. „Produktregel – 62% demonstrierte Meisterschaft; häufige Muster: 18% lassen einen Term weg, 11% multiplizieren Ableitungen" –, wobei individuelle Diagnosen als durch Belege gestützte Hypothesen präsentiert werden.

**Evaluationsplan.** Messen Sie Leistung während der Nutzung des Tutors, Leistung bei vergleichbaren Problemen ohne ihn, verzögertes Behalten, Transfer auf unvertraute Probleme, konzeptuelle [[explainable-ai|Erklärungsqualität]], Korrektur von Fehlvorstellungen, angemessenes gegenüber vorzeitigem [[help-seeking|Hilfe-Suchen]], Antwortenlecks, Diagnose-Falsch-Positiv/Negativ-Raten und [[differential-effects-across-learner-groups|unterschiedliche Ergebnisse]]. Der zentrale Vergleich ist Leistung **mit** dem Tutor gegenüber Leistung **ohne** ihn anschließend – ein Student, der von 60% auf 95% steigt, während unterstützt, aber eigenständig bei 60% bleibt, hat keine wirksame Tutoring erhalten.

---

## Beispiel 2: Einen KI-Schreib-Coach designen

Ein KI-Schreib-Coach erfordert ein anderes Design, weil Schreiben keine objektiv richtige Antwort hat. Das Ziel ist, der lernenden Person zu helfen, besser darin zu werden, ihr eigenes Schreiben zu planen, zu entwerfen, zu bewerten und zu überarbeiten. Die Wissensbasis rahmt Schreiben als **kognitiven, sozialen und rhetorischen Prozess**, was bedeutet, dass ein KI-Schreibsystem Lernen unterstützen, aber auch genau das Denken beseitigen kann, das die Aufgabe zu entwickeln beabsichtigt. Siehe [[writing-education]], [[ai-writing-support-stage-ownership-2026|From Planning to Revision]], [[coach-not-crutch-ai-writing|Coach not Crutch]] und [[feedback]].

**Lernziele.** Das Lernendenmodell des Coaches könnte Argumentation (Spezifität der These, Abstimmung von Behauptung und Beleg, Gegenargument), Organisation (Absatzfokus, logische Progression, Übergänge), Belege (Relevanz der Quellen, Integration von Belegen, Deutung), Überarbeitung (globale und satzebene Überarbeitung, Feedbackbewertung) und Stil (Satzklarheit, Grammatik, Autorenstimme) verfolgen – Schreib**fähigkeiten** verfolgen, nicht nur eine Aufsatzzahl.

**Begründen Sie den Coach in der Aufgabe.** Rufen Sie die Aufgabenanweisungen, die Lehrkraftrubrik, Kurslektüren, Zitationsanforderungen, Genre-Konventionen, Lehrkraftbeispiele und KI-Nutzungsrichtlinie ab, damit Feedback auf die tatsächliche Aufgabe Bezug nehmen kann („die Rubrik Ihrer Lehrkraft verlangt, dass Sie jede Hauptbehauptung mit Belegen aus mindestens zwei Kurslektüren verbinden"), statt generische Erwartungen zu erfinden.

**Behandeln Sie Schreibphasen unterschiedlich.** KI-Beteiligung in verschiedenen Phasen beeinflusst wahrgenommenes Eigentum unterschiedlich – Planungsunterstützung reduziert Eigentum weniger als Entwurfsunterstützung, und KI-generiertes Entwerfen erzeugt die größte Eigentumsreduktion. Also kann ein Coach verschiedene Erlaubnisse pro Phase geben: bei der Planung kann er Fragen stellen, Positionen vergleichen, Annahmen hinterfragen und Gliederungen kritisieren, aber das ganze Argument zu erzeugen vermeiden; beim Entwerfen erzeugt die lernende Person zuerst Prosa (der Coach hilft zu entwickeln, nicht zu übernehmen); bei der Überarbeitung kann der Coach unklare Behauptungen identifizieren, fehlende Belege benennen, prüfen, ob Belege eine Behauptung stützen, Organisationsprobleme entdecken und einen Entwurf gegen die Rubrik vergleichen – **diagnostizieren vor dem Umschreiben**; beim Editieren (nach der Überarbeitung) kann er Grammatik, Interpunktion, Prägnanz und Zitationsformatierung unterstützen.

**Beispielinteraktion.** Bei einem Aufsatz über die Verpflichtung zu [[online-teaching-and-learning|Onlinekursen]] könnte ein generisches System den Absatz des Studenten in polierte Prosa umschreiben und so die intellektuelle Arbeit tun. Ein Schreib-Coach sagt stattdessen, was funktioniert, benennt das Hauptproblem (der Absatz gibt Gründe, erklärt aber nicht, warum sie ein universitätsweites Mandat rechtfertigen), stellt eine Überarbeitungsfrage, und bittet den Studenten, einen Satz in eigenen Worten zu vollenden – und lässt so den Argumentationsaufbau bei der lernenden Person.

**Feedback sollte priorisiert sein.** Jede Feedbackrunde könnte eine zu erhaltende Stärke, ein wirkungsstarkes Problem, eine Frage, die Urteil der schreibenden Person erfordert, und ein konkretes Überarbeitungsziel enthalten –, statt die lernende Person mit Dutzenden Kommentaren zu überwältigen.

**Lassen Sie den Studenten [[ai-feedback-quality|KI-Feedback]] bewerten.** [[feedback-literacy|Feedbackkompetenz]] ist selbst ein Lernziel; der Coach sollte regelmäßig fragen, ob die lernende Person einem Vorschlag zustimmt und warum, und ihr erlauben, KI-Feedback abzulehnen – [[evaluative-judgment|Bewertungsurteil]] entwickeln, nicht Gehorsam.

**Erhalten Sie die Autorenstimme.** Der Coach sollte Fehler, Klarheitsprobleme, rhetorische Entscheidungen und Stilpräferenzen unterscheiden, und die beiden letzten nicht automatisch „korrigieren" – sonst riskiert er, Schreiben auf den Stil zu homogenisieren, den das Modell bevorzugt, besonders bei [[multilingual-learning|mehrsprachigen]] Schreibenden und nicht-standardmäßigen rhetorischen Stilen.

**Ein Überarbeitungshistorie-Lernendenmodell.** Statt nur abschließende Aufsätze zu speichern, kann das System aus den Überarbeitungen des Studenten lernen (z. B. ein wiederholtes „Beleg eingeführt, aber nicht gedeutet"-Muster, das sich über Aufsätze verbessert), und auf Basis von Lernbelegen anpassen.

**Lehrkraftbeteiligung.** Die Lehrkraft kontrolliert die Rubrik, die Aufgabenziele, erlaubte Formen von KI-Unterstützung, Quellensammlung, Zitationserwartungen, ob generatives Entwerfen erlaubt ist, und wann menschliche Prüfung erforderlich ist. Ein Lehrkraft-Dashboard könnte Muster auf Klassenebene zeigen (z. B. 41% brauchen Unterstützung bei der Verbindung von Behauptung und Beleg) als [[formative-assessment]]-Signal.

**Den Schreib-Coach evaluieren.** Messen Sie Qualität KI-unterstützten und später unbegleiteten Schreibens, Fähigkeit, Schwächen in unvertrautem Schreiben zu identifizieren, Überarbeitungsqualität, Feedbackumsetzung, Fähigkeit, Überarbeitungen zu erklären, Eigentum des Studenten, Abhängigkeit von KI-Prosa, Erhaltung der Stimme, Bias über Dialekte/mehrsprachige Schreibende/Gruppen, Abstimmung mit Lehrkrafturteil, und verzögerten Transfer. Ein aufschlussreiches Experiment vergleicht eine Gruppe, die eigenständig schreibt, eine Gruppe, in der KI Text erzeugt/überarbeitet, und eine Coach-Gruppe –, die dann alle einen neuen Aufsatz ohne KI schreiben: wenn die KI-generierte Gruppe beim Üben am besten, aber ohne KI schlecht abschneidet, hat das System Leistung statt Lernen verbessert.

---

## Die zwei Designs vergleichen

| Designfrage | Analysis-Tutor | Schreib-Coach |
|---|---|---|
| Primäres Lernobjekt | Mathematische Konzepte und Problemlösen | Argumentation und Schreibprozess |
| Verifikation | Oft objektiv prüfbar | Erfordert meist kontextuelles Urteil |
| Deterministische Werkzeuge | Symbolische Mathematikmaschine / Taschenrechner | Grammatik, Zitation, Rubrikprüfungen |
| Hauptrolle der KI | Argumentation diagnostizieren und scaffolden | Überarbeitung diagnostizieren und scaffolden |
| Großes Risiko | Die Lösung verraten | Den Text für die lernende Person schreiben |
| Wichtige Handlung der lernenden Person | Lösen und erklären | Entwerfen, bewerten und überarbeiten |
| Lernendenmodell | Konzepte, Verfahren, Fehlvorstellungen | Argument, Belege, Organisation, Überarbeitung |
| Zentrale Leitplanke | Versuch vor Lösung | Prosa des Studenten vor KI-Umschreiben |
| Transfertest | Neue Analysis-Probleme ohne KI | Neue Schreibaufgabe ohne KI |
| Erfolgskriterium | Eigenständiges mathematisches Argumentieren | Eigenständiges Schreiben und Bewertungsurteil |

Die zwei Systeme nutzen viele derselben KI-[[ai-technologies|Technologien]], verkörpern aber **verschiedene pädagogische Richtlinien, weil die Disziplinen verschiedene Arten des Denkens erfordern**. Das gemeinsame Prinzip: **identifizieren Sie die kognitive Aktivität, die Lernen erzeugt, und designen Sie die KI so, dass sie jene Aktivität unterstützt, ohne sie der lernenden Person wegzunehmen** – mathematische Argumentation für Analysis zu erhalten, und Autorschaft, rhetorische Entscheidungsfindung, Evaluation und Überarbeitung für Schreiben. Jenes Prinzip ist fundamentaler als jedes bestimmte Modell, jeder Prompt, jedes Agentenframework oder jede Nutzungsoberfläche.
