---
title: "Lernende"
created: "2026-09-18T03:20:00-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
translation_of: concepts/learners
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

> **Synthese:** Lernende sind das primäre Publikum von [[ai-education|KI in der Bildung]] — die Lernenden in [[k-12]], [[higher-ed]] und [[adult-learning|Erwachsenenbildung]], deren Arbeit, Verständnis und Selbstverständnis KI inzwischen prägt. Diese Seite ist der Schirm für die lernendenseitige Abdeckung der Wissensbasis: was Lernende erleben ([[student-experience|das Erleben der Studierenden]]), wer sie werden ([[learner-identity|Identität der Lernenden]]), was sie noch wählen ([[agency|Handlungsfähigkeit]]), wie sie tatsächlich mit dem Werkzeug interagieren ([[student-ai-interaction|Interaktion zwischen Studierenden und KI]]), ob ihre Anstrengung und [[self-regulated-learning|Selbstregulation]] darunter standhalten ([[cognitive-offloading|kognitive Entlastung]]), und wie KI-Systeme sie modellieren ([[student-modeling|Modellierung der Lernenden]]). Der wiederkehrende Befund über diese Forschung hinweg ist, dass dasselbe Werkzeug verschiedenen Lernenden unterschiedlich hilft und schadet — Zuwächse konzentrieren sich dort, wo [[prior-knowledge|Vorwissen]], [[ai-literacy|KI-Kompetenz]] und Verifikationsgewohnheiten bereits vorhanden sind, und Umkehrung konzentriert sich dort, wo KI an die Stelle jenes Denkens tritt, das die Aufgabe aufbauen sollte.

## Fragen zum Nachdenken

- Welche Lernende in Ihrem eigenen Kontext würde ein neues KI-Werkzeug zuerst erreichen, und welche würde es zurücklassen — und warum glauben Sie das?
- Die Forschung berichtet oft, dass Lernende *glauben*, KI habe ihnen geholfen, während ungestützte Maße keinen Zuwachs oder einen Verlust zeigen. Wenn der eigene Bericht einer lernenden Person unzuverlässige Evidenz ist: Was würden Sie als Beleg dafür akzeptieren, dass Lernen stattfand?
- Lernende werden hier sowohl als Menschen beschrieben, die KI nutzen, als auch als Objekte, die KI modelliert ([[student-modeling|Lernendenmodelle]], [[knowledge-tracing|Knowledge Tracing]], [[simulating-students|simulierte Lernende]]). Wo sollte ein Modell einer lernenden Person den Unterricht informieren, und wo sollte es aufhören, vertraut zu werden?
- [[self-regulated-learning|Selbstregulation]] und [[prior-knowledge|Vorwissen]] entscheiden, ob KI-Unterstützung zu Lernen oder Substitution wird. Ist das ein Defizit der lernenden Person, das zu beheben ist, ein Designproblem, das zu lösen ist, oder ein Assessmentproblem, das zu reparieren ist?
- Wenn eine Gruppe von Lernenden mit einem KI-Werkzeug schlecht abschneidet, erfahren die Gestaltenden des Werkzeugs es in der Regel zuletzt. Wie würde in Ihrer Einrichtung eine Routine aussehen, tatsächlich vor und nach der Einführung von Lernenden zu hören?
- [[agency|Handlungsfähigkeit]] und [[learner-identity|Identität]] der Lernenden stehen ebenso auf dem Spiel wie Leistung. Welche davon würden Sie gegen messbare [[learning-gains|Notenzuwächse]] nicht eintauschen — und würde Ihr Assessment-Design diese Weigerung sichtbar machen?

## Einführung

