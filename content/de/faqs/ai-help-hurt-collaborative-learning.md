---
title: "Wie kann KI kollaboratives Lernen in Ihrem Kurs unterstützen oder beeinträchtigen?"
created: "2026-11-24T08:05:00-05:00"
updated: "2026-11-24T12:01:45-05:00"
type: faq
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
weight: 80
foundations: [human-ai-collaboration]
pedagogy: [collaborative-learning, problem-based-learning, project-based-learning, metacognition, self-regulated-learning, scaffolding, sociocultural-learning]
technology: [generative-ai, conversational-ai, llm, pedagogical-agent]
assessment: [group-work, peer-assessment, process-oriented-assessment]
methods: [meta-analysis-systematic-review, qualitative-research, mixed-methods-research]
audience: [instructors, instructional designers]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
translation_of: faqs/ai-help-hurt-collaborative-learning
source_updated: "2026-11-24T08:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Zwei Studierende reichen einen Gruppenbericht ein, den keines von beiden erklären kann. Eine dritte Gruppe produziert einen flachen Konsens, mit dem niemand gerungen hat, weil die schnellste plausible Antwort zuerst kam und das Werkzeug es leicht machte, die Suche zu beenden. Eine vierte führt ihre ganze Aushandlung in einem einzigen geteilten Chatfenster durch, und Sie können nicht erkennen, ob sie gemeinsam gedacht haben oder Prompt hinter Prompt abgesetzt haben.

Die ehrliche Antwort lautet, dass die Evidenz die Vorteile von KI im kollaborativen Lernen stützt und die meisten Risiken als konzeptionell ausweist. Gut gestützt ist, dass KI die Koordination beschleunigen, Ideen liefern, Feedback geben und die Schwelle für die Beteiligung an einer Diskussion senken kann. Viel weniger belegt ist, dass sie die Interaktion schützt, von der diese Gewinne abhängen, und das stärkste Designsignal in der Literatur ist, dass Effizienzgewinn und Interaktionsverlust derselbe Mechanismus sein können ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei und Perkins, 2026]]). Die sinnvolle Frage ist also nicht, ob KI erlaubt werden soll, sondern wo in der Arbeit der Gruppe sie denkt und wo sie nur Text hin- und herbewegt.

## Die kurze Version

**1.** Setzen Sie das Werkzeug dort ein, wo die gemeinsame Regulation der Gruppe stattfindet, nicht dort, wo einzelne Abschnitte geschrieben werden.

**2.** Machen Sie den Prompt zu einem Gruppenartefakt. Ein gemeinsames Dokument oder eine geteilte Oberfläche gibt Ihnen etwas zu lesen und der Gruppe etwas, worüber sie streiten kann; privates Prompting gibt jedem Mitglied einen anderen Assistenten und niemandem eine gemeinsame Aufzeichnung.

**3.** Weisen Sie der KI eine explizite Rolle zu, die Dissens statt Zustimmung fördert, etwa das Gegenargument, das einen schnellen Konsens davon abhält, sich zu schließen.

**4.** Schützen Sie eine Phase, in der das ganze Team sprechen muss, und sorgen Sie dafür, dass diese Phase etwas hervorbringt, das Sie einsammeln.

**5.** Verlangen Sie in online-basierten und asynchronen Arbeitsformen die Entscheidungsspur: Prompts, Überarbeitungen und wer sie beigesteuert hat, denn das ist die einzige Version des Prozesses, die Sie jemals sehen werden.

**6.** Halten Sie eine Komponente frei, die jedes Mitglied allein beantwortet, damit eine Gruppennote eine Näherung für Verstehen bleibt statt für diejenige, die am besten geschrieben hat.

## Wo die Unterstützung real ist

