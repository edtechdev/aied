---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Open-source sbírka malých, skládatelných agentních dovedností Matta Pococka, včetně vícelekční výukové dovednosti, neúnavného dotazování a rad, jak psát dokumenty, které agent umí sledovat."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**Skills for Real Engineers** je zveřejněný adresář agentních dovedností Matta Pococka: malé, skládatelné instrukční soubory, které se instalují do Claude Code, Codex nebo jiného agenta a jsou psané tak, aby se přizpůsobovaly, nikoli přejímaly celé. Většina sbírky slouží softwarové práci, ale několik dovedností jsou vzdělávací nástroje postavené pro výuku a dotazování, nikoli pro kód.

Nejjasnějším příkladem je `teach`, který běží přes několik sezení a pracovní adresář bere jako stavový výukový prostor, takže pokrok studenta a otevřené otázky přetrvávají mezi rozhovory, místo aby se pokaždé začínalo znovu. `grill-me` a jeho základní primitiv `grilling` neúnavně zpovídají uživatele o plánu, dokud není vyřešena každá větev, což je [[socratic-method|sokratovské dotazování]] jako opakovaně použitelný postup, nikoli jako konverzační nálada. `wait-what` reaguje ve chvíli, kdy zpráva nedopadne, tím, že ji znovu podá v prostém jazyce s chybějícím kontextem — tah, který každý vyučující zná z toho, když vysvětlení napoprvé mine. `writing-for-agents` pokrývá, jak psát dokumenty, které [[prompt-engineering|agent]] umí sledovat, což je dnes praktická podoba psaní instrukcí pro [[pedagogical-agent|AI]] výukové materiály. `to-questionnaire` mění rozhodnutí v dotazník pro toho, kdo na něj umí odpovědět, `handoff` zhutní rozhovor do dokumentu, z něhož může pokračovat jiný agent, a `wizard` generuje interaktivní průchod kroky, které umí provést jen člověk.

## Co vědět, než jej přijmete

Vše je [[open-source|open source]] pod MIT a zdarma k použití jako výchozí bod pro místní [[ai-literacy|gramotnost v oblasti AI]] nebo [[self-directed-learning|samostatné studium]]. Osvojení je rozsáhlé a rychlé: při kontrole v září 2026 zhruba 270 000 hvězd a 23 000 forků, s posledním commitem 18. září 2026. Výhrada se týká rozsahu. Dovednosti předpokládají pracovní kontext [[human-ai-collaboration|inženýra]], jsou rozdělené do skupin engineering, productivity, deprecated a in-progress, takže některé položky jsou výslovně nedokončené nebo vyřazené, a README zároveň slouží jako přihláška k odběru newsletteru. Berte výukové a dotazovací dovednosti jako přenositelnou část a počítejte s tím, že kteroukoli z nich před položením před studenty přepíšete.

## Související pojmy
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
