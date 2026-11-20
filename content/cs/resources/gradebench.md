---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Veřejný žebříček frontier modelů, které hodnotí skutečné ručně psané univerzitní odpovědi ze STEM podle položek rubriky, jež vyučující vybral."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
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

GradeBench klade úzkou, užitečnou otázku o [[automated-assessment|automatizovaném hodnocení]]: dostane-li frontier model studentovu ručně psanou odpověď, rubriku vyučujícího, referenční řešení a položky rubriky, které vyučující skutečně vybral, vybere stejné položky? Zlaté štítky tvoří skutečné výběry položek rubriky, které vyučující a TA provedli u zkoušek a kvízů, nikoli znovu ohodnocené výstupy modelů.

## Co s tím můžete dělat

Než uvěříte jakémukoli tvrzení dodavatele hodnotících nástrojů o přesnosti, přečtěte si žebříček; a než uvěříte žebříčku, přečtěte si konstrukci úloh. [[benchmark]] obsahuje 464 úloh odvozených ze 125 otázek ve 45 [[higher-ed|univerzitních]] kurzech na více než deseti institucích, omezených na volně zodpovídané položky zkoušek a kvízů, které profesor nebo TA prošel řádek po řádku, a nakloněných k částečnému hodnocení — úlohy s plným a nulovým počtem bodů jsou omezeny na 5% každé, protože modelům připadají snadné.

Současný žebříček vrcholí hluboko pod lidskou shodou: nejlepší model dosahuje 57.3% přesné shody s rubrikou a web vykresluje přesnost proti nákladům na 1,000 odpovědí, přičemž model o 0.8 bodu pozadu stojí zhruba sedminu. Prakticky užitečná je právě osa nákladů, protože hodnocení je objemová operace.

Druhý, nezávisle postavený nástroj najdete v [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) od Learning Design Alliance, který je zabalen jako otevřený repozitář namísto hostovaného žebříčku a je shrnut v [[porcaro-ai-grading-benchmark-2026|Porcarově studii]].

## Pro koho je určeno

Vyučující rozhodující, zda nechají hodnotící nástroj zveřejnit známky bez kontroly, odborníci na hodnocení píšící požadavky na veřejné zakázky a výzkumníci, kteří potřebují cíl na úrovni rubriky, nikoli korelaci skórování esejí.

## Poznámky a upozornění

GradeBench vydává Pensive, komerční platforma pro hodnocení pomocí AI, takže benchmark i produkt mají společného vlastníka; konstrukce úloh je zdokumentovaná a obhajitelná, ale rámec berte jako dodavatelův. Pokrývá STEM zkoušky s rubrikami o alespoň čtyřech položkách, čímž vylučuje eseje, krátké odpovědi a diskusní příspěvky — formáty, kde probíhá většina hodnocení v [[humanities-education|humanitních předmětech]]. Přesná shoda s rubrikou je přísná metrika: dva hodnotitelé se mohou na položce neshodnout a oba mohou mít o studentovi pravdu. Skóre popisují verze modelů dostupné v listopadu 2026 a budou se měnit.

## Související pojmy

- [[automated-assessment]] — praxe, kterou benchmark měří
- [[assessment-validity]] — kritérium, jehož proxy je skóre v žebříčku
- [[benchmark]] — širší třída nástrojů, do níž tento patří
