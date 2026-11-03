---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Lokálne bežiaci asistent pre učiteľov, ktorý z vášho vlastného kurikula vytvára upraviteľné koncepty hodín, materiály pre študentov a slajdy s modelom, ktorý si vyberiete."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**Claw-ED** je lokálne bežiaci asistent pre výučbu, ktorý pripravuje koncepty hodín z vašich vlastných kurikulárnych materiálov. Učiteľ naimportuje svoje zdroje, požiada o hodinu a dostane upraviteľné koncepty spolu s materiálmi pre študentov a slajdmi, vygenerované modelom, ktorý si učiteľ vyberie, a nie jedným pevným dodávateľom.

## Čo s tým môžete robiť

Pracovný postup vedie od importu cez koncept a recenziu až po export a koncepty sa berú ako východiskové body, ktoré učiteľ upravuje, nie ako hotové podklady. Úlohy na hodiny sa radia do frontu a dajú sa obnoviť, takže dlhé generovanie, ktoré zlyhá, možno pokračovať namiesto začínania odznova, a vygenerované artefakty sa dajú stiahnuť. Svoje nástroje sprístupňuje aj [[agentic-ai|agentovi]] cez MCP server a dokáže sa pripojiť k Google Drive, takže škola ho môže zapojiť do existujúceho úložiska a plánovania.

Projekt je zámerne nezávislý od modelu. Dokumentuje lokálne modely Ollama, rozpočtové trasy OpenRouter aj hostované možnosti vedľa seba a jeho sprievodca modelmi má dátum, čo dáva jasne najavo, že odporúčania sú katalógové východiskové body, nie učiteľmi ohodnotené úsudky o kvalite.

## Poznámky a výhrady

Softvér je zadarmo a má [[open-source|otvorený kód]] pod licenciou MIT pre vlastný kód, hoci komponenty tretích strán si zachovávajú vlastné podmienky, a jeho prevádzka znamená platiť za vlastnú inferenciu modelu, ak používate hostovaný model. Projekt sa označuje ako učiteľmi recenzovaná beta verzia a v README otvorene hovorí, že prechod jeho CI nepreukazuje kvalitu výučby naprieč živými modelmi — a tak treba zelenú testovaciu sadu v tejto oblasti aj čítať: overuje softvér, nie [[pedagogy|pedagogiku]]. Udržiava ho MacxLabs a prijíma učiteľmi recenzované vzorové hodiny ako príspevky.

## Prepojené pojmy
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
