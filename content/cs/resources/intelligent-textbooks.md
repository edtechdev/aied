---
title: "Stavba inteligentních učebnic"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Open-source průvodce Dana McCrearyho, jak stavět inteligentní učebnice s vyhledáváním, glosářem, kvízy, pojmovým grafem a vloženými simulacemi v MkDocs Material a s AI."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Web **Intelligent Textbooks** je podrobný průvodce Dana McCrearyho, jak stavět *inteligentní učebnice* — online učebnice, které jdou za hranice statických PDF tím, že přidávají vyhledávání, navigaci po webu, glosář pojmů, obsah, správu kvízů, vykreslené vzorce, náhledy pro sociální sítě, kontrolu odkazů a snadno vizualizovatelný **pojmový graf** ukazující všechny pojmy kurzu a jejich závislosti. Průvodce tvrdí, že mnoha dnešním kurzům by takové kvalitní online učebnice prospěly, a ukazuje, jak je stavět pomocí build systému [MkDocs](http://mkdocs.com/) s tématem Material a generativní AI pro tvorbu a údržbu obsahu.

Určujícím krokem je, že učebnice je *napsána v Markdownu a generována AI*, což je konkrétní instance vzorce [[vibe-coding|psaní s asistencí AI]] aplikovaného na [[curriculum-design|obsah kurzu]]: místo ruční údržby velkého webu kurz popíšete a necháte generativní AI stránky vytvořit a udržovat, zatímco toolchain obstará navigaci, vyhledávání a pojmový graf. Doprovodná knihovna [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) tvrdí, že automatizuje přes 90 % úkolů potřebných k sestavení učebnice úrovně 2 z popisu kurzu.

## Doprovodný zdroj: MicroSims

Přirozeným doplňkem tohoto průvodce je McCrearyho knihovna **MicroSims** na adrese <https://dmccreary.github.io/microsims/> (zdroj: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), která dodává interaktivní simulace, jež inteligentní učebnice vkládá. *MicroSim* (mikrosimulace) je jednoduchá interaktivní simulace vytvořená s AI, která má učitelům pomoci vysvětlit pojem, a lze ji vložit do inteligentní učebnice nebo na jakýkoli web, který přijímá `iframe`. MicroSims vynikají ze tří důvodů: **generování s asistencí AI** (standardizované návrhové vzorce mění popis simulace v přirozeném jazyce ve sdílený artefakt), **univerzální vkládání** (jediný HTML prvek `iframe` jej umístí na jakoukoli stránku) a **transparentní, upravitelný kód** (žádná černá skříňka — jeden klik otevře simulaci ve webovém editoru a licence Creative Commons umožňuje většině učitelů používat je bez licenčních poplatků). Termín vytvořila Valerie Lockhart v roce 2023 poté, co zjistila, že učitelé i studenti dokážou stavět simulace v JavaScriptové knihovně p5.js s malým nebo žádným školením.

Projekt také zveřejňuje JSON Schema pro metadata MicroSimů, aby AI nástroje mohly generovat prohledávatelné deskriptory, a do budoucna plánuje fazetový registr MicroSimů. Výzkumný článek popisující rámec — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — je na arXivu ([2511.19864](https://arxiv.org/abs/2511.19864)). Mezi ukázkové simulace patří Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula a graf výnosů akciového trhu, každá běží na webu živě.

## Pro koho je určen

Pro vyučující a návrháře výuky, kteří chtějí postavit nebo udržovat kurzovní učebnici, zejména ve vysokém školství a profesním vzdělávání, dále pro rozvojové pracovníky fakult a pro každého, kdo generativní AI používá k psaní vzdělávacího obsahu. Hodí se pro vzdělavatele, kterým vyhovuje pracovní postup s Markdownem a Gitem (nebo jsou ochotni se jej naučit) a kteří chtějí, aby AI obstarala webovou infrastrukturu — vyhledávání, navigaci, pojmový graf — a oni se mohli soustředit na pedagogiku.

## Poznámky a upozornění

Jde o průvodce a toolchain z praxe, nikoli o recenzovanou studii — představuje pracovní postup a jeho vlastní vzdělávací odůvodnění („inteligentní učebnice provázejí studenty pojmy na jejich cestě za poznáním“), nikoli důkazy o výsledcích učení. Nejblíže empirické opoře je výzkumný článek o MicroSimech, a ten je publikován vlastním nákladem na arXivu. Oba projekty jsou open source (repozitář intelligent-textbooks uvádí licenci MIT a 38 hvězd, MicroSims licenci Creative Commons a 13 hvězd) a aktivně udržované. Pojmové grafy a struktura začínající glosářem jsou pro objevitelnost skutečně užitečné, ale průvodce předpokládá poměrně technický autorský postup — MkDocs, Git a nástroje generativní AI — což může být pro část fakulty překážkou. V době zpracování je registr MicroSimů stále jen v plánu, takže nalezení konkrétní existující simulace závisí na vyhledávání a navigaci samotného webu.

## Související pojmy

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
