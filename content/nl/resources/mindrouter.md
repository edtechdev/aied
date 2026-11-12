---
title: "MindRouter"
created: "2026-11-12T19:24:00-05:00"
updated: "2026-11-12T19:24:00-05:00"
type: resource
summary: "Een Apache-2.0-inferentiegateway van de Universiteit van Idaho die een campuscluster van vLLM- en Ollama-GPU-nodes achter één OpenAI-compatibele API zet, met eerlijke planning, tokenquota per gebruiker, SSO, auditlogging en live monitoring van GPU en energie."
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
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

De meeste campusgesprekken over AI beginnen bij welk model je koopt en stoppen vóór de moeilijkere vraag: waar het draait, wie het meet en wie de logs kan zien. MindRouter is een antwoord op die tweede vraag. Het is een zelfgehoste gateway vóór een heterogeen cluster van [[llm|LLM]]-servers — vLLM- en Ollama-nodes op GPU's die de instelling bezit — die één API aanbiedt die de dialecten van OpenAI, Anthropic en Ollama spreekt en daartussen vertaalt, zodat bestaande clientcode blijft werken.

## Wat je ermee kunt doen

Richt een tool op de gateway in plaats van op het endpoint van een leverancier. Daarachter regelt MindRouter de delen die een gedeelde uitrol nodig heeft: eerlijke planning met gewogen deficit round robin, token- en verzoekquota per gebruiker, rolgebaseerde toegang met optionele SSO via Azure AD/Entra, Google, elke OIDC-provider of SAML 2.0, en volledige auditlogging van prompts, antwoorden en artefacten. Een GPU-sidecar-agent rapporteert gebruik, geheugen, temperatuur en vermogen per node, zodat een beheerder de energiekosten per verzoek kan zien en een backend netjes kan leegtrekken wanneer onderhoud nodig is. Het dekt meer dan chat — embeddings, vision, beeld- en videogeneratie, tekst-naar-spraak en spraak-naar-tekst, document-OCR — en levert MCP-servers en agentskills voor codeassistenten.

De reden waarom een college dit zou interesseren, is degene die het project noemt: [[institutional-ai-infrastructure|institutionele AI-soevereiniteit]]. Prompts en documenten blijven op infrastructuur die de instelling zelf beheert in plaats van door een cloud van derden te gaan, wat makkelijker te verdedigen is tegenover een faculteitsraad of een [[privacy|privacyafdeling]] dan een verwerkersovereenkomst met een leverancier. Of dat argument standhoudt, hangt af van of de instelling de GPU's, de stroom en het personeel heeft — de gateway maakt lokaal hosten beheersbaar, niet goedkoop.

## Voor wie het bedoeld is

Onderzoekscomputing en centrale IT met bestaande GPU-capaciteit, centra voor onderwijs en leren die één plek willen om het gebruik van docenten en studenten te meten, en beheerders die gehoste enterpriseplatforms afwegen tegen zelf inferentie draaien. Het is een Docker Compose-uitrol met gedocumenteerde SSO-configuratie en eigen branding, en wordt onderhouden aan de Universiteit van Idaho, waar de auteur het presenteerde op PEARC '26; het project heeft 22 sterren en 3 forks per november 2026.

## Notities en kanttekeningen

Gratis en open source onder Apache-2.0, maar de kosten verschuiven in plaats van te verdwijnen: hardware, elektriciteit en de personeelstijd om een cluster te draaien. De software is jong naar de maatstaven van infrastructuur — drie bijdragers, één instelling van herkomst en releases genummerd in honderden tags — dus een college zou het naast een bestaande dienst moeten beproeven en niet als enige weg naar een model. Gepubliceerde evaluatie van het plannings- en quotagedrag onder echte campusbelasting staat niet in de repository; het PEARC-artikel is de plek voor het eigen verhaal van de auteurs.

## Gerelateerde concepten

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
