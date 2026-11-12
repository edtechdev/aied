---
title: "Jaké možnosti a otázky zvážit při zavádění nástrojů AI?"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-12T17:10:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Vedoucí katedry má tři nabídky na platformu [[intelligent-tutoring|doučování s AI]] a termín do pátku. [[teacher-role|Učitel]] chce používat bezplatný nástroj, který už používá polovina sboru. Ředitel pro informační technologie dostává otázku, zda má instituce provozovat vlastní model, a nedokáže říct, kolik by to stálo.

Je to stejná otázka na třech úrovních. Možností je méně, než naznačuje seznam dodavatelů, a problémy vydrží déle než jakýkoli produkt.

Volba by měla odpovídat rozhodnutí, které před vámi stojí. Jednotlivec rozhoduje, co do nástroje vloží. Instituce rozhoduje, kdo smí který model používat, nad jakými daty, za jakou cenu a kdo odpovídá, když se něco pokazí. Většina špatných rozhodnutí o zavádění vzniká tím, že na institucionální otázku odpovídáme individuálním nástrojem.

## Stručně

Pět pravidel pokrývá většinu. Nejprve stanovte hranici dat, protože všechno ostatní lze znovu vyjednat, ale tuhle ne. Zvolte nejmenší tvar, který stačí: bezplatné nebo externí nástroje pro pilot, hostovanou platformu, když potřebujete kontrolu nad daty bez GPU, bránu, když potřebujete kvóty a směrování, a vlastní inferenci jen tehdy, když tři předchozí selžou. Porovnejte cenu za místo a cenu za spotřebu s vlastními čísly, protože většinu využití obvykle vytváří několik náročných uživatelů. Zajistěte, aby schválená cesta byla rychlejší než neschválená, protože EDUCAUSE zjistil, že 94 % zaměstnanců a akademických pracovníků používá AI při práci, 54 % zná zásady a 56 % používá nástroje, které instituce neposkytuje. Potom předem určete, jaký důkaz vás zastaví, protože zavádění bez testu ukončení se ve výchozím stavu stane trvalým.

## Na úrovni jednotlivce

Vyučující nebo student nejprve činí rozhodnutí o datech, a teprve potom rozhodnutí o výuce. Jména studentů, údaje z individuálních vzdělávacích plánů, disciplinární poznámky a nepublikovaný výzkum vytvářejí odpovědnost, proto nejprve odstraňte identifikující údaje a ověřte, zda nástroj stále plní svůj účel. Potom si přečtěte podmínky: uchovávání, trénování na vašich vstupech a dílčí zpracovatelé obvykle bývají v dokumentu, který nikdo neotevře, a pokud odpověď nelze najít do pěti minut, považujte ji za neznámou.

Vězte, v čem je nástroj dobrý. Generovaný text je nejsilnější při tvorbě konceptů, přestavbě a shrnování a nejslabší v aritmetice, citacích a ve všem, co vyžaduje aktuální fakta. Vězte také, co vás stojí. Bezplatná úroveň je bezplatná proto, že produktem je využití, nebo proto, že se úroveň změní, a obojí je důvod mít na paměti možnost odejít.

Zbývají dvě otázky. Koho dalšího se to týká, protože nástroj, který přetváří kurz, je rozhodnutím pro studenty v něm. A zda je povolen: přečtěte si zásady, pokud nějaké existují, a pokud ne, důkazy o [[shadow-ai]] naznačují, že už zásady vytváříte ve výchozím stavu.

Přímočará heuristika: používejte schválený nástroj, když je po ruce, a když není, zapište, co jste udělali a proč. Právě tento záznam vás ochrání, bude-li úsudek později zpochybněn.

## Na úrovni instituce

Instituce jedním nákupem kupuje službu, tok dat, povinnost podpory a politický závazek. Skutečnou nabídku tvoří šest forem a většina institucí se nachází ve dvou nebo třech, aniž by o tom věděla.

Nejjednodušší začátek je bezplatný externí nástroj. AI Tutor Pro od Contact North nevyžaduje účet a Playlab umožňuje pedagogům vytvářet aplikace postavené na vlastním [[curriculum-design|kurikulu]], zatímco modely hostuje dodavatel. Oba se hodí pro pilot a jsou slabé jako konečné řešení: žádná auditní stopa, žádná kontrola kvót a podmínky, které se mohou změnit.

