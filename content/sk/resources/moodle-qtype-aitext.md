---
title: "Typ otázky AI Text pre Moodle"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "Open-source typ otázky pre Moodle (GPL v3), ktorý známkuje odpovede vo voľnom texte pomocou veľkého jazykového modelu podľa promptu pre každú otázku a voliteľnej schémy hodnotenia, s využitím OpenAI, Azure alebo samohostovaného modelu Ollama, a zobrazuje spätnú väzbu AI ľudskému hodnotiteľovi."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Väčšina integrácií AI do kvízov posiela každú odpoveď na pevné volanie hodnotenia. Tento typ otázky pre Moodle robí opak: rubriku píše učiteľ. Každá otázka nesie **prompt**, ktorý modelu hovorí, ako odpoveď vyhodnotiť, a voliteľnú **schému hodnotenia**, ktorá opisuje, ako sa prideľujú body, takže položka „napíš vetu v minulom čase“ môže určiť desať bodov za žiadne chyby, nula za pokazenú gramatiku a jeden bod dole za každý preklep. Model vráti známku a [[feedback|spätnú väzbu]] a učiteľ môže túto spätnú väzbu vidieť vedľa odpovede pri ručnom hodnotení.

## Čo s ním môžete robiť

Pridajte otázku AIText do ľubovoľného kvízu v Moodle, napíšte prompt a schému hodnotenia a testujte prompty pomocou AJAX **testovača promptov** v editovacom formulári namiesto prechádzania skúšobnými pokusmi. Hodnotenie prebieha cez dve sprievodné správania otázok (okamžité a odložené), ktoré sa musia nainštalovať spolu s typom otázky, čo drží AI hodnotenie izolované od základných správaní Moodle; existujúce pokusy, ktoré používali staršie správanie `interactivecountback`, sa pri aktualizácii migrujú. Ak je model nedostupný, hodnotenie sa degraduje namiesto chyby, takže pokus sa nestratí. Keďže je otázka natívnym typom kvízu, výsledky sa dostanú do známkovníka ako každá iná položka — čo tím kurzu potrebuje, aby mohol [[automated-assessment|automatické hodnotenie]] brať ako pilot, nie ako demo.

Dizajn tiež umiestňuje rubriku tam, kde sa rozhoduje o [[ai-feedback-quality|kvalite spätnej väzby]]: do promptu, ktorý píše učiteľ, nie do predvoleného nastavenia dodávateľa. To je čestné použitie nástroja — kritériá, ktoré môžete skontrolovať a upraviť — hoci to zároveň znamená, že kvalitatívny strop je rubrika a vágny prompt produkuje vágne hodnotenie. Inštitúcie po ňom siahajú pri nízkorizikových častých kontrolách, na ktorých stojí [[formative-assessment|formative hodnotenie]], kde by inak človek čítal štyridsať krátkych odpovedí za noc.

## Pre koho je určený

Správcovia a vývojári Moodle, ktorí už stránku prevádzkujú, učitelia, ktorí chcú AI hodnotenie bez samostatnej platformy alebo komerčnej licencie, a výskumníci, ktorí potrebujú kontrolovateľný hodnotiaci proces na štúdium. Vyžaduje Moodle 4.5 alebo novší a API prístup k modelu — buď OpenAI alebo Azure cez AI subsystém Moodle, alebo samohostovanú inštanciu Ollama cez Local AI Manager, čo udržiava študentský text na lokálnej infraštruktúre. Plugin udržiava Marcus Green, je na trhu pluginov Moodle a v čase overenia tejto stránky mal 33 hviezdičiek a 36 forkov.

## Poznámky a upozornenia

Open source pod GPL v3 alebo novšou verziou, ale bezplatnosť neznamená bezplatnú prevádzku: niekto platí za API modelu a kvalita hodnotenia závisí od výberu modelu a dizajnu promptu. Odpovede vo voľnom texte opúšťajú server Moodle, keď sa používa vzdialený poskytovateľ, takže o tom, čo sa smie posielať, rozhoduje dátová dohoda inštitúcie; samohostovaná cesta cez Ollama existuje pre stránky, ktoré nemôžu posielať študentskú prácu von. Repozitár neuvádza žiadnu publikovanú štúdiu presnosti alebo zhody, takže plugin by sa nemal zavádzať s predpokladom, že hodnotenie LLM sa rovná ľudskému hodnoteniu — [[assessment-validity|validitu]] treba lokálne preukázať voči ľudským skóre, kým akákoľvek známka získa váhu. Sprievodné správania sú tvrdou závislosťou: samotná inštalácia typu otázky necháva otázky nehodnotiteľné.

## Prepojené pojmy

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
