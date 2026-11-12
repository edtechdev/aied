---
title: "Amplify GenAI"
created: "2026-11-12T11:12:00-05:00"
updated: "2026-11-12T11:12:00-05:00"
type: resource
summary: "Vanderbilts MIT-lizenzierte Enterprise-Plattform für generative KI, bereitgestellt im eigenen AWS-Konto einer Einrichtung: eigene Assistenten über lokalen Dokumenten, retrieval-augmentierte Antworten, Teilen in der Organisation und Kostenabrechnung bis zur einzelnen Nachricht."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Amplify GenAI ist die Gegenwette zu einer campusweiten Lizenz für einen kommerziellen Assistenten: Die Einrichtung betreibt die Plattform selbst, in ihrem eigenen Amazon-Web-Services-Konto, und zahlt für das, was sie nutzt. Vanderbilt baute sie für die eigene Community, veröffentlichte sie unter MIT in drei Repositories und bietet sie nun anderen Organisationen als Alternative zu Enterprise-Verträgen pro Sitzplatz an — mit dem Argument, der teure Teil sollten die Modelle sein, nicht die Sitzplatzzahl.

## Was man damit tun kann

Nutzer bauen eigene Assistenten, indem sie Dokumente hochladen oder Datenquellen verbinden, und die Assistenten antworten mit [[rag|retrieval-augmentierter Generierung]] über dieses Material statt allein aus dem allgemeinen Training. Assistenten lassen sich in der Organisation teilen, in einer Konversation verketten und mit Prompt-Vorlagen versehen; die Plattform erzeugt außerdem PowerPoint- und Word-Dateien, Diagramme und Visualisierungen. Administratoren bekommen, was ein gemeinsamer Dienst braucht: Kostenabrechnung bis auf Nachrichtenebene, Limits pro Nutzer, Ordner und Arbeitsbereiche sowie SSO, alles in einer Bereitstellung, die die Einrichtung kontrolliert.

Die wichtigste Entwurfsentscheidung für ein [[higher-ed|College]] ist das Abrechnungsmodell. Vanderbilt berichtet, dass bei 1.300 Pilotnutzern die Kosten pro Nutzer etwa \$3 pro Monat einschließlich AWS betrugen und die Hälfte dieser Nutzer weniger als \$1 pro Monat an Tokens verbrauchte — Zahlen, die die Universität als Fallstudie präsentiert, nicht als geprüfte Benchmark. Nutzungsabhängige Abrechnung belohnt einen Campus, an dem eine Minderheit der Nutzer den Großteil der Arbeit leistet, was die normale Form der KI-Einführung ist, und sie macht die Frage der Finanzabteilung („Was kostet das pro Studierendem?") aus Protokollen beantwortbar statt aus einem Vertrag.

## Für wen es gedacht ist

Zentrale IT und CIO-Büros, die bereits Workloads in AWS betreiben und eine von der Community getragene Alternative zu einem kommerziellen Enterprise-Assistenten wollen; Lehrende, die Assistenten brauchen, die auf Kursmaterial beruhen, ohne es an das Verbraucherprodukt eines Anbieters zu schicken; und Einrichtungen, die an einer Stelle sehen wollen, was Menschen mit Modellen tun. Weil es im eigenen Konto der Einrichtung bereitgestellt wird, beantwortet die Bereitstellung die Frage des Datenstandorts statt eines Versprechens des Anbieters.

## Anmerkungen und Vorbehalte

Kostenlos zu lizenzieren, nicht kostenlos zu betreiben: Die Einrichtung zahlt AWS und die Modellanbieter. Die Modellwahl läuft über Amazon Bedrock (Anthropic, Mistral) oder OpenAI und Microsoft Azure, und der Betrieb eigener lokaler Modelle ist nicht implementiert. Das Projekt erklärt ausdrücklich, dass es einzelne Bereitstellungen nicht unterstützen kann, und verweist Organisationen an kommerzielle Partner — die realistischen Kosten schließen also Personal oder einen Dienstleister ein. Es ist eine Bereitstellung aus drei Repositories (Frontend, Backend, Infrastruktur) mit Dutzenden statt Tausenden Sternen, und der obige Kostenvergleich ist Vanderbilts eigene Erfahrung, keine kontrollierte Studie. Einrichtungen, die Inferenz lieber auf eigener Hardware halten, sollten [MindRouter](/aied/resources/mindrouter/) ansehen und beide zusammen lesen: Amplify ist eine Anwendungsschicht über Anbietermodellen, MindRouter ein Gateway über den eigenen GPUs.

## Verbundene Konzepte

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
