---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Terénní průvodce pro učitele, jak postavit statický vzdělávací web s AI kódovacím asistentem: tři instrukční soubory v Markdownu pro design, bezpečnost a soukromí studentů, s čitelnými průvodci a balíkem ke stažení."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**The Vibe-Coding Center** je bezplatný terénní průvodce Miguela Guhlina pro učitele, který chce [[vibe-coding|vibe codovat]] malý statický vzdělávací web s AI kódovacím asistentem — výstupní lístek, kvíz, portfolio třídy — aniž by spolu s ním vydal exponovaný API klíč nebo studentská data.

## Co s ním můžete dělat

Tři instrukční soubory nesou pokyny: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` a `securevcc.md`. Stáhněte je do kořene projektu, vyplňte šablonu zadání projektu a potom požádejte asistenta, aby všechny tři přečetl a použil; průvodce výslovně uvádí, že přítomnost není aktivace, takže soubory je třeba v požadavku pojmenovat. Čitelné průvodce vysvětlují každý z nich, včetně procházky „Tři základní kontroly před sdílením“: shromažďujte méně studentských dat, prohlédněte exponovaný API klíč a přizpůsobte design nástroje jeho výukovému úkolu. Kompletní balík přidává samotný web, sadu promptů, kontrolu před spuštěním a skripty pro opětovné sestavení, s manifestem SHA-256 pro stažení.

Doprovodná stránka [příkladů EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) ukazuje výsledky jako fungující statické nástroje, nikoli jako snímky obrazovky: generátor výstupních lístků, který napíše otázku na zvolené úrovni taxonomie SOLO, studentské portfolio, které je jediným HTML souborem na GitHub Pages, a prohledávatelnou knihovnu zdrojů pro profesní rozvoj, to vše běžící na straně klienta bez přihlášení do LMS.

## Pro koho je určen

Učitelé a [[learning-design|návrháři výuky]] v K–12 a vysokém školství, kteří umějí popsat nástroj, který chtějí, a jsou ochotni zkontrolovat, co asistent vytvořil. Sedí také katedře, která chce jeden sdílený kontrolní seznam, než kdokoli publikuje nástroj pro studenty, a vyučujícím, kteří učí [[ai-literacy|gramotnost v oblasti AI]] stavěním, nikoli kritikou.

## Poznámky a upozornění

Centrum je návod, nikoli produkt pro shodu: web nečiní žádné tvrzení o shodě se svým vlastním cílem WCAG 2.2 AA, na otázku „znamená použití těchto souborů, že je můj web v souladu?“ odpovídá ne a uvádí, že inženýrská revize nenahrazuje schválení školou ani právní posouzení. Bezpečnostní police odkazuje na axe-core, Gitleaks, ZAP a Playwright; jde o odkazy, nikoli o přibalený software, a ty invazivní jsou určené pro jednorázový nebo výslovně povolený cíl. Čtení nevyžaduje účet. Opětovné sestavení HTML stránek vyžaduje Python a `markdown-it-py`, což je závislost sestavení, nikoli závislost návštěvníka. Repozitář má licenci MIT, zatímco grafika třetích stran a propojené projekty si zachovávají vlastní podmínky, zdokumentované v `CREDITS.md`.

## Související pojmy

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
