---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Matt Pococks Open-Source-Sammlung kleiner, komponierbarer Agent Skills, darunter ein Skill für das Lehren über mehrere Sitzungen, ein Skill für unnachgiebiges Befragen und Anleitungen zum Schreiben von Dokumenten, denen ein Agent folgen kann."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**Skills for Real Engineers** ist Matt Pococks veröffentlichtes Verzeichnis von Agent Skills: kleine, komponierbare Anweisungsdateien, die sich in Claude Code, Codex oder einen anderen Agenten installieren lassen und dazu geschrieben sind, angepasst statt als Ganzes übernommen zu werden. Der Großteil der Sammlung dient der Softwarearbeit, aber mehrere Skills sind Bildungsinstrumente, die zum Lehren und Befragen gebaut wurden und nicht für Code.

Das deutlichste Beispiel ist `teach`, das über mehrere Sitzungen läuft und das Arbeitsverzeichnis als zustandsbehafteten Lehrarbeitsbereich behandelt, sodass Fortschritt und offene Fragen einer lernenden Person zwischen Gesprächen bestehen bleiben statt bei jedem Mal neu zu beginnen. `grill-me` und das zugrundeliegende `grilling` befragen die nutzende Person unnachgiebig zu einem Plan, bis jeder Zweig aufgelöst ist – [[socratic-method|sokratisches Befragen]] als wiederverwendbares Verfahren statt als Gesprächsstimmung. `wait-what` reagiert in dem Moment, in dem eine Nachricht nicht ankommt, indem es sie in einfacher Sprache mit dem fehlenden Kontext neu formuliert, ein Zug, den jede Lehrkraft wiedererkennt, wenn eine Erklärung beim ersten Mal nicht trifft. `writing-for-agents` behandelt, wie man Dokumente schreibt, denen ein [[prompt-engineering|Agent]] folgen kann, was heute die praktische Form davon ist, Anweisungen für KI-Kursmaterial zu schreiben, also für [[pedagogical-agent|KI]]. `to-questionnaire` verwandelt eine Entscheidung in einen Fragebogen für diejenigen, die sie beantworten können, `handoff` verdichtet ein Gespräch zu einem Dokument, aus dem ein anderer Agent weiterarbeiten kann, und `wizard` erzeugt eine interaktive Anleitung für Schritte, die nur ein Mensch ausführen kann.

## Was vor der Einführung zu wissen ist

Alles ist unter MIT [[open-source|Open Source]] und frei als Ausgangspunkt für lokale [[ai-literacy|KI-Kompetenz]] oder [[self-directed-learning|selbstgesteuertes Studium]] zu nehmen. Die Annahme ist groß und schnelllebig: etwa 270.000 Sterne und 23.000 Forks bei der Prüfung im September 2026, mit dem jüngsten Commit am 18. September 2026. Der Vorbehalt ist der Rahmen. Die Skills setzen den Arbeitskontext eines [[human-ai-collaboration|Ingenieurs]] voraus, sie sind in die Rubriken Engineering, Produktivität, veraltet und in Arbeit gegliedert, sodass manche Einträge ausdrücklich unfertig oder stillgelegt sind, und die README dient zugleich als Newsletter-Anmeldung. Behandeln Sie die Lehr- und Befragungs-Skills als den übertragbaren Teil, und rechnen Sie damit, jeden davon umzuschreiben, bevor Sie einen Lernenden vorsetzen.

## Verbundene Konzepte

[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
