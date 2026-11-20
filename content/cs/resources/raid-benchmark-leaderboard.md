---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Veřejný žebříček detektorů AI textu skórovaných na RAID, benchmarku postaveném k testování odolnosti vůči modelům, doménám, nastavení dekódování a adversariálním útokům."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

RAID je benchmark za většinou seriózních tvrzení o [[ai-detection|detekci textu od AI]] a jeho žebříček je místo, kde ověřit, zda publikovaná přesnost detektoru přežije změnu modelu, domény, nastavení dekódování nebo záměrný útok. Záznamy jsou skórovány na testovací sadě a může je podat kdokoli, kdo dodržuje proces podání v repozitáři.

## Co s tím můžete dělat

Filtrujte podle domény — abstrakty, knihy, zprávy, poezie, recepty, Reddit, recenze, wiki — podle dekódovací strategie (greedy nebo sampling), podle penalizace opakování a podle adversariálního útoku, včetně bílých znaků, homoglyfů, náhrady synonymy, parafráze, mezer nulové šířky a mazání členů. Pak porovnejte detektor napříč metrikami: AUROC, TPR při 5% míře falešně pozitivních a TPR při 1%.

Právě sada filtrů je to podstatné. Detektor, který souhrnně skóruje blízko 1.000, může spadnout, jakmile je text parafrázován nebo se změní zdrojový model, a žebříček vám umožní vidět ten pád dřív, než na něm instituce postaví případ [[academic-integrity|porušení akademické etiky]]. Ve vzdělávání nejvíc záleží na sloupci 1% falešně pozitivních, protože v institucionálním měřítku znamená 1% chybovost stovky neprávem obviněných studentů.

## Pro koho je určeno

Výzkumníci hodnotící detekční metody, administrátoři píšící politiku, která může odkazovat na detektor, a vyučující, kteří chtějí konkrétní odpověď na „lze to detekovat?“, než to řeknou v sylabu.

## Poznámky a upozornění

Benchmark měří detekci strojově generovaného textu, nikoli neetické jednání: student, který používá AI k plánování, osnově nebo revizi, vytváří text, který detektory nebyly stavěny chytat, a student [[language-learning|píšící v druhém jazyce]] je známé riziko falešně pozitivního výsledku, které žebříček nedokáže ukázat. RAID je výzkumný artefakt udržovaný akademickým týmem; pokrytí sleduje generátorové modely v jeho testovací sadě, takže novější modely mohou být nedostatečně zastoupeny, dokud se benchmark neobnoví. Žebříček řadí detektory, nikoli praktiky jejich dodavatelů v nakládání s daty, a vysoké AUROC neříká nic o tom, zda je odevzdávání studentských prací této službě ve vaší jurisdikci zákonné nebo etické.

## Související pojmy

- [[ai-detection]] — rodina metod, kterou benchmark hodnotí
- [[academic-integrity]] — politický kontext, v němž se skóre detektorů používají
- [[benchmark]] — širší třída nástrojů, do níž tento patří
