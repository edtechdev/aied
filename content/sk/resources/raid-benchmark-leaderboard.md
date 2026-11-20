---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Verejný rebríček detektorov AI textu skórovaných na RAID, benchmarku zostavenom na testovanie odolnosti voči modelom, doménam, nastaveniam dekódovania a adversariálnym útokom."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

RAID je benchmark za väčšinou serióznych tvrdení o [[ai-detection|detekcii AI textu]] a jeho rebríček je miesto, kde si overíte, či publikovaná presnosť detektora prežije zmenu modelu, domény, nastavenia dekódovania alebo zámerný útok. Záznamy sú skórované na testovacej sade a môže ich podať ktokoľvek, kto dodrží proces podávania repozitára.

## Čo s tým môžete robiť

Filtrujte podľa domény — abstrakty, knihy, správy, poézia, recepty, Reddit, recenzie, wiki — podľa dekódovacej stratégie (greedy alebo sampling), podľa penalizácie opakovania a podľa adversariálneho útoku vrátane bielych znakov, homoglyfov, nahrádzania synoným, parafrázovania, medzier s nulovou šírkou a odstraňovania členov. Potom porovnajte detektor naprieč metrikami: AUROC, TPR pri 5 % miere falošne pozitívnych výsledkov a TPR pri 1 %.

Táto sada filtrov je pointa. Detektor, ktorý v súhrne skóruje blízko 1,000, môže spadnúť, keď je text parafrázovaný alebo sa zmení zdrojový model, a rebríček vám umožní vidieť ten pokles skôr, než na ňom inštitúcia postaví prípad [[academic-integrity|porušenia integrity]]. Stĺpec 1 % falošne pozitívnych výsledkov je vo vzdelávaní najdôležitejší, pretože v inštitucionálnej mierke znamená 1 % chybovosť stovky neprávom obvinených študentov.

## Pre koho je to určené

Výskumníci hodnotiaci metódy detekcie, administrátori píšuci politiku, ktorá môže odkazovať na detektor, a vyučujúci, ktorí chcú konkrétnu odpoveď na „dá sa toto detegovať?“ skôr, než to uvedú v sylabe.

## Poznámky a výhrady

Benchmark meria detekciu strojovo generovaného textu, nie pochybenie: študent, ktorý používa AI na plánovanie, osnovanie alebo revíziu, vytvára text, ktorý detektory neboli stavané chytať, a študent [[language-learning|píšuci v druhom jazyku]] je známym rizikom falošne pozitívnych výsledkov, ktoré rebríček nedokáže zobraziť. RAID je výskumný artefakt udržiavaný akademickým tímom; pokrytie sleduje generátorové modely v jeho testovacej sade, takže novšie modely môžu byť nedostatočne zastúpené, kým sa benchmark neobnoví. Rebríček hodnotí detektory, nie praktiky nakladania s dátami ich dodávateľov, a vysoké AUROC nehovorí nič o tom, či je odovzdávanie študentských prác tej službe zákonné alebo etické vo vašej jurisdikcii.
