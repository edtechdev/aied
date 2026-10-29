---
title: "Wie sollte KI in die Lernerfahrung designed werden?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-29T07:57:30-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
audience: [instructional designers, instructors]
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Die Modulübersicht enthält eine Zeile „KI-Aktivität", und niemand kann sagen, was sie ersetzt. Oder eine Lehrkraft hat gebeten, einem Kurs, der bereits funktioniert, einen Chatbot hinzuzufügen, und Ihre Aufgabe ist, ihn so zu platzieren, dass der Teil nicht bricht, der den Kurs zum Funktionieren gebracht hat.

Gehen Sie vom Lernziel aus und von der Aktivität, die es erzeugt. Dasselbe Modell kann ein Gerüst, ein [[socratic-method|sokratischer]] Partner, ein Leser von Entwürfen, eine [[simulation|Simulation]] oder eine Antwortmaschine sein, und welches Sie bekommen, hängt vom Design ab und nicht vom Modell. Benennen Sie den Modus, den Sie bauen, setzen Sie den Versuch der lernenden Person vor jede erscheinende Hilfe, und halten Sie mindestens einen Weg durch den Kurs offen, der ohne das Werkzeug läuft.

## Die kurze Version

**1.** Schreiben Sie den Satz darüber, was Lernende danach ohne das Werkzeug können, und prüfen Sie jede KI-Funktion dagegen.

**2.** Sequenzieren Sie die Interaktion: Lernende versuchen, KI unterstützt, Lernende bewerten oder überarbeiten, Lernende zeigen.

**3.** Benennen Sie den Modus auf der ICAP-Leiter. Umgehung und Gerüst können dasselbe Werkzeug auf verschiedenen Sprossen sein.

**4.** Platzieren Sie die KI dort, wo die Kurssequenz ohnehin eine bestimmte Aktivität vorsieht, nicht am Ende als Zugabe.

**5.** Halten Sie das Werkzeug zurück, solange sich eine Fähigkeit bildet, und geben Sie es an einem Prüfpunkt wieder frei, den die studierende Person nicht fälschen kann.

## Entscheiden Sie, was die lernende Person ohne das Werkzeug tut

Das Konzept [[pedagogy|Pädagogik und Lehrstrategien]] der Wissensbasis liefert den Test: Erhält die Konfiguration die Aktivität, die das beabsichtigte Lernen erzeugt? Beantworten Sie das auf Papier, bevor jemand eine Funktion auswählt.

[[finkelstein-principled-ai-education-2025|The Principled AI Education Framework]] formuliert die allgemeine Regel: Technologie sollte die menschlichen Fähigkeiten erweitern, die Bildung entwickeln will, statt sie zu verdrängen. Als Test für ein Modul formuliert heißt das: die Fähigkeit benennen, die Aktivität benennen, die sie aufbaut, und fragen, ob die KI innerhalb dieser Aktivität sitzt oder daneben.

## Setzen Sie den Versuch vor die Hilfe

Das Standardmuster, das den Kontakt mit einer echten Klasse übersteht: **Lernende versuchen, KI unterstützt, Lernende bewerten oder überarbeiten, Lernende zeigen Verständnis.**

In der Praxis heißt das, eine erste Vermutung oder Lösung zu verlangen, bevor irgendeine Unterstützung erscheint, und Fragen, Hinweise, Beispiele, Gegenargumente und [[feedback|Feedback]] gegenüber sofortiger Komplettierung zu bevorzugen. Erhalten Sie [[productive-failure|produktives Scheitern]], wo es dem Lernen dient. Verlangen Sie die Verifikation folgenreicher Aussagen, bauen Sie Erklärung und [[learning-by-teaching|Rückerklären]] ein, und blenden Sie die Unterstützung aus, während die Kompetenz wächst. Halten Sie etwas Arbeit ohne KI bereit, damit Lernende kalibrieren können, was sie allein können.

Die Synthese [[reducing-ai-misuse|Reducing AI Misuse]] empfiehlt dieselbe Form als Sequenz aus erst denken, dann KI, dann reflektieren, mit bewussten Evaluationsprüfpunkten.

