---
title: "MindRouter"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "Inferenčná brána s licenciou Apache-2.0 z University of Idaho, ktorá stavia kampusový klaster GPU uzlov vLLM a Ollama za jedno rozhranie API kompatibilné s OpenAI a pridáva spravodlivé plánovanie, kvóty tokenov na používateľa, SSO, audit logovanie a živé sledovanie GPU a energie."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Väčšina kampusových diskusií o AI začína tým, ktorý model kúpiť, a končí pred ťažšou otázkou: kde beží, kto ho meria a kto vidí do logov. MindRouter je odpoveďou na tú druhú otázku. Je to samohostovaná brána, ktorá stojí pred heterogénnym klastrom serverov [[llm|LLM]] — uzlov vLLM a Ollama na GPU, ktoré inštitúcia vlastní — a vystavuje jedno API, ktoré hovorí dialektmi OpenAI, Anthropic a Ollama a prekladá medzi nimi, takže existujúci klientsky kód funguje ďalej.

## Čo s ňou môžete robiť

Nasmerujte nástroj na bránu namiesto koncového bodu dodávateľa. Za ňou MindRouter rieši časti, ktoré zdieľané nasadenie potrebuje: spravodlivé plánovanie s váženým deficitným round robinom, kvóty tokenov a požiadaviek na používateľa, prístup podľa rolí s voliteľným SSO cez Azure AD/Entra, Google, akéhokoľvek poskytovateľa OIDC alebo SAML 2.0 a úplné audit logovanie promptov, odpovedí a artefaktov. Agent typu sidecar pre GPU hlási využitie, pamäť, teplotu a spotrebu každého uzla, takže administrátor vidí energetické náklady na požiadavku a pri údržbe môže backend elegantne vypustiť. Pokrýva viac než chat — embeddingy, videnie, generovanie obrázkov a videa, syntézu reči a prepis reči, OCR dokumentov — a dodáva MCP servery a zručnosti agentov pre kódovacích asistentov.

Dôvod, prečo by to vysokú školu malo zaujímať, je ten, ktorý projekt pomenúva: [[institutional-ai-infrastructure|inštitucionálna AI suverenita]]. Prompty a dokumenty zostávajú na infraštruktúre, ktorú inštitúcia prevádzkuje, namiesto prechodu cez cloud tretej strany, čo sa ľahšie obhajuje pred akademickým senátom alebo kanceláriou pre [[privacy|ochranu údajov]] než dohoda o spracovaní údajov s dodávateľom. Či ten argument obstojí, závisí od toho, či inštitúcia má GPU, energiu a personál — brána robí lokálny hosting zvládnuteľným, nie lacným.

## Pre koho je určená

Výskumné výpočtové a centrálne IT skupiny s existujúcou GPU kapacitou, centrá výučby a učenia, ktoré chcú jedno miesto na meranie používania učiteľov a študentov, a administrátori, ktorí vážia hostované podnikové platformy proti vlastnej inferencii. Ide o nasadenie cez Docker Compose so zdokumentovanou konfiguráciou SSO a vlastným brandingom, udržiavané na University of Idaho, kde ho autor predstavil na PEARC '26; projekt má k novembru 2026 22 hviezdičiek a 3 forky.

## Poznámky a upozornenia

Bezplatný a open source pod Apache-2.0, ale náklady sa presúvajú, nie miznú: hardvér, elektrina a čas personálu na prevádzku klastra. Softvér je na pomery infraštruktúry mladý — traja prispievatelia, jediná zakladajúca inštitúcia a vydania číslované v stovkách tagov — takže vysoká škola by ho mala pilotovať vedľa existujúcej služby, nie ako jedinú cestu k modelu. Publikované hodnotenie správania plánovania a kvót pri reálnej kampusovej záťaži v repozitári nie je; práca z PEARC je miesto, kde hľadať vlastný opis autorov.

## Prepojené pojmy

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