Lernende erscheinen in dieser Wissensbasis in zwei sehr verschiedenen Gestalten, und sie zu vermischen verursacht die meiste Verwirrung im Feld. In der ersten sind Lernende **Menschen, die KI nutzen**: Sie stellen Fragen, akzeptieren oder widerstehen Antworten, verlieren oder behalten den Boden unter den Füßen und berichten Erlebnisse von Unterstützung, Schuld, Angst und Abhängigkeit. In der zweiten sind Lernende **Objekte, die KI-Systeme modellieren**: eine Fähigkeitsschätzung im [[knowledge-tracing|Knowledge Tracing]], ein latenter Zustand in der [[cognitive-diagnosis|kognitiven Diagnose]] oder ein [[simulating-students|simulierter Lernender]], der für eine echte Person einspringt. Die Evidenz über die erste stammt aus Befragungen, Interviews, Log-Analysen und Experimenten; die Evidenz über die zweite stammt aus der Maschinerie der Messung selbst — und ein Modell einer lernenden Person ist eine Behauptung, keine lernende Person.

Diese Seite ist der Einstiegspunkt für beide. Sie versammelt die lernendenseitigen Konzepte, die die Wissensbasis abdeckt, erklärt, wie sie zusammenhängen, und verlinkt die Studien dahinter. [[stakeholders|Akteure]] deckt die andere Seite desselben Felds ab — [[teacher-role|Lehrende]], [[administrator|Administration]], Gestaltende und politisch Verantwortliche —, und die beiden Seiten sind dafür gedacht, zusammen gelesen zu werden.

## Wer als lernende Person zählt

Die Wissensbasis behandelt Lernende über die gesamte Spanne formaler Bildung: Schülerinnen und Schüler in [[k-12]], [[higher-ed|Studierende]], [[vocational-education|berufliche]] und [[professional-training|berufsbegleitend weiterbildende]] Lernende sowie [[adult-learning|erwachsene]] und [[lifelong-learning|lebenslang Lernende]], einschließlich [[special-education|Lernender mit Behinderungen]], [[neurodiversity|neurodivergenter]] Lernender und [[multilingual-learning|mehrsprachiger]] Lernender. Zwei Konventionen sind bedeutsam. Erstens: „Lernende“ und „Studierende“ sind nicht sinnvoll austauschbar: *Studierende* benennt eine institutionelle Rolle, *Lernende* benennt eine Aktivität, und eine Person kann das eine sein ohne das andere (eine Mitarbeiterin in [[professional-training|Arbeitsplatztraining]] ist eine Lernende, aber keine Studierende). Zweitens: Lernende sind keine homogene Gruppe, und die Heterogenität ist genau das, was die Forschung fortlaufend zutage fördert — [[prior-knowledge|Vorwissen]], [[self-regulated-learning|Selbstregulation]], Sprache, Zugang und Behinderungsstatus verändern alle, ob ein KI-Werkzeug hilft.

## Was Lernende erleben

[[student-experience|Das Erleben der Studierenden]] ist eine der am besten erforschten Dimensionen von KI in der Bildung, und ihre zentrale Lektion ist, dass die Effekte gemischt statt gleichförmig sind. [[student-perceptions-ai-study-productivity-2026|Befragungsarbeit zur Lernproduktivität]] findet Lernende, die echte Effizienzgewinne berichten — 92.3% sagten, KI habe ihr Verständnis verbessert —, neben einer Lücke, die die Schlagzeilenzahlen verbergen: nur 38.5% sagten, sie habe ihre gesamte Lernzeit reduziert, und die Hälfte berichtete, manchmal auf KI zu vertrauen, statt unabhängig lernen zu versuchen. [[uneven-impact-generative-ai-student-learning-2026|Analysen von Vertrauensmustern]] gehen weiter: Lernende mit unterschiedlichem Niveau an [[ai-literacy|KI-Kompetenz]] und Bewertungsfähigkeit landen in qualitativ verschiedenen Beziehungen zum Werkzeug, sodass dieselbe Kurspolitik für verschiedene Lernende verschiedene Ergebnisse hervorbringt — Unterstützung für die einen, Substitution für die anderen. [[genai-student-experiences-uk-he-survey-2026|Studierende beschreiben den Sog des geringsten Aufwands]] in ihren eigenen Worten, was die Seiten zu [[academic-integrity|akademischer Integrität]] und [[misconceptions|Missverständnissen]] als Design- und Politikproblem statt als moralisches behandeln.

