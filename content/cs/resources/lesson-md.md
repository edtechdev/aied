---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Otevřený formát prostého textu pro blokové e-learningové lekce a k tomu agentní dovednost, která v něm píše lekce, hodnocení i celé balíky kurzů."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**LESSON.md** je otevřený formát pro blokový e-learningový obsah: soubor Markdown s YAML frontmatterem a direktivami `:::` pro text, obrázky a ověření znalostí, čitelný člověkem a zpracovatelný jakýmkoli nástrojem. Existuje proto, že obsah kurzů bývá uzamčen v jednom autorském nástroji a že [[llm|velké jazykové modely]] mohou pomoci jen s lekcemi, které skutečně umějí přečíst.

## Co s ním můžete dělat
Napište lekci v libovolném textovém editoru a importujte ji do jakéhokoli nástroje, který formát podporuje, bez kopírování a přeformátování. Interaktivní části — vědomostní testy s výběrem odpovědí s limity pokusů a zpětnou vazbou na úrovni odpovědí — se vyjadřují jako jednoduché vlastnosti, nikoli přes GUI. Doprovodný `ASSESSMENT.md` v kořeni balíku se stává bodovaným [[assessment|hodnocením]] kurzu. Projekt také dodává dovednost `lesson-md`, která naučí Claude, Codex nebo jiného [[agentic-ai|agenta]] formát, takže popis kurzu v přirozeném jazyce vrátí lekce, hodnocení a celý balík.

## Pro koho je určen
Pro návrháře výuky a tvůrce kurzů, kteří chtějí, aby jejich obsah přežil změnu nástroje, pro dodavatele e-learningu, kteří chtějí importní a exportní formát, jemuž jejich uživatelé už rozumějí, a pro každého, kdo staví psaní s asistencí AI na čitelném formátu. Mezi přispěvatele patří Dan Bashaw z LXD Integral a formát má veřejný changelog až do v1.8.

## Související pojmy

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
