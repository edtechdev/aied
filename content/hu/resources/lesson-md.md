---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Nyílt, egyszerű szöveges formátum blokkalapú e-learning-leckékhez, valamint egy ügynökkészség, amely leckéket, értékeléseket és teljes kurzuscsomagokat ír ebben a formátumban."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
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

A **LESSON.md** nyílt formátum blokkalapú e-learning-tartalomhoz: Markdown-fájl YAML-frontmatterrel és `:::` direktívákkal szöveghez, képekhez és tudásellenőrzésekhez, amelyet ember is olvashat, és bármely eszköz is feldolgozhat. Azért létezik, mert a kurzustartalom általában egyetlen szerzőeszközbe zárva van, és mert a [[llm|nagy nyelvi modellek]] csak olyan leckéken tudnak segíteni, amelyeket ténylegesen el tudnak olvasni.

## Mire használható
Írjon leckét bármely szövegszerkesztőben, és importálja bármely, a formátumot támogató eszközbe, másolás-beillesztés és újraformázás nélkül. Az interaktív elemek – próbálkozási limittel és válaszszintű visszajelzéssel járó feleletválasztós tudásellenőrzések – egyszerű tulajdonságokként fejeződnek ki, nem grafikus felületen. Egy csomag gyökerében lévő kísérő `ASSESSMENT.md` lesz a kurzus pontozott [[assessment|értékelése]]. A projekt egy `lesson-md` készséget is szállít, amely megtanítja a formátumot a Claude-nak, a Codexnek vagy egy másik [[agentic-ai|ügynöknek]], így egy kurzus köznyelvi leírása leckéket, értékeléseket és teljes csomagot ad vissza.

## Kinek szól
Oktatástervezők és kurzusalkotók, akik azt akarják, hogy tartalmuk túléljen egy eszközváltást, e-learning-szállítók, akiknek olyan import- és exportformátum kell, amelyet felhasználóik már értenek, és bárki, aki MI-támogatott szerzőséget épít egy olvasható formátumra. Közreműködői között van Dan Bashaw (LXD Integral), a formátumnak pedig nyilvános változásnaplója van a v1.8-ig.

## Kapcsolódó fogalmak

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
