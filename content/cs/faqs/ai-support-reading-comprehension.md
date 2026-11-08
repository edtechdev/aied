---
title: "Jak může AI pomoci studentům se čtením a porozuměním textu?"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-08T04:27:04-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Pokud učíte jakýkoli předmět, vybíráte četbu, upravujete texty a rozhodujete, zda je zdroj pro vaše studenty příliš obtížný. AI může pomoci s každým z těchto úkolů, ale čísla obtížnosti, která vám dává, nejsou měřením obtížnosti — jsou odhady o průměrném textu a průměrném čtenáři a čtenáři, které skutečně učíte, mohou být od průměru daleko. Tento FAQ vám řekne, kde nástroje skutečně pomáhají, kde selhávají a co s tím dělat.

## Co AI skutečně dokáže

**Najít a upravit texty ve velkém.** AI je silná v hledání zdrojů, zjednodušování slovní zásoby, generování slovníčků a přeměně pasáže na [[study-with-ai|studijního průvodce nebo shrnutí]]. Používejte ji na mechanické části přípravy četby — skenování, stanovení úrovně, vytahování klíčových termínů — a lidskou kontrolu si nechte na to, na čem záleží.

**Modelujte čtenáře, ne text.** Protože proměnné čtenáře nesou velkou část signálu o tom, jak obtížný se text zdá, nástroje, které profilují čtenáře, předpovídají vnímanou obtížnost lépe než jakýkoli vzorec. V největší studii ve znalostní bázi hodnotilo 193 německých středoškoláků 3 954 vět a modely založené na profilech (nejlepší ensemble RMSE 0,822 vs. střední baseline 1,070) porazily skóre Flesch textů, která hodnotila stejný materiál mnohem obtížněji, než studenti zažívali — 72,8 % anotací bylo snadných nebo velmi snadných ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck a Conrad, 2025]]). Praktická verze: hodnocení pasáže od několika studentů porazí štítek jakéhokoli vzorce.

## Kde AI zaostává

**Štítky obtížnosti nejsou měření.** Štítek jako „středně pokročilý“ nebo skóre Flesch popisuje povrch textu, ne zkušenost vašich studentů. Charakteristiky čtenáře — jazyk mluvený doma, sebehodnocená dovednost, dokonce gender — nesly ve výše uvedené studii více signálu než textové statistiky a shoda mezi anotátory byla nízká (Krippendorffova alfa = 0,23) právě proto, že vnímaná obtížnost se mezi čtenáři liší. Berte vzorce a štítky jako hypotézy a kalibrujte je na studentech, kteří text musí číst.

**Ani to, že AI požádáte, aby zastoupila vaše studenty, nefunguje.** Ve stejné studii ChatGPT a Claude s prompty pro hraní role nedokázaly reprodukovat vnímání obtížnosti studenty ani s označenými příklady — LLM nedokáže [[simulating-students|simulovat čtenáře]] dost dobře na to, aby za vás posoudil text ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck a Conrad, 2025]]).

**Text psaný AI se čte jinak než lidská próza.** Napříč 14 modely jazyk AI nadužívá vzácná nízko frekvenční slova a nahromaděná podstatná jména, vynechává volitelná slova a tvoří delší závislosti ve srovnání s žánrově odpovídajícím lidským psaním; efekty jsou silnější ve vícekolovém chatu než v jednokolových esejích, což autoři spojují s tlakem iterativní konverzace ([[clark-ai-generated-language-readability-2026|Clark, Martin a Mahowald, 2026]]). Generovaná vysvětlení i generované čtecí materiály nesou tento profil, takže text navržený AI může být obtížnější ke zpracování, než naznačuje jeho změřená čtecí úroveň.

**Shrnutí od AI mohou nahradit četbu.** Nástroj, který promění článek ve shrnutí, je užitečný pro třídění, ale pokud shrnutí nahradí text, studenti ztratí praxi porozumění, kvůli které úkol existoval — stejná past jako [[reducing-over-reliance|nadměrná závislost]] jinde.

## Co s tím dělat

**Než text zadáte,** získejte druhý názor mimo nástroj: prolistujte ho sami, sledujte profil prózy AI výše, pokud byl generován, a — nejsilnější důkaz — požádejte jednoho či dva studenty, ať to vyzkoušejí. Pětiminutový pilot se skutečnými čtenáři porazí jakýkoli algoritmus obtížnosti.

**Když text upravujete pomocí AI,** udržujte úpravu viditelnou a kontrolovatelnou. Původní a zjednodušené verze vedle sebe umožňují studentům (i vám) vidět, co se změnilo, a dávají vícejazyčným studentům scaffolding, který neskrývá originál ([[ai-multilingual-learners|jak AI zachází s vícejazyčnými studenty]] pokrývá rizika jazykové vhodnosti).

**Když hodnotíte čtecí nástroj nebo rozhraní,** ptejte se, zda modeluje individuálního čtenáře, nebo razítkuje jeden globální štítek. Pro čtenáře v druhém jazyce je rozdíl často celý příběh. Pro výzkumníky je otevřeným problémem měření: stránka [[reading-education|vzdělávání ve čtení]] mapuje čtyři výzkumné linie — podpora při čtení, hodnocení čtení, adaptivní text a otázka měření pod všemi třemi ([[educational-measurement|měření]] je slabý článek řetězu) — a uvádí důkazy jako slibné, ale nerovnoměrné, takže silná tvrzení o přínosech čtecího nástroje si zaslouží stejnou skepsi jako jakékoli [[checking-whether-educational-ai-works|tvrzení o učení s AI]].
