---
title: Refutationstext
created: "2026-08-26T10:20:00-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition, misconceptions, scaffolding]
technology: [generative-ai]
discipline: [science education]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/refutation-text
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Refutationstext** — eine Technik zur Korrektur von Missverständnissen, bei der ein Text ein verbreitetes Missverständnis ausdrücklich benennt, es direkt widerlegt und dann die wissenschaftlich korrekte Vorstellung darlegt. Refutationstexte haben ihren Ursprung in der [[misconceptions|conceptual-change]]-Literatur des naturwissenschaftlichen Unterrichts und sind eine erprobte, technisch einfache Intervention, um stabile, der Intuition entsprechende Missverständnisse zu lösen, die sich gegen gewöhnlichen Unterricht sperren. In KI in der Bildung werden Refutationstexte zunehmend auf zwei Weisen genutzt: als **Vergleichsbedingung** für KI-basierte Interventionen (personalisierter Dialog, LLM-generierte Inhalte) und als **KI-generierte Inhalte** — Conceptual-Change-Texte und Missverständnistexte, die von [[generative-ai|generativer KI]] erzeugt werden, um Überzeugungen zu korrigieren oder um kollaborative Diskussion anzustoßen.

## Fragen zum Nachdenken

- Haben Sie schon einmal eine falsche Vorstellung einer lernenden Person „korrigiert", indem Sie einfach die richtige Antwort präsentiert haben, nur damit das Missverständnis später wieder auftauchte? Die Seite argumentiert, dass Missverständnisse keine Lücken sind, sondern aktiv getragene Überzeugungen, die sich gegen gewöhnlichen Unterricht sperren. Was sagt das darüber, warum Ihre Korrektur gescheitert ist?
- Ein Refutationstext benennt das Missverständnis ausdrücklich, widerlegt es und bietet die korrekte Vorstellung an — anders als ein üblicher erklärender Text, der einfach die Wahrheit darlegt. Warum sollte es helfen, die falsche Vorstellung laut auszusprechen, wenn das Unterrichten allein der richtigen Vorstellung das offenbar nicht tut?
- Die Forschung ist gemischt darin, ob personalisierter KI-Dialog einen statischen Refutationstext übertrifft: In einer Studie erzeugte interaktiver Dialog eine größere und schnellere Überzeugungsänderung; in einer anderen übertrafen sorgfältig verfasste Texte einen angeregten KI-Chat. Was könnte diese widersprüchlichen Ergebnisse erklären, und was sagen sie über die Annahme „Interaktivität ist immer besser"?
- KI kann heute wirksame Refutationstexte erzeugen, die die Qualität von Expertinnen und Experten erreichen, und sogar Missverständnisse generieren, um strukturierte Peer-Diskussion anzustoßen. Empfinden Sie die Idee, absichtlich aus KI-generierten falschen Vorstellungen zu unterrichten, als riskant oder als produktiv — und unter welchen Bedingungen würden Sie es versuchen?
- Refutationseffekte scheinen bei leistungsstarken Lernenden konzentriert zu sein und werden durch Epistemologie und Metakognition moderiert. Wenn die Technik den Starken am meisten hilft — welche Pflichten ergibt das für eine Lehrkraft, die sie in einer heterogenen Klasse einsetzt?
- Bevor Sie weiterlesen: Nennen Sie ein Missverständnis, das Sie gegenwärtig über ein Fach haben, das Sie unterrichten, und stellen Sie sich vor, die ausdrückliche „falsche" Behauptung und ihre Widerlegung selbst zu schreiben. Was hat diese Übung darüber offenbart, wie schwer guter Refutationstext zu schreiben ist?

## Einführung

### Das Konzept

Refutationstexte beruhen auf der Vorstellung, dass Missverständnisse keine bloßen Wissenslücken sind, sondern aktiv getragene, plausible, sich selbst verstärkende Überzeugungen, die sich der Korrektur widersetzen — eine Behauptung, die für die Conceptual-Change-Forschung zentral ist. Ein Refutationstext funktioniert, indem er das Missverständnis ausdrücklich macht, es als falsch benennt und erklärt, warum, und dann die korrekte Vorstellung auf eine Weise anbietet, die die lernende Person integrieren kann. Das unterscheidet sich von einem üblichen erklärenden Text, der einfach korrekte Informationen darlegt und annimmt, das Missverständnis werde dadurch verdrängt.

In KI in der Bildung ist der Kernbefund, dass das *Format* und die *Interaktivität* der Korrektur zählen. Zusammenlaufende Belege ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen 2026]]) zeigen, dass ein statischer, lehrbuchartiger Refutationstext Überzeugungen verlässlich korrigiert, dass aber **personalisierter, interaktiver KI-Dialog** eine größere und schnellere Reduktion der Überzeugung erzeugen kann, indem er das spezifische Missverständnis der lernenden Person adressiert und sie motivational einbezieht. Dieser Vorteil kann jedoch kontext- und designabhängig sein: In [[akdogan-heat-temperature-conceptual-change-thesis-2025|science education (Akdoğan 2025)]] übertrafen gut strukturierte Conceptual-Change-Texte (von Expertinnen und Experten *oder* KI-generiert) einen angeregten interaktiven ChatGPT-Dialog — was nahelegt, dass das Design des Dialogs (personalisiert gegenüber allgemein) und das Fach bestimmen, welches Format gewinnt.