Affekt läuft parallel zur kognitiven Geschichte: [[anxiety-and-stress|KI-Angst und Stress]] und [[well-being|Wohlbefinden]] dokumentieren Angst, überholt zu werden, des Fehlverhaltens beschuldigt zu werden, und über den Wert des angestrebten Abschlusses. Die mentalen Modelle der Lernenden von KI — was sie glauben, dass sie ist, und was sie glauben, wofür sie da ist — liegen stromaufwärts davon, ob sie sie gut nutzen, weshalb [[misconceptions|Missverständnisse]] und [[framing-ai-use-for-students|die Einordnung der KI-Nutzung für Studierende]] durch die gesamte lernendenseitige Forschung hindurch auftauchen.

Berichte der Lernenden verkomplizieren auch die Integritätsgeschichte, die so viel lernendenseitige Politik rahmt. [[mulisa-students-genai-integrity-perspectives-2026|Interviews mit 27 Studierenden an einer äthiopischen Universität]] finden nahezu universelle GenAI-Nutzung neben einer echt gespaltenen [[ethics|ethischen]] Lesart — die meisten schreiben den Werkzeugen zu, ihre Leistung gehoben zu haben, eine Minderheit nennt Kursarbeitnutzung ein Fehlverhalten, und fast alle berichten ein unebenes Spielfeld, auf dem KI-Nutzende über fleißige unabhängig Arbeitende hinauspunkten, einer beschreibt die Wirkung als Tötung ihres Sinns für Fleiß. Die Studierendenseite von Fehlverhaltensprozeduren ist in der Literatur dünner als die Studierendenseite der Nutzung, doch [[munoz-misconduct-allegation-evidence-2026|Aktenanalyse von 1,162 GenAI-Vorwürfen]] zeigt, was Lernende erwartet, wenn die institutionelle Antwort eintrifmt: die am häufigsten genannte Evidenz ist die am schwächsten bewertete Art, keine minimale Evidenzschwelle bestimmt, ob ein Fall weiterverfolgt wird, und Lernende, deren Fälle auf dünner Evidenz ruhen, werden in Richtung Berufung gedrängt.

## Identität, Handlungsfähigkeit und Autorschaft

Lernendenseitige Forschung handelt nicht nur von Ergebnissen. [[learner-identity|Identität der Lernenden]] fragt, wer eine lernende Person im Verhältnis zu einem Fach und zu KI wird, und die Evidenz läuft in beide Richtungen: gut gestaltete Nutzung kann fachliche Zugehörigkeit stützen, während Auslagern das Gefühl erodieren kann, dass die Arbeit die eigene ist. [[agency|Handlungsfähigkeit]] fragt, was die lernende Person noch kontrolliert. Die Wissensbasis behandelt beides als echt auf dem Spiel stehend, nicht als weiche Anhängsel an Leistung: eine lernende Person, die mit einer KI korrekte Ausgaben produziert und die Schlussfolgerung dahinter nicht mehr wiedererkennt, hat etwas verloren, das die Note nicht festhält. Die Autorschaftsfrage ist die, an der Lernende selbst am meisten ringen: [[mulisa-students-genai-integrity-perspectives-2026|zu GenAI und Integrität befragte Studierende]] reklamierten Originalität, weil kein anderer Urheber existierte — „If it is not my original idea, then whose?“ —, während andere schlossen, die Arbeit stelle sie nicht dar, und eine schloss auf das Erkennen des Werkzeugs als Koautorin, die es nicht sein konnte, da KI keine Person ist.

## Interaktion mit KI: was Lernende tatsächlich tun

