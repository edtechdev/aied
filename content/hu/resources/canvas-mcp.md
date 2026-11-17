---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Nyílt forráskódú MCP-kiszolgáló, amely lehetővé teszi, hogy a Claude, a Cursor, a Codex és más ügynökök olvassanak és cselekedjenek a Canvas LMS-en belül – diák-, oktató- és oktatástervezői eszközök, kapuzott íróműveletekkel és opcionális anonimizálással a diákadatokhoz."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Canvas MCP** Vishal Sachdev nyílt forráskódú Model Context Protocol kiszolgálója, amely MI-klienst köt egy Canvas LMS-példányhoz: az ügynök listázhatja egy diák következő feladatait, beolvashatja egy kurzus feladatait és beadásait, üzenetet küldhet egy osztálynak, vagy akadálymentességi szempontból auditálhat egy kurzust – mindezt a kiszolgáló által kínált eszközökön keresztül, nem eseti képernyőleolvasással.

## Mire használható

A kiszolgáló három eszközcsaládot szállít. A diákeszközök a Canvas saját `self` végpontjain válaszolnak arra, hogy „mi jár le ezen a héten”, „minden beadva?”, „hány kvízkísérletem maradt”. Az oktatói eszközök listázzák és létrehozzák a feladatokat, beolvassák a beadásokat, tömegesen osztályoznak, beszélgetéseket küldenek, és feladat-analitikát húznak. Az oktatástervezői eszközök kurzusminőség-ellenőrzéseket és WCAG-akadálymentességi vizsgálatokat fednek le. Összesen legfeljebb 128 eszköz érhető el, bár az alapértelmezett profil kevesebbet regisztrál, és a funkciókapcsolóval védett eszközök növelik a számot. Az eszközök fölé nyolc ügynökkészség csomagol több lépésből álló recepteket – heti terv, reggeli kurzusállapot-ellenőrzés, tömeges osztályozási döntési fa, társértékelési folyamat, félév előtti kurzusaudit –, amelyek a `skills.sh`-n keresztül több mint 40 ügynökbe telepíthetők.

## Kinek szól

Oktatóknak, akik szeretnék, hogy egy ügynök intézze a kurzus körüli rutin olvasást és üzenetküldést, és [[institutional-ai-infrastructure|intézményi csapatoknak]], amelyek azt mérik fel, mit érhet el valójában egy LMS-hez kapcsolt ügynök. Az oktatástervezők itt kapják a legközelebbit egy automatizált kurzusátvizsgáláshoz. A projekt kidolgozott példa a [[agentic-ai|ügynöki eszközhasználatra]] egyetlen intézmény LMS-ének szintjén, nem általános chatbot.

## Megjegyzések és fenntartások

A beállítás helyi: Python 3.11 vagy újabb, Canvas API-token és URL, valamint MCP-kliens, a Claude Desktophoz dupla kattintással telepíthető bővítménnyel. A nyilvános hosztolt kiszolgálót megszüntették, így a megosztott telepítés azt jelenti, hogy az intézmény saját hitelesítése mögött kell hosztolni. Az íróeszközök kapuzottak – a HTTP-kiszolgálók csak olvashatók, hacsak az íróeszközöket kifejezetten nem engedélyezik, a törléshez megerősítő token kell, és a kódfuttatás olyan homokozóban fut, amely hiba esetén zár. Az adatvédelmi vezérlők opcionálisak: a válaszok anonimizálását, az e-mail-maszkolást és a PII-szűrést engedélyezni kell, a README pedig gondosan jelzi, hogy ezek támogathatják a FERPA-kötelezettségeket, de nem állapítanak meg megfelelést, ami a telepítéstől és az MI-szolgáltatótól függ. A kiszolgálóban nincs telemetria, de a Canvas és a választott kliens saját naplókat vezet. A projekt MIT licencű, aktívan fejlesztik, és a jelenlegi eszköznevekről és konfigurációról a saját útmutatói az irányadók.

## Kapcsolódó fogalmak

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
