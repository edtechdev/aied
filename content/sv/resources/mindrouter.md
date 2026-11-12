---
title: "MindRouter"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T12:13:00-05:00"
type: resource
summary: "En Apache-2.0-gateway för inferens från University of Idaho som frontar ett campuskluster av vLLM- och Ollama-GPU-noder bakom ett OpenAI-kompatibelt API och lägger till rättvis schemaläggning, tokenkvoter per användare, SSO, granskningsloggning och live-övervakning av GPU och energi."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

De flesta campusdiskussioner om AI börjar med vilken modell man ska köpa och stannar före den svårare frågan: var den körs, vem som mäter den och vem som kan se loggarna. MindRouter är ett svar på den andra frågan. Det är en självdriftad gateway som sitter framför ett heterogent kluster av [[llm|LLM]]-servrar – vLLM- och Ollama-noder på GPU:er som institutionen äger – och exponerar ett API som talar OpenAI-, Anthropic- och Ollama-dialekterna och översätter mellan dem så att befintlig klientkod fortsätter fungera.

## Vad du kan göra med den

Peka ett verktyg mot gatewayen i stället för mot en leverantörsendpunkt. Bakom den hanterar MindRouter de delar en delad driftsättning behöver: rättvis schemaläggning med viktad deficit round robin, token- och förfrågningskvoter per användare, rollbaserad åtkomst med valfri SSO via Azure AD/Entra, Google, valfri OIDC-leverantör eller SAML 2.0, och full granskningsloggning av promptar, svar och artefakter. En GPU-sidovagnsagent rapporterar utnyttjande, minne, temperatur och effekt per nod, så en administratör kan se energikostnaden per förfrågan och tömma en backend på ett smidigt sätt när underhåll är dags. Den täcker mer än chatt – embeddings, vision, bild- och videogenerering, text-till-tal och tal-till-text, dokument-OCR – och levererar MCP-servrar och agentskickligheter för kodningsassistenter.

Anledningen till att ett college skulle bry sig är den projektet själv namnger: [[institutional-ai-infrastructure|institutionell AI-suveränitet]]. Promptar och dokument stannar på infrastruktur som institutionen driver i stället för att passera ett tredjepartsmoln, vilket är lättare att försvara inför ett fakultetsråd eller ett [[privacy|integritetskontor]] än ett personuppgiftsbiträdesavtal med en leverantör. Huruvida argumentet håller beror på om institutionen har GPU:erna, kraften och personalen – gatewayen gör lokal drift hanterbar, inte billig.

## Vem den är för

Forskningsdatagrupper och central IT med befintlig GPU-kapacitet, center för undervisning och lärande som vill ha en enda plats att mäta lärares och studenters användning, och administratörer som väger driftade företagsplattformar mot att köra inferens själva. Det är en Docker Compose-driftsättning med dokumenterad SSO-konfiguration och anpassad varumärkesprofilering, och den underhålls vid University of Idaho, där författaren presenterade den på PEARC '26; projektet hade 22 stjärnor och 3 forks i november 2026.

## Noteringar och förbehåll

Gratis och öppen källkod under Apache-2.0, men kostnaden flyttar i stället för att försvinna: hårdvara, el och personaltiden för att driva ett kluster. Programvaran är ung enligt infrastrukturmått – tre bidragsgivare, en enda ursprungsinstitution och utgåvor numrerade i hundratals taggar – så ett college bör pilottesta den vid sidan av en befintlig tjänst snarare än som den enda vägen till en modell. Publicerad utvärdering av schemaläggnings- och kvotbeteendet under verklig campusbelastning finns inte i repot; PEARC-artikeln är stället att leta på för författarnas egen redogörelse.

## Anslutna begrepp

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
