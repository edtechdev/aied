---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Die Open-Source-Veröffentlichung von MAIC: ein Multi-Agent-Klassenzimmer, das ein Thema oder Dokument in Folien, Quiz, interaktive Simulationen und projektbasierte Aktivitäten verwandelt, vorgetragen von KI-Lehrkräften und KI-Mitschülern."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**OpenMAIC** ist die Open-Source-Veröffentlichung des in [[intelligent-tutoring|der MAIC-Studie]] beschriebenen Multi-Agent-Klassenzimmers: Beschreiben Sie ein Thema oder fügen Sie eigene Materialien an, und es erzeugt eine vollständige Lektion – Folien, Quiz, interaktive HTML-Simulationen und projektbasierte Aktivitäten – und trägt sie dann durch KI-Lehrkräfte und KI-Mitschüler vor, die sprechen, auf einem Whiteboard zeichnen und sich an der Diskussion beteiligen. Es ist der Code hinter einem Klassenzimmer, das man betreiben statt nur darüber lesen kann.

## Was man damit tun kann

Ein-Klick-Erzeugung produziert eine Lektion in Minuten aus einem Prompt oder einem hochgeladenen Dokument, Audio oder Video. Die Multi-Agent-Ebene ergänzt Klassenzimmerdiskussion, an der die lernende Person teilnehmen oder hereingerufen werden kann, Roundtable-Debatten zwischen Personas mit Whiteboard-Illustrationen, und freie Fragen und Antworten, bei denen die Lehrkraft mit Folien oder Diagrammen antwortet. Sitzungen unterstützen Foliensätze, Quiz, interaktive Simulationen und PBL und exportieren als bearbeitbare `.pptx` oder interaktive `.html`. Version 1.0.0 (August 2026) ergänzte eine Agent-Workbench: einen Chat-zuerst-Arbeitsbereich, der ganze Kurse plant und überarbeitet, dauerhafte, servergestützte Sitzungen, die Sie abbrechen, fortsetzen oder steuern können, und 24 eingebaute Skills für Folien, Quiz, Interaktives, Bilder, Video und Stimmen. Ein `SKILL.md`-Paket lässt einen Agenten-Rahmen Klassenzimmer aus einer Messaging-App bauen.

## Für wen es gedacht ist

Lehrkräfte und Kursteams, die erzeugte Materialien wollen, die sie dennoch bearbeiten können, Instructional Designer, die Multi-Agent-Aktivitäten prototypen, und Entwickelnde, die ein selbst hostbares Klassenzimmer brauchen statt eines gehosteten Produkts. Schulen können es auf Vercel oder mit Docker bereitstellen, und das Projekt liefert eine gehostete Demo unter open.maic.chat.

## Anmerkungen

Lizenziert unter MIT, mit einem englischen und chinesischen Nutzerleitfaden und einer aktiven Community auf Discord und Feishu. Es ist modellneutral: Sie liefern mindestens einen Zugangsschlüssel eines LLM-Anbieters, und optionale lokale Komponenten (Lemonade für lokale Modelle, FunASR für Spracherkennung) lassen Sie mehr vom Stack offline betreiben – „kostenlos“ beschreibt also die Software, nicht die Inferenzrechnung. Die Arbeit dahinter erschien im *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), und das Repository hatte bis September 2026 mehr als 38.000 Sterne.

## Verbundene Konzepte

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]
