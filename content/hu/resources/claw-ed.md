---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Helyben futó, MI-alapú tanítási asszisztens, amely a saját tananyagából szerkeszthető óravázlatokat, diákanyagokat és diákat készít az Ön által választott modellel."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Claw-ED** helyben futó tanítási asszisztens, amely a saját tananyagából vázol órákat. A tanár importálja a forrásait, órát kér, és szerkeszthető vázlatokat kap diákoknak szóló anyagokkal és diákkal, azzal a modellel generálva, amelyet a tanár választ, nem egyetlen rögzített szolgáltatóval.

## Mire használható

A munkafolyamat az importtól a vázlaton és a bírálaton át az exportig tart, a vázlatokat pedig kiindulópontként kezeli, amelyeket a tanár szerkeszt, nem kész kiadható anyagként. Az óraelőállítási feladatok sorba állnak és folytathatók, így egy hosszú, megszakadt generálás újraindítás helyett folytatható, és a létrehozott artefaktumok letölthetők. Eszközeit [[agentic-ai|ügynök]] számára is elérhetővé teszi egy MCP-szerveren keresztül, és csatlakozhat a Google Drive-hoz, így az iskola bekötheti a meglévő tárolásba és ütemezésbe.

A projekt szándékosan modellfüggetlen. A helyi Ollama-modelleket, a költséghatékony OpenRouter-útvonalakat és a hosztolt lehetőségeket egymás mellett dokumentálja, modellútmutatója pedig datált, ami világossá teszi, hogy az ajánlások katalógusalapú kiindulópontok, nem a tanárok által pontozott minőségi ítéletek.

## Megjegyzések és fenntartások

A szoftver ingyenes és [[open-source|nyílt forráskódú]] az MIT licenc alatt az eredeti kódjára nézve, bár a harmadik féltől származó komponensek saját feltételeiket tartják meg, és a futtatása azt jelenti, hogy a saját modellkövetkeztetéséért fizet, ha hosztolt modellt használ. A projekt tanárok által bírált bétának nevezi magát, és a README-jében nyíltan kimondja, hogy a CI átjutása nem bizonyítja az oktatási minőséget élő modellek között – így kell olvasni egy zöld tesztcsomagot ezen a területen: a szoftvert ellenőrzi, nem a [[pedagogy|pedagógiát]]. A MacxLabs tartja fenn, és tanárok által bírált mintatanórákat fogad el hozzájárulásként.

## Kapcsolódó fogalmak
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
