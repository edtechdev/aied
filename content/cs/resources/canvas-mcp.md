---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Open-source server MCP, který umožňuje Claude, Cursoru, Codexu a dalším agentům číst a jednat v Canvas LMS — nástroje pro studenty, učitele a návrháře výuky, se zapisovacími akcemi za branou a volitelnou anonymizací studentských dat."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**Canvas MCP** je open-source server Model Context Protocol od Vishala Sachdeva, který připojuje klienta AI k instanci Canvas LMS: agent může vypsat studentovu nadcházející práci, přečíst zadání a odevzdané práce kurzu, rozeslat zprávu třídě nebo provést audit kurzu z hlediska přístupnosti, a to vše přes nástroje, které server vystavuje, nikoli ad hoc stahováním obrazovky.

## Co s ním můžete dělat

Server dodává tři rodiny nástrojů. Studentské nástroje odpovídají na otázky „co se tento týden odevzdává“, „odevzdal jsem všechno“ a „kolik pokusů v kvízu mi zbývá“ proti vlastním koncovým bodům `self` v Canvasu. Učitelské nástroje vypisují a vytvářejí zadání, čtou odevzdané práce, hromadně známkují, rozesílají konverzace a stahují analytiku zadání. Nástroje pro návrháře výuky pokrývají kontroly kvality kurzu a skeny přístupnosti WCAG. Celkem je k dispozici až 128 nástrojů, výchozí profil jich však registruje méně a nástroje podmíněné přepínači funkcí počet zvyšují. Nad nástroji je osm agentních dovedností, které balí vícekrokové recepty — týdenní plán, ranní kontrolu zdraví kurzu, rozhodovací strom pro hromadné známkování, postup vzájemné recenze, audit kurzu před semestrem — instalovatelných do více než 40 agentů přes `skills.sh`.

## Pro koho je určen

Vyučující, kteří chtějí, aby agent obstaral rutinní čtení a komunikaci kolem kurzu, a [[institutional-ai-infrastructure|institucionální týmy]], které zvažují, co agent připojený k LMS skutečně dosáhne. Návrháři výuky zde dostávají nejbližší věc k automatizované revizi kurzu. Projekt je rozpracovaný příklad [[agentic-ai|agentních nástrojů]] na úrovni LMS jedné instituce, nikoli obecný chatbot.

## Poznámky a upozornění

Instalace je lokální: Python 3.11 nebo novější, token a URL API Canvasu a klient MCP, s rozšířením pro Claude Desktop spustitelným dvojklikem. Veřejný hostovaný server byl vyřazen, takže sdílené nasazení znamená vlastní hosting za autentizací instituce. Zapisovací nástroje jsou za branou — HTTP servery jsou jen pro čtení, pokud nejsou zapisovací nástroje výslovně povoleny, mazání vyžaduje potvrzovací tokeny a spouštění kódu běží v sandboxu, který při selhání zavírá. Kontroly soukromí jsou opt-in: anonymizace odpovědí, maskování e-mailů a filtrování osobních údajů musí být zapnuté a README pečlivě uvádí, že tyto funkce mohou podpořit plnění povinností podle FERPA, aniž by zakládaly shodu, která závisí na nasazení a poskytovateli AI. V serveru není žádná telemetrie, ale Canvas a zvolený klient si vedou vlastní logy. Projekt má licenci MIT, je aktivně vyvíjen a jeho vlastní průvodce jsou autoritou pro aktuální názvy nástrojů a konfiguraci.
