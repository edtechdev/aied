---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Ein Open-Source-Agent-Skill und ein privater Browser-Editor, die achtzehn Regeln für klareres Schreiben in Entwurfs-, Überarbeitungs- und Prüfmodi für Prosa überführen."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**Clarity** verbindet einen Agent Skill mit einem Browser-Editor, beide aufgebaut um achtzehn Regeln für Schreiben, das „sich seine Lesenden verdient“. Der Skill installiert sich in Coding-Agents wie Claude Code und Codex mit `npx skills add addyosmani/clarity` und arbeitet dann in drei Modi: Der Prüfmodus kritisiert einen Entwurf und lässt die Datei unberührt, der Überarbeitungsmodus bearbeitet einen Entwurf direkt, und der Interview-Modus stellt der schreibenden Person zunächst Fragen und schreibt aus den Antworten mit. Das [[feedback|Feedback]], das eine schreibende Person erhält, zielt auf Substanz vor Stil. Die Regeln fragen, für wen der Text bestimmt ist und was diese Lesenden bereits wissen, bestehen auf Behauptungen statt Themen und auf Konkretem statt Abstraktem, und behandeln Füllstoff als Problem des Nicht-Wissens, wozu der Text da ist, statt als Vokabelproblem.

Der Browser-Editor läuft lokal auf der Seite und lädt keinen Entwurf hoch. Er meldet die Merkmale maschinengeschriebener Prosa, die Lesbarkeit und Lücken in der Substanz, was ihn nützlich macht, um einen von [[generative-ai|generativer KI]] erzeugten Text zu prüfen, bevor er eine Leserschaft erreicht. Das Projekt stellt ausdrücklich klar, dass das Ziel Schreiben ist, das erkennbar die eigene Handschrift des Autors behält, und nicht Prosa, die konstruiert ist, um [[ai-literacy|KI-Erkennung]] zu passieren – ein Unterschied, den Lehrende erkennen, wenn sie eine Richtlinie zu KI-gestütztem [[writing-education|Schreiben]] festlegen.

## Was vor der Einführung zu wissen ist

Das Repository veröffentlicht ein Evaluierungsprotokoll, Vorher-Nachher-Beispiele in `samples/` und Referenzdateien hinter dem Skill, sodass eine prüfende Person nachvollziehen kann, wie sich die Regeln verhalten, statt einer Behauptung auf Treu und Glauben zu folgen; die Seite hier wiederholt kein gemessenes Ergebnis. Der Autor ist Addy Osmani, die Lizenz ist MIT, und die Arbeit ist unabhängig und nicht das Produkt einer Institution. Sie ist jung und aktiv: entstanden im August 2026, 54 Commits, drei Releases mit dem jüngsten auf Version 0.2.1 im September, und etwa 250 Sterne bei der Prüfung im September 2026. Drei Beitragende haben Änderungen eingebracht. Skill-Anweisungen laden in einen Agenten, den die Lesenden bereits betreiben, daher gelten die üblichen Hinweise zum [[prompt-engineering|Prompt Engineering]]: Die Qualität der Kritik hängt vom Entwurf ab, der ihr übergeben wird.

## Verbundene Konzepte

[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
