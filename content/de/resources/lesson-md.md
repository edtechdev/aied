---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Ein offenes Klartext-Format für blockbasierte eLearning-Lektionen, dazu ein Agent Skill, der Lektionen, Assessments und ganze Kursbündel in diesem Format schreibt."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**LESSON.md** ist ein offenes Format für blockbasierte eLearning-Inhalte: eine Markdown-Datei mit YAML-Frontmatter und `:::`-Anweisungen für Text, Bilder und Wissenschecks, von einem Menschen lesbar und von jedem Werkzeug parsebar. Es existiert, weil Kursinhalte üblicherweise in einem einzigen Autorenwerkzeug eingeschlossen sind, und weil [[llm|große Sprachmodelle]] nur bei Lektionen helfen können, die sie tatsächlich lesen können.

## Was man damit tun kann

Schreiben Sie eine Lektion in einem beliebigen Texteditor und importieren Sie sie in jedes Werkzeug, das das Format unterstützt – ohne Kopieren, Einfügen und Neuformatieren. Interaktive Teile – Multiple-Choice-Wissenschecks mit Versuchslimits und Feedback auf Antwortebene – werden als einfache Eigenschaften ausgedrückt statt über eine grafische Oberfläche. Ein begleitendes `ASSESSMENT.md` an der Wurzel eines Bündels wird zum bewerteten [[assessment]] des Kurses. Das Projekt liefert außerdem einen `lesson-md`-Skill, der Claude, Codex oder einem anderen [[agentic-ai|Agenten]] das Format beibringt, sodass die Beschreibung eines Kurses in einfacher Sprache Lektionen, Assessments und ein vollständiges Bündel zurückgibt.

## Für wen es gedacht ist

Instructional Designer und Kurserstellende, die wollen, dass ihre Inhalte einen Werkzeugwechsel überleben, eLearning-Anbieter, die ein Import- und Exportformat wollen, das ihre nutzenden Personen bereits verstehen, und alle, die KI-gestütztes Autorenschaften auf einem lesbaren Format aufbauen. Zu den Beitragenden gehört Dan Bashaw von LXD Integral, und das Format hat ein öffentliches Changelog bis v1.8.

## Verbundene Konzepte

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
