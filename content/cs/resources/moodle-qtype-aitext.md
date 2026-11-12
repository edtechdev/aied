---
title: "Typ otázky AI Text pro Moodle"
created: "2026-11-12T11:09:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Otevřený typ otázky pro Moodle (GPL v3), který známkuje odpovědi volným textem pomocí velkého jazykového modelu podle promptu u každé otázky a volitelného schématu hodnocení, využívá OpenAI, Azure nebo samostatně hostovaný model Ollama a ukazuje zpětnou vazbu AI lidskému hodnotiteli."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Většina integrací AI do kvízů posílá každou odpověď na pevně dané hodnotící volání. Tento typ otázky pro Moodle dělá opak: rubriku píše vyučující. Každá otázka nese **prompt**, který modelu říká, jak odpověď vyhodnotit, a volitelné **schéma hodnocení** popisující, jak se udělují body, takže položka „napiš větu v minulém čase“ může určit deset bodů za žádné chyby, nula za rozbitou gramatiku a jeden bod dolů za každou pravopisnou chybu. Model vrátí známku a [[feedback|zpětnou vazbu]] a vyučující může tuto zpětnou vazbu vidět vedle odpovědi při ručním známkování.

## Co s ním můžete dělat

Přidejte otázku AIText do libovolného kvízu v Moodle, napište prompt a schéma hodnocení a prompty testujte pomocí **testeru promptů** s AJAXem ve formuláři pro úpravy, místo abyste procházeli zkušební náhledy. Známkování probíhá přes dvě doprovodná chování otázek (okamžité a odložené), která je třeba nainstalovat spolu s typem otázky, což izoluje známkování AI od základních chování Moodle; stávající pokusy používající zastaralé chování `interactivecountback` se při aktualizaci migrují. Pokud je model nedostupný, známkování se degraduje, místo aby hlásilo chybu, takže pokus se neztratí. Protože je otázka nativním typem kvízu, výsledky se ukládají do známkového deníku jako každá jiná položka — což tým kurzu potřebuje, než může [[automated-assessment|automatické známkování]] brát jako pilot, a ne jako ukázku.

Návrh také staví rubriku tam, kde se rozhoduje o [[ai-feedback-quality|kvalitě zpětné vazby]]: do promptu, který napsal vyučující, nikoli do výchozího nastavení dodavatele. To je poctivé použití nástroje — kritéria, která lze prohlédnout a upravit — zároveň to však znamená, že stropem kvality je rubrika a vágní prompt dává vágní známkování. Instituce po něm sahají u nenáročných, častých kontrol, na kterých stojí [[formative-assessment|formativní hodnocení]], kde by člověk jinak za noc přečetl čtyřicet krátkých odpovědí.

## Pro koho je určen

Správci a vývojáři Moodle, kteří už stránku provozují, vyučující, kteří chtějí známkování s AI bez samostatné platformy nebo komerční licence, a výzkumníci, kteří potřebují kontrolovatelný hodnoticí postup ke studiu. Vyžaduje Moodle 4.5 nebo novější a přístup k API modelu — buď OpenAI, nebo Azure přes podsystém AI v Moodle, nebo samostatně hostovanou instanci Ollama přes Local AI Manager, která udržuje text studentů na lokální infrastruktuře. Plugin spravuje Marcus Green, je na tržišti pluginů Moodle a v době ověření této stránky měl 33 hvězd a 36 forků.

## Poznámky a upozornění

Open source pod GPL v3 nebo novější, ale zdarma neznamená zdarma na provoz: za API modelu někdo platí a kvalita známkování závisí na volbě modelu a návrhu promptu. Odpovědi volným textem opouštějí server Moodle, pokud se používá vzdálený poskytovatel, takže o tom, co lze odeslat, rozhoduje datová smlouva instituce; cesta se samostatně hostovanou Ollamou existuje pro stránky, které nemohou studentskou práci posílat ven. Repozitář neuvádí žádnou publikovanou studii přesnosti nebo shody, takže plugin by se neměl zavádět s předpokladem, že známkování LLM je rovnocenné lidskému — [[assessment-validity|validitu]] je třeba lokálně prokázat proti lidským známkám, než jakákoli známka získá váhu. Doprovodná chování jsou tvrdou závislostí: samotná instalace typu otázky ponechá otázky neznámkovatelné.

## Související pojmy

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
