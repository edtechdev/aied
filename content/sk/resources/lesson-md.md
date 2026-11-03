---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Otvorený čisto textový formát pre blokové eLearning hodiny plus agentná zručnosť, ktorá v tomto formáte píše hodiny, hodnotenia aj celé balíky kurzov."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**LESSON.md** je otvorený formát pre blokový eLearning obsah: Markdown súbor s YAML frontmatterom a direktívami `:::` pre text, obrázky a kontroly vedomostí, čitateľný pre človeka a spracovateľný každým nástrojom. Existuje preto, že obsah kurzov býva uzamknutý v jednom nástroji na tvorbu, a preto, že [[llm|veľké jazykové modely]] dokážu pomôcť len s hodinami, ktoré skutočne vedia prečítať.

## Čo s tým môžete robiť
Napíšte hodinu v ľubovoľnom textovom editore a naimportujte ju do akéhokoľvek nástroja, ktorý formát podporuje, bez kopírovania a preformátovania. Interaktívne časti — výberové kontroly vedomostí s limitom pokusov a spätnou väzbou na úrovni odpovede — sú vyjadrené jednoduchými vlastnosťami namiesto grafického rozhrania. Sprievodný `ASSESSMENT.md` v koreni balíka sa stáva hodnoteným [[assessment|hodnotením]] kurzu. Projekt tiež dodáva zručnosť `lesson-md`, ktorá naučí Claude, Codex alebo iného [[agentic-ai|agenta]] formát, takže opis kurzu v prirodzenom jazyku vráti hodiny, hodnotenia a celý balík.

## Pre koho je to určené
Pre inštrukčných dizajnérov a tvorcov kurzov, ktorí chcú, aby ich obsah prežil výmenu nástroja, pre dodávateľov eLearningu, ktorí chcú formát importu a exportu, ktorému ich používatelia už rozumejú, a pre každého, kto na čitateľnom formáte stavia tvorbu s podporou AI. Medzi prispievateľov patrí Dan Bashaw z LXD Integral a formát má verejný changelog až po v1.8.

## Prepojené pojmy

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
