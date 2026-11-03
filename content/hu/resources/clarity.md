---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Nyílt forráskódú ügynökkészség és privát böngészőszerkesztő, amely a világosabb írás tizennyolc szabályát vázlat-, átírás- és bírálati móddá alakítja prózaszöveghez."
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
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Clarity** egy Agent Skillt párosít böngészőszerkesztővel, mindkettő a „megérdemli az olvasót” írás tizennyolc szabálya köré épül. A készség olyan kódoló ügynökökbe települ, mint a Claude Code és a Codex, a `npx skills add addyosmani/clarity` paranccsal, majd három módban működik: a bírálati mód kritizálja a vázlatot és érintetlenül hagyja a fájlt, az átírási mód helyben szerkeszti, az interjúmód pedig először kérdéseket tesz fel az írónak, és a válaszokból közösen ír. A [[feedback|visszajelzés]], amelyet az író kap, a tartalomra irányul, nem a stílusra. A szabályok azt kérdezik, kinek szól a szöveg és mit tud már az olvasó, állításokat kérnek alanyok helyett és konkrétumokat absztrakciók helyett, a tölteléket pedig inkább annak tulajdonítják, hogy a szerző nem tudja, miért van a szöveg, mint a szókincsnek.

A böngészőszerkesztő helyben, az oldalon fut, és nem tölti fel a vázlatot. Jelzi a géppel írt próza árulkodó jegyeit, az olvashatóságot és a tartalmi hiányokat, ami hasznossá teszi olyan szöveg átnézéséhez, amelyet [[generative-ai|generatív MI]] készített, mielőtt az olvasóhoz kerül. A projekt kimondja, hogy a cél az írás, amely felismerhetően a szerző sajátja marad, nem pedig olyan próza, amelyet az [[ai-detection|MI-detektálás]] átjutására alakítottak ki – ezt a különbséget az oktatók felismerik, amikor szabályzatot írnak a MI-támogatott [[writing-education|íráshoz]].

## Amit a bevezetés előtt tudni kell

A repó közzétesz egy értékelési protokollt, előtte–utána mintákat a `samples/` mappában és a készség mögötti referenciafájlokat, így a bíráló megnézheti, hogyan viselkednek a szabályok, ahelyett hogy elhinné az állítást; az itteni oldal nem ismétel meg semmilyen mért eredményt. A szerző Addy Osmani, a licenc MIT, a munka pedig független, nem valamely intézmény terméke. Fiatal és aktív: 2026 augusztusában készült, 54 commit, három kiadás, a legutóbbi 0.2.1-es verzióval abban a hónapban, és körülbelül 250 csillag a 2026. szeptemberi ellenőrzéskor. Három közreműködő vitt be változtatást. A készség utasításai abba az ügynökbe töltődnek be, amelyet az olvasó amúgy is futtat, így a szokásos [[prompt-engineering|promptmérnökségi]] fenntartások érvényesek: a bírálat minősége a kapott vázlattól függ.

## Kapcsolódó fogalmak
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
