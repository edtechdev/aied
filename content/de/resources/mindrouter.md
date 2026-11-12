---
title: "MindRouter"
created: "2026-11-12T11:16:00-05:00"
updated: "2026-11-12T11:16:00-05:00"
type: resource
summary: "Ein Apache-2.0-Inferenz-Gateway der University of Idaho, das einen Campus-Cluster aus vLLM- und Ollama-GPU-Knoten hinter einer OpenAI-kompatiblen API bündelt und faire Planung, Token-Quoten pro Nutzer, SSO, Audit-Protokollierung sowie Live-Überwachung von GPUs und Energie ergänzt."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

Die meisten KI-Diskussionen auf dem Campus beginnen mit der Frage, welches Modell gekauft wird, und enden vor der schwierigeren Frage: wo es läuft, wer es misst und wer die Protokolle sehen kann. MindRouter ist eine Antwort auf diese zweite Frage. Es ist ein selbst gehostetes Gateway vor einem heterogenen Cluster von [[llm|LLM]]-Servern — vLLM- und Ollama-Knoten auf GPUs, die der Einrichtung gehören — und stellt eine API bereit, die die Dialekte von OpenAI, Anthropic und Ollama spricht und zwischen ihnen übersetzt, damit bestehender Client-Code weiter funktioniert.

## Was man damit tun kann

Richten Sie ein Werkzeug auf das Gateway statt auf einen Anbieter-Endpunkt. Dahinter übernimmt MindRouter die Teile, die eine gemeinsame Bereitstellung braucht: faire Planung mit gewichtetem Deficit Round Robin, Token- und Anfragequoten pro Nutzer, rollenbasierten Zugriff mit optionalem SSO über Azure AD/Entra, Google, jeden OIDC-Anbieter oder SAML 2.0 sowie vollständige Audit-Protokollierung von Prompts, Antworten und Artefakten. Ein GPU-Sidecar-Agent meldet Auslastung, Speicher, Temperatur und Leistung pro Knoten, sodass ein Administrator die Energiekosten pro Anfrage sieht und ein Backend bei anstehender Wartung sauber entleeren kann. Es deckt mehr als Chat ab — Embeddings, Vision, Bild- und Videogenerierung, Text-to-Speech und Speech-to-Text, Dokument-OCR — und liefert MCP-Server und Agent Skills für Coding-Assistenten.

Der Grund, warum ein College sich dafür interessieren würde, ist der, den das Projekt nennt: [[institutional-ai-infrastructure|institutionelle KI-Souveränität]]. Prompts und Dokumente bleiben auf Infrastruktur, die die Einrichtung betreibt, statt durch eine Drittanbieter-Cloud zu laufen, was gegenüber einem Fakultätssenat oder einer [[privacy|Datenschutzstelle]] leichter zu verteidigen ist als ein Auftragsverarbeitungsvertrag mit einem Anbieter. Ob das Argument trägt, hängt davon ab, ob die Einrichtung die GPUs, den Strom und das Personal hat — das Gateway macht lokales Hosting beherrschbar, nicht billig.

## Für wen es gedacht ist

Research-Computing- und zentrale IT-Gruppen mit vorhandener GPU-Kapazität, Zentren für Lehre und Lernen, die an einer Stelle die Nutzung von Lehrenden und Studierenden messen wollen, und Administratoren, die gehostete Enterprise-Plattformen gegen den eigenen Betrieb von Inferenz abwägen. Es ist eine Docker-Compose-Bereitstellung mit dokumentierter SSO-Konfiguration und eigenem Branding, gepflegt an der University of Idaho, wo der Autor es auf der PEARC '26 vorstellte; das Projekt hatte im November 2026 22 Sterne und 3 Forks.

## Anmerkungen und Vorbehalte

Kostenlos und Open Source unter Apache-2.0, aber die Kosten verschieben sich, statt zu verschwinden: Hardware, Strom und Personalzeit für den Betrieb eines Clusters. Die Software ist nach Infrastrukturmaßstäben jung — drei Beitragende, eine einzige Herkunftseinrichtung und Releases, deren Tags in die Hunderte gehen —, also sollte ein College sie neben einem bestehenden Dienst pilotieren und nicht als einzigen Weg zu einem Modell. Eine veröffentlichte Evaluation des Planungs- und Quotenverhaltens unter realer Campuslast findet sich nicht im Repository; das PEARC-Paper ist der Ort, an dem die eigene Darstellung der Autoren zu suchen ist.

## Verbundene Konzepte

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
