---
title: "Zručnosti pre skutočných inženýrov"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Open-source zbierka malých, skladateľných agentných zručností Matta Pococka vrátane viacsedeníckej učiacej zručnosti, neúnavného vypytovania a návodu, ako písať dokumenty, ktoré agent zvládne."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**Skills for Real Engineers** je zverejnený adresár agentných zručností Matta Pococka: malé, skladateľné inštrukčné súbory, ktoré sa inštalujú do Claude Code, Codex alebo iného agenta a sú napísané tak, aby sa prispôsobovali, nie preberali celé. Väčšina zbierky slúži softvérovej práci, ale niekoľko zručností sú vzdelávacie nástroje postavené na výučbu a vypytovanie, nie na kód.

Najjasnejším príkladom je `teach`, ktorý beží naprieč viacerými sedeniami a pracovný priečinok berie ako stavový učebný pracovný priestor, takže pokrok študenta a otvorené otázky pretrvávajú medzi rozhovormi namiesto opätovného začiatku. `grill-me` a jeho základný primitív `grilling` neúnavne vypytujú používateľa o pláne, kým sa nevyrieši každá vetva — to je [[socratic-method|sokratovské vypytovanie]] ako znovupoužiteľný postup, nie ako nálada rozhovoru. `wait-what` reaguje v okamihu, keď správa nepadne na úrodnú pôdu, tým, že ju preformuluje v jednoduchom jazyku s chýbajúcim kontextom — ťah, ktorý každý vyučujúci pozná z toho, ako vysvetlenie na prvý raz minie. `writing-for-agents` pokrýva, ako písať dokumenty, ktoré [[prompt-engineering|agent]] dokáže sledovať, čo je dnes praktická podoba písania inštrukcií pre [[pedagogical-agent|AI]] kurzové materiály. `to-questionnaire` mení rozhodnutie na dotazník pre toho, kto ho vie zodpovedať, `handoff` zhutní rozhovor do dokumentu, z ktorého môže pokračovať iný agent, a `wizard` generuje interaktívnu prehliadku krokov, ktoré dokáže urobiť len človek.

## Čo treba vedieť pred nasadením

Všetko je [[open-source|open source]] pod MIT a zadarmo na použitie ako východisko pre miestnu [[ai-literacy|AI gramotnosť]] alebo [[self-directed-learning|samostatné štúdium]]. Osvojenie je veľké a rýchlo sa mení: približne 270 000 hviezd a 23 000 forkov pri kontrole v septembri 2026, s posledným commitom 18. septembra 2026. Výhrada sa týka rozsahu. Zručnosti predpokladajú pracovný kontext [[human-ai-collaboration|inženýra]], sú rozdelené do košov engineering, productivity, deprecated a in-progress, takže niektoré položky sú výslovne nedokončené alebo vyradené, a README slúži zároveň ako prihlásenie na newsletter. Učiace a vypytovacie zručnosti berte ako prenositeľnú časť a počítajte s tým, že ktorúkoľvek prepíšete, kým ju postavíte pred študentov.

## Prepojené pojmy
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