Nákup míst v komerčním tenantovi, ať už [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot nebo Google Gemini for Education, přináší rychlé pořízení, SSO a administrátorskou konzoli, ale volbu modelu a uchovávání dat nechává na dodavateli.

Platforma, kterou hostujete sami, udrží data blíž. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) se nasazuje do vašeho vlastního účtu AWS a pilot Vanderbilta uváděl zhruba \$3 na uživatele měsíčně při 1 300 uživatelích, z nichž polovina spotřebovala méně než \$1 na tokenech. To kupuje kontrolu nad daty bez GPU.

Brána nad smíšenými poskytovateli staví jedny vstupní dveře před několik z nich. Nese kvóty, SSO, logování a regionální směrování; Fontys provozoval jednu pro 300 uživatelů v rámci měsíčního limitu \$500, který nebyl nikdy překročen, a [MindRouter](/aied/resources/mindrouter/) přidává plánování vážené rolemi a měření energie.

Vlastní inference je nejdražší forma a nejnezávislejší. Dvě služby Purdue dosáhly více než 1 000 uživatelů na 10+ modelech [[open-source]] za přibližně \$100 000 v hardwaru, ještě před náklady na personál. Odpovídá regulátorovi, aniž by žádala dodavatele o svolení.

Poslední formou je AI v nástrojích, které už provozujete: typ otázky v Moodle, AI partner diskusní platformy, nástroj pro zpětnou vazbu k esejím. Nízká náročnost a změna kurz po kurzu, s málem naučeného v centru.

## Problémy, které nezmizí

[[privacy|Ochrana dat]] je první. Záleží na tom, jaký záznam nyní existuje a dříve neexistoval, kde sídlí a kdo jej může získat. Nástroj, který obdrží seznam třídy, vytvořil institucionální záznam, ať smlouva říká cokoli.

Identita a přístup následují. Cokoli používané ve velkém potřebuje SSO, přístup podle rolí a ukončení přístupu při odchodu, a nástroj, který nedokáže zrušit přístup odcházejícímu zaměstnanci, zanechá aktivní účet s vašimi daty.

Náklady závisí na tom, jak se cena počítá. Cena za místo odměňuje počet lidí a cena za spotřebu odměňuje využití. Protože malá část uživatelů obvykle vytváří většinu tokenů, cena za místo vypadá levně, dokud nároční uživatelé neodejdou jinam.

Měření obvykle chybí. EDUCAUSE zjistil, že 92 % má strategii AI související s prací a 13 % měří návratnost investice. Pokud nedokážete říct, co nástroj nahradil, nemůžete obhájit obnovení.

[[equity-in-ai-education|Spravedlnost]] a přístupnost patří do zadávání zakázek, ne do pozdější opravy. Nástroj, který vyžaduje rychlé připojení, placenou úroveň nebo plynulou angličtinu, rozkládá svůj přínos nerovnoměrně.

[[academic-integrity|Akademická integrita]] mění to, co hodnocení měří. Když nástroj dokáže úkol splnit, úkolem, který je třeba přepracovat, je zadání.

Personál a závislost na dodavateli jsou stejně důležité jako cena. Každá z výše uvedených forem kromě bezplatné potřebuje vlastníka a obvyklou chybou je koupit čtvrtou nebo pátou formu a obsadit ji někým, kdo už byl zaneprázdněn. Ptejte se, co se stane při obnovení, změně ceny a vyřazení modelu; formy brány existují proto, aby odpovědí byla změna směrování, nikoli migrace.

## Jak vypadá dobrý první rok

Zvolte dva nebo tři ukazatele dřív, než se cokoli spustí: kdo to používal, k čemu, kolik to stálo na aktivního uživatele a co se změnilo v práci. Pilot, který tato čísla nedokáže doložit, je ukázka s rozpočtem.

Současně zkontrolujte okrajové podmínky. Pokud se nástroj dotkl studentských záznamů, odpovídal tok dat tomu, co jste řekli úřadu pro ochranu soukromí? Pokud využití zůstalo nezměřené, bylo to proto, že nástroj nemohl reportovat, nebo proto, že se nikdo nezeptal?

Udržujte schválenou cestu krátkou. Čísla EDUCAUSE naznačují, že lidé obcházejí správu proto, že schválená cesta trvá déle než úkol. Brána s kartou modelu a přístupem tentýž den je nástrojem správy stejně jako pohodlím pro IT.

## Časté chyby

Koupě platformy dřív, než pojmenujete problém, přinese statistiky využití a málo jiného. Považovat „bezplatné“ za strategii funguje v pilotu a selhává jako infrastruktura. Lokální model mění to, koho lze předvolat k soudu; nerozhoduje o tom, zda se prompty uchovávají. Měření spokojenosti místo účinku mění „učitelům se to líbilo“ ve zjištění, kterým není. A zásady zveřejněné bez schůdné cesty popisují preference, nikoli pravidla.
