---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "165 bizonyítékokra alapozott ügynökkészség könyvtára pedagógiából, tanulástudományból, tananyagból és értékelésből, Claude-hoz, Codexhez és Hermeshez csomagolva."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Az **Education Agent Skills** 165 ügynökkészség könyvtára tanároknak, iskolavezetőknek és oktatási eszközöket építőknek. A készségek húsz tartományba rendeződnek, amelyek a pedagógiát, a tanulástudományt, a [[curriculum-design|tananyagot]], az értékelést és az újragenerálást ölelik fel, és mindegyik úgy íródott, hogy egy [[agentic-ai|ügynök]] töltse be, ne dokumentumként olvassák.

## Mire használható

A készségek Claude Code-ba, Codexbe és Hermesbe települnek, pluginként vagy a mappák másolásával, így ugyanaz a könyvtár több ügynökfelületen működik. Egy hosztolt MCP-szerver eszközként teszi elérhetővé a gyűjteményt azoknak az ügynököknek, amelyek nem tudnak helyben készségeket telepíteni, a repó pedig nyilvántartást és előre felépített csomagot is szállít, hogy a szerver a telepítéskor az egyes fájlok olvasása nélkül szolgálhassa ki a gyűjteményt.

A projekt megkülönböztető állítása az alapozás: a készségek idézik a bizonyítékot, amelyen nyugszanak, és a repó saját története mutatja, hogy ezt a fegyelmet érvényesítik, nem csak hirdetik – beleértve egy beolvasztott javítást, amely eltávolított egy nem támogatott hivatkozást, és helyesbítette egy idézett tanulmányban szereplő, tesztelt védőintézkedés leírását.

## Megjegyzések és fenntartások

Az oktatási készségek, a dokumentáció és a tananyagok CC BY-SA 4.0 licenc alatt állnak, így az újrafelhasználás és az adaptálás nyitott, a származékoknak viszont ugyanezt a licencet kell viselniük. Két működési részlet számít, ha telepíti. A hosztolt MCP-végpont tokeneket kér, nem nyitott bárki számára, és mivel a szerver egy commitolt pillanatképet szolgál ki, nem a SKILL.md fájlokat, egy újonnan hozzáadott készség nem jelenik meg az élő szerveren akkor sem, ha újratelepít, hacsak nem építi újra és commitolja a csomagot. A könyvtárat Gareth Manning, pedagógus és tananyagtervező építi, a licencfeltételek pedig kifejezetten az oktatási tartalomra vonatkoznak.

## Kapcsolódó fogalmak

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