### Warum Refutationstext für KI in der Bildung zählt

- **KI als Korrigierende.** Konversationelle KI-Tutoren können *personalisierte* Widerlegung liefern — die Widerlegung im Fluss an das spezifische Missverständnis der lernenden Person anpassen, was vorab geschriebene Texte nicht können. Das erzeugt stärkere unmittelbare Überzeugungsänderung und höheres Engagement und mehr Zuversicht als statische Widerlegung ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen 2026]]), wenngleich die Effekte möglicherweise verteilte Wiederholung brauchen, um anzuhalten.
- **KI als Erzeugerin von Widerlegungsinhalten.** [[generative-ai|Generative KI]] kann wirksame Conceptual-Change-Texte erzeugen, die die Qualität von Expertinnen und Experten erreichen ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan 2025]]), und kann große Mengen kontextspezifischer Missverständnistexte kostengünstig produzieren — und damit missverständnisbasiertes Lernen skalieren, das sonst von der Erfahrung der Lehrenden abhinge ([[llms-misconception-collaborative-learning-healthcare-2026|Cheah et al. 2026]]).
- **KI-generierte Missverständnisse als Lernressource.** Statt KI-generierte Missverständnisse als schädlich zu betrachten, kann strukturierte Peer-Diskussion darüber — eine Form kollaborativer Widerlegung — Conceptual Change und kritisches Denken fördern ([[llms-misconception-collaborative-learning-healthcare-2026|Cheah et al. 2026]]).
- **Missverständnisbildung ergänzen.** Refutationstexte sind eine empfohlene Strategie, um die konzeptuellen Missverständnisse zu korrigieren, die den falschen Überzeugungen der Studierenden über KI selbst zugrunde liegen (siehe [[misconceptions]] und [[critical-genai-use-predictors]]).

### Refutationstext gegenüber verwandten Techniken

Refutationstexte sind ein Mitglied des Conceptual-Change-Werkzeugkastens, neben Analogien, diskrepanten Ereignissen und interaktivem Dialog. Ihr Vorteil ist, dass sie **skalierbar, kostengünstig und nachweislich wirksam** sind; ihre Grenze ist, dass statische Texte sich nicht an die lernende Person anpassen können. KI-Dialog adressiert die Anpassungslücke, führt aber Designabhängigkeit ein (Personalisierung, Prompt-Qualität) und in manchen Studien keinen Vorteil gegenüber gut verfasstem Text. Das Verhältnis von Refutationstext und KI-Dialog ist daher komplementär: Text bietet verlässliche Basiskorrektur im Maßstab; personalisierter KI-Dialog bietet bei gutem Design stärkere, schnellere, motivierendere Korrektur.

### Zentrale Forschungsthemen

- Ob personalisierter KI-Dialog einen statischen Refutationstext übertrifft, und unter welchen Bedingungen.
- Ob KI-generierter Widerlegungs- bzw. Conceptual-Change-Text die Qualität von Expertinnen und Experten erreicht.
- KI nutzen, um Missverständnisse für kollaboratives, missverständnisbasiertes Lernen zu erzeugen.
- Die Rolle von Merkmalen der Lernenden (Leistung, Epistemologie, Metakognition) bei der Moderation der Wirksamkeit von Widerlegung.
- Verteilte Wiederholung, um die anfänglichen Vorteile interaktiver Widerlegung zu erhalten.

### Praktische Implikationen

Für Lehrende bleiben Refutationstexte ein verlässlicher, niedrigschwelliger Weg, hartnäckige Missverständnisse zu korrigieren. Für diejenigen, die KI integrieren, legt die Evidenz nahe: (1) KI nutzen, um wirksame Widerlegungs- bzw. Conceptual-Change-Inhalte im Maßstab zu *erzeugen*; (2) wo möglich, Widerlegung über personalisierten KI-Dialog zu vermitteln, für stärkeres unmittelbares Engagement und Überzeugungsänderung; (3) erwarten, dass KI-generierte Missverständnisse pädagogisch nützlich sind, wenn strukturierte Diskussion genutzt wird, um sie zu konfrontieren; und (4) für die lernende Person gestalten — Refutationseffekte können bei leistungsstarken Lernenden konzentriert sein und werden durch Epistemologie und Metakognition moderiert, daher sind Scaffolding und Nachbereitung wichtig.

## Verbundene Konzepte

- [[pedagogical-patterns]] — Widerlegungsfolgen, einschließlich zwei direkt widersprüchlicher Ergebnisse
- [[misconceptions]]
- [[scaffolding]]
- [[metacognition]]
- [[generative-ai]]
- [[stem-education]]
- [[physics-education]]
- [[medical-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]

## Verbundene Artikel

- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — Personalisierter KI-Dialog gegenüber Lehrbuch-Widerlegung bei der Überzeugungskorrektur
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Conceptual-Change-Text von Expertinnen/Experten bzw. KI gegenüber interaktivem KI-Dialog
- [[llms-misconception-collaborative-learning-healthcare-2026]] — LLM-generierte Missverständnisse für kollaboratives Lernen
- [[chatgpt-inoculation-training-verification-2026]] — Inokulationstraining als benachbarte, widerlegungsartige Intervention
- [[critical-genai-use-predictors]] — Empfiehlt Refutationstexte zur Adressierung konzeptueller Missverständnisse
- [[ai-learning-companions-framework]] — KI-Begleiter und Korrektur von Missverständnissen
