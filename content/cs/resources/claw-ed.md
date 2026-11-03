---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Lokálně běžící AI asistent pro výuku, který z vašich vlastních kurikulárních materiálů vytváří upravitelné návrhy hodin, materiály pro studenty a slajdy s modelem, který si vyberete."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**Claw-ED** je lokálně běžící výukový asistent, který připravuje návrhy hodin z vašich vlastních kurikulárních materiálů. Učitel nahraje své zdroje, požádá o hodinu a dostane upravitelné koncepty spolu s materiály pro studenty a slajdy, vytvořené modelem, který si učitel vybere, nikoli jedním pevným dodavatelem.

## Co s ním můžete dělat

Pracovní postup vede od importu přes koncept a revizi k exportu a koncepty se berou jako výchozí bod, který učitel upravuje, nikoli jako hotové podklady. Úlohy pro hodiny se řadí do fronty a jsou obnovitelné, takže dlouhé generování, které selže, lze obnovit, místo aby se spouštělo znovu, a vytvořené výstupy lze stáhnout. Nástroj také zpřístupňuje své funkce [[agentic-ai|agentovi]] přes server MCP a umí se připojit k Google Drive, takže škola jej může zapojit do stávajícího úložiště a plánování.

Projekt je záměrně nezávislý na modelu. Dokumentuje vedle sebe lokální modely Ollama, rozpočtové trasy OpenRouter a hostované možnosti a jeho průvodce modely je datovaný, což jasně ukazuje, že doporučení jsou katalogové výchozí body, nikoli učiteli ohodnocené soudy o kvalitě.

## Poznámky a upozornění

Software je zdarma a [[open-source|open source]] pod licencí MIT pro svůj původní kód, ovšem komponenty třetích stran si zachovávají vlastní podmínky, a provoz znamená platit za vlastní inferenci modelu, pokud použijete hostovaný model. Projekt se označuje za učiteli recenzovanou betu a v README výslovně uvádí, že projití CI neprokazuje kvalitu výuky u živých modelů; to je správný způsob, jak v této oblasti číst zelenou sadu testů: ověřuje software, nikoli [[pedagogy|pedagogiku]]. Udržuje jej MacxLabs a přijímá učiteli recenzované vzorové hodiny jako příspěvky.

## Související pojmy
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
