---
title: "Moodle AI Text kérdéstípus"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "Nyílt forráskódú Moodle-kérdéstípus (GPL v3), amely nagy nyelvi modellel osztályozza a szabad szöveges válaszokat egy kérdésenkénti prompt és opcionális értékelési séma alapján, OpenAI, Azure vagy saját hosztolású Ollama-modellt használva, és az MI visszajelzését emberi értékelőnek mutatja."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A legtöbb MI-quizintegráció minden választ egy rögzített értékelő hívásnak küld. Ez a Moodle-kérdéstípus az ellenkezőjét teszi: az oktató írja a rubrikát. Minden kérdés hordoz egy **promptot**, amely megmondja a modellnek, hogyan értékelje a választ, és egy opcionális **értékelési sémát**, amely leírja, hogyan adják a pontokat, így egy „írj egy mondatot múlt időben” feladat megadhat tíz pontot hibátlanságért, nullát törött nyelvtanért, és pontlevonást minden helyesírási hibáért. A modell pontszámot és [[feedback|visszajelzést]] ad vissza, az oktató pedig a válasz mellett láthatja ezt a visszajelzést, amikor kézzel értékel.

## Mire használható

Adj hozzá AIText-kérdést bármely Moodle-quizhez, írd meg a promptot és az értékelési sémát, és teszteld a promptokat a szerkesztőűrlap AJAX-alapú **prompt tester**ében, ahelyett hogy előnézeti próbákon mennél keresztül. Az értékelés két kísérő kérdésviselkedésen (azonnali és halasztott) keresztül fut, amelyeket a kérdéstípus mellé kell telepíteni, ami elszigeteli az MI-értékelést a Moodle alap viselkedéseitől; a régi `interactivecountback` viselkedést használó meglévő próbálkozások frissítéskor migrálódnak. Ha a modell elérhetetlen, az értékelés lecsökken ahelyett, hogy hibát dobna, így egy próbálkozás nem vész el. Mivel a kérdés natív quiztípus, az eredmények úgy kerülnek az osztályzatnaplóba, mint bármely más elem – erre van szüksége egy kurzuscsapatnak ahhoz, hogy az [[automated-assessment|automatikus értékelést]] kísérletnek tekintse, ne demónak.

A terv a rubrikát oda teszi, ahol az [[ai-feedback-quality|visszajelzés minősége]] eldől: az oktató által írt promptba, nem egy szolgáltatói alapértelmezésbe. Ez az eszköz őszinte használata – ellenőrizhető és módosítható szempontok –, bár azt is jelenti, hogy a minőség plafonja a rubrika, és egy homályos prompt homályos értékelést ad. Az intézmények azokhoz az alacsony tétű, gyakori ellenőrzésekhez nyúlnak hozzá, amelyektől a [[formative-assessment|formatív értékelés]] függ, ahol egy ember egyébként negyven rövid választ olvasna el egy éjszaka.

## Kinek szól

Olyan Moodle-adminisztrátoroknak és fejlesztőknek, akik már üzemeltetik az oldalt, oktatóknak, akik külön platform vagy kereskedelmi licenc nélkül akarnak MI-értékelést, és kutatóknak, akiknek szabályozható értékelési folyamatra van szükségük a vizsgálathoz. Moodle 4.5 vagy újabb, valamint API-hozzáférés kell egy modellhez – akár OpenAI, akár Azure a Moodle MI-alrendszerén keresztül, akár saját hosztolású Ollama a Local AI Manageren keresztül, ami a diákok szövegét helyi infrastruktúrán tartja. A bővítményt Marcus Green tartja karban, elérhető a Moodle bővítménypiacon, és az oldal ellenőrzésekor 33 csillaga és 36 forkja volt.

## Megjegyzések és fenntartások

Nyílt forráskód GPL v3 vagy újabb alatt, de az ingyenes nem jelenti azt, hogy futtatni ingyenes: valaki fizet a modell API-jáért, és az értékelés minősége a modellválasztástól és a prompttervezéstől függ. A szabad szöveges válaszok elhagyják a Moodle-kiszolgálót, ha távoli szolgáltatót használnak, ezért az intézmény adatmegállapodása szabályozza, mi küldhető; a saját hosztolású Ollama-útvonal azoknak az oldalaknak létezik, amelyek nem küldhetik ki a diákok munkáját. A repository nem említ publikált pontossági vagy egyezési vizsgálatot, ezért a bővítményt nem szabad azon feltevés alapján bevezetni, hogy az LLM-értékelés egyenértékű az emberi értékeléssel – a [[assessment-validity|érvényességet]] helyben, emberi pontszámokhoz kell megállapítani, mielőtt bármely jegy súlyt kap. A kísérő viselkedések kemény függőség: csak a kérdéstípus telepítése értékelhetetlen kérdéseket hagy.

## Kapcsolódó fogalmak

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
