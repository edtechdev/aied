---
title: "conText"
created: "2026-11-12T11:07:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Bezplatný tutor v prohlížeči, který přečte fotografii sešitu, PDF nebo text a potom provede studenta tímto materiálem sokratovskou metodou v angličtině nebo španělštině a přitom živě kreslí graf nápadů, které student během mluvení propojuje."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

conText je nejčistší malá ukázka směru, o kterém [[intelligent-tutoring|doučování s AI]] většinou mluví a jen zřídka ho zavádí: model neodpovídá na studentovu otázku, ale klade další, a studentovy nápady se během mluvení kreslí jako graf. Nahrajte fotografii stránky sešitu, PDF nebo text a nástroj nejprve řekne, čemu porozuměl, a potom začne mluvený [[socratic-method|sokratovský]] dialog. Každý nápad, který student pojmenuje, se objeví jako uzel v živém [[knowledge-graph|grafu znalostí]]; hrany se objevují, jak je konverzace propojuje, a panel uvádí, kolik nápadů zůstává nepropojených.

## Co s ním můžete dělat

Smyčka je záměrně krátká. Materiál vstoupí (do 10 MB, osm stran PDF nebo 15 000 znaků textu), tutor ho přečte a konverzace probíhá hlasem — web uvádí, že tutor neznámkuje a nepíše za studenta. Graf je artefakt, díky kterému má sezení později cenu: ukazuje, které nápady student skutečně dal do souvislosti a které zůstaly volné, což je mnohem konkrétnější věc k prohlédnutí než přepis chatu. Sezení lze exportovat jako soubor XML grafu a jiný den znovu nahrát a pokračovat, a tlačítko smazání ho okamžitě vymaže; jinak ho server po hodině odstraní.

Právě tato kombinace — tutor, který zadržuje odpověď, plus vizuální záznam uvažování — spadá přesně do toho, co se snaží dosáhnout [[scaffolding|lešení]] a [[metacognition|metakognitivní]] reflexe, a dává učiteli něco konkrétního, na co se lze zeptat, místo hotové eseje nebo správného čísla. Vlastní rámování webu je, že správný výsledek už neprokazuje porozumění, když ho generativní AI dokáže vytvořit, takže proces musí být viditelný.

## Pro koho je určen

Studenti, kteří procházejí četbu nebo sadu úloh a chtějí být dotazováni, ne nahrazeni odpovědí; učitelé, kteří chtějí nenáročnou kontrolu, zda student dokáže propojit nápady; a rozvojoví pracovníci hledající konkrétní příklad důkazu procesu. Učitelé mají průvodce sladěného s kurikulem v angličtině, španělštině, portugalštině a francouzštině; nástroj sám běží v angličtině a španělštině a instruktážní video je ve španělštině.

## Poznámky a upozornění

Cena ani účet pro nástroj určený studentům nejsou zveřejněny, zatímco institucionální nasazení — cloudové, lokální nebo hybridní — se nabízí prostřednictvím individuálního návrhu a schůzky; berte „zdarma“ jako stav veřejného dema v listopadu 2026, nikoli jako záruku. Text a obrázky putují do hostované služby poháněné Claudem a web sám vyzývá uživatele, aby před nahráním odstranili jména, částky, adresy a názvy firem, což přesouvá břemeno deidentifikace na nahrávajícího, nikoli na platformu. Sezení se sama mažou po hodině, pokud nejsou exportována. Společnost za nástrojem nabízí institucím také širší platformu pro hodnocení grafů uvažování a její tvrzení o rozlišování deduktivních, induktivních, abduktivních a analogických grafů vycházejí ze čtyř referenčních textů — web to nazývá ukázkou, přičemž validace ve velkém měřítku teprve přijde.

## Související pojmy

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