Die Seite [[student-ai-interaction|Interaktion zwischen Studierenden und KI]] versammelt, was Lernende von KI verlangen, wie sich ihre Prompts und Dialoge entwickeln, und warum Interaktionsqualität [[learning-gains|Lernleistungen]] besser vorhersagt als Zugang. [[student-llm-interaction-taxonomy-review-2026|Ein schneller Scoping-Review von 46 Kategorisierungen aus 33 Studien]] findet diese Evidenzbasis konzeptuell fragmentiert — Studien unterscheiden sich in Datenquelle, Kategorienschema und Analyseeinheit, sodass „qualitätsvolle Interaktion“ quer über sie noch kein vergleichbares Konstrukt ist, und der Ruf des Reviews ist nach einer konvergenten Taxonomie lernorientierter [[llm|LLM]]-Nutzung statt einer Behauptung, eine existiere bereits. [[student-ai-conversations-cognitive-engagement-2026|Studien zu Chat-Inhalten]] finden, dass Lernende sich auf kennzeichnende Weisen disziplinieren, wobei das Engagement von Sondieren und Prüfen von Behauptungen bis zum Akzeptieren der ersten plausiblen Antwort reicht. [[help-seeking|Hilfesuche]] liefert den älteren Rahmen: um Hilfe zu bitten ist eine Fähigkeit, und den falschen Helfer auf die falsche Weise zu fragen ist ein bekanntes Fehlschlagmuster, das KI nicht beseitigt.

## Anstrengung, Selbstregulation und die Leistungs-Lern-Lücke

Hier ist die lernendenseitige Evidenz am folgenreichsten, weil sie trennt, was Lernende *mit KI können* von dem, was sie *ohne sie können*.

[[cognitive-offloading|Kognitive Entlastung]] versammelt die Übervertrauens-Evidenz; [[genai-performance-vs-learning|Leistung gegenüber Lernen]] stellt den zentralen methodischen Punkt fest, dass assistierte Leistung und ungestützte Fähigkeit getrennt gemessen werden müssen; [[layer-sensitive-cognitive-offloading-writing-2026|ebenensensible Studien des Schreibens]] trennen Auslagern auf Oberflächen-, Struktur-, Ideen- und Schlussebene und finden die höchste gestützte Leistung in der am wenigsten begrenzten Bedingung neben der niedrigsten unabhängigen Leistung acht Wochen später; und [[shaw-nave-cognitive-surrender-2026|Shaw und Naves Konto kognitiver Kapitulation]] benennt jene Disposition, die Delegation zur Gewohnheit statt zur Strategie macht. [[metacognitively-discordant-completion-genai-2026|Metakognitive Dissonanz]] dokumentiert den unbequemen Mittel fall — Lernende, die bemerken, dass sie nicht verstehen, und dennoch einreichen —, und [[verification-quality-reliance-calibration-genai-2026|Verifikationsforschung]] zeigt, dass „Prüfen“ selbst eine abgestufte Fähigkeit ist, keine binäre Gewohnheit. Auf der Designseite versammeln [[desirable-difficulties|produktive Schwierigkeit]] und [[reducing-ai-misuse|Missbrauch reduzieren]] jene Interventionen, die die Anstrengung wiederherstellen, die die Aufgabe erfordern sollte.

## Lernende als Modelle