[[gao-adaptive-support-collaborative-learning-meta-2026|Gao et al. (2026)]] bündelten 83 experimentelle und quasi-experimentelle Studien zur adaptiven Unterstützung im [[collaborative-learning|kollaborativen Lernen]], die in 80 Artikeln zwischen 2004 und 2023 berichtet wurden, und fanden eine mittlere positive Wirkung. Die Gewinne fielen ungleichmäßig aus, und zwar in einer Weise, die zu dem passt, was Lehrende tatsächlich wollen: groß für individuelles Wissen, mittel für Gruppenprodukte und Gruppenprozesse, klein für Affekt und nicht vorhanden für die wahrgenommene kognitive Belastung. Die Bedingungen, die starke von schwachen Interventionen trennten, waren konsistent: kognitive Auslöser wie Vorwissen und Fehlerprofile wirkten besser als soziale oder affektive, die Ansprache der gemeinsamen Aktivität der Gruppe wirkte besser als die Ansprache einzelner Personen, System- oder Lehrerkontrolle schlug Lernenden- und gemeinsame Kontrolle, und kurze Episoden schlugen sowohl Einzelsitzungen als auch Implementierungen von einem Monat oder länger.

Lesen Sie das als Designauftrag statt als Urteil. Unterstützung, die auf das abzielt, was die Gruppe gemeinsam tut, ausgelöst durch das, was ihre Mitglieder wissen, kurz erscheint und sich dann zurückzieht, ist das Profil, das Wirkungen zeigte. Unterstützung, die Gefühle überwacht oder das ganze Semester läuft, ist das Profil, das keine zeigte.

Drei Mechanismen tauchen wiederholt auf. Ideenfindung und alternative Lösungen sind der am häufigsten berichtete Nutzen, und [[llm-critical-thinking-teamwork-review|Martínez-Peláez et al. (2025)]] fügen eine nützliche Umkehrung hinzu: Große Sprachmodelle liefern oft unvollständiges oder falsches Material, was Studierende dazu zwingt, es zu hinterfragen, zu prüfen und zu verbessern, statt es zu akzeptieren. Niedrigere Teilnahmebarrieren sind für ruhigere Mitglieder wichtig. Und [[genai-counter-learner-groupthink-2025|Wiss et al. (2025)]] zeigen eine Rolle, die nichts mit dem Verfassen zu tun hat: Ihr CALIE-Agent begleitete zwölf interprofessionelle Teams in einer virtuellen Sitzung des [[problem-based-learning|problembasierten Lernens]] und wurde aufgefordert, kontroverse Standpunkte einzubringen und dem Gruppendenken entgegenzuwirken. Unter 158 Befragten aus sieben Graduiertenprogrammen der Gesundheitsberufe gaben Studierende an, dass der Agent die Gruppendynamik verbesserte, kritisches Denken und Engagement anregte und das Potenzial des Gruppendenkens begrenzte.

## Wo die Schäden liegen und wie belastbar sie sind

Die Seite der Schäden ist als Evidenz dünner und als Risiko dicker, und es lohnt sich, beides zu trennen.

Interaktionsverlust ist die am besten gestützte Sorge. KI-vermittelte Kommunikation komprimiert Aushandlung und kollektive Sinnkonstruktion: Die Gruppe erreicht ein kohärentes Ergebnis, während sie weniger von dem Gespräch aufwendet, das eines hervorbringt. Effizienzgewinn und Interaktionsverlust können derselbe Mechanismus sein, sodass Sie die Geschwindigkeit selten ohne den Verlust bekommen, es sei denn, Sie bauen die Aushandlung als verpflichtende Arbeit wieder ein ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei und Perkins, 2026]]).

Undurchsichtigkeit ist die zweite, und online ist sie schlimmer. [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] beobachteten und interviewten 27 Studierende der Hochschulbildung durch die Brille der verteilten Kognition, und der Kontrast verläuft entlang der Synchronitätslinie. In synchronen Gruppen, die an einer einzigen geteilten generativen KI-Oberfläche arbeiteten, erhielten Teams ein gemeinsames Bewusstsein aufrecht, konstruierten Prompts gemeinsam, behandelten den Chat als gemeinsames externes Gedächtnis und handelten die Rolle des Werkzeugs offen aus. In asynchroner Teamarbeit nutzten Studierende das Werkzeug individuell und schrieben Ausgaben um oder entfernten ihre Kennzeichnungen, bevor sie sie teilten, sodass der Einfluss der KI auf Entscheidungen undurchsichtig und schwer nachvollziehbar wurde. Dieselben Studierenden, dasselbe Werkzeug, andere Sichtbarkeit.

