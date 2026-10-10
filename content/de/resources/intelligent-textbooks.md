---
title: "Intelligent Textbooks entwickeln"
created: "2026-10-10T11:10:00-04:00"
updated: "2026-10-10T11:15:00-04:00"
type: resource
summary: "Dan McCrearys Open-Source-Leitfaden zum Aufbau intelligenter Textbooks — Online-Lehrbücher mit Suche, Navigation, Glossaren, Quiz, Konzeptgrafiken und eingebetteten Simulationen — mit MkDocs Material und generativer KI, ergänzt um eine Bibliothek KI-generierter interaktiver MicroSims."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Die Website **Intelligent Textbooks** ist Dan McCrearys Schritt-für-Schritt-Leitfaden zum Aufbau von *intelligent textbooks* — Online-Lehrbüchern, die über statische PDFs hinausgehen, indem sie Suche, Seitennavigation, ein Glossar der Begriffe, ein Inhaltsverzeichnis, Quizverwaltung, gerenderte Formeln, Social-Media-Vorschauen, Linkprüfung und eine leicht visualisierbare **Konzeptgrafik** bieten, die alle Konzepte eines Kurses und ihre Abhängigkeiten zeigt. Der Leitfaden vertritt die Auffassung, dass viele heutige Kurse von hochwertigen Online-Lehrbüchern mit diesen Funktionen profitieren können, und er zeigt, wie man sie mit dem Build-System [MkDocs](http://mkdocs.com/) zusammen mit dem Material-Theme und generativer KI erstellt und pflegt.

Der entscheidende Schritt besteht darin, dass das Lehrbuch *in Markdown verfasst und von KI generiert wird* — eine konkrete Ausprägung des [[vibe-coding|KI-gestützten Autorenschafts]]-Musters, angewendet auf [[curriculum-design|Kursinhalte]]: Anstatt eine große Website von Hand zu pflegen, beschreiben Sie den Kurs und lassen generative KI die Seiten erstellen und pflegen, während die Werkzeugkette Navigation, Suche und Konzeptgrafik übernimmt. Eine Begleitbibliothek von [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) verspricht, über 90 % der Aufgaben zu automatisieren, die für den Aufbau eines Lehrbuchs der Stufe 2 aus einer Kursbeschreibung nötig sind.

## Eine ergänzende Ressource: MicroSims

Die natürliche Ergänzung zu diesem Leitfaden ist McCrearys **MicroSims**-Bibliothek unter <https://dmccreary.github.io/microsims/> (Quelle: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), die die interaktiven Simulationen bereitstellt, die ein intelligent textbook einbettet. Ein *MicroSim* (Mikrosimulation) ist eine einfache interaktive Simulation, die mit KI erzeugt wird, um Lehrenden die Erklärung eines Konzepts zu erleichtern, und sie kann in ein intelligent textbook oder jede Website eingebettet werden, die ein `iframe` akzeptiert. MicroSims zeichnen sich aus drei Gründen aus: **KI-gestützte Erzeugung** (standardisierte Designmuster verwandeln eine natürlichsprachliche Beschreibung einer Simulation in ein teilbares Asset), **universelle Einbettung** (ein einziges HTML-`iframe`-Element fügt eines in jede Seite ein) und **transparenter, veränderbarer Code** (keine Blackbox — ein Klick öffnet die Simulation in einem Web-Editor, und eine Creative-Commons-Lizenz erlaubt den meisten Lehrenden die Nutzung ohne Lizenzgebühren). Der Begriff wurde 2023 von Valerie Lockhart geprägt, nachdem sie festgestellt hatte, dass Lehrende und Studierende mit der JavaScript-Bibliothek p5.js mit wenig oder ohne Schulung Simulationen erstellen konnten.

Das Projekt veröffentlicht außerdem ein JSON Schema für MicroSim-Metadaten, damit KI-Werkzeuge durchsuchbare Deskriptoren erzeugen können; ein facettiertes MicroSim-Register steht auf der Roadmap. Ein Forschungspapier, das das Framework beschreibt — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — ist auf arXiv verfügbar ([2511.19864](https://arxiv.org/abs/2511.19864)). Beispielsimulationen sind Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula und ein Chart der Aktienmarktrenditen, die jeweils live auf der Website laufen.

## Für wen es gedacht ist

Lehrende und Instructional Designers, die ein Kurs-Lehrbuch erstellen oder pflegen wollen, besonders in der Hochschulbildung und in der beruflichen Weiterbildung, außerdem Fachbereichsentwickelnde und alle, die generative KI nutzen, um Bildungsinhalte zu verfassen. Es passt zu Lehrenden, die mit einem Markdown-und-Git-Workflow vertraut sind (oder bereit sind, ihn zu lernen) und die möchten, dass die KI die technische Infrastruktur der Website übernimmt — Suche, Navigation, Konzeptgrafik —, damit sie sich auf die Pädagogik konzentrieren können.

## Hinweise und Einschränkungen

Dies ist ein Praxisleitfaden und eine Werkzeugkette, keine peer-reviewte Studie — er präsentiert einen Workflow und seine eigene pädagogische Begründung („intelligent textbooks guide students through concepts on their quest for knowledge“) statt Belege für Lernergebnisse. Das MicroSim-Forschungspapier ist die nächste empirische Grundlage, und es ist auf arXiv selbstveröffentlicht. Beide Projekte sind Open Source (das intelligent-textbooks-Repository gibt eine MIT-Lizenz und 38 Sterne an; MicroSims gibt eine Creative-Commons-Lizenz und 13 Sterne an) und werden aktiv gepflegt. Konzeptgrafiken und glossarorientierte Struktur sind für Auffindbarkeit tatsächlich nützlich, aber der Leitfaden setzt einen recht technischen Autorenworkflow voraus — MkDocs, Git und Werkzeuge für generative KI —, was für manche Lehrende eine Hürde sein kann. Zum Zeitpunkt der Erfassung steht das Register für MicroSims noch auf der Roadmap, daher hängt das Auffinden einer bestimmten bestehenden Simulation von der Suche und Navigation der Website selbst ab.

## Verbundene Konzepte

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
