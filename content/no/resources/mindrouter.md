---
title: "MindRouter"
created: "2026-11-12T11:31:00-05:00"
updated: "2026-11-12T12:14:00-05:00"
type: resource
summary: "En Apache-2.0-inferensgateway fra University of Idaho som fronter et campusklynge av vLLM- og Ollama-GPU-noder bak et OpenAI-kompatibelt API, og legger til rettferdig planlegging, tokenkvoter per bruker, SSO, revisjonslogging og sanntidsovervåking av GPU og energi."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

De fleste campusdiskusjoner om AI starter med hvilken modell man skal kjøpe, og stopper før det vanskeligere spørsmålet: hvor den kjører, hvem som måler den, og hvem som kan se loggene. MindRouter er et svar på det andre spørsmålet. Det er en selvdriftet gateway som sitter foran en heterogen klynge av [[llm|LLM]]-servere – vLLM- og Ollama-noder på GPU-er institusjonen eier – og eksponerer ett API som snakker OpenAI-, Anthropic- og Ollama-dialektene, og oversetter mellom dem slik at eksisterende klientkode fortsatt virker.

## Hva du kan gjøre med den

Pek et verktøy mot gatewayen i stedet for mot et leverandørendepunkt. Bak den håndterer MindRouter delene en delt distribusjon trenger: rettferdig planlegging med vektet deficit round robin, token- og forespørselskvoter per bruker, rollebasert tilgang med valgfri SSO via Azure AD/Entra, Google, en hvilken som helst OIDC-leverandør eller SAML 2.0, og full revisjonslogging av prompts, svar og artefakter. En GPU-sidevognagent rapporterer utnyttelse, minne, temperatur og effekt per node, slik at en administrator kan se energikostnaden per forespørsel og tømme en backend på en smidig måte når vedlikehold nærmer seg. Den dekker mer enn chat – embeddings, visjon, bilde- og videogenerering, tekst-til-tale og tale-til-tekst, dokument-OCR – og leverer MCP-servere og agentferdigheter for kodeassistenter.

Grunnen til at et college skulle bry seg, er den prosjektet selv navngir: [[institutional-ai-infrastructure|institusjonell AI-suverenitet]]. Prompts og dokumenter blir på infrastruktur institusjonen driver i stedet for å passere en tredjepartssky, noe som er lettere å forsvare for et fakultetsråd eller et [[privacy|personvernkontor]] enn en databehandleravtale med en leverandør. Om argumentet holder, avhenger av om institusjonen har GPU-ene, kraften og personalet – gatewayen gjør lokal drift håndterbar, ikke billig.

## Hvem den er for

Forskningsdatagrupper og sentral IT med eksisterende GPU-kapasitet, sentre for undervisning og læring som vil ha ett sted å måle underviseres og studenters bruk, og administratorer som veier driftede bedriftsplattformer mot å kjøre inferens selv. Det er en Docker Compose-distribusjon med dokumentert SSO-konfigurasjon og tilpasset merkevareprofilering, og den vedlikeholdes ved University of Idaho, der forfatteren presenterte den på PEARC '26; prosjektet hadde 22 stjerner og 3 forks i november 2026.

## Merknader og forbehold

Gratis og åpen kildekode under Apache-2.0, men kostnaden flytter seg i stedet for å forsvinne: maskinvare, strøm og personaltiden med å drive en klynge. Programvaren er ung etter infrastrukturmålestokk – tre bidragsytere, én opprinnelig institusjon og utgivelser nummerert i hundrevis av tagger – så et college bør pilotere den ved siden av en eksisterende tjeneste snarere enn som den eneste veien til en modell. Publisert evaluering av planleggings- og kvotatferden under reell campuslast finnes ikke i repoet; PEARC-artikkelen er stedet å lete for forfatternes egen redegjørelse.

## Tilknyttede begreper

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
