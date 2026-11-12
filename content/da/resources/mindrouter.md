---
title: "MindRouter"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "En Apache-2.0-inference-gateway fra University of Idaho, der sætter et campusklynge af vLLM- og Ollama-GPU-noder foran ét OpenAI-kompatibelt API og tilføjer fair-share-planlægning, tokenkvoter pr. bruger, SSO, revisionslogning og live GPU- og energiovervågning."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

De fleste campusdiskussioner om AI begynder med, hvilken model man skal købe, og stopper før det sværere spørgsmål: hvor den kører, hvem der måler den, og hvem der kan se loggene. MindRouter er et svar på det andet spørgsmål. Det er en selvhostet gateway, der står foran en heterogen klynge af [[llm|LLM]]-servere — vLLM- og Ollama-noder på GPU'er, institutionen ejer — og eksponerer ét API, der taler OpenAI-, Anthropic- og Ollama-dialekterne og oversætter mellem dem, så eksisterende klientkode fortsat virker.

## Hvad du kan gøre med den

Peg et værktøj mod gatewayen i stedet for mod en leverandørendpoint. Bag den håndterer MindRouter de dele, en delt installation har brug for: fair-share-planlægning med vægtet deficit round robin, token- og anmodningskvoter pr. bruger, rollebaseret adgang med valgfri SSO via Azure AD/Entra, Google, enhver OIDC-udbyder eller SAML 2.0 samt fuld revisionslogning af prompts, svar og artefakter. En GPU-sidecar-agent rapporterer udnyttelse, hukommelse, temperatur og effekt pr. node, så en administrator kan se energiforbruget pr. anmodning og tømme en backend pænt, når vedligeholdelse er nødvendig. Den dækker mere end chat — embeddings, vision, billed- og videogenerering, tekst-til-tale og tale-til-tekst, dokument-OCR — og leverer MCP-servere og agentfærdigheder til kodeassistenter.

Grunden til, at et college skulle interessere sig for det, er den, projektet selv nævner: [[institutional-ai-infrastructure|institutionel AI-suverænitet]]. Prompts og dokumenter bliver på infrastruktur, institutionen driver, i stedet for at passere gennem en tredjeparts cloud, hvilket er lettere at forsvare over for et fakultetssenat eller et [[privacy|databeskyttelses]]kontor end en databehandleraftale med en leverandør. Om argumentet holder, afhænger af, om institutionen har GPU'erne, strømmen og personalet — gatewayen gør lokal hosting håndterbar, ikke billig.

## Hvem den er til

Forskningscomputing- og centrale IT-grupper med eksisterende GPU-kapacitet, centre for undervisning og læring, der vil have ét sted at måle fakultetets og de studerendes brug, og administratorer, der vejer hostede enterprise-platforme mod selv at køre inference. Det er en Docker Compose-installation med dokumenteret SSO-konfiguration og eget branding, og den vedligeholdes på University of Idaho, hvor forfatteren præsenterede den på PEARC '26; projektet har 22 stjerner og 3 forks pr. november 2026.

## Noter og forbehold

Gratis og open source under Apache-2.0, men omkostningerne flytter sig i stedet for at forsvinde: hardware, elektricitet og personaletid til at køre en klynge. Softwaren er ung efter infrastrukturstandarder — tre bidragydere, én oprindelig institution og udgivelser nummereret i hundredvis af tags — så et college bør pilotere den ved siden af en eksisterende tjeneste snarere end som den eneste vej til en model. Der er ingen offentliggjort evaluering af planlægnings- og kvoteadfærd under reel campusbelastning i repositoriet; PEARC-papiret er stedet at lede efter forfatternes egen redegørelse.

## Relaterede begreper

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