Die dritte ist Homogenisierung und Auslagerung. Die randomisierte Evidenz, auf die Wei und Perkins sich stützen, ergab, dass KI innovativere Vorschläge hervorbrachte, ohne die Gesamtinnovativität der Teilnehmenden signifikant zu erhöhen, während sie Ideen homogenisierte und zu [[cognitive-offloading|kognitiver Auslagerung]] einlud. Eine Gruppe kann schneller auf eine engere Menge von Antworten zukonvergieren, was nach guter Koordination aussieht.

Schließlich gibt es die Moderationsfalle. Ein Agent, der gebeten wird, die Gruppe zu regulieren, kann den Prozess beginnen und dennoch scheitern, ihn abzuschließen. [[roberts-triggers-regulation-agent-supported-collaborative-learning-2026|Roberts et al. (2026)]] führten eine Wizard-of-Oz-Studie durch, in der ein metakognitiver Agent 14 Gruppen angehender Lehrkräfte während einer 60-minütigen Untersuchungsaufgabe aufforderte. Gruppen leiteten nach 55 % der Prompts eine Regulation ein, doch eine gemeinsame strategische Veränderung folgte nur in 9 von 58 Fällen, davon 7 % teilweise. Prompts über das Fehlen einer gemeinsamen Perspektive wurden am wenigsten akzeptiert und zogen offene Abwehr hervor. [[chen-genai-team-moderator-cscl-shared-regulation-2026|Chen et al., 2026]] testeten eine ähnliche Idee positiver: über 16 Wochen mit 64 Bachelor-Studierenden erhöhte ein adaptiver Agent für [[self-regulated-learning|sozial geteilte Regulation]] die Gleichheit der Beteiligung im Vergleich zu statischen Arbeitsblättern, allerdings nicht die Intensität des Gesprächs. Beide weisen in dieselbe Richtung, und es ist eine enge Behauptung: Ein Agent kann verteilen, wer spricht, und Prompting allein ändert selten, was die Gruppe zu tun beschließt.

## Gestalten Sie die KI-Nutzung der Gruppe, statt sie zu erlauben oder zu verbieten

Beginnen Sie mit der Phase, nicht mit dem Kurs. Benennen Sie die Phasen, die KI-offen sind, und die Phasen, die ohne sie erarbeitet werden sollen, und sagen Sie jeweils in einem Satz, warum. Das Muster von Gao et al. legt nahe, dass die KI-offenen Phasen diejenigen sind, die Alternativen erzeugen und Feedback geben, und die geschützten Phasen diejenigen, in denen die Gruppe entscheidet, was sie denkt.

Machen Sie dann die Aushandlung sichtbar. [[kaya-ssrl-sdt-chatgpt-mathematical-modeling-2026|Kaya und Yildiz Durak (2026)]] klassifizierten 18 ChatGPT-4o-vermittelte mathematische Modellierungsaktivitäten anhand der vier Merkmale der [[sociocultural-learning|sozial geteilten Regulation]] und der kollektiven Bedürfnisse der [[self-determination-theory|Selbstbestimmungstheorie]] und berichteten, dass das Werkzeug Kompetenz und Autonomie gut bediente, dabei aber bei sozialer Eingebundenheit knapp war. Das ist ein konkretes Argument dafür, von der Gruppe zu verlangen, über das Werkzeug zu sprechen, statt es nur zu benutzen, denn das Bedürfnis, das am ehesten unerfüllt bleibt, ist das, das niemand benennt.