Die lernendenseitigen Konzepte mit der längsten technischen Linie sind jene, die die lernende Person für das System repräsentieren. [[student-modeling|Modellierung der Lernenden]] deckt die Familie ab: [[knowledge-tracing|Knowledge Tracing]] schätzt Fähigkeitserwerb über die Zeit, [[cognitive-diagnosis|kognitive Diagnose]] lokalisiert spezifische Missverständnisse, und die adaptiven und [[personalized-learning|personalisierten]] Systeme konsumieren jene Schätzungen. [[simulating-students|Simulation von Lernenden]] und [[simulating-students-llm-review-2026|ihr Review]] behandeln [[simulation|Simulation]] als Weg, [[intelligent-tutoring|Tutoren]] zu testen und Daten zu erzeugen, wenn echte Lernende nicht verfügbar sind — als ausdrücklich vorläufigen Einspringer, nicht als Ersatz. Zwei Vorsichtsmaßnahmen laufen durch diese Literatur: Modellschätzungen sind Inferenzen aus Verhalten, die empfindlich darauf reagieren, wie Items und Schnittstellen gebaut sind, und [[demographic-signals-llm-student-assessment-2026|Studien zu demografischen Signalen]] zeigen, dass Assessment-Systeme Stellvertreter für die Identität der lernenden Person aufgreifen können (Sprache, Hintergrund), die nie Teil des Konstrukts sein sollten. [[self-report-measures|Selbstauskunftsmaße]] deckt das Spiegelbildproblems auf der Forschungsseite ab: was Lernende über ihr eigenes Lernen sagen, weicht oft von dem ab, was sie können.

## Gerechtigkeit zwischen Lernenden

Weil Vorteile vorherigem Vorteil folgen, ist lernendenseitige Arbeit von [[equity-in-ai-education|Gerechtigkeit in der KI-Bildung]] untrennbar. [[digital-divide|Digitale Kluft]] und Zugang zu bezahlten Modellstufen prägen, wer die stärksten Werkzeuge erhält; Anliegen der [[bias-mitigation|Fairness]] bestimmen, wie gelernte Modelle verschiedene Gruppen behandeln; [[inclusive-learning|inklusives Lernen]], [[accessibility|Barrierefreiheit]], [[special-education|Sonderpädagogik]] und [[neurodiversity|Neurodiversität]] decken Lernende ab, deren Bedürfnisse das Standarddesign ignoriert. Die praktische Lektion aus dieser Forschung ist, dass „KI hilft Lernenden“ kein Befund ist — der Befund ist immer *welchen* Lernenden, unter *welchen* Bedingungen, mit *welchem* Vorwissen und Zugang. Zwei Gruppen tragen einen kennzeichnenden Anteil jenes Risikos. [[wright-transcription-not-generation-2026|Wright (2026)]] argumentiert, Verbote, die um „[[generative-ai|generative KI]]“ statt um Funktion geschrieben seien, fingen Transkriptionswerkzeuge ein, die das Format von Arbeit umwandeln, die eine lernende Person bereits verfasst hat, sodass die resultierenden Fehlalarme am härtesten auf Lernende mit Behinderungen fallen, die auf Sprache-zu-Text und OCR angewiesen sind, auch dort, wo KI-gestützte OCR eingestellte Assistivsoftware ersetzt hat; [[harerimana-remote-proctoring-nursing-scoping-2026|ein Scoping-Review zu Fernaufsicht bei Prüfungen]] macht den parallelen Punkt zu Assessmentbedingungen und findet, dass Konnektivität, Datenkosten und Geräteausfall darüber entscheiden, wer überhaupt geprüft werden kann — ein Gerechtigkeitsbefund statt ein technischer, und einer, der in Ländern mit niedrigem und mittlerem Einkommen konzentriert ist.

## Wo diese Seite sitzt

Lesen Sie sie mit [[stakeholders|Akteure]] für die Menschen um die lernende Person herum, und mit [[pedagogy|Pädagogik]] und [[learning-design|Lerndesign]] für das, was Lehrende mit diesen Befunden tun. [[assessment|Assessment]] bestimmt, welche Fähigkeiten der lernenden Person überhaupt sichtbar gemacht werden; [[limitations-in-aied-research|Grenzen in der AIED-Forschung]] erklärt, warum so viel der lernendenseitigen Evidenz kurzfristig, selbst berichtet und an Gelegenheitsstichproben erhoben ist; und [[misconceptions|Missverständnisse]] ist der übliche Einstiegspunkt für Lernende selbst.