## Benennen Sie den Modus, für den Sie gestalten

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall und Panaderos Küchenmaschinen-Analogie]] verschiebt die Frage davon, ob Lernende [[generative-ai|generative KI]] nutzen, dahin, wie diese Nutzung prägt, was aus ihnen wird. Auf [[icap-framework|ICAP]] und [[samr-model|SAMR]] abgebildet ergibt das eine Leiter. Eine Aufgabe vollständig auszulagern, ohne Überarbeitung oder [[critical-thinking|kritische Auseinandersetzung]], ist passive Substitution und riskiert [[cognitive-offloading|Kompetenzverlust und Überabhängigkeit]]. [[prompt-engineering|Prompts zu verfeinern]] und Ausgaben gegenzuprüfen verlangt [[prior-knowledge|Vorwissen]] und [[self-regulated-learning|Selbstregulation]], was aktiv oder Augmentation ist. KI zum Brainstorming, Gliedern und Bewerten eigener Arbeit zu nutzen ist konstruktiv oder Modifikation. KI als echter Dialogpartner für Ko-Konstruktion und adaptives Feedback ist interaktiv oder Neubelegung.

Die Implikation ist direkt. Dasselbe Werkzeug ist auf einer Sprosse eine Umgehung und auf der nächsten ein [[scaffolding|Gerüst]], das Designdokument sollte den beabsichtigten Modus also benennen.

## Platzieren Sie es dort, wo die Sequenz eine Aktivität vorsieht

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec und Horvat]] analysierten die geplante Sequenz von 29.064 Lehr- und Lernaktivitäten über 554 Kurse und fanden eine sichtbare Designgrammatik. Aktivitäten des Typs Aneignung sind der häufigste Einstiegspunkt und der größte Einzeltyp, über 20%. Der Lerntyp folgt dem beabsichtigten Bloom-Niveau, wobei Aneignung von etwa 50% auf Niveau 1 auf etwa 20% auf Niveau 6 fällt und Produktion auf den Niveaus 5 und 6 über 20% steigt. Der stärkste Übergang in den Daten ist Prüfung zu Diskussion, bei 0.332.

Zwei Lehren folgen daraus für das KI-Design. Setzen Sie das Werkzeug dorthin, wo die Sequenz einen Aktivitätstyp vorsieht. Und weil Feedback sich mit [[collaborative-learning|Kollaboration]], [[group-work|Gruppenarbeit]] und der Präsenz der [[teacher-role|Lehrperson]] clusterte, sind Peer- und synchrone Strukturen die Orte, an denen KI-Unterstützung andocken sollte, nicht die, die sie ersetzen sollte.

## Entscheiden Sie, was Sie zurückhalten, und wann Sie es wieder freigeben

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli und Kolleginnen und Kollegen mit ihrem „refrain, then amplify"-Framework]] heben das auf die Programmebene. Halten Sie ein generatives Werkzeug zurück, solange sich eine Fähigkeit bildet, und geben Sie es wieder frei, sobald die studierende Person es anleiten, beurteilen, was es zurückgibt, und dafür einstehen kann, mit einem schwer zu fälschenden Prüfpunkt an jedem Übergang.

Geräte werden nach einem Kriterium von Bilden gegenüber [[cognitive-offloading|Entlasten]] gesteuert: erlaubt, wo sie engagierte Arbeit unterstützen, ausgeschlossen, wo sie Aufmerksamkeit abziehen. Das macht Entlastungsentscheidungen zu einer Frage von [[curriculum-design|Curriculum]] und [[governance|Governance]], die vor dem Design auf Kursebene kommt und nicht danach.

## Prüfen Sie, ob die Ausrichtung real ist

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes und Kolleginnen und Kollegen mit ihrer Diskursanalyse]] von 14 Stücken hochschuldidaktischer Handreichungen warnen, dass effizienzgerahmte Ratschläge, etwa generative KI zum Entwerfen von Lernzielen, Rubriken und Kursumrissen zu nutzen, eine [[assessment|Ausrichtung]] erzeugen, die ausgerichtet aussieht und dabei die konstruktive Hälfte vernachlässigt. Lernziele, Aktivitäten und Prüfungen werden als diskrete Posten generiert statt als voneinander abhängige.