Geben Sie dem Werkzeug eine Rolle mit einer Aufgabenbeschreibung. Entwurfsassistent, Teufelsanwalt, Zusammenfasser des eigenen Textes der Gruppe oder Erklärer des Entwurfs eines Mitglieds erzeugen alle unterschiedliches Verhalten. Der Gegenlerner von Wiss et al. ist das klarste Beispiel für eine Rolle, die gewählt wurde, um die Zustimmung schwieriger statt leichter zu machen.

Für [[project-based-learning|projektbasierte]] und [[problem-based-learning|problembasierte]] Arbeitsformen sollten Sie das Werkzeug auf die Phasen abbilden, die die Regulation tragen. [[ai-project-hybrid-learning-self-regulated-2026|Priyambudi et al. (2026)]] bauten ein projektbasiertes Hybridmodell, das Vorabüberlegung, Durchführung und Selbstreflexion auf die Projektsyntax abbildet, wobei die KI als metakognitives Gerüst und kognitiver Gesprächspartner tritt statt als Inhaltsquelle. Ihre Ausgangslage war lehrreich: Unter 65 Studierenden der englischen Literatur lag selbstreguliertes Lernen im Durchschnitt bei 2.21 auf einer 4-Punkt-Skala, nur 24.4% setzten Lernziele und 17.8% evaluierten sich selbst. Das Werkzeug zielte auf die Phasen ab, die Studierende bereits übersprangen, und das ist der Teil, der verallgemeinerbar ist.

## Online und asynchrone Gruppenarbeit

Der asynchrone Fall braucht ein eigenes Design, weil genau die sichtbare geteilte Oberfläche verschwindet. Xu et al. fanden, dass Studierende, die asynchron arbeiteten, KI individuell nutzten und Ausgaben bereinigten, bevor sie sie teilten, sodass die tatsächliche Argumentation der Gruppe nie in den gemeinsamen Raum gelangte.

Praktische Antworten:

- Verlangen Sie das Prompt-Protokoll als abzugebendes Artefakt, in einer gemeinsamen Datei mit Zeitstempeln, damit die KI-Nutzung der Gruppe lesbar wird statt geraten.
- Geben Sie jedem Mitglied eine rotierende Rolle im gemeinsamen Thread, etwa Fragesteller, Skeptiker oder Zusammenfassender, damit eine Person nicht der einzige Vermittler der Gruppe mit dem Werkzeug ist.
- Führen Sie einen synchronen Kontrollpunkt durch, auch einen kurzen, an dem die Gruppe ins Verhältnis setzt, was das Werkzeug parallel erzeugt hat. Diese Verständigung ist die Interaktion, die das asynchrone Format entfernt.
- Setzen Sie zunächst kleine, begrenzte Aufgaben ein, in Übereinstimmung mit dem Befund von Gao et al., dass kurze adaptive Episoden sowohl Einzelsitzungen als auch semesterlange Implementierungen übertrafen.

Die Einschränkung ist, dass nichts davon als Paket getestet wurde. Xu et al. ist eine qualitative Studie mit 27 Studierenden, und die Designempfehlungen sind Schlüsse aus dem, was die asynchronen Gruppen nicht sehen konnten.

## Was Lehrende dabei falsch machen

Eine permissive Kursrichtlinie entscheidet darüber, was Gruppen tun. Dieselbe institutionelle Richtlinie erzeugte je nach Aufgabe und Risikoeinschätzung der Gruppe entgegengesetzte Gruppenschlüsse, sodass die Entscheidung in der Aufgabe liegt, ob die Lehrende es wollen oder nicht.

Mehr KI bedeutet bessere Zusammenarbeit. Die Evidenz stützt Vorteile und lässt die Risikoseite weitgehend konzeptionell, aber die konkreten Schäden oben reichen aus, um den Schutz der Interaktion statt die Maximierung der Nutzung zu rechtfertigen.

Die Gruppe zum Regulieren aufzufordern, löst es. Roberts et al. maßen eine große Lücke zwischen akzeptierten Prompts und geänderten Strategien. Prompting beginnt die Überwachung; es beendet die Arbeit nicht.