## Verbundene Konzepte

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — Wie Lernende KI wahrnehmen, mit ihr interagieren und von ihr betroffen sind
- [[learner-identity]] — Wer Lernende im Verhältnis zu einem Fach und zu KI werden
- [[agency]] — Was Lernende noch kontrollieren und wählen
- [[student-ai-interaction]] — Was Lernende tatsächlich von KI verlangen und wie sich Dialoge entwickeln
- [[cognitive-offloading]] — Übervertrauen und die Substitution von KI für Denken
- [[self-regulated-learning]] — Das eigene Lernen planen, überwachen und anpassen
- [[help-seeking]] — Gut um Hilfe bitten, und die Fehlschlagmuster, wenn Lernende es nicht tun
- [[metacognition]] — Wissen, was man versteht und was nicht
- [[motivation]] — Warum Lernende durchhalten oder aufhören
- [[self-efficacy]] — Die Zuversicht der Lernenden in die eigene Fähigkeit
- [[student-engagement]] — Behaviorales, emotionales und kognitives Engagement
- [[prior-knowledge]] — Das Hintergrundwissen, das entscheidet, ob Unterstützung zu Lernen wird
- [[student-modeling]] — Die lernende Person im System repräsentieren
- [[knowledge-tracing]] — Fähigkeitserwerb über die Zeit schätzen
- [[simulating-students]] — LLM-simulierte Lernende als vorläufige Einspringer
- [[ai-literacy]] — Die Fähigkeit, die entscheidet, ob Lernende KI gut nutzen
- [[equity-in-ai-education]] — Wer profitiert und wer außen vor bleibt
- [[well-being]] — Angst, Stress und die affektiven Kosten KI-vermittelten Lernens
- [[misconceptions]] — Die mentalen Modelle, die Lernende an KI mitbringen
- [[stakeholders]] — Die andere Seite desselben Felds: Lehrende, Leitungen, Gestaltende
- [[assessment]] — Welche Fähigkeiten der lernenden Person überhaupt sichtbar gemacht werden

## Verbundene Artikel

- [[uneven-impact-generative-ai-student-learning-2026]] — Reliance patterns and evaluation literacy split student outcomes
- [[student-perceptions-ai-study-productivity-2026]] — Learners report efficiency gains alongside dependency concerns
- [[student-llm-interaction-taxonomy-review-2026]] — A taxonomy of learning-oriented student-LLM interaction
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-specific patterns in student-AI chat
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Assisted performance gains without independent capability
- [[genai-performance-vs-learning]] — Why assisted performance and unassisted learning must be measured apart
- [[shaw-nave-cognitive-surrender-2026]] — Cognitive surrender as a disposition, not an accident
- [[metacognitively-discordant-completion-genai-2026]] — Learners who notice they do not understand and submit anyway
- [[verification-quality-reliance-calibration-genai-2026]] — Verification quality and reliance calibration
- [[simulating-students-llm-review-2026]] — Simulated students: architecture, mechanisms, and limits
- [[stanbkt-bayesian-knowledge-tracing]] — Parameter estimation in Bayesian knowledge tracing
- [[demographic-signals-llm-student-assessment-2026]] — Implicit and explicit demographic signals in LLM-based assessment
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI literacy, engagement, and psychological capital
- [[genai-student-experiences-uk-he-survey-2026]] — Students describe the pull of least effort
- [[mulisa-students-genai-integrity-perspectives-2026]] — Students on whether GenAI is a cheating tool or a learning partner
- [[munoz-misconduct-allegation-evidence-2026]] — What misconduct allegation files actually contain as evidence
- [[wright-transcription-not-generation-2026]] — Over-inclusive AI rules and the students they catch
- [[sharma-judgment-visible-genai-assessment-2026]] — Integrity as evaluative judgment rather than compliance
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Remote proctoring's emotional and equity costs for students
