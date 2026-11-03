---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Open-source Agent Skill a súkromný editor v prehliadači, ktoré menia osemnásť pravidiel zrozumiteľného písania na režimy konceptu, prepisu a recenzie textu."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**Clarity** spája Agent Skill s editorom v prehliadači, oba postavené na osemnástich pravidlách pre písanie, ktoré „si zaslúži svojho čitateľa“. Skill sa inštaluje do kódovacích agentov, ako sú Claude Code a Codex, príkazom `npx skills add addyosmani/clarity`, a potom pracuje v troch režimoch: režim recenzie kritizuje koncept a súbor necháva nedotknutý, režim prepisu upravuje koncept priamo v súbore a režim rozhovoru sa najprv pýta autora a potom píše spoločne z jeho odpovedí. [[feedback|Spätná väzba]], ktorú autor dostane, mieri na podstatu skôr než na štýl. Pravidlá sa pýtajú, pre koho je text určený a čo už čitateľ vie, tlačia na tvrdenia namiesto tém a na konkrétnosti namiesto abstrakcií a vatu berú ako problém nevedomosti o tom, na čo text slúži, nie ako problém slovnej zásoby.

Editor v prehliadači beží lokálne na stránke a koncept neodosiela. Hlási príznaky strojovo písanej prózy, čitateľnosť a medzery v podstate, čo ho robí užitočným na kontrolu textu, ktorý vytvorila [[generative-ai|generatívna AI]], skôr než sa dostane k čitateľovi. Projekt výslovne hovorí, že cieľom je písanie, ktoré zostáva rozpoznateľne vlastné autorovi, a nie próza skonštruovaná tak, aby prešla [[ai-detection|detekciou AI]] — rozdiel, ktorý vyučujúci poznajú, keď stanovujú politiku pre [[writing-education|písanie]] s podporou AI.

## Čo treba vedieť pred nasadením

Repozitár zverejňuje protokol hodnotenia, vzorky pred a po v priečinku `samples/` a referenčné súbory za skillom, takže recenzent môže preskúmať, ako sa pravidlá správajú, namiesto toho, aby tvrdeniu uveril; táto stránka neopakuje žiadny nameraný výsledok. Autorom je Addy Osmani, licencia je MIT a ide o nezávislú prácu, nie o produkt nejakej inštitúcie. Je mladý a aktívny: vznikol v auguste 2026, má 54 commitov, tri vydania s najnovším 0.2.1 z toho septembra a približne 250 hviezd pri kontrole v septembri 2026. Zmeny priniesli traja prispievatelia. Pokyny skilla sa načítajú do agenta, ktorého čitateľ už používa, takže platia obvyklé výhrady k [[prompt-engineering|prompt inžinierstvu]]: kvalita kritiky závisí od konceptu, ktorý sa mu predloží.

## Prepojené pojmy
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
