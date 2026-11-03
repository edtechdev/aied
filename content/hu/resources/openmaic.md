---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "A MAIC nyílt forráskódú kiadása: többügynökös tanterem, amely egy témát vagy dokumentumot diákká, kvízekké, interaktív szimulációkká és projektalapú tevékenységekké alakít, MI-tanárok és MI-osztálytársak előadásában."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
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

Az **OpenMAIC** a [[intelligent-tutoring|MAIC-tanulmányban]] leírt MAIC többügynökös tanterem nyílt forráskódú kiadása: írjon le egy témát, vagy csatolja saját anyagait, és teljes leckét generál – diákat, kvízeket, interaktív HTML-szimulációkat és projektalapú tevékenységeket –, majd MI-tanárokon és MI-osztálytársakon keresztül adja elő, akik beszélnek, táblára rajzolnak és részt vesznek a vitában. Ez egy olyan tanterem kódja, amelyet futtatni lehet, nem csak olvasni róla.

## Mire használható

Az egykattintásos generálás percek alatt leckét állít elő egy promptból vagy feltöltött dokumentumból, hangból vagy videóból. A többügynökös réteg hozzáadja az osztálytermi vitát, amelyhez a tanuló csatlakozhat vagy behívható, a perszónák közötti kerekasztal-vitákat táblai illusztrációkkal, és a szabad formájú kérdezz-feleletet, ahol a tanár diákkal vagy diagramokkal válaszol. A munkamenetek támogatják a diacsomagokat, kvízeket, interaktív szimulációkat és a PBL-t, és szerkeszthető `.pptx` vagy interaktív `.html` formátumban exportálhatók. Az 1.0.0-s verzió (2026 augusztusa) ügynök-munkapadot adott hozzá: csevegésközpontú munkaterületet, amely egész kurzusokat tervez és revideál, tartós, szerveroldali munkameneteket, amelyeket meg lehet szakítani, folytatni vagy irányítani, valamint 24 beépített készséget, amelyek diákat, kvízeket, interaktív elemeket, képeket, videót és hangokat fednek le. Egy `SKILL.md` csomag lehetővé teszi, hogy egy ügynökkeretrendszer üzenetküldő alkalmazásból építsen tantermeket.

## Kinek szól

Oktatók és kurzuscsapatok, akik generált anyagokat akarnak, amelyeket még szerkeszthetnek, oktatástervezők, akik többügynökös tevékenységeket prototipizálnak, és fejlesztők, akiknek saját maguk hosztolható tanterem kell, nem hosztolt termék. Az iskolák telepíthetik Vercelen vagy Dockerrel, a projekt pedig hosztolt demót szállít az open.maic.chat címen.

## Megjegyzések

MIT licenc, angol és kínai felhasználói útmutatóval, valamint aktív közösséggel a Discordon és a Feishun. Modellsemleges: legalább egy LLM-szolgáltatói kulcsot Ön ad, az opcionális helyi komponensek (Lemonade helyi modellekhez, FunASR beszédfelismeréshez) pedig a verem nagyobb részét offline futtathatóvá teszik – így az „ingyenes” a szoftvert írja le, nem a következtetési számlát. A mögötte álló tanulmány a *Journal of Computer Science and Technology* folyóiratban jelent meg (2026, DOI 10.1007/s11390-025-6000-0), a repónak pedig több mint 38 000 csillaga volt 2026 szeptemberére.

## Kapcsolódó fogalmak

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
