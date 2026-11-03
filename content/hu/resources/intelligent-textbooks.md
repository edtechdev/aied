---
title: "Intelligens tankönyvek építése"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCreary nyílt forráskódú útmutatója intelligens tankönyvek építéséhez: online tankönyvek kereséssel, navigációval, szójegyzékkel, kvízekkel, fogalomgráfokkal és beágyazott szimulációkkal, MkDocs Material és generatív MI segítségével, valamint MI-vel generált, interaktív MicroSimek kísérőgyűjteményével."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Az **Intelligens tankönyvek** oldal Dan McCreary lépésről lépésre haladó útmutatója *intelligens tankönyvek* építéséhez – olyan online tankönyvekhez, amelyek túllépnek a statikus PDF-eken azzal, hogy keresést, oldalnavigációt, szójegyzéket, tartalomjegyzéket, kvízkezelést, renderelt képleteket, közösségimédia-előnézeteket, linkellenőrzést és egy könnyen vizualizálható **fogalomgráfot** adnak hozzá, amely egy kurzus összes fogalmát és azok függőségeit mutatja. Az útmutató amellett érvel, hogy sok mai kurzus profitálna a jó minőségű, ilyen funkciójú online tankönyvekből, és megmutatja, hogyan építsék meg őket az [MkDocs](http://mkdocs.com/) buildrendszerrel, a Material témával és generatív MI-vel a tartalom létrehozásához és karbantartásához.

A meghatározó lépés, hogy a tankönyv *Markdownban íródik és MI generálja* – az [[vibe-coding|MI-támogatott szerzőség]] minta konkrét esete, [[curriculum-design|kurzustartalomra]] alkalmazva: ahelyett hogy egy nagy oldalt kézzel tartanánk karban, leírja a kurzust, és a generatív MI-re bízza az oldalak előállítását és karbantartását, az eszközlánc pedig kezeli a navigációt, a keresést és a fogalomgráfot. Egy kísérő [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) könyvtár azt állítja, hogy a kurzusleírásból egy 2. szintű tankönyv felépítéséhez szükséges feladatok több mint 90%-át automatizálja.

## Egy kapcsolódó forrás: MicroSimek

Az útmutató természetes társa McCreary **MicroSims** könyvtára a <https://dmccreary.github.io/microsims/> címen (forrás: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), amely azokat az interaktív szimulációkat szállítja, amelyeket egy intelligens tankönyv beágyaz. A *MicroSim* (mikroszimuláció) egy egyszerű, MI-vel generált interaktív szimuláció, amely segít a tanárnak megmagyarázni egy fogalmat, és beágyazható intelligens tankönyvbe vagy bármely oldalba, amely elfogad egy `iframe`-et. A MicroSimek három okból különlegesek: **MI-támogatott generálás** (szabványosított tervezési minták egy szimuláció természetes nyelvű leírását megosztható eszközzé alakítják), **univerzális beágyazás** (egyetlen HTML `iframe`-elem bármely oldalra behelyez egyet), és **átlátható, módosítható kód** (nincs fekete doboz – egy kattintás megnyitja a szimulációt egy webes szerkesztőben, a Creative Commons licenc pedig lehetővé teszi a legtöbb tanárnak, hogy licencdíj nélkül használja őket). A kifejezést Valerie Lockhart alkotta meg 2023-ban, miután azt találta, hogy tanárok és diákok a p5.js JavaScript-könyvtárral kis vagy semmi képzés nélkül is tudnak szimulációkat építeni.

A projekt JSON-sémát is közzétesz a MicroSim-metaadatokhoz, hogy az MI-eszközök kereshető leírókat generálhassanak; egy facetált MicroSim-nyilvántartás szerepel a tervekben. A keretrendszert leíró tanulmány – *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* – az arXivon olvasható ([2511.19864](https://arxiv.org/abs/2511.19864)). Mintaszimulációk közé tartozik a Bouncing Ball, a Projectile Motion, a String Harmonics, a Conway's Game of Life, az Euler's Formula és egy tőzsdei hozamdiagram, mindegyik élőben fut az oldalon.

## Kinek szól

Oktatók és oktatástervezők, akik kurzustankönyvet akarnak építeni vagy karbantartani, különösen a felsőoktatásban és a szakmai képzésben, valamint oktatófejlesztők és bárki, aki generatív MI-vel ír oktatási tartalmat. Azoknak a pedagógusoknak való, akik otthonosan mozognak a Markdown–Git munkafolyamatban (vagy hajlandók megtanulni), és azt akarják, hogy a MI kezelje az oldal csővezetékét – keresést, navigációt, fogalomgráfot –, hogy a pedagógiára összpontosíthassanak.

## Megjegyzések és fenntartások

Ez gyakorlati útmutató és eszközlánc, nem lektorált tanulmány – munkafolyamatot és saját pedagógiai indoklást ad („az intelligens tankönyvek fogalmakon vezetik végig a diákokat tudásuk keresésében”), nem a tanulási eredmények bizonyítékát. A MicroSim-tanulmány áll a legközelebb az empirikus alaphoz, és maga publikálja az arXivon. Mindkét projekt nyílt forráskódú (az intelligent-textbooks repó MIT licencet és 38 csillagot jelez; a MicroSims Creative Commons licencet és 13 csillagot) és aktívan karbantartott. A fogalomgráfok és a szójegyzék-első szerkezet valóban hasznos a felfedezhetőséghez, de az útmutató meglehetősen technikai szerzői munkafolyamatot feltételez – MkDocs, Git és generatív MI-eszközök –, ami egyes kar tagjainak akadály lehet. A betöltés idején a MicroSimek nyilvántartása még csak a tervekben szerepel, így egy konkrét meglévő szimuláció megtalálása az oldal saját keresésére és navigációjára támaszkodik.

## Kapcsolódó fogalmak

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
