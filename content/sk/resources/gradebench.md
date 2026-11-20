---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Verejný rebríček frontier modelov, ktoré hodnotia skutočné rukou písané univerzitné odpovede z STEM podľa položiek rubriky, ktoré vybral vyučujúci."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

GradeBench kladie úzku, užitočnú otázku o [[automated-assessment|automatizovanom hodnotení]]: keď dostane rukou písanú odpoveď študenta, rubriku vyučujúceho, referenčné riešenie a položky rubriky, ktoré vyučujúci skutočne vybral, vyberie frontier model tie isté položky? Zlaté štítky sú skutočné výbery položiek rubriky od učiteľov a asistentov výučby zo skúšok a kvízov, nie prehodnotené výstupy modelov.

## Čo s tým môžete robiť

Prečítajte si rebríček skôr, než uveríte akémukoľvek tvrdeniu dodávateľa hodnotenia o presnosti, a prečítajte si konštrukciu úloh skôr, než uveríte rebríčku. [[benchmark|Benchmark]] obsahuje 464 úloh z 125 otázok zo 45 [[higher-ed|univerzitných]] kurzov na viac ako desiatich inštitúciách, obmedzený na skúškové a kvízové položky s voľnou odpoveďou, ktoré profesor alebo asistent výučby skontroloval riadok po riadku, a s náklonom k čiastočnému bodovaniu — úlohy s plným počtom bodov a s nulovým počtom bodov majú každé strop 5 %, pretože modely ich zvládajú ľahko.

Aktuálny rebríček vrcholí hlboko pod ľudskou zhodou: najlepší model dosahuje 57,3 % presnej zhody s rubrikou a stránka vykresľuje presnosť oproti cene za 1 000 odpovedí, kde model o 0,8 bodu pozadu stojí približne sedminu ceny. Táto cenová os je prakticky užitočná časť, keďže hodnotenie je objemová operácia.

Druhý, nezávisle zostavený nástroj nájdete v [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) od Learning Design Alliance, ktorý je zabalený ako otvorený repozitár namiesto hostovaného rebríčka a je zhrnutý v [[porcaro-ai-grading-benchmark-2026|Porcarovej štúdii]].

## Pre koho je to určené

Vyučujúci, ktorí rozhodujú, či nechajú hodnotiaci nástroj zverejniť známky bez kontroly, odborníci na hodnotenie, ktorí píšu požiadavky obstarávania, a výskumníci, ktorí potrebujú cieľ na úrovni rubriky namiesto korelácie skórovania esejí.

## Poznámky a výhrady

GradeBench vydáva Pensive, komerčná platforma na hodnotenie AI, takže benchmark a produkt majú spoločného vlastníka; konštrukcia úloh je zdokumentovaná a obhájiteľná, ale rámcovanie považujte za rámcovanie dodávateľa. Pokrýva STEM skúšky s rubrikami najmenej štyroch položiek, čo vylučuje eseje, krátke odpovede a diskusné príspevky — formáty, kde sa odohráva väčšina hodnotenia v [[humanities-education|humanitných vedách]]. Presná zhoda s rubrikou je prísna metrika: dvaja hodnotitelia sa môžu na položke nezhodnúť a obaja môžu mať pravdu o študentovi. Skóre opisujú verzie modelov dostupné v novembri 2026 a budú sa meniť.
