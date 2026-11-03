---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Open-source Agent Skill a soukromý prohlížečový editor, které mění osmnáct pravidel pro srozumitelnější psaní na režimy návrhu, přepisu a revize textu."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**Clarity** spojuje Agent Skill s prohlížečovým editorem, oba postavené kolem osmnácti pravidel pro psaní, které „si zaslouží svého čtenáře“. Dovednost se instaluje do kódovacích agentů, jako jsou Claude Code a Codex, pomocí `npx skills add addyosmani/clarity`, a pak pracuje ve třech režimech: režim revize zkritizuje koncept a soubor nechá nedotčený, režim přepisu upravuje koncept přímo v místě a režim rozhovoru se nejprve ptá pisatele a poté píše společně z jeho odpovědí. [[feedback|Zpětná vazba]], kterou pisatel dostane, míří nejprve na obsah a až potom na styl. Pravidla se ptají, pro koho je text určen a co už tato osoba ví, tlačí na tvrzení místo témat a na konkrétnosti místo abstrakcí a výplň chápou jako problém nevědění, k čemu text slouží, nikoli jako problém slovní zásoby.

Prohlížečový editor běží lokálně ve stránce a koncept nikam nenahrává. Ukazuje znaky strojově psané prózy, čitelnost a mezery v obsahu, což z něj činí užitečný nástroj pro revizi textu, který vytvořila [[generative-ai|generativní AI]], než se dostane ke čtenáři. Projekt výslovně říká, že cílem je psaní, které zůstává rozpoznatelně autorovo vlastní, a nikoli próza zkonstruovaná tak, aby prošla [[ai-detection|detekcí AI]]; tento rozdíl vyučující poznají, když stanovují pravidla pro [[writing-education|psaní]] s asistencí AI.

## Co vědět, než jej přijmete

Repozitář zveřejňuje hodnoticí protokol, vzorky před a po ve složce `samples/` a referenční soubory, na nichž dovednost stojí, takže recenzent může zkontrolovat, jak se pravidla chovají, místo aby tvrzení přijal na víru; tato stránka žádný změřený výsledek neopakuje. Autorem je Addy Osmani, licence je MIT a jde o nezávislou práci, nikoli o produkt nějaké instituce. Projekt je mladý a aktivní: vznikl v srpnu 2026, má 54 commitů, tři vydání s nejnovější verzí 0.2.1 z toho září a při kontrole v září 2026 zhruba 250 hvězd. Změny přinesli tři přispěvatelé. Pokyny dovednosti se načítají do agenta, kterého čtenář už používá, takže platí obvyklé výhrady k [[prompt-engineering|prompt engineeringu]]: kvalita kritiky závisí na konceptu, který se mu předloží.

## Související pojmy
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