Ihr Gegenmittel ist Neusequenzierung. Lehrende sollten konstruktive Ausrichtung gut genug verstehen, um KI-Ausgaben anleiten, hinterfragen und zurückweisen zu können, bevor sie irgendeinen Teil davon delegieren, denn eine plausible Oberfläche zu akzeptieren ist derselbe Bewertungsfehler, vor dem Lehrende Studierende warnen. Wo KI genutzt wird, plädieren sie für institutionell begrenzte, [[rag|retrieval-augmentierte]] Systeme, die um lokale Richtlinien und Qualitätsstandards herum konfiguriert sind, statt um allgemeine, im Internet trainierte Voreinstellungen.

## Was Instructional Designer falsch machen

Die KI hinzuzufügen gilt als die Intervention. Was das Lernen verändert, ist die Aktivität, die die studierende Person ausführt, und die KI ist ein Teil des Settings dafür. Ein gut platzierter Hinweis und eine gut platzierte Antwort können auf demselben Modell laufen und entgegengesetztes Lernen erzeugen.

Die Erlaubnis zu schreiben ist die Designarbeit. Eine Erlaubnis legt fest, was zulässig ist. Sie legt nicht die Sequenz, den Modus oder den Prüfpunkt fest, und diese drei entscheiden, ob die Aktivität überlebt.

Effizienz ist das Ziel der Neugestaltung. Lernziele und Rubriken mit einem Modell zu entwerfen ist schnell, und die Analyse von 14 Dokumenten fand, dass das Ergebnis ausgerichtet aussehen kann, während die Teile aufhören, einander zu stützen.

## Was Ihnen entgegenkommen wird

**„Die Studierenden werden es sowieso nutzen, also ist es naiv, darum herum zu gestalten."** Das werden sie, und das ist das Argument dafür, den Modus zu spezifizieren und ihn zu lehren. Ein Modul, das den Modus benennt, gibt einer studierenden Person etwas, dem sie folgen kann.

**„Wir haben keine Zeit, einen ganzen Kurs neu zu sequenzieren."** Dann sequenzieren Sie ein Modul und eine Prüfung neu. Der Übergang von Zurückhalten zu Verstärken ist ein Prüfpunkt, und die Sequenz aus erst denken, dann KI sind drei Anweisungen auf einem Handout.

**„Unsere KI-Funktion enthält bereits Leitplanken."** Leitplanken beschränken, was das Modell sagt. Sie entscheiden nicht, ob die lernende Person zuerst einen Versuch gemacht hat, ob die Unterstützung ausblendet oder ob ein Weg ohne KI existiert. Das sind Designentscheidungen in Ihrem Kurs, nicht Einstellungen im Produkt.

## Was Sie diese Woche tun können

**1.** Schreiben Sie den Satz zur Leistung ohne Unterstützung für das Modul und setzen Sie ihn über die Aktivitätenliste.

**2.** Markieren Sie den beabsichtigten ICAP-Modus neben jeder KI-Aktivität in der Übersicht.

**3.** Verschieben Sie eine KI-Aktivität so, dass die lernende Person das Problem zuerst versucht.

**4.** Wählen Sie einen Weg ohne KI durch das Modul und kennzeichnen Sie ihn für Studierende.

**5.** Benennen Sie einen Übergang, an dem das Werkzeug zurückgehalten wird, und den Prüfpunkt, der es wieder freigibt.

## Wohin als Nächstes

[[learning-design|Instructional Design]], [[active-learning|Aktives Lernen]] und [[scaffolding]] liefern das Designvokabular. Zu den Voreinstellungen auf Interaktionsebene, die entscheiden, ob eine gestaltete Aktivität das Lernen erhält, siehe [[reduce-ai-cheating]] und [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] behandelt, wie dieselben Prinzipien die Software selbst beschränken, und [[developing-ai-tutor]] übersetzt sie in die Architektur eines Tutors.
