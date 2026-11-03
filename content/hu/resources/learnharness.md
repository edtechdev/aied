---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Ingyenes, nyílt forráskódú (AGPL-3.0) asztali alkalmazás, amelyben MI-ügynökök mérik fel, mit ért már a tanuló, függőségi térképet terveznek a célig, egyszerre egy érvelési lépést tanítanak, és adaptálják a gyakorlást – állandósult tudásgráffal, amelyet a későbbi munkamenetek olvasnak a nulláról kezdés helyett."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **LearnHarness** asztali alkalmazás [[agentic-ai|ügynök által támogatott]] tanuláshoz, amely a leckét [[prior-knowledge|a tanuló már meglévő értése]] köré szervezi, nem témalista köré. A projekt négy lépést ír le: **mérés**, a cél által feltételezett gondolatok kipróbálása, hogy kiderüljön, hol végződik az értés; **tervezés**, a célig vezető függőségi térkép levezetése és óratérképként való megjelenítése; **tanítás**, egyszerre egy érvelési lépés kidolgozása előrejelzés–magyarázat–ellenőrzés ritmusban, hogy a zavarok kijavuljanak, mielőtt bármi épülne rájuk; és **gyakorlás**, a tanuló saját nehézségeire célzott feladatfolyam.

## Mire használható

A megkülönböztető bemenet a gondolkodási mező: a tanulók leírják vagy lediktálják az érvelésüket és bizonytalanságukat, nem csak válaszolnak, amit a projekt úgy kezel, mint ahogy az ügynök az érvelést elképzeli, nem pedig helyes–helytelen nyilvántartásként. Kérdéseket a háttérben is kutathat, vizuális magyarázatokat generálhat és interaktív bemutatókat építhet.

Ami felhalmozódik, az az állítások és érvelési láncok [[knowledge-graph|tudásgráfja]], amely visszalinkel a forrás-munkameneteihez, és amelyet a későbbi tanító és gyakorló ügynökök kontextusként olvasnak; jegyzetek importálhatók. A projekt szerint a gráf gondolatokat és kapcsolatokat tárol, nem képességértékeléseket.

## Kinek szól

Önállóan tanulók, akik nehéz anyagon dolgoznak, valamint oktatók és fejlesztők, akik látni akarják, milyen egy ügynökre épülő [[intelligent-tutoring|MI-tutor]], amikor a promptjai és állapota átvizsgálhatók. TypeScriptben íródott, forrásból fut, tesztjei pedig dokumentáltan determinisztikusak, modellhívások nélkül.

## Megjegyzések és fenntartások

Az ingyenesség a szoftverre vonatkozik, nem a következtetésre: a tanulók hozzák a szolgáltatói kulcsokat, egy előfizetést, egy helyi Claude Code CLI-t vagy bármely OpenAI-kompatibilis végpontot, és felár nélkül fizetnek a szolgáltatónak; egy élő mérő csak az ismert API-költségeket becsüli. A rekordok, csevegések és kulcsok sima fájlként a gépen maradnak, de a projekt figyelmeztet, hogy a helyi tárolás nem jelent offline feldolgozást, mivel a modellkérések, az opcionális diktálás és a webes kutatás egyaránt külső szolgáltatásokat ér el. A Windows x64-es telepítője aláíratlan, így a Windows figyelmeztetni fog. Hatékonysági vizsgálatot nem jelentettek be, így az eset a megadott indokláson nyugszik, nem mért eredményeken; a repónak körülbelül 4 800 csillaga volt a 2026. november 2-i ellenőrzéskor.

## Kapcsolódó fogalmak

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