Ein gemeinsamer Ordner bedeutet einen gemeinsamen Prozess. Die Aufzeichnungen, die überleben, sind diejenigen, die die Gruppe dort abgelegt hat. Fragen Sie nach dem Entscheidungsartefakt, nicht nach dem Archiv.

Ein Agent hält die Gruppe auf Kurs. Chen et al. fanden eine Umverteilung der Beteiligung, nicht mehr davon, und Roberts et al. fanden, dass Prompts zur gemeinsamen Perspektive Widerstand hervorriefen. Positionierung ist wichtiger als Präsenz.

## Die Einwände, die Sie hören werden

**„Gruppenarbeit ist schon unfair, und KI macht es schlimmer.“** Das Fairnessproblem ist älter als das Werkzeug, und KI macht einen Teil davon billiger: Ein Mitglied kann nun allein einen plausiblen Abschnitt erzeugen. Individuelle Kontrollpunkte und ein sichtbarer Prozess haben eine Designbegründung, und keines von beiden hat sich als wirksam gegen Trittbrettfahren erwiesen.

**„Ich kann Prozess bei dieser Einschreibungszahl nicht bewerten.“** Sie müssen nicht alles davon bewerten. Bewerten Sie das Artefakt, das nur existiert, wenn der Prozess stattgefunden hat: das Prompt-Protokoll, die Aushandlungserklärung, die kurze individuelle Erklärung. Alle drei sind begrenzt.

**„Studierende werden privat prompten, was immer ich vorgebe.“** Manche werden es tun. Gestalten Sie für den sichtbaren Fall und behandeln Sie den privaten Fall als unbekannt, nicht als Fehlverhalten, das darauf wartet, erwischt zu werden.

**„Ist das nicht eine Richtlinienfrage des Fachbereichs?“** Der Fachbereich legt den Standard fest. Er kann Ihre Aufgabe nicht sequenzieren, die Phasen nicht wählen und nicht entscheiden, wo die Prompts liegen.

## Was Sie diese Woche tun können

**1.** Wählen Sie eine bevorstehende Gruppenaufgabe und markieren Sie zwei Phasen als KI-frei, jeweils mit einer Begründung in einem Satz.

**2.** Entscheiden Sie, wo die Prompts liegen werden, und schreiben Sie das als Anforderung statt als Vorliebe in den Auftrag.

**3.** Fügen Sie einen Gegenargument-Schritt hinzu: fünf Minuten, in denen ein Mitglied gegen die aktuell führende Antwort der Gruppe argumentiert, mit oder ohne KI.

**4.** Fügen Sie für jede online-basierte oder asynchrone Gruppenarbeit das Prompt-Protokoll zur Abgabeliste hinzu.

**5.** Fügen Sie dem Bewertungsraster einen individuellen Kontrollpunkt hinzu, bewertet nach dem Verständnis eines Abschnitts, den die betreffende Person nicht verfasst hat.

## Wohin als Nächstes

[[group-work-ai]] behandelt den Umgang mit KI in Gruppen- und kollaborativen Aufgaben, einschließlich Sequenzierung und Bewertung. [[collaborative-learning|Kollaboratives Lernen]] trägt die zugrunde liegende Forschung dazu, was Gruppenarbeit produktiv macht, und [[metacognition|Metakognition]] und [[self-regulated-learning|selbstreguliertes Lernen]] behandeln die individuellen Fähigkeiten, auf die der Gruppenprozess zurückgreift. [[online-teaching-and-learning|Online-Lehren und -Lernen]] behandelt den Fernkontext, [[pedagogical-patterns|pädagogische Muster]] behandeln die wiederkehrenden Designs, die diese Aufgaben nutzen, und [[asynchronous-online-courses-ai|asynchrone Online-Kurse]] behandeln das Format, in dem KI-Nutzung am schnellsten unsichtbar wird.
